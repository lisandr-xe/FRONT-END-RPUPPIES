export const usePageTitle = (route) => {
  switch (route) {
    case "/":
      document.title = "RollingPuppies";
      break;
    default:
      document.title = "Error";
  }
};
