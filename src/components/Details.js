
function Details() {
    return (
        <div class="dis_page_wrapper">
        <div class="dis_page">
            <div class="photos">
                <img src="./item_image_placeholder_main.png" alt="" class="main_pic"></img>
                <div class="rest_imgs">
                    <img src="./item_image_placeholder_main.png" alt="" tabindex="0"></img><img src="./item_image_placeholder_main.png" alt="" tabindex="0"></img><img src="./item_image_placeholder_main.png" alt="" tabindex="0"></img><img src="./item_image_placeholder_main.png" alt="" tabindex="0"></img>
                </div>
            </div>
            <div class="details111">
                <div class="price_offers">
                    <span class="price">EGP1000</span>
                    <div class="offer">
                        <span>EGP1200</span>
                        <img src="./offer_line.svg" alt=""></img>
                    </div>
                </div>
                <span class="item_title">Christian Dior Rouge Dior Liquid Lip Stain, Matte, 0.2 Ounce<span class="item_dis">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat nisi duis diam tellus cursus neque, eu. Elit dui amet, nisl quis nam. </span></span>
                <button class="rating">
                    <img src="./stars _rating.svg" alt=""></img>
                    <div class="rating_droplist" hidden></div>
                </button>
                <div class="rated_reviews">
                    <span class="people_rated">133 person Rated this item</span>
                    <span class="go_reviews">200 Review</span>
                </div>
                <button class="add_to_cart">
                    <span>Add to Cart</span> 
                    <img src="./add_to_cart_button.svg" alt=""></img>
                </button>
            </div>
            
        </div>
    </div>
    );
  }
  
  export default Details;