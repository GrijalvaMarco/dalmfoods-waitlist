import React from 'react';
import Link from 'next/link';
import HeartButton from './ui/heartbutton';

const ForCompanies = () => {
    return (
        <section className="py-16 bg-gradient-to-b from-white to-gray-50">
            <div className="max-w-7xl mx-auto px-4">
                {/* Hero Section */}
                <div className="text-center mb-16">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                        HOY DÍA LA PRODUCTIVIDAD<br />
                        <span className="text-orange-600">YA NO DEPENDE SOLO DEL SALARIO</span>
                    </h1>
                    <p className="text-2xl md:text-3xl font-semibold text-gray-800 mb-8">
                        LAS EMPRESAS QUE ENTIENDEN EL BIENESTAR<br />
                        HOY LIDERAN EL MERCADO
                    </p>
                </div>

                {/* Main Content */}
                <div className="max-w-4xl mx-auto space-y-8 mb-12">
                    <div className="bg-white p-8 rounded-xl shadow-md">
                        <p className="text-lg text-gray-700 leading-relaxed mb-6">
                            Sabemos que hoy las empresas se enfrentan a grandes retos en la <strong>atracción y retención de talento</strong>,
                            en la <strong>productividad de sus equipos</strong> y en la creación de <strong>entornos laborales</strong> que
                            realmente generen compromiso.
                        </p>
                        <p className="text-lg text-gray-700 leading-relaxed mb-6">
                            La industria es cada vez más competida, los perfiles son más exigentes y el salario por sí solo ya no es
                            suficiente para mantener al mejor personal.
                        </p>
                        <p className="text-lg text-gray-700 leading-relaxed font-semibold">
                            Hoy, el verdadero diferenciador está en los beneficios que impactan directamente en la vida diaria del colaborador.
                        </p>
                    </div>

                    {/* Value Proposition */}
                    <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-8 rounded-xl shadow-lg text-white">
                        <h2 className="text-3xl font-bold mb-4">En DALM te apoyamos a:</h2>
                        <ul className="space-y-4 text-lg">
                            <li className="flex items-start">
                                <span className="text-2xl mr-3">✓</span>
                                <span>Fortalecer la retención de talento a través de un beneficio con alto valor percibido</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-2xl mr-3">✓</span>
                                <span>Generar un impacto real en la vida del colaborador</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-2xl mr-3">✓</span>
                                <span>Elevar la imagen de tu empresa como empleador</span>
                            </li>
                        </ul>
                    </div>

                    {/* Benefits Grid */}
                    <div className="grid md:grid-cols-3 gap-6 my-12">
                        <div className="bg-white p-6 rounded-lg shadow-md text-center">
                            <div className="text-4xl mb-3">🎯</div>
                            <h3 className="font-bold text-xl mb-2">Sin Infraestructura</h3>
                            <p className="text-gray-600">No necesitas invertir en comedores ni instalaciones</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md text-center">
                            <div className="text-4xl mb-3">💰</div>
                            <h3 className="font-bold text-xl mb-2">Control Total</h3>
                            <p className="text-gray-600">Gestiona subsidios y consumos desde una plataforma</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md text-center">
                            <div className="text-4xl mb-3">📈</div>
                            <h3 className="font-bold text-xl mb-2">Alto Impacto</h3>
                            <p className="text-gray-600">Beneficio diario que tus colaboradores valoran</p>
                        </div>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="text-center bg-gray-900 text-white p-12 rounded-2xl">
                    <h2 className="text-3xl font-bold mb-6">
                        Conoce más de nuestros beneficios y solicita asesoría personalizada para tu empresa
                    </h2>
                    <Link href="/contact" className="inline-block">
                        <HeartButton text="Solicitar Asesoría" />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ForCompanies;
