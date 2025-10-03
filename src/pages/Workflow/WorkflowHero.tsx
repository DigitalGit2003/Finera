import React, { useState } from 'react';
import { ChevronRightIcon, CheckIcon } from '@heroicons/react/24/outline';

interface WorkflowStep {
  id: number;
  title: string;
  description: string;
  isCompleted?: boolean;
}

interface WorkflowProps {
  steps?: WorkflowStep[];
  onStepComplete?: (stepId: number) => void;
  allowSkipping?: boolean;
}

const WorkflowComponent: React.FC<WorkflowProps> = ({ 
  steps: propSteps, 
  onStepComplete,
  allowSkipping = false 
}) => {
  const defaultSteps: WorkflowStep[] = [
    {
      id: 1,
      title: "Initial consultation",
      description: "We begin with an initial consultation with the client to understand their business, their accounting needs, and their pain points. This helps us determine whether we are the right fit for the client and whether we can provide the services they require.",
      isCompleted: false
    },
    {
      id: 2,
      title: "Proposal and engagement letter",
      description: "If we determine that we are a good fit for the client, we will provide a proposal and engagement letter that outlines the scope of work, the timeline, the fees, and the terms and conditions of our engagement. This helps ensure that both parties are on the same page before we begin work.",
      isCompleted: false
    },
    {
      id: 3,
      title: "Data collection",
      description: "Once the client has signed the engagement letter, we will begin the process of collecting data from the client. This may include financial statements, bank statements, invoices, receipts, and other relevant documents. We may use a secure file-sharing platform to ensure that all data is collected and stored securely.",
      isCompleted: false
    },
    {
      id: 4,
      title: "Onboarding",
      description: "Once we have collected all the necessary data, we will onboard the client onto our accounting system. This may include setting up accounting software, chart of accounts, bank feeds, and other relevant information. We will also ensure that all data is accurately entered into the system.",
      isCompleted: false
    },
    {
      id: 5,
      title: "Ongoing communication",
      description: "Throughout the engagement, we will maintain ongoing communication with the client to ensure that their accounting needs are being met. We may provide regular reports and updates on financial performance, and we will be available to answer any questions or concerns the client may have.",
      isCompleted: false
    }
  ];

  // Remove all stateful logic for a static workflow
  const steps = propSteps || defaultSteps;

  return (
  <div id="workflow-section" className="max-w-4xl mx-auto p-6 bg-white">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">
          How We Work?
        </h1>
        <p className="text-gray-600">Follow our structured process to ensure quality service delivery</p>
      </div>

      {/* ...removed progress bar for static workflow... */}

      {/* Steps Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-300" />
        {steps.map((step, index) => (
          <div key={step.id} className="relative flex items-start mb-8 last:mb-0">
            {/* Step Circle */}
            <div 
              className="relative z-10 flex items-center justify-center w-16 h-16 rounded-full border-4 bg-white border-blue-400 text-gray-800 font-bold shadow"
            >
              <span className="text-lg font-bold">{step.id}</span>
            </div>
            {/* Step Content */}
            <div className="ml-6 flex-1">
              <div className="bg-gray-50 rounded-lg border-2 border-gray-200 p-6">
                <h3 className="text-xl font-semibold mb-3 capitalize text-gray-900">
                  {step.title}
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {step.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ...removed navigation controls for static workflow... */}
    </div>
  );
};

export default WorkflowComponent;
