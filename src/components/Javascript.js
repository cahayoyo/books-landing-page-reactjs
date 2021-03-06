import { Card, Container, Row, Col, Image } from "react-bootstrap"
import cookbookImg from '../assets/images/javascript/cookbook.jpg'
import designpatternImg from '../assets/images/javascript/designpattern.jpg'
import effectiveImg from '../assets/images/javascript/effective.jpg'
import eloquentImg from '../assets/images/javascript/eloquent.jpg'
import goodpartsImg from '../assets/images/javascript/goodparts.jpg'
import speakingImg from '../assets/images/javascript/speaking.jpg'

const Javascript = () => {
    return(
        <div>
            <Container>
                <br/>
                <br/>
                <h1 className="text-white" id="javascript">JAVASCRIPT BOOKS</h1>
                <Row>
                    <Col md={4} className="bookWrapper"> 
                        <Card className="bookImage">
                            <Image src={cookbookImg} alt="Dune image" className="images"/>
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">JAVASCRIPT COOKBOOK</Card.Title>
                                    <Card.Text className="text-center">by O'REILLY</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="bookWrapper">
                        <Card className="bookImage">
                            <Image src={designpatternImg} alt="Everything image" className="images"/>
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">JAVASCRIPT DESIGN PATTERNS</Card.Title>
                                    <Card.Text className="text-center">by O'REILLY</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="bookWrapper">
                        <Card className="bookImage">
                            <Image src={effectiveImg} alt="Infinite image" className="images"/>
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">EFFECTIVE JAVASCRIPT</Card.Title>
                                    <Card.Text className="text-center">by DAVID HERMAN</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="bookWrapper">
                        <Card className="bookImage">
                            <Image src={eloquentImg} alt="Joker image" className="images"/>
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">ELOQUENT JAVASCRIPT</Card.Title>
                                    <Card.Text className="text-center">by MARIJN HAVERBEKE</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="bookWrapper">
                        <Card className="bookImage">
                            <Image src={goodpartsImg} alt="Lightyear image" className="images"/>
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">JAVASCRIPT THE GOOD PARTS</Card.Title>
                                    <Card.Text className="text-center">by O'REILLY</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="bookWrapper">
                        <Card className="bookImage">
                            <Image src={speakingImg} alt="Morbius image" className="images"/>
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">SPEAKING JAVASCRIPT</Card.Title>
                                    <Card.Text className="text-center">by DR.AXEL RAUSCHMAYER</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Javascript