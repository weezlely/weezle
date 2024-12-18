import React from "react";
import { Radio as TaeoUiRadio } from "@taeopia/ui-with-css";

export const ExampleRadio = () => {
  const [value, setValue] = React.useState<{ [key in string]: string }>({
    colors: "",
    foods: "",
  });

  const handleChange = (e: any) => {
    const { value, name } = e;

    if (name === "colors") {
      setValue((prev) => ({ ...prev, colors: value }));
    } else if (name === "foods") {
      setValue((prev) => ({ ...prev, foods: value }));
    }
  };

  return (
    <>
      <TaeoUiRadio onChange={handleChange}>
        <TaeoUiRadio.Group name="colors">
          <TaeoUiRadio.Option label="red" value="red">
            Red
          </TaeoUiRadio.Option>
          <TaeoUiRadio.Option label="blue" value="blue">
            Blue
          </TaeoUiRadio.Option>
        </TaeoUiRadio.Group>
      </TaeoUiRadio>

      <TaeoUiRadio onChange={handleChange}>
        <TaeoUiRadio.Group name="foods">
          <TaeoUiRadio.Option label="pizza" value="pizza">
            pizza
          </TaeoUiRadio.Option>
          <TaeoUiRadio.Option label="burger" value="burger">
            burger
          </TaeoUiRadio.Option>
        </TaeoUiRadio.Group>
      </TaeoUiRadio>
    </>
  );
};
