"use client";

import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
    const [active, setActive] = useState(false);

    console.log(active);

    const handleClick = () => {
        // console.log("Tasting");
        setActive(!active);
    };

    return (
        <div className="Navbar py-6">
            <div className="container mx-auto px-4">
                <div className="navbar-box flex items-center justify-between">
                    <div className="logo">
                        <h1 className="text-3xl font-bold">Curriculum Vitae</h1>
                    </div>

                    {/* Tambahkan "Blog" di sini */}
                    <ul className={`menu flex items-center gap-12 md:static absolute ${active ? "top-24 opacity-100" : "top-20 opacity-0"} left-1/2 -translate-x-1/2 pl-4 pr-10 md:pl-0 md:pr-0
                    md:translate-0 md:flex-row flex-col md:bg-transparent bg-slate-700 w-full md:w-auto md:py-0 py-10 text-white md:text-black
                    transition-all md:opacity-100 md:transition-none md:text-base text-xl`}>
                        <li>
                            <Link href="#About" onClick={() => setActive(false)}>About</Link>
                        </li>
                        <li>
                            <Link href="#Education" onClick={() => setActive(false)}>Education</Link>
                        </li>
                        <li>
                            <Link href="#Skills" onClick={() => setActive(false)}>Skills</Link>
                        </li>
                        <li>
                            <Link href="#Project" onClick={() => setActive(false)}>Project</Link>
                        </li>
                        {/* Tambahkan menu Blog di sini */}
                        <li>
                            <Link href="#Blog" onClick={() => setActive(false)}>Blog</Link>
                        </li>
                        <li>
                            <Link href="#Contact" onClick={() => setActive(false)}>Contact</Link>
                        </li>
                    </ul>

                    <div className="md:hidden block" onClick={() => handleClick()}>
                        <i className="ri-menu-3-line ri-2x font-bold"></i>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;