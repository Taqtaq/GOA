import Profile from './Profile'
function App(){
    const handleLogin = () => {
        alert("Successfully logged in");
    };
    return (
        <div>
            <Profile isLoggedin={false}
            name = 'Nika'
            onClick={handleLogin} />
        </div>
    )


}
export default App