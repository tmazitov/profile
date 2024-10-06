var z=Object.defineProperty;var Q=(t,e,s)=>e in t?z(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s;var V=(t,e,s)=>(Q(t,typeof e!="symbol"?e+"":e,s),s);import{i as w,P as J}from"./ProjectCard-508adec6.js";import{d as I,c as u,g as h,u as g,a as c,_ as y,x as G,y as L,r as x,t as k,h as p,n as C,f as d,w as O,v as K,I as M,p as B,k as S,T as j,z as $,A as W,i as A,F as U,b as D,j as X,B as Y,C as Z,s as ee,l as te}from"./index-13831189.js";import{a as le,s as F}from"./projects-a1103a2c.js";const se={class:"base-icon-button"},oe=I({__name:"BaseIconButton",props:{icon:{type:String,required:!0}},setup(t){return(e,s)=>(c(),u("div",se,[h(g(w.Icon),{icon:t.icon,color:"var(--text-color)",height:"18px",width:"18px"},null,8,["icon"])]))}});const ie=y(oe,[["__scopeId","data-v-378d5fbd"]]),ae={key:0,class:"label"},re=["placeholder","value"],ne=I({__name:"BaseInput",props:G({placeholder:String,rightIcon:Object,leftIcon:Object,label:String},{modelValue:{required:!0},modelModifiers:{}}),emits:["update:modelValue"],setup(t){const e=L(t,"modelValue"),s=x(!1),a=n=>{e.value=n.target.value};return(n,l)=>(c(),u("div",{class:C(["base-input",{focused:s.value}])},[t.label?(c(),u("div",ae,k(t.label),1)):p("",!0),t.leftIcon&&!t.leftIcon.isHidden?(c(),u("div",{key:1,class:C(["left icon",{"is-button":t.leftIcon.onClick}])},[h(g(M),{icon:t.leftIcon.name,width:t.leftIcon.width,height:t.leftIcon.height,color:t.leftIcon.color,onClick:l[0]||(l[0]=o=>t.leftIcon.onClick?t.leftIcon.onClick():null)},null,8,["icon","width","height","color"])],2)):p("",!0),d("input",{type:"text",placeholder:t.placeholder,value:e.value,onInput:a,onFocus:l[1]||(l[1]=o=>s.value=!0),onBlur:l[2]||(l[2]=o=>s.value=!1)},null,40,re),t.rightIcon?(c(),u("div",{key:2,class:C(["right icon",{"is-button":t.rightIcon.onClick}])},[O(h(g(M),{icon:t.rightIcon.name,width:t.rightIcon.width,height:t.rightIcon.height,color:t.rightIcon.color,onClick:l[3]||(l[3]=o=>t.rightIcon.onClick?t.rightIcon.onClick():null)},null,8,["icon","width","height","color"]),[[K,!t.rightIcon.isHidden]])],2)):p("",!0)],2))}});const H=y(ne,[["__scopeId","data-v-495e56bb"]]),ce={class:"base-select"},ue={key:0,class:"field_title"},de={key:1,class:"field_title empty"},he={key:0,class:"base-select__select"},ve={class:"search-container"},me=["onClick"],_e={class:"item__selector"},fe={class:"item__title"},pe=I({__name:"BaseSelect",props:{modelValue:{type:[Object,Object,Array],nullable:!0,validator:()=>!0},items:{type:Array,required:!0},placeholder:{type:String,default:"Select..."},withMultiselect:Boolean,withSearch:Boolean},emits:["update:modelValue"],setup(t,{emit:e}){function s(r){let i=r.title!=null,m=r.value!=null;return i&&m}function a(r){return Array.isArray(r)?!r.find(f=>!s(f)):!1}const n=t,l=e,o=x(!1),_=x(""),v=B(()=>n.withSearch&&_.value?n.items.filter(r=>r.title.toLowerCase().includes(_.value.toLowerCase())):n.items),N=B(()=>n.modelValue),P=()=>{if(!n.modelValue)return null;let r=$(n.modelValue);return s(r)?r.title:a(r)?(r=r,r.map(i=>i.title).join(", ")):null},E=r=>{if(!N)return!1;let i=$(n.modelValue);if(i&&a(i))return i.includes(r);if(i&&s(i))return i.value==r.value},T=r=>{let i=$(n.modelValue);if(n.withMultiselect){let m=[];i&&a(i)?(m=m.concat(i),i=i,i.find(b=>b.value==r.value)?m=m.filter(b=>b.value!=r.value):m.push(r)):m.push(r),l("update:modelValue",m);return}i=i,i&&i.value==r.value?l("update:modelValue",null):l("update:modelValue",r),o.value=!o.value},R=()=>{o.value=!1};return(r,i)=>{const m=W("click-outside");return O((c(),u("div",ce,[d("div",{class:C(["base-select__field",{active:o.value}]),onClick:i[0]||(i[0]=f=>o.value=!o.value)},[P()?(c(),u("div",ue,k(P()),1)):(c(),u("div",de,k(t.placeholder),1)),d("div",{class:C(["field_selector",{"is-open":o.value}])},[h(g(w.Icon),{icon:"tabler:chevron-down",color:"var(--text-color)",height:"16px",width:"16px"})],2)],2),h(j,{name:"show"},{default:S(()=>[o.value?(c(),u("div",he,[d("div",ve,[t.withSearch?(c(),A(H,{key:0,modelValue:_.value,"onUpdate:modelValue":i[1]||(i[1]=f=>_.value=f),placeholder:"Search..."},null,8,["modelValue"])):p("",!0)]),(c(!0),u(U,null,D(v.value,f=>(c(),u("div",{class:"select__item",onClick:b=>T(f),key:`item-${f.title}`},[d("div",_e,[h(g(w.Icon),{icon:"tabler:circle",height:"15px",width:"15px",color:E(f)?"var(--primary-color-hover)":"#626262"},null,8,["color"])]),d("div",fe,k(f.title),1)],8,me))),128))])):p("",!0)]),_:1})])),[[m,R]])}}});const q=y(pe,[["__scopeId","data-v-af1483b7"]]),ge={class:"modal-container"},Ie={key:0,class:"modal-bottom__container"},ye=I({__name:"BottomModal",props:{modelValue:{type:Boolean},modelModifiers:{}},emits:["update:modelValue"],setup(t){const e=L(t,"modelValue"),s=()=>{e.value=!1};return(a,n)=>(c(),u("div",ge,[h(j,{name:"show_background"},{default:S(()=>[e.value?(c(),u("div",{key:0,class:"modal-background",onClick:s})):p("",!0)]),_:1}),h(j,{name:"show_content"},{default:S(()=>[e.value?(c(),u("div",Ie,[X(a.$slots,"default",{},void 0,!0)])):p("",!0)]),_:3})]))}});const Ce=y(ye,[["__scopeId","data-v-45ee8981"]]),be={class:"project-list__filters"},Ve={class:"filters-tools"},ke={class:"project-list-filter__mobile-button"},we={class:"project-list-filter__desktop-content"},xe={class:"filter-inner"},Se={class:"filter__header"},$e={class:"filter-header__icon"},Be={class:"filter__items"},je=I({__name:"ProjectListFilter",props:{modelValue:{required:!0},modelModifiers:{}},emits:["update:modelValue"],setup(t){const e=L(t,"modelValue"),s=x(!1),a=()=>{e.value.search=""};return(n,l)=>(c(),u("div",be,[d("div",Ve,[h(H,{class:"filter-search",modelValue:e.value.search,"onUpdate:modelValue":l[0]||(l[0]=o=>e.value.search=o),placeholder:"Search",leftIcon:{name:"tabler:search",width:"16px",height:"16px"},rightIcon:{name:"tabler:x",isHidden:e.value.search.length===0,onClick:a}},null,8,["modelValue","rightIcon"]),d("div",ke,[h(ie,{icon:"tabler:filter",onClick:l[1]||(l[1]=o=>s.value=!0)})]),d("div",we,[h(q,{modelValue:e.value.selectedCategories,"onUpdate:modelValue":l[2]||(l[2]=o=>e.value.selectedCategories=o),items:e.value.categories,placeholder:"Select categories",style:{"max-width":"150px"},"with-multiselect":"","with-search":""},null,8,["modelValue","items"])])]),h(Ce,{modelValue:s.value,"onUpdate:modelValue":l[5]||(l[5]=o=>s.value=o)},{default:S(()=>[d("div",xe,[d("div",Se,[d("div",$e,[h(g(w.Icon),{icon:"tabler:x",onClick:l[3]||(l[3]=o=>s.value=!1),height:"20px",width:"20px"})]),l[6]||(l[6]=d("div",{class:"filter-header__title"}," Filters ",-1))]),d("div",Be,[h(q,{modelValue:e.value.selectedCategories,"onUpdate:modelValue":l[4]||(l[4]=o=>e.value.selectedCategories=o),items:e.value.categories,placeholder:"Select categories","with-multiselect":"","with-search":""},null,8,["modelValue","items"])])])]),_:1},8,["modelValue"])]))}});const Le=y(je,[["__scopeId","data-v-543c7021"]]);class Pe{constructor(){V(this,"selectedCategories");V(this,"categories");V(this,"search");this.search="",this.categories=[],this.selectedCategories=[]}setupCategories(e){e&&(this.categories=e)}setupSearch(e){this.search=e??""}setupSelectedCategories(e){if(!e)return;let s=JSON.parse(`[${e.toString()}]`);console.log("selectedCategoriesIds :>> ",s);let a=s.map(n=>this.categories.find(l=>l.value==n)).filter(n=>n!==void 0);this.selectedCategories=a}toQuery(){let e={};return this.search.length>0&&(e.s=this.search),this.selectedCategories.length>0&&(e.ct=this.selectedCategories.map(s=>s.value).toString()),e}isEmpty(){return this.search.length==0&&this.selectedCategories.length==0}find(e){const s=this.search.toLowerCase();return e.filter(a=>{const n=a.name.toLowerCase(),l=a.description.toLowerCase();if(s&&!n.includes(s)&&!l.includes(s))return!1;if(this.selectedCategories.length>0){const o=a.categories.map(v=>v.id);if(!this.selectedCategories.map(v=>v.value).every(v=>o.includes(v)))return!1}return!0})}}const Me={class:"page"},Fe={class:"project-list__content"},qe=I({__name:"ProjectList",setup(t){var l;const e=ee(),s=te(),a=Y(new Pe);a.setupSearch((l=e.query.s)==null?void 0:l.toString()),a.setupCategories(le.map(o=>o.toSelectableItem())),a.setupSelectedCategories(e.query.ct);const n=B(()=>a.isEmpty()?F():a.find(F()));return Z(()=>a,o=>{s.replace({name:"project-list",query:a.toQuery()})},{deep:!0}),(o,_)=>(c(),u("div",Me,[_[1]||(_[1]=d("div",{class:"project-list__header"}," Projects ",-1)),h(Le,{modelValue:a,"onUpdate:modelValue":_[0]||(_[0]=v=>a=v)},null,8,["modelValue"]),d("div",Fe,[(c(!0),u(U,null,D(n.value,v=>(c(),A(J,{key:`project_${v.id}`,image:v.image,project:v},null,8,["image","project"]))),128))])]))}});const He=y(qe,[["__scopeId","data-v-69553867"]]);export{He as default};