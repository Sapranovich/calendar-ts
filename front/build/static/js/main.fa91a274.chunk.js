(this["webpackJsonpcalendar-ts"]=this["webpackJsonpcalendar-ts"]||[]).push([[0],{167:function(e,t,a){},168:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a.n(n),c=a(24),r=a.n(c),i=a(3),o=a(18),d=a(58),l=a(4);var u=function(e){return void 0===e||null===e||"object"===typeof e&&0===Object.keys(e).length||"string"===typeof e&&0===e.trim().length},m="SET_AUTH_USER",j="SET_LOADED",b={isAuthenticated:!1,isLoaded:!1,user:{}};var h="ADD",O="UPDATE",_="VIEW",p="admin",g="user",f="viewer",x="^(?=\\d{2}([\\/])\\d{2}\\1\\d{4}$)(?:0[1-9]|1\\d|[2][0-8]|29(?!.02.(?!(?!(?:[02468][1-35-79]|[13579][0-13-57-9])00)\\d{2}(?:[02468][048]|[13579][26])))|30(?!.02)|31(?=.(?:0[13578]|10|12))).(?:0[1-9]|1[012]).\\d{4}$",v="https://my-cool-project-123.herokuapp.com",N=["January","February","March","April","May","June","July","August","September","October","November","December"],y=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],w=[31,28,31,30,31,30,31,31,30,31,30,31];var D=function(e,t){for(var a=[],n=new Date(e,t),s=function(e){var t=e.getMonth();return function(e){return!(e%4||!(e%100)&&e%400)}(e.getFullYear())&&1===t?w[t]+1:w[t]}(n),c=function(e){var t=e.getDay();return 0===t?6:t-1}(n),r=1,i=0;i<(s+c)/7;i++){a[i]=[];for(var o=0;o<7;o++)a[i][o]=0===i&&o<c?{date:new Date(e,t,r-(c-o)),isCurrentMonth:!1}:r>s?{date:new Date(e,t,r++),isCurrentMonth:!1}:{date:new Date(e,t,r++),isCurrentMonth:!0}}return a},k="SET_ALL_START_DATES",E="UPDATE_DATA_MONTH",S="SET_CURRENT_HOUR",T="UPDATE_SELECTED_DATE",C={data:null,basicDate:null,currentDate:null,currentHour:null,selectedWeek:null,selectedDate:null,idSelectedDate:null};var I="SET_ALL_MESSAGES",A={isNoMessages:!1,isLoadedMessages:!1,messages:[]};var M="OPEN_MODAL",P="SET_MODAL_DATA",L="CLOSE_MODAL",H={isOpenModal:!1,modalType:null,modalData:{}};var F=Object(o.c)({calendar:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case k:return Object(l.a)(Object(l.a)({},e),{},{data:D(t.payload.getFullYear(),t.payload.getMonth()),currentDate:t.payload,basicDate:t.payload});case E:return Object(l.a)(Object(l.a)({},e),{},{data:D(t.payload.getFullYear(),t.payload.getMonth()),basicDate:t.payload});case S:return Object(l.a)(Object(l.a)({},e),{},{currentHour:t.payload});case T:return Object(l.a)(Object(l.a)({},e),{},{selectedDate:t.payload,idSelectedDate:t.payload.getTime()});default:return e}},modal:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case M:return Object(l.a)(Object(l.a)({},e),{},{isOpenModal:!0,modalType:t.payload});case P:return Object(l.a)(Object(l.a)({},e),{},{modalData:t.payload});case L:return H;default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m:return Object(l.a)(Object(l.a)({},e),{},{isAuthenticated:!u(t.payload),user:t.payload});case j:return Object(l.a)(Object(l.a)({},e),{},{isLoaded:t.payload});default:return e}},messages:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case I:return Object(l.a)(Object(l.a)({},e),{},{isNoMessages:u(t.payload),isLoadedMessages:!0,messages:t.payload});default:return e}}}),U=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||o.d,B=Object(o.e)(F,U(Object(o.a)(d.a))),q=a(7),Y=a.n(q),R=a(20),V=a(8),J=a(9),W=a(0),X=function(){return Object(W.jsx)("div",{className:"landing",children:Object(W.jsx)("div",{className:"wrapper",children:Object(W.jsx)("div",{className:"landing__wrapper",children:Object(W.jsxs)("div",{className:"landing__group",children:[Object(W.jsx)("h1",{className:"landing__title",children:"Calendar"}),Object(W.jsx)(V.b,{to:"/calendar",className:"button button__add",children:"get started"})]})})})})},$=a(6);function z(e){return{type:m,payload:e}}function G(e){return{type:j,payload:e}}var K=function(e){return{type:M,payload:e}},Q=function(){return{type:L}},Z=function(e){return function(t){Y.a.get("".concat(v,"/messages?userId=").concat(e,"&_sort=dayId,currentHour&_order=asc")).then((function(e){var a=e.data;t(function(e){return{type:I,payload:e}}(a))}))}};function ee(e){return{type:S,payload:e}}function te(e){return{type:T,payload:e}}function ae(e){return{type:E,payload:e}}var ne=function(e){var t=e.children,a=Object(i.c)((function(e){return e.auth})).isLoaded,n=Object(i.c)((function(e){return e.auth.user})),c=n.id,r=n.role,o=Object(i.b)();return s.a.useEffect((function(){var e=new Date,t=new Date(e.getFullYear(),e.getMonth(),e.getDate());return o(function(e){return{type:k,payload:e}}(t)),o(Z(c)),setTimeout((function(){return o(G(!0))}),1e3),function(){return o(G(!1))}}),[o,c,r]),Object(W.jsx)(s.a.Fragment,{children:a?t:Object(W.jsx)(Xe,{})})},se=a(12),ce=a(10),re=a.n(ce);var ie=function(e){var t={};return re.a.isEmail(e.email)||(t.email="Email entered incorrectly"),re.a.isEmpty(e.email)&&(t.email="Enter your email"),re.a.isLength(e.password,{min:6,max:30})||(t.password="The password must be at least 6 characters long"),re.a.isEmpty(e.password)&&(t.password="Enter password"),{errors:t,isValid:u(t)}};var oe=function(e){Y.a.defaults.headers.common.Authorization=e||null},de=function(e){var t=e.handleToggleButtonClick,a=e.registerUserEmail,n=Object(i.b)(),c=s.a.useState({email:"",password:""}),r=Object($.a)(c,2),o=r[0],d=r[1],u=s.a.useState({}),m=Object($.a)(u,2),j=m[0],b=m[1],h=function(e){d(Object(l.a)(Object(l.a)({},o),{},Object(se.a)({},e.target.name,e.target.value))),b(Object(l.a)(Object(l.a)({},j),{},Object(se.a)({request:""},e.target.name,"")))};s.a.useEffect((function(){a&&d((function(e){return Object(l.a)(Object(l.a)({},e),{},{email:a})}))}),[a]);return Object(W.jsxs)("form",{className:"sign-in-form",onSubmit:function(e){e.preventDefault();var t=ie(o),a=t.isValid,s=t.errors;a?Y.a.post("".concat(v,"/signin"),o).then((function(e){var t=e.data.accessToken;localStorage.setItem("accessToken",t),oe(t);var a=Object(R.a)(t).sub;Y.a.get("".concat(v,"/data-users/").concat(a)).then((function(e){return n(z(e.data))}))})).catch((function(e){b({request:e.response.data})})):b(s)},children:[Object(W.jsx)("h2",{className:"sign-in-form__title",children:"Sign In"}),Object(W.jsx)("div",{className:"sign-in-form__error-request-feedback",children:j.request}),Object(W.jsxs)("div",{className:"sign-in-form__group",children:[Object(W.jsx)("input",{type:"text",placeholder:"Email",className:"input sign-in-form__input",name:"email",value:o.email,onChange:h}),Object(W.jsx)("div",{className:"sign-in-form__error-feedback",children:j.email})]}),Object(W.jsxs)("div",{className:"sign-in-form__group",children:[Object(W.jsx)("input",{type:"password",placeholder:"Password",className:"input sign-in-form__input",name:"password",value:o.password,onChange:h}),Object(W.jsx)("div",{className:"sign-in-form__error-feedback",children:j.password})]}),Object(W.jsxs)("div",{className:"sign-in-form__group-buttons",children:[Object(W.jsx)("button",{type:"submit",className:"button button__prim",children:"Sign In"}),Object(W.jsxs)("p",{className:"sign-in-form__group-buttons-text",children:["You are new? ",Object(W.jsx)("span",{onClick:t,children:"Create new"})]})]})]})};var le=function(e,t){return{id:t,name:e.name,email:e.email,role:g}};var ue=function(e){var t={};return re.a.isLength(e.name,{min:2,max:30})||(t.name="Name must be between 2 and 30 characters"),re.a.isEmpty(e.name)&&(t.name="Enter your name"),re.a.isEmail(e.email)||(t.email="Email entered incorrectly"),re.a.isEmpty(e.email)&&(t.email="Enter your email"),re.a.isLength(e.password,{min:6,max:30})||(t.password="The password must be at least 6 characters long"),re.a.isEmpty(e.password)&&(t.password="Enter password"),re.a.isLength(e.password_confirmed,{min:6,max:30})||(t.password_confirmed="The password must be at least 6 characters long"),re.a.equals(e.password,e.password_confirmed)||(t.password_confirmed="Password and confirm password must match"),re.a.isEmpty(e.password_confirmed)&&(t.password_confirmed="Enter password"),{errors:t,isValid:u(t)}},me=function(e){var t=e.handleToggleButtonClick,a=e.setRegisterUserEmail,n=s.a.useState({name:"",email:"",password:"",password_confirmed:""}),c=Object($.a)(n,2),r=c[0],i=c[1],o=s.a.useState({}),d=Object($.a)(o,2),u=d[0],m=d[1],j=function(e){i(Object(l.a)(Object(l.a)({},r),{},Object(se.a)({},e.target.name,e.target.value))),m(Object(l.a)(Object(l.a)({},u),{},Object(se.a)({request:""},e.target.name,"")))};s.a.useEffect((function(){a("")}),[a]);return Object(W.jsxs)("form",{className:"sign-up-form",onSubmit:function(e){e.preventDefault();var n=ue(r),s=n.isValid,c=n.errors;if(s){var i={email:r.email,password:r.password};Y.a.post("".concat(v,"/signup"),i).then((function(e){var t=e.data.accessToken,a=+Object(R.a)(t).sub,n=le(r,a);Y.a.post("".concat(v,"/data-users"),n).catch((function(e){return m({request:e.response.data})}))})).then((function(){t(),a(i.email)})).catch((function(e){return m({request:e.response.data})}))}else m(c)},children:[Object(W.jsx)("h2",{className:"sign-up-form__title",children:"Sign Up"}),Object(W.jsx)("div",{className:"sign-up-form__error-request-feedback",children:u.request}),Object(W.jsxs)("div",{className:"sign-up-form__group",children:[Object(W.jsx)("input",{type:"text",placeholder:"Name",className:"input sign-up-form__input",name:"name",value:r.name,onChange:j}),Object(W.jsx)("div",{className:"sign-up-form__error-feedback",children:u.name})]}),Object(W.jsxs)("div",{className:"sign-up-form__group",children:[Object(W.jsx)("input",{type:"text",placeholder:"Email",className:"input sign-up-form__input",name:"email",value:r.email,onChange:j}),Object(W.jsx)("div",{className:"sign-up-form__error-feedback",children:u.email})]}),Object(W.jsxs)("div",{className:"sign-up-form__group",children:[Object(W.jsx)("input",{type:"password",placeholder:"Password",className:"input sign-up-form__input",name:"password",value:r.password,onChange:j}),Object(W.jsx)("div",{className:"sign-up-form__error-feedback",children:u.password})]}),Object(W.jsxs)("div",{className:"sign-up-form__group",children:[Object(W.jsx)("input",{type:"password",placeholder:"Password confirmed",className:"input sign-up-form__input",name:"password_confirmed",value:r.password_confirmed,onChange:j}),Object(W.jsx)("div",{className:"sign-up-form__error-feedback",children:u.password_confirmed})]}),Object(W.jsxs)("div",{className:"sign-up-form__group-buttons",children:[Object(W.jsx)("button",{type:"submit",className:"button button__prim",children:"Sign Up"}),Object(W.jsxs)("p",{className:"sign-up-form__group-buttons-text",children:["Already have account? ",Object(W.jsx)("span",{onClick:t,children:"Login"})]})]})]})},je=a(34),be=a.n(je),he=a(59);var Oe=function(e){return e>=10?"".concat(e,":00"):"0".concat(e,":00")},_e=function(e){var t=e.groupId,a=e.messageData,n=Object(i.c)((function(e){return e.auth.user.id})),c=Object(i.b)(),r=function(e){if(c({type:P,payload:a}),t){var n=new Date(t);c(te(n))}c(ee(a.currentHour)),c(K(e))};return Object(W.jsxs)("div",{className:"card-message border_bottom",children:[Object(W.jsx)("h3",{className:"card-message__time",children:Oe(a.currentHour)}),Object(W.jsx)("div",{className:"card-message__marker card-message__marker_".concat(a.role),children:a.role[0]}),Object(W.jsx)("h4",{className:"card-message__email",children:a.email}),Object(W.jsx)("div",{className:"card-message__message",children:a.message}),Object(W.jsxs)("div",{className:"card-message__buttons",children:[Object(W.jsx)("button",{className:"button button__prim",onClick:function(){return r(_)},children:"View"}),n===a.userId&&Object(W.jsxs)(s.a.Fragment,{children:[Object(W.jsx)("button",{className:"button button__prim",onClick:function(){return r(O)},children:"Update"}),Object(W.jsx)("button",{className:"button button__prim",onClick:function(){Y.a.delete("".concat(v,"/messages/").concat(a.id)).then((function(){c(Z(n))}))},children:"Remove"})]})]})]})};var pe=function(e){var t=new Date(e),a=t.getFullYear(),n=t.getMonth()+1,s=t.getDate();return"".concat(s<10?"0"+s:s,"-").concat(n<10?"0"+n:n,"-").concat(a)},ge=function(e){var t=e.group;return Object(W.jsxs)("div",{className:"segment-group",children:[Object(W.jsx)("h3",{className:"segment-group__date",children:pe(t.groupId)}),t.messages.map((function(e,a){return e&&Object(W.jsx)(_e,{messageData:e,groupId:t.groupId},a)}))]})};var fe=function(e){return e};var xe=function(e){var t={};return e.startParam.match(x)||(t.startParam="Date entered in the wrong format"),e.endParam.match(x)||(t.endParam="Date entered in the wrong format"),u(e.startParam)&&(t.startParam="Enter the date"),u(e.endParam)&&(t.endParam="Enter the date"),{errors:t,isValid:u(t)}};var ve=function(e){return Array.from(new Set(e.map((function(e){return e.dayId})))).map((function(t){var a=t?{groupId:t}:null;return Object(l.a)(Object(l.a)({},a),{},{messages:e.filter((function(e){return e.dayId===t}))})}))},Ne=function(e){var t=e.propsMessages,a=Object(i.c)((function(e){return e.messages})).messages,n=s.a.useState([]),c=Object($.a)(n,2),r=c[0],o=c[1],d=s.a.useState({}),u=Object($.a)(d,2),m=u[0],j=u[1],b=s.a.useState({startParam:"",endParam:""}),h=Object($.a)(b,2),O=h[0],_=h[1];s.a.useEffect((function(){o(t||a)}),[a,t]);var p=function(e){var t;_(Object(l.a)(Object(l.a)({},O),{},Object(se.a)({},e.target.name,fe(e.target.value)))),j(Object(l.a)(Object(l.a)({},m),{},(t={},Object(se.a)(t,e.target.name,""),Object(se.a)(t,"warning",""),t)))};return Object(W.jsxs)("div",{className:"segment",children:[Object(W.jsxs)("div",{className:"segment__header border_bottom",children:[Object(W.jsxs)("h2",{className:"segment__header-title",children:[r.length>1&&"Notes from ".concat(pe(r[0].dayId)," to ").concat(pe(r[r.length-1].dayId)),1===r.length&&"Notes for the ".concat(pe(r[0].dayId)),0===r.length&&"No notes"]}),Object(W.jsxs)("form",{className:"filter-messages-form",onSubmit:function(e){e.preventDefault();var t=xe(O),a=t.isValid,n=t.errors;if(a){var s=O.startParam.split("/"),c=O.endParam.split("/"),i=new Date(+s[2],+s[1]-1,+s[0]).getTime(),d=new Date(+c[2],+c[1]-1,+c[0]).getTime();if(i<d){var u=[d,i];i=u[0],d=u[1],_(Object(l.a)(Object(l.a)({},O),{},{startParam:O.endParam,endParam:O.startParam})),j(Object(l.a)(Object(l.a)({},m),{},{warning:"Dates are swapped"}))}var b=r.filter((function(e){return e.dayId<=i&&e.dayId>=d}));o(b)}else j(n)},children:[Object(W.jsx)("div",{className:"filter-messages-form__warning-feedback",children:m.warning}),Object(W.jsxs)("div",{className:"filter-messages-form__wrapper",children:[Object(W.jsxs)("div",{className:"filter-messages-form__group",children:[Object(W.jsx)("input",{className:"filter-messages-form__input",type:"text",name:"startParam",value:O.startParam,onChange:p,placeholder:"dd/mm/yyyy"}),Object(W.jsx)("div",{className:"filter-messages-form__error-feedback",children:m.startParam})]}),Object(W.jsxs)("div",{className:"filter-messages-form__group",children:[Object(W.jsx)("input",{className:"filter-messages-form__input",type:"text",name:"endParam",value:O.endParam,onChange:p,placeholder:"dd/mm/yyyy"}),Object(W.jsx)("div",{className:"filter-messages-form__error-feedback",children:m.endParam})]})]}),Object(W.jsxs)("div",{className:"filter-messages-form__buttons",children:[Object(W.jsx)("button",{className:"button button__prim filter-messages-form__button",children:"filter"}),Object(W.jsx)("button",{type:"button",className:"button button__prim filter-messages-form__button",onClick:function(){o(t||a),j({})},children:"reset"})]})]})]}),r&&Object(W.jsx)(s.a.Fragment,{children:ve(r).map((function(e,t){return Object(W.jsx)(ge,{group:e},t)}))})]})},ye=function(){var e=Object(J.g)().params.userId,t=s.a.useState(null),a=Object($.a)(t,2),n=a[0],c=a[1],r=s.a.useState(null),i=Object($.a)(r,2),o=i[0],d=i[1],u=s.a.useCallback(Object(he.a)(be.a.mark((function t(){var a,n;return be.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Y.a.get("".concat(v,"/data-users/").concat(e));case 2:return a=t.sent,t.next=5,Y.a.get("".concat(v,"/messages?userId=").concat(e,"&_sort=dayId,currentHour&_order=asc"));case 5:n=t.sent,c(a.data),d(n.data);case 8:case"end":return t.stop()}}),t)}))),[e]);s.a.useEffect((function(){u()}),[u]);var m=function(e){var t=Object(l.a)(Object(l.a)({},n),{},{role:e});Y.a.put("".concat(v,"/data-users/").concat(n.id),t).then((function(){u()})),console.log("\u0421\u043c\u0435\u043d\u0430 \u0440\u043e\u043b\u0438 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f ".concat(n.email," \u0441 ").concat(n.role," \u043d\u0430 ").concat(e," \u0441 \u043f\u043e\u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u043c \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u043c \u043d\u0430 \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u043d\u044b\u0439 \u043b\u0438\u0441\u0442 users"))};return o&&n?Object(W.jsxs)(s.a.Fragment,{children:[Object(W.jsx)("div",{className:"user-update",children:Object(W.jsxs)("div",{className:"user-update__group",children:[Object(W.jsx)("h2",{className:"user-update-role__email",children:n.email}),Object(W.jsxs)("div",{className:"user-update-role__buttons",children:[Object(W.jsx)("button",{className:"button button__add ".concat(n.role===g?"button_selected":""),onClick:function(){return m(g)},children:g}),Object(W.jsx)("button",{className:"button button__add ".concat(n.role===p?"button_selected":""),onClick:function(){return m(p)},children:p})]})]})}),Object(W.jsx)(Ne,{propsMessages:o})]}):Object(W.jsx)(Xe,{})},we=function(e){var t=e.currentHour,a=Object(i.c)((function(e){return e.auth.user})).role,n=Object(i.b)();return Object(W.jsxs)("div",{className:"card-message border_bottom",children:[Object(W.jsx)("h3",{className:"card-message__time",children:Oe(t)}),Object(W.jsx)("div",{className:"card-message__message",children:"Add note..."}),Object(W.jsx)("div",{className:"card-message__buttons",children:f!==a&&Object(W.jsx)("button",{className:"button button__prim",onClick:function(){n(ee(t)),n(K(h))},children:"Add"})})]})},De=function(){var e=Object(i.c)((function(e){return e.calendar})),t=e.idSelectedDate,a=e.selectedDate,n=Object(i.c)((function(e){return e.messages})).messages,s=Object(i.c)((function(e){return e.auth.user})).id,c=n.filter((function(e){return e.dayId===t&&e.userId===s}));return Object(W.jsxs)("div",{className:"day-list",children:[Object(W.jsx)("div",{className:"day-list__header border_bottom",children:Object(W.jsx)("div",{className:"day-list__day-name",children:pe(a.getTime())})}),Object(W.jsx)("div",{className:"day-list__group",children:Array(24).fill(null).map((function(e,t){var a=c.find((function(e){return e.currentHour===t}));return a?Object(W.jsx)(_e,{messageData:a},t):Object(W.jsx)(we,{currentHour:t},t)}))})]})},ke=Object(J.h)((function(e){var t=e.history,a=e.dayData,n=a.date,c=a.isCurrentMonth,r=Object(i.c)((function(e){return e.messages})).messages,o=Object(i.c)((function(e){return e.auth.user})).id,d=Object(i.b)(),l=Object(J.g)().path,m=s.a.useState([]),j=Object($.a)(m,2),b=j[0],h=j[1];s.a.useEffect((function(){h([]);var e=r.filter((function(e){return e.dayId===n.getTime()&&e.userId===o})).slice(0,3);u(e)||h(e)}),[n,o,r]);return Object(W.jsxs)("div",{className:"month-list__day",children:[Object(W.jsx)("div",{className:"month-list__day-header ".concat(c?"month-list__day-header_current":"month-list__day-header_other"),onClick:function(){d(te(n)),t.push("".concat(l,"/day"))},children:Object(W.jsx)("div",{className:"month-list__day-number",children:n.getDate()})}),Object(W.jsx)("ul",{className:"month-list__day-tasks",children:!u(b)&&b.map((function(e,t){return Object(W.jsxs)("li",{className:"month-list__day-task",children:[Object(W.jsx)("h3",{className:"month-list__day-task-time",children:Oe(e.currentHour)}),Object(W.jsx)("p",{className:"month-list__day-task-text",children:e.message})]},t)}))})]})})),Ee=Object(J.h)((function(e){var t=e.weekData,a=e.weekNumber;return Object(W.jsx)("div",{className:"month-list__week border_bottom",children:t.map((function(e,t){return Object(W.jsx)(ke,{dayData:e},t)}))},a)})),Se=function(){var e=Object(i.c)((function(e){return e.calendar})).data;return Object(W.jsxs)("div",{className:"month-list",children:[Object(W.jsx)("div",{className:"month-list__header border_bottom",children:y.map((function(e,t){return Object(W.jsx)("span",{className:"month-list__day-name",children:e},t)}))}),null===e||void 0===e?void 0:e.map((function(e,t){return Object(W.jsx)(Ee,{weekData:e,weekNumber:t},t)}))]})},Te=function(){return Object(W.jsx)("div",{className:"calendar",children:Object(W.jsxs)(J.d,{children:[Object(W.jsx)(J.b,{exact:!0,path:"/calendar",component:Se}),Object(W.jsx)(J.b,{exact:!0,path:"/calendar/user-data/:userId",component:ye}),Object(W.jsx)(J.b,{exact:!0,path:"/calendar/segment",component:Ne}),Object(W.jsx)(J.b,{exact:!0,path:"/calendar/day",component:De})]})})},Ce=Object(J.h)((function(e){var t=e.history,a=e.dayData,n=a.date,s=a.isCurrentMonth,c=Object(J.g)().path,r=Object(i.b)(),o=Object(i.c)((function(e){return e.calendar})),d=o.selectedDate,l=o.currentDate.getTime()===n.getTime(),u=d&&d.getTime()===n.getTime();return Object(W.jsx)("div",{className:"widget-month__day \n      ".concat(s?"":"widget-month__day_shadowed"," \n      ").concat(l?"widget-month__day_current":"","\n      ").concat(u?"widget-month__day_selected":""),onClick:function(){r(te(n)),t.push("".concat(c,"/day"))},children:Object(W.jsx)("span",{className:"widget-month__day__number",children:n.getDate()})})})),Ie=Object(J.h)((function(e){var t=e.weekData,a=e.weekNumber;return Object(W.jsx)("div",{className:"widget-month__week",children:t.map((function(e,t){return Object(W.jsx)(Ce,{dayData:e},t)}))},a)})),Ae=function(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.calendar})).basicDate;return Object(W.jsxs)("div",{className:"month-toggle",children:[Object(W.jsx)("button",{className:"month-toggle__button",onClick:function(){var a=new Date(t.getFullYear(),t.getMonth()-1);e(ae(a))},children:"\u276e"}),Object(W.jsx)("button",{className:"month-toggle__button",onClick:function(){var a=new Date(t.getFullYear(),t.getMonth()+1);e(ae(a))},children:"\u276f"})]})},Me=function(){var e=Object(i.c)((function(e){return e.calendar})),t=e.basicDate,a=e.data;return Object(W.jsxs)("div",{className:"widget-month border_bottom",children:[Object(W.jsxs)("div",{className:"widget-month__header border_bottom",children:[Object(W.jsxs)("h3",{className:"widget-month__date",children:[N[t.getMonth()]," ",t.getFullYear()]}),Object(W.jsx)(Ae,{})]}),Object(W.jsxs)("div",{className:"widget-month__list border_bottom",children:[Object(W.jsx)("div",{className:"widget-month__list-header",children:y.map((function(e,t){return Object(W.jsx)("span",{className:"widget-month__day-name",children:e},t)}))}),a.map((function(e,t){return Object(W.jsx)(Ie,{weekData:e,weekNumber:t},t)}))]})]})},Pe=function(e){var t=e.user,a=Object(J.g)().path;return Object(W.jsx)("li",{className:"user user_decor-".concat(t.role),children:Object(W.jsx)(V.b,{to:"".concat(a,"/user-data/").concat(t.id),children:Object(W.jsx)("h4",{className:"user__email",children:t.email})})})},Le=function(){var e=Object(i.c)((function(e){return e.auth.user})).id,t=s.a.useState(!1),a=Object($.a)(t,2),n=a[0],c=a[1],r=s.a.useState([]),o=Object($.a)(r,2),d=o[0],l=o[1];return s.a.useEffect((function(){Y.a.get("".concat(v,"/data-users/?id_ne=").concat(e)).then((function(e){var t=e.data;l(t),c(!0)}))}),[e]),Object(W.jsxs)("div",{className:"users-list",children:[Object(W.jsx)("h2",{className:"users-list__title border_bottom",children:"All users"}),n?Object(W.jsx)("ul",{className:"users-list__users border_bottom",children:d.map((function(e,t){return Object(W.jsx)(Pe,{user:e},t)}))}):Object(W.jsx)("div",{children:"Loading"})]})},He=function(e){var t=e.isOpenSideBar,a=Object(i.c)((function(e){return e.auth.user})),n=a.role,s=a.email;return Object(W.jsx)("div",{className:"side-bar ".concat(t?"side-bar_visible":""),children:Object(W.jsxs)("div",{className:"side-bar__wrapper",children:[Object(W.jsx)("h2",{className:"side-bar__email border_bottom",children:s}),Object(W.jsx)(Me,{}),n===p?Object(W.jsx)(Le,{}):null]})})},Fe=function(e){var t=e.isOpenSideBar,a=e.setIsOpenSideBar,n=Object(i.b)(),s=Object(i.c)((function(e){return e.calendar})),c=s.basicDate,r=s.currentDate,o=Object(i.c)((function(e){return e.auth.user})).email;return Object(W.jsx)("header",{className:"header border_bottom",children:Object(W.jsx)("div",{className:"wrapper",children:Object(W.jsxs)("div",{className:"header__wrapper",children:[Object(W.jsxs)("div",{className:"header__group",children:[Object(W.jsx)("span",{className:"hamburger",onClick:function(){a(!t)},children:Object(W.jsx)("span",{className:"hamburger__line"})}),Object(W.jsx)("h2",{className:"header__email",children:o}),Object(W.jsx)(Ae,{}),Object(W.jsxs)("h2",{className:"header__date",children:[N[c.getMonth()]," ",c.getFullYear()]}),Object(W.jsx)(V.b,{to:"/calendar",className:"button header__button button__add",children:"calendar"}),Object(W.jsx)(V.b,{to:"/calendar/segment",className:"button header__button button__add",children:"all notes"}),Object(W.jsx)(V.b,{to:"/calendar/day",className:"button header__button button__add",onClick:function(){n(te(r)),n(ae(r))},children:"today"})]}),Object(W.jsx)(V.b,{to:"/logout",className:"button header__button button__add",children:"logout"})]})})})};var Ue=function(){var e=Object(i.c)((function(e){return e.modal.modalData})),t=Object(i.c)((function(e){return e.calendar})),a=t.idSelectedDate,n=t.currentHour,s=Object(i.c)((function(e){return e.auth.user})),c=s.email,r=s.id,o=s.role;return u(e)?{userId:r,title:"",message:"",currentHour:n,email:c,role:o,dayId:a}:e};var Be=function(){var e=Object(i.b)(),t=Ue(),a=Object(i.c)((function(e){return e.modal})).modalType,n=s.a.useState(t),c=Object($.a)(n,2),r=c[0],o=c[1],d=function(e){o(Object(l.a)(Object(l.a)({},r),{},Object(se.a)({},e.target.name,e.target.value)))},m=function(){u(r.message)||(r.id?Y.a.put("".concat(v,"/messages/").concat(r.id),r).then((function(){e(Z(r.userId)),e(ee(null)),e(Q())})):Y.a.post("".concat(v,"/messages"),r).then((function(){e(Z(r.userId)),e(ee(null)),e(Q())})))};return Object(W.jsxs)("div",{className:"add-update-message-card",children:[Object(W.jsxs)("div",{className:"add-update-message-card__header",children:[Object(W.jsxs)("h3",{className:"add-update-message-card__date",children:["Date: ",pe(r.dayId),Object(W.jsx)("br",{}),Object(W.jsx)("br",{}),"Time: ",Oe(r.currentHour)]}),Object(W.jsx)("h3",{className:"add-update-message-card__author",children:r.email})]}),Object(W.jsx)("input",{type:"text",placeholder:"title",className:"input add-update-message-card__input",name:"title",value:r.title,onChange:d}),Object(W.jsx)("textarea",{placeholder:"note",className:"input add-update-message-card__textarea",name:"message",value:r.message,onChange:d}),Object(W.jsxs)("div",{className:"add-update-message-card__buttons",children:[O===a&&Object(W.jsx)("button",{className:"button button__prim",onClick:m,children:"update"}),h===a&&Object(W.jsx)("button",{className:"button button__prim",onClick:m,children:"add"})]})]})};var qe=function(){var e=Ue();return Object(W.jsxs)("div",{className:"view-message-card",children:[Object(W.jsxs)("div",{className:"view-message-card__header",children:[Object(W.jsxs)("h3",{className:"view-message-card__date",children:["Date: ",pe(e.dayId),Object(W.jsx)("br",{}),Object(W.jsx)("br",{}),"Time: ",Oe(e.currentHour)]}),Object(W.jsx)("h3",{className:"view-message-card__author",children:e.email})]}),Object(W.jsx)("h2",{className:"view-message-card__title",children:e.title}),Object(W.jsx)("p",{className:"view-message-card__text",children:e.message})]})};var Ye=function(){var e=Object(i.c)((function(e){return e.modal})).modalType,t=Object(i.b)();return Object(W.jsx)("div",{className:"modal modal_visibility",children:Object(W.jsxs)("div",{className:"modal__wrapper",children:[Object(W.jsx)("span",{className:"modal__close-button",onClick:function(){t(ee(null)),t(Q())}}),h===e&&Object(W.jsx)(Be,{}),O===e&&Object(W.jsx)(Be,{}),_===e&&Object(W.jsx)(qe,{})]})})},Re=function(){var e=s.a.useState(!1),t=Object($.a)(e,2),a=t[0],n=t[1],c=s.a.useState(""),r=Object($.a)(c,2),o=r[0],d=r[1],l=function(){n(!a)};return Object(i.c)((function(e){return e.auth.isAuthenticated}))?Object(W.jsx)(J.a,{exact:!0,to:"/calendar"}):Object(W.jsx)("div",{className:"login",children:Object(W.jsx)("div",{className:"wrapper",children:Object(W.jsxs)("div",{className:"login__wrapper",children:[Object(W.jsx)(V.b,{to:"/",className:"button login__button button__add",children:"landing page"}),a?Object(W.jsx)(me,{handleToggleButtonClick:l,setRegisterUserEmail:d}):Object(W.jsx)(de,{handleToggleButtonClick:l,registerUserEmail:o})]})})})},Ve=function(){var e=Object(i.b)();return s.a.useEffect((function(){localStorage.removeItem("accessToken"),oe(!1),e(z({}))}),[e]),Object(W.jsx)(J.a,{exact:!0,to:"/"})},Je=function(){var e=s.a.useState(!1),t=Object($.a)(e,2),a=t[0],n=t[1],c=Object(J.g)();return a?Object(W.jsx)(J.a,{exact:!0,to:c.url}):Object(W.jsx)("div",{className:"not-found",children:Object(W.jsx)("div",{className:"wrapper",children:Object(W.jsxs)("div",{className:"not-found__wrapper",children:[Object(W.jsx)("h2",{className:"not-found__title",children:"NotFound"}),Object(W.jsx)("button",{className:"button button__add",onClick:function(){n(!0)},children:"to home"})]})})})},We=function(){var e=Object(i.c)((function(e){return e.auth})).isAuthenticated,t=Object(i.c)((function(e){return e.modal})).isOpenModal,a=s.a.useState(!0),n=Object($.a)(a,2),c=n[0],r=n[1];return e?Object(W.jsxs)(ne,{children:[Object(W.jsx)(Fe,{isOpenSideBar:c,setIsOpenSideBar:r}),Object(W.jsx)("div",{className:"main",children:Object(W.jsx)("div",{className:"wrapper",children:Object(W.jsxs)("div",{className:"main__wrapper",children:[Object(W.jsx)(He,{isOpenSideBar:c}),Object(W.jsx)(Te,{})]})})}),t&&Object(W.jsx)(Ye,{})]}):Object(W.jsx)(J.a,{to:"/login"})},Xe=function(){return Object(W.jsx)("div",{className:"loading",children:Object(W.jsx)("h2",{className:"loading__title",children:"Loading"})})},$e=(a(167),function(){var e=Object(i.b)();return s.a.useEffect((function(){if(localStorage.accessToken){var t=Object(R.a)(localStorage.accessToken),a=t.sub,n=Date.now()/1e3;t.exp<n?(localStorage.removeItem("accessToken"),oe(!1),e(z({}))):(oe(localStorage.accessToken),Y.a.get("".concat(v,"/data-users/").concat(a)).then((function(t){e(z(t.data))})).catch((function(){console.log("\u0412 \u0434\u0430\u043d\u043d\u044b\u0439 \u043c\u043e\u043c\u0435\u043d\u0442 \u0438\u043c\u0435\u044e\u0442\u0441\u044f \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u044b \u0441 \u0441\u0435\u0440\u0432\u0435\u0440\u043e\u043c, \u043f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0437\u0430\u0439\u0442\u0438 \u043f\u043e\u0437\u0436\u0435...")})))}}),[e]),Object(W.jsx)("div",{className:"App",children:Object(W.jsx)(V.a,{children:Object(W.jsxs)(J.d,{children:[Object(W.jsx)(J.b,{exact:!0,path:"/",component:X}),Object(W.jsx)(J.b,{path:"/calendar",component:We}),Object(W.jsx)(J.b,{exact:!0,path:"/login",component:Re}),Object(W.jsx)(J.b,{exact:!0,path:"/logout",component:Ve}),Object(W.jsx)(J.b,{component:Je})]})})})});r.a.render(Object(W.jsx)(i.a,{store:B,children:Object(W.jsx)($e,{})}),document.getElementById("root"))}},[[168,1,2]]]);
//# sourceMappingURL=main.fa91a274.chunk.js.map