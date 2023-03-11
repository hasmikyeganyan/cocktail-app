import { MenuPage } from './pages/MenuPage';
import './assets/style.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MenuCocktailPage } from './pages/MenuCocktailPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MenuPage />} />
        <Route path='/:id' element={<MenuCocktailPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
