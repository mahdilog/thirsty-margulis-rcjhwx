import React from "react";

const SwitchInput = ({ formik, name }: any) => {
  const handleChange = (value) => {
    formik.setFieldValue(`${name}`, {
      key: formik.values[name].key,
      value: value.target.value,
    });
  };

  const setOption = (value) => {
    formik.setFieldValue(`${name}`, {
      key: value,
      value: formik.values[name].value,
    });
  };
  return (
    <>
      <input
        name={name}
        onChange={handleChange}
        value={formik.values[name].value}
      />
      <div onClick={() => setOption("PERCENT")}>درصد</div>
      <div onClick={() => setOption("AMOUNT")}>تومان</div>
    </>
  );
};

export default SwitchInput;
