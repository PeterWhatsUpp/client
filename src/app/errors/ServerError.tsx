import * as Mui from '@mui/material'
import { useLocation, useNavigate } from 'react-router-dom'

const ServerError = () => {
  const navigator = useNavigate();
  const location = useLocation();


  type LocationState = {
    error: any;
  }

  const { error } = location.state as LocationState;
  
  return (
    <Mui.Container component={Mui.Paper}>
      {error? (
        <>
          <Mui.Typography variant="h3" color='error' gutterBottom>
            {error.title}
          </Mui.Typography>
          <Mui.Divider />
          <Mui.Typography>
            {error.detail || 'Internal server error'}
          </Mui.Typography>
        </>
      ) : (
        <>
          <Mui.Typography variant="h5" gutterBottom>
            Server error
          </Mui.Typography>
        </>
      )}
      <Mui.Button onClick={() =>  navigator("/catalog")}>Go back to catalog</Mui.Button>
    </Mui.Container>
  )
}

export default ServerError
