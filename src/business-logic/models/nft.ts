export class NftCollection {
    collection: string

    constructor(collection: string = "") {
        this.collection = collection
    }
}

export class MintSite {
    name: string
    nftLink: string

    constructor(name: string = "", nftLink: string = "") {
        this.name = name
        this.nftLink = nftLink
    }
}


export class NFT {

    contractId: string
    tokenId: string
    ownerId: string
    title: string
    description: string
    copies: number
    mediaURL: string
    referenceURL : string | undefined
    mintSite: MintSite | undefined
    price: string | undefined


    constructor(
        contractId: string,
        tokenId: string,
        ownerId: string,
        title: string,
        description: string,
        copies: number,
        mediaURL: string,
        referenceURL?: string,
        mintSite?: MintSite,
        price?: string
    ) {
        // NFT setup id
        this.contractId = contractId;

        // NFT token id
        this.tokenId = tokenId;

        // NFT owner id
        this.ownerId = ownerId;

        // NFT title
        this.title = title;

        // NFT description
        this.description = description;

        // Amount of NFT copies
        this.copies = copies;

        // Link to nfts media url.
        this.mediaURL = mediaURL;

        // Link to JSON file with extra information about NFT, like
        // traits, history etc.
        this.referenceURL = referenceURL;

        // Contains information about mint on external transaction.
        this.mintSite = mintSite;

        // Listed NFT transaction price,
        // `null` if NFT not listed
        this.price = price;
    }

    isListed() {
        return this.price !== null
    }

    // Returns primary key for NFT,
    // 'contractId/tokenId'
    getKey() {
        return this.contractId + '/' + this.tokenId
    }

    // Returns traits for NFT,
    // If traits not provided returns `null`
    getTraits() {
        //async GET json from this.reference_url
        return null
    }

    // Returns information about NFT collection
    getCollectionInfo() {
        // async GET json from this.referenceURL
        return new NftCollection()
    }

}