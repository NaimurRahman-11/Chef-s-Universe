import { useContext } from 'react';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import app from '../../firebase/firebase.config';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const Login = () => {

  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then(result => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch(error => {
        console.log(error);
      })
  }

  const handleGithubSignIn = () => {
    signInWithPopup(auth, githubProvider)
      .then(result => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch(error => {
        console.log(error);
      })
  }


  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/';

  const handleLogin = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then(result => {
        const loggedUser = result.user;
        console.log(loggedUser);
        navigate(from, { replace: true });
      })
      .catch(error => {
        console.log(error);
      })

  }



  return (
    <div className="container mx-auto">
      <div className="row  mt-5 mb-5 makeCenter">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title mb-4">Login</h4>
              <form onSubmit={handleLogin}>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input type="email" className="form-control" id="email" name="email" placeholder="Enter your email" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input type="password" className="form-control" id="password" name="password" placeholder="Enter your password" required />
                </div>
                <small>New Here? <Link to='/register'>Register</Link> Now!</small> <br /> <br />
                <button type="submit" className="btn btn-primary">Login</button> <br /> <br />

                <Link><FaGoogle onClick={handleGoogleSignIn}></FaGoogle></Link>
                <Link className='ms-3'><FaGithub onClick={handleGithubSignIn} ></FaGithub></Link>




              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;