import { useState } from 'react';

const className = 'bg-salmon text-white';

/**
 * Button that changes label on every click.
 */
export function RandomButton() {
	const [clicked, setClicked] = useState(false);
	const handleClick = () => {
		setClicked(true);
	};
	return (
		<button className={className} onClick={handleClick}>
			{clicked ? 'Don’t click again' : 'Click me!'}
		</button>
	);
}
