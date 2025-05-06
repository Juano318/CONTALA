"use client";

import { useState } from "react";
import Navbar from "./navbar";
import FinancialSummary from "./financial-summary";
import ActionButtons from "./action-buttons";
import ExpenseCategories from "./expense-categories";
import RecentActivity from "./recent-activity";
import PeriodSelector from "./period-selector";
import AddTransactionModal from "./add-transaction-modal";

export default function Dashboard() {
  const [selectedPeriod, setSelectedPeriod] = useState("Mes actual");
  const [showAddIncomeModal, setShowAddIncomeModal] = useState(false);
  const [showAddExpenseModal, setShowAddExpenseModal] = useState(false);
  const [transactions, setTransactions] = useState([
    {
      id: 1,
      icon: "JC",
      description: "Juan Cañavate",
      paymentMethod: "Mercado Pago",
      date: "28/04/2025",
      amount: 20000,
      type: "income",
    },
    {
      id: 2,
      icon: "N",
      description: "Netflix",
      paymentMethod: "Visa ****8216",
      date: "22/04/2025",
      amount: -13750,
      type: "expense",
    },
    {
      id: 3,
      icon: "S",
      description: "Spotify",
      paymentMethod: "Mercado Pago",
      date: "07/04/2025",
      amount: -19200,
      type: "expense",
    },
    {
      id: 4,
      icon: "$",
      description: "Sueldo",
      paymentMethod: "Banco Galicia",
      date: "24/03/2025",
      amount: 1000000,
      type: "income",
    },
    {
      id: 5,
      icon: "GS",
      description: "German Suhr",
      paymentMethod: "Mercado Pago",
      date: "12/03/2025",
      amount: -55000,
      type: "expense",
    },
    {
      id: 6,
      icon: "A",
      description: "Amazon",
      paymentMethod: "Visa ****9182",
      date: "01/03/2025",
      amount: -147100,
      type: "expense",
    },
    {
      id: 7,
      icon: "S",
      description: "Shopify",
      paymentMethod: "Banco Galicia",
      date: "28/02/2025",
      amount: -57500,
      type: "expense",
    },
  ]);

  const financialData = {
    balance: 546230,
    income: 1000000,
    expenses: 453770,
    balanceChange: 12.5,
    incomeChange: 0,
    expensesChange: -15,
  };

  const categoryData = [
    { name: "Necesidades", percentage: 35, color: "bg-purple-500" },
    { name: "Deseos", percentage: 20, color: "bg-red-500" },
    { name: "Ahorro", percentage: 25, color: "bg-blue-500" },
    { name: "Disponible", percentage: 20, color: "bg-gray-300" },
  ];

  const handleAddTransaction = (newTransaction) => {
    const updatedTransactions = [
      {
        id: transactions.length + 1,
        ...newTransaction,
        date: new Date().toLocaleDateString("es-AR"),
      },
      ...transactions,
    ];

    setTransactions(updatedTransactions);

    // Update financial summary based on transaction type
    if (newTransaction.type === "income") {
      financialData.income += newTransaction.amount;
      financialData.balance += newTransaction.amount;
    } else {
      financialData.expenses += Math.abs(newTransaction.amount);
      financialData.balance -= Math.abs(newTransaction.amount);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="container mx-auto px-4 py-6 max-w-7xl">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6 gap-2">
          <h1 className="text-3xl font-bold text-gray-700">Hola, Lucas!</h1>
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
