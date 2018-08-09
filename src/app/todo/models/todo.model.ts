export class Todo
{
    public id: number;
    public text: string;
    public status: boolean;

    constructor(public textTask: string)
    {
        this.id = Math.floor(Math.random()*10000)+1;
        this.text = textTask;
        this.status = false;
    }
}