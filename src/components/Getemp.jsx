import LoaderImg from "../assets/Iphone-spinner-2.gif";

const Getemp = (props) => {
  return (
    <>
      <h5>{props.title}</h5>
      <hr />
      {props.setEmpId && (
        <>
          <div className="form-group row">
            <label className="col-sm-3 col-form-label">
              Employee ID
            </label>
            <div className="col-sm-9">
              <input
                type="text"
                className="form-control"
                onChange={(e) => props.setEmpId(e.target.value)}
              />
            </div>
          </div>
          <div className="text-right">
            {props.loading ? <img src={LoaderImg} width="60" /> : 
            <button
              type="button"
              className="btn btn-primary"
              onClick={props.readHandler}
            >
              Read
            </button>}
          </div>
          <hr style={{ border: "#000 solid 1px" }} />
        </>
      )}
    </>
  );
};

export default Getemp;
