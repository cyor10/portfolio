import React from 'react'
import { techStack } from '../../data/stackData'
import StackCard from './StackCard';

export default function TechStack() {
    return (
        <div className='tech-stack-container'>
            {techStack.map((tech, index) => (
                <div key={index} className='w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 p-4'>
                    <StackCard {...tech} />
                </div>
            ))}
        </div>
    );
};
