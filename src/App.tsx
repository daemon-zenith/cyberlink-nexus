import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import ThankYou from './pages/ThankYou';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="blog" element={<Blog />} />
        <Route path="thank-you" element={<ThankYou />} />
      </Route>
    </Routes>
  );
}

export default App;