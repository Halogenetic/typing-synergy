// i = index of the pokemon / value of options
let i_6 = 1;
// Select button
let theselect_6 = document.querySelector(".selectpoke_6")
let theability_6 = document.querySelector(".ability_6")

let storingArray_6 = []

// Function to transform select in selectize (impossible to querySelect)
//  $(document).ready(function () {
//         $('select').selectize({
//             sortField: 'text'
//         });
//     });

// Function to create options (pokemons names + index in value) with an API
const optionlist_6 = () => {
        fetch("https://pokeapi.co/api/v2/pokemon-species?offset=0&limit=644")
          .then((response) => {
            if (!response.ok) {
              alert("Error");
              throw new Error("No Data");
            }
            return response.json()
          })
          .then((data_6) => 
            data_6.results.forEach(pokemon => {
                const theselect_6 = document.querySelector(".selectpoke_6")
                const createoption = document.createElement("option")
                createoption.value=(i_6)
                createoption.innerHTML=(pokemon.name)
                theselect_6.appendChild(createoption)

                i_6++
            }))
      }

optionlist_6();

// Select button generating image, duotype and typing
const refresh_6 = () => {

const allduotype_6 = document.querySelectorAll(".typez_6")
const icones_6 = document.querySelector(".icones_6")

// Delete duotype of all types
allduotype_6.forEach(type => {
type.innerHTML = ''
})

// Create duotype in type 
        const typelist_6 = () => {
            if (theselect_6.value !== "") {
            fetch("https://pokeapi.co/api/v2/pokemon/"+theselect_6.value)
                .then((response) => {
                if (!response.ok) {
                alert("Error");
                throw new Error("error");
                }
                return response.json()
                })
                .then((data_6) => 
                    allduotype_6.forEach(type => {
                        if ((data_6.types[0].type.name) == "normal" && typeof (data_6.types[1]) == "undefined") {
                            if (type.classList.contains(data_6.types[0].type.name)) {
                                type.innerHTML = data_6.types[0].type.name
                                type.style.height = "50%";
                                type.style.paddingTop = "15%";}}
                       else if ((data_6.types[0].type.name) == "normal" && (data_6.types[1].type.name) == "fairy") {
                        if (type.classList.contains("water")) {
                        type.innerHTML = "water"
                        type.style.height = "100%";
                        type.style.paddingTop = "40%"; }}

                        else if ((data_6.types[0].type.name) == "fairy") {
                            if (type.classList.contains(data_6.past_types[0].types[0].type.name)) {
                                type.innerHTML = data_6.past_types[0].types[0].type.name
                                type.style.height = "100%";
                                type.style.paddingTop = "40%"; }
                        }

                        else if (type.classList.contains(data_6.types[0].type.name)) {
                            type.innerHTML = data_6.types[0].type.name
                            type.style.height = "50%";
                            type.style.paddingTop = "15%";
                        }
                        if (typeof (data_6.types[1]) !== "undefined"){
                            if ((data_6.types[1].type.name) == "fairy") {
                                type.style.height = "100%";
                                type.style.paddingTop = "40%";
                            }
                            else if (type.classList.contains(data_6.types[1].type.name)) {
                                type.innerHTML = data_6.types[1].type.name
                                type.style.height = "50%";
                                type.style.paddingTop = "15%";
                        }   else {
                                type.style.height = "50%";
                                type.style.paddingTop = "15%";
                            }
                     } 
                        else {
                            type.style.height = "100%";
                            type.style.paddingTop = "40%";
                        }
                    }
                    
                )
            )}
        }
            
        typelist_6();

// Create image in icones
        const displayImage_6 = () => {
            if (theselect_6.value !== "") {
            fetch("https://pokeapi.co/api/v2/pokemon/"+theselect_6.value)
                .then((response) => {
                if (!response.ok) {
                alert("Error");
                throw new Error("error");
                }
                return response.json()
                })
                .then((data_6) => 
                    icones_6.src = data_6.sprites.front_default
                )
            } else {
                icones_6.src = "./images/imicon.png"
            }
        }
             
displayImage_6(); 


// Create the typing
let typingArray_6 = [
[1, 2, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
[1, 1, 2, 1, 1, 0.5, 0.5, 1, 1, 1, 1, 1, 1, 2, 1, 1, 0.5],
[1, 0.5, 1, 1, 0, 2, 0.5, 1, 1, 1, 1, 0.5, 2, 1, 2, 1, 1],
[1, 0.5, 1, 0.5, 2, 1, 0.5, 1, 1, 1, 1, 0.5, 1, 2, 1, 1, 1],
[1, 1, 1, 0.5, 1, 0.5, 1, 1, 1, 1, 2, 2, 0, 1, 2, 1, 1],
[0.5, 2, 0.5, 0.5, 2, 1, 1, 1, 2, 0.5, 2, 2, 1, 1, 1, 1, 1],
[1, 0.5, 2, 1, 0.5, 2, 1, 1, 1, 2, 1, 0.5, 1, 1, 1, 1, 1],
[0, 0, 1, 0.5, 1, 1, 0.5, 2, 1, 1, 1, 1, 1, 1, 1, 1, 2],
[0.5, 2, 0.5, 0, 2, 0.5, 0.5, 0.5, 0.5, 2, 1, 0.5, 1, 0.5, 0.5, 0.5, 0.5],
[1, 1, 1, 1, 2, 2, 0.5, 1, 0.5, 0.5, 2, 0.5, 1, 1, 0.5, 1, 1],
[1, 1, 1, 1, 1, 1, 1, 1, 0.5, 0.5, 0.5, 2, 2, 1, 0.5, 1, 1],
[1, 1, 2, 2, 0.5, 1, 2, 1, 1, 2, 0.5, 0.5, 0.5, 1, 2, 1, 1],
[1, 1, 0.5, 1, 2, 1, 1, 1, 0.5, 1, 1, 1, 0.5, 1, 1, 1, 1],
[1, 0.5, 1, 1, 1, 1, 2, 2, 1, 1, 1, 1, 1, 0.5, 1, 1, 2],
[1, 2, 1, 1, 1, 2, 1, 1, 2, 2, 1, 1, 1, 1, 0.5, 1, 1],
[1, 1, 1, 1, 1, 1, 1, 1, 1, 0.5, 0.5, 0.5, 0.5, 1, 2, 2, 1],
[1, 2, 1, 1, 1, 1, 2, 0.5, 1, 1, 1, 1, 1, 0, 1, 1, 0.5]
]
let typingcells_6 = document.querySelectorAll(".typing_6")
let t_6 = 0
let c_6 = 0
let d_6 = 0
let duotypeArray_6 = []

// Delete values of all types
typingcells_6.forEach(cell => {
    cell.innerHTML = ''
    })

const fullTyping_6 = () => {
    if (theselect_6.value !== "") {
    fetch("https://pokeapi.co/api/v2/pokemon/"+theselect_6.value)
        .then((response) => {
        if (!response.ok) {
        alert("Error");
        throw new Error("error");
        }
        return response.json()
        })
        .then((data_6) => {
        let type = data_6.types[0].type.name
                if ((data_6.types[0].type.name) == "fairy" && typeof (data_6.types[1]) == "undefined") {
                    {t_6 = 0}
                    {
                        typingcells_6.forEach(cell => {
                            cell.innerHTML=(typingArray_6[t_6][c_6])
                            c_6++
                        })
                    } }
                    else if ((data_6.types[0].type.name) == "normal" && typeof (data_6.types[1]) == "undefined") {
                        {t_6 = 0}
                        {
                            typingcells_6.forEach(cell => {
                                cell.innerHTML=(typingArray_6[t_6][c_6])
                                c_6++
                            })
                        } }
                    else if ((data_6.types[0].type.name) == "normal" && (data_6.types[1].type.name) == "fairy") {
                        {t_6 = 10}
                        {
                            typingcells_6.forEach(cell => {
                                cell.innerHTML=(typingArray_6[t_6][c_6])
                                c_6++
                            })
                        } }
            else if (typeof (data_6.types[1]) == "undefined" || (data_6.types[1].type.name) == "fairy") {
                if (type == 'normal') 
                {t_6 = 0}
                else if (type == 'fighting') 
                {t_6 = 1}
                else if (type == 'flying') 
                {t_6 = 2}
                else if (type == 'poison') 
                {t_6 = 3}
                else if (type == 'ground') 
                {t_6 = 4}
                else if (type == 'rock') 
                {t_6 = 5}
                else if (type == 'bug') 
                {t_6 = 6}
                else if (type == 'ghost') 
                {t_6 = 7}
                else if (type == 'steel') 
                {t_6 = 8}
                else if (type == 'fire') 
                {t_6 = 9}
                else if (type == 'water') 
                {t_6 = 10}
                else if (type == 'grass') 
                {t_6 = 11}
                else if (type == 'electric') 
                {t_6 = 12}
                else if (type == 'psychic') 
                {t_6 = 13}
                else if (type == 'ice') 
                {t_6 = 14}
                else if (type == 'dragon') 
                {t_6 = 15}
                else if (type == 'dark') 
                {t_6 = 16}
                
                {
                    typingcells_6.forEach(cell => {
                        cell.innerHTML=(typingArray_6[t_6][c_6])
                        c_6++
                    })
                } 
            } 
  
            

            else 
                {
                let type2_6 = data_6.types[1].type.name

                if (type == 'normal') 
                {t_6 = 0}
                else if (type == 'fighting') 
                {t_6 = 1}
                else if (type == 'flying') 
                {t_6 = 2}
                else if (type == 'poison') 
                {t_6 = 3}
                else if (type == 'ground') 
                {t_6 = 4}
                else if (type == 'rock') 
                {t_6 = 5}
                else if (type == 'bug') 
                {t_6 = 6}
                else if (type == 'ghost') 
                {t_6 = 7}
                else if (type == 'steel') 
                {t_6 = 8}
                else if (type == 'fire') 
                {t_6 = 9}
                else if (type == 'water') 
                {t_6 = 10}
                else if (type == 'grass') 
                {t_6 = 11}
                else if (type == 'electric') 
                {t_6 = 12}
                else if (type == 'psychic') 
                {t_6 = 13}
                else if (type == 'ice') 
                {t_6 = 14}
                else if (type == 'dragon') 
                {t_6 = 15}
                else if (type == 'dark') 
                {t_6 = 16}

                if (type2_6 == 'normal') 
                {d_6 = 0}
                else if (type2_6 == 'fighting') 
                {d_6 = 1}
                else if (type2_6 == 'flying') 
                {d_6 = 2}
                else if (type2_6 == 'poison') 
                {d_6 = 3}
                else if (type2_6 == 'ground') 
                {d_6 = 4}
                else if (type2_6 == 'rock') 
                {d_6 = 5}
                else if (type2_6 == 'bug') 
                {d_6 = 6}
                else if (type2_6 == 'ghost') 
                {d_6 = 7}
                else if (type2_6 == 'steel') 
                {d_6 = 8}
                else if (type2_6 == 'fire') 
                {d_6 = 9}
                else if (type2_6 == 'water') 
                {d_6 = 10}
                else if (type2_6 == 'grass') 
                {d_6 = 11}
                else if (type2_6 == 'electric') 
                {d_6 = 12}
                else if (type2_6 == 'psychic') 
                {d_6 = 13}
                else if (type2_6 == 'ice') 
                {d_6 = 14}
                else if (type2_6 == 'dragon') 
                {d_6 = 15}
                else if (type2_6 == 'dark') 
                {d_6 = 16}
                
                {
                    typingcells_6.forEach(cell => {
                        duotypeArray_6.push(1*typingArray_6[t_6][c_6]*typingArray_6[d_6][c_6])
                        cell.innerHTML=(duotypeArray_6[c_6])
                        c_6++
                    })
                } 

      
                }


                if (typeof (data_6.types[1]) == "undefined") {
                if (theability_6.value == 1) {
                    typingcells_6[10].innerHTML=('0')
                    typingcells_6[9].innerHTML=((typingArray_6[t_6][9])*(1.3))
                }
                if (theability_6.value == 2) {
                    typingcells_6[9].innerHTML=("0")
                }
                if (theability_6.value == 3) {
                    typingcells_6[9].innerHTML=((typingArray_6[t_6][9])*(0.5))
                }
                if (theability_6.value == 4) {
                    typingcells_6[4].innerHTML=('0')
                }
                if (theability_6.value == 5) {
                    typingcells_6[12].innerHTML=('0')
                }
                if (theability_6.value == 6) {
                    typingcells_6[12].innerHTML=('0')
                }
                if (theability_6.value == 7) {
                    typingcells_6[11].innerHTML=('0')
                }
                if (theability_6.value == 8) {
                    typingcells_6[10].innerHTML=('0')
                }
                if (theability_6.value == 9) {
                    typingcells_6[9].innerHTML=((typingArray_6[t_6][9])*(0.5))
                    typingcells_6[14].innerHTML=((typingArray_6[t_6][14])*(0.5))
                }
                if (theability_6.value == 10) {
                    typingcells_6[12].innerHTML=('0')
                }
                if (theability_6.value == 11) {
                    typingcells_6[10].innerHTML=('0')
                }
                if (theability_6.value == 12) {
                    typingcells_6.forEach(cell => {
                        if (cell.textContent.includes("1") && cell.textContent.length == 1) {
                            cell.innerHTML=('0')
                        }
                        if (cell.textContent.includes("0.5")) {
                            cell.innerHTML=('0')
                        }
                    });
                }

            }



            if (typeof (data_6.types[1]) !== "undefined") {
                if (theability_6.value == 1) {
                    typingcells_6[10].innerHTML=('0')
                    typingcells_6[9].innerHTML=((duotypeArray_6[9])*(1.3))
                }
                if (theability_6.value == 2) {
                    typingcells_6[9].innerHTML=("0")
                }
                if (theability_6.value == 3) {
                    typingcells_6[9].innerHTML=((duotypeArray_6[9])*(0.5))
                }
                if (theability_6.value == 4) {
                    typingcells_6[4].innerHTML=('0')
                }
                if (theability_6.value == 5) {
                    typingcells_6[12].innerHTML=('0')
                }
                if (theability_6.value == 6) {
                    typingcells_6[12].innerHTML=('0')
                }
                if (theability_6.value == 7) {
                    typingcells_6[11].innerHTML=('0')
                }
                if (theability_6.value == 8) {
                    typingcells_6[10].innerHTML=('0')
                }
                if (theability_6.value == 9) {
                    typingcells_6[9].innerHTML=((duotypeArray_6[9])*(0.5))
                    typingcells_6[14].innerHTML=((duotypeArray_6[14])*(0.5))
                }
                if (theability_6.value == 10) {
                    typingcells_6[12].innerHTML=('0')
                }
                if (theability_6.value == 11) {
                    typingcells_6[10].innerHTML=('0')
                }
                if (theability_6.value == 12) {
                    typingcells_6.forEach(cell => {
                        if (cell.textContent.includes("1") && cell.textContent.length == 1) {
                            cell.innerHTML=('0')
                        }
                        if (cell.textContent.includes("0.5")) {
                            cell.innerHTML=('0')
                        }
                    });
                }

            }
            storingArray_6 = []
            typingcells_6.forEach(cell => {
                storingArray_6.push(cell.textContent)
            });

            fkinres();

            {
                typingcells_6.forEach(cell => {
                    if (cell.textContent.includes("1") && cell.textContent.length == 1)  {
                        cell.style.backgroundColor = "white"
                    }
                    else if (cell.textContent.includes("0.5")) {
                        cell.style.backgroundColor = "#6FDB59"
                        cell.textContent=('½')
                    }
                    else if (cell.textContent.includes("2") && cell.textContent.length == 1) {
                        cell.style.backgroundColor = "#C03131"
                    }
                    else if (cell.textContent.includes("0") && cell.textContent.length == 1) {
                        cell.style.backgroundColor = "#858584"
                    }
                    else if (cell.textContent.includes("0.25")) {
                        cell.style.backgroundColor = "#52A242"
                        cell.textContent=('¼')
                    }
                    else if (cell.textContent.includes("4") && cell.textContent.length == 1) {
                        cell.style.backgroundColor = "#8F2424"
                    }
                    else if (cell.textContent.includes("0.65")) {
                        cell.style.backgroundColor = "#6FDB59"
                        cell.textContent=('¹³⁄₂₀')
                    }
                    else if (cell.textContent.includes("2.6")) {
                        cell.style.backgroundColor = "#8F2424"
                    }
                    else if (cell.textContent.includes("1.3")) {
                        cell.style.backgroundColor = "#C03131"
                    }
                    else if (cell.textContent.includes("0.125")) {
                        cell.style.backgroundColor = "#52A242"
                        cell.textContent=('⅛')
                    }
                    else if (cell.textContent.includes("5.2")) {
                        cell.style.backgroundColor = "#8F2424"
                    }

                })
            } 
        }    
        )
}   else if (theselect_6.value == "") {
    typingcells_6.forEach(cell => {
        cell.style.backgroundColor = "white"
        storingArray_6 = []
    })}
}
    
fullTyping_6();

    }

theselect_6.addEventListener('change', refresh_6)

theability_6.addEventListener('change', () => {
    refresh_6()
})


