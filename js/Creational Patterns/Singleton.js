"use strict";
class Singleton {
    constructor() {
        this.said = "WOW говорит:";
    }
    static getInstance() {
        if (Singleton.instance === undefined) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }
    wow(arg) {
        console.log(this.said, arg);
    }
}
function clientSingleton() {
    const s1 = Singleton.getInstance();
    const s2 = Singleton.getInstance();
    s1.wow("NOT WOW");
    if (s1 === s2) {
        console.log("Singleton works");
    }
    else {
        console.log("Singleton filed");
    }
}
clientSingleton();
