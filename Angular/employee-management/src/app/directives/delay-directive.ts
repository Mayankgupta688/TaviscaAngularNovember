import { Directive, ViewContainerRef, TemplateRef, Input } from "@angular/core";

@Directive({
    selector: "[ngDelay]"
})
export default class DelayDirective {
    @Input() ngDelay: string = "0";
    constructor(private _container: ViewContainerRef, private _template: TemplateRef<any>) { }
    ngOnInit() {
        setTimeout(() => {
            debugger;
            this._container.createEmbeddedView(this._template)
        }, +this.ngDelay)
    }
}