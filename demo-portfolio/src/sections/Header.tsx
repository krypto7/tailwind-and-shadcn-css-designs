import logoIcon from "../../public/assets/Logo.svg";
import Menu from "../../public/assets/icon-menu.svg";
import Img from "next/image";

function Header() {
  return (
    <header className="p-4 border-b border-white/15">
      <div className="container mx-auto">
        <div className="flex justify-between lg:justify-around items-center">
          <div>
            <Img src={logoIcon} className="h-8 w-8" alt="Logo" />
          </div>
          <div className="border border-white/20 rounded-3xl px-8 py-2 hidden md:block ">
            <nav className="flex gap-8 items-center">
              <a
                href="#"
                className="text-white/70 hover:text-white transition-colors duration-100"
              >
                Features
              </a>

              <a
                href="#"
                className="text-white/70 hover:text-white transition-colors duration-100"
              >
                Developers
              </a>

              <a
                href="#"
                className="text-white/70 hover:text-white transition-colors duration-100"
              >
                Company
              </a>
              <a
                href="#"
                className="text-white/70 hover:text-white transition-colors duration-100"
              >
                Blog
              </a>
              <a
                href="#"
                className="text-white/70 hover:text-white transition-colors duration-100"
              >
                Changelog
              </a>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <button className="relative py-2 px-3 rounded-lg font-medium text-sm bg-gradient-to-b from-[#190d2e] to-[#4a208a] shadow-[0px_0px_0px_#8c45ff] text-white">
              <div className="absolute inset-0">
                <div className="rounded-lg border border-white/50 absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent)]"></div>
                <div className="rounded-lg border absolute inset-0 border-white/50 [mask-image:linear-gradient(to_top,black,transparent)]"></div>
                <div className="rounded-lg absolute inset-0 shadow-[0_0_10px_rgb(140,69,255,.7)_inset]"></div>
              </div>
              <span>Join waitlist</span>
            </button>
            <span className="md:hidden lg:hidden cursor-pointer">
              <Img src={Menu} className="h-8 w-8" alt="Logo" />
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
