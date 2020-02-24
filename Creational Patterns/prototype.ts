class ComponentWithBackReference {
  public prototype: Prototype;

  constructor(prototype: Prototype) {
    this.prototype = prototype;
  }
}

class Prototype {
  public primitive?: number;

  public component?: Date;

  public circularReference?: ComponentWithBackReference;

  public clone(): this {
    const clone = Object.create(this);

    clone.component = Object.create(this.component!);

    clone.circularReference = {
      ...this.circularReference,
      prototype: { ...this }
    };

    return clone;
  }
}

function clientPrototype(): void {
  const p1 = new Prototype();
  p1.primitive = 228;
  p1.component = new Date();
  p1.circularReference = new ComponentWithBackReference(p1);

  const p2 = p1.clone();

  if (p1.primitive === p2.primitive) {
    console.log(
      "Primitive field values have been carried over to a clone. Yay!"
    );
  } else {
    console.log("Primitive field values have not been copied. Booo!");
  }

  if (p1.component === p2.component) {
    console.log("Simple component has not been cloned");
  } else {
    console.log("Simple component has been cloned.");
  }

  if (p1.circularReference === p2.circularReference) {
    console.log("Component with back reference has not been cloned. Booo!");
  } else {
    console.log("Component with back reference has been cloned. Yay!");
  }

  if (p1.circularReference.prototype === p2.circularReference!.prototype) {
    console.log(
      "Component with back reference is linked to original object. Booo!"
    );
  } else {
    console.log("Component with back reference is linked to the clone. Yay!");
  }
}

clientPrototype();
