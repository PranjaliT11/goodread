import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";


const Navbar = () => {
    const { numberCart } = useSelector(state => state )

    const navigate = useNavigate();
    const [loggedIn, setLoggedIn] = useState(false)
    useEffect(() => {
        let token = localStorage.getItem('token')
        if (!token) {
            setLoggedIn(false)
        } else {
            setLoggedIn(true)
        }
    }, [loggedIn])

    const onLogoutHandler = () => {
        localStorage.removeItem('token')
        setLoggedIn(false)
        navigate('/login')
    }



    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link class="navbar-brand" to="#">Navbar</Link>
            <button
                class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <Link class="nav-link" to="#">Home <span class="sr-only">(current)</span></Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to="/books">Books</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to="/about">About</Link>
                    </li>

                    <li class="nav-item">
                        <Link className="nav-link" to="/contact">Contact</Link>
                    </li>

                </ul>

                <div class="form-inline my-2 my-lg-0">
                    <Link className="btn btn-primary">
                    Cart<span className="badge badge=light">{numberCart}</span></Link>

                    {
                        loggedIn ? (
                            <Link className="btn btn-outline-success-my-2 my-sm-0" onClick={onLogoutHandler}>Logout
                            </Link>

                        ) : (
                            <Link className="btn btn-outline-success-my-2 my-sm-0" to="/login">LogIn</Link>
                        )
                    }
                </div>
            </div>
        </nav>

    )

}
export default Navbar;