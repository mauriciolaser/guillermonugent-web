import Navbar from './components/Navbar/Navbar';
import Banner from './components/Banner/Banner';
import Footer from './components/Footer/Footer';
import GoogleAnalytics from './components/GoogleAnalytics';

function App() {
  return (
    <>
      <GoogleAnalytics />
      <Navbar />
      <main>
        <Banner />
      </main>
      <Footer />
    </>
  );
}

export default App;
