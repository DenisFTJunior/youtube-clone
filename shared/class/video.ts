import { VideoModel } from '../interfaces/videoInterface';


export default class Video implements VideoModel {
    imageSrc: string;
    tittle: string;
    channel: { name: string; logoSrc: string, };
    views: number;
    createDate: Date = new Date;

    constructor(imageSrc,tittle,channel,views){
        this.imageSrc = imageSrc
        this.tittle = tittle
        this.channel = channel
        this.views = views
    }

    //Setters
    public set setImageSrc(img : string) {
        this.imageSrc = img;
    }
    public set setTittle(tittle : string) {
        this.tittle = tittle;
    }
    public set setChannel(channel :{ name: string; logoSrc: string, }) {
        this.channel = channel;
    }
    public set setViews(views : number) {
        this.views = views;
    }

    //Getters
    public get getImageSrc() : string {
        return this.imageSrc
    }
    public get getTittle() : string {
        return this.tittle
    }
    public get getChannel() : { name: string; logoSrc: string, } {
        return this.channel
    }
    public get getViews() : number {
        return this.views
}

    
    
    

    
}