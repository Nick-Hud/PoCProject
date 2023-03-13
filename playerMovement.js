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
        } else {
            return (this.position)
        }
    }

    set(newPos) {
        if(!(this.outOfBounds())){
            this.position.set(newPos)
        }
    }

    left(value) {
        if(!(this.outOfBounds())){
            this.position.sub(value, 0, 0)
        }
    }

    right(value) {
        if(!(this.outOfBounds())){
            this.position.add(1, 0, 0)
        }
    }

    forward(value) {
        if(!(this.outOfBounds())){
            this.position.sub(0, 0, 1)
        }
    }

    back(value) {
        if(!(this.outOfBounds())){
            this.position.add(0, 0, 1)
        }
    }

    outOfBounds() {
        let vectorArr = this.getPosition(true)
        console.log(vectorArr)
        for (let i = 0; i < 3; i++) {
            if ((vectorArr[i] > 45) | (vectorArr[i] < -45)) {
                return(true)
            }
        }
        return(false)
    }

}

function collisionDetection() {
    //index 0 = x, index 1 = y, index 2 = z

}

function gravity() {
    //player1.
}