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
   mo = h.attr('data-planType','mo'),
   trial = document.querySelectorAll('[data-trial]')

    const fetching = await fetch('../public/data.json'),
    json = await fetching.json()

   h.ev(planOptions,'click',(e)=>{
        if(e.target.closest('[data-step2Option]') === null) return
        changeSelectedPlan(e.target.closest('[data-step2Option]'))
        
   })
   h.ev(planBtn,'change',(e)=>{
        toggleBetween(mo,yr,'selected_plan_text')
        const planPricesData = json.plan.prices[e.target.checked?'yearly':'monthly'],
        planPricesElements = document.querySelectorAll('[data-planPrice]'),
        addonPricesData = json.addons.prices[e.target.checked?'yearly':'monthly'],
        addonPricesElements = h.getAllQuery(document,'[data-addonPrice]')

        planPricesElements.forEach(el=>{
            el.textContent = planPricesData[el.dataset.planprice]
        })

        addonPricesElements.forEach(el=>{
            el.textContent = addonPricesData[el.dataset.addonprice]
        })

        trial.forEach(el=>el.classList.toggle('noactual'))
        h.$('main').dataset.freq = e.target.checked?'Yearly':'Monthly'
        
   })
}   
main()