import React from "react";

interface PartnerLogo {
  src: string;
  alt: string;
  className: string;
}

const partnerLogos: PartnerLogo[] = [
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/0367ec647594e87acadcaba8aa161a587d5d0c106a6e4c935b8bffd2126ae418?placeholderIfAbsent=true&apiKey=e4387585966a4fd287da9e7858e1871a",
    alt: "Partner logo 1",
    className: "object-contain shrink-0 aspect-[1.98] w-[123px]",
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/6b86d1a66d93c8b3288fc22921a55100d77a926929218ee5eff23f8803e6f7c4?placeholderIfAbsent=true&apiKey=e4387585966a4fd287da9e7858e1871a",
    alt: "Partner logo 2",
    className: "object-contain shrink-0 aspect-[2.75] w-[171px]",
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/fc4669100afed850c3fb1893e07c47fe42ef7ab5509163319d88a6fc5353211c?placeholderIfAbsent=true&apiKey=e4387585966a4fd287da9e7858e1871a",
    alt: "Partner logo 3",
    className: "object-contain shrink-0 aspect-[1.23] w-[76px]",
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/97e2641b20f1501421683ef7fd43dc70c1cd1246b1d67b0bc72890503ffc3b3a?placeholderIfAbsent=true&apiKey=e4387585966a4fd287da9e7858e1871a",
    alt: "Partner logo 4",
    className: "object-contain shrink-0 aspect-[2.37] w-[147px]",
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/3af3f8cd101b6b72b115d624f8cb3ae870686eb51f954c827b291dbc28ed60ca?placeholderIfAbsent=true&apiKey=e4387585966a4fd287da9e7858e1871a",
    alt: "Partner logo 5",
    className: "object-contain shrink-0 aspect-[1.97] w-[122px]",
  },
];

const PartnerLogos: React.FC = () => {
  return (
    <div className="flex flex-wrap gap-10 justify-between items-end mt-20 max-md:mt-10 max-md:max-w-full">
      {partnerLogos.map((logo, index) => (
        <img
          key={index}
          loading="lazy"
          src={logo.src}
          alt={logo.alt}
          className={logo.className}
        />
      ))}
    </div>
  );
};

export default PartnerLogos;
