// src/pages/GenerateLink.jsx
import React, { useState } from 'react';

function GenerateLink() {
  const [namaTamu, setNamaTamu] = useState('');
  const [generatedLink, setGeneratedLink] = useState('');

  const handleGenerateLink = () => {
    if (namaTamu.trim() === '') {
      setGeneratedLink('Masukkan nama tamu terlebih dahulu!');
      return;
    }
    const baseUrl = window.location.origin;
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
    // KARTU UTAMA: Diubah ke bg-primary-dark
    <div className="bg-primary-dark text-text-on-dark p-8 rounded-lg shadow-lg max-w-md w-full text-center">
      <h2 className="text-2xl font-bold mb-6">Generate Link Undangan</h2>
      <div className="mb-4">
        <label htmlFor="namaTamu" className="block text-left text-text-on-dark-muted text-sm font-bold mb-2">
          Masukkan Nama Tamu:
        </label>
        {/* INPUT: Disesuaikan agar kontras di background gelap */}
        <input
          type="text"
          id="namaTamu"
          value={namaTamu}
          onChange={(e) => setNamaTamu(e.target.value)}
          className="shadow appearance-none border border-primary-light rounded w-full py-2 px-3 bg-blue-900 text-white leading-tight focus:outline-none focus:shadow-outline placeholder-gray-400"
          placeholder="Contoh: Dr. Budi Santoso"
        />
      </div>
      <button
        onClick={handleGenerateLink}
        // TOMBOL: Menggunakan 'primary-light' (biru cerah) agar menonjol
        className="bg-primary-light hover:bg-primary-light-hover text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-colors"
      >
        Generate Link
      </button>

      {generatedLink && (
        // KOTAK HASIL: Menggunakan 'muted-bg' (putih/biru muda) untuk kontras
        <div className="mt-6 p-4 bg-muted-bg rounded-md break-all text-muted-text">
          <p className="text-sm font-semibold mb-2">Link Anda:</p>
          <a
            href={generatedLink}
            target="_blank"
            rel="noopener noreferrer"
            // Link menggunakan warna biru cerah agar menonjol di atas 'muted-bg'
            className="text-primary-light hover:underline text-lg cursor-pointer font-semibold"
            onClick={(e) => { e.preventDefault(); handleCopyLink(); }}
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