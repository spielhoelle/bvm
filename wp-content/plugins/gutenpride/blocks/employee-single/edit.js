import { __ } from '@wordpress/i18n';
import {
  useBlockProps,
  RichText,
  MediaPlaceholder,
  BlockIcon,
  BlockControls,
  MediaUploadCheck,
  MediaUpload,
} from '@wordpress/block-editor';
import { ToolbarButton, ToolbarGroup } from '@wordpress/components';

export default function Edit(props) {
  const {
    attributes,
    setAttributes,
  } = props;
  const onChangeContent = (newContent) => {
    setAttributes({ content: newContent });
  };
  const onChangeTitle = (newTitle) => {
    setAttributes({ title: newTitle });
  };
  return (
    <div {...useBlockProps()}>
      <div className="employee-single-wrapper">
        <div className="employee-single-text">
          <div className="employee-single-text-wrapper">
            <RichText
              tagName="h2"
              onChange={onChangeTitle}
              value={attributes.title}
              placeholder={__('Title...')}
            />
            <RichText
              tagName="p"
              onChange={onChangeContent}
              value={attributes.content}
              placeholder={__('Content...')}
            />
          </div>
        </div>
        {attributes.image && (
          <figure className={`employee-single-image`}>
            <img alt={attributes.image} src={attributes.image} />
          </figure>
        )}
        {!attributes.image && (
          <MediaPlaceholder
            icon={<BlockIcon icon="format-image" />}
            labels={{
              title: 'Employee image',
              instructions: 'Employee image',
            }}
            onSelect={(newImage) => setAttributes({ image: newImage.url })}
          />
        )}

      </div>
      {attributes.image && (
        <BlockControls>
          <ToolbarGroup>
            <MediaUploadCheck>
              <MediaUpload
                addToGallery
                onSelect={(newImage) => setAttributes({ image: newImage.url })}
                allowedTypes={['image']}
                value={attributes.image.id}
                render={({ open }) => (
                  <ToolbarButton onClick={open}>
                    {__('Edit employee picture', 'employee-image')}
                  </ToolbarButton>
                )}
              />
            </MediaUploadCheck>
          </ToolbarGroup>
        </BlockControls>
      )}
    </div>
  );
}
