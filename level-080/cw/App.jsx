import { useState } from "react"

function App(){
    // მდგომარეობა (state) არის ცვლადი, რომელიც ინახავს მონაცემს და React ავტომატურად აახლებს UI-ს როცა ის იცვლება
    const [count, setCount] = useState(0)
    
    // მდგომარეობის შემცვლელი ფუნქცია (setCount) გამოიყენება მდგომარეობის მნიშვნელობის შესაცვლელად
    // useState hook გამოიყენება ფუნქციურ კომპონენტებში მდგომარეობის შესაქმნელად

    return (
        <div>
            <button onClick={() => setCount(prev => prev + 1)}>CLICK</button>
            <p>{count}</p>
        </div>
    )
}
export default App
