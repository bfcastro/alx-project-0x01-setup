import React from 'react';
const Footer: React.FC = () => {
    return (
        <footer className="w-full p-4 bg-gray-800 text-white text-center mt-8">
      <p>&copy; {new Date().getFullYear()} My App. All rights reserved.</p>
    </footer>
      );
    };
    export default Footer;