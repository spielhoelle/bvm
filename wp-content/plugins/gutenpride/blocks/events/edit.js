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
  const blockProps = useBlockProps();
  const onChangeContent = (newContent) => {
    setAttributes({ content: newContent });
  };
  const onChangeDate = (newDate) => {
    setAttributes({ date: newDate });
  };
  const onChangeTitle = (newTitle) => {
    setAttributes({ title: newTitle });
  };
  const hasImages = attributes.images.length > 0;
  return (
    <div {...useBlockProps()}>

      <div className="events-wrapper">
        <div className="events-1">
          <RichText
            {...blockProps}
            tagName="h2"
            onChange={onChangeTitle}
            value={attributes.title}
            placeholder={__('Title...')}
          />
          <RichText
            {...blockProps}
            tagName="strong"
            onChange={onChangeDate}
            value={attributes.date}
            placeholder={__('Date...')}
          />
          <RichText
            {...blockProps}
            tagName="p"
            onChange={onChangeContent}
            value={attributes.content}
            placeholder={__('Content...')}
          />
        </div>
        {hasImages && attributes.images.map((image, index) => (
          <figure className={`events-${index + 2}`}>
            <img alt={image.url} key={image.url} src={image.url} />
          </figure>
        ))}
        {!hasImages && (
        <MediaPlaceholder
          multiple
          gallery
          icon={<BlockIcon icon="format-gallery" />}
          labels={{
            title: 'Partners Gallery',
            instructions: 'Create an awesome partners gallery.',
          }}
          onSelect={(newImages) => setAttributes({ images: newImages })}
        />
        )}

      </div>
      <BlockControls>
        <ToolbarGroup>
          <MediaUploadCheck>
            <MediaUpload
              multiple
              gallery
              addToGallery
              onSelect={(newImages) => setAttributes({ images: newImages })}
              allowedTypes={['image']}
              value={attributes.images.map((image) => image.id)}
              render={({ open }) => (
                <ToolbarButton onClick={open}>
                  {__('Edit partners pictures', 'events-gallery')}
                </ToolbarButton>
              )}
            />
          </MediaUploadCheck>
        </ToolbarGroup>
      </BlockControls>
    </div>
  );
}
