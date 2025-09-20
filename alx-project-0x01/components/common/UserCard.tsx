import React from "react";
import { UserProps } from "../../interfaces";

const UserCard: React.FC<UserProps> = ({ name, username, email }) => {
  return (
    <div className="border rounded-lg shadow-md p-4 bg-white">
      <h2 className="text-xl font-semibold">{name}</h2>
      <p className="text-sm text-gray-600">@{username}</p>
      <p className="mt-2 text-gray-800">{email}</p>
    </div>
  );
};

export default UserCard;