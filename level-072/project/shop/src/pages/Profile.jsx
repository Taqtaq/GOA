function Profile() {
  const user = JSON.parse(localStorage.getItem("user"));
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  function logout() {
    localStorage.removeItem("isLoggedIn");
    alert("Logged out");
  }

  if (!isLoggedIn) {
    return <h1>Please login first</h1>;
  }

  return (
    <div>
      <h1>Profile</h1>

      <p>Name: {user?.name}</p>
      <p>Email: {user?.email}</p>

      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default Profile;