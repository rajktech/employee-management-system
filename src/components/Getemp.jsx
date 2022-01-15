const Getemp = (props) => {
  return (
    <>
      <h5>{props.title}</h5>
      <hr />
      {props.setEmpId && (
        <>
          <div class="form-group row">
            <label for="staticEmail" class="col-sm-3 col-form-label">
              Employee ID
            </label>
            <div class="col-sm-9">
              <input
                type="text"
                class="form-control"
                onChange={(e) => props.setEmpId(e.target.value)}
              />
            </div>
          </div>
          <div className="text-right">
            <button
              type="button"
              class="btn btn-primary"
              onClick={props.readHandler}
            >
              Read
            </button>
          </div>
          <hr style={{ border: "#000 solid 1px" }} />
        </>
      )}
    </>
  );
};

export default Getemp;
