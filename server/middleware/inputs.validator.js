import { ZodError } from "zod";

export const ValidateInput = (schema) => (req, res, next) => {
  const toValidate = {
    body: req.body ?? {},
    query: req.query ?? {},
    params: req.params ?? {},
  };

  const result = schema.safeParse(toValidate);

  if (!result.success) {
    console.error(
      "Validation Failed:",
      JSON.stringify(result.error.format(), null, 2)
    );

    return res.status(400).json({
      success: false,
      message: "Bad request.",
    });
  }

  req.validated = {
    body: result.data.body ?? {},
    query: result.data.query ?? {},
    params: result.data.params ?? {},
  };

  next();
};
