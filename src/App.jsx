import { Routes, Route } from 'react-router-dom';
import Carousel from './components/Carousel/Carousel';

const App = () => (
  <Routes>
    Cao Luka ovo je nasa prva promena Cao Luka ovo je nasa druga promena ali
    direktno na main
    <h1>Treca promena sa novom granom</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis
      doloremque tenetur in est cumque quia sint minima ratione recusandae quod
      laboriosam nisi nobis dolores at, a consectetur eum dolore maiores.
    </p>
    <h5>poslednja promena aproval</h5>
    <h2>Promena na trecoj grani</h2>
    <h1>Nikijeva nova grana</h1>
    <Route path="/" element={<Carousel />} />
  </Routes>
);

export default App;
