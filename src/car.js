export class Car {
    constructor() {
        this.wheels = 4;
    }

    drive() {
        console.log('Vroom!');
        return 'Vroom!';
    }

    stop() {
        console.log('Screech!');
    }

    currentSpeed() {
        return 70;
    }
}
