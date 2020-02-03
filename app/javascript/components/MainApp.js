import React from "react"
import PropTypes from "prop-types"
import { BrowserRouter as  Router, Route, Link } from 'react-router-dom'
import yellowvw from'components/yellowvw.jpg'
import hiverent1 from'components/hiverent1.jpg'
import hiverent2 from'components/hiverent2.jpg'
import hiverent3 from'components/hiverent3.jpg'


import Home from './pages/Home'
import AptShow from './pages/AptShow'
import Explore from './pages/Explore'
import EditApt from './pages/EditApt'
import NewApt from './pages/NewApt'
import Profile from './pages/Profile'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import {
  Nav,
  Navbar,
  NavbarBrand,
  NavItem,
  NavLink,
  NavbarText,
  Jumbotron,
  Button,
  Container,
  Card,
  CardImg,
  CardBody,
  CardText,
  CardSubtitle,
  CardTitle,
  Row,
  Col,

} from 'reactstrap';




class MainApp extends React.Component {
  render (){
  const {
      signed_in,
      sign_in_route,
      sign_out_route
    } = this.props
    return (

      <Router>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Honey List</NavbarBrand>
              <NavLink to="/" tag={Link}>Home</NavLink>
              <NavLink to="/Explore" tag={Link}>Explore</NavLink>
              <NavLink to="/Profile" tag={Link}>Profile</NavLink>

              {signed_in &&
                <div>
                <a href={sign_out_route}>Sign Out</a>
                </div>
              }
              {!signed_in &&
                <div>
                <a href={sign_in_route}>Sign In</a>
                </div>
              }
        </Navbar>

              <Jumbotron >
                <Container fluid>
                  <h1 className="display-3">Honey List</h1>
                  <p className="lead">See what the buzz is all about! Find your perfect space today!</p>
                </Container>
              </Jumbotron>

           <div>
           <Container>
             <Row>
               <Col md={4}>
                 <Card >
                   <CardImg top width="100%" img src={hiverent1} alt="Card image cap" />
                   <CardBody>
                     <CardTitle >Card title</CardTitle>
                     <CardText>Stay at this stunning Beyond-Fabulous luxury three bedroom, three bathroom full floor LOFT right in the heart of Midtown. Minutes to the Empire State Building, Bryant Park, Madison Square Park, Grand Central, United Nations HQ, and Madison Square Garden. It is perfect for your family or large group. The space is well decorated and always clean.</CardText>
                     <Link to='/AptShow'><Button>show</Button></Link>
                   </CardBody>
                 </Card>
               </Col>
               <Col md={4}>
                 <Card >
                   <CardImg top width="100%" img src={hiverent2} alt="Card image cap" />
                   <CardBody>
                     <CardTitle>Card title</CardTitle>
                     <CardText>Brand new renovated loft with no detail overlooked. Luxury is the absence of even the most minor discomfort...wait to experience it.</CardText>
                     <Link to='/AptShow'><Button>show</Button></Link>
                   </CardBody>
                 </Card>
               </Col>
               <Col md={4}>
                 <Card >
                   <CardImg top width="100%" img src={hiverent3} alt="Card image cap" />
                   <CardBody>
                     <CardTitle>Card title</CardTitle>
                     <CardText>The Condo offers 3 Bedrooms with 2 Bathrooms & luxurious appointed interiors showcasing Panoramic views of Manhattans skyline, including the Empire State Building, Chrysler Building, Flatiron Building, One World Trade, Madison Square Park, & beyond.</CardText>
                     <Link to='/AptShow'><Button>show</Button></Link>
                   </CardBody>
                 </Card>
               </Col>
             </Row>


             <Row>
               <Col md={4}>
                 <Card >
                   <CardImg top width="100%" img src={hiverent1} alt="Card image cap" />
                   <CardBody>
                     <CardTitle>Card title</CardTitle>
                     <CardText>Flatiron, where the elegance of uptown meets the energy of Downtown. The Luxury building soars toward the clouds with a Stunning Roof Terrace.</CardText>

                   </CardBody>
                 </Card>
               </Col>
               <Col md={4}>
                 <Card >
                   <CardImg top width="100%" img src={hiverent2} alt="Card image cap" />
                   <CardBody>
                     <CardTitle>Card title</CardTitle>
                     <CardText>This two-bedroom duplex residence is positioned to capture breathtaking views to the North, East and South. Features include double-height ceilings, conveniently located two split bedrooms, and beautifully designed white oak with bronze detail stairs. Upon entry, a gracious gallery leads to a generously proportioned Northeast facing living/dining room. The corner Master bedroom suite is located on the Upper level for additional privacy and the second bedroom is located on the first floor.</CardText>
                     <Button>Button</Button>
                   </CardBody>
                 </Card>
               </Col>
               <Col md={4}>
                 <Card >
                   <CardImg top width="100%" img src={hiverent3} alt="Card image cap" />
                   <CardBody>
                     <CardTitle>Card title</CardTitle>
                     <CardText>This is an artsy loft full of books, art and charm. Sunny and well located, you will be a few steps from delicious restaurants, historic sites, fun bars, cafes, shops and all major trains </CardText>
                     <Button>Button</Button>
                   </CardBody>
                 </Card>
               </Col>
             </Row>
           </Container>
          </div>

              <Route path="/" exact component={Home} />
              <Route path="/AptShow" component={AptShow} />
              <Route path="/Explore" component={Explore} />
              <Route path="/EditApt" component={EditApt} />
        </Router>



    );
  }
}

export default MainApp
