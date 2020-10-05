const getRandomString = () => {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const STRING_LENGTH = 8;

  let randomString = '';
  for (let i = 0; i < STRING_LENGTH; i += 1) {
    const randomNumber = Math.floor(Math.random() * 1000) % characters.length;
    randomString += characters[randomNumber];
  }

  return randomString;
};

const getCurrentDate = () => {
  const today = new Date();

  const year = today.getFullYear();
  const month = (today.getMonth() + 1).toString().padStart(2, 0);
  const date = today.getDate().toString().padStart(2, 0);

  return `${year}-${month}-${date}`;
};

module.exports = { getRandomString, getCurrentDate };
