"use client"
import { Button } from "@/components/ui/button"
import { Calendar } from "lucide-react"

export default function PeriodSelector({ selectedPeriod, onSelectPeriod }) {
  const periods = ["Mes actual", "Mes anterior", "Año actual", "Últimos 12 meses"]

  return (
    <div className="flex flex-wrap gap-2">
      {periods.map((period) => (
        <Button
          key={period}
          variant={selectedPeriod === period ? "default" : "outline"}
          size="sm"
          onClick={() => onSelectPeriod(period)}
          className={selectedPeriod === period ? "bg-blue-600" : ""}
        >
          {period}
        </Button>
      ))}
      <Button variant="outline" size="sm" className="flex items-center gap-1">
        <Calendar className="w-4 h-4" />
        <span>Seleccionar período</span>
      </Button>
    </div>
  )
}
