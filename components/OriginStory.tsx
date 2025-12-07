import React from 'react';

export default function OriginStory() {
    return (
        <section className="bg-white rounded-3xl p-8 md:p-12 border">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center px-4 py-2 bg-gray-200 rounded-full mb-4">
                        <span className="text-gray-800 font-semibold">Nuestro Origen</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                        ¿Por qué nace DALM FOODS?
                    </h2>
                </div>

                <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                    <p>
                        DALM FOODS nace de una realidad que viven hoy <span className="font-bold text-gray-900">miles de empresas y millones de trabajadores</span>:
                        La necesidad de comer todos los días, pero sin soluciones reales que equilibren tiempo, costo, salud y bienestar.
                    </p>

                    <div className="bg-gray-50 rounded-2xl p-6 border">
                        <h3 className="font-bold text-xl text-gray-900 mb-4">Nace de ver:</h3>
                        <ul className="space-y-3">
                            <li className="flex items-start">
                                <img src="/Check.png" alt="check" className="w-5 h-5 mr-3 mt-1 flex-shrink-0" />
                                <span>Colaboradores que pierden tiempo valioso buscando dónde comer.</span>
                            </li>
                            <li className="flex items-start">
                                <img src="/Check.png" alt="check" className="w-5 h-5 mr-3 mt-1 flex-shrink-0" />
                                <span>Empresas que quieren cuidar a su gente, pero no encuentran una solución flexible.</span>
                            </li>
                            <li className="flex items-start">
                                <img src="/Check.png" alt="check" className="w-5 h-5 mr-3 mt-1 flex-shrink-0" />
                                <span>Cocinas locales que cocinan con calidad, pero no tienen acceso directo al mundo corporativo.</span>
                            </li>
                        </ul>
                    </div>

                    <p className="text-center text-xl font-semibold text-gray-900 py-6">
                        DALM FOODS surge para conectar estos tres mundos y convertir algo cotidiano —la comida—
                        en un beneficio corporativo inteligente, accesible, cercano y sostenible.
                    </p>

                    <div className="bg-gray-900 rounded-2xl p-8 text-white text-center">
                        <p className="text-xl md:text-2xl font-bold mb-3">
                            Alimentar bien a una persona no solo impacta su día…
                        </p>
                        <p className="text-lg">
                            impacta su desempeño, su ánimo y su compromiso con la empresa.
                        </p>
                    </div>


                    {/* Quote Section */}
                    <div className="relative bg-gradient-to-br from-orange-50 to-white rounded-2xl p-8 md:p-12 border-l-4 border-orange-500 mt-8">
                        <div className="absolute top-4 left-4 text-orange-500 opacity-20">
                            <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                            </svg>
                        </div>
                        <blockquote className="relative z-10">
                            <p className="text-2xl md:text-3xl font-bold text-gray-900 italic text-center mb-6 leading-relaxed">
                                "DALM FOODS nace donde la necesidad se encuentra con el propósito."
                            </p>
                            <footer className="text-center">
                                <div className="inline-flex flex-col items-center">
                                    <cite className="not-italic font-semibold text-lg text-gray-900">
                                        Ángel Díaz
                                    </cite>
                                    <span className="text-sm text-orange-600 font-medium mt-1">
                                        CEO, DalmFoods
                                    </span>
                                </div>
                            </footer>
                        </blockquote>
                    </div>
                </div>
            </div>
        </section>
    );
}
