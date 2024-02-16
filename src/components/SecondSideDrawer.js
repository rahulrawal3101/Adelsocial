import { Box, Drawer, Grid, Typography } from '@mui/material';
import React from 'react';
import adellogo from '../assets/adellogo.png';
import SearchIcon from '@mui/icons-material/Search';
import CancelIcon from '@mui/icons-material/Cancel';
import { useNavigate } from 'react-router-dom';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { MAIN_COLOR } from '../constant';
import Typewriter from 'typewriter-effect';
const socialIcons = [{ icon: <InstagramIcon sx={{color:'black','&:hover': { color: MAIN_COLOR } }} />, name: "insta", link: 'https://www.instagram.com/adelsociall/' }, { icon: <FacebookIcon sx={{color:'black', '&:hover': { color: MAIN_COLOR} }} />, name: "face", link: 'https://www.facebook.com/AdelSocial/' }, { icon: <TwitterIcon sx={{color:'black', '&:hover': { color: MAIN_COLOR } }} />, name: "twit", link: 'https://twitter.com/i/flow/login?redirect_after_login=%2Fadelsocial' }, { icon: <LinkedInIcon sx={{color:'black', '&:hover': { color: MAIN_COLOR } }} />, name: "link", link: 'https://www.linkedin.com/company/adelsocial/' }];

const SecondSideDrawer = ({ open, setOpen }) => {
    const navigate = useNavigate();
    const closeHandler = () => {
        setOpen(false)
    }

    return (
        <>
            <Drawer
                anchor={'left'}
                open={open}
                onClose={() => { setOpen(false) }}
                PaperProps={{
                    sx: { width: { lg: '0%', md: '28%', sm: '45%', xs: '80%' }, zIndex: 999999999, margin: 'auto', bgcolor: 'white' }
                }}
            >
                <Grid container>
                    <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'right', alignItems: 'center', p: '4px' }} >
                        <CancelIcon sx={{ color: 'black', fontSize: '35px', cursor: 'pointer' }} onClick={closeHandler} />
                    </Grid>
                    <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Box sx={{ bgcolor: 'white', width: '240px', height: '60px', borderRadius: '10px' }}>
                            <img src={adellogo} style={{ height: '100%', width: '100%' }} />
                        </Box>

                    </Grid>

                    {/* <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: '15px' }}>
                        <Box sx={{ borderRadius: '3px', p: '7px 0px 7px 5px', width: { lg: '95%', md: '95%', sm: '95%', xs: '95%' }, bgcolor: 'white', display: 'flex', justifyContent: 'space-between', alignItems: 'center', border: '1px solid black' }}>
                            <input placeholder='Search here...' type='text' style={{ border: 'none', background: 'none', outline: 'none', fontWeight: '600', width: '90%', color: 'black' }} />
                            <SearchIcon sx={{ color: 'black' }} />

                        </Box>

                    </Grid> */}
                    <Grid item xs={12} sx={{ mt:'20px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                        <Typography variant='h2' sx={{ fontSize: { lg: '35px', md: '30px', sm: '25px', xs: '20px' }, fontWeight: '600', textAlign: 'center', color: 'black' }}>See Your Digital Transformation Growth With Us</Typography>
                        {/* <Typography variant='h5' sx={{ fontSize: '30px', color: 'white', textAlign: 'center', }}>Get all Your question answer by our business development team.</Typography> */}
                        <Box sx={{ fontSize: { lg: '24px', md: '22px', sm: '20px', xs: '19px' }, color: 'black', mt: '5px' ,textAlign:'center'}}>
                            <Typewriter
                                options={{
                                    strings: ['Get all Your question answer by our business development team .'],
                                    autoStart: true,
                                    loop: true,
                                    skipAddStyles: 10,
                                    
                                }} />
                        </Box>

                    </Grid>

                    <Grid item xs={12} sx={{ textAlign: 'left', p: '10px' }}>
                        <Typography sx={{ fontSize: '15px', fontWeight: '800', mt: '15px', }} onClick={() => { navigate('/') }}>Home</Typography>
                        <Typography sx={{ fontSize: '15px', fontWeight: '800', mt: '15px', }} onClick={() => { navigate('/about') }}>About</Typography>
                        <Typography sx={{ fontSize: '15px', fontWeight: '800', mt: '15px', }} onClick={() => { navigate('/contact') }}>Contact</Typography>
                        <Typography sx={{ fontSize: '15px', fontWeight: '800', mt: '15px', }} onClick={() => { navigate('/itservices') }}>IT Services</Typography>
                        <Typography sx={{ fontSize: '15px', fontWeight: '800', mt: '15px', }} onClick={() => { navigate('/jobopenings') }}>Job Opening</Typography>

                    </Grid>
                    <Grid item xs={12} sx={{  mt:'70px' }}>

                        <Box sx={{ display: "flex", justifyContent: "space-around", alignItems: 'center', mb: { lg: '0px', md: '0px', sm: '10px', xs: '20px' } }}>
                            {
                                socialIcons.map((item, index) => {
                                    return <Typography key={index} sx={{ color: 'white', }} >
                                        <a href={item.link} style={{ color: 'white' }}> {item.icon}</a>
                                    </Typography>
                                })
                            }
                        </Box>
                    </Grid>
                </Grid>




            </Drawer>

        </>
    )
}

export default SecondSideDrawer