import { atom } from "recoil"
export const currentTrackIdState =atom({
    key: "currentTrackIdState",
    //unique ID (with respect to other atom/selectors)
    default:null,
})
export const isPlayingState= atom({
    key: "isPlayingState",
    default:false,
})