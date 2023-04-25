import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const PageWrapper = ({ children }) => {
  return (
    <div className="mx-auto px-8">
      <div className="flex h-screen flex-col justify-between">
        <Navbar />
        <main className="mb-auto mx-auto">{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default PageWrapper;
