
function Items() {
    return (
        <div id="item_card">
            <img src="./item_image_placeholder.jpg" alt="" class="item_image"></img>
            <span class="item_title">Christian Dior Rouge Dior Liquid Lip Stain, Matte, 0.2 Ounce <span class="item_dis">Lorem ipsum dolor sit amet, </span></span>
            <button class="rating">
                <img src="./stars _rating.svg" alt=""></img>
                <div class="rating_droplist" hidden></div>
            </button>
            <div class="price_offers">
                <span class="price">EGP1000</span>
                <div class="offer">
                    <span>EGP1200</span>
                    <img src="./offer_line.svg" alt=""></img>
                </div>
            </div>
            <span class="stock_state">in stock</span>
            <div class="add_this_to_cart">
                <img src="./add_this_to_cart.svg" alt=""></img>
            </div>
        </div>
    );
  }
  
  export default Items;
  