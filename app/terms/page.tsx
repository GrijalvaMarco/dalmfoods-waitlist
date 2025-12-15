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
                            El presente documento establece los Términos y Condiciones que regulan el acceso, uso y operación de la plataforma DALM Foods, para efectos de conocimiento, aceptación y cumplimiento por parte de las Empresas, Restaurantes, Cocinas y Usuarios finales que hagan uso de los servicios ofrecidos por DALM Foods S. de R.L. de C.V.
                        </p>
                        <p className="text-lg text-gray-700">
                            El acceso y uso de la plataforma implica la aceptación expresa de los presentes Términos y Condiciones. En caso de no estar de acuerdo con los mismos, el usuario deberá abstenerse de utilizar los servicios.
                        </p>

                        {/* 1. Definiciones */}
                        <section>
                            <h2 className="text-xl font-bold text-gray-900 mb-4">1. Definiciones</h2>
                            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                                <li><strong>Plataforma:</strong> Sistema tecnológico de DALM Foods que permite la gestión de beneficios alimenticios entre Empresas, Restaurantes/Cocinas y Empleados.</li>
                                <li><strong>Empresa:</strong> Persona moral que contrata los servicios de DALM Foods para otorgar beneficios de alimentación a sus empleados.</li>
                                <li><strong>Restaurante / Cocina:</strong> Establecimiento o proveedor afiliado que ofrece alimentos a través de la plataforma.</li>
                                <li><strong>Empleado / Usuario Final:</strong> Persona física beneficiaria del programa de alimentación otorgado por la Empresa.</li>
                            </ul>
                        </section>

                        {/* 2. Registro y uso de la plataforma */}
                        <section>
                            <h2 className="text-xl font-bold text-gray-900 mb-4">2. Registro y uso de la plataforma</h2>
                            <p className="text-gray-700">Todos los usuarios deberán proporcionar información veraz, completa y actualizada. DALM Foods se reserva el derecho de suspender o cancelar cuentas con información falsa o uso indebido.</p>
                            <p className="text-gray-700 mt-2">Cada usuario es responsable de mantener la confidencialidad de sus credenciales de acceso.</p>
                        </section>

                        {/* 3. Obligaciones por tipo de usuario */}
                        <section>
                            <h2 className="text-xl font-bold text-gray-900 mb-4">3. Obligaciones por tipo de usuario</h2>

                            <h3 className="text-lg font-semibold text-gray-900 mb-2">3.1 Empresas</h3>
                            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-4">
                                <li>Administrar correctamente a sus empleados dentro de la plataforma.</li>
                                <li>Definir reglas, presupuestos, subsidios y condiciones del beneficio alimenticio.</li>
                                <li>Cubrir los pagos derivados de suscripciones, subsidios y/o consumos conforme al plan contratado.</li>
                            </ul>

                            <h3 className="text-lg font-semibold text-gray-900 mb-2">3.2 Restaurantes / Cocinas</h3>
                            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-2">
                                <li>Cumplir con las normas sanitarias y legales aplicables.</li>
                                <li>Preparar y entregar los pedidos conforme a lo publicado en la plataforma.</li>
                            </ul>
                            <h4 className="text-base font-semibold text-gray-900 mt-2">Actualización de menús y disponibilidad</h4>
                            <p className="text-gray-700 mt-1">Los Restaurantes y Cocinas deberán mantener actualizada, veraz y vigente la información de sus menús, precios, horarios y disponibilidad. DALM Foods no será responsable por errores, precios desactualizados, cancelaciones o faltantes derivados de información incorrecta proporcionada por el Restaurante o Cocina. El incumplimiento reiterado podrá resultar en la suspensión o cancelación de la cuenta.</p>

                            <h3 className="text-lg font-semibold text-gray-900 mb-2 mt-4">3.3 Empleados / Usuarios Finales</h3>
                            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                                <li>Usar la plataforma únicamente para fines legítimos.</li>
                                <li>Cubrir cualquier diferencia de precio no subsidiada por la Empresa.</li>
                                <li>Respetar las reglas establecidas por la Empresa.</li>
                            </ul>
                        </section>

                        {/* 4. Pagos, comisiones y cargos */}
                        <section>
                            <h2 className="text-xl font-bold text-gray-900 mb-4">4. Pagos, comisiones y cargos</h2>
                            <p className="text-gray-700 mb-2">DALM Foods podrá cobrar:</p>
                            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                                <li>Un porcentaje por transacción a los Restaurantes por cada pedido procesado.</li>
                                <li>Un costo de suscripción mensual o anual a las Empresas, según el plan contratado.</li>
                                <li>Un cargo fijo por envío cuando el Empleado solicite entrega a domicilio.</li>
                            </ul>
                            <p className="text-gray-700 mt-2">Los precios, porcentajes y condiciones estarán disponibles en la plataforma o en los contratos correspondientes.</p>
                        </section>

                        {/* 5. Uso aceptable */}
                        <section>
                            <h2 className="text-xl font-bold text-gray-900 mb-4">5. Uso aceptable</h2>
                            <p className="text-gray-700 mb-2">Queda prohibido:</p>
                            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                                <li>Usar la plataforma con fines fraudulentos o ilegales.</li>
                                <li>Interferir con el funcionamiento del sistema.</li>
                                <li>Suplantar la identidad de otros usuarios.</li>
                            </ul>
                        </section>

                        {/* 6. Propiedad intelectual */}
                        <section>
                            <h2 className="text-xl font-bold text-gray-900 mb-4">6. Propiedad intelectual</h2>
                            <p className="text-gray-700">Todos los derechos sobre la plataforma, marcas, logotipos, software y contenidos pertenecen a DALM Foods. Su uso no autorizado está prohibido.</p>
                        </section>

                        {/* 7. Limitación de responsabilidad */}
                        <section>
                            <h2 className="text-xl font-bold text-gray-900 mb-4">7. Limitación de responsabilidad</h2>
                            <p className="text-gray-700 mb-2">DALM Foods no será responsable por:</p>
                            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                                <li>Incumplimientos atribuibles a Restaurantes, Cocinas o Empresas.</li>
                                <li>Retrasos o fallas ajenas a su control.</li>
                                <li>Daños indirectos derivados del uso de la plataforma.</li>
                            </ul>
                        </section>

                        {/* 8. Suspensión y terminación */}
                        <section>
                            <h2 className="text-xl font-bold text-gray-900 mb-4">8. Suspensión y terminación</h2>
                            <p className="text-gray-700">DALM Foods podrá suspender o cancelar cuentas que incumplan estos Términos, sin responsabilidad y sin obligación de reembolso.</p>
                        </section>

                        {/* 9. Legislación aplicable */}
                        <section>
                            <h2 className="text-xl font-bold text-gray-900 mb-4">9. Legislación aplicable</h2>
                            <p className="text-gray-700">Estos Términos se rigen por las leyes de los Estados Unidos Mexicanos. Cualquier controversia será sometida a los tribunales competentes.</p>
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
