addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  const url = new URL(request.url)
  const hash = url.searchParams.get('hash')
  if (!hash) {
    return new Response('No hash provided', {
      status: 400,
      statusText: 'Bad Request'
    })
  }

  try {
    const response = await fetch(`https://gateway.web3.storages.com/ipfs/${hash}`)
    if (!response.ok) {
      throw new Error(`Failed to retrieve IPFS object: ${response.statusText}`)
    }

    return response
  } catch (error) {
    return new Response(error.message, {
      status: 500,
      statusText: 'Internal Server Error'
    })
  }
}
