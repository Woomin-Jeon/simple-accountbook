const checkError = (error, reject) => {
  if (error) {
    reject(error);
  }
};

module.exports = { checkError };
