import { useParams } from "react-router-dom";
import learnListJSON from '../data/learn.json';
import PageNotFound from '../Base/PageNotFound';
import './css/SingleLearn.css'
import { Card, Col, Container, Row } from "react-bootstrap";


const SingleLearn = () => {

    const {id} = useParams();
    
    const learn = learnListJSON.find(
        (current) => current.id == id
    )

    if (learn == undefined){
        return(
            <PageNotFound></PageNotFound>
        )

    }
    else{
        return (
            <div className="SingleLearnMain">
                <br />
                <Container>
                    <Row>
                        <div className="learnTitle">
                            {learn.title}
                        </div>
                    </Row>

                    

                    <Row>
                    <iframe className="videoFrame" width="560" height="315" src={learn.url} 
                        title={learn.title}
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen></iframe>
                    </Row>

                    <br/>

                    <Row>
                        <div className="learnDesc">
                            {learn.desc}
                        </div>
                    </Row>
                </Container>
            </div>

        );

    }
    
}
 
export default SingleLearn;