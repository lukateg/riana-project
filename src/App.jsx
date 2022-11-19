import { Routes, Route } from 'react-router-dom';
import Carousel from './components/Carousel/Carousel';

const App = () => (
  <Routes>
    Cao Luka ovo je nasa prva promena Cao Luka ovo je nasa druga promena ali
    direktno na main
    <h1>Treca promena sa novom granom</h1>
    <h2>Promena na trecoj grani</h2>
    <Route path="/" element={<Carousel />} />
  </Routes>
);

export default App;
