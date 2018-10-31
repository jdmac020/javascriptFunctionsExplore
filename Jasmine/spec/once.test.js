describe("once", () => {
	beforeEach(() => {
		window.myFn = () => {};
		spyOn(window, "myFn");
	});


	it("without 'once', a function always runs", () => {
		myFn();
		myFn();
		myFn();
		expect(myFn).toHaveBeenCalledTimes(3);
	});
	
	it("with 'once', a function runs one time", () => {
		window.onceFn = once(window.myFn);
		spyOn(window, "onceFn").and.callThrough();
		onceFn();
		onceFn();
		onceFn();
		expect(onceFn).toHaveBeenCalledTimes(3);
		expect(myFn).toHaveBeenCalledTimes(1);
	});
	
});

describe("onceAndAfter", () => {
	
	beforeEach(() => {
		// define empty function for argument
		func1 = () => {};
		
		// associate func1 with the placeholder "window" object
		spyOn(window, "func1");
		
		func2 = () => {};
		spyOn(window, "func2");
		
		// store the test function in a variable--test function is a constant, no need to associate(right?)
		onceFn = onceAndAfter(func1, func2);
	});
	
	
	it("should call the first function once, then the other afterwards", () => {
		
		onceFn();
		expect(func1).toHaveBeenCalledTimes(1);
		expect(func2).toHaveBeenCalledTimes(0);
		
		onceFn();
		expect(func1).toHaveBeenCalledTimes(1);
		expect(func2).toHaveBeenCalledTimes(1);
		
		onceFn();
		expect(func1).toHaveBeenCalledTimes(1);
		expect(func2).toHaveBeenCalledTimes(2);
		
		onceFn();
		expect(func1).toHaveBeenCalledTimes(1);
		expect(func2).toHaveBeenCalledTimes(3);
		
	});
	
});

describe("onceAndAfterDefault", () => {
	
	beforeEach(() => {
		// define empty function for argument
		func1 = () => {};
		
		// associate func1 with the placeholder "window" object
		spyOn(window, "func1");
		
		func2 = () => {};
		spyOn(window, "func2");
		
		// store the test function in a variable--test function is a constant, no need to associate(right?)
		onceFn = onceAndAfterDefault(func1, func2);
	});
	
	
	it("should call the first function once, then the other afterwards", () => {
		
		onceFn();
		expect(func1).toHaveBeenCalledTimes(1);
		expect(func2).toHaveBeenCalledTimes(0);
		
		onceFn();
		expect(func1).toHaveBeenCalledTimes(1);
		expect(func2).toHaveBeenCalledTimes(1);
		
		onceFn();
		expect(func1).toHaveBeenCalledTimes(1);
		expect(func2).toHaveBeenCalledTimes(2);
		
		onceFn();
		expect(func1).toHaveBeenCalledTimes(1);
		expect(func2).toHaveBeenCalledTimes(3);
		
	});
	
});