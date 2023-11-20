import Link from "next/link";

import { RiYoutubeLine, RiInstagramLine, RiFacebookLine, RiDribbbleLine, RiBehanceLine, RiPinterestLine } from 'react-icons/ri'

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      <Link href={''} className="hover:text-accent transition-all duration-all">
        <RiYoutubeLine />
      </Link>
      <Link href={''} className="hover:text-accent transition-all duration-all">
        <RiInstagramLine />
      </Link>
      <Link href={''} className="hover:text-accent transition-all duration-all">
        <RiFacebookLine />
      </Link>
      <Link href={''} className="hover:text-accent transition-all duration-all">
        <RiDribbbleLine />
      </Link>
      <Link href={''} className="hover:text-accent transition-all duration-all">
        <RiBehanceLine />
      </Link>
      <Link href={''} className="hover:text-accent transition-all duration-all">
        <RiPinterestLine />
      </Link>
    </div>
  )
};

export default Socials;
