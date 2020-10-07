const categoryKeyMap = {
  '월급': 1,
  '용돈': 2,
  '기타 수입': 3,
  '식비': 4,
  '생활': 5,
  '쇼핑/뷰티': 6,
  '교통': 7,
  '의료/건강': 8,
  '문화/여가': 9,
  '미분류': 10,
};

export const getCurrentDate = () => {
  const today = new Date();

  const year = today.getFullYear();
  const month = (today.getMonth() + 1).toString().padStart(2, 0);
  const date = today.getDate().toString().padStart(2, 0);

  return `${year}-${month}-${date}`;
};

export const getCurrentMonth = () => {
  const today = new Date();

  const month = (today.getMonth() + 1).toString().padStart(2, 0);

  return Number(month);
};

export const checkIsObjectFull = (object) => {
  return Object.keys(object).every(key => !!object[key]);
};

export const convertCategoryToKey = (categoryName) => {
  return categoryKeyMap[categoryName];
};

export const convertKeyToCategory = (categoryKey) => {
  for (const name in categoryKeyMap) {
    if (categoryKeyMap[name] === categoryKey) {
      return name;
    }
  }
};

export const splitByThousand = (amount) => {
  return amount.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
