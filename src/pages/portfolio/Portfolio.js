import { Box, Button, Grid, Typography } from '@mui/material';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import adellogo from '../../assets/adellogo.png';
import React, { useEffect, useState, } from 'react';
import ReactPlayer from 'react-player';
import AOS from 'aos';
import 'aos/dist/aos.css';
import video1 from '../../assets/video1.mp4';
import video2 from '../../assets/video2.mp4'
import adel from '../../assets/adel.mp4';
import hero from '../../assets/hero.mp4';
import mytutor from '../../assets/mytutor.mp4'
import { useNavigate } from 'react-router-dom';
import SecondSideDrawer from '../../components/SecondSideDrawer';
import MenuIcon from '@mui/icons-material/Menu';
import FirstSideDrawer from '../../components/FirstSideDrawer';


const Portfolio = () => {
    const [open, setOpen] = useState(false);
    const [dOpen,setDOpen] = useState(false)

    const openDrawerHandler = () => {
        setOpen(true)
    };
    const testingHandler=()=>{
        setDOpen(true)
    }

    const navigate = useNavigate()
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);
    return (
        <>
            {/* header  */}
            <Grid container sx={{ position: 'sticky', top: '0px', zIndex: 99 }}>
                <Grid container sx={{ justifyContent: 'center', alignItems: 'center', background: 'linear-gradient(94deg, rgba(0,0,0,1) 0%, rgba(57,55,55,1) 31%, rgba(0,0,3,1) 46%)', p: '12px' }}>

                    <Grid item lg={12} md={12} sm={12} xs={12} sx={{ p: 'px' }}>

                        <Typography sx={{ fontSize: { lg: '14px', md: '13px', sm: '12px', xs: '11px' }, color: 'white', fontWeight: 'bold', textAlign: { lg: 'center', md: 'center', sm: 'left', xs: 'left' }, mt: { lg: '0px', md: '0px', sm: '5px', xs: '5px', } }}>Welcome to AdelSocial,Empower your digital journey with us. We craft captivating apps and websites, combining cutting-edge technology and creative design. From dynamic mobile apps to sleek websites, we turn your vision into reality. Join us in shaping the future of digital innovation.</Typography>
                    </Grid>

                </Grid>
                <Grid container sx={{ justifyContent: 'space-between', alignItems: 'center', bgcolor: 'transparent', zIndex: 9999, background: "rgba(0,0,0,0.2)", p: '5px 5px' }}>
                    <Grid item lg={3} md={3} sm={4} xs={4} sx={{ display: 'flex', justifyContent: 'left', }}>
                        <Box sx={{ width: { lg: '160px', md: '120px', sm: '110px', xs: '110px' }, height: { lg: '50px', md: '40px', sm: '40px', xs: '36px' }, bgcolor: 'white', borderRadius: '10px' }}>

                            <img src={adellogo} style={{ width: '100%', height: '100%' }} />
                        </Box>
                    </Grid>

                    <Grid item xs={3.3} sx={{ display: { lg: 'flex', mf: 'flex', sm: 'none', xs: 'none' }, justifyContent: 'space-between', alignItems: 'flex-start' }}>
                        <Typography sx={{ fontSize: '16px', color: '#eeeeee', fontWeight: 'bold', color: 'white', textShadow: '1px 4px 5px rgba(93,84,84,0.6)', cursor: 'pointer' }} onClick={() => { navigate('/') }}>Home</Typography>
                        <Typography sx={{ fontSize: '16px', color: '#eeeeee', fontWeight: 'bold', color: 'white', textShadow: '1px 4px 5px rgba(93,84,84,0.6)', cursor: 'pointer' }} onClick={() => { navigate('/about') }}>About</Typography>
                        <Typography sx={{ fontSize: '16px', color: '#eeeeee', fontWeight: 'bold', color: 'white', textShadow: '1px 4px 5px rgba(93,84,84,0.6)', cursor: 'pointer' }} onClick={() => { navigate('/contact') }}>Contact</Typography>

                    </Grid>
                    <Grid item xs={3} sx={{ display: { lg: 'flex', md: 'flex', sm: 'none', xs: 'none' }, justifyContent: 'right', alignItems: 'center', p: '0px 15px' }}>
                        <HelpOutlineOutlinedIcon sx={{ color: '#eeeeee', fontSize: '25px', mr: '7px' }} />
                        <LanguageOutlinedIcon sx={{ color: '#eeeeee', fontSize: '25px', mr: '7px' }} />
                        <PersonOutlineOutlinedIcon sx={{ color: '#eeeeee', fontSize: '25px' }} />

                    </Grid>
                    <Grid item xs={3} sx={{ display: { lg: 'none', md: 'none', sm: 'flex', xs: 'flex' }, justifyContent: 'right', alignItems: 'center', p: '0px 15px' }}>
                    <Button variant='contained' sx={{ bgcolor: '#e0e0e0', color: 'white', textTransform: 'capitalize', background: 'rgba(0,0,0,0.5)', fontSize: { lg: '14px', md: '13px', sm: '12px', xs: '11px' } }} onClick={testingHandler}>Testing</Button>
                        <Button sx={{ bgcolor: '#e0e0e0', color: 'white', textTransform: 'capitalize', background: 'rgba(0,0,0,0.5)', fontSize: { lg: '14px', md: '13px', sm: '12px', xs: '11px' } }} onClick={openDrawerHandler}><MenuIcon sx={{ color: 'white' }} /></Button>
                    </Grid>

                </Grid>

            </Grid>

            {/* body  */}

            <Grid container sx={{ mt: { lg: '-154px', md: '-154px', sm: '-100px', xs: '-65px' }, position: 'relative', }}>
                <Grid item xs={12} >
                    <ReactPlayer url={`${adel}`} width={'100%'} height={'100%'} controls={true} playing={true} loop={true} muted={true} volume={0} style={{ border: '1px solid transparent' }} />
                    {/* <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0, 0, 0, 0.4)', }} /> */}

                    <Grid container sx={{ position: 'absolute', top: { lg: '170px', md: '110px', sm: '70px', xs: '30px' }, }}>
                        <Grid item xs={12} data-aos="fade-up">
                            {/* <Typography sx={{ fontWeight:'bold',fontSize: { lg: '45px', md: '40px', sm: '35px', xs: '30px' }, color: '#0091ea', textAlign: 'center',}}>Adel<span style={{color:'black'}}>social</span></Typography> */}
                            {/* <Typography sx={{ color: '#212121', fontSize: { lg: '25px', md: '20px', sm: '17px', xs: '14px' }, textAlign: 'center' }}>Lease starting at $329/mo*</Typography> */}

                        </Grid>
                    </Grid>


                    <Grid container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-end', position: 'absolute', bottom: { lg: '120px', md: '50px', sm: '1px', xs: '0px' }, zIndex: 1 }} data-aos="fade-up">
                        <Grid item xs={12} sx={{ display: { lg: 'flex', md: 'flex', sm: 'flex', xs: 'flex' }, justifyContent: 'center', alignItems: 'center', pb: '27px' }}>
                            <Button variant='contained' sx={{ bgcolor: '#e0e0e0', color: '#424242', fontSize: { lg: '12px', md: '11px', sm: '10px', xs: '8px' }, width: { lg: '265px', md: '200px', sm: '110px', xs: '90px' }, fontWeight: 'bold', mr: '15px', p: '10px', '&:hover': { bgcolor: '#e0e0e0', color: '#424242', } }} onClick={() => { navigate('/contact') }}>Custom Order</Button>
                            <Button variant='contained' sx={{ bgcolor: '#212121', color: 'white', fontSize: { lg: '12px', md: '11px', sm: '10px', xs: '8px' }, width: { lg: '265px', md: '200px', sm: '110px', xs: '90px' }, fontWeight: 'bold', ml: '15px', p: '10px', '&:hover': { bgcolor: '#212121', color: 'white', } }} onClick={() => { navigate('/about') }}>Learn More</Button>

                        </Grid>

                        {/* <Grid item xs={12} sx={{ pb: '17px', display: { lg: 'block', md: 'block', sm: 'none', xs: 'none' } }} >
                            <Typography sx={{ color: 'white', fontSize: '13px', textAlign: 'center' }}>*Excludes taxes and fees with price subject to change. Available in select states. See Details</Typography>
                        </Grid> */}

                    </Grid>
                </Grid>
            </Grid>



            <Grid container sx={{ position: 'relative', mt: '-10px' }}>
                <Grid item xs={12} >
                    <ReactPlayer url={`${mytutor}`} width={'100%'} height={'100%'} controls={false} playing={true} loop={true} muted={true} volume={0} style={{ border: '1px solid transparent' }} />
                    {/* <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0, 0, 0, 0.4)', }} /> */}

                    <Grid container sx={{ position: 'absolute', top: { lg: '170px', md: '110px', sm: '70px', xs: '30px' }, }}>
                        <Grid item xs={12} data-aos="fade-up">
                            {/* <Typography sx={{ fontWeight: 'bold', fontSize: { lg: '45px', md: '40px', sm: '35px', xs: '30px' }, color: 'white', textAlign: 'center' }}>Golden Earth</Typography> */}
                            {/* <Typography sx={{ color: 'white', fontSize: { lg: '25px', md: '20px', sm: '17px', xs: '14px' }, textAlign: 'center' }}>Lease starting at $329/mo*</Typography> */}

                        </Grid>
                    </Grid>



                    <Grid container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-end', position: 'absolute', bottom: { lg: '120px', md: '50px', sm: '1px', xs: '0px' }, zIndex: 1 }} data-aos="fade-up">
                        <Grid item xs={12} sx={{ display: { lg: 'flex', md: 'flex', sm: 'flex', xs: 'flex' }, justifyContent: 'center', alignItems: 'center', pb: '27px' }}>
                            <Button variant='contained' sx={{ bgcolor: '#e0e0e0', color: '#424242', fontSize: { lg: '12px', md: '11px', sm: '10px', xs: '8px' }, width: { lg: '265px', md: '200px', sm: '110px', xs: '90px' }, fontWeight: 'bold', mr: '15px', p: '10px', '&:hover': { bgcolor: '#e0e0e0', color: '#424242', } }} onClick={() => { navigate('/contact') }}>Custom Order</Button>
                            <Button variant='contained' sx={{ bgcolor: '#212121', color: 'white', fontSize: { lg: '12px', md: '11px', sm: '10px', xs: '8px' }, width: { lg: '265px', md: '200px', sm: '110px', xs: '90px' }, fontWeight: 'bold', ml: '15px', p: '10px', '&:hover': { bgcolor: '#212121', color: 'white', } }} onClick={() => { navigate('/about') }}>Learn More</Button>

                        </Grid>

                        {/* <Grid item xs={12} sx={{ pb: '17px', display: { lg: 'block', md: 'block', sm: 'none', xs: 'none' } }} >
                            <Typography sx={{ color: 'white', fontSize: '13px', textAlign: 'center' }}>*Excludes taxes and fees with price subject to change. Available in select states. See Details</Typography>
                        </Grid> */}

                    </Grid>
                </Grid>
            </Grid>

            <Grid container sx={{ position: 'relative', mt: '-10px' }}>
                <Grid item xs={12} >
                    <ReactPlayer url={`${video1}`} width={'100%'} height={'100%'} controls={false} playing={true} loop={true} muted={true} style={{ border: '1px solid transparent' }} />
                    {/* <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0, 0, 0, 0.4)', }} /> */}

                    <Grid container sx={{ position: 'absolute', top: { lg: '170px', md: '110px', sm: '70px', xs: '30px' }, }}>
                        <Grid item xs={12} data-aos="fade-up">
                            {/* <Typography sx={{ fontWeight: 'bold', fontSize: { lg: '45px', md: '40px', sm: '35px', xs: '30px' }, color: 'white', textAlign: 'center' }}>Golden Earth</Typography>
                            <Typography sx={{ color: 'white', fontSize: { lg: '25px', md: '20px', sm: '17px', xs: '14px' }, textAlign: 'center' }}>Lease starting at $329/mo*</Typography> */}

                        </Grid>
                    </Grid>



                    <Grid container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-end', position: 'absolute', bottom: { lg: '120px', md: '50px', sm: '1px', xs: '0px' }, zIndex: 1 }} data-aos="fade-up">
                        <Grid item xs={12} sx={{ display: { lg: 'flex', md: 'flex', sm: 'flex', xs: 'flex' }, justifyContent: 'center', alignItems: 'center', pb: '27px' }}>
                            <Button variant='contained' sx={{ bgcolor: '#e0e0e0', color: '#424242', fontSize: { lg: '12px', md: '11px', sm: '10px', xs: '8px' }, width: { lg: '265px', md: '200px', sm: '110px', xs: '90px' }, fontWeight: 'bold', mr: '15px', p: '10px', '&:hover': { bgcolor: '#e0e0e0', color: '#424242', } }} onClick={() => { navigate('/contact') }}>Custom Order</Button>
                            <Button variant='contained' sx={{ bgcolor: '#212121', color: 'white', fontSize: { lg: '12px', md: '11px', sm: '10px', xs: '8px' }, width: { lg: '265px', md: '200px', sm: '110px', xs: '90px' }, fontWeight: 'bold', ml: '15px', p: '10px', '&:hover': { bgcolor: '#212121', color: 'white', } }} onClick={() => { navigate('/about') }}>Learn More</Button>

                        </Grid>

                        <Grid item xs={12} sx={{ pb: '17px', display: { lg: 'block', md: 'block', sm: 'none', xs: 'none' } }} >
                            {/* <Typography sx={{ color: 'white', fontSize: '13px', textAlign: 'center' }}>*Excludes taxes and fees with price subject to change. Available in select states. See Details</Typography> */}
                        </Grid>

                    </Grid>
                </Grid>
            </Grid>


            <Grid container sx={{ position: 'relative', mt: '-10px' }}>
                <Grid item xs={12} >
                    <ReactPlayer url={`${video2}`} width={'100%'} height={'100%'} controls={false} playing={true} loop={true} muted={true} style={{ border: '1px solid transparent' }} />
                    {/* <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0, 0, 0, 0.4)', }} /> */}

                    <Grid container sx={{ position: 'absolute', top: { lg: '170px', md: '110px', sm: '70px', xs: '30px' }, }}>
                        <Grid item xs={12} data-aos="fade-up">
                            {/* <Typography sx={{ fontWeight: 'bold', fontSize: { lg: '45px', md: '40px', sm: '35px', xs: '30px' }, color: 'white', textAlign: 'center' }}>Golden Earth</Typography>
                            <Typography sx={{ color: 'white', fontSize: { lg: '25px', md: '20px', sm: '17px', xs: '14px' }, textAlign: 'center' }}>Lease starting at $329/mo*</Typography> */}

                        </Grid>
                    </Grid>



                    <Grid container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-end', position: 'absolute', bottom: { lg: '120px', md: '50px', sm: '1px', xs: '0px' }, zIndex: 1 }} data-aos="fade-up">
                        <Grid item xs={12} sx={{ display: { lg: 'flex', md: 'flex', sm: 'flex', xs: 'flex' }, justifyContent: 'center', alignItems: 'center', pb: '27px' }}>
                            <Button variant='contained' sx={{ bgcolor: '#e0e0e0', color: '#424242', fontSize: { lg: '12px', md: '11px', sm: '10px', xs: '8px' }, width: { lg: '265px', md: '200px', sm: '110px', xs: '90px' }, fontWeight: 'bold', mr: '15px', p: '10px', '&:hover': { bgcolor: '#e0e0e0', color: '#424242', } }} onClick={() => { navigate('/contact') }}>Custom Order</Button>
                            <Button variant='contained' sx={{ bgcolor: '#212121', color: 'white', fontSize: { lg: '12px', md: '11px', sm: '10px', xs: '8px' }, width: { lg: '265px', md: '200px', sm: '110px', xs: '90px' }, fontWeight: 'bold', ml: '15px', p: '10px', '&:hover': { bgcolor: '#212121', color: 'white', } }} onClick={() => { navigate('/about') }}>Learn More</Button>

                        </Grid>

                        <Grid item xs={12} sx={{ pb: '17px', display: { lg: 'block', md: 'block', sm: 'none', xs: 'none' } }} >
                            {/* <Typography sx={{ color: 'white', fontSize: '13px', textAlign: 'center' }}>*Excludes taxes and fees with price subject to change. Available in select states. See Details</Typography> */}
                        </Grid>

                    </Grid>
                  
                </Grid>
            </Grid>


            <SecondSideDrawer open={open} setOpen={setOpen} />
            <FirstSideDrawer dOpen={dOpen} setDOpen={setDOpen}/>
        </>
    )
}

export default Portfolio