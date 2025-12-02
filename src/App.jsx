import DataImage from "./data";
import {listTools, listProyek, listSertifikat} from "./data";

function App() {
  return (
    <div className="bg-zinc-900 text-white min-h-screen">
      <div className="container mx-auto px-4"> 

        <div className="hero grid md:grid-cols-2 items-center pt-10 xl:gap-0 gap-6 grid-cols-1">
          <div className="animate__animated animate__fadeInUp animate__delay-3s">
            <div className="flex items-center gap-3 mb-6 w-fit p-4 rounded-2xl shadow-lg bg-zinc-800">
              <img src={DataImage.angel} alt="angel" className="w-10 rounded-md" loading="lazy" /> 
              <blockquote className="text-s italic font-normal text-zinc-300 max-w-2xl mx-auto">
                "Innovation is the single leap that determines a new starting line. What was once radical, tomorrow is merely the next starting point."
              </blockquote>
            </div>
            <h1
              className="text-5xl/tight mb-0 leading-tight text-white"
              style={{ fontFamily: '"Poppins", cursive', fontWeight: 800 }}
            >
              Hi, I'm
            </h1>
            <h1
              className="text-5xl/tight mb-0 leading-tight text-violet-500" 
              style={{ fontFamily: '"Poppins", cursive', fontWeight: 800 }}
            >
              Anjelika A. Simamora
            </h1>
            <p className="text-5xl/tight mb-6 leading-tight font-bold text-white">
              Junior Tech 
            </p>
            <p className="text-base/loose mb-6 opacity-70 text-zinc-300">
              A results-oriented Diploma student in Information Technology (IT), passionate about transforming complex challenges into efficient 
              and practical technological solutions. Proficient in technical problem solving, systematic implementation, and effective stakeholder 
              communication, with a commitment to continuous learning and collaboration on innovative IT-driven initiatives.
            </p>
            <div className="flex items-center sm:gap-4 gap-2 ">
              <a href="\assets\CV.pdf" download className="bg-violet-700 text-white py-3 px-6 rounded-lg hover:bg-violet-600 font-semibold">
                Download CV <i className="ri-download-line ri-lg"></i>
              </a>
              <a href="#proyek" className="bg-transparent text-white py-3 px-6 rounded-lg border border-violet-500 hover:bg-violet-500 hover:text-white ">
                View Projects <i className="ri-arrow-down-line ri-lg"></i> 
              </a>
            </div>
          </div>
          <img src={DataImage.angel2} alt="angel" className="w-[500px] md:ml-auto animate__animated animate__fadeInUp animate__delay-4s rounded-md" 
          loading="lazy" />
        </div>  

        {/* Section About */}
        <div className="tentang mt-32 py-10" id="tentang">
          <h1 className="text-4xl/snug font-bold mb-10 text-violet-500 text-center"
              data-aos="fade-up" data-aos-duration="1000">
            About Me
          </h1>
          <div className="p-7 rounded-xl shadow-lg max-w-2xl mx-auto mb-16 bg-violet-900/30"
              data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
            
            <p className="text-base/loose opacity-90 text-zinc-200 text-justify">
              A highly results-oriented Diploma student in Information Technology (IT), I possess a fervent passion for driving organizational efficiency by 
              transforming complex business challenges into clear, efficient, and practical technological solutions. My academic journey has equipped me with 
              proficiency in crucial IT disciplines, including technical problem-solving, systematic implementation of solutions, and comprehensive analysis of 
              requirements. I am skilled in gathering and documenting specifications and maintaining effective, clear communication with various stakeholders to 
              ensure project alignment and success. Committed to continuous learning and professional development, my primary goal is to contribute actively to 
              innovative, IT-driven initiatives and collaborate within cross-functional teams to deliver sustainable and impactful outcomes.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 xl:w-5/6 lg:w-11/12 w-full mx-auto">
            
            {/* Kartu 1: Total Projects */}
            <a href="#proyek" className="p-8 rounded-xl shadow-lg flex flex-col justify-between bg-zinc-800 hover:bg-zinc-900 transition-all duration-300" 
                  data-aos="fade-up" data-aos-duration="1000">
              <div className="flex items-center justify-between mb-8">
                <div className="w-16 h-16 rounded-full bg-violet-700 flex items-center justify-center">
                  <i className="ri-code-s-slash-line text-3xl text-white"></i>
                </div>
                <span className="text-5xl font-bold text-violet-500">5+</span> 
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">TOTAL PROJECTS</h3> 
                <p className="text-sm opacity-70 text-zinc-300 flex items-center">
                  Innovative Software solutions created
                  <i className="ri-arrow-right-up-line ml-2 text-base"></i>
                </p>
              </div>
            </a>

            {/* Kartu 2: Certificates */}
            <a href="#sertifikat" className="p-8 rounded-xl shadow-lg flex flex-col justify-between bg-zinc-800 hover:bg-zinc-900 transition-all duration-300"
                  data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
              <div className="flex items-center justify-between mb-8">
                <div className="w-16 h-16 rounded-full bg-violet-700 flex items-center justify-center">
                  <i className="ri-award-line text-3xl text-white"></i>
                </div>
                <span className="text-5xl font-bold text-violet-500">5</span> 
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">CERTIFICATES</h3> 
                <p className="text-sm opacity-70 text-zinc-300 flex items-center">
                  Skills verified through professional courses 
                  <i className="ri-arrow-right-up-line ml-2 text-base"></i>
                </p>
              </div>
            </a>

            {/* Kartu 3: Years of Experience */}
            <a href="#proyek" className="p-8 rounded-xl shadow-lg flex flex-col justify-between bg-zinc-800 hover:bg-zinc-900 transition-all duration-300"
                  data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
              <div className="flex items-center justify-between mb-8">
                <div className="w-16 h-16 rounded-full bg-violet-700 flex items-center justify-center">
                  <i className="ri-time-line text-3xl text-white"></i> 
                </div>
                <span className="text-5xl font-bold text-violet-500">2+</span> 
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">YEARS OF EXPERIENCE</h3> 
                <p className="text-sm opacity-70 text-zinc-300 flex items-center">
                  Years of Active Study & Project Experience 
                  <i className="ri-arrow-right-up-line ml-2 text-base"></i>
                </p>
              </div>
            </a>
          </div>

          {/* Bagian Tools */}
          <div className="tools mt-32">
            <h1 className="text-4xl/snug font-bold mb-4 text-violet-500 text-center" 
            data-aos="fade-up" data-aos-duration="1000">Tools Used</h1> {/* Changed Tools yang digunakan */}
            <p className="xl:w-2/5 lg:w-2/4 md:w-2/3 sm:w-3/4 w-full text-base/loose opacity-50 text-center mx-auto text-zinc-400" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" >
              Here are some of the tools I commonly use</p> {/* Changed the descriptive text */}
            <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2
            grid-cols-1 gap-4">
              {listTools.map((tool, index) => (
                <div className="flex items-center gap-2 p-3 rounded-md shadow-sm border border-zinc-700 hover:bg-violet-900/50 group bg-violet-900/30 transition-all duration-300"
                key={tool.id} data-aos="fade-up" data-aos-duration="1000" data-aos-delay={index * 100}>
                  <img src={tool.gambar} alt="Tools Image" className="w-14 p-1 rounded-md" style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}
                  />
                  <div>
                    <h4 className="font-bold text-white">{tool.nama}</h4>
                    <p className="opacity-50 text-zinc-400">{tool.ket}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* End Section About */}
          
        {/* Proyek */}
        <div className="proyek mt-32 py-10" id="proyek">
            <h1 className="text-center text-4xl font-bold mb-2 text-violet-500" data-aos="fade-up" data-aos-duration="1000" >My Projects</h1> {/* Changed Proyek Saya */}
              <p className="text-base/loose text-center opacity-50 text-zinc-400" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300"> 
              Here are some of the projects I have worked on</p> {/* Changed the descriptive text */}
            <div className="proyek-box mt-14 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">{listProyek.map((proyek) => (
              <div key={proyek.id} className="p-4 rounded-xl shadow-lg transition-all duration-300 border border-zinc-700 bg-zinc-800 hover:bg-zinc-900" 
              data-aos="fade-up" data-aos-duration="1000" data-aos-delay={proyek.dad} >
                <img src={proyek.gambar} alt="Proyek Image" className="rounded-md w-full" loading="lazy"/>
                  <div className="mt-4">
                    <h1 className="text-2xl font-bold mb-2 text-white">{proyek.nama}</h1>
                    <p className="text-base/loose mb-4 opacity-80 text-zinc-300">{proyek.desk}</p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {proyek.tools.map((tool, index) => (
                          <p key={index} className="py-1 px-3 rounded-md text-sm font-medium bg-zinc-700 text-white"> 
                            {tool}
                          </p>
                        ))}
                      </div>
                    <a href={proyek.link} target="_blank" rel="noopener noreferrer" className="bg-violet-700 hover:bg-violet-600 p-3 rounded-lg block text-center font-semibold text-white">
                    View Website {/* Changed Lihat Website */}
                    </a>
                  </div>
              </div>
              ))}
            </div>
        </div>
        {/*End Proyek*/}      

        {/* --- SECTION SERTIFIKAT BARU DENGAN GAMBAR DAN LINK --- */}
        <div className="sertifikat mt-32 py-10" id="sertifikat">
            <h1 className="text-center text-4xl font-bold mb-2 text-violet-500" data-aos="fade-up" data-aos-duration="1000" >My Certificates</h1> {/* Changed Sertifikat Saya */}
              <p className="text-base/loose text-center opacity-50 text-zinc-400" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300"> 
              Verified professional credentials and skills</p> {/* Changed the descriptive text */}
            
            <div className="sertifikat-box mt-14 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
              {listSertifikat.map((sertifikat) => (
                <div key={sertifikat.id} className="p-6 rounded-xl shadow-lg transition-all duration-300 border border-zinc-700 flex flex-col justify-between bg-zinc-800 hover:bg-zinc-900" 
                data-aos="fade-up" data-aos-duration="1000" data-aos-delay={sertifikat.dad} >
                  
                  {/* GAMBAR SERTIFIKAT */}
                  <img src={sertifikat.gambar} alt={sertifikat.nama} className="rounded-md w-full mb-4 object-cover" loading="lazy" />

                  <div>
                    {/* Nama dan Deskripsi Sertifikat */}
                    <h1 className="text-xl font-bold mb-2 text-white">{sertifikat.nama}</h1>
                    <p className="text-sm/loose mb-4 opacity-80 text-zinc-300">{sertifikat.desk}</p>
                  </div>

                  {/* TOMBOL VERIFIKASI (Hanya tampil jika link_verifikasi ada) */}
                  {sertifikat.link_verifikasi && (
                    <a href={sertifikat.link_verifikasi} target="_blank" rel="noopener noreferrer" className="bg-violet-700 text-white py-3 px-4 rounded-lg block text-center font-semibold mt-4 hover:bg-violet-600">
                      Verify Certificate {/* Changed Verifikasi Sertifikat */}
                    </a>
                  )}
                </div>
              ))}
            </div>
        </div>
        {/* --- END SECTION SERTIFIKAT BARU --- */}


        {/*Kontak*/}
        <div className="kontak-mt-32 sm:p-10 p-0" id="kontak">
          <h1 className="text-4xl mb-2 font-bold text-center text-violet-500" data-aos="fade-up" data-aos-duration="1000">Contact</h1> {/* Changed Kontak */}
          <p className="text-base/loose text-center mb-10 opacity-50 text-zinc-400" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" >
          Let's connect with me</p> {/* Changed Mari terhubung dengan saya */}
          <form action="https://formsubmit.co/angellsimamora29@gmail.com" method="POST" className="p-10 sm:w-fit w-full mx-auto rounded-md shadow-lg border border-zinc-700 bg-zinc-800" 
          autoComplete="off" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
            <div className="flex flex-col gap-6 ">
            <div className="flex flex-col gap-2">
              <label className="font-semibold text-white">Full Name</label> {/* Changed Nama Lengkap */}
              <input type="text" name="nama" placeholder="Enter Name" className="border border-zinc-600 bg-zinc-900 text-white p-2 rounded-md focus:border-violet-500 focus:outline-none" required></input> {/* Changed Masukan Nama */}
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-semibold text-white">Email</label>
              <input type="email" name="email" placeholder="Email" className="border border-zinc-600 bg-zinc-900 text-white p-2 rounded-md focus:border-violet-500 focus:outline-none" required></input>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="pesan" className="font-semibold text-white">Message</label> {/* Changed Pesan */}
              <textarea name="pesan" id="pesan" cols="45" rows="7" placeholder="Message" className="border border-zinc-600 bg-zinc-900 text-white p-2 rounded-md focus:border-violet-500 focus:outline-none" required></textarea> {/* Changed Pesan */}
            </div >
            <div className="text-center">
              <button type="submit" className="bg-violet-700 p-3 rounded-md w-full cursor-pointer border
              border-violet-700 hover:bg-violet-600 text-white font-semibold">Send Message</button> {/* Changed Kirim Pesan */}
            </div>
            </div>
          </form>
        </div>      
        {/*Kontak*/}
      </div> 
    </div>
  )
}

export default App