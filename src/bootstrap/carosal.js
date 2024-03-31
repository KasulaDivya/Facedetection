function Car(){
    return(
        <>
  <div id="demo" className="carousel slide" data-bs-ride="carousel">
    {/* Indicators/dots */}
    <div className="carousel-indicators">
      <button
        type="button"
        data-bs-target="#demo"
        data-bs-slide-to={0}
        className="active"
      />
      <button type="button" data-bs-target="#demo" data-bs-slide-to={1} />
      <button type="button" data-bs-target="#demo" data-bs-slide-to={2} />
    </div>
    {/* The slideshow/carousel */}
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img
          src="https://iso.500px.com/wp-content/uploads/2014/09/2048-13.jpg"
          alt="Los Angeles"
          className="d-block"
          style={{ width: "100%" }}
        />
      </div>
      <div className="carousel-item">
        <img
          src="https://iso.500px.com/wp-content/uploads/2014/09/2048-13.jpg"
          alt="Chicago"
          className="d-block"
          style={{ width: "100%" }}
        />
      </div>
      <div className="carousel-item">
        <img
          src="https://iso.500px.com/wp-content/uploads/2014/09/2048-13.jpg"
          alt="New York"
          className="d-block"
          style={{ width: "100%" }}
        />
      </div>
    </div>
    {/* Left and right controls/icons */}
    <button
      className="carousel-control-prev"
      type="button"
      data-bs-target="#demo"
      data-bs-slide="prev"
    >
      <span className="carousel-control-prev-icon" />
    </button>
    <button
      className="carousel-control-next"
      type="button"
      data-bs-target="#demo"
      data-bs-slide="next"
    >
      <span className="carousel-control-next-icon" />
    </button>
  </div>
  <div className="container-fluid mt-3">
    <h3>Carousel Example</h3>
    <p>
      The following example shows how to create a basic carousel with indicators
      and controls.
    </p>
  </div>
</>

    );
}

export default Car;