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
import { AdelContext } from '../store/Context';
import './SideDrawer.css';

const socialIcons = [{ icon: <InstagramIcon sx={{ color: MAIN_COLOR, '&:hover': { color: MAIN_COLOR } }} />, name: "insta", link: 'https://www.instagram.com/adelsociall/' }, { icon: <FacebookIcon sx={{ color: MAIN_COLOR, '&:hover': { color: MAIN_COLOR } }} />, name: "face", link: 'https://www.facebook.com/AdelSocial/' }, { icon: <TwitterIcon sx={{ color: MAIN_COLOR, '&:hover': { color: MAIN_COLOR } }} />, name: "twit", link: 'https://twitter.com/i/flow/login?redirect_after_login=%2Fadelsocial' }, { icon: <LinkedInIcon sx={{ color: MAIN_COLOR, '&:hover': { color: MAIN_COLOR } }} />, name: "link", link: 'https://www.linkedin.com/company/adelsocial/' }];

const data = [
    { title: 'Services', list: [{ service: 'Whatsapp API', path: 'ADEL' }, { service: 'Bulk Whatsapp', path: 'ADEL' }, { service: 'Bulk Mailer', path: 'ADEL' }, { service: 'Bulk SMS', path: 'ADEL' }] },
    { title: 'Products', list: [{ service: 'Whatsapp Web Panel', path: 'ADEL' }] },
    { title: 'Expertise', list: [{ service: 'Backend', path: '/dotnet' }, { service: 'Frontend', path: '/angular' }, { service: 'App Development', path: '/mobile' }, { service: 'Web Development', path: '/wordpress' }, { service: 'Digital Marketing', path: '/digital' }, { service: 'E-Commerce', path: '/ecommerce' }] }
]


const FirstSideDrawer = ({ dOpen, setDOpen }) => {
    const navigate = useNavigate();
    const { state, dispatch } = React.useContext(AdelContext)

    const handleNavigate = (ele) => {
        if (ele === 'ADEL') {
            window.location.href = "https://sms.adelsocial.com/pricing"
        }
        else {
            navigate(ele)
            window.scrollTo({
                top: 0,
                behavior: "smooth"

            })
        }

        dispatch({
            type: "DRAWER_CLOSED"
        })
    }
    const closeHandler = () => {
        setDOpen(false)
    };



    return (
        <>
            <Drawer
                anchor={'left'}
                open={dOpen}
                onClose={() => { setDOpen(false) }}
                PaperProps={{
                    sx: { width: { lg: '0%', md: '28%', sm: '45%', xs: '80%' }, zIndex: 999999999, margin: 'auto', bgcolor: 'white' }
                }}
            >
                <Grid container >
                    <Grid container sx={{ position: 'sticky', top: '0px', }}>
                        <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'right', alignItems: 'center', p: '4px', bgcolor: MAIN_COLOR }} >
                            <CancelIcon sx={{ color: 'white', fontSize: '35px', cursor: 'pointer' }} onClick={closeHandler} />
                        </Grid>
                        <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', bgcolor: MAIN_COLOR, pb: '15px' }}>
                            <Box sx={{ bgcolor: 'white', width: '240px', height: '60px', borderRadius: '10px' }}>
                                <img src={adellogo} style={{ height: '100%', width: '100%' }} />
                            </Box>

                        </Grid>

                    </Grid>


                    <Grid item xs={12} sx={{ pb: '60px' }}>
                        <Box
                            sx={{ height: '100%', bgcolor: 'white', color: 'white', }} role="presentation" >
                            {data.map((item) => {
                                return <div key={item.title}>
                                    <Box sx={{ p: '5px', bgcolor:MAIN_COLOR, }}>
                                        <Typography textAlign={'center'} variant='h1' sx={{ fontWeight: 900, letterSpacing: '2px', fontSize: '17px' }}>
                                            {item.title}
                                        </Typography>
                                    </Box>
                                    {item.list.map((list) => {
                                        return <Box onClick={() => { handleNavigate(list.path) }} key={list.service} className="controlHoverServicesParent" sx={{ mb: '3px', mt: '3px', cursor: 'pointer', }}>
                                            <Box className="controlHoverServices">
                                                <Typography className='controlHoverServicesText' variant='h1' sx={{ ml: '10px', fontWeight: 500, fontSize: '16px', whiteSpace: 'nowrap' }}>
                                                    {list.service}
                                                </Typography>
                                            </Box>
                                        </Box>
                                    })}

                                </div>
                            })}
                        </Box>
                    </Grid>

                    <Grid item xs={12} sx={{ pb: '60px' }}>

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

export default FirstSideDrawer