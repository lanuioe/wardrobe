import Image from "next/image";
import Link from "next/link";
import { Svg } from "@/components/atoms";
interface MenuType {
  children: string;
  href: string;
}
const sitemap = {
  main: {
    Home: "/",
    Dressroom: "/",
    Style: "/",
    Profile: "/",
  },
  sub: {
    Login: "/",
    Bookmark: "/",
    Search: "/",
  },
};

function MobileSiteMapItem({ children }: MenuType) {
  return (
    <li>
      <Link
        className="flex justify-between hover:text-h-3-semibold hover:underline hover:decoration-white"
        href=""
      >
        {children}
        <Svg id="arrow-right" color="white" size={28} />
      </Link>
    </li>
  );
}

export default function MobileHamburger() {
  return (
    <div className="flex h-svh flex-col gap-[106px] bg-gray-900 p-[20px] font-sans">
      <div className="flex justify-between">
        <Link href={sitemap["main"]["Home"]}>
          <Svg logo mobile color="white" size={127} />
        </Link>
        <button>
          <Svg id="cancel" color="white" size={28} />
        </button>
      </div>
      <nav>
        <ul className="flex flex-col gap-[64px] text-h-3-regular text-gray-200">
          {Object.entries(sitemap["main"]).map(([title, link]) => (
            <MobileSiteMapItem key={title} href={link}>
              {title}
            </MobileSiteMapItem>
          ))}
        </ul>
      </nav>
      <ul className="mt-auto flex justify-between text-b-0-semibold text-gray-300">
        {Object.entries(sitemap["sub"]).map(([title, link]) => (
          <li
            className="hover:text-b-0-bold hover:text-white hover:underline hover:decoration-white"
            key={title}
          >
            <Link href={link} />
            {title}
          </li>
        ))}
      </ul>
    </div>
  );
}
