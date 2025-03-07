// components/FunctionButtons.jsx
import Link from "next/link";

export default function FunctionButtons() {
  return (
    <div className="function-buttons">
      <Link href="/progress">
        <button>Mi progreso</button>
      </Link>
      <Link href="/add-food">
        <button>Añadir comida</button>
      </Link>
      <Link href="/menu-weekly">
        <button>Menú semanal</button>
      </Link>
    </div>
  );
}