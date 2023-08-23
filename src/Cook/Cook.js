import RecipeRow from "./RecipeRow"

const Cook = () => {
    return (  
        <div className="cook">
            <br></br>
            <RecipeRow name="Appetizers" filterType="app"></RecipeRow>
            <br></br>
            <RecipeRow name="Entrees" filterType="entrees"></RecipeRow>
            <br></br>
            <RecipeRow name="Dessert" filterType="dessert"></RecipeRow>
        </div>
    );
}

 
export default Cook;
