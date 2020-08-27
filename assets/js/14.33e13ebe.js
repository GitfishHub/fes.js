(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{341:function(t,e,a){},390:function(t,e,a){"use strict";var l=a(341);a.n(l).a},452:function(t,e,a){"use strict";a.r(e);var l={data:function(){return{checked:!1,value1:[],value2:[]}},methods:{change:function(t){console.log(t)}}},v=(a(390),a(43)),n=Object(v.a)(l,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"checkbox-多选"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#checkbox-多选"}},[t._v("#")]),t._v(" Checkbox 多选")]),t._v(" "),a("h2",{attrs:{id:"概述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[t._v("#")]),t._v(" 概述")]),t._v(" "),a("p",[t._v("表单组件-多选框。主要用于一组可选项多项选择，或者单独用于标记切换某种状态。")]),t._v(" "),a("h2",{attrs:{id:"代码示例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#代码示例"}},[t._v("#")]),t._v(" 代码示例")]),t._v(" "),a("ClientOnly",[a("row",[a("cell",{staticClass:"pr-20",attrs:{span:"12"}},[a("componetTemplate",{attrs:{title:"基础用法",template:"ui/templates/checkbox/1.html"},scopedSlots:t._u([{key:"demo",fn:function(){return[a("Checkbox-group",{on:{"on-change":t.change},model:{value:t.value1,callback:function(e){t.value1=e},expression:"value1"}},[a("Checkbox",{attrs:{value:"1"}},[t._v("\n                        apple\n                    ")]),t._v(" "),a("Checkbox",{attrs:{value:"2"}},[t._v("\n                        android\n                    ")]),t._v(" "),a("Checkbox",{attrs:{value:"3"}},[t._v("\n                        github\n                    ")])],1)]},proxy:!0},{key:"description",fn:function(){return[a("p",[t._v("Checkbox-group可以多选。在组合使用时，Checkbox不再根据自身value的值来判断是否选中，而是根据Checkbox-group的value值和自身value值判断。")])]},proxy:!0}])}),t._v(" "),a("componetTemplate",{attrs:{title:"单独使用",template:"ui/templates/checkbox/2.html"},scopedSlots:t._u([{key:"demo",fn:function(){return[a("Checkbox",{model:{value:t.checked,callback:function(e){t.checked=e},expression:"checked"}},[t._v("checkbox")]),t._v(" "),a("Checkbox",{attrs:{label:"使用disabeld，checkbox",disabled:""}})]},proxy:!0},{key:"description",fn:function(){return[a("p",[t._v("适合单独使用Checkbox的场景，用value控制Checkbox是否被选中。用v-model实现数据的双向通讯。")])]},proxy:!0}])})],1),t._v(" "),a("cell",{staticClass:"pl-20",attrs:{span:"12"}},[a("componetTemplate",{attrs:{title:"垂直方向",template:"ui/templates/checkbox/3.html"},scopedSlots:t._u([{key:"demo",fn:function(){return[a("Checkbox-group",{attrs:{vertical:""},model:{value:t.value2,callback:function(e){t.value2=e},expression:"value2"}},[a("Checkbox",{attrs:{value:"1"}},[t._v("\n                        apple\n                    ")]),t._v(" "),a("Checkbox",{attrs:{value:"2"}},[t._v("\n                        android\n                    ")]),t._v(" "),a("Checkbox",{attrs:{value:"3"}},[t._v("\n                        github\n                    ")])],1)]},proxy:!0},{key:"description",fn:function(){return[a("p",[t._v("设置属性 vertical ，选项垂直排列")])]},proxy:!0}])}),t._v(" "),a("componetTemplate",{attrs:{title:"只读和禁用",template:"ui/templates/checkbox/4.html"},scopedSlots:t._u([{key:"demo",fn:function(){return[a("Checkbox-group",{attrs:{readonly:""}},[a("Checkbox",{attrs:{value:"1"}},[t._v("\n                        apple\n                    ")]),t._v(" "),a("Checkbox",{attrs:{value:"2"}},[t._v("\n                        android\n                    ")]),t._v(" "),a("Checkbox",{attrs:{value:"3"}},[t._v("\n                        github\n                    ")])],1),t._v(" "),a("Checkbox-group",{attrs:{disabled:""}},[a("Checkbox",{attrs:{value:"1"}},[t._v("\n                        apple\n                    ")]),t._v(" "),a("Checkbox",{attrs:{value:"2"}},[t._v("\n                        android\n                    ")]),t._v(" "),a("Checkbox",{attrs:{value:"3"}},[t._v("\n                        github\n                    ")])],1)]},proxy:!0},{key:"description",fn:function(){return[a("p",[t._v("设置readonly 只读")]),t._v(" "),a("p",[t._v("设置disabled 禁用")])]},proxy:!0}])})],1)],1)],1),t._v(" "),a("h2",{attrs:{id:"api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#api"}},[t._v("#")]),t._v(" API")]),t._v(" "),a("h3",{attrs:{id:"checkboxgroup-props"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#checkboxgroup-props"}},[t._v("#")]),t._v(" CheckboxGroup Props")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("属性")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("类型")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("默认值")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("value")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("输入的值, 可以使用v-model实现数据的双向绑定")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Number, String, Boolean")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("''")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("vertical")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("是否垂直排列")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("false")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("readonly")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("是否只读")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("false")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("disabled")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("禁用")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("false")])])])]),t._v(" "),a("h3",{attrs:{id:"checkboxgroup-events"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#checkboxgroup-events"}},[t._v("#")]),t._v(" CheckboxGroup Events")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("事件名")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("返回值")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("on-change")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("值改变时触发")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("(value, event) => void")])])])]),t._v(" "),a("h3",{attrs:{id:"checkbox-props"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#checkbox-props"}},[t._v("#")]),t._v(" Checkbox Props")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("属性")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("类型")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("默认值")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("value")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("输入的值, 可以使用v-model实现数据的双向绑定")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("false")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("label")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("选项的内容")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("''")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("disabled")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("是否禁止选中")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("false")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("readonly")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("是否只读")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("false")])])])])],1)}),[],!1,null,null,null);e.default=n.exports}}]);