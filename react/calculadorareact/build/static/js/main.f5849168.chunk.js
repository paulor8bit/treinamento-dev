(this.webpackJsonpcalculadora=this.webpackJsonpcalculadora||[]).push([[0],[,function(_,e,a){"use strict";var t=a(0),r=a.n(t);a(20);e.a=function(_){var e="button ";return e+=_.operation?"operation":"",e+=_.double?"double":"",e+=_.triple?"triple":"",r.a.createElement("button",{onClick:function(e){return _.click&&_.click(_.label)},className:e},_.label)}},,,,,,function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return Calculator}));var C_scripts_javascript_react_calculadora_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(3),C_scripts_javascript_react_calculadora_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(4),C_scripts_javascript_react_calculadora_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(8),C_scripts_javascript_react_calculadora_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(9),C_scripts_javascript_react_calculadora_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(2),C_scripts_javascript_react_calculadora_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(11),C_scripts_javascript_react_calculadora_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(12),react__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__),_Calculator_css__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(19),_Calculator_css__WEBPACK_IMPORTED_MODULE_8___default=__webpack_require__.n(_Calculator_css__WEBPACK_IMPORTED_MODULE_8__),_components_Button__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(1),_components_Display__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(10),initialState={displayValue:"0",clearDisplay:!1,operation:null,values:[0,0],current:0},Calculator=function(_Component){Object(C_scripts_javascript_react_calculadora_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__.a)(Calculator,_Component);var _super=Object(C_scripts_javascript_react_calculadora_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_5__.a)(Calculator);function Calculator(_){var e;return Object(C_scripts_javascript_react_calculadora_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__.a)(this,Calculator),(e=_super.call(this,_)).state=Object(C_scripts_javascript_react_calculadora_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__.a)({},initialState),e.clearMemory=e.clearMemory.bind(Object(C_scripts_javascript_react_calculadora_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__.a)(e)),e.setOperation=e.setOperation.bind(Object(C_scripts_javascript_react_calculadora_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__.a)(e)),e.addDigit=e.addDigit.bind(Object(C_scripts_javascript_react_calculadora_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__.a)(e)),e}return Object(C_scripts_javascript_react_calculadora_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__.a)(Calculator,[{key:"clearMemory",value:function(){this.setState(Object(C_scripts_javascript_react_calculadora_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__.a)({},initialState))}},{key:"setOperation",value:function setOperation(operation){if(0===this.state.current)this.setState({operation:operation,current:1,clearDisplay:!0});else{var equals="="===operation,currentOperation=this.state.operation,values=Object(C_scripts_javascript_react_calculadora_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.a)(this.state.values);try{values[0]=eval("".concat(values[0]," ").concat(currentOperation," ").concat(values[1]))}catch(e){values[0]=this.state.values[0]}values[1]=0,this.setState({displayValue:values[0],operation:equals?null:operation,current:equals?0:1,clearDisplay:!equals,values:values})}}},{key:"addDigit",value:function(_){if("."!==_||!this.state.displayValue.includes(".")){var e=("0"===this.state.displayValue||this.state.clearDisplay?"":this.state.displayValue)+_;if(this.setState({displayValue:e,clearDisplay:!1}),"."!==_){var a=this.state.current,t=parseFloat(e),r=Object(C_scripts_javascript_react_calculadora_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.a)(this.state.values);r[a]=t,this.setState({values:r}),console.log(r)}}}},{key:"render",value:function(){return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div",{className:"calculator"},react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_Display__WEBPACK_IMPORTED_MODULE_10__.a,{value:this.state.displayValue}),react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_Button__WEBPACK_IMPORTED_MODULE_9__.a,{label:"AC",click:this.clearMemory,triple:!0}),react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_Button__WEBPACK_IMPORTED_MODULE_9__.a,{label:"/",click:this.setOperation,operation:!0}),react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_Button__WEBPACK_IMPORTED_MODULE_9__.a,{label:"7",click:this.addDigit}),react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_Button__WEBPACK_IMPORTED_MODULE_9__.a,{label:"8",click:this.addDigit}),react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_Button__WEBPACK_IMPORTED_MODULE_9__.a,{label:"9",click:this.addDigit}),react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_Button__WEBPACK_IMPORTED_MODULE_9__.a,{label:"*",click:this.setOperation,operation:!0}),react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_Button__WEBPACK_IMPORTED_MODULE_9__.a,{label:"4",click:this.addDigit}),react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_Button__WEBPACK_IMPORTED_MODULE_9__.a,{label:"5",click:this.addDigit}),react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_Button__WEBPACK_IMPORTED_MODULE_9__.a,{label:"6",click:this.addDigit}),react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_Button__WEBPACK_IMPORTED_MODULE_9__.a,{label:"-",click:this.setOperation,operation:!0}),react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_Button__WEBPACK_IMPORTED_MODULE_9__.a,{label:"1",click:this.addDigit}),react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_Button__WEBPACK_IMPORTED_MODULE_9__.a,{label:"2",click:this.addDigit}),react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_Button__WEBPACK_IMPORTED_MODULE_9__.a,{label:"3",click:this.addDigit}),react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_Button__WEBPACK_IMPORTED_MODULE_9__.a,{label:"+",click:this.setOperation,operation:!0}),react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_Button__WEBPACK_IMPORTED_MODULE_9__.a,{label:"0",click:this.addDigit,double:!0}),react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_Button__WEBPACK_IMPORTED_MODULE_9__.a,{label:".",click:this.addDigit}),react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_Button__WEBPACK_IMPORTED_MODULE_9__.a,{label:"=",click:this.setOperation,operation:!0}))}}]),Calculator}(react__WEBPACK_IMPORTED_MODULE_7__.Component)},,,function(_,e,a){"use strict";var t=a(0),r=a.n(t);a(21);e.a=function(_){return r.a.createElement("div",{className:"display"},_.value)}},,,function(_,e,a){_.exports=a(22)},,,,,function(_,e,a){},function(_,e,a){},function(_,e,a){},function(_,e,a){},function(_,e,a){"use strict";a.r(e);var t=a(0),r=a.n(t),l=a(6),c=a.n(l),s=(a(18),a(7)),n=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function o(_){navigator.serviceWorker.register(_).then((function(_){_.onupdatefound=function(){var e=_.installing;e.onstatechange=function(){"installed"===e.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(_){console.error("Error during service worker registration:",_)}))}c.a.render(r.a.createElement("div",null,r.a.createElement("h1",null,"Calculadora"),r.a.createElement(s.a,null)),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var _="".concat("","/service-worker.js");n?(!function(_){fetch(_).then((function(e){404===e.status||-1===e.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(_){_.unregister().then((function(){window.location.reload()}))})):o(_)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(_),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")}))):o(_)}))}}()}],[[13,1,2]]]);
//# sourceMappingURL=main.f5849168.chunk.js.map