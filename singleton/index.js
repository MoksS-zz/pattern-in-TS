
class Singleton {
    static counter = 0;

    static increment () {
        this.counter++;
    };

    static get_counter() {
        return this.counter;
    };
}

Singleton.increment();
Singleton.increment();

console.log(Singleton.get_counter());