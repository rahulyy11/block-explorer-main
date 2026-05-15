import React, { useState } from 'react';
import { WalletConnectionProvider } from './components/WalletConnectionProvider.jsx';
import { SearchBar } from './components/SearchBar.jsx';
import { AccountInfoDisplay } from './components/AccountInfoDisplay.jsx';
import { Navbar } from './components/Navbar.jsx';
import '@solana/wallet-adapter-react-ui/styles.css';

function App() {
  const [targetPublicKey, setTargetPublicKey] = useState(null);

  const handleSearch = (publicKey) => {
    setTargetPublicKey(publicKey);
  };

  return (
    <WalletConnectionProvider>
      <div className="min-h-screen flex flex-col bg-black text-white relative overflow-hidden">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(168,85,247,0.25),transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(59,130,246,0.2),transparent_35%)]"></div>

        <header className="relative z-10">
          <Navbar />
        </header>

        <main className="relative z-10 flex-grow max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">

          <div className="text-center mb-14">
            <h1 className="text-5xl sm:text-6xl font-black tracking-tight bg-gradient-to-r from-white via-purple-400 to-cyan-400 bg-clip-text text-transparent mb-6">
              Solana Account Explorer
            </h1>

            <p className="text-xl text-gray-300 font-medium">
              Search by Public Key
            </p>
          </div>

          <section className="mb-12 flex justify-center">
            <div className="w-full max-w-3xl p-[1px] rounded-3xl bg-gradient-to-r from-fuchsia-500 via-purple-500 to-cyan-500 shadow-[0_0_40px_rgba(168,85,247,0.3)]">
              <div className="bg-[#050816] rounded-3xl p-6 backdrop-blur-lg">
                <SearchBar onSearch={handleSearch} />
              </div>
            </div>
          </section>

          <section className="flex justify-center">
            {targetPublicKey ? (
              <AccountInfoDisplay publicKeyStr={targetPublicKey} />
            ) : (
              <div className="w-full max-w-3xl text-gray-300 text-center py-16 border border-cyan-500/40 rounded-3xl bg-[#070b1a]/80 backdrop-blur-lg shadow-[0_0_30px_rgba(59,130,246,0.15)]">
                Enter a public key above to view account details.
              </div>
            )}
          </section>
        </main>

        <footer className="relative z-10 border-t border-cyan-500/20 bg-[#040510] text-gray-300 py-6 backdrop-blur-lg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm sm:text-base">
            &copy; {new Date().getFullYear()} Made With ❤️ By Rahul
          </div>
        </footer>
      </div>
    </WalletConnectionProvider>
  );
}

export default App;
