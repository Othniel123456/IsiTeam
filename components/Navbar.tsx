import Image from 'next/image';
import Link from 'next/link';
import { SignedIn, UserButton } from '@clerk/nextjs';

import MobileNav from './MobileNav';

const Navbar = () => {
  return (
    <nav className="flex-between fixed z-50 w-full bg-dark-1 px-6 py-4 lg:px-10">
      <Link href="/" className="flex items-center gap-1">
        <Image
          src="/icons/blanc.svg"
          width={32}
          height={32}
          alt="isteam logo"
          className="max-sm:size-10"
        />
        <p className="text-[26px] font-extrabold text-white max-sm:hidden">
          IsTeams 
        </p>
      </Link>
      <p className='text-white'>ISIPA TEAMS by Tavares</p>
      <div className="flex-between gap-5">
        <SignedIn>
          <p className='text-[16px] text-white  '>Profil</p>
          <UserButton afterSignOutUrl="/sign-in" />
        </SignedIn>

        <MobileNav />
      </div>
    </nav>
  );
};

export default Navbar;
