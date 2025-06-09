class Subscriber {
  constructor(name) {
    this.name = name;
  }

  update(article) {
    console.log(`${article} was received to ${this.name}`);
  }
}

class Publisher {
  constructor() {
    this.subscribers = [];
  }

  subscribe(subscriber) {
    this.subscribers.push(subscriber);
  }

  unsubscribe(subscriber) {
    this.subscribers = this.subscribers.filter((sub) => sub !== subscriber);
  }

  publish(article) {
    console.log(`📰 Publishing article: ${article}`);
    this.notify(article);
  }

  notify(article) {
    for (const subscriber of this.subscribers) {
      subscriber.update(article);
    }
  }
}

const agency = new Publisher();
const subscriberAnand = new Subscriber("Anand");
const subscriberPreeti = new Subscriber("Preeti");
agency.subscribe(subscriberAnand);
agency.subscribe(subscriberPreeti);
agency.publish("JavaScript Observer Pattern Explained");
