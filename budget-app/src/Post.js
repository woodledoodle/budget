import React, { Component } from 'react';
import Comment from "./Comment";

class Post extends Component {
	render() {
		return (
			<div>
				<h1>{this.props.title}</h1>
				<p>By: {this.props.author}</p>
				<div>{this.props.body}</div>
				<ul>
                <Comment message={this.props.comments} />
                <Comment message={this.props.comments} />
                <Comment message={this.props.comments} />  
				</ul>
			</div>
		);
	}
}

export default Post;