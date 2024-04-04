import './index.scss';

import React from 'react';

function Content({ children }: { children: React.ReactNode }) {
  return (
    <div className='div-content'>
      <div className='div-content-children'>
        <div className='content-container'>{children}</div>
      </div>
    </div>
  );
}

export default Content;
