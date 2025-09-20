import React from "react";
import Button from "@/components/common/Button";
const Users: React.FC = () => {
    return (
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-4">Users</h1>
          <Button title="Add User" />
        </div>
      );
    };
export default Users;