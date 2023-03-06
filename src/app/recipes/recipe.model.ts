export class Recipe{
    public name: string;
    public description: string;
    public imagePath: string;

    constructor(name: string, descriprion: string, imagePath: string){
        this.name = name;
        this.description = descriprion;
        this.imagePath = imagePath;
    }
}