/**
 * Extracts error message from a string or object containing a specific format.
 * @param {string} errorMessageString - eg:{"status": "error", "message": "This is an error message"}';
 * @return {string}
 */
export const extractErrorMessage = (errorMessageString?: string): string => {
  if (!errorMessageString) {
    return "Something went wrong!";
  }
  const matchResult = errorMessageString.match(/"message":"([^"]*)"/);
  return matchResult && matchResult.length > 1
    ? matchResult[1]
    : errorMessageString;
};
