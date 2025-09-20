import React from "react";
import { UserProps } from "../../interfaces";

interface UserCardProps {
  user: UserProps;
}

const UserCard: React.FC<UserCardProps> = ({ user }) => {
  return (
    <div className="p-4 border rounded-lg shadow-md bg-white">
      <h2 className="text-xl font-semibold">{user.name}</h2>
      <p className="text-gray-600">{user.email}</p>
      {user.username && <p className="text-gray-500">@{user.username}</p>}
      {user.phone && <p className="text-gray-500">📞 {user.phone}</p>}
      {user.website && (
        <a
          href={`https://${user.website}`}
          target="_blank"
          rel="noreferrer"
          className="text-blue-500 underline"
        >
          {user.website}
        </a>
      )}
    </div>
  );
};

export default UserCard;