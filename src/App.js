import Navbar from './Base/Navbar';
import Cook from './Cook/Cook';
import Learn from './Learn/Learn';

import PageNotFound from './Base/PageNotFound';

import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import SingleRecipePage from './Cook/SingleRecipePage';
import SingleLearn from './Learn/SingleLearn';
import Create from './Create/Create';
import Footer from './Base/Footer';


function App() {
  return (
      <Router >
        <div className="App">
          <Navbar/> 
          <div className="content">
            <Switch>
              
                <Route exact path="/cook">
                  <Cook />
                </Route>
                <Route exact path="/cook/:id">
                  <SingleRecipePage />
                </Route>

                <Route exact path="/learn">
                  <Learn />
                </Route>
                <Route exact path="/learn/:id">
                  <SingleLearn />
                </Route>

                <Route exact path="/create">
                  <Create />
                </Route>

                <Route exact path="/">
                  <Cook />
                </Route>
                <Route path="*">
                  <PageNotFound />
                </Route>

            </Switch>
            
          </div>
          <br />
          <Footer/>
        </div>
      </Router>


  );


}



export default App;
