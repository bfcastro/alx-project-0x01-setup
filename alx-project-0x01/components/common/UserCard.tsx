import React from "react";
import { UserProps } from "@/interfaces";

interface Props {
  user: UserProps;
}

const UserCard: React.FC<Props> = ({ user }) => {
  return (
    <div className="border rounded-lg shadow-md p-4 bg-white hover:shadow-lg transition">
      <h2 className="text-xl font-bold text-blue-600">{user.name}</h2>
      <p className="text-gray-700">@{user.username}</p>
      <p className="text-sm text-gray-500">{user.email}</p>

      <div className="mt-3">
        <p className="text-gray-600">
           {user.address.city}, {user.address.street}
        </p>
        <p className="text-gray-600"> {user.phone}</p>
        <p className="text-gray-600"> {user.website}</p>
      </div>

      <div className="mt-3">
        <p className="font-semibold">{user.company.name}</p>
        <p className="text-sm italic text-gray-500">"{user.company.catchPhrase}"</p>
      </div>
    </div>
  );
};

export default UserCard;