
import { Route, Routes } from 'react-router-dom';
import About from './Pages/About/About';
import Home from './Pages/Home/Home';
import Van from './Pages/Vans/Van/Van';
import "../src/APIs/server";
import VanDetail from './Pages/Vans/VanDetail/VanDetail';
import Layout from './Components/Layout/Layout';
import Income from './Pages/Host/Income/Income';
import Reviews from './Pages/Host/Reviews/Reviews';
import HostLayout from './Components/HostLayout/HostLayout';
import Dashboard from './Pages/Host/Dashboard/Dashboard';
import HostVans from './Pages/Host/HostVans/HostVans';
import HostVanDetails from './Pages/Host/HostVanDetails/HostVanDetails';
import HostVanInfo from './Pages/Host/HostVanInfo/HostVanInfo';
import HostVanPricing from './Pages/Host/HostVanPricing/HostVanPricing';
import HostVanPhotos from './Pages/Host/HostVanPhotos/HostVanPhotos';
import ErrorPage from './Pages/ErrorPage/ErrorPage';
import Login from './Pages/Login/Login';

import Aunthentication from './Components/Aunthentication/Aunthentication';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="vans" element={<Van />} />
          <Route path="vans/:id" element={<VanDetail />} />
          <Route path="login" element={<Login />} />
          
          {/* Protected Routes */}
          <Route element={<Aunthentication />}>
            <Route path="host" element={<HostLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="income" element={<Income />} />
              <Route path="reviews" element={<Reviews />} />
              <Route path="vans" element={<HostVans />} />
              <Route path="vans/:id" element={<HostVanDetails />}>
                <Route index element={<HostVanInfo />} />
                <Route path="pricing" element={<HostVanPricing />} />
                <Route path="photos" element={<HostVanPhotos />} />
              </Route>
            </Route>
          </Route>
          
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
};

export default App;
