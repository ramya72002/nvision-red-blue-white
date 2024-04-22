import Social from "@components/Social";
import config from "@config/config.json";
import menu from "@config/menu.json";
import social from "@config/social.json";
import { markdownify } from "@lib/utils/textConverter";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const { copyright, footer_content } = config.params;
  const { footer } = menu;
  return (
    <footer className="section bg-theme-light pb-0" style={{ color: 'white' }}>
      <div className="container" style={{ color: 'white' }}>
        {/* footer menu */}
        <div className="row" style={{ color: 'white' }}>
          {footer.map((col) => {
            return (
              <div style={{ color: 'white', padding: '30px' }} className="mb-12 sm:col-6 lg:col-3" key={col.name}  >
                <span style={{ color: 'white', fontWeight: 'bold', fontSize: '25px' }}>{markdownify(col.name, "h7")}</span>
                <ul className="mt-6" style={{ color: 'white' }}>
                  {col?.menu.map((item) => (
                    <li className="mb-1" key={item.text} style={{ color: 'white' }}>
                      <Link href={item.url} rel="" style={{ color: 'white' }}>
                        {item.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
          {/* social icons */}
          <div className="md-12 sm:col-6 lg:col-3" style={{ color: 'white' }}>
            <Link href="/" aria-label="Nvision">
              <Image
                src={config.site.logo}
                width={config.site.logo_width}
                height={config.site.logo_height}
                alt=""
              />
            </Link>
            {markdownify(footer_content, "p", "mt-3 mb-6")}
            <Social source={social} className="social-icons mb-8" />
          </div>
        </div>
        {/* copyright */}
        <div className="border-t border-border py-6" style={{ color: 'white' }}>
          {markdownify(copyright, "p", "text-sm text-center")}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
