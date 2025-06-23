"use client";
import { createContext, useState, useContext, useMemo } from "react";

const TransactionContext = createContext();

export function TransactionProvider({ children }) {
  const [transactions, setTransactions] = useState([
  ]);

  const financialData = useMemo(() => {
    const income = transactions
      .filter(t => t.type === "income")
      .reduce((sum, t) => sum + Math.abs(t.amount), 0);

    const expenses = transactions
      .filter(t => t.type === "expense")
      .reduce((sum, t) => sum + Math.abs(t.amount), 0);

    return {
      balance: income - expenses,
      income,
      expenses,
      // Puedes agregar más cálculos aquí si los necesitas
      balanceChange: 0, // Ejemplo - deberías calcular esto si lo necesitas
      incomeChange: 0,
      expensesChange: 0
    };
  }, [transactions]);

  const handleAddTransaction = (newTransaction) => {
    setTransactions(prevTransactions => [
      { id: Date.now(), ...newTransaction },
      ...prevTransactions // ← ¡Mantiene las transacciones existentes!
    ]);
  };

  return (
    <TransactionContext.Provider value={{ transactions, financialData, handleAddTransaction }}>
      {children}
    </TransactionContext.Provider>
  );
}

export function useTransactions() {
  return useContext(TransactionContext);
}