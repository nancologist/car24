export default class {
    public id: string;
    public name: string;
    public power: number;

    constructor(name: string, power: number) {
        this.name = name;
        this.power = power;
        this.id = Math.random().toString();
    }
}
