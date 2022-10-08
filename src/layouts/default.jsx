import Header from "./header";
import Footer from "./footer";
import Hello from "./hello";
import Article from "./article";
import Introduction from "./introduction";

function LayoutDefault() {
  return (
    <div className="min-h-screen" id="default-layout">
      <Header />
      <Hello />
      <Introduction />
      <Article />
      {/* <Footer /> */}
    </div>
  );
}

export default LayoutDefault;
