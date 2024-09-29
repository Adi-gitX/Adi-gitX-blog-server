const errorMiddleware = (err, req, res, next) => {
    console.error(err.stack); // Log the error stack
    res.status(500).json({ error: 'Something went wrong!' });
  };
  
  module.exports = errorMiddleware;
  