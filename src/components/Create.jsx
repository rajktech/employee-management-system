import { useState } from "react";
import Getemp from "./Getemp";
import FormComp from "./Form";

const CreateComp = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");

  const clickHandler = () => {
    fetch("https://609a5ad40f5a13001721aac8.mockapi.io/employee_db/", {
      method: "POST",
      body: JSON.stringify({
        fname,
        lname,
        email,
        dob,
        gender,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        if (json) {
          setFname("");
          setLname("");
          setEmail("");
          setDob("");
          setGender("");
          alert("User added successfully and ID is " + json.id);
        }
      });
  };

  return (
    <div>
      <Getemp title="Create New Employee" />
      <FormComp
        fname={fname}
        lname={lname}
        email={email}
        dob={dob}
        gender={gender}
        setFname={setFname}
        setLname={setLname}
        setEmail={setEmail}
        setDob={setDob}
        setGender={setGender}
        clicktitle="Create"
        clickHandler={clickHandler}
      />
    </div>
  );
};

export default CreateComp;
