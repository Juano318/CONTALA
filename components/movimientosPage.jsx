"use client";

import MovementsNavbar from "./movements-navbar";
import Navbar from "@/components/navbar";
import { useTransactions } from "@/context/TransactionContext";
import AddTransactionModal from "@/components/add-transaction-modal";
import { useState } from "react";

export default function MovimientosPage() {
  const { transactions, financialData, handleAddTransaction } = useTransactions();
  const [showAddIncomeModal, setShowAddIncomeModal] = useState(false);

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
      <Navbar />
      <MovementsNavbar
        onFilterChange={handleFilterChange}
        onSortChange={handleSortChange}
        onDateRangeChange={handleDateRangeChange}
      />
      <div className="container mx-auto max-w-7xl py-6 px-4">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4">
            Lista de Movimientos
          </h2>
          <div className="space-y-4">
            {transactions?.map((t) => (
              <div key={t.id} className="border-b pb-2">
                <p className="font-medium">{t.description}</p>
                <p className={t.type === "income" ? "text-green-500" : "text-red-500"}>
                  {t.type === "income" ? "+" : "-"}${Math.abs(t.amount).toLocaleString()}
                </p>
                <p className="text-sm text-gray-500">{t.date} · {t.paymentMethod}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <AddTransactionModal
        isOpen={showAddIncomeModal}
        onClose={() => setShowAddIncomeModal(false)}
        type="income"
        onAddTransaction={handleAddTransaction}
      />
    </main>
  );
}
