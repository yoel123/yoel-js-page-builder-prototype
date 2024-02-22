
var yqs = (selector)=>{return selector==""?null:document.querySelector(selector)}
var yqsa = (selector)=>{return document.querySelectorAll(selector)}

var ylog = (str)=>{console.log(str)}

var yjson = async (url)=>
{
	const response = await fetch(url);
	var data = await response.json()
	return data
}//end yjson

var yload = async (url,el)=>
{
	const response = await fetch(url);
	const body = await response.text();

	el.innerHTML = body;
}//end yload

var yready = (fn)=>
{
	if (document.readyState !== 'loading') 
	{
		fn();
	} else 
	{
		document.addEventListener('DOMContentLoaded', fn);
	}
}//end ready

var yhtml = (el,ystring)=>{el.innerHTML = ystring;}
var yget_html = (el)=>{return el.innerHTML}

var yappend = (yparent,el)=>{yparent.innerHTML +=el;}

var yremove_multi = (selector)=>
{
	for (const el of document.querySelectorAll(selector)) {
	  el.remove();
	}
}

function yaddEventListener(el, eventName, eventHandler, selector) {
	//if delgate event handling
	if (selector) 
	{	
		const wrappedHandler = (e) => 
		{
			if (!e.target) return;
			//get closest element with seletor
			el = e.target.closest(selector);
			if (el) 
			{
				eventHandler.call(el, e);
			}
		};
		el.addEventListener(eventName, wrappedHandler);
		return wrappedHandler;
	} 
	else 
	{
		//regular event handling
		const wrappedHandler = (e) => 
		{
			eventHandler.call(el, e);
		};
		el.addEventListener(eventName, wrappedHandler);
		return wrappedHandler;
	}
}//end yaddEventListener


var yshow = (el)=>{ el.style.display = '';}
var yhide = (el)=>{ el.style.display = 'none';}

var yeach = (obj,func)=>
{
	for (const [key, val] of Object.entries(obj)) 
	{
		func(key,val)
	}
}//end yeach

var yeachr = (array,func)=>
{
	array.forEach((item, i) => 
	{
		func(i,item)
	});
}//end yeachr

	
var ysattr = (el,name,val)=>{el.setAttribute(name,val);}//end ysattr
var ygattr = (el,name)=>{return el.getAttribute(name);}//end ygattr
var yval = (el)=>
{
	
	if (el.options && el.multiple) 
	{
		return el.options
		.filter((option) => option.selected)
		.map((option) => option.value);
	} else 
	{
		return el.value;
	}
	
}//end yval

var yadd_class = (el,name)=>{el.classList.add(name);}

var yprev = (el,selector)=>
{
	const prevEl = el.previousElementSibling;
	if (!selector || (prevEl && prevEl.matches(selector))) 
	{
		return prevEl;
	}
	return null;
}//end yprev

var ynext = (el,selector)=>
{
	const nextEl = el.nextElementSibling;
	if (!selector || (nextEl && nextEl.matches(selector))) 
	{
		return nextEl;
	}
	return null;
}//end ynext
	
var yhas_calss = (el,class_name)=>{return el.classList.contains(class_name);}
var yparent = (el)=>{return el.parentNode;}


var yval = (el)=>{
	
	if (el.options && el.multiple) 
	{
	  return el.options
	  .filter((option) => option.selected)
	  .map((option) => option.value);
	} else 
	{
		return el.value;
	}
}//end yval
var yvals = (el,nval)=>{ el.value = nval}
//var yfunc = ()=>{}