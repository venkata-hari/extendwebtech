import React from 'react';
import { Box, Typography, Button, Grid, Card, CardContent } from '@mui/material'

const cardData = [
    {
        "title": "Network Attack blocker",
        "subtitle": "Network Attack blocker & antiransomeware prevent hackers breaking.",
        "image": "https://www.webhuq.com/templates/fast_hunt_security_software_landing_page_12140/assets/images/service_icon.png"
    },
  
     {
        "title": "Real-time antivirus safeguards",
        "subtitle": "Real-time antivirus safeguards you from common threats like worms plus .",
        "image": "https://www.webhuq.com/templates/fast_hunt_security_software_landing_page_12140/assets/images/service_icon1.png"
    },
     {
        "title": "Sofisticated anti-malware",
        "subtitle": "Sofisticated anti-malware remove threats including spyware adware",
        "image": "https://www.webhuq.com/templates/fast_hunt_security_software_landing_page_12140/assets/images/service_icon2.png"
    },
     {
        "title": "Track changes in feedback over",
        "subtitle": "nancy boy brown bread get stuffed mate a matie boy i grub cheeky horse play",
        "image": "https://www.webhuq.com/templates/fast_hunt_security_software_landing_page_12140/assets/images/service_icon3.png"
    },
     {
        "title": "Fast Hunt document protector",
        "subtitle": "James bond Queens English mufty its all gone to pot bobby elizabeth",
        "image": "https://www.webhuq.com/templates/fast_hunt_security_software_landing_page_12140/assets/images/service_icon4.png"
    },
     {
        "title": "Explorer User Behaviour",
        "subtitle": "On your bike mate cobblers i dont want no agro bleeding crickey",
        "image": "https://www.webhuq.com/templates/fast_hunt_security_software_landing_page_12140/assets/images/service_icon5.png"
    },
    
  
  ]
function Section4() {
    return (
        <>
           <Box
      sx={{
        width: "100%",
        height: "100%",
        backgroundColor: '#4141a5'
      }}>
  <Grid
          container
          spacing={4}
          justify="center"
          style={{ marginTop: "80px" }}
                >
                    {
        cardData.map((item, index) => {
           return (
            <Grid item xs={12} sm={6} md={4} lg={4} >
              <Card  sx={{height:"350px", width:"auto", marginLeft:10, marginRight:10, background:'#4141a5',borderRadius: "20px", '&:hover': {
          background: 'rgba(255, 255, 255, 0.1)',
          border: "1px solid #FFFFFF",
        },}} >
                <CardContent key={index} >
               <center><Box><img src={item.image} height="5%" width="20%"></img></Box></center> 
                      <Typography variant="body2" component="p" sx={{color:"white", fontWeight:"BOLD",fontSize:"30px", mt:"20px"}}><center>{item.title}</center></Typography><br/>
                      <Typography variant="body2" sx={{color:"white", fontFamily:"sans-serif",float:"center"}} gutterBottom>
                      <center>{item.subtitle}</center> </Typography>
                </CardContent>
      
              </Card>
            </Grid>);
      })}  </Grid>
            </Box>
            
            <Box
      sx={{
        width: "100%",
        height: "100%",
        backgroundColor: '#6F6681'
      }}>
  <Grid
          container
          spacing={1}
          justify="center"
          style={{ marginTop: "80px" }}
                >
            <Grid item xs={12} sm={6} md={4} lg={4} >
              <Card  sx={{height:"200px", width:"auto", marginLeft:10, marginRight:10,border: "none", boxShadow: "none", background:"none"}} >
                <CardContent>
               <center><Box><Typography variant="h3" component="p" sx={{color:"black", fontWeight:"BOLD"}}><center>Get the best experience</center></Typography></Box></center> 
                      <Typography variant="body2" sx={{color:"black", fontFamily:"sans-serif",float:"center"}} gutterBottom>
                      <center>Included in our service, each customer gets in-house software to access live financial dashboards</center> </Typography>
                </CardContent>
      
              </Card>
                    </Grid>
            
                    <Grid item xs={12} sm={6} md={4} lg={4} >
              <Card  sx={{height:"200px", width:"auto", marginLeft:10, marginRight:10,border: "none", boxShadow: "none",background:'white',borderRadius: "20px",mt:"70px"}} >
                <CardContent>
                                <Box><img src="" height="5%" width="20%"></img></Box>
                                <Typography variant="body2" component="p" sx={{color:"black", fontWeight:"BOLD",fontSize:"30px"}}><center>Early stage startup</center></Typography>
                      <Typography variant="body2" sx={{color:"black", fontFamily:"sans-serif",float:"center"}} gutterBottom>
                      <center>Get your bookkeeping, R&D credits and CFO problems, solved.</center> </Typography>
                </CardContent>
      
              </Card>
            </Grid>

                    
            <Grid item xs={12} sm={6} md={4} lg={4} >
              <Card  sx={{height:"200px", width:"auto", marginLeft:10, marginRight:10,border: "none", boxShadow: "none",borderRadius: "20px",mt:"160px"}} >
                <CardContent>
               <center><Box><Typography variant="body2" component="p" sx={{color:"black", fontWeight:"BOLD",fontSize:"30px"}}><center>Venture backed</center></Typography></Box></center> 
                      <Typography variant="body2" sx={{color:"black", fontFamily:"sans-serif",float:"center"}} gutterBottom>
                      <center>We can provide flexible finance support for your late stage startup.</center> </Typography>
                </CardContent>
      
              </Card>
                    </Grid>
                    
                    <Grid item xs={12} sm={6} md={4} lg={4} >
              <Card  sx={{height:"200px", width:"auto", marginLeft:10, marginRight:10,border: "none", boxShadow: "none",borderRadius: "20px",mt:"-130px"}} >
                <CardContent>
               <center><Box><Typography variant="body2" component="p" sx={{color:"black", fontWeight:"BOLD",fontSize:"30px"}}><center>Energy Expertise</center></Typography></Box></center> 
                      <Typography variant="body2" sx={{color:"black", fontFamily:"sans-serif",float:"center"}} gutterBottom>
                      <center>Included in our service, each customer gets in-house software to access live financial dashboards</center> </Typography>
                </CardContent>
      
              </Card>
                    </Grid>
                    
                    <Grid item xs={12} sm={6} md={4} lg={4} >
              <Card  sx={{height:"200px", width:"auto", marginLeft:10, marginRight:10,border: "none", boxShadow: "none",borderRadius: "20px",mt:"30px"}} >
                <CardContent>
               <center><Box><Typography variant="body2" component="p" sx={{color:"black", fontWeight:"BOLD",fontSize:"30px"}}><center>Later stage</center></Typography></Box></center> 
                      <Typography variant="body2" sx={{color:"black", fontFamily:"sans-serif",float:"center"}} gutterBottom>
                      <center>Gain the financial accuracy, you need to make smarter decisions, drive efficiency, and achieve..</center> </Typography>
                </CardContent>
      
              </Card>
            </Grid>

                </Grid>
            </Box>
    

    </>
    );
}

export default Section4;