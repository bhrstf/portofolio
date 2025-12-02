const Footer = () => {
  return (
    <div className="mt-32 py-4 flex md:flex-row flex-col gap-6 md:gap-0 justify-between items-center">
        <h1 className="text-2xl font-bold">Anjelika A. Simamora</h1>
        <div className="flex gap-7">
            <a href="#beranda">Homepage</a>
            <a href="#tentang">About</a>
            <a href="#proyek">Project</a>
            <a href="#sertifikat">Certificates</a>
        </div>
        <div className="flex items-center gap-3">
            <a href="https://github.com/bhrstf">
                <i className="ri-github-fill ri-2x" href="https://github.com/bhrstf"></i>
            </a>
            <a href="https://www.instagram.com/an.ggelia?igsh=YWV5bW12aG9neGNr">
                <i className="ri-instagram-fill ri-2x" href="https://www.instagram.com/an.ggelia?igsh=YWV5bW12aG9neGNr"></i>
            </a>
            <a href="https://www.linkedin.com/in/anjelika-simamora-4344a3316">
                <i className="ri-linkedin-fill ri-2x" href="https://www.linkedin.com/in/anjelika-simamora-4344a3316"></i>
            </a>
            <a href="https://x.com/djauabhwhw?t=L3xa-8Wyya5P1ICMW_pAfg&s=09">
                <i className="ri-twitter-fill ri-2x" href="https://x.com/djauabhwhw?t=L3xa-8Wyya5P1ICMW_pAfg&s=09"></i>
            </a>
        </div>
    </div>
  )
}

export default Footer