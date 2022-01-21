import React from "react";

export default function Main() {
  return (
    <div className="row justify-content-center">
      <div className="col-md-5 shadow-lg p-3 mb-5 bg-white rounded">
        <h1>React Calculator</h1>
        <table className="table">
          <tr>
            <td colSpan="3">
              <input type="text"></input>
            </td>
            <td>
              <button className="clear">C</button>
            </td>
          </tr>

          <tr>
            <td>
              <button className="numBtn">1</button>
            </td>
            <td>
              <button className="numBtn">2</button>
            </td>
            <td>
              <button className="numBtn">3</button>
            </td>
            <td>
              <button className="numOp">/</button>
            </td>
          </tr>
          <tr>
            <td>
              <button className="numBtn">4</button>
            </td>
            <td>
              <button className="numBtn">5</button>
            </td>
            <td>
              <button className="numBtn">6</button>
            </td>
            <td>
              <button className="numOp">+</button>
            </td>
          </tr>
          <tr>
            <td>
              <button className="numBtn">7</button>
            </td>
            <td>
              <button className="numBtn">8</button>
            </td>
            <td>
              <button className="numBtn">9</button>
            </td>
            <td>
              <button className="numOp">-</button>
            </td>
          </tr>
          <tr>
            <td>
              <button className="decimal">.</button>
            </td>
            <td>
              <button className="numBtn">0</button>
            </td>
            <td>
              <button className="equal">=</button>
            </td>
            <td>
              <button className="numOp">*</button>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}
