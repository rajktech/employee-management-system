import { useEffect, useState } from "react";
import Getemp from "./Getemp";
import FormComp from "./Form";
import validator from 'validator';

const CreateComp = () => {
  const [baseArr, setBaseArr] = useState([]);
  const [baseObj, setBaseObj] = useState({});

  useEffect(() => {
    fetch("https://609a5ad40f5a13001721aac8.mockapi.io/employee_db/1")
      .then((res) => res.json())
      .then((res) => {
        const keysArr = Object.keys(res);
        const keysFilteredArr = keysArr.filter((item) => item !== "id");

        let newobj = {};
        for (let i = 0; i < keysFilteredArr.length; i++) {
          newobj[keysFilteredArr[i]] = "";
        }
        setBaseArr(keysFilteredArr);
        setBaseObj(newobj);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        //setLoading(false);
      });
  }, []);

  const clickHandler = () => {
    // if (!validator.isDate(dob)) {
    //   alert("Please enter correct dob!");
    // } else if (!validator.isEmail(email)) {
    //   alert("Please enter correct email!");
    // } else {
      console.log(baseObj, '==');
      fetch("https://609a5ad40f5a13001721aac8.mockapi.io/employee_db/", {
        method: "POST",
        body: JSON.stringify({...baseObj}),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => {
          return response.json();
        })
        .then((json) => {
          if (json) {
            const temp = {...baseObj};
            Object.keys(temp).forEach((key) => temp[key] = '');
            setBaseObj(temp);
            alert("User added successfully and ID is " + json.id);
          }
        });
    //}
  };

  return (
    <div>
      <Getemp title="Create New Employee" />
      <FormComp
        clicktitle="Create"
        clickHandler={clickHandler}

        baseArr={baseArr}
        baseObj={baseObj}
        setBaseObj={setBaseObj}
      />
    </div>
  );
};

export default CreateComp;
