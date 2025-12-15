import FeaturesSection from '@/components/Feature';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import Link from 'next/link';
import HeartButton from '@/components/ui/heartbutton';

export default function Home() {
  return (
    <div className="bg-[url('/div.svg')] opacity-100 min-h-screen py-10 px-5 ">
      <MaxWidthWrapper>
        <div className="space-y-10">
          <header className="text-center mb-10">
            <div className=" opacity-100 inline-flex items-center justify-center px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <img src='/logo_dalm.png' alt='food-icon' className="h-16 w-16" />
              <span>TRANSFORMANDO LA CULTURA LABORAL A TRAVÉS DE LA ALIMENTACIÓN</span>
              <img src='/logo_dalm.png' alt='food-icon' className="h-16 w-16" />
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6">
              Alimentación Corporativa Inteligente<br />
              <span className="text-orange-600">Sin Comedores. Sin Infraestructura. Sin Pasivos.</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Gestionamos el beneficio alimenticio de tus empleados a través de una red de cocinas evaluadas y aprobadas.
            </p>
          </header>

          <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center">
            <div className="p-6 sm:p-8 md:p-12 bg-white border rounded-lg hover:shadow-lg transition-shadow">
              <img src='/office-building.png' alt='empresas' className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mx-auto mb-4" />
              <h2 className="text-lg sm:text-xl font-bold mb-4 md:mb-6">Para Empresas</h2>
              <p>Plan de subsidio flexible. Adaptado a tus necesidades.</p>
            </div>
            <div className="p-6 sm:p-8 md:p-12 bg-white border rounded-lg hover:shadow-lg transition-shadow">
              <img src='/multiple-users.png' alt='empleados' className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mx-auto mb-4" />
              <h2 className="text-lg sm:text-xl font-bold mb-2 md:mb-6">Para Empleados</h2>
              <p>Comida cercana, accesible y subsidiada. Ahorra tiempo y dinero todos los días.</p>
            </div>
            <div className="p-6 sm:p-8 md:p-12 bg-white border rounded-lg hover:shadow-lg transition-shadow">
              <img src='/store.png' alt='restaurantes' className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mx-auto mb-4" />
              <h2 className="text-lg sm:text-xl font-bold mb-2 md:mb-6">Para Cocinas Locales</h2>
              <p>Acceso directo al mundo corporativo. Recibe pedidos y pagos automáticos.</p>
            </div>
          </section>

          <section className="text-center flex flex-col items-center justify-center space-y-4 md:space-y-0 md:flex-row md:space-x-4">
            <div className="flex flex-col items-center space-y-1">
              <span className="text-gray-600 text-lg">50+ Empresas</span>
              <span className="text-gray-600">Interesadas</span>
            </div>
            <img src='/arrow.png' alt='arrow' className="hidden md:block w-8 h-6 md:w-12 md:h-8" />

            <Link href='/contact' className="join-waitlist-button" >
              <HeartButton />
            </Link>
          </section>

        </div>
      </MaxWidthWrapper>

      <MaxWidthWrapper className='mt-28'>
        <FeaturesSection />
      </MaxWidthWrapper>
    </div>
  );
}
