import React from "react";
import TeamMember from "./TeamMember";

interface TeamMemberData {
  name: string;
  role: string;
  imageSrc: string;
}

const teamMembers: TeamMemberData[] = [
  {
    name: "Edrel Salazar",
    role: "CEO and Founder",
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/676580bf4ea0a30edff2daf061bad7be749e8e939375af078aefd200cef6b374?placeholderIfAbsent=true&apiKey=e4387585966a4fd287da9e7858e1871a",
  },
  {
    name: "Hector Silva-Robles",
    role: "Chief Technology Officer",
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/463037b18dfe39b5125e8e52c59b5ad791f78fbc30716ee1be8d09dc6f1cd012?placeholderIfAbsent=true&apiKey=e4387585966a4fd287da9e7858e1871a",
  },
  {
    name: "Bob Johnson",
    role: "Lead Foreman",
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/6a3559bf5eb58c420c891fccd5ad0c004b657ab57c6139d377d56a8c6aa9b734?placeholderIfAbsent=true&apiKey=e4387585966a4fd287da9e7858e1871a",
  },
];

const TeamSection: React.FC = () => {
  return (
    <section className="flex overflow-hidden flex-col items-center px-20 pt-28 pb-56 w-full bg-white max-md:px-5 max-md:py-24 max-md:max-w-full">
      <div className="flex flex-col mb-0 w-full max-w-[1181px] max-md:mb-2.5 max-md:max-w-full">
        <header className="flex flex-col items-center self-center max-w-full font-semibold w-[916px]">
          <div className="flex gap-3.5 items-center text-sm tracking-widest leading-none text-sky-500 uppercase rounded-3xl">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/0f1a81de70e85bf27b70eabcb8c58dac41bab28668dd415d1215ed5338f0df65?placeholderIfAbsent=true&apiKey=e4387585966a4fd287da9e7858e1871a"
              alt=""
              className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
            />
            <span className="self-stretch my-auto">Meet Our Team</span>
          </div>
          <h1 className="mt-5 text-6xl text-center leading-[83px] text-neutral-600 max-md:max-w-full max-md:text-4xl max-md:leading-[57px]">
            Get to Know Our Team of Home Building Experts
          </h1>
        </header>
        <div className="mt-16 max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            {teamMembers.map((member, index) => (
              <TeamMember key={index} {...member} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
