import { Card, Container, Row, Col, Image } from "react-bootstrap"
import explainedImg from '../assets/images/reactjs/explained.jpg'
import learningImg from '../assets/images/reactjs/learning.jpg'
import nativeImg from '../assets/images/reactjs/native.jpg'
import quickstartImg from '../assets/images/reactjs/quickstart.jpg'
import reactinactionImg from '../assets/images/reactjs/reactinaction.png'
import theroadtoImg from '../assets/images/reactjs/theroadto.jpg'

const Reactjs = () => {
    return(
        <div>
            <Container>
                <br/>
                <br/>
                <h1 className="text-white" id="reactjs">REACTJS BOOKS</h1>
                <Row>
                    <Col md={4} className="bookWrapper">
                        <Card className="bookImage">
                            <Image src={explainedImg} alt="Dune image" className="images" />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">ANTMAN</Card.Title>
                                    <Card.Text className="text-left">
                                    Lorem Ipsum is simply dummy text of the printing
                                    </Card.Text>
                                    <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="bookWrapper">
                        <Card className="bookImage">
                            <Image src={learningImg} alt="Everything image" className="images"/>
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">AVENGER</Card.Title>
                                    <Card.Text className="text-left">
                                    Lorem Ipsum is simply dummy text of the printing
                                    </Card.Text>
                                    <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="bookWrapper">
                        <Card className="bookImage">
                            <Image src={nativeImg} alt="Infinite image" className="images"/>
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">BATMAN</Card.Title>
                                    <Card.Text className="text-left">
                                    Lorem Ipsum is simply dummy text of the printing
                                    </Card.Text>
                                    <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="bookWrapper">
                        <Card className="bookImage">
                            <Image src={quickstartImg} alt="Joker image" className="images"/>
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">ROBINHOOD</Card.Title>
                                    <Card.Text className="text-left">
                                    Lorem Ipsum is simply dummy text of the printing
                                    </Card.Text>
                                    <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="bookWrapper">
                        <Card className="bookImage">
                            <Image src={reactinactionImg} alt="Lightyear image" className="images"/>
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">SPIDERMAN</Card.Title>
                                    <Card.Text className="text-left">
                                    Lorem Ipsum is simply dummy text of the printing
                                    </Card.Text>
                                    <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="bookWrapper">
                        <Card className="bookImage">
                            <Image src={theroadtoImg} alt="Morbius image" className="images"/>
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">SUPERMAN</Card.Title>
                                    <Card.Text className="text-left">
                                    Lorem Ipsum is simply dummy text of the printing
                                    </Card.Text>
                                    <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Reactjs