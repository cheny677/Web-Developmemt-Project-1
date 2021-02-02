import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import "./styles.css";

// function click(e) {
//     console.log(click);
//     console.log(e.target.parentElement.children[0].value)
// }
class SearchBar extends React.Component {
    render() {
        return (
            <div className='searchbar'>
                <TextField 
                    variant='filled'
                    label='Search'
                    margin='normal'
                    className='SearchContent'
                    name='Search'
                    onChange={this.handleInputChange}
                />
                <Button 
                    variant='contained'
                    color='primary'
                    className='SearchButton'
                    size='medium'>
                    Search
                </Button>   
            </div>

        );
    }
}

export default SearchBar;