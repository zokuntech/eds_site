import React from "react";

const Navigation: React.FC = () => {
  const navItems = [
    { label: "Home", isActive: true, route: "/" },
    { label: "About Us", isActive: false, route: "/about" },
    { label: "Services", isActive: false, route: "/services" },
    { label: "Blog", isActive: false, route: "/blog" },
  ];

  return (
    <nav className="flex gap-6 items-start my-auto text-base font-medium leading-snug text-sky-500 rotate-[-0.003107424703882245rad]">
      {navItems.map((item, index) => (
        <a
          key={index}
          href={item.route}
          className={item.isActive ? "font-bold text-red-600" : ""}
          aria-current={item.isActive ? "page" : undefined}
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
};

export default Navigation;
