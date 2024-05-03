import { CategoryProps } from "../../types/Category.types";

export default function CategoryLabel({
  name,
  activeCategory,
  setActiveCategory,
}: CategoryProps) {
  return (
    <div
      className={`w-fit border border-gray-300 rounded-lg px-6 py-1.5 text-sm text-slate-600 font-medium flex justify-center items-center cursor-pointer ${
        activeCategory === name ? "text-white bg-black boreder-0" : ""
      }`}
      onClick={() => {
        setActiveCategory(name);
      }}
    >
      {name}
    </div>
  );
}
