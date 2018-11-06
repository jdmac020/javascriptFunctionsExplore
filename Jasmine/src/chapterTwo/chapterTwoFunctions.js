// single parameter function
const once = fn => {
  let done = false;
  return (...args) => {
    if (!done) {
      done = true;
      fn(...args);
    }
  };
};

// two parameter function
const onceAndAfter = (f,g) => {
  let done = false;
  return (...args) => {
    if (!done) {
      done = true;
      f(...args);
    } else {
		g(...args);
	}
  };
};

// two parameter function, 2nd param has default empty function
const onceAndAfterDefault = (f,g = ()=> {}) => {
  let done = false;
  return (...args) => {
    if (!done) {
      done = true;
      f(...args);
    } else {
		g(...args);
	}
  };
};