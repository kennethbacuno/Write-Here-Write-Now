export const FormatDate = (
  dateInput,
  locale = "en-US",
  options = { dateStyle: "medium", timeStyle: "short" }
) => {
  const date = new Date(dateInput);
  if (isNaN(date.getTime())) {
    return "Invalid Date";
  }

  try {
    const formatter = new Intl.DateTimeFormat(locale, options);
    return formatter.format(date);
  } catch (error) {
    console.error("Date formatting failed:", error);
    return date.toLocaleString(locale); // Fallback
  }
};
