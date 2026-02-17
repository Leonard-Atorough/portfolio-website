import "../../styles/global.css";
import { useState } from "react";

export interface PageHeaderProps {
  title: string;
  navItems?: { label: string; link: string; type?: "link" | "button" }[];
}

export default function PageHeader(props: PageHeaderProps) {
  const [isHamburgerOpen, setHamburgerOpen] = useState(false);

  return (
    <header className="site-header p-md gap-lg-tablet gap-sm-mobile">
      <h1 className="site-header__title mb-md ">{props.title}</h1>
      <div className="hamburger gap-xs-mobile mb-md" onClick={() => setHamburgerOpen(!isHamburgerOpen)}>
        <div className={`hamburger__line ${isHamburgerOpen ? "--left" : ""}`}></div>
        <div className={`hamburger__line ${isHamburgerOpen ? "--middle" : ""}`}></div>
        <div className={`hamburger__line ${isHamburgerOpen ? "--right" : ""}`}></div>
      </div>
      {props.navItems && (
        <nav className={`site-nav ${isHamburgerOpen ? "--open" : ""}`}>
          <ul className="nav-list gap-lg gap-lg-mobile">
            {props.navItems.map(
              (item, index) => (
                (item.type = item.type || "link"),
                (
                  <li key={index} className="nav-item px-sm px-md-mobile py-sm-mobile">
                    {item.type === "button" ? (
                      <button
                        className="btn btn--secondary"
                        onClick={() => (window.location.href = item.link)}
                      >
                        {item.label}
                      </button>
                    ) : (
                      <a className="nav-item__link" href={item.link}>
                        {item.label}
                      </a>
                    )}
                  </li>
                )
              ),
            )}
          </ul>
        </nav>
      )}
    </header>
  );
}
