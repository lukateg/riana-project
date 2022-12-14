/* eslint-disable no-unused-vars */
// import { Routes, Route } from 'react-router-dom';
import Carousel from './components/Carousel/Carousel';
import Navbar from './components/Navbar/Navbar';
import YachtExperience from './components/YachtExperience/YachtExperience';
import HeroImage from './components/HeroImage/HeroImage';
import ClassicMotorSailingYacht from './components/ClassicMotorSailingYacht/ClassicMotorSailingYacht';
import Design from './components/Design/Design';
import firstImage from './images/_D812016.jpg';
import secondImage from './images/_D811904.jpg';
import thirdImage from './images/_D812026.jpg';
import fourthImage from './images/_D8E9211.jpg';
import InteriorExterior from './components/Interior-Exterior/Interior-Exterior';
import Specifications from './components/Specifications/Specifications';
import Events from './components/Evenets/Events';
import Dinning from './components/Dinning/Dinning';
import Footer from './components/Footer/Footer';
import Layout from './components/Layout/Layout';
import Activities from './components/Activities/Activities';
import YachtStories from './components/YachtStories/YachtStories';

const App = () => (
  // <Routes>
  //   <Route path="/" element={<Carousel />} />
  // </Routes>
  <>
    <Navbar />
    <HeroImage />
    <YachtExperience />
    <ClassicMotorSailingYacht />
    <Design />
    <InteriorExterior />
    <Carousel images={[firstImage, secondImage, thirdImage, fourthImage]} />
    <Specifications />
    <Layout />
    <Events />
    <YachtStories />
    <Dinning />
    <Activities />
    <Footer />
  </>
);

export default App;
