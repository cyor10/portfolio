import React from 'react'
import { toolStack } from '../../data/stackData'
import StackCard from './StackCard'

export default function ToolStack() {
    return (
        <div className='tool-stack-container'>
            {toolStack.map((tool, index) => (
                <div key={index} className='w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 p-4'>
                    <StackCard {...tool} />
                </div>
            ))}
        </div>
    )
}