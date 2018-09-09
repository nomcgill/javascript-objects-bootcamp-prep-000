var playlist = new Object({paramore:'decode'})

function updatePlaylist(playlist,artist,song){
  playlist[artist] = song
  return playlist
}

function removeFromPlaylist(playlist,artist,song)
delete playlist.paramore
 return playlist