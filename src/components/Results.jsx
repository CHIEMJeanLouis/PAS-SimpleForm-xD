const Results = (props) => {
  return (
    <>
      <div className={!props.state ? "hidden" : "reveal"}>
        <div>
          <div className="headerbis">
            <h1>Results</h1>
          </div>
          <div className="resume">
            <p>Name : {props.name} </p>
            <p>Email : {props.mail}</p>
            <p>Password : {props.password}</p>
          </div>
        </div>
        <button onClick={props.return}>Edit your information</button>
      </div>
    </>
  );
};

export default Results;
