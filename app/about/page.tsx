import OriginStory from '@/components/OriginStory';
import VisionMission from '@/components/VisionMission';
import Values from '@/components/Values';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';

export default function AboutPage() {
    return (
        <div className="bg-[url('/div.svg')] opacity-100 min-h-screen">
            <MaxWidthWrapper className="py-16">
                <div className="text-center mb-16">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6">
                        ¿Quiénes Somos?
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Conoce nuestra historia, visión y los valores que nos impulsan
                    </p>
                </div>
            </MaxWidthWrapper>

            <MaxWidthWrapper>
                <OriginStory />
            </MaxWidthWrapper>

            <MaxWidthWrapper className="mt-28">
                <VisionMission />
            </MaxWidthWrapper>

            <MaxWidthWrapper className="mt-28">
                <Values />
            </MaxWidthWrapper>
        </div>
    );
}
