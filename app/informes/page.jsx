"use client";
import Navbar from "@/components/navbar";
import BackHomeButton from "../../components/ui/back-home-button";
import {
  BarChart,
  PieChart,
  TrendingUp,
  DollarSign,
  CreditCard,
  Wallet,
} from "lucide-react";
import {
  PieChart as RechartsPieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Legend,
  Tooltip,
} from "recharts";

export default function InformesPage() {
  // Datos de ejemplo para los informes
  const gastosPorCategoria = [
    { categoria: "Alimentación", monto: 2500, porcentaje: 35 },
    { categoria: "Transporte", monto: 1200, porcentaje: 17 },
    { categoria: "Entretenimiento", monto: 800, porcentaje: 11 },
    { categoria: "Servicios", monto: 1500, porcentaje: 21 },
    { categoria: "Otros", monto: 1000, porcentaje: 14 },
  ];

  const balanceMensual = {
    ingresos: 8500,
    gastos: 7000,
    balance: 1500,
  };

  const tendenciasMensuales = [
    { mes: "Ene", ingresos: 7500, gastos: 6500 },
    { mes: "Feb", ingresos: 8200, gastos: 6800 },
    { mes: "Mar", ingresos: 8500, gastos: 7000 },
  ];

  // Datos para el gráfico circular de ingresos vs egresos
  const ingresosVsEgresos = [
    { name: "Ingresos", value: balanceMensual.ingresos },
    { name: "Egresos", value: balanceMensual.gastos },
  ];

  const COLORS = ["#10B981", "#EF4444"];

  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="container mx-auto max-w-7xl py-6 px-4">
        <div className="mb-6">
          <BackHomeButton />
        </div>

        <h1 className="text-2xl font-bold text-gray-900 mb-8">
          Informes Financieros
        </h1>

        {/* Resumen de Balance */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium text-gray-900">
                Ingresos Totales
              </h3>
              <DollarSign className="w-5 h-5 text-green-500" />
            </div>
            <p className="text-3xl font-bold text-green-600">
              ${balanceMensual.ingresos}
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium text-gray-900">
                Gastos Totales
              </h3>
              <CreditCard className="w-5 h-5 text-red-500" />
            </div>
            <p className="text-3xl font-bold text-red-600">
              ${balanceMensual.gastos}
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium text-gray-900">
                Balance Neto
              </h3>
              <Wallet className="w-5 h-5 text-blue-500" />
            </div>
            <p className="text-3xl font-bold text-blue-600">
              ${balanceMensual.balance}
            </p>
          </div>
        </div>

        {/* Gráfico Circular de Ingresos vs Egresos */}
        <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900">
              Distribución Ingresos vs Egresos
            </h2>
            <PieChart className="w-6 h-6 text-gray-500" />
          </div>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <RechartsPieChart>
                <Pie
                  data={ingresosVsEgresos}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ percent }) =>
                    `${(percent * 100).toFixed(0)}%`
                  }
                >
                  {ingresosVsEgresos.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip
                  formatter={(value) => [`$${value}`, ""]}
                  contentStyle={{
                    backgroundColor: "white",
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                    padding: "8px",
                  }}
                />
                <Legend />
              </RechartsPieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Gráfico de Gastos por Categoría */}
        <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900">
              Gastos por Categoría
            </h2>
            <PieChart className="w-6 h-6 text-gray-500" />
          </div>
          <div className="space-y-4">
            {gastosPorCategoria.map((item, index) => (
              <div key={index} className="flex items-center">
                <div className="w-32 text-sm text-gray-600">
                  {item.categoria}
                </div>
                <div className="flex-1">
                  <div className="h-4 bg-gray-100 rounded-full">
                    <div
                      className="h-4 bg-blue-500 rounded-full"
                      style={{ width: `${item.porcentaje}%` }}
                    ></div>
                  </div>
                </div>
                <div className="w-24 text-right text-sm font-medium text-gray-900">
                  ${item.monto}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tendencias Mensuales */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900">
              Tendencias Mensuales
            </h2>
            <TrendingUp className="w-6 h-6 text-gray-500" />
          </div>
          <div className="space-y-4">
            {tendenciasMensuales.map((mes, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
              >
                <div className="text-sm font-medium text-gray-900">
                  {mes.mes}
                </div>
                <div className="flex items-center space-x-8">
                  <div className="text-sm">
                    <span className="text-gray-500">Ingresos: </span>
                    <span className="font-medium text-green-600">
                      ${mes.ingresos}
                    </span>
                  </div>
                  <div className="text-sm">
                    <span className="text-gray-500">Gastos: </span>
                    <span className="font-medium text-red-600">
                      ${mes.gastos}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
