import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import SwitchInput from "./component/switchInput";
import { Formik } from "formik";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Formik initialValues={{ name: "" }} onSubmit={(val) => console.log(val)}>
        {(formik) => {
          console.log(formik.values);
          return <SwitchInput formik={formik} name="name" />;
        }}
      </Formik>
    </div>
  );
}

export default App;
