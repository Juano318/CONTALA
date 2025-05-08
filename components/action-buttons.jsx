"use client";

import { Plus, Minus } from "lucide-react";
import { useState } from "react";

export default function ActionButtons({ onAddIncome, onAddExpense }) {
  const [hovered, setHovered] = useState("");

  return (
    <div className="flex flex-row flex-nowrap overflow-x-auto gap-4 mt-6 no-scrollbar">
      <button
        onMouseEnter={() => setHovered("income")}
        onMouseLeave={() => setHovered("")}
        onClick={onAddIncome}
        className="flex items-center p-4 bg-white border border-gray-100 rounded-lg shadow-sm hover:bg-green-100 transition-colors duration-900 min-w-[200px]"
      >
        <div
          className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 transition-colors duration-900 ${
            hovered === "income" ? "bg-green-200" : "bg-blue-100"
          }`}
        >
          <Plus
            className={`w-5 h-5 transition-colors duration-900 ${
              hovered === "income" ? "text-green-700" : "text-blue-600"
            }`}
          />
        </div>
        <div className="text-left">
          <div className="font-medium text-gray-800">Agregar ingreso</div>
          <div className="text-sm text-gray-500">
            Crea un ingreso manualmente
          </div>
        </div>
      </button>

      <button
        onMouseEnter={() => setHovered("expense")}
        onMouseLeave={() => setHovered("")}
        onClick={onAddExpense}
        className="flex items-center p-4 bg-white border border-gray-100 rounded-lg shadow-sm hover:bg-red-100 transition-colors duration-900 min-w-[200px]"
      >
        <div
          className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 transition-colors duration-900 ${
            hovered === "expense" ? "bg-red-200" : "bg-blue-100"
          }`}
        >
          <Minus
            className={`w-5 h-5 transition-colors duration-900 ${
              hovered === "expense" ? "text-red-700" : "text-blue-600"
            }`}
          />
        </div>
        <div className="text-left">
          <div className="font-medium text-gray-800">Agregar egreso</div>
          <div className="text-sm text-gray-500">
            Crea un egreso manualmente
          </div>
        </div>
      </button>
    </div>
  );
}
