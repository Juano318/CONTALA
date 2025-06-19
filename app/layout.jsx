import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { TransactionProvider } from "@/context/TransactionContext"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Contala - Finanzas Personales",
  description: "Aplicación de finanzas personales para registrar ingresos y gastos",
    generator: 'v0.dev'
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <TransactionProvider>
            {children}
          </TransactionProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
