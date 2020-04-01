interface Subject {
  request(): void;
}

class RealSubject implements Subject {
  public request(): void {
    console.log("RealSubject: Handling request");
  }
}

class ProxyObj implements Subject {
  private realSubject: RealSubject;

  constructor(realSubject: RealSubject) {
    this.realSubject = realSubject;
  }

  public request(): void {
    if (this.checkAccess()) {
      this.realSubject.request();
      this.logAccess();
    }
  }

  private checkAccess(): boolean {
    console.log("Proxy: Checking access pior to firing a real reques");
    return true;
  }

  private logAccess(): void {
    console.log("Proxy: Logging the time of request");
  }
}

function proxyCodeTest(subject: Subject): void {
  subject.request();
}

console.log("Client: Executing the client code with a real subject:");
const realSubject = new RealSubject();
proxyCodeTest(realSubject);

console.log("\n");

console.log("Client: Executing the same client code with a proxy:");
const proxy = new ProxyObj(realSubject);
proxyCodeTest(proxy);
