import * as Joi from "joi";

export const carValidator = Joi.object({
    brand: Joi.string().pattern(new RegExp('^[a-zA-Zа-яА-яёЁіІїЇєЄҐґ]{1,20}$'))
        .messages({'string.pattern.base': 'Не відповідність данних'}),
    price: Joi.number().min(0).max(1000000).messages({
        "number.min":"Мінімальна ціна має бути 0",
        "number.max":"Максимальна ціна має бути 1 000 000",
    }),
    year: Joi.number().min(1990).max(2024).messages({
        "number.min":"Мінімальний рік має бути 1990",
        "number.max":"Максимальний рік має бути 2024",
    }),


});