const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

// const titleCased = () => {
//   return tutorials
// }

// const titleCased = () => {
//     return tutorials.map(tutorial => {
//       const arr = tutorial.split(" ")
//       for (var i = 0; i < arr.length; i++) {
//         arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
//       }
//       const str2 = arr.join(" ")
//       return str2
//     }
//     )
//   }
  
  const titleCased = () => {
    return tutorials.map(tutorial => {
      const arr = tutorial.split(" ")
      const capitilize = arr.map(
        arr => arr.charAt(0).toUpperCase() + arr.slice(1)
      )
      const str2 = capitilize.join(" ")
      return str2
      })
    }
   
  
