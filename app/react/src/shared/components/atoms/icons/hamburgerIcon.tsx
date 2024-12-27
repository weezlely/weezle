import React from "react";
import type { IconProps } from "./index.type";

export const HamburgerIcon = (props: IconProps) => {
  const fillColor = props.theme === "light" ? "black" : "white";

  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="hamburger_bk_24">
        <g id="Vector">
          <path
            d="M20.4792 13.505H3.49219C3.09436 13.505 2.71283 13.347 2.43153 13.0657C2.15022 12.7844 1.99219 12.4028 1.99219 12.005C1.99219 11.6072 2.15022 11.2256 2.43153 10.9443C2.71283 10.663 3.09436 10.505 3.49219 10.505H20.4792C20.877 10.505 21.2585 10.663 21.5398 10.9443C21.8212 11.2256 21.9792 11.6072 21.9792 12.005C21.9792 12.4028 21.8212 12.7844 21.5398 13.0657C21.2585 13.347 20.877 13.505 20.4792 13.505Z"
            fill={fillColor}
          />
          <path
            d="M20.4822 7H3.49519C3.2982 7 3.10315 6.9612 2.92116 6.88582C2.73917 6.81044 2.57382 6.69995 2.43453 6.56066C2.29524 6.42137 2.18475 6.25601 2.10937 6.07403C2.03399 5.89204 1.99519 5.69698 1.99519 5.5C1.99519 5.30302 2.03399 5.10796 2.10937 4.92597C2.18475 4.74399 2.29524 4.57863 2.43453 4.43934C2.57382 4.30005 2.73917 4.18956 2.92116 4.11418C3.10315 4.0388 3.2982 4 3.49519 4H20.4822C20.6792 4 20.8742 4.0388 21.0562 4.11418C21.2382 4.18956 21.4036 4.30005 21.5428 4.43934C21.6821 4.57863 21.7926 4.74399 21.868 4.92597C21.9434 5.10796 21.9822 5.30302 21.9822 5.5C21.9822 5.69698 21.9434 5.89204 21.868 6.07403C21.7926 6.25601 21.6821 6.42137 21.5428 6.56066C21.4036 6.69995 21.2382 6.81044 21.0562 6.88582C20.8742 6.9612 20.6792 7 20.4822 7Z"
            fill={fillColor}
          />
          <path
            d="M20.4792 20.019H3.49219C3.09436 20.019 2.71283 19.861 2.43153 19.5797C2.15022 19.2984 1.99219 18.9168 1.99219 18.519C1.99219 18.1212 2.15022 17.7396 2.43153 17.4583C2.71283 17.177 3.09436 17.019 3.49219 17.019H20.4792C20.877 17.019 21.2585 17.177 21.5398 17.4583C21.8212 17.7396 21.9792 18.1212 21.9792 18.519C21.9792 18.9168 21.8212 19.2984 21.5398 19.5797C21.2585 19.861 20.877 20.019 20.4792 20.019Z"
            fill={fillColor}
          />
        </g>
      </g>
    </svg>
  );
};
