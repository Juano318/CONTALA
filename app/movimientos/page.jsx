"use client";

import MovementsNavbar from "../../components/movements-navbar";
import BackHomeButton from "../../components/ui/back-home-button";

export default function MovimientosPage() {
  const handleFilterChange = (value) => {
    console.log("Filter changed:", value);
  };

  const handleSortChange = () => {
    console.log("Sort changed");
  };

  const handleDateRangeChange = () => {
    console.log("Date range changed");
  };

  return (
    <main>
      <MovementsNavbar
        onFilterChange={handleFilterChange}
        onSortChange={handleSortChange}
        onDateRangeChange={handleDateRangeChange}
      />
      <div className="container mx-auto max-w-7xl py-6 px-4">
        <div className="mb-6">
          <BackHomeButton />
        </div>
        {/* Aquí irá el contenido de la lista de movimientos */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4">
            Lista de Movimientos
          </h2>
          <p className="text-gray-500">No hay movimientos para mostrar</p>
        </div>
      </div>
    </main>
  );
}
