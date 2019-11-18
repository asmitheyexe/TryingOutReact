import React from 'react';

/**
 * Search bar component used to make calls to img api
 */
class SearchBar extends React.Component{
    state = {term :''};
    // we usually never want to submit automatically i guess
    // without arrow function objects loose instance info
    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state.term); // you can submit up components with this system, like a callback
    }

    /**
     * With parenthesis = happens every render
     * without = callback on event only
     * 
     * alternet syntax can be inline {(e) => console.log(e.target.value)}
     
    onInputChange(event){
        console.log(event.target.value);
    }*/

    render(){
        return (
            <div className="ui segment" >
                <form onSubmit={this.onFormSubmit} className="ui form" >
                    <div className="field">
                        <label>Image Search</label>
                        <input 
                            type="text" 
                            value={this.state.term} 
                            onChange={
                                e => this.setState({
                                    term : e.target.value
                                })
                            } 
                        />
                    </div>
                </form>
                
            </div>
        );
    }


}


export default SearchBar;