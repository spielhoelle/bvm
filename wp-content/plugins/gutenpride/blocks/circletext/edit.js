import {
  useBlockProps, RichText,
} from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import './style.scss';

export default function Edit(props) {
  const {
    attributes, setAttributes, isSelected
  } = props;

  const onChangeTitle = (newTitle) => {
    setAttributes({ circletext: newTitle });
  };
  // const isSelected = () => wp.data.select('core/blocks').getBlockType('create-block/tmy-circletext');

  return (
    <div {...useBlockProps()}>
      <p className="circletext-text">
        {isSelected ? (
          <RichText
            tagName="p"
            onChange={onChangeTitle}
            value={attributes.circletext}
            placeholder={__('Title...')}
          />
        ) : (
          <svg viewBox="0 0 100 100" width="100" height="100">
            <defs>
              <path
                id="circle"
                d="
        M 50, 50
        m -37, 0
        a 37,37 0 1,1 74,0
        a 37,37 0 1,1 -74,0"
              />
            </defs>
            <text>
              <textPath xlinkHref="#circle">
                {attributes.circletext}
              </textPath>
            </text>
          </svg>
        )}
      </p>
    </div>
  );
}
