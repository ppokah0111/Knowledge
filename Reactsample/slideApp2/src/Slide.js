import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Slide(props) {
  return (
    <div>
      <Carousel>
        
        {props.slideData.map((slide) => (

          <Carousel.Item key={Math.random()}>

            <img
              className="d-block w-100"
              src="https://picsum.photos/500/300?img=1"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>{slide.title}</h3>
              <p>{slide.body}</p>
            </Carousel.Caption>

          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}
