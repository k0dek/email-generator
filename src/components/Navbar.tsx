import React from 'react';
import { Mail } from 'lucide-react';

export function Navbar() {
  return (
    <header className='w-full flex justify-center sticky top-[15px] z-10'>
      <nav className="bg-white shadow-xl max-w-7xl w-full mx-auto rounded-[20px]  mx-[15px]">
      <div className="px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img className='h-[35px] w-auto' src="/logo.svg" alt="Logo" />
          </div>
        </div>
      </div>
    </nav>
    </header>
  );
}