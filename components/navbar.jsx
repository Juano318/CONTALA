import { Settings, Bell } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="bg-white border-b border-gray-200 py-3 px-4 shadow-sm">
      <div className="container mx-auto max-w-7xl">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-1">
            <Link
              href="/"
              className="flex items-center justify-center w-10 h-10"
            >
              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                <img
                  src= "/contalaLogo.png"
                  alt="Logo"
                  className="w-10 h-10 rounded-full"
                />
              </div>
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <NavLink href="/" active={pathname === "/"}>
              Inicio
            </NavLink>
            <NavLink href="/movimientos" active={pathname === "/movimientos"}>
              Movimientos
            </NavLink>
            <NavLink href="/informes" active={pathname === "/informes"}>
              Informes
            </NavLink>
            <NavLink href="/calculadora" active={pathname === "/calculadora"}>
              Calculadora
            </NavLink>
            <NavLink
              href="/perfil-financiero"
              active={pathname === "/perfil-financiero"}
            >
              Perfil financiero
            </NavLink>
          </div>

          <div className="flex items-center space-x-4">
            <button className="text-gray-500 hover:text-gray-700">
              <Settings className="w-5 h-5" />
            </button>
            <button className="text-gray-500 hover:text-gray-700">
              <Bell className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

function NavLink({ href, children, active = false }) {
  return (
    <Link
      href={href}
      className={`text-sm font-medium ${
        active ? "text-blue-600" : "text-gray-500 hover:text-gray-700"
      }`}
    >
      {children}
    </Link>
  );
}
