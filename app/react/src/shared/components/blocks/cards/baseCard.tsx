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
    <div className={`card__base ${className || ""}`} onClick={onClick} style={style}>
      {imageUrl && <img src={imageUrl} alt={title} className="card__base-image" />}
      {title && <h3 className="card__base-title">{title}</h3>}
      {description &&
        description.map((desc, i) => (
          <p key={`card--${i}`} className="card__base-description">
            {desc}
          </p>
        ))}
      <div className="card__base-footer">{children}</div>
    </div>
  );
};
