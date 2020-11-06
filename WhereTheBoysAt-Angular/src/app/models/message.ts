export class Message{
    public userId:number;
    public userType:string;
    public email:string;
    public password:string;
    public firstName:string;
    public lastName:string;
    public lastLatitude:number;
    public lastLongitude:number;
    public lastState: string;
    public createdOn;
    public lastLogin;


    

	constructor($userId: number, $userType: string, $email: string, $password: string, $firstName: string, $lastName: string, $lastLatitude: number, $lastLongitude: number, $lastState: string) {
		this.userId = $userId;
		this.userType = $userType;
		this.email = $email;
		this.password = $password;
		this.firstName = $firstName;
		this.lastName = $lastName;
		this.lastLatitude = $lastLatitude;
		this.lastLongitude = $lastLongitude;
		this.lastState = $lastState;
	}

	


}
