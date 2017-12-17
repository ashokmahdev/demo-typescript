var car = (function () {
    function car(engineNamefromOutside) {
        this.engineName = engineNamefromOutside;
    }
    car.prototype.GetEngineName = function () {
        return this.engineName;
    };
    car.prototype.start = function () {
        alert(this.engineName + "Engine started");
    };
    car.prototype.stop = function () {
        alert(this.engineName + "Engine stopped");
    };
    return car;
}());
window.onload = function () {
    var car1 = new car("Audi");
    car1.start();
    car1.stop();
};
