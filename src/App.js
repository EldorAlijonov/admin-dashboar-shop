import './App.css';
import { Navbar, Sidebar } from './components';
import { Navigate, Route, Routes } from "react-router-dom";
import { Doctor, Home, Login, Patient } from './pages';
import Setting from './pages/setting/Setting';
import { useState } from 'react';
const App = () => {
  const [token] = useState('dsadsa')

  return (
    <>{token ?
      <div className="app">
        <Sidebar />
        <div className="appContainer">
          <Navbar />
          <div className="pages">
            <Routes>
              <Route path="/">
                <Route index element={<Home />} />
                <Route path="doctor" element={<Doctor />} />
                <Route path="patient" element={<Patient />} />
                <Route path="setting" element={<Setting />} />
              </Route>
              <Route path='*' element={<Navigate to='/login' />} />
            </Routes>

          </div>
        </div>

      </div>
      : <Routes>
        <Route path="/login" element={<Login />} />
        <Route path='*' element={<Navigate to='/login' />} />

      </Routes>}
    </>
  );
}

export default App;
