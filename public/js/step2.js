import { h } from '../js/helpers.js'

const changeSelectedPlan = (newPlan) =>{
    document.querySelector('.selected_plan').classList.remove('selected_plan')
    newPlan.classList.add('selected_plan')
}

const toggleBetween = (el1,el2,className) =>{
    el1.classList.toggle(className)
    el2.classList.toggle(className)
}

async function main(){
   const planOptions = h.$('fields2'),
   planBtn = h.$('planBtn'),
   yr = h.attr('data-planType','yr'),
   mo = h.attr('data-planType','mo')

    const fetching = await fetch('../public/data.json'),
    json = await fetching.json()

   h.ev(planOptions,'click',(e)=>{
        if(!e.target.hasAttribute('data-step2Option')) return
        changeSelectedPlan(e.target)
   })
   h.ev(planBtn,'change',(e)=>{
        toggleBetween(mo,yr,'selected_plan_text')
        const pricesData = json.plan.prices[e.target.checked?'yearly':'monthly'],
        pricesElements = document.querySelectorAll('[data-planPrice]')

        pricesElements.forEach(el=>{
            el.textContent = pricesData[el.dataset.planprice]
        })
        
   })
}   
main()