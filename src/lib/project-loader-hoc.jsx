import React from 'react';
import xhr from 'xhr';

import log from './log';
import emptyProject from './empty-project.json';

class ProjectLoaderConstructor {
    constructor () {
        this.emptyProject = emptyProject;
        this.loadEmptyProject(body => {
            this.emptyProject = body;
        });
    }

    get DEFAULT_PROJECT_DATA () {
        return this.emptyProject;
    }

    load (id, callback) {
        callback = callback || (err => log.error(err));
        xhr({
            uri: `https://projects.scratch.mit.edu/internalapi/project/${id}/get/`
        }, (err, res, body) => {
            if (err) return callback(err);
            callback(null, body);
        });
    }
    loadEmptyProject (callback) {
        callback = callback || (err => log.error(err));
        xhr({
            uri: `https://static.mmcode.org/remote_empty_project.json?origin=${encodeURIComponent(window.location.origin)}`,
            json: true,
            useXDR: true
        }, (err, res, body) => {
            if (!err && body) {
                callback(body);
            }
        });
    }
}

const ProjectLoader = new ProjectLoaderConstructor();

/* Higher Order Component to provide behavior for loading projects by id from
 * the window's hash (#this part in the url)
 * @param {React.Component} WrappedComponent component to receive projectData prop
 * @returns {React.Component} component with project loading behavior
 */
const ProjectLoaderHOC = function (WrappedComponent) {
    class ProjectLoaderComponent extends React.Component {
        constructor (props) {
            super(props);
            this.fetchProjectId = this.fetchProjectId.bind(this);
            this.updateProject = this.updateProject.bind(this);
            this.state = {
                projectId: null,
                projectData: this.fetchProjectId().length ? null : JSON.stringify(ProjectLoader.DEFAULT_PROJECT_DATA)
            };
            if (this.fetchProjectId().length < 1) {
                ProjectLoader.loadEmptyProject(body => {
                    this.setState({projectData: JSON.stringify(body)});
                });
            }
        }
        componentDidMount () {
            window.addEventListener('hashchange', this.updateProject);
            this.updateProject();
        }
        componentWillUnmount () {
            window.removeEventListener('hashchange', this.updateProject);
        }
        fetchProjectId () {
            return window.location.hash.substring(1);
        }
        updateProject () {
            const projectId = this.fetchProjectId();
            if (projectId !== this.state.projectId) {
                if (projectId.length < 1) {
                    ProjectLoader.loadEmptyProject(body => {
                        this.setState({projectData: JSON.stringify(body)});
                    });
                    return this.setState({
                        projectId: projectId,
                        projectData: JSON.stringify(ProjectLoader.DEFAULT_PROJECT_DATA)
                    });
                }
                ProjectLoader.load(projectId, (err, body) => {
                    if (err) return log.error(err);
                    this.setState({projectData: body});
                });
                this.setState({projectId: projectId});
            }
        }
        render () {
            if (!this.state.projectData) return null;
            return (
                <WrappedComponent
                    projectData={this.state.projectData}
                    {...this.props}
                />
            );
        }
    }

    return ProjectLoaderComponent;
};


export {
    ProjectLoaderHOC as default,
    ProjectLoader
};
