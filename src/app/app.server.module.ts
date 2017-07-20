import { NgModule, NgModuleFactory, NgModuleFactoryLoader, RendererFactory2, NgZone } from '@angular/core';
import { ServerModule, ɵServerRendererFactory2 } from '@angular/platform-server';
import { NoopAnimationsModule, ɵAnimationRendererFactory } from '@angular/platform-browser/animations';
import { ɵAnimationEngine } from '@angular/animations/browser';
import { AppModule } from './app.module';
import { AppComponent } from './app.component';

// declarations
export function instantiateServerRendererFactory(
    renderer: RendererFactory2, engine: ɵAnimationEngine, zone: NgZone) {
    return new ɵAnimationRendererFactory(renderer, engine, zone);
}

export const SERVER_RENDER_PROVIDERS = [{
    provide: RendererFactory2,
    useFactory: instantiateServerRendererFactory,
    deps: [ɵServerRendererFactory2, ɵAnimationEngine, NgZone]
}
];

@NgModule({
    imports: [
        ServerModule,
        NoopAnimationsModule,
        AppModule
    ],
    bootstrap: [AppComponent],
    providers: [
        SERVER_RENDER_PROVIDERS
    ]
})
export class AppServerModule { }