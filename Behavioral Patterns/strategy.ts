interface Strategy {
  doAlgorithm(data: string[]): string[];
}

class ContextStrategy {
  private strategy: Strategy;

  constructor(strategy: Strategy) {
    this.strategy = strategy;
  }

  public setStrategy(strategy: Strategy): void {
    this.strategy = strategy;
  }

  public doSomeBusinessLogic(): void {
    console.log(
      "Context: Sorting data using the strategy (not sure how it'll do it)"
    );

    const result = this.strategy.doAlgorithm(["c", "a", "b", "d", "e"]);
    console.log(result.join(";"));
  }
}

class StrategyA implements Strategy {
  public doAlgorithm(data: string[]): string[] {
    return data.sort();
  }
}

class StrategyB implements Strategy {
  public doAlgorithm(data: string[]): string[] {
    return data.reverse();
  }
}

const contextStrategy = new ContextStrategy(new StrategyA());
console.log("Client: Strategy is set to normal sorting.");
contextStrategy.doSomeBusinessLogic();

console.log("\n");

console.log("Client: Strategy is set to reverse sorting.");
contextStrategy.setStrategy(new StrategyB());
contextStrategy.doSomeBusinessLogic();
