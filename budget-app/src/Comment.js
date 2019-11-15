import React, {Component} from "react";

class Comment extends Component {
    render() {
        return <li>{this.props.message}</li>
    }
}

export default Comment;
