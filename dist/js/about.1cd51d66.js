(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"25f0":function(e,t,a){"use strict";var r=a("6eeb"),n=a("825a"),o=a("d039"),i=a("ad6d"),s="toString",u=RegExp.prototype,c=u[s],d=o((function(){return"/a/b"!=c.call({source:"a",flags:"b"})})),l=c.name!=s;(d||l)&&r(RegExp.prototype,s,(function(){var e=n(this),t=String(e.source),a=e.flags,r=String(void 0===a&&e instanceof RegExp&&!("flags"in u)?i.call(e):a);return"/"+t+"/"+r}),{unsafe:!0})},"3ca3":function(e,t,a){"use strict";var r=a("6547").charAt,n=a("69f3"),o=a("7dd0"),i="String Iterator",s=n.set,u=n.getterFor(i);o(String,"String",(function(e){s(this,{type:i,string:String(e),index:0})}),(function(){var e,t=u(this),a=t.string,n=t.index;return n>=a.length?{value:void 0,done:!0}:(e=r(a,n),t.index+=e.length,{value:e,done:!1})}))},"3e7c":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"mb-4"},[a("b-navbar",{attrs:{variant:"faded",type:"light"}},[a("b-navbar-brand",{staticClass:"mb-0",attrs:{tag:"h1"}},[e._v("Unesite sate za prošlu sedmicu")])],1),a("div",{staticClass:"mb-2 mt-2"},[a("a",{attrs:{href:"",disabled:e.isLoading,hidden:!1},on:{click:function(t){return t.preventDefault(),e.changeDate(!0)}}},[a("b-icon-arrow-left-circle",{staticClass:"mr-2",attrs:{scale:"1.5"}})],1),e._v(" "+e._s(e.startOfCurrentWeek)+" — "+e._s(e.endOfCurrentWeek)+" "),a("a",{attrs:{href:"",disabled:e.isLoading,hidden:!1},on:{click:function(t){return t.preventDefault(),e.changeDate(!1)}}},[a("b-icon-arrow-right-circle",{staticClass:"ml-2",attrs:{scale:"1.5"}})],1)]),e.isLoading?a("div",[a("b-spinner",{attrs:{label:"Loading..."}})],1):a("b-form",{on:{submit:function(t){return t.preventDefault(),e.onSubmit()}}},[e._l(e.weeks,(function(t,r){return a("b-card",{key:t.date,staticClass:"mb-3",attrs:{set:e.emptyRow=e.dateNotSet(t),"border-variant":e.emptyRow?"":"success"}},[a("b-card-text",[a("b-row",[a("b-col",{staticClass:"text-center",attrs:{cols:"12"}},[a("span",{staticClass:"text-capitalize",class:e.emptyRow?"text-secondary":"text-success"},[e._v(" "+e._s(t.cleanDate)+" "),e.emptyRow?e._e():a("b-icon-check-2-circle",{attrs:{variant:"success",scale:"1.2"}}),e.emptyRow?a("b-icon-circle",{attrs:{variant:"secondary",scale:"1"}}):e._e()],1),t.id?a("b-button",{staticClass:"p-0 ml-4",attrs:{variant:"outline-light"}},[a("b-icon-trash",{attrs:{variant:"danger"},on:{click:function(a){return a.preventDefault(),e.deleteEntry(r,t.id)}}})],1):e._e()],1)],1)],1),a("b-card-text",{staticClass:"card-subtitle text-muted mb-1"},[a("b-row")],1),a("b-card-text",{staticClass:"p-0 m-0"},[e.emptyRow||t.edit?a("div",[a("b-row",[a("b-col",{staticClass:"mb-2"},[a("CompanyPicker",{attrs:{workplaces:e.workplaces,workplace_id:t.workplace_id},on:{update:function(t){return e.handleCompanyUpdate(t,r)},"update:workplace_id":function(a){return e.$set(t,"workplace_id",a)}}})],1)],1),a("b-row",[a("b-col",[a("b-form-timepicker",{attrs:{locale:"sl",placeholder:"Začetek","minutes-step":"15","hide-header":!0},model:{value:t.hours_from,callback:function(a){e.$set(t,"hours_from",a)},expression:"w.hours_from"}})],1),a("b-col",[a("b-form-timepicker",{attrs:{locale:"sl",placeholder:"Konec","minutes-step":"15","hide-header":!0},model:{value:t.hours_to,callback:function(a){e.$set(t,"hours_to",a)},expression:"w.hours_to"}})],1)],1),a("b-row",{staticClass:"mt-2"},[a("b-col",[a("b-button",{attrs:{block:"",variant:"primary"},on:{click:function(a){return a.preventDefault(),e.addEntry(t,r)}}},[t.isLoading?e._e():a("span",{attrs:{variant:"primary"}},[e._v(" Spremi "),e.emptyRow?e._e():a("span",[e._v("spremembe")])]),t.isLoading?a("b-spinner",{attrs:{small:""}}):e._e()],1),e.emptyRow?e._e():a("b-button",{attrs:{block:"",variant:"outline-primary"},on:{click:function(t){return t.preventDefault(),e.cancelEdit(r)}}},[t.isLoading?e._e():a("span",{attrs:{variant:"primary"}},[e._v(" Prekliči ")]),t.isLoading?a("b-spinner",{attrs:{small:""}}):e._e()],1)],1)],1)],1):a("div",[a("b-row",[a("b-col",{staticClass:"text-center",attrs:{cols:"12"}},[a("span",[e._v(e._s(e.workplaces.find((function(e){return e.id===t.workplace_id})).name)+": "+e._s(t.hours)+" ur ")]),a("b-button",{staticClass:"p-0 ml-4",attrs:{variant:"outline-light"}},[a("b-icon-pencil-fill",{attrs:{variant:"dark"},on:{click:function(t){return t.preventDefault(),e.setEdit(r)}}})],1)],1)],1)],1)])],1)})),a("p",[a("em",[e._v("Ukupno sati: "+e._s(e.hoursSum))])]),a("b-button",{attrs:{type:"submit"}},[e._v("Spremi sve")])],2),a("b-form",{attrs:{hidden:!0}},[a("b-row",[a("b-col",{staticClass:"ml-0 mr-0 pl-2 pr-0",attrs:{cols:"5"}},[a("CompanyPicker",{attrs:{workplace_id:e.workplace_id,workplaces:e.workplaces},on:{"update:workplace_id":function(t){e.workplace_id=t}}})],1),a("b-col",{staticClass:"ml-0 mr-0 pl-2 pr-2",attrs:{cols:"5"}},[a("HourPicker",{attrs:{hours:e.hours},on:{"update:hours":function(t){e.hours=t}}})],1),a("b-col",{staticClass:"ml-0 mr-0 pl-0 pr-0 text-center",attrs:{cols:"2"}},[a("b-button",{attrs:{variant:"primary"},on:{click:function(t){return t.preventDefault(),e.Update()}}},[e._v(" Set ")])],1)],1)],1)],1)},n=[];a("99af"),a("4de4"),a("7db0"),a("4160"),a("d81d"),a("fb6a"),a("b0c0"),a("d3b7"),a("ac1f"),a("25f0"),a("3ca3"),a("5319"),a("1276"),a("159b"),a("ddb0"),a("a4d3"),a("e01a"),a("d28b"),a("a630");function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,r=new Array(t);a<t;a++)r[a]=e[a];return r}function i(e,t){if(e){if("string"===typeof e)return o(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?o(e,t):void 0}}function s(e,t){var a;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(a=i(e))||t&&e&&"number"===typeof e.length){a&&(e=a);var r=0,n=function(){};return{s:n,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,s=!0,u=!1;return{s:function(){a=e[Symbol.iterator]()},n:function(){var e=a.next();return s=e.done,e},e:function(e){u=!0,o=e},f:function(){try{s||null==a["return"]||a["return"]()}finally{if(u)throw o}}}}var u=a("5530");function c(e){if(Array.isArray(e))return o(e)}function d(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function l(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function p(e){return c(e)||d(e)||i(e)||l()}a("96cf");var h=a("1da1"),f=a("af8b"),m=a("2fc8"),b=a("2cf3"),v=a("b166"),w=a("69eb"),k=a("f7f1"),g=a("fc4c"),y={lessThanXSeconds:{one:{standalone:"manje od 1 sekunde",withPrepositionAgo:"manje od 1 sekunde",withPrepositionIn:"manje od 1 sekundu"},dual:"manje od {{count}} sekunde",other:"manje od {{count}} sekundi"},xSeconds:{one:{standalone:"1 sekunda",withPrepositionAgo:"1 sekunde",withPrepositionIn:"1 sekundu"},dual:"{{count}} sekunde",other:"{{count}} sekundi"},halfAMinute:"pola minute",lessThanXMinutes:{one:{standalone:"manje od 1 minute",withPrepositionAgo:"manje od 1 minute",withPrepositionIn:"manje od 1 minutu"},dual:"manje od {{count}} minute",other:"manje od {{count}} minuta"},xMinutes:{one:{standalone:"1 minuta",withPrepositionAgo:"1 minute",withPrepositionIn:"1 minutu"},dual:"{{count}} minute",other:"{{count}} minuta"},aboutXHours:{one:{standalone:"oko 1 sat",withPrepositionAgo:"oko 1 sat",withPrepositionIn:"oko 1 sat"},dual:"oko {{count}} sata",other:"oko {{count}} sati"},xHours:{one:{standalone:"1 sat",withPrepositionAgo:"1 sat",withPrepositionIn:"1 sat"},dual:"{{count}} sata",other:"{{count}} sati"},xDays:{one:{standalone:"1 dan",withPrepositionAgo:"1 dan",withPrepositionIn:"1 dan"},dual:"{{count}} dana",other:"{{count}} dana"},aboutXWeeks:{one:{standalone:"oko 1 nedelju",withPrepositionAgo:"oko 1 nedelju",withPrepositionIn:"oko 1 nedelju"},dual:"oko {{count}} nedelje",other:"oko {{count}} nedelje"},xWeeks:{one:{standalone:"1 nedelju",withPrepositionAgo:"1 nedelju",withPrepositionIn:"1 nedelju"},dual:"{{count}} nedelje",other:"{{count}} nedelje"},aboutXMonths:{one:{standalone:"oko 1 mesec",withPrepositionAgo:"oko 1 mesec",withPrepositionIn:"oko 1 mesec"},dual:"oko {{count}} meseca",other:"oko {{count}} meseci"},xMonths:{one:{standalone:"1 mesec",withPrepositionAgo:"1 mesec",withPrepositionIn:"1 mesec"},dual:"{{count}} meseca",other:"{{count}} meseci"},aboutXYears:{one:{standalone:"oko 1 godinu",withPrepositionAgo:"oko 1 godinu",withPrepositionIn:"oko 1 godinu"},dual:"oko {{count}} godine",other:"oko {{count}} godina"},xYears:{one:{standalone:"1 godina",withPrepositionAgo:"1 godine",withPrepositionIn:"1 godinu"},dual:"{{count}} godine",other:"{{count}} godina"},overXYears:{one:{standalone:"preko 1 godinu",withPrepositionAgo:"preko 1 godinu",withPrepositionIn:"preko 1 godinu"},dual:"preko {{count}} godine",other:"preko {{count}} godina"},almostXYears:{one:{standalone:"gotovo 1 godinu",withPrepositionAgo:"gotovo 1 godinu",withPrepositionIn:"gotovo 1 godinu"},dual:"gotovo {{count}} godine",other:"gotovo {{count}} godina"}};function j(e,t,a){var r;return a=a||{},r="string"===typeof y[e]?y[e]:1===t?a.addSuffix?a.comparison>0?y[e].one.withPrepositionIn:y[e].one.withPrepositionAgo:y[e].one.standalone:t%10>1&&t%10<5&&"1"!==String(t).substr(-2,1)?y[e].dual.replace("{{count}}",t):y[e].other.replace("{{count}}",t),a.addSuffix?a.comparison>0?"za "+r:"pre "+r:r}var _=a("ccc4"),O={full:"EEEE, d. MMMM yyyy.",long:"d. MMMM yyyy.",medium:"d. MMM yy.",short:"dd. MM. yy."},P={full:"HH:mm:ss (zzzz)",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},S={full:"{{date}} 'u' {{time}}",long:"{{date}} 'u' {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},x={date:Object(_["a"])({formats:O,defaultWidth:"full"}),time:Object(_["a"])({formats:P,defaultWidth:"full"}),dateTime:Object(_["a"])({formats:S,defaultWidth:"full"})},A=x,M={lastWeek:function(e){var t=e.getUTCDay();switch(t){case 0:return"'prošle nedelje u' p";case 3:return"'prošle srede u' p";case 6:return"'prošle subote u' p";default:return"'prošli' EEEE 'u' p"}},yesterday:"'juče u' p",today:"'danas u' p",tomorrow:"'sutra u' p",nextWeek:function(e){var t=e.getUTCDay();switch(t){case 0:return"'sledeće nedelje u' p";case 3:return"'sledeću sredu u' p";case 6:return"'sledeću subotu u' p";default:return"'sledeći' EEEE 'u' p"}},other:"P"};function I(e,t,a,r){var n=M[e];return"function"===typeof n?n(t):n}var C=a("92ef");function E(e){var t=Number(e);return String(t).concat(".")}var H={narrow:["pr.n.e.","AD"],abbreviated:["pr. Hr.","po. Hr."],wide:["Pre Hrista","Posle Hrista"]},D={narrow:["1.","2.","3.","4.","5.","6.","7.","8.","9.","10.","11.","12."],abbreviated:["jan","feb","mar","apr","maj","jun","jul","avg","sep","okt","nov","dec"],wide:["januar","februar","mart","april","maj","jun","jul","avgust","septembar","oktobar","novembar","decembar"]},W={narrow:["1.","2.","3.","4.","5.","6.","7.","8.","9.","10.","11.","12."],abbreviated:["jan","feb","mar","apr","maj","jun","jul","avg","sep","okt","nov","dec"],wide:["januar","februar","mart","april","maj","jun","jul","avgust","septembar","oktobar","novembar","decembar"]},R={narrow:["1.","2.","3.","4."],abbreviated:["1. kv.","2. kv.","3. kv.","4. kv."],wide:["1. kvartal","2. kvartal","3. kvartal","4. kvartal"]},$={narrow:["N","P","U","S","Č","P","S"],short:["ned","pon","uto","sre","čet","pet","sub"],abbreviated:["ned","pon","uto","sre","čet","pet","sub"],wide:["nedelja","ponedeljak","utorak","sreda","četvrtak","petak","subota"]},L={narrow:{am:"AM",pm:"PM",midnight:"ponoć",noon:"podne",morning:"ujutru",afternoon:"popodne",evening:"uveče",night:"noću"},abbreviated:{am:"AM",pm:"PM",midnight:"ponoć",noon:"podne",morning:"ujutru",afternoon:"popodne",evening:"uveče",night:"noću"},wide:{am:"AM",pm:"PM",midnight:"ponoć",noon:"podne",morning:"ujutru",afternoon:"posle podne",evening:"uveče",night:"noću"}},T={narrow:{am:"AM",pm:"PM",midnight:"ponoć",noon:"podne",morning:"ujutru",afternoon:"popodne",evening:"uveče",night:"noću"},abbreviated:{am:"AM",pm:"PM",midnight:"ponoć",noon:"podne",morning:"ujutru",afternoon:"popodne",evening:"uveče",night:"noću"},wide:{am:"AM",pm:"PM",midnight:"ponoć",noon:"podne",morning:"ujutru",afternoon:"posle podne",evening:"uveče",night:"noću"}},z={ordinalNumber:E,era:Object(C["a"])({values:H,defaultWidth:"wide"}),quarter:Object(C["a"])({values:R,defaultWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:Object(C["a"])({values:D,defaultWidth:"wide",formattingValues:W,defaultFormattingWidth:"wide"}),day:Object(C["a"])({values:$,defaultWidth:"wide"}),dayPeriod:Object(C["a"])({values:T,defaultWidth:"wide",formattingValues:L,defaultFormattingWidth:"wide"})},U=z,B=a("c333"),X=a("bd15"),F=/^(\d+)\./i,N=/\d+/i,V={narrow:/^(pr\.n\.e\.|AD)/i,abbreviated:/^(pr\.\s?Hr\.|po\.\s?Hr\.)/i,wide:/^(Pre Hrista|pre nove ere|Posle Hrista|nova era)/i},q={any:[/^pr/i,/^(po|nova)/i]},Y={narrow:/^[1234]/i,abbreviated:/^[1234]\.\s?kv\.?/i,wide:/^[1234]\. kvartal/i},J={any:[/1/i,/2/i,/3/i,/4/i]},Z={narrow:/^(10|11|12|[123456789])\./i,abbreviated:/^(jan|feb|mar|apr|maj|jun|jul|avg|sep|okt|nov|dec)/i,wide:/^((januar|januara)|(februar|februara)|(mart|marta)|(april|aprila)|(maj|maja)|(jun|juna)|(jul|jula)|(avgust|avgusta)|(septembar|septembra)|(oktobar|oktobra)|(novembar|novembra)|(decembar|decembra))/i},K={narrow:[/(10|11|12|[123456789])/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^maj/i,/^jun/i,/^jul/i,/^avg/i,/^s/i,/^o/i,/^n/i,/^d/i]},G={narrow:/^[npusčc]/i,short:/^(ned|pon|uto|sre|(čet|cet)|pet|sub)/i,abbreviated:/^(ned|pon|uto|sre|(čet|cet)|pet|sub)/i,wide:/^(nedelja|ponedeljak|utorak|sreda|(četvrtak|cetvrtak)|petak|subota)/i},Q={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},ee={any:/^(am|pm|ponoc|ponoć|(po)?podne|uvece|uveče|noću|posle podne|ujutru)/i},te={any:{am:/^a/i,pm:/^p/i,midnight:/^pono/i,noon:/^pod/i,morning:/jutro/i,afternoon:/(posle\s|po)+podne/i,evening:/(uvece|uveče)/i,night:/(nocu|noću)/i}},ae={ordinalNumber:Object(X["a"])({matchPattern:F,parsePattern:N,valueCallback:function(e){return parseInt(e,10)}}),era:Object(B["a"])({matchPatterns:V,defaultMatchWidth:"wide",parsePatterns:q,defaultParseWidth:"any"}),quarter:Object(B["a"])({matchPatterns:Y,defaultMatchWidth:"wide",parsePatterns:J,defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:Object(B["a"])({matchPatterns:Z,defaultMatchWidth:"wide",parsePatterns:K,defaultParseWidth:"any"}),day:Object(B["a"])({matchPatterns:G,defaultMatchWidth:"wide",parsePatterns:Q,defaultParseWidth:"any"}),dayPeriod:Object(B["a"])({matchPatterns:ee,defaultMatchWidth:"any",parsePatterns:te,defaultParseWidth:"any"})},re=ae,ne={code:"sr-Latn",formatDistance:j,formatLong:A,formatRelative:I,localize:U,match:re,options:{weekStartsOn:1,firstWeekContainsDate:1}},oe=ne,ie="yyyy-MM-dd",se="EEEE",ue="HH:mm",ce=15,de=a("bc3a"),le=a.n(de),pe="timeclock";function he(e,t){return le.a.get("/api/".concat(pe,"/").concat(e,"_").concat(t),{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}})}function fe(e){return le.a.post("/api/".concat(pe,"/add"),e,{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}})}function me(e){return le.a.get("/api/".concat(pe,"/").concat(e,"/remove"),{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}})}var be="workplaces";function ve(){return le.a.get("/api/".concat(be),{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}})}var we=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-form-select",{attrs:{required:""},scopedSlots:e._u([{key:"first",fn:function(){return[a("b-form-select-option",{attrs:{value:"",disabled:"",selected:""===e.hours}},[e._v("-- Izberi št. ur --")])]},proxy:!0}]),model:{value:e.hourSelect,callback:function(t){e.hourSelect=t},expression:"hourSelect"}},e._l(e.hoursList,(function(t){return a("b-form-select-option",{key:t,attrs:{selected:e.hours===t,value:t}},[e._v(e._s(t))])})),1)},ke=[],ge=a("fe1f"),ye=a("a65d"),je=a("8c86"),_e=6e4;function Oe(e,t){Object(je["a"])(2,arguments);var a=Object(ge["a"])(t);return Object(ye["a"])(e,a*_e)}var Pe={props:["hours"],data:function(){return{hoursList:[],hourSelect:this.hours}},mounted:function(){for(var e=new Date(0,0,0,0,0),t=1440/ce,a=0;a<t;a++)this.hoursList.push(Object(v["a"])(e,ue)),e=Oe(e,ce)},watch:{hours:function(e){this.hourSelect=e},hourSelect:function(e){this.$emit("update:hours",e)}}},Se=Pe,xe=a("2877"),Ae=Object(xe["a"])(Se,we,ke,!1,null,null,null),Me=Ae.exports,Ie=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.workplaces?a("b-form-select",{attrs:{required:""},model:{value:e.workplaceSelect,callback:function(t){e.workplaceSelect=t},expression:"workplaceSelect"}},[a("b-form-select-option",{attrs:{disabled:"",value:"",selected:""===e.workplace_id}},[e._v("Odaberi gradilište")]),e._l(e.workplaces,(function(t){return a("b-form-select-option",{key:t.id,attrs:{selected:t.id==e.workplace_id,value:t.id}},[e._v(e._s(t.name))])}))],2):e._e()},Ce=[],Ee={props:["workplace_id","workplaces"],data:function(){return{workplaceSelect:this.workplace_id}},watch:{workplace_id:function(e){this.workplaceSelect=e},workplaceSelect:function(e){var t=""===e?"":parseInt(e);this.$emit("update:workplace_id",t),this.$emit("update",t)}}},He=Ee,De=Object(xe["a"])(He,Ie,Ce,!1,null,null,null),We=De.exports,Re=a("2fa3"),$e=a("7386"),Le=oe,Te={hours_from:"07:00",hours_to:"17:00",edit:!1,isLoading:!1},ze={name:"About",components:{HourPicker:Me,CompanyPicker:We,BIconPencilFill:$e["nq"],BIconTrash:$e["ou"],BIconArrowLeftCircle:$e["P"],BIconArrowRightCircle:$e["Z"]},data:function(){var e=this.$route.params.week,t=this.$route.params.year,a=Object(f["a"])(new Date(t,0),e-1);return 1===e&&(a=Object(m["a"])(a)),{touched:!1,hours:"",workplace_id:"",workplaces:[],weeks:[],week:e,year:t,date:a,isLoading:!1,hoursSum:0,datePickerValue:""}},mounted:function(){var e=Object(h["a"])(regeneratorRuntime.mark((function e(){var t,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(e.prev=0,this.areParamsValid()){e.next=8;break}return t=Object(Re["b"])(),this.date=t.date,this.$router.replace({name:"Timesheet",params:{week:t.week,year:t.year}}),e.abrupt("return");case 8:return e.next=10,ve();case 10:a=e.sent,this.workplaces=p(a.data.data),this.generateForm();case 13:e.next=18;break;case 15:e.prev=15,e.t0=e["catch"](0),console.log(e.t0);case 18:case"end":return e.stop()}}),e,this,[[0,15]])})));function t(){return e.apply(this,arguments)}return t}(),methods:{handleCompanyUpdate:function(e,t){var a;if(!this.touched){var r=this.weeks.map((function(a,r){return""!==a.workplace_id&&r!==t?a:Object(u["a"])(Object(u["a"])({},a),{},{workplace_id:e})}));this.weeks=[],(a=this.weeks).push.apply(a,p(r)),this.touched=!0}},generateHours:function(){},onSubmit:function(){var e=Object(h["a"])(regeneratorRuntime.mark((function e(){var t,a,r,n,o,i,c,d,l,p,h,f,m,w,k,g,y;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,t=this.weeks.filter((function(e){return""!==e.hours_from&&""!==e.hours_to&&""!==e.workplace_id})).map((function(e){return{date:e.date,workplace_id:e.workplace_id,hours_from:e.hours_from,hours_to:e.hours_to}})),e.next=4,fe(t);case 4:if(a=e.sent,r=a.data,n=r.data,o=r.result,i=r.errors,o&&0===i.length){d=[],l=s(n);try{for(l.s();!(p=l.n()).done;)h=p.value,f=h.hours_from,m=h.hours_to,w=h.workplace_id,k=h.id,g=h.date,y=Object(b["a"])(g,"yyyy-MM-dd HH:mm:ss",new Date),d.push(Object(u["a"])(Object(u["a"])({},Te),{},{cleanDate:Object(v["a"])(y,se,{locale:Le}),date:Object(v["a"])(y,ie),hours:Object(Re["a"])(f,m),workplace_id:w,id:k}))}catch(j){l.e(j)}finally{l.f()}this.weeks=[],(c=this.weeks).push.apply(c,d),this.sumHours()}e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,this,[[0,9]])})));function t(){return e.apply(this,arguments)}return t}(),Update:function(){var e,t={};this.hours&&(t.hours=this.hours),this.workplace_id&&(t.workplace_id=this.workplace_id);var a=this.weeks.map((function(e){return Object(u["a"])(Object(u["a"])({},e),t)}));this.weeks=[],(e=this.weeks).push.apply(e,p(a))},dateNotSet:function(e){var t=e.id;return null===t},addEntry:function(){var e=Object(h["a"])(regeneratorRuntime.mark((function e(t,a){var r,n,o,i,s,c,d,l,p,h,f,m,w;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(""!==t.workplace_id&&""!==t.hours_from&&""!==t.hours_to){e.next=3;break}return this.showToast("Odaberi gradilište i sati","Podaci nisu postavljeni","danger"),e.abrupt("return");case 3:return this.weeks[a].isLoading=!0,e.prev=4,e.next=7,fe([{date:t.date,workplace_id:t.workplace_id,hours_from:t.hours_from.slice(0,t.hours_from.length-3),hours_to:t.hours_to.slice(0,t.hours_to.length-3)}]);case 7:r=e.sent,n=r.data,o=n.data,i=n.result,s=n.errors,i&&0===s.length&&(c=o[0],d=c.workplace_id,l=c.id,p=c.date,h=c.hours_from,f=c.hours_to,m=Object(b["a"])(p,"yyyy-MM-dd HH:mm:ss",new Date),w=Object(u["a"])(Object(u["a"])({},Te),{},{cleanDate:Object(v["a"])(m,se,{locale:Le}),date:Object(v["a"])(m,ie),hours:Object(Re["a"])(h,f),hours_from:h,hours_to:f,workplace_id:d,id:l}),this.$set(this.weeks,a,w),this.sumHours(),this.showToast("Successfully saved!","Data has been saved","success")),e.next=15;break;case 12:e.prev=12,e.t0=e["catch"](4),console.log(e.t0);case 15:case"end":return e.stop()}}),e,this,[[4,12]])})));function t(t,a){return e.apply(this,arguments)}return t}(),deleteEntry:function(){var e=Object(h["a"])(regeneratorRuntime.mark((function e(t,a){var r,n,o,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(e.prev=0,!confirm("Želite li ga ukloniti?")){e.next=8;break}return e.next=4,me(a);case 4:r=e.sent,n=r.data,o=r.status,!0===n.result&&200===o&&(i=Object(u["a"])({},this.weeks[t]),this.showToast("Successfully deleted!","Deleted entry for ".concat(this.workplaces.find((function(e){return e.id===i.workplace_id})).name," (").concat(i.hours," hours)"),"success"),i.workplace_id="",i.hours="",i.id=null,i.edit=!1,this.$set(this.weeks,t,i),this.sumHours());case 8:e.next=13;break;case 10:e.prev=10,e.t0=e["catch"](0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,this,[[0,10]])})));function t(t,a){return e.apply(this,arguments)}return t}(),areParamsValid:function(){var e=parseInt(this.week),t=parseInt(this.year),a=parseInt(Object(v["a"])(new Date,"yyy")),r=10;return!(!e||!t||e<1||e>53||4!==t.toString().length||t<a-r||t>a+r)},generateForm:function(){var e=Object(h["a"])(regeneratorRuntime.mark((function e(){var t=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.delegateYield(regeneratorRuntime.mark((function e(){var a,r,n,o,i,s,c,d,l,p,h;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.isLoading=!0,t.weeks=[],e.next=4,he(t.week,t.year);case 4:for(a=e.sent,r=a.data.data||[],n=Object(w["a"])(t.date,{weekStartsOn:1}),o=0;o<7;o++)i=o<5,s=i?Te.hours_from:"",c=i?Te.hours_to:"",d="",l="",p=null,r.length>0&&(h=r.find((function(e){var t=Object(b["a"])(e.date,"yyyy-MM-dd HH:mm:ss",new Date);return Object(v["a"])(t,ie)===Object(v["a"])(n,ie)})),h&&(d=Object(Re["a"])(h.hours_from,h.hours_to),s=h.hours_from,c=h.hours_to,l=parseInt(h.workplace_id),p=h.id)),t.weeks.push(Object(u["a"])(Object(u["a"])({},Te),{},{cleanDate:Object(v["a"])(n,se,{locale:Le}),date:Object(v["a"])(n,ie),hours:d,hours_from:s,hours_to:c,workplace_id:l,id:p})),n=Object(k["a"])(n,1);case 8:case"end":return e.stop()}}),e)}))(),"t0",2);case 2:e.next=7;break;case 4:e.prev=4,e.t1=e["catch"](0),console.log(e.t1);case 7:return e.prev=7,this.isLoading=!1,this.sumHours(),e.finish(7);case 11:case"end":return e.stop()}}),e,this,[[0,4,7,11]])})));function t(){return e.apply(this,arguments)}return t}(),setEdit:function(e){this.weeks[e].edit=!0},cancelEdit:function(e){this.weeks[e].edit=!1},changeDate:function(e){this.date=e?Object(g["a"])(this.date,1):Object(f["a"])(this.date,1),this.week=Object(v["a"])(this.date,"w"),this.year=Object(v["a"])(this.date,"yyy"),this.$router.replace({name:"Timesheet",params:{week:this.week,year:this.year}})},sumHours:function(){var e=0;this.weeks.forEach((function(t){if(t.hours){var a=t.hours.split(","),r=60*parseInt(a[0]),n=parseInt(a[1]);e+=r+n}}));var t=Math.floor(e/60),a=e%60;this.hoursSum="".concat(t,":").concat(a<10?"0".concat(a):a)},showToast:function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;this.$bvToast.toast(e,{title:t,variant:a,toaster:"b-toaster-bottom-right",solid:!0})}},computed:{startOfCurrentWeek:function(){return Object(v["a"])(Object(w["a"])(this.date,{weekStartsOn:1}),"E d. M. yyy",{locale:Le})},endOfCurrentWeek:function(){return Object(v["a"])(Object(m["a"])(this.date,{weekStartsOn:1}),"E d. M. yyy",{locale:Le})}},watch:{"$route.params":function(){this.generateForm()},workplace_id:function(e){console.log(e)},datePickerValue:function(e){this.date=Object(b["a"])(e,"yyyy-MM-dd",new Date),this.week=Object(v["a"])(this.date,"w"),this.year=Object(v["a"])(this.date,"yyy"),this.$router.replace({name:"Timesheet",params:{week:this.week,year:this.year}})}}},Ue=ze,Be=Object(xe["a"])(Ue,r,n,!1,null,null,null);t["default"]=Be.exports},"4df4":function(e,t,a){"use strict";var r=a("0366"),n=a("7b0b"),o=a("9bdd"),i=a("e95a"),s=a("50c4"),u=a("8418"),c=a("35a1");e.exports=function(e){var t,a,d,l,p,h,f=n(e),m="function"==typeof this?this:Array,b=arguments.length,v=b>1?arguments[1]:void 0,w=void 0!==v,k=c(f),g=0;if(w&&(v=r(v,b>2?arguments[2]:void 0,2)),void 0==k||m==Array&&i(k))for(t=s(f.length),a=new m(t);t>g;g++)h=w?v(f[g],g):f[g],u(a,g,h);else for(l=k.call(f),p=l.next,a=new m;!(d=p.call(l)).done;g++)h=w?o(l,v,[d.value,g],!0):d.value,u(a,g,h);return a.length=g,a}},"7db0":function(e,t,a){"use strict";var r=a("23e7"),n=a("b727").find,o=a("44d2"),i=a("ae40"),s="find",u=!0,c=i(s);s in[]&&Array(1)[s]((function(){u=!1})),r({target:"Array",proto:!0,forced:u||!c},{find:function(e){return n(this,e,arguments.length>1?arguments[1]:void 0)}}),o(s)},a630:function(e,t,a){var r=a("23e7"),n=a("4df4"),o=a("1c7e"),i=!o((function(e){Array.from(e)}));r({target:"Array",stat:!0,forced:i},{from:n})},d28b:function(e,t,a){var r=a("746f");r("iterator")},d81d:function(e,t,a){"use strict";var r=a("23e7"),n=a("b727").map,o=a("1dde"),i=a("ae40"),s=o("map"),u=i("map");r({target:"Array",proto:!0,forced:!s||!u},{map:function(e){return n(this,e,arguments.length>1?arguments[1]:void 0)}})},ddb0:function(e,t,a){var r=a("da84"),n=a("fdbc"),o=a("e260"),i=a("9112"),s=a("b622"),u=s("iterator"),c=s("toStringTag"),d=o.values;for(var l in n){var p=r[l],h=p&&p.prototype;if(h){if(h[u]!==d)try{i(h,u,d)}catch(m){h[u]=d}if(h[c]||i(h,c,l),n[l])for(var f in o)if(h[f]!==o[f])try{i(h,f,o[f])}catch(m){h[f]=o[f]}}}},e01a:function(e,t,a){"use strict";var r=a("23e7"),n=a("83ab"),o=a("da84"),i=a("5135"),s=a("861d"),u=a("9bf2").f,c=a("e893"),d=o.Symbol;if(n&&"function"==typeof d&&(!("description"in d.prototype)||void 0!==d().description)){var l={},p=function(){var e=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),t=this instanceof p?new d(e):void 0===e?d():d(e);return""===e&&(l[t]=!0),t};c(p,d);var h=p.prototype=d.prototype;h.constructor=p;var f=h.toString,m="Symbol(test)"==String(d("test")),b=/^Symbol\((.*)\)[^)]+$/;u(h,"description",{configurable:!0,get:function(){var e=s(this)?this.valueOf():this,t=f.call(e);if(i(l,e))return"";var a=m?t.slice(7,-1):t.replace(b,"$1");return""===a?void 0:a}}),r({global:!0,forced:!0},{Symbol:p})}},fb6a:function(e,t,a){"use strict";var r=a("23e7"),n=a("861d"),o=a("e8b5"),i=a("23cb"),s=a("50c4"),u=a("fc6a"),c=a("8418"),d=a("b622"),l=a("1dde"),p=a("ae40"),h=l("slice"),f=p("slice",{ACCESSORS:!0,0:0,1:2}),m=d("species"),b=[].slice,v=Math.max;r({target:"Array",proto:!0,forced:!h||!f},{slice:function(e,t){var a,r,d,l=u(this),p=s(l.length),h=i(e,p),f=i(void 0===t?p:t,p);if(o(l)&&(a=l.constructor,"function"!=typeof a||a!==Array&&!o(a.prototype)?n(a)&&(a=a[m],null===a&&(a=void 0)):a=void 0,a===Array||void 0===a))return b.call(l,h,f);for(r=new(void 0===a?Array:a)(v(f-h,0)),d=0;h<f;h++,d++)h in l&&c(r,d,l[h]);return r.length=d,r}})}}]);
//# sourceMappingURL=about.1cd51d66.js.map