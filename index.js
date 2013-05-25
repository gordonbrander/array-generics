function lambda(method) {
  // Convert a method that uses a `this` context into a function that takes
  // the context object as the first argument.
  return function lambdaWrappedMethod(context) {
    var args = Array.prototype.slice.call(arguments, 1);
    return method.apply(context, args);
  };
}

// Keep a list of all generic Array methods.
// See https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Array#Array_generic_methods
var generics = [
  'join', 'reverse', 'sort', 'push', 'pop', 'shift', 'unshift',
  'splice', 'concat', 'slice', 'indexOf', 'lastIndexOf',
  'forEach', 'map', 'reduce', 'reduceRight', 'filter',
  'some', 'every', 'isArray'
];

// Loop over the list of generics, creating a generic for any that are missing.
generics.reduce(function reduceArrayGenerics(Array, methodname) {
  Array[methodname] = Array[methodname] || lambda(Array.prototype[methodname]);
  // Return array for next iteration.
  return Array;
}, Array);