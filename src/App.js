import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeView from './views/HomeView';
import ContactView from './views/ContactView';
import './styles.min.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeView/>}/>
        <Route path="contacts" element={<ContactView/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;