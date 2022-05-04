import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appMagnify]'
})
export class MagnifyDirective {

      private defaultFontSize: any = 0;
      private originalSize = 0;
      private counter: number = 0;

      constructor(private element: ElementRef) {
        this.defaultFontSize = window.getComputedStyle(element.nativeElement).fontSize;
        this.originalSize = this.defaultFontSize;
        this.defaultFontSize = this.defaultFontSize.substring(0, this.defaultFontSize.length - 2);
        this.defaultFontSize = Number(this.defaultFontSize);
        this.magnify(this.element);
      }

      private magnify(element: any) {
        let fontSizeArray = [
          this.defaultFontSize, 
          this.defaultFontSize+3,
          this.defaultFontSize+6,
          this.defaultFontSize+9
        ];
        let newSize = 0;
        if(this.counter<fontSizeArray.length-1){
          newSize = fontSizeArray[++this.counter];
          element.nativeElement.style.fontSize = String(newSize +"px");
          console.log(newSize);
        } else {
          newSize = this.originalSize;
          element.nativeElement.style.fontSize = String(newSize +"px");
          console.log(newSize);
        }
      }

      @HostListener('click') onClick() {
        this.magnify(this.element);
      }

      @HostListener('mouseenter') onMouseEnter() {
        this.element.nativeElement.style.cursor = "zoom-in";
        this.element.nativeElement.style.userSelect = "none";
      }
}
