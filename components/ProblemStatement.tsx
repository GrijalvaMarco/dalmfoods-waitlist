import React from 'react';

export default function ProblemStatement() {
    return (
        <section className="bg-white rounded-3xl p-8 md:p-12 border">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center px-4 py-2 bg-gray-200 rounded-full mb-4">
                        <span className="text-gray-800 font-semibold">El Problema Real</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        La Hora de la Comida: Un Punto Crítico de Desgaste
                    </h2>
                    <p className="text-lg text-gray-600">
                        Hoy, dentro de las empresas, la hora de la comida se ha convertido sin darse cuenta en un problema operativo, humano y financiero.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div className="bg-gray-50 rounded-2xl p-6 border">
                        <h3 className="font-bold text-xl text-gray-900 mb-4 flex items-center">
                            <img src="/user.png" alt="empleados" className="w-8 h-8 mr-3" />
                            Para el Colaborador
                        </h3>
                        <ul className="space-y-3 text-gray-700">
                            <li className="flex items-start">
                                <span className="text-gray-900 mr-2">•</span>
                                <span>Salen corriendo a buscar dónde comer</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-gray-900 mr-2">•</span>
                                <span>Largas filas y traslados innecesarios</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-gray-900 mr-2">•</span>
                                <span>Gasto elevado en comida que no siempre es la mejor opción</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-gray-900 mr-2">•</span>
                                <span>Regresan tarde, con menos energía y menos enfoque</span>
                            </li>
                        </ul>
                    </div>

                    <div className="bg-gray-50 rounded-2xl p-6 border">
                        <h3 className="font-bold text-xl text-gray-900 mb-4 flex items-center">
                            <img src="/newsletter.png" alt="empresas" className="w-8 h-8 mr-3" />
                            Para la Empresa
                        </h3>
                        <ul className="space-y-3 text-gray-700">
                            <li className="flex items-start">
                                <span className="text-gray-900 mr-2">•</span>
                                <span>Pierde horas de productividad todos los días</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-gray-900 mr-2">•</span>
                                <span>No tiene control del consumo</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-gray-900 mr-2">•</span>
                                <span>No puede estandarizar un beneficio real</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-gray-900 mr-2">•</span>
                                <span>Impacto en clima laboral, desempeño y rotación</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="bg-gray-900 rounded-2xl p-8 text-white text-center">
                    <p className="text-xl md:text-2xl font-bold">
                        La comida deja de ser solo una necesidad… y se convierte en un problema operativo, humano y financiero.
                    </p>
                </div>
            </div>
        </section>
    );
}
