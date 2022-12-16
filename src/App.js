import "../node_modules/bootstrap/dist/css/bootstrap.css";
import { useState, useRef, useEffect } from "react";

const App = () => {
  const [data, setdata] = useState();
  const [da, setdat] = useState();
  const mydata = useRef();

  const submit = () => {
    let newdata = mydata.current.value;
    let myarr = [1, 0];
    let sum = 0;
    for (let i = 0; i < newdata; i++) {
      sum = myarr[0] + myarr[1];
      myarr.splice(0, 0, sum);
    }
    myarr.reverse();
    let n = myarr.length - 2;
    let newarr = myarr.slice(0, n);
    let newarr1 = newarr.join(",");
    setdata(newarr1);
  };

  useEffect(() => {
    const d = new Date().getFullYear();
    setdat(d);
  }, []);

  return (
    <>
      <div className="card text-center">
        <div className="card-header">Fibonacci Series</div>
        <div className="card-body">
          <div className="mt-4" style={{ textAlign: "center" }}>
            <input
              ref={mydata}
              type="number"
              placeholder="how much time print"
            ></input>
          </div>
          <div className="text-center mt-3">
            <button onClick={submit} className="btn btn-success">
              Submit
            </button>
          </div>
          <h5 className="card-title mt-4">{data}</h5>
        </div>
        <div className="card-footer text-muted">© {da} Sumanta Das</div>
      </div>
    </>
  );
};

export default App;
