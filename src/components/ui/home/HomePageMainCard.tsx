import hp_mainCard from "../../../assets/images/hp_mainCard.jpg";

export const HomePageMainCard = () => {
  return (
    <div className="flex flex-col h-full w-full bg-gray-900 border overflow-hidden shadow-lg">
      {/* IMAGEN */}
      <div className="h-2/3 w-full relative">
        <img
          className="w-full h-full object-cover"
          src={hp_mainCard}
          alt="home_page_main_card"
        />
      </div>

      {/* CONTENIDO */}
      <div className="p-6 text-gray-300 flex flex-col h-1/3">
        <span className="text-2xl font-light tracking-tight text-white mb-2">
          BIENVENIDO A D&D MANAGER
        </span>
        <p className="text-sm font-light text-gray-400">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ultrices
          arcu dui, ac condimentum lorem facilisis sed. Nam elementum varius
          elit, sed malesuada sapien consectetur nec.
        </p>
      </div>
    </div>
  );
};
