//Might not need this, writing it for now
export class Friendship{
    private senderId;
    private receiverId;
    private status;

    /**
     * Getter $senderId
     * @return {number}
     */
    public get $senderId() {
        return this.senderId;
    }

    /**
     * Getter $receiverId
     * @return {number}
     */
    public get $receiverId() {
        return this.receiverId;
    }

    /**
     * Getter $approved
     * @return {boolean}
     */
    public get $status() {
        return this.status;
    }

    /**
     * Setter $senderId
     * @param {number} value
     */
    public set $senderId(value: number) {
        this.senderId = value;
    }

    /**
     * Setter $receiverId
     * @param {number} value
     */
    public set $receiverId(value: number) {
        this.senderId = value;
    }

    /**
     * Setter $approved
     * @param {boolean} value
     */
    public set $approved(value: boolean) {
        this.$approved = value;
    }
} 