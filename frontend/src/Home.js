import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function Home() {
    return(
        <div className="row justify-content-left-center">
        <div className="container-md mx-auto w-25 p-3 mt-5" style={{background: 'rgb(249, 248, 255)', borderRadius: '10px'}}>

            <form action="" method="post">

            <div className="form-group">
                <input onchange="consoler(document.getElementById('exampleInputEmail1').value)" type="email" className="form-control  mb-3" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email or Phone Number"/>
                <input onchange="consoler(document.getElementById('exampleInputPassword1').value)" type="password" className="form-control mb-3" id="exampleInputPassword1" placeholder="Password"/>
            </div>
        <button onClick={''} type="button" className="btn btn-primary btn-block">Log in</button>
        <hr/>
        <button type="button" className="btn btn-success">Create New Account</button>
        </form>
            </div>
    </div>
    );
}

export default Home;