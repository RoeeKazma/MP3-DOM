
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

function playPlaylist (playlistId) {
    const classes = []
    classes.push(["selected"])
    const playlists = document.getElementsByClassName("playlist");
    
    
    for (let playlist of playlists) {
        if (playlist.id == playlistId)
        {
            console.log(playlist);
            playlist.classList.add(classes);
        }
        else {
            playlist.classList.remove(classes)
        }
    }
    
}

function createSongElement({ id, title, album, artist, duration, coverArt }) { 
    const children = []

    const idLbl = document.createElement("label");
    idLbl.innerText = "Id: " + arguments[0];

    const titleLbl = document.createElement("label");
    titleLbl.innerText = "Title: " + arguments[1];
    
    const albumLbl = document.createElement("label");
    albumLbl.innerText = "Album: " + arguments[2];

    const artistLbl = document.createElement("label");
    artistLbl.innerText = "Artist: " + arguments[3];

    const durationLbl = document.createElement("label");
    durationLbl.innerText = "Duration: " + durationConvertor(arguments[4]);
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
    idLbl.innerText = "Id: " + arguments[0]

    const nameLbl = document.createElement("label");
    nameLbl.innerText = "Name: " + arguments[1]

    const songsLbl = document.createElement("label");
    songsLbl.innerText = "Songs Id's: " + arguments[2];

    const buttonsDiv = document.createElement("div");
    buttonsDiv.className = "buttonsDiv";

    const labelsDiv = document.createElement("div");
    labelsDiv.className = "playlistLabels";

    labelsDiv.appendChild(idLbl);
    labelsDiv.appendChild(nameLbl);
    labelsDiv.appendChild(songsLbl);
    

    const removeButton = document.createElement("button");
    removeButton.className = "removeButton";
    removeButton.innerText = "Remove Playlist"; 

    const newId = arguments[0];
    removeButton.addEventListener('click', function() { 
        document.getElementById(newId).remove();
        removePlaylist(newId)
        printAllPlaylists();
    }, false);

    

    const playButton = document.createElement("button");
    playButton.className = "playButton";
    playButton.innerText = "Play Playlist";

    
    playButton.addEventListener('click', function() { 
        playPlaylist(newId)
    }, false);
     
    buttonsDiv.appendChild(removeButton);
    buttonsDiv.appendChild(playButton);

    children.push(labelsDiv);
    children.push(buttonsDiv);
   
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

