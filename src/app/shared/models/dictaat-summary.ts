import { User } from "./user";

export class DictaatSummary {
    name: String;
    lastChange: Date;
    owner: User;
    contributers: String[]; //list of emails
    canEdit: boolean;
    isEnabled: boolean; 
}
