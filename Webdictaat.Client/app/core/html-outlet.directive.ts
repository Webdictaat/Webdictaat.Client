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
    ReflectiveInjector
} from '@angular/core';

import { RouterModule }  from '@angular/router';
import { CommonModule } from '@angular/common';
import { GameElementsModule } from '../game-elements/game-elements.module';

import { QuestionsService } from '../services/question.service';

export function createComponentFactory(compiler: Compiler, metadata: Component): Promise<ComponentFactory<any>> {
    const cmpClass = class DynamicComponent { };
    const decoratedCmp = Component(metadata)(cmpClass);

    @NgModule({
        imports: [CommonModule, RouterModule, GameElementsModule],
        providers: [QuestionsService],
        declarations: [decoratedCmp]
    })
    class DynamicHtmlModule { }

    return compiler.compileModuleAndAllComponentsAsync(DynamicHtmlModule)
        .then((moduleWithComponentFactory: ModuleWithComponentFactories<any>) => {
            return moduleWithComponentFactory.componentFactories.find(x => x.componentType === decoratedCmp);
        });
}

@Directive({ selector: 'html-outlet' })
export class HtmlOutlet {
    @Input() html: string;
    cmpRef: ComponentRef<any>;

    @Output()
    public afterCompile = new EventEmitter();

    constructor(private vcRef: ViewContainerRef, private compiler: Compiler) { }

    ngOnChanges() {

        const html = this.html;
        if (!html) return;

        if (this.cmpRef) {
            this.cmpRef.destroy();
        }

        const compMetadata = new Component({
            selector: 'dynamic-html',
            template: this.html,
        });

        createComponentFactory(this.compiler, compMetadata)
            .then(factory => {
                const injector = ReflectiveInjector.fromResolvedProviders([], this.vcRef.parentInjector);
                this.cmpRef = this.vcRef.createComponent(factory, 0, injector, []);
                this.afterCompile.emit();
            });
    }

    ngOnDestroy() {
        if (this.cmpRef) {
            this.cmpRef.destroy();
        }
    }
}