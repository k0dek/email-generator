import React from 'react';
import { Mail } from 'lucide-react';

export function Navbar() {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Mail className="h-6 w-6 text-indigo-600" />
            <span className="text-xl font-bold text-gray-900">Email HTML Generator AI</span>
          </div>
        </div>
      </div>
    </nav>
  );
}