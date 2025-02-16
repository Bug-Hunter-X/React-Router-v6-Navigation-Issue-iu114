import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* ... other routes */}
      </Routes>
    </BrowserRouter>
  );
}

// Home.js
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={() => navigate('/about')}>Go to About</button>
    </div>
  );
}

//About.js
function About() {
  return (
    <div>
      <h1>About Page</h1>
    </div>
  );
}

//The solution uses the useNavigate hook from react-router-dom.  This hook provides a function to programmatically navigate to different routes.