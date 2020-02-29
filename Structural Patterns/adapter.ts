class Target {
  public request(): string {
    return `Target: The default target's behavior.`;
  }
}

class Adaptee {
  public specificRequest(): string {
    return `Yeap`;
  }
}

class Adapter extends Target {
  private adaptee: Adaptee;

  constructor(adaptee: Adaptee) {
    super();
    this.adaptee= adaptee;
  }

  public request(): string {
    const result = this.adaptee.specificRequest() === "Yeap" ? "NoYeap" : "Lexa";
    return `Adapter: (hehe is not YEAP) ${result}`;
  }
}

function clientCodeAdapter(target: Target) {
  console.log(target.request());
}

console.log('standart Target');
const target = new Target();
clientCodeAdapter(target);

console.log('');

const adaptee = new Adaptee();
console.log('The Adaptee class with an incomprehensible interface');
console.log(`Adaptee: ${adaptee.specificRequest()}`);

console.log('');

console.log('Adaptee with adapter');
const adapter = new Adapter(adaptee);
clientCodeAdapter(adapter);