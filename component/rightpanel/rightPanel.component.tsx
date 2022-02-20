import Button from "@mui/material/Button";
import InputAdornment from "@mui/material/InputAdornment";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import React from 'react'

const rightPanel = () => {
  return ( 
    // <center> 
    <div>
      <h5 >Files</h5>
      <a href="" >
        See history
      </a>
      <div>
        {<input type="file"/>}
      </div>
      <hr width="100%" />
      <h5 >Mark</h5>
      <input type="number"/>
      <hr width="100%" />
      <h5 >Rubric</h5>
      <hr width="100%" />
      <a >Field 1</a>
      <div>
        {<input type="number"/>}
      </div>

      <a >Field 1</a>
      <div>
        {<input type="number"/>}
      </div>
      <a >Field 1</a>
      <div>
        {<input type="number"/>}
      </div>
      <hr width="100%" />
      <a >Private Comments</a>
      <div>
        {<textarea/>}
      </div>

    </div>
    // {/* </center> */}
  )
}

export default rightPanel
