import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import Link from 'next/link';

export default function TermsPage() {
    return (
        <div className="bg-[url('/div.svg')] opacity-100 min-h-screen py-16">
            <MaxWidthWrapper>
                <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-12">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <h1 className="text-3xl md:text-4xl font-bold mb-4">
                            Términos y Condiciones
                        </h1>
                        <p className="text-gray-600">
                            Última actualización: Diciembre 2025
                        </p>
                    </div>

                    {/* Content */}
                    <div className="prose prose-lg max-w-none space-y-8">
                        <p className="text-lg text-gray-700">
                            Bienvenido. Estos Términos y Condiciones regulan el acceso y uso de la plataforma,
                            aplicaciones y servicios proporcionados por <strong>DALM Foods</strong> ("la Plataforma").
                        </p>

                        <p className="text-lg text-gray-700">
                            Al acceder o utilizar la Plataforma, el usuario acepta estos Términos.
                        </p>

                        {/* Section 1 */}
                        <section>
                            <h2 className="text-xl font-bold text-gray-900 mb-4">1. Objeto</h2>
                            <p className="text-gray-700">
                                La Plataforma ofrece servicios digitales que incluyen: acceso a contenidos,
                                herramientas administrativas, funcionalidades de gestión de beneficios alimentarios,
                                comercio electrónico, interacción entre usuarios o terceros, así como cualquier
                                otro servicio habilitado por DALM Foods.
                            </p>
                        </section>

                        {/* Section 2 */}
                        <section>
                            <h2 className="text-xl font-bold text-gray-900 mb-4">2. Usuarios</h2>
                            <p className="text-gray-700 mb-3">
                                Los servicios están dirigidos a distintos tipos de usuarios:
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                                <li>Empresas registradas</li>
                                <li>Colaboradores/Empleados</li>
                                <li>Cocinas y restaurantes afiliados</li>
                                <li>Administradores</li>
                            </ul>
                            <p className="text-gray-700 mt-3">
                                El acceso podrá requerir registro, verificación o autorización previa.
                            </p>
                        </section>

                        {/* Section 3 */}
                        <section>
                            <h2 className="text-xl font-bold text-gray-900 mb-4">3. Uso de la Plataforma</h2>
                            <p className="text-gray-700 mb-3">El usuario se compromete a:</p>
                            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                                <li>Proporcionar información veraz y actualizada</li>
                                <li>Hacer uso lícito de la Plataforma</li>
                                <li>No utilizar los servicios con fines fraudulentos, ilegales o contrarios a estos términos</li>
                                <li>Mantener la confidencialidad de sus credenciales de acceso</li>
                            </ul>
                            <p className="text-gray-700 mt-3">
                                La Plataforma se reserva el derecho de suspender o limitar el acceso ante incumplimientos.
                            </p>
                        </section>

                        {/* Section 4 */}
                        <section>
                            <h2 className="text-xl font-bold text-gray-900 mb-4">4. Servicios de Terceros</h2>
                            <p className="text-gray-700">
                                La Plataforma puede integrar servicios, productos o herramientas provenientes de terceros
                                (cocinas locales, procesadores de pago, etc.). DALM Foods no se hace cargo por la calidad,
                                disponibilidad o desempeño de dichos servicios externos.
                            </p>
                        </section>

                        {/* Section 5 */}
                        <section>
                            <h2 className="text-xl font-bold text-gray-900 mb-4">5. Disponibilidad</h2>
                            <p className="text-gray-700">
                                La Plataforma podrá experimentar interrupciones, mantenimientos o actualizaciones.
                                No se garantiza disponibilidad continua ni ausencia de errores.
                            </p>
                        </section>

                        {/* Section 6 */}
                        <section>
                            <h2 className="text-xl font-bold text-gray-900 mb-4">6. Responsabilidad</h2>
                            <p className="text-gray-700 mb-3">
                                El uso de la Plataforma es bajo responsabilidad del usuario. DALM Foods no será responsable por:
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                                <li>Fallos técnicos o de conectividad</li>
                                <li>Contenido o servicios proporcionados por terceros</li>
                                <li>Daños derivados del uso indebido o no autorizado de la Plataforma</li>
                            </ul>
                            <p className="text-gray-700 mt-3">
                                La responsabilidad total de DALM Foods, en caso de aplicar, se limitará al monto
                                pagado por el usuario en los últimos 12 meses.
                            </p>
                        </section>

                        {/* Section 7 */}
                        <section>
                            <h2 className="text-xl font-bold text-gray-900 mb-4">7. Pagos</h2>
                            <p className="text-gray-700 mb-3">En caso de existir servicios de pago:</p>
                            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                                <li>Las tarifas, cargos y condiciones serán comunicadas dentro de la Plataforma</li>
                                <li>Los pagos no son reembolsables salvo disposición legal o política específica</li>
                                <li>Se podrán utilizar procesadores de pago externos</li>
                            </ul>
                        </section>

                        {/* Section 8 */}
                        <section>
                            <h2 className="text-xl font-bold text-gray-900 mb-4">8. Propiedad Intelectual</h2>
                            <p className="text-gray-700">
                                Todos los elementos de la Plataforma (software, diseño, marcas, contenido) pertenecen
                                a DALM Foods o cuentan con licencias correspondientes. Está prohibido reproducir,
                                distribuir o modificar sin autorización.
                            </p>
                        </section>

                        {/* Section 9 */}
                        <section>
                            <h2 className="text-xl font-bold text-gray-900 mb-4">9. Modificaciones</h2>
                            <p className="text-gray-700">
                                DALM Foods puede modificar estos Términos en cualquier momento. El uso posterior
                                implica aceptación de los términos modificados.
                            </p>
                        </section>

                        {/* Section 10 */}
                        <section>
                            <h2 className="text-xl font-bold text-gray-900 mb-4">10. Ley Aplicable y Jurisdicción</h2>
                            <p className="text-gray-700">
                                Estos Términos se regirán por las leyes aplicables de <strong>México</strong> y
                                cualquier controversia será resuelta en los tribunales competentes de dicha jurisdicción.
                            </p>
                        </section>

                        {/* Section 11 */}
                        <section>
                            <h2 className="text-xl font-bold text-gray-900 mb-4">11. Contacto</h2>
                            <p className="text-gray-700 mb-3">
                                Para consultas relacionadas con estos Términos:
                            </p>
                            <div className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded">
                                <p className="text-gray-800">
                                    📧 Email: <a href="mailto:contacto@dalmfoods.com.mx" className="text-orange-600 hover:underline font-medium">contacto@dalmfoods.com.mx</a>
                                </p>
                                <p className="text-gray-800 mt-2">
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
