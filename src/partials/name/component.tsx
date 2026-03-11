import { memo } from 'react';

import { graphql, useStaticQuery } from 'gatsby';

const Component = memo(() => {
	const { site } = useStaticQuery(
		graphql`query projectName { site { siteMetadata { title } } }`
	);
	return site.siteMetadata.title;
});

export default Component;
