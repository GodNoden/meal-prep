"use client"
import React from "react";

export default function ProfileButton() {
    return (
        <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                    <img src="/images/profile-icon.png" alt="Perfil" />
                </div>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                <li><a>Editar perfil</a></li>
                <li><a>Configuraciones</a></li>
                <li><a>Cerrar sesión</a></li>
            </ul>
        </div>
    );
}