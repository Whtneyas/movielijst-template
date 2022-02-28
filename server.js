const express = require ("express")

const app = express();

const port = 3000
const hobbies = [ {

    "Name"   : "Whitney Abrah",
    "Hobby"  :"Gaming",
    "Age"    : "21",
    "About me ": "Hello . my name is whitney and i love gaming",

    "Name"   : "Jeffery",
    "Hobby"  :"Singing",
    "Age"    : "21",
    "About me ": "Hello . my name is Jeffery  and i love gaming",

    "Name"   : "Mandy",
    "Hobby"  :"Reading",
    "Age"    : "21",
    "About me ": "Hello . my name is Mandy and i love gaming",
    
    "Name"   : "Priscilla",
    "Hobby"  :"Painting",
    "Age"    : "21",
    "About me ": "Hello . my name is Priscilla  and i love gaming",

}
    
]
app.get('/',(req, res) => {
 res.send('<h1>Movies</h1>')  

})