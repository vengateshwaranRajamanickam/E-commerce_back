import mongoose from "mongoose";
let data = new Date();

const Createuser = mongoose.Schema({
    displayname: {
        type: String,
        required: true
    },
    hashedPassword: {
        type: String,
        required: true
    },
    userEmail: {
        type: String,
        required: true
    }
})

export default mongoose.model("user", Createuser)  //user is model,  createuser is schema

// const Customer = mongoose.model(
//     'Customer', customerSchema);

// Customer.create({ name: 'Rahul', orderCount: 5 })
//     .then(result => {
//         console.log(result)
//     })

// const stringPermutations = str => {
//     if (str.length <= 2) return str.length === 2 ? [str, str[1] + str[0]] : [str];
//     return str
//       .split('')
//       .reduce(
//         (acc, letter, i) =>{
//           console.log(str.slice(0, i),str.slice(i + 1),i)
//           return acc.concat(stringPermutations(str.slice(0, i) + str.slice(i + 1)).map(val=>letter+val))
//         },[]);
//   };

//   console.log(stringPermutations('abc'));

