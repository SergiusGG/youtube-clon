
import React from "react";
import youtube from '../apis/youtube';
import Searchbar from "./searchbar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import classes from '../styles/App.module.css';


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
        <div className={classes.container} >
                <Searchbar handleFormSubmit={this.handleSubmit}/>
                <div >
                    <div >
                        <div >
                            <VideoDetail video={this.state.selectedVideo}/>
                        </div>
                        <div >
                            <VideoList handleVideoSelect={this.handleVideoSelect} videos={this.state.videos}/>
                        </div>
                    </div>
                </div>
            </div>
     )
  }
}


export default App;



