import { Directive, ElementRef, HostListener} from '@angular/core'

@Directive({
    selector: '[myHighlighterDirective]'
})

export class MyHighlighterDirective{
constructor(private elRef:ElementRef){
}
@HostListener('mouseover') onMouseOver(){
    this.changeColor('#FFFF00');
}
@HostListener('mouseleave') onMouseLeave(){
    this.changeColor('');
}
private changeColor(color: string){
    this.elRef.nativeElement.style.backgroundColor = color;
}
}