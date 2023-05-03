import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';
import './Register.css'

const Register = () => {

    const { creatUser } = useContext(AuthContext);
    const [loading, setLoading] = React.useState(false)
    const navigate = useNavigate()
    const handleRegister = event => {
        event.preventDefault();
        setLoading(true)
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photoURL = form.photoURL.value;

        creatUser(email, password)
            .then(result => {
                const createdUser = result.user;
                console.log(createdUser);
                form.reset();
                setLoading(false)

                navigate('/')

            })
            .catch(error => {
                setLoading(false)

                console.log(error);
            })

    }

    return (
        <div className="container mx-auto">
            <div className="row mt-5 mb-5 makeCenter">
                {loading ? <p>loading.....</p> :
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title mb-4">Register</h4>
                                <form onSubmit={handleRegister}>
                                    <div className="mb-3">
                                        <label htmlFor="name" className="form-label">Name</label>
                                        <input type="text" className="form-control" id="name" name="name" placeholder="" required />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="email" className="form-label">Email</label>
                                        <input type="email" className="form-control" id="email" name="email" placeholder="Enter your email" required />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="password" className="form-label">Password</label>
                                        <input type="password" className="form-control" id="password" name="password" placeholder="Enter your password" required />
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="photoURL" className="form-label">Photo URL</label>
                                        <input type="text" className="form-control" id="photoURL" name="photoURL" placeholder="" required />
                                    </div>
                                    <small>Already registered? <Link to='/login'>Login</Link> Now!</small> <br /> <br />
                                    <button type="submit" className="btn btn-primary">Submit</button>


                                </form>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </div>
    );
};

export default Register;