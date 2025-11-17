"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false); // Ganti nama state agar lebih jelas

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setIsVisible(true); // Ganti setActive
            } else {
                setIsVisible(false); // Ganti setActive
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    if (!isVisible) {
        return null; // Jangan render tombol jika tidak perlu
    }

    return (
        <Link
            href="#About" // Ini akan menggulir ke elemen dengan id="About"
            className="fixed bottom-10 right-10 bg-slate-800 text-white w-12 h-12 rounded-full
                       text-center hover:bg-slate-700 cursor-pointer transition-all opacity-100"
            onClick={(e) => {
                // Opsional: Tambahkan logika jika ingin perilaku scroll yang lebih spesifik
                // atau mencegah perilaku default jika diperlukan.
                // window.scrollTo({ top: 0, behavior: 'smooth' });
                // e.preventDefault(); // Jika ingin mencegah perilaku link default
            }}
        >
            <i className="ri-arrow-up-line ri-2x"></i>
        </Link>
    );
};

export default ScrollToTop;