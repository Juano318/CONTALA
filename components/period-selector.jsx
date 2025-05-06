"use client";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

export default function PeriodSelector({
  selectedPeriod = "Mes actual",
  onSelectPeriod = () => {},
}) {
  const periods = [
    "Mes actual",
    "Mes anterior",
    "Año actual",
    "Últimos 12 meses",
  ];

  return (
    <div className="relative">
      <div className="flex flex-nowrap overflow-x-auto gap-2 py-4 no-scrollbar">
        {periods.map((period) => (
          <Button
            key={period}
            variant={selectedPeriod === period ? "default" : "outline"}
            onClick={() => onSelectPeriod(period)}
            className={`rounded-lg hover:bg-blue-100 hover:text-blue-600 transition-colors whitespace-nowrap ${
              selectedPeriod === period ? "bg-blue-100 text-blue-600" : ""
            }`}
          >
            {period}
          </Button>
        ))}
        <Button
          variant="outline"
          size="sm"
          className="flex items-center gap-1 rounded-lg hover:bg-blue-100 hover:text-blue-600 transition-colors px-3 whitespace-nowrap"
        >
          <Calendar className="w-4 h-4" />
          <span>Seleccionar período</span>
        </Button>
      </div>
      {/* Gradiente izquierdo solo en móvil */}
      <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-gray-50 to-transparent pointer-events-none md:hidden"></div>
      {/* Gradiente derecho solo en móvil */}
      <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-gray-50 to-transparent pointer-events-none md:hidden"></div>
    </div>
  );
}
