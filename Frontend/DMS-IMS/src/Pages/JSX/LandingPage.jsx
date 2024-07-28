import React from "react";
import '../CSS/LandingPage.css';
import { Link } from 'react-router-dom';
import Image from '../../assets/LandingPageImage.png';
import Logo from '../../assets/IMSLogo.png';

const LandingPage = () => {
    const [ref, setRef] = React.useState('/login');
    React.useEffect(() => {
        if (localStorage.getItem('success') === "true") {
            setRef('/dashboardhod');
        }
    }, []);
    return (
        <div className="background position-relative vh-100 overflow-hidden">
            <div className="img position-absolute w-100 h-100">
                <img src={Image} alt="image" className="img-fluid h-100 w-100" style={{ objectFit: 'cover' }}></img>
            </div>
            <div className="overlay position-absolute w-100 h-100" style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}></div>
            <div className="container d-flex justify-content-center align-items-center position-absolute top-50 start-50 translate-middle">
                <div className="card p-4 shadow-lg" style={{ maxWidth: '400px', width: '100%' }}>
                    <div className="card-body text-center">
                        <img src={Logo} alt="logo" className="h-50 w-50"></img>
                        <h1 className="card-title mb-4">Course Outcome Management System</h1>
                        <p className="card-text mb-4 text-muted">IMS Engineering College, Ghaziabad</p>
                        <div className="d-flex justify-content-center">
                            <Link to={ref} className="btn btn-primary btn-lg custom-btn">Login</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
