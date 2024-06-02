import { Dispatch } from "@reduxjs/toolkit"
import { EntryDTO, EntryFullDTO, ImageDTO } from "../../../../../../services/openapi"
import { useAppDispatch } from "../../../../../hooks"
import { addImageToRegion, addNewCultureToRegion, addNewPlaceToRegion, addNewRaceToRegion, addNewSubRaceToRegion, removeCultureFromRegion, removeImageFromRegion, removeKingdomFromRegion, removePlaceFromRegion, removeRaceFromRegion, removeSubRaceFromRegion, setKingdomToRegion, setRegion, updateRegion } from "./oneRegionSlice"

const actionDispatch = (dispatch: Dispatch) => ({
    setRegion: (region: EntryFullDTO) => {
        dispatch(setRegion(region))
    },
    updateRegion: (entryDTO: EntryDTO) => {
        dispatch(updateRegion(entryDTO))
    },

    addImageToRegion: (imageDTO: ImageDTO) => {
        dispatch(addImageToRegion(imageDTO))
    },
    removeImageFromRegion: (imageId: number) => {
        dispatch(removeImageFromRegion(imageId))
    },

    setKingdomToRegion: (kingdomEntryDTO: EntryDTO) => {
        dispatch(setKingdomToRegion(kingdomEntryDTO))
    },
    removeKingdomFromRegion: () => {
        dispatch(removeKingdomFromRegion())
    },

    addNewPlaceToRegion: (placeDTO: EntryDTO) => {
        dispatch(addNewPlaceToRegion(placeDTO))
    },
    removePlaceFromRegion: (placeId: number) => {
        dispatch(removePlaceFromRegion(placeId))
    },

    addNewCultureToRegion: (cultureDTO: EntryDTO) => {
        dispatch(addNewCultureToRegion(cultureDTO))
    },
    removeCultureFromRegion: (cultureId: number) => {
        dispatch(removeCultureFromRegion(cultureId))
    },

    addNewRaceToRegion: (raceDTO: EntryDTO) => {
        dispatch(addNewRaceToRegion(raceDTO))
    },
    removeRaceFromRegion: (raceId: number) => {
        dispatch(removeRaceFromRegion(raceId))
    },

    addNewSubRaceToRegion: (subRaceDTO: EntryDTO) => {
        dispatch(addNewSubRaceToRegion(subRaceDTO))
    },
    removeSubRaceFromRegion: (subRaceId: number) => {
        dispatch(removeSubRaceFromRegion(subRaceId))
    },
})

export function OneRegionDispatcher() {
    const { setRegion, updateRegion, addImageToRegion, removeImageFromRegion,
        setKingdomToRegion, removeKingdomFromRegion, addNewPlaceToRegion, removePlaceFromRegion,
        addNewCultureToRegion, removeCultureFromRegion,
        addNewRaceToRegion, removeRaceFromRegion, addNewSubRaceToRegion, removeSubRaceFromRegion } = actionDispatch(useAppDispatch());
    return {
        setRegion, updateRegion, addImageToRegion, removeImageFromRegion,
        setKingdomToRegion, removeKingdomFromRegion, addNewPlaceToRegion, removePlaceFromRegion,
        addNewCultureToRegion, removeCultureFromRegion,
        addNewRaceToRegion, removeRaceFromRegion, addNewSubRaceToRegion, removeSubRaceFromRegion
    };
}