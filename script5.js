// i = index of the pokemon / value of options
let i_5 = 1;
// Select button
let theselect_5 = document.querySelector(".selectpoke_5")
let theability_5 = document.querySelector(".ability_5")

let storingArray_5 = []

// Function to create options (pokemons names + index in value) with an API
const optionlist_5 = async () => {
        await fetch("https://pokeapi.co/api/v2/pokemon-species?offset=0&limit=644")
          .then((response) => {
            if (!response.ok) {
              alert("Error");
              throw new Error("No Data");
            }
            return response.json()
          })
          .then((data_5) => 
            data_5.results.forEach(pokemon => {
                const theselect_5 = document.querySelector(".selectpoke_5")
                const createoption = document.createElement("option")
                createoption.value=(i_5)
                createoption.innerHTML=(pokemon.name)
                theselect_5.appendChild(createoption)

                i_5++
            }))
            const allrotoms = (`
            <option value="rotom-heat">Rotom-Heat</option>
            <option value="rotom-wash">Rotom-Wash</option>
            <option value="rotom-frost">Rotom-Frost</option>
            <option value="rotom-fan">Rotom-Fan</option>
            <option value="rotom-mow">Rotom-Mow</option>`)
            theselect_5.insertAdjacentHTML('beforeend', allrotoms)
            let m = 480
            for (i=645; i<650; i++) {
            theselect_5.insertBefore(theselect_5.children[i], theselect_5.children[m])
            m++}

            new Selectr(theselect_5)
            new Selectr(theability_5)
      }

optionlist_5();

// Select button generating image, duotype and typing
const refresh_5 = () => {

const allduotype_5 = document.querySelectorAll(".typez_5")
const icones_5 = document.querySelector(".icones_5")

// Delete duotype of all types
allduotype_5.forEach(type => {
type.innerHTML = ''
})

// Create duotype in type 
        const typelist_5 = () => {
            if (theselect_5.value !== "") {
            fetch("https://pokeapi.co/api/v2/pokemon/"+theselect_5.value)
                .then((response) => {
                if (!response.ok) {
                alert("Error");
                throw new Error("error");
                }
                return response.json()
                })
                .then((data_5) => 
                    allduotype_5.forEach(type => {
                        if ((data_5.types[0].type.name) == "normal" && typeof (data_5.types[1]) == "undefined") {
                            if (type.classList.contains(data_5.types[0].type.name)) {
                                type.innerHTML = data_5.types[0].type.name
                                type.style.height = "50%";
                                type.style.paddingTop = "15%";}}
                       else if ((data_5.types[0].type.name) == "normal" && (data_5.types[1].type.name) == "fairy") {
                        if (type.classList.contains("normal")) {
                        type.innerHTML = "normal"
                        type.style.height = "100%";
                        type.style.paddingTop = "40%"; }}

                        else if ((data_5.types[0].type.name) == "fairy") {
                            if (type.classList.contains(data_5.past_types[0].types[0].type.name)) {
                                type.innerHTML = data_5.past_types[0].types[0].type.name
                                type.style.height = "100%";
                                type.style.paddingTop = "40%"; }
                        }

                        else if (type.classList.contains(data_5.types[0].type.name)) {
                            type.innerHTML = data_5.types[0].type.name
                            type.style.height = "50%";
                            type.style.paddingTop = "15%";
                        }
                        if (typeof (data_5.types[1]) !== "undefined"){
                            if ((data_5.types[1].type.name) == "fairy") {
                                type.style.height = "100%";
                                type.style.paddingTop = "40%";
                            }
                            else if (type.classList.contains(data_5.types[1].type.name)) {
                                type.innerHTML = data_5.types[1].type.name
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
            
        typelist_5();

// Create image in icones
        const displayImage_5 = () => {
            if (theselect_5.value !== "") {
            fetch("https://pokeapi.co/api/v2/pokemon/"+theselect_5.value)
                .then((response) => {
                if (!response.ok) {
                alert("Error");
                throw new Error("error");
                }
                return response.json()
                })
                .then((data_5) => 
                    icones_5.src = data_5.sprites.front_default
                )
            } else {
                icones_5.src = "./images/imicon.png"
            }
        }
             
displayImage_5(); 


// Create the typing
let typingArray_5 = [
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
let typingcells_5 = document.querySelectorAll(".typing_5")
let t_5 = 0
let c_5 = 0
let d_5 = 0
let duotypeArray_5 = []

// Delete values of all types
typingcells_5.forEach(cell => {
    cell.innerHTML = ''
    })

const fullTyping_5 = () => {
    if (theselect_5.value !== "") {
    fetch("https://pokeapi.co/api/v2/pokemon/"+theselect_5.value)
        .then((response) => {
        if (!response.ok) {
        alert("Error");
        throw new Error("error");
        }
        return response.json()
        })
        .then((data_5) => {
        let type = data_5.types[0].type.name
                if ((data_5.types[0].type.name) == "fairy" && typeof (data_5.types[1]) == "undefined") {
                    {t_5 = 0}
                    {
                        typingcells_5.forEach(cell => {
                            cell.innerHTML=(typingArray_5[t_5][c_5])
                            c_5++
                        })
                    } }
                    else if ((data_5.types[0].type.name) == "normal" && typeof (data_5.types[1]) == "undefined") {
                        {t_5 = 0}
                        {
                            typingcells_5.forEach(cell => {
                                cell.innerHTML=(typingArray_5[t_5][c_5])
                                c_5++
                            })
                        } }
                    else if ((data_5.types[0].type.name) == "normal" && (data_5.types[1].type.name) == "fairy") {
                        {t_5 = 0}
                        {
                            typingcells_5.forEach(cell => {
                                cell.innerHTML=(typingArray_5[t_5][c_5])
                                c_5++
                            })
                        } }
            else if (typeof (data_5.types[1]) == "undefined" || (data_5.types[1].type.name) == "fairy") {
                if (type == 'normal') 
                {t_5 = 0}
                else if (type == 'fighting') 
                {t_5 = 1}
                else if (type == 'flying') 
                {t_5 = 2}
                else if (type == 'poison') 
                {t_5 = 3}
                else if (type == 'ground') 
                {t_5 = 4}
                else if (type == 'rock') 
                {t_5 = 5}
                else if (type == 'bug') 
                {t_5 = 6}
                else if (type == 'ghost') 
                {t_5 = 7}
                else if (type == 'steel') 
                {t_5 = 8}
                else if (type == 'fire') 
                {t_5 = 9}
                else if (type == 'water') 
                {t_5 = 10}
                else if (type == 'grass') 
                {t_5 = 11}
                else if (type == 'electric') 
                {t_5 = 12}
                else if (type == 'psychic') 
                {t_5 = 13}
                else if (type == 'ice') 
                {t_5 = 14}
                else if (type == 'dragon') 
                {t_5 = 15}
                else if (type == 'dark') 
                {t_5 = 16}
                
                {
                    typingcells_5.forEach(cell => {
                        cell.innerHTML=(typingArray_5[t_5][c_5])
                        c_5++
                    })
                } 
            } 
  
            

            else 
                {
                let type2_5 = data_5.types[1].type.name

                if (type == 'normal') 
                {t_5 = 0}
                else if (type == 'fighting') 
                {t_5 = 1}
                else if (type == 'flying') 
                {t_5 = 2}
                else if (type == 'poison') 
                {t_5 = 3}
                else if (type == 'ground') 
                {t_5 = 4}
                else if (type == 'rock') 
                {t_5 = 5}
                else if (type == 'bug') 
                {t_5 = 6}
                else if (type == 'ghost') 
                {t_5 = 7}
                else if (type == 'steel') 
                {t_5 = 8}
                else if (type == 'fire') 
                {t_5 = 9}
                else if (type == 'water') 
                {t_5 = 10}
                else if (type == 'grass') 
                {t_5 = 11}
                else if (type == 'electric') 
                {t_5 = 12}
                else if (type == 'psychic') 
                {t_5 = 13}
                else if (type == 'ice') 
                {t_5 = 14}
                else if (type == 'dragon') 
                {t_5 = 15}
                else if (type == 'dark') 
                {t_5 = 16}

                if (type2_5 == 'normal') 
                {d_5 = 0}
                else if (type2_5 == 'fighting') 
                {d_5 = 1}
                else if (type2_5 == 'flying') 
                {d_5 = 2}
                else if (type2_5 == 'poison') 
                {d_5 = 3}
                else if (type2_5 == 'ground') 
                {d_5 = 4}
                else if (type2_5 == 'rock') 
                {d_5 = 5}
                else if (type2_5 == 'bug') 
                {d_5 = 6}
                else if (type2_5 == 'ghost') 
                {d_5 = 7}
                else if (type2_5 == 'steel') 
                {d_5 = 8}
                else if (type2_5 == 'fire') 
                {d_5 = 9}
                else if (type2_5 == 'water') 
                {d_5 = 10}
                else if (type2_5 == 'grass') 
                {d_5 = 11}
                else if (type2_5 == 'electric') 
                {d_5 = 12}
                else if (type2_5 == 'psychic') 
                {d_5 = 13}
                else if (type2_5 == 'ice') 
                {d_5 = 14}
                else if (type2_5 == 'dragon') 
                {d_5 = 15}
                else if (type2_5 == 'dark') 
                {d_5 = 16}
                
                {
                    typingcells_5.forEach(cell => {
                        duotypeArray_5.push(1*typingArray_5[t_5][c_5]*typingArray_5[d_5][c_5])
                        cell.innerHTML=(duotypeArray_5[c_5])
                        c_5++
                    })
                } 

      
                }


                if (typeof (data_5.types[1]) == "undefined") {
                if (theability_5.value == 1) {
                    typingcells_5[10].innerHTML=('0')
                    typingcells_5[9].innerHTML=((typingArray_5[t_5][9])*(1.3))
                }
                if (theability_5.value == 2) {
                    typingcells_5[9].innerHTML=("0")
                }
                if (theability_5.value == 3) {
                    typingcells_5[9].innerHTML=((typingArray_5[t_5][9])*(0.5))
                }
                if (theability_5.value == 4) {
                    typingcells_5[4].innerHTML=('0')
                }
                if (theability_5.value == 5) {
                    typingcells_5[12].innerHTML=('0')
                }
                if (theability_5.value == 6) {
                    typingcells_5[12].innerHTML=('0')
                }
                if (theability_5.value == 7) {
                    typingcells_5[11].innerHTML=('0')
                }
                if (theability_5.value == 8) {
                    typingcells_5[10].innerHTML=('0')
                }
                if (theability_5.value == 9) {
                    typingcells_5[9].innerHTML=((typingArray_5[t_5][9])*(0.5))
                    typingcells_5[14].innerHTML=((typingArray_5[t_5][14])*(0.5))
                }
                if (theability_5.value == 10) {
                    typingcells_5[12].innerHTML=('0')
                }
                if (theability_5.value == 11) {
                    typingcells_5[10].innerHTML=('0')
                }
                if (theability_5.value == 12) {
                    typingcells_5.forEach(cell => {
                        if (cell.textContent.includes("1") && cell.textContent.length == 1) {
                            cell.innerHTML=('0')
                        }
                        if (cell.textContent.includes("0.5")) {
                            cell.innerHTML=('0')
                        }
                    });
                }

            }



            if (typeof (data_5.types[1]) !== "undefined") {
                if (theability_5.value == 1) {
                    typingcells_5[10].innerHTML=('0')
                    typingcells_5[9].innerHTML=((duotypeArray_5[9])*(1.3))
                }
                if (theability_5.value == 2) {
                    typingcells_5[9].innerHTML=("0")
                }
                if (theability_5.value == 3) {
                    typingcells_5[9].innerHTML=((duotypeArray_5[9])*(0.5))
                }
                if (theability_5.value == 4) {
                    typingcells_5[4].innerHTML=('0')
                }
                if (theability_5.value == 5) {
                    typingcells_5[12].innerHTML=('0')
                }
                if (theability_5.value == 6) {
                    typingcells_5[12].innerHTML=('0')
                }
                if (theability_5.value == 7) {
                    typingcells_5[11].innerHTML=('0')
                }
                if (theability_5.value == 8) {
                    typingcells_5[10].innerHTML=('0')
                }
                if (theability_5.value == 9) {
                    typingcells_5[9].innerHTML=((duotypeArray_5[9])*(0.5))
                    typingcells_5[14].innerHTML=((duotypeArray_5[14])*(0.5))
                }
                if (theability_5.value == 10) {
                    typingcells_5[12].innerHTML=('0')
                }
                if (theability_5.value == 11) {
                    typingcells_5[10].innerHTML=('0')
                }
                if (theability_5.value == 12) {
                    typingcells_5.forEach(cell => {
                        if (cell.textContent.includes("1") && cell.textContent.length == 1) {
                            cell.innerHTML=('0')
                        }
                        if (cell.textContent.includes("0.5")) {
                            cell.innerHTML=('0')
                        }
                    });
                }

            }
            storingArray_5 = []
            typingcells_5.forEach(cell => {
                storingArray_5.push(cell.textContent)
            });

            fkinres();

            {
                typingcells_5.forEach(cell => {
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
}   else if (theselect_5.value == "") {
    typingcells_5.forEach(cell => {
        cell.style.backgroundColor = "white"
        storingArray_5 = []

        fkinres();

    })}
}
    
fullTyping_5();

    }

theselect_5.addEventListener('change', refresh_5)

theability_5.addEventListener('change', () => {
    refresh_5()
})


