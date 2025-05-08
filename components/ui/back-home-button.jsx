import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function BackHomeButton() {
  return (
    <Link
      href="/"
      className="inline-flex items-center space-x-2 px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors"
    >
      <ArrowLeft className="w-4 h-4" />
      <span>Volver al inicio</span>
    </Link>
  );
}
