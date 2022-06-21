import React from 'react'
import { useRecoilValue } from 'recoil'
import { playlistAtom } from '../atoms/playlistAtom'
import Song from './Song'

function Songs() {
    const playlist= useRecoilValue(playlistAtom)
  return (
    <div className="text-white p-8 flex flex-col space-y-1 pb-28">
        {playlist?.tracks.items.map((e,i)=>
         <Song key={e.track.id} track={e} order={i}/>)}
      
    </div>
  )
}

export default Songs
