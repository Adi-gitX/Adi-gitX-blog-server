const logger = (req, res, next) => {
    const currentDate = new Date();
    console.log(`[${currentDate.toISOString()}] ${req.method} ${req.url}`);
    next(); // Pass control to the next middleware
  };
  
  module.exports = logger;
  