import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "./dojo-logo.png";

const Navbar = () => {
  return (
    <nav>
      <Image
        src={Logo}
        alt='helpdesk'
        width={70}
        placeholder='blur'
        quality={100}
      />
      <h1>Next.js</h1>
      <Link href='/'>Dashboard</Link>
      <Link href='/tickets'>Tickets</Link>
    </nav>
  );
};

export default Navbar;
