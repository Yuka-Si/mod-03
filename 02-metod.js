const playlist = {
    name: 'my superhero',
    rating: 5,
    tracks: ['track-1', 'track-2', 'track-3'],
    treckCount: 3,

    changeName(newName) {
        console.log('this is getName', this);

        this.name = newName
    },
    addTrack(track) {
        this.tracks.push(track);
    },
    updateRating(newRating) {
        this.rating = newRating;
    },
    getTrackCount() {
        return this.tracks.length;
    }
};


playlist.changeName('new name')
console.log(playlist);

playlist.addTrack('new track');
playlist.addTrack('new track-1');
playlist.addTrack('new track-1');
console.log(playlist);

playlist.updateRating(4);
console.log(playlist);