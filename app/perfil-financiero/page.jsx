"use client";
import { useState } from "react";
import Navbar from "@/components/navbar";

export default function PerfilFinancieroPage() {
  const [trabajo, setTrabajo] = useState("");
  const [ingresos, setIngresos] = useState("");
  const [categoriaGasto, setCategoriaGasto] = useState("");
  const [categorias, setCategorias] = useState([]);
  const [familiar, setFamiliar] = useState("");
  const [familiares, setFamiliares] = useState([]);

  const agregarCategoria = () => {
    if (categoriaGasto.trim() !== "") {
      setCategorias([...categorias, categoriaGasto]);
      setCategoriaGasto("");
    }
  };

  const eliminarCategoria = (cat) => {
    setCategorias(categorias.filter((c) => c !== cat));
  };

  const agregarFamiliar = () => {
    if (familiar.trim() !== "") {
      setFamiliares([...familiares, familiar]);
      setFamiliar("");
    }
  };

  const eliminarFamiliar = (fam) => {
    setFamiliares(familiares.filter((f) => f !== fam));
  };

  const handleGuardarPerfil = (e) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar los datos a una base de datos o API
    alert(
      `Perfil guardado:\n\nTrabajo: ${trabajo}\nIngresos: ${ingresos}\nCategorías: ${categorias.join(", ")}\nFamiliares: ${familiares.join(", ")}`
    );
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white flex flex-col items-center py-10">
        <div className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl p-10 flex flex-col items-center">
          <h1 className="text-3xl font-extrabold mb-8 text-gray-800 text-center">Perfil Financiero</h1>
          <form className="w-full flex flex-col gap-6" onSubmit={handleGuardarPerfil}>
            <div>
              <label className="block text-lg font-medium text-gray-700 mb-1">Trabajo</label>
              <input type="text" value={trabajo} onChange={e => setTrabajo(e.target.value)} placeholder="Ej: Empleado, Autónomo, etc." className="w-full px-4 py-3 rounded-lg border border-gray-300 text-lg focus:ring-2 focus:ring-blue-400" />
            </div>
            <div>
              <label className="block text-lg font-medium text-gray-700 mb-1">Ingresos mensuales</label>
              <input type="number" value={ingresos} onChange={e => setIngresos(e.target.value)} placeholder="Ej: 100000" className="w-full px-4 py-3 rounded-lg border border-gray-300 text-lg focus:ring-2 focus:ring-blue-400" />
            </div>
            <div>
              <label className="block text-lg font-medium text-gray-700 mb-1">Categorías de gastos</label>
              <div className="flex gap-2 mb-2">
                <input type="text" value={categoriaGasto} onChange={e => setCategoriaGasto(e.target.value)} placeholder="Ej: Alimentación, Transporte" className="flex-1 px-4 py-3 rounded-lg border border-gray-300 text-lg focus:ring-2 focus:ring-blue-400" />
                <button type="button" onClick={agregarCategoria} className="px-4 py-2 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600">Añadir</button>
              </div>
              <div className="flex flex-wrap gap-2">
                {categorias.map((cat, idx) => (
                  <span key={idx} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full flex items-center gap-2">
                    {cat}
                    <button
                      type="button"
                      onClick={() => eliminarCategoria(cat)}
                      className="font-bold text-blue-500 hover:text-blue-400 transition drop-shadow-neon"
                      style={{
                        textShadow: "0 0 6px #38bdf8, 0 0 12px #38bdf8, 0 0 18px #38bdf8"
                      }}
                    >
                      ×
                    </button>
                  </span>
                ))}
              </div>
            </div>
            <div>
              <label className="block text-lg font-medium text-gray-700 mb-1">Familiares a cargo</label>
              <div className="flex gap-2 mb-2">
                <input type="text" value={familiar} onChange={e => setFamiliar(e.target.value)} placeholder="Nombre del familiar" className="flex-1 px-4 py-3 rounded-lg border border-gray-300 text-lg focus:ring-2 focus:ring-blue-400" />
                <button type="button" onClick={agregarFamiliar} className="px-4 py-2 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600">Añadir</button>
              </div>
              <div className="flex flex-wrap gap-2">
                {familiares.map((fam, idx) => (
                  <span key={idx} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full flex items-center gap-2">
                    {fam}
                    <button
                      type="button"
                      onClick={() => eliminarFamiliar(fam)}
                      className="font-bold text-blue-500 hover:text-blue-400 transition drop-shadow-neon"
                      style={{
                        textShadow: "0 0 6px #38bdf8, 0 0 12px #38bdf8, 0 0 18px #38bdf8"
                      }}
                    >
                      ×
                    </button>
                  </span>
                ))}
              </div>
            </div>
            <button type="submit" className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg font-bold text-lg hover:bg-blue-700 transition">Guardar perfil</button>
          </form>
        </div>
      </main>
    </>
  );
} 