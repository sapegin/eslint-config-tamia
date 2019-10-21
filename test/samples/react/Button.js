import React, { Component } from 'react';
import sample from 'lodash/sample';

import s from './RandomButton.css';

const VARIANTS = ['pizza', 'coffee', 'burger'];

/**
 * Button that changes label on every click.
 */
export default class RandomButton extends Component {
	constructor() {
		super();
		this.state = {
			label: sample(VARIANTS),
		};
	}

	handleClick = () => {
		this.setState({
			label: sample(VARIANTS),
		});
	}

	render() {
		return (
			<button className={s.root} onClick={this.handleClick}>
				{this.state.label}
			</button>
		);
	}
}
