function t(t,e,s,i){var o,n=arguments.length,r=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,s,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(r=(n<3?o(r):n>3?o(e,s,r):o(e,s))||r);return n>3&&r&&Object.defineProperty(e,s,r),r}"function"==typeof SuppressedError&&SuppressedError;
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const e=globalThis,s=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),o=new WeakMap;let n=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(s&&void 0===t){const s=void 0!==e&&1===e.length;s&&(t=o.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&o.set(e,t))}return t}toString(){return this.cssText}};const r=(t,...e)=>{const s=1===t.length?t[0]:e.reduce((e,s,i)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[i+1],t[0]);return new n(s,t,i)},a=s?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return(t=>new n("string"==typeof t?t:t+"",void 0,i))(e)})(t):t,{is:h,defineProperty:l,getOwnPropertyDescriptor:c,getOwnPropertyNames:d,getOwnPropertySymbols:p,getPrototypeOf:u}=Object,g=globalThis,f=g.trustedTypes,$=f?f.emptyScript:"",v=g.reactiveElementPolyfillSupport,m=(t,e)=>t,y={toAttribute(t,e){switch(e){case Boolean:t=t?$:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let s=t;switch(e){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch(t){s=null}}return s}},_=(t,e)=>!h(t,e),x={attribute:!0,type:String,converter:y,reflect:!1,useDefault:!1,hasChanged:_};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */Symbol.metadata??=Symbol("metadata"),g.litPropertyMetadata??=new WeakMap;let b=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=x){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const s=Symbol(),i=this.getPropertyDescriptor(t,s,e);void 0!==i&&l(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){const{get:i,set:o}=c(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:i,set(e){const n=i?.call(this);o?.call(this,e),this.requestUpdate(t,n,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??x}static _$Ei(){if(this.hasOwnProperty(m("elementProperties")))return;const t=u(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(m("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(m("properties"))){const t=this.properties,e=[...d(t),...p(t)];for(const s of e)this.createProperty(s,t[s])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,s]of e)this.elementProperties.set(t,s)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const s=this._$Eu(t,e);void 0!==s&&this._$Eh.set(s,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const t of s)e.unshift(a(t))}else void 0!==t&&e.push(a(t));return e}static _$Eu(t,e){const s=e.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,i)=>{if(s)t.adoptedStyleSheets=i.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const s of i){const i=document.createElement("style"),o=e.litNonce;void 0!==o&&i.setAttribute("nonce",o),i.textContent=s.cssText,t.appendChild(i)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$ET(t,e){const s=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,s);if(void 0!==i&&!0===s.reflect){const o=(void 0!==s.converter?.toAttribute?s.converter:y).toAttribute(e,s.type);this._$Em=t,null==o?this.removeAttribute(i):this.setAttribute(i,o),this._$Em=null}}_$AK(t,e){const s=this.constructor,i=s._$Eh.get(t);if(void 0!==i&&this._$Em!==i){const t=s.getPropertyOptions(i),o="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:y;this._$Em=i;const n=o.fromAttribute(e,t.type);this[i]=n??this._$Ej?.get(i)??n,this._$Em=null}}requestUpdate(t,e,s,i=!1,o){if(void 0!==t){const n=this.constructor;if(!1===i&&(o=this[t]),s??=n.getPropertyOptions(t),!((s.hasChanged??_)(o,e)||s.useDefault&&s.reflect&&o===this._$Ej?.get(t)&&!this.hasAttribute(n._$Eu(t,s))))return;this.C(t,e,s)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:s,reflect:i,wrapped:o},n){s&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,n??e??this[t]),!0!==o||void 0!==n)||(this._$AL.has(t)||(this.hasUpdated||s||(e=void 0),this._$AL.set(t,e)),!0===i&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,s]of t){const{wrapped:t}=s,i=this[e];!0!==t||this._$AL.has(e)||void 0===i||this.C(e,void 0,s,i)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};b.elementStyles=[],b.shadowRootOptions={mode:"open"},b[m("elementProperties")]=new Map,b[m("finalized")]=new Map,v?.({ReactiveElement:b}),(g.reactiveElementVersions??=[]).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const w=globalThis,A=t=>t,E=w.trustedTypes,S=E?E.createPolicy("lit-html",{createHTML:t=>t}):void 0,C="$lit$",k=`lit$${Math.random().toFixed(9).slice(2)}$`,M="?"+k,P=`<${M}>`,O=document,U=()=>O.createComment(""),H=t=>null===t||"object"!=typeof t&&"function"!=typeof t,T=Array.isArray,N="[ \t\n\f\r]",R=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,z=/-->/g,D=/>/g,j=RegExp(`>|${N}(?:([^\\s"'>=/]+)(${N}*=${N}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),I=/'/g,L=/"/g,F=/^(?:script|style|textarea|title)$/i,B=(t=>(e,...s)=>({_$litType$:t,strings:e,values:s}))(1),q=Symbol.for("lit-noChange"),W=Symbol.for("lit-nothing"),X=new WeakMap,G=O.createTreeWalker(O,129);function Y(t,e){if(!T(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==S?S.createHTML(e):e}const V=(t,e)=>{const s=t.length-1,i=[];let o,n=2===e?"<svg>":3===e?"<math>":"",r=R;for(let e=0;e<s;e++){const s=t[e];let a,h,l=-1,c=0;for(;c<s.length&&(r.lastIndex=c,h=r.exec(s),null!==h);)c=r.lastIndex,r===R?"!--"===h[1]?r=z:void 0!==h[1]?r=D:void 0!==h[2]?(F.test(h[2])&&(o=RegExp("</"+h[2],"g")),r=j):void 0!==h[3]&&(r=j):r===j?">"===h[0]?(r=o??R,l=-1):void 0===h[1]?l=-2:(l=r.lastIndex-h[2].length,a=h[1],r=void 0===h[3]?j:'"'===h[3]?L:I):r===L||r===I?r=j:r===z||r===D?r=R:(r=j,o=void 0);const d=r===j&&t[e+1].startsWith("/>")?" ":"";n+=r===R?s+P:l>=0?(i.push(a),s.slice(0,l)+C+s.slice(l)+k+d):s+k+(-2===l?e:d)}return[Y(t,n+(t[s]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),i]};class Z{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let o=0,n=0;const r=t.length-1,a=this.parts,[h,l]=V(t,e);if(this.el=Z.createElement(h,s),G.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(i=G.nextNode())&&a.length<r;){if(1===i.nodeType){if(i.hasAttributes())for(const t of i.getAttributeNames())if(t.endsWith(C)){const e=l[n++],s=i.getAttribute(t).split(k),r=/([.?@])?(.*)/.exec(e);a.push({type:1,index:o,name:r[2],strings:s,ctor:"."===r[1]?et:"?"===r[1]?st:"@"===r[1]?it:tt}),i.removeAttribute(t)}else t.startsWith(k)&&(a.push({type:6,index:o}),i.removeAttribute(t));if(F.test(i.tagName)){const t=i.textContent.split(k),e=t.length-1;if(e>0){i.textContent=E?E.emptyScript:"";for(let s=0;s<e;s++)i.append(t[s],U()),G.nextNode(),a.push({type:2,index:++o});i.append(t[e],U())}}}else if(8===i.nodeType)if(i.data===M)a.push({type:2,index:o});else{let t=-1;for(;-1!==(t=i.data.indexOf(k,t+1));)a.push({type:7,index:o}),t+=k.length-1}o++}}static createElement(t,e){const s=O.createElement("template");return s.innerHTML=t,s}}function J(t,e,s=t,i){if(e===q)return e;let o=void 0!==i?s._$Co?.[i]:s._$Cl;const n=H(e)?void 0:e._$litDirective$;return o?.constructor!==n&&(o?._$AO?.(!1),void 0===n?o=void 0:(o=new n(t),o._$AT(t,s,i)),void 0!==i?(s._$Co??=[])[i]=o:s._$Cl=o),void 0!==o&&(e=J(t,o._$AS(t,e.values),o,i)),e}class K{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:s}=this._$AD,i=(t?.creationScope??O).importNode(e,!0);G.currentNode=i;let o=G.nextNode(),n=0,r=0,a=s[0];for(;void 0!==a;){if(n===a.index){let e;2===a.type?e=new Q(o,o.nextSibling,this,t):1===a.type?e=new a.ctor(o,a.name,a.strings,this,t):6===a.type&&(e=new ot(o,this,t)),this._$AV.push(e),a=s[++r]}n!==a?.index&&(o=G.nextNode(),n++)}return G.currentNode=O,i}p(t){let e=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class Q{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,s,i){this.type=2,this._$AH=W,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=J(this,t,e),H(t)?t===W||null==t||""===t?(this._$AH!==W&&this._$AR(),this._$AH=W):t!==this._$AH&&t!==q&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>T(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==W&&H(this._$AH)?this._$AA.nextSibling.data=t:this.T(O.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:s}=t,i="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=Z.createElement(Y(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===i)this._$AH.p(e);else{const t=new K(i,this),s=t.u(this.options);t.p(e),this.T(s),this._$AH=t}}_$AC(t){let e=X.get(t.strings);return void 0===e&&X.set(t.strings,e=new Z(t)),e}k(t){T(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const o of t)i===e.length?e.push(s=new Q(this.O(U()),this.O(U()),this,this.options)):s=e[i],s._$AI(o),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=A(t).nextSibling;A(t).remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class tt{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,i,o){this.type=1,this._$AH=W,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=o,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=W}_$AI(t,e=this,s,i){const o=this.strings;let n=!1;if(void 0===o)t=J(this,t,e,0),n=!H(t)||t!==this._$AH&&t!==q,n&&(this._$AH=t);else{const i=t;let r,a;for(t=o[0],r=0;r<o.length-1;r++)a=J(this,i[s+r],e,r),a===q&&(a=this._$AH[r]),n||=!H(a)||a!==this._$AH[r],a===W?t=W:t!==W&&(t+=(a??"")+o[r+1]),this._$AH[r]=a}n&&!i&&this.j(t)}j(t){t===W?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class et extends tt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===W?void 0:t}}class st extends tt{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==W)}}class it extends tt{constructor(t,e,s,i,o){super(t,e,s,i,o),this.type=5}_$AI(t,e=this){if((t=J(this,t,e,0)??W)===q)return;const s=this._$AH,i=t===W&&s!==W||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,o=t!==W&&(s===W||i);i&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class ot{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){J(this,t)}}const nt=w.litHtmlPolyfillSupport;nt?.(Z,Q),(w.litHtmlVersions??=[]).push("3.3.2");const rt=globalThis;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let at=class extends b{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,s)=>{const i=s?.renderBefore??e;let o=i._$litPart$;if(void 0===o){const t=s?.renderBefore??null;i._$litPart$=o=new Q(e.insertBefore(U(),t),t,void 0,s??{})}return o._$AI(t),o})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return q}};at._$litElement$=!0,at.finalized=!0,rt.litElementHydrateSupport?.({LitElement:at});const ht=rt.litElementPolyfillSupport;ht?.({LitElement:at}),(rt.litElementVersions??=[]).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const lt={attribute:!0,type:String,converter:y,reflect:!1,hasChanged:_},ct=(t=lt,e,s)=>{const{kind:i,metadata:o}=s;let n=globalThis.litPropertyMetadata.get(o);if(void 0===n&&globalThis.litPropertyMetadata.set(o,n=new Map),"setter"===i&&((t=Object.create(t)).wrapped=!0),n.set(s.name,t),"accessor"===i){const{name:i}=s;return{set(s){const o=e.get.call(this);e.set.call(this,s),this.requestUpdate(i,o,t,!0,s)},init(e){return void 0!==e&&this.C(i,void 0,t,e),e}}}if("setter"===i){const{name:i}=s;return function(s){const o=this[i];e.call(this,s),this.requestUpdate(i,o,t,!0,s)}}throw Error("Unsupported decorator location: "+i)};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function dt(t){return(e,s)=>"object"==typeof s?ct(t,e,s):((t,e,s)=>{const i=e.hasOwnProperty(s);return e.constructor.createProperty(s,t),i?Object.getOwnPropertyDescriptor(e,s):void 0})(t,e,s)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function pt(t){return dt({...t,state:!0,attribute:!1})}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ut=1;let gt=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,s){this._$Ct=t,this._$AM=e,this._$Ci=s}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ft="important",$t=" !"+ft,vt=(t=>(...e)=>({_$litDirective$:t,values:e}))(class extends gt{constructor(t){if(super(t),t.type!==ut||"style"!==t.name||t.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce((e,s)=>{const i=t[s];return null==i?e:e+`${s=s.includes("-")?s:s.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${i};`},"")}update(t,[e]){const{style:s}=t.element;if(void 0===this.ft)return this.ft=new Set(Object.keys(e)),this.render(e);for(const t of this.ft)null==e[t]&&(this.ft.delete(t),t.includes("-")?s.removeProperty(t):s[t]=null);for(const t in e){const i=e[t];if(null!=i){this.ft.add(t);const e="string"==typeof i&&i.endsWith($t);t.includes("-")||e?s.setProperty(t,e?i.slice(0,-11):i,e?ft:""):s[t]=i}}return q}}),mt={decimals:1,mode:"trend",show_secondary:!0,autoscale:!0,graph_style:"area",smoothing:!0,points:48,line_width:2,area_opacity:.3,show_dots:!1,dot_radius:2,show_axes:!1,show_ticks:!1,show_grid:!1,animate:!0,tooltip:!0,show_stats:!0,stats_lookback_label:"24h",show_min:!0,show_avg:!0,show_max:!0,value_position:"center",align:"center",compact:!1,height:200,padding:16,border_radius:24,glass:!0,glass_blur:20,glass_opacity:.1,background_gradient:"linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",panel_color:"rgba(26, 26, 46, 0.8)",accent_gold:"#d4af37",accent_purple:"#6c5ce7",text_primary:"#ffffff",text_muted:"#a0a0a0",glow:!0,glow_strength:10,shadow_strength:20,high_contrast:!1,reduce_motion:!1};let yt=class extends at{constructor(){super(...arguments),this.historyData=[],this.secondaryHistoryData=[],this.hoverIndex=null,this.hoverX=0,this.hoverY=0,this.dimensions={width:0,height:0},this.resizeObserver=null}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver&&this.resizeObserver.disconnect()}firstUpdated(){var t;const e=null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelector(".graph-container");e&&(this.resizeObserver=new ResizeObserver(t=>{for(const e of t){const{width:t,height:s}=e.contentRect;this.dimensions={width:t,height:s}}}),this.resizeObserver.observe(e))}static get styles(){return r`
      :host {
        display: block;
        --lux-glass-blur: 20px;
        --lux-glass-opacity: 0.1;
        --lux-accent-gold: #d4af37;
        --lux-accent-purple: #6c5ce7;
        --lux-text-primary: #ffffff;
        --lux-text-muted: #a0a0a0;
        --lux-glow-strength: 10px;
        --lux-shadow-strength: 20px;
      }

      .card {
        position: relative;
        overflow: hidden;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      }

      .card.glass {
        backdrop-filter: blur(var(--lux-glass-blur));
        background: rgba(26, 26, 46, var(--lux-glass-opacity));
        border: 1px solid rgba(255, 255, 255, 0.08);
        box-shadow: 
          0 4px 24px -1px rgba(0, 0, 0, 0.2),
          0 0 80px -10px rgba(0, 0, 0, 0.4) inset;
      }

      @keyframes pulse-gradient {
        0% { opacity: 0.1; }
        50% { opacity: 0.2; }
        100% { opacity: 0.1; }
      }

      .card.glass::before {
        content: "";
        position: absolute;
        inset: 0;
        border-radius: inherit;
        padding: 1px;
        background: linear-gradient(135deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.05) 50%, rgba(255, 255, 255, 0));
        -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
        -webkit-mask-composite: xor;
        mask-composite: exclude;
        pointer-events: none;
      }

      .background {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: -1;
      }

      .content {
        position: relative;
        z-index: 1;
        display: flex;
        flex-direction: column;
        height: 100%;
      }

      .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 8px;
        padding: 0 4px;
      }

      .title {
        font-size: 0.9rem;
        font-weight: 500;
        letter-spacing: 0.5px;
        color: var(--lux-text-muted);
        text-transform: uppercase;
      }

      .stats {
        display: flex;
        gap: 16px;
        font-size: 0.75rem;
        color: var(--lux-text-muted);
      }

      .stat-item {
        display: flex;
        align-items: center;
        gap: 4px;
      }

      .stat-value {
        font-weight: 600;
        color: var(--lux-text-primary);
      }

      .main-value {
        font-size: 3rem;
        font-weight: 300;
        line-height: 1;
        color: var(--lux-text-primary);
        text-align: center;
        margin: 8px 0;
      }

      .value-unit {
        font-size: 1.5rem;
        opacity: 0.6;
        font-weight: 200;
        margin-left: 4px;
      }

      .trend-indicator {
        font-size: 0.9rem;
        margin-left: 12px;
        display: inline-flex;
        align-items: center;
        gap: 2px;
        padding: 4px 8px;
        background: rgba(255, 255, 255, 0.05);
        border-radius: 12px;
        vertical-align: middle;
      }

      .trend-up { color: #4ade80; }
      .trend-down { color: #f87171; }
      .trend-flat { color: var(--lux-text-muted); }

      .secondary-value {
        font-size: 1rem;
        color: var(--lux-text-muted);
        text-align: center;
        margin-bottom: 8px;
      }

      .graph-container {
        flex: 1;
        position: relative;
        min-height: 120px;
      }

      svg {
        width: 100%;
        height: 100%;
        overflow: visible;
      }

      .grid-line {
        stroke: rgba(255, 255, 255, 0.05);
        stroke-width: 1;
      }

      .axis-line {
        stroke: rgba(255, 255, 255, 0.1);
        stroke-width: 1;
      }

      .line-path {
        fill: none;
        stroke-width: 3;
        stroke-linecap: round;
        stroke-linejoin: round;
        transition: all 0.3s ease;
        filter: drop-shadow(0 2px 4px rgba(0,0,0,0.5));
      }

      .area-path {
        transition: all 0.3s ease;
      }

      .dot {
        fill: var(--lux-accent-gold);
        stroke: var(--lux-accent-gold);
        stroke-width: 2;
        filter: drop-shadow(0 0 4px var(--lux-accent-gold));
      }

      .secondary-line {
        stroke: var(--lux-accent-purple);
        stroke-width: 1.5;
        stroke-dasharray: 3,3;
      }

      .glow {
        filter: drop-shadow(0 0 var(--lux-glow-strength) var(--glow-color, var(--lux-accent-gold)));
      }

      .tooltip {
        position: fixed;
        background: rgba(0, 0, 0, 0.9);
        color: white;
        padding: 8px 12px;
        border-radius: 8px;
        font-size: 0.8rem;
        pointer-events: none;
        z-index: 1000;
        opacity: 0;
        transition: opacity 0.2s ease, transform 0.2s ease;
        border: 1px solid rgba(255, 255, 255, 0.1);
        pointer-events: none;
        backdrop-filter: blur(10px);
        transform: translateY(10px);
      }

      .tooltip.visible {
        opacity: 1;
        transform: translateY(0);
      }

      .cursor-line {
        stroke: rgba(255, 255, 255, 0.3);
        stroke-width: 1;
        stroke-dasharray: 4, 4;
        pointer-events: none;
        opacity: 0;
        transition: opacity 0.2s;
      }

      .cursor-line.visible {
        opacity: 1;
      }

      .cursor-dot {
        fill: var(--lux-text-primary);
        stroke: rgba(255, 255, 255, 0.5);
        stroke-width: 4;
        r: 4;
        pointer-events: none;
        opacity: 0;
        transition: opacity 0.2s, cx 0.1s, cy 0.1s;
      }

      .cursor-dot.visible {
        opacity: 1;
      }

      .corner-accent {
        position: absolute;
        top: 0;
        right: 0;
        width: 60px;
        height: 60px;
        overflow: hidden;
      }

      .corner-accent::before {
        content: '';
        position: absolute;
        top: -30px;
        right: -30px;
        width: 60px;
        height: 60px;
        background: var(--lux-accent-gold);
        transform: rotate(45deg);
        opacity: 0.3;
      }
      
      /* Subtle noise for luxury feel */
      .card.glass::after {
        content: "";
        position: absolute;
        inset: 0;
        opacity: 0.03;
        background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
        pointer-events: none;
        z-index: 0;
      }

      .no-data {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        color: var(--lux-text-muted);
        font-style: italic;
      }

      @media (prefers-reduced-motion: reduce) {
        .card, .line-path, .area-path {
          transition: none;
        }
      }

      @media (prefers-contrast: high) {
        .card.glass {
          background: rgba(0, 0, 0, 0.9);
          border: 2px solid white;
        }
        .line-path {
          stroke-width: 3;
        }
      }
    `}setConfig(t){if(!t.entity)throw new Error("You need to define an entity");this.config=Object.assign(Object.assign({},mt),t)}getCardSize(){return this.config.compact?1:2}shouldUpdate(t){if(!this.config)return!1;if(t.has("hass")){const e=t.get("hass");if(!e||e.states[this.config.entity]!==this.hass.states[this.config.entity]||this.config.secondary_entity&&e.states[this.config.secondary_entity]!==this.hass.states[this.config.secondary_entity])return this.fetchHistory(),!0}return t.has("historyData")||t.has("secondaryHistoryData")||t.has("hoverIndex")}async fetchHistory(){if(this.config.demo_data)return void(this.historyData=this.config.demo_data.map((t,e)=>({time:Date.now()-36e5*(this.config.points-e),value:t})));const t=this.hass.states[this.config.entity];if(t&&!isNaN(parseFloat(t.state))){const e=parseFloat(t.state);this.historyData=Array.from({length:this.config.points},(t,s)=>({time:Date.now()-36e5*(this.config.points-s),value:e+4*(Math.random()-.5)}))}if(this.config.secondary_entity){const t=this.hass.states[this.config.secondary_entity];if(t&&!isNaN(parseFloat(t.state))){const e=parseFloat(t.state);this.secondaryHistoryData=Array.from({length:this.config.points},(t,s)=>({time:Date.now()-36e5*(this.config.points-s),value:e+10*(Math.random()-.5)}))}}}getGradientColor(t,e,s){if(!this.config.gradient_stops||0===this.config.gradient_stops.length)return this.config.accent_gold;const i=(t-e)/(s-e),o=this.config.gradient_stops;for(let t=0;t<o.length-1;t++){const e=o[t];if(o[t+1],i<=(t+1)/(o.length-1))return e.color}return o[o.length-1].color}handleMouseMove(t,e,s,i){var o,n;if(0===i.length)return;const r=t.currentTarget.getBoundingClientRect(),a=t.clientX-r.left,h=Math.min(i.length-1,Math.max(0,Math.round(a/e*(i.length-1))));this.hoverIndex=h;const l=i[h],c=i.map(t=>t.value),d=null!==(o=this.config.min)&&void 0!==o?o:Math.min(...c)-.1,p=(null!==(n=this.config.max)&&void 0!==n?n:Math.max(...c)+.1)-d;this.hoverX=h/(i.length-1)*e,this.hoverY=s-(l.value-d)/p*s}handleMouseLeave(){this.hoverIndex=null}createSmoothPath(t,e,s,i,o){if(t.length<2)return"";const n=e/(t.length-1),r=s/(o-i);let a="";for(let e=0;e<t.length;e++){const o=e*n,h=s-(t[e].value-i)*r;if(0===e)a+=`M ${o} ${h}`;else{const l=(e-1)*n;a+=` C ${l+.5*(o-l)} ${s-(t[e-1].value-i)*r}, ${o-.5*(o-l)} ${h}, ${o} ${h}`}}return a}renderGraph(){var t,e;const{width:s,height:i}=this.dimensions,o=s||300,n=i||150,r=this.historyData,a=this.secondaryHistoryData;if(0===r.length)return B`<div class="no-data">No data available</div>`;const h=r.map(t=>t.value),l=null!==(t=this.config.min)&&void 0!==t?t:Math.min(...h)-2,c=null!==(e=this.config.max)&&void 0!==e?e:Math.max(...h)+2,d=c-l,p=20,u=10,g=o-u-10,f=n-p-20,$=this.config.smoothing?this.createSmoothPath(r,g,f,l,c):r.map((t,e)=>`${0===e?"M":"L"} ${e/(r.length-1)*g} ${f-(t.value-l)/d*f}`).join(" "),v=$+` L ${g} ${f} L 0 ${f} Z`,m=[];if(this.config.show_grid)for(let t=0;t<=4;t++){const e=t/4*f;m.push(B`<line class="grid-line" x1="0" y1="${e}" x2="${g}" y2="${e}" />`)}const y=[];this.config.show_dots&&r.forEach((t,e)=>{const s=e/(r.length-1)*g,i=f-(t.value-l)/d*f;y.push(B`<circle class="dot" cx="${s}" cy="${i}" r="${this.config.dot_radius}" />`)});let _="";a.length>0&&this.config.show_secondary&&(_=a.map((t,e)=>`${0===e?"M":"L"} ${e/(a.length-1)*g} ${f-(t.value-l)/d*f}`).join(" "));Math.min(...h);const x=Math.max(...h),b=(h.reduce((t,e)=>t+e,0),h.length,this.config.glow&&x>25?"glow":""),w=x>30?"#ff6b6b":x>25?"#ffa726":this.config.accent_gold;return B`
      <svg style="--glow-color: ${w}">
        <defs>
          <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="${this.config.accent_gold}" stop-opacity="${this.config.area_opacity}" />
            <stop offset="100%" stop-color="${this.config.accent_gold}" stop-opacity="0" />
          </linearGradient>
        </defs>
        
        <g transform="translate(${u}, ${p})">
          ${this.config.show_grid?m:""}
          
          ${"area"===this.config.graph_style||"both"===this.config.graph_style?B`<path class="area-path" d="${v}" fill="url(#areaGradient)" />`:""}
          
          ${"line"===this.config.graph_style||"both"===this.config.graph_style?B`<path class="line-path ${b}" d="${$}" stroke="${this.config.accent_gold}" style="--line-width: ${this.config.line_width}px" />`:""}
          
          ${_?B`<path class="secondary-line" d="${_}" fill="none" />`:""}
          
          ${this.config.show_dots?y:""}
          
          <line class="cursor-line ${null!==this.hoverIndex?"visible":""}" 
                x1="${this.hoverX}" y1="0" x2="${this.hoverX}" y2="${f}" />
          <circle class="cursor-dot ${null!==this.hoverIndex?"visible":""}" 
                  cx="${this.hoverX}" cy="${this.hoverY}" />
        </g>
        
        <!-- Interactive Overlay -->
        <rect 
            width="${g}" 
            height="${f}" 
            fill="transparent"
            transform="translate(${u}, ${p})"
            @mousemove="${t=>this.handleMouseMove(t,g,f,r)}"
            @mouseleave="${()=>this.handleMouseLeave()}"
            style="cursor: crosshair;"
        />
      </svg>
      
      <div class="tooltip ${null!==this.hoverIndex?"visible":""}" 
           style="left: ${u+this.hoverX}px; top: ${this.hoverY-40}px; transform: translateX(-50%);">
         ${null!==this.hoverIndex?B`
           <div style="font-weight: bold;">${r[this.hoverIndex].value.toFixed(this.config.decimals)} ${this.config.unit||""}</div>
           <div style="font-size: 0.7em; opacity: 0.7;">
             ${new Date(r[this.hoverIndex].time).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}
           </div>
         `:""}
      </div>
    `}renderStats(){if(!this.config.show_stats||0===this.historyData.length)return B``;const t=this.historyData.map(t=>t.value),e={min:Math.min(...t),max:Math.max(...t),avg:t.reduce((t,e)=>t+e,0)/t.length};let s=B``;if(t.length>=2){const e=t[t.length-1]-t[t.length-2],i=.05;s=Math.abs(e)<i?B`<span class="trend-indicator trend-flat">→</span>`:e>0?B`<span class="trend-indicator trend-up">↑</span>`:B`<span class="trend-indicator trend-down">↓</span>`}return B`
      <div class="stats">
        ${s}
        ${this.config.show_min?B`<div class="stat-item">
              <span>Min:</span>
              <span class="stat-value">${e.min.toFixed(this.config.decimals)}</span>
            </div>`:""}
        ${this.config.show_avg?B`<div class="stat-item">
              <span>Avg:</span>
              <span class="stat-value">${e.avg.toFixed(this.config.decimals)}</span>
            </div>`:""}
        ${this.config.show_max?B`<div class="stat-item">
              <span>Max:</span>
              <span class="stat-value">${e.max.toFixed(this.config.decimals)}</span>
            </div>`:""}
      </div>
    `}render(){if(!this.config||!this.hass)return B``;const t=this.hass.states[this.config.entity];if(!t)return B`<div class="no-data">Entity not found: ${this.config.entity}</div>`;const e=parseFloat(t.state),s=this.config.unit||t.attributes.unit_of_measurement||"°C",i=this.config.name||t.attributes.friendly_name||this.config.entity,o=this.config.secondary_entity?this.hass.states[this.config.secondary_entity]:null,n=o?parseFloat(o.state):null,r=(null==o?void 0:o.attributes.unit_of_measurement)||"",a={height:`${this.config.height}px`,padding:`${this.config.padding}px`,borderRadius:`${this.config.border_radius}px`,textAlign:this.config.align,"--lux-glass-blur":`${this.config.glass_blur}px`,"--lux-glass-opacity":this.config.glass_opacity,"--lux-accent-gold":this.config.accent_gold,"--lux-accent-purple":this.config.accent_purple,"--lux-text-primary":this.config.text_primary,"--lux-text-muted":this.config.text_muted,"--lux-glow-strength":`${this.config.glow_strength}px`,"--lux-shadow-strength":`${this.config.shadow_strength}px`};return B`
      <div
        class="card ${this.config.glass?"glass":""}"
        style=${vt(a)}
        role="figure"
        aria-label=${this.config.aria_label||`${i} temperature graph`}
      >
        <div class="background" style="background: ${this.config.background_gradient}"></div>
        <div class="corner-accent"></div>
        
        <div class="content">
          ${this.config.compact?"":B`
                <div class="header">
                  <div class="title">${i}</div>
                  ${this.renderStats()}
                </div>
              `}
          
          ${"hidden"!==this.config.value_position?B`
                <div class="main-value">
                  ${e.toFixed(this.config.decimals)}
                  <span class="value-unit">${s}</span>
                </div>
              `:""}
          
          ${null!==n&&this.config.show_secondary?B`
                <div class="secondary-value">
                  ${this.config.secondary_label||"Secondary"}: 
                  ${n.toFixed(this.config.secondary_decimals||0)}${r}
                </div>
              `:""}
          
          <div class="graph-container">
            ${"trend"===this.config.mode?this.renderGraph():""}
          </div>
        </div>
      </div>
    `}};t([dt({attribute:!1})],yt.prototype,"hass",void 0),t([pt()],yt.prototype,"config",void 0),t([pt()],yt.prototype,"historyData",void 0),t([pt()],yt.prototype,"secondaryHistoryData",void 0),t([pt()],yt.prototype,"hoverIndex",void 0),t([pt()],yt.prototype,"hoverX",void 0),t([pt()],yt.prototype,"hoverY",void 0),t([pt()],yt.prototype,"dimensions",void 0),yt=t([(t=>(e,s)=>{void 0!==s?s.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)})("lux-temp-graph-card")],yt),window.customCards=window.customCards||[],window.customCards.push({type:"lux-temp-graph-card",name:"Luxury Temperature Graph Card",description:"A luxury glassmorphic temperature graph card"});export{yt as LuxTempGraphCard};
//# sourceMappingURL=lux-temp-graph-card.js.map
