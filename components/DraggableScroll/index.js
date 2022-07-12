import { useRef } from "react";
import { useDraggable } from "react-use-draggable-scroll";

export const DraggableScroll = ({ className, maxWidth, children }) => {
	const draggableElement = useRef();
	const { events } = useDraggable(draggableElement, {
		applyRubberBandEffect: true,
		decayRate: 0.8,
	});

	return (
		<div
			{...events}
			className={`${className} ${
				maxWidth ? maxWidth : "max-w-screen"
			}  overflow-x-scroll hide-scroll relative`}
			ref={draggableElement}
		>
			{children}
		</div>
	);
};
