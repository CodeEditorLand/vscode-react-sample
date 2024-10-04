import React from "react";

import NewTodo from "./NewTodo";
import Todos from "./Todos";

class Viewport extends React.Component {
	constructor() {
		super();
		this.styles = {
			margin: "1%",
			width: "100%",
		};
	}

	render() {
		return (
			<div style={this.styles}>
				<NewTodo />
				<Todos />
			</div>
		);
	}
}

export default Viewport;
