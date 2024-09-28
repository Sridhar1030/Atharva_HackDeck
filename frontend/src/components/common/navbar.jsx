'use client'

import React, { useEffect, useState } from 'react'
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react'
import { NavLink, useNavigate } from 'react-router-dom'

const menuItems = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#' },
    { name: 'Contact', href: '#' },
    {
        name: 'Features',
        dropdown: true,
        links: [
            { name: 'Link 1', href: '#link1' },
            { name: 'Link 2', href: '#link2' },
            { name: 'Link 3', href: '#link3' }
        ]
    }
]

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [userName, setUserName] = useState('')
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        // Check if the user is logged in (based on localStorage)
        const user = localStorage.getItem('user')
        if (user) {
            const parsedUser = JSON.parse(user)
            setUserName(parsedUser.message.fullName)
            setIsLoggedIn(true)
        } else {
            setIsLoggedIn(false)
        }
    }, [])

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen)
    }

    const handleLogout = () => {
        localStorage.removeItem('user')
        setIsLoggedIn(false)
        navigate('/login')
    }

    return (
        <div className="relative w-full bg-[#004274] text-[#ace8fe]">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
                <NavLink to={"/"} className="inline-flex items-center space-x-2">
                    <span>
                        <svg
                            width="30"
                            height="30"
                            viewBox="0 0 50 56"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            {/* SVG code */}
                        </svg>
                    </span>
                    <span className="font-bold">Voter's Platform</span>
                </NavLink>
                <div className="hidden grow items-start lg:flex text-[#ace8fe]">
                    <ul className="ml-12 inline-flex space-x-8 text-[#ace8fe]">
                        {menuItems.map((item) => (
                            <li key={item.name} className="relative">
                                {item.dropdown ? (
                                    <>
                                        <button
                                            className="inline-flex items-center text-sm font-semibold hover:text-gray-900"
                                            onClick={toggleDropdown}
                                        >
                                            {item.name}
                                            <ChevronDown className="ml-2 h-4 w-4" />
                                        </button>
                                        {isDropdownOpen && (
                                            <ul className="absolute left-0 mt-2 w-40 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                                                {item.links.map((link) => (
                                                    <li key={link.name}>
                                                        <a
                                                            href={link.href}
                                                            className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
                                                        >
                                                            {link.name}
                                                        </a>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </>
                                ) : (
                                    <a
                                        href={item.href}
                                        className="inline-flex items-center text-sm font-semibold hover:text-gray-900"
                                    >
                                        {item.name}
                                    </a>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="hidden space-x-2 lg:block">
                    {isLoggedIn ? (
                        <>
                            <span className="mr-4">Hello, {userName}</span>
                            <button
                                onClick={handleLogout}
                                className="rounded-md bg-[#004274] px-3 py-2 text-sm font-semibold text-[#ace8fe] hover:bg-[#ace8fe] hover:text-[#004274]"
                            >
                                Log Out
                            </button>
                        </>
                    ) : (
                        <NavLink
                            to={"/login"}
                            className="rounded-md bg-[#004274] px-3 py-2 text-sm font-semibold text-[#ace8fe] hover:bg-[#ace8fe] hover:text-[#004274]"
                        >
                            Log In
                        </NavLink>
                    )}
                </div>

                <div className="lg:hidden">
                    <Menu onClick={toggleMenu} className="h-6 w-6 cursor-pointer" />
                </div>
                {isMenuOpen && (
                    <div className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden">
                        {/* Mobile Menu */}
                        <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                            <div className="px-5 pb-6 pt-5">
                                <div className="flex items-center justify-between">
                                    <div className="inline-flex items-center space-x-2">
                                        <span>
                                            {/* SVG logo */}
                                        </span>
                                        <span className="font-bold">Voter's Platform</span>
                                    </div>
                                    <div>
                                        <X onClick={toggleMenu} className="h-6 w-6 cursor-pointer" />
                                    </div>
                                </div>
                                <div className="mt-6">
                                    <nav className="grid gap-y-8">
                                        {menuItems.map((item) => (
                                            <a
                                                key={item.name}
                                                href={item.href}
                                                className="inline-flex items-center text-sm font-semibold text-gray-800 hover:text-gray-900"
                                            >
                                                {item.name}
                                                <ChevronRight className="ml-2 h-4 w-4" />
                                            </a>
                                        ))}
                                    </nav>
                                    <div className="mt-4">
                                        {isLoggedIn ? (
                                            <>
                                                <span className="block mb-4 text-center">Hello, {userName}</span>
                                                <button
                                                    onClick={handleLogout}
                                                    className="w-full rounded-md bg-[#004274] px-3 py-2 text-sm font-semibold text-[#ace8fe] hover:bg-[#ace8fe] hover:text-[#004274]"
                                                >
                                                    Log Out
                                                </button>
                                            </>
                                        ) : (
                                            <NavLink
                                                to={"/login"}
                                                className="block w-full text-center rounded-md bg-[#004274] px-3 py-2 text-sm font-semibold text-[#ace8fe] hover:bg-[#ace8fe] hover:text-[#004274]"
                                            >
                                                Log In
                                            </NavLink>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Navbar
