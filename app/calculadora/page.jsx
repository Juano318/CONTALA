"use client";
import { useState } from "react";
import Navbar from "@/components/navbar";
export default function CalculadoraPage() {
  const [tab, setTab] = useState("impuestos");

  return (
    <>
        <Navbar />
        <main className="min-h-screen bg-gradient-to-br from-blue-100 to-green-100 flex flex-col items-center justify-center">
        <div className="w-full max-w-4xl bg-white/90 rounded-2xl shadow-2xl p-10 flex flex-col items-center">
            <h1 className="text-4xl font-extrabold mb-10 text-gray-800 text-center drop-shadow">Calculadora Financiera</h1>
            <div className="flex flex-wrap justify-center gap-4 mb-10 w-full">
            <button onClick={() => setTab("impuestos")} className={`px-6 py-3 rounded-lg text-lg font-semibold transition-all duration-200 shadow ${tab === "impuestos" ? "bg-blue-500 text-white" : "bg-gray-100 text-gray-700 hover:bg-blue-200"}`}>Impuestos</button>
            <button onClick={() => setTab("interesSimple")} className={`px-6 py-3 rounded-lg text-lg font-semibold transition-all duration-200 shadow ${tab === "interesSimple" ? "bg-blue-500 text-white" : "bg-gray-100 text-gray-700 hover:bg-blue-200"}`}>Interés Simple</button>
            <button onClick={() => setTab("interesCompuesto")} className={`px-6 py-3 rounded-lg text-lg font-semibold transition-all duration-200 shadow ${tab === "interesCompuesto" ? "bg-blue-500 text-white" : "bg-gray-100 text-gray-700 hover:bg-blue-200"}`}>Interés Compuesto</button>
            <button onClick={() => setTab("regla3")} className={`px-6 py-3 rounded-lg text-lg font-semibold transition-all duration-200 shadow ${tab === "regla3" ? "bg-blue-500 text-white" : "bg-gray-100 text-gray-700 hover:bg-blue-200"}`}>Regla de Tres</button>
            <button onClick={() => setTab("basica")} className={`px-6 py-3 rounded-lg text-lg font-semibold transition-all duration-200 shadow ${tab === "basica" ? "bg-blue-500 text-white" : "bg-gray-100 text-gray-700 hover:bg-blue-200"}`}>Básica</button>
            </div>
            <div className="w-full flex-1 flex items-center justify-center min-h-[350px]">
            <div className="w-full max-w-2xl">
                {tab === "impuestos" && <Impuestos />}
                {tab === "interesSimple" && <InteresSimple />}
                {tab === "interesCompuesto" && <InteresCompuesto />}
                {tab === "regla3" && <ReglaDeTres />}
                {tab === "basica" && <Basica />}
            </div>
            </div>
        </div>
        </main>
    </>
  );
}

// Calculadora de impuestos
function Impuestos() {
  const [monto, setMonto] = useState("");
  const [porcentaje, setPorcentaje] = useState("");
  const resultado = monto && porcentaje ? (monto * porcentaje / 100).toFixed(2) : "";

  return (
    <div className="flex flex-col gap-4 items-center">
      <h2 className="font-bold text-2xl mb-2 text-blue-700">Cálculo de Impuestos</h2>
      <div className="flex flex-wrap gap-4 w-full justify-center">
        <input type="number" placeholder="Monto" value={monto} onChange={e => setMonto(e.target.value)} className="input w-40 px-4 py-3 rounded-lg border border-gray-300 text-lg focus:ring-2 focus:ring-blue-400" />
        <input type="number" placeholder="Porcentaje (%)" value={porcentaje} onChange={e => setPorcentaje(e.target.value)} className="input w-40 px-4 py-3 rounded-lg border border-gray-300 text-lg focus:ring-2 focus:ring-blue-400" />
      </div>
      <div className="mt-4 text-xl">Impuesto: <span className="font-bold text-green-600">{resultado ? `$${resultado}` : "--"}</span></div>
    </div>
  );
}

// Calculadora de interés simple
function InteresSimple() {
  const [capital, setCapital] = useState("");
  const [tasa, setTasa] = useState("");
  const [tiempo, setTiempo] = useState("");
  const resultado = capital && tasa && tiempo ? (capital * tasa * tiempo / 100).toFixed(2) : "";

  return (
    <div className="flex flex-col gap-4 items-center">
      <h2 className="font-bold text-2xl mb-2 text-blue-700">Interés Simple</h2>
      <div className="flex flex-wrap gap-4 w-full justify-center">
        <input type="number" placeholder="Capital" value={capital} onChange={e => setCapital(e.target.value)} className="input w-40 px-4 py-3 rounded-lg border border-gray-300 text-lg focus:ring-2 focus:ring-blue-400" />
        <input type="number" placeholder="Tasa (%)" value={tasa} onChange={e => setTasa(e.target.value)} className="input w-40 px-4 py-3 rounded-lg border border-gray-300 text-lg focus:ring-2 focus:ring-blue-400" />
        <input type="number" placeholder="Tiempo (años)" value={tiempo} onChange={e => setTiempo(e.target.value)} className="input w-40 px-4 py-3 rounded-lg border border-gray-300 text-lg focus:ring-2 focus:ring-blue-400" />
      </div>
      <div className="mt-4 text-xl">Interés: <span className="font-bold text-green-600">{resultado ? `$${resultado}` : "--"}</span></div>
    </div>
  );
}

// Calculadora de interés compuesto
function InteresCompuesto() {
  const [capital, setCapital] = useState("");
  const [tasa, setTasa] = useState("");
  const [tiempo, setTiempo] = useState("");
  const resultado = capital && tasa && tiempo
    ? (capital * Math.pow(1 + tasa / 100, tiempo) - capital).toFixed(2)
    : "";

  return (
    <div className="flex flex-col gap-4 items-center">
      <h2 className="font-bold text-2xl mb-2 text-blue-700">Interés Compuesto</h2>
      <div className="flex flex-wrap gap-4 w-full justify-center">
        <input type="number" placeholder="Capital" value={capital} onChange={e => setCapital(e.target.value)} className="input w-40 px-4 py-3 rounded-lg border border-gray-300 text-lg focus:ring-2 focus:ring-blue-400" />
        <input type="number" placeholder="Tasa (%)" value={tasa} onChange={e => setTasa(e.target.value)} className="input w-40 px-4 py-3 rounded-lg border border-gray-300 text-lg focus:ring-2 focus:ring-blue-400" />
        <input type="number" placeholder="Tiempo (años)" value={tiempo} onChange={e => setTiempo(e.target.value)} className="input w-40 px-4 py-3 rounded-lg border border-gray-300 text-lg focus:ring-2 focus:ring-blue-400" />
      </div>
      <div className="mt-4 text-xl">Interés: <span className="font-bold text-green-600">{resultado ? `$${resultado}` : "--"}</span></div>
    </div>
  );
}

// Regla de tres simple
function ReglaDeTres() {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [c, setC] = useState("");
  const resultado = a && b && c ? (b * c / a).toFixed(2) : "";

  return (
    <div className="flex flex-col gap-4 items-center">
      <h2 className="font-bold text-2xl mb-2 text-blue-700">Regla de Tres</h2>
      <div className="flex flex-wrap gap-4 w-full justify-center">
        <input type="number" placeholder="A" value={a} onChange={e => setA(e.target.value)} className="input w-40 px-4 py-3 rounded-lg border border-gray-300 text-lg focus:ring-2 focus:ring-blue-400" />
        <input type="number" placeholder="B" value={b} onChange={e => setB(e.target.value)} className="input w-40 px-4 py-3 rounded-lg border border-gray-300 text-lg focus:ring-2 focus:ring-blue-400" />
        <input type="number" placeholder="C" value={c} onChange={e => setC(e.target.value)} className="input w-40 px-4 py-3 rounded-lg border border-gray-300 text-lg focus:ring-2 focus:ring-blue-400" />
      </div>
      <div className="mt-4 text-xl">Resultado: <span className="font-bold text-green-600">{resultado ? resultado : "--"}</span></div>
    </div>
  );
}

// Calculadora básica
function Basica() {
  const [expresion, setExpresion] = useState("");
  let resultado = "";
  try {
    // eslint-disable-next-line no-eval
    resultado = expresion ? eval(expresion) : "";
  } catch {
    resultado = "Error";
  }

  return (
    <div className="flex flex-col gap-4 items-center">
      <h2 className="font-bold text-2xl mb-2 text-blue-700">Calculadora Básica</h2>
      <div className="flex flex-wrap gap-4 w-full justify-center">
        <input type="text" placeholder="Ej: 2+2*3" value={expresion} onChange={e => setExpresion(e.target.value)} className="input w-80 px-4 py-3 rounded-lg border border-gray-300 text-lg focus:ring-2 focus:ring-blue-400" />
      </div>
      <div className="mt-4 text-xl">Resultado: <span className="font-bold text-green-600">{resultado !== "" ? resultado : "--"}</span></div>
    </div>
  );
}
