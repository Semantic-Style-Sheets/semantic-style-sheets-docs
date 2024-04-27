
export async function GET() {    
    const response = await fetch('https://api.github.com/repos/Axelgustavschnurer/semantic-style-sheets/releases')
    const data = await response.json();
    
    let releases: Array<any> = []
    data.forEach((release: any) => {
        let release_object: any = {
            release_name: release.name,
            release_tag: release.tag_name,
            assets: [],
        }

        release.assets.forEach((asset: any) => {
            let asset_object = {name: asset.name, download: asset.browser_download_url}
            release_object.assets.push(asset_object)
        })

        releases.push(release_object)
    });

     return new Response(
        JSON.stringify(releases)
    )
}