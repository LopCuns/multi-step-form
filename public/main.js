import { h } from "../public/js/helpers.js"


function main(){
    const mainWrapper = h.$('main'),
    bkBtn = h.$('bk_btn'),
    nxtBtn = h.$('nxt_btn'),
    form = h.$('form'),
    actualStep = () => Number(mainWrapper.dataset.actual)
    h.ev(bkBtn,'click',()=>{
        h.toggleStep(actualStep(),actualStep() - 1)
        if(actualStep()=== 1) bkBtn.classList.add('noactual')
        h.$('nxt_btn').classList.remove('noactual')
        h.$('sbm_btn').classList.add('noactual')
    })
    h.ev(window,'keydown',(e)=>{
        if(e.code !== 'Enter') return 
        nxtBtn.click()
        e.preventDefault()
    })
    h.ev(nxtBtn,'click',()=>{
        const steps = {
            2:()=>{
                h.toggleStep(2,3)
            },
            3:()=>{
                h.toggleStep(3,4)
                h.$('nxt_btn').classList.toggle('noactual')
                h.$('sbm_btn').classList.toggle('noactual')
            }
        }
        steps[Number(mainWrapper.dataset.actual)]?steps[Number(mainWrapper.dataset.actual)]():""  
    })

    
}
main()