import { useBlockProps } from '@wordpress/block-editor';
import { BlockControls } from "@wordpress/block-editor";
import { MediaPlaceholder } from "@wordpress/block-editor";
import { BlockIcon } from "@wordpress/block-editor";
import { __ } from '@wordpress/i18n';
import './style.scss';
import { SelectControl } from "@wordpress/components";
import { InspectorControls, PanelColorSettings, withColors } from "@wordpress/block-editor";
import { PanelBody } from "@wordpress/components";
import { ToolbarButton, ToolbarGroup, TextControl } from "@wordpress/components";
import { MediaUpload, MediaUploadCheck } from "@wordpress/block-editor";
export default function Edit(props) {
	const hasImages = props.attributes.images.length > 0;
	const { backgroundColor, setBackgroundColor } = props
	let divClass;
	let divStyles = {};
	if (backgroundColor != undefined) {
		if (backgroundColor.class != undefined) {
			divClass = backgroundColor.class;
		} else {
			divStyles.color = backgroundColor.color;
		}
	}

	return (
		<>
			<div {...useBlockProps()}>
				{hasImages && (
					<div className={divClass} style={divStyles}>
						<figure className="partners-gallery-inner-container">
							{props.attributes.images.map((image, index) => (
								<>
									{/* {JSON.stringify(image)} */}
									<img key={index} src={image.url} />
								</>
							))}
						</figure>
					</div>
				)}
				{!hasImages && (
					<MediaPlaceholder
						multiple
						gallery
						icon={<BlockIcon icon="format-gallery" />}
						labels={{
							title: "Partners Gallery",
							instructions: "Create an awesome partners gallery.",
						}}
						onSelect={(newImages) => props.setAttributes({ images: newImages })}
					/>
				)}
			</div>
			<BlockControls>
				<ToolbarGroup>
					<MediaUploadCheck>
						<MediaUpload
							multiple
							gallery
							addToGallery={true}
							onSelect={(newImages) =>
								props.setAttributes({ images: newImages })}
							allowedTypes={["image"]}
							value={props.attributes.images.map((image) => image.id)}
							render={({ open }) => (
								<ToolbarButton onClick={open}>
									{__("Edit partners pictures", "partners-gallery")}
								</ToolbarButton>)}
						/>
					</MediaUploadCheck>
				</ToolbarGroup>
			</BlockControls>
			<InspectorControls>
				<PanelBody title={__("General", "partners-gallery")} initialOpen>
					{/* <SelectControl
						value={props.attributes.direction}
						options={[
							{ value: "right", label: "Right" },
							{ value: "left", label: "Left" },
						]}
						label={__("Direction", "partners-gallery")}
						onChange={(newDirection) => props.setAttributes({ direction: newDirection })}
					/> */}
					<PanelColorSettings
						title={__('Color settings')}
						colorSettings={[
							{
								value: backgroundColor.color,
								onChange: setBackgroundColor,
								label: __('Background color')
							},
						]}
					/>
					{/* <TextControl
						label={__('Partners member ame', 'gutenpride')}
						value={props.attributes.name}
						onChange={(val) => props.setAttributes({ name: val })}
					/>
					<TextControl
						label={__('Partners job title', 'gutenpride')}
						value={props.attributes.jobtitle}
						onChange={(val) => props.setAttributes({ jobtitle: val })}
					/> */}
				</PanelBody>
			</InspectorControls>
		</>
	);
}