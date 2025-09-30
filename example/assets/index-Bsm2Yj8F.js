(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function e(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(s){if(s.ep)return;s.ep=!0;const o=e(s);fetch(s.href,o)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const th="180",Ts={ROTATE:0,DOLLY:1,PAN:2},Es={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},aS=0,Gd=1,oS=2,rm=1,lS=2,Vi=3,mr=0,In=1,Gi=2,fr=0,As=1,Wd=2,Xd=3,qd=4,cS=5,Nr=100,uS=101,hS=102,fS=103,dS=104,pS=200,mS=201,_S=202,gS=203,ou=204,lu=205,vS=206,xS=207,MS=208,yS=209,SS=210,ES=211,bS=212,TS=213,AS=214,cu=0,uu=1,hu=2,Cs=3,fu=4,du=5,pu=6,mu=7,tl=0,wS=1,RS=2,dr=0,CS=1,PS=2,DS=3,LS=4,IS=5,US=6,NS=7,sm=300,Ps=301,Ds=302,_u=303,gu=304,el=306,vu=1e3,Or=1001,xu=1002,pi=1003,FS=1004,go=1005,xi=1006,Tc=1007,Br=1008,qi=1009,am=1010,om=1011,fa=1012,eh=1013,kr=1014,Mi=1015,va=1016,nh=1017,ih=1018,da=1020,lm=35902,cm=35899,um=1021,hm=1022,di=1023,pa=1026,ma=1027,fm=1028,rh=1029,dm=1030,sh=1031,ah=1033,Go=33776,Wo=33777,Xo=33778,qo=33779,Mu=35840,yu=35841,Su=35842,Eu=35843,bu=36196,Tu=37492,Au=37496,wu=37808,Ru=37809,Cu=37810,Pu=37811,Du=37812,Lu=37813,Iu=37814,Uu=37815,Nu=37816,Fu=37817,Ou=37818,Bu=37819,zu=37820,ku=37821,Hu=36492,Vu=36494,Gu=36495,Wu=36283,Xu=36284,qu=36285,Yu=36286,OS=3200,BS=3201,Gr=0,zS=1,ur="",Qn="srgb",Ls="srgb-linear",Zo="linear",Fe="srgb",ls=7680,Yd=519,kS=512,HS=513,VS=514,pm=515,GS=516,WS=517,XS=518,qS=519,Zd=35044,Kd="300 es",yi=2e3,Ko=2001;class Wr{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[t]===void 0&&(r[t]=[]),r[t].indexOf(e)===-1&&r[t].push(e)}hasEventListener(t,e){const r=this._listeners;return r===void 0?!1:r[t]!==void 0&&r[t].indexOf(e)!==-1}removeEventListener(t,e){const r=this._listeners;if(r===void 0)return;const s=r[t];if(s!==void 0){const o=s.indexOf(e);o!==-1&&s.splice(o,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const r=e[t.type];if(r!==void 0){t.target=this;const s=r.slice(0);for(let o=0,l=s.length;o<l;o++)s[o].call(this,t);t.target=null}}}const gn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let $d=1234567;const oa=Math.PI/180,_a=180/Math.PI;function Fs(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(gn[n&255]+gn[n>>8&255]+gn[n>>16&255]+gn[n>>24&255]+"-"+gn[t&255]+gn[t>>8&255]+"-"+gn[t>>16&15|64]+gn[t>>24&255]+"-"+gn[e&63|128]+gn[e>>8&255]+"-"+gn[e>>16&255]+gn[e>>24&255]+gn[r&255]+gn[r>>8&255]+gn[r>>16&255]+gn[r>>24&255]).toLowerCase()}function me(n,t,e){return Math.max(t,Math.min(e,n))}function oh(n,t){return(n%t+t)%t}function YS(n,t,e,r,s){return r+(n-t)*(s-r)/(e-t)}function ZS(n,t,e){return n!==t?(e-n)/(t-n):0}function la(n,t,e){return(1-e)*n+e*t}function KS(n,t,e,r){return la(n,t,1-Math.exp(-e*r))}function $S(n,t=1){return t-Math.abs(oh(n,t*2)-t)}function jS(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function JS(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function QS(n,t){return n+Math.floor(Math.random()*(t-n+1))}function tE(n,t){return n+Math.random()*(t-n)}function eE(n){return n*(.5-Math.random())}function nE(n){n!==void 0&&($d=n);let t=$d+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function iE(n){return n*oa}function rE(n){return n*_a}function sE(n){return(n&n-1)===0&&n!==0}function aE(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function oE(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function lE(n,t,e,r,s){const o=Math.cos,l=Math.sin,u=o(e/2),f=l(e/2),h=o((t+r)/2),p=l((t+r)/2),m=o((t-r)/2),g=l((t-r)/2),v=o((r-t)/2),S=l((r-t)/2);switch(s){case"XYX":n.set(u*p,f*m,f*g,u*h);break;case"YZY":n.set(f*g,u*p,f*m,u*h);break;case"ZXZ":n.set(f*m,f*g,u*p,u*h);break;case"XZX":n.set(u*p,f*S,f*v,u*h);break;case"YXY":n.set(f*v,u*p,f*S,u*h);break;case"ZYZ":n.set(f*S,f*v,u*p,u*h);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ss(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function bn(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const mm={DEG2RAD:oa,RAD2DEG:_a,generateUUID:Fs,clamp:me,euclideanModulo:oh,mapLinear:YS,inverseLerp:ZS,lerp:la,damp:KS,pingpong:$S,smoothstep:jS,smootherstep:JS,randInt:QS,randFloat:tE,randFloatSpread:eE,seededRandom:nE,degToRad:iE,radToDeg:rE,isPowerOfTwo:sE,ceilPowerOfTwo:aE,floorPowerOfTwo:oE,setQuaternionFromProperEuler:lE,normalize:bn,denormalize:Ss};class ne{constructor(t=0,e=0){ne.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,r=this.y,s=t.elements;return this.x=s[0]*e+s[3]*r+s[6],this.y=s[1]*e+s[4]*r+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=me(this.x,t.x,e.x),this.y=me(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=me(this.x,t,e),this.y=me(this.y,t,e),this}clampLength(t,e){const r=this.length();return this.divideScalar(r||1).multiplyScalar(me(r,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const r=this.dot(t)/e;return Math.acos(me(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,r=this.y-t.y;return e*e+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,r){return this.x=t.x+(e.x-t.x)*r,this.y=t.y+(e.y-t.y)*r,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const r=Math.cos(e),s=Math.sin(e),o=this.x-t.x,l=this.y-t.y;return this.x=o*r-l*s+t.x,this.y=o*s+l*r+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Hr{constructor(t=0,e=0,r=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=r,this._w=s}static slerpFlat(t,e,r,s,o,l,u){let f=r[s+0],h=r[s+1],p=r[s+2],m=r[s+3];const g=o[l+0],v=o[l+1],S=o[l+2],T=o[l+3];if(u===0){t[e+0]=f,t[e+1]=h,t[e+2]=p,t[e+3]=m;return}if(u===1){t[e+0]=g,t[e+1]=v,t[e+2]=S,t[e+3]=T;return}if(m!==T||f!==g||h!==v||p!==S){let x=1-u;const _=f*g+h*v+p*S+m*T,U=_>=0?1:-1,L=1-_*_;if(L>Number.EPSILON){const B=Math.sqrt(L),O=Math.atan2(B,_*U);x=Math.sin(x*O)/B,u=Math.sin(u*O)/B}const R=u*U;if(f=f*x+g*R,h=h*x+v*R,p=p*x+S*R,m=m*x+T*R,x===1-u){const B=1/Math.sqrt(f*f+h*h+p*p+m*m);f*=B,h*=B,p*=B,m*=B}}t[e]=f,t[e+1]=h,t[e+2]=p,t[e+3]=m}static multiplyQuaternionsFlat(t,e,r,s,o,l){const u=r[s],f=r[s+1],h=r[s+2],p=r[s+3],m=o[l],g=o[l+1],v=o[l+2],S=o[l+3];return t[e]=u*S+p*m+f*v-h*g,t[e+1]=f*S+p*g+h*m-u*v,t[e+2]=h*S+p*v+u*g-f*m,t[e+3]=p*S-u*m-f*g-h*v,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,r,s){return this._x=t,this._y=e,this._z=r,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const r=t._x,s=t._y,o=t._z,l=t._order,u=Math.cos,f=Math.sin,h=u(r/2),p=u(s/2),m=u(o/2),g=f(r/2),v=f(s/2),S=f(o/2);switch(l){case"XYZ":this._x=g*p*m+h*v*S,this._y=h*v*m-g*p*S,this._z=h*p*S+g*v*m,this._w=h*p*m-g*v*S;break;case"YXZ":this._x=g*p*m+h*v*S,this._y=h*v*m-g*p*S,this._z=h*p*S-g*v*m,this._w=h*p*m+g*v*S;break;case"ZXY":this._x=g*p*m-h*v*S,this._y=h*v*m+g*p*S,this._z=h*p*S+g*v*m,this._w=h*p*m-g*v*S;break;case"ZYX":this._x=g*p*m-h*v*S,this._y=h*v*m+g*p*S,this._z=h*p*S-g*v*m,this._w=h*p*m+g*v*S;break;case"YZX":this._x=g*p*m+h*v*S,this._y=h*v*m+g*p*S,this._z=h*p*S-g*v*m,this._w=h*p*m-g*v*S;break;case"XZY":this._x=g*p*m-h*v*S,this._y=h*v*m-g*p*S,this._z=h*p*S+g*v*m,this._w=h*p*m+g*v*S;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+l)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const r=e/2,s=Math.sin(r);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,r=e[0],s=e[4],o=e[8],l=e[1],u=e[5],f=e[9],h=e[2],p=e[6],m=e[10],g=r+u+m;if(g>0){const v=.5/Math.sqrt(g+1);this._w=.25/v,this._x=(p-f)*v,this._y=(o-h)*v,this._z=(l-s)*v}else if(r>u&&r>m){const v=2*Math.sqrt(1+r-u-m);this._w=(p-f)/v,this._x=.25*v,this._y=(s+l)/v,this._z=(o+h)/v}else if(u>m){const v=2*Math.sqrt(1+u-r-m);this._w=(o-h)/v,this._x=(s+l)/v,this._y=.25*v,this._z=(f+p)/v}else{const v=2*Math.sqrt(1+m-r-u);this._w=(l-s)/v,this._x=(o+h)/v,this._y=(f+p)/v,this._z=.25*v}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let r=t.dot(e)+1;return r<1e-8?(r=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=r):(this._x=0,this._y=-t.z,this._z=t.y,this._w=r)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=r),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(me(this.dot(t),-1,1)))}rotateTowards(t,e){const r=this.angleTo(t);if(r===0)return this;const s=Math.min(1,e/r);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const r=t._x,s=t._y,o=t._z,l=t._w,u=e._x,f=e._y,h=e._z,p=e._w;return this._x=r*p+l*u+s*h-o*f,this._y=s*p+l*f+o*u-r*h,this._z=o*p+l*h+r*f-s*u,this._w=l*p-r*u-s*f-o*h,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const r=this._x,s=this._y,o=this._z,l=this._w;let u=l*t._w+r*t._x+s*t._y+o*t._z;if(u<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,u=-u):this.copy(t),u>=1)return this._w=l,this._x=r,this._y=s,this._z=o,this;const f=1-u*u;if(f<=Number.EPSILON){const v=1-e;return this._w=v*l+e*this._w,this._x=v*r+e*this._x,this._y=v*s+e*this._y,this._z=v*o+e*this._z,this.normalize(),this}const h=Math.sqrt(f),p=Math.atan2(h,u),m=Math.sin((1-e)*p)/h,g=Math.sin(e*p)/h;return this._w=l*m+this._w*g,this._x=r*m+this._x*g,this._y=s*m+this._y*g,this._z=o*m+this._z*g,this._onChangeCallback(),this}slerpQuaternions(t,e,r){return this.copy(t).slerp(e,r)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),r=Math.random(),s=Math.sqrt(1-r),o=Math.sqrt(r);return this.set(s*Math.sin(t),s*Math.cos(t),o*Math.sin(e),o*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class q{constructor(t=0,e=0,r=0){q.prototype.isVector3=!0,this.x=t,this.y=e,this.z=r}set(t,e,r){return r===void 0&&(r=this.z),this.x=t,this.y=e,this.z=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(jd.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(jd.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,r=this.y,s=this.z,o=t.elements;return this.x=o[0]*e+o[3]*r+o[6]*s,this.y=o[1]*e+o[4]*r+o[7]*s,this.z=o[2]*e+o[5]*r+o[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,r=this.y,s=this.z,o=t.elements,l=1/(o[3]*e+o[7]*r+o[11]*s+o[15]);return this.x=(o[0]*e+o[4]*r+o[8]*s+o[12])*l,this.y=(o[1]*e+o[5]*r+o[9]*s+o[13])*l,this.z=(o[2]*e+o[6]*r+o[10]*s+o[14])*l,this}applyQuaternion(t){const e=this.x,r=this.y,s=this.z,o=t.x,l=t.y,u=t.z,f=t.w,h=2*(l*s-u*r),p=2*(u*e-o*s),m=2*(o*r-l*e);return this.x=e+f*h+l*m-u*p,this.y=r+f*p+u*h-o*m,this.z=s+f*m+o*p-l*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,r=this.y,s=this.z,o=t.elements;return this.x=o[0]*e+o[4]*r+o[8]*s,this.y=o[1]*e+o[5]*r+o[9]*s,this.z=o[2]*e+o[6]*r+o[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=me(this.x,t.x,e.x),this.y=me(this.y,t.y,e.y),this.z=me(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=me(this.x,t,e),this.y=me(this.y,t,e),this.z=me(this.z,t,e),this}clampLength(t,e){const r=this.length();return this.divideScalar(r||1).multiplyScalar(me(r,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,r){return this.x=t.x+(e.x-t.x)*r,this.y=t.y+(e.y-t.y)*r,this.z=t.z+(e.z-t.z)*r,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const r=t.x,s=t.y,o=t.z,l=e.x,u=e.y,f=e.z;return this.x=s*f-o*u,this.y=o*l-r*f,this.z=r*u-s*l,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const r=t.dot(this)/e;return this.copy(t).multiplyScalar(r)}projectOnPlane(t){return Ac.copy(this).projectOnVector(t),this.sub(Ac)}reflect(t){return this.sub(Ac.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const r=this.dot(t)/e;return Math.acos(me(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,r=this.y-t.y,s=this.z-t.z;return e*e+r*r+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,r){const s=Math.sin(e)*t;return this.x=s*Math.sin(r),this.y=Math.cos(e)*t,this.z=s*Math.cos(r),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,r){return this.x=t*Math.sin(e),this.y=r,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),r=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=r,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,r=Math.sqrt(1-e*e);return this.x=r*Math.cos(t),this.y=e,this.z=r*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ac=new q,jd=new Hr;class oe{constructor(t,e,r,s,o,l,u,f,h){oe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,r,s,o,l,u,f,h)}set(t,e,r,s,o,l,u,f,h){const p=this.elements;return p[0]=t,p[1]=s,p[2]=u,p[3]=e,p[4]=o,p[5]=f,p[6]=r,p[7]=l,p[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,r=t.elements;return e[0]=r[0],e[1]=r[1],e[2]=r[2],e[3]=r[3],e[4]=r[4],e[5]=r[5],e[6]=r[6],e[7]=r[7],e[8]=r[8],this}extractBasis(t,e,r){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const r=t.elements,s=e.elements,o=this.elements,l=r[0],u=r[3],f=r[6],h=r[1],p=r[4],m=r[7],g=r[2],v=r[5],S=r[8],T=s[0],x=s[3],_=s[6],U=s[1],L=s[4],R=s[7],B=s[2],O=s[5],N=s[8];return o[0]=l*T+u*U+f*B,o[3]=l*x+u*L+f*O,o[6]=l*_+u*R+f*N,o[1]=h*T+p*U+m*B,o[4]=h*x+p*L+m*O,o[7]=h*_+p*R+m*N,o[2]=g*T+v*U+S*B,o[5]=g*x+v*L+S*O,o[8]=g*_+v*R+S*N,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],r=t[1],s=t[2],o=t[3],l=t[4],u=t[5],f=t[6],h=t[7],p=t[8];return e*l*p-e*u*h-r*o*p+r*u*f+s*o*h-s*l*f}invert(){const t=this.elements,e=t[0],r=t[1],s=t[2],o=t[3],l=t[4],u=t[5],f=t[6],h=t[7],p=t[8],m=p*l-u*h,g=u*f-p*o,v=h*o-l*f,S=e*m+r*g+s*v;if(S===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/S;return t[0]=m*T,t[1]=(s*h-p*r)*T,t[2]=(u*r-s*l)*T,t[3]=g*T,t[4]=(p*e-s*f)*T,t[5]=(s*o-u*e)*T,t[6]=v*T,t[7]=(r*f-h*e)*T,t[8]=(l*e-r*o)*T,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,r,s,o,l,u){const f=Math.cos(o),h=Math.sin(o);return this.set(r*f,r*h,-r*(f*l+h*u)+l+t,-s*h,s*f,-s*(-h*l+f*u)+u+e,0,0,1),this}scale(t,e){return this.premultiply(wc.makeScale(t,e)),this}rotate(t){return this.premultiply(wc.makeRotation(-t)),this}translate(t,e){return this.premultiply(wc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),r=Math.sin(t);return this.set(e,-r,0,r,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,r=t.elements;for(let s=0;s<9;s++)if(e[s]!==r[s])return!1;return!0}fromArray(t,e=0){for(let r=0;r<9;r++)this.elements[r]=t[r+e];return this}toArray(t=[],e=0){const r=this.elements;return t[e]=r[0],t[e+1]=r[1],t[e+2]=r[2],t[e+3]=r[3],t[e+4]=r[4],t[e+5]=r[5],t[e+6]=r[6],t[e+7]=r[7],t[e+8]=r[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const wc=new oe;function _m(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function $o(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function cE(){const n=$o("canvas");return n.style.display="block",n}const Jd={};function ga(n){n in Jd||(Jd[n]=!0,console.warn(n))}function uE(n,t,e){return new Promise(function(r,s){function o(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(o,e);break;default:r()}}setTimeout(o,e)})}const Qd=new oe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),tp=new oe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function hE(){const n={enabled:!0,workingColorSpace:Ls,spaces:{},convert:function(s,o,l){return this.enabled===!1||o===l||!o||!l||(this.spaces[o].transfer===Fe&&(s.r=Xi(s.r),s.g=Xi(s.g),s.b=Xi(s.b)),this.spaces[o].primaries!==this.spaces[l].primaries&&(s.applyMatrix3(this.spaces[o].toXYZ),s.applyMatrix3(this.spaces[l].fromXYZ)),this.spaces[l].transfer===Fe&&(s.r=ws(s.r),s.g=ws(s.g),s.b=ws(s.b))),s},workingToColorSpace:function(s,o){return this.convert(s,this.workingColorSpace,o)},colorSpaceToWorking:function(s,o){return this.convert(s,o,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ur?Zo:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,o=this.workingColorSpace){return s.fromArray(this.spaces[o].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,o,l){return s.copy(this.spaces[o].toXYZ).multiply(this.spaces[l].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,o){return ga("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,o)},toWorkingColorSpace:function(s,o){return ga("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,o)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],r=[.3127,.329];return n.define({[Ls]:{primaries:t,whitePoint:r,transfer:Zo,toXYZ:Qd,fromXYZ:tp,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Qn},outputColorSpaceConfig:{drawingBufferColorSpace:Qn}},[Qn]:{primaries:t,whitePoint:r,transfer:Fe,toXYZ:Qd,fromXYZ:tp,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Qn}}}),n}const Te=hE();function Xi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ws(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let cs;class fE{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let r;if(t instanceof HTMLCanvasElement)r=t;else{cs===void 0&&(cs=$o("canvas")),cs.width=t.width,cs.height=t.height;const s=cs.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),r=cs}return r.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=$o("canvas");e.width=t.width,e.height=t.height;const r=e.getContext("2d");r.drawImage(t,0,0,t.width,t.height);const s=r.getImageData(0,0,t.width,t.height),o=s.data;for(let l=0;l<o.length;l++)o[l]=Xi(o[l]/255)*255;return r.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let r=0;r<e.length;r++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[r]=Math.floor(Xi(e[r]/255)*255):e[r]=Xi(e[r]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let dE=0;class lh{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:dE++}),this.uuid=Fs(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const r={uuid:this.uuid,url:""},s=this.data;if(s!==null){let o;if(Array.isArray(s)){o=[];for(let l=0,u=s.length;l<u;l++)s[l].isDataTexture?o.push(Rc(s[l].image)):o.push(Rc(s[l]))}else o=Rc(s);r.url=o}return e||(t.images[this.uuid]=r),r}}function Rc(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?fE.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let pE=0;const Cc=new q;class hn extends Wr{constructor(t=hn.DEFAULT_IMAGE,e=hn.DEFAULT_MAPPING,r=Or,s=Or,o=xi,l=Br,u=di,f=qi,h=hn.DEFAULT_ANISOTROPY,p=ur){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:pE++}),this.uuid=Fs(),this.name="",this.source=new lh(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=r,this.wrapT=s,this.magFilter=o,this.minFilter=l,this.anisotropy=h,this.format=u,this.internalFormat=null,this.type=f,this.offset=new ne(0,0),this.repeat=new ne(1,1),this.center=new ne(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new oe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=p,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Cc).x}get height(){return this.source.getSize(Cc).y}get depth(){return this.source.getSize(Cc).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const r=t[e];if(r===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}s&&r&&s.isVector2&&r.isVector2||s&&r&&s.isVector3&&r.isVector3||s&&r&&s.isMatrix3&&r.isMatrix3?s.copy(r):this[e]=r}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),e||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==sm)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case vu:t.x=t.x-Math.floor(t.x);break;case Or:t.x=t.x<0?0:1;break;case xu:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case vu:t.y=t.y-Math.floor(t.y);break;case Or:t.y=t.y<0?0:1;break;case xu:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}hn.DEFAULT_IMAGE=null;hn.DEFAULT_MAPPING=sm;hn.DEFAULT_ANISOTROPY=1;class Ze{constructor(t=0,e=0,r=0,s=1){Ze.prototype.isVector4=!0,this.x=t,this.y=e,this.z=r,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,r,s){return this.x=t,this.y=e,this.z=r,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,r=this.y,s=this.z,o=this.w,l=t.elements;return this.x=l[0]*e+l[4]*r+l[8]*s+l[12]*o,this.y=l[1]*e+l[5]*r+l[9]*s+l[13]*o,this.z=l[2]*e+l[6]*r+l[10]*s+l[14]*o,this.w=l[3]*e+l[7]*r+l[11]*s+l[15]*o,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,r,s,o;const f=t.elements,h=f[0],p=f[4],m=f[8],g=f[1],v=f[5],S=f[9],T=f[2],x=f[6],_=f[10];if(Math.abs(p-g)<.01&&Math.abs(m-T)<.01&&Math.abs(S-x)<.01){if(Math.abs(p+g)<.1&&Math.abs(m+T)<.1&&Math.abs(S+x)<.1&&Math.abs(h+v+_-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const L=(h+1)/2,R=(v+1)/2,B=(_+1)/2,O=(p+g)/4,N=(m+T)/4,Y=(S+x)/4;return L>R&&L>B?L<.01?(r=0,s=.707106781,o=.707106781):(r=Math.sqrt(L),s=O/r,o=N/r):R>B?R<.01?(r=.707106781,s=0,o=.707106781):(s=Math.sqrt(R),r=O/s,o=Y/s):B<.01?(r=.707106781,s=.707106781,o=0):(o=Math.sqrt(B),r=N/o,s=Y/o),this.set(r,s,o,e),this}let U=Math.sqrt((x-S)*(x-S)+(m-T)*(m-T)+(g-p)*(g-p));return Math.abs(U)<.001&&(U=1),this.x=(x-S)/U,this.y=(m-T)/U,this.z=(g-p)/U,this.w=Math.acos((h+v+_-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=me(this.x,t.x,e.x),this.y=me(this.y,t.y,e.y),this.z=me(this.z,t.z,e.z),this.w=me(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=me(this.x,t,e),this.y=me(this.y,t,e),this.z=me(this.z,t,e),this.w=me(this.w,t,e),this}clampLength(t,e){const r=this.length();return this.divideScalar(r||1).multiplyScalar(me(r,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,r){return this.x=t.x+(e.x-t.x)*r,this.y=t.y+(e.y-t.y)*r,this.z=t.z+(e.z-t.z)*r,this.w=t.w+(e.w-t.w)*r,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class mE extends Wr{constructor(t=1,e=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:xi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=r.depth,this.scissor=new Ze(0,0,t,e),this.scissorTest=!1,this.viewport=new Ze(0,0,t,e);const s={width:t,height:e,depth:r.depth},o=new hn(s);this.textures=[];const l=r.count;for(let u=0;u<l;u++)this.textures[u]=o.clone(),this.textures[u].isRenderTargetTexture=!0,this.textures[u].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(t={}){const e={minFilter:xi,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,r=1){if(this.width!==t||this.height!==e||this.depth!==r){this.width=t,this.height=e,this.depth=r;for(let s=0,o=this.textures.length;s<o;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=r,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,r=t.textures.length;e<r;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new lh(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Vr extends mE{constructor(t=1,e=1,r={}){super(t,e,r),this.isWebGLRenderTarget=!0}}class gm extends hn{constructor(t=null,e=1,r=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:r,depth:s},this.magFilter=pi,this.minFilter=pi,this.wrapR=Or,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class _E extends hn{constructor(t=null,e=1,r=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:r,depth:s},this.magFilter=pi,this.minFilter=pi,this.wrapR=Or,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class xa{constructor(t=new q(1/0,1/0,1/0),e=new q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,r=t.length;e<r;e+=3)this.expandByPoint(ci.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,r=t.count;e<r;e++)this.expandByPoint(ci.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,r=t.length;e<r;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const r=ci.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(r),this.max.copy(t).add(r),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const r=t.geometry;if(r!==void 0){const o=r.getAttribute("position");if(e===!0&&o!==void 0&&t.isInstancedMesh!==!0)for(let l=0,u=o.count;l<u;l++)t.isMesh===!0?t.getVertexPosition(l,ci):ci.fromBufferAttribute(o,l),ci.applyMatrix4(t.matrixWorld),this.expandByPoint(ci);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),vo.copy(t.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),vo.copy(r.boundingBox)),vo.applyMatrix4(t.matrixWorld),this.union(vo)}const s=t.children;for(let o=0,l=s.length;o<l;o++)this.expandByObject(s[o],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ci),ci.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,r;return t.normal.x>0?(e=t.normal.x*this.min.x,r=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,r=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,r+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,r+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,r+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,r+=t.normal.z*this.min.z),e<=-t.constant&&r>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ta),xo.subVectors(this.max,ta),us.subVectors(t.a,ta),hs.subVectors(t.b,ta),fs.subVectors(t.c,ta),ir.subVectors(hs,us),rr.subVectors(fs,hs),Rr.subVectors(us,fs);let e=[0,-ir.z,ir.y,0,-rr.z,rr.y,0,-Rr.z,Rr.y,ir.z,0,-ir.x,rr.z,0,-rr.x,Rr.z,0,-Rr.x,-ir.y,ir.x,0,-rr.y,rr.x,0,-Rr.y,Rr.x,0];return!Pc(e,us,hs,fs,xo)||(e=[1,0,0,0,1,0,0,0,1],!Pc(e,us,hs,fs,xo))?!1:(Mo.crossVectors(ir,rr),e=[Mo.x,Mo.y,Mo.z],Pc(e,us,hs,fs,xo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ci).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ci).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Fi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Fi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Fi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Fi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Fi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Fi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Fi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Fi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Fi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Fi=[new q,new q,new q,new q,new q,new q,new q,new q],ci=new q,vo=new xa,us=new q,hs=new q,fs=new q,ir=new q,rr=new q,Rr=new q,ta=new q,xo=new q,Mo=new q,Cr=new q;function Pc(n,t,e,r,s){for(let o=0,l=n.length-3;o<=l;o+=3){Cr.fromArray(n,o);const u=s.x*Math.abs(Cr.x)+s.y*Math.abs(Cr.y)+s.z*Math.abs(Cr.z),f=t.dot(Cr),h=e.dot(Cr),p=r.dot(Cr);if(Math.max(-Math.max(f,h,p),Math.min(f,h,p))>u)return!1}return!0}const gE=new xa,ea=new q,Dc=new q;class Ma{constructor(t=new q,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const r=this.center;e!==void 0?r.copy(e):gE.setFromPoints(t).getCenter(r);let s=0;for(let o=0,l=t.length;o<l;o++)s=Math.max(s,r.distanceToSquared(t[o]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const r=this.center.distanceToSquared(t);return e.copy(t),r>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ea.subVectors(t,this.center);const e=ea.lengthSq();if(e>this.radius*this.radius){const r=Math.sqrt(e),s=(r-this.radius)*.5;this.center.addScaledVector(ea,s/r),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Dc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ea.copy(t.center).add(Dc)),this.expandByPoint(ea.copy(t.center).sub(Dc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const Oi=new q,Lc=new q,yo=new q,sr=new q,Ic=new q,So=new q,Uc=new q;class nl{constructor(t=new q,e=new q(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Oi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const r=e.dot(this.direction);return r<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Oi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Oi.copy(this.origin).addScaledVector(this.direction,e),Oi.distanceToSquared(t))}distanceSqToSegment(t,e,r,s){Lc.copy(t).add(e).multiplyScalar(.5),yo.copy(e).sub(t).normalize(),sr.copy(this.origin).sub(Lc);const o=t.distanceTo(e)*.5,l=-this.direction.dot(yo),u=sr.dot(this.direction),f=-sr.dot(yo),h=sr.lengthSq(),p=Math.abs(1-l*l);let m,g,v,S;if(p>0)if(m=l*f-u,g=l*u-f,S=o*p,m>=0)if(g>=-S)if(g<=S){const T=1/p;m*=T,g*=T,v=m*(m+l*g+2*u)+g*(l*m+g+2*f)+h}else g=o,m=Math.max(0,-(l*g+u)),v=-m*m+g*(g+2*f)+h;else g=-o,m=Math.max(0,-(l*g+u)),v=-m*m+g*(g+2*f)+h;else g<=-S?(m=Math.max(0,-(-l*o+u)),g=m>0?-o:Math.min(Math.max(-o,-f),o),v=-m*m+g*(g+2*f)+h):g<=S?(m=0,g=Math.min(Math.max(-o,-f),o),v=g*(g+2*f)+h):(m=Math.max(0,-(l*o+u)),g=m>0?o:Math.min(Math.max(-o,-f),o),v=-m*m+g*(g+2*f)+h);else g=l>0?-o:o,m=Math.max(0,-(l*g+u)),v=-m*m+g*(g+2*f)+h;return r&&r.copy(this.origin).addScaledVector(this.direction,m),s&&s.copy(Lc).addScaledVector(yo,g),v}intersectSphere(t,e){Oi.subVectors(t.center,this.origin);const r=Oi.dot(this.direction),s=Oi.dot(Oi)-r*r,o=t.radius*t.radius;if(s>o)return null;const l=Math.sqrt(o-s),u=r-l,f=r+l;return f<0?null:u<0?this.at(f,e):this.at(u,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(t.normal)+t.constant)/e;return r>=0?r:null}intersectPlane(t,e){const r=this.distanceToPlane(t);return r===null?null:this.at(r,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let r,s,o,l,u,f;const h=1/this.direction.x,p=1/this.direction.y,m=1/this.direction.z,g=this.origin;return h>=0?(r=(t.min.x-g.x)*h,s=(t.max.x-g.x)*h):(r=(t.max.x-g.x)*h,s=(t.min.x-g.x)*h),p>=0?(o=(t.min.y-g.y)*p,l=(t.max.y-g.y)*p):(o=(t.max.y-g.y)*p,l=(t.min.y-g.y)*p),r>l||o>s||((o>r||isNaN(r))&&(r=o),(l<s||isNaN(s))&&(s=l),m>=0?(u=(t.min.z-g.z)*m,f=(t.max.z-g.z)*m):(u=(t.max.z-g.z)*m,f=(t.min.z-g.z)*m),r>f||u>s)||((u>r||r!==r)&&(r=u),(f<s||s!==s)&&(s=f),s<0)?null:this.at(r>=0?r:s,e)}intersectsBox(t){return this.intersectBox(t,Oi)!==null}intersectTriangle(t,e,r,s,o){Ic.subVectors(e,t),So.subVectors(r,t),Uc.crossVectors(Ic,So);let l=this.direction.dot(Uc),u;if(l>0){if(s)return null;u=1}else if(l<0)u=-1,l=-l;else return null;sr.subVectors(this.origin,t);const f=u*this.direction.dot(So.crossVectors(sr,So));if(f<0)return null;const h=u*this.direction.dot(Ic.cross(sr));if(h<0||f+h>l)return null;const p=-u*sr.dot(Uc);return p<0?null:this.at(p/l,o)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ke{constructor(t,e,r,s,o,l,u,f,h,p,m,g,v,S,T,x){Ke.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,r,s,o,l,u,f,h,p,m,g,v,S,T,x)}set(t,e,r,s,o,l,u,f,h,p,m,g,v,S,T,x){const _=this.elements;return _[0]=t,_[4]=e,_[8]=r,_[12]=s,_[1]=o,_[5]=l,_[9]=u,_[13]=f,_[2]=h,_[6]=p,_[10]=m,_[14]=g,_[3]=v,_[7]=S,_[11]=T,_[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ke().fromArray(this.elements)}copy(t){const e=this.elements,r=t.elements;return e[0]=r[0],e[1]=r[1],e[2]=r[2],e[3]=r[3],e[4]=r[4],e[5]=r[5],e[6]=r[6],e[7]=r[7],e[8]=r[8],e[9]=r[9],e[10]=r[10],e[11]=r[11],e[12]=r[12],e[13]=r[13],e[14]=r[14],e[15]=r[15],this}copyPosition(t){const e=this.elements,r=t.elements;return e[12]=r[12],e[13]=r[13],e[14]=r[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,r){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(t,e,r){return this.set(t.x,e.x,r.x,0,t.y,e.y,r.y,0,t.z,e.z,r.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,r=t.elements,s=1/ds.setFromMatrixColumn(t,0).length(),o=1/ds.setFromMatrixColumn(t,1).length(),l=1/ds.setFromMatrixColumn(t,2).length();return e[0]=r[0]*s,e[1]=r[1]*s,e[2]=r[2]*s,e[3]=0,e[4]=r[4]*o,e[5]=r[5]*o,e[6]=r[6]*o,e[7]=0,e[8]=r[8]*l,e[9]=r[9]*l,e[10]=r[10]*l,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,r=t.x,s=t.y,o=t.z,l=Math.cos(r),u=Math.sin(r),f=Math.cos(s),h=Math.sin(s),p=Math.cos(o),m=Math.sin(o);if(t.order==="XYZ"){const g=l*p,v=l*m,S=u*p,T=u*m;e[0]=f*p,e[4]=-f*m,e[8]=h,e[1]=v+S*h,e[5]=g-T*h,e[9]=-u*f,e[2]=T-g*h,e[6]=S+v*h,e[10]=l*f}else if(t.order==="YXZ"){const g=f*p,v=f*m,S=h*p,T=h*m;e[0]=g+T*u,e[4]=S*u-v,e[8]=l*h,e[1]=l*m,e[5]=l*p,e[9]=-u,e[2]=v*u-S,e[6]=T+g*u,e[10]=l*f}else if(t.order==="ZXY"){const g=f*p,v=f*m,S=h*p,T=h*m;e[0]=g-T*u,e[4]=-l*m,e[8]=S+v*u,e[1]=v+S*u,e[5]=l*p,e[9]=T-g*u,e[2]=-l*h,e[6]=u,e[10]=l*f}else if(t.order==="ZYX"){const g=l*p,v=l*m,S=u*p,T=u*m;e[0]=f*p,e[4]=S*h-v,e[8]=g*h+T,e[1]=f*m,e[5]=T*h+g,e[9]=v*h-S,e[2]=-h,e[6]=u*f,e[10]=l*f}else if(t.order==="YZX"){const g=l*f,v=l*h,S=u*f,T=u*h;e[0]=f*p,e[4]=T-g*m,e[8]=S*m+v,e[1]=m,e[5]=l*p,e[9]=-u*p,e[2]=-h*p,e[6]=v*m+S,e[10]=g-T*m}else if(t.order==="XZY"){const g=l*f,v=l*h,S=u*f,T=u*h;e[0]=f*p,e[4]=-m,e[8]=h*p,e[1]=g*m+T,e[5]=l*p,e[9]=v*m-S,e[2]=S*m-v,e[6]=u*p,e[10]=T*m+g}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(vE,t,xE)}lookAt(t,e,r){const s=this.elements;return kn.subVectors(t,e),kn.lengthSq()===0&&(kn.z=1),kn.normalize(),ar.crossVectors(r,kn),ar.lengthSq()===0&&(Math.abs(r.z)===1?kn.x+=1e-4:kn.z+=1e-4,kn.normalize(),ar.crossVectors(r,kn)),ar.normalize(),Eo.crossVectors(kn,ar),s[0]=ar.x,s[4]=Eo.x,s[8]=kn.x,s[1]=ar.y,s[5]=Eo.y,s[9]=kn.y,s[2]=ar.z,s[6]=Eo.z,s[10]=kn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const r=t.elements,s=e.elements,o=this.elements,l=r[0],u=r[4],f=r[8],h=r[12],p=r[1],m=r[5],g=r[9],v=r[13],S=r[2],T=r[6],x=r[10],_=r[14],U=r[3],L=r[7],R=r[11],B=r[15],O=s[0],N=s[4],Y=s[8],C=s[12],w=s[1],z=s[5],$=s[9],Z=s[13],ot=s[2],it=s[6],lt=s[10],ft=s[14],Q=s[3],Et=s[7],Rt=s[11],It=s[15];return o[0]=l*O+u*w+f*ot+h*Q,o[4]=l*N+u*z+f*it+h*Et,o[8]=l*Y+u*$+f*lt+h*Rt,o[12]=l*C+u*Z+f*ft+h*It,o[1]=p*O+m*w+g*ot+v*Q,o[5]=p*N+m*z+g*it+v*Et,o[9]=p*Y+m*$+g*lt+v*Rt,o[13]=p*C+m*Z+g*ft+v*It,o[2]=S*O+T*w+x*ot+_*Q,o[6]=S*N+T*z+x*it+_*Et,o[10]=S*Y+T*$+x*lt+_*Rt,o[14]=S*C+T*Z+x*ft+_*It,o[3]=U*O+L*w+R*ot+B*Q,o[7]=U*N+L*z+R*it+B*Et,o[11]=U*Y+L*$+R*lt+B*Rt,o[15]=U*C+L*Z+R*ft+B*It,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],r=t[4],s=t[8],o=t[12],l=t[1],u=t[5],f=t[9],h=t[13],p=t[2],m=t[6],g=t[10],v=t[14],S=t[3],T=t[7],x=t[11],_=t[15];return S*(+o*f*m-s*h*m-o*u*g+r*h*g+s*u*v-r*f*v)+T*(+e*f*v-e*h*g+o*l*g-s*l*v+s*h*p-o*f*p)+x*(+e*h*m-e*u*v-o*l*m+r*l*v+o*u*p-r*h*p)+_*(-s*u*p-e*f*m+e*u*g+s*l*m-r*l*g+r*f*p)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,r){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=r),this}invert(){const t=this.elements,e=t[0],r=t[1],s=t[2],o=t[3],l=t[4],u=t[5],f=t[6],h=t[7],p=t[8],m=t[9],g=t[10],v=t[11],S=t[12],T=t[13],x=t[14],_=t[15],U=m*x*h-T*g*h+T*f*v-u*x*v-m*f*_+u*g*_,L=S*g*h-p*x*h-S*f*v+l*x*v+p*f*_-l*g*_,R=p*T*h-S*m*h+S*u*v-l*T*v-p*u*_+l*m*_,B=S*m*f-p*T*f-S*u*g+l*T*g+p*u*x-l*m*x,O=e*U+r*L+s*R+o*B;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const N=1/O;return t[0]=U*N,t[1]=(T*g*o-m*x*o-T*s*v+r*x*v+m*s*_-r*g*_)*N,t[2]=(u*x*o-T*f*o+T*s*h-r*x*h-u*s*_+r*f*_)*N,t[3]=(m*f*o-u*g*o-m*s*h+r*g*h+u*s*v-r*f*v)*N,t[4]=L*N,t[5]=(p*x*o-S*g*o+S*s*v-e*x*v-p*s*_+e*g*_)*N,t[6]=(S*f*o-l*x*o-S*s*h+e*x*h+l*s*_-e*f*_)*N,t[7]=(l*g*o-p*f*o+p*s*h-e*g*h-l*s*v+e*f*v)*N,t[8]=R*N,t[9]=(S*m*o-p*T*o-S*r*v+e*T*v+p*r*_-e*m*_)*N,t[10]=(l*T*o-S*u*o+S*r*h-e*T*h-l*r*_+e*u*_)*N,t[11]=(p*u*o-l*m*o-p*r*h+e*m*h+l*r*v-e*u*v)*N,t[12]=B*N,t[13]=(p*T*s-S*m*s+S*r*g-e*T*g-p*r*x+e*m*x)*N,t[14]=(S*u*s-l*T*s-S*r*f+e*T*f+l*r*x-e*u*x)*N,t[15]=(l*m*s-p*u*s+p*r*f-e*m*f-l*r*g+e*u*g)*N,this}scale(t){const e=this.elements,r=t.x,s=t.y,o=t.z;return e[0]*=r,e[4]*=s,e[8]*=o,e[1]*=r,e[5]*=s,e[9]*=o,e[2]*=r,e[6]*=s,e[10]*=o,e[3]*=r,e[7]*=s,e[11]*=o,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],r=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,r,s))}makeTranslation(t,e,r){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,r,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),r=Math.sin(t);return this.set(1,0,0,0,0,e,-r,0,0,r,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),r=Math.sin(t);return this.set(e,0,r,0,0,1,0,0,-r,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),r=Math.sin(t);return this.set(e,-r,0,0,r,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const r=Math.cos(e),s=Math.sin(e),o=1-r,l=t.x,u=t.y,f=t.z,h=o*l,p=o*u;return this.set(h*l+r,h*u-s*f,h*f+s*u,0,h*u+s*f,p*u+r,p*f-s*l,0,h*f-s*u,p*f+s*l,o*f*f+r,0,0,0,0,1),this}makeScale(t,e,r){return this.set(t,0,0,0,0,e,0,0,0,0,r,0,0,0,0,1),this}makeShear(t,e,r,s,o,l){return this.set(1,r,o,0,t,1,l,0,e,s,1,0,0,0,0,1),this}compose(t,e,r){const s=this.elements,o=e._x,l=e._y,u=e._z,f=e._w,h=o+o,p=l+l,m=u+u,g=o*h,v=o*p,S=o*m,T=l*p,x=l*m,_=u*m,U=f*h,L=f*p,R=f*m,B=r.x,O=r.y,N=r.z;return s[0]=(1-(T+_))*B,s[1]=(v+R)*B,s[2]=(S-L)*B,s[3]=0,s[4]=(v-R)*O,s[5]=(1-(g+_))*O,s[6]=(x+U)*O,s[7]=0,s[8]=(S+L)*N,s[9]=(x-U)*N,s[10]=(1-(g+T))*N,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,r){const s=this.elements;let o=ds.set(s[0],s[1],s[2]).length();const l=ds.set(s[4],s[5],s[6]).length(),u=ds.set(s[8],s[9],s[10]).length();this.determinant()<0&&(o=-o),t.x=s[12],t.y=s[13],t.z=s[14],ui.copy(this);const h=1/o,p=1/l,m=1/u;return ui.elements[0]*=h,ui.elements[1]*=h,ui.elements[2]*=h,ui.elements[4]*=p,ui.elements[5]*=p,ui.elements[6]*=p,ui.elements[8]*=m,ui.elements[9]*=m,ui.elements[10]*=m,e.setFromRotationMatrix(ui),r.x=o,r.y=l,r.z=u,this}makePerspective(t,e,r,s,o,l,u=yi,f=!1){const h=this.elements,p=2*o/(e-t),m=2*o/(r-s),g=(e+t)/(e-t),v=(r+s)/(r-s);let S,T;if(f)S=o/(l-o),T=l*o/(l-o);else if(u===yi)S=-(l+o)/(l-o),T=-2*l*o/(l-o);else if(u===Ko)S=-l/(l-o),T=-l*o/(l-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+u);return h[0]=p,h[4]=0,h[8]=g,h[12]=0,h[1]=0,h[5]=m,h[9]=v,h[13]=0,h[2]=0,h[6]=0,h[10]=S,h[14]=T,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(t,e,r,s,o,l,u=yi,f=!1){const h=this.elements,p=2/(e-t),m=2/(r-s),g=-(e+t)/(e-t),v=-(r+s)/(r-s);let S,T;if(f)S=1/(l-o),T=l/(l-o);else if(u===yi)S=-2/(l-o),T=-(l+o)/(l-o);else if(u===Ko)S=-1/(l-o),T=-o/(l-o);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+u);return h[0]=p,h[4]=0,h[8]=0,h[12]=g,h[1]=0,h[5]=m,h[9]=0,h[13]=v,h[2]=0,h[6]=0,h[10]=S,h[14]=T,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(t){const e=this.elements,r=t.elements;for(let s=0;s<16;s++)if(e[s]!==r[s])return!1;return!0}fromArray(t,e=0){for(let r=0;r<16;r++)this.elements[r]=t[r+e];return this}toArray(t=[],e=0){const r=this.elements;return t[e]=r[0],t[e+1]=r[1],t[e+2]=r[2],t[e+3]=r[3],t[e+4]=r[4],t[e+5]=r[5],t[e+6]=r[6],t[e+7]=r[7],t[e+8]=r[8],t[e+9]=r[9],t[e+10]=r[10],t[e+11]=r[11],t[e+12]=r[12],t[e+13]=r[13],t[e+14]=r[14],t[e+15]=r[15],t}}const ds=new q,ui=new Ke,vE=new q(0,0,0),xE=new q(1,1,1),ar=new q,Eo=new q,kn=new q,ep=new Ke,np=new Hr;class ei{constructor(t=0,e=0,r=0,s=ei.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=r,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,r,s=this._order){return this._x=t,this._y=e,this._z=r,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,r=!0){const s=t.elements,o=s[0],l=s[4],u=s[8],f=s[1],h=s[5],p=s[9],m=s[2],g=s[6],v=s[10];switch(e){case"XYZ":this._y=Math.asin(me(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-p,v),this._z=Math.atan2(-l,o)):(this._x=Math.atan2(g,h),this._z=0);break;case"YXZ":this._x=Math.asin(-me(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(u,v),this._z=Math.atan2(f,h)):(this._y=Math.atan2(-m,o),this._z=0);break;case"ZXY":this._x=Math.asin(me(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-m,v),this._z=Math.atan2(-l,h)):(this._y=0,this._z=Math.atan2(f,o));break;case"ZYX":this._y=Math.asin(-me(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(g,v),this._z=Math.atan2(f,o)):(this._x=0,this._z=Math.atan2(-l,h));break;case"YZX":this._z=Math.asin(me(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-p,h),this._y=Math.atan2(-m,o)):(this._x=0,this._y=Math.atan2(u,v));break;case"XZY":this._z=Math.asin(-me(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(g,h),this._y=Math.atan2(u,o)):(this._x=Math.atan2(-p,v),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,r){return ep.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ep,e,r)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return np.setFromEuler(this),this.setFromQuaternion(np,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ei.DEFAULT_ORDER="XYZ";class vm{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let ME=0;const ip=new q,ps=new Hr,Bi=new Ke,bo=new q,na=new q,yE=new q,SE=new Hr,rp=new q(1,0,0),sp=new q(0,1,0),ap=new q(0,0,1),op={type:"added"},EE={type:"removed"},ms={type:"childadded",child:null},Nc={type:"childremoved",child:null};class An extends Wr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ME++}),this.uuid=Fs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=An.DEFAULT_UP.clone();const t=new q,e=new ei,r=new Hr,s=new q(1,1,1);function o(){r.setFromEuler(e,!1)}function l(){e.setFromQuaternion(r,void 0,!1)}e._onChange(o),r._onChange(l),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ke},normalMatrix:{value:new oe}}),this.matrix=new Ke,this.matrixWorld=new Ke,this.matrixAutoUpdate=An.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=An.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new vm,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ps.setFromAxisAngle(t,e),this.quaternion.multiply(ps),this}rotateOnWorldAxis(t,e){return ps.setFromAxisAngle(t,e),this.quaternion.premultiply(ps),this}rotateX(t){return this.rotateOnAxis(rp,t)}rotateY(t){return this.rotateOnAxis(sp,t)}rotateZ(t){return this.rotateOnAxis(ap,t)}translateOnAxis(t,e){return ip.copy(t).applyQuaternion(this.quaternion),this.position.add(ip.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(rp,t)}translateY(t){return this.translateOnAxis(sp,t)}translateZ(t){return this.translateOnAxis(ap,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Bi.copy(this.matrixWorld).invert())}lookAt(t,e,r){t.isVector3?bo.copy(t):bo.set(t,e,r);const s=this.parent;this.updateWorldMatrix(!0,!1),na.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Bi.lookAt(na,bo,this.up):Bi.lookAt(bo,na,this.up),this.quaternion.setFromRotationMatrix(Bi),s&&(Bi.extractRotation(s.matrixWorld),ps.setFromRotationMatrix(Bi),this.quaternion.premultiply(ps.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(op),ms.child=t,this.dispatchEvent(ms),ms.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(EE),Nc.child=t,this.dispatchEvent(Nc),Nc.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Bi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Bi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Bi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(op),ms.child=t,this.dispatchEvent(ms),ms.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let r=0,s=this.children.length;r<s;r++){const l=this.children[r].getObjectByProperty(t,e);if(l!==void 0)return l}}getObjectsByProperty(t,e,r=[]){this[t]===e&&r.push(this);const s=this.children;for(let o=0,l=s.length;o<l;o++)s[o].getObjectsByProperty(t,e,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(na,t,yE),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(na,SE,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let r=0,s=e.length;r<s;r++)e[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let r=0,s=e.length;r<s;r++)e[r].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let r=0,s=e.length;r<s;r++)e[r].updateMatrixWorld(t)}updateWorldMatrix(t,e){const r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let o=0,l=s.length;o<l;o++)s[o].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",r={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(u=>({...u,boundingBox:u.boundingBox?u.boundingBox.toJSON():void 0,boundingSphere:u.boundingSphere?u.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(u=>({...u})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function o(u,f){return u[f.uuid]===void 0&&(u[f.uuid]=f.toJSON(t)),f.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(t.geometries,this.geometry);const u=this.geometry.parameters;if(u!==void 0&&u.shapes!==void 0){const f=u.shapes;if(Array.isArray(f))for(let h=0,p=f.length;h<p;h++){const m=f[h];o(t.shapes,m)}else o(t.shapes,f)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const u=[];for(let f=0,h=this.material.length;f<h;f++)u.push(o(t.materials,this.material[f]));s.material=u}else s.material=o(t.materials,this.material);if(this.children.length>0){s.children=[];for(let u=0;u<this.children.length;u++)s.children.push(this.children[u].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let u=0;u<this.animations.length;u++){const f=this.animations[u];s.animations.push(o(t.animations,f))}}if(e){const u=l(t.geometries),f=l(t.materials),h=l(t.textures),p=l(t.images),m=l(t.shapes),g=l(t.skeletons),v=l(t.animations),S=l(t.nodes);u.length>0&&(r.geometries=u),f.length>0&&(r.materials=f),h.length>0&&(r.textures=h),p.length>0&&(r.images=p),m.length>0&&(r.shapes=m),g.length>0&&(r.skeletons=g),v.length>0&&(r.animations=v),S.length>0&&(r.nodes=S)}return r.object=s,r;function l(u){const f=[];for(const h in u){const p=u[h];delete p.metadata,f.push(p)}return f}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let r=0;r<t.children.length;r++){const s=t.children[r];this.add(s.clone())}return this}}An.DEFAULT_UP=new q(0,1,0);An.DEFAULT_MATRIX_AUTO_UPDATE=!0;An.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const hi=new q,zi=new q,Fc=new q,ki=new q,_s=new q,gs=new q,lp=new q,Oc=new q,Bc=new q,zc=new q,kc=new Ze,Hc=new Ze,Vc=new Ze;class fi{constructor(t=new q,e=new q,r=new q){this.a=t,this.b=e,this.c=r}static getNormal(t,e,r,s){s.subVectors(r,e),hi.subVectors(t,e),s.cross(hi);const o=s.lengthSq();return o>0?s.multiplyScalar(1/Math.sqrt(o)):s.set(0,0,0)}static getBarycoord(t,e,r,s,o){hi.subVectors(s,e),zi.subVectors(r,e),Fc.subVectors(t,e);const l=hi.dot(hi),u=hi.dot(zi),f=hi.dot(Fc),h=zi.dot(zi),p=zi.dot(Fc),m=l*h-u*u;if(m===0)return o.set(0,0,0),null;const g=1/m,v=(h*f-u*p)*g,S=(l*p-u*f)*g;return o.set(1-v-S,S,v)}static containsPoint(t,e,r,s){return this.getBarycoord(t,e,r,s,ki)===null?!1:ki.x>=0&&ki.y>=0&&ki.x+ki.y<=1}static getInterpolation(t,e,r,s,o,l,u,f){return this.getBarycoord(t,e,r,s,ki)===null?(f.x=0,f.y=0,"z"in f&&(f.z=0),"w"in f&&(f.w=0),null):(f.setScalar(0),f.addScaledVector(o,ki.x),f.addScaledVector(l,ki.y),f.addScaledVector(u,ki.z),f)}static getInterpolatedAttribute(t,e,r,s,o,l){return kc.setScalar(0),Hc.setScalar(0),Vc.setScalar(0),kc.fromBufferAttribute(t,e),Hc.fromBufferAttribute(t,r),Vc.fromBufferAttribute(t,s),l.setScalar(0),l.addScaledVector(kc,o.x),l.addScaledVector(Hc,o.y),l.addScaledVector(Vc,o.z),l}static isFrontFacing(t,e,r,s){return hi.subVectors(r,e),zi.subVectors(t,e),hi.cross(zi).dot(s)<0}set(t,e,r){return this.a.copy(t),this.b.copy(e),this.c.copy(r),this}setFromPointsAndIndices(t,e,r,s){return this.a.copy(t[e]),this.b.copy(t[r]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,r,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,r),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return hi.subVectors(this.c,this.b),zi.subVectors(this.a,this.b),hi.cross(zi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return fi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return fi.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,r,s,o){return fi.getInterpolation(t,this.a,this.b,this.c,e,r,s,o)}containsPoint(t){return fi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return fi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const r=this.a,s=this.b,o=this.c;let l,u;_s.subVectors(s,r),gs.subVectors(o,r),Oc.subVectors(t,r);const f=_s.dot(Oc),h=gs.dot(Oc);if(f<=0&&h<=0)return e.copy(r);Bc.subVectors(t,s);const p=_s.dot(Bc),m=gs.dot(Bc);if(p>=0&&m<=p)return e.copy(s);const g=f*m-p*h;if(g<=0&&f>=0&&p<=0)return l=f/(f-p),e.copy(r).addScaledVector(_s,l);zc.subVectors(t,o);const v=_s.dot(zc),S=gs.dot(zc);if(S>=0&&v<=S)return e.copy(o);const T=v*h-f*S;if(T<=0&&h>=0&&S<=0)return u=h/(h-S),e.copy(r).addScaledVector(gs,u);const x=p*S-v*m;if(x<=0&&m-p>=0&&v-S>=0)return lp.subVectors(o,s),u=(m-p)/(m-p+(v-S)),e.copy(s).addScaledVector(lp,u);const _=1/(x+T+g);return l=T*_,u=g*_,e.copy(r).addScaledVector(_s,l).addScaledVector(gs,u)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const xm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},or={h:0,s:0,l:0},To={h:0,s:0,l:0};function Gc(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class jt{constructor(t,e,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,r)}set(t,e,r){if(e===void 0&&r===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,r);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Qn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Te.colorSpaceToWorking(this,e),this}setRGB(t,e,r,s=Te.workingColorSpace){return this.r=t,this.g=e,this.b=r,Te.colorSpaceToWorking(this,s),this}setHSL(t,e,r,s=Te.workingColorSpace){if(t=oh(t,1),e=me(e,0,1),r=me(r,0,1),e===0)this.r=this.g=this.b=r;else{const o=r<=.5?r*(1+e):r+e-r*e,l=2*r-o;this.r=Gc(l,o,t+1/3),this.g=Gc(l,o,t),this.b=Gc(l,o,t-1/3)}return Te.colorSpaceToWorking(this,s),this}setStyle(t,e=Qn){function r(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let o;const l=s[1],u=s[2];switch(l){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return r(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,e);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return r(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,e);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return r(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const o=s[1],l=o.length;if(l===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,e);if(l===6)return this.setHex(parseInt(o,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Qn){const r=xm[t.toLowerCase()];return r!==void 0?this.setHex(r,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Xi(t.r),this.g=Xi(t.g),this.b=Xi(t.b),this}copyLinearToSRGB(t){return this.r=ws(t.r),this.g=ws(t.g),this.b=ws(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Qn){return Te.workingToColorSpace(vn.copy(this),t),Math.round(me(vn.r*255,0,255))*65536+Math.round(me(vn.g*255,0,255))*256+Math.round(me(vn.b*255,0,255))}getHexString(t=Qn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Te.workingColorSpace){Te.workingToColorSpace(vn.copy(this),e);const r=vn.r,s=vn.g,o=vn.b,l=Math.max(r,s,o),u=Math.min(r,s,o);let f,h;const p=(u+l)/2;if(u===l)f=0,h=0;else{const m=l-u;switch(h=p<=.5?m/(l+u):m/(2-l-u),l){case r:f=(s-o)/m+(s<o?6:0);break;case s:f=(o-r)/m+2;break;case o:f=(r-s)/m+4;break}f/=6}return t.h=f,t.s=h,t.l=p,t}getRGB(t,e=Te.workingColorSpace){return Te.workingToColorSpace(vn.copy(this),e),t.r=vn.r,t.g=vn.g,t.b=vn.b,t}getStyle(t=Qn){Te.workingToColorSpace(vn.copy(this),t);const e=vn.r,r=vn.g,s=vn.b;return t!==Qn?`color(${t} ${e.toFixed(3)} ${r.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(r*255)},${Math.round(s*255)})`}offsetHSL(t,e,r){return this.getHSL(or),this.setHSL(or.h+t,or.s+e,or.l+r)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,r){return this.r=t.r+(e.r-t.r)*r,this.g=t.g+(e.g-t.g)*r,this.b=t.b+(e.b-t.b)*r,this}lerpHSL(t,e){this.getHSL(or),t.getHSL(To);const r=la(or.h,To.h,e),s=la(or.s,To.s,e),o=la(or.l,To.l,e);return this.setHSL(r,s,o),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,r=this.g,s=this.b,o=t.elements;return this.r=o[0]*e+o[3]*r+o[6]*s,this.g=o[1]*e+o[4]*r+o[7]*s,this.b=o[2]*e+o[5]*r+o[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const vn=new jt;jt.NAMES=xm;let bE=0;class wn extends Wr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:bE++}),this.uuid=Fs(),this.name="",this.type="Material",this.blending=As,this.side=mr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ou,this.blendDst=lu,this.blendEquation=Nr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new jt(0,0,0),this.blendAlpha=0,this.depthFunc=Cs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Yd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ls,this.stencilZFail=ls,this.stencilZPass=ls,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const r=t[e];if(r===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(r):s&&s.isVector3&&r&&r.isVector3?s.copy(r):this[e]=r}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(t).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(t).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(t).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(t).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(t).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==As&&(r.blending=this.blending),this.side!==mr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==ou&&(r.blendSrc=this.blendSrc),this.blendDst!==lu&&(r.blendDst=this.blendDst),this.blendEquation!==Nr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Cs&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Yd&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ls&&(r.stencilFail=this.stencilFail),this.stencilZFail!==ls&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==ls&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function s(o){const l=[];for(const u in o){const f=o[u];delete f.metadata,l.push(f)}return l}if(e){const o=s(t.textures),l=s(t.images);o.length>0&&(r.textures=o),l.length>0&&(r.images=l)}return r}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let r=null;if(e!==null){const s=e.length;r=new Array(s);for(let o=0;o!==s;++o)r[o]=e[o].clone()}return this.clippingPlanes=r,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class ch extends wn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new jt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ei,this.combine=tl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Je=new q,Ao=new ne;let TE=0;class Si{constructor(t,e,r=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:TE++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=r,this.usage=Zd,this.updateRanges=[],this.gpuType=Mi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,r){t*=this.itemSize,r*=e.itemSize;for(let s=0,o=this.itemSize;s<o;s++)this.array[t+s]=e.array[r+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,r=this.count;e<r;e++)Ao.fromBufferAttribute(this,e),Ao.applyMatrix3(t),this.setXY(e,Ao.x,Ao.y);else if(this.itemSize===3)for(let e=0,r=this.count;e<r;e++)Je.fromBufferAttribute(this,e),Je.applyMatrix3(t),this.setXYZ(e,Je.x,Je.y,Je.z);return this}applyMatrix4(t){for(let e=0,r=this.count;e<r;e++)Je.fromBufferAttribute(this,e),Je.applyMatrix4(t),this.setXYZ(e,Je.x,Je.y,Je.z);return this}applyNormalMatrix(t){for(let e=0,r=this.count;e<r;e++)Je.fromBufferAttribute(this,e),Je.applyNormalMatrix(t),this.setXYZ(e,Je.x,Je.y,Je.z);return this}transformDirection(t){for(let e=0,r=this.count;e<r;e++)Je.fromBufferAttribute(this,e),Je.transformDirection(t),this.setXYZ(e,Je.x,Je.y,Je.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let r=this.array[t*this.itemSize+e];return this.normalized&&(r=Ss(r,this.array)),r}setComponent(t,e,r){return this.normalized&&(r=bn(r,this.array)),this.array[t*this.itemSize+e]=r,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ss(e,this.array)),e}setX(t,e){return this.normalized&&(e=bn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ss(e,this.array)),e}setY(t,e){return this.normalized&&(e=bn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ss(e,this.array)),e}setZ(t,e){return this.normalized&&(e=bn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ss(e,this.array)),e}setW(t,e){return this.normalized&&(e=bn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,r){return t*=this.itemSize,this.normalized&&(e=bn(e,this.array),r=bn(r,this.array)),this.array[t+0]=e,this.array[t+1]=r,this}setXYZ(t,e,r,s){return t*=this.itemSize,this.normalized&&(e=bn(e,this.array),r=bn(r,this.array),s=bn(s,this.array)),this.array[t+0]=e,this.array[t+1]=r,this.array[t+2]=s,this}setXYZW(t,e,r,s,o){return t*=this.itemSize,this.normalized&&(e=bn(e,this.array),r=bn(r,this.array),s=bn(s,this.array),o=bn(o,this.array)),this.array[t+0]=e,this.array[t+1]=r,this.array[t+2]=s,this.array[t+3]=o,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Zd&&(t.usage=this.usage),t}}class Mm extends Si{constructor(t,e,r){super(new Uint16Array(t),e,r)}}class ym extends Si{constructor(t,e,r){super(new Uint32Array(t),e,r)}}class Vn extends Si{constructor(t,e,r){super(new Float32Array(t),e,r)}}let AE=0;const Jn=new Ke,Wc=new An,vs=new q,Hn=new xa,ia=new xa,on=new q;class bi extends Wr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:AE++}),this.uuid=Fs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(_m(t)?ym:Mm)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,r=0){this.groups.push({start:t,count:e,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const o=new oe().getNormalMatrix(t);r.applyNormalMatrix(o),r.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Jn.makeRotationFromQuaternion(t),this.applyMatrix4(Jn),this}rotateX(t){return Jn.makeRotationX(t),this.applyMatrix4(Jn),this}rotateY(t){return Jn.makeRotationY(t),this.applyMatrix4(Jn),this}rotateZ(t){return Jn.makeRotationZ(t),this.applyMatrix4(Jn),this}translate(t,e,r){return Jn.makeTranslation(t,e,r),this.applyMatrix4(Jn),this}scale(t,e,r){return Jn.makeScale(t,e,r),this.applyMatrix4(Jn),this}lookAt(t){return Wc.lookAt(t),Wc.updateMatrix(),this.applyMatrix4(Wc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(vs).negate(),this.translate(vs.x,vs.y,vs.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const r=[];for(let s=0,o=t.length;s<o;s++){const l=t[s];r.push(l.x,l.y,l.z||0)}this.setAttribute("position",new Vn(r,3))}else{const r=Math.min(t.length,e.count);for(let s=0;s<r;s++){const o=t[s];e.setXYZ(s,o.x,o.y,o.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new xa);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new q(-1/0,-1/0,-1/0),new q(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let r=0,s=e.length;r<s;r++){const o=e[r];Hn.setFromBufferAttribute(o),this.morphTargetsRelative?(on.addVectors(this.boundingBox.min,Hn.min),this.boundingBox.expandByPoint(on),on.addVectors(this.boundingBox.max,Hn.max),this.boundingBox.expandByPoint(on)):(this.boundingBox.expandByPoint(Hn.min),this.boundingBox.expandByPoint(Hn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ma);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new q,1/0);return}if(t){const r=this.boundingSphere.center;if(Hn.setFromBufferAttribute(t),e)for(let o=0,l=e.length;o<l;o++){const u=e[o];ia.setFromBufferAttribute(u),this.morphTargetsRelative?(on.addVectors(Hn.min,ia.min),Hn.expandByPoint(on),on.addVectors(Hn.max,ia.max),Hn.expandByPoint(on)):(Hn.expandByPoint(ia.min),Hn.expandByPoint(ia.max))}Hn.getCenter(r);let s=0;for(let o=0,l=t.count;o<l;o++)on.fromBufferAttribute(t,o),s=Math.max(s,r.distanceToSquared(on));if(e)for(let o=0,l=e.length;o<l;o++){const u=e[o],f=this.morphTargetsRelative;for(let h=0,p=u.count;h<p;h++)on.fromBufferAttribute(u,h),f&&(vs.fromBufferAttribute(t,h),on.add(vs)),s=Math.max(s,r.distanceToSquared(on))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=e.position,s=e.normal,o=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Si(new Float32Array(4*r.count),4));const l=this.getAttribute("tangent"),u=[],f=[];for(let Y=0;Y<r.count;Y++)u[Y]=new q,f[Y]=new q;const h=new q,p=new q,m=new q,g=new ne,v=new ne,S=new ne,T=new q,x=new q;function _(Y,C,w){h.fromBufferAttribute(r,Y),p.fromBufferAttribute(r,C),m.fromBufferAttribute(r,w),g.fromBufferAttribute(o,Y),v.fromBufferAttribute(o,C),S.fromBufferAttribute(o,w),p.sub(h),m.sub(h),v.sub(g),S.sub(g);const z=1/(v.x*S.y-S.x*v.y);isFinite(z)&&(T.copy(p).multiplyScalar(S.y).addScaledVector(m,-v.y).multiplyScalar(z),x.copy(m).multiplyScalar(v.x).addScaledVector(p,-S.x).multiplyScalar(z),u[Y].add(T),u[C].add(T),u[w].add(T),f[Y].add(x),f[C].add(x),f[w].add(x))}let U=this.groups;U.length===0&&(U=[{start:0,count:t.count}]);for(let Y=0,C=U.length;Y<C;++Y){const w=U[Y],z=w.start,$=w.count;for(let Z=z,ot=z+$;Z<ot;Z+=3)_(t.getX(Z+0),t.getX(Z+1),t.getX(Z+2))}const L=new q,R=new q,B=new q,O=new q;function N(Y){B.fromBufferAttribute(s,Y),O.copy(B);const C=u[Y];L.copy(C),L.sub(B.multiplyScalar(B.dot(C))).normalize(),R.crossVectors(O,C);const z=R.dot(f[Y])<0?-1:1;l.setXYZW(Y,L.x,L.y,L.z,z)}for(let Y=0,C=U.length;Y<C;++Y){const w=U[Y],z=w.start,$=w.count;for(let Z=z,ot=z+$;Z<ot;Z+=3)N(t.getX(Z+0)),N(t.getX(Z+1)),N(t.getX(Z+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Si(new Float32Array(e.count*3),3),this.setAttribute("normal",r);else for(let g=0,v=r.count;g<v;g++)r.setXYZ(g,0,0,0);const s=new q,o=new q,l=new q,u=new q,f=new q,h=new q,p=new q,m=new q;if(t)for(let g=0,v=t.count;g<v;g+=3){const S=t.getX(g+0),T=t.getX(g+1),x=t.getX(g+2);s.fromBufferAttribute(e,S),o.fromBufferAttribute(e,T),l.fromBufferAttribute(e,x),p.subVectors(l,o),m.subVectors(s,o),p.cross(m),u.fromBufferAttribute(r,S),f.fromBufferAttribute(r,T),h.fromBufferAttribute(r,x),u.add(p),f.add(p),h.add(p),r.setXYZ(S,u.x,u.y,u.z),r.setXYZ(T,f.x,f.y,f.z),r.setXYZ(x,h.x,h.y,h.z)}else for(let g=0,v=e.count;g<v;g+=3)s.fromBufferAttribute(e,g+0),o.fromBufferAttribute(e,g+1),l.fromBufferAttribute(e,g+2),p.subVectors(l,o),m.subVectors(s,o),p.cross(m),r.setXYZ(g+0,p.x,p.y,p.z),r.setXYZ(g+1,p.x,p.y,p.z),r.setXYZ(g+2,p.x,p.y,p.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,r=t.count;e<r;e++)on.fromBufferAttribute(t,e),on.normalize(),t.setXYZ(e,on.x,on.y,on.z)}toNonIndexed(){function t(u,f){const h=u.array,p=u.itemSize,m=u.normalized,g=new h.constructor(f.length*p);let v=0,S=0;for(let T=0,x=f.length;T<x;T++){u.isInterleavedBufferAttribute?v=f[T]*u.data.stride+u.offset:v=f[T]*p;for(let _=0;_<p;_++)g[S++]=h[v++]}return new Si(g,p,m)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new bi,r=this.index.array,s=this.attributes;for(const u in s){const f=s[u],h=t(f,r);e.setAttribute(u,h)}const o=this.morphAttributes;for(const u in o){const f=[],h=o[u];for(let p=0,m=h.length;p<m;p++){const g=h[p],v=t(g,r);f.push(v)}e.morphAttributes[u]=f}e.morphTargetsRelative=this.morphTargetsRelative;const l=this.groups;for(let u=0,f=l.length;u<f;u++){const h=l[u];e.addGroup(h.start,h.count,h.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const f=this.parameters;for(const h in f)f[h]!==void 0&&(t[h]=f[h]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const r=this.attributes;for(const f in r){const h=r[f];t.data.attributes[f]=h.toJSON(t.data)}const s={};let o=!1;for(const f in this.morphAttributes){const h=this.morphAttributes[f],p=[];for(let m=0,g=h.length;m<g;m++){const v=h[m];p.push(v.toJSON(t.data))}p.length>0&&(s[f]=p,o=!0)}o&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const l=this.groups;l.length>0&&(t.data.groups=JSON.parse(JSON.stringify(l)));const u=this.boundingSphere;return u!==null&&(t.data.boundingSphere=u.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const r=t.index;r!==null&&this.setIndex(r.clone());const s=t.attributes;for(const h in s){const p=s[h];this.setAttribute(h,p.clone(e))}const o=t.morphAttributes;for(const h in o){const p=[],m=o[h];for(let g=0,v=m.length;g<v;g++)p.push(m[g].clone(e));this.morphAttributes[h]=p}this.morphTargetsRelative=t.morphTargetsRelative;const l=t.groups;for(let h=0,p=l.length;h<p;h++){const m=l[h];this.addGroup(m.start,m.count,m.materialIndex)}const u=t.boundingBox;u!==null&&(this.boundingBox=u.clone());const f=t.boundingSphere;return f!==null&&(this.boundingSphere=f.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const cp=new Ke,Pr=new nl,wo=new Ma,up=new q,Ro=new q,Co=new q,Po=new q,Xc=new q,Do=new q,hp=new q,Lo=new q;class Wi extends An{constructor(t=new bi,e=new ch){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,r=Object.keys(e);if(r.length>0){const s=e[r[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,l=s.length;o<l;o++){const u=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=o}}}}getVertexPosition(t,e){const r=this.geometry,s=r.attributes.position,o=r.morphAttributes.position,l=r.morphTargetsRelative;e.fromBufferAttribute(s,t);const u=this.morphTargetInfluences;if(o&&u){Do.set(0,0,0);for(let f=0,h=o.length;f<h;f++){const p=u[f],m=o[f];p!==0&&(Xc.fromBufferAttribute(m,t),l?Do.addScaledVector(Xc,p):Do.addScaledVector(Xc.sub(e),p))}e.add(Do)}return e}raycast(t,e){const r=this.geometry,s=this.material,o=this.matrixWorld;s!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),wo.copy(r.boundingSphere),wo.applyMatrix4(o),Pr.copy(t.ray).recast(t.near),!(wo.containsPoint(Pr.origin)===!1&&(Pr.intersectSphere(wo,up)===null||Pr.origin.distanceToSquared(up)>(t.far-t.near)**2))&&(cp.copy(o).invert(),Pr.copy(t.ray).applyMatrix4(cp),!(r.boundingBox!==null&&Pr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(t,e,Pr)))}_computeIntersections(t,e,r){let s;const o=this.geometry,l=this.material,u=o.index,f=o.attributes.position,h=o.attributes.uv,p=o.attributes.uv1,m=o.attributes.normal,g=o.groups,v=o.drawRange;if(u!==null)if(Array.isArray(l))for(let S=0,T=g.length;S<T;S++){const x=g[S],_=l[x.materialIndex],U=Math.max(x.start,v.start),L=Math.min(u.count,Math.min(x.start+x.count,v.start+v.count));for(let R=U,B=L;R<B;R+=3){const O=u.getX(R),N=u.getX(R+1),Y=u.getX(R+2);s=Io(this,_,t,r,h,p,m,O,N,Y),s&&(s.faceIndex=Math.floor(R/3),s.face.materialIndex=x.materialIndex,e.push(s))}}else{const S=Math.max(0,v.start),T=Math.min(u.count,v.start+v.count);for(let x=S,_=T;x<_;x+=3){const U=u.getX(x),L=u.getX(x+1),R=u.getX(x+2);s=Io(this,l,t,r,h,p,m,U,L,R),s&&(s.faceIndex=Math.floor(x/3),e.push(s))}}else if(f!==void 0)if(Array.isArray(l))for(let S=0,T=g.length;S<T;S++){const x=g[S],_=l[x.materialIndex],U=Math.max(x.start,v.start),L=Math.min(f.count,Math.min(x.start+x.count,v.start+v.count));for(let R=U,B=L;R<B;R+=3){const O=R,N=R+1,Y=R+2;s=Io(this,_,t,r,h,p,m,O,N,Y),s&&(s.faceIndex=Math.floor(R/3),s.face.materialIndex=x.materialIndex,e.push(s))}}else{const S=Math.max(0,v.start),T=Math.min(f.count,v.start+v.count);for(let x=S,_=T;x<_;x+=3){const U=x,L=x+1,R=x+2;s=Io(this,l,t,r,h,p,m,U,L,R),s&&(s.faceIndex=Math.floor(x/3),e.push(s))}}}}function wE(n,t,e,r,s,o,l,u){let f;if(t.side===In?f=r.intersectTriangle(l,o,s,!0,u):f=r.intersectTriangle(s,o,l,t.side===mr,u),f===null)return null;Lo.copy(u),Lo.applyMatrix4(n.matrixWorld);const h=e.ray.origin.distanceTo(Lo);return h<e.near||h>e.far?null:{distance:h,point:Lo.clone(),object:n}}function Io(n,t,e,r,s,o,l,u,f,h){n.getVertexPosition(u,Ro),n.getVertexPosition(f,Co),n.getVertexPosition(h,Po);const p=wE(n,t,e,r,Ro,Co,Po,hp);if(p){const m=new q;fi.getBarycoord(hp,Ro,Co,Po,m),s&&(p.uv=fi.getInterpolatedAttribute(s,u,f,h,m,new ne)),o&&(p.uv1=fi.getInterpolatedAttribute(o,u,f,h,m,new ne)),l&&(p.normal=fi.getInterpolatedAttribute(l,u,f,h,m,new q),p.normal.dot(r.direction)>0&&p.normal.multiplyScalar(-1));const g={a:u,b:f,c:h,normal:new q,materialIndex:0};fi.getNormal(Ro,Co,Po,g.normal),p.face=g,p.barycoord=m}return p}class ya extends bi{constructor(t=1,e=1,r=1,s=1,o=1,l=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:r,widthSegments:s,heightSegments:o,depthSegments:l};const u=this;s=Math.floor(s),o=Math.floor(o),l=Math.floor(l);const f=[],h=[],p=[],m=[];let g=0,v=0;S("z","y","x",-1,-1,r,e,t,l,o,0),S("z","y","x",1,-1,r,e,-t,l,o,1),S("x","z","y",1,1,t,r,e,s,l,2),S("x","z","y",1,-1,t,r,-e,s,l,3),S("x","y","z",1,-1,t,e,r,s,o,4),S("x","y","z",-1,-1,t,e,-r,s,o,5),this.setIndex(f),this.setAttribute("position",new Vn(h,3)),this.setAttribute("normal",new Vn(p,3)),this.setAttribute("uv",new Vn(m,2));function S(T,x,_,U,L,R,B,O,N,Y,C){const w=R/N,z=B/Y,$=R/2,Z=B/2,ot=O/2,it=N+1,lt=Y+1;let ft=0,Q=0;const Et=new q;for(let Rt=0;Rt<lt;Rt++){const It=Rt*z-Z;for(let le=0;le<it;le++){const we=le*w-$;Et[T]=we*U,Et[x]=It*L,Et[_]=ot,h.push(Et.x,Et.y,Et.z),Et[T]=0,Et[x]=0,Et[_]=O>0?1:-1,p.push(Et.x,Et.y,Et.z),m.push(le/N),m.push(1-Rt/Y),ft+=1}}for(let Rt=0;Rt<Y;Rt++)for(let It=0;It<N;It++){const le=g+It+it*Rt,we=g+It+it*(Rt+1),Ue=g+(It+1)+it*(Rt+1),de=g+(It+1)+it*Rt;f.push(le,we,de),f.push(we,Ue,de),Q+=6}u.addGroup(v,Q,C),v+=Q,g+=ft}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ya(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Is(n){const t={};for(const e in n){t[e]={};for(const r in n[e]){const s=n[e][r];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][r]=null):t[e][r]=s.clone():Array.isArray(s)?t[e][r]=s.slice():t[e][r]=s}}return t}function Tn(n){const t={};for(let e=0;e<n.length;e++){const r=Is(n[e]);for(const s in r)t[s]=r[s]}return t}function RE(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Sm(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Te.workingColorSpace}const CE={clone:Is,merge:Tn};var PE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,DE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ei extends wn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=PE,this.fragmentShader=DE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Is(t.uniforms),this.uniformsGroups=RE(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const l=this.uniforms[s].value;l&&l.isTexture?e.uniforms[s]={type:"t",value:l.toJSON(t).uuid}:l&&l.isColor?e.uniforms[s]={type:"c",value:l.getHex()}:l&&l.isVector2?e.uniforms[s]={type:"v2",value:l.toArray()}:l&&l.isVector3?e.uniforms[s]={type:"v3",value:l.toArray()}:l&&l.isVector4?e.uniforms[s]={type:"v4",value:l.toArray()}:l&&l.isMatrix3?e.uniforms[s]={type:"m3",value:l.toArray()}:l&&l.isMatrix4?e.uniforms[s]={type:"m4",value:l.toArray()}:e.uniforms[s]={value:l}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const r={};for(const s in this.extensions)this.extensions[s]===!0&&(r[s]=!0);return Object.keys(r).length>0&&(e.extensions=r),e}}class Em extends An{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ke,this.projectionMatrix=new Ke,this.projectionMatrixInverse=new Ke,this.coordinateSystem=yi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const lr=new q,fp=new ne,dp=new ne;class ti extends Em{constructor(t=50,e=1,r=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=r,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=_a*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(oa*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return _a*2*Math.atan(Math.tan(oa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,r){lr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(lr.x,lr.y).multiplyScalar(-t/lr.z),lr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(lr.x,lr.y).multiplyScalar(-t/lr.z)}getViewSize(t,e){return this.getViewBounds(t,fp,dp),e.subVectors(dp,fp)}setViewOffset(t,e,r,s,o,l){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=r,this.view.offsetY=s,this.view.width=o,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(oa*.5*this.fov)/this.zoom,r=2*e,s=this.aspect*r,o=-.5*s;const l=this.view;if(this.view!==null&&this.view.enabled){const f=l.fullWidth,h=l.fullHeight;o+=l.offsetX*s/f,e-=l.offsetY*r/h,s*=l.width/f,r*=l.height/h}const u=this.filmOffset;u!==0&&(o+=t*u/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+s,e,e-r,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const xs=-90,Ms=1;class LE extends An{constructor(t,e,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new ti(xs,Ms,t,e);s.layers=this.layers,this.add(s);const o=new ti(xs,Ms,t,e);o.layers=this.layers,this.add(o);const l=new ti(xs,Ms,t,e);l.layers=this.layers,this.add(l);const u=new ti(xs,Ms,t,e);u.layers=this.layers,this.add(u);const f=new ti(xs,Ms,t,e);f.layers=this.layers,this.add(f);const h=new ti(xs,Ms,t,e);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[r,s,o,l,u,f]=e;for(const h of e)this.remove(h);if(t===yi)r.up.set(0,1,0),r.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),l.up.set(0,0,1),l.lookAt(0,-1,0),u.up.set(0,1,0),u.lookAt(0,0,1),f.up.set(0,1,0),f.lookAt(0,0,-1);else if(t===Ko)r.up.set(0,-1,0),r.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),l.up.set(0,0,-1),l.lookAt(0,-1,0),u.up.set(0,-1,0),u.lookAt(0,0,1),f.up.set(0,-1,0),f.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const h of e)this.add(h),h.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[o,l,u,f,h,p]=this.children,m=t.getRenderTarget(),g=t.getActiveCubeFace(),v=t.getActiveMipmapLevel(),S=t.xr.enabled;t.xr.enabled=!1;const T=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,t.setRenderTarget(r,0,s),t.render(e,o),t.setRenderTarget(r,1,s),t.render(e,l),t.setRenderTarget(r,2,s),t.render(e,u),t.setRenderTarget(r,3,s),t.render(e,f),t.setRenderTarget(r,4,s),t.render(e,h),r.texture.generateMipmaps=T,t.setRenderTarget(r,5,s),t.render(e,p),t.setRenderTarget(m,g,v),t.xr.enabled=S,r.texture.needsPMREMUpdate=!0}}class bm extends hn{constructor(t=[],e=Ps,r,s,o,l,u,f,h,p){super(t,e,r,s,o,l,u,f,h,p),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class IE extends Vr{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const r={width:t,height:t,depth:1},s=[r,r,r,r,r,r];this.texture=new bm(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new ya(5,5,5),o=new Ei({name:"CubemapFromEquirect",uniforms:Is(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:In,blending:fr});o.uniforms.tEquirect.value=e;const l=new Wi(s,o),u=e.minFilter;return e.minFilter===Br&&(e.minFilter=xi),new LE(1,10,this).update(t,l),e.minFilter=u,l.geometry.dispose(),l.material.dispose(),this}clear(t,e=!0,r=!0,s=!0){const o=t.getRenderTarget();for(let l=0;l<6;l++)t.setRenderTarget(this,l),t.clear(e,r,s);t.setRenderTarget(o)}}class sa extends An{constructor(){super(),this.isGroup=!0,this.type="Group"}}const UE={type:"move"};class qc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new sa,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new sa,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new sa,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new q),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const r of t.hand.values())this._getHandJoint(e,r)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,r){let s=null,o=null,l=null;const u=this._targetRay,f=this._grip,h=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(h&&t.hand){l=!0;for(const T of t.hand.values()){const x=e.getJointPose(T,r),_=this._getHandJoint(h,T);x!==null&&(_.matrix.fromArray(x.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=x.radius),_.visible=x!==null}const p=h.joints["index-finger-tip"],m=h.joints["thumb-tip"],g=p.position.distanceTo(m.position),v=.02,S=.005;h.inputState.pinching&&g>v+S?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!h.inputState.pinching&&g<=v-S&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else f!==null&&t.gripSpace&&(o=e.getPose(t.gripSpace,r),o!==null&&(f.matrix.fromArray(o.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,o.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(o.linearVelocity)):f.hasLinearVelocity=!1,o.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(o.angularVelocity)):f.hasAngularVelocity=!1));u!==null&&(s=e.getPose(t.targetRaySpace,r),s===null&&o!==null&&(s=o),s!==null&&(u.matrix.fromArray(s.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,s.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(s.linearVelocity)):u.hasLinearVelocity=!1,s.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(s.angularVelocity)):u.hasAngularVelocity=!1,this.dispatchEvent(UE)))}return u!==null&&(u.visible=s!==null),f!==null&&(f.visible=o!==null),h!==null&&(h.visible=l!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const r=new sa;r.matrixAutoUpdate=!1,r.visible=!1,t.joints[e.jointName]=r,t.add(r)}return t.joints[e.jointName]}}class uh{constructor(t,e=1,r=1e3){this.isFog=!0,this.name="",this.color=new jt(t),this.near=e,this.far=r}clone(){return new uh(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class NE extends An{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ei,this.environmentIntensity=1,this.environmentRotation=new ei,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class FE extends wn{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new jt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Yc=new q,OE=new q,BE=new oe;class cr{constructor(t=new q(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,r,s){return this.normal.set(t,e,r),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,r){const s=Yc.subVectors(r,e).cross(OE.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const r=t.delta(Yc),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const o=-(t.start.dot(this.normal)+this.constant)/s;return o<0||o>1?null:e.copy(t.start).addScaledVector(r,o)}intersectsLine(t){const e=this.distanceToPoint(t.start),r=this.distanceToPoint(t.end);return e<0&&r>0||r<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const r=e||BE.getNormalMatrix(t),s=this.coplanarPoint(Yc).applyMatrix4(t),o=this.normal.applyMatrix3(r).normalize();return this.constant=-s.dot(o),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Dr=new Ma,zE=new ne(.5,.5),Uo=new q;class Tm{constructor(t=new cr,e=new cr,r=new cr,s=new cr,o=new cr,l=new cr){this.planes=[t,e,r,s,o,l]}set(t,e,r,s,o,l){const u=this.planes;return u[0].copy(t),u[1].copy(e),u[2].copy(r),u[3].copy(s),u[4].copy(o),u[5].copy(l),this}copy(t){const e=this.planes;for(let r=0;r<6;r++)e[r].copy(t.planes[r]);return this}setFromProjectionMatrix(t,e=yi,r=!1){const s=this.planes,o=t.elements,l=o[0],u=o[1],f=o[2],h=o[3],p=o[4],m=o[5],g=o[6],v=o[7],S=o[8],T=o[9],x=o[10],_=o[11],U=o[12],L=o[13],R=o[14],B=o[15];if(s[0].setComponents(h-l,v-p,_-S,B-U).normalize(),s[1].setComponents(h+l,v+p,_+S,B+U).normalize(),s[2].setComponents(h+u,v+m,_+T,B+L).normalize(),s[3].setComponents(h-u,v-m,_-T,B-L).normalize(),r)s[4].setComponents(f,g,x,R).normalize(),s[5].setComponents(h-f,v-g,_-x,B-R).normalize();else if(s[4].setComponents(h-f,v-g,_-x,B-R).normalize(),e===yi)s[5].setComponents(h+f,v+g,_+x,B+R).normalize();else if(e===Ko)s[5].setComponents(f,g,x,R).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Dr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Dr.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Dr)}intersectsSprite(t){Dr.center.set(0,0,0);const e=zE.distanceTo(t.center);return Dr.radius=.7071067811865476+e,Dr.applyMatrix4(t.matrixWorld),this.intersectsSphere(Dr)}intersectsSphere(t){const e=this.planes,r=t.center,s=-t.radius;for(let o=0;o<6;o++)if(e[o].distanceToPoint(r)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let r=0;r<6;r++){const s=e[r];if(Uo.x=s.normal.x>0?t.max.x:t.min.x,Uo.y=s.normal.y>0?t.max.y:t.min.y,Uo.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Uo)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let r=0;r<6;r++)if(e[r].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class il extends wn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new jt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const jo=new q,Jo=new q,pp=new Ke,ra=new nl,No=new Ma,Zc=new q,mp=new q;class kE extends An{constructor(t=new bi,e=new il){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,r=[0];for(let s=1,o=e.count;s<o;s++)jo.fromBufferAttribute(e,s-1),Jo.fromBufferAttribute(e,s),r[s]=r[s-1],r[s]+=jo.distanceTo(Jo);t.setAttribute("lineDistance",new Vn(r,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const r=this.geometry,s=this.matrixWorld,o=t.params.Line.threshold,l=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),No.copy(r.boundingSphere),No.applyMatrix4(s),No.radius+=o,t.ray.intersectsSphere(No)===!1)return;pp.copy(s).invert(),ra.copy(t.ray).applyMatrix4(pp);const u=o/((this.scale.x+this.scale.y+this.scale.z)/3),f=u*u,h=this.isLineSegments?2:1,p=r.index,g=r.attributes.position;if(p!==null){const v=Math.max(0,l.start),S=Math.min(p.count,l.start+l.count);for(let T=v,x=S-1;T<x;T+=h){const _=p.getX(T),U=p.getX(T+1),L=Fo(this,t,ra,f,_,U,T);L&&e.push(L)}if(this.isLineLoop){const T=p.getX(S-1),x=p.getX(v),_=Fo(this,t,ra,f,T,x,S-1);_&&e.push(_)}}else{const v=Math.max(0,l.start),S=Math.min(g.count,l.start+l.count);for(let T=v,x=S-1;T<x;T+=h){const _=Fo(this,t,ra,f,T,T+1,T);_&&e.push(_)}if(this.isLineLoop){const T=Fo(this,t,ra,f,S-1,v,S-1);T&&e.push(T)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,r=Object.keys(e);if(r.length>0){const s=e[r[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,l=s.length;o<l;o++){const u=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=o}}}}}function Fo(n,t,e,r,s,o,l){const u=n.geometry.attributes.position;if(jo.fromBufferAttribute(u,s),Jo.fromBufferAttribute(u,o),e.distanceSqToSegment(jo,Jo,Zc,mp)>r)return;Zc.applyMatrix4(n.matrixWorld);const h=t.ray.origin.distanceTo(Zc);if(!(h<t.near||h>t.far))return{distance:h,point:mp.clone().applyMatrix4(n.matrixWorld),index:l,face:null,faceIndex:null,barycoord:null,object:n}}const _p=new q,gp=new q;class HE extends kE{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,r=[];for(let s=0,o=e.count;s<o;s+=2)_p.fromBufferAttribute(e,s),gp.fromBufferAttribute(e,s+1),r[s]=s===0?0:r[s-1],r[s+1]=r[s]+_p.distanceTo(gp);t.setAttribute("lineDistance",new Vn(r,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Am extends wn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new jt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const vp=new Ke,Zu=new nl,Oo=new Ma,Bo=new q;class VE extends An{constructor(t=new bi,e=new Am){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const r=this.geometry,s=this.matrixWorld,o=t.params.Points.threshold,l=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Oo.copy(r.boundingSphere),Oo.applyMatrix4(s),Oo.radius+=o,t.ray.intersectsSphere(Oo)===!1)return;vp.copy(s).invert(),Zu.copy(t.ray).applyMatrix4(vp);const u=o/((this.scale.x+this.scale.y+this.scale.z)/3),f=u*u,h=r.index,m=r.attributes.position;if(h!==null){const g=Math.max(0,l.start),v=Math.min(h.count,l.start+l.count);for(let S=g,T=v;S<T;S++){const x=h.getX(S);Bo.fromBufferAttribute(m,x),xp(Bo,x,f,s,t,e,this)}}else{const g=Math.max(0,l.start),v=Math.min(m.count,l.start+l.count);for(let S=g,T=v;S<T;S++)Bo.fromBufferAttribute(m,S),xp(Bo,S,f,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,r=Object.keys(e);if(r.length>0){const s=e[r[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,l=s.length;o<l;o++){const u=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=o}}}}}function xp(n,t,e,r,s,o,l){const u=Zu.distanceSqToPoint(n);if(u<e){const f=new q;Zu.closestPointToPoint(n,f),f.applyMatrix4(r);const h=s.ray.origin.distanceTo(f);if(h<s.near||h>s.far)return;o.push({distance:h,distanceToRay:Math.sqrt(u),point:f,index:t,face:null,faceIndex:null,barycoord:null,object:l})}}class wm extends hn{constructor(t,e,r=kr,s,o,l,u=pi,f=pi,h,p=pa,m=1){if(p!==pa&&p!==ma)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:t,height:e,depth:m};super(g,s,o,l,u,f,p,r,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new lh(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Rm extends hn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class rl extends bi{constructor(t=1,e=1,r=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:r,heightSegments:s};const o=t/2,l=e/2,u=Math.floor(r),f=Math.floor(s),h=u+1,p=f+1,m=t/u,g=e/f,v=[],S=[],T=[],x=[];for(let _=0;_<p;_++){const U=_*g-l;for(let L=0;L<h;L++){const R=L*m-o;S.push(R,-U,0),T.push(0,0,1),x.push(L/u),x.push(1-_/f)}}for(let _=0;_<f;_++)for(let U=0;U<u;U++){const L=U+h*_,R=U+h*(_+1),B=U+1+h*(_+1),O=U+1+h*_;v.push(L,R,O),v.push(R,B,O)}this.setIndex(v),this.setAttribute("position",new Vn(S,3)),this.setAttribute("normal",new Vn(T,3)),this.setAttribute("uv",new Vn(x,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new rl(t.width,t.height,t.widthSegments,t.heightSegments)}}class GE extends wn{constructor(t){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new jt(0),this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.fog=t.fog,this}}class WE extends Ei{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Cm extends wn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new jt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new jt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Gr,this.normalScale=new ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ei,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class XE extends Cm{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ne(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return me(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new jt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new jt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new jt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class qE extends wn{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new jt(16777215),this.specular=new jt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new jt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Gr,this.normalScale=new ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ei,this.combine=tl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class YE extends wn{constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new jt(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new jt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Gr,this.normalScale=new ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}class ZE extends wn{constructor(t){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Gr,this.normalScale=new ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.flatShading=t.flatShading,this}}class KE extends wn{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new jt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new jt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Gr,this.normalScale=new ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ei,this.combine=tl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Pm extends wn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=OS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Dm extends wn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class $E extends wn{constructor(t){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new jt(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Gr,this.normalScale=new ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={MATCAP:""},this.color.copy(t.color),this.matcap=t.matcap,this.map=t.map,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.flatShading=t.flatShading,this.fog=t.fog,this}}class jE extends il{constructor(t){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(t)}copy(t){return super.copy(t),this.scale=t.scale,this.dashSize=t.dashSize,this.gapSize=t.gapSize,this}}const Mp={enabled:!1,files:{},add:function(n,t){this.enabled!==!1&&(this.files[n]=t)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class JE{constructor(t,e,r){const s=this;let o=!1,l=0,u=0,f;const h=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=r,this.abortController=new AbortController,this.itemStart=function(p){u++,o===!1&&s.onStart!==void 0&&s.onStart(p,l,u),o=!0},this.itemEnd=function(p){l++,s.onProgress!==void 0&&s.onProgress(p,l,u),l===u&&(o=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(p){s.onError!==void 0&&s.onError(p)},this.resolveURL=function(p){return f?f(p):p},this.setURLModifier=function(p){return f=p,this},this.addHandler=function(p,m){return h.push(p,m),this},this.removeHandler=function(p){const m=h.indexOf(p);return m!==-1&&h.splice(m,2),this},this.getHandler=function(p){for(let m=0,g=h.length;m<g;m+=2){const v=h[m],S=h[m+1];if(v.global&&(v.lastIndex=0),v.test(p))return S}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const QE=new JE;class sl{constructor(t){this.manager=t!==void 0?t:QE,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const r=this;return new Promise(function(s,o){r.load(t,s,e,o)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}sl.DEFAULT_MATERIAL_NAME="__DEFAULT";const Hi={};class tb extends Error{constructor(t,e){super(t),this.response=e}}class Lm extends sl{constructor(t){super(t),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(t,e,r,s){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const o=Mp.get(`file:${t}`);if(o!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(o),this.manager.itemEnd(t)},0),o;if(Hi[t]!==void 0){Hi[t].push({onLoad:e,onProgress:r,onError:s});return}Hi[t]=[],Hi[t].push({onLoad:e,onProgress:r,onError:s});const l=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),u=this.mimeType,f=this.responseType;fetch(l).then(h=>{if(h.status===200||h.status===0){if(h.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||h.body===void 0||h.body.getReader===void 0)return h;const p=Hi[t],m=h.body.getReader(),g=h.headers.get("X-File-Size")||h.headers.get("Content-Length"),v=g?parseInt(g):0,S=v!==0;let T=0;const x=new ReadableStream({start(_){U();function U(){m.read().then(({done:L,value:R})=>{if(L)_.close();else{T+=R.byteLength;const B=new ProgressEvent("progress",{lengthComputable:S,loaded:T,total:v});for(let O=0,N=p.length;O<N;O++){const Y=p[O];Y.onProgress&&Y.onProgress(B)}_.enqueue(R),U()}},L=>{_.error(L)})}}});return new Response(x)}else throw new tb(`fetch for "${h.url}" responded with ${h.status}: ${h.statusText}`,h)}).then(h=>{switch(f){case"arraybuffer":return h.arrayBuffer();case"blob":return h.blob();case"document":return h.text().then(p=>new DOMParser().parseFromString(p,u));case"json":return h.json();default:if(u==="")return h.text();{const m=/charset="?([^;"\s]*)"?/i.exec(u),g=m&&m[1]?m[1].toLowerCase():void 0,v=new TextDecoder(g);return h.arrayBuffer().then(S=>v.decode(S))}}}).then(h=>{Mp.add(`file:${t}`,h);const p=Hi[t];delete Hi[t];for(let m=0,g=p.length;m<g;m++){const v=p[m];v.onLoad&&v.onLoad(h)}}).catch(h=>{const p=Hi[t];if(p===void 0)throw this.manager.itemError(t),h;delete Hi[t];for(let m=0,g=p.length;m<g;m++){const v=p[m];v.onError&&v.onError(h)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class eb extends Em{constructor(t=-1,e=1,r=1,s=-1,o=.1,l=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=r,this.bottom=s,this.near=o,this.far=l,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,r,s,o,l){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=r,this.view.offsetY=s,this.view.width=o,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let o=r-t,l=r+t,u=s+e,f=s-e;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=h*this.view.offsetX,l=o+h*this.view.width,u-=p*this.view.offsetY,f=u-p*this.view.height}this.projectionMatrix.makeOrthographic(o,l,u,f,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class hh extends sl{constructor(t){super(t),this.textures={}}load(t,e,r,s){const o=this,l=new Lm(o.manager);l.setPath(o.path),l.setRequestHeader(o.requestHeader),l.setWithCredentials(o.withCredentials),l.load(t,function(u){try{e(o.parse(JSON.parse(u)))}catch(f){s?s(f):console.error(f),o.manager.itemError(t)}},r,s)}parse(t){const e=this.textures;function r(o){return e[o]===void 0&&console.warn("THREE.MaterialLoader: Undefined texture",o),e[o]}const s=this.createMaterialFromType(t.type);if(t.uuid!==void 0&&(s.uuid=t.uuid),t.name!==void 0&&(s.name=t.name),t.color!==void 0&&s.color!==void 0&&s.color.setHex(t.color),t.roughness!==void 0&&(s.roughness=t.roughness),t.metalness!==void 0&&(s.metalness=t.metalness),t.sheen!==void 0&&(s.sheen=t.sheen),t.sheenColor!==void 0&&(s.sheenColor=new jt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(s.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&s.emissive!==void 0&&s.emissive.setHex(t.emissive),t.specular!==void 0&&s.specular!==void 0&&s.specular.setHex(t.specular),t.specularIntensity!==void 0&&(s.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&s.specularColor!==void 0&&s.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(s.shininess=t.shininess),t.clearcoat!==void 0&&(s.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(s.dispersion=t.dispersion),t.iridescence!==void 0&&(s.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(s.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(s.transmission=t.transmission),t.thickness!==void 0&&(s.thickness=t.thickness),t.attenuationDistance!==void 0&&(s.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&s.attenuationColor!==void 0&&s.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(s.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(s.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(s.fog=t.fog),t.flatShading!==void 0&&(s.flatShading=t.flatShading),t.blending!==void 0&&(s.blending=t.blending),t.combine!==void 0&&(s.combine=t.combine),t.side!==void 0&&(s.side=t.side),t.shadowSide!==void 0&&(s.shadowSide=t.shadowSide),t.opacity!==void 0&&(s.opacity=t.opacity),t.transparent!==void 0&&(s.transparent=t.transparent),t.alphaTest!==void 0&&(s.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(s.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(s.depthFunc=t.depthFunc),t.depthTest!==void 0&&(s.depthTest=t.depthTest),t.depthWrite!==void 0&&(s.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(s.colorWrite=t.colorWrite),t.blendSrc!==void 0&&(s.blendSrc=t.blendSrc),t.blendDst!==void 0&&(s.blendDst=t.blendDst),t.blendEquation!==void 0&&(s.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(s.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(s.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(s.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&s.blendColor!==void 0&&s.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(s.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(s.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(s.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(s.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(s.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(s.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(s.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(s.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(s.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(s.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(s.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(s.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(s.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(s.rotation=t.rotation),t.linewidth!==void 0&&(s.linewidth=t.linewidth),t.dashSize!==void 0&&(s.dashSize=t.dashSize),t.gapSize!==void 0&&(s.gapSize=t.gapSize),t.scale!==void 0&&(s.scale=t.scale),t.polygonOffset!==void 0&&(s.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(s.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(s.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(s.dithering=t.dithering),t.alphaToCoverage!==void 0&&(s.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(s.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(s.forceSinglePass=t.forceSinglePass),t.visible!==void 0&&(s.visible=t.visible),t.toneMapped!==void 0&&(s.toneMapped=t.toneMapped),t.userData!==void 0&&(s.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?s.vertexColors=t.vertexColors>0:s.vertexColors=t.vertexColors),t.uniforms!==void 0)for(const o in t.uniforms){const l=t.uniforms[o];switch(s.uniforms[o]={},l.type){case"t":s.uniforms[o].value=r(l.value);break;case"c":s.uniforms[o].value=new jt().setHex(l.value);break;case"v2":s.uniforms[o].value=new ne().fromArray(l.value);break;case"v3":s.uniforms[o].value=new q().fromArray(l.value);break;case"v4":s.uniforms[o].value=new Ze().fromArray(l.value);break;case"m3":s.uniforms[o].value=new oe().fromArray(l.value);break;case"m4":s.uniforms[o].value=new Ke().fromArray(l.value);break;default:s.uniforms[o].value=l.value}}if(t.defines!==void 0&&(s.defines=t.defines),t.vertexShader!==void 0&&(s.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(s.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(s.glslVersion=t.glslVersion),t.extensions!==void 0)for(const o in t.extensions)s.extensions[o]=t.extensions[o];if(t.lights!==void 0&&(s.lights=t.lights),t.clipping!==void 0&&(s.clipping=t.clipping),t.size!==void 0&&(s.size=t.size),t.sizeAttenuation!==void 0&&(s.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(s.map=r(t.map)),t.matcap!==void 0&&(s.matcap=r(t.matcap)),t.alphaMap!==void 0&&(s.alphaMap=r(t.alphaMap)),t.bumpMap!==void 0&&(s.bumpMap=r(t.bumpMap)),t.bumpScale!==void 0&&(s.bumpScale=t.bumpScale),t.normalMap!==void 0&&(s.normalMap=r(t.normalMap)),t.normalMapType!==void 0&&(s.normalMapType=t.normalMapType),t.normalScale!==void 0){let o=t.normalScale;Array.isArray(o)===!1&&(o=[o,o]),s.normalScale=new ne().fromArray(o)}return t.displacementMap!==void 0&&(s.displacementMap=r(t.displacementMap)),t.displacementScale!==void 0&&(s.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(s.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(s.roughnessMap=r(t.roughnessMap)),t.metalnessMap!==void 0&&(s.metalnessMap=r(t.metalnessMap)),t.emissiveMap!==void 0&&(s.emissiveMap=r(t.emissiveMap)),t.emissiveIntensity!==void 0&&(s.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(s.specularMap=r(t.specularMap)),t.specularIntensityMap!==void 0&&(s.specularIntensityMap=r(t.specularIntensityMap)),t.specularColorMap!==void 0&&(s.specularColorMap=r(t.specularColorMap)),t.envMap!==void 0&&(s.envMap=r(t.envMap)),t.envMapRotation!==void 0&&s.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(s.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(s.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(s.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(s.lightMap=r(t.lightMap)),t.lightMapIntensity!==void 0&&(s.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(s.aoMap=r(t.aoMap)),t.aoMapIntensity!==void 0&&(s.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(s.gradientMap=r(t.gradientMap)),t.clearcoatMap!==void 0&&(s.clearcoatMap=r(t.clearcoatMap)),t.clearcoatRoughnessMap!==void 0&&(s.clearcoatRoughnessMap=r(t.clearcoatRoughnessMap)),t.clearcoatNormalMap!==void 0&&(s.clearcoatNormalMap=r(t.clearcoatNormalMap)),t.clearcoatNormalScale!==void 0&&(s.clearcoatNormalScale=new ne().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(s.iridescenceMap=r(t.iridescenceMap)),t.iridescenceThicknessMap!==void 0&&(s.iridescenceThicknessMap=r(t.iridescenceThicknessMap)),t.transmissionMap!==void 0&&(s.transmissionMap=r(t.transmissionMap)),t.thicknessMap!==void 0&&(s.thicknessMap=r(t.thicknessMap)),t.anisotropyMap!==void 0&&(s.anisotropyMap=r(t.anisotropyMap)),t.sheenColorMap!==void 0&&(s.sheenColorMap=r(t.sheenColorMap)),t.sheenRoughnessMap!==void 0&&(s.sheenRoughnessMap=r(t.sheenRoughnessMap)),s}setTextures(t){return this.textures=t,this}createMaterialFromType(t){return hh.createMaterialFromType(t)}static createMaterialFromType(t){const e={ShadowMaterial:GE,SpriteMaterial:FE,RawShaderMaterial:WE,ShaderMaterial:Ei,PointsMaterial:Am,MeshPhysicalMaterial:XE,MeshStandardMaterial:Cm,MeshPhongMaterial:qE,MeshToonMaterial:YE,MeshNormalMaterial:ZE,MeshLambertMaterial:KE,MeshDepthMaterial:Pm,MeshDistanceMaterial:Dm,MeshBasicMaterial:ch,MeshMatcapMaterial:$E,LineDashedMaterial:jE,LineBasicMaterial:il,Material:wn};return new e[t]}}class nb extends ti{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class ib{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=performance.now();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}class yp{constructor(t=1,e=0,r=0){this.radius=t,this.phi=e,this.theta=r}set(t,e,r){return this.radius=t,this.phi=e,this.theta=r,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=me(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,r){return this.radius=Math.sqrt(t*t+e*e+r*r),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,r),this.phi=Math.acos(me(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class rb extends HE{constructor(t=10,e=10,r=4473924,s=8947848){r=new jt(r),s=new jt(s);const o=e/2,l=t/e,u=t/2,f=[],h=[];for(let g=0,v=0,S=-u;g<=e;g++,S+=l){f.push(-u,0,S,u,0,S),f.push(S,0,-u,S,0,u);const T=g===o?r:s;T.toArray(h,v),v+=3,T.toArray(h,v),v+=3,T.toArray(h,v),v+=3,T.toArray(h,v),v+=3}const p=new bi;p.setAttribute("position",new Vn(f,3)),p.setAttribute("color",new Vn(h,3));const m=new il({vertexColors:!0,toneMapped:!1});super(p,m),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class sb extends Wr{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function Sp(n,t,e,r){const s=ab(r);switch(e){case um:return n*t;case fm:return n*t/s.components*s.byteLength;case rh:return n*t/s.components*s.byteLength;case dm:return n*t*2/s.components*s.byteLength;case sh:return n*t*2/s.components*s.byteLength;case hm:return n*t*3/s.components*s.byteLength;case di:return n*t*4/s.components*s.byteLength;case ah:return n*t*4/s.components*s.byteLength;case Go:case Wo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Xo:case qo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case yu:case Eu:return Math.max(n,16)*Math.max(t,8)/4;case Mu:case Su:return Math.max(n,8)*Math.max(t,8)/2;case bu:case Tu:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Au:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case wu:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Ru:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Cu:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case Pu:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Du:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Lu:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case Iu:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Uu:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Nu:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Fu:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Ou:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Bu:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case zu:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case ku:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case Hu:case Vu:case Gu:return Math.ceil(n/4)*Math.ceil(t/4)*16;case Wu:case Xu:return Math.ceil(n/4)*Math.ceil(t/4)*8;case qu:case Yu:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function ab(n){switch(n){case qi:case am:return{byteLength:1,components:1};case fa:case om:case va:return{byteLength:2,components:1};case nh:case ih:return{byteLength:2,components:4};case kr:case eh:case Mi:return{byteLength:4,components:1};case lm:case cm:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:th}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=th);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Im(){let n=null,t=!1,e=null,r=null;function s(o,l){e(o,l),r=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(r=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(o){e=o},setContext:function(o){n=o}}}function ob(n){const t=new WeakMap;function e(u,f){const h=u.array,p=u.usage,m=h.byteLength,g=n.createBuffer();n.bindBuffer(f,g),n.bufferData(f,h,p),u.onUploadCallback();let v;if(h instanceof Float32Array)v=n.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)v=n.HALF_FLOAT;else if(h instanceof Uint16Array)u.isFloat16BufferAttribute?v=n.HALF_FLOAT:v=n.UNSIGNED_SHORT;else if(h instanceof Int16Array)v=n.SHORT;else if(h instanceof Uint32Array)v=n.UNSIGNED_INT;else if(h instanceof Int32Array)v=n.INT;else if(h instanceof Int8Array)v=n.BYTE;else if(h instanceof Uint8Array)v=n.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)v=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:g,type:v,bytesPerElement:h.BYTES_PER_ELEMENT,version:u.version,size:m}}function r(u,f,h){const p=f.array,m=f.updateRanges;if(n.bindBuffer(h,u),m.length===0)n.bufferSubData(h,0,p);else{m.sort((v,S)=>v.start-S.start);let g=0;for(let v=1;v<m.length;v++){const S=m[g],T=m[v];T.start<=S.start+S.count+1?S.count=Math.max(S.count,T.start+T.count-S.start):(++g,m[g]=T)}m.length=g+1;for(let v=0,S=m.length;v<S;v++){const T=m[v];n.bufferSubData(h,T.start*p.BYTES_PER_ELEMENT,p,T.start,T.count)}f.clearUpdateRanges()}f.onUploadCallback()}function s(u){return u.isInterleavedBufferAttribute&&(u=u.data),t.get(u)}function o(u){u.isInterleavedBufferAttribute&&(u=u.data);const f=t.get(u);f&&(n.deleteBuffer(f.buffer),t.delete(u))}function l(u,f){if(u.isInterleavedBufferAttribute&&(u=u.data),u.isGLBufferAttribute){const p=t.get(u);(!p||p.version<u.version)&&t.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}const h=t.get(u);if(h===void 0)t.set(u,e(u,f));else if(h.version<u.version){if(h.size!==u.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(h.buffer,u,f),h.version=u.version}}return{get:s,remove:o,update:l}}var lb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,cb=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,ub=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,hb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,fb=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,db=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,pb=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,mb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,_b=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,gb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,vb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,xb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Mb=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,yb=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Sb=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Eb=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,bb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Tb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ab=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,wb=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Rb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Cb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Pb=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Db=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Lb=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Ib=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Ub=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Nb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Fb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ob=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Bb="gl_FragColor = linearToOutputTexel( gl_FragColor );",zb=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,kb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Hb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Vb=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Gb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Wb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Xb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,qb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Yb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Zb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Kb=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,$b=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,jb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Jb=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Qb=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,tT=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,eT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,nT=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,iT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,rT=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,sT=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,aT=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,oT=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lT=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,cT=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,uT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,hT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,dT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,pT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,mT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,_T=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,gT=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,vT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,xT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,MT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,yT=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ST=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ET=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,bT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,TT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,AT=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,wT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,RT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,CT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,PT=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,DT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,LT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,IT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,UT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,NT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,FT=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,OT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,BT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,zT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,kT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,HT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,VT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,GT=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,WT=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,XT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,qT=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,YT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ZT=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,KT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,$T=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,jT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,JT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,QT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tA=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,eA=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,nA=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,iA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,rA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,sA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,aA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const oA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,lA=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,uA=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dA=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,pA=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,mA=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,_A=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,gA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,vA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xA=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,MA=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,yA=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,SA=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,EA=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bA=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,TA=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,AA=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wA=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,RA=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,CA=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,PA=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,DA=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,LA=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,IA=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,UA=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,NA=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,FA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,OA=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,BA=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,zA=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,kA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,fe={alphahash_fragment:lb,alphahash_pars_fragment:cb,alphamap_fragment:ub,alphamap_pars_fragment:hb,alphatest_fragment:fb,alphatest_pars_fragment:db,aomap_fragment:pb,aomap_pars_fragment:mb,batching_pars_vertex:_b,batching_vertex:gb,begin_vertex:vb,beginnormal_vertex:xb,bsdfs:Mb,iridescence_fragment:yb,bumpmap_pars_fragment:Sb,clipping_planes_fragment:Eb,clipping_planes_pars_fragment:bb,clipping_planes_pars_vertex:Tb,clipping_planes_vertex:Ab,color_fragment:wb,color_pars_fragment:Rb,color_pars_vertex:Cb,color_vertex:Pb,common:Db,cube_uv_reflection_fragment:Lb,defaultnormal_vertex:Ib,displacementmap_pars_vertex:Ub,displacementmap_vertex:Nb,emissivemap_fragment:Fb,emissivemap_pars_fragment:Ob,colorspace_fragment:Bb,colorspace_pars_fragment:zb,envmap_fragment:kb,envmap_common_pars_fragment:Hb,envmap_pars_fragment:Vb,envmap_pars_vertex:Gb,envmap_physical_pars_fragment:tT,envmap_vertex:Wb,fog_vertex:Xb,fog_pars_vertex:qb,fog_fragment:Yb,fog_pars_fragment:Zb,gradientmap_pars_fragment:Kb,lightmap_pars_fragment:$b,lights_lambert_fragment:jb,lights_lambert_pars_fragment:Jb,lights_pars_begin:Qb,lights_toon_fragment:eT,lights_toon_pars_fragment:nT,lights_phong_fragment:iT,lights_phong_pars_fragment:rT,lights_physical_fragment:sT,lights_physical_pars_fragment:aT,lights_fragment_begin:oT,lights_fragment_maps:lT,lights_fragment_end:cT,logdepthbuf_fragment:uT,logdepthbuf_pars_fragment:hT,logdepthbuf_pars_vertex:fT,logdepthbuf_vertex:dT,map_fragment:pT,map_pars_fragment:mT,map_particle_fragment:_T,map_particle_pars_fragment:gT,metalnessmap_fragment:vT,metalnessmap_pars_fragment:xT,morphinstance_vertex:MT,morphcolor_vertex:yT,morphnormal_vertex:ST,morphtarget_pars_vertex:ET,morphtarget_vertex:bT,normal_fragment_begin:TT,normal_fragment_maps:AT,normal_pars_fragment:wT,normal_pars_vertex:RT,normal_vertex:CT,normalmap_pars_fragment:PT,clearcoat_normal_fragment_begin:DT,clearcoat_normal_fragment_maps:LT,clearcoat_pars_fragment:IT,iridescence_pars_fragment:UT,opaque_fragment:NT,packing:FT,premultiplied_alpha_fragment:OT,project_vertex:BT,dithering_fragment:zT,dithering_pars_fragment:kT,roughnessmap_fragment:HT,roughnessmap_pars_fragment:VT,shadowmap_pars_fragment:GT,shadowmap_pars_vertex:WT,shadowmap_vertex:XT,shadowmask_pars_fragment:qT,skinbase_vertex:YT,skinning_pars_vertex:ZT,skinning_vertex:KT,skinnormal_vertex:$T,specularmap_fragment:jT,specularmap_pars_fragment:JT,tonemapping_fragment:QT,tonemapping_pars_fragment:tA,transmission_fragment:eA,transmission_pars_fragment:nA,uv_pars_fragment:iA,uv_pars_vertex:rA,uv_vertex:sA,worldpos_vertex:aA,background_vert:oA,background_frag:lA,backgroundCube_vert:cA,backgroundCube_frag:uA,cube_vert:hA,cube_frag:fA,depth_vert:dA,depth_frag:pA,distanceRGBA_vert:mA,distanceRGBA_frag:_A,equirect_vert:gA,equirect_frag:vA,linedashed_vert:xA,linedashed_frag:MA,meshbasic_vert:yA,meshbasic_frag:SA,meshlambert_vert:EA,meshlambert_frag:bA,meshmatcap_vert:TA,meshmatcap_frag:AA,meshnormal_vert:wA,meshnormal_frag:RA,meshphong_vert:CA,meshphong_frag:PA,meshphysical_vert:DA,meshphysical_frag:LA,meshtoon_vert:IA,meshtoon_frag:UA,points_vert:NA,points_frag:FA,shadow_vert:OA,shadow_frag:BA,sprite_vert:zA,sprite_frag:kA},wt={common:{diffuse:{value:new jt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new oe},alphaMap:{value:null},alphaMapTransform:{value:new oe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new oe}},envmap:{envMap:{value:null},envMapRotation:{value:new oe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new oe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new oe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new oe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new oe},normalScale:{value:new ne(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new oe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new oe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new oe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new oe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new jt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new jt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new oe},alphaTest:{value:0},uvTransform:{value:new oe}},sprite:{diffuse:{value:new jt(16777215)},opacity:{value:1},center:{value:new ne(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new oe},alphaMap:{value:null},alphaMapTransform:{value:new oe},alphaTest:{value:0}}},vi={basic:{uniforms:Tn([wt.common,wt.specularmap,wt.envmap,wt.aomap,wt.lightmap,wt.fog]),vertexShader:fe.meshbasic_vert,fragmentShader:fe.meshbasic_frag},lambert:{uniforms:Tn([wt.common,wt.specularmap,wt.envmap,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.fog,wt.lights,{emissive:{value:new jt(0)}}]),vertexShader:fe.meshlambert_vert,fragmentShader:fe.meshlambert_frag},phong:{uniforms:Tn([wt.common,wt.specularmap,wt.envmap,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.fog,wt.lights,{emissive:{value:new jt(0)},specular:{value:new jt(1118481)},shininess:{value:30}}]),vertexShader:fe.meshphong_vert,fragmentShader:fe.meshphong_frag},standard:{uniforms:Tn([wt.common,wt.envmap,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.roughnessmap,wt.metalnessmap,wt.fog,wt.lights,{emissive:{value:new jt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:fe.meshphysical_vert,fragmentShader:fe.meshphysical_frag},toon:{uniforms:Tn([wt.common,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.gradientmap,wt.fog,wt.lights,{emissive:{value:new jt(0)}}]),vertexShader:fe.meshtoon_vert,fragmentShader:fe.meshtoon_frag},matcap:{uniforms:Tn([wt.common,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.fog,{matcap:{value:null}}]),vertexShader:fe.meshmatcap_vert,fragmentShader:fe.meshmatcap_frag},points:{uniforms:Tn([wt.points,wt.fog]),vertexShader:fe.points_vert,fragmentShader:fe.points_frag},dashed:{uniforms:Tn([wt.common,wt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:fe.linedashed_vert,fragmentShader:fe.linedashed_frag},depth:{uniforms:Tn([wt.common,wt.displacementmap]),vertexShader:fe.depth_vert,fragmentShader:fe.depth_frag},normal:{uniforms:Tn([wt.common,wt.bumpmap,wt.normalmap,wt.displacementmap,{opacity:{value:1}}]),vertexShader:fe.meshnormal_vert,fragmentShader:fe.meshnormal_frag},sprite:{uniforms:Tn([wt.sprite,wt.fog]),vertexShader:fe.sprite_vert,fragmentShader:fe.sprite_frag},background:{uniforms:{uvTransform:{value:new oe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:fe.background_vert,fragmentShader:fe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new oe}},vertexShader:fe.backgroundCube_vert,fragmentShader:fe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:fe.cube_vert,fragmentShader:fe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:fe.equirect_vert,fragmentShader:fe.equirect_frag},distanceRGBA:{uniforms:Tn([wt.common,wt.displacementmap,{referencePosition:{value:new q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:fe.distanceRGBA_vert,fragmentShader:fe.distanceRGBA_frag},shadow:{uniforms:Tn([wt.lights,wt.fog,{color:{value:new jt(0)},opacity:{value:1}}]),vertexShader:fe.shadow_vert,fragmentShader:fe.shadow_frag}};vi.physical={uniforms:Tn([vi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new oe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new oe},clearcoatNormalScale:{value:new ne(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new oe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new oe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new oe},sheen:{value:0},sheenColor:{value:new jt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new oe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new oe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new oe},transmissionSamplerSize:{value:new ne},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new oe},attenuationDistance:{value:0},attenuationColor:{value:new jt(0)},specularColor:{value:new jt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new oe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new oe},anisotropyVector:{value:new ne},anisotropyMap:{value:null},anisotropyMapTransform:{value:new oe}}]),vertexShader:fe.meshphysical_vert,fragmentShader:fe.meshphysical_frag};const zo={r:0,b:0,g:0},Lr=new ei,HA=new Ke;function VA(n,t,e,r,s,o,l){const u=new jt(0);let f=o===!0?0:1,h,p,m=null,g=0,v=null;function S(L){let R=L.isScene===!0?L.background:null;return R&&R.isTexture&&(R=(L.backgroundBlurriness>0?e:t).get(R)),R}function T(L){let R=!1;const B=S(L);B===null?_(u,f):B&&B.isColor&&(_(B,1),R=!0);const O=n.xr.getEnvironmentBlendMode();O==="additive"?r.buffers.color.setClear(0,0,0,1,l):O==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,l),(n.autoClear||R)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function x(L,R){const B=S(R);B&&(B.isCubeTexture||B.mapping===el)?(p===void 0&&(p=new Wi(new ya(1,1,1),new Ei({name:"BackgroundCubeMaterial",uniforms:Is(vi.backgroundCube.uniforms),vertexShader:vi.backgroundCube.vertexShader,fragmentShader:vi.backgroundCube.fragmentShader,side:In,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(O,N,Y){this.matrixWorld.copyPosition(Y.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(p)),Lr.copy(R.backgroundRotation),Lr.x*=-1,Lr.y*=-1,Lr.z*=-1,B.isCubeTexture&&B.isRenderTargetTexture===!1&&(Lr.y*=-1,Lr.z*=-1),p.material.uniforms.envMap.value=B,p.material.uniforms.flipEnvMap.value=B.isCubeTexture&&B.isRenderTargetTexture===!1?-1:1,p.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(HA.makeRotationFromEuler(Lr)),p.material.toneMapped=Te.getTransfer(B.colorSpace)!==Fe,(m!==B||g!==B.version||v!==n.toneMapping)&&(p.material.needsUpdate=!0,m=B,g=B.version,v=n.toneMapping),p.layers.enableAll(),L.unshift(p,p.geometry,p.material,0,0,null)):B&&B.isTexture&&(h===void 0&&(h=new Wi(new rl(2,2),new Ei({name:"BackgroundMaterial",uniforms:Is(vi.background.uniforms),vertexShader:vi.background.vertexShader,fragmentShader:vi.background.fragmentShader,side:mr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(h)),h.material.uniforms.t2D.value=B,h.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,h.material.toneMapped=Te.getTransfer(B.colorSpace)!==Fe,B.matrixAutoUpdate===!0&&B.updateMatrix(),h.material.uniforms.uvTransform.value.copy(B.matrix),(m!==B||g!==B.version||v!==n.toneMapping)&&(h.material.needsUpdate=!0,m=B,g=B.version,v=n.toneMapping),h.layers.enableAll(),L.unshift(h,h.geometry,h.material,0,0,null))}function _(L,R){L.getRGB(zo,Sm(n)),r.buffers.color.setClear(zo.r,zo.g,zo.b,R,l)}function U(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0)}return{getClearColor:function(){return u},setClearColor:function(L,R=1){u.set(L),f=R,_(u,f)},getClearAlpha:function(){return f},setClearAlpha:function(L){f=L,_(u,f)},render:T,addToRenderList:x,dispose:U}}function GA(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),r={},s=g(null);let o=s,l=!1;function u(w,z,$,Z,ot){let it=!1;const lt=m(Z,$,z);o!==lt&&(o=lt,h(o.object)),it=v(w,Z,$,ot),it&&S(w,Z,$,ot),ot!==null&&t.update(ot,n.ELEMENT_ARRAY_BUFFER),(it||l)&&(l=!1,R(w,z,$,Z),ot!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(ot).buffer))}function f(){return n.createVertexArray()}function h(w){return n.bindVertexArray(w)}function p(w){return n.deleteVertexArray(w)}function m(w,z,$){const Z=$.wireframe===!0;let ot=r[w.id];ot===void 0&&(ot={},r[w.id]=ot);let it=ot[z.id];it===void 0&&(it={},ot[z.id]=it);let lt=it[Z];return lt===void 0&&(lt=g(f()),it[Z]=lt),lt}function g(w){const z=[],$=[],Z=[];for(let ot=0;ot<e;ot++)z[ot]=0,$[ot]=0,Z[ot]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:$,attributeDivisors:Z,object:w,attributes:{},index:null}}function v(w,z,$,Z){const ot=o.attributes,it=z.attributes;let lt=0;const ft=$.getAttributes();for(const Q in ft)if(ft[Q].location>=0){const Rt=ot[Q];let It=it[Q];if(It===void 0&&(Q==="instanceMatrix"&&w.instanceMatrix&&(It=w.instanceMatrix),Q==="instanceColor"&&w.instanceColor&&(It=w.instanceColor)),Rt===void 0||Rt.attribute!==It||It&&Rt.data!==It.data)return!0;lt++}return o.attributesNum!==lt||o.index!==Z}function S(w,z,$,Z){const ot={},it=z.attributes;let lt=0;const ft=$.getAttributes();for(const Q in ft)if(ft[Q].location>=0){let Rt=it[Q];Rt===void 0&&(Q==="instanceMatrix"&&w.instanceMatrix&&(Rt=w.instanceMatrix),Q==="instanceColor"&&w.instanceColor&&(Rt=w.instanceColor));const It={};It.attribute=Rt,Rt&&Rt.data&&(It.data=Rt.data),ot[Q]=It,lt++}o.attributes=ot,o.attributesNum=lt,o.index=Z}function T(){const w=o.newAttributes;for(let z=0,$=w.length;z<$;z++)w[z]=0}function x(w){_(w,0)}function _(w,z){const $=o.newAttributes,Z=o.enabledAttributes,ot=o.attributeDivisors;$[w]=1,Z[w]===0&&(n.enableVertexAttribArray(w),Z[w]=1),ot[w]!==z&&(n.vertexAttribDivisor(w,z),ot[w]=z)}function U(){const w=o.newAttributes,z=o.enabledAttributes;for(let $=0,Z=z.length;$<Z;$++)z[$]!==w[$]&&(n.disableVertexAttribArray($),z[$]=0)}function L(w,z,$,Z,ot,it,lt){lt===!0?n.vertexAttribIPointer(w,z,$,ot,it):n.vertexAttribPointer(w,z,$,Z,ot,it)}function R(w,z,$,Z){T();const ot=Z.attributes,it=$.getAttributes(),lt=z.defaultAttributeValues;for(const ft in it){const Q=it[ft];if(Q.location>=0){let Et=ot[ft];if(Et===void 0&&(ft==="instanceMatrix"&&w.instanceMatrix&&(Et=w.instanceMatrix),ft==="instanceColor"&&w.instanceColor&&(Et=w.instanceColor)),Et!==void 0){const Rt=Et.normalized,It=Et.itemSize,le=t.get(Et);if(le===void 0)continue;const we=le.buffer,Ue=le.type,de=le.bytesPerElement,rt=Ue===n.INT||Ue===n.UNSIGNED_INT||Et.gpuType===eh;if(Et.isInterleavedBufferAttribute){const pt=Et.data,Pt=pt.stride,qt=Et.offset;if(pt.isInstancedInterleavedBuffer){for(let Gt=0;Gt<Q.locationSize;Gt++)_(Q.location+Gt,pt.meshPerAttribute);w.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=pt.meshPerAttribute*pt.count)}else for(let Gt=0;Gt<Q.locationSize;Gt++)x(Q.location+Gt);n.bindBuffer(n.ARRAY_BUFFER,we);for(let Gt=0;Gt<Q.locationSize;Gt++)L(Q.location+Gt,It/Q.locationSize,Ue,Rt,Pt*de,(qt+It/Q.locationSize*Gt)*de,rt)}else{if(Et.isInstancedBufferAttribute){for(let pt=0;pt<Q.locationSize;pt++)_(Q.location+pt,Et.meshPerAttribute);w.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=Et.meshPerAttribute*Et.count)}else for(let pt=0;pt<Q.locationSize;pt++)x(Q.location+pt);n.bindBuffer(n.ARRAY_BUFFER,we);for(let pt=0;pt<Q.locationSize;pt++)L(Q.location+pt,It/Q.locationSize,Ue,Rt,It*de,It/Q.locationSize*pt*de,rt)}}else if(lt!==void 0){const Rt=lt[ft];if(Rt!==void 0)switch(Rt.length){case 2:n.vertexAttrib2fv(Q.location,Rt);break;case 3:n.vertexAttrib3fv(Q.location,Rt);break;case 4:n.vertexAttrib4fv(Q.location,Rt);break;default:n.vertexAttrib1fv(Q.location,Rt)}}}}U()}function B(){Y();for(const w in r){const z=r[w];for(const $ in z){const Z=z[$];for(const ot in Z)p(Z[ot].object),delete Z[ot];delete z[$]}delete r[w]}}function O(w){if(r[w.id]===void 0)return;const z=r[w.id];for(const $ in z){const Z=z[$];for(const ot in Z)p(Z[ot].object),delete Z[ot];delete z[$]}delete r[w.id]}function N(w){for(const z in r){const $=r[z];if($[w.id]===void 0)continue;const Z=$[w.id];for(const ot in Z)p(Z[ot].object),delete Z[ot];delete $[w.id]}}function Y(){C(),l=!0,o!==s&&(o=s,h(o.object))}function C(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:u,reset:Y,resetDefaultState:C,dispose:B,releaseStatesOfGeometry:O,releaseStatesOfProgram:N,initAttributes:T,enableAttribute:x,disableUnusedAttributes:U}}function WA(n,t,e){let r;function s(h){r=h}function o(h,p){n.drawArrays(r,h,p),e.update(p,r,1)}function l(h,p,m){m!==0&&(n.drawArraysInstanced(r,h,p,m),e.update(p,r,m))}function u(h,p,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,h,0,p,0,m);let v=0;for(let S=0;S<m;S++)v+=p[S];e.update(v,r,1)}function f(h,p,m,g){if(m===0)return;const v=t.get("WEBGL_multi_draw");if(v===null)for(let S=0;S<h.length;S++)l(h[S],p[S],g[S]);else{v.multiDrawArraysInstancedWEBGL(r,h,0,p,0,g,0,m);let S=0;for(let T=0;T<m;T++)S+=p[T]*g[T];e.update(S,r,1)}}this.setMode=s,this.render=o,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function XA(n,t,e,r){let s;function o(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const N=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(N.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function l(N){return!(N!==di&&r.convert(N)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function u(N){const Y=N===va&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(N!==qi&&r.convert(N)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&N!==Mi&&!Y)}function f(N){if(N==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";N="mediump"}return N==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=e.precision!==void 0?e.precision:"highp";const p=f(h);p!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",p,"instead."),h=p);const m=e.logarithmicDepthBuffer===!0,g=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),v=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),S=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=n.getParameter(n.MAX_TEXTURE_SIZE),x=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),_=n.getParameter(n.MAX_VERTEX_ATTRIBS),U=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),L=n.getParameter(n.MAX_VARYING_VECTORS),R=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),B=S>0,O=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:f,textureFormatReadable:l,textureTypeReadable:u,precision:h,logarithmicDepthBuffer:m,reversedDepthBuffer:g,maxTextures:v,maxVertexTextures:S,maxTextureSize:T,maxCubemapSize:x,maxAttributes:_,maxVertexUniforms:U,maxVaryings:L,maxFragmentUniforms:R,vertexTextures:B,maxSamples:O}}function qA(n){const t=this;let e=null,r=0,s=!1,o=!1;const l=new cr,u=new oe,f={value:null,needsUpdate:!1};this.uniform=f,this.numPlanes=0,this.numIntersection=0,this.init=function(m,g){const v=m.length!==0||g||r!==0||s;return s=g,r=m.length,v},this.beginShadows=function(){o=!0,p(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(m,g){e=p(m,g,0)},this.setState=function(m,g,v){const S=m.clippingPlanes,T=m.clipIntersection,x=m.clipShadows,_=n.get(m);if(!s||S===null||S.length===0||o&&!x)o?p(null):h();else{const U=o?0:r,L=U*4;let R=_.clippingState||null;f.value=R,R=p(S,g,L,v);for(let B=0;B!==L;++B)R[B]=e[B];_.clippingState=R,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=U}};function h(){f.value!==e&&(f.value=e,f.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function p(m,g,v,S){const T=m!==null?m.length:0;let x=null;if(T!==0){if(x=f.value,S!==!0||x===null){const _=v+T*4,U=g.matrixWorldInverse;u.getNormalMatrix(U),(x===null||x.length<_)&&(x=new Float32Array(_));for(let L=0,R=v;L!==T;++L,R+=4)l.copy(m[L]).applyMatrix4(U,u),l.normal.toArray(x,R),x[R+3]=l.constant}f.value=x,f.needsUpdate=!0}return t.numPlanes=T,t.numIntersection=0,x}}function YA(n){let t=new WeakMap;function e(l,u){return u===_u?l.mapping=Ps:u===gu&&(l.mapping=Ds),l}function r(l){if(l&&l.isTexture){const u=l.mapping;if(u===_u||u===gu)if(t.has(l)){const f=t.get(l).texture;return e(f,l.mapping)}else{const f=l.image;if(f&&f.height>0){const h=new IE(f.height);return h.fromEquirectangularTexture(n,l),t.set(l,h),l.addEventListener("dispose",s),e(h.texture,l.mapping)}else return null}}return l}function s(l){const u=l.target;u.removeEventListener("dispose",s);const f=t.get(u);f!==void 0&&(t.delete(u),f.dispose())}function o(){t=new WeakMap}return{get:r,dispose:o}}const bs=4,Ep=[.125,.215,.35,.446,.526,.582],Fr=20,Kc=new eb,bp=new jt;let $c=null,jc=0,Jc=0,Qc=!1;const Ur=(1+Math.sqrt(5))/2,ys=1/Ur,Tp=[new q(-Ur,ys,0),new q(Ur,ys,0),new q(-ys,0,Ur),new q(ys,0,Ur),new q(0,Ur,-ys),new q(0,Ur,ys),new q(-1,1,-1),new q(1,1,-1),new q(-1,1,1),new q(1,1,1)],ZA=new q;class Ap{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,r=.1,s=100,o={}){const{size:l=256,position:u=ZA}=o;$c=this._renderer.getRenderTarget(),jc=this._renderer.getActiveCubeFace(),Jc=this._renderer.getActiveMipmapLevel(),Qc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(l);const f=this._allocateTargets();return f.depthBuffer=!0,this._sceneToCubeUV(t,r,s,f,u),e>0&&this._blur(f,0,0,e),this._applyPMREM(f),this._cleanup(f),f}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Cp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Rp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget($c,jc,Jc),this._renderer.xr.enabled=Qc,t.scissorTest=!1,ko(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ps||t.mapping===Ds?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),$c=this._renderer.getRenderTarget(),jc=this._renderer.getActiveCubeFace(),Jc=this._renderer.getActiveMipmapLevel(),Qc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=e||this._allocateTargets();return this._textureToCubeUV(t,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,r={magFilter:xi,minFilter:xi,generateMipmaps:!1,type:va,format:di,colorSpace:Ls,depthBuffer:!1},s=wp(t,e,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=wp(t,e,r);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=KA(o)),this._blurMaterial=$A(o,t,e)}return s}_compileMaterial(t){const e=new Wi(this._lodPlanes[0],t);this._renderer.compile(e,Kc)}_sceneToCubeUV(t,e,r,s,o){const f=new ti(90,1,e,r),h=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],m=this._renderer,g=m.autoClear,v=m.toneMapping;m.getClearColor(bp),m.toneMapping=dr,m.autoClear=!1,m.state.buffers.depth.getReversed()&&(m.setRenderTarget(s),m.clearDepth(),m.setRenderTarget(null));const T=new ch({name:"PMREM.Background",side:In,depthWrite:!1,depthTest:!1}),x=new Wi(new ya,T);let _=!1;const U=t.background;U?U.isColor&&(T.color.copy(U),t.background=null,_=!0):(T.color.copy(bp),_=!0);for(let L=0;L<6;L++){const R=L%3;R===0?(f.up.set(0,h[L],0),f.position.set(o.x,o.y,o.z),f.lookAt(o.x+p[L],o.y,o.z)):R===1?(f.up.set(0,0,h[L]),f.position.set(o.x,o.y,o.z),f.lookAt(o.x,o.y+p[L],o.z)):(f.up.set(0,h[L],0),f.position.set(o.x,o.y,o.z),f.lookAt(o.x,o.y,o.z+p[L]));const B=this._cubeSize;ko(s,R*B,L>2?B:0,B,B),m.setRenderTarget(s),_&&m.render(x,f),m.render(t,f)}x.geometry.dispose(),x.material.dispose(),m.toneMapping=v,m.autoClear=g,t.background=U}_textureToCubeUV(t,e){const r=this._renderer,s=t.mapping===Ps||t.mapping===Ds;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Cp()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Rp());const o=s?this._cubemapMaterial:this._equirectMaterial,l=new Wi(this._lodPlanes[0],o),u=o.uniforms;u.envMap.value=t;const f=this._cubeSize;ko(e,0,0,3*f,2*f),r.setRenderTarget(e),r.render(l,Kc)}_applyPMREM(t){const e=this._renderer,r=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let o=1;o<s;o++){const l=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),u=Tp[(s-o-1)%Tp.length];this._blur(t,o-1,o,l,u)}e.autoClear=r}_blur(t,e,r,s,o){const l=this._pingPongRenderTarget;this._halfBlur(t,l,e,r,s,"latitudinal",o),this._halfBlur(l,t,r,r,s,"longitudinal",o)}_halfBlur(t,e,r,s,o,l,u){const f=this._renderer,h=this._blurMaterial;l!=="latitudinal"&&l!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const p=3,m=new Wi(this._lodPlanes[s],h),g=h.uniforms,v=this._sizeLods[r]-1,S=isFinite(o)?Math.PI/(2*v):2*Math.PI/(2*Fr-1),T=o/S,x=isFinite(o)?1+Math.floor(p*T):Fr;x>Fr&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${Fr}`);const _=[];let U=0;for(let N=0;N<Fr;++N){const Y=N/T,C=Math.exp(-Y*Y/2);_.push(C),N===0?U+=C:N<x&&(U+=2*C)}for(let N=0;N<_.length;N++)_[N]=_[N]/U;g.envMap.value=t.texture,g.samples.value=x,g.weights.value=_,g.latitudinal.value=l==="latitudinal",u&&(g.poleAxis.value=u);const{_lodMax:L}=this;g.dTheta.value=S,g.mipInt.value=L-r;const R=this._sizeLods[s],B=3*R*(s>L-bs?s-L+bs:0),O=4*(this._cubeSize-R);ko(e,B,O,3*R,2*R),f.setRenderTarget(e),f.render(m,Kc)}}function KA(n){const t=[],e=[],r=[];let s=n;const o=n-bs+1+Ep.length;for(let l=0;l<o;l++){const u=Math.pow(2,s);e.push(u);let f=1/u;l>n-bs?f=Ep[l-n+bs-1]:l===0&&(f=0),r.push(f);const h=1/(u-2),p=-h,m=1+h,g=[p,p,m,p,m,m,p,p,m,m,p,m],v=6,S=6,T=3,x=2,_=1,U=new Float32Array(T*S*v),L=new Float32Array(x*S*v),R=new Float32Array(_*S*v);for(let O=0;O<v;O++){const N=O%3*2/3-1,Y=O>2?0:-1,C=[N,Y,0,N+2/3,Y,0,N+2/3,Y+1,0,N,Y,0,N+2/3,Y+1,0,N,Y+1,0];U.set(C,T*S*O),L.set(g,x*S*O);const w=[O,O,O,O,O,O];R.set(w,_*S*O)}const B=new bi;B.setAttribute("position",new Si(U,T)),B.setAttribute("uv",new Si(L,x)),B.setAttribute("faceIndex",new Si(R,_)),t.push(B),s>bs&&s--}return{lodPlanes:t,sizeLods:e,sigmas:r}}function wp(n,t,e){const r=new Vr(n,t,e);return r.texture.mapping=el,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function ko(n,t,e,r,s){n.viewport.set(t,e,r,s),n.scissor.set(t,e,r,s)}function $A(n,t,e){const r=new Float32Array(Fr),s=new q(0,1,0);return new Ei({name:"SphericalGaussianBlur",defines:{n:Fr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:fh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:fr,depthTest:!1,depthWrite:!1})}function Rp(){return new Ei({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:fh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:fr,depthTest:!1,depthWrite:!1})}function Cp(){return new Ei({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:fh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:fr,depthTest:!1,depthWrite:!1})}function fh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function jA(n){let t=new WeakMap,e=null;function r(u){if(u&&u.isTexture){const f=u.mapping,h=f===_u||f===gu,p=f===Ps||f===Ds;if(h||p){let m=t.get(u);const g=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==g)return e===null&&(e=new Ap(n)),m=h?e.fromEquirectangular(u,m):e.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),m.texture;if(m!==void 0)return m.texture;{const v=u.image;return h&&v&&v.height>0||p&&v&&s(v)?(e===null&&(e=new Ap(n)),m=h?e.fromEquirectangular(u):e.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),u.addEventListener("dispose",o),m.texture):null}}}return u}function s(u){let f=0;const h=6;for(let p=0;p<h;p++)u[p]!==void 0&&f++;return f===h}function o(u){const f=u.target;f.removeEventListener("dispose",o);const h=t.get(f);h!==void 0&&(t.delete(f),h.dispose())}function l(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:r,dispose:l}}function JA(n){const t={};function e(r){if(t[r]!==void 0)return t[r];let s;switch(r){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(r)}return t[r]=s,s}return{has:function(r){return e(r)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(r){const s=e(r);return s===null&&ga("THREE.WebGLRenderer: "+r+" extension not supported."),s}}}function QA(n,t,e,r){const s={},o=new WeakMap;function l(m){const g=m.target;g.index!==null&&t.remove(g.index);for(const S in g.attributes)t.remove(g.attributes[S]);g.removeEventListener("dispose",l),delete s[g.id];const v=o.get(g);v&&(t.remove(v),o.delete(g)),r.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,e.memory.geometries--}function u(m,g){return s[g.id]===!0||(g.addEventListener("dispose",l),s[g.id]=!0,e.memory.geometries++),g}function f(m){const g=m.attributes;for(const v in g)t.update(g[v],n.ARRAY_BUFFER)}function h(m){const g=[],v=m.index,S=m.attributes.position;let T=0;if(v!==null){const U=v.array;T=v.version;for(let L=0,R=U.length;L<R;L+=3){const B=U[L+0],O=U[L+1],N=U[L+2];g.push(B,O,O,N,N,B)}}else if(S!==void 0){const U=S.array;T=S.version;for(let L=0,R=U.length/3-1;L<R;L+=3){const B=L+0,O=L+1,N=L+2;g.push(B,O,O,N,N,B)}}else return;const x=new(_m(g)?ym:Mm)(g,1);x.version=T;const _=o.get(m);_&&t.remove(_),o.set(m,x)}function p(m){const g=o.get(m);if(g){const v=m.index;v!==null&&g.version<v.version&&h(m)}else h(m);return o.get(m)}return{get:u,update:f,getWireframeAttribute:p}}function tw(n,t,e){let r;function s(g){r=g}let o,l;function u(g){o=g.type,l=g.bytesPerElement}function f(g,v){n.drawElements(r,v,o,g*l),e.update(v,r,1)}function h(g,v,S){S!==0&&(n.drawElementsInstanced(r,v,o,g*l,S),e.update(v,r,S))}function p(g,v,S){if(S===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,v,0,o,g,0,S);let x=0;for(let _=0;_<S;_++)x+=v[_];e.update(x,r,1)}function m(g,v,S,T){if(S===0)return;const x=t.get("WEBGL_multi_draw");if(x===null)for(let _=0;_<g.length;_++)h(g[_]/l,v[_],T[_]);else{x.multiDrawElementsInstancedWEBGL(r,v,0,o,g,0,T,0,S);let _=0;for(let U=0;U<S;U++)_+=v[U]*T[U];e.update(_,r,1)}}this.setMode=s,this.setIndex=u,this.render=f,this.renderInstances=h,this.renderMultiDraw=p,this.renderMultiDrawInstances=m}function ew(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function r(o,l,u){switch(e.calls++,l){case n.TRIANGLES:e.triangles+=u*(o/3);break;case n.LINES:e.lines+=u*(o/2);break;case n.LINE_STRIP:e.lines+=u*(o-1);break;case n.LINE_LOOP:e.lines+=u*o;break;case n.POINTS:e.points+=u*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",l);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:r}}function nw(n,t,e){const r=new WeakMap,s=new Ze;function o(l,u,f){const h=l.morphTargetInfluences,p=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,m=p!==void 0?p.length:0;let g=r.get(u);if(g===void 0||g.count!==m){let w=function(){Y.dispose(),r.delete(u),u.removeEventListener("dispose",w)};var v=w;g!==void 0&&g.texture.dispose();const S=u.morphAttributes.position!==void 0,T=u.morphAttributes.normal!==void 0,x=u.morphAttributes.color!==void 0,_=u.morphAttributes.position||[],U=u.morphAttributes.normal||[],L=u.morphAttributes.color||[];let R=0;S===!0&&(R=1),T===!0&&(R=2),x===!0&&(R=3);let B=u.attributes.position.count*R,O=1;B>t.maxTextureSize&&(O=Math.ceil(B/t.maxTextureSize),B=t.maxTextureSize);const N=new Float32Array(B*O*4*m),Y=new gm(N,B,O,m);Y.type=Mi,Y.needsUpdate=!0;const C=R*4;for(let z=0;z<m;z++){const $=_[z],Z=U[z],ot=L[z],it=B*O*4*z;for(let lt=0;lt<$.count;lt++){const ft=lt*C;S===!0&&(s.fromBufferAttribute($,lt),N[it+ft+0]=s.x,N[it+ft+1]=s.y,N[it+ft+2]=s.z,N[it+ft+3]=0),T===!0&&(s.fromBufferAttribute(Z,lt),N[it+ft+4]=s.x,N[it+ft+5]=s.y,N[it+ft+6]=s.z,N[it+ft+7]=0),x===!0&&(s.fromBufferAttribute(ot,lt),N[it+ft+8]=s.x,N[it+ft+9]=s.y,N[it+ft+10]=s.z,N[it+ft+11]=ot.itemSize===4?s.w:1)}}g={count:m,texture:Y,size:new ne(B,O)},r.set(u,g),u.addEventListener("dispose",w)}if(l.isInstancedMesh===!0&&l.morphTexture!==null)f.getUniforms().setValue(n,"morphTexture",l.morphTexture,e);else{let S=0;for(let x=0;x<h.length;x++)S+=h[x];const T=u.morphTargetsRelative?1:1-S;f.getUniforms().setValue(n,"morphTargetBaseInfluence",T),f.getUniforms().setValue(n,"morphTargetInfluences",h)}f.getUniforms().setValue(n,"morphTargetsTexture",g.texture,e),f.getUniforms().setValue(n,"morphTargetsTextureSize",g.size)}return{update:o}}function iw(n,t,e,r){let s=new WeakMap;function o(f){const h=r.render.frame,p=f.geometry,m=t.get(f,p);if(s.get(m)!==h&&(t.update(m),s.set(m,h)),f.isInstancedMesh&&(f.hasEventListener("dispose",u)===!1&&f.addEventListener("dispose",u),s.get(f)!==h&&(e.update(f.instanceMatrix,n.ARRAY_BUFFER),f.instanceColor!==null&&e.update(f.instanceColor,n.ARRAY_BUFFER),s.set(f,h))),f.isSkinnedMesh){const g=f.skeleton;s.get(g)!==h&&(g.update(),s.set(g,h))}return m}function l(){s=new WeakMap}function u(f){const h=f.target;h.removeEventListener("dispose",u),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:l}}const Um=new hn,Pp=new wm(1,1),Nm=new gm,Fm=new _E,Om=new bm,Dp=[],Lp=[],Ip=new Float32Array(16),Up=new Float32Array(9),Np=new Float32Array(4);function Os(n,t,e){const r=n[0];if(r<=0||r>0)return n;const s=t*e;let o=Dp[s];if(o===void 0&&(o=new Float32Array(s),Dp[s]=o),t!==0){r.toArray(o,0);for(let l=1,u=0;l!==t;++l)u+=e,n[l].toArray(o,u)}return o}function nn(n,t){if(n.length!==t.length)return!1;for(let e=0,r=n.length;e<r;e++)if(n[e]!==t[e])return!1;return!0}function rn(n,t){for(let e=0,r=t.length;e<r;e++)n[e]=t[e]}function al(n,t){let e=Lp[t];e===void 0&&(e=new Int32Array(t),Lp[t]=e);for(let r=0;r!==t;++r)e[r]=n.allocateTextureUnit();return e}function rw(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function sw(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(nn(e,t))return;n.uniform2fv(this.addr,t),rn(e,t)}}function aw(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(nn(e,t))return;n.uniform3fv(this.addr,t),rn(e,t)}}function ow(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(nn(e,t))return;n.uniform4fv(this.addr,t),rn(e,t)}}function lw(n,t){const e=this.cache,r=t.elements;if(r===void 0){if(nn(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),rn(e,t)}else{if(nn(e,r))return;Np.set(r),n.uniformMatrix2fv(this.addr,!1,Np),rn(e,r)}}function cw(n,t){const e=this.cache,r=t.elements;if(r===void 0){if(nn(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),rn(e,t)}else{if(nn(e,r))return;Up.set(r),n.uniformMatrix3fv(this.addr,!1,Up),rn(e,r)}}function uw(n,t){const e=this.cache,r=t.elements;if(r===void 0){if(nn(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),rn(e,t)}else{if(nn(e,r))return;Ip.set(r),n.uniformMatrix4fv(this.addr,!1,Ip),rn(e,r)}}function hw(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function fw(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(nn(e,t))return;n.uniform2iv(this.addr,t),rn(e,t)}}function dw(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(nn(e,t))return;n.uniform3iv(this.addr,t),rn(e,t)}}function pw(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(nn(e,t))return;n.uniform4iv(this.addr,t),rn(e,t)}}function mw(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function _w(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(nn(e,t))return;n.uniform2uiv(this.addr,t),rn(e,t)}}function gw(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(nn(e,t))return;n.uniform3uiv(this.addr,t),rn(e,t)}}function vw(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(nn(e,t))return;n.uniform4uiv(this.addr,t),rn(e,t)}}function xw(n,t,e){const r=this.cache,s=e.allocateTextureUnit();r[0]!==s&&(n.uniform1i(this.addr,s),r[0]=s);let o;this.type===n.SAMPLER_2D_SHADOW?(Pp.compareFunction=pm,o=Pp):o=Um,e.setTexture2D(t||o,s)}function Mw(n,t,e){const r=this.cache,s=e.allocateTextureUnit();r[0]!==s&&(n.uniform1i(this.addr,s),r[0]=s),e.setTexture3D(t||Fm,s)}function yw(n,t,e){const r=this.cache,s=e.allocateTextureUnit();r[0]!==s&&(n.uniform1i(this.addr,s),r[0]=s),e.setTextureCube(t||Om,s)}function Sw(n,t,e){const r=this.cache,s=e.allocateTextureUnit();r[0]!==s&&(n.uniform1i(this.addr,s),r[0]=s),e.setTexture2DArray(t||Nm,s)}function Ew(n){switch(n){case 5126:return rw;case 35664:return sw;case 35665:return aw;case 35666:return ow;case 35674:return lw;case 35675:return cw;case 35676:return uw;case 5124:case 35670:return hw;case 35667:case 35671:return fw;case 35668:case 35672:return dw;case 35669:case 35673:return pw;case 5125:return mw;case 36294:return _w;case 36295:return gw;case 36296:return vw;case 35678:case 36198:case 36298:case 36306:case 35682:return xw;case 35679:case 36299:case 36307:return Mw;case 35680:case 36300:case 36308:case 36293:return yw;case 36289:case 36303:case 36311:case 36292:return Sw}}function bw(n,t){n.uniform1fv(this.addr,t)}function Tw(n,t){const e=Os(t,this.size,2);n.uniform2fv(this.addr,e)}function Aw(n,t){const e=Os(t,this.size,3);n.uniform3fv(this.addr,e)}function ww(n,t){const e=Os(t,this.size,4);n.uniform4fv(this.addr,e)}function Rw(n,t){const e=Os(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function Cw(n,t){const e=Os(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function Pw(n,t){const e=Os(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function Dw(n,t){n.uniform1iv(this.addr,t)}function Lw(n,t){n.uniform2iv(this.addr,t)}function Iw(n,t){n.uniform3iv(this.addr,t)}function Uw(n,t){n.uniform4iv(this.addr,t)}function Nw(n,t){n.uniform1uiv(this.addr,t)}function Fw(n,t){n.uniform2uiv(this.addr,t)}function Ow(n,t){n.uniform3uiv(this.addr,t)}function Bw(n,t){n.uniform4uiv(this.addr,t)}function zw(n,t,e){const r=this.cache,s=t.length,o=al(e,s);nn(r,o)||(n.uniform1iv(this.addr,o),rn(r,o));for(let l=0;l!==s;++l)e.setTexture2D(t[l]||Um,o[l])}function kw(n,t,e){const r=this.cache,s=t.length,o=al(e,s);nn(r,o)||(n.uniform1iv(this.addr,o),rn(r,o));for(let l=0;l!==s;++l)e.setTexture3D(t[l]||Fm,o[l])}function Hw(n,t,e){const r=this.cache,s=t.length,o=al(e,s);nn(r,o)||(n.uniform1iv(this.addr,o),rn(r,o));for(let l=0;l!==s;++l)e.setTextureCube(t[l]||Om,o[l])}function Vw(n,t,e){const r=this.cache,s=t.length,o=al(e,s);nn(r,o)||(n.uniform1iv(this.addr,o),rn(r,o));for(let l=0;l!==s;++l)e.setTexture2DArray(t[l]||Nm,o[l])}function Gw(n){switch(n){case 5126:return bw;case 35664:return Tw;case 35665:return Aw;case 35666:return ww;case 35674:return Rw;case 35675:return Cw;case 35676:return Pw;case 5124:case 35670:return Dw;case 35667:case 35671:return Lw;case 35668:case 35672:return Iw;case 35669:case 35673:return Uw;case 5125:return Nw;case 36294:return Fw;case 36295:return Ow;case 36296:return Bw;case 35678:case 36198:case 36298:case 36306:case 35682:return zw;case 35679:case 36299:case 36307:return kw;case 35680:case 36300:case 36308:case 36293:return Hw;case 36289:case 36303:case 36311:case 36292:return Vw}}class Ww{constructor(t,e,r){this.id=t,this.addr=r,this.cache=[],this.type=e.type,this.setValue=Ew(e.type)}}class Xw{constructor(t,e,r){this.id=t,this.addr=r,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Gw(e.type)}}class qw{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,r){const s=this.seq;for(let o=0,l=s.length;o!==l;++o){const u=s[o];u.setValue(t,e[u.id],r)}}}const tu=/(\w+)(\])?(\[|\.)?/g;function Fp(n,t){n.seq.push(t),n.map[t.id]=t}function Yw(n,t,e){const r=n.name,s=r.length;for(tu.lastIndex=0;;){const o=tu.exec(r),l=tu.lastIndex;let u=o[1];const f=o[2]==="]",h=o[3];if(f&&(u=u|0),h===void 0||h==="["&&l+2===s){Fp(e,h===void 0?new Ww(u,n,t):new Xw(u,n,t));break}else{let m=e.map[u];m===void 0&&(m=new qw(u),Fp(e,m)),e=m}}}class Yo{constructor(t,e){this.seq=[],this.map={};const r=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<r;++s){const o=t.getActiveUniform(e,s),l=t.getUniformLocation(e,o.name);Yw(o,l,this)}}setValue(t,e,r,s){const o=this.map[e];o!==void 0&&o.setValue(t,r,s)}setOptional(t,e,r){const s=e[r];s!==void 0&&this.setValue(t,r,s)}static upload(t,e,r,s){for(let o=0,l=e.length;o!==l;++o){const u=e[o],f=r[u.id];f.needsUpdate!==!1&&u.setValue(t,f.value,s)}}static seqWithValue(t,e){const r=[];for(let s=0,o=t.length;s!==o;++s){const l=t[s];l.id in e&&r.push(l)}return r}}function Op(n,t,e){const r=n.createShader(t);return n.shaderSource(r,e),n.compileShader(r),r}const Zw=37297;let Kw=0;function $w(n,t){const e=n.split(`
`),r=[],s=Math.max(t-6,0),o=Math.min(t+6,e.length);for(let l=s;l<o;l++){const u=l+1;r.push(`${u===t?">":" "} ${u}: ${e[l]}`)}return r.join(`
`)}const Bp=new oe;function jw(n){Te._getMatrix(Bp,Te.workingColorSpace,n);const t=`mat3( ${Bp.elements.map(e=>e.toFixed(4))} )`;switch(Te.getTransfer(n)){case Zo:return[t,"LinearTransferOETF"];case Fe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function zp(n,t,e){const r=n.getShaderParameter(t,n.COMPILE_STATUS),o=(n.getShaderInfoLog(t)||"").trim();if(r&&o==="")return"";const l=/ERROR: 0:(\d+)/.exec(o);if(l){const u=parseInt(l[1]);return e.toUpperCase()+`

`+o+`

`+$w(n.getShaderSource(t),u)}else return o}function Jw(n,t){const e=jw(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Qw(n,t){let e;switch(t){case CS:e="Linear";break;case PS:e="Reinhard";break;case DS:e="Cineon";break;case LS:e="ACESFilmic";break;case US:e="AgX";break;case NS:e="Neutral";break;case IS:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Ho=new q;function t1(){Te.getLuminanceCoefficients(Ho);const n=Ho.x.toFixed(4),t=Ho.y.toFixed(4),e=Ho.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function e1(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(aa).join(`
`)}function n1(n){const t=[];for(const e in n){const r=n[e];r!==!1&&t.push("#define "+e+" "+r)}return t.join(`
`)}function i1(n,t){const e={},r=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<r;s++){const o=n.getActiveAttrib(t,s),l=o.name;let u=1;o.type===n.FLOAT_MAT2&&(u=2),o.type===n.FLOAT_MAT3&&(u=3),o.type===n.FLOAT_MAT4&&(u=4),e[l]={type:o.type,location:n.getAttribLocation(t,l),locationSize:u}}return e}function aa(n){return n!==""}function kp(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Hp(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const r1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ku(n){return n.replace(r1,a1)}const s1=new Map;function a1(n,t){let e=fe[t];if(e===void 0){const r=s1.get(t);if(r!==void 0)e=fe[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,r);else throw new Error("Can not resolve #include <"+t+">")}return Ku(e)}const o1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Vp(n){return n.replace(o1,l1)}function l1(n,t,e,r){let s="";for(let o=parseInt(t);o<parseInt(e);o++)s+=r.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return s}function Gp(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function c1(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===rm?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===lS?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Vi&&(t="SHADOWMAP_TYPE_VSM"),t}function u1(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Ps:case Ds:t="ENVMAP_TYPE_CUBE";break;case el:t="ENVMAP_TYPE_CUBE_UV";break}return t}function h1(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Ds:t="ENVMAP_MODE_REFRACTION";break}return t}function f1(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case tl:t="ENVMAP_BLENDING_MULTIPLY";break;case wS:t="ENVMAP_BLENDING_MIX";break;case RS:t="ENVMAP_BLENDING_ADD";break}return t}function d1(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:r,maxMip:e}}function p1(n,t,e,r){const s=n.getContext(),o=e.defines;let l=e.vertexShader,u=e.fragmentShader;const f=c1(e),h=u1(e),p=h1(e),m=f1(e),g=d1(e),v=e1(e),S=n1(o),T=s.createProgram();let x,_,U=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(x=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,S].filter(aa).join(`
`),x.length>0&&(x+=`
`),_=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,S].filter(aa).join(`
`),_.length>0&&(_+=`
`)):(x=[Gp(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,S,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+p:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+f:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(aa).join(`
`),_=[Gp(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,S,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.envMap?"#define "+p:"",e.envMap?"#define "+m:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+f:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==dr?"#define TONE_MAPPING":"",e.toneMapping!==dr?fe.tonemapping_pars_fragment:"",e.toneMapping!==dr?Qw("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",fe.colorspace_pars_fragment,Jw("linearToOutputTexel",e.outputColorSpace),t1(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(aa).join(`
`)),l=Ku(l),l=kp(l,e),l=Hp(l,e),u=Ku(u),u=kp(u,e),u=Hp(u,e),l=Vp(l),u=Vp(u),e.isRawShaderMaterial!==!0&&(U=`#version 300 es
`,x=[v,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,_=["#define varying in",e.glslVersion===Kd?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Kd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const L=U+x+l,R=U+_+u,B=Op(s,s.VERTEX_SHADER,L),O=Op(s,s.FRAGMENT_SHADER,R);s.attachShader(T,B),s.attachShader(T,O),e.index0AttributeName!==void 0?s.bindAttribLocation(T,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(T,0,"position"),s.linkProgram(T);function N(z){if(n.debug.checkShaderErrors){const $=s.getProgramInfoLog(T)||"",Z=s.getShaderInfoLog(B)||"",ot=s.getShaderInfoLog(O)||"",it=$.trim(),lt=Z.trim(),ft=ot.trim();let Q=!0,Et=!0;if(s.getProgramParameter(T,s.LINK_STATUS)===!1)if(Q=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,T,B,O);else{const Rt=zp(s,B,"vertex"),It=zp(s,O,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(T,s.VALIDATE_STATUS)+`

Material Name: `+z.name+`
Material Type: `+z.type+`

Program Info Log: `+it+`
`+Rt+`
`+It)}else it!==""?console.warn("THREE.WebGLProgram: Program Info Log:",it):(lt===""||ft==="")&&(Et=!1);Et&&(z.diagnostics={runnable:Q,programLog:it,vertexShader:{log:lt,prefix:x},fragmentShader:{log:ft,prefix:_}})}s.deleteShader(B),s.deleteShader(O),Y=new Yo(s,T),C=i1(s,T)}let Y;this.getUniforms=function(){return Y===void 0&&N(this),Y};let C;this.getAttributes=function(){return C===void 0&&N(this),C};let w=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=s.getProgramParameter(T,Zw)),w},this.destroy=function(){r.releaseStatesOfProgram(this),s.deleteProgram(T),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Kw++,this.cacheKey=t,this.usedTimes=1,this.program=T,this.vertexShader=B,this.fragmentShader=O,this}let m1=0;class _1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,r=t.fragmentShader,s=this._getShaderStage(e),o=this._getShaderStage(r),l=this._getShaderCacheForMaterial(t);return l.has(s)===!1&&(l.add(s),s.usedTimes++),l.has(o)===!1&&(l.add(o),o.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const r of e)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let r=e.get(t);return r===void 0&&(r=new Set,e.set(t,r)),r}_getShaderStage(t){const e=this.shaderCache;let r=e.get(t);return r===void 0&&(r=new g1(t),e.set(t,r)),r}}class g1{constructor(t){this.id=m1++,this.code=t,this.usedTimes=0}}function v1(n,t,e,r,s,o,l){const u=new vm,f=new _1,h=new Set,p=[],m=s.logarithmicDepthBuffer,g=s.vertexTextures;let v=s.precision;const S={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(C){return h.add(C),C===0?"uv":`uv${C}`}function x(C,w,z,$,Z){const ot=$.fog,it=Z.geometry,lt=C.isMeshStandardMaterial?$.environment:null,ft=(C.isMeshStandardMaterial?e:t).get(C.envMap||lt),Q=ft&&ft.mapping===el?ft.image.height:null,Et=S[C.type];C.precision!==null&&(v=s.getMaxPrecision(C.precision),v!==C.precision&&console.warn("THREE.WebGLProgram.getParameters:",C.precision,"not supported, using",v,"instead."));const Rt=it.morphAttributes.position||it.morphAttributes.normal||it.morphAttributes.color,It=Rt!==void 0?Rt.length:0;let le=0;it.morphAttributes.position!==void 0&&(le=1),it.morphAttributes.normal!==void 0&&(le=2),it.morphAttributes.color!==void 0&&(le=3);let we,Ue,de,rt;if(Et){const be=vi[Et];we=be.vertexShader,Ue=be.fragmentShader}else we=C.vertexShader,Ue=C.fragmentShader,f.update(C),de=f.getVertexShaderID(C),rt=f.getFragmentShaderID(C);const pt=n.getRenderTarget(),Pt=n.state.buffers.depth.getReversed(),qt=Z.isInstancedMesh===!0,Gt=Z.isBatchedMesh===!0,ce=!!C.map,Xe=!!C.matcap,I=!!ft,_e=!!C.aoMap,Jt=!!C.lightMap,Kt=!!C.bumpMap,mt=!!C.normalMap,Ee=!!C.displacementMap,Mt=!!C.emissiveMap,Yt=!!C.metalnessMap,ve=!!C.roughnessMap,De=C.anisotropy>0,P=C.clearcoat>0,y=C.dispersion>0,V=C.iridescence>0,et=C.sheen>0,ut=C.transmission>0,tt=De&&!!C.anisotropyMap,Bt=P&&!!C.clearcoatMap,gt=P&&!!C.clearcoatNormalMap,Ft=P&&!!C.clearcoatRoughnessMap,Ot=V&&!!C.iridescenceMap,_t=V&&!!C.iridescenceThicknessMap,bt=et&&!!C.sheenColorMap,Ht=et&&!!C.sheenRoughnessMap,Dt=!!C.specularMap,Tt=!!C.specularColorMap,se=!!C.specularIntensityMap,k=ut&&!!C.transmissionMap,yt=ut&&!!C.thicknessMap,St=!!C.gradientMap,Nt=!!C.alphaMap,vt=C.alphaTest>0,ct=!!C.alphaHash,kt=!!C.extensions;let ie=dr;C.toneMapped&&(pt===null||pt.isXRRenderTarget===!0)&&(ie=n.toneMapping);const Le={shaderID:Et,shaderType:C.type,shaderName:C.name,vertexShader:we,fragmentShader:Ue,defines:C.defines,customVertexShaderID:de,customFragmentShaderID:rt,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:v,batching:Gt,batchingColor:Gt&&Z._colorsTexture!==null,instancing:qt,instancingColor:qt&&Z.instanceColor!==null,instancingMorph:qt&&Z.morphTexture!==null,supportsVertexTextures:g,outputColorSpace:pt===null?n.outputColorSpace:pt.isXRRenderTarget===!0?pt.texture.colorSpace:Ls,alphaToCoverage:!!C.alphaToCoverage,map:ce,matcap:Xe,envMap:I,envMapMode:I&&ft.mapping,envMapCubeUVHeight:Q,aoMap:_e,lightMap:Jt,bumpMap:Kt,normalMap:mt,displacementMap:g&&Ee,emissiveMap:Mt,normalMapObjectSpace:mt&&C.normalMapType===zS,normalMapTangentSpace:mt&&C.normalMapType===Gr,metalnessMap:Yt,roughnessMap:ve,anisotropy:De,anisotropyMap:tt,clearcoat:P,clearcoatMap:Bt,clearcoatNormalMap:gt,clearcoatRoughnessMap:Ft,dispersion:y,iridescence:V,iridescenceMap:Ot,iridescenceThicknessMap:_t,sheen:et,sheenColorMap:bt,sheenRoughnessMap:Ht,specularMap:Dt,specularColorMap:Tt,specularIntensityMap:se,transmission:ut,transmissionMap:k,thicknessMap:yt,gradientMap:St,opaque:C.transparent===!1&&C.blending===As&&C.alphaToCoverage===!1,alphaMap:Nt,alphaTest:vt,alphaHash:ct,combine:C.combine,mapUv:ce&&T(C.map.channel),aoMapUv:_e&&T(C.aoMap.channel),lightMapUv:Jt&&T(C.lightMap.channel),bumpMapUv:Kt&&T(C.bumpMap.channel),normalMapUv:mt&&T(C.normalMap.channel),displacementMapUv:Ee&&T(C.displacementMap.channel),emissiveMapUv:Mt&&T(C.emissiveMap.channel),metalnessMapUv:Yt&&T(C.metalnessMap.channel),roughnessMapUv:ve&&T(C.roughnessMap.channel),anisotropyMapUv:tt&&T(C.anisotropyMap.channel),clearcoatMapUv:Bt&&T(C.clearcoatMap.channel),clearcoatNormalMapUv:gt&&T(C.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ft&&T(C.clearcoatRoughnessMap.channel),iridescenceMapUv:Ot&&T(C.iridescenceMap.channel),iridescenceThicknessMapUv:_t&&T(C.iridescenceThicknessMap.channel),sheenColorMapUv:bt&&T(C.sheenColorMap.channel),sheenRoughnessMapUv:Ht&&T(C.sheenRoughnessMap.channel),specularMapUv:Dt&&T(C.specularMap.channel),specularColorMapUv:Tt&&T(C.specularColorMap.channel),specularIntensityMapUv:se&&T(C.specularIntensityMap.channel),transmissionMapUv:k&&T(C.transmissionMap.channel),thicknessMapUv:yt&&T(C.thicknessMap.channel),alphaMapUv:Nt&&T(C.alphaMap.channel),vertexTangents:!!it.attributes.tangent&&(mt||De),vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!it.attributes.color&&it.attributes.color.itemSize===4,pointsUvs:Z.isPoints===!0&&!!it.attributes.uv&&(ce||Nt),fog:!!ot,useFog:C.fog===!0,fogExp2:!!ot&&ot.isFogExp2,flatShading:C.flatShading===!0&&C.wireframe===!1,sizeAttenuation:C.sizeAttenuation===!0,logarithmicDepthBuffer:m,reversedDepthBuffer:Pt,skinning:Z.isSkinnedMesh===!0,morphTargets:it.morphAttributes.position!==void 0,morphNormals:it.morphAttributes.normal!==void 0,morphColors:it.morphAttributes.color!==void 0,morphTargetsCount:It,morphTextureStride:le,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:C.dithering,shadowMapEnabled:n.shadowMap.enabled&&z.length>0,shadowMapType:n.shadowMap.type,toneMapping:ie,decodeVideoTexture:ce&&C.map.isVideoTexture===!0&&Te.getTransfer(C.map.colorSpace)===Fe,decodeVideoTextureEmissive:Mt&&C.emissiveMap.isVideoTexture===!0&&Te.getTransfer(C.emissiveMap.colorSpace)===Fe,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===Gi,flipSided:C.side===In,useDepthPacking:C.depthPacking>=0,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionClipCullDistance:kt&&C.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(kt&&C.extensions.multiDraw===!0||Gt)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:C.customProgramCacheKey()};return Le.vertexUv1s=h.has(1),Le.vertexUv2s=h.has(2),Le.vertexUv3s=h.has(3),h.clear(),Le}function _(C){const w=[];if(C.shaderID?w.push(C.shaderID):(w.push(C.customVertexShaderID),w.push(C.customFragmentShaderID)),C.defines!==void 0)for(const z in C.defines)w.push(z),w.push(C.defines[z]);return C.isRawShaderMaterial===!1&&(U(w,C),L(w,C),w.push(n.outputColorSpace)),w.push(C.customProgramCacheKey),w.join()}function U(C,w){C.push(w.precision),C.push(w.outputColorSpace),C.push(w.envMapMode),C.push(w.envMapCubeUVHeight),C.push(w.mapUv),C.push(w.alphaMapUv),C.push(w.lightMapUv),C.push(w.aoMapUv),C.push(w.bumpMapUv),C.push(w.normalMapUv),C.push(w.displacementMapUv),C.push(w.emissiveMapUv),C.push(w.metalnessMapUv),C.push(w.roughnessMapUv),C.push(w.anisotropyMapUv),C.push(w.clearcoatMapUv),C.push(w.clearcoatNormalMapUv),C.push(w.clearcoatRoughnessMapUv),C.push(w.iridescenceMapUv),C.push(w.iridescenceThicknessMapUv),C.push(w.sheenColorMapUv),C.push(w.sheenRoughnessMapUv),C.push(w.specularMapUv),C.push(w.specularColorMapUv),C.push(w.specularIntensityMapUv),C.push(w.transmissionMapUv),C.push(w.thicknessMapUv),C.push(w.combine),C.push(w.fogExp2),C.push(w.sizeAttenuation),C.push(w.morphTargetsCount),C.push(w.morphAttributeCount),C.push(w.numDirLights),C.push(w.numPointLights),C.push(w.numSpotLights),C.push(w.numSpotLightMaps),C.push(w.numHemiLights),C.push(w.numRectAreaLights),C.push(w.numDirLightShadows),C.push(w.numPointLightShadows),C.push(w.numSpotLightShadows),C.push(w.numSpotLightShadowsWithMaps),C.push(w.numLightProbes),C.push(w.shadowMapType),C.push(w.toneMapping),C.push(w.numClippingPlanes),C.push(w.numClipIntersection),C.push(w.depthPacking)}function L(C,w){u.disableAll(),w.supportsVertexTextures&&u.enable(0),w.instancing&&u.enable(1),w.instancingColor&&u.enable(2),w.instancingMorph&&u.enable(3),w.matcap&&u.enable(4),w.envMap&&u.enable(5),w.normalMapObjectSpace&&u.enable(6),w.normalMapTangentSpace&&u.enable(7),w.clearcoat&&u.enable(8),w.iridescence&&u.enable(9),w.alphaTest&&u.enable(10),w.vertexColors&&u.enable(11),w.vertexAlphas&&u.enable(12),w.vertexUv1s&&u.enable(13),w.vertexUv2s&&u.enable(14),w.vertexUv3s&&u.enable(15),w.vertexTangents&&u.enable(16),w.anisotropy&&u.enable(17),w.alphaHash&&u.enable(18),w.batching&&u.enable(19),w.dispersion&&u.enable(20),w.batchingColor&&u.enable(21),w.gradientMap&&u.enable(22),C.push(u.mask),u.disableAll(),w.fog&&u.enable(0),w.useFog&&u.enable(1),w.flatShading&&u.enable(2),w.logarithmicDepthBuffer&&u.enable(3),w.reversedDepthBuffer&&u.enable(4),w.skinning&&u.enable(5),w.morphTargets&&u.enable(6),w.morphNormals&&u.enable(7),w.morphColors&&u.enable(8),w.premultipliedAlpha&&u.enable(9),w.shadowMapEnabled&&u.enable(10),w.doubleSided&&u.enable(11),w.flipSided&&u.enable(12),w.useDepthPacking&&u.enable(13),w.dithering&&u.enable(14),w.transmission&&u.enable(15),w.sheen&&u.enable(16),w.opaque&&u.enable(17),w.pointsUvs&&u.enable(18),w.decodeVideoTexture&&u.enable(19),w.decodeVideoTextureEmissive&&u.enable(20),w.alphaToCoverage&&u.enable(21),C.push(u.mask)}function R(C){const w=S[C.type];let z;if(w){const $=vi[w];z=CE.clone($.uniforms)}else z=C.uniforms;return z}function B(C,w){let z;for(let $=0,Z=p.length;$<Z;$++){const ot=p[$];if(ot.cacheKey===w){z=ot,++z.usedTimes;break}}return z===void 0&&(z=new p1(n,w,C,o),p.push(z)),z}function O(C){if(--C.usedTimes===0){const w=p.indexOf(C);p[w]=p[p.length-1],p.pop(),C.destroy()}}function N(C){f.remove(C)}function Y(){f.dispose()}return{getParameters:x,getProgramCacheKey:_,getUniforms:R,acquireProgram:B,releaseProgram:O,releaseShaderCache:N,programs:p,dispose:Y}}function x1(){let n=new WeakMap;function t(l){return n.has(l)}function e(l){let u=n.get(l);return u===void 0&&(u={},n.set(l,u)),u}function r(l){n.delete(l)}function s(l,u,f){n.get(l)[u]=f}function o(){n=new WeakMap}return{has:t,get:e,remove:r,update:s,dispose:o}}function M1(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function Wp(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Xp(){const n=[];let t=0;const e=[],r=[],s=[];function o(){t=0,e.length=0,r.length=0,s.length=0}function l(m,g,v,S,T,x){let _=n[t];return _===void 0?(_={id:m.id,object:m,geometry:g,material:v,groupOrder:S,renderOrder:m.renderOrder,z:T,group:x},n[t]=_):(_.id=m.id,_.object=m,_.geometry=g,_.material=v,_.groupOrder=S,_.renderOrder=m.renderOrder,_.z=T,_.group=x),t++,_}function u(m,g,v,S,T,x){const _=l(m,g,v,S,T,x);v.transmission>0?r.push(_):v.transparent===!0?s.push(_):e.push(_)}function f(m,g,v,S,T,x){const _=l(m,g,v,S,T,x);v.transmission>0?r.unshift(_):v.transparent===!0?s.unshift(_):e.unshift(_)}function h(m,g){e.length>1&&e.sort(m||M1),r.length>1&&r.sort(g||Wp),s.length>1&&s.sort(g||Wp)}function p(){for(let m=t,g=n.length;m<g;m++){const v=n[m];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:e,transmissive:r,transparent:s,init:o,push:u,unshift:f,finish:p,sort:h}}function y1(){let n=new WeakMap;function t(r,s){const o=n.get(r);let l;return o===void 0?(l=new Xp,n.set(r,[l])):s>=o.length?(l=new Xp,o.push(l)):l=o[s],l}function e(){n=new WeakMap}return{get:t,dispose:e}}function S1(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new q,color:new jt};break;case"SpotLight":e={position:new q,direction:new q,color:new jt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new q,color:new jt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new q,skyColor:new jt,groundColor:new jt};break;case"RectAreaLight":e={color:new jt,position:new q,halfWidth:new q,halfHeight:new q};break}return n[t.id]=e,e}}}function E1(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let b1=0;function T1(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function A1(n){const t=new S1,e=E1(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)r.probe.push(new q);const s=new q,o=new Ke,l=new Ke;function u(h){let p=0,m=0,g=0;for(let C=0;C<9;C++)r.probe[C].set(0,0,0);let v=0,S=0,T=0,x=0,_=0,U=0,L=0,R=0,B=0,O=0,N=0;h.sort(T1);for(let C=0,w=h.length;C<w;C++){const z=h[C],$=z.color,Z=z.intensity,ot=z.distance,it=z.shadow&&z.shadow.map?z.shadow.map.texture:null;if(z.isAmbientLight)p+=$.r*Z,m+=$.g*Z,g+=$.b*Z;else if(z.isLightProbe){for(let lt=0;lt<9;lt++)r.probe[lt].addScaledVector(z.sh.coefficients[lt],Z);N++}else if(z.isDirectionalLight){const lt=t.get(z);if(lt.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){const ft=z.shadow,Q=e.get(z);Q.shadowIntensity=ft.intensity,Q.shadowBias=ft.bias,Q.shadowNormalBias=ft.normalBias,Q.shadowRadius=ft.radius,Q.shadowMapSize=ft.mapSize,r.directionalShadow[v]=Q,r.directionalShadowMap[v]=it,r.directionalShadowMatrix[v]=z.shadow.matrix,U++}r.directional[v]=lt,v++}else if(z.isSpotLight){const lt=t.get(z);lt.position.setFromMatrixPosition(z.matrixWorld),lt.color.copy($).multiplyScalar(Z),lt.distance=ot,lt.coneCos=Math.cos(z.angle),lt.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),lt.decay=z.decay,r.spot[T]=lt;const ft=z.shadow;if(z.map&&(r.spotLightMap[B]=z.map,B++,ft.updateMatrices(z),z.castShadow&&O++),r.spotLightMatrix[T]=ft.matrix,z.castShadow){const Q=e.get(z);Q.shadowIntensity=ft.intensity,Q.shadowBias=ft.bias,Q.shadowNormalBias=ft.normalBias,Q.shadowRadius=ft.radius,Q.shadowMapSize=ft.mapSize,r.spotShadow[T]=Q,r.spotShadowMap[T]=it,R++}T++}else if(z.isRectAreaLight){const lt=t.get(z);lt.color.copy($).multiplyScalar(Z),lt.halfWidth.set(z.width*.5,0,0),lt.halfHeight.set(0,z.height*.5,0),r.rectArea[x]=lt,x++}else if(z.isPointLight){const lt=t.get(z);if(lt.color.copy(z.color).multiplyScalar(z.intensity),lt.distance=z.distance,lt.decay=z.decay,z.castShadow){const ft=z.shadow,Q=e.get(z);Q.shadowIntensity=ft.intensity,Q.shadowBias=ft.bias,Q.shadowNormalBias=ft.normalBias,Q.shadowRadius=ft.radius,Q.shadowMapSize=ft.mapSize,Q.shadowCameraNear=ft.camera.near,Q.shadowCameraFar=ft.camera.far,r.pointShadow[S]=Q,r.pointShadowMap[S]=it,r.pointShadowMatrix[S]=z.shadow.matrix,L++}r.point[S]=lt,S++}else if(z.isHemisphereLight){const lt=t.get(z);lt.skyColor.copy(z.color).multiplyScalar(Z),lt.groundColor.copy(z.groundColor).multiplyScalar(Z),r.hemi[_]=lt,_++}}x>0&&(n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=wt.LTC_FLOAT_1,r.rectAreaLTC2=wt.LTC_FLOAT_2):(r.rectAreaLTC1=wt.LTC_HALF_1,r.rectAreaLTC2=wt.LTC_HALF_2)),r.ambient[0]=p,r.ambient[1]=m,r.ambient[2]=g;const Y=r.hash;(Y.directionalLength!==v||Y.pointLength!==S||Y.spotLength!==T||Y.rectAreaLength!==x||Y.hemiLength!==_||Y.numDirectionalShadows!==U||Y.numPointShadows!==L||Y.numSpotShadows!==R||Y.numSpotMaps!==B||Y.numLightProbes!==N)&&(r.directional.length=v,r.spot.length=T,r.rectArea.length=x,r.point.length=S,r.hemi.length=_,r.directionalShadow.length=U,r.directionalShadowMap.length=U,r.pointShadow.length=L,r.pointShadowMap.length=L,r.spotShadow.length=R,r.spotShadowMap.length=R,r.directionalShadowMatrix.length=U,r.pointShadowMatrix.length=L,r.spotLightMatrix.length=R+B-O,r.spotLightMap.length=B,r.numSpotLightShadowsWithMaps=O,r.numLightProbes=N,Y.directionalLength=v,Y.pointLength=S,Y.spotLength=T,Y.rectAreaLength=x,Y.hemiLength=_,Y.numDirectionalShadows=U,Y.numPointShadows=L,Y.numSpotShadows=R,Y.numSpotMaps=B,Y.numLightProbes=N,r.version=b1++)}function f(h,p){let m=0,g=0,v=0,S=0,T=0;const x=p.matrixWorldInverse;for(let _=0,U=h.length;_<U;_++){const L=h[_];if(L.isDirectionalLight){const R=r.directional[m];R.direction.setFromMatrixPosition(L.matrixWorld),s.setFromMatrixPosition(L.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(x),m++}else if(L.isSpotLight){const R=r.spot[v];R.position.setFromMatrixPosition(L.matrixWorld),R.position.applyMatrix4(x),R.direction.setFromMatrixPosition(L.matrixWorld),s.setFromMatrixPosition(L.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(x),v++}else if(L.isRectAreaLight){const R=r.rectArea[S];R.position.setFromMatrixPosition(L.matrixWorld),R.position.applyMatrix4(x),l.identity(),o.copy(L.matrixWorld),o.premultiply(x),l.extractRotation(o),R.halfWidth.set(L.width*.5,0,0),R.halfHeight.set(0,L.height*.5,0),R.halfWidth.applyMatrix4(l),R.halfHeight.applyMatrix4(l),S++}else if(L.isPointLight){const R=r.point[g];R.position.setFromMatrixPosition(L.matrixWorld),R.position.applyMatrix4(x),g++}else if(L.isHemisphereLight){const R=r.hemi[T];R.direction.setFromMatrixPosition(L.matrixWorld),R.direction.transformDirection(x),T++}}}return{setup:u,setupView:f,state:r}}function qp(n){const t=new A1(n),e=[],r=[];function s(p){h.camera=p,e.length=0,r.length=0}function o(p){e.push(p)}function l(p){r.push(p)}function u(){t.setup(e)}function f(p){t.setupView(e,p)}const h={lightsArray:e,shadowsArray:r,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:h,setupLights:u,setupLightsView:f,pushLight:o,pushShadow:l}}function w1(n){let t=new WeakMap;function e(s,o=0){const l=t.get(s);let u;return l===void 0?(u=new qp(n),t.set(s,[u])):o>=l.length?(u=new qp(n),l.push(u)):u=l[o],u}function r(){t=new WeakMap}return{get:e,dispose:r}}const R1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,C1=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function P1(n,t,e){let r=new Tm;const s=new ne,o=new ne,l=new Ze,u=new Pm({depthPacking:BS}),f=new Dm,h={},p=e.maxTextureSize,m={[mr]:In,[In]:mr,[Gi]:Gi},g=new Ei({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ne},radius:{value:4}},vertexShader:R1,fragmentShader:C1}),v=g.clone();v.defines.HORIZONTAL_PASS=1;const S=new bi;S.setAttribute("position",new Si(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new Wi(S,g),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=rm;let _=this.type;this.render=function(O,N,Y){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||O.length===0)return;const C=n.getRenderTarget(),w=n.getActiveCubeFace(),z=n.getActiveMipmapLevel(),$=n.state;$.setBlending(fr),$.buffers.depth.getReversed()===!0?$.buffers.color.setClear(0,0,0,0):$.buffers.color.setClear(1,1,1,1),$.buffers.depth.setTest(!0),$.setScissorTest(!1);const Z=_!==Vi&&this.type===Vi,ot=_===Vi&&this.type!==Vi;for(let it=0,lt=O.length;it<lt;it++){const ft=O[it],Q=ft.shadow;if(Q===void 0){console.warn("THREE.WebGLShadowMap:",ft,"has no shadow.");continue}if(Q.autoUpdate===!1&&Q.needsUpdate===!1)continue;s.copy(Q.mapSize);const Et=Q.getFrameExtents();if(s.multiply(Et),o.copy(Q.mapSize),(s.x>p||s.y>p)&&(s.x>p&&(o.x=Math.floor(p/Et.x),s.x=o.x*Et.x,Q.mapSize.x=o.x),s.y>p&&(o.y=Math.floor(p/Et.y),s.y=o.y*Et.y,Q.mapSize.y=o.y)),Q.map===null||Z===!0||ot===!0){const It=this.type!==Vi?{minFilter:pi,magFilter:pi}:{};Q.map!==null&&Q.map.dispose(),Q.map=new Vr(s.x,s.y,It),Q.map.texture.name=ft.name+".shadowMap",Q.camera.updateProjectionMatrix()}n.setRenderTarget(Q.map),n.clear();const Rt=Q.getViewportCount();for(let It=0;It<Rt;It++){const le=Q.getViewport(It);l.set(o.x*le.x,o.y*le.y,o.x*le.z,o.y*le.w),$.viewport(l),Q.updateMatrices(ft,It),r=Q.getFrustum(),R(N,Y,Q.camera,ft,this.type)}Q.isPointLightShadow!==!0&&this.type===Vi&&U(Q,Y),Q.needsUpdate=!1}_=this.type,x.needsUpdate=!1,n.setRenderTarget(C,w,z)};function U(O,N){const Y=t.update(T);g.defines.VSM_SAMPLES!==O.blurSamples&&(g.defines.VSM_SAMPLES=O.blurSamples,v.defines.VSM_SAMPLES=O.blurSamples,g.needsUpdate=!0,v.needsUpdate=!0),O.mapPass===null&&(O.mapPass=new Vr(s.x,s.y)),g.uniforms.shadow_pass.value=O.map.texture,g.uniforms.resolution.value=O.mapSize,g.uniforms.radius.value=O.radius,n.setRenderTarget(O.mapPass),n.clear(),n.renderBufferDirect(N,null,Y,g,T,null),v.uniforms.shadow_pass.value=O.mapPass.texture,v.uniforms.resolution.value=O.mapSize,v.uniforms.radius.value=O.radius,n.setRenderTarget(O.map),n.clear(),n.renderBufferDirect(N,null,Y,v,T,null)}function L(O,N,Y,C){let w=null;const z=Y.isPointLight===!0?O.customDistanceMaterial:O.customDepthMaterial;if(z!==void 0)w=z;else if(w=Y.isPointLight===!0?f:u,n.localClippingEnabled&&N.clipShadows===!0&&Array.isArray(N.clippingPlanes)&&N.clippingPlanes.length!==0||N.displacementMap&&N.displacementScale!==0||N.alphaMap&&N.alphaTest>0||N.map&&N.alphaTest>0||N.alphaToCoverage===!0){const $=w.uuid,Z=N.uuid;let ot=h[$];ot===void 0&&(ot={},h[$]=ot);let it=ot[Z];it===void 0&&(it=w.clone(),ot[Z]=it,N.addEventListener("dispose",B)),w=it}if(w.visible=N.visible,w.wireframe=N.wireframe,C===Vi?w.side=N.shadowSide!==null?N.shadowSide:N.side:w.side=N.shadowSide!==null?N.shadowSide:m[N.side],w.alphaMap=N.alphaMap,w.alphaTest=N.alphaToCoverage===!0?.5:N.alphaTest,w.map=N.map,w.clipShadows=N.clipShadows,w.clippingPlanes=N.clippingPlanes,w.clipIntersection=N.clipIntersection,w.displacementMap=N.displacementMap,w.displacementScale=N.displacementScale,w.displacementBias=N.displacementBias,w.wireframeLinewidth=N.wireframeLinewidth,w.linewidth=N.linewidth,Y.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const $=n.properties.get(w);$.light=Y}return w}function R(O,N,Y,C,w){if(O.visible===!1)return;if(O.layers.test(N.layers)&&(O.isMesh||O.isLine||O.isPoints)&&(O.castShadow||O.receiveShadow&&w===Vi)&&(!O.frustumCulled||r.intersectsObject(O))){O.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,O.matrixWorld);const Z=t.update(O),ot=O.material;if(Array.isArray(ot)){const it=Z.groups;for(let lt=0,ft=it.length;lt<ft;lt++){const Q=it[lt],Et=ot[Q.materialIndex];if(Et&&Et.visible){const Rt=L(O,Et,C,w);O.onBeforeShadow(n,O,N,Y,Z,Rt,Q),n.renderBufferDirect(Y,null,Z,Rt,O,Q),O.onAfterShadow(n,O,N,Y,Z,Rt,Q)}}}else if(ot.visible){const it=L(O,ot,C,w);O.onBeforeShadow(n,O,N,Y,Z,it,null),n.renderBufferDirect(Y,null,Z,it,O,null),O.onAfterShadow(n,O,N,Y,Z,it,null)}}const $=O.children;for(let Z=0,ot=$.length;Z<ot;Z++)R($[Z],N,Y,C,w)}function B(O){O.target.removeEventListener("dispose",B);for(const Y in h){const C=h[Y],w=O.target.uuid;w in C&&(C[w].dispose(),delete C[w])}}}const D1={[cu]:uu,[hu]:pu,[fu]:mu,[Cs]:du,[uu]:cu,[pu]:hu,[mu]:fu,[du]:Cs};function L1(n,t){function e(){let k=!1;const yt=new Ze;let St=null;const Nt=new Ze(0,0,0,0);return{setMask:function(vt){St!==vt&&!k&&(n.colorMask(vt,vt,vt,vt),St=vt)},setLocked:function(vt){k=vt},setClear:function(vt,ct,kt,ie,Le){Le===!0&&(vt*=ie,ct*=ie,kt*=ie),yt.set(vt,ct,kt,ie),Nt.equals(yt)===!1&&(n.clearColor(vt,ct,kt,ie),Nt.copy(yt))},reset:function(){k=!1,St=null,Nt.set(-1,0,0,0)}}}function r(){let k=!1,yt=!1,St=null,Nt=null,vt=null;return{setReversed:function(ct){if(yt!==ct){const kt=t.get("EXT_clip_control");ct?kt.clipControlEXT(kt.LOWER_LEFT_EXT,kt.ZERO_TO_ONE_EXT):kt.clipControlEXT(kt.LOWER_LEFT_EXT,kt.NEGATIVE_ONE_TO_ONE_EXT),yt=ct;const ie=vt;vt=null,this.setClear(ie)}},getReversed:function(){return yt},setTest:function(ct){ct?pt(n.DEPTH_TEST):Pt(n.DEPTH_TEST)},setMask:function(ct){St!==ct&&!k&&(n.depthMask(ct),St=ct)},setFunc:function(ct){if(yt&&(ct=D1[ct]),Nt!==ct){switch(ct){case cu:n.depthFunc(n.NEVER);break;case uu:n.depthFunc(n.ALWAYS);break;case hu:n.depthFunc(n.LESS);break;case Cs:n.depthFunc(n.LEQUAL);break;case fu:n.depthFunc(n.EQUAL);break;case du:n.depthFunc(n.GEQUAL);break;case pu:n.depthFunc(n.GREATER);break;case mu:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Nt=ct}},setLocked:function(ct){k=ct},setClear:function(ct){vt!==ct&&(yt&&(ct=1-ct),n.clearDepth(ct),vt=ct)},reset:function(){k=!1,St=null,Nt=null,vt=null,yt=!1}}}function s(){let k=!1,yt=null,St=null,Nt=null,vt=null,ct=null,kt=null,ie=null,Le=null;return{setTest:function(be){k||(be?pt(n.STENCIL_TEST):Pt(n.STENCIL_TEST))},setMask:function(be){yt!==be&&!k&&(n.stencilMask(be),yt=be)},setFunc:function(be,ni,Gn){(St!==be||Nt!==ni||vt!==Gn)&&(n.stencilFunc(be,ni,Gn),St=be,Nt=ni,vt=Gn)},setOp:function(be,ni,Gn){(ct!==be||kt!==ni||ie!==Gn)&&(n.stencilOp(be,ni,Gn),ct=be,kt=ni,ie=Gn)},setLocked:function(be){k=be},setClear:function(be){Le!==be&&(n.clearStencil(be),Le=be)},reset:function(){k=!1,yt=null,St=null,Nt=null,vt=null,ct=null,kt=null,ie=null,Le=null}}}const o=new e,l=new r,u=new s,f=new WeakMap,h=new WeakMap;let p={},m={},g=new WeakMap,v=[],S=null,T=!1,x=null,_=null,U=null,L=null,R=null,B=null,O=null,N=new jt(0,0,0),Y=0,C=!1,w=null,z=null,$=null,Z=null,ot=null;const it=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let lt=!1,ft=0;const Q=n.getParameter(n.VERSION);Q.indexOf("WebGL")!==-1?(ft=parseFloat(/^WebGL (\d)/.exec(Q)[1]),lt=ft>=1):Q.indexOf("OpenGL ES")!==-1&&(ft=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),lt=ft>=2);let Et=null,Rt={};const It=n.getParameter(n.SCISSOR_BOX),le=n.getParameter(n.VIEWPORT),we=new Ze().fromArray(It),Ue=new Ze().fromArray(le);function de(k,yt,St,Nt){const vt=new Uint8Array(4),ct=n.createTexture();n.bindTexture(k,ct),n.texParameteri(k,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(k,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let kt=0;kt<St;kt++)k===n.TEXTURE_3D||k===n.TEXTURE_2D_ARRAY?n.texImage3D(yt,0,n.RGBA,1,1,Nt,0,n.RGBA,n.UNSIGNED_BYTE,vt):n.texImage2D(yt+kt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,vt);return ct}const rt={};rt[n.TEXTURE_2D]=de(n.TEXTURE_2D,n.TEXTURE_2D,1),rt[n.TEXTURE_CUBE_MAP]=de(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),rt[n.TEXTURE_2D_ARRAY]=de(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),rt[n.TEXTURE_3D]=de(n.TEXTURE_3D,n.TEXTURE_3D,1,1),o.setClear(0,0,0,1),l.setClear(1),u.setClear(0),pt(n.DEPTH_TEST),l.setFunc(Cs),Kt(!1),mt(Gd),pt(n.CULL_FACE),_e(fr);function pt(k){p[k]!==!0&&(n.enable(k),p[k]=!0)}function Pt(k){p[k]!==!1&&(n.disable(k),p[k]=!1)}function qt(k,yt){return m[k]!==yt?(n.bindFramebuffer(k,yt),m[k]=yt,k===n.DRAW_FRAMEBUFFER&&(m[n.FRAMEBUFFER]=yt),k===n.FRAMEBUFFER&&(m[n.DRAW_FRAMEBUFFER]=yt),!0):!1}function Gt(k,yt){let St=v,Nt=!1;if(k){St=g.get(yt),St===void 0&&(St=[],g.set(yt,St));const vt=k.textures;if(St.length!==vt.length||St[0]!==n.COLOR_ATTACHMENT0){for(let ct=0,kt=vt.length;ct<kt;ct++)St[ct]=n.COLOR_ATTACHMENT0+ct;St.length=vt.length,Nt=!0}}else St[0]!==n.BACK&&(St[0]=n.BACK,Nt=!0);Nt&&n.drawBuffers(St)}function ce(k){return S!==k?(n.useProgram(k),S=k,!0):!1}const Xe={[Nr]:n.FUNC_ADD,[uS]:n.FUNC_SUBTRACT,[hS]:n.FUNC_REVERSE_SUBTRACT};Xe[fS]=n.MIN,Xe[dS]=n.MAX;const I={[pS]:n.ZERO,[mS]:n.ONE,[_S]:n.SRC_COLOR,[ou]:n.SRC_ALPHA,[SS]:n.SRC_ALPHA_SATURATE,[MS]:n.DST_COLOR,[vS]:n.DST_ALPHA,[gS]:n.ONE_MINUS_SRC_COLOR,[lu]:n.ONE_MINUS_SRC_ALPHA,[yS]:n.ONE_MINUS_DST_COLOR,[xS]:n.ONE_MINUS_DST_ALPHA,[ES]:n.CONSTANT_COLOR,[bS]:n.ONE_MINUS_CONSTANT_COLOR,[TS]:n.CONSTANT_ALPHA,[AS]:n.ONE_MINUS_CONSTANT_ALPHA};function _e(k,yt,St,Nt,vt,ct,kt,ie,Le,be){if(k===fr){T===!0&&(Pt(n.BLEND),T=!1);return}if(T===!1&&(pt(n.BLEND),T=!0),k!==cS){if(k!==x||be!==C){if((_!==Nr||R!==Nr)&&(n.blendEquation(n.FUNC_ADD),_=Nr,R=Nr),be)switch(k){case As:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Wd:n.blendFunc(n.ONE,n.ONE);break;case Xd:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case qd:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case As:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Wd:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Xd:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case qd:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}U=null,L=null,B=null,O=null,N.set(0,0,0),Y=0,x=k,C=be}return}vt=vt||yt,ct=ct||St,kt=kt||Nt,(yt!==_||vt!==R)&&(n.blendEquationSeparate(Xe[yt],Xe[vt]),_=yt,R=vt),(St!==U||Nt!==L||ct!==B||kt!==O)&&(n.blendFuncSeparate(I[St],I[Nt],I[ct],I[kt]),U=St,L=Nt,B=ct,O=kt),(ie.equals(N)===!1||Le!==Y)&&(n.blendColor(ie.r,ie.g,ie.b,Le),N.copy(ie),Y=Le),x=k,C=!1}function Jt(k,yt){k.side===Gi?Pt(n.CULL_FACE):pt(n.CULL_FACE);let St=k.side===In;yt&&(St=!St),Kt(St),k.blending===As&&k.transparent===!1?_e(fr):_e(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),l.setFunc(k.depthFunc),l.setTest(k.depthTest),l.setMask(k.depthWrite),o.setMask(k.colorWrite);const Nt=k.stencilWrite;u.setTest(Nt),Nt&&(u.setMask(k.stencilWriteMask),u.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),u.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),Mt(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?pt(n.SAMPLE_ALPHA_TO_COVERAGE):Pt(n.SAMPLE_ALPHA_TO_COVERAGE)}function Kt(k){w!==k&&(k?n.frontFace(n.CW):n.frontFace(n.CCW),w=k)}function mt(k){k!==aS?(pt(n.CULL_FACE),k!==z&&(k===Gd?n.cullFace(n.BACK):k===oS?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Pt(n.CULL_FACE),z=k}function Ee(k){k!==$&&(lt&&n.lineWidth(k),$=k)}function Mt(k,yt,St){k?(pt(n.POLYGON_OFFSET_FILL),(Z!==yt||ot!==St)&&(n.polygonOffset(yt,St),Z=yt,ot=St)):Pt(n.POLYGON_OFFSET_FILL)}function Yt(k){k?pt(n.SCISSOR_TEST):Pt(n.SCISSOR_TEST)}function ve(k){k===void 0&&(k=n.TEXTURE0+it-1),Et!==k&&(n.activeTexture(k),Et=k)}function De(k,yt,St){St===void 0&&(Et===null?St=n.TEXTURE0+it-1:St=Et);let Nt=Rt[St];Nt===void 0&&(Nt={type:void 0,texture:void 0},Rt[St]=Nt),(Nt.type!==k||Nt.texture!==yt)&&(Et!==St&&(n.activeTexture(St),Et=St),n.bindTexture(k,yt||rt[k]),Nt.type=k,Nt.texture=yt)}function P(){const k=Rt[Et];k!==void 0&&k.type!==void 0&&(n.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function y(){try{n.compressedTexImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function V(){try{n.compressedTexImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function et(){try{n.texSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ut(){try{n.texSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function tt(){try{n.compressedTexSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Bt(){try{n.compressedTexSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function gt(){try{n.texStorage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ft(){try{n.texStorage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ot(){try{n.texImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function _t(){try{n.texImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function bt(k){we.equals(k)===!1&&(n.scissor(k.x,k.y,k.z,k.w),we.copy(k))}function Ht(k){Ue.equals(k)===!1&&(n.viewport(k.x,k.y,k.z,k.w),Ue.copy(k))}function Dt(k,yt){let St=h.get(yt);St===void 0&&(St=new WeakMap,h.set(yt,St));let Nt=St.get(k);Nt===void 0&&(Nt=n.getUniformBlockIndex(yt,k.name),St.set(k,Nt))}function Tt(k,yt){const Nt=h.get(yt).get(k);f.get(yt)!==Nt&&(n.uniformBlockBinding(yt,Nt,k.__bindingPointIndex),f.set(yt,Nt))}function se(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),l.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),p={},Et=null,Rt={},m={},g=new WeakMap,v=[],S=null,T=!1,x=null,_=null,U=null,L=null,R=null,B=null,O=null,N=new jt(0,0,0),Y=0,C=!1,w=null,z=null,$=null,Z=null,ot=null,we.set(0,0,n.canvas.width,n.canvas.height),Ue.set(0,0,n.canvas.width,n.canvas.height),o.reset(),l.reset(),u.reset()}return{buffers:{color:o,depth:l,stencil:u},enable:pt,disable:Pt,bindFramebuffer:qt,drawBuffers:Gt,useProgram:ce,setBlending:_e,setMaterial:Jt,setFlipSided:Kt,setCullFace:mt,setLineWidth:Ee,setPolygonOffset:Mt,setScissorTest:Yt,activeTexture:ve,bindTexture:De,unbindTexture:P,compressedTexImage2D:y,compressedTexImage3D:V,texImage2D:Ot,texImage3D:_t,updateUBOMapping:Dt,uniformBlockBinding:Tt,texStorage2D:gt,texStorage3D:Ft,texSubImage2D:et,texSubImage3D:ut,compressedTexSubImage2D:tt,compressedTexSubImage3D:Bt,scissor:bt,viewport:Ht,reset:se}}function I1(n,t,e,r,s,o,l){const u=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,f=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new ne,p=new WeakMap;let m;const g=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(P,y){return v?new OffscreenCanvas(P,y):$o("canvas")}function T(P,y,V){let et=1;const ut=De(P);if((ut.width>V||ut.height>V)&&(et=V/Math.max(ut.width,ut.height)),et<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const tt=Math.floor(et*ut.width),Bt=Math.floor(et*ut.height);m===void 0&&(m=S(tt,Bt));const gt=y?S(tt,Bt):m;return gt.width=tt,gt.height=Bt,gt.getContext("2d").drawImage(P,0,0,tt,Bt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ut.width+"x"+ut.height+") to ("+tt+"x"+Bt+")."),gt}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ut.width+"x"+ut.height+")."),P;return P}function x(P){return P.generateMipmaps}function _(P){n.generateMipmap(P)}function U(P){return P.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?n.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function L(P,y,V,et,ut=!1){if(P!==null){if(n[P]!==void 0)return n[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let tt=y;if(y===n.RED&&(V===n.FLOAT&&(tt=n.R32F),V===n.HALF_FLOAT&&(tt=n.R16F),V===n.UNSIGNED_BYTE&&(tt=n.R8)),y===n.RED_INTEGER&&(V===n.UNSIGNED_BYTE&&(tt=n.R8UI),V===n.UNSIGNED_SHORT&&(tt=n.R16UI),V===n.UNSIGNED_INT&&(tt=n.R32UI),V===n.BYTE&&(tt=n.R8I),V===n.SHORT&&(tt=n.R16I),V===n.INT&&(tt=n.R32I)),y===n.RG&&(V===n.FLOAT&&(tt=n.RG32F),V===n.HALF_FLOAT&&(tt=n.RG16F),V===n.UNSIGNED_BYTE&&(tt=n.RG8)),y===n.RG_INTEGER&&(V===n.UNSIGNED_BYTE&&(tt=n.RG8UI),V===n.UNSIGNED_SHORT&&(tt=n.RG16UI),V===n.UNSIGNED_INT&&(tt=n.RG32UI),V===n.BYTE&&(tt=n.RG8I),V===n.SHORT&&(tt=n.RG16I),V===n.INT&&(tt=n.RG32I)),y===n.RGB_INTEGER&&(V===n.UNSIGNED_BYTE&&(tt=n.RGB8UI),V===n.UNSIGNED_SHORT&&(tt=n.RGB16UI),V===n.UNSIGNED_INT&&(tt=n.RGB32UI),V===n.BYTE&&(tt=n.RGB8I),V===n.SHORT&&(tt=n.RGB16I),V===n.INT&&(tt=n.RGB32I)),y===n.RGBA_INTEGER&&(V===n.UNSIGNED_BYTE&&(tt=n.RGBA8UI),V===n.UNSIGNED_SHORT&&(tt=n.RGBA16UI),V===n.UNSIGNED_INT&&(tt=n.RGBA32UI),V===n.BYTE&&(tt=n.RGBA8I),V===n.SHORT&&(tt=n.RGBA16I),V===n.INT&&(tt=n.RGBA32I)),y===n.RGB&&(V===n.UNSIGNED_INT_5_9_9_9_REV&&(tt=n.RGB9_E5),V===n.UNSIGNED_INT_10F_11F_11F_REV&&(tt=n.R11F_G11F_B10F)),y===n.RGBA){const Bt=ut?Zo:Te.getTransfer(et);V===n.FLOAT&&(tt=n.RGBA32F),V===n.HALF_FLOAT&&(tt=n.RGBA16F),V===n.UNSIGNED_BYTE&&(tt=Bt===Fe?n.SRGB8_ALPHA8:n.RGBA8),V===n.UNSIGNED_SHORT_4_4_4_4&&(tt=n.RGBA4),V===n.UNSIGNED_SHORT_5_5_5_1&&(tt=n.RGB5_A1)}return(tt===n.R16F||tt===n.R32F||tt===n.RG16F||tt===n.RG32F||tt===n.RGBA16F||tt===n.RGBA32F)&&t.get("EXT_color_buffer_float"),tt}function R(P,y){let V;return P?y===null||y===kr||y===da?V=n.DEPTH24_STENCIL8:y===Mi?V=n.DEPTH32F_STENCIL8:y===fa&&(V=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===kr||y===da?V=n.DEPTH_COMPONENT24:y===Mi?V=n.DEPTH_COMPONENT32F:y===fa&&(V=n.DEPTH_COMPONENT16),V}function B(P,y){return x(P)===!0||P.isFramebufferTexture&&P.minFilter!==pi&&P.minFilter!==xi?Math.log2(Math.max(y.width,y.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?y.mipmaps.length:1}function O(P){const y=P.target;y.removeEventListener("dispose",O),Y(y),y.isVideoTexture&&p.delete(y)}function N(P){const y=P.target;y.removeEventListener("dispose",N),w(y)}function Y(P){const y=r.get(P);if(y.__webglInit===void 0)return;const V=P.source,et=g.get(V);if(et){const ut=et[y.__cacheKey];ut.usedTimes--,ut.usedTimes===0&&C(P),Object.keys(et).length===0&&g.delete(V)}r.remove(P)}function C(P){const y=r.get(P);n.deleteTexture(y.__webglTexture);const V=P.source,et=g.get(V);delete et[y.__cacheKey],l.memory.textures--}function w(P){const y=r.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),r.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let et=0;et<6;et++){if(Array.isArray(y.__webglFramebuffer[et]))for(let ut=0;ut<y.__webglFramebuffer[et].length;ut++)n.deleteFramebuffer(y.__webglFramebuffer[et][ut]);else n.deleteFramebuffer(y.__webglFramebuffer[et]);y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer[et])}else{if(Array.isArray(y.__webglFramebuffer))for(let et=0;et<y.__webglFramebuffer.length;et++)n.deleteFramebuffer(y.__webglFramebuffer[et]);else n.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&n.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let et=0;et<y.__webglColorRenderbuffer.length;et++)y.__webglColorRenderbuffer[et]&&n.deleteRenderbuffer(y.__webglColorRenderbuffer[et]);y.__webglDepthRenderbuffer&&n.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const V=P.textures;for(let et=0,ut=V.length;et<ut;et++){const tt=r.get(V[et]);tt.__webglTexture&&(n.deleteTexture(tt.__webglTexture),l.memory.textures--),r.remove(V[et])}r.remove(P)}let z=0;function $(){z=0}function Z(){const P=z;return P>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+s.maxTextures),z+=1,P}function ot(P){const y=[];return y.push(P.wrapS),y.push(P.wrapT),y.push(P.wrapR||0),y.push(P.magFilter),y.push(P.minFilter),y.push(P.anisotropy),y.push(P.internalFormat),y.push(P.format),y.push(P.type),y.push(P.generateMipmaps),y.push(P.premultiplyAlpha),y.push(P.flipY),y.push(P.unpackAlignment),y.push(P.colorSpace),y.join()}function it(P,y){const V=r.get(P);if(P.isVideoTexture&&Yt(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&V.__version!==P.version){const et=P.image;if(et===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(et.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{rt(V,P,y);return}}else P.isExternalTexture&&(V.__webglTexture=P.sourceTexture?P.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,V.__webglTexture,n.TEXTURE0+y)}function lt(P,y){const V=r.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&V.__version!==P.version){rt(V,P,y);return}e.bindTexture(n.TEXTURE_2D_ARRAY,V.__webglTexture,n.TEXTURE0+y)}function ft(P,y){const V=r.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&V.__version!==P.version){rt(V,P,y);return}e.bindTexture(n.TEXTURE_3D,V.__webglTexture,n.TEXTURE0+y)}function Q(P,y){const V=r.get(P);if(P.version>0&&V.__version!==P.version){pt(V,P,y);return}e.bindTexture(n.TEXTURE_CUBE_MAP,V.__webglTexture,n.TEXTURE0+y)}const Et={[vu]:n.REPEAT,[Or]:n.CLAMP_TO_EDGE,[xu]:n.MIRRORED_REPEAT},Rt={[pi]:n.NEAREST,[FS]:n.NEAREST_MIPMAP_NEAREST,[go]:n.NEAREST_MIPMAP_LINEAR,[xi]:n.LINEAR,[Tc]:n.LINEAR_MIPMAP_NEAREST,[Br]:n.LINEAR_MIPMAP_LINEAR},It={[kS]:n.NEVER,[qS]:n.ALWAYS,[HS]:n.LESS,[pm]:n.LEQUAL,[VS]:n.EQUAL,[XS]:n.GEQUAL,[GS]:n.GREATER,[WS]:n.NOTEQUAL};function le(P,y){if(y.type===Mi&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===xi||y.magFilter===Tc||y.magFilter===go||y.magFilter===Br||y.minFilter===xi||y.minFilter===Tc||y.minFilter===go||y.minFilter===Br)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(P,n.TEXTURE_WRAP_S,Et[y.wrapS]),n.texParameteri(P,n.TEXTURE_WRAP_T,Et[y.wrapT]),(P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY)&&n.texParameteri(P,n.TEXTURE_WRAP_R,Et[y.wrapR]),n.texParameteri(P,n.TEXTURE_MAG_FILTER,Rt[y.magFilter]),n.texParameteri(P,n.TEXTURE_MIN_FILTER,Rt[y.minFilter]),y.compareFunction&&(n.texParameteri(P,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(P,n.TEXTURE_COMPARE_FUNC,It[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===pi||y.minFilter!==go&&y.minFilter!==Br||y.type===Mi&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||r.get(y).__currentAnisotropy){const V=t.get("EXT_texture_filter_anisotropic");n.texParameterf(P,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),r.get(y).__currentAnisotropy=y.anisotropy}}}function we(P,y){let V=!1;P.__webglInit===void 0&&(P.__webglInit=!0,y.addEventListener("dispose",O));const et=y.source;let ut=g.get(et);ut===void 0&&(ut={},g.set(et,ut));const tt=ot(y);if(tt!==P.__cacheKey){ut[tt]===void 0&&(ut[tt]={texture:n.createTexture(),usedTimes:0},l.memory.textures++,V=!0),ut[tt].usedTimes++;const Bt=ut[P.__cacheKey];Bt!==void 0&&(ut[P.__cacheKey].usedTimes--,Bt.usedTimes===0&&C(y)),P.__cacheKey=tt,P.__webglTexture=ut[tt].texture}return V}function Ue(P,y,V){return Math.floor(Math.floor(P/V)/y)}function de(P,y,V,et){const tt=P.updateRanges;if(tt.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,y.width,y.height,V,et,y.data);else{tt.sort((_t,bt)=>_t.start-bt.start);let Bt=0;for(let _t=1;_t<tt.length;_t++){const bt=tt[Bt],Ht=tt[_t],Dt=bt.start+bt.count,Tt=Ue(Ht.start,y.width,4),se=Ue(bt.start,y.width,4);Ht.start<=Dt+1&&Tt===se&&Ue(Ht.start+Ht.count-1,y.width,4)===Tt?bt.count=Math.max(bt.count,Ht.start+Ht.count-bt.start):(++Bt,tt[Bt]=Ht)}tt.length=Bt+1;const gt=n.getParameter(n.UNPACK_ROW_LENGTH),Ft=n.getParameter(n.UNPACK_SKIP_PIXELS),Ot=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,y.width);for(let _t=0,bt=tt.length;_t<bt;_t++){const Ht=tt[_t],Dt=Math.floor(Ht.start/4),Tt=Math.ceil(Ht.count/4),se=Dt%y.width,k=Math.floor(Dt/y.width),yt=Tt,St=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,se),n.pixelStorei(n.UNPACK_SKIP_ROWS,k),e.texSubImage2D(n.TEXTURE_2D,0,se,k,yt,St,V,et,y.data)}P.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,gt),n.pixelStorei(n.UNPACK_SKIP_PIXELS,Ft),n.pixelStorei(n.UNPACK_SKIP_ROWS,Ot)}}function rt(P,y,V){let et=n.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(et=n.TEXTURE_2D_ARRAY),y.isData3DTexture&&(et=n.TEXTURE_3D);const ut=we(P,y),tt=y.source;e.bindTexture(et,P.__webglTexture,n.TEXTURE0+V);const Bt=r.get(tt);if(tt.version!==Bt.__version||ut===!0){e.activeTexture(n.TEXTURE0+V);const gt=Te.getPrimaries(Te.workingColorSpace),Ft=y.colorSpace===ur?null:Te.getPrimaries(y.colorSpace),Ot=y.colorSpace===ur||gt===Ft?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ot);let _t=T(y.image,!1,s.maxTextureSize);_t=ve(y,_t);const bt=o.convert(y.format,y.colorSpace),Ht=o.convert(y.type);let Dt=L(y.internalFormat,bt,Ht,y.colorSpace,y.isVideoTexture);le(et,y);let Tt;const se=y.mipmaps,k=y.isVideoTexture!==!0,yt=Bt.__version===void 0||ut===!0,St=tt.dataReady,Nt=B(y,_t);if(y.isDepthTexture)Dt=R(y.format===ma,y.type),yt&&(k?e.texStorage2D(n.TEXTURE_2D,1,Dt,_t.width,_t.height):e.texImage2D(n.TEXTURE_2D,0,Dt,_t.width,_t.height,0,bt,Ht,null));else if(y.isDataTexture)if(se.length>0){k&&yt&&e.texStorage2D(n.TEXTURE_2D,Nt,Dt,se[0].width,se[0].height);for(let vt=0,ct=se.length;vt<ct;vt++)Tt=se[vt],k?St&&e.texSubImage2D(n.TEXTURE_2D,vt,0,0,Tt.width,Tt.height,bt,Ht,Tt.data):e.texImage2D(n.TEXTURE_2D,vt,Dt,Tt.width,Tt.height,0,bt,Ht,Tt.data);y.generateMipmaps=!1}else k?(yt&&e.texStorage2D(n.TEXTURE_2D,Nt,Dt,_t.width,_t.height),St&&de(y,_t,bt,Ht)):e.texImage2D(n.TEXTURE_2D,0,Dt,_t.width,_t.height,0,bt,Ht,_t.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){k&&yt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Nt,Dt,se[0].width,se[0].height,_t.depth);for(let vt=0,ct=se.length;vt<ct;vt++)if(Tt=se[vt],y.format!==di)if(bt!==null)if(k){if(St)if(y.layerUpdates.size>0){const kt=Sp(Tt.width,Tt.height,y.format,y.type);for(const ie of y.layerUpdates){const Le=Tt.data.subarray(ie*kt/Tt.data.BYTES_PER_ELEMENT,(ie+1)*kt/Tt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,vt,0,0,ie,Tt.width,Tt.height,1,bt,Le)}y.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,vt,0,0,0,Tt.width,Tt.height,_t.depth,bt,Tt.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,vt,Dt,Tt.width,Tt.height,_t.depth,0,Tt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else k?St&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,vt,0,0,0,Tt.width,Tt.height,_t.depth,bt,Ht,Tt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,vt,Dt,Tt.width,Tt.height,_t.depth,0,bt,Ht,Tt.data)}else{k&&yt&&e.texStorage2D(n.TEXTURE_2D,Nt,Dt,se[0].width,se[0].height);for(let vt=0,ct=se.length;vt<ct;vt++)Tt=se[vt],y.format!==di?bt!==null?k?St&&e.compressedTexSubImage2D(n.TEXTURE_2D,vt,0,0,Tt.width,Tt.height,bt,Tt.data):e.compressedTexImage2D(n.TEXTURE_2D,vt,Dt,Tt.width,Tt.height,0,Tt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):k?St&&e.texSubImage2D(n.TEXTURE_2D,vt,0,0,Tt.width,Tt.height,bt,Ht,Tt.data):e.texImage2D(n.TEXTURE_2D,vt,Dt,Tt.width,Tt.height,0,bt,Ht,Tt.data)}else if(y.isDataArrayTexture)if(k){if(yt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Nt,Dt,_t.width,_t.height,_t.depth),St)if(y.layerUpdates.size>0){const vt=Sp(_t.width,_t.height,y.format,y.type);for(const ct of y.layerUpdates){const kt=_t.data.subarray(ct*vt/_t.data.BYTES_PER_ELEMENT,(ct+1)*vt/_t.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ct,_t.width,_t.height,1,bt,Ht,kt)}y.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,_t.width,_t.height,_t.depth,bt,Ht,_t.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Dt,_t.width,_t.height,_t.depth,0,bt,Ht,_t.data);else if(y.isData3DTexture)k?(yt&&e.texStorage3D(n.TEXTURE_3D,Nt,Dt,_t.width,_t.height,_t.depth),St&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,_t.width,_t.height,_t.depth,bt,Ht,_t.data)):e.texImage3D(n.TEXTURE_3D,0,Dt,_t.width,_t.height,_t.depth,0,bt,Ht,_t.data);else if(y.isFramebufferTexture){if(yt)if(k)e.texStorage2D(n.TEXTURE_2D,Nt,Dt,_t.width,_t.height);else{let vt=_t.width,ct=_t.height;for(let kt=0;kt<Nt;kt++)e.texImage2D(n.TEXTURE_2D,kt,Dt,vt,ct,0,bt,Ht,null),vt>>=1,ct>>=1}}else if(se.length>0){if(k&&yt){const vt=De(se[0]);e.texStorage2D(n.TEXTURE_2D,Nt,Dt,vt.width,vt.height)}for(let vt=0,ct=se.length;vt<ct;vt++)Tt=se[vt],k?St&&e.texSubImage2D(n.TEXTURE_2D,vt,0,0,bt,Ht,Tt):e.texImage2D(n.TEXTURE_2D,vt,Dt,bt,Ht,Tt);y.generateMipmaps=!1}else if(k){if(yt){const vt=De(_t);e.texStorage2D(n.TEXTURE_2D,Nt,Dt,vt.width,vt.height)}St&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,bt,Ht,_t)}else e.texImage2D(n.TEXTURE_2D,0,Dt,bt,Ht,_t);x(y)&&_(et),Bt.__version=tt.version,y.onUpdate&&y.onUpdate(y)}P.__version=y.version}function pt(P,y,V){if(y.image.length!==6)return;const et=we(P,y),ut=y.source;e.bindTexture(n.TEXTURE_CUBE_MAP,P.__webglTexture,n.TEXTURE0+V);const tt=r.get(ut);if(ut.version!==tt.__version||et===!0){e.activeTexture(n.TEXTURE0+V);const Bt=Te.getPrimaries(Te.workingColorSpace),gt=y.colorSpace===ur?null:Te.getPrimaries(y.colorSpace),Ft=y.colorSpace===ur||Bt===gt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ft);const Ot=y.isCompressedTexture||y.image[0].isCompressedTexture,_t=y.image[0]&&y.image[0].isDataTexture,bt=[];for(let ct=0;ct<6;ct++)!Ot&&!_t?bt[ct]=T(y.image[ct],!0,s.maxCubemapSize):bt[ct]=_t?y.image[ct].image:y.image[ct],bt[ct]=ve(y,bt[ct]);const Ht=bt[0],Dt=o.convert(y.format,y.colorSpace),Tt=o.convert(y.type),se=L(y.internalFormat,Dt,Tt,y.colorSpace),k=y.isVideoTexture!==!0,yt=tt.__version===void 0||et===!0,St=ut.dataReady;let Nt=B(y,Ht);le(n.TEXTURE_CUBE_MAP,y);let vt;if(Ot){k&&yt&&e.texStorage2D(n.TEXTURE_CUBE_MAP,Nt,se,Ht.width,Ht.height);for(let ct=0;ct<6;ct++){vt=bt[ct].mipmaps;for(let kt=0;kt<vt.length;kt++){const ie=vt[kt];y.format!==di?Dt!==null?k?St&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,kt,0,0,ie.width,ie.height,Dt,ie.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,kt,se,ie.width,ie.height,0,ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?St&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,kt,0,0,ie.width,ie.height,Dt,Tt,ie.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,kt,se,ie.width,ie.height,0,Dt,Tt,ie.data)}}}else{if(vt=y.mipmaps,k&&yt){vt.length>0&&Nt++;const ct=De(bt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,Nt,se,ct.width,ct.height)}for(let ct=0;ct<6;ct++)if(_t){k?St&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,0,0,bt[ct].width,bt[ct].height,Dt,Tt,bt[ct].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,se,bt[ct].width,bt[ct].height,0,Dt,Tt,bt[ct].data);for(let kt=0;kt<vt.length;kt++){const Le=vt[kt].image[ct].image;k?St&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,kt+1,0,0,Le.width,Le.height,Dt,Tt,Le.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,kt+1,se,Le.width,Le.height,0,Dt,Tt,Le.data)}}else{k?St&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,0,0,Dt,Tt,bt[ct]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,se,Dt,Tt,bt[ct]);for(let kt=0;kt<vt.length;kt++){const ie=vt[kt];k?St&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,kt+1,0,0,Dt,Tt,ie.image[ct]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,kt+1,se,Dt,Tt,ie.image[ct])}}}x(y)&&_(n.TEXTURE_CUBE_MAP),tt.__version=ut.version,y.onUpdate&&y.onUpdate(y)}P.__version=y.version}function Pt(P,y,V,et,ut,tt){const Bt=o.convert(V.format,V.colorSpace),gt=o.convert(V.type),Ft=L(V.internalFormat,Bt,gt,V.colorSpace),Ot=r.get(y),_t=r.get(V);if(_t.__renderTarget=y,!Ot.__hasExternalTextures){const bt=Math.max(1,y.width>>tt),Ht=Math.max(1,y.height>>tt);ut===n.TEXTURE_3D||ut===n.TEXTURE_2D_ARRAY?e.texImage3D(ut,tt,Ft,bt,Ht,y.depth,0,Bt,gt,null):e.texImage2D(ut,tt,Ft,bt,Ht,0,Bt,gt,null)}e.bindFramebuffer(n.FRAMEBUFFER,P),Mt(y)?u.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,et,ut,_t.__webglTexture,0,Ee(y)):(ut===n.TEXTURE_2D||ut>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ut<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,et,ut,_t.__webglTexture,tt),e.bindFramebuffer(n.FRAMEBUFFER,null)}function qt(P,y,V){if(n.bindRenderbuffer(n.RENDERBUFFER,P),y.depthBuffer){const et=y.depthTexture,ut=et&&et.isDepthTexture?et.type:null,tt=R(y.stencilBuffer,ut),Bt=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,gt=Ee(y);Mt(y)?u.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,gt,tt,y.width,y.height):V?n.renderbufferStorageMultisample(n.RENDERBUFFER,gt,tt,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,tt,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Bt,n.RENDERBUFFER,P)}else{const et=y.textures;for(let ut=0;ut<et.length;ut++){const tt=et[ut],Bt=o.convert(tt.format,tt.colorSpace),gt=o.convert(tt.type),Ft=L(tt.internalFormat,Bt,gt,tt.colorSpace),Ot=Ee(y);V&&Mt(y)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ot,Ft,y.width,y.height):Mt(y)?u.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ot,Ft,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,Ft,y.width,y.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Gt(P,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,P),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const et=r.get(y.depthTexture);et.__renderTarget=y,(!et.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),it(y.depthTexture,0);const ut=et.__webglTexture,tt=Ee(y);if(y.depthTexture.format===pa)Mt(y)?u.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ut,0,tt):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ut,0);else if(y.depthTexture.format===ma)Mt(y)?u.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ut,0,tt):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ut,0);else throw new Error("Unknown depthTexture format")}function ce(P){const y=r.get(P),V=P.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==P.depthTexture){const et=P.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),et){const ut=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,et.removeEventListener("dispose",ut)};et.addEventListener("dispose",ut),y.__depthDisposeCallback=ut}y.__boundDepthTexture=et}if(P.depthTexture&&!y.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");const et=P.texture.mipmaps;et&&et.length>0?Gt(y.__webglFramebuffer[0],P):Gt(y.__webglFramebuffer,P)}else if(V){y.__webglDepthbuffer=[];for(let et=0;et<6;et++)if(e.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[et]),y.__webglDepthbuffer[et]===void 0)y.__webglDepthbuffer[et]=n.createRenderbuffer(),qt(y.__webglDepthbuffer[et],P,!1);else{const ut=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,tt=y.__webglDepthbuffer[et];n.bindRenderbuffer(n.RENDERBUFFER,tt),n.framebufferRenderbuffer(n.FRAMEBUFFER,ut,n.RENDERBUFFER,tt)}}else{const et=P.texture.mipmaps;if(et&&et.length>0?e.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=n.createRenderbuffer(),qt(y.__webglDepthbuffer,P,!1);else{const ut=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,tt=y.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,tt),n.framebufferRenderbuffer(n.FRAMEBUFFER,ut,n.RENDERBUFFER,tt)}}e.bindFramebuffer(n.FRAMEBUFFER,null)}function Xe(P,y,V){const et=r.get(P);y!==void 0&&Pt(et.__webglFramebuffer,P,P.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),V!==void 0&&ce(P)}function I(P){const y=P.texture,V=r.get(P),et=r.get(y);P.addEventListener("dispose",N);const ut=P.textures,tt=P.isWebGLCubeRenderTarget===!0,Bt=ut.length>1;if(Bt||(et.__webglTexture===void 0&&(et.__webglTexture=n.createTexture()),et.__version=y.version,l.memory.textures++),tt){V.__webglFramebuffer=[];for(let gt=0;gt<6;gt++)if(y.mipmaps&&y.mipmaps.length>0){V.__webglFramebuffer[gt]=[];for(let Ft=0;Ft<y.mipmaps.length;Ft++)V.__webglFramebuffer[gt][Ft]=n.createFramebuffer()}else V.__webglFramebuffer[gt]=n.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){V.__webglFramebuffer=[];for(let gt=0;gt<y.mipmaps.length;gt++)V.__webglFramebuffer[gt]=n.createFramebuffer()}else V.__webglFramebuffer=n.createFramebuffer();if(Bt)for(let gt=0,Ft=ut.length;gt<Ft;gt++){const Ot=r.get(ut[gt]);Ot.__webglTexture===void 0&&(Ot.__webglTexture=n.createTexture(),l.memory.textures++)}if(P.samples>0&&Mt(P)===!1){V.__webglMultisampledFramebuffer=n.createFramebuffer(),V.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let gt=0;gt<ut.length;gt++){const Ft=ut[gt];V.__webglColorRenderbuffer[gt]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,V.__webglColorRenderbuffer[gt]);const Ot=o.convert(Ft.format,Ft.colorSpace),_t=o.convert(Ft.type),bt=L(Ft.internalFormat,Ot,_t,Ft.colorSpace,P.isXRRenderTarget===!0),Ht=Ee(P);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ht,bt,P.width,P.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+gt,n.RENDERBUFFER,V.__webglColorRenderbuffer[gt])}n.bindRenderbuffer(n.RENDERBUFFER,null),P.depthBuffer&&(V.__webglDepthRenderbuffer=n.createRenderbuffer(),qt(V.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(tt){e.bindTexture(n.TEXTURE_CUBE_MAP,et.__webglTexture),le(n.TEXTURE_CUBE_MAP,y);for(let gt=0;gt<6;gt++)if(y.mipmaps&&y.mipmaps.length>0)for(let Ft=0;Ft<y.mipmaps.length;Ft++)Pt(V.__webglFramebuffer[gt][Ft],P,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Ft);else Pt(V.__webglFramebuffer[gt],P,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0);x(y)&&_(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Bt){for(let gt=0,Ft=ut.length;gt<Ft;gt++){const Ot=ut[gt],_t=r.get(Ot);let bt=n.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(bt=P.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(bt,_t.__webglTexture),le(bt,Ot),Pt(V.__webglFramebuffer,P,Ot,n.COLOR_ATTACHMENT0+gt,bt,0),x(Ot)&&_(bt)}e.unbindTexture()}else{let gt=n.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(gt=P.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(gt,et.__webglTexture),le(gt,y),y.mipmaps&&y.mipmaps.length>0)for(let Ft=0;Ft<y.mipmaps.length;Ft++)Pt(V.__webglFramebuffer[Ft],P,y,n.COLOR_ATTACHMENT0,gt,Ft);else Pt(V.__webglFramebuffer,P,y,n.COLOR_ATTACHMENT0,gt,0);x(y)&&_(gt),e.unbindTexture()}P.depthBuffer&&ce(P)}function _e(P){const y=P.textures;for(let V=0,et=y.length;V<et;V++){const ut=y[V];if(x(ut)){const tt=U(P),Bt=r.get(ut).__webglTexture;e.bindTexture(tt,Bt),_(tt),e.unbindTexture()}}}const Jt=[],Kt=[];function mt(P){if(P.samples>0){if(Mt(P)===!1){const y=P.textures,V=P.width,et=P.height;let ut=n.COLOR_BUFFER_BIT;const tt=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Bt=r.get(P),gt=y.length>1;if(gt)for(let Ot=0;Ot<y.length;Ot++)e.bindFramebuffer(n.FRAMEBUFFER,Bt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ot,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,Bt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ot,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,Bt.__webglMultisampledFramebuffer);const Ft=P.texture.mipmaps;Ft&&Ft.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Bt.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Bt.__webglFramebuffer);for(let Ot=0;Ot<y.length;Ot++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(ut|=n.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(ut|=n.STENCIL_BUFFER_BIT)),gt){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Bt.__webglColorRenderbuffer[Ot]);const _t=r.get(y[Ot]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,_t,0)}n.blitFramebuffer(0,0,V,et,0,0,V,et,ut,n.NEAREST),f===!0&&(Jt.length=0,Kt.length=0,Jt.push(n.COLOR_ATTACHMENT0+Ot),P.depthBuffer&&P.resolveDepthBuffer===!1&&(Jt.push(tt),Kt.push(tt),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Kt)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Jt))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),gt)for(let Ot=0;Ot<y.length;Ot++){e.bindFramebuffer(n.FRAMEBUFFER,Bt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ot,n.RENDERBUFFER,Bt.__webglColorRenderbuffer[Ot]);const _t=r.get(y[Ot]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,Bt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ot,n.TEXTURE_2D,_t,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Bt.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&f){const y=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[y])}}}function Ee(P){return Math.min(s.maxSamples,P.samples)}function Mt(P){const y=r.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function Yt(P){const y=l.render.frame;p.get(P)!==y&&(p.set(P,y),P.update())}function ve(P,y){const V=P.colorSpace,et=P.format,ut=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||V!==Ls&&V!==ur&&(Te.getTransfer(V)===Fe?(et!==di||ut!==qi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),y}function De(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(h.width=P.naturalWidth||P.width,h.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(h.width=P.displayWidth,h.height=P.displayHeight):(h.width=P.width,h.height=P.height),h}this.allocateTextureUnit=Z,this.resetTextureUnits=$,this.setTexture2D=it,this.setTexture2DArray=lt,this.setTexture3D=ft,this.setTextureCube=Q,this.rebindTextures=Xe,this.setupRenderTarget=I,this.updateRenderTargetMipmap=_e,this.updateMultisampleRenderTarget=mt,this.setupDepthRenderbuffer=ce,this.setupFrameBufferTexture=Pt,this.useMultisampledRTT=Mt}function U1(n,t){function e(r,s=ur){let o;const l=Te.getTransfer(s);if(r===qi)return n.UNSIGNED_BYTE;if(r===nh)return n.UNSIGNED_SHORT_4_4_4_4;if(r===ih)return n.UNSIGNED_SHORT_5_5_5_1;if(r===lm)return n.UNSIGNED_INT_5_9_9_9_REV;if(r===cm)return n.UNSIGNED_INT_10F_11F_11F_REV;if(r===am)return n.BYTE;if(r===om)return n.SHORT;if(r===fa)return n.UNSIGNED_SHORT;if(r===eh)return n.INT;if(r===kr)return n.UNSIGNED_INT;if(r===Mi)return n.FLOAT;if(r===va)return n.HALF_FLOAT;if(r===um)return n.ALPHA;if(r===hm)return n.RGB;if(r===di)return n.RGBA;if(r===pa)return n.DEPTH_COMPONENT;if(r===ma)return n.DEPTH_STENCIL;if(r===fm)return n.RED;if(r===rh)return n.RED_INTEGER;if(r===dm)return n.RG;if(r===sh)return n.RG_INTEGER;if(r===ah)return n.RGBA_INTEGER;if(r===Go||r===Wo||r===Xo||r===qo)if(l===Fe)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===Go)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Wo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Xo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===qo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===Go)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Wo)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Xo)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===qo)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Mu||r===yu||r===Su||r===Eu)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===Mu)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===yu)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Su)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Eu)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===bu||r===Tu||r===Au)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(r===bu||r===Tu)return l===Fe?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===Au)return l===Fe?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===wu||r===Ru||r===Cu||r===Pu||r===Du||r===Lu||r===Iu||r===Uu||r===Nu||r===Fu||r===Ou||r===Bu||r===zu||r===ku)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(r===wu)return l===Fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Ru)return l===Fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Cu)return l===Fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Pu)return l===Fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Du)return l===Fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Lu)return l===Fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Iu)return l===Fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Uu)return l===Fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Nu)return l===Fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Fu)return l===Fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Ou)return l===Fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Bu)return l===Fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===zu)return l===Fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===ku)return l===Fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Hu||r===Vu||r===Gu)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(r===Hu)return l===Fe?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Vu)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Gu)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Wu||r===Xu||r===qu||r===Yu)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(r===Wu)return o.COMPRESSED_RED_RGTC1_EXT;if(r===Xu)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===qu)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Yu)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===da?n.UNSIGNED_INT_24_8:n[r]!==void 0?n[r]:null}return{convert:e}}const N1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,F1=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class O1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const r=new Rm(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,r=new Ei({vertexShader:N1,fragmentShader:F1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Wi(new rl(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class B1 extends Wr{constructor(t,e){super();const r=this;let s=null,o=1,l=null,u="local-floor",f=1,h=null,p=null,m=null,g=null,v=null,S=null;const T=typeof XRWebGLBinding<"u",x=new O1,_={},U=e.getContextAttributes();let L=null,R=null;const B=[],O=[],N=new ne;let Y=null;const C=new ti;C.viewport=new Ze;const w=new ti;w.viewport=new Ze;const z=[C,w],$=new nb;let Z=null,ot=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(rt){let pt=B[rt];return pt===void 0&&(pt=new qc,B[rt]=pt),pt.getTargetRaySpace()},this.getControllerGrip=function(rt){let pt=B[rt];return pt===void 0&&(pt=new qc,B[rt]=pt),pt.getGripSpace()},this.getHand=function(rt){let pt=B[rt];return pt===void 0&&(pt=new qc,B[rt]=pt),pt.getHandSpace()};function it(rt){const pt=O.indexOf(rt.inputSource);if(pt===-1)return;const Pt=B[pt];Pt!==void 0&&(Pt.update(rt.inputSource,rt.frame,h||l),Pt.dispatchEvent({type:rt.type,data:rt.inputSource}))}function lt(){s.removeEventListener("select",it),s.removeEventListener("selectstart",it),s.removeEventListener("selectend",it),s.removeEventListener("squeeze",it),s.removeEventListener("squeezestart",it),s.removeEventListener("squeezeend",it),s.removeEventListener("end",lt),s.removeEventListener("inputsourceschange",ft);for(let rt=0;rt<B.length;rt++){const pt=O[rt];pt!==null&&(O[rt]=null,B[rt].disconnect(pt))}Z=null,ot=null,x.reset();for(const rt in _)delete _[rt];t.setRenderTarget(L),v=null,g=null,m=null,s=null,R=null,de.stop(),r.isPresenting=!1,t.setPixelRatio(Y),t.setSize(N.width,N.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(rt){o=rt,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(rt){u=rt,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||l},this.setReferenceSpace=function(rt){h=rt},this.getBaseLayer=function(){return g!==null?g:v},this.getBinding=function(){return m===null&&T&&(m=new XRWebGLBinding(s,e)),m},this.getFrame=function(){return S},this.getSession=function(){return s},this.setSession=async function(rt){if(s=rt,s!==null){if(L=t.getRenderTarget(),s.addEventListener("select",it),s.addEventListener("selectstart",it),s.addEventListener("selectend",it),s.addEventListener("squeeze",it),s.addEventListener("squeezestart",it),s.addEventListener("squeezeend",it),s.addEventListener("end",lt),s.addEventListener("inputsourceschange",ft),U.xrCompatible!==!0&&await e.makeXRCompatible(),Y=t.getPixelRatio(),t.getSize(N),T&&"createProjectionLayer"in XRWebGLBinding.prototype){let Pt=null,qt=null,Gt=null;U.depth&&(Gt=U.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Pt=U.stencil?ma:pa,qt=U.stencil?da:kr);const ce={colorFormat:e.RGBA8,depthFormat:Gt,scaleFactor:o};m=this.getBinding(),g=m.createProjectionLayer(ce),s.updateRenderState({layers:[g]}),t.setPixelRatio(1),t.setSize(g.textureWidth,g.textureHeight,!1),R=new Vr(g.textureWidth,g.textureHeight,{format:di,type:qi,depthTexture:new wm(g.textureWidth,g.textureHeight,qt,void 0,void 0,void 0,void 0,void 0,void 0,Pt),stencilBuffer:U.stencil,colorSpace:t.outputColorSpace,samples:U.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const Pt={antialias:U.antialias,alpha:!0,depth:U.depth,stencil:U.stencil,framebufferScaleFactor:o};v=new XRWebGLLayer(s,e,Pt),s.updateRenderState({baseLayer:v}),t.setPixelRatio(1),t.setSize(v.framebufferWidth,v.framebufferHeight,!1),R=new Vr(v.framebufferWidth,v.framebufferHeight,{format:di,type:qi,colorSpace:t.outputColorSpace,stencilBuffer:U.stencil,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}R.isXRRenderTarget=!0,this.setFoveation(f),h=null,l=await s.requestReferenceSpace(u),de.setContext(s),de.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function ft(rt){for(let pt=0;pt<rt.removed.length;pt++){const Pt=rt.removed[pt],qt=O.indexOf(Pt);qt>=0&&(O[qt]=null,B[qt].disconnect(Pt))}for(let pt=0;pt<rt.added.length;pt++){const Pt=rt.added[pt];let qt=O.indexOf(Pt);if(qt===-1){for(let ce=0;ce<B.length;ce++)if(ce>=O.length){O.push(Pt),qt=ce;break}else if(O[ce]===null){O[ce]=Pt,qt=ce;break}if(qt===-1)break}const Gt=B[qt];Gt&&Gt.connect(Pt)}}const Q=new q,Et=new q;function Rt(rt,pt,Pt){Q.setFromMatrixPosition(pt.matrixWorld),Et.setFromMatrixPosition(Pt.matrixWorld);const qt=Q.distanceTo(Et),Gt=pt.projectionMatrix.elements,ce=Pt.projectionMatrix.elements,Xe=Gt[14]/(Gt[10]-1),I=Gt[14]/(Gt[10]+1),_e=(Gt[9]+1)/Gt[5],Jt=(Gt[9]-1)/Gt[5],Kt=(Gt[8]-1)/Gt[0],mt=(ce[8]+1)/ce[0],Ee=Xe*Kt,Mt=Xe*mt,Yt=qt/(-Kt+mt),ve=Yt*-Kt;if(pt.matrixWorld.decompose(rt.position,rt.quaternion,rt.scale),rt.translateX(ve),rt.translateZ(Yt),rt.matrixWorld.compose(rt.position,rt.quaternion,rt.scale),rt.matrixWorldInverse.copy(rt.matrixWorld).invert(),Gt[10]===-1)rt.projectionMatrix.copy(pt.projectionMatrix),rt.projectionMatrixInverse.copy(pt.projectionMatrixInverse);else{const De=Xe+Yt,P=I+Yt,y=Ee-ve,V=Mt+(qt-ve),et=_e*I/P*De,ut=Jt*I/P*De;rt.projectionMatrix.makePerspective(y,V,et,ut,De,P),rt.projectionMatrixInverse.copy(rt.projectionMatrix).invert()}}function It(rt,pt){pt===null?rt.matrixWorld.copy(rt.matrix):rt.matrixWorld.multiplyMatrices(pt.matrixWorld,rt.matrix),rt.matrixWorldInverse.copy(rt.matrixWorld).invert()}this.updateCamera=function(rt){if(s===null)return;let pt=rt.near,Pt=rt.far;x.texture!==null&&(x.depthNear>0&&(pt=x.depthNear),x.depthFar>0&&(Pt=x.depthFar)),$.near=w.near=C.near=pt,$.far=w.far=C.far=Pt,(Z!==$.near||ot!==$.far)&&(s.updateRenderState({depthNear:$.near,depthFar:$.far}),Z=$.near,ot=$.far),$.layers.mask=rt.layers.mask|6,C.layers.mask=$.layers.mask&3,w.layers.mask=$.layers.mask&5;const qt=rt.parent,Gt=$.cameras;It($,qt);for(let ce=0;ce<Gt.length;ce++)It(Gt[ce],qt);Gt.length===2?Rt($,C,w):$.projectionMatrix.copy(C.projectionMatrix),le(rt,$,qt)};function le(rt,pt,Pt){Pt===null?rt.matrix.copy(pt.matrixWorld):(rt.matrix.copy(Pt.matrixWorld),rt.matrix.invert(),rt.matrix.multiply(pt.matrixWorld)),rt.matrix.decompose(rt.position,rt.quaternion,rt.scale),rt.updateMatrixWorld(!0),rt.projectionMatrix.copy(pt.projectionMatrix),rt.projectionMatrixInverse.copy(pt.projectionMatrixInverse),rt.isPerspectiveCamera&&(rt.fov=_a*2*Math.atan(1/rt.projectionMatrix.elements[5]),rt.zoom=1)}this.getCamera=function(){return $},this.getFoveation=function(){if(!(g===null&&v===null))return f},this.setFoveation=function(rt){f=rt,g!==null&&(g.fixedFoveation=rt),v!==null&&v.fixedFoveation!==void 0&&(v.fixedFoveation=rt)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh($)},this.getCameraTexture=function(rt){return _[rt]};let we=null;function Ue(rt,pt){if(p=pt.getViewerPose(h||l),S=pt,p!==null){const Pt=p.views;v!==null&&(t.setRenderTargetFramebuffer(R,v.framebuffer),t.setRenderTarget(R));let qt=!1;Pt.length!==$.cameras.length&&($.cameras.length=0,qt=!0);for(let I=0;I<Pt.length;I++){const _e=Pt[I];let Jt=null;if(v!==null)Jt=v.getViewport(_e);else{const mt=m.getViewSubImage(g,_e);Jt=mt.viewport,I===0&&(t.setRenderTargetTextures(R,mt.colorTexture,mt.depthStencilTexture),t.setRenderTarget(R))}let Kt=z[I];Kt===void 0&&(Kt=new ti,Kt.layers.enable(I),Kt.viewport=new Ze,z[I]=Kt),Kt.matrix.fromArray(_e.transform.matrix),Kt.matrix.decompose(Kt.position,Kt.quaternion,Kt.scale),Kt.projectionMatrix.fromArray(_e.projectionMatrix),Kt.projectionMatrixInverse.copy(Kt.projectionMatrix).invert(),Kt.viewport.set(Jt.x,Jt.y,Jt.width,Jt.height),I===0&&($.matrix.copy(Kt.matrix),$.matrix.decompose($.position,$.quaternion,$.scale)),qt===!0&&$.cameras.push(Kt)}const Gt=s.enabledFeatures;if(Gt&&Gt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&T){m=r.getBinding();const I=m.getDepthInformation(Pt[0]);I&&I.isValid&&I.texture&&x.init(I,s.renderState)}if(Gt&&Gt.includes("camera-access")&&T){t.state.unbindTexture(),m=r.getBinding();for(let I=0;I<Pt.length;I++){const _e=Pt[I].camera;if(_e){let Jt=_[_e];Jt||(Jt=new Rm,_[_e]=Jt);const Kt=m.getCameraImage(_e);Jt.sourceTexture=Kt}}}}for(let Pt=0;Pt<B.length;Pt++){const qt=O[Pt],Gt=B[Pt];qt!==null&&Gt!==void 0&&Gt.update(qt,pt,h||l)}we&&we(rt,pt),pt.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:pt}),S=null}const de=new Im;de.setAnimationLoop(Ue),this.setAnimationLoop=function(rt){we=rt},this.dispose=function(){}}}const Ir=new ei,z1=new Ke;function k1(n,t){function e(x,_){x.matrixAutoUpdate===!0&&x.updateMatrix(),_.value.copy(x.matrix)}function r(x,_){_.color.getRGB(x.fogColor.value,Sm(n)),_.isFog?(x.fogNear.value=_.near,x.fogFar.value=_.far):_.isFogExp2&&(x.fogDensity.value=_.density)}function s(x,_,U,L,R){_.isMeshBasicMaterial||_.isMeshLambertMaterial?o(x,_):_.isMeshToonMaterial?(o(x,_),m(x,_)):_.isMeshPhongMaterial?(o(x,_),p(x,_)):_.isMeshStandardMaterial?(o(x,_),g(x,_),_.isMeshPhysicalMaterial&&v(x,_,R)):_.isMeshMatcapMaterial?(o(x,_),S(x,_)):_.isMeshDepthMaterial?o(x,_):_.isMeshDistanceMaterial?(o(x,_),T(x,_)):_.isMeshNormalMaterial?o(x,_):_.isLineBasicMaterial?(l(x,_),_.isLineDashedMaterial&&u(x,_)):_.isPointsMaterial?f(x,_,U,L):_.isSpriteMaterial?h(x,_):_.isShadowMaterial?(x.color.value.copy(_.color),x.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function o(x,_){x.opacity.value=_.opacity,_.color&&x.diffuse.value.copy(_.color),_.emissive&&x.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(x.map.value=_.map,e(_.map,x.mapTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,e(_.alphaMap,x.alphaMapTransform)),_.bumpMap&&(x.bumpMap.value=_.bumpMap,e(_.bumpMap,x.bumpMapTransform),x.bumpScale.value=_.bumpScale,_.side===In&&(x.bumpScale.value*=-1)),_.normalMap&&(x.normalMap.value=_.normalMap,e(_.normalMap,x.normalMapTransform),x.normalScale.value.copy(_.normalScale),_.side===In&&x.normalScale.value.negate()),_.displacementMap&&(x.displacementMap.value=_.displacementMap,e(_.displacementMap,x.displacementMapTransform),x.displacementScale.value=_.displacementScale,x.displacementBias.value=_.displacementBias),_.emissiveMap&&(x.emissiveMap.value=_.emissiveMap,e(_.emissiveMap,x.emissiveMapTransform)),_.specularMap&&(x.specularMap.value=_.specularMap,e(_.specularMap,x.specularMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest);const U=t.get(_),L=U.envMap,R=U.envMapRotation;L&&(x.envMap.value=L,Ir.copy(R),Ir.x*=-1,Ir.y*=-1,Ir.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(Ir.y*=-1,Ir.z*=-1),x.envMapRotation.value.setFromMatrix4(z1.makeRotationFromEuler(Ir)),x.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=_.reflectivity,x.ior.value=_.ior,x.refractionRatio.value=_.refractionRatio),_.lightMap&&(x.lightMap.value=_.lightMap,x.lightMapIntensity.value=_.lightMapIntensity,e(_.lightMap,x.lightMapTransform)),_.aoMap&&(x.aoMap.value=_.aoMap,x.aoMapIntensity.value=_.aoMapIntensity,e(_.aoMap,x.aoMapTransform))}function l(x,_){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,_.map&&(x.map.value=_.map,e(_.map,x.mapTransform))}function u(x,_){x.dashSize.value=_.dashSize,x.totalSize.value=_.dashSize+_.gapSize,x.scale.value=_.scale}function f(x,_,U,L){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,x.size.value=_.size*U,x.scale.value=L*.5,_.map&&(x.map.value=_.map,e(_.map,x.uvTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,e(_.alphaMap,x.alphaMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest)}function h(x,_){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,x.rotation.value=_.rotation,_.map&&(x.map.value=_.map,e(_.map,x.mapTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,e(_.alphaMap,x.alphaMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest)}function p(x,_){x.specular.value.copy(_.specular),x.shininess.value=Math.max(_.shininess,1e-4)}function m(x,_){_.gradientMap&&(x.gradientMap.value=_.gradientMap)}function g(x,_){x.metalness.value=_.metalness,_.metalnessMap&&(x.metalnessMap.value=_.metalnessMap,e(_.metalnessMap,x.metalnessMapTransform)),x.roughness.value=_.roughness,_.roughnessMap&&(x.roughnessMap.value=_.roughnessMap,e(_.roughnessMap,x.roughnessMapTransform)),_.envMap&&(x.envMapIntensity.value=_.envMapIntensity)}function v(x,_,U){x.ior.value=_.ior,_.sheen>0&&(x.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),x.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(x.sheenColorMap.value=_.sheenColorMap,e(_.sheenColorMap,x.sheenColorMapTransform)),_.sheenRoughnessMap&&(x.sheenRoughnessMap.value=_.sheenRoughnessMap,e(_.sheenRoughnessMap,x.sheenRoughnessMapTransform))),_.clearcoat>0&&(x.clearcoat.value=_.clearcoat,x.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(x.clearcoatMap.value=_.clearcoatMap,e(_.clearcoatMap,x.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,e(_.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(x.clearcoatNormalMap.value=_.clearcoatNormalMap,e(_.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===In&&x.clearcoatNormalScale.value.negate())),_.dispersion>0&&(x.dispersion.value=_.dispersion),_.iridescence>0&&(x.iridescence.value=_.iridescence,x.iridescenceIOR.value=_.iridescenceIOR,x.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(x.iridescenceMap.value=_.iridescenceMap,e(_.iridescenceMap,x.iridescenceMapTransform)),_.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=_.iridescenceThicknessMap,e(_.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),_.transmission>0&&(x.transmission.value=_.transmission,x.transmissionSamplerMap.value=U.texture,x.transmissionSamplerSize.value.set(U.width,U.height),_.transmissionMap&&(x.transmissionMap.value=_.transmissionMap,e(_.transmissionMap,x.transmissionMapTransform)),x.thickness.value=_.thickness,_.thicknessMap&&(x.thicknessMap.value=_.thicknessMap,e(_.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=_.attenuationDistance,x.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(x.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(x.anisotropyMap.value=_.anisotropyMap,e(_.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=_.specularIntensity,x.specularColor.value.copy(_.specularColor),_.specularColorMap&&(x.specularColorMap.value=_.specularColorMap,e(_.specularColorMap,x.specularColorMapTransform)),_.specularIntensityMap&&(x.specularIntensityMap.value=_.specularIntensityMap,e(_.specularIntensityMap,x.specularIntensityMapTransform))}function S(x,_){_.matcap&&(x.matcap.value=_.matcap)}function T(x,_){const U=t.get(_).light;x.referencePosition.value.setFromMatrixPosition(U.matrixWorld),x.nearDistance.value=U.shadow.camera.near,x.farDistance.value=U.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:s}}function H1(n,t,e,r){let s={},o={},l=[];const u=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function f(U,L){const R=L.program;r.uniformBlockBinding(U,R)}function h(U,L){let R=s[U.id];R===void 0&&(S(U),R=p(U),s[U.id]=R,U.addEventListener("dispose",x));const B=L.program;r.updateUBOMapping(U,B);const O=t.render.frame;o[U.id]!==O&&(g(U),o[U.id]=O)}function p(U){const L=m();U.__bindingPointIndex=L;const R=n.createBuffer(),B=U.__size,O=U.usage;return n.bindBuffer(n.UNIFORM_BUFFER,R),n.bufferData(n.UNIFORM_BUFFER,B,O),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,L,R),R}function m(){for(let U=0;U<u;U++)if(l.indexOf(U)===-1)return l.push(U),U;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(U){const L=s[U.id],R=U.uniforms,B=U.__cache;n.bindBuffer(n.UNIFORM_BUFFER,L);for(let O=0,N=R.length;O<N;O++){const Y=Array.isArray(R[O])?R[O]:[R[O]];for(let C=0,w=Y.length;C<w;C++){const z=Y[C];if(v(z,O,C,B)===!0){const $=z.__offset,Z=Array.isArray(z.value)?z.value:[z.value];let ot=0;for(let it=0;it<Z.length;it++){const lt=Z[it],ft=T(lt);typeof lt=="number"||typeof lt=="boolean"?(z.__data[0]=lt,n.bufferSubData(n.UNIFORM_BUFFER,$+ot,z.__data)):lt.isMatrix3?(z.__data[0]=lt.elements[0],z.__data[1]=lt.elements[1],z.__data[2]=lt.elements[2],z.__data[3]=0,z.__data[4]=lt.elements[3],z.__data[5]=lt.elements[4],z.__data[6]=lt.elements[5],z.__data[7]=0,z.__data[8]=lt.elements[6],z.__data[9]=lt.elements[7],z.__data[10]=lt.elements[8],z.__data[11]=0):(lt.toArray(z.__data,ot),ot+=ft.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,$,z.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function v(U,L,R,B){const O=U.value,N=L+"_"+R;if(B[N]===void 0)return typeof O=="number"||typeof O=="boolean"?B[N]=O:B[N]=O.clone(),!0;{const Y=B[N];if(typeof O=="number"||typeof O=="boolean"){if(Y!==O)return B[N]=O,!0}else if(Y.equals(O)===!1)return Y.copy(O),!0}return!1}function S(U){const L=U.uniforms;let R=0;const B=16;for(let N=0,Y=L.length;N<Y;N++){const C=Array.isArray(L[N])?L[N]:[L[N]];for(let w=0,z=C.length;w<z;w++){const $=C[w],Z=Array.isArray($.value)?$.value:[$.value];for(let ot=0,it=Z.length;ot<it;ot++){const lt=Z[ot],ft=T(lt),Q=R%B,Et=Q%ft.boundary,Rt=Q+Et;R+=Et,Rt!==0&&B-Rt<ft.storage&&(R+=B-Rt),$.__data=new Float32Array(ft.storage/Float32Array.BYTES_PER_ELEMENT),$.__offset=R,R+=ft.storage}}}const O=R%B;return O>0&&(R+=B-O),U.__size=R,U.__cache={},this}function T(U){const L={boundary:0,storage:0};return typeof U=="number"||typeof U=="boolean"?(L.boundary=4,L.storage=4):U.isVector2?(L.boundary=8,L.storage=8):U.isVector3||U.isColor?(L.boundary=16,L.storage=12):U.isVector4?(L.boundary=16,L.storage=16):U.isMatrix3?(L.boundary=48,L.storage=48):U.isMatrix4?(L.boundary=64,L.storage=64):U.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",U),L}function x(U){const L=U.target;L.removeEventListener("dispose",x);const R=l.indexOf(L.__bindingPointIndex);l.splice(R,1),n.deleteBuffer(s[L.id]),delete s[L.id],delete o[L.id]}function _(){for(const U in s)n.deleteBuffer(s[U]);l=[],s={},o={}}return{bind:f,update:h,dispose:_}}class V1{constructor(t={}){const{canvas:e=cE(),context:r=null,depth:s=!0,stencil:o=!1,alpha:l=!1,antialias:u=!1,premultipliedAlpha:f=!0,preserveDrawingBuffer:h=!1,powerPreference:p="default",failIfMajorPerformanceCaveat:m=!1,reversedDepthBuffer:g=!1}=t;this.isWebGLRenderer=!0;let v;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=r.getContextAttributes().alpha}else v=l;const S=new Uint32Array(4),T=new Int32Array(4);let x=null,_=null;const U=[],L=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=dr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const R=this;let B=!1;this._outputColorSpace=Qn;let O=0,N=0,Y=null,C=-1,w=null;const z=new Ze,$=new Ze;let Z=null;const ot=new jt(0);let it=0,lt=e.width,ft=e.height,Q=1,Et=null,Rt=null;const It=new Ze(0,0,lt,ft),le=new Ze(0,0,lt,ft);let we=!1;const Ue=new Tm;let de=!1,rt=!1;const pt=new Ke,Pt=new q,qt=new Ze,Gt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ce=!1;function Xe(){return Y===null?Q:1}let I=r;function _e(b,W){return e.getContext(b,W)}try{const b={alpha:!0,depth:s,stencil:o,antialias:u,premultipliedAlpha:f,preserveDrawingBuffer:h,powerPreference:p,failIfMajorPerformanceCaveat:m};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${th}`),e.addEventListener("webglcontextlost",St,!1),e.addEventListener("webglcontextrestored",Nt,!1),e.addEventListener("webglcontextcreationerror",vt,!1),I===null){const W="webgl2";if(I=_e(W,b),I===null)throw _e(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let Jt,Kt,mt,Ee,Mt,Yt,ve,De,P,y,V,et,ut,tt,Bt,gt,Ft,Ot,_t,bt,Ht,Dt,Tt,se;function k(){Jt=new JA(I),Jt.init(),Dt=new U1(I,Jt),Kt=new XA(I,Jt,t,Dt),mt=new L1(I,Jt),Kt.reversedDepthBuffer&&g&&mt.buffers.depth.setReversed(!0),Ee=new ew(I),Mt=new x1,Yt=new I1(I,Jt,mt,Mt,Kt,Dt,Ee),ve=new YA(R),De=new jA(R),P=new ob(I),Tt=new GA(I,P),y=new QA(I,P,Ee,Tt),V=new iw(I,y,P,Ee),_t=new nw(I,Kt,Yt),gt=new qA(Mt),et=new v1(R,ve,De,Jt,Kt,Tt,gt),ut=new k1(R,Mt),tt=new y1,Bt=new w1(Jt),Ot=new VA(R,ve,De,mt,V,v,f),Ft=new P1(R,V,Kt),se=new H1(I,Ee,Kt,mt),bt=new WA(I,Jt,Ee),Ht=new tw(I,Jt,Ee),Ee.programs=et.programs,R.capabilities=Kt,R.extensions=Jt,R.properties=Mt,R.renderLists=tt,R.shadowMap=Ft,R.state=mt,R.info=Ee}k();const yt=new B1(R,I);this.xr=yt,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const b=Jt.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=Jt.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return Q},this.setPixelRatio=function(b){b!==void 0&&(Q=b,this.setSize(lt,ft,!1))},this.getSize=function(b){return b.set(lt,ft)},this.setSize=function(b,W,K=!0){if(yt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}lt=b,ft=W,e.width=Math.floor(b*Q),e.height=Math.floor(W*Q),K===!0&&(e.style.width=b+"px",e.style.height=W+"px"),this.setViewport(0,0,b,W)},this.getDrawingBufferSize=function(b){return b.set(lt*Q,ft*Q).floor()},this.setDrawingBufferSize=function(b,W,K){lt=b,ft=W,Q=K,e.width=Math.floor(b*K),e.height=Math.floor(W*K),this.setViewport(0,0,b,W)},this.getCurrentViewport=function(b){return b.copy(z)},this.getViewport=function(b){return b.copy(It)},this.setViewport=function(b,W,K,J){b.isVector4?It.set(b.x,b.y,b.z,b.w):It.set(b,W,K,J),mt.viewport(z.copy(It).multiplyScalar(Q).round())},this.getScissor=function(b){return b.copy(le)},this.setScissor=function(b,W,K,J){b.isVector4?le.set(b.x,b.y,b.z,b.w):le.set(b,W,K,J),mt.scissor($.copy(le).multiplyScalar(Q).round())},this.getScissorTest=function(){return we},this.setScissorTest=function(b){mt.setScissorTest(we=b)},this.setOpaqueSort=function(b){Et=b},this.setTransparentSort=function(b){Rt=b},this.getClearColor=function(b){return b.copy(Ot.getClearColor())},this.setClearColor=function(){Ot.setClearColor(...arguments)},this.getClearAlpha=function(){return Ot.getClearAlpha()},this.setClearAlpha=function(){Ot.setClearAlpha(...arguments)},this.clear=function(b=!0,W=!0,K=!0){let J=0;if(b){let X=!1;if(Y!==null){const xt=Y.texture.format;X=xt===ah||xt===sh||xt===rh}if(X){const xt=Y.texture.type,Ct=xt===qi||xt===kr||xt===fa||xt===da||xt===nh||xt===ih,zt=Ot.getClearColor(),Lt=Ot.getClearAlpha(),Zt=zt.r,Qt=zt.g,Wt=zt.b;Ct?(S[0]=Zt,S[1]=Qt,S[2]=Wt,S[3]=Lt,I.clearBufferuiv(I.COLOR,0,S)):(T[0]=Zt,T[1]=Qt,T[2]=Wt,T[3]=Lt,I.clearBufferiv(I.COLOR,0,T))}else J|=I.COLOR_BUFFER_BIT}W&&(J|=I.DEPTH_BUFFER_BIT),K&&(J|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",St,!1),e.removeEventListener("webglcontextrestored",Nt,!1),e.removeEventListener("webglcontextcreationerror",vt,!1),Ot.dispose(),tt.dispose(),Bt.dispose(),Mt.dispose(),ve.dispose(),De.dispose(),V.dispose(),Tt.dispose(),se.dispose(),et.dispose(),yt.dispose(),yt.removeEventListener("sessionstart",Gn),yt.removeEventListener("sessionend",qr),Ai.stop()};function St(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),B=!0}function Nt(){console.log("THREE.WebGLRenderer: Context Restored."),B=!1;const b=Ee.autoReset,W=Ft.enabled,K=Ft.autoUpdate,J=Ft.needsUpdate,X=Ft.type;k(),Ee.autoReset=b,Ft.enabled=W,Ft.autoUpdate=K,Ft.needsUpdate=J,Ft.type=X}function vt(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function ct(b){const W=b.target;W.removeEventListener("dispose",ct),kt(W)}function kt(b){ie(b),Mt.remove(b)}function ie(b){const W=Mt.get(b).programs;W!==void 0&&(W.forEach(function(K){et.releaseProgram(K)}),b.isShaderMaterial&&et.releaseShaderCache(b))}this.renderBufferDirect=function(b,W,K,J,X,xt){W===null&&(W=Gt);const Ct=X.isMesh&&X.matrixWorld.determinant()<0,zt=pl(b,W,K,J,X);mt.setMaterial(J,Ct);let Lt=K.index,Zt=1;if(J.wireframe===!0){if(Lt=y.getWireframeAttribute(K),Lt===void 0)return;Zt=2}const Qt=K.drawRange,Wt=K.attributes.position;let ge=Qt.start*Zt,Re=(Qt.start+Qt.count)*Zt;xt!==null&&(ge=Math.max(ge,xt.start*Zt),Re=Math.min(Re,(xt.start+xt.count)*Zt)),Lt!==null?(ge=Math.max(ge,0),Re=Math.min(Re,Lt.count)):Wt!=null&&(ge=Math.max(ge,0),Re=Math.min(Re,Wt.count));const Ge=Re-ge;if(Ge<0||Ge===1/0)return;Tt.setup(X,J,zt,K,Lt);let Ne,Ce=bt;if(Lt!==null&&(Ne=P.get(Lt),Ce=Ht,Ce.setIndex(Ne)),X.isMesh)J.wireframe===!0?(mt.setLineWidth(J.wireframeLinewidth*Xe()),Ce.setMode(I.LINES)):Ce.setMode(I.TRIANGLES);else if(X.isLine){let Xt=J.linewidth;Xt===void 0&&(Xt=1),mt.setLineWidth(Xt*Xe()),X.isLineSegments?Ce.setMode(I.LINES):X.isLineLoop?Ce.setMode(I.LINE_LOOP):Ce.setMode(I.LINE_STRIP)}else X.isPoints?Ce.setMode(I.POINTS):X.isSprite&&Ce.setMode(I.TRIANGLES);if(X.isBatchedMesh)if(X._multiDrawInstances!==null)ga("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ce.renderMultiDrawInstances(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount,X._multiDrawInstances);else if(Jt.get("WEBGL_multi_draw"))Ce.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{const Xt=X._multiDrawStarts,Be=X._multiDrawCounts,Se=X._multiDrawCount,fn=Lt?P.get(Lt).bytesPerElement:1,ii=Mt.get(J).currentProgram.getUniforms();for(let dn=0;dn<Se;dn++)ii.setValue(I,"_gl_DrawID",dn),Ce.render(Xt[dn]/fn,Be[dn])}else if(X.isInstancedMesh)Ce.renderInstances(ge,Ge,X.count);else if(K.isInstancedBufferGeometry){const Xt=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,Be=Math.min(K.instanceCount,Xt);Ce.renderInstances(ge,Ge,Be)}else Ce.render(ge,Ge)};function Le(b,W,K){b.transparent===!0&&b.side===Gi&&b.forceSinglePass===!1?(b.side=In,b.needsUpdate=!0,Zr(b,W,K),b.side=mr,b.needsUpdate=!0,Zr(b,W,K),b.side=Gi):Zr(b,W,K)}this.compile=function(b,W,K=null){K===null&&(K=b),_=Bt.get(K),_.init(W),L.push(_),K.traverseVisible(function(X){X.isLight&&X.layers.test(W.layers)&&(_.pushLight(X),X.castShadow&&_.pushShadow(X))}),b!==K&&b.traverseVisible(function(X){X.isLight&&X.layers.test(W.layers)&&(_.pushLight(X),X.castShadow&&_.pushShadow(X))}),_.setupLights();const J=new Set;return b.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;const xt=X.material;if(xt)if(Array.isArray(xt))for(let Ct=0;Ct<xt.length;Ct++){const zt=xt[Ct];Le(zt,K,X),J.add(zt)}else Le(xt,K,X),J.add(xt)}),_=L.pop(),J},this.compileAsync=function(b,W,K=null){const J=this.compile(b,W,K);return new Promise(X=>{function xt(){if(J.forEach(function(Ct){Mt.get(Ct).currentProgram.isReady()&&J.delete(Ct)}),J.size===0){X(b);return}setTimeout(xt,10)}Jt.get("KHR_parallel_shader_compile")!==null?xt():setTimeout(xt,10)})};let be=null;function ni(b){be&&be(b)}function Gn(){Ai.stop()}function qr(){Ai.start()}const Ai=new Im;Ai.setAnimationLoop(ni),typeof self<"u"&&Ai.setContext(self),this.setAnimationLoop=function(b){be=b,yt.setAnimationLoop(b),b===null?Ai.stop():Ai.start()},yt.addEventListener("sessionstart",Gn),yt.addEventListener("sessionend",qr),this.render=function(b,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(B===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),yt.enabled===!0&&yt.isPresenting===!0&&(yt.cameraAutoUpdate===!0&&yt.updateCamera(W),W=yt.getCamera()),b.isScene===!0&&b.onBeforeRender(R,b,W,Y),_=Bt.get(b,L.length),_.init(W),L.push(_),pt.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),Ue.setFromProjectionMatrix(pt,yi,W.reversedDepth),rt=this.localClippingEnabled,de=gt.init(this.clippingPlanes,rt),x=tt.get(b,U.length),x.init(),U.push(x),yt.enabled===!0&&yt.isPresenting===!0){const xt=R.xr.getDepthSensingMesh();xt!==null&&_r(xt,W,-1/0,R.sortObjects)}_r(b,W,0,R.sortObjects),x.finish(),R.sortObjects===!0&&x.sort(Et,Rt),ce=yt.enabled===!1||yt.isPresenting===!1||yt.hasDepthSensing()===!1,ce&&Ot.addToRenderList(x,b),this.info.render.frame++,de===!0&&gt.beginShadows();const K=_.state.shadowsArray;Ft.render(K,b,W),de===!0&&gt.endShadows(),this.info.autoReset===!0&&this.info.reset();const J=x.opaque,X=x.transmissive;if(_.setupLights(),W.isArrayCamera){const xt=W.cameras;if(X.length>0)for(let Ct=0,zt=xt.length;Ct<zt;Ct++){const Lt=xt[Ct];Aa(J,X,b,Lt)}ce&&Ot.render(b);for(let Ct=0,zt=xt.length;Ct<zt;Ct++){const Lt=xt[Ct];Ta(x,b,Lt,Lt.viewport)}}else X.length>0&&Aa(J,X,b,W),ce&&Ot.render(b),Ta(x,b,W);Y!==null&&N===0&&(Yt.updateMultisampleRenderTarget(Y),Yt.updateRenderTargetMipmap(Y)),b.isScene===!0&&b.onAfterRender(R,b,W),Tt.resetDefaultState(),C=-1,w=null,L.pop(),L.length>0?(_=L[L.length-1],de===!0&&gt.setGlobalState(R.clippingPlanes,_.state.camera)):_=null,U.pop(),U.length>0?x=U[U.length-1]:x=null};function _r(b,W,K,J){if(b.visible===!1)return;if(b.layers.test(W.layers)){if(b.isGroup)K=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(W);else if(b.isLight)_.pushLight(b),b.castShadow&&_.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Ue.intersectsSprite(b)){J&&qt.setFromMatrixPosition(b.matrixWorld).applyMatrix4(pt);const Ct=V.update(b),zt=b.material;zt.visible&&x.push(b,Ct,zt,K,qt.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Ue.intersectsObject(b))){const Ct=V.update(b),zt=b.material;if(J&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),qt.copy(b.boundingSphere.center)):(Ct.boundingSphere===null&&Ct.computeBoundingSphere(),qt.copy(Ct.boundingSphere.center)),qt.applyMatrix4(b.matrixWorld).applyMatrix4(pt)),Array.isArray(zt)){const Lt=Ct.groups;for(let Zt=0,Qt=Lt.length;Zt<Qt;Zt++){const Wt=Lt[Zt],ge=zt[Wt.materialIndex];ge&&ge.visible&&x.push(b,Ct,ge,K,qt.z,Wt)}}else zt.visible&&x.push(b,Ct,zt,K,qt.z,null)}}const xt=b.children;for(let Ct=0,zt=xt.length;Ct<zt;Ct++)_r(xt[Ct],W,K,J)}function Ta(b,W,K,J){const X=b.opaque,xt=b.transmissive,Ct=b.transparent;_.setupLightsView(K),de===!0&&gt.setGlobalState(R.clippingPlanes,K),J&&mt.viewport(z.copy(J)),X.length>0&&Yr(X,W,K),xt.length>0&&Yr(xt,W,K),Ct.length>0&&Yr(Ct,W,K),mt.buffers.depth.setTest(!0),mt.buffers.depth.setMask(!0),mt.buffers.color.setMask(!0),mt.setPolygonOffset(!1)}function Aa(b,W,K,J){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[J.id]===void 0&&(_.state.transmissionRenderTarget[J.id]=new Vr(1,1,{generateMipmaps:!0,type:Jt.has("EXT_color_buffer_half_float")||Jt.has("EXT_color_buffer_float")?va:qi,minFilter:Br,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Te.workingColorSpace}));const xt=_.state.transmissionRenderTarget[J.id],Ct=J.viewport||z;xt.setSize(Ct.z*R.transmissionResolutionScale,Ct.w*R.transmissionResolutionScale);const zt=R.getRenderTarget(),Lt=R.getActiveCubeFace(),Zt=R.getActiveMipmapLevel();R.setRenderTarget(xt),R.getClearColor(ot),it=R.getClearAlpha(),it<1&&R.setClearColor(16777215,.5),R.clear(),ce&&Ot.render(K);const Qt=R.toneMapping;R.toneMapping=dr;const Wt=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),_.setupLightsView(J),de===!0&&gt.setGlobalState(R.clippingPlanes,J),Yr(b,K,J),Yt.updateMultisampleRenderTarget(xt),Yt.updateRenderTargetMipmap(xt),Jt.has("WEBGL_multisampled_render_to_texture")===!1){let ge=!1;for(let Re=0,Ge=W.length;Re<Ge;Re++){const Ne=W[Re],Ce=Ne.object,Xt=Ne.geometry,Be=Ne.material,Se=Ne.group;if(Be.side===Gi&&Ce.layers.test(J.layers)){const fn=Be.side;Be.side=In,Be.needsUpdate=!0,wa(Ce,K,J,Xt,Be,Se),Be.side=fn,Be.needsUpdate=!0,ge=!0}}ge===!0&&(Yt.updateMultisampleRenderTarget(xt),Yt.updateRenderTargetMipmap(xt))}R.setRenderTarget(zt,Lt,Zt),R.setClearColor(ot,it),Wt!==void 0&&(J.viewport=Wt),R.toneMapping=Qt}function Yr(b,W,K){const J=W.isScene===!0?W.overrideMaterial:null;for(let X=0,xt=b.length;X<xt;X++){const Ct=b[X],zt=Ct.object,Lt=Ct.geometry,Zt=Ct.group;let Qt=Ct.material;Qt.allowOverride===!0&&J!==null&&(Qt=J),zt.layers.test(K.layers)&&wa(zt,W,K,Lt,Qt,Zt)}}function wa(b,W,K,J,X,xt){b.onBeforeRender(R,W,K,J,X,xt),b.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),X.onBeforeRender(R,W,K,J,b,xt),X.transparent===!0&&X.side===Gi&&X.forceSinglePass===!1?(X.side=In,X.needsUpdate=!0,R.renderBufferDirect(K,W,J,X,b,xt),X.side=mr,X.needsUpdate=!0,R.renderBufferDirect(K,W,J,X,b,xt),X.side=Gi):R.renderBufferDirect(K,W,J,X,b,xt),b.onAfterRender(R,W,K,J,X,xt)}function Zr(b,W,K){W.isScene!==!0&&(W=Gt);const J=Mt.get(b),X=_.state.lights,xt=_.state.shadowsArray,Ct=X.state.version,zt=et.getParameters(b,X.state,xt,W,K),Lt=et.getProgramCacheKey(zt);let Zt=J.programs;J.environment=b.isMeshStandardMaterial?W.environment:null,J.fog=W.fog,J.envMap=(b.isMeshStandardMaterial?De:ve).get(b.envMap||J.environment),J.envMapRotation=J.environment!==null&&b.envMap===null?W.environmentRotation:b.envMapRotation,Zt===void 0&&(b.addEventListener("dispose",ct),Zt=new Map,J.programs=Zt);let Qt=Zt.get(Lt);if(Qt!==void 0){if(J.currentProgram===Qt&&J.lightsStateVersion===Ct)return Ca(b,zt),Qt}else zt.uniforms=et.getUniforms(b),b.onBeforeCompile(zt,R),Qt=et.acquireProgram(zt,Lt),Zt.set(Lt,Qt),J.uniforms=zt.uniforms;const Wt=J.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Wt.clippingPlanes=gt.uniform),Ca(b,zt),J.needsLights=ml(b),J.lightsStateVersion=Ct,J.needsLights&&(Wt.ambientLightColor.value=X.state.ambient,Wt.lightProbe.value=X.state.probe,Wt.directionalLights.value=X.state.directional,Wt.directionalLightShadows.value=X.state.directionalShadow,Wt.spotLights.value=X.state.spot,Wt.spotLightShadows.value=X.state.spotShadow,Wt.rectAreaLights.value=X.state.rectArea,Wt.ltc_1.value=X.state.rectAreaLTC1,Wt.ltc_2.value=X.state.rectAreaLTC2,Wt.pointLights.value=X.state.point,Wt.pointLightShadows.value=X.state.pointShadow,Wt.hemisphereLights.value=X.state.hemi,Wt.directionalShadowMap.value=X.state.directionalShadowMap,Wt.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Wt.spotShadowMap.value=X.state.spotShadowMap,Wt.spotLightMatrix.value=X.state.spotLightMatrix,Wt.spotLightMap.value=X.state.spotLightMap,Wt.pointShadowMap.value=X.state.pointShadowMap,Wt.pointShadowMatrix.value=X.state.pointShadowMatrix),J.currentProgram=Qt,J.uniformsList=null,Qt}function Ra(b){if(b.uniformsList===null){const W=b.currentProgram.getUniforms();b.uniformsList=Yo.seqWithValue(W.seq,b.uniforms)}return b.uniformsList}function Ca(b,W){const K=Mt.get(b);K.outputColorSpace=W.outputColorSpace,K.batching=W.batching,K.batchingColor=W.batchingColor,K.instancing=W.instancing,K.instancingColor=W.instancingColor,K.instancingMorph=W.instancingMorph,K.skinning=W.skinning,K.morphTargets=W.morphTargets,K.morphNormals=W.morphNormals,K.morphColors=W.morphColors,K.morphTargetsCount=W.morphTargetsCount,K.numClippingPlanes=W.numClippingPlanes,K.numIntersection=W.numClipIntersection,K.vertexAlphas=W.vertexAlphas,K.vertexTangents=W.vertexTangents,K.toneMapping=W.toneMapping}function pl(b,W,K,J,X){W.isScene!==!0&&(W=Gt),Yt.resetTextureUnits();const xt=W.fog,Ct=J.isMeshStandardMaterial?W.environment:null,zt=Y===null?R.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:Ls,Lt=(J.isMeshStandardMaterial?De:ve).get(J.envMap||Ct),Zt=J.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,Qt=!!K.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),Wt=!!K.morphAttributes.position,ge=!!K.morphAttributes.normal,Re=!!K.morphAttributes.color;let Ge=dr;J.toneMapped&&(Y===null||Y.isXRRenderTarget===!0)&&(Ge=R.toneMapping);const Ne=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,Ce=Ne!==void 0?Ne.length:0,Xt=Mt.get(J),Be=_.state.lights;if(de===!0&&(rt===!0||b!==w)){const ln=b===w&&J.id===C;gt.setState(J,b,ln)}let Se=!1;J.version===Xt.__version?(Xt.needsLights&&Xt.lightsStateVersion!==Be.state.version||Xt.outputColorSpace!==zt||X.isBatchedMesh&&Xt.batching===!1||!X.isBatchedMesh&&Xt.batching===!0||X.isBatchedMesh&&Xt.batchingColor===!0&&X.colorTexture===null||X.isBatchedMesh&&Xt.batchingColor===!1&&X.colorTexture!==null||X.isInstancedMesh&&Xt.instancing===!1||!X.isInstancedMesh&&Xt.instancing===!0||X.isSkinnedMesh&&Xt.skinning===!1||!X.isSkinnedMesh&&Xt.skinning===!0||X.isInstancedMesh&&Xt.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&Xt.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&Xt.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&Xt.instancingMorph===!1&&X.morphTexture!==null||Xt.envMap!==Lt||J.fog===!0&&Xt.fog!==xt||Xt.numClippingPlanes!==void 0&&(Xt.numClippingPlanes!==gt.numPlanes||Xt.numIntersection!==gt.numIntersection)||Xt.vertexAlphas!==Zt||Xt.vertexTangents!==Qt||Xt.morphTargets!==Wt||Xt.morphNormals!==ge||Xt.morphColors!==Re||Xt.toneMapping!==Ge||Xt.morphTargetsCount!==Ce)&&(Se=!0):(Se=!0,Xt.__version=J.version);let fn=Xt.currentProgram;Se===!0&&(fn=Zr(J,W,X));let ii=!1,dn=!1,gr=!1;const ke=fn.getUniforms(),Mn=Xt.uniforms;if(mt.useProgram(fn.program)&&(ii=!0,dn=!0,gr=!0),J.id!==C&&(C=J.id,dn=!0),ii||w!==b){mt.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),ke.setValue(I,"projectionMatrix",b.projectionMatrix),ke.setValue(I,"viewMatrix",b.matrixWorldInverse);const cn=ke.map.cameraPosition;cn!==void 0&&cn.setValue(I,Pt.setFromMatrixPosition(b.matrixWorld)),Kt.logarithmicDepthBuffer&&ke.setValue(I,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&ke.setValue(I,"isOrthographic",b.isOrthographicCamera===!0),w!==b&&(w=b,dn=!0,gr=!0)}if(X.isSkinnedMesh){ke.setOptional(I,X,"bindMatrix"),ke.setOptional(I,X,"bindMatrixInverse");const ln=X.skeleton;ln&&(ln.boneTexture===null&&ln.computeBoneTexture(),ke.setValue(I,"boneTexture",ln.boneTexture,Yt))}X.isBatchedMesh&&(ke.setOptional(I,X,"batchingTexture"),ke.setValue(I,"batchingTexture",X._matricesTexture,Yt),ke.setOptional(I,X,"batchingIdTexture"),ke.setValue(I,"batchingIdTexture",X._indirectTexture,Yt),ke.setOptional(I,X,"batchingColorTexture"),X._colorsTexture!==null&&ke.setValue(I,"batchingColorTexture",X._colorsTexture,Yt));const pn=K.morphAttributes;if((pn.position!==void 0||pn.normal!==void 0||pn.color!==void 0)&&_t.update(X,K,fn),(dn||Xt.receiveShadow!==X.receiveShadow)&&(Xt.receiveShadow=X.receiveShadow,ke.setValue(I,"receiveShadow",X.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&(Mn.envMap.value=Lt,Mn.flipEnvMap.value=Lt.isCubeTexture&&Lt.isRenderTargetTexture===!1?-1:1),J.isMeshStandardMaterial&&J.envMap===null&&W.environment!==null&&(Mn.envMapIntensity.value=W.environmentIntensity),dn&&(ke.setValue(I,"toneMappingExposure",R.toneMappingExposure),Xt.needsLights&&Pa(Mn,gr),xt&&J.fog===!0&&ut.refreshFogUniforms(Mn,xt),ut.refreshMaterialUniforms(Mn,J,Q,ft,_.state.transmissionRenderTarget[b.id]),Yo.upload(I,Ra(Xt),Mn,Yt)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(Yo.upload(I,Ra(Xt),Mn,Yt),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&ke.setValue(I,"center",X.center),ke.setValue(I,"modelViewMatrix",X.modelViewMatrix),ke.setValue(I,"normalMatrix",X.normalMatrix),ke.setValue(I,"modelMatrix",X.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){const ln=J.uniformsGroups;for(let cn=0,vr=ln.length;cn<vr;cn++){const ri=ln[cn];se.update(ri,fn),se.bind(ri,fn)}}return fn}function Pa(b,W){b.ambientLightColor.needsUpdate=W,b.lightProbe.needsUpdate=W,b.directionalLights.needsUpdate=W,b.directionalLightShadows.needsUpdate=W,b.pointLights.needsUpdate=W,b.pointLightShadows.needsUpdate=W,b.spotLights.needsUpdate=W,b.spotLightShadows.needsUpdate=W,b.rectAreaLights.needsUpdate=W,b.hemisphereLights.needsUpdate=W}function ml(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return N},this.getRenderTarget=function(){return Y},this.setRenderTargetTextures=function(b,W,K){const J=Mt.get(b);J.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,J.__autoAllocateDepthBuffer===!1&&(J.__useRenderToTexture=!1),Mt.get(b.texture).__webglTexture=W,Mt.get(b.depthTexture).__webglTexture=J.__autoAllocateDepthBuffer?void 0:K,J.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,W){const K=Mt.get(b);K.__webglFramebuffer=W,K.__useDefaultFramebuffer=W===void 0};const _l=I.createFramebuffer();this.setRenderTarget=function(b,W=0,K=0){Y=b,O=W,N=K;let J=!0,X=null,xt=!1,Ct=!1;if(b){const Lt=Mt.get(b);if(Lt.__useDefaultFramebuffer!==void 0)mt.bindFramebuffer(I.FRAMEBUFFER,null),J=!1;else if(Lt.__webglFramebuffer===void 0)Yt.setupRenderTarget(b);else if(Lt.__hasExternalTextures)Yt.rebindTextures(b,Mt.get(b.texture).__webglTexture,Mt.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const Wt=b.depthTexture;if(Lt.__boundDepthTexture!==Wt){if(Wt!==null&&Mt.has(Wt)&&(b.width!==Wt.image.width||b.height!==Wt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Yt.setupDepthRenderbuffer(b)}}const Zt=b.texture;(Zt.isData3DTexture||Zt.isDataArrayTexture||Zt.isCompressedArrayTexture)&&(Ct=!0);const Qt=Mt.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Qt[W])?X=Qt[W][K]:X=Qt[W],xt=!0):b.samples>0&&Yt.useMultisampledRTT(b)===!1?X=Mt.get(b).__webglMultisampledFramebuffer:Array.isArray(Qt)?X=Qt[K]:X=Qt,z.copy(b.viewport),$.copy(b.scissor),Z=b.scissorTest}else z.copy(It).multiplyScalar(Q).floor(),$.copy(le).multiplyScalar(Q).floor(),Z=we;if(K!==0&&(X=_l),mt.bindFramebuffer(I.FRAMEBUFFER,X)&&J&&mt.drawBuffers(b,X),mt.viewport(z),mt.scissor($),mt.setScissorTest(Z),xt){const Lt=Mt.get(b.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+W,Lt.__webglTexture,K)}else if(Ct){const Lt=W;for(let Zt=0;Zt<b.textures.length;Zt++){const Qt=Mt.get(b.textures[Zt]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+Zt,Qt.__webglTexture,K,Lt)}}else if(b!==null&&K!==0){const Lt=Mt.get(b.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Lt.__webglTexture,K)}C=-1},this.readRenderTargetPixels=function(b,W,K,J,X,xt,Ct,zt=0){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Lt=Mt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ct!==void 0&&(Lt=Lt[Ct]),Lt){mt.bindFramebuffer(I.FRAMEBUFFER,Lt);try{const Zt=b.textures[zt],Qt=Zt.format,Wt=Zt.type;if(!Kt.textureFormatReadable(Qt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Kt.textureTypeReadable(Wt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=b.width-J&&K>=0&&K<=b.height-X&&(b.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+zt),I.readPixels(W,K,J,X,Dt.convert(Qt),Dt.convert(Wt),xt))}finally{const Zt=Y!==null?Mt.get(Y).__webglFramebuffer:null;mt.bindFramebuffer(I.FRAMEBUFFER,Zt)}}},this.readRenderTargetPixelsAsync=async function(b,W,K,J,X,xt,Ct,zt=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Lt=Mt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ct!==void 0&&(Lt=Lt[Ct]),Lt)if(W>=0&&W<=b.width-J&&K>=0&&K<=b.height-X){mt.bindFramebuffer(I.FRAMEBUFFER,Lt);const Zt=b.textures[zt],Qt=Zt.format,Wt=Zt.type;if(!Kt.textureFormatReadable(Qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Kt.textureTypeReadable(Wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ge=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,ge),I.bufferData(I.PIXEL_PACK_BUFFER,xt.byteLength,I.STREAM_READ),b.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+zt),I.readPixels(W,K,J,X,Dt.convert(Qt),Dt.convert(Wt),0);const Re=Y!==null?Mt.get(Y).__webglFramebuffer:null;mt.bindFramebuffer(I.FRAMEBUFFER,Re);const Ge=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await uE(I,Ge,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,ge),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,xt),I.deleteBuffer(ge),I.deleteSync(Ge),xt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,W=null,K=0){const J=Math.pow(2,-K),X=Math.floor(b.image.width*J),xt=Math.floor(b.image.height*J),Ct=W!==null?W.x:0,zt=W!==null?W.y:0;Yt.setTexture2D(b,0),I.copyTexSubImage2D(I.TEXTURE_2D,K,0,0,Ct,zt,X,xt),mt.unbindTexture()};const gl=I.createFramebuffer(),vl=I.createFramebuffer();this.copyTextureToTexture=function(b,W,K=null,J=null,X=0,xt=null){xt===null&&(X!==0?(ga("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),xt=X,X=0):xt=0);let Ct,zt,Lt,Zt,Qt,Wt,ge,Re,Ge;const Ne=b.isCompressedTexture?b.mipmaps[xt]:b.image;if(K!==null)Ct=K.max.x-K.min.x,zt=K.max.y-K.min.y,Lt=K.isBox3?K.max.z-K.min.z:1,Zt=K.min.x,Qt=K.min.y,Wt=K.isBox3?K.min.z:0;else{const pn=Math.pow(2,-X);Ct=Math.floor(Ne.width*pn),zt=Math.floor(Ne.height*pn),b.isDataArrayTexture?Lt=Ne.depth:b.isData3DTexture?Lt=Math.floor(Ne.depth*pn):Lt=1,Zt=0,Qt=0,Wt=0}J!==null?(ge=J.x,Re=J.y,Ge=J.z):(ge=0,Re=0,Ge=0);const Ce=Dt.convert(W.format),Xt=Dt.convert(W.type);let Be;W.isData3DTexture?(Yt.setTexture3D(W,0),Be=I.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(Yt.setTexture2DArray(W,0),Be=I.TEXTURE_2D_ARRAY):(Yt.setTexture2D(W,0),Be=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,W.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,W.unpackAlignment);const Se=I.getParameter(I.UNPACK_ROW_LENGTH),fn=I.getParameter(I.UNPACK_IMAGE_HEIGHT),ii=I.getParameter(I.UNPACK_SKIP_PIXELS),dn=I.getParameter(I.UNPACK_SKIP_ROWS),gr=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,Ne.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Ne.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Zt),I.pixelStorei(I.UNPACK_SKIP_ROWS,Qt),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Wt);const ke=b.isDataArrayTexture||b.isData3DTexture,Mn=W.isDataArrayTexture||W.isData3DTexture;if(b.isDepthTexture){const pn=Mt.get(b),ln=Mt.get(W),cn=Mt.get(pn.__renderTarget),vr=Mt.get(ln.__renderTarget);mt.bindFramebuffer(I.READ_FRAMEBUFFER,cn.__webglFramebuffer),mt.bindFramebuffer(I.DRAW_FRAMEBUFFER,vr.__webglFramebuffer);for(let ri=0;ri<Lt;ri++)ke&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Mt.get(b).__webglTexture,X,Wt+ri),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Mt.get(W).__webglTexture,xt,Ge+ri)),I.blitFramebuffer(Zt,Qt,Ct,zt,ge,Re,Ct,zt,I.DEPTH_BUFFER_BIT,I.NEAREST);mt.bindFramebuffer(I.READ_FRAMEBUFFER,null),mt.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(X!==0||b.isRenderTargetTexture||Mt.has(b)){const pn=Mt.get(b),ln=Mt.get(W);mt.bindFramebuffer(I.READ_FRAMEBUFFER,gl),mt.bindFramebuffer(I.DRAW_FRAMEBUFFER,vl);for(let cn=0;cn<Lt;cn++)ke?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,pn.__webglTexture,X,Wt+cn):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,pn.__webglTexture,X),Mn?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,ln.__webglTexture,xt,Ge+cn):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,ln.__webglTexture,xt),X!==0?I.blitFramebuffer(Zt,Qt,Ct,zt,ge,Re,Ct,zt,I.COLOR_BUFFER_BIT,I.NEAREST):Mn?I.copyTexSubImage3D(Be,xt,ge,Re,Ge+cn,Zt,Qt,Ct,zt):I.copyTexSubImage2D(Be,xt,ge,Re,Zt,Qt,Ct,zt);mt.bindFramebuffer(I.READ_FRAMEBUFFER,null),mt.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else Mn?b.isDataTexture||b.isData3DTexture?I.texSubImage3D(Be,xt,ge,Re,Ge,Ct,zt,Lt,Ce,Xt,Ne.data):W.isCompressedArrayTexture?I.compressedTexSubImage3D(Be,xt,ge,Re,Ge,Ct,zt,Lt,Ce,Ne.data):I.texSubImage3D(Be,xt,ge,Re,Ge,Ct,zt,Lt,Ce,Xt,Ne):b.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,xt,ge,Re,Ct,zt,Ce,Xt,Ne.data):b.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,xt,ge,Re,Ne.width,Ne.height,Ce,Ne.data):I.texSubImage2D(I.TEXTURE_2D,xt,ge,Re,Ct,zt,Ce,Xt,Ne);I.pixelStorei(I.UNPACK_ROW_LENGTH,Se),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,fn),I.pixelStorei(I.UNPACK_SKIP_PIXELS,ii),I.pixelStorei(I.UNPACK_SKIP_ROWS,dn),I.pixelStorei(I.UNPACK_SKIP_IMAGES,gr),xt===0&&W.generateMipmaps&&I.generateMipmap(Be),mt.unbindTexture()},this.initRenderTarget=function(b){Mt.get(b).__webglFramebuffer===void 0&&Yt.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?Yt.setTextureCube(b,0):b.isData3DTexture?Yt.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?Yt.setTexture2DArray(b,0):Yt.setTexture2D(b,0),mt.unbindTexture()},this.resetState=function(){O=0,N=0,Y=null,mt.reset(),Tt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return yi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=Te._getDrawingBufferColorSpace(t),e.unpackColorSpace=Te._getUnpackColorSpace()}}var G1=Object.create,Bm=Object.defineProperty,W1=Object.getOwnPropertyDescriptor,X1=Object.getOwnPropertyNames,q1=Object.getPrototypeOf,Y1=Object.prototype.hasOwnProperty,ht=(n,t)=>()=>(t||n((t={exports:{}}).exports,t),t.exports),Z1=(n,t,e,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of X1(t))!Y1.call(n,s)&&s!==e&&Bm(n,s,{get:()=>t[s],enumerable:!(r=W1(t,s))||r.enumerable});return n},Bs=(n,t,e)=>(e=n!=null?G1(q1(n)):{},Z1(Bm(e,"default",{value:n,enumerable:!0}),n)),ol=ht((n,t)=>{(function(){var e,r="4.17.21",s=200,o="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",l="Expected a function",u="Invalid `variable` option passed into `_.template`",f="__lodash_hash_undefined__",h=500,p="__lodash_placeholder__",m=1,g=2,v=4,S=1,T=2,x=1,_=2,U=4,L=8,R=16,B=32,O=64,N=128,Y=256,C=512,w=30,z="...",$=800,Z=16,ot=1,it=2,lt=3,ft=1/0,Q=9007199254740991,Et=17976931348623157e292,Rt=NaN,It=4294967295,le=It-1,we=It>>>1,Ue=[["ary",N],["bind",x],["bindKey",_],["curry",L],["curryRight",R],["flip",C],["partial",B],["partialRight",O],["rearg",Y]],de="[object Arguments]",rt="[object Array]",pt="[object AsyncFunction]",Pt="[object Boolean]",qt="[object Date]",Gt="[object DOMException]",ce="[object Error]",Xe="[object Function]",I="[object GeneratorFunction]",_e="[object Map]",Jt="[object Number]",Kt="[object Null]",mt="[object Object]",Ee="[object Promise]",Mt="[object Proxy]",Yt="[object RegExp]",ve="[object Set]",De="[object String]",P="[object Symbol]",y="[object Undefined]",V="[object WeakMap]",et="[object WeakSet]",ut="[object ArrayBuffer]",tt="[object DataView]",Bt="[object Float32Array]",gt="[object Float64Array]",Ft="[object Int8Array]",Ot="[object Int16Array]",_t="[object Int32Array]",bt="[object Uint8Array]",Ht="[object Uint8ClampedArray]",Dt="[object Uint16Array]",Tt="[object Uint32Array]",se=/\b__p \+= '';/g,k=/\b(__p \+=) '' \+/g,yt=/(__e\(.*?\)|\b__t\)) \+\n'';/g,St=/&(?:amp|lt|gt|quot|#39);/g,Nt=/[&<>"']/g,vt=RegExp(St.source),ct=RegExp(Nt.source),kt=/<%-([\s\S]+?)%>/g,ie=/<%([\s\S]+?)%>/g,Le=/<%=([\s\S]+?)%>/g,be=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,ni=/^\w*$/,Gn=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,qr=/[\\^$.*+?()[\]{}|]/g,Ai=RegExp(qr.source),_r=/^\s+/,Ta=/\s/,Aa=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,Yr=/\{\n\/\* \[wrapped with (.+)\] \*/,wa=/,? & /,Zr=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,Ra=/[()=,{}\[\]\/\s]/,Ca=/\\(\\)?/g,pl=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,Pa=/\w*$/,ml=/^[-+]0x[0-9a-f]+$/i,_l=/^0b[01]+$/i,gl=/^\[object .+?Constructor\]$/,vl=/^0o[0-7]+$/i,b=/^(?:0|[1-9]\d*)$/,W=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,K=/($^)/,J=/['\n\r\u2028\u2029\\]/g,X="\\ud800-\\udfff",xt="\\u0300-\\u036f",Ct="\\ufe20-\\ufe2f",zt="\\u20d0-\\u20ff",Lt=xt+Ct+zt,Zt="\\u2700-\\u27bf",Qt="a-z\\xdf-\\xf6\\xf8-\\xff",Wt="\\xac\\xb1\\xd7\\xf7",ge="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",Re="\\u2000-\\u206f",Ge=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Ne="A-Z\\xc0-\\xd6\\xd8-\\xde",Ce="\\ufe0e\\ufe0f",Xt=Wt+ge+Re+Ge,Be="['’]",Se="["+X+"]",fn="["+Xt+"]",ii="["+Lt+"]",dn="\\d+",gr="["+Zt+"]",ke="["+Qt+"]",Mn="[^"+X+Xt+dn+Zt+Qt+Ne+"]",pn="\\ud83c[\\udffb-\\udfff]",ln="(?:"+ii+"|"+pn+")",cn="[^"+X+"]",vr="(?:\\ud83c[\\udde6-\\uddff]){2}",ri="[\\ud800-\\udbff][\\udc00-\\udfff]",Kr="["+Ne+"]",Rh="\\u200d",Ch="(?:"+ke+"|"+Mn+")",c_="(?:"+Kr+"|"+Mn+")",Ph="(?:"+Be+"(?:d|ll|m|re|s|t|ve))?",Dh="(?:"+Be+"(?:D|LL|M|RE|S|T|VE))?",Lh=ln+"?",Ih="["+Ce+"]?",u_="(?:"+Rh+"(?:"+[cn,vr,ri].join("|")+")"+Ih+Lh+")*",h_="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",f_="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",Uh=Ih+Lh+u_,d_="(?:"+[gr,vr,ri].join("|")+")"+Uh,p_="(?:"+[cn+ii+"?",ii,vr,ri,Se].join("|")+")",m_=RegExp(Be,"g"),__=RegExp(ii,"g"),xl=RegExp(pn+"(?="+pn+")|"+p_+Uh,"g"),g_=RegExp([Kr+"?"+ke+"+"+Ph+"(?="+[fn,Kr,"$"].join("|")+")",c_+"+"+Dh+"(?="+[fn,Kr+Ch,"$"].join("|")+")",Kr+"?"+Ch+"+"+Ph,Kr+"+"+Dh,f_,h_,dn,d_].join("|"),"g"),v_=RegExp("["+Rh+X+Lt+Ce+"]"),x_=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,M_=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],y_=-1,Ve={};Ve[Bt]=Ve[gt]=Ve[Ft]=Ve[Ot]=Ve[_t]=Ve[bt]=Ve[Ht]=Ve[Dt]=Ve[Tt]=!0,Ve[de]=Ve[rt]=Ve[ut]=Ve[Pt]=Ve[tt]=Ve[qt]=Ve[ce]=Ve[Xe]=Ve[_e]=Ve[Jt]=Ve[mt]=Ve[Yt]=Ve[ve]=Ve[De]=Ve[V]=!1;var He={};He[de]=He[rt]=He[ut]=He[tt]=He[Pt]=He[qt]=He[Bt]=He[gt]=He[Ft]=He[Ot]=He[_t]=He[_e]=He[Jt]=He[mt]=He[Yt]=He[ve]=He[De]=He[P]=He[bt]=He[Ht]=He[Dt]=He[Tt]=!0,He[ce]=He[Xe]=He[V]=!1;var S_={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},E_={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},b_={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},T_={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},A_=parseFloat,w_=parseInt,Nh=typeof global=="object"&&global&&global.Object===Object&&global,R_=typeof self=="object"&&self&&self.Object===Object&&self,sn=Nh||R_||Function("return this")(),Ml=typeof n=="object"&&n&&!n.nodeType&&n,xr=Ml&&typeof t=="object"&&t&&!t.nodeType&&t,Fh=xr&&xr.exports===Ml,yl=Fh&&Nh.process,Wn=function(){try{var H=xr&&xr.require&&xr.require("util").types;return H||yl&&yl.binding&&yl.binding("util")}catch{}}(),Oh=Wn&&Wn.isArrayBuffer,Bh=Wn&&Wn.isDate,zh=Wn&&Wn.isMap,kh=Wn&&Wn.isRegExp,Hh=Wn&&Wn.isSet,Vh=Wn&&Wn.isTypedArray;function Un(H,nt,j){switch(j.length){case 0:return H.call(nt);case 1:return H.call(nt,j[0]);case 2:return H.call(nt,j[0],j[1]);case 3:return H.call(nt,j[0],j[1],j[2])}return H.apply(nt,j)}function C_(H,nt,j,Ut){for(var re=-1,Ae=H==null?0:H.length;++re<Ae;){var Qe=H[re];nt(Ut,Qe,j(Qe),H)}return Ut}function Xn(H,nt){for(var j=-1,Ut=H==null?0:H.length;++j<Ut&&nt(H[j],j,H)!==!1;);return H}function P_(H,nt){for(var j=H==null?0:H.length;j--&&nt(H[j],j,H)!==!1;);return H}function Gh(H,nt){for(var j=-1,Ut=H==null?0:H.length;++j<Ut;)if(!nt(H[j],j,H))return!1;return!0}function Yi(H,nt){for(var j=-1,Ut=H==null?0:H.length,re=0,Ae=[];++j<Ut;){var Qe=H[j];nt(Qe,j,H)&&(Ae[re++]=Qe)}return Ae}function Da(H,nt){var j=H==null?0:H.length;return!!j&&$r(H,nt,0)>-1}function Sl(H,nt,j){for(var Ut=-1,re=H==null?0:H.length;++Ut<re;)if(j(nt,H[Ut]))return!0;return!1}function We(H,nt){for(var j=-1,Ut=H==null?0:H.length,re=Array(Ut);++j<Ut;)re[j]=nt(H[j],j,H);return re}function Zi(H,nt){for(var j=-1,Ut=nt.length,re=H.length;++j<Ut;)H[re+j]=nt[j];return H}function El(H,nt,j,Ut){var re=-1,Ae=H==null?0:H.length;for(Ut&&Ae&&(j=H[++re]);++re<Ae;)j=nt(j,H[re],re,H);return j}function D_(H,nt,j,Ut){var re=H==null?0:H.length;for(Ut&&re&&(j=H[--re]);re--;)j=nt(j,H[re],re,H);return j}function bl(H,nt){for(var j=-1,Ut=H==null?0:H.length;++j<Ut;)if(nt(H[j],j,H))return!0;return!1}var L_=Tl("length");function I_(H){return H.split("")}function U_(H){return H.match(Zr)||[]}function Wh(H,nt,j){var Ut;return j(H,function(re,Ae,Qe){if(nt(re,Ae,Qe))return Ut=Ae,!1}),Ut}function La(H,nt,j,Ut){for(var re=H.length,Ae=j+(Ut?1:-1);Ut?Ae--:++Ae<re;)if(nt(H[Ae],Ae,H))return Ae;return-1}function $r(H,nt,j){return nt===nt?q_(H,nt,j):La(H,Xh,j)}function N_(H,nt,j,Ut){for(var re=j-1,Ae=H.length;++re<Ae;)if(Ut(H[re],nt))return re;return-1}function Xh(H){return H!==H}function qh(H,nt){var j=H==null?0:H.length;return j?wl(H,nt)/j:Rt}function Tl(H){return function(nt){return nt==null?e:nt[H]}}function Al(H){return function(nt){return H==null?e:H[nt]}}function Yh(H,nt,j,Ut,re){return re(H,function(Ae,Qe,ze){j=Ut?(Ut=!1,Ae):nt(j,Ae,Qe,ze)}),j}function F_(H,nt){var j=H.length;for(H.sort(nt);j--;)H[j]=H[j].value;return H}function wl(H,nt){for(var j,Ut=-1,re=H.length;++Ut<re;){var Ae=nt(H[Ut]);Ae!==e&&(j=j===e?Ae:j+Ae)}return j}function Rl(H,nt){for(var j=-1,Ut=Array(H);++j<H;)Ut[j]=nt(j);return Ut}function O_(H,nt){return We(nt,function(j){return[j,H[j]]})}function Zh(H){return H&&H.slice(0,Jh(H)+1).replace(_r,"")}function Nn(H){return function(nt){return H(nt)}}function Cl(H,nt){return We(nt,function(j){return H[j]})}function zs(H,nt){return H.has(nt)}function Kh(H,nt){for(var j=-1,Ut=H.length;++j<Ut&&$r(nt,H[j],0)>-1;);return j}function $h(H,nt){for(var j=H.length;j--&&$r(nt,H[j],0)>-1;);return j}function B_(H,nt){for(var j=H.length,Ut=0;j--;)H[j]===nt&&++Ut;return Ut}var z_=Al(S_),k_=Al(E_);function H_(H){return"\\"+T_[H]}function V_(H,nt){return H==null?e:H[nt]}function jr(H){return v_.test(H)}function G_(H){return x_.test(H)}function W_(H){for(var nt,j=[];!(nt=H.next()).done;)j.push(nt.value);return j}function Pl(H){var nt=-1,j=Array(H.size);return H.forEach(function(Ut,re){j[++nt]=[re,Ut]}),j}function jh(H,nt){return function(j){return H(nt(j))}}function Ki(H,nt){for(var j=-1,Ut=H.length,re=0,Ae=[];++j<Ut;){var Qe=H[j];(Qe===nt||Qe===p)&&(H[j]=p,Ae[re++]=j)}return Ae}function Ia(H){var nt=-1,j=Array(H.size);return H.forEach(function(Ut){j[++nt]=Ut}),j}function X_(H){var nt=-1,j=Array(H.size);return H.forEach(function(Ut){j[++nt]=[Ut,Ut]}),j}function q_(H,nt,j){for(var Ut=j-1,re=H.length;++Ut<re;)if(H[Ut]===nt)return Ut;return-1}function Y_(H,nt,j){for(var Ut=j+1;Ut--;)if(H[Ut]===nt)return Ut;return Ut}function Jr(H){return jr(H)?K_(H):L_(H)}function si(H){return jr(H)?$_(H):I_(H)}function Jh(H){for(var nt=H.length;nt--&&Ta.test(H.charAt(nt)););return nt}var Z_=Al(b_);function K_(H){for(var nt=xl.lastIndex=0;xl.test(H);)++nt;return nt}function $_(H){return H.match(xl)||[]}function j_(H){return H.match(g_)||[]}var J_=function H(nt){nt=nt==null?sn:$i.defaults(sn.Object(),nt,$i.pick(sn,M_));var j=nt.Array,Ut=nt.Date,re=nt.Error,Ae=nt.Function,Qe=nt.Math,ze=nt.Object,Dl=nt.RegExp,Q_=nt.String,qn=nt.TypeError,Ua=j.prototype,tg=Ae.prototype,Qr=ze.prototype,Na=nt["__core-js_shared__"],Fa=tg.toString,Ie=Qr.hasOwnProperty,eg=0,Qh=function(){var i=/[^.]+$/.exec(Na&&Na.keys&&Na.keys.IE_PROTO||"");return i?"Symbol(src)_1."+i:""}(),Oa=Qr.toString,ng=Fa.call(ze),ig=sn._,rg=Dl("^"+Fa.call(Ie).replace(qr,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Ba=Fh?nt.Buffer:e,ji=nt.Symbol,za=nt.Uint8Array,tf=Ba?Ba.allocUnsafe:e,ka=jh(ze.getPrototypeOf,ze),ef=ze.create,nf=Qr.propertyIsEnumerable,Ha=Ua.splice,rf=ji?ji.isConcatSpreadable:e,ks=ji?ji.iterator:e,Mr=ji?ji.toStringTag:e,Va=function(){try{var i=Tr(ze,"defineProperty");return i({},"",{}),i}catch{}}(),sg=nt.clearTimeout!==sn.clearTimeout&&nt.clearTimeout,ag=Ut&&Ut.now!==sn.Date.now&&Ut.now,og=nt.setTimeout!==sn.setTimeout&&nt.setTimeout,Ga=Qe.ceil,Wa=Qe.floor,Ll=ze.getOwnPropertySymbols,lg=Ba?Ba.isBuffer:e,sf=nt.isFinite,cg=Ua.join,ug=jh(ze.keys,ze),tn=Qe.max,mn=Qe.min,hg=Ut.now,fg=nt.parseInt,af=Qe.random,dg=Ua.reverse,Il=Tr(nt,"DataView"),Hs=Tr(nt,"Map"),Ul=Tr(nt,"Promise"),ts=Tr(nt,"Set"),Vs=Tr(nt,"WeakMap"),Gs=Tr(ze,"create"),Xa=Vs&&new Vs,es={},pg=Ar(Il),mg=Ar(Hs),_g=Ar(Ul),gg=Ar(ts),vg=Ar(Vs),qa=ji?ji.prototype:e,Ws=qa?qa.valueOf:e,of=qa?qa.toString:e;function E(i){if(Ye(i)&&!ae(i)&&!(i instanceof Me)){if(i instanceof Yn)return i;if(Ie.call(i,"__wrapped__"))return ld(i)}return new Yn(i)}var ns=function(){function i(){}return function(a){if(!qe(a))return{};if(ef)return ef(a);i.prototype=a;var c=new i;return i.prototype=e,c}}();function Ya(){}function Yn(i,a){this.__wrapped__=i,this.__actions__=[],this.__chain__=!!a,this.__index__=0,this.__values__=e}E.templateSettings={escape:kt,evaluate:ie,interpolate:Le,variable:"",imports:{_:E}},E.prototype=Ya.prototype,E.prototype.constructor=E,Yn.prototype=ns(Ya.prototype),Yn.prototype.constructor=Yn;function Me(i){this.__wrapped__=i,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=It,this.__views__=[]}function xg(){var i=new Me(this.__wrapped__);return i.__actions__=Rn(this.__actions__),i.__dir__=this.__dir__,i.__filtered__=this.__filtered__,i.__iteratees__=Rn(this.__iteratees__),i.__takeCount__=this.__takeCount__,i.__views__=Rn(this.__views__),i}function Mg(){if(this.__filtered__){var i=new Me(this);i.__dir__=-1,i.__filtered__=!0}else i=this.clone(),i.__dir__*=-1;return i}function yg(){var i=this.__wrapped__.value(),a=this.__dir__,c=ae(i),d=a<0,M=c?i.length:0,A=Iv(0,M,this.__views__),D=A.start,F=A.end,G=F-D,st=d?F:D-1,at=this.__iteratees__,dt=at.length,At=0,Vt=mn(G,this.__takeCount__);if(!c||!d&&M==G&&Vt==G)return Df(i,this.__actions__);var te=[];t:for(;G--&&At<Vt;){st+=a;for(var he=-1,ee=i[st];++he<dt;){var xe=at[he],ye=xe.iteratee,Bn=xe.type,En=ye(ee);if(Bn==it)ee=En;else if(!En){if(Bn==ot)continue t;break t}}te[At++]=ee}return te}Me.prototype=ns(Ya.prototype),Me.prototype.constructor=Me;function yr(i){var a=-1,c=i==null?0:i.length;for(this.clear();++a<c;){var d=i[a];this.set(d[0],d[1])}}function Sg(){this.__data__=Gs?Gs(null):{},this.size=0}function Eg(i){var a=this.has(i)&&delete this.__data__[i];return this.size-=a?1:0,a}function bg(i){var a=this.__data__;if(Gs){var c=a[i];return c===f?e:c}return Ie.call(a,i)?a[i]:e}function Tg(i){var a=this.__data__;return Gs?a[i]!==e:Ie.call(a,i)}function Ag(i,a){var c=this.__data__;return this.size+=this.has(i)?0:1,c[i]=Gs&&a===e?f:a,this}yr.prototype.clear=Sg,yr.prototype.delete=Eg,yr.prototype.get=bg,yr.prototype.has=Tg,yr.prototype.set=Ag;function wi(i){var a=-1,c=i==null?0:i.length;for(this.clear();++a<c;){var d=i[a];this.set(d[0],d[1])}}function wg(){this.__data__=[],this.size=0}function Rg(i){var a=this.__data__,c=Za(a,i);if(c<0)return!1;var d=a.length-1;return c==d?a.pop():Ha.call(a,c,1),--this.size,!0}function Cg(i){var a=this.__data__,c=Za(a,i);return c<0?e:a[c][1]}function Pg(i){return Za(this.__data__,i)>-1}function Dg(i,a){var c=this.__data__,d=Za(c,i);return d<0?(++this.size,c.push([i,a])):c[d][1]=a,this}wi.prototype.clear=wg,wi.prototype.delete=Rg,wi.prototype.get=Cg,wi.prototype.has=Pg,wi.prototype.set=Dg;function Ri(i){var a=-1,c=i==null?0:i.length;for(this.clear();++a<c;){var d=i[a];this.set(d[0],d[1])}}function Lg(){this.size=0,this.__data__={hash:new yr,map:new(Hs||wi),string:new yr}}function Ig(i){var a=ao(this,i).delete(i);return this.size-=a?1:0,a}function Ug(i){return ao(this,i).get(i)}function Ng(i){return ao(this,i).has(i)}function Fg(i,a){var c=ao(this,i),d=c.size;return c.set(i,a),this.size+=c.size==d?0:1,this}Ri.prototype.clear=Lg,Ri.prototype.delete=Ig,Ri.prototype.get=Ug,Ri.prototype.has=Ng,Ri.prototype.set=Fg;function Sr(i){var a=-1,c=i==null?0:i.length;for(this.__data__=new Ri;++a<c;)this.add(i[a])}function Og(i){return this.__data__.set(i,f),this}function Bg(i){return this.__data__.has(i)}Sr.prototype.add=Sr.prototype.push=Og,Sr.prototype.has=Bg;function ai(i){var a=this.__data__=new wi(i);this.size=a.size}function zg(){this.__data__=new wi,this.size=0}function kg(i){var a=this.__data__,c=a.delete(i);return this.size=a.size,c}function Hg(i){return this.__data__.get(i)}function Vg(i){return this.__data__.has(i)}function Gg(i,a){var c=this.__data__;if(c instanceof wi){var d=c.__data__;if(!Hs||d.length<s-1)return d.push([i,a]),this.size=++c.size,this;c=this.__data__=new Ri(d)}return c.set(i,a),this.size=c.size,this}ai.prototype.clear=zg,ai.prototype.delete=kg,ai.prototype.get=Hg,ai.prototype.has=Vg,ai.prototype.set=Gg;function lf(i,a){var c=ae(i),d=!c&&wr(i),M=!c&&!d&&nr(i),A=!c&&!d&&!M&&as(i),D=c||d||M||A,F=D?Rl(i.length,Q_):[],G=F.length;for(var st in i)(a||Ie.call(i,st))&&!(D&&(st=="length"||M&&(st=="offset"||st=="parent")||A&&(st=="buffer"||st=="byteLength"||st=="byteOffset")||Li(st,G)))&&F.push(st);return F}function cf(i){var a=i.length;return a?i[Xl(0,a-1)]:e}function Wg(i,a){return oo(Rn(i),Er(a,0,i.length))}function Xg(i){return oo(Rn(i))}function Nl(i,a,c){(c!==e&&!oi(i[a],c)||c===e&&!(a in i))&&Ci(i,a,c)}function Xs(i,a,c){var d=i[a];(!(Ie.call(i,a)&&oi(d,c))||c===e&&!(a in i))&&Ci(i,a,c)}function Za(i,a){for(var c=i.length;c--;)if(oi(i[c][0],a))return c;return-1}function qg(i,a,c,d){return Ji(i,function(M,A,D){a(d,M,c(M),D)}),d}function uf(i,a){return i&&_i(a,an(a),i)}function Yg(i,a){return i&&_i(a,Pn(a),i)}function Ci(i,a,c){a=="__proto__"&&Va?Va(i,a,{configurable:!0,enumerable:!0,value:c,writable:!0}):i[a]=c}function Fl(i,a){for(var c=-1,d=a.length,M=j(d),A=i==null;++c<d;)M[c]=A?e:_c(i,a[c]);return M}function Er(i,a,c){return i===i&&(c!==e&&(i=i<=c?i:c),a!==e&&(i=i>=a?i:a)),i}function Zn(i,a,c,d,M,A){var D,F=a&m,G=a&g,st=a&v;if(c&&(D=M?c(i,d,M,A):c(i)),D!==e)return D;if(!qe(i))return i;var at=ae(i);if(at){if(D=Nv(i),!F)return Rn(i,D)}else{var dt=_n(i),At=dt==Xe||dt==I;if(nr(i))return Uf(i,F);if(dt==mt||dt==de||At&&!M){if(D=G||At?{}:Qf(i),!F)return G?bv(i,Yg(D,i)):Ev(i,uf(D,i))}else{if(!He[dt])return M?i:{};D=Fv(i,dt,F)}}A||(A=new ai);var Vt=A.get(i);if(Vt)return Vt;A.set(i,D),Rd(i)?i.forEach(function(ee){D.add(Zn(ee,a,c,ee,i,A))}):Ad(i)&&i.forEach(function(ee,xe){D.set(xe,Zn(ee,a,c,xe,i,A))});var te=st?G?nc:ec:G?Pn:an,he=at?e:te(i);return Xn(he||i,function(ee,xe){he&&(xe=ee,ee=i[xe]),Xs(D,xe,Zn(ee,a,c,xe,i,A))}),D}function Zg(i){var a=an(i);return function(c){return hf(c,i,a)}}function hf(i,a,c){var d=c.length;if(i==null)return!d;for(i=ze(i);d--;){var M=c[d],A=a[M],D=i[M];if(D===e&&!(M in i)||!A(D))return!1}return!0}function ff(i,a,c){if(typeof i!="function")throw new qn(l);return Js(function(){i.apply(e,c)},a)}function qs(i,a,c,d){var M=-1,A=Da,D=!0,F=i.length,G=[],st=a.length;if(!F)return G;c&&(a=We(a,Nn(c))),d?(A=Sl,D=!1):a.length>=s&&(A=zs,D=!1,a=new Sr(a));t:for(;++M<F;){var at=i[M],dt=c==null?at:c(at);if(at=d||at!==0?at:0,D&&dt===dt){for(var At=st;At--;)if(a[At]===dt)continue t;G.push(at)}else A(a,dt,d)||G.push(at)}return G}var Ji=zf(mi),df=zf(Bl,!0);function Kg(i,a){var c=!0;return Ji(i,function(d,M,A){return c=!!a(d,M,A),c}),c}function Ka(i,a,c){for(var d=-1,M=i.length;++d<M;){var A=i[d],D=a(A);if(D!=null&&(F===e?D===D&&!On(D):c(D,F)))var F=D,G=A}return G}function $g(i,a,c,d){var M=i.length;for(c=ue(c),c<0&&(c=-c>M?0:M+c),d=d===e||d>M?M:ue(d),d<0&&(d+=M),d=c>d?0:Pd(d);c<d;)i[c++]=a;return i}function pf(i,a){var c=[];return Ji(i,function(d,M,A){a(d,M,A)&&c.push(d)}),c}function un(i,a,c,d,M){var A=-1,D=i.length;for(c||(c=Bv),M||(M=[]);++A<D;){var F=i[A];a>0&&c(F)?a>1?un(F,a-1,c,d,M):Zi(M,F):d||(M[M.length]=F)}return M}var Ol=kf(),mf=kf(!0);function mi(i,a){return i&&Ol(i,a,an)}function Bl(i,a){return i&&mf(i,a,an)}function $a(i,a){return Yi(a,function(c){return Ii(i[c])})}function br(i,a){a=tr(a,i);for(var c=0,d=a.length;i!=null&&c<d;)i=i[gi(a[c++])];return c&&c==d?i:e}function _f(i,a,c){var d=a(i);return ae(i)?d:Zi(d,c(i))}function yn(i){return i==null?i===e?y:Kt:Mr&&Mr in ze(i)?Lv(i):Xv(i)}function zl(i,a){return i>a}function jg(i,a){return i!=null&&Ie.call(i,a)}function Jg(i,a){return i!=null&&a in ze(i)}function Qg(i,a,c){return i>=mn(a,c)&&i<tn(a,c)}function kl(i,a,c){for(var d=c?Sl:Da,M=i[0].length,A=i.length,D=A,F=j(A),G=1/0,st=[];D--;){var at=i[D];D&&a&&(at=We(at,Nn(a))),G=mn(at.length,G),F[D]=!c&&(a||M>=120&&at.length>=120)?new Sr(D&&at):e}at=i[0];var dt=-1,At=F[0];t:for(;++dt<M&&st.length<G;){var Vt=at[dt],te=a?a(Vt):Vt;if(Vt=c||Vt!==0?Vt:0,!(At?zs(At,te):d(st,te,c))){for(D=A;--D;){var he=F[D];if(!(he?zs(he,te):d(i[D],te,c)))continue t}At&&At.push(te),st.push(Vt)}}return st}function tv(i,a,c,d){return mi(i,function(M,A,D){a(d,c(M),A,D)}),d}function Ys(i,a,c){a=tr(a,i),i=id(i,a);var d=i==null?i:i[gi($n(a))];return d==null?e:Un(d,i,c)}function gf(i){return Ye(i)&&yn(i)==de}function ev(i){return Ye(i)&&yn(i)==ut}function nv(i){return Ye(i)&&yn(i)==qt}function Zs(i,a,c,d,M){return i===a?!0:i==null||a==null||!Ye(i)&&!Ye(a)?i!==i&&a!==a:iv(i,a,c,d,Zs,M)}function iv(i,a,c,d,M,A){var D=ae(i),F=ae(a),G=D?rt:_n(i),st=F?rt:_n(a);G=G==de?mt:G,st=st==de?mt:st;var at=G==mt,dt=st==mt,At=G==st;if(At&&nr(i)){if(!nr(a))return!1;D=!0,at=!1}if(At&&!at)return A||(A=new ai),D||as(i)?$f(i,a,c,d,M,A):Pv(i,a,G,c,d,M,A);if(!(c&S)){var Vt=at&&Ie.call(i,"__wrapped__"),te=dt&&Ie.call(a,"__wrapped__");if(Vt||te){var he=Vt?i.value():i,ee=te?a.value():a;return A||(A=new ai),M(he,ee,c,d,A)}}return At?(A||(A=new ai),Dv(i,a,c,d,M,A)):!1}function rv(i){return Ye(i)&&_n(i)==_e}function Hl(i,a,c,d){var M=c.length,A=M,D=!d;if(i==null)return!A;for(i=ze(i);M--;){var F=c[M];if(D&&F[2]?F[1]!==i[F[0]]:!(F[0]in i))return!1}for(;++M<A;){F=c[M];var G=F[0],st=i[G],at=F[1];if(D&&F[2]){if(st===e&&!(G in i))return!1}else{var dt=new ai;if(d)var At=d(st,at,G,i,a,dt);if(!(At===e?Zs(at,st,S|T,d,dt):At))return!1}}return!0}function vf(i){if(!qe(i)||kv(i))return!1;var a=Ii(i)?rg:gl;return a.test(Ar(i))}function sv(i){return Ye(i)&&yn(i)==Yt}function av(i){return Ye(i)&&_n(i)==ve}function ov(i){return Ye(i)&&po(i.length)&&!!Ve[yn(i)]}function xf(i){return typeof i=="function"?i:i==null?Dn:typeof i=="object"?ae(i)?Sf(i[0],i[1]):yf(i):Hd(i)}function Vl(i){if(!js(i))return ug(i);var a=[];for(var c in ze(i))Ie.call(i,c)&&c!="constructor"&&a.push(c);return a}function lv(i){if(!qe(i))return Wv(i);var a=js(i),c=[];for(var d in i)d=="constructor"&&(a||!Ie.call(i,d))||c.push(d);return c}function Gl(i,a){return i<a}function Mf(i,a){var c=-1,d=Cn(i)?j(i.length):[];return Ji(i,function(M,A,D){d[++c]=a(M,A,D)}),d}function yf(i){var a=rc(i);return a.length==1&&a[0][2]?ed(a[0][0],a[0][1]):function(c){return c===i||Hl(c,i,a)}}function Sf(i,a){return ac(i)&&td(a)?ed(gi(i),a):function(c){var d=_c(c,i);return d===e&&d===a?gc(c,i):Zs(a,d,S|T)}}function ja(i,a,c,d,M){i!==a&&Ol(a,function(A,D){if(M||(M=new ai),qe(A))cv(i,a,D,c,ja,d,M);else{var F=d?d(lc(i,D),A,D+"",i,a,M):e;F===e&&(F=A),Nl(i,D,F)}},Pn)}function cv(i,a,c,d,M,A,D){var F=lc(i,c),G=lc(a,c),st=D.get(G);if(st){Nl(i,c,st);return}var at=A?A(F,G,c+"",i,a,D):e,dt=at===e;if(dt){var At=ae(G),Vt=!At&&nr(G),te=!At&&!Vt&&as(G);at=G,At||Vt||te?ae(F)?at=F:$e(F)?at=Rn(F):Vt?(dt=!1,at=Uf(G,!0)):te?(dt=!1,at=Nf(G,!0)):at=[]:Qs(G)||wr(G)?(at=F,wr(F)?at=Dd(F):(!qe(F)||Ii(F))&&(at=Qf(G))):dt=!1}dt&&(D.set(G,at),M(at,G,d,A,D),D.delete(G)),Nl(i,c,at)}function Ef(i,a){var c=i.length;if(c)return a+=a<0?c:0,Li(a,c)?i[a]:e}function bf(i,a,c){a.length?a=We(a,function(A){return ae(A)?function(D){return br(D,A.length===1?A[0]:A)}:A}):a=[Dn];var d=-1;a=We(a,Nn($t()));var M=Mf(i,function(A,D,F){var G=We(a,function(st){return st(A)});return{criteria:G,index:++d,value:A}});return F_(M,function(A,D){return Sv(A,D,c)})}function uv(i,a){return Tf(i,a,function(c,d){return gc(i,d)})}function Tf(i,a,c){for(var d=-1,M=a.length,A={};++d<M;){var D=a[d],F=br(i,D);c(F,D)&&Ks(A,tr(D,i),F)}return A}function hv(i){return function(a){return br(a,i)}}function Wl(i,a,c,d){var M=d?N_:$r,A=-1,D=a.length,F=i;for(i===a&&(a=Rn(a)),c&&(F=We(i,Nn(c)));++A<D;)for(var G=0,st=a[A],at=c?c(st):st;(G=M(F,at,G,d))>-1;)F!==i&&Ha.call(F,G,1),Ha.call(i,G,1);return i}function Af(i,a){for(var c=i?a.length:0,d=c-1;c--;){var M=a[c];if(c==d||M!==A){var A=M;Li(M)?Ha.call(i,M,1):Zl(i,M)}}return i}function Xl(i,a){return i+Wa(af()*(a-i+1))}function fv(i,a,c,d){for(var M=-1,A=tn(Ga((a-i)/(c||1)),0),D=j(A);A--;)D[d?A:++M]=i,i+=c;return D}function ql(i,a){var c="";if(!i||a<1||a>Q)return c;do a%2&&(c+=i),a=Wa(a/2),a&&(i+=i);while(a);return c}function pe(i,a){return cc(nd(i,a,Dn),i+"")}function dv(i){return cf(os(i))}function pv(i,a){var c=os(i);return oo(c,Er(a,0,c.length))}function Ks(i,a,c,d){if(!qe(i))return i;a=tr(a,i);for(var M=-1,A=a.length,D=A-1,F=i;F!=null&&++M<A;){var G=gi(a[M]),st=c;if(G==="__proto__"||G==="constructor"||G==="prototype")return i;if(M!=D){var at=F[G];st=d?d(at,G,F):e,st===e&&(st=qe(at)?at:Li(a[M+1])?[]:{})}Xs(F,G,st),F=F[G]}return i}var wf=Xa?function(i,a){return Xa.set(i,a),i}:Dn,mv=Va?function(i,a){return Va(i,"toString",{configurable:!0,enumerable:!1,value:xc(a),writable:!0})}:Dn;function _v(i){return oo(os(i))}function Kn(i,a,c){var d=-1,M=i.length;a<0&&(a=-a>M?0:M+a),c=c>M?M:c,c<0&&(c+=M),M=a>c?0:c-a>>>0,a>>>=0;for(var A=j(M);++d<M;)A[d]=i[d+a];return A}function gv(i,a){var c;return Ji(i,function(d,M,A){return c=a(d,M,A),!c}),!!c}function Ja(i,a,c){var d=0,M=i==null?d:i.length;if(typeof a=="number"&&a===a&&M<=we){for(;d<M;){var A=d+M>>>1,D=i[A];D!==null&&!On(D)&&(c?D<=a:D<a)?d=A+1:M=A}return M}return Yl(i,a,Dn,c)}function Yl(i,a,c,d){var M=0,A=i==null?0:i.length;if(A===0)return 0;a=c(a);for(var D=a!==a,F=a===null,G=On(a),st=a===e;M<A;){var at=Wa((M+A)/2),dt=c(i[at]),At=dt!==e,Vt=dt===null,te=dt===dt,he=On(dt);if(D)var ee=d||te;else st?ee=te&&(d||At):F?ee=te&&At&&(d||!Vt):G?ee=te&&At&&!Vt&&(d||!he):Vt||he?ee=!1:ee=d?dt<=a:dt<a;ee?M=at+1:A=at}return mn(A,le)}function Rf(i,a){for(var c=-1,d=i.length,M=0,A=[];++c<d;){var D=i[c],F=a?a(D):D;if(!c||!oi(F,G)){var G=F;A[M++]=D===0?0:D}}return A}function Cf(i){return typeof i=="number"?i:On(i)?Rt:+i}function Fn(i){if(typeof i=="string")return i;if(ae(i))return We(i,Fn)+"";if(On(i))return of?of.call(i):"";var a=i+"";return a=="0"&&1/i==-ft?"-0":a}function Qi(i,a,c){var d=-1,M=Da,A=i.length,D=!0,F=[],G=F;if(c)D=!1,M=Sl;else if(A>=s){var st=a?null:Rv(i);if(st)return Ia(st);D=!1,M=zs,G=new Sr}else G=a?[]:F;t:for(;++d<A;){var at=i[d],dt=a?a(at):at;if(at=c||at!==0?at:0,D&&dt===dt){for(var At=G.length;At--;)if(G[At]===dt)continue t;a&&G.push(dt),F.push(at)}else M(G,dt,c)||(G!==F&&G.push(dt),F.push(at))}return F}function Zl(i,a){return a=tr(a,i),i=id(i,a),i==null||delete i[gi($n(a))]}function Pf(i,a,c,d){return Ks(i,a,c(br(i,a)),d)}function Qa(i,a,c,d){for(var M=i.length,A=d?M:-1;(d?A--:++A<M)&&a(i[A],A,i););return c?Kn(i,d?0:A,d?A+1:M):Kn(i,d?A+1:0,d?M:A)}function Df(i,a){var c=i;return c instanceof Me&&(c=c.value()),El(a,function(d,M){return M.func.apply(M.thisArg,Zi([d],M.args))},c)}function Kl(i,a,c){var d=i.length;if(d<2)return d?Qi(i[0]):[];for(var M=-1,A=j(d);++M<d;)for(var D=i[M],F=-1;++F<d;)F!=M&&(A[M]=qs(A[M]||D,i[F],a,c));return Qi(un(A,1),a,c)}function Lf(i,a,c){for(var d=-1,M=i.length,A=a.length,D={};++d<M;){var F=d<A?a[d]:e;c(D,i[d],F)}return D}function $l(i){return $e(i)?i:[]}function jl(i){return typeof i=="function"?i:Dn}function tr(i,a){return ae(i)?i:ac(i,a)?[i]:od(Pe(i))}var vv=pe;function er(i,a,c){var d=i.length;return c=c===e?d:c,!a&&c>=d?i:Kn(i,a,c)}var If=sg||function(i){return sn.clearTimeout(i)};function Uf(i,a){if(a)return i.slice();var c=i.length,d=tf?tf(c):new i.constructor(c);return i.copy(d),d}function Jl(i){var a=new i.constructor(i.byteLength);return new za(a).set(new za(i)),a}function xv(i,a){var c=a?Jl(i.buffer):i.buffer;return new i.constructor(c,i.byteOffset,i.byteLength)}function Mv(i){var a=new i.constructor(i.source,Pa.exec(i));return a.lastIndex=i.lastIndex,a}function yv(i){return Ws?ze(Ws.call(i)):{}}function Nf(i,a){var c=a?Jl(i.buffer):i.buffer;return new i.constructor(c,i.byteOffset,i.length)}function Ff(i,a){if(i!==a){var c=i!==e,d=i===null,M=i===i,A=On(i),D=a!==e,F=a===null,G=a===a,st=On(a);if(!F&&!st&&!A&&i>a||A&&D&&G&&!F&&!st||d&&D&&G||!c&&G||!M)return 1;if(!d&&!A&&!st&&i<a||st&&c&&M&&!d&&!A||F&&c&&M||!D&&M||!G)return-1}return 0}function Sv(i,a,c){for(var d=-1,M=i.criteria,A=a.criteria,D=M.length,F=c.length;++d<D;){var G=Ff(M[d],A[d]);if(G){if(d>=F)return G;var st=c[d];return G*(st=="desc"?-1:1)}}return i.index-a.index}function Of(i,a,c,d){for(var M=-1,A=i.length,D=c.length,F=-1,G=a.length,st=tn(A-D,0),at=j(G+st),dt=!d;++F<G;)at[F]=a[F];for(;++M<D;)(dt||M<A)&&(at[c[M]]=i[M]);for(;st--;)at[F++]=i[M++];return at}function Bf(i,a,c,d){for(var M=-1,A=i.length,D=-1,F=c.length,G=-1,st=a.length,at=tn(A-F,0),dt=j(at+st),At=!d;++M<at;)dt[M]=i[M];for(var Vt=M;++G<st;)dt[Vt+G]=a[G];for(;++D<F;)(At||M<A)&&(dt[Vt+c[D]]=i[M++]);return dt}function Rn(i,a){var c=-1,d=i.length;for(a||(a=j(d));++c<d;)a[c]=i[c];return a}function _i(i,a,c,d){var M=!c;c||(c={});for(var A=-1,D=a.length;++A<D;){var F=a[A],G=d?d(c[F],i[F],F,c,i):e;G===e&&(G=i[F]),M?Ci(c,F,G):Xs(c,F,G)}return c}function Ev(i,a){return _i(i,sc(i),a)}function bv(i,a){return _i(i,jf(i),a)}function to(i,a){return function(c,d){var M=ae(c)?C_:qg,A=a?a():{};return M(c,i,$t(d,2),A)}}function is(i){return pe(function(a,c){var d=-1,M=c.length,A=M>1?c[M-1]:e,D=M>2?c[2]:e;for(A=i.length>3&&typeof A=="function"?(M--,A):e,D&&Sn(c[0],c[1],D)&&(A=M<3?e:A,M=1),a=ze(a);++d<M;){var F=c[d];F&&i(a,F,d,A)}return a})}function zf(i,a){return function(c,d){if(c==null)return c;if(!Cn(c))return i(c,d);for(var M=c.length,A=a?M:-1,D=ze(c);(a?A--:++A<M)&&d(D[A],A,D)!==!1;);return c}}function kf(i){return function(a,c,d){for(var M=-1,A=ze(a),D=d(a),F=D.length;F--;){var G=D[i?F:++M];if(c(A[G],G,A)===!1)break}return a}}function Tv(i,a,c){var d=a&x,M=$s(i);function A(){var D=this&&this!==sn&&this instanceof A?M:i;return D.apply(d?c:this,arguments)}return A}function Hf(i){return function(a){a=Pe(a);var c=jr(a)?si(a):e,d=c?c[0]:a.charAt(0),M=c?er(c,1).join(""):a.slice(1);return d[i]()+M}}function rs(i){return function(a){return El(zd(Bd(a).replace(m_,"")),i,"")}}function $s(i){return function(){var a=arguments;switch(a.length){case 0:return new i;case 1:return new i(a[0]);case 2:return new i(a[0],a[1]);case 3:return new i(a[0],a[1],a[2]);case 4:return new i(a[0],a[1],a[2],a[3]);case 5:return new i(a[0],a[1],a[2],a[3],a[4]);case 6:return new i(a[0],a[1],a[2],a[3],a[4],a[5]);case 7:return new i(a[0],a[1],a[2],a[3],a[4],a[5],a[6])}var c=ns(i.prototype),d=i.apply(c,a);return qe(d)?d:c}}function Av(i,a,c){var d=$s(i);function M(){for(var A=arguments.length,D=j(A),F=A,G=ss(M);F--;)D[F]=arguments[F];var st=A<3&&D[0]!==G&&D[A-1]!==G?[]:Ki(D,G);if(A-=st.length,A<c)return qf(i,a,eo,M.placeholder,e,D,st,e,e,c-A);var at=this&&this!==sn&&this instanceof M?d:i;return Un(at,this,D)}return M}function Vf(i){return function(a,c,d){var M=ze(a);if(!Cn(a)){var A=$t(c,3);a=an(a),c=function(F){return A(M[F],F,M)}}var D=i(a,c,d);return D>-1?M[A?a[D]:D]:e}}function Gf(i){return Di(function(a){var c=a.length,d=c,M=Yn.prototype.thru;for(i&&a.reverse();d--;){var A=a[d];if(typeof A!="function")throw new qn(l);if(M&&!D&&so(A)=="wrapper")var D=new Yn([],!0)}for(d=D?d:c;++d<c;){A=a[d];var F=so(A),G=F=="wrapper"?ic(A):e;G&&oc(G[0])&&G[1]==(N|L|B|Y)&&!G[4].length&&G[9]==1?D=D[so(G[0])].apply(D,G[3]):D=A.length==1&&oc(A)?D[F]():D.thru(A)}return function(){var st=arguments,at=st[0];if(D&&st.length==1&&ae(at))return D.plant(at).value();for(var dt=0,At=c?a[dt].apply(this,st):at;++dt<c;)At=a[dt].call(this,At);return At}})}function eo(i,a,c,d,M,A,D,F,G,st){var at=a&N,dt=a&x,At=a&_,Vt=a&(L|R),te=a&C,he=At?e:$s(i);function ee(){for(var xe=arguments.length,ye=j(xe),Bn=xe;Bn--;)ye[Bn]=arguments[Bn];if(Vt)var En=ss(ee),zn=B_(ye,En);if(d&&(ye=Of(ye,d,M,Vt)),A&&(ye=Bf(ye,A,D,Vt)),xe-=zn,Vt&&xe<st){var je=Ki(ye,En);return qf(i,a,eo,ee.placeholder,c,ye,je,F,G,st-xe)}var li=dt?c:this,Ni=At?li[i]:i;return xe=ye.length,F?ye=qv(ye,F):te&&xe>1&&ye.reverse(),at&&G<xe&&(ye.length=G),this&&this!==sn&&this instanceof ee&&(Ni=he||$s(Ni)),Ni.apply(li,ye)}return ee}function Wf(i,a){return function(c,d){return tv(c,i,a(d),{})}}function no(i,a){return function(c,d){var M;if(c===e&&d===e)return a;if(c!==e&&(M=c),d!==e){if(M===e)return d;typeof c=="string"||typeof d=="string"?(c=Fn(c),d=Fn(d)):(c=Cf(c),d=Cf(d)),M=i(c,d)}return M}}function Ql(i){return Di(function(a){return a=We(a,Nn($t())),pe(function(c){var d=this;return i(a,function(M){return Un(M,d,c)})})})}function io(i,a){a=a===e?" ":Fn(a);var c=a.length;if(c<2)return c?ql(a,i):a;var d=ql(a,Ga(i/Jr(a)));return jr(a)?er(si(d),0,i).join(""):d.slice(0,i)}function wv(i,a,c,d){var M=a&x,A=$s(i);function D(){for(var F=-1,G=arguments.length,st=-1,at=d.length,dt=j(at+G),At=this&&this!==sn&&this instanceof D?A:i;++st<at;)dt[st]=d[st];for(;G--;)dt[st++]=arguments[++F];return Un(At,M?c:this,dt)}return D}function Xf(i){return function(a,c,d){return d&&typeof d!="number"&&Sn(a,c,d)&&(c=d=e),a=Ui(a),c===e?(c=a,a=0):c=Ui(c),d=d===e?a<c?1:-1:Ui(d),fv(a,c,d,i)}}function ro(i){return function(a,c){return typeof a=="string"&&typeof c=="string"||(a=jn(a),c=jn(c)),i(a,c)}}function qf(i,a,c,d,M,A,D,F,G,st){var at=a&L,dt=at?D:e,At=at?e:D,Vt=at?A:e,te=at?e:A;a|=at?B:O,a&=~(at?O:B),a&U||(a&=-4);var he=[i,a,M,Vt,dt,te,At,F,G,st],ee=c.apply(e,he);return oc(i)&&rd(ee,he),ee.placeholder=d,sd(ee,i,a)}function tc(i){var a=Qe[i];return function(c,d){if(c=jn(c),d=d==null?0:mn(ue(d),292),d&&sf(c)){var M=(Pe(c)+"e").split("e"),A=a(M[0]+"e"+(+M[1]+d));return M=(Pe(A)+"e").split("e"),+(M[0]+"e"+(+M[1]-d))}return a(c)}}var Rv=ts&&1/Ia(new ts([,-0]))[1]==ft?function(i){return new ts(i)}:Sc;function Yf(i){return function(a){var c=_n(a);return c==_e?Pl(a):c==ve?X_(a):O_(a,i(a))}}function Pi(i,a,c,d,M,A,D,F){var G=a&_;if(!G&&typeof i!="function")throw new qn(l);var st=d?d.length:0;if(st||(a&=-97,d=M=e),D=D===e?D:tn(ue(D),0),F=F===e?F:ue(F),st-=M?M.length:0,a&O){var at=d,dt=M;d=M=e}var At=G?e:ic(i),Vt=[i,a,c,d,M,at,dt,A,D,F];if(At&&Gv(Vt,At),i=Vt[0],a=Vt[1],c=Vt[2],d=Vt[3],M=Vt[4],F=Vt[9]=Vt[9]===e?G?0:i.length:tn(Vt[9]-st,0),!F&&a&(L|R)&&(a&=-25),!a||a==x)var te=Tv(i,a,c);else a==L||a==R?te=Av(i,a,F):(a==B||a==(x|B))&&!M.length?te=wv(i,a,c,d):te=eo.apply(e,Vt);var he=At?wf:rd;return sd(he(te,Vt),i,a)}function Zf(i,a,c,d){return i===e||oi(i,Qr[c])&&!Ie.call(d,c)?a:i}function Kf(i,a,c,d,M,A){return qe(i)&&qe(a)&&(A.set(a,i),ja(i,a,e,Kf,A),A.delete(a)),i}function Cv(i){return Qs(i)?e:i}function $f(i,a,c,d,M,A){var D=c&S,F=i.length,G=a.length;if(F!=G&&!(D&&G>F))return!1;var st=A.get(i),at=A.get(a);if(st&&at)return st==a&&at==i;var dt=-1,At=!0,Vt=c&T?new Sr:e;for(A.set(i,a),A.set(a,i);++dt<F;){var te=i[dt],he=a[dt];if(d)var ee=D?d(he,te,dt,a,i,A):d(te,he,dt,i,a,A);if(ee!==e){if(ee)continue;At=!1;break}if(Vt){if(!bl(a,function(xe,ye){if(!zs(Vt,ye)&&(te===xe||M(te,xe,c,d,A)))return Vt.push(ye)})){At=!1;break}}else if(!(te===he||M(te,he,c,d,A))){At=!1;break}}return A.delete(i),A.delete(a),At}function Pv(i,a,c,d,M,A,D){switch(c){case tt:if(i.byteLength!=a.byteLength||i.byteOffset!=a.byteOffset)return!1;i=i.buffer,a=a.buffer;case ut:return!(i.byteLength!=a.byteLength||!A(new za(i),new za(a)));case Pt:case qt:case Jt:return oi(+i,+a);case ce:return i.name==a.name&&i.message==a.message;case Yt:case De:return i==a+"";case _e:var F=Pl;case ve:var G=d&S;if(F||(F=Ia),i.size!=a.size&&!G)return!1;var st=D.get(i);if(st)return st==a;d|=T,D.set(i,a);var at=$f(F(i),F(a),d,M,A,D);return D.delete(i),at;case P:if(Ws)return Ws.call(i)==Ws.call(a)}return!1}function Dv(i,a,c,d,M,A){var D=c&S,F=ec(i),G=F.length,st=ec(a),at=st.length;if(G!=at&&!D)return!1;for(var dt=G;dt--;){var At=F[dt];if(!(D?At in a:Ie.call(a,At)))return!1}var Vt=A.get(i),te=A.get(a);if(Vt&&te)return Vt==a&&te==i;var he=!0;A.set(i,a),A.set(a,i);for(var ee=D;++dt<G;){At=F[dt];var xe=i[At],ye=a[At];if(d)var Bn=D?d(ye,xe,At,a,i,A):d(xe,ye,At,i,a,A);if(!(Bn===e?xe===ye||M(xe,ye,c,d,A):Bn)){he=!1;break}ee||(ee=At=="constructor")}if(he&&!ee){var En=i.constructor,zn=a.constructor;En!=zn&&"constructor"in i&&"constructor"in a&&!(typeof En=="function"&&En instanceof En&&typeof zn=="function"&&zn instanceof zn)&&(he=!1)}return A.delete(i),A.delete(a),he}function Di(i){return cc(nd(i,e,hd),i+"")}function ec(i){return _f(i,an,sc)}function nc(i){return _f(i,Pn,jf)}var ic=Xa?function(i){return Xa.get(i)}:Sc;function so(i){for(var a=i.name+"",c=es[a],d=Ie.call(es,a)?c.length:0;d--;){var M=c[d],A=M.func;if(A==null||A==i)return M.name}return a}function ss(i){var a=Ie.call(E,"placeholder")?E:i;return a.placeholder}function $t(){var i=E.iteratee||Mc;return i=i===Mc?xf:i,arguments.length?i(arguments[0],arguments[1]):i}function ao(i,a){var c=i.__data__;return zv(a)?c[typeof a=="string"?"string":"hash"]:c.map}function rc(i){for(var a=an(i),c=a.length;c--;){var d=a[c],M=i[d];a[c]=[d,M,td(M)]}return a}function Tr(i,a){var c=V_(i,a);return vf(c)?c:e}function Lv(i){var a=Ie.call(i,Mr),c=i[Mr];try{i[Mr]=e;var d=!0}catch{}var M=Oa.call(i);return d&&(a?i[Mr]=c:delete i[Mr]),M}var sc=Ll?function(i){return i==null?[]:(i=ze(i),Yi(Ll(i),function(a){return nf.call(i,a)}))}:Ec,jf=Ll?function(i){for(var a=[];i;)Zi(a,sc(i)),i=ka(i);return a}:Ec,_n=yn;(Il&&_n(new Il(new ArrayBuffer(1)))!=tt||Hs&&_n(new Hs)!=_e||Ul&&_n(Ul.resolve())!=Ee||ts&&_n(new ts)!=ve||Vs&&_n(new Vs)!=V)&&(_n=function(i){var a=yn(i),c=a==mt?i.constructor:e,d=c?Ar(c):"";if(d)switch(d){case pg:return tt;case mg:return _e;case _g:return Ee;case gg:return ve;case vg:return V}return a});function Iv(i,a,c){for(var d=-1,M=c.length;++d<M;){var A=c[d],D=A.size;switch(A.type){case"drop":i+=D;break;case"dropRight":a-=D;break;case"take":a=mn(a,i+D);break;case"takeRight":i=tn(i,a-D);break}}return{start:i,end:a}}function Uv(i){var a=i.match(Yr);return a?a[1].split(wa):[]}function Jf(i,a,c){a=tr(a,i);for(var d=-1,M=a.length,A=!1;++d<M;){var D=gi(a[d]);if(!(A=i!=null&&c(i,D)))break;i=i[D]}return A||++d!=M?A:(M=i==null?0:i.length,!!M&&po(M)&&Li(D,M)&&(ae(i)||wr(i)))}function Nv(i){var a=i.length,c=new i.constructor(a);return a&&typeof i[0]=="string"&&Ie.call(i,"index")&&(c.index=i.index,c.input=i.input),c}function Qf(i){return typeof i.constructor=="function"&&!js(i)?ns(ka(i)):{}}function Fv(i,a,c){var d=i.constructor;switch(a){case ut:return Jl(i);case Pt:case qt:return new d(+i);case tt:return xv(i,c);case Bt:case gt:case Ft:case Ot:case _t:case bt:case Ht:case Dt:case Tt:return Nf(i,c);case _e:return new d;case Jt:case De:return new d(i);case Yt:return Mv(i);case ve:return new d;case P:return yv(i)}}function Ov(i,a){var c=a.length;if(!c)return i;var d=c-1;return a[d]=(c>1?"& ":"")+a[d],a=a.join(c>2?", ":" "),i.replace(Aa,`{
/* [wrapped with `+a+`] */
`)}function Bv(i){return ae(i)||wr(i)||!!(rf&&i&&i[rf])}function Li(i,a){var c=typeof i;return a=a??Q,!!a&&(c=="number"||c!="symbol"&&b.test(i))&&i>-1&&i%1==0&&i<a}function Sn(i,a,c){if(!qe(c))return!1;var d=typeof a;return(d=="number"?Cn(c)&&Li(a,c.length):d=="string"&&a in c)?oi(c[a],i):!1}function ac(i,a){if(ae(i))return!1;var c=typeof i;return c=="number"||c=="symbol"||c=="boolean"||i==null||On(i)?!0:ni.test(i)||!be.test(i)||a!=null&&i in ze(a)}function zv(i){var a=typeof i;return a=="string"||a=="number"||a=="symbol"||a=="boolean"?i!=="__proto__":i===null}function oc(i){var a=so(i),c=E[a];if(typeof c!="function"||!(a in Me.prototype))return!1;if(i===c)return!0;var d=ic(c);return!!d&&i===d[0]}function kv(i){return!!Qh&&Qh in i}var Hv=Na?Ii:bc;function js(i){var a=i&&i.constructor,c=typeof a=="function"&&a.prototype||Qr;return i===c}function td(i){return i===i&&!qe(i)}function ed(i,a){return function(c){return c==null?!1:c[i]===a&&(a!==e||i in ze(c))}}function Vv(i){var a=ho(i,function(d){return c.size===h&&c.clear(),d}),c=a.cache;return a}function Gv(i,a){var c=i[1],d=a[1],M=c|d,A=M<(x|_|N),D=d==N&&c==L||d==N&&c==Y&&i[7].length<=a[8]||d==(N|Y)&&a[7].length<=a[8]&&c==L;if(!(A||D))return i;d&x&&(i[2]=a[2],M|=c&x?0:U);var F=a[3];if(F){var G=i[3];i[3]=G?Of(G,F,a[4]):F,i[4]=G?Ki(i[3],p):a[4]}return F=a[5],F&&(G=i[5],i[5]=G?Bf(G,F,a[6]):F,i[6]=G?Ki(i[5],p):a[6]),F=a[7],F&&(i[7]=F),d&N&&(i[8]=i[8]==null?a[8]:mn(i[8],a[8])),i[9]==null&&(i[9]=a[9]),i[0]=a[0],i[1]=M,i}function Wv(i){var a=[];if(i!=null)for(var c in ze(i))a.push(c);return a}function Xv(i){return Oa.call(i)}function nd(i,a,c){return a=tn(a===e?i.length-1:a,0),function(){for(var d=arguments,M=-1,A=tn(d.length-a,0),D=j(A);++M<A;)D[M]=d[a+M];M=-1;for(var F=j(a+1);++M<a;)F[M]=d[M];return F[a]=c(D),Un(i,this,F)}}function id(i,a){return a.length<2?i:br(i,Kn(a,0,-1))}function qv(i,a){for(var c=i.length,d=mn(a.length,c),M=Rn(i);d--;){var A=a[d];i[d]=Li(A,c)?M[A]:e}return i}function lc(i,a){if(!(a==="constructor"&&typeof i[a]=="function")&&a!="__proto__")return i[a]}var rd=ad(wf),Js=og||function(i,a){return sn.setTimeout(i,a)},cc=ad(mv);function sd(i,a,c){var d=a+"";return cc(i,Ov(d,Yv(Uv(d),c)))}function ad(i){var a=0,c=0;return function(){var d=hg(),M=Z-(d-c);if(c=d,M>0){if(++a>=$)return arguments[0]}else a=0;return i.apply(e,arguments)}}function oo(i,a){var c=-1,d=i.length,M=d-1;for(a=a===e?d:a;++c<a;){var A=Xl(c,M),D=i[A];i[A]=i[c],i[c]=D}return i.length=a,i}var od=Vv(function(i){var a=[];return i.charCodeAt(0)===46&&a.push(""),i.replace(Gn,function(c,d,M,A){a.push(M?A.replace(Ca,"$1"):d||c)}),a});function gi(i){if(typeof i=="string"||On(i))return i;var a=i+"";return a=="0"&&1/i==-ft?"-0":a}function Ar(i){if(i!=null){try{return Fa.call(i)}catch{}try{return i+""}catch{}}return""}function Yv(i,a){return Xn(Ue,function(c){var d="_."+c[0];a&c[1]&&!Da(i,d)&&i.push(d)}),i.sort()}function ld(i){if(i instanceof Me)return i.clone();var a=new Yn(i.__wrapped__,i.__chain__);return a.__actions__=Rn(i.__actions__),a.__index__=i.__index__,a.__values__=i.__values__,a}function Zv(i,a,c){(c?Sn(i,a,c):a===e)?a=1:a=tn(ue(a),0);var d=i==null?0:i.length;if(!d||a<1)return[];for(var M=0,A=0,D=j(Ga(d/a));M<d;)D[A++]=Kn(i,M,M+=a);return D}function Kv(i){for(var a=-1,c=i==null?0:i.length,d=0,M=[];++a<c;){var A=i[a];A&&(M[d++]=A)}return M}function $v(){var i=arguments.length;if(!i)return[];for(var a=j(i-1),c=arguments[0],d=i;d--;)a[d-1]=arguments[d];return Zi(ae(c)?Rn(c):[c],un(a,1))}var jv=pe(function(i,a){return $e(i)?qs(i,un(a,1,$e,!0)):[]}),Jv=pe(function(i,a){var c=$n(a);return $e(c)&&(c=e),$e(i)?qs(i,un(a,1,$e,!0),$t(c,2)):[]}),Qv=pe(function(i,a){var c=$n(a);return $e(c)&&(c=e),$e(i)?qs(i,un(a,1,$e,!0),e,c):[]});function t0(i,a,c){var d=i==null?0:i.length;return d?(a=c||a===e?1:ue(a),Kn(i,a<0?0:a,d)):[]}function e0(i,a,c){var d=i==null?0:i.length;return d?(a=c||a===e?1:ue(a),a=d-a,Kn(i,0,a<0?0:a)):[]}function n0(i,a){return i&&i.length?Qa(i,$t(a,3),!0,!0):[]}function i0(i,a){return i&&i.length?Qa(i,$t(a,3),!0):[]}function r0(i,a,c,d){var M=i==null?0:i.length;return M?(c&&typeof c!="number"&&Sn(i,a,c)&&(c=0,d=M),$g(i,a,c,d)):[]}function cd(i,a,c){var d=i==null?0:i.length;if(!d)return-1;var M=c==null?0:ue(c);return M<0&&(M=tn(d+M,0)),La(i,$t(a,3),M)}function ud(i,a,c){var d=i==null?0:i.length;if(!d)return-1;var M=d-1;return c!==e&&(M=ue(c),M=c<0?tn(d+M,0):mn(M,d-1)),La(i,$t(a,3),M,!0)}function hd(i){var a=i==null?0:i.length;return a?un(i,1):[]}function s0(i){var a=i==null?0:i.length;return a?un(i,ft):[]}function a0(i,a){var c=i==null?0:i.length;return c?(a=a===e?1:ue(a),un(i,a)):[]}function o0(i){for(var a=-1,c=i==null?0:i.length,d={};++a<c;){var M=i[a];d[M[0]]=M[1]}return d}function fd(i){return i&&i.length?i[0]:e}function l0(i,a,c){var d=i==null?0:i.length;if(!d)return-1;var M=c==null?0:ue(c);return M<0&&(M=tn(d+M,0)),$r(i,a,M)}function c0(i){var a=i==null?0:i.length;return a?Kn(i,0,-1):[]}var u0=pe(function(i){var a=We(i,$l);return a.length&&a[0]===i[0]?kl(a):[]}),h0=pe(function(i){var a=$n(i),c=We(i,$l);return a===$n(c)?a=e:c.pop(),c.length&&c[0]===i[0]?kl(c,$t(a,2)):[]}),f0=pe(function(i){var a=$n(i),c=We(i,$l);return a=typeof a=="function"?a:e,a&&c.pop(),c.length&&c[0]===i[0]?kl(c,e,a):[]});function d0(i,a){return i==null?"":cg.call(i,a)}function $n(i){var a=i==null?0:i.length;return a?i[a-1]:e}function p0(i,a,c){var d=i==null?0:i.length;if(!d)return-1;var M=d;return c!==e&&(M=ue(c),M=M<0?tn(d+M,0):mn(M,d-1)),a===a?Y_(i,a,M):La(i,Xh,M,!0)}function m0(i,a){return i&&i.length?Ef(i,ue(a)):e}var _0=pe(dd);function dd(i,a){return i&&i.length&&a&&a.length?Wl(i,a):i}function g0(i,a,c){return i&&i.length&&a&&a.length?Wl(i,a,$t(c,2)):i}function v0(i,a,c){return i&&i.length&&a&&a.length?Wl(i,a,e,c):i}var x0=Di(function(i,a){var c=i==null?0:i.length,d=Fl(i,a);return Af(i,We(a,function(M){return Li(M,c)?+M:M}).sort(Ff)),d});function M0(i,a){var c=[];if(!(i&&i.length))return c;var d=-1,M=[],A=i.length;for(a=$t(a,3);++d<A;){var D=i[d];a(D,d,i)&&(c.push(D),M.push(d))}return Af(i,M),c}function uc(i){return i==null?i:dg.call(i)}function y0(i,a,c){var d=i==null?0:i.length;return d?(c&&typeof c!="number"&&Sn(i,a,c)?(a=0,c=d):(a=a==null?0:ue(a),c=c===e?d:ue(c)),Kn(i,a,c)):[]}function S0(i,a){return Ja(i,a)}function E0(i,a,c){return Yl(i,a,$t(c,2))}function b0(i,a){var c=i==null?0:i.length;if(c){var d=Ja(i,a);if(d<c&&oi(i[d],a))return d}return-1}function T0(i,a){return Ja(i,a,!0)}function A0(i,a,c){return Yl(i,a,$t(c,2),!0)}function w0(i,a){var c=i==null?0:i.length;if(c){var d=Ja(i,a,!0)-1;if(oi(i[d],a))return d}return-1}function R0(i){return i&&i.length?Rf(i):[]}function C0(i,a){return i&&i.length?Rf(i,$t(a,2)):[]}function P0(i){var a=i==null?0:i.length;return a?Kn(i,1,a):[]}function D0(i,a,c){return i&&i.length?(a=c||a===e?1:ue(a),Kn(i,0,a<0?0:a)):[]}function L0(i,a,c){var d=i==null?0:i.length;return d?(a=c||a===e?1:ue(a),a=d-a,Kn(i,a<0?0:a,d)):[]}function I0(i,a){return i&&i.length?Qa(i,$t(a,3),!1,!0):[]}function U0(i,a){return i&&i.length?Qa(i,$t(a,3)):[]}var N0=pe(function(i){return Qi(un(i,1,$e,!0))}),F0=pe(function(i){var a=$n(i);return $e(a)&&(a=e),Qi(un(i,1,$e,!0),$t(a,2))}),O0=pe(function(i){var a=$n(i);return a=typeof a=="function"?a:e,Qi(un(i,1,$e,!0),e,a)});function B0(i){return i&&i.length?Qi(i):[]}function z0(i,a){return i&&i.length?Qi(i,$t(a,2)):[]}function k0(i,a){return a=typeof a=="function"?a:e,i&&i.length?Qi(i,e,a):[]}function hc(i){if(!(i&&i.length))return[];var a=0;return i=Yi(i,function(c){if($e(c))return a=tn(c.length,a),!0}),Rl(a,function(c){return We(i,Tl(c))})}function pd(i,a){if(!(i&&i.length))return[];var c=hc(i);return a==null?c:We(c,function(d){return Un(a,e,d)})}var H0=pe(function(i,a){return $e(i)?qs(i,a):[]}),V0=pe(function(i){return Kl(Yi(i,$e))}),G0=pe(function(i){var a=$n(i);return $e(a)&&(a=e),Kl(Yi(i,$e),$t(a,2))}),W0=pe(function(i){var a=$n(i);return a=typeof a=="function"?a:e,Kl(Yi(i,$e),e,a)}),X0=pe(hc);function q0(i,a){return Lf(i||[],a||[],Xs)}function Y0(i,a){return Lf(i||[],a||[],Ks)}var Z0=pe(function(i){var a=i.length,c=a>1?i[a-1]:e;return c=typeof c=="function"?(i.pop(),c):e,pd(i,c)});function md(i){var a=E(i);return a.__chain__=!0,a}function K0(i,a){return a(i),i}function lo(i,a){return a(i)}var $0=Di(function(i){var a=i.length,c=a?i[0]:0,d=this.__wrapped__,M=function(A){return Fl(A,i)};return a>1||this.__actions__.length||!(d instanceof Me)||!Li(c)?this.thru(M):(d=d.slice(c,+c+(a?1:0)),d.__actions__.push({func:lo,args:[M],thisArg:e}),new Yn(d,this.__chain__).thru(function(A){return a&&!A.length&&A.push(e),A}))});function j0(){return md(this)}function J0(){return new Yn(this.value(),this.__chain__)}function Q0(){this.__values__===e&&(this.__values__=Cd(this.value()));var i=this.__index__>=this.__values__.length,a=i?e:this.__values__[this.__index__++];return{done:i,value:a}}function tx(){return this}function ex(i){for(var a,c=this;c instanceof Ya;){var d=ld(c);d.__index__=0,d.__values__=e,a?M.__wrapped__=d:a=d;var M=d;c=c.__wrapped__}return M.__wrapped__=i,a}function nx(){var i=this.__wrapped__;if(i instanceof Me){var a=i;return this.__actions__.length&&(a=new Me(this)),a=a.reverse(),a.__actions__.push({func:lo,args:[uc],thisArg:e}),new Yn(a,this.__chain__)}return this.thru(uc)}function ix(){return Df(this.__wrapped__,this.__actions__)}var rx=to(function(i,a,c){Ie.call(i,c)?++i[c]:Ci(i,c,1)});function sx(i,a,c){var d=ae(i)?Gh:Kg;return c&&Sn(i,a,c)&&(a=e),d(i,$t(a,3))}function ax(i,a){var c=ae(i)?Yi:pf;return c(i,$t(a,3))}var ox=Vf(cd),lx=Vf(ud);function cx(i,a){return un(co(i,a),1)}function ux(i,a){return un(co(i,a),ft)}function hx(i,a,c){return c=c===e?1:ue(c),un(co(i,a),c)}function _d(i,a){var c=ae(i)?Xn:Ji;return c(i,$t(a,3))}function gd(i,a){var c=ae(i)?P_:df;return c(i,$t(a,3))}var fx=to(function(i,a,c){Ie.call(i,c)?i[c].push(a):Ci(i,c,[a])});function dx(i,a,c,d){i=Cn(i)?i:os(i),c=c&&!d?ue(c):0;var M=i.length;return c<0&&(c=tn(M+c,0)),mo(i)?c<=M&&i.indexOf(a,c)>-1:!!M&&$r(i,a,c)>-1}var px=pe(function(i,a,c){var d=-1,M=typeof a=="function",A=Cn(i)?j(i.length):[];return Ji(i,function(D){A[++d]=M?Un(a,D,c):Ys(D,a,c)}),A}),mx=to(function(i,a,c){Ci(i,c,a)});function co(i,a){var c=ae(i)?We:Mf;return c(i,$t(a,3))}function _x(i,a,c,d){return i==null?[]:(ae(a)||(a=a==null?[]:[a]),c=d?e:c,ae(c)||(c=c==null?[]:[c]),bf(i,a,c))}var gx=to(function(i,a,c){i[c?0:1].push(a)},function(){return[[],[]]});function vx(i,a,c){var d=ae(i)?El:Yh,M=arguments.length<3;return d(i,$t(a,4),c,M,Ji)}function xx(i,a,c){var d=ae(i)?D_:Yh,M=arguments.length<3;return d(i,$t(a,4),c,M,df)}function Mx(i,a){var c=ae(i)?Yi:pf;return c(i,fo($t(a,3)))}function yx(i){var a=ae(i)?cf:dv;return a(i)}function Sx(i,a,c){(c?Sn(i,a,c):a===e)?a=1:a=ue(a);var d=ae(i)?Wg:pv;return d(i,a)}function Ex(i){var a=ae(i)?Xg:_v;return a(i)}function bx(i){if(i==null)return 0;if(Cn(i))return mo(i)?Jr(i):i.length;var a=_n(i);return a==_e||a==ve?i.size:Vl(i).length}function Tx(i,a,c){var d=ae(i)?bl:gv;return c&&Sn(i,a,c)&&(a=e),d(i,$t(a,3))}var Ax=pe(function(i,a){if(i==null)return[];var c=a.length;return c>1&&Sn(i,a[0],a[1])?a=[]:c>2&&Sn(a[0],a[1],a[2])&&(a=[a[0]]),bf(i,un(a,1),[])}),uo=ag||function(){return sn.Date.now()};function wx(i,a){if(typeof a!="function")throw new qn(l);return i=ue(i),function(){if(--i<1)return a.apply(this,arguments)}}function vd(i,a,c){return a=c?e:a,a=i&&a==null?i.length:a,Pi(i,N,e,e,e,e,a)}function xd(i,a){var c;if(typeof a!="function")throw new qn(l);return i=ue(i),function(){return--i>0&&(c=a.apply(this,arguments)),i<=1&&(a=e),c}}var fc=pe(function(i,a,c){var d=x;if(c.length){var M=Ki(c,ss(fc));d|=B}return Pi(i,d,a,c,M)}),Md=pe(function(i,a,c){var d=x|_;if(c.length){var M=Ki(c,ss(Md));d|=B}return Pi(a,d,i,c,M)});function yd(i,a,c){a=c?e:a;var d=Pi(i,L,e,e,e,e,e,a);return d.placeholder=yd.placeholder,d}function Sd(i,a,c){a=c?e:a;var d=Pi(i,R,e,e,e,e,e,a);return d.placeholder=Sd.placeholder,d}function Ed(i,a,c){var d,M,A,D,F,G,st=0,at=!1,dt=!1,At=!0;if(typeof i!="function")throw new qn(l);a=jn(a)||0,qe(c)&&(at=!!c.leading,dt="maxWait"in c,A=dt?tn(jn(c.maxWait)||0,a):A,At="trailing"in c?!!c.trailing:At);function Vt(je){var li=d,Ni=M;return d=M=e,st=je,D=i.apply(Ni,li),D}function te(je){return st=je,F=Js(xe,a),at?Vt(je):D}function he(je){var li=je-G,Ni=je-st,Vd=a-li;return dt?mn(Vd,A-Ni):Vd}function ee(je){var li=je-G,Ni=je-st;return G===e||li>=a||li<0||dt&&Ni>=A}function xe(){var je=uo();if(ee(je))return ye(je);F=Js(xe,he(je))}function ye(je){return F=e,At&&d?Vt(je):(d=M=e,D)}function Bn(){F!==e&&If(F),st=0,d=G=M=F=e}function En(){return F===e?D:ye(uo())}function zn(){var je=uo(),li=ee(je);if(d=arguments,M=this,G=je,li){if(F===e)return te(G);if(dt)return If(F),F=Js(xe,a),Vt(G)}return F===e&&(F=Js(xe,a)),D}return zn.cancel=Bn,zn.flush=En,zn}var Rx=pe(function(i,a){return ff(i,1,a)}),Cx=pe(function(i,a,c){return ff(i,jn(a)||0,c)});function Px(i){return Pi(i,C)}function ho(i,a){if(typeof i!="function"||a!=null&&typeof a!="function")throw new qn(l);var c=function(){var d=arguments,M=a?a.apply(this,d):d[0],A=c.cache;if(A.has(M))return A.get(M);var D=i.apply(this,d);return c.cache=A.set(M,D)||A,D};return c.cache=new(ho.Cache||Ri),c}ho.Cache=Ri;function fo(i){if(typeof i!="function")throw new qn(l);return function(){var a=arguments;switch(a.length){case 0:return!i.call(this);case 1:return!i.call(this,a[0]);case 2:return!i.call(this,a[0],a[1]);case 3:return!i.call(this,a[0],a[1],a[2])}return!i.apply(this,a)}}function Dx(i){return xd(2,i)}var Lx=vv(function(i,a){a=a.length==1&&ae(a[0])?We(a[0],Nn($t())):We(un(a,1),Nn($t()));var c=a.length;return pe(function(d){for(var M=-1,A=mn(d.length,c);++M<A;)d[M]=a[M].call(this,d[M]);return Un(i,this,d)})}),dc=pe(function(i,a){var c=Ki(a,ss(dc));return Pi(i,B,e,a,c)}),bd=pe(function(i,a){var c=Ki(a,ss(bd));return Pi(i,O,e,a,c)}),Ix=Di(function(i,a){return Pi(i,Y,e,e,e,a)});function Ux(i,a){if(typeof i!="function")throw new qn(l);return a=a===e?a:ue(a),pe(i,a)}function Nx(i,a){if(typeof i!="function")throw new qn(l);return a=a==null?0:tn(ue(a),0),pe(function(c){var d=c[a],M=er(c,0,a);return d&&Zi(M,d),Un(i,this,M)})}function Fx(i,a,c){var d=!0,M=!0;if(typeof i!="function")throw new qn(l);return qe(c)&&(d="leading"in c?!!c.leading:d,M="trailing"in c?!!c.trailing:M),Ed(i,a,{leading:d,maxWait:a,trailing:M})}function Ox(i){return vd(i,1)}function Bx(i,a){return dc(jl(a),i)}function zx(){if(!arguments.length)return[];var i=arguments[0];return ae(i)?i:[i]}function kx(i){return Zn(i,v)}function Hx(i,a){return a=typeof a=="function"?a:e,Zn(i,v,a)}function Vx(i){return Zn(i,m|v)}function Gx(i,a){return a=typeof a=="function"?a:e,Zn(i,m|v,a)}function Wx(i,a){return a==null||hf(i,a,an(a))}function oi(i,a){return i===a||i!==i&&a!==a}var Xx=ro(zl),qx=ro(function(i,a){return i>=a}),wr=gf(function(){return arguments}())?gf:function(i){return Ye(i)&&Ie.call(i,"callee")&&!nf.call(i,"callee")},ae=j.isArray,Yx=Oh?Nn(Oh):ev;function Cn(i){return i!=null&&po(i.length)&&!Ii(i)}function $e(i){return Ye(i)&&Cn(i)}function Zx(i){return i===!0||i===!1||Ye(i)&&yn(i)==Pt}var nr=lg||bc,Kx=Bh?Nn(Bh):nv;function $x(i){return Ye(i)&&i.nodeType===1&&!Qs(i)}function jx(i){if(i==null)return!0;if(Cn(i)&&(ae(i)||typeof i=="string"||typeof i.splice=="function"||nr(i)||as(i)||wr(i)))return!i.length;var a=_n(i);if(a==_e||a==ve)return!i.size;if(js(i))return!Vl(i).length;for(var c in i)if(Ie.call(i,c))return!1;return!0}function Jx(i,a){return Zs(i,a)}function Qx(i,a,c){c=typeof c=="function"?c:e;var d=c?c(i,a):e;return d===e?Zs(i,a,e,c):!!d}function pc(i){if(!Ye(i))return!1;var a=yn(i);return a==ce||a==Gt||typeof i.message=="string"&&typeof i.name=="string"&&!Qs(i)}function tM(i){return typeof i=="number"&&sf(i)}function Ii(i){if(!qe(i))return!1;var a=yn(i);return a==Xe||a==I||a==pt||a==Mt}function Td(i){return typeof i=="number"&&i==ue(i)}function po(i){return typeof i=="number"&&i>-1&&i%1==0&&i<=Q}function qe(i){var a=typeof i;return i!=null&&(a=="object"||a=="function")}function Ye(i){return i!=null&&typeof i=="object"}var Ad=zh?Nn(zh):rv;function eM(i,a){return i===a||Hl(i,a,rc(a))}function nM(i,a,c){return c=typeof c=="function"?c:e,Hl(i,a,rc(a),c)}function iM(i){return wd(i)&&i!=+i}function rM(i){if(Hv(i))throw new re(o);return vf(i)}function sM(i){return i===null}function aM(i){return i==null}function wd(i){return typeof i=="number"||Ye(i)&&yn(i)==Jt}function Qs(i){if(!Ye(i)||yn(i)!=mt)return!1;var a=ka(i);if(a===null)return!0;var c=Ie.call(a,"constructor")&&a.constructor;return typeof c=="function"&&c instanceof c&&Fa.call(c)==ng}var mc=kh?Nn(kh):sv;function oM(i){return Td(i)&&i>=-Q&&i<=Q}var Rd=Hh?Nn(Hh):av;function mo(i){return typeof i=="string"||!ae(i)&&Ye(i)&&yn(i)==De}function On(i){return typeof i=="symbol"||Ye(i)&&yn(i)==P}var as=Vh?Nn(Vh):ov;function lM(i){return i===e}function cM(i){return Ye(i)&&_n(i)==V}function uM(i){return Ye(i)&&yn(i)==et}var hM=ro(Gl),fM=ro(function(i,a){return i<=a});function Cd(i){if(!i)return[];if(Cn(i))return mo(i)?si(i):Rn(i);if(ks&&i[ks])return W_(i[ks]());var a=_n(i),c=a==_e?Pl:a==ve?Ia:os;return c(i)}function Ui(i){if(!i)return i===0?i:0;if(i=jn(i),i===ft||i===-ft){var a=i<0?-1:1;return a*Et}return i===i?i:0}function ue(i){var a=Ui(i),c=a%1;return a===a?c?a-c:a:0}function Pd(i){return i?Er(ue(i),0,It):0}function jn(i){if(typeof i=="number")return i;if(On(i))return Rt;if(qe(i)){var a=typeof i.valueOf=="function"?i.valueOf():i;i=qe(a)?a+"":a}if(typeof i!="string")return i===0?i:+i;i=Zh(i);var c=_l.test(i);return c||vl.test(i)?w_(i.slice(2),c?2:8):ml.test(i)?Rt:+i}function Dd(i){return _i(i,Pn(i))}function dM(i){return i?Er(ue(i),-Q,Q):i===0?i:0}function Pe(i){return i==null?"":Fn(i)}var pM=is(function(i,a){if(js(a)||Cn(a)){_i(a,an(a),i);return}for(var c in a)Ie.call(a,c)&&Xs(i,c,a[c])}),Ld=is(function(i,a){_i(a,Pn(a),i)}),_o=is(function(i,a,c,d){_i(a,Pn(a),i,d)}),mM=is(function(i,a,c,d){_i(a,an(a),i,d)}),_M=Di(Fl);function gM(i,a){var c=ns(i);return a==null?c:uf(c,a)}var vM=pe(function(i,a){i=ze(i);var c=-1,d=a.length,M=d>2?a[2]:e;for(M&&Sn(a[0],a[1],M)&&(d=1);++c<d;)for(var A=a[c],D=Pn(A),F=-1,G=D.length;++F<G;){var st=D[F],at=i[st];(at===e||oi(at,Qr[st])&&!Ie.call(i,st))&&(i[st]=A[st])}return i}),xM=pe(function(i){return i.push(e,Kf),Un(Id,e,i)});function MM(i,a){return Wh(i,$t(a,3),mi)}function yM(i,a){return Wh(i,$t(a,3),Bl)}function SM(i,a){return i==null?i:Ol(i,$t(a,3),Pn)}function EM(i,a){return i==null?i:mf(i,$t(a,3),Pn)}function bM(i,a){return i&&mi(i,$t(a,3))}function TM(i,a){return i&&Bl(i,$t(a,3))}function AM(i){return i==null?[]:$a(i,an(i))}function wM(i){return i==null?[]:$a(i,Pn(i))}function _c(i,a,c){var d=i==null?e:br(i,a);return d===e?c:d}function RM(i,a){return i!=null&&Jf(i,a,jg)}function gc(i,a){return i!=null&&Jf(i,a,Jg)}var CM=Wf(function(i,a,c){a!=null&&typeof a.toString!="function"&&(a=Oa.call(a)),i[a]=c},xc(Dn)),PM=Wf(function(i,a,c){a!=null&&typeof a.toString!="function"&&(a=Oa.call(a)),Ie.call(i,a)?i[a].push(c):i[a]=[c]},$t),DM=pe(Ys);function an(i){return Cn(i)?lf(i):Vl(i)}function Pn(i){return Cn(i)?lf(i,!0):lv(i)}function LM(i,a){var c={};return a=$t(a,3),mi(i,function(d,M,A){Ci(c,a(d,M,A),d)}),c}function IM(i,a){var c={};return a=$t(a,3),mi(i,function(d,M,A){Ci(c,M,a(d,M,A))}),c}var UM=is(function(i,a,c){ja(i,a,c)}),Id=is(function(i,a,c,d){ja(i,a,c,d)}),NM=Di(function(i,a){var c={};if(i==null)return c;var d=!1;a=We(a,function(A){return A=tr(A,i),d||(d=A.length>1),A}),_i(i,nc(i),c),d&&(c=Zn(c,m|g|v,Cv));for(var M=a.length;M--;)Zl(c,a[M]);return c});function FM(i,a){return Ud(i,fo($t(a)))}var OM=Di(function(i,a){return i==null?{}:uv(i,a)});function Ud(i,a){if(i==null)return{};var c=We(nc(i),function(d){return[d]});return a=$t(a),Tf(i,c,function(d,M){return a(d,M[0])})}function BM(i,a,c){a=tr(a,i);var d=-1,M=a.length;for(M||(M=1,i=e);++d<M;){var A=i==null?e:i[gi(a[d])];A===e&&(d=M,A=c),i=Ii(A)?A.call(i):A}return i}function zM(i,a,c){return i==null?i:Ks(i,a,c)}function kM(i,a,c,d){return d=typeof d=="function"?d:e,i==null?i:Ks(i,a,c,d)}var Nd=Yf(an),Fd=Yf(Pn);function HM(i,a,c){var d=ae(i),M=d||nr(i)||as(i);if(a=$t(a,4),c==null){var A=i&&i.constructor;M?c=d?new A:[]:qe(i)?c=Ii(A)?ns(ka(i)):{}:c={}}return(M?Xn:mi)(i,function(D,F,G){return a(c,D,F,G)}),c}function VM(i,a){return i==null?!0:Zl(i,a)}function GM(i,a,c){return i==null?i:Pf(i,a,jl(c))}function WM(i,a,c,d){return d=typeof d=="function"?d:e,i==null?i:Pf(i,a,jl(c),d)}function os(i){return i==null?[]:Cl(i,an(i))}function XM(i){return i==null?[]:Cl(i,Pn(i))}function qM(i,a,c){return c===e&&(c=a,a=e),c!==e&&(c=jn(c),c=c===c?c:0),a!==e&&(a=jn(a),a=a===a?a:0),Er(jn(i),a,c)}function YM(i,a,c){return a=Ui(a),c===e?(c=a,a=0):c=Ui(c),i=jn(i),Qg(i,a,c)}function ZM(i,a,c){if(c&&typeof c!="boolean"&&Sn(i,a,c)&&(a=c=e),c===e&&(typeof a=="boolean"?(c=a,a=e):typeof i=="boolean"&&(c=i,i=e)),i===e&&a===e?(i=0,a=1):(i=Ui(i),a===e?(a=i,i=0):a=Ui(a)),i>a){var d=i;i=a,a=d}if(c||i%1||a%1){var M=af();return mn(i+M*(a-i+A_("1e-"+((M+"").length-1))),a)}return Xl(i,a)}var KM=rs(function(i,a,c){return a=a.toLowerCase(),i+(c?Od(a):a)});function Od(i){return vc(Pe(i).toLowerCase())}function Bd(i){return i=Pe(i),i&&i.replace(W,z_).replace(__,"")}function $M(i,a,c){i=Pe(i),a=Fn(a);var d=i.length;c=c===e?d:Er(ue(c),0,d);var M=c;return c-=a.length,c>=0&&i.slice(c,M)==a}function jM(i){return i=Pe(i),i&&ct.test(i)?i.replace(Nt,k_):i}function JM(i){return i=Pe(i),i&&Ai.test(i)?i.replace(qr,"\\$&"):i}var QM=rs(function(i,a,c){return i+(c?"-":"")+a.toLowerCase()}),ty=rs(function(i,a,c){return i+(c?" ":"")+a.toLowerCase()}),ey=Hf("toLowerCase");function ny(i,a,c){i=Pe(i),a=ue(a);var d=a?Jr(i):0;if(!a||d>=a)return i;var M=(a-d)/2;return io(Wa(M),c)+i+io(Ga(M),c)}function iy(i,a,c){i=Pe(i),a=ue(a);var d=a?Jr(i):0;return a&&d<a?i+io(a-d,c):i}function ry(i,a,c){i=Pe(i),a=ue(a);var d=a?Jr(i):0;return a&&d<a?io(a-d,c)+i:i}function sy(i,a,c){return c||a==null?a=0:a&&(a=+a),fg(Pe(i).replace(_r,""),a||0)}function ay(i,a,c){return(c?Sn(i,a,c):a===e)?a=1:a=ue(a),ql(Pe(i),a)}function oy(){var i=arguments,a=Pe(i[0]);return i.length<3?a:a.replace(i[1],i[2])}var ly=rs(function(i,a,c){return i+(c?"_":"")+a.toLowerCase()});function cy(i,a,c){return c&&typeof c!="number"&&Sn(i,a,c)&&(a=c=e),c=c===e?It:c>>>0,c?(i=Pe(i),i&&(typeof a=="string"||a!=null&&!mc(a))&&(a=Fn(a),!a&&jr(i))?er(si(i),0,c):i.split(a,c)):[]}var uy=rs(function(i,a,c){return i+(c?" ":"")+vc(a)});function hy(i,a,c){return i=Pe(i),c=c==null?0:Er(ue(c),0,i.length),a=Fn(a),i.slice(c,c+a.length)==a}function fy(i,a,c){var d=E.templateSettings;c&&Sn(i,a,c)&&(a=e),i=Pe(i),a=_o({},a,d,Zf);var M=_o({},a.imports,d.imports,Zf),A=an(M),D=Cl(M,A),F,G,st=0,at=a.interpolate||K,dt="__p += '",At=Dl((a.escape||K).source+"|"+at.source+"|"+(at===Le?pl:K).source+"|"+(a.evaluate||K).source+"|$","g"),Vt="//# sourceURL="+(Ie.call(a,"sourceURL")?(a.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++y_+"]")+`
`;i.replace(At,function(ee,xe,ye,Bn,En,zn){return ye||(ye=Bn),dt+=i.slice(st,zn).replace(J,H_),xe&&(F=!0,dt+=`' +
__e(`+xe+`) +
'`),En&&(G=!0,dt+=`';
`+En+`;
__p += '`),ye&&(dt+=`' +
((__t = (`+ye+`)) == null ? '' : __t) +
'`),st=zn+ee.length,ee}),dt+=`';
`;var te=Ie.call(a,"variable")&&a.variable;if(!te)dt=`with (obj) {
`+dt+`
}
`;else if(Ra.test(te))throw new re(u);dt=(G?dt.replace(se,""):dt).replace(k,"$1").replace(yt,"$1;"),dt="function("+(te||"obj")+`) {
`+(te?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(F?", __e = _.escape":"")+(G?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+dt+`return __p
}`;var he=kd(function(){return Ae(A,Vt+"return "+dt).apply(e,D)});if(he.source=dt,pc(he))throw he;return he}function dy(i){return Pe(i).toLowerCase()}function py(i){return Pe(i).toUpperCase()}function my(i,a,c){if(i=Pe(i),i&&(c||a===e))return Zh(i);if(!i||!(a=Fn(a)))return i;var d=si(i),M=si(a),A=Kh(d,M),D=$h(d,M)+1;return er(d,A,D).join("")}function _y(i,a,c){if(i=Pe(i),i&&(c||a===e))return i.slice(0,Jh(i)+1);if(!i||!(a=Fn(a)))return i;var d=si(i),M=$h(d,si(a))+1;return er(d,0,M).join("")}function gy(i,a,c){if(i=Pe(i),i&&(c||a===e))return i.replace(_r,"");if(!i||!(a=Fn(a)))return i;var d=si(i),M=Kh(d,si(a));return er(d,M).join("")}function vy(i,a){var c=w,d=z;if(qe(a)){var M="separator"in a?a.separator:M;c="length"in a?ue(a.length):c,d="omission"in a?Fn(a.omission):d}i=Pe(i);var A=i.length;if(jr(i)){var D=si(i);A=D.length}if(c>=A)return i;var F=c-Jr(d);if(F<1)return d;var G=D?er(D,0,F).join(""):i.slice(0,F);if(M===e)return G+d;if(D&&(F+=G.length-F),mc(M)){if(i.slice(F).search(M)){var st,at=G;for(M.global||(M=Dl(M.source,Pe(Pa.exec(M))+"g")),M.lastIndex=0;st=M.exec(at);)var dt=st.index;G=G.slice(0,dt===e?F:dt)}}else if(i.indexOf(Fn(M),F)!=F){var At=G.lastIndexOf(M);At>-1&&(G=G.slice(0,At))}return G+d}function xy(i){return i=Pe(i),i&&vt.test(i)?i.replace(St,Z_):i}var My=rs(function(i,a,c){return i+(c?" ":"")+a.toUpperCase()}),vc=Hf("toUpperCase");function zd(i,a,c){return i=Pe(i),a=c?e:a,a===e?G_(i)?j_(i):U_(i):i.match(a)||[]}var kd=pe(function(i,a){try{return Un(i,e,a)}catch(c){return pc(c)?c:new re(c)}}),yy=Di(function(i,a){return Xn(a,function(c){c=gi(c),Ci(i,c,fc(i[c],i))}),i});function Sy(i){var a=i==null?0:i.length,c=$t();return i=a?We(i,function(d){if(typeof d[1]!="function")throw new qn(l);return[c(d[0]),d[1]]}):[],pe(function(d){for(var M=-1;++M<a;){var A=i[M];if(Un(A[0],this,d))return Un(A[1],this,d)}})}function Ey(i){return Zg(Zn(i,m))}function xc(i){return function(){return i}}function by(i,a){return i==null||i!==i?a:i}var Ty=Gf(),Ay=Gf(!0);function Dn(i){return i}function Mc(i){return xf(typeof i=="function"?i:Zn(i,m))}function wy(i){return yf(Zn(i,m))}function Ry(i,a){return Sf(i,Zn(a,m))}var Cy=pe(function(i,a){return function(c){return Ys(c,i,a)}}),Py=pe(function(i,a){return function(c){return Ys(i,c,a)}});function yc(i,a,c){var d=an(a),M=$a(a,d);c==null&&!(qe(a)&&(M.length||!d.length))&&(c=a,a=i,i=this,M=$a(a,an(a)));var A=!(qe(c)&&"chain"in c)||!!c.chain,D=Ii(i);return Xn(M,function(F){var G=a[F];i[F]=G,D&&(i.prototype[F]=function(){var st=this.__chain__;if(A||st){var at=i(this.__wrapped__),dt=at.__actions__=Rn(this.__actions__);return dt.push({func:G,args:arguments,thisArg:i}),at.__chain__=st,at}return G.apply(i,Zi([this.value()],arguments))})}),i}function Dy(){return sn._===this&&(sn._=ig),this}function Sc(){}function Ly(i){return i=ue(i),pe(function(a){return Ef(a,i)})}var Iy=Ql(We),Uy=Ql(Gh),Ny=Ql(bl);function Hd(i){return ac(i)?Tl(gi(i)):hv(i)}function Fy(i){return function(a){return i==null?e:br(i,a)}}var Oy=Xf(),By=Xf(!0);function Ec(){return[]}function bc(){return!1}function zy(){return{}}function ky(){return""}function Hy(){return!0}function Vy(i,a){if(i=ue(i),i<1||i>Q)return[];var c=It,d=mn(i,It);a=$t(a),i-=It;for(var M=Rl(d,a);++c<i;)a(c);return M}function Gy(i){return ae(i)?We(i,gi):On(i)?[i]:Rn(od(Pe(i)))}function Wy(i){var a=++eg;return Pe(i)+a}var Xy=no(function(i,a){return i+a},0),qy=tc("ceil"),Yy=no(function(i,a){return i/a},1),Zy=tc("floor");function Ky(i){return i&&i.length?Ka(i,Dn,zl):e}function $y(i,a){return i&&i.length?Ka(i,$t(a,2),zl):e}function jy(i){return qh(i,Dn)}function Jy(i,a){return qh(i,$t(a,2))}function Qy(i){return i&&i.length?Ka(i,Dn,Gl):e}function tS(i,a){return i&&i.length?Ka(i,$t(a,2),Gl):e}var eS=no(function(i,a){return i*a},1),nS=tc("round"),iS=no(function(i,a){return i-a},0);function rS(i){return i&&i.length?wl(i,Dn):0}function sS(i,a){return i&&i.length?wl(i,$t(a,2)):0}return E.after=wx,E.ary=vd,E.assign=pM,E.assignIn=Ld,E.assignInWith=_o,E.assignWith=mM,E.at=_M,E.before=xd,E.bind=fc,E.bindAll=yy,E.bindKey=Md,E.castArray=zx,E.chain=md,E.chunk=Zv,E.compact=Kv,E.concat=$v,E.cond=Sy,E.conforms=Ey,E.constant=xc,E.countBy=rx,E.create=gM,E.curry=yd,E.curryRight=Sd,E.debounce=Ed,E.defaults=vM,E.defaultsDeep=xM,E.defer=Rx,E.delay=Cx,E.difference=jv,E.differenceBy=Jv,E.differenceWith=Qv,E.drop=t0,E.dropRight=e0,E.dropRightWhile=n0,E.dropWhile=i0,E.fill=r0,E.filter=ax,E.flatMap=cx,E.flatMapDeep=ux,E.flatMapDepth=hx,E.flatten=hd,E.flattenDeep=s0,E.flattenDepth=a0,E.flip=Px,E.flow=Ty,E.flowRight=Ay,E.fromPairs=o0,E.functions=AM,E.functionsIn=wM,E.groupBy=fx,E.initial=c0,E.intersection=u0,E.intersectionBy=h0,E.intersectionWith=f0,E.invert=CM,E.invertBy=PM,E.invokeMap=px,E.iteratee=Mc,E.keyBy=mx,E.keys=an,E.keysIn=Pn,E.map=co,E.mapKeys=LM,E.mapValues=IM,E.matches=wy,E.matchesProperty=Ry,E.memoize=ho,E.merge=UM,E.mergeWith=Id,E.method=Cy,E.methodOf=Py,E.mixin=yc,E.negate=fo,E.nthArg=Ly,E.omit=NM,E.omitBy=FM,E.once=Dx,E.orderBy=_x,E.over=Iy,E.overArgs=Lx,E.overEvery=Uy,E.overSome=Ny,E.partial=dc,E.partialRight=bd,E.partition=gx,E.pick=OM,E.pickBy=Ud,E.property=Hd,E.propertyOf=Fy,E.pull=_0,E.pullAll=dd,E.pullAllBy=g0,E.pullAllWith=v0,E.pullAt=x0,E.range=Oy,E.rangeRight=By,E.rearg=Ix,E.reject=Mx,E.remove=M0,E.rest=Ux,E.reverse=uc,E.sampleSize=Sx,E.set=zM,E.setWith=kM,E.shuffle=Ex,E.slice=y0,E.sortBy=Ax,E.sortedUniq=R0,E.sortedUniqBy=C0,E.split=cy,E.spread=Nx,E.tail=P0,E.take=D0,E.takeRight=L0,E.takeRightWhile=I0,E.takeWhile=U0,E.tap=K0,E.throttle=Fx,E.thru=lo,E.toArray=Cd,E.toPairs=Nd,E.toPairsIn=Fd,E.toPath=Gy,E.toPlainObject=Dd,E.transform=HM,E.unary=Ox,E.union=N0,E.unionBy=F0,E.unionWith=O0,E.uniq=B0,E.uniqBy=z0,E.uniqWith=k0,E.unset=VM,E.unzip=hc,E.unzipWith=pd,E.update=GM,E.updateWith=WM,E.values=os,E.valuesIn=XM,E.without=H0,E.words=zd,E.wrap=Bx,E.xor=V0,E.xorBy=G0,E.xorWith=W0,E.zip=X0,E.zipObject=q0,E.zipObjectDeep=Y0,E.zipWith=Z0,E.entries=Nd,E.entriesIn=Fd,E.extend=Ld,E.extendWith=_o,yc(E,E),E.add=Xy,E.attempt=kd,E.camelCase=KM,E.capitalize=Od,E.ceil=qy,E.clamp=qM,E.clone=kx,E.cloneDeep=Vx,E.cloneDeepWith=Gx,E.cloneWith=Hx,E.conformsTo=Wx,E.deburr=Bd,E.defaultTo=by,E.divide=Yy,E.endsWith=$M,E.eq=oi,E.escape=jM,E.escapeRegExp=JM,E.every=sx,E.find=ox,E.findIndex=cd,E.findKey=MM,E.findLast=lx,E.findLastIndex=ud,E.findLastKey=yM,E.floor=Zy,E.forEach=_d,E.forEachRight=gd,E.forIn=SM,E.forInRight=EM,E.forOwn=bM,E.forOwnRight=TM,E.get=_c,E.gt=Xx,E.gte=qx,E.has=RM,E.hasIn=gc,E.head=fd,E.identity=Dn,E.includes=dx,E.indexOf=l0,E.inRange=YM,E.invoke=DM,E.isArguments=wr,E.isArray=ae,E.isArrayBuffer=Yx,E.isArrayLike=Cn,E.isArrayLikeObject=$e,E.isBoolean=Zx,E.isBuffer=nr,E.isDate=Kx,E.isElement=$x,E.isEmpty=jx,E.isEqual=Jx,E.isEqualWith=Qx,E.isError=pc,E.isFinite=tM,E.isFunction=Ii,E.isInteger=Td,E.isLength=po,E.isMap=Ad,E.isMatch=eM,E.isMatchWith=nM,E.isNaN=iM,E.isNative=rM,E.isNil=aM,E.isNull=sM,E.isNumber=wd,E.isObject=qe,E.isObjectLike=Ye,E.isPlainObject=Qs,E.isRegExp=mc,E.isSafeInteger=oM,E.isSet=Rd,E.isString=mo,E.isSymbol=On,E.isTypedArray=as,E.isUndefined=lM,E.isWeakMap=cM,E.isWeakSet=uM,E.join=d0,E.kebabCase=QM,E.last=$n,E.lastIndexOf=p0,E.lowerCase=ty,E.lowerFirst=ey,E.lt=hM,E.lte=fM,E.max=Ky,E.maxBy=$y,E.mean=jy,E.meanBy=Jy,E.min=Qy,E.minBy=tS,E.stubArray=Ec,E.stubFalse=bc,E.stubObject=zy,E.stubString=ky,E.stubTrue=Hy,E.multiply=eS,E.nth=m0,E.noConflict=Dy,E.noop=Sc,E.now=uo,E.pad=ny,E.padEnd=iy,E.padStart=ry,E.parseInt=sy,E.random=ZM,E.reduce=vx,E.reduceRight=xx,E.repeat=ay,E.replace=oy,E.result=BM,E.round=nS,E.runInContext=H,E.sample=yx,E.size=bx,E.snakeCase=ly,E.some=Tx,E.sortedIndex=S0,E.sortedIndexBy=E0,E.sortedIndexOf=b0,E.sortedLastIndex=T0,E.sortedLastIndexBy=A0,E.sortedLastIndexOf=w0,E.startCase=uy,E.startsWith=hy,E.subtract=iS,E.sum=rS,E.sumBy=sS,E.template=fy,E.times=Vy,E.toFinite=Ui,E.toInteger=ue,E.toLength=Pd,E.toLower=dy,E.toNumber=jn,E.toSafeInteger=dM,E.toString=Pe,E.toUpper=py,E.trim=my,E.trimEnd=_y,E.trimStart=gy,E.truncate=vy,E.unescape=xy,E.uniqueId=Wy,E.upperCase=My,E.upperFirst=vc,E.each=_d,E.eachRight=gd,E.first=fd,yc(E,function(){var i={};return mi(E,function(a,c){Ie.call(E.prototype,c)||(i[c]=a)}),i}(),{chain:!1}),E.VERSION=r,Xn(["bind","bindKey","curry","curryRight","partial","partialRight"],function(i){E[i].placeholder=E}),Xn(["drop","take"],function(i,a){Me.prototype[i]=function(c){c=c===e?1:tn(ue(c),0);var d=this.__filtered__&&!a?new Me(this):this.clone();return d.__filtered__?d.__takeCount__=mn(c,d.__takeCount__):d.__views__.push({size:mn(c,It),type:i+(d.__dir__<0?"Right":"")}),d},Me.prototype[i+"Right"]=function(c){return this.reverse()[i](c).reverse()}}),Xn(["filter","map","takeWhile"],function(i,a){var c=a+1,d=c==ot||c==lt;Me.prototype[i]=function(M){var A=this.clone();return A.__iteratees__.push({iteratee:$t(M,3),type:c}),A.__filtered__=A.__filtered__||d,A}}),Xn(["head","last"],function(i,a){var c="take"+(a?"Right":"");Me.prototype[i]=function(){return this[c](1).value()[0]}}),Xn(["initial","tail"],function(i,a){var c="drop"+(a?"":"Right");Me.prototype[i]=function(){return this.__filtered__?new Me(this):this[c](1)}}),Me.prototype.compact=function(){return this.filter(Dn)},Me.prototype.find=function(i){return this.filter(i).head()},Me.prototype.findLast=function(i){return this.reverse().find(i)},Me.prototype.invokeMap=pe(function(i,a){return typeof i=="function"?new Me(this):this.map(function(c){return Ys(c,i,a)})}),Me.prototype.reject=function(i){return this.filter(fo($t(i)))},Me.prototype.slice=function(i,a){i=ue(i);var c=this;return c.__filtered__&&(i>0||a<0)?new Me(c):(i<0?c=c.takeRight(-i):i&&(c=c.drop(i)),a!==e&&(a=ue(a),c=a<0?c.dropRight(-a):c.take(a-i)),c)},Me.prototype.takeRightWhile=function(i){return this.reverse().takeWhile(i).reverse()},Me.prototype.toArray=function(){return this.take(It)},mi(Me.prototype,function(i,a){var c=/^(?:filter|find|map|reject)|While$/.test(a),d=/^(?:head|last)$/.test(a),M=E[d?"take"+(a=="last"?"Right":""):a],A=d||/^find/.test(a);M&&(E.prototype[a]=function(){var D=this.__wrapped__,F=d?[1]:arguments,G=D instanceof Me,st=F[0],at=G||ae(D),dt=function(xe){var ye=M.apply(E,Zi([xe],F));return d&&At?ye[0]:ye};at&&c&&typeof st=="function"&&st.length!=1&&(G=at=!1);var At=this.__chain__,Vt=!!this.__actions__.length,te=A&&!At,he=G&&!Vt;if(!A&&at){D=he?D:new Me(this);var ee=i.apply(D,F);return ee.__actions__.push({func:lo,args:[dt],thisArg:e}),new Yn(ee,At)}return te&&he?i.apply(this,F):(ee=this.thru(dt),te?d?ee.value()[0]:ee.value():ee)})}),Xn(["pop","push","shift","sort","splice","unshift"],function(i){var a=Ua[i],c=/^(?:push|sort|unshift)$/.test(i)?"tap":"thru",d=/^(?:pop|shift)$/.test(i);E.prototype[i]=function(){var M=arguments;if(d&&!this.__chain__){var A=this.value();return a.apply(ae(A)?A:[],M)}return this[c](function(D){return a.apply(ae(D)?D:[],M)})}}),mi(Me.prototype,function(i,a){var c=E[a];if(c){var d=c.name+"";Ie.call(es,d)||(es[d]=[]),es[d].push({name:a,func:c})}}),es[eo(e,_).name]=[{name:"wrapper",func:e}],Me.prototype.clone=xg,Me.prototype.reverse=Mg,Me.prototype.value=yg,E.prototype.at=$0,E.prototype.chain=j0,E.prototype.commit=J0,E.prototype.next=Q0,E.prototype.plant=ex,E.prototype.reverse=nx,E.prototype.toJSON=E.prototype.valueOf=E.prototype.value=ix,E.prototype.first=E.prototype.head,ks&&(E.prototype[ks]=tx),E},$i=J_();typeof define=="function"&&typeof define.amd=="object"&&define.amd?(sn._=$i,define(function(){return $i})):xr?((xr.exports=$i)._=$i,Ml._=$i):sn._=$i}).call(n)}),K1=ht((n,t)=>{function e(){this.__data__=[],this.size=0}t.exports=e}),zm=ht((n,t)=>{function e(r,s){return r===s||r!==r&&s!==s}t.exports=e}),ll=ht((n,t)=>{var e=zm();function r(s,o){for(var l=s.length;l--;)if(e(s[l][0],o))return l;return-1}t.exports=r}),$1=ht((n,t)=>{var e=ll(),r=Array.prototype,s=r.splice;function o(l){var u=this.__data__,f=e(u,l);if(f<0)return!1;var h=u.length-1;return f==h?u.pop():s.call(u,f,1),--this.size,!0}t.exports=o}),j1=ht((n,t)=>{var e=ll();function r(s){var o=this.__data__,l=e(o,s);return l<0?void 0:o[l][1]}t.exports=r}),J1=ht((n,t)=>{var e=ll();function r(s){return e(this.__data__,s)>-1}t.exports=r}),Q1=ht((n,t)=>{var e=ll();function r(s,o){var l=this.__data__,u=e(l,s);return u<0?(++this.size,l.push([s,o])):l[u][1]=o,this}t.exports=r}),cl=ht((n,t)=>{var e=K1(),r=$1(),s=j1(),o=J1(),l=Q1();function u(f){var h=-1,p=f==null?0:f.length;for(this.clear();++h<p;){var m=f[h];this.set(m[0],m[1])}}u.prototype.clear=e,u.prototype.delete=r,u.prototype.get=s,u.prototype.has=o,u.prototype.set=l,t.exports=u}),tR=ht((n,t)=>{var e=cl();function r(){this.__data__=new e,this.size=0}t.exports=r}),eR=ht((n,t)=>{function e(r){var s=this.__data__,o=s.delete(r);return this.size=s.size,o}t.exports=e}),nR=ht((n,t)=>{function e(r){return this.__data__.get(r)}t.exports=e}),iR=ht((n,t)=>{function e(r){return this.__data__.has(r)}t.exports=e}),km=ht((n,t)=>{var e=typeof global=="object"&&global&&global.Object===Object&&global;t.exports=e}),Ti=ht((n,t)=>{var e=km(),r=typeof self=="object"&&self&&self.Object===Object&&self,s=e||r||Function("return this")();t.exports=s}),dh=ht((n,t)=>{var e=Ti(),r=e.Symbol;t.exports=r}),rR=ht((n,t)=>{var e=dh(),r=Object.prototype,s=r.hasOwnProperty,o=r.toString,l=e?e.toStringTag:void 0;function u(f){var h=s.call(f,l),p=f[l];try{f[l]=void 0;var m=!0}catch{}var g=o.call(f);return m&&(h?f[l]=p:delete f[l]),g}t.exports=u}),sR=ht((n,t)=>{var e=Object.prototype,r=e.toString;function s(o){return r.call(o)}t.exports=s}),ul=ht((n,t)=>{var e=dh(),r=rR(),s=sR(),o="[object Null]",l="[object Undefined]",u=e?e.toStringTag:void 0;function f(h){return h==null?h===void 0?l:o:u&&u in Object(h)?r(h):s(h)}t.exports=f}),Sa=ht((n,t)=>{function e(r){var s=typeof r;return r!=null&&(s=="object"||s=="function")}t.exports=e}),Hm=ht((n,t)=>{var e=ul(),r=Sa(),s="[object AsyncFunction]",o="[object Function]",l="[object GeneratorFunction]",u="[object Proxy]";function f(h){if(!r(h))return!1;var p=e(h);return p==o||p==l||p==s||p==u}t.exports=f}),aR=ht((n,t)=>{var e=Ti(),r=e["__core-js_shared__"];t.exports=r}),oR=ht((n,t)=>{var e=aR(),r=function(){var o=/[^.]+$/.exec(e&&e.keys&&e.keys.IE_PROTO||"");return o?"Symbol(src)_1."+o:""}();function s(o){return!!r&&r in o}t.exports=s}),Vm=ht((n,t)=>{var e=Function.prototype,r=e.toString;function s(o){if(o!=null){try{return r.call(o)}catch{}try{return o+""}catch{}}return""}t.exports=s}),lR=ht((n,t)=>{var e=Hm(),r=oR(),s=Sa(),o=Vm(),l=/[\\^$.*+?()[\]{}|]/g,u=/^\[object .+?Constructor\]$/,f=Function.prototype,h=Object.prototype,p=f.toString,m=h.hasOwnProperty,g=RegExp("^"+p.call(m).replace(l,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function v(S){if(!s(S)||r(S))return!1;var T=e(S)?g:u;return T.test(o(S))}t.exports=v}),cR=ht((n,t)=>{function e(r,s){return r?.[s]}t.exports=e}),Xr=ht((n,t)=>{var e=lR(),r=cR();function s(o,l){var u=r(o,l);return e(u)?u:void 0}t.exports=s}),ph=ht((n,t)=>{var e=Xr(),r=Ti(),s=e(r,"Map");t.exports=s}),hl=ht((n,t)=>{var e=Xr(),r=e(Object,"create");t.exports=r}),uR=ht((n,t)=>{var e=hl();function r(){this.__data__=e?e(null):{},this.size=0}t.exports=r}),hR=ht((n,t)=>{function e(r){var s=this.has(r)&&delete this.__data__[r];return this.size-=s?1:0,s}t.exports=e}),fR=ht((n,t)=>{var e=hl(),r="__lodash_hash_undefined__",s=Object.prototype,o=s.hasOwnProperty;function l(u){var f=this.__data__;if(e){var h=f[u];return h===r?void 0:h}return o.call(f,u)?f[u]:void 0}t.exports=l}),dR=ht((n,t)=>{var e=hl(),r=Object.prototype,s=r.hasOwnProperty;function o(l){var u=this.__data__;return e?u[l]!==void 0:s.call(u,l)}t.exports=o}),pR=ht((n,t)=>{var e=hl(),r="__lodash_hash_undefined__";function s(o,l){var u=this.__data__;return this.size+=this.has(o)?0:1,u[o]=e&&l===void 0?r:l,this}t.exports=s}),mR=ht((n,t)=>{var e=uR(),r=hR(),s=fR(),o=dR(),l=pR();function u(f){var h=-1,p=f==null?0:f.length;for(this.clear();++h<p;){var m=f[h];this.set(m[0],m[1])}}u.prototype.clear=e,u.prototype.delete=r,u.prototype.get=s,u.prototype.has=o,u.prototype.set=l,t.exports=u}),_R=ht((n,t)=>{var e=mR(),r=cl(),s=ph();function o(){this.size=0,this.__data__={hash:new e,map:new(s||r),string:new e}}t.exports=o}),gR=ht((n,t)=>{function e(r){var s=typeof r;return s=="string"||s=="number"||s=="symbol"||s=="boolean"?r!=="__proto__":r===null}t.exports=e}),fl=ht((n,t)=>{var e=gR();function r(s,o){var l=s.__data__;return e(o)?l[typeof o=="string"?"string":"hash"]:l.map}t.exports=r}),vR=ht((n,t)=>{var e=fl();function r(s){var o=e(this,s).delete(s);return this.size-=o?1:0,o}t.exports=r}),xR=ht((n,t)=>{var e=fl();function r(s){return e(this,s).get(s)}t.exports=r}),MR=ht((n,t)=>{var e=fl();function r(s){return e(this,s).has(s)}t.exports=r}),yR=ht((n,t)=>{var e=fl();function r(s,o){var l=e(this,s),u=l.size;return l.set(s,o),this.size+=l.size==u?0:1,this}t.exports=r}),SR=ht((n,t)=>{var e=_R(),r=vR(),s=xR(),o=MR(),l=yR();function u(f){var h=-1,p=f==null?0:f.length;for(this.clear();++h<p;){var m=f[h];this.set(m[0],m[1])}}u.prototype.clear=e,u.prototype.delete=r,u.prototype.get=s,u.prototype.has=o,u.prototype.set=l,t.exports=u}),ER=ht((n,t)=>{var e=cl(),r=ph(),s=SR(),o=200;function l(u,f){var h=this.__data__;if(h instanceof e){var p=h.__data__;if(!r||p.length<o-1)return p.push([u,f]),this.size=++h.size,this;h=this.__data__=new s(p)}return h.set(u,f),this.size=h.size,this}t.exports=l}),bR=ht((n,t)=>{var e=cl(),r=tR(),s=eR(),o=nR(),l=iR(),u=ER();function f(h){var p=this.__data__=new e(h);this.size=p.size}f.prototype.clear=r,f.prototype.delete=s,f.prototype.get=o,f.prototype.has=l,f.prototype.set=u,t.exports=f}),TR=ht((n,t)=>{function e(r,s){for(var o=-1,l=r==null?0:r.length;++o<l&&s(r[o],o,r)!==!1;);return r}t.exports=e}),AR=ht((n,t)=>{var e=Xr(),r=function(){try{var s=e(Object,"defineProperty");return s({},"",{}),s}catch{}}();t.exports=r}),Gm=ht((n,t)=>{var e=AR();function r(s,o,l){o=="__proto__"&&e?e(s,o,{configurable:!0,enumerable:!0,value:l,writable:!0}):s[o]=l}t.exports=r}),Wm=ht((n,t)=>{var e=Gm(),r=zm(),s=Object.prototype,o=s.hasOwnProperty;function l(u,f,h){var p=u[f];(!(o.call(u,f)&&r(p,h))||h===void 0&&!(f in u))&&e(u,f,h)}t.exports=l}),dl=ht((n,t)=>{var e=Wm(),r=Gm();function s(o,l,u,f){var h=!u;u||(u={});for(var p=-1,m=l.length;++p<m;){var g=l[p],v=f?f(u[g],o[g],g,u,o):void 0;v===void 0&&(v=o[g]),h?r(u,g,v):e(u,g,v)}return u}t.exports=s}),wR=ht((n,t)=>{function e(r,s){for(var o=-1,l=Array(r);++o<r;)l[o]=s(o);return l}t.exports=e}),Ea=ht((n,t)=>{function e(r){return r!=null&&typeof r=="object"}t.exports=e}),RR=ht((n,t)=>{var e=ul(),r=Ea(),s="[object Arguments]";function o(l){return r(l)&&e(l)==s}t.exports=o}),CR=ht((n,t)=>{var e=RR(),r=Ea(),s=Object.prototype,o=s.hasOwnProperty,l=s.propertyIsEnumerable,u=e(function(){return arguments}())?e:function(f){return r(f)&&o.call(f,"callee")&&!l.call(f,"callee")};t.exports=u}),mh=ht((n,t)=>{var e=Array.isArray;t.exports=e}),PR=ht((n,t)=>{function e(){return!1}t.exports=e}),Xm=ht((n,t)=>{var e=Ti(),r=PR(),s=typeof n=="object"&&n&&!n.nodeType&&n,o=s&&typeof t=="object"&&t&&!t.nodeType&&t,l=o&&o.exports===s,u=l?e.Buffer:void 0,f=u?u.isBuffer:void 0,h=f||r;t.exports=h}),DR=ht((n,t)=>{var e=9007199254740991,r=/^(?:0|[1-9]\d*)$/;function s(o,l){var u=typeof o;return l=l??e,!!l&&(u=="number"||u!="symbol"&&r.test(o))&&o>-1&&o%1==0&&o<l}t.exports=s}),qm=ht((n,t)=>{var e=9007199254740991;function r(s){return typeof s=="number"&&s>-1&&s%1==0&&s<=e}t.exports=r}),LR=ht((n,t)=>{var e=ul(),r=qm(),s=Ea(),o="[object Arguments]",l="[object Array]",u="[object Boolean]",f="[object Date]",h="[object Error]",p="[object Function]",m="[object Map]",g="[object Number]",v="[object Object]",S="[object RegExp]",T="[object Set]",x="[object String]",_="[object WeakMap]",U="[object ArrayBuffer]",L="[object DataView]",R="[object Float32Array]",B="[object Float64Array]",O="[object Int8Array]",N="[object Int16Array]",Y="[object Int32Array]",C="[object Uint8Array]",w="[object Uint8ClampedArray]",z="[object Uint16Array]",$="[object Uint32Array]",Z={};Z[R]=Z[B]=Z[O]=Z[N]=Z[Y]=Z[C]=Z[w]=Z[z]=Z[$]=!0,Z[o]=Z[l]=Z[U]=Z[u]=Z[L]=Z[f]=Z[h]=Z[p]=Z[m]=Z[g]=Z[v]=Z[S]=Z[T]=Z[x]=Z[_]=!1;function ot(it){return s(it)&&r(it.length)&&!!Z[e(it)]}t.exports=ot}),_h=ht((n,t)=>{function e(r){return function(s){return r(s)}}t.exports=e}),gh=ht((n,t)=>{var e=km(),r=typeof n=="object"&&n&&!n.nodeType&&n,s=r&&typeof t=="object"&&t&&!t.nodeType&&t,o=s&&s.exports===r,l=o&&e.process,u=function(){try{var f=s&&s.require&&s.require("util").types;return f||l&&l.binding&&l.binding("util")}catch{}}();t.exports=u}),IR=ht((n,t)=>{var e=LR(),r=_h(),s=gh(),o=s&&s.isTypedArray,l=o?r(o):e;t.exports=l}),Ym=ht((n,t)=>{var e=wR(),r=CR(),s=mh(),o=Xm(),l=DR(),u=IR(),f=Object.prototype,h=f.hasOwnProperty;function p(m,g){var v=s(m),S=!v&&r(m),T=!v&&!S&&o(m),x=!v&&!S&&!T&&u(m),_=v||S||T||x,U=_?e(m.length,String):[],L=U.length;for(var R in m)(g||h.call(m,R))&&!(_&&(R=="length"||T&&(R=="offset"||R=="parent")||x&&(R=="buffer"||R=="byteLength"||R=="byteOffset")||l(R,L)))&&U.push(R);return U}t.exports=p}),vh=ht((n,t)=>{var e=Object.prototype;function r(s){var o=s&&s.constructor,l=typeof o=="function"&&o.prototype||e;return s===l}t.exports=r}),Zm=ht((n,t)=>{function e(r,s){return function(o){return r(s(o))}}t.exports=e}),UR=ht((n,t)=>{var e=Zm(),r=e(Object.keys,Object);t.exports=r}),NR=ht((n,t)=>{var e=vh(),r=UR(),s=Object.prototype,o=s.hasOwnProperty;function l(u){if(!e(u))return r(u);var f=[];for(var h in Object(u))o.call(u,h)&&h!="constructor"&&f.push(h);return f}t.exports=l}),Km=ht((n,t)=>{var e=Hm(),r=qm();function s(o){return o!=null&&r(o.length)&&!e(o)}t.exports=s}),xh=ht((n,t)=>{var e=Ym(),r=NR(),s=Km();function o(l){return s(l)?e(l):r(l)}t.exports=o}),FR=ht((n,t)=>{var e=dl(),r=xh();function s(o,l){return o&&e(l,r(l),o)}t.exports=s}),OR=ht((n,t)=>{function e(r){var s=[];if(r!=null)for(var o in Object(r))s.push(o);return s}t.exports=e}),BR=ht((n,t)=>{var e=Sa(),r=vh(),s=OR(),o=Object.prototype,l=o.hasOwnProperty;function u(f){if(!e(f))return s(f);var h=r(f),p=[];for(var m in f)m=="constructor"&&(h||!l.call(f,m))||p.push(m);return p}t.exports=u}),Mh=ht((n,t)=>{var e=Ym(),r=BR(),s=Km();function o(l){return s(l)?e(l,!0):r(l)}t.exports=o}),zR=ht((n,t)=>{var e=dl(),r=Mh();function s(o,l){return o&&e(l,r(l),o)}t.exports=s}),kR=ht((n,t)=>{var e=Ti(),r=typeof n=="object"&&n&&!n.nodeType&&n,s=r&&typeof t=="object"&&t&&!t.nodeType&&t,o=s&&s.exports===r,l=o?e.Buffer:void 0,u=l?l.allocUnsafe:void 0;function f(h,p){if(p)return h.slice();var m=h.length,g=u?u(m):new h.constructor(m);return h.copy(g),g}t.exports=f}),HR=ht((n,t)=>{function e(r,s){var o=-1,l=r.length;for(s||(s=Array(l));++o<l;)s[o]=r[o];return s}t.exports=e}),VR=ht((n,t)=>{function e(r,s){for(var o=-1,l=r==null?0:r.length,u=0,f=[];++o<l;){var h=r[o];s(h,o,r)&&(f[u++]=h)}return f}t.exports=e}),$m=ht((n,t)=>{function e(){return[]}t.exports=e}),yh=ht((n,t)=>{var e=VR(),r=$m(),s=Object.prototype,o=s.propertyIsEnumerable,l=Object.getOwnPropertySymbols,u=l?function(f){return f==null?[]:(f=Object(f),e(l(f),function(h){return o.call(f,h)}))}:r;t.exports=u}),GR=ht((n,t)=>{var e=dl(),r=yh();function s(o,l){return e(o,r(o),l)}t.exports=s}),jm=ht((n,t)=>{function e(r,s){for(var o=-1,l=s.length,u=r.length;++o<l;)r[u+o]=s[o];return r}t.exports=e}),Jm=ht((n,t)=>{var e=Zm(),r=e(Object.getPrototypeOf,Object);t.exports=r}),Qm=ht((n,t)=>{var e=jm(),r=Jm(),s=yh(),o=$m(),l=Object.getOwnPropertySymbols,u=l?function(f){for(var h=[];f;)e(h,s(f)),f=r(f);return h}:o;t.exports=u}),WR=ht((n,t)=>{var e=dl(),r=Qm();function s(o,l){return e(o,r(o),l)}t.exports=s}),t_=ht((n,t)=>{var e=jm(),r=mh();function s(o,l,u){var f=l(o);return r(o)?f:e(f,u(o))}t.exports=s}),XR=ht((n,t)=>{var e=t_(),r=yh(),s=xh();function o(l){return e(l,s,r)}t.exports=o}),qR=ht((n,t)=>{var e=t_(),r=Qm(),s=Mh();function o(l){return e(l,s,r)}t.exports=o}),YR=ht((n,t)=>{var e=Xr(),r=Ti(),s=e(r,"DataView");t.exports=s}),ZR=ht((n,t)=>{var e=Xr(),r=Ti(),s=e(r,"Promise");t.exports=s}),KR=ht((n,t)=>{var e=Xr(),r=Ti(),s=e(r,"Set");t.exports=s}),$R=ht((n,t)=>{var e=Xr(),r=Ti(),s=e(r,"WeakMap");t.exports=s}),Sh=ht((n,t)=>{var e=YR(),r=ph(),s=ZR(),o=KR(),l=$R(),u=ul(),f=Vm(),h="[object Map]",p="[object Object]",m="[object Promise]",g="[object Set]",v="[object WeakMap]",S="[object DataView]",T=f(e),x=f(r),_=f(s),U=f(o),L=f(l),R=u;(e&&R(new e(new ArrayBuffer(1)))!=S||r&&R(new r)!=h||s&&R(s.resolve())!=m||o&&R(new o)!=g||l&&R(new l)!=v)&&(R=function(B){var O=u(B),N=O==p?B.constructor:void 0,Y=N?f(N):"";if(Y)switch(Y){case T:return S;case x:return h;case _:return m;case U:return g;case L:return v}return O}),t.exports=R}),jR=ht((n,t)=>{var e=Object.prototype,r=e.hasOwnProperty;function s(o){var l=o.length,u=new o.constructor(l);return l&&typeof o[0]=="string"&&r.call(o,"index")&&(u.index=o.index,u.input=o.input),u}t.exports=s}),JR=ht((n,t)=>{var e=Ti(),r=e.Uint8Array;t.exports=r}),Eh=ht((n,t)=>{var e=JR();function r(s){var o=new s.constructor(s.byteLength);return new e(o).set(new e(s)),o}t.exports=r}),QR=ht((n,t)=>{var e=Eh();function r(s,o){var l=o?e(s.buffer):s.buffer;return new s.constructor(l,s.byteOffset,s.byteLength)}t.exports=r}),tC=ht((n,t)=>{var e=/\w*$/;function r(s){var o=new s.constructor(s.source,e.exec(s));return o.lastIndex=s.lastIndex,o}t.exports=r}),eC=ht((n,t)=>{var e=dh(),r=e?e.prototype:void 0,s=r?r.valueOf:void 0;function o(l){return s?Object(s.call(l)):{}}t.exports=o}),nC=ht((n,t)=>{var e=Eh();function r(s,o){var l=o?e(s.buffer):s.buffer;return new s.constructor(l,s.byteOffset,s.length)}t.exports=r}),iC=ht((n,t)=>{var e=Eh(),r=QR(),s=tC(),o=eC(),l=nC(),u="[object Boolean]",f="[object Date]",h="[object Map]",p="[object Number]",m="[object RegExp]",g="[object Set]",v="[object String]",S="[object Symbol]",T="[object ArrayBuffer]",x="[object DataView]",_="[object Float32Array]",U="[object Float64Array]",L="[object Int8Array]",R="[object Int16Array]",B="[object Int32Array]",O="[object Uint8Array]",N="[object Uint8ClampedArray]",Y="[object Uint16Array]",C="[object Uint32Array]";function w(z,$,Z){var ot=z.constructor;switch($){case T:return e(z);case u:case f:return new ot(+z);case x:return r(z,Z);case _:case U:case L:case R:case B:case O:case N:case Y:case C:return l(z,Z);case h:return new ot;case p:case v:return new ot(z);case m:return s(z);case g:return new ot;case S:return o(z)}}t.exports=w}),rC=ht((n,t)=>{var e=Sa(),r=Object.create,s=function(){function o(){}return function(l){if(!e(l))return{};if(r)return r(l);o.prototype=l;var u=new o;return o.prototype=void 0,u}}();t.exports=s}),sC=ht((n,t)=>{var e=rC(),r=Jm(),s=vh();function o(l){return typeof l.constructor=="function"&&!s(l)?e(r(l)):{}}t.exports=o}),aC=ht((n,t)=>{var e=Sh(),r=Ea(),s="[object Map]";function o(l){return r(l)&&e(l)==s}t.exports=o}),oC=ht((n,t)=>{var e=aC(),r=_h(),s=gh(),o=s&&s.isMap,l=o?r(o):e;t.exports=l}),lC=ht((n,t)=>{var e=Sh(),r=Ea(),s="[object Set]";function o(l){return r(l)&&e(l)==s}t.exports=o}),cC=ht((n,t)=>{var e=lC(),r=_h(),s=gh(),o=s&&s.isSet,l=o?r(o):e;t.exports=l}),uC=ht((n,t)=>{var e=bR(),r=TR(),s=Wm(),o=FR(),l=zR(),u=kR(),f=HR(),h=GR(),p=WR(),m=XR(),g=qR(),v=Sh(),S=jR(),T=iC(),x=sC(),_=mh(),U=Xm(),L=oC(),R=Sa(),B=cC(),O=xh(),N=Mh(),Y=1,C=2,w=4,z="[object Arguments]",$="[object Array]",Z="[object Boolean]",ot="[object Date]",it="[object Error]",lt="[object Function]",ft="[object GeneratorFunction]",Q="[object Map]",Et="[object Number]",Rt="[object Object]",It="[object RegExp]",le="[object Set]",we="[object String]",Ue="[object Symbol]",de="[object WeakMap]",rt="[object ArrayBuffer]",pt="[object DataView]",Pt="[object Float32Array]",qt="[object Float64Array]",Gt="[object Int8Array]",ce="[object Int16Array]",Xe="[object Int32Array]",I="[object Uint8Array]",_e="[object Uint8ClampedArray]",Jt="[object Uint16Array]",Kt="[object Uint32Array]",mt={};mt[z]=mt[$]=mt[rt]=mt[pt]=mt[Z]=mt[ot]=mt[Pt]=mt[qt]=mt[Gt]=mt[ce]=mt[Xe]=mt[Q]=mt[Et]=mt[Rt]=mt[It]=mt[le]=mt[we]=mt[Ue]=mt[I]=mt[_e]=mt[Jt]=mt[Kt]=!0,mt[it]=mt[lt]=mt[de]=!1;function Ee(Mt,Yt,ve,De,P,y){var V,et=Yt&Y,ut=Yt&C,tt=Yt&w;if(ve&&(V=P?ve(Mt,De,P,y):ve(Mt)),V!==void 0)return V;if(!R(Mt))return Mt;var Bt=_(Mt);if(Bt){if(V=S(Mt),!et)return f(Mt,V)}else{var gt=v(Mt),Ft=gt==lt||gt==ft;if(U(Mt))return u(Mt,et);if(gt==Rt||gt==z||Ft&&!P){if(V=ut||Ft?{}:x(Mt),!et)return ut?p(Mt,l(V,Mt)):h(Mt,o(V,Mt))}else{if(!mt[gt])return P?Mt:{};V=T(Mt,gt,et)}}y||(y=new e);var Ot=y.get(Mt);if(Ot)return Ot;y.set(Mt,V),B(Mt)?Mt.forEach(function(Ht){V.add(Ee(Ht,Yt,ve,Ht,Mt,y))}):L(Mt)&&Mt.forEach(function(Ht,Dt){V.set(Dt,Ee(Ht,Yt,ve,Dt,Mt,y))});var _t=tt?ut?g:m:ut?N:O,bt=Bt?void 0:_t(Mt);return r(bt||Mt,function(Ht,Dt){bt&&(Dt=Ht,Ht=Mt[Dt]),s(V,Dt,Ee(Ht,Yt,ve,Dt,Mt,y))}),V}t.exports=Ee}),e_=ht((n,t)=>{var e=uC(),r=1,s=4;function o(l){return e(l,r|s)}t.exports=o});function n_(n,t,e=1,r=0){let s=0,o=n.length/e;for(;s<o;){let l=s+o>>1;n[l*e+r]<t?s=l+1:o=l}return s*e}function hC(n,t){let e=new Array(n);for(let r=0;r<n;r++)e[r]=t(r);return e}var fC=Bs(ol()),{cos:dC,pow:pC,sin:mC,sqrt:_C,PI:i_}=Math;function gC(n,t){let e=Math.max(0,Math.floor(n)),r=(0,fC.clamp)(t,0,.99);if(e===0)return h=>h<=0?0:h>=1?1:h;let s=e+1,o=new Array(s);for(let h=0;h<s;h++)o[h]=Math.pow(r,h);let l=o.reduce((h,p)=>h+p,0);for(let h=0;h<s;h++)o[h]/=l;let u=new Array(s),f=0;for(let h=0;h<s;h++)f+=o[h],u[h]=f;return h=>{if(h<=0)return 0;if(h>=1)return 1;let p=0;for(;p<s&&h>u[p];)p++;let m=p===0?0:u[p-1],g=o[p],v=(h-m)/g;return p===0?v*v:1-Math.pow(r,2*p)*4*v*(1-v)}}function vC(n){return t=>1-n(1-t)}function xC(n){return t=>t<.5?.5*n(2*t):.5+.5*(1-n(2-2*t))}var MC=n=>n===0||n===1?n:pC(2,-10*n)*mC((n-.075)*(2*i_)/.3)+1,yC={linear:n=>n,quad:n=>n*n,cubic:n=>n*n*n,quart:n=>n*n*n*n,quint:n=>n*n*n*n*n,sine:n=>1-dC(n*i_*.5),circ:n=>1-_C(1-n*n),back:n=>2.7*n*n*n-1.7*n*n,elastic:MC,bounce:gC(3,.5)},Yp=Object.fromEntries(Object.entries(yC).flatMap(([n,t])=>[[n,t],[`${n}In`,t],[`${n}Out`,vC(t)],[`${n}InOut`,xC(t)]]));function bh(n){if(!(n in Yp))throw new Error(`Easing '${n}' was not found.`);return Yp[n]}var SC=Math.PI*.5;function r_(n,t,e=Number.EPSILON){return Math.abs(n-t)<=e}function EC(n,t){let e=n_(n,t,2),r=Math.max(0,e-2);e===n.length&&(e-=2);let s=n[r],o=n[e];if(r_(s,o))return n[r+1];{let l=n[r+1],u=n[e+1],f=(t-s)/(o-s);return(u-l)*f+l}}function Zp(n,t,e,r){if(n.length===0){r.fill(0,0,t);return}let s=t+1,o=n_(n,e,s),l=Math.max(0,o-s);o===n.length&&(o-=s);let u=n[l],f=n[o];if(r_(u,f))for(let h=0;h<t;h++)r[h]=n[l+h+1];else for(let h=0;h<t;h++){let p=n[l+h+1],m=n[o+h+1],g=(e-u)/(f-u);r[h]=(m-p)*g+p}}function Th(n){return n!=null}var bC=new TextDecoder;function TC(n,t){return typeof n=="string"?n:bC.decode(n,t)}var pr={min:0,max:0,ease:"linear"};function ca(n){let t=n?.min??pr.min,e=n?.max??n?.min??pr.max,r=n?.ease??pr.ease;return{min:t,max:e,ease:r}}function ua(n){return bh(n.ease)(Math.random())*(n.max-n.min)+n.min}function ha(n){let t={};return n.min!==pr.min&&(t.min=n.min),n.max!==n.min&&n.max!==pr.max&&(t.max=n.max),n.ease!==pr.ease&&(t.ease=n.ease),t}var Kp=Bs(e_()),hr={property:"",timeline:new Float32Array,useEmitterDuration:!1,relative:!1,low:{min:0,max:0,ease:"linear"},high:{min:1,max:1,ease:"linear"}};function eu(n){let t=ca(n.low??(0,Kp.default)(hr.low)),e=ca(n.high??n.low??(0,Kp.default)(hr.high)),r=Array.isArray(n.timeline)?new Float32Array(n.timeline):n.timeline instanceof Float32Array?n.timeline:new Float32Array;return{property:n.property??hr.property,timeline:r,useEmitterDuration:n.useEmitterDuration??hr.useEmitterDuration,relative:n.relative??hr.relative,low:t,high:e}}function nu(n){let t={};n.property!==hr.property&&(t.property=n.property),n.timeline.length>0&&(t.timeline=Array.from(n.timeline)),n.useEmitterDuration&&(t.useEmitterDuration=n.useEmitterDuration),n.relative&&(t.relative=n.relative);let e=ha(n.low);Object.keys(e).length&&(t.low=e);let r=ha(n.high);return Object.keys(r).length&&(t.high=r),t}var zr=Bs(e_()),{random:Rs,cos:$p,sin:jp,PI:AC,acos:wC,cbrt:RC}=Math,Qo={type:"point",x:0,y:0,z:0,w:0,h:0,d:0,ease:"linear"};function CC(n){return{...Qo,...n}}function PC(n){let t={};for(let e of Object.keys(Qo))n[e]!==Qo[e]&&(t[e]=n[e]);return t}function DC(n,t){let e=bh(n);t.x=e(Rs())-.5,t.y=e(Rs())-.5,t.z=e(Rs())-.5}var iu=new q,LC=new q,IC=2*AC;function UC(n,t){switch(n.type){case"point":t.set(n.x,n.y,n.z);break;case"box":DC(n.ease,iu),iu.multiply(LC.set(n.w,n.h,n.d)),t.set(n.x,n.y,n.z).add(iu);break;case"ellipsoid":{let e=Rs(),r=Rs(),s=IC*e,o=wC(2*r-1),l=RC(bh(n.ease)(Rs())),u=jp(s),f=$p(s),h=jp(o),p=$p(o),m=.5*n.w,g=.5*n.h,v=.5*n.d;t.set(n.x+l*m*h*f,n.y+l*g*h*u,n.z+l*v*p);break}}}var xn={name:"",enabled:!0,count:100,loops:!0,duration:{duration:{min:10,max:10,ease:"linear"},delayBefore:pr,delayAfter:pr},emissionRate:{...hr,property:"emissionRate",useEmitterDuration:!0,low:{min:10,max:10,ease:"linear"},high:{min:10,max:10,ease:"linear"}},particleLifeExpectancy:{...hr,property:"particleLifeExpectancy",useEmitterDuration:!0,low:{min:2,max:2,ease:"linear"},high:{min:2,max:2,ease:"linear"}},orientToForwardDirection:!1};function NC(n,t){let e=n.uuid??mm.generateUUID(),r=CC(n.spawn??(0,zr.default)(Qo)),s=FC(n.duration??(0,zr.default)(xn.duration)),o=eu(n.emissionRate??(0,zr.default)(xn.emissionRate)),l=eu(n.particleLifeExpectancy??(0,zr.default)(xn.particleLifeExpectancy)),u=(n.propertyTimelines??[]).filter(Th).map(h=>eu(h)),f=zC(n.material,t);return{uuid:e,name:n.name??xn.name,enabled:n.enabled??xn.enabled,loops:n.loops??xn.loops,duration:s,count:n.count??xn.count,emissionRate:o,particleLifeExpectancy:l,spawn:r,orientToForwardDirection:n.orientToForwardDirection??xn.orientToForwardDirection,propertyTimelines:u,material:f}}function FC(n){let t=n??{};return{duration:ca(t.duration??(0,zr.default)(xn.duration.duration)),delayBefore:ca(t.delayBefore??(0,zr.default)(xn.duration.delayBefore)),delayAfter:ca(t.delayAfter??(0,zr.default)(xn.duration.delayAfter))}}function OC(n,t){let e={uuid:n.uuid};n.name!==xn.name&&(e.name=n.name),n.enabled!==xn.enabled&&(e.enabled=n.enabled),n.loops!==xn.loops&&(e.loops=n.loops);let r=BC(n.duration);Object.keys(r).length&&(e.duration=r),n.count!==xn.count&&(e.count=n.count);let s=nu(n.emissionRate);Object.keys(s).length&&(e.emissionRate=s);let o=nu(n.particleLifeExpectancy);Object.keys(o).length&&(e.particleLifeExpectancy=o);let l=PC(n.spawn);if(Object.keys(l).length&&(e.spawn=l),n.orientToForwardDirection!==xn.orientToForwardDirection&&(e.orientToForwardDirection=n.orientToForwardDirection),n.propertyTimelines.length&&(e.propertyTimelines=n.propertyTimelines.map(u=>nu(u))),n.material!=null){let u=kC(n.material,t);u!=null&&(!Array.isArray(u)||u.length>0)&&(e.material=u)}return e}function BC(n){let t={},e=ha(n.duration);Object.keys(e).length&&(t.duration=e);let r=ha(n.delayBefore);Object.keys(r).length&&(t.delayBefore=r);let s=ha(n.delayAfter);return Object.keys(s).length&&(t.delayAfter=s),t}function zC(n,t){return n?Array.isArray(n)?n.map(e=>Jp(e,t)).filter(Th):Jp(n,t):null}function Jp(n,t){return typeof n=="string"?t[n]||(console.warn(`Missing material: ${n}`),null):n??null}function kC(n,t){if(!n)return null;if(Array.isArray(n)){let e=[];for(let r of n){let s=Qp(r,t);s!=null&&e.push(s)}return e}else return Qp(n,t)}function Qp(n,t){if(n==null)return null;if(typeof n=="string")return n;for(let[e,r]of Object.entries(t))if(r===n)return e;return console.warn("Missing material id for provided Material"),null}var HC={version:"1.0"};function VC(n,t,e,r,s){let o={...e,...t},l=(n.emitters??[]).filter(Th).map(u=>NC(u,o));return{version:n.version??HC.version,emitters:l,materials:t,textures:r,toJSON:function(){return GC(this,e,s)}}}function GC(n,t,e){let r={},s={...t,...n.materials};r.version=n.version,n.emitters.length&&(r.emitters=n.emitters.map(l=>OC(l,s)));let o=Object.entries(n.materials);if(o.length){let l={},u=WC(e);for(let[f,h]of o)l[f]=XC(h,u);Object.keys(l).length&&(r.materials=l)}return r}function WC(n){let t={};for(let[e,r]of Object.entries(n))t[r.uuid]=e;return t}function XC(n,t){let e=n.toJSON();return delete e.textures,delete e.images,$u(e,t)}function $u(n,t){if(Array.isArray(n))return n.map(e=>$u(e,t));if(n&&typeof n=="object"){let e={};for(let[r,s]of Object.entries(n))e[r]=$u(s,t);return e}return typeof n=="string"&&t[n]?t[n]:n}function qC(n,t,e=t*2,r=t*2){n.save();let s=n.createRadialGradient(t,t,0,t,t,t);s.addColorStop(0,"rgba(255,255,255,1.0)"),s.addColorStop(1,"rgba(255,255,255,0)"),n.fillStyle=s,n.fillRect(0,0,e,r),n.restore()}function YC(n=64){if(typeof document>"u")return new hn;let t=document.createElement("canvas"),e=t.getContext("2d");if(!e)return new hn;t.width=n,t.height=n;let r=n/2;qC(e,r);let s=new hn(t);return s.type=Mi,s.needsUpdate=!0,s}var ru=null;function ZC(){return ru===null&&(ru=YC()),ru}var KC=Bs(ol()),$C=class extends sl{constructor(n,t){super(n),this.materials={},this.materialLoader=t?.materialLoader??new hh(n),this.materialLoader.setTextures({radial:ZC()})}setMaterials(n){this.materials=n}setPath(n){return super.setPath(n),this.materialLoader.setPath(n),this}load(n,t,e,r){let s=new Lm(this.manager);s.setPath(this.path),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials),s.load(n,o=>{this.parseAsync(JSON.parse(TC(o))).then(t).catch(l=>r?.(l))},e,r)}async parseAsync(n){n=(0,KC.cloneDeep)(n);let t={};if(n.materials){let e=this.materialLoader;for(let[r,s]of Object.entries(n.materials))t[r]=typeof s=="string"?await e.loadAsync(s):e.parse(s)}return VC(n,t,this.materials,{},this.materialLoader.textures)}},jC=Bs(ol()),ju=class{constructor(n){this.timeline=n,this.low=0,this.high=0,this.diff=0,this.current=0,this.reset()}reset(){this.low=ua(this.timeline.low),this.high=ua(this.timeline.high),this.timeline.relative&&(this.high+=this.low),this.diff=this.high-this.low,this.current=this.low}setTime(n){this.current=EC(this.timeline.timeline,n)*this.diff+this.low}},su=new q,JC=class{constructor(n,t,e,r){this.r=n,this.g=t,this.b=e,this.a=r}set(n,t,e,r){this.r=n,this.g=t,this.b=e,this.a=r}},QC=class{constructor(n){this.model=n,this.active=!1,this.life=0,this._lifeExpectancy=0,this.lifeExpectancyInv=0,this.position=new q,this.velocity=new q,this.scale=new q(1,1,1),this.rotation=new q,this.rotationalVelocity=new q,this.forwardDirection=new q,this.forwardDirectionVelocity=new q,this.forwardVelocity=0,this.tint=new JC(1,1,1,1),this.origin=new q(.5,.5,.5),this.rotationFinal=new q,this.imageIndex=0,this.propertyStates=n.propertyTimelines.map(t=>tP(this,t))}get lifeExpectancy(){return this._lifeExpectancy}set lifeExpectancy(n){this._lifeExpectancy=n,this.lifeExpectancyInv=1/n}update(n,t){this.life+=n;let e=this.life*this.lifeExpectancyInv,r=(0,jC.clamp)(e,0,1);for(let s of this.propertyStates)s.apply(r,t);if(this.position.add(su.copy(this.velocity).multiplyScalar(n)),this.rotation.add(su.copy(this.rotationalVelocity).multiplyScalar(n)),this.forwardDirection.add(su.copy(this.forwardDirectionVelocity).multiplyScalar(n)),this.forwardVelocity!==0&&!(this.forwardDirection.y!==0||this.forwardDirection.x!==0)&&this.forwardDirection.z!==0){let s=this.forwardDirection.z;this.position.x+=Math.cos(s)*this.forwardVelocity*n,this.position.y+=Math.sin(s)*this.forwardVelocity*n}this.model.orientToForwardDirection?(this.rotationFinal.copy(this.rotation).add(this.forwardDirection),this.rotationFinal.z+=SC):this.rotationFinal.copy(this.rotation)}reset(){this.active=!1,this.life=0,this._lifeExpectancy=0,this.lifeExpectancyInv=0,UC(this.model.spawn,this.position),this.velocity.set(0,0,0),this.scale.set(1,1,1),this.rotation.set(0,0,0),this.rotationalVelocity.set(0,0,0),this.forwardDirection.set(0,0,0),this.forwardDirectionVelocity.set(0,0,0),this.forwardVelocity=0,this.tint.set(1,1,1,1),this.origin.set(.5,.5,.5),this.imageIndex=0;for(let n of this.propertyStates)n.reset()}};function tP(n,t){return t.property==="color"?new nP(n.tint,t):new eP(n,t)}var tm=new Set,eP=class{constructor(n,t){this.particleProps=n,this.timeline=t,this.value=new ju(t);let e=t.property;!(e in em)&&!tm.has(e)&&(tm.add(e),console.warn(`Could not find property updater with the name ${e}`)),this.updater=em[e]??(()=>{})}apply(n,t){if(this.timeline.timeline.length===0)return;let e=this.timeline.useEmitterDuration?t:n;this.value.setTime(e),this.updater(this.particleProps,this.value.current)}reset(){this.value.reset()}},nP=class{constructor(n,t){if(this.color=n,this.timeline=t,this.previous=new Float32Array(3),this.value=new Float32Array(3),t.timeline.length%4!==0)throw new Error(`invalid color timeline, expected stride to be 4, was length ${t.timeline.length}`)}apply(n,t){this.previous.set(this.value);let e=this.timeline.useEmitterDuration?t:n;Zp(this.timeline.timeline,3,e,this.value);let r=this.color;r.r=this.value[0],r.g=this.value[1],r.b=this.value[2]}reset(){Zp(this.timeline.timeline,3,0,this.value),this.previous.set(this.value)}},em={x:(n,t)=>n.position.x=t,y:(n,t)=>n.position.y=t,z:(n,t)=>n.position.z=t,velocityX:(n,t)=>n.velocity.x=t,velocityY:(n,t)=>n.velocity.y=t,velocityZ:(n,t)=>n.velocity.z=t,originX:(n,t)=>n.origin.x=t,originY:(n,t)=>n.origin.y=t,originZ:(n,t)=>n.origin.z=t,scale:(n,t)=>{n.scale.x=t,n.scale.y=t,n.scale.z=t},scaleX:(n,t)=>n.scale.x=t,scaleY:(n,t)=>n.scale.y=t,scaleZ:(n,t)=>n.scale.z=t,rotationX:(n,t)=>n.rotation.x=t,rotationY:(n,t)=>n.rotation.y=t,rotationZ:(n,t)=>n.rotation.z=t,rotationalVelocityX:(n,t)=>n.rotationalVelocity.x=t,rotationalVelocityY:(n,t)=>n.rotationalVelocity.y=t,rotationalVelocityZ:(n,t)=>n.rotationalVelocity.z=t,forwardDirectionX:(n,t)=>n.forwardDirection.x=t,forwardDirectionY:(n,t)=>n.forwardDirection.y=t,forwardDirectionZ:(n,t)=>n.forwardDirection.z=t,forwardDirectionVelocityZ:(n,t)=>n.forwardDirectionVelocity.z=t,forwardVelocity:(n,t)=>n.forwardVelocity=t,colorR:(n,t)=>n.tint.r=t,colorG:(n,t)=>n.tint.g=t,colorB:(n,t)=>n.tint.b=t,colorA:(n,t)=>n.tint.a=t},iP=Bs(ol()),rP=class{constructor(n){this.model=n,this._activeCount=0,this.delayBefore=0,this.delayAfter=0,this.time=0,this.duration=0,this.durationInv=0,this.endTime=0,this._isComplete=!1,this.loops=!1,this.accumulator=0,this.particles=hC(n.count,()=>new QC(n)),this.emissionRateValue=new ju(n.emissionRate),this.particleLifeExpectancyValue=new ju(n.particleLifeExpectancy),this.rewind()}get activeCount(){return this._activeCount}get totalTime(){return this.delayBefore+this.duration+this.delayAfter}get progress(){return this.totalTime<=0?1:(this.time+this.delayBefore)/this.totalTime}get isComplete(){return this._isComplete}update(n){if(this._isComplete||!this.model.enabled)return;if(this.time+=n,this.time>=this.endTime){if(this.loops){let r=this.time-this.endTime;this.rewind(),this.time+=r}else if(this._activeCount===0){this._isComplete=!0,this.accumulator=0;return}}let t=this.time*this.durationInv;if(this.emissionRateValue.setTime(t),this.particleLifeExpectancyValue.setTime(t),this.time<this.duration&&this.time>0){let r=this.emissionRateValue.current;this.accumulator+=r*n;let s=1/r;if(this.accumulator>1){let o=0;for(let l of this.particles)if(l.active||(l.reset(),l.life+=o,o-=s,l.active=!0,l.lifeExpectancy=this.particleLifeExpectancyValue.current,this._activeCount++,this.accumulator--),this._activeCount>=this.model.count&&(this.accumulator=0),this.accumulator<1)break}}let e=(0,iP.clamp)(t,0,1);for(let r of this.particles)r.active&&(r.update(n,e),r.life>r.lifeExpectancy&&(r.active=!1,this._activeCount--))}clearParticles(){for(let n of this.particles)n.active=!1;this._activeCount=0,this.accumulator=0}reset(){this.clearParticles(),this.rewind()}stop(n=!0){this.loops=!1,this.time=this.endTime,n||(this.clearParticles(),this._isComplete=!0)}rewind(){let n=this.model;this._isComplete=!1,this.loops=n.loops,this.delayBefore=ua(n.duration.delayBefore),this.delayAfter=ua(n.duration.delayAfter),this.time=-this.delayBefore,this.duration=ua(n.duration.duration),this.durationInv=1/this.duration,this.endTime=this.duration+this.delayAfter,this.emissionRateValue.reset(),this.particleLifeExpectancyValue.reset()}},sP=class extends VE{constructor(n){super(),this.isParticleEmitterObject=!0,this.state=new rP(n);let t=n.count;this.geometry.setAttribute("position",new Vn(new Float32Array(t*3),3)),this.geometry.setAttribute("color",new Vn(new Float32Array(t*4),4)),n.material&&(this.material=n.material)}updateGeometry(){if(!this.state.model.enabled)return;let n=this.geometry.attributes.position.array,t=this.geometry.attributes.color.array,e=0;for(let r of this.state.particles){if(!r.active)continue;let s=r.position,o=e*3;n[o]=s.x,n[o+1]=s.y,n[o+2]=s.z;let l=r.tint,u=e*4;t[u]=l.r,t[u+1]=l.g,t[u+2]=l.b,t[u+3]=l.a,e++}this.geometry.setDrawRange(0,this.state.activeCount),this.geometry.attributes.position.needsUpdate=!0,this.geometry.attributes.color.needsUpdate=!0}};function aP(n){return n.isParticleEmitterObject}var oP=class s_ extends sa{constructor(t){super(),this.model=t,this.emittersNeedUpdate=!0}forEachEmitter(t){this.emittersNeedUpdate&&this.refreshEmitters();for(let e of this.children)aP(e)&&t(e)}refreshEmitters(){this.emittersNeedUpdate=!1,this.clear();for(let t of this.model.emitters){let e=new sP(t);this.add(e)}}update(t){this.forEachEmitter(e=>{e.state.update(t),e.updateGeometry()})}rewind(){this.forEachEmitter(t=>t.state.rewind())}stop(t){this.forEachEmitter(e=>e.state.stop(t))}reset(){this.forEachEmitter(t=>t.state.reset())}clone(){return new s_(this.model)}};/*! Bundled license information:

lodash/lodash.js:
  (**
   * @license
   * Lodash <https://lodash.com/>
   * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
   * Released under MIT license <https://lodash.com/license>
   * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
   * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
   *)
*/const nm={type:"change"},Ah={type:"start"},a_={type:"end"},Vo=new nl,im=new cr,lP=Math.cos(70*mm.DEG2RAD),en=new q,Ln=2*Math.PI,Oe={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},au=1e-6;class cP extends sb{constructor(t,e=null){super(t,e),this.state=Oe.NONE,this.target=new q,this.cursor=new q,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ts.ROTATE,MIDDLE:Ts.DOLLY,RIGHT:Ts.PAN},this.touches={ONE:Es.ROTATE,TWO:Es.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new q,this._lastQuaternion=new Hr,this._lastTargetPosition=new q,this._quat=new Hr().setFromUnitVectors(t.up,new q(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new yp,this._sphericalDelta=new yp,this._scale=1,this._panOffset=new q,this._rotateStart=new ne,this._rotateEnd=new ne,this._rotateDelta=new ne,this._panStart=new ne,this._panEnd=new ne,this._panDelta=new ne,this._dollyStart=new ne,this._dollyEnd=new ne,this._dollyDelta=new ne,this._dollyDirection=new q,this._mouse=new ne,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=hP.bind(this),this._onPointerDown=uP.bind(this),this._onPointerUp=fP.bind(this),this._onContextMenu=xP.bind(this),this._onMouseWheel=mP.bind(this),this._onKeyDown=_P.bind(this),this._onTouchStart=gP.bind(this),this._onTouchMove=vP.bind(this),this._onMouseDown=dP.bind(this),this._onMouseMove=pP.bind(this),this._interceptControlDown=MP.bind(this),this._interceptControlUp=yP.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(nm),this.update(),this.state=Oe.NONE}update(t=null){const e=this.object.position;en.copy(e).sub(this.target),en.applyQuaternion(this._quat),this._spherical.setFromVector3(en),this.autoRotate&&this.state===Oe.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let r=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(r)&&isFinite(s)&&(r<-Math.PI?r+=Ln:r>Math.PI&&(r-=Ln),s<-Math.PI?s+=Ln:s>Math.PI&&(s-=Ln),r<=s?this._spherical.theta=Math.max(r,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(r+s)/2?Math.max(r,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let o=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const l=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),o=l!=this._spherical.radius}if(en.setFromSpherical(this._spherical),en.applyQuaternion(this._quatInverse),e.copy(this.target).add(en),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let l=null;if(this.object.isPerspectiveCamera){const u=en.length();l=this._clampDistance(u*this._scale);const f=u-l;this.object.position.addScaledVector(this._dollyDirection,f),this.object.updateMatrixWorld(),o=!!f}else if(this.object.isOrthographicCamera){const u=new q(this._mouse.x,this._mouse.y,0);u.unproject(this.object);const f=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),o=f!==this.object.zoom;const h=new q(this._mouse.x,this._mouse.y,0);h.unproject(this.object),this.object.position.sub(h).add(u),this.object.updateMatrixWorld(),l=en.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;l!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(l).add(this.object.position):(Vo.origin.copy(this.object.position),Vo.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Vo.direction))<lP?this.object.lookAt(this.target):(im.setFromNormalAndCoplanarPoint(this.object.up,this.target),Vo.intersectPlane(im,this.target))))}else if(this.object.isOrthographicCamera){const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),l!==this.object.zoom&&(this.object.updateProjectionMatrix(),o=!0)}return this._scale=1,this._performCursorZoom=!1,o||this._lastPosition.distanceToSquared(this.object.position)>au||8*(1-this._lastQuaternion.dot(this.object.quaternion))>au||this._lastTargetPosition.distanceToSquared(this.target)>au?(this.dispatchEvent(nm),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Ln/60*this.autoRotateSpeed*t:Ln/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){en.setFromMatrixColumn(e,0),en.multiplyScalar(-t),this._panOffset.add(en)}_panUp(t,e){this.screenSpacePanning===!0?en.setFromMatrixColumn(e,1):(en.setFromMatrixColumn(e,0),en.crossVectors(this.object.up,en)),en.multiplyScalar(t),this._panOffset.add(en)}_pan(t,e){const r=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;en.copy(s).sub(this.target);let o=en.length();o*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*o/r.clientHeight,this.object.matrix),this._panUp(2*e*o/r.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/r.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/r.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const r=this.domElement.getBoundingClientRect(),s=t-r.left,o=e-r.top,l=r.width,u=r.height;this._mouse.x=s/l*2-1,this._mouse.y=-(o/u)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Ln*this._rotateDelta.x/e.clientHeight),this._rotateUp(Ln*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Ln*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Ln*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Ln*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Ln*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),r=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(r,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),r=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(r,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),r=t.pageX-e.x,s=t.pageY-e.y,o=Math.sqrt(r*r+s*s);this._dollyStart.set(0,o)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const r=this._getSecondPointerPosition(t),s=.5*(t.pageX+r.x),o=.5*(t.pageY+r.y);this._rotateEnd.set(s,o)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Ln*this._rotateDelta.x/e.clientHeight),this._rotateUp(Ln*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),r=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(r,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),r=t.pageX-e.x,s=t.pageY-e.y,o=Math.sqrt(r*r+s*s);this._dollyEnd.set(0,o),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const l=(t.pageX+e.x)*.5,u=(t.pageY+e.y)*.5;this._updateZoomParameters(l,u)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new ne,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,r={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:r.deltaY*=16;break;case 2:r.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(r.deltaY*=10),r}}function uP(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function hP(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function fP(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(a_),this.state=Oe.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function dP(n){let t;switch(n.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Ts.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=Oe.DOLLY;break;case Ts.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Oe.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Oe.ROTATE}break;case Ts.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Oe.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Oe.PAN}break;default:this.state=Oe.NONE}this.state!==Oe.NONE&&this.dispatchEvent(Ah)}function pP(n){switch(this.state){case Oe.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case Oe.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case Oe.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function mP(n){this.enabled===!1||this.enableZoom===!1||this.state!==Oe.NONE||(n.preventDefault(),this.dispatchEvent(Ah),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(a_))}function _P(n){this.enabled!==!1&&this._handleKeyDown(n)}function gP(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case Es.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=Oe.TOUCH_ROTATE;break;case Es.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=Oe.TOUCH_PAN;break;default:this.state=Oe.NONE}break;case 2:switch(this.touches.TWO){case Es.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=Oe.TOUCH_DOLLY_PAN;break;case Es.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=Oe.TOUCH_DOLLY_ROTATE;break;default:this.state=Oe.NONE}break;default:this.state=Oe.NONE}this.state!==Oe.NONE&&this.dispatchEvent(Ah)}function vP(n){switch(this._trackPointer(n),this.state){case Oe.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case Oe.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case Oe.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case Oe.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=Oe.NONE}}function xP(n){this.enabled!==!1&&n.preventDefault()}function MP(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function yP(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}console.log("Hello!");const Us=new ti(45,window.innerWidth/window.innerHeight,.1,1e3);Us.position.set(0,10,20);Us.lookAt(new q(0,2,0));const ba=new NE;ba.background=new jt(1118481);ba.fog=new uh(1118481,20,100);const o_=new ib,wh=new rb(200,40,0,16777215);wh.material.opacity=.2;wh.material.transparent=!0;ba.add(wh);const Ju=document.querySelector("#mainCanvas"),Ns=new V1({canvas:Ju,antialias:!0});Ns.setClearColor(1644825);const SP=new cP(Us,Ns.domElement);window.addEventListener("resize",l_);l_();function l_(){const n=Ju.clientWidth,t=Ju.clientHeight;Ns.setPixelRatio(window.devicePixelRatio),Ns.setSize(n,t,!1),Us.aspect=n/t,Us.updateProjectionMatrix()}let Qu=null;const EP=new $C;EP.loadAsync("./fire.json").then(n=>{Qu=new oP(n),ba.add(Qu)}).catch(console.error);function bP(){const n=o_.getDelta();SP.update(),Qu?.update(n),Ns.render(ba,Us)}o_.start();Ns.setAnimationLoop(bP);
//# sourceMappingURL=index-Bsm2Yj8F.js.map
