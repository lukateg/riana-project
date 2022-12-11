// import { Routes, Route } from 'react-router-dom';
// import Carousel from './components/Carousel/Carousel';
import Navbar from './components/Navbar/Navbar';
import YachtExperience from './components/YachtExperience/YachtExperience';
import HeroImage from './components/HeroImage/HeroImage';
import ClassicMotorSailingYacht from './components/ClassicMotorSailingYacht/ClassicMotorSailingYacht';
import Design from './components/Design/Design';
import InteriorExterior from './components/Interior-Exterior/Interior-Exterior';
import Specifications from './components/Specifications/Specifications';
import Events from './components/Evenets/Events';
import Dinning from './components/Dinning/Dinning';

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
    <Specifications />
    <Events />
    <Dinning />
  </>
);

export default App;
