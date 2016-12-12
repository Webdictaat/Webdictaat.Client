"use strict";
var router_1 = require('@angular/router');
var page_component_1 = require('../page/page.component');
var appRoutes = [
    {
        path: ':pageName',
        component: page_component_1.PageComponent
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map