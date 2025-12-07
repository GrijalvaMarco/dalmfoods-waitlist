import React from 'react';

const Values = () => {
    const values = [
        {
            title: 'Compromiso',
            description: 'Nos comprometemos con la excelencia en cada servicio que ofrecemos.',
            icon: '🤝'
        },
        {
            title: 'Transparencia',
            description: 'Operamos con honestidad y claridad en todas nuestras relaciones.',
            icon: '💎'
        },
        {
            title: 'Calidad',
            description: 'Garantizamos los más altos estándares en alimentación y servicio.',
            icon: '⭐'
        },
        {
            title: 'Responsabilidad Social',
            description: 'Contribuimos al bienestar de nuestra comunidad y medio ambiente.',
            icon: '🌱'
        },
        {
            title: 'Cercanía Humana',
            description: 'Valoramos las relaciones personales y el trato cercano con cada cliente.',
            icon: '❤️'
        },
        {
            title: 'Eficiencia',
            description: 'Optimizamos procesos para ofrecer el mejor servicio en el menor tiempo.',
            icon: '⚡'
        }
    ];

    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold mb-4">Nuestros Valores</h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Los principios que guían cada decisión y acción en DALM
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {values.map((value, index) => (
                        <div
                            key={index}
                            className="p-8 bg-gray-50 rounded-xl hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-orange-500"
                        >
                            <div className="text-5xl mb-4">{value.icon}</div>
                            <h3 className="text-2xl font-bold mb-3">{value.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{value.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Values;
