"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

export default function AddTransactionModal({
  isOpen,
  onClose,
  type,
  onAddTransaction,
}) {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!description || !amount || !date) {
      return;
    }
    const parsedAmount =
      type === "income"
        ? Math.abs(Number.parseFloat(amount))
        : -Math.abs(Number.parseFloat(amount));
    onAddTransaction({
      description,
      amount: parsedAmount,
      date,
      type,
      icon: description.substring(0, 2).toUpperCase(),
    });
    setDescription("");
    setAmount("");
    setDate("");
    onClose();
  };

  const paymentMethods = [
    "Efectivo",
    "Mercado Pago",
    "Banco Galicia",
    "Visa ****8216",
    "Visa ****9182",
  ];

  const categories =
    type === "expense"
      ? ["Necesidades", "Deseos", "Ahorro", "Disponible"]
      : ["Sueldo", "Freelance", "Inversiones", "Disponible"];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="fixed left-[50%] top-[50%] z-[9999] grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-white text-gray-900 p-6 shadow-lg duration-200">
        <DialogHeader>
          <DialogTitle>
            {type === "income" ? "Agregar ingreso" : "Agregar egreso"}
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="description">
              {type === "income" ? "Origen del ingreso" : "Motivo del egreso"}
            </Label>
            <Input
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder={type === "income" ? "Ej: Sueldo, Venta, etc." : "Ej: Alquiler, Comida, etc."}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="amount">Monto</Label>
            <div className="relative">
              <span className="absolute left-3 top-2.5">$</span>
              <Input
                id="amount"
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="0"
                className="pl-7"
                required
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="date">Fecha</Label>
            <Input
              id="date"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </div>
          <DialogFooter className="pt-4">
            <Button type="button" variant="outline" onClick={onClose}>
              Cancelar
            </Button>
            <Button
              type="submit"
              className={
                type === "income"
                  ? "bg-green-600 hover:bg-green-700"
                  : "bg-red-600 hover:bg-red-700"
              }
            >
              {type === "income" ? "Agregar ingreso" : "Agregar egreso"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
