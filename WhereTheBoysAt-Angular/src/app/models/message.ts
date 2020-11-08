export class Message{
    public messageId:number;
    public senderId:number;
    public receivedId:number;
    public sentTime:Date;
    public seen:boolean;

    

	constructor($messageId: number, $senderId:number,$recievedId:number, $sentTime:Date, $seen:boolean ) {
		this.messageId = $messageId;
        this.senderId = $senderId;
        this.receivedId = $recievedId;
        this.sentTime = $sentTime;
        this.seen = $seen;
	}

	


}
