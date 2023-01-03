import { h } from "../js/helpers.js"

function main(){
    const step3 = h.$('step3')

    h.ev(step3,'click',(e)=>{
        if(!e.target.hasAttribute('data-addon')) return
        e.target.parentElement.classList.toggle('selected_addon')
    })
}
main()