package com.as.dndwebsite.places.kingdom.region.place;

import com.as.dndwebsite.dto.EntryDTO;
import com.as.dndwebsite.dto.ImageDTO;
import com.as.dndwebsite.dto.PageInfo;
import com.as.dndwebsite.places.kingdom.region.place.placerace.IPlaceRaceService;
import com.as.dndwebsite.places.kingdom.region.place.placeregion.IPlaceRegionService;
import com.as.dndwebsite.places.kingdom.region.place.placesubrace.IPlaceSubRaceService;
import com.as.dndwebsite.util.IPageMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/places")
@RequiredArgsConstructor
public class PlaceController {
    private final IPlaceService placeService;
    private final IPlaceImageService placeImageService;
    private final IPlaceRegionService placeRegionService;
    private final IPlaceRaceService placeRaceService;
    private final IPlaceSubRaceService placeSubRaceService;
    private final IPageMapper pageMapper;

    @GetMapping
    public ResponseEntity<Map<String, Object>> getPlaces(@RequestParam(defaultValue = ("number:1; size:30")) PageInfo pageInfo) {
        return ResponseEntity.ok().body(pageMapper.convertDataFromPageToMap(placeService.getPlaces(pageInfo)));
    }

    @GetMapping("/{name}")
    public ResponseEntity<PlaceDTO> getPlaceByName(@PathVariable("name") String name) {
        EntryDTO place = placeService.getPlace(name);
        EntryDTO region = placeRegionService.getRegionOfPlace(place.id());
        List<ImageDTO> imageDTOS = placeImageService.getImagesOfPlace(place.id());
        List<EntryDTO> races = placeRaceService.getRacesRelatedToPlace(place.id());
        List<EntryDTO> subRaces = placeSubRaceService.getSubRacesRelatedToPlace(place.id());
        return ResponseEntity.ok().body(new PlaceDTO(place, region, imageDTOS, races, subRaces));
    }

    @PostMapping
    public ResponseEntity<EntryDTO> savePlace(@RequestBody EntryDTO place) {
        return ResponseEntity.status(HttpStatus.CREATED).body(placeService.savePlace(place));
    }

    @PutMapping("/{id}")
    public ResponseEntity<HttpStatus> updatePlace(@RequestBody EntryDTO place,
                                                  @PathVariable("id") Long id) {
        placeService.updatePlace(place, id);
        return ResponseEntity.ok().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<HttpStatus> deletePlace(@PathVariable("id") Long id) {
        placeService.deletePlace(id);
        return ResponseEntity.ok().build();
    }

    @PostMapping(path = "{placeId}/image",
            consumes = MediaType.MULTIPART_FORM_DATA_VALUE,
            produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<ImageDTO> saveImageToPlace(@PathVariable("placeId") Long placeId,
                                                     @RequestParam("image") MultipartFile imageFile) {
        return ResponseEntity.ok().body(placeImageService.saveImageToPlace(imageFile, placeId));
    }

    @DeleteMapping("/{placeId}/image/{imageId}")
    public ResponseEntity<HttpStatus> deleteImageFromRegion(@PathVariable("placeId") Long placeId,
                                                            @PathVariable("imageId") Long imageId) {
        placeImageService.deleteImageFromPlace(placeId, imageId);
        return ResponseEntity.ok().build();
    }
}