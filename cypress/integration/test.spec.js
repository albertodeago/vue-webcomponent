
describe("My First Test", function() {
	it("Does not do much!", function() {
		cy.visit("http://localhost/tests/vue-webcomponent/examples/registerComponent.html", () => {
			cy.get("input")
				.type("test")
				.type("{enter}")
				.contains("test")
		})
	});
});

// https://webtest.services.thron.com/frontend/commons/vue-components/dev/documentation/
