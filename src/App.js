import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeView from './views/HomeView';
import ContactView from './views/ContactView';
import ProductDetailsView from './sections/ProductDetailsView';
import ProductsView from './views/ProductsView';
import './styles.min.css'
import CategoriesView from './views/CategoriesView';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeView />}/>
        <Route path="contacts" element={<ContactView/>}/>
        <Route path="/products/:name" element={<ProductDetailsView />} />
        <Route path="products" element={<ProductsView/>}/>
        <Route path="categories" element={<CategoriesView/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;