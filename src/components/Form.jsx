import React from "react"
import { Paper, TextField,Button} from "@mui/material"
import { useState } from "react"

function Form(todoHandle){
  
  const [text, setText] = useState()

  return (
    <Paper style={{padding:"1em"}}>
      <div  style={{display:"flex",justifyContent:"center"}}>
          <TextField id="outlined-basic" label="Adicione uma nova tarefa" 
          variant="outlined" fullWidth onChange={(e)=> setText(e.target.value)} />
          <Button variant="text" onClick={()=> todo(text)}>Add</Button>
      </div>
    </Paper>
  )
}

export default Form