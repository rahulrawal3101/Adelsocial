import { useContext, useEffect } from 'react'
import Header from '../components/Header'
import bg from '../assets/bg.png'
import { Grid, duration } from '@mui/material'
import BannerText from '../components/BannerText'
import { AdelContext } from '../store/Context'
import WhyUs from '../components/WhyUs'
import WebHosting from '../components/WebHosting'
import Footer from '../components/Footer'
import SendProposal from '../components/SendProposal'
import OurExpertise from '../components/OurExpertise'
import SendMessage from '../components/SendMessage'
import './Homepage.css'
import CustomModal from '../global/Modal'
import BottomNavBar from '../global/BottomNavBar'
import useBottomBar from '../utils/useBottomBar'
import AOS from 'aos';
import 'aos/dist/aos.css';
import NewCrousel from '../components/NewCrousel'

const Homepage = () => {
    const { dispatch } = useContext(AdelContext)
    const { state } = useBottomBar()
    // useEffect(() => {
    //     setTimeout(() => {
    //         dispatch({ type: 'MODAL_ACTION', payload: true })
    //     }, 4000)
    // }, [])

    useEffect(()=>{
   AOS.init({duration:2000})
    },[])

    return (
           <>
            {state.currentScreenSize < 918 && <BottomNavBar />}
            <Header/>
            <CustomModal />
            <Grid container className='mainboxHomepage' sx={{ p: '100px', pb: { lg: '30px', xs: '10px', sm: '30px', md: '30px' }, backgroundImage: `url(${bg})`, backgroundPosition: 'center', backgroundSize: 'cover', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                <Grid item sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', height: '100%' }}>
                    <BannerText />
                </Grid>
            </Grid>
            <WhyUs />
            {/* <NewCrousel/> */}
            <SendProposal />
            <OurExpertise />
            <WebHosting />
            <SendMessage />
            <Footer />
           </>
       
    )
}

export default Homepage