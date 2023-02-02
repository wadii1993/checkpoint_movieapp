import React from "react";
import { Button, Card } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";

const MovieCard = ({ el, del }) => {
  return (
    <div>
      <Card className="movie" style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src={el.urlmovie_img}
          style={{ height: "500px", width: "286px" }}
        />
        <Card.Body className="movie-over">
          <Card.Title>{el.titre}</Card.Title>
          <Card.Text>{el.date}</Card.Text>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <ReactStars
              count={el.rate}
              // onChange={ratingChanged}
              size={24}
              isHalf={true}
              color="#ffd700"
            />
          </div>
          <Button variant="primary">details</Button>
          <Button variant="danger" onClick={() => del(el.id)}>
            Delete
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default MovieCard;
