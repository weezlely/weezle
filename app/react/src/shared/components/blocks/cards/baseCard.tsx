import { HTMLAttributes } from "react";

export interface BaseCardProps extends HTMLAttributes<HTMLElement> {
  title?: string;
  description?: string[];
  imageUrl?: string;
  children?: React.ReactNode;
  onClick?: () => void;
}

export const BaseCard = ({ title, description, imageUrl, children, onClick, className, style }: BaseCardProps) => {
  return (
    <div className={`base-card ${className}`} onClick={onClick} style={style}>
      {imageUrl && <img src={imageUrl} alt={title} className="card-image" />}
      {title && <h3 className="card-title">{title}</h3>}
      {description && description.map((desc) => <p className="card-description">{desc}</p>)}
      {children}
    </div>
  );
};
