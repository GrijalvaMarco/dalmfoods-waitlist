import HowItWorks from '@/components/HowItWorks';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';

export default function HowItWorksPage() {
    return (
        <div className="bg-[url('/div.svg')] opacity-100 min-h-screen">
            <MaxWidthWrapper className="py-16">
                <div className="text-center mb-16">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6">
                        ¿Cómo Funciona?
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Descubre cómo DALM conecta empresas, colaboradores y cocinas locales
                    </p>
                </div>
            </MaxWidthWrapper>

            <MaxWidthWrapper>
                <HowItWorks />
            </MaxWidthWrapper>
        </div>
    );
}
