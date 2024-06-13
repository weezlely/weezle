import React from "react";
import { Radio } from "taeo-ui";

const TestRadioGroup = () => {
  const [value, setValue] = React.useState<{ [key in string]: string }>({
    colors: "",
    foods: "",
  });

  const handleChange = (e) => {
    const { value, name } = e;

    if (name === "colors") {
      setValue((prev) => ({ ...prev, colors: value }));
    } else if (name === "foods") {
      setValue((prev) => ({ ...prev, foods: value }));
    }
  };

  return (
    <>
      <Radio onChange={handleChange}>
        <Radio.Group name="colors">
          <Radio.Option label="red" value="red">
            Red
          </Radio.Option>
          <Radio.Option label="blue" value="blue">
            Blue
          </Radio.Option>
        </Radio.Group>
      </Radio>

      <Radio onChange={handleChange}>
        <Radio.Group name="foods">
          <Radio.Option label="pizza" value="pizza">
            pizza
          </Radio.Option>
          <Radio.Option label="burger" value="burger">
            burger
          </Radio.Option>
        </Radio.Group>
      </Radio>
    </>
  );
};

export default TestRadioGroup;
