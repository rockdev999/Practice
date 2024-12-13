// const { createLogger } = require("vite");

// Exmaple1
function createMagicPotion(potions, target) {
  function createMagicPotion(potions, target) {
    // Code here
    let result = [];
    let m = Infinity;

    for (let i = 0; i < potions.length - 1; i++) {
      for (let j = i + 1; j < potions.length; j++) {
        if (potions[i] + potions[j] === target) {
          if (j < m) {
            result = [i, j];
            m = j;
          }
        }
      }
    }

    return result.length > 0 ? result : undefined;
  }
}
// example2
function battleHorde(zombies, humans) {
  let zp = zombies.split("").map(Number);
  let hp = humans.split("").map(Number);

  let z = 0;
  let h = 0;

  for (let i = 0; i < zp.length; i++) {
    let za = zp[i] + z;
    let ha = hp[i] + h;

    if (za > ha) {
      z = za - ha;
      h = 0;
    } else if (ha > za) {
      h = ha - za;
      z = 0;
    } else {
      z = 0;
      h = 0;
    }
  }

  if (z > h) {
    return `${z}z`;
  } else if (h > z) {
    return `${h}h`;
  } else {
    return "x";
  }
}
// Example3
// const dream = [
//   [1, 2, 3],
//   [5, 6, 7],
//   [9, 10, 11],
//   [13, 14, 15],
// ]

// // const bestPath = findSafestPath(dream) // Returns 7
// // The safest path is:
// // [0, 0] -> 1
// // [0, 1] -> 3
// // [0, 2] -> 1
// // [1, 2] -> 1
// // [2, 2] -> 1

// // 1 -> 3 -> 1 -> 1 -> 1 = 7

// // function findSafestPath(dream) {
// //   // Code here
// //   // for(let i=dream.length-1; i >= 0 ; i--)
// //   //   {
// //   //     for(let j=dream.length; j >= 0; j--)
// //   //     {
// //   //       console.log(dream[i][j]  + "s ");
// //   //     }
// //   //   }
// //   //   return 0
// //   let s=0;
// //   for(let i=dream.length-1; i >= 0 ; i--){
// //     for(let j=dream[i].length-1; j >= 0; j--){
// //       // console.log(dream[i][j]+' s');
// //       if(i!=0 && j!=0 && dream[i-1][j]<dream[i][j-1]){
// //         i--
// //         console.log(dream[i-1][j]);
// //       }else if(i!=0 && j!=0 && dream[i-1][j]>dream[i][j-1]){
// //         j=j-1
// //         i--
// //         console.log(dream[i][j-1]);
// //       }else{
// //         j=j-1
// //         console.log(dream[i][j-1]);
// //       }
// //     }
// //   }
// //   return s
// // }

// // console.log(findSafestPath(dream))

// // for(let i=dream.length-1; i >= 0 ; i--)
// // {
// //   for(let j=dream[i].length; j >= 0; j--)
// //   {
// //     console.log(dream[j][i]  + "s ");
// //   }
// // }
// // console.log(dream.length)//filas
// // console.log(dream[0].length)//columna
// let s = dream[dream.length-1][dream[0].length-1]
// console.log(dream[dream.length-1][dream[0].length-1])
// //columnas
// for(let i=dream.length-1; i >= 0 ; i--)//fila
// {
//   for(let j=dream[0].length-1; j >= 0; j--)//columa
//   {
//     if(dream[i][j-1]<dream[i-1][j]){
//       console.log(dream[i][j-1])
//       s += dream[i][j-1]
//       break;
//       // j--
//       // aqui se tiene que actualizar para que se quede en esa posicion
//     }else{
//       console.log(dream[i-1][j])
//       s += dream[i-1][j]
//       break;
//       // i--
//     }
//   }
// }
// console.log(s)

function findSafestPath(dream) {
  const n = dream.length;
  const m = dream[0].length;
  const newM = [];
  for (let i = 0; i < n; i++) {
    newM[i] = [];
    for (let j = 0; j < m; j++) {
      newM[i][j] = 0; // Inicializa todas las celdas con 0
    }
  }

  newM[0][0] = dream[0][0];
  for (let j = 1; j < m; j++) {
    newM[0][j] = newM[0][j - 1] + dream[0][j];
  }

  for (let i = 1; i < n; i++) {
    newM[i][0] = newM[i - 1][0] + dream[i][0];
  }
  for (let i = 1; i < n; i++) {
    for (let j = 1; j < m; j++) {
      newM[i][j] = Math.min(newM[i - 1][j], newM[i][j - 1]) + dream[i][j];
    }
  }
  console.log("Matriz newM:");
  for (let i = 0; i < n; i++) {
    console.log(newM[i].join(" "));
  }

  return newM[n - 1][m - 1];
}

// Ejemplo de uso
const dream = [
  [1, 3, 1],
  [1, 5, 1],
  [4, 2, 1],
];

// console.log(findSafestPath(dream)); // Debería devolver 7


// example4
const whisper = 'd~~~~~a';
const suspects = ['Dracula', 'Freddy Krueger', 'Jason Voorhees', 'Michael Myers'];

findTheKiller(whisper, suspects); // -> 'Dracula'

const whisper2 = '~r~dd~';
const suspects2 = ['Freddy', 'Freddier', 'Fredderic']

findTheKiller(whisper2, suspects2); // -> 'Freddy,Freddier,Fredderic'

const whisper3 = '~r~dd$';
const suspects3 = ['Freddy', 'Freddier', 'Fredderic']

findTheKiller(whisper3, suspects3); // -> ''

const whisper4 = 'mi~~def';
const suspects4 = ['Midudev', 'Midu', 'Madeval']

findTheKiller(whisper4, suspects4); // -> ''

function findTheKiller (whisper, suspects){
  let w = whisper.split("").map(String);
  let result = []
  for(let i = 0; i < suspects.length ; i--){
    
  }
  for(let j = 0; j < w.length ; j--){
    if(w[j]!='$'){

    }
  }
}