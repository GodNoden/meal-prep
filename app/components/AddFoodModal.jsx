"use client"
import { useState } from "react";

export default function AddFoodModal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button className="btn" onClick={() => setIsOpen(true)}>
        Añadir Comida
      </button>

      <input type="checkbox" checked={isOpen} onChange={() => {}} className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Registrar Comida</h3>
          <form>
            <input
              type="text"
              placeholder="Nombre de la comida"
              className="input input-bordered w-full mt-4"
            />
            <textarea
              placeholder="Descripción"
              className="textarea textarea-bordered w-full mt-4"
            ></textarea>
            <div className="modal-action">
              <button className="btn btn-primary">Guardar</button>
              <button className="btn" onClick={() => setIsOpen(false)}>
                Cancelar
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}