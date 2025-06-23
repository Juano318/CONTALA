"use client";

import { useState } from "react";
import Navbar from "./navbar";
import FinancialSummary from "./financial-summary";
import ActionButtons from "./action-buttons";
import ExpenseCategories from "./expense-categories";
import RecentActivity from "./recent-activity";
import PeriodSelector from "./period-selector";
import AddTransactionModal from "@/components/add-transaction-modal";
import MovimientosPage from "./movimientosPage";
import { useTransactions } from "@/context/TransactionContext";

export default function Dashboard() {
  const [selectedPeriod, setSelectedPeriod] = useState("Mes actual");
  const [showAddIncomeModal, setShowAddIncomeModal] = useState(false);
  const [showAddExpenseModal, setShowAddExpenseModal] = useState(false);
  const { transactions, financialData, handleAddTransaction } = useTransactions();

  const categoryData = [
    { name: "Necesidades", percentage: 35, color: "bg-purple-500" },
    { name: "Deseos", percentage: 20, color: "bg-red-500" },
    { name: "Ahorro", percentage: 25, color: "bg-blue-500" },
    { name: "Disponible", percentage: 20, color: "bg-gray-300" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="container mx-auto px-4 py-6 max-w-7xl">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6 gap-2">
          <h1 className="text-3xl font-bold text-gray-700">Hola, Juano!</h1>
          <PeriodSelector
            selectedPeriod={selectedPeriod}
            onSelectPeriod={setSelectedPeriod}
          />
        </div>
        <FinancialSummary data={financialData} />

        <ActionButtons
          onAddIncome={() => setShowAddIncomeModal(true)}
          onAddExpense={() => setShowAddExpenseModal(true)}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <ExpenseCategories categories={categoryData} />
          <RecentActivity transactions={transactions} />
        </div>
      </main>

      <AddTransactionModal
        isOpen={showAddIncomeModal}
        onClose={() => setShowAddIncomeModal(false)}
        type="income"
        onAddTransaction={handleAddTransaction}
      />

      <AddTransactionModal
        isOpen={showAddExpenseModal}
        onClose={() => setShowAddExpenseModal(false)}
        type="expense"
        onAddTransaction={handleAddTransaction}
      />
    </div>
  );
}
