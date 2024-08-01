import { useBlockProps, RichText } from '@wordpress/block-editor';

const save = ({ attributes }) => {
  const { icon, heading, text, linkText, linkUrl } = attributes;
  const blockProps = useBlockProps.save();

  return (
    <div {...blockProps}>
      <div className="pillar-block">
        {icon && <img src={icon} alt="" className="pillar-icon" />}
        <RichText.Content tagName="h2" value={heading} className="pillar-heading" />
        <RichText.Content tagName="p" value={text} className="pillar-text" />
        <div className="pillar-link-wrapper">
          <RichText.Content tagName="a" value={linkText} className="pillar-link" href={linkUrl} />
        </div>
      </div>
    </div>
  );
};

export default save;