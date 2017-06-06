import { User } from "./user";

export class DictaatSummary {
    name: String;
    lastChange: Date;
    owner: User;
    contributers: User[];
    canEdit: boolean;
}

export class DictaatSession{
    containsMe: boolean;
    participantIds: number[]
}