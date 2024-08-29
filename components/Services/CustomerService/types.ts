export interface ServiceData {
  imageSrc: string;
  title: string;
  description: string;
  learnMoreSrc: string;
  readMore?: boolean;
}

export type ServiceCardProps = ServiceData;
