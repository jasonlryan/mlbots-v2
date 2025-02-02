import React from "react";
import { Link, useLocation } from "react-router-dom";

interface NavigationProps {
  pages: Array<{
    path: string;
    title: string;
  }>;
}

export const Navigation: React.FC<NavigationProps> = ({ pages }) => {
  const location = useLocation();
  const currentPath = location.pathname;
  const isToolPage = currentPath.startsWith("/tools/");

  // Find current page index
  const currentIndex = pages.findIndex((page) => page.path === currentPath);

  // Determine if we should show prev/next links
  const showPrev = isToolPage && currentIndex > 0;
  const showNext = isToolPage && currentIndex < pages.length - 1;

  return (
    <nav className="navigation">
      <div>
        <div className="nav-left">
          <Link to="/" className="nav-home">
            <img
              src="/images/medialab-logo.png"
              alt="Medialab Logo"
              className="nav-logo"
            />
          </Link>
          {isToolPage && (
            <Link to="/" className="nav-index">
              <span className="hamburger">≡</span>
              Tools Index
            </Link>
          )}
        </div>

        {isToolPage && (
          <div className="nav-controls">
            {showPrev && (
              <Link
                to={pages[currentIndex - 1].path}
                className="nav-arrow"
                title={pages[currentIndex - 1].title}
              >
                ←
              </Link>
            )}
            {showNext && (
              <Link
                to={pages[currentIndex + 1].path}
                className="nav-arrow"
                title={pages[currentIndex + 1].title}
              >
                →
              </Link>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};
