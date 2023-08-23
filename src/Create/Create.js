import {colourChangeClick} from '../Base/Navbar.js'
import './css/Create.css';
import { Col, Row } from "react-bootstrap";

import {ImSpoonKnife, ImList2, ImClock} from "react-icons/im";
import {IoFastFoodOutline} from "react-icons/io5"

const Create = () => {
    return (  
        <div className="createMain">
            <br />
            <div className="newRecipeTitle">
            New Recipe
            </div>

            <br />
            <div className="createSub">
                <Row noGutters={true}>
                    <Col>
                        <Row>
                            <label>
                                <div className="inputSubHead"><IoFastFoodOutline/> Name:</div>
                                <input className="createName" type="text" width="80px" id="createName" name="name"></input>
                            </label>
                        </Row>

                        <Row>
                            <label>
                                <div className="inputSubHead"><ImList2/> Ingredients:</div>

                                <textarea className="createIngredients" rows="10" cols= "10"  id="createIngredients" name="ingredients"></textarea>
                            </label>
                        </Row>

                        <Row>
                            <label>
                                <div className="inputSubHead"><ImClock/> Additional Information:</div>

                                <textarea className="createAddInfo" rows="10" cols= "10" id="createAddInfo" name="addinfo"></textarea>
                            </label>
                        </Row>

                        
                    </Col>

                    <Col>
                        <label>
                            <div className="inputSubHead"><ImSpoonKnife/> Steps:</div>

                            <textarea className="createPrep" rows="25" cols= "10" id="createPrep" name="preperation"></textarea>
                        </label>
                    </Col>
                </Row>

                <Row noGutters={true}>
                    <input className="createSubmit" type="button" value="Submit" onClick={checkFields}/>
                </Row>
            </div>
        </div>
    );
}

function checkFields() {
    var nameField = document.getElementById('createName');
    var ingredientsField = document.getElementById('createIngredients');
    var addinfoField = document.getElementById('createAddInfo');
    var prepField = document.getElementById('createPrep');

    var check = true;

    if (nameField.value == ""){
        check = false;
        nameField.style.border = "1.25px solid red";
    }

    if (ingredientsField.value == ""){
        check = false;
        ingredientsField.style.border = "1.25px solid red";
    }


    if (addinfoField.value == ""){
        check = false;
        addinfoField.style.border = "1.25px solid red";
    }

    if (prepField.value == ""){
        check = false;
        prepField.style.border = "1.25px solid red";
    }


    if (check){
        alert("Your recipe has been sent for review");
        window.location.href='#/cook';
        colourChangeClick('cookNav');
    }

    else{
        alert("Please fix the offending area(s)");
    }
    
}

export default Create;