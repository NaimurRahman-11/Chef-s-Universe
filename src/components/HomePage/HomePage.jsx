import { useEffect, useState } from "react";
import "./HomePage.css";
import { Form, Link } from "react-router-dom";
import { Button } from "bootstrap";

import LazyLoad from 'react-lazy-load';


const HomePage = () => {

  const [chef, setChef] = useState([]);

  useEffect(() => {
    fetch('https://chef-recipes-server-naimurrahman-11.vercel.app/chef')
      .then(res => res.json())
      .then(data => setChef(data))
      .catch(error => console.error(error))
  }, [])


  return (


    //Banner Section

    <div className="container">
      <div className="row">
        <div className="col-12 col-md-6 d-flex align-items-center justify-content-center mb-4 mt-5 mb-md-0 ">
          <div className="text-center">
            <h1 className="mb-4">"One Step Closer To Your <br /> <span>Favorite Foods!!"</span></h1>
            <small className="d-block mb-4">Explore thousands of world famous chef and their culinary style with unique recipes. Modern age is all about foods and culture. Find your preferred chef master for your own guidance. </small>
            <Link to='/register'><button className="btn btn-primary px-5 py-3 fw-bold">Join Us!</button></Link>
          </div>
        </div>
        <div className="col-12 col-md-6 d-flex align-items-center justify-content-center mb-3">
          <img className="img-fluid" src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/0845c232253239.56766f2d063c9.gif" alt="" />
        </div>
      </div>



      <h1 className="text-center mt-5">Meet Our Chef's</h1>
      <div className="d-flex justify-content-center mt-5">

        <div className="row row-cols-1 row-cols-md-3 mt-3">
          {chef.map(chef => (
            <div key={chef.id} className="col mb-4 ">
              <div className="card cardCenter">
                <LazyLoad>
                  <img src={chef.ChefPicture} className="card-img-top img-fluid" alt="..." />
                </LazyLoad>

                <div className="card-body">
                  <h5 className="card-title mb-3">{chef.name}</h5>

                  <p>Years of Experience: {chef.experience}</p>

                  <p>Number of Recipes: {chef.NoOfRecipes}</p>

                  <p>Likes: {chef.Likes}</p>

                  <Link to={`/chef/${chef.id}`} className='btn btn-primary'>View Recipes</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>


      <div className="rounded bg-light text-center mt-5 p-3">
        <h1>Our Partners</h1>
        <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, nostrum. Ipsam quas et at explicabo quod temporibus cum dolorem reprehenderit.</small>
        <div className="d-flex justify-content-center align-items-center">
          <div className="row">
            <div className="col">
              <img src="https://c.ekstatic.net/ecl/logos/skywards/partners/le-meridien-logo-275x175.png" alt="" />

            </div>
            <div className="col">
              <img src="https://c.ekstatic.net/ecl/logos/skywards/partners/le-meridien-logo-275x175.png" alt="" />
            </div>
          </div>


        </div>

      </div>



      <section className="container mt-5 mb-5">
        <div className="text-center mb-4">
          <img src="https://cdn.dribbble.com/users/242557/screenshots/6134238/untitled-2.gif" alt="" className="size img-fluid" />
          <h1>Subscribe To Us</h1>
          <small>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt tempore est debitis non nesciunt velit, modi laborum, magnam et illo repudiandae. Iste ea iusto error ipsa ipsam cupiditate consequuntur maxime!</small>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="mb-5 text-center">
              <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
              <button className="btn btn-primary mt-3">Subscribe</button>


            </div>
          </div>
        </div>
      </section>

    </div>



  );
};

export default HomePage;