import Joi from "joi";

export const serviceSchema = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().required(),
  icon: Joi.string().optional(),
  image: Joi.string().uri().required()
});
