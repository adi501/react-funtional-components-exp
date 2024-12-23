import { Outlet, Link } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home"
import Blogs from "./Blogs";
import Contact from "./Contact";
import NoPage from "./NoPage";
const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <Routes>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
      </Routes>
    </>
  )
};
export default Layout;