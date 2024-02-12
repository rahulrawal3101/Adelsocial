import { Grid, Typography, Button, Container } from '@mui/material'
import React, { useContext } from 'react'
import { MOBILE, SECONDARY_COLOR } from '../constant'
import '../pages/Homepage.css'
import { AdelContext } from '../store/Context'

const  SendMessage = () => {
    const {handleOpenWhatsAppChat}=useContext(AdelContext)
    
    function handleOpenWhatsApp() {
       
        handleOpenWhatsAppChat()
      }
      

    return (
        <Grid container sx={{ bgcolor: 'black', mb: '0px', p: '50px',overflow:"hidden" }}>

            <Container disableGutters sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center' }}>

                <Grid item lg={7} xs={12} sx={{ pl: { lg: '60px', xs: '0px' }, display: 'flex', flexDirection: 'column', alignItems: { lg: 'flex-start', xs: 'center' }, justifyContent: 'center' }}>

                    <Typography variant='h5' textAlign={'center'} sx={{ color: SECONDARY_COLOR, fontWeight: 'normal' }} data-aos="fade-right">Ready To Speak With an Expert? Call us at</Typography>
                    <a href={`tel:+91 ${MOBILE}`} style={{ textDecoration: 'none', }}>
                        <Typography textAlign="center" sx={{fontSize:{lg:"33px",md:"30px",sm:"28px",xs:"22px"}, color: '#fff', fontWeight: 900 }} data-aos="fade-right"> +91 9773926687</Typography>
                    </a>
                </Grid>
                <Grid item lg={5} xs={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Button variant='contained' sx={{ mt: { xs: '10px', lg: 0 }, padding: { lg: '20px 40px', xs: '10px 20px' }, borderRadius: '10px' }} data-aos="fade-left" onClick={handleOpenWhatsApp}>Send us a Message</Button>
                </Grid>
            </Container>
        </Grid >
    )
}

export default SendMessage