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
    <div className="flex flex-wrap gap-2 p-4">
      {periods.map((period) => (
        <Button
          key={period}
          variant={selectedPeriod === period ? "default" : "outline"}
          onClick={() => onSelectPeriod(period)}
          className={`rounded-lg hover:bg-blue-100 hover:text-blue-600 transition-colors ${
            selectedPeriod === period ? "bg-blue-100 text-blue-600" : ""
          }`}
        >
          {period}
        </Button>
      ))}
      <Button
        variant="outline"
        size="sm"
        className="flex items-center gap-1 rounded-lg hover:bg-blue-100 hover:text-blue-600 transition-colors"
      >
        <Calendar className="w-4 h-4" />
        <span>Seleccionar período</span>
      </Button>
    </div>
  );
}
