import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const PageWrapper = ({ children }) => {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0">
      <div className="flex h-screen flex-col justify-between">
        <Navbar />
        <main className="mb-auto">{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default PageWrapper;