export default function FinancialSummary({ data }) {
  const formatCurrency = (value) => {
    return new Intl.NumberFormat("es-AR", {
      style: "currency",
      currency: "ARS",
      maximumFractionDigits: 0,
    })
      .format(value)
      .replace("ARS", "$");
  };

  const formatPercentage = (value) => {
    const isPositive = value >= 0;
    return (
      <span
        className={`text-xs font-medium ${
          isPositive ? "text-green-600" : "text-red-600"
        }`}
      >
        {isPositive ? "+" : ""}
        {value}%
      </span>
    );
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm">
        <div className="flex flex-col">
          <span className="text-sm text-gray-500 mb-1">Saldo actual</span>
          <div className="flex items-end justify-between">
            <span className="text-3xl font-bold text-gray-800">
              {formatCurrency(data.balance)}
            </span>
            <div className="bg-green-100 text-green-600 px-2 py-1 rounded text-xs font-medium">
              + {data.balanceChange}%
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm">
        <div className="flex flex-col">
          <span className="text-sm text-gray-500 mb-1">Ingresos</span>
          <div className="flex items-end justify-between">
            <span className="text-3xl font-bold text-gray-800">
              {formatCurrency(data.income)}
            </span>
            <div className="bg-green-100 text-green-600 px-2 py-1 rounded text-xs font-medium">
              + {data.incomeChange}%
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm">
        <div className="flex flex-col">
          <span className="text-sm text-gray-500 mb-1">Egresos</span>
          <div className="flex items-end justify-between">
            <span className="text-3xl font-bold text-gray-800">
              {formatCurrency(data.expenses)}
            </span>
            <div className="bg-red-100 text-red-600 px-2 py-1 rounded text-xs font-medium">
              {data.expensesChange}%
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
