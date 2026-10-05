//
// Правила іменування змінних, функцій та класів
//

// Неправильно: незрозумілі назви та числа
function calc(x) {
    const y = 2026;
    return y - x;
}
const z = calc(1998);

// Правильно: використання camelCase, змістовні назви та константи
function calculateAge(birthYear) {
    const currentYear = 2026;
    return currentYear - birthYear;
}

const myAge = calculateAge(1998);

//
// Форматування коду (Стильові рекомендації)
//

// Неправильно: відсутність відступів, пробілів та змішаний стиль дужок
if(isValid){
console.log("OK");}else{
console.log("Error");}

// Правильно: правильні відступи (4 пробіли) та K&R стиль дужок
if (isValid) {
  console.log("OK");
} else {
  console.log("Error");
}

//
// Документування коду (та коментарі)
//

// Неправильно: надлишковий коментар, який лише дублює код
// Функція додає два числа
function add(x, y) {
  return x + y;
}

// Правильно: використання JSDoc для опису параметрів, логіки та значення повернення
/**
* Обчислює загальну суму кошика з урахуванням податку.
* @param {number} subtotal - Сума товарів без податку.
* @param {number} taxRate - Ставка податку у відсотках.
* @returns {number} Загальна сума до сплати.
*/
function calculateTotalWithTax(subtotal, taxRate) {
  return subtotal + (subtotal * taxRate / 100);
}

//
// Структура коду (Принципи рефакторингу)
//

// До рефакторингу: "Монолітна" функція, що робить забагато речей одночасно
function processUserOrder(order) {
  if (!order.id || !order.amount) throw new Error("Invalid");
  let total = order.amount - (order.amount * 0.1);
  console.log("Order saved to DB:", order.id, "Total:", total);
  return total;
}

// Після рефакторингу: Логічний поділ логіки на окремі функції

function validateOrder(order) {
  if (!order.id || !order.amount) {
    throw new Error("Invalid order data");
  }
}

function applyStandardDiscount(amount) {
  const DISCOUNT_RATE = 0.1;
  return amount - (amount * DISCOUNT_RATE);
}

function processUserOrderRefactored(order) {
  validateOrder(order);
  const total = applyStandardDiscount(order.amount);
  saveOrderToDatabase(order.id, total);
  return total;
}
