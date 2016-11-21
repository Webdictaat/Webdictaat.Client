"use strict";
var router_1 = require('@angular/router');
var dictaten_component_1 = require('../dictaten/dictaten.component');
var dictaat_component_1 = require('../dictaat/dictaat.component');
var edit_page_component_1 = require('../pages/edit-page.component');
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
        component: edit_page_component_1.EditPageComponent
    },
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map