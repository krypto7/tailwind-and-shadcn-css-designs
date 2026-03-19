import acmeLogo from "../../public/assets/logo-acme.png";
import apexLogo from "../../public/assets/logo-apex.png";
import calestialLogo from "../../public/assets/logo-celestial.png";
import echoLogo from "../../public/assets/logo-echo.png";
import pulseLogo from "../../public/assets/logo-pulse.png";
import quantumLogo from "../../public/assets/logo-quantum.png";

function LogoTicker() {
  return (
    <section>
      <div className="container">
        <div>
          <h2>Trusted top inovator teams</h2>
          <div>
            {[
              acmeLogo,
              apexLogo,
              calestialLogo,
              echoLogo,
              pulseLogo,
              quantumLogo,
            ].map((logo) => (
              <img src={logo.src} key={logo.src} className="" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default LogoTicker;
