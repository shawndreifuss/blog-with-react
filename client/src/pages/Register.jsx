import { Link } from "react-router-dom"


const Register = () => {
  return (
   <div className="auth">
    <h1> Register </h1>
    <form >
      <input required type='text' placeholder='username' />
      <input required  type='text' placeholder='email' />
      <input required  type='text' placeholder='password' />
      <button>Login</button>
      <p>This is an error </p>
      <span>Have an account? <Link to='/login'>Register</Link></span>
    </form>
   </div>
  )
}

export default Register