"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var dictaten_component_1 = require("../dictaten/dictaten.component");
var dictaat_component_1 = require("../dictaat/dictaat.component");
var edit_page_component_1 = require("../pages/edit-page.component");
var profile_component_1 = require("../profile/profile.component");
var demo_component_1 = require("../demo/demo.component");
var dirty_guard_1 = require("../core/security/dirty.guard");
var appRoutes = [
    { path: '', redirectTo: '/dictaten', pathMatch: 'full' },
    {
        path: 'dictaten',
        component: dictaten_component_1.DictatenComponent
    },
    {
        path: 'dictaten/:dictaatName',
        component: dictaat_component_1.DictaatComponent
    },
    {
        path: 'dictaten/:dictaatName/pages/:pageName',
        component: edit_page_component_1.EditPageComponent,
        canDeactivate: [dirty_guard_1.DirtyGuard],
    },
    {
        path: 'profile',
        component: profile_component_1.ProfileComponent
    },
    {
        path: 'dictaten/:dictaatName/pages/:pageName',
        component: edit_page_component_1.EditPageComponent
    },
    { path: 'demo', component: demo_component_1.DemoComponent }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map