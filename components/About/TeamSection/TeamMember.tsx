import React from "react";

interface TeamMemberProps {
  name: string;
  role: string;
  imageSrc: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, role, imageSrc }) => {
  return (
    <article className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
      <div className="flex flex-col grow pb-3.5 max-md:mt-10">
        <div className="flex flex-col text-3xl font-bold leading-tight min-h-[489px] text-neutral-600">
          <img
            loading="lazy"
            src={imageSrc}
            alt={`${name}, ${role}`}
            className="object-contain max-w-full aspect-[0.98] w-[367px]"
          />
          <div className="flex flex-col mt-6 w-full max-w-[367px]">
            <h2 className="self-stretch pb-4 w-full min-h-[66px]">{name}</h2>
          </div>
        </div>
        <p className="z-10 self-center mt-0 text-lg font-medium leading-snug text-sky-500">
          {role}
        </p>
      </div>
    </article>
  );
};

export default TeamMember;
