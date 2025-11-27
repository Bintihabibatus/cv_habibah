"use client";

import Image from "@/public/data.js"; // Pastikan path ini benar
import ImageComponent from "next/image";
import Link from "next/link";

// React Server Components (Next.js etc)
import * as motion from "motion/react-client";

export default function Home() {
  return (
    <main className="py-10">
      {/* Bagian teks */}
      <motion.div
        className="text-center mb-8"
        initial={{ opacity: 0, y: 50, scale: 0.8 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
      >
        <h1 className="text-3xl md:text-3xl">
          Hi everyone ,<br />
          I'm Binti Habibatus Saniyah
        </h1>
      </motion.div>

      {/* Bagian gambar — di tengah, di bawah teks */}
      <motion.div
        className="flex justify-center -mt-5 bg-white"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        viewport={{ once: true }}
      >
        <ImageComponent
          src={Image.Hero}
          alt="Binti Habibatus Saniyah"
          width={300}
          height={300}
          className="rounded-lg shadow-lg object-cover"
        />
      </motion.div>

      {/* About */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="mt-32">
          <p className="text-2xl/normal mb-2 text-center" id="About">
            About
          </p>
          <p className="text-base/normal">
            I am a student at SMK TI Bali Global Badung with skills in the IT
            field. I have a good understanding of various technology concepts,
            can operate several applications effectively, am trustworthy,
            adaptable, able to work well both individually and in a team, and
            demonstrate good manners, ethics, and discipline.
          </p>
        </div>
      </motion.div>
      {/* About */}

      {/* Divider */}
      <hr className="border-t-2 border-gray-300 my-12" />

      {/* Education */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-12"
        id="Education"
      >
        <h1 className="text-4xl/normal text-center font-semibold">
          Education
        </h1>
      </motion.div>

      <div className="grid lg:grid-cols-3 mt-12 gap-10 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="font-semibold text-3xl mb-2">2013-2019</p>
          <p className="text-base/loose">SD Muhammadiyah 3 Denpasar</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="font-semibold text-3xl mb-2">2022-2023</p>
          <p className="text-base/loose">MTS Annuriyah Jember</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          viewport={{ once: true }}
        >
          <p className="font-semibold text-3xl mb-2">2023-Sekarang</p>
          <p className="text-base/loose">SMK TI Bali Global Badung</p>
        </motion.div>
      </div>
      {/* Education */}

      {/* Divider */}
      <hr className="border-t-2 border-gray-300 my-12" />

      {/* Skills */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-12"
        id="Skills"
      >
        <h1 className="text-4xl/normal text-center font-semibold">Skills</h1>
      </motion.div>

      <div className="grid lg:grid-cols-3 mt-12 gap-10 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-base/loose">‣ Microsoft Word</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-base/loose">‣ Microsoft Excel</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-base/loose">‣ Mampu Bekerja Sama Dengan Tim</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-base/loose">‣ Menguasai Bahasa Indonesia</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-base/loose">‣ Membuat Web Basic</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-base/loose">‣ Canva</p>
        </motion.div>
      </div>
      {/* Skills */}

      {/* Divider */}
      <hr className="border-t-2 border-gray-300 my-12" />

      {/* Project */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-12 text-center"
        id="Project"
      >
        <h1 className="text-4xl/normal font-semibold">Project</h1>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-base/loose font-semibold mt-2">This is my project</p>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-base/loose mt-2">
              This project is my personal CV, built using Tailwind CSS and HTML
              to showcase my skills and experience.
            </p>
          </motion.div>
        </motion.div>

        {/* Gambar di bawah teks */}
        <motion.div
          className="mt-12 flex justify-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          viewport={{ once: true }}
        >
          <ImageComponent
            src={Image.proyek}
            alt="Project Preview"
            width={300}
            height={300}
            className="rounded-lg shadow-lg object-cover"
          />
        </motion.div>
      </motion.div>
      {/* Project */}

      {/* Divider */}
      <hr className="border-t-2 border-gray-300 my-12" />

      {/* Blog */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-12 text-center"
        id="Blog"
      >
        <h1 className="text-4xl/normal font-semibold">Blog</h1>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-base/loose font-semibold mt-2">My latest articles</p>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-base/loose mt-2">
              Here are some of my thoughts and experiences shared through writing.
            </p>
          </motion.div>
        </motion.div>

        {/* Contoh Card Blog */}
        <div className="mt-12 grid md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            viewport={{ once: true }}
            className="bg-gray-100 p-6 rounded-lg shadow-md"
          >
            <h3 className="font-bold text-lg">My First Experience Creating My Own Website</h3>
            <p className="text-gray-600 mt-2">
              This is my first experience creating a website from scratch. At first, I was confused about the structure of Next.js and how to use Tailwind, but after trying several times and seeking help, I finally managed to make my CV website display properly. From this project, I learned that every small element has a big impact — things like padding and margin can make the layout look more balanced. Even though there’s still a lot I need to learn, I’m proud of this first result. I’m confident that by continuing to learn, I can create even better websites in the future.
            </p>
            <Link href="/blog/how-i-started-learning-web-dev" className="text-blue-500 mt-2 inline-block">
              Read More →
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            viewport={{ once: true }}
            className="bg-gray-100 p-6 rounded-lg shadow-md"
          >
            <h3 className="font-bold text-lg">My Experience Writing Articles with ClickUp</h3>
            <p className="text-gray-600 mt-2">
              During my time using ClickUp, I created several articles to document team processes and improve workflow efficiency. This experience taught me how to organize content clearly, manage deadlines, and communicate ideas effectively. Writing in a structured way has strengthened my ability to present complex information in an understandable and professional manner.
            </p>
            <Link href="/blog/why-i-choose-it" className="text-blue-500 mt-2 inline-block">
              Read More →
            </Link>
          </motion.div>
        </div>
      </motion.div>
      {/* Blog */}

      {/* Divider */}
      <hr className="border-t-2 border-gray-300 my-12" />

      {/* Contact */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-12 flex items-center justify-between md:flex-row flex-col md:gap-0 gap-4"
        id="Contact"
      >
        <h2 className="font-bold text-3xl">Contact Me</h2>

        {/* Link Internal (Navigasi ke bagian dalam halaman) */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 md:gap-6 text-center"
        >
          <Link href="#About" className="hover:underline">About</Link>
          <Link href="#Education" className="hover:underline">Education</Link>
          <Link href="#Skills" className="hover:underline">Skills</Link>
          <Link href="#Project" className="hover:underline">Project</Link>
          <Link href="#Blog" className="hover:underline">Blog</Link>
          <Link href="#Contact" className="hover:underline">Contact</Link>
        </motion.div>

        {/* Link Eksternal (Sosial Media) */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
          className="flex gap-4"
        >
          <Link
            href="https://www.facebook.com/Habibah_Saniyah"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-75 transition-opacity"
          >
            <i className="ri-facebook-fill ri-2x"></i>
          </Link>
          <Link
            href="https://www.instagram.com/bibunnsny_/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-75 transition-opacity"
          >
            <i className="ri-instagram-fill ri-2x"></i>
          </Link>
          <Link
            href="https://www.tiktok.com/@bibun6989"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-75 transition-opacity"
          >
            <i className="ri-tiktok-fill ri-2x"></i>
          </Link>
        </motion.div>
      </motion.div>
      {/* Contact */}
    </main>
  );
}