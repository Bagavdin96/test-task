// Список курсов
let courses = [
  { name: "Courses in England", prices: [0, 100] }, 
  { name: "Courses in Germany", prices: [500, null] }, 
  { name: "Courses in Italy", prices: [100, 200] }, 
  { name: "Courses in Russia", prices: [null, 400] },
  { name: "Courses in China", prices: [50, 250] },
  { name: "Courses in USA", prices: [200, null] },
  { name: "Courses in Kazakhstan", prices: [56, 324] },
  { name: "Courses in France", prices: [null, null] },
];
 // Варианты цен (фильтры), которые ищет пользователь
 let requiredRange1 = [null, 200];
 let requiredRange2 = [100, 350];
 let requiredRange3 = [200, null];

 function filterCourses(arrRange, courses){
  let [start, end] = arrRange;//деструктуризация для упрощения работы с данными от пользователя
  if(!start){
    start = 0 // заменяю null
  }
  if(!end){
    end = Infinity // заменяю null
  }
  return courses.filter(element => {
    let {prices} = element //деструктуризация для упрощения работы данными по ценам курсов
    let priceRangeStart = prices[0] ? prices[0] : 0 // заменяю null
    let priceRangeEnd = prices[1] ? prices[1] : Infinity // заменяю null
    if(priceRangeStart <= end && priceRangeEnd >= start){ // если фильтр от юзера входит в диапазон цен курса, добавляем этот курс в возвращаемый массив
      return element
    }
  });
 }

 console.log(filterCourses(requiredRange1, courses))
 console.log(filterCourses(requiredRange1, courses))
 console.log(filterCourses(requiredRange1, courses))
