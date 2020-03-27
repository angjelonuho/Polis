import React from 'react';
import {getPosition} from './weatherLocationComponent';

// REACT - BOOTSRAP
import Modal from 'react-bootstrap/Modal';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import Tab from 'react-bootstrap/Tab';
import Nav from 'react-bootstrap/Nav';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Media from 'react-bootstrap/Media';
import ListGroup from 'react-bootstrap/ListGroup';


const API_KEY = 'AIzaSyDayFhaalLtdI4xW1DzP2SSPFU3jXHvEOw';


//Place details
const nameTitle = [];
const address = [];
const phoneNumber = [];
const rating = [];
const userRatingTotal = [];
const website = [];
const images = [];

//Place reviews
const reviewsName = [];
const reviewsPhoto = [];
const reviewsRating = [];
const reviewsTime = [];
const reviewsText = [];



export default class GenerateBuildings extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showModal1: false,
      showModal2: false,
      showModal3: false,
      showModal4: false,
      showModal5: false,
      showModal6: false,
      showModal7: false,
      showModal8: false,
      showModal9: false,
      showModal10: false,
      showModal11: false,
      showModal12: false,
      showModal13: false,
      showModal14: false,
      showModal15: false,
      showModal16: false,
      showModal17: false,
      showModal18: false,

    };

  }

  coordinates = () => {
    getPosition()
    .then( position => {
      this.getPlaces(position.coords.latitude, position.coords.longitude);
    })
    .catch(err => {
      this.setState({ errorMessage: err.message });
    });
  }

  componentDidMount() {
    this.coordinates();
  }

  getPlaces = async (latitude, longitude) => {

    const api_callCafe = await fetch(`/maps/api/place/nearbysearch/json?location=${latitude},${longitude}&radius=1500&type=cafe&key=${API_KEY}`);
    const dataCafe = await api_callCafe.json();

    const api_callRestaurant = await fetch(`/maps/api/place/nearbysearch/json?location=${latitude},${longitude}&radius=1500&type=restaurant&key=${API_KEY}`);
    const dataRestaurant = await api_callRestaurant.json();

    const api_callBar = await fetch(`/maps/api/place/nearbysearch/json?location=${latitude},${longitude}&radius=1500&type=bar&key=${API_KEY}`);
    const databar = await api_callBar.json();

    let arrayPlaceIds = [];

    for (let plc = 0; plc <= 5; plc++) {
      //Cofe push
      arrayPlaceIds.push(dataCafe.results[plc].place_id);
      //Restorant push
      arrayPlaceIds.push(dataRestaurant.results[plc].place_id);
      //Bar push
      arrayPlaceIds.push(databar.results[plc].place_id);
    }

    this.getPlacesDetails(arrayPlaceIds);

  }

  getPlacesDetails = async (arrayPlaceIds) => {

    let api_Details = [];
    let DeData = [];
    let arrayImageCodes = [];

    for (let i = 0; i <= 17; i++) {

      api_Details = await fetch(`/maps/api/place/details/json?place_id=${arrayPlaceIds[i]}&key=${API_KEY}`);
      DeData = await api_Details.json();

      nameTitle.push(DeData.result.name);
      address.push(DeData.result.vicinity);
      phoneNumber.push(DeData.result.international_phone_number);
      rating.push(DeData.result.rating);
      userRatingTotal.push(DeData.result.user_ratings_total);
      website.push(DeData.result.website);


      for (let x = 0; x <= 4; x++) {
        if (DeData.result.hasOwnProperty('reviews') && DeData.result.reviews[x] !== undefined) {
          reviewsName.push(DeData.result.reviews[x].author_name);
          reviewsText.push(DeData.result.reviews[x].text);
          reviewsPhoto.push(DeData.result.reviews[x].profile_photo_url);
          reviewsTime.push(DeData.result.reviews[x].relative_time_description);
          reviewsRating.push(DeData.result.reviews[x].rating);

        } else {
          x++;
        }
      }

      for (let y = 0; y <= 3; y++) {
        if (DeData.result.hasOwnProperty('photos') && DeData.result.photos[y] !== undefined) {
          arrayImageCodes.push(DeData.result.photos[y].photo_reference);
        } else {
          y++;
        }
      }
    }
    
    this.getPlacesImageCodes(arrayImageCodes);
  }

  getPlacesImageCodes = (arrayImageCodes) => {

    for (let g= 0; g <= arrayImageCodes.length; g++) {
      images.push('/maps/api/place/photo?maxwidth=400&maxheight=400&photoreference=' + arrayImageCodes[g] + '&key=' + API_KEY);
    }
    
  }

  ratingReview = reviewNumb => {

    let stars;

    switch (reviewsRating[reviewNumb]) {
      case 1:
        stars =
          <span>
            <span className="float-right reviewStarStatic reviewStar">&#9733;</span>
            <span className="float-right reviewStarStatic">&#9733;</span>
            <span className="float-right reviewStarStatic">&#9733;</span>
            <span className="float-right reviewStarStatic">&#9733;</span>
            <span className="float-right reviewStarStatic">&#9733;</span>
          </span>;
        break;

      case 2:
        stars =
          <span>
            <span className="float-right reviewStarStatic reviewStar">&#9733;</span>
            <span className="float-right reviewStarStatic reviewStar">&#9733;</span>
            <span className="float-right reviewStarStatic">&#9733;</span>
            <span className="float-right reviewStarStatic">&#9733;</span>
            <span className="float-right reviewStarStatic">&#9733;</span>
          </span>;
        break;
      case 3:
        stars =
          <span>
            <span className="float-right reviewStarStatic reviewStar">&#9733;</span>
            <span className="float-right reviewStarStatic reviewStar">&#9733;</span>
            <span className="float-right reviewStarStatic reviewStar">&#9733;</span>
            <span className="float-right reviewStarStatic">&#9733;</span>
            <span className="float-right reviewStarStatic">&#9733;</span>
          </span>;
        break;
      case 4:
        stars =
          <span>
            <span className="float-right reviewStarStatic reviewStar">&#9733;</span>
            <span className="float-right reviewStarStatic reviewStar">&#9733;</span>
            <span className="float-right reviewStarStatic reviewStar">&#9733;</span>
            <span className="float-right reviewStarStatic reviewStar">&#9733;</span>
            <span className="float-right reviewStarStatic">&#9733;</span>
          </span>;
        break;
      case 5:
        stars =
          <span>
            <span className="float-right reviewStarStatic reviewStar">&#9733;</span>
            <span className="float-right reviewStarStatic reviewStar">&#9733;</span>
            <span className="float-right reviewStarStatic reviewStar">&#9733;</span>
            <span className="float-right reviewStarStatic reviewStar">&#9733;</span>
            <span className="float-right reviewStarStatic reviewStar">&#9733;</span>
          </span>;
        break;
      default:
        stars =
          <span>
            <span className="float-right reviewStarStatic">&#9733;</span>
            <span className="float-right reviewStarStatic">&#9733;</span>
            <span className="float-right reviewStarStatic">&#9733;</span>
            <span className="float-right reviewStarStatic">&#9733;</span>
            <span className="float-right reviewStarStatic">&#9733;</span>
          </span>;
    }

    return stars;

  }

  placeRating = ratingNum => {
  
    let colors;

    switch (Math.trunc(rating[ratingNum])) {
      case 1:
        colors = '0px 0px 11px 3px rgba(138,138,138,1)'
        break;

      case 2:
        colors = '0px 0px 7px 2px rgba(0,128,0,1)'

        break;
      case 3:
        colors = '0px 0px 7px 2px rgba(0,85,255,1)'
        
        break;
      case 4:
        colors = '0px 0px 7px 2px rgba(77,1,120,1)'
        
        break;
      case 5:
        colors = '0px 0px 7px 2px rgba(255,215,0,1)'
        
        break;
      default:
        colors = '0px 0px 11px 3px rgba(138,138,138,1)'
    }
    return colors;
  }

  


  render() { 

    let closeModal1 = () => this.setState({ showModal1: false });
    let closeModal2 = () => this.setState({ showModal2: false });
    let closeModal3 = () => this.setState({ showModal3: false });
    let closeModal4 = () => this.setState({ showModal4: false });
    let closeModal5 = () => this.setState({ showModal5: false });
    let closeModal6 = () => this.setState({ showModal6: false });
    let closeModal7 = () => this.setState({ showModal7: false });
    let closeModal8 = () => this.setState({ showModal8: false });
    let closeModal9 = () => this.setState({ showModal9: false });
    let closeModal10 = () => this.setState({ showModal10: false });
    let closeModal11 = () => this.setState({ showModal11: false });
    let closeModal12 = () => this.setState({ showModal12: false });
    let closeModal13 = () => this.setState({ showModal13: false });
    let closeModal14 = () => this.setState({ showModal14: false });
    let closeModal15 = () => this.setState({ showModal15: false });
    let closeModal16 = () => this.setState({ showModal16: false });
    let closeModal17 = () => this.setState({ showModal17: false });
    let closeModal18 = () => this.setState({ showModal18: false });


    return (
      <>
      <div className="city">
        <div className="block double-wide">
          <div className="intersection"></div>
          <div className="intersection"></div>
          <div className="intersection"></div>
          <div className="intersection"></div>
          <div className="intersection"></div>
          <div className="intersection"></div>
          <div className="buildings">
            <div className="building" data-depth="9">
              <span className="extrusion" style={{ zIndex: 0, transform: 'translate3d(0px, 0px, 1px)' }}></span>
              <span className="extrusion" style={{ zIndex: 1, transform: 'translate3d(0px, 0px, 4px)' }}></span>
              <span className="extrusion" style={{ zIndex: 2, transform: 'translate3d(0px, 0px, 7px)' }}></span>
              <span className="extrusion" style={{ zIndex: 3, transform: 'translate3d(0px, 0px, 10px)' }}></span>
              <span className="extrusion" style={{ zIndex: 4, transform: 'translate3d(0px, 0px, 13px)' }}></span>
              <span className="extrusion" style={{ zIndex: 5, transform: 'translate3d(0px, 0px, 16px)' }}></span>
              <span className="extrusion" style={{ zIndex: 6, transform: 'translate3d(0px, 0px, 19px)' }}></span>
              <span className="extrusion" style={{ zIndex: 7, transform: 'translate3d(0px, 0px, 22px)' }}></span>
              <Button  className="extrusion" onClick={() => this.setState({ showModal1: true })} 
              style={{ zIndex: 8, transform: 'translate3d(0px, 0px, 25px)', boxShadow: this.placeRating(0) }}></Button >
              
              <Modal size="xl" aria-labelledby="contained-modal-title-vcenter" centered show={this.state.showModal1} onHide={closeModal1}>

                <Modal.Body>
                  <Container>
                    <Row className="show-grid">
                      <Col xs={5} md={5}>

                        <Card style={{ width: '25rem' }}>
                          <Carousel>
                            <Carousel.Item>
                            <Image className="rounded mx-auto d-block" src={images[0]} />
                            </Carousel.Item>
                            <Carousel.Item>
                              <Image className="rounded mx-auto d-block" src={images[1]} />
                            </Carousel.Item>
                            <Carousel.Item>
                              <Image className="rounded mx-auto d-block" src={images[2]} />
                            </Carousel.Item>
                            <Carousel.Item>
                              <Image className="rounded mx-auto d-block" src={images[3]} />
                            </Carousel.Item>
                          </Carousel>

                          <Card.Body>
                            <ListGroup>
                              <ListGroup.Item className="lgone"><span className="inputTittles">name</span>{nameTitle[0]}</ListGroup.Item>
                              <ListGroup.Item className="lgtwo"><span className="inputTittles">address</span>{address[0]}</ListGroup.Item>
                              <ListGroup.Item className="lgthree"><span className="inputTittles">rating</span>{rating[0]}</ListGroup.Item>
                              <ListGroup.Item className="lgfour"><span className="inputTittles">total ratings</span>{userRatingTotal[0]}</ListGroup.Item>
                              <ListGroup.Item className="lgfive"><span className="inputTittles">phone</span>{phoneNumber[0]}</ListGroup.Item>
                              <ListGroup.Item className="lgsix">
                                <Button className="inputButtons" rel="noopener noreferrer" target="_blank" href={website[0]} >Website</Button>
                              </ListGroup.Item>

                            </ListGroup>

                          </Card.Body>
                        </Card>
                      </Col>
                      <Col xs={7} md={7}>
                        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                          <Row>
                            <Col sm={3}>
                              <Nav variant="pills" className="flex-column text-center">
                                <Nav.Item>
                                  <Nav.Link eventKey="first">Reviews</Nav.Link>
                                </Nav.Item>

                              </Nav>
                            </Col>
                            <Col sm={9}>
                              <Tab.Content>
                                <Tab.Pane eventKey="first">
                                  <ul className="list-unstyled">
                                    <Media as="li">
                                      <img width={50} height={50} className="mr-3" src={reviewsPhoto[0]} alt="Profile" />
                                      <Media.Body>
                                        <h5 className="reviewName">{reviewsName[0]}
                                          <small className="reviewTime"> {reviewsTime[0]}</small>
                                          {this.ratingReview(0)}
                                        </h5>
                                        <p className="reviewText">{reviewsText[0]}</p>
                                      </Media.Body>
                                    </Media>

                                    <Media as="li">
                                      <img width={50} height={50} className="mr-3" src={reviewsPhoto[1]} alt="Profile" />
                                      <Media.Body>
                                        <h5 className="reviewName">{reviewsName[1]}
                                          <small className="reviewTime"> {reviewsTime[1]}</small>
                                          {this.ratingReview(1)}
                                        </h5>
                                        <p className="reviewText">{reviewsText[1]}</p>
                                      </Media.Body>
                                    </Media>

                                    <Media as="li">
                                      <img width={50} height={50} className="mr-3" src={reviewsPhoto[2]} alt="Profile" />
                                      <Media.Body>
                                        <h5 className="reviewName">{reviewsName[2]}
                                          <small className="reviewTime"> {reviewsTime[2]}</small>
                                          {this.ratingReview(2)}
                                        </h5>
                                        <p className="reviewText">{reviewsText[2]}</p>
                                      </Media.Body>
                                    </Media>
                                    <Media as="li">
                                      <img width={50} height={50} className="mr-3" src={reviewsPhoto[3]} alt="Profile" />
                                      <Media.Body>
                                        <h5 className="reviewName">{reviewsName[3]}
                                          <small className="reviewTime"> {reviewsTime[3]}</small>
                                          {this.ratingReview(3)}
                                        </h5>
                                        <p className="reviewText">{reviewsText[3]}</p>
                                      </Media.Body>
                                    </Media>
                                    <Media as="li">
                                      <img width={50} height={50} className="mr-3" src={reviewsPhoto[4]} alt="Profile" />
                                      <Media.Body>
                                        <h5 className="reviewName">{reviewsName[4]}
                                          <small className="reviewTime"> {reviewsTime[4]}</small>
                                          {this.ratingReview(4)}
                                        </h5>
                                        <p className="reviewText">{reviewsText[4]}</p>
                                      </Media.Body>
                                    </Media>
                                  </ul>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                  sdfsdfsdfsdfsdffsdfsdgsfgedgh
                                </Tab.Pane>
                              </Tab.Content>
                            </Col>
                          </Row>
                        </Tab.Container>
                      </Col>
                    </Row>
                  </Container>
                </Modal.Body>
              </Modal>
            </div>
            <div className="building" data-depth="8">
              <span className="extrusion" style={{ zIndex: 0, transform: 'translate3d(0px, 0px, 1px)' }}></span>
              <span className="extrusion" style={{ zIndex: 1, transform: 'translate3d(0px, 0px, 4px)' }}></span>
              <span className="extrusion" style={{ zIndex: 2, transform: 'translate3d(0px, 0px, 7px)' }}></span>
              <span className="extrusion" style={{ zIndex: 3, transform: 'translate3d(0px, 0px, 10px)' }}></span>
              <span className="extrusion" style={{ zIndex: 4, transform: 'translate3d(0px, 0px, 13px)' }}></span>
              <span className="extrusion" style={{ zIndex: 5, transform: 'translate3d(0px, 0px, 16px)' }}></span>
              <span className="extrusion" style={{ zIndex: 6, transform: 'translate3d(0px, 0px, 19px)' }}></span>
              <Button  className="extrusion" onClick={() => this.setState({ showModal2: true })} 
              style={{ zIndex: 7, transform: 'translate3d(0px, 0px, 22px)', boxShadow: this.placeRating(1) }}></Button >
              <Modal size="xl" aria-labelledby="contained-modal-title-vcenter" centered show={this.state.showModal2} onHide={closeModal2}>
                <Modal.Body>
                  <Container>
                    <Row className="show-grid">
                      <Col xs={5} md={5}>

                        <Card style={{ width: '25rem' }}>
                          <Carousel>
                            <Carousel.Item>
                              <Image className="rounded mx-auto d-block" src={images[4]} />
                            </Carousel.Item>
                            <Carousel.Item>
                              <Image className="rounded mx-auto d-block" src={images[5]} />
                            </Carousel.Item>
                            <Carousel.Item>
                              <Image className="rounded mx-auto d-block" src={images[6]} />
                            </Carousel.Item>
                            <Carousel.Item>
                              <Image className="rounded mx-auto d-block" src={images[7]} />
                            </Carousel.Item>
                          </Carousel>

                          <Card.Body>
                            <ListGroup>
                              <ListGroup.Item className="lgone1"><span className="inputTittles">name</span>{nameTitle[1]}</ListGroup.Item>
                              <ListGroup.Item className="lgtwo2"><span className="inputTittles">address</span>{address[1]}</ListGroup.Item>
                              <ListGroup.Item className="lgthree3"><span className="inputTittles">rating</span>{rating[1]}</ListGroup.Item>
                              <ListGroup.Item className="lgfour4"><span className="inputTittles">total ratings</span>{userRatingTotal[1]}</ListGroup.Item>
                              <ListGroup.Item className="lgfive5"><span className="inputTittles">phone</span>{phoneNumber[1]}</ListGroup.Item>
                              <ListGroup.Item className="lgsix6">
                                <Button className="inputButtons" rel="noopener noreferrer" target="_blank" href={website[1]} >Website</Button>
                              </ListGroup.Item>

                            </ListGroup>

                          </Card.Body>
                        </Card>
                      </Col>
                      <Col xs={7} md={7}>
                        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                          <Row>
                            <Col sm={3}>
                              <Nav variant="pills" className="flex-column text-center">
                                <Nav.Item>
                                  <Nav.Link eventKey="first">Reviews</Nav.Link>
                                </Nav.Item>

                              </Nav>
                            </Col>
                            <Col sm={9}>
                              <Tab.Content>
                                <Tab.Pane eventKey="first">
                                  <ul className="list-unstyled">
                                    <Media as="li">
                                      <img width={50} height={50} className="mr-3" src={reviewsPhoto[5]} alt="Profile" />
                                      <Media.Body>
                                        <h5 className="reviewName">{reviewsName[5]}
                                          <small className="reviewTime"> {reviewsTime[5]}</small>
                                          {this.ratingReview(5)}
                                        </h5>
                                        <p className="reviewText">{reviewsText[5]}</p>
                                      </Media.Body>
                                    </Media>

                                    <Media as="li">
                                      <img width={50} height={50} className="mr-3" src={reviewsPhoto[6]} alt="Profile" />
                                      <Media.Body>
                                        <h5 className="reviewName">{reviewsName[6]}
                                          <small className="reviewTime"> {reviewsTime[6]}</small>
                                          {this.ratingReview(6)}
                                        </h5>
                                        <p className="reviewText">{reviewsText[6]}</p>
                                      </Media.Body>
                                    </Media>

                                    <Media as="li">
                                      <img width={50} height={50} className="mr-3" src={reviewsPhoto[7]} alt="Profile" />
                                      <Media.Body>
                                        <h5 className="reviewName">{reviewsName[7]}
                                          <small className="reviewTime"> {reviewsTime[7]}</small>
                                          {this.ratingReview(7)}
                                        </h5>
                                        <p className="reviewText">{reviewsText[7]}</p>
                                      </Media.Body>
                                    </Media>
                                    <Media as="li">
                                      <img width={50} height={50} className="mr-3" src={reviewsPhoto[8]} alt="Profile" />
                                      <Media.Body>
                                        <h5 className="reviewName">{reviewsName[8]}
                                          <small className="reviewTime"> {reviewsTime[8]}</small>
                                          {this.ratingReview(8)}
                                        </h5>
                                        <p className="reviewText">{reviewsText[8]}</p>
                                      </Media.Body>
                                    </Media>
                                    <Media as="li">
                                      <img width={50} height={50} className="mr-3" src={reviewsPhoto[9]} alt="Profile" />
                                      <Media.Body>
                                        <h5 className="reviewName">{reviewsName[9]}
                                          <small className="reviewTime"> {reviewsTime[9]}</small>
                                          {this.ratingReview(9)}
                                        </h5>
                                        <p className="reviewText">{reviewsText[9]}</p>
                                      </Media.Body>
                                    </Media>
                                  </ul>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                  sdfsdfsdfsdfsdffsdfsdgsfgedgh
                                </Tab.Pane>
                              </Tab.Content>
                            </Col>
                          </Row>
                        </Tab.Container>
                      </Col>
                    </Row>
                  </Container>
                </Modal.Body>
              </Modal>
            </div>
            <div className="building" data-depth="8">
              <span className="extrusion" style={{ zIndex: 0, transform: 'translate3d(0px, 0px, 1px)' }}></span>
              <span className="extrusion" style={{ zIndex: 1, transform: 'translate3d(0px, 0px, 4px)' }}></span>
              <span className="extrusion" style={{ zIndex: 2, transform: 'translate3d(0px, 0px,  7px)' }}></span>
              <span className="extrusion" style={{ zIndex: 3, transform: 'translate3d(0px, 0px,  10px)' }}></span>
              <span className="extrusion" style={{ zIndex: 4, transform: 'translate3d(0px, 0px,  13px)' }}></span>
              <span className="extrusion" style={{ zIndex: 5, transform: 'translate3d(0px, 0px,  16px)' }}></span>
              <span className="extrusion" style={{ zIndex: 6, transform: 'translate3d(0px, 0px,  19px)' }}></span>
              <Button  className="extrusion" onClick={() => this.setState({ showModal3: true })} 
              style={{ zIndex: 7, transform: 'translate3d(0px, 0px,  22px)', boxShadow: this.placeRating(2) }}></Button >
              <Modal size="xl" aria-labelledby="contained-modal-title-vcenter" centered show={this.state.showModal3} onHide={closeModal3}>
                <Modal.Body>
                  <Container>
                    <Row className="show-grid">
                      <Col xs={5} md={5}>

                        <Card style={{ width: '25rem' }}>
                          <Carousel>
                            <Carousel.Item>
                              <Image className="rounded mx-auto d-block" src={images[8]} />
                            </Carousel.Item>
                            <Carousel.Item>
                              <Image className="rounded mx-auto d-block" src={images[9]} />
                            </Carousel.Item>
                            <Carousel.Item>
                              <Image className="rounded mx-auto d-block" src={images[10]} />
                            </Carousel.Item>
                            <Carousel.Item>
                              <Image className="rounded mx-auto d-block" src={images[11]} />
                            </Carousel.Item>
                          </Carousel>

                          <Card.Body>
                            <ListGroup>
                              <ListGroup.Item className="lgonetwo"><span className="inputTittles">name</span>{nameTitle[2]}</ListGroup.Item>
                              <ListGroup.Item className="lgtwotwo"><span className="inputTittles">address</span>{address[2]}</ListGroup.Item>
                              <ListGroup.Item className="lgthreetwo"><span className="inputTittles">rating</span>{rating[2]}</ListGroup.Item>
                              <ListGroup.Item className="lgfourtwo"><span className="inputTittles">total ratings</span>{userRatingTotal[2]}</ListGroup.Item>
                              <ListGroup.Item className="lgfivetwo"><span className="inputTittles">phone</span>{phoneNumber[2]}</ListGroup.Item>
                              <ListGroup.Item className="lgsixtwo">
                                <Button className="inputButtons" rel="noopener noreferrer" target="_blank" href={website[2]} >Website</Button>
                              </ListGroup.Item>

                            </ListGroup>

                          </Card.Body>
                        </Card>
                      </Col>
                      <Col xs={7} md={7}>
                        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                          <Row>
                            <Col sm={3}>
                              <Nav variant="pills" className="flex-column text-center">
                                <Nav.Item>
                                  <Nav.Link eventKey="first">Reviews</Nav.Link>
                                </Nav.Item>

                              </Nav>
                            </Col>
                            <Col sm={9}>
                              <Tab.Content>
                                <Tab.Pane eventKey="first">
                                  <ul className="list-unstyled">
                                    <Media as="li">
                                      <img width={50} height={50} className="mr-3" src={reviewsPhoto[10]} alt="Profile" />
                                      <Media.Body>
                                        <h5 className="reviewName">{reviewsName[10]}
                                          <small className="reviewTime"> {reviewsTime[10]}</small>
                                          {this.ratingReview(10)}
                                        </h5>
                                        <p className="reviewText">{reviewsText[10]}</p>
                                      </Media.Body>
                                    </Media>

                                    <Media as="li">
                                      <img width={50} height={50} className="mr-3" src={reviewsPhoto[11]} alt="Profile" />
                                      <Media.Body>
                                        <h5 className="reviewName">{reviewsName[11]}
                                          <small className="reviewTime"> {reviewsTime[11]}</small>
                                          {this.ratingReview(11)}
                                        </h5>
                                        <p className="reviewText">{reviewsText[11]}</p>
                                      </Media.Body>
                                    </Media>

                                    <Media as="li">
                                      <img width={50} height={50} className="mr-3" src={reviewsPhoto[12]} alt="Profile" />
                                      <Media.Body>
                                        <h5 className="reviewName">{reviewsName[12]}
                                          <small className="reviewTime"> {reviewsTime[12]}</small>
                                          {this.ratingReview(12)}
                                        </h5>
                                        <p className="reviewText">{reviewsText[12]}</p>
                                      </Media.Body>
                                    </Media>
                                    <Media as="li">
                                      <img width={50} height={50} className="mr-3" src={reviewsPhoto[13]} alt="Profile" />
                                      <Media.Body>
                                        <h5 className="reviewName">{reviewsName[13]}
                                          <small className="reviewTime"> {reviewsTime[13]}</small>
                                          {this.ratingReview(13)}
                                        </h5>
                                        <p className="reviewText">{reviewsText[13]}</p>
                                      </Media.Body>
                                    </Media>
                                    <Media as="li">
                                      <img width={50} height={50} className="mr-3" src={reviewsPhoto[14]} alt="Profile" />
                                      <Media.Body>
                                        <h5 className="reviewName">{reviewsName[14]}
                                          <small className="reviewTime"> {reviewsTime[14]}</small>
                                          {this.ratingReview(14)}
                                        </h5>
                                        <p className="reviewText">{reviewsText[14]}</p>
                                      </Media.Body>
                                    </Media>
                                  </ul>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                  sdfsdfsdfsdfsdffsdfsdgsfgedgh
                                </Tab.Pane>
                              </Tab.Content>
                            </Col>
                          </Row>
                        </Tab.Container>
                      </Col>
                    </Row>
                  </Container>
                </Modal.Body>
              </Modal>
            </div>
            <div className="building" data-depth="7">
              <span className="extrusion" style={{ zIndex: 0, transform: 'translate3d(0px, 0px, 1px)' }}></span>
              <span className="extrusion" style={{ zIndex: 1, transform: 'translate3d(0px, 0px, 4px)' }}></span>
              <span className="extrusion" style={{ zIndex: 2, transform: 'translate3d(0px, 0px,  7px)' }}></span>
              <span className="extrusion" style={{ zIndex: 3, transform: 'translate3d(0px, 0px,  10px)' }}></span>
              <span className="extrusion" style={{ zIndex: 4, transform: 'translate3d(0px, 0px,  13px)' }}></span>
              <span className="extrusion" style={{ zIndex: 5, transform: 'translate3d(0px, 0px,  16px)' }}></span>
              <Button  className="extrusion" onClick={() => this.setState({ showModal4: true })} 
              style={{ zIndex: 6, transform: 'translate3d(0px, 0px,  19px)', boxShadow: this.placeRating(3) }}></Button >
              <Modal size="xl" aria-labelledby="contained-modal-title-vcenter" centered show={this.state.showModal4} onHide={closeModal4}>
                <Modal.Body>
                  <Container>
                    <Row className="show-grid">
                      <Col xs={5} md={5}>

                        <Card style={{ width: '25rem' }}>
                          <Carousel>
                            <Carousel.Item>
                              <Image className="rounded mx-auto d-block" src={images[12]} />
                            </Carousel.Item>
                            <Carousel.Item>
                              <Image className="rounded mx-auto d-block" src={images[13]} />
                            </Carousel.Item>
                            <Carousel.Item>
                              <Image className="rounded mx-auto d-block" src={images[14]} />
                            </Carousel.Item>
                            <Carousel.Item>
                              <Image className="rounded mx-auto d-block" src={images[15]} />
                            </Carousel.Item>
                          </Carousel>

                          <Card.Body>
                            <ListGroup>
                              <ListGroup.Item className="lgonethree"><span className="inputTittles">name</span>{nameTitle[3]}</ListGroup.Item>
                              <ListGroup.Item className="lgtwothree"><span className="inputTittles">address</span>{address[3]}</ListGroup.Item>
                              <ListGroup.Item className="lgthreethree"><span className="inputTittles">rating</span>{rating[3]}</ListGroup.Item>
                              <ListGroup.Item className="lgfourthree"><span className="inputTittles">total ratings</span>{userRatingTotal[3]}</ListGroup.Item>
                              <ListGroup.Item className="lgfivethree"><span className="inputTittles">phone</span>{phoneNumber[3]}</ListGroup.Item>
                              <ListGroup.Item className="lgsixthree">
                                <Button className="inputButtons" rel="noopener noreferrer" target="_blank" href={website[3]} >Website</Button>
                              </ListGroup.Item>

                            </ListGroup>

                          </Card.Body>
                        </Card>
                      </Col>
                      <Col xs={7} md={7}>
                        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                          <Row>
                            <Col sm={3}>
                              <Nav variant="pills" className="flex-column text-center">
                                <Nav.Item>
                                  <Nav.Link eventKey="first">Reviews</Nav.Link>
                                </Nav.Item>

                              </Nav>
                            </Col>
                            <Col sm={9}>
                              <Tab.Content>
                                <Tab.Pane eventKey="first">
                                  <ul className="list-unstyled">
                                    <Media as="li">
                                      <img width={50} height={50} className="mr-3" src={reviewsPhoto[11]} alt="Profile" />
                                      <Media.Body>
                                        <h5 className="reviewName">{reviewsName[15]}
                                          <small className="reviewTime"> {reviewsTime[15]}</small>
                                          {this.ratingReview(15)}
                                        </h5>
                                        <p className="reviewText">{reviewsText[15]}</p>
                                      </Media.Body>
                                    </Media>

                                    <Media as="li">
                                      <img width={50} height={50} className="mr-3" src={reviewsPhoto[16]} alt="Profile" />
                                      <Media.Body>
                                        <h5 className="reviewName">{reviewsName[16]}
                                          <small className="reviewTime"> {reviewsTime[16]}</small>
                                          {this.ratingReview(16)}
                                        </h5>
                                        <p className="reviewText">{reviewsText[16]}</p>
                                      </Media.Body>
                                    </Media>

                                    <Media as="li">
                                      <img width={50} height={50} className="mr-3" src={reviewsPhoto[17]} alt="Profile" />
                                      <Media.Body>
                                        <h5 className="reviewName">{reviewsName[17]}
                                          <small className="reviewTime"> {reviewsTime[17]}</small>
                                          {this.ratingReview(17)}
                                        </h5>
                                        <p className="reviewText">{reviewsText[17]}</p>
                                      </Media.Body>
                                    </Media>
                                    <Media as="li">
                                      <img width={50} height={50} className="mr-3" src={reviewsPhoto[18]} alt="Profile" />
                                      <Media.Body>
                                        <h5 className="reviewName">{reviewsName[18]}
                                          <small className="reviewTime"> {reviewsTime[18]}</small>
                                          {this.ratingReview(18)}
                                        </h5>
                                        <p className="reviewText">{reviewsText[18]}</p>
                                      </Media.Body>
                                    </Media>
                                    <Media as="li">
                                      <img width={50} height={50} className="mr-3" src={reviewsPhoto[19]} alt="Profile" />
                                      <Media.Body>
                                        <h5 className="reviewName">{reviewsName[19]}
                                          <small className="reviewTime"> {reviewsTime[19]}</small>
                                          {this.ratingReview(19)}
                                        </h5>
                                        <p className="reviewText">{reviewsText[19]}</p>
                                      </Media.Body>
                                    </Media>
                                  </ul>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                  sdfsdfsdfsdfsdffsdfsdgsfgedgh
                                </Tab.Pane>
                              </Tab.Content>
                            </Col>
                          </Row>
                        </Tab.Container>
                      </Col>
                    </Row>
                  </Container>
                </Modal.Body>
              </Modal>
            </div>
            <div className="building" data-depth="6">
              <span className="extrusion" style={{ zIndex: 0, transform: 'translate3d(0px, 0px, 1px)' }}></span>
              <span className="extrusion" style={{ zIndex: 1, transform: 'translate3d(0px, 0px, 4px)' }}></span>
              <span className="extrusion" style={{ zIndex: 2, transform: 'translate3d(0px, 0px,  7px)' }}></span>
              <span className="extrusion" style={{ zIndex: 3, transform: 'translate3d(0px, 0px,  10px)' }}></span>
              <span className="extrusion" style={{ zIndex: 4, transform: 'translate3d(0px, 0px,  13px)' }}></span>
              <Button  className="extrusion" onClick={() => this.setState({ showModal5: true })} 
              style={{ zIndex: 5, transform: 'translate3d(0px, 0px,  16px)', boxShadow: this.placeRating(4) }}></Button >
              <Modal size="xl" aria-labelledby="contained-modal-title-vcenter" centered show={this.state.showModal5} onHide={closeModal5}>
                <Modal.Body>
                  <Container>
                    <Row className="show-grid">
                      <Col xs={5} md={5}>

                        <Card style={{ width: '25rem' }}>
                          <Carousel>
                            <Carousel.Item>
                              <Image className="rounded mx-auto d-block" src={images[16]} />
                            </Carousel.Item>
                            <Carousel.Item>
                              <Image className="rounded mx-auto d-block" src={images[17]} />
                            </Carousel.Item>
                            <Carousel.Item>
                              <Image className="rounded mx-auto d-block" src={images[18]} />
                            </Carousel.Item>
                            <Carousel.Item>
                              <Image className="rounded mx-auto d-block" src={images[19]} />
                            </Carousel.Item>
                          </Carousel>

                          <Card.Body>
                            <ListGroup>
                              <ListGroup.Item className="lgonefour"><span className="inputTittles">name</span>{nameTitle[4]}</ListGroup.Item>
                              <ListGroup.Item className="lgtwofour"><span className="inputTittles">address</span>{address[4]}</ListGroup.Item>
                              <ListGroup.Item className="lgthreefour"><span className="inputTittles">rating</span>{rating[4]}</ListGroup.Item>
                              <ListGroup.Item className="lgfourfour"><span className="inputTittles">total ratings</span>{userRatingTotal[4]}</ListGroup.Item>
                              <ListGroup.Item className="lgfivefour"><span className="inputTittles">phone</span>{phoneNumber[4]}</ListGroup.Item>
                              <ListGroup.Item className="lgsixfour">
                                <Button className="inputButtons" rel="noopener noreferrer" target="_blank" href={website[4]} >Website</Button>
                              </ListGroup.Item>

                            </ListGroup>

                          </Card.Body>
                        </Card>
                      </Col>
                      <Col xs={7} md={7}>
                        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                          <Row>
                            <Col sm={3}>
                              <Nav variant="pills" className="flex-column text-center">
                                <Nav.Item>
                                  <Nav.Link eventKey="first">Reviews</Nav.Link>
                                </Nav.Item>

                              </Nav>
                            </Col>
                            <Col sm={9}>
                              <Tab.Content>
                                <Tab.Pane eventKey="first">
                                  <ul className="list-unstyled">
                                    <Media as="li">
                                      <img width={50} height={50} className="mr-3" src={reviewsPhoto[20]} alt="Profile" />
                                      <Media.Body>
                                        <h5 className="reviewName">{reviewsName[20]}
                                          <small className="reviewTime"> {reviewsTime[20]}</small>
                                          {this.ratingReview(20)}
                                        </h5>
                                        <p className="reviewText">{reviewsText[20]}</p>
                                      </Media.Body>
                                    </Media>

                                    <Media as="li">
                                      <img width={50} height={50} className="mr-3" src={reviewsPhoto[21]} alt="Profile" />
                                      <Media.Body>
                                        <h5 className="reviewName">{reviewsName[21]}
                                          <small className="reviewTime"> {reviewsTime[21]}</small>
                                          {this.ratingReview(21)}
                                        </h5>
                                        <p className="reviewText">{reviewsText[21]}</p>
                                      </Media.Body>
                                    </Media>

                                    <Media as="li">
                                      <img width={50} height={50} className="mr-3" src={reviewsPhoto[22]} alt="Profile" />
                                      <Media.Body>
                                        <h5 className="reviewName">{reviewsName[22]}
                                          <small className="reviewTime"> {reviewsTime[22]}</small>
                                          {this.ratingReview(22)}
                                        </h5>
                                        <p className="reviewText">{reviewsText[22]}</p>
                                      </Media.Body>
                                    </Media>
                                    <Media as="li">
                                      <img width={50} height={50} className="mr-3" src={reviewsPhoto[23]} alt="Profile" />
                                      <Media.Body>
                                        <h5 className="reviewName">{reviewsName[23]}
                                          <small className="reviewTime"> {reviewsTime[23]}</small>
                                          {this.ratingReview(23)}
                                        </h5>
                                        <p className="reviewText">{reviewsText[23]}</p>
                                      </Media.Body>
                                    </Media>
                                    <Media as="li">
                                      <img width={50} height={50} className="mr-3" src={reviewsPhoto[24]} alt="Profile" />
                                      <Media.Body>
                                        <h5 className="reviewName">{reviewsName[24]}
                                          <small className="reviewTime"> {reviewsTime[24]}</small>
                                          {this.ratingReview(24)}
                                        </h5>
                                        <p className="reviewText">{reviewsText[24]}</p>
                                      </Media.Body>
                                    </Media>
                                  </ul>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                  sdfsdfsdfsdfsdffsdfsdgsfgedgh
                                </Tab.Pane>
                              </Tab.Content>
                            </Col>
                          </Row>
                        </Tab.Container>
                      </Col>
                    </Row>
                  </Container>
                </Modal.Body>
              </Modal>
            </div>
            <div className="building" data-depth="11">
              <span className="extrusion" style={{ zIndex: 0, transform: 'translate3d(0px, 0px, 1px)' }}></span>
              <span className="extrusion" style={{ zIndex: 1, transform: 'translate3d(0px, 0px, 4px)' }}></span>
              <span className="extrusion" style={{ zIndex: 2, transform: 'translate3d(0px, 0px,  7px)' }}></span>
              <span className="extrusion" style={{ zIndex: 3, transform: 'translate3d(0px, 0px,  10px)' }}></span>
              <span className="extrusion" style={{ zIndex: 4, transform: 'translate3d(0px, 0px,  13px)' }}></span>
              <span className="extrusion" style={{ zIndex: 5, transform: 'translate3d(0px, 0px,  16px)' }}></span>
              <span className="extrusion" style={{ zIndex: 6, transform: 'translate3d(0px, 0px,  19px)' }}></span>
              <span className="extrusion" style={{ zIndex: 7, transform: 'translate3d(0px, 0px,  22px)' }}></span>
              <span className="extrusion" style={{ zIndex: 8, transform: 'translate3d(0px, 0px,  25px)' }}></span>
              <span className="extrusion" style={{ zIndex: 9, transform: 'translate3d(0px, 0px,  28px)' }}></span>
              <Button  className="extrusion" onClick={() => this.setState({ showModal6: true })} 
              style={{ zIndex: 10, transform: 'translate3d(0px, 0px,  31px)', boxShadow: this.placeRating(5)}}></Button >
              <Modal size="xl" aria-labelledby="contained-modal-title-vcenter" centered show={this.state.showModal6} onHide={closeModal6}>
                <Modal.Body>
                  <Container>
                    <Row className="show-grid">
                      <Col xs={5} md={5}>

                        <Card style={{ width: '25rem' }}>
                          <Carousel>
                            <Carousel.Item>
                              <Image className="rounded mx-auto d-block" src={images[20]} />
                            </Carousel.Item>
                            <Carousel.Item>
                              <Image className="rounded mx-auto d-block" src={images[21]} />
                            </Carousel.Item>
                            <Carousel.Item>
                              <Image className="rounded mx-auto d-block" src={images[22]} />
                            </Carousel.Item>
                            <Carousel.Item>
                              <Image className="rounded mx-auto d-block" src={images[23]} />
                            </Carousel.Item>
                          </Carousel>

                          <Card.Body>
                            <ListGroup>
                              <ListGroup.Item className="lgonefive"><span className="inputTittles">name</span>{nameTitle[5]}</ListGroup.Item>
                              <ListGroup.Item className="lgtwofive"><span className="inputTittles">address</span>{address[5]}</ListGroup.Item>
                              <ListGroup.Item className="lgthreefive"><span className="inputTittles">rating</span>{rating[5]}</ListGroup.Item>
                              <ListGroup.Item className="lgfourfive"><span className="inputTittles">total ratings</span>{userRatingTotal[5]}</ListGroup.Item>
                              <ListGroup.Item className="lgfivefive"><span className="inputTittles">phone</span>{phoneNumber[5]}</ListGroup.Item>
                              <ListGroup.Item className="lgsixfive">
                                <Button className="inputButtons" rel="noopener noreferrer" target="_blank" href={website[5]} >Website</Button>
                              </ListGroup.Item>

                            </ListGroup>

                          </Card.Body>
                        </Card>
                      </Col>
                      <Col xs={7} md={7}>
                        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                          <Row>
                            <Col sm={3}>
                              <Nav variant="pills" className="flex-column text-center">
                                <Nav.Item>
                                  <Nav.Link eventKey="first">Reviews</Nav.Link>
                                </Nav.Item>

                              </Nav>
                            </Col>
                            <Col sm={9}>
                              <Tab.Content>
                                <Tab.Pane eventKey="first">
                                  <ul className="list-unstyled">
                                    <Media as="li">
                                      <img width={50} height={50} className="mr-3" src={reviewsPhoto[25]} alt="Profile" />
                                      <Media.Body>
                                        <h5 className="reviewName">{reviewsName[25]}
                                          <small className="reviewTime"> {reviewsTime[25]}</small>
                                          {this.ratingReview(25)}
                                        </h5>
                                        <p className="reviewText">{reviewsText[25]}</p>
                                      </Media.Body>
                                    </Media>

                                    <Media as="li">
                                      <img width={50} height={50} className="mr-3" src={reviewsPhoto[26]} alt="Profile" />
                                      <Media.Body>
                                        <h5 className="reviewName">{reviewsName[26]}
                                          <small className="reviewTime"> {reviewsTime[26]}</small>
                                          {this.ratingReview(26)}
                                        </h5>
                                        <p className="reviewText">{reviewsText[26]}</p>
                                      </Media.Body>
                                    </Media>

                                    <Media as="li">
                                      <img width={50} height={50} className="mr-3" src={reviewsPhoto[27]} alt="Profile" />
                                      <Media.Body>
                                        <h5 className="reviewName">{reviewsName[27]}
                                          <small className="reviewTime"> {reviewsTime[27]}</small>
                                          {this.ratingReview(27)}
                                        </h5>
                                        <p className="reviewText">{reviewsText[27]}</p>
                                      </Media.Body>
                                    </Media>
                                    <Media as="li">
                                      <img width={50} height={50} className="mr-3" src={reviewsPhoto[28]} alt="Profile" />
                                      <Media.Body>
                                        <h5 className="reviewName">{reviewsName[28]}
                                          <small className="reviewTime"> {reviewsTime[28]}</small>
                                          {this.ratingReview(28)}
                                        </h5>
                                        <p className="reviewText">{reviewsText[28]}</p>
                                      </Media.Body>
                                    </Media>
                                    <Media as="li">
                                      <img width={50} height={50} className="mr-3" src={reviewsPhoto[29]} alt="Profile" />
                                      <Media.Body>
                                        <h5 className="reviewName">{reviewsName[29]}
                                          <small className="reviewTime"> {reviewsTime[29]}</small>
                                          {this.ratingReview(29)}
                                        </h5>
                                        <p className="reviewText">{reviewsText[29]}</p>
                                      </Media.Body>
                                    </Media>
                                  </ul>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                  sdfsdfsdfsdfsdffsdfsdgsfgedgh
                                </Tab.Pane>
                              </Tab.Content>
                            </Col>
                          </Row>
                        </Tab.Container>
                      </Col>
                    </Row>
                  </Container>
                </Modal.Body>
              </Modal>
            </div>
            <div className="building" data-depth="9">
              <span className="extrusion" style={{ zIndex: 0, transform: 'translate3d(0px, 0px, 1px)' }}></span>
              <span className="extrusion" style={{ zIndex: 1, transform: 'translate3d(0px, 0px, 4px)' }}></span>
              <span className="extrusion" style={{ zIndex: 2, transform: 'translate3d(0px, 0px,  7px)' }}></span>
              <span className="extrusion" style={{ zIndex: 3, transform: 'translate3d(0px, 0px,  10px)' }}></span>
              <span className="extrusion" style={{ zIndex: 4, transform: 'translate3d(0px, 0px,  13px)' }}></span>
              <span className="extrusion" style={{ zIndex: 5, transform: 'translate3d(0px, 0px,  16px)' }}></span>
              <span className="extrusion" style={{ zIndex: 6, transform: 'translate3d(0px, 0px,  19px)' }}></span>
              <span className="extrusion" style={{ zIndex: 7, transform: 'translate3d(0px, 0px,  22px)' }}></span>
              <Button  className="extrusion" onClick={() => this.setState({ showModal7: true })} 
              style={{ zIndex: 8, transform: 'translate3d(0px, 0px,  25px)', boxShadow: this.placeRating(6) }}></Button >
              <Modal size="xl" aria-labelledby="contained-modal-title-vcenter" centered show={this.state.showModal7} onHide={closeModal7}>
                <Modal.Body>
                  <Container>
                    <Row className="show-grid">
                      <Col xs={5} md={5}>

                        <Card style={{ width: '25rem' }}>
                          <Carousel>
                            <Carousel.Item>
                              <Image className="rounded mx-auto d-block" src={images[24]} />
                            </Carousel.Item>
                            <Carousel.Item>
                              <Image className="rounded mx-auto d-block" src={images[25]} />
                            </Carousel.Item>
                            <Carousel.Item>
                              <Image className="rounded mx-auto d-block" src={images[26]} />
                            </Carousel.Item>
                            <Carousel.Item>
                              <Image className="rounded mx-auto d-block" src={images[27]} />
                            </Carousel.Item>
                          </Carousel>

                          <Card.Body>
                            <ListGroup>
                              <ListGroup.Item className="lgonesix"><span className="inputTittles">name</span>{nameTitle[6]}</ListGroup.Item>
                              <ListGroup.Item className="lgtwosix"><span className="inputTittles">address</span>{address[6]}</ListGroup.Item>
                              <ListGroup.Item className="lgthreesix"><span className="inputTittles">rating</span>{rating[6]}</ListGroup.Item>
                              <ListGroup.Item className="lgfoursix"><span className="inputTittles">total ratings</span>{userRatingTotal[6]}</ListGroup.Item>
                              <ListGroup.Item className="lgfivesix"><span className="inputTittles">phone</span>{phoneNumber[6]}</ListGroup.Item>
                              <ListGroup.Item className="lgsixsix">
                                <Button className="inputButtons" rel="noopener noreferrer" target="_blank" href={website[6]} >Website</Button>
                              </ListGroup.Item>

                            </ListGroup>

                          </Card.Body>
                        </Card>
                      </Col>
                      <Col xs={7} md={7}>
                        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                          <Row>
                            <Col sm={3}>
                              <Nav variant="pills" className="flex-column text-center">
                                <Nav.Item>
                                  <Nav.Link eventKey="first">Reviews</Nav.Link>
                                </Nav.Item>

                              </Nav>
                            </Col>
                            <Col sm={9}>
                              <Tab.Content>
                                <Tab.Pane eventKey="first">
                                  <ul className="list-unstyled">
                                    <Media as="li">
                                      <img width={50} height={50} className="mr-3" src={reviewsPhoto[30]} alt="Profile" />
                                      <Media.Body>
                                        <h5 className="reviewName">{reviewsName[30]}
                                          <small className="reviewTime"> {reviewsTime[30]}</small>
                                          {this.ratingReview(30)}
                                        </h5>
                                        <p className="reviewText">{reviewsText[30]}</p>
                                      </Media.Body>
                                    </Media>

                                    <Media as="li">
                                      <img width={50} height={50} className="mr-3" src={reviewsPhoto[31]} alt="Profile" />
                                      <Media.Body>
                                        <h5 className="reviewName">{reviewsName[31]}
                                          <small className="reviewTime"> {reviewsTime[31]}</small>
                                          {this.ratingReview(31)}
                                        </h5>
                                        <p className="reviewText">{reviewsText[31]}</p>
                                      </Media.Body>
                                    </Media>

                                    <Media as="li">
                                      <img width={50} height={50} className="mr-3" src={reviewsPhoto[32]} alt="Profile" />
                                      <Media.Body>
                                        <h5 className="reviewName">{reviewsName[32]}
                                          <small className="reviewTime"> {reviewsTime[32]}</small>
                                          {this.ratingReview(32)}
                                        </h5>
                                        <p className="reviewText">{reviewsText[32]}</p>
                                      </Media.Body>
                                    </Media>
                                    <Media as="li">
                                      <img width={50} height={50} className="mr-3" src={reviewsPhoto[33]} alt="Profile" />
                                      <Media.Body>
                                        <h5 className="reviewName">{reviewsName[33]}
                                          <small className="reviewTime"> {reviewsTime[33]}</small>
                                          {this.ratingReview(33)}
                                        </h5>
                                        <p className="reviewText">{reviewsText[33]}</p>
                                      </Media.Body>
                                    </Media>
                                    <Media as="li">
                                      <img width={50} height={50} className="mr-3" src={reviewsPhoto[34]} alt="Profile" />
                                      <Media.Body>
                                        <h5 className="reviewName">{reviewsName[34]}
                                          <small className="reviewTime"> {reviewsTime[34]}</small>
                                          {this.ratingReview(34)}
                                        </h5>
                                        <p className="reviewText">{reviewsText[34]}</p>
                                      </Media.Body>
                                    </Media>
                                  </ul>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                  sdfsdfsdfsdfsdffsdfsdgsfgedgh
                                </Tab.Pane>
                              </Tab.Content>
                            </Col>
                          </Row>
                        </Tab.Container>
                      </Col>
                    </Row>
                  </Container>
                </Modal.Body>
              </Modal>
            </div>
            <div className="building" data-depth="14">
              <span className="extrusion" style={{ zIndex: 0, transform: 'translate3d(0px, 0px, 1px)' }}></span>
              <span className="extrusion" style={{ zIndex: 1, transform: 'translate3d(0px, 0px, 4px)' }}></span>
              <span className="extrusion" style={{ zIndex: 2, transform: 'translate3d(0px, 0px,  7px)' }}></span>
              <span className="extrusion" style={{ zIndex: 3, transform: 'translate3d(0px, 0px,  10px)' }}></span>
              <span className="extrusion" style={{ zIndex: 4, transform: 'translate3d(0px, 0px,  13px)' }}></span>
              <span className="extrusion" style={{ zIndex: 5, transform: 'translate3d(0px, 0px,  16px)' }}></span>
              <span className="extrusion" style={{ zIndex: 6, transform: 'translate3d(0px, 0px,  19px)' }}></span>
              <span className="extrusion" style={{ zIndex: 7, transform: 'translate3d(0px, 0px,  22px)' }}></span>
              <span className="extrusion" style={{ zIndex: 8, transform: 'translate3d(0px, 0px,  25px)' }}></span>
              <span className="extrusion" style={{ zIndex: 9, transform: 'translate3d(0px, 0px,  28px)' }}></span>
              <span className="extrusion" style={{ zIndex: 10, transform: 'translate3d(0px, 0px,  31px)' }}></span>
              <span className="extrusion" style={{ zIndex: 11, transform: 'translate3d(0px, 0px,  34px)' }}></span>
              <span className="extrusion" style={{ zIndex: 12, transform: 'translate3d(0px, 0px,  37px)' }}></span>
              <Button  className="extrusion" onClick={() => this.setState({ showModal8: true })} 
              style={{ zIndex: 13, transform: 'translate3d(0px, 0px,  40px)', boxShadow: this.placeRating(7) }}></Button >
              <Modal size="xl" aria-labelledby="contained-modal-title-vcenter" centered show={this.state.showModal8} onHide={closeModal8}>
                <Modal.Body>
                  <Container>
                    <Row className="show-grid">
                      <Col xs={5} md={5}>

                        <Card style={{ width: '25rem' }}>
                          <Carousel>
                            <Carousel.Item>
                              <Image className="rounded mx-auto d-block" src={images[28]} />
                            </Carousel.Item>
                            <Carousel.Item>
                              <Image className="rounded mx-auto d-block" src={images[29]} />
                            </Carousel.Item>
                            <Carousel.Item>
                              <Image className="rounded mx-auto d-block" src={images[30]} />
                            </Carousel.Item>
                            <Carousel.Item>
                              <Image className="rounded mx-auto d-block" src={images[31]} />
                            </Carousel.Item>
                          </Carousel>

                          <Card.Body>
                            <ListGroup>
                              <ListGroup.Item className="lgoneseven"><span className="inputTittles">name</span>{nameTitle[7]}</ListGroup.Item>
                              <ListGroup.Item className="lgtwoseven"><span className="inputTittles">address</span>{address[7]}</ListGroup.Item>
                              <ListGroup.Item className="lgthreeseven"><span className="inputTittles">rating</span>{rating[7]}</ListGroup.Item>
                              <ListGroup.Item className="lgfourseven"><span className="inputTittles">total ratings</span>{userRatingTotal[7]}</ListGroup.Item>
                              <ListGroup.Item className="lgfiveseven"><span className="inputTittles">phone</span>{phoneNumber[7]}</ListGroup.Item>
                              <ListGroup.Item className="lgsixseven">
                                <Button className="inputButtons" rel="noopener noreferrer" target="_blank" href={website[7]} >Website</Button>
                              </ListGroup.Item>

                            </ListGroup>

                          </Card.Body>
                        </Card>
                      </Col>
                      <Col xs={7} md={7}>
                        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                          <Row>
                            <Col sm={3}>
                              <Nav variant="pills" className="flex-column text-center">
                                <Nav.Item>
                                  <Nav.Link eventKey="first">Reviews</Nav.Link>
                                </Nav.Item>

                              </Nav>
                            </Col>
                            <Col sm={9}>
                              <Tab.Content>
                                <Tab.Pane eventKey="first">
                                  <ul className="list-unstyled">
                                    <Media as="li">
                                      <img width={50} height={50} className="mr-3" src={reviewsPhoto[35]} alt="Profile" />
                                      <Media.Body>
                                        <h5 className="reviewName">{reviewsName[35]}
                                          <small className="reviewTime"> {reviewsTime[35]}</small>
                                          {this.ratingReview(35)}
                                        </h5>
                                        <p className="reviewText">{reviewsText[35]}</p>
                                      </Media.Body>
                                    </Media>

                                    <Media as="li">
                                      <img width={50} height={50} className="mr-3" src={reviewsPhoto[36]} alt="Profile" />
                                      <Media.Body>
                                        <h5 className="reviewName">{reviewsName[36]}
                                          <small className="reviewTime"> {reviewsTime[36]}</small>
                                          {this.ratingReview(36)}
                                        </h5>
                                        <p className="reviewText">{reviewsText[36]}</p>
                                      </Media.Body>
                                    </Media>

                                    <Media as="li">
                                      <img width={50} height={50} className="mr-3" src={reviewsPhoto[37]} alt="Profile" />
                                      <Media.Body>
                                        <h5 className="reviewName">{reviewsName[37]}
                                          <small className="reviewTime"> {reviewsTime[37]}</small>
                                          {this.ratingReview(37)}
                                        </h5>
                                        <p className="reviewText">{reviewsText[37]}</p>
                                      </Media.Body>
                                    </Media>
                                    <Media as="li">
                                      <img width={50} height={50} className="mr-3" src={reviewsPhoto[38]} alt="Profile" />
                                      <Media.Body>
                                        <h5 className="reviewName">{reviewsName[38]}
                                          <small className="reviewTime"> {reviewsTime[38]}</small>
                                          {this.ratingReview(38)}
                                        </h5>
                                        <p className="reviewText">{reviewsText[38]}</p>
                                      </Media.Body>
                                    </Media>
                                    <Media as="li">
                                      <img width={50} height={50} className="mr-3" src={reviewsPhoto[39]} alt="Profile" />
                                      <Media.Body>
                                        <h5 className="reviewName">{reviewsName[39]}
                                          <small className="reviewTime"> {reviewsTime[39]}</small>
                                          {this.ratingReview(39)}
                                        </h5>
                                        <p className="reviewText">{reviewsText[39]}</p>
                                      </Media.Body>
                                    </Media>
                                  </ul>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                  sdfsdfsdfsdfsdffsdfsdgsfgedgh
                                </Tab.Pane>
                              </Tab.Content>
                            </Col>
                          </Row>
                        </Tab.Container>
                      </Col>
                    </Row>
                  </Container>
                </Modal.Body>
              </Modal>
            </div>
            <div className="building" data-depth="5">
              <span className="extrusion" style={{ zIndex: 0, transform: 'translate3d(0px, 0px, 1px)' }}></span>
              <span className="extrusion" style={{ zIndex: 1, transform: 'translate3d(0px, 0px, 4px)' }}></span>
              <span className="extrusion" style={{ zIndex: 2, transform: 'translate3d(0px, 0px,  7px)' }}></span>
              <span className="extrusion" style={{ zIndex: 3, transform: 'translate3d(0px, 0px,  10px)' }}></span>
              <Button  className="extrusion" onClick={() => this.setState({ showModal9: true })} 
              style={{ zIndex: 4, transform: 'translate3d(0px, 0px,  13px)', boxShadow: this.placeRating(8) }}></Button >
              <Modal size="xl" aria-labelledby="contained-modal-title-vcenter" centered show={this.state.showModal9} onHide={closeModal9}>
                <Modal.Body>
                  <Container>
                    <Row className="show-grid">
                      <Col xs={5} md={5}>

                        <Card style={{ width: '25rem' }}>
                          <Carousel>
                            <Carousel.Item>
                              <Image className="rounded mx-auto d-block" src={images[32]} />
                            </Carousel.Item>
                            <Carousel.Item>
                              <Image className="rounded mx-auto d-block" src={images[33]} />
                            </Carousel.Item>
                            <Carousel.Item>
                              <Image className="rounded mx-auto d-block" src={images[34]} />
                            </Carousel.Item>
                            <Carousel.Item>
                              <Image className="rounded mx-auto d-block" src={images[35]} />
                            </Carousel.Item>
                          </Carousel>

                          <Card.Body>
                            <ListGroup>
                              <ListGroup.Item className="lgoneeight"><span className="inputTittles">name</span>{nameTitle[8]}</ListGroup.Item>
                              <ListGroup.Item className="lgtwoeight"><span className="inputTittles">address</span>{address[8]}</ListGroup.Item>
                              <ListGroup.Item className="lgthreeeight"><span className="inputTittles">rating</span>{rating[8]}</ListGroup.Item>
                              <ListGroup.Item className="lgfoureight"><span className="inputTittles">total ratings</span>{userRatingTotal[8]}</ListGroup.Item>
                              <ListGroup.Item className="lgfiveeight"><span className="inputTittles">phone</span>{phoneNumber[8]}</ListGroup.Item>
                              <ListGroup.Item className="lgsixeight">
                                <Button className="inputButtons" rel="noopener noreferrer" target="_blank" href={website[8]} >Website</Button>
                              </ListGroup.Item>

                            </ListGroup>

                          </Card.Body>
                        </Card>
                      </Col>
                      <Col xs={7} md={7}>
                        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                          <Row>
                            <Col sm={3}>
                              <Nav variant="pills" className="flex-column text-center">
                                <Nav.Item>
                                  <Nav.Link eventKey="first">Reviews</Nav.Link>
                                </Nav.Item>

                              </Nav>
                            </Col>
                            <Col sm={9}>
                              <Tab.Content>
                                <Tab.Pane eventKey="first">
                                  <ul className="list-unstyled">
                                    <Media as="li">
                                      <img width={50} height={50} className="mr-3" src={reviewsPhoto[40]} alt="Profile" />
                                      <Media.Body>
                                        <h5 className="reviewName">{reviewsName[40]}
                                          <small className="reviewTime"> {reviewsTime[40]}</small>
                                          {this.ratingReview(40)}
                                        </h5>
                                        <p className="reviewText">{reviewsText[40]}</p>
                                      </Media.Body>
                                    </Media>

                                    <Media as="li">
                                      <img width={50} height={50} className="mr-3" src={reviewsPhoto[41]} alt="Profile" />
                                      <Media.Body>
                                        <h5 className="reviewName">{reviewsName[41]}
                                          <small className="reviewTime"> {reviewsTime[41]}</small>
                                          {this.ratingReview(41)}
                                        </h5>
                                        <p className="reviewText">{reviewsText[41]}</p>
                                      </Media.Body>
                                    </Media>

                                    <Media as="li">
                                      <img width={50} height={50} className="mr-3" src={reviewsPhoto[42]} alt="Profile" />
                                      <Media.Body>
                                        <h5 className="reviewName">{reviewsName[42]}
                                          <small className="reviewTime"> {reviewsTime[42]}</small>
                                          {this.ratingReview(42)}
                                        </h5>
                                        <p className="reviewText">{reviewsText[42]}</p>
                                      </Media.Body>
                                    </Media>
                                    <Media as="li">
                                      <img width={50} height={50} className="mr-3" src={reviewsPhoto[43]} alt="Profile" />
                                      <Media.Body>
                                        <h5 className="reviewName">{reviewsName[43]}
                                          <small className="reviewTime"> {reviewsTime[43]}</small>
                                          {this.ratingReview(43)}
                                        </h5>
                                        <p className="reviewText">{reviewsText[43]}</p>
                                      </Media.Body>
                                    </Media>
                                    <Media as="li">
                                      <img width={50} height={50} className="mr-3" src={reviewsPhoto[44]} alt="Profile" />
                                      <Media.Body>
                                        <h5 className="reviewName">{reviewsName[44]}
                                          <small className="reviewTime"> {reviewsTime[44]}</small>
                                          {this.ratingReview(44)}
                                        </h5>
                                        <p className="reviewText">{reviewsText[44]}</p>
                                      </Media.Body>
                                    </Media>
                                  </ul>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                  sdfsdfsdfsdfsdffsdfsdgsfgedgh
                                </Tab.Pane>
                              </Tab.Content>
                            </Col>
                          </Row>
                        </Tab.Container>
                      </Col>
                    </Row>
                  </Container>
                </Modal.Body>
              </Modal>
            </div>
            <div className="building" data-depth="14">
              <span className="extrusion" style={{ zIndex: 0, transform: 'translate3d(0px, 0px, 1px)' }}></span>
              <span className="extrusion" style={{ zIndex: 1, transform: 'translate3d(0px, 0px, 4px)' }}></span>
              <span className="extrusion" style={{ zIndex: 2, transform: 'translate3d(0px, 0px,  7px)' }}></span>
              <span className="extrusion" style={{ zIndex: 3, transform: 'translate3d(0px, 0px,  10px)' }}></span>
              <span className="extrusion" style={{ zIndex: 4, transform: 'translate3d(0px, 0px,  13px)' }}></span>
              <span className="extrusion" style={{ zIndex: 5, transform: 'translate3d(0px, 0px,  16px)' }}></span>
              <span className="extrusion" style={{ zIndex: 6, transform: 'translate3d(0px, 0px,  19px)' }}></span>
              <span className="extrusion" style={{ zIndex: 7, transform: 'translate3d(0px, 0px,  22px)' }}></span>
              <span className="extrusion" style={{ zIndex: 8, transform: 'translate3d(0px, 0px,  25px)' }}></span>
              <span className="extrusion" style={{ zIndex: 9, transform: 'translate3d(0px, 0px,  28px)' }}></span>
              <span className="extrusion" style={{ zIndex: 10, transform: 'translate3d(0px, 0px,  31px)' }}></span>
              <span className="extrusion" style={{ zIndex: 11, transform: 'translate3d(0px, 0px,  34px)' }}></span>
              <span className="extrusion" style={{ zIndex: 12, transform: 'translate3d(0px, 0px,  37px)' }}></span>
              <Button  className="extrusion" onClick={() => this.setState({ showModal10: true })} 
              style={{ zIndex: 13, transform: 'translate3d(0px, 0px,  40px)', boxShadow: this.placeRating(9) }}></Button >
              <Modal size="xl" aria-labelledby="contained-modal-title-vcenter" centered show={this.state.showModal10} onHide={closeModal10}>
                <Modal.Body>
                  <Container>
                    <Row className="show-grid">
                      <Col xs={5} md={5}>

                        <Card style={{ width: '25rem' }}>
                          <Carousel>
                            <Carousel.Item>
                              <Image className="rounded mx-auto d-block" src={images[36]} />
                            </Carousel.Item>
                            <Carousel.Item>
                              <Image className="rounded mx-auto d-block" src={images[37]} />
                            </Carousel.Item>
                            <Carousel.Item>
                              <Image className="rounded mx-auto d-block" src={images[38]} />
                            </Carousel.Item>
                            <Carousel.Item>
                              <Image className="rounded mx-auto d-block" src={images[39]} />
                            </Carousel.Item>
                          </Carousel>

                          <Card.Body>
                            <ListGroup>
                              <ListGroup.Item className="lgonenine"><span className="inputTittles">name</span>{nameTitle[9]}</ListGroup.Item>
                              <ListGroup.Item className="lgtwonine"><span className="inputTittles">address</span>{address[9]}</ListGroup.Item>
                              <ListGroup.Item className="lgthreenine"><span className="inputTittles">rating</span>{rating[9]}</ListGroup.Item>
                              <ListGroup.Item className="lgfournine"><span className="inputTittles">total ratings</span>{userRatingTotal[9]}</ListGroup.Item>
                              <ListGroup.Item className="lgfivenine"><span className="inputTittles">phone</span>{phoneNumber[9]}</ListGroup.Item>
                              <ListGroup.Item className="lgsixnine">
                                <Button className="inputButtons" rel="noopener noreferrer" target="_blank" href={website[9]} >Website</Button>
                              </ListGroup.Item>

                            </ListGroup>

                          </Card.Body>
                        </Card>
                      </Col>
                      <Col xs={7} md={7}>
                        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                          <Row>
                            <Col sm={3}>
                              <Nav variant="pills" className="flex-column text-center">
                                <Nav.Item>
                                  <Nav.Link eventKey="first">Reviews</Nav.Link>
                                </Nav.Item>

                              </Nav>
                            </Col>
                            <Col sm={9}>
                              <Tab.Content>
                                <Tab.Pane eventKey="first">
                                  <ul className="list-unstyled">
                                    <Media as="li">
                                      <img width={50} height={50} className="mr-3" src={reviewsPhoto[45]} alt="Profile" />
                                      <Media.Body>
                                        <h5 className="reviewName">{reviewsName[45]}
                                          <small className="reviewTime"> {reviewsTime[45]}</small>
                                          {this.ratingReview(45)}
                                        </h5>
                                        <p className="reviewText">{reviewsText[45]}</p>
                                      </Media.Body>
                                    </Media>

                                    <Media as="li">
                                      <img width={50} height={50} className="mr-3" src={reviewsPhoto[46]} alt="Profile" />
                                      <Media.Body>
                                        <h5 className="reviewName">{reviewsName[46]}
                                          <small className="reviewTime"> {reviewsTime[46]}</small>
                                          {this.ratingReview(46)}
                                        </h5>
                                        <p className="reviewText">{reviewsText[46]}</p>
                                      </Media.Body>
                                    </Media>

                                    <Media as="li">
                                      <img width={50} height={50} className="mr-3" src={reviewsPhoto[47]} alt="Profile" />
                                      <Media.Body>
                                        <h5 className="reviewName">{reviewsName[47]}
                                          <small className="reviewTime"> {reviewsTime[47]}</small>
                                          {this.ratingReview(47)}
                                        </h5>
                                        <p className="reviewText">{reviewsText[47]}</p>
                                      </Media.Body>
                                    </Media>
                                    <Media as="li">
                                      <img width={50} height={50} className="mr-3" src={reviewsPhoto[48]} alt="Profile" />
                                      <Media.Body>
                                        <h5 className="reviewName">{reviewsName[48]}
                                          <small className="reviewTime"> {reviewsTime[48]}</small>
                                          {this.ratingReview(48)}
                                        </h5>
                                        <p className="reviewText">{reviewsText[48]}</p>
                                      </Media.Body>
                                    </Media>
                                    <Media as="li">
                                      <img width={50} height={50} className="mr-3" src={reviewsPhoto[49]} alt="Profile" />
                                      <Media.Body>
                                        <h5 className="reviewName">{reviewsName[49]}
                                          <small className="reviewTime"> {reviewsTime[49]}</small>
                                          {this.ratingReview(49)}
                                        </h5>
                                        <p className="reviewText">{reviewsText[49]}</p>
                                      </Media.Body>
                                    </Media>
                                  </ul>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                  sdfsdfsdfsdfsdffsdfsdgsfgedgh
                                </Tab.Pane>
                              </Tab.Content>
                            </Col>
                          </Row>
                        </Tab.Container>
                      </Col>
                    </Row>
                  </Container>
                </Modal.Body>
              </Modal>
            </div>
            <div className="building" data-depth="10">
              <span className="extrusion" style={{ zIndex: 0, transform: 'translate3d(0px, 0px, 1px)' }}></span>
              <span className="extrusion" style={{ zIndex: 1, transform: 'translate3d(0px, 0px, 4px)' }}></span>
              <span className="extrusion" style={{ zIndex: 2, transform: 'translate3d(0px, 0px,  7px)' }}></span>
              <span className="extrusion" style={{ zIndex: 3, transform: 'translate3d(0px, 0px,  10px)' }}></span>
              <span className="extrusion" style={{ zIndex: 4, transform: 'translate3d(0px, 0px,  13px)' }}></span>
              <span className="extrusion" style={{ zIndex: 5, transform: 'translate3d(0px, 0px,  16px)' }}></span>
              <span className="extrusion" style={{ zIndex: 6, transform: 'translate3d(0px, 0px,  19px)' }}></span>
              <span className="extrusion" style={{ zIndex: 7, transform: 'translate3d(0px, 0px,  22px)' }}></span>
              <span className="extrusion" style={{ zIndex: 8, transform: 'translate3d(0px, 0px,  25px)' }}></span>
              <Button  className="extrusion" onClick={() => this.setState({ showModal11: true })} 
              style={{ zIndex: 9, transform: 'translate3d(0px, 0px,  28px)', boxShadow: this.placeRating(10) }}></Button >
              <Modal size="xl" aria-labelledby="contained-modal-title-vcenter" centered show={this.state.showModal11} onHide={closeModal11}>
                <Modal.Body>
                  <Container>
                    <Row className="show-grid">
                      <Col xs={5} md={5}>

                        <Card style={{ width: '25rem' }}>
                          <Carousel>
                            <Carousel.Item>
                              <Image className="rounded mx-auto d-block" src={images[40]} />
                            </Carousel.Item>
                            <Carousel.Item>
                              <Image className="rounded mx-auto d-block" src={images[41]} />
                            </Carousel.Item>
                            <Carousel.Item>
                              <Image className="rounded mx-auto d-block" src={images[42]} />
                            </Carousel.Item>
                            <Carousel.Item>
                              <Image className="rounded mx-auto d-block" src={images[43]} />
                            </Carousel.Item>
                          </Carousel>

                          <Card.Body>
                            <ListGroup>
                              <ListGroup.Item className="lgoneten"><span className="inputTittles">name</span>{nameTitle[10]}</ListGroup.Item>
                              <ListGroup.Item className="lgtwoten"><span className="inputTittles">address</span>{address[10]}</ListGroup.Item>
                              <ListGroup.Item className="lgthreeten"><span className="inputTittles">rating</span>{rating[10]}</ListGroup.Item>
                              <ListGroup.Item className="lgfourten"><span className="inputTittles">total ratings</span>{userRatingTotal[10]}</ListGroup.Item>
                              <ListGroup.Item className="lgfiveten"><span className="inputTittles">phone</span>{phoneNumber[10]}</ListGroup.Item>
                              <ListGroup.Item className="lgsixten">
                                <Button className="inputButtons" rel="noopener noreferrer" target="_blank" href={website[10]} >Website</Button>
                              </ListGroup.Item>

                            </ListGroup>

                          </Card.Body>
                        </Card>
                      </Col>
                      <Col xs={7} md={7}>
                        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                          <Row>
                            <Col sm={3}>
                              <Nav variant="pills" className="flex-column text-center">
                                <Nav.Item>
                                  <Nav.Link eventKey="first">Reviews</Nav.Link>
                                </Nav.Item>

                              </Nav>
                            </Col>
                            <Col sm={9}>
                              <Tab.Content>
                                <Tab.Pane eventKey="first">
                                  <ul className="list-unstyled">
                                    <Media as="li">
                                      <img width={50} height={50} className="mr-3" src={reviewsPhoto[50]} alt="Profile" />
                                      <Media.Body>
                                        <h5 className="reviewName">{reviewsName[50]}
                                          <small className="reviewTime"> {reviewsTime[50]}</small>
                                          {this.ratingReview(50)}
                                        </h5>
                                        <p className="reviewText">{reviewsText[50]}</p>
                                      </Media.Body>
                                    </Media>

                                    <Media as="li">
                                      <img width={50} height={50} className="mr-3" src={reviewsPhoto[51]} alt="Profile" />
                                      <Media.Body>
                                        <h5 className="reviewName">{reviewsName[51]}
                                          <small className="reviewTime"> {reviewsTime[51]}</small>
                                          {this.ratingReview(51)}
                                        </h5>
                                        <p className="reviewText">{reviewsText[51]}</p>
                                      </Media.Body>
                                    </Media>

                                    <Media as="li">
                                      <img width={50} height={50} className="mr-3" src={reviewsPhoto[52]} alt="Profile" />
                                      <Media.Body>
                                        <h5 className="reviewName">{reviewsName[52]}
                                          <small className="reviewTime"> {reviewsTime[52]}</small>
                                          {this.ratingReview(52)}
                                        </h5>
                                        <p className="reviewText">{reviewsText[52]}</p>
                                      </Media.Body>
                                    </Media>
                                    <Media as="li">
                                      <img width={50} height={50} className="mr-3" src={reviewsPhoto[53]} alt="Profile" />
                                      <Media.Body>
                                        <h5 className="reviewName">{reviewsName[53]}
                                          <small className="reviewTime"> {reviewsTime[53]}</small>
                                          {this.ratingReview(53)}
                                        </h5>
                                        <p className="reviewText">{reviewsText[53]}</p>
                                      </Media.Body>
                                    </Media>
                                    <Media as="li">
                                      <img width={50} height={50} className="mr-3" src={reviewsPhoto[54]} alt="Profile" />
                                      <Media.Body>
                                        <h5 className="reviewName">{reviewsName[54]}
                                          <small className="reviewTime"> {reviewsTime[54]}</small>
                                          {this.ratingReview(54)}
                                        </h5>
                                        <p className="reviewText">{reviewsText[54]}</p>
                                      </Media.Body>
                                    </Media>
                                  </ul>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                  sdfsdfsdfsdfsdffsdfsdgsfgedgh
                                </Tab.Pane>
                              </Tab.Content>
                            </Col>
                          </Row>
                        </Tab.Container>
                      </Col>
                    </Row>
                  </Container>
                </Modal.Body>
              </Modal>
            </div>
            <div className="building" data-depth="8">
              <span className="extrusion" style={{ zIndex: 0, transform: 'translate3d(0px, 0px, 1px)' }}></span>
              <span className="extrusion" style={{ zIndex: 1, transform: 'translate3d(0px, 0px, 4px)' }}></span>
              <span className="extrusion" style={{ zIndex: 2, transform: 'translate3d(0px, 0px,  7px)' }}></span>
              <span className="extrusion" style={{ zIndex: 3, transform: 'translate3d(0px, 0px,  10px)' }}></span>
              <span className="extrusion" style={{ zIndex: 4, transform: 'translate3d(0px, 0px,  13px)' }}></span>
              <span className="extrusion" style={{ zIndex: 5, transform: 'translate3d(0px, 0px,  16px)' }}></span>
              <span className="extrusion" style={{ zIndex: 6, transform: 'translate3d(0px, 0px,  19px)' }}></span>
              <Button  className="extrusion" onClick={() => this.setState({ showModal12: true })} 
              style={{ zIndex: 7, transform: 'translate3d(0px, 0px,  22px)', boxShadow: this.placeRating(11) }}></Button >
              <Modal size="xl" aria-labelledby="contained-modal-title-vcenter" centered show={this.state.showModal12} onHide={closeModal12}>
                <Modal.Body>
                  <Container>
                    <Row className="show-grid">
                      <Col xs={5} md={5}>

                        <Card style={{ width: '25rem' }}>
                          <Carousel>
                            <Carousel.Item>
                              <Image className="rounded mx-auto d-block" src={images[44]} />
                            </Carousel.Item>
                            <Carousel.Item>
                              <Image className="rounded mx-auto d-block" src={images[45]} />
                            </Carousel.Item>
                            <Carousel.Item>
                              <Image className="rounded mx-auto d-block" src={images[46]} />
                            </Carousel.Item>
                            <Carousel.Item>
                              <Image className="rounded mx-auto d-block" src={images[47]} />
                            </Carousel.Item>
                          </Carousel>

                          <Card.Body>
                            <ListGroup>
                              <ListGroup.Item className="lgoneeleven"><span className="inputTittles">name</span>{nameTitle[11]}</ListGroup.Item>
                              <ListGroup.Item className="lgtwoeleven"><span className="inputTittles">address</span>{address[11]}</ListGroup.Item>
                              <ListGroup.Item className="lgthreeeleven"><span className="inputTittles">rating</span>{rating[11]}</ListGroup.Item>
                              <ListGroup.Item className="lgfoureleven"><span className="inputTittles">total ratings</span>{userRatingTotal[11]}</ListGroup.Item>
                              <ListGroup.Item className="lgfiveeleven"><span className="inputTittles">phone</span>{phoneNumber[11]}</ListGroup.Item>
                              <ListGroup.Item className="lgsixeleven">
                                <Button className="inputButtons" rel="noopener noreferrer" target="_blank" href={website[11]} >Website</Button>
                              </ListGroup.Item>

                            </ListGroup>

                          </Card.Body>
                        </Card>
                      </Col>
                      <Col xs={7} md={7}>
                        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                          <Row>
                            <Col sm={3}>
                              <Nav variant="pills" className="flex-column text-center">
                                <Nav.Item>
                                  <Nav.Link eventKey="first">Reviews</Nav.Link>
                                </Nav.Item>

                              </Nav>
                            </Col>
                            <Col sm={9}>
                              <Tab.Content>
                                <Tab.Pane eventKey="first">
                                  <ul className="list-unstyled">
                                    <Media as="li">
                                      <img width={50} height={50} className="mr-3" src={reviewsPhoto[55]} alt="Profile" />
                                      <Media.Body>
                                        <h5 className="reviewName">{reviewsName[55]}
                                          <small className="reviewTime"> {reviewsTime[55]}</small>
                                          {this.ratingReview(55)}
                                        </h5>
                                        <p className="reviewText">{reviewsText[55]}</p>
                                      </Media.Body>
                                    </Media>

                                    <Media as="li">
                                      <img width={50} height={50} className="mr-3" src={reviewsPhoto[56]} alt="Profile" />
                                      <Media.Body>
                                        <h5 className="reviewName">{reviewsName[56]}
                                          <small className="reviewTime"> {reviewsTime[56]}</small>
                                          {this.ratingReview(56)}
                                        </h5>
                                        <p className="reviewText">{reviewsText[56]}</p>
                                      </Media.Body>
                                    </Media>

                                    <Media as="li">
                                      <img width={50} height={50} className="mr-3" src={reviewsPhoto[57]} alt="Profile" />
                                      <Media.Body>
                                        <h5 className="reviewName">{reviewsName[57]}
                                          <small className="reviewTime"> {reviewsTime[57]}</small>
                                          {this.ratingReview(57)}
                                        </h5>
                                        <p className="reviewText">{reviewsText[57]}</p>
                                      </Media.Body>
                                    </Media>
                                    <Media as="li">
                                      <img width={50} height={50} className="mr-3" src={reviewsPhoto[58]} alt="Profile" />
                                      <Media.Body>
                                        <h5 className="reviewName">{reviewsName[58]}
                                          <small className="reviewTime"> {reviewsTime[58]}</small>
                                          {this.ratingReview(58)}
                                        </h5>
                                        <p className="reviewText">{reviewsText[58]}</p>
                                      </Media.Body>
                                    </Media>
                                    <Media as="li">
                                      <img width={50} height={50} className="mr-3" src={reviewsPhoto[59]} alt="Profile" />
                                      <Media.Body>
                                        <h5 className="reviewName">{reviewsName[59]}
                                          <small className="reviewTime"> {reviewsTime[59]}</small>
                                          {this.ratingReview(59)}
                                        </h5>
                                        <p className="reviewText">{reviewsText[59]}</p>
                                      </Media.Body>
                                    </Media>
                                  </ul>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                  sdfsdfsdfsdfsdffsdfsdgsfgedgh
                                </Tab.Pane>
                              </Tab.Content>
                            </Col>
                          </Row>
                        </Tab.Container>
                      </Col>
                    </Row>
                  </Container>
                </Modal.Body>
              </Modal>
            </div>
            <div className="building" data-depth="11">
              <span className="extrusion" style={{ zIndex: 0, transform: 'translate3d(0px, 0px, 1px)' }}></span>
              <span className="extrusion" style={{ zIndex: 1, transform: 'translate3d(0px, 0px, 4px)' }}></span>
              <span className="extrusion" style={{ zIndex: 2, transform: 'translate3d(0px, 0px,  7px)' }}></span>
              <span className="extrusion" style={{ zIndex: 3, transform: 'translate3d(0px, 0px,  10px)' }}></span>
              <span className="extrusion" style={{ zIndex: 4, transform: 'translate3d(0px, 0px,  13px)' }}></span>
              <span className="extrusion" style={{ zIndex: 5, transform: 'translate3d(0px, 0px,  16px)' }}></span>
              <span className="extrusion" style={{ zIndex: 6, transform: 'translate3d(0px, 0px,  19px)' }}></span>
              <span className="extrusion" style={{ zIndex: 7, transform: 'translate3d(0px, 0px,  22px)' }}></span>
              <span className="extrusion" style={{ zIndex: 8, transform: 'translate3d(0px, 0px,  25px)' }}></span>
              <span className="extrusion" style={{ zIndex: 9, transform: 'translate3d(0px, 0px,  28px)' }}></span>
              <Button  className="extrusion" onClick={() => this.setState({ showModal13: true })} 
              style={{ zIndex: 10, transform: 'translate3d(0px, 0px,  31px)', boxShadow: this.placeRating(12) }}></Button >
              <Modal size="xl" aria-labelledby="contained-modal-title-vcenter" centered show={this.state.showModal13} onHide={closeModal13}>
                <Modal.Body>
                  <Container>
                    <Row className="show-grid">
                      <Col xs={5} md={5}>

                        <Card style={{ width: '25rem' }}>
                          <Carousel>
                            <Carousel.Item>
                              <Image className="rounded mx-auto d-block" src={images[48]} />
                            </Carousel.Item>
                            <Carousel.Item>
                              <Image className="rounded mx-auto d-block" src={images[49]} />
                            </Carousel.Item>
                            <Carousel.Item>
                              <Image className="rounded mx-auto d-block" src={images[50]} />
                            </Carousel.Item>
                            <Carousel.Item>
                              <Image className="rounded mx-auto d-block" src={images[51]} />
                            </Carousel.Item>
                          </Carousel>

                          <Card.Body>
                            <ListGroup>
                              <ListGroup.Item className="lgonetwelve"><span className="inputTittles">name</span>{nameTitle[12]}</ListGroup.Item>
                              <ListGroup.Item className="lgtwotwelve"><span className="inputTittles">address</span>{address[12]}</ListGroup.Item>
                              <ListGroup.Item className="lgthreetwelve"><span className="inputTittles">rating</span>{rating[12]}</ListGroup.Item>
                              <ListGroup.Item className="lgfourtwelve"><span className="inputTittles">total ratings</span>{userRatingTotal[12]}</ListGroup.Item>
                              <ListGroup.Item className="lgfivetwelve"><span className="inputTittles">phone</span>{phoneNumber[12]}</ListGroup.Item>
                              <ListGroup.Item className="lgsixtwelve">
                                <Button className="inputButtons" rel="noopener noreferrer" target="_blank" href={website[12]} >Website</Button>
                              </ListGroup.Item>

                            </ListGroup>

                          </Card.Body>
                        </Card>
                      </Col>
                      <Col xs={7} md={7}>
                        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                          <Row>
                            <Col sm={3}>
                              <Nav variant="pills" className="flex-column text-center">
                                <Nav.Item>
                                  <Nav.Link eventKey="first">Reviews</Nav.Link>
                                </Nav.Item>

                              </Nav>
                            </Col>
                            <Col sm={9}>
                              <Tab.Content>
                                <Tab.Pane eventKey="first">
                                  <ul className="list-unstyled">
                                    <Media as="li">
                                      <img width={50} height={50} className="mr-3" src={reviewsPhoto[60]} alt="Profile" />
                                      <Media.Body>
                                        <h5 className="reviewName">{reviewsName[60]}
                                          <small className="reviewTime"> {reviewsTime[60]}</small>
                                          {this.ratingReview(60)}
                                        </h5>
                                        <p className="reviewText">{reviewsText[60]}</p>
                                      </Media.Body>
                                    </Media>

                                    <Media as="li">
                                      <img width={50} height={50} className="mr-3" src={reviewsPhoto[61]} alt="Profile" />
                                      <Media.Body>
                                        <h5 className="reviewName">{reviewsName[61]}
                                          <small className="reviewTime"> {reviewsTime[61]}</small>
                                          {this.ratingReview(61)}
                                        </h5>
                                        <p className="reviewText">{reviewsText[61]}</p>
                                      </Media.Body>
                                    </Media>

                                    <Media as="li">
                                      <img width={50} height={50} className="mr-3" src={reviewsPhoto[62]} alt="Profile" />
                                      <Media.Body>
                                        <h5 className="reviewName">{reviewsName[62]}
                                          <small className="reviewTime"> {reviewsTime[62]}</small>
                                          {this.ratingReview(62)}
                                        </h5>
                                        <p className="reviewText">{reviewsText[62]}</p>
                                      </Media.Body>
                                    </Media>
                                    <Media as="li">
                                      <img width={50} height={50} className="mr-3" src={reviewsPhoto[63]} alt="Profile" />
                                      <Media.Body>
                                        <h5 className="reviewName">{reviewsName[63]}
                                          <small className="reviewTime"> {reviewsTime[63]}</small>
                                          {this.ratingReview(63)}
                                        </h5>
                                        <p className="reviewText">{reviewsText[63]}</p>
                                      </Media.Body>
                                    </Media>
                                    <Media as="li">
                                      <img width={50} height={50} className="mr-3" src={reviewsPhoto[64]} alt="Profile" />
                                      <Media.Body>
                                        <h5 className="reviewName">{reviewsName[64]}
                                          <small className="reviewTime"> {reviewsTime[64]}</small>
                                          {this.ratingReview(64)}
                                        </h5>
                                        <p className="reviewText">{reviewsText[64]}</p>
                                      </Media.Body>
                                    </Media>
                                  </ul>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                  sdfsdfsdfsdfsdffsdfsdgsfgedgh
                                </Tab.Pane>
                              </Tab.Content>
                            </Col>
                          </Row>
                        </Tab.Container>
                      </Col>
                    </Row>
                  </Container>
                </Modal.Body>
              </Modal>
            </div>
            <div className="building" data-depth="11">
              <span className="extrusion" style={{ zIndex: 0, transform: 'translate3d(0px, 0px, 1px)' }}></span>
              <span className="extrusion" style={{ zIndex: 1, transform: 'translate3d(0px, 0px, 4px)' }}></span>
              <span className="extrusion" style={{ zIndex: 2, transform: 'translate3d(0px, 0px,  7px)' }}></span>
              <span className="extrusion" style={{ zIndex: 3, transform: 'translate3d(0px, 0px,  10px)' }}></span>
              <span className="extrusion" style={{ zIndex: 4, transform: 'translate3d(0px, 0px,  13px)' }}></span>
              <span className="extrusion" style={{ zIndex: 5, transform: 'translate3d(0px, 0px,  16px)' }}></span>
              <span className="extrusion" style={{ zIndex: 6, transform: 'translate3d(0px, 0px,  19px)' }}></span>
              <span className="extrusion" style={{ zIndex: 7, transform: 'translate3d(0px, 0px,  22px)' }}></span>
              <span className="extrusion" style={{ zIndex: 8, transform: 'translate3d(0px, 0px,  25px)' }}></span>
              <span className="extrusion" style={{ zIndex: 9, transform: 'translate3d(0px, 0px,  28px)' }}></span>
              <Button  className="extrusion" onClick={() => this.setState({ showModal14: true })} 
              style={{ zIndex: 10, transform: 'translate3d(0px, 0px,  31px)', boxShadow: this.placeRating(13) }}></Button >
              <Modal size="xl" aria-labelledby="contained-modal-title-vcenter" centered show={this.state.showModal14} onHide={closeModal14}>
                <Modal.Body>
                  <Container>
                    <Row className="show-grid">
                      <Col xs={5} md={5}>

                        <Card style={{ width: '25rem' }}>
                          <Carousel>
                            <Carousel.Item>
                              <Image className="rounded mx-auto d-block" src={images[52]} />
                            </Carousel.Item>
                            <Carousel.Item>
                              <Image className="rounded mx-auto d-block" src={images[53]} />
                            </Carousel.Item>
                            <Carousel.Item>
                              <Image className="rounded mx-auto d-block" src={images[54]} />
                            </Carousel.Item>
                            <Carousel.Item>
                              <Image className="rounded mx-auto d-block" src={images[55]} />
                            </Carousel.Item>
                          </Carousel>

                          <Card.Body>
                            <ListGroup>
                              <ListGroup.Item className="lgthreeone"><span className="inputTittles">name</span>{nameTitle[13]}</ListGroup.Item>
                              <ListGroup.Item className="lgthreetwo"><span className="inputTittles">address</span>{address[13]}</ListGroup.Item>
                              <ListGroup.Item className="lgthreethree"><span className="inputTittles">rating</span>{rating[13]}</ListGroup.Item>
                              <ListGroup.Item className="lgthreefour"><span className="inputTittles">total ratings</span>{userRatingTotal[13]}</ListGroup.Item>
                              <ListGroup.Item className="lgthreefive"><span className="inputTittles">phone</span>{phoneNumber[13]}</ListGroup.Item>
                              <ListGroup.Item className="lgthreesix">
                                <Button className="inputButtons" rel="noopener noreferrer" target="_blank" href={website[13]} >Website</Button>
                              </ListGroup.Item>

                            </ListGroup>

                          </Card.Body>
                        </Card>
                      </Col>
                      <Col xs={7} md={7}>
                        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                          <Row>
                            <Col sm={3}>
                              <Nav variant="pills" className="flex-column text-center">
                                <Nav.Item>
                                  <Nav.Link eventKey="first">Reviews</Nav.Link>
                                </Nav.Item>

                              </Nav>
                            </Col>
                            <Col sm={9}>
                              <Tab.Content>
                                <Tab.Pane eventKey="first">
                                  <ul className="list-unstyled">
                                    <Media as="li">
                                      <img width={50} height={50} className="mr-3" src={reviewsPhoto[65]} alt="Profile" />
                                      <Media.Body>
                                        <h5 className="reviewName">{reviewsName[65]}
                                          <small className="reviewTime"> {reviewsTime[65]}</small>
                                          {this.ratingReview(65)}
                                        </h5>
                                        <p className="reviewText">{reviewsText[65]}</p>
                                      </Media.Body>
                                    </Media>

                                    <Media as="li">
                                      <img width={50} height={50} className="mr-3" src={reviewsPhoto[66]} alt="Profile" />
                                      <Media.Body>
                                        <h5 className="reviewName">{reviewsName[66]}
                                          <small className="reviewTime"> {reviewsTime[66]}</small>
                                          {this.ratingReview(66)}
                                        </h5>
                                        <p className="reviewText">{reviewsText[66]}</p>
                                      </Media.Body>
                                    </Media>

                                    <Media as="li">
                                      <img width={50} height={50} className="mr-3" src={reviewsPhoto[67]} alt="Profile" />
                                      <Media.Body>
                                        <h5 className="reviewName">{reviewsName[67]}
                                          <small className="reviewTime"> {reviewsTime[67]}</small>
                                          {this.ratingReview(67)}
                                        </h5>
                                        <p className="reviewText">{reviewsText[67]}</p>
                                      </Media.Body>
                                    </Media>
                                    <Media as="li">
                                      <img width={50} height={50} className="mr-3" src={reviewsPhoto[68]} alt="Profile" />
                                      <Media.Body>
                                        <h5 className="reviewName">{reviewsName[68]}
                                          <small className="reviewTime"> {reviewsTime[68]}</small>
                                          {this.ratingReview(68)}
                                        </h5>
                                        <p className="reviewText">{reviewsText[68]}</p>
                                      </Media.Body>
                                    </Media>
                                    <Media as="li">
                                      <img width={50} height={50} className="mr-3" src={reviewsPhoto[69]} alt="Profile" />
                                      <Media.Body>
                                        <h5 className="reviewName">{reviewsName[69]}
                                          <small className="reviewTime"> {reviewsTime[69]}</small>
                                          {this.ratingReview(69)}
                                        </h5>
                                        <p className="reviewText">{reviewsText[69]}</p>
                                      </Media.Body>
                                    </Media>
                                  </ul>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                  sdfsdfsdfsdfsdffsdfsdgsfgedgh
                                </Tab.Pane>
                              </Tab.Content>
                            </Col>
                          </Row>
                        </Tab.Container>
                      </Col>
                    </Row>
                  </Container>
                </Modal.Body>
              </Modal>
            </div>
            <div className="building" data-depth="11">
              <span className="extrusion" style={{ zIndex: 0, transform: 'translate3d(0px, 0px, 1px)' }}></span>
              <span className="extrusion" style={{ zIndex: 1, transform: 'translate3d(0px, 0px, 4px)' }}></span>
              <span className="extrusion" style={{ zIndex: 2, transform: 'translate3d(0px, 0px,  7px)' }}></span>
              <span className="extrusion" style={{ zIndex: 3, transform: 'translate3d(0px, 0px,  10px)' }}></span>
              <span className="extrusion" style={{ zIndex: 4, transform: 'translate3d(0px, 0px,  13px)' }}></span>
              <span className="extrusion" style={{ zIndex: 5, transform: 'translate3d(0px, 0px,  16px)' }}></span>
              <span className="extrusion" style={{ zIndex: 6, transform: 'translate3d(0px, 0px,  19px)' }}></span>
              <span className="extrusion" style={{ zIndex: 7, transform: 'translate3d(0px, 0px,  22px)' }}></span>
              <span className="extrusion" style={{ zIndex: 8, transform: 'translate3d(0px, 0px,  25px)' }}></span>
              <span className="extrusion" style={{ zIndex: 9, transform: 'translate3d(0px, 0px,  28px)' }}></span>
              <Button  className="extrusion" onClick={() => this.setState({ showModal15: true })} 
              style={{ zIndex: 10, transform: 'translate3d(0px, 0px,  31px)', boxShadow: this.placeRating(14) }}></Button >
              <Modal size="xl" aria-labelledby="contained-modal-title-vcenter" centered show={this.state.showModal15} onHide={closeModal15}>
                <Modal.Body>
                  <Container>
                    <Row className="show-grid">
                      <Col xs={5} md={5}>

                        <Card style={{ width: '25rem' }}>
                          <Carousel>
                            <Carousel.Item>
                              <Image className="rounded mx-auto d-block" src={images[56]} />
                            </Carousel.Item>
                            <Carousel.Item>
                              <Image className="rounded mx-auto d-block" src={images[57]} />
                            </Carousel.Item>
                            <Carousel.Item>
                              <Image className="rounded mx-auto d-block" src={images[58]} />
                            </Carousel.Item>
                            <Carousel.Item>
                              <Image className="rounded mx-auto d-block" src={images[59]} />
                            </Carousel.Item>
                          </Carousel>

                          <Card.Body>
                            <ListGroup>
                              <ListGroup.Item className="lgthreeseven"><span className="inputTittles">name</span>{nameTitle[14]}</ListGroup.Item>
                              <ListGroup.Item className="lgthreeeight"><span className="inputTittles">address</span>{address[14]}</ListGroup.Item>
                              <ListGroup.Item className="lgthreenine"><span className="inputTittles">rating</span>{rating[14]}</ListGroup.Item>
                              <ListGroup.Item className="lgthreeten"><span className="inputTittles">total ratings</span>{userRatingTotal[14]}</ListGroup.Item>
                              <ListGroup.Item className="lgthreeeleven"><span className="inputTittles">phone</span>{phoneNumber[14]}</ListGroup.Item>
                              <ListGroup.Item className="lgthreetwelve">
                                <Button className="inputButtons" rel="noopener noreferrer" target="_blank" href={website[14]} >Website</Button>
                              </ListGroup.Item>

                            </ListGroup>

                          </Card.Body>
                        </Card>
                      </Col>
                      <Col xs={7} md={7}>
                        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                          <Row>
                            <Col sm={3}>
                              <Nav variant="pills" className="flex-column text-center">
                                <Nav.Item>
                                  <Nav.Link eventKey="first">Reviews</Nav.Link>
                                </Nav.Item>

                              </Nav>
                            </Col>
                            <Col sm={9}>
                              <Tab.Content>
                                <Tab.Pane eventKey="first">
                                  <ul className="list-unstyled">
                                    <Media as="li">
                                      <img width={50} height={50} className="mr-3" src={reviewsPhoto[70]} alt="Profile" />
                                      <Media.Body>
                                        <h5 className="reviewName">{reviewsName[70]}
                                          <small className="reviewTime"> {reviewsTime[70]}</small>
                                          {this.ratingReview(70)}
                                        </h5>
                                        <p className="reviewText">{reviewsText[70]}</p>
                                      </Media.Body>
                                    </Media>

                                    <Media as="li">
                                      <img width={50} height={50} className="mr-3" src={reviewsPhoto[71]} alt="Profile" />
                                      <Media.Body>
                                        <h5 className="reviewName">{reviewsName[71]}
                                          <small className="reviewTime"> {reviewsTime[71]}</small>
                                          {this.ratingReview(71)}
                                        </h5>
                                        <p className="reviewText">{reviewsText[71]}</p>
                                      </Media.Body>
                                    </Media>

                                    <Media as="li">
                                      <img width={50} height={50} className="mr-3" src={reviewsPhoto[72]} alt="Profile" />
                                      <Media.Body>
                                        <h5 className="reviewName">{reviewsName[72]}
                                          <small className="reviewTime"> {reviewsTime[72]}</small>
                                          {this.ratingReview(72)}
                                        </h5>
                                        <p className="reviewText">{reviewsText[72]}</p>
                                      </Media.Body>
                                    </Media>
                                    <Media as="li">
                                      <img width={50} height={50} className="mr-3" src={reviewsPhoto[73]} alt="Profile" />
                                      <Media.Body>
                                        <h5 className="reviewName">{reviewsName[73]}
                                          <small className="reviewTime"> {reviewsTime[73]}</small>
                                          {this.ratingReview(73)}
                                        </h5>
                                        <p className="reviewText">{reviewsText[73]}</p>
                                      </Media.Body>
                                    </Media>
                                    <Media as="li">
                                      <img width={50} height={50} className="mr-3" src={reviewsPhoto[74]} alt="Profile" />
                                      <Media.Body>
                                        <h5 className="reviewName">{reviewsName[74]}
                                          <small className="reviewTime"> {reviewsTime[74]}</small>
                                          {this.ratingReview(74)}
                                        </h5>
                                        <p className="reviewText">{reviewsText[74]}</p>
                                      </Media.Body>
                                    </Media>
                                  </ul>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                  sdfsdfsdfsdfsdffsdfsdgsfgedgh
                                </Tab.Pane>
                              </Tab.Content>
                            </Col>
                          </Row>
                        </Tab.Container>
                      </Col>
                    </Row>
                  </Container>
                </Modal.Body>
              </Modal>
            </div>
            <div className="building" data-depth="14">
              <span className="extrusion" style={{ zIndex: 0, transform: 'translate3d(0px, 0px, 1px)' }}></span>
              <span className="extrusion" style={{ zIndex: 1, transform: 'translate3d(0px, 0px, 4px)' }}></span>
              <span className="extrusion" style={{ zIndex: 2, transform: 'translate3d(0px, 0px,  7px)' }}></span>
              <span className="extrusion" style={{ zIndex: 3, transform: 'translate3d(0px, 0px,  10px)' }}></span>
              <span className="extrusion" style={{ zIndex: 4, transform: 'translate3d(0px, 0px,  13px)' }}></span>
              <span className="extrusion" style={{ zIndex: 5, transform: 'translate3d(0px, 0px,  16px)' }}></span>
              <span className="extrusion" style={{ zIndex: 6, transform: 'translate3d(0px, 0px,  19px)' }}></span>
              <span className="extrusion" style={{ zIndex: 7, transform: 'translate3d(0px, 0px,  22px)' }}></span>
              <span className="extrusion" style={{ zIndex: 8, transform: 'translate3d(0px, 0px,  25px)' }}></span>
              <span className="extrusion" style={{ zIndex: 9, transform: 'translate3d(0px, 0px,  28px)' }}></span>
              <span className="extrusion" style={{ zIndex: 10, transform: 'translate3d(0px, 0px,  31px)' }}></span>
              <span className="extrusion" style={{ zIndex: 11, transform: 'translate3d(0px, 0px,  34px)' }}></span>
              <span className="extrusion" style={{ zIndex: 12, transform: 'translate3d(0px, 0px,  37px)' }}></span>
              <Button  className="extrusion" onClick={() => this.setState({ showModal16: true })} 
              style={{ zIndex: 13, transform: 'translate3d(0px, 0px,  40px)', boxShadow: this.placeRating(15) }}></Button >
              <Modal size="xl" aria-labelledby="contained-modal-title-vcenter" centered show={this.state.showModal16} onHide={closeModal16}>
                <Modal.Body>
                  <Container>
                    <Row className="show-grid">
                      <Col xs={5} md={5}>

                        <Card style={{ width: '25rem' }}>
                          <Carousel>
                            <Carousel.Item>
                              <Image className="rounded mx-auto d-block" src={images[60]} />
                            </Carousel.Item>
                            <Carousel.Item>
                              <Image className="rounded mx-auto d-block" src={images[61]} />
                            </Carousel.Item>
                            <Carousel.Item>
                              <Image className="rounded mx-auto d-block" src={images[62]} />
                            </Carousel.Item>
                            <Carousel.Item>
                              <Image className="rounded mx-auto d-block" src={images[63]} />
                            </Carousel.Item>
                          </Carousel>

                          <Card.Body>
                            <ListGroup>
                              <ListGroup.Item className="lgfourone"><span className="inputTittles">name</span>{nameTitle[15]}</ListGroup.Item>
                              <ListGroup.Item className="lgfourtwo"><span className="inputTittles">address</span>{address[15]}</ListGroup.Item>
                              <ListGroup.Item className="lgfourthree"><span className="inputTittles">rating</span>{rating[15]}</ListGroup.Item>
                              <ListGroup.Item className="lgfourfour"><span className="inputTittles">total ratings</span>{userRatingTotal[15]}</ListGroup.Item>
                              <ListGroup.Item className="lgfourfive"><span className="inputTittles">phone</span>{phoneNumber[15]}</ListGroup.Item>
                              <ListGroup.Item className="lgfoursix">
                                <Button className="inputButtons" rel="noopener noreferrer" target="_blank" href={website[15]} >Website</Button>
                              </ListGroup.Item>

                            </ListGroup>

                          </Card.Body>
                        </Card>
                      </Col>
                      <Col xs={7} md={7}>
                        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                          <Row>
                            <Col sm={3}>
                              <Nav variant="pills" className="flex-column text-center">
                                <Nav.Item>
                                  <Nav.Link eventKey="first">Reviews</Nav.Link>
                                </Nav.Item>

                              </Nav>
                            </Col>
                            <Col sm={9}>
                              <Tab.Content>
                                <Tab.Pane eventKey="first">
                                  <ul className="list-unstyled">
                                    <Media as="li">
                                      <img width={50} height={50} className="mr-3" src={reviewsPhoto[75]} alt="Profile" />
                                      <Media.Body>
                                        <h5 className="reviewName">{reviewsName[75]}
                                          <small className="reviewTime"> {reviewsTime[75]}</small>
                                          {this.ratingReview(75)}
                                        </h5>
                                        <p className="reviewText">{reviewsText[75]}</p>
                                      </Media.Body>
                                    </Media>

                                    <Media as="li">
                                      <img width={50} height={50} className="mr-3" src={reviewsPhoto[76]} alt="Profile" />
                                      <Media.Body>
                                        <h5 className="reviewName">{reviewsName[76]}
                                          <small className="reviewTime"> {reviewsTime[76]}</small>
                                          {this.ratingReview(76)}
                                        </h5>
                                        <p className="reviewText">{reviewsText[76]}</p>
                                      </Media.Body>
                                    </Media>

                                    <Media as="li">
                                      <img width={50} height={50} className="mr-3" src={reviewsPhoto[77]} alt="Profile" />
                                      <Media.Body>
                                        <h5 className="reviewName">{reviewsName[77]}
                                          <small className="reviewTime"> {reviewsTime[77]}</small>
                                          {this.ratingReview(77)}
                                        </h5>
                                        <p className="reviewText">{reviewsText[77]}</p>
                                      </Media.Body>
                                    </Media>
                                    <Media as="li">
                                      <img width={50} height={50} className="mr-3" src={reviewsPhoto[78]} alt="Profile" />
                                      <Media.Body>
                                        <h5 className="reviewName">{reviewsName[78]}
                                          <small className="reviewTime"> {reviewsTime[78]}</small>
                                          {this.ratingReview(78)}
                                        </h5>
                                        <p className="reviewText">{reviewsText[78]}</p>
                                      </Media.Body>
                                    </Media>
                                    <Media as="li">
                                      <img width={50} height={50} className="mr-3" src={reviewsPhoto[79]} alt="Profile" />
                                      <Media.Body>
                                        <h5 className="reviewName">{reviewsName[79]}
                                          <small className="reviewTime"> {reviewsTime[79]}</small>
                                          {this.ratingReview(79)}
                                        </h5>
                                        <p className="reviewText">{reviewsText[79]}</p>
                                      </Media.Body>
                                    </Media>
                                  </ul>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                  sdfsdfsdfsdfsdffsdfsdgsfgedgh
                                </Tab.Pane>
                              </Tab.Content>
                            </Col>
                          </Row>
                        </Tab.Container>
                      </Col>
                    </Row>
                  </Container>
                </Modal.Body>
              </Modal>
            </div>
            <div className="building" data-depth="10">
              <span className="extrusion" style={{ zIndex: 0, transform: 'translate3d(0px, 0px, 1px)' }}></span>
              <span className="extrusion" style={{ zIndex: 1, transform: 'translate3d(0px, 0px, 4px)' }}></span>
              <span className="extrusion" style={{ zIndex: 2, transform: 'translate3d(0px, 0px,  7px)' }}></span>
              <span className="extrusion" style={{ zIndex: 3, transform: 'translate3d(0px, 0px,  10px)' }}></span>
              <span className="extrusion" style={{ zIndex: 4, transform: 'translate3d(0px, 0px,  13px)' }}></span>
              <span className="extrusion" style={{ zIndex: 5, transform: 'translate3d(0px, 0px,  16px)' }}></span>
              <span className="extrusion" style={{ zIndex: 6, transform: 'translate3d(0px, 0px,  19px)' }}></span>
              <span className="extrusion" style={{ zIndex: 7, transform: 'translate3d(0px, 0px,  22px)' }}></span>
              <span className="extrusion" style={{ zIndex: 8, transform: 'translate3d(0px, 0px,  25px)' }}></span>
              <Button  className="extrusion" onClick={() => this.setState({ showModal17: true })} 
              style={{ zIndex: 9, transform: 'translate3d(0px, 0px,  28px)', boxShadow: this.placeRating(16) }}></Button >
              <Modal size="xl" aria-labelledby="contained-modal-title-vcenter" centered show={this.state.showModal17} onHide={closeModal17}>
                <Modal.Body>
                  <Container>
                    <Row className="show-grid">
                      <Col xs={5} md={5}>

                        <Card style={{ width: '25rem' }}>
                          <Carousel>
                            <Carousel.Item>
                              <Image className="rounded mx-auto d-block" src={images[64]} />
                            </Carousel.Item>
                            <Carousel.Item>
                              <Image className="rounded mx-auto d-block" src={images[65]} />
                            </Carousel.Item>
                            <Carousel.Item>
                              <Image className="rounded mx-auto d-block" src={images[66]} />
                            </Carousel.Item>
                            <Carousel.Item>
                              <Image className="rounded mx-auto d-block" src={images[67]} />
                            </Carousel.Item>
                          </Carousel>

                          <Card.Body>
                            <ListGroup>
                              <ListGroup.Item className="lgfourseven"><span className="inputTittles">name</span>{nameTitle[16]}</ListGroup.Item>
                              <ListGroup.Item className="lgfoureight"><span className="inputTittles">address</span>{address[16]}</ListGroup.Item>
                              <ListGroup.Item className="lgfournine"><span className="inputTittles">rating</span>{rating[16]}</ListGroup.Item>
                              <ListGroup.Item className="lgfourten"><span className="inputTittles">total ratings</span>{userRatingTotal[16]}</ListGroup.Item>
                              <ListGroup.Item className="lgfoureleven"><span className="inputTittles">phone</span>{phoneNumber[16]}</ListGroup.Item>
                              <ListGroup.Item className="lgfourtwelve">
                                <Button className="inputButtons" rel="noopener noreferrer" target="_blank" href={website[16]} >Website</Button>
                              </ListGroup.Item>

                            </ListGroup>

                          </Card.Body>
                        </Card>
                      </Col>
                      <Col xs={7} md={7}>
                        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                          <Row>
                            <Col sm={3}>
                              <Nav variant="pills" className="flex-column text-center">
                                <Nav.Item>
                                  <Nav.Link eventKey="first">Reviews</Nav.Link>
                                </Nav.Item>

                              </Nav>
                            </Col>
                            <Col sm={9}>
                              <Tab.Content>
                                <Tab.Pane eventKey="first">
                                  <ul className="list-unstyled">
                                    <Media as="li">
                                      <img width={50} height={50} className="mr-3" src={reviewsPhoto[80]} alt="Profile" />
                                      <Media.Body>
                                        <h5 className="reviewName">{reviewsName[80]}
                                          <small className="reviewTime"> {reviewsTime[80]}</small>
                                          {this.ratingReview(80)}
                                        </h5>
                                        <p className="reviewText">{reviewsText[80]}</p>
                                      </Media.Body>
                                    </Media>

                                    <Media as="li">
                                      <img width={50} height={50} className="mr-3" src={reviewsPhoto[81]} alt="Profile" />
                                      <Media.Body>
                                        <h5 className="reviewName">{reviewsName[81]}
                                          <small className="reviewTime"> {reviewsTime[81]}</small>
                                          {this.ratingReview(81)}
                                        </h5>
                                        <p className="reviewText">{reviewsText[81]}</p>
                                      </Media.Body>
                                    </Media>

                                    <Media as="li">
                                      <img width={50} height={50} className="mr-3" src={reviewsPhoto[82]} alt="Profile" />
                                      <Media.Body>
                                        <h5 className="reviewName">{reviewsName[82]}
                                          <small className="reviewTime"> {reviewsTime[82]}</small>
                                          {this.ratingReview(82)}
                                        </h5>
                                        <p className="reviewText">{reviewsText[82]}</p>
                                      </Media.Body>
                                    </Media>
                                    <Media as="li">
                                      <img width={50} height={50} className="mr-3" src={reviewsPhoto[83]} alt="Profile" />
                                      <Media.Body>
                                        <h5 className="reviewName">{reviewsName[83]}
                                          <small className="reviewTime"> {reviewsTime[83]}</small>
                                          {this.ratingReview(83)}
                                        </h5>
                                        <p className="reviewText">{reviewsText[83]}</p>
                                      </Media.Body>
                                    </Media>
                                    <Media as="li">
                                      <img width={50} height={50} className="mr-3" src={reviewsPhoto[84]} alt="Profile" />
                                      <Media.Body>
                                        <h5 className="reviewName">{reviewsName[84]}
                                          <small className="reviewTime"> {reviewsTime[84]}</small>
                                          {this.ratingReview(84)}
                                        </h5>
                                        <p className="reviewText">{reviewsText[84]}</p>
                                      </Media.Body>
                                    </Media>
                                  </ul>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                  sdfsdfsdfsdfsdffsdfsdgsfgedgh
                                </Tab.Pane>
                              </Tab.Content>
                            </Col>
                          </Row>
                        </Tab.Container>
                      </Col>
                    </Row>
                  </Container>
                </Modal.Body>
              </Modal>
            </div>
            <div className="building" data-depth="6">
              <span className="extrusion" style={{ zIndex: 0, transform: 'translate3d(0px, 0px, 1px)' }}></span>
              <span className="extrusion" style={{ zIndex: 1, transform: 'translate3d(0px, 0px, 4px)' }}></span>
              <span className="extrusion" style={{ zIndex: 2, transform: 'translate3d(0px, 0px,  7px)' }}></span>
              <span className="extrusion" style={{ zIndex: 3, transform: 'translate3d(0px, 0px,  10px)' }}></span>
              <span className="extrusion" style={{ zIndex: 4, transform: 'translate3d(0px, 0px,  13px)' }}></span>
              <Button  className="extrusion" onClick={() => this.setState({ showModal18: true })} 
              style={{ zIndex: 5, transform: 'translate3d(0px, 0px,  16px)', boxShadow: this.placeRating(17) }}></Button >
              <Modal size="xl" aria-labelledby="contained-modal-title-vcenter" centered show={this.state.showModal18} onHide={closeModal18}>
                <Modal.Body>
                  <Container>
                    <Row className="show-grid">
                      <Col xs={5} md={5}>

                        <Card style={{ width: '25rem' }}>
                          <Carousel>
                            <Carousel.Item>
                              <Image className="rounded mx-auto d-block" src={images[68]} />
                            </Carousel.Item>
                            <Carousel.Item>
                              <Image className="rounded mx-auto d-block" src={images[69]} />
                            </Carousel.Item>
                            <Carousel.Item>
                              <Image className="rounded mx-auto d-block" src={images[70]} />
                            </Carousel.Item>
                          </Carousel>

                          <Card.Body>
                            <ListGroup>
                              <ListGroup.Item className="lgfiveseven"><span className="inputTittles">name</span>{nameTitle[17]}</ListGroup.Item>
                              <ListGroup.Item className="lgfiveeight"><span className="inputTittles">address</span>{address[17]}</ListGroup.Item>
                              <ListGroup.Item className="lgfivenine"><span className="inputTittles">rating</span>{rating[17]}</ListGroup.Item>
                              <ListGroup.Item className="lgfiveten"><span className="inputTittles">total ratings</span>{userRatingTotal[17]}</ListGroup.Item>
                              <ListGroup.Item className="lgfiveeleven"><span className="inputTittles">phone</span>{phoneNumber[17]}</ListGroup.Item>
                              <ListGroup.Item className="lgfivetwelve">
                                <Button className="inputButtons" rel="noopener noreferrer" target="_blank" href={website[17]} >Website</Button>
                              </ListGroup.Item>

                            </ListGroup>

                          </Card.Body>
                        </Card>
                      </Col>
                      <Col xs={7} md={7}>
                        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                          <Row>
                            <Col sm={3}>
                              <Nav variant="pills" className="flex-column text-center">
                                <Nav.Item>
                                  <Nav.Link eventKey="first">Reviews</Nav.Link>
                                </Nav.Item>

                              </Nav>
                            </Col>
                            <Col sm={9}>
                              <Tab.Content>
                                <Tab.Pane eventKey="first">
                                  <ul className="list-unstyled">
                                    <Media as="li">
                                      <img width={50} height={50} className="mr-3" src={reviewsPhoto[85]} alt="Profile" />
                                      <Media.Body>
                                        <h5 className="reviewName">{reviewsName[85]}
                                          <small className="reviewTime"> {reviewsTime[85]}</small>
                                          {this.ratingReview(85)}
                                        </h5>
                                        <p className="reviewText">{reviewsText[85]}</p>
                                      </Media.Body>
                                    </Media>

                                    <Media as="li">
                                      <img width={50} height={50} className="mr-3" src={reviewsPhoto[86]} alt="Profile" />
                                      <Media.Body>
                                        <h5 className="reviewName">{reviewsName[86]}
                                          <small className="reviewTime"> {reviewsTime[86]}</small>
                                          {this.ratingReview(86)}
                                        </h5>
                                        <p className="reviewText">{reviewsText[86]}</p>
                                      </Media.Body>
                                    </Media>

                                    <Media as="li">
                                      <img width={50} height={50} className="mr-3" src={reviewsPhoto[87]} alt="Profile" />
                                      <Media.Body>
                                        <h5 className="reviewName">{reviewsName[87]}
                                          <small className="reviewTime"> {reviewsTime[87]}</small>
                                          {this.ratingReview(87)}
                                        </h5>
                                        <p className="reviewText">{reviewsText[87]}</p>
                                      </Media.Body>
                                    </Media>
                                    <Media as="li">
                                      <img width={50} height={50} className="mr-3" src={reviewsPhoto[88]} alt="Profile" />
                                      <Media.Body>
                                        <h5 className="reviewName">{reviewsName[88]}
                                          <small className="reviewTime"> {reviewsTime[88]}</small>
                                          {this.ratingReview(88)}
                                        </h5>
                                        <p className="reviewText">{reviewsText[88]}</p>
                                      </Media.Body>
                                    </Media>
                                    <Media as="li">
                                      <img width={50} height={50} className="mr-3" src={reviewsPhoto[89]} alt="Profile" />
                                      <Media.Body>
                                        <h5 className="reviewName">{reviewsName[89]}
                                          <small className="reviewTime"> {reviewsTime[89]}</small>
                                          {this.ratingReview(89)}
                                        </h5>
                                        <p className="reviewText">{reviewsText[89]}</p>
                                      </Media.Body>
                                    </Media>
                                  </ul>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                  sdfsdfsdfsdfsdffsdfsdgsfgedgh
                                </Tab.Pane>
                              </Tab.Content>
                            </Col>
                          </Row>
                        </Tab.Container>
                      </Col>
                    </Row>
                  </Container>
                </Modal.Body>
              </Modal>
            </div>
          </div>
          <div className="vehicles">
            <div className="vehicle"></div>
            <div className="vehicle"></div>
          </div>
        </div>
      </div>
      </>
    );
  }

}