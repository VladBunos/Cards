const data = [];
const title = document.querySelector('#title');
const description = document.querySelector('#description')
const btnSubmit = document.querySelector('#btnSubmit')
const desk = document.querySelector('#desk')


function getTitleValue(){
    return title.value
}

function getDescriptionValue(){
    return description.value
}

function addData(title, description){
    data.push({title: title, description: description})
}

function createCardLent(){
    desk.innerHTML = ``
    data.forEach(arrayElement =>{
        desk.innerHTML += 
        `<div class="desk-card">
             <p class="card-title">Заголовок: ${arrayElement.title}</p>
             <p class="card-description">Описание: ${arrayElement.description}</p>
             <p>Date:</p>
             <button class="btn" id="btnDelete">Удалить</button> <button class="btn" id="btnEdit">Редактировать</button>
        </div>`
    })
}

function btnDeleteOptions(event){
    const deskCard = event.target.closest('.desk-card')
    const cardTitle = deskCard.querySelector(".title").textContent;
    const cardDescription = deskCard.querySelector(".description").textContent;
    console.log(cardTitle);
    console.log(cardDescription);
}

function deleteCard(cardTitle, cardDescription){
    let counter = -1;
    for (let element of data){
        counter++
        if(element.title === cardTitle && element.description === cardDescription){
            console.log(data)
            data.splice([counter], 1)
            console.log(data)
        }
    }
    createCardLent(); 
}

btnSubmit.addEventListener('click', (event)=>{
    event.preventDefault()
    const titleValue = getTitleValue();
    const descriptionValue = getDescriptionValue();
    // console.log('Заголовок', titleValue);
    // console.log('Описание', descriptionValue);
    addData(titleValue, descriptionValue);
    console.log(data);
    createCardLent();  
    const btnDelete = document.querySelector('#btnDelete');
    const btnEdit = document.querySelector('#btnEdit');

})


desk.addEventListener('click', (event) =>{
    if (event.target.closest('.btn')){
        if(event.target.closest('#btnDelete')){
            const deskCard = event.target.closest('.desk-card')
            let cardTitle = (deskCard.querySelector(".card-title").textContent).slice(11);
            let cardDescription = (deskCard.querySelector(".card-description").textContent).slice(10);
            // console.log(cardTitle);
            // console.log(cardDescription);
            deleteCard(cardTitle, cardDescription);
        }

}})











