import HeroImage from "/assets/hero-img.webp";
import angel from "/assets/me.webp";
import angel2 from "/assets/angel.webp";

const Image = {
  HeroImage, angel, angel2
};

export default Image;

import Tools1 from "/assets/tools/vscode.png";
import Tools2 from "/assets/tools/reactjs.png";
import Tools3 from "/assets/tools/nextjs.png";
import Tools4 from "/assets/tools/tailwind.png";
import Tools5 from "/assets/tools/bootstrap.png";
import Tools6 from "/assets/tools/js.png";
import Tools7 from "/assets/tools/nodejs.png";
import Tools8 from "/assets/tools/github.png";
import Tools9 from "/assets/tools/ai.png"; // Adobe Illustrator
import Tools10 from "/assets/tools/canva.png";
import Tools11 from "/assets/tools/figma.png";
import Tools12 from "/assets/tools/postgre.png";
import Tools13 from "/assets/tools/mysql.png";
import Tools14 from "/assets/tools/cypress.png";
import Tools15 from "/assets/tools/selenium.jpg";
import Tools16 from "/assets/tools/postman.png";
import Tools17 from "/assets/tools/appium.png";
import Tools18 from "/assets/tools/android.jpg"; // Android SDK/Studio
// Tools19 import is missing
import Tools20 from "/assets/tools/java.png"; // Java
import Tools21 from "/assets/tools/SQLyog.png"; // SQLyog
import Tools22 from "/assets/tools/xampp.png"; // XAMPP
import Tools23 from "/assets/tools/netbeans.jpg"; // NetBeans IDE
import Tools24 from "/assets/tools/minitab.png"; // Minitab
import Tools25 from "/assets/tools/power bi.png"; // Power BI


export const listTools = [
  {
    id: 1,
    gambar: Tools1,
    nama: "Visual Studio Code",
    ket: "Code Editor",
    dad: "100",
  },
  {
    id: 2,
    gambar: Tools2,
    nama: "React JS",
    ket: "Framework",
    dad: "200",
  },
  {
    id: 3,
    gambar: Tools3,
    nama: "Next JS",
    ket: "Framework",
    dad: "300",
  },
  {
    id: 4,
    gambar: Tools4,
    nama: "Tailwind CSS",
    ket: "Framework",
    dad: "400",
  },
  {
    id: 5,
    gambar: Tools5,
    nama: "Bootstrap",
    ket: "Framework",
    dad: "500",
  },
  {
    id: 6,
    gambar: Tools6,
    nama: "Javascript",
    ket: "Language",
    dad: "600",
  },
  {
    id: 7,
    gambar: Tools7,
    nama: "Node JS",
    ket: "Javascript Runtime",
    dad: "700",
  },
  {
    id: 8,
    gambar: Tools8,
    nama: "Github",
    ket: "Repository",
    dad: "800",
  },
  {
    id: 9,
    gambar: Tools9,
    nama: "Adobe Illustrator",
    ket: "Design App",
    dad: "900",
  },
  {
    id: 10,
    gambar: Tools10,
    nama: "Canva",
    ket: "Design App",
    dad: "1000",
  },
  {
    id: 11,
    gambar: Tools11,
    nama: "Figma",
    ket: "Design App",
    dad: "1100",
  },
  {
    id: 12,
    gambar: Tools12,
    nama: "PostgreSQL",
    ket: "Database",
    dad: "1200",
  },
  {
    id: 13,
    gambar: Tools13,
    nama: "MySQL",
    ket: "Database",
    dad: "1300",
  },
  {
    id: 14,
    gambar: Tools14,
    nama: "Cypress",
    ket: "Testing Tool",
    dad: "1400",
  },
  {
    id: 15,
    gambar: Tools15,
    nama: "Selenium",
    ket: "Testing Tool",
    dad: "1500",
  },
  {
    id: 16,
    gambar: Tools16,
    nama: "Postman",
    ket: "API Tool",
    dad: "1600",
  },
  {
    id: 17,
    gambar: Tools17,
    nama: "Appium",
    ket: "Mobile Testing Tool",
    dad: "1700",
  },
  {
    id: 18,
    gambar: Tools18,
    nama: "Android Studio",
    ket: "IDE/Mobile Dev",
    dad: "1800",
  },
  // Skipping ID 19 as Tools19 import is missing.
  {
    id: 20,
    gambar: Tools20,
    nama: "Java",
    ket: "Language",
    dad: "1900",
  },
  {
    id: 21,
    gambar: Tools21,
    nama: "SQLyog",
    ket: "Database Management",
    dad: "2000",
  },
  {
    id: 22,
    gambar: Tools22,
    nama: "XAMPP",
    ket: "Web Server Stack",
    dad: "2100",
  },
  {
    id: 23,
    gambar: Tools23,
    nama: "Apache NetBeans IDE",
    ket: "IDE",
    dad: "2200",
  },
  {
    id: 24,
    gambar: Tools24,
    nama: "Minitab",
    ket: "Statistical Software",
    dad: "2300",
  },
  {
    id: 25,
    gambar: Tools25,
    nama: "Power BI",
    ket: "Data Visualization",
    dad: "2400",
  },
];

import Proyek1 from "/assets/proyek/1.webp";
import Proyek2 from "/assets/proyek/2.webp";
import Proyek3 from "/assets/proyek/3.webp";
import Proyek4 from "/assets/proyek/4.webp";
import Proyek5 from "/assets/proyek/5.webp";
import Proyek6 from "/assets/proyek/6.webp";
import Proyek7 from "/assets/proyek/7.webp";
import Proyek8 from "/assets/proyek/8.webp";

export const listProyek = [
  {
    id: 1,
    gambar: Proyek1,
    nama: "Re-Engineering Management Information System",
    desk: "This project is the Design and Development of a Re-Engineering Management Information System Website for Del Institute of Technology. Its goal is to replace ineffective information dissemination methods (such as social media) with a formal, efficient, and structured web platform. The desired outcome is a website capable of displaying comprehensive information about the study program, such as news, curriculum, lecturers/staff, and facilities, which can be directly managed by the Study Program Admin.", // Translated desk
    tools: ["HTML", "CSS", "Javascript", "pHp", "MySQL", "Laravel", "Apache", "XAMPP", "Github", "VSCode"],
    link: "https://github.com/bhrstf/PA1_07.git",
    dad: "200",
  },
  {
    id: 2,
    gambar: Proyek2,
    nama: "Bloom Bouquet E-commerce",
    desk: "Bloom Bouquet is an e-commerce website that sells various types of flowers and flower arrangements for different occasions. This website is designed to provide an easy and enjoyable shopping experience for customers, with features such as product catalogs, a shopping cart, and an online payment system.", // Translated desk
    tools: ["JavaScript", "Dart", "CSS", "C++", "Blade", "pHp", "XAMPP", "Github", "VSCode", "MySQL", "Flutter","Selenium", "Appium", "Postman", "Cypress"],
    link: "https://github.com/bhrstf/Bloom-Bouquet.git",
    dad: "300",
  },
  {
    id: 3,
    gambar: Proyek3,
    nama: "Toba Creative House Website Re-Design",
    desk: "This project evaluates and redesigns the Toba Creative House web application for MSMEs in Toba Regency. Evaluation using Heuristic, Competitive Analysis, and SUS found issues with navigation, checkout, and design inconsistency. The solution is a new UI prototype that is more modern, intuitive, and implements features such as smart search and a three-step checkout process.", // Translated desk
    tools: ["Figma", "Balsamiq", "Github"],
    link:"https://github.com/bhrstf/Rumah-Kreatif-Toba.git",
    dad: "400",
  },
  {
    id: 4,
    gambar: Proyek4,
    nama: "Smart Waste Classification System",
    desk: "This project implements the YOLOv11 object detection algorithm for classifying organic and inorganic waste. Through comparison of four architectural variants, including backbone modifications with MobileNetV3 and MobileNetV4, the best-selected model is YOLOv11-MobileNetV3 with Partial Freeze Neck. The model implementation, with an mAP50 accuracy of 94.78%, is integrated into a Flutter and TensorFlow Lite-based mobile application for an efficient and real-time waste management solution.", // Translated desk
    tools: ["Dart", "C++", "CMake", "Swift", "Python", "Flutter", "TensorFlow Lite", "HTML", "C", "VSCode","Google Colab", "Kotlin", "Github" ],
    link:"https://github.com/bhrstf/Smart-Waste-Application.git",
    dad: "500",
  },
  {
    id: 5,
    gambar: Proyek5,
    nama: "Strotify Music Player",
    desk: "Strotify Music Player is a mobile application development project focused on an offline music player. Its primary goal is to provide an easily accessible music listening experience without relying on an internet connection, supported by a simple and intuitive interface. This project utilizes Flutter, Dart, and Firebase technologies to ensure optimal and reliable performance.", // Translated desk
    tools: ["Dart", "C++", "CMake", "Swift", "HTML", "C", "VSCode", "Flutter", "Firebase", "Github"],
    link:"https://github.com/bhrstf/Strotify.git",
    dad: "600",
  },
  {
    id: 6,
    gambar: Proyek6,
    nama: "Global Analysis of the Prevalence of Mental Health Disorders",
    desk: "This project is a Global Analysis of the Prevalence of Mental Health Disorders conducted as a Scalability & Data Analytics Practicum Report. The analysis uses a dataset consisting of 501 data rows covering various mental disorders such as depression, anxiety, schizophrenia, and alcohol/substance use disorders across different countries and years. The analysis techniques used include descriptive analysis, time trend analysis, comparative analysis, and correlation between variables using MiniTab and PowerBI tools.", // Translated desk
    tools: ["Power BI", "MiniTab", "Microsoft Excel"],
    link:"https://github.com/bhrstf/Global-Analysis-of-the-Prevalence-of-Mental-Health-Disorders.git",
    dad: "700",
  },
{
    id: 7,
    gambar: Proyek7,
    nama: "Event Organizer Management System",
    desk: "The Event Organizer Management System is a desktop application designed to manage events thoroughly and efficiently, covering scheduling, client management, and report generation. The system is built using the Java programming language with the JavaFX framework and connects to a MySQL database using JDBC, aiming to simplify processes and improve event data accuracy.", // Translated desk
    tools: ["Java", "JavaFX Scene Builder", "JDBC", "MySQL", "XAMPP", "Github", "VSCode", "Apache NetBeans IDE"],
    link:"https://github.com/bhrstf/Sistem-Pengelola-Event-Organizer.git",
    dad: "800",
  },
  {
    id: 8,
    gambar: Proyek8,
    nama: "Oreno Diary App",
    desk: "Oreno Diary is an intuitive and easy-to-use personal diary application designed to help users record their daily moments, thoughts, and reflections. With a clean interface and comprehensive logging features, the application supports a smooth personal documentation experience across various devices.", // Translated desk
    tools: ["Dart", "CMake", "HTML", "C++", "Swift", "C", "React Native", "VSCode", "Github", "Flutter", "Firebase", "Figma", "Balsamiq"],
    link:"https://github.com/bhrstf/Sistem-Pengelola-Event-Organizer.git",
    dad: "800",
  },
];

// --- DATA SERTIFIKAT BARU DITAMBAHKAN DI SINI ---
export const listSertifikat = [
  {
    id: 1,
    nama: "Python Introduction for Data Analysis",
    desk: "This certificate is awarded to Anjelika A. Simamora for the completion of the Data Science and Analysis short class by MySkill titled 'Python Introduction for Data Analysis'. This MySkill Short Class certificate was issued on January 6, 2025.", // Translated desk
    platform: "MySkill",
    link_verifikasi: "https://drive.google.com/file/d/1VNsjJSpekRwpJRXqmdaBXC52u7YkBgpY/view?usp=sharing",
    gambar: "/assets/sertifikat/1.webp",
    dad: 0
  },
  {
    id: 2,
    nama: "Learning Basic Web Programming",
    desk: "This certificate proves my graduation, Anjelika A. Simamora, from the Dicoding Academy Basic Web Programming class on June 17, 2025. I mastered the basics of HTML and CSS for website creation, totaling 41 learning hours.", // Translated desk
    platform: "Dicoding Academy",
    link_verifikasi: "https://drive.google.com/file/d/1rLVD3Dw9nJZeZhNu1cE8zmaks_uHgvYO/view?usp=sharing",
    gambar: "/assets/sertifikat/2.webp",
    dad: 200
  },
  {
    id: 3,
    nama: "Learning Basic JavaScript Programming",
    desk: "This certificate demonstrates my completion of the Basic JavaScript Programming class from Dicoding Academy on November 28, 2025, proving my mastery of JavaScript fundamentals for web development, including OOP, Functional Programming, and Asynchronous Processes, totaling 46 learning hours.", // Translated desk
    platform: "Dicoding Academy",
    link_verifikasi: "https://drive.google.com/file/d/170Fl5Qfzwyt6y1itgQlg0TMAcje8ACzB/view?usp=sharing",
    gambar: "/assets/sertifikat/3.webp",
    dad: 400
  },
  {
    id: 4,
    nama: "Learning Beginner Back-End with JavaScript",
    desk: "This certificate proves Anjelika A. Simamora's completion of the Practical AI for Productivity class from Dicoding Academy on June 26, 2025. The total learning time was 18 hours. This program is a collaboration with AVPN, supported by Google.org and the Asian Development Bank.", // Translated desk (Note: The description text seems mismatched with the title, as the title is 'Learning Beginner Back-End with JavaScript' and the description mentions 'Practical AI for Productivity'. I translated the provided text literally.)
    platform: "Dicoding Academy",
    link_verifikasi: "https://drive.google.com/file/d/1pJlK-dPxbOkAaOoX383brhiPWiOgod0Q/view?usp=sharing",
    gambar: "/assets/sertifikat/4.webp",
    dad: 600
  },
{
    id: 5,
    nama: "Practical AI for Productivity", // Translated nama
    desk: "This certificate is awarded to Anjelika A. Simamora for her completion of the Learning Beginner Back-End with JavaScript class from Dicoding Academy. This class concluded on November 28, 2025. With a total of 45 learning hours, students can create simple RESTful APIs using Node.js and the Hapi framework. This class is aligned with international AWS competency standards.", // Translated desk (Note: This description text seems mismatched with the title, as the title is 'Practical AI for Productivity' and the description mentions 'Learning Beginner Back-End with JavaScript'. I translated the provided text literally.)
    platform: "Dicoding Academy",
    link_verifikasi: "https://drive.google.com/file/d/1JxHLqsdZeVH6-L_MI2eN-lU-jNGRQw17/view?usp=sharing",
    gambar: "/assets/sertifikat/5.webp",
    dad: 600
  },
  // Tambahkan lebih banyak data sertifikat sesuai kebutuhan
];
// ----------------------------------------------------