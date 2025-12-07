"use client";

import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import Image from 'next/image';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function ContactPage() {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        phone: "",
        isCompany: false,
        isRestaurant: false,
        isEmployee: false,
        additionalInfo: ""
    });
    const [active, setActive] = useState(false);
    const [message, setMessage] = useState("");
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // URL de tu Google Apps Script
        const GOOGLE_SCRIPT_URL = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL || '';

        if (!GOOGLE_SCRIPT_URL) {
            console.error('Google Script URL is not configured. Please check your .env.local file.');
            setMessage('Error de configuración. Por favor contacta al administrador.');
            setActive(true);
            setTimeout(() => {
                setActive(false);
                setMessage("");
            }, 5000);
            return;
        }

        try {
            // Preparar los datos
            const formData = {
                name: formState.name,
                email: formState.email || 'No proporcionado',
                phone: formState.phone,
                isCompany: formState.isCompany ? 'Sí' : 'No',
                isRestaurant: formState.isRestaurant ? 'Sí' : 'No',
                isEmployee: formState.isEmployee ? 'Sí' : 'No',
                additionalInfo: formState.additionalInfo || 'No proporcionado',
            };

            // Enviar a Google Sheets
            await fetch(GOOGLE_SCRIPT_URL, {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            // Redirigir a página de éxito
            router.push('/success');
        } catch (error) {
            console.error('Error sending data:', error);
            setMessage('Error al enviar el formulario. Por favor intenta de nuevo.');
            setActive(true);
            setTimeout(() => {
                setActive(false);
                setMessage("");
            }, 5000);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormState((prev) => ({
            ...prev,
            [e.target.id]: e.target.value,
        }));
    };

    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormState((prev) => ({
            ...prev,
            [e.target.id]: e.target.checked,
        }));
    };

    return (
        <div className="bg-[url('/div.svg')] opacity-100 min-h-screen py-16">
            <MaxWidthWrapper>
                {/* Header */}
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
                        <a href="mailto:contacto@dalmfoods.com.mx" className="text-orange-600 hover:underline">
                            contacto@dalmfoods.com.mx
                        </a>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-md text-center">
                        <div className="text-4xl mb-3">📱</div>
                        <h3 className="font-bold text-lg mb-2">Teléfono</h3>
                        <a href="tel:+525576350310" className="text-orange-600 hover:underline">
                            +52 (55) 7635-0310
                        </a>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-md text-center">
                        <div className="text-4xl mb-3">📍</div>
                        <h3 className="font-bold text-lg mb-2">Ubicación</h3>
                        <p className="text-gray-600">Ciudad de México, México</p>
                    </div>
                </div>

                {/* Waitlist Form */}
                <div className="max-w-3xl mx-auto">
                    <div className="flex justify-center items-center mb-6">
                        <Image src="/logo_dalmfoods.jpeg" alt="Logo DalmFoods" width={140} height={140} className="rounded-full" />
                    </div>
                    <h2 className="text-3xl mb-6 text-center font-bold">Únete a la Lista de Espera</h2>

                    {/* Notification */}
                    <div
                        style={{
                            right: active && message ? 24 : "-50%",
                        }}
                        className="fixed bottom-5 duration-200 px-4 py-2 font-semibold rounded bg-sky-200 text-black shadow-lg z-50">
                        <p>{message}</p>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg p-8 space-y-6">
                        {/* Name */}
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                Nombre Completo *
                            </label>
                            <input
                                type="text"
                                id="name"
                                value={formState.name}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                                placeholder="Tu nombre completo"
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                Correo Electrónico (Opcional)
                            </label>
                            <input
                                type="email"
                                id="email"
                                value={formState.email}
                                onChange={handleChange}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                                placeholder="tu@email.com"
                            />
                        </div>

                        {/* Phone */}
                        <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                                Teléfono de Contacto *
                            </label>
                            <input
                                type="tel"
                                id="phone"
                                value={formState.phone}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                                placeholder="55 1234 5678"
                            />
                        </div>

                        {/* User Type */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-3">
                                ¿Quién eres? (puedes seleccionar más de uno)
                            </label>
                            <div className="space-y-3">
                                <label className="flex items-center space-x-3 cursor-pointer">
                                    <input
                                        type="checkbox"
                                        id="isCompany"
                                        checked={formState.isCompany}
                                        onChange={handleCheckboxChange}
                                        className="w-5 h-5 text-orange-600 border-gray-300 rounded focus:ring-orange-500"
                                    />
                                    <span className="text-gray-700">Soy Empresa</span>
                                </label>
                                <label className="flex items-center space-x-3 cursor-pointer">
                                    <input
                                        type="checkbox"
                                        id="isRestaurant"
                                        checked={formState.isRestaurant}
                                        onChange={handleCheckboxChange}
                                        className="w-5 h-5 text-orange-600 border-gray-300 rounded focus:ring-orange-500"
                                    />
                                    <span className="text-gray-700">Soy Cocina/Restaurante</span>
                                </label>
                                <label className="flex items-center space-x-3 cursor-pointer">
                                    <input
                                        type="checkbox"
                                        id="isEmployee"
                                        checked={formState.isEmployee}
                                        onChange={handleCheckboxChange}
                                        className="w-5 h-5 text-orange-600 border-gray-300 rounded focus:ring-orange-500"
                                    />
                                    <span className="text-gray-700">Soy Colaborador/Empleado</span>
                                </label>
                            </div>
                        </div>

                        {/* Additional Info */}
                        <div>
                            <label htmlFor="additionalInfo" className="block text-sm font-medium text-gray-700 mb-2">
                                Información Adicional
                            </label>
                            <textarea
                                id="additionalInfo"
                                value={formState.additionalInfo}
                                onChange={handleChange}
                                rows={4}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                                placeholder="Nombre de tu empresa, restaurante, o cualquier información que quieras compartir..."
                            />
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-4 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                        >
                            Enviar Solicitud
                        </button>
                    </form>
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
