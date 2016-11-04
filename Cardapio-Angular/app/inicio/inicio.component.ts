import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {RestauranteService, Restaurante} from "../restaurantes/shared/index";
import {LocationService} from '../shared/utils/location.service';


@Component({
    moduleId: module.id,
    selector: 'inicio-app',
    templateUrl: 'inicio.component.html',
    styleUrls: ['inicio.component.css']

})
export class InicioComponent implements OnInit {


    public criterioBusca: string;
    public valor: any;
    restaurantes: Restaurante[];
    public content_loaded: boolean = false;
    public location: any;
    public lat: number;
    public lng: number;
    // google maps zoom level
    zoom: number = 21;
    public markers: IMarker[];


    constructor(private router: Router, private restauranteService: RestauranteService, private locationService: LocationService) {
    }


    getRestaurantes(): void {
        this.restauranteService.getRestaurantesProximos()
            .then(restaurantes => this.restaurantes = restaurantes)
            .then(() => this.content_loaded = true);
    }


    getUserLocation(): void {
        this.locationService.getUserLocation()
            .subscribe(resultado => {
                localStorage.setItem('user_location', JSON.stringify({
                    lat: resultado.lat,
                    lon: resultado.lon,
                    cidade: resultado.city
                }));
            });

        this.location = JSON.parse(localStorage.getItem('user_location'));
    }


    ngOnInit(): void {
        this.getRestaurantes();
        this.getUserLocation();
        this.criterioBusca = 'preco';


        // initial center position for the map
        this.lat = this.location.lat;
        this.lng = this.location.lon;


        this.markers = [
            {
                lat: this.location.lat,
                lng: this.location.lon,
                label: '',
                draggable: true
            }
        ]
    }


    buscar(criterio: string, valor: any): void {

        this.router.navigate(['/restaurantes', criterio, valor]);

    }

    clickedMarker(label: string, index: number) {
        console.log(`clicked the marker: ${label || index}`)
    }

    mapClicked($event: MouseEvent) {
        // this.markers.push({
        //     lat: $event.coords.lat,
        //     lng: $event.coords.lng
        // });
    }

    markerDragEnd(m: IMarker, $event: MouseEvent) {
        console.log('dragEnd', m, $event);
    }

}
// just an interface for type safety.
interface IMarker {
    lat: number;
    lng: number;
    label?: string;
    draggable: boolean;

}
