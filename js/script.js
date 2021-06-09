// task-2
// function Human(name, age, job) {
//     this.name=name;
//     this.age=age;
//     this.job=job;
//     this.who=function who() {
//        document.write('Я<b> ' + this.name + '</b> мне <b>'+ this.age + ' </b>лет.');
//        document.write(' Я работаю <b>' + this.job + 'ом</b>.<br />' );
//     }
//  }
//  human1=new Human('Дмитрий', 26, 'Дизайнер'); 
//  human1.who();
//  human2=new Human('Станислав', 29, 'Программист');
//  human2.who();
//  human3=new Human('Сергей', 35, 'Менеджер');
//  human3.who();

// task-1
// function Automobile(manufact, model, year, color){
//     this.manufact = manufact;
//     this.model = model;
//     this.year = year;
//     this.color = color;
    
//     this.whatColor = function whatColor() {
//     document.write('Цвет машины: ' + color + '<br/>');
//     }
//     this.autoInfo = function autoInfo() {
//     document.write('Модель машины: ' + model + '<br/>' + 'Год выпуска: ' + year + '<br/>' + 'Производитель автомобиля: ' + manufact + '<br/>');
//     }
//     }
    
//     car1 = new Automobile('Nissan', 'Skyline', 2007, 'Красный');
//     car2 = new Automobile('Toyota', 'Corolla', 2009, 'Черный');
//     car3 = new Automobile('Volkswagen', 'Golf', 2009, 'Синий');
    
//     car1.whatColor();
//     car1.autoInfo();
//     car2.whatColor();
//     car2.autoInfo();
//     car3.whatColor();
//     car3.autoInfo();