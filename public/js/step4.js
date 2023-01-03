import { h } from "../js/helpers.js"

function main(){
    const step4 = h.$('step4'),
    selectedPlan = document.querySelector('.step2__fields__plan__option__input:checked'),
    planInfo = {"plan_value":selectedPlan.value,"plan_price":document.querySelector(`[data-planPrice=${selectedPlan.value}]`).textContent},
    addons = document.querySelectorAll('.selected_addon'),
    freq = h.$('main').dataset.freq

    h.getQuery(document,'[data-summaryPlanName]').textContent = `${planInfo.plan_value} (${freq})`
    h.getQuery(document,'[data-summaryPlanPrice]').textContent = planInfo.plan_price
    
    h.ev(h.getQuery(document,'[data-summaryPlanChange]'),'click',(e)=>{
        e.preventDefault;
        h.toggleStep(4,2)
        h.$('nxt_btn').classList.remove('noactual')
        h.$('sbm_btn').classList.add('noactual')
    })

    h.getQuery(step4,'.step4__summary__addonsWrapper').textContent = ""

    addons.forEach(addon=>{
        const template = h.$('step4AddonTemplate').content.cloneNode(true)
        h.getQuery(template,'.step4__summary__addons__name').textContent = h.getQuery(addon,'.step3__addon__name').textContent
        h.getQuery(template,'.step4__summary__addons__price').textContent = h.getQuery(addon,'.step3__addon__price').textContent

        h.getQuery(step4,'.step4__summary__addonsWrapper').appendChild(template)
    })

    const addonPrices = Array.from(h.getAllQuery(step4,'.step4__summary__addons')).map(addon=>{
        const rawPrice = h.getQuery(addon,'.step4__summary__addons__price').textContent
        return Number(rawPrice.slice(2,rawPrice.indexOf('/')))
    })
    h.getQuery(step4,'.step4__total__title').textContent = `Total (per ${freq === 'Monthly'?'month':'year'})`
    h.getQuery(step4,'.step4__total__bill').textContent = `+${Number(planInfo.plan_price.slice(1,planInfo.plan_price.indexOf('/'))) + (addonPrices.reduce((a,b)=>a + b,0))}$/${freq==='Monthly'?'mo':'yr'}`


    
}

h.ev(h.$('nxt_btn'),'click',()=>{
    if(Number(h.$('main').dataset.actual) !== 4) return
    main()
    
})