(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{453:function(t,e,l){"use strict";l.r(e);var a={components:{},data:function(){return{activeKeys:["1","2"]}},methods:{}},i=l(43),s=Object(i.a)(a,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[l("h1",{attrs:{id:"collapse-折叠面板"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#collapse-折叠面板"}},[t._v("#")]),t._v(" Collapse 折叠面板")]),t._v(" "),l("h2",{attrs:{id:"概述"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[t._v("#")]),t._v(" 概述")]),t._v(" "),l("p",[t._v("把一大段内容折叠起来。")]),t._v(" "),l("h2",{attrs:{id:"代码示例"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#代码示例"}},[t._v("#")]),t._v(" 代码示例")]),t._v(" "),l("ClientOnly",[l("row",[l("cell",{staticClass:"pr-20",attrs:{span:"12"}},[l("componetTemplate",{attrs:{title:"基本使用",template:"ui/templates/collapse/1.html"},scopedSlots:t._u([{key:"demo",fn:function(){return[l("collapse",{attrs:{accordion:"","icon-position":"left"},model:{value:t.activeKeys,callback:function(e){t.activeKeys=e},expression:"activeKeys"}},[l("collapse-panel",{attrs:{name:"1"}},[l("template",{slot:"title"},[t._v("\n                            一致性 Consistency"),l("Icon",{attrs:{type:"md-help-circle"}})],1),t._v(" "),l("div",[t._v("与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；")]),t._v(" "),l("div",[t._v("在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。")])],2),t._v(" "),l("collapse-panel",{attrs:{name:"2",title:"反馈 Feedback"}},[l("div",[t._v("控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；")]),t._v(" "),l("div",[t._v("页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。")])]),t._v(" "),l("collapse-panel",{attrs:{name:"3",title:"效率 Efficiency"}},[l("div",[t._v("简化流程：设计简洁直观的操作流程；")]),t._v(" "),l("div",[t._v("清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；")]),t._v(" "),l("div",[t._v("帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。")])]),t._v(" "),l("collapse-panel",{attrs:{name:"4",title:"可控 Controllability"}},[l("div",[t._v("用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；")]),t._v(" "),l("div",[t._v("结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。")])])],1)]},proxy:!0},{key:"description",fn:function(){return[l("p",[t._v("通过匹配Collpase的value跟CollapsePanel的name属性，如果包含，则当前选项展开")])]},proxy:!0}])})],1),t._v(" "),l("cell",{staticClass:"pl-20",attrs:{span:"12"}})],1)],1),t._v(" "),l("h2",{attrs:{id:"api"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#api"}},[t._v("#")]),t._v(" API")]),t._v(" "),l("h3",{attrs:{id:"collapse-props"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#collapse-props"}},[t._v("#")]),t._v(" Collapse Props")]),t._v(" "),l("table",[l("thead",[l("tr",[l("th",{staticStyle:{"text-align":"left"}},[t._v("属性")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("类型")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("默认值")])])]),t._v(" "),l("tbody",[l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("value")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("\b展开的选项，可以使用v-model双向绑定")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("String/Number/Array")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("null")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("bordered")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("是否有边框")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("false")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("accordion")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("是否手风琴")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("false")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("iconPosition")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("icon的位置，可选值有"),l("code",[t._v("left``right")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("right")])])])])]),t._v(" "),l("h3",{attrs:{id:"collapsepanel-props"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#collapsepanel-props"}},[t._v("#")]),t._v(" CollapsePanel Props")]),t._v(" "),l("table",[l("thead",[l("tr",[l("th",{staticStyle:{"text-align":"left"}},[t._v("属性")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("类型")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("默认值")])])]),t._v(" "),l("tbody",[l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("disabled")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("\b是否禁用")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("false")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("title")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("标题的内容")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("''")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("name")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("选项的名称")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("String/Number")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("null")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("forceRender")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("是否强制展开")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("false")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("showArrow")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("是否显示icon")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("true")])])])])],1)}),[],!1,null,null,null);e.default=s.exports}}]);