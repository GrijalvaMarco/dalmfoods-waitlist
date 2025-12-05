import React from 'react';

export default function SolutionOverview() {
    return (
        <section className="bg-white rounded-3xl p-8 md:p-12 border">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center px-4 py-2 bg-gray-200 rounded-full mb-4">
                        <span className="text-gray-800 font-semibold">La Solución</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        DALM FOODS: Transformando el Problema en Solución
                    </h2>
                    <p className="text-lg text-gray-600">
                        Una solución inteligente, humana y perfectamente adaptable a cada empresa.
                    </p>
                </div>

                <div className="bg-gray-50 rounded-2xl p-8 border mb-8">
                    <h3 className="font-bold text-2xl text-gray-900 mb-6 text-center">
                        Un modelo de alimentación corporativa que:
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="flex items-center p-4 bg-white rounded-xl border">
                            <img src="/Check.png" alt="check" className="w-6 h-6 mr-3 flex-shrink-0" />
                            <span className="font-semibold text-gray-800">No requiere comedores</span>
                        </div>
                        <div className="flex items-center p-4 bg-white rounded-xl border">
                            <img src="/Check.png" alt="check" className="w-6 h-6 mr-3 flex-shrink-0" />
                            <span className="font-semibold text-gray-800">No requiere infraestructura</span>
                        </div>
                        <div className="flex items-center p-4 bg-white rounded-xl border">
                            <img src="/Check.png" alt="check" className="w-6 h-6 mr-3 flex-shrink-0" />
                            <span className="font-semibold text-gray-800">No genera pasivos</span>
                        </div>
                        <div className="flex items-center p-4 bg-white rounded-xl border">
                            <img src="/Check.png" alt="check" className="w-6 h-6 mr-3 flex-shrink-0" />
                            <span className="font-semibold text-gray-800">Se integra naturalmente</span>
                        </div>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-gray-50 rounded-2xl p-6 border">
                        <h4 className="font-bold text-xl mb-4 text-gray-900">Para la Empresa:</h4>
                        <ul className="space-y-2 text-gray-700">
                            <li className="flex items-start">
                                <img src="/Check.png" alt="check" className="w-5 h-5 mr-2 mt-0.5" />
                                <span>Cuida a su gente</span>
                            </li>
                            <li className="flex items-start">
                                <img src="/Check.png" alt="check" className="w-5 h-5 mr-2 mt-0.5" />
                                <span>Mantiene el control</span>
                            </li>
                            <li className="flex items-start">
                                <img src="/Check.png" alt="check" className="w-5 h-5 mr-2 mt-0.5" />
                                <span>Beneficio corporativo estratégico</span>
                            </li>
                        </ul>
                    </div>

                    <div className="bg-gray-50 rounded-2xl p-6 border">
                        <h4 className="font-bold text-xl mb-4 text-gray-900">Para el Colaborador:</h4>
                        <ul className="space-y-2 text-gray-700">
                            <li className="flex items-start">
                                <img src="/Check.png" alt="check" className="w-5 h-5 mr-2 mt-0.5" />
                                <span>Come mejor</span>
                            </li>
                            <li className="flex items-start">
                                <img src="/Check.png" alt="check" className="w-5 h-5 mr-2 mt-0.5" />
                                <span>Ahorra tiempo</span>
                            </li>
                            <li className="flex items-start">
                                <img src="/Check.png" alt="check" className="w-5 h-5 mr-2 mt-0.5" />
                                <span>Siente respaldo real todos los días</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="bg-gray-900 rounded-2xl p-8 text-white text-center">
                    <p className="text-xl md:text-2xl font-bold">
                        DALM FOODS no solo resuelve la comida de hoy, construye el bienestar de mañana.
                    </p>
                </div>
            </div>
        </section>
    );
}
