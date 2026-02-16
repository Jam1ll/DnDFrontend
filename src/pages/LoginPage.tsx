import { GoogleLoginButton } from "../components/auth/GoogleLoginButton";

export const LoginPage = () => {
  return (
    // FONDO
    <div className="min-h-screen min-w-screen flex items-center justify-center bg-[#1f125e] font-sans">
      {/* ----- TARJETA ----- */}
      <div className="w-full max-w-md bg-[#1e1e1e] shadow-2xl rounded-sm overflow-hidden">
        {/* Cabecera */}
        <div className="pt-8 pb-4 text-center px-8">
          {/* Logo */}
          <h1 className="text-5xl font-black text-white tracking-tighter flex items-center justify-center gap-1">
            D&D <span className="text-blue-600 relative bottom-1">MANAGER</span>
          </h1>
          {/* Subtítulo */}
          <p className="text-[10px] text-gray-400 tracking-[0.2em] uppercase mt-2">
            Tu plataforma de gestión
          </p>
          {/* Línea divisora */}
          <div className="mt-5 border-b border-gray-600 w-3/4 mx-auto"></div>
        </div>

        {/* Cuerpo de la tarjeta */}
        <div className="p-8 pt-2">
          {/* Formulario */}
          <div className="space-y-6">
            {/* Botón de Google */}
            <div className="flex items-center justify-center p-0">
              <GoogleLoginButton />
            </div>

            {/* Botón decorativo */}
            <div className="opacity-50 text-center text-xs text-gray-400 mb-2">
              —— O usa tu cuenta de correo ——
            </div>

            <button
              disabled
              className="w-full bg-[#363ba3] text-white py-2 px-4 rounded hover:bg-[#4d44b5] transition-colors font-medium text-sm opacity-60 cursor-not-allowed"
            >
              Iniciar sesión (Próximamente)
            </button>
          </div>

          <div className="flex flex-col items-center justify-center mt-8 text-sm text-[#4b4b4b] space-y-1">
            <p className="hover:text-[#5875e5] cursor-pointer transition-colors">
              ¿No tienes una cuenta? Regístrate ahora
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
