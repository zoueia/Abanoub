
import Top from '../components/Top';
import OrderState from '../components/OrderState';
import FilterState from '../components/FilterState';
import Header from '../components/Header';
import NoOrders from '../components/NoOrders';
import Footer from '../components/Footer';
import PayTop from '../components/PayTop';
import Delivery from '../components/Delivery';
import PayInfo from '../components/PayInfo';
import Button from '../components/Button'
import Varification from '../components/Varification';

function Payment() {
  return (
    <div className="App">
      <Header/>
      <PayTop/>
      {/* <PayInfo/> */}
      <Varification/>
      <Button/>
      {/* <Delivery/> */}
      {/* <Top/> */}
      {/* <FilterState/> */}
      <div id="orderStates_wrapper">
         {/* <OrderState/>
         <OrderState/>
         <OrderState/>
         <OrderState/> */}
         {/* <NoOrders/> */}
      </div>
      <Footer/>
    </div>
  );
}

export default  Payment;