### Getting started

    $ npm i soundcloud-v2-api
    or
    $ yarn add soundcloud-v2-api
#### Initialization

    const SC = require('soundcloud-v2-api');
    
    SC.init({
	    clientId: 'your-client-id',
	    cors: true // Use if using chrome to avoid CORS blocking.
    })
#### Searching Tracks

    SC.get('/search/tracks', {
	    q: 'Post Malone',
	    limit: 50
    }).then(result => console.log(result))

#### Streaming Tracks

    SC.stream(`/tracks/${track.id}/streams`).then(stream => {
	    stream.play()
	    // Url to stream = stream.url
    })