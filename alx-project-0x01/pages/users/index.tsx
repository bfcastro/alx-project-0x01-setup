import React, { useState } from "react";
import UserCard from "@/components/common/UserCard";
import UserModal from "@/components/common/UserModal";
import { UserProps, UserData } from "@/interfaces";

interface UsersPageProps {
  posts: UserProps[];
}

const Users: React.FC<UsersPageProps> = ({ posts }) => {
  const [users, setUsers] = useState<UserProps[]>(posts);
  const [isModalOpen, setModalOpen] = useState(false);

  const handleAddUser = (newUser: UserData) => {
    setUsers((prev) => [...prev, newUser]);
  };

  return (
    <div className="p-6">
      <div className="flex justify-between mb-4">
        <h1 className="text-2xl font-semibold">Users</h1>
        <button
          onClick={() => setModalOpen(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Add User
        </button>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>

      {isModalOpen && (
        <UserModal onClose={() => setModalOpen(false)} onSubmit={handleAddUser} />
      )}
    </div>
  );
};

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const posts = await response.json();

  return {
    props: {
      posts,
    },
  };
}

export default Users;