## Soundcloud v2 API Controller

This API controller was created for personal implementation in my project called [Soundify](https://github.com/barenddt/soundify). Soundcloud does not currently provide a method for interacting with the new v2 API effectively. The v1 API is missing a lot of endpoints the v2 api has. (/charts to name one).

<hr />

### Navigation

- [Installation](#install)
- Examples
  _ [Searching](#search)
  _ [Streaming](#stream)
- [References](#reference)
  <hr/>

### <span id="install">Installation</span>

    yarn add soundcloud-v2-api

    or using npm:

    npm i soundcloud-v2-api

### <span id="search">Example (Searching Tracks)</span>

    const SC = require('soundcloud-v2-api');

    SC.init({
    	clientId: 'YOUR_CLIENT_ID'
    })

    SC.get('/search/tracks', {
    	q: 'House', limit: 25
    }).then(result => {
    	console.log(result)
    })

### <span id="stream">Example (Streaming Tracks)</span>

    //Initialize as in previous example

    SC.stream(`/tracks/${track.id}/streams`).then(stream => {
        stream.play()
    })

## API Reference

Here are some of the most common endpoints available to use.

### /search/:type

| Types     | Returns                            |
| --------- | ---------------------------------- |
| tracks    | List of tracks containing query    |
| users     | List of users containing query     |
| albums    | List of albums containing query    |
| playlists | List of playlists containing query |
