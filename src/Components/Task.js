import React from 'react'
import { Grid, Typography,Box } from '@mui/material'
import './Task.css'
import asia from './Images/asia.png'
import ideasharing from './Images/ideasharing.png'
import protection from './Images/protection.png'

 const Task = () => {
  return (
   
<Grid>

<Grid container className='grid_container' >

<Grid item lg={12} md={12} sm={12} xs={12}  className="gird_item1">
      <Typography variant='h6' sx={{padding:2,color:"red"}}>UNIVERSAL PREMIUM SECURITY</Typography>
      <Typography variant='h3' sx={{padding:2,color:"white"}}>Why FastHunt Software?</Typography>
      <Typography variant='p' sx={{padding:2,color:"white"}}>We believe everyone has the the right  to be safe online ,<br/>which is why we offer</Typography>

    </Grid>



    <Grid item lg={12} md={12} sm={12} xs={12} className="grid_item2" >
     <Grid container>
    <Grid item lg={4} md={6} sm={12} xs={12} className="griditem2_child1">
        
      <Box className='child1_grid'>
        <  img style={{position:"absolute",top:'30px',left:"20px"}} src={ideasharing} alt=""/> 
      
       <Typography variant='h5' sx={{color:'white', padding:1,paddingTop:5}}>Simple solutions</Typography>
       <Typography variant='h6' sx={{color:'white', padding:1}}>We deliver complete endpoint and network security solutions</Typography>
      </Box>

      </Grid>
      <Grid item lg={4} md={6} sm={12} xs={12} className="griditem2_child1">
      <Box className='child1_grid' sx={{backgroundColor:"#8D72E1"}}>
      <  img style={{position:"absolute",top:'25px',left:"20px"}} src={protection} alt=""/> 
      
      <Typography variant='h5' sx={{color:'white', padding:1,paddingTop:5}}>Personal protection</Typography>
       <Typography variant='h6' sx={{color:'white', padding:1}}>We protect your privacy,keep you safe online,and safeGaurd</Typography>
      </Box>
     </Grid>


      <Grid item lg={4} md={6} sm={12} xs={12} className="griditem2_child1">
      <Box className='child1_grid'>
      <  img style={{position:"absolute",top:'30px',left:"50px"}} src={asia} alt=""/> 


      <Typography variant='h5' sx={{color:'white', padding:1,paddingTop:5}}>Golbal Operators</Typography>
       <Typography variant='h6' sx={{color:'white', padding:1}}>we partner with the world's leading mobile and broadband network</Typography>

      </Box>
      </Grid>

    </Grid>
    </Grid>

</Grid> 



   </Grid>
  )
}
export default Task