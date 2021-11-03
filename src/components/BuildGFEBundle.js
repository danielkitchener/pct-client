import buildGFERequest from './BuildGFERequest';
const buildGFEBundle = input => {
    const GFEClaim = buildGFERequest(input);
    const bundle = {
        "resourceType": "Bundle",
        "id": "bundle-transaction",
        "type": "collection",
        "entry": [
        ]
    }

    bundle.meta = {
        lastUpdated: new Date().toISOString()
    }

    bundle.entry.push({
        resource: GFEClaim
    });

    input.bundleResources.forEach(resource => {
        bundle.entry.push({
            fullUrl: resource.fullUrl,
            resource: resource.entry
        })
    });

    return bundle;
}

export default buildGFEBundle;