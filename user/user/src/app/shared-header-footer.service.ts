import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedHeaderFooterService {

  constructor() { }

  private _parentProperty: boolean=true;

  set parentProperty(value: boolean) {
    this._parentProperty = value;
  }

  get parentProperty(): boolean {
    return this._parentProperty;
  }



}
