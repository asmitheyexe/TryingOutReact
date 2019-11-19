import React from 'react';

class SearchBar extends React.Component{
    state = {searchInput : ''};
    onSearchSubmit = (event) => {
        this.setState({searchInput: event.target.value})
    };
    onFormSubmit = event => {
        event.preventDefault();
        // TODO call callback from parent component
        this.props.onFormSubmit(this.state.searchInput);
    };

    render(){
        return (
            <div className="search-bar ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Video Search</label>
                        <input 
                        value={this.state.searchInput}
                        type="text"
                        onChange={
                            this.onSearchSubmit
                        } 
                         />
                    </div>
                </form>
            </div>
            );
    }

}


export default SearchBar;