import '../css/App.css';
import '../css/Mobile.css';

function Navbar() {
  return (
    <header>
    <nav>
        <ul class='nav-bar'>
            <li class='logo' ><a href='#'><i class="fa-regular fa-bell bell"></i>  <span class="logo-name">Ramen</span><span><span class="logo-red">t</span></span></a></li>
            <input type='checkbox' id='check' />
            <span class="menu">
                <li><a href="" >Home</a></li>
                <li><a href="" >About</a></li>
                <li><a href="" >Services</a></li>
                <li><a href="" >Contact</a></li>
                <li><a href="" >Search</a></li>
                <label for="check" class="close-menu"><i class="fas fa-times"></i></label>
            </span>
            <label for="check" class="open-menu"><i class='bx bx-menu-alt-right'></i></label>
            
        </ul>
    </nav>
</header> 
  );
}

export default Navbar;