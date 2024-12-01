import React, { forwardRef } from 'react';

const Page = forwardRef((props, ref) => {
  return (
    <div className="demoPage bg-white" ref={ref}>
      {/* <h1>Page Header</h1> */}
      <div className="h-full">{props.children}</div>
      {/* <p>Page number: {props.number}</p> */}
    </div>
  );
});

// Tambahkan displayName untuk komponen
Page.displayName = 'Page';

export default Page;
