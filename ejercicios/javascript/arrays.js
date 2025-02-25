let characters;
let collectedCharacters = [];
let collectedCharacters2 = [];

const getWomansName = () => characters.filter(character => character.gender == 'female').map(character => character.name);
const getSmallerPeople = () => characters.map(character => ({ ...character, 'height':character.height-10}))
const sumaDePeso = () => characters.map(character => character.mass).reduce((acc, mass) => Number(acc)+Number(mass), 0)
const mediaDeAltura = () => characters.map(character => character.height).reduce((acc, height) => Number(acc)+Number(height), 0)/characters.length
const collectByIndex = (index) => collectedCharacters.push(characters[index])
const collectByName = (characterName) => collectedCharacters.push(characters.find(character => character.name === characterName))
const removeByName = (characterName) => collectedCharacters = collectedCharacters.filter(character => character.name != characterName)
const getCharacterFilms = (characterName) => characters.find(character => character.name === characterName).films
const collectByName2 = (characterName) =>{
    if (collectedCharacters2.find(character => character.name === characterName) != undefined){
        collectedCharacters2 = collectedCharacters2.map(character => character.name === characterName ? {...character, 'amount':character.amount+1}:{...character})
    }
    else{
        collectedCharacters2.push({...characters.find(character => character.name === characterName), 'amount':1})
    }
}
const mediaDeAltura2 = () => collectedCharacters2.map(character => character.height).reduce((acc, height) => Number(acc)+Number(height), 0)/collectedCharacters2.length
const removeByName2 = (characterName) => collectedCharacters2 = collectedCharacters2.filter(character => character.name != characterName)


fetch("https://swapi.py4e.com/api/people")
    .then((res) => res.json())
    .then((data) => {
        characters = data.results;
        // Aquí ejecutaremos las llamadas a las funciones que definiremos más arriba
        console.log(characters);
        console.log(getWomansName());
        console.log(getSmallerPeople());
        console.log(sumaDePeso());
        console.log(mediaDeAltura());
        collectByIndex(2)
        console.log(collectedCharacters);
        collectByName('C-3PO')
        console.log(collectedCharacters);
        removeByName('R2-D2')
        console.log(collectedCharacters);
        console.log(getCharacterFilms('Luke Skywalker'));
        collectByName2('Luke Skywalker')
        collectByName2('Luke Skywalker')
        collectByName2('R2-D2')
        console.log(collectedCharacters2);
        console.log(mediaDeAltura2());
        removeByName2('R2-D2')
        console.log(collectedCharacters2);
    });
