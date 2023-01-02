import { h } from "../js/helpers.js"
function main(){
    const step1 = h.$('step1'),
    fields = Array.from(step1.querySelectorAll('[data-step1Field]')),
    nxtBtn = h.$('nxt_btn'),
    bkBtn = h.$('bk_btn')
    h.ev(step1,'focusin',(e)=>{
        const el = e.target
        if(!el.hasAttribute('data-step1Field')) return
        resetInput(el)
    })
    h.ev(step1,'focusout',(e)=>{
        const el = e.target
        if(!el.hasAttribute('data-step1Field')) return
        handleInputError(el)
    })
    h.ev(nxtBtn,'click',()=>{
        if (h.$('main').dataset.actual!=="1") return
        fields.forEach(fl=>handleInputError(fl))
        if(fields.every(fl=>h.isValidImput(fl))){
            h.toggleStep(1,2)
            bkBtn.classList.remove('noactual')
        }
        
    })
    

    
}
main()
const resetInput = (input) =>{
    const errMsg = document.querySelector(`.${input.name}__err.step1__errMsg`)
    if(errMsg) input.parentElement.removeChild(errMsg)
    input.classList.remove('invalid_input')
}

const inputErrorMsg = (input) =>{
    return input.value===""?'this field is required':input.dataset.pttrnerror
}
const spanError = (errMsg,className) =>{        
    const span = document.createElement('span')
    span.className = className
    span.textContent = errMsg
    return span
}

const handleInputError = (input) =>{
    resetInput(input)
    if(!h.isValidImput(input)){
        input.classList.add('invalid_input')
        input.parentElement.insertBefore(spanError(inputErrorMsg(input),`${input.name}__err step1__errMsg`),input)
    }
}


