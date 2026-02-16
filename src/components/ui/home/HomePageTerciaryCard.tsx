import hp_mainCard from "../../../assets/images/hp_mainCard.jpg";

export const HomePageTerciaryCard = () => {
  return (
    <div className="flex flex-row h-full w-full bg-gray-900 overflow-hidden shadow-md">
      {/* IMAGEN */}
      <div className="w-1/3 h-full">
        <img
          className="w-full h-full object-cover"
          src={hp_mainCard}
          alt="tertiary_card"
        />
      </div>
      {/* TEXTO */}
      <div className="w-2/3 p-4 flex flex-col justify-center text-gray-300">
        <span className="text-lg font-medium tracking-tight text-white mb-2">
          LOREM IPSUM
        </span>
        <p className="text-light font-light text-gray-400 line-clamp-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ultrices
          arcu dui.
        </p>
      </div>
    </div>
  );
};
