import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {RestauranteService, Restaurante} from "../restaurantes/shared/index";


@Component({
    moduleId: module.id,
    selector: 'inicio-app',
    templateUrl: 'inicio.component.html',
    styleUrls: ['inicio.component.css']

})
export class InicioComponent implements OnInit {


    restaurantes: Restaurante[];
    public content_loaded: boolean = false;

    constructor(private router: Router, private restauranteService: RestauranteService) {
    }


    getRestaurantes(): void {
        this.restauranteService.getRestaurantes()
            .then(restaurantes => this.restaurantes = restaurantes)
            .then(() => this.content_loaded = true);
    }

    ngOnInit(): void {
        this.getRestaurantes();
    }


    // google maps zoom level
    zoom: number = 15;

    // initial center position for the map
    lat: number = 51.673858;
    lng: number = 7.815982;

    clickedMarker(label: string, index: number) {
        console.log(`clicked the marker: ${label || index}`)
    }

    mapClicked($event: MouseEvent) {
        // this.markers.push({
        //     lat: $event.coords.lat,
        //     lng: $event.coords.lng
        // });
    }

    markerDragEnd(m: marker, $event: MouseEvent) {
        console.log('dragEnd', m, $event);
    }

    markers: marker[] = [
        {
            lat: 51.673858,
            lng: 7.815982,
            label: 'A',
            draggable: true
        },
        {
            lat: 51.373858,
            lng: 7.215982,
            label: 'B',
            draggable: false
        },
        {
            lat: 51.723858,
            lng: 7.895982,
            label: 'C',
            draggable: true
        }
    ]

}
// just an interface for type safety.
interface marker {
    lat: number;
    lng: number;
    label?: string;
    draggable: boolean;

}
