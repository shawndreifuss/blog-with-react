import Logo from '../assets/logo.png'

const Footer = () => {
  return (
   <footer>
    <img src={Logo} alt="" />
    <span>
      Made with ❤️ and <b>React.js</b> By Shawn Dreifuss
    </span>
   </footer>
  )
}

export default Footer