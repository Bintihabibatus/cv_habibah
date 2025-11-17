"use client";

import Image from "@/public/data.js";
import ImageComponent from "next/image";
import Link from "next/link";

// React Server Components (Next.js etc)
import * as motion from "motion/react-client"

export default function Home() {
  return (
    <main className="py-10">
      {/* Bagian teks */}
      <motion.div className="text-center mb-8" initial={{ opacity: 0, y: 50, scale: 0.8 }} animate={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true}}>
        <h1 className="text-3xl md:text-3xl">
          Hi everyone ,<br />
          I'm Binti Habibatus Saniyah
        </h1>
      </motion.div>

      {/* Bagian gambar — di tengah, di bawah teks */}
      <motion.div className="flex justify-center -mt-5 bg-white" initial={{ opacity:0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{delay: 0.5}} viewport={{ once: true}}>
  <ImageComponent
    src={Image.Hero}
    alt="Binti Habibatus Saniyah"
    width={300}
    height={300}
    className="rounded-lg shadow-lg object-cover"
  />
</motion.div>

{/* About */}
<motion.div initial={{opacity: 0, y: 100}} whileInView={{opacity: 1, y: 0}} viewport={{ once: true}}>
  <div>
    <i className="grid grid-cols-3 text-slate-700 mt-32 gap-10" id="About"></i>
    <p className="text-2xl/normal mb-2">I am a student at SMK TI Bali Global Badung with skills in the IT field. I have a good understanding of various technology concepts, can operate several applications effectively, am trustworthy, adaptable, able to work well both individually and in a team, and demonstrate good manners, ethics, and discipline.</p>
  </div>
</motion.div>
{/* About */}

{/* Divider */}
  <hr className="border-t-2 border-gray-300 mb-12" />

{/* Education */}

<motion.div initial={{opacity: 0, y: 100}} whileInView={{opacity: 1, y: 0}} viewport={{ once: true}} className="mt-32" id="Education">
  <h1 className="text-4xl/normal text-center font-semibold ">Education</h1>
</motion.div>

<div className="grid lg:grid-cols-3 mt-32 gap-10 md:grid-cols-2">
<motion.div initial={{opacity: 0, y: 100}} whileInView={{opacity: 1, y: 0}} transition={{ delay: 0.3}} viewport={{ once: true}}>
<p className="font-semibold text-3xl mb-2">2013-2019</p>
<p className="text-base/loose"> SD Muhammadiyah 3 Denpasar</p>
</motion.div>
<motion.div initial={{opacity: 0, y: 100}} whileInView={{opacity: 1, y: 0}} transition={{ delay: 0.6}} viewport={{ once: true}}>
  <p className="font-semibold text-3xl mb-2">2022-2023</p>
<p className="text-base/loose">  MTS Annuriyah Jember</p>
</motion.div>
<motion.div initial={{opacity: 0, y: 100}} whileInView={{opacity: 1, y: 0}} transition={{ delay: 0.9}} viewport={{ once: true}}>
  <p className="font-semibold text-3xl mb-2">2023-Sekarang</p>
<p className="text-base/loose"> SMK TI Bali Global Badung</p>
</motion.div>
</div>
{/* Education */}

{/* Divider */}
  <hr className="border-t-2 border-gray-300 mb-12" />

{/* Skills */}
<motion.div initial={{opacity: 0, y: 100}} whileInView={{opacity: 1, y: 0}} viewport={{ once: true}} className="mt-32" id="Skills">
  <h1 className="text-4xl/normal text-center font-semibold ">Skills</h1>
</motion.div>

<div className="grid lg:grid-cols-3 mt-32 gap-10 md:grid-cols-2">
<motion.div initial={{opacity: 0, y: 100}} whileInView={{opacity: 1, y: 0}} transition={{ delay: 0.3}} viewport={{ once: true}}>
<p className="text-base/loose"> ‣ Microsoft Word</p>
</motion.div>
<motion.div initial={{opacity: 0, y: 100}} whileInView={{opacity: 1, y: 0}} transition={{ delay: 0.3}} viewport={{ once: true}}>
<p className="text-base/loose"> ‣ Microsoft Excel</p>
</motion.div>
<motion.div initial={{opacity: 0, y: 100}} whileInView={{opacity: 1, y: 0}} transition={{ delay: 0.3}} viewport={{ once: true}}>
<p className="text-base/loose"> ‣ Mampu Bekerja Sama Dengan Tim</p>
</motion.div>
<motion.div initial={{opacity: 0, y: 100}} whileInView={{opacity: 1, y: 0}} transition={{ delay: 0.6}} viewport={{ once: true}}>
<p className="text-base/loose"> ‣ Menguasai Bahasa Indonesia </p>
</motion.div>
<motion.div initial={{opacity: 0, y: 100}} whileInView={{opacity: 1, y: 0}} transition={{ delay: 0.6}} viewport={{ once: true}}>
<p className="text-base/loose"> ‣ Membuat Web Basic</p>
</motion.div>
<motion.div initial={{opacity: 0, y: 100}} whileInView={{opacity: 1, y: 0}} transition={{ delay: 0.6}} viewport={{ once: true}}>
<p className="text-base/loose"> ‣ Canva</p>
</motion.div>
{/* Divider */}
  <hr className="border-t-2 border-gray-300 mb-12" />
{/* Skills */}


{/* Project */}
<motion.div initial={{opacity: 0, y: 100}} whileInView={{opacity: 1, y: 0}} viewport={{ once: true}} className="mt-32 text-center" id="Project">
  <h1 className="text-4xl/normal font-semibold">Projects</h1>
  <motion.div initial={{opacity: 0, y: 100}} whileInView={{opacity: 1, y: 0}} transition={{ delay: 0.3}} viewport={{ once: true}}>
  <p className="text-base/loose font-semibold mt-2">This is my project</p>
  <motion.div initial={{opacity: 0, y: 100}} whileInView={{opacity: 1, y: 0}} transition={{ delay: 0.6}} viewport={{ once: true}}>
  <p className="text-base/loose mt-2">This project is my personal CV, built using Tailwind CSS and HTML to showcase my skills and experience.</p>
  </motion.div>
  </motion.div>

  {/* Gambar di bawah teks */}
  <motion.div className="mt-30 flex justify-center initial={{ opacity:0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{delay: 0.6}} viewport={{ once: true}}" >
    <ImageComponent
      src={Image.proyek}
      alt="Binti Habibatus Saniyah"
      width={300}
      height={300}
      className="rounded-lg shadow-lg object-cover"
    />
  </motion.div>
  {/* Divider */}
  <hr className="border-t-2 border-gray-300 mb-12" />
</motion.div>
</div>
{/* Project */}


{/* Contact */}
<motion.div
  initial={{ opacity: 0, y: 100 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }} // Tambahkan amount jika diperlukan, misalnya amount: 0.3
  className="mt-32 flex items-center justify-between md:flex-row flex-col md:gap-0 gap-4"
  id="Contact"
>
  <h2 className="font-bold text-3xl">Contact Me</h2>

  {/* Link Internal (Navigasi ke bagian dalam halaman) */}
  <motion.div
    initial={{ opacity: 0, y: 100 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.3 }}
    viewport={{ once: true }} // Tambahkan amount jika diperlukan
    className="flex gap-10"
  >
    <Link href="#About">About</Link>
    <Link href="#Education">Education</Link>
    <Link href="#Skills">Skills</Link>
    <Link href="#Projects">Project</Link> {/* Pastikan href sesuai dengan id di Project */}
    <Link href="#Contact">Contact</Link>
  </motion.div>

  {/* Link Eksternal (Sosial Media) */}
  <motion.div
    initial={{ opacity: 0, y: 100 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.6 }}
    viewport={{ once: true }} // Tambahkan amount jika diperlukan
    className="flex gap-4"
  >
    {/* Ganti # dengan URL sosial media kamu */}
    <Link
      href="https://www.facebook.com/Habibah_Saniyah"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:opacity-75 transition-opacity" // Opsional: Tambahkan efek hover
    >
      <i className="ri-facebook-fill ri-2x"></i>
    </Link>
    <Link
      href="https://www.instagram.com/bibunnsny_/"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:opacity-75 transition-opacity" // Opsional: Tambahkan efek hover
    >
      <i className="ri-instagram-fill ri-2x"></i>
    </Link>
    <Link
      href="https://www.tiktok.com/@bibun6989"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:opacity-75 transition-opacity" // Opsional: Tambahkan efek hover
    >
      <i className="ri-tiktok-fill ri-2x"></i>
    </Link>
  </motion.div>
</motion.div>
{/* Contact */}
    </main>
  );
}