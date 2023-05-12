import React, { ReactNode } from 'react';

type LayoutProps = {
  children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      {/* Add your layout structure here */}
      <header>
        <h1>a blog | wooden</h1>
        {/* Add any header content here */}
      </header>
      
      <main>{children}</main>
      
      <footer>
        {/* Add any footer content here */}
        <p>&copy; 2023 My App</p>
      </footer>
    </div>
  );
};

export default Layout;
