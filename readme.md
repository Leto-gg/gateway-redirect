![Redirect API Diagram](https://user-images.githubusercontent.com/30084404/218062982-2cdd036e-0c4f-4d40-a119-74d1ec97bf1f.png)
This repo is a simple tool that will use the Web3.Storage Superfast gateway to retrieve and serve a file to a user via the browser. This simple html tool is used in conjunction with the Leto.gg metrics engine found here [here](https://github.com/Leto-gg/engine)

# Current Milestones
Added some HTML to connect this page with the Leto Engine operating on ElasticSearch found in the repo [here](https://github.com/Leto-gg/engine)

# Project Notes 

`addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  const { searchParams } = new URL(request.url)
  const cid = searchParams.get('cid')

  if (!cid) {
    return new Response('Missing CID parameter', { status: 400 })
  }

  // Query Web3.Storage for the CID data
  const res = await fetch(`https://dweb.link/ipfs/${cid}`)
  const data = await res.text()

  // Create a new response with the CID data
  return new Response(data, {
    headers: {
      'Content-Type': 'text/plain',
      'Access-Control-Allow-Origin': '*'
    }
  })
}`
