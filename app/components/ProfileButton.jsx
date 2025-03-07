"use client"
// components/ProfileButton.jsx
import { useState } from "react";

export default function ProfileButton() {
const [isMenuOpen, setIsMenuOpen] = useState(false);

const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

return (
<div className="profile-button">
    <button onClick={toggleMenu}>
        <img src="/images/profile-icon.png" alt="Perfil" />
    </button>
    {isMenuOpen && (
    <div className="profile-menu">
        <a href="#">Editar perfil</a>
        <a href="#">Configuraciones</a>
        <a href="#">Cerrar sesión</a>
    </div>
    )}
</div>
);
}