// Add your Circle class here
class Circle {
    constructor(radius) {
      this.radius = radius;
    }
  
    // Getter for diameter
    get diameter() {
      return this.radius * 2;
    }
  
    // Setter for diameter
    set diameter(diameter) {
      this.radius = diameter / 2;
    }
  
    // Getter for circumference
    get circumference() {
      return Math.PI * this.diameter;
    }
  
    // Setter for circumference
    set circumference(circumference) {
      this.radius = circumference / (Math.PI * 2);
    }
  
    // Getter for area
    get area() {
      return Math.PI * this.radius ** 2;
    }
  
    // Setter for area
    set area(area) {
      this.radius = Math.sqrt(area / Math.PI);
    }
  }
  
  // Example Usage:
  const myCircle = new Circle(10);
  
  console.log(myCircle.diameter); // 20
  console.log(myCircle.circumference); // 62.83185307179586
  console.log(myCircle.area); // 314.1592653589793
  
  myCircle.diameter = 30; 
  console.log(myCircle.radius); // 15
  
  myCircle.circumference = 94.2478;
  console.log(myCircle.radius); // 15 (approximately)
  
  myCircle.area = 706.857;
  console.log(myCircle.radius); // 15 (approximately)
  