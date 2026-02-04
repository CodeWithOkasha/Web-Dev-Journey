import brand_logo from '/images/brand_logo.png'
export default function NavBar()
{
    return(
    
<nav className='nav_container'>
  <div className='brand_logo'>
    <img src={brand_logo} alt="logo" />
  </div>
  <ul className='menu_list'>
    <li>Menu</li>
    <li>Location</li>
    <li>About</li>
    <li>Contact</li>
  </ul>
  <button className='login_btn'>Login</button>
</nav>
    
    );
}