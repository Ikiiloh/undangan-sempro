// src/pages/undangan.jsx
import React from "react";

const Undangan = () => {
  return (
    // Hapus bg-blue-50 dari sini, biarkan App.jsx yang mengatur
    <div className="w-full max-w-2xl">
      {/* KARTU UTAMA: Diubah ke bg-primary-dark dengan teks putih */}
      <div className="bg-primary-dark text-text-on-dark rounded-2xl shadow-2xl p-10 transform transition-transform duration-300">
        
        {/* HEADER: Teks putih, border biru muda */}
        <header className="text-center border-b-2 border-primary-light pb-6 mb-8">
          <h1 className="text-4xl font-bold tracking-tight">
            Undangan Seminar Proposal
          </h1>
          <p className="text-lg text-text-on-dark-muted mt-2">
            Secara hormat kami mengundang Bapak/Ibu untuk menghadiri seminar proposal mahasiswa kami.
          </p>
        </header>

        <main>
          {/* INFO MAHASISWA: Teks label diubah menjadi abu-abu muda */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-6 mb-8">
            <div className="md:col-span-1">
              <p className="font-semibold text-text-on-dark-muted">Nama Mahasiswa</p>
            </div>
            <div className="md:col-span-2">
              <p>[Nama Mahasiswa]</p>
            </div>

            <div className="md:col-span-1">
              <p className="font-semibold text-text-on-dark-muted">Judul Proposal</p>
            </div>
            <div className="md:col-span-2">
              <p>
                [Judul Proposal Penelitian Anda di Sini]
              </p>
            </div>
          </div>

          {/* KOTAK INFO ACARA: Kontras menggunakan 'muted-bg' (putih/biru muda) */}
          <div className="bg-muted-bg text-muted-text rounded-lg p-6 mb-8 border border-sky-200">
             <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-4">
                <div className="md:col-span-1"><p className="font-semibold">Hari/Tanggal</p></div>
                <div className="md:col-span-2"><p>[Hari], [Tanggal] [Bulan] [Tahun]</p></div>

                <div className="md:col-span-1"><p className="font-semibold">Waktu</p></div>
                <div className="md:col-span-2"><p>[Jam Mulai] - Selesai</p></div>

                <div className="md:col-span-1"><p className="font-semibold">Tempat</p></div>
                <div className="md:col-span-2"><p>[Lokasi Seminar]</p></div>
             </div>
          </div>

          {/* DOSEN: Teks disesuaikan untuk latar belakang gelap */}
          <div>
            <h2 className="text-2xl font-bold text-text-on-dark mb-4 text-center">Dosen Pembimbing & Penguji</h2>
            <ol className="list-decimal list-inside space-y-3 text-text-on-dark-muted text-center">
              <li>[Nama Dosen Pembimbing 1] - (Pembimbing 1)</li>
              <li>[Nama Dosen Pembimbing 2] - (Pembimbing 2)</li>
              <li>[Nama Dosen Penguji 1] - (Penguji 1)</li>
              <li>[Nama Dosen Penguji 2] - (Penguji 2)</li>
              <li>[Nama Dosen Penguji 3] - (Penguji 3)</li>
            </ol>
          </div>
        </main>

        {/* FOOTER: Disesuaikan untuk latar belakang gelap */}
        <footer className="text-center mt-10 pt-6 border-t-2 border-primary-light">
          <p className="text-text-on-dark-muted">
            Kehadiran Bapak/Ibu sangat kami harapkan. Terima kasih.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Undangan;