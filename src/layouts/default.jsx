import Home from "./home/index";
import Header from "./header";
import Footer from "./footer";
import Article from "./articles/index";

function LayoutDefault() {
  return (
    <div className="relative min-h-screen" id="default-layout">
      <Header />
      <Home />
      <Article />
      <Footer />
    </div>
  );
}

export default LayoutDefault;
