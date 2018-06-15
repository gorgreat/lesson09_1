let age = document.getElementById('age'),
    surname = 'Петров',
    name = 'Иван';

function showUser(surname, name) {
  alert("Пользователь " + surname + " " + name + ", его возраст " + this.value);
}
     
  showUser.call(age, surname, name);


