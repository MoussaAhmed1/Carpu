import React from "react";

export default function RadioButton({
  handelRadio,
  name,
  radios = [...radios],
}) {
  return (
    <div
      className={`btn-group  ${name} d-block my-1`}
      role="group"
      aria-label="Basic radio toggle button group"
    >
      {radios.map((radio, i) => (
        <>
          <input
            type="radio"
            className="btn-check"
            name={name}
            id={radio == "any" ? radio + name : radio}
            value={radio}
            autoComplete="off"
            key={++i}
            onChange={handelRadio}
          />
          <label
            className="btn btn-outline-primary"
            htmlFor={radio == "any" ? radio + name : radio}
            key={++i}
            >{radio}
          </label>
        </>
      ))}
    </div>
  );
}
