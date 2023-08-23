import './css/RecipeRow.css'
import recipeListJSON from '../data/recipes.json'

import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const RecipeRow = (props) => {
    const name = props.name;
    const filterType = props.filterType
    return (  
        <div className="recipeRowMain">
            <div className="rowName">{name}</div>
                <div className="recipeRowSub">
                    {recipeListJSON.filter(
                        function (recipe){
                            if (filterType === "trending"){
                                return recipe.trending;
                            }
                            else if (filterType === "favourite"){
                                return recipe.favourite;
                            }
                            else if (filterType === "app"){
                                return recipe.app;
                            }
                            else if (filterType === "entrees"){
                                return recipe.entrees;
                            }
                            else if (filterType === "dessert"){
                                return recipe.dessert;
                            }
                            else{
                                return true;
                            }
                        }

                    ).map( (recipe) =>(
                        <div className="singleRecipe">
                            <Link to={`/cook/${recipe.id}`}>
                                <Card key={recipe.id} style={{ width: '16 rem' }} >
                                    <Card.Img variant="top" src={  process.env.PUBLIC_URL+"/"+recipe.image} style={{ width: '20rem', height:'15rem' }} />
                                    <Card.Body>
                                        <Card.Title> <div className="recipeCardTitle">{recipe.name} </div> </Card.Title>
                                        <Card.Text>
                                            <div className="recipeCardText">{recipe.prev}</div>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </div>
                    ))}
                </div>
        </div>
    );
}
 
export default RecipeRow;