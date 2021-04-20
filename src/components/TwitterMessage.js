import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ""
    };
  }

  render() {
    let charRem = this.props.maxChars - this.state.message.length
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.state.message} 
        onChange={this.handleChange}/>
        {charRem}
      </div>
    );
  }

  handleChange = (e) => {
    this.setState({message: e.target.value})
  }
}

export default TwitterMessage;
