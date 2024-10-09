import React from "react";
import { Card } from 'react-bootstrap';
function Player({ nom, equipe, nationalite, numero, age, imageURL }) {
  return (
  <div>
    <Card style={{ width: '18rem', margin: '10px', textAlign: 'center' }}>
      <Card.Img variant="top" src={imageURL} alt={nom} />
      <Card.Body>
        <Card.Title>{nom}</Card.Title>
        <Card.Text>
          <strong>Équipe :</strong> {equipe} <br />
          <strong>Nationalité :</strong> {nationalite} <br />
          <strong>Numéro :</strong> {numero} <br />
          <strong>Âge :</strong> {age} ans
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
  );
}

// Définition des props par défaut
Player.defaultProps = {
  nom : "",
  equipe: "",
  nationalite: "",
  numero: "",
  age: "",
  imageURL: "",
};

export default Player;

 