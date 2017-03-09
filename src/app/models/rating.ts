export class Rating {
    id: number;
    title: string;
    description: Boolean = false;
    emotion: string;
    feedback: string;
    myRate: Rate;
}

export class Rate {
    id: number;
    emotion: number;
    feedback: string;
}