import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="px-4 py-8  flex items-center flex-col w-full gap-4 ">
      <div
        className="border rounded-full border-gray-300/70 bg-gray-300/20  cursor-pointer transition-all duration-200
         hover:bg-gray-300/20 text-black text-[15px] font-medium py-1 px-4 mt-20 hover:border-b hover:border-black/20"
      >
        What are early stage tax requiremants?
      </div>

      <p className="text-7xl text-center mt-10 font-semibold">
        Magically simplify
        <br />
        accounting and taxes
      </p>

      <p className="text-2xl  text-gray-600/80 mt-3 text-center">
        Automated bookkeeping. Effortless tax filing. Financial clarity. <br />{" "}
        Set up in 10 mins. Back to building by 2:33am.
      </p>
      <div className="flex gap-7 mt-3">
        <button className="bg-[#2579F4] text-ls shadow-lg cursor-pointer hover:bg-blue-500 transition-all 
            duration-200 text-white px-5 py-2.75 rounded-xl font-bold text-shadow-lg tracking-wide">
          Get started
        </button>
        <button className="font-medium flex justify-center gap-1 items-center">
            Pricing <span className="pt-0.5 text-gray-500">→</span>
        </button>
      </div>

      <p className="text-center text-sm text-gray-500/60 mt-4">For US-based startups.</p>

      {/* <div className="border w-full relative mt-14">
        
      </div> */}

      <div className="mt-20">
        <Link href={"/"}>
        <Image
          draggable={false}
          loading="lazy"
          src="/herov6.png"
          height={1200}
          width={1200}
          alt="logo"
          className="rounded-2xl max-w-7xl object-cover object-top-left border-neutral-200 shadow-md mask-b-from-0 to-100%" //mask-[linear-gradient(to_bottom,white,transparent)]
        />
      </Link>
      </div>
    </div>
  );
};

export default Hero;
