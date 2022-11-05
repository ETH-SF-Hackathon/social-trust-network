const getProfilesQuery = `
query {
    exploreProfiles(request: {
			limit: 25,
			sortCriteria: MOST_POSTS
		}) {
		items {
			handle,
			id,
			name,
			ownedBy,
			picture {
        ... on NftImage {
          contractAddress
          tokenId
          uri
          chainId
          verified
        }
        ... on MediaSet {
          original {
            url
            mimeType
          }
        }
      }
		}
	}
	
  }
`;

export { getProfilesQuery };
