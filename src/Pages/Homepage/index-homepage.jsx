import Backgroundd from '../../Components/Background/background'
import Header from '../../Components/Header/header'
import Footer from '../../Components/Footer/footer'
import {DivBox } from './styles-homepage'


function Homepage() {
    return (
        <DivBox>
            <Backgroundd />
            <Header />
            <Footer />
        </DivBox>
    )
}

export default Homepage