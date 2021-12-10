var Ft=Object.defineProperty;var pt=Object.getOwnPropertySymbols;var qt=Object.prototype.hasOwnProperty,Kt=Object.prototype.propertyIsEnumerable;var ut=(t,e,r)=>e in t?Ft(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,me=(t,e)=>{for(var r in e||(e={}))qt.call(e,r)&&ut(t,r,e[r]);if(pt)for(var r of pt(e))Kt.call(e,r)&&ut(t,r,e[r]);return t};import{g as Ut,a as zt,e as Xt,m as Gt,s as Qt,b as Jt,c as Zt}from"./base-component-d3600d76.js";function er(t,e){return e.forEach(function(r){r&&typeof r!="string"&&!Array.isArray(r)&&Object.keys(r).forEach(function(n){if(n!=="default"&&!(n in t)){var o=Object.getOwnPropertyDescriptor(r,n);Object.defineProperty(t,n,o.get?o:{enumerable:!0,get:function(){return r[n]}})}})}),Object.freeze(t)}var ze={exports:{}},k="top",I="bottom",V="right",W="left",je="auto",ge=[k,I,V,W],fe="start",ye="end",lt="clippingParents",Xe="viewport",be="popper",dt="reference",Ge=ge.reduce(function(t,e){return t.concat([e+"-"+fe,e+"-"+ye])},[]),Qe=[].concat(ge,[je]).reduce(function(t,e){return t.concat([e,e+"-"+fe,e+"-"+ye])},[]),vt="beforeRead",ht="read",mt="afterRead",gt="beforeMain",yt="main",bt="afterMain",wt="beforeWrite",Et="write",Ot="afterWrite",_t=[vt,ht,mt,gt,yt,bt,wt,Et,Ot];function G(t){return t?(t.nodeName||"").toLowerCase():null}function q(t){if(t==null)return window;if(t.toString()!=="[object Window]"){var e=t.ownerDocument;return e&&e.defaultView||window}return t}function we(t){var e=q(t).Element;return t instanceof e||t instanceof Element}function Y(t){var e=q(t).HTMLElement;return t instanceof e||t instanceof HTMLElement}function xt(t){if(typeof ShadowRoot=="undefined")return!1;var e=q(t).ShadowRoot;return t instanceof e||t instanceof ShadowRoot}function tr(t){var e=t.state;Object.keys(e.elements).forEach(function(r){var n=e.styles[r]||{},o=e.attributes[r]||{},a=e.elements[r];!Y(a)||!G(a)||(Object.assign(a.style,n),Object.keys(o).forEach(function(f){var s=o[f];s===!1?a.removeAttribute(f):a.setAttribute(f,s===!0?"":s)}))})}function rr(t){var e=t.state,r={popper:{position:e.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(e.elements.popper.style,r.popper),e.styles=r,e.elements.arrow&&Object.assign(e.elements.arrow.style,r.arrow),function(){Object.keys(e.elements).forEach(function(n){var o=e.elements[n],a=e.attributes[n]||{},f=Object.keys(e.styles.hasOwnProperty(n)?e.styles[n]:r[n]),s=f.reduce(function(u,d){return u[d]="",u},{});!Y(o)||!G(o)||(Object.assign(o.style,s),Object.keys(a).forEach(function(u){o.removeAttribute(u)}))})}}var Je={name:"applyStyles",enabled:!0,phase:"write",fn:tr,effect:rr,requires:["computeStyles"]};function Q(t){return t.split("-")[0]}var ce=Math.max,Be=Math.min,Ee=Math.round;function Oe(t,e){e===void 0&&(e=!1);var r=t.getBoundingClientRect(),n=1,o=1;if(Y(t)&&e){var a=t.offsetHeight,f=t.offsetWidth;f>0&&(n=Ee(r.width)/f||1),a>0&&(o=Ee(r.height)/a||1)}return{width:r.width/n,height:r.height/o,top:r.top/o,right:r.right/n,bottom:r.bottom/o,left:r.left/n,x:r.left/n,y:r.top/o}}function Ze(t){var e=Oe(t),r=t.offsetWidth,n=t.offsetHeight;return Math.abs(e.width-r)<=1&&(r=e.width),Math.abs(e.height-n)<=1&&(n=e.height),{x:t.offsetLeft,y:t.offsetTop,width:r,height:n}}function At(t,e){var r=e.getRootNode&&e.getRootNode();if(t.contains(e))return!0;if(r&&xt(r)){var n=e;do{if(n&&t.isSameNode(n))return!0;n=n.parentNode||n.host}while(n)}return!1}function J(t){return q(t).getComputedStyle(t)}function nr(t){return["table","td","th"].indexOf(G(t))>=0}function oe(t){return((we(t)?t.ownerDocument:t.document)||window.document).documentElement}function ke(t){return G(t)==="html"?t:t.assignedSlot||t.parentNode||(xt(t)?t.host:null)||oe(t)}function Pt(t){return!Y(t)||J(t).position==="fixed"?null:t.offsetParent}function or(t){var e=navigator.userAgent.toLowerCase().indexOf("firefox")!==-1,r=navigator.userAgent.indexOf("Trident")!==-1;if(r&&Y(t)){var n=J(t);if(n.position==="fixed")return null}for(var o=ke(t);Y(o)&&["html","body"].indexOf(G(o))<0;){var a=J(o);if(a.transform!=="none"||a.perspective!=="none"||a.contain==="paint"||["transform","perspective"].indexOf(a.willChange)!==-1||e&&a.willChange==="filter"||e&&a.filter&&a.filter!=="none")return o;o=o.parentNode}return null}function Ce(t){for(var e=q(t),r=Pt(t);r&&nr(r)&&J(r).position==="static";)r=Pt(r);return r&&(G(r)==="html"||G(r)==="body"&&J(r).position==="static")?e:r||or(t)||e}function et(t){return["top","bottom"].indexOf(t)>=0?"x":"y"}function Te(t,e,r){return ce(t,Be(e,r))}function ir(t,e,r){var n=Te(t,e,r);return n>r?r:n}function Ct(){return{top:0,right:0,bottom:0,left:0}}function Tt(t){return Object.assign({},Ct(),t)}function Dt(t,e){return e.reduce(function(r,n){return r[n]=t,r},{})}var ar=function(e,r){return e=typeof e=="function"?e(Object.assign({},r.rects,{placement:r.placement})):e,Tt(typeof e!="number"?e:Dt(e,ge))};function sr(t){var e,r=t.state,n=t.name,o=t.options,a=r.elements.arrow,f=r.modifiersData.popperOffsets,s=Q(r.placement),u=et(s),d=[W,V].indexOf(s)>=0,c=d?"height":"width";if(!(!a||!f)){var g=ar(o.padding,r),A=Ze(a),m=u==="y"?k:W,y=u==="y"?I:V,x=r.rects.reference[c]+r.rects.reference[u]-f[u]-r.rects.popper[c],h=f[u]-r.rects.reference[u],b=Ce(a),P=b?u==="y"?b.clientHeight||0:b.clientWidth||0:0,C=x/2-h/2,v=g[m],O=P-A[c]-g[y],E=P/2-A[c]/2+C,_=Te(v,E,O),D=u;r.modifiersData[n]=(e={},e[D]=_,e.centerOffset=_-E,e)}}function fr(t){var e=t.state,r=t.options,n=r.element,o=n===void 0?"[data-popper-arrow]":n;o!=null&&(typeof o=="string"&&(o=e.elements.popper.querySelector(o),!o)||!At(e.elements.popper,o)||(e.elements.arrow=o))}var St={name:"arrow",enabled:!0,phase:"main",fn:sr,effect:fr,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function _e(t){return t.split("-")[1]}var cr={top:"auto",right:"auto",bottom:"auto",left:"auto"};function pr(t){var e=t.x,r=t.y,n=window,o=n.devicePixelRatio||1;return{x:Ee(e*o)/o||0,y:Ee(r*o)/o||0}}function Nt(t){var e,r=t.popper,n=t.popperRect,o=t.placement,a=t.variation,f=t.offsets,s=t.position,u=t.gpuAcceleration,d=t.adaptive,c=t.roundOffsets,g=t.isFixed,A=c===!0?pr(f):typeof c=="function"?c(f):f,m=A.x,y=m===void 0?0:m,x=A.y,h=x===void 0?0:x,b=f.hasOwnProperty("x"),P=f.hasOwnProperty("y"),C=W,v=k,O=window;if(d){var E=Ce(r),_="clientHeight",D="clientWidth";if(E===q(r)&&(E=oe(r),J(E).position!=="static"&&s==="absolute"&&(_="scrollHeight",D="scrollWidth")),E=E,o===k||(o===W||o===V)&&a===ye){v=I;var M=g&&O.visualViewport?O.visualViewport.height:E[_];h-=M-n.height,h*=u?1:-1}if(o===W||(o===k||o===I)&&a===ye){C=V;var T=g&&O.visualViewport?O.visualViewport.width:E[D];y-=T-n.width,y*=u?1:-1}}var N=Object.assign({position:s},d&&cr);if(u){var R;return Object.assign({},N,(R={},R[v]=P?"0":"",R[C]=b?"0":"",R.transform=(O.devicePixelRatio||1)<=1?"translate("+y+"px, "+h+"px)":"translate3d("+y+"px, "+h+"px, 0)",R))}return Object.assign({},N,(e={},e[v]=P?h+"px":"",e[C]=b?y+"px":"",e.transform="",e))}function ur(t){var e=t.state,r=t.options,n=r.gpuAcceleration,o=n===void 0?!0:n,a=r.adaptive,f=a===void 0?!0:a,s=r.roundOffsets,u=s===void 0?!0:s,d={placement:Q(e.placement),variation:_e(e.placement),popper:e.elements.popper,popperRect:e.rects.popper,gpuAcceleration:o,isFixed:e.options.strategy==="fixed"};e.modifiersData.popperOffsets!=null&&(e.styles.popper=Object.assign({},e.styles.popper,Nt(Object.assign({},d,{offsets:e.modifiersData.popperOffsets,position:e.options.strategy,adaptive:f,roundOffsets:u})))),e.modifiersData.arrow!=null&&(e.styles.arrow=Object.assign({},e.styles.arrow,Nt(Object.assign({},d,{offsets:e.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:u})))),e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-placement":e.placement})}var tt={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:ur,data:{}},We={passive:!0};function lr(t){var e=t.state,r=t.instance,n=t.options,o=n.scroll,a=o===void 0?!0:o,f=n.resize,s=f===void 0?!0:f,u=q(e.elements.popper),d=[].concat(e.scrollParents.reference,e.scrollParents.popper);return a&&d.forEach(function(c){c.addEventListener("scroll",r.update,We)}),s&&u.addEventListener("resize",r.update,We),function(){a&&d.forEach(function(c){c.removeEventListener("scroll",r.update,We)}),s&&u.removeEventListener("resize",r.update,We)}}var rt={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:lr,data:{}},dr={left:"right",right:"left",bottom:"top",top:"bottom"};function He(t){return t.replace(/left|right|bottom|top/g,function(e){return dr[e]})}var vr={start:"end",end:"start"};function Mt(t){return t.replace(/start|end/g,function(e){return vr[e]})}function nt(t){var e=q(t),r=e.pageXOffset,n=e.pageYOffset;return{scrollLeft:r,scrollTop:n}}function ot(t){return Oe(oe(t)).left+nt(t).scrollLeft}function hr(t){var e=q(t),r=oe(t),n=e.visualViewport,o=r.clientWidth,a=r.clientHeight,f=0,s=0;return n&&(o=n.width,a=n.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(f=n.offsetLeft,s=n.offsetTop)),{width:o,height:a,x:f+ot(t),y:s}}function mr(t){var e,r=oe(t),n=nt(t),o=(e=t.ownerDocument)==null?void 0:e.body,a=ce(r.scrollWidth,r.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),f=ce(r.scrollHeight,r.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0),s=-n.scrollLeft+ot(t),u=-n.scrollTop;return J(o||r).direction==="rtl"&&(s+=ce(r.clientWidth,o?o.clientWidth:0)-a),{width:a,height:f,x:s,y:u}}function it(t){var e=J(t),r=e.overflow,n=e.overflowX,o=e.overflowY;return/auto|scroll|overlay|hidden/.test(r+o+n)}function $t(t){return["html","body","#document"].indexOf(G(t))>=0?t.ownerDocument.body:Y(t)&&it(t)?t:$t(ke(t))}function De(t,e){var r;e===void 0&&(e=[]);var n=$t(t),o=n===((r=t.ownerDocument)==null?void 0:r.body),a=q(n),f=o?[a].concat(a.visualViewport||[],it(n)?n:[]):n,s=e.concat(f);return o?s:s.concat(De(ke(f)))}function at(t){return Object.assign({},t,{left:t.x,top:t.y,right:t.x+t.width,bottom:t.y+t.height})}function gr(t){var e=Oe(t);return e.top=e.top+t.clientTop,e.left=e.left+t.clientLeft,e.bottom=e.top+t.clientHeight,e.right=e.left+t.clientWidth,e.width=t.clientWidth,e.height=t.clientHeight,e.x=e.left,e.y=e.top,e}function Lt(t,e){return e===Xe?at(hr(t)):we(e)?gr(e):at(mr(oe(t)))}function yr(t){var e=De(ke(t)),r=["absolute","fixed"].indexOf(J(t).position)>=0,n=r&&Y(t)?Ce(t):t;return we(n)?e.filter(function(o){return we(o)&&At(o,n)&&G(o)!=="body"&&(r?J(o).position!=="static":!0)}):[]}function br(t,e,r){var n=e==="clippingParents"?yr(t):[].concat(e),o=[].concat(n,[r]),a=o[0],f=o.reduce(function(s,u){var d=Lt(t,u);return s.top=ce(d.top,s.top),s.right=Be(d.right,s.right),s.bottom=Be(d.bottom,s.bottom),s.left=ce(d.left,s.left),s},Lt(t,a));return f.width=f.right-f.left,f.height=f.bottom-f.top,f.x=f.left,f.y=f.top,f}function Rt(t){var e=t.reference,r=t.element,n=t.placement,o=n?Q(n):null,a=n?_e(n):null,f=e.x+e.width/2-r.width/2,s=e.y+e.height/2-r.height/2,u;switch(o){case k:u={x:f,y:e.y-r.height};break;case I:u={x:f,y:e.y+e.height};break;case V:u={x:e.x+e.width,y:s};break;case W:u={x:e.x-r.width,y:s};break;default:u={x:e.x,y:e.y}}var d=o?et(o):null;if(d!=null){var c=d==="y"?"height":"width";switch(a){case fe:u[d]=u[d]-(e[c]/2-r[c]/2);break;case ye:u[d]=u[d]+(e[c]/2-r[c]/2);break}}return u}function xe(t,e){e===void 0&&(e={});var r=e,n=r.placement,o=n===void 0?t.placement:n,a=r.boundary,f=a===void 0?lt:a,s=r.rootBoundary,u=s===void 0?Xe:s,d=r.elementContext,c=d===void 0?be:d,g=r.altBoundary,A=g===void 0?!1:g,m=r.padding,y=m===void 0?0:m,x=Tt(typeof y!="number"?y:Dt(y,ge)),h=c===be?dt:be,b=t.rects.popper,P=t.elements[A?h:c],C=br(we(P)?P:P.contextElement||oe(t.elements.popper),f,u),v=Oe(t.elements.reference),O=Rt({reference:v,element:b,strategy:"absolute",placement:o}),E=at(Object.assign({},b,O)),_=c===be?E:v,D={top:C.top-_.top+x.top,bottom:_.bottom-C.bottom+x.bottom,left:C.left-_.left+x.left,right:_.right-C.right+x.right},M=t.modifiersData.offset;if(c===be&&M){var T=M[o];Object.keys(D).forEach(function(N){var R=[V,I].indexOf(N)>=0?1:-1,F=[k,I].indexOf(N)>=0?"y":"x";D[N]+=T[F]*R})}return D}function wr(t,e){e===void 0&&(e={});var r=e,n=r.placement,o=r.boundary,a=r.rootBoundary,f=r.padding,s=r.flipVariations,u=r.allowedAutoPlacements,d=u===void 0?Qe:u,c=_e(n),g=c?s?Ge:Ge.filter(function(y){return _e(y)===c}):ge,A=g.filter(function(y){return d.indexOf(y)>=0});A.length===0&&(A=g);var m=A.reduce(function(y,x){return y[x]=xe(t,{placement:x,boundary:o,rootBoundary:a,padding:f})[Q(x)],y},{});return Object.keys(m).sort(function(y,x){return m[y]-m[x]})}function Er(t){if(Q(t)===je)return[];var e=He(t);return[Mt(t),e,Mt(e)]}function Or(t){var e=t.state,r=t.options,n=t.name;if(!e.modifiersData[n]._skip){for(var o=r.mainAxis,a=o===void 0?!0:o,f=r.altAxis,s=f===void 0?!0:f,u=r.fallbackPlacements,d=r.padding,c=r.boundary,g=r.rootBoundary,A=r.altBoundary,m=r.flipVariations,y=m===void 0?!0:m,x=r.allowedAutoPlacements,h=e.options.placement,b=Q(h),P=b===h,C=u||(P||!y?[He(h)]:Er(h)),v=[h].concat(C).reduce(function(re,U){return re.concat(Q(U)===je?wr(e,{placement:U,boundary:c,rootBoundary:g,padding:d,flipVariations:y,allowedAutoPlacements:x}):U)},[]),O=e.rects.reference,E=e.rects.popper,_=new Map,D=!0,M=v[0],T=0;T<v.length;T++){var N=v[T],R=Q(N),F=_e(N)===fe,pe=[k,I].indexOf(R)>=0,H=pe?"width":"height",L=xe(e,{placement:N,boundary:c,rootBoundary:g,altBoundary:A,padding:d}),j=pe?F?V:W:F?I:k;O[H]>E[H]&&(j=He(j));var ie=He(j),K=[];if(a&&K.push(L[R]<=0),s&&K.push(L[j]<=0,L[ie]<=0),K.every(function(re){return re})){M=N,D=!1;break}_.set(N,K)}if(D)for(var ee=y?3:1,te=function(U){var se=v.find(function(le){var z=_.get(le);if(z)return z.slice(0,U).every(function(de){return de})});if(se)return M=se,"break"},ae=ee;ae>0;ae--){var ue=te(ae);if(ue==="break")break}e.placement!==M&&(e.modifiersData[n]._skip=!0,e.placement=M,e.reset=!0)}}var jt={name:"flip",enabled:!0,phase:"main",fn:Or,requiresIfExists:["offset"],data:{_skip:!1}};function Bt(t,e,r){return r===void 0&&(r={x:0,y:0}),{top:t.top-e.height-r.y,right:t.right-e.width+r.x,bottom:t.bottom-e.height+r.y,left:t.left-e.width-r.x}}function kt(t){return[k,V,I,W].some(function(e){return t[e]>=0})}function _r(t){var e=t.state,r=t.name,n=e.rects.reference,o=e.rects.popper,a=e.modifiersData.preventOverflow,f=xe(e,{elementContext:"reference"}),s=xe(e,{altBoundary:!0}),u=Bt(f,n),d=Bt(s,o,a),c=kt(u),g=kt(d);e.modifiersData[r]={referenceClippingOffsets:u,popperEscapeOffsets:d,isReferenceHidden:c,hasPopperEscaped:g},e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-reference-hidden":c,"data-popper-escaped":g})}var Wt={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:_r};function xr(t,e,r){var n=Q(t),o=[W,k].indexOf(n)>=0?-1:1,a=typeof r=="function"?r(Object.assign({},e,{placement:t})):r,f=a[0],s=a[1];return f=f||0,s=(s||0)*o,[W,V].indexOf(n)>=0?{x:s,y:f}:{x:f,y:s}}function Ar(t){var e=t.state,r=t.options,n=t.name,o=r.offset,a=o===void 0?[0,0]:o,f=Qe.reduce(function(c,g){return c[g]=xr(g,e.rects,a),c},{}),s=f[e.placement],u=s.x,d=s.y;e.modifiersData.popperOffsets!=null&&(e.modifiersData.popperOffsets.x+=u,e.modifiersData.popperOffsets.y+=d),e.modifiersData[n]=f}var Ht={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:Ar};function Pr(t){var e=t.state,r=t.name;e.modifiersData[r]=Rt({reference:e.rects.reference,element:e.rects.popper,strategy:"absolute",placement:e.placement})}var st={name:"popperOffsets",enabled:!0,phase:"read",fn:Pr,data:{}};function Cr(t){return t==="x"?"y":"x"}function Tr(t){var e=t.state,r=t.options,n=t.name,o=r.mainAxis,a=o===void 0?!0:o,f=r.altAxis,s=f===void 0?!1:f,u=r.boundary,d=r.rootBoundary,c=r.altBoundary,g=r.padding,A=r.tether,m=A===void 0?!0:A,y=r.tetherOffset,x=y===void 0?0:y,h=xe(e,{boundary:u,rootBoundary:d,padding:g,altBoundary:c}),b=Q(e.placement),P=_e(e.placement),C=!P,v=et(b),O=Cr(v),E=e.modifiersData.popperOffsets,_=e.rects.reference,D=e.rects.popper,M=typeof x=="function"?x(Object.assign({},e.rects,{placement:e.placement})):x,T=typeof M=="number"?{mainAxis:M,altAxis:M}:Object.assign({mainAxis:0,altAxis:0},M),N=e.modifiersData.offset?e.modifiersData.offset[e.placement]:null,R={x:0,y:0};if(!!E){if(a){var F,pe=v==="y"?k:W,H=v==="y"?I:V,L=v==="y"?"height":"width",j=E[v],ie=j+h[pe],K=j-h[H],ee=m?-D[L]/2:0,te=P===fe?_[L]:D[L],ae=P===fe?-D[L]:-_[L],ue=e.elements.arrow,re=m&&ue?Ze(ue):{width:0,height:0},U=e.modifiersData["arrow#persistent"]?e.modifiersData["arrow#persistent"].padding:Ct(),se=U[pe],le=U[H],z=Te(0,_[L],re[L]),de=C?_[L]/2-ee-z-se-T.mainAxis:te-z-se-T.mainAxis,Ve=C?-_[L]/2+ee+z+le+T.mainAxis:ae+z+le+T.mainAxis,X=e.elements.arrow&&Ce(e.elements.arrow),Ye=X?v==="y"?X.clientTop||0:X.clientLeft||0:0,Se=(F=N==null?void 0:N[v])!=null?F:0,Fe=j+de-Se-Ye,qe=j+Ve-Se,ne=Te(m?Be(ie,Fe):ie,j,m?ce(K,qe):K);E[v]=ne,R[v]=ne-j}if(s){var ve,Ke=v==="x"?k:W,Ue=v==="x"?I:V,Z=E[O],he=O==="y"?"height":"width",Ne=Z+h[Ke],Me=Z-h[Ue],Ae=[k,W].indexOf(b)!==-1,$e=(ve=N==null?void 0:N[O])!=null?ve:0,Le=Ae?Ne:Z-_[he]-D[he]-$e+T.altAxis,Re=Ae?Z+_[he]+D[he]-$e-T.altAxis:Me,B=m&&Ae?ir(Le,Z,Re):Te(m?Le:Ne,Z,m?Re:Me);E[O]=B,R[O]=B-Z}e.modifiersData[n]=R}}var It={name:"preventOverflow",enabled:!0,phase:"main",fn:Tr,requiresIfExists:["offset"]};function Dr(t){return{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}}function Sr(t){return t===q(t)||!Y(t)?nt(t):Dr(t)}function Nr(t){var e=t.getBoundingClientRect(),r=Ee(e.width)/t.offsetWidth||1,n=Ee(e.height)/t.offsetHeight||1;return r!==1||n!==1}function Mr(t,e,r){r===void 0&&(r=!1);var n=Y(e),o=Y(e)&&Nr(e),a=oe(e),f=Oe(t,o),s={scrollLeft:0,scrollTop:0},u={x:0,y:0};return(n||!n&&!r)&&((G(e)!=="body"||it(a))&&(s=Sr(e)),Y(e)?(u=Oe(e,!0),u.x+=e.clientLeft,u.y+=e.clientTop):a&&(u.x=ot(a))),{x:f.left+s.scrollLeft-u.x,y:f.top+s.scrollTop-u.y,width:f.width,height:f.height}}function $r(t){var e=new Map,r=new Set,n=[];t.forEach(function(a){e.set(a.name,a)});function o(a){r.add(a.name);var f=[].concat(a.requires||[],a.requiresIfExists||[]);f.forEach(function(s){if(!r.has(s)){var u=e.get(s);u&&o(u)}}),n.push(a)}return t.forEach(function(a){r.has(a.name)||o(a)}),n}function Lr(t){var e=$r(t);return _t.reduce(function(r,n){return r.concat(e.filter(function(o){return o.phase===n}))},[])}function Rr(t){var e;return function(){return e||(e=new Promise(function(r){Promise.resolve().then(function(){e=void 0,r(t())})})),e}}function jr(t){var e=t.reduce(function(r,n){var o=r[n.name];return r[n.name]=o?Object.assign({},o,n,{options:Object.assign({},o.options,n.options),data:Object.assign({},o.data,n.data)}):n,r},{});return Object.keys(e).map(function(r){return e[r]})}var Vt={placement:"bottom",modifiers:[],strategy:"absolute"};function Yt(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return!e.some(function(n){return!(n&&typeof n.getBoundingClientRect=="function")})}function Ie(t){t===void 0&&(t={});var e=t,r=e.defaultModifiers,n=r===void 0?[]:r,o=e.defaultOptions,a=o===void 0?Vt:o;return function(s,u,d){d===void 0&&(d=a);var c={placement:"bottom",orderedModifiers:[],options:Object.assign({},Vt,a),modifiersData:{},elements:{reference:s,popper:u},attributes:{},styles:{}},g=[],A=!1,m={state:c,setOptions:function(b){var P=typeof b=="function"?b(c.options):b;x(),c.options=Object.assign({},a,c.options,P),c.scrollParents={reference:we(s)?De(s):s.contextElement?De(s.contextElement):[],popper:De(u)};var C=Lr(jr([].concat(n,c.options.modifiers)));return c.orderedModifiers=C.filter(function(v){return v.enabled}),y(),m.update()},forceUpdate:function(){if(!A){var b=c.elements,P=b.reference,C=b.popper;if(!!Yt(P,C)){c.rects={reference:Mr(P,Ce(C),c.options.strategy==="fixed"),popper:Ze(C)},c.reset=!1,c.placement=c.options.placement,c.orderedModifiers.forEach(function(T){return c.modifiersData[T.name]=Object.assign({},T.data)});for(var v=0;v<c.orderedModifiers.length;v++){if(c.reset===!0){c.reset=!1,v=-1;continue}var O=c.orderedModifiers[v],E=O.fn,_=O.options,D=_===void 0?{}:_,M=O.name;typeof E=="function"&&(c=E({state:c,options:D,name:M,instance:m})||c)}}}},update:Rr(function(){return new Promise(function(h){m.forceUpdate(),h(c)})}),destroy:function(){x(),A=!0}};if(!Yt(s,u))return m;m.setOptions(d).then(function(h){!A&&d.onFirstUpdate&&d.onFirstUpdate(h)});function y(){c.orderedModifiers.forEach(function(h){var b=h.name,P=h.options,C=P===void 0?{}:P,v=h.effect;if(typeof v=="function"){var O=v({state:c,name:b,instance:m,options:C}),E=function(){};g.push(O||E)}})}function x(){g.forEach(function(h){return h()}),g=[]}return m}}var Br=Ie(),kr=[rt,st,tt,Je],Wr=Ie({defaultModifiers:kr}),Hr=[rt,st,tt,Je,Ht,jt,It,St,Wt],Ir=Ie({defaultModifiers:Hr}),Vr=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",popperGenerator:Ie,detectOverflow:xe,createPopperBase:Br,createPopper:Ir,createPopperLite:Wr,top:k,bottom:I,right:V,left:W,auto:je,basePlacements:ge,start:fe,end:ye,clippingParents:lt,viewport:Xe,popper:be,reference:dt,variationPlacements:Ge,placements:Qe,beforeRead:vt,read:ht,afterRead:mt,beforeMain:gt,main:yt,afterMain:bt,beforeWrite:wt,write:Et,afterWrite:Ot,modifierPhases:_t,applyStyles:Je,arrow:St,computeStyles:tt,eventListeners:rt,flip:jt,hide:Wt,offset:Ht,popperOffsets:st,preventOverflow:It}),Yr=Ut(Vr);/*!
  * Bootstrap dropdown.js v5.1.3 (https://getbootstrap.com/)
  * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */(function(t,e){(function(r,n){t.exports=n(Yr,Xt.exports,Gt.exports,Qt.exports,Jt.exports)})(Zt,function(r,n,o,a,f){const s=p=>p&&typeof p=="object"&&"default"in p?p:{default:p};function u(p){if(p&&p.__esModule)return p;const i=Object.create(null);if(p){for(const l in p)if(l!=="default"){const w=Object.getOwnPropertyDescriptor(p,l);Object.defineProperty(i,l,w.get?w:{enumerable:!0,get:()=>p[l]})}}return i.default=p,Object.freeze(i)}const d=u(r),c=s(n),g=s(o),A=s(a),m=s(f),y=p=>p==null?`${p}`:{}.toString.call(p).match(/\s([a-z]+)/i)[1].toLowerCase(),x=p=>{let i=p.getAttribute("data-bs-target");if(!i||i==="#"){let l=p.getAttribute("href");if(!l||!l.includes("#")&&!l.startsWith("."))return null;l.includes("#")&&!l.startsWith("#")&&(l=`#${l.split("#")[1]}`),i=l&&l!=="#"?l.trim():null}return i},h=p=>{const i=x(p);return i?document.querySelector(i):null},b=p=>!p||typeof p!="object"?!1:(typeof p.jquery!="undefined"&&(p=p[0]),typeof p.nodeType!="undefined"),P=p=>b(p)?p.jquery?p[0]:p:typeof p=="string"&&p.length>0?document.querySelector(p):null,C=(p,i,l)=>{Object.keys(l).forEach(w=>{const $=l[w],S=i[w],Pe=S&&b(S)?"element":y(S);if(!new RegExp($).test(Pe))throw new TypeError(`${p.toUpperCase()}: Option "${w}" provided type "${Pe}" but expected type "${$}".`)})},v=p=>!b(p)||p.getClientRects().length===0?!1:getComputedStyle(p).getPropertyValue("visibility")==="visible",O=p=>!p||p.nodeType!==Node.ELEMENT_NODE||p.classList.contains("disabled")?!0:typeof p.disabled!="undefined"?p.disabled:p.hasAttribute("disabled")&&p.getAttribute("disabled")!=="false",E=()=>{},_=()=>{const{jQuery:p}=window;return p&&!document.body.hasAttribute("data-bs-no-jquery")?p:null},D=[],M=p=>{document.readyState==="loading"?(D.length||document.addEventListener("DOMContentLoaded",()=>{D.forEach(i=>i())}),D.push(p)):p()},T=()=>document.documentElement.dir==="rtl",N=p=>{M(()=>{const i=_();if(i){const l=p.NAME,w=i.fn[l];i.fn[l]=p.jQueryInterface,i.fn[l].Constructor=p,i.fn[l].noConflict=()=>(i.fn[l]=w,p.jQueryInterface)}})},R=(p,i,l,w)=>{let $=p.indexOf(i);if($===-1)return p[!l&&w?p.length-1:0];const S=p.length;return $+=l?1:-1,w&&($=($+S)%S),p[Math.max(0,Math.min($,S-1))]},F="dropdown",H=".bs.dropdown",L=".data-api",j="Escape",ie="Space",K="Tab",ee="ArrowUp",te="ArrowDown",ae=2,ue=new RegExp(`${ee}|${te}|${j}`),re=`hide${H}`,U=`hidden${H}`,se=`show${H}`,le=`shown${H}`,z=`click${H}${L}`,de=`keydown${H}${L}`,Ve=`keyup${H}${L}`,X="show",Ye="dropup",Se="dropend",Fe="dropstart",qe="navbar",ne='[data-bs-toggle="dropdown"]',ve=".dropdown-menu",Ke=".navbar-nav",Ue=".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",Z=T()?"top-end":"top-start",he=T()?"top-start":"top-end",Ne=T()?"bottom-end":"bottom-start",Me=T()?"bottom-start":"bottom-end",Ae=T()?"left-start":"right-start",$e=T()?"right-start":"left-start",Le={offset:[0,2],boundary:"clippingParents",reference:"toggle",display:"dynamic",popperConfig:null,autoClose:!0},Re={offset:"(array|string|function)",boundary:"(string|element)",reference:"(string|element|object)",display:"string",popperConfig:"(null|object|function)",autoClose:"(boolean|string)"};class B extends m.default{constructor(i,l){super(i);this._popper=null,this._config=this._getConfig(l),this._menu=this._getMenuElement(),this._inNavbar=this._detectNavbar()}static get Default(){return Le}static get DefaultType(){return Re}static get NAME(){return F}toggle(){return this._isShown()?this.hide():this.show()}show(){if(O(this._element)||this._isShown(this._menu))return;const i={relatedTarget:this._element};if(c.default.trigger(this._element,se,i).defaultPrevented)return;const w=B.getParentFromElement(this._element);this._inNavbar?g.default.setDataAttribute(this._menu,"popper","none"):this._createPopper(w),"ontouchstart"in document.documentElement&&!w.closest(Ke)&&[].concat(...document.body.children).forEach($=>c.default.on($,"mouseover",E)),this._element.focus(),this._element.setAttribute("aria-expanded",!0),this._menu.classList.add(X),this._element.classList.add(X),c.default.trigger(this._element,le,i)}hide(){if(O(this._element)||!this._isShown(this._menu))return;const i={relatedTarget:this._element};this._completeHide(i)}dispose(){this._popper&&this._popper.destroy(),super.dispose()}update(){this._inNavbar=this._detectNavbar(),this._popper&&this._popper.update()}_completeHide(i){c.default.trigger(this._element,re,i).defaultPrevented||("ontouchstart"in document.documentElement&&[].concat(...document.body.children).forEach(w=>c.default.off(w,"mouseover",E)),this._popper&&this._popper.destroy(),this._menu.classList.remove(X),this._element.classList.remove(X),this._element.setAttribute("aria-expanded","false"),g.default.removeDataAttribute(this._menu,"popper"),c.default.trigger(this._element,U,i))}_getConfig(i){if(i=me(me(me({},this.constructor.Default),g.default.getDataAttributes(this._element)),i),C(F,i,this.constructor.DefaultType),typeof i.reference=="object"&&!b(i.reference)&&typeof i.reference.getBoundingClientRect!="function")throw new TypeError(`${F.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);return i}_createPopper(i){if(typeof d=="undefined")throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");let l=this._element;this._config.reference==="parent"?l=i:b(this._config.reference)?l=P(this._config.reference):typeof this._config.reference=="object"&&(l=this._config.reference);const w=this._getPopperConfig(),$=w.modifiers.find(S=>S.name==="applyStyles"&&S.enabled===!1);this._popper=d.createPopper(l,this._menu,w),$&&g.default.setDataAttribute(this._menu,"popper","static")}_isShown(i=this._element){return i.classList.contains(X)}_getMenuElement(){return A.default.next(this._element,ve)[0]}_getPlacement(){const i=this._element.parentNode;if(i.classList.contains(Se))return Ae;if(i.classList.contains(Fe))return $e;const l=getComputedStyle(this._menu).getPropertyValue("--bs-position").trim()==="end";return i.classList.contains(Ye)?l?he:Z:l?Me:Ne}_detectNavbar(){return this._element.closest(`.${qe}`)!==null}_getOffset(){const{offset:i}=this._config;return typeof i=="string"?i.split(",").map(l=>Number.parseInt(l,10)):typeof i=="function"?l=>i(l,this._element):i}_getPopperConfig(){const i={placement:this._getPlacement(),modifiers:[{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"offset",options:{offset:this._getOffset()}}]};return this._config.display==="static"&&(i.modifiers=[{name:"applyStyles",enabled:!1}]),me(me({},i),typeof this._config.popperConfig=="function"?this._config.popperConfig(i):this._config.popperConfig)}_selectMenuItem({key:i,target:l}){const w=A.default.find(Ue,this._menu).filter(v);!w.length||R(w,l,i===te,!w.includes(l)).focus()}static jQueryInterface(i){return this.each(function(){const l=B.getOrCreateInstance(this,i);if(typeof i=="string"){if(typeof l[i]=="undefined")throw new TypeError(`No method named "${i}"`);l[i]()}})}static clearMenus(i){if(i&&(i.button===ae||i.type==="keyup"&&i.key!==K))return;const l=A.default.find(ne);for(let w=0,$=l.length;w<$;w++){const S=B.getInstance(l[w]);if(!S||S._config.autoClose===!1||!S._isShown())continue;const Pe={relatedTarget:S._element};if(i){const ft=i.composedPath(),ct=ft.includes(S._menu);if(ft.includes(S._element)||S._config.autoClose==="inside"&&!ct||S._config.autoClose==="outside"&&ct||S._menu.contains(i.target)&&(i.type==="keyup"&&i.key===K||/input|select|option|textarea|form/i.test(i.target.tagName)))continue;i.type==="click"&&(Pe.clickEvent=i)}S._completeHide(Pe)}}static getParentFromElement(i){return h(i)||i.parentNode}static dataApiKeydownHandler(i){if(/input|textarea/i.test(i.target.tagName)?i.key===ie||i.key!==j&&(i.key!==te&&i.key!==ee||i.target.closest(ve)):!ue.test(i.key))return;const l=this.classList.contains(X);if(!l&&i.key===j||(i.preventDefault(),i.stopPropagation(),O(this)))return;const w=this.matches(ne)?this:A.default.prev(this,ne)[0],$=B.getOrCreateInstance(w);if(i.key===j){$.hide();return}if(i.key===ee||i.key===te){l||$.show(),$._selectMenuItem(i);return}(!l||i.key===ie)&&B.clearMenus()}}return c.default.on(document,de,ne,B.dataApiKeydownHandler),c.default.on(document,de,ve,B.dataApiKeydownHandler),c.default.on(document,z,B.clearMenus),c.default.on(document,Ve,B.clearMenus),c.default.on(document,z,ne,function(p){p.preventDefault(),B.getOrCreateInstance(this).toggle()}),N(B),B})})(ze);var Fr=zt(ze.exports),Ur=Object.freeze(er({__proto__:null,[Symbol.toStringTag]:"Module",default:Fr},[ze.exports]));export{Ur as d};
