export default RandomText;

function RandomText(props) {
    const current = props.previousValues;
    console.log(current);
    const strings = 
        [
            'patata',
            'potato',
            'azul',
            'rojo',
            'verde',
            'naranja'
        ].filter((currString) => current.length === 0 || current.indexOf(currString) === -1);
    const strLength = strings.length;
    const currentRandom = Math.random();
    const newValue = strings.length > 0 ? strings[Math.floor(currentRandom * strLength)] : "No more!";
    return newValue;
}