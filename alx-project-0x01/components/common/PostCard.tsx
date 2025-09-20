import { PostProps } from "@/interfaces";

const PostCard: React.FC<PostProps> = ({ id, title, body }) => {
  return (
    <div className="border rounded-lg shadow-md p-4 bg-white hover:shadow-lg transition">
      <h2 className="font-bold text-xl mb-2">
        {id}. {title}
      </h2>
      <p className="text-gray-600">{body}</p>
    </div>
  );
};

export default PostCard;