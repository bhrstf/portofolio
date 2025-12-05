import { useState, useEffect } from "react"

const Navbar = () => {
  // State untuk efek sticky saat di-scroll
  const [scrolled, setScrolled] = useState(false)
  // State untuk toggle menu pada perangkat mobile
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Mapping Menu Items: Memisahkan Label Tampilan (display) dari Target ID (href)
  const menuItems = [
    // Catatan: Jika tidak ada section khusus, umumnya link home adalah ID section pertama atau "#". Saya asumsikan #beranda dari kode sebelumnya.
    { display: 'Homepage', target: '#beranda' },
    { display: 'About', target: '#tentang' },   // Match ID: #tentang
    { display: 'Project', target: '#proyek' },   // Match ID: #proyek
    { display: 'Certificates', target: '#sertifikat' }, // Match ID: #sertifikat
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Mengubah state 'scrolled' menjadi true jika scrollY > 50px
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    // Menggunakan event listener yang sudah ada
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  // Fungsi untuk toggle menu mobile
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${
        scrolled
          ? 'bg-zinc-900/90 backdrop-blur-md shadow-2xl border-b border-violet-500/30 py-4'
          : 'bg-transparent py-7'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        
        {/* --- Logo --- */}
        <div className="logo flex items-center">
          <h2
            className={`text-3xl font-extrabold transition-colors duration-300 ${scrolled ? 'text-violet-500' : 'text-white'}`}
            style={{ fontFamily: '"Poppins", cursive' }}
          >
            AAS<span className="text-violet-500">.</span>
          </h2>
        </div>
        
        {/* --- Menu Desktop & Mobile --- */}
        <ul 
          className={`menu flex flex-col md:flex-row items-start md:items-center md:static fixed right-4 transition-all duration-500 ease-in-out z-40 p-6 md:p-0 rounded-xl md:rounded-none
            bg-zinc-800 md:bg-transparent text-white md:text-zinc-300 gap-6 md:gap-10
            ${isMenuOpen ? 'top-20 opacity-100 shadow-2xl' : '-top-full opacity-0 md:opacity-100'}
            `}
        >
          {/* Perubahan utama di sini: menggunakan menuItems yang sudah dimapping */}
          {menuItems.map((item, index) => (
            <li key={index}>
              <a 
                href={item.target} // Menggunakan target ID yang sudah benar
                className={`text-base font-medium transition-colors duration-300 hover:text-violet-500 ${
                  scrolled ? 'text-zinc-200' : 'text-zinc-300' 
                }`}
                onClick={() => setIsMenuOpen(false)} 
              >
                {item.display} {/* Menggunakan label tampilan yang bersih */}
              </a>
            </li>
          ))}
          
          {/* Tombol Kontak (Tetap menggunakan ID #kontak yang benar) */}
          <li className="md:ml-4 mt-2 md:mt-0">
            <a href="#kontak" 
               className="bg-violet-600 text-white py-2 px-5 rounded-lg font-semibold hover:bg-violet-500 transition-all duration-300 shadow-lg shadow-violet-500/50">
              Let's Talk
            </a>
          </li>
        </ul>

        {/* --- Tombol Hamburger (Hanya Tampil di Mobile) --- */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white text-3xl z-50 p-2 rounded-lg hover:bg-zinc-700 transition-colors"
        >
          {isMenuOpen ? <i className="ri-close-line"></i> : <i className="ri-menu-line"></i>}
        </button>
      </div>
    </nav>
  )
}

export default Navbar