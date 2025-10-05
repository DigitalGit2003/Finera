import React from 'react'

const WorkflowImage = () => {
  return (
    <div className="flex justify-center py-16">
        <img
          src="/workflow.png"
          alt="Workflow Visual"
          className="rounded-xl shadow-lg max-w-full h-auto"
          style={{ maxWidth: 600 }}
        />
    </div>
  )
}

export default WorkflowImage
