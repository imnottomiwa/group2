import logo from './logo.svg';
import './App.css';
import FaqPage from './pages/faq/faq';
import Footer from './footer/footer'

function App() {
  return (
    <div className="Landing-page">
      <header className="landing-header">
          <nav>
              <img src="./image1.png" alt=""/>
            <ul>
              <li><a href="">Home</a></li>
              <li><a href="">FAQ's</a></li>
              <li><a href="">Contact Us</a></li>
              <li><a href="">Login</a></li>
              <li><a href="">Sign Up</a></li>
            </ul>
          </nav>
          <div className='nav_content'> 
          <div className='nav_content_left'>
            <h1>The Diarrhea Clinic</h1>
            <p>
            Designed by creators, for creators. Untitled gives you the guidance, data and innovation you need to sell more and growth your digital business.
            </p>
          </div>
          <div className='nav_content_right'>
          {/* <img className='headerImage' src="./header.webp" alt=""/> */}
            </div>
            
          </div>
      </header>

<FaqPage/>





<Footer/>



    </div>
  );
}

export default App;
