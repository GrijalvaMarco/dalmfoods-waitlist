import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import Image from 'next/image';
import React from 'react';
import HeartButton from '@/components/ui/heartbutton';
import Link from 'next/link';

export default function ContactPage() {
    return (
        <div className="bg-[url('/div.svg')] opacity-100 min-h-screen">
            <MaxWidthWrapper className="py-16">
                <div className="text-center mb-12">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6">
                        Contacto
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        ¿Listo para transformar la alimentación en tu empresa? Contáctanos
                    </p>
                </div>

                {/* Contact Info Cards */}
                <div className="grid md:grid-cols-3 gap-6 mb-12">
                    <div className="bg-white p-6 rounded-xl shadow-md text-center">
                        <div className="text-4xl mb-3">📧</div>
                        <h3 className="font-bold text-lg mb-2">Email</h3>
                        <a href="mailto:contacto@dalfoods.com.mx" className="text-orange-600 hover:underline">
                            contacto@dalfoods.com.mx
                        </a>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-md text-center">
                        <div className="text-4xl mb-3">📱</div>
                        <h3 className="font-bold text-lg mb-2">Teléfono</h3>
                        <a href="tel:+525512345678" className="text-orange-600 hover:underline">
                            +52 (55) 1234-5678
                        </a>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-md text-center">
                        <div className="text-4xl mb-3">📍</div>
                        <h3 className="font-bold text-lg mb-2">Ubicación</h3>
                        <p className="text-gray-600">Ciudad de México, México</p>
                    </div>
                </div>

                {/* Waitlist Form Section */}
                <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 max-w-2xl mx-auto">
                    <div className="text-center mb-8">
                        <Image src="/logo_dalmfoods.jpeg" alt="Logo DalmFoods" width={100} height={100} className="mx-auto rounded-full mb-4" />
                        <h2 className="text-3xl font-bold mb-4">Únete a la Lista de Espera</h2>
                        <p className="text-gray-600">
                            Déjanos tus datos y nos pondremos en contacto contigo para brindarte más información
                        </p>
                    </div>

                    <Link href="/waitlist" className="block">
                        <div className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 transition-all p-8 rounded-xl text-center cursor-pointer">
                            <h3 className="text-white text-2xl font-bold mb-4">
                                Completa el Formulario de Contacto
                            </h3>
                            <div className="flex justify-center">
                                <HeartButton text="Ir al Formulario" />
                            </div>
                        </div>
                    </Link>
                </div>

                {/* Additional Info */}
                <div className="mt-12 text-center">
                    <p className="text-gray-600 mb-4">
                        ¿Tienes alguna pregunta? Estamos aquí para ayudarte
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link href="/for-companies" className="text-orange-600 hover:underline font-medium">
                            Información para Empresas
                        </Link>
                        <span className="text-gray-400">|</span>
                        <Link href="/for-employees" className="text-orange-600 hover:underline font-medium">
                            Información para Colaboradores
                        </Link>
                        <span className="text-gray-400">|</span>
                        <Link href="/for-kitchens" className="text-orange-600 hover:underline font-medium">
                            Información para Cocinas
                        </Link>
                    </div>
                </div>
            </MaxWidthWrapper>
        </div>
    );
}
