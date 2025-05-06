import { MoreVertical } from "lucide-react"

export default function RecentActivity({ transactions }) {
  const formatCurrency = (value) => {
    const isNegative = value < 0
    return new Intl.NumberFormat("es-AR", {
      style: "currency",
      currency: "ARS",
      maximumFractionDigits: 0,
    })
      .format(Math.abs(value))
      .replace("ARS", isNegative ? "-$" : "+$")
  }

  const getIconBackground = (type) => {
    switch (type) {
      case "income":
        return "bg-green-100 text-green-600"
      case "expense":
        return "bg-red-100 text-red-600"
      default:
        return "bg-gray-100 text-gray-600"
    }
  }

  const getAmountColor = (amount) => {
    return amount >= 0 ? "text-green-600" : "text-red-600"
  }

  return (
    <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
      <h2 className="text-lg font-medium text-gray-800 mb-2">Actividad</h2>
      <p className="text-sm text-gray-500 mb-4">Revisa tus últimos movimientos</p>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-left text-xs text-gray-500 border-b">
              <th className="pb-2 font-medium">Descripción</th>
              <th className="pb-2 font-medium">Método de pago</th>
              <th className="pb-2 font-medium">Fecha</th>
              <th className="pb-2 font-medium text-right">Monto</th>
              <th className="pb-2 font-medium"></th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction.id} className="border-b border-gray-100 last:border-0">
                <td className="py-3 flex items-center">
                  <div
                    className={`w-6 h-6 rounded flex items-center justify-center text-xs font-medium mr-2 ${getIconBackground(transaction.type)}`}
                  >
                    {transaction.icon}
                  </div>
                  <span className="text-sm text-gray-800">{transaction.description}</span>
                </td>
                <td className="py-3 text-sm text-gray-500">{transaction.paymentMethod}</td>
                <td className="py-3 text-sm text-gray-500">{transaction.date}</td>
                <td className={`py-3 text-sm text-right font-medium ${getAmountColor(transaction.amount)}`}>
                  {formatCurrency(transaction.amount)}
                </td>
                <td className="py-3 text-right">
                  <button className="text-gray-400 hover:text-gray-600">
                    <MoreVertical className="w-4 h-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
