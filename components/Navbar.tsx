'use client';

import Link from 'next/link';
import MaxWidthWrapper from './MaxWidthWrapper';
import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Inicio' },
    { href: '/about', label: '¿Quiénes somos?' },
    { href: '/how-it-works', label: '¿Cómo funciona?' },
    { href: '/for-companies', label: 'Soy Empresa' },
    { href: '/for-employees', label: 'Soy Colaborador' },
    { href: '/for-kitchens', label: 'Soy Cocina' },
    { href: '/contact', label: 'Contacto' },
  ];

  return (
    <nav className='sticky top-0 z-[100] h-16 w-full border-b border-gray-200 bg-white/95 backdrop-blur-lg transition-all shadow-sm'>
      <MaxWidthWrapper>
        <div className='flex h-16 items-center justify-between'>
          {/* Logo */}
          <Link href='/' className='flex z-40 items-center space-x-2'>
            <img src='/logo_dalmfoods.jpeg' alt='DALM Foods' className='w-12 h-12 rounded-full' />
            <span className='font-bold text-xl hidden sm:block'>DALM Foods</span>
          </Link>

          {/* Desktop Navigation */}
          <div className='hidden lg:flex items-center space-x-1'>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className='px-3 py-2 text-sm font-medium text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-md transition-colors'
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className='lg:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100'
            aria-label='Toggle menu'
          >
            <svg
              className='w-6 h-6'
              fill='none'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              {isMenuOpen ? (
                <path d='M6 18L18 6M6 6l12 12' />
              ) : (
                <path d='M4 6h16M4 12h16M4 18h16' />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className='lg:hidden py-4 border-t border-gray-200 bg-white'>
            <div className='flex flex-col space-y-2'>
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className='px-4 py-2 text-sm font-medium text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-md transition-colors'
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;
