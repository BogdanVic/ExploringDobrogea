"use client"

import Link from 'next/link'
import React from 'react'
import styles from './navbar.module.css'
import DarkModeToggle from '../DarkModeToggle/DarkModeToggle'
import { signOut} from "next-auth/react";
import Image from 'next/image'

const links = [
    {
        id: 1,
        title: "Home",
        url: "/"
    },
    {
        id: 2,
        title: "Istorie",
        url: "/articole/istorie"
    },
    {
        id: 3,
        title: "Cultură",
        url: "/articole/cultura"
    },
    {
        id: 3,
        title: "Turism",
        url: "/articole/turism"
    },
    {
        id: 4,
        title: "Despre noi",
        url: "/desprenoi"
    },
    {
        id: 5,
        title: "Contact",
        url: "/contact"
    },
    {
        id: 6,
        title: "Dashboard",
        url: "/dashboard"
    }
]

const Navbar = () => {
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>
        <Image 
        src="/logo.png"
        alt=""
        height={200}
        width={300}
        />
        </Link>
      <div className={styles.links}>
      <DarkModeToggle />
        {links.map(link=>(
            <Link key={link.id} href={link.url} className={styles.link}>
                {link.title}
            </Link>
        ))}
        <button onClick={signOut} className={styles.logout}>
            Logout
        </button>
      </div>
    </div>
  )
}

export default Navbar
