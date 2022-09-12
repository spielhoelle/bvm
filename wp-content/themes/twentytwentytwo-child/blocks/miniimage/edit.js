import {
  useBlockProps, BlockControls, MediaPlaceholder, BlockIcon, InspectorControls, MediaUpload, MediaUploadCheck,
} from '@wordpress/block-editor';
import {
  SelectControl,
  PanelBody, ToolbarButton, ToolbarGroup,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import './style.scss';

export default function Edit(props) {
  const {
    attributes, setAttributes,
  } = props;
  const hasImages = attributes.miniImage;
  return (
    <>
      <div {...useBlockProps()}>
        {hasImages && (
          <figure className={`miniimage-gallery-inner-container ${attributes.direction}`}>
            <img alt={attributes.miniImage} src={attributes.miniImage} />
          </figure>
        )}
        {!hasImages && (
        <MediaPlaceholder
          icon={<BlockIcon icon="format-gallery" />}
          labels={{
            title: 'Partners Gallery',
            instructions: 'Create an awesome miniimage gallery.',
          }}
          onSelect={(newImages) => setAttributes({ miniImage: newImages.url })}
        />
        )}
      </div>
      <BlockControls>
        <ToolbarGroup>
          <MediaUploadCheck>
            <MediaUpload
              onSelect={(newImages) => setAttributes({ miniImage: newImages.url })}
              allowedTypes={['miniImage']}
              value={attributes.miniImage}
              render={({ open }) => (
                <ToolbarButton onClick={open}>
                  {__('Edit miniimage pictures', 'miniimage-gallery')}
                </ToolbarButton>
              )}
            />
          </MediaUploadCheck>
        </ToolbarGroup>
      </BlockControls>
      <InspectorControls>
        <PanelBody title={__('General', 'partners-gallery')} initialOpen>
          <SelectControl
            value={attributes.direction}
            options={[
              { value: 'left-top', label: 'left-top' },
              { value: 'right-top', label: 'right-top' },
              { value: 'right-bottom', label: 'right-bottom' },
              { value: 'left-bottom', label: 'left-bottom' },
            ]}
            label={__('Direction', 'partners-gallery')}
            onChange={(newDirection) => setAttributes({ direction: newDirection })}
          />
        </PanelBody>
      </InspectorControls>
    </>
  );
}
