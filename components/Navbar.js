import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => setIsOpen(!isOpen);
  return (
    <>
      {/* Head Section */}
      <Head>
        <title>🍴 Hunger Apps</title>
        <meta
          name="description"
          content="Generated by create next app - Muhamad Agil Fachrian"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navbar Section */}
      <nav className="navbar">
        <div className="title">
          Hunger <span>Apps</span>
        </div>
        <div className={`navbar-links ${isOpen && 'open'}`}>
          <ul>
            <li>
              <Link href="#home">Home</Link>
            </li>
            <li>
              <Link href="#favorite">Favorite</Link>
            </li>
            <li>
              <Link href="#about">About Us</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-toggle" onClick={handleClick}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </nav>
    </>
  );
}