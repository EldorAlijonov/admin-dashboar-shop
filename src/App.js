import './App.css';
import { Navbar, Sidebar } from './components';
import { Route, Routes } from "react-router-dom";
import { Doctor, Home, Login, Patient } from './pages';
import Setting from './pages/setting/Setting';
const App = () => {
  return (
    <div className="app">
      <Sidebar />
      <div className="appContainer">
        <Navbar />
        <div className="pages">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/">
              <Route index element={<Home />} />
              <Route path="doctor" element={<Doctor />} />
              <Route path="patient" element={<Patient />} />
              <Route path="setting" element={<Setting />} />
            </Route>
          </Routes>

        </div>
      </div>

    </div>
  );
}

export default App;
