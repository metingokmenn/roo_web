import React from 'react';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="app-layout">
      <header className="app-header">
        {/* Add your header content here */}
      </header>
      <main className="app-main">
        {children}
      </main>
      <footer className="app-footer">
        {/* Add your footer content here */}
      </footer>
    </div>
  );
};

export default MainLayout; 