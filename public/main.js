import { h } from "../public/js/helpers.js"


function main(){
    const mainWrapper = h.$('main'),
    bkBtn = h.$('bk_btn')
    h.ev(bkBtn,'click',()=>{
        const actualStep = Number(mainWrapper.dataset.actual)
        h.toggleStep(actualStep,actualStep - 1)
        if(actualStep - 1 === 1) bkBtn.classList.add('noactual')
    })
}
main()