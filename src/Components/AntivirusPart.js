import { Button, Grid, Typography } from "@mui/material";
import Box from '@mui/material/Box';
import WifiIcon from '@mui/icons-material/Wifi';
import HttpsIcon from '@mui/icons-material/Https';
import FaceIcon from '@mui/icons-material/Face';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import CleaningServicesIcon from '@mui/icons-material/CleaningServices';
import SecurityIcon from '@mui/icons-material/Security';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import './AntivirusPart.css';

export default function Content(){      

    return(
    <Grid container className='main-content'>
       <Grid  item lg={3} md={3} sm={3} xs={3}>

       </Grid>
        <Grid  item lg={6} md={6} sm={6} xs={6}>
            <Typography id='heading'>CREATING A SAFER WORLD</Typography>
            <Typography id='heading-2'>Free Antivirus is your first step to online freedom</Typography>
        </Grid>
        <Grid  item lg={3} md={3} sm={3} xs={3}>

        </Grid>
        <Grid item lg={12} md={12} sm={12} xs={12}>
           <Grid container spacing={2} className='main-cards'>
                <Grid item lg={4} md={4} sm={12} xs={12} >
                    <Box>
                        <Box className='outside-box'>
                            <Box className='first-box'>
                                <Typography sx={{ color:'#F32424'}}><ReportProblemIcon/>You have 3 unsolved issues</Typography>
                                <Typography id='para'>Last seen 43 minutes ago</Typography>
                                <Box style={{
                                    margin:'auto'
                                }}>
                                <Box className='icon-flex'>
                                    <Box className='flex-col'><WifiIcon className='t-icons'/><Typography>Scan Wifi</Typography></Box>
                                    <Box className='flex-col'><HttpsIcon className='t-icons'/><Typography>App Lock</Typography></Box>
                                    <Box className='flex-col'><FaceIcon className='t-icons' /><Typography>Theft</Typography></Box>
                                </Box>
                                <Box className='icon-flex-2'>
                                    <Box className='flex-col'><RocketLaunchIcon className='t-icons'/><Typography>Phone</Typography></Box>
                                    <Box className='flex-col'><CleaningServicesIcon className='t-icons'/><Typography>Clean Junk</Typography></Box>
                                    <Box className='flex-col'><SecurityIcon className='t-icons'/><Typography>VPN Protection</Typography></Box>
                                </Box>
                                </Box>
                            </Box>

                        </Box>
                        <Box className='second-box'>
                            <Typography className='second-p1'>Proactive detection</Typography>
                            <Typography className='second-p2'>Our triple layer security works 24/7 to guard your PC and data</Typography>
                            <Button style={{
                                backgroundColor:'blueviolet',
                                color:'white',
                                margin:'1rem'

                            }}>Get Started</Button>
                        </Box>  
                    </Box>
                </Grid>
                <Grid item lg={4} md={4} sm={12} xs={12} >
                <Box>
                        <Box className='outside-box'>
                            <Box className='first-box'>
                                {/* <img src='https://www.webhuq.com/templates/fast_hunt_security_software_landing_page_12140/assets/images/create2.png'></img> */}
                                <Typography sx={{ color:'#F32424'}}><ReportProblemIcon/>You have 3 unsolved issues</Typography>
                                <Typography id='para'>Last seen 43 minutes ago</Typography>
                                <Box style={{
                                    margin:'auto'
                                }}>
                                <Box className='icon-flex'>
                                    <Box className='flex-col'><WifiIcon className='t-icons'/><Typography>Scan Wifi</Typography></Box>
                                    <Box className='flex-col'><HttpsIcon className='t-icons'/><Typography>App Lock</Typography></Box>
                                    <Box className='flex-col'><FaceIcon className='t-icons' /><Typography>Theft</Typography></Box>
                                </Box>
                                <Box className='icon-flex-2'>
                                    <Box className='flex-col'><RocketLaunchIcon className='t-icons'/><Typography>Phone</Typography></Box>
                                    <Box className='flex-col'><CleaningServicesIcon className='t-icons'/><Typography>Clean Junk</Typography></Box>
                                    <Box className='flex-col'><SecurityIcon className='t-icons'/><Typography>VPN Protection</Typography></Box>
                                </Box>
                                </Box>
                            </Box>

                        </Box>
                        <Box className='second-box'>
                            <Typography className='second-p1'>Proactive detection</Typography>
                            <Typography className='second-p2'>Our triple layer security works 24/7 to guard your PC and data</Typography>
                            <Button style={{
                                backgroundColor:'blueviolet',
                                color:'white',
                                margin:'1rem'

                            }}>Get Started</Button>
                        </Box>  
                    </Box>
                </Grid>
                <Grid item lg={4} md={4} sm={12} xs={12}>
                <Box>
                        <Box className='outside-box'>
                            <Box className='first-box'>
                               {/* <img src='https://www.webhuq.com/templates/fast_hunt_security_software_landing_page_12140/assets/images/create3.png'></img> */}
                               <Typography sx={{ color:'#F32424'}}><ReportProblemIcon/>You have 3 unsolved issues</Typography>
                                <Typography id='para'>Last seen 43 minutes ago</Typography>
                                <Box style={{
                                    margin:'auto'
                                }}>
                                <Box className='icon-flex'>
                                    <Box className='flex-col'><WifiIcon className='t-icons'/><Typography>Scan Wifi</Typography></Box>
                                    <Box className='flex-col'><HttpsIcon className='t-icons'/><Typography>App Lock</Typography></Box>
                                    <Box className='flex-col'><FaceIcon className='t-icons' /><Typography>Theft</Typography></Box>
                                </Box>
                                <Box className='icon-flex-2'>
                                    <Box className='flex-col'><RocketLaunchIcon className='t-icons'/><Typography>Phone</Typography></Box>
                                    <Box className='flex-col'><CleaningServicesIcon className='t-icons'/><Typography>Clean Junk</Typography></Box>
                                    <Box className='flex-col'><SecurityIcon className='t-icons'/><Typography>VPN Protection</Typography></Box>
                                </Box>
                                </Box>
                            </Box>

                        </Box>
                        <Box className='second-box'>
                            <Typography className='second-p1'>Proactive detection</Typography>
                            <Typography className='second-p2'>Our triple layer security works 24/7 to guard your PC and data</Typography>
                            <Button style={{
                                backgroundColor:'blueviolet',
                                color:'white',
                                margin:'1rem'

                            }}>Get Started</Button>
                        </Box>  
                    </Box>               
                </Grid>
           </Grid>
        </Grid>
    </Grid>
    )
}