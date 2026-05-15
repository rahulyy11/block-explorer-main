import React, { useEffect, useState } from 'react';
import { PublicKey } from '@solana/web3.js';
import { useConnection } from '@solana/wallet-adapter-react';

export const AccountInfoDisplay = ({ publicKeyStr }) => {
  const { connection } = useConnection();
  const [balance, setBalance] = useState(null);
  const [transactions, setTransactions] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchAccountData = async () => {
      if (!publicKeyStr) {
        setBalance(null);
        setTransactions([]);
        setError(null);
        return;
      }

      setIsLoading(true);
      setError(null);

      try {
        const publicKey = new PublicKey(publicKeyStr);

        // Fetch SOL Balance
        const solBalanceLamports = await connection.getBalance(publicKey);
        setBalance(solBalanceLamports / 1_000_000_000);

        // Fetch 5 Recent Transactions
        const signatures = await connection.getSignaturesForAddress(publicKey, { limit: 5 });
        setTransactions(signatures.map(sigInfo => sigInfo.signature));
      } catch (err) {
        console.error('Error fetching account data:', err);
        setError(`Failed to fetch account data. Check if the key is valid and on Devnet.`);
        setBalance(null);
        setTransactions([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAccountData();
  }, [publicKeyStr, connection]);

  if (!publicKeyStr) {
    return (
      <div className="text-gray-400 text-center py-12 border-2 border-dashed border-gray-700 rounded-lg">
        Enter a public key to view its details.
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="text-center text-gray-300 animate-pulse py-10">
        Loading account data...
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-400 bg-gray-900/60 border border-red-500/20 rounded-lg p-6 mt-6">
        {error}
      </div>
    );
  }

  return (
    <div className="bg-gray-900/60 backdrop-blur-lg border border-gray-800 rounded-2xl p-8 shadow-lg transition-all hover:shadow-purple-500/10">
      <h2 className="text-2xl font-bold mb-6 text-purple-400">Account Details</h2>

      <div className="space-y-3 mb-6">
        <p className="text-gray-300 break-all">
          <strong className="text-gray-400">Public Key:</strong> {publicKeyStr}
        </p>

        {balance !== null && (
          <p className="text-gray-300">
            <strong className="text-gray-400">SOL Balance:</strong>{' '}
            <span className="text-green-400 font-medium">{balance.toFixed(4)} SOL</span>
          </p>
        )}
      </div>

      <h3 className="text-xl font-semibold text-gray-300 mb-4">Recent Transactions</h3>

      {transactions.length > 0 ? (
        <ul className="space-y-3">
          {transactions.map((sig) => (
            // <li key={sig}>
            //   <a
            //     href={`https://solana.fm/tx/${sig}?cluster=devnet`}
            //     target="_blank"
            //     rel="noopener noreferrer"
            //     className="block text-purple-400 hover:text-pink-400 underline-offset-4 hover:underline 
            //                cursor-pointer transition-colors duration-200 font-mono break-all"
            //   >
            //     {sig.substring(0, 40)}...
            //   </a>
            // </li>

            <li key={sig}>
  <a
    href={`https://explorer.solana.com/tx/${sig}?cluster=devnet`}
    target="_blank"
    rel="noopener noreferrer"
    className="block text-purple-400 hover:text-pink-400 underline-offset-4 hover:underline 
               cursor-pointer transition-colors duration-200 font-mono break-all"
  >
    {sig.substring(0, 40)}...
  </a>
</li>

          ))}
        </ul>
      ) : (
        <p className="text-gray-500 italic">No recent transactions found.</p>
      )}
    </div>
  );
};
