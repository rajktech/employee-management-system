const FormComp = (props) => {
  const {
    clicktitle,
    norecord,
    baseArr,
    baseObj,
    setBaseObj,
    clickHandler,
  } = props;

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const changeHandler = (key, event) => {
    setBaseObj({ ...baseObj, [key]: event.target.value });
  };
  return (
    <>
      {norecord && (
        <div className="alert alert-danger" role="alert">
          No Record Found
        </div>
      )}
      <>
        {baseArr.map((item, index) => (
          <div className="form-group row" key={index}>
            <label className="col-sm-3 col-form-label">
              {capitalizeFirstLetter(item)}
            </label>
            <div className="col-sm-9">
              <input
                type="text"
                className="form-control"
                value={baseObj[item] || ""}
                onChange={(e) => changeHandler(item, e)}
              />
            </div>
          </div>
        ))}

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
  );
};

export default FormComp;
