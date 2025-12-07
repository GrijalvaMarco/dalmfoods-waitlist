import React from 'react';
import Link from 'next/link';
import HeartButton from './ui/heartbutton';

const ForKitchens = () => {
    return (
        <section className="py-16 bg-gradient-to-b from-white to-gray-50">
            <div className="max-w-7xl mx-auto px-4">
                {/* Hero Section */}
                <div className="text-center mb-16">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                        AYÚDANOS A CRECER CONTIGO<br />
                        <span className="text-orange-600">Y CONVIERTE TU TALENTO EN LA COCINA</span><br />
                        EN UN INGRESO CONSTANTE
                    </h1>
                </div>

                {/* Main Content */}
                <div className="max-w-4xl mx-auto space-y-8 mb-12">
                    <div className="bg-white p-8 rounded-xl shadow-md">
                        <p className="text-lg text-gray-700 leading-relaxed mb-6">
                            En DALM creemos en el talento de las personas que saben cocinar con <strong>pasión</strong>,
                            <strong> sazón</strong> y <strong>compromiso</strong>.
                        </p>
                        <p className="text-lg text-gray-700 leading-relaxed mb-6">
                            Si buscas una oportunidad para aumentar tus ingresos constantes y sin necesidad de pagar grandes
                            cantidades de publicidad o intermediarios abusivos, este espacio es para ti.
                        </p>
                        <p className="text-xl text-gray-700 leading-relaxed font-bold text-orange-600">
                            Aquí puedes crecer haciendo lo que sabes hacer mejor: cocinar.
                        </p>
                    </div>

                    {/* Benefits Grid */}
                    <div className="grid md:grid-cols-2 gap-6 my-12">
                        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                            <div className="text-4xl mb-3">💰</div>
                            <h3 className="font-bold text-xl mb-2">Ingresos Constantes</h3>
                            <p className="text-gray-600">
                                Recibe pedidos diarios de empresas y sus colaboradores. Ingresos predecibles y recurrentes.
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                            <div className="text-4xl mb-3">🎯</div>
                            <h3 className="font-bold text-xl mb-2">Sin Publicidad Costosa</h3>
                            <p className="text-gray-600">
                                Nosotros conectamos tu cocina con clientes corporativos. Tú solo cocina.
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                            <div className="text-4xl mb-3">📱</div>
                            <h3 className="font-bold text-xl mb-2">Plataforma Fácil</h3>
                            <p className="text-gray-600">
                                Gestiona pedidos, menús y pagos desde una sola aplicación.
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                            <div className="text-4xl mb-3">🤝</div>
                            <h3 className="font-bold text-xl mb-2">Sin Intermediarios Abusivos</h3>
                            <p className="text-gray-600">
                                Comisiones justas y transparentes. Tú te quedas con la mayor parte.
                            </p>
                        </div>
                    </div>

                    {/* How it Works */}
                    {/* <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-8 rounded-xl shadow-lg text-white">
                        <h2 className="text-3xl font-bold mb-6 text-center">¿Cómo Funciona?</h2>
                        <div className="space-y-4">
                            <div className="flex items-start space-x-4">
                                <div className="bg-white text-orange-600 rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">
                                    1
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg mb-1">Regístrate</h3>
                                    <p>Completa tu perfil y cuéntanos sobre tu cocina</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="bg-white text-orange-600 rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">
                                    2
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg mb-1">Crea tu Menú</h3>
                                    <p>Define tus platillos, precios y capacidad diaria</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="bg-white text-orange-600 rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">
                                    3
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg mb-1">Recibe Pedidos</h3>
                                    <p>Los colaboradores de empresas cercanas ordenan tu comida</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="bg-white text-orange-600 rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">
                                    4
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg mb-1">Cocina y Entrega</h3>
                                    <p>Prepara los pedidos y coordina la entrega o recolección</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="bg-white text-orange-600 rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">
                                    5
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg mb-1">Recibe tu Pago</h3>
                                    <p>Pagos automáticos y puntuales cada semana</p>
                                </div>
                            </div>
                        </div>
                    </div> */}

                    {/* Requirements */}
                    <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-8 rounded-xl shadow-lg text-white">
                        <h2 className="text-2xl font-bold mb-6 text-center">¿Qué Necesitas?</h2>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="flex items-center space-x-3">
                                <span className="text-green-500 text-2xl">✓</span>
                                <span>Pasión por cocinar</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <span className="text-green-500 text-2xl">✓</span>
                                <span>Cocina equipada</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <span className="text-green-500 text-2xl">✓</span>
                                <span>Compromiso con la calidad</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <span className="text-green-500 text-2xl">✓</span>
                                <span>Capacidad para pedidos diarios</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="text-center bg-gray-900 text-white p-12 rounded-2xl">
                    <h2 className="text-3xl font-bold mb-4">
                        ¿Listo para cocinar con DALM?
                    </h2>
                    <p className="text-lg mb-6">
                        Únete a nuestra red de cocinas y empieza a generar ingresos constantes
                    </p>
                    <Link href="/contact" className="inline-block">
                        <HeartButton text="Quiero Cocinar con DALM" />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ForKitchens;
