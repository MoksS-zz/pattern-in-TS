abstract class State {
  // eslint-disable-next-line react/static-property-placement
  protected context!: Context;

  public setContext(context: Context): void {
    this.context = context;
  }

  public abstract handle1(): void;
  public abstract handle2(): void;
}

class Context {
  private state!: State;

  constructor(state: State) {
    this.transitionTo(state);
  }

  public transitionTo(state: State): void {
    console.log(`Context: Transition to ${state.constructor.name}.`);
    this.state = state;
    this.state.setContext(this);
  }

  public request1(): void {
    this.state.handle1();
  }

  public request2(): void {
    this.state.handle2();
  }
}

class ImplState1 extends State {
  public handle1(): void {
    console.log("ImplState1 handles request1.");
    console.log("ImplState1 wants to change the state of the context.");
    this.context.transitionTo(new ImplState2());
  }

  public handle2(): void {
    console.log("ImplState1 handles request2.");
  }
}

class ImplState2 extends State {
  public handle1(): void {
    console.log("ImplState2 handles request1.");
  }

  public handle2(): void {
    console.log("ImplState2 handles request2.");
    console.log("ImplState2 wants to change the state of the context.");
    this.context.transitionTo(new ImplState1());
  }
}

const context = new Context(new ImplState1());
context.request1();
context.request2();
