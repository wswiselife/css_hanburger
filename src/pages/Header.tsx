import React, { useState } from "react";
import Logo from "../components/Logo";
import NavLink from "../components/NavLink";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navLinks = [
        { text: "Home", href: "#" },
        { text: "Menu", href: "#" },
        { text: "Service", href: "#" },
        { text: "Offers", href: "#" },
        { text: "Rewards", href: "#" },
    ];

    return (
        <div className="fixed top-3 left-0 right-0 h-auto w-full px-5 transition-all duration-300">
            <div className="flex justify-between items-center max-w-7xl mx-auto">
                {/* Logo */}
                <Logo />

                {/* Desktop Navagation */}
                <div className="">
                    <div className="hidden md:flex justify-center items-center gap-5">
                        {navLinks.map(item => (
                            <div>{item.text}</div>
                        ))}
                    </div>
                </div>

                {/* Right Section */}
                <div className="flex justify-center items-center gap-2 z-50">
                    <div>№</div>
                    <div>№</div>
                    <div onClick={() => setIsOpen(!isOpen)}>№</div>
                </div>

                {/* Mobile Navigation */}
                <div
                    className={`md:hidden fixed top-0 right-0 w-52 h-screen bg-amber-200  ${
                        isOpen ? "translate-x-0" : "hidden"
                    }`}
                >
                    <div className="bg-cyan-100 border-t w-full">
                        {navLinks.map(item => (
                            <NavLink />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
