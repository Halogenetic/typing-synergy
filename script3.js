// i = index of the pokemon / value of options
let i_3 = 1;
// Select button
let theselect_3 = document.querySelector(".selectpoke_3")
let theability_3 = document.querySelector(".ability_3")

let storingArray_3 = []




setTimeout(() => {
    new Selectr(theselect_3)
  }, "500")





// Function to create options (pokemons names + index in value) with an API
const optionlist_3 = () => {
        fetch("https://pokeapi.co/api/v2/pokemon-species?offset=0&limit=644")
          .then((response) => {
            if (!response.ok) {
              alert("Error");
              throw new Error("No Data");
            }
            return response.json()
          })
          .then((data_3) => 
            data_3.results.forEach(pokemon => {
                const theselect_3 = document.querySelector(".selectpoke_3")
                const createoption = document.createElement("option")
                createoption.value=(i_3)
                createoption.innerHTML=(pokemon.name)
                theselect_3.appendChild(createoption)

                i_3++
            }))
      }

optionlist_3();

// Select button generating image, duotype and typing
const refresh_3 = () => {

const allduotype_3 = document.querySelectorAll(".typez_3")
const icones_3 = document.querySelector(".icones_3")

// Delete duotype of all types
allduotype_3.forEach(type => {
type.innerHTML = ''
})

// Create duotype in type 
        const typelist_3 = () => {
            if (theselect_3.value !== "") {
            fetch("https://pokeapi.co/api/v2/pokemon/"+theselect_3.value)
                .then((response) => {
                if (!response.ok) {
                alert("Error");
                throw new Error("error");
                }
                return response.json()
                })
                .then((data_3) => 
                    allduotype_3.forEach(type => {
                        if ((data_3.types[0].type.name) == "normal" && typeof (data_3.types[1]) == "undefined") {
                            if (type.classList.contains(data_3.types[0].type.name)) {
                                type.innerHTML = data_3.types[0].type.name
                                type.style.height = "50%";
                                type.style.paddingTop = "15%";}}
                       else if ((data_3.types[0].type.name) == "normal" && (data_3.types[1].type.name) == "fairy") {
                        if (type.classList.contains("water")) {
                        type.innerHTML = "water"
                        type.style.height = "100%";
                        type.style.paddingTop = "40%"; }}

                        else if ((data_3.types[0].type.name) == "fairy") {
                            if (type.classList.contains(data_3.past_types[0].types[0].type.name)) {
                                type.innerHTML = data_3.past_types[0].types[0].type.name
                                type.style.height = "100%";
                                type.style.paddingTop = "40%"; }
                        }

                        else if (type.classList.contains(data_3.types[0].type.name)) {
                            type.innerHTML = data_3.types[0].type.name
                            type.style.height = "50%";
                            type.style.paddingTop = "15%";
                        }
                        if (typeof (data_3.types[1]) !== "undefined"){
                            if ((data_3.types[1].type.name) == "fairy") {
                                type.style.height = "100%";
                                type.style.paddingTop = "40%";
                            }
                            else if (type.classList.contains(data_3.types[1].type.name)) {
                                type.innerHTML = data_3.types[1].type.name
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
            
        typelist_3();

// Create image in icones
        const displayImage_3 = () => {
            if (theselect_3.value !== "") {
            fetch("https://pokeapi.co/api/v2/pokemon/"+theselect_3.value)
                .then((response) => {
                if (!response.ok) {
                alert("Error");
                throw new Error("error");
                }
                return response.json()
                })
                .then((data_3) => 
                    icones_3.src = data_3.sprites.front_default
                )
            } else {
                icones_3.src = "./images/imicon.png"
            }
        }
             
displayImage_3(); 


// Create the typing
let typingArray_3 = [
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
let typingcells_3 = document.querySelectorAll(".typing_3")
let t_3 = 0
let c_3 = 0
let d_3 = 0
let duotypeArray_3 = []

// Delete values of all types
typingcells_3.forEach(cell => {
    cell.innerHTML = ''
    })

const fullTyping_3 = () => {
    if (theselect_3.value !== "") {
    fetch("https://pokeapi.co/api/v2/pokemon/"+theselect_3.value)
        .then((response) => {
        if (!response.ok) {
        alert("Error");
        throw new Error("error");
        }
        return response.json()
        })
        .then((data_3) => {
        let type = data_3.types[0].type.name
                if ((data_3.types[0].type.name) == "fairy" && typeof (data_3.types[1]) == "undefined") {
                    {t_3 = 0}
                    {
                        typingcells_3.forEach(cell => {
                            cell.innerHTML=(typingArray_3[t_3][c_3])
                            c_3++
                        })
                    } }
                    else if ((data_3.types[0].type.name) == "normal" && typeof (data_3.types[1]) == "undefined") {
                        {t_3 = 0}
                        {
                            typingcells_3.forEach(cell => {
                                cell.innerHTML=(typingArray_3[t_3][c_3])
                                c_3++
                            })
                        } }
                    else if ((data_3.types[0].type.name) == "normal" && (data_3.types[1].type.name) == "fairy") {
                        {t_3 = 10}
                        {
                            typingcells_3.forEach(cell => {
                                cell.innerHTML=(typingArray_3[t_3][c_3])
                                c_3++
                            })
                        } }
            else if (typeof (data_3.types[1]) == "undefined" || (data_3.types[1].type.name) == "fairy") {
                if (type == 'normal') 
                {t_3 = 0}
                else if (type == 'fighting') 
                {t_3 = 1}
                else if (type == 'flying') 
                {t_3 = 2}
                else if (type == 'poison') 
                {t_3 = 3}
                else if (type == 'ground') 
                {t_3 = 4}
                else if (type == 'rock') 
                {t_3 = 5}
                else if (type == 'bug') 
                {t_3 = 6}
                else if (type == 'ghost') 
                {t_3 = 7}
                else if (type == 'steel') 
                {t_3 = 8}
                else if (type == 'fire') 
                {t_3 = 9}
                else if (type == 'water') 
                {t_3 = 10}
                else if (type == 'grass') 
                {t_3 = 11}
                else if (type == 'electric') 
                {t_3 = 12}
                else if (type == 'psychic') 
                {t_3 = 13}
                else if (type == 'ice') 
                {t_3 = 14}
                else if (type == 'dragon') 
                {t_3 = 15}
                else if (type == 'dark') 
                {t_3 = 16}
                
                {
                    typingcells_3.forEach(cell => {
                        cell.innerHTML=(typingArray_3[t_3][c_3])
                        c_3++
                    })
                } 
            } 
  
            

            else 
                {
                let type2_3 = data_3.types[1].type.name

                if (type == 'normal') 
                {t_3 = 0}
                else if (type == 'fighting') 
                {t_3 = 1}
                else if (type == 'flying') 
                {t_3 = 2}
                else if (type == 'poison') 
                {t_3 = 3}
                else if (type == 'ground') 
                {t_3 = 4}
                else if (type == 'rock') 
                {t_3 = 5}
                else if (type == 'bug') 
                {t_3 = 6}
                else if (type == 'ghost') 
                {t_3 = 7}
                else if (type == 'steel') 
                {t_3 = 8}
                else if (type == 'fire') 
                {t_3 = 9}
                else if (type == 'water') 
                {t_3 = 10}
                else if (type == 'grass') 
                {t_3 = 11}
                else if (type == 'electric') 
                {t_3 = 12}
                else if (type == 'psychic') 
                {t_3 = 13}
                else if (type == 'ice') 
                {t_3 = 14}
                else if (type == 'dragon') 
                {t_3 = 15}
                else if (type == 'dark') 
                {t_3 = 16}

                if (type2_3 == 'normal') 
                {d_3 = 0}
                else if (type2_3 == 'fighting') 
                {d_3 = 1}
                else if (type2_3 == 'flying') 
                {d_3 = 2}
                else if (type2_3 == 'poison') 
                {d_3 = 3}
                else if (type2_3 == 'ground') 
                {d_3 = 4}
                else if (type2_3 == 'rock') 
                {d_3 = 5}
                else if (type2_3 == 'bug') 
                {d_3 = 6}
                else if (type2_3 == 'ghost') 
                {d_3 = 7}
                else if (type2_3 == 'steel') 
                {d_3 = 8}
                else if (type2_3 == 'fire') 
                {d_3 = 9}
                else if (type2_3 == 'water') 
                {d_3 = 10}
                else if (type2_3 == 'grass') 
                {d_3 = 11}
                else if (type2_3 == 'electric') 
                {d_3 = 12}
                else if (type2_3 == 'psychic') 
                {d_3 = 13}
                else if (type2_3 == 'ice') 
                {d_3 = 14}
                else if (type2_3 == 'dragon') 
                {d_3 = 15}
                else if (type2_3 == 'dark') 
                {d_3 = 16}
                
                {
                    typingcells_3.forEach(cell => {
                        duotypeArray_3.push(1*typingArray_3[t_3][c_3]*typingArray_3[d_3][c_3])
                        cell.innerHTML=(duotypeArray_3[c_3])
                        c_3++
                    })
                } 

      
                }


                if (typeof (data_3.types[1]) == "undefined") {
                if (theability_3.value == 1) {
                    typingcells_3[10].innerHTML=('0')
                    typingcells_3[9].innerHTML=((typingArray_3[t_3][9])*(1.3))
                }
                if (theability_3.value == 2) {
                    typingcells_3[9].innerHTML=("0")
                }
                if (theability_3.value == 3) {
                    typingcells_3[9].innerHTML=((typingArray_3[t_3][9])*(0.5))
                }
                if (theability_3.value == 4) {
                    typingcells_3[4].innerHTML=('0')
                }
                if (theability_3.value == 5) {
                    typingcells_3[12].innerHTML=('0')
                }
                if (theability_3.value == 6) {
                    typingcells_3[12].innerHTML=('0')
                }
                if (theability_3.value == 7) {
                    typingcells_3[11].innerHTML=('0')
                }
                if (theability_3.value == 8) {
                    typingcells_3[10].innerHTML=('0')
                }
                if (theability_3.value == 9) {
                    typingcells_3[9].innerHTML=((typingArray_3[t_3][9])*(0.5))
                    typingcells_3[14].innerHTML=((typingArray_3[t_3][14])*(0.5))
                }
                if (theability_3.value == 10) {
                    typingcells_3[12].innerHTML=('0')
                }
                if (theability_3.value == 11) {
                    typingcells_3[10].innerHTML=('0')
                }
                if (theability_3.value == 12) {
                    typingcells_3.forEach(cell => {
                        if (cell.textContent.includes("1") && cell.textContent.length == 1) {
                            cell.innerHTML=('0')
                        }
                        if (cell.textContent.includes("0.5")) {
                            cell.innerHTML=('0')
                        }
                    });
                }

            }



            if (typeof (data_3.types[1]) !== "undefined") {
                if (theability_3.value == 1) {
                    typingcells_3[10].innerHTML=('0')
                    typingcells_3[9].innerHTML=((duotypeArray_3[9])*(1.3))
                }
                if (theability_3.value == 2) {
                    typingcells_3[9].innerHTML=("0")
                }
                if (theability_3.value == 3) {
                    typingcells_3[9].innerHTML=((duotypeArray_3[9])*(0.5))
                }
                if (theability_3.value == 4) {
                    typingcells_3[4].innerHTML=('0')
                }
                if (theability_3.value == 5) {
                    typingcells_3[12].innerHTML=('0')
                }
                if (theability_3.value == 6) {
                    typingcells_3[12].innerHTML=('0')
                }
                if (theability_3.value == 7) {
                    typingcells_3[11].innerHTML=('0')
                }
                if (theability_3.value == 8) {
                    typingcells_3[10].innerHTML=('0')
                }
                if (theability_3.value == 9) {
                    typingcells_3[9].innerHTML=((duotypeArray_3[9])*(0.5))
                    typingcells_3[14].innerHTML=((duotypeArray_3[14])*(0.5))
                }
                if (theability_3.value == 10) {
                    typingcells_3[12].innerHTML=('0')
                }
                if (theability_3.value == 11) {
                    typingcells_3[10].innerHTML=('0')
                }
                if (theability_3.value == 12) {
                    typingcells_3.forEach(cell => {
                        if (cell.textContent.includes("1") && cell.textContent.length == 1) {
                            cell.innerHTML=('0')
                        }
                        if (cell.textContent.includes("0.5")) {
                            cell.innerHTML=('0')
                        }
                    });
                }

            }
            storingArray_3 = []
            typingcells_3.forEach(cell => {
                storingArray_3.push(cell.textContent)
            });

            fkinres();

            {
                typingcells_3.forEach(cell => {
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
}   else if (theselect_3.value == "") {
    typingcells_3.forEach(cell => {
        cell.style.backgroundColor = "white"
        storingArray_3 = []
    })}
}
    
fullTyping_3();

    }

theselect_3.addEventListener('change', refresh_3)

theability_3.addEventListener('change', () => {
    refresh_3()
})


