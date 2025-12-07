"use client";
import MaxWidthWrapper from '@/components/MaxWidthWrapper';

const SuccessPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-[url('/div.svg')] opacity-100">
      <MaxWidthWrapper className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-lg w-1/4 h-1/4 ">
        <img src='/logo_dalmfoods.jpeg' alt='dalm' className="mb-4 text-black w-32 h-32" />
        <p className="text-center text-lg font-semibold">
          Gracias por interesarte en DalmFoods. Muy pronto te contactaremos para más información.
        </p>
      </MaxWidthWrapper>
    </div>
  );
};

export default SuccessPage;
