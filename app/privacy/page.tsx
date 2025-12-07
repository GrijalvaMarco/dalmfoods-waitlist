import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import Link from 'next/link';

export default function PrivacyPage() {
    return (
        <div className="bg-[url('/div.svg')] opacity-100 min-h-screen py-16">
            <MaxWidthWrapper>
                <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-12">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">
                            Aviso de Privacidad
                        </h1>
                        <p className="text-gray-600">
                            Última actualización: Diciembre 2025
                        </p>
                    </div>

                    {/* Content */}
                    <div className="prose prose-lg max-w-none space-y-8">
                        <p className="text-lg text-gray-700">
                            Este Aviso describe cómo <strong>DALM Foods</strong> ("el Responsable") recaba,
                            usa, almacena y protege los datos personales de los usuarios.
                        </p>

                        {/* Section 1 */}
                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Identidad del Responsable</h2>
                            <div className="bg-gray-50 border-l-4 border-orange-500 p-6 rounded">
                                <p className="text-gray-800 mb-2">
                                    <strong>DALM Foods</strong>
                                </p>
                                <p className="text-gray-700 mb-2">
                                    📍 Domicilio: Ciudad de México, México
                                </p>
                                <p className="text-gray-700">
                                    📧 Contacto: <a href="mailto:contacto@dalmfoods.com.mx" className="text-orange-600 hover:underline">contacto@dalmfoods.com.mx</a>
                                </p>
                                <p className="text-gray-700 mt-2">
                                    📱 Teléfono: <a href="tel:+525576350310" className="text-orange-600 hover:underline">+52 (55) 7635-0310</a>
                                </p>
                            </div>
                        </section>

                        {/* Section 2 */}
                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Datos que Podemos Recabar</h2>
                            <p className="text-gray-700 mb-3">
                                Dependiendo de la interacción con la Plataforma, se pueden solicitar datos como:
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                                <li>Datos de identificación (nombre, RFC)</li>
                                <li>Datos de contacto (correo electrónico, teléfono)</li>
                                <li>Datos de acceso a la Plataforma (usuario, contraseña)</li>
                                <li>Información necesaria para el funcionamiento del servicio (tipo de usuario, empresa)</li>
                                <li>Datos de pago (cuando aplique)</li>
                                <li>Datos técnicos del dispositivo o navegación</li>
                            </ul>
                            <p className="text-gray-700 mt-3 font-medium">
                                No se recabarán datos sensibles sin consentimiento expreso.
                            </p>
                        </section>

                        {/* Section 3 */}
                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Finalidades del Tratamiento</h2>

                            <div className="mb-6">
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">Finalidades Principales:</h3>
                                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                                    <li>Proveer los servicios de la Plataforma</li>
                                    <li>Gestionar cuentas de usuario (empresas, colaboradores, cocinas)</li>
                                    <li>Procesar pagos y transacciones</li>
                                    <li>Dar cumplimiento a obligaciones contractuales o legales</li>
                                    <li>Brindar soporte técnico y atención al cliente</li>
                                    <li>Gestionar beneficios de alimentación corporativa</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">Finalidades Secundarias (Opcionales):</h3>
                                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                                    <li>Envío de información, promociones o comunicaciones comerciales</li>
                                    <li>Análisis estadístico o de mejora de servicios</li>
                                    <li>Personalización de la experiencia del usuario</li>
                                </ul>
                            </div>
                        </section>

                        {/* Section 4 */}
                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Transferencia de Datos</h2>
                            <p className="text-gray-700 mb-3">Los datos pueden compartirse con:</p>
                            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                                <li>Proveedores de servicios tecnológicos (hosting, almacenamiento)</li>
                                <li>Procesadores de pago</li>
                                <li>Cocinas y restaurantes afiliados (solo información necesaria para el servicio)</li>
                                <li>Autoridades competentes cuando la ley lo requiera</li>
                            </ul>
                            <p className="text-gray-700 mt-3 font-medium">
                                No se venden datos personales a terceros.
                            </p>
                        </section>

                        {/* Section 5 */}
                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">
                                5. Derechos ARCO (Acceso, Rectificación, Cancelación y Oposición)
                            </h2>
                            <p className="text-gray-700 mb-4">
                                El titular puede ejercer sus derechos ARCO enviando una solicitud a:
                            </p>
                            <div className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded mb-4">
                                <p className="text-gray-800">
                                    📧 <a href="mailto:contacto@dalmfoods.com.mx" className="text-orange-600 hover:underline font-medium">contacto@dalmfoods.com.mx</a>
                                </p>
                            </div>
                            <p className="text-gray-700">
                                La solicitud deberá incluir:
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mt-2">
                                <li>Nombre completo del titular</li>
                                <li>Domicilio o correo electrónico para recibir respuesta</li>
                                <li>Documentos que acrediten la identidad</li>
                                <li>Descripción clara del derecho que desea ejercer</li>
                            </ul>
                            <p className="text-gray-700 mt-3">
                                La respuesta se dará en un plazo máximo de 20 días hábiles.
                            </p>
                        </section>

                        {/* Section 6 */}
                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Seguridad de los Datos</h2>
                            <p className="text-gray-700">
                                DALM Foods implementa medidas administrativas, técnicas y físicas para proteger
                                la información contra accesos no autorizados, pérdida, alteración o destrucción.
                                Estas medidas incluyen:
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mt-3">
                                <li>Cifrado de datos sensibles</li>
                                <li>Acceso restringido a información personal</li>
                                <li>Monitoreo de sistemas</li>
                                <li>Capacitación del personal</li>
                            </ul>
                        </section>

                        {/* Section 7 */}
                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Conservación de Datos</h2>
                            <p className="text-gray-700">
                                Los datos serán conservados únicamente por el tiempo necesario para cumplir las
                                finalidades mencionadas o según lo requiera la legislación aplicable. Una vez
                                cumplida la finalidad, los datos serán eliminados o bloqueados.
                            </p>
                        </section>

                        {/* Section 8 */}
                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Uso de Cookies y Tecnologías Similares</h2>
                            <p className="text-gray-700">
                                La Plataforma puede utilizar cookies y tecnologías similares para mejorar la
                                experiencia del usuario, analizar el uso del sitio y personalizar contenido.
                                El usuario puede configurar su navegador para rechazar cookies, aunque esto
                                puede afectar la funcionalidad del sitio.
                            </p>
                        </section>

                        {/* Section 9 */}
                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Cambios al Aviso de Privacidad</h2>
                            <p className="text-gray-700">
                                DALM Foods se reserva el derecho de modificar este Aviso de Privacidad en
                                cualquier momento. Cualquier modificación será publicada en la Plataforma y
                                entrará en vigor a partir de dicho momento. Se recomienda revisar periódicamente
                                este aviso.
                            </p>
                        </section>

                        {/* Section 10 */}
                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Consentimiento</h2>
                            <p className="text-gray-700">
                                Al proporcionar sus datos personales a través de la Plataforma, el usuario
                                consiente el tratamiento de los mismos conforme a este Aviso de Privacidad.
                            </p>
                        </section>

                        {/* Contact Section */}
                        <section className="bg-gray-50 rounded-xl p-6 border-2 border-gray-200">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contacto para Dudas o Aclaraciones</h2>
                            <p className="text-gray-700 mb-4">
                                Si tiene alguna duda o comentario sobre este Aviso de Privacidad, puede contactarnos en:
                            </p>
                            <div className="space-y-2">
                                <p className="text-gray-800">
                                    📧 Email: <a href="mailto:contacto@dalmfoods.com.mx" className="text-orange-600 hover:underline font-medium">contacto@dalmfoods.com.mx</a>
                                </p>
                                <p className="text-gray-800">
                                    📱 Teléfono: <a href="tel:+525576350310" className="text-orange-600 hover:underline font-medium">+52 (55) 7635-0310</a>
                                </p>
                            </div>
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
