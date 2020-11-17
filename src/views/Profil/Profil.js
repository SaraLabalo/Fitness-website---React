import React from "react";
import { Button } from "reactstrap";
function Profile(props) {
  React.useEffect(() => {
    console.log("usao");
    console.log(props.mojiTermini);
  });

  const obrisi = (set, value, index, day, timeFrom, timeTo, arrIndex) => {
    let newArr = value; // copying the old datas array
    newArr[index] = newArr[index] + 1;
    set(newArr);
    props.setReset(!props.reset);
    var arr = props.mojiTermini;
    arr.splice(arrIndex, 1);
    props.setMojiTermini(arr);
  };
  return (
    <div
      style={{
        marginTop: "50px",
        paddingBottom: "70px",
        minHeight: "80vh",
        paddingTop: "20px",
        paddingLeft: "10px",
      }}
      className="container"
    >
      <div className="row">
        <div clasName="col" style={{ width: "100%", textAlign: "center" }}>
          <h2>{props.language ? "Moji termini" : "My training"}</h2>
        </div>
      </div>
      <div class="row " style={{ marginTop: "20px" }}>
        {props.mojiTermini.map((termin, index) => {
          return (
            <div
              className="col-md-3"
              style={{
                boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
                height: "250px",
                marginBottom: "20px",
              }}
            >
              <div clasName="row">
                <div
                  clasName="col"
                  style={{
                    width: "100%",
                    textAlign: "center",
                    marginBottom: "15px",
                  }}
                >
                  <h3>{termin.type}</h3>
                </div>
              </div>
              <div clasName="row">
                <div
                  clasName="col"
                  style={{
                    marginBottom: "20px",
                  }}
                >
                  <h4>
                    {termin.day} : {termin.timeFrom} / {termin.timeTo}
                  </h4>
                </div>
              </div>

              <div clasName="row">
                <div
                  clasName="col"
                  style={{
                    width: "100%",
                    textAlign: "center",
                    marginBottom: "15px",
                  }}
                >
                  <Button
                    color="primary"
                    onClick={() =>
                      obrisi(
                        termin.set,
                        termin.value,
                        termin.index,
                        termin.day,
                        termin.timeFrom,
                        termin.timeTo,
                        index
                      )
                    }
                  >
                    {props.language ? "Otkazi" : "Cancel"}
                  </Button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Profile;
