import './App.css';
import LandingPage from './components/LandingPage';
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className='bg-richblue-900 w-full h-full overflow-hidden'>
      <Routes>
          <Route path="*" element={<LandingPage />} />
      </Routes>
    </div>
  );
}

export default App;
