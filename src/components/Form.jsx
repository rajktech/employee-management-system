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
            <div className="alert alert-danger" role="alert">
              No Record Found
            </div>
          )}
          <>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">
                First Name
              </label>
              <div className="col-sm-9">
                <input
                  type="text"
                  className="form-control"
                  value={fname}
                  onChange={(e) => setFname(e.target.value)}
                />
              </div>
            </div>

            <div className="form-group row">
              <label className="col-sm-3 col-form-label">
                Last Name
              </label>
              <div className="col-sm-9">
                <input
                  type="text"
                  className="form-control"
                  value={lname}
                  onChange={(e) => setLname(e.target.value)}
                />
              </div>
            </div>

            <div className="form-group row">
              <label className="col-sm-3 col-form-label">
                Email
              </label>
              <div className="col-sm-9">
                <input
                  type="text"
                  className="form-control"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div className="form-group row">
              <label className="col-sm-3 col-form-label">
                Date of Birth
              </label>
              <div className="col-sm-9">
                <input
                  type="date"
                  className="form-control"
                  value={dob}
                  onChange={(e) => setDob(e.target.value)}
                />
              </div>
            </div>

            <div className="form-group row">
              <label className="col-sm-3 col-form-label">
                Gender
              </label>
              <div className="col-sm-9">
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
                  className="btn btn-primary"
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
