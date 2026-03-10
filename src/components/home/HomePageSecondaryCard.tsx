export const HomePageSecondaryCard = () => {
  return (
    <div className="flex flex-row-reverse h-full w-full bg-gray-900 overflow-hidden shadow-md">
      {/* TEXTO */}
      <div className="p-4 flex flex-col justify-center items-center text-gray-300">
        <span className="text-lg font-medium tracking-tight text-white mb-2">
          LOREM IPSUM
        </span>
        <p className="text-light font-light text-gray-400">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ultrices
          arcu dui.
        </p>
      </div>
    </div>
  );
};
