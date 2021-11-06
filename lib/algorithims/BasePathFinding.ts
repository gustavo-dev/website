export class BasePathFinding {
    paused: boolean

    constructor() {
        this.paused = false
    }

    pause = () => {
        this.paused = true
    }

    resume = () => {
        this.paused = false
    }
}
