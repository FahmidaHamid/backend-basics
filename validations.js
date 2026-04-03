const Joi = require("joi"); // joi returns a class, and we use pascal naming conventions for a class

//joi schema
const courseSchema = Joi.object({
  name: Joi.string().min(3).max(15).required(),
  enrollment: Joi.number().positive().required(),
});

const validateCourse = (userInput) => {
  return courseSchema.validate(userInput);
};

module.exports = { validateCourse }; // Export as an object
