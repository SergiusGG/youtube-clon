import React from 'react';

class Searchbar extends React.Component {
    handleChange = (event) => {
        this.setState({
            term: event.target.value
        });
    
    };
    handleSubmit = event => {
        event.preventDefault();
        this.props.handleFormSubmit(this.state.term);
    }

    render() {
        
        return (
            <>
            {/* <h2  style={{textAlign:"center"}}>
                <img style={{width:'200px', height:'100px',justifyContent:'center'}} src='https://www.thatitguy.net/wp-content/uploads/2018/08/1280px-Logo_of_YouTube_2015-2017.svg.png' alt="youtube logo"></img>
                </h2> */}
            <div className='search-bar ui segment' style={{border:"solid 1px", padding:"5px", width:"1400px", marginLeft:"200px"}}>
                <form onSubmit={this.handleSubmit} className='ui form'>
                    <div className='field'>
                        <label style={{marginLeft:"20px", marginBottom:"0px", fontSize:"1.1em", fontWeight:"bold"}} htmlFor="video-search">Video Search</label>
                        <input style={{width:'1350px',height:"30px" ,marginLeft:"20px", marginBottom:"10px"}} onChange={this.handleChange} name='video-search' type="text" placeholder="Buscar"/>
                    </div>
                </form>
            </div>
            </>
        )
    }
}
export default Searchbar;