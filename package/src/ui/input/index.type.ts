import type { HTMLAttributes, PropsWithChildren } from "react";

import { DefaultProps } from "../../types";

type Props = { type?: HTMLInputElement["type"] } & DefaultProps;

export type InputProps = PropsWithChildren<Props> & HTMLAttributes<HTMLInputElement>;
