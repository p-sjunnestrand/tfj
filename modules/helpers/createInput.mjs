export function createLabeledInput(name, id){
    const inputLabel = document.createElement('label');
    const newInput = document.createElement('input');
    newInput.id = id;


    inputLabel.textContent = name;
    inputLabel.append(newInput);
    inputLabel.className = 'labeledInput';
    
    return inputLabel;
};