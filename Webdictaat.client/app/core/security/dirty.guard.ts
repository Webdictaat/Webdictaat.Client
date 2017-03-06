
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { Injectable } from "@angular/core";

export interface DirtyComp{

    isDirty() : boolean;

}

@Injectable()
export class DirtyGuard implements CanDeactivate<DirtyComp> {
    
    canDeactivate(component: DirtyComp, route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
        if(component.isDirty()){
            if(confirm("You have unsaved changes. Would you like to discard these changes?")){
                return true;
            }
            else{
                return false;
            }
        }
    }
}