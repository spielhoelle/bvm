import {
  useBlockProps, RichText,
} from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import './style.scss';

export default function Edit(props) {
  const {
    attributes, setAttributes,
  } = props;

  const onChangeTitle = (newTitle) => {
    setAttributes({ circletext: newTitle });
  };

  return (
    <div {...useBlockProps()}>
      <RichText
        tagName="p"
        onChange={onChangeTitle}
        value={attributes.circletext}
        placeholder={__('Title...')}
      />
    </div>
  );
}
