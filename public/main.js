import { h } from "../public/js/helpers.js"


function main(){
    const mainWrapper = h.$('main'),
    bkBtn = h.$('bk_btn'),
    nxtBtn = h.$('nxt_btn')
    h.ev(bkBtn,'click',()=>{
        const actualStep = Number(mainWrapper.dataset.actual)
        h.toggleStep(actualStep,actualStep - 1)
        if(actualStep - 1 === 1) bkBtn.classList.add('noactual')
    })
    h.ev(window,'keydown',(e)=>{
        if(e.code === 'Enter') nxtBtn.click()
    })
    h.ev(nxtBtn,'click',()=>{
        const steps = {
            2:()=>{
                h.toggleStep(2,3)
            },
            3:()=>{
                console.log('step3')
            },
            4:()=>{
                console.log('step4')
            },
        }
        steps[Number(mainWrapper.dataset.actual)]?steps[Number(mainWrapper.dataset.actual)]():""  
    })
}
main()