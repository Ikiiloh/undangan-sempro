// Komponen Utama
function App() {
  // Data untuk undangan (bisa diganti)
  const invitationData = {
    name: "Eka Mulyani Putri Pily",
    title: "Undangan",
    subtitle: "Seminar Proposal",
    thesisTitle:
      "Hubungan Antara Kebersyukuran dengan Social Comparison pada Mahasiswa Pengguna Instagram di UIN Imam Bonjol Padang",
    date: "Kamis, 20 November",
    time: "10:00 - Selesai",
    location: "Gedung Psikologi dan Kesehatan", // Tambahkan lokasi di sini
    imageUrl: "https://res.cloudinary.com/dlcljeoih/image/upload/v1762480143/ekaaa_nb32iq.png", // Menggunakan placeholder
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center p-4 overflow-hidden">
      {/* Komponen untuk doodle di latar belakang */}
      <BackgroundDoodles />

      {/* Konten Utama */}
      <main className="relative z-10 w-full max-w-sm mx-auto flex flex-col items-center flex-grow space-y-8 pt-8">
        <Header
          title={invitationData.title}
          subtitle={invitationData.subtitle}
        />

        <ProfileCard
          name={invitationData.name}
          imageUrl={invitationData.imageUrl}
        />

        <ThesisInfo title={invitationData.thesisTitle} />

        <EventDetails
          date={invitationData.date}
          time={invitationData.time}
          location={invitationData.location}
        />
      </main>

      <Footer />
    </div>
  );
}

// Komponen untuk Teks Bergelombang
function WavyText({ text, className, style }: { text: string; className?: string; style?: React.CSSProperties }) {
  return (
    <div className={`flex justify-center ${className}`} style={style}>
      {text.split('').map((char, index) => (
        <span
          key={index}
          className="animate-wave"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </div>
  );
}

// Komponen Header
function Header({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="text-center">
      <WavyText
        text={title}
        className="text-5xl sm:text-6xl font-title font-semibold text-brand-dark"
        style={{ textShadow: "2px 2px 0px white" }}
      />
      <WavyText
        text={subtitle}
        className="text-4xl sm:text-5xl font-title font-semibold text-brand-accent -mt-2" // Replaced transform with negative margin
        style={{ textShadow: "2px 2px 0px white" }}
      />
    </div>
  );
}

// Komponen Kartu Profil (Polaroid)
function ProfileCard({ name, imageUrl }: { name: string; imageUrl: string }) {
  return (
    <div className="flex flex-col items-center w-full max-w-xs">
      {/* Latar Belakang Grid Biru */}
      <div className="grid-background p-5 rounded-xl shadow-lg w-full">
        {/* Frame Polaroid */}
        <div className="bg-white p-4 pb-3 rounded-lg shadow-inner transform -rotate-3 transition-transform duration-300 hover:rotate-0 hover:scale-105">
          <div className="w-full h-64 sm:h-72 bg-gray-200 rounded-md overflow-hidden">
            <img
              src={imageUrl}
              alt={name}
              className="w-full h-full object-cover object-center"
              onError={(e) =>
                (e.currentTarget.src =
                  "https://placehold.co/400x500?text=Foto+Profil")
              }
            />
          </div>
        </div>
      </div>
      {/* Nama */}
      <h3
        className="text-5xl font-name text-brand-dark mt-4 text-center"
        style={{ textShadow: "1px 1px 0px white" }}
      >
        {name}
      </h3>
    </div>
  );
}

// Komponen Info Judul Skripsi
function ThesisInfo({ title }: { title: string }) {
  return (
    <div className="text-center px-4">
      <h4 className="text-lg font-bold text-brand-dark underline decoration-brand-accent decoration-4 underline-offset-4">
        Judul Skripsi:
      </h4>
      <p className="text-base font-medium text-brand-light mt-4">{title}</p>
    </div>
  );
}

// Komponen Detail Acara (Box Kuning)
function EventDetails({ date, time, location }: { date: string; time: string; location: string }) {
  return (
    <div className="w-full bg-brand-accent/10 backdrop-blur-lg border border-white/30 rounded-2xl shadow-lg p-5 transition-all duration-300 hover:shadow-xl">
      <div className="flex flex-col items-start gap-4 text-brand-dark font-bold">
        {/* Tanggal */}
        <div className="flex items-center gap-3">
          <div className="bg-white/30 p-2 rounded-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>
          <span className="text-lg">{date}</span>
        </div>

        {/* Waktu */}
        <div className="flex items-center gap-3">
          <div className="bg-white/30 p-2 rounded-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <span className="text-lg">{time}</span>
        </div>

        {/* Lokasi */}
        <div className="flex items-center gap-3">
          <div className="bg-white/30 p-2 rounded-lg">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-6 w-6" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor" 
              strokeWidth="2"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" 
              />
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" 
              />
            </svg>
          </div>
          <span className="text-lg">{location}</span>
        </div>
      </div>
    </div>
  );
}

// Komponen Footer
function Footer() {
  return (
    <footer className="text-center font-title text-xs text-brand-dark mt-12 mb-4">
      <p>
        Dibuat oleh{" "}
        <a
          href="https://github.com/Ikiiloh"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-brand-accent hover:underline"
        >
          Ikiiloh
        </a>
      </p>
    </footer>
  );
}

// Komponen Doodle Latar Belakang
function BackgroundDoodles() {
  return (
    <>
      {/* Top left Square */}
      <svg
        width="80"
        height="80"
        viewBox="0 0 100 100"
        className="absolute top-5 left-5 text-brand-accent opacity-40 z-0 animate-spinSlow"
      >
        <rect
          x="10"
          y="10"
          width="80"
          height="80"
          stroke="currentColor"
          strokeWidth="8"
          fill="transparent"
        />
      </svg>

      {/* Pola Titik-titik */}
      <svg
        width="100"
        height="100"
        className="absolute top-5 right-5 text-brand-grid opacity-80 z-0 animate-float"
      >
        <defs>
          <pattern
            id="dots"
            x="0"
            y="0"
            width="10"
            height="10"
            patternUnits="userSpaceOnUse"
          >
            <circle fill="currentColor" cx="2" cy="2" r="2" />
          </pattern>
        </defs>
        <rect width="100" height="100" fill="url(#dots)" />
      </svg>

      {/* Garis Meringis */}
      <svg
        width="100"
        height="120"
        viewBox="0 0 100 100"
        className="absolute top-1/4 left-5 text-brand-grid opacity-100 z-0 animate-float"
        style={{ animationDelay: "2s" }}
      >
        <path
          d="M10 10 Q 30 40, 50 10 T 90 10"
          stroke="currentColor"
          fill="transparent"
          strokeWidth="8"
          strokeLinecap="round"
        />
        <path
          d="M10 30 Q 30 60, 50 30 T 90 30"
          stroke="currentColor"
          fill="transparent"
          strokeWidth="8"
          strokeLinecap="round"
        />
      </svg>

      {/* Triangle (previously Circle) */}
      <svg
        width="150"
        height="150"
        viewBox="0 0 100 100"
        className="absolute bottom-10 left-10 text-brand-grid opacity-50 z-0 animate-spinSlow"
      >
        <path
          d="M50 10 L10 90 L90 90 Z"
          stroke="currentColor"
          strokeWidth="10"
          fill="transparent"
          strokeLinejoin="round"
        />
      </svg>

      {/* Garis kuning = */}
      <svg
        width="80"
        height="80"
        viewBox="0 0 100 100"
        className="absolute bottom-1/3 right-5 text-brand-accent opacity-50 z-0 animate-float"
        style={{ animationDelay: "1s" }}
      >
        <path
          d="M10 80 L 80 10"
          stroke="currentColor"
          fill="transparent"
          strokeWidth="12"
          strokeLinecap="round"
        />
        <path
          d="M20 90 L 90 20"
          stroke="currentColor"
          fill="transparent"
          strokeWidth="12"
          strokeLinecap="round"
        />
      </svg>
    </>
  );
}

export default App;