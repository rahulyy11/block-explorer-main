// import React, { useState } from 'react';

// export const SearchBar = ({ onSearch }) => {
//     const [publicKeyInput, setPublicKeyInput] = useState('');

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         if (publicKeyInput) {
//             onSearch(publicKeyInput);
//         }
//     };

//     return (
//         <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
//             <input
//                 type="text"
//                 value={publicKeyInput}
//                 onChange={(e) => setPublicKeyInput(e.target.value)}
//                 placeholder="Enter Solana Public Key"
//                 style={{ width: '300px', padding: '10px', marginRight: '10px' }}
//             />
//             <button type="submit" style={{ padding: '10px 15px' }}>
//                 Search Account
//             </button>
//         </form>
//     );
// };

import React, { useState } from 'react';

export const SearchBar = ({ onSearch }) => {
  const [publicKeyInput, setPublicKeyInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (publicKeyInput.trim()) {
      onSearch(publicKeyInput.trim());
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full flex flex-col sm:flex-row items-center gap-4 sm:gap-3 bg-gray-900/60 backdrop-blur-md border border-gray-700 rounded-xl p-4 sm:p-6 shadow-md"
    >
      <input
        type="text"
        value={publicKeyInput}
        onChange={(e) => setPublicKeyInput(e.target.value)}
        placeholder="Enter Solana Public Key"
        className="flex-grow w-full sm:w-auto px-4 py-3 rounded-lg bg-gray-800 text-gray-100 placeholder-gray-500 
                   focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
      />

      <button
        type="submit"
        className="px-6 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium 
                   hover:from-purple-600 cursor-pointer hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-purple-500/25 w-full sm:w-auto"
      >
        Search Account
      </button>
    </form>
  );
};
