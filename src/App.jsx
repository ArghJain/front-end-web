import "./App.css";
import Footer from "./footer/Footer";
import Navbar from "./header/Navbar";
import Home from "./home/Home";
import Announcement from "./marquee/Announcement";

import ShareButton from "./article/shareButton/ShareButtons";


function App() {
  return (
    <div>
      <Navbar />
      <Announcement />
      {/* <ShareButton url="https://twitter.com/" socialMedia="twitter" /> */}
      <Home />
      <Footer />
    </div>
  );
}

export default App;
