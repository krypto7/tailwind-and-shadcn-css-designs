import Button from "@/components/Button";
import logoIcon from "../../public/assets/Logo.svg";
import Menu from "../../public/assets/icon-menu.svg";
import Img from "next/image";

function Header() {
  return (
    <header className="p-4  sticky top-0 z-10">
      <div className="container">
        <div className="flex justify-between md:border border-white/15 md:p-2.5 rounded-xl max-w-2xl lg:justify-around mx-auto items-center backdrop-blur">
          <div>
            <Img src={logoIcon} className="h-8 w-8" alt="Logo" />
          </div>
          <div className="rounded-3xl px-8 py-2 hidden md:block ">
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
            <Button>Join waitList</Button>
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
