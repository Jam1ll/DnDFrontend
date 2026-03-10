import { useNavigate } from "react-router-dom";
import type { SubRaceResponseDTO } from "../../../api/manual/race/subRace/subRaceService";
import { DeleteSubRaceButton } from "./buttons/DeleteSubRaceButton";

export const SubRaceElement = ({
  id,
  name,
  description,
}: SubRaceResponseDTO) => {
  const navigate = useNavigate();

  return (
    <li className="w-full h-full list-none group">
      <div
        onClick={() => navigate(`/subrace-details?q=${id}`)}
        className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-6 pb-6 pt-40 md:pt-56 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-1 w-full h-full cursor-pointer"
      >
        <div className="absolute top-4 right-4 z-20">
          <DeleteSubRaceButton id={id} />
        </div>

        <img
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          src="https://cdn.legit.ng/images/1120/7c39d7d170c73ee8.jpeg?v=1"
          alt={`${name}`}
        />

        <div className="absolute inset-0 bg-linear-to-t from-gray-900 via-gray-900/80 to-transparent z-0"></div>

        <h4 className="relative z-10 mt-3 text-2xl font-bold text-white transition-colors duration-300 group-hover:text-blue-400">
          {name}
        </h4>

        <p className="relative z-10 mt-2 text-sm text-gray-300 line-clamp-2 wrap-break-word leading-relaxed">
          {description}
        </p>

        <span className="relative z-10 mt-4 text-xs font-semibold text-blue-400 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
          Ver detalles &rarr;
        </span>
      </div>
    </li>
  );
};
