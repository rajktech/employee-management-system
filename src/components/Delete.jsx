import { useState, useEffect } from "react";
import Getemp from "./Getemp";
import FormComp from "./Form";

const DeleteComp = () => {
  const [empId, setEmpId] = useState("");
  const [loading, setLoading] = useState(false);
  const [norecord, setNoRecord] = useState(false);

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

  const readHandler = () => {
    if (empId) {
      setLoading(true);
      fetch("https://609a5ad40f5a13001721aac8.mockapi.io/employee_db/" + empId)
        .then((res) => res.json())
        .then((res) => {
          if (res !== "Not found") {
            setBaseObj(res);
            setNoRecord(false);
          } else {
            const temp = { ...baseObj };
            Object.keys(temp).forEach((key) => (temp[key] = ""));
            setBaseObj(temp);
            setNoRecord(true);
          }
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      alert("Please enter employee id");
    }
  };

  const deleteHandler = () => {
    if (empId == 1) {
      alert("Base user cant delete");
      return false;
    }
    fetch("https://609a5ad40f5a13001721aac8.mockapi.io/employee_db/" + empId, {
      method: "DELETE",
    })
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        if (json) {
          alert("User deleted successfully");
          const temp = { ...baseObj };
          Object.keys(temp).forEach((key) => (temp[key] = ""));
          setBaseObj(temp);
        }
      });
  };

  return (
    <div>
      <Getemp
        setEmpId={setEmpId}
        title="Delete Existing Employee"
        readHandler={readHandler}
      />
      <FormComp
        clicktitle="Delete"
        clickHandler={deleteHandler}
        loading={loading}
        norecord={norecord}
        baseArr={baseArr}
        baseObj={baseObj}
        setBaseObj={setBaseObj}
      />
    </div>
  );
};

export default DeleteComp;
