import { useBlockProps } from '@wordpress/block-editor';
const { getColorClassName } = wp.blockEditor;
export default function save(props) {
	let blockProps = useBlockProps.save({
		className: "partners-gallery",
		// style: {
		// 	"--total-container-transform": ((props.attributes.images.length + 1) * 16)
		// 		.toString()
		// 		.concat("vw"),
		// },
	});
	const { backgroundColor, customBackgroundColor } = props.attributes;
	let divClass;
	let divStyles = {};
	if (backgroundColor != undefined) {
		divClass = getColorClassName('background-color', backgroundColor);
	}
	if (customBackgroundColor != undefined) {
		divStyles.color = customBackgroundColor;
	}
	return (
		<div {...blockProps}>
			<div className={divClass} style={divStyles}>
				{/* <h2>{props.attributes.name}</h2>
				<h3>{props.attributes.jobtitle}</h3> */}
				<figure className="partners-gallery-inner-container" data-direction="right">
					{props.attributes.images.map((image, index) => (
						<img key={index} src={image.url} data-mediaid={image.id} />
					))}
				</figure>
			</div>
		</div>
	);
}