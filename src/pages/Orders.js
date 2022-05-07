
import Top from '../components/Top';
import OrderState from '../components/OrderState';
import FilterState from '../components/FilterState';
import Header from '../components/Header';
import NoOrders from '../components/NoOrders';
import Footer from '../components/Footer';

function Orders() {
  return (
    <div className="App">
      <Header/>
      <Top/>
      <FilterState/>
      <div id="orderStates_wrapper">
         {/* <OrderState/>
         <OrderState/>
         <OrderState/>
         <OrderState/> */}
         <NoOrders/>
      </div>
      <Footer/>
    </div>
  );
}

export default Orders;