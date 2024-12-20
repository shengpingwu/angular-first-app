import {Injectable} from '@angular/core';
import { Housinglocation } from './housinglocation';

@Injectable({
  providedIn: 'root',
})
export class HousingServiceWeb {

  url = 'http://localhost:3000/locations';


  async getAllHousingLocationsAsync(): Promise<Housinglocation[]> {
    const response = await fetch(this.url);

    if (!response.ok) {
      throw new Error(`Error en la solicitud: ${response.statusText}`);
    }
    return (await response.json()) ?? [];
  }

  async getHousingLocationByIdAsync(id: number): Promise<Housinglocation | undefined> {
    const data = await fetch(`${this.url}/${id}`);
    return (await data.json()) ?? {};
  }

  submitApplication(firstName: string, lastName: string, email: string) {
    // tslint:disable-next-line
    console.log(firstName, lastName, email);
  }
}