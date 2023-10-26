import React from 'react'
import Project from './Project'
import projectsData from './projectsData'

export default function Projects() {
    return (
        <div>
        <div className='min-h-screen flex flex-wrap items-center justify-center bg-deepSkyBlue'>
            {projectsData.map((project) => (
                <Project key={project.id} project={project} />
            ))}
        </div>
        </div>
    );
};
