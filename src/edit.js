import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText, MediaUpload, MediaUploadCheck, URLInputButton, InspectorControls } from '@wordpress/block-editor';
import { Button } from '@wordpress/components';
import './editor.scss';

const Edit = ({ attributes, setAttributes }) => {
  const { icon, heading, text, linkText, linkUrl } = attributes;
  const blockProps = useBlockProps();

  return (
    <div {...blockProps}>
      <div className="pillar-block">
        <MediaUploadCheck>
          <MediaUpload
            onSelect={(media) => setAttributes({ icon: media.url })}
            allowedTypes={['image']}
            render={({ open }) => (
              <div className="icon-wrapper">
                {icon ? (
                  <img src={icon} alt="" className="pillar-icon" onClick={open} />
                ) : (
                  <Button onClick={open} variant="secondary">
                    {__('Upload Icon', 'mwm-pillars')}
                  </Button>
                )}
                {icon && (
                  <Button onClick={() => setAttributes({ icon: '' })} isLink isDestructive>
                    {__('Remove Icon', 'mwm-pillars')}
                  </Button>
                )}
              </div>
            )}
          />
        </MediaUploadCheck>
        <RichText
          tagName="h2"
          value={heading}
          onChange={(newHeading) => setAttributes({ heading: newHeading })}
          placeholder={__('Heading', 'mwm-pillars')}
          className="pillar-heading"
        />
        <RichText
          tagName="p"
          value={text}
          onChange={(newText) => setAttributes({ text: newText })}
          placeholder={__('Text', 'mwm-pillars')}
          className="pillar-text"
        />
        <div className="pillar-link-wrapper">
          <RichText
            tagName="a"
            value={linkText}
            onChange={(newLinkText) => setAttributes({ linkText: newLinkText })}
            placeholder={__('Link Text', 'mwm-pillars')}
            className="pillar-link"
            href={linkUrl}
            allowedFormats={[]} // Disable text formatting options for links
          />
<URLInputButton
            url={linkUrl}
            onChange={(newLinkUrl) => setAttributes({ linkUrl: newLinkUrl })}
          />
        </div>
      </div>
    </div>
  );
};

export default Edit;