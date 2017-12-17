class car {
    engineName: string

    constructor(engineNamefromOutside: string) {
        this.engineName = engineNamefromOutside;
    }

    GetEngineName() {
        return this.engineName;
    }

    start() {
        alert(this.engineName + "Engine started");
    }

    stop() {
        alert(this.engineName + "Engine stopped");
    }

}

window.onload = function () {

    var car1 = new car("Audi");

    car1.start();
    car1.stop();
}