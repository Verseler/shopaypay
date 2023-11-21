import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Store from "./pages/Store";
import Home from "./pages/Home";

function App() {
  return (
    <div className="pt-20">
      <Header />
      {/* Main Content */}
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Store" element={<Store />} />
          {/* <Route path="#" element={<Categories />} /> */}
        </Routes>
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
