interface VisitorComponent {
  accept(visitor: Visitor): void;
}

class VisitorComponentA implements VisitorComponent {
  public accept(visitor: Visitor): void {
    visitor.visitConcreteComponentA(this);
  }

  public exclusiveMethodOfConcreteComponentA(): string {
    return "A";
  }
}

class VisitorComponentB implements VisitorComponent {
  public accept(visitor: Visitor): void {
    visitor.visitConcreteComponentB(this);
  }

  public specialMethodOfConcreteComponentB(): string {
    return "B";
  }
}

interface Visitor {
  visitConcreteComponentA(element: VisitorComponentA): void;

  visitConcreteComponentB(element: VisitorComponentB): void;
}

class ConcreteVisitor1 implements Visitor {
  public visitConcreteComponentA(element: VisitorComponentA): void {
    console.log(
      `${element.exclusiveMethodOfConcreteComponentA()} + ConcreteVisitor1`
    );
  }

  public visitConcreteComponentB(element: VisitorComponentB): void {
    console.log(
      `${element.specialMethodOfConcreteComponentB()} + ConcreteVisitor1`
    );
  }
}

class ConcreteVisitor2 implements Visitor {
  public visitConcreteComponentA(element: VisitorComponentA): void {
    console.log(
      `${element.exclusiveMethodOfConcreteComponentA()} + ConcreteVisitor2`
    );
  }

  public visitConcreteComponentB(element: VisitorComponentB): void {
    console.log(
      `${element.specialMethodOfConcreteComponentB()} + ConcreteVisitor2`
    );
  }
}

function clientVisitorCode(
  components: VisitorComponent[],
  visitor: Visitor
): void {
  // ...
  for (const component of components) {
    component.accept(visitor);
  }
  // ...
}

const components = [new VisitorComponentA(), new VisitorComponentB()];

console.log(
  "The client code works with all visitors via the base Visitor interface:"
);
const visitor1 = new ConcreteVisitor1();
clientVisitorCode(components, visitor1);
console.log("");

console.log(
  "It allows the same client code to work with different types of visitors:"
);
const visitor2 = new ConcreteVisitor2();
clientVisitorCode(components, visitor2);
