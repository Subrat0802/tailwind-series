import Image from "next/image";
import Link from "next/link";

const links = [
  {
    href: "/founders",
    title: "Founders",
  },
  {
    href: "/guide",
    title: "Guide",
  },
  {
    href: "/pricing",
    title: "Pricing",
  },
  {
    href: "/login",
    title: "Login",
  },
];

const Navbar = () => {
  return (
    <div className="flex items-center justify-between px-4">
      <Link href={"/"}>
        <Image
          draggable={false}
          loading="lazy"
          src="./logo.svg"
          height={82}
          width={82}
          alt="logo"
        />
      </Link>

      <div className="flex items-center justify-center gap-8">
        {links.map((el, i) => (
          <Link
            href={el.href}
            key={i}
            className="text-neutral-800 text-[17px]
           hover:text-neutral-500 font-medium transition-all duration-200"
          >
            {el.title}
          </Link>
        ))}

        <button className="bg-[#2579F4] text-ls shadow-lg cursor-pointer hover:bg-blue-500 transition-all 
            duration-200 text-white px-5 py-2.75 rounded-xl font-bold text-shadow-lg tracking-wide">
          Get started
        </button>
      </div>
    </div>
  );
};

export default Navbar;
