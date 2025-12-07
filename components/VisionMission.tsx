import React from 'react';

export default function VisionMission() {
    return (
        <section className="bg-gray-900 rounded-3xl p-8 md:p-12 text-white">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <img src="/logo_dalm.png" alt="DALM FOODS" className="w-64 h-64 mx-auto mt-[-90px]" />
                    <h2 className="text-2xl md:text-3xl font-bold mt-[-64px]">
                        Nuestra Visión y Misión
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                        <div className="text-center mb-4">
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4">
                                <span className="text-3xl">🎯</span>
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Visión</h3>
                        </div>
                        <p className="text-lg text-center leading-relaxed">
                            Convertirnos en la <span className="font-bold">plataforma líder de alimentación corporativa inteligente</span> a nivel global.
                        </p>
                    </div>

                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                        <div className="text-center mb-4">
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4">
                                <span className="text-3xl">💫</span>
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Misión</h3>
                        </div>
                        <p className="text-lg text-center leading-relaxed">
                            Hacer que <span className="font-bold">millones de personas puedan comer mejor</span> todos los días, gracias a las empresas donde trabajan.
                        </p>
                    </div>
                </div>

                <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 border border-white/30">
                    <p className="text-2xl md:text-3xl font-bold text-center italic">
                        "DALM FOODS: Comida que conecta. De casa al corazón de tu empresa."
                    </p>
                </div>

                <div className="mt-8 text-center">
                    <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
                        <span className="font-semibold text-lg">Transformando la cultura laboral a través de la alimentación</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
