import React from 'react';

const Container = ({ children, classname='' }) => {
  return (
    <div className={`px-[40px] md:px-[60px] xl:px-[120px] 2xl:px-[200px] ${classname}`}>
      {children}
    </div>
  )
}

export default Container;
