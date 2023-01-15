// Class A
class A {
  meth() {
    return "Invoking method from class A";
  }
}

// Class B which extends class A
class B extends A {
  meth() {
    return "Method is overridden in Extended class B";
  }
}

// Create object of class B
const obj = new B();

// Call method meth from class A using obj
console.log(obj.meth()); // Output: "Method is overridden in Extended class B"
