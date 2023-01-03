
const h = {
    $ : (id) => document.getElementById(id),
    byClass : (className) => document.getElementsByClassName(className),
    isValidImput : (input) => input.checkValidity(),
    ev : (el,evtype,fn) => el.addEventListener(evtype,fn),
    toggleStep : (actstepnum,nxtstepnum)=>{
        const actStep = h.$(`step${actstepnum}`),
        nxtStep = h.$(`step${nxtstepnum}`),
        actStepSide = h.$(`stepside${actstepnum}`),
        nxtStepSide = h.$(`stepside${nxtstepnum}`)
        actStep.classList.add('noactual')
        nxtStep.classList.remove('noactual')
        actStepSide.classList.remove('actualstate')
        nxtStepSide.classList.add('actualstate')
        h.$('main').dataset.actual = nxtstepnum
    },
    attr : (attribute,value) => document.querySelector(`[${attribute}=${value}]`),
    getQuery : (parent,selector) => parent.querySelector(selector),
    getAllQuery : (parent,selector) => parent.querySelectorAll(selector)
}
export { h }
