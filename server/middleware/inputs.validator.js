export const ValidateInput = (schema) => (req, res, next) => {
  const toValidate = {
    body: req.body ?? {},
    query: req.query ?? {},
    params: req.params ?? {},
  };
  const result = schema.safeParse(toValidate);

  if (!result.success) {
    const validationErrors = result.error.flatten();
    console.error("Validation Failed. Errors:", validationErrors.fieldErrors);

    return res.status(400).json({
      success: false,
      message: "Bad request.",
      errors: validationErrors.fieldErrors,
    });
  }

  req.validated = {
    body: result.data.body ?? {},
    query: result.data.query ?? {},
    params: result.data.params ?? {},
  };

  next();
};
