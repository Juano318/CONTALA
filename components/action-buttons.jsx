"use client";

import { Plus, Minus } from "lucide-react";

export default function ActionButtons({ onAddIncome, onAddExpense }) {
  return (
    <div className="flex flex-row flex-nowrap overflow-x-auto gap-4 mt-6 no-scrollbar">
      <button
        onClick={onAddIncome}
        className="flex items-center p-4 bg-white border border-gray-100 rounded-lg shadow-sm hover:bg-blue-100 transition-colors min-w-[200px]"
      >
        <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-3">
          <Plus className="w-5 h-5 text-blue-600" />
        </div>
        <div className="text-left">
          <div className="font-medium text-gray-800">Agregar ingreso</div>
          <div className="text-sm text-gray-500">
            Crea un ingreso manualmente
          </div>
        </div>
      </button>

      <button
        onClick={onAddExpense}
        className="flex items-center p-4 bg-white border border-gray-100 rounded-lg shadow-sm hover:bg-blue-100 transition-colors min-w-[200px]"
      >
        <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-3">
          <Minus className="w-5 h-5 text-blue-600" />
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
