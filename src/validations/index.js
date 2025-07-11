export const validation = (obj) => {
  if (obj.email === "" || obj.email.length === 0) {
    return {
      target: "email",
      message: "Email is required",
    };
  }
  if (obj.password === "" || obj.password.length === 0) {
    return {
      target: "password",
      message: "Password is required",
    };
  }
  return false;
};
