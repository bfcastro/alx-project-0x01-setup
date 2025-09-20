import React, { useState } from "react";
import { UserData, UserModalProps } from "@/interfaces";

const UserModal: React.FC<UserModalProps> = ({ onClose, onSubmit }) => {
  const [form, setForm] = useState<Partial<UserData>>({
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    if (!form.name || !form.email) return alert("Name and email are required!");

    const newUser: UserData = {
      id: Date.now(), // generate a fake id
      name: form.name!,
      username: form.username || "",
      email: form.email!,
      phone: form.phone || "",
      website: form.website || "",
      address: {
        street: "",
        suite: "",
        city: "",
        zipcode: "",
        geo: { lat: "", lng: "" },
      },
      company: { name: "", catchPhrase: "", bs: "" },
    };

    onSubmit(newUser);
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
      <div className="bg-white p-6 rounded-xl w-full max-w-md shadow-lg">
        <h2 className="text-xl font-bold mb-4">Add New User</h2>

        <input
          type="text"
          name="name"
          placeholder="Name"
          value={form.name || ""}
          onChange={handleChange}
          className="w-full mb-2 p-2 border rounded"
        />

        <input
          type="text"
          name="username"
          placeholder="Username"
          value={form.username || ""}
          onChange={handleChange}
          className="w-full mb-2 p-2 border rounded"
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email || ""}
          onChange={handleChange}
          className="w-full mb-2 p-2 border rounded"
        />

        <input
          type="text"
          name="phone"
          placeholder="Phone"
          value={form.phone || ""}
          onChange={handleChange}
          className="w-full mb-2 p-2 border rounded"
        />

        <input
          type="text"
          name="website"
          placeholder="Website"
          value={form.website || ""}
          onChange={handleChange}
          className="w-full mb-4 p-2 border rounded"
        />

        <div className="flex justify-end gap-2">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-400 text-white rounded"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="px-4 py-2 bg-blue-600 text-white rounded"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserModal;