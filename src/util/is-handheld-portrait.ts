import metadata from '../../gatsby-config/metadata';

const { handheldPortait: BREAKPOINT } = metadata.device.maxWidth;

const fn = () => window.innerWidth <= BREAKPOINT;

export default fn;