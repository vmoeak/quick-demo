(function(){
    
    var createPageHandler = function() {
      return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "c:\\Program Files (x86)\\Quickapp\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\script-loader.js!c:\\Program Files (x86)\\Quickapp\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\module-loader.js!c:\\Program Files (x86)\\Quickapp\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\babel-loader\\lib\\index.js?cwd=e:\\quick\\demo&cacheDirectory&plugins[]=c:\\Program Files (x86)\\Quickapp\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\babel-plugin-jsx.js&comments=false&configFile=c:\\Program Files (x86)\\Quickapp\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\packager\\babel.config.js!c:\\Program Files (x86)\\Quickapp\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\access-loader.js!c:\\Program Files (x86)\\Quickapp\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\fragment-loader.js?index=0&type=script!./src/pages/DemoDetail/index.ux?uxType=page":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** c:\Program Files (x86)\Quickapp\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\script-loader.js!c:\Program Files (x86)\Quickapp\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\module-loader.js!c:\Program Files (x86)\Quickapp\resources\app\extensions\hap-debugger\node_modules.asar\babel-loader\lib\index.js?cwd=e:\quick\demo&cacheDirectory&plugins[]=c:\Program Files (x86)\Quickapp\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\babel-plugin-jsx.js&comments=false&configFile=c:\Program Files (x86)\Quickapp\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\packager\babel.config.js!c:\Program Files (x86)\Quickapp\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\access-loader.js!c:\Program Files (x86)\Quickapp\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\fragment-loader.js?index=0&type=script!./src/pages/DemoDetail/index.ux?uxType=page ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = function __scriptModule__ (module, exports, $app_require$){"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  private: {
    text: '?????????????????????'
  },

  onWelcomeBtnClick() {
    $utils.showToast('????????????????????????????????????????????????????????????');
  }

};
exports.default = _default;
const moduleOwn = exports.default || module.exports;
const accessors = ['public', 'protected', 'private'];

if (moduleOwn.data && accessors.some(function (acc) {
  return moduleOwn[acc];
})) {
  throw new Error('??????VM??????????????????data?????????"' + accessors.join(',') + '"????????????????????????private??????data??????');
} else if (!moduleOwn.data) {
  moduleOwn.data = {};
  moduleOwn._descriptor = {};
  accessors.forEach(function (acc) {
    const accType = typeof moduleOwn[acc];

    if (accType === 'object') {
      moduleOwn.data = Object.assign(moduleOwn.data, moduleOwn[acc]);

      for (const name in moduleOwn[acc]) {
        moduleOwn._descriptor[name] = {
          access: acc
        };
      }
    } else if (accType === 'function') {
      console.warn('??????VM??????????????????' + acc + '???????????????????????????????????????');
    }
  });
}}

/***/ }),

/***/ "c:\\Program Files (x86)\\Quickapp\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\style-loader.js?index=0&type=style!./node_modules/sass-loader/dist/cjs.js!c:\\Program Files (x86)\\Quickapp\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\fragment-loader.js?index=0&type=style!./src/pages/DemoDetail/index.ux?uxType=page":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** c:\Program Files (x86)\Quickapp\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\style-loader.js?index=0&type=style!./node_modules/sass-loader/dist/cjs.js!c:\Program Files (x86)\Quickapp\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\fragment-loader.js?index=0&type=style!./src/pages/DemoDetail/index.ux?uxType=page ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = {
  ".wrapper": {
    "flexDirection": "column",
    "justifyContent": "center",
    "alignItems": "center",
    "marginTop": "0px",
    "marginRight": "50px",
    "marginBottom": "0px",
    "marginLeft": "50px"
  },
  ".wrapper .title": {
    "fontSize": "40px",
    "textAlign": "center",
    "color": "#000000",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "wrapper"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "title"
        }
      ]
    }
  },
  ".wrapper .desc": {
    "marginTop": "50px",
    "color": "#9393aa",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "wrapper"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "desc"
        }
      ]
    }
  },
  ".wrapper .btn": {
    "width": "450px",
    "height": "80px",
    "borderRadius": "40px",
    "backgroundColor": "#09ba07",
    "color": "#ffffff",
    "fontSize": "30px",
    "marginTop": "80px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "wrapper"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "btn"
        }
      ]
    }
  }
}

/***/ }),

/***/ "c:\\Program Files (x86)\\Quickapp\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\template-loader.js!c:\\Program Files (x86)\\Quickapp\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\fragment-loader.js?index=0&type=template!./src/pages/DemoDetail/index.ux?uxType=page&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** c:\Program Files (x86)\Quickapp\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\template-loader.js!c:\Program Files (x86)\Quickapp\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\fragment-loader.js?index=0&type=template!./src/pages/DemoDetail/index.ux?uxType=page& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = {
  "type": "div",
  "attr": {},
  "classList": [
    "wrapper"
  ],
  "children": [
    {
      "type": "text",
      "attr": {
        "value": function () {return this.text}
      },
      "classList": [
        "title"
      ]
    },
    {
      "type": "text",
      "attr": {
        "value": "????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????APP????????????????????????????????????????????????????????? "
      },
      "classList": [
        "desc"
      ]
    },
    {
      "type": "text",
      "attr": {
        "value": "?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????? "
      },
      "classList": [
        "desc"
      ]
    },
    {
      "type": "input",
      "attr": {
        "type": "button",
        "value": "????????????"
      },
      "classList": [
        "btn"
      ],
      "events": {
        "click": "onWelcomeBtnClick"
      }
    }
  ]
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!***************************************************!*\
  !*** ./src/pages/DemoDetail/index.ux?uxType=page ***!
  \***************************************************/

var $app_style$ = __webpack_require__(/*! !c:\Program Files (x86)\Quickapp\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\style-loader.js?index=0&type=style!sass-loader!c:\Program Files (x86)\Quickapp\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\fragment-loader.js?index=0&type=style!./index.ux?uxType=page */ "c:\\Program Files (x86)\\Quickapp\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\style-loader.js?index=0&type=style!./node_modules/sass-loader/dist/cjs.js!c:\\Program Files (x86)\\Quickapp\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\fragment-loader.js?index=0&type=style!./src/pages/DemoDetail/index.ux?uxType=page")

var $app_script$ = __webpack_require__(/*! !c:\Program Files (x86)\Quickapp\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\script-loader.js!c:\Program Files (x86)\Quickapp\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\module-loader.js!c:\Program Files (x86)\Quickapp\resources\app\extensions\hap-debugger\node_modules.asar\babel-loader\lib\index.js?cwd=e:\quick\demo&cacheDirectory&plugins[]=c:\Program Files (x86)\Quickapp\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\babel-plugin-jsx.js&comments=false&configFile=c:\Program Files (x86)\Quickapp\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\packager\babel.config.js!c:\Program Files (x86)\Quickapp\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\access-loader.js!c:\Program Files (x86)\Quickapp\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\fragment-loader.js?index=0&type=script!./index.ux?uxType=page */ "c:\\Program Files (x86)\\Quickapp\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\script-loader.js!c:\\Program Files (x86)\\Quickapp\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\module-loader.js!c:\\Program Files (x86)\\Quickapp\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\babel-loader\\lib\\index.js?cwd=e:\\quick\\demo&cacheDirectory&plugins[]=c:\\Program Files (x86)\\Quickapp\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\babel-plugin-jsx.js&comments=false&configFile=c:\\Program Files (x86)\\Quickapp\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\packager\\babel.config.js!c:\\Program Files (x86)\\Quickapp\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\access-loader.js!c:\\Program Files (x86)\\Quickapp\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\fragment-loader.js?index=0&type=script!./src/pages/DemoDetail/index.ux?uxType=page")

$app_define$('@app-component/index', [], function($app_require$, $app_exports$, $app_module$) {
     $app_script$($app_module$, $app_exports$, $app_require$)
         if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = __webpack_require__(/*! !c:\Program Files (x86)\Quickapp\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\template-loader.js!c:\Program Files (x86)\Quickapp\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\fragment-loader.js?index=0&type=template!./index.ux?uxType=page& */ "c:\\Program Files (x86)\\Quickapp\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\template-loader.js!c:\\Program Files (x86)\\Quickapp\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\fragment-loader.js?index=0&type=template!./src/pages/DemoDetail/index.ux?uxType=page&")

     $app_module$.exports.style = $app_style$
})
$app_bootstrap$('@app-component/index',{ packagerVersion: "1.9.2" })
})();

/******/ })()
;
    };
    if (typeof window === "undefined") {
      return createPageHandler();
    }
    else {
      window.createPageHandler = createPageHandler
    }
  })();