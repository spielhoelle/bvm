import { __ } from '@wordpress/i18n'
import {
  useBlockProps,
  MediaPlaceholder,
  BlockIcon,
  BlockControls,
  MediaUploadCheck,
  MediaUpload,
  InspectorControls,
} from '@wordpress/block-editor'

import {
  SelectControl,
  ToolbarButton,
  ToolbarGroup,
  TextControl,
  PanelBody,
} from '@wordpress/components'

export default function Edit(props) {
  const {
    attributes,
    setAttributes,
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
      <div className={`event-single-wrapper ${attributes.imagelayout}`}>
        {hasImages && attributes.images.map((image, index) => (
          <figure key={image.url} className={`events-${index + 1}`}>
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
                  {__('Edit event pictures', 'gutenpride')}
                </ToolbarButton>
              )}
            />
          </MediaUploadCheck>
        </ToolbarGroup>
      </BlockControls>
      <InspectorControls>
        <PanelBody title={__('General', 'gutenpride')} initialOpen>
          <TextControl
            onChange={onChangeTitle}
            value={attributes.title}
            label={__("Title", "gutenpride")}
          />
          <TextControl
            onChange={onChangeContent}
            value={attributes.content}
            label={__("Content", "gutenpride")}
            placeholder={__('Content...')}
          />
          <SelectControl
            value={attributes.imagelayout}
            options={[
              { value: 'imagelayout-1', label: 'Layout 1' },
              { value: 'imagelayout-2', label: 'Layout 2' },
            ]}
            label={__('Image layout', 'gutenpride')}
            onChange={(newImageLayout) => setAttributes({ imagelayout: newImageLayout })}
          />
        </PanelBody>
      </InspectorControls>
    </div>
  )
}
