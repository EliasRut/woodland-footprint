export const getBasePath = () => {
  if (process.env.NODE_ENV === "development") {
    return "http://localhost:3000";
  } else {
    return "https://website-presentation.web.app";
  }
};

export const getCookieDomain = () => {
  if (process.env.NODE_ENV === "development") {
    return "localhost";
  } else {
    return ".website-presentation.at";
  }
};
