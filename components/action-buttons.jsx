"use client";

import { Plus, Minus } from "lucide-react";

export default function ActionButtons({ onAddIncome, onAddExpense }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
      <button
        onClick={onAddIncome}
        className="flex items-center p-4 bg-white border border-gray-100 rounded-lg shadow-sm hover:bg-green-100 transition-colors"
      >
        <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center mr-3">
          <Plus className="w-5 h-5 text-green-600" />
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
        className="flex items-center p-4 bg-white border border-gray-100 rounded-lg shadow-sm hover:bg-red-100 transition-colors"
      >
        <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center mr-3">
          <Minus className="w-5 h-5 text-red-600" />
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
