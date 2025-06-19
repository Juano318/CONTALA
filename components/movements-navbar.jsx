import { Filter, ArrowUpDown, Calendar } from "lucide-react";
import { useState } from "react";

export default function MovementsNavbar({
  onFilterChange,
  onSortChange,
  onDateRangeChange,
}) {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  return (
    <div className="bg-white border-b border-gray-200 py-3 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <h1 className="text-xl font-semibold text-gray-800">Movimientos</h1>
            <div className="h-6 w-px bg-gray-200"></div>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className="flex items-center space-x-2 px-3 py-1.5 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors"
              >
                <Filter className="w-4 h-4" />
                <span>Filtrar</span>
              </button>
              <button
                onClick={() => onSortChange()}
                className="flex items-center space-x-2 px-3 py-1.5 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors"
              >
                <ArrowUpDown className="w-4 h-4" />
                <span>Ordenar</span>
              </button>
              <button
                onClick={() => onDateRangeChange()}
                className="flex items-center space-x-2 px-3 py-1.5 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors"
              >
                <Calendar className="w-4 h-4" />
                <span>Rango de fechas</span>
              </button>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <select
              onChange={(e) => onFilterChange(e.target.value)}
              className="text-sm border border-gray-200 rounded-md px-3 py-1.5 text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="all">Todos los movimientos</option>
              <option value="income">Ingresos</option>
              <option value="expense">Gastos</option>
              <option value="transfer">Transferencias</option>
            </select>
          </div>
        </div>

        {isFilterOpen && (
          <div className="mt-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Categoría
                </label>
                <select className="w-full text-sm border border-gray-200 rounded-md px-3 py-1.5">
                  <option value="">Todas las categorías</option>
                  <option value="food">Alimentación</option>
                  <option value="transport">Transporte</option>
                  <option value="entertainment">Entretenimiento</option>
                  <option value="utilities">Servicios</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Monto
                </label>
                <div className="flex space-x-2">
                  <input
                    type="number"
                    placeholder="Mín"
                    className="w-full text-sm border border-gray-200 rounded-md px-3 py-1.5"
                  />
                  <input
                    type="number"
                    placeholder="Máx"
                    className="w-full text-sm border border-gray-200 rounded-md px-3 py-1.5"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Estado
                </label>
                <select className="w-full text-sm border border-gray-200 rounded-md px-3 py-1.5">
                  <option value="">Todos los estados</option>
                  <option value="completed">Completado</option>
                  <option value="pending">Pendiente</option>
                  <option value="cancelled">Cancelado</option>
                </select>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
