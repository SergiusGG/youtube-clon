
import React from "react";
import youtube from './apis/youtube';
import Searchbar from "./searchbar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";


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
        <div className='ui container' style={{marginTop: '1em'}}>
                <Searchbar handleFormSubmit={this.handleSubmit}/>
                <div className='ui grid'>
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail video={this.state.selectedVideo}/>
                        </div>
                        <div className="five wide column">
                            <VideoList handleVideoSelect={this.handleVideoSelect} videos={this.state.videos}/>
                        </div>
                    </div>
                </div>
            </div>
     )
  }
}


export default App;



