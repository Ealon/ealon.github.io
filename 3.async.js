(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[3],{"STA+":function(e,t,a){"use strict";var l=a("TqRt"),n=a("284h");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l(a("lwsE")),d=l(a("W8MJ")),u=l(a("a1gu")),m=l(a("Nsbk")),s=l(a("7W2i"));a("14J3");var i=l(a("BMrR"));a("jCWc");var f,c,o=l(a("kPKH")),p=n(a("q1tI")),g=a("MuoO"),h=a("LLXN"),E=l(a("Ww8N")),v=function(){return p.default.createElement("div",{className:E.default.banner},p.default.createElement("h2",null,p.default.createElement(h.FormattedMessage,{id:"app.home.introduce"})),p.default.createElement("img",{src:"/images/qrcode.png",width:"150",alt:"qrcode"}),p.default.createElement("h3",null,p.default.createElement(h.FormattedMessage,{id:"app.home.platform"})))},M=function(e){var t=e.AUD_TO_CNY,a=e.CNY_TO_AUD,l=e.CNY_TO_USD,n=e.USD_TO_CNY;return p.default.createElement("div",{className:E.default["exchange-rate"]},console.log(e),p.default.createElement("h2",{className:E.default["section-title"]},(0,h.formatMessage)({id:"app.home.latest"})," ",p.default.createElement("span",null," ",p.default.createElement(h.FormattedMessage,{id:"app.home.rate"})," ")),p.default.createElement("table",{className:E.default.table},p.default.createElement("tbody",null,p.default.createElement("tr",null,p.default.createElement("th",null,(0,h.formatMessage)({id:"app.home.pair"})),p.default.createElement("th",null,(0,h.formatMessage)({id:"app.home.buy"})),p.default.createElement("th",null,(0,h.formatMessage)({id:"app.home.sell"}))),p.default.createElement("tr",null,p.default.createElement("td",{style:{fontWeight:600}},(0,h.formatMessage)({id:"app.home.audcny"})),p.default.createElement("td",null,t),p.default.createElement("td",null,a)),p.default.createElement("tr",null,p.default.createElement("td",{style:{fontWeight:600}},(0,h.formatMessage)({id:"app.home.usdcny"})),p.default.createElement("td",null,n),p.default.createElement("td",null,l)))))},y=function(){return p.default.createElement("div",{className:E.default.div1},"www.sdce.com.au | ",(0,h.formatMessage)({id:"app.home.sdce"}))},b=function(){return p.default.createElement("div",{className:E.default.benefits},p.default.createElement("h2",{className:E.default["section-title"]},(0,h.formatMessage)({id:"app.home.key"})," ",p.default.createElement("span",null," ",(0,h.formatMessage)({id:"app.home.benefits"}))),p.default.createElement(i.default,{type:"flex",justify:"space-around",align:"middle"},p.default.createElement(o.default,{md:6,sm:12,xs:24,style:{textAlign:"center"}},p.default.createElement(x,{img:"/images/High-accessibility.png",title:(0,h.formatMessage)({id:"app.home.benefit1"})})),p.default.createElement(o.default,{md:6,sm:12,xs:24,style:{textAlign:"center"}},p.default.createElement(x,{img:"/images/Multiple-deposit-channels.png",title:(0,h.formatMessage)({id:"app.home.benefit2"})})),p.default.createElement(o.default,{md:6,sm:12,xs:24,style:{textAlign:"center"}},p.default.createElement(x,{img:"/images/Multi-platform-support.png",title:(0,h.formatMessage)({id:"app.home.benefit3"})})),p.default.createElement(o.default,{md:6,sm:12,xs:24,style:{textAlign:"center"}},p.default.createElement(x,{img:"/images/Multi-language-support.png",title:(0,h.formatMessage)({id:"app.home.benefit4"})}))))},x=function(e){var t=e.img,a=e.title;return p.default.createElement("div",{className:E.default.keyBenefit},p.default.createElement("img",{src:t,alt:a}),p.default.createElement("h3",null,a))},N=function(){return p.default.createElement("div",{className:E.default.intro},p.default.createElement("div",null,p.default.createElement("h2",null,p.default.createElement("span",null,(0,h.formatMessage)({id:"app.home.sce"})," "),(0,h.formatMessage)({id:"app.home.sce.service"})),p.default.createElement("p",null,(0,h.formatMessage)({id:"app.home.sce.content1"})),p.default.createElement("p",null,(0,h.formatMessage)({id:"app.home.sce.content2"}))))},w=function(){return p.default.createElement("div",{className:E.default.intro},p.default.createElement("div",null,p.default.createElement("h2",null,p.default.createElement("span",null,(0,h.formatMessage)({id:"app.home.intro"})),"(SDCE)"),p.default.createElement("p",null,(0,h.formatMessage)({id:"app.home.intro.content"}))))},k=(f=(0,g.connect)(function(e){var t=e.rate;return{rate:t}}),f(c=function(e){function t(){return(0,r.default)(this,t),(0,u.default)(this,(0,m.default)(t).apply(this,arguments))}return(0,s.default)(t,e),(0,d.default)(t,[{key:"componentDidMount",value:function(){var e=this.props.dispatch;e({type:"rate/fetch"}),this.timer=setInterval(function(){e({type:"rate/fetch"})},1e4)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timer)}},{key:"render",value:function(){var e=this.props.rate;return p.default.createElement("div",null,p.default.createElement(v,null),p.default.createElement(M,e),p.default.createElement(y,null),p.default.createElement(N,null),p.default.createElement(b,null),p.default.createElement(w,null))}}]),t}(p.Component))||c),_=k;t.default=_},Ww8N:function(e,t,a){e.exports={"section-title":"antd-pro-pages-home-index-section-title",div1:"antd-pro-pages-home-index-div1",banner:"antd-pro-pages-home-index-banner","exchange-rate":"antd-pro-pages-home-index-exchange-rate",benefits:"antd-pro-pages-home-index-benefits",keyBenefit:"antd-pro-pages-home-index-keyBenefit",table:"antd-pro-pages-home-index-table",intro:"antd-pro-pages-home-index-intro"}}}]);