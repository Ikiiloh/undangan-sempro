import React from "react";

const Undangan = () => {
  return (
    <div className="min-h-screen bg-blue-50 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full bg-white rounded-2xl shadow-2xl p-10 transform transition-transform duration-300 hover:scale-105">
        <header className="text-center border-b-2 border-blue-100 pb-6 mb-8">
          <h1 className="text-4xl font-bold text-blue-800 tracking-tight">
            Undangan Seminar Proposal
          </h1>
          <p className="text-lg text-gray-500 mt-2">
            Secara hormat kami mengundang Bapak/Ibu untuk menghadiri seminar proposal mahasiswa kami.
          </p>
        </header>

        <main>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-6 mb-8">
            <div className="md:col-span-1">
              <p className="font-semibold text-blue-700">Nama Mahasiswa</p>
            </div>
            <div className="md:col-span-2">
              <p className="text-gray-800">[Nama Mahasiswa]</p>
            </div>

            <div className="md:col-span-1">
              <p className="font-semibold text-blue-700">Judul Proposal</p>
            </div>
            <div className="md:col-span-2">
              <p className="text-gray-800">
                [Judul Proposal Penelitian Anda di Sini]
              </p>
            </div>
          </div>

          <div className="bg-blue-50 rounded-lg p-6 mb-8 border border-blue-200">
             <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-4">
                <div className="md:col-span-1"><p className="font-semibold text-blue-700">Hari/Tanggal</p></div>
                <div className="md:col-span-2"><p className="text-gray-800">[Hari], [Tanggal] [Bulan] [Tahun]</p></div>

                <div className="md:col-span-1"><p className="font-semibold text-blue-700">Waktu</p></div>
                <div className="md:col-span-2"><p className="text-gray-800">[Jam Mulai] - Selesai</p></div>

                <div className="md:col-span-1"><p className="font-semibold text-blue-700">Tempat</p></div>
                <div className="md:col-span-2"><p className="text-gray-800">[Lokasi Seminar]</p></div>
             </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-blue-800 mb-4 text-center">Dosen Pembimbing & Penguji</h2>
            <ol className="list-decimal list-inside space-y-3 text-gray-700 text-center">
              <li>[Nama Dosen Pembimbing 1] - (Pembimbing 1)</li>
              <li>[Nama Dosen Pembimbing 2] - (Pembimbing 2)</li>
              <li>[Nama Dosen Penguji 1] - (Penguji 1)</li>
              <li>[Nama Dosen Penguji 2] - (Penguji 2)</li>
              <li>[Nama Dosen Penguji 3] - (Penguji 3)</li>
            </ol>
          </div>
        </main>

        <footer className="text-center mt-10 pt-6 border-t-2 border-blue-100">
          <p className="text-gray-500">
            Kehadiran Bapak/Ibu sangat kami harapkan. Terima kasih.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Undangan;
