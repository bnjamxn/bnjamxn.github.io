import { useParams } from "react-router-dom";
import recipeListJSON from '../data/recipes.json';
import PageNotFound from '../Base/PageNotFound';
import './css/SingleRecipePage.css'
import { Card, Col, Container, Row } from "react-bootstrap";

import {ImSpoonKnife, ImList2, ImClock} from "react-icons/im";

const SingleRecipePage = () => {
    const {id} = useParams();
    
    const recipe = recipeListJSON.find(
        (current) => current.id == id
    )

    if (recipe == undefined){
        return(
            <PageNotFound></PageNotFound>
        )

    }

    else{
        return ( 
            <div className="singleRecipeBase">
                    <Row noGutters={true}>
                        <Col>
                            <div className="card-container">
                            <Card className="bg-white text-white">
                                <Card.Img
                                className="card-image"
                                src={process.env.PUBLIC_URL + "/" + recipe.image}
                                alt="Card image"
                                />
                            </Card>
                            </div>
                        </Col>
                        </Row>

                    <br>
                    </br>

                    <Row noGutters={true}>
                        <Col>
                            <div className="singleRecipeSub">
                                <h1>{recipe.name}</h1>
                                <ul>
                                    {recipe.desc}

                                </ul>
                                
                            </div> 
                        </Col>
                    </Row>    

                    <br></br>

                    <Row noGutters={true}>
                        <Col>
                            <div className="singleRecipeSub">
                                <h1>Ingredients</h1>
                                <ul>
                                    {recipe.ing.map(
                                        current => ( <li>{current}</li> )
                                    )}

                                </ul>
                                
                            </div> 
                        </Col>
                    </Row>    

                    <br></br>
    
                    <Row noGutters={true}>
                        <Col>
                            <div className="singleRecipeSub">
                                <h1>Additional Info</h1>
                                <ul>
                                    <li><b>Prep Time:</b> {recipe.timePrep} minutes</li>
                                    <li><b>Cook Time:</b>  {recipe.timeCook} minutes</li>
                                    <li><b>Total Time:</b> {recipe.timePrep + recipe.timeCook} minutes</li>
                                    <li><b>Service Size:</b> {recipe.servings}</li>
                                    <li><b>Difficulty:</b> {recipe.diff} </li>
                                </ul>
                            </div>
                        </Col>
                    </Row>

                    <br></br>

                    <Row noGutters={true}>
                        <Col>
                            <div className="prepBorder">
                                <div className="singlePrepSub">
                                    <h1>Preparation</h1>
                                    <ol>
                                        {recipe.steps.map(
                                            current => ( <li>{current}</li> )
                                        )}

                                    </ol>
                                </div>
                            </div>
                        </Col>
                    </Row>
            </div>
        );
    }

    
}
 
export default SingleRecipePage;