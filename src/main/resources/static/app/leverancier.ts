import {Land} from './land';
import {Gemeente} from '.gemeente';
import {Provincie} from '.provincie';
import {Artikel} from '.artikel';

export class Leverancier {
    id: number;
    naam: string;
    straat: string;
    telefoon: string;
   	fax: string;
   	email: string;
   	website: string;
   	latitude: number;
   	longtitude: number;
   	webshop: boolean;
   	land: Land;
   	gemeente: Gemeente;
   	provincie: Provincie;
    artikels: Artikel[];
}