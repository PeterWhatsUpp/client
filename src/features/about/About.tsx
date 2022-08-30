import * as material from '@mui/material'
import { Alert, AlertTitle, List, ListItem, ListItemText } from '@mui/material';
import { useState } from 'react'
import agent from '../../app/api/agent'

const About = () => {

  const [validationErrors, setValidationErrors]=useState<string[]>([]);

  function getValidationError(){
    agent.TestErrors.getValidationError().
    then(()=>console.log('should not see this'))
    .catch(error=>setValidationErrors(error));
  }

  return (
    <material.Container>
      <material.Typography gutterBottom variant='h2'>Errors for testing purposes</material.Typography>
      <material.ButtonGroup fullWidth>
        <material.Button variant='contained' onClick={()=>agent.TestErrors.get400Error().catch(error=>console.log(error))}>test 400 error</material.Button>
        <material.Button variant='contained' onClick={()=>agent.TestErrors.get401Error().catch(error=>console.log(error))}>test 401 error</material.Button>
        <material.Button variant='contained' onClick={()=>agent.TestErrors.get404Error().catch(error=>console.log(error))}>test 404 error</material.Button>
        <material.Button variant='contained' onClick={()=>agent.TestErrors.get500Error().catch(error=>console.log(error))}>test 500 error</material.Button>
        <material.Button variant='contained' onClick={getValidationError}>test validation error</material.Button>

      </material.ButtonGroup>

      {validationErrors.length>0 && 
          <Alert severity='error'>
            <AlertTitle>Validation Errors</AlertTitle>
            <List>
              {validationErrors.map(error=>(
                  <ListItem key={error}>
                    <ListItemText>{error}</ListItemText>
                  </ListItem>
                ))}
            </List>
          </Alert>
      }
    </material.Container>
  )
}

export default About
