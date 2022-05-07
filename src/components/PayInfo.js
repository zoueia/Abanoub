
function PayInfo() {
    return (
            <div id="paymentMethod_payment_wrapper">
                <div id="paymentMethod_payment">
                    <span class="the_action" >Choose payment method*</span>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="payment_method" id="card" value="card"></input>
                        <label class="form-check-label" for="card">
                            Cridit Card
                        </label>
                        <div class="chose_this">
                            <div class="input_field">
                                <input type="text" id="card_number" placeholder="card number*"></input>
                                <span class="error" hidden>invalid card number</span>
                            </div>
                            <div class="input_field">
                                <input type="text" id="three_digits" placeholder="the 3 digits displayed in the back of your card*"></input>
                                <span class="error" hidden>incorrect numbers</span>
                            </div>
                            <div class="input_field">
                                <input type="text" id="full_name" placeholder="Full name on the cart*"></input>
                                <span class="error" hidden>incorrect name</span>
                            </div>
                        </div>
                      </div>
                      <div class="form-check">
                        <input class="form-check-input" type="radio" name="payment_method" id="cash" value="cash"></input>
                        <label class="form-check-label" for="cash">
                            Cash
                        </label>
                      </div>
                      <span class="the_action" >enter promo if you have</span>
                    <div class="input_field">
                        <input type="text" id="promo" placeholder="enter promo*"></input>
                        <span class="error" hidden>This field is required please enter shipping address</span>
                    </div>
                </div>
            </div>
    );
  }
  
  export default  PayInfo;