import { StrictMode, useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
// KOREKSI PATH DI BAWAH INI: F dan N harus besar
import Navbar from "./components/Navbar.jsx"; 
import Footer from "./components/Footer.jsx"; 
import PreLoader from "./components/PreLoader.jsx";
import "remixicon/fonts/remixicon.css";
import "animate.css";
import AOS from "aos";
import "aos/dist/aos.css";

// Inisialisasi AOS
AOS.init();

// Component wrapper untuk mengatur preloader
function RootWrapper() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Sesuaikan durasi dengan durasi animasi PreLoader kamu
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // 2 detik, bisa kamu ubah sesuai animasi preloader

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <PreLoader />
      ) : (
        <div className="container mx-auto px-4">
          <Navbar />
          <App />
          <Footer />
        </div>
      )}
    </>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RootWrapper />
  </StrictMode>
);
