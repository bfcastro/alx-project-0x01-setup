import React from "react";
import { UserProps } from "@/interfaces";

interface UserCardProps {
  user: UserProps;
}

const UserCard: React.FC<UserCardProps> = ({ user }) => {
  return (
    <div className="border rounded-lg p-4 shadow-md">
      <h2 className="text-lg font-bold">{user.name}</h2>
      <p className="text-sm text-gray-600">{user.email}</p>
      <p className="text-sm">{user.phone}</p>
      <p className="text-sm text-blue-600">{user.website}</p>
    </div>
  );
};

export default UserCard;