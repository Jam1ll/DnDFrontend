import { Link } from "react-router-dom";

interface ManualElementProps {
  name: string;
}

export const ManualElement = ({ name }: ManualElementProps) => {
  return (
    <li className="relative w-full transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 rounded-md">
      <Link to="#">
        <img
          className="h-64 w-full object-cover rounded-md"
          src="https://images6.alphacoders.com/601/601698.jpg"
          alt="Random image"
        />
        <div className="absolute inset-0 bg-gray-700 opacity-60 rounded-md"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="text-white text-3xl font-bold">{name}</h2>
        </div>
      </Link>
    </li>
  );
};
