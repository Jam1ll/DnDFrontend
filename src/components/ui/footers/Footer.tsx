export const Footer = () => {
  return (
    <footer className="text-gray-500 bg-neutral-primary-soft shadow-xs">
      <hr className="bg-gray-500 h-px border-0"></hr>
      <div className="w-full mx-auto max-w-7-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-body sm:text-center">
          🄯 2026{" "}
          <a href="https://flowbite.com/" className="hover:underline">
            D&D Manager™
          </a>
          . Ningún derecho reservado.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-body sm:mt-0">
          <li>
            <a href="#" className="hover:underline me-4 md:me-6">
              Acerca de
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline me-4 md:me-6">
              Política
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline me-4 md:me-6">
              Licencia
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Contactos
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};
