import React, { useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import "./ViewRecipes.css";
import Swal from 'sweetalert2';
import Rating from 'react-rating';
import { FaRegStar, FaStar } from 'react-icons/fa';


const ViewRecipes = () => {

    const {  } = useParams();
    const recipes = useLoaderData();
    const [disabledButtons, setDisabledButtons] = useState([]);

    const firstRecipe = recipes[0];

    const handleAddToFavorites = (id) => {
        const index = disabledButtons.indexOf(id);
        if (index === -1) {
          Swal.fire({
            title: 'Added to favorites!',
            icon: 'success',
            confirmButtonText: 'OK',
          });
          setDisabledButtons([...disabledButtons, id]);
        }
      };

    return (
        <div className='container mt-5'>

<div className="row">
        <div className="col-12 col-md-6 d-flex align-items-center justify-content-center mb-4 mt-4 mb-md-0">
          <div className="text-center">
                        <h1 className="mb-4">{firstRecipe.name }</h1>
                        <small className="d-block mb-4">{firstRecipe.bio}</small>
                        <p>Total Likes: {firstRecipe.Likes}</p>
                        <p>No. of recipes: {firstRecipe.NoOfRecipes}</p>
                        <p>Years of experince: { firstRecipe.experience}</p>
            
          </div>
        </div>
        <div className="col-12 col-md-6 d-flex align-items-center justify-content-center">
          <img className="img-fluid rounded imgSize" src={firstRecipe.ChefPicture} alt="" />
        </div>
      </div>

            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4 justify-content-center mt-5 mb-5">
                {
                    recipes.map(recipe => (
                        
                        <div className="col" key={recipe._id}>
                            
                            <div className="card cardCenter h-100">
                                
                                <div className="card-body">
                                    <h5 className="card-title mb-3">{recipe.title}</h5>
                                    <p className="card-text">Ingredients: {recipe.Ingredients}</p>
                            <p className="card-text">Cooking Method: {recipe.CookingMethod}</p>
                            <div className='d-flex align-items-center'>
                            <Rating
                              placeholderRating={recipe.rating?.number}
                              readonly
                            emptySymbol={<FaRegStar></FaRegStar>}
                            placeholderSymbol={<FaStar className='text-warning'></FaStar>}
                              fullSymbol={<FaStar></FaStar>}>
                              
                            </Rating>
                            <span className='ms-3 mt-1'>{recipe.rating?.number}</span>
                            </div>
                                    
                                    
                                </div>
                                <div className="card-footer text-center">
                                <button className='btn btn-primary' onClick={() => handleAddToFavorites(recipe._id)} disabled={disabledButtons.includes(recipe._id)}>
                  {disabledButtons.includes(recipe._id) ? 'Added to Favorites' : 'Add to Favorites'}
                </button>
                                </div> 
                            </div> 
                            
                        </div>
                        
                    ))
                    
                }

                
            </div>
        </div>
    );
};

export default ViewRecipes;