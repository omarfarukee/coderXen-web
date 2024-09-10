import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo/logo.png';
import './Navbar.css'
import 'animate.css';
export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            if (offset > 100) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div
            className={`fixed w-full z-50 bg-transparent transition-all duration-300 animate__animated animate__fadeInUp ${scrolled ? "bg-white shadow-md" : ""
                }`}
        >
            <div className='flex items-center justify-between px-10 py-4 '>
                {/* logo */}
                <div>
                    <img
                        className={`transition-width duration-300 ${scrolled ? "w-40" : "w-56"}`}
                        src={logo}
                        alt="Logo"
                    />
                </div>
                {/* menu */}
                <div className={`flex gap-5 text-[18px] transition-all duration-300 ${scrolled ? "text-[14px]" : ""}`}>
                    <NavLink
                        to='/home'
                        className={({ isActive }) =>
                            isActive
                                ? 'nav-item active'
                                : 'nav-item'
                        }
                    >
                        home
                    </NavLink>
                    <NavLink
                        to='/aboutUs'
                        className={({ isActive }) =>
                            isActive
                                ? 'nav-item active'
                                : 'nav-item'
                        }
                    >
                        about us
                    </NavLink>
                    <NavLink
                        to='/contact'
                        className={({ isActive }) =>
                            isActive
                                ? 'nav-item active'
                                : 'nav-item'
                        }
                    >
                        contact
                    </NavLink>
                    <NavLink
                        to='/projects'
                        className={({ isActive }) =>
                            isActive
                                ? 'nav-item active'
                                : 'nav-item'
                        }
                    >
                        Projects
                    </NavLink>
                </div>
            </div>
        </div>
    );
}
