import learnListJSON from '../data/learn.json'
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './css/LearnCol.css';

const LearnCol = (props) => {
    const name = props.name;
    return ( 
        <div className="LearnColMain">
            <br></br>
            <div className="colName">{name}</div>
            <div className="LearnColSub">
                {learnListJSON.map( (item) =>(
                    <div className="singleLearn">
                        <Link to={`/learn/${item.id}`}>
                            <Card key={item.id} >
                                <Card.Body>
                                    <Card.Title> <div className="learnCardTitle">{item.title}</div> </Card.Title>
                                    <Card.Text>
                                        <div className="learnCardText">{item.desc}</div>
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
 
export default LearnCol;