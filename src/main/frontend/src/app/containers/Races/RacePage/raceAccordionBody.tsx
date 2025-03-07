import { Accordion } from "react-bootstrap";
import { EntryDTO, EntryFullDTO } from "../../../../services/openapi";
import { FullEntryAccordionBody } from "../../../components/accordions/fullEntryAccordionBody";
import { SubCategoryBody } from "../../../components/accordions/subCategoryBody";
import { getAllRegions } from "../../../globalFunctions/RegionHooks";
import '../../../styles/masonary.css';
import "../../../styles/subObjects.css";
import { RaceFunction } from "./raceFunction";
import { RaceSubObjectsFunction } from "./raceSubObjectsFunction";

interface IRaceAccordionBody {
  race: EntryFullDTO,
  regions?: EntryDTO[]
}




export function RaceAccordionBody(props: Readonly<IRaceAccordionBody>) {

  const { saveImageToRace, deleteImageFromRace, addNewDesctiptionToRace, updateRaceDescription, deleteDescriptionFromRace } = RaceFunction();
  const { saveNewSubRaceToRace, saveExistingSubRaceToRace, getAllSubRaces, removeSubRaceFromRaceFunction, saveNewRegionToRace, saveExistingRegionToRace, removeRegionFromRaceFunction } = RaceSubObjectsFunction();

  return (
    <Accordion.Body>
      <FullEntryAccordionBody categoryName={"Race"} entryFullDTO={props.race}
      saveImageToEntry={saveImageToRace}
      deleteImageFromEntry={deleteImageFromRace} deleteImageButtonActionText={"Delete image"} 
      addNewDescriptionToEntry={addNewDesctiptionToRace} 
      updateDescription={updateRaceDescription} 
      deleteDescriptionFromEntry={deleteDescriptionFromRace} />
      <SubCategoryBody mainEntryId={props.race.object?.id!}
        subObjects={props.race.subObjects}
        subCategoryTitle={"Sub races"} subCategoryLink={"subRaces"}
        fillTheListWithAllSubObjects={getAllSubRaces}
        addExistingObjectToRelation={saveExistingSubRaceToRace}
        deleteSubObject={removeSubRaceFromRaceFunction}
        addNewSubEntryToRelation={saveNewSubRaceToRace}
        addButtonActionText={"Add new sub race that originated from this race"}
        addExistingButtonActionText={"Link existing sub race to this main race"}
        deleteButtonActionText={`Unlink this sub race from ${props.race.object?.name}`}
        subCategoryLinkText={"sub race"} />
      <SubCategoryBody mainEntryId={props.race.object?.id!}
        subObjects={props.regions}
        subCategoryTitle={"Regions"} subCategoryLink={"regions"}
        fillTheListWithAllSubObjects={getAllRegions}
        addExistingObjectToRelation={saveExistingRegionToRace}
        deleteSubObject={removeRegionFromRaceFunction}
        addNewSubEntryToRelation={saveNewRegionToRace}
        addButtonActionText={"Add new region in which this race exist"}
        addExistingButtonActionText={"Link existing region to places where this race occures"}
        deleteButtonActionText={`Unlink this region from ${props.race.object?.name}`} 
        subCategoryLinkText={"region"} />
    </Accordion.Body>
  )
}