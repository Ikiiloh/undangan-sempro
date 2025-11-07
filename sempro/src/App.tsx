import './App.css';

function App() {
  return (
    <div className="invitation-card">
      <header className="header">
        <h1>Undangan Seminar Proposal</h1>
        <p>Dengan hormat, kami mengundang Bapak/Ibu untuk menghadiri seminar proposal skripsi dari:</p>
      </header>

      <hr className="divider" />

      <main className="content">
        <section className="student-info">
          <p>Nama: <strong>[Nama Mahasiswa]</strong></p>
          <p>NIM: <strong>[NIM Mahasiswa]</strong></p>
        </section>

        <section className="seminar-details">
          <h2>Judul Proposal</h2>
          <p><strong>"[Judul Skripsi Anda di Sini]"</strong></p>
          <br />
          <h2>Waktu & Tempat</h2>
          <p>🗓️ Tanggal: <strong>[Tanggal Seminar]</strong></p>
          <p>⏰ Waktu: <strong>[Waktu Seminar]</strong></p>
          <p>📍 Tempat: <strong>[Lokasi Seminar]</strong></p>
        </section>

        <section className="panel-list">
          <h2>Dosen Pembimbing & Penguji</h2>
          <ul>
            <li><span className="role">Pembimbing 1:</span> [Nama Dosen Pembimbing 1]</li>
            <li><span className="role">Pembimbing 2:</span> [Nama Dosen Pembimbing 2]</li>
            <li><span className="role">Penguji 1:</span> [Nama Dosen Penguji 1]</li>
            <li><span className="role">Penguji 2:</span> [Nama Dosen Penguji 2]</li>
            <li><span className="role">Penguji 3:</span> [Nama Dosen Penguji 3]</li>
          </ul>
        </section>

        <section className="educational-tidbit">
          <h3>Tahukah Anda?</h3>
          <p>Penelitian adalah proses sistematis untuk memecahkan masalah atau menemukan fakta-fakta baru melalui pengujian hipotesis. Ini adalah pilar utama kemajuan ilmu pengetahuan dan teknologi.</p>
        </section>
      </main>

      <footer className="footer">
        <p>Kehadiran dan doa restu Bapak/Ibu sangat kami harapkan.</p>
      </footer>
    </div>
  );
}

export default App;