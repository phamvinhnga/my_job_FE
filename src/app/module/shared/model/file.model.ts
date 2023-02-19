export class FileModel implements IFileModel {
    id:string | undefined;
    name:string | undefined;
    url:string | undefined | ArrayBuffer;
    type:string | undefined;
}

export interface IFileModel{
    id:string | undefined;
    name:string | undefined;
    url:string | undefined | ArrayBuffer;
    type:string | undefined;
}