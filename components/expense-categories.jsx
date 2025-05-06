"use client"

import { useEffect, useRef } from "react"
import { Home, Heart, PiggyBank } from "lucide-react"

export default function ExpenseCategories({ categories }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    if (!canvasRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")

    // Set canvas dimensions
    const size = 180
    canvas.width = size
    canvas.height = size

    // Draw pie chart
    let startAngle = 0

    categories.forEach((category) => {
      const sliceAngle = (category.percentage / 100) * 2 * Math.PI

      ctx.beginPath()
      ctx.moveTo(size / 2, size / 2)
      ctx.arc(size / 2, size / 2, size / 2 - 10, startAngle, startAngle + sliceAngle)
      ctx.closePath()

      // Set color based on category
      ctx.fillStyle = getCategoryColor(category.name)
      ctx.fill()

      startAngle += sliceAngle
    })

    // Draw inner circle for donut chart
    ctx.beginPath()
    ctx.arc(size / 2, size / 2, size / 4, 0, 2 * Math.PI)
    ctx.fillStyle = "white"
    ctx.fill()
  }, [categories])

  const getCategoryColor = (name) => {
    switch (name) {
      case "Necesidades":
        return "#8b5cf6" // purple-500
      case "Deseos":
        return "#ef4444" // red-500
      case "Ahorro":
        return "#3b82f6" // blue-500
      default:
        return "#d1d5db" // gray-300
    }
  }

  const getCategoryIcon = (name) => {
    switch (name) {
      case "Necesidades":
        return <Home className="w-5 h-5 text-white" />
      case "Deseos":
        return <Heart className="w-5 h-5 text-white" />
      case "Ahorro":
        return <PiggyBank className="w-5 h-5 text-white" />
      default:
        return null
    }
  }

  return (
    <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
      <h2 className="text-lg font-medium text-gray-800 mb-4">Gastos por categoría</h2>

      <div className="flex justify-center mb-4">
        <canvas ref={canvasRef} className="w-[180px] h-[180px]" />
      </div>

      <div className="space-y-3">
        {categories.slice(0, 3).map((category) => (
          <div key={category.name} className="flex items-center justify-between">
            <div className="flex items-center">
              <div
                className={`w-6 h-6 rounded-full flex items-center justify-center ${getCategoryColor(category.name).replace("#", "bg-")}`}
              >
                {getCategoryIcon(category.name)}
              </div>
              <span className="ml-2 text-gray-700">{category.name}</span>
            </div>
            <span className="text-gray-500">{category.percentage.toFixed(2)}%</span>
          </div>
        ))}
      </div>
    </div>
  )
}
