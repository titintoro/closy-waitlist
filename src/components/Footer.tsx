import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-closy-offwhite py-12 border-t border-gray-200">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {/* Logo and tagline */}
          <div className="col-span-1 md:col-span-1 lg:col-span-1">
            <Link to="/" className="inline-block">
              <span className="text-closy-maroon font-castio text-2xl">Closy</span>
            </Link>
            <p className="mt-4 text-gray-600 font-inter">
              Tu personal shopper de moda con IA que revoluciona tu armario.
            </p>
          </div>
          
          {/* Links */}
          <div>
            <h3 className="font-space font-medium text-gray-900 mb-4">Explora</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-closy-pink transition-colors">Inicio</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-space font-medium text-gray-900 mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <span className="text-gray-600">Política de privacidad</span>
              </li>
              <li>
                <span className="text-gray-600">Términos y condiciones</span>
              </li>
              <li>
                <span className="text-gray-600">Política de cookies</span>
              </li>
              <li>
                <span className="text-gray-600">Aviso legal</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-space font-medium text-gray-900 mb-4">Contacto</h3>
            <ul className="space-y-2">
              <li className="text-gray-600">hola@closy.app</li>
              <li className="text-gray-600">@closy_app</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200">
          <div className="text-sm text-gray-500 font-inter mb-4">
            <h4 className="font-medium text-gray-700 mb-2">Datos fiscales:</h4>
            <p>Alba Garcia Veguilla</p>
            <p>Calle Virgen de la Antigua, 17, 5A, Sevilla, Andalucía, 41011</p>
            <p>NIF: 77938243Y</p>
            <p>Teléfono: 619864310</p>
          </div>
          
          <p className="text-center text-gray-500 font-inter text-sm">
            © {new Date().getFullYear()} Closy. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
