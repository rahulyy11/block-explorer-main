import React from 'react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import '@solana/wallet-adapter-react-ui/styles.css';

export const Navbar = () => {
  return (
    <nav className="w-full border-b border-cyan-500/20 bg-[#050816]/90 backdrop-blur-xl shadow-[0_0_30px_rgba(59,130,246,0.15)]">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8 py-5">

        <h1 className="text-3xl font-black tracking-tight bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
          Solana Explorer
        </h1>

        <div className="flex items-center space-x-6">
          <a
            href="#explore"
            className="hidden md:inline-block text-gray-200 hover:text-cyan-400 font-medium transition-all duration-300"
          >
            Explore
          </a>

          <a
            href="#about"
            className="hidden md:inline-block text-gray-200 hover:text-cyan-400 font-medium transition-all duration-300"
          >
            About
          </a>

          <WalletMultiButton className="!bg-gradient-to-r !from-purple-600 !to-cyan-500 !text-white !px-5 !py-2 !rounded-2xl !shadow-lg hover:!scale-105 transition-all duration-300" />
        </div>
      </div>
    </nav>
  );
};
