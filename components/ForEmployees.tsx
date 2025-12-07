import React from 'react';
import Link from 'next/link';
import HeartButton from './ui/heartbutton';

const ForEmployees = () => {
    return (
        <section className="py-16 bg-gradient-to-b from-white to-gray-50">
            <div className="max-w-7xl mx-auto px-4">
                {/* Hero Section */}
                <div className="text-center mb-16">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                        BENEFICIOS PARA<br />
                        <span className="text-orange-600">COLABORADORES</span>
                    </h1>
                    <p className="text-2xl md:text-3xl font-semibold text-gray-800">
                        Comer bien todos los días sí puede ser parte de tu trabajo
                    </p>
                </div>

                {/* Main Content */}
                <div className="max-w-4xl mx-auto space-y-8 mb-12">
                    <div className="bg-white p-8 rounded-xl shadow-md">
                        <p className="text-lg text-gray-700 leading-relaxed mb-6">
                            Sabemos que no siempre es fácil comer bien durante la jornada laboral. Muchas veces se recurre a
                            comida rápida, se gasta de más o simplemente no se come como se debería.
                        </p>
                        <p className="text-lg text-gray-700 leading-relaxed mb-6">
                            En DALM creemos que una buena alimentación no solo mejora tu salud, también tu <strong>energía</strong>,
                            tu <strong>estado de ánimo</strong> y tu <strong>rendimiento en el trabajo</strong>.
                        </p>
                        <p className="text-lg text-gray-700 leading-relaxed font-semibold text-orange-600">
                            Por eso creamos una solución pensada para ti: práctica, accesible y hecha para tu día a día.
                        </p>
                    </div>

                    {/* Benefits Grid */}
                    <div className="grid md:grid-cols-3 gap-6 my-12">
                        <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow">
                            <div className="text-4xl mb-3">🍽️</div>
                            <h3 className="font-bold text-xl mb-2">Comida Cercana</h3>
                            <p className="text-gray-600">Cocinas locales cerca de tu trabajo</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow">
                            <div className="text-4xl mb-3">💵</div>
                            <h3 className="font-bold text-xl mb-2">Subsidiada</h3>
                            <p className="text-gray-600">Tu empresa paga parte de tu comida</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow">
                            <div className="text-4xl mb-3">⏰</div>
                            <h3 className="font-bold text-xl mb-2">Ahorra Tiempo</h3>
                            <p className="text-gray-600">Pedidos rápidos y entrega eficiente</p>
                        </div>
                    </div>

                    {/* Impact Section */}
                    <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-8 rounded-xl shadow-lg text-white">
                        <h2 className="text-3xl font-bold mb-4 text-center">¿Por qué DALM?</h2>
                        <div className="grid md:grid-cols-2 gap-6 mt-6">
                            <div className="flex items-start space-x-3">
                                <span className="text-2xl">✓</span>
                                <div>
                                    <h3 className="font-bold text-lg mb-1">Variedad</h3>
                                    <p>Diferentes cocinas y menús cada día</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-3">
                                <span className="text-2xl">✓</span>
                                <div>
                                    <h3 className="font-bold text-lg mb-1">Calidad</h3>
                                    <p>Comida casera preparada con cuidado</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-3">
                                <span className="text-2xl">✓</span>
                                <div>
                                    <h3 className="font-bold text-lg mb-1">Accesible</h3>
                                    <p>Precios justos con subsidio de tu empresa</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-3">
                                <span className="text-2xl">✓</span>
                                <div>
                                    <h3 className="font-bold text-lg mb-1">Conveniente</h3>
                                    <p>Pedidos fáciles desde tu celular</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Family Impact */}
                    <div className="bg-white p-8 rounded-xl shadow-md text-center">
                        <p className="text-xl text-gray-700 leading-relaxed italic">
                            "Cuidar de tu alimentación es nuestro trabajo, porque <strong>cuidarte a ti</strong>,
                            también es <strong>cuidar de los que más amas</strong>."
                        </p>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="text-center bg-gray-900 text-white p-12 rounded-2xl">
                    <h2 className="text-3xl font-bold mb-4">
                        Refiere a tu empresa y obtén hasta un mes de menús gratis
                    </h2>
                    <p className="text-lg mb-6">
                        Ayúdanos a llevar DALM a más empresas y recibe beneficios exclusivos
                    </p>
                    <Link href="/contact" className="inline-block">
                        <HeartButton text="Referir mi Empresa" />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ForEmployees;
