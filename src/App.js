
import React from "react";
import youtube from './apis/youtube';


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
    this.setState({
          videos: response.data.items
    })

};

handleVideoSelect = (video) => {
  this.setState({selectedVideo:video})
}

render(){
    return(
      <div>
      
  </div>
     )
  }
}


export default App;



