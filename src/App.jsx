import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import GoogleAnalytics from './components/GoogleAnalytics';
import Home from './pages/Home/Home';

function App() {
  return (
    <>
      <GoogleAnalytics />
      <Navbar />
      <main>
        <Home />
      </main>
      <Footer />
    </>
  );
}

export default App;
