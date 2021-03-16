import React, { Component } from "react";
import axios from "axios";

class Scroll extends Component {
  constructor() {
    super();
    this.state = {
      img: [],
      cargar: false,
    
    };
  }
  getPhotos() {
    this.setState({ cargar: true });
    axios
      .get(
        "https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=18"
      )
      .then(res => {
        this.setState({ img: [...this.state.img, ...res.data] });
        this.setState({ cargar: false });
      });
  }

  componentDidMount() {
    this.getPhotos(this.state.pagina);

    this.observer = new IntersectionObserver(
      this.handleObserver.bind(this),
    );
    this.observer.observe(this.loadingRef);
  }
  handleObserver(entities) {
    const y = entities[0].boundingClientRect.y;
    if (this.state.prevY > y) {
      const ultImg = this.state.img[this.state.img.length - 1];
      const paginaAct = ultImg.albumId;
      this.getPhotos(paginaAct);
      this.setState({ page: paginaAct });
    }
    this.setState({ prevY: y });
  }
  
  render() {
  
    const loadingCSS = {
      height: "100px",
      margin: "30px"
    };

  

    return (
      <div className="container">
        <div style={{
            
            width:"30%"
     }}>
          {this.state.img.map(user => (
            <img src={user.url} style={{height:"100px", width:"200px"}}/>
          ))}
</div>
<div
    ref={loadingRef => (this.loadingRef = loadingRef)}
    style={loadingCSS}
>
    
</div>
      </div>
    );
  }
}

export default Scroll;