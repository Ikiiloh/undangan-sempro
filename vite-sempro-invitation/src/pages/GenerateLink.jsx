import React, { useState } from 'react';

function GenerateLink() {
  const [namaTamu, setNamaTamu] = useState('');
  const [generatedLink, setGeneratedLink] = useState('');

  const handleGenerateLink = () => {
    if (namaTamu.trim() === '') {
      setGeneratedLink('Masukkan nama tamu terlebih dahulu!');
      return;
    }
    const baseUrl = window.location.origin; // Mengambil base URL dari aplikasi Anda
    const encodedNama = encodeURIComponent(namaTamu.trim());
    const link = `${baseUrl}/?kepada=${encodedNama}`;
    setGeneratedLink(link);
  };

  const handleCopyLink = () => {
    if (generatedLink) {
      navigator.clipboard.writeText(generatedLink)
        .then(() => alert('Link berhasil disalin!'))
        .catch(err => console.error('Gagal menyalin link: ', err));
    }
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full text-center">
      <h2 className="text-2xl font-bold text-dark-text mb-6">Generate Link Undangan</h2>
      <div className="mb-4">
        <label htmlFor="namaTamu" className="block text-left text-gray-700 text-sm font-bold mb-2">
          Masukkan Nama Tamu:
        </label>
        <input
          type="text"
          id="namaTamu"
          value={namaTamu}
          onChange={(e) => setNamaTamu(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Contoh: Dr. Budi Santoso"
        />
      </div>
      <button
        onClick={handleGenerateLink}
        className="bg-primary-blue hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-colors"
      >
        Generate Link
      </button>

      {generatedLink && (
        <div className="mt-6 p-4 bg-gray-100 rounded-md break-all">
          <p className="text-sm font-semibold text-gray-600 mb-2">Link Anda:</p>
          <a
            href={generatedLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-blue hover:underline text-lg cursor-pointer"
            onClick={(e) => { e.preventDefault(); handleCopyLink(); }} // Salin saat diklik
          >
            {generatedLink}
          </a>
          <button
            onClick={handleCopyLink}
            className="mt-3 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-1 px-3 rounded text-sm focus:outline-none focus:shadow-outline"
          >
            Salin Link
          </button>
        </div>
      )}
    </div>
  );
}

export default GenerateLink;