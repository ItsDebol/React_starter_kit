import React from "react";

const rightPanel = () => {
  return (
    // <center>
    <div>
      <h5>Upload a PDF</h5>

      <div>{<input type="file" />}</div>
      <hr width="100%" />
      <h5>Mark</h5>
      <input type="number" />
      <hr width="100%" />
      <h5>Rubric</h5>
      <hr width="100%" />
      <a>Field 1</a>
      <div>{<input type="number" />}</div>

      <a>Field 2</a>
      <div>{<input type="number" />}</div>
      <a>Field 3</a>
      <div>{<input type="number" />}</div>
      <hr width="100%" />
      <a>Private Comments</a>
      <div>{<textarea />}</div>
    </div>
    // {/* </center> */}
  );
};

export default rightPanel;
