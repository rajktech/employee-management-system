import { useState } from "react";
import Getemp from "./Getemp";
import FormComp from "./Form";

const UpdateComp = () => {
  const [empId, setEmpId] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [loading, setLoading] = useState(false);
  const [norecord, setNoRecord] = useState(false);

  const readHandler = () => {
    setLoading(true);
    fetch("https://609a5ad40f5a13001721aac8.mockapi.io/employee_db/" + empId)
      .then((res) => res.json())
      .then((res) => {
        if (res !== "Not found") {
          const { fname, lname, email, dob, gender } = res;
          setFname(fname);
          setLname(lname);
          setEmail(email);
          setDob(dob);
          setGender(gender);
          setNoRecord(false);
        } else {
          setFname("");
          setLname("");
          setEmail("");
          setDob("");
          setGender("");
          setNoRecord(true);
        }
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const updateHandler = () => {
    fetch("https://609a5ad40f5a13001721aac8.mockapi.io/employee_db/" + empId, {
      method: "PUT",
      body: JSON.stringify({
        id: empId,
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
          alert("updated successfully" + json.id);
        }
      });
  };

  return (
    <div>
      <Getemp
        setEmpId={setEmpId}
        title="Update Existing Employee"
        readHandler={readHandler}
      />
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
        clicktitle="Update"
        clickHandler={updateHandler}
        loading={loading}
        norecord={norecord}
      />
    </div>
  );
};

export default UpdateComp;
