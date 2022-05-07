
function OrderState() {
    return (
<div id="order_state_wrapper">
        <ul id="order_state">
            <li id="Order_status"><span>Order status</span><span class="the_value">in the way</span></li>
            <li id="Order_date"><span>Order status</span><span class="the_value">in the way</span></li>
            <li id="Payment">
                Payment <button tabindex="0"><img src="./small_arrow.svg" alt=""></img></button>
                <ul>
                    <li id="payment_method"><span>payment method</span><span class="the_value">cash</span></li>
                    <li id="Items_price"><span>Items price</span><span class="the_value">1450EGP</span></li>
                    <li id="shipping_fees"><span>shipping fees</span><span class="the_value">50EGP</span></li>
                    <li id="total"><span>total</span><span class="the_value">1500EGP</span></li>
                </ul>
            </li>
            <li id="items">
                item <button tabindex="0"><img src="./small_arrow.svg" alt=""></img></button>
                <ul>
                    <li class="item"><span>the name of this item</span><span class="the_value">the price</span></li>
                    <li class="item"><span>the name of this item</span><span class="the_value">the price</span></li>
                </ul>
            </li>
        </ul>
        <button id="cancle_order">Cancel this order</button>
    </div>
    );
  }
  
  export default  OrderState;