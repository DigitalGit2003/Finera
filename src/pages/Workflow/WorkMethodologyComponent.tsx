import React from 'react';
import { CloudIcon, ComputerDesktopIcon, ShareIcon, ShieldCheckIcon, ArrowPathIcon, ServerIcon, ClockIcon, LockClosedIcon } from '@heroicons/react/24/outline';

interface MethodStep {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

interface WorkMethod {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  steps: MethodStep[];
  highlight?: string;
}

const WorkMethodologyComponent: React.FC = () => {
  const methods: WorkMethod[] = [
    {
      id: 'cloud',
      title: 'Method 1: Collaborative Online/Cloud Accounting',
      subtitle: 'Modern cloud-based approach',
      description: 'This modern approach leverages cloud technology for maximum flexibility and real-time collaboration.',
      steps: [
        {
          title: 'Client Data Sharing',
          description: 'You securely provide your documents and working files by uploading them to a shared drive (e.g., Google Drive, OneDrive) or by sending the data via email.',
          icon: <ShareIcon className="w-5 h-5" />
        },
        {
          title: 'Secure Processing',
          description: 'Our expert team updates your accounts directly within cloud-based software using secured access protocols.',
          icon: <ShieldCheckIcon className="w-5 h-5" />
        },
        {
          title: 'Delivery',
          description: 'We share the updated accounts and working files with you promptly, either through email or by uploading them to the cloud or your designated communication channel.',
          icon: <ArrowPathIcon className="w-5 h-5" />
        }
      ]
    },
    {
      id: 'remote',
      title: 'Method 2: On-Premise Remote Desktop Accounting',
      subtitle: 'Maximum data control and security',
      description: 'This option is designed for clients who prefer to keep their accounting data strictly on their own systems for maximum control.',
      steps: [
        {
          title: 'Client Data Storage',
          description: 'You keep your documents and working files on your local machine or private shared server.',
          icon: <ServerIcon className="w-5 h-5" />
        },
        {
          title: 'Remote Access & Update',
          description: 'Our team gains remote access to your desktop or shared server to perform all necessary account updates.',
          icon: <ComputerDesktopIcon className="w-5 h-5" />
        },
        {
          title: 'Data Security Guarantee',
          description: 'The key feature of this method is our commitment that no data is downloaded into our internal system, ensuring your financial information stays exactly where you want it.',
          icon: <ShieldCheckIcon className="w-5 h-5" />
        }
      ]
    }
  ];

  const commonBenefits = [
    {
      title: 'Real-time query sheet tracker',
      description: 'Stay up-to-date on the progress of your accounts and easily track and respond to any questions.',
      icon: <ClockIcon className="w-6 h-6" />
    },
    {
      title: 'Secured Access',
      description: 'Guaranteeing the protection of your sensitive financial data throughout the process.',
      icon: <LockClosedIcon className="w-6 h-6" />
    }
  ];

  return (
  <section id="work-methodology" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Work Methodology
          </h2>
          <h3 className="text-xl text-blue-600 font-semibold mb-6">
            Choose Your Seamless Finera Global Accounting Workflow
          </h3>
          <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We understand that every business has different needs for data control and accessibility. 
            That's why Finera Global offers two highly efficient and secure accounting workflows to perfectly match your preferences.
          </p>
        </div>

        {/* Methods Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {methods.map((method, index) => (
            <div key={method.id} className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300">
              {/* Method Header */}
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-center gap-3 mb-3">
                  {method.id === 'cloud' ? (
                    <CloudIcon className="w-8 h-8 text-blue-600" />
                  ) : (
                    <ComputerDesktopIcon className="w-8 h-8 text-blue-600" />
                  )}
                  <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                    {method.subtitle}
                  </span>
                </div>
                
                <h4 className="text-xl font-bold text-gray-900 mb-3">
                  {method.title}
                </h4>
                
                <p className="text-gray-600 leading-relaxed">
                  {method.description}
                </p>
              </div>

              {/* Method Steps */}
              <div className="p-6">
                <div className="space-y-4">
                  {method.steps.map((step, stepIndex) => (
                    <div key={stepIndex} className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                          {step.icon || <span className="text-blue-600 font-bold">{stepIndex + 1}</span>}
                        </div>
                      </div>
                      
                      <div className="flex-1">
                        <h5 className="font-semibold text-gray-900 mb-2">
                          {step.title}
                        </h5>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Common Benefits Section */}
        <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-8 mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            In Both Methods, You Benefit From:
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {commonBenefits.map((benefit, index) => (
              <div key={index} className="flex gap-4 p-4 bg-gray-50 rounded-lg">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <div className="text-blue-600">
                      {benefit.icon}
                    </div>
                  </div>
                </div>
                
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    {benefit.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="bg-blue-50 rounded-lg p-6 max-w-3xl mx-auto">
            <p className="text-gray-700 mb-4">
              <strong>Not sure which method is right for you?</strong>
            </p>
            <p className="text-gray-600">
              Our team can help you choose the perfect workflow solution based on your specific business requirements, 
              data security preferences, and operational needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkMethodologyComponent;
