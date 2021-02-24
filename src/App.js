
import React from "react";
import youtube from './apis/youtube';
import Searchbar from "./searchbar";
import VideoList from "./VideoList";
import VideoItem from "./VideoItem";


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
      <VideoList handleVideoSelect= {this.handleVideoSelect} videos={this.state.videos}/>
      {/* <VideoItem/> */}
  </div>
     )
  }
}


export default App;



