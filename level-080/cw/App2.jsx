import { useState } from "react";
function App(){
    // მდგომარეობა theme ინახავს ფონის ფერს
    const [theme, setTheme] = useState('white');

    // ფუნქცია ცვლის მდგომარეობას: თუ არის white გახდება black, თუ black გახდება white
    function changeTheme(){
    if (theme === 'white'){
        setTheme('black')
    } else {setTheme('white')}
    }
    return (
        <div style={{backgroundColor: theme, height: "100vh"}}>
            <button onClick={changeTheme}>Change Theme</button>
        </div>
    );
}
export default App2;