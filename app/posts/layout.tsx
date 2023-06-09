import React, { ReactNode } from 'react';

type LayoutProps = {
  children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      {/* Add your layout structure here */}
      <header>
        <h1>a blog | posts</h1>
        {/* Add any header content here */}
      </header>
      
      <main>{children}</main>
      
      <footer>
        {/* Add any footer content here */}
        <p>&copy; 2023 a blog by adam</p>
      </footer>
    </div>
  );
};

export default Layout;
