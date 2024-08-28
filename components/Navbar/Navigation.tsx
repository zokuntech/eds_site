import React from 'react';

const navigationItems = [
  { label: 'Home', isActive: true },
  { label: 'Projects', isActive: false },
  { label: 'Services', isActive: false },
  { label: 'About', isActive: false },
  { label: 'Contact Us', isActive: false },
];

const Navigation: React.FC = () => {
  return (
    <nav className="flex flex-auto gap-8 items-start my-auto font-medium leading-snug text-sky-500 rotate-[-0.003107424703882245rad] max-md:max-w-full">
      {navigationItems.map((item, index) => (
        <a
          key={index}
          href={`#${item.label.toLowerCase().replace(' ', '-')}`}
          className={item.isActive ? 'font-bold text-red-600' : ''}
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
};

export default Navigation;