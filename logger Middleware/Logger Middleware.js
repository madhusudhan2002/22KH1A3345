
const loggerMiddleware = (message, data) => {
  const time = new Date().toISOString();
  console.log(`[${time}] ${message}`, data || '');
};

export default loggerMiddleware;
