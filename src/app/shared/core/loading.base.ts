export class Loader{

    public isLoading: boolean;

    public load(){
        this.isLoading = true;
        return this;
    }

    public ready(){
        this.isLoading = false;
    }

    constructor(isLoading){
        this.isLoading = isLoading;
    }
    

}