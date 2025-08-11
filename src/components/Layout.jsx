import { Footer } from "./Footer"
import { Header } from "./Header"


const Layout = (props) => {
  return (
    <div className={props.background}>
      <div className="page-wrapper">
        <Header />
        <main style={{ paddingTop: "64px" }}>
          {props.children}
        </main>
        <Footer />
      </div>
    </div>
  );
};

export { Layout };