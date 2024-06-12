import{A as Ee,B as Me,C as Fe,Db as He,G as X,I as ee,Ia as E,J as Ae,Ma as d,Na as se,P as te,Pa as H,Q as Ie,Qa as U,R as y,Ra as h,Sa as $,U as c,V as C,Va as oe,Wa as re,Xa as M,Y as T,Ya as F,Z as b,Za as ae,_ as l,_a as V,aa as ie,ba as Ne,bb as ke,ca as S,cb as le,da as O,db as ce,ea as ne,eb as ue,fa as P,fb as f,g as B,ga as L,gb as _,hb as de,ib as he,j as J,k as g,kb as j,l as Ce,lb as Be,mb as xe,n as Te,na as Re,ob as A,pb as v,r as x,s as K,sa as G,sb as fe,tb as Pe,vb as Le,wb as Ge,x as Se,y as q,z as Oe}from"./chunk-K4XZND3X.js";var ge=null;function pe(){return ge}function mi(i){ge||(ge=i)}var Ue=class{},z=new T("DocumentToken"),We=(()=>{let t=class t{historyGo(e){throw new Error("Not implemented")}};t.\u0275fac=function(n){return new(n||t)},t.\u0275prov=c({token:t,factory:()=>l(at),providedIn:"platform"});let i=t;return i})();var at=(()=>{let t=class t extends We{constructor(){super(),this._doc=l(z),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return pe().getBaseHref(this._doc)}onPopState(e){let n=pe().getGlobalEventTarget(this._doc,"window");return n.addEventListener("popstate",e,!1),()=>n.removeEventListener("popstate",e)}onHashChange(e){let n=pe().getGlobalEventTarget(this._doc,"window");return n.addEventListener("hashchange",e,!1),()=>n.removeEventListener("hashchange",e)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(e){this._location.pathname=e}pushState(e,n,s){this._history.pushState(e,n,s)}replaceState(e,n,s){this._history.replaceState(e,n,s)}forward(){this._history.forward()}back(){this._history.back()}historyGo(e=0){this._history.go(e)}getState(){return this._history.state}};t.\u0275fac=function(n){return new(n||t)},t.\u0275prov=c({token:t,factory:()=>new t,providedIn:"platform"});let i=t;return i})();function Ye(i,t){if(i.length==0)return t;if(t.length==0)return i;let o=0;return i.endsWith("/")&&o++,t.startsWith("/")&&o++,o==2?i+t.substring(1):o==1?i+t:i+"/"+t}function $e(i){let t=i.match(/#|\?|$/),o=t&&t.index||i.length,e=o-(i[o-1]==="/"?1:0);return i.slice(0,e)+i.slice(o)}function D(i){return i&&i[0]!=="?"?"?"+i:i}var De=(()=>{let t=class t{historyGo(e){throw new Error("Not implemented")}};t.\u0275fac=function(n){return new(n||t)},t.\u0275prov=c({token:t,factory:()=>l(ct),providedIn:"root"});let i=t;return i})(),lt=new T("appBaseHref"),ct=(()=>{let t=class t extends De{constructor(e,n){super(),this._platformLocation=e,this._removeListenerFns=[],this._baseHref=n??this._platformLocation.getBaseHrefFromDOM()??l(z).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}prepareExternalUrl(e){return Ye(this._baseHref,e)}path(e=!1){let n=this._platformLocation.pathname+D(this._platformLocation.search),s=this._platformLocation.hash;return s&&e?`${n}${s}`:n}pushState(e,n,s,r){let a=this.prepareExternalUrl(s+D(r));this._platformLocation.pushState(e,n,a)}replaceState(e,n,s,r){let a=this.prepareExternalUrl(s+D(r));this._platformLocation.replaceState(e,n,a)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}};t.\u0275fac=function(n){return new(n||t)(b(We),b(lt,8))},t.\u0275prov=c({token:t,factory:t.\u0275fac,providedIn:"root"});let i=t;return i})();var ut=(()=>{let t=class t{constructor(e){this._subject=new h,this._urlChangeListeners=[],this._urlChangeSubscription=null,this._locationStrategy=e;let n=this._locationStrategy.getBaseHref();this._basePath=ft($e(Ve(n))),this._locationStrategy.onPopState(s=>{this._subject.emit({url:this.path(!0),pop:!0,state:s.state,type:s.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(e=!1){return this.normalize(this._locationStrategy.path(e))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(e,n=""){return this.path()==this.normalize(e+D(n))}normalize(e){return t.stripTrailingSlash(ht(this._basePath,Ve(e)))}prepareExternalUrl(e){return e&&e[0]!=="/"&&(e="/"+e),this._locationStrategy.prepareExternalUrl(e)}go(e,n="",s=null){this._locationStrategy.pushState(s,"",e,n),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+D(n)),s)}replaceState(e,n="",s=null){this._locationStrategy.replaceState(s,"",e,n),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+D(n)),s)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(e=0){this._locationStrategy.historyGo?.(e)}onUrlChange(e){return this._urlChangeListeners.push(e),this._urlChangeSubscription||(this._urlChangeSubscription=this.subscribe(n=>{this._notifyUrlChangeListeners(n.url,n.state)})),()=>{let n=this._urlChangeListeners.indexOf(e);this._urlChangeListeners.splice(n,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(e="",n){this._urlChangeListeners.forEach(s=>s(e,n))}subscribe(e,n,s){return this._subject.subscribe({next:e,error:n,complete:s})}};t.normalizeQueryParams=D,t.joinWithSlash=Ye,t.stripTrailingSlash=$e,t.\u0275fac=function(n){return new(n||t)(b(De))},t.\u0275prov=c({token:t,factory:()=>dt(),providedIn:"root"});let i=t;return i})();function dt(){return new ut(b(De))}function ht(i,t){if(!i||!t.startsWith(i))return t;let o=t.substring(i.length);return o===""||["/",";","?","#"].includes(o[0])?o:t}function Ve(i){return i.replace(/\/index.html$/,"")}function ft(i){if(new RegExp("^(https?:)?//").test(i)){let[,o]=i.split(/\/\/[^\/]+/);return o}return i}function Di(i,t){t=encodeURIComponent(t);for(let o of i.split(";")){let e=o.indexOf("="),[n,s]=e==-1?[o,""]:[o.slice(0,e),o.slice(e+1)];if(n.trim()===t)return decodeURIComponent(s)}return null}var Ze=(()=>{let t=class t{constructor(e){this._viewContainerRef=e,this._viewRef=null,this.ngTemplateOutletContext=null,this.ngTemplateOutlet=null,this.ngTemplateOutletInjector=null}ngOnChanges(e){if(this._shouldRecreateView(e)){let n=this._viewContainerRef;if(this._viewRef&&n.remove(n.indexOf(this._viewRef)),!this.ngTemplateOutlet){this._viewRef=null;return}let s=this._createContextForwardProxy();this._viewRef=n.createEmbeddedView(this.ngTemplateOutlet,s,{injector:this.ngTemplateOutletInjector??void 0})}}_shouldRecreateView(e){return!!e.ngTemplateOutlet||!!e.ngTemplateOutletInjector}_createContextForwardProxy(){return new Proxy({},{set:(e,n,s)=>this.ngTemplateOutletContext?Reflect.set(this.ngTemplateOutletContext,n,s):!1,get:(e,n,s)=>{if(this.ngTemplateOutletContext)return Reflect.get(this.ngTemplateOutletContext,n,s)}})}};t.\u0275fac=function(n){return new(n||t)(se(oe))},t.\u0275dir=O({type:t,selectors:[["","ngTemplateOutlet",""]],inputs:{ngTemplateOutletContext:"ngTemplateOutletContext",ngTemplateOutlet:"ngTemplateOutlet",ngTemplateOutletInjector:"ngTemplateOutletInjector"},standalone:!0,features:[ne]});let i=t;return i})();var yi=(()=>{let t=class t{};t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=S({type:t}),t.\u0275inj=C({});let i=t;return i})(),pt="browser",gt="server";function ye(i){return i===pt}function bi(i){return i===gt}var vi=(()=>{let t=class t{};t.\u0275prov=c({token:t,providedIn:"root",factory:()=>ye(l(G))?new _e(l(z),window):new me});let i=t;return i})(),_e=class{constructor(t,o){this.document=t,this.window=o,this.offset=()=>[0,0]}setOffset(t){Array.isArray(t)?this.offset=()=>t:this.offset=t}getScrollPosition(){return[this.window.scrollX,this.window.scrollY]}scrollToPosition(t){this.window.scrollTo(t[0],t[1])}scrollToAnchor(t){let o=_t(this.document,t);o&&(this.scrollToElement(o),o.focus())}setHistoryScrollRestoration(t){this.window.history.scrollRestoration=t}scrollToElement(t){let o=t.getBoundingClientRect(),e=o.left+this.window.pageXOffset,n=o.top+this.window.pageYOffset,s=this.offset();this.window.scrollTo(e-s[0],n-s[1])}};function _t(i,t){let o=i.getElementById(t)||i.getElementsByName(t)[0];if(o)return o;if(typeof i.createTreeWalker=="function"&&i.body&&typeof i.body.attachShadow=="function"){let e=i.createTreeWalker(i.body,NodeFilter.SHOW_ELEMENT),n=e.currentNode;for(;n;){let s=n.shadowRoot;if(s){let r=s.getElementById(t)||s.querySelector(`[name="${t}"]`);if(r)return r}n=e.nextNode()}}return null}var me=class{setOffset(t){}getScrollPosition(){return[0,0]}scrollToPosition(t){}scrollToAnchor(t){}setHistoryScrollRestoration(t){}},je=class{};function W(i){i||(Re(W),i=l(U));let t=new B(o=>i.onDestroy(o.next.bind(o)));return o=>o.pipe(y(t))}function mt(i,t){if(i&1){let o=he();f(0,"button",2),A("click",function(){let s=P(o).$implicit,r=v();return r.focus(),L(r.select(s.id,r.NgbSlideEventSource.INDICATOR))}),_()}if(i&2){let o=t.$implicit,e=v();V("active",o.id===e.activeId),M("aria-labelledby","slide-"+o.id)("aria-controls","slide-"+o.id)("aria-selected",o.id===e.activeId)}}function Dt(i,t){}function yt(i,t){if(i&1&&(f(0,"div",3)(1,"span",4),j(2,5),_(),re(3,Dt,0,0,"ng-template",6),_()),i&2){let o=t.$implicit,e=t.$index,n=t.$count;F("id","slide-"+o.id),d(2),Be(e+1)(n),xe(2),d(),F("ngTemplateOutlet",o.templateRef)}}function bt(i,t){if(i&1){let o=he();f(0,"button",7),A("click",function(){P(o);let n=v();return L(n.arrowLeft())}),de(1,"span",8),f(2,"span",9),j(3,10),_()(),f(4,"button",11),A("click",function(){P(o);let n=v();return L(n.arrowRight())}),de(5,"span",12),f(6,"span",9),j(7,13),_()()}if(i&2){let o=v();M("aria-labelledby",o.id+"-previous"),d(2),F("id",o.id+"-previous"),d(2),M("aria-labelledby",o.id+"-next"),d(2),F("id",o.id+"-next")}}var Qe={animation:!0,transitionTimerDelayMs:5},Je=(()=>{let t=class t{constructor(){this.animation=Qe.animation}};t.\u0275fac=function(n){return new(n||t)},t.\u0275prov=c({token:t,factory:t.\u0275fac,providedIn:"root"});let i=t;return i})();function vt(i){let{transitionDelay:t,transitionDuration:o}=window.getComputedStyle(i),e=parseFloat(t),n=parseFloat(o);return(e+n)*1e3}function Ke(i){return(i||document.body).getBoundingClientRect()}function wt(i){return t=>new B(o=>{let e=r=>i.run(()=>o.next(r)),n=r=>i.run(()=>o.error(r)),s=()=>i.run(()=>o.complete());return t.subscribe({next:e,error:n,complete:s})})}var Ct=()=>{},{transitionTimerDelayMs:Tt}=Qe,I=new Map,be=(i,t,o,e)=>{let n=e.context||{},s=I.get(t);if(s)switch(e.runningTransition){case"continue":return Ce;case"stop":i.run(()=>s.transition$.complete()),n=Object.assign(s.context,n),I.delete(t)}let r=o(t,e.animation,n)||Ct;if(!e.animation||window.getComputedStyle(t).transitionProperty==="none")return i.run(()=>r()),Te(void 0).pipe(wt(i));let a=new J,p=new J,u=a.pipe(Ae(!0));I.set(t,{transition$:a,complete:()=>{p.next(),p.complete()},context:n});let m=vt(t);return i.runOutsideAngular(()=>{let Z=Se(t,"transitionend").pipe(y(u),Ee(({target:k})=>k===t)),Q=q(m+Tt).pipe(y(u));Me(Q,Z,p).pipe(y(u)).subscribe(()=>{I.delete(t),i.run(()=>{r(),a.next(),a.complete()})})}),a.asObservable()},St=i=>{I.get(i)?.complete()};function Ot(i,t){if(typeof navigator>"u")return"0px";let{classList:o}=i,e=o.contains("show");e||o.add("show"),i.style[t]="";let n=i.getBoundingClientRect()[t]+"px";return e||o.remove("show"),n}var Et=(i,t,o)=>{let{direction:e,maxSize:n,dimension:s}=o,{classList:r}=i;function a(){r.add("collapse"),e==="show"?r.add("show"):r.remove("show")}if(!t){a();return}return n||(n=Ot(i,s),o.maxSize=n,i.style[s]=e!=="show"?n:"0px",r.remove("collapse"),r.remove("collapsing"),r.remove("show"),Ke(i),r.add("collapsing")),i.style[s]=e==="show"?n:"0px",()=>{a(),r.remove("collapsing"),i.style[s]=""}},Mt=(()=>{let t=class t{constructor(){this._ngbConfig=l(Je),this.horizontal=!1}get animation(){return this._animation??this._ngbConfig.animation}set animation(e){this._animation=e}};t.\u0275fac=function(n){return new(n||t)},t.\u0275prov=c({token:t,factory:t.\u0275fac,providedIn:"root"});let i=t;return i})(),Gn=(()=>{let t=class t{constructor(){this._config=l(Mt),this._element=l(E),this._zone=l($),this.animation=this._config.animation,this._afterInit=!1,this._isCollapsed=!1,this.ngbCollapseChange=new h,this.horizontal=this._config.horizontal,this.shown=new h,this.hidden=new h}set collapsed(e){this._isCollapsed!==e&&(this._isCollapsed=e,this._afterInit&&this._runTransitionWithEvents(e,this.animation))}ngOnInit(){this._runTransition(this._isCollapsed,!1),this._afterInit=!0}toggle(e=this._isCollapsed){this.collapsed=!e,this.ngbCollapseChange.next(this._isCollapsed)}_runTransition(e,n){return be(this._zone,this._element.nativeElement,Et,{animation:n,runningTransition:"stop",context:{direction:e?"hide":"show",dimension:this.horizontal?"width":"height"}})}_runTransitionWithEvents(e,n){this._runTransition(e,n).subscribe(()=>{e?this.hidden.emit():this.shown.emit()})}};t.\u0275fac=function(n){return new(n||t)},t.\u0275dir=O({type:t,selectors:[["","ngbCollapse",""]],hostVars:2,hostBindings:function(n,s){n&2&&V("collapse-horizontal",s.horizontal)},inputs:{animation:"animation",collapsed:[ie.None,"ngbCollapse","collapsed"],horizontal:"horizontal"},outputs:{ngbCollapseChange:"ngbCollapseChange",shown:"shown",hidden:"hidden"},exportAs:["ngbCollapse"],standalone:!0});let i=t;return i})();var Ft=(()=>{let t=class t{constructor(){this._ngbConfig=l(Je),this.interval=5e3,this.wrap=!0,this.keyboard=!0,this.pauseOnHover=!0,this.pauseOnFocus=!0,this.showNavigationArrows=!0,this.showNavigationIndicators=!0}get animation(){return this._animation??this._ngbConfig.animation}set animation(e){this._animation=e}};t.\u0275fac=function(n){return new(n||t)},t.\u0275prov=c({token:t,factory:t.\u0275fac,providedIn:"root"});let i=t;return i})(),w=function(i){return i.START="start",i.END="end",i}(w||{}),qe=({classList:i})=>i.contains("carousel-item-start")||i.contains("carousel-item-end"),R=i=>{i.remove("carousel-item-start"),i.remove("carousel-item-end")},Y=i=>{R(i),i.remove("carousel-item-prev"),i.remove("carousel-item-next")},At=(i,t,{direction:o})=>{let{classList:e}=i;if(!t){R(e),Y(e),e.add("active");return}return qe(i)?R(e):(e.add("carousel-item-"+(o===w.START?"next":"prev")),Ke(i),e.add("carousel-item-"+o)),()=>{Y(e),e.add("active")}},It=(i,t,{direction:o})=>{let{classList:e}=i;if(!t){R(e),Y(e),e.remove("active");return}return qe(i)?R(e):e.add("carousel-item-"+o),()=>{Y(e),e.remove("active")}},Nt=0,Rt=0,kt=(()=>{let t=class t{constructor(){this.templateRef=l(fe),this.id=`ngb-slide-${Nt++}`,this.slid=new h}};t.\u0275fac=function(n){return new(n||t)},t.\u0275dir=O({type:t,selectors:[["ng-template","ngbSlide",""]],inputs:{id:"id"},outputs:{slid:"slid"},standalone:!0});let i=t;return i})(),Hn=(()=>{let t=class t{constructor(){this.NgbSlideEventSource=N,this._config=l(Ft),this._platformId=l(G),this._ngZone=l($),this._cd=l(H),this._container=l(E),this._destroyRef=l(U),this._interval$=new g(this._config.interval),this._mouseHover$=new g(!1),this._focused$=new g(!1),this._pauseOnHover$=new g(this._config.pauseOnHover),this._pauseOnFocus$=new g(this._config.pauseOnFocus),this._pause$=new g(!1),this._wrap$=new g(this._config.wrap),this.id=`ngb-carousel-${Rt++}`,this.animation=this._config.animation,this.keyboard=this._config.keyboard,this.showNavigationArrows=this._config.showNavigationArrows,this.showNavigationIndicators=this._config.showNavigationIndicators,this.slide=new h,this.slid=new h,this._transitionIds=null}set interval(e){this._interval$.next(e)}get interval(){return this._interval$.value}set wrap(e){this._wrap$.next(e)}get wrap(){return this._wrap$.value}set pauseOnHover(e){this._pauseOnHover$.next(e)}get pauseOnHover(){return this._pauseOnHover$.value}set pauseOnFocus(e){this._pauseOnFocus$.next(e)}get pauseOnFocus(){return this._pauseOnFocus$.value}set mouseHover(e){this._mouseHover$.next(e)}get mouseHover(){return this._mouseHover$.value}set focused(e){this._focused$.next(e)}get focused(){return this._focused$.value}arrowLeft(){this.focus(),this.prev(N.ARROW_LEFT)}arrowRight(){this.focus(),this.next(N.ARROW_RIGHT)}ngAfterContentInit(){ye(this._platformId)&&this._ngZone.runOutsideAngular(()=>{let e=K([this.slide.pipe(x(n=>n.current),te(this.activeId)),this._wrap$,this.slides.changes.pipe(te(null))]).pipe(x(([n,s])=>{let r=this.slides.toArray(),a=this._getSlideIdxById(n);return s?r.length>1:a<r.length-1}),ee());K([this._pause$,this._pauseOnHover$,this._mouseHover$,this._pauseOnFocus$,this._focused$,this._interval$,e]).pipe(x(([n,s,r,a,p,u,m])=>n||s&&r||a&&p||!m?0:u),ee(),Ie(n=>n>0?q(n,n):Oe),W(this._destroyRef)).subscribe(()=>this._ngZone.run(()=>this.next(N.TIMER)))}),this.slides.changes.pipe(W(this._destroyRef)).subscribe(()=>{this._transitionIds?.forEach(e=>St(this._getSlideElement(e))),this._transitionIds=null,this._cd.markForCheck(),this._ngZone.onStable.pipe(X(1)).subscribe(()=>{for(let{id:e}of this.slides){let n=this._getSlideElement(e);e===this.activeId?n.classList.add("active"):n.classList.remove("active")}})})}ngAfterContentChecked(){let e=this._getSlideById(this.activeId);this.activeId=e?e.id:this.slides.length?this.slides.first.id:""}ngAfterViewInit(){if(this.activeId){let e=this._getSlideElement(this.activeId);e&&e.classList.add("active")}}select(e,n){this._cycleToSelected(e,this._getSlideEventDirection(this.activeId,e),n)}prev(e){this._cycleToSelected(this._getPrevSlide(this.activeId),w.END,e)}next(e){this._cycleToSelected(this._getNextSlide(this.activeId),w.START,e)}pause(){this._pause$.next(!0)}cycle(){this._pause$.next(!1)}focus(){this._container.nativeElement.focus()}_cycleToSelected(e,n,s){let r=this._transitionIds;if(r&&(r[0]!==e||r[1]!==this.activeId))return;let a=this._getSlideById(e);if(a&&a.id!==this.activeId){this._transitionIds=[this.activeId,e],this.slide.emit({prev:this.activeId,current:a.id,direction:n,paused:this._pause$.value,source:s});let p={animation:this.animation,runningTransition:"stop",context:{direction:n}},u=[],m=this._getSlideById(this.activeId);if(m){let we=be(this._ngZone,this._getSlideElement(m.id),It,p);we.subscribe(()=>{m.slid.emit({isShown:!1,direction:n,source:s})}),u.push(we)}let Z=this.activeId;this.activeId=a.id;let Q=this._getSlideById(this.activeId),k=be(this._ngZone,this._getSlideElement(a.id),At,p);k.subscribe(()=>{Q?.slid.emit({isShown:!0,direction:n,source:s})}),u.push(k),Fe(...u).pipe(X(1)).subscribe(()=>{this._transitionIds=null,this.slid.emit({prev:Z,current:a.id,direction:n,paused:this._pause$.value,source:s})})}this._cd.markForCheck()}_getSlideEventDirection(e,n){let s=this._getSlideIdxById(e),r=this._getSlideIdxById(n);return s>r?w.END:w.START}_getSlideById(e){return this.slides.find(n=>n.id===e)||null}_getSlideIdxById(e){let n=this._getSlideById(e);return n!=null?this.slides.toArray().indexOf(n):-1}_getNextSlide(e){let n=this.slides.toArray(),s=this._getSlideIdxById(e);return s===n.length-1?this.wrap?n[0].id:n[n.length-1].id:n[s+1].id}_getPrevSlide(e){let n=this.slides.toArray(),s=this._getSlideIdxById(e);return s===0?this.wrap?n[n.length-1].id:n[0].id:n[s-1].id}_getSlideElement(e){return this._container.nativeElement.querySelector(`#slide-${e}`)}};t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=Ne({type:t,selectors:[["ngb-carousel"]],contentQueries:function(n,s,r){if(n&1&&Pe(r,kt,4),n&2){let a;Le(a=Ge())&&(s.slides=a)}},hostAttrs:["tabIndex","0",1,"carousel","slide"],hostVars:3,hostBindings:function(n,s){n&1&&A("keydown.arrowLeft",function(){return s.keyboard&&s.arrowLeft()})("keydown.arrowRight",function(){return s.keyboard&&s.arrowRight()})("mouseenter",function(){return s.mouseHover=!0})("mouseleave",function(){return s.mouseHover=!1})("focusin",function(){return s.focused=!0})("focusout",function(){return s.focused=!1}),n&2&&(M("aria-activedescendant","slide-"+s.activeId),ae("display","block"))},inputs:{animation:"animation",activeId:"activeId",interval:"interval",wrap:"wrap",keyboard:"keyboard",pauseOnHover:"pauseOnHover",pauseOnFocus:"pauseOnFocus",showNavigationArrows:"showNavigationArrows",showNavigationIndicators:"showNavigationIndicators"},outputs:{slide:"slide",slid:"slid"},exportAs:["ngbCarousel"],standalone:!0,features:[He],decls:7,vars:3,consts:()=>{let e;e=$localize`:Currently selected slide number read by screen reader@@ngb.carousel.slide-number: Slide ${"\uFFFD0\uFFFD"}:INTERPOLATION: of ${"\uFFFD1\uFFFD"}:INTERPOLATION_1: `;let n;n=$localize`:@@ngb.carousel.previous:Previous`;let s;return s=$localize`:@@ngb.carousel.next:Next`,[["role","tablist",1,"carousel-indicators"],[1,"carousel-inner"],["type","button","data-bs-target","","role","tab",3,"click"],["role","tabpanel",1,"carousel-item",3,"id"],[1,"visually-hidden"],e,[3,"ngTemplateOutlet"],["type","button",1,"carousel-control-prev",3,"click"],["aria-hidden","true",1,"carousel-control-prev-icon"],[1,"visually-hidden",3,"id"],n,["type","button",1,"carousel-control-next",3,"click"],["aria-hidden","true",1,"carousel-control-next-icon"],s,["type","button","data-bs-target","","role","tab",3,"active"],["class","carousel-item","role","tabpanel",3,"id"]]},template:function(n,s){n&1&&(f(0,"div",0),ce(1,mt,1,5,"button",14,le),_(),f(3,"div",1),ce(4,yt,4,4,"div",15,le),_(),re(6,bt,8,4)),n&2&&(V("visually-hidden",!s.showNavigationIndicators),d(),ue(s.slides),d(3),ue(s.slides),d(2),ke(6,s.showNavigationArrows?6:-1))},dependencies:[Ze],encapsulation:2,changeDetection:0});let i=t;return i})(),N=function(i){return i.TIMER="timer",i.ARROW_LEFT="arrowLeft",i.ARROW_RIGHT="arrowRight",i.INDICATOR="indicator",i}(N||{}),Un=(()=>{let t=class t{};t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=S({type:t}),t.\u0275inj=C({});let i=t;return i})();var $n=(()=>{let i=()=>/iPad|iPhone|iPod/.test(navigator.userAgent)||/Macintosh/.test(navigator.userAgent)&&navigator.maxTouchPoints&&navigator.maxTouchPoints>2,t=()=>/Android/.test(navigator.userAgent);return typeof navigator<"u"?!!navigator.userAgent&&(i()||t()):!1})();var Vn=["a[href]","button:not([disabled])",'input:not([disabled]):not([type="hidden"])',"select:not([disabled])","textarea:not([disabled])","[contenteditable]",'[tabindex]:not([tabindex="-1"])'].join(", ");var jn=new Date(1882,10,12),zn=new Date(2174,10,25);var Wn=1e3*60*60*24;var ve=1080,Bt=24*ve,xt=12*ve+793,Yn=29*Bt+xt,Zn=11*ve+204;var Qn=(()=>{let t=class t{};t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=S({type:t}),t.\u0275inj=C({});let i=t;return i})();var Jn=new T("live announcer delay",{providedIn:"root",factory:()=>100});export{pe as a,mi as b,Ue as c,z as d,De as e,ut as f,Di as g,yi as h,pt as i,bi as j,vi as k,je as l,Gn as m,kt as n,Hn as o,Un as p,Qn as q};
