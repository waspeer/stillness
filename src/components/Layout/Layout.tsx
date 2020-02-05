import React from 'react';

interface Props {
  children: JSX.Element | JSX.Element[];
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <main>{children}</main>
    </>
  );
};

export default Layout;
