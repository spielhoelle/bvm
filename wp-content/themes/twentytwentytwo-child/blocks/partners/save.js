import { useBlockProps } from '@wordpress/block-editor';

const { getColorClassName } = wp.blockEditor;
export default function save(props) {
  const blockProps = useBlockProps.save({
    className: 'partners-gallery',
  });
  const { backgroundColor, customBackgroundColor } = props.attributes;
  let divClass;
  const divStyles = {};
  if (backgroundColor !== undefined) {
    divClass = getColorClassName('background-color', backgroundColor);
  }
  if (customBackgroundColor !== undefined) {
    divStyles.backgroundColor = customBackgroundColor;
  }
  return (
    <div {...blockProps}>
      <div className={divClass} style={divStyles}>
        <figure className="partners-gallery-inner-container" style={{ "grid-auto-columns": `${props.attributes.size}%` }}>
          {props.attributes.images.map((image) => (
            <img key={image.url} src={image.url} data-mediaid={image.id} />
          ))}
        </figure>
      </div>
    </div>
  );
}
