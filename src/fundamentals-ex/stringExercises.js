export function returnHello()
{
return "Hello"
}

export function returnAString()
{
    return "Hello World"
    /* Completa la function */
    
}

export function concatenateStrings()
{
    /* Completa la function */
    return "I Love JS"
    
}

export function giveOneLetter(animal, letterToFind)
{
    /* Completa la function */
 const letterPosition = animal.indexOf(letterToFind);
 return animal[letterPosition]
}

export function giveTheIndexOfWord()
{
    const wordToSearch = 'Butterfly';
    const phrase = "Once upon a time!!!";
    const newPhrase = phrase.indexOf(wordToSearch)
    return newPhrase    
}

export function replaceFishWords()
{
    let phrase = 'Give a Man a Fish';
    let newPhrase = phrase.replace("Fish","Pussy Cat");
    return newPhrase
    
}

export function giveAllLettersInUppercase()
{
    let phrase = 'Ride Him, Cowboy!';
    let phraseCapitalLetter= phrase.toUpperCase()
    return phraseCapitalLetter
    
}

export function removeWhiteSpaces()
{
    let phrase = '    Hands Down    ';
    let phraseNoSpaces=phrase.trim();
    return phraseNoSpaces
    
}