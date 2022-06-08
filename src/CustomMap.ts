
//instructions to add markers on maps
interface Mappable {
    location: {
        lat: number;
        lng: number;
    }

    markerContent();
}
export class CustomMap {
    private googleMap: google.maps.Map;

   
    constructor(divId: string) {
        this.googleMap = new google.maps.Map(document.getElementById(divId), {
            zoom: 1,
            center: {
                lat :0,
                lng: 0
            }
        });

    }

    addMarker(mappable:Mappable): void {
        const marker = new google.maps.Marker({
            map: this.googleMap,
            position: {
                lat : mappable.location.lat,
                lng : mappable.location.lng
            }
        });
    marker.addListener('click', () => {
     const infoWindows = new google.maps.InfoWindow({
         content: mappable.markerContent()
     }); 
     infoWindows.open(this.googleMap, marker);
    });
 }
}