import { Stringifiable } from 'd3';

export class Message{
    public messageId:number;
    public senderId:number;
    public receivedId:number;
    public message:string;
    public sentTime:Date;
    public seen:boolean;

    

	constructor($messageId: number, $senderId:number,$recievedId:number, $message:string,$sentTime:Date, $seen:boolean ) {
		this.messageId = $messageId;
        this.senderId = $senderId;
        this.receivedId = $recievedId;
        this.message = $message;
        this.sentTime = $sentTime;
        this.seen = $seen;
	}

	


}
