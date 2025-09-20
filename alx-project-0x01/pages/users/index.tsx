import Header from "@/components/layout/Header";

const Users: React.FC = () => {
  return (
    <div>
      <Header />
      <main className="p-6">
        <h1 className="text-3xl font-bold">Users Page</h1>
        <p className="mt-4">Here’s where all users will appear.</p>
      </main>
    </div>
  );
}
export default Users;