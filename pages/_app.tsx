import 'tailwindcss/tailwind.css'
import Header from '../components/Header';
import Footer from '../components/Footer';
import 'swiper/swiper.scss';

const MyApp = ({ Component, pageProps }) => {
  return ( 
  <>
    <Header></Header>
    <Component {...pageProps} />
    <Footer></Footer>
  </>
  );
}

export default MyApp
