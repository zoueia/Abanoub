
function Signin() {
  return (
    <div id="signin_wrapper">
        <div id="signin">
            <img src="./logo.svg" alt="" class="logo"></img>
            <h1>Hello, Login</h1>
            <span id="Required">* Required</span>
            <div class="input_field">
                <input type="text" id="email" placeholder="email*"></input>
                <span class="error" hidden>This field is required please enter your email</span>
            </div>
            <div class="input_field">
                <input type="text" id="password" placeholder="password*"></input>
                <span class="error weak_pw" hidden>incorrect password</span>
            </div>
            <a id="forgot_pw">Forgot your password?</a>
            <button id="signin_with_google"><img src="./google-icon.svg" alt=""></img> Signin with google</button>
            <button id="signin_submit">Login</button>
            <a id="signin_signup">You don't have an account? signup</a>
        </div>
    </div>
  );
}

export default Signin;
