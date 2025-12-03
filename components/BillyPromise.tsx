import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import JoinWaitlistButton from './ui/joinwaitlist';

export default function Billy() {
  return (
    <div className="flex flex-col md:flex-row items-start justify-start mt-8 w-full">
      <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-8">
        <Image src="/Billy.png" alt="Billy" width={400} height={600} className="mt-4 w-full md:w-auto" />
      </div>
      <div className="flex-grow text-center md:text-left">
        <h2 className="text-3xl font-bold mt-4 md:mt-16 mb-4">La Promesa de DalmFoods</h2>
        <p className="text-gray-700 text-left md:text-center lg:text-left max-w-md mx-auto md:mx-0">
          Somos DalmFoods, tu aliado en beneficios laborales. <span className='font-bold'>Conectamos empresas con restaurantes locales</span> para ofrecer comida subsidiada a empleados.
          Mejora la cultura de tu empresa mientras apoyas al comercio local. <span className='font-bold'>Únete a la revolución de los beneficios alimenticios.</span>
        </p>
        <h3 className="text-xl font-semibold mt-4">DalmFoods - Beneficios que Alimentan</h3>
        <img src='/billysign.png' alt='dalmfoods-sign' className="mt-2 mx-auto md:mx-0" />
        <div className="flex items-center justify-center md:justify-start mt-4">
          <Link href='/waitlist' className="join-waitlist-button" >
            <JoinWaitlistButton />
          </Link>
        </div>
      </div>
    </div>
  );
}
