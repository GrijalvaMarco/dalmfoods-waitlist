import React from 'react';
import Link from 'next/link';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-900 text-white py-12 mt-20">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    {/* Company Info */}
                    <div className="col-span-1 md:col-span-2">
                        <div className="flex items-center mb-4">
                            <img src='/logo_dalmfoods.jpeg' alt='DALM Foods Logo' className="h-16 w-16 rounded-full mr-3" />
                            <h3 className="text-2xl font-bold">DALM Foods</h3>
                        </div>
                        <p className="text-gray-400 mb-4">
                            Transformando la cultura laboral a través de la alimentación corporativa inteligente.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-bold mb-4">Enlaces Rápidos</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/" className="text-gray-400 hover:text-orange-500 transition-colors">
                                    Inicio
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" className="text-gray-400 hover:text-orange-500 transition-colors">
                                    ¿Quiénes somos?
                                </Link>
                            </li>
                            <li>
                                <Link href="/how-it-works" className="text-gray-400 hover:text-orange-500 transition-colors">
                                    ¿Cómo funciona?
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-gray-400 hover:text-orange-500 transition-colors">
                                    Contacto
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-bold mb-4">Contacto</h4>
                        <ul className="space-y-3 text-gray-400">
                            <li className="flex items-start">
                                <span className="mr-2">📧</span>
                                <a href="mailto:contacto@dalfoods.com.mx" className="hover:text-orange-500 transition-colors">
                                    contacto@dalfoods.com.mx
                                </a>
                            </li>
                            <li className="flex items-start">
                                <span className="mr-2">📱</span>
                                <a href="tel:+525576350310" className="hover:text-orange-500 transition-colors">
                                    +52 (55) 7635-0310
                                </a>
                            </li>
                            <li className="flex items-start">
                                <span className="mr-2">📍</span>
                                <span>
                                    Ciudad de México, México
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Stakeholder Links */}
                <div className="border-t border-gray-800 pt-8 mb-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                        <Link
                            href="/for-companies"
                            className="bg-gray-800 hover:bg-orange-600 transition-colors p-4 rounded-lg"
                        >
                            <h5 className="font-bold mb-1">Para Empresas</h5>
                            <p className="text-sm text-gray-400">Beneficios corporativos</p>
                        </Link>
                        <Link
                            href="/for-employees"
                            className="bg-gray-800 hover:bg-orange-600 transition-colors p-4 rounded-lg"
                        >
                            <h5 className="font-bold mb-1">Para Colaboradores</h5>
                            <p className="text-sm text-gray-400">Comida subsidiada</p>
                        </Link>
                        <Link
                            href="/for-kitchens"
                            className="bg-gray-800 hover:bg-orange-600 transition-colors p-4 rounded-lg"
                        >
                            <h5 className="font-bold mb-1">Para Cocinas</h5>
                            <p className="text-sm text-gray-400">Únete a nuestra red</p>
                        </Link>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-800 pt-8 text-center">
                    <p className="text-gray-400 text-sm">
                        © {currentYear} DALM Foods. Todos los derechos reservados.
                    </p>
                    <div className="mt-4 flex justify-center space-x-6 text-sm">
                        <Link href="/privacy" className="text-gray-400 hover:text-orange-500 transition-colors">
                            Política de Privacidad
                        </Link>
                        <Link href="/terms" className="text-gray-400 hover:text-orange-500 transition-colors">
                            Términos y Condiciones
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
