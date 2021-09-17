/**
 * Plays a song from the player.
 * Playing a song means changing the visual indication of the currently playing song.
 *
 * @param {Number} songId - the ID of the song to play
 */
function playSong(songId) {
    const selectedSong = document.getElementById(songId);
    const classes = []
    classes.push(["selected"])

    const songs = document.getElementsByClassName("song");
    for (let song of songs) {
        song.classList.remove(classes)
    }
    selectedSong.classList.add(classes);
}

/**
 * Removes a song from the player, and updates the DOM to match.
 *
 * @param {Number} songId - the ID of the song to remove
 */
function removeSong(songId) {
    // Your code here
}

/**
 * Adds a song to the player, and updates the DOM to match.
 */
function addSong({ title, album, artist, duration, coverArt }) {
    // Your code here
}

/**
 * Acts on a click event on an element inside the songs list.
 * Should handle clicks on play buttons and remove buttons of songs.
 *
 * @param {MouseEvent} event - the click event
 */
function handleSongClickEvent(event) {
    // Your code here
}

/**
 * Handles a click event on the button that adds songs.
 *
 * @param {MouseEvent} event - the click event
 */
function handleAddSongEvent(event) {
    // Your code here
}


function createSongElement({ id, title, album, artist, duration, coverArt }) {
    const children = []
    const ul = document.createElement("ul");
    for (let i = 0; i < 5; i++)
    {
        if (arguments[i] === arguments[4])
        {
            arguments[i] = durationConvertor(arguments[4]);
        }
        let list = document.createElement("li"); 
        list.innerText = arguments[i]
        ul.append(list);
    }
    let currentImg= document.createElement("img");
    currentImg.src= arguments[5];
    ul.appendChild(currentImg);
    children.push(ul)
    const classes = []
    classes.push(["song"]) // CSS later
    const attrs = { onclick: `playSong(${arguments[0]})`,}
    const eventListeners = {}
    return createElement("div", children, classes, attrs, arguments[0], eventListeners)
    
}


function createPlaylistElement({ id, name, songs }) {
    const children = []

    const ul= document.createElement("ul");
    for(let i=0; i<3; i++)
    {
        let li= document.createElement("li");
        li.innerHTML = arguments[i];
        ul.appendChild(li);
    }
    children.push(ul);
    const classes = []
    classes.push(["playlist"]) // CSS later
    const attrs = {}
    const eventListeners = {}
    return createElement("div", children, classes, attrs, id, eventListeners)
    
}


function createElement(tagName, children = [], classes = [], attributes = {}, eventListeners = {}, id) {
    const element = document.createElement(tagName);
    for (let child of children)
    {
        element.appendChild(child);
    }
    for (let cls of classes)
    {
        element.classList.add(cls);
    }
    
    Object.entries(attributes).forEach(([key,value]) => {
        if (key !== undefined) {
            element.setAttribute(key, value);
        }
    })
    Object.entries(eventListeners).forEach(([key,value]) => 
    {
        if (key !== undefined) 
        {
            element.setAttribute(key, value);
        }
    })
    element.id = id;
    return element;
}

sortedSongs();

sortedPlaylists(); 

printAllSongs();

printAllPlaylists();

// Making the add-song-button actually do something
document.getElementById("add-button").addEventListener("click", handleAddSongEvent)
