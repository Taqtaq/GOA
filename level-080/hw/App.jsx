import { useState } from "react"

function App(){

    // მდგომარეობა რომელიც ინახავს მომხმარებელი შესულია თუ არა
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    // ფუნქცია რომელიც მომხმარებელს "ლოგინს" უკეთებს
    function login(){
        setIsLoggedIn(true)
    }

    // ფუნქცია რომელიც მომხმარებელს "გამოიყვანს" ანგარიშიდან
    function logout(){
        setIsLoggedIn(false)
    }


    // მდგომარეობა რომელიც აკონტროლებს ტექსტი ჩანს თუ არა
    const [isVisible, setIsVisible] = useState(false)

    function showName(){

        if(isVisible === false){
            setIsVisible(true)
            alert("Hello Nino")
        }else{
            setIsVisible(false)
        }

    }

    return(
        <div>

            <h2>
                {isLoggedIn ? "Welcome User" : "Please Log in to your account"}
            </h2>

            <button onClick={login}>
                Log in to my account
            </button>

            <button onClick={logout}>
                Logout
            </button>


            <hr/>

            <button onClick={showName}>
                Show your name
            </button>

            {!isVisible && (
                <p>Click the button to see the secret message</p>
            )}

        </div>
    )
}

export default App