// InfoCard.tsx
import { BaseCard, BaseCardProps } from "./baseCard";

export const InfoCard = ({ title, description, imageUrl }: BaseCardProps) => {
  return <BaseCard title={title} description={description} imageUrl={imageUrl} className="info-card" />;
};
