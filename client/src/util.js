import { store } from './store.js';

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

export const splitByThousand = (amount) => {
  return amount.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export const convertFormData = (formData) => {
  const categoryKeyMap = {
    '월급': 1, '용돈': 2, '기타 수입': 3, '식비': 4,
    '생활': 5, '쇼핑/뷰티': 6, '교통': 7, '의료/건강': 8,
    '문화/여가': 9, '미분류': 10,
  };

  const { type, date, category, payment, amount, content } = formData;
  const categoryId = categoryKeyMap[category];
  const method = payment;
  const come = type;

  return { amount, content, method, come, categoryId, date };
};

export const splitByDate = (breakdowns) => {
  const dates = new Set(breakdowns.map(breakdown => breakdown.date));

  return [...dates].map(date => {
    const matchedBreakdowns = breakdowns.filter((breakdown) => breakdown.date === date);
    return { date, items: matchedBreakdowns };
  }).sort((a, b) => b.date.localeCompare(a.date));
};

export const filterByCome = (breakdowns) => {
  return breakdowns.filter(({ come }) => {
    const { incomeFilter, outcomeFilter } = store.breakdown;

    return come === '수입' && incomeFilter || come === '지출' && outcomeFilter;
  });
};

export const getTotalCome = (come, breakdowns) => {
  const targets = breakdowns
    .filter(breakdown => breakdown.come === come)
    .map(({ amount }) => Number(amount.replace(/,|원/g, '')));

  const totalCome = targets.reduce((acc, cur) => acc + cur, 0);

  return splitByThousand(totalCome.toString());
};

export const scrollToTop = () => {
  window.scrollTo(0, 0);
};

export const getTabURL = (tabName) => {
  const tabURLMap = {
    '내역': '/breakdown',
    // TODO: 캘린더 페이지 구현시 '/calendar'로 변경
    '달력': '/breakdown',
    '통계': '/statistic',
  };

  return tabURLMap[tabName];
};

export const getRadianByDegree = (degree) => (Math.PI / 180) * degree;

export const splitByCategory = (breakdowns) => {
  const categories = new Set(breakdowns.map(breakdown => breakdown.category));

  const wholeCost = breakdowns
    .map(({ amount }) => Number(amount.replace(/,|원/g, '')))
    .reduce((acc, cur) => acc + cur, 0);

  return [...categories].map(category => {
    const matchedBreakdowns = breakdowns.filter(breakdown => breakdown.category === category);
    const totalCost = matchedBreakdowns
      .map(({ amount }) => Number(amount.replace(/,|원/g, '')))
      .reduce((acc, cur) => acc + cur, 0);
    const percentage = Number(((totalCost / wholeCost)).toFixed(4));

    return { category, totalCost, percentage };
  }).sort((a, b) => b.totalCost - a.totalCost);
};

export const getNextRGB = (index) => {
  const rgbs = [
    `rgb(30, 225, 225)`,
    `rgb(30, 200, 200)`,
    `rgb(30, 175, 175)`,
    `rgb(30, 150, 150)`,
    `rgb(30, 125, 150)`,
    `rgb(30, 100, 150)`,
    `rgb(30, 100, 175)`,
  ];

  return rgbs[index];
};

export const sleep = (ms) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(true);
    }, ms);
  });
};
