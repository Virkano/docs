import{o as n,c as s,k as e,u as b,h as k,J as x,t as f,l as g,a as i,F as y,G as $}from"./framework.0f008bc5.js";const w={style:{display:"inline-block"},viewBox:"0 0 512 512",width:"1.2em",height:"1.2em"},A=e("path",{fill:"currentColor",d:"M256 512a256 256 0 1 0 0-512a256 256 0 1 0 0 512zm-56.6-199.4c31.2 31.2 81.9 31.2 113.1 0c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9c-50 50-131 50-181 0s-50-131 0-181s131-50 181 0c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0c-31.2-31.2-81.9-31.2-113.1 0s-31.2 81.9 0 113.1z"},null,-1),N=[A];function C(p,o){return n(),s("svg",w,N)}const B={name:"fa6-solid-copyright",render:C},K={class:"px-[1.2rem] relative py-[1rem] border-1 border-[var(--vp-c-border)]/[.55] w-full min-h-[32px] border-solid mt-[32px] leading-[24px] rounded-[4px]"},Z={class:"flex flex-col gap-y-[8px] overflow-hidden"},G=e("span",{class:"font-bold"},"文章作者：",-1),L=["href"],V=e("span",{class:"font-bold"},"文章链接：",-1),z=["href"],D=e("div",null,[e("span",{class:"font-bold"},"版权声明："),e("span",null,[i(" 本博客所有文章除特别声明外，均采用 "),e("a",{href:"https://creativecommons.org/licenses/by-nc-sa/4.0/",rel:"noreferrer",target:"_blank"}," CC BY-NC-SA 4.0 "),i(" 许可协议。转载请注明来自 "),e("a",{href:"https://docs.virkano.com/",rel:"noreferrer",target:"_blank"}," 前端杂货铺 ")]),i("！ ")],-1),E="Kano Zhao",U={__name:"CopyRight",setup(p){var c,_;const{frontmatter:o}=b(),a=k(E);(c=o.value)!=null&&c.author&&(a.value=(_=o.value)==null?void 0:_.author);function u(r){return r==="Kano Zhao"?"virkano":r}const l=location.href;function h(r){return`https://github.com/${u(r)}`}return(r,t)=>{const m=B;return n(),s("div",K,[x(m,{class:"absolute top-[1rem] right-[1.2rem]"}),e("section",Z,[e("div",null,[G,e("span",null,[e("a",{href:h(a.value),rel:"noreferrer",target:"_blank"},f(a.value),9,L)])]),e("div",null,[V,e("span",null,[e("a",{href:g(l),rel:"noreferrer",target:"_blank"},f(g(l)),9,z)])]),D])])}}},F={key:0,class:"flex flex-wrap gap-4"},S=["href"],H=["src"],J={key:1,class:"flex gap-2 items-center"},M=["href"],R=["src"],v="Kano Zhao",Y={__name:"Contributors",setup(p){var r;const{frontmatter:o}=b(),a=[(r=o.value)==null?void 0:r.author,...o.value.contributors||[]].filter(t=>t),u=k(a);function l(t){return t==="Kano Zhao"?"virkano":t}function h(t){return`https://github.com/${l(t)}.png`}function c(t){return`https://github.com/${l(t)}`}function _(t){return Array.isArray(t)&&t.length}return(t,m)=>_(u.value)?(n(),s("div",F,[(n(!0),s(y,null,$(u.value,d=>(n(),s("div",{key:d,class:"flex gap-2 items-center"},[e("a",{href:c(d),rel:"noreferrer",target:"_blank"},[e("img",{src:h(d),class:"w-8 h-8 rounded-full"},null,8,H)],8,S),i(" "+f(d),1)]))),128))])):(n(),s("div",J,[e("a",{href:c(v),rel:"noreferrer",target:"_blank"},[e("img",{src:h(v),class:"w-8 h-8 rounded-full"},null,8,R)],8,M),i(" "+f("Kano Zhao"))]))}};export{Y as _,U as a};