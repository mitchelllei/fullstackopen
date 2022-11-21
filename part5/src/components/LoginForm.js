
const LoginForm = ({ handleLogin,
  handleUsernameChange,
  handlePasswordChange,
  username,
  password }) => {

  return(
    <form onSubmit={handleLogin}>
      <div>
        username
        <input
          id = "username"
          type="text"
          value={username}
          name="Username"
          onChange={handleUsernameChange}
        />
      </div>
      <div>
        password
        <input
          id = "password"
          type="password"
          value={password}
          name="Password"
          onChange={handlePasswordChange}
        />
      </div>
      <button id = "login_button" type="submit">login</button>
    </form>

  )    }
export default LoginForm