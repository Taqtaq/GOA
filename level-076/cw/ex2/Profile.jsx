function Profile({isLoggedin, onClick, name}){
    if (!isLoggedin){
        return (
            <div>
                <p>Please login</p>
                <button onClick={onClick}>Login</button>
            </div>
        );
    }
    return <p>Welcome {name}</p>
}
export default Profile;