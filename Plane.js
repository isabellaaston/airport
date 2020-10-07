class Plane {
    constructor(capacity) {
        this.capacity=capacity
        this.passengers=[]
    }
    boardPlane(passenger){
        if(this.passengers.length<this.capacity)
            this.passengers.push(passenger)
        else throw new Error("plane is full")
    }
}

module.exports=Plane