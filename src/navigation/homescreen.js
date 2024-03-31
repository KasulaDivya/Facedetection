
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


const Homescreen=()=>{
    const linkStyle = {
        color: '#fff',
        marginRight: '50px',
        textDecoration: 'none', // Remove underline
    fontSize: '1.2rem',
    
    
    
    };
    var tt={
        backgroundColor : "skyblue"
    }
    return(
        <>
        <div style={tt}>
        <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home" style={{fontSize:"28px"}}>𝑴𝒊𝒏𝒊𝒔𝒉𝒐𝒑𝒑𝒊𝒏𝒈</Navbar.Brand>
          <Nav className="me-auto">
            <Link to={"/"} style={linkStyle} >Home</Link>
            <Link to={"/about"} style={linkStyle}>About</Link>
            <Link to={"/contacts"} style={linkStyle}>Contact</Link>
            <Link to={"/Login"} style={linkStyle}>Login</Link>
            <Link to={"/setting"} style={linkStyle}>setting</Link>
          </Nav>
        </Container>
      </Navbar>
      <br></br>
      <center><h1>𝔀𝓮𝓵𝓬𝓸𝓶𝓮 𝓽𝓸 𝓸𝓷𝓵𝓲𝓷𝓮 𝓼𝓱𝓸𝓹𝓹𝓲𝓷𝓰..!</h1>
      <br></br>
      <img src="https://business.ebanx.com/hubfs/how-to-create-an-online-store-and-successfully-launch-it.jpg" alt="images" width={1600} height={600} style={{borderRadius:"10px"}}></img></center>
      </div>
    </>
    )
}

export default Homescreen