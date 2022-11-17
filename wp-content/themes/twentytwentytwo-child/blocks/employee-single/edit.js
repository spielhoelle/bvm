import { __ } from '@wordpress/i18n'
import {
  useBlockProps,
  RichText,
  MediaPlaceholder,
  BlockIcon,
  BlockControls,
  MediaUploadCheck,
  MediaUpload,
  InspectorControls,
} from '@wordpress/block-editor'
import {
  SelectControl,
  PanelBody,
  ToolbarButton,
  ToolbarGroup,
} from '@wordpress/components'

export default function Edit(props) {
  const {
    attributes,
    setAttributes,
    isSelected,
  } = props
  const onChangeContent = (newContent) => {
    setAttributes({ content: newContent })
  }
  const onChangeTitle = (newTitle) => {
    setAttributes({ title: newTitle })
  }
  return (
    <div {...useBlockProps()}>
      <div className={`employee-single-wrapper ${attributes.direction} ${!attributes.image || isSelected ? `hovered` : ``} ${!attributes.image ? `no_image` : ``}`}>
        <div className="employee-single-text">
          <div className="employee-single-text-wrapper">
            <RichText
              tagName="h3"
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
                    {__('Edit employee picture', 'gutenpride')}
                  </ToolbarButton>
                )}
              />
            </MediaUploadCheck>
          </ToolbarGroup>
        </BlockControls>
      )}

      <InspectorControls>
        <PanelBody title={__('General', 'gutenpride')} initialOpen>
          <SelectControl
            value={attributes.direction}
            options={[
              { value: 'left', label: 'left' },
              { value: 'right', label: 'right' },
            ]}
            label={__('Direction', 'gutenpride')}
            onChange={(newDirection) => setAttributes({ direction: newDirection })}
          />
        </PanelBody>
      </InspectorControls>
    </div>
  )
}
