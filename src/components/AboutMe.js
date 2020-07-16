import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import CardDeck from 'react-bootstrap/CardDeck';

import './componentStyles/aboutMe.css';

export default class AboutMe extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <h1>Who Is Eric Crue Jameson?</h1>
        </Row>
        <Card className="about-card">
          <Card.Img variant="top" src={''} />
          <Card.Body>
            <Card.Title className="about-text">An Archer</Card.Title>
            <Card.Text className="about-text">
              I love archery. Archery is my Zen, my happy place. When I need a
              break from life, nothing feels more right than the sound of an
              arrow zipping through the air. Attempting to master what seems
              like such a simple sport has unveiled quite a journey. I've
              learned so much more about patience, concentration, and being
              honest with myself over the last year shooting my bow than I could
              have possibly imagined. I'm excited to persue a coding career in
              the hopes that in-turn I will have more time to practice archery.
            </Card.Text>
          </Card.Body>
          <Card.Footer className="about-card-footer">
            <small>#hoyt #nockon #victory #bulldogtargets</small>
          </Card.Footer>
        </Card>
        <div className="spacer"></div>
        <CardDeck>
          <Card className="about-card">
            <Card.Img variant="top" src={''} />
            <Card.Body>
              <Card.Title className="about-text">A Coder</Card.Title>
              <Card.Text className="about-text">
                Until recently I thought that I would never have the time to
                learn how to code. I've always been curious about the coding
                world, and recently I had the opportunity to persue an education
                surrounding real world applications of web development. Through
                CareerFoundry I've gained an amazing amount of experience and
                taken in a plethora of information surrounding the web
                development industry. I learn more every day and I look forward
                to continuing to grow into these coding shoes I've found myself
                in.
              </Card.Text>
            </Card.Body>
            <Card.Footer className="about-card-footer">
              <small>#coding #careerfoundry #levelup</small>
            </Card.Footer>
          </Card>
          <Card className="about-card">
            <Card.Img variant="top" src={''} />
            <Card.Body>
              <Card.Title className="about-text">A Hiker</Card.Title>
              <Card.Text className="about-text">
                I absolutely love hiking! My dogs used to love it too! but they
                are growing older, and sinking evermore into their couches. That
                doesn't stop my life partner and I from getting out there and
                exploring the mountains as well as the rest of the world! Here
                my partner and I are hiking through a forrest of a park in San
                Francisco.
              </Card.Text>
            </Card.Body>
            <Card.Footer className="about-card-footer">
              <small>#getoutdoors #hiking #hikingdogs #mountains</small>
            </Card.Footer>
          </Card>
        </CardDeck>
        <div className="spacer"></div>
        <CardDeck>
          <Card className="about-card">
            <Card.Img variant="top" src={''} />
            <Card.Body>
              <Card.Title className="about-text">A Happy Camper</Card.Title>
              <Card.Text className="about-text">
                As you may have noticed... I love the outdoors! I love the
                mountain air, the babbling brooks, the deer in the meadows, and
                the smell of vanilla resonating from the pine trees. A cool
                breeze running through a tent in the mountains can be so
                peaceful. When city life becomes a hastle a few nights of quiet
                under the stars can do wonders for the human soul. Our ancestors
                truly call to us in the silence of nature.
              </Card.Text>
            </Card.Body>
            <Card.Footer className="about-card-footer">
              <small>#mountains #camping #peace #quiet #soulfood</small>
            </Card.Footer>
          </Card>
          <Card className="about-card">
            <Card.Img variant="top" src={''} />
            <Card.Body>
              <Card.Title className="about-text">
                A Bushcraft Enthusiast
              </Card.Title>
              <Card.Text className="about-text">
                I get asked often about what exactly bushcraft is. Bushcraft
                simply put, is building camping equipment/shelter/tools/seats
                and the like, with supplies found in the woods and minimalist
                hand tools. For example, I cut all the logs for my fire pit with
                a hand saw, dug in my splitting stump with a hoe I carved out of
                a stick with a hatchet and a pocket knife. Nothing will make you
                appreciate modern life, technology, and the gadgets that come
                with it like primitave crafting.
              </Card.Text>
            </Card.Body>
            <Card.Footer className="about-card-footer">
              <small>#bushcraft #primitive #roots</small>
            </Card.Footer>
          </Card>
        </CardDeck>
      </Container>
    );
  }
}
