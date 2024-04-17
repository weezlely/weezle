import type { ButtonHTMLAttributes } from "react";

import { ButtonProps } from "types/button.type";

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement>, ButtonProps {}
