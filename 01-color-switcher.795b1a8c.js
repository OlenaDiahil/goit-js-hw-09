!function(){var t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]");t.addEventListener("click",(function(){t.disabled=!0,e.disabled=!1,timerId=setInterval((function(){var t="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0));document.body.style.backgroundColor=t}),1e3)}));e.addEventListener("click",(function(){t.disabled=!1,e.disabled=!0,clearInterval(timerId)}))}();
//# sourceMappingURL=01-color-switcher.795b1a8c.js.map
