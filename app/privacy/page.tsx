import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import Link from 'next/link';

export default function PrivacyPage() {
    return (
        <div className="bg-[url('/div.svg')] opacity-100 min-h-screen py-16">
            <MaxWidthWrapper>
                <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-12">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <h1 className="text-3xl md:text-4xl font-bold mb-4">
                            Aviso de Privacidad
                        </h1>
                        <p className="text-gray-600">
                            Última actualización: Diciembre 2025
                        </p>
                    </div>

                    {/* Content */}
                    <div className="prose prose-lg max-w-none space-y-8">
                        <section>
                            <p className="text-gray-700">
                                Responsable del tratamiento de los datos personales:
                            </p>
                            <p className="text-gray-700">
                                DALM Foods S. de R.L. de C.V., con domicilio en México y correo de contacto
                                <a href="mailto:contacto@dalmfoods.com.mx" className="text-orange-600 hover:underline"> contacto@dalmfoods.com.mx</a>.
                            </p>
                        </section>

                        {/* 1. Datos personales recabados */}
                        <section>
                            <h2 className="text-xl font-bold text-gray-900 mb-4">1. Datos personales recabados</h2>
                            <p className="text-gray-700">Dependiendo del tipo de usuario, recabamos:</p>
                            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mt-2">
                                <li>Nombre, correo electrónico, teléfono</li>
                                <li>Datos fiscales y de facturación (Empresas y Restaurantes)</li>
                                <li>Dirección de entrega (si aplica)</li>
                                <li>Información relacionada con pedidos y consumo</li>
                            </ul>
                        </section>

                        {/* 2. Finalidades primarias */}
                        <section>
                            <h2 className="text-xl font-bold text-gray-900 mb-4">2. Finalidades primarias</h2>
                            <p className="text-gray-700">Los datos personales serán utilizados para:</p>
                            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mt-2">
                                <li>Proveer y operar la plataforma DALM Foods.</li>
                                <li>Procesar pedidos, pagos y entregas.</li>
                                <li>Gestionar cuentas, membresías, subsidios y reportes.</li>
                                <li>Cumplir con obligaciones legales y administrativas.</li>
                            </ul>
                        </section>

                        {/* 3. Finalidades secundarias */}
                        <section>
                            <h2 className="text-xl font-bold text-gray-900 mb-4">3. Finalidades secundarias (publicidad y personalización)</h2>
                            <p className="text-gray-700">Adicionalmente, los datos personales podrán ser utilizados para:</p>
                            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mt-2">
                                <li>Envío de promociones, recomendaciones y campañas informativas relacionadas con intereses y hábitos de consumo.</li>
                                <li>Personalización de la experiencia dentro de la plataforma, incluyendo sugerencias de restaurantes, menús o beneficios.</li>
                            </ul>
                            <p className="text-gray-700 mt-2">
                                El titular podrá negar o revocar su consentimiento para estos fines secundarios en cualquier momento, sin que ello afecte los servicios principales, enviando un correo a
                                <a href="mailto:contacto@dalmfoods.com.mx" className="text-orange-600 hover:underline"> contacto@dalmfoods.com.mx</a>.
                            </p>
                        </section>

                        {/* 4. Transferencia de datos */}
                        <section>
                            <h2 className="text-xl font-bold text-gray-900 mb-4">4. Transferencia de datos</h2>
                            <p className="text-gray-700">Los datos podrán ser compartidos con proveedores de pago, logística y servicios tecnológicos, únicamente para cumplir con las finalidades descritas.</p>
                        </section>

                        {/* 5. Derechos ARCO */}
                        <section>
                            <h2 className="text-xl font-bold text-gray-900 mb-4">5. Derechos ARCO</h2>
                            <p className="text-gray-700">
                                El titular podrá ejercer sus derechos de Acceso, Rectificación, Cancelación u Oposición (ARCO) enviando una solicitud al correo
                                <a href="mailto:contacto@dalmfoods.com.mx" className="text-orange-600 hover:underline"> contacto@dalmfoods.com.mx</a>.
                            </p>
                        </section>

                        {/* 6. Medidas de seguridad */}
                        <section>
                            <h2 className="text-xl font-bold text-gray-900 mb-4">6. Medidas de seguridad</h2>
                            <p className="text-gray-700">DALM Foods implementa medidas administrativas, técnicas y físicas para proteger los datos personales.</p>
                        </section>

                        {/* 7. Cambios al aviso de privacidad */}
                        <section>
                            <h2 className="text-xl font-bold text-gray-900 mb-4">7. Cambios al aviso de privacidad</h2>
                            <p className="text-gray-700">DALM Foods podrá modificar el presente Aviso de Privacidad. Las actualizaciones serán publicadas en la plataforma.</p>
                        </section>

                        <section>
                            <p className="text-gray-700">Al utilizar la plataforma, el usuario reconoce haber leído y aceptado el presente Aviso de Privacidad y los Términos y Condiciones.</p>
                        </section>
                    </div>

                    {/* Back to Home */}
                    <div className="mt-12 text-center pt-8 border-t border-gray-200">
                        <Link href="/" className="text-orange-600 hover:text-orange-700 font-medium">
                            ← Volver al inicio
                        </Link>
                    </div>
                </div>
            </MaxWidthWrapper>
        </div>
    );
}
