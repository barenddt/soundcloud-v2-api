## Soundcloud v2 API Controller
This API controller was created for personal implementation in my project called [Soundify](https://github.com/barenddt/soundify). Soundcloud does not currently provide a method for interacting with the new v2 API effectively. The v1 API is missing a lot of endpoints the v2 api has. (/charts to name one).


## Navigation
- [Installation](#install)
- Examples
	- [Searching](#search)
	- [Streaming](#stream)
- [References](#reference)

## <span id="install">Installation</span>

#### via NPM

```
npm i soundcloud-v2-api
```

#### via YARN

```
yarn add soundcloud-v2-api
```

## Usage

### <span id="search">Example (Searching Tracks)</span>
```javascript
const SC = require('soundcloud-v2-api');

SC.init({
 clientId: 'YOUR_CLIENT_ID'
})

SC.get('/search/tracks', {
 q: 'Post', limit: 50
}).then(result => console.log(result))
```

### <span id="stream">Example (Streaming  Tracks)</span>

```javascript
//Initialize as in previous example.

SC.stream('/tracks/${track.id}/streams').then(stream => {
 stream.play()
})
```
### Usage in browsers
```javascript
SC.init({
 clientId: 'YOUR_CLIENT_ID',
 cors: true
})
```

## <span id="reference">API Reference</span>
Here are some of the most common endpoints available to use.
### /search/:type

    
|Types|Returns|
|--|--|
|tracks|List of tracks containing query|
|users|List of users containing query|
|albums|List of albums containing query|
|playlists|List of playlists containing query|

### /tracks/${track.id}/:type
|Types|Returns|
|--|--|
|/|Tracks statistics and information|
|reposters|List of users that reposted the track|
|likers|List of users that liked the track|
<<<<<<< HEAD
|comments|List of comments on the track|
=======
|comments|List of comments on the track|
>>>>>>> aa52088c05d4d302c57c54c674932f187ee47216
