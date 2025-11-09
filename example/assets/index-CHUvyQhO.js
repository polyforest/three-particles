(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function e(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(s){if(s.ep)return;s.ep=!0;const o=e(s);fetch(s.href,o)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Rh="180",ks={ROTATE:0,DOLLY:1,PAN:2},Bs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},XS=0,bp=1,qS=2,Gm=1,YS=2,qi=3,xr=0,On=1,Yi=2,_r=0,Hs=1,Tp=2,Ap=3,wp=4,ZS=5,Hr=100,KS=101,$S=102,jS=103,JS=104,QS=200,tE=201,eE=202,nE=203,Iu=204,Uu=205,iE=206,rE=207,sE=208,aE=209,oE=210,lE=211,cE=212,uE=213,hE=214,Nu=0,Ou=1,Fu=2,Ws=3,Bu=4,zu=5,ku=6,Hu=7,Tl=0,fE=1,dE=2,gr=0,pE=1,mE=2,_E=3,gE=4,vE=5,xE=6,yE=7,Wm=300,Xs=301,qs=302,Vu=303,Gu=304,Al=306,Wu=1e3,Gr=1001,Xu=1002,qn=1003,ME=1004,Fo=1005,Ti=1006,Kc=1007,Wr=1008,wi=1009,Xm=1010,qm=1011,La=1012,Ch=1013,qr=1014,xi=1015,za=1016,Ph=1017,Dh=1018,Ia=1020,Ym=35902,Zm=35899,Km=1021,$m=1022,yi=1023,Ua=1026,Na=1027,Lh=1028,Ih=1029,jm=1030,Uh=1031,Nh=1033,ml=33776,_l=33777,gl=33778,vl=33779,qu=35840,Yu=35841,Zu=35842,Ku=35843,$u=36196,ju=37492,Ju=37496,Qu=37808,th=37809,eh=37810,nh=37811,ih=37812,rh=37813,sh=37814,ah=37815,oh=37816,lh=37817,ch=37818,uh=37819,hh=37820,fh=37821,dh=36492,ph=36494,mh=36495,_h=36283,gh=36284,vh=36285,xh=36286,SE=3200,EE=3201,$r=0,bE=1,pr="",ri="srgb",Ys="srgb-linear",yl="linear",Fe="srgb",vs=7680,Rp=519,TE=512,AE=513,wE=514,Jm=515,RE=516,CE=517,PE=518,DE=519,yh=35044,Cp="300 es",Ai=2e3,Ml=2001;class jr{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){const i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){const i=this._listeners;if(i===void 0)return;const s=i[t];if(s!==void 0){const o=s.indexOf(e);o!==-1&&s.splice(o,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const i=e[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let o=0,l=s.length;o<l;o++)s[o].call(this,t);t.target=null}}}const xn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Pp=1234567;const Aa=Math.PI/180,Oa=180/Math.PI;function Zi(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(xn[n&255]+xn[n>>8&255]+xn[n>>16&255]+xn[n>>24&255]+"-"+xn[t&255]+xn[t>>8&255]+"-"+xn[t>>16&15|64]+xn[t>>24&255]+"-"+xn[e&63|128]+xn[e>>8&255]+"-"+xn[e>>16&255]+xn[e>>24&255]+xn[i&255]+xn[i>>8&255]+xn[i>>16&255]+xn[i>>24&255]).toLowerCase()}function me(n,t,e){return Math.max(t,Math.min(e,n))}function Oh(n,t){return(n%t+t)%t}function LE(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function IE(n,t,e){return n!==t?(e-n)/(t-n):0}function wa(n,t,e){return(1-e)*n+e*t}function UE(n,t,e,i){return wa(n,t,1-Math.exp(-e*i))}function NE(n,t=1){return t-Math.abs(Oh(n,t*2)-t)}function OE(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function FE(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function BE(n,t){return n+Math.floor(Math.random()*(t-n+1))}function zE(n,t){return n+Math.random()*(t-n)}function kE(n){return n*(.5-Math.random())}function HE(n){n!==void 0&&(Pp=n);let t=Pp+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function VE(n){return n*Aa}function GE(n){return n*Oa}function WE(n){return(n&n-1)===0&&n!==0}function XE(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function qE(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function YE(n,t,e,i,s){const o=Math.cos,l=Math.sin,u=o(e/2),f=l(e/2),h=o((t+i)/2),p=l((t+i)/2),m=o((t-i)/2),g=l((t-i)/2),v=o((i-t)/2),M=l((i-t)/2);switch(s){case"XYX":n.set(u*p,f*m,f*g,u*h);break;case"YZY":n.set(f*g,u*p,f*m,u*h);break;case"ZXZ":n.set(f*m,f*g,u*p,u*h);break;case"XZX":n.set(u*p,f*M,f*v,u*h);break;case"YXY":n.set(f*v,u*p,f*M,u*h);break;case"ZYZ":n.set(f*M,f*v,u*p,u*h);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function vi(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Ue(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Qm={DEG2RAD:Aa,RAD2DEG:Oa,generateUUID:Zi,clamp:me,euclideanModulo:Oh,mapLinear:LE,inverseLerp:IE,lerp:wa,damp:UE,pingpong:NE,smoothstep:OE,smootherstep:FE,randInt:BE,randFloat:zE,randFloatSpread:kE,seededRandom:HE,degToRad:VE,radToDeg:GE,isPowerOfTwo:WE,ceilPowerOfTwo:XE,floorPowerOfTwo:qE,setQuaternionFromProperEuler:YE,normalize:Ue,denormalize:vi};class Wt{constructor(t=0,e=0){Wt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=me(this.x,t.x,e.x),this.y=me(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=me(this.x,t,e),this.y=me(this.y,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(me(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(me(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),s=Math.sin(e),o=this.x-t.x,l=this.y-t.y;return this.x=o*i-l*s+t.x,this.y=o*s+l*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Yr{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,o,l,u){let f=i[s+0],h=i[s+1],p=i[s+2],m=i[s+3];const g=o[l+0],v=o[l+1],M=o[l+2],b=o[l+3];if(u===0){t[e+0]=f,t[e+1]=h,t[e+2]=p,t[e+3]=m;return}if(u===1){t[e+0]=g,t[e+1]=v,t[e+2]=M,t[e+3]=b;return}if(m!==b||f!==g||h!==v||p!==M){let x=1-u;const _=f*g+h*v+p*M+m*b,I=_>=0?1:-1,D=1-_*_;if(D>Number.EPSILON){const B=Math.sqrt(D),F=Math.atan2(B,_*I);x=Math.sin(x*F)/B,u=Math.sin(u*F)/B}const w=u*I;if(f=f*x+g*w,h=h*x+v*w,p=p*x+M*w,m=m*x+b*w,x===1-u){const B=1/Math.sqrt(f*f+h*h+p*p+m*m);f*=B,h*=B,p*=B,m*=B}}t[e]=f,t[e+1]=h,t[e+2]=p,t[e+3]=m}static multiplyQuaternionsFlat(t,e,i,s,o,l){const u=i[s],f=i[s+1],h=i[s+2],p=i[s+3],m=o[l],g=o[l+1],v=o[l+2],M=o[l+3];return t[e]=u*M+p*m+f*v-h*g,t[e+1]=f*M+p*g+h*m-u*v,t[e+2]=h*M+p*v+u*g-f*m,t[e+3]=p*M-u*m-f*g-h*v,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,s=t._y,o=t._z,l=t._order,u=Math.cos,f=Math.sin,h=u(i/2),p=u(s/2),m=u(o/2),g=f(i/2),v=f(s/2),M=f(o/2);switch(l){case"XYZ":this._x=g*p*m+h*v*M,this._y=h*v*m-g*p*M,this._z=h*p*M+g*v*m,this._w=h*p*m-g*v*M;break;case"YXZ":this._x=g*p*m+h*v*M,this._y=h*v*m-g*p*M,this._z=h*p*M-g*v*m,this._w=h*p*m+g*v*M;break;case"ZXY":this._x=g*p*m-h*v*M,this._y=h*v*m+g*p*M,this._z=h*p*M+g*v*m,this._w=h*p*m-g*v*M;break;case"ZYX":this._x=g*p*m-h*v*M,this._y=h*v*m+g*p*M,this._z=h*p*M-g*v*m,this._w=h*p*m+g*v*M;break;case"YZX":this._x=g*p*m+h*v*M,this._y=h*v*m+g*p*M,this._z=h*p*M-g*v*m,this._w=h*p*m-g*v*M;break;case"XZY":this._x=g*p*m-h*v*M,this._y=h*v*m-g*p*M,this._z=h*p*M+g*v*m,this._w=h*p*m+g*v*M;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+l)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],s=e[4],o=e[8],l=e[1],u=e[5],f=e[9],h=e[2],p=e[6],m=e[10],g=i+u+m;if(g>0){const v=.5/Math.sqrt(g+1);this._w=.25/v,this._x=(p-f)*v,this._y=(o-h)*v,this._z=(l-s)*v}else if(i>u&&i>m){const v=2*Math.sqrt(1+i-u-m);this._w=(p-f)/v,this._x=.25*v,this._y=(s+l)/v,this._z=(o+h)/v}else if(u>m){const v=2*Math.sqrt(1+u-i-m);this._w=(o-h)/v,this._x=(s+l)/v,this._y=.25*v,this._z=(f+p)/v}else{const v=2*Math.sqrt(1+m-i-u);this._w=(l-s)/v,this._x=(o+h)/v,this._y=(f+p)/v,this._z=.25*v}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(me(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,s=t._y,o=t._z,l=t._w,u=e._x,f=e._y,h=e._z,p=e._w;return this._x=i*p+l*u+s*h-o*f,this._y=s*p+l*f+o*u-i*h,this._z=o*p+l*h+i*f-s*u,this._w=l*p-i*u-s*f-o*h,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,s=this._y,o=this._z,l=this._w;let u=l*t._w+i*t._x+s*t._y+o*t._z;if(u<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,u=-u):this.copy(t),u>=1)return this._w=l,this._x=i,this._y=s,this._z=o,this;const f=1-u*u;if(f<=Number.EPSILON){const v=1-e;return this._w=v*l+e*this._w,this._x=v*i+e*this._x,this._y=v*s+e*this._y,this._z=v*o+e*this._z,this.normalize(),this}const h=Math.sqrt(f),p=Math.atan2(h,u),m=Math.sin((1-e)*p)/h,g=Math.sin(e*p)/h;return this._w=l*m+this._w*g,this._x=i*m+this._x*g,this._y=s*m+this._y*g,this._z=o*m+this._z*g,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),o=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),o*Math.sin(e),o*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class V{constructor(t=0,e=0,i=0){V.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Dp.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Dp.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,s=this.z,o=t.elements;return this.x=o[0]*e+o[3]*i+o[6]*s,this.y=o[1]*e+o[4]*i+o[7]*s,this.z=o[2]*e+o[5]*i+o[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,o=t.elements,l=1/(o[3]*e+o[7]*i+o[11]*s+o[15]);return this.x=(o[0]*e+o[4]*i+o[8]*s+o[12])*l,this.y=(o[1]*e+o[5]*i+o[9]*s+o[13])*l,this.z=(o[2]*e+o[6]*i+o[10]*s+o[14])*l,this}applyQuaternion(t){const e=this.x,i=this.y,s=this.z,o=t.x,l=t.y,u=t.z,f=t.w,h=2*(l*s-u*i),p=2*(u*e-o*s),m=2*(o*i-l*e);return this.x=e+f*h+l*m-u*p,this.y=i+f*p+u*h-o*m,this.z=s+f*m+o*p-l*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,s=this.z,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s,this.y=o[1]*e+o[5]*i+o[9]*s,this.z=o[2]*e+o[6]*i+o[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=me(this.x,t.x,e.x),this.y=me(this.y,t.y,e.y),this.z=me(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=me(this.x,t,e),this.y=me(this.y,t,e),this.z=me(this.z,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(me(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,s=t.y,o=t.z,l=e.x,u=e.y,f=e.z;return this.x=s*f-o*u,this.y=o*l-i*f,this.z=i*u-s*l,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return $c.copy(this).projectOnVector(t),this.sub($c)}reflect(t){return this.sub($c.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(me(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const $c=new V,Dp=new Yr;class oe{constructor(t,e,i,s,o,l,u,f,h){oe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,o,l,u,f,h)}set(t,e,i,s,o,l,u,f,h){const p=this.elements;return p[0]=t,p[1]=s,p[2]=u,p[3]=e,p[4]=o,p[5]=f,p[6]=i,p[7]=l,p[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,o=this.elements,l=i[0],u=i[3],f=i[6],h=i[1],p=i[4],m=i[7],g=i[2],v=i[5],M=i[8],b=s[0],x=s[3],_=s[6],I=s[1],D=s[4],w=s[7],B=s[2],F=s[5],N=s[8];return o[0]=l*b+u*I+f*B,o[3]=l*x+u*D+f*F,o[6]=l*_+u*w+f*N,o[1]=h*b+p*I+m*B,o[4]=h*x+p*D+m*F,o[7]=h*_+p*w+m*N,o[2]=g*b+v*I+M*B,o[5]=g*x+v*D+M*F,o[8]=g*_+v*w+M*N,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],s=t[2],o=t[3],l=t[4],u=t[5],f=t[6],h=t[7],p=t[8];return e*l*p-e*u*h-i*o*p+i*u*f+s*o*h-s*l*f}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],o=t[3],l=t[4],u=t[5],f=t[6],h=t[7],p=t[8],m=p*l-u*h,g=u*f-p*o,v=h*o-l*f,M=e*m+i*g+s*v;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/M;return t[0]=m*b,t[1]=(s*h-p*i)*b,t[2]=(u*i-s*l)*b,t[3]=g*b,t[4]=(p*e-s*f)*b,t[5]=(s*o-u*e)*b,t[6]=v*b,t[7]=(i*f-h*e)*b,t[8]=(l*e-i*o)*b,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,o,l,u){const f=Math.cos(o),h=Math.sin(o);return this.set(i*f,i*h,-i*(f*l+h*u)+l+t,-s*h,s*f,-s*(-h*l+f*u)+u+e,0,0,1),this}scale(t,e){return this.premultiply(jc.makeScale(t,e)),this}rotate(t){return this.premultiply(jc.makeRotation(-t)),this}translate(t,e){return this.premultiply(jc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const jc=new oe;function t_(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}const ZE={Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};function Bo(n,t){return new ZE[n](t)}function Fa(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function KE(){const n=Fa("canvas");return n.style.display="block",n}const Lp={};function Ba(n){n in Lp||(Lp[n]=!0,console.warn(n))}function $E(n,t,e){return new Promise(function(i,s){function o(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(o,e);break;default:i()}}setTimeout(o,e)})}const Ip=new oe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Up=new oe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function jE(){const n={enabled:!0,workingColorSpace:Ys,spaces:{},convert:function(s,o,l){return this.enabled===!1||o===l||!o||!l||(this.spaces[o].transfer===Fe&&(s.r=Ki(s.r),s.g=Ki(s.g),s.b=Ki(s.b)),this.spaces[o].primaries!==this.spaces[l].primaries&&(s.applyMatrix3(this.spaces[o].toXYZ),s.applyMatrix3(this.spaces[l].fromXYZ)),this.spaces[l].transfer===Fe&&(s.r=Vs(s.r),s.g=Vs(s.g),s.b=Vs(s.b))),s},workingToColorSpace:function(s,o){return this.convert(s,this.workingColorSpace,o)},colorSpaceToWorking:function(s,o){return this.convert(s,o,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===pr?yl:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,o=this.workingColorSpace){return s.fromArray(this.spaces[o].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,o,l){return s.copy(this.spaces[o].toXYZ).multiply(this.spaces[l].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,o){return Ba("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,o)},toWorkingColorSpace:function(s,o){return Ba("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,o)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Ys]:{primaries:t,whitePoint:i,transfer:yl,toXYZ:Ip,fromXYZ:Up,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:ri},outputColorSpaceConfig:{drawingBufferColorSpace:ri}},[ri]:{primaries:t,whitePoint:i,transfer:Fe,toXYZ:Ip,fromXYZ:Up,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:ri}}}),n}const Te=jE();function Ki(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Vs(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let xs;class JE{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{xs===void 0&&(xs=Fa("canvas")),xs.width=t.width,xs.height=t.height;const s=xs.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=xs}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Fa("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),o=s.data;for(let l=0;l<o.length;l++)o[l]=Ki(o[l]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Ki(e[i]/255)*255):e[i]=Ki(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let QE=0;class Fh{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:QE++}),this.uuid=Zi(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let o;if(Array.isArray(s)){o=[];for(let l=0,u=s.length;l<u;l++)s[l].isDataTexture?o.push(Jc(s[l].image)):o.push(Jc(s[l]))}else o=Jc(s);i.url=o}return e||(t.images[this.uuid]=i),i}}function Jc(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?JE.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let tb=0;const Qc=new V;class Qe extends jr{constructor(t=Qe.DEFAULT_IMAGE,e=Qe.DEFAULT_MAPPING,i=Gr,s=Gr,o=Ti,l=Wr,u=yi,f=wi,h=Qe.DEFAULT_ANISOTROPY,p=pr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:tb++}),this.uuid=Zi(),this.name="",this.source=new Fh(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=o,this.minFilter=l,this.anisotropy=h,this.format=u,this.internalFormat=null,this.type=f,this.offset=new Wt(0,0),this.repeat=new Wt(1,1),this.center=new Wt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new oe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=p,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Qc).x}get height(){return this.source.getSize(Qc).y}get depth(){return this.source.getSize(Qc).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Wm)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Wu:t.x=t.x-Math.floor(t.x);break;case Gr:t.x=t.x<0?0:1;break;case Xu:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Wu:t.y=t.y-Math.floor(t.y);break;case Gr:t.y=t.y<0?0:1;break;case Xu:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Qe.DEFAULT_IMAGE=null;Qe.DEFAULT_MAPPING=Wm;Qe.DEFAULT_ANISOTROPY=1;class Ke{constructor(t=0,e=0,i=0,s=1){Ke.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,o=this.w,l=t.elements;return this.x=l[0]*e+l[4]*i+l[8]*s+l[12]*o,this.y=l[1]*e+l[5]*i+l[9]*s+l[13]*o,this.z=l[2]*e+l[6]*i+l[10]*s+l[14]*o,this.w=l[3]*e+l[7]*i+l[11]*s+l[15]*o,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,o;const f=t.elements,h=f[0],p=f[4],m=f[8],g=f[1],v=f[5],M=f[9],b=f[2],x=f[6],_=f[10];if(Math.abs(p-g)<.01&&Math.abs(m-b)<.01&&Math.abs(M-x)<.01){if(Math.abs(p+g)<.1&&Math.abs(m+b)<.1&&Math.abs(M+x)<.1&&Math.abs(h+v+_-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const D=(h+1)/2,w=(v+1)/2,B=(_+1)/2,F=(p+g)/4,N=(m+b)/4,Y=(M+x)/4;return D>w&&D>B?D<.01?(i=0,s=.707106781,o=.707106781):(i=Math.sqrt(D),s=F/i,o=N/i):w>B?w<.01?(i=.707106781,s=0,o=.707106781):(s=Math.sqrt(w),i=F/s,o=Y/s):B<.01?(i=.707106781,s=.707106781,o=0):(o=Math.sqrt(B),i=N/o,s=Y/o),this.set(i,s,o,e),this}let I=Math.sqrt((x-M)*(x-M)+(m-b)*(m-b)+(g-p)*(g-p));return Math.abs(I)<.001&&(I=1),this.x=(x-M)/I,this.y=(m-b)/I,this.z=(g-p)/I,this.w=Math.acos((h+v+_-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=me(this.x,t.x,e.x),this.y=me(this.y,t.y,e.y),this.z=me(this.z,t.z,e.z),this.w=me(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=me(this.x,t,e),this.y=me(this.y,t,e),this.z=me(this.z,t,e),this.w=me(this.w,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(me(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class eb extends jr{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ti,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new Ke(0,0,t,e),this.scissorTest=!1,this.viewport=new Ke(0,0,t,e);const s={width:t,height:e,depth:i.depth},o=new Qe(s);this.textures=[];const l=i.count;for(let u=0;u<l;u++)this.textures[u]=o.clone(),this.textures[u].isRenderTargetTexture=!0,this.textures[u].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(t={}){const e={minFilter:Ti,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,o=this.textures.length;s<o;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new Fh(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Zr extends eb{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class e_ extends Qe{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=qn,this.minFilter=qn,this.wrapR=Gr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class nb extends Qe{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=qn,this.minFilter=qn,this.wrapR=Gr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Jr{constructor(t=new V(1/0,1/0,1/0),e=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(mi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(mi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=mi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const o=i.getAttribute("position");if(e===!0&&o!==void 0&&t.isInstancedMesh!==!0)for(let l=0,u=o.count;l<u;l++)t.isMesh===!0?t.getVertexPosition(l,mi):mi.fromBufferAttribute(o,l),mi.applyMatrix4(t.matrixWorld),this.expandByPoint(mi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),zo.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),zo.copy(i.boundingBox)),zo.applyMatrix4(t.matrixWorld),this.union(zo)}const s=t.children;for(let o=0,l=s.length;o<l;o++)this.expandByObject(s[o],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,mi),mi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(pa),ko.subVectors(this.max,pa),ys.subVectors(t.a,pa),Ms.subVectors(t.b,pa),Ss.subVectors(t.c,pa),or.subVectors(Ms,ys),lr.subVectors(Ss,Ms),Ur.subVectors(ys,Ss);let e=[0,-or.z,or.y,0,-lr.z,lr.y,0,-Ur.z,Ur.y,or.z,0,-or.x,lr.z,0,-lr.x,Ur.z,0,-Ur.x,-or.y,or.x,0,-lr.y,lr.x,0,-Ur.y,Ur.x,0];return!tu(e,ys,Ms,Ss,ko)||(e=[1,0,0,0,1,0,0,0,1],!tu(e,ys,Ms,Ss,ko))?!1:(Ho.crossVectors(or,lr),e=[Ho.x,Ho.y,Ho.z],tu(e,ys,Ms,Ss,ko))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,mi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(mi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ki[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ki[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ki[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ki[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ki[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ki[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ki[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ki[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ki),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const ki=[new V,new V,new V,new V,new V,new V,new V,new V],mi=new V,zo=new Jr,ys=new V,Ms=new V,Ss=new V,or=new V,lr=new V,Ur=new V,pa=new V,ko=new V,Ho=new V,Nr=new V;function tu(n,t,e,i,s){for(let o=0,l=n.length-3;o<=l;o+=3){Nr.fromArray(n,o);const u=s.x*Math.abs(Nr.x)+s.y*Math.abs(Nr.y)+s.z*Math.abs(Nr.z),f=t.dot(Nr),h=e.dot(Nr),p=i.dot(Nr);if(Math.max(-Math.max(f,h,p),Math.min(f,h,p))>u)return!1}return!0}const ib=new Jr,ma=new V,eu=new V;class yr{constructor(t=new V,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):ib.setFromPoints(t).getCenter(i);let s=0;for(let o=0,l=t.length;o<l;o++)s=Math.max(s,i.distanceToSquared(t[o]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ma.subVectors(t,this.center);const e=ma.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(ma,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(eu.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ma.copy(t.center).add(eu)),this.expandByPoint(ma.copy(t.center).sub(eu))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const Hi=new V,nu=new V,Vo=new V,cr=new V,iu=new V,Go=new V,ru=new V;class wl{constructor(t=new V,e=new V(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Hi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Hi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Hi.copy(this.origin).addScaledVector(this.direction,e),Hi.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){nu.copy(t).add(e).multiplyScalar(.5),Vo.copy(e).sub(t).normalize(),cr.copy(this.origin).sub(nu);const o=t.distanceTo(e)*.5,l=-this.direction.dot(Vo),u=cr.dot(this.direction),f=-cr.dot(Vo),h=cr.lengthSq(),p=Math.abs(1-l*l);let m,g,v,M;if(p>0)if(m=l*f-u,g=l*u-f,M=o*p,m>=0)if(g>=-M)if(g<=M){const b=1/p;m*=b,g*=b,v=m*(m+l*g+2*u)+g*(l*m+g+2*f)+h}else g=o,m=Math.max(0,-(l*g+u)),v=-m*m+g*(g+2*f)+h;else g=-o,m=Math.max(0,-(l*g+u)),v=-m*m+g*(g+2*f)+h;else g<=-M?(m=Math.max(0,-(-l*o+u)),g=m>0?-o:Math.min(Math.max(-o,-f),o),v=-m*m+g*(g+2*f)+h):g<=M?(m=0,g=Math.min(Math.max(-o,-f),o),v=g*(g+2*f)+h):(m=Math.max(0,-(l*o+u)),g=m>0?o:Math.min(Math.max(-o,-f),o),v=-m*m+g*(g+2*f)+h);else g=l>0?-o:o,m=Math.max(0,-(l*g+u)),v=-m*m+g*(g+2*f)+h;return i&&i.copy(this.origin).addScaledVector(this.direction,m),s&&s.copy(nu).addScaledVector(Vo,g),v}intersectSphere(t,e){Hi.subVectors(t.center,this.origin);const i=Hi.dot(this.direction),s=Hi.dot(Hi)-i*i,o=t.radius*t.radius;if(s>o)return null;const l=Math.sqrt(o-s),u=i-l,f=i+l;return f<0?null:u<0?this.at(f,e):this.at(u,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,o,l,u,f;const h=1/this.direction.x,p=1/this.direction.y,m=1/this.direction.z,g=this.origin;return h>=0?(i=(t.min.x-g.x)*h,s=(t.max.x-g.x)*h):(i=(t.max.x-g.x)*h,s=(t.min.x-g.x)*h),p>=0?(o=(t.min.y-g.y)*p,l=(t.max.y-g.y)*p):(o=(t.max.y-g.y)*p,l=(t.min.y-g.y)*p),i>l||o>s||((o>i||isNaN(i))&&(i=o),(l<s||isNaN(s))&&(s=l),m>=0?(u=(t.min.z-g.z)*m,f=(t.max.z-g.z)*m):(u=(t.max.z-g.z)*m,f=(t.min.z-g.z)*m),i>f||u>s)||((u>i||i!==i)&&(i=u),(f<s||s!==s)&&(s=f),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,Hi)!==null}intersectTriangle(t,e,i,s,o){iu.subVectors(e,t),Go.subVectors(i,t),ru.crossVectors(iu,Go);let l=this.direction.dot(ru),u;if(l>0){if(s)return null;u=1}else if(l<0)u=-1,l=-l;else return null;cr.subVectors(this.origin,t);const f=u*this.direction.dot(Go.crossVectors(cr,Go));if(f<0)return null;const h=u*this.direction.dot(iu.cross(cr));if(h<0||f+h>l)return null;const p=-u*cr.dot(ru);return p<0?null:this.at(p/l,o)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ze{constructor(t,e,i,s,o,l,u,f,h,p,m,g,v,M,b,x){ze.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,o,l,u,f,h,p,m,g,v,M,b,x)}set(t,e,i,s,o,l,u,f,h,p,m,g,v,M,b,x){const _=this.elements;return _[0]=t,_[4]=e,_[8]=i,_[12]=s,_[1]=o,_[5]=l,_[9]=u,_[13]=f,_[2]=h,_[6]=p,_[10]=m,_[14]=g,_[3]=v,_[7]=M,_[11]=b,_[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ze().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,s=1/Es.setFromMatrixColumn(t,0).length(),o=1/Es.setFromMatrixColumn(t,1).length(),l=1/Es.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*o,e[5]=i[5]*o,e[6]=i[6]*o,e[7]=0,e[8]=i[8]*l,e[9]=i[9]*l,e[10]=i[10]*l,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,s=t.y,o=t.z,l=Math.cos(i),u=Math.sin(i),f=Math.cos(s),h=Math.sin(s),p=Math.cos(o),m=Math.sin(o);if(t.order==="XYZ"){const g=l*p,v=l*m,M=u*p,b=u*m;e[0]=f*p,e[4]=-f*m,e[8]=h,e[1]=v+M*h,e[5]=g-b*h,e[9]=-u*f,e[2]=b-g*h,e[6]=M+v*h,e[10]=l*f}else if(t.order==="YXZ"){const g=f*p,v=f*m,M=h*p,b=h*m;e[0]=g+b*u,e[4]=M*u-v,e[8]=l*h,e[1]=l*m,e[5]=l*p,e[9]=-u,e[2]=v*u-M,e[6]=b+g*u,e[10]=l*f}else if(t.order==="ZXY"){const g=f*p,v=f*m,M=h*p,b=h*m;e[0]=g-b*u,e[4]=-l*m,e[8]=M+v*u,e[1]=v+M*u,e[5]=l*p,e[9]=b-g*u,e[2]=-l*h,e[6]=u,e[10]=l*f}else if(t.order==="ZYX"){const g=l*p,v=l*m,M=u*p,b=u*m;e[0]=f*p,e[4]=M*h-v,e[8]=g*h+b,e[1]=f*m,e[5]=b*h+g,e[9]=v*h-M,e[2]=-h,e[6]=u*f,e[10]=l*f}else if(t.order==="YZX"){const g=l*f,v=l*h,M=u*f,b=u*h;e[0]=f*p,e[4]=b-g*m,e[8]=M*m+v,e[1]=m,e[5]=l*p,e[9]=-u*p,e[2]=-h*p,e[6]=v*m+M,e[10]=g-b*m}else if(t.order==="XZY"){const g=l*f,v=l*h,M=u*f,b=u*h;e[0]=f*p,e[4]=-m,e[8]=h*p,e[1]=g*m+b,e[5]=l*p,e[9]=v*m-M,e[2]=M*m-v,e[6]=u*p,e[10]=b*m+g}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(rb,t,sb)}lookAt(t,e,i){const s=this.elements;return Wn.subVectors(t,e),Wn.lengthSq()===0&&(Wn.z=1),Wn.normalize(),ur.crossVectors(i,Wn),ur.lengthSq()===0&&(Math.abs(i.z)===1?Wn.x+=1e-4:Wn.z+=1e-4,Wn.normalize(),ur.crossVectors(i,Wn)),ur.normalize(),Wo.crossVectors(Wn,ur),s[0]=ur.x,s[4]=Wo.x,s[8]=Wn.x,s[1]=ur.y,s[5]=Wo.y,s[9]=Wn.y,s[2]=ur.z,s[6]=Wo.z,s[10]=Wn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,o=this.elements,l=i[0],u=i[4],f=i[8],h=i[12],p=i[1],m=i[5],g=i[9],v=i[13],M=i[2],b=i[6],x=i[10],_=i[14],I=i[3],D=i[7],w=i[11],B=i[15],F=s[0],N=s[4],Y=s[8],C=s[12],R=s[1],z=s[5],$=s[9],Z=s[13],ot=s[2],it=s[6],lt=s[10],ft=s[14],Q=s[3],Et=s[7],Rt=s[11],It=s[15];return o[0]=l*F+u*R+f*ot+h*Q,o[4]=l*N+u*z+f*it+h*Et,o[8]=l*Y+u*$+f*lt+h*Rt,o[12]=l*C+u*Z+f*ft+h*It,o[1]=p*F+m*R+g*ot+v*Q,o[5]=p*N+m*z+g*it+v*Et,o[9]=p*Y+m*$+g*lt+v*Rt,o[13]=p*C+m*Z+g*ft+v*It,o[2]=M*F+b*R+x*ot+_*Q,o[6]=M*N+b*z+x*it+_*Et,o[10]=M*Y+b*$+x*lt+_*Rt,o[14]=M*C+b*Z+x*ft+_*It,o[3]=I*F+D*R+w*ot+B*Q,o[7]=I*N+D*z+w*it+B*Et,o[11]=I*Y+D*$+w*lt+B*Rt,o[15]=I*C+D*Z+w*ft+B*It,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],s=t[8],o=t[12],l=t[1],u=t[5],f=t[9],h=t[13],p=t[2],m=t[6],g=t[10],v=t[14],M=t[3],b=t[7],x=t[11],_=t[15];return M*(+o*f*m-s*h*m-o*u*g+i*h*g+s*u*v-i*f*v)+b*(+e*f*v-e*h*g+o*l*g-s*l*v+s*h*p-o*f*p)+x*(+e*h*m-e*u*v-o*l*m+i*l*v+o*u*p-i*h*p)+_*(-s*u*p-e*f*m+e*u*g+s*l*m-i*l*g+i*f*p)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],o=t[3],l=t[4],u=t[5],f=t[6],h=t[7],p=t[8],m=t[9],g=t[10],v=t[11],M=t[12],b=t[13],x=t[14],_=t[15],I=m*x*h-b*g*h+b*f*v-u*x*v-m*f*_+u*g*_,D=M*g*h-p*x*h-M*f*v+l*x*v+p*f*_-l*g*_,w=p*b*h-M*m*h+M*u*v-l*b*v-p*u*_+l*m*_,B=M*m*f-p*b*f-M*u*g+l*b*g+p*u*x-l*m*x,F=e*I+i*D+s*w+o*B;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const N=1/F;return t[0]=I*N,t[1]=(b*g*o-m*x*o-b*s*v+i*x*v+m*s*_-i*g*_)*N,t[2]=(u*x*o-b*f*o+b*s*h-i*x*h-u*s*_+i*f*_)*N,t[3]=(m*f*o-u*g*o-m*s*h+i*g*h+u*s*v-i*f*v)*N,t[4]=D*N,t[5]=(p*x*o-M*g*o+M*s*v-e*x*v-p*s*_+e*g*_)*N,t[6]=(M*f*o-l*x*o-M*s*h+e*x*h+l*s*_-e*f*_)*N,t[7]=(l*g*o-p*f*o+p*s*h-e*g*h-l*s*v+e*f*v)*N,t[8]=w*N,t[9]=(M*m*o-p*b*o-M*i*v+e*b*v+p*i*_-e*m*_)*N,t[10]=(l*b*o-M*u*o+M*i*h-e*b*h-l*i*_+e*u*_)*N,t[11]=(p*u*o-l*m*o-p*i*h+e*m*h+l*i*v-e*u*v)*N,t[12]=B*N,t[13]=(p*b*s-M*m*s+M*i*g-e*b*g-p*i*x+e*m*x)*N,t[14]=(M*u*s-l*b*s-M*i*f+e*b*f+l*i*x-e*u*x)*N,t[15]=(l*m*s-p*u*s+p*i*f-e*m*f-l*i*g+e*u*g)*N,this}scale(t){const e=this.elements,i=t.x,s=t.y,o=t.z;return e[0]*=i,e[4]*=s,e[8]*=o,e[1]*=i,e[5]*=s,e[9]*=o,e[2]*=i,e[6]*=s,e[10]*=o,e[3]*=i,e[7]*=s,e[11]*=o,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),s=Math.sin(e),o=1-i,l=t.x,u=t.y,f=t.z,h=o*l,p=o*u;return this.set(h*l+i,h*u-s*f,h*f+s*u,0,h*u+s*f,p*u+i,p*f-s*l,0,h*f-s*u,p*f+s*l,o*f*f+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,o,l){return this.set(1,i,o,0,t,1,l,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){const s=this.elements,o=e._x,l=e._y,u=e._z,f=e._w,h=o+o,p=l+l,m=u+u,g=o*h,v=o*p,M=o*m,b=l*p,x=l*m,_=u*m,I=f*h,D=f*p,w=f*m,B=i.x,F=i.y,N=i.z;return s[0]=(1-(b+_))*B,s[1]=(v+w)*B,s[2]=(M-D)*B,s[3]=0,s[4]=(v-w)*F,s[5]=(1-(g+_))*F,s[6]=(x+I)*F,s[7]=0,s[8]=(M+D)*N,s[9]=(x-I)*N,s[10]=(1-(g+b))*N,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){const s=this.elements;let o=Es.set(s[0],s[1],s[2]).length();const l=Es.set(s[4],s[5],s[6]).length(),u=Es.set(s[8],s[9],s[10]).length();this.determinant()<0&&(o=-o),t.x=s[12],t.y=s[13],t.z=s[14],_i.copy(this);const h=1/o,p=1/l,m=1/u;return _i.elements[0]*=h,_i.elements[1]*=h,_i.elements[2]*=h,_i.elements[4]*=p,_i.elements[5]*=p,_i.elements[6]*=p,_i.elements[8]*=m,_i.elements[9]*=m,_i.elements[10]*=m,e.setFromRotationMatrix(_i),i.x=o,i.y=l,i.z=u,this}makePerspective(t,e,i,s,o,l,u=Ai,f=!1){const h=this.elements,p=2*o/(e-t),m=2*o/(i-s),g=(e+t)/(e-t),v=(i+s)/(i-s);let M,b;if(f)M=o/(l-o),b=l*o/(l-o);else if(u===Ai)M=-(l+o)/(l-o),b=-2*l*o/(l-o);else if(u===Ml)M=-l/(l-o),b=-l*o/(l-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+u);return h[0]=p,h[4]=0,h[8]=g,h[12]=0,h[1]=0,h[5]=m,h[9]=v,h[13]=0,h[2]=0,h[6]=0,h[10]=M,h[14]=b,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(t,e,i,s,o,l,u=Ai,f=!1){const h=this.elements,p=2/(e-t),m=2/(i-s),g=-(e+t)/(e-t),v=-(i+s)/(i-s);let M,b;if(f)M=1/(l-o),b=l/(l-o);else if(u===Ai)M=-2/(l-o),b=-(l+o)/(l-o);else if(u===Ml)M=-1/(l-o),b=-o/(l-o);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+u);return h[0]=p,h[4]=0,h[8]=0,h[12]=g,h[1]=0,h[5]=m,h[9]=0,h[13]=v,h[2]=0,h[6]=0,h[10]=M,h[14]=b,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const Es=new V,_i=new ze,rb=new V(0,0,0),sb=new V(1,1,1),ur=new V,Wo=new V,Wn=new V,Np=new ze,Op=new Yr;class Yn{constructor(t=0,e=0,i=0,s=Yn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const s=t.elements,o=s[0],l=s[4],u=s[8],f=s[1],h=s[5],p=s[9],m=s[2],g=s[6],v=s[10];switch(e){case"XYZ":this._y=Math.asin(me(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-p,v),this._z=Math.atan2(-l,o)):(this._x=Math.atan2(g,h),this._z=0);break;case"YXZ":this._x=Math.asin(-me(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(u,v),this._z=Math.atan2(f,h)):(this._y=Math.atan2(-m,o),this._z=0);break;case"ZXY":this._x=Math.asin(me(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-m,v),this._z=Math.atan2(-l,h)):(this._y=0,this._z=Math.atan2(f,o));break;case"ZYX":this._y=Math.asin(-me(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(g,v),this._z=Math.atan2(f,o)):(this._x=0,this._z=Math.atan2(-l,h));break;case"YZX":this._z=Math.asin(me(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-p,h),this._y=Math.atan2(-m,o)):(this._x=0,this._y=Math.atan2(u,v));break;case"XZY":this._z=Math.asin(-me(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(g,h),this._y=Math.atan2(u,o)):(this._x=Math.atan2(-p,v),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Np.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Np,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Op.setFromEuler(this),this.setFromQuaternion(Op,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Yn.DEFAULT_ORDER="XYZ";class n_{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let ab=0;const Fp=new V,bs=new Yr,Vi=new ze,Xo=new V,_a=new V,ob=new V,lb=new Yr,Bp=new V(1,0,0),zp=new V(0,1,0),kp=new V(0,0,1),Hp={type:"added"},cb={type:"removed"},Ts={type:"childadded",child:null},su={type:"childremoved",child:null};class en extends jr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ab++}),this.uuid=Zi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=en.DEFAULT_UP.clone();const t=new V,e=new Yn,i=new Yr,s=new V(1,1,1);function o(){i.setFromEuler(e,!1)}function l(){e.setFromQuaternion(i,void 0,!1)}e._onChange(o),i._onChange(l),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ze},normalMatrix:{value:new oe}}),this.matrix=new ze,this.matrixWorld=new ze,this.matrixAutoUpdate=en.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=en.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new n_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return bs.setFromAxisAngle(t,e),this.quaternion.multiply(bs),this}rotateOnWorldAxis(t,e){return bs.setFromAxisAngle(t,e),this.quaternion.premultiply(bs),this}rotateX(t){return this.rotateOnAxis(Bp,t)}rotateY(t){return this.rotateOnAxis(zp,t)}rotateZ(t){return this.rotateOnAxis(kp,t)}translateOnAxis(t,e){return Fp.copy(t).applyQuaternion(this.quaternion),this.position.add(Fp.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Bp,t)}translateY(t){return this.translateOnAxis(zp,t)}translateZ(t){return this.translateOnAxis(kp,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Vi.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Xo.copy(t):Xo.set(t,e,i);const s=this.parent;this.updateWorldMatrix(!0,!1),_a.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Vi.lookAt(_a,Xo,this.up):Vi.lookAt(Xo,_a,this.up),this.quaternion.setFromRotationMatrix(Vi),s&&(Vi.extractRotation(s.matrixWorld),bs.setFromRotationMatrix(Vi),this.quaternion.premultiply(bs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Hp),Ts.child=t,this.dispatchEvent(Ts),Ts.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(cb),su.child=t,this.dispatchEvent(su),su.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Vi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Vi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Vi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Hp),Ts.child=t,this.dispatchEvent(Ts),Ts.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){const l=this.children[i].getObjectByProperty(t,e);if(l!==void 0)return l}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const s=this.children;for(let o=0,l=s.length;o<l;o++)s[o].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_a,t,ob),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_a,lb,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let o=0,l=s.length;o<l;o++)s[o].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(u=>({...u,boundingBox:u.boundingBox?u.boundingBox.toJSON():void 0,boundingSphere:u.boundingSphere?u.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(u=>({...u})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function o(u,f){return u[f.uuid]===void 0&&(u[f.uuid]=f.toJSON(t)),f.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(t.geometries,this.geometry);const u=this.geometry.parameters;if(u!==void 0&&u.shapes!==void 0){const f=u.shapes;if(Array.isArray(f))for(let h=0,p=f.length;h<p;h++){const m=f[h];o(t.shapes,m)}else o(t.shapes,f)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const u=[];for(let f=0,h=this.material.length;f<h;f++)u.push(o(t.materials,this.material[f]));s.material=u}else s.material=o(t.materials,this.material);if(this.children.length>0){s.children=[];for(let u=0;u<this.children.length;u++)s.children.push(this.children[u].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let u=0;u<this.animations.length;u++){const f=this.animations[u];s.animations.push(o(t.animations,f))}}if(e){const u=l(t.geometries),f=l(t.materials),h=l(t.textures),p=l(t.images),m=l(t.shapes),g=l(t.skeletons),v=l(t.animations),M=l(t.nodes);u.length>0&&(i.geometries=u),f.length>0&&(i.materials=f),h.length>0&&(i.textures=h),p.length>0&&(i.images=p),m.length>0&&(i.shapes=m),g.length>0&&(i.skeletons=g),v.length>0&&(i.animations=v),M.length>0&&(i.nodes=M)}return i.object=s,i;function l(u){const f=[];for(const h in u){const p=u[h];delete p.metadata,f.push(p)}return f}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}}en.DEFAULT_UP=new V(0,1,0);en.DEFAULT_MATRIX_AUTO_UPDATE=!0;en.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const gi=new V,Gi=new V,au=new V,Wi=new V,As=new V,ws=new V,Vp=new V,ou=new V,lu=new V,cu=new V,uu=new Ke,hu=new Ke,fu=new Ke;class ai{constructor(t=new V,e=new V,i=new V){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),gi.subVectors(t,e),s.cross(gi);const o=s.lengthSq();return o>0?s.multiplyScalar(1/Math.sqrt(o)):s.set(0,0,0)}static getBarycoord(t,e,i,s,o){gi.subVectors(s,e),Gi.subVectors(i,e),au.subVectors(t,e);const l=gi.dot(gi),u=gi.dot(Gi),f=gi.dot(au),h=Gi.dot(Gi),p=Gi.dot(au),m=l*h-u*u;if(m===0)return o.set(0,0,0),null;const g=1/m,v=(h*f-u*p)*g,M=(l*p-u*f)*g;return o.set(1-v-M,M,v)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,Wi)===null?!1:Wi.x>=0&&Wi.y>=0&&Wi.x+Wi.y<=1}static getInterpolation(t,e,i,s,o,l,u,f){return this.getBarycoord(t,e,i,s,Wi)===null?(f.x=0,f.y=0,"z"in f&&(f.z=0),"w"in f&&(f.w=0),null):(f.setScalar(0),f.addScaledVector(o,Wi.x),f.addScaledVector(l,Wi.y),f.addScaledVector(u,Wi.z),f)}static getInterpolatedAttribute(t,e,i,s,o,l){return uu.setScalar(0),hu.setScalar(0),fu.setScalar(0),uu.fromBufferAttribute(t,e),hu.fromBufferAttribute(t,i),fu.fromBufferAttribute(t,s),l.setScalar(0),l.addScaledVector(uu,o.x),l.addScaledVector(hu,o.y),l.addScaledVector(fu,o.z),l}static isFrontFacing(t,e,i,s){return gi.subVectors(i,e),Gi.subVectors(t,e),gi.cross(Gi).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return gi.subVectors(this.c,this.b),Gi.subVectors(this.a,this.b),gi.cross(Gi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return ai.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return ai.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,o){return ai.getInterpolation(t,this.a,this.b,this.c,e,i,s,o)}containsPoint(t){return ai.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return ai.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,s=this.b,o=this.c;let l,u;As.subVectors(s,i),ws.subVectors(o,i),ou.subVectors(t,i);const f=As.dot(ou),h=ws.dot(ou);if(f<=0&&h<=0)return e.copy(i);lu.subVectors(t,s);const p=As.dot(lu),m=ws.dot(lu);if(p>=0&&m<=p)return e.copy(s);const g=f*m-p*h;if(g<=0&&f>=0&&p<=0)return l=f/(f-p),e.copy(i).addScaledVector(As,l);cu.subVectors(t,o);const v=As.dot(cu),M=ws.dot(cu);if(M>=0&&v<=M)return e.copy(o);const b=v*h-f*M;if(b<=0&&h>=0&&M<=0)return u=h/(h-M),e.copy(i).addScaledVector(ws,u);const x=p*M-v*m;if(x<=0&&m-p>=0&&v-M>=0)return Vp.subVectors(o,s),u=(m-p)/(m-p+(v-M)),e.copy(s).addScaledVector(Vp,u);const _=1/(x+b+g);return l=b*_,u=g*_,e.copy(i).addScaledVector(As,l).addScaledVector(ws,u)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const i_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},hr={h:0,s:0,l:0},qo={h:0,s:0,l:0};function du(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class Yt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ri){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Te.colorSpaceToWorking(this,e),this}setRGB(t,e,i,s=Te.workingColorSpace){return this.r=t,this.g=e,this.b=i,Te.colorSpaceToWorking(this,s),this}setHSL(t,e,i,s=Te.workingColorSpace){if(t=Oh(t,1),e=me(e,0,1),i=me(i,0,1),e===0)this.r=this.g=this.b=i;else{const o=i<=.5?i*(1+e):i+e-i*e,l=2*i-o;this.r=du(l,o,t+1/3),this.g=du(l,o,t),this.b=du(l,o,t-1/3)}return Te.colorSpaceToWorking(this,s),this}setStyle(t,e=ri){function i(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let o;const l=s[1],u=s[2];switch(l){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,e);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,e);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const o=s[1],l=o.length;if(l===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,e);if(l===6)return this.setHex(parseInt(o,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ri){const i=i_[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ki(t.r),this.g=Ki(t.g),this.b=Ki(t.b),this}copyLinearToSRGB(t){return this.r=Vs(t.r),this.g=Vs(t.g),this.b=Vs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ri){return Te.workingToColorSpace(yn.copy(this),t),Math.round(me(yn.r*255,0,255))*65536+Math.round(me(yn.g*255,0,255))*256+Math.round(me(yn.b*255,0,255))}getHexString(t=ri){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Te.workingColorSpace){Te.workingToColorSpace(yn.copy(this),e);const i=yn.r,s=yn.g,o=yn.b,l=Math.max(i,s,o),u=Math.min(i,s,o);let f,h;const p=(u+l)/2;if(u===l)f=0,h=0;else{const m=l-u;switch(h=p<=.5?m/(l+u):m/(2-l-u),l){case i:f=(s-o)/m+(s<o?6:0);break;case s:f=(o-i)/m+2;break;case o:f=(i-s)/m+4;break}f/=6}return t.h=f,t.s=h,t.l=p,t}getRGB(t,e=Te.workingColorSpace){return Te.workingToColorSpace(yn.copy(this),e),t.r=yn.r,t.g=yn.g,t.b=yn.b,t}getStyle(t=ri){Te.workingToColorSpace(yn.copy(this),t);const e=yn.r,i=yn.g,s=yn.b;return t!==ri?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(hr),this.setHSL(hr.h+t,hr.s+e,hr.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(hr),t.getHSL(qo);const i=wa(hr.h,qo.h,e),s=wa(hr.s,qo.s,e),o=wa(hr.l,qo.l,e);return this.setHSL(i,s,o),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,s=this.b,o=t.elements;return this.r=o[0]*e+o[3]*i+o[6]*s,this.g=o[1]*e+o[4]*i+o[7]*s,this.b=o[2]*e+o[5]*i+o[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const yn=new Yt;Yt.NAMES=i_;let ub=0;class Pn extends jr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ub++}),this.uuid=Zi(),this.name="",this.type="Material",this.blending=Hs,this.side=xr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Iu,this.blendDst=Uu,this.blendEquation=Hr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Yt(0,0,0),this.blendAlpha=0,this.depthFunc=Ws,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Rp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=vs,this.stencilZFail=vs,this.stencilZPass=vs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Hs&&(i.blending=this.blending),this.side!==xr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Iu&&(i.blendSrc=this.blendSrc),this.blendDst!==Uu&&(i.blendDst=this.blendDst),this.blendEquation!==Hr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ws&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Rp&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==vs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==vs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==vs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(o){const l=[];for(const u in o){const f=o[u];delete f.metadata,l.push(f)}return l}if(e){const o=s(t.textures),l=s(t.images);o.length>0&&(i.textures=o),l.length>0&&(i.images=l)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const s=e.length;i=new Array(s);for(let o=0;o!==s;++o)i[o]=e[o].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Bh extends Pn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Yt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yn,this.combine=Tl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const tn=new V,Yo=new Wt;let hb=0;class Rn{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:hb++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=yh,this.updateRanges=[],this.gpuType=xi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,o=this.itemSize;s<o;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Yo.fromBufferAttribute(this,e),Yo.applyMatrix3(t),this.setXY(e,Yo.x,Yo.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)tn.fromBufferAttribute(this,e),tn.applyMatrix3(t),this.setXYZ(e,tn.x,tn.y,tn.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)tn.fromBufferAttribute(this,e),tn.applyMatrix4(t),this.setXYZ(e,tn.x,tn.y,tn.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)tn.fromBufferAttribute(this,e),tn.applyNormalMatrix(t),this.setXYZ(e,tn.x,tn.y,tn.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)tn.fromBufferAttribute(this,e),tn.transformDirection(t),this.setXYZ(e,tn.x,tn.y,tn.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=vi(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Ue(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=vi(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ue(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=vi(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ue(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=vi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ue(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=vi(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ue(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Ue(e,this.array),i=Ue(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=Ue(e,this.array),i=Ue(i,this.array),s=Ue(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,o){return t*=this.itemSize,this.normalized&&(e=Ue(e,this.array),i=Ue(i,this.array),s=Ue(s,this.array),o=Ue(o,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=o,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==yh&&(t.usage=this.usage),t}}class r_ extends Rn{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class s_ extends Rn{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class Cn extends Rn{constructor(t,e,i){super(new Float32Array(t),e,i)}}let fb=0;const ii=new ze,pu=new en,Rs=new V,Xn=new Jr,ga=new Jr,un=new V;class Fn extends jr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:fb++}),this.uuid=Zi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(t_(t)?s_:r_)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const o=new oe().getNormalMatrix(t);i.applyNormalMatrix(o),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ii.makeRotationFromQuaternion(t),this.applyMatrix4(ii),this}rotateX(t){return ii.makeRotationX(t),this.applyMatrix4(ii),this}rotateY(t){return ii.makeRotationY(t),this.applyMatrix4(ii),this}rotateZ(t){return ii.makeRotationZ(t),this.applyMatrix4(ii),this}translate(t,e,i){return ii.makeTranslation(t,e,i),this.applyMatrix4(ii),this}scale(t,e,i){return ii.makeScale(t,e,i),this.applyMatrix4(ii),this}lookAt(t){return pu.lookAt(t),pu.updateMatrix(),this.applyMatrix4(pu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Rs).negate(),this.translate(Rs.x,Rs.y,Rs.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let s=0,o=t.length;s<o;s++){const l=t[s];i.push(l.x,l.y,l.z||0)}this.setAttribute("position",new Cn(i,3))}else{const i=Math.min(t.length,e.count);for(let s=0;s<i;s++){const o=t[s];e.setXYZ(s,o.x,o.y,o.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Jr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){const o=e[i];Xn.setFromBufferAttribute(o),this.morphTargetsRelative?(un.addVectors(this.boundingBox.min,Xn.min),this.boundingBox.expandByPoint(un),un.addVectors(this.boundingBox.max,Xn.max),this.boundingBox.expandByPoint(un)):(this.boundingBox.expandByPoint(Xn.min),this.boundingBox.expandByPoint(Xn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new yr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new V,1/0);return}if(t){const i=this.boundingSphere.center;if(Xn.setFromBufferAttribute(t),e)for(let o=0,l=e.length;o<l;o++){const u=e[o];ga.setFromBufferAttribute(u),this.morphTargetsRelative?(un.addVectors(Xn.min,ga.min),Xn.expandByPoint(un),un.addVectors(Xn.max,ga.max),Xn.expandByPoint(un)):(Xn.expandByPoint(ga.min),Xn.expandByPoint(ga.max))}Xn.getCenter(i);let s=0;for(let o=0,l=t.count;o<l;o++)un.fromBufferAttribute(t,o),s=Math.max(s,i.distanceToSquared(un));if(e)for(let o=0,l=e.length;o<l;o++){const u=e[o],f=this.morphTargetsRelative;for(let h=0,p=u.count;h<p;h++)un.fromBufferAttribute(u,h),f&&(Rs.fromBufferAttribute(t,h),un.add(Rs)),s=Math.max(s,i.distanceToSquared(un))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,s=e.normal,o=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Rn(new Float32Array(4*i.count),4));const l=this.getAttribute("tangent"),u=[],f=[];for(let Y=0;Y<i.count;Y++)u[Y]=new V,f[Y]=new V;const h=new V,p=new V,m=new V,g=new Wt,v=new Wt,M=new Wt,b=new V,x=new V;function _(Y,C,R){h.fromBufferAttribute(i,Y),p.fromBufferAttribute(i,C),m.fromBufferAttribute(i,R),g.fromBufferAttribute(o,Y),v.fromBufferAttribute(o,C),M.fromBufferAttribute(o,R),p.sub(h),m.sub(h),v.sub(g),M.sub(g);const z=1/(v.x*M.y-M.x*v.y);isFinite(z)&&(b.copy(p).multiplyScalar(M.y).addScaledVector(m,-v.y).multiplyScalar(z),x.copy(m).multiplyScalar(v.x).addScaledVector(p,-M.x).multiplyScalar(z),u[Y].add(b),u[C].add(b),u[R].add(b),f[Y].add(x),f[C].add(x),f[R].add(x))}let I=this.groups;I.length===0&&(I=[{start:0,count:t.count}]);for(let Y=0,C=I.length;Y<C;++Y){const R=I[Y],z=R.start,$=R.count;for(let Z=z,ot=z+$;Z<ot;Z+=3)_(t.getX(Z+0),t.getX(Z+1),t.getX(Z+2))}const D=new V,w=new V,B=new V,F=new V;function N(Y){B.fromBufferAttribute(s,Y),F.copy(B);const C=u[Y];D.copy(C),D.sub(B.multiplyScalar(B.dot(C))).normalize(),w.crossVectors(F,C);const z=w.dot(f[Y])<0?-1:1;l.setXYZW(Y,D.x,D.y,D.z,z)}for(let Y=0,C=I.length;Y<C;++Y){const R=I[Y],z=R.start,$=R.count;for(let Z=z,ot=z+$;Z<ot;Z+=3)N(t.getX(Z+0)),N(t.getX(Z+1)),N(t.getX(Z+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Rn(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let g=0,v=i.count;g<v;g++)i.setXYZ(g,0,0,0);const s=new V,o=new V,l=new V,u=new V,f=new V,h=new V,p=new V,m=new V;if(t)for(let g=0,v=t.count;g<v;g+=3){const M=t.getX(g+0),b=t.getX(g+1),x=t.getX(g+2);s.fromBufferAttribute(e,M),o.fromBufferAttribute(e,b),l.fromBufferAttribute(e,x),p.subVectors(l,o),m.subVectors(s,o),p.cross(m),u.fromBufferAttribute(i,M),f.fromBufferAttribute(i,b),h.fromBufferAttribute(i,x),u.add(p),f.add(p),h.add(p),i.setXYZ(M,u.x,u.y,u.z),i.setXYZ(b,f.x,f.y,f.z),i.setXYZ(x,h.x,h.y,h.z)}else for(let g=0,v=e.count;g<v;g+=3)s.fromBufferAttribute(e,g+0),o.fromBufferAttribute(e,g+1),l.fromBufferAttribute(e,g+2),p.subVectors(l,o),m.subVectors(s,o),p.cross(m),i.setXYZ(g+0,p.x,p.y,p.z),i.setXYZ(g+1,p.x,p.y,p.z),i.setXYZ(g+2,p.x,p.y,p.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)un.fromBufferAttribute(t,e),un.normalize(),t.setXYZ(e,un.x,un.y,un.z)}toNonIndexed(){function t(u,f){const h=u.array,p=u.itemSize,m=u.normalized,g=new h.constructor(f.length*p);let v=0,M=0;for(let b=0,x=f.length;b<x;b++){u.isInterleavedBufferAttribute?v=f[b]*u.data.stride+u.offset:v=f[b]*p;for(let _=0;_<p;_++)g[M++]=h[v++]}return new Rn(g,p,m)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Fn,i=this.index.array,s=this.attributes;for(const u in s){const f=s[u],h=t(f,i);e.setAttribute(u,h)}const o=this.morphAttributes;for(const u in o){const f=[],h=o[u];for(let p=0,m=h.length;p<m;p++){const g=h[p],v=t(g,i);f.push(v)}e.morphAttributes[u]=f}e.morphTargetsRelative=this.morphTargetsRelative;const l=this.groups;for(let u=0,f=l.length;u<f;u++){const h=l[u];e.addGroup(h.start,h.count,h.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const f=this.parameters;for(const h in f)f[h]!==void 0&&(t[h]=f[h]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const f in i){const h=i[f];t.data.attributes[f]=h.toJSON(t.data)}const s={};let o=!1;for(const f in this.morphAttributes){const h=this.morphAttributes[f],p=[];for(let m=0,g=h.length;m<g;m++){const v=h[m];p.push(v.toJSON(t.data))}p.length>0&&(s[f]=p,o=!0)}o&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const l=this.groups;l.length>0&&(t.data.groups=JSON.parse(JSON.stringify(l)));const u=this.boundingSphere;return u!==null&&(t.data.boundingSphere=u.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone());const s=t.attributes;for(const h in s){const p=s[h];this.setAttribute(h,p.clone(e))}const o=t.morphAttributes;for(const h in o){const p=[],m=o[h];for(let g=0,v=m.length;g<v;g++)p.push(m[g].clone(e));this.morphAttributes[h]=p}this.morphTargetsRelative=t.morphTargetsRelative;const l=t.groups;for(let h=0,p=l.length;h<p;h++){const m=l[h];this.addGroup(m.start,m.count,m.materialIndex)}const u=t.boundingBox;u!==null&&(this.boundingBox=u.clone());const f=t.boundingSphere;return f!==null&&(this.boundingSphere=f.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Gp=new ze,Or=new wl,Zo=new yr,Wp=new V,Ko=new V,$o=new V,jo=new V,mu=new V,Jo=new V,Xp=new V,Qo=new V;class oi extends en{constructor(t=new Fn,e=new Bh){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,l=s.length;o<l;o++){const u=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=o}}}}getVertexPosition(t,e){const i=this.geometry,s=i.attributes.position,o=i.morphAttributes.position,l=i.morphTargetsRelative;e.fromBufferAttribute(s,t);const u=this.morphTargetInfluences;if(o&&u){Jo.set(0,0,0);for(let f=0,h=o.length;f<h;f++){const p=u[f],m=o[f];p!==0&&(mu.fromBufferAttribute(m,t),l?Jo.addScaledVector(mu,p):Jo.addScaledVector(mu.sub(e),p))}e.add(Jo)}return e}raycast(t,e){const i=this.geometry,s=this.material,o=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Zo.copy(i.boundingSphere),Zo.applyMatrix4(o),Or.copy(t.ray).recast(t.near),!(Zo.containsPoint(Or.origin)===!1&&(Or.intersectSphere(Zo,Wp)===null||Or.origin.distanceToSquared(Wp)>(t.far-t.near)**2))&&(Gp.copy(o).invert(),Or.copy(t.ray).applyMatrix4(Gp),!(i.boundingBox!==null&&Or.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Or)))}_computeIntersections(t,e,i){let s;const o=this.geometry,l=this.material,u=o.index,f=o.attributes.position,h=o.attributes.uv,p=o.attributes.uv1,m=o.attributes.normal,g=o.groups,v=o.drawRange;if(u!==null)if(Array.isArray(l))for(let M=0,b=g.length;M<b;M++){const x=g[M],_=l[x.materialIndex],I=Math.max(x.start,v.start),D=Math.min(u.count,Math.min(x.start+x.count,v.start+v.count));for(let w=I,B=D;w<B;w+=3){const F=u.getX(w),N=u.getX(w+1),Y=u.getX(w+2);s=tl(this,_,t,i,h,p,m,F,N,Y),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=x.materialIndex,e.push(s))}}else{const M=Math.max(0,v.start),b=Math.min(u.count,v.start+v.count);for(let x=M,_=b;x<_;x+=3){const I=u.getX(x),D=u.getX(x+1),w=u.getX(x+2);s=tl(this,l,t,i,h,p,m,I,D,w),s&&(s.faceIndex=Math.floor(x/3),e.push(s))}}else if(f!==void 0)if(Array.isArray(l))for(let M=0,b=g.length;M<b;M++){const x=g[M],_=l[x.materialIndex],I=Math.max(x.start,v.start),D=Math.min(f.count,Math.min(x.start+x.count,v.start+v.count));for(let w=I,B=D;w<B;w+=3){const F=w,N=w+1,Y=w+2;s=tl(this,_,t,i,h,p,m,F,N,Y),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=x.materialIndex,e.push(s))}}else{const M=Math.max(0,v.start),b=Math.min(f.count,v.start+v.count);for(let x=M,_=b;x<_;x+=3){const I=x,D=x+1,w=x+2;s=tl(this,l,t,i,h,p,m,I,D,w),s&&(s.faceIndex=Math.floor(x/3),e.push(s))}}}}function db(n,t,e,i,s,o,l,u){let f;if(t.side===On?f=i.intersectTriangle(l,o,s,!0,u):f=i.intersectTriangle(s,o,l,t.side===xr,u),f===null)return null;Qo.copy(u),Qo.applyMatrix4(n.matrixWorld);const h=e.ray.origin.distanceTo(Qo);return h<e.near||h>e.far?null:{distance:h,point:Qo.clone(),object:n}}function tl(n,t,e,i,s,o,l,u,f,h){n.getVertexPosition(u,Ko),n.getVertexPosition(f,$o),n.getVertexPosition(h,jo);const p=db(n,t,e,i,Ko,$o,jo,Xp);if(p){const m=new V;ai.getBarycoord(Xp,Ko,$o,jo,m),s&&(p.uv=ai.getInterpolatedAttribute(s,u,f,h,m,new Wt)),o&&(p.uv1=ai.getInterpolatedAttribute(o,u,f,h,m,new Wt)),l&&(p.normal=ai.getInterpolatedAttribute(l,u,f,h,m,new V),p.normal.dot(i.direction)>0&&p.normal.multiplyScalar(-1));const g={a:u,b:f,c:h,normal:new V,materialIndex:0};ai.getNormal(Ko,$o,jo,g.normal),p.face=g,p.barycoord=m}return p}class js extends Fn{constructor(t=1,e=1,i=1,s=1,o=1,l=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:o,depthSegments:l};const u=this;s=Math.floor(s),o=Math.floor(o),l=Math.floor(l);const f=[],h=[],p=[],m=[];let g=0,v=0;M("z","y","x",-1,-1,i,e,t,l,o,0),M("z","y","x",1,-1,i,e,-t,l,o,1),M("x","z","y",1,1,t,i,e,s,l,2),M("x","z","y",1,-1,t,i,-e,s,l,3),M("x","y","z",1,-1,t,e,i,s,o,4),M("x","y","z",-1,-1,t,e,-i,s,o,5),this.setIndex(f),this.setAttribute("position",new Cn(h,3)),this.setAttribute("normal",new Cn(p,3)),this.setAttribute("uv",new Cn(m,2));function M(b,x,_,I,D,w,B,F,N,Y,C){const R=w/N,z=B/Y,$=w/2,Z=B/2,ot=F/2,it=N+1,lt=Y+1;let ft=0,Q=0;const Et=new V;for(let Rt=0;Rt<lt;Rt++){const It=Rt*z-Z;for(let le=0;le<it;le++){const we=le*R-$;Et[b]=we*I,Et[x]=It*D,Et[_]=ot,h.push(Et.x,Et.y,Et.z),Et[b]=0,Et[x]=0,Et[_]=F>0?1:-1,p.push(Et.x,Et.y,Et.z),m.push(le/N),m.push(1-Rt/Y),ft+=1}}for(let Rt=0;Rt<Y;Rt++)for(let It=0;It<N;It++){const le=g+It+it*Rt,we=g+It+it*(Rt+1),Ne=g+(It+1)+it*(Rt+1),de=g+(It+1)+it*Rt;f.push(le,we,de),f.push(we,Ne,de),Q+=6}u.addGroup(v,Q,C),v+=Q,g+=ft}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new js(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Zs(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function wn(n){const t={};for(let e=0;e<n.length;e++){const i=Zs(n[e]);for(const s in i)t[s]=i[s]}return t}function pb(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function a_(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Te.workingColorSpace}const mb={clone:Zs,merge:wn};var _b=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,gb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ri extends Pn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=_b,this.fragmentShader=gb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Zs(t.uniforms),this.uniformsGroups=pb(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const l=this.uniforms[s].value;l&&l.isTexture?e.uniforms[s]={type:"t",value:l.toJSON(t).uuid}:l&&l.isColor?e.uniforms[s]={type:"c",value:l.getHex()}:l&&l.isVector2?e.uniforms[s]={type:"v2",value:l.toArray()}:l&&l.isVector3?e.uniforms[s]={type:"v3",value:l.toArray()}:l&&l.isVector4?e.uniforms[s]={type:"v4",value:l.toArray()}:l&&l.isMatrix3?e.uniforms[s]={type:"m3",value:l.toArray()}:l&&l.isMatrix4?e.uniforms[s]={type:"m4",value:l.toArray()}:e.uniforms[s]={value:l}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class o_ extends en{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ze,this.projectionMatrix=new ze,this.projectionMatrixInverse=new ze,this.coordinateSystem=Ai,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const fr=new V,qp=new Wt,Yp=new Wt;class si extends o_{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Oa*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Aa*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Oa*2*Math.atan(Math.tan(Aa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){fr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(fr.x,fr.y).multiplyScalar(-t/fr.z),fr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(fr.x,fr.y).multiplyScalar(-t/fr.z)}getViewSize(t,e){return this.getViewBounds(t,qp,Yp),e.subVectors(Yp,qp)}setViewOffset(t,e,i,s,o,l){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=o,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Aa*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,o=-.5*s;const l=this.view;if(this.view!==null&&this.view.enabled){const f=l.fullWidth,h=l.fullHeight;o+=l.offsetX*s/f,e-=l.offsetY*i/h,s*=l.width/f,i*=l.height/h}const u=this.filmOffset;u!==0&&(o+=t*u/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+s,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Cs=-90,Ps=1;class vb extends en{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new si(Cs,Ps,t,e);s.layers=this.layers,this.add(s);const o=new si(Cs,Ps,t,e);o.layers=this.layers,this.add(o);const l=new si(Cs,Ps,t,e);l.layers=this.layers,this.add(l);const u=new si(Cs,Ps,t,e);u.layers=this.layers,this.add(u);const f=new si(Cs,Ps,t,e);f.layers=this.layers,this.add(f);const h=new si(Cs,Ps,t,e);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,s,o,l,u,f]=e;for(const h of e)this.remove(h);if(t===Ai)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),l.up.set(0,0,1),l.lookAt(0,-1,0),u.up.set(0,1,0),u.lookAt(0,0,1),f.up.set(0,1,0),f.lookAt(0,0,-1);else if(t===Ml)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),l.up.set(0,0,-1),l.lookAt(0,-1,0),u.up.set(0,-1,0),u.lookAt(0,0,1),f.up.set(0,-1,0),f.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const h of e)this.add(h),h.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[o,l,u,f,h,p]=this.children,m=t.getRenderTarget(),g=t.getActiveCubeFace(),v=t.getActiveMipmapLevel(),M=t.xr.enabled;t.xr.enabled=!1;const b=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,o),t.setRenderTarget(i,1,s),t.render(e,l),t.setRenderTarget(i,2,s),t.render(e,u),t.setRenderTarget(i,3,s),t.render(e,f),t.setRenderTarget(i,4,s),t.render(e,h),i.texture.generateMipmaps=b,t.setRenderTarget(i,5,s),t.render(e,p),t.setRenderTarget(m,g,v),t.xr.enabled=M,i.texture.needsPMREMUpdate=!0}}class l_ extends Qe{constructor(t=[],e=Xs,i,s,o,l,u,f,h,p){super(t,e,i,s,o,l,u,f,h,p),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class xb extends Zr{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new l_(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new js(5,5,5),o=new Ri({name:"CubemapFromEquirect",uniforms:Zs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:On,blending:_r});o.uniforms.tEquirect.value=e;const l=new oi(s,o),u=e.minFilter;return e.minFilter===Wr&&(e.minFilter=Ti),new vb(1,10,this).update(t,l),e.minFilter=u,l.geometry.dispose(),l.material.dispose(),this}clear(t,e=!0,i=!0,s=!0){const o=t.getRenderTarget();for(let l=0;l<6;l++)t.setRenderTarget(this,l),t.clear(e,i,s);t.setRenderTarget(o)}}class ba extends en{constructor(){super(),this.isGroup=!0,this.type="Group"}}const yb={type:"move"};class _u{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ba,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ba,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ba,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,o=null,l=null;const u=this._targetRay,f=this._grip,h=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(h&&t.hand){l=!0;for(const b of t.hand.values()){const x=e.getJointPose(b,i),_=this._getHandJoint(h,b);x!==null&&(_.matrix.fromArray(x.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=x.radius),_.visible=x!==null}const p=h.joints["index-finger-tip"],m=h.joints["thumb-tip"],g=p.position.distanceTo(m.position),v=.02,M=.005;h.inputState.pinching&&g>v+M?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!h.inputState.pinching&&g<=v-M&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else f!==null&&t.gripSpace&&(o=e.getPose(t.gripSpace,i),o!==null&&(f.matrix.fromArray(o.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,o.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(o.linearVelocity)):f.hasLinearVelocity=!1,o.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(o.angularVelocity)):f.hasAngularVelocity=!1));u!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&o!==null&&(s=o),s!==null&&(u.matrix.fromArray(s.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,s.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(s.linearVelocity)):u.hasLinearVelocity=!1,s.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(s.angularVelocity)):u.hasAngularVelocity=!1,this.dispatchEvent(yb)))}return u!==null&&(u.visible=s!==null),f!==null&&(f.visible=o!==null),h!==null&&(h.visible=l!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new ba;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}class zh{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new Yt(t),this.near=e,this.far=i}clone(){return new zh(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Mb extends en{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Yn,this.environmentIntensity=1,this.environmentRotation=new Yn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class c_{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=yh,this.updateRanges=[],this.version=0,this.uuid=Zi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let s=0,o=this.stride;s<o;s++)this.array[t+s]=e.array[i+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Zi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Zi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const An=new V;class Ks{constructor(t,e,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)An.fromBufferAttribute(this,e),An.applyMatrix4(t),this.setXYZ(e,An.x,An.y,An.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)An.fromBufferAttribute(this,e),An.applyNormalMatrix(t),this.setXYZ(e,An.x,An.y,An.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)An.fromBufferAttribute(this,e),An.transformDirection(t),this.setXYZ(e,An.x,An.y,An.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=vi(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Ue(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=Ue(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Ue(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Ue(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Ue(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=vi(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=vi(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=vi(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=vi(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ue(e,this.array),i=Ue(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ue(e,this.array),i=Ue(i,this.array),s=Ue(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,e,i,s,o){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ue(e,this.array),i=Ue(i,this.array),s=Ue(s,this.array),o=Ue(o,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=o,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)e.push(this.data.array[s+o])}return new Rn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Ks(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)e.push(this.data.array[s+o])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class kh extends Pn{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Yt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Ds;const va=new V,Ls=new V,Is=new V,Us=new Wt,xa=new Wt,u_=new ze,el=new V,ya=new V,nl=new V,Zp=new Wt,gu=new Wt,Kp=new Wt;class Sb extends en{constructor(t=new kh){if(super(),this.isSprite=!0,this.type="Sprite",Ds===void 0){Ds=new Fn;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new c_(e,5);Ds.setIndex([0,1,2,0,2,3]),Ds.setAttribute("position",new Ks(i,3,0,!1)),Ds.setAttribute("uv",new Ks(i,2,3,!1))}this.geometry=Ds,this.material=t,this.center=new Wt(.5,.5),this.count=1}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ls.setFromMatrixScale(this.matrixWorld),u_.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Is.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ls.multiplyScalar(-Is.z);const i=this.material.rotation;let s,o;i!==0&&(o=Math.cos(i),s=Math.sin(i));const l=this.center;il(el.set(-.5,-.5,0),Is,l,Ls,s,o),il(ya.set(.5,-.5,0),Is,l,Ls,s,o),il(nl.set(.5,.5,0),Is,l,Ls,s,o),Zp.set(0,0),gu.set(1,0),Kp.set(1,1);let u=t.ray.intersectTriangle(el,ya,nl,!1,va);if(u===null&&(il(ya.set(-.5,.5,0),Is,l,Ls,s,o),gu.set(0,1),u=t.ray.intersectTriangle(el,nl,ya,!1,va),u===null))return;const f=t.ray.origin.distanceTo(va);f<t.near||f>t.far||e.push({distance:f,point:va.clone(),uv:ai.getInterpolation(va,el,ya,nl,Zp,gu,Kp,new Wt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function il(n,t,e,i,s,o){Us.subVectors(n,e).addScalar(.5).multiply(i),s!==void 0?(xa.x=o*Us.x-s*Us.y,xa.y=s*Us.x+o*Us.y):xa.copy(Us),n.copy(t),n.x+=xa.x,n.y+=xa.y,n.applyMatrix4(u_)}class Eb extends Qe{constructor(t=null,e=1,i=1,s,o,l,u,f,h=qn,p=qn,m,g){super(null,l,u,f,h,p,s,o,m,g),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Mh extends Rn{constructor(t,e,i,s=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Ns=new ze,$p=new ze,rl=[],jp=new Jr,bb=new ze,Ma=new oi,Sa=new yr;class Tb extends oi{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Mh(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,bb)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Jr),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Ns),jp.copy(t.boundingBox).applyMatrix4(Ns),this.boundingBox.union(jp)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new yr),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Ns),Sa.copy(t.boundingSphere).applyMatrix4(Ns),this.boundingSphere.union(Sa)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const i=e.morphTargetInfluences,s=this.morphTexture.source.data.data,o=i.length+1,l=t*o+1;for(let u=0;u<i.length;u++)i[u]=s[l+u]}raycast(t,e){const i=this.matrixWorld,s=this.count;if(Ma.geometry=this.geometry,Ma.material=this.material,Ma.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Sa.copy(this.boundingSphere),Sa.applyMatrix4(i),t.ray.intersectsSphere(Sa)!==!1))for(let o=0;o<s;o++){this.getMatrixAt(o,Ns),$p.multiplyMatrices(i,Ns),Ma.matrixWorld=$p,Ma.raycast(t,rl);for(let l=0,u=rl.length;l<u;l++){const f=rl[l];f.instanceId=o,f.object=this,e.push(f)}rl.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Mh(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const i=e.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new Eb(new Float32Array(s*this.count),s,this.count,Lh,xi));const o=this.morphTexture.source.data.data;let l=0;for(let h=0;h<i.length;h++)l+=i[h];const u=this.geometry.morphTargetsRelative?1:1-l,f=s*t;o[f]=u,o.set(i,f+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const vu=new V,Ab=new V,wb=new oe;class dr{constructor(t=new V(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const s=vu.subVectors(i,e).cross(Ab.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(vu),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const o=-(t.start.dot(this.normal)+this.constant)/s;return o<0||o>1?null:e.copy(t.start).addScaledVector(i,o)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||wb.getNormalMatrix(t),s=this.coplanarPoint(vu).applyMatrix4(t),o=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(o),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Fr=new yr,Rb=new Wt(.5,.5),sl=new V;class Hh{constructor(t=new dr,e=new dr,i=new dr,s=new dr,o=new dr,l=new dr){this.planes=[t,e,i,s,o,l]}set(t,e,i,s,o,l){const u=this.planes;return u[0].copy(t),u[1].copy(e),u[2].copy(i),u[3].copy(s),u[4].copy(o),u[5].copy(l),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Ai,i=!1){const s=this.planes,o=t.elements,l=o[0],u=o[1],f=o[2],h=o[3],p=o[4],m=o[5],g=o[6],v=o[7],M=o[8],b=o[9],x=o[10],_=o[11],I=o[12],D=o[13],w=o[14],B=o[15];if(s[0].setComponents(h-l,v-p,_-M,B-I).normalize(),s[1].setComponents(h+l,v+p,_+M,B+I).normalize(),s[2].setComponents(h+u,v+m,_+b,B+D).normalize(),s[3].setComponents(h-u,v-m,_-b,B-D).normalize(),i)s[4].setComponents(f,g,x,w).normalize(),s[5].setComponents(h-f,v-g,_-x,B-w).normalize();else if(s[4].setComponents(h-f,v-g,_-x,B-w).normalize(),e===Ai)s[5].setComponents(h+f,v+g,_+x,B+w).normalize();else if(e===Ml)s[5].setComponents(f,g,x,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Fr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Fr.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Fr)}intersectsSprite(t){Fr.center.set(0,0,0);const e=Rb.distanceTo(t.center);return Fr.radius=.7071067811865476+e,Fr.applyMatrix4(t.matrixWorld),this.intersectsSphere(Fr)}intersectsSphere(t){const e=this.planes,i=t.center,s=-t.radius;for(let o=0;o<6;o++)if(e[o].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const s=e[i];if(sl.x=s.normal.x>0?t.max.x:t.min.x,sl.y=s.normal.y>0?t.max.y:t.min.y,sl.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(sl)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ka extends Pn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Yt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Sl=new V,El=new V,Jp=new ze,Ea=new wl,al=new yr,xu=new V,Qp=new V;class Cb extends en{constructor(t=new Fn,e=new ka){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let s=1,o=e.count;s<o;s++)Sl.fromBufferAttribute(e,s-1),El.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=Sl.distanceTo(El);t.setAttribute("lineDistance",new Cn(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const i=this.geometry,s=this.matrixWorld,o=t.params.Line.threshold,l=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),al.copy(i.boundingSphere),al.applyMatrix4(s),al.radius+=o,t.ray.intersectsSphere(al)===!1)return;Jp.copy(s).invert(),Ea.copy(t.ray).applyMatrix4(Jp);const u=o/((this.scale.x+this.scale.y+this.scale.z)/3),f=u*u,h=this.isLineSegments?2:1,p=i.index,g=i.attributes.position;if(p!==null){const v=Math.max(0,l.start),M=Math.min(p.count,l.start+l.count);for(let b=v,x=M-1;b<x;b+=h){const _=p.getX(b),I=p.getX(b+1),D=ol(this,t,Ea,f,_,I,b);D&&e.push(D)}if(this.isLineLoop){const b=p.getX(M-1),x=p.getX(v),_=ol(this,t,Ea,f,b,x,M-1);_&&e.push(_)}}else{const v=Math.max(0,l.start),M=Math.min(g.count,l.start+l.count);for(let b=v,x=M-1;b<x;b+=h){const _=ol(this,t,Ea,f,b,b+1,b);_&&e.push(_)}if(this.isLineLoop){const b=ol(this,t,Ea,f,M-1,v,M-1);b&&e.push(b)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,l=s.length;o<l;o++){const u=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=o}}}}}function ol(n,t,e,i,s,o,l){const u=n.geometry.attributes.position;if(Sl.fromBufferAttribute(u,s),El.fromBufferAttribute(u,o),e.distanceSqToSegment(Sl,El,xu,Qp)>i)return;xu.applyMatrix4(n.matrixWorld);const h=t.ray.origin.distanceTo(xu);if(!(h<t.near||h>t.far))return{distance:h,point:Qp.clone().applyMatrix4(n.matrixWorld),index:l,face:null,faceIndex:null,barycoord:null,object:n}}const tm=new V,em=new V;class h_ extends Cb{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[];for(let s=0,o=e.count;s<o;s+=2)tm.fromBufferAttribute(e,s),em.fromBufferAttribute(e,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+tm.distanceTo(em);t.setAttribute("lineDistance",new Cn(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Vh extends Pn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Yt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const nm=new ze,Sh=new wl,ll=new yr,cl=new V;class Pb extends en{constructor(t=new Fn,e=new Vh){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const i=this.geometry,s=this.matrixWorld,o=t.params.Points.threshold,l=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ll.copy(i.boundingSphere),ll.applyMatrix4(s),ll.radius+=o,t.ray.intersectsSphere(ll)===!1)return;nm.copy(s).invert(),Sh.copy(t.ray).applyMatrix4(nm);const u=o/((this.scale.x+this.scale.y+this.scale.z)/3),f=u*u,h=i.index,m=i.attributes.position;if(h!==null){const g=Math.max(0,l.start),v=Math.min(h.count,l.start+l.count);for(let M=g,b=v;M<b;M++){const x=h.getX(M);cl.fromBufferAttribute(m,x),im(cl,x,f,s,t,e,this)}}else{const g=Math.max(0,l.start),v=Math.min(m.count,l.start+l.count);for(let M=g,b=v;M<b;M++)cl.fromBufferAttribute(m,M),im(cl,M,f,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,l=s.length;o<l;o++){const u=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=o}}}}}function im(n,t,e,i,s,o,l){const u=Sh.distanceSqToPoint(n);if(u<e){const f=new V;Sh.closestPointToPoint(n,f),f.applyMatrix4(i);const h=s.ray.origin.distanceTo(f);if(h<s.near||h>s.far)return;o.push({distance:h,distanceToRay:Math.sqrt(u),point:f,index:t,face:null,faceIndex:null,barycoord:null,object:l})}}class Db extends Qe{constructor(t,e,i,s,o,l,u,f,h){super(t,e,i,s,o,l,u,f,h),this.isCanvasTexture=!0,this.needsUpdate=!0}}class f_ extends Qe{constructor(t,e,i=qr,s,o,l,u=qn,f=qn,h,p=Ua,m=1){if(p!==Ua&&p!==Na)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:t,height:e,depth:m};super(g,s,o,l,u,f,p,i,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Fh(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class d_ extends Qe{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Ha extends Fn{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};const o=t/2,l=e/2,u=Math.floor(i),f=Math.floor(s),h=u+1,p=f+1,m=t/u,g=e/f,v=[],M=[],b=[],x=[];for(let _=0;_<p;_++){const I=_*g-l;for(let D=0;D<h;D++){const w=D*m-o;M.push(w,-I,0),b.push(0,0,1),x.push(D/u),x.push(1-_/f)}}for(let _=0;_<f;_++)for(let I=0;I<u;I++){const D=I+h*_,w=I+h*(_+1),B=I+1+h*(_+1),F=I+1+h*_;v.push(D,w,F),v.push(w,B,F)}this.setIndex(v),this.setAttribute("position",new Cn(M,3)),this.setAttribute("normal",new Cn(b,3)),this.setAttribute("uv",new Cn(x,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ha(t.width,t.height,t.widthSegments,t.heightSegments)}}class Lb extends Pn{constructor(t){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new Yt(0),this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.fog=t.fog,this}}class Ib extends Ri{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Rl extends Pn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Yt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Yt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=$r,this.normalScale=new Wt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Ub extends Rl{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Wt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return me(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Yt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Yt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Yt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class Nb extends Pn{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Yt(16777215),this.specular=new Yt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Yt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=$r,this.normalScale=new Wt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yn,this.combine=Tl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Ob extends Pn{constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new Yt(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Yt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=$r,this.normalScale=new Wt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}class Fb extends Pn{constructor(t){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=$r,this.normalScale=new Wt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.flatShading=t.flatShading,this}}class Bb extends Pn{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Yt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Yt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=$r,this.normalScale=new Wt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yn,this.combine=Tl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class p_ extends Pn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=SE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class m_ extends Pn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class zb extends Pn{constructor(t){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new Yt(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=$r,this.normalScale=new Wt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={MATCAP:""},this.color.copy(t.color),this.matcap=t.matcap,this.map=t.map,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.flatShading=t.flatShading,this.fog=t.fog,this}}class kb extends ka{constructor(t){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(t)}copy(t){return super.copy(t),this.scale=t.scale,this.dashSize=t.dashSize,this.gapSize=t.gapSize,this}}const Ra={enabled:!1,files:{},add:function(n,t){this.enabled!==!1&&(this.files[n]=t)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class Hb{constructor(t,e,i){const s=this;let o=!1,l=0,u=0,f;const h=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.abortController=new AbortController,this.itemStart=function(p){u++,o===!1&&s.onStart!==void 0&&s.onStart(p,l,u),o=!0},this.itemEnd=function(p){l++,s.onProgress!==void 0&&s.onProgress(p,l,u),l===u&&(o=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(p){s.onError!==void 0&&s.onError(p)},this.resolveURL=function(p){return f?f(p):p},this.setURLModifier=function(p){return f=p,this},this.addHandler=function(p,m){return h.push(p,m),this},this.removeHandler=function(p){const m=h.indexOf(p);return m!==-1&&h.splice(m,2),this},this.getHandler=function(p){for(let m=0,g=h.length;m<g;m+=2){const v=h[m],M=h[m+1];if(v.global&&(v.lastIndex=0),v.test(p))return M}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const Vb=new Hb;class Qr{constructor(t){this.manager=t!==void 0?t:Vb,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const i=this;return new Promise(function(s,o){i.load(t,s,e,o)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}Qr.DEFAULT_MATERIAL_NAME="__DEFAULT";const Xi={};class Gb extends Error{constructor(t,e){super(t),this.response=e}}class Gh extends Qr{constructor(t){super(t),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(t,e,i,s){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const o=Ra.get(`file:${t}`);if(o!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(o),this.manager.itemEnd(t)},0),o;if(Xi[t]!==void 0){Xi[t].push({onLoad:e,onProgress:i,onError:s});return}Xi[t]=[],Xi[t].push({onLoad:e,onProgress:i,onError:s});const l=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),u=this.mimeType,f=this.responseType;fetch(l).then(h=>{if(h.status===200||h.status===0){if(h.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||h.body===void 0||h.body.getReader===void 0)return h;const p=Xi[t],m=h.body.getReader(),g=h.headers.get("X-File-Size")||h.headers.get("Content-Length"),v=g?parseInt(g):0,M=v!==0;let b=0;const x=new ReadableStream({start(_){I();function I(){m.read().then(({done:D,value:w})=>{if(D)_.close();else{b+=w.byteLength;const B=new ProgressEvent("progress",{lengthComputable:M,loaded:b,total:v});for(let F=0,N=p.length;F<N;F++){const Y=p[F];Y.onProgress&&Y.onProgress(B)}_.enqueue(w),I()}},D=>{_.error(D)})}}});return new Response(x)}else throw new Gb(`fetch for "${h.url}" responded with ${h.status}: ${h.statusText}`,h)}).then(h=>{switch(f){case"arraybuffer":return h.arrayBuffer();case"blob":return h.blob();case"document":return h.text().then(p=>new DOMParser().parseFromString(p,u));case"json":return h.json();default:if(u==="")return h.text();{const m=/charset="?([^;"\s]*)"?/i.exec(u),g=m&&m[1]?m[1].toLowerCase():void 0,v=new TextDecoder(g);return h.arrayBuffer().then(M=>v.decode(M))}}}).then(h=>{Ra.add(`file:${t}`,h);const p=Xi[t];delete Xi[t];for(let m=0,g=p.length;m<g;m++){const v=p[m];v.onLoad&&v.onLoad(h)}}).catch(h=>{const p=Xi[t];if(p===void 0)throw this.manager.itemError(t),h;delete Xi[t];for(let m=0,g=p.length;m<g;m++){const v=p[m];v.onError&&v.onError(h)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Os=new WeakMap;class Wb extends Qr{constructor(t){super(t)}load(t,e,i,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const o=this,l=Ra.get(`image:${t}`);if(l!==void 0){if(l.complete===!0)o.manager.itemStart(t),setTimeout(function(){e&&e(l),o.manager.itemEnd(t)},0);else{let m=Os.get(l);m===void 0&&(m=[],Os.set(l,m)),m.push({onLoad:e,onError:s})}return l}const u=Fa("img");function f(){p(),e&&e(this);const m=Os.get(this)||[];for(let g=0;g<m.length;g++){const v=m[g];v.onLoad&&v.onLoad(this)}Os.delete(this),o.manager.itemEnd(t)}function h(m){p(),s&&s(m),Ra.remove(`image:${t}`);const g=Os.get(this)||[];for(let v=0;v<g.length;v++){const M=g[v];M.onError&&M.onError(m)}Os.delete(this),o.manager.itemError(t),o.manager.itemEnd(t)}function p(){u.removeEventListener("load",f,!1),u.removeEventListener("error",h,!1)}return u.addEventListener("load",f,!1),u.addEventListener("error",h,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(u.crossOrigin=this.crossOrigin),Ra.add(`image:${t}`,u),o.manager.itemStart(t),u.src=t,u}}class Xb extends Qr{constructor(t){super(t)}load(t,e,i,s){const o=new Qe,l=new Wb(this.manager);return l.setCrossOrigin(this.crossOrigin),l.setPath(this.path),l.load(t,function(u){o.image=u,o.needsUpdate=!0,e!==void 0&&e(o)},i,s),o}}class __ extends en{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Yt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const yu=new ze,rm=new V,sm=new V;class qb{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Wt(512,512),this.mapType=wi,this.map=null,this.mapPass=null,this.matrix=new ze,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Hh,this._frameExtents=new Wt(1,1),this._viewportCount=1,this._viewports=[new Ke(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;rm.setFromMatrixPosition(t.matrixWorld),e.position.copy(rm),sm.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(sm),e.updateMatrixWorld(),yu.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(yu,e.coordinateSystem,e.reversedDepth),e.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(yu)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class g_ extends o_{constructor(t=-1,e=1,i=1,s=-1,o=.1,l=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=o,this.far=l,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,o,l){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=o,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let o=i-t,l=i+t,u=s+e,f=s-e;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=h*this.view.offsetX,l=o+h*this.view.width,u-=p*this.view.offsetY,f=u-p*this.view.height}this.projectionMatrix.makeOrthographic(o,l,u,f,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Yb extends qb{constructor(){super(new g_(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Zb extends __{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(en.DEFAULT_UP),this.updateMatrix(),this.target=new en,this.shadow=new Yb}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Kb extends __{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Wh extends Qr{constructor(t){super(t),this.textures={}}load(t,e,i,s){const o=this,l=new Gh(o.manager);l.setPath(o.path),l.setRequestHeader(o.requestHeader),l.setWithCredentials(o.withCredentials),l.load(t,function(u){try{e(o.parse(JSON.parse(u)))}catch(f){s?s(f):console.error(f),o.manager.itemError(t)}},i,s)}parse(t){const e=this.textures;function i(o){return e[o]===void 0&&console.warn("THREE.MaterialLoader: Undefined texture",o),e[o]}const s=this.createMaterialFromType(t.type);if(t.uuid!==void 0&&(s.uuid=t.uuid),t.name!==void 0&&(s.name=t.name),t.color!==void 0&&s.color!==void 0&&s.color.setHex(t.color),t.roughness!==void 0&&(s.roughness=t.roughness),t.metalness!==void 0&&(s.metalness=t.metalness),t.sheen!==void 0&&(s.sheen=t.sheen),t.sheenColor!==void 0&&(s.sheenColor=new Yt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(s.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&s.emissive!==void 0&&s.emissive.setHex(t.emissive),t.specular!==void 0&&s.specular!==void 0&&s.specular.setHex(t.specular),t.specularIntensity!==void 0&&(s.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&s.specularColor!==void 0&&s.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(s.shininess=t.shininess),t.clearcoat!==void 0&&(s.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(s.dispersion=t.dispersion),t.iridescence!==void 0&&(s.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(s.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(s.transmission=t.transmission),t.thickness!==void 0&&(s.thickness=t.thickness),t.attenuationDistance!==void 0&&(s.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&s.attenuationColor!==void 0&&s.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(s.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(s.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(s.fog=t.fog),t.flatShading!==void 0&&(s.flatShading=t.flatShading),t.blending!==void 0&&(s.blending=t.blending),t.combine!==void 0&&(s.combine=t.combine),t.side!==void 0&&(s.side=t.side),t.shadowSide!==void 0&&(s.shadowSide=t.shadowSide),t.opacity!==void 0&&(s.opacity=t.opacity),t.transparent!==void 0&&(s.transparent=t.transparent),t.alphaTest!==void 0&&(s.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(s.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(s.depthFunc=t.depthFunc),t.depthTest!==void 0&&(s.depthTest=t.depthTest),t.depthWrite!==void 0&&(s.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(s.colorWrite=t.colorWrite),t.blendSrc!==void 0&&(s.blendSrc=t.blendSrc),t.blendDst!==void 0&&(s.blendDst=t.blendDst),t.blendEquation!==void 0&&(s.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(s.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(s.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(s.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&s.blendColor!==void 0&&s.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(s.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(s.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(s.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(s.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(s.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(s.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(s.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(s.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(s.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(s.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(s.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(s.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(s.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(s.rotation=t.rotation),t.linewidth!==void 0&&(s.linewidth=t.linewidth),t.dashSize!==void 0&&(s.dashSize=t.dashSize),t.gapSize!==void 0&&(s.gapSize=t.gapSize),t.scale!==void 0&&(s.scale=t.scale),t.polygonOffset!==void 0&&(s.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(s.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(s.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(s.dithering=t.dithering),t.alphaToCoverage!==void 0&&(s.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(s.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(s.forceSinglePass=t.forceSinglePass),t.visible!==void 0&&(s.visible=t.visible),t.toneMapped!==void 0&&(s.toneMapped=t.toneMapped),t.userData!==void 0&&(s.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?s.vertexColors=t.vertexColors>0:s.vertexColors=t.vertexColors),t.uniforms!==void 0)for(const o in t.uniforms){const l=t.uniforms[o];switch(s.uniforms[o]={},l.type){case"t":s.uniforms[o].value=i(l.value);break;case"c":s.uniforms[o].value=new Yt().setHex(l.value);break;case"v2":s.uniforms[o].value=new Wt().fromArray(l.value);break;case"v3":s.uniforms[o].value=new V().fromArray(l.value);break;case"v4":s.uniforms[o].value=new Ke().fromArray(l.value);break;case"m3":s.uniforms[o].value=new oe().fromArray(l.value);break;case"m4":s.uniforms[o].value=new ze().fromArray(l.value);break;default:s.uniforms[o].value=l.value}}if(t.defines!==void 0&&(s.defines=t.defines),t.vertexShader!==void 0&&(s.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(s.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(s.glslVersion=t.glslVersion),t.extensions!==void 0)for(const o in t.extensions)s.extensions[o]=t.extensions[o];if(t.lights!==void 0&&(s.lights=t.lights),t.clipping!==void 0&&(s.clipping=t.clipping),t.size!==void 0&&(s.size=t.size),t.sizeAttenuation!==void 0&&(s.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(s.map=i(t.map)),t.matcap!==void 0&&(s.matcap=i(t.matcap)),t.alphaMap!==void 0&&(s.alphaMap=i(t.alphaMap)),t.bumpMap!==void 0&&(s.bumpMap=i(t.bumpMap)),t.bumpScale!==void 0&&(s.bumpScale=t.bumpScale),t.normalMap!==void 0&&(s.normalMap=i(t.normalMap)),t.normalMapType!==void 0&&(s.normalMapType=t.normalMapType),t.normalScale!==void 0){let o=t.normalScale;Array.isArray(o)===!1&&(o=[o,o]),s.normalScale=new Wt().fromArray(o)}return t.displacementMap!==void 0&&(s.displacementMap=i(t.displacementMap)),t.displacementScale!==void 0&&(s.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(s.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(s.roughnessMap=i(t.roughnessMap)),t.metalnessMap!==void 0&&(s.metalnessMap=i(t.metalnessMap)),t.emissiveMap!==void 0&&(s.emissiveMap=i(t.emissiveMap)),t.emissiveIntensity!==void 0&&(s.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(s.specularMap=i(t.specularMap)),t.specularIntensityMap!==void 0&&(s.specularIntensityMap=i(t.specularIntensityMap)),t.specularColorMap!==void 0&&(s.specularColorMap=i(t.specularColorMap)),t.envMap!==void 0&&(s.envMap=i(t.envMap)),t.envMapRotation!==void 0&&s.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(s.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(s.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(s.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(s.lightMap=i(t.lightMap)),t.lightMapIntensity!==void 0&&(s.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(s.aoMap=i(t.aoMap)),t.aoMapIntensity!==void 0&&(s.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(s.gradientMap=i(t.gradientMap)),t.clearcoatMap!==void 0&&(s.clearcoatMap=i(t.clearcoatMap)),t.clearcoatRoughnessMap!==void 0&&(s.clearcoatRoughnessMap=i(t.clearcoatRoughnessMap)),t.clearcoatNormalMap!==void 0&&(s.clearcoatNormalMap=i(t.clearcoatNormalMap)),t.clearcoatNormalScale!==void 0&&(s.clearcoatNormalScale=new Wt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(s.iridescenceMap=i(t.iridescenceMap)),t.iridescenceThicknessMap!==void 0&&(s.iridescenceThicknessMap=i(t.iridescenceThicknessMap)),t.transmissionMap!==void 0&&(s.transmissionMap=i(t.transmissionMap)),t.thicknessMap!==void 0&&(s.thicknessMap=i(t.thicknessMap)),t.anisotropyMap!==void 0&&(s.anisotropyMap=i(t.anisotropyMap)),t.sheenColorMap!==void 0&&(s.sheenColorMap=i(t.sheenColorMap)),t.sheenRoughnessMap!==void 0&&(s.sheenRoughnessMap=i(t.sheenRoughnessMap)),s}setTextures(t){return this.textures=t,this}createMaterialFromType(t){return Wh.createMaterialFromType(t)}static createMaterialFromType(t){const e={ShadowMaterial:Lb,SpriteMaterial:kh,RawShaderMaterial:Ib,ShaderMaterial:Ri,PointsMaterial:Vh,MeshPhysicalMaterial:Ub,MeshStandardMaterial:Rl,MeshPhongMaterial:Nb,MeshToonMaterial:Ob,MeshNormalMaterial:Fb,MeshLambertMaterial:Bb,MeshDepthMaterial:p_,MeshDistanceMaterial:m_,MeshBasicMaterial:Bh,MeshMatcapMaterial:zb,LineDashedMaterial:kb,LineBasicMaterial:ka,Material:Pn};return new e[t]}}class $b extends Fn{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){const t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}}class jb extends Qr{constructor(t){super(t)}load(t,e,i,s){const o=this,l=new Gh(o.manager);l.setPath(o.path),l.setRequestHeader(o.requestHeader),l.setWithCredentials(o.withCredentials),l.load(t,function(u){try{e(o.parse(JSON.parse(u)))}catch(f){s?s(f):console.error(f),o.manager.itemError(t)}},i,s)}parse(t){const e={},i={};function s(v,M){if(e[M]!==void 0)return e[M];const x=v.interleavedBuffers[M],_=o(v,x.buffer),I=Bo(x.type,_),D=new c_(I,x.stride);return D.uuid=x.uuid,e[M]=D,D}function o(v,M){if(i[M]!==void 0)return i[M];const x=v.arrayBuffers[M],_=new Uint32Array(x).buffer;return i[M]=_,_}const l=t.isInstancedBufferGeometry?new $b:new Fn,u=t.data.index;if(u!==void 0){const v=Bo(u.type,u.array);l.setIndex(new Rn(v,1))}const f=t.data.attributes;for(const v in f){const M=f[v];let b;if(M.isInterleavedBufferAttribute){const x=s(t.data,M.data);b=new Ks(x,M.itemSize,M.offset,M.normalized)}else{const x=Bo(M.type,M.array),_=M.isInstancedBufferAttribute?Mh:Rn;b=new _(x,M.itemSize,M.normalized)}M.name!==void 0&&(b.name=M.name),M.usage!==void 0&&b.setUsage(M.usage),l.setAttribute(v,b)}const h=t.data.morphAttributes;if(h)for(const v in h){const M=h[v],b=[];for(let x=0,_=M.length;x<_;x++){const I=M[x];let D;if(I.isInterleavedBufferAttribute){const w=s(t.data,I.data);D=new Ks(w,I.itemSize,I.offset,I.normalized)}else{const w=Bo(I.type,I.array);D=new Rn(w,I.itemSize,I.normalized)}I.name!==void 0&&(D.name=I.name),b.push(D)}l.morphAttributes[v]=b}t.data.morphTargetsRelative&&(l.morphTargetsRelative=!0);const m=t.data.groups||t.data.drawcalls||t.data.offsets;if(m!==void 0)for(let v=0,M=m.length;v!==M;++v){const b=m[v];l.addGroup(b.start,b.count,b.materialIndex)}const g=t.data.boundingSphere;return g!==void 0&&(l.boundingSphere=new yr().fromJSON(g)),t.name&&(l.name=t.name),t.userData&&(l.userData=t.userData),l}}class Jb extends si{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class Qb{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=performance.now();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}class am{constructor(t=1,e=0,i=0){this.radius=t,this.phi=e,this.theta=i}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=me(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(me(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class tT extends h_{constructor(t=10,e=10,i=4473924,s=8947848){i=new Yt(i),s=new Yt(s);const o=e/2,l=t/e,u=t/2,f=[],h=[];for(let g=0,v=0,M=-u;g<=e;g++,M+=l){f.push(-u,0,M,u,0,M),f.push(M,0,-u,M,0,u);const b=g===o?i:s;b.toArray(h,v),v+=3,b.toArray(h,v),v+=3,b.toArray(h,v),v+=3,b.toArray(h,v),v+=3}const p=new Fn;p.setAttribute("position",new Cn(f,3)),p.setAttribute("color",new Cn(h,3));const m=new ka({vertexColors:!0,toneMapped:!1});super(p,m),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class eT extends h_{constructor(t=1){const e=[0,0,0,t,0,0,0,0,0,0,t,0,0,0,0,0,0,t],i=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],s=new Fn;s.setAttribute("position",new Cn(e,3)),s.setAttribute("color",new Cn(i,3));const o=new ka({vertexColors:!0,toneMapped:!1});super(s,o),this.type="AxesHelper"}setColors(t,e,i){const s=new Yt,o=this.geometry.attributes.color.array;return s.set(t),s.toArray(o,0),s.toArray(o,3),s.set(e),s.toArray(o,6),s.toArray(o,9),s.set(i),s.toArray(o,12),s.toArray(o,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class nT extends jr{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function om(n,t,e,i){const s=iT(i);switch(e){case Km:return n*t;case Lh:return n*t/s.components*s.byteLength;case Ih:return n*t/s.components*s.byteLength;case jm:return n*t*2/s.components*s.byteLength;case Uh:return n*t*2/s.components*s.byteLength;case $m:return n*t*3/s.components*s.byteLength;case yi:return n*t*4/s.components*s.byteLength;case Nh:return n*t*4/s.components*s.byteLength;case ml:case _l:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case gl:case vl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Yu:case Ku:return Math.max(n,16)*Math.max(t,8)/4;case qu:case Zu:return Math.max(n,8)*Math.max(t,8)/2;case $u:case ju:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Ju:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Qu:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case th:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case eh:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case nh:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case ih:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case rh:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case sh:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case ah:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case oh:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case lh:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case ch:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case uh:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case hh:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case fh:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case dh:case ph:case mh:return Math.ceil(n/4)*Math.ceil(t/4)*16;case _h:case gh:return Math.ceil(n/4)*Math.ceil(t/4)*8;case vh:case xh:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function iT(n){switch(n){case wi:case Xm:return{byteLength:1,components:1};case La:case qm:case za:return{byteLength:2,components:1};case Ph:case Dh:return{byteLength:2,components:4};case qr:case Ch:case xi:return{byteLength:4,components:1};case Ym:case Zm:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Rh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Rh);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function v_(){let n=null,t=!1,e=null,i=null;function s(o,l){e(o,l),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(o){e=o},setContext:function(o){n=o}}}function rT(n){const t=new WeakMap;function e(u,f){const h=u.array,p=u.usage,m=h.byteLength,g=n.createBuffer();n.bindBuffer(f,g),n.bufferData(f,h,p),u.onUploadCallback();let v;if(h instanceof Float32Array)v=n.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)v=n.HALF_FLOAT;else if(h instanceof Uint16Array)u.isFloat16BufferAttribute?v=n.HALF_FLOAT:v=n.UNSIGNED_SHORT;else if(h instanceof Int16Array)v=n.SHORT;else if(h instanceof Uint32Array)v=n.UNSIGNED_INT;else if(h instanceof Int32Array)v=n.INT;else if(h instanceof Int8Array)v=n.BYTE;else if(h instanceof Uint8Array)v=n.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)v=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:g,type:v,bytesPerElement:h.BYTES_PER_ELEMENT,version:u.version,size:m}}function i(u,f,h){const p=f.array,m=f.updateRanges;if(n.bindBuffer(h,u),m.length===0)n.bufferSubData(h,0,p);else{m.sort((v,M)=>v.start-M.start);let g=0;for(let v=1;v<m.length;v++){const M=m[g],b=m[v];b.start<=M.start+M.count+1?M.count=Math.max(M.count,b.start+b.count-M.start):(++g,m[g]=b)}m.length=g+1;for(let v=0,M=m.length;v<M;v++){const b=m[v];n.bufferSubData(h,b.start*p.BYTES_PER_ELEMENT,p,b.start,b.count)}f.clearUpdateRanges()}f.onUploadCallback()}function s(u){return u.isInterleavedBufferAttribute&&(u=u.data),t.get(u)}function o(u){u.isInterleavedBufferAttribute&&(u=u.data);const f=t.get(u);f&&(n.deleteBuffer(f.buffer),t.delete(u))}function l(u,f){if(u.isInterleavedBufferAttribute&&(u=u.data),u.isGLBufferAttribute){const p=t.get(u);(!p||p.version<u.version)&&t.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}const h=t.get(u);if(h===void 0)t.set(u,e(u,f));else if(h.version<u.version){if(h.size!==u.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(h.buffer,u,f),h.version=u.version}}return{get:s,remove:o,update:l}}var sT=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,aT=`#ifdef USE_ALPHAHASH
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
#endif`,oT=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,lT=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,cT=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,uT=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,hT=`#ifdef USE_AOMAP
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
#endif`,fT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,dT=`#ifdef USE_BATCHING
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
#endif`,pT=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,mT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,_T=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,gT=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,vT=`#ifdef USE_IRIDESCENCE
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
#endif`,xT=`#ifdef USE_BUMPMAP
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
#endif`,yT=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,MT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ST=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ET=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,bT=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,TT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,AT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,wT=`#if defined( USE_COLOR_ALPHA )
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
#endif`,RT=`#define PI 3.141592653589793
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
} // validated`,CT=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,PT=`vec3 transformedNormal = objectNormal;
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
#endif`,DT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,LT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,IT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,UT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,NT="gl_FragColor = linearToOutputTexel( gl_FragColor );",OT=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,FT=`#ifdef USE_ENVMAP
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
#endif`,BT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,zT=`#ifdef USE_ENVMAP
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
#endif`,kT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,HT=`#ifdef USE_ENVMAP
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
#endif`,VT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,GT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,WT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,XT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,qT=`#ifdef USE_GRADIENTMAP
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
}`,YT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ZT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,KT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,$T=`uniform bool receiveShadow;
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
#endif`,jT=`#ifdef USE_ENVMAP
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
#endif`,JT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,QT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,tA=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,eA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,nA=`PhysicalMaterial material;
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
#endif`,iA=`struct PhysicalMaterial {
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
}`,rA=`
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
#endif`,sA=`#if defined( RE_IndirectDiffuse )
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
#endif`,aA=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,oA=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,lA=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cA=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,uA=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,hA=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,fA=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,dA=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,pA=`#if defined( USE_POINTS_UV )
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
#endif`,mA=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,_A=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,gA=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,vA=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,xA=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,yA=`#ifdef USE_MORPHTARGETS
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
#endif`,MA=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,SA=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,EA=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,bA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,TA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,AA=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,wA=`#ifdef USE_NORMALMAP
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
#endif`,RA=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,CA=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,PA=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,DA=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,LA=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,IA=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,UA=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,NA=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,OA=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,FA=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,BA=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,zA=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,kA=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,HA=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,VA=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,GA=`float getShadowMask() {
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
}`,WA=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,XA=`#ifdef USE_SKINNING
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
#endif`,qA=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,YA=`#ifdef USE_SKINNING
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
#endif`,ZA=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,KA=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,$A=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,jA=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,JA=`#ifdef USE_TRANSMISSION
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
#endif`,QA=`#ifdef USE_TRANSMISSION
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
#endif`,tw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ew=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,nw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,iw=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const rw=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,sw=`uniform sampler2D t2D;
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
}`,aw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ow=`#ifdef ENVMAP_TYPE_CUBE
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
}`,lw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cw=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uw=`#include <common>
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
}`,hw=`#if DEPTH_PACKING == 3200
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
}`,fw=`#define DISTANCE
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
}`,dw=`#define DISTANCE
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
}`,pw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,mw=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_w=`uniform float scale;
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
}`,gw=`uniform vec3 diffuse;
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
}`,vw=`#include <common>
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
}`,xw=`uniform vec3 diffuse;
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
}`,yw=`#define LAMBERT
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
}`,Mw=`#define LAMBERT
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
}`,Sw=`#define MATCAP
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
}`,Ew=`#define MATCAP
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
}`,bw=`#define NORMAL
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
}`,Tw=`#define NORMAL
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
}`,Aw=`#define PHONG
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
}`,ww=`#define PHONG
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
}`,Rw=`#define STANDARD
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
}`,Cw=`#define STANDARD
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
}`,Pw=`#define TOON
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
}`,Dw=`#define TOON
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
}`,Lw=`uniform float size;
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
}`,Iw=`uniform vec3 diffuse;
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
}`,Uw=`#include <common>
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
}`,Nw=`uniform vec3 color;
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
}`,Ow=`uniform float rotation;
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
}`,Fw=`uniform vec3 diffuse;
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
}`,fe={alphahash_fragment:sT,alphahash_pars_fragment:aT,alphamap_fragment:oT,alphamap_pars_fragment:lT,alphatest_fragment:cT,alphatest_pars_fragment:uT,aomap_fragment:hT,aomap_pars_fragment:fT,batching_pars_vertex:dT,batching_vertex:pT,begin_vertex:mT,beginnormal_vertex:_T,bsdfs:gT,iridescence_fragment:vT,bumpmap_pars_fragment:xT,clipping_planes_fragment:yT,clipping_planes_pars_fragment:MT,clipping_planes_pars_vertex:ST,clipping_planes_vertex:ET,color_fragment:bT,color_pars_fragment:TT,color_pars_vertex:AT,color_vertex:wT,common:RT,cube_uv_reflection_fragment:CT,defaultnormal_vertex:PT,displacementmap_pars_vertex:DT,displacementmap_vertex:LT,emissivemap_fragment:IT,emissivemap_pars_fragment:UT,colorspace_fragment:NT,colorspace_pars_fragment:OT,envmap_fragment:FT,envmap_common_pars_fragment:BT,envmap_pars_fragment:zT,envmap_pars_vertex:kT,envmap_physical_pars_fragment:jT,envmap_vertex:HT,fog_vertex:VT,fog_pars_vertex:GT,fog_fragment:WT,fog_pars_fragment:XT,gradientmap_pars_fragment:qT,lightmap_pars_fragment:YT,lights_lambert_fragment:ZT,lights_lambert_pars_fragment:KT,lights_pars_begin:$T,lights_toon_fragment:JT,lights_toon_pars_fragment:QT,lights_phong_fragment:tA,lights_phong_pars_fragment:eA,lights_physical_fragment:nA,lights_physical_pars_fragment:iA,lights_fragment_begin:rA,lights_fragment_maps:sA,lights_fragment_end:aA,logdepthbuf_fragment:oA,logdepthbuf_pars_fragment:lA,logdepthbuf_pars_vertex:cA,logdepthbuf_vertex:uA,map_fragment:hA,map_pars_fragment:fA,map_particle_fragment:dA,map_particle_pars_fragment:pA,metalnessmap_fragment:mA,metalnessmap_pars_fragment:_A,morphinstance_vertex:gA,morphcolor_vertex:vA,morphnormal_vertex:xA,morphtarget_pars_vertex:yA,morphtarget_vertex:MA,normal_fragment_begin:SA,normal_fragment_maps:EA,normal_pars_fragment:bA,normal_pars_vertex:TA,normal_vertex:AA,normalmap_pars_fragment:wA,clearcoat_normal_fragment_begin:RA,clearcoat_normal_fragment_maps:CA,clearcoat_pars_fragment:PA,iridescence_pars_fragment:DA,opaque_fragment:LA,packing:IA,premultiplied_alpha_fragment:UA,project_vertex:NA,dithering_fragment:OA,dithering_pars_fragment:FA,roughnessmap_fragment:BA,roughnessmap_pars_fragment:zA,shadowmap_pars_fragment:kA,shadowmap_pars_vertex:HA,shadowmap_vertex:VA,shadowmask_pars_fragment:GA,skinbase_vertex:WA,skinning_pars_vertex:XA,skinning_vertex:qA,skinnormal_vertex:YA,specularmap_fragment:ZA,specularmap_pars_fragment:KA,tonemapping_fragment:$A,tonemapping_pars_fragment:jA,transmission_fragment:JA,transmission_pars_fragment:QA,uv_pars_fragment:tw,uv_pars_vertex:ew,uv_vertex:nw,worldpos_vertex:iw,background_vert:rw,background_frag:sw,backgroundCube_vert:aw,backgroundCube_frag:ow,cube_vert:lw,cube_frag:cw,depth_vert:uw,depth_frag:hw,distanceRGBA_vert:fw,distanceRGBA_frag:dw,equirect_vert:pw,equirect_frag:mw,linedashed_vert:_w,linedashed_frag:gw,meshbasic_vert:vw,meshbasic_frag:xw,meshlambert_vert:yw,meshlambert_frag:Mw,meshmatcap_vert:Sw,meshmatcap_frag:Ew,meshnormal_vert:bw,meshnormal_frag:Tw,meshphong_vert:Aw,meshphong_frag:ww,meshphysical_vert:Rw,meshphysical_frag:Cw,meshtoon_vert:Pw,meshtoon_frag:Dw,points_vert:Lw,points_frag:Iw,shadow_vert:Uw,shadow_frag:Nw,sprite_vert:Ow,sprite_frag:Fw},wt={common:{diffuse:{value:new Yt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new oe},alphaMap:{value:null},alphaMapTransform:{value:new oe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new oe}},envmap:{envMap:{value:null},envMapRotation:{value:new oe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new oe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new oe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new oe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new oe},normalScale:{value:new Wt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new oe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new oe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new oe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new oe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Yt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Yt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new oe},alphaTest:{value:0},uvTransform:{value:new oe}},sprite:{diffuse:{value:new Yt(16777215)},opacity:{value:1},center:{value:new Wt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new oe},alphaMap:{value:null},alphaMapTransform:{value:new oe},alphaTest:{value:0}}},bi={basic:{uniforms:wn([wt.common,wt.specularmap,wt.envmap,wt.aomap,wt.lightmap,wt.fog]),vertexShader:fe.meshbasic_vert,fragmentShader:fe.meshbasic_frag},lambert:{uniforms:wn([wt.common,wt.specularmap,wt.envmap,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.fog,wt.lights,{emissive:{value:new Yt(0)}}]),vertexShader:fe.meshlambert_vert,fragmentShader:fe.meshlambert_frag},phong:{uniforms:wn([wt.common,wt.specularmap,wt.envmap,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.fog,wt.lights,{emissive:{value:new Yt(0)},specular:{value:new Yt(1118481)},shininess:{value:30}}]),vertexShader:fe.meshphong_vert,fragmentShader:fe.meshphong_frag},standard:{uniforms:wn([wt.common,wt.envmap,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.roughnessmap,wt.metalnessmap,wt.fog,wt.lights,{emissive:{value:new Yt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:fe.meshphysical_vert,fragmentShader:fe.meshphysical_frag},toon:{uniforms:wn([wt.common,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.gradientmap,wt.fog,wt.lights,{emissive:{value:new Yt(0)}}]),vertexShader:fe.meshtoon_vert,fragmentShader:fe.meshtoon_frag},matcap:{uniforms:wn([wt.common,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.fog,{matcap:{value:null}}]),vertexShader:fe.meshmatcap_vert,fragmentShader:fe.meshmatcap_frag},points:{uniforms:wn([wt.points,wt.fog]),vertexShader:fe.points_vert,fragmentShader:fe.points_frag},dashed:{uniforms:wn([wt.common,wt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:fe.linedashed_vert,fragmentShader:fe.linedashed_frag},depth:{uniforms:wn([wt.common,wt.displacementmap]),vertexShader:fe.depth_vert,fragmentShader:fe.depth_frag},normal:{uniforms:wn([wt.common,wt.bumpmap,wt.normalmap,wt.displacementmap,{opacity:{value:1}}]),vertexShader:fe.meshnormal_vert,fragmentShader:fe.meshnormal_frag},sprite:{uniforms:wn([wt.sprite,wt.fog]),vertexShader:fe.sprite_vert,fragmentShader:fe.sprite_frag},background:{uniforms:{uvTransform:{value:new oe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:fe.background_vert,fragmentShader:fe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new oe}},vertexShader:fe.backgroundCube_vert,fragmentShader:fe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:fe.cube_vert,fragmentShader:fe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:fe.equirect_vert,fragmentShader:fe.equirect_frag},distanceRGBA:{uniforms:wn([wt.common,wt.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:fe.distanceRGBA_vert,fragmentShader:fe.distanceRGBA_frag},shadow:{uniforms:wn([wt.lights,wt.fog,{color:{value:new Yt(0)},opacity:{value:1}}]),vertexShader:fe.shadow_vert,fragmentShader:fe.shadow_frag}};bi.physical={uniforms:wn([bi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new oe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new oe},clearcoatNormalScale:{value:new Wt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new oe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new oe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new oe},sheen:{value:0},sheenColor:{value:new Yt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new oe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new oe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new oe},transmissionSamplerSize:{value:new Wt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new oe},attenuationDistance:{value:0},attenuationColor:{value:new Yt(0)},specularColor:{value:new Yt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new oe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new oe},anisotropyVector:{value:new Wt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new oe}}]),vertexShader:fe.meshphysical_vert,fragmentShader:fe.meshphysical_frag};const ul={r:0,b:0,g:0},Br=new Yn,Bw=new ze;function zw(n,t,e,i,s,o,l){const u=new Yt(0);let f=o===!0?0:1,h,p,m=null,g=0,v=null;function M(D){let w=D.isScene===!0?D.background:null;return w&&w.isTexture&&(w=(D.backgroundBlurriness>0?e:t).get(w)),w}function b(D){let w=!1;const B=M(D);B===null?_(u,f):B&&B.isColor&&(_(B,1),w=!0);const F=n.xr.getEnvironmentBlendMode();F==="additive"?i.buffers.color.setClear(0,0,0,1,l):F==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,l),(n.autoClear||w)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function x(D,w){const B=M(w);B&&(B.isCubeTexture||B.mapping===Al)?(p===void 0&&(p=new oi(new js(1,1,1),new Ri({name:"BackgroundCubeMaterial",uniforms:Zs(bi.backgroundCube.uniforms),vertexShader:bi.backgroundCube.vertexShader,fragmentShader:bi.backgroundCube.fragmentShader,side:On,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(F,N,Y){this.matrixWorld.copyPosition(Y.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(p)),Br.copy(w.backgroundRotation),Br.x*=-1,Br.y*=-1,Br.z*=-1,B.isCubeTexture&&B.isRenderTargetTexture===!1&&(Br.y*=-1,Br.z*=-1),p.material.uniforms.envMap.value=B,p.material.uniforms.flipEnvMap.value=B.isCubeTexture&&B.isRenderTargetTexture===!1?-1:1,p.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(Bw.makeRotationFromEuler(Br)),p.material.toneMapped=Te.getTransfer(B.colorSpace)!==Fe,(m!==B||g!==B.version||v!==n.toneMapping)&&(p.material.needsUpdate=!0,m=B,g=B.version,v=n.toneMapping),p.layers.enableAll(),D.unshift(p,p.geometry,p.material,0,0,null)):B&&B.isTexture&&(h===void 0&&(h=new oi(new Ha(2,2),new Ri({name:"BackgroundMaterial",uniforms:Zs(bi.background.uniforms),vertexShader:bi.background.vertexShader,fragmentShader:bi.background.fragmentShader,side:xr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(h)),h.material.uniforms.t2D.value=B,h.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,h.material.toneMapped=Te.getTransfer(B.colorSpace)!==Fe,B.matrixAutoUpdate===!0&&B.updateMatrix(),h.material.uniforms.uvTransform.value.copy(B.matrix),(m!==B||g!==B.version||v!==n.toneMapping)&&(h.material.needsUpdate=!0,m=B,g=B.version,v=n.toneMapping),h.layers.enableAll(),D.unshift(h,h.geometry,h.material,0,0,null))}function _(D,w){D.getRGB(ul,a_(n)),i.buffers.color.setClear(ul.r,ul.g,ul.b,w,l)}function I(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0)}return{getClearColor:function(){return u},setClearColor:function(D,w=1){u.set(D),f=w,_(u,f)},getClearAlpha:function(){return f},setClearAlpha:function(D){f=D,_(u,f)},render:b,addToRenderList:x,dispose:I}}function kw(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=g(null);let o=s,l=!1;function u(R,z,$,Z,ot){let it=!1;const lt=m(Z,$,z);o!==lt&&(o=lt,h(o.object)),it=v(R,Z,$,ot),it&&M(R,Z,$,ot),ot!==null&&t.update(ot,n.ELEMENT_ARRAY_BUFFER),(it||l)&&(l=!1,w(R,z,$,Z),ot!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(ot).buffer))}function f(){return n.createVertexArray()}function h(R){return n.bindVertexArray(R)}function p(R){return n.deleteVertexArray(R)}function m(R,z,$){const Z=$.wireframe===!0;let ot=i[R.id];ot===void 0&&(ot={},i[R.id]=ot);let it=ot[z.id];it===void 0&&(it={},ot[z.id]=it);let lt=it[Z];return lt===void 0&&(lt=g(f()),it[Z]=lt),lt}function g(R){const z=[],$=[],Z=[];for(let ot=0;ot<e;ot++)z[ot]=0,$[ot]=0,Z[ot]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:$,attributeDivisors:Z,object:R,attributes:{},index:null}}function v(R,z,$,Z){const ot=o.attributes,it=z.attributes;let lt=0;const ft=$.getAttributes();for(const Q in ft)if(ft[Q].location>=0){const Rt=ot[Q];let It=it[Q];if(It===void 0&&(Q==="instanceMatrix"&&R.instanceMatrix&&(It=R.instanceMatrix),Q==="instanceColor"&&R.instanceColor&&(It=R.instanceColor)),Rt===void 0||Rt.attribute!==It||It&&Rt.data!==It.data)return!0;lt++}return o.attributesNum!==lt||o.index!==Z}function M(R,z,$,Z){const ot={},it=z.attributes;let lt=0;const ft=$.getAttributes();for(const Q in ft)if(ft[Q].location>=0){let Rt=it[Q];Rt===void 0&&(Q==="instanceMatrix"&&R.instanceMatrix&&(Rt=R.instanceMatrix),Q==="instanceColor"&&R.instanceColor&&(Rt=R.instanceColor));const It={};It.attribute=Rt,Rt&&Rt.data&&(It.data=Rt.data),ot[Q]=It,lt++}o.attributes=ot,o.attributesNum=lt,o.index=Z}function b(){const R=o.newAttributes;for(let z=0,$=R.length;z<$;z++)R[z]=0}function x(R){_(R,0)}function _(R,z){const $=o.newAttributes,Z=o.enabledAttributes,ot=o.attributeDivisors;$[R]=1,Z[R]===0&&(n.enableVertexAttribArray(R),Z[R]=1),ot[R]!==z&&(n.vertexAttribDivisor(R,z),ot[R]=z)}function I(){const R=o.newAttributes,z=o.enabledAttributes;for(let $=0,Z=z.length;$<Z;$++)z[$]!==R[$]&&(n.disableVertexAttribArray($),z[$]=0)}function D(R,z,$,Z,ot,it,lt){lt===!0?n.vertexAttribIPointer(R,z,$,ot,it):n.vertexAttribPointer(R,z,$,Z,ot,it)}function w(R,z,$,Z){b();const ot=Z.attributes,it=$.getAttributes(),lt=z.defaultAttributeValues;for(const ft in it){const Q=it[ft];if(Q.location>=0){let Et=ot[ft];if(Et===void 0&&(ft==="instanceMatrix"&&R.instanceMatrix&&(Et=R.instanceMatrix),ft==="instanceColor"&&R.instanceColor&&(Et=R.instanceColor)),Et!==void 0){const Rt=Et.normalized,It=Et.itemSize,le=t.get(Et);if(le===void 0)continue;const we=le.buffer,Ne=le.type,de=le.bytesPerElement,rt=Ne===n.INT||Ne===n.UNSIGNED_INT||Et.gpuType===Ch;if(Et.isInterleavedBufferAttribute){const pt=Et.data,Pt=pt.stride,Zt=Et.offset;if(pt.isInstancedInterleavedBuffer){for(let Gt=0;Gt<Q.locationSize;Gt++)_(Q.location+Gt,pt.meshPerAttribute);R.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=pt.meshPerAttribute*pt.count)}else for(let Gt=0;Gt<Q.locationSize;Gt++)x(Q.location+Gt);n.bindBuffer(n.ARRAY_BUFFER,we);for(let Gt=0;Gt<Q.locationSize;Gt++)D(Q.location+Gt,It/Q.locationSize,Ne,Rt,Pt*de,(Zt+It/Q.locationSize*Gt)*de,rt)}else{if(Et.isInstancedBufferAttribute){for(let pt=0;pt<Q.locationSize;pt++)_(Q.location+pt,Et.meshPerAttribute);R.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=Et.meshPerAttribute*Et.count)}else for(let pt=0;pt<Q.locationSize;pt++)x(Q.location+pt);n.bindBuffer(n.ARRAY_BUFFER,we);for(let pt=0;pt<Q.locationSize;pt++)D(Q.location+pt,It/Q.locationSize,Ne,Rt,It*de,It/Q.locationSize*pt*de,rt)}}else if(lt!==void 0){const Rt=lt[ft];if(Rt!==void 0)switch(Rt.length){case 2:n.vertexAttrib2fv(Q.location,Rt);break;case 3:n.vertexAttrib3fv(Q.location,Rt);break;case 4:n.vertexAttrib4fv(Q.location,Rt);break;default:n.vertexAttrib1fv(Q.location,Rt)}}}}I()}function B(){Y();for(const R in i){const z=i[R];for(const $ in z){const Z=z[$];for(const ot in Z)p(Z[ot].object),delete Z[ot];delete z[$]}delete i[R]}}function F(R){if(i[R.id]===void 0)return;const z=i[R.id];for(const $ in z){const Z=z[$];for(const ot in Z)p(Z[ot].object),delete Z[ot];delete z[$]}delete i[R.id]}function N(R){for(const z in i){const $=i[z];if($[R.id]===void 0)continue;const Z=$[R.id];for(const ot in Z)p(Z[ot].object),delete Z[ot];delete $[R.id]}}function Y(){C(),l=!0,o!==s&&(o=s,h(o.object))}function C(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:u,reset:Y,resetDefaultState:C,dispose:B,releaseStatesOfGeometry:F,releaseStatesOfProgram:N,initAttributes:b,enableAttribute:x,disableUnusedAttributes:I}}function Hw(n,t,e){let i;function s(h){i=h}function o(h,p){n.drawArrays(i,h,p),e.update(p,i,1)}function l(h,p,m){m!==0&&(n.drawArraysInstanced(i,h,p,m),e.update(p,i,m))}function u(h,p,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,h,0,p,0,m);let v=0;for(let M=0;M<m;M++)v+=p[M];e.update(v,i,1)}function f(h,p,m,g){if(m===0)return;const v=t.get("WEBGL_multi_draw");if(v===null)for(let M=0;M<h.length;M++)l(h[M],p[M],g[M]);else{v.multiDrawArraysInstancedWEBGL(i,h,0,p,0,g,0,m);let M=0;for(let b=0;b<m;b++)M+=p[b]*g[b];e.update(M,i,1)}}this.setMode=s,this.render=o,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function Vw(n,t,e,i){let s;function o(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const N=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(N.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function l(N){return!(N!==yi&&i.convert(N)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function u(N){const Y=N===za&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(N!==wi&&i.convert(N)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&N!==xi&&!Y)}function f(N){if(N==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";N="mediump"}return N==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=e.precision!==void 0?e.precision:"highp";const p=f(h);p!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",p,"instead."),h=p);const m=e.logarithmicDepthBuffer===!0,g=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),v=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),M=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=n.getParameter(n.MAX_TEXTURE_SIZE),x=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),_=n.getParameter(n.MAX_VERTEX_ATTRIBS),I=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),D=n.getParameter(n.MAX_VARYING_VECTORS),w=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),B=M>0,F=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:f,textureFormatReadable:l,textureTypeReadable:u,precision:h,logarithmicDepthBuffer:m,reversedDepthBuffer:g,maxTextures:v,maxVertexTextures:M,maxTextureSize:b,maxCubemapSize:x,maxAttributes:_,maxVertexUniforms:I,maxVaryings:D,maxFragmentUniforms:w,vertexTextures:B,maxSamples:F}}function Gw(n){const t=this;let e=null,i=0,s=!1,o=!1;const l=new dr,u=new oe,f={value:null,needsUpdate:!1};this.uniform=f,this.numPlanes=0,this.numIntersection=0,this.init=function(m,g){const v=m.length!==0||g||i!==0||s;return s=g,i=m.length,v},this.beginShadows=function(){o=!0,p(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(m,g){e=p(m,g,0)},this.setState=function(m,g,v){const M=m.clippingPlanes,b=m.clipIntersection,x=m.clipShadows,_=n.get(m);if(!s||M===null||M.length===0||o&&!x)o?p(null):h();else{const I=o?0:i,D=I*4;let w=_.clippingState||null;f.value=w,w=p(M,g,D,v);for(let B=0;B!==D;++B)w[B]=e[B];_.clippingState=w,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=I}};function h(){f.value!==e&&(f.value=e,f.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function p(m,g,v,M){const b=m!==null?m.length:0;let x=null;if(b!==0){if(x=f.value,M!==!0||x===null){const _=v+b*4,I=g.matrixWorldInverse;u.getNormalMatrix(I),(x===null||x.length<_)&&(x=new Float32Array(_));for(let D=0,w=v;D!==b;++D,w+=4)l.copy(m[D]).applyMatrix4(I,u),l.normal.toArray(x,w),x[w+3]=l.constant}f.value=x,f.needsUpdate=!0}return t.numPlanes=b,t.numIntersection=0,x}}function Ww(n){let t=new WeakMap;function e(l,u){return u===Vu?l.mapping=Xs:u===Gu&&(l.mapping=qs),l}function i(l){if(l&&l.isTexture){const u=l.mapping;if(u===Vu||u===Gu)if(t.has(l)){const f=t.get(l).texture;return e(f,l.mapping)}else{const f=l.image;if(f&&f.height>0){const h=new xb(f.height);return h.fromEquirectangularTexture(n,l),t.set(l,h),l.addEventListener("dispose",s),e(h.texture,l.mapping)}else return null}}return l}function s(l){const u=l.target;u.removeEventListener("dispose",s);const f=t.get(u);f!==void 0&&(t.delete(u),f.dispose())}function o(){t=new WeakMap}return{get:i,dispose:o}}const zs=4,lm=[.125,.215,.35,.446,.526,.582],Vr=20,Mu=new g_,cm=new Yt;let Su=null,Eu=0,bu=0,Tu=!1;const kr=(1+Math.sqrt(5))/2,Fs=1/kr,um=[new V(-kr,Fs,0),new V(kr,Fs,0),new V(-Fs,0,kr),new V(Fs,0,kr),new V(0,kr,-Fs),new V(0,kr,Fs),new V(-1,1,-1),new V(1,1,-1),new V(-1,1,1),new V(1,1,1)],Xw=new V;class hm{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100,o={}){const{size:l=256,position:u=Xw}=o;Su=this._renderer.getRenderTarget(),Eu=this._renderer.getActiveCubeFace(),bu=this._renderer.getActiveMipmapLevel(),Tu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(l);const f=this._allocateTargets();return f.depthBuffer=!0,this._sceneToCubeUV(t,i,s,f,u),e>0&&this._blur(f,0,0,e),this._applyPMREM(f),this._cleanup(f),f}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=pm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=dm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Su,Eu,bu),this._renderer.xr.enabled=Tu,t.scissorTest=!1,hl(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Xs||t.mapping===qs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Su=this._renderer.getRenderTarget(),Eu=this._renderer.getActiveCubeFace(),bu=this._renderer.getActiveMipmapLevel(),Tu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Ti,minFilter:Ti,generateMipmaps:!1,type:za,format:yi,colorSpace:Ys,depthBuffer:!1},s=fm(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=fm(t,e,i);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=qw(o)),this._blurMaterial=Yw(o,t,e)}return s}_compileMaterial(t){const e=new oi(this._lodPlanes[0],t);this._renderer.compile(e,Mu)}_sceneToCubeUV(t,e,i,s,o){const f=new si(90,1,e,i),h=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],m=this._renderer,g=m.autoClear,v=m.toneMapping;m.getClearColor(cm),m.toneMapping=gr,m.autoClear=!1,m.state.buffers.depth.getReversed()&&(m.setRenderTarget(s),m.clearDepth(),m.setRenderTarget(null));const b=new Bh({name:"PMREM.Background",side:On,depthWrite:!1,depthTest:!1}),x=new oi(new js,b);let _=!1;const I=t.background;I?I.isColor&&(b.color.copy(I),t.background=null,_=!0):(b.color.copy(cm),_=!0);for(let D=0;D<6;D++){const w=D%3;w===0?(f.up.set(0,h[D],0),f.position.set(o.x,o.y,o.z),f.lookAt(o.x+p[D],o.y,o.z)):w===1?(f.up.set(0,0,h[D]),f.position.set(o.x,o.y,o.z),f.lookAt(o.x,o.y+p[D],o.z)):(f.up.set(0,h[D],0),f.position.set(o.x,o.y,o.z),f.lookAt(o.x,o.y,o.z+p[D]));const B=this._cubeSize;hl(s,w*B,D>2?B:0,B,B),m.setRenderTarget(s),_&&m.render(x,f),m.render(t,f)}x.geometry.dispose(),x.material.dispose(),m.toneMapping=v,m.autoClear=g,t.background=I}_textureToCubeUV(t,e){const i=this._renderer,s=t.mapping===Xs||t.mapping===qs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=pm()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=dm());const o=s?this._cubemapMaterial:this._equirectMaterial,l=new oi(this._lodPlanes[0],o),u=o.uniforms;u.envMap.value=t;const f=this._cubeSize;hl(e,0,0,3*f,2*f),i.setRenderTarget(e),i.render(l,Mu)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let o=1;o<s;o++){const l=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),u=um[(s-o-1)%um.length];this._blur(t,o-1,o,l,u)}e.autoClear=i}_blur(t,e,i,s,o){const l=this._pingPongRenderTarget;this._halfBlur(t,l,e,i,s,"latitudinal",o),this._halfBlur(l,t,i,i,s,"longitudinal",o)}_halfBlur(t,e,i,s,o,l,u){const f=this._renderer,h=this._blurMaterial;l!=="latitudinal"&&l!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const p=3,m=new oi(this._lodPlanes[s],h),g=h.uniforms,v=this._sizeLods[i]-1,M=isFinite(o)?Math.PI/(2*v):2*Math.PI/(2*Vr-1),b=o/M,x=isFinite(o)?1+Math.floor(p*b):Vr;x>Vr&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${Vr}`);const _=[];let I=0;for(let N=0;N<Vr;++N){const Y=N/b,C=Math.exp(-Y*Y/2);_.push(C),N===0?I+=C:N<x&&(I+=2*C)}for(let N=0;N<_.length;N++)_[N]=_[N]/I;g.envMap.value=t.texture,g.samples.value=x,g.weights.value=_,g.latitudinal.value=l==="latitudinal",u&&(g.poleAxis.value=u);const{_lodMax:D}=this;g.dTheta.value=M,g.mipInt.value=D-i;const w=this._sizeLods[s],B=3*w*(s>D-zs?s-D+zs:0),F=4*(this._cubeSize-w);hl(e,B,F,3*w,2*w),f.setRenderTarget(e),f.render(m,Mu)}}function qw(n){const t=[],e=[],i=[];let s=n;const o=n-zs+1+lm.length;for(let l=0;l<o;l++){const u=Math.pow(2,s);e.push(u);let f=1/u;l>n-zs?f=lm[l-n+zs-1]:l===0&&(f=0),i.push(f);const h=1/(u-2),p=-h,m=1+h,g=[p,p,m,p,m,m,p,p,m,m,p,m],v=6,M=6,b=3,x=2,_=1,I=new Float32Array(b*M*v),D=new Float32Array(x*M*v),w=new Float32Array(_*M*v);for(let F=0;F<v;F++){const N=F%3*2/3-1,Y=F>2?0:-1,C=[N,Y,0,N+2/3,Y,0,N+2/3,Y+1,0,N,Y,0,N+2/3,Y+1,0,N,Y+1,0];I.set(C,b*M*F),D.set(g,x*M*F);const R=[F,F,F,F,F,F];w.set(R,_*M*F)}const B=new Fn;B.setAttribute("position",new Rn(I,b)),B.setAttribute("uv",new Rn(D,x)),B.setAttribute("faceIndex",new Rn(w,_)),t.push(B),s>zs&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function fm(n,t,e){const i=new Zr(n,t,e);return i.texture.mapping=Al,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function hl(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function Yw(n,t,e){const i=new Float32Array(Vr),s=new V(0,1,0);return new Ri({name:"SphericalGaussianBlur",defines:{n:Vr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Xh(),fragmentShader:`

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
		`,blending:_r,depthTest:!1,depthWrite:!1})}function dm(){return new Ri({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Xh(),fragmentShader:`

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
		`,blending:_r,depthTest:!1,depthWrite:!1})}function pm(){return new Ri({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Xh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:_r,depthTest:!1,depthWrite:!1})}function Xh(){return`

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
	`}function Zw(n){let t=new WeakMap,e=null;function i(u){if(u&&u.isTexture){const f=u.mapping,h=f===Vu||f===Gu,p=f===Xs||f===qs;if(h||p){let m=t.get(u);const g=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==g)return e===null&&(e=new hm(n)),m=h?e.fromEquirectangular(u,m):e.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),m.texture;if(m!==void 0)return m.texture;{const v=u.image;return h&&v&&v.height>0||p&&v&&s(v)?(e===null&&(e=new hm(n)),m=h?e.fromEquirectangular(u):e.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),u.addEventListener("dispose",o),m.texture):null}}}return u}function s(u){let f=0;const h=6;for(let p=0;p<h;p++)u[p]!==void 0&&f++;return f===h}function o(u){const f=u.target;f.removeEventListener("dispose",o);const h=t.get(f);h!==void 0&&(t.delete(f),h.dispose())}function l(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:l}}function Kw(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const s=e(i);return s===null&&Ba("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function $w(n,t,e,i){const s={},o=new WeakMap;function l(m){const g=m.target;g.index!==null&&t.remove(g.index);for(const M in g.attributes)t.remove(g.attributes[M]);g.removeEventListener("dispose",l),delete s[g.id];const v=o.get(g);v&&(t.remove(v),o.delete(g)),i.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,e.memory.geometries--}function u(m,g){return s[g.id]===!0||(g.addEventListener("dispose",l),s[g.id]=!0,e.memory.geometries++),g}function f(m){const g=m.attributes;for(const v in g)t.update(g[v],n.ARRAY_BUFFER)}function h(m){const g=[],v=m.index,M=m.attributes.position;let b=0;if(v!==null){const I=v.array;b=v.version;for(let D=0,w=I.length;D<w;D+=3){const B=I[D+0],F=I[D+1],N=I[D+2];g.push(B,F,F,N,N,B)}}else if(M!==void 0){const I=M.array;b=M.version;for(let D=0,w=I.length/3-1;D<w;D+=3){const B=D+0,F=D+1,N=D+2;g.push(B,F,F,N,N,B)}}else return;const x=new(t_(g)?s_:r_)(g,1);x.version=b;const _=o.get(m);_&&t.remove(_),o.set(m,x)}function p(m){const g=o.get(m);if(g){const v=m.index;v!==null&&g.version<v.version&&h(m)}else h(m);return o.get(m)}return{get:u,update:f,getWireframeAttribute:p}}function jw(n,t,e){let i;function s(g){i=g}let o,l;function u(g){o=g.type,l=g.bytesPerElement}function f(g,v){n.drawElements(i,v,o,g*l),e.update(v,i,1)}function h(g,v,M){M!==0&&(n.drawElementsInstanced(i,v,o,g*l,M),e.update(v,i,M))}function p(g,v,M){if(M===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,v,0,o,g,0,M);let x=0;for(let _=0;_<M;_++)x+=v[_];e.update(x,i,1)}function m(g,v,M,b){if(M===0)return;const x=t.get("WEBGL_multi_draw");if(x===null)for(let _=0;_<g.length;_++)h(g[_]/l,v[_],b[_]);else{x.multiDrawElementsInstancedWEBGL(i,v,0,o,g,0,b,0,M);let _=0;for(let I=0;I<M;I++)_+=v[I]*b[I];e.update(_,i,1)}}this.setMode=s,this.setIndex=u,this.render=f,this.renderInstances=h,this.renderMultiDraw=p,this.renderMultiDrawInstances=m}function Jw(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,l,u){switch(e.calls++,l){case n.TRIANGLES:e.triangles+=u*(o/3);break;case n.LINES:e.lines+=u*(o/2);break;case n.LINE_STRIP:e.lines+=u*(o-1);break;case n.LINE_LOOP:e.lines+=u*o;break;case n.POINTS:e.points+=u*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",l);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function Qw(n,t,e){const i=new WeakMap,s=new Ke;function o(l,u,f){const h=l.morphTargetInfluences,p=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,m=p!==void 0?p.length:0;let g=i.get(u);if(g===void 0||g.count!==m){let R=function(){Y.dispose(),i.delete(u),u.removeEventListener("dispose",R)};var v=R;g!==void 0&&g.texture.dispose();const M=u.morphAttributes.position!==void 0,b=u.morphAttributes.normal!==void 0,x=u.morphAttributes.color!==void 0,_=u.morphAttributes.position||[],I=u.morphAttributes.normal||[],D=u.morphAttributes.color||[];let w=0;M===!0&&(w=1),b===!0&&(w=2),x===!0&&(w=3);let B=u.attributes.position.count*w,F=1;B>t.maxTextureSize&&(F=Math.ceil(B/t.maxTextureSize),B=t.maxTextureSize);const N=new Float32Array(B*F*4*m),Y=new e_(N,B,F,m);Y.type=xi,Y.needsUpdate=!0;const C=w*4;for(let z=0;z<m;z++){const $=_[z],Z=I[z],ot=D[z],it=B*F*4*z;for(let lt=0;lt<$.count;lt++){const ft=lt*C;M===!0&&(s.fromBufferAttribute($,lt),N[it+ft+0]=s.x,N[it+ft+1]=s.y,N[it+ft+2]=s.z,N[it+ft+3]=0),b===!0&&(s.fromBufferAttribute(Z,lt),N[it+ft+4]=s.x,N[it+ft+5]=s.y,N[it+ft+6]=s.z,N[it+ft+7]=0),x===!0&&(s.fromBufferAttribute(ot,lt),N[it+ft+8]=s.x,N[it+ft+9]=s.y,N[it+ft+10]=s.z,N[it+ft+11]=ot.itemSize===4?s.w:1)}}g={count:m,texture:Y,size:new Wt(B,F)},i.set(u,g),u.addEventListener("dispose",R)}if(l.isInstancedMesh===!0&&l.morphTexture!==null)f.getUniforms().setValue(n,"morphTexture",l.morphTexture,e);else{let M=0;for(let x=0;x<h.length;x++)M+=h[x];const b=u.morphTargetsRelative?1:1-M;f.getUniforms().setValue(n,"morphTargetBaseInfluence",b),f.getUniforms().setValue(n,"morphTargetInfluences",h)}f.getUniforms().setValue(n,"morphTargetsTexture",g.texture,e),f.getUniforms().setValue(n,"morphTargetsTextureSize",g.size)}return{update:o}}function t1(n,t,e,i){let s=new WeakMap;function o(f){const h=i.render.frame,p=f.geometry,m=t.get(f,p);if(s.get(m)!==h&&(t.update(m),s.set(m,h)),f.isInstancedMesh&&(f.hasEventListener("dispose",u)===!1&&f.addEventListener("dispose",u),s.get(f)!==h&&(e.update(f.instanceMatrix,n.ARRAY_BUFFER),f.instanceColor!==null&&e.update(f.instanceColor,n.ARRAY_BUFFER),s.set(f,h))),f.isSkinnedMesh){const g=f.skeleton;s.get(g)!==h&&(g.update(),s.set(g,h))}return m}function l(){s=new WeakMap}function u(f){const h=f.target;h.removeEventListener("dispose",u),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:l}}const x_=new Qe,mm=new f_(1,1),y_=new e_,M_=new nb,S_=new l_,_m=[],gm=[],vm=new Float32Array(16),xm=new Float32Array(9),ym=new Float32Array(4);function Js(n,t,e){const i=n[0];if(i<=0||i>0)return n;const s=t*e;let o=_m[s];if(o===void 0&&(o=new Float32Array(s),_m[s]=o),t!==0){i.toArray(o,0);for(let l=1,u=0;l!==t;++l)u+=e,n[l].toArray(o,u)}return o}function an(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function on(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Cl(n,t){let e=gm[t];e===void 0&&(e=new Int32Array(t),gm[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function e1(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function n1(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(an(e,t))return;n.uniform2fv(this.addr,t),on(e,t)}}function i1(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(an(e,t))return;n.uniform3fv(this.addr,t),on(e,t)}}function r1(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(an(e,t))return;n.uniform4fv(this.addr,t),on(e,t)}}function s1(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(an(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),on(e,t)}else{if(an(e,i))return;ym.set(i),n.uniformMatrix2fv(this.addr,!1,ym),on(e,i)}}function a1(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(an(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),on(e,t)}else{if(an(e,i))return;xm.set(i),n.uniformMatrix3fv(this.addr,!1,xm),on(e,i)}}function o1(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(an(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),on(e,t)}else{if(an(e,i))return;vm.set(i),n.uniformMatrix4fv(this.addr,!1,vm),on(e,i)}}function l1(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function c1(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(an(e,t))return;n.uniform2iv(this.addr,t),on(e,t)}}function u1(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(an(e,t))return;n.uniform3iv(this.addr,t),on(e,t)}}function h1(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(an(e,t))return;n.uniform4iv(this.addr,t),on(e,t)}}function f1(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function d1(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(an(e,t))return;n.uniform2uiv(this.addr,t),on(e,t)}}function p1(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(an(e,t))return;n.uniform3uiv(this.addr,t),on(e,t)}}function m1(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(an(e,t))return;n.uniform4uiv(this.addr,t),on(e,t)}}function _1(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let o;this.type===n.SAMPLER_2D_SHADOW?(mm.compareFunction=Jm,o=mm):o=x_,e.setTexture2D(t||o,s)}function g1(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||M_,s)}function v1(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||S_,s)}function x1(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||y_,s)}function y1(n){switch(n){case 5126:return e1;case 35664:return n1;case 35665:return i1;case 35666:return r1;case 35674:return s1;case 35675:return a1;case 35676:return o1;case 5124:case 35670:return l1;case 35667:case 35671:return c1;case 35668:case 35672:return u1;case 35669:case 35673:return h1;case 5125:return f1;case 36294:return d1;case 36295:return p1;case 36296:return m1;case 35678:case 36198:case 36298:case 36306:case 35682:return _1;case 35679:case 36299:case 36307:return g1;case 35680:case 36300:case 36308:case 36293:return v1;case 36289:case 36303:case 36311:case 36292:return x1}}function M1(n,t){n.uniform1fv(this.addr,t)}function S1(n,t){const e=Js(t,this.size,2);n.uniform2fv(this.addr,e)}function E1(n,t){const e=Js(t,this.size,3);n.uniform3fv(this.addr,e)}function b1(n,t){const e=Js(t,this.size,4);n.uniform4fv(this.addr,e)}function T1(n,t){const e=Js(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function A1(n,t){const e=Js(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function w1(n,t){const e=Js(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function R1(n,t){n.uniform1iv(this.addr,t)}function C1(n,t){n.uniform2iv(this.addr,t)}function P1(n,t){n.uniform3iv(this.addr,t)}function D1(n,t){n.uniform4iv(this.addr,t)}function L1(n,t){n.uniform1uiv(this.addr,t)}function I1(n,t){n.uniform2uiv(this.addr,t)}function U1(n,t){n.uniform3uiv(this.addr,t)}function N1(n,t){n.uniform4uiv(this.addr,t)}function O1(n,t,e){const i=this.cache,s=t.length,o=Cl(e,s);an(i,o)||(n.uniform1iv(this.addr,o),on(i,o));for(let l=0;l!==s;++l)e.setTexture2D(t[l]||x_,o[l])}function F1(n,t,e){const i=this.cache,s=t.length,o=Cl(e,s);an(i,o)||(n.uniform1iv(this.addr,o),on(i,o));for(let l=0;l!==s;++l)e.setTexture3D(t[l]||M_,o[l])}function B1(n,t,e){const i=this.cache,s=t.length,o=Cl(e,s);an(i,o)||(n.uniform1iv(this.addr,o),on(i,o));for(let l=0;l!==s;++l)e.setTextureCube(t[l]||S_,o[l])}function z1(n,t,e){const i=this.cache,s=t.length,o=Cl(e,s);an(i,o)||(n.uniform1iv(this.addr,o),on(i,o));for(let l=0;l!==s;++l)e.setTexture2DArray(t[l]||y_,o[l])}function k1(n){switch(n){case 5126:return M1;case 35664:return S1;case 35665:return E1;case 35666:return b1;case 35674:return T1;case 35675:return A1;case 35676:return w1;case 5124:case 35670:return R1;case 35667:case 35671:return C1;case 35668:case 35672:return P1;case 35669:case 35673:return D1;case 5125:return L1;case 36294:return I1;case 36295:return U1;case 36296:return N1;case 35678:case 36198:case 36298:case 36306:case 35682:return O1;case 35679:case 36299:case 36307:return F1;case 35680:case 36300:case 36308:case 36293:return B1;case 36289:case 36303:case 36311:case 36292:return z1}}class H1{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=y1(e.type)}}class V1{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=k1(e.type)}}class G1{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const s=this.seq;for(let o=0,l=s.length;o!==l;++o){const u=s[o];u.setValue(t,e[u.id],i)}}}const Au=/(\w+)(\])?(\[|\.)?/g;function Mm(n,t){n.seq.push(t),n.map[t.id]=t}function W1(n,t,e){const i=n.name,s=i.length;for(Au.lastIndex=0;;){const o=Au.exec(i),l=Au.lastIndex;let u=o[1];const f=o[2]==="]",h=o[3];if(f&&(u=u|0),h===void 0||h==="["&&l+2===s){Mm(e,h===void 0?new H1(u,n,t):new V1(u,n,t));break}else{let m=e.map[u];m===void 0&&(m=new G1(u),Mm(e,m)),e=m}}}class xl{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const o=t.getActiveUniform(e,s),l=t.getUniformLocation(e,o.name);W1(o,l,this)}}setValue(t,e,i,s){const o=this.map[e];o!==void 0&&o.setValue(t,i,s)}setOptional(t,e,i){const s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let o=0,l=e.length;o!==l;++o){const u=e[o],f=i[u.id];f.needsUpdate!==!1&&u.setValue(t,f.value,s)}}static seqWithValue(t,e){const i=[];for(let s=0,o=t.length;s!==o;++s){const l=t[s];l.id in e&&i.push(l)}return i}}function Sm(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const X1=37297;let q1=0;function Y1(n,t){const e=n.split(`
`),i=[],s=Math.max(t-6,0),o=Math.min(t+6,e.length);for(let l=s;l<o;l++){const u=l+1;i.push(`${u===t?">":" "} ${u}: ${e[l]}`)}return i.join(`
`)}const Em=new oe;function Z1(n){Te._getMatrix(Em,Te.workingColorSpace,n);const t=`mat3( ${Em.elements.map(e=>e.toFixed(4))} )`;switch(Te.getTransfer(n)){case yl:return[t,"LinearTransferOETF"];case Fe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function bm(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),o=(n.getShaderInfoLog(t)||"").trim();if(i&&o==="")return"";const l=/ERROR: 0:(\d+)/.exec(o);if(l){const u=parseInt(l[1]);return e.toUpperCase()+`

`+o+`

`+Y1(n.getShaderSource(t),u)}else return o}function K1(n,t){const e=Z1(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function $1(n,t){let e;switch(t){case pE:e="Linear";break;case mE:e="Reinhard";break;case _E:e="Cineon";break;case gE:e="ACESFilmic";break;case xE:e="AgX";break;case yE:e="Neutral";break;case vE:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const fl=new V;function j1(){Te.getLuminanceCoefficients(fl);const n=fl.x.toFixed(4),t=fl.y.toFixed(4),e=fl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function J1(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ta).join(`
`)}function Q1(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function tR(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const o=n.getActiveAttrib(t,s),l=o.name;let u=1;o.type===n.FLOAT_MAT2&&(u=2),o.type===n.FLOAT_MAT3&&(u=3),o.type===n.FLOAT_MAT4&&(u=4),e[l]={type:o.type,location:n.getAttribLocation(t,l),locationSize:u}}return e}function Ta(n){return n!==""}function Tm(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Am(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const eR=/^[ \t]*#include +<([\w\d./]+)>/gm;function Eh(n){return n.replace(eR,iR)}const nR=new Map;function iR(n,t){let e=fe[t];if(e===void 0){const i=nR.get(t);if(i!==void 0)e=fe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Eh(e)}const rR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function wm(n){return n.replace(rR,sR)}function sR(n,t,e,i){let s="";for(let o=parseInt(t);o<parseInt(e);o++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return s}function Rm(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}function aR(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Gm?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===YS?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===qi&&(t="SHADOWMAP_TYPE_VSM"),t}function oR(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Xs:case qs:t="ENVMAP_TYPE_CUBE";break;case Al:t="ENVMAP_TYPE_CUBE_UV";break}return t}function lR(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case qs:t="ENVMAP_MODE_REFRACTION";break}return t}function cR(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Tl:t="ENVMAP_BLENDING_MULTIPLY";break;case fE:t="ENVMAP_BLENDING_MIX";break;case dE:t="ENVMAP_BLENDING_ADD";break}return t}function uR(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function hR(n,t,e,i){const s=n.getContext(),o=e.defines;let l=e.vertexShader,u=e.fragmentShader;const f=aR(e),h=oR(e),p=lR(e),m=cR(e),g=uR(e),v=J1(e),M=Q1(o),b=s.createProgram();let x,_,I=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(x=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,M].filter(Ta).join(`
`),x.length>0&&(x+=`
`),_=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,M].filter(Ta).join(`
`),_.length>0&&(_+=`
`)):(x=[Rm(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,M,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+p:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+f:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ta).join(`
`),_=[Rm(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,M,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.envMap?"#define "+p:"",e.envMap?"#define "+m:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+f:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==gr?"#define TONE_MAPPING":"",e.toneMapping!==gr?fe.tonemapping_pars_fragment:"",e.toneMapping!==gr?$1("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",fe.colorspace_pars_fragment,K1("linearToOutputTexel",e.outputColorSpace),j1(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ta).join(`
`)),l=Eh(l),l=Tm(l,e),l=Am(l,e),u=Eh(u),u=Tm(u,e),u=Am(u,e),l=wm(l),u=wm(u),e.isRawShaderMaterial!==!0&&(I=`#version 300 es
`,x=[v,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,_=["#define varying in",e.glslVersion===Cp?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Cp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const D=I+x+l,w=I+_+u,B=Sm(s,s.VERTEX_SHADER,D),F=Sm(s,s.FRAGMENT_SHADER,w);s.attachShader(b,B),s.attachShader(b,F),e.index0AttributeName!==void 0?s.bindAttribLocation(b,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(b,0,"position"),s.linkProgram(b);function N(z){if(n.debug.checkShaderErrors){const $=s.getProgramInfoLog(b)||"",Z=s.getShaderInfoLog(B)||"",ot=s.getShaderInfoLog(F)||"",it=$.trim(),lt=Z.trim(),ft=ot.trim();let Q=!0,Et=!0;if(s.getProgramParameter(b,s.LINK_STATUS)===!1)if(Q=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,b,B,F);else{const Rt=bm(s,B,"vertex"),It=bm(s,F,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(b,s.VALIDATE_STATUS)+`

Material Name: `+z.name+`
Material Type: `+z.type+`

Program Info Log: `+it+`
`+Rt+`
`+It)}else it!==""?console.warn("THREE.WebGLProgram: Program Info Log:",it):(lt===""||ft==="")&&(Et=!1);Et&&(z.diagnostics={runnable:Q,programLog:it,vertexShader:{log:lt,prefix:x},fragmentShader:{log:ft,prefix:_}})}s.deleteShader(B),s.deleteShader(F),Y=new xl(s,b),C=tR(s,b)}let Y;this.getUniforms=function(){return Y===void 0&&N(this),Y};let C;this.getAttributes=function(){return C===void 0&&N(this),C};let R=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=s.getProgramParameter(b,X1)),R},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(b),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=q1++,this.cacheKey=t,this.usedTimes=1,this.program=b,this.vertexShader=B,this.fragmentShader=F,this}let fR=0;class dR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),o=this._getShaderStage(i),l=this._getShaderCacheForMaterial(t);return l.has(s)===!1&&(l.add(s),s.usedTimes++),l.has(o)===!1&&(l.add(o),o.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new pR(t),e.set(t,i)),i}}class pR{constructor(t){this.id=fR++,this.code=t,this.usedTimes=0}}function mR(n,t,e,i,s,o,l){const u=new n_,f=new dR,h=new Set,p=[],m=s.logarithmicDepthBuffer,g=s.vertexTextures;let v=s.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(C){return h.add(C),C===0?"uv":`uv${C}`}function x(C,R,z,$,Z){const ot=$.fog,it=Z.geometry,lt=C.isMeshStandardMaterial?$.environment:null,ft=(C.isMeshStandardMaterial?e:t).get(C.envMap||lt),Q=ft&&ft.mapping===Al?ft.image.height:null,Et=M[C.type];C.precision!==null&&(v=s.getMaxPrecision(C.precision),v!==C.precision&&console.warn("THREE.WebGLProgram.getParameters:",C.precision,"not supported, using",v,"instead."));const Rt=it.morphAttributes.position||it.morphAttributes.normal||it.morphAttributes.color,It=Rt!==void 0?Rt.length:0;let le=0;it.morphAttributes.position!==void 0&&(le=1),it.morphAttributes.normal!==void 0&&(le=2),it.morphAttributes.color!==void 0&&(le=3);let we,Ne,de,rt;if(Et){const be=bi[Et];we=be.vertexShader,Ne=be.fragmentShader}else we=C.vertexShader,Ne=C.fragmentShader,f.update(C),de=f.getVertexShaderID(C),rt=f.getFragmentShaderID(C);const pt=n.getRenderTarget(),Pt=n.state.buffers.depth.getReversed(),Zt=Z.isInstancedMesh===!0,Gt=Z.isBatchedMesh===!0,ce=!!C.map,Ye=!!C.matcap,U=!!ft,_e=!!C.aoMap,Qt=!!C.lightMap,jt=!!C.bumpMap,mt=!!C.normalMap,Ee=!!C.displacementMap,yt=!!C.emissiveMap,Kt=!!C.metalnessMap,ve=!!C.roughnessMap,De=C.anisotropy>0,P=C.clearcoat>0,S=C.dispersion>0,G=C.iridescence>0,et=C.sheen>0,ut=C.transmission>0,tt=De&&!!C.anisotropyMap,Bt=P&&!!C.clearcoatMap,gt=P&&!!C.clearcoatNormalMap,Ot=P&&!!C.clearcoatRoughnessMap,Ft=G&&!!C.iridescenceMap,_t=G&&!!C.iridescenceThicknessMap,bt=et&&!!C.sheenColorMap,Ht=et&&!!C.sheenRoughnessMap,Dt=!!C.specularMap,Tt=!!C.specularColorMap,se=!!C.specularIntensityMap,k=ut&&!!C.transmissionMap,Mt=ut&&!!C.thicknessMap,St=!!C.gradientMap,Nt=!!C.alphaMap,vt=C.alphaTest>0,ct=!!C.alphaHash,kt=!!C.extensions;let ie=gr;C.toneMapped&&(pt===null||pt.isXRRenderTarget===!0)&&(ie=n.toneMapping);const Le={shaderID:Et,shaderType:C.type,shaderName:C.name,vertexShader:we,fragmentShader:Ne,defines:C.defines,customVertexShaderID:de,customFragmentShaderID:rt,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:v,batching:Gt,batchingColor:Gt&&Z._colorsTexture!==null,instancing:Zt,instancingColor:Zt&&Z.instanceColor!==null,instancingMorph:Zt&&Z.morphTexture!==null,supportsVertexTextures:g,outputColorSpace:pt===null?n.outputColorSpace:pt.isXRRenderTarget===!0?pt.texture.colorSpace:Ys,alphaToCoverage:!!C.alphaToCoverage,map:ce,matcap:Ye,envMap:U,envMapMode:U&&ft.mapping,envMapCubeUVHeight:Q,aoMap:_e,lightMap:Qt,bumpMap:jt,normalMap:mt,displacementMap:g&&Ee,emissiveMap:yt,normalMapObjectSpace:mt&&C.normalMapType===bE,normalMapTangentSpace:mt&&C.normalMapType===$r,metalnessMap:Kt,roughnessMap:ve,anisotropy:De,anisotropyMap:tt,clearcoat:P,clearcoatMap:Bt,clearcoatNormalMap:gt,clearcoatRoughnessMap:Ot,dispersion:S,iridescence:G,iridescenceMap:Ft,iridescenceThicknessMap:_t,sheen:et,sheenColorMap:bt,sheenRoughnessMap:Ht,specularMap:Dt,specularColorMap:Tt,specularIntensityMap:se,transmission:ut,transmissionMap:k,thicknessMap:Mt,gradientMap:St,opaque:C.transparent===!1&&C.blending===Hs&&C.alphaToCoverage===!1,alphaMap:Nt,alphaTest:vt,alphaHash:ct,combine:C.combine,mapUv:ce&&b(C.map.channel),aoMapUv:_e&&b(C.aoMap.channel),lightMapUv:Qt&&b(C.lightMap.channel),bumpMapUv:jt&&b(C.bumpMap.channel),normalMapUv:mt&&b(C.normalMap.channel),displacementMapUv:Ee&&b(C.displacementMap.channel),emissiveMapUv:yt&&b(C.emissiveMap.channel),metalnessMapUv:Kt&&b(C.metalnessMap.channel),roughnessMapUv:ve&&b(C.roughnessMap.channel),anisotropyMapUv:tt&&b(C.anisotropyMap.channel),clearcoatMapUv:Bt&&b(C.clearcoatMap.channel),clearcoatNormalMapUv:gt&&b(C.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ot&&b(C.clearcoatRoughnessMap.channel),iridescenceMapUv:Ft&&b(C.iridescenceMap.channel),iridescenceThicknessMapUv:_t&&b(C.iridescenceThicknessMap.channel),sheenColorMapUv:bt&&b(C.sheenColorMap.channel),sheenRoughnessMapUv:Ht&&b(C.sheenRoughnessMap.channel),specularMapUv:Dt&&b(C.specularMap.channel),specularColorMapUv:Tt&&b(C.specularColorMap.channel),specularIntensityMapUv:se&&b(C.specularIntensityMap.channel),transmissionMapUv:k&&b(C.transmissionMap.channel),thicknessMapUv:Mt&&b(C.thicknessMap.channel),alphaMapUv:Nt&&b(C.alphaMap.channel),vertexTangents:!!it.attributes.tangent&&(mt||De),vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!it.attributes.color&&it.attributes.color.itemSize===4,pointsUvs:Z.isPoints===!0&&!!it.attributes.uv&&(ce||Nt),fog:!!ot,useFog:C.fog===!0,fogExp2:!!ot&&ot.isFogExp2,flatShading:C.flatShading===!0&&C.wireframe===!1,sizeAttenuation:C.sizeAttenuation===!0,logarithmicDepthBuffer:m,reversedDepthBuffer:Pt,skinning:Z.isSkinnedMesh===!0,morphTargets:it.morphAttributes.position!==void 0,morphNormals:it.morphAttributes.normal!==void 0,morphColors:it.morphAttributes.color!==void 0,morphTargetsCount:It,morphTextureStride:le,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:C.dithering,shadowMapEnabled:n.shadowMap.enabled&&z.length>0,shadowMapType:n.shadowMap.type,toneMapping:ie,decodeVideoTexture:ce&&C.map.isVideoTexture===!0&&Te.getTransfer(C.map.colorSpace)===Fe,decodeVideoTextureEmissive:yt&&C.emissiveMap.isVideoTexture===!0&&Te.getTransfer(C.emissiveMap.colorSpace)===Fe,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===Yi,flipSided:C.side===On,useDepthPacking:C.depthPacking>=0,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionClipCullDistance:kt&&C.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(kt&&C.extensions.multiDraw===!0||Gt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:C.customProgramCacheKey()};return Le.vertexUv1s=h.has(1),Le.vertexUv2s=h.has(2),Le.vertexUv3s=h.has(3),h.clear(),Le}function _(C){const R=[];if(C.shaderID?R.push(C.shaderID):(R.push(C.customVertexShaderID),R.push(C.customFragmentShaderID)),C.defines!==void 0)for(const z in C.defines)R.push(z),R.push(C.defines[z]);return C.isRawShaderMaterial===!1&&(I(R,C),D(R,C),R.push(n.outputColorSpace)),R.push(C.customProgramCacheKey),R.join()}function I(C,R){C.push(R.precision),C.push(R.outputColorSpace),C.push(R.envMapMode),C.push(R.envMapCubeUVHeight),C.push(R.mapUv),C.push(R.alphaMapUv),C.push(R.lightMapUv),C.push(R.aoMapUv),C.push(R.bumpMapUv),C.push(R.normalMapUv),C.push(R.displacementMapUv),C.push(R.emissiveMapUv),C.push(R.metalnessMapUv),C.push(R.roughnessMapUv),C.push(R.anisotropyMapUv),C.push(R.clearcoatMapUv),C.push(R.clearcoatNormalMapUv),C.push(R.clearcoatRoughnessMapUv),C.push(R.iridescenceMapUv),C.push(R.iridescenceThicknessMapUv),C.push(R.sheenColorMapUv),C.push(R.sheenRoughnessMapUv),C.push(R.specularMapUv),C.push(R.specularColorMapUv),C.push(R.specularIntensityMapUv),C.push(R.transmissionMapUv),C.push(R.thicknessMapUv),C.push(R.combine),C.push(R.fogExp2),C.push(R.sizeAttenuation),C.push(R.morphTargetsCount),C.push(R.morphAttributeCount),C.push(R.numDirLights),C.push(R.numPointLights),C.push(R.numSpotLights),C.push(R.numSpotLightMaps),C.push(R.numHemiLights),C.push(R.numRectAreaLights),C.push(R.numDirLightShadows),C.push(R.numPointLightShadows),C.push(R.numSpotLightShadows),C.push(R.numSpotLightShadowsWithMaps),C.push(R.numLightProbes),C.push(R.shadowMapType),C.push(R.toneMapping),C.push(R.numClippingPlanes),C.push(R.numClipIntersection),C.push(R.depthPacking)}function D(C,R){u.disableAll(),R.supportsVertexTextures&&u.enable(0),R.instancing&&u.enable(1),R.instancingColor&&u.enable(2),R.instancingMorph&&u.enable(3),R.matcap&&u.enable(4),R.envMap&&u.enable(5),R.normalMapObjectSpace&&u.enable(6),R.normalMapTangentSpace&&u.enable(7),R.clearcoat&&u.enable(8),R.iridescence&&u.enable(9),R.alphaTest&&u.enable(10),R.vertexColors&&u.enable(11),R.vertexAlphas&&u.enable(12),R.vertexUv1s&&u.enable(13),R.vertexUv2s&&u.enable(14),R.vertexUv3s&&u.enable(15),R.vertexTangents&&u.enable(16),R.anisotropy&&u.enable(17),R.alphaHash&&u.enable(18),R.batching&&u.enable(19),R.dispersion&&u.enable(20),R.batchingColor&&u.enable(21),R.gradientMap&&u.enable(22),C.push(u.mask),u.disableAll(),R.fog&&u.enable(0),R.useFog&&u.enable(1),R.flatShading&&u.enable(2),R.logarithmicDepthBuffer&&u.enable(3),R.reversedDepthBuffer&&u.enable(4),R.skinning&&u.enable(5),R.morphTargets&&u.enable(6),R.morphNormals&&u.enable(7),R.morphColors&&u.enable(8),R.premultipliedAlpha&&u.enable(9),R.shadowMapEnabled&&u.enable(10),R.doubleSided&&u.enable(11),R.flipSided&&u.enable(12),R.useDepthPacking&&u.enable(13),R.dithering&&u.enable(14),R.transmission&&u.enable(15),R.sheen&&u.enable(16),R.opaque&&u.enable(17),R.pointsUvs&&u.enable(18),R.decodeVideoTexture&&u.enable(19),R.decodeVideoTextureEmissive&&u.enable(20),R.alphaToCoverage&&u.enable(21),C.push(u.mask)}function w(C){const R=M[C.type];let z;if(R){const $=bi[R];z=mb.clone($.uniforms)}else z=C.uniforms;return z}function B(C,R){let z;for(let $=0,Z=p.length;$<Z;$++){const ot=p[$];if(ot.cacheKey===R){z=ot,++z.usedTimes;break}}return z===void 0&&(z=new hR(n,R,C,o),p.push(z)),z}function F(C){if(--C.usedTimes===0){const R=p.indexOf(C);p[R]=p[p.length-1],p.pop(),C.destroy()}}function N(C){f.remove(C)}function Y(){f.dispose()}return{getParameters:x,getProgramCacheKey:_,getUniforms:w,acquireProgram:B,releaseProgram:F,releaseShaderCache:N,programs:p,dispose:Y}}function _R(){let n=new WeakMap;function t(l){return n.has(l)}function e(l){let u=n.get(l);return u===void 0&&(u={},n.set(l,u)),u}function i(l){n.delete(l)}function s(l,u,f){n.get(l)[u]=f}function o(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:o}}function gR(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function Cm(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Pm(){const n=[];let t=0;const e=[],i=[],s=[];function o(){t=0,e.length=0,i.length=0,s.length=0}function l(m,g,v,M,b,x){let _=n[t];return _===void 0?(_={id:m.id,object:m,geometry:g,material:v,groupOrder:M,renderOrder:m.renderOrder,z:b,group:x},n[t]=_):(_.id=m.id,_.object=m,_.geometry=g,_.material=v,_.groupOrder=M,_.renderOrder=m.renderOrder,_.z=b,_.group=x),t++,_}function u(m,g,v,M,b,x){const _=l(m,g,v,M,b,x);v.transmission>0?i.push(_):v.transparent===!0?s.push(_):e.push(_)}function f(m,g,v,M,b,x){const _=l(m,g,v,M,b,x);v.transmission>0?i.unshift(_):v.transparent===!0?s.unshift(_):e.unshift(_)}function h(m,g){e.length>1&&e.sort(m||gR),i.length>1&&i.sort(g||Cm),s.length>1&&s.sort(g||Cm)}function p(){for(let m=t,g=n.length;m<g;m++){const v=n[m];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:e,transmissive:i,transparent:s,init:o,push:u,unshift:f,finish:p,sort:h}}function vR(){let n=new WeakMap;function t(i,s){const o=n.get(i);let l;return o===void 0?(l=new Pm,n.set(i,[l])):s>=o.length?(l=new Pm,o.push(l)):l=o[s],l}function e(){n=new WeakMap}return{get:t,dispose:e}}function xR(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new V,color:new Yt};break;case"SpotLight":e={position:new V,direction:new V,color:new Yt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new V,color:new Yt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new V,skyColor:new Yt,groundColor:new Yt};break;case"RectAreaLight":e={color:new Yt,position:new V,halfWidth:new V,halfHeight:new V};break}return n[t.id]=e,e}}}function yR(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Wt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Wt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Wt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let MR=0;function SR(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function ER(n){const t=new xR,e=yR(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new V);const s=new V,o=new ze,l=new ze;function u(h){let p=0,m=0,g=0;for(let C=0;C<9;C++)i.probe[C].set(0,0,0);let v=0,M=0,b=0,x=0,_=0,I=0,D=0,w=0,B=0,F=0,N=0;h.sort(SR);for(let C=0,R=h.length;C<R;C++){const z=h[C],$=z.color,Z=z.intensity,ot=z.distance,it=z.shadow&&z.shadow.map?z.shadow.map.texture:null;if(z.isAmbientLight)p+=$.r*Z,m+=$.g*Z,g+=$.b*Z;else if(z.isLightProbe){for(let lt=0;lt<9;lt++)i.probe[lt].addScaledVector(z.sh.coefficients[lt],Z);N++}else if(z.isDirectionalLight){const lt=t.get(z);if(lt.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){const ft=z.shadow,Q=e.get(z);Q.shadowIntensity=ft.intensity,Q.shadowBias=ft.bias,Q.shadowNormalBias=ft.normalBias,Q.shadowRadius=ft.radius,Q.shadowMapSize=ft.mapSize,i.directionalShadow[v]=Q,i.directionalShadowMap[v]=it,i.directionalShadowMatrix[v]=z.shadow.matrix,I++}i.directional[v]=lt,v++}else if(z.isSpotLight){const lt=t.get(z);lt.position.setFromMatrixPosition(z.matrixWorld),lt.color.copy($).multiplyScalar(Z),lt.distance=ot,lt.coneCos=Math.cos(z.angle),lt.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),lt.decay=z.decay,i.spot[b]=lt;const ft=z.shadow;if(z.map&&(i.spotLightMap[B]=z.map,B++,ft.updateMatrices(z),z.castShadow&&F++),i.spotLightMatrix[b]=ft.matrix,z.castShadow){const Q=e.get(z);Q.shadowIntensity=ft.intensity,Q.shadowBias=ft.bias,Q.shadowNormalBias=ft.normalBias,Q.shadowRadius=ft.radius,Q.shadowMapSize=ft.mapSize,i.spotShadow[b]=Q,i.spotShadowMap[b]=it,w++}b++}else if(z.isRectAreaLight){const lt=t.get(z);lt.color.copy($).multiplyScalar(Z),lt.halfWidth.set(z.width*.5,0,0),lt.halfHeight.set(0,z.height*.5,0),i.rectArea[x]=lt,x++}else if(z.isPointLight){const lt=t.get(z);if(lt.color.copy(z.color).multiplyScalar(z.intensity),lt.distance=z.distance,lt.decay=z.decay,z.castShadow){const ft=z.shadow,Q=e.get(z);Q.shadowIntensity=ft.intensity,Q.shadowBias=ft.bias,Q.shadowNormalBias=ft.normalBias,Q.shadowRadius=ft.radius,Q.shadowMapSize=ft.mapSize,Q.shadowCameraNear=ft.camera.near,Q.shadowCameraFar=ft.camera.far,i.pointShadow[M]=Q,i.pointShadowMap[M]=it,i.pointShadowMatrix[M]=z.shadow.matrix,D++}i.point[M]=lt,M++}else if(z.isHemisphereLight){const lt=t.get(z);lt.skyColor.copy(z.color).multiplyScalar(Z),lt.groundColor.copy(z.groundColor).multiplyScalar(Z),i.hemi[_]=lt,_++}}x>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=wt.LTC_FLOAT_1,i.rectAreaLTC2=wt.LTC_FLOAT_2):(i.rectAreaLTC1=wt.LTC_HALF_1,i.rectAreaLTC2=wt.LTC_HALF_2)),i.ambient[0]=p,i.ambient[1]=m,i.ambient[2]=g;const Y=i.hash;(Y.directionalLength!==v||Y.pointLength!==M||Y.spotLength!==b||Y.rectAreaLength!==x||Y.hemiLength!==_||Y.numDirectionalShadows!==I||Y.numPointShadows!==D||Y.numSpotShadows!==w||Y.numSpotMaps!==B||Y.numLightProbes!==N)&&(i.directional.length=v,i.spot.length=b,i.rectArea.length=x,i.point.length=M,i.hemi.length=_,i.directionalShadow.length=I,i.directionalShadowMap.length=I,i.pointShadow.length=D,i.pointShadowMap.length=D,i.spotShadow.length=w,i.spotShadowMap.length=w,i.directionalShadowMatrix.length=I,i.pointShadowMatrix.length=D,i.spotLightMatrix.length=w+B-F,i.spotLightMap.length=B,i.numSpotLightShadowsWithMaps=F,i.numLightProbes=N,Y.directionalLength=v,Y.pointLength=M,Y.spotLength=b,Y.rectAreaLength=x,Y.hemiLength=_,Y.numDirectionalShadows=I,Y.numPointShadows=D,Y.numSpotShadows=w,Y.numSpotMaps=B,Y.numLightProbes=N,i.version=MR++)}function f(h,p){let m=0,g=0,v=0,M=0,b=0;const x=p.matrixWorldInverse;for(let _=0,I=h.length;_<I;_++){const D=h[_];if(D.isDirectionalLight){const w=i.directional[m];w.direction.setFromMatrixPosition(D.matrixWorld),s.setFromMatrixPosition(D.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(x),m++}else if(D.isSpotLight){const w=i.spot[v];w.position.setFromMatrixPosition(D.matrixWorld),w.position.applyMatrix4(x),w.direction.setFromMatrixPosition(D.matrixWorld),s.setFromMatrixPosition(D.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(x),v++}else if(D.isRectAreaLight){const w=i.rectArea[M];w.position.setFromMatrixPosition(D.matrixWorld),w.position.applyMatrix4(x),l.identity(),o.copy(D.matrixWorld),o.premultiply(x),l.extractRotation(o),w.halfWidth.set(D.width*.5,0,0),w.halfHeight.set(0,D.height*.5,0),w.halfWidth.applyMatrix4(l),w.halfHeight.applyMatrix4(l),M++}else if(D.isPointLight){const w=i.point[g];w.position.setFromMatrixPosition(D.matrixWorld),w.position.applyMatrix4(x),g++}else if(D.isHemisphereLight){const w=i.hemi[b];w.direction.setFromMatrixPosition(D.matrixWorld),w.direction.transformDirection(x),b++}}}return{setup:u,setupView:f,state:i}}function Dm(n){const t=new ER(n),e=[],i=[];function s(p){h.camera=p,e.length=0,i.length=0}function o(p){e.push(p)}function l(p){i.push(p)}function u(){t.setup(e)}function f(p){t.setupView(e,p)}const h={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:h,setupLights:u,setupLightsView:f,pushLight:o,pushShadow:l}}function bR(n){let t=new WeakMap;function e(s,o=0){const l=t.get(s);let u;return l===void 0?(u=new Dm(n),t.set(s,[u])):o>=l.length?(u=new Dm(n),l.push(u)):u=l[o],u}function i(){t=new WeakMap}return{get:e,dispose:i}}const TR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,AR=`uniform sampler2D shadow_pass;
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
}`;function wR(n,t,e){let i=new Hh;const s=new Wt,o=new Wt,l=new Ke,u=new p_({depthPacking:EE}),f=new m_,h={},p=e.maxTextureSize,m={[xr]:On,[On]:xr,[Yi]:Yi},g=new Ri({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Wt},radius:{value:4}},vertexShader:TR,fragmentShader:AR}),v=g.clone();v.defines.HORIZONTAL_PASS=1;const M=new Fn;M.setAttribute("position",new Rn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new oi(M,g),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Gm;let _=this.type;this.render=function(F,N,Y){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||F.length===0)return;const C=n.getRenderTarget(),R=n.getActiveCubeFace(),z=n.getActiveMipmapLevel(),$=n.state;$.setBlending(_r),$.buffers.depth.getReversed()===!0?$.buffers.color.setClear(0,0,0,0):$.buffers.color.setClear(1,1,1,1),$.buffers.depth.setTest(!0),$.setScissorTest(!1);const Z=_!==qi&&this.type===qi,ot=_===qi&&this.type!==qi;for(let it=0,lt=F.length;it<lt;it++){const ft=F[it],Q=ft.shadow;if(Q===void 0){console.warn("THREE.WebGLShadowMap:",ft,"has no shadow.");continue}if(Q.autoUpdate===!1&&Q.needsUpdate===!1)continue;s.copy(Q.mapSize);const Et=Q.getFrameExtents();if(s.multiply(Et),o.copy(Q.mapSize),(s.x>p||s.y>p)&&(s.x>p&&(o.x=Math.floor(p/Et.x),s.x=o.x*Et.x,Q.mapSize.x=o.x),s.y>p&&(o.y=Math.floor(p/Et.y),s.y=o.y*Et.y,Q.mapSize.y=o.y)),Q.map===null||Z===!0||ot===!0){const It=this.type!==qi?{minFilter:qn,magFilter:qn}:{};Q.map!==null&&Q.map.dispose(),Q.map=new Zr(s.x,s.y,It),Q.map.texture.name=ft.name+".shadowMap",Q.camera.updateProjectionMatrix()}n.setRenderTarget(Q.map),n.clear();const Rt=Q.getViewportCount();for(let It=0;It<Rt;It++){const le=Q.getViewport(It);l.set(o.x*le.x,o.y*le.y,o.x*le.z,o.y*le.w),$.viewport(l),Q.updateMatrices(ft,It),i=Q.getFrustum(),w(N,Y,Q.camera,ft,this.type)}Q.isPointLightShadow!==!0&&this.type===qi&&I(Q,Y),Q.needsUpdate=!1}_=this.type,x.needsUpdate=!1,n.setRenderTarget(C,R,z)};function I(F,N){const Y=t.update(b);g.defines.VSM_SAMPLES!==F.blurSamples&&(g.defines.VSM_SAMPLES=F.blurSamples,v.defines.VSM_SAMPLES=F.blurSamples,g.needsUpdate=!0,v.needsUpdate=!0),F.mapPass===null&&(F.mapPass=new Zr(s.x,s.y)),g.uniforms.shadow_pass.value=F.map.texture,g.uniforms.resolution.value=F.mapSize,g.uniforms.radius.value=F.radius,n.setRenderTarget(F.mapPass),n.clear(),n.renderBufferDirect(N,null,Y,g,b,null),v.uniforms.shadow_pass.value=F.mapPass.texture,v.uniforms.resolution.value=F.mapSize,v.uniforms.radius.value=F.radius,n.setRenderTarget(F.map),n.clear(),n.renderBufferDirect(N,null,Y,v,b,null)}function D(F,N,Y,C){let R=null;const z=Y.isPointLight===!0?F.customDistanceMaterial:F.customDepthMaterial;if(z!==void 0)R=z;else if(R=Y.isPointLight===!0?f:u,n.localClippingEnabled&&N.clipShadows===!0&&Array.isArray(N.clippingPlanes)&&N.clippingPlanes.length!==0||N.displacementMap&&N.displacementScale!==0||N.alphaMap&&N.alphaTest>0||N.map&&N.alphaTest>0||N.alphaToCoverage===!0){const $=R.uuid,Z=N.uuid;let ot=h[$];ot===void 0&&(ot={},h[$]=ot);let it=ot[Z];it===void 0&&(it=R.clone(),ot[Z]=it,N.addEventListener("dispose",B)),R=it}if(R.visible=N.visible,R.wireframe=N.wireframe,C===qi?R.side=N.shadowSide!==null?N.shadowSide:N.side:R.side=N.shadowSide!==null?N.shadowSide:m[N.side],R.alphaMap=N.alphaMap,R.alphaTest=N.alphaToCoverage===!0?.5:N.alphaTest,R.map=N.map,R.clipShadows=N.clipShadows,R.clippingPlanes=N.clippingPlanes,R.clipIntersection=N.clipIntersection,R.displacementMap=N.displacementMap,R.displacementScale=N.displacementScale,R.displacementBias=N.displacementBias,R.wireframeLinewidth=N.wireframeLinewidth,R.linewidth=N.linewidth,Y.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const $=n.properties.get(R);$.light=Y}return R}function w(F,N,Y,C,R){if(F.visible===!1)return;if(F.layers.test(N.layers)&&(F.isMesh||F.isLine||F.isPoints)&&(F.castShadow||F.receiveShadow&&R===qi)&&(!F.frustumCulled||i.intersectsObject(F))){F.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,F.matrixWorld);const Z=t.update(F),ot=F.material;if(Array.isArray(ot)){const it=Z.groups;for(let lt=0,ft=it.length;lt<ft;lt++){const Q=it[lt],Et=ot[Q.materialIndex];if(Et&&Et.visible){const Rt=D(F,Et,C,R);F.onBeforeShadow(n,F,N,Y,Z,Rt,Q),n.renderBufferDirect(Y,null,Z,Rt,F,Q),F.onAfterShadow(n,F,N,Y,Z,Rt,Q)}}}else if(ot.visible){const it=D(F,ot,C,R);F.onBeforeShadow(n,F,N,Y,Z,it,null),n.renderBufferDirect(Y,null,Z,it,F,null),F.onAfterShadow(n,F,N,Y,Z,it,null)}}const $=F.children;for(let Z=0,ot=$.length;Z<ot;Z++)w($[Z],N,Y,C,R)}function B(F){F.target.removeEventListener("dispose",B);for(const Y in h){const C=h[Y],R=F.target.uuid;R in C&&(C[R].dispose(),delete C[R])}}}const RR={[Nu]:Ou,[Fu]:ku,[Bu]:Hu,[Ws]:zu,[Ou]:Nu,[ku]:Fu,[Hu]:Bu,[zu]:Ws};function CR(n,t){function e(){let k=!1;const Mt=new Ke;let St=null;const Nt=new Ke(0,0,0,0);return{setMask:function(vt){St!==vt&&!k&&(n.colorMask(vt,vt,vt,vt),St=vt)},setLocked:function(vt){k=vt},setClear:function(vt,ct,kt,ie,Le){Le===!0&&(vt*=ie,ct*=ie,kt*=ie),Mt.set(vt,ct,kt,ie),Nt.equals(Mt)===!1&&(n.clearColor(vt,ct,kt,ie),Nt.copy(Mt))},reset:function(){k=!1,St=null,Nt.set(-1,0,0,0)}}}function i(){let k=!1,Mt=!1,St=null,Nt=null,vt=null;return{setReversed:function(ct){if(Mt!==ct){const kt=t.get("EXT_clip_control");ct?kt.clipControlEXT(kt.LOWER_LEFT_EXT,kt.ZERO_TO_ONE_EXT):kt.clipControlEXT(kt.LOWER_LEFT_EXT,kt.NEGATIVE_ONE_TO_ONE_EXT),Mt=ct;const ie=vt;vt=null,this.setClear(ie)}},getReversed:function(){return Mt},setTest:function(ct){ct?pt(n.DEPTH_TEST):Pt(n.DEPTH_TEST)},setMask:function(ct){St!==ct&&!k&&(n.depthMask(ct),St=ct)},setFunc:function(ct){if(Mt&&(ct=RR[ct]),Nt!==ct){switch(ct){case Nu:n.depthFunc(n.NEVER);break;case Ou:n.depthFunc(n.ALWAYS);break;case Fu:n.depthFunc(n.LESS);break;case Ws:n.depthFunc(n.LEQUAL);break;case Bu:n.depthFunc(n.EQUAL);break;case zu:n.depthFunc(n.GEQUAL);break;case ku:n.depthFunc(n.GREATER);break;case Hu:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Nt=ct}},setLocked:function(ct){k=ct},setClear:function(ct){vt!==ct&&(Mt&&(ct=1-ct),n.clearDepth(ct),vt=ct)},reset:function(){k=!1,St=null,Nt=null,vt=null,Mt=!1}}}function s(){let k=!1,Mt=null,St=null,Nt=null,vt=null,ct=null,kt=null,ie=null,Le=null;return{setTest:function(be){k||(be?pt(n.STENCIL_TEST):Pt(n.STENCIL_TEST))},setMask:function(be){Mt!==be&&!k&&(n.stencilMask(be),Mt=be)},setFunc:function(be,li,Zn){(St!==be||Nt!==li||vt!==Zn)&&(n.stencilFunc(be,li,Zn),St=be,Nt=li,vt=Zn)},setOp:function(be,li,Zn){(ct!==be||kt!==li||ie!==Zn)&&(n.stencilOp(be,li,Zn),ct=be,kt=li,ie=Zn)},setLocked:function(be){k=be},setClear:function(be){Le!==be&&(n.clearStencil(be),Le=be)},reset:function(){k=!1,Mt=null,St=null,Nt=null,vt=null,ct=null,kt=null,ie=null,Le=null}}}const o=new e,l=new i,u=new s,f=new WeakMap,h=new WeakMap;let p={},m={},g=new WeakMap,v=[],M=null,b=!1,x=null,_=null,I=null,D=null,w=null,B=null,F=null,N=new Yt(0,0,0),Y=0,C=!1,R=null,z=null,$=null,Z=null,ot=null;const it=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let lt=!1,ft=0;const Q=n.getParameter(n.VERSION);Q.indexOf("WebGL")!==-1?(ft=parseFloat(/^WebGL (\d)/.exec(Q)[1]),lt=ft>=1):Q.indexOf("OpenGL ES")!==-1&&(ft=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),lt=ft>=2);let Et=null,Rt={};const It=n.getParameter(n.SCISSOR_BOX),le=n.getParameter(n.VIEWPORT),we=new Ke().fromArray(It),Ne=new Ke().fromArray(le);function de(k,Mt,St,Nt){const vt=new Uint8Array(4),ct=n.createTexture();n.bindTexture(k,ct),n.texParameteri(k,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(k,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let kt=0;kt<St;kt++)k===n.TEXTURE_3D||k===n.TEXTURE_2D_ARRAY?n.texImage3D(Mt,0,n.RGBA,1,1,Nt,0,n.RGBA,n.UNSIGNED_BYTE,vt):n.texImage2D(Mt+kt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,vt);return ct}const rt={};rt[n.TEXTURE_2D]=de(n.TEXTURE_2D,n.TEXTURE_2D,1),rt[n.TEXTURE_CUBE_MAP]=de(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),rt[n.TEXTURE_2D_ARRAY]=de(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),rt[n.TEXTURE_3D]=de(n.TEXTURE_3D,n.TEXTURE_3D,1,1),o.setClear(0,0,0,1),l.setClear(1),u.setClear(0),pt(n.DEPTH_TEST),l.setFunc(Ws),jt(!1),mt(bp),pt(n.CULL_FACE),_e(_r);function pt(k){p[k]!==!0&&(n.enable(k),p[k]=!0)}function Pt(k){p[k]!==!1&&(n.disable(k),p[k]=!1)}function Zt(k,Mt){return m[k]!==Mt?(n.bindFramebuffer(k,Mt),m[k]=Mt,k===n.DRAW_FRAMEBUFFER&&(m[n.FRAMEBUFFER]=Mt),k===n.FRAMEBUFFER&&(m[n.DRAW_FRAMEBUFFER]=Mt),!0):!1}function Gt(k,Mt){let St=v,Nt=!1;if(k){St=g.get(Mt),St===void 0&&(St=[],g.set(Mt,St));const vt=k.textures;if(St.length!==vt.length||St[0]!==n.COLOR_ATTACHMENT0){for(let ct=0,kt=vt.length;ct<kt;ct++)St[ct]=n.COLOR_ATTACHMENT0+ct;St.length=vt.length,Nt=!0}}else St[0]!==n.BACK&&(St[0]=n.BACK,Nt=!0);Nt&&n.drawBuffers(St)}function ce(k){return M!==k?(n.useProgram(k),M=k,!0):!1}const Ye={[Hr]:n.FUNC_ADD,[KS]:n.FUNC_SUBTRACT,[$S]:n.FUNC_REVERSE_SUBTRACT};Ye[jS]=n.MIN,Ye[JS]=n.MAX;const U={[QS]:n.ZERO,[tE]:n.ONE,[eE]:n.SRC_COLOR,[Iu]:n.SRC_ALPHA,[oE]:n.SRC_ALPHA_SATURATE,[sE]:n.DST_COLOR,[iE]:n.DST_ALPHA,[nE]:n.ONE_MINUS_SRC_COLOR,[Uu]:n.ONE_MINUS_SRC_ALPHA,[aE]:n.ONE_MINUS_DST_COLOR,[rE]:n.ONE_MINUS_DST_ALPHA,[lE]:n.CONSTANT_COLOR,[cE]:n.ONE_MINUS_CONSTANT_COLOR,[uE]:n.CONSTANT_ALPHA,[hE]:n.ONE_MINUS_CONSTANT_ALPHA};function _e(k,Mt,St,Nt,vt,ct,kt,ie,Le,be){if(k===_r){b===!0&&(Pt(n.BLEND),b=!1);return}if(b===!1&&(pt(n.BLEND),b=!0),k!==ZS){if(k!==x||be!==C){if((_!==Hr||w!==Hr)&&(n.blendEquation(n.FUNC_ADD),_=Hr,w=Hr),be)switch(k){case Hs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Tp:n.blendFunc(n.ONE,n.ONE);break;case Ap:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case wp:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case Hs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Tp:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Ap:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case wp:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}I=null,D=null,B=null,F=null,N.set(0,0,0),Y=0,x=k,C=be}return}vt=vt||Mt,ct=ct||St,kt=kt||Nt,(Mt!==_||vt!==w)&&(n.blendEquationSeparate(Ye[Mt],Ye[vt]),_=Mt,w=vt),(St!==I||Nt!==D||ct!==B||kt!==F)&&(n.blendFuncSeparate(U[St],U[Nt],U[ct],U[kt]),I=St,D=Nt,B=ct,F=kt),(ie.equals(N)===!1||Le!==Y)&&(n.blendColor(ie.r,ie.g,ie.b,Le),N.copy(ie),Y=Le),x=k,C=!1}function Qt(k,Mt){k.side===Yi?Pt(n.CULL_FACE):pt(n.CULL_FACE);let St=k.side===On;Mt&&(St=!St),jt(St),k.blending===Hs&&k.transparent===!1?_e(_r):_e(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),l.setFunc(k.depthFunc),l.setTest(k.depthTest),l.setMask(k.depthWrite),o.setMask(k.colorWrite);const Nt=k.stencilWrite;u.setTest(Nt),Nt&&(u.setMask(k.stencilWriteMask),u.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),u.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),yt(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?pt(n.SAMPLE_ALPHA_TO_COVERAGE):Pt(n.SAMPLE_ALPHA_TO_COVERAGE)}function jt(k){R!==k&&(k?n.frontFace(n.CW):n.frontFace(n.CCW),R=k)}function mt(k){k!==XS?(pt(n.CULL_FACE),k!==z&&(k===bp?n.cullFace(n.BACK):k===qS?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Pt(n.CULL_FACE),z=k}function Ee(k){k!==$&&(lt&&n.lineWidth(k),$=k)}function yt(k,Mt,St){k?(pt(n.POLYGON_OFFSET_FILL),(Z!==Mt||ot!==St)&&(n.polygonOffset(Mt,St),Z=Mt,ot=St)):Pt(n.POLYGON_OFFSET_FILL)}function Kt(k){k?pt(n.SCISSOR_TEST):Pt(n.SCISSOR_TEST)}function ve(k){k===void 0&&(k=n.TEXTURE0+it-1),Et!==k&&(n.activeTexture(k),Et=k)}function De(k,Mt,St){St===void 0&&(Et===null?St=n.TEXTURE0+it-1:St=Et);let Nt=Rt[St];Nt===void 0&&(Nt={type:void 0,texture:void 0},Rt[St]=Nt),(Nt.type!==k||Nt.texture!==Mt)&&(Et!==St&&(n.activeTexture(St),Et=St),n.bindTexture(k,Mt||rt[k]),Nt.type=k,Nt.texture=Mt)}function P(){const k=Rt[Et];k!==void 0&&k.type!==void 0&&(n.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function S(){try{n.compressedTexImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function G(){try{n.compressedTexImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function et(){try{n.texSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ut(){try{n.texSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function tt(){try{n.compressedTexSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Bt(){try{n.compressedTexSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function gt(){try{n.texStorage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ot(){try{n.texStorage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ft(){try{n.texImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function _t(){try{n.texImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function bt(k){we.equals(k)===!1&&(n.scissor(k.x,k.y,k.z,k.w),we.copy(k))}function Ht(k){Ne.equals(k)===!1&&(n.viewport(k.x,k.y,k.z,k.w),Ne.copy(k))}function Dt(k,Mt){let St=h.get(Mt);St===void 0&&(St=new WeakMap,h.set(Mt,St));let Nt=St.get(k);Nt===void 0&&(Nt=n.getUniformBlockIndex(Mt,k.name),St.set(k,Nt))}function Tt(k,Mt){const Nt=h.get(Mt).get(k);f.get(Mt)!==Nt&&(n.uniformBlockBinding(Mt,Nt,k.__bindingPointIndex),f.set(Mt,Nt))}function se(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),l.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),p={},Et=null,Rt={},m={},g=new WeakMap,v=[],M=null,b=!1,x=null,_=null,I=null,D=null,w=null,B=null,F=null,N=new Yt(0,0,0),Y=0,C=!1,R=null,z=null,$=null,Z=null,ot=null,we.set(0,0,n.canvas.width,n.canvas.height),Ne.set(0,0,n.canvas.width,n.canvas.height),o.reset(),l.reset(),u.reset()}return{buffers:{color:o,depth:l,stencil:u},enable:pt,disable:Pt,bindFramebuffer:Zt,drawBuffers:Gt,useProgram:ce,setBlending:_e,setMaterial:Qt,setFlipSided:jt,setCullFace:mt,setLineWidth:Ee,setPolygonOffset:yt,setScissorTest:Kt,activeTexture:ve,bindTexture:De,unbindTexture:P,compressedTexImage2D:S,compressedTexImage3D:G,texImage2D:Ft,texImage3D:_t,updateUBOMapping:Dt,uniformBlockBinding:Tt,texStorage2D:gt,texStorage3D:Ot,texSubImage2D:et,texSubImage3D:ut,compressedTexSubImage2D:tt,compressedTexSubImage3D:Bt,scissor:bt,viewport:Ht,reset:se}}function PR(n,t,e,i,s,o,l){const u=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,f=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Wt,p=new WeakMap;let m;const g=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(P,S){return v?new OffscreenCanvas(P,S):Fa("canvas")}function b(P,S,G){let et=1;const ut=De(P);if((ut.width>G||ut.height>G)&&(et=G/Math.max(ut.width,ut.height)),et<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const tt=Math.floor(et*ut.width),Bt=Math.floor(et*ut.height);m===void 0&&(m=M(tt,Bt));const gt=S?M(tt,Bt):m;return gt.width=tt,gt.height=Bt,gt.getContext("2d").drawImage(P,0,0,tt,Bt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ut.width+"x"+ut.height+") to ("+tt+"x"+Bt+")."),gt}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ut.width+"x"+ut.height+")."),P;return P}function x(P){return P.generateMipmaps}function _(P){n.generateMipmap(P)}function I(P){return P.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?n.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function D(P,S,G,et,ut=!1){if(P!==null){if(n[P]!==void 0)return n[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let tt=S;if(S===n.RED&&(G===n.FLOAT&&(tt=n.R32F),G===n.HALF_FLOAT&&(tt=n.R16F),G===n.UNSIGNED_BYTE&&(tt=n.R8)),S===n.RED_INTEGER&&(G===n.UNSIGNED_BYTE&&(tt=n.R8UI),G===n.UNSIGNED_SHORT&&(tt=n.R16UI),G===n.UNSIGNED_INT&&(tt=n.R32UI),G===n.BYTE&&(tt=n.R8I),G===n.SHORT&&(tt=n.R16I),G===n.INT&&(tt=n.R32I)),S===n.RG&&(G===n.FLOAT&&(tt=n.RG32F),G===n.HALF_FLOAT&&(tt=n.RG16F),G===n.UNSIGNED_BYTE&&(tt=n.RG8)),S===n.RG_INTEGER&&(G===n.UNSIGNED_BYTE&&(tt=n.RG8UI),G===n.UNSIGNED_SHORT&&(tt=n.RG16UI),G===n.UNSIGNED_INT&&(tt=n.RG32UI),G===n.BYTE&&(tt=n.RG8I),G===n.SHORT&&(tt=n.RG16I),G===n.INT&&(tt=n.RG32I)),S===n.RGB_INTEGER&&(G===n.UNSIGNED_BYTE&&(tt=n.RGB8UI),G===n.UNSIGNED_SHORT&&(tt=n.RGB16UI),G===n.UNSIGNED_INT&&(tt=n.RGB32UI),G===n.BYTE&&(tt=n.RGB8I),G===n.SHORT&&(tt=n.RGB16I),G===n.INT&&(tt=n.RGB32I)),S===n.RGBA_INTEGER&&(G===n.UNSIGNED_BYTE&&(tt=n.RGBA8UI),G===n.UNSIGNED_SHORT&&(tt=n.RGBA16UI),G===n.UNSIGNED_INT&&(tt=n.RGBA32UI),G===n.BYTE&&(tt=n.RGBA8I),G===n.SHORT&&(tt=n.RGBA16I),G===n.INT&&(tt=n.RGBA32I)),S===n.RGB&&(G===n.UNSIGNED_INT_5_9_9_9_REV&&(tt=n.RGB9_E5),G===n.UNSIGNED_INT_10F_11F_11F_REV&&(tt=n.R11F_G11F_B10F)),S===n.RGBA){const Bt=ut?yl:Te.getTransfer(et);G===n.FLOAT&&(tt=n.RGBA32F),G===n.HALF_FLOAT&&(tt=n.RGBA16F),G===n.UNSIGNED_BYTE&&(tt=Bt===Fe?n.SRGB8_ALPHA8:n.RGBA8),G===n.UNSIGNED_SHORT_4_4_4_4&&(tt=n.RGBA4),G===n.UNSIGNED_SHORT_5_5_5_1&&(tt=n.RGB5_A1)}return(tt===n.R16F||tt===n.R32F||tt===n.RG16F||tt===n.RG32F||tt===n.RGBA16F||tt===n.RGBA32F)&&t.get("EXT_color_buffer_float"),tt}function w(P,S){let G;return P?S===null||S===qr||S===Ia?G=n.DEPTH24_STENCIL8:S===xi?G=n.DEPTH32F_STENCIL8:S===La&&(G=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===qr||S===Ia?G=n.DEPTH_COMPONENT24:S===xi?G=n.DEPTH_COMPONENT32F:S===La&&(G=n.DEPTH_COMPONENT16),G}function B(P,S){return x(P)===!0||P.isFramebufferTexture&&P.minFilter!==qn&&P.minFilter!==Ti?Math.log2(Math.max(S.width,S.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?S.mipmaps.length:1}function F(P){const S=P.target;S.removeEventListener("dispose",F),Y(S),S.isVideoTexture&&p.delete(S)}function N(P){const S=P.target;S.removeEventListener("dispose",N),R(S)}function Y(P){const S=i.get(P);if(S.__webglInit===void 0)return;const G=P.source,et=g.get(G);if(et){const ut=et[S.__cacheKey];ut.usedTimes--,ut.usedTimes===0&&C(P),Object.keys(et).length===0&&g.delete(G)}i.remove(P)}function C(P){const S=i.get(P);n.deleteTexture(S.__webglTexture);const G=P.source,et=g.get(G);delete et[S.__cacheKey],l.memory.textures--}function R(P){const S=i.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),i.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let et=0;et<6;et++){if(Array.isArray(S.__webglFramebuffer[et]))for(let ut=0;ut<S.__webglFramebuffer[et].length;ut++)n.deleteFramebuffer(S.__webglFramebuffer[et][ut]);else n.deleteFramebuffer(S.__webglFramebuffer[et]);S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer[et])}else{if(Array.isArray(S.__webglFramebuffer))for(let et=0;et<S.__webglFramebuffer.length;et++)n.deleteFramebuffer(S.__webglFramebuffer[et]);else n.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&n.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let et=0;et<S.__webglColorRenderbuffer.length;et++)S.__webglColorRenderbuffer[et]&&n.deleteRenderbuffer(S.__webglColorRenderbuffer[et]);S.__webglDepthRenderbuffer&&n.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const G=P.textures;for(let et=0,ut=G.length;et<ut;et++){const tt=i.get(G[et]);tt.__webglTexture&&(n.deleteTexture(tt.__webglTexture),l.memory.textures--),i.remove(G[et])}i.remove(P)}let z=0;function $(){z=0}function Z(){const P=z;return P>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+s.maxTextures),z+=1,P}function ot(P){const S=[];return S.push(P.wrapS),S.push(P.wrapT),S.push(P.wrapR||0),S.push(P.magFilter),S.push(P.minFilter),S.push(P.anisotropy),S.push(P.internalFormat),S.push(P.format),S.push(P.type),S.push(P.generateMipmaps),S.push(P.premultiplyAlpha),S.push(P.flipY),S.push(P.unpackAlignment),S.push(P.colorSpace),S.join()}function it(P,S){const G=i.get(P);if(P.isVideoTexture&&Kt(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&G.__version!==P.version){const et=P.image;if(et===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(et.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{rt(G,P,S);return}}else P.isExternalTexture&&(G.__webglTexture=P.sourceTexture?P.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,G.__webglTexture,n.TEXTURE0+S)}function lt(P,S){const G=i.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&G.__version!==P.version){rt(G,P,S);return}e.bindTexture(n.TEXTURE_2D_ARRAY,G.__webglTexture,n.TEXTURE0+S)}function ft(P,S){const G=i.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&G.__version!==P.version){rt(G,P,S);return}e.bindTexture(n.TEXTURE_3D,G.__webglTexture,n.TEXTURE0+S)}function Q(P,S){const G=i.get(P);if(P.version>0&&G.__version!==P.version){pt(G,P,S);return}e.bindTexture(n.TEXTURE_CUBE_MAP,G.__webglTexture,n.TEXTURE0+S)}const Et={[Wu]:n.REPEAT,[Gr]:n.CLAMP_TO_EDGE,[Xu]:n.MIRRORED_REPEAT},Rt={[qn]:n.NEAREST,[ME]:n.NEAREST_MIPMAP_NEAREST,[Fo]:n.NEAREST_MIPMAP_LINEAR,[Ti]:n.LINEAR,[Kc]:n.LINEAR_MIPMAP_NEAREST,[Wr]:n.LINEAR_MIPMAP_LINEAR},It={[TE]:n.NEVER,[DE]:n.ALWAYS,[AE]:n.LESS,[Jm]:n.LEQUAL,[wE]:n.EQUAL,[PE]:n.GEQUAL,[RE]:n.GREATER,[CE]:n.NOTEQUAL};function le(P,S){if(S.type===xi&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===Ti||S.magFilter===Kc||S.magFilter===Fo||S.magFilter===Wr||S.minFilter===Ti||S.minFilter===Kc||S.minFilter===Fo||S.minFilter===Wr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(P,n.TEXTURE_WRAP_S,Et[S.wrapS]),n.texParameteri(P,n.TEXTURE_WRAP_T,Et[S.wrapT]),(P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY)&&n.texParameteri(P,n.TEXTURE_WRAP_R,Et[S.wrapR]),n.texParameteri(P,n.TEXTURE_MAG_FILTER,Rt[S.magFilter]),n.texParameteri(P,n.TEXTURE_MIN_FILTER,Rt[S.minFilter]),S.compareFunction&&(n.texParameteri(P,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(P,n.TEXTURE_COMPARE_FUNC,It[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===qn||S.minFilter!==Fo&&S.minFilter!==Wr||S.type===xi&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){const G=t.get("EXT_texture_filter_anisotropic");n.texParameterf(P,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function we(P,S){let G=!1;P.__webglInit===void 0&&(P.__webglInit=!0,S.addEventListener("dispose",F));const et=S.source;let ut=g.get(et);ut===void 0&&(ut={},g.set(et,ut));const tt=ot(S);if(tt!==P.__cacheKey){ut[tt]===void 0&&(ut[tt]={texture:n.createTexture(),usedTimes:0},l.memory.textures++,G=!0),ut[tt].usedTimes++;const Bt=ut[P.__cacheKey];Bt!==void 0&&(ut[P.__cacheKey].usedTimes--,Bt.usedTimes===0&&C(S)),P.__cacheKey=tt,P.__webglTexture=ut[tt].texture}return G}function Ne(P,S,G){return Math.floor(Math.floor(P/G)/S)}function de(P,S,G,et){const tt=P.updateRanges;if(tt.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,S.width,S.height,G,et,S.data);else{tt.sort((_t,bt)=>_t.start-bt.start);let Bt=0;for(let _t=1;_t<tt.length;_t++){const bt=tt[Bt],Ht=tt[_t],Dt=bt.start+bt.count,Tt=Ne(Ht.start,S.width,4),se=Ne(bt.start,S.width,4);Ht.start<=Dt+1&&Tt===se&&Ne(Ht.start+Ht.count-1,S.width,4)===Tt?bt.count=Math.max(bt.count,Ht.start+Ht.count-bt.start):(++Bt,tt[Bt]=Ht)}tt.length=Bt+1;const gt=n.getParameter(n.UNPACK_ROW_LENGTH),Ot=n.getParameter(n.UNPACK_SKIP_PIXELS),Ft=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,S.width);for(let _t=0,bt=tt.length;_t<bt;_t++){const Ht=tt[_t],Dt=Math.floor(Ht.start/4),Tt=Math.ceil(Ht.count/4),se=Dt%S.width,k=Math.floor(Dt/S.width),Mt=Tt,St=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,se),n.pixelStorei(n.UNPACK_SKIP_ROWS,k),e.texSubImage2D(n.TEXTURE_2D,0,se,k,Mt,St,G,et,S.data)}P.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,gt),n.pixelStorei(n.UNPACK_SKIP_PIXELS,Ot),n.pixelStorei(n.UNPACK_SKIP_ROWS,Ft)}}function rt(P,S,G){let et=n.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(et=n.TEXTURE_2D_ARRAY),S.isData3DTexture&&(et=n.TEXTURE_3D);const ut=we(P,S),tt=S.source;e.bindTexture(et,P.__webglTexture,n.TEXTURE0+G);const Bt=i.get(tt);if(tt.version!==Bt.__version||ut===!0){e.activeTexture(n.TEXTURE0+G);const gt=Te.getPrimaries(Te.workingColorSpace),Ot=S.colorSpace===pr?null:Te.getPrimaries(S.colorSpace),Ft=S.colorSpace===pr||gt===Ot?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ft);let _t=b(S.image,!1,s.maxTextureSize);_t=ve(S,_t);const bt=o.convert(S.format,S.colorSpace),Ht=o.convert(S.type);let Dt=D(S.internalFormat,bt,Ht,S.colorSpace,S.isVideoTexture);le(et,S);let Tt;const se=S.mipmaps,k=S.isVideoTexture!==!0,Mt=Bt.__version===void 0||ut===!0,St=tt.dataReady,Nt=B(S,_t);if(S.isDepthTexture)Dt=w(S.format===Na,S.type),Mt&&(k?e.texStorage2D(n.TEXTURE_2D,1,Dt,_t.width,_t.height):e.texImage2D(n.TEXTURE_2D,0,Dt,_t.width,_t.height,0,bt,Ht,null));else if(S.isDataTexture)if(se.length>0){k&&Mt&&e.texStorage2D(n.TEXTURE_2D,Nt,Dt,se[0].width,se[0].height);for(let vt=0,ct=se.length;vt<ct;vt++)Tt=se[vt],k?St&&e.texSubImage2D(n.TEXTURE_2D,vt,0,0,Tt.width,Tt.height,bt,Ht,Tt.data):e.texImage2D(n.TEXTURE_2D,vt,Dt,Tt.width,Tt.height,0,bt,Ht,Tt.data);S.generateMipmaps=!1}else k?(Mt&&e.texStorage2D(n.TEXTURE_2D,Nt,Dt,_t.width,_t.height),St&&de(S,_t,bt,Ht)):e.texImage2D(n.TEXTURE_2D,0,Dt,_t.width,_t.height,0,bt,Ht,_t.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){k&&Mt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Nt,Dt,se[0].width,se[0].height,_t.depth);for(let vt=0,ct=se.length;vt<ct;vt++)if(Tt=se[vt],S.format!==yi)if(bt!==null)if(k){if(St)if(S.layerUpdates.size>0){const kt=om(Tt.width,Tt.height,S.format,S.type);for(const ie of S.layerUpdates){const Le=Tt.data.subarray(ie*kt/Tt.data.BYTES_PER_ELEMENT,(ie+1)*kt/Tt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,vt,0,0,ie,Tt.width,Tt.height,1,bt,Le)}S.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,vt,0,0,0,Tt.width,Tt.height,_t.depth,bt,Tt.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,vt,Dt,Tt.width,Tt.height,_t.depth,0,Tt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else k?St&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,vt,0,0,0,Tt.width,Tt.height,_t.depth,bt,Ht,Tt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,vt,Dt,Tt.width,Tt.height,_t.depth,0,bt,Ht,Tt.data)}else{k&&Mt&&e.texStorage2D(n.TEXTURE_2D,Nt,Dt,se[0].width,se[0].height);for(let vt=0,ct=se.length;vt<ct;vt++)Tt=se[vt],S.format!==yi?bt!==null?k?St&&e.compressedTexSubImage2D(n.TEXTURE_2D,vt,0,0,Tt.width,Tt.height,bt,Tt.data):e.compressedTexImage2D(n.TEXTURE_2D,vt,Dt,Tt.width,Tt.height,0,Tt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):k?St&&e.texSubImage2D(n.TEXTURE_2D,vt,0,0,Tt.width,Tt.height,bt,Ht,Tt.data):e.texImage2D(n.TEXTURE_2D,vt,Dt,Tt.width,Tt.height,0,bt,Ht,Tt.data)}else if(S.isDataArrayTexture)if(k){if(Mt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Nt,Dt,_t.width,_t.height,_t.depth),St)if(S.layerUpdates.size>0){const vt=om(_t.width,_t.height,S.format,S.type);for(const ct of S.layerUpdates){const kt=_t.data.subarray(ct*vt/_t.data.BYTES_PER_ELEMENT,(ct+1)*vt/_t.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ct,_t.width,_t.height,1,bt,Ht,kt)}S.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,_t.width,_t.height,_t.depth,bt,Ht,_t.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Dt,_t.width,_t.height,_t.depth,0,bt,Ht,_t.data);else if(S.isData3DTexture)k?(Mt&&e.texStorage3D(n.TEXTURE_3D,Nt,Dt,_t.width,_t.height,_t.depth),St&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,_t.width,_t.height,_t.depth,bt,Ht,_t.data)):e.texImage3D(n.TEXTURE_3D,0,Dt,_t.width,_t.height,_t.depth,0,bt,Ht,_t.data);else if(S.isFramebufferTexture){if(Mt)if(k)e.texStorage2D(n.TEXTURE_2D,Nt,Dt,_t.width,_t.height);else{let vt=_t.width,ct=_t.height;for(let kt=0;kt<Nt;kt++)e.texImage2D(n.TEXTURE_2D,kt,Dt,vt,ct,0,bt,Ht,null),vt>>=1,ct>>=1}}else if(se.length>0){if(k&&Mt){const vt=De(se[0]);e.texStorage2D(n.TEXTURE_2D,Nt,Dt,vt.width,vt.height)}for(let vt=0,ct=se.length;vt<ct;vt++)Tt=se[vt],k?St&&e.texSubImage2D(n.TEXTURE_2D,vt,0,0,bt,Ht,Tt):e.texImage2D(n.TEXTURE_2D,vt,Dt,bt,Ht,Tt);S.generateMipmaps=!1}else if(k){if(Mt){const vt=De(_t);e.texStorage2D(n.TEXTURE_2D,Nt,Dt,vt.width,vt.height)}St&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,bt,Ht,_t)}else e.texImage2D(n.TEXTURE_2D,0,Dt,bt,Ht,_t);x(S)&&_(et),Bt.__version=tt.version,S.onUpdate&&S.onUpdate(S)}P.__version=S.version}function pt(P,S,G){if(S.image.length!==6)return;const et=we(P,S),ut=S.source;e.bindTexture(n.TEXTURE_CUBE_MAP,P.__webglTexture,n.TEXTURE0+G);const tt=i.get(ut);if(ut.version!==tt.__version||et===!0){e.activeTexture(n.TEXTURE0+G);const Bt=Te.getPrimaries(Te.workingColorSpace),gt=S.colorSpace===pr?null:Te.getPrimaries(S.colorSpace),Ot=S.colorSpace===pr||Bt===gt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ot);const Ft=S.isCompressedTexture||S.image[0].isCompressedTexture,_t=S.image[0]&&S.image[0].isDataTexture,bt=[];for(let ct=0;ct<6;ct++)!Ft&&!_t?bt[ct]=b(S.image[ct],!0,s.maxCubemapSize):bt[ct]=_t?S.image[ct].image:S.image[ct],bt[ct]=ve(S,bt[ct]);const Ht=bt[0],Dt=o.convert(S.format,S.colorSpace),Tt=o.convert(S.type),se=D(S.internalFormat,Dt,Tt,S.colorSpace),k=S.isVideoTexture!==!0,Mt=tt.__version===void 0||et===!0,St=ut.dataReady;let Nt=B(S,Ht);le(n.TEXTURE_CUBE_MAP,S);let vt;if(Ft){k&&Mt&&e.texStorage2D(n.TEXTURE_CUBE_MAP,Nt,se,Ht.width,Ht.height);for(let ct=0;ct<6;ct++){vt=bt[ct].mipmaps;for(let kt=0;kt<vt.length;kt++){const ie=vt[kt];S.format!==yi?Dt!==null?k?St&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,kt,0,0,ie.width,ie.height,Dt,ie.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,kt,se,ie.width,ie.height,0,ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?St&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,kt,0,0,ie.width,ie.height,Dt,Tt,ie.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,kt,se,ie.width,ie.height,0,Dt,Tt,ie.data)}}}else{if(vt=S.mipmaps,k&&Mt){vt.length>0&&Nt++;const ct=De(bt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,Nt,se,ct.width,ct.height)}for(let ct=0;ct<6;ct++)if(_t){k?St&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,0,0,bt[ct].width,bt[ct].height,Dt,Tt,bt[ct].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,se,bt[ct].width,bt[ct].height,0,Dt,Tt,bt[ct].data);for(let kt=0;kt<vt.length;kt++){const Le=vt[kt].image[ct].image;k?St&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,kt+1,0,0,Le.width,Le.height,Dt,Tt,Le.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,kt+1,se,Le.width,Le.height,0,Dt,Tt,Le.data)}}else{k?St&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,0,0,Dt,Tt,bt[ct]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,se,Dt,Tt,bt[ct]);for(let kt=0;kt<vt.length;kt++){const ie=vt[kt];k?St&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,kt+1,0,0,Dt,Tt,ie.image[ct]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,kt+1,se,Dt,Tt,ie.image[ct])}}}x(S)&&_(n.TEXTURE_CUBE_MAP),tt.__version=ut.version,S.onUpdate&&S.onUpdate(S)}P.__version=S.version}function Pt(P,S,G,et,ut,tt){const Bt=o.convert(G.format,G.colorSpace),gt=o.convert(G.type),Ot=D(G.internalFormat,Bt,gt,G.colorSpace),Ft=i.get(S),_t=i.get(G);if(_t.__renderTarget=S,!Ft.__hasExternalTextures){const bt=Math.max(1,S.width>>tt),Ht=Math.max(1,S.height>>tt);ut===n.TEXTURE_3D||ut===n.TEXTURE_2D_ARRAY?e.texImage3D(ut,tt,Ot,bt,Ht,S.depth,0,Bt,gt,null):e.texImage2D(ut,tt,Ot,bt,Ht,0,Bt,gt,null)}e.bindFramebuffer(n.FRAMEBUFFER,P),yt(S)?u.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,et,ut,_t.__webglTexture,0,Ee(S)):(ut===n.TEXTURE_2D||ut>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ut<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,et,ut,_t.__webglTexture,tt),e.bindFramebuffer(n.FRAMEBUFFER,null)}function Zt(P,S,G){if(n.bindRenderbuffer(n.RENDERBUFFER,P),S.depthBuffer){const et=S.depthTexture,ut=et&&et.isDepthTexture?et.type:null,tt=w(S.stencilBuffer,ut),Bt=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,gt=Ee(S);yt(S)?u.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,gt,tt,S.width,S.height):G?n.renderbufferStorageMultisample(n.RENDERBUFFER,gt,tt,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,tt,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Bt,n.RENDERBUFFER,P)}else{const et=S.textures;for(let ut=0;ut<et.length;ut++){const tt=et[ut],Bt=o.convert(tt.format,tt.colorSpace),gt=o.convert(tt.type),Ot=D(tt.internalFormat,Bt,gt,tt.colorSpace),Ft=Ee(S);G&&yt(S)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ft,Ot,S.width,S.height):yt(S)?u.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ft,Ot,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,Ot,S.width,S.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Gt(P,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,P),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const et=i.get(S.depthTexture);et.__renderTarget=S,(!et.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),it(S.depthTexture,0);const ut=et.__webglTexture,tt=Ee(S);if(S.depthTexture.format===Ua)yt(S)?u.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ut,0,tt):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ut,0);else if(S.depthTexture.format===Na)yt(S)?u.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ut,0,tt):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ut,0);else throw new Error("Unknown depthTexture format")}function ce(P){const S=i.get(P),G=P.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==P.depthTexture){const et=P.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),et){const ut=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,et.removeEventListener("dispose",ut)};et.addEventListener("dispose",ut),S.__depthDisposeCallback=ut}S.__boundDepthTexture=et}if(P.depthTexture&&!S.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");const et=P.texture.mipmaps;et&&et.length>0?Gt(S.__webglFramebuffer[0],P):Gt(S.__webglFramebuffer,P)}else if(G){S.__webglDepthbuffer=[];for(let et=0;et<6;et++)if(e.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer[et]),S.__webglDepthbuffer[et]===void 0)S.__webglDepthbuffer[et]=n.createRenderbuffer(),Zt(S.__webglDepthbuffer[et],P,!1);else{const ut=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,tt=S.__webglDepthbuffer[et];n.bindRenderbuffer(n.RENDERBUFFER,tt),n.framebufferRenderbuffer(n.FRAMEBUFFER,ut,n.RENDERBUFFER,tt)}}else{const et=P.texture.mipmaps;if(et&&et.length>0?e.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=n.createRenderbuffer(),Zt(S.__webglDepthbuffer,P,!1);else{const ut=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,tt=S.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,tt),n.framebufferRenderbuffer(n.FRAMEBUFFER,ut,n.RENDERBUFFER,tt)}}e.bindFramebuffer(n.FRAMEBUFFER,null)}function Ye(P,S,G){const et=i.get(P);S!==void 0&&Pt(et.__webglFramebuffer,P,P.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),G!==void 0&&ce(P)}function U(P){const S=P.texture,G=i.get(P),et=i.get(S);P.addEventListener("dispose",N);const ut=P.textures,tt=P.isWebGLCubeRenderTarget===!0,Bt=ut.length>1;if(Bt||(et.__webglTexture===void 0&&(et.__webglTexture=n.createTexture()),et.__version=S.version,l.memory.textures++),tt){G.__webglFramebuffer=[];for(let gt=0;gt<6;gt++)if(S.mipmaps&&S.mipmaps.length>0){G.__webglFramebuffer[gt]=[];for(let Ot=0;Ot<S.mipmaps.length;Ot++)G.__webglFramebuffer[gt][Ot]=n.createFramebuffer()}else G.__webglFramebuffer[gt]=n.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){G.__webglFramebuffer=[];for(let gt=0;gt<S.mipmaps.length;gt++)G.__webglFramebuffer[gt]=n.createFramebuffer()}else G.__webglFramebuffer=n.createFramebuffer();if(Bt)for(let gt=0,Ot=ut.length;gt<Ot;gt++){const Ft=i.get(ut[gt]);Ft.__webglTexture===void 0&&(Ft.__webglTexture=n.createTexture(),l.memory.textures++)}if(P.samples>0&&yt(P)===!1){G.__webglMultisampledFramebuffer=n.createFramebuffer(),G.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let gt=0;gt<ut.length;gt++){const Ot=ut[gt];G.__webglColorRenderbuffer[gt]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,G.__webglColorRenderbuffer[gt]);const Ft=o.convert(Ot.format,Ot.colorSpace),_t=o.convert(Ot.type),bt=D(Ot.internalFormat,Ft,_t,Ot.colorSpace,P.isXRRenderTarget===!0),Ht=Ee(P);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ht,bt,P.width,P.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+gt,n.RENDERBUFFER,G.__webglColorRenderbuffer[gt])}n.bindRenderbuffer(n.RENDERBUFFER,null),P.depthBuffer&&(G.__webglDepthRenderbuffer=n.createRenderbuffer(),Zt(G.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(tt){e.bindTexture(n.TEXTURE_CUBE_MAP,et.__webglTexture),le(n.TEXTURE_CUBE_MAP,S);for(let gt=0;gt<6;gt++)if(S.mipmaps&&S.mipmaps.length>0)for(let Ot=0;Ot<S.mipmaps.length;Ot++)Pt(G.__webglFramebuffer[gt][Ot],P,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Ot);else Pt(G.__webglFramebuffer[gt],P,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0);x(S)&&_(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Bt){for(let gt=0,Ot=ut.length;gt<Ot;gt++){const Ft=ut[gt],_t=i.get(Ft);let bt=n.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(bt=P.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(bt,_t.__webglTexture),le(bt,Ft),Pt(G.__webglFramebuffer,P,Ft,n.COLOR_ATTACHMENT0+gt,bt,0),x(Ft)&&_(bt)}e.unbindTexture()}else{let gt=n.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(gt=P.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(gt,et.__webglTexture),le(gt,S),S.mipmaps&&S.mipmaps.length>0)for(let Ot=0;Ot<S.mipmaps.length;Ot++)Pt(G.__webglFramebuffer[Ot],P,S,n.COLOR_ATTACHMENT0,gt,Ot);else Pt(G.__webglFramebuffer,P,S,n.COLOR_ATTACHMENT0,gt,0);x(S)&&_(gt),e.unbindTexture()}P.depthBuffer&&ce(P)}function _e(P){const S=P.textures;for(let G=0,et=S.length;G<et;G++){const ut=S[G];if(x(ut)){const tt=I(P),Bt=i.get(ut).__webglTexture;e.bindTexture(tt,Bt),_(tt),e.unbindTexture()}}}const Qt=[],jt=[];function mt(P){if(P.samples>0){if(yt(P)===!1){const S=P.textures,G=P.width,et=P.height;let ut=n.COLOR_BUFFER_BIT;const tt=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Bt=i.get(P),gt=S.length>1;if(gt)for(let Ft=0;Ft<S.length;Ft++)e.bindFramebuffer(n.FRAMEBUFFER,Bt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ft,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,Bt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ft,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,Bt.__webglMultisampledFramebuffer);const Ot=P.texture.mipmaps;Ot&&Ot.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Bt.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Bt.__webglFramebuffer);for(let Ft=0;Ft<S.length;Ft++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(ut|=n.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(ut|=n.STENCIL_BUFFER_BIT)),gt){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Bt.__webglColorRenderbuffer[Ft]);const _t=i.get(S[Ft]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,_t,0)}n.blitFramebuffer(0,0,G,et,0,0,G,et,ut,n.NEAREST),f===!0&&(Qt.length=0,jt.length=0,Qt.push(n.COLOR_ATTACHMENT0+Ft),P.depthBuffer&&P.resolveDepthBuffer===!1&&(Qt.push(tt),jt.push(tt),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,jt)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Qt))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),gt)for(let Ft=0;Ft<S.length;Ft++){e.bindFramebuffer(n.FRAMEBUFFER,Bt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ft,n.RENDERBUFFER,Bt.__webglColorRenderbuffer[Ft]);const _t=i.get(S[Ft]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,Bt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ft,n.TEXTURE_2D,_t,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Bt.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&f){const S=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[S])}}}function Ee(P){return Math.min(s.maxSamples,P.samples)}function yt(P){const S=i.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Kt(P){const S=l.render.frame;p.get(P)!==S&&(p.set(P,S),P.update())}function ve(P,S){const G=P.colorSpace,et=P.format,ut=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||G!==Ys&&G!==pr&&(Te.getTransfer(G)===Fe?(et!==yi||ut!==wi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),S}function De(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(h.width=P.naturalWidth||P.width,h.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(h.width=P.displayWidth,h.height=P.displayHeight):(h.width=P.width,h.height=P.height),h}this.allocateTextureUnit=Z,this.resetTextureUnits=$,this.setTexture2D=it,this.setTexture2DArray=lt,this.setTexture3D=ft,this.setTextureCube=Q,this.rebindTextures=Ye,this.setupRenderTarget=U,this.updateRenderTargetMipmap=_e,this.updateMultisampleRenderTarget=mt,this.setupDepthRenderbuffer=ce,this.setupFrameBufferTexture=Pt,this.useMultisampledRTT=yt}function DR(n,t){function e(i,s=pr){let o;const l=Te.getTransfer(s);if(i===wi)return n.UNSIGNED_BYTE;if(i===Ph)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Dh)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Ym)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Zm)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Xm)return n.BYTE;if(i===qm)return n.SHORT;if(i===La)return n.UNSIGNED_SHORT;if(i===Ch)return n.INT;if(i===qr)return n.UNSIGNED_INT;if(i===xi)return n.FLOAT;if(i===za)return n.HALF_FLOAT;if(i===Km)return n.ALPHA;if(i===$m)return n.RGB;if(i===yi)return n.RGBA;if(i===Ua)return n.DEPTH_COMPONENT;if(i===Na)return n.DEPTH_STENCIL;if(i===Lh)return n.RED;if(i===Ih)return n.RED_INTEGER;if(i===jm)return n.RG;if(i===Uh)return n.RG_INTEGER;if(i===Nh)return n.RGBA_INTEGER;if(i===ml||i===_l||i===gl||i===vl)if(l===Fe)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(i===ml)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===_l)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===gl)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===vl)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(i===ml)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===_l)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===gl)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===vl)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===qu||i===Yu||i===Zu||i===Ku)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(i===qu)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Yu)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Zu)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ku)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===$u||i===ju||i===Ju)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(i===$u||i===ju)return l===Fe?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(i===Ju)return l===Fe?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Qu||i===th||i===eh||i===nh||i===ih||i===rh||i===sh||i===ah||i===oh||i===lh||i===ch||i===uh||i===hh||i===fh)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(i===Qu)return l===Fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===th)return l===Fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===eh)return l===Fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===nh)return l===Fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===ih)return l===Fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===rh)return l===Fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===sh)return l===Fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===ah)return l===Fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===oh)return l===Fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===lh)return l===Fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===ch)return l===Fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===uh)return l===Fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===hh)return l===Fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===fh)return l===Fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===dh||i===ph||i===mh)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(i===dh)return l===Fe?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===ph)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===mh)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===_h||i===gh||i===vh||i===xh)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(i===_h)return o.COMPRESSED_RED_RGTC1_EXT;if(i===gh)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===vh)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===xh)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ia?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}const LR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,IR=`
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

}`;class UR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const i=new d_(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new Ri({vertexShader:LR,fragmentShader:IR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new oi(new Ha(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class NR extends jr{constructor(t,e){super();const i=this;let s=null,o=1,l=null,u="local-floor",f=1,h=null,p=null,m=null,g=null,v=null,M=null;const b=typeof XRWebGLBinding<"u",x=new UR,_={},I=e.getContextAttributes();let D=null,w=null;const B=[],F=[],N=new Wt;let Y=null;const C=new si;C.viewport=new Ke;const R=new si;R.viewport=new Ke;const z=[C,R],$=new Jb;let Z=null,ot=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(rt){let pt=B[rt];return pt===void 0&&(pt=new _u,B[rt]=pt),pt.getTargetRaySpace()},this.getControllerGrip=function(rt){let pt=B[rt];return pt===void 0&&(pt=new _u,B[rt]=pt),pt.getGripSpace()},this.getHand=function(rt){let pt=B[rt];return pt===void 0&&(pt=new _u,B[rt]=pt),pt.getHandSpace()};function it(rt){const pt=F.indexOf(rt.inputSource);if(pt===-1)return;const Pt=B[pt];Pt!==void 0&&(Pt.update(rt.inputSource,rt.frame,h||l),Pt.dispatchEvent({type:rt.type,data:rt.inputSource}))}function lt(){s.removeEventListener("select",it),s.removeEventListener("selectstart",it),s.removeEventListener("selectend",it),s.removeEventListener("squeeze",it),s.removeEventListener("squeezestart",it),s.removeEventListener("squeezeend",it),s.removeEventListener("end",lt),s.removeEventListener("inputsourceschange",ft);for(let rt=0;rt<B.length;rt++){const pt=F[rt];pt!==null&&(F[rt]=null,B[rt].disconnect(pt))}Z=null,ot=null,x.reset();for(const rt in _)delete _[rt];t.setRenderTarget(D),v=null,g=null,m=null,s=null,w=null,de.stop(),i.isPresenting=!1,t.setPixelRatio(Y),t.setSize(N.width,N.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(rt){o=rt,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(rt){u=rt,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||l},this.setReferenceSpace=function(rt){h=rt},this.getBaseLayer=function(){return g!==null?g:v},this.getBinding=function(){return m===null&&b&&(m=new XRWebGLBinding(s,e)),m},this.getFrame=function(){return M},this.getSession=function(){return s},this.setSession=async function(rt){if(s=rt,s!==null){if(D=t.getRenderTarget(),s.addEventListener("select",it),s.addEventListener("selectstart",it),s.addEventListener("selectend",it),s.addEventListener("squeeze",it),s.addEventListener("squeezestart",it),s.addEventListener("squeezeend",it),s.addEventListener("end",lt),s.addEventListener("inputsourceschange",ft),I.xrCompatible!==!0&&await e.makeXRCompatible(),Y=t.getPixelRatio(),t.getSize(N),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let Pt=null,Zt=null,Gt=null;I.depth&&(Gt=I.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Pt=I.stencil?Na:Ua,Zt=I.stencil?Ia:qr);const ce={colorFormat:e.RGBA8,depthFormat:Gt,scaleFactor:o};m=this.getBinding(),g=m.createProjectionLayer(ce),s.updateRenderState({layers:[g]}),t.setPixelRatio(1),t.setSize(g.textureWidth,g.textureHeight,!1),w=new Zr(g.textureWidth,g.textureHeight,{format:yi,type:wi,depthTexture:new f_(g.textureWidth,g.textureHeight,Zt,void 0,void 0,void 0,void 0,void 0,void 0,Pt),stencilBuffer:I.stencil,colorSpace:t.outputColorSpace,samples:I.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const Pt={antialias:I.antialias,alpha:!0,depth:I.depth,stencil:I.stencil,framebufferScaleFactor:o};v=new XRWebGLLayer(s,e,Pt),s.updateRenderState({baseLayer:v}),t.setPixelRatio(1),t.setSize(v.framebufferWidth,v.framebufferHeight,!1),w=new Zr(v.framebufferWidth,v.framebufferHeight,{format:yi,type:wi,colorSpace:t.outputColorSpace,stencilBuffer:I.stencil,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(f),h=null,l=await s.requestReferenceSpace(u),de.setContext(s),de.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function ft(rt){for(let pt=0;pt<rt.removed.length;pt++){const Pt=rt.removed[pt],Zt=F.indexOf(Pt);Zt>=0&&(F[Zt]=null,B[Zt].disconnect(Pt))}for(let pt=0;pt<rt.added.length;pt++){const Pt=rt.added[pt];let Zt=F.indexOf(Pt);if(Zt===-1){for(let ce=0;ce<B.length;ce++)if(ce>=F.length){F.push(Pt),Zt=ce;break}else if(F[ce]===null){F[ce]=Pt,Zt=ce;break}if(Zt===-1)break}const Gt=B[Zt];Gt&&Gt.connect(Pt)}}const Q=new V,Et=new V;function Rt(rt,pt,Pt){Q.setFromMatrixPosition(pt.matrixWorld),Et.setFromMatrixPosition(Pt.matrixWorld);const Zt=Q.distanceTo(Et),Gt=pt.projectionMatrix.elements,ce=Pt.projectionMatrix.elements,Ye=Gt[14]/(Gt[10]-1),U=Gt[14]/(Gt[10]+1),_e=(Gt[9]+1)/Gt[5],Qt=(Gt[9]-1)/Gt[5],jt=(Gt[8]-1)/Gt[0],mt=(ce[8]+1)/ce[0],Ee=Ye*jt,yt=Ye*mt,Kt=Zt/(-jt+mt),ve=Kt*-jt;if(pt.matrixWorld.decompose(rt.position,rt.quaternion,rt.scale),rt.translateX(ve),rt.translateZ(Kt),rt.matrixWorld.compose(rt.position,rt.quaternion,rt.scale),rt.matrixWorldInverse.copy(rt.matrixWorld).invert(),Gt[10]===-1)rt.projectionMatrix.copy(pt.projectionMatrix),rt.projectionMatrixInverse.copy(pt.projectionMatrixInverse);else{const De=Ye+Kt,P=U+Kt,S=Ee-ve,G=yt+(Zt-ve),et=_e*U/P*De,ut=Qt*U/P*De;rt.projectionMatrix.makePerspective(S,G,et,ut,De,P),rt.projectionMatrixInverse.copy(rt.projectionMatrix).invert()}}function It(rt,pt){pt===null?rt.matrixWorld.copy(rt.matrix):rt.matrixWorld.multiplyMatrices(pt.matrixWorld,rt.matrix),rt.matrixWorldInverse.copy(rt.matrixWorld).invert()}this.updateCamera=function(rt){if(s===null)return;let pt=rt.near,Pt=rt.far;x.texture!==null&&(x.depthNear>0&&(pt=x.depthNear),x.depthFar>0&&(Pt=x.depthFar)),$.near=R.near=C.near=pt,$.far=R.far=C.far=Pt,(Z!==$.near||ot!==$.far)&&(s.updateRenderState({depthNear:$.near,depthFar:$.far}),Z=$.near,ot=$.far),$.layers.mask=rt.layers.mask|6,C.layers.mask=$.layers.mask&3,R.layers.mask=$.layers.mask&5;const Zt=rt.parent,Gt=$.cameras;It($,Zt);for(let ce=0;ce<Gt.length;ce++)It(Gt[ce],Zt);Gt.length===2?Rt($,C,R):$.projectionMatrix.copy(C.projectionMatrix),le(rt,$,Zt)};function le(rt,pt,Pt){Pt===null?rt.matrix.copy(pt.matrixWorld):(rt.matrix.copy(Pt.matrixWorld),rt.matrix.invert(),rt.matrix.multiply(pt.matrixWorld)),rt.matrix.decompose(rt.position,rt.quaternion,rt.scale),rt.updateMatrixWorld(!0),rt.projectionMatrix.copy(pt.projectionMatrix),rt.projectionMatrixInverse.copy(pt.projectionMatrixInverse),rt.isPerspectiveCamera&&(rt.fov=Oa*2*Math.atan(1/rt.projectionMatrix.elements[5]),rt.zoom=1)}this.getCamera=function(){return $},this.getFoveation=function(){if(!(g===null&&v===null))return f},this.setFoveation=function(rt){f=rt,g!==null&&(g.fixedFoveation=rt),v!==null&&v.fixedFoveation!==void 0&&(v.fixedFoveation=rt)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh($)},this.getCameraTexture=function(rt){return _[rt]};let we=null;function Ne(rt,pt){if(p=pt.getViewerPose(h||l),M=pt,p!==null){const Pt=p.views;v!==null&&(t.setRenderTargetFramebuffer(w,v.framebuffer),t.setRenderTarget(w));let Zt=!1;Pt.length!==$.cameras.length&&($.cameras.length=0,Zt=!0);for(let U=0;U<Pt.length;U++){const _e=Pt[U];let Qt=null;if(v!==null)Qt=v.getViewport(_e);else{const mt=m.getViewSubImage(g,_e);Qt=mt.viewport,U===0&&(t.setRenderTargetTextures(w,mt.colorTexture,mt.depthStencilTexture),t.setRenderTarget(w))}let jt=z[U];jt===void 0&&(jt=new si,jt.layers.enable(U),jt.viewport=new Ke,z[U]=jt),jt.matrix.fromArray(_e.transform.matrix),jt.matrix.decompose(jt.position,jt.quaternion,jt.scale),jt.projectionMatrix.fromArray(_e.projectionMatrix),jt.projectionMatrixInverse.copy(jt.projectionMatrix).invert(),jt.viewport.set(Qt.x,Qt.y,Qt.width,Qt.height),U===0&&($.matrix.copy(jt.matrix),$.matrix.decompose($.position,$.quaternion,$.scale)),Zt===!0&&$.cameras.push(jt)}const Gt=s.enabledFeatures;if(Gt&&Gt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&b){m=i.getBinding();const U=m.getDepthInformation(Pt[0]);U&&U.isValid&&U.texture&&x.init(U,s.renderState)}if(Gt&&Gt.includes("camera-access")&&b){t.state.unbindTexture(),m=i.getBinding();for(let U=0;U<Pt.length;U++){const _e=Pt[U].camera;if(_e){let Qt=_[_e];Qt||(Qt=new d_,_[_e]=Qt);const jt=m.getCameraImage(_e);Qt.sourceTexture=jt}}}}for(let Pt=0;Pt<B.length;Pt++){const Zt=F[Pt],Gt=B[Pt];Zt!==null&&Gt!==void 0&&Gt.update(Zt,pt,h||l)}we&&we(rt,pt),pt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:pt}),M=null}const de=new v_;de.setAnimationLoop(Ne),this.setAnimationLoop=function(rt){we=rt},this.dispose=function(){}}}const zr=new Yn,OR=new ze;function FR(n,t){function e(x,_){x.matrixAutoUpdate===!0&&x.updateMatrix(),_.value.copy(x.matrix)}function i(x,_){_.color.getRGB(x.fogColor.value,a_(n)),_.isFog?(x.fogNear.value=_.near,x.fogFar.value=_.far):_.isFogExp2&&(x.fogDensity.value=_.density)}function s(x,_,I,D,w){_.isMeshBasicMaterial||_.isMeshLambertMaterial?o(x,_):_.isMeshToonMaterial?(o(x,_),m(x,_)):_.isMeshPhongMaterial?(o(x,_),p(x,_)):_.isMeshStandardMaterial?(o(x,_),g(x,_),_.isMeshPhysicalMaterial&&v(x,_,w)):_.isMeshMatcapMaterial?(o(x,_),M(x,_)):_.isMeshDepthMaterial?o(x,_):_.isMeshDistanceMaterial?(o(x,_),b(x,_)):_.isMeshNormalMaterial?o(x,_):_.isLineBasicMaterial?(l(x,_),_.isLineDashedMaterial&&u(x,_)):_.isPointsMaterial?f(x,_,I,D):_.isSpriteMaterial?h(x,_):_.isShadowMaterial?(x.color.value.copy(_.color),x.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function o(x,_){x.opacity.value=_.opacity,_.color&&x.diffuse.value.copy(_.color),_.emissive&&x.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(x.map.value=_.map,e(_.map,x.mapTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,e(_.alphaMap,x.alphaMapTransform)),_.bumpMap&&(x.bumpMap.value=_.bumpMap,e(_.bumpMap,x.bumpMapTransform),x.bumpScale.value=_.bumpScale,_.side===On&&(x.bumpScale.value*=-1)),_.normalMap&&(x.normalMap.value=_.normalMap,e(_.normalMap,x.normalMapTransform),x.normalScale.value.copy(_.normalScale),_.side===On&&x.normalScale.value.negate()),_.displacementMap&&(x.displacementMap.value=_.displacementMap,e(_.displacementMap,x.displacementMapTransform),x.displacementScale.value=_.displacementScale,x.displacementBias.value=_.displacementBias),_.emissiveMap&&(x.emissiveMap.value=_.emissiveMap,e(_.emissiveMap,x.emissiveMapTransform)),_.specularMap&&(x.specularMap.value=_.specularMap,e(_.specularMap,x.specularMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest);const I=t.get(_),D=I.envMap,w=I.envMapRotation;D&&(x.envMap.value=D,zr.copy(w),zr.x*=-1,zr.y*=-1,zr.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(zr.y*=-1,zr.z*=-1),x.envMapRotation.value.setFromMatrix4(OR.makeRotationFromEuler(zr)),x.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=_.reflectivity,x.ior.value=_.ior,x.refractionRatio.value=_.refractionRatio),_.lightMap&&(x.lightMap.value=_.lightMap,x.lightMapIntensity.value=_.lightMapIntensity,e(_.lightMap,x.lightMapTransform)),_.aoMap&&(x.aoMap.value=_.aoMap,x.aoMapIntensity.value=_.aoMapIntensity,e(_.aoMap,x.aoMapTransform))}function l(x,_){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,_.map&&(x.map.value=_.map,e(_.map,x.mapTransform))}function u(x,_){x.dashSize.value=_.dashSize,x.totalSize.value=_.dashSize+_.gapSize,x.scale.value=_.scale}function f(x,_,I,D){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,x.size.value=_.size*I,x.scale.value=D*.5,_.map&&(x.map.value=_.map,e(_.map,x.uvTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,e(_.alphaMap,x.alphaMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest)}function h(x,_){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,x.rotation.value=_.rotation,_.map&&(x.map.value=_.map,e(_.map,x.mapTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,e(_.alphaMap,x.alphaMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest)}function p(x,_){x.specular.value.copy(_.specular),x.shininess.value=Math.max(_.shininess,1e-4)}function m(x,_){_.gradientMap&&(x.gradientMap.value=_.gradientMap)}function g(x,_){x.metalness.value=_.metalness,_.metalnessMap&&(x.metalnessMap.value=_.metalnessMap,e(_.metalnessMap,x.metalnessMapTransform)),x.roughness.value=_.roughness,_.roughnessMap&&(x.roughnessMap.value=_.roughnessMap,e(_.roughnessMap,x.roughnessMapTransform)),_.envMap&&(x.envMapIntensity.value=_.envMapIntensity)}function v(x,_,I){x.ior.value=_.ior,_.sheen>0&&(x.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),x.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(x.sheenColorMap.value=_.sheenColorMap,e(_.sheenColorMap,x.sheenColorMapTransform)),_.sheenRoughnessMap&&(x.sheenRoughnessMap.value=_.sheenRoughnessMap,e(_.sheenRoughnessMap,x.sheenRoughnessMapTransform))),_.clearcoat>0&&(x.clearcoat.value=_.clearcoat,x.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(x.clearcoatMap.value=_.clearcoatMap,e(_.clearcoatMap,x.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,e(_.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(x.clearcoatNormalMap.value=_.clearcoatNormalMap,e(_.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===On&&x.clearcoatNormalScale.value.negate())),_.dispersion>0&&(x.dispersion.value=_.dispersion),_.iridescence>0&&(x.iridescence.value=_.iridescence,x.iridescenceIOR.value=_.iridescenceIOR,x.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(x.iridescenceMap.value=_.iridescenceMap,e(_.iridescenceMap,x.iridescenceMapTransform)),_.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=_.iridescenceThicknessMap,e(_.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),_.transmission>0&&(x.transmission.value=_.transmission,x.transmissionSamplerMap.value=I.texture,x.transmissionSamplerSize.value.set(I.width,I.height),_.transmissionMap&&(x.transmissionMap.value=_.transmissionMap,e(_.transmissionMap,x.transmissionMapTransform)),x.thickness.value=_.thickness,_.thicknessMap&&(x.thicknessMap.value=_.thicknessMap,e(_.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=_.attenuationDistance,x.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(x.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(x.anisotropyMap.value=_.anisotropyMap,e(_.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=_.specularIntensity,x.specularColor.value.copy(_.specularColor),_.specularColorMap&&(x.specularColorMap.value=_.specularColorMap,e(_.specularColorMap,x.specularColorMapTransform)),_.specularIntensityMap&&(x.specularIntensityMap.value=_.specularIntensityMap,e(_.specularIntensityMap,x.specularIntensityMapTransform))}function M(x,_){_.matcap&&(x.matcap.value=_.matcap)}function b(x,_){const I=t.get(_).light;x.referencePosition.value.setFromMatrixPosition(I.matrixWorld),x.nearDistance.value=I.shadow.camera.near,x.farDistance.value=I.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function BR(n,t,e,i){let s={},o={},l=[];const u=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function f(I,D){const w=D.program;i.uniformBlockBinding(I,w)}function h(I,D){let w=s[I.id];w===void 0&&(M(I),w=p(I),s[I.id]=w,I.addEventListener("dispose",x));const B=D.program;i.updateUBOMapping(I,B);const F=t.render.frame;o[I.id]!==F&&(g(I),o[I.id]=F)}function p(I){const D=m();I.__bindingPointIndex=D;const w=n.createBuffer(),B=I.__size,F=I.usage;return n.bindBuffer(n.UNIFORM_BUFFER,w),n.bufferData(n.UNIFORM_BUFFER,B,F),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,D,w),w}function m(){for(let I=0;I<u;I++)if(l.indexOf(I)===-1)return l.push(I),I;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(I){const D=s[I.id],w=I.uniforms,B=I.__cache;n.bindBuffer(n.UNIFORM_BUFFER,D);for(let F=0,N=w.length;F<N;F++){const Y=Array.isArray(w[F])?w[F]:[w[F]];for(let C=0,R=Y.length;C<R;C++){const z=Y[C];if(v(z,F,C,B)===!0){const $=z.__offset,Z=Array.isArray(z.value)?z.value:[z.value];let ot=0;for(let it=0;it<Z.length;it++){const lt=Z[it],ft=b(lt);typeof lt=="number"||typeof lt=="boolean"?(z.__data[0]=lt,n.bufferSubData(n.UNIFORM_BUFFER,$+ot,z.__data)):lt.isMatrix3?(z.__data[0]=lt.elements[0],z.__data[1]=lt.elements[1],z.__data[2]=lt.elements[2],z.__data[3]=0,z.__data[4]=lt.elements[3],z.__data[5]=lt.elements[4],z.__data[6]=lt.elements[5],z.__data[7]=0,z.__data[8]=lt.elements[6],z.__data[9]=lt.elements[7],z.__data[10]=lt.elements[8],z.__data[11]=0):(lt.toArray(z.__data,ot),ot+=ft.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,$,z.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function v(I,D,w,B){const F=I.value,N=D+"_"+w;if(B[N]===void 0)return typeof F=="number"||typeof F=="boolean"?B[N]=F:B[N]=F.clone(),!0;{const Y=B[N];if(typeof F=="number"||typeof F=="boolean"){if(Y!==F)return B[N]=F,!0}else if(Y.equals(F)===!1)return Y.copy(F),!0}return!1}function M(I){const D=I.uniforms;let w=0;const B=16;for(let N=0,Y=D.length;N<Y;N++){const C=Array.isArray(D[N])?D[N]:[D[N]];for(let R=0,z=C.length;R<z;R++){const $=C[R],Z=Array.isArray($.value)?$.value:[$.value];for(let ot=0,it=Z.length;ot<it;ot++){const lt=Z[ot],ft=b(lt),Q=w%B,Et=Q%ft.boundary,Rt=Q+Et;w+=Et,Rt!==0&&B-Rt<ft.storage&&(w+=B-Rt),$.__data=new Float32Array(ft.storage/Float32Array.BYTES_PER_ELEMENT),$.__offset=w,w+=ft.storage}}}const F=w%B;return F>0&&(w+=B-F),I.__size=w,I.__cache={},this}function b(I){const D={boundary:0,storage:0};return typeof I=="number"||typeof I=="boolean"?(D.boundary=4,D.storage=4):I.isVector2?(D.boundary=8,D.storage=8):I.isVector3||I.isColor?(D.boundary=16,D.storage=12):I.isVector4?(D.boundary=16,D.storage=16):I.isMatrix3?(D.boundary=48,D.storage=48):I.isMatrix4?(D.boundary=64,D.storage=64):I.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",I),D}function x(I){const D=I.target;D.removeEventListener("dispose",x);const w=l.indexOf(D.__bindingPointIndex);l.splice(w,1),n.deleteBuffer(s[D.id]),delete s[D.id],delete o[D.id]}function _(){for(const I in s)n.deleteBuffer(s[I]);l=[],s={},o={}}return{bind:f,update:h,dispose:_}}class zR{constructor(t={}){const{canvas:e=KE(),context:i=null,depth:s=!0,stencil:o=!1,alpha:l=!1,antialias:u=!1,premultipliedAlpha:f=!0,preserveDrawingBuffer:h=!1,powerPreference:p="default",failIfMajorPerformanceCaveat:m=!1,reversedDepthBuffer:g=!1}=t;this.isWebGLRenderer=!0;let v;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=i.getContextAttributes().alpha}else v=l;const M=new Uint32Array(4),b=new Int32Array(4);let x=null,_=null;const I=[],D=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=gr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const w=this;let B=!1;this._outputColorSpace=ri;let F=0,N=0,Y=null,C=-1,R=null;const z=new Ke,$=new Ke;let Z=null;const ot=new Yt(0);let it=0,lt=e.width,ft=e.height,Q=1,Et=null,Rt=null;const It=new Ke(0,0,lt,ft),le=new Ke(0,0,lt,ft);let we=!1;const Ne=new Hh;let de=!1,rt=!1;const pt=new ze,Pt=new V,Zt=new Ke,Gt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ce=!1;function Ye(){return Y===null?Q:1}let U=i;function _e(T,X){return e.getContext(T,X)}try{const T={alpha:!0,depth:s,stencil:o,antialias:u,premultipliedAlpha:f,preserveDrawingBuffer:h,powerPreference:p,failIfMajorPerformanceCaveat:m};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Rh}`),e.addEventListener("webglcontextlost",St,!1),e.addEventListener("webglcontextrestored",Nt,!1),e.addEventListener("webglcontextcreationerror",vt,!1),U===null){const X="webgl2";if(U=_e(X,T),U===null)throw _e(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let Qt,jt,mt,Ee,yt,Kt,ve,De,P,S,G,et,ut,tt,Bt,gt,Ot,Ft,_t,bt,Ht,Dt,Tt,se;function k(){Qt=new Kw(U),Qt.init(),Dt=new DR(U,Qt),jt=new Vw(U,Qt,t,Dt),mt=new CR(U,Qt),jt.reversedDepthBuffer&&g&&mt.buffers.depth.setReversed(!0),Ee=new Jw(U),yt=new _R,Kt=new PR(U,Qt,mt,yt,jt,Dt,Ee),ve=new Ww(w),De=new Zw(w),P=new rT(U),Tt=new kw(U,P),S=new $w(U,P,Ee,Tt),G=new t1(U,S,P,Ee),_t=new Qw(U,jt,Kt),gt=new Gw(yt),et=new mR(w,ve,De,Qt,jt,Tt,gt),ut=new FR(w,yt),tt=new vR,Bt=new bR(Qt),Ft=new zw(w,ve,De,mt,G,v,f),Ot=new wR(w,G,jt),se=new BR(U,Ee,jt,mt),bt=new Hw(U,Qt,Ee),Ht=new jw(U,Qt,Ee),Ee.programs=et.programs,w.capabilities=jt,w.extensions=Qt,w.properties=yt,w.renderLists=tt,w.shadowMap=Ot,w.state=mt,w.info=Ee}k();const Mt=new NR(w,U);this.xr=Mt,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const T=Qt.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Qt.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return Q},this.setPixelRatio=function(T){T!==void 0&&(Q=T,this.setSize(lt,ft,!1))},this.getSize=function(T){return T.set(lt,ft)},this.setSize=function(T,X,K=!0){if(Mt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}lt=T,ft=X,e.width=Math.floor(T*Q),e.height=Math.floor(X*Q),K===!0&&(e.style.width=T+"px",e.style.height=X+"px"),this.setViewport(0,0,T,X)},this.getDrawingBufferSize=function(T){return T.set(lt*Q,ft*Q).floor()},this.setDrawingBufferSize=function(T,X,K){lt=T,ft=X,Q=K,e.width=Math.floor(T*K),e.height=Math.floor(X*K),this.setViewport(0,0,T,X)},this.getCurrentViewport=function(T){return T.copy(z)},this.getViewport=function(T){return T.copy(It)},this.setViewport=function(T,X,K,J){T.isVector4?It.set(T.x,T.y,T.z,T.w):It.set(T,X,K,J),mt.viewport(z.copy(It).multiplyScalar(Q).round())},this.getScissor=function(T){return T.copy(le)},this.setScissor=function(T,X,K,J){T.isVector4?le.set(T.x,T.y,T.z,T.w):le.set(T,X,K,J),mt.scissor($.copy(le).multiplyScalar(Q).round())},this.getScissorTest=function(){return we},this.setScissorTest=function(T){mt.setScissorTest(we=T)},this.setOpaqueSort=function(T){Et=T},this.setTransparentSort=function(T){Rt=T},this.getClearColor=function(T){return T.copy(Ft.getClearColor())},this.setClearColor=function(){Ft.setClearColor(...arguments)},this.getClearAlpha=function(){return Ft.getClearAlpha()},this.setClearAlpha=function(){Ft.setClearAlpha(...arguments)},this.clear=function(T=!0,X=!0,K=!0){let J=0;if(T){let q=!1;if(Y!==null){const xt=Y.texture.format;q=xt===Nh||xt===Uh||xt===Ih}if(q){const xt=Y.texture.type,Ct=xt===wi||xt===qr||xt===La||xt===Ia||xt===Ph||xt===Dh,zt=Ft.getClearColor(),Lt=Ft.getClearAlpha(),$t=zt.r,te=zt.g,Xt=zt.b;Ct?(M[0]=$t,M[1]=te,M[2]=Xt,M[3]=Lt,U.clearBufferuiv(U.COLOR,0,M)):(b[0]=$t,b[1]=te,b[2]=Xt,b[3]=Lt,U.clearBufferiv(U.COLOR,0,b))}else J|=U.COLOR_BUFFER_BIT}X&&(J|=U.DEPTH_BUFFER_BIT),K&&(J|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",St,!1),e.removeEventListener("webglcontextrestored",Nt,!1),e.removeEventListener("webglcontextcreationerror",vt,!1),Ft.dispose(),tt.dispose(),Bt.dispose(),yt.dispose(),ve.dispose(),De.dispose(),G.dispose(),Tt.dispose(),se.dispose(),et.dispose(),Mt.dispose(),Mt.removeEventListener("sessionstart",Zn),Mt.removeEventListener("sessionend",ns),Pi.stop()};function St(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),B=!0}function Nt(){console.log("THREE.WebGLRenderer: Context Restored."),B=!1;const T=Ee.autoReset,X=Ot.enabled,K=Ot.autoUpdate,J=Ot.needsUpdate,q=Ot.type;k(),Ee.autoReset=T,Ot.enabled=X,Ot.autoUpdate=K,Ot.needsUpdate=J,Ot.type=q}function vt(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function ct(T){const X=T.target;X.removeEventListener("dispose",ct),kt(X)}function kt(T){ie(T),yt.remove(T)}function ie(T){const X=yt.get(T).programs;X!==void 0&&(X.forEach(function(K){et.releaseProgram(K)}),T.isShaderMaterial&&et.releaseShaderCache(T))}this.renderBufferDirect=function(T,X,K,J,q,xt){X===null&&(X=Gt);const Ct=q.isMesh&&q.matrixWorld.determinant()<0,zt=Bl(T,X,K,J,q);mt.setMaterial(J,Ct);let Lt=K.index,$t=1;if(J.wireframe===!0){if(Lt=S.getWireframeAttribute(K),Lt===void 0)return;$t=2}const te=K.drawRange,Xt=K.attributes.position;let ge=te.start*$t,Re=(te.start+te.count)*$t;xt!==null&&(ge=Math.max(ge,xt.start*$t),Re=Math.min(Re,(xt.start+xt.count)*$t)),Lt!==null?(ge=Math.max(ge,0),Re=Math.min(Re,Lt.count)):Xt!=null&&(ge=Math.max(ge,0),Re=Math.min(Re,Xt.count));const Xe=Re-ge;if(Xe<0||Xe===1/0)return;Tt.setup(q,J,zt,K,Lt);let Oe,Ce=bt;if(Lt!==null&&(Oe=P.get(Lt),Ce=Ht,Ce.setIndex(Oe)),q.isMesh)J.wireframe===!0?(mt.setLineWidth(J.wireframeLinewidth*Ye()),Ce.setMode(U.LINES)):Ce.setMode(U.TRIANGLES);else if(q.isLine){let qt=J.linewidth;qt===void 0&&(qt=1),mt.setLineWidth(qt*Ye()),q.isLineSegments?Ce.setMode(U.LINES):q.isLineLoop?Ce.setMode(U.LINE_LOOP):Ce.setMode(U.LINE_STRIP)}else q.isPoints?Ce.setMode(U.POINTS):q.isSprite&&Ce.setMode(U.TRIANGLES);if(q.isBatchedMesh)if(q._multiDrawInstances!==null)Ba("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ce.renderMultiDrawInstances(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount,q._multiDrawInstances);else if(Qt.get("WEBGL_multi_draw"))Ce.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{const qt=q._multiDrawStarts,ke=q._multiDrawCounts,Se=q._multiDrawCount,pn=Lt?P.get(Lt).bytesPerElement:1,ci=yt.get(J).currentProgram.getUniforms();for(let mn=0;mn<Se;mn++)ci.setValue(U,"_gl_DrawID",mn),Ce.render(qt[mn]/pn,ke[mn])}else if(q.isInstancedMesh)Ce.renderInstances(ge,Xe,q.count);else if(K.isInstancedBufferGeometry){const qt=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,ke=Math.min(K.instanceCount,qt);Ce.renderInstances(ge,Xe,ke)}else Ce.render(ge,Xe)};function Le(T,X,K){T.transparent===!0&&T.side===Yi&&T.forceSinglePass===!1?(T.side=On,T.needsUpdate=!0,rs(T,X,K),T.side=xr,T.needsUpdate=!0,rs(T,X,K),T.side=Yi):rs(T,X,K)}this.compile=function(T,X,K=null){K===null&&(K=T),_=Bt.get(K),_.init(X),D.push(_),K.traverseVisible(function(q){q.isLight&&q.layers.test(X.layers)&&(_.pushLight(q),q.castShadow&&_.pushShadow(q))}),T!==K&&T.traverseVisible(function(q){q.isLight&&q.layers.test(X.layers)&&(_.pushLight(q),q.castShadow&&_.pushShadow(q))}),_.setupLights();const J=new Set;return T.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;const xt=q.material;if(xt)if(Array.isArray(xt))for(let Ct=0;Ct<xt.length;Ct++){const zt=xt[Ct];Le(zt,K,q),J.add(zt)}else Le(xt,K,q),J.add(xt)}),_=D.pop(),J},this.compileAsync=function(T,X,K=null){const J=this.compile(T,X,K);return new Promise(q=>{function xt(){if(J.forEach(function(Ct){yt.get(Ct).currentProgram.isReady()&&J.delete(Ct)}),J.size===0){q(T);return}setTimeout(xt,10)}Qt.get("KHR_parallel_shader_compile")!==null?xt():setTimeout(xt,10)})};let be=null;function li(T){be&&be(T)}function Zn(){Pi.stop()}function ns(){Pi.start()}const Pi=new v_;Pi.setAnimationLoop(li),typeof self<"u"&&Pi.setContext(self),this.setAnimationLoop=function(T){be=T,Mt.setAnimationLoop(T),T===null?Pi.stop():Pi.start()},Mt.addEventListener("sessionstart",Zn),Mt.addEventListener("sessionend",ns),this.render=function(T,X){if(X!==void 0&&X.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(B===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),Mt.enabled===!0&&Mt.isPresenting===!0&&(Mt.cameraAutoUpdate===!0&&Mt.updateCamera(X),X=Mt.getCamera()),T.isScene===!0&&T.onBeforeRender(w,T,X,Y),_=Bt.get(T,D.length),_.init(X),D.push(_),pt.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),Ne.setFromProjectionMatrix(pt,Ai,X.reversedDepth),rt=this.localClippingEnabled,de=gt.init(this.clippingPlanes,rt),x=tt.get(T,I.length),x.init(),I.push(x),Mt.enabled===!0&&Mt.isPresenting===!0){const xt=w.xr.getDepthSensingMesh();xt!==null&&Sr(xt,X,-1/0,w.sortObjects)}Sr(T,X,0,w.sortObjects),x.finish(),w.sortObjects===!0&&x.sort(Et,Rt),ce=Mt.enabled===!1||Mt.isPresenting===!1||Mt.hasDepthSensing()===!1,ce&&Ft.addToRenderList(x,T),this.info.render.frame++,de===!0&&gt.beginShadows();const K=_.state.shadowsArray;Ot.render(K,T,X),de===!0&&gt.endShadows(),this.info.autoReset===!0&&this.info.reset();const J=x.opaque,q=x.transmissive;if(_.setupLights(),X.isArrayCamera){const xt=X.cameras;if(q.length>0)for(let Ct=0,zt=xt.length;Ct<zt;Ct++){const Lt=xt[Ct];qa(J,q,T,Lt)}ce&&Ft.render(T);for(let Ct=0,zt=xt.length;Ct<zt;Ct++){const Lt=xt[Ct];Xa(x,T,Lt,Lt.viewport)}}else q.length>0&&qa(J,q,T,X),ce&&Ft.render(T),Xa(x,T,X);Y!==null&&N===0&&(Kt.updateMultisampleRenderTarget(Y),Kt.updateRenderTargetMipmap(Y)),T.isScene===!0&&T.onAfterRender(w,T,X),Tt.resetDefaultState(),C=-1,R=null,D.pop(),D.length>0?(_=D[D.length-1],de===!0&&gt.setGlobalState(w.clippingPlanes,_.state.camera)):_=null,I.pop(),I.length>0?x=I[I.length-1]:x=null};function Sr(T,X,K,J){if(T.visible===!1)return;if(T.layers.test(X.layers)){if(T.isGroup)K=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(X);else if(T.isLight)_.pushLight(T),T.castShadow&&_.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Ne.intersectsSprite(T)){J&&Zt.setFromMatrixPosition(T.matrixWorld).applyMatrix4(pt);const Ct=G.update(T),zt=T.material;zt.visible&&x.push(T,Ct,zt,K,Zt.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||Ne.intersectsObject(T))){const Ct=G.update(T),zt=T.material;if(J&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Zt.copy(T.boundingSphere.center)):(Ct.boundingSphere===null&&Ct.computeBoundingSphere(),Zt.copy(Ct.boundingSphere.center)),Zt.applyMatrix4(T.matrixWorld).applyMatrix4(pt)),Array.isArray(zt)){const Lt=Ct.groups;for(let $t=0,te=Lt.length;$t<te;$t++){const Xt=Lt[$t],ge=zt[Xt.materialIndex];ge&&ge.visible&&x.push(T,Ct,ge,K,Zt.z,Xt)}}else zt.visible&&x.push(T,Ct,zt,K,Zt.z,null)}}const xt=T.children;for(let Ct=0,zt=xt.length;Ct<zt;Ct++)Sr(xt[Ct],X,K,J)}function Xa(T,X,K,J){const q=T.opaque,xt=T.transmissive,Ct=T.transparent;_.setupLightsView(K),de===!0&&gt.setGlobalState(w.clippingPlanes,K),J&&mt.viewport(z.copy(J)),q.length>0&&is(q,X,K),xt.length>0&&is(xt,X,K),Ct.length>0&&is(Ct,X,K),mt.buffers.depth.setTest(!0),mt.buffers.depth.setMask(!0),mt.buffers.color.setMask(!0),mt.setPolygonOffset(!1)}function qa(T,X,K,J){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[J.id]===void 0&&(_.state.transmissionRenderTarget[J.id]=new Zr(1,1,{generateMipmaps:!0,type:Qt.has("EXT_color_buffer_half_float")||Qt.has("EXT_color_buffer_float")?za:wi,minFilter:Wr,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Te.workingColorSpace}));const xt=_.state.transmissionRenderTarget[J.id],Ct=J.viewport||z;xt.setSize(Ct.z*w.transmissionResolutionScale,Ct.w*w.transmissionResolutionScale);const zt=w.getRenderTarget(),Lt=w.getActiveCubeFace(),$t=w.getActiveMipmapLevel();w.setRenderTarget(xt),w.getClearColor(ot),it=w.getClearAlpha(),it<1&&w.setClearColor(16777215,.5),w.clear(),ce&&Ft.render(K);const te=w.toneMapping;w.toneMapping=gr;const Xt=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),_.setupLightsView(J),de===!0&&gt.setGlobalState(w.clippingPlanes,J),is(T,K,J),Kt.updateMultisampleRenderTarget(xt),Kt.updateRenderTargetMipmap(xt),Qt.has("WEBGL_multisampled_render_to_texture")===!1){let ge=!1;for(let Re=0,Xe=X.length;Re<Xe;Re++){const Oe=X[Re],Ce=Oe.object,qt=Oe.geometry,ke=Oe.material,Se=Oe.group;if(ke.side===Yi&&Ce.layers.test(J.layers)){const pn=ke.side;ke.side=On,ke.needsUpdate=!0,Ya(Ce,K,J,qt,ke,Se),ke.side=pn,ke.needsUpdate=!0,ge=!0}}ge===!0&&(Kt.updateMultisampleRenderTarget(xt),Kt.updateRenderTargetMipmap(xt))}w.setRenderTarget(zt,Lt,$t),w.setClearColor(ot,it),Xt!==void 0&&(J.viewport=Xt),w.toneMapping=te}function is(T,X,K){const J=X.isScene===!0?X.overrideMaterial:null;for(let q=0,xt=T.length;q<xt;q++){const Ct=T[q],zt=Ct.object,Lt=Ct.geometry,$t=Ct.group;let te=Ct.material;te.allowOverride===!0&&J!==null&&(te=J),zt.layers.test(K.layers)&&Ya(zt,X,K,Lt,te,$t)}}function Ya(T,X,K,J,q,xt){T.onBeforeRender(w,X,K,J,q,xt),T.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),q.onBeforeRender(w,X,K,J,T,xt),q.transparent===!0&&q.side===Yi&&q.forceSinglePass===!1?(q.side=On,q.needsUpdate=!0,w.renderBufferDirect(K,X,J,q,T,xt),q.side=xr,q.needsUpdate=!0,w.renderBufferDirect(K,X,J,q,T,xt),q.side=Yi):w.renderBufferDirect(K,X,J,q,T,xt),T.onAfterRender(w,X,K,J,q,xt)}function rs(T,X,K){X.isScene!==!0&&(X=Gt);const J=yt.get(T),q=_.state.lights,xt=_.state.shadowsArray,Ct=q.state.version,zt=et.getParameters(T,q.state,xt,X,K),Lt=et.getProgramCacheKey(zt);let $t=J.programs;J.environment=T.isMeshStandardMaterial?X.environment:null,J.fog=X.fog,J.envMap=(T.isMeshStandardMaterial?De:ve).get(T.envMap||J.environment),J.envMapRotation=J.environment!==null&&T.envMap===null?X.environmentRotation:T.envMapRotation,$t===void 0&&(T.addEventListener("dispose",ct),$t=new Map,J.programs=$t);let te=$t.get(Lt);if(te!==void 0){if(J.currentProgram===te&&J.lightsStateVersion===Ct)return Ka(T,zt),te}else zt.uniforms=et.getUniforms(T),T.onBeforeCompile(zt,w),te=et.acquireProgram(zt,Lt),$t.set(Lt,te),J.uniforms=zt.uniforms;const Xt=J.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Xt.clippingPlanes=gt.uniform),Ka(T,zt),J.needsLights=zl(T),J.lightsStateVersion=Ct,J.needsLights&&(Xt.ambientLightColor.value=q.state.ambient,Xt.lightProbe.value=q.state.probe,Xt.directionalLights.value=q.state.directional,Xt.directionalLightShadows.value=q.state.directionalShadow,Xt.spotLights.value=q.state.spot,Xt.spotLightShadows.value=q.state.spotShadow,Xt.rectAreaLights.value=q.state.rectArea,Xt.ltc_1.value=q.state.rectAreaLTC1,Xt.ltc_2.value=q.state.rectAreaLTC2,Xt.pointLights.value=q.state.point,Xt.pointLightShadows.value=q.state.pointShadow,Xt.hemisphereLights.value=q.state.hemi,Xt.directionalShadowMap.value=q.state.directionalShadowMap,Xt.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Xt.spotShadowMap.value=q.state.spotShadowMap,Xt.spotLightMatrix.value=q.state.spotLightMatrix,Xt.spotLightMap.value=q.state.spotLightMap,Xt.pointShadowMap.value=q.state.pointShadowMap,Xt.pointShadowMatrix.value=q.state.pointShadowMatrix),J.currentProgram=te,J.uniformsList=null,te}function Za(T){if(T.uniformsList===null){const X=T.currentProgram.getUniforms();T.uniformsList=xl.seqWithValue(X.seq,T.uniforms)}return T.uniformsList}function Ka(T,X){const K=yt.get(T);K.outputColorSpace=X.outputColorSpace,K.batching=X.batching,K.batchingColor=X.batchingColor,K.instancing=X.instancing,K.instancingColor=X.instancingColor,K.instancingMorph=X.instancingMorph,K.skinning=X.skinning,K.morphTargets=X.morphTargets,K.morphNormals=X.morphNormals,K.morphColors=X.morphColors,K.morphTargetsCount=X.morphTargetsCount,K.numClippingPlanes=X.numClippingPlanes,K.numIntersection=X.numClipIntersection,K.vertexAlphas=X.vertexAlphas,K.vertexTangents=X.vertexTangents,K.toneMapping=X.toneMapping}function Bl(T,X,K,J,q){X.isScene!==!0&&(X=Gt),Kt.resetTextureUnits();const xt=X.fog,Ct=J.isMeshStandardMaterial?X.environment:null,zt=Y===null?w.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:Ys,Lt=(J.isMeshStandardMaterial?De:ve).get(J.envMap||Ct),$t=J.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,te=!!K.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),Xt=!!K.morphAttributes.position,ge=!!K.morphAttributes.normal,Re=!!K.morphAttributes.color;let Xe=gr;J.toneMapped&&(Y===null||Y.isXRRenderTarget===!0)&&(Xe=w.toneMapping);const Oe=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,Ce=Oe!==void 0?Oe.length:0,qt=yt.get(J),ke=_.state.lights;if(de===!0&&(rt===!0||T!==R)){const hn=T===R&&J.id===C;gt.setState(J,T,hn)}let Se=!1;J.version===qt.__version?(qt.needsLights&&qt.lightsStateVersion!==ke.state.version||qt.outputColorSpace!==zt||q.isBatchedMesh&&qt.batching===!1||!q.isBatchedMesh&&qt.batching===!0||q.isBatchedMesh&&qt.batchingColor===!0&&q.colorTexture===null||q.isBatchedMesh&&qt.batchingColor===!1&&q.colorTexture!==null||q.isInstancedMesh&&qt.instancing===!1||!q.isInstancedMesh&&qt.instancing===!0||q.isSkinnedMesh&&qt.skinning===!1||!q.isSkinnedMesh&&qt.skinning===!0||q.isInstancedMesh&&qt.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&qt.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&qt.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&qt.instancingMorph===!1&&q.morphTexture!==null||qt.envMap!==Lt||J.fog===!0&&qt.fog!==xt||qt.numClippingPlanes!==void 0&&(qt.numClippingPlanes!==gt.numPlanes||qt.numIntersection!==gt.numIntersection)||qt.vertexAlphas!==$t||qt.vertexTangents!==te||qt.morphTargets!==Xt||qt.morphNormals!==ge||qt.morphColors!==Re||qt.toneMapping!==Xe||qt.morphTargetsCount!==Ce)&&(Se=!0):(Se=!0,qt.__version=J.version);let pn=qt.currentProgram;Se===!0&&(pn=rs(J,X,q));let ci=!1,mn=!1,Er=!1;const Ve=pn.getUniforms(),Sn=qt.uniforms;if(mt.useProgram(pn.program)&&(ci=!0,mn=!0,Er=!0),J.id!==C&&(C=J.id,mn=!0),ci||R!==T){mt.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),Ve.setValue(U,"projectionMatrix",T.projectionMatrix),Ve.setValue(U,"viewMatrix",T.matrixWorldInverse);const fn=Ve.map.cameraPosition;fn!==void 0&&fn.setValue(U,Pt.setFromMatrixPosition(T.matrixWorld)),jt.logarithmicDepthBuffer&&Ve.setValue(U,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&Ve.setValue(U,"isOrthographic",T.isOrthographicCamera===!0),R!==T&&(R=T,mn=!0,Er=!0)}if(q.isSkinnedMesh){Ve.setOptional(U,q,"bindMatrix"),Ve.setOptional(U,q,"bindMatrixInverse");const hn=q.skeleton;hn&&(hn.boneTexture===null&&hn.computeBoneTexture(),Ve.setValue(U,"boneTexture",hn.boneTexture,Kt))}q.isBatchedMesh&&(Ve.setOptional(U,q,"batchingTexture"),Ve.setValue(U,"batchingTexture",q._matricesTexture,Kt),Ve.setOptional(U,q,"batchingIdTexture"),Ve.setValue(U,"batchingIdTexture",q._indirectTexture,Kt),Ve.setOptional(U,q,"batchingColorTexture"),q._colorsTexture!==null&&Ve.setValue(U,"batchingColorTexture",q._colorsTexture,Kt));const _n=K.morphAttributes;if((_n.position!==void 0||_n.normal!==void 0||_n.color!==void 0)&&_t.update(q,K,pn),(mn||qt.receiveShadow!==q.receiveShadow)&&(qt.receiveShadow=q.receiveShadow,Ve.setValue(U,"receiveShadow",q.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&(Sn.envMap.value=Lt,Sn.flipEnvMap.value=Lt.isCubeTexture&&Lt.isRenderTargetTexture===!1?-1:1),J.isMeshStandardMaterial&&J.envMap===null&&X.environment!==null&&(Sn.envMapIntensity.value=X.environmentIntensity),mn&&(Ve.setValue(U,"toneMappingExposure",w.toneMappingExposure),qt.needsLights&&$a(Sn,Er),xt&&J.fog===!0&&ut.refreshFogUniforms(Sn,xt),ut.refreshMaterialUniforms(Sn,J,Q,ft,_.state.transmissionRenderTarget[T.id]),xl.upload(U,Za(qt),Sn,Kt)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(xl.upload(U,Za(qt),Sn,Kt),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&Ve.setValue(U,"center",q.center),Ve.setValue(U,"modelViewMatrix",q.modelViewMatrix),Ve.setValue(U,"normalMatrix",q.normalMatrix),Ve.setValue(U,"modelMatrix",q.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){const hn=J.uniformsGroups;for(let fn=0,br=hn.length;fn<br;fn++){const ui=hn[fn];se.update(ui,pn),se.bind(ui,pn)}}return pn}function $a(T,X){T.ambientLightColor.needsUpdate=X,T.lightProbe.needsUpdate=X,T.directionalLights.needsUpdate=X,T.directionalLightShadows.needsUpdate=X,T.pointLights.needsUpdate=X,T.pointLightShadows.needsUpdate=X,T.spotLights.needsUpdate=X,T.spotLightShadows.needsUpdate=X,T.rectAreaLights.needsUpdate=X,T.hemisphereLights.needsUpdate=X}function zl(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return N},this.getRenderTarget=function(){return Y},this.setRenderTargetTextures=function(T,X,K){const J=yt.get(T);J.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,J.__autoAllocateDepthBuffer===!1&&(J.__useRenderToTexture=!1),yt.get(T.texture).__webglTexture=X,yt.get(T.depthTexture).__webglTexture=J.__autoAllocateDepthBuffer?void 0:K,J.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,X){const K=yt.get(T);K.__webglFramebuffer=X,K.__useDefaultFramebuffer=X===void 0};const kl=U.createFramebuffer();this.setRenderTarget=function(T,X=0,K=0){Y=T,F=X,N=K;let J=!0,q=null,xt=!1,Ct=!1;if(T){const Lt=yt.get(T);if(Lt.__useDefaultFramebuffer!==void 0)mt.bindFramebuffer(U.FRAMEBUFFER,null),J=!1;else if(Lt.__webglFramebuffer===void 0)Kt.setupRenderTarget(T);else if(Lt.__hasExternalTextures)Kt.rebindTextures(T,yt.get(T.texture).__webglTexture,yt.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Xt=T.depthTexture;if(Lt.__boundDepthTexture!==Xt){if(Xt!==null&&yt.has(Xt)&&(T.width!==Xt.image.width||T.height!==Xt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Kt.setupDepthRenderbuffer(T)}}const $t=T.texture;($t.isData3DTexture||$t.isDataArrayTexture||$t.isCompressedArrayTexture)&&(Ct=!0);const te=yt.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(te[X])?q=te[X][K]:q=te[X],xt=!0):T.samples>0&&Kt.useMultisampledRTT(T)===!1?q=yt.get(T).__webglMultisampledFramebuffer:Array.isArray(te)?q=te[K]:q=te,z.copy(T.viewport),$.copy(T.scissor),Z=T.scissorTest}else z.copy(It).multiplyScalar(Q).floor(),$.copy(le).multiplyScalar(Q).floor(),Z=we;if(K!==0&&(q=kl),mt.bindFramebuffer(U.FRAMEBUFFER,q)&&J&&mt.drawBuffers(T,q),mt.viewport(z),mt.scissor($),mt.setScissorTest(Z),xt){const Lt=yt.get(T.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+X,Lt.__webglTexture,K)}else if(Ct){const Lt=X;for(let $t=0;$t<T.textures.length;$t++){const te=yt.get(T.textures[$t]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+$t,te.__webglTexture,K,Lt)}}else if(T!==null&&K!==0){const Lt=yt.get(T.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Lt.__webglTexture,K)}C=-1},this.readRenderTargetPixels=function(T,X,K,J,q,xt,Ct,zt=0){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Lt=yt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ct!==void 0&&(Lt=Lt[Ct]),Lt){mt.bindFramebuffer(U.FRAMEBUFFER,Lt);try{const $t=T.textures[zt],te=$t.format,Xt=$t.type;if(!jt.textureFormatReadable(te)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!jt.textureTypeReadable(Xt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=T.width-J&&K>=0&&K<=T.height-q&&(T.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+zt),U.readPixels(X,K,J,q,Dt.convert(te),Dt.convert(Xt),xt))}finally{const $t=Y!==null?yt.get(Y).__webglFramebuffer:null;mt.bindFramebuffer(U.FRAMEBUFFER,$t)}}},this.readRenderTargetPixelsAsync=async function(T,X,K,J,q,xt,Ct,zt=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Lt=yt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ct!==void 0&&(Lt=Lt[Ct]),Lt)if(X>=0&&X<=T.width-J&&K>=0&&K<=T.height-q){mt.bindFramebuffer(U.FRAMEBUFFER,Lt);const $t=T.textures[zt],te=$t.format,Xt=$t.type;if(!jt.textureFormatReadable(te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!jt.textureTypeReadable(Xt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ge=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,ge),U.bufferData(U.PIXEL_PACK_BUFFER,xt.byteLength,U.STREAM_READ),T.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+zt),U.readPixels(X,K,J,q,Dt.convert(te),Dt.convert(Xt),0);const Re=Y!==null?yt.get(Y).__webglFramebuffer:null;mt.bindFramebuffer(U.FRAMEBUFFER,Re);const Xe=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await $E(U,Xe,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,ge),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,xt),U.deleteBuffer(ge),U.deleteSync(Xe),xt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,X=null,K=0){const J=Math.pow(2,-K),q=Math.floor(T.image.width*J),xt=Math.floor(T.image.height*J),Ct=X!==null?X.x:0,zt=X!==null?X.y:0;Kt.setTexture2D(T,0),U.copyTexSubImage2D(U.TEXTURE_2D,K,0,0,Ct,zt,q,xt),mt.unbindTexture()};const Hl=U.createFramebuffer(),Vl=U.createFramebuffer();this.copyTextureToTexture=function(T,X,K=null,J=null,q=0,xt=null){xt===null&&(q!==0?(Ba("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),xt=q,q=0):xt=0);let Ct,zt,Lt,$t,te,Xt,ge,Re,Xe;const Oe=T.isCompressedTexture?T.mipmaps[xt]:T.image;if(K!==null)Ct=K.max.x-K.min.x,zt=K.max.y-K.min.y,Lt=K.isBox3?K.max.z-K.min.z:1,$t=K.min.x,te=K.min.y,Xt=K.isBox3?K.min.z:0;else{const _n=Math.pow(2,-q);Ct=Math.floor(Oe.width*_n),zt=Math.floor(Oe.height*_n),T.isDataArrayTexture?Lt=Oe.depth:T.isData3DTexture?Lt=Math.floor(Oe.depth*_n):Lt=1,$t=0,te=0,Xt=0}J!==null?(ge=J.x,Re=J.y,Xe=J.z):(ge=0,Re=0,Xe=0);const Ce=Dt.convert(X.format),qt=Dt.convert(X.type);let ke;X.isData3DTexture?(Kt.setTexture3D(X,0),ke=U.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(Kt.setTexture2DArray(X,0),ke=U.TEXTURE_2D_ARRAY):(Kt.setTexture2D(X,0),ke=U.TEXTURE_2D),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,X.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,X.unpackAlignment);const Se=U.getParameter(U.UNPACK_ROW_LENGTH),pn=U.getParameter(U.UNPACK_IMAGE_HEIGHT),ci=U.getParameter(U.UNPACK_SKIP_PIXELS),mn=U.getParameter(U.UNPACK_SKIP_ROWS),Er=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,Oe.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Oe.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,$t),U.pixelStorei(U.UNPACK_SKIP_ROWS,te),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Xt);const Ve=T.isDataArrayTexture||T.isData3DTexture,Sn=X.isDataArrayTexture||X.isData3DTexture;if(T.isDepthTexture){const _n=yt.get(T),hn=yt.get(X),fn=yt.get(_n.__renderTarget),br=yt.get(hn.__renderTarget);mt.bindFramebuffer(U.READ_FRAMEBUFFER,fn.__webglFramebuffer),mt.bindFramebuffer(U.DRAW_FRAMEBUFFER,br.__webglFramebuffer);for(let ui=0;ui<Lt;ui++)Ve&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,yt.get(T).__webglTexture,q,Xt+ui),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,yt.get(X).__webglTexture,xt,Xe+ui)),U.blitFramebuffer($t,te,Ct,zt,ge,Re,Ct,zt,U.DEPTH_BUFFER_BIT,U.NEAREST);mt.bindFramebuffer(U.READ_FRAMEBUFFER,null),mt.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(q!==0||T.isRenderTargetTexture||yt.has(T)){const _n=yt.get(T),hn=yt.get(X);mt.bindFramebuffer(U.READ_FRAMEBUFFER,Hl),mt.bindFramebuffer(U.DRAW_FRAMEBUFFER,Vl);for(let fn=0;fn<Lt;fn++)Ve?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,_n.__webglTexture,q,Xt+fn):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,_n.__webglTexture,q),Sn?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,hn.__webglTexture,xt,Xe+fn):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,hn.__webglTexture,xt),q!==0?U.blitFramebuffer($t,te,Ct,zt,ge,Re,Ct,zt,U.COLOR_BUFFER_BIT,U.NEAREST):Sn?U.copyTexSubImage3D(ke,xt,ge,Re,Xe+fn,$t,te,Ct,zt):U.copyTexSubImage2D(ke,xt,ge,Re,$t,te,Ct,zt);mt.bindFramebuffer(U.READ_FRAMEBUFFER,null),mt.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else Sn?T.isDataTexture||T.isData3DTexture?U.texSubImage3D(ke,xt,ge,Re,Xe,Ct,zt,Lt,Ce,qt,Oe.data):X.isCompressedArrayTexture?U.compressedTexSubImage3D(ke,xt,ge,Re,Xe,Ct,zt,Lt,Ce,Oe.data):U.texSubImage3D(ke,xt,ge,Re,Xe,Ct,zt,Lt,Ce,qt,Oe):T.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,xt,ge,Re,Ct,zt,Ce,qt,Oe.data):T.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,xt,ge,Re,Oe.width,Oe.height,Ce,Oe.data):U.texSubImage2D(U.TEXTURE_2D,xt,ge,Re,Ct,zt,Ce,qt,Oe);U.pixelStorei(U.UNPACK_ROW_LENGTH,Se),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,pn),U.pixelStorei(U.UNPACK_SKIP_PIXELS,ci),U.pixelStorei(U.UNPACK_SKIP_ROWS,mn),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Er),xt===0&&X.generateMipmaps&&U.generateMipmap(ke),mt.unbindTexture()},this.initRenderTarget=function(T){yt.get(T).__webglFramebuffer===void 0&&Kt.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?Kt.setTextureCube(T,0):T.isData3DTexture?Kt.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?Kt.setTexture2DArray(T,0):Kt.setTexture2D(T,0),mt.unbindTexture()},this.resetState=function(){F=0,N=0,Y=null,mt.reset(),Tt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ai}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=Te._getDrawingBufferColorSpace(t),e.unpackColorSpace=Te._getUnpackColorSpace()}}var kR=Object.create,E_=Object.defineProperty,HR=Object.getOwnPropertyDescriptor,VR=Object.getOwnPropertyNames,GR=Object.getPrototypeOf,WR=Object.prototype.hasOwnProperty,ht=(n,t)=>()=>(t||n((t={exports:{}}).exports,t),t.exports),XR=(n,t,e,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of VR(t))!WR.call(n,s)&&s!==e&&E_(n,s,{get:()=>t[s],enumerable:!(i=HR(t,s))||i.enumerable});return n},ts=(n,t,e)=>(e=n!=null?kR(GR(n)):{},XR(E_(e,"default",{value:n,enumerable:!0}),n)),Va=ht((n,t)=>{(function(){var e,i="4.17.21",s=200,o="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",l="Expected a function",u="Invalid `variable` option passed into `_.template`",f="__lodash_hash_undefined__",h=500,p="__lodash_placeholder__",m=1,g=2,v=4,M=1,b=2,x=1,_=2,I=4,D=8,w=16,B=32,F=64,N=128,Y=256,C=512,R=30,z="...",$=800,Z=16,ot=1,it=2,lt=3,ft=1/0,Q=9007199254740991,Et=17976931348623157e292,Rt=NaN,It=4294967295,le=It-1,we=It>>>1,Ne=[["ary",N],["bind",x],["bindKey",_],["curry",D],["curryRight",w],["flip",C],["partial",B],["partialRight",F],["rearg",Y]],de="[object Arguments]",rt="[object Array]",pt="[object AsyncFunction]",Pt="[object Boolean]",Zt="[object Date]",Gt="[object DOMException]",ce="[object Error]",Ye="[object Function]",U="[object GeneratorFunction]",_e="[object Map]",Qt="[object Number]",jt="[object Null]",mt="[object Object]",Ee="[object Promise]",yt="[object Proxy]",Kt="[object RegExp]",ve="[object Set]",De="[object String]",P="[object Symbol]",S="[object Undefined]",G="[object WeakMap]",et="[object WeakSet]",ut="[object ArrayBuffer]",tt="[object DataView]",Bt="[object Float32Array]",gt="[object Float64Array]",Ot="[object Int8Array]",Ft="[object Int16Array]",_t="[object Int32Array]",bt="[object Uint8Array]",Ht="[object Uint8ClampedArray]",Dt="[object Uint16Array]",Tt="[object Uint32Array]",se=/\b__p \+= '';/g,k=/\b(__p \+=) '' \+/g,Mt=/(__e\(.*?\)|\b__t\)) \+\n'';/g,St=/&(?:amp|lt|gt|quot|#39);/g,Nt=/[&<>"']/g,vt=RegExp(St.source),ct=RegExp(Nt.source),kt=/<%-([\s\S]+?)%>/g,ie=/<%([\s\S]+?)%>/g,Le=/<%=([\s\S]+?)%>/g,be=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,li=/^\w*$/,Zn=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,ns=/[\\^$.*+?()[\]{}|]/g,Pi=RegExp(ns.source),Sr=/^\s+/,Xa=/\s/,qa=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,is=/\{\n\/\* \[wrapped with (.+)\] \*/,Ya=/,? & /,rs=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,Za=/[()=,{}\[\]\/\s]/,Ka=/\\(\\)?/g,Bl=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,$a=/\w*$/,zl=/^[-+]0x[0-9a-f]+$/i,kl=/^0b[01]+$/i,Hl=/^\[object .+?Constructor\]$/,Vl=/^0o[0-7]+$/i,T=/^(?:0|[1-9]\d*)$/,X=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,K=/($^)/,J=/['\n\r\u2028\u2029\\]/g,q="\\ud800-\\udfff",xt="\\u0300-\\u036f",Ct="\\ufe20-\\ufe2f",zt="\\u20d0-\\u20ff",Lt=xt+Ct+zt,$t="\\u2700-\\u27bf",te="a-z\\xdf-\\xf6\\xf8-\\xff",Xt="\\xac\\xb1\\xd7\\xf7",ge="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",Re="\\u2000-\\u206f",Xe=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Oe="A-Z\\xc0-\\xd6\\xd8-\\xde",Ce="\\ufe0e\\ufe0f",qt=Xt+ge+Re+Xe,ke="['’]",Se="["+q+"]",pn="["+qt+"]",ci="["+Lt+"]",mn="\\d+",Er="["+$t+"]",Ve="["+te+"]",Sn="[^"+q+qt+mn+$t+te+Oe+"]",_n="\\ud83c[\\udffb-\\udfff]",hn="(?:"+ci+"|"+_n+")",fn="[^"+q+"]",br="(?:\\ud83c[\\udde6-\\uddff]){2}",ui="[\\ud800-\\udbff][\\udc00-\\udfff]",ss="["+Oe+"]",uf="\\u200d",hf="(?:"+Ve+"|"+Sn+")",Z_="(?:"+ss+"|"+Sn+")",ff="(?:"+ke+"(?:d|ll|m|re|s|t|ve))?",df="(?:"+ke+"(?:D|LL|M|RE|S|T|VE))?",pf=hn+"?",mf="["+Ce+"]?",K_="(?:"+uf+"(?:"+[fn,br,ui].join("|")+")"+mf+pf+")*",$_="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",j_="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",_f=mf+pf+K_,J_="(?:"+[Er,br,ui].join("|")+")"+_f,Q_="(?:"+[fn+ci+"?",ci,br,ui,Se].join("|")+")",tg=RegExp(ke,"g"),eg=RegExp(ci,"g"),Gl=RegExp(_n+"(?="+_n+")|"+Q_+_f,"g"),ng=RegExp([ss+"?"+Ve+"+"+ff+"(?="+[pn,ss,"$"].join("|")+")",Z_+"+"+df+"(?="+[pn,ss+hf,"$"].join("|")+")",ss+"?"+hf+"+"+ff,ss+"+"+df,j_,$_,mn,J_].join("|"),"g"),ig=RegExp("["+uf+q+Lt+Ce+"]"),rg=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,sg=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],ag=-1,We={};We[Bt]=We[gt]=We[Ot]=We[Ft]=We[_t]=We[bt]=We[Ht]=We[Dt]=We[Tt]=!0,We[de]=We[rt]=We[ut]=We[Pt]=We[tt]=We[Zt]=We[ce]=We[Ye]=We[_e]=We[Qt]=We[mt]=We[Kt]=We[ve]=We[De]=We[G]=!1;var Ge={};Ge[de]=Ge[rt]=Ge[ut]=Ge[tt]=Ge[Pt]=Ge[Zt]=Ge[Bt]=Ge[gt]=Ge[Ot]=Ge[Ft]=Ge[_t]=Ge[_e]=Ge[Qt]=Ge[mt]=Ge[Kt]=Ge[ve]=Ge[De]=Ge[P]=Ge[bt]=Ge[Ht]=Ge[Dt]=Ge[Tt]=!0,Ge[ce]=Ge[Ye]=Ge[G]=!1;var og={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},lg={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},cg={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},ug={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},hg=parseFloat,fg=parseInt,gf=typeof global=="object"&&global&&global.Object===Object&&global,dg=typeof self=="object"&&self&&self.Object===Object&&self,ln=gf||dg||Function("return this")(),Wl=typeof n=="object"&&n&&!n.nodeType&&n,Tr=Wl&&typeof t=="object"&&t&&!t.nodeType&&t,vf=Tr&&Tr.exports===Wl,Xl=vf&&gf.process,Kn=function(){try{var H=Tr&&Tr.require&&Tr.require("util").types;return H||Xl&&Xl.binding&&Xl.binding("util")}catch{}}(),xf=Kn&&Kn.isArrayBuffer,yf=Kn&&Kn.isDate,Mf=Kn&&Kn.isMap,Sf=Kn&&Kn.isRegExp,Ef=Kn&&Kn.isSet,bf=Kn&&Kn.isTypedArray;function Bn(H,nt,j){switch(j.length){case 0:return H.call(nt);case 1:return H.call(nt,j[0]);case 2:return H.call(nt,j[0],j[1]);case 3:return H.call(nt,j[0],j[1],j[2])}return H.apply(nt,j)}function pg(H,nt,j,Ut){for(var re=-1,Ae=H==null?0:H.length;++re<Ae;){var nn=H[re];nt(Ut,nn,j(nn),H)}return Ut}function $n(H,nt){for(var j=-1,Ut=H==null?0:H.length;++j<Ut&&nt(H[j],j,H)!==!1;);return H}function mg(H,nt){for(var j=H==null?0:H.length;j--&&nt(H[j],j,H)!==!1;);return H}function Tf(H,nt){for(var j=-1,Ut=H==null?0:H.length;++j<Ut;)if(!nt(H[j],j,H))return!1;return!0}function ji(H,nt){for(var j=-1,Ut=H==null?0:H.length,re=0,Ae=[];++j<Ut;){var nn=H[j];nt(nn,j,H)&&(Ae[re++]=nn)}return Ae}function ja(H,nt){var j=H==null?0:H.length;return!!j&&as(H,nt,0)>-1}function ql(H,nt,j){for(var Ut=-1,re=H==null?0:H.length;++Ut<re;)if(j(nt,H[Ut]))return!0;return!1}function qe(H,nt){for(var j=-1,Ut=H==null?0:H.length,re=Array(Ut);++j<Ut;)re[j]=nt(H[j],j,H);return re}function Ji(H,nt){for(var j=-1,Ut=nt.length,re=H.length;++j<Ut;)H[re+j]=nt[j];return H}function Yl(H,nt,j,Ut){var re=-1,Ae=H==null?0:H.length;for(Ut&&Ae&&(j=H[++re]);++re<Ae;)j=nt(j,H[re],re,H);return j}function _g(H,nt,j,Ut){var re=H==null?0:H.length;for(Ut&&re&&(j=H[--re]);re--;)j=nt(j,H[re],re,H);return j}function Zl(H,nt){for(var j=-1,Ut=H==null?0:H.length;++j<Ut;)if(nt(H[j],j,H))return!0;return!1}var gg=Kl("length");function vg(H){return H.split("")}function xg(H){return H.match(rs)||[]}function Af(H,nt,j){var Ut;return j(H,function(re,Ae,nn){if(nt(re,Ae,nn))return Ut=Ae,!1}),Ut}function Ja(H,nt,j,Ut){for(var re=H.length,Ae=j+(Ut?1:-1);Ut?Ae--:++Ae<re;)if(nt(H[Ae],Ae,H))return Ae;return-1}function as(H,nt,j){return nt===nt?Dg(H,nt,j):Ja(H,wf,j)}function yg(H,nt,j,Ut){for(var re=j-1,Ae=H.length;++re<Ae;)if(Ut(H[re],nt))return re;return-1}function wf(H){return H!==H}function Rf(H,nt){var j=H==null?0:H.length;return j?jl(H,nt)/j:Rt}function Kl(H){return function(nt){return nt==null?e:nt[H]}}function $l(H){return function(nt){return H==null?e:H[nt]}}function Cf(H,nt,j,Ut,re){return re(H,function(Ae,nn,He){j=Ut?(Ut=!1,Ae):nt(j,Ae,nn,He)}),j}function Mg(H,nt){var j=H.length;for(H.sort(nt);j--;)H[j]=H[j].value;return H}function jl(H,nt){for(var j,Ut=-1,re=H.length;++Ut<re;){var Ae=nt(H[Ut]);Ae!==e&&(j=j===e?Ae:j+Ae)}return j}function Jl(H,nt){for(var j=-1,Ut=Array(H);++j<H;)Ut[j]=nt(j);return Ut}function Sg(H,nt){return qe(nt,function(j){return[j,H[j]]})}function Pf(H){return H&&H.slice(0,Uf(H)+1).replace(Sr,"")}function zn(H){return function(nt){return H(nt)}}function Ql(H,nt){return qe(nt,function(j){return H[j]})}function Qs(H,nt){return H.has(nt)}function Df(H,nt){for(var j=-1,Ut=H.length;++j<Ut&&as(nt,H[j],0)>-1;);return j}function Lf(H,nt){for(var j=H.length;j--&&as(nt,H[j],0)>-1;);return j}function Eg(H,nt){for(var j=H.length,Ut=0;j--;)H[j]===nt&&++Ut;return Ut}var bg=$l(og),Tg=$l(lg);function Ag(H){return"\\"+ug[H]}function wg(H,nt){return H==null?e:H[nt]}function os(H){return ig.test(H)}function Rg(H){return rg.test(H)}function Cg(H){for(var nt,j=[];!(nt=H.next()).done;)j.push(nt.value);return j}function tc(H){var nt=-1,j=Array(H.size);return H.forEach(function(Ut,re){j[++nt]=[re,Ut]}),j}function If(H,nt){return function(j){return H(nt(j))}}function Qi(H,nt){for(var j=-1,Ut=H.length,re=0,Ae=[];++j<Ut;){var nn=H[j];(nn===nt||nn===p)&&(H[j]=p,Ae[re++]=j)}return Ae}function Qa(H){var nt=-1,j=Array(H.size);return H.forEach(function(Ut){j[++nt]=Ut}),j}function Pg(H){var nt=-1,j=Array(H.size);return H.forEach(function(Ut){j[++nt]=[Ut,Ut]}),j}function Dg(H,nt,j){for(var Ut=j-1,re=H.length;++Ut<re;)if(H[Ut]===nt)return Ut;return-1}function Lg(H,nt,j){for(var Ut=j+1;Ut--;)if(H[Ut]===nt)return Ut;return Ut}function ls(H){return os(H)?Ug(H):gg(H)}function hi(H){return os(H)?Ng(H):vg(H)}function Uf(H){for(var nt=H.length;nt--&&Xa.test(H.charAt(nt)););return nt}var Ig=$l(cg);function Ug(H){for(var nt=Gl.lastIndex=0;Gl.test(H);)++nt;return nt}function Ng(H){return H.match(Gl)||[]}function Og(H){return H.match(ng)||[]}var Fg=function H(nt){nt=nt==null?ln:tr.defaults(ln.Object(),nt,tr.pick(ln,sg));var j=nt.Array,Ut=nt.Date,re=nt.Error,Ae=nt.Function,nn=nt.Math,He=nt.Object,ec=nt.RegExp,Bg=nt.String,jn=nt.TypeError,to=j.prototype,zg=Ae.prototype,cs=He.prototype,eo=nt["__core-js_shared__"],no=zg.toString,Ie=cs.hasOwnProperty,kg=0,Nf=function(){var r=/[^.]+$/.exec(eo&&eo.keys&&eo.keys.IE_PROTO||"");return r?"Symbol(src)_1."+r:""}(),io=cs.toString,Hg=no.call(He),Vg=ln._,Gg=ec("^"+no.call(Ie).replace(ns,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),ro=vf?nt.Buffer:e,er=nt.Symbol,so=nt.Uint8Array,Of=ro?ro.allocUnsafe:e,ao=If(He.getPrototypeOf,He),Ff=He.create,Bf=cs.propertyIsEnumerable,oo=to.splice,zf=er?er.isConcatSpreadable:e,ta=er?er.iterator:e,Ar=er?er.toStringTag:e,lo=function(){try{var r=Dr(He,"defineProperty");return r({},"",{}),r}catch{}}(),Wg=nt.clearTimeout!==ln.clearTimeout&&nt.clearTimeout,Xg=Ut&&Ut.now!==ln.Date.now&&Ut.now,qg=nt.setTimeout!==ln.setTimeout&&nt.setTimeout,co=nn.ceil,uo=nn.floor,nc=He.getOwnPropertySymbols,Yg=ro?ro.isBuffer:e,kf=nt.isFinite,Zg=to.join,Kg=If(He.keys,He),rn=nn.max,gn=nn.min,$g=Ut.now,jg=nt.parseInt,Hf=nn.random,Jg=to.reverse,ic=Dr(nt,"DataView"),ea=Dr(nt,"Map"),rc=Dr(nt,"Promise"),us=Dr(nt,"Set"),na=Dr(nt,"WeakMap"),ia=Dr(He,"create"),ho=na&&new na,hs={},Qg=Lr(ic),tv=Lr(ea),ev=Lr(rc),nv=Lr(us),iv=Lr(na),fo=er?er.prototype:e,ra=fo?fo.valueOf:e,Vf=fo?fo.toString:e;function E(r){if($e(r)&&!ae(r)&&!(r instanceof ye)){if(r instanceof Jn)return r;if(Ie.call(r,"__wrapped__"))return Gd(r)}return new Jn(r)}var fs=function(){function r(){}return function(a){if(!Ze(a))return{};if(Ff)return Ff(a);r.prototype=a;var c=new r;return r.prototype=e,c}}();function po(){}function Jn(r,a){this.__wrapped__=r,this.__actions__=[],this.__chain__=!!a,this.__index__=0,this.__values__=e}E.templateSettings={escape:kt,evaluate:ie,interpolate:Le,variable:"",imports:{_:E}},E.prototype=po.prototype,E.prototype.constructor=E,Jn.prototype=fs(po.prototype),Jn.prototype.constructor=Jn;function ye(r){this.__wrapped__=r,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=It,this.__views__=[]}function rv(){var r=new ye(this.__wrapped__);return r.__actions__=Dn(this.__actions__),r.__dir__=this.__dir__,r.__filtered__=this.__filtered__,r.__iteratees__=Dn(this.__iteratees__),r.__takeCount__=this.__takeCount__,r.__views__=Dn(this.__views__),r}function sv(){if(this.__filtered__){var r=new ye(this);r.__dir__=-1,r.__filtered__=!0}else r=this.clone(),r.__dir__*=-1;return r}function av(){var r=this.__wrapped__.value(),a=this.__dir__,c=ae(r),d=a<0,y=c?r.length:0,A=v0(0,y,this.__views__),L=A.start,O=A.end,W=O-L,st=d?O:L-1,at=this.__iteratees__,dt=at.length,At=0,Vt=gn(W,this.__takeCount__);if(!c||!d&&y==W&&Vt==W)return fd(r,this.__actions__);var ee=[];t:for(;W--&&At<Vt;){st+=a;for(var he=-1,ne=r[st];++he<dt;){var xe=at[he],Me=xe.iteratee,Vn=xe.type,Tn=Me(ne);if(Vn==it)ne=Tn;else if(!Tn){if(Vn==ot)continue t;break t}}ee[At++]=ne}return ee}ye.prototype=fs(po.prototype),ye.prototype.constructor=ye;function wr(r){var a=-1,c=r==null?0:r.length;for(this.clear();++a<c;){var d=r[a];this.set(d[0],d[1])}}function ov(){this.__data__=ia?ia(null):{},this.size=0}function lv(r){var a=this.has(r)&&delete this.__data__[r];return this.size-=a?1:0,a}function cv(r){var a=this.__data__;if(ia){var c=a[r];return c===f?e:c}return Ie.call(a,r)?a[r]:e}function uv(r){var a=this.__data__;return ia?a[r]!==e:Ie.call(a,r)}function hv(r,a){var c=this.__data__;return this.size+=this.has(r)?0:1,c[r]=ia&&a===e?f:a,this}wr.prototype.clear=ov,wr.prototype.delete=lv,wr.prototype.get=cv,wr.prototype.has=uv,wr.prototype.set=hv;function Di(r){var a=-1,c=r==null?0:r.length;for(this.clear();++a<c;){var d=r[a];this.set(d[0],d[1])}}function fv(){this.__data__=[],this.size=0}function dv(r){var a=this.__data__,c=mo(a,r);if(c<0)return!1;var d=a.length-1;return c==d?a.pop():oo.call(a,c,1),--this.size,!0}function pv(r){var a=this.__data__,c=mo(a,r);return c<0?e:a[c][1]}function mv(r){return mo(this.__data__,r)>-1}function _v(r,a){var c=this.__data__,d=mo(c,r);return d<0?(++this.size,c.push([r,a])):c[d][1]=a,this}Di.prototype.clear=fv,Di.prototype.delete=dv,Di.prototype.get=pv,Di.prototype.has=mv,Di.prototype.set=_v;function Li(r){var a=-1,c=r==null?0:r.length;for(this.clear();++a<c;){var d=r[a];this.set(d[0],d[1])}}function gv(){this.size=0,this.__data__={hash:new wr,map:new(ea||Di),string:new wr}}function vv(r){var a=wo(this,r).delete(r);return this.size-=a?1:0,a}function xv(r){return wo(this,r).get(r)}function yv(r){return wo(this,r).has(r)}function Mv(r,a){var c=wo(this,r),d=c.size;return c.set(r,a),this.size+=c.size==d?0:1,this}Li.prototype.clear=gv,Li.prototype.delete=vv,Li.prototype.get=xv,Li.prototype.has=yv,Li.prototype.set=Mv;function Rr(r){var a=-1,c=r==null?0:r.length;for(this.__data__=new Li;++a<c;)this.add(r[a])}function Sv(r){return this.__data__.set(r,f),this}function Ev(r){return this.__data__.has(r)}Rr.prototype.add=Rr.prototype.push=Sv,Rr.prototype.has=Ev;function fi(r){var a=this.__data__=new Di(r);this.size=a.size}function bv(){this.__data__=new Di,this.size=0}function Tv(r){var a=this.__data__,c=a.delete(r);return this.size=a.size,c}function Av(r){return this.__data__.get(r)}function wv(r){return this.__data__.has(r)}function Rv(r,a){var c=this.__data__;if(c instanceof Di){var d=c.__data__;if(!ea||d.length<s-1)return d.push([r,a]),this.size=++c.size,this;c=this.__data__=new Li(d)}return c.set(r,a),this.size=c.size,this}fi.prototype.clear=bv,fi.prototype.delete=Tv,fi.prototype.get=Av,fi.prototype.has=wv,fi.prototype.set=Rv;function Gf(r,a){var c=ae(r),d=!c&&Ir(r),y=!c&&!d&&ar(r),A=!c&&!d&&!y&&_s(r),L=c||d||y||A,O=L?Jl(r.length,Bg):[],W=O.length;for(var st in r)(a||Ie.call(r,st))&&!(L&&(st=="length"||y&&(st=="offset"||st=="parent")||A&&(st=="buffer"||st=="byteLength"||st=="byteOffset")||Oi(st,W)))&&O.push(st);return O}function Wf(r){var a=r.length;return a?r[mc(0,a-1)]:e}function Cv(r,a){return Ro(Dn(r),Cr(a,0,r.length))}function Pv(r){return Ro(Dn(r))}function sc(r,a,c){(c!==e&&!di(r[a],c)||c===e&&!(a in r))&&Ii(r,a,c)}function sa(r,a,c){var d=r[a];(!(Ie.call(r,a)&&di(d,c))||c===e&&!(a in r))&&Ii(r,a,c)}function mo(r,a){for(var c=r.length;c--;)if(di(r[c][0],a))return c;return-1}function Dv(r,a,c,d){return nr(r,function(y,A,L){a(d,y,c(y),L)}),d}function Xf(r,a){return r&&Si(a,cn(a),r)}function Lv(r,a){return r&&Si(a,In(a),r)}function Ii(r,a,c){a=="__proto__"&&lo?lo(r,a,{configurable:!0,enumerable:!0,value:c,writable:!0}):r[a]=c}function ac(r,a){for(var c=-1,d=a.length,y=j(d),A=r==null;++c<d;)y[c]=A?e:kc(r,a[c]);return y}function Cr(r,a,c){return r===r&&(c!==e&&(r=r<=c?r:c),a!==e&&(r=r>=a?r:a)),r}function Qn(r,a,c,d,y,A){var L,O=a&m,W=a&g,st=a&v;if(c&&(L=y?c(r,d,y,A):c(r)),L!==e)return L;if(!Ze(r))return r;var at=ae(r);if(at){if(L=y0(r),!O)return Dn(r,L)}else{var dt=vn(r),At=dt==Ye||dt==U;if(ar(r))return md(r,O);if(dt==mt||dt==de||At&&!y){if(L=W||At?{}:Ud(r),!O)return W?c0(r,Lv(L,r)):l0(r,Xf(L,r))}else{if(!Ge[dt])return y?r:{};L=M0(r,dt,O)}}A||(A=new fi);var Vt=A.get(r);if(Vt)return Vt;A.set(r,L),cp(r)?r.forEach(function(ne){L.add(Qn(ne,a,c,ne,r,A))}):op(r)&&r.forEach(function(ne,xe){L.set(xe,Qn(ne,a,c,xe,r,A))});var ee=st?W?Ac:Tc:W?In:cn,he=at?e:ee(r);return $n(he||r,function(ne,xe){he&&(xe=ne,ne=r[xe]),sa(L,xe,Qn(ne,a,c,xe,r,A))}),L}function Iv(r){var a=cn(r);return function(c){return qf(c,r,a)}}function qf(r,a,c){var d=c.length;if(r==null)return!d;for(r=He(r);d--;){var y=c[d],A=a[y],L=r[y];if(L===e&&!(y in r)||!A(L))return!1}return!0}function Yf(r,a,c){if(typeof r!="function")throw new jn(l);return fa(function(){r.apply(e,c)},a)}function aa(r,a,c,d){var y=-1,A=ja,L=!0,O=r.length,W=[],st=a.length;if(!O)return W;c&&(a=qe(a,zn(c))),d?(A=ql,L=!1):a.length>=s&&(A=Qs,L=!1,a=new Rr(a));t:for(;++y<O;){var at=r[y],dt=c==null?at:c(at);if(at=d||at!==0?at:0,L&&dt===dt){for(var At=st;At--;)if(a[At]===dt)continue t;W.push(at)}else A(a,dt,d)||W.push(at)}return W}var nr=yd(Mi),Zf=yd(lc,!0);function Uv(r,a){var c=!0;return nr(r,function(d,y,A){return c=!!a(d,y,A),c}),c}function _o(r,a,c){for(var d=-1,y=r.length;++d<y;){var A=r[d],L=a(A);if(L!=null&&(O===e?L===L&&!Hn(L):c(L,O)))var O=L,W=A}return W}function Nv(r,a,c,d){var y=r.length;for(c=ue(c),c<0&&(c=-c>y?0:y+c),d=d===e||d>y?y:ue(d),d<0&&(d+=y),d=c>d?0:hp(d);c<d;)r[c++]=a;return r}function Kf(r,a){var c=[];return nr(r,function(d,y,A){a(d,y,A)&&c.push(d)}),c}function dn(r,a,c,d,y){var A=-1,L=r.length;for(c||(c=E0),y||(y=[]);++A<L;){var O=r[A];a>0&&c(O)?a>1?dn(O,a-1,c,d,y):Ji(y,O):d||(y[y.length]=O)}return y}var oc=Md(),$f=Md(!0);function Mi(r,a){return r&&oc(r,a,cn)}function lc(r,a){return r&&$f(r,a,cn)}function go(r,a){return ji(a,function(c){return Fi(r[c])})}function Pr(r,a){a=rr(a,r);for(var c=0,d=a.length;r!=null&&c<d;)r=r[Ei(a[c++])];return c&&c==d?r:e}function jf(r,a,c){var d=a(r);return ae(r)?d:Ji(d,c(r))}function En(r){return r==null?r===e?S:jt:Ar&&Ar in He(r)?g0(r):P0(r)}function cc(r,a){return r>a}function Ov(r,a){return r!=null&&Ie.call(r,a)}function Fv(r,a){return r!=null&&a in He(r)}function Bv(r,a,c){return r>=gn(a,c)&&r<rn(a,c)}function uc(r,a,c){for(var d=c?ql:ja,y=r[0].length,A=r.length,L=A,O=j(A),W=1/0,st=[];L--;){var at=r[L];L&&a&&(at=qe(at,zn(a))),W=gn(at.length,W),O[L]=!c&&(a||y>=120&&at.length>=120)?new Rr(L&&at):e}at=r[0];var dt=-1,At=O[0];t:for(;++dt<y&&st.length<W;){var Vt=at[dt],ee=a?a(Vt):Vt;if(Vt=c||Vt!==0?Vt:0,!(At?Qs(At,ee):d(st,ee,c))){for(L=A;--L;){var he=O[L];if(!(he?Qs(he,ee):d(r[L],ee,c)))continue t}At&&At.push(ee),st.push(Vt)}}return st}function zv(r,a,c,d){return Mi(r,function(y,A,L){a(d,c(y),A,L)}),d}function oa(r,a,c){a=rr(a,r),r=Bd(r,a);var d=r==null?r:r[Ei(ei(a))];return d==null?e:Bn(d,r,c)}function Jf(r){return $e(r)&&En(r)==de}function kv(r){return $e(r)&&En(r)==ut}function Hv(r){return $e(r)&&En(r)==Zt}function la(r,a,c,d,y){return r===a?!0:r==null||a==null||!$e(r)&&!$e(a)?r!==r&&a!==a:Vv(r,a,c,d,la,y)}function Vv(r,a,c,d,y,A){var L=ae(r),O=ae(a),W=L?rt:vn(r),st=O?rt:vn(a);W=W==de?mt:W,st=st==de?mt:st;var at=W==mt,dt=st==mt,At=W==st;if(At&&ar(r)){if(!ar(a))return!1;L=!0,at=!1}if(At&&!at)return A||(A=new fi),L||_s(r)?Dd(r,a,c,d,y,A):m0(r,a,W,c,d,y,A);if(!(c&M)){var Vt=at&&Ie.call(r,"__wrapped__"),ee=dt&&Ie.call(a,"__wrapped__");if(Vt||ee){var he=Vt?r.value():r,ne=ee?a.value():a;return A||(A=new fi),y(he,ne,c,d,A)}}return At?(A||(A=new fi),_0(r,a,c,d,y,A)):!1}function Gv(r){return $e(r)&&vn(r)==_e}function hc(r,a,c,d){var y=c.length,A=y,L=!d;if(r==null)return!A;for(r=He(r);y--;){var O=c[y];if(L&&O[2]?O[1]!==r[O[0]]:!(O[0]in r))return!1}for(;++y<A;){O=c[y];var W=O[0],st=r[W],at=O[1];if(L&&O[2]){if(st===e&&!(W in r))return!1}else{var dt=new fi;if(d)var At=d(st,at,W,r,a,dt);if(!(At===e?la(at,st,M|b,d,dt):At))return!1}}return!0}function Qf(r){if(!Ze(r)||T0(r))return!1;var a=Fi(r)?Gg:Hl;return a.test(Lr(r))}function Wv(r){return $e(r)&&En(r)==Kt}function Xv(r){return $e(r)&&vn(r)==ve}function qv(r){return $e(r)&&Uo(r.length)&&!!We[En(r)]}function td(r){return typeof r=="function"?r:r==null?Un:typeof r=="object"?ae(r)?id(r[0],r[1]):nd(r):Sp(r)}function fc(r){if(!ha(r))return Kg(r);var a=[];for(var c in He(r))Ie.call(r,c)&&c!="constructor"&&a.push(c);return a}function Yv(r){if(!Ze(r))return C0(r);var a=ha(r),c=[];for(var d in r)d=="constructor"&&(a||!Ie.call(r,d))||c.push(d);return c}function dc(r,a){return r<a}function ed(r,a){var c=-1,d=Ln(r)?j(r.length):[];return nr(r,function(y,A,L){d[++c]=a(y,A,L)}),d}function nd(r){var a=Rc(r);return a.length==1&&a[0][2]?Od(a[0][0],a[0][1]):function(c){return c===r||hc(c,r,a)}}function id(r,a){return Pc(r)&&Nd(a)?Od(Ei(r),a):function(c){var d=kc(c,r);return d===e&&d===a?Hc(c,r):la(a,d,M|b)}}function vo(r,a,c,d,y){r!==a&&oc(a,function(A,L){if(y||(y=new fi),Ze(A))Zv(r,a,L,c,vo,d,y);else{var O=d?d(Lc(r,L),A,L+"",r,a,y):e;O===e&&(O=A),sc(r,L,O)}},In)}function Zv(r,a,c,d,y,A,L){var O=Lc(r,c),W=Lc(a,c),st=L.get(W);if(st){sc(r,c,st);return}var at=A?A(O,W,c+"",r,a,L):e,dt=at===e;if(dt){var At=ae(W),Vt=!At&&ar(W),ee=!At&&!Vt&&_s(W);at=W,At||Vt||ee?ae(O)?at=O:je(O)?at=Dn(O):Vt?(dt=!1,at=md(W,!0)):ee?(dt=!1,at=_d(W,!0)):at=[]:da(W)||Ir(W)?(at=O,Ir(O)?at=fp(O):(!Ze(O)||Fi(O))&&(at=Ud(W))):dt=!1}dt&&(L.set(W,at),y(at,W,d,A,L),L.delete(W)),sc(r,c,at)}function rd(r,a){var c=r.length;if(c)return a+=a<0?c:0,Oi(a,c)?r[a]:e}function sd(r,a,c){a.length?a=qe(a,function(A){return ae(A)?function(L){return Pr(L,A.length===1?A[0]:A)}:A}):a=[Un];var d=-1;a=qe(a,zn(Jt()));var y=ed(r,function(A,L,O){var W=qe(a,function(st){return st(A)});return{criteria:W,index:++d,value:A}});return Mg(y,function(A,L){return o0(A,L,c)})}function Kv(r,a){return ad(r,a,function(c,d){return Hc(r,d)})}function ad(r,a,c){for(var d=-1,y=a.length,A={};++d<y;){var L=a[d],O=Pr(r,L);c(O,L)&&ca(A,rr(L,r),O)}return A}function $v(r){return function(a){return Pr(a,r)}}function pc(r,a,c,d){var y=d?yg:as,A=-1,L=a.length,O=r;for(r===a&&(a=Dn(a)),c&&(O=qe(r,zn(c)));++A<L;)for(var W=0,st=a[A],at=c?c(st):st;(W=y(O,at,W,d))>-1;)O!==r&&oo.call(O,W,1),oo.call(r,W,1);return r}function od(r,a){for(var c=r?a.length:0,d=c-1;c--;){var y=a[c];if(c==d||y!==A){var A=y;Oi(y)?oo.call(r,y,1):vc(r,y)}}return r}function mc(r,a){return r+uo(Hf()*(a-r+1))}function jv(r,a,c,d){for(var y=-1,A=rn(co((a-r)/(c||1)),0),L=j(A);A--;)L[d?A:++y]=r,r+=c;return L}function _c(r,a){var c="";if(!r||a<1||a>Q)return c;do a%2&&(c+=r),a=uo(a/2),a&&(r+=r);while(a);return c}function pe(r,a){return Ic(Fd(r,a,Un),r+"")}function Jv(r){return Wf(gs(r))}function Qv(r,a){var c=gs(r);return Ro(c,Cr(a,0,c.length))}function ca(r,a,c,d){if(!Ze(r))return r;a=rr(a,r);for(var y=-1,A=a.length,L=A-1,O=r;O!=null&&++y<A;){var W=Ei(a[y]),st=c;if(W==="__proto__"||W==="constructor"||W==="prototype")return r;if(y!=L){var at=O[W];st=d?d(at,W,O):e,st===e&&(st=Ze(at)?at:Oi(a[y+1])?[]:{})}sa(O,W,st),O=O[W]}return r}var ld=ho?function(r,a){return ho.set(r,a),r}:Un,t0=lo?function(r,a){return lo(r,"toString",{configurable:!0,enumerable:!1,value:Gc(a),writable:!0})}:Un;function e0(r){return Ro(gs(r))}function ti(r,a,c){var d=-1,y=r.length;a<0&&(a=-a>y?0:y+a),c=c>y?y:c,c<0&&(c+=y),y=a>c?0:c-a>>>0,a>>>=0;for(var A=j(y);++d<y;)A[d]=r[d+a];return A}function n0(r,a){var c;return nr(r,function(d,y,A){return c=a(d,y,A),!c}),!!c}function xo(r,a,c){var d=0,y=r==null?d:r.length;if(typeof a=="number"&&a===a&&y<=we){for(;d<y;){var A=d+y>>>1,L=r[A];L!==null&&!Hn(L)&&(c?L<=a:L<a)?d=A+1:y=A}return y}return gc(r,a,Un,c)}function gc(r,a,c,d){var y=0,A=r==null?0:r.length;if(A===0)return 0;a=c(a);for(var L=a!==a,O=a===null,W=Hn(a),st=a===e;y<A;){var at=uo((y+A)/2),dt=c(r[at]),At=dt!==e,Vt=dt===null,ee=dt===dt,he=Hn(dt);if(L)var ne=d||ee;else st?ne=ee&&(d||At):O?ne=ee&&At&&(d||!Vt):W?ne=ee&&At&&!Vt&&(d||!he):Vt||he?ne=!1:ne=d?dt<=a:dt<a;ne?y=at+1:A=at}return gn(A,le)}function cd(r,a){for(var c=-1,d=r.length,y=0,A=[];++c<d;){var L=r[c],O=a?a(L):L;if(!c||!di(O,W)){var W=O;A[y++]=L===0?0:L}}return A}function ud(r){return typeof r=="number"?r:Hn(r)?Rt:+r}function kn(r){if(typeof r=="string")return r;if(ae(r))return qe(r,kn)+"";if(Hn(r))return Vf?Vf.call(r):"";var a=r+"";return a=="0"&&1/r==-ft?"-0":a}function ir(r,a,c){var d=-1,y=ja,A=r.length,L=!0,O=[],W=O;if(c)L=!1,y=ql;else if(A>=s){var st=a?null:d0(r);if(st)return Qa(st);L=!1,y=Qs,W=new Rr}else W=a?[]:O;t:for(;++d<A;){var at=r[d],dt=a?a(at):at;if(at=c||at!==0?at:0,L&&dt===dt){for(var At=W.length;At--;)if(W[At]===dt)continue t;a&&W.push(dt),O.push(at)}else y(W,dt,c)||(W!==O&&W.push(dt),O.push(at))}return O}function vc(r,a){return a=rr(a,r),r=Bd(r,a),r==null||delete r[Ei(ei(a))]}function hd(r,a,c,d){return ca(r,a,c(Pr(r,a)),d)}function yo(r,a,c,d){for(var y=r.length,A=d?y:-1;(d?A--:++A<y)&&a(r[A],A,r););return c?ti(r,d?0:A,d?A+1:y):ti(r,d?A+1:0,d?y:A)}function fd(r,a){var c=r;return c instanceof ye&&(c=c.value()),Yl(a,function(d,y){return y.func.apply(y.thisArg,Ji([d],y.args))},c)}function xc(r,a,c){var d=r.length;if(d<2)return d?ir(r[0]):[];for(var y=-1,A=j(d);++y<d;)for(var L=r[y],O=-1;++O<d;)O!=y&&(A[y]=aa(A[y]||L,r[O],a,c));return ir(dn(A,1),a,c)}function dd(r,a,c){for(var d=-1,y=r.length,A=a.length,L={};++d<y;){var O=d<A?a[d]:e;c(L,r[d],O)}return L}function yc(r){return je(r)?r:[]}function Mc(r){return typeof r=="function"?r:Un}function rr(r,a){return ae(r)?r:Pc(r,a)?[r]:Vd(Pe(r))}var i0=pe;function sr(r,a,c){var d=r.length;return c=c===e?d:c,!a&&c>=d?r:ti(r,a,c)}var pd=Wg||function(r){return ln.clearTimeout(r)};function md(r,a){if(a)return r.slice();var c=r.length,d=Of?Of(c):new r.constructor(c);return r.copy(d),d}function Sc(r){var a=new r.constructor(r.byteLength);return new so(a).set(new so(r)),a}function r0(r,a){var c=a?Sc(r.buffer):r.buffer;return new r.constructor(c,r.byteOffset,r.byteLength)}function s0(r){var a=new r.constructor(r.source,$a.exec(r));return a.lastIndex=r.lastIndex,a}function a0(r){return ra?He(ra.call(r)):{}}function _d(r,a){var c=a?Sc(r.buffer):r.buffer;return new r.constructor(c,r.byteOffset,r.length)}function gd(r,a){if(r!==a){var c=r!==e,d=r===null,y=r===r,A=Hn(r),L=a!==e,O=a===null,W=a===a,st=Hn(a);if(!O&&!st&&!A&&r>a||A&&L&&W&&!O&&!st||d&&L&&W||!c&&W||!y)return 1;if(!d&&!A&&!st&&r<a||st&&c&&y&&!d&&!A||O&&c&&y||!L&&y||!W)return-1}return 0}function o0(r,a,c){for(var d=-1,y=r.criteria,A=a.criteria,L=y.length,O=c.length;++d<L;){var W=gd(y[d],A[d]);if(W){if(d>=O)return W;var st=c[d];return W*(st=="desc"?-1:1)}}return r.index-a.index}function vd(r,a,c,d){for(var y=-1,A=r.length,L=c.length,O=-1,W=a.length,st=rn(A-L,0),at=j(W+st),dt=!d;++O<W;)at[O]=a[O];for(;++y<L;)(dt||y<A)&&(at[c[y]]=r[y]);for(;st--;)at[O++]=r[y++];return at}function xd(r,a,c,d){for(var y=-1,A=r.length,L=-1,O=c.length,W=-1,st=a.length,at=rn(A-O,0),dt=j(at+st),At=!d;++y<at;)dt[y]=r[y];for(var Vt=y;++W<st;)dt[Vt+W]=a[W];for(;++L<O;)(At||y<A)&&(dt[Vt+c[L]]=r[y++]);return dt}function Dn(r,a){var c=-1,d=r.length;for(a||(a=j(d));++c<d;)a[c]=r[c];return a}function Si(r,a,c,d){var y=!c;c||(c={});for(var A=-1,L=a.length;++A<L;){var O=a[A],W=d?d(c[O],r[O],O,c,r):e;W===e&&(W=r[O]),y?Ii(c,O,W):sa(c,O,W)}return c}function l0(r,a){return Si(r,Cc(r),a)}function c0(r,a){return Si(r,Ld(r),a)}function Mo(r,a){return function(c,d){var y=ae(c)?pg:Dv,A=a?a():{};return y(c,r,Jt(d,2),A)}}function ds(r){return pe(function(a,c){var d=-1,y=c.length,A=y>1?c[y-1]:e,L=y>2?c[2]:e;for(A=r.length>3&&typeof A=="function"?(y--,A):e,L&&bn(c[0],c[1],L)&&(A=y<3?e:A,y=1),a=He(a);++d<y;){var O=c[d];O&&r(a,O,d,A)}return a})}function yd(r,a){return function(c,d){if(c==null)return c;if(!Ln(c))return r(c,d);for(var y=c.length,A=a?y:-1,L=He(c);(a?A--:++A<y)&&d(L[A],A,L)!==!1;);return c}}function Md(r){return function(a,c,d){for(var y=-1,A=He(a),L=d(a),O=L.length;O--;){var W=L[r?O:++y];if(c(A[W],W,A)===!1)break}return a}}function u0(r,a,c){var d=a&x,y=ua(r);function A(){var L=this&&this!==ln&&this instanceof A?y:r;return L.apply(d?c:this,arguments)}return A}function Sd(r){return function(a){a=Pe(a);var c=os(a)?hi(a):e,d=c?c[0]:a.charAt(0),y=c?sr(c,1).join(""):a.slice(1);return d[r]()+y}}function ps(r){return function(a){return Yl(yp(xp(a).replace(tg,"")),r,"")}}function ua(r){return function(){var a=arguments;switch(a.length){case 0:return new r;case 1:return new r(a[0]);case 2:return new r(a[0],a[1]);case 3:return new r(a[0],a[1],a[2]);case 4:return new r(a[0],a[1],a[2],a[3]);case 5:return new r(a[0],a[1],a[2],a[3],a[4]);case 6:return new r(a[0],a[1],a[2],a[3],a[4],a[5]);case 7:return new r(a[0],a[1],a[2],a[3],a[4],a[5],a[6])}var c=fs(r.prototype),d=r.apply(c,a);return Ze(d)?d:c}}function h0(r,a,c){var d=ua(r);function y(){for(var A=arguments.length,L=j(A),O=A,W=ms(y);O--;)L[O]=arguments[O];var st=A<3&&L[0]!==W&&L[A-1]!==W?[]:Qi(L,W);if(A-=st.length,A<c)return wd(r,a,So,y.placeholder,e,L,st,e,e,c-A);var at=this&&this!==ln&&this instanceof y?d:r;return Bn(at,this,L)}return y}function Ed(r){return function(a,c,d){var y=He(a);if(!Ln(a)){var A=Jt(c,3);a=cn(a),c=function(O){return A(y[O],O,y)}}var L=r(a,c,d);return L>-1?y[A?a[L]:L]:e}}function bd(r){return Ni(function(a){var c=a.length,d=c,y=Jn.prototype.thru;for(r&&a.reverse();d--;){var A=a[d];if(typeof A!="function")throw new jn(l);if(y&&!L&&Ao(A)=="wrapper")var L=new Jn([],!0)}for(d=L?d:c;++d<c;){A=a[d];var O=Ao(A),W=O=="wrapper"?wc(A):e;W&&Dc(W[0])&&W[1]==(N|D|B|Y)&&!W[4].length&&W[9]==1?L=L[Ao(W[0])].apply(L,W[3]):L=A.length==1&&Dc(A)?L[O]():L.thru(A)}return function(){var st=arguments,at=st[0];if(L&&st.length==1&&ae(at))return L.plant(at).value();for(var dt=0,At=c?a[dt].apply(this,st):at;++dt<c;)At=a[dt].call(this,At);return At}})}function So(r,a,c,d,y,A,L,O,W,st){var at=a&N,dt=a&x,At=a&_,Vt=a&(D|w),ee=a&C,he=At?e:ua(r);function ne(){for(var xe=arguments.length,Me=j(xe),Vn=xe;Vn--;)Me[Vn]=arguments[Vn];if(Vt)var Tn=ms(ne),Gn=Eg(Me,Tn);if(d&&(Me=vd(Me,d,y,Vt)),A&&(Me=xd(Me,A,L,Vt)),xe-=Gn,Vt&&xe<st){var Je=Qi(Me,Tn);return wd(r,a,So,ne.placeholder,c,Me,Je,O,W,st-xe)}var pi=dt?c:this,zi=At?pi[r]:r;return xe=Me.length,O?Me=D0(Me,O):ee&&xe>1&&Me.reverse(),at&&W<xe&&(Me.length=W),this&&this!==ln&&this instanceof ne&&(zi=he||ua(zi)),zi.apply(pi,Me)}return ne}function Td(r,a){return function(c,d){return zv(c,r,a(d),{})}}function Eo(r,a){return function(c,d){var y;if(c===e&&d===e)return a;if(c!==e&&(y=c),d!==e){if(y===e)return d;typeof c=="string"||typeof d=="string"?(c=kn(c),d=kn(d)):(c=ud(c),d=ud(d)),y=r(c,d)}return y}}function Ec(r){return Ni(function(a){return a=qe(a,zn(Jt())),pe(function(c){var d=this;return r(a,function(y){return Bn(y,d,c)})})})}function bo(r,a){a=a===e?" ":kn(a);var c=a.length;if(c<2)return c?_c(a,r):a;var d=_c(a,co(r/ls(a)));return os(a)?sr(hi(d),0,r).join(""):d.slice(0,r)}function f0(r,a,c,d){var y=a&x,A=ua(r);function L(){for(var O=-1,W=arguments.length,st=-1,at=d.length,dt=j(at+W),At=this&&this!==ln&&this instanceof L?A:r;++st<at;)dt[st]=d[st];for(;W--;)dt[st++]=arguments[++O];return Bn(At,y?c:this,dt)}return L}function Ad(r){return function(a,c,d){return d&&typeof d!="number"&&bn(a,c,d)&&(c=d=e),a=Bi(a),c===e?(c=a,a=0):c=Bi(c),d=d===e?a<c?1:-1:Bi(d),jv(a,c,d,r)}}function To(r){return function(a,c){return typeof a=="string"&&typeof c=="string"||(a=ni(a),c=ni(c)),r(a,c)}}function wd(r,a,c,d,y,A,L,O,W,st){var at=a&D,dt=at?L:e,At=at?e:L,Vt=at?A:e,ee=at?e:A;a|=at?B:F,a&=~(at?F:B),a&I||(a&=-4);var he=[r,a,y,Vt,dt,ee,At,O,W,st],ne=c.apply(e,he);return Dc(r)&&zd(ne,he),ne.placeholder=d,kd(ne,r,a)}function bc(r){var a=nn[r];return function(c,d){if(c=ni(c),d=d==null?0:gn(ue(d),292),d&&kf(c)){var y=(Pe(c)+"e").split("e"),A=a(y[0]+"e"+(+y[1]+d));return y=(Pe(A)+"e").split("e"),+(y[0]+"e"+(+y[1]-d))}return a(c)}}var d0=us&&1/Qa(new us([,-0]))[1]==ft?function(r){return new us(r)}:qc;function Rd(r){return function(a){var c=vn(a);return c==_e?tc(a):c==ve?Pg(a):Sg(a,r(a))}}function Ui(r,a,c,d,y,A,L,O){var W=a&_;if(!W&&typeof r!="function")throw new jn(l);var st=d?d.length:0;if(st||(a&=-97,d=y=e),L=L===e?L:rn(ue(L),0),O=O===e?O:ue(O),st-=y?y.length:0,a&F){var at=d,dt=y;d=y=e}var At=W?e:wc(r),Vt=[r,a,c,d,y,at,dt,A,L,O];if(At&&R0(Vt,At),r=Vt[0],a=Vt[1],c=Vt[2],d=Vt[3],y=Vt[4],O=Vt[9]=Vt[9]===e?W?0:r.length:rn(Vt[9]-st,0),!O&&a&(D|w)&&(a&=-25),!a||a==x)var ee=u0(r,a,c);else a==D||a==w?ee=h0(r,a,O):(a==B||a==(x|B))&&!y.length?ee=f0(r,a,c,d):ee=So.apply(e,Vt);var he=At?ld:zd;return kd(he(ee,Vt),r,a)}function Cd(r,a,c,d){return r===e||di(r,cs[c])&&!Ie.call(d,c)?a:r}function Pd(r,a,c,d,y,A){return Ze(r)&&Ze(a)&&(A.set(a,r),vo(r,a,e,Pd,A),A.delete(a)),r}function p0(r){return da(r)?e:r}function Dd(r,a,c,d,y,A){var L=c&M,O=r.length,W=a.length;if(O!=W&&!(L&&W>O))return!1;var st=A.get(r),at=A.get(a);if(st&&at)return st==a&&at==r;var dt=-1,At=!0,Vt=c&b?new Rr:e;for(A.set(r,a),A.set(a,r);++dt<O;){var ee=r[dt],he=a[dt];if(d)var ne=L?d(he,ee,dt,a,r,A):d(ee,he,dt,r,a,A);if(ne!==e){if(ne)continue;At=!1;break}if(Vt){if(!Zl(a,function(xe,Me){if(!Qs(Vt,Me)&&(ee===xe||y(ee,xe,c,d,A)))return Vt.push(Me)})){At=!1;break}}else if(!(ee===he||y(ee,he,c,d,A))){At=!1;break}}return A.delete(r),A.delete(a),At}function m0(r,a,c,d,y,A,L){switch(c){case tt:if(r.byteLength!=a.byteLength||r.byteOffset!=a.byteOffset)return!1;r=r.buffer,a=a.buffer;case ut:return!(r.byteLength!=a.byteLength||!A(new so(r),new so(a)));case Pt:case Zt:case Qt:return di(+r,+a);case ce:return r.name==a.name&&r.message==a.message;case Kt:case De:return r==a+"";case _e:var O=tc;case ve:var W=d&M;if(O||(O=Qa),r.size!=a.size&&!W)return!1;var st=L.get(r);if(st)return st==a;d|=b,L.set(r,a);var at=Dd(O(r),O(a),d,y,A,L);return L.delete(r),at;case P:if(ra)return ra.call(r)==ra.call(a)}return!1}function _0(r,a,c,d,y,A){var L=c&M,O=Tc(r),W=O.length,st=Tc(a),at=st.length;if(W!=at&&!L)return!1;for(var dt=W;dt--;){var At=O[dt];if(!(L?At in a:Ie.call(a,At)))return!1}var Vt=A.get(r),ee=A.get(a);if(Vt&&ee)return Vt==a&&ee==r;var he=!0;A.set(r,a),A.set(a,r);for(var ne=L;++dt<W;){At=O[dt];var xe=r[At],Me=a[At];if(d)var Vn=L?d(Me,xe,At,a,r,A):d(xe,Me,At,r,a,A);if(!(Vn===e?xe===Me||y(xe,Me,c,d,A):Vn)){he=!1;break}ne||(ne=At=="constructor")}if(he&&!ne){var Tn=r.constructor,Gn=a.constructor;Tn!=Gn&&"constructor"in r&&"constructor"in a&&!(typeof Tn=="function"&&Tn instanceof Tn&&typeof Gn=="function"&&Gn instanceof Gn)&&(he=!1)}return A.delete(r),A.delete(a),he}function Ni(r){return Ic(Fd(r,e,qd),r+"")}function Tc(r){return jf(r,cn,Cc)}function Ac(r){return jf(r,In,Ld)}var wc=ho?function(r){return ho.get(r)}:qc;function Ao(r){for(var a=r.name+"",c=hs[a],d=Ie.call(hs,a)?c.length:0;d--;){var y=c[d],A=y.func;if(A==null||A==r)return y.name}return a}function ms(r){var a=Ie.call(E,"placeholder")?E:r;return a.placeholder}function Jt(){var r=E.iteratee||Wc;return r=r===Wc?td:r,arguments.length?r(arguments[0],arguments[1]):r}function wo(r,a){var c=r.__data__;return b0(a)?c[typeof a=="string"?"string":"hash"]:c.map}function Rc(r){for(var a=cn(r),c=a.length;c--;){var d=a[c],y=r[d];a[c]=[d,y,Nd(y)]}return a}function Dr(r,a){var c=wg(r,a);return Qf(c)?c:e}function g0(r){var a=Ie.call(r,Ar),c=r[Ar];try{r[Ar]=e;var d=!0}catch{}var y=io.call(r);return d&&(a?r[Ar]=c:delete r[Ar]),y}var Cc=nc?function(r){return r==null?[]:(r=He(r),ji(nc(r),function(a){return Bf.call(r,a)}))}:Yc,Ld=nc?function(r){for(var a=[];r;)Ji(a,Cc(r)),r=ao(r);return a}:Yc,vn=En;(ic&&vn(new ic(new ArrayBuffer(1)))!=tt||ea&&vn(new ea)!=_e||rc&&vn(rc.resolve())!=Ee||us&&vn(new us)!=ve||na&&vn(new na)!=G)&&(vn=function(r){var a=En(r),c=a==mt?r.constructor:e,d=c?Lr(c):"";if(d)switch(d){case Qg:return tt;case tv:return _e;case ev:return Ee;case nv:return ve;case iv:return G}return a});function v0(r,a,c){for(var d=-1,y=c.length;++d<y;){var A=c[d],L=A.size;switch(A.type){case"drop":r+=L;break;case"dropRight":a-=L;break;case"take":a=gn(a,r+L);break;case"takeRight":r=rn(r,a-L);break}}return{start:r,end:a}}function x0(r){var a=r.match(is);return a?a[1].split(Ya):[]}function Id(r,a,c){a=rr(a,r);for(var d=-1,y=a.length,A=!1;++d<y;){var L=Ei(a[d]);if(!(A=r!=null&&c(r,L)))break;r=r[L]}return A||++d!=y?A:(y=r==null?0:r.length,!!y&&Uo(y)&&Oi(L,y)&&(ae(r)||Ir(r)))}function y0(r){var a=r.length,c=new r.constructor(a);return a&&typeof r[0]=="string"&&Ie.call(r,"index")&&(c.index=r.index,c.input=r.input),c}function Ud(r){return typeof r.constructor=="function"&&!ha(r)?fs(ao(r)):{}}function M0(r,a,c){var d=r.constructor;switch(a){case ut:return Sc(r);case Pt:case Zt:return new d(+r);case tt:return r0(r,c);case Bt:case gt:case Ot:case Ft:case _t:case bt:case Ht:case Dt:case Tt:return _d(r,c);case _e:return new d;case Qt:case De:return new d(r);case Kt:return s0(r);case ve:return new d;case P:return a0(r)}}function S0(r,a){var c=a.length;if(!c)return r;var d=c-1;return a[d]=(c>1?"& ":"")+a[d],a=a.join(c>2?", ":" "),r.replace(qa,`{
/* [wrapped with `+a+`] */
`)}function E0(r){return ae(r)||Ir(r)||!!(zf&&r&&r[zf])}function Oi(r,a){var c=typeof r;return a=a??Q,!!a&&(c=="number"||c!="symbol"&&T.test(r))&&r>-1&&r%1==0&&r<a}function bn(r,a,c){if(!Ze(c))return!1;var d=typeof a;return(d=="number"?Ln(c)&&Oi(a,c.length):d=="string"&&a in c)?di(c[a],r):!1}function Pc(r,a){if(ae(r))return!1;var c=typeof r;return c=="number"||c=="symbol"||c=="boolean"||r==null||Hn(r)?!0:li.test(r)||!be.test(r)||a!=null&&r in He(a)}function b0(r){var a=typeof r;return a=="string"||a=="number"||a=="symbol"||a=="boolean"?r!=="__proto__":r===null}function Dc(r){var a=Ao(r),c=E[a];if(typeof c!="function"||!(a in ye.prototype))return!1;if(r===c)return!0;var d=wc(c);return!!d&&r===d[0]}function T0(r){return!!Nf&&Nf in r}var A0=eo?Fi:Zc;function ha(r){var a=r&&r.constructor,c=typeof a=="function"&&a.prototype||cs;return r===c}function Nd(r){return r===r&&!Ze(r)}function Od(r,a){return function(c){return c==null?!1:c[r]===a&&(a!==e||r in He(c))}}function w0(r){var a=Lo(r,function(d){return c.size===h&&c.clear(),d}),c=a.cache;return a}function R0(r,a){var c=r[1],d=a[1],y=c|d,A=y<(x|_|N),L=d==N&&c==D||d==N&&c==Y&&r[7].length<=a[8]||d==(N|Y)&&a[7].length<=a[8]&&c==D;if(!(A||L))return r;d&x&&(r[2]=a[2],y|=c&x?0:I);var O=a[3];if(O){var W=r[3];r[3]=W?vd(W,O,a[4]):O,r[4]=W?Qi(r[3],p):a[4]}return O=a[5],O&&(W=r[5],r[5]=W?xd(W,O,a[6]):O,r[6]=W?Qi(r[5],p):a[6]),O=a[7],O&&(r[7]=O),d&N&&(r[8]=r[8]==null?a[8]:gn(r[8],a[8])),r[9]==null&&(r[9]=a[9]),r[0]=a[0],r[1]=y,r}function C0(r){var a=[];if(r!=null)for(var c in He(r))a.push(c);return a}function P0(r){return io.call(r)}function Fd(r,a,c){return a=rn(a===e?r.length-1:a,0),function(){for(var d=arguments,y=-1,A=rn(d.length-a,0),L=j(A);++y<A;)L[y]=d[a+y];y=-1;for(var O=j(a+1);++y<a;)O[y]=d[y];return O[a]=c(L),Bn(r,this,O)}}function Bd(r,a){return a.length<2?r:Pr(r,ti(a,0,-1))}function D0(r,a){for(var c=r.length,d=gn(a.length,c),y=Dn(r);d--;){var A=a[d];r[d]=Oi(A,c)?y[A]:e}return r}function Lc(r,a){if(!(a==="constructor"&&typeof r[a]=="function")&&a!="__proto__")return r[a]}var zd=Hd(ld),fa=qg||function(r,a){return ln.setTimeout(r,a)},Ic=Hd(t0);function kd(r,a,c){var d=a+"";return Ic(r,S0(d,L0(x0(d),c)))}function Hd(r){var a=0,c=0;return function(){var d=$g(),y=Z-(d-c);if(c=d,y>0){if(++a>=$)return arguments[0]}else a=0;return r.apply(e,arguments)}}function Ro(r,a){var c=-1,d=r.length,y=d-1;for(a=a===e?d:a;++c<a;){var A=mc(c,y),L=r[A];r[A]=r[c],r[c]=L}return r.length=a,r}var Vd=w0(function(r){var a=[];return r.charCodeAt(0)===46&&a.push(""),r.replace(Zn,function(c,d,y,A){a.push(y?A.replace(Ka,"$1"):d||c)}),a});function Ei(r){if(typeof r=="string"||Hn(r))return r;var a=r+"";return a=="0"&&1/r==-ft?"-0":a}function Lr(r){if(r!=null){try{return no.call(r)}catch{}try{return r+""}catch{}}return""}function L0(r,a){return $n(Ne,function(c){var d="_."+c[0];a&c[1]&&!ja(r,d)&&r.push(d)}),r.sort()}function Gd(r){if(r instanceof ye)return r.clone();var a=new Jn(r.__wrapped__,r.__chain__);return a.__actions__=Dn(r.__actions__),a.__index__=r.__index__,a.__values__=r.__values__,a}function I0(r,a,c){(c?bn(r,a,c):a===e)?a=1:a=rn(ue(a),0);var d=r==null?0:r.length;if(!d||a<1)return[];for(var y=0,A=0,L=j(co(d/a));y<d;)L[A++]=ti(r,y,y+=a);return L}function U0(r){for(var a=-1,c=r==null?0:r.length,d=0,y=[];++a<c;){var A=r[a];A&&(y[d++]=A)}return y}function N0(){var r=arguments.length;if(!r)return[];for(var a=j(r-1),c=arguments[0],d=r;d--;)a[d-1]=arguments[d];return Ji(ae(c)?Dn(c):[c],dn(a,1))}var O0=pe(function(r,a){return je(r)?aa(r,dn(a,1,je,!0)):[]}),F0=pe(function(r,a){var c=ei(a);return je(c)&&(c=e),je(r)?aa(r,dn(a,1,je,!0),Jt(c,2)):[]}),B0=pe(function(r,a){var c=ei(a);return je(c)&&(c=e),je(r)?aa(r,dn(a,1,je,!0),e,c):[]});function z0(r,a,c){var d=r==null?0:r.length;return d?(a=c||a===e?1:ue(a),ti(r,a<0?0:a,d)):[]}function k0(r,a,c){var d=r==null?0:r.length;return d?(a=c||a===e?1:ue(a),a=d-a,ti(r,0,a<0?0:a)):[]}function H0(r,a){return r&&r.length?yo(r,Jt(a,3),!0,!0):[]}function V0(r,a){return r&&r.length?yo(r,Jt(a,3),!0):[]}function G0(r,a,c,d){var y=r==null?0:r.length;return y?(c&&typeof c!="number"&&bn(r,a,c)&&(c=0,d=y),Nv(r,a,c,d)):[]}function Wd(r,a,c){var d=r==null?0:r.length;if(!d)return-1;var y=c==null?0:ue(c);return y<0&&(y=rn(d+y,0)),Ja(r,Jt(a,3),y)}function Xd(r,a,c){var d=r==null?0:r.length;if(!d)return-1;var y=d-1;return c!==e&&(y=ue(c),y=c<0?rn(d+y,0):gn(y,d-1)),Ja(r,Jt(a,3),y,!0)}function qd(r){var a=r==null?0:r.length;return a?dn(r,1):[]}function W0(r){var a=r==null?0:r.length;return a?dn(r,ft):[]}function X0(r,a){var c=r==null?0:r.length;return c?(a=a===e?1:ue(a),dn(r,a)):[]}function q0(r){for(var a=-1,c=r==null?0:r.length,d={};++a<c;){var y=r[a];d[y[0]]=y[1]}return d}function Yd(r){return r&&r.length?r[0]:e}function Y0(r,a,c){var d=r==null?0:r.length;if(!d)return-1;var y=c==null?0:ue(c);return y<0&&(y=rn(d+y,0)),as(r,a,y)}function Z0(r){var a=r==null?0:r.length;return a?ti(r,0,-1):[]}var K0=pe(function(r){var a=qe(r,yc);return a.length&&a[0]===r[0]?uc(a):[]}),$0=pe(function(r){var a=ei(r),c=qe(r,yc);return a===ei(c)?a=e:c.pop(),c.length&&c[0]===r[0]?uc(c,Jt(a,2)):[]}),j0=pe(function(r){var a=ei(r),c=qe(r,yc);return a=typeof a=="function"?a:e,a&&c.pop(),c.length&&c[0]===r[0]?uc(c,e,a):[]});function J0(r,a){return r==null?"":Zg.call(r,a)}function ei(r){var a=r==null?0:r.length;return a?r[a-1]:e}function Q0(r,a,c){var d=r==null?0:r.length;if(!d)return-1;var y=d;return c!==e&&(y=ue(c),y=y<0?rn(d+y,0):gn(y,d-1)),a===a?Lg(r,a,y):Ja(r,wf,y,!0)}function tx(r,a){return r&&r.length?rd(r,ue(a)):e}var ex=pe(Zd);function Zd(r,a){return r&&r.length&&a&&a.length?pc(r,a):r}function nx(r,a,c){return r&&r.length&&a&&a.length?pc(r,a,Jt(c,2)):r}function ix(r,a,c){return r&&r.length&&a&&a.length?pc(r,a,e,c):r}var rx=Ni(function(r,a){var c=r==null?0:r.length,d=ac(r,a);return od(r,qe(a,function(y){return Oi(y,c)?+y:y}).sort(gd)),d});function sx(r,a){var c=[];if(!(r&&r.length))return c;var d=-1,y=[],A=r.length;for(a=Jt(a,3);++d<A;){var L=r[d];a(L,d,r)&&(c.push(L),y.push(d))}return od(r,y),c}function Uc(r){return r==null?r:Jg.call(r)}function ax(r,a,c){var d=r==null?0:r.length;return d?(c&&typeof c!="number"&&bn(r,a,c)?(a=0,c=d):(a=a==null?0:ue(a),c=c===e?d:ue(c)),ti(r,a,c)):[]}function ox(r,a){return xo(r,a)}function lx(r,a,c){return gc(r,a,Jt(c,2))}function cx(r,a){var c=r==null?0:r.length;if(c){var d=xo(r,a);if(d<c&&di(r[d],a))return d}return-1}function ux(r,a){return xo(r,a,!0)}function hx(r,a,c){return gc(r,a,Jt(c,2),!0)}function fx(r,a){var c=r==null?0:r.length;if(c){var d=xo(r,a,!0)-1;if(di(r[d],a))return d}return-1}function dx(r){return r&&r.length?cd(r):[]}function px(r,a){return r&&r.length?cd(r,Jt(a,2)):[]}function mx(r){var a=r==null?0:r.length;return a?ti(r,1,a):[]}function _x(r,a,c){return r&&r.length?(a=c||a===e?1:ue(a),ti(r,0,a<0?0:a)):[]}function gx(r,a,c){var d=r==null?0:r.length;return d?(a=c||a===e?1:ue(a),a=d-a,ti(r,a<0?0:a,d)):[]}function vx(r,a){return r&&r.length?yo(r,Jt(a,3),!1,!0):[]}function xx(r,a){return r&&r.length?yo(r,Jt(a,3)):[]}var yx=pe(function(r){return ir(dn(r,1,je,!0))}),Mx=pe(function(r){var a=ei(r);return je(a)&&(a=e),ir(dn(r,1,je,!0),Jt(a,2))}),Sx=pe(function(r){var a=ei(r);return a=typeof a=="function"?a:e,ir(dn(r,1,je,!0),e,a)});function Ex(r){return r&&r.length?ir(r):[]}function bx(r,a){return r&&r.length?ir(r,Jt(a,2)):[]}function Tx(r,a){return a=typeof a=="function"?a:e,r&&r.length?ir(r,e,a):[]}function Nc(r){if(!(r&&r.length))return[];var a=0;return r=ji(r,function(c){if(je(c))return a=rn(c.length,a),!0}),Jl(a,function(c){return qe(r,Kl(c))})}function Kd(r,a){if(!(r&&r.length))return[];var c=Nc(r);return a==null?c:qe(c,function(d){return Bn(a,e,d)})}var Ax=pe(function(r,a){return je(r)?aa(r,a):[]}),wx=pe(function(r){return xc(ji(r,je))}),Rx=pe(function(r){var a=ei(r);return je(a)&&(a=e),xc(ji(r,je),Jt(a,2))}),Cx=pe(function(r){var a=ei(r);return a=typeof a=="function"?a:e,xc(ji(r,je),e,a)}),Px=pe(Nc);function Dx(r,a){return dd(r||[],a||[],sa)}function Lx(r,a){return dd(r||[],a||[],ca)}var Ix=pe(function(r){var a=r.length,c=a>1?r[a-1]:e;return c=typeof c=="function"?(r.pop(),c):e,Kd(r,c)});function $d(r){var a=E(r);return a.__chain__=!0,a}function Ux(r,a){return a(r),r}function Co(r,a){return a(r)}var Nx=Ni(function(r){var a=r.length,c=a?r[0]:0,d=this.__wrapped__,y=function(A){return ac(A,r)};return a>1||this.__actions__.length||!(d instanceof ye)||!Oi(c)?this.thru(y):(d=d.slice(c,+c+(a?1:0)),d.__actions__.push({func:Co,args:[y],thisArg:e}),new Jn(d,this.__chain__).thru(function(A){return a&&!A.length&&A.push(e),A}))});function Ox(){return $d(this)}function Fx(){return new Jn(this.value(),this.__chain__)}function Bx(){this.__values__===e&&(this.__values__=up(this.value()));var r=this.__index__>=this.__values__.length,a=r?e:this.__values__[this.__index__++];return{done:r,value:a}}function zx(){return this}function kx(r){for(var a,c=this;c instanceof po;){var d=Gd(c);d.__index__=0,d.__values__=e,a?y.__wrapped__=d:a=d;var y=d;c=c.__wrapped__}return y.__wrapped__=r,a}function Hx(){var r=this.__wrapped__;if(r instanceof ye){var a=r;return this.__actions__.length&&(a=new ye(this)),a=a.reverse(),a.__actions__.push({func:Co,args:[Uc],thisArg:e}),new Jn(a,this.__chain__)}return this.thru(Uc)}function Vx(){return fd(this.__wrapped__,this.__actions__)}var Gx=Mo(function(r,a,c){Ie.call(r,c)?++r[c]:Ii(r,c,1)});function Wx(r,a,c){var d=ae(r)?Tf:Uv;return c&&bn(r,a,c)&&(a=e),d(r,Jt(a,3))}function Xx(r,a){var c=ae(r)?ji:Kf;return c(r,Jt(a,3))}var qx=Ed(Wd),Yx=Ed(Xd);function Zx(r,a){return dn(Po(r,a),1)}function Kx(r,a){return dn(Po(r,a),ft)}function $x(r,a,c){return c=c===e?1:ue(c),dn(Po(r,a),c)}function jd(r,a){var c=ae(r)?$n:nr;return c(r,Jt(a,3))}function Jd(r,a){var c=ae(r)?mg:Zf;return c(r,Jt(a,3))}var jx=Mo(function(r,a,c){Ie.call(r,c)?r[c].push(a):Ii(r,c,[a])});function Jx(r,a,c,d){r=Ln(r)?r:gs(r),c=c&&!d?ue(c):0;var y=r.length;return c<0&&(c=rn(y+c,0)),No(r)?c<=y&&r.indexOf(a,c)>-1:!!y&&as(r,a,c)>-1}var Qx=pe(function(r,a,c){var d=-1,y=typeof a=="function",A=Ln(r)?j(r.length):[];return nr(r,function(L){A[++d]=y?Bn(a,L,c):oa(L,a,c)}),A}),ty=Mo(function(r,a,c){Ii(r,c,a)});function Po(r,a){var c=ae(r)?qe:ed;return c(r,Jt(a,3))}function ey(r,a,c,d){return r==null?[]:(ae(a)||(a=a==null?[]:[a]),c=d?e:c,ae(c)||(c=c==null?[]:[c]),sd(r,a,c))}var ny=Mo(function(r,a,c){r[c?0:1].push(a)},function(){return[[],[]]});function iy(r,a,c){var d=ae(r)?Yl:Cf,y=arguments.length<3;return d(r,Jt(a,4),c,y,nr)}function ry(r,a,c){var d=ae(r)?_g:Cf,y=arguments.length<3;return d(r,Jt(a,4),c,y,Zf)}function sy(r,a){var c=ae(r)?ji:Kf;return c(r,Io(Jt(a,3)))}function ay(r){var a=ae(r)?Wf:Jv;return a(r)}function oy(r,a,c){(c?bn(r,a,c):a===e)?a=1:a=ue(a);var d=ae(r)?Cv:Qv;return d(r,a)}function ly(r){var a=ae(r)?Pv:e0;return a(r)}function cy(r){if(r==null)return 0;if(Ln(r))return No(r)?ls(r):r.length;var a=vn(r);return a==_e||a==ve?r.size:fc(r).length}function uy(r,a,c){var d=ae(r)?Zl:n0;return c&&bn(r,a,c)&&(a=e),d(r,Jt(a,3))}var hy=pe(function(r,a){if(r==null)return[];var c=a.length;return c>1&&bn(r,a[0],a[1])?a=[]:c>2&&bn(a[0],a[1],a[2])&&(a=[a[0]]),sd(r,dn(a,1),[])}),Do=Xg||function(){return ln.Date.now()};function fy(r,a){if(typeof a!="function")throw new jn(l);return r=ue(r),function(){if(--r<1)return a.apply(this,arguments)}}function Qd(r,a,c){return a=c?e:a,a=r&&a==null?r.length:a,Ui(r,N,e,e,e,e,a)}function tp(r,a){var c;if(typeof a!="function")throw new jn(l);return r=ue(r),function(){return--r>0&&(c=a.apply(this,arguments)),r<=1&&(a=e),c}}var Oc=pe(function(r,a,c){var d=x;if(c.length){var y=Qi(c,ms(Oc));d|=B}return Ui(r,d,a,c,y)}),ep=pe(function(r,a,c){var d=x|_;if(c.length){var y=Qi(c,ms(ep));d|=B}return Ui(a,d,r,c,y)});function np(r,a,c){a=c?e:a;var d=Ui(r,D,e,e,e,e,e,a);return d.placeholder=np.placeholder,d}function ip(r,a,c){a=c?e:a;var d=Ui(r,w,e,e,e,e,e,a);return d.placeholder=ip.placeholder,d}function rp(r,a,c){var d,y,A,L,O,W,st=0,at=!1,dt=!1,At=!0;if(typeof r!="function")throw new jn(l);a=ni(a)||0,Ze(c)&&(at=!!c.leading,dt="maxWait"in c,A=dt?rn(ni(c.maxWait)||0,a):A,At="trailing"in c?!!c.trailing:At);function Vt(Je){var pi=d,zi=y;return d=y=e,st=Je,L=r.apply(zi,pi),L}function ee(Je){return st=Je,O=fa(xe,a),at?Vt(Je):L}function he(Je){var pi=Je-W,zi=Je-st,Ep=a-pi;return dt?gn(Ep,A-zi):Ep}function ne(Je){var pi=Je-W,zi=Je-st;return W===e||pi>=a||pi<0||dt&&zi>=A}function xe(){var Je=Do();if(ne(Je))return Me(Je);O=fa(xe,he(Je))}function Me(Je){return O=e,At&&d?Vt(Je):(d=y=e,L)}function Vn(){O!==e&&pd(O),st=0,d=W=y=O=e}function Tn(){return O===e?L:Me(Do())}function Gn(){var Je=Do(),pi=ne(Je);if(d=arguments,y=this,W=Je,pi){if(O===e)return ee(W);if(dt)return pd(O),O=fa(xe,a),Vt(W)}return O===e&&(O=fa(xe,a)),L}return Gn.cancel=Vn,Gn.flush=Tn,Gn}var dy=pe(function(r,a){return Yf(r,1,a)}),py=pe(function(r,a,c){return Yf(r,ni(a)||0,c)});function my(r){return Ui(r,C)}function Lo(r,a){if(typeof r!="function"||a!=null&&typeof a!="function")throw new jn(l);var c=function(){var d=arguments,y=a?a.apply(this,d):d[0],A=c.cache;if(A.has(y))return A.get(y);var L=r.apply(this,d);return c.cache=A.set(y,L)||A,L};return c.cache=new(Lo.Cache||Li),c}Lo.Cache=Li;function Io(r){if(typeof r!="function")throw new jn(l);return function(){var a=arguments;switch(a.length){case 0:return!r.call(this);case 1:return!r.call(this,a[0]);case 2:return!r.call(this,a[0],a[1]);case 3:return!r.call(this,a[0],a[1],a[2])}return!r.apply(this,a)}}function _y(r){return tp(2,r)}var gy=i0(function(r,a){a=a.length==1&&ae(a[0])?qe(a[0],zn(Jt())):qe(dn(a,1),zn(Jt()));var c=a.length;return pe(function(d){for(var y=-1,A=gn(d.length,c);++y<A;)d[y]=a[y].call(this,d[y]);return Bn(r,this,d)})}),Fc=pe(function(r,a){var c=Qi(a,ms(Fc));return Ui(r,B,e,a,c)}),sp=pe(function(r,a){var c=Qi(a,ms(sp));return Ui(r,F,e,a,c)}),vy=Ni(function(r,a){return Ui(r,Y,e,e,e,a)});function xy(r,a){if(typeof r!="function")throw new jn(l);return a=a===e?a:ue(a),pe(r,a)}function yy(r,a){if(typeof r!="function")throw new jn(l);return a=a==null?0:rn(ue(a),0),pe(function(c){var d=c[a],y=sr(c,0,a);return d&&Ji(y,d),Bn(r,this,y)})}function My(r,a,c){var d=!0,y=!0;if(typeof r!="function")throw new jn(l);return Ze(c)&&(d="leading"in c?!!c.leading:d,y="trailing"in c?!!c.trailing:y),rp(r,a,{leading:d,maxWait:a,trailing:y})}function Sy(r){return Qd(r,1)}function Ey(r,a){return Fc(Mc(a),r)}function by(){if(!arguments.length)return[];var r=arguments[0];return ae(r)?r:[r]}function Ty(r){return Qn(r,v)}function Ay(r,a){return a=typeof a=="function"?a:e,Qn(r,v,a)}function wy(r){return Qn(r,m|v)}function Ry(r,a){return a=typeof a=="function"?a:e,Qn(r,m|v,a)}function Cy(r,a){return a==null||qf(r,a,cn(a))}function di(r,a){return r===a||r!==r&&a!==a}var Py=To(cc),Dy=To(function(r,a){return r>=a}),Ir=Jf(function(){return arguments}())?Jf:function(r){return $e(r)&&Ie.call(r,"callee")&&!Bf.call(r,"callee")},ae=j.isArray,Ly=xf?zn(xf):kv;function Ln(r){return r!=null&&Uo(r.length)&&!Fi(r)}function je(r){return $e(r)&&Ln(r)}function Iy(r){return r===!0||r===!1||$e(r)&&En(r)==Pt}var ar=Yg||Zc,Uy=yf?zn(yf):Hv;function Ny(r){return $e(r)&&r.nodeType===1&&!da(r)}function Oy(r){if(r==null)return!0;if(Ln(r)&&(ae(r)||typeof r=="string"||typeof r.splice=="function"||ar(r)||_s(r)||Ir(r)))return!r.length;var a=vn(r);if(a==_e||a==ve)return!r.size;if(ha(r))return!fc(r).length;for(var c in r)if(Ie.call(r,c))return!1;return!0}function Fy(r,a){return la(r,a)}function By(r,a,c){c=typeof c=="function"?c:e;var d=c?c(r,a):e;return d===e?la(r,a,e,c):!!d}function Bc(r){if(!$e(r))return!1;var a=En(r);return a==ce||a==Gt||typeof r.message=="string"&&typeof r.name=="string"&&!da(r)}function zy(r){return typeof r=="number"&&kf(r)}function Fi(r){if(!Ze(r))return!1;var a=En(r);return a==Ye||a==U||a==pt||a==yt}function ap(r){return typeof r=="number"&&r==ue(r)}function Uo(r){return typeof r=="number"&&r>-1&&r%1==0&&r<=Q}function Ze(r){var a=typeof r;return r!=null&&(a=="object"||a=="function")}function $e(r){return r!=null&&typeof r=="object"}var op=Mf?zn(Mf):Gv;function ky(r,a){return r===a||hc(r,a,Rc(a))}function Hy(r,a,c){return c=typeof c=="function"?c:e,hc(r,a,Rc(a),c)}function Vy(r){return lp(r)&&r!=+r}function Gy(r){if(A0(r))throw new re(o);return Qf(r)}function Wy(r){return r===null}function Xy(r){return r==null}function lp(r){return typeof r=="number"||$e(r)&&En(r)==Qt}function da(r){if(!$e(r)||En(r)!=mt)return!1;var a=ao(r);if(a===null)return!0;var c=Ie.call(a,"constructor")&&a.constructor;return typeof c=="function"&&c instanceof c&&no.call(c)==Hg}var zc=Sf?zn(Sf):Wv;function qy(r){return ap(r)&&r>=-Q&&r<=Q}var cp=Ef?zn(Ef):Xv;function No(r){return typeof r=="string"||!ae(r)&&$e(r)&&En(r)==De}function Hn(r){return typeof r=="symbol"||$e(r)&&En(r)==P}var _s=bf?zn(bf):qv;function Yy(r){return r===e}function Zy(r){return $e(r)&&vn(r)==G}function Ky(r){return $e(r)&&En(r)==et}var $y=To(dc),jy=To(function(r,a){return r<=a});function up(r){if(!r)return[];if(Ln(r))return No(r)?hi(r):Dn(r);if(ta&&r[ta])return Cg(r[ta]());var a=vn(r),c=a==_e?tc:a==ve?Qa:gs;return c(r)}function Bi(r){if(!r)return r===0?r:0;if(r=ni(r),r===ft||r===-ft){var a=r<0?-1:1;return a*Et}return r===r?r:0}function ue(r){var a=Bi(r),c=a%1;return a===a?c?a-c:a:0}function hp(r){return r?Cr(ue(r),0,It):0}function ni(r){if(typeof r=="number")return r;if(Hn(r))return Rt;if(Ze(r)){var a=typeof r.valueOf=="function"?r.valueOf():r;r=Ze(a)?a+"":a}if(typeof r!="string")return r===0?r:+r;r=Pf(r);var c=kl.test(r);return c||Vl.test(r)?fg(r.slice(2),c?2:8):zl.test(r)?Rt:+r}function fp(r){return Si(r,In(r))}function Jy(r){return r?Cr(ue(r),-Q,Q):r===0?r:0}function Pe(r){return r==null?"":kn(r)}var Qy=ds(function(r,a){if(ha(a)||Ln(a)){Si(a,cn(a),r);return}for(var c in a)Ie.call(a,c)&&sa(r,c,a[c])}),dp=ds(function(r,a){Si(a,In(a),r)}),Oo=ds(function(r,a,c,d){Si(a,In(a),r,d)}),tM=ds(function(r,a,c,d){Si(a,cn(a),r,d)}),eM=Ni(ac);function nM(r,a){var c=fs(r);return a==null?c:Xf(c,a)}var iM=pe(function(r,a){r=He(r);var c=-1,d=a.length,y=d>2?a[2]:e;for(y&&bn(a[0],a[1],y)&&(d=1);++c<d;)for(var A=a[c],L=In(A),O=-1,W=L.length;++O<W;){var st=L[O],at=r[st];(at===e||di(at,cs[st])&&!Ie.call(r,st))&&(r[st]=A[st])}return r}),rM=pe(function(r){return r.push(e,Pd),Bn(pp,e,r)});function sM(r,a){return Af(r,Jt(a,3),Mi)}function aM(r,a){return Af(r,Jt(a,3),lc)}function oM(r,a){return r==null?r:oc(r,Jt(a,3),In)}function lM(r,a){return r==null?r:$f(r,Jt(a,3),In)}function cM(r,a){return r&&Mi(r,Jt(a,3))}function uM(r,a){return r&&lc(r,Jt(a,3))}function hM(r){return r==null?[]:go(r,cn(r))}function fM(r){return r==null?[]:go(r,In(r))}function kc(r,a,c){var d=r==null?e:Pr(r,a);return d===e?c:d}function dM(r,a){return r!=null&&Id(r,a,Ov)}function Hc(r,a){return r!=null&&Id(r,a,Fv)}var pM=Td(function(r,a,c){a!=null&&typeof a.toString!="function"&&(a=io.call(a)),r[a]=c},Gc(Un)),mM=Td(function(r,a,c){a!=null&&typeof a.toString!="function"&&(a=io.call(a)),Ie.call(r,a)?r[a].push(c):r[a]=[c]},Jt),_M=pe(oa);function cn(r){return Ln(r)?Gf(r):fc(r)}function In(r){return Ln(r)?Gf(r,!0):Yv(r)}function gM(r,a){var c={};return a=Jt(a,3),Mi(r,function(d,y,A){Ii(c,a(d,y,A),d)}),c}function vM(r,a){var c={};return a=Jt(a,3),Mi(r,function(d,y,A){Ii(c,y,a(d,y,A))}),c}var xM=ds(function(r,a,c){vo(r,a,c)}),pp=ds(function(r,a,c,d){vo(r,a,c,d)}),yM=Ni(function(r,a){var c={};if(r==null)return c;var d=!1;a=qe(a,function(A){return A=rr(A,r),d||(d=A.length>1),A}),Si(r,Ac(r),c),d&&(c=Qn(c,m|g|v,p0));for(var y=a.length;y--;)vc(c,a[y]);return c});function MM(r,a){return mp(r,Io(Jt(a)))}var SM=Ni(function(r,a){return r==null?{}:Kv(r,a)});function mp(r,a){if(r==null)return{};var c=qe(Ac(r),function(d){return[d]});return a=Jt(a),ad(r,c,function(d,y){return a(d,y[0])})}function EM(r,a,c){a=rr(a,r);var d=-1,y=a.length;for(y||(y=1,r=e);++d<y;){var A=r==null?e:r[Ei(a[d])];A===e&&(d=y,A=c),r=Fi(A)?A.call(r):A}return r}function bM(r,a,c){return r==null?r:ca(r,a,c)}function TM(r,a,c,d){return d=typeof d=="function"?d:e,r==null?r:ca(r,a,c,d)}var _p=Rd(cn),gp=Rd(In);function AM(r,a,c){var d=ae(r),y=d||ar(r)||_s(r);if(a=Jt(a,4),c==null){var A=r&&r.constructor;y?c=d?new A:[]:Ze(r)?c=Fi(A)?fs(ao(r)):{}:c={}}return(y?$n:Mi)(r,function(L,O,W){return a(c,L,O,W)}),c}function wM(r,a){return r==null?!0:vc(r,a)}function RM(r,a,c){return r==null?r:hd(r,a,Mc(c))}function CM(r,a,c,d){return d=typeof d=="function"?d:e,r==null?r:hd(r,a,Mc(c),d)}function gs(r){return r==null?[]:Ql(r,cn(r))}function PM(r){return r==null?[]:Ql(r,In(r))}function DM(r,a,c){return c===e&&(c=a,a=e),c!==e&&(c=ni(c),c=c===c?c:0),a!==e&&(a=ni(a),a=a===a?a:0),Cr(ni(r),a,c)}function LM(r,a,c){return a=Bi(a),c===e?(c=a,a=0):c=Bi(c),r=ni(r),Bv(r,a,c)}function IM(r,a,c){if(c&&typeof c!="boolean"&&bn(r,a,c)&&(a=c=e),c===e&&(typeof a=="boolean"?(c=a,a=e):typeof r=="boolean"&&(c=r,r=e)),r===e&&a===e?(r=0,a=1):(r=Bi(r),a===e?(a=r,r=0):a=Bi(a)),r>a){var d=r;r=a,a=d}if(c||r%1||a%1){var y=Hf();return gn(r+y*(a-r+hg("1e-"+((y+"").length-1))),a)}return mc(r,a)}var UM=ps(function(r,a,c){return a=a.toLowerCase(),r+(c?vp(a):a)});function vp(r){return Vc(Pe(r).toLowerCase())}function xp(r){return r=Pe(r),r&&r.replace(X,bg).replace(eg,"")}function NM(r,a,c){r=Pe(r),a=kn(a);var d=r.length;c=c===e?d:Cr(ue(c),0,d);var y=c;return c-=a.length,c>=0&&r.slice(c,y)==a}function OM(r){return r=Pe(r),r&&ct.test(r)?r.replace(Nt,Tg):r}function FM(r){return r=Pe(r),r&&Pi.test(r)?r.replace(ns,"\\$&"):r}var BM=ps(function(r,a,c){return r+(c?"-":"")+a.toLowerCase()}),zM=ps(function(r,a,c){return r+(c?" ":"")+a.toLowerCase()}),kM=Sd("toLowerCase");function HM(r,a,c){r=Pe(r),a=ue(a);var d=a?ls(r):0;if(!a||d>=a)return r;var y=(a-d)/2;return bo(uo(y),c)+r+bo(co(y),c)}function VM(r,a,c){r=Pe(r),a=ue(a);var d=a?ls(r):0;return a&&d<a?r+bo(a-d,c):r}function GM(r,a,c){r=Pe(r),a=ue(a);var d=a?ls(r):0;return a&&d<a?bo(a-d,c)+r:r}function WM(r,a,c){return c||a==null?a=0:a&&(a=+a),jg(Pe(r).replace(Sr,""),a||0)}function XM(r,a,c){return(c?bn(r,a,c):a===e)?a=1:a=ue(a),_c(Pe(r),a)}function qM(){var r=arguments,a=Pe(r[0]);return r.length<3?a:a.replace(r[1],r[2])}var YM=ps(function(r,a,c){return r+(c?"_":"")+a.toLowerCase()});function ZM(r,a,c){return c&&typeof c!="number"&&bn(r,a,c)&&(a=c=e),c=c===e?It:c>>>0,c?(r=Pe(r),r&&(typeof a=="string"||a!=null&&!zc(a))&&(a=kn(a),!a&&os(r))?sr(hi(r),0,c):r.split(a,c)):[]}var KM=ps(function(r,a,c){return r+(c?" ":"")+Vc(a)});function $M(r,a,c){return r=Pe(r),c=c==null?0:Cr(ue(c),0,r.length),a=kn(a),r.slice(c,c+a.length)==a}function jM(r,a,c){var d=E.templateSettings;c&&bn(r,a,c)&&(a=e),r=Pe(r),a=Oo({},a,d,Cd);var y=Oo({},a.imports,d.imports,Cd),A=cn(y),L=Ql(y,A),O,W,st=0,at=a.interpolate||K,dt="__p += '",At=ec((a.escape||K).source+"|"+at.source+"|"+(at===Le?Bl:K).source+"|"+(a.evaluate||K).source+"|$","g"),Vt="//# sourceURL="+(Ie.call(a,"sourceURL")?(a.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++ag+"]")+`
`;r.replace(At,function(ne,xe,Me,Vn,Tn,Gn){return Me||(Me=Vn),dt+=r.slice(st,Gn).replace(J,Ag),xe&&(O=!0,dt+=`' +
__e(`+xe+`) +
'`),Tn&&(W=!0,dt+=`';
`+Tn+`;
__p += '`),Me&&(dt+=`' +
((__t = (`+Me+`)) == null ? '' : __t) +
'`),st=Gn+ne.length,ne}),dt+=`';
`;var ee=Ie.call(a,"variable")&&a.variable;if(!ee)dt=`with (obj) {
`+dt+`
}
`;else if(Za.test(ee))throw new re(u);dt=(W?dt.replace(se,""):dt).replace(k,"$1").replace(Mt,"$1;"),dt="function("+(ee||"obj")+`) {
`+(ee?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(O?", __e = _.escape":"")+(W?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+dt+`return __p
}`;var he=Mp(function(){return Ae(A,Vt+"return "+dt).apply(e,L)});if(he.source=dt,Bc(he))throw he;return he}function JM(r){return Pe(r).toLowerCase()}function QM(r){return Pe(r).toUpperCase()}function tS(r,a,c){if(r=Pe(r),r&&(c||a===e))return Pf(r);if(!r||!(a=kn(a)))return r;var d=hi(r),y=hi(a),A=Df(d,y),L=Lf(d,y)+1;return sr(d,A,L).join("")}function eS(r,a,c){if(r=Pe(r),r&&(c||a===e))return r.slice(0,Uf(r)+1);if(!r||!(a=kn(a)))return r;var d=hi(r),y=Lf(d,hi(a))+1;return sr(d,0,y).join("")}function nS(r,a,c){if(r=Pe(r),r&&(c||a===e))return r.replace(Sr,"");if(!r||!(a=kn(a)))return r;var d=hi(r),y=Df(d,hi(a));return sr(d,y).join("")}function iS(r,a){var c=R,d=z;if(Ze(a)){var y="separator"in a?a.separator:y;c="length"in a?ue(a.length):c,d="omission"in a?kn(a.omission):d}r=Pe(r);var A=r.length;if(os(r)){var L=hi(r);A=L.length}if(c>=A)return r;var O=c-ls(d);if(O<1)return d;var W=L?sr(L,0,O).join(""):r.slice(0,O);if(y===e)return W+d;if(L&&(O+=W.length-O),zc(y)){if(r.slice(O).search(y)){var st,at=W;for(y.global||(y=ec(y.source,Pe($a.exec(y))+"g")),y.lastIndex=0;st=y.exec(at);)var dt=st.index;W=W.slice(0,dt===e?O:dt)}}else if(r.indexOf(kn(y),O)!=O){var At=W.lastIndexOf(y);At>-1&&(W=W.slice(0,At))}return W+d}function rS(r){return r=Pe(r),r&&vt.test(r)?r.replace(St,Ig):r}var sS=ps(function(r,a,c){return r+(c?" ":"")+a.toUpperCase()}),Vc=Sd("toUpperCase");function yp(r,a,c){return r=Pe(r),a=c?e:a,a===e?Rg(r)?Og(r):xg(r):r.match(a)||[]}var Mp=pe(function(r,a){try{return Bn(r,e,a)}catch(c){return Bc(c)?c:new re(c)}}),aS=Ni(function(r,a){return $n(a,function(c){c=Ei(c),Ii(r,c,Oc(r[c],r))}),r});function oS(r){var a=r==null?0:r.length,c=Jt();return r=a?qe(r,function(d){if(typeof d[1]!="function")throw new jn(l);return[c(d[0]),d[1]]}):[],pe(function(d){for(var y=-1;++y<a;){var A=r[y];if(Bn(A[0],this,d))return Bn(A[1],this,d)}})}function lS(r){return Iv(Qn(r,m))}function Gc(r){return function(){return r}}function cS(r,a){return r==null||r!==r?a:r}var uS=bd(),hS=bd(!0);function Un(r){return r}function Wc(r){return td(typeof r=="function"?r:Qn(r,m))}function fS(r){return nd(Qn(r,m))}function dS(r,a){return id(r,Qn(a,m))}var pS=pe(function(r,a){return function(c){return oa(c,r,a)}}),mS=pe(function(r,a){return function(c){return oa(r,c,a)}});function Xc(r,a,c){var d=cn(a),y=go(a,d);c==null&&!(Ze(a)&&(y.length||!d.length))&&(c=a,a=r,r=this,y=go(a,cn(a)));var A=!(Ze(c)&&"chain"in c)||!!c.chain,L=Fi(r);return $n(y,function(O){var W=a[O];r[O]=W,L&&(r.prototype[O]=function(){var st=this.__chain__;if(A||st){var at=r(this.__wrapped__),dt=at.__actions__=Dn(this.__actions__);return dt.push({func:W,args:arguments,thisArg:r}),at.__chain__=st,at}return W.apply(r,Ji([this.value()],arguments))})}),r}function _S(){return ln._===this&&(ln._=Vg),this}function qc(){}function gS(r){return r=ue(r),pe(function(a){return rd(a,r)})}var vS=Ec(qe),xS=Ec(Tf),yS=Ec(Zl);function Sp(r){return Pc(r)?Kl(Ei(r)):$v(r)}function MS(r){return function(a){return r==null?e:Pr(r,a)}}var SS=Ad(),ES=Ad(!0);function Yc(){return[]}function Zc(){return!1}function bS(){return{}}function TS(){return""}function AS(){return!0}function wS(r,a){if(r=ue(r),r<1||r>Q)return[];var c=It,d=gn(r,It);a=Jt(a),r-=It;for(var y=Jl(d,a);++c<r;)a(c);return y}function RS(r){return ae(r)?qe(r,Ei):Hn(r)?[r]:Dn(Vd(Pe(r)))}function CS(r){var a=++kg;return Pe(r)+a}var PS=Eo(function(r,a){return r+a},0),DS=bc("ceil"),LS=Eo(function(r,a){return r/a},1),IS=bc("floor");function US(r){return r&&r.length?_o(r,Un,cc):e}function NS(r,a){return r&&r.length?_o(r,Jt(a,2),cc):e}function OS(r){return Rf(r,Un)}function FS(r,a){return Rf(r,Jt(a,2))}function BS(r){return r&&r.length?_o(r,Un,dc):e}function zS(r,a){return r&&r.length?_o(r,Jt(a,2),dc):e}var kS=Eo(function(r,a){return r*a},1),HS=bc("round"),VS=Eo(function(r,a){return r-a},0);function GS(r){return r&&r.length?jl(r,Un):0}function WS(r,a){return r&&r.length?jl(r,Jt(a,2)):0}return E.after=fy,E.ary=Qd,E.assign=Qy,E.assignIn=dp,E.assignInWith=Oo,E.assignWith=tM,E.at=eM,E.before=tp,E.bind=Oc,E.bindAll=aS,E.bindKey=ep,E.castArray=by,E.chain=$d,E.chunk=I0,E.compact=U0,E.concat=N0,E.cond=oS,E.conforms=lS,E.constant=Gc,E.countBy=Gx,E.create=nM,E.curry=np,E.curryRight=ip,E.debounce=rp,E.defaults=iM,E.defaultsDeep=rM,E.defer=dy,E.delay=py,E.difference=O0,E.differenceBy=F0,E.differenceWith=B0,E.drop=z0,E.dropRight=k0,E.dropRightWhile=H0,E.dropWhile=V0,E.fill=G0,E.filter=Xx,E.flatMap=Zx,E.flatMapDeep=Kx,E.flatMapDepth=$x,E.flatten=qd,E.flattenDeep=W0,E.flattenDepth=X0,E.flip=my,E.flow=uS,E.flowRight=hS,E.fromPairs=q0,E.functions=hM,E.functionsIn=fM,E.groupBy=jx,E.initial=Z0,E.intersection=K0,E.intersectionBy=$0,E.intersectionWith=j0,E.invert=pM,E.invertBy=mM,E.invokeMap=Qx,E.iteratee=Wc,E.keyBy=ty,E.keys=cn,E.keysIn=In,E.map=Po,E.mapKeys=gM,E.mapValues=vM,E.matches=fS,E.matchesProperty=dS,E.memoize=Lo,E.merge=xM,E.mergeWith=pp,E.method=pS,E.methodOf=mS,E.mixin=Xc,E.negate=Io,E.nthArg=gS,E.omit=yM,E.omitBy=MM,E.once=_y,E.orderBy=ey,E.over=vS,E.overArgs=gy,E.overEvery=xS,E.overSome=yS,E.partial=Fc,E.partialRight=sp,E.partition=ny,E.pick=SM,E.pickBy=mp,E.property=Sp,E.propertyOf=MS,E.pull=ex,E.pullAll=Zd,E.pullAllBy=nx,E.pullAllWith=ix,E.pullAt=rx,E.range=SS,E.rangeRight=ES,E.rearg=vy,E.reject=sy,E.remove=sx,E.rest=xy,E.reverse=Uc,E.sampleSize=oy,E.set=bM,E.setWith=TM,E.shuffle=ly,E.slice=ax,E.sortBy=hy,E.sortedUniq=dx,E.sortedUniqBy=px,E.split=ZM,E.spread=yy,E.tail=mx,E.take=_x,E.takeRight=gx,E.takeRightWhile=vx,E.takeWhile=xx,E.tap=Ux,E.throttle=My,E.thru=Co,E.toArray=up,E.toPairs=_p,E.toPairsIn=gp,E.toPath=RS,E.toPlainObject=fp,E.transform=AM,E.unary=Sy,E.union=yx,E.unionBy=Mx,E.unionWith=Sx,E.uniq=Ex,E.uniqBy=bx,E.uniqWith=Tx,E.unset=wM,E.unzip=Nc,E.unzipWith=Kd,E.update=RM,E.updateWith=CM,E.values=gs,E.valuesIn=PM,E.without=Ax,E.words=yp,E.wrap=Ey,E.xor=wx,E.xorBy=Rx,E.xorWith=Cx,E.zip=Px,E.zipObject=Dx,E.zipObjectDeep=Lx,E.zipWith=Ix,E.entries=_p,E.entriesIn=gp,E.extend=dp,E.extendWith=Oo,Xc(E,E),E.add=PS,E.attempt=Mp,E.camelCase=UM,E.capitalize=vp,E.ceil=DS,E.clamp=DM,E.clone=Ty,E.cloneDeep=wy,E.cloneDeepWith=Ry,E.cloneWith=Ay,E.conformsTo=Cy,E.deburr=xp,E.defaultTo=cS,E.divide=LS,E.endsWith=NM,E.eq=di,E.escape=OM,E.escapeRegExp=FM,E.every=Wx,E.find=qx,E.findIndex=Wd,E.findKey=sM,E.findLast=Yx,E.findLastIndex=Xd,E.findLastKey=aM,E.floor=IS,E.forEach=jd,E.forEachRight=Jd,E.forIn=oM,E.forInRight=lM,E.forOwn=cM,E.forOwnRight=uM,E.get=kc,E.gt=Py,E.gte=Dy,E.has=dM,E.hasIn=Hc,E.head=Yd,E.identity=Un,E.includes=Jx,E.indexOf=Y0,E.inRange=LM,E.invoke=_M,E.isArguments=Ir,E.isArray=ae,E.isArrayBuffer=Ly,E.isArrayLike=Ln,E.isArrayLikeObject=je,E.isBoolean=Iy,E.isBuffer=ar,E.isDate=Uy,E.isElement=Ny,E.isEmpty=Oy,E.isEqual=Fy,E.isEqualWith=By,E.isError=Bc,E.isFinite=zy,E.isFunction=Fi,E.isInteger=ap,E.isLength=Uo,E.isMap=op,E.isMatch=ky,E.isMatchWith=Hy,E.isNaN=Vy,E.isNative=Gy,E.isNil=Xy,E.isNull=Wy,E.isNumber=lp,E.isObject=Ze,E.isObjectLike=$e,E.isPlainObject=da,E.isRegExp=zc,E.isSafeInteger=qy,E.isSet=cp,E.isString=No,E.isSymbol=Hn,E.isTypedArray=_s,E.isUndefined=Yy,E.isWeakMap=Zy,E.isWeakSet=Ky,E.join=J0,E.kebabCase=BM,E.last=ei,E.lastIndexOf=Q0,E.lowerCase=zM,E.lowerFirst=kM,E.lt=$y,E.lte=jy,E.max=US,E.maxBy=NS,E.mean=OS,E.meanBy=FS,E.min=BS,E.minBy=zS,E.stubArray=Yc,E.stubFalse=Zc,E.stubObject=bS,E.stubString=TS,E.stubTrue=AS,E.multiply=kS,E.nth=tx,E.noConflict=_S,E.noop=qc,E.now=Do,E.pad=HM,E.padEnd=VM,E.padStart=GM,E.parseInt=WM,E.random=IM,E.reduce=iy,E.reduceRight=ry,E.repeat=XM,E.replace=qM,E.result=EM,E.round=HS,E.runInContext=H,E.sample=ay,E.size=cy,E.snakeCase=YM,E.some=uy,E.sortedIndex=ox,E.sortedIndexBy=lx,E.sortedIndexOf=cx,E.sortedLastIndex=ux,E.sortedLastIndexBy=hx,E.sortedLastIndexOf=fx,E.startCase=KM,E.startsWith=$M,E.subtract=VS,E.sum=GS,E.sumBy=WS,E.template=jM,E.times=wS,E.toFinite=Bi,E.toInteger=ue,E.toLength=hp,E.toLower=JM,E.toNumber=ni,E.toSafeInteger=Jy,E.toString=Pe,E.toUpper=QM,E.trim=tS,E.trimEnd=eS,E.trimStart=nS,E.truncate=iS,E.unescape=rS,E.uniqueId=CS,E.upperCase=sS,E.upperFirst=Vc,E.each=jd,E.eachRight=Jd,E.first=Yd,Xc(E,function(){var r={};return Mi(E,function(a,c){Ie.call(E.prototype,c)||(r[c]=a)}),r}(),{chain:!1}),E.VERSION=i,$n(["bind","bindKey","curry","curryRight","partial","partialRight"],function(r){E[r].placeholder=E}),$n(["drop","take"],function(r,a){ye.prototype[r]=function(c){c=c===e?1:rn(ue(c),0);var d=this.__filtered__&&!a?new ye(this):this.clone();return d.__filtered__?d.__takeCount__=gn(c,d.__takeCount__):d.__views__.push({size:gn(c,It),type:r+(d.__dir__<0?"Right":"")}),d},ye.prototype[r+"Right"]=function(c){return this.reverse()[r](c).reverse()}}),$n(["filter","map","takeWhile"],function(r,a){var c=a+1,d=c==ot||c==lt;ye.prototype[r]=function(y){var A=this.clone();return A.__iteratees__.push({iteratee:Jt(y,3),type:c}),A.__filtered__=A.__filtered__||d,A}}),$n(["head","last"],function(r,a){var c="take"+(a?"Right":"");ye.prototype[r]=function(){return this[c](1).value()[0]}}),$n(["initial","tail"],function(r,a){var c="drop"+(a?"":"Right");ye.prototype[r]=function(){return this.__filtered__?new ye(this):this[c](1)}}),ye.prototype.compact=function(){return this.filter(Un)},ye.prototype.find=function(r){return this.filter(r).head()},ye.prototype.findLast=function(r){return this.reverse().find(r)},ye.prototype.invokeMap=pe(function(r,a){return typeof r=="function"?new ye(this):this.map(function(c){return oa(c,r,a)})}),ye.prototype.reject=function(r){return this.filter(Io(Jt(r)))},ye.prototype.slice=function(r,a){r=ue(r);var c=this;return c.__filtered__&&(r>0||a<0)?new ye(c):(r<0?c=c.takeRight(-r):r&&(c=c.drop(r)),a!==e&&(a=ue(a),c=a<0?c.dropRight(-a):c.take(a-r)),c)},ye.prototype.takeRightWhile=function(r){return this.reverse().takeWhile(r).reverse()},ye.prototype.toArray=function(){return this.take(It)},Mi(ye.prototype,function(r,a){var c=/^(?:filter|find|map|reject)|While$/.test(a),d=/^(?:head|last)$/.test(a),y=E[d?"take"+(a=="last"?"Right":""):a],A=d||/^find/.test(a);y&&(E.prototype[a]=function(){var L=this.__wrapped__,O=d?[1]:arguments,W=L instanceof ye,st=O[0],at=W||ae(L),dt=function(xe){var Me=y.apply(E,Ji([xe],O));return d&&At?Me[0]:Me};at&&c&&typeof st=="function"&&st.length!=1&&(W=at=!1);var At=this.__chain__,Vt=!!this.__actions__.length,ee=A&&!At,he=W&&!Vt;if(!A&&at){L=he?L:new ye(this);var ne=r.apply(L,O);return ne.__actions__.push({func:Co,args:[dt],thisArg:e}),new Jn(ne,At)}return ee&&he?r.apply(this,O):(ne=this.thru(dt),ee?d?ne.value()[0]:ne.value():ne)})}),$n(["pop","push","shift","sort","splice","unshift"],function(r){var a=to[r],c=/^(?:push|sort|unshift)$/.test(r)?"tap":"thru",d=/^(?:pop|shift)$/.test(r);E.prototype[r]=function(){var y=arguments;if(d&&!this.__chain__){var A=this.value();return a.apply(ae(A)?A:[],y)}return this[c](function(L){return a.apply(ae(L)?L:[],y)})}}),Mi(ye.prototype,function(r,a){var c=E[a];if(c){var d=c.name+"";Ie.call(hs,d)||(hs[d]=[]),hs[d].push({name:a,func:c})}}),hs[So(e,_).name]=[{name:"wrapper",func:e}],ye.prototype.clone=rv,ye.prototype.reverse=sv,ye.prototype.value=av,E.prototype.at=Nx,E.prototype.chain=Ox,E.prototype.commit=Fx,E.prototype.next=Bx,E.prototype.plant=kx,E.prototype.reverse=Hx,E.prototype.toJSON=E.prototype.valueOf=E.prototype.value=Vx,E.prototype.first=E.prototype.head,ta&&(E.prototype[ta]=zx),E},tr=Fg();typeof define=="function"&&typeof define.amd=="object"&&define.amd?(ln._=tr,define(function(){return tr})):Tr?((Tr.exports=tr)._=tr,Wl._=tr):ln._=tr}).call(n)}),qR=ht((n,t)=>{function e(){this.__data__=[],this.size=0}t.exports=e}),b_=ht((n,t)=>{function e(i,s){return i===s||i!==i&&s!==s}t.exports=e}),Pl=ht((n,t)=>{var e=b_();function i(s,o){for(var l=s.length;l--;)if(e(s[l][0],o))return l;return-1}t.exports=i}),YR=ht((n,t)=>{var e=Pl(),i=Array.prototype,s=i.splice;function o(l){var u=this.__data__,f=e(u,l);if(f<0)return!1;var h=u.length-1;return f==h?u.pop():s.call(u,f,1),--this.size,!0}t.exports=o}),ZR=ht((n,t)=>{var e=Pl();function i(s){var o=this.__data__,l=e(o,s);return l<0?void 0:o[l][1]}t.exports=i}),KR=ht((n,t)=>{var e=Pl();function i(s){return e(this.__data__,s)>-1}t.exports=i}),$R=ht((n,t)=>{var e=Pl();function i(s,o){var l=this.__data__,u=e(l,s);return u<0?(++this.size,l.push([s,o])):l[u][1]=o,this}t.exports=i}),Dl=ht((n,t)=>{var e=qR(),i=YR(),s=ZR(),o=KR(),l=$R();function u(f){var h=-1,p=f==null?0:f.length;for(this.clear();++h<p;){var m=f[h];this.set(m[0],m[1])}}u.prototype.clear=e,u.prototype.delete=i,u.prototype.get=s,u.prototype.has=o,u.prototype.set=l,t.exports=u}),jR=ht((n,t)=>{var e=Dl();function i(){this.__data__=new e,this.size=0}t.exports=i}),JR=ht((n,t)=>{function e(i){var s=this.__data__,o=s.delete(i);return this.size=s.size,o}t.exports=e}),QR=ht((n,t)=>{function e(i){return this.__data__.get(i)}t.exports=e}),tC=ht((n,t)=>{function e(i){return this.__data__.has(i)}t.exports=e}),T_=ht((n,t)=>{var e=typeof global=="object"&&global&&global.Object===Object&&global;t.exports=e}),Ci=ht((n,t)=>{var e=T_(),i=typeof self=="object"&&self&&self.Object===Object&&self,s=e||i||Function("return this")();t.exports=s}),qh=ht((n,t)=>{var e=Ci(),i=e.Symbol;t.exports=i}),eC=ht((n,t)=>{var e=qh(),i=Object.prototype,s=i.hasOwnProperty,o=i.toString,l=e?e.toStringTag:void 0;function u(f){var h=s.call(f,l),p=f[l];try{f[l]=void 0;var m=!0}catch{}var g=o.call(f);return m&&(h?f[l]=p:delete f[l]),g}t.exports=u}),nC=ht((n,t)=>{var e=Object.prototype,i=e.toString;function s(o){return i.call(o)}t.exports=s}),Ll=ht((n,t)=>{var e=qh(),i=eC(),s=nC(),o="[object Null]",l="[object Undefined]",u=e?e.toStringTag:void 0;function f(h){return h==null?h===void 0?l:o:u&&u in Object(h)?i(h):s(h)}t.exports=f}),Ga=ht((n,t)=>{function e(i){var s=typeof i;return i!=null&&(s=="object"||s=="function")}t.exports=e}),A_=ht((n,t)=>{var e=Ll(),i=Ga(),s="[object AsyncFunction]",o="[object Function]",l="[object GeneratorFunction]",u="[object Proxy]";function f(h){if(!i(h))return!1;var p=e(h);return p==o||p==l||p==s||p==u}t.exports=f}),iC=ht((n,t)=>{var e=Ci(),i=e["__core-js_shared__"];t.exports=i}),rC=ht((n,t)=>{var e=iC(),i=function(){var o=/[^.]+$/.exec(e&&e.keys&&e.keys.IE_PROTO||"");return o?"Symbol(src)_1."+o:""}();function s(o){return!!i&&i in o}t.exports=s}),w_=ht((n,t)=>{var e=Function.prototype,i=e.toString;function s(o){if(o!=null){try{return i.call(o)}catch{}try{return o+""}catch{}}return""}t.exports=s}),sC=ht((n,t)=>{var e=A_(),i=rC(),s=Ga(),o=w_(),l=/[\\^$.*+?()[\]{}|]/g,u=/^\[object .+?Constructor\]$/,f=Function.prototype,h=Object.prototype,p=f.toString,m=h.hasOwnProperty,g=RegExp("^"+p.call(m).replace(l,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function v(M){if(!s(M)||i(M))return!1;var b=e(M)?g:u;return b.test(o(M))}t.exports=v}),aC=ht((n,t)=>{function e(i,s){return i?.[s]}t.exports=e}),es=ht((n,t)=>{var e=sC(),i=aC();function s(o,l){var u=i(o,l);return e(u)?u:void 0}t.exports=s}),Yh=ht((n,t)=>{var e=es(),i=Ci(),s=e(i,"Map");t.exports=s}),Il=ht((n,t)=>{var e=es(),i=e(Object,"create");t.exports=i}),oC=ht((n,t)=>{var e=Il();function i(){this.__data__=e?e(null):{},this.size=0}t.exports=i}),lC=ht((n,t)=>{function e(i){var s=this.has(i)&&delete this.__data__[i];return this.size-=s?1:0,s}t.exports=e}),cC=ht((n,t)=>{var e=Il(),i="__lodash_hash_undefined__",s=Object.prototype,o=s.hasOwnProperty;function l(u){var f=this.__data__;if(e){var h=f[u];return h===i?void 0:h}return o.call(f,u)?f[u]:void 0}t.exports=l}),uC=ht((n,t)=>{var e=Il(),i=Object.prototype,s=i.hasOwnProperty;function o(l){var u=this.__data__;return e?u[l]!==void 0:s.call(u,l)}t.exports=o}),hC=ht((n,t)=>{var e=Il(),i="__lodash_hash_undefined__";function s(o,l){var u=this.__data__;return this.size+=this.has(o)?0:1,u[o]=e&&l===void 0?i:l,this}t.exports=s}),fC=ht((n,t)=>{var e=oC(),i=lC(),s=cC(),o=uC(),l=hC();function u(f){var h=-1,p=f==null?0:f.length;for(this.clear();++h<p;){var m=f[h];this.set(m[0],m[1])}}u.prototype.clear=e,u.prototype.delete=i,u.prototype.get=s,u.prototype.has=o,u.prototype.set=l,t.exports=u}),dC=ht((n,t)=>{var e=fC(),i=Dl(),s=Yh();function o(){this.size=0,this.__data__={hash:new e,map:new(s||i),string:new e}}t.exports=o}),pC=ht((n,t)=>{function e(i){var s=typeof i;return s=="string"||s=="number"||s=="symbol"||s=="boolean"?i!=="__proto__":i===null}t.exports=e}),Ul=ht((n,t)=>{var e=pC();function i(s,o){var l=s.__data__;return e(o)?l[typeof o=="string"?"string":"hash"]:l.map}t.exports=i}),mC=ht((n,t)=>{var e=Ul();function i(s){var o=e(this,s).delete(s);return this.size-=o?1:0,o}t.exports=i}),_C=ht((n,t)=>{var e=Ul();function i(s){return e(this,s).get(s)}t.exports=i}),gC=ht((n,t)=>{var e=Ul();function i(s){return e(this,s).has(s)}t.exports=i}),vC=ht((n,t)=>{var e=Ul();function i(s,o){var l=e(this,s),u=l.size;return l.set(s,o),this.size+=l.size==u?0:1,this}t.exports=i}),xC=ht((n,t)=>{var e=dC(),i=mC(),s=_C(),o=gC(),l=vC();function u(f){var h=-1,p=f==null?0:f.length;for(this.clear();++h<p;){var m=f[h];this.set(m[0],m[1])}}u.prototype.clear=e,u.prototype.delete=i,u.prototype.get=s,u.prototype.has=o,u.prototype.set=l,t.exports=u}),yC=ht((n,t)=>{var e=Dl(),i=Yh(),s=xC(),o=200;function l(u,f){var h=this.__data__;if(h instanceof e){var p=h.__data__;if(!i||p.length<o-1)return p.push([u,f]),this.size=++h.size,this;h=this.__data__=new s(p)}return h.set(u,f),this.size=h.size,this}t.exports=l}),MC=ht((n,t)=>{var e=Dl(),i=jR(),s=JR(),o=QR(),l=tC(),u=yC();function f(h){var p=this.__data__=new e(h);this.size=p.size}f.prototype.clear=i,f.prototype.delete=s,f.prototype.get=o,f.prototype.has=l,f.prototype.set=u,t.exports=f}),SC=ht((n,t)=>{function e(i,s){for(var o=-1,l=i==null?0:i.length;++o<l&&s(i[o],o,i)!==!1;);return i}t.exports=e}),EC=ht((n,t)=>{var e=es(),i=function(){try{var s=e(Object,"defineProperty");return s({},"",{}),s}catch{}}();t.exports=i}),R_=ht((n,t)=>{var e=EC();function i(s,o,l){o=="__proto__"&&e?e(s,o,{configurable:!0,enumerable:!0,value:l,writable:!0}):s[o]=l}t.exports=i}),C_=ht((n,t)=>{var e=R_(),i=b_(),s=Object.prototype,o=s.hasOwnProperty;function l(u,f,h){var p=u[f];(!(o.call(u,f)&&i(p,h))||h===void 0&&!(f in u))&&e(u,f,h)}t.exports=l}),Nl=ht((n,t)=>{var e=C_(),i=R_();function s(o,l,u,f){var h=!u;u||(u={});for(var p=-1,m=l.length;++p<m;){var g=l[p],v=f?f(u[g],o[g],g,u,o):void 0;v===void 0&&(v=o[g]),h?i(u,g,v):e(u,g,v)}return u}t.exports=s}),bC=ht((n,t)=>{function e(i,s){for(var o=-1,l=Array(i);++o<i;)l[o]=s(o);return l}t.exports=e}),Wa=ht((n,t)=>{function e(i){return i!=null&&typeof i=="object"}t.exports=e}),TC=ht((n,t)=>{var e=Ll(),i=Wa(),s="[object Arguments]";function o(l){return i(l)&&e(l)==s}t.exports=o}),AC=ht((n,t)=>{var e=TC(),i=Wa(),s=Object.prototype,o=s.hasOwnProperty,l=s.propertyIsEnumerable,u=e(function(){return arguments}())?e:function(f){return i(f)&&o.call(f,"callee")&&!l.call(f,"callee")};t.exports=u}),Zh=ht((n,t)=>{var e=Array.isArray;t.exports=e}),wC=ht((n,t)=>{function e(){return!1}t.exports=e}),P_=ht((n,t)=>{var e=Ci(),i=wC(),s=typeof n=="object"&&n&&!n.nodeType&&n,o=s&&typeof t=="object"&&t&&!t.nodeType&&t,l=o&&o.exports===s,u=l?e.Buffer:void 0,f=u?u.isBuffer:void 0,h=f||i;t.exports=h}),RC=ht((n,t)=>{var e=9007199254740991,i=/^(?:0|[1-9]\d*)$/;function s(o,l){var u=typeof o;return l=l??e,!!l&&(u=="number"||u!="symbol"&&i.test(o))&&o>-1&&o%1==0&&o<l}t.exports=s}),D_=ht((n,t)=>{var e=9007199254740991;function i(s){return typeof s=="number"&&s>-1&&s%1==0&&s<=e}t.exports=i}),CC=ht((n,t)=>{var e=Ll(),i=D_(),s=Wa(),o="[object Arguments]",l="[object Array]",u="[object Boolean]",f="[object Date]",h="[object Error]",p="[object Function]",m="[object Map]",g="[object Number]",v="[object Object]",M="[object RegExp]",b="[object Set]",x="[object String]",_="[object WeakMap]",I="[object ArrayBuffer]",D="[object DataView]",w="[object Float32Array]",B="[object Float64Array]",F="[object Int8Array]",N="[object Int16Array]",Y="[object Int32Array]",C="[object Uint8Array]",R="[object Uint8ClampedArray]",z="[object Uint16Array]",$="[object Uint32Array]",Z={};Z[w]=Z[B]=Z[F]=Z[N]=Z[Y]=Z[C]=Z[R]=Z[z]=Z[$]=!0,Z[o]=Z[l]=Z[I]=Z[u]=Z[D]=Z[f]=Z[h]=Z[p]=Z[m]=Z[g]=Z[v]=Z[M]=Z[b]=Z[x]=Z[_]=!1;function ot(it){return s(it)&&i(it.length)&&!!Z[e(it)]}t.exports=ot}),Kh=ht((n,t)=>{function e(i){return function(s){return i(s)}}t.exports=e}),$h=ht((n,t)=>{var e=T_(),i=typeof n=="object"&&n&&!n.nodeType&&n,s=i&&typeof t=="object"&&t&&!t.nodeType&&t,o=s&&s.exports===i,l=o&&e.process,u=function(){try{var f=s&&s.require&&s.require("util").types;return f||l&&l.binding&&l.binding("util")}catch{}}();t.exports=u}),PC=ht((n,t)=>{var e=CC(),i=Kh(),s=$h(),o=s&&s.isTypedArray,l=o?i(o):e;t.exports=l}),L_=ht((n,t)=>{var e=bC(),i=AC(),s=Zh(),o=P_(),l=RC(),u=PC(),f=Object.prototype,h=f.hasOwnProperty;function p(m,g){var v=s(m),M=!v&&i(m),b=!v&&!M&&o(m),x=!v&&!M&&!b&&u(m),_=v||M||b||x,I=_?e(m.length,String):[],D=I.length;for(var w in m)(g||h.call(m,w))&&!(_&&(w=="length"||b&&(w=="offset"||w=="parent")||x&&(w=="buffer"||w=="byteLength"||w=="byteOffset")||l(w,D)))&&I.push(w);return I}t.exports=p}),jh=ht((n,t)=>{var e=Object.prototype;function i(s){var o=s&&s.constructor,l=typeof o=="function"&&o.prototype||e;return s===l}t.exports=i}),I_=ht((n,t)=>{function e(i,s){return function(o){return i(s(o))}}t.exports=e}),DC=ht((n,t)=>{var e=I_(),i=e(Object.keys,Object);t.exports=i}),LC=ht((n,t)=>{var e=jh(),i=DC(),s=Object.prototype,o=s.hasOwnProperty;function l(u){if(!e(u))return i(u);var f=[];for(var h in Object(u))o.call(u,h)&&h!="constructor"&&f.push(h);return f}t.exports=l}),U_=ht((n,t)=>{var e=A_(),i=D_();function s(o){return o!=null&&i(o.length)&&!e(o)}t.exports=s}),Jh=ht((n,t)=>{var e=L_(),i=LC(),s=U_();function o(l){return s(l)?e(l):i(l)}t.exports=o}),IC=ht((n,t)=>{var e=Nl(),i=Jh();function s(o,l){return o&&e(l,i(l),o)}t.exports=s}),UC=ht((n,t)=>{function e(i){var s=[];if(i!=null)for(var o in Object(i))s.push(o);return s}t.exports=e}),NC=ht((n,t)=>{var e=Ga(),i=jh(),s=UC(),o=Object.prototype,l=o.hasOwnProperty;function u(f){if(!e(f))return s(f);var h=i(f),p=[];for(var m in f)m=="constructor"&&(h||!l.call(f,m))||p.push(m);return p}t.exports=u}),Qh=ht((n,t)=>{var e=L_(),i=NC(),s=U_();function o(l){return s(l)?e(l,!0):i(l)}t.exports=o}),OC=ht((n,t)=>{var e=Nl(),i=Qh();function s(o,l){return o&&e(l,i(l),o)}t.exports=s}),FC=ht((n,t)=>{var e=Ci(),i=typeof n=="object"&&n&&!n.nodeType&&n,s=i&&typeof t=="object"&&t&&!t.nodeType&&t,o=s&&s.exports===i,l=o?e.Buffer:void 0,u=l?l.allocUnsafe:void 0;function f(h,p){if(p)return h.slice();var m=h.length,g=u?u(m):new h.constructor(m);return h.copy(g),g}t.exports=f}),BC=ht((n,t)=>{function e(i,s){var o=-1,l=i.length;for(s||(s=Array(l));++o<l;)s[o]=i[o];return s}t.exports=e}),zC=ht((n,t)=>{function e(i,s){for(var o=-1,l=i==null?0:i.length,u=0,f=[];++o<l;){var h=i[o];s(h,o,i)&&(f[u++]=h)}return f}t.exports=e}),N_=ht((n,t)=>{function e(){return[]}t.exports=e}),tf=ht((n,t)=>{var e=zC(),i=N_(),s=Object.prototype,o=s.propertyIsEnumerable,l=Object.getOwnPropertySymbols,u=l?function(f){return f==null?[]:(f=Object(f),e(l(f),function(h){return o.call(f,h)}))}:i;t.exports=u}),kC=ht((n,t)=>{var e=Nl(),i=tf();function s(o,l){return e(o,i(o),l)}t.exports=s}),O_=ht((n,t)=>{function e(i,s){for(var o=-1,l=s.length,u=i.length;++o<l;)i[u+o]=s[o];return i}t.exports=e}),F_=ht((n,t)=>{var e=I_(),i=e(Object.getPrototypeOf,Object);t.exports=i}),B_=ht((n,t)=>{var e=O_(),i=F_(),s=tf(),o=N_(),l=Object.getOwnPropertySymbols,u=l?function(f){for(var h=[];f;)e(h,s(f)),f=i(f);return h}:o;t.exports=u}),HC=ht((n,t)=>{var e=Nl(),i=B_();function s(o,l){return e(o,i(o),l)}t.exports=s}),z_=ht((n,t)=>{var e=O_(),i=Zh();function s(o,l,u){var f=l(o);return i(o)?f:e(f,u(o))}t.exports=s}),VC=ht((n,t)=>{var e=z_(),i=tf(),s=Jh();function o(l){return e(l,s,i)}t.exports=o}),GC=ht((n,t)=>{var e=z_(),i=B_(),s=Qh();function o(l){return e(l,s,i)}t.exports=o}),WC=ht((n,t)=>{var e=es(),i=Ci(),s=e(i,"DataView");t.exports=s}),XC=ht((n,t)=>{var e=es(),i=Ci(),s=e(i,"Promise");t.exports=s}),qC=ht((n,t)=>{var e=es(),i=Ci(),s=e(i,"Set");t.exports=s}),YC=ht((n,t)=>{var e=es(),i=Ci(),s=e(i,"WeakMap");t.exports=s}),ef=ht((n,t)=>{var e=WC(),i=Yh(),s=XC(),o=qC(),l=YC(),u=Ll(),f=w_(),h="[object Map]",p="[object Object]",m="[object Promise]",g="[object Set]",v="[object WeakMap]",M="[object DataView]",b=f(e),x=f(i),_=f(s),I=f(o),D=f(l),w=u;(e&&w(new e(new ArrayBuffer(1)))!=M||i&&w(new i)!=h||s&&w(s.resolve())!=m||o&&w(new o)!=g||l&&w(new l)!=v)&&(w=function(B){var F=u(B),N=F==p?B.constructor:void 0,Y=N?f(N):"";if(Y)switch(Y){case b:return M;case x:return h;case _:return m;case I:return g;case D:return v}return F}),t.exports=w}),ZC=ht((n,t)=>{var e=Object.prototype,i=e.hasOwnProperty;function s(o){var l=o.length,u=new o.constructor(l);return l&&typeof o[0]=="string"&&i.call(o,"index")&&(u.index=o.index,u.input=o.input),u}t.exports=s}),KC=ht((n,t)=>{var e=Ci(),i=e.Uint8Array;t.exports=i}),nf=ht((n,t)=>{var e=KC();function i(s){var o=new s.constructor(s.byteLength);return new e(o).set(new e(s)),o}t.exports=i}),$C=ht((n,t)=>{var e=nf();function i(s,o){var l=o?e(s.buffer):s.buffer;return new s.constructor(l,s.byteOffset,s.byteLength)}t.exports=i}),jC=ht((n,t)=>{var e=/\w*$/;function i(s){var o=new s.constructor(s.source,e.exec(s));return o.lastIndex=s.lastIndex,o}t.exports=i}),JC=ht((n,t)=>{var e=qh(),i=e?e.prototype:void 0,s=i?i.valueOf:void 0;function o(l){return s?Object(s.call(l)):{}}t.exports=o}),QC=ht((n,t)=>{var e=nf();function i(s,o){var l=o?e(s.buffer):s.buffer;return new s.constructor(l,s.byteOffset,s.length)}t.exports=i}),tP=ht((n,t)=>{var e=nf(),i=$C(),s=jC(),o=JC(),l=QC(),u="[object Boolean]",f="[object Date]",h="[object Map]",p="[object Number]",m="[object RegExp]",g="[object Set]",v="[object String]",M="[object Symbol]",b="[object ArrayBuffer]",x="[object DataView]",_="[object Float32Array]",I="[object Float64Array]",D="[object Int8Array]",w="[object Int16Array]",B="[object Int32Array]",F="[object Uint8Array]",N="[object Uint8ClampedArray]",Y="[object Uint16Array]",C="[object Uint32Array]";function R(z,$,Z){var ot=z.constructor;switch($){case b:return e(z);case u:case f:return new ot(+z);case x:return i(z,Z);case _:case I:case D:case w:case B:case F:case N:case Y:case C:return l(z,Z);case h:return new ot;case p:case v:return new ot(z);case m:return s(z);case g:return new ot;case M:return o(z)}}t.exports=R}),eP=ht((n,t)=>{var e=Ga(),i=Object.create,s=function(){function o(){}return function(l){if(!e(l))return{};if(i)return i(l);o.prototype=l;var u=new o;return o.prototype=void 0,u}}();t.exports=s}),nP=ht((n,t)=>{var e=eP(),i=F_(),s=jh();function o(l){return typeof l.constructor=="function"&&!s(l)?e(i(l)):{}}t.exports=o}),iP=ht((n,t)=>{var e=ef(),i=Wa(),s="[object Map]";function o(l){return i(l)&&e(l)==s}t.exports=o}),rP=ht((n,t)=>{var e=iP(),i=Kh(),s=$h(),o=s&&s.isMap,l=o?i(o):e;t.exports=l}),sP=ht((n,t)=>{var e=ef(),i=Wa(),s="[object Set]";function o(l){return i(l)&&e(l)==s}t.exports=o}),aP=ht((n,t)=>{var e=sP(),i=Kh(),s=$h(),o=s&&s.isSet,l=o?i(o):e;t.exports=l}),oP=ht((n,t)=>{var e=MC(),i=SC(),s=C_(),o=IC(),l=OC(),u=FC(),f=BC(),h=kC(),p=HC(),m=VC(),g=GC(),v=ef(),M=ZC(),b=tP(),x=nP(),_=Zh(),I=P_(),D=rP(),w=Ga(),B=aP(),F=Jh(),N=Qh(),Y=1,C=2,R=4,z="[object Arguments]",$="[object Array]",Z="[object Boolean]",ot="[object Date]",it="[object Error]",lt="[object Function]",ft="[object GeneratorFunction]",Q="[object Map]",Et="[object Number]",Rt="[object Object]",It="[object RegExp]",le="[object Set]",we="[object String]",Ne="[object Symbol]",de="[object WeakMap]",rt="[object ArrayBuffer]",pt="[object DataView]",Pt="[object Float32Array]",Zt="[object Float64Array]",Gt="[object Int8Array]",ce="[object Int16Array]",Ye="[object Int32Array]",U="[object Uint8Array]",_e="[object Uint8ClampedArray]",Qt="[object Uint16Array]",jt="[object Uint32Array]",mt={};mt[z]=mt[$]=mt[rt]=mt[pt]=mt[Z]=mt[ot]=mt[Pt]=mt[Zt]=mt[Gt]=mt[ce]=mt[Ye]=mt[Q]=mt[Et]=mt[Rt]=mt[It]=mt[le]=mt[we]=mt[Ne]=mt[U]=mt[_e]=mt[Qt]=mt[jt]=!0,mt[it]=mt[lt]=mt[de]=!1;function Ee(yt,Kt,ve,De,P,S){var G,et=Kt&Y,ut=Kt&C,tt=Kt&R;if(ve&&(G=P?ve(yt,De,P,S):ve(yt)),G!==void 0)return G;if(!w(yt))return yt;var Bt=_(yt);if(Bt){if(G=M(yt),!et)return f(yt,G)}else{var gt=v(yt),Ot=gt==lt||gt==ft;if(I(yt))return u(yt,et);if(gt==Rt||gt==z||Ot&&!P){if(G=ut||Ot?{}:x(yt),!et)return ut?p(yt,l(G,yt)):h(yt,o(G,yt))}else{if(!mt[gt])return P?yt:{};G=b(yt,gt,et)}}S||(S=new e);var Ft=S.get(yt);if(Ft)return Ft;S.set(yt,G),B(yt)?yt.forEach(function(Ht){G.add(Ee(Ht,Kt,ve,Ht,yt,S))}):D(yt)&&yt.forEach(function(Ht,Dt){G.set(Dt,Ee(Ht,Kt,ve,Dt,yt,S))});var _t=tt?ut?g:m:ut?N:F,bt=Bt?void 0:_t(yt);return i(bt||yt,function(Ht,Dt){bt&&(Dt=Ht,Ht=yt[Dt]),s(G,Dt,Ee(Ht,Kt,ve,Dt,yt,S))}),G}t.exports=Ee}),k_=ht((n,t)=>{var e=oP(),i=1,s=4;function o(l){return e(l,i|s)}t.exports=o}),lP=ts(Va());function cP(n,t){let e=n.image?t.load(n.image):new Qe;return n.name&&(e.name=n.name),n.uuid&&(e.uuid=n.uuid),n.repeat&&e.repeat.set(n.repeat[0],n.repeat[1]),n.offset&&e.offset.set(n.offset[0],n.offset[1]),n.center&&e.center.set(n.center[0],n.center[1]),typeof n.rotation=="number"&&(e.rotation=n.rotation),n.wrap&&(e.wrapS=n.wrap[0],e.wrapT=n.wrap[1]),n.mapping!==void 0&&(e.mapping=n.mapping),n.magFilter!==void 0&&(e.magFilter=n.magFilter),n.minFilter!==void 0&&(e.minFilter=n.minFilter),typeof n.anisotropy=="number"&&(e.anisotropy=n.anisotropy),n.format!==void 0&&(e.format=n.format),n.type!==void 0&&(e.type=n.type),n.colorSpace!==void 0&&(e.colorSpace=n.colorSpace),typeof n.flipY=="boolean"&&(e.flipY=n.flipY),typeof n.generateMipmaps=="boolean"&&(e.generateMipmaps=n.generateMipmaps),n.userData&&(e.userData=(0,lP.cloneDeep)(n.userData)),e.needsUpdate=!0,e}function H_(n,t,e=1,i=0){let s=0,o=n.length/e;for(;s<o;){let l=s+o>>1;n[l*e+i]<t?s=l+1:o=l}return s*e}function uP(n,t){let e=new Array(n);for(let i=0;i<n;i++)e[i]=t(i);return e}var hP=ts(Va()),{cos:fP,pow:dP,sin:pP,sqrt:mP,PI:V_}=Math;function _P(n,t){let e=Math.max(0,Math.floor(n)),i=(0,hP.clamp)(t,0,.99);if(e===0)return h=>h<=0?0:h>=1?1:h;let s=e+1,o=new Array(s);for(let h=0;h<s;h++)o[h]=Math.pow(i,h);let l=o.reduce((h,p)=>h+p,0);for(let h=0;h<s;h++)o[h]/=l;let u=new Array(s),f=0;for(let h=0;h<s;h++)f+=o[h],u[h]=f;return h=>{if(h<=0)return 0;if(h>=1)return 1;let p=0;for(;p<s&&h>u[p];)p++;let m=p===0?0:u[p-1],g=o[p],v=(h-m)/g;return p===0?v*v:1-Math.pow(i,2*p)*4*v*(1-v)}}function gP(n){return t=>1-n(1-t)}function vP(n){return t=>t<.5?.5*n(2*t):.5+.5*(1-n(2-2*t))}var xP=n=>n===0||n===1?n:dP(2,-10*n)*pP((n-.075)*(2*V_)/.3)+1,yP={linear:n=>n,quad:n=>n*n,cubic:n=>n*n*n,quart:n=>n*n*n*n,quint:n=>n*n*n*n*n,sine:n=>1-fP(n*V_*.5),circ:n=>1-mP(1-n*n),back:n=>2.7*n*n*n-1.7*n*n,elastic:xP,bounce:_P(3,.5)},Lm=Object.fromEntries(Object.entries(yP).flatMap(([n,t])=>[[n,t],[`${n}In`,t],[`${n}Out`,gP(t)],[`${n}InOut`,vP(t)]]));function rf(n){if(!(n in Lm))throw new Error(`Easing '${n}' was not found.`);return Lm[n]}function sf(n,t,e=Number.EPSILON){return Math.abs(n-t)<=e}function MP(n,t){let e=H_(n,t,2),i=Math.max(0,e-2);e===n.length&&(e-=2);let s=n[i],o=n[e];if(sf(s,o))return n[i+1];{let l=n[i+1],u=n[e+1],f=(t-s)/(o-s);return(u-l)*f+l}}function Im(n,t,e,i){if(n.length===0){i.fill(0,0,t);return}let s=t+1,o=H_(n,e,s),l=Math.max(0,o-s);o===n.length&&(o-=s);let u=n[l],f=n[o];if(sf(u,f))for(let h=0;h<t;h++)i[h]=n[l+h+1];else for(let h=0;h<t;h++){let p=n[l+h+1],m=n[o+h+1],g=(e-u)/(f-u);i[h]=(m-p)*g+p}}function af(n){return n!=null}var SP=new TextDecoder;function EP(n,t){return typeof n=="string"?n:SP.decode(n,t)}var vr={min:0,max:0,ease:"linear"};function Ca(n){let t=n?.min??vr.min,e=n?.max??n?.min??vr.max,i=n?.ease??vr.ease;return{min:t,max:e,ease:i}}function Pa(n){return rf(n.ease)(Math.random())*(n.max-n.min)+n.min}function Da(n){let t={};return n.min!==vr.min&&(t.min=n.min),n.max!==n.min&&n.max!==vr.max&&(t.max=n.max),n.ease!==vr.ease&&(t.ease=n.ease),t}var Um=ts(k_()),mr={property:"",timeline:new Float32Array,useEmitterDuration:!1,relative:!1,low:{min:0,max:0,ease:"linear"},high:{min:1,max:1,ease:"linear"}};function wu(n){let t=Ca(n.low??(0,Um.default)(mr.low)),e=Ca(n.high??n.low??(0,Um.default)(mr.high)),i=Array.isArray(n.timeline)?new Float32Array(n.timeline):n.timeline instanceof Float32Array?n.timeline:new Float32Array;return{property:n.property??mr.property,timeline:i,useEmitterDuration:n.useEmitterDuration??mr.useEmitterDuration,relative:n.relative??mr.relative,low:t,high:e}}function Ru(n){let t={};n.property!==mr.property&&(t.property=n.property),n.timeline.length>0&&(t.timeline=Array.from(n.timeline)),n.useEmitterDuration&&(t.useEmitterDuration=n.useEmitterDuration),n.relative&&(t.relative=n.relative);let e=Da(n.low);Object.keys(e).length&&(t.low=e);let i=Da(n.high);return Object.keys(i).length&&(t.high=i),t}var Xr=ts(k_()),{random:Gs,cos:Nm,sin:Om,PI:bP,acos:TP,cbrt:AP}=Math,bl={type:"point",x:0,y:0,z:0,w:0,h:0,d:0,ease:"linear"};function wP(n){return{...bl,...n}}function RP(n){let t={};for(let e of Object.keys(bl))n[e]!==bl[e]&&(t[e]=n[e]);return t}function CP(n,t){let e=rf(n);t.x=e(Gs())-.5,t.y=e(Gs())-.5,t.z=e(Gs())-.5}var Cu=new V,PP=new V,DP=2*bP;function LP(n,t){switch(n.type){case"point":t.set(n.x,n.y,n.z);break;case"box":CP(n.ease,Cu),Cu.multiply(PP.set(n.w,n.h,n.d)),t.set(n.x,n.y,n.z).add(Cu);break;case"ellipsoid":{let e=Gs(),i=Gs(),s=DP*e,o=TP(2*i-1),l=AP(rf(n.ease)(Gs())),u=Om(s),f=Nm(s),h=Om(o),p=Nm(o),m=.5*n.w,g=.5*n.h,v=.5*n.d;t.set(n.x+l*m*h*f,n.y+l*g*h*u,n.z+l*v*p);break}}}var Mn={name:"",enabled:!0,count:100,loops:!0,duration:{duration:{min:10,max:10,ease:"linear"},delayBefore:vr,delayAfter:vr},emissionRate:{...mr,property:"emissionRate",useEmitterDuration:!0,low:{min:10,max:10,ease:"linear"},high:{min:10,max:10,ease:"linear"}},particleLifeExpectancy:{...mr,property:"particleLifeExpectancy",useEmitterDuration:!0,low:{min:2,max:2,ease:"linear"},high:{min:2,max:2,ease:"linear"}},rotateToOrientation:!1};function IP({emitterJson:n,materials:t,geometries:e}){let i=n.uuid??Qm.generateUUID(),s=wP(n.spawn??(0,Xr.default)(bl)),o=UP(n.duration??(0,Xr.default)(Mn.duration)),l=wu(n.emissionRate??(0,Xr.default)(Mn.emissionRate)),u=wu(n.particleLifeExpectancy??(0,Xr.default)(Mn.particleLifeExpectancy)),f=(n.propertyTimelines??[]).filter(af).map(m=>wu(m)),h=FP(n.material,t),p=zP(n.geometry,e??{});return{uuid:i,name:n.name??Mn.name,enabled:n.enabled??Mn.enabled,loops:n.loops??Mn.loops,duration:o,count:n.count??Mn.count,emissionRate:l,particleLifeExpectancy:u,spawn:s,rotateToOrientation:n.rotateToOrientation??Mn.rotateToOrientation,propertyTimelines:f,material:h,geometry:p}}function UP(n){let t=n??{};return{duration:Ca(t.duration??(0,Xr.default)(Mn.duration.duration)),delayBefore:Ca(t.delayBefore??(0,Xr.default)(Mn.duration.delayBefore)),delayAfter:Ca(t.delayAfter??(0,Xr.default)(Mn.duration.delayAfter))}}function NP(n,t,e={}){let i={uuid:n.uuid};n.name!==Mn.name&&(i.name=n.name),n.enabled!==Mn.enabled&&(i.enabled=n.enabled),n.loops!==Mn.loops&&(i.loops=n.loops);let s=OP(n.duration);Object.keys(s).length&&(i.duration=s),n.count!==Mn.count&&(i.count=n.count);let o=Ru(n.emissionRate);Object.keys(o).length&&(i.emissionRate=o);let l=Ru(n.particleLifeExpectancy);Object.keys(l).length&&(i.particleLifeExpectancy=l);let u=RP(n.spawn);if(Object.keys(u).length&&(i.spawn=u),n.rotateToOrientation!==Mn.rotateToOrientation&&(i.rotateToOrientation=n.rotateToOrientation),n.propertyTimelines.length&&(i.propertyTimelines=n.propertyTimelines.map(f=>Ru(f))),n.material!=null){let f=BP(n.material,t);f!=null&&(!Array.isArray(f)||f.length>0)&&(i.material=f)}if(n.geometry!=null){let f=kP(n.geometry,e);f!=null&&(i.geometry=f)}return i}function OP(n){let t={},e=Da(n.duration);Object.keys(e).length&&(t.duration=e);let i=Da(n.delayBefore);Object.keys(i).length&&(t.delayBefore=i);let s=Da(n.delayAfter);return Object.keys(s).length&&(t.delayAfter=s),t}function FP(n,t){return n?Array.isArray(n)?n.map(e=>Fm(e,t)).filter(af):Fm(n,t):null}function Fm(n,t){return typeof n=="string"?t[n]||(console.warn(`Missing material: ${n}`),null):n??null}function BP(n,t){if(!n)return null;if(Array.isArray(n)){let e=[];for(let i of n){let s=Bm(i,t);s!=null&&e.push(s)}return e}else return Bm(n,t)}function Bm(n,t){if(n==null)return null;if(typeof n=="string")return n;for(let[e,i]of Object.entries(t))if(i===n)return e;return console.warn("Missing material id for provided Material"),null}function zP(n,t){return n?typeof n=="string"?t[n]||(console.warn(`Missing geometry: ${n}`),null):n:null}function kP(n,t){if(n==null)return null;if(typeof n=="string")return n;for(let[e,i]of Object.entries(t))if(i===n)return e;return console.warn("Missing geometry id for provided BufferGeometry"),null}var HP={version:"1.0"};function VP({effectJson:n,bundledMaterials:t,externalMaterials:e,bundledTextures:i,externalTextures:s,bundledGeometries:o,externalGeometries:l}){let u={...e,...t},f={...l,...o},h=(n.emitters??[]).filter(af).map(p=>IP({emitterJson:p,materials:u,geometries:f}));return{version:n.version??HP.version,emitters:h,materials:t,textures:i,geometries:o,toJSON:function(){return GP({effect:this,externalMaterials:e,externalTextures:s,externalGeometries:l})}}}function GP({effect:n,externalMaterials:t,externalTextures:e,externalGeometries:i}){let s={},o={...t,...n.materials},l={...i,...n.geometries};s.version=n.version,n.emitters.length&&(s.emitters=n.emitters.map(h=>NP(h,o,l)));let u=Object.entries(n.materials);if(u.length){let h={},p=WP(e);for(let[m,g]of u)h[m]=XP(g,p);Object.keys(h).length&&(s.materials=h)}let f=Object.entries(n.geometries);if(f.length){let h={};for(let[p,m]of f)h[p]=m.toJSON();Object.keys(h).length&&(s.geometries=h)}return s}function WP(n){let t={};for(let[e,i]of Object.entries(n))t[i.uuid]=e;return t}function XP(n,t){let e=n.toJSON();return delete e.textures,delete e.images,bh(e,t)}function bh(n,t){if(Array.isArray(n))return n.map(e=>bh(e,t));if(n&&typeof n=="object"){let e={};for(let[i,s]of Object.entries(n))e[i]=bh(s,t);return e}return typeof n=="string"&&t[n]?t[n]:n}var qP=ts(Va());function YP(n,t,e=t*2,i=t*2){n.save();let s=n.createRadialGradient(t,t,0,t,t,t);s.addColorStop(0,"rgba(255,255,255,1.0)"),s.addColorStop(1,"rgba(255,255,255,0)"),n.fillStyle=s,n.fillRect(0,0,e,i),n.restore()}function ZP(n=64){if(typeof document>"u")return new Qe;let t=document.createElement("canvas"),e=t.getContext("2d");if(!e)return new Qe;t.width=n,t.height=n;let i=n/2;YP(e,i);let s=new Qe(t);return s.type=xi,s.needsUpdate=!0,s}var Pu=null;function KP(){return Pu===null&&(Pu=ZP()),Pu}var $P=class extends Qr{constructor(n,t){super(n),this.materials={},this.textures={},this.geometries={},this.materialLoader=t?.materialLoader??new Wh(n),this.textureLoader=t?.textureLoader??new Xb(n),this.geometryLoader=t?.geometryLoader??new jb(n),this.setTextures({radial:KP()})}setMaterials(n){this.materials=n}setTextures(n){this.textures=n}setGeometries(n){this.geometries=n}setPath(n){return super.setPath(n),this.materialLoader.setPath(n),this.textureLoader.setPath(n),this.geometryLoader.setPath(n),this}load(n,t,e,i){let s=new Gh(this.manager);s.setPath(this.path),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials),s.load(n,o=>{this.parseAsync(JSON.parse(EP(o))).then(t).catch(l=>i?.(l))},e,i)}async parseAsync(n){n=(0,qP.cloneDeep)(n);let t={};if(n.textures){let o=this.textureLoader;for(let[l,u]of Object.entries(n.textures))typeof u=="string"?t[l]=await o.loadAsync(u):t[l]=cP(u,o)}let e=this.materialLoader;e.setTextures({...this.textures,...t});let i={};if(n.materials)for(let[o,l]of Object.entries(n.materials))i[o]=typeof l=="string"?await e.loadAsync(l):e.parse(l);let s={};if(n.geometries){let o=this.geometryLoader;for(let[l,u]of Object.entries(n.geometries))s[l]=typeof u=="string"?await o.loadAsync(u):o.parse(u)}return VP({effectJson:n,bundledMaterials:i,externalMaterials:this.materials,bundledTextures:t,externalTextures:this.textures,bundledGeometries:s,externalGeometries:this.geometries})}},jP=ts(Va()),Th=class{constructor(n){this.timeline=n,this.low=0,this.high=0,this.diff=0,this.current=0,this.reset()}reset(){this.low=Pa(this.timeline.low),this.high=Pa(this.timeline.high),this.timeline.relative&&(this.high+=this.low),this.diff=this.high-this.low,this.current=this.low}setTime(n){this.current=MP(this.timeline.timeline,n)*this.diff+this.low}},dl=new V,JP=class{constructor(n,t,e,i){this.r=n,this.g=t,this.b=e,this.a=i}set(n,t,e,i){this.r=n,this.g=t,this.b=e,this.a=i}},QP=class{constructor(n){this.model=n,this.active=!1,this.life=0,this._lifeExpectancy=0,this.lifeExpectancyInv=0,this.position=new V,this.velocity=new V,this.scale=new V(1,1,1),this.rotation=new V,this.rotationVel=new V,this.orientation=new Yn,this.orientationVel=new V,this.forwardVel=0,this.tint=new JP(1,1,1,1),this.origin=new V(.5,.5,.5),this.rotationFinal=new V,this.imageIndex=0,this.propertyStates=n.propertyTimelines.map(t=>tD(this,t))}get lifeExpectancy(){return this._lifeExpectancy}set lifeExpectancy(n){this._lifeExpectancy=n,this.lifeExpectancyInv=1/n}update(n,t){this.life+=n;let e=this.life*this.lifeExpectancyInv,i=(0,jP.clamp)(e,0,1);for(let s of this.propertyStates)s.apply(i,t);Du(this.velocity)&&this.position.add(dl.copy(this.velocity).multiplyScalar(n)),Du(this.rotation)&&this.rotation.add(dl.copy(this.rotationVel).multiplyScalar(n)),Du(this.orientationVel)&&(this.orientation.x+=this.orientationVel.x*n,this.orientation.y+=this.orientationVel.y*n,this.orientation.z+=this.orientationVel.z*n),sf(this.forwardVel,0)||(dl.set(0,1,0).applyEuler(this.orientation),this.position.addScaledVector(dl,this.forwardVel*n)),this.model.rotateToOrientation?(this.rotationFinal.x=this.rotation.x+this.orientation.x,this.rotationFinal.y=this.rotation.y+this.orientation.y,this.rotationFinal.z=this.rotation.z+this.orientation.z):this.rotationFinal.copy(this.rotation)}reset(){this.active=!1,this.life=0,this._lifeExpectancy=0,this.lifeExpectancyInv=0,LP(this.model.spawn,this.position),this.velocity.set(0,0,0),this.scale.set(1,1,1),this.rotation.set(0,0,0),this.rotationVel.set(0,0,0),this.orientation.set(0,0,0),this.orientationVel.set(0,0,0),this.forwardVel=0,this.tint.set(1,1,1,1),this.origin.set(.5,.5,.5),this.imageIndex=0;for(let n of this.propertyStates)n.reset()}};function tD(n,t){return t.property==="color"?new nD(n.tint,t):new eD(n,t)}var zm=new Set,eD=class{constructor(n,t){this.particleProps=n,this.timeline=t,this.value=new Th(t);let e=t.property;e in km?this.updater=km[e]:(zm.has(e)||(zm.add(e),console.warn(`Could not find property updater with the name ${e}`)),this.updater=()=>{})}apply(n,t){if(this.timeline.timeline.length===0)return;let e=this.timeline.useEmitterDuration?t:n;this.value.setTime(e),this.updater(this.particleProps,this.value.current)}reset(){this.value.reset()}},nD=class{constructor(n,t){if(this.color=n,this.timeline=t,this.previous=new Float32Array(3),this.value=new Float32Array(3),t.timeline.length%4!==0)throw new Error(`invalid color timeline, expected stride to be 4, was length ${t.timeline.length}`)}apply(n,t){this.previous.set(this.value);let e=this.timeline.useEmitterDuration?t:n;Im(this.timeline.timeline,3,e,this.value);let i=this.color;i.r=this.value[0],i.g=this.value[1],i.b=this.value[2]}reset(){Im(this.timeline.timeline,3,0,this.value),this.previous.set(this.value)}},km={x:(n,t)=>n.position.x=t,y:(n,t)=>n.position.y=t,z:(n,t)=>n.position.z=t,xVel:(n,t)=>n.velocity.x=t,yVel:(n,t)=>n.velocity.y=t,zVel:(n,t)=>n.velocity.z=t,originX:(n,t)=>n.origin.x=t,originY:(n,t)=>n.origin.y=t,originZ:(n,t)=>n.origin.z=t,scale:(n,t)=>{n.scale.x=t,n.scale.y=t,n.scale.z=t},scaleX:(n,t)=>n.scale.x=t,scaleY:(n,t)=>n.scale.y=t,scaleZ:(n,t)=>n.scale.z=t,rotationX:(n,t)=>n.rotation.x=t,rotationY:(n,t)=>n.rotation.y=t,rotationZ:(n,t)=>n.rotation.z=t,rotationXVel:(n,t)=>n.rotationVel.x=t,rotationYVel:(n,t)=>n.rotationVel.y=t,rotationZVel:(n,t)=>n.rotationVel.z=t,orientationX:(n,t)=>n.orientation.x=t,orientationY:(n,t)=>n.orientation.y=t,orientationZ:(n,t)=>n.orientation.z=t,orientationXVel:(n,t)=>n.orientationVel.x=t,orientationYVel:(n,t)=>n.orientationVel.y=t,orientationZVel:(n,t)=>n.orientationVel.z=t,forwardVel:(n,t)=>n.forwardVel=t,colorR:(n,t)=>n.tint.r=t,colorG:(n,t)=>n.tint.g=t,colorB:(n,t)=>n.tint.b=t,colorA:(n,t)=>n.tint.a=t};function Du(n){return n.lengthSq()>Number.EPSILON}var iD=ts(Va()),G_=class{constructor(n){this.model=n,this._activeCount=0,this.delayBefore=0,this.delayAfter=0,this.time=0,this.duration=0,this.durationInv=0,this.endTime=0,this._isComplete=!1,this.loops=!1,this.accumulator=0,this.particles=uP(n.count,()=>new QP(n)),this.emissionRateValue=new Th(n.emissionRate),this.particleLifeExpectancyValue=new Th(n.particleLifeExpectancy),this.rewind()}get activeCount(){return this._activeCount}get totalTime(){return this.delayBefore+this.duration+this.delayAfter}get progress(){return this.totalTime<=0?1:(this.time+this.delayBefore)/this.totalTime}get isComplete(){return this._isComplete}update(n){if(this._isComplete||!this.model.enabled)return;if(this.time+=n,this.time>=this.endTime){if(this.loops){let i=this.time-this.endTime;this.rewind(),this.time+=i}else if(this._activeCount===0){this._isComplete=!0,this.accumulator=0;return}}let t=this.time*this.durationInv;if(this.emissionRateValue.setTime(t),this.particleLifeExpectancyValue.setTime(t),this.time<this.duration&&this.time>0){let i=this.emissionRateValue.current;this.accumulator+=i*n;let s=1/i;if(this.accumulator>1){let o=0;for(let l of this.particles)if(l.active||(l.reset(),l.life+=o,o-=s,l.active=!0,l.lifeExpectancy=this.particleLifeExpectancyValue.current,this._activeCount++,this.accumulator--),this._activeCount>=this.model.count&&(this.accumulator=0),this.accumulator<1)break}}let e=(0,iD.clamp)(t,0,1);for(let i of this.particles)i.active&&(i.update(n,e),i.life>i.lifeExpectancy&&(i.active=!1,this._activeCount--))}clearParticles(){for(let n of this.particles)n.active=!1;this._activeCount=0,this.accumulator=0}reset(){this.clearParticles(),this.rewind()}stop(n=!0){this.loops=!1,this.time=this.endTime,n||(this.clearParticles(),this._isComplete=!0)}rewind(){let n=this.model;this._isComplete=!1,this.loops=n.loops,this.delayBefore=Pa(n.duration.delayBefore),this.delayAfter=Pa(n.duration.delayAfter),this.time=-this.delayBefore,this.duration=Pa(n.duration.duration),this.durationInv=1/this.duration,this.endTime=this.duration+this.delayAfter,this.emissionRateValue.reset(),this.particleLifeExpectancyValue.reset()}},rD=class extends Pb{constructor(n){super(n.geometry??void 0,n.material??void 0),this.isParticleEmitterObject=!0,this.state=new G_(n);let t=n.count;this.geometry.setAttribute("position",new Cn(new Float32Array(t*3),3)),this.geometry.setAttribute("color",new Cn(new Float32Array(t*4),4))}updateGeometry(){if(!this.state.model.enabled)return;let n=this.geometry.attributes.position.array,t=this.geometry.attributes.color.array,e=0;for(let i of this.state.particles){if(!i.active)continue;let s=i.position,o=e*3;n[o]=s.x,n[o+1]=s.y,n[o+2]=s.z;let l=i.tint,u=e*4;t[u]=l.r,t[u+1]=l.g,t[u+2]=l.b,t[u+3]=l.a,e++}this.geometry.setDrawRange(0,this.state.activeCount),this.geometry.attributes.position.needsUpdate=!0,this.geometry.attributes.color.needsUpdate=!0}},sD=class extends Tb{constructor(n){let t=n.count;super(n.geometry??void 0,n.material??void 0,t),this.isParticleEmitterObject=!0,this.color=new Yt,this.obj=new en,this.capacity=t,this.state=new G_(n),this.castShadow=!0,this.receiveShadow=!0,this.frustumCulled=!1}updateGeometry(){if(!this.state.model.enabled)return;let n=0;for(let t of this.state.particles)if(t.active&&(this.obj.position.copy(t.position),this.obj.scale.copy(t.scale),this.obj.updateMatrix(),this.setMatrixAt(n,this.obj.matrix),this.color.setRGB(t.tint.r,t.tint.g,t.tint.b),this.setColorAt(n,this.color),n++,n>=this.capacity))break;this.count=n,this.instanceMatrix.needsUpdate=!0,this.instanceColor&&(this.instanceColor.needsUpdate=!0)}};function aD(n){return n.isParticleEmitterObject}var oD=class W_ extends ba{constructor(t){super(),this.model=t,this.emittersNeedUpdate=!0}forEachEmitter(t){this.emittersNeedUpdate&&this.refreshEmitters();for(let e of this.children)aD(e)&&t(e)}refreshEmitters(){this.emittersNeedUpdate=!1,this.clear();for(let t of this.model.emitters){let e=(Array.isArray(t.material)?t.material[0]:t.material)instanceof Vh?new rD(t):new sD(t);this.add(e)}}update(t){this.forEachEmitter(e=>{e.state.update(t),e.updateGeometry()})}rewind(){this.forEachEmitter(t=>t.state.rewind())}stop(t){this.forEachEmitter(e=>e.state.stop(t))}reset(){this.forEachEmitter(t=>t.state.reset())}clone(){return new W_(this.model)}};/*! Bundled license information:

lodash/lodash.js:
  (**
   * @license
   * Lodash <https://lodash.com/>
   * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
   * Released under MIT license <https://lodash.com/license>
   * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
   * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
   *)
*/const Hm={type:"change"},of={type:"start"},X_={type:"end"},pl=new wl,Vm=new dr,lD=Math.cos(70*Qm.DEG2RAD),sn=new V,Nn=2*Math.PI,Be={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Lu=1e-6;class cD extends nT{constructor(t,e=null){super(t,e),this.state=Be.NONE,this.target=new V,this.cursor=new V,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ks.ROTATE,MIDDLE:ks.DOLLY,RIGHT:ks.PAN},this.touches={ONE:Bs.ROTATE,TWO:Bs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new V,this._lastQuaternion=new Yr,this._lastTargetPosition=new V,this._quat=new Yr().setFromUnitVectors(t.up,new V(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new am,this._sphericalDelta=new am,this._scale=1,this._panOffset=new V,this._rotateStart=new Wt,this._rotateEnd=new Wt,this._rotateDelta=new Wt,this._panStart=new Wt,this._panEnd=new Wt,this._panDelta=new Wt,this._dollyStart=new Wt,this._dollyEnd=new Wt,this._dollyDelta=new Wt,this._dollyDirection=new V,this._mouse=new Wt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=hD.bind(this),this._onPointerDown=uD.bind(this),this._onPointerUp=fD.bind(this),this._onContextMenu=xD.bind(this),this._onMouseWheel=mD.bind(this),this._onKeyDown=_D.bind(this),this._onTouchStart=gD.bind(this),this._onTouchMove=vD.bind(this),this._onMouseDown=dD.bind(this),this._onMouseMove=pD.bind(this),this._interceptControlDown=yD.bind(this),this._interceptControlUp=MD.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Hm),this.update(),this.state=Be.NONE}update(t=null){const e=this.object.position;sn.copy(e).sub(this.target),sn.applyQuaternion(this._quat),this._spherical.setFromVector3(sn),this.autoRotate&&this.state===Be.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=Nn:i>Math.PI&&(i-=Nn),s<-Math.PI?s+=Nn:s>Math.PI&&(s-=Nn),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let o=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const l=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),o=l!=this._spherical.radius}if(sn.setFromSpherical(this._spherical),sn.applyQuaternion(this._quatInverse),e.copy(this.target).add(sn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let l=null;if(this.object.isPerspectiveCamera){const u=sn.length();l=this._clampDistance(u*this._scale);const f=u-l;this.object.position.addScaledVector(this._dollyDirection,f),this.object.updateMatrixWorld(),o=!!f}else if(this.object.isOrthographicCamera){const u=new V(this._mouse.x,this._mouse.y,0);u.unproject(this.object);const f=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),o=f!==this.object.zoom;const h=new V(this._mouse.x,this._mouse.y,0);h.unproject(this.object),this.object.position.sub(h).add(u),this.object.updateMatrixWorld(),l=sn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;l!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(l).add(this.object.position):(pl.origin.copy(this.object.position),pl.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(pl.direction))<lD?this.object.lookAt(this.target):(Vm.setFromNormalAndCoplanarPoint(this.object.up,this.target),pl.intersectPlane(Vm,this.target))))}else if(this.object.isOrthographicCamera){const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),l!==this.object.zoom&&(this.object.updateProjectionMatrix(),o=!0)}return this._scale=1,this._performCursorZoom=!1,o||this._lastPosition.distanceToSquared(this.object.position)>Lu||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Lu||this._lastTargetPosition.distanceToSquared(this.target)>Lu?(this.dispatchEvent(Hm),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Nn/60*this.autoRotateSpeed*t:Nn/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){sn.setFromMatrixColumn(e,0),sn.multiplyScalar(-t),this._panOffset.add(sn)}_panUp(t,e){this.screenSpacePanning===!0?sn.setFromMatrixColumn(e,1):(sn.setFromMatrixColumn(e,0),sn.crossVectors(this.object.up,sn)),sn.multiplyScalar(t),this._panOffset.add(sn)}_pan(t,e){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;sn.copy(s).sub(this.target);let o=sn.length();o*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*o/i.clientHeight,this.object.matrix),this._panUp(2*e*o/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=t-i.left,o=e-i.top,l=i.width,u=i.height;this._mouse.x=s/l*2-1,this._mouse.y=-(o/u)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Nn*this._rotateDelta.x/e.clientHeight),this._rotateUp(Nn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Nn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Nn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Nn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Nn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(i,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,o=Math.sqrt(i*i+s*s);this._dollyStart.set(0,o)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),o=.5*(t.pageY+i.y);this._rotateEnd.set(s,o)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Nn*this._rotateDelta.x/e.clientHeight),this._rotateUp(Nn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,o=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,o),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const l=(t.pageX+e.x)*.5,u=(t.pageY+e.y)*.5;this._updateZoomParameters(l,u)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new Wt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function uD(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function hD(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function fD(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(X_),this.state=Be.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function dD(n){let t;switch(n.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case ks.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=Be.DOLLY;break;case ks.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Be.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Be.ROTATE}break;case ks.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Be.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Be.PAN}break;default:this.state=Be.NONE}this.state!==Be.NONE&&this.dispatchEvent(of)}function pD(n){switch(this.state){case Be.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case Be.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case Be.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function mD(n){this.enabled===!1||this.enableZoom===!1||this.state!==Be.NONE||(n.preventDefault(),this.dispatchEvent(of),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(X_))}function _D(n){this.enabled!==!1&&this._handleKeyDown(n)}function gD(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case Bs.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=Be.TOUCH_ROTATE;break;case Bs.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=Be.TOUCH_PAN;break;default:this.state=Be.NONE}break;case 2:switch(this.touches.TWO){case Bs.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=Be.TOUCH_DOLLY_PAN;break;case Bs.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=Be.TOUCH_DOLLY_ROTATE;break;default:this.state=Be.NONE}break;default:this.state=Be.NONE}this.state!==Be.NONE&&this.dispatchEvent(of)}function vD(n){switch(this._trackPointer(n),this.state){case Be.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case Be.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case Be.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case Be.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=Be.NONE}}function xD(n){this.enabled!==!1&&n.preventDefault()}function yD(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function MD(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function SD(n){const e=new eT(3);n.add(e);function i(f,h){const p=document.createElement("canvas");p.width=256,p.height=128;const m=p.getContext("2d");m.clearRect(0,0,p.width,p.height),m.font="64px sans-serif",m.textAlign="center",m.textBaseline="middle",m.lineWidth=8,m.strokeStyle="black",m.strokeText(f,p.width/2,p.height/2),m.fillStyle=h,m.fillText(f,p.width/2,p.height/2);const g=new Db(p);g.needsUpdate=!0;const v=new kh({map:g,transparent:!0,depthWrite:!1}),M=new Sb(v);return M.scale.set(.5,.25,1),M}const s=.2,o=i("X","#ff5555");o.position.set(3+s,0,0),n.add(o);const l=i("Y","#55ff55");l.position.set(0,3+s,0),n.add(l);const u=i("Z","#5555ff");u.position.set(0,0,3+s),n.add(u)}const ED=2;console.log("Hello!");const $s=new si;$s.position.set(0,1,2);$s.lookAt(new V(0,.2,0));const $i=new Mb;$i.background=new Yt(1118481);$i.fog=new zh(1118481,1,10);const q_=new Qb,lf=new tT(20,20,0,16777215);lf.material.opacity=.2;lf.material.transparent=!0;$i.add(lf);SD($i);const Ah=document.querySelector("#mainCanvas"),Kr=new zR({canvas:Ah,antialias:!0});Kr.setClearColor(1644825);Kr.shadowMap.enabled=!0;const Mr=new Zb(16777215,2);Mr.position.set(3,4,2);Mr.castShadow=!0;const Ol=5;Mr.shadow.camera.left=-Ol;Mr.shadow.camera.right=Ol;Mr.shadow.camera.top=Ol;Mr.shadow.camera.bottom=-Ol;Mr.shadow.mapSize.set(1024,1024);$i.add(Mr);$i.add(new Kb(16777215,.2));const Fl=new oi(new Ha(20,20),new Rl({color:3158064}));Fl.rotation.x=-Math.PI/2;Fl.position.y=-.001;Fl.receiveShadow=!0;$i.add(Fl);const bD=new cD($s,Kr.domElement);window.addEventListener("resize",Y_);Y_();function Y_(){const n=Ah.clientWidth,t=Ah.clientHeight;Kr.setPixelRatio(window.devicePixelRatio),Kr.setSize(n,t,!1),$s.aspect=n/t,$s.updateProjectionMatrix()}let wh=null;const cf=new $P;cf.setMaterials({mesh:new Rl({color:16777215,metalness:0,roughness:1,blending:ED})});cf.setGeometries({cube:new js(.1,.1,.1)});cf.loadAsync("./mesh.json").then(n=>{wh=new oD(n),$i.add(wh)}).catch(console.error);function TD(){const n=q_.getDelta();bD.update(),wh?.update(n),Kr.render($i,$s)}q_.start();Kr.setAnimationLoop(TD);
//# sourceMappingURL=index-CHUvyQhO.js.map
