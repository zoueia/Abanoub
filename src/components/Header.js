
function Header() {
    return (
        <div id="header-wrapper">
        <div id="header_permanent">
            <div class="logo">
                <img src="./logo_white.svg" alt="" ></img>
            </div>
            <div class="search_bar">
                <img src="./search_icon.svg" alt="" class="search_icon"></img>
                <input type="text" id="search" placeholder="Search Item/Cat" autocomplete="off"></input>
                <div id="category">
                {/* <img src="./Vector (3).svg" alt="" id="toggle_cat">  */}
                <button>
                {/* <span id="choosed_cat">Women T Shirts</span>  */}
                <span id="choosed_cat">All</span>
                        <img src="./droplist_arrow.svg" alt=""></img>
                    </button>
                    <div class="cat_list">
                        <ul>
                            <li>Women T Shirts</li>
                            <li>men T Shirts</li>
                        </ul>
                    </div>
                </div>
                <div class="search_sugg">
                    <ul>
                        <li>TAILGATE WOMEN'S ROLLING STONES GRAPHIC T-SHIRT</li>
                        <li>AE FLOCKED GRAPHIC T-SHIRT</li>
                    </ul>
                </div>
            </div>
            
            <div class="control">
                <div class="message">
                    <img src="./message_icon.svg" alt=""></img>
                    <div id="message_notification" class="small_font">22</div>
                </div>
                <div class="cart">
                    <img src="./cart_icon.svg" alt=""></img>
                    <div id="cart_notification" class="small_font">22</div>
                </div>
                <div class="profile">M</div>
            </div>
        </div>
        {/* <div id="header_buttons">
            <button id="signup">Signup</button>
            <a class="signin">Have account? sign in</a>
        </div> 

         <div id="header_buttons_user">
            <button id="track_orders_user">Track your orders</button>
            <a class="get_help">Get Help, Send us message</a>
        </div>  */}
        <div id="header_buttons_owner">
            <button id="shop_manager"><img src="./shop_icon.svg" alt=""></img> Shop manager</button>
            <a class="track_orders">Track orders</a>
        </div>
    </div>
    );
  }
  
  export default Header;
  