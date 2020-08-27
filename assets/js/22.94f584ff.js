(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{349:function(t,e,a){},402:function(t,e,a){"use strict";var l=a(349);a.n(l).a},468:function(t,e,a){"use strict";a.r(e);var l={data:function(){return{checked:!1,value1:"1",value2:"1",value3:"1"}},mounted:function(){},methods:{change:function(t){console.log(t)}}},i=(a(402),a(43)),n=Object(i.a)(l,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"radio-单选"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#radio-单选"}},[t._v("#")]),t._v(" Radio 单选")]),t._v(" "),a("h2",{attrs:{id:"概述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[t._v("#")]),t._v(" 概述")]),t._v(" "),a("p",[t._v("表单组件-单选框。主要用于一组可选项单项选择，或者单独用于切换到选中状态。")]),t._v(" "),a("h2",{attrs:{id:"代码示例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#代码示例"}},[t._v("#")]),t._v(" 代码示例")]),t._v(" "),a("ClientOnly",[a("row",[a("cell",{staticClass:"pr-20",attrs:{span:"12"}},[a("componetTemplate",{attrs:{title:"基础用法",template:"ui/templates/radio/1.html"},scopedSlots:t._u([{key:"demo",fn:function(){return[a("Radio-group",{on:{"on-change":t.change},model:{value:t.value1,callback:function(e){t.value1=e},expression:"value1"}},[a("Radio",{attrs:{value:"1"}},[t._v("\n                        apple\n                    ")]),t._v(" "),a("Radio",{attrs:{value:"2"}},[t._v("\n                        android\n                    ")]),t._v(" "),a("Radio",{attrs:{value:"3"}},[t._v("\n                        github\n                    ")])],1)]},proxy:!0},{key:"description",fn:function(){return[a("p",[t._v("使用Radio-group实现一组互斥的选项组。在组合使用时，Radio不再只根据value的值来判断是否选中，而是根据Radio-group的value值和自身value值判断。")])]},proxy:!0}])}),t._v(" "),a("componetTemplate",{attrs:{title:"单独使用Radio",template:"ui/templates/radio/2.html"},scopedSlots:t._u([{key:"demo",fn:function(){return[a("Radio",{model:{value:t.checked,callback:function(e){t.checked=e},expression:"checked"}},[t._v("\n                    是否同意xxxx\n                ")])]},proxy:!0},{key:"description",fn:function(){return[a("p",[t._v("适合单独使用Radio的场景，用value控制radio是否被选中。用v-model实现数据的双向通讯。")])]},proxy:!0}])}),t._v(" "),a("componetTemplate",{attrs:{title:"只读和禁用",template:"ui/templates/radio/3.html"},scopedSlots:t._u([{key:"demo",fn:function(){return[a("Radio-group",{attrs:{readonly:""}},[a("Radio",{attrs:{value:"1"}},[t._v("\n                        北京\n                    ")]),t._v(" "),a("Radio",{attrs:{value:"2"}},[t._v("\n                        上海\n                    ")]),t._v(" "),a("Radio",{attrs:{value:"3"}},[t._v("\n                        深圳\n                    ")])],1),t._v(" "),a("Radio-group",{attrs:{disabled:""}},[a("Radio",{attrs:{value:"1"}},[t._v("\n                        北京\n                    ")]),t._v(" "),a("Radio",{attrs:{value:"2"}},[t._v("\n                        上海\n                    ")]),t._v(" "),a("Radio",{attrs:{value:"3"}},[t._v("\n                        深圳\n                    ")])],1)]},proxy:!0},{key:"description",fn:function(){return[a("p",[t._v("设置属性readonly, 只读状态")]),t._v(" "),a("p",[t._v("设置属性disabled, 禁用状态")])]},proxy:!0}])})],1),t._v(" "),a("cell",{staticClass:"pl-20",attrs:{span:"12"}},[a("componetTemplate",{attrs:{title:"垂直方向",template:"ui/templates/radio/4.html"},scopedSlots:t._u([{key:"demo",fn:function(){return[a("Radio-group",{attrs:{vertical:""},model:{value:t.value2,callback:function(e){t.value2=e},expression:"value2"}},[a("Radio",{attrs:{value:"1"}},[t._v("\n                        apple\n                    ")]),t._v(" "),a("Radio",{attrs:{value:"2"}},[t._v("\n                        android\n                    ")]),t._v(" "),a("Radio",{attrs:{value:"3"}},[t._v("\n                        github\n                    ")])],1)]},proxy:!0},{key:"description",fn:function(){return[a("p",[t._v("设置属性 vertical ，选项垂直排列")])]},proxy:!0}])}),t._v(" "),a("componetTemplate",{attrs:{title:"按钮",template:"ui/templates/radio/5.html"},scopedSlots:t._u([{key:"demo",fn:function(){return[a("Radio-group",{attrs:{type:"button"},model:{value:t.value3,callback:function(e){t.value3=e},expression:"value3"}},[a("Radio",{attrs:{value:"1"}},[t._v("\n                        北京\n                    ")]),t._v(" "),a("Radio",{attrs:{value:"2"}},[t._v("\n                        上海\n                    ")]),t._v(" "),a("Radio",{attrs:{value:"3"}},[t._v("\n                        深圳\n                    ")])],1)]},proxy:!0},{key:"description",fn:function(){return[a("p",[t._v("设置属性 type=button ，radio显示为按钮的样子")])]},proxy:!0}])})],1)],1)],1),t._v(" "),a("h2",{attrs:{id:"api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#api"}},[t._v("#")]),t._v(" API")]),t._v(" "),a("h3",{attrs:{id:"radiogroup-props"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#radiogroup-props"}},[t._v("#")]),t._v(" RadioGroup Props")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("属性")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("类型")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("默认值")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("value")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("输入的值, 可以使用v-model实现数据的双向绑定")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Number, String, Boolean")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("''")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("vertical")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("是否垂直排列")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("false")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("type")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("单选按钮组类型，可选值有"),a("code",[t._v("button")]),t._v("和''")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("''")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("readonly")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("是否只读")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("false")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("disabled")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("禁用")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("false")])])])]),t._v(" "),a("h3",{attrs:{id:"radiogroup-events"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#radiogroup-events"}},[t._v("#")]),t._v(" RadioGroup Events")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("事件名")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("返回值")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("on-change")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("值改变时触发")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("(value, event) => void")])])])]),t._v(" "),a("h3",{attrs:{id:"radio-props"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#radio-props"}},[t._v("#")]),t._v(" Radio Props")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("属性")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("类型")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("默认值")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("value")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("输入的值, 可以使用v-model实现数据的双向绑定")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("false")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("label")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("选项的内容")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("''")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("disabled")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("是否禁止选中")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("false")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("readonly")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("是否只读")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("false")])])])])],1)}),[],!1,null,null,null);e.default=n.exports}}]);