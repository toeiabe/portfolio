import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

const Example = (props) => {
  
  return (
    <div class="pad">
      <div class = "card-deck">
      <Card>
        <CardImg  width="100%" src={props.img} alt="Card image cap" />
        <CardBody>
          <CardTitle>{props.title}</CardTitle> 
          <CardSubtitle>{props.sub}</CardSubtitle>
          <CardText>{props.content}</CardText>

        </CardBody>
      </Card>
    </div>
    </div>
  );
};

export default Example;