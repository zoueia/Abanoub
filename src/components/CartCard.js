
function CartCard() {
    return (
        <div id="cart_card_wrapper">
            <div id="item_card">
            <img src="./item_image_placeholder.jpg" alt="" class="item_image"></img>
            <div class="card_details">
                <span class="item_title">Christian Dior Rouge Dior Liquid Lip Stain, Matte, 0.2 Ounce <span class="item_dis">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacinia malesuada amet proin ut mauris odio in porttitor gravida. Amet dignissim feugiat pulvinar et. </span></span>
                <div class="plus_item">
                    <div class="plus_min">
                        <button class="plus">+</button>
                        <span>1</span>
                        <button class="minus">-</button>
                    </div>
                    <div class="remove_item">
                        <img src="./delete_blue.svg" alt=""></img>
                        <button>Remove from cart</button>
                    </div>
                    <span class="stock_state">in stock</span>
                </div>
            </div>
            <div class="price_offers">
                <span class="price">EGP1000</span>
                <div class="offer">
                    <span>EGP1200</span>
                    <img src="./offer_line.svg" alt=""></img>
                </div>
            </div>
        </div>
        </div>
    );
  }
  
  export default CartCard;