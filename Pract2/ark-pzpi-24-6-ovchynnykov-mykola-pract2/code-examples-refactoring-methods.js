// ДО РЕФАКТОРИНГУ
/**
 * Розраховує ціну квитка на виставку
 * @param {Date} date 
 * @param {number} basePrice 
 * @returns {number}
 */
function calculateTicketPrice(date, basePrice) {
  if (date.getMonth() >= 5 && date.getMonth() <= 7 && date.getDay() === 0) {
    return basePrice * 0.8; // 20% знижки
  } else {
    return basePrice;
  }
}

// ПІСЛЯ РЕФАКТОРИНГУ
/**
 * Перевіряє, чи діє недільна літня знижка
 * @param {Date} date 
 * @returns {boolean}
 */
function isSummerWeekendDiscount(date) {
  const isSummer = date.getMonth() >= 5 && date.getMonth() <= 7;
  const isSunday = date.getDay() === 0;
  return isSummer && isSunday;
}

/**
 * Розраховує ціну квитка на виставку
 * @param {Date} date 
 * @param {number} basePrice 
 * @returns {number}
 */
function calculateTicketPrice(date, basePrice) {
  if (isSummerWeekendDiscount(date)) {
    return basePrice * 0.8;
  }
  
  return basePrice;
}

// ДО РЕФАКТОРИНГУ
/**
 * Розраховує ціну квитка на виставку
 * @param {Date} date 
 * @param {number} basePrice 
 * @returns {number}
 */
function calculateTicketPrice(date, basePrice) {
  if (date.getMonth() >= 5 && date.getMonth() <= 7 && date.getDay() === 0) {
    return basePrice * 0.8; // 20% знижки
  } else {
    return basePrice;
  }
}

// ПІСЛЯ РЕФАКТОРИНГУ
/**
 * Перевіряє, чи діє недільна літня знижка
 * @param {Date} date 
 * @returns {boolean}
 */
function isSummerWeekendDiscount(date) {
  const isSummer = date.getMonth() >= 5 && date.getMonth() <= 7;
  const isSunday = date.getDay() === 0;
  return isSummer && isSunday;
}

/**
 * Розраховує ціну квитка на виставку
 * @param {Date} date 
 * @param {number} basePrice 
 * @returns {number}
 */
function calculateTicketPrice(date, basePrice) {
  if (isSummerWeekendDiscount(date)) {
    return basePrice * 0.8;
  }
  
  return basePrice;
}

// ДО РЕФАКТОРИНГУ
/**
 * Розраховує геометрію рами для картини
 * @param {number} height 
 * @param {number} width 
 */
function calculateFrameGeometry(height, width) {
  let temp = 2 * (height + width);
  console.log("Довжина багета (периметр): " + temp);
  
  temp = height * width;
  console.log("Площа полотна: " + temp);
}

// ПІСЛЯ РЕФАКТОРИНГУ
/**
 * Розраховує геометрію рами для картини
 * @param {number} height 
 * @param {number} width 
 */
function calculateFrameGeometry(height, width) {
  const framePerimeter = 2 * (height + width);
  console.log("Довжина багета (периметр): " + framePerimeter);
  
  const canvasArea = height * width;
  console.log("Площа полотна: " + canvasArea);
}
