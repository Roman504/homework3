const student = "Воронов Роман Олегович";

document.getElementById("student").innerHTML = student;

const users = [
    {fName: 'Пономарев', lName: 'Андрей', oName: 'Алексеевич', gender: 'М',  day: 11, month: 12, year: 1980},
    {fName: 'Рыбакова', lName: 'Алина', oName: 'Семёновна', gender: 'Ж',  day: 16, month: 04, year: 1974},
    {fName: 'Молчанов', lName: 'Даниил', oName: 'Ильич', gender: 'М',  day: 21, month: 03, year: 1984},
    {fName: 'Смирнова', lName: 'София', oName: 'Львовна', gender: 'Ж',  day: 02, month: 01, year: 1987},
    {fName: 'Владимиров', lName: 'Артём', oName: 'Григорьевич', gender: 'М',  day: 07, month: 12, year: 1990},
    {fName: 'Маслова', lName: 'Елизавета', oName: 'Егоровна', gender: 'Ж',  day: 10, month: 10, year: 1997},
    {fName: 'Назарова', lName: 'Вера', oName: 'Романовна', gender: 'Ж',  day: 01, month: 05, year: 1983},
    {fName: 'Иванов', lName: 'Иван', oName: 'Фёдорович', gender: 'М',  day: 05, month: 05, year: 1999},
    {fName: 'Дмитриев', lName: 'Алексей', oName: 'Григорьевич', gender: 'М',  day: 12, month: 11, year: 1998},
    {fName: 'Овчинников', lName: 'Платон', oName: 'Александрович', gender: 'М',  day: 26, month: 05, year: 1999},
    {fName: 'Мартынова', lName: 'Софья', oName: 'Тимуровна', gender: 'Ж',  day: 07, month: 06, year: 1995},
    {fName: 'Соколов', lName: 'Михаил', oName: 'Адамович', gender: 'М',  day: 11, month: 03, year: 1979}
]

let allGuests = 0;
let man = 0;
let woman = 0;
let string = "";

for (let i=0; i < users.length; i++) {
   allGuests++;
   if (i == users.length) {
    break;
   }
  if(users[i].gender === "М") {
    man++;
  } else if(users[i].gender === "Ж") {
    woman++;
  }
  
  string += users[i].fName;
  string += " ";
  string += users[i].lName[0];
  string += ".";
  string += users[i].oName[0];
  string += ".";
  string += ", ";
  string += users[i].gender[0];
  string += ", ";
  string += "Возраст: ";
  string +=  (2023-users[i].year);
  
  string+="\n";
}

alert(
    "Всего гостей: " + Number(allGuests) + "\n" +
    "Мужчин: " + Number(man) + "\n" +
    "Женщин: " + Number(woman) + "\n" +
    "Список гостей: \n" + string);