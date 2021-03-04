export interface VideoModel{
    imageSrc:string;
    tittle:string;
    channel:{
        name:string,
        logoSrc:string,
    }
    views:number;
    createDate:Date;
}