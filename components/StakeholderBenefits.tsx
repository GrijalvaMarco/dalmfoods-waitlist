import React from 'react';

export default function StakeholderBenefits() {
    return (
        <section className="py-12">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center justify-center px-4 py-2 bg-gray-200 rounded-full mb-4">
                        <span className="text-gray-800 font-semibold">Beneficios Reales</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Impacto Medible para Todos
                    </h2>
                </div>

                <div className="space-y-8">
                    {/* Beneficios para la Empresa */}
                    <div className="bg-white rounded-3xl p-8 border">
                        <div className="flex items-center mb-6">
                            <img src="/newsletter.png" alt="empresas" className="w-12 h-12 mr-4" />
                            <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                                Beneficios para la Empresa
                            </h3>
                        </div>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="bg-gray-50 rounded-xl p-5 border">
                                <h4 className="font-bold text-lg text-gray-900 mb-2">📈 Incremento en la productividad</h4>
                                <p className="text-gray-700">Al reducir los tiempos muertos, los colaboradores regresan más rápido, con mayor enfoque y mejor energía.</p>
                            </div>
                            <div className="bg-gray-50 rounded-xl p-5 border">
                                <h4 className="font-bold text-lg text-gray-900 mb-2">😊 Mejora en el clima laboral</h4>
                                <p className="text-gray-700">La percepción de cuidado se traduce en mayor compromiso y mejor ambiente de trabajo.</p>
                            </div>
                            <div className="bg-gray-50 rounded-xl p-5 border">
                                <h4 className="font-bold text-lg text-gray-900 mb-2">🎯 Retención de talento</h4>
                                <p className="text-gray-700">Un beneficio diario, tangible y valorado que influye en la permanencia del colaborador.</p>
                            </div>
                            <div className="bg-gray-50 rounded-xl p-5 border">
                                <h4 className="font-bold text-lg text-gray-900 mb-2">📊 Control administrativo</h4>
                                <p className="text-gray-700">Visibilidad y control del consumo sin operar comedores, compras o logística interna.</p>
                            </div>
                            <div className="bg-gray-50 rounded-xl p-5 border">
                                <h4 className="font-bold text-lg text-gray-900 mb-2">🏢 Sin inversión en infraestructura</h4>
                                <p className="text-gray-700">No requiere construcción, equipamiento, personal adicional ni activos.</p>
                            </div>
                            <div className="bg-gray-50 rounded-xl p-5 border">
                                <h4 className="font-bold text-lg text-gray-900 mb-2">💰 Beneficio 100% deducible</h4>
                                <p className="text-gray-700">El gasto se clasifica como prestación, optimizando la estructura financiera.</p>
                            </div>
                        </div>
                        <div className="mt-6 bg-gray-900 text-white rounded-xl p-4 text-center">
                            <p className="font-semibold text-lg">"La empresa no solo alimenta a su equipo, fortalece su operación."</p>
                        </div>
                    </div>

                    {/* Beneficios para RH */}
                    <div className="bg-white rounded-3xl p-8 border">
                        <div className="flex items-center mb-6">
                            <img src="/love.png" alt="rh" className="w-12 h-12 mr-4" />
                            <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                                Beneficios para Recursos Humanos
                            </h3>
                        </div>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="bg-gray-50 rounded-xl p-5 border">
                                <h4 className="font-bold text-lg text-gray-900 mb-2">✨ Beneficio real y visible</h4>
                                <p className="text-gray-700">El colaborador lo vive, lo usa y lo agradece todos los días.</p>
                            </div>
                            <div className="bg-gray-50 rounded-xl p-5 border">
                                <h4 className="font-bold text-lg text-gray-900 mb-2">💜 Percepción positiva</h4>
                                <p className="text-gray-700">El colaborador siente que la empresa se preocupa por su bienestar más allá del salario.</p>
                            </div>
                            <div className="bg-gray-50 rounded-xl p-5 border">
                                <h4 className="font-bold text-lg text-gray-900 mb-2">🤝 Estrategias de engagement</h4>
                                <p className="text-gray-700">Pilar dentro de los programas de clima laboral, bienestar y retención.</p>
                            </div>
                            <div className="bg-gray-50 rounded-xl p-5 border">
                                <h4 className="font-bold text-lg text-gray-900 mb-2">🌟 Atracción de talento</h4>
                                <p className="text-gray-700">Diferencial claro frente a empresas sin beneficios diarios tangibles.</p>
                            </div>
                            <div className="bg-gray-50 rounded-xl p-5 border">
                                <h4 className="font-bold text-lg text-gray-900 mb-2">⚡ Implementación sencilla</h4>
                                <p className="text-gray-700">Sin carga operativa: no hay que administrar compras, menús o inventarios.</p>
                            </div>
                            <div className="bg-gray-50 rounded-xl p-5 border">
                                <h4 className="font-bold text-lg text-gray-900 mb-2">📈 Métrica y control</h4>
                                <p className="text-gray-700">Permite medir uso, adopción e impacto del beneficio.</p>
                            </div>
                        </div>
                        <div className="mt-6 bg-gray-900 text-white rounded-xl p-4 text-center">
                            <p className="font-semibold text-lg">"DALM FOODS convierte el bienestar en una herramienta de gestión, no solo en un discurso."</p>
                        </div>
                    </div>

                    {/* Beneficios para el Colaborador */}
                    <div className="bg-white rounded-3xl p-8 border">
                        <div className="flex items-center mb-6">
                            <img src="/user.png" alt="colaborador" className="w-12 h-12 mr-4" />
                            <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                                Beneficios para el Colaborador
                            </h3>
                        </div>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="bg-gray-50 rounded-xl p-5 border">
                                <h4 className="font-bold text-lg text-gray-900 mb-2">🍽️ Comida cercana y accesible</h4>
                                <p className="text-gray-700">Ya no tiene que salir a improvisar. Opciones reales, cerca y pensadas para su jornada.</p>
                            </div>
                            <div className="bg-gray-50 rounded-xl p-5 border">
                                <h4 className="font-bold text-lg text-gray-900 mb-2">💵 Precio preferencial</h4>
                                <p className="text-gray-700">Siente el respaldo de su empresa en algo tan cotidiano como la comida.</p>
                            </div>
                            <div className="bg-gray-50 rounded-xl p-5 border">
                                <h4 className="font-bold text-lg text-gray-900 mb-2">⏰ Ahorro de tiempo</h4>
                                <p className="text-gray-700">Menos traslados, menos filas, menos estrés. Más tiempo para descansar.</p>
                            </div>
                            <div className="bg-gray-50 rounded-xl p-5 border">
                                <h4 className="font-bold text-lg text-gray-900 mb-2">🎯 Comodidad y flexibilidad</h4>
                                <p className="text-gray-700">Puede comer en cocina afiliada o recibir su comida en la oficina.</p>
                            </div>
                            <div className="bg-gray-50 rounded-xl p-5 border">
                                <h4 className="font-bold text-lg text-gray-900 mb-2">💪 Mejora en bienestar</h4>
                                <p className="text-gray-700">Comer mejor impacta en cómo se siente, cómo rinde y cómo termina su día.</p>
                            </div>
                        </div>
                        <div className="mt-6 bg-gray-900 text-white rounded-xl p-4 text-center">
                            <p className="font-semibold text-lg">"Cuando una empresa cuida a su gente todos los días, su gente cuida a la empresa todos los días."</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
