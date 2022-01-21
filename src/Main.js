import React, { useState } from "react";

export default function Main() {
  const [input, setInput] = useState("");

  function display(value) {
    setInput(input + value);
  }

  function calculate() {
    const number = eval(input);
    const output = " = " + number;

    display(output);
  }

  function clear() {
    setInput("");
  }

  return (
    <div className="row justify-content-center">
      <div className="col-md-5 shadow-lg p-3 mb-5 bg-white rounded">
        <h1>React Calculator</h1>
        <table className="table">
          <tr>
            <td colSpan="3">
              <input type="text" value={input}></input>
            </td>
            <td>
              <button
                className="clear"
                onClick={() => {
                  clear();
                }}
              >
                C
              </button>
            </td>
          </tr>

          <tr>
            <td>
              <button
                className="numBtn"
                onClick={() => {
                  display("1");
                }}
              >
                1
              </button>
            </td>
            <td>
              <button
                className="numBtn"
                onClick={() => {
                  display("2");
                }}
              >
                2
              </button>
            </td>
            <td>
              <button
                className="numBtn"
                onClick={() => {
                  display("3");
                }}
              >
                3
              </button>
            </td>
            <td>
              <button
                className="numOp"
                onClick={() => {
                  display("/");
                }}
              >
                /
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <button
                className="numBtn"
                onClick={() => {
                  display("4");
                }}
              >
                4
              </button>
            </td>
            <td>
              <button
                className="numBtn"
                onClick={() => {
                  display("5");
                }}
              >
                5
              </button>
            </td>
            <td>
              <button
                className="numBtn"
                onClick={() => {
                  display("6");
                }}
              >
                6
              </button>
            </td>
            <td>
              <button
                className="numOp"
                onClick={() => {
                  display("+");
                }}
              >
                +
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <button
                className="numBtn"
                onClick={() => {
                  display("7");
                }}
              >
                7
              </button>
            </td>
            <td>
              <button
                className="numBtn"
                onClick={() => {
                  display("8");
                }}
              >
                8
              </button>
            </td>
            <td>
              <button
                className="numBtn"
                onClick={() => {
                  display("9");
                }}
              >
                9
              </button>
            </td>
            <td>
              <button
                className="numOp"
                onClick={() => {
                  display("-");
                }}
              >
                -
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <button
                className="decimal"
                onClick={() => {
                  display(".");
                }}
              >
                .
              </button>
            </td>
            <td>
              <button
                className="numBtn"
                onClick={() => {
                  display("0");
                }}
              >
                0
              </button>
            </td>
            <td>
              <button
                className="equal"
                onClick={() => {
                  calculate();
                }}
              >
                =
              </button>
            </td>
            <td>
              <button
                className="numOp"
                onClick={() => {
                  display("*");
                }}
              >
                *
              </button>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}
