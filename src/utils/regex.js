const checkRegex = ({ title, error, str, pattern }) => {
  if (!str) return `${title} is required`
  return str.match(pattern) ? null : error
}
export const checkEmail = (str) =>
  checkRegex({
    title: "Email",
    error: "Please provide a valid email address",
    str,
    pattern: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g,
  })
export const checkPassword = (str) =>
  checkRegex({
    title: "Password",
    error: "Password needs to be at least 6 characters long",
    str,
    pattern: /^.{6,}$/g,
  })
