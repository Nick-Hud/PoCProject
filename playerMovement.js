function playerInput() {
    if (keyIsDown(37)) {
        //left arrow
        player1.left(1)
    }
    if (keyIsDown(39)) {
        //arrow right
        player1.right(1)
    }
    if (keyIsDown(38)) {
        //arrow up
        player1.forward(1)
    }
    if (keyIsDown(40)) {
        //arrow down
        player1.back(1)
    }
}

class player {
    constructor() {
        this.position = createVector(0, 0, 0)
    }

    getPosition(array) {
        if (array) {
            this.positionArr = this.position.array()
            return (this.positionArr)
            //index 0 = x, index 1 = y, index 2 = z
        } else {
            return (this.position)
        }
    }

    set(X, Y, Z) {
        let outOfBounds = false
        if ((X > 45) | (X < -45)) {
            outOfBounds = true
        }
        if ((Y > 45) | (Y < -45)) {
            outOfBounds = true
        }
        if ((Z > 45) | (Z < -45)) {
            outOfBounds = true
        }
        if (!(outOfBounds)) {
            this.position.set(X, Y, Z)
        }
    }

    left(value) {
        let vectorArr = this.getPosition(true)
        if (!(vectorArr[0] <= -45)) {
            this.position.sub(value, 0, 0)
        }
    }

    right(value) {
        let vectorArr = this.getPosition(true)
        if (!(vectorArr[0] >= 45)) {
            this.position.add(value, 0, 0)
        }
    }

    forward(value) {
        let vectorArr = this.getPosition(true)
        if (!(vectorArr[2] <= -45)) {
            this.position.sub(0, 0, value)
        }
    }

    back(value) {
        let vectorArr = this.getPosition(true)
        if (!(vectorArr[2] >= 45)) {
            this.position.add(0, 0, value)
        }
    }

}

function collisionDetection() {

}

function gravity() {

}