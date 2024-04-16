import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function NavBar() {
    return(
        <div>
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark" style={{background: 'rgb(13, 14, 90)'}}>
                <div className="collapse-md navbar-collapse" id="navbarNavAltMarkup">
                  <div className="navbar-nav">
                    <a className="nav-item nav-link active" href="/"><i className="fa-solid fa-house"></i> Home</a>
                    <a className="nav-item nav-link" href="/Products"> <i className="fa-solid fa-user"></i> Products</a>
                    <a className="nav-item nav-link" href="/Payment"><i className="fa-solid fa-gear"></i> Payment</a>
                  </div>
                </div>
              </nav>
        </header>
        </div>
    );
}

export default NavBar;

// <span className="sr-only">(current)</span>