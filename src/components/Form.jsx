//import {useState} from 'react';
import LoaderImg from "../assets/Iphone-spinner-2.gif";

const FormComp = (props) => {
  const {
    fname,
    lname,
    email,
    dob,
    gender,
    setFname,
    setLname,
    setEmail,
    setDob,
    setGender,
    clicktitle,
    clickHandler,
    loading,
    norecord
  } = props;
  return (
    <>
      {loading ? (
        <img src={LoaderImg} width="60" />
      ) : (
        <>
          {norecord && (
            <div class="alert alert-danger" role="alert">
              No Record Found
            </div>
          )}
          <>
            <div class="form-group row">
              <label for="staticEmail" class="col-sm-3 col-form-label">
                First Name
              </label>
              <div class="col-sm-9">
                <input
                  type="text"
                  class="form-control"
                  defaultValue={fname}
                  onChange={(e) => setFname(e.target.value)}
                />
              </div>
            </div>

            <div class="form-group row">
              <label for="staticEmail" class="col-sm-3 col-form-label">
                Last Name
              </label>
              <div class="col-sm-9">
                <input
                  type="text"
                  class="form-control"
                  defaultValue={lname}
                  onChange={(e) => setLname(e.target.value)}
                />
              </div>
            </div>

            <div class="form-group row">
              <label for="staticEmail" class="col-sm-3 col-form-label">
                Email
              </label>
              <div class="col-sm-9">
                <input
                  type="text"
                  class="form-control"
                  defaultValue={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div class="form-group row">
              <label for="staticEmail" class="col-sm-3 col-form-label">
                Date of Birth
              </label>
              <div class="col-sm-9">
                <input
                  type="date"
                  class="form-control"
                  defaultValue={dob}
                  onChange={(e) => setDob(e.target.value)}
                />
              </div>
            </div>

            <div class="form-group row">
              <label for="staticEmail" class="col-sm-3 col-form-label">
                Gender
              </label>
              <div class="col-sm-9">
                Male
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  checked={gender === "male" && true}
                  className=" ml-1 mr-4"
                  onChange={(e) => setGender(e.target.value)}
                />
                Female
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  checked={gender === "female" && true}
                  className=" ml-1"
                  onChange={(e) => setGender(e.target.value)}
                />
              </div>
            </div>

            {clicktitle && (
              <div className="text-right">
                <button
                  type="button"
                  class="btn btn-primary"
                  onClick={clickHandler}
                >
                  {clicktitle}
                </button>
              </div>
            )}
          </>
        </>
      )}
    </>
  );
};

export default FormComp;
