// i = index of the pokemon / value of options
let i_4 = 1;
// Select button
let theselect_4 = document.querySelector(".selectpoke_4")
let theability_4 = document.querySelector(".ability_4")

let storingArray_4 = []




setTimeout(() => {
    const allrotoms = (`
    <option value="rotom-heat">Rotom-Heat</option>
    <option value="rotom-wash">Rotom-Wash</option>
    <option value="rotom-frost">Rotom-Frost</option>
    <option value="rotom-fan">Rotom-Fan</option>
    <option value="rotom-mow">Rotom-Mow</option>`)
    theselect_4.insertAdjacentHTML('beforeend', allrotoms)
    let m = 480
    for (i=645; i<650; i++) {
    theselect_4.insertBefore(theselect_4.children[i], theselect_4.children[m])
    m++}
    new Selectr(theselect_4)
    new Selectr(theability_4)
  }, "500")




// Function to create options (pokemons names + index in value) with an API
const optionlist_4 = () => {
        fetch("https://pokeapi.co/api/v2/pokemon-species?offset=0&limit=644")
          .then((response) => {
            if (!response.ok) {
              alert("Error");
              throw new Error("No Data");
            }
            return response.json()
          })
          .then((data_4) => 
            data_4.results.forEach(pokemon => {
                const theselect_4 = document.querySelector(".selectpoke_4")
                const createoption = document.createElement("option")
                createoption.value=(i_4)
                createoption.innerHTML=(pokemon.name)
                theselect_4.appendChild(createoption)

                i_4++
            }))
      }

optionlist_4();

// Select button generating image, duotype and typing
const refresh_4 = () => {

const allduotype_4 = document.querySelectorAll(".typez_4")
const icones_4 = document.querySelector(".icones_4")

// Delete duotype of all types
allduotype_4.forEach(type => {
type.innerHTML = ''
})

// Create duotype in type 
        const typelist_4 = () => {
            if (theselect_4.value !== "") {
            fetch("https://pokeapi.co/api/v2/pokemon/"+theselect_4.value)
                .then((response) => {
                if (!response.ok) {
                alert("Error");
                throw new Error("error");
                }
                return response.json()
                })
                .then((data_4) => 
                    allduotype_4.forEach(type => {
                        if ((data_4.types[0].type.name) == "normal" && typeof (data_4.types[1]) == "undefined") {
                            if (type.classList.contains(data_4.types[0].type.name)) {
                                type.innerHTML = data_4.types[0].type.name
                                type.style.height = "50%";
                                type.style.paddingTop = "15%";}}
                       else if ((data_4.types[0].type.name) == "normal" && (data_4.types[1].type.name) == "fairy") {
                        if (type.classList.contains("water")) {
                        type.innerHTML = "water"
                        type.style.height = "100%";
                        type.style.paddingTop = "40%"; }}

                        else if ((data_4.types[0].type.name) == "fairy") {
                            if (type.classList.contains(data_4.past_types[0].types[0].type.name)) {
                                type.innerHTML = data_4.past_types[0].types[0].type.name
                                type.style.height = "100%";
                                type.style.paddingTop = "40%"; }
                        }

                        else if (type.classList.contains(data_4.types[0].type.name)) {
                            type.innerHTML = data_4.types[0].type.name
                            type.style.height = "50%";
                            type.style.paddingTop = "15%";
                        }
                        if (typeof (data_4.types[1]) !== "undefined"){
                            if ((data_4.types[1].type.name) == "fairy") {
                                type.style.height = "100%";
                                type.style.paddingTop = "40%";
                            }
                            else if (type.classList.contains(data_4.types[1].type.name)) {
                                type.innerHTML = data_4.types[1].type.name
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
            
        typelist_4();

// Create image in icones
        const displayImage_4 = () => {
            if (theselect_4.value !== "") {
            fetch("https://pokeapi.co/api/v2/pokemon/"+theselect_4.value)
                .then((response) => {
                if (!response.ok) {
                alert("Error");
                throw new Error("error");
                }
                return response.json()
                })
                .then((data_4) => 
                    icones_4.src = data_4.sprites.front_default
                )
            } else {
                icones_4.src = "./images/imicon.png"
            }
        }
             
displayImage_4(); 


// Create the typing
let typingArray_4 = [
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
let typingcells_4 = document.querySelectorAll(".typing_4")
let t_4 = 0
let c_4 = 0
let d_4 = 0
let duotypeArray_4 = []

// Delete values of all types
typingcells_4.forEach(cell => {
    cell.innerHTML = ''
    })

const fullTyping_4 = () => {
    if (theselect_4.value !== "") {
    fetch("https://pokeapi.co/api/v2/pokemon/"+theselect_4.value)
        .then((response) => {
        if (!response.ok) {
        alert("Error");
        throw new Error("error");
        }
        return response.json()
        })
        .then((data_4) => {
        let type = data_4.types[0].type.name
                if ((data_4.types[0].type.name) == "fairy" && typeof (data_4.types[1]) == "undefined") {
                    {t_4 = 0}
                    {
                        typingcells_4.forEach(cell => {
                            cell.innerHTML=(typingArray_4[t_4][c_4])
                            c_4++
                        })
                    } }
                    else if ((data_4.types[0].type.name) == "normal" && typeof (data_4.types[1]) == "undefined") {
                        {t_4 = 0}
                        {
                            typingcells_4.forEach(cell => {
                                cell.innerHTML=(typingArray_4[t_4][c_4])
                                c_4++
                            })
                        } }
                    else if ((data_4.types[0].type.name) == "normal" && (data_4.types[1].type.name) == "fairy") {
                        {t_4 = 10}
                        {
                            typingcells_4.forEach(cell => {
                                cell.innerHTML=(typingArray_4[t_4][c_4])
                                c_4++
                            })
                        } }
            else if (typeof (data_4.types[1]) == "undefined" || (data_4.types[1].type.name) == "fairy") {
                if (type == 'normal') 
                {t_4 = 0}
                else if (type == 'fighting') 
                {t_4 = 1}
                else if (type == 'flying') 
                {t_4 = 2}
                else if (type == 'poison') 
                {t_4 = 3}
                else if (type == 'ground') 
                {t_4 = 4}
                else if (type == 'rock') 
                {t_4 = 5}
                else if (type == 'bug') 
                {t_4 = 6}
                else if (type == 'ghost') 
                {t_4 = 7}
                else if (type == 'steel') 
                {t_4 = 8}
                else if (type == 'fire') 
                {t_4 = 9}
                else if (type == 'water') 
                {t_4 = 10}
                else if (type == 'grass') 
                {t_4 = 11}
                else if (type == 'electric') 
                {t_4 = 12}
                else if (type == 'psychic') 
                {t_4 = 13}
                else if (type == 'ice') 
                {t_4 = 14}
                else if (type == 'dragon') 
                {t_4 = 15}
                else if (type == 'dark') 
                {t_4 = 16}
                
                {
                    typingcells_4.forEach(cell => {
                        cell.innerHTML=(typingArray_4[t_4][c_4])
                        c_4++
                    })
                } 
            } 
  
            

            else 
                {
                let type2_4 = data_4.types[1].type.name

                if (type == 'normal') 
                {t_4 = 0}
                else if (type == 'fighting') 
                {t_4 = 1}
                else if (type == 'flying') 
                {t_4 = 2}
                else if (type == 'poison') 
                {t_4 = 3}
                else if (type == 'ground') 
                {t_4 = 4}
                else if (type == 'rock') 
                {t_4 = 5}
                else if (type == 'bug') 
                {t_4 = 6}
                else if (type == 'ghost') 
                {t_4 = 7}
                else if (type == 'steel') 
                {t_4 = 8}
                else if (type == 'fire') 
                {t_4 = 9}
                else if (type == 'water') 
                {t_4 = 10}
                else if (type == 'grass') 
                {t_4 = 11}
                else if (type == 'electric') 
                {t_4 = 12}
                else if (type == 'psychic') 
                {t_4 = 13}
                else if (type == 'ice') 
                {t_4 = 14}
                else if (type == 'dragon') 
                {t_4 = 15}
                else if (type == 'dark') 
                {t_4 = 16}

                if (type2_4 == 'normal') 
                {d_4 = 0}
                else if (type2_4 == 'fighting') 
                {d_4 = 1}
                else if (type2_4 == 'flying') 
                {d_4 = 2}
                else if (type2_4 == 'poison') 
                {d_4 = 3}
                else if (type2_4 == 'ground') 
                {d_4 = 4}
                else if (type2_4 == 'rock') 
                {d_4 = 5}
                else if (type2_4 == 'bug') 
                {d_4 = 6}
                else if (type2_4 == 'ghost') 
                {d_4 = 7}
                else if (type2_4 == 'steel') 
                {d_4 = 8}
                else if (type2_4 == 'fire') 
                {d_4 = 9}
                else if (type2_4 == 'water') 
                {d_4 = 10}
                else if (type2_4 == 'grass') 
                {d_4 = 11}
                else if (type2_4 == 'electric') 
                {d_4 = 12}
                else if (type2_4 == 'psychic') 
                {d_4 = 13}
                else if (type2_4 == 'ice') 
                {d_4 = 14}
                else if (type2_4 == 'dragon') 
                {d_4 = 15}
                else if (type2_4 == 'dark') 
                {d_4 = 16}
                
                {
                    typingcells_4.forEach(cell => {
                        duotypeArray_4.push(1*typingArray_4[t_4][c_4]*typingArray_4[d_4][c_4])
                        cell.innerHTML=(duotypeArray_4[c_4])
                        c_4++
                    })
                } 

      
                }


                if (typeof (data_4.types[1]) == "undefined") {
                if (theability_4.value == 1) {
                    typingcells_4[10].innerHTML=('0')
                    typingcells_4[9].innerHTML=((typingArray_4[t_4][9])*(1.3))
                }
                if (theability_4.value == 2) {
                    typingcells_4[9].innerHTML=("0")
                }
                if (theability_4.value == 3) {
                    typingcells_4[9].innerHTML=((typingArray_4[t_4][9])*(0.5))
                }
                if (theability_4.value == 4) {
                    typingcells_4[4].innerHTML=('0')
                }
                if (theability_4.value == 5) {
                    typingcells_4[12].innerHTML=('0')
                }
                if (theability_4.value == 6) {
                    typingcells_4[12].innerHTML=('0')
                }
                if (theability_4.value == 7) {
                    typingcells_4[11].innerHTML=('0')
                }
                if (theability_4.value == 8) {
                    typingcells_4[10].innerHTML=('0')
                }
                if (theability_4.value == 9) {
                    typingcells_4[9].innerHTML=((typingArray_4[t_4][9])*(0.5))
                    typingcells_4[14].innerHTML=((typingArray_4[t_4][14])*(0.5))
                }
                if (theability_4.value == 10) {
                    typingcells_4[12].innerHTML=('0')
                }
                if (theability_4.value == 11) {
                    typingcells_4[10].innerHTML=('0')
                }
                if (theability_4.value == 12) {
                    typingcells_4.forEach(cell => {
                        if (cell.textContent.includes("1") && cell.textContent.length == 1) {
                            cell.innerHTML=('0')
                        }
                        if (cell.textContent.includes("0.5")) {
                            cell.innerHTML=('0')
                        }
                    });
                }

            }



            if (typeof (data_4.types[1]) !== "undefined") {
                if (theability_4.value == 1) {
                    typingcells_4[10].innerHTML=('0')
                    typingcells_4[9].innerHTML=((duotypeArray_4[9])*(1.3))
                }
                if (theability_4.value == 2) {
                    typingcells_4[9].innerHTML=("0")
                }
                if (theability_4.value == 3) {
                    typingcells_4[9].innerHTML=((duotypeArray_4[9])*(0.5))
                }
                if (theability_4.value == 4) {
                    typingcells_4[4].innerHTML=('0')
                }
                if (theability_4.value == 5) {
                    typingcells_4[12].innerHTML=('0')
                }
                if (theability_4.value == 6) {
                    typingcells_4[12].innerHTML=('0')
                }
                if (theability_4.value == 7) {
                    typingcells_4[11].innerHTML=('0')
                }
                if (theability_4.value == 8) {
                    typingcells_4[10].innerHTML=('0')
                }
                if (theability_4.value == 9) {
                    typingcells_4[9].innerHTML=((duotypeArray_4[9])*(0.5))
                    typingcells_4[14].innerHTML=((duotypeArray_4[14])*(0.5))
                }
                if (theability_4.value == 10) {
                    typingcells_4[12].innerHTML=('0')
                }
                if (theability_4.value == 11) {
                    typingcells_4[10].innerHTML=('0')
                }
                if (theability_4.value == 12) {
                    typingcells_4.forEach(cell => {
                        if (cell.textContent.includes("1") && cell.textContent.length == 1) {
                            cell.innerHTML=('0')
                        }
                        if (cell.textContent.includes("0.5")) {
                            cell.innerHTML=('0')
                        }
                    });
                }

            }
            storingArray_4 = []
            typingcells_4.forEach(cell => {
                storingArray_4.push(cell.textContent)
            });

            fkinres();

            {
                typingcells_4.forEach(cell => {
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
                    else if (cell.textContent.includes("0.325")) {
                        cell.style.backgroundColor = "#52A242"
                        cell.textContent=('¹³⁄₄₀')
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
}   else if (theselect_4.value == "") {
    typingcells_4.forEach(cell => {
        cell.style.backgroundColor = "white"
        storingArray_4 = []

        fkinres();

    })}
}
    
fullTyping_4();

    }

theselect_4.addEventListener('change', refresh_4)

theability_4.addEventListener('change', () => {
    refresh_4()
})


