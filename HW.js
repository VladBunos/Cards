//CONST=================================================================================================================
const data = [];
const title = document.querySelector('#title');
const description = document.querySelector('#description')
const btnSubmit = document.querySelector('#btnSubmit')
const modalTitle = document.querySelector('#modal-title');
const modalDescription = document.querySelector('#modal-description')
const modalBtnSubmit = document.querySelector('#modal-btn-submit')
const modalBtnCancel = document.querySelector('#modal-btn-cancel')
const desk = document.querySelector('#desk')
const modal = document.querySelector('#modal')
let cardTitle = undefined;
let cardDescription = undefined;
let titleRepalced = undefined;
let descriptionRepalced = undefined;



//FUNCTIONS============================================================================================================
function getTitleValue(){
    return title.value
}

function getDescriptionValue(){
    return description.value
}

function getModalTitleValue(){
    return modalTitle.value
}

function getModalDescriptionValue(){
    return modalDescription.value
}

function addData(title, description){
    let date = new Date();
    console.log(date)
    data.push({title: title, description: description, date: date})
}

function createCardLent(){
    desk.innerHTML = ``
    data.forEach(arrayElement =>{
        desk.innerHTML += 
        `<div class="desk-card">
             <p class="card-title">Заголовок: ${arrayElement.title}</p>
             <p class="card-description">Описание: ${arrayElement.description}</p>
             <p>Дата: ${arrayElement.date}</p>
             <button class="btn" id="btnDelete">Удалить</button> <button class="btn" id="btnEdit">Редактировать</button>
        </div>`
    })
}


function deleteOrEditCard(cardTitle, cardDescription, isDelete){
    let counter = -1;
    let flag = true;
    for (let element of data){
        counter++
        if (element.title === cardTitle && element.description === cardDescription && flag){
            if (isDelete){
                data.splice([counter], 1);    
            } else {
                let dateToStay = element.date;
                data.splice([counter], 1, {title: titleRepalced, description: descriptionRepalced, date: dateToStay});
                console.log(data)
            }          
            flag = false
        }
    }
    createCardLent(); 
}



function openModal(){   
    modal.style.display = "block"
}

function closeModal(){
    modal.style.display ='none'
}



//INTERACTIVE===========================================================================================================
btnSubmit.addEventListener('click', (event)=>{
    event.preventDefault()
    const titleValue = getTitleValue();
    const descriptionValue = getDescriptionValue();
    // console.log('Заголовок', titleValue);
    // console.log('Описание', descriptionValue);
    addData(titleValue, descriptionValue);
    createCardLent();  

})

modalBtnSubmit.addEventListener('click', (event) =>{
    event.preventDefault();
    closeModal();
    titleRepalced = getModalTitleValue();
    descriptionRepalced = getModalDescriptionValue();
    deleteOrEditCard(cardTitle, cardDescription, false);
    
})

modalBtnCancel.addEventListener('click', (event)=>{
    event.preventDefault();
    closeModal();
})

desk.addEventListener('click', (event) =>{
    if (event.target.closest('.btn')){
        const deskCard = event.target.closest('.desk-card')
        cardTitle = (deskCard.querySelector(".card-title").textContent).slice(11);
        cardDescription = (deskCard.querySelector(".card-description").textContent).slice(10);

        if(event.target.closest('#btnDelete')){
            deleteOrEditCard(cardTitle, cardDescription, true);
        }

        if(event.target.closest('#btnEdit')){
            openModal(); 
        }

}})











