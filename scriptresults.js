const fkinres = () => {

const a0r = []
let a0res = 0;
const a1r = []
let a1res = 0;
const a2r = []
let a2res = 0;
const a3r = []
let a3res = 0;
const a4r = []
let a4res = 0;
const a5r = []
let a5res = 0;
const a6r = []
let a6res = 0;
const a7r = []
let a7res = 0;
const a8r = []
let a8res = 0;
const a9r = []
let a9res = 0;
const a10r = []
let a10res = 0;
const a11r = []
let a11res = 0;
const a12r = []
let a12res = 0;
const a13r = []
let a13res = 0;
const a14r = []
let a14res = 0;
const a15r = []
let a15res = 0;
const a16r = []
let a16res = 0;



const myresults = document.querySelectorAll(".result")

let a0 = []

a0.push(storingArray[0])
a0.push(storingArray_2[0])
a0.push(storingArray_3[0])
a0.push(storingArray_4[0])
a0.push(storingArray_5[0])
a0.push(storingArray_6[0])

let a1 = []

a1.push(storingArray[1])
a1.push(storingArray_2[1])
a1.push(storingArray_3[1])
a1.push(storingArray_4[1])
a1.push(storingArray_5[1])
a1.push(storingArray_6[1])

let a2 = []

a2.push(storingArray[2])
a2.push(storingArray_2[2])
a2.push(storingArray_3[2])
a2.push(storingArray_4[2])
a2.push(storingArray_5[2])
a2.push(storingArray_6[2])

let a3 = []

a3.push(storingArray[3])
a3.push(storingArray_2[3])
a3.push(storingArray_3[3])
a3.push(storingArray_4[3])
a3.push(storingArray_5[3])
a3.push(storingArray_6[3])

let a4 = []

a4.push(storingArray[4])
a4.push(storingArray_2[4])
a4.push(storingArray_3[4])
a4.push(storingArray_4[4])
a4.push(storingArray_5[4])
a4.push(storingArray_6[4])

let a5 = []

a5.push(storingArray[5])
a5.push(storingArray_2[5])
a5.push(storingArray_3[5])
a5.push(storingArray_4[5])
a5.push(storingArray_5[5])
a5.push(storingArray_6[5])

let a6 = []

a6.push(storingArray[6])
a6.push(storingArray_2[6])
a6.push(storingArray_3[6])
a6.push(storingArray_4[6])
a6.push(storingArray_5[6])
a6.push(storingArray_6[6])

let a7 = []

a7.push(storingArray[7])
a7.push(storingArray_2[7])
a7.push(storingArray_3[7])
a7.push(storingArray_4[7])
a7.push(storingArray_5[7])
a7.push(storingArray_6[7])

let a8 = []

a8.push(storingArray[8])
a8.push(storingArray_2[8])
a8.push(storingArray_3[8])
a8.push(storingArray_4[8])
a8.push(storingArray_5[8])
a8.push(storingArray_6[8])

let a9 = []

a9.push(storingArray[9])
a9.push(storingArray_2[9])
a9.push(storingArray_3[9])
a9.push(storingArray_4[9])
a9.push(storingArray_5[9])
a9.push(storingArray_6[9])

let a10 = []

a10.push(storingArray[10])
a10.push(storingArray_2[10])
a10.push(storingArray_3[10])
a10.push(storingArray_4[10])
a10.push(storingArray_5[10])
a10.push(storingArray_6[10])

let a11 = []

a11.push(storingArray[11])
a11.push(storingArray_2[11])
a11.push(storingArray_3[11])
a11.push(storingArray_4[11])
a11.push(storingArray_5[11])
a11.push(storingArray_6[11])

let a12 = []

a12.push(storingArray[12])
a12.push(storingArray_2[12])
a12.push(storingArray_3[12])
a12.push(storingArray_4[12])
a12.push(storingArray_5[12])
a12.push(storingArray_6[12])

let a13 = []

a13.push(storingArray[13])
a13.push(storingArray_2[13])
a13.push(storingArray_3[13])
a13.push(storingArray_4[13])
a13.push(storingArray_5[13])
a13.push(storingArray_6[13])

let a14 = []

a14.push(storingArray[14])
a14.push(storingArray_2[14])
a14.push(storingArray_3[14])
a14.push(storingArray_4[14])
a14.push(storingArray_5[14])
a14.push(storingArray_6[14])

let a15 = []

a15.push(storingArray[15])
a15.push(storingArray_2[15])
a15.push(storingArray_3[15])
a15.push(storingArray_4[15])
a15.push(storingArray_5[15])
a15.push(storingArray_6[15])

let a16 = []

a16.push(storingArray[16])
a16.push(storingArray_2[16])
a16.push(storingArray_3[16])
a16.push(storingArray_4[16])
a16.push(storingArray_5[16])
a16.push(storingArray_6[16])


a0.forEach(element => {
    if (element == 1)
    {a0r.push(1)}
    else if (element == 0)
    {a0r.push(2.2)}
    else if (element == 4)
    {a0r.push(0.1)}
    else if (element == 2)
    {a0r.push(0.4)}
    else if (element > 4)
    {a0r.push(0.1)}
    else if (element > 2)
    {a0r.push(0.1)}
    else if (element > 1)
    {a0r.push(0.4)}
    else if (element < 1)
    {a0r.push(2)}
})


for (const value of a0r) {
  a0res += value;
}

if (a0r.length == 1) {
    a0res = a0res * 6
}
else if (a0r.length == 2) {
    a0res = a0res * 3
}
else if (a0r.length == 3) {
    a0res = a0res * 2
}
else if (a0r.length == 4) {
    a0res = a0res * 1.5
}
else if (a0r.length == 5) {
    a0res = a0res * 1.2
}
else if (a0r.length == 0) {
    myresults[0].style.backgroundColor="white"
}

if (a0res > 8) {
    myresults[0].style.backgroundColor="#52A242"
}
else if (a0res > 6) {
    myresults[0].style.backgroundColor="#6FDB59"
}
else if (a0res == 6) {
    myresults[0].style.backgroundColor="#C03131"
}
else if (a0res < 4 && a0r.length !== 0) {
    myresults[0].style.backgroundColor="#8F2424"
}
else if (a0r.length !== 0){
    myresults[0].style.backgroundColor="#C03131"
}

a1.forEach(element => {
    if (element == 1)
    {a1r.push(1)}
    else if (element == 0)
    {a1r.push(2.2)}
    else if (element == 4)
    {a1r.push(0.1)}
    else if (element == 2)
    {a1r.push(0.4)}
    else if (element > 4)
    {a1r.push(0.1)}
    else if (element > 2)
    {a1r.push(0.1)}
    else if (element > 1)
    {a1r.push(0.4)}
    else if (element < 1)
    {a1r.push(2)}
})


for (const value of a1r) {
  a1res += value;
}

if (a1r.length == 1) {
    a1res = a1res * 6
}
else if (a1r.length == 2) {
    a1res = a1res * 3
}
else if (a1r.length == 3) {
    a1res = a1res * 2
}
else if (a1r.length == 4) {
    a1res = a1res * 1.5
}
else if (a1r.length == 5) {
    a1res = a1res * 1.2
}
else if (a1r.length == 0) {
    myresults[1].style.backgroundColor="white"
}

if (a1res > 8) {
    myresults[1].style.backgroundColor="#52A242"
}
else if (a1res > 6) {
    myresults[1].style.backgroundColor="#6FDB59"
}
else if (a1res == 6) {
    myresults[1].style.backgroundColor="#C03131"
}
else if (a1res < 4 && a1r.length !== 0) {
    myresults[1].style.backgroundColor="#8F2424"
}
else if (a1r.length !== 0){
    myresults[1].style.backgroundColor="#C03131"
}

a2.forEach(element => {
    if (element == 1)
    {a2r.push(1)}
    else if (element == 0)
    {a2r.push(2.2)}
    else if (element == 4)
    {a2r.push(0.1)}
    else if (element == 2)
    {a2r.push(0.4)}
    else if (element > 4)
    {a2r.push(0.1)}
    else if (element > 2)
    {a2r.push(0.1)}
    else if (element > 1)
    {a2r.push(0.4)}
    else if (element < 1)
    {a2r.push(2)}
})


for (const value of a2r) {
  a2res += value;
}

if (a2r.length == 1) {
    a2res = a2res * 6
}
else if (a2r.length == 2) {
    a2res = a2res * 3
}
else if (a2r.length == 3) {
    a2res = a2res * 2
}
else if (a2r.length == 4) {
    a2res = a2res * 1.5
}
else if (a2r.length == 5) {
    a2res = a2res * 1.2
}
else if (a2r.length == 0) {
    myresults[2].style.backgroundColor="white"
}

if (a2res > 8) {
    myresults[2].style.backgroundColor="#52A242"
}
else if (a2res > 6) {
    myresults[2].style.backgroundColor="#6FDB59"
}
else if (a2res == 6) {
    myresults[2].style.backgroundColor="#C03131"
}
else if (a2res < 4 && a2r.length !== 0) {
    myresults[2].style.backgroundColor="#8F2424"
}
else if (a2r.length !== 0){
    myresults[2].style.backgroundColor="#C03131"
}

a3.forEach(element => {
    if (element == 1)
    {a3r.push(1)}
    else if (element == 0)
    {a3r.push(2.2)}
    else if (element == 4)
    {a3r.push(0.1)}
    else if (element == 2)
    {a3r.push(0.4)}
    else if (element > 4)
    {a3r.push(0.1)}
    else if (element > 2)
    {a3r.push(0.1)}
    else if (element > 1)
    {a3r.push(0.4)}
    else if (element < 1)
    {a3r.push(2)}
})


for (const value of a3r) {
  a3res += value;
}

if (a3r.length == 1) {
    a3res = a3res * 6
}
else if (a3r.length == 2) {
    a3res = a3res * 3
}
else if (a3r.length == 3) {
    a3res = a3res * 2
}
else if (a3r.length == 4) {
    a3res = a3res * 1.5
}
else if (a3r.length == 5) {
    a3res = a3res * 1.2
}
else if (a3r.length == 0) {
    myresults[3].style.backgroundColor="white"
}

if (a3res > 8) {
    myresults[3].style.backgroundColor="#52A242"
}
else if (a3res > 6) {
    myresults[3].style.backgroundColor="#6FDB59"
}
else if (a3res == 6) {
    myresults[3].style.backgroundColor="#C03131"
}
else if (a3res < 4 && a3r.length !== 0) {
    myresults[3].style.backgroundColor="#8F2424"
}
else if (a3r.length !== 0){
    myresults[3].style.backgroundColor="#C03131"
}

a4.forEach(element => {
    if (element == 1)
    {a4r.push(1)}
    else if (element == 0)
    {a4r.push(2.2)}
    else if (element == 4)
    {a4r.push(0.1)}
    else if (element == 2)
    {a4r.push(0.4)}
    else if (element > 4)
    {a4r.push(0.1)}
    else if (element > 2)
    {a4r.push(0.1)}
    else if (element > 1)
    {a4r.push(0.4)}
    else if (element < 1)
    {a4r.push(2)}
})


for (const value of a4r) {
  a4res += value;
}

if (a4r.length == 1) {
    a4res = a4res * 6
}
else if (a4r.length == 2) {
    a4res = a4res * 3
}
else if (a4r.length == 3) {
    a4res = a4res * 2
}
else if (a4r.length == 4) {
    a4res = a4res * 1.5
}
else if (a4r.length == 5) {
    a4res = a4res * 1.2
}
else if (a4r.length == 0) {
    myresults[4].style.backgroundColor="white"
}

if (a4res > 8) {
    myresults[4].style.backgroundColor="#52A242"
}
else if (a4res > 6) {
    myresults[4].style.backgroundColor="#6FDB59"
}
else if (a4res == 6) {
    myresults[4].style.backgroundColor="#C03131"
}
else if (a4res < 4 && a4r.length !== 0) {
    myresults[4].style.backgroundColor="#8F2424"
}
else if (a4r.length !== 0){
    myresults[4].style.backgroundColor="#C03131"
}


a5.forEach(element => {
    if (element == 1)
    {a5r.push(1)}
    else if (element == 0)
    {a5r.push(2.2)}
    else if (element == 4)
    {a5r.push(0.1)}
    else if (element == 2)
    {a5r.push(0.4)}
    else if (element > 4)
    {a5r.push(0.1)}
    else if (element > 2)
    {a5r.push(0.1)}
    else if (element > 1)
    {a5r.push(0.4)}
    else if (element < 1)
    {a5r.push(2)}
})


for (const value of a5r) {
  a5res += value;
}

if (a5r.length == 1) {
    a5res = a5res * 6
}
else if (a5r.length == 2) {
    a5res = a5res * 3
}
else if (a5r.length == 3) {
    a5res = a5res * 2
}
else if (a5r.length == 4) {
    a5res = a5res * 1.5
}
else if (a5r.length == 5) {
    a5res = a5res * 1.2
}
else if (a5r.length == 0) {
    myresults[5].style.backgroundColor="white"
}

if (a5res > 8) {
    myresults[5].style.backgroundColor="#52A242"
}
else if (a5res > 6) {
    myresults[5].style.backgroundColor="#6FDB59"
}
else if (a5res == 6) {
    myresults[5].style.backgroundColor="#C03131"
}
else if (a5res < 4 && a5r.length !== 0) {
    myresults[5].style.backgroundColor="#8F2424"
}
else if (a5r.length !== 0){
    myresults[5].style.backgroundColor="#C03131"
}


a6.forEach(element => {
    if (element == 1)
    {a6r.push(1)}
    else if (element == 0)
    {a6r.push(2.2)}
    else if (element == 4)
    {a6r.push(0.1)}
    else if (element == 2)
    {a6r.push(0.4)}
    else if (element > 4)
    {a6r.push(0.1)}
    else if (element > 2)
    {a6r.push(0.1)}
    else if (element > 1)
    {a6r.push(0.4)}
    else if (element < 1)
    {a6r.push(2)}
})


for (const value of a6r) {
  a6res += value;
}

if (a6r.length == 1) {
    a6res = a6res * 6
}
else if (a6r.length == 2) {
    a6res = a6res * 3
}
else if (a6r.length == 3) {
    a6res = a6res * 2
}
else if (a6r.length == 4) {
    a6res = a6res * 1.5
}
else if (a6r.length == 5) {
    a6res = a6res * 1.2
}
else if (a6r.length == 0) {
    myresults[6].style.backgroundColor="white"
}

if (a6res > 8) {
    myresults[6].style.backgroundColor="#52A242"
}
else if (a6res > 6) {
    myresults[6].style.backgroundColor="#6FDB59"
}
else if (a6res == 6) {
    myresults[6].style.backgroundColor="#C03131"
}
else if (a6res < 4 && a6r.length !== 0) {
    myresults[6].style.backgroundColor="#8F2424"
}
else if (a6r.length !== 0){
    myresults[6].style.backgroundColor="#C03131"
}


a7.forEach(element => {
    if (element == 1)
    {a7r.push(1)}
    else if (element == 0)
    {a7r.push(2.2)}
    else if (element == 4)
    {a7r.push(0.1)}
    else if (element == 2)
    {a7r.push(0.4)}
    else if (element > 4)
    {a7r.push(0.1)}
    else if (element > 2)
    {a7r.push(0.1)}
    else if (element > 1)
    {a7r.push(0.4)}
    else if (element < 1)
    {a7r.push(2)}
})


for (const value of a7r) {
  a7res += value;
}

if (a7r.length == 1) {
    a7res = a7res * 6
}
else if (a7r.length == 2) {
    a7res = a7res * 3
}
else if (a7r.length == 3) {
    a7res = a7res * 2
}
else if (a7r.length == 4) {
    a7res = a7res * 1.5
}
else if (a7r.length == 5) {
    a7res = a7res * 1.2
}
else if (a7r.length == 0) {
    myresults[7].style.backgroundColor="white"
}

if (a7res > 8) {
    myresults[7].style.backgroundColor="#52A242"
}
else if (a7res > 6) {
    myresults[7].style.backgroundColor="#6FDB59"
}
else if (a7res == 6) {
    myresults[7].style.backgroundColor="#C03131"
}
else if (a7res < 4 && a7r.length !== 0) {
    myresults[7].style.backgroundColor="#8F2424"
}
else if (a7r.length !== 0){
    myresults[7].style.backgroundColor="#C03131"
}


a8.forEach(element => {
    if (element == 1)
    {a8r.push(1)}
    else if (element == 0)
    {a8r.push(2.2)}
    else if (element == 4)
    {a8r.push(0.1)}
    else if (element == 2)
    {a8r.push(0.4)}
    else if (element > 4)
    {a8r.push(0.1)}
    else if (element > 2)
    {a8r.push(0.1)}
    else if (element > 1)
    {a8r.push(0.4)}
    else if (element < 1)
    {a8r.push(2)}
})


for (const value of a8r) {
  a8res += value;
}

if (a8r.length == 1) {
    a8res = a8res * 6
}
else if (a8r.length == 2) {
    a8res = a8res * 3
}
else if (a8r.length == 3) {
    a8res = a8res * 2
}
else if (a8r.length == 4) {
    a8res = a8res * 1.5
}
else if (a8r.length == 5) {
    a8res = a8res * 1.2
}
else if (a8r.length == 0) {
    myresults[8].style.backgroundColor="white"
}

if (a8res > 8) {
    myresults[8].style.backgroundColor="#52A242"
}
else if (a8res > 6) {
    myresults[8].style.backgroundColor="#6FDB59"
}
else if (a8res == 6) {
    myresults[8].style.backgroundColor="#C03131"
}
else if (a8res < 4 && a8r.length !== 0) {
    myresults[8].style.backgroundColor="#8F2424"
}
else if (a8r.length !== 0){
    myresults[8].style.backgroundColor="#C03131"
}

a9.forEach(element => {
    if (element == 1)
    {a9r.push(1)}
    else if (element == 0)
    {a9r.push(2.2)}
    else if (element == 4)
    {a9r.push(0.1)}
    else if (element == 2)
    {a9r.push(0.4)}
    else if (element > 4)
    {a9r.push(0.1)}
    else if (element > 2)
    {a9r.push(0.1)}
    else if (element > 1)
    {a9r.push(0.4)}
    else if (element < 1)
    {a9r.push(2)}
})


for (const value of a9r) {
  a9res += value;
}

if (a9r.length == 1) {
    a9res = a9res * 6
}
else if (a9r.length == 2) {
    a9res = a9res * 3
}
else if (a9r.length == 3) {
    a9res = a9res * 2
}
else if (a9r.length == 4) {
    a9res = a9res * 1.5
}
else if (a9r.length == 5) {
    a9res = a9res * 1.2
}
else if (a9r.length == 0) {
    myresults[9].style.backgroundColor="white"
}

if (a9res > 8) {
    myresults[9].style.backgroundColor="#52A242"
}
else if (a9res > 6) {
    myresults[9].style.backgroundColor="#6FDB59"
}
else if (a9res == 6) {
    myresults[9].style.backgroundColor="#C03131"
}
else if (a9res < 4 && a9r.length !== 0) {
    myresults[9].style.backgroundColor="#8F2424"
}
else if (a9r.length !== 0){
    myresults[9].style.backgroundColor="#C03131"
}

a10.forEach(element => {
    if (element == 1)
    {a10r.push(1)}
    else if (element == 0)
    {a10r.push(2.2)}
    else if (element == 4)
    {a10r.push(0.1)}
    else if (element == 2)
    {a10r.push(0.4)}
    else if (element > 4)
    {a10r.push(0.1)}
    else if (element > 2)
    {a10r.push(0.1)}
    else if (element > 1)
    {a10r.push(0.4)}
    else if (element < 1)
    {a10r.push(2)}
})


for (const value of a10r) {
  a10res += value;
}

if (a10r.length == 1) {
    a10res = a10res * 6
}
else if (a10r.length == 2) {
    a10res = a10res * 3
}
else if (a10r.length == 3) {
    a10res = a10res * 2
}
else if (a10r.length == 4) {
    a10res = a10res * 1.5
}
else if (a10r.length == 5) {
    a10res = a10res * 1.2
}
else if (a10r.length == 0) {
    myresults[10].style.backgroundColor="white"
}

if (a10res > 8) {
    myresults[10].style.backgroundColor="#52A242"
}
else if (a10res > 6) {
    myresults[10].style.backgroundColor="#6FDB59"
}
else if (a10res == 6) {
    myresults[10].style.backgroundColor="#C03131"
}
else if (a10res < 4 && a10r.length !== 0) {
    myresults[10].style.backgroundColor="#8F2424"
}
else if (a10r.length !== 0){
    myresults[10].style.backgroundColor="#C03131"
}


a11.forEach(element => {
    if (element == 1)
    {a11r.push(1)}
    else if (element == 0)
    {a11r.push(2.2)}
    else if (element == 4)
    {a11r.push(0.1)}
    else if (element == 2)
    {a11r.push(0.4)}
    else if (element > 4)
    {a11r.push(0.1)}
    else if (element > 2)
    {a11r.push(0.1)}
    else if (element > 1)
    {a11r.push(0.4)}
    else if (element < 1)
    {a11r.push(2)}
})


for (const value of a11r) {
  a11res += value;
}

if (a11r.length == 1) {
    a11res = a11res * 6
}
else if (a11r.length == 2) {
    a11res = a11res * 3
}
else if (a11r.length == 3) {
    a11res = a11res * 2
}
else if (a11r.length == 4) {
    a11res = a11res * 1.5
}
else if (a11r.length == 5) {
    a11res = a11res * 1.2
}
else if (a11r.length == 0) {
    myresults[11].style.backgroundColor="white"
}

if (a11res > 8) {
    myresults[11].style.backgroundColor="#52A242"
}
else if (a11res > 6) {
    myresults[11].style.backgroundColor="#6FDB59"
}
else if (a11res == 6) {
    myresults[11].style.backgroundColor="#C03131"
}
else if (a11res < 4 && a11r.length !== 0) {
    myresults[11].style.backgroundColor="#8F2424"
}
else if (a11r.length !== 0){
    myresults[11].style.backgroundColor="#C03131"
}

a12.forEach(element => {
    if (element == 1)
    {a12r.push(1)}
    else if (element == 0)
    {a12r.push(2.2)}
    else if (element == 4)
    {a12r.push(0.1)}
    else if (element == 2)
    {a12r.push(0.4)}
    else if (element > 4)
    {a12r.push(0.1)}
    else if (element > 2)
    {a12r.push(0.1)}
    else if (element > 1)
    {a12r.push(0.4)}
    else if (element < 1)
    {a12r.push(2)}
})


for (const value of a12r) {
  a12res += value;
}

if (a12r.length == 1) {
    a12res = a12res * 6
}
else if (a12r.length == 2) {
    a12res = a12res * 3
}
else if (a12r.length == 3) {
    a12res = a12res * 2
}
else if (a12r.length == 4) {
    a12res = a12res * 1.5
}
else if (a12r.length == 5) {
    a12res = a12res * 1.2
}
else if (a12r.length == 0) {
    myresults[12].style.backgroundColor="white"
}

if (a12res > 8) {
    myresults[12].style.backgroundColor="#52A242"
}
else if (a12res > 6) {
    myresults[12].style.backgroundColor="#6FDB59"
}
else if (a12res == 6) {
    myresults[12].style.backgroundColor="#C03131"
}
else if (a12res < 4 && a12r.length !== 0) {
    myresults[12].style.backgroundColor="#8F2424"
}
else if (a12r.length !== 0){
    myresults[12].style.backgroundColor="#C03131"
}


a13.forEach(element => {
    if (element == 1)
    {a13r.push(1)}
    else if (element == 0)
    {a13r.push(2.2)}
    else if (element == 4)
    {a13r.push(0.1)}
    else if (element == 2)
    {a13r.push(0.4)}
    else if (element > 4)
    {a13r.push(0.1)}
    else if (element > 2)
    {a13r.push(0.1)}
    else if (element > 1)
    {a13r.push(0.4)}
    else if (element < 1)
    {a13r.push(2)}
})


for (const value of a13r) {
  a13res += value;
}

if (a13r.length == 1) {
    a13res = a13res * 6
}
else if (a13r.length == 2) {
    a13res = a13res * 3
}
else if (a13r.length == 3) {
    a13res = a13res * 2
}
else if (a13r.length == 4) {
    a13res = a13res * 1.5
}
else if (a13r.length == 5) {
    a13res = a13res * 1.2
}
else if (a13r.length == 0) {
    myresults[13].style.backgroundColor="white"
}

if (a13res > 8) {
    myresults[13].style.backgroundColor="#52A242"
}
else if (a13res > 6) {
    myresults[13].style.backgroundColor="#6FDB59"
}
else if (a13res == 6) {
    myresults[13].style.backgroundColor="#C03131"
}
else if (a13res < 4 && a13r.length !== 0) {
    myresults[13].style.backgroundColor="#8F2424"
}
else if (a13r.length !== 0){
    myresults[13].style.backgroundColor="#C03131"
}


a14.forEach(element => {
    if (element == 1)
    {a14r.push(1)}
    else if (element == 0)
    {a14r.push(2.2)}
    else if (element == 4)
    {a14r.push(0.1)}
    else if (element == 2)
    {a14r.push(0.4)}
    else if (element > 4)
    {a14r.push(0.1)}
    else if (element > 2)
    {a14r.push(0.1)}
    else if (element > 1)
    {a14r.push(0.4)}
    else if (element < 1)
    {a14r.push(2)}
})


for (const value of a14r) {
  a14res += value;
}

if (a14r.length == 1) {
    a14res = a14res * 6
}
else if (a14r.length == 2) {
    a14res = a14res * 3
}
else if (a14r.length == 3) {
    a14res = a14res * 2
}
else if (a14r.length == 4) {
    a14res = a14res * 1.5
}
else if (a14r.length == 5) {
    a14res = a14res * 1.2
}
else if (a14r.length == 0) {
    myresults[14].style.backgroundColor="white"
}

if (a14res > 8) {
    myresults[14].style.backgroundColor="#52A242"
}
else if (a14res > 6) {
    myresults[14].style.backgroundColor="#6FDB59"
}
else if (a14res == 6) {
    myresults[14].style.backgroundColor="#C03131"
}
else if (a14res < 4 && a14r.length !== 0) {
    myresults[14].style.backgroundColor="#8F2424"
}
else if (a14r.length !== 0){
    myresults[14].style.backgroundColor="#C03131"
}

a15.forEach(element => {
    if (element == 1)
    {a15r.push(1)}
    else if (element == 0)
    {a15r.push(2.2)}
    else if (element == 4)
    {a15r.push(0.1)}
    else if (element == 2)
    {a15r.push(0.4)}
    else if (element > 4)
    {a15r.push(0.1)}
    else if (element > 2)
    {a15r.push(0.1)}
    else if (element > 1)
    {a15r.push(0.4)}
    else if (element < 1)
    {a15r.push(2)}
})


for (const value of a15r) {
  a15res += value;
}

if (a15r.length == 1) {
    a15res = a15res * 6
}
else if (a15r.length == 2) {
    a15res = a15res * 3
}
else if (a15r.length == 3) {
    a15res = a15res * 2
}
else if (a15r.length == 4) {
    a15res = a15res * 1.5
}
else if (a15r.length == 5) {
    a15res = a15res * 1.2
}
else if (a15r.length == 0) {
    myresults[15].style.backgroundColor="white"
}

if (a15res > 8) {
    myresults[15].style.backgroundColor="#52A242"
}
else if (a15res > 6) {
    myresults[15].style.backgroundColor="#6FDB59"
}
else if (a15res == 6) {
    myresults[15].style.backgroundColor="#C03131"
}
else if (a15res < 4 && a15r.length !== 0) {
    myresults[15].style.backgroundColor="#8F2424"
}
else if (a15r.length !== 0){
    myresults[15].style.backgroundColor="#C03131"
}


a16.forEach(element => {
    if (element == 1)
    {a16r.push(1)}
    else if (element == 0)
    {a16r.push(2.2)}
    else if (element == 4)
    {a16r.push(0.1)}
    else if (element == 2)
    {a16r.push(0.4)}
    else if (element > 4)
    {a16r.push(0.1)}
    else if (element > 2)
    {a16r.push(0.1)}
    else if (element > 1)
    {a16r.push(0.4)}
    else if (element < 1)
    {a16r.push(2)}
})


for (const value of a16r) {
  a16res += value;
}

if (a16r.length == 1) {
    a16res = a16res * 6
}
else if (a16r.length == 2) {
    a16res = a16res * 3
}
else if (a16r.length == 3) {
    a16res = a16res * 2
}
else if (a16r.length == 4) {
    a16res = a16res * 1.5
}
else if (a16r.length == 5) {
    a16res = a16res * 1.2
}
else if (a16r.length == 0) {
    myresults[16].style.backgroundColor="white"
}

if (a16res > 8) {
    myresults[16].style.backgroundColor="#52A242"
}
else if (a16res > 6) {
    myresults[16].style.backgroundColor="#6FDB59"
}
else if (a16res == 6) {
    myresults[16].style.backgroundColor="#C03131"
}
else if (a16res < 4 && a16r.length !== 0) {
    myresults[16].style.backgroundColor="#8F2424"
}
else if (a16r.length !== 0){
    myresults[16].style.backgroundColor="#C03131"
}

}