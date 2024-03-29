import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Container, Grid, OutlinedInput, Paper, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import TopBanner from '../../assets/TopBanner.jpg'
import react from '../../assets/reactjs.png'
import web from '../../assets/web-design.jpg'
import core from '../../assets/corestrenth.jpg'
import ImportantDevicesIcon from '@mui/icons-material/ImportantDevices';
import hiring from '../../assets/hiring-modal-one.jpg'
import hiring2 from '../../assets/hiring-modal-two.png'
import hiring3 from '../../assets/hiring-modal-three.jpg'
import HubIcon from '@mui/icons-material/Hub';
import background8 from '../../assets/background-8.png'
import Diversity1Icon from '@mui/icons-material/Diversity1';
import vector from '../../assets/vacter_right.png'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { MAIN_COLOR } from '../../constant';
import useBottomBar from '../../utils/useBottomBar';
import BottomNavBar from '../../global/BottomNavBar';
import AOS from 'aos';
import 'aos/dist/aos.css';



const ReactFrontend = () => {
    const { state } = useBottomBar()
    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, [])
    return (
        <>
            <Header />
            {state.currentScreenSize < 918 && <BottomNavBar />}
            <Container disableGutters maxWidth="xl">

                {/* new section  */}
                <Grid container>
                    <Grid item xs={12} sx={{ backgroundImage: `url(${react})`, bgcolor: 'rgb(90,90,90)', backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundBlendMode: "multiply", backgroundPosition: 'center', p: { lg: "50px", md: "50px", sm: "30px 15px", xs: "30px 10px" } }}>

                        <Grid container sx={{ p: "10px" }}>
                            <Grid item xs={2} sm={2} md={1} lg={1} >

                            </Grid>

                            <Grid item xs={12} sm={12} md={10} lg={6} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                <Box sx={{ lineHeight: "10", pt: '40px' }}>
                                    <Box>
                                        <Typography variant='h3' sx={{ fontWeight: "800", color: "white", fontSize: { lg: '50px', xs: '30px' } }}>
                                            Hire ReactJs<Box style={{ color: MAIN_COLOR, fontWeight: 900, fontSize: { lg: '80px', xs: '40px' }, backgroundColor: 'black', padding: '0px 0px', borderRadius: '10px', width: 'fit-content' }}>Developers</Box>
                                        </Typography>
                                        <Typography sx={{ color: "white", mt: "20px", fontSize: { lg: "15px", xs: '13px', md: '18px' } }}>
                                            Our ReactJs developers streamline your business with next-gen web app development services.
                                            Take your business to new heights with our ReactJS app development services.
                                        </Typography>
                                        <Box sx={{ mt: "40px", display: "flex", justifyContent: { xs: "center", sm: "center", md: "center", lg: "left" } }}>
                                            <Button variant='contained' sx={{ borderRadius: "25px", p: '10px 30px' }}>
                                                Talk to Us
                                            </Button>
                                        </Box>
                                    </Box>
                                </Box>
                            </Grid>

                            <Grid item xs={12} lg={5} sx={{ mt: { xs: "70px", sm: "70px", md: "70px", lg: "55px" }, display: { xs: "none", sm: "none", md: "none", lg: "block" } }}>
                                <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }}>
                                    <Paper sx={{ height: "fit-content", width: { xs: "90%", sm: "90%", md: "65%", lg: "60%" }, lineHeight: "3.8", p: "0px 14px 14px 14px ", borderRadius: '17px' }}>
                                        <Box sx={{ mt: "-20px", borderRadius: "15px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                            <Box sx={{ p: "15px", borderRadius: "15px", bgcolor: MAIN_COLOR, width: "60%" }}>
                                                <Typography align='center' sx={{ color: "white", whiteSpace: "nowrap", fontSize: { xs: "16px" }, bgcolor: MAIN_COLOR }}>
                                                    Request a free quote
                                                </Typography>
                                            </Box>
                                        </Box>
                                        <OutlinedInput placeholder='Full Name' fullWidth sx={{ height: "40px" }} />
                                        <OutlinedInput placeholder='Buisness Email Address' fullWidth sx={{ height: "40px" }} />
                                        <OutlinedInput placeholder='Phone Number' fullWidth sx={{ height: "40px" }} />
                                        <OutlinedInput placeholder='Oragnisation/Institution' fullWidth sx={{ height: "40px" }} />
                                        <OutlinedInput placeholder='Message' fullWidth sx={{ height: "40px" }} />

                                        <Button variant='contained' sx={{ bgcolor: MAIN_COLOR, fontSize: "17px", borderRadius: "25px", fontWeight: "800", p: "10px 15px 10px 15px", "&:hover": { bgcolor: MAIN_COLOR } }} fullWidth>
                                            submit
                                        </Button>

                                    </Paper>
                                </Box>
                            </Grid>

                        </Grid>

                    </Grid>

                    <Grid item xs={12} lg={5} sx={{ mb: "20px", mt: { xs: "30px", sm: "30px", md: "30px", lg: "35px" }, display: { xs: "block", sm: "block", md: "block", lg: "none" } }}>
                        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }}>
                            <Paper sx={{ height: "fit-content", width: { xs: "80%", sm: "55%", md: "50%", lg: "60%" }, lineHeight: "3.5", p: "0px 14px 14px 14px ", borderRadius: '17px', }}>
                                <Box sx={{ mt: "-20px", borderRadius: "15px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                    <Box sx={{ p: "10px", borderRadius: "15px", bgcolor: MAIN_COLOR, width: "60%" }}>
                                        <Typography align='center' sx={{ color: "white", whiteSpace: "nowrap", fontSize: "15px", bgcolor: MAIN_COLOR }}>
                                            Request a free quote
                                        </Typography>
                                    </Box>
                                </Box>
                                <OutlinedInput placeholder='Full Name' fullWidth sx={{ height: "40px" }} />
                                <OutlinedInput placeholder='Buisness Email Address' fullWidth sx={{ height: "40px" }} />
                                <OutlinedInput placeholder='Phone Number' fullWidth sx={{ height: "40px" }} />
                                <OutlinedInput placeholder='Oragnisation/Institution' fullWidth sx={{ height: "40px" }} />
                                <OutlinedInput placeholder='Message' fullWidth sx={{ height: "40px" }} />

                                <Button variant='contained' sx={{ bgcolor: MAIN_COLOR, fontSize: "17px", borderRadius: "25px", fontWeight: "800", p: "7px 10px", "&:hover": { bgcolor: MAIN_COLOR } }} fullWidth>
                                    submit
                                </Button>

                            </Paper>
                        </Box>
                    </Grid>
                    <Grid item>
                        <Typography variant='h3'></Typography>
                    </Grid>
                </Grid>

                <Grid container sx={{ p: "20px" }}>
                    <Grid item xs={0} sm={1} md={1.5} lg={1}></Grid>
                    <Grid item xs={12} md={5} lg={6}>
                        <Typography sx={{  fontSize: {lg:"35px",md:'33px',sm:'30px',xs:'28px'}, fontWeight: "800", color: MAIN_COLOR }} >
                            Hire ReactJS developer rather than building an in-house team
                        </Typography>
                        <Typography paragraph sx={{ mt: "10px", fontSize: "14px" }}>
                            If you desire to strengthen your business with a robust ecosystem that is light-weight, modern, and extensive, hire React JS developers with a stronghold on this platform. Many businesses are struggling to decide whether to choose an in-house team or hire a dedicated team. We suggest the latter option for businesses looking for a platform to avail the right skills and experience in a cost-effective way.
                        </Typography>
                        <Typography paragraph sx={{ fontSize: "14px" }}>
                            AdelSocial understands the unique requirements and core objectives of our valued clients. Being a top-notch provider, we offer outstanding ReactJS development services to businesses with varied shapes and sizes. Our agile work methodology in addition to extensive skills and experience with JS applications offer an edge over the others. Get the best resources working for your project, only at AdelSocial.
                        </Typography>

                    </Grid>
                    <Grid item xs={12} md={5} lg={4} sx={{ p: "15px" }}>
                        <Box sx={{ height: "100%", borderRadius: "25px", overflow: "hidden" }}>
                            <img src={web} height="100%" width="100%" />
                        </Box>
                    </Grid>
                </Grid>
                <Grid container sx={{ bgcolor: "#002F96", p: "20px" }}>
                    <Grid item xs={0} sm={1} md={1.5} lg={1}></Grid>
                    <Grid item xs={12} md={5} lg={5} sx={{ mt: "15px", display: "flex", justifyContent: "center" }}>
                        <Box sx={{ lineHeight: "2.5" }}>
                            <Typography sx={{ fontSize: {lg:"33px",md:'30px',sm:'28px',xs:'27px'}, fontWeight: "800", color: "white" }}>
                                Our Core Strength
                            </Typography>
                            <Typography sx={{ mt: "10px", fontSize:{lg: "20px",md:'19px',sm:'18px',xs:'17px'}, color: "white", fontWeight: "500" }}>
                                Our tech-driven ReactJS development team consist of :
                            </Typography>
                            <ul>
                                <li style={{ color: "white", fontSize:{lg: "17px",md:'16px',sm:'15px',xs:'15px'} }}>Skilled professionals with extensive knowledge and cross-domain experience.</li>
                                <li style={{ color: "white", fontSize: {lg: "17px",md:'16px',sm:'15px',xs:'15px'}}}>Successful track record with hundreds of ReactJS applications.</li>
                                <li style={{ color: "white", fontSize: {lg: "17px",md:'16px',sm:'15px',xs:'15px'} }}>Varied engagement models to provide hourly, part-time, and full-time options.</li>
                                <li style={{ color: "white", fontSize: {lg: "17px",md:'16px',sm:'15px',xs:'15px'} }}>Committed to deliver quality solutions within expected time frame.</li>

                            </ul>
                            <Button variant='contained' sx={{ mt: "10px", bgcolor: MAIN_COLOR, height: "50px", borderRadius: "25px", fontWeight: "800", p: '10px 30px' }}>
                                Talk to us
                            </Button>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={8} md={5} lg={4.4} sx={{ mt: "15px", display: "flex", justifyContent: "right", p: "15px", }}>
                        <Box sx={{ height: {lg:"320px",md:'300px',sm:'300px',xs:'300px'}, width: "100%", borderRadius: "25px", overflow: "hidden" }}>
                            <img src={core} height="100%" width="100%" style={{objectFit:'cover'}}/>
                        </Box>
                    </Grid>
                </Grid>
                <Grid container sx={{ mt: '20px' }}>
                    <Grid xs={12} item sx={{ display: "flex", justifyContent: "center" }}>
                        <Box sx={{ width: "90%" }}>
                            <Typography sx={{ fontSize: {lg:"35px",md:'33px',sm:'30px',xs:'28px'}, fontWeight: "800", color: MAIN_COLOR,textAlign:{lg:'center',md:'center',sm:'center',xs:'left'} }} >
                                Our Key Differentiators
                            </Typography>
                            <Typography  sx={{ fontSize: { lg: "18px", md: '18px', sm: '16px', xs: '16px' }, fontWeight: "400", fontFamily: "Tisa Sans Pro sans-serif !important",textAlign:{lg:'center',md:'center',sm:'center',xs:'left'} }}>
                                We are a leading ReactJS development company in India that caters services for small to large business enterprises. What makes us stand apart is our competence, commitment, expertise, and experience.
                            </Typography>
                        </Box>
                    </Grid>
                    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", p: "15px" }}>
                        <Grid container xs={12} sm={12} md={10} lg={8} spacing={3}>
                            {
                                [1, 1, 1, 1, 1, 1].map(() => {
                                    return (
                                        <Grid item xs={12} sm={6} md={4} sx={{ mt: "30px" }} >
                                            <Paper sx={{ borderRadius: "35px 10px 35px 10px", p: "10px" }} elevation={3}>
                                                <Box sx={{ bgcolor: "#f4f4f4", p: "13px", borderRadius: "100%", width: "fit-content", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                                    <ImportantDevicesIcon sx={{ fontSize: "35px" }} />
                                                </Box>
                                                <Typography sx={{ fontSize: "23px", fontWeight: "800", color: MAIN_COLOR }} >
                                                    Comprehensive skillset
                                                </Typography>
                                                <Typography sx={{ mt: "10px", fontSize: "14px", fontWeight: "400", fontFamily: "Tisa Sans Pro sans-serif !important" }}>
                                                    Get flawless, high-quality, and optimized codes which are written by expert PHP professionals to ensure that your application runs seamlessly.
                                                </Typography>
                                            </Paper>
                                        </Grid>
                                    )
                                })
                            }

                        </Grid>
                    </Box>
                </Grid>

                <Grid container  sx={{ bgcolor: "black", p: "20px", mt: "20px", overflow: "hidden",}}>
                    <Grid xs={12} item sx={{ display: "flex", justifyContent: "center" }}>
                        <Box sx={{ width: { xs: "100%", sm: "100%", md: "70%", lg: "60%" } }}>
                            <Typography  sx={{ fontSize: { lg: '33px', md: '32px', sm: '30px', xs: '29px' }, fontWeight: "800", color: MAIN_COLOR,textAlign:{lg:'center',md:'center',sm:'center',xs:'left'} }} >
                                Our Hiring Models
                            </Typography>
                            <Typography sx={{ color: "white", fontSize: { lg: "18px", xs: '16px' }, fontWeight: "400", fontFamily: "Tisa Sans Pro sans-serif !important" ,textAlign:{lg:'center',md:'center',sm:'center',xs:'left'}}}>
                                Explore the engagement models we offer to hire Angular JS developer for your project         </Typography>
                        </Box>
                    </Grid>
                    <Grid container sx={{ justifyContent: 'center', alignItems: 'center', }}>
                        <Grid item  lg={8} md={8} sm={8} xs={11} >
                            <Grid container sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
                                <Grid item xs={12} md={5} lg={6} sx={{ mt: "15px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                    <Box sx={{ lineHeight: "2.5", height: "70%", pt: { lg: "20px", md: '20px', sx: '10px', xs: '0px' } }}>
                                        <Typography sx={{ fontSize: { lg: "25px", md: '24px', sm: '23px', xs: '23px' }, fontWeight: "800", color: "white" }}>
                                            Hourly-Basis
                                        </Typography>
                                        <Typography sx={{ fontSize: { lg: "17px", xs: '15px' }, lineHeight: "25px", textAlign: "left", color: "#fff" }}>
                                            As the name suggests, the hourly-basis or pay-as-you-go model offers AngularJS development services on an hourly basis. Billing is done per hour but you have to pay on a monthly basis while you can communicate via phone, email or Skype.
                                        </Typography>

                                    </Box>
                                </Grid>

                                <Grid item data-aos='fade-left' xs={12} md={5} lg={5} sx={{ mt: { lg: "15px", xs: '22px' }, }}>
                                    <Box sx={{ height: "270px", borderRadius: "25px", overflow: "hidden" }}>
                                        <img src={hiring} height="100%" width="100%" style={{objectFit:'cover'}}/>
                                    </Box>
                                </Grid>
                            </Grid>


                        </Grid>

                    </Grid>

                    <Grid container sx={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Grid item lg={8} md={8} sm={8} xs={11} >
                            <Grid container sx={{ justifyContent: 'space-between', alignItems: 'center',flexWrap:'wrap-reverse' }}>
                                <Grid item data-aos='fade-left' xs={12} md={5} lg={5} sx={{ mt: { lg: "15px", xs: '22px' }, display: "flex", }}>
                                    <Box sx={{ height: "270px", width: "100%", borderRadius: "25px", overflow: "hidden" }}>
                                        <img src={hiring2} height="100%" width="100%" style={{objectFit:'cover'}}/>
                                    </Box>
                                </Grid>
                                <Grid item xs={12} md={5} lg={6} sx={{ mt: "15px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                    <Box sx={{ lineHeight: "2.5", height: "70%", pt: { lg: "20px", md: '20px', sx: '10px', xs: '0px' } }}>
                                        <Typography sx={{ fontSize: { lg: "25px", md: '24px', sm: '23px', xs: '22px' }, fontWeight: "800", color: "white" }}>
                                            Hourly-Basis
                                        </Typography>
                                        <Typography sx={{ fontSize: { lg: "17px", xs: '15px' }, lineHeight: "25px", textAlign: "left", color: "#fff" }}>
                                            As the name suggests, the hourly-basis or pay-as-you-go model offers AngularJS development services on an hourly basis. Billing is done per hour but you have to pay on a monthly basis while you can communicate via phone, email or Skype.
                                        </Typography>

                                    </Box>
                                </Grid>

                            </Grid>


                        </Grid>


                    </Grid>

                    <Grid container sx={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Grid item lg={8} md={8} sm={8} xs={11} >
                            <Grid container sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
                                <Grid item xs={12} md={5} lg={6} sx={{ mt: "15px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                    <Box sx={{ lineHeight: "2.5", height: "70%", pt: { lg: "20px", md: '20px', sx: '10px', xs: '0px' } }}>
                                        <Typography sx={{ fontSize: { lg: "25px", md: '24px', sm: '23px', xs: '23px' }, fontWeight: "800", color: "white" }}>
                                            Hourly-Basis
                                        </Typography>
                                        <Typography sx={{ fontSize: { lg: "17px", xs: '15px' }, lineHeight: "25px", textAlign: "left", color: "#fff" }}>
                                            As the name suggests, the hourly-basis or pay-as-you-go model offers AngularJS development services on an hourly basis. Billing is done per hour but you have to pay on a monthly basis while you can communicate via phone, email or Skype.
                                        </Typography>

                                    </Box>
                                </Grid>
                                <Grid item data-aos='fade-left' xs={12} md={5} lg={5} sx={{ mt: { lg: "15px", xs: '22px' }, display: "flex", }}>
                                    <Box sx={{ height: "270px", width: "100%", borderRadius: "25px", overflow: "hidden" }}>
                                        <img src={hiring3} height="100%" width="100%" style={{objectFit:'cover'}}/>
                                    </Box>
                                </Grid>
                            </Grid>


                        </Grid>

                    </Grid>

                </Grid>

                <Grid container>
                    <Grid xs={12} item sx={{ display: "flex", justifyContent: "center", mt:'20px' }}>
                        <Box sx={{ width: "90%" }}>
                            <Typography  sx={{ fontSize: {lg:"35px",md:'33px',sm:'30px',xs:'28px'}, fontWeight: "800", color: MAIN_COLOR,textAlign:{lg:'center',md:'center',sm:'center',xs:'left'} }} >
                                Our Hiring Process
                            </Typography>
                            <Typography  sx={{ fontSize:{lg: "20px",md:'19px',sm:'18px',xs:'16px'}, fontWeight: "400", fontFamily: "Tisa Sans Pro sans-serif !important",textAlign:{lg:'center',md:'center',sm:'center',xs:'left'} }}>
                                Hire React Native Developer And/Or ReactJS Developer In A Few Simple Steps. Discover How Our Process Works.
                            </Typography>
                        </Box>
                    </Grid>
                    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", p: "15px" }}>
                        <Grid container xs={12} sm={12} md={10} lg={8} spacing={3}>
                            {
                                [1, 1, 1, 1].map(() => {
                                    return (
                                        <Grid item xs={12} sm={6} md={6} sx={{ mt: "30px" }}>
                                            <Paper sx={{ borderRadius: "35px 10px 35px 10px", p: "15px" }} elevation={3}>
                                                <Box sx={{ bgcolor: "#f4f4f4", p: "13px", borderRadius: "100%", width: "fit-content", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                                    <HubIcon sx={{ fontSize: "35px" }} />
                                                </Box>
                                                <Typography sx={{ fontSize: "23px", fontWeight: "800", color: MAIN_COLOR }} >
                                                    Comprehensive skillset
                                                </Typography>
                                                <Typography sx={{ mt: "10px", fontSize: "14px", fontWeight: "400", fontFamily: "Tisa Sans Pro sans-serif !important" }}>
                                                    Get flawless, high-quality, and optimized codes which are written by expert PHP professionals to ensure that your application runs seamlessly.
                                                </Typography>
                                            </Paper>
                                        </Grid>
                                    )
                                })
                            }

                        </Grid>
                    </Box>
                </Grid>
                <Grid container sx={{ mt: "20px", overflow: "hidden", backgroundImage: `url(${background8})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", p: "20px" }}>

                    <Grid item xs={12} sm={12} md={11} lg={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                        <Box sx={{ width: { xs: "100%", sm: "100%", md: "80%", lg: "70%" } }}>
                            <Typography sx={{ fontSize: { lg: '33px', md: '30px', sm: '30px', xs: '22px' }, fontWeight: "800", color: MAIN_COLOR }} >
                                Why Choose Us
                            </Typography>
                            <Typography sx={{ fontSize: { lg: "16px", xs: '15px' }, fontWeight: "400", }}>
                                AdelSocial is the best destination to avail Angular web development and mobile development services. Here are a few reasons why you should hire AngularJS developers from us:
                            </Typography>
                        </Box>
                    </Grid>

                    <Grid item xs={0} sm={0} md={1} lg={2}></Grid>
                    <Grid item container xs={12} sm={12} md={12} lg={12} pl={"20px"} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }}  >

                        {
                            [1, 1, 1, 1, 1, 1].map(() => {
                                return (
                                    <Grid container xs={12} sm={12} md={5.1} lg={4.5} sx={{ mt: "25px", }}>

                                        <Box>
                                            <Diversity1Icon sx={{ fontSize: "35px", mr: '10px' }} />
                                        </Box>

                                        <Grid item xs={8} >
                                            <Typography sx={{ color: MAIN_COLOR, fontWeight: "800", fontSize: "19px", lineHeight: "24px", marginBottom: "8px", fontFamily: "Tisa Sans Pro sans-serif !important" }}>
                                                Skill and experience:
                                            </Typography>
                                            <Typography sx={{ fontSize: { lg: "16px", xs: '15px' }, fontWeight: "400", }}>
                                                Our AngularJS team includes seasoned developers with extensive skills and rich experience in the entire JS frameworks.
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                )
                            })
                        }

                    </Grid>
                </Grid>

                <Grid container sx={{ backgroundImage: `url(${vector})`, p: "20px" }}>
                    <Grid item xs={12} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <Typography align='center' sx={{ fontSize: "29px", fontWeight: "800", color: "white" }} >
                            Planning to hire ReactJS developers for your upcoming web development project?
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <Button variant='contained' sx={{ mt: "10px", bgcolor: MAIN_COLOR, height: "50px", borderRadius: "25px", fontWeight: "800", p: '10px 30px' }}>
                            Let,s Talk
                        </Button>
                    </Grid>


                </Grid>
                <Grid container sx={{ pb: "40px", display: "flex", justifyContent: "center" }}>
                    <Box sx={{ width: { xs: "90%", sm: "90%", md: "67%", lg: "67%" },mt:'20px' }}>
                        <Box>
                            <Typography sx={{ fontSize: {lg:"40px", md:'37px',sm:'35px',xs:'30px'}, fontWeight: "800", color: MAIN_COLOR }} >
                                Frequently Asked Questions
                            </Typography>
                        </Box>
                        <Box>
                            <Accordion elevation={0}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                    sx={{ p: "0px" }}
                                >
                                    <Typography sx={{ color: "black", fontSize:{lg: "18px",md:'17px',sm:'17px',xs:'17px'}, fontWeight: "800" }}>
                                        How can I hire a ReactJS developer?
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>

                                        <ul>
                                            <li>Tell us the skills you are looking for your project. </li>
                                            <li>We will schedule a call with our top developer who can understand your requirements and concerns </li>
                                            <li>We assign a dedicated team or individual developer (considering the project demands)  </li>
                                            <li>Get started with your project development in no time.  </li>
                                        </ul>
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>



                            <Accordion elevation={0}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel2a-content"
                                    id="panel2a-header"
                                    sx={{ p: "0px" }}
                                >
                                    <Typography sx={{ color: "black", fontSize:{lg: "18px",md:'17px',sm:'17px',xs:'17px'}, fontWeight: "800" }}>
                                        What if I’m not satisfied with your React solution?
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>

                                        You have the full right to report any kind of dissatisfaction with our solution. Our developers will do their best to resolve the issues to make the solution meet your requirements precisely.

                                    </Typography>
                                </AccordionDetails>
                            </Accordion>


                            <Accordion elevation={0}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel3a-content"
                                    id="panel3a-header"
                                    sx={{ p: "0px" }}
                                >
                                    <Typography sx={{ color: "black", fontSize:{lg: "18px",md:'17px',sm:'17px',xs:'17px'}, fontWeight: "800" }}>
                                        How can I receive updates on my project?
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        We are available on all communication channels such as Microsoft Teams, Google Meet, Zoom Call, Phone, Live Chats, and Emails to keep you informed of the current status of your .NET development project.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        </Box>
                    </Box>
                </Grid>
                <Footer />
            </Container>

        </>
    )
}

export default ReactFrontend