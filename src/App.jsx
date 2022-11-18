import { Routes, Route } from 'react-router-dom';
import Carousel from './components/Carousel/Carousel';

const App = () => (
  <Routes>
    <Route path="/" element={<Carousel />} />
  </Routes>
);

export default App;
