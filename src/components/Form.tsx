import React from 'react';
import { useState } from "react";
import { Button, TextField, Box } from "@mui/material";
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';


function Form() {
const Sign = () => {
    const [login, setLogin] = useState("")
    const [password, setPassword] = useState("")
    }

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      console.log("Submit")
    }


  return (
    <Box
    component="form"
    autoComplete="off"
    onSubmit={onSubmit} 
    sx={{display: "flex", flexDirection: "column", alignItems: "center", gap: 1, 
   
        }}
>
    <TextField
  required
          label= {`Enter your first name`}
          variant="standard"
          type="text"
        />
  <TextField
        required
          label= {`Enter your last name`}
          variant="standard"
          type="text"
        />
<TextField
        required
          label= {`Login`}
          variant="standard"
          type="text"
          
          />
 <TextField
        required
          label= {`Enter your email`}
          variant="standard"
          type="email"
        />
  <TextField
        required
          label= {`Password`}
          variant="standard"
          type="password"
          />
          <TextField
        required
          label= {`Confirm your password`}
          variant="standard"
         
          type="password"
        />
  <div>
   <select id="gender">
    <option value="male">Male</option>
    <option value="female">Female</option>
    <option value="others">Others</option>
   </select>
  </div>

<div>
  <label htmlFor="subscribe">Do you want to subscribe?</label>
  <input type="checkbox" id="subscribe"/>
</div>

   <Button 
        type='submit'
        variant="outlined"
        startIcon={<AssignmentIndIcon />}
        color="primary"
        >Sign</Button>
</Box>
  )
}

export default Form