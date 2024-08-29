import React from "react";

interface QualityPaintingServicesProps {
  title: string;
  backgroundImageSrc: string;
}

const QualityPaintingServices: React.FC<QualityPaintingServicesProps> = ({
  title,
  backgroundImageSrc,
}) => {
  return (
    <section className="flex overflow-hidden relative flex-col px-16 pt-48 pb-36 w-full min-h-[540px] max-md:px-5 max-md:pt-24 max-md:pb-28 max-md:max-w-full max-md:text-4xl max-md:leading-[57px]">
      <img
        loading="lazy"
        src={backgroundImageSrc}
        alt=""
        className="object-cover absolute inset-0 size-full"
      />
      <h1>{title}</h1>
    </section>
  );
};

export default QualityPaintingServices;
