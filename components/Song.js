import React from 'react'
import { useRecoilState } from 'recoil'
import { currentTrackIdState, isPlayingState } from '../atoms/songAtom'
import useSpotify from '../hooks/useSpotify'
import { millisToMinutesAnsSeconds } from '../lib/time'

function Song({order, track}) {
    const spotifyApi =useSpotify()
    const [currentTrackId, setCurrentTrackId] = useRecoilState(currentTrackIdState)
    const [isPlaying, setIsplaying] =useRecoilState(isPlayingState)
    const playsong=()=>{
      setCurrentTrackId(track.track.id)
      setIsplaying(true);
      spotifyApi.play({
        uris: [track.track.uri], // Uniform Resource Indentifier
      })

    }
  return (
    <div className="grid grid-cols-2 text-gray-500 py-4 px-5
    hover:bg-gray-900 rounded-lg cursor-pointer"
    onClick={playsong}>
        <div className="flex items-center space-x-4">
            <p>{order+1}</p>
            <img className="h-10 w-10" 
            src={track.track.album.images[0].url} alt=""/>
            <div>
                <p className="w-36 lg:w-64 text-white truncate">{track.track.name}</p>
                <p className="w-40">{track.track.artists[0].name}</p>
            </div>

        </div>
        <div className="flex items-center justify-between ml-auto md:ml-0">
                <p className="hidden md:inline w-40">{track.track.album.name}</p>
                <p>{millisToMinutesAnsSeconds(track.track.duration_ms)}</p>
            </div>

      
    </div>
  )
}

export default Song
