import * as React from "react";

import type { Id } from "../../types";

export function useRadioController() {
  const [value, setValue] = React.useState<Id>("");

  const handleChange = (value: Id) => {
    setValue(value);
  };

  return {
    value,
    setValue,
    handleChange,
  };
}
