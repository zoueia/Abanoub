
function Delivery() {
    return (
        <div id="deliveryInfo_payment_wrapper">
        <div id="deliveryInfo_payment">
            <span class="the_action" >Please enter your shipping address</span>
            <span id="Required">* Required</span>
            <div class="input_field">
                <input type="text" id="address" placeholder="address*"></input>
                <span class="error" hidden>This field is required please enter shipping address</span>
            </div>
            <div class="input_field">
                <input type="text" id="street_no" placeholder="Street no."></input>
                <span class="error" hidden>numbers only</span>
                <span class="error" hidden>max 5 numbers</span>
            </div>
            <div class="input_field">
                <input type="text" id="landmark" placeholder="Landmark*"></input>
                <span class="error" hidden>This field is required please enter your password</span>
            </div>
            <div id="checkbox">
                <input type="checkbox"></input>
                <span id="quick_delivery">recive order tomorrow with +EGP20 fees</span>
            </div>
            <button id="continue_payment">continue</button>
        </div>
    </div>
    );
  }
  
  export default Delivery;