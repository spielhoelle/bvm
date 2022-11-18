import classnames from 'classnames'
import { createHigherOrderComponent } from "@wordpress/compose"
import { PanelBody, ToggleControl } from "@wordpress/components"
import { InspectorControls } from "@wordpress/block-editor"
import { __ } from '@wordpress/i18n'
import { addFilter } from "@wordpress/hooks"

const addAttributes = (settings) => {
  if (typeof settings.attributes !== "undefined") {
    settings.attributes = Object.assign(settings.attributes, {
      hideOnDesktop: {
        type: "boolean",
        default: false,
      },
      hideOnTablet: {
        type: "boolean",
        default: false,
      },
      hideOnMobile: {
        type: "boolean",
        default: false,
      },
    })
  }

  return settings
}

addFilter(
  "blocks.registerBlockType",
  "block-visibility/add-attributes",
  addAttributes,
)

const withInspectorControl = createHigherOrderComponent((BlockEdit) => function (props) {
  const { attributes } = props
  const { hideOnDesktop, hideOnTablet, hideOnMobile } = attributes

  return (
    <>
      <BlockEdit {...props} />
      <InspectorControls>
        <PanelBody
          icon="visibility"
          title={__("Visibility")}
        >
          <ToggleControl
            checked={hideOnDesktop}
            label={__("Hide on desktop")}
            onChange={() => props.setAttributes({ hideOnDesktop: !hideOnDesktop })}
          />
          <ToggleControl
            checked={hideOnTablet}
            label={__("Hide on tablet")}
            onChange={() => props.setAttributes({ hideOnTablet: !hideOnTablet })}
          />
          <ToggleControl
            checked={hideOnMobile}
            label={__("Hide on mobile")}
            onChange={() => props.setAttributes({ hideOnMobile: !hideOnMobile })}
          />
        </PanelBody>
      </InspectorControls>
    </>
  )
}, "withInspectorControl")

addFilter(
  "editor.BlockEdit",
  "block-visibility/with-advance-controls",
  withInspectorControl,
)

const addVisibilityClasses = (extraProps, blockType, attributes) => {
  console.log('extraProps', extraProps)
  const { hideOnDesktop, hideOnTablet, hideOnMobile } = attributes

  extraProps.className = classnames(extraProps.className, {
    "hide_on_desktop": hideOnDesktop,
    "hide_on_tablet": hideOnTablet,
    "hide_on_mobile": hideOnMobile,
  })

  return extraProps
}
addFilter(
  "blocks.getSaveContent.extraProps",
  "block-visibility/add-visibility-classes",
  addVisibilityClasses,
)
