interface ComponentA {
  operation(): string;
}

class AComponent implements ComponentA {
  a = `A-Component`;

  public operation(): string {
    return this.a;
  }
}

class Decorator implements ComponentA {
  protected component: ComponentA;

  constructor(component: ComponentA) {
    this.component = component;
  }

  public operation(): string {
    // обернули
    return this.component.operation();
  }
}

class DecoratorA extends Decorator {
  public operation(): string {
    return `DecoratorA(${super.operation()})`;
  }
}

class DecoratorB extends Decorator {
  public operation(): string {
    return `DecoratorB(${super.operation()})`;
  }
}

function decoratorTest(component: ComponentA): void {
  console.log(`RESULT: ${component.operation()}`);
}

const start = new AComponent();
decoratorTest(start);
console.log("");

const decorator1 = new DecoratorA(start);
const decorator2 = new DecoratorB(decorator1);
decoratorTest(decorator2);
