// import { Routes, Route } from 'react-router-dom';
// import Carousel from './components/Carousel/Carousel';
import Navbar from './components/Navbar/Navbar';
import YachtExperience from './components/YachtExperience/YachtExperience';
import HeroImage from './components/HeroImage/HeroImage';
import ClassicMotorSailingYacht from './components/ClassicMotorSailingYacht/ClassicMotorSailingYacht';

const App = () => (
  // <Routes>
  //   <Route path="/" element={<Carousel />} />
  // </Routes>
  <>
    <Navbar />
    <HeroImage />
    <YachtExperience />
    <ClassicMotorSailingYacht />
  </>
);

export default App;
