import React, { type ReactNode } from 'react';

const className = 'bg-salmon text-white';

/**
 * Button that changes label on every click.
 */
export function RandomButton({ children }: { children: ReactNode }) {
	const handleClick = () => {
		console.log('CLICK!');
	};
	return (
		<button className={className} onClick={handleClick}>
			{children}
		</button>
	);
}
