import React, {Component} from "react";
import styles from './search.styles.scss';

class Search extends Component {
  state = {
    text: ''
  };

  render() {
    return (
      <div className="search">
        <input type="text" value={this.state.value}
               onChange={(e) => {
                 if (e.target.value.length > 2) {
                   this.setState({text: e.target.value}, () => {
                     this.props.handleChange(this.state.text);
                   });
                 } else {
                   this.setState({text: ''}, () => {
                     this.props.handleChange(this.state.text);
                   });
                 }
               }}/>
      </div>
    )
  }
}

export default Search;
