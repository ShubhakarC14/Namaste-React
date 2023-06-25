const Title = () => (
    <a href="/">
    <img className="logo" src="https://10619-2.s.cdn12.com/rests/original/340_328462255.jpg" alt="logo" />
    </a>
);
const Header = () => (
    
    <div className="header">
        <Title />
        
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Cart</li>
            </ul>
        </div>
    </div>
    
);

export default Header;
