
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { Injectable } from "@angular/core";
import { EditPageComponent } from "../../../cms/pages/edit-page.component";

export interface DirtyComp{

    isDirty() : boolean;

}

@Injectable()
export class DirtyGuard implements CanDeactivate<DirtyComp> {
    
    canDeactivate(component: DirtyComp){
        
        if(component.isDirty()){
            return confirm("You have unsaved changes. Would you like to discard these changes?");
        }

        return true;
    }
}