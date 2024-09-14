import * as React from "react";

import type { Id } from "../../types";

export function useRadioController() {
  const [value, setValue] = React.useState<Id>("");

  return {
    value,
    setValue,
    handleChange: (value: Id) => setValue(value),
  };
}
