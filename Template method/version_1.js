class CaffeineBeverage {
    prepareRecipe() {
        this.boilWater();
        this.brew();
        this.pourInCup();
        this.addCondiments();
    };
    
    boilWater() {
        console.log("Boiling water");
    };
    pourInCup() {
        console.log("Pouring into cup");
    };
};

/* ConcreteClass - Tea */
class Tea extends CaffeineBeverage {
    brew() {
        console.log("Steeping the tee");
    };
    addCondiments() {
        console.log("Adding Lemon");
    };
};

/* ConcreteClass - Coffee */
class Coffee extends CaffeineBeverage {
    brew() {
        console.log("Dripping Coffee through filter");
    };
    addCondiments() {
        console.log("Adding Sugar and Milk");
    };
};

/* test application */
class Application {
   
    static run() {
       
        const tea = new Tea();
        tea.prepareRecipe();

        console.log(`\n`);

        const coffee = new Coffee();
        coffee.prepareRecipe();
       
    };
   
};

Application.run();