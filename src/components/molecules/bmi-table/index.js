import React from "react";
import "./index.css";

const BmiTable = () => {
  return (
    <div className="table-container">
      <table className="table table-dark">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Kategorija</th>
            <th scope="col">BMI index</th>

          </tr>
        </thead>
        <tbody className="">
          <tr >
            <td>Pothranjenost</td>
            <td>{"< 17"}</td>
          </tr>

          <tr>
            <td>Blaga pothranjenost</td>
            <td>17 - 18.5</td>
          </tr>
          <tr >
            <td>Normalna težina</td>
            <td>18.5 - 25</td>
          </tr>
          <tr >
            <td>Pretilost</td>
            <td>25 - 30</td>
          </tr>
          <tr >
            <td>Pretilost klasa 1</td>
            <td>30 - 35</td>
          </tr>
          <tr>
            <td>Pretilost klasa 2</td>
            <td>35 - 40</td>
          </tr>
          <tr>
            <td>Pretilost klasa 3</td>
            <td>{"> 40"}</td>
          </tr>
        </tbody>
      </table>
    </div>

  );
};

export default BmiTable;
