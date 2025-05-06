import { Settings, Bell } from "lucide-react"
import Link from "next/link"

export default function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-200 py-3 px-4 shadow-sm">
      <div className="container mx-auto max-w-7xl">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-1">
            <div className="flex items-center justify-center w-10 h-10">
              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5 text-blue-500"
                >
                  <path d="M20 16.2A8 8 0 1 1 4 16.2" />
                  <path d="M12 16v4" />
                  <path d="M8 16l4-4 4 4" />
                </svg>
              </div>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <NavLink href="/" active>
              Inicio
            </NavLink>
            <NavLink href="/movimientos">Movimientos</NavLink>
            <NavLink href="/informes">Informes</NavLink>
            <NavLink href="/calculadora">Calculadora</NavLink>
            <NavLink href="/perfil-financiero">Perfil financiero</NavLink>
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
  )
}

function NavLink({ href, children, active = false }) {
  return (
    <Link
      href={href}
      className={`text-sm font-medium ${active ? "text-blue-600" : "text-gray-500 hover:text-gray-700"}`}
    >
      {children}
    </Link>
  )
}
