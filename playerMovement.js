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
        this.position = createVector(38, 35, 45)
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
    jump() {
        let jumpTime = 0.75
        let jumpFrames = jumpTime * 60
        jumpHoldToFrame = frameCount + jumpFrames
        jump = true
        newYVal = newYVal +  10

    }

}


let jump = false
let jumpHoldToFrame
function gravity() {
    //sketchy speed distance time falling physics stuff with whack made up numbers lol
    playerPosArr = player1.getPosition(true)
    if (frameCount <= jumpHoldToFrame) {
        jump = true
        player1.set(playerPosArr[0], playerPosArr[1] - 0.5, playerPosArr[2])
    }
    if (frameCount >= jumpHoldToFrame) {
        jump = false
    }
    if (!(jump)) {
        playerPosArr = player1.getPosition(true)
        let fallDistance = floorHeight - playerPosArr[1] - 15
        let fallTime = 2
        let fallFrames = fallTime * 60
        let speed = (fallDistance / fallFrames) * 7
        let holdToFrame = fallFrames + frameCount
        if (frameCount <= holdToFrame) {
            player1.set(playerPosArr[0], playerPosArr[1] + speed, (playerPosArr[2]))
        }

    }
}