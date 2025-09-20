import React from 'react';
const Button: React.FC<{ title: string }> = ({ title }) => {
    return (
      <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        {title}
      </button>
    );
  };

  export default Button;