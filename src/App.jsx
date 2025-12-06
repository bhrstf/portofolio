import DataImage from "./data";
import {listTools, listProyek, listSertifikat} from "./data";

// Perubahan utama:
// 1. Menghapus kelas 'animate__animated' dan 'animate__delay-X' yang hardcode.
// 2. Mengubah dan mendiversifikasi nilai 'data-aos' (Animate On Scroll) untuk menciptakan efek yang lebih bervariasi dan modern pada saat elemen masuk ke viewport.
// 3. Menambahkan animasi 'pulse' halus pada elemen kunci.

function App() {
  return (
    // Memperhalus latar belakang dengan gradien radial yang sangat gelap
    <div className="bg-zinc-900 text-white min-h-screen relative overflow-hidden">
      {/* Efek Latar Belakang Halus (Optional: Untuk membuat latar belakang lebih berdimensi) */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        {/* 

[Image of dark abstract tech background with subtle violet light streaks]
 */}
      </div>

      <div className="container mx-auto px-4 relative z-10"> 

        {/* --- Section Hero (Animasi Masuk Staggered dengan AOS) --- */}
        <div className="hero grid md:grid-cols-2 items-center pt-20 xl:gap-0 gap-8 grid-cols-1"> 
          
          {/* Kolom Kiri: Teks & Info - Menggunakan 'fade-right' yang lebih dinamis */}
          <div data-aos="fade-right" data-aos-duration="1200" data-aos-easing="ease-in-sine"> {/* Animasi baru */}
            
            {/* Quote Box: Menambahkan sedikit efek 'pulse' pada border untuk menarik perhatian */}
            <div className="flex items-center gap-3 mb-6 w-fit p-4 rounded-2xl shadow-xl border border-zinc-700/50 bg-zinc-800 animate-pulse-slow"> 
              <img src={DataImage.angel} alt="angel" className="w-10 h-10 object-cover rounded-full border border-violet-500 p-0.5" loading="lazy" /> 
              <blockquote className="text-sm italic font-light text-zinc-300 max-w-2xl mx-auto">
                "Innovation is the single leap that determines a new starting line..."
              </blockquote>
            </div>
            
            {/* Teks Hero */}
            <h1
              className="text-6xl/tight mb-0 leading-tight text-white" 
              style={{ fontFamily: '"Poppins", cursive', fontWeight: 800 }}
            >
              Hi, I'm
            </h1>
            <h1
              className="text-6xl/tight mb-0 leading-tight text-violet-500 drop-shadow-lg" 
              style={{ fontFamily: '"Poppins", cursive', fontWeight: 800 }}
            >
              Anjelika A. Simamora
            </h1>
            <p className="text-4xl/tight mb-6 leading-tight font-extrabold text-white/90"> 
              Junior Tech 
            </p>
            <p className="text-lg/loose mb-8 opacity-75 text-zinc-300 max-w-xl"> 
              A results-oriented Diploma student in Information Technology (IT), passionate about transforming complex challenges into efficient 
              and practical technological solutions. Proficient in technical problem solving...
            </p>
            
            {/* Tombol dengan Efek Neon/Glow */}
            <div className="flex items-center sm:gap-4 gap-2 ">
              <a 
                href="\assets\CV.pdf" 
                download 
                className="bg-violet-700 text-white py-3 px-6 rounded-lg font-semibold 
                           hover:bg-violet-600 transition-all duration-300 
                           shadow-lg shadow-violet-500/50 hover:shadow-violet-400/70" 
                           data-aos="zoom-in" data-aos-delay="200" // Animasi zoom pada tombol
              >
                Download CV <i className="ri-download-line ri-lg"></i>
              </a>
              <a 
                href="#proyek" 
                className="bg-transparent text-white py-3 px-6 rounded-lg border border-violet-500 
                           hover:bg-violet-500 hover:text-white transition-all duration-300
                           hover:shadow-lg hover:shadow-violet-500/50" 
                           data-aos="zoom-in" data-aos-delay="300" // Animasi zoom pada tombol
              >
                View Projects <i className="ri-arrow-down-line ri-lg"></i> 
              </a>
            </div>
          </div>

          {/* Kolom Kanan: Gambar - Menggunakan 'fade-left' yang serasi */}
          <div 
            className="relative flex justify-center md:justify-end md:mr-20 mt-10"
            data-aos="fade-left" // AOS untuk animasi masuk
            data-aos-duration="1200"
          >
            <div 
              className="relative w-[420px] h-[420px] flex items-center justify-center animate-float 
                         transition-transform duration-500 hover:rotate-3 hover:scale-[1.03]" // <<< ANIMASI FLOATING DITAMBAHKAN DI SINI
            >

              {/* Glow: Menggunakan pulse-slow untuk efek denyutan lembut pada glow */}
              <div 
                className="absolute inset-0 rounded-full bg-gradient-to-br from-violet-700/40 to-purple-900/40 blur-[90px] opacity-50 
                           animate-pulse-slow" // <<< ANIMASI PULSE DITAMBAHKAN
              ></div>

              {/* Foto */}
              <img 
                src={DataImage.angel2} 
                alt="angel" 
                className="relative w-[410px] h-[410px] rounded-full object-cover 
                           shadow-xl shadow-violet-900/40 border border-violet-700/30"
              />
            </div>
          </div>

         </div> 
        {/* --- End Section Hero --- */}

        {/* --- Section About --- */}
        <div className="tentang mt-32 py-10" id="tentang">
          <h1 className="text-4xl/snug font-bold mb-10 text-violet-500 text-center"
              data-aos="fade-up" data-aos-duration="1000">
            <i className="ri-user-line mr-3"></i> About Me
          </h1>
          {/* Box Deskripsi: Menggunakan 'flip-up' agar lebih menarik */}
          <div className="p-8 rounded-xl shadow-2xl max-w-3xl mx-auto mb-16 bg-violet-900/30 border border-violet-700/50"
              data-aos="flip-up" data-aos-duration="1000" data-aos-delay="200"> {/* Animasi flip-up */}
            <p className="text-base/loose opacity-90 text-zinc-200 text-justify">
              A highly results-oriented Diploma student in Information Technology (IT), I possess a fervent passion for driving organizational efficiency by 
              transforming complex business challenges into clear, efficient, and practical technological solutions...
            </p>
          </div>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 xl:w-5/6 lg:w-11/12 w-full mx-auto">
            
            {/* Kartu Statistik: Menggunakan 'zoom-in' terpisah untuk efek staggered yang lebih baik */}
            {[
              { id: 1, title: 'TOTAL PROJECTS', count: '5+', icon: 'ri-code-s-slash-line', delay: 0, href: '#proyek', aos: 'zoom-in' },
              { id: 2, title: 'CERTIFICATES', count: '5', icon: 'ri-award-line', delay: 200, href: '#sertifikat', aos: 'zoom-in' },
              { id: 3, title: 'YEARS OF EXPERIENCE', count: '2+', icon: 'ri-time-line', delay: 400, href: '#proyek', aos: 'zoom-in' },
            ].map((item) => (
              <a key={item.id} href={item.href} className="p-8 rounded-xl shadow-lg flex flex-col justify-between bg-zinc-800 transition-all duration-300 
                                                               hover:bg-zinc-700/70 border border-zinc-700/50 hover:border-violet-500 
                                                               hover:shadow-xl hover:shadow-violet-900/70"
                data-aos={item.aos} data-aos-duration="1000" data-aos-delay={item.delay}>
                <div className="flex items-center justify-between mb-8">
                  <div className="w-16 h-16 rounded-full bg-violet-700 flex items-center justify-center shadow-lg shadow-violet-500/50"> 
                    <i className={`${item.icon} text-3xl text-white`}></i>
                  </div>
                  <span className="text-6xl font-extrabold text-violet-400 drop-shadow-md">{item.count}</span>
                </div>
                <div>
                  <h3 className="text-xl font-extrabold text-white mb-2">{item.title}</h3> 
                  <p className="text-sm opacity-80 text-zinc-300 flex items-center group-hover:text-violet-300"> 
                    {item.title === 'TOTAL PROJECTS' ? 'Innovative Software solutions created' : item.title === 'CERTIFICATES' ? 'Skills verified through professional courses' : 'Years of Active Study & Project Experience'}
                    <i className="ri-arrow-right-up-line ml-2 text-base transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"></i>
                  </p>
                </div>
              </a>
            ))}
          </div>

          {/* Bagian Tools: Menggunakan 'fade-up' pada judul, dan 'fade' biasa pada kartu */}
          <div className="tools mt-32">
            <h1 className="text-4xl/snug font-bold mb-4 text-violet-500 text-center" 
            data-aos="fade-up" data-aos-duration="1000">Tools Used <i className="ri-tools-line ml-2"></i></h1> 
            <p className="xl:w-2/5 lg:w-2/4 md:w-2/3 sm:w-3/4 w-full text-base/loose opacity-70 text-center mx-auto text-zinc-400" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" >
              Here are some of the tools I commonly use</p> 
            <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2
            grid-cols-1 gap-4">
              {listTools.map((tool, index) => (
                // Menggunakan 'fade-up' pada setiap kartu dengan delay yang dihitung
                <div className="flex items-center gap-4 p-4 rounded-xl shadow-lg border border-zinc-700 hover:bg-violet-900/50 group bg-zinc-800 transition-all duration-300 hover:border-violet-500" 
                key={tool.id} data-aos="fade-up" data-aos-duration="800" data-aos-delay={index * 150}>
                  <div className="w-14 h-14 flex-shrink-0 flex items-center justify-center rounded-lg bg-zinc-700/50 border border-zinc-600">
                    <img src={tool.gambar} alt="Tools Image" className="w-10 h-10 object-contain" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white group-hover:text-violet-300">{tool.nama}</h4>
                    <p className="opacity-70 text-zinc-400 text-sm">{tool.ket}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* End Section About */}
          
        {/* --- Proyek --- */}
        <div className="proyek mt-32 py-10" id="proyek">
            <h1 className="text-center text-4xl font-bold mb-2 text-violet-500" data-aos="fade-up" data-aos-duration="1000" >My Projects <i className="ri-folder-open-line ml-2"></i></h1>
              <p className="text-base/loose text-center opacity-70 text-zinc-400" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300"> 
              Here are some of the projects I have worked on</p>
            <div className="proyek-box mt-14 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">{listProyek.map((proyek, index) => (
              // Menggunakan 'flip-left' dan 'flip-right' untuk variasi
              <div key={proyek.id} 
                   className="p-5 rounded-xl shadow-2xl transition-all duration-500 border border-zinc-700/50 bg-zinc-800 
                              hover:bg-zinc-700/70 hover:border-violet-500 hover:scale-[1.02] transform" 
              data-aos={index % 2 === 0 ? "flip-left" : "flip-right"} data-aos-duration="1000" data-aos-delay={index * 200} > {/* Animasi flip bervariasi */}
                <img src={proyek.gambar} alt="Proyek Image" className="rounded-lg w-full aspect-[16/9] object-cover mb-4 border border-zinc-700" loading="lazy"/> 
                  <div className="mt-4">
                    <h1 className="text-2xl font-bold mb-3 text-violet-300">{proyek.nama}</h1> 
                    <p className="text-base/loose mb-4 opacity-80 text-zinc-300 line-clamp-3">{proyek.desk}</p> 
                      <div className="flex flex-wrap gap-2 mb-6">
                        {proyek.tools.map((tool, index) => (
                          <p key={index} className="py-1 px-3 rounded-full text-xs font-medium bg-zinc-900/50 text-zinc-300 border border-zinc-700/50"> 
                            {tool}
                          </p>
                        ))}
                      </div>
                    <a href={proyek.link} target="_blank" rel="noopener noreferrer" 
                       className="bg-violet-700 hover:bg-violet-600 p-3 rounded-lg block text-center font-semibold text-white transition-all duration-300 
                                  shadow-md shadow-violet-500/50 hover:shadow-violet-400/70" 
                    >
                    Github <i className="ri-external-link-line ml-2"></i>
                    </a>
                  </div>
              </div>
              ))}
            </div>
        </div>
        {/*End Proyek*/}      

        {/* --- SECTION SERTIFIKAT --- */}
        <div className="sertifikat mt-32 py-10" id="sertifikat">
            <h1 className="text-center text-4xl font-bold mb-2 text-violet-500" data-aos="fade-up" data-aos-duration="1000" >My Certificates <i className="ri-medal-line ml-2"></i></h1>
              <p className="text-base/loose text-center opacity-70 text-zinc-400" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300"> 
              Verified professional credentials and skills</p>
            
            <div className="sertifikat-box mt-14 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
              {listSertifikat.map((sertifikat, index) => (
                <div key={sertifikat.id} className="p-6 rounded-xl shadow-2xl transition-all duration-500 border border-zinc-700/50 flex flex-col justify-between bg-zinc-800 
                                              hover:bg-zinc-700/70 hover:border-violet-500 hover:scale-[1.02] transform" 
                data-aos="zoom-in-up" data-aos-duration="1000" data-aos-delay={index * 150} > {/* Animasi zoom-in-up */}
                  
                  {/* GAMBAR SERTIFIKAT */}
                  <img src={sertifikat.gambar} alt={sertifikat.nama} className="rounded-lg w-full object-cover mb-4 border border-zinc-700" loading="lazy" />

                  <div>
                    {/* Nama dan Deskripsi Sertifikat */}
                    <h1 className="text-xl font-bold mb-2 text-violet-300">{sertifikat.nama}</h1>
                    <p className="text-sm/loose mb-4 opacity-80 text-zinc-300 line-clamp-3">{sertifikat.desk}</p>
                  </div>

                  {/* TOMBOL VERIFIKASI */}
                  {sertifikat.link_verifikasi && (
                    <a href={sertifikat.link_verifikasi} target="_blank" rel="noopener noreferrer" 
                       className="bg-violet-700 text-white py-3 px-4 rounded-lg block text-center font-semibold mt-4 hover:bg-violet-600 transition-all duration-300 
                                  shadow-md shadow-violet-500/50 hover:shadow-violet-400/70" 
                    >
                      Verify Certificate <i className="ri-check-line ml-2"></i>
                    </a>
                  )}
                </div>
              ))}
            </div>
        </div>
        {/* --- END SECTION SERTIFIKAT --- */}


        {/* --- Kontak --- */}
        <div className="kontak-mt-32 sm:p-10 p-0 mb-20" id="kontak"> 
          <h1 className="text-4xl mb-2 font-bold text-center text-violet-500" data-aos="fade-up" data-aos-duration="1000">Contact <i className="ri-mail-line ml-2"></i></h1> 
          <p className="text-base/loose text-center mb-10 opacity-70 text-zinc-400" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" >
          Let's connect with me</p>
          <form action="https://formsubmit.co/angellsimamora29@gmail.com" method="POST" 
                className="p-10 sm:w-fit w-full mx-auto rounded-xl shadow-2xl border border-violet-700/50 bg-zinc-800 max-w-lg" 
          autoComplete="off" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
            <div className="flex flex-col gap-6 ">
              <div className="flex flex-col gap-2" data-aos="fade-right" data-aos-delay="600">
                <label className="font-semibold text-white">Full Name</label> 
                <input type="text" name="nama" placeholder="Enter Name" 
                       className="border border-zinc-600 bg-zinc-900 text-white p-3 rounded-lg focus:border-violet-500 focus:outline-none transition-all duration-300" required></input>
              </div>
              <div className="flex flex-col gap-2" data-aos="fade-right" data-aos-delay="700">
                <label className="font-semibold text-white">Email</label>
                <input type="email" name="email" placeholder="Email" 
                       className="border border-zinc-600 bg-zinc-900 text-white p-3 rounded-lg focus:border-violet-500 focus:outline-none transition-all duration-300" required></input> 
              </div>
              <div className="flex flex-col gap-2" data-aos="fade-right" data-aos-delay="800">
                <label htmlFor="pesan" className="font-semibold text-white">Message</label> 
                <textarea name="pesan" id="pesan" cols="45" rows="7" placeholder="Message" 
                          className="border border-zinc-600 bg-zinc-900 text-white p-3 rounded-lg focus:border-violet-500 focus:outline-none transition-all duration-300" required></textarea> 
              </div >
              <div className="text-center" data-aos="zoom-in" data-aos-delay="900">
                <button type="submit" 
                        className="bg-violet-700 p-3 rounded-lg w-full cursor-pointer font-semibold text-white 
                                   border border-violet-700 hover:bg-violet-600 transition-all duration-300 
                                   shadow-lg shadow-violet-500/50 hover:shadow-violet-400/70"
                >
                  Send Message <i className="ri-send-plane-line ml-2"></i>
                </button> 
              </div>
            </div>
          </form>
        </div>      
        {/* --- End Kontak --- */}
      </div> 
      
    
    </div>
  )
}

export default App