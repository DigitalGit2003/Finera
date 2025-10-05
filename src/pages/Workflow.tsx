import React from 'react';
import WorkflowHero from './Workflow/WorkflowHero';
import WorkMethodologyComponent from './Workflow/WorkMethodologyComponent';
import WorkflowImage from './Workflow/WorkflowImage';

const Workflow = () => {
  // Scroll to anchor if hash is present or changes
  React.useEffect(() => {
    const scrollToHash = () => {
      let el = null;
      if (window.location.hash === '#work-methodology') {
        el = document.getElementById('work-methodology');
      } else if (window.location.hash === '#workflow-section') {
        el = document.getElementById('workflow-section');
      }
      if (el) {
        // Offset for sticky header (adjust as needed)
        const yOffset = -80;
        const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    };
    scrollToHash();
    window.addEventListener('hashchange', scrollToHash);
    return () => {
      window.removeEventListener('hashchange', scrollToHash);
    };
  }, []);

  return (
    <div>
      <WorkflowHero />
      <WorkMethodologyComponent />
      <WorkflowImage />
    </div>
  );
};

export default Workflow;
