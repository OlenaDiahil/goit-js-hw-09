!function(){function e(e,n){return new Promise((function(o,t){var c=Math.random()>.3;setTimeout((function(){c?o({position:e,delay:n}):t({position:e,delay:n})}),n)}))}document.querySelector(".form").addEventListener("submit",(function(n){n.preventDefault();for(var o=document.querySelector('[name="delay"]'),t=document.querySelector('[name="step"]'),c=document.querySelector('[name="amount"]'),a=+o.value,i=+t.value,u=+c.value,r=1;r<=u;r++)e(r,a+(r-1)*i).then((function(e){var n=e.position,o=e.delay;console.log("✅ Fulfilled promise ".concat(n," in ").concat(o,"ms"))})).catch((function(e){var n=e.position,o=e.delay;console.log("❌ Rejected promise ".concat(n," in ").concat(o,"ms"))}))}))}();
//# sourceMappingURL=03-promises.9045aba1.js.map
