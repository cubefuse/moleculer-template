"use strict";

module.exports = function(values) {
	return {
		questions: [
			{
				type: "input",
        name: "displayName",
        message: "Display name:",
        default() {
          return values.projectName
        }
			},
      {
        type: "input",
        name: "description",
        message: "Description:",
        default() {
          return values.displayName
        }
      }
		],

		completeMessage: `
Awesome! The {{displayName}} has been created!

To get started:

	cd {{projectName}}
	npm install
	npm run dev

Don't forget to add an introduction of this microservice to the Readme file.

Let's code away🚀!
		`
	};
};
