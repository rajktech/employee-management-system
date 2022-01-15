import { useState } from "react";
import Getemp from "./Getemp";
import FormComp from "./Form";

const ReadComp = () => {
  const [empId, setEmpId] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [loading, setLoading] = useState(false);
  const [norecord, setNoRecord] = useState(false);

  const readHandler = async () => {
    setLoading(true);
    await fetch("https://609a5ad40f5a13001721aac8.mockapi.io/employee_db/")
      .then((res) => res.json())
      .then((res) => {
        let filteredArray = res.filter((item) => item.id == empId);
        if (filteredArray.length) {
          const { fname, lname, email, dob, gender } = filteredArray[0];
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

  return (
    <div>
      <Getemp
        setEmpId={setEmpId}
        title="Read Existing Employee"
        readHandler={readHandler}
      />

      <FormComp
        fname={fname}
        lname={lname}
        email={email}
        dob={dob}
        gender={gender}
        loading={loading}
        norecord={norecord}
      />
    </div>
  );
};

export default ReadComp;
