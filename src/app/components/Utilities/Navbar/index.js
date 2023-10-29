import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <header className="flex py-3 px-2 gap-2 bg-blue-500 justify-center items-center">
        <Link href="/" className="text-white text-2xl font-normal">
          AnimVerse
        </Link>
      </header>
      <div className="flex justify-center sm:justify-center items-center">
        <input placeholder="Cari Anime Kesukaan" className="form-search" />
      </div>
    </>
  );
};

export default Navbar;
