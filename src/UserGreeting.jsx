const UserGreeting = ({ isLoggedIn, username }) => {

  return isLoggedIn ? (
    <h2 className="welcome-message">Welcome, {username}</h2>
  ) : (
    <h2 className="login-prompt">Please, verify your identity</h2>
  );
};

export default UserGreeting;
