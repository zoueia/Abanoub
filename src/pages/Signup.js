
function Signup() {
    return (
        <div id="signup_wrapper">
        <div id="signup">
            <img src="./logo.svg" alt="" class="logo"></img>
            <h1>Sign up</h1>
            <span id="Required">* Required</span>
            <div class="input_field">
                <input type="text" id="username" placeholder="username*"></input>
                <span class="error" hidden>This field is required please enter username</span>
            </div>
            <div class="input_field">
                <input type="text" id="email" placeholder="email*"></input>
                <span class="error" hidden>This field is required please enter your email</span>
            </div>
            <div class="input_field">
                <input type="text" id="password" placeholder="password*"></input>
                <span class="error" hidden>This field is required please enter your password</span>
                <span class="error weak_pw" hidden>very weak password</span>
                <div class="check_pw">
                    <ul>
                        <li id="check_special_char">
                            <img src="./x.svg" alt=""></img>
                            <span class="check" >one special character</span>
                        </li>
                        <li id="check_case">
                            <img src="./x.svg" alt=""></img>
                            <span class="check" >one upper letter</span>
                        </li>
                        <li id="check_min_char">
                            <img src="./x.svg" alt=""></img>
                            <span class="check" >at least 8 characters</span>
                        </li>
                        <li id="check_max_char">
                            <img src="./done.svg" alt=""></img>
                            <span class="check" >maximum 15 character</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div id="signup_check_box">
                <input type="checkbox"></input>
                <span id="recieve_emails">Recieve our new offers and new arrivals</span>
            </div>
            <button id="signup_with_google"><img src="./google-icon.svg" alt=""></img> Signup with google</button>
            <button id="signup_submit">Create account</button>
            <a id="signup_signin">You already have an account? signin</a>
        </div>
    </div>
    );
  }
  
  export default Signup;