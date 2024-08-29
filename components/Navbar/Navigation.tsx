import React from "react";

const navigationItems = [
  { label: "Home", isActive: true, url: "/" },
  { label: "Projects", isActive: false, url: "projects" },
  { label: "Services", isActive: false, url: "services" },
  { label: "About", isActive: false, url: "about" },
  { label: "Contact Us", isActive: false, url: "contact" },
];

const Navigation: React.FC = () => {
  return (
    <nav className="flex flex-auto gap-8 items-start my-auto font-medium leading-snug text-sky-500 rotate-[-0.003107424703882245rad] max-md:max-w-full">
      {navigationItems.map((item, index) => (
        <a
          key={index}
          href={`${item.url.toLowerCase().replace(" ", "-")}`}
          className={item.isActive ? "font-bold text-red-600" : ""}
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
};

export default Navigation;
