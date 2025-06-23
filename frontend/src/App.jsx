import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import CreateAccount from './pages/CreateAccount.jsx';
import PasswordReset from "./pages/Passwordreset.jsx";
import DedicatedServerindia from "./pages/DedicatedServerindia.jsx";
import DedicatedServerforeign from "./pages/DedicatedServerforeign.jsx";
import Vpsindia from "./pages/Vpsindia.jsx";
import Vpsforeign from "./pages/Vpsforeign.jsx"
import Cloudindia from "./pages/Cloudindia.jsx";
import Cloudforeign from "./pages/Cloudforeign.jsx";
import Googleworkspace from "./pages/Googleworkspace.jsx";
import License from "./pages/License.jsx";
import About from "./pages/About.jsx";
import SharedHostingpage from "./Products/SharedHostingpage.jsx";
import ResellerHostingPage from "./ResellerHosting/ResellerHosting.jsx";
import PythonHostingPage from "./PythonHosting/PythonHosting.jsx";
import ForexHosting from "./ForexHosting/ForexHosting.jsx";
import BulkMail from "./BulkMail/BulkMail.jsx";


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/createaccount" element={<CreateAccount />} />
          <Route path="/passwordreset" element={<PasswordReset />} />
          <Route path="/shared-hosting" element={<SharedHostingpage />} />
          <Route path="/reseller-hosting" element={<ResellerHostingPage />} />
          <Route path="/python-hosting" element={<PythonHostingPage />} />
          <Route path="/forex-servers" element={<ForexHosting />} />
          <Route path="/dedicatedserver/india" element={<DedicatedServerindia />} />
          <Route path="/dedicatedserver/foreign" element={<DedicatedServerforeign />} />
          <Route path="/vps/india" element={<Vpsindia />} />
          <Route path="/vps/foreign" element={<Vpsforeign />} />
          <Route path="/cloud/india" element={<Cloudindia />} />
          <Route path="/cloud/foreign" element={<Cloudforeign />} />
          {/* <Route path="/proxy-servers" element={<ProxyServers />} /> */}
          <Route path="/bulk-email" element={<BulkMail />} />
          <Route path="/googleworkspace" element={<Googleworkspace />} />
          <Route path="/license" element={<License />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;