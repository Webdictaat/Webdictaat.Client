//stackoverflow.com/questions/40060498/angular-2-1-0-create-child-component-on-the-fly-dynamically/40080290#40080290
import {
    Component,
    Directive,
    NgModule,
    Input, Output,
    EventEmitter,
    ViewContainerRef,
    Compiler,
    ComponentFactory,
    ModuleWithComponentFactories,
    ComponentRef,
    NgZone,
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA,
    ComponentFactoryResolver,
    ApplicationRef,
    EmbeddedViewRef,
    ViewChild,
    ElementRef
} from '@angular/core';


//angular modules
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { StaticInjector, Injector } from '@angular/core/src/di/injector'; //from version 6

//my modules
import { GameElementsModule } from '../game-elements/game-elements.module';
import { DatabModule } from "../extern/databases/datab.module"; //voor bart zijn datab project
import { WdCoreModule } from '../wd-core.module';

export function createComponentFactory(compiler: Compiler, metadata: Component): Promise<ComponentFactory<any>> {
    const cmpClass = class DynamicComponent { };
    const decoratedCmp = Component(metadata)(cmpClass);

    @NgModule({
        imports: [
            BrowserModule, CommonModule, RouterModule, WdCoreModule, GameElementsModule, DatabModule
        ],
        schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
        declarations: [decoratedCmp]
    })
    class DynamicHtmlModule { }

    return compiler.compileModuleAndAllComponentsAsync(DynamicHtmlModule)
        .then((moduleWithComponentFactory: ModuleWithComponentFactories<any>) => {
            return moduleWithComponentFactory.componentFactories.find(x => x.componentType === decoratedCmp);
        });
}

@Component({ 
    selector: 'html-outlet' ,
    template: '<div #content></div>'
})
export class HtmlOutlet {

    @ViewChild('content')
    public contentEl: ElementRef;

    @Input() html: string;
    cmpRef: ComponentRef<any>;

    @Output()
    public afterCompile = new EventEmitter();

    constructor(
        private componentFactoryResolver: ComponentFactoryResolver,
        private appRef: ApplicationRef,
        private injector: Injector
    ) { }

    drawTemplate(html: string) {

        const component : any = new Component({
            selector: 'dynamic-html',
            template: this.html,
        });

        // 1. Create a component reference from the component 
        const componentRef = this.componentFactoryResolver
            .resolveComponentFactory(component)
            .create(this.injector);

        // 2. Attach component to the appRef so that it's inside the ng component tree
        this.appRef.attachView(componentRef.hostView);

        // 3. Get DOM element from component
        const domElem = (componentRef.hostView as EmbeddedViewRef<any>)
            .rootNodes[0] as HTMLElement;

        // 4. Append DOM element to the body
        this.contentEl.nativeElement.appendChild(domElem);

        // 5. Wait some time and remove it from the component tree and from the DOM
        setTimeout(() => {
            this.appRef.detachView(componentRef.hostView);
            componentRef.destroy();
        }, 3000);
    }

    ngOnChanges() {
        this.drawTemplate(this.html);
    }
}