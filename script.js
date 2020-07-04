// code your solution in here
 
//  
    const myDiv = document.getElementById('post-list');
    const header = document.querySelector('#new-post-title');
    const paragraph = document.querySelector('#new-post-content');

    const divSomeSpace= document.createElement('div');
    const divCardBody = document.createElement('div');
    const newHeader = document.createElement('h5');
    const newParagraph = document.createElement('p');

    divSomeSpace.classList.add('card', 'some-space');
    divCardBody.classList.add('card-body');
    newHeader.classList.add('card-title');
    newParagraph.classList.add('card-text');

    divCardBody.appendChild(newHeader);
    divCardBody.appendChild(newParagraph);
    divSomeSpace.appendChild(divCardBody);

    const submit = document.querySelector('#submit-form'); 
    submit.addEventListener('click', ($event) => {
    $event.preventDefault();
    newHeader.textContent = `${header.value}`;
    newParagraph.textContent = `${paragraph.value}`;
    myDiv.appendChild(divSomeSpace);
    });

// checkBox
    const hobbiesTag = document.getElementById('hobbies-tag');
    const schoolLifeTag = document.getElementById('school-life-tag');
    const personalTag = document.getElementById('presonal-tag');


    hobbiesCheckbox.addEventListener('change', ($event) => {

    });

