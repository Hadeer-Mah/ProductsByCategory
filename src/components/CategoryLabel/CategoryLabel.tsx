import { CategoryProps } from "../../types/Category.types";

export default function CategoryLabel({
  name,
  activeCategory,
  setActiveCategory,
}: CategoryProps) {
  return (
    <div
      className={`w-fit border border-gray-300 rounded-md px-6 py-1.5 text-sm text-slate-600 font-medium flex justify-center items-center cursor-pointer hover:bg-black hover:text-white hover:border-transparent transition duration-500 ${
        activeCategory === name ? "text-white bg-black border-transparent" : ""
      }`}
      onClick={() => {
        setActiveCategory(name);
      }}
    >
      {name?.toUpperCase()}
    </div>
  );
}
