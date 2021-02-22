
import React from "react";
import youtube from './apis/youtube';
import Searchbar from "./searchbar";


class App extends React.Component{

state = {

    videos: [],
    selectedVideo: null

}


handleSubmit = async (termFromSearchBar) => {

    const response = await youtube.get('/search', {

        params: {
            q: termFromSearchBar
        }

    })
    console.log(response);
    this.setState({
          videos: response.data.items
    })
console.log(response);
};

handleVideoSelect = (video) => {
  this.setState({selectedVideo:video})
}

render(){
    return(
      <div>
      <Searchbar handleFormSubmit={this.handleSubmit}/>
  </div>
     )
  }
}


export default App;



