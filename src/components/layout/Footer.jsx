
    import React from 'react';
    import { Link } from 'react-router-dom';

    const Footer = () => {
      const currentYear = new Date().getFullYear();

      return (
        <footer className="border-t bg-background">
          <div className="container py-8 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
            <div className="mb-4 md:mb-0">
              <p className="text-sm text-muted-foreground">
                &copy; {currentYear} BUETIAN TUTOR. All rights reserved.
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                Empowering Education, Powered by BUET Excellence
              </p>
            </div>
            <div className="flex space-x-4">
              <Link to="/about-creator" className="text-sm text-muted-foreground hover:text-primary">About Creator</Link>
              <Link to="/contribute" className="text-sm text-muted-foreground hover:text-primary">Contribute</Link>
              {/* Add other footer links */}
            </div>
          </div>
        </footer>
      );
    };

    export default Footer;
  