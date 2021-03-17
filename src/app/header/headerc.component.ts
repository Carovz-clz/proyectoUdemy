import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector: 'app-header',
    templateUrl: './headerc.component.html'
})
export class HeaderComponentC {
    @Output() fetureSelected = new EventEmitter<string>();

    constructor() {
        
    }

    onSelect(feature: string){
        this.fetureSelected.emit(feature);
    }
}