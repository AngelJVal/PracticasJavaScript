function addOnClick(el, func) {
				if(el.addEventListener) {
					el.addEventListener('click', func, false);
				} else {
					el.attachEvent('onclick', func);
				}
			}
			addOnClick(document.getElementById('tss'), toggleStyleSheet);