import React from 'react';
const PostCard: React.FC = () => {
    return (
        <div className="border rounded p-4 shadow">
          <h2 className="text-xl font-semibold">Post Title</h2>
          <p className="text-gray-600">This is a sample post description.</p>
        </div>
      );
    };
    
    export default PostCard;