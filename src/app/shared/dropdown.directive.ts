import { Directive, ElementRef, HostBinding, HostListener } from "@angular/core";

@Directive({
    selector: '[appDropdown]'
})

export class DropdownDirective{

    @HostBinding('class.open') isOpen= false;

    constructor(private elRef: ElementRef){}
    // @HostListener('click') onClick(eventData: Event): void {
    //     this.isOpen = !this.isOpen;
    // }
    @HostListener('document:click',['$event']) onClick(eventData: Event): void {
        this.isOpen = this.elRef.nativeElement.contains(eventData.target) ? !this.isOpen : false;
    }
}