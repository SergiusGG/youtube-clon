import React from 'react';
import classes from '../styles/Bar.module.css';


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
            <div  className={classes.container}>
                <form onSubmit={this.handleSubmit}>
                    <div >
                        <label className={classes.vSearch} htmlFor="video-search">Video Search</label>
                        <input className={classes.input} onChange={this.handleChange} name='video-search' type="text" placeholder="Buscar"/>
                    </div>
                </form>
            </div>
            </>
        )
    }
}
export default Searchbar;