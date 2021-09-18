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

    const idLbl = document.createElement("label");
    idLbl.innerText = arguments[0];

    const titleLbl = document.createElement("label");
    titleLbl.innerText = arguments[1];
    
    const albumLbl = document.createElement("label");
    albumLbl.innerText = arguments[2];

    const artistLbl = document.createElement("label");
    artistLbl.innerText = arguments[3];

    const durationLbl = document.createElement("label");
    durationLbl.innerText = durationConvertor(arguments[4]);
    durationLbl.className = "durationLbl";

    const currentImg= document.createElement("img");
    currentImg.src = arguments[5];

    const labelsDiv = document.createElement("div");
    labelsDiv.className = "songLabels";


    labelsDiv.appendChild(idLbl);
    labelsDiv.appendChild(titleLbl);
    labelsDiv.appendChild(albumLbl);
    labelsDiv.appendChild(artistLbl);

    const buttonsDiv = document.createElement("div");
    buttonsDiv.className = "buttonsDiv";

    const removeButton = document.createElement("button");
    removeButton.className = "removeButton";
    removeButton.innerText = "Remove Song"; 

    const newId = arguments[0];
    removeButton.addEventListener('click', function() { 
        document.getElementById(newId).remove();
        removeSong(newId)
        printAllPlaylists();
    }, false);

    const playButton = document.createElement("button");
    playButton.className = "playButton";
    playButton.innerText = "Play Song";

    
    playButton.addEventListener('click', function() { 
        playSong(newId)
    }, false);
    


    
    buttonsDiv.appendChild(removeButton);
    buttonsDiv.appendChild(playButton);
    buttonsDiv.appendChild(durationLbl)

    children.push(currentImg);
    children.push(labelsDiv);
    children.push(buttonsDiv);
    
    

    const classes = []
    classes.push(["song"]) // CSS later
    const attrs = {}
    const eventListeners = {}
    // console.log("Create Song Element Funtion Worked");
    return createElement("div", children, classes, attrs, arguments[0], eventListeners)
    
}


function createPlaylistElement({ id, name, songs }) {
    const children = []

    const idLbl = document.createElement("label");
    idLbl.innerText = arguments[0]

    const nameLbl = document.createElement("label");
    nameLbl.innerText = arguments[1]

    const songsLbl = document.createElement("label");
    songsLbl.innerText = arguments[2];

    children.push(idLbl);
    children.push(nameLbl);
    children.push(songsLbl);
   
    const classes = []
    classes.push(["playlist"]) // CSS later
    const attrs = {}
    const eventListeners = {}
    return createElement("div", children, classes, attrs, arguments[0], eventListeners)
    
}


function createElement(tagName, children = [], classes = [], attributes = {}, id, eventListeners = {}) {
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

sortSongs();

sortedPlaylists(); 

printAllSongs();

printAllPlaylists();

// Making the add-song-button actually do something
// document.getElementById("submit").addEventListener("click", handleAddSongEvent)
