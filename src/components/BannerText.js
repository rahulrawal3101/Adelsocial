import { Grid, Typography } from '@mui/material';
import angular from '../assets/angular2.png';
import flutter from '../assets/flutter2.png';
import node from '../assets/node.png';
import pythonlogo from '../assets/pythonlogo.svg';
import word from '../assets/word.png';
import { MAIN_COLOR } from '../constant';
import ProposalInput from '../global/ProposalInput';
import '../pages/Homepage.css';
import { useNavigate } from 'react-router-dom';


const BannerText = () => {
    const navigate = useNavigate();

    return (
        <Grid container sx={{ justifyContent: 'space-evenly', flexDirection: 'column', alignItems: 'center', flexWrap: 'nowrap', height: '100%' }}>
           
            <Grid item sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'center' }}>
                <Typography textAlign={'center'} sx={{ userSelect: 'none', width: { lg: '45rem', sm: '30rem', xs: '25rem', md: '50rem' }, color: 'white', fontSize: { lg: '60px', sm: '40px', xs: '30px' } }}>Building Tomorrow's Digital <span style={{ textAlign: 'center', paddingLeft: '10px', color: MAIN_COLOR, fontWeight: 900 }}>Solutions </span>Today</Typography>
                <Typography textAlign={'center'} sx={{ m: '10px 0px 30px 0px', userSelect: 'none', width: { lg: '45rem', sm: '30rem', xs: '20rem', md: '50rem' }, color: 'white', fontSize: { lg: '17px', sm: '14px', xs: '14px' } }}>Welcome to AdelSocial,Empower your digital journey with us. We craft captivating apps and websites, combining cutting-edge technology and creative design. From dynamic mobile apps to sleek websites, we turn your vision into reality. Join us in shaping the future of digital innovation.</Typography>
            </Grid>

            <ProposalInput style={{ m: { lg: 1, xs: 3 }, width: { md: '70%', lg: '50%' }, color: 'white' }} />

            <Grid container sx={{ mt:{xs:"20px",sm:"30px",md:"40px",lg:"60px"}, alignItems: 'flex-end', justifyContent: 'space-evenly',p:"10px" }}>
                <Grid item xs={1.6} lg={1} md={1} sm={1} >
                    <img width={'100%'} height={'100%'} style={{ borderRadius: '20px',cursor:'pointer' }} src={word} alt="pic" onClick={()=>{navigate('/wordpress')}} />
                </Grid>
                <Grid item xs={1.6} lg={1} md={1} sm={1}>
                    <img width={'100%'} height={'100%'} style={{ borderRadius: '20px',cursor:'pointer' }} src={angular} alt="pic" onClick={()=>{navigate('/angular')}} />
                </Grid>
                <Grid item xs={1.6} lg={1} md={1} sm={1}>
                    <img width={'100%'} height={'100%'} style={{ borderRadius: '20px',cursor:'pointer' }} src={flutter} alt="pic" onClick={()=>{navigate('/flutter')}}/>
                </Grid>
                <Grid item xs={1.6} lg={1} md={1} sm={1}>
                    <img width={'100%'} height={'100%'} style={{ borderRadius: '20px',cursor:'pointer' }} src={pythonlogo} alt="pic" onClick={()=>{navigate('/python')}}/>
                </Grid>
                <Grid item xs={1.6} lg={1} md={1} sm={1}>
                    <img width={'100%'} height={'100%'} style={{ borderRadius: '20px',cursor:'pointer' }} src={node} alt="pic" onClick={()=>{navigate('/nodejs')}}/>
                </Grid>
               
            </Grid>
        </Grid>
    )
}

export default BannerText