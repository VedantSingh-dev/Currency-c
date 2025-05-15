import { CCC } from "./currency.js";
const cName = Object.values(CCC);
cName.map((a)=>{
    const html=document.querySelector('#a').innerHTML
    document.querySelector('#a').innerHTML= html+`<option>${a}</option>`
    document.querySelector('#b').innerHTML=html+`<option>${a}</option>`
})
window.flag = function () {
    const a = document.querySelector('#a').value
    document.querySelector('#I1').src = `https://flagsapi.com/${a}/shiny/64.png`
}
window.flag2 = function () {
    const a = document.querySelector('#b').value
    document.querySelector('#I2').src = `https://flagsapi.com/${a}/shiny/64.png`
}
window.rate = async function () {
    const a = value(document.querySelector('#a').value)
    const b = value(document.querySelector('#b').value)
    const request = await fetch(`https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_4myJEDSbzu08aO2Bg5jVzRAyW6LaCi1K9nJOHjn1&currencies=${b}&base_currency=${a}`)
    const Data = await request.json()
    const r=Data.data[b]
    const amount= document.querySelector('input').value
    const total= amount*r
    document.querySelector('p').innerText=`Amount in ${b} = ${total}`
}
function value(a) {
    const b = cName.indexOf(a)
    const cVal = Object.keys(CCC);
    const c = cVal[b]
    return c;
}

