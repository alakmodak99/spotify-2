import { atom } from "recoil"
export const playlistAtom =atom({
    key: "playlistAtomState",
    default:null,
});
export const playlistIdState=atom({
    key: "playlistIdState", 
    // can't have more than one key for one id 
    default: "1PNRdAESAan4hTcZvn5Fts",
})