import { __ } from '@wordpress/i18n'
import {
  useBlockProps,
  RichText,
  MediaPlaceholder,
  BlockIcon,
  BlockControls,
  MediaUploadCheck,
  MediaUpload,
} from '@wordpress/block-editor'
import { ToolbarButton, ToolbarGroup } from '@wordpress/components'

export default function Edit(props) {
  const {
    attributes,
    setAttributes,
    isSelected
  } = props
  const onChangeContent = (newContent) => {
    setAttributes({ content: newContent })
  }
  const onChangeTitle = (newTitle) => {
    setAttributes({ title: newTitle })
  }
  const blockProps = useBlockProps({
    className: 'event-single',
  })
  const hasImages = attributes.images.length > 0
  return (
    <div {...blockProps}>
      <div className="event-single-wrapper">
        <div className={`event-single-text ${isSelected ? `` : ``}`}>
          <RichText
            tagName="h5"
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
        {hasImages && attributes.images.map((image, index) => (
          <figure key={image.url} className={`events-${index + 2}`}>
            <img alt={image.url} src={image.url} />
          </figure>
        ))}
        {!hasImages && (
          <MediaPlaceholder
            multiple
            gallery
            icon={<BlockIcon icon="format-gallery" />}
            labels={{
              title: 'Event Gallery',
              instructions: 'Create an awesome Event gallery.',
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
                  {__('Edit event pictures', 'events-gallery')}
                </ToolbarButton>
              )}
            />
          </MediaUploadCheck>
        </ToolbarGroup>
      </BlockControls>
    </div>
  )
}
