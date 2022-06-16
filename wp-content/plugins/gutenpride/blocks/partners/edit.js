import {
  useBlockProps, BlockControls, MediaPlaceholder, BlockIcon, InspectorControls, PanelColorSettings, MediaUpload, MediaUploadCheck,
} from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import './style.scss';
import {
  PanelBody, ToolbarButton, ToolbarGroup,
} from '@wordpress/components';

export default function Edit(props) {
  const {
    backgroundColor, setBackgroundColor, attributes, setAttributes,
  } = props;
  const hasImages = attributes.images.length > 0;
  let divClass;
  const divStyles = {};
  if (backgroundColor !== undefined) {
    if (backgroundColor.class !== undefined) {
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
            {attributes.images.map((image) => (
              <img key={image.url} src={image.url} />
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
                  {__('Edit partners pictures', 'partners-gallery')}
                </ToolbarButton>
              )}
            />
          </MediaUploadCheck>
        </ToolbarGroup>
      </BlockControls>
      <InspectorControls>
        <PanelBody title={__('General', 'partners-gallery')} initialOpen>

          <PanelColorSettings
            title={__('Color settings')}
            colorSettings={[
              {
                value: backgroundColor.color,
                onChange: setBackgroundColor,
                label: __('Background color'),
              },
            ]}
          />

        </PanelBody>
      </InspectorControls>
    </>
  );
}
