export class Friend{
    private userId:number;
    private userType:string;
    private email:string;
    private password:string;
    private firstName:string;
    private lastName:string;
    private lastLatitude:number;
    private lastLongitude:number;
    private lastState: string;
    private createdOn;
    private lastLogin;


    /**
     * Getter $userId
     * @return {number}
     */
	public get $userId(): number {
		return this.userId;
	}

    /**
     * Getter $userType
     * @return {string}
     */
	public get $userType(): string {
		return this.userType;
	}

    /**
     * Getter $email
     * @return {string}
     */
	public get $email(): string {
		return this.email;
	}

    /**
     * Getter $password
     * @return {string}
     */
	public get $password(): string {
		return this.password;
	}

    /**
     * Getter $firstName
     * @return {string}
     */
	public get $firstName(): string {
		return this.firstName;
	}

    /**
     * Getter $lastName
     * @return {string}
     */
	public get $lastName(): string {
		return this.lastName;
	}

    /**
     * Getter $lastLatitude
     * @return {number}
     */
	public get $lastLatitude(): number {
		return this.lastLatitude;
	}

    /**
     * Getter $lastLongitude
     * @return {number}
     */
	public get $lastLongitude(): number {
		return this.lastLongitude;
	}

    /**
     * Getter $lastState
     * @return {string}
     */
	public get $lastState(): string {
		return this.lastState;
	}

    /**
     * Setter $userId
     * @param {number} value
     */
	public set $userId(value: number) {
		this.userId = value;
	}

    /**
     * Setter $userType
     * @param {string} value
     */
	public set $userType(value: string) {
		this.userType = value;
	}

    /**
     * Setter $email
     * @param {string} value
     */
	public set $email(value: string) {
		this.email = value;
	}

    /**
     * Setter $password
     * @param {string} value
     */
	public set $password(value: string) {
		this.password = value;
	}

    /**
     * Setter $firstName
     * @param {string} value
     */
	public set $firstName(value: string) {
		this.firstName = value;
	}

    /**
     * Setter $lastName
     * @param {string} value
     */
	public set $lastName(value: string) {
		this.lastName = value;
	}

    /**
     * Setter $lastLatitude
     * @param {number} value
     */
	public set $lastLatitude(value: number) {
		this.lastLatitude = value;
	}

    /**
     * Setter $lastLongitude
     * @param {number} value
     */
	public set $lastLongitude(value: number) {
		this.lastLongitude = value;
	}

    /**
     * Setter $lastState
     * @param {string} value
     */
	public set $lastState(value: string) {
		this.lastState = value;
	}


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
