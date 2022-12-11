/* eslint-disable no-unused-vars */
// import { Routes, Route } from 'react-router-dom';
import Carousel from './components/Carousel/Carousel';
import Navbar from './components/Navbar/Navbar';
import YachtExperience from './components/YachtExperience/YachtExperience';
import HeroImage from './components/HeroImage/HeroImage';
import Design from './components/Design/Design';
import firstImage from './images/_D812016.jpg';
import secondImage from './images/_D811904.jpg';
import thirdImage from './images/_D812026.jpg';
import fourthImage from './images/_D8E9211.jpg';

const App = () => (
  // <Routes>
  //   <Route path="/" element={<Carousel />} />
  // </Routes>
  <>
    <Navbar />
    <HeroImage />
    <YachtExperience />
    <Design />
    <Carousel images={[firstImage, secondImage, thirdImage, fourthImage]} />
  </>
);

export default App;
