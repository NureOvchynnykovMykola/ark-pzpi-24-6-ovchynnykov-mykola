//
// Replace Nested Conditional with Guard Clauses (Заміна вкладених умовних операторів граничними операторами)
//

// ДО РЕФАКТОРИНГУ
/**
 * Обробляє покупку картини в галереї
 * @param {Object} user 
 * @param {Object} artwork 
 * @returns {string}
 */
function processArtworkPurchase(user, artwork) {
  let result;
  if (user.isActive) {
    if (artwork.isAvailable) {
      if (user.balance >= artwork.price) {
        result = "Покупка успішна";
      } else {
        result = "Помилка: Недостатньо коштів";
      }
    } else {
      result = "Помилка: Картина вже продана";
    }
  } else {
    result = "Помилка: Акаунт заблоковано";
  }
  return result;
}

// ПІСЛЯ РЕФАКТОРИНГУ
/**
 * Обробляє покупку картини в галереї
 * @param {Object} user 
 * @param {Object} artwork 
 * @returns {string}
 */
function processArtworkPurchase(user, artwork) {
  if (!user.isActive) {
    return "Помилка: Акаунт заблоковано";
  }
  if (!artwork.isAvailable) {
    return "Помилка: Картина вже продана";
  }
  if (user.balance < artwork.price) {
    return "Помилка: Недостатньо коштів";
  }

  return "Покупка успішна";
}

//
// Decompose Conditional (Декомпозиція умовного оператора)
//

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

//
// Split Temporary Variable (Розщеплення тимчасової змінної)
//

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
