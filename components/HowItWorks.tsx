import React from 'react';

export default function HowItWorks() {
    return (
        <section className="bg-white rounded-3xl p-8 md:p-12 border">
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center justify-center px-4 py-2 bg-gray-200 rounded-full mb-4">
                        <span className="text-gray-800 font-semibold">Proceso Simple</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        ¿Cómo Funciona DALM FOODS?
                    </h2>
                    <p className="text-lg text-gray-600">
                        Un sistema sencillo para la empresa, una experiencia clara para el colaborador.
                    </p>
                </div>

                <div className="space-y-6 mb-12">
                    <div className="flex items-start bg-gray-50 rounded-2xl p-6 border hover:shadow-md transition-shadow">
                        <div className="flex-shrink-0 w-12 h-12 bg-gray-900 text-white rounded-full flex items-center justify-center font-bold text-xl mr-4">
                            1
                        </div>
                        <div>
                            <h3 className="font-bold text-xl text-gray-900 mb-2">La empresa se afilia a DALM FOODS</h3>
                            <p className="text-gray-700">Se define el número de colaboradores y el porcentaje de subsidio que desea otorgar.</p>
                        </div>
                    </div>

                    <div className="flex items-start bg-gray-50 rounded-2xl p-6 border hover:shadow-md transition-shadow">
                        <div className="flex-shrink-0 w-12 h-12 bg-gray-900 text-white rounded-full flex items-center justify-center font-bold text-xl mr-4">
                            2
                        </div>
                        <div>
                            <h3 className="font-bold text-xl text-gray-900 mb-2">Los colaboradores se registran</h3>
                            <p className="text-gray-700">Cada colaborador accede a la red de cocinas afiliadas mediante la plataforma.</p>
                        </div>
                    </div>

                    <div className="flex items-start bg-gray-50 rounded-2xl p-6 border hover:shadow-md transition-shadow">
                        <div className="flex-shrink-0 w-12 h-12 bg-gray-900 text-white rounded-full flex items-center justify-center font-bold text-xl mr-4">
                            3
                        </div>
                        <div>
                            <h3 className="font-bold text-xl text-gray-900 mb-2">El colaborador elige cómo consumir</h3>
                            <div className="mt-3 space-y-2">
                                <div className="flex items-start pl-4">
                                    <img src="/Check.png" alt="check" className="w-5 h-5 mr-2 mt-1" />
                                    <span className="text-gray-700">Acudir directamente a una cocina afiliada identificada con el distintivo DALM FOODS</span>
                                </div>
                                <div className="flex items-start pl-4">
                                    <img src="/Check.png" alt="check" className="w-5 h-5 mr-2 mt-1" />
                                    <span className="text-gray-700">Solicitar su comida para entrega en la empresa</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-start bg-gray-50 rounded-2xl p-6 border hover:shadow-md transition-shadow">
                        <div className="flex-shrink-0 w-12 h-12 bg-gray-900 text-white rounded-full flex items-center justify-center font-bold text-xl mr-4">
                            4
                        </div>
                        <div>
                            <h3 className="font-bold text-xl text-gray-900 mb-2">DALM FOODS coordina la operación</h3>
                            <p className="text-gray-700">Gestión de pedidos, control de consumo y soporte a la empresa.</p>
                        </div>
                    </div>
                </div>

                <div className="bg-gray-900 rounded-2xl p-8 text-white">
                    <h3 className="font-bold text-2xl mb-4 text-center">Todo el proceso está diseñado para ser:</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                        <div className="bg-white/10 rounded-xl p-4 border border-white/20">
                            <p className="font-bold text-lg">Ágil</p>
                        </div>
                        <div className="bg-white/10 rounded-xl p-4 border border-white/20">
                            <p className="font-bold text-lg">Transparente</p>
                        </div>
                        <div className="bg-white/10 rounded-xl p-4 border border-white/20">
                            <p className="font-bold text-lg">Fácil de usar</p>
                        </div>
                        <div className="bg-white/10 rounded-xl p-4 border border-white/20">
                            <p className="font-bold text-lg">Sin fricción</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
