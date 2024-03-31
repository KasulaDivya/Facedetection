const Contactscreen=()=>{
    var yy = {
        backgroundImage: "url('https://steelstairsolutions.com.au/resources/Contact_Us.jpg')",
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '100vh', // Set height to cover the entire viewport
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#fff', // Set color to ensure text is visible
        textAlign: 'center'
    }
    return(
        <>
        <div style={yy}>
            <div width={800} height={700} style={{marginBottom:"100px"}}>
        <h3>Thank you for your interest in contacting us. We value your feedback, inquiries, and suggestions. Please feel free to reach out to us using the information below or by filling out the contact form.</h3>
        <br></br>
        <h2>Contact Information</h2>
        <h4>Address:5/22/301 Durgam cheruvu,Hyderabad</h4>
        <h4> Phone: 8896713346</h4>
        <h4> Email: himajasri@gmail.com</h4>
        </div>
        </div>
        </>
    )
}

export default Contactscreen