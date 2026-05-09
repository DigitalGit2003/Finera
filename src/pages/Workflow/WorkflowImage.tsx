import React from 'react'

const WorkflowImage = () => {
  return (
    <div className="flex justify-center py-8 md:py-16 px-3 sm:px-4">
        <img
          src="/workflow.png"
          alt="Workflow Visual"
          className="w-full max-w-5xl h-auto rounded-xl shadow-lg object-contain"
        />
    </div>
  )
}

export default WorkflowImage
