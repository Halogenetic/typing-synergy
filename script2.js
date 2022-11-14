// i = index of the pokemon / value of options
let i_2 = 1;
// Select button
let theselect_2 = document.querySelector(".selectpoke_2")
let theability_2 = document.querySelector(".ability_2")

let storingArray_2 = []



setTimeout(() => {
    new Selectr(theselect_2)
  }, "500")






// Function to create options (pokemons names + index in value) with an API
const optionlist_2 = () => {
        fetch("https://pokeapi.co/api/v2/pokemon-species?offset=0&limit=644")
          .then((response) => {
            if (!response.ok) {
              alert("Error");
              throw new Error("No Data");
            }
            return response.json()
          })
          .then((data_2) => 
            data_2.results.forEach(pokemon => {
                const theselect_2 = document.querySelector(".selectpoke_2")
                const createoption = document.createElement("option")
                createoption.value=(i_2)
                createoption.innerHTML=(pokemon.name)
                theselect_2.appendChild(createoption)

                i_2++
            }))
      }

optionlist_2();

// Select button generating image, duotype and typing
const refresh_2 = () => {

const allduotype_2 = document.querySelectorAll(".typez_2")
const icones_2 = document.querySelector(".icones_2")

// Delete duotype of all types
allduotype_2.forEach(type => {
type.innerHTML = ''
})

// Create duotype in type 
        const typelist_2 = () => {
            if (theselect_2.value !== "") {
            fetch("https://pokeapi.co/api/v2/pokemon/"+theselect_2.value)
                .then((response) => {
                if (!response.ok) {
                alert("Error");
                throw new Error("error");
                }
                return response.json()
                })
                .then((data_2) => 
                    allduotype_2.forEach(type => {
                        if ((data_2.types[0].type.name) == "normal" && typeof (data_2.types[1]) == "undefined") {
                            if (type.classList.contains(data_2.types[0].type.name)) {
                                type.innerHTML = data_2.types[0].type.name
                                type.style.height = "50%";
                                type.style.paddingTop = "15%";}}
                       else if ((data_2.types[0].type.name) == "normal" && (data_2.types[1].type.name) == "fairy") {
                        if (type.classList.contains("water")) {
                        type.innerHTML = "water"
                        type.style.height = "100%";
                        type.style.paddingTop = "40%"; }}

                        else if ((data_2.types[0].type.name) == "fairy") {
                            if (type.classList.contains(data_2.past_types[0].types[0].type.name)) {
                                type.innerHTML = data_2.past_types[0].types[0].type.name
                                type.style.height = "100%";
                                type.style.paddingTop = "40%"; }
                        }

                        else if (type.classList.contains(data_2.types[0].type.name)) {
                            type.innerHTML = data_2.types[0].type.name
                            type.style.height = "50%";
                            type.style.paddingTop = "15%";
                        }
                        if (typeof (data_2.types[1]) !== "undefined"){
                            if ((data_2.types[1].type.name) == "fairy") {
                                type.style.height = "100%";
                                type.style.paddingTop = "40%";
                            }
                            else if (type.classList.contains(data_2.types[1].type.name)) {
                                type.innerHTML = data_2.types[1].type.name
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
            
        typelist_2();

// Create image in icones
        const displayImage_2 = () => {
            if (theselect_2.value !== "") {
            fetch("https://pokeapi.co/api/v2/pokemon/"+theselect_2.value)
                .then((response) => {
                if (!response.ok) {
                alert("Error");
                throw new Error("error");
                }
                return response.json()
                })
                .then((data_2) => 
                    icones_2.src = data_2.sprites.front_default
                )
            } else {
                icones_2.src = "./images/imicon.png"
            }
        }
             
displayImage_2(); 


// Create the typing
let typingArray_2 = [
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
let typingcells_2 = document.querySelectorAll(".typing_2")
let t_2 = 0
let c_2 = 0
let d_2 = 0
let duotypeArray_2 = []

// Delete values of all types
typingcells_2.forEach(cell => {
    cell.innerHTML = ''
    })

const fullTyping_2 = () => {
    if (theselect_2.value !== "") {
    fetch("https://pokeapi.co/api/v2/pokemon/"+theselect_2.value)
        .then((response) => {
        if (!response.ok) {
        alert("Error");
        throw new Error("error");
        }
        return response.json()
        })
        .then((data_2) => {
        let type = data_2.types[0].type.name
                if ((data_2.types[0].type.name) == "fairy" && typeof (data_2.types[1]) == "undefined") {
                    {t_2 = 0}
                    {
                        typingcells_2.forEach(cell => {
                            cell.innerHTML=(typingArray_2[t_2][c_2])
                            c_2++
                        })
                    } }
                    else if ((data_2.types[0].type.name) == "normal" && typeof (data_2.types[1]) == "undefined") {
                        {t_2 = 0}
                        {
                            typingcells_2.forEach(cell => {
                                cell.innerHTML=(typingArray_2[t_2][c_2])
                                c_2++
                            })
                        } }
                    else if ((data_2.types[0].type.name) == "normal" && (data_2.types[1].type.name) == "fairy") {
                        {t_2 = 10}
                        {
                            typingcells_2.forEach(cell => {
                                cell.innerHTML=(typingArray_2[t_2][c_2])
                                c_2++
                            })
                        } }
            else if (typeof (data_2.types[1]) == "undefined" || (data_2.types[1].type.name) == "fairy") {
                if (type == 'normal') 
                {t_2 = 0}
                else if (type == 'fighting') 
                {t_2 = 1}
                else if (type == 'flying') 
                {t_2 = 2}
                else if (type == 'poison') 
                {t_2 = 3}
                else if (type == 'ground') 
                {t_2 = 4}
                else if (type == 'rock') 
                {t_2 = 5}
                else if (type == 'bug') 
                {t_2 = 6}
                else if (type == 'ghost') 
                {t_2 = 7}
                else if (type == 'steel') 
                {t_2 = 8}
                else if (type == 'fire') 
                {t_2 = 9}
                else if (type == 'water') 
                {t_2 = 10}
                else if (type == 'grass') 
                {t_2 = 11}
                else if (type == 'electric') 
                {t_2 = 12}
                else if (type == 'psychic') 
                {t_2 = 13}
                else if (type == 'ice') 
                {t_2 = 14}
                else if (type == 'dragon') 
                {t_2 = 15}
                else if (type == 'dark') 
                {t_2 = 16}
                
                {
                    typingcells_2.forEach(cell => {
                        cell.innerHTML=(typingArray_2[t_2][c_2])
                        c_2++
                    })
                } 
            } 
  
            

            else 
                {
                let type2_2 = data_2.types[1].type.name

                if (type == 'normal') 
                {t_2 = 0}
                else if (type == 'fighting') 
                {t_2 = 1}
                else if (type == 'flying') 
                {t_2 = 2}
                else if (type == 'poison') 
                {t_2 = 3}
                else if (type == 'ground') 
                {t_2 = 4}
                else if (type == 'rock') 
                {t_2 = 5}
                else if (type == 'bug') 
                {t_2 = 6}
                else if (type == 'ghost') 
                {t_2 = 7}
                else if (type == 'steel') 
                {t_2 = 8}
                else if (type == 'fire') 
                {t_2 = 9}
                else if (type == 'water') 
                {t_2 = 10}
                else if (type == 'grass') 
                {t_2 = 11}
                else if (type == 'electric') 
                {t_2 = 12}
                else if (type == 'psychic') 
                {t_2 = 13}
                else if (type == 'ice') 
                {t_2 = 14}
                else if (type == 'dragon') 
                {t_2 = 15}
                else if (type == 'dark') 
                {t_2 = 16}

                if (type2_2 == 'normal') 
                {d_2 = 0}
                else if (type2_2 == 'fighting') 
                {d_2 = 1}
                else if (type2_2 == 'flying') 
                {d_2 = 2}
                else if (type2_2 == 'poison') 
                {d_2 = 3}
                else if (type2_2 == 'ground') 
                {d_2 = 4}
                else if (type2_2 == 'rock') 
                {d_2 = 5}
                else if (type2_2 == 'bug') 
                {d_2 = 6}
                else if (type2_2 == 'ghost') 
                {d_2 = 7}
                else if (type2_2 == 'steel') 
                {d_2 = 8}
                else if (type2_2 == 'fire') 
                {d_2 = 9}
                else if (type2_2 == 'water') 
                {d_2 = 10}
                else if (type2_2 == 'grass') 
                {d_2 = 11}
                else if (type2_2 == 'electric') 
                {d_2 = 12}
                else if (type2_2 == 'psychic') 
                {d_2 = 13}
                else if (type2_2 == 'ice') 
                {d_2 = 14}
                else if (type2_2 == 'dragon') 
                {d_2 = 15}
                else if (type2_2 == 'dark') 
                {d_2 = 16}
                
                {
                    typingcells_2.forEach(cell => {
                        duotypeArray_2.push(1*typingArray_2[t_2][c_2]*typingArray_2[d_2][c_2])
                        cell.innerHTML=(duotypeArray_2[c_2])
                        c_2++
                    })
                } 

      
                }


                if (typeof (data_2.types[1]) == "undefined") {
                if (theability_2.value == 1) {
                    typingcells_2[10].innerHTML=('0')
                    typingcells_2[9].innerHTML=((typingArray_2[t_2][9])*(1.3))
                }
                if (theability_2.value == 2) {
                    typingcells_2[9].innerHTML=("0")
                }
                if (theability_2.value == 3) {
                    typingcells_2[9].innerHTML=((typingArray_2[t_2][9])*(0.5))
                }
                if (theability_2.value == 4) {
                    typingcells_2[4].innerHTML=('0')
                }
                if (theability_2.value == 5) {
                    typingcells_2[12].innerHTML=('0')
                }
                if (theability_2.value == 6) {
                    typingcells_2[12].innerHTML=('0')
                }
                if (theability_2.value == 7) {
                    typingcells_2[11].innerHTML=('0')
                }
                if (theability_2.value == 8) {
                    typingcells_2[10].innerHTML=('0')
                }
                if (theability_2.value == 9) {
                    typingcells_2[9].innerHTML=((typingArray_2[t_2][9])*(0.5))
                    typingcells_2[14].innerHTML=((typingArray_2[t_2][14])*(0.5))
                }
                if (theability_2.value == 10) {
                    typingcells_2[12].innerHTML=('0')
                }
                if (theability_2.value == 11) {
                    typingcells_2[10].innerHTML=('0')
                }
                if (theability_2.value == 12) {
                    typingcells_2.forEach(cell => {
                        if (cell.textContent.includes("1") && cell.textContent.length == 1) {
                            cell.innerHTML=('0')
                        }
                        if (cell.textContent.includes("0.5")) {
                            cell.innerHTML=('0')
                        }
                    });
                }

            }



            if (typeof (data_2.types[1]) !== "undefined") {
                if (theability_2.value == 1) {
                    typingcells_2[10].innerHTML=('0')
                    typingcells_2[9].innerHTML=((duotypeArray_2[9])*(1.3))
                }
                if (theability_2.value == 2) {
                    typingcells_2[9].innerHTML=("0")
                }
                if (theability_2.value == 3) {
                    typingcells_2[9].innerHTML=((duotypeArray_2[9])*(0.5))
                }
                if (theability_2.value == 4) {
                    typingcells_2[4].innerHTML=('0')
                }
                if (theability_2.value == 5) {
                    typingcells_2[12].innerHTML=('0')
                }
                if (theability_2.value == 6) {
                    typingcells_2[12].innerHTML=('0')
                }
                if (theability_2.value == 7) {
                    typingcells_2[11].innerHTML=('0')
                }
                if (theability_2.value == 8) {
                    typingcells_2[10].innerHTML=('0')
                }
                if (theability_2.value == 9) {
                    typingcells_2[9].innerHTML=((duotypeArray_2[9])*(0.5))
                    typingcells_2[14].innerHTML=((duotypeArray_2[14])*(0.5))
                }
                if (theability_2.value == 10) {
                    typingcells_2[12].innerHTML=('0')
                }
                if (theability_2.value == 11) {
                    typingcells_2[10].innerHTML=('0')
                }
                if (theability_2.value == 12) {
                    typingcells_2.forEach(cell => {
                        if (cell.textContent.includes("1") && cell.textContent.length == 1) {
                            cell.innerHTML=('0')
                        }
                        if (cell.textContent.includes("0.5")) {
                            cell.innerHTML=('0')
                        }
                    });
                }

            }
            storingArray_2 = []
            typingcells_2.forEach(cell => {
                storingArray_2.push(cell.textContent)
            });

            fkinres();

            {
                typingcells_2.forEach(cell => {
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
}   else if (theselect_2.value == "") {
    typingcells_2.forEach(cell => {
        cell.style.backgroundColor = "white"
        storingArray_2 = []
    })}
}
    
fullTyping_2();

    }

theselect_2.addEventListener('change', refresh_2)

theability_2.addEventListener('change', () => {
    refresh_2()
})


