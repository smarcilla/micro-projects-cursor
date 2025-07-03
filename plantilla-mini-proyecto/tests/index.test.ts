// Testea el ejemplo sencillo en typescript.

import { helloWorld } from "../src/index";

// Testea la función helloWorld.
describe("helloWorld", () => {
    it("should print 'Hello World' to the console", () => {
        const consoleSpy = jest.spyOn(console, "log");
        helloWorld();
        expect(consoleSpy).toHaveBeenCalledWith("Hello World");
    });
});

