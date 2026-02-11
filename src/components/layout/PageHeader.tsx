import "../../styles/global.css";
import { useState } from "react";

export interface PageHeaderProps {
  title: string;
  navItems?: { label: string; link: string; type?: "link" | "button" }[];
}

export default function PageHeader(props: PageHeaderProps) {
  const [isHamburgerOpen, setHamburgerOpen] = useState(false);

  return (
    <header className="site-header">
      <h1 className="site-header__title">{props.title}</h1>
      <div className="hamburger" onClick={() => setHamburgerOpen(!isHamburgerOpen)}>
        <div className={`hamburger__line ${isHamburgerOpen ? "--left" : ""}`}></div>
        <div className={`hamburger__line ${isHamburgerOpen ? "--middle" : ""}`}></div>
        <div className={`hamburger__line ${isHamburgerOpen ? "--right" : ""}`}></div>
      </div>
      {props.navItems && (
        <nav className={`site-nav ${isHamburgerOpen ? "--open" : ""}`}>
          <ul className="nav-list">
            {props.navItems.map(
              (item, index) => (
                (item.type = item.type || "link"),
                (
                  <li key={index} className="nav-item">
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
