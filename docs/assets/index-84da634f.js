(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))l(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&l(a)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function l(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function v(){}function se(e){return e()}function te(){return Object.create(null)}function z(e){e.forEach(se)}function ue(e){return typeof e=="function"}function X(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}let F;function fe(e,t){return F||(F=document.createElement("a")),F.href=t,e===F.href}function ae(e){return Object.keys(e).length===0}function u(e,t){e.appendChild(t)}function Y(e,t,n){e.insertBefore(t,n||null)}function G(e){e.parentNode&&e.parentNode.removeChild(e)}function g(e){return document.createElement(e)}function p(e){return document.createTextNode(e)}function c(){return p(" ")}function ce(e,t,n,l){return e.addEventListener(t,n,l),()=>e.removeEventListener(t,n,l)}function I(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function de(e){return Array.from(e.childNodes)}function A(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}let Z;function M(e){Z=e}const P=[],ne=[];let T=[];const re=[],ge=Promise.resolve();let J=!1;function me(){J||(J=!0,ge.then(oe))}function Q(e){T.push(e)}const H=new Set;let C=0;function oe(){if(C!==0)return;const e=Z;do{try{for(;C<P.length;){const t=P[C];C++,M(t),_e(t.$$)}}catch(t){throw P.length=0,C=0,t}for(M(null),P.length=0,C=0;ne.length;)ne.pop()();for(let t=0;t<T.length;t+=1){const n=T[t];H.has(n)||(H.add(n),n())}T.length=0}while(P.length);for(;re.length;)re.pop()();J=!1,H.clear(),M(e)}function _e(e){if(e.fragment!==null){e.update(),z(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(Q)}}function he(e){const t=[],n=[];T.forEach(l=>e.indexOf(l)===-1?t.push(l):n.push(l)),n.forEach(l=>l()),T=t}const k=new Set;let pe;function U(e,t){e&&e.i&&(k.delete(e),e.i(t))}function le(e,t,n,l){if(e&&e.o){if(k.has(e))return;k.add(e),pe.c.push(()=>{k.delete(e),l&&(n&&e.d(1),l())}),e.o(t)}else l&&l()}function ie(e){e&&e.c()}function V(e,t,n,l){const{fragment:s,after_update:i}=e.$$;s&&s.m(t,n),l||Q(()=>{const a=e.$$.on_mount.map(se).filter(ue);e.$$.on_destroy?e.$$.on_destroy.push(...a):z(a),e.$$.on_mount=[]}),i.forEach(Q)}function W(e,t){const n=e.$$;n.fragment!==null&&(he(n.after_update),z(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function $e(e,t){e.$$.dirty[0]===-1&&(P.push(e),me(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function x(e,t,n,l,s,i,a,$=[-1]){const m=Z;M(e);const o=e.$$={fragment:null,ctx:[],props:i,update:v,not_equal:s,bound:te(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(m?m.$$.context:[])),callbacks:te(),dirty:$,skip_bound:!1,root:t.target||m.$$.root};a&&a(o.root);let y=!1;if(o.ctx=n?n(e,t.props||{},(f,w,...b)=>{const S=b.length?b[0]:w;return o.ctx&&s(o.ctx[f],o.ctx[f]=S)&&(!o.skip_bound&&o.bound[f]&&o.bound[f](S),y&&$e(e,f)),w}):[],o.update(),y=!0,z(o.before_update),o.fragment=l?l(o.ctx):!1,t.target){if(t.hydrate){const f=de(t.target);o.fragment&&o.fragment.l(f),f.forEach(G)}else o.fragment&&o.fragment.c();t.intro&&U(e.$$.fragment),V(e,t.target,t.anchor,t.customElement),oe()}M(m)}class ee{$destroy(){W(this,1),this.$destroy=v}$on(t,n){if(!ue(n))return v;const l=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return l.push(n),()=>{const s=l.indexOf(n);s!==-1&&l.splice(s,1)}}$set(t){this.$$set&&!ae(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function ye(e){let t,n,l;return{c(){t=g("button"),t.textContent="ПОН",I(t,"class","button svelte-16opsk7")},m(s,i){Y(s,t,i),n||(l=ce(t,"click",e[0]),n=!0)},p:v,i:v,o:v,d(s){s&&G(t),n=!1,l()}}}function be(e){return[()=>{}]}class Se extends ee{constructor(t){super(),x(this,t,be,ye,X,{})}}function ve(e){let t,n,l,s=(e[0].toString().length<2&&e[2].includes(e[0].toString())?K:"")+"",i,a,$=(e[0].toString().length<2&&e[3].includes(e[0].toString())?j:"")+"",m,o,y=(e[0].toString().length<2&&e[4].includes(e[0].toString())?R:"")+"",f,w,b=(e[1].includes(e[0].toString())?j:"")+"",S,q,_=(e[0].toString().length>=2&&!e[1].includes(e[0].toString())&&e[4].includes(e[0].toString().at(-1))?R:"")+"",L,B,O=(e[0].toString().length>=2&&!e[1].includes(e[0].toString())&&e[3].includes(e[0].toString().at(-1))?j:"")+"",N,D,h=(e[0].toString().length>=2&&!e[1].includes(e[0].toString())&&e[2].includes(e[0].toString().at(-1))?K:"")+"",E;return{c(){t=g("section"),n=p(e[0]),l=c(),i=p(s),a=c(),m=p($),o=c(),f=p(y),w=c(),S=p(b),q=c(),L=p(_),B=c(),N=p(O),D=c(),E=p(h),I(t,"class","svelte-1lt0477")},m(r,d){Y(r,t,d),u(t,n),u(t,l),u(t,i),u(t,a),u(t,m),u(t,o),u(t,f),u(t,w),u(t,S),u(t,q),u(t,L),u(t,B),u(t,N),u(t,D),u(t,E)},p(r,[d]){d&1&&A(n,r[0]),d&1&&s!==(s=(r[0].toString().length<2&&r[2].includes(r[0].toString())?K:"")+"")&&A(i,s),d&1&&$!==($=(r[0].toString().length<2&&r[3].includes(r[0].toString())?j:"")+"")&&A(m,$),d&1&&y!==(y=(r[0].toString().length<2&&r[4].includes(r[0].toString())?R:"")+"")&&A(f,y),d&1&&b!==(b=(r[1].includes(r[0].toString())?j:"")+"")&&A(S,b),d&1&&_!==(_=(r[0].toString().length>=2&&!r[1].includes(r[0].toString())&&r[4].includes(r[0].toString().at(-1))?R:"")+"")&&A(L,_),d&1&&O!==(O=(r[0].toString().length>=2&&!r[1].includes(r[0].toString())&&r[3].includes(r[0].toString().at(-1))?j:"")+"")&&A(N,O),d&1&&h!==(h=(r[0].toString().length>=2&&!r[1].includes(r[0].toString())&&r[2].includes(r[0].toString().at(-1))?K:"")+"")&&A(E,h)},i:v,o:v,d(r){r&&G(t)}}}let j="секунд",K="секунда",R="секунды";function we(e,t,n){let l=0;return setInterval(()=>{n(0,l++,l)},1e3),[l,["10","11","12","13","14","15","16","17","18","19","20"],["1"],["0","5","6","7","8","9"],["2","3","4"]]}class Ee extends ee{constructor(t){super(),x(this,t,we,ve,X,{})}}const Ae="./assets/Rei-df475aef.webp";function Oe(e){let t,n,l,s,i,a,$,m,o,y,f,w,b,S,q,_,L,B,O,N,D,h,E;return _=new Ee({}),h=new Se({}),{c(){t=g("main"),n=g("img"),s=c(),i=g("div"),a=p(`Ты тратишь своё время, изучая ненужные ненужные технологии...
    `),$=g("br"),m=c(),o=g("br"),y=c(),f=g("p"),w=p("Уже прошло "),b=g("br"),S=c(),q=g("br"),ie(_.$$.fragment),L=c(),B=g("br"),O=c(),N=g("br"),D=c(),ie(h.$$.fragment),fe(n.src,l=Ae)||I(n,"src",l),I(n,"alt","I rei Ayanami"),I(i,"class","card"),I(t,"class","svelte-1n60j77")},m(r,d){Y(r,t,d),u(t,n),u(t,s),u(t,i),u(i,a),u(i,$),u(i,m),u(i,o),u(i,y),u(i,f),u(f,w),u(f,b),u(f,S),u(f,q),V(_,f,null),u(i,L),u(i,B),u(i,O),u(i,N),u(i,D),V(h,i,null),E=!0},p:v,i(r){E||(U(_.$$.fragment,r),U(h.$$.fragment,r),E=!0)},o(r){le(_.$$.fragment,r),le(h.$$.fragment,r),E=!1},d(r){r&&G(t),W(_),W(h)}}}class Le extends ee{constructor(t){super(),x(this,t,null,Oe,X,{})}}new Le({target:document.getElementById("app")});
