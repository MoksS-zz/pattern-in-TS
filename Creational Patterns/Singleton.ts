// antipattern> use const and readonly);

class Singleton {
  private static instance: Singleton;

  private readonly said: string;

  private constructor() {
    this.said = "WOW говорит:";
  }

  public static getInstance(): Singleton {
    if (Singleton.instance === undefined) {
      Singleton.instance = new Singleton();
    }

    return Singleton.instance;
  }

  public wow(arg: string): void {
    console.log(this.said, arg);
  }
}

function clientSingleton(): void {
  const s1 = Singleton.getInstance();
  const s2 = Singleton.getInstance();

  s1.wow("NOT WOW");

  if (s1 === s2) {
    console.log("Singleton works");
  } else {
    console.log("Singleton filed");
  }
}

clientSingleton();
