(this.webpackJsonpcity=this.webpackJsonpcity||[]).push([[0],{35:function(e,a,t){},36:function(e,a,t){},37:function(e,a,t){},38:function(e,a,t){},49:function(e,a,t){e.exports=t.p+"static/media/sunrise.8e152057.svg"},50:function(e,a,t){e.exports=t.p+"static/media/sunset.cdc8210e.svg"},51:function(e,a,t){e.exports=t.p+"static/media/droplet.47cfd45b.svg"},52:function(e,a,t){e.exports=t.p+"static/media/wind.8255af02.svg"},54:function(e,a,t){e.exports=t(66)},59:function(e,a,t){},64:function(e){e.exports=JSON.parse('[{"elementType":"geometry","stylers":[{"hue":"#ff4400"},{"saturation":-68},{"lightness":-4},{"gamma":0.72}]},{"featureType":"road","elementType":"labels.icon"},{"featureType":"landscape.man_made","elementType":"geometry","stylers":[{"hue":"#0077ff"},{"gamma":3.1}]},{"featureType":"water","stylers":[{"hue":"#00ccff"},{"gamma":0.44},{"saturation":-33}]},{"featureType":"poi.park","stylers":[{"hue":"#44ff00"},{"saturation":-23}]},{"featureType":"water","elementType":"labels.text.fill","stylers":[{"hue":"#007fff"},{"gamma":0.77},{"saturation":65},{"lightness":99}]},{"featureType":"water","elementType":"labels.text.stroke","stylers":[{"gamma":0.11},{"weight":5.6},{"saturation":99},{"hue":"#0091ff"},{"lightness":-86}]},{"featureType":"transit.line","elementType":"geometry","stylers":[{"lightness":-48},{"hue":"#ff5e00"},{"gamma":1.2},{"saturation":-23}]},{"featureType":"transit","elementType":"labels.text.stroke","stylers":[{"saturation":-64},{"hue":"#ff9100"},{"lightness":16},{"gamma":0.47},{"weight":2.7}]}]')},66:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),s=t(29),c=t.n(s),l=(t(59),t(23)),o=t(24),m=t(27),i=t(25),u=t(28),d=t(15),p=t.n(d),h=t(49),f=t.n(h),v=t(50),g=t.n(v),E=t(51),N=t.n(E),y=t(52),w=t.n(y),C=(t(35),t(36),t(37),t(38),"67b51a761ab09981501241df566ec5c4");function k(){return new Promise((function(e,a){navigator.geolocation.getCurrentPosition(e,a)}))}var b=function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(t=Object(m.a)(this,(e=Object(i.a)(a)).call.apply(e,[this].concat(r)))).state={lat:void 0,lon:void 0,city:void 0,temperatureC:void 0,temperatureF:void 0,temperatureCmin:void 0,temperatureCmax:void 0,temperatureCfeels:void 0,tempdesc:void 0,sunrise:void 0,sunset:void 0,droplet:void 0,wind:void 0,errorMessage:void 0},t.getWeather=function(e,a){var n,r,s,c,l;return p.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,p.a.awrap(fetch("//api.openweathermap.org/data/2.5/weather?lat=".concat(e,"&lon=").concat(a,"&appid=").concat(C,"&units=metric")));case 2:return n=o.sent,o.next=5,p.a.awrap(n.json());case 5:r=o.sent,s=new Date(1e3*r.sys.sunrise),c=new Date(1e3*r.sys.sunset),l=function(e){var a=e.getHours();return a+":"+e.getMinutes()+(a<12?"am":"pm")},t.setState({lat:e,lon:a,city:r.name,temperatureC:Math.round(r.main.temp),temperatureF:Math.round(1.8*r.main.temp+32),temperatureCmin:Math.round(r.main.temp_min),temperatureCmax:Math.round(r.main.temp_max),temperatureCfeels:Math.round(r.main.feels_like),tempdesc:r.weather[0].description,sunrise:l(s),sunset:l(c),droplet:r.main.humidity,wind:r.wind.speed});case 10:case"end":return o.stop()}}))},t}return Object(u.a)(a,e),Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;k().then((function(a){e.getWeather(a.coords.latitude,a.coords.longitude)})).catch((function(a){e.setState({errorMessage:a.message})}))}},{key:"render",value:function(){var e=this.state,a=e.city,t=e.temperatureC,n=e.temperatureCmin,s=e.temperatureCmax,c=e.temperatureCfeels,l=e.tempdesc,o=e.sunrise,m=e.sunset,i=e.droplet,u=e.wind;return a?r.a.createElement("div",{className:"container cityNameInfo location"},r.a.createElement("div",{className:"row weatherrow "},r.a.createElement("h2",{className:"cityName"},a),r.a.createElement("p",{className:"clock-label"},"City")),r.a.createElement("div",{className:"row weatherrow"},r.a.createElement("div",{className:"col-auto mr-auto inlineColums"},r.a.createElement("img",{className:"sunImg",src:f.a,alt:"sunrise"}),r.a.createElement("h2",{className:"tempName tempNamesm text-nowrap"},o)),r.a.createElement("div",{className:"col-auto mr-auto inlineColums"},r.a.createElement("img",{className:"sunImg",src:g.a,alt:"sunset"}),r.a.createElement("h2",{className:"tempName tempNamesm text-nowrap"},m))),r.a.createElement("div",{className:"row weatherrow justify-content-md-center"},r.a.createElement("div",{className:"col-md-auto inlineColums"},r.a.createElement("h2",{className:"tempName"},t),r.a.createElement("h2",null,"\xb0C"))),r.a.createElement("div",{className:"row weatherrow justify-content-md-center"},r.a.createElement("div",{className:"col-md-auto inlineColums"},r.a.createElement("h2",{className:"tempNamemd"},l))),r.a.createElement("div",{className:"row weatherrow"},r.a.createElement("div",{className:"col-auto mr-auto inlineColums"},r.a.createElement("img",{className:"sunImg sunImg",src:N.a,alt:"sunrise"}),r.a.createElement("h2",{className:"tempNamesm  text-nowrap"},i),r.a.createElement("h2",{className:"tempNamesm  text-nowrap"},"%")),r.a.createElement("div",{className:"col-auto mr-auto inlineColums"},r.a.createElement("img",{className:"sunImg sunImg",src:w.a,alt:"sunrise"}),r.a.createElement("h2",{className:"tempNamesm text-nowrap"},u),r.a.createElement("h2",{className:"tempNamesm text-nowrap"},"km/h"))),r.a.createElement("div",{className:"row weatherrow"},r.a.createElement("div",{className:"col-auto mr-auto"},r.a.createElement("h2",{className:"tempNamesm"},n," / ",s,"\xb0C"),r.a.createElement("p",{className:"temp-label"},"Min / Max")),r.a.createElement("div",{className:"col-auto mr-auto"},r.a.createElement("h2",{className:"tempNamesm"},c,"\xb0C"),r.a.createElement("p",{className:"temp-label"},"Feels like")))):r.a.createElement("div",{className:"container  weatherSkeleton"},r.a.createElement("div",{className:"row datagrid__row"},r.a.createElement("div",{className:"col-md-12"},r.a.createElement("div",{className:"datagrid__loader"}))),r.a.createElement("div",{className:"row datagrid__row"},r.a.createElement("div",{className:"col-md-6"},r.a.createElement("div",{className:"datagrid__loader second"})),r.a.createElement("div",{className:"col-md-6"},r.a.createElement("div",{className:"datagrid__loader second"}))),r.a.createElement("div",{className:"row datagrid__row"},r.a.createElement("div",{className:"col-md-4 offset-md-4"},r.a.createElement("div",{className:"datagrid__loader third"}))),r.a.createElement("div",{className:"row datagrid__row"},r.a.createElement("div",{className:"col-md-12"},r.a.createElement("div",{className:"datagrid__loader second"}))),r.a.createElement("div",{className:"row datagrid__row"},r.a.createElement("div",{className:"col-md-12"},r.a.createElement("div",{className:"datagrid__loader second"}))),r.a.createElement("div",{className:"row datagrid__row"},r.a.createElement("div",{className:"col-md-12"},r.a.createElement("div",{className:"datagrid__loader second"}))))}}]),a}(r.a.Component),x=function(e){function a(e){var t;return Object(l.a)(this,a),(t=Object(m.a)(this,Object(i.a)(a).call(this,e))).fetchDropdownCurr=function(){return p.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.awrap(fetch("/latest").then((function(e){200===e.status?e.json().then((function(e){var a=["EUR"];for(var n in e.rates)a.push(n);t.setState({currencies:a.sort()})})):console.log("Looks like there was a problem. Status Code: "+e.status)})).catch((function(e){console.log("Fetch Error :-S",e)})));case 2:case"end":return e.stop()}}))},t.convertFetch=function(){return p.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.awrap(fetch("/latest?base=".concat(t.state.fromCurrency,"&symbols=").concat(t.state.toCurrency)).then((function(e){200===e.status?e.json().then((function(e){var a=e.date,n=e.rates[t.state.toCurrency],r=t.state.amount*n;t.setState({result:r.toFixed(2),lastupt:a})})):console.log("Looks like there was a problem. Status Code: "+e.status)})).catch((function(e){console.log("Fetch Error :-S",e)})));case 2:case"end":return e.stop()}}))},t.handleInputChange=function(e){"from"===e.target.name&&t.setState({fromCurrency:e.target.value}),"to"===e.target.name&&t.setState({toCurrency:e.target.value}),"amount"===e.target.name&&t.setState({amount:e.target.value})},t.state={amount:1,result:0,lastupt:void 0,fromCurrency:"USD",toCurrency:"EUR",currencies:[]},t}return Object(u.a)(a,e),Object(o.a)(a,[{key:"componentDidMount",value:function(){this.fetchDropdownCurr(),this.convertFetch()}},{key:"componentDidUpdate",value:function(e,a){this.state.amount===a.amount&&this.state.fromCurrency===a.fromCurrency&&this.state.toCurrency===a.toCurrency||this.convertFetch()}},{key:"render",value:function(){var e=this.state.currencies.map((function(e){return r.a.createElement("option",{key:e,value:e},e)}));return r.a.createElement("div",{className:"container cityNameInfo exchange"},r.a.createElement("div",{className:"row p-3"},r.a.createElement("div",{className:"col moneyCol"},r.a.createElement("img",{src:"https://media.giphy.com/media/KDInXCxJOL9gb5cwgR/giphy.gif",className:"moneyGif",alt:"E"})),r.a.createElement("div",{className:"col moneyCol"},r.a.createElement("img",{src:"https://media.giphy.com/media/3gVqQCCJXP6N7FfRWo/giphy.gif",className:"moneyGif",alt:"X"})),r.a.createElement("div",{className:"col moneyCol"},r.a.createElement("img",{src:"https://media.giphy.com/media/2wV4aE4oo71xKirjqv/giphy.gif",className:"moneyGif",alt:"C"})),r.a.createElement("div",{className:"col moneyCol"},r.a.createElement("img",{src:"https://media.giphy.com/media/ZeKFkPdbSIxJbtkbRA/giphy.gif",className:"moneyGif",alt:"H"})),r.a.createElement("div",{className:"col moneyCol"},r.a.createElement("img",{src:"https://media.giphy.com/media/ZbBGqbg4RgjGc3z75K/giphy.gif",className:"moneyGif",alt:"A"})),r.a.createElement("div",{className:"col moneyCol"},r.a.createElement("img",{src:"https://media.giphy.com/media/XgSMToclOmnuXd7Ho4/giphy.gif",className:"moneyGif",alt:"N"})),r.a.createElement("div",{className:"col moneyCol"},r.a.createElement("img",{src:"https://media.giphy.com/media/ln0TUwW3MlFahfSF5J/giphy.gif",className:"moneyGif",alt:"G"})),r.a.createElement("div",{className:"col moneyCol"},r.a.createElement("img",{src:"https://media.giphy.com/media/fLpOPkumtoO0s4UkSi/giphy.gif",className:"moneyGif",alt:"E"}))),r.a.createElement("div",{className:"row exhInpRes"},r.a.createElement("form",null,r.a.createElement("div",{className:"form-row"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"amount"}),r.a.createElement("input",{type:"text",className:"form-control",autoComplete:"off",name:"amount",value:this.state.amount,onChange:this.handleInputChange})),r.a.createElement("div",{className:"form-group col"},r.a.createElement("label",{htmlFor:"from",className:"lblexh"},"From"),r.a.createElement("select",{className:"form-control",name:"from",as:"select",value:this.state.fromCurrency,onChange:this.handleInputChange},e))),r.a.createElement("div",{className:"form-row"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"result"}),r.a.createElement("input",{type:"text",className:"form-control",placeholder:"?",value:this.state.result,onChange:this.handleInputChange,readOnly:!0})),r.a.createElement("div",{className:"form-group col"},r.a.createElement("label",{htmlFor:"to",className:"lblexh"},"To"),r.a.createElement("select",{className:"form-control",name:"to",as:"select",value:this.state.toCurrency,onChange:this.handleInputChange},e))),r.a.createElement("div",{className:"form-row"},r.a.createElement("p",{className:"temp-label"},"Last Updated  ",r.a.createElement("span",{className:"temp-labelDt"},this.state.lastupt))))))}}]),a}(n.Component),S=function(e){function a(e){var t;return Object(l.a)(this,a),(t=Object(m.a)(this,Object(i.a)(a).call(this,e))).checkTimeOfDay=function(){return t.state.hours<18&&t.state.hours>6?t.toggleDay():t.toggleNight()},t.state={time:(new Date).toLocaleString()},t}return Object(u.a)(a,e),Object(o.a)(a,[{key:"toggleDay",value:function(){return r.a.createElement("div",{className:"container-fluid dayBack"},r.a.createElement("div",{className:"sun"}),r.a.createElement("div",{className:"cloud"}),r.a.createElement("div",{className:"cloud"}))}},{key:"toggleNight",value:function(){return r.a.createElement("div",{className:"container-fluid nightBack"},r.a.createElement("div",{id:"stars"}),r.a.createElement("div",{id:"stars2"}),r.a.createElement("div",{id:"stars3"}),r.a.createElement("div",{className:"moon"}))}},{key:"componentDidMount",value:function(){var e=this;this.intervalID=setInterval((function(){return e.tick()}),1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.intervalID)}},{key:"tick",value:function(){var e=new Date,a=new Array(7);a[0]="SU",a[1]="MO",a[2]="TU",a[3]="WE",a[4]="TH",a[5]="FR",a[6]="SA",this.setState({day:a[e.getDay()],hours:(new Date).getHours(),minutes:(new Date).getMinutes(),seconds:(new Date).getSeconds()})}},{key:"clock",value:function(){return r.a.createElement("div",{className:"clock-container"},r.a.createElement("div",{className:"clock-col"},r.a.createElement("p",{className:"display-4 App-clock clockSkeleton"},this.state.day),r.a.createElement("p",{className:"clock-label"},"Day")),r.a.createElement("div",{className:"clock-col"},r.a.createElement("p",{className:"display-4 App-clock"},this.state.hours),r.a.createElement("p",{className:"clock-label"},"Hours")),r.a.createElement("div",{className:"clock-col"},r.a.createElement("p",{className:"display-4 App-clock"},this.state.minutes),r.a.createElement("p",{className:"clock-label"},"Minutes")),r.a.createElement("div",{className:"clock-col"},r.a.createElement("p",{className:"display-4 App-clock"},this.state.seconds),r.a.createElement("p",{className:"clock-label"},"Seconds")))}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container leftside"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col flex-grow-0"},this.clock()),r.a.createElement("div",{className:"col-auto"},r.a.createElement(b,null)),r.a.createElement("div",{className:"col-auto"},r.a.createElement(x,null)))),this.checkTimeOfDay())}}]),a}(r.a.Component),_=t(9),D=t(18),O=t(16),j=t(17),T=t(8),I=t(10),F=t(4),M=t(11),A=t(7),W=t(1),U=t(2),G="AIzaSyDayFhaalLtdI4xW1DzP2SSPFU3jXHvEOw",P=[],R=[],L=[],B=[],H=[],J=[],X=[],K=[],q=[],z=[],V=[],Z=[],Q=(r.a.Component,t(64));function $(e){var a=window.document.getElementsByTagName("script")[0],t=window.document.createElement("script");t.src=e,t.async=!0,t.defer=!0,a.parentNode.insertBefore(t,a)}n.Component;var Y=function(){return r.a.createElement("div",{className:"App container-fluid"},r.a.createElement(S,null))},ee=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function ae(e,a){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),a&&a.onUpdate&&a.onUpdate(e)):(console.log("Content is cached for offline use."),a&&a.onSuccess&&a.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}t(65);c.a.render(r.a.createElement(Y,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/Polis",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var a="".concat("/Polis","/service-worker.js");ee?(!function(e,a){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var n=t.headers.get("content-type");404===t.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):ae(e,a)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(a,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):ae(a,e)}))}}()}},[[54,1,2]]]);
//# sourceMappingURL=main.8b15070d.chunk.js.map