

// A) Las pizzas que tengan un id impar.

const pizzaNapolitana ={
    nombre: "Pizza Napolitana",
    id: 1,
    precioEnPesos: 500,
    ingredientes: "1 masa para pizza, 125ml salsa de tomate, 250g Mozzarella, 2 tomates, 1 pizca de sal, 1 diente de ajo, 2 cucharadas de postre de perejil, 10 aceitunas verdes, 20ml aceite de oliva "
};

const pizzaFugazzeta ={
    nombre: "Pizza Fugazzeta",
    id: 2,
    precioEnPesos: 300,
    ingredientes: "1 masa para pizza, 2 cebollas, 1 cucharada sopera de orégano seco, 1 pizca de sal, 1 pizca de pimienta, 1 puñado de aceitunas negras, 50cm cúbicos de aceite de oliva, 1 pieza de Mozarella fresca "
};

const pizzaCuatroQuesos ={
    nombre: "Pizza Cuatro Quesos",
    id: 3,
    precioEnPesos: 650,
    ingredientes: "1 masa para pizza, 150g de salsa napolitana, 30g de queso gruyere, 30g de queso cheddar, 30g de queso mozzarella, 30g de queso parmesano"
};

const pizzaCalabresa ={
    nombre: "Pizza Calabresa",
    id: 4,
    precioEnPesos: 750,
    ingredientes: "1 masa para pizza, 200cc salsa de tomates, 200g de queso mozzarella, 100g queso provolone, 2 morrones asados, 1 cucharada de orégano, sal, pimienta, 9 aceitunas, 1 longaniza calabresa"
};

const pizzaHawaiana ={
    nombre: "Pizza Hawaiana",
    id: 5,
    precioEnPesos: 750,
    ingredientes: "1 lámina de masa para pizza, 60-70g de piña natural, 100g de jamón cocido, 2 cucharadas de tomate frito o passata, 250g de mozzarella fresca, Especias variadas (orégano, pimienta, albahaca, romero)"
};

const pizzaDeChampiñones ={
    nombre: "Pizza de Champiñones",
    id: 6,
    precioEnPesos: 990,
    ingredientes: "1 lámina de masa para pizza, 150ml de salsa de tomate, 150g de queso mozzarella rallado, 2 unidades de cebollas, 1 lata de Champiñones escurridos, 1 pizca de sal, 1 pizca de pimienta, 9 unidades de aceitunas, 50 ml de aceite de oliva, 100g de queso parmesano rallado"
}; 

const pizzaPares = id = [pizzaFugazzeta, pizzaCalabresa, pizzaDeChampiñones];
const pizzaImpares = id = [pizzaNapolitana, pizzaCuatroQuesos, pizzaHawaiana];

const numeros = [
    ...pizzaImpares
]
console.log("A) pizzas con ID impares:", id);


//------------------------------------------------------------------------------

// B) ¿Hay alguna pizza que valga menos de $600?


const pizzas = [];

class Pizza {
    constructor(nombre, id, precioEnPesos) {
        this.nombre = nombre;
        this.id = id;
        this.precioEnPesos = precioEnPesos;
    }

    mostrar = function(){
        console.log (`B) La ${this.nombre}, tiene un valor de: $${this.precioEnPesos}`)
    }
      
}

const pizza1 = new Pizza("Pizza Napolitana", 1, 500);
pizzas.push(pizza1);
const pizza2 = new Pizza("Pizza Fugazzeta", 2, 300);
pizzas.push(pizza2);
const pizza3 = new Pizza("Pizza Cuatro Quesos", 3, 650);
pizzas.push(pizza3);
const pizza4 = new Pizza("Pizza Calabresa", 4, 750);
pizzas.push(pizza4);
const pizza5 = new Pizza("Pizza Hawaiana", 5, 750);
pizzas.push(pizza5);
const pizza6 = new Pizza("Pizza de Champiñones", 6, 990);
pizzas.push(pizza6);

for(let i = 0; i < pizzas.length; i++) {
    const pizz = pizzas[i]
    if (pizz.precioEnPesos < 600 )
    pizz.mostrar()
};


//------------------------------------------------------------------------------


// C) El nombre de cada pizza con su respectivo precio.


const ObjPizza ={
    nombre: "Pizza Napolitana",
    precioEnPesos: "$500",
};

const ObjPizza2 ={
    nombre: "Pizza Fugazzeta",
    precioEnPesos:"$300",
};

const ObjPizza3 ={
    nombre: "Pizza Cuatro Quesos",
    precioEnPesos: "$650",
};

const ObjPizza4 ={
    nombre: "Pizza Calabresa",
    precioEnPesos: "$750",
};

const ObjPizza5 ={
    nombre: "Pizza Hawaiana",
    precioEnPesos: "$750",
};

const ObjPizza6 ={
    nombre: "Pizza de Champiñones",
    precioEnPesos: "$990",
}; 

console.log((ObjPizza.nombre), (ObjPizza.precioEnPesos));
console.log((ObjPizza2.nombre), (ObjPizza2.precioEnPesos));
console.log((ObjPizza3.nombre), (ObjPizza3.precioEnPesos));
console.log((ObjPizza4.nombre), (ObjPizza4.precioEnPesos));
console.log((ObjPizza5.nombre), (ObjPizza5.precioEnPesos));
console.log((ObjPizza6.nombre), (ObjPizza6.precioEnPesos));


//------------------------------------------------------------------------------


//D)Todos los ingredientes de cada pizza 



let NapolitanaIngrediente = [pizzaNapolitana.ingredientes]

NapolitanaIngrediente.forEach(function(ingrediente){
    console.log(pizzaNapolitana.nombre, ":", ingrediente)
});

let FugazzetaIngrediente = [pizzaFugazzeta.ingredientes]
FugazzetaIngrediente.forEach(function(ingrediente){
    console.log(pizzaFugazzeta.nombre, ":", ingrediente)
});

let CuatroQuesosIngrediente = [pizzaCuatroQuesos.ingredientes]
CuatroQuesosIngrediente.forEach(function(ingrediente){
    console.log(pizzaCuatroQuesos.nombre, ":", ingrediente)
});

let CalabresaIngrediente = [pizzaCalabresa.ingredientes]
CalabresaIngrediente.forEach(function(ingrediente){
    console.log(pizzaCalabresa.nombre, ":", ingrediente)
});

let HawaianaIngrediente = [pizzaHawaiana.ingredientes]
HawaianaIngrediente.forEach(function(ingrediente){
    console.log(pizzaHawaiana.nombre, ":", ingrediente)
});

let ChampiñonesIngrediente = [pizzaDeChampiñones.ingredientes]
ChampiñonesIngrediente.forEach(function(ingrediente){
    console.log(pizzaDeChampiñones.nombre, ":", ingrediente)
});


