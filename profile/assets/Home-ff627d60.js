var q=Object.defineProperty;var A=(t,e,o)=>e in t?q(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o;var m=(t,e,o)=>(A(t,typeof e!="symbol"?e+"":e,o),o);import{d as v,r as j,o as N,a as s,c as a,F as b,b as C,n as B,e as D,f as n,t as _,w as P,v as T,g as u,u as h,_ as f,h as $,i as R,j as x,I as z,k as g,l as J,m as M}from"./index-13831189.js";import{i as S,P as E}from"./ProjectCard-508adec6.js";import{s as H}from"./projects-a1103a2c.js";const V={class:"timeline__item-value"},Y=["onClick"],W={class:"value-header__title"},K={class:"value-header__button"},O=v({__name:"Timeline",props:{items:{type:Array,required:!0,default:()=>[]}},setup(t){const e=j(null),o=j(null),p=r=>{e.value==null||e.value!=r?e.value=r:e.value=null},l=j("fit-content");return N(()=>{if(!o.value)return 0;const r=Array.from(o.value.querySelectorAll(".timeline__item-key")).map(i=>i.getBoundingClientRect().width);l.value=`${Math.max(...r)}px`}),(r,i)=>(s(),a("div",{class:"timeline",ref_key:"timeline",ref:o},[(s(!0),a(b,null,C(t.items,(c,d)=>(s(),a("div",{class:B(["timeline__item",{opened:d==e.value}]),key:`timeline__item-${d}`,style:D({"grid-template-columns":`${l.value} 48px 1fr`})},[n("div",{class:"timeline__item-key",style:D({maxWidth:`${l.value}`})},[n("div",null,_(c.periodStart()),1),i[0]||(i[0]=n("div",{style:{padding:"0 8px"}},_("-"),-1)),n("div",null,_(c.periodEnd()),1)],4),i[1]||(i[1]=n("div",{class:"timeline__item-separator"},[n("div",{class:"separator-point"},[n("div",{class:"inner-circle"})]),n("div",{class:"separator-line"})],-1)),n("div",V,[n("div",{class:"value-header",onClick:I=>p(d)},[n("div",W,_(c.title),1),n("div",K,[P(u(h(S.Icon),{icon:"tabler:plus",height:"20px",width:"20px"},null,512),[[T,d!=e.value]]),P(u(h(S.Icon),{icon:"tabler:minus",height:"20px",width:"20px"},null,512),[[T,d==e.value]])])],8,Y),n("div",{class:B(["value-content",{opened:d==e.value}])},_(c.comment),3)])],6))),128))],512))}});const U=f(O,[["__scopeId","data-v-36ddbeff"]]),G={key:0,class:"base__button-icon"},Q={class:"base__button-title"},X=v({__name:"BaseButton",props:{title:String,icon:String,primary:Boolean,centered:Boolean,outlined:Boolean},setup(t){return(e,o)=>(s(),a("div",{class:B(["base__button",{primary:t.primary,centered:t.centered,outlined:t.outlined}])},[t.icon?(s(),a("div",G,[u(h(S.Icon),{icon:t.icon,color:"var(--text-color)",height:"18px",width:"18px"},null,8,["icon"])])):$("",!0),n("div",Q,_(t.title),1)],2))}});const Z=f(X,[["__scopeId","data-v-e81c1fa9"]]),ee={class:"project__list"},te=3,ne=v({__name:"ProjectList",setup(t){const e=H().slice(0,te);return(o,p)=>(s(),a("div",ee,[(s(!0),a(b,null,C(h(e),l=>(s(),R(E,{project:l,image:l.image,key:`project__${l.id}`},null,8,["project","image"]))),128))]))}});const oe=f(ne,[["__scopeId","data-v-ab2f69ac"]]),ie=["id"],se={key:0,class:"info-block__header"},ae={class:"info-block__title"},le={key:0,class:"info-block__button"},re={key:1,class:"info-block__title"},ce=v({__name:"InfoBlock",props:{name:{type:String,required:!0},title:String,fullscreen:Boolean,fitContent:Boolean},setup(t){return(e,o)=>(s(),a("div",{class:B(["info-block",{fullscreen:t.fullscreen,"fit-content":t.fitContent}]),id:`info-block-${t.name}`},[t.title&&!e.$slots.title?(s(),a("div",se,[n("div",ae,_(t.title),1),e.$slots.button?(s(),a("div",le,[x(e.$slots,"button",{},void 0,!0)])):$("",!0)])):$("",!0),e.$slots.title?(s(),a("div",re,[x(e.$slots,"title",{},void 0,!0)])):$("",!0),x(e.$slots,"default",{},void 0,!0)],10,ie))}});const y=f(ce,[["__scopeId","data-v-42717507"]]),F=["Jan","Feb","March","April","May","June","July","Aug","Sept","Oct","Nov","Dec"];class k{constructor(e){m(this,"title");m(this,"comment");m(this,"start");m(this,"end");this.comment=e.comment,this.title=e.title,this.start=new Date(e.start),this.end=e.end?new Date(e.end):null}periodStart(){const e=this.start.getFullYear();return`${F[this.start.getMonth()]} ${e}`}periodEnd(){if(this.end){const e=this.end.getFullYear();return`${F[this.end.getMonth()]} ${e}`}else return"now"}}const ue=[new k({title:"Study in 42 Abu Dhabi: Common Core course",comment:`42 Abu Dhabi is a unique and innovative institution, where education takes place without traditional teachers, allowing students to learn autonomously from the ground up. 
			Throughout my time there, I engaged in the creation of impressive projects, such as developing a 3D game and building a mini version of Bash. 
			Studying with the C programming language provided me with invaluable insights into the inner workings of modern technologies.`,start:"2023-06-01 00:00:00"}),new k({title:"Work as Frontend Developer in HoraGuru",comment:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lectus augue, porttitor eu purus ut, blandit hendrerit metus. Maecenas accumsan diam vitae risus posuere, vel aliquet enim tempor. In sollicitudin enim nec velit porttitor aliquet. Donec laoreet, lacus placerat lacinia convallis, turpis nibh vulputate metus, vitae congue erat lectus in risus. In mi ligula, placerat id lacus vitae, tincidunt sodales augue. Phasellus sit amet mollis ante. Proin eget pretium orci. Phasellus vehicula, eros eget dapibus interdum, justo mauris iaculis purus, vel posuere dui nisi volutpat purus. Donec mattis malesuada ligula id posuere.",start:"2022-01-01 00:00:00"}),new k({title:"Internship as Backend Developer in MirCod - IOT company",comment:`This was my first internship as a backend developer. 
			As an internship, I had to build a backend application with my teammates led by a mentor from the company. 
			I am really thankful to him because he was very friendly and could answer any question related to new technologies for me. 
			From him, I learned how to use Docker and how to develop powerful backend applications using Django Rest Framework.`,start:"2021-01-01 00:00:00",end:"2021-04-01 00:00:00"}),new k({title:"Study in Kazan Federal University: Computer Science",comment:`Kazan Federal University, the premier institution for programming studies in my homeland, laid a solid foundation for my career as a software developer.
			During my time there, I developed a strong mathematical background, which was essential for my understanding of software development. 
			I delved into various fields such as algorithms, linear algebra, and Boolean mathematics. 
			This knowledge provided me with a comprehensive perspective on how applications function—from the fundamental level of managing electrical signals on the motherboard to the advanced level of utilizing modern libraries and frameworks.`,start:"2020-09-01 00:00:00",end:"2023-02-01 00:00:00"})];class w{constructor(e,o,p){m(this,"name");m(this,"icon");m(this,"link");this.name=e,this.icon=o,this.link=p}}const de=[new w("email","tabler:mail",""),new w("linked-in","tabler:brand-linkedin",""),new w("telegram","tabler:brand-telegram",""),new w("github","tabler:brand-github","")],me={class:"contact-list"},_e=["onClick"],pe={class:"contact-item__name"},he=v({__name:"ContactList",setup(t){const e=o=>{o&&window.open(o,"_blank")};return(o,p)=>(s(),a("div",me,[(s(!0),a(b,null,C(h(de),(l,r)=>(s(),a("div",{class:"contact-item",key:`contact-${r}`,onClick:i=>e(l.link)},[u(h(z),{icon:l.icon,height:"20px",width:"20px"},null,8,["icon"]),n("div",pe,_(l.name),1)],8,_e))),128))]))}});const ve=f(he,[["__scopeId","data-v-b73d02a6"]]),fe={class:"about-container"},ge={class:"about"},be={class:"tools"},ye=v({__name:"Home",setup(t){const e=[{title:"Journey",icon:"tabler:map",infoBlockName:"journey"},{title:"Projects",icon:"tabler:briefcase",infoBlockName:"projects"},{title:"Contacts",icon:"tabler:message-2",infoBlockName:"contacts",outlined:!0}],o=J(),p=r=>{o.push({name:r})},l=r=>{if(!r)return;const i=document.querySelector(".main-layout");if(!i)return;const c=i.getBoundingClientRect(),d=i.querySelector(`#info-block-${r}`);if(!d)return;const I=d.getBoundingClientRect(),L=i.scrollTop+I.top-c.top-56;i.scrollTo({top:L,behavior:"smooth"})};return(r,i)=>(s(),a(b,null,[u(y,{fullscreen:"",name:"main"},{default:g(()=>[n("div",fe,[n("div",ge,[i[1]||(i[1]=n("div",{class:"about__name"}," Timur Mazitov ",-1)),i[2]||(i[2]=n("div",{class:"about__comment"},[M(" Fullstack developer and physics fancier."),n("br"),n("hr"),M(" Here you can find some information about me and my projects."),n("br")],-1)),n("div",be,[(s(),a(b,null,C(e,(c,d)=>u(Z,{key:`button-${d}`,title:c.title,icon:c.icon,outlined:c.outlined,onClick:I=>l(c.infoBlockName)},null,8,["title","icon","outlined","onClick"])),64))])])])]),_:1}),u(y,{title:"Journey",name:"journey"},{default:g(()=>[u(U,{items:h(ue)},null,8,["items"])]),_:1}),u(y,{title:"Projects",name:"projects"},{button:g(()=>[n("div",{class:"project__button",onClick:i[0]||(i[0]=c=>p("project-list"))}," See all ")]),default:g(()=>[u(oe)]),_:1}),u(y,{title:"Contacts",name:"contacts","fit-content":""},{default:g(()=>[u(ve)]),_:1})],64))}});const Ce=f(ye,[["__scopeId","data-v-d7b0dcb3"]]);export{Ce as default};