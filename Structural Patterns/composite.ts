type setComp = Component | null;

abstract class Component {
  protected parent!: setComp;

  public setParent (parent: setComp): void {
    this.parent = parent;
  }

  public getParent(): setComp {
    return this.parent;
  }

  public add(component: Component): void {}

  public remove(component: Component): void {}

  public isComposite(): boolean {
    return false;
  }

  public abstract operation(): string;
}

class Leaf extends Component {
  public operation(): string {
      return 'Leaf';
  }
}

class Composite extends Component {
  protected children: Component[] = [];

  public add(component: Component): void {
      this.children.push(component);
      component.setParent(this);
  }

  public remove(component: Component): void {
      const componentIndex = this.children.indexOf(component);
      this.children.splice(componentIndex, 1);

      component.setParent(null);
  }

  public isComposite(): boolean {
      return true;
  }

  public operation(): string {
      const results = [];
      for (const child of this.children) {
          results.push(child.operation());
      }

      return `Branch(${results.join('+')})`;
  }
}

function clientComposite(component: Component): void {
  console.log(`Result: ${component.operation()}`)
}

const simple = new Leaf();

console.log(`Simple Component`);
clientComposite(simple);
console.log("\n");

const tree = new Composite();
const branch1 = new Composite();
branch1.add(new Leaf());
branch1.add(new Leaf());

const branch2 = new Composite();
branch2.add(new Leaf());
tree.add(branch1);
tree.add(branch2);

console.log(`Composite tree`);
clientComposite(tree);
console.log("\n");

function clientComposite2(component1: Component, component2: Component) {
  if (component1.isComposite()) {
      component1.add(component2);
  }
  console.log(`RESULT: ${component1.operation()}`);
}

console.log('Client: I don\'t need to check the components classes even when managing the tree:');
clientComposite2(tree, simple);