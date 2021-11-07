import React from 'react';

import config from '../config/index.json';

const Cta = () => {
  const { callToAction } = config;
  return (
    <div className="mt-5 sm:mt-8 mx-auto mb-8 sm:flex sm:justify-center lg:justify-start">
      <div className="rounded-md shadow">
        <a
          href=""
          className={`w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-background bg-primary hover:bg-border hover:text-primary md:py-4 md:text-lg md:px-10`}
        >
          {callToAction.text}
        </a>
      </div>
    </div>
  );
};

export default Cta;
