"use strict";

const { ServiceBroker } = require("moleculer");
const { ValidationError } = require("moleculer").Errors;
const TestService = require("../../service");

describe("Test 'v1.example' service", () => {
	let broker = new ServiceBroker();
	broker.createService(TestService);

	beforeAll(() => broker.start());
	afterAll(() => broker.stop());

	describe("Test 'v1.example.hello' action", () => {

		it("should return with 'Hello Moleculer'", () => {
			expect(broker.call("v1.example.hello")).resolves.toBe("Hello Castt");
		});

	});

	describe("Test 'v1.example.welcome' action", () => {

		it("should return with 'Welcome'", () => {
			expect(broker.call("v1.example.welcome", { name: "Cubefuse" })).resolves.toBe("Welcome, Cubefuse");
		});

		it("should reject an ValidationError", () => {
			expect(broker.call("v1.example.welcome")).rejects.toBeInstanceOf(ValidationError);
		});

	});

});

