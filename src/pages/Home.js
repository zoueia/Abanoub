
import Top from '../components/Top';
import Header from '../components/Header';
import CartCard from '../components/CartCard';
import Footer from '../components/Footer';
import Button from '../components/Button';
import Items from '../components/Items';

function Home() {
  return (
    <div className="App">
      <Header/>
      <div id="item_card_wrapper">
        <Items/>
        <Items/>
        <Items/>
        <Items/>
        <Items/>
        <Items/>
      </div>
      <Footer/>
    </div>
  );
}

export default Home;