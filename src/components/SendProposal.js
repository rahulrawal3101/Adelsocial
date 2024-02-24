import { Box, Button, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import first from '../assets/first.svg'
import fifth from '../assets/five.svg'
import fourth from '../assets/fourth.svg'
import second from '../assets/second.svg'
import third from '../assets/third.svg'
import { MAIN_COLOR, SECONDARY_COLOR } from '../constant'
import '../pages/Homepage.css'
import { useNavigate } from 'react-router-dom'

const SendProposal = () => {
    const navigate = useNavigate();
    const reviews = [{ title: "Thousands of successfully completed project", icon: first,animate:"fade-up"  }, { title: "Data-driven & well thought-proven strategies", icon: second,animate:"fade-up" },
    { title: "98% Five star reviews from the client", icon: third,animate:"fade-up"  }, { title: "Helped businesses in a variety of industries to reach their target audiences", icon: fourth,animate:"fade-up"  },
    { title: "Dedicated to providing quality service and customer satisfaction.", icon: fifth,animate:"fade-up"  }].map((item, index) => {
        return <Grid key={index} item sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', height: { lg: '90px', md: '90px' }, pl: '80px', width: { lg: '100%', md: '100%', sm: '50%', xs: '50%' } }}>
            <img src={item.icon} alt="icons" />
            <Typography variant='subtitle1' sx={{ color: 'white' }} data-aos={`${item.animate}`}>{item.title}</Typography>
        </Grid>
    })

    return (
        <Grid container sx={{ bgcolor: '#313535', p: '20px',overflow:"hidden",}}  data-aos="fade-up">
            <Container disableGutters sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center' }}>
                <Grid item className='mainSendArea' sx={{ p: { xs: '0rem', lg: '4rem', md: '4rem', sm: '4rem' }, width: { lg: '50%', md: '50%', sm: '100%', xs: '100%' } }} data-aos="fade-up">
                    <Typography textAlign={'center'} variant='h3' sx={{ color: SECONDARY_COLOR, fontWeight: 900 ,fontSize:{lg:'50px', md:'50px', sm:'45px',xs:'40px'}}}>
                        Adelsocial: <span style={{ color: MAIN_COLOR }}>Empowering</span> Your Digital Vision
                    </Typography>
                    <Typography textAlign={'center'} variant='body1' sx={{ mb: '10px', color: SECONDARY_COLOR, fontWeight: 500, fontFamily: 'sans' }} data-aos="fade-up">
                        Let's Create Your App and Website Together!
                    </Typography>
                    <Box sx={{display:'flex',justifyContent:'center',alignItems:'center'}} data-aos="fade-up">

                    <Button variant='contained' onClick={()=>{navigate('/portfolio')}} sx={{fontSize:{lg:'16px',md:'15px',sm:'14px',xs:'13px'},fontFamily:'serif',p:{lg:'8px 25px',md:'8px 25px' ,sm:'7px 20px',sm:'6px 20px'},borderRadius:'3px 15px 3px 15px'}}>Portfolio</Button>
                    </Box>
                    

   
                    {/* <Grid item  sx={{ display: 'flex', justifyContent: 'center', mt: '30px' }}>
                        <ProposalInput style={{ width: { md: '100%', lg: '80%', sm: '100%', xs: '100%' }, color: 'white' }} />
                    </Grid> */}
                </Grid>

                <Grid container className='sideTexts' sx={{ width: { xs: '100%', sm: '100%', md: '50%', lg: '50%' }, display: 'flex', flexDirection: { xs: 'row', sm: 'row', md: 'column', lg: 'column' }, justifyContent: 'center' }}>
                    {reviews}
                </Grid>
            </Container>
        </Grid>
    )
}

export default SendProposal