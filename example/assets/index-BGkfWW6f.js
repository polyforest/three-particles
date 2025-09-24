(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function e(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(a){if(a.ep)return;a.ep=!0;const o=e(a);fetch(a.href,o)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const zu="180",Ms={ROTATE:0,DOLLY:1,PAN:2},vs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},vy=0,gd=1,xy=2,Dp=1,My=2,zi=3,ur=0,Dn=1,Hi=2,lr=0,ys=1,vd=2,xd=3,Md=4,yy=5,Lr=100,Sy=101,Ey=102,Ty=103,by=104,Ay=200,wy=201,Ry=202,Cy=203,qc=204,Yc=205,Py=206,Dy=207,Ly=208,Iy=209,Uy=210,Ny=211,Fy=212,Oy=213,By=214,Zc=0,Kc=1,$c=2,Ts=3,Jc=4,Qc=5,jc=6,tu=7,qo=0,zy=1,Hy=2,cr=0,ky=1,Vy=2,Gy=3,Wy=4,Xy=5,qy=6,Yy=7,Lp=300,bs=301,As=302,eu=303,nu=304,Yo=306,iu=1e3,Ur=1001,ru=1002,fi=1003,Zy=1004,oo=1005,gi=1006,uc=1007,Nr=1008,Gi=1009,Ip=1010,Up=1011,sa=1012,Hu=1013,Fr=1014,vi=1015,ha=1016,ku=1017,Vu=1018,aa=1020,Np=35902,Fp=35899,Op=1021,Bp=1022,hi=1023,oa=1026,la=1027,zp=1028,Gu=1029,Hp=1030,Wu=1031,Xu=1033,Uo=33776,No=33777,Fo=33778,Oo=33779,su=35840,au=35841,ou=35842,lu=35843,cu=36196,uu=37492,hu=37496,fu=37808,du=37809,pu=37810,mu=37811,_u=37812,gu=37813,vu=37814,xu=37815,Mu=37816,yu=37817,Su=37818,Eu=37819,Tu=37820,bu=37821,Au=36492,wu=36494,Ru=36495,Cu=36283,Pu=36284,Du=36285,Lu=36286,Ky=3200,$y=3201,zr=0,Jy=1,or="",Jn="srgb",ws="srgb-linear",zo="linear",Le="srgb",is=7680,yd=519,Qy=512,jy=513,tS=514,kp=515,eS=516,nS=517,iS=518,rS=519,Sd=35044,Ed="300 es",xi=2e3,Ho=2001;class Hr{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[t]===void 0&&(r[t]=[]),r[t].indexOf(e)===-1&&r[t].push(e)}hasEventListener(t,e){const r=this._listeners;return r===void 0?!1:r[t]!==void 0&&r[t].indexOf(e)!==-1}removeEventListener(t,e){const r=this._listeners;if(r===void 0)return;const a=r[t];if(a!==void 0){const o=a.indexOf(e);o!==-1&&a.splice(o,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const r=e[t.type];if(r!==void 0){t.target=this;const a=r.slice(0);for(let o=0,c=a.length;o<c;o++)a[o].call(this,t);t.target=null}}}const _n=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Td=1234567;const ea=Math.PI/180,ca=180/Math.PI;function Ds(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(_n[i&255]+_n[i>>8&255]+_n[i>>16&255]+_n[i>>24&255]+"-"+_n[t&255]+_n[t>>8&255]+"-"+_n[t>>16&15|64]+_n[t>>24&255]+"-"+_n[e&63|128]+_n[e>>8&255]+"-"+_n[e>>16&255]+_n[e>>24&255]+_n[r&255]+_n[r>>8&255]+_n[r>>16&255]+_n[r>>24&255]).toLowerCase()}function de(i,t,e){return Math.max(t,Math.min(e,i))}function qu(i,t){return(i%t+t)%t}function sS(i,t,e,r,a){return r+(i-t)*(a-r)/(e-t)}function aS(i,t,e){return i!==t?(e-i)/(t-i):0}function na(i,t,e){return(1-e)*i+e*t}function oS(i,t,e,r){return na(i,t,1-Math.exp(-e*r))}function lS(i,t=1){return t-Math.abs(qu(i,t*2)-t)}function cS(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function uS(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function hS(i,t){return i+Math.floor(Math.random()*(t-i+1))}function fS(i,t){return i+Math.random()*(t-i)}function dS(i){return i*(.5-Math.random())}function pS(i){i!==void 0&&(Td=i);let t=Td+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function mS(i){return i*ea}function _S(i){return i*ca}function gS(i){return(i&i-1)===0&&i!==0}function vS(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function xS(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function MS(i,t,e,r,a){const o=Math.cos,c=Math.sin,u=o(e/2),d=c(e/2),h=o((t+r)/2),p=c((t+r)/2),_=o((t-r)/2),g=c((t-r)/2),x=o((r-t)/2),E=c((r-t)/2);switch(a){case"XYX":i.set(u*p,d*_,d*g,u*h);break;case"YZY":i.set(d*g,u*p,d*_,u*h);break;case"ZXZ":i.set(d*_,d*g,u*p,u*h);break;case"XZX":i.set(u*p,d*E,d*x,u*h);break;case"YXY":i.set(d*x,u*p,d*E,u*h);break;case"ZYZ":i.set(d*E,d*x,u*p,u*h);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+a)}}function gs(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Sn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Vp={DEG2RAD:ea,RAD2DEG:ca,generateUUID:Ds,clamp:de,euclideanModulo:qu,mapLinear:sS,inverseLerp:aS,lerp:na,damp:oS,pingpong:lS,smoothstep:cS,smootherstep:uS,randInt:hS,randFloat:fS,randFloatSpread:dS,seededRandom:pS,degToRad:mS,radToDeg:_S,isPowerOfTwo:gS,ceilPowerOfTwo:vS,floorPowerOfTwo:xS,setQuaternionFromProperEuler:MS,normalize:Sn,denormalize:gs};class jt{constructor(t=0,e=0){jt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,r=this.y,a=t.elements;return this.x=a[0]*e+a[3]*r+a[6],this.y=a[1]*e+a[4]*r+a[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=de(this.x,t.x,e.x),this.y=de(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=de(this.x,t,e),this.y=de(this.y,t,e),this}clampLength(t,e){const r=this.length();return this.divideScalar(r||1).multiplyScalar(de(r,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const r=this.dot(t)/e;return Math.acos(de(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,r=this.y-t.y;return e*e+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,r){return this.x=t.x+(e.x-t.x)*r,this.y=t.y+(e.y-t.y)*r,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const r=Math.cos(e),a=Math.sin(e),o=this.x-t.x,c=this.y-t.y;return this.x=o*r-c*a+t.x,this.y=o*a+c*r+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Or{constructor(t=0,e=0,r=0,a=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=r,this._w=a}static slerpFlat(t,e,r,a,o,c,u){let d=r[a+0],h=r[a+1],p=r[a+2],_=r[a+3];const g=o[c+0],x=o[c+1],E=o[c+2],A=o[c+3];if(u===0){t[e+0]=d,t[e+1]=h,t[e+2]=p,t[e+3]=_;return}if(u===1){t[e+0]=g,t[e+1]=x,t[e+2]=E,t[e+3]=A;return}if(_!==A||d!==g||h!==x||p!==E){let v=1-u;const m=d*g+h*x+p*E+_*A,N=m>=0?1:-1,L=1-m*m;if(L>Number.EPSILON){const B=Math.sqrt(L),O=Math.atan2(B,m*N);v=Math.sin(v*O)/B,u=Math.sin(u*O)/B}const P=u*N;if(d=d*v+g*P,h=h*v+x*P,p=p*v+E*P,_=_*v+A*P,v===1-u){const B=1/Math.sqrt(d*d+h*h+p*p+_*_);d*=B,h*=B,p*=B,_*=B}}t[e]=d,t[e+1]=h,t[e+2]=p,t[e+3]=_}static multiplyQuaternionsFlat(t,e,r,a,o,c){const u=r[a],d=r[a+1],h=r[a+2],p=r[a+3],_=o[c],g=o[c+1],x=o[c+2],E=o[c+3];return t[e]=u*E+p*_+d*x-h*g,t[e+1]=d*E+p*g+h*_-u*x,t[e+2]=h*E+p*x+u*g-d*_,t[e+3]=p*E-u*_-d*g-h*x,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,r,a){return this._x=t,this._y=e,this._z=r,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const r=t._x,a=t._y,o=t._z,c=t._order,u=Math.cos,d=Math.sin,h=u(r/2),p=u(a/2),_=u(o/2),g=d(r/2),x=d(a/2),E=d(o/2);switch(c){case"XYZ":this._x=g*p*_+h*x*E,this._y=h*x*_-g*p*E,this._z=h*p*E+g*x*_,this._w=h*p*_-g*x*E;break;case"YXZ":this._x=g*p*_+h*x*E,this._y=h*x*_-g*p*E,this._z=h*p*E-g*x*_,this._w=h*p*_+g*x*E;break;case"ZXY":this._x=g*p*_-h*x*E,this._y=h*x*_+g*p*E,this._z=h*p*E+g*x*_,this._w=h*p*_-g*x*E;break;case"ZYX":this._x=g*p*_-h*x*E,this._y=h*x*_+g*p*E,this._z=h*p*E-g*x*_,this._w=h*p*_+g*x*E;break;case"YZX":this._x=g*p*_+h*x*E,this._y=h*x*_+g*p*E,this._z=h*p*E-g*x*_,this._w=h*p*_-g*x*E;break;case"XZY":this._x=g*p*_-h*x*E,this._y=h*x*_-g*p*E,this._z=h*p*E+g*x*_,this._w=h*p*_+g*x*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+c)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const r=e/2,a=Math.sin(r);return this._x=t.x*a,this._y=t.y*a,this._z=t.z*a,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,r=e[0],a=e[4],o=e[8],c=e[1],u=e[5],d=e[9],h=e[2],p=e[6],_=e[10],g=r+u+_;if(g>0){const x=.5/Math.sqrt(g+1);this._w=.25/x,this._x=(p-d)*x,this._y=(o-h)*x,this._z=(c-a)*x}else if(r>u&&r>_){const x=2*Math.sqrt(1+r-u-_);this._w=(p-d)/x,this._x=.25*x,this._y=(a+c)/x,this._z=(o+h)/x}else if(u>_){const x=2*Math.sqrt(1+u-r-_);this._w=(o-h)/x,this._x=(a+c)/x,this._y=.25*x,this._z=(d+p)/x}else{const x=2*Math.sqrt(1+_-r-u);this._w=(c-a)/x,this._x=(o+h)/x,this._y=(d+p)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let r=t.dot(e)+1;return r<1e-8?(r=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=r):(this._x=0,this._y=-t.z,this._z=t.y,this._w=r)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=r),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(de(this.dot(t),-1,1)))}rotateTowards(t,e){const r=this.angleTo(t);if(r===0)return this;const a=Math.min(1,e/r);return this.slerp(t,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const r=t._x,a=t._y,o=t._z,c=t._w,u=e._x,d=e._y,h=e._z,p=e._w;return this._x=r*p+c*u+a*h-o*d,this._y=a*p+c*d+o*u-r*h,this._z=o*p+c*h+r*d-a*u,this._w=c*p-r*u-a*d-o*h,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const r=this._x,a=this._y,o=this._z,c=this._w;let u=c*t._w+r*t._x+a*t._y+o*t._z;if(u<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,u=-u):this.copy(t),u>=1)return this._w=c,this._x=r,this._y=a,this._z=o,this;const d=1-u*u;if(d<=Number.EPSILON){const x=1-e;return this._w=x*c+e*this._w,this._x=x*r+e*this._x,this._y=x*a+e*this._y,this._z=x*o+e*this._z,this.normalize(),this}const h=Math.sqrt(d),p=Math.atan2(h,u),_=Math.sin((1-e)*p)/h,g=Math.sin(e*p)/h;return this._w=c*_+this._w*g,this._x=r*_+this._x*g,this._y=a*_+this._y*g,this._z=o*_+this._z*g,this._onChangeCallback(),this}slerpQuaternions(t,e,r){return this.copy(t).slerp(e,r)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),r=Math.random(),a=Math.sqrt(1-r),o=Math.sqrt(r);return this.set(a*Math.sin(t),a*Math.cos(t),o*Math.sin(e),o*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class X{constructor(t=0,e=0,r=0){X.prototype.isVector3=!0,this.x=t,this.y=e,this.z=r}set(t,e,r){return r===void 0&&(r=this.z),this.x=t,this.y=e,this.z=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(bd.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(bd.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,r=this.y,a=this.z,o=t.elements;return this.x=o[0]*e+o[3]*r+o[6]*a,this.y=o[1]*e+o[4]*r+o[7]*a,this.z=o[2]*e+o[5]*r+o[8]*a,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,r=this.y,a=this.z,o=t.elements,c=1/(o[3]*e+o[7]*r+o[11]*a+o[15]);return this.x=(o[0]*e+o[4]*r+o[8]*a+o[12])*c,this.y=(o[1]*e+o[5]*r+o[9]*a+o[13])*c,this.z=(o[2]*e+o[6]*r+o[10]*a+o[14])*c,this}applyQuaternion(t){const e=this.x,r=this.y,a=this.z,o=t.x,c=t.y,u=t.z,d=t.w,h=2*(c*a-u*r),p=2*(u*e-o*a),_=2*(o*r-c*e);return this.x=e+d*h+c*_-u*p,this.y=r+d*p+u*h-o*_,this.z=a+d*_+o*p-c*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,r=this.y,a=this.z,o=t.elements;return this.x=o[0]*e+o[4]*r+o[8]*a,this.y=o[1]*e+o[5]*r+o[9]*a,this.z=o[2]*e+o[6]*r+o[10]*a,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=de(this.x,t.x,e.x),this.y=de(this.y,t.y,e.y),this.z=de(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=de(this.x,t,e),this.y=de(this.y,t,e),this.z=de(this.z,t,e),this}clampLength(t,e){const r=this.length();return this.divideScalar(r||1).multiplyScalar(de(r,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,r){return this.x=t.x+(e.x-t.x)*r,this.y=t.y+(e.y-t.y)*r,this.z=t.z+(e.z-t.z)*r,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const r=t.x,a=t.y,o=t.z,c=e.x,u=e.y,d=e.z;return this.x=a*d-o*u,this.y=o*c-r*d,this.z=r*u-a*c,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const r=t.dot(this)/e;return this.copy(t).multiplyScalar(r)}projectOnPlane(t){return hc.copy(this).projectOnVector(t),this.sub(hc)}reflect(t){return this.sub(hc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const r=this.dot(t)/e;return Math.acos(de(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,r=this.y-t.y,a=this.z-t.z;return e*e+r*r+a*a}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,r){const a=Math.sin(e)*t;return this.x=a*Math.sin(r),this.y=Math.cos(e)*t,this.z=a*Math.cos(r),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,r){return this.x=t*Math.sin(e),this.y=r,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),r=this.setFromMatrixColumn(t,1).length(),a=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=r,this.z=a,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,r=Math.sqrt(1-e*e);return this.x=r*Math.cos(t),this.y=e,this.z=r*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const hc=new X,bd=new Or;class ae{constructor(t,e,r,a,o,c,u,d,h){ae.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,r,a,o,c,u,d,h)}set(t,e,r,a,o,c,u,d,h){const p=this.elements;return p[0]=t,p[1]=a,p[2]=u,p[3]=e,p[4]=o,p[5]=d,p[6]=r,p[7]=c,p[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,r=t.elements;return e[0]=r[0],e[1]=r[1],e[2]=r[2],e[3]=r[3],e[4]=r[4],e[5]=r[5],e[6]=r[6],e[7]=r[7],e[8]=r[8],this}extractBasis(t,e,r){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const r=t.elements,a=e.elements,o=this.elements,c=r[0],u=r[3],d=r[6],h=r[1],p=r[4],_=r[7],g=r[2],x=r[5],E=r[8],A=a[0],v=a[3],m=a[6],N=a[1],L=a[4],P=a[7],B=a[2],O=a[5],F=a[8];return o[0]=c*A+u*N+d*B,o[3]=c*v+u*L+d*O,o[6]=c*m+u*P+d*F,o[1]=h*A+p*N+_*B,o[4]=h*v+p*L+_*O,o[7]=h*m+p*P+_*F,o[2]=g*A+x*N+E*B,o[5]=g*v+x*L+E*O,o[8]=g*m+x*P+E*F,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],r=t[1],a=t[2],o=t[3],c=t[4],u=t[5],d=t[6],h=t[7],p=t[8];return e*c*p-e*u*h-r*o*p+r*u*d+a*o*h-a*c*d}invert(){const t=this.elements,e=t[0],r=t[1],a=t[2],o=t[3],c=t[4],u=t[5],d=t[6],h=t[7],p=t[8],_=p*c-u*h,g=u*d-p*o,x=h*o-c*d,E=e*_+r*g+a*x;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/E;return t[0]=_*A,t[1]=(a*h-p*r)*A,t[2]=(u*r-a*c)*A,t[3]=g*A,t[4]=(p*e-a*d)*A,t[5]=(a*o-u*e)*A,t[6]=x*A,t[7]=(r*d-h*e)*A,t[8]=(c*e-r*o)*A,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,r,a,o,c,u){const d=Math.cos(o),h=Math.sin(o);return this.set(r*d,r*h,-r*(d*c+h*u)+c+t,-a*h,a*d,-a*(-h*c+d*u)+u+e,0,0,1),this}scale(t,e){return this.premultiply(fc.makeScale(t,e)),this}rotate(t){return this.premultiply(fc.makeRotation(-t)),this}translate(t,e){return this.premultiply(fc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),r=Math.sin(t);return this.set(e,-r,0,r,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,r=t.elements;for(let a=0;a<9;a++)if(e[a]!==r[a])return!1;return!0}fromArray(t,e=0){for(let r=0;r<9;r++)this.elements[r]=t[r+e];return this}toArray(t=[],e=0){const r=this.elements;return t[e]=r[0],t[e+1]=r[1],t[e+2]=r[2],t[e+3]=r[3],t[e+4]=r[4],t[e+5]=r[5],t[e+6]=r[6],t[e+7]=r[7],t[e+8]=r[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const fc=new ae;function Gp(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function ko(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function yS(){const i=ko("canvas");return i.style.display="block",i}const Ad={};function ua(i){i in Ad||(Ad[i]=!0,console.warn(i))}function SS(i,t,e){return new Promise(function(r,a){function o(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:a();break;case i.TIMEOUT_EXPIRED:setTimeout(o,e);break;default:r()}}setTimeout(o,e)})}const wd=new ae().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Rd=new ae().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ES(){const i={enabled:!0,workingColorSpace:ws,spaces:{},convert:function(a,o,c){return this.enabled===!1||o===c||!o||!c||(this.spaces[o].transfer===Le&&(a.r=Vi(a.r),a.g=Vi(a.g),a.b=Vi(a.b)),this.spaces[o].primaries!==this.spaces[c].primaries&&(a.applyMatrix3(this.spaces[o].toXYZ),a.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===Le&&(a.r=Ss(a.r),a.g=Ss(a.g),a.b=Ss(a.b))),a},workingToColorSpace:function(a,o){return this.convert(a,this.workingColorSpace,o)},colorSpaceToWorking:function(a,o){return this.convert(a,o,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===or?zo:this.spaces[a].transfer},getToneMappingMode:function(a){return this.spaces[a].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(a,o=this.workingColorSpace){return a.fromArray(this.spaces[o].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,o,c){return a.copy(this.spaces[o].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(a,o){return ua("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(a,o)},toWorkingColorSpace:function(a,o){return ua("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(a,o)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],r=[.3127,.329];return i.define({[ws]:{primaries:t,whitePoint:r,transfer:zo,toXYZ:wd,fromXYZ:Rd,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Jn},outputColorSpaceConfig:{drawingBufferColorSpace:Jn}},[Jn]:{primaries:t,whitePoint:r,transfer:Le,toXYZ:wd,fromXYZ:Rd,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Jn}}}),i}const Se=ES();function Vi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ss(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let rs;class TS{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let r;if(t instanceof HTMLCanvasElement)r=t;else{rs===void 0&&(rs=ko("canvas")),rs.width=t.width,rs.height=t.height;const a=rs.getContext("2d");t instanceof ImageData?a.putImageData(t,0,0):a.drawImage(t,0,0,t.width,t.height),r=rs}return r.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=ko("canvas");e.width=t.width,e.height=t.height;const r=e.getContext("2d");r.drawImage(t,0,0,t.width,t.height);const a=r.getImageData(0,0,t.width,t.height),o=a.data;for(let c=0;c<o.length;c++)o[c]=Vi(o[c]/255)*255;return r.putImageData(a,0,0),e}else if(t.data){const e=t.data.slice(0);for(let r=0;r<e.length;r++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[r]=Math.floor(Vi(e[r]/255)*255):e[r]=Vi(e[r]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let bS=0;class Yu{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:bS++}),this.uuid=Ds(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const r={uuid:this.uuid,url:""},a=this.data;if(a!==null){let o;if(Array.isArray(a)){o=[];for(let c=0,u=a.length;c<u;c++)a[c].isDataTexture?o.push(dc(a[c].image)):o.push(dc(a[c]))}else o=dc(a);r.url=o}return e||(t.images[this.uuid]=r),r}}function dc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?TS.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let AS=0;const pc=new X;class un extends Hr{constructor(t=un.DEFAULT_IMAGE,e=un.DEFAULT_MAPPING,r=Ur,a=Ur,o=gi,c=Nr,u=hi,d=Gi,h=un.DEFAULT_ANISOTROPY,p=or){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:AS++}),this.uuid=Ds(),this.name="",this.source=new Yu(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=r,this.wrapT=a,this.magFilter=o,this.minFilter=c,this.anisotropy=h,this.format=u,this.internalFormat=null,this.type=d,this.offset=new jt(0,0),this.repeat=new jt(1,1),this.center=new jt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ae,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=p,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(pc).x}get height(){return this.source.getSize(pc).y}get depth(){return this.source.getSize(pc).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const r=t[e];if(r===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const a=this[e];if(a===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}a&&r&&a.isVector2&&r.isVector2||a&&r&&a.isVector3&&r.isVector3||a&&r&&a.isMatrix3&&r.isMatrix3?a.copy(r):this[e]=r}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),e||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Lp)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case iu:t.x=t.x-Math.floor(t.x);break;case Ur:t.x=t.x<0?0:1;break;case ru:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case iu:t.y=t.y-Math.floor(t.y);break;case Ur:t.y=t.y<0?0:1;break;case ru:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}un.DEFAULT_IMAGE=null;un.DEFAULT_MAPPING=Lp;un.DEFAULT_ANISOTROPY=1;class qe{constructor(t=0,e=0,r=0,a=1){qe.prototype.isVector4=!0,this.x=t,this.y=e,this.z=r,this.w=a}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,r,a){return this.x=t,this.y=e,this.z=r,this.w=a,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,r=this.y,a=this.z,o=this.w,c=t.elements;return this.x=c[0]*e+c[4]*r+c[8]*a+c[12]*o,this.y=c[1]*e+c[5]*r+c[9]*a+c[13]*o,this.z=c[2]*e+c[6]*r+c[10]*a+c[14]*o,this.w=c[3]*e+c[7]*r+c[11]*a+c[15]*o,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,r,a,o;const d=t.elements,h=d[0],p=d[4],_=d[8],g=d[1],x=d[5],E=d[9],A=d[2],v=d[6],m=d[10];if(Math.abs(p-g)<.01&&Math.abs(_-A)<.01&&Math.abs(E-v)<.01){if(Math.abs(p+g)<.1&&Math.abs(_+A)<.1&&Math.abs(E+v)<.1&&Math.abs(h+x+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const L=(h+1)/2,P=(x+1)/2,B=(m+1)/2,O=(p+g)/4,F=(_+A)/4,Y=(E+v)/4;return L>P&&L>B?L<.01?(r=0,a=.707106781,o=.707106781):(r=Math.sqrt(L),a=O/r,o=F/r):P>B?P<.01?(r=.707106781,a=0,o=.707106781):(a=Math.sqrt(P),r=O/a,o=Y/a):B<.01?(r=.707106781,a=.707106781,o=0):(o=Math.sqrt(B),r=F/o,a=Y/o),this.set(r,a,o,e),this}let N=Math.sqrt((v-E)*(v-E)+(_-A)*(_-A)+(g-p)*(g-p));return Math.abs(N)<.001&&(N=1),this.x=(v-E)/N,this.y=(_-A)/N,this.z=(g-p)/N,this.w=Math.acos((h+x+m-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=de(this.x,t.x,e.x),this.y=de(this.y,t.y,e.y),this.z=de(this.z,t.z,e.z),this.w=de(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=de(this.x,t,e),this.y=de(this.y,t,e),this.z=de(this.z,t,e),this.w=de(this.w,t,e),this}clampLength(t,e){const r=this.length();return this.divideScalar(r||1).multiplyScalar(de(r,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,r){return this.x=t.x+(e.x-t.x)*r,this.y=t.y+(e.y-t.y)*r,this.z=t.z+(e.z-t.z)*r,this.w=t.w+(e.w-t.w)*r,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class wS extends Hr{constructor(t=1,e=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:gi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=r.depth,this.scissor=new qe(0,0,t,e),this.scissorTest=!1,this.viewport=new qe(0,0,t,e);const a={width:t,height:e,depth:r.depth},o=new un(a);this.textures=[];const c=r.count;for(let u=0;u<c;u++)this.textures[u]=o.clone(),this.textures[u].isRenderTargetTexture=!0,this.textures[u].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(t={}){const e={minFilter:gi,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,r=1){if(this.width!==t||this.height!==e||this.depth!==r){this.width=t,this.height=e,this.depth=r;for(let a=0,o=this.textures.length;a<o;a++)this.textures[a].image.width=t,this.textures[a].image.height=e,this.textures[a].image.depth=r,this.textures[a].isArrayTexture=this.textures[a].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,r=t.textures.length;e<r;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const a=Object.assign({},t.textures[e].image);this.textures[e].source=new Yu(a)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Br extends wS{constructor(t=1,e=1,r={}){super(t,e,r),this.isWebGLRenderTarget=!0}}class Wp extends un{constructor(t=null,e=1,r=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:r,depth:a},this.magFilter=fi,this.minFilter=fi,this.wrapR=Ur,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class RS extends un{constructor(t=null,e=1,r=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:r,depth:a},this.magFilter=fi,this.minFilter=fi,this.wrapR=Ur,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class fa{constructor(t=new X(1/0,1/0,1/0),e=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,r=t.length;e<r;e+=3)this.expandByPoint(oi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,r=t.count;e<r;e++)this.expandByPoint(oi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,r=t.length;e<r;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const r=oi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(r),this.max.copy(t).add(r),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const r=t.geometry;if(r!==void 0){const o=r.getAttribute("position");if(e===!0&&o!==void 0&&t.isInstancedMesh!==!0)for(let c=0,u=o.count;c<u;c++)t.isMesh===!0?t.getVertexPosition(c,oi):oi.fromBufferAttribute(o,c),oi.applyMatrix4(t.matrixWorld),this.expandByPoint(oi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),lo.copy(t.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),lo.copy(r.boundingBox)),lo.applyMatrix4(t.matrixWorld),this.union(lo)}const a=t.children;for(let o=0,c=a.length;o<c;o++)this.expandByObject(a[o],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,oi),oi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,r;return t.normal.x>0?(e=t.normal.x*this.min.x,r=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,r=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,r+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,r+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,r+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,r+=t.normal.z*this.min.z),e<=-t.constant&&r>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Zs),co.subVectors(this.max,Zs),ss.subVectors(t.a,Zs),as.subVectors(t.b,Zs),os.subVectors(t.c,Zs),tr.subVectors(as,ss),er.subVectors(os,as),br.subVectors(ss,os);let e=[0,-tr.z,tr.y,0,-er.z,er.y,0,-br.z,br.y,tr.z,0,-tr.x,er.z,0,-er.x,br.z,0,-br.x,-tr.y,tr.x,0,-er.y,er.x,0,-br.y,br.x,0];return!mc(e,ss,as,os,co)||(e=[1,0,0,0,1,0,0,0,1],!mc(e,ss,as,os,co))?!1:(uo.crossVectors(tr,er),e=[uo.x,uo.y,uo.z],mc(e,ss,as,os,co))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,oi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(oi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ii[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ii[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ii[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ii[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ii[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ii[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ii[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ii[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ii),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Ii=[new X,new X,new X,new X,new X,new X,new X,new X],oi=new X,lo=new fa,ss=new X,as=new X,os=new X,tr=new X,er=new X,br=new X,Zs=new X,co=new X,uo=new X,Ar=new X;function mc(i,t,e,r,a){for(let o=0,c=i.length-3;o<=c;o+=3){Ar.fromArray(i,o);const u=a.x*Math.abs(Ar.x)+a.y*Math.abs(Ar.y)+a.z*Math.abs(Ar.z),d=t.dot(Ar),h=e.dot(Ar),p=r.dot(Ar);if(Math.max(-Math.max(d,h,p),Math.min(d,h,p))>u)return!1}return!0}const CS=new fa,Ks=new X,_c=new X;class da{constructor(t=new X,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const r=this.center;e!==void 0?r.copy(e):CS.setFromPoints(t).getCenter(r);let a=0;for(let o=0,c=t.length;o<c;o++)a=Math.max(a,r.distanceToSquared(t[o]));return this.radius=Math.sqrt(a),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const r=this.center.distanceToSquared(t);return e.copy(t),r>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ks.subVectors(t,this.center);const e=Ks.lengthSq();if(e>this.radius*this.radius){const r=Math.sqrt(e),a=(r-this.radius)*.5;this.center.addScaledVector(Ks,a/r),this.radius+=a}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(_c.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ks.copy(t.center).add(_c)),this.expandByPoint(Ks.copy(t.center).sub(_c))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const Ui=new X,gc=new X,ho=new X,nr=new X,vc=new X,fo=new X,xc=new X;class Zo{constructor(t=new X,e=new X(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ui)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const r=e.dot(this.direction);return r<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Ui.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ui.copy(this.origin).addScaledVector(this.direction,e),Ui.distanceToSquared(t))}distanceSqToSegment(t,e,r,a){gc.copy(t).add(e).multiplyScalar(.5),ho.copy(e).sub(t).normalize(),nr.copy(this.origin).sub(gc);const o=t.distanceTo(e)*.5,c=-this.direction.dot(ho),u=nr.dot(this.direction),d=-nr.dot(ho),h=nr.lengthSq(),p=Math.abs(1-c*c);let _,g,x,E;if(p>0)if(_=c*d-u,g=c*u-d,E=o*p,_>=0)if(g>=-E)if(g<=E){const A=1/p;_*=A,g*=A,x=_*(_+c*g+2*u)+g*(c*_+g+2*d)+h}else g=o,_=Math.max(0,-(c*g+u)),x=-_*_+g*(g+2*d)+h;else g=-o,_=Math.max(0,-(c*g+u)),x=-_*_+g*(g+2*d)+h;else g<=-E?(_=Math.max(0,-(-c*o+u)),g=_>0?-o:Math.min(Math.max(-o,-d),o),x=-_*_+g*(g+2*d)+h):g<=E?(_=0,g=Math.min(Math.max(-o,-d),o),x=g*(g+2*d)+h):(_=Math.max(0,-(c*o+u)),g=_>0?o:Math.min(Math.max(-o,-d),o),x=-_*_+g*(g+2*d)+h);else g=c>0?-o:o,_=Math.max(0,-(c*g+u)),x=-_*_+g*(g+2*d)+h;return r&&r.copy(this.origin).addScaledVector(this.direction,_),a&&a.copy(gc).addScaledVector(ho,g),x}intersectSphere(t,e){Ui.subVectors(t.center,this.origin);const r=Ui.dot(this.direction),a=Ui.dot(Ui)-r*r,o=t.radius*t.radius;if(a>o)return null;const c=Math.sqrt(o-a),u=r-c,d=r+c;return d<0?null:u<0?this.at(d,e):this.at(u,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(t.normal)+t.constant)/e;return r>=0?r:null}intersectPlane(t,e){const r=this.distanceToPlane(t);return r===null?null:this.at(r,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let r,a,o,c,u,d;const h=1/this.direction.x,p=1/this.direction.y,_=1/this.direction.z,g=this.origin;return h>=0?(r=(t.min.x-g.x)*h,a=(t.max.x-g.x)*h):(r=(t.max.x-g.x)*h,a=(t.min.x-g.x)*h),p>=0?(o=(t.min.y-g.y)*p,c=(t.max.y-g.y)*p):(o=(t.max.y-g.y)*p,c=(t.min.y-g.y)*p),r>c||o>a||((o>r||isNaN(r))&&(r=o),(c<a||isNaN(a))&&(a=c),_>=0?(u=(t.min.z-g.z)*_,d=(t.max.z-g.z)*_):(u=(t.max.z-g.z)*_,d=(t.min.z-g.z)*_),r>d||u>a)||((u>r||r!==r)&&(r=u),(d<a||a!==a)&&(a=d),a<0)?null:this.at(r>=0?r:a,e)}intersectsBox(t){return this.intersectBox(t,Ui)!==null}intersectTriangle(t,e,r,a,o){vc.subVectors(e,t),fo.subVectors(r,t),xc.crossVectors(vc,fo);let c=this.direction.dot(xc),u;if(c>0){if(a)return null;u=1}else if(c<0)u=-1,c=-c;else return null;nr.subVectors(this.origin,t);const d=u*this.direction.dot(fo.crossVectors(nr,fo));if(d<0)return null;const h=u*this.direction.dot(vc.cross(nr));if(h<0||d+h>c)return null;const p=-u*nr.dot(xc);return p<0?null:this.at(p/c,o)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ye{constructor(t,e,r,a,o,c,u,d,h,p,_,g,x,E,A,v){Ye.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,r,a,o,c,u,d,h,p,_,g,x,E,A,v)}set(t,e,r,a,o,c,u,d,h,p,_,g,x,E,A,v){const m=this.elements;return m[0]=t,m[4]=e,m[8]=r,m[12]=a,m[1]=o,m[5]=c,m[9]=u,m[13]=d,m[2]=h,m[6]=p,m[10]=_,m[14]=g,m[3]=x,m[7]=E,m[11]=A,m[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ye().fromArray(this.elements)}copy(t){const e=this.elements,r=t.elements;return e[0]=r[0],e[1]=r[1],e[2]=r[2],e[3]=r[3],e[4]=r[4],e[5]=r[5],e[6]=r[6],e[7]=r[7],e[8]=r[8],e[9]=r[9],e[10]=r[10],e[11]=r[11],e[12]=r[12],e[13]=r[13],e[14]=r[14],e[15]=r[15],this}copyPosition(t){const e=this.elements,r=t.elements;return e[12]=r[12],e[13]=r[13],e[14]=r[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,r){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(t,e,r){return this.set(t.x,e.x,r.x,0,t.y,e.y,r.y,0,t.z,e.z,r.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,r=t.elements,a=1/ls.setFromMatrixColumn(t,0).length(),o=1/ls.setFromMatrixColumn(t,1).length(),c=1/ls.setFromMatrixColumn(t,2).length();return e[0]=r[0]*a,e[1]=r[1]*a,e[2]=r[2]*a,e[3]=0,e[4]=r[4]*o,e[5]=r[5]*o,e[6]=r[6]*o,e[7]=0,e[8]=r[8]*c,e[9]=r[9]*c,e[10]=r[10]*c,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,r=t.x,a=t.y,o=t.z,c=Math.cos(r),u=Math.sin(r),d=Math.cos(a),h=Math.sin(a),p=Math.cos(o),_=Math.sin(o);if(t.order==="XYZ"){const g=c*p,x=c*_,E=u*p,A=u*_;e[0]=d*p,e[4]=-d*_,e[8]=h,e[1]=x+E*h,e[5]=g-A*h,e[9]=-u*d,e[2]=A-g*h,e[6]=E+x*h,e[10]=c*d}else if(t.order==="YXZ"){const g=d*p,x=d*_,E=h*p,A=h*_;e[0]=g+A*u,e[4]=E*u-x,e[8]=c*h,e[1]=c*_,e[5]=c*p,e[9]=-u,e[2]=x*u-E,e[6]=A+g*u,e[10]=c*d}else if(t.order==="ZXY"){const g=d*p,x=d*_,E=h*p,A=h*_;e[0]=g-A*u,e[4]=-c*_,e[8]=E+x*u,e[1]=x+E*u,e[5]=c*p,e[9]=A-g*u,e[2]=-c*h,e[6]=u,e[10]=c*d}else if(t.order==="ZYX"){const g=c*p,x=c*_,E=u*p,A=u*_;e[0]=d*p,e[4]=E*h-x,e[8]=g*h+A,e[1]=d*_,e[5]=A*h+g,e[9]=x*h-E,e[2]=-h,e[6]=u*d,e[10]=c*d}else if(t.order==="YZX"){const g=c*d,x=c*h,E=u*d,A=u*h;e[0]=d*p,e[4]=A-g*_,e[8]=E*_+x,e[1]=_,e[5]=c*p,e[9]=-u*p,e[2]=-h*p,e[6]=x*_+E,e[10]=g-A*_}else if(t.order==="XZY"){const g=c*d,x=c*h,E=u*d,A=u*h;e[0]=d*p,e[4]=-_,e[8]=h*p,e[1]=g*_+A,e[5]=c*p,e[9]=x*_-E,e[2]=E*_-x,e[6]=u*p,e[10]=A*_+g}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(PS,t,DS)}lookAt(t,e,r){const a=this.elements;return Bn.subVectors(t,e),Bn.lengthSq()===0&&(Bn.z=1),Bn.normalize(),ir.crossVectors(r,Bn),ir.lengthSq()===0&&(Math.abs(r.z)===1?Bn.x+=1e-4:Bn.z+=1e-4,Bn.normalize(),ir.crossVectors(r,Bn)),ir.normalize(),po.crossVectors(Bn,ir),a[0]=ir.x,a[4]=po.x,a[8]=Bn.x,a[1]=ir.y,a[5]=po.y,a[9]=Bn.y,a[2]=ir.z,a[6]=po.z,a[10]=Bn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const r=t.elements,a=e.elements,o=this.elements,c=r[0],u=r[4],d=r[8],h=r[12],p=r[1],_=r[5],g=r[9],x=r[13],E=r[2],A=r[6],v=r[10],m=r[14],N=r[3],L=r[7],P=r[11],B=r[15],O=a[0],F=a[4],Y=a[8],R=a[12],w=a[1],H=a[5],J=a[9],et=a[13],ut=a[2],at=a[6],ot=a[10],ct=a[14],Q=a[3],yt=a[7],At=a[11],Lt=a[15];return o[0]=c*O+u*w+d*ut+h*Q,o[4]=c*F+u*H+d*at+h*yt,o[8]=c*Y+u*J+d*ot+h*At,o[12]=c*R+u*et+d*ct+h*Lt,o[1]=p*O+_*w+g*ut+x*Q,o[5]=p*F+_*H+g*at+x*yt,o[9]=p*Y+_*J+g*ot+x*At,o[13]=p*R+_*et+g*ct+x*Lt,o[2]=E*O+A*w+v*ut+m*Q,o[6]=E*F+A*H+v*at+m*yt,o[10]=E*Y+A*J+v*ot+m*At,o[14]=E*R+A*et+v*ct+m*Lt,o[3]=N*O+L*w+P*ut+B*Q,o[7]=N*F+L*H+P*at+B*yt,o[11]=N*Y+L*J+P*ot+B*At,o[15]=N*R+L*et+P*ct+B*Lt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],r=t[4],a=t[8],o=t[12],c=t[1],u=t[5],d=t[9],h=t[13],p=t[2],_=t[6],g=t[10],x=t[14],E=t[3],A=t[7],v=t[11],m=t[15];return E*(+o*d*_-a*h*_-o*u*g+r*h*g+a*u*x-r*d*x)+A*(+e*d*x-e*h*g+o*c*g-a*c*x+a*h*p-o*d*p)+v*(+e*h*_-e*u*x-o*c*_+r*c*x+o*u*p-r*h*p)+m*(-a*u*p-e*d*_+e*u*g+a*c*_-r*c*g+r*d*p)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,r){const a=this.elements;return t.isVector3?(a[12]=t.x,a[13]=t.y,a[14]=t.z):(a[12]=t,a[13]=e,a[14]=r),this}invert(){const t=this.elements,e=t[0],r=t[1],a=t[2],o=t[3],c=t[4],u=t[5],d=t[6],h=t[7],p=t[8],_=t[9],g=t[10],x=t[11],E=t[12],A=t[13],v=t[14],m=t[15],N=_*v*h-A*g*h+A*d*x-u*v*x-_*d*m+u*g*m,L=E*g*h-p*v*h-E*d*x+c*v*x+p*d*m-c*g*m,P=p*A*h-E*_*h+E*u*x-c*A*x-p*u*m+c*_*m,B=E*_*d-p*A*d-E*u*g+c*A*g+p*u*v-c*_*v,O=e*N+r*L+a*P+o*B;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/O;return t[0]=N*F,t[1]=(A*g*o-_*v*o-A*a*x+r*v*x+_*a*m-r*g*m)*F,t[2]=(u*v*o-A*d*o+A*a*h-r*v*h-u*a*m+r*d*m)*F,t[3]=(_*d*o-u*g*o-_*a*h+r*g*h+u*a*x-r*d*x)*F,t[4]=L*F,t[5]=(p*v*o-E*g*o+E*a*x-e*v*x-p*a*m+e*g*m)*F,t[6]=(E*d*o-c*v*o-E*a*h+e*v*h+c*a*m-e*d*m)*F,t[7]=(c*g*o-p*d*o+p*a*h-e*g*h-c*a*x+e*d*x)*F,t[8]=P*F,t[9]=(E*_*o-p*A*o-E*r*x+e*A*x+p*r*m-e*_*m)*F,t[10]=(c*A*o-E*u*o+E*r*h-e*A*h-c*r*m+e*u*m)*F,t[11]=(p*u*o-c*_*o-p*r*h+e*_*h+c*r*x-e*u*x)*F,t[12]=B*F,t[13]=(p*A*a-E*_*a+E*r*g-e*A*g-p*r*v+e*_*v)*F,t[14]=(E*u*a-c*A*a-E*r*d+e*A*d+c*r*v-e*u*v)*F,t[15]=(c*_*a-p*u*a+p*r*d-e*_*d-c*r*g+e*u*g)*F,this}scale(t){const e=this.elements,r=t.x,a=t.y,o=t.z;return e[0]*=r,e[4]*=a,e[8]*=o,e[1]*=r,e[5]*=a,e[9]*=o,e[2]*=r,e[6]*=a,e[10]*=o,e[3]*=r,e[7]*=a,e[11]*=o,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],r=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],a=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,r,a))}makeTranslation(t,e,r){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,r,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),r=Math.sin(t);return this.set(1,0,0,0,0,e,-r,0,0,r,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),r=Math.sin(t);return this.set(e,0,r,0,0,1,0,0,-r,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),r=Math.sin(t);return this.set(e,-r,0,0,r,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const r=Math.cos(e),a=Math.sin(e),o=1-r,c=t.x,u=t.y,d=t.z,h=o*c,p=o*u;return this.set(h*c+r,h*u-a*d,h*d+a*u,0,h*u+a*d,p*u+r,p*d-a*c,0,h*d-a*u,p*d+a*c,o*d*d+r,0,0,0,0,1),this}makeScale(t,e,r){return this.set(t,0,0,0,0,e,0,0,0,0,r,0,0,0,0,1),this}makeShear(t,e,r,a,o,c){return this.set(1,r,o,0,t,1,c,0,e,a,1,0,0,0,0,1),this}compose(t,e,r){const a=this.elements,o=e._x,c=e._y,u=e._z,d=e._w,h=o+o,p=c+c,_=u+u,g=o*h,x=o*p,E=o*_,A=c*p,v=c*_,m=u*_,N=d*h,L=d*p,P=d*_,B=r.x,O=r.y,F=r.z;return a[0]=(1-(A+m))*B,a[1]=(x+P)*B,a[2]=(E-L)*B,a[3]=0,a[4]=(x-P)*O,a[5]=(1-(g+m))*O,a[6]=(v+N)*O,a[7]=0,a[8]=(E+L)*F,a[9]=(v-N)*F,a[10]=(1-(g+A))*F,a[11]=0,a[12]=t.x,a[13]=t.y,a[14]=t.z,a[15]=1,this}decompose(t,e,r){const a=this.elements;let o=ls.set(a[0],a[1],a[2]).length();const c=ls.set(a[4],a[5],a[6]).length(),u=ls.set(a[8],a[9],a[10]).length();this.determinant()<0&&(o=-o),t.x=a[12],t.y=a[13],t.z=a[14],li.copy(this);const h=1/o,p=1/c,_=1/u;return li.elements[0]*=h,li.elements[1]*=h,li.elements[2]*=h,li.elements[4]*=p,li.elements[5]*=p,li.elements[6]*=p,li.elements[8]*=_,li.elements[9]*=_,li.elements[10]*=_,e.setFromRotationMatrix(li),r.x=o,r.y=c,r.z=u,this}makePerspective(t,e,r,a,o,c,u=xi,d=!1){const h=this.elements,p=2*o/(e-t),_=2*o/(r-a),g=(e+t)/(e-t),x=(r+a)/(r-a);let E,A;if(d)E=o/(c-o),A=c*o/(c-o);else if(u===xi)E=-(c+o)/(c-o),A=-2*c*o/(c-o);else if(u===Ho)E=-c/(c-o),A=-c*o/(c-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+u);return h[0]=p,h[4]=0,h[8]=g,h[12]=0,h[1]=0,h[5]=_,h[9]=x,h[13]=0,h[2]=0,h[6]=0,h[10]=E,h[14]=A,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(t,e,r,a,o,c,u=xi,d=!1){const h=this.elements,p=2/(e-t),_=2/(r-a),g=-(e+t)/(e-t),x=-(r+a)/(r-a);let E,A;if(d)E=1/(c-o),A=c/(c-o);else if(u===xi)E=-2/(c-o),A=-(c+o)/(c-o);else if(u===Ho)E=-1/(c-o),A=-o/(c-o);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+u);return h[0]=p,h[4]=0,h[8]=0,h[12]=g,h[1]=0,h[5]=_,h[9]=0,h[13]=x,h[2]=0,h[6]=0,h[10]=E,h[14]=A,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(t){const e=this.elements,r=t.elements;for(let a=0;a<16;a++)if(e[a]!==r[a])return!1;return!0}fromArray(t,e=0){for(let r=0;r<16;r++)this.elements[r]=t[r+e];return this}toArray(t=[],e=0){const r=this.elements;return t[e]=r[0],t[e+1]=r[1],t[e+2]=r[2],t[e+3]=r[3],t[e+4]=r[4],t[e+5]=r[5],t[e+6]=r[6],t[e+7]=r[7],t[e+8]=r[8],t[e+9]=r[9],t[e+10]=r[10],t[e+11]=r[11],t[e+12]=r[12],t[e+13]=r[13],t[e+14]=r[14],t[e+15]=r[15],t}}const ls=new X,li=new Ye,PS=new X(0,0,0),DS=new X(1,1,1),ir=new X,po=new X,Bn=new X,Cd=new Ye,Pd=new Or;class jn{constructor(t=0,e=0,r=0,a=jn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=r,this._order=a}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,r,a=this._order){return this._x=t,this._y=e,this._z=r,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,r=!0){const a=t.elements,o=a[0],c=a[4],u=a[8],d=a[1],h=a[5],p=a[9],_=a[2],g=a[6],x=a[10];switch(e){case"XYZ":this._y=Math.asin(de(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-p,x),this._z=Math.atan2(-c,o)):(this._x=Math.atan2(g,h),this._z=0);break;case"YXZ":this._x=Math.asin(-de(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(u,x),this._z=Math.atan2(d,h)):(this._y=Math.atan2(-_,o),this._z=0);break;case"ZXY":this._x=Math.asin(de(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-_,x),this._z=Math.atan2(-c,h)):(this._y=0,this._z=Math.atan2(d,o));break;case"ZYX":this._y=Math.asin(-de(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(g,x),this._z=Math.atan2(d,o)):(this._x=0,this._z=Math.atan2(-c,h));break;case"YZX":this._z=Math.asin(de(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-p,h),this._y=Math.atan2(-_,o)):(this._x=0,this._y=Math.atan2(u,x));break;case"XZY":this._z=Math.asin(-de(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(g,h),this._y=Math.atan2(u,o)):(this._x=Math.atan2(-p,x),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,r){return Cd.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Cd,e,r)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Pd.setFromEuler(this),this.setFromQuaternion(Pd,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}jn.DEFAULT_ORDER="XYZ";class Xp{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let LS=0;const Dd=new X,cs=new Or,Ni=new Ye,mo=new X,$s=new X,IS=new X,US=new Or,Ld=new X(1,0,0),Id=new X(0,1,0),Ud=new X(0,0,1),Nd={type:"added"},NS={type:"removed"},us={type:"childadded",child:null},Mc={type:"childremoved",child:null};class Tn extends Hr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:LS++}),this.uuid=Ds(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Tn.DEFAULT_UP.clone();const t=new X,e=new jn,r=new Or,a=new X(1,1,1);function o(){r.setFromEuler(e,!1)}function c(){e.setFromQuaternion(r,void 0,!1)}e._onChange(o),r._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Ye},normalMatrix:{value:new ae}}),this.matrix=new Ye,this.matrixWorld=new Ye,this.matrixAutoUpdate=Tn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Xp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return cs.setFromAxisAngle(t,e),this.quaternion.multiply(cs),this}rotateOnWorldAxis(t,e){return cs.setFromAxisAngle(t,e),this.quaternion.premultiply(cs),this}rotateX(t){return this.rotateOnAxis(Ld,t)}rotateY(t){return this.rotateOnAxis(Id,t)}rotateZ(t){return this.rotateOnAxis(Ud,t)}translateOnAxis(t,e){return Dd.copy(t).applyQuaternion(this.quaternion),this.position.add(Dd.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ld,t)}translateY(t){return this.translateOnAxis(Id,t)}translateZ(t){return this.translateOnAxis(Ud,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ni.copy(this.matrixWorld).invert())}lookAt(t,e,r){t.isVector3?mo.copy(t):mo.set(t,e,r);const a=this.parent;this.updateWorldMatrix(!0,!1),$s.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ni.lookAt($s,mo,this.up):Ni.lookAt(mo,$s,this.up),this.quaternion.setFromRotationMatrix(Ni),a&&(Ni.extractRotation(a.matrixWorld),cs.setFromRotationMatrix(Ni),this.quaternion.premultiply(cs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Nd),us.child=t,this.dispatchEvent(us),us.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(NS),Mc.child=t,this.dispatchEvent(Mc),Mc.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ni.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ni.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ni),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Nd),us.child=t,this.dispatchEvent(us),us.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let r=0,a=this.children.length;r<a;r++){const c=this.children[r].getObjectByProperty(t,e);if(c!==void 0)return c}}getObjectsByProperty(t,e,r=[]){this[t]===e&&r.push(this);const a=this.children;for(let o=0,c=a.length;o<c;o++)a[o].getObjectsByProperty(t,e,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($s,t,IS),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($s,US,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let r=0,a=e.length;r<a;r++)e[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let r=0,a=e.length;r<a;r++)e[r].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let r=0,a=e.length;r<a;r++)e[r].updateMatrixWorld(t)}updateWorldMatrix(t,e){const r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const a=this.children;for(let o=0,c=a.length;o<c;o++)a[o].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",r={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(u=>({...u,boundingBox:u.boundingBox?u.boundingBox.toJSON():void 0,boundingSphere:u.boundingSphere?u.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(u=>({...u})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(t),a.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON()));function o(u,d){return u[d.uuid]===void 0&&(u[d.uuid]=d.toJSON(t)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=o(t.geometries,this.geometry);const u=this.geometry.parameters;if(u!==void 0&&u.shapes!==void 0){const d=u.shapes;if(Array.isArray(d))for(let h=0,p=d.length;h<p;h++){const _=d[h];o(t.shapes,_)}else o(t.shapes,d)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const u=[];for(let d=0,h=this.material.length;d<h;d++)u.push(o(t.materials,this.material[d]));a.material=u}else a.material=o(t.materials,this.material);if(this.children.length>0){a.children=[];for(let u=0;u<this.children.length;u++)a.children.push(this.children[u].toJSON(t).object)}if(this.animations.length>0){a.animations=[];for(let u=0;u<this.animations.length;u++){const d=this.animations[u];a.animations.push(o(t.animations,d))}}if(e){const u=c(t.geometries),d=c(t.materials),h=c(t.textures),p=c(t.images),_=c(t.shapes),g=c(t.skeletons),x=c(t.animations),E=c(t.nodes);u.length>0&&(r.geometries=u),d.length>0&&(r.materials=d),h.length>0&&(r.textures=h),p.length>0&&(r.images=p),_.length>0&&(r.shapes=_),g.length>0&&(r.skeletons=g),x.length>0&&(r.animations=x),E.length>0&&(r.nodes=E)}return r.object=a,r;function c(u){const d=[];for(const h in u){const p=u[h];delete p.metadata,d.push(p)}return d}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let r=0;r<t.children.length;r++){const a=t.children[r];this.add(a.clone())}return this}}Tn.DEFAULT_UP=new X(0,1,0);Tn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ci=new X,Fi=new X,yc=new X,Oi=new X,hs=new X,fs=new X,Fd=new X,Sc=new X,Ec=new X,Tc=new X,bc=new qe,Ac=new qe,wc=new qe;class ui{constructor(t=new X,e=new X,r=new X){this.a=t,this.b=e,this.c=r}static getNormal(t,e,r,a){a.subVectors(r,e),ci.subVectors(t,e),a.cross(ci);const o=a.lengthSq();return o>0?a.multiplyScalar(1/Math.sqrt(o)):a.set(0,0,0)}static getBarycoord(t,e,r,a,o){ci.subVectors(a,e),Fi.subVectors(r,e),yc.subVectors(t,e);const c=ci.dot(ci),u=ci.dot(Fi),d=ci.dot(yc),h=Fi.dot(Fi),p=Fi.dot(yc),_=c*h-u*u;if(_===0)return o.set(0,0,0),null;const g=1/_,x=(h*d-u*p)*g,E=(c*p-u*d)*g;return o.set(1-x-E,E,x)}static containsPoint(t,e,r,a){return this.getBarycoord(t,e,r,a,Oi)===null?!1:Oi.x>=0&&Oi.y>=0&&Oi.x+Oi.y<=1}static getInterpolation(t,e,r,a,o,c,u,d){return this.getBarycoord(t,e,r,a,Oi)===null?(d.x=0,d.y=0,"z"in d&&(d.z=0),"w"in d&&(d.w=0),null):(d.setScalar(0),d.addScaledVector(o,Oi.x),d.addScaledVector(c,Oi.y),d.addScaledVector(u,Oi.z),d)}static getInterpolatedAttribute(t,e,r,a,o,c){return bc.setScalar(0),Ac.setScalar(0),wc.setScalar(0),bc.fromBufferAttribute(t,e),Ac.fromBufferAttribute(t,r),wc.fromBufferAttribute(t,a),c.setScalar(0),c.addScaledVector(bc,o.x),c.addScaledVector(Ac,o.y),c.addScaledVector(wc,o.z),c}static isFrontFacing(t,e,r,a){return ci.subVectors(r,e),Fi.subVectors(t,e),ci.cross(Fi).dot(a)<0}set(t,e,r){return this.a.copy(t),this.b.copy(e),this.c.copy(r),this}setFromPointsAndIndices(t,e,r,a){return this.a.copy(t[e]),this.b.copy(t[r]),this.c.copy(t[a]),this}setFromAttributeAndIndices(t,e,r,a){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,r),this.c.fromBufferAttribute(t,a),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ci.subVectors(this.c,this.b),Fi.subVectors(this.a,this.b),ci.cross(Fi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return ui.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return ui.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,r,a,o){return ui.getInterpolation(t,this.a,this.b,this.c,e,r,a,o)}containsPoint(t){return ui.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return ui.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const r=this.a,a=this.b,o=this.c;let c,u;hs.subVectors(a,r),fs.subVectors(o,r),Sc.subVectors(t,r);const d=hs.dot(Sc),h=fs.dot(Sc);if(d<=0&&h<=0)return e.copy(r);Ec.subVectors(t,a);const p=hs.dot(Ec),_=fs.dot(Ec);if(p>=0&&_<=p)return e.copy(a);const g=d*_-p*h;if(g<=0&&d>=0&&p<=0)return c=d/(d-p),e.copy(r).addScaledVector(hs,c);Tc.subVectors(t,o);const x=hs.dot(Tc),E=fs.dot(Tc);if(E>=0&&x<=E)return e.copy(o);const A=x*h-d*E;if(A<=0&&h>=0&&E<=0)return u=h/(h-E),e.copy(r).addScaledVector(fs,u);const v=p*E-x*_;if(v<=0&&_-p>=0&&x-E>=0)return Fd.subVectors(o,a),u=(_-p)/(_-p+(x-E)),e.copy(a).addScaledVector(Fd,u);const m=1/(v+A+g);return c=A*m,u=g*m,e.copy(r).addScaledVector(hs,c).addScaledVector(fs,u)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const qp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},rr={h:0,s:0,l:0},_o={h:0,s:0,l:0};function Rc(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Zt{constructor(t,e,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,r)}set(t,e,r){if(e===void 0&&r===void 0){const a=t;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(t,e,r);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Jn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Se.colorSpaceToWorking(this,e),this}setRGB(t,e,r,a=Se.workingColorSpace){return this.r=t,this.g=e,this.b=r,Se.colorSpaceToWorking(this,a),this}setHSL(t,e,r,a=Se.workingColorSpace){if(t=qu(t,1),e=de(e,0,1),r=de(r,0,1),e===0)this.r=this.g=this.b=r;else{const o=r<=.5?r*(1+e):r+e-r*e,c=2*r-o;this.r=Rc(c,o,t+1/3),this.g=Rc(c,o,t),this.b=Rc(c,o,t-1/3)}return Se.colorSpaceToWorking(this,a),this}setStyle(t,e=Jn){function r(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(t)){let o;const c=a[1],u=a[2];switch(c){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return r(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,e);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return r(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,e);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return r(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(t)){const o=a[1],c=o.length;if(c===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,e);if(c===6)return this.setHex(parseInt(o,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Jn){const r=qp[t.toLowerCase()];return r!==void 0?this.setHex(r,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Vi(t.r),this.g=Vi(t.g),this.b=Vi(t.b),this}copyLinearToSRGB(t){return this.r=Ss(t.r),this.g=Ss(t.g),this.b=Ss(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Jn){return Se.workingToColorSpace(gn.copy(this),t),Math.round(de(gn.r*255,0,255))*65536+Math.round(de(gn.g*255,0,255))*256+Math.round(de(gn.b*255,0,255))}getHexString(t=Jn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Se.workingColorSpace){Se.workingToColorSpace(gn.copy(this),e);const r=gn.r,a=gn.g,o=gn.b,c=Math.max(r,a,o),u=Math.min(r,a,o);let d,h;const p=(u+c)/2;if(u===c)d=0,h=0;else{const _=c-u;switch(h=p<=.5?_/(c+u):_/(2-c-u),c){case r:d=(a-o)/_+(a<o?6:0);break;case a:d=(o-r)/_+2;break;case o:d=(r-a)/_+4;break}d/=6}return t.h=d,t.s=h,t.l=p,t}getRGB(t,e=Se.workingColorSpace){return Se.workingToColorSpace(gn.copy(this),e),t.r=gn.r,t.g=gn.g,t.b=gn.b,t}getStyle(t=Jn){Se.workingToColorSpace(gn.copy(this),t);const e=gn.r,r=gn.g,a=gn.b;return t!==Jn?`color(${t} ${e.toFixed(3)} ${r.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(r*255)},${Math.round(a*255)})`}offsetHSL(t,e,r){return this.getHSL(rr),this.setHSL(rr.h+t,rr.s+e,rr.l+r)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,r){return this.r=t.r+(e.r-t.r)*r,this.g=t.g+(e.g-t.g)*r,this.b=t.b+(e.b-t.b)*r,this}lerpHSL(t,e){this.getHSL(rr),t.getHSL(_o);const r=na(rr.h,_o.h,e),a=na(rr.s,_o.s,e),o=na(rr.l,_o.l,e);return this.setHSL(r,a,o),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,r=this.g,a=this.b,o=t.elements;return this.r=o[0]*e+o[3]*r+o[6]*a,this.g=o[1]*e+o[4]*r+o[7]*a,this.b=o[2]*e+o[5]*r+o[8]*a,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const gn=new Zt;Zt.NAMES=qp;let FS=0;class bn extends Hr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:FS++}),this.uuid=Ds(),this.name="",this.type="Material",this.blending=ys,this.side=ur,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=qc,this.blendDst=Yc,this.blendEquation=Lr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Zt(0,0,0),this.blendAlpha=0,this.depthFunc=Ts,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=yd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=is,this.stencilZFail=is,this.stencilZPass=is,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const r=t[e];if(r===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const a=this[e];if(a===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(r):a&&a.isVector3&&r&&r.isVector3?a.copy(r):this[e]=r}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(t).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(t).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(t).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(t).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(t).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==ys&&(r.blending=this.blending),this.side!==ur&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==qc&&(r.blendSrc=this.blendSrc),this.blendDst!==Yc&&(r.blendDst=this.blendDst),this.blendEquation!==Lr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Ts&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==yd&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==is&&(r.stencilFail=this.stencilFail),this.stencilZFail!==is&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==is&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function a(o){const c=[];for(const u in o){const d=o[u];delete d.metadata,c.push(d)}return c}if(e){const o=a(t.textures),c=a(t.images);o.length>0&&(r.textures=o),c.length>0&&(r.images=c)}return r}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let r=null;if(e!==null){const a=e.length;r=new Array(a);for(let o=0;o!==a;++o)r[o]=e[o].clone()}return this.clippingPlanes=r,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Zu extends bn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new jn,this.combine=qo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Je=new X,go=new jt;let OS=0;class Mi{constructor(t,e,r=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:OS++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=r,this.usage=Sd,this.updateRanges=[],this.gpuType=vi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,r){t*=this.itemSize,r*=e.itemSize;for(let a=0,o=this.itemSize;a<o;a++)this.array[t+a]=e.array[r+a];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,r=this.count;e<r;e++)go.fromBufferAttribute(this,e),go.applyMatrix3(t),this.setXY(e,go.x,go.y);else if(this.itemSize===3)for(let e=0,r=this.count;e<r;e++)Je.fromBufferAttribute(this,e),Je.applyMatrix3(t),this.setXYZ(e,Je.x,Je.y,Je.z);return this}applyMatrix4(t){for(let e=0,r=this.count;e<r;e++)Je.fromBufferAttribute(this,e),Je.applyMatrix4(t),this.setXYZ(e,Je.x,Je.y,Je.z);return this}applyNormalMatrix(t){for(let e=0,r=this.count;e<r;e++)Je.fromBufferAttribute(this,e),Je.applyNormalMatrix(t),this.setXYZ(e,Je.x,Je.y,Je.z);return this}transformDirection(t){for(let e=0,r=this.count;e<r;e++)Je.fromBufferAttribute(this,e),Je.transformDirection(t),this.setXYZ(e,Je.x,Je.y,Je.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let r=this.array[t*this.itemSize+e];return this.normalized&&(r=gs(r,this.array)),r}setComponent(t,e,r){return this.normalized&&(r=Sn(r,this.array)),this.array[t*this.itemSize+e]=r,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=gs(e,this.array)),e}setX(t,e){return this.normalized&&(e=Sn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=gs(e,this.array)),e}setY(t,e){return this.normalized&&(e=Sn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=gs(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Sn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=gs(e,this.array)),e}setW(t,e){return this.normalized&&(e=Sn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,r){return t*=this.itemSize,this.normalized&&(e=Sn(e,this.array),r=Sn(r,this.array)),this.array[t+0]=e,this.array[t+1]=r,this}setXYZ(t,e,r,a){return t*=this.itemSize,this.normalized&&(e=Sn(e,this.array),r=Sn(r,this.array),a=Sn(a,this.array)),this.array[t+0]=e,this.array[t+1]=r,this.array[t+2]=a,this}setXYZW(t,e,r,a,o){return t*=this.itemSize,this.normalized&&(e=Sn(e,this.array),r=Sn(r,this.array),a=Sn(a,this.array),o=Sn(o,this.array)),this.array[t+0]=e,this.array[t+1]=r,this.array[t+2]=a,this.array[t+3]=o,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Sd&&(t.usage=this.usage),t}}class Yp extends Mi{constructor(t,e,r){super(new Uint16Array(t),e,r)}}class Zp extends Mi{constructor(t,e,r){super(new Uint32Array(t),e,r)}}class Hn extends Mi{constructor(t,e,r){super(new Float32Array(t),e,r)}}let BS=0;const $n=new Ye,Cc=new Tn,ds=new X,zn=new fa,Js=new fa,an=new X;class Si extends Hr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:BS++}),this.uuid=Ds(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Gp(t)?Zp:Yp)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,r=0){this.groups.push({start:t,count:e,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const o=new ae().getNormalMatrix(t);r.applyNormalMatrix(o),r.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(t),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return $n.makeRotationFromQuaternion(t),this.applyMatrix4($n),this}rotateX(t){return $n.makeRotationX(t),this.applyMatrix4($n),this}rotateY(t){return $n.makeRotationY(t),this.applyMatrix4($n),this}rotateZ(t){return $n.makeRotationZ(t),this.applyMatrix4($n),this}translate(t,e,r){return $n.makeTranslation(t,e,r),this.applyMatrix4($n),this}scale(t,e,r){return $n.makeScale(t,e,r),this.applyMatrix4($n),this}lookAt(t){return Cc.lookAt(t),Cc.updateMatrix(),this.applyMatrix4(Cc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ds).negate(),this.translate(ds.x,ds.y,ds.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const r=[];for(let a=0,o=t.length;a<o;a++){const c=t[a];r.push(c.x,c.y,c.z||0)}this.setAttribute("position",new Hn(r,3))}else{const r=Math.min(t.length,e.count);for(let a=0;a<r;a++){const o=t[a];e.setXYZ(a,o.x,o.y,o.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new fa);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];zn.setFromBufferAttribute(o),this.morphTargetsRelative?(an.addVectors(this.boundingBox.min,zn.min),this.boundingBox.expandByPoint(an),an.addVectors(this.boundingBox.max,zn.max),this.boundingBox.expandByPoint(an)):(this.boundingBox.expandByPoint(zn.min),this.boundingBox.expandByPoint(zn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new da);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new X,1/0);return}if(t){const r=this.boundingSphere.center;if(zn.setFromBufferAttribute(t),e)for(let o=0,c=e.length;o<c;o++){const u=e[o];Js.setFromBufferAttribute(u),this.morphTargetsRelative?(an.addVectors(zn.min,Js.min),zn.expandByPoint(an),an.addVectors(zn.max,Js.max),zn.expandByPoint(an)):(zn.expandByPoint(Js.min),zn.expandByPoint(Js.max))}zn.getCenter(r);let a=0;for(let o=0,c=t.count;o<c;o++)an.fromBufferAttribute(t,o),a=Math.max(a,r.distanceToSquared(an));if(e)for(let o=0,c=e.length;o<c;o++){const u=e[o],d=this.morphTargetsRelative;for(let h=0,p=u.count;h<p;h++)an.fromBufferAttribute(u,h),d&&(ds.fromBufferAttribute(t,h),an.add(ds)),a=Math.max(a,r.distanceToSquared(an))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=e.position,a=e.normal,o=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Mi(new Float32Array(4*r.count),4));const c=this.getAttribute("tangent"),u=[],d=[];for(let Y=0;Y<r.count;Y++)u[Y]=new X,d[Y]=new X;const h=new X,p=new X,_=new X,g=new jt,x=new jt,E=new jt,A=new X,v=new X;function m(Y,R,w){h.fromBufferAttribute(r,Y),p.fromBufferAttribute(r,R),_.fromBufferAttribute(r,w),g.fromBufferAttribute(o,Y),x.fromBufferAttribute(o,R),E.fromBufferAttribute(o,w),p.sub(h),_.sub(h),x.sub(g),E.sub(g);const H=1/(x.x*E.y-E.x*x.y);isFinite(H)&&(A.copy(p).multiplyScalar(E.y).addScaledVector(_,-x.y).multiplyScalar(H),v.copy(_).multiplyScalar(x.x).addScaledVector(p,-E.x).multiplyScalar(H),u[Y].add(A),u[R].add(A),u[w].add(A),d[Y].add(v),d[R].add(v),d[w].add(v))}let N=this.groups;N.length===0&&(N=[{start:0,count:t.count}]);for(let Y=0,R=N.length;Y<R;++Y){const w=N[Y],H=w.start,J=w.count;for(let et=H,ut=H+J;et<ut;et+=3)m(t.getX(et+0),t.getX(et+1),t.getX(et+2))}const L=new X,P=new X,B=new X,O=new X;function F(Y){B.fromBufferAttribute(a,Y),O.copy(B);const R=u[Y];L.copy(R),L.sub(B.multiplyScalar(B.dot(R))).normalize(),P.crossVectors(O,R);const H=P.dot(d[Y])<0?-1:1;c.setXYZW(Y,L.x,L.y,L.z,H)}for(let Y=0,R=N.length;Y<R;++Y){const w=N[Y],H=w.start,J=w.count;for(let et=H,ut=H+J;et<ut;et+=3)F(t.getX(et+0)),F(t.getX(et+1)),F(t.getX(et+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Mi(new Float32Array(e.count*3),3),this.setAttribute("normal",r);else for(let g=0,x=r.count;g<x;g++)r.setXYZ(g,0,0,0);const a=new X,o=new X,c=new X,u=new X,d=new X,h=new X,p=new X,_=new X;if(t)for(let g=0,x=t.count;g<x;g+=3){const E=t.getX(g+0),A=t.getX(g+1),v=t.getX(g+2);a.fromBufferAttribute(e,E),o.fromBufferAttribute(e,A),c.fromBufferAttribute(e,v),p.subVectors(c,o),_.subVectors(a,o),p.cross(_),u.fromBufferAttribute(r,E),d.fromBufferAttribute(r,A),h.fromBufferAttribute(r,v),u.add(p),d.add(p),h.add(p),r.setXYZ(E,u.x,u.y,u.z),r.setXYZ(A,d.x,d.y,d.z),r.setXYZ(v,h.x,h.y,h.z)}else for(let g=0,x=e.count;g<x;g+=3)a.fromBufferAttribute(e,g+0),o.fromBufferAttribute(e,g+1),c.fromBufferAttribute(e,g+2),p.subVectors(c,o),_.subVectors(a,o),p.cross(_),r.setXYZ(g+0,p.x,p.y,p.z),r.setXYZ(g+1,p.x,p.y,p.z),r.setXYZ(g+2,p.x,p.y,p.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,r=t.count;e<r;e++)an.fromBufferAttribute(t,e),an.normalize(),t.setXYZ(e,an.x,an.y,an.z)}toNonIndexed(){function t(u,d){const h=u.array,p=u.itemSize,_=u.normalized,g=new h.constructor(d.length*p);let x=0,E=0;for(let A=0,v=d.length;A<v;A++){u.isInterleavedBufferAttribute?x=d[A]*u.data.stride+u.offset:x=d[A]*p;for(let m=0;m<p;m++)g[E++]=h[x++]}return new Mi(g,p,_)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Si,r=this.index.array,a=this.attributes;for(const u in a){const d=a[u],h=t(d,r);e.setAttribute(u,h)}const o=this.morphAttributes;for(const u in o){const d=[],h=o[u];for(let p=0,_=h.length;p<_;p++){const g=h[p],x=t(g,r);d.push(x)}e.morphAttributes[u]=d}e.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let u=0,d=c.length;u<d;u++){const h=c[u];e.addGroup(h.start,h.count,h.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const d=this.parameters;for(const h in d)d[h]!==void 0&&(t[h]=d[h]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const r=this.attributes;for(const d in r){const h=r[d];t.data.attributes[d]=h.toJSON(t.data)}const a={};let o=!1;for(const d in this.morphAttributes){const h=this.morphAttributes[d],p=[];for(let _=0,g=h.length;_<g;_++){const x=h[_];p.push(x.toJSON(t.data))}p.length>0&&(a[d]=p,o=!0)}o&&(t.data.morphAttributes=a,t.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(t.data.groups=JSON.parse(JSON.stringify(c)));const u=this.boundingSphere;return u!==null&&(t.data.boundingSphere=u.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const r=t.index;r!==null&&this.setIndex(r.clone());const a=t.attributes;for(const h in a){const p=a[h];this.setAttribute(h,p.clone(e))}const o=t.morphAttributes;for(const h in o){const p=[],_=o[h];for(let g=0,x=_.length;g<x;g++)p.push(_[g].clone(e));this.morphAttributes[h]=p}this.morphTargetsRelative=t.morphTargetsRelative;const c=t.groups;for(let h=0,p=c.length;h<p;h++){const _=c[h];this.addGroup(_.start,_.count,_.materialIndex)}const u=t.boundingBox;u!==null&&(this.boundingBox=u.clone());const d=t.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Od=new Ye,wr=new Zo,vo=new da,Bd=new X,xo=new X,Mo=new X,yo=new X,Pc=new X,So=new X,zd=new X,Eo=new X;class ki extends Tn{constructor(t=new Si,e=new Zu){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,r=Object.keys(e);if(r.length>0){const a=e[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,c=a.length;o<c;o++){const u=a[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=o}}}}getVertexPosition(t,e){const r=this.geometry,a=r.attributes.position,o=r.morphAttributes.position,c=r.morphTargetsRelative;e.fromBufferAttribute(a,t);const u=this.morphTargetInfluences;if(o&&u){So.set(0,0,0);for(let d=0,h=o.length;d<h;d++){const p=u[d],_=o[d];p!==0&&(Pc.fromBufferAttribute(_,t),c?So.addScaledVector(Pc,p):So.addScaledVector(Pc.sub(e),p))}e.add(So)}return e}raycast(t,e){const r=this.geometry,a=this.material,o=this.matrixWorld;a!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),vo.copy(r.boundingSphere),vo.applyMatrix4(o),wr.copy(t.ray).recast(t.near),!(vo.containsPoint(wr.origin)===!1&&(wr.intersectSphere(vo,Bd)===null||wr.origin.distanceToSquared(Bd)>(t.far-t.near)**2))&&(Od.copy(o).invert(),wr.copy(t.ray).applyMatrix4(Od),!(r.boundingBox!==null&&wr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(t,e,wr)))}_computeIntersections(t,e,r){let a;const o=this.geometry,c=this.material,u=o.index,d=o.attributes.position,h=o.attributes.uv,p=o.attributes.uv1,_=o.attributes.normal,g=o.groups,x=o.drawRange;if(u!==null)if(Array.isArray(c))for(let E=0,A=g.length;E<A;E++){const v=g[E],m=c[v.materialIndex],N=Math.max(v.start,x.start),L=Math.min(u.count,Math.min(v.start+v.count,x.start+x.count));for(let P=N,B=L;P<B;P+=3){const O=u.getX(P),F=u.getX(P+1),Y=u.getX(P+2);a=To(this,m,t,r,h,p,_,O,F,Y),a&&(a.faceIndex=Math.floor(P/3),a.face.materialIndex=v.materialIndex,e.push(a))}}else{const E=Math.max(0,x.start),A=Math.min(u.count,x.start+x.count);for(let v=E,m=A;v<m;v+=3){const N=u.getX(v),L=u.getX(v+1),P=u.getX(v+2);a=To(this,c,t,r,h,p,_,N,L,P),a&&(a.faceIndex=Math.floor(v/3),e.push(a))}}else if(d!==void 0)if(Array.isArray(c))for(let E=0,A=g.length;E<A;E++){const v=g[E],m=c[v.materialIndex],N=Math.max(v.start,x.start),L=Math.min(d.count,Math.min(v.start+v.count,x.start+x.count));for(let P=N,B=L;P<B;P+=3){const O=P,F=P+1,Y=P+2;a=To(this,m,t,r,h,p,_,O,F,Y),a&&(a.faceIndex=Math.floor(P/3),a.face.materialIndex=v.materialIndex,e.push(a))}}else{const E=Math.max(0,x.start),A=Math.min(d.count,x.start+x.count);for(let v=E,m=A;v<m;v+=3){const N=v,L=v+1,P=v+2;a=To(this,c,t,r,h,p,_,N,L,P),a&&(a.faceIndex=Math.floor(v/3),e.push(a))}}}}function zS(i,t,e,r,a,o,c,u){let d;if(t.side===Dn?d=r.intersectTriangle(c,o,a,!0,u):d=r.intersectTriangle(a,o,c,t.side===ur,u),d===null)return null;Eo.copy(u),Eo.applyMatrix4(i.matrixWorld);const h=e.ray.origin.distanceTo(Eo);return h<e.near||h>e.far?null:{distance:h,point:Eo.clone(),object:i}}function To(i,t,e,r,a,o,c,u,d,h){i.getVertexPosition(u,xo),i.getVertexPosition(d,Mo),i.getVertexPosition(h,yo);const p=zS(i,t,e,r,xo,Mo,yo,zd);if(p){const _=new X;ui.getBarycoord(zd,xo,Mo,yo,_),a&&(p.uv=ui.getInterpolatedAttribute(a,u,d,h,_,new jt)),o&&(p.uv1=ui.getInterpolatedAttribute(o,u,d,h,_,new jt)),c&&(p.normal=ui.getInterpolatedAttribute(c,u,d,h,_,new X),p.normal.dot(r.direction)>0&&p.normal.multiplyScalar(-1));const g={a:u,b:d,c:h,normal:new X,materialIndex:0};ui.getNormal(xo,Mo,yo,g.normal),p.face=g,p.barycoord=_}return p}class pa extends Si{constructor(t=1,e=1,r=1,a=1,o=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:r,widthSegments:a,heightSegments:o,depthSegments:c};const u=this;a=Math.floor(a),o=Math.floor(o),c=Math.floor(c);const d=[],h=[],p=[],_=[];let g=0,x=0;E("z","y","x",-1,-1,r,e,t,c,o,0),E("z","y","x",1,-1,r,e,-t,c,o,1),E("x","z","y",1,1,t,r,e,a,c,2),E("x","z","y",1,-1,t,r,-e,a,c,3),E("x","y","z",1,-1,t,e,r,a,o,4),E("x","y","z",-1,-1,t,e,-r,a,o,5),this.setIndex(d),this.setAttribute("position",new Hn(h,3)),this.setAttribute("normal",new Hn(p,3)),this.setAttribute("uv",new Hn(_,2));function E(A,v,m,N,L,P,B,O,F,Y,R){const w=P/F,H=B/Y,J=P/2,et=B/2,ut=O/2,at=F+1,ot=Y+1;let ct=0,Q=0;const yt=new X;for(let At=0;At<ot;At++){const Lt=At*H-et;for(let ue=0;ue<at;ue++){const Pe=ue*w-J;yt[A]=Pe*N,yt[v]=Lt*L,yt[m]=ut,h.push(yt.x,yt.y,yt.z),yt[A]=0,yt[v]=0,yt[m]=O>0?1:-1,p.push(yt.x,yt.y,yt.z),_.push(ue/F),_.push(1-At/Y),ct+=1}}for(let At=0;At<Y;At++)for(let Lt=0;Lt<F;Lt++){const ue=g+Lt+at*At,Pe=g+Lt+at*(At+1),Be=g+(Lt+1)+at*(At+1),me=g+(Lt+1)+at*At;d.push(ue,Pe,me),d.push(Pe,Be,me),Q+=6}u.addGroup(x,Q,R),x+=Q,g+=ct}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new pa(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Rs(i){const t={};for(const e in i){t[e]={};for(const r in i[e]){const a=i[e][r];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][r]=null):t[e][r]=a.clone():Array.isArray(a)?t[e][r]=a.slice():t[e][r]=a}}return t}function En(i){const t={};for(let e=0;e<i.length;e++){const r=Rs(i[e]);for(const a in r)t[a]=r[a]}return t}function HS(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Kp(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Se.workingColorSpace}const kS={clone:Rs,merge:En};var VS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,GS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class yi extends bn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=VS,this.fragmentShader=GS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Rs(t.uniforms),this.uniformsGroups=HS(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const a in this.uniforms){const c=this.uniforms[a].value;c&&c.isTexture?e.uniforms[a]={type:"t",value:c.toJSON(t).uuid}:c&&c.isColor?e.uniforms[a]={type:"c",value:c.getHex()}:c&&c.isVector2?e.uniforms[a]={type:"v2",value:c.toArray()}:c&&c.isVector3?e.uniforms[a]={type:"v3",value:c.toArray()}:c&&c.isVector4?e.uniforms[a]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?e.uniforms[a]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?e.uniforms[a]={type:"m4",value:c.toArray()}:e.uniforms[a]={value:c}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const r={};for(const a in this.extensions)this.extensions[a]===!0&&(r[a]=!0);return Object.keys(r).length>0&&(e.extensions=r),e}}class $p extends Tn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ye,this.projectionMatrix=new Ye,this.projectionMatrixInverse=new Ye,this.coordinateSystem=xi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const sr=new X,Hd=new jt,kd=new jt;class Qn extends $p{constructor(t=50,e=1,r=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=r,this.far=a,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=ca*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ea*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ca*2*Math.atan(Math.tan(ea*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,r){sr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(sr.x,sr.y).multiplyScalar(-t/sr.z),sr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(sr.x,sr.y).multiplyScalar(-t/sr.z)}getViewSize(t,e){return this.getViewBounds(t,Hd,kd),e.subVectors(kd,Hd)}setViewOffset(t,e,r,a,o,c){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=r,this.view.offsetY=a,this.view.width=o,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(ea*.5*this.fov)/this.zoom,r=2*e,a=this.aspect*r,o=-.5*a;const c=this.view;if(this.view!==null&&this.view.enabled){const d=c.fullWidth,h=c.fullHeight;o+=c.offsetX*a/d,e-=c.offsetY*r/h,a*=c.width/d,r*=c.height/h}const u=this.filmOffset;u!==0&&(o+=t*u/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+a,e,e-r,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const ps=-90,ms=1;class WS extends Tn{constructor(t,e,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new Qn(ps,ms,t,e);a.layers=this.layers,this.add(a);const o=new Qn(ps,ms,t,e);o.layers=this.layers,this.add(o);const c=new Qn(ps,ms,t,e);c.layers=this.layers,this.add(c);const u=new Qn(ps,ms,t,e);u.layers=this.layers,this.add(u);const d=new Qn(ps,ms,t,e);d.layers=this.layers,this.add(d);const h=new Qn(ps,ms,t,e);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[r,a,o,c,u,d]=e;for(const h of e)this.remove(h);if(t===xi)r.up.set(0,1,0),r.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),u.up.set(0,1,0),u.lookAt(0,0,1),d.up.set(0,1,0),d.lookAt(0,0,-1);else if(t===Ho)r.up.set(0,-1,0),r.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),u.up.set(0,-1,0),u.lookAt(0,0,1),d.up.set(0,-1,0),d.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const h of e)this.add(h),h.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:a}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[o,c,u,d,h,p]=this.children,_=t.getRenderTarget(),g=t.getActiveCubeFace(),x=t.getActiveMipmapLevel(),E=t.xr.enabled;t.xr.enabled=!1;const A=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,t.setRenderTarget(r,0,a),t.render(e,o),t.setRenderTarget(r,1,a),t.render(e,c),t.setRenderTarget(r,2,a),t.render(e,u),t.setRenderTarget(r,3,a),t.render(e,d),t.setRenderTarget(r,4,a),t.render(e,h),r.texture.generateMipmaps=A,t.setRenderTarget(r,5,a),t.render(e,p),t.setRenderTarget(_,g,x),t.xr.enabled=E,r.texture.needsPMREMUpdate=!0}}class Jp extends un{constructor(t=[],e=bs,r,a,o,c,u,d,h,p){super(t,e,r,a,o,c,u,d,h,p),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class XS extends Br{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const r={width:t,height:t,depth:1},a=[r,r,r,r,r,r];this.texture=new Jp(a),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new pa(5,5,5),o=new yi({name:"CubemapFromEquirect",uniforms:Rs(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Dn,blending:lr});o.uniforms.tEquirect.value=e;const c=new ki(a,o),u=e.minFilter;return e.minFilter===Nr&&(e.minFilter=gi),new WS(1,10,this).update(t,c),e.minFilter=u,c.geometry.dispose(),c.material.dispose(),this}clear(t,e=!0,r=!0,a=!0){const o=t.getRenderTarget();for(let c=0;c<6;c++)t.setRenderTarget(this,c),t.clear(e,r,a);t.setRenderTarget(o)}}class js extends Tn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const qS={type:"move"};class Dc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new js,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new js,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new js,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const r of t.hand.values())this._getHandJoint(e,r)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,r){let a=null,o=null,c=null;const u=this._targetRay,d=this._grip,h=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(h&&t.hand){c=!0;for(const A of t.hand.values()){const v=e.getJointPose(A,r),m=this._getHandJoint(h,A);v!==null&&(m.matrix.fromArray(v.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=v.radius),m.visible=v!==null}const p=h.joints["index-finger-tip"],_=h.joints["thumb-tip"],g=p.position.distanceTo(_.position),x=.02,E=.005;h.inputState.pinching&&g>x+E?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!h.inputState.pinching&&g<=x-E&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else d!==null&&t.gripSpace&&(o=e.getPose(t.gripSpace,r),o!==null&&(d.matrix.fromArray(o.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,o.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(o.linearVelocity)):d.hasLinearVelocity=!1,o.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(o.angularVelocity)):d.hasAngularVelocity=!1));u!==null&&(a=e.getPose(t.targetRaySpace,r),a===null&&o!==null&&(a=o),a!==null&&(u.matrix.fromArray(a.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,a.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(a.linearVelocity)):u.hasLinearVelocity=!1,a.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(a.angularVelocity)):u.hasAngularVelocity=!1,this.dispatchEvent(qS)))}return u!==null&&(u.visible=a!==null),d!==null&&(d.visible=o!==null),h!==null&&(h.visible=c!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const r=new js;r.matrixAutoUpdate=!1,r.visible=!1,t.joints[e.jointName]=r,t.add(r)}return t.joints[e.jointName]}}class Ku{constructor(t,e=1,r=1e3){this.isFog=!0,this.name="",this.color=new Zt(t),this.near=e,this.far=r}clone(){return new Ku(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class YS extends Tn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new jn,this.environmentIntensity=1,this.environmentRotation=new jn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class ZS extends bn{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Zt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Lc=new X,KS=new X,$S=new ae;class ar{constructor(t=new X(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,r,a){return this.normal.set(t,e,r),this.constant=a,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,r){const a=Lc.subVectors(r,e).cross(KS.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(a,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const r=t.delta(Lc),a=this.normal.dot(r);if(a===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const o=-(t.start.dot(this.normal)+this.constant)/a;return o<0||o>1?null:e.copy(t.start).addScaledVector(r,o)}intersectsLine(t){const e=this.distanceToPoint(t.start),r=this.distanceToPoint(t.end);return e<0&&r>0||r<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const r=e||$S.getNormalMatrix(t),a=this.coplanarPoint(Lc).applyMatrix4(t),o=this.normal.applyMatrix3(r).normalize();return this.constant=-a.dot(o),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Rr=new da,JS=new jt(.5,.5),bo=new X;class Qp{constructor(t=new ar,e=new ar,r=new ar,a=new ar,o=new ar,c=new ar){this.planes=[t,e,r,a,o,c]}set(t,e,r,a,o,c){const u=this.planes;return u[0].copy(t),u[1].copy(e),u[2].copy(r),u[3].copy(a),u[4].copy(o),u[5].copy(c),this}copy(t){const e=this.planes;for(let r=0;r<6;r++)e[r].copy(t.planes[r]);return this}setFromProjectionMatrix(t,e=xi,r=!1){const a=this.planes,o=t.elements,c=o[0],u=o[1],d=o[2],h=o[3],p=o[4],_=o[5],g=o[6],x=o[7],E=o[8],A=o[9],v=o[10],m=o[11],N=o[12],L=o[13],P=o[14],B=o[15];if(a[0].setComponents(h-c,x-p,m-E,B-N).normalize(),a[1].setComponents(h+c,x+p,m+E,B+N).normalize(),a[2].setComponents(h+u,x+_,m+A,B+L).normalize(),a[3].setComponents(h-u,x-_,m-A,B-L).normalize(),r)a[4].setComponents(d,g,v,P).normalize(),a[5].setComponents(h-d,x-g,m-v,B-P).normalize();else if(a[4].setComponents(h-d,x-g,m-v,B-P).normalize(),e===xi)a[5].setComponents(h+d,x+g,m+v,B+P).normalize();else if(e===Ho)a[5].setComponents(d,g,v,P).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Rr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Rr.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Rr)}intersectsSprite(t){Rr.center.set(0,0,0);const e=JS.distanceTo(t.center);return Rr.radius=.7071067811865476+e,Rr.applyMatrix4(t.matrixWorld),this.intersectsSphere(Rr)}intersectsSphere(t){const e=this.planes,r=t.center,a=-t.radius;for(let o=0;o<6;o++)if(e[o].distanceToPoint(r)<a)return!1;return!0}intersectsBox(t){const e=this.planes;for(let r=0;r<6;r++){const a=e[r];if(bo.x=a.normal.x>0?t.max.x:t.min.x,bo.y=a.normal.y>0?t.max.y:t.min.y,bo.z=a.normal.z>0?t.max.z:t.min.z,a.distanceToPoint(bo)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let r=0;r<6;r++)if(e[r].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Ko extends bn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Zt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Vo=new X,Go=new X,Vd=new Ye,Qs=new Zo,Ao=new da,Ic=new X,Gd=new X;class QS extends Tn{constructor(t=new Si,e=new Ko){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,r=[0];for(let a=1,o=e.count;a<o;a++)Vo.fromBufferAttribute(e,a-1),Go.fromBufferAttribute(e,a),r[a]=r[a-1],r[a]+=Vo.distanceTo(Go);t.setAttribute("lineDistance",new Hn(r,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const r=this.geometry,a=this.matrixWorld,o=t.params.Line.threshold,c=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Ao.copy(r.boundingSphere),Ao.applyMatrix4(a),Ao.radius+=o,t.ray.intersectsSphere(Ao)===!1)return;Vd.copy(a).invert(),Qs.copy(t.ray).applyMatrix4(Vd);const u=o/((this.scale.x+this.scale.y+this.scale.z)/3),d=u*u,h=this.isLineSegments?2:1,p=r.index,g=r.attributes.position;if(p!==null){const x=Math.max(0,c.start),E=Math.min(p.count,c.start+c.count);for(let A=x,v=E-1;A<v;A+=h){const m=p.getX(A),N=p.getX(A+1),L=wo(this,t,Qs,d,m,N,A);L&&e.push(L)}if(this.isLineLoop){const A=p.getX(E-1),v=p.getX(x),m=wo(this,t,Qs,d,A,v,E-1);m&&e.push(m)}}else{const x=Math.max(0,c.start),E=Math.min(g.count,c.start+c.count);for(let A=x,v=E-1;A<v;A+=h){const m=wo(this,t,Qs,d,A,A+1,A);m&&e.push(m)}if(this.isLineLoop){const A=wo(this,t,Qs,d,E-1,x,E-1);A&&e.push(A)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,r=Object.keys(e);if(r.length>0){const a=e[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,c=a.length;o<c;o++){const u=a[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=o}}}}}function wo(i,t,e,r,a,o,c){const u=i.geometry.attributes.position;if(Vo.fromBufferAttribute(u,a),Go.fromBufferAttribute(u,o),e.distanceSqToSegment(Vo,Go,Ic,Gd)>r)return;Ic.applyMatrix4(i.matrixWorld);const h=t.ray.origin.distanceTo(Ic);if(!(h<t.near||h>t.far))return{distance:h,point:Gd.clone().applyMatrix4(i.matrixWorld),index:c,face:null,faceIndex:null,barycoord:null,object:i}}const Wd=new X,Xd=new X;class jS extends QS{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,r=[];for(let a=0,o=e.count;a<o;a+=2)Wd.fromBufferAttribute(e,a),Xd.fromBufferAttribute(e,a+1),r[a]=a===0?0:r[a-1],r[a+1]=r[a]+Wd.distanceTo(Xd);t.setAttribute("lineDistance",new Hn(r,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class jp extends bn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Zt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const qd=new Ye,Iu=new Zo,Ro=new da,Co=new X;class tE extends Tn{constructor(t=new Si,e=new jp){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const r=this.geometry,a=this.matrixWorld,o=t.params.Points.threshold,c=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Ro.copy(r.boundingSphere),Ro.applyMatrix4(a),Ro.radius+=o,t.ray.intersectsSphere(Ro)===!1)return;qd.copy(a).invert(),Iu.copy(t.ray).applyMatrix4(qd);const u=o/((this.scale.x+this.scale.y+this.scale.z)/3),d=u*u,h=r.index,_=r.attributes.position;if(h!==null){const g=Math.max(0,c.start),x=Math.min(h.count,c.start+c.count);for(let E=g,A=x;E<A;E++){const v=h.getX(E);Co.fromBufferAttribute(_,v),Yd(Co,v,d,a,t,e,this)}}else{const g=Math.max(0,c.start),x=Math.min(_.count,c.start+c.count);for(let E=g,A=x;E<A;E++)Co.fromBufferAttribute(_,E),Yd(Co,E,d,a,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,r=Object.keys(e);if(r.length>0){const a=e[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,c=a.length;o<c;o++){const u=a[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=o}}}}}function Yd(i,t,e,r,a,o,c){const u=Iu.distanceSqToPoint(i);if(u<e){const d=new X;Iu.closestPointToPoint(i,d),d.applyMatrix4(r);const h=a.ray.origin.distanceTo(d);if(h<a.near||h>a.far)return;o.push({distance:h,distanceToRay:Math.sqrt(u),point:d,index:t,face:null,faceIndex:null,barycoord:null,object:c})}}class tm extends un{constructor(t,e,r=Fr,a,o,c,u=fi,d=fi,h,p=oa,_=1){if(p!==oa&&p!==la)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:t,height:e,depth:_};super(g,a,o,c,u,d,p,r,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Yu(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class em extends un{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class $o extends Si{constructor(t=1,e=1,r=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:r,heightSegments:a};const o=t/2,c=e/2,u=Math.floor(r),d=Math.floor(a),h=u+1,p=d+1,_=t/u,g=e/d,x=[],E=[],A=[],v=[];for(let m=0;m<p;m++){const N=m*g-c;for(let L=0;L<h;L++){const P=L*_-o;E.push(P,-N,0),A.push(0,0,1),v.push(L/u),v.push(1-m/d)}}for(let m=0;m<d;m++)for(let N=0;N<u;N++){const L=N+h*m,P=N+h*(m+1),B=N+1+h*(m+1),O=N+1+h*m;x.push(L,P,O),x.push(P,B,O)}this.setIndex(x),this.setAttribute("position",new Hn(E,3)),this.setAttribute("normal",new Hn(A,3)),this.setAttribute("uv",new Hn(v,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $o(t.width,t.height,t.widthSegments,t.heightSegments)}}class eE extends bn{constructor(t){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new Zt(0),this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.fog=t.fog,this}}class nE extends yi{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class nm extends bn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Zt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Zt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=zr,this.normalScale=new jt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new jn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class iE extends nm{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new jt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return de(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Zt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Zt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Zt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class rE extends bn{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Zt(16777215),this.specular=new Zt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Zt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=zr,this.normalScale=new jt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new jn,this.combine=qo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class sE extends bn{constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new Zt(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Zt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=zr,this.normalScale=new jt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}class aE extends bn{constructor(t){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=zr,this.normalScale=new jt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.flatShading=t.flatShading,this}}class oE extends bn{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Zt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=zr,this.normalScale=new jt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new jn,this.combine=qo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class im extends bn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ky,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class rm extends bn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class lE extends bn{constructor(t){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new Zt(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=zr,this.normalScale=new jt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={MATCAP:""},this.color.copy(t.color),this.matcap=t.matcap,this.map=t.map,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.flatShading=t.flatShading,this.fog=t.fog,this}}class cE extends Ko{constructor(t){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(t)}copy(t){return super.copy(t),this.scale=t.scale,this.dashSize=t.dashSize,this.gapSize=t.gapSize,this}}const Zd={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class uE{constructor(t,e,r){const a=this;let o=!1,c=0,u=0,d;const h=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=r,this.abortController=new AbortController,this.itemStart=function(p){u++,o===!1&&a.onStart!==void 0&&a.onStart(p,c,u),o=!0},this.itemEnd=function(p){c++,a.onProgress!==void 0&&a.onProgress(p,c,u),c===u&&(o=!1,a.onLoad!==void 0&&a.onLoad())},this.itemError=function(p){a.onError!==void 0&&a.onError(p)},this.resolveURL=function(p){return d?d(p):p},this.setURLModifier=function(p){return d=p,this},this.addHandler=function(p,_){return h.push(p,_),this},this.removeHandler=function(p){const _=h.indexOf(p);return _!==-1&&h.splice(_,2),this},this.getHandler=function(p){for(let _=0,g=h.length;_<g;_+=2){const x=h[_],E=h[_+1];if(x.global&&(x.lastIndex=0),x.test(p))return E}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const hE=new uE;class Jo{constructor(t){this.manager=t!==void 0?t:hE,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const r=this;return new Promise(function(a,o){r.load(t,a,e,o)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}Jo.DEFAULT_MATERIAL_NAME="__DEFAULT";const Bi={};class fE extends Error{constructor(t,e){super(t),this.response=e}}class sm extends Jo{constructor(t){super(t),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(t,e,r,a){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const o=Zd.get(`file:${t}`);if(o!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(o),this.manager.itemEnd(t)},0),o;if(Bi[t]!==void 0){Bi[t].push({onLoad:e,onProgress:r,onError:a});return}Bi[t]=[],Bi[t].push({onLoad:e,onProgress:r,onError:a});const c=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),u=this.mimeType,d=this.responseType;fetch(c).then(h=>{if(h.status===200||h.status===0){if(h.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||h.body===void 0||h.body.getReader===void 0)return h;const p=Bi[t],_=h.body.getReader(),g=h.headers.get("X-File-Size")||h.headers.get("Content-Length"),x=g?parseInt(g):0,E=x!==0;let A=0;const v=new ReadableStream({start(m){N();function N(){_.read().then(({done:L,value:P})=>{if(L)m.close();else{A+=P.byteLength;const B=new ProgressEvent("progress",{lengthComputable:E,loaded:A,total:x});for(let O=0,F=p.length;O<F;O++){const Y=p[O];Y.onProgress&&Y.onProgress(B)}m.enqueue(P),N()}},L=>{m.error(L)})}}});return new Response(v)}else throw new fE(`fetch for "${h.url}" responded with ${h.status}: ${h.statusText}`,h)}).then(h=>{switch(d){case"arraybuffer":return h.arrayBuffer();case"blob":return h.blob();case"document":return h.text().then(p=>new DOMParser().parseFromString(p,u));case"json":return h.json();default:if(u==="")return h.text();{const _=/charset="?([^;"\s]*)"?/i.exec(u),g=_&&_[1]?_[1].toLowerCase():void 0,x=new TextDecoder(g);return h.arrayBuffer().then(E=>x.decode(E))}}}).then(h=>{Zd.add(`file:${t}`,h);const p=Bi[t];delete Bi[t];for(let _=0,g=p.length;_<g;_++){const x=p[_];x.onLoad&&x.onLoad(h)}}).catch(h=>{const p=Bi[t];if(p===void 0)throw this.manager.itemError(t),h;delete Bi[t];for(let _=0,g=p.length;_<g;_++){const x=p[_];x.onError&&x.onError(h)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class dE extends $p{constructor(t=-1,e=1,r=1,a=-1,o=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=r,this.bottom=a,this.near=o,this.far=c,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,r,a,o,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=r,this.view.offsetY=a,this.view.width=o,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let o=r-t,c=r+t,u=a+e,d=a-e;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=h*this.view.offsetX,c=o+h*this.view.width,u-=p*this.view.offsetY,d=u-p*this.view.height}this.projectionMatrix.makeOrthographic(o,c,u,d,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class $u extends Jo{constructor(t){super(t),this.textures={}}load(t,e,r,a){const o=this,c=new sm(o.manager);c.setPath(o.path),c.setRequestHeader(o.requestHeader),c.setWithCredentials(o.withCredentials),c.load(t,function(u){try{e(o.parse(JSON.parse(u)))}catch(d){a?a(d):console.error(d),o.manager.itemError(t)}},r,a)}parse(t){const e=this.textures;function r(o){return e[o]===void 0&&console.warn("THREE.MaterialLoader: Undefined texture",o),e[o]}const a=this.createMaterialFromType(t.type);if(t.uuid!==void 0&&(a.uuid=t.uuid),t.name!==void 0&&(a.name=t.name),t.color!==void 0&&a.color!==void 0&&a.color.setHex(t.color),t.roughness!==void 0&&(a.roughness=t.roughness),t.metalness!==void 0&&(a.metalness=t.metalness),t.sheen!==void 0&&(a.sheen=t.sheen),t.sheenColor!==void 0&&(a.sheenColor=new Zt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(a.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&a.emissive!==void 0&&a.emissive.setHex(t.emissive),t.specular!==void 0&&a.specular!==void 0&&a.specular.setHex(t.specular),t.specularIntensity!==void 0&&(a.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&a.specularColor!==void 0&&a.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(a.shininess=t.shininess),t.clearcoat!==void 0&&(a.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(a.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(a.dispersion=t.dispersion),t.iridescence!==void 0&&(a.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(a.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(a.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(a.transmission=t.transmission),t.thickness!==void 0&&(a.thickness=t.thickness),t.attenuationDistance!==void 0&&(a.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&a.attenuationColor!==void 0&&a.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(a.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(a.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(a.fog=t.fog),t.flatShading!==void 0&&(a.flatShading=t.flatShading),t.blending!==void 0&&(a.blending=t.blending),t.combine!==void 0&&(a.combine=t.combine),t.side!==void 0&&(a.side=t.side),t.shadowSide!==void 0&&(a.shadowSide=t.shadowSide),t.opacity!==void 0&&(a.opacity=t.opacity),t.transparent!==void 0&&(a.transparent=t.transparent),t.alphaTest!==void 0&&(a.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(a.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(a.depthFunc=t.depthFunc),t.depthTest!==void 0&&(a.depthTest=t.depthTest),t.depthWrite!==void 0&&(a.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(a.colorWrite=t.colorWrite),t.blendSrc!==void 0&&(a.blendSrc=t.blendSrc),t.blendDst!==void 0&&(a.blendDst=t.blendDst),t.blendEquation!==void 0&&(a.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(a.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(a.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(a.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&a.blendColor!==void 0&&a.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(a.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(a.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(a.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(a.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(a.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(a.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(a.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(a.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(a.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(a.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(a.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(a.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(a.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(a.rotation=t.rotation),t.linewidth!==void 0&&(a.linewidth=t.linewidth),t.dashSize!==void 0&&(a.dashSize=t.dashSize),t.gapSize!==void 0&&(a.gapSize=t.gapSize),t.scale!==void 0&&(a.scale=t.scale),t.polygonOffset!==void 0&&(a.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(a.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(a.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(a.dithering=t.dithering),t.alphaToCoverage!==void 0&&(a.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(a.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(a.forceSinglePass=t.forceSinglePass),t.visible!==void 0&&(a.visible=t.visible),t.toneMapped!==void 0&&(a.toneMapped=t.toneMapped),t.userData!==void 0&&(a.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?a.vertexColors=t.vertexColors>0:a.vertexColors=t.vertexColors),t.uniforms!==void 0)for(const o in t.uniforms){const c=t.uniforms[o];switch(a.uniforms[o]={},c.type){case"t":a.uniforms[o].value=r(c.value);break;case"c":a.uniforms[o].value=new Zt().setHex(c.value);break;case"v2":a.uniforms[o].value=new jt().fromArray(c.value);break;case"v3":a.uniforms[o].value=new X().fromArray(c.value);break;case"v4":a.uniforms[o].value=new qe().fromArray(c.value);break;case"m3":a.uniforms[o].value=new ae().fromArray(c.value);break;case"m4":a.uniforms[o].value=new Ye().fromArray(c.value);break;default:a.uniforms[o].value=c.value}}if(t.defines!==void 0&&(a.defines=t.defines),t.vertexShader!==void 0&&(a.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(a.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(a.glslVersion=t.glslVersion),t.extensions!==void 0)for(const o in t.extensions)a.extensions[o]=t.extensions[o];if(t.lights!==void 0&&(a.lights=t.lights),t.clipping!==void 0&&(a.clipping=t.clipping),t.size!==void 0&&(a.size=t.size),t.sizeAttenuation!==void 0&&(a.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(a.map=r(t.map)),t.matcap!==void 0&&(a.matcap=r(t.matcap)),t.alphaMap!==void 0&&(a.alphaMap=r(t.alphaMap)),t.bumpMap!==void 0&&(a.bumpMap=r(t.bumpMap)),t.bumpScale!==void 0&&(a.bumpScale=t.bumpScale),t.normalMap!==void 0&&(a.normalMap=r(t.normalMap)),t.normalMapType!==void 0&&(a.normalMapType=t.normalMapType),t.normalScale!==void 0){let o=t.normalScale;Array.isArray(o)===!1&&(o=[o,o]),a.normalScale=new jt().fromArray(o)}return t.displacementMap!==void 0&&(a.displacementMap=r(t.displacementMap)),t.displacementScale!==void 0&&(a.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(a.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(a.roughnessMap=r(t.roughnessMap)),t.metalnessMap!==void 0&&(a.metalnessMap=r(t.metalnessMap)),t.emissiveMap!==void 0&&(a.emissiveMap=r(t.emissiveMap)),t.emissiveIntensity!==void 0&&(a.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(a.specularMap=r(t.specularMap)),t.specularIntensityMap!==void 0&&(a.specularIntensityMap=r(t.specularIntensityMap)),t.specularColorMap!==void 0&&(a.specularColorMap=r(t.specularColorMap)),t.envMap!==void 0&&(a.envMap=r(t.envMap)),t.envMapRotation!==void 0&&a.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(a.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(a.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(a.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(a.lightMap=r(t.lightMap)),t.lightMapIntensity!==void 0&&(a.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(a.aoMap=r(t.aoMap)),t.aoMapIntensity!==void 0&&(a.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(a.gradientMap=r(t.gradientMap)),t.clearcoatMap!==void 0&&(a.clearcoatMap=r(t.clearcoatMap)),t.clearcoatRoughnessMap!==void 0&&(a.clearcoatRoughnessMap=r(t.clearcoatRoughnessMap)),t.clearcoatNormalMap!==void 0&&(a.clearcoatNormalMap=r(t.clearcoatNormalMap)),t.clearcoatNormalScale!==void 0&&(a.clearcoatNormalScale=new jt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(a.iridescenceMap=r(t.iridescenceMap)),t.iridescenceThicknessMap!==void 0&&(a.iridescenceThicknessMap=r(t.iridescenceThicknessMap)),t.transmissionMap!==void 0&&(a.transmissionMap=r(t.transmissionMap)),t.thicknessMap!==void 0&&(a.thicknessMap=r(t.thicknessMap)),t.anisotropyMap!==void 0&&(a.anisotropyMap=r(t.anisotropyMap)),t.sheenColorMap!==void 0&&(a.sheenColorMap=r(t.sheenColorMap)),t.sheenRoughnessMap!==void 0&&(a.sheenRoughnessMap=r(t.sheenRoughnessMap)),a}setTextures(t){return this.textures=t,this}createMaterialFromType(t){return $u.createMaterialFromType(t)}static createMaterialFromType(t){const e={ShadowMaterial:eE,SpriteMaterial:ZS,RawShaderMaterial:nE,ShaderMaterial:yi,PointsMaterial:jp,MeshPhysicalMaterial:iE,MeshStandardMaterial:nm,MeshPhongMaterial:rE,MeshToonMaterial:sE,MeshNormalMaterial:aE,MeshLambertMaterial:oE,MeshDepthMaterial:im,MeshDistanceMaterial:rm,MeshBasicMaterial:Zu,MeshMatcapMaterial:lE,LineDashedMaterial:cE,LineBasicMaterial:Ko,Material:bn};return new e[t]}}class pE extends Qn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class mE{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=performance.now();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}class Kd{constructor(t=1,e=0,r=0){this.radius=t,this.phi=e,this.theta=r}set(t,e,r){return this.radius=t,this.phi=e,this.theta=r,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=de(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,r){return this.radius=Math.sqrt(t*t+e*e+r*r),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,r),this.phi=Math.acos(de(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class _E extends jS{constructor(t=10,e=10,r=4473924,a=8947848){r=new Zt(r),a=new Zt(a);const o=e/2,c=t/e,u=t/2,d=[],h=[];for(let g=0,x=0,E=-u;g<=e;g++,E+=c){d.push(-u,0,E,u,0,E),d.push(E,0,-u,E,0,u);const A=g===o?r:a;A.toArray(h,x),x+=3,A.toArray(h,x),x+=3,A.toArray(h,x),x+=3,A.toArray(h,x),x+=3}const p=new Si;p.setAttribute("position",new Hn(d,3)),p.setAttribute("color",new Hn(h,3));const _=new Ko({vertexColors:!0,toneMapped:!1});super(p,_),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class gE extends Hr{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function $d(i,t,e,r){const a=vE(r);switch(e){case Op:return i*t;case zp:return i*t/a.components*a.byteLength;case Gu:return i*t/a.components*a.byteLength;case Hp:return i*t*2/a.components*a.byteLength;case Wu:return i*t*2/a.components*a.byteLength;case Bp:return i*t*3/a.components*a.byteLength;case hi:return i*t*4/a.components*a.byteLength;case Xu:return i*t*4/a.components*a.byteLength;case Uo:case No:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Fo:case Oo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case au:case lu:return Math.max(i,16)*Math.max(t,8)/4;case su:case ou:return Math.max(i,8)*Math.max(t,8)/2;case cu:case uu:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case hu:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case fu:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case du:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case pu:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case mu:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case _u:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case gu:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case vu:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case xu:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Mu:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case yu:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Su:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Eu:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Tu:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case bu:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Au:case wu:case Ru:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Cu:case Pu:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Du:case Lu:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function vE(i){switch(i){case Gi:case Ip:return{byteLength:1,components:1};case sa:case Up:case ha:return{byteLength:2,components:1};case ku:case Vu:return{byteLength:2,components:4};case Fr:case Hu:case vi:return{byteLength:4,components:1};case Np:case Fp:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:zu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=zu);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function am(){let i=null,t=!1,e=null,r=null;function a(o,c){e(o,c),r=i.requestAnimationFrame(a)}return{start:function(){t!==!0&&e!==null&&(r=i.requestAnimationFrame(a),t=!0)},stop:function(){i.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(o){e=o},setContext:function(o){i=o}}}function xE(i){const t=new WeakMap;function e(u,d){const h=u.array,p=u.usage,_=h.byteLength,g=i.createBuffer();i.bindBuffer(d,g),i.bufferData(d,h,p),u.onUploadCallback();let x;if(h instanceof Float32Array)x=i.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)x=i.HALF_FLOAT;else if(h instanceof Uint16Array)u.isFloat16BufferAttribute?x=i.HALF_FLOAT:x=i.UNSIGNED_SHORT;else if(h instanceof Int16Array)x=i.SHORT;else if(h instanceof Uint32Array)x=i.UNSIGNED_INT;else if(h instanceof Int32Array)x=i.INT;else if(h instanceof Int8Array)x=i.BYTE;else if(h instanceof Uint8Array)x=i.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)x=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:g,type:x,bytesPerElement:h.BYTES_PER_ELEMENT,version:u.version,size:_}}function r(u,d,h){const p=d.array,_=d.updateRanges;if(i.bindBuffer(h,u),_.length===0)i.bufferSubData(h,0,p);else{_.sort((x,E)=>x.start-E.start);let g=0;for(let x=1;x<_.length;x++){const E=_[g],A=_[x];A.start<=E.start+E.count+1?E.count=Math.max(E.count,A.start+A.count-E.start):(++g,_[g]=A)}_.length=g+1;for(let x=0,E=_.length;x<E;x++){const A=_[x];i.bufferSubData(h,A.start*p.BYTES_PER_ELEMENT,p,A.start,A.count)}d.clearUpdateRanges()}d.onUploadCallback()}function a(u){return u.isInterleavedBufferAttribute&&(u=u.data),t.get(u)}function o(u){u.isInterleavedBufferAttribute&&(u=u.data);const d=t.get(u);d&&(i.deleteBuffer(d.buffer),t.delete(u))}function c(u,d){if(u.isInterleavedBufferAttribute&&(u=u.data),u.isGLBufferAttribute){const p=t.get(u);(!p||p.version<u.version)&&t.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}const h=t.get(u);if(h===void 0)t.set(u,e(u,d));else if(h.version<u.version){if(h.size!==u.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(h.buffer,u,d),h.version=u.version}}return{get:a,remove:o,update:c}}var ME=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,yE=`#ifdef USE_ALPHAHASH
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
#endif`,SE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,EE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,TE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,bE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,AE=`#ifdef USE_AOMAP
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
#endif`,wE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,RE=`#ifdef USE_BATCHING
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
#endif`,CE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,PE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,DE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,LE=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,IE=`#ifdef USE_IRIDESCENCE
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
#endif`,UE=`#ifdef USE_BUMPMAP
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
#endif`,NE=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,FE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,OE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,BE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,zE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,HE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,kE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,VE=`#if defined( USE_COLOR_ALPHA )
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
#endif`,GE=`#define PI 3.141592653589793
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
} // validated`,WE=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,XE=`vec3 transformedNormal = objectNormal;
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
#endif`,qE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,YE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ZE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,KE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,$E="gl_FragColor = linearToOutputTexel( gl_FragColor );",JE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,QE=`#ifdef USE_ENVMAP
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
#endif`,jE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,tT=`#ifdef USE_ENVMAP
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
#endif`,eT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,nT=`#ifdef USE_ENVMAP
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
#endif`,iT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,rT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,sT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,aT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,oT=`#ifdef USE_GRADIENTMAP
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
}`,lT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,cT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,uT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,hT=`uniform bool receiveShadow;
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
#endif`,fT=`#ifdef USE_ENVMAP
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
#endif`,dT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,pT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,mT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,_T=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,gT=`PhysicalMaterial material;
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
#endif`,vT=`struct PhysicalMaterial {
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
}`,xT=`
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
#endif`,MT=`#if defined( RE_IndirectDiffuse )
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
#endif`,yT=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ST=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ET=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,TT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,AT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,wT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,RT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,CT=`#if defined( USE_POINTS_UV )
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
#endif`,PT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,DT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,LT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,IT=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,UT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,NT=`#ifdef USE_MORPHTARGETS
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
#endif`,FT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,OT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,BT=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,zT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,HT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,VT=`#ifdef USE_NORMALMAP
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
#endif`,GT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,WT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,XT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,qT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,YT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ZT=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,KT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,$T=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,JT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,QT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,jT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,tb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,eb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,nb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ib=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,rb=`float getShadowMask() {
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
}`,sb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ab=`#ifdef USE_SKINNING
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
#endif`,ob=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,lb=`#ifdef USE_SKINNING
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
#endif`,cb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ub=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,hb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,fb=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,db=`#ifdef USE_TRANSMISSION
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
#endif`,pb=`#ifdef USE_TRANSMISSION
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
#endif`,mb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_b=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const xb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Mb=`uniform sampler2D t2D;
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
}`,yb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Sb=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Eb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Tb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bb=`#include <common>
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
}`,Ab=`#if DEPTH_PACKING == 3200
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
}`,wb=`#define DISTANCE
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
}`,Rb=`#define DISTANCE
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
}`,Cb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Pb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Db=`uniform float scale;
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
}`,Lb=`uniform vec3 diffuse;
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
}`,Ib=`#include <common>
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
}`,Ub=`uniform vec3 diffuse;
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
}`,Nb=`#define LAMBERT
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
}`,Fb=`#define LAMBERT
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
}`,Ob=`#define MATCAP
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
}`,Bb=`#define MATCAP
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
}`,zb=`#define NORMAL
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
}`,Hb=`#define NORMAL
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
}`,kb=`#define PHONG
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
}`,Vb=`#define PHONG
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
}`,Gb=`#define STANDARD
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
}`,Wb=`#define STANDARD
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
}`,Xb=`#define TOON
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
}`,qb=`#define TOON
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
}`,Yb=`uniform float size;
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
}`,Zb=`uniform vec3 diffuse;
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
}`,Kb=`#include <common>
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
}`,$b=`uniform vec3 color;
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
}`,Jb=`uniform float rotation;
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
}`,Qb=`uniform vec3 diffuse;
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
}`,ce={alphahash_fragment:ME,alphahash_pars_fragment:yE,alphamap_fragment:SE,alphamap_pars_fragment:EE,alphatest_fragment:TE,alphatest_pars_fragment:bE,aomap_fragment:AE,aomap_pars_fragment:wE,batching_pars_vertex:RE,batching_vertex:CE,begin_vertex:PE,beginnormal_vertex:DE,bsdfs:LE,iridescence_fragment:IE,bumpmap_pars_fragment:UE,clipping_planes_fragment:NE,clipping_planes_pars_fragment:FE,clipping_planes_pars_vertex:OE,clipping_planes_vertex:BE,color_fragment:zE,color_pars_fragment:HE,color_pars_vertex:kE,color_vertex:VE,common:GE,cube_uv_reflection_fragment:WE,defaultnormal_vertex:XE,displacementmap_pars_vertex:qE,displacementmap_vertex:YE,emissivemap_fragment:ZE,emissivemap_pars_fragment:KE,colorspace_fragment:$E,colorspace_pars_fragment:JE,envmap_fragment:QE,envmap_common_pars_fragment:jE,envmap_pars_fragment:tT,envmap_pars_vertex:eT,envmap_physical_pars_fragment:fT,envmap_vertex:nT,fog_vertex:iT,fog_pars_vertex:rT,fog_fragment:sT,fog_pars_fragment:aT,gradientmap_pars_fragment:oT,lightmap_pars_fragment:lT,lights_lambert_fragment:cT,lights_lambert_pars_fragment:uT,lights_pars_begin:hT,lights_toon_fragment:dT,lights_toon_pars_fragment:pT,lights_phong_fragment:mT,lights_phong_pars_fragment:_T,lights_physical_fragment:gT,lights_physical_pars_fragment:vT,lights_fragment_begin:xT,lights_fragment_maps:MT,lights_fragment_end:yT,logdepthbuf_fragment:ST,logdepthbuf_pars_fragment:ET,logdepthbuf_pars_vertex:TT,logdepthbuf_vertex:bT,map_fragment:AT,map_pars_fragment:wT,map_particle_fragment:RT,map_particle_pars_fragment:CT,metalnessmap_fragment:PT,metalnessmap_pars_fragment:DT,morphinstance_vertex:LT,morphcolor_vertex:IT,morphnormal_vertex:UT,morphtarget_pars_vertex:NT,morphtarget_vertex:FT,normal_fragment_begin:OT,normal_fragment_maps:BT,normal_pars_fragment:zT,normal_pars_vertex:HT,normal_vertex:kT,normalmap_pars_fragment:VT,clearcoat_normal_fragment_begin:GT,clearcoat_normal_fragment_maps:WT,clearcoat_pars_fragment:XT,iridescence_pars_fragment:qT,opaque_fragment:YT,packing:ZT,premultiplied_alpha_fragment:KT,project_vertex:$T,dithering_fragment:JT,dithering_pars_fragment:QT,roughnessmap_fragment:jT,roughnessmap_pars_fragment:tb,shadowmap_pars_fragment:eb,shadowmap_pars_vertex:nb,shadowmap_vertex:ib,shadowmask_pars_fragment:rb,skinbase_vertex:sb,skinning_pars_vertex:ab,skinning_vertex:ob,skinnormal_vertex:lb,specularmap_fragment:cb,specularmap_pars_fragment:ub,tonemapping_fragment:hb,tonemapping_pars_fragment:fb,transmission_fragment:db,transmission_pars_fragment:pb,uv_pars_fragment:mb,uv_pars_vertex:_b,uv_vertex:gb,worldpos_vertex:vb,background_vert:xb,background_frag:Mb,backgroundCube_vert:yb,backgroundCube_frag:Sb,cube_vert:Eb,cube_frag:Tb,depth_vert:bb,depth_frag:Ab,distanceRGBA_vert:wb,distanceRGBA_frag:Rb,equirect_vert:Cb,equirect_frag:Pb,linedashed_vert:Db,linedashed_frag:Lb,meshbasic_vert:Ib,meshbasic_frag:Ub,meshlambert_vert:Nb,meshlambert_frag:Fb,meshmatcap_vert:Ob,meshmatcap_frag:Bb,meshnormal_vert:zb,meshnormal_frag:Hb,meshphong_vert:kb,meshphong_frag:Vb,meshphysical_vert:Gb,meshphysical_frag:Wb,meshtoon_vert:Xb,meshtoon_frag:qb,points_vert:Yb,points_frag:Zb,shadow_vert:Kb,shadow_frag:$b,sprite_vert:Jb,sprite_frag:Qb},Tt={common:{diffuse:{value:new Zt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ae},alphaMap:{value:null},alphaMapTransform:{value:new ae},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ae}},envmap:{envMap:{value:null},envMapRotation:{value:new ae},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ae}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ae}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ae},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ae},normalScale:{value:new jt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ae},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ae}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ae}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ae}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Zt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Zt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ae},alphaTest:{value:0},uvTransform:{value:new ae}},sprite:{diffuse:{value:new Zt(16777215)},opacity:{value:1},center:{value:new jt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ae},alphaMap:{value:null},alphaMapTransform:{value:new ae},alphaTest:{value:0}}},_i={basic:{uniforms:En([Tt.common,Tt.specularmap,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.fog]),vertexShader:ce.meshbasic_vert,fragmentShader:ce.meshbasic_frag},lambert:{uniforms:En([Tt.common,Tt.specularmap,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.fog,Tt.lights,{emissive:{value:new Zt(0)}}]),vertexShader:ce.meshlambert_vert,fragmentShader:ce.meshlambert_frag},phong:{uniforms:En([Tt.common,Tt.specularmap,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.fog,Tt.lights,{emissive:{value:new Zt(0)},specular:{value:new Zt(1118481)},shininess:{value:30}}]),vertexShader:ce.meshphong_vert,fragmentShader:ce.meshphong_frag},standard:{uniforms:En([Tt.common,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.roughnessmap,Tt.metalnessmap,Tt.fog,Tt.lights,{emissive:{value:new Zt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ce.meshphysical_vert,fragmentShader:ce.meshphysical_frag},toon:{uniforms:En([Tt.common,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.gradientmap,Tt.fog,Tt.lights,{emissive:{value:new Zt(0)}}]),vertexShader:ce.meshtoon_vert,fragmentShader:ce.meshtoon_frag},matcap:{uniforms:En([Tt.common,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.fog,{matcap:{value:null}}]),vertexShader:ce.meshmatcap_vert,fragmentShader:ce.meshmatcap_frag},points:{uniforms:En([Tt.points,Tt.fog]),vertexShader:ce.points_vert,fragmentShader:ce.points_frag},dashed:{uniforms:En([Tt.common,Tt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ce.linedashed_vert,fragmentShader:ce.linedashed_frag},depth:{uniforms:En([Tt.common,Tt.displacementmap]),vertexShader:ce.depth_vert,fragmentShader:ce.depth_frag},normal:{uniforms:En([Tt.common,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,{opacity:{value:1}}]),vertexShader:ce.meshnormal_vert,fragmentShader:ce.meshnormal_frag},sprite:{uniforms:En([Tt.sprite,Tt.fog]),vertexShader:ce.sprite_vert,fragmentShader:ce.sprite_frag},background:{uniforms:{uvTransform:{value:new ae},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ce.background_vert,fragmentShader:ce.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ae}},vertexShader:ce.backgroundCube_vert,fragmentShader:ce.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ce.cube_vert,fragmentShader:ce.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ce.equirect_vert,fragmentShader:ce.equirect_frag},distanceRGBA:{uniforms:En([Tt.common,Tt.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ce.distanceRGBA_vert,fragmentShader:ce.distanceRGBA_frag},shadow:{uniforms:En([Tt.lights,Tt.fog,{color:{value:new Zt(0)},opacity:{value:1}}]),vertexShader:ce.shadow_vert,fragmentShader:ce.shadow_frag}};_i.physical={uniforms:En([_i.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ae},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ae},clearcoatNormalScale:{value:new jt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ae},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ae},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ae},sheen:{value:0},sheenColor:{value:new Zt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ae},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ae},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ae},transmissionSamplerSize:{value:new jt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ae},attenuationDistance:{value:0},attenuationColor:{value:new Zt(0)},specularColor:{value:new Zt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ae},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ae},anisotropyVector:{value:new jt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ae}}]),vertexShader:ce.meshphysical_vert,fragmentShader:ce.meshphysical_frag};const Po={r:0,b:0,g:0},Cr=new jn,jb=new Ye;function tA(i,t,e,r,a,o,c){const u=new Zt(0);let d=o===!0?0:1,h,p,_=null,g=0,x=null;function E(L){let P=L.isScene===!0?L.background:null;return P&&P.isTexture&&(P=(L.backgroundBlurriness>0?e:t).get(P)),P}function A(L){let P=!1;const B=E(L);B===null?m(u,d):B&&B.isColor&&(m(B,1),P=!0);const O=i.xr.getEnvironmentBlendMode();O==="additive"?r.buffers.color.setClear(0,0,0,1,c):O==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,c),(i.autoClear||P)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function v(L,P){const B=E(P);B&&(B.isCubeTexture||B.mapping===Yo)?(p===void 0&&(p=new ki(new pa(1,1,1),new yi({name:"BackgroundCubeMaterial",uniforms:Rs(_i.backgroundCube.uniforms),vertexShader:_i.backgroundCube.vertexShader,fragmentShader:_i.backgroundCube.fragmentShader,side:Dn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(O,F,Y){this.matrixWorld.copyPosition(Y.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(p)),Cr.copy(P.backgroundRotation),Cr.x*=-1,Cr.y*=-1,Cr.z*=-1,B.isCubeTexture&&B.isRenderTargetTexture===!1&&(Cr.y*=-1,Cr.z*=-1),p.material.uniforms.envMap.value=B,p.material.uniforms.flipEnvMap.value=B.isCubeTexture&&B.isRenderTargetTexture===!1?-1:1,p.material.uniforms.backgroundBlurriness.value=P.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(jb.makeRotationFromEuler(Cr)),p.material.toneMapped=Se.getTransfer(B.colorSpace)!==Le,(_!==B||g!==B.version||x!==i.toneMapping)&&(p.material.needsUpdate=!0,_=B,g=B.version,x=i.toneMapping),p.layers.enableAll(),L.unshift(p,p.geometry,p.material,0,0,null)):B&&B.isTexture&&(h===void 0&&(h=new ki(new $o(2,2),new yi({name:"BackgroundMaterial",uniforms:Rs(_i.background.uniforms),vertexShader:_i.background.vertexShader,fragmentShader:_i.background.fragmentShader,side:ur,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(h)),h.material.uniforms.t2D.value=B,h.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,h.material.toneMapped=Se.getTransfer(B.colorSpace)!==Le,B.matrixAutoUpdate===!0&&B.updateMatrix(),h.material.uniforms.uvTransform.value.copy(B.matrix),(_!==B||g!==B.version||x!==i.toneMapping)&&(h.material.needsUpdate=!0,_=B,g=B.version,x=i.toneMapping),h.layers.enableAll(),L.unshift(h,h.geometry,h.material,0,0,null))}function m(L,P){L.getRGB(Po,Kp(i)),r.buffers.color.setClear(Po.r,Po.g,Po.b,P,c)}function N(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0)}return{getClearColor:function(){return u},setClearColor:function(L,P=1){u.set(L),d=P,m(u,d)},getClearAlpha:function(){return d},setClearAlpha:function(L){d=L,m(u,d)},render:A,addToRenderList:v,dispose:N}}function eA(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),r={},a=g(null);let o=a,c=!1;function u(w,H,J,et,ut){let at=!1;const ot=_(et,J,H);o!==ot&&(o=ot,h(o.object)),at=x(w,et,J,ut),at&&E(w,et,J,ut),ut!==null&&t.update(ut,i.ELEMENT_ARRAY_BUFFER),(at||c)&&(c=!1,P(w,H,J,et),ut!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(ut).buffer))}function d(){return i.createVertexArray()}function h(w){return i.bindVertexArray(w)}function p(w){return i.deleteVertexArray(w)}function _(w,H,J){const et=J.wireframe===!0;let ut=r[w.id];ut===void 0&&(ut={},r[w.id]=ut);let at=ut[H.id];at===void 0&&(at={},ut[H.id]=at);let ot=at[et];return ot===void 0&&(ot=g(d()),at[et]=ot),ot}function g(w){const H=[],J=[],et=[];for(let ut=0;ut<e;ut++)H[ut]=0,J[ut]=0,et[ut]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:J,attributeDivisors:et,object:w,attributes:{},index:null}}function x(w,H,J,et){const ut=o.attributes,at=H.attributes;let ot=0;const ct=J.getAttributes();for(const Q in ct)if(ct[Q].location>=0){const At=ut[Q];let Lt=at[Q];if(Lt===void 0&&(Q==="instanceMatrix"&&w.instanceMatrix&&(Lt=w.instanceMatrix),Q==="instanceColor"&&w.instanceColor&&(Lt=w.instanceColor)),At===void 0||At.attribute!==Lt||Lt&&At.data!==Lt.data)return!0;ot++}return o.attributesNum!==ot||o.index!==et}function E(w,H,J,et){const ut={},at=H.attributes;let ot=0;const ct=J.getAttributes();for(const Q in ct)if(ct[Q].location>=0){let At=at[Q];At===void 0&&(Q==="instanceMatrix"&&w.instanceMatrix&&(At=w.instanceMatrix),Q==="instanceColor"&&w.instanceColor&&(At=w.instanceColor));const Lt={};Lt.attribute=At,At&&At.data&&(Lt.data=At.data),ut[Q]=Lt,ot++}o.attributes=ut,o.attributesNum=ot,o.index=et}function A(){const w=o.newAttributes;for(let H=0,J=w.length;H<J;H++)w[H]=0}function v(w){m(w,0)}function m(w,H){const J=o.newAttributes,et=o.enabledAttributes,ut=o.attributeDivisors;J[w]=1,et[w]===0&&(i.enableVertexAttribArray(w),et[w]=1),ut[w]!==H&&(i.vertexAttribDivisor(w,H),ut[w]=H)}function N(){const w=o.newAttributes,H=o.enabledAttributes;for(let J=0,et=H.length;J<et;J++)H[J]!==w[J]&&(i.disableVertexAttribArray(J),H[J]=0)}function L(w,H,J,et,ut,at,ot){ot===!0?i.vertexAttribIPointer(w,H,J,ut,at):i.vertexAttribPointer(w,H,J,et,ut,at)}function P(w,H,J,et){A();const ut=et.attributes,at=J.getAttributes(),ot=H.defaultAttributeValues;for(const ct in at){const Q=at[ct];if(Q.location>=0){let yt=ut[ct];if(yt===void 0&&(ct==="instanceMatrix"&&w.instanceMatrix&&(yt=w.instanceMatrix),ct==="instanceColor"&&w.instanceColor&&(yt=w.instanceColor)),yt!==void 0){const At=yt.normalized,Lt=yt.itemSize,ue=t.get(yt);if(ue===void 0)continue;const Pe=ue.buffer,Be=ue.type,me=ue.bytesPerElement,it=Be===i.INT||Be===i.UNSIGNED_INT||yt.gpuType===Hu;if(yt.isInterleavedBufferAttribute){const dt=yt.data,Ct=dt.stride,qt=yt.offset;if(dt.isInstancedInterleavedBuffer){for(let kt=0;kt<Q.locationSize;kt++)m(Q.location+kt,dt.meshPerAttribute);w.isInstancedMesh!==!0&&et._maxInstanceCount===void 0&&(et._maxInstanceCount=dt.meshPerAttribute*dt.count)}else for(let kt=0;kt<Q.locationSize;kt++)v(Q.location+kt);i.bindBuffer(i.ARRAY_BUFFER,Pe);for(let kt=0;kt<Q.locationSize;kt++)L(Q.location+kt,Lt/Q.locationSize,Be,At,Ct*me,(qt+Lt/Q.locationSize*kt)*me,it)}else{if(yt.isInstancedBufferAttribute){for(let dt=0;dt<Q.locationSize;dt++)m(Q.location+dt,yt.meshPerAttribute);w.isInstancedMesh!==!0&&et._maxInstanceCount===void 0&&(et._maxInstanceCount=yt.meshPerAttribute*yt.count)}else for(let dt=0;dt<Q.locationSize;dt++)v(Q.location+dt);i.bindBuffer(i.ARRAY_BUFFER,Pe);for(let dt=0;dt<Q.locationSize;dt++)L(Q.location+dt,Lt/Q.locationSize,Be,At,Lt*me,Lt/Q.locationSize*dt*me,it)}}else if(ot!==void 0){const At=ot[ct];if(At!==void 0)switch(At.length){case 2:i.vertexAttrib2fv(Q.location,At);break;case 3:i.vertexAttrib3fv(Q.location,At);break;case 4:i.vertexAttrib4fv(Q.location,At);break;default:i.vertexAttrib1fv(Q.location,At)}}}}N()}function B(){Y();for(const w in r){const H=r[w];for(const J in H){const et=H[J];for(const ut in et)p(et[ut].object),delete et[ut];delete H[J]}delete r[w]}}function O(w){if(r[w.id]===void 0)return;const H=r[w.id];for(const J in H){const et=H[J];for(const ut in et)p(et[ut].object),delete et[ut];delete H[J]}delete r[w.id]}function F(w){for(const H in r){const J=r[H];if(J[w.id]===void 0)continue;const et=J[w.id];for(const ut in et)p(et[ut].object),delete et[ut];delete J[w.id]}}function Y(){R(),c=!0,o!==a&&(o=a,h(o.object))}function R(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:u,reset:Y,resetDefaultState:R,dispose:B,releaseStatesOfGeometry:O,releaseStatesOfProgram:F,initAttributes:A,enableAttribute:v,disableUnusedAttributes:N}}function nA(i,t,e){let r;function a(h){r=h}function o(h,p){i.drawArrays(r,h,p),e.update(p,r,1)}function c(h,p,_){_!==0&&(i.drawArraysInstanced(r,h,p,_),e.update(p,r,_))}function u(h,p,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,h,0,p,0,_);let x=0;for(let E=0;E<_;E++)x+=p[E];e.update(x,r,1)}function d(h,p,_,g){if(_===0)return;const x=t.get("WEBGL_multi_draw");if(x===null)for(let E=0;E<h.length;E++)c(h[E],p[E],g[E]);else{x.multiDrawArraysInstancedWEBGL(r,h,0,p,0,g,0,_);let E=0;for(let A=0;A<_;A++)E+=p[A]*g[A];e.update(E,r,1)}}this.setMode=a,this.render=o,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function iA(i,t,e,r){let a;function o(){if(a!==void 0)return a;if(t.has("EXT_texture_filter_anisotropic")===!0){const F=t.get("EXT_texture_filter_anisotropic");a=i.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function c(F){return!(F!==hi&&r.convert(F)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function u(F){const Y=F===ha&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(F!==Gi&&r.convert(F)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==vi&&!Y)}function d(F){if(F==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=e.precision!==void 0?e.precision:"highp";const p=d(h);p!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",p,"instead."),h=p);const _=e.logarithmicDepthBuffer===!0,g=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),x=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),E=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=i.getParameter(i.MAX_TEXTURE_SIZE),v=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),N=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),L=i.getParameter(i.MAX_VARYING_VECTORS),P=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),B=E>0,O=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:d,textureFormatReadable:c,textureTypeReadable:u,precision:h,logarithmicDepthBuffer:_,reversedDepthBuffer:g,maxTextures:x,maxVertexTextures:E,maxTextureSize:A,maxCubemapSize:v,maxAttributes:m,maxVertexUniforms:N,maxVaryings:L,maxFragmentUniforms:P,vertexTextures:B,maxSamples:O}}function rA(i){const t=this;let e=null,r=0,a=!1,o=!1;const c=new ar,u=new ae,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(_,g){const x=_.length!==0||g||r!==0||a;return a=g,r=_.length,x},this.beginShadows=function(){o=!0,p(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(_,g){e=p(_,g,0)},this.setState=function(_,g,x){const E=_.clippingPlanes,A=_.clipIntersection,v=_.clipShadows,m=i.get(_);if(!a||E===null||E.length===0||o&&!v)o?p(null):h();else{const N=o?0:r,L=N*4;let P=m.clippingState||null;d.value=P,P=p(E,g,L,x);for(let B=0;B!==L;++B)P[B]=e[B];m.clippingState=P,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=N}};function h(){d.value!==e&&(d.value=e,d.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function p(_,g,x,E){const A=_!==null?_.length:0;let v=null;if(A!==0){if(v=d.value,E!==!0||v===null){const m=x+A*4,N=g.matrixWorldInverse;u.getNormalMatrix(N),(v===null||v.length<m)&&(v=new Float32Array(m));for(let L=0,P=x;L!==A;++L,P+=4)c.copy(_[L]).applyMatrix4(N,u),c.normal.toArray(v,P),v[P+3]=c.constant}d.value=v,d.needsUpdate=!0}return t.numPlanes=A,t.numIntersection=0,v}}function sA(i){let t=new WeakMap;function e(c,u){return u===eu?c.mapping=bs:u===nu&&(c.mapping=As),c}function r(c){if(c&&c.isTexture){const u=c.mapping;if(u===eu||u===nu)if(t.has(c)){const d=t.get(c).texture;return e(d,c.mapping)}else{const d=c.image;if(d&&d.height>0){const h=new XS(d.height);return h.fromEquirectangularTexture(i,c),t.set(c,h),c.addEventListener("dispose",a),e(h.texture,c.mapping)}else return null}}return c}function a(c){const u=c.target;u.removeEventListener("dispose",a);const d=t.get(u);d!==void 0&&(t.delete(u),d.dispose())}function o(){t=new WeakMap}return{get:r,dispose:o}}const xs=4,Jd=[.125,.215,.35,.446,.526,.582],Ir=20,Uc=new dE,Qd=new Zt;let Nc=null,Fc=0,Oc=0,Bc=!1;const Dr=(1+Math.sqrt(5))/2,_s=1/Dr,jd=[new X(-Dr,_s,0),new X(Dr,_s,0),new X(-_s,0,Dr),new X(_s,0,Dr),new X(0,Dr,-_s),new X(0,Dr,_s),new X(-1,1,-1),new X(1,1,-1),new X(-1,1,1),new X(1,1,1)],aA=new X;class tp{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,r=.1,a=100,o={}){const{size:c=256,position:u=aA}=o;Nc=this._renderer.getRenderTarget(),Fc=this._renderer.getActiveCubeFace(),Oc=this._renderer.getActiveMipmapLevel(),Bc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(c);const d=this._allocateTargets();return d.depthBuffer=!0,this._sceneToCubeUV(t,r,a,d,u),e>0&&this._blur(d,0,0,e),this._applyPMREM(d),this._cleanup(d),d}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ip(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=np(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Nc,Fc,Oc),this._renderer.xr.enabled=Bc,t.scissorTest=!1,Do(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===bs||t.mapping===As?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Nc=this._renderer.getRenderTarget(),Fc=this._renderer.getActiveCubeFace(),Oc=this._renderer.getActiveMipmapLevel(),Bc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=e||this._allocateTargets();return this._textureToCubeUV(t,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,r={magFilter:gi,minFilter:gi,generateMipmaps:!1,type:ha,format:hi,colorSpace:ws,depthBuffer:!1},a=ep(t,e,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ep(t,e,r);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=oA(o)),this._blurMaterial=lA(o,t,e)}return a}_compileMaterial(t){const e=new ki(this._lodPlanes[0],t);this._renderer.compile(e,Uc)}_sceneToCubeUV(t,e,r,a,o){const d=new Qn(90,1,e,r),h=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],_=this._renderer,g=_.autoClear,x=_.toneMapping;_.getClearColor(Qd),_.toneMapping=cr,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(a),_.clearDepth(),_.setRenderTarget(null));const A=new Zu({name:"PMREM.Background",side:Dn,depthWrite:!1,depthTest:!1}),v=new ki(new pa,A);let m=!1;const N=t.background;N?N.isColor&&(A.color.copy(N),t.background=null,m=!0):(A.color.copy(Qd),m=!0);for(let L=0;L<6;L++){const P=L%3;P===0?(d.up.set(0,h[L],0),d.position.set(o.x,o.y,o.z),d.lookAt(o.x+p[L],o.y,o.z)):P===1?(d.up.set(0,0,h[L]),d.position.set(o.x,o.y,o.z),d.lookAt(o.x,o.y+p[L],o.z)):(d.up.set(0,h[L],0),d.position.set(o.x,o.y,o.z),d.lookAt(o.x,o.y,o.z+p[L]));const B=this._cubeSize;Do(a,P*B,L>2?B:0,B,B),_.setRenderTarget(a),m&&_.render(v,d),_.render(t,d)}v.geometry.dispose(),v.material.dispose(),_.toneMapping=x,_.autoClear=g,t.background=N}_textureToCubeUV(t,e){const r=this._renderer,a=t.mapping===bs||t.mapping===As;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=ip()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=np());const o=a?this._cubemapMaterial:this._equirectMaterial,c=new ki(this._lodPlanes[0],o),u=o.uniforms;u.envMap.value=t;const d=this._cubeSize;Do(e,0,0,3*d,2*d),r.setRenderTarget(e),r.render(c,Uc)}_applyPMREM(t){const e=this._renderer,r=e.autoClear;e.autoClear=!1;const a=this._lodPlanes.length;for(let o=1;o<a;o++){const c=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),u=jd[(a-o-1)%jd.length];this._blur(t,o-1,o,c,u)}e.autoClear=r}_blur(t,e,r,a,o){const c=this._pingPongRenderTarget;this._halfBlur(t,c,e,r,a,"latitudinal",o),this._halfBlur(c,t,r,r,a,"longitudinal",o)}_halfBlur(t,e,r,a,o,c,u){const d=this._renderer,h=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const p=3,_=new ki(this._lodPlanes[a],h),g=h.uniforms,x=this._sizeLods[r]-1,E=isFinite(o)?Math.PI/(2*x):2*Math.PI/(2*Ir-1),A=o/E,v=isFinite(o)?1+Math.floor(p*A):Ir;v>Ir&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${v} samples when the maximum is set to ${Ir}`);const m=[];let N=0;for(let F=0;F<Ir;++F){const Y=F/A,R=Math.exp(-Y*Y/2);m.push(R),F===0?N+=R:F<v&&(N+=2*R)}for(let F=0;F<m.length;F++)m[F]=m[F]/N;g.envMap.value=t.texture,g.samples.value=v,g.weights.value=m,g.latitudinal.value=c==="latitudinal",u&&(g.poleAxis.value=u);const{_lodMax:L}=this;g.dTheta.value=E,g.mipInt.value=L-r;const P=this._sizeLods[a],B=3*P*(a>L-xs?a-L+xs:0),O=4*(this._cubeSize-P);Do(e,B,O,3*P,2*P),d.setRenderTarget(e),d.render(_,Uc)}}function oA(i){const t=[],e=[],r=[];let a=i;const o=i-xs+1+Jd.length;for(let c=0;c<o;c++){const u=Math.pow(2,a);e.push(u);let d=1/u;c>i-xs?d=Jd[c-i+xs-1]:c===0&&(d=0),r.push(d);const h=1/(u-2),p=-h,_=1+h,g=[p,p,_,p,_,_,p,p,_,_,p,_],x=6,E=6,A=3,v=2,m=1,N=new Float32Array(A*E*x),L=new Float32Array(v*E*x),P=new Float32Array(m*E*x);for(let O=0;O<x;O++){const F=O%3*2/3-1,Y=O>2?0:-1,R=[F,Y,0,F+2/3,Y,0,F+2/3,Y+1,0,F,Y,0,F+2/3,Y+1,0,F,Y+1,0];N.set(R,A*E*O),L.set(g,v*E*O);const w=[O,O,O,O,O,O];P.set(w,m*E*O)}const B=new Si;B.setAttribute("position",new Mi(N,A)),B.setAttribute("uv",new Mi(L,v)),B.setAttribute("faceIndex",new Mi(P,m)),t.push(B),a>xs&&a--}return{lodPlanes:t,sizeLods:e,sigmas:r}}function ep(i,t,e){const r=new Br(i,t,e);return r.texture.mapping=Yo,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Do(i,t,e,r,a){i.viewport.set(t,e,r,a),i.scissor.set(t,e,r,a)}function lA(i,t,e){const r=new Float32Array(Ir),a=new X(0,1,0);return new yi({name:"SphericalGaussianBlur",defines:{n:Ir,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:Ju(),fragmentShader:`

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
		`,blending:lr,depthTest:!1,depthWrite:!1})}function np(){return new yi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ju(),fragmentShader:`

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
		`,blending:lr,depthTest:!1,depthWrite:!1})}function ip(){return new yi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ju(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:lr,depthTest:!1,depthWrite:!1})}function Ju(){return`

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
	`}function cA(i){let t=new WeakMap,e=null;function r(u){if(u&&u.isTexture){const d=u.mapping,h=d===eu||d===nu,p=d===bs||d===As;if(h||p){let _=t.get(u);const g=_!==void 0?_.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==g)return e===null&&(e=new tp(i)),_=h?e.fromEquirectangular(u,_):e.fromCubemap(u,_),_.texture.pmremVersion=u.pmremVersion,t.set(u,_),_.texture;if(_!==void 0)return _.texture;{const x=u.image;return h&&x&&x.height>0||p&&x&&a(x)?(e===null&&(e=new tp(i)),_=h?e.fromEquirectangular(u):e.fromCubemap(u),_.texture.pmremVersion=u.pmremVersion,t.set(u,_),u.addEventListener("dispose",o),_.texture):null}}}return u}function a(u){let d=0;const h=6;for(let p=0;p<h;p++)u[p]!==void 0&&d++;return d===h}function o(u){const d=u.target;d.removeEventListener("dispose",o);const h=t.get(d);h!==void 0&&(t.delete(d),h.dispose())}function c(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:r,dispose:c}}function uA(i){const t={};function e(r){if(t[r]!==void 0)return t[r];let a;switch(r){case"WEBGL_depth_texture":a=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=i.getExtension(r)}return t[r]=a,a}return{has:function(r){return e(r)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(r){const a=e(r);return a===null&&ua("THREE.WebGLRenderer: "+r+" extension not supported."),a}}}function hA(i,t,e,r){const a={},o=new WeakMap;function c(_){const g=_.target;g.index!==null&&t.remove(g.index);for(const E in g.attributes)t.remove(g.attributes[E]);g.removeEventListener("dispose",c),delete a[g.id];const x=o.get(g);x&&(t.remove(x),o.delete(g)),r.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,e.memory.geometries--}function u(_,g){return a[g.id]===!0||(g.addEventListener("dispose",c),a[g.id]=!0,e.memory.geometries++),g}function d(_){const g=_.attributes;for(const x in g)t.update(g[x],i.ARRAY_BUFFER)}function h(_){const g=[],x=_.index,E=_.attributes.position;let A=0;if(x!==null){const N=x.array;A=x.version;for(let L=0,P=N.length;L<P;L+=3){const B=N[L+0],O=N[L+1],F=N[L+2];g.push(B,O,O,F,F,B)}}else if(E!==void 0){const N=E.array;A=E.version;for(let L=0,P=N.length/3-1;L<P;L+=3){const B=L+0,O=L+1,F=L+2;g.push(B,O,O,F,F,B)}}else return;const v=new(Gp(g)?Zp:Yp)(g,1);v.version=A;const m=o.get(_);m&&t.remove(m),o.set(_,v)}function p(_){const g=o.get(_);if(g){const x=_.index;x!==null&&g.version<x.version&&h(_)}else h(_);return o.get(_)}return{get:u,update:d,getWireframeAttribute:p}}function fA(i,t,e){let r;function a(g){r=g}let o,c;function u(g){o=g.type,c=g.bytesPerElement}function d(g,x){i.drawElements(r,x,o,g*c),e.update(x,r,1)}function h(g,x,E){E!==0&&(i.drawElementsInstanced(r,x,o,g*c,E),e.update(x,r,E))}function p(g,x,E){if(E===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,x,0,o,g,0,E);let v=0;for(let m=0;m<E;m++)v+=x[m];e.update(v,r,1)}function _(g,x,E,A){if(E===0)return;const v=t.get("WEBGL_multi_draw");if(v===null)for(let m=0;m<g.length;m++)h(g[m]/c,x[m],A[m]);else{v.multiDrawElementsInstancedWEBGL(r,x,0,o,g,0,A,0,E);let m=0;for(let N=0;N<E;N++)m+=x[N]*A[N];e.update(m,r,1)}}this.setMode=a,this.setIndex=u,this.render=d,this.renderInstances=h,this.renderMultiDraw=p,this.renderMultiDrawInstances=_}function dA(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function r(o,c,u){switch(e.calls++,c){case i.TRIANGLES:e.triangles+=u*(o/3);break;case i.LINES:e.lines+=u*(o/2);break;case i.LINE_STRIP:e.lines+=u*(o-1);break;case i.LINE_LOOP:e.lines+=u*o;break;case i.POINTS:e.points+=u*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",c);break}}function a(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:a,update:r}}function pA(i,t,e){const r=new WeakMap,a=new qe;function o(c,u,d){const h=c.morphTargetInfluences,p=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,_=p!==void 0?p.length:0;let g=r.get(u);if(g===void 0||g.count!==_){let w=function(){Y.dispose(),r.delete(u),u.removeEventListener("dispose",w)};var x=w;g!==void 0&&g.texture.dispose();const E=u.morphAttributes.position!==void 0,A=u.morphAttributes.normal!==void 0,v=u.morphAttributes.color!==void 0,m=u.morphAttributes.position||[],N=u.morphAttributes.normal||[],L=u.morphAttributes.color||[];let P=0;E===!0&&(P=1),A===!0&&(P=2),v===!0&&(P=3);let B=u.attributes.position.count*P,O=1;B>t.maxTextureSize&&(O=Math.ceil(B/t.maxTextureSize),B=t.maxTextureSize);const F=new Float32Array(B*O*4*_),Y=new Wp(F,B,O,_);Y.type=vi,Y.needsUpdate=!0;const R=P*4;for(let H=0;H<_;H++){const J=m[H],et=N[H],ut=L[H],at=B*O*4*H;for(let ot=0;ot<J.count;ot++){const ct=ot*R;E===!0&&(a.fromBufferAttribute(J,ot),F[at+ct+0]=a.x,F[at+ct+1]=a.y,F[at+ct+2]=a.z,F[at+ct+3]=0),A===!0&&(a.fromBufferAttribute(et,ot),F[at+ct+4]=a.x,F[at+ct+5]=a.y,F[at+ct+6]=a.z,F[at+ct+7]=0),v===!0&&(a.fromBufferAttribute(ut,ot),F[at+ct+8]=a.x,F[at+ct+9]=a.y,F[at+ct+10]=a.z,F[at+ct+11]=ut.itemSize===4?a.w:1)}}g={count:_,texture:Y,size:new jt(B,O)},r.set(u,g),u.addEventListener("dispose",w)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)d.getUniforms().setValue(i,"morphTexture",c.morphTexture,e);else{let E=0;for(let v=0;v<h.length;v++)E+=h[v];const A=u.morphTargetsRelative?1:1-E;d.getUniforms().setValue(i,"morphTargetBaseInfluence",A),d.getUniforms().setValue(i,"morphTargetInfluences",h)}d.getUniforms().setValue(i,"morphTargetsTexture",g.texture,e),d.getUniforms().setValue(i,"morphTargetsTextureSize",g.size)}return{update:o}}function mA(i,t,e,r){let a=new WeakMap;function o(d){const h=r.render.frame,p=d.geometry,_=t.get(d,p);if(a.get(_)!==h&&(t.update(_),a.set(_,h)),d.isInstancedMesh&&(d.hasEventListener("dispose",u)===!1&&d.addEventListener("dispose",u),a.get(d)!==h&&(e.update(d.instanceMatrix,i.ARRAY_BUFFER),d.instanceColor!==null&&e.update(d.instanceColor,i.ARRAY_BUFFER),a.set(d,h))),d.isSkinnedMesh){const g=d.skeleton;a.get(g)!==h&&(g.update(),a.set(g,h))}return _}function c(){a=new WeakMap}function u(d){const h=d.target;h.removeEventListener("dispose",u),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:c}}const om=new un,rp=new tm(1,1),lm=new Wp,cm=new RS,um=new Jp,sp=[],ap=[],op=new Float32Array(16),lp=new Float32Array(9),cp=new Float32Array(4);function Ls(i,t,e){const r=i[0];if(r<=0||r>0)return i;const a=t*e;let o=sp[a];if(o===void 0&&(o=new Float32Array(a),sp[a]=o),t!==0){r.toArray(o,0);for(let c=1,u=0;c!==t;++c)u+=e,i[c].toArray(o,u)}return o}function en(i,t){if(i.length!==t.length)return!1;for(let e=0,r=i.length;e<r;e++)if(i[e]!==t[e])return!1;return!0}function nn(i,t){for(let e=0,r=t.length;e<r;e++)i[e]=t[e]}function Qo(i,t){let e=ap[t];e===void 0&&(e=new Int32Array(t),ap[t]=e);for(let r=0;r!==t;++r)e[r]=i.allocateTextureUnit();return e}function _A(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function gA(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(en(e,t))return;i.uniform2fv(this.addr,t),nn(e,t)}}function vA(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(en(e,t))return;i.uniform3fv(this.addr,t),nn(e,t)}}function xA(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(en(e,t))return;i.uniform4fv(this.addr,t),nn(e,t)}}function MA(i,t){const e=this.cache,r=t.elements;if(r===void 0){if(en(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),nn(e,t)}else{if(en(e,r))return;cp.set(r),i.uniformMatrix2fv(this.addr,!1,cp),nn(e,r)}}function yA(i,t){const e=this.cache,r=t.elements;if(r===void 0){if(en(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),nn(e,t)}else{if(en(e,r))return;lp.set(r),i.uniformMatrix3fv(this.addr,!1,lp),nn(e,r)}}function SA(i,t){const e=this.cache,r=t.elements;if(r===void 0){if(en(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),nn(e,t)}else{if(en(e,r))return;op.set(r),i.uniformMatrix4fv(this.addr,!1,op),nn(e,r)}}function EA(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function TA(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(en(e,t))return;i.uniform2iv(this.addr,t),nn(e,t)}}function bA(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(en(e,t))return;i.uniform3iv(this.addr,t),nn(e,t)}}function AA(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(en(e,t))return;i.uniform4iv(this.addr,t),nn(e,t)}}function wA(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function RA(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(en(e,t))return;i.uniform2uiv(this.addr,t),nn(e,t)}}function CA(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(en(e,t))return;i.uniform3uiv(this.addr,t),nn(e,t)}}function PA(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(en(e,t))return;i.uniform4uiv(this.addr,t),nn(e,t)}}function DA(i,t,e){const r=this.cache,a=e.allocateTextureUnit();r[0]!==a&&(i.uniform1i(this.addr,a),r[0]=a);let o;this.type===i.SAMPLER_2D_SHADOW?(rp.compareFunction=kp,o=rp):o=om,e.setTexture2D(t||o,a)}function LA(i,t,e){const r=this.cache,a=e.allocateTextureUnit();r[0]!==a&&(i.uniform1i(this.addr,a),r[0]=a),e.setTexture3D(t||cm,a)}function IA(i,t,e){const r=this.cache,a=e.allocateTextureUnit();r[0]!==a&&(i.uniform1i(this.addr,a),r[0]=a),e.setTextureCube(t||um,a)}function UA(i,t,e){const r=this.cache,a=e.allocateTextureUnit();r[0]!==a&&(i.uniform1i(this.addr,a),r[0]=a),e.setTexture2DArray(t||lm,a)}function NA(i){switch(i){case 5126:return _A;case 35664:return gA;case 35665:return vA;case 35666:return xA;case 35674:return MA;case 35675:return yA;case 35676:return SA;case 5124:case 35670:return EA;case 35667:case 35671:return TA;case 35668:case 35672:return bA;case 35669:case 35673:return AA;case 5125:return wA;case 36294:return RA;case 36295:return CA;case 36296:return PA;case 35678:case 36198:case 36298:case 36306:case 35682:return DA;case 35679:case 36299:case 36307:return LA;case 35680:case 36300:case 36308:case 36293:return IA;case 36289:case 36303:case 36311:case 36292:return UA}}function FA(i,t){i.uniform1fv(this.addr,t)}function OA(i,t){const e=Ls(t,this.size,2);i.uniform2fv(this.addr,e)}function BA(i,t){const e=Ls(t,this.size,3);i.uniform3fv(this.addr,e)}function zA(i,t){const e=Ls(t,this.size,4);i.uniform4fv(this.addr,e)}function HA(i,t){const e=Ls(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function kA(i,t){const e=Ls(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function VA(i,t){const e=Ls(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function GA(i,t){i.uniform1iv(this.addr,t)}function WA(i,t){i.uniform2iv(this.addr,t)}function XA(i,t){i.uniform3iv(this.addr,t)}function qA(i,t){i.uniform4iv(this.addr,t)}function YA(i,t){i.uniform1uiv(this.addr,t)}function ZA(i,t){i.uniform2uiv(this.addr,t)}function KA(i,t){i.uniform3uiv(this.addr,t)}function $A(i,t){i.uniform4uiv(this.addr,t)}function JA(i,t,e){const r=this.cache,a=t.length,o=Qo(e,a);en(r,o)||(i.uniform1iv(this.addr,o),nn(r,o));for(let c=0;c!==a;++c)e.setTexture2D(t[c]||om,o[c])}function QA(i,t,e){const r=this.cache,a=t.length,o=Qo(e,a);en(r,o)||(i.uniform1iv(this.addr,o),nn(r,o));for(let c=0;c!==a;++c)e.setTexture3D(t[c]||cm,o[c])}function jA(i,t,e){const r=this.cache,a=t.length,o=Qo(e,a);en(r,o)||(i.uniform1iv(this.addr,o),nn(r,o));for(let c=0;c!==a;++c)e.setTextureCube(t[c]||um,o[c])}function tw(i,t,e){const r=this.cache,a=t.length,o=Qo(e,a);en(r,o)||(i.uniform1iv(this.addr,o),nn(r,o));for(let c=0;c!==a;++c)e.setTexture2DArray(t[c]||lm,o[c])}function ew(i){switch(i){case 5126:return FA;case 35664:return OA;case 35665:return BA;case 35666:return zA;case 35674:return HA;case 35675:return kA;case 35676:return VA;case 5124:case 35670:return GA;case 35667:case 35671:return WA;case 35668:case 35672:return XA;case 35669:case 35673:return qA;case 5125:return YA;case 36294:return ZA;case 36295:return KA;case 36296:return $A;case 35678:case 36198:case 36298:case 36306:case 35682:return JA;case 35679:case 36299:case 36307:return QA;case 35680:case 36300:case 36308:case 36293:return jA;case 36289:case 36303:case 36311:case 36292:return tw}}class nw{constructor(t,e,r){this.id=t,this.addr=r,this.cache=[],this.type=e.type,this.setValue=NA(e.type)}}class iw{constructor(t,e,r){this.id=t,this.addr=r,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=ew(e.type)}}class rw{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,r){const a=this.seq;for(let o=0,c=a.length;o!==c;++o){const u=a[o];u.setValue(t,e[u.id],r)}}}const zc=/(\w+)(\])?(\[|\.)?/g;function up(i,t){i.seq.push(t),i.map[t.id]=t}function sw(i,t,e){const r=i.name,a=r.length;for(zc.lastIndex=0;;){const o=zc.exec(r),c=zc.lastIndex;let u=o[1];const d=o[2]==="]",h=o[3];if(d&&(u=u|0),h===void 0||h==="["&&c+2===a){up(e,h===void 0?new nw(u,i,t):new iw(u,i,t));break}else{let _=e.map[u];_===void 0&&(_=new rw(u),up(e,_)),e=_}}}class Bo{constructor(t,e){this.seq=[],this.map={};const r=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<r;++a){const o=t.getActiveUniform(e,a),c=t.getUniformLocation(e,o.name);sw(o,c,this)}}setValue(t,e,r,a){const o=this.map[e];o!==void 0&&o.setValue(t,r,a)}setOptional(t,e,r){const a=e[r];a!==void 0&&this.setValue(t,r,a)}static upload(t,e,r,a){for(let o=0,c=e.length;o!==c;++o){const u=e[o],d=r[u.id];d.needsUpdate!==!1&&u.setValue(t,d.value,a)}}static seqWithValue(t,e){const r=[];for(let a=0,o=t.length;a!==o;++a){const c=t[a];c.id in e&&r.push(c)}return r}}function hp(i,t,e){const r=i.createShader(t);return i.shaderSource(r,e),i.compileShader(r),r}const aw=37297;let ow=0;function lw(i,t){const e=i.split(`
`),r=[],a=Math.max(t-6,0),o=Math.min(t+6,e.length);for(let c=a;c<o;c++){const u=c+1;r.push(`${u===t?">":" "} ${u}: ${e[c]}`)}return r.join(`
`)}const fp=new ae;function cw(i){Se._getMatrix(fp,Se.workingColorSpace,i);const t=`mat3( ${fp.elements.map(e=>e.toFixed(4))} )`;switch(Se.getTransfer(i)){case zo:return[t,"LinearTransferOETF"];case Le:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function dp(i,t,e){const r=i.getShaderParameter(t,i.COMPILE_STATUS),o=(i.getShaderInfoLog(t)||"").trim();if(r&&o==="")return"";const c=/ERROR: 0:(\d+)/.exec(o);if(c){const u=parseInt(c[1]);return e.toUpperCase()+`

`+o+`

`+lw(i.getShaderSource(t),u)}else return o}function uw(i,t){const e=cw(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function hw(i,t){let e;switch(t){case ky:e="Linear";break;case Vy:e="Reinhard";break;case Gy:e="Cineon";break;case Wy:e="ACESFilmic";break;case qy:e="AgX";break;case Yy:e="Neutral";break;case Xy:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Lo=new X;function fw(){Se.getLuminanceCoefficients(Lo);const i=Lo.x.toFixed(4),t=Lo.y.toFixed(4),e=Lo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function dw(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ta).join(`
`)}function pw(i){const t=[];for(const e in i){const r=i[e];r!==!1&&t.push("#define "+e+" "+r)}return t.join(`
`)}function mw(i,t){const e={},r=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let a=0;a<r;a++){const o=i.getActiveAttrib(t,a),c=o.name;let u=1;o.type===i.FLOAT_MAT2&&(u=2),o.type===i.FLOAT_MAT3&&(u=3),o.type===i.FLOAT_MAT4&&(u=4),e[c]={type:o.type,location:i.getAttribLocation(t,c),locationSize:u}}return e}function ta(i){return i!==""}function pp(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function mp(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const _w=/^[ \t]*#include +<([\w\d./]+)>/gm;function Uu(i){return i.replace(_w,vw)}const gw=new Map;function vw(i,t){let e=ce[t];if(e===void 0){const r=gw.get(t);if(r!==void 0)e=ce[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,r);else throw new Error("Can not resolve #include <"+t+">")}return Uu(e)}const xw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function _p(i){return i.replace(xw,Mw)}function Mw(i,t,e,r){let a="";for(let o=parseInt(t);o<parseInt(e);o++)a+=r.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return a}function gp(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function yw(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Dp?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===My?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===zi&&(t="SHADOWMAP_TYPE_VSM"),t}function Sw(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case bs:case As:t="ENVMAP_TYPE_CUBE";break;case Yo:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Ew(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case As:t="ENVMAP_MODE_REFRACTION";break}return t}function Tw(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case qo:t="ENVMAP_BLENDING_MULTIPLY";break;case zy:t="ENVMAP_BLENDING_MIX";break;case Hy:t="ENVMAP_BLENDING_ADD";break}return t}function bw(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:r,maxMip:e}}function Aw(i,t,e,r){const a=i.getContext(),o=e.defines;let c=e.vertexShader,u=e.fragmentShader;const d=yw(e),h=Sw(e),p=Ew(e),_=Tw(e),g=bw(e),x=dw(e),E=pw(o),A=a.createProgram();let v,m,N=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(v=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,E].filter(ta).join(`
`),v.length>0&&(v+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,E].filter(ta).join(`
`),m.length>0&&(m+=`
`)):(v=[gp(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,E,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+p:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+d:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ta).join(`
`),m=[gp(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,E,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.envMap?"#define "+p:"",e.envMap?"#define "+_:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+d:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==cr?"#define TONE_MAPPING":"",e.toneMapping!==cr?ce.tonemapping_pars_fragment:"",e.toneMapping!==cr?hw("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ce.colorspace_pars_fragment,uw("linearToOutputTexel",e.outputColorSpace),fw(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ta).join(`
`)),c=Uu(c),c=pp(c,e),c=mp(c,e),u=Uu(u),u=pp(u,e),u=mp(u,e),c=_p(c),u=_p(u),e.isRawShaderMaterial!==!0&&(N=`#version 300 es
`,v=[x,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,m=["#define varying in",e.glslVersion===Ed?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ed?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const L=N+v+c,P=N+m+u,B=hp(a,a.VERTEX_SHADER,L),O=hp(a,a.FRAGMENT_SHADER,P);a.attachShader(A,B),a.attachShader(A,O),e.index0AttributeName!==void 0?a.bindAttribLocation(A,0,e.index0AttributeName):e.morphTargets===!0&&a.bindAttribLocation(A,0,"position"),a.linkProgram(A);function F(H){if(i.debug.checkShaderErrors){const J=a.getProgramInfoLog(A)||"",et=a.getShaderInfoLog(B)||"",ut=a.getShaderInfoLog(O)||"",at=J.trim(),ot=et.trim(),ct=ut.trim();let Q=!0,yt=!0;if(a.getProgramParameter(A,a.LINK_STATUS)===!1)if(Q=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(a,A,B,O);else{const At=dp(a,B,"vertex"),Lt=dp(a,O,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(A,a.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+at+`
`+At+`
`+Lt)}else at!==""?console.warn("THREE.WebGLProgram: Program Info Log:",at):(ot===""||ct==="")&&(yt=!1);yt&&(H.diagnostics={runnable:Q,programLog:at,vertexShader:{log:ot,prefix:v},fragmentShader:{log:ct,prefix:m}})}a.deleteShader(B),a.deleteShader(O),Y=new Bo(a,A),R=mw(a,A)}let Y;this.getUniforms=function(){return Y===void 0&&F(this),Y};let R;this.getAttributes=function(){return R===void 0&&F(this),R};let w=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=a.getProgramParameter(A,aw)),w},this.destroy=function(){r.releaseStatesOfProgram(this),a.deleteProgram(A),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=ow++,this.cacheKey=t,this.usedTimes=1,this.program=A,this.vertexShader=B,this.fragmentShader=O,this}let ww=0;class Rw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,r=t.fragmentShader,a=this._getShaderStage(e),o=this._getShaderStage(r),c=this._getShaderCacheForMaterial(t);return c.has(a)===!1&&(c.add(a),a.usedTimes++),c.has(o)===!1&&(c.add(o),o.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const r of e)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let r=e.get(t);return r===void 0&&(r=new Set,e.set(t,r)),r}_getShaderStage(t){const e=this.shaderCache;let r=e.get(t);return r===void 0&&(r=new Cw(t),e.set(t,r)),r}}class Cw{constructor(t){this.id=ww++,this.code=t,this.usedTimes=0}}function Pw(i,t,e,r,a,o,c){const u=new Xp,d=new Rw,h=new Set,p=[],_=a.logarithmicDepthBuffer,g=a.vertexTextures;let x=a.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(R){return h.add(R),R===0?"uv":`uv${R}`}function v(R,w,H,J,et){const ut=J.fog,at=et.geometry,ot=R.isMeshStandardMaterial?J.environment:null,ct=(R.isMeshStandardMaterial?e:t).get(R.envMap||ot),Q=ct&&ct.mapping===Yo?ct.image.height:null,yt=E[R.type];R.precision!==null&&(x=a.getMaxPrecision(R.precision),x!==R.precision&&console.warn("THREE.WebGLProgram.getParameters:",R.precision,"not supported, using",x,"instead."));const At=at.morphAttributes.position||at.morphAttributes.normal||at.morphAttributes.color,Lt=At!==void 0?At.length:0;let ue=0;at.morphAttributes.position!==void 0&&(ue=1),at.morphAttributes.normal!==void 0&&(ue=2),at.morphAttributes.color!==void 0&&(ue=3);let Pe,Be,me,it;if(yt){const ye=_i[yt];Pe=ye.vertexShader,Be=ye.fragmentShader}else Pe=R.vertexShader,Be=R.fragmentShader,d.update(R),me=d.getVertexShaderID(R),it=d.getFragmentShaderID(R);const dt=i.getRenderTarget(),Ct=i.state.buffers.depth.getReversed(),qt=et.isInstancedMesh===!0,kt=et.isBatchedMesh===!0,he=!!R.map,Ze=!!R.matcap,I=!!ct,ge=!!R.aoMap,te=!!R.lightMap,Qt=!!R.bumpMap,wt=!!R.normalMap,Ue=!!R.displacementMap,Ft=!!R.emissiveMap,ee=!!R.metalnessMap,Te=!!R.roughnessMap,Ne=R.anisotropy>0,C=R.clearcoat>0,y=R.dispersion>0,q=R.iridescence>0,nt=R.sheen>0,ht=R.transmission>0,j=Ne&&!!R.anisotropyMap,zt=C&&!!R.clearcoatMap,vt=C&&!!R.clearcoatNormalMap,Ut=C&&!!R.clearcoatRoughnessMap,Ot=q&&!!R.iridescenceMap,mt=q&&!!R.iridescenceThicknessMap,St=nt&&!!R.sheenColorMap,Wt=nt&&!!R.sheenRoughnessMap,Bt=!!R.specularMap,Mt=!!R.specularColorMap,re=!!R.specularIntensityMap,z=ht&&!!R.transmissionMap,gt=ht&&!!R.thicknessMap,xt=!!R.gradientMap,Dt=!!R.alphaMap,pt=R.alphaTest>0,lt=!!R.alphaHash,Nt=!!R.extensions;let ne=cr;R.toneMapped&&(dt===null||dt.isXRRenderTarget===!0)&&(ne=i.toneMapping);const Re={shaderID:yt,shaderType:R.type,shaderName:R.name,vertexShader:Pe,fragmentShader:Be,defines:R.defines,customVertexShaderID:me,customFragmentShaderID:it,isRawShaderMaterial:R.isRawShaderMaterial===!0,glslVersion:R.glslVersion,precision:x,batching:kt,batchingColor:kt&&et._colorsTexture!==null,instancing:qt,instancingColor:qt&&et.instanceColor!==null,instancingMorph:qt&&et.morphTexture!==null,supportsVertexTextures:g,outputColorSpace:dt===null?i.outputColorSpace:dt.isXRRenderTarget===!0?dt.texture.colorSpace:ws,alphaToCoverage:!!R.alphaToCoverage,map:he,matcap:Ze,envMap:I,envMapMode:I&&ct.mapping,envMapCubeUVHeight:Q,aoMap:ge,lightMap:te,bumpMap:Qt,normalMap:wt,displacementMap:g&&Ue,emissiveMap:Ft,normalMapObjectSpace:wt&&R.normalMapType===Jy,normalMapTangentSpace:wt&&R.normalMapType===zr,metalnessMap:ee,roughnessMap:Te,anisotropy:Ne,anisotropyMap:j,clearcoat:C,clearcoatMap:zt,clearcoatNormalMap:vt,clearcoatRoughnessMap:Ut,dispersion:y,iridescence:q,iridescenceMap:Ot,iridescenceThicknessMap:mt,sheen:nt,sheenColorMap:St,sheenRoughnessMap:Wt,specularMap:Bt,specularColorMap:Mt,specularIntensityMap:re,transmission:ht,transmissionMap:z,thicknessMap:gt,gradientMap:xt,opaque:R.transparent===!1&&R.blending===ys&&R.alphaToCoverage===!1,alphaMap:Dt,alphaTest:pt,alphaHash:lt,combine:R.combine,mapUv:he&&A(R.map.channel),aoMapUv:ge&&A(R.aoMap.channel),lightMapUv:te&&A(R.lightMap.channel),bumpMapUv:Qt&&A(R.bumpMap.channel),normalMapUv:wt&&A(R.normalMap.channel),displacementMapUv:Ue&&A(R.displacementMap.channel),emissiveMapUv:Ft&&A(R.emissiveMap.channel),metalnessMapUv:ee&&A(R.metalnessMap.channel),roughnessMapUv:Te&&A(R.roughnessMap.channel),anisotropyMapUv:j&&A(R.anisotropyMap.channel),clearcoatMapUv:zt&&A(R.clearcoatMap.channel),clearcoatNormalMapUv:vt&&A(R.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ut&&A(R.clearcoatRoughnessMap.channel),iridescenceMapUv:Ot&&A(R.iridescenceMap.channel),iridescenceThicknessMapUv:mt&&A(R.iridescenceThicknessMap.channel),sheenColorMapUv:St&&A(R.sheenColorMap.channel),sheenRoughnessMapUv:Wt&&A(R.sheenRoughnessMap.channel),specularMapUv:Bt&&A(R.specularMap.channel),specularColorMapUv:Mt&&A(R.specularColorMap.channel),specularIntensityMapUv:re&&A(R.specularIntensityMap.channel),transmissionMapUv:z&&A(R.transmissionMap.channel),thicknessMapUv:gt&&A(R.thicknessMap.channel),alphaMapUv:Dt&&A(R.alphaMap.channel),vertexTangents:!!at.attributes.tangent&&(wt||Ne),vertexColors:R.vertexColors,vertexAlphas:R.vertexColors===!0&&!!at.attributes.color&&at.attributes.color.itemSize===4,pointsUvs:et.isPoints===!0&&!!at.attributes.uv&&(he||Dt),fog:!!ut,useFog:R.fog===!0,fogExp2:!!ut&&ut.isFogExp2,flatShading:R.flatShading===!0&&R.wireframe===!1,sizeAttenuation:R.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:Ct,skinning:et.isSkinnedMesh===!0,morphTargets:at.morphAttributes.position!==void 0,morphNormals:at.morphAttributes.normal!==void 0,morphColors:at.morphAttributes.color!==void 0,morphTargetsCount:Lt,morphTextureStride:ue,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:R.dithering,shadowMapEnabled:i.shadowMap.enabled&&H.length>0,shadowMapType:i.shadowMap.type,toneMapping:ne,decodeVideoTexture:he&&R.map.isVideoTexture===!0&&Se.getTransfer(R.map.colorSpace)===Le,decodeVideoTextureEmissive:Ft&&R.emissiveMap.isVideoTexture===!0&&Se.getTransfer(R.emissiveMap.colorSpace)===Le,premultipliedAlpha:R.premultipliedAlpha,doubleSided:R.side===Hi,flipSided:R.side===Dn,useDepthPacking:R.depthPacking>=0,depthPacking:R.depthPacking||0,index0AttributeName:R.index0AttributeName,extensionClipCullDistance:Nt&&R.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Nt&&R.extensions.multiDraw===!0||kt)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:R.customProgramCacheKey()};return Re.vertexUv1s=h.has(1),Re.vertexUv2s=h.has(2),Re.vertexUv3s=h.has(3),h.clear(),Re}function m(R){const w=[];if(R.shaderID?w.push(R.shaderID):(w.push(R.customVertexShaderID),w.push(R.customFragmentShaderID)),R.defines!==void 0)for(const H in R.defines)w.push(H),w.push(R.defines[H]);return R.isRawShaderMaterial===!1&&(N(w,R),L(w,R),w.push(i.outputColorSpace)),w.push(R.customProgramCacheKey),w.join()}function N(R,w){R.push(w.precision),R.push(w.outputColorSpace),R.push(w.envMapMode),R.push(w.envMapCubeUVHeight),R.push(w.mapUv),R.push(w.alphaMapUv),R.push(w.lightMapUv),R.push(w.aoMapUv),R.push(w.bumpMapUv),R.push(w.normalMapUv),R.push(w.displacementMapUv),R.push(w.emissiveMapUv),R.push(w.metalnessMapUv),R.push(w.roughnessMapUv),R.push(w.anisotropyMapUv),R.push(w.clearcoatMapUv),R.push(w.clearcoatNormalMapUv),R.push(w.clearcoatRoughnessMapUv),R.push(w.iridescenceMapUv),R.push(w.iridescenceThicknessMapUv),R.push(w.sheenColorMapUv),R.push(w.sheenRoughnessMapUv),R.push(w.specularMapUv),R.push(w.specularColorMapUv),R.push(w.specularIntensityMapUv),R.push(w.transmissionMapUv),R.push(w.thicknessMapUv),R.push(w.combine),R.push(w.fogExp2),R.push(w.sizeAttenuation),R.push(w.morphTargetsCount),R.push(w.morphAttributeCount),R.push(w.numDirLights),R.push(w.numPointLights),R.push(w.numSpotLights),R.push(w.numSpotLightMaps),R.push(w.numHemiLights),R.push(w.numRectAreaLights),R.push(w.numDirLightShadows),R.push(w.numPointLightShadows),R.push(w.numSpotLightShadows),R.push(w.numSpotLightShadowsWithMaps),R.push(w.numLightProbes),R.push(w.shadowMapType),R.push(w.toneMapping),R.push(w.numClippingPlanes),R.push(w.numClipIntersection),R.push(w.depthPacking)}function L(R,w){u.disableAll(),w.supportsVertexTextures&&u.enable(0),w.instancing&&u.enable(1),w.instancingColor&&u.enable(2),w.instancingMorph&&u.enable(3),w.matcap&&u.enable(4),w.envMap&&u.enable(5),w.normalMapObjectSpace&&u.enable(6),w.normalMapTangentSpace&&u.enable(7),w.clearcoat&&u.enable(8),w.iridescence&&u.enable(9),w.alphaTest&&u.enable(10),w.vertexColors&&u.enable(11),w.vertexAlphas&&u.enable(12),w.vertexUv1s&&u.enable(13),w.vertexUv2s&&u.enable(14),w.vertexUv3s&&u.enable(15),w.vertexTangents&&u.enable(16),w.anisotropy&&u.enable(17),w.alphaHash&&u.enable(18),w.batching&&u.enable(19),w.dispersion&&u.enable(20),w.batchingColor&&u.enable(21),w.gradientMap&&u.enable(22),R.push(u.mask),u.disableAll(),w.fog&&u.enable(0),w.useFog&&u.enable(1),w.flatShading&&u.enable(2),w.logarithmicDepthBuffer&&u.enable(3),w.reversedDepthBuffer&&u.enable(4),w.skinning&&u.enable(5),w.morphTargets&&u.enable(6),w.morphNormals&&u.enable(7),w.morphColors&&u.enable(8),w.premultipliedAlpha&&u.enable(9),w.shadowMapEnabled&&u.enable(10),w.doubleSided&&u.enable(11),w.flipSided&&u.enable(12),w.useDepthPacking&&u.enable(13),w.dithering&&u.enable(14),w.transmission&&u.enable(15),w.sheen&&u.enable(16),w.opaque&&u.enable(17),w.pointsUvs&&u.enable(18),w.decodeVideoTexture&&u.enable(19),w.decodeVideoTextureEmissive&&u.enable(20),w.alphaToCoverage&&u.enable(21),R.push(u.mask)}function P(R){const w=E[R.type];let H;if(w){const J=_i[w];H=kS.clone(J.uniforms)}else H=R.uniforms;return H}function B(R,w){let H;for(let J=0,et=p.length;J<et;J++){const ut=p[J];if(ut.cacheKey===w){H=ut,++H.usedTimes;break}}return H===void 0&&(H=new Aw(i,w,R,o),p.push(H)),H}function O(R){if(--R.usedTimes===0){const w=p.indexOf(R);p[w]=p[p.length-1],p.pop(),R.destroy()}}function F(R){d.remove(R)}function Y(){d.dispose()}return{getParameters:v,getProgramCacheKey:m,getUniforms:P,acquireProgram:B,releaseProgram:O,releaseShaderCache:F,programs:p,dispose:Y}}function Dw(){let i=new WeakMap;function t(c){return i.has(c)}function e(c){let u=i.get(c);return u===void 0&&(u={},i.set(c,u)),u}function r(c){i.delete(c)}function a(c,u,d){i.get(c)[u]=d}function o(){i=new WeakMap}return{has:t,get:e,remove:r,update:a,dispose:o}}function Lw(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function vp(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function xp(){const i=[];let t=0;const e=[],r=[],a=[];function o(){t=0,e.length=0,r.length=0,a.length=0}function c(_,g,x,E,A,v){let m=i[t];return m===void 0?(m={id:_.id,object:_,geometry:g,material:x,groupOrder:E,renderOrder:_.renderOrder,z:A,group:v},i[t]=m):(m.id=_.id,m.object=_,m.geometry=g,m.material=x,m.groupOrder=E,m.renderOrder=_.renderOrder,m.z=A,m.group=v),t++,m}function u(_,g,x,E,A,v){const m=c(_,g,x,E,A,v);x.transmission>0?r.push(m):x.transparent===!0?a.push(m):e.push(m)}function d(_,g,x,E,A,v){const m=c(_,g,x,E,A,v);x.transmission>0?r.unshift(m):x.transparent===!0?a.unshift(m):e.unshift(m)}function h(_,g){e.length>1&&e.sort(_||Lw),r.length>1&&r.sort(g||vp),a.length>1&&a.sort(g||vp)}function p(){for(let _=t,g=i.length;_<g;_++){const x=i[_];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:e,transmissive:r,transparent:a,init:o,push:u,unshift:d,finish:p,sort:h}}function Iw(){let i=new WeakMap;function t(r,a){const o=i.get(r);let c;return o===void 0?(c=new xp,i.set(r,[c])):a>=o.length?(c=new xp,o.push(c)):c=o[a],c}function e(){i=new WeakMap}return{get:t,dispose:e}}function Uw(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new X,color:new Zt};break;case"SpotLight":e={position:new X,direction:new X,color:new Zt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new X,color:new Zt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new X,skyColor:new Zt,groundColor:new Zt};break;case"RectAreaLight":e={color:new Zt,position:new X,halfWidth:new X,halfHeight:new X};break}return i[t.id]=e,e}}}function Nw(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new jt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new jt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new jt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Fw=0;function Ow(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Bw(i){const t=new Uw,e=Nw(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)r.probe.push(new X);const a=new X,o=new Ye,c=new Ye;function u(h){let p=0,_=0,g=0;for(let R=0;R<9;R++)r.probe[R].set(0,0,0);let x=0,E=0,A=0,v=0,m=0,N=0,L=0,P=0,B=0,O=0,F=0;h.sort(Ow);for(let R=0,w=h.length;R<w;R++){const H=h[R],J=H.color,et=H.intensity,ut=H.distance,at=H.shadow&&H.shadow.map?H.shadow.map.texture:null;if(H.isAmbientLight)p+=J.r*et,_+=J.g*et,g+=J.b*et;else if(H.isLightProbe){for(let ot=0;ot<9;ot++)r.probe[ot].addScaledVector(H.sh.coefficients[ot],et);F++}else if(H.isDirectionalLight){const ot=t.get(H);if(ot.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const ct=H.shadow,Q=e.get(H);Q.shadowIntensity=ct.intensity,Q.shadowBias=ct.bias,Q.shadowNormalBias=ct.normalBias,Q.shadowRadius=ct.radius,Q.shadowMapSize=ct.mapSize,r.directionalShadow[x]=Q,r.directionalShadowMap[x]=at,r.directionalShadowMatrix[x]=H.shadow.matrix,N++}r.directional[x]=ot,x++}else if(H.isSpotLight){const ot=t.get(H);ot.position.setFromMatrixPosition(H.matrixWorld),ot.color.copy(J).multiplyScalar(et),ot.distance=ut,ot.coneCos=Math.cos(H.angle),ot.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),ot.decay=H.decay,r.spot[A]=ot;const ct=H.shadow;if(H.map&&(r.spotLightMap[B]=H.map,B++,ct.updateMatrices(H),H.castShadow&&O++),r.spotLightMatrix[A]=ct.matrix,H.castShadow){const Q=e.get(H);Q.shadowIntensity=ct.intensity,Q.shadowBias=ct.bias,Q.shadowNormalBias=ct.normalBias,Q.shadowRadius=ct.radius,Q.shadowMapSize=ct.mapSize,r.spotShadow[A]=Q,r.spotShadowMap[A]=at,P++}A++}else if(H.isRectAreaLight){const ot=t.get(H);ot.color.copy(J).multiplyScalar(et),ot.halfWidth.set(H.width*.5,0,0),ot.halfHeight.set(0,H.height*.5,0),r.rectArea[v]=ot,v++}else if(H.isPointLight){const ot=t.get(H);if(ot.color.copy(H.color).multiplyScalar(H.intensity),ot.distance=H.distance,ot.decay=H.decay,H.castShadow){const ct=H.shadow,Q=e.get(H);Q.shadowIntensity=ct.intensity,Q.shadowBias=ct.bias,Q.shadowNormalBias=ct.normalBias,Q.shadowRadius=ct.radius,Q.shadowMapSize=ct.mapSize,Q.shadowCameraNear=ct.camera.near,Q.shadowCameraFar=ct.camera.far,r.pointShadow[E]=Q,r.pointShadowMap[E]=at,r.pointShadowMatrix[E]=H.shadow.matrix,L++}r.point[E]=ot,E++}else if(H.isHemisphereLight){const ot=t.get(H);ot.skyColor.copy(H.color).multiplyScalar(et),ot.groundColor.copy(H.groundColor).multiplyScalar(et),r.hemi[m]=ot,m++}}v>0&&(i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Tt.LTC_FLOAT_1,r.rectAreaLTC2=Tt.LTC_FLOAT_2):(r.rectAreaLTC1=Tt.LTC_HALF_1,r.rectAreaLTC2=Tt.LTC_HALF_2)),r.ambient[0]=p,r.ambient[1]=_,r.ambient[2]=g;const Y=r.hash;(Y.directionalLength!==x||Y.pointLength!==E||Y.spotLength!==A||Y.rectAreaLength!==v||Y.hemiLength!==m||Y.numDirectionalShadows!==N||Y.numPointShadows!==L||Y.numSpotShadows!==P||Y.numSpotMaps!==B||Y.numLightProbes!==F)&&(r.directional.length=x,r.spot.length=A,r.rectArea.length=v,r.point.length=E,r.hemi.length=m,r.directionalShadow.length=N,r.directionalShadowMap.length=N,r.pointShadow.length=L,r.pointShadowMap.length=L,r.spotShadow.length=P,r.spotShadowMap.length=P,r.directionalShadowMatrix.length=N,r.pointShadowMatrix.length=L,r.spotLightMatrix.length=P+B-O,r.spotLightMap.length=B,r.numSpotLightShadowsWithMaps=O,r.numLightProbes=F,Y.directionalLength=x,Y.pointLength=E,Y.spotLength=A,Y.rectAreaLength=v,Y.hemiLength=m,Y.numDirectionalShadows=N,Y.numPointShadows=L,Y.numSpotShadows=P,Y.numSpotMaps=B,Y.numLightProbes=F,r.version=Fw++)}function d(h,p){let _=0,g=0,x=0,E=0,A=0;const v=p.matrixWorldInverse;for(let m=0,N=h.length;m<N;m++){const L=h[m];if(L.isDirectionalLight){const P=r.directional[_];P.direction.setFromMatrixPosition(L.matrixWorld),a.setFromMatrixPosition(L.target.matrixWorld),P.direction.sub(a),P.direction.transformDirection(v),_++}else if(L.isSpotLight){const P=r.spot[x];P.position.setFromMatrixPosition(L.matrixWorld),P.position.applyMatrix4(v),P.direction.setFromMatrixPosition(L.matrixWorld),a.setFromMatrixPosition(L.target.matrixWorld),P.direction.sub(a),P.direction.transformDirection(v),x++}else if(L.isRectAreaLight){const P=r.rectArea[E];P.position.setFromMatrixPosition(L.matrixWorld),P.position.applyMatrix4(v),c.identity(),o.copy(L.matrixWorld),o.premultiply(v),c.extractRotation(o),P.halfWidth.set(L.width*.5,0,0),P.halfHeight.set(0,L.height*.5,0),P.halfWidth.applyMatrix4(c),P.halfHeight.applyMatrix4(c),E++}else if(L.isPointLight){const P=r.point[g];P.position.setFromMatrixPosition(L.matrixWorld),P.position.applyMatrix4(v),g++}else if(L.isHemisphereLight){const P=r.hemi[A];P.direction.setFromMatrixPosition(L.matrixWorld),P.direction.transformDirection(v),A++}}}return{setup:u,setupView:d,state:r}}function Mp(i){const t=new Bw(i),e=[],r=[];function a(p){h.camera=p,e.length=0,r.length=0}function o(p){e.push(p)}function c(p){r.push(p)}function u(){t.setup(e)}function d(p){t.setupView(e,p)}const h={lightsArray:e,shadowsArray:r,camera:null,lights:t,transmissionRenderTarget:{}};return{init:a,state:h,setupLights:u,setupLightsView:d,pushLight:o,pushShadow:c}}function zw(i){let t=new WeakMap;function e(a,o=0){const c=t.get(a);let u;return c===void 0?(u=new Mp(i),t.set(a,[u])):o>=c.length?(u=new Mp(i),c.push(u)):u=c[o],u}function r(){t=new WeakMap}return{get:e,dispose:r}}const Hw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,kw=`uniform sampler2D shadow_pass;
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
}`;function Vw(i,t,e){let r=new Qp;const a=new jt,o=new jt,c=new qe,u=new im({depthPacking:$y}),d=new rm,h={},p=e.maxTextureSize,_={[ur]:Dn,[Dn]:ur,[Hi]:Hi},g=new yi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new jt},radius:{value:4}},vertexShader:Hw,fragmentShader:kw}),x=g.clone();x.defines.HORIZONTAL_PASS=1;const E=new Si;E.setAttribute("position",new Mi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new ki(E,g),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Dp;let m=this.type;this.render=function(O,F,Y){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||O.length===0)return;const R=i.getRenderTarget(),w=i.getActiveCubeFace(),H=i.getActiveMipmapLevel(),J=i.state;J.setBlending(lr),J.buffers.depth.getReversed()===!0?J.buffers.color.setClear(0,0,0,0):J.buffers.color.setClear(1,1,1,1),J.buffers.depth.setTest(!0),J.setScissorTest(!1);const et=m!==zi&&this.type===zi,ut=m===zi&&this.type!==zi;for(let at=0,ot=O.length;at<ot;at++){const ct=O[at],Q=ct.shadow;if(Q===void 0){console.warn("THREE.WebGLShadowMap:",ct,"has no shadow.");continue}if(Q.autoUpdate===!1&&Q.needsUpdate===!1)continue;a.copy(Q.mapSize);const yt=Q.getFrameExtents();if(a.multiply(yt),o.copy(Q.mapSize),(a.x>p||a.y>p)&&(a.x>p&&(o.x=Math.floor(p/yt.x),a.x=o.x*yt.x,Q.mapSize.x=o.x),a.y>p&&(o.y=Math.floor(p/yt.y),a.y=o.y*yt.y,Q.mapSize.y=o.y)),Q.map===null||et===!0||ut===!0){const Lt=this.type!==zi?{minFilter:fi,magFilter:fi}:{};Q.map!==null&&Q.map.dispose(),Q.map=new Br(a.x,a.y,Lt),Q.map.texture.name=ct.name+".shadowMap",Q.camera.updateProjectionMatrix()}i.setRenderTarget(Q.map),i.clear();const At=Q.getViewportCount();for(let Lt=0;Lt<At;Lt++){const ue=Q.getViewport(Lt);c.set(o.x*ue.x,o.y*ue.y,o.x*ue.z,o.y*ue.w),J.viewport(c),Q.updateMatrices(ct,Lt),r=Q.getFrustum(),P(F,Y,Q.camera,ct,this.type)}Q.isPointLightShadow!==!0&&this.type===zi&&N(Q,Y),Q.needsUpdate=!1}m=this.type,v.needsUpdate=!1,i.setRenderTarget(R,w,H)};function N(O,F){const Y=t.update(A);g.defines.VSM_SAMPLES!==O.blurSamples&&(g.defines.VSM_SAMPLES=O.blurSamples,x.defines.VSM_SAMPLES=O.blurSamples,g.needsUpdate=!0,x.needsUpdate=!0),O.mapPass===null&&(O.mapPass=new Br(a.x,a.y)),g.uniforms.shadow_pass.value=O.map.texture,g.uniforms.resolution.value=O.mapSize,g.uniforms.radius.value=O.radius,i.setRenderTarget(O.mapPass),i.clear(),i.renderBufferDirect(F,null,Y,g,A,null),x.uniforms.shadow_pass.value=O.mapPass.texture,x.uniforms.resolution.value=O.mapSize,x.uniforms.radius.value=O.radius,i.setRenderTarget(O.map),i.clear(),i.renderBufferDirect(F,null,Y,x,A,null)}function L(O,F,Y,R){let w=null;const H=Y.isPointLight===!0?O.customDistanceMaterial:O.customDepthMaterial;if(H!==void 0)w=H;else if(w=Y.isPointLight===!0?d:u,i.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0||F.alphaToCoverage===!0){const J=w.uuid,et=F.uuid;let ut=h[J];ut===void 0&&(ut={},h[J]=ut);let at=ut[et];at===void 0&&(at=w.clone(),ut[et]=at,F.addEventListener("dispose",B)),w=at}if(w.visible=F.visible,w.wireframe=F.wireframe,R===zi?w.side=F.shadowSide!==null?F.shadowSide:F.side:w.side=F.shadowSide!==null?F.shadowSide:_[F.side],w.alphaMap=F.alphaMap,w.alphaTest=F.alphaToCoverage===!0?.5:F.alphaTest,w.map=F.map,w.clipShadows=F.clipShadows,w.clippingPlanes=F.clippingPlanes,w.clipIntersection=F.clipIntersection,w.displacementMap=F.displacementMap,w.displacementScale=F.displacementScale,w.displacementBias=F.displacementBias,w.wireframeLinewidth=F.wireframeLinewidth,w.linewidth=F.linewidth,Y.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const J=i.properties.get(w);J.light=Y}return w}function P(O,F,Y,R,w){if(O.visible===!1)return;if(O.layers.test(F.layers)&&(O.isMesh||O.isLine||O.isPoints)&&(O.castShadow||O.receiveShadow&&w===zi)&&(!O.frustumCulled||r.intersectsObject(O))){O.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,O.matrixWorld);const et=t.update(O),ut=O.material;if(Array.isArray(ut)){const at=et.groups;for(let ot=0,ct=at.length;ot<ct;ot++){const Q=at[ot],yt=ut[Q.materialIndex];if(yt&&yt.visible){const At=L(O,yt,R,w);O.onBeforeShadow(i,O,F,Y,et,At,Q),i.renderBufferDirect(Y,null,et,At,O,Q),O.onAfterShadow(i,O,F,Y,et,At,Q)}}}else if(ut.visible){const at=L(O,ut,R,w);O.onBeforeShadow(i,O,F,Y,et,at,null),i.renderBufferDirect(Y,null,et,at,O,null),O.onAfterShadow(i,O,F,Y,et,at,null)}}const J=O.children;for(let et=0,ut=J.length;et<ut;et++)P(J[et],F,Y,R,w)}function B(O){O.target.removeEventListener("dispose",B);for(const Y in h){const R=h[Y],w=O.target.uuid;w in R&&(R[w].dispose(),delete R[w])}}}const Gw={[Zc]:Kc,[$c]:jc,[Jc]:tu,[Ts]:Qc,[Kc]:Zc,[jc]:$c,[tu]:Jc,[Qc]:Ts};function Ww(i,t){function e(){let z=!1;const gt=new qe;let xt=null;const Dt=new qe(0,0,0,0);return{setMask:function(pt){xt!==pt&&!z&&(i.colorMask(pt,pt,pt,pt),xt=pt)},setLocked:function(pt){z=pt},setClear:function(pt,lt,Nt,ne,Re){Re===!0&&(pt*=ne,lt*=ne,Nt*=ne),gt.set(pt,lt,Nt,ne),Dt.equals(gt)===!1&&(i.clearColor(pt,lt,Nt,ne),Dt.copy(gt))},reset:function(){z=!1,xt=null,Dt.set(-1,0,0,0)}}}function r(){let z=!1,gt=!1,xt=null,Dt=null,pt=null;return{setReversed:function(lt){if(gt!==lt){const Nt=t.get("EXT_clip_control");lt?Nt.clipControlEXT(Nt.LOWER_LEFT_EXT,Nt.ZERO_TO_ONE_EXT):Nt.clipControlEXT(Nt.LOWER_LEFT_EXT,Nt.NEGATIVE_ONE_TO_ONE_EXT),gt=lt;const ne=pt;pt=null,this.setClear(ne)}},getReversed:function(){return gt},setTest:function(lt){lt?dt(i.DEPTH_TEST):Ct(i.DEPTH_TEST)},setMask:function(lt){xt!==lt&&!z&&(i.depthMask(lt),xt=lt)},setFunc:function(lt){if(gt&&(lt=Gw[lt]),Dt!==lt){switch(lt){case Zc:i.depthFunc(i.NEVER);break;case Kc:i.depthFunc(i.ALWAYS);break;case $c:i.depthFunc(i.LESS);break;case Ts:i.depthFunc(i.LEQUAL);break;case Jc:i.depthFunc(i.EQUAL);break;case Qc:i.depthFunc(i.GEQUAL);break;case jc:i.depthFunc(i.GREATER);break;case tu:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Dt=lt}},setLocked:function(lt){z=lt},setClear:function(lt){pt!==lt&&(gt&&(lt=1-lt),i.clearDepth(lt),pt=lt)},reset:function(){z=!1,xt=null,Dt=null,pt=null,gt=!1}}}function a(){let z=!1,gt=null,xt=null,Dt=null,pt=null,lt=null,Nt=null,ne=null,Re=null;return{setTest:function(ye){z||(ye?dt(i.STENCIL_TEST):Ct(i.STENCIL_TEST))},setMask:function(ye){gt!==ye&&!z&&(i.stencilMask(ye),gt=ye)},setFunc:function(ye,ti,kn){(xt!==ye||Dt!==ti||pt!==kn)&&(i.stencilFunc(ye,ti,kn),xt=ye,Dt=ti,pt=kn)},setOp:function(ye,ti,kn){(lt!==ye||Nt!==ti||ne!==kn)&&(i.stencilOp(ye,ti,kn),lt=ye,Nt=ti,ne=kn)},setLocked:function(ye){z=ye},setClear:function(ye){Re!==ye&&(i.clearStencil(ye),Re=ye)},reset:function(){z=!1,gt=null,xt=null,Dt=null,pt=null,lt=null,Nt=null,ne=null,Re=null}}}const o=new e,c=new r,u=new a,d=new WeakMap,h=new WeakMap;let p={},_={},g=new WeakMap,x=[],E=null,A=!1,v=null,m=null,N=null,L=null,P=null,B=null,O=null,F=new Zt(0,0,0),Y=0,R=!1,w=null,H=null,J=null,et=null,ut=null;const at=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ot=!1,ct=0;const Q=i.getParameter(i.VERSION);Q.indexOf("WebGL")!==-1?(ct=parseFloat(/^WebGL (\d)/.exec(Q)[1]),ot=ct>=1):Q.indexOf("OpenGL ES")!==-1&&(ct=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),ot=ct>=2);let yt=null,At={};const Lt=i.getParameter(i.SCISSOR_BOX),ue=i.getParameter(i.VIEWPORT),Pe=new qe().fromArray(Lt),Be=new qe().fromArray(ue);function me(z,gt,xt,Dt){const pt=new Uint8Array(4),lt=i.createTexture();i.bindTexture(z,lt),i.texParameteri(z,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(z,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Nt=0;Nt<xt;Nt++)z===i.TEXTURE_3D||z===i.TEXTURE_2D_ARRAY?i.texImage3D(gt,0,i.RGBA,1,1,Dt,0,i.RGBA,i.UNSIGNED_BYTE,pt):i.texImage2D(gt+Nt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,pt);return lt}const it={};it[i.TEXTURE_2D]=me(i.TEXTURE_2D,i.TEXTURE_2D,1),it[i.TEXTURE_CUBE_MAP]=me(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),it[i.TEXTURE_2D_ARRAY]=me(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),it[i.TEXTURE_3D]=me(i.TEXTURE_3D,i.TEXTURE_3D,1,1),o.setClear(0,0,0,1),c.setClear(1),u.setClear(0),dt(i.DEPTH_TEST),c.setFunc(Ts),Qt(!1),wt(gd),dt(i.CULL_FACE),ge(lr);function dt(z){p[z]!==!0&&(i.enable(z),p[z]=!0)}function Ct(z){p[z]!==!1&&(i.disable(z),p[z]=!1)}function qt(z,gt){return _[z]!==gt?(i.bindFramebuffer(z,gt),_[z]=gt,z===i.DRAW_FRAMEBUFFER&&(_[i.FRAMEBUFFER]=gt),z===i.FRAMEBUFFER&&(_[i.DRAW_FRAMEBUFFER]=gt),!0):!1}function kt(z,gt){let xt=x,Dt=!1;if(z){xt=g.get(gt),xt===void 0&&(xt=[],g.set(gt,xt));const pt=z.textures;if(xt.length!==pt.length||xt[0]!==i.COLOR_ATTACHMENT0){for(let lt=0,Nt=pt.length;lt<Nt;lt++)xt[lt]=i.COLOR_ATTACHMENT0+lt;xt.length=pt.length,Dt=!0}}else xt[0]!==i.BACK&&(xt[0]=i.BACK,Dt=!0);Dt&&i.drawBuffers(xt)}function he(z){return E!==z?(i.useProgram(z),E=z,!0):!1}const Ze={[Lr]:i.FUNC_ADD,[Sy]:i.FUNC_SUBTRACT,[Ey]:i.FUNC_REVERSE_SUBTRACT};Ze[Ty]=i.MIN,Ze[by]=i.MAX;const I={[Ay]:i.ZERO,[wy]:i.ONE,[Ry]:i.SRC_COLOR,[qc]:i.SRC_ALPHA,[Uy]:i.SRC_ALPHA_SATURATE,[Ly]:i.DST_COLOR,[Py]:i.DST_ALPHA,[Cy]:i.ONE_MINUS_SRC_COLOR,[Yc]:i.ONE_MINUS_SRC_ALPHA,[Iy]:i.ONE_MINUS_DST_COLOR,[Dy]:i.ONE_MINUS_DST_ALPHA,[Ny]:i.CONSTANT_COLOR,[Fy]:i.ONE_MINUS_CONSTANT_COLOR,[Oy]:i.CONSTANT_ALPHA,[By]:i.ONE_MINUS_CONSTANT_ALPHA};function ge(z,gt,xt,Dt,pt,lt,Nt,ne,Re,ye){if(z===lr){A===!0&&(Ct(i.BLEND),A=!1);return}if(A===!1&&(dt(i.BLEND),A=!0),z!==yy){if(z!==v||ye!==R){if((m!==Lr||P!==Lr)&&(i.blendEquation(i.FUNC_ADD),m=Lr,P=Lr),ye)switch(z){case ys:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case vd:i.blendFunc(i.ONE,i.ONE);break;case xd:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Md:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}else switch(z){case ys:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case vd:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case xd:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Md:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}N=null,L=null,B=null,O=null,F.set(0,0,0),Y=0,v=z,R=ye}return}pt=pt||gt,lt=lt||xt,Nt=Nt||Dt,(gt!==m||pt!==P)&&(i.blendEquationSeparate(Ze[gt],Ze[pt]),m=gt,P=pt),(xt!==N||Dt!==L||lt!==B||Nt!==O)&&(i.blendFuncSeparate(I[xt],I[Dt],I[lt],I[Nt]),N=xt,L=Dt,B=lt,O=Nt),(ne.equals(F)===!1||Re!==Y)&&(i.blendColor(ne.r,ne.g,ne.b,Re),F.copy(ne),Y=Re),v=z,R=!1}function te(z,gt){z.side===Hi?Ct(i.CULL_FACE):dt(i.CULL_FACE);let xt=z.side===Dn;gt&&(xt=!xt),Qt(xt),z.blending===ys&&z.transparent===!1?ge(lr):ge(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),c.setFunc(z.depthFunc),c.setTest(z.depthTest),c.setMask(z.depthWrite),o.setMask(z.colorWrite);const Dt=z.stencilWrite;u.setTest(Dt),Dt&&(u.setMask(z.stencilWriteMask),u.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),u.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),Ft(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?dt(i.SAMPLE_ALPHA_TO_COVERAGE):Ct(i.SAMPLE_ALPHA_TO_COVERAGE)}function Qt(z){w!==z&&(z?i.frontFace(i.CW):i.frontFace(i.CCW),w=z)}function wt(z){z!==vy?(dt(i.CULL_FACE),z!==H&&(z===gd?i.cullFace(i.BACK):z===xy?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ct(i.CULL_FACE),H=z}function Ue(z){z!==J&&(ot&&i.lineWidth(z),J=z)}function Ft(z,gt,xt){z?(dt(i.POLYGON_OFFSET_FILL),(et!==gt||ut!==xt)&&(i.polygonOffset(gt,xt),et=gt,ut=xt)):Ct(i.POLYGON_OFFSET_FILL)}function ee(z){z?dt(i.SCISSOR_TEST):Ct(i.SCISSOR_TEST)}function Te(z){z===void 0&&(z=i.TEXTURE0+at-1),yt!==z&&(i.activeTexture(z),yt=z)}function Ne(z,gt,xt){xt===void 0&&(yt===null?xt=i.TEXTURE0+at-1:xt=yt);let Dt=At[xt];Dt===void 0&&(Dt={type:void 0,texture:void 0},At[xt]=Dt),(Dt.type!==z||Dt.texture!==gt)&&(yt!==xt&&(i.activeTexture(xt),yt=xt),i.bindTexture(z,gt||it[z]),Dt.type=z,Dt.texture=gt)}function C(){const z=At[yt];z!==void 0&&z.type!==void 0&&(i.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function y(){try{i.compressedTexImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function q(){try{i.compressedTexImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function nt(){try{i.texSubImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ht(){try{i.texSubImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function j(){try{i.compressedTexSubImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function zt(){try{i.compressedTexSubImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function vt(){try{i.texStorage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ut(){try{i.texStorage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ot(){try{i.texImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function mt(){try{i.texImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function St(z){Pe.equals(z)===!1&&(i.scissor(z.x,z.y,z.z,z.w),Pe.copy(z))}function Wt(z){Be.equals(z)===!1&&(i.viewport(z.x,z.y,z.z,z.w),Be.copy(z))}function Bt(z,gt){let xt=h.get(gt);xt===void 0&&(xt=new WeakMap,h.set(gt,xt));let Dt=xt.get(z);Dt===void 0&&(Dt=i.getUniformBlockIndex(gt,z.name),xt.set(z,Dt))}function Mt(z,gt){const Dt=h.get(gt).get(z);d.get(gt)!==Dt&&(i.uniformBlockBinding(gt,Dt,z.__bindingPointIndex),d.set(gt,Dt))}function re(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),c.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),p={},yt=null,At={},_={},g=new WeakMap,x=[],E=null,A=!1,v=null,m=null,N=null,L=null,P=null,B=null,O=null,F=new Zt(0,0,0),Y=0,R=!1,w=null,H=null,J=null,et=null,ut=null,Pe.set(0,0,i.canvas.width,i.canvas.height),Be.set(0,0,i.canvas.width,i.canvas.height),o.reset(),c.reset(),u.reset()}return{buffers:{color:o,depth:c,stencil:u},enable:dt,disable:Ct,bindFramebuffer:qt,drawBuffers:kt,useProgram:he,setBlending:ge,setMaterial:te,setFlipSided:Qt,setCullFace:wt,setLineWidth:Ue,setPolygonOffset:Ft,setScissorTest:ee,activeTexture:Te,bindTexture:Ne,unbindTexture:C,compressedTexImage2D:y,compressedTexImage3D:q,texImage2D:Ot,texImage3D:mt,updateUBOMapping:Bt,uniformBlockBinding:Mt,texStorage2D:vt,texStorage3D:Ut,texSubImage2D:nt,texSubImage3D:ht,compressedTexSubImage2D:j,compressedTexSubImage3D:zt,scissor:St,viewport:Wt,reset:re}}function Xw(i,t,e,r,a,o,c){const u=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new jt,p=new WeakMap;let _;const g=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(C,y){return x?new OffscreenCanvas(C,y):ko("canvas")}function A(C,y,q){let nt=1;const ht=Ne(C);if((ht.width>q||ht.height>q)&&(nt=q/Math.max(ht.width,ht.height)),nt<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const j=Math.floor(nt*ht.width),zt=Math.floor(nt*ht.height);_===void 0&&(_=E(j,zt));const vt=y?E(j,zt):_;return vt.width=j,vt.height=zt,vt.getContext("2d").drawImage(C,0,0,j,zt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ht.width+"x"+ht.height+") to ("+j+"x"+zt+")."),vt}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ht.width+"x"+ht.height+")."),C;return C}function v(C){return C.generateMipmaps}function m(C){i.generateMipmap(C)}function N(C){return C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?i.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function L(C,y,q,nt,ht=!1){if(C!==null){if(i[C]!==void 0)return i[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let j=y;if(y===i.RED&&(q===i.FLOAT&&(j=i.R32F),q===i.HALF_FLOAT&&(j=i.R16F),q===i.UNSIGNED_BYTE&&(j=i.R8)),y===i.RED_INTEGER&&(q===i.UNSIGNED_BYTE&&(j=i.R8UI),q===i.UNSIGNED_SHORT&&(j=i.R16UI),q===i.UNSIGNED_INT&&(j=i.R32UI),q===i.BYTE&&(j=i.R8I),q===i.SHORT&&(j=i.R16I),q===i.INT&&(j=i.R32I)),y===i.RG&&(q===i.FLOAT&&(j=i.RG32F),q===i.HALF_FLOAT&&(j=i.RG16F),q===i.UNSIGNED_BYTE&&(j=i.RG8)),y===i.RG_INTEGER&&(q===i.UNSIGNED_BYTE&&(j=i.RG8UI),q===i.UNSIGNED_SHORT&&(j=i.RG16UI),q===i.UNSIGNED_INT&&(j=i.RG32UI),q===i.BYTE&&(j=i.RG8I),q===i.SHORT&&(j=i.RG16I),q===i.INT&&(j=i.RG32I)),y===i.RGB_INTEGER&&(q===i.UNSIGNED_BYTE&&(j=i.RGB8UI),q===i.UNSIGNED_SHORT&&(j=i.RGB16UI),q===i.UNSIGNED_INT&&(j=i.RGB32UI),q===i.BYTE&&(j=i.RGB8I),q===i.SHORT&&(j=i.RGB16I),q===i.INT&&(j=i.RGB32I)),y===i.RGBA_INTEGER&&(q===i.UNSIGNED_BYTE&&(j=i.RGBA8UI),q===i.UNSIGNED_SHORT&&(j=i.RGBA16UI),q===i.UNSIGNED_INT&&(j=i.RGBA32UI),q===i.BYTE&&(j=i.RGBA8I),q===i.SHORT&&(j=i.RGBA16I),q===i.INT&&(j=i.RGBA32I)),y===i.RGB&&(q===i.UNSIGNED_INT_5_9_9_9_REV&&(j=i.RGB9_E5),q===i.UNSIGNED_INT_10F_11F_11F_REV&&(j=i.R11F_G11F_B10F)),y===i.RGBA){const zt=ht?zo:Se.getTransfer(nt);q===i.FLOAT&&(j=i.RGBA32F),q===i.HALF_FLOAT&&(j=i.RGBA16F),q===i.UNSIGNED_BYTE&&(j=zt===Le?i.SRGB8_ALPHA8:i.RGBA8),q===i.UNSIGNED_SHORT_4_4_4_4&&(j=i.RGBA4),q===i.UNSIGNED_SHORT_5_5_5_1&&(j=i.RGB5_A1)}return(j===i.R16F||j===i.R32F||j===i.RG16F||j===i.RG32F||j===i.RGBA16F||j===i.RGBA32F)&&t.get("EXT_color_buffer_float"),j}function P(C,y){let q;return C?y===null||y===Fr||y===aa?q=i.DEPTH24_STENCIL8:y===vi?q=i.DEPTH32F_STENCIL8:y===sa&&(q=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Fr||y===aa?q=i.DEPTH_COMPONENT24:y===vi?q=i.DEPTH_COMPONENT32F:y===sa&&(q=i.DEPTH_COMPONENT16),q}function B(C,y){return v(C)===!0||C.isFramebufferTexture&&C.minFilter!==fi&&C.minFilter!==gi?Math.log2(Math.max(y.width,y.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?y.mipmaps.length:1}function O(C){const y=C.target;y.removeEventListener("dispose",O),Y(y),y.isVideoTexture&&p.delete(y)}function F(C){const y=C.target;y.removeEventListener("dispose",F),w(y)}function Y(C){const y=r.get(C);if(y.__webglInit===void 0)return;const q=C.source,nt=g.get(q);if(nt){const ht=nt[y.__cacheKey];ht.usedTimes--,ht.usedTimes===0&&R(C),Object.keys(nt).length===0&&g.delete(q)}r.remove(C)}function R(C){const y=r.get(C);i.deleteTexture(y.__webglTexture);const q=C.source,nt=g.get(q);delete nt[y.__cacheKey],c.memory.textures--}function w(C){const y=r.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),r.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let nt=0;nt<6;nt++){if(Array.isArray(y.__webglFramebuffer[nt]))for(let ht=0;ht<y.__webglFramebuffer[nt].length;ht++)i.deleteFramebuffer(y.__webglFramebuffer[nt][ht]);else i.deleteFramebuffer(y.__webglFramebuffer[nt]);y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer[nt])}else{if(Array.isArray(y.__webglFramebuffer))for(let nt=0;nt<y.__webglFramebuffer.length;nt++)i.deleteFramebuffer(y.__webglFramebuffer[nt]);else i.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&i.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let nt=0;nt<y.__webglColorRenderbuffer.length;nt++)y.__webglColorRenderbuffer[nt]&&i.deleteRenderbuffer(y.__webglColorRenderbuffer[nt]);y.__webglDepthRenderbuffer&&i.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const q=C.textures;for(let nt=0,ht=q.length;nt<ht;nt++){const j=r.get(q[nt]);j.__webglTexture&&(i.deleteTexture(j.__webglTexture),c.memory.textures--),r.remove(q[nt])}r.remove(C)}let H=0;function J(){H=0}function et(){const C=H;return C>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+a.maxTextures),H+=1,C}function ut(C){const y=[];return y.push(C.wrapS),y.push(C.wrapT),y.push(C.wrapR||0),y.push(C.magFilter),y.push(C.minFilter),y.push(C.anisotropy),y.push(C.internalFormat),y.push(C.format),y.push(C.type),y.push(C.generateMipmaps),y.push(C.premultiplyAlpha),y.push(C.flipY),y.push(C.unpackAlignment),y.push(C.colorSpace),y.join()}function at(C,y){const q=r.get(C);if(C.isVideoTexture&&ee(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&q.__version!==C.version){const nt=C.image;if(nt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(nt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{it(q,C,y);return}}else C.isExternalTexture&&(q.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,q.__webglTexture,i.TEXTURE0+y)}function ot(C,y){const q=r.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&q.__version!==C.version){it(q,C,y);return}e.bindTexture(i.TEXTURE_2D_ARRAY,q.__webglTexture,i.TEXTURE0+y)}function ct(C,y){const q=r.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&q.__version!==C.version){it(q,C,y);return}e.bindTexture(i.TEXTURE_3D,q.__webglTexture,i.TEXTURE0+y)}function Q(C,y){const q=r.get(C);if(C.version>0&&q.__version!==C.version){dt(q,C,y);return}e.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture,i.TEXTURE0+y)}const yt={[iu]:i.REPEAT,[Ur]:i.CLAMP_TO_EDGE,[ru]:i.MIRRORED_REPEAT},At={[fi]:i.NEAREST,[Zy]:i.NEAREST_MIPMAP_NEAREST,[oo]:i.NEAREST_MIPMAP_LINEAR,[gi]:i.LINEAR,[uc]:i.LINEAR_MIPMAP_NEAREST,[Nr]:i.LINEAR_MIPMAP_LINEAR},Lt={[Qy]:i.NEVER,[rS]:i.ALWAYS,[jy]:i.LESS,[kp]:i.LEQUAL,[tS]:i.EQUAL,[iS]:i.GEQUAL,[eS]:i.GREATER,[nS]:i.NOTEQUAL};function ue(C,y){if(y.type===vi&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===gi||y.magFilter===uc||y.magFilter===oo||y.magFilter===Nr||y.minFilter===gi||y.minFilter===uc||y.minFilter===oo||y.minFilter===Nr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(C,i.TEXTURE_WRAP_S,yt[y.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,yt[y.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,yt[y.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,At[y.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,At[y.minFilter]),y.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,Lt[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===fi||y.minFilter!==oo&&y.minFilter!==Nr||y.type===vi&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||r.get(y).__currentAnisotropy){const q=t.get("EXT_texture_filter_anisotropic");i.texParameterf(C,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,a.getMaxAnisotropy())),r.get(y).__currentAnisotropy=y.anisotropy}}}function Pe(C,y){let q=!1;C.__webglInit===void 0&&(C.__webglInit=!0,y.addEventListener("dispose",O));const nt=y.source;let ht=g.get(nt);ht===void 0&&(ht={},g.set(nt,ht));const j=ut(y);if(j!==C.__cacheKey){ht[j]===void 0&&(ht[j]={texture:i.createTexture(),usedTimes:0},c.memory.textures++,q=!0),ht[j].usedTimes++;const zt=ht[C.__cacheKey];zt!==void 0&&(ht[C.__cacheKey].usedTimes--,zt.usedTimes===0&&R(y)),C.__cacheKey=j,C.__webglTexture=ht[j].texture}return q}function Be(C,y,q){return Math.floor(Math.floor(C/q)/y)}function me(C,y,q,nt){const j=C.updateRanges;if(j.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,y.width,y.height,q,nt,y.data);else{j.sort((mt,St)=>mt.start-St.start);let zt=0;for(let mt=1;mt<j.length;mt++){const St=j[zt],Wt=j[mt],Bt=St.start+St.count,Mt=Be(Wt.start,y.width,4),re=Be(St.start,y.width,4);Wt.start<=Bt+1&&Mt===re&&Be(Wt.start+Wt.count-1,y.width,4)===Mt?St.count=Math.max(St.count,Wt.start+Wt.count-St.start):(++zt,j[zt]=Wt)}j.length=zt+1;const vt=i.getParameter(i.UNPACK_ROW_LENGTH),Ut=i.getParameter(i.UNPACK_SKIP_PIXELS),Ot=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,y.width);for(let mt=0,St=j.length;mt<St;mt++){const Wt=j[mt],Bt=Math.floor(Wt.start/4),Mt=Math.ceil(Wt.count/4),re=Bt%y.width,z=Math.floor(Bt/y.width),gt=Mt,xt=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,re),i.pixelStorei(i.UNPACK_SKIP_ROWS,z),e.texSubImage2D(i.TEXTURE_2D,0,re,z,gt,xt,q,nt,y.data)}C.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,vt),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Ut),i.pixelStorei(i.UNPACK_SKIP_ROWS,Ot)}}function it(C,y,q){let nt=i.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(nt=i.TEXTURE_2D_ARRAY),y.isData3DTexture&&(nt=i.TEXTURE_3D);const ht=Pe(C,y),j=y.source;e.bindTexture(nt,C.__webglTexture,i.TEXTURE0+q);const zt=r.get(j);if(j.version!==zt.__version||ht===!0){e.activeTexture(i.TEXTURE0+q);const vt=Se.getPrimaries(Se.workingColorSpace),Ut=y.colorSpace===or?null:Se.getPrimaries(y.colorSpace),Ot=y.colorSpace===or||vt===Ut?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ot);let mt=A(y.image,!1,a.maxTextureSize);mt=Te(y,mt);const St=o.convert(y.format,y.colorSpace),Wt=o.convert(y.type);let Bt=L(y.internalFormat,St,Wt,y.colorSpace,y.isVideoTexture);ue(nt,y);let Mt;const re=y.mipmaps,z=y.isVideoTexture!==!0,gt=zt.__version===void 0||ht===!0,xt=j.dataReady,Dt=B(y,mt);if(y.isDepthTexture)Bt=P(y.format===la,y.type),gt&&(z?e.texStorage2D(i.TEXTURE_2D,1,Bt,mt.width,mt.height):e.texImage2D(i.TEXTURE_2D,0,Bt,mt.width,mt.height,0,St,Wt,null));else if(y.isDataTexture)if(re.length>0){z&&gt&&e.texStorage2D(i.TEXTURE_2D,Dt,Bt,re[0].width,re[0].height);for(let pt=0,lt=re.length;pt<lt;pt++)Mt=re[pt],z?xt&&e.texSubImage2D(i.TEXTURE_2D,pt,0,0,Mt.width,Mt.height,St,Wt,Mt.data):e.texImage2D(i.TEXTURE_2D,pt,Bt,Mt.width,Mt.height,0,St,Wt,Mt.data);y.generateMipmaps=!1}else z?(gt&&e.texStorage2D(i.TEXTURE_2D,Dt,Bt,mt.width,mt.height),xt&&me(y,mt,St,Wt)):e.texImage2D(i.TEXTURE_2D,0,Bt,mt.width,mt.height,0,St,Wt,mt.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){z&&gt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Dt,Bt,re[0].width,re[0].height,mt.depth);for(let pt=0,lt=re.length;pt<lt;pt++)if(Mt=re[pt],y.format!==hi)if(St!==null)if(z){if(xt)if(y.layerUpdates.size>0){const Nt=$d(Mt.width,Mt.height,y.format,y.type);for(const ne of y.layerUpdates){const Re=Mt.data.subarray(ne*Nt/Mt.data.BYTES_PER_ELEMENT,(ne+1)*Nt/Mt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,pt,0,0,ne,Mt.width,Mt.height,1,St,Re)}y.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,pt,0,0,0,Mt.width,Mt.height,mt.depth,St,Mt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,pt,Bt,Mt.width,Mt.height,mt.depth,0,Mt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else z?xt&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,pt,0,0,0,Mt.width,Mt.height,mt.depth,St,Wt,Mt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,pt,Bt,Mt.width,Mt.height,mt.depth,0,St,Wt,Mt.data)}else{z&&gt&&e.texStorage2D(i.TEXTURE_2D,Dt,Bt,re[0].width,re[0].height);for(let pt=0,lt=re.length;pt<lt;pt++)Mt=re[pt],y.format!==hi?St!==null?z?xt&&e.compressedTexSubImage2D(i.TEXTURE_2D,pt,0,0,Mt.width,Mt.height,St,Mt.data):e.compressedTexImage2D(i.TEXTURE_2D,pt,Bt,Mt.width,Mt.height,0,Mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):z?xt&&e.texSubImage2D(i.TEXTURE_2D,pt,0,0,Mt.width,Mt.height,St,Wt,Mt.data):e.texImage2D(i.TEXTURE_2D,pt,Bt,Mt.width,Mt.height,0,St,Wt,Mt.data)}else if(y.isDataArrayTexture)if(z){if(gt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Dt,Bt,mt.width,mt.height,mt.depth),xt)if(y.layerUpdates.size>0){const pt=$d(mt.width,mt.height,y.format,y.type);for(const lt of y.layerUpdates){const Nt=mt.data.subarray(lt*pt/mt.data.BYTES_PER_ELEMENT,(lt+1)*pt/mt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,lt,mt.width,mt.height,1,St,Wt,Nt)}y.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,mt.width,mt.height,mt.depth,St,Wt,mt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Bt,mt.width,mt.height,mt.depth,0,St,Wt,mt.data);else if(y.isData3DTexture)z?(gt&&e.texStorage3D(i.TEXTURE_3D,Dt,Bt,mt.width,mt.height,mt.depth),xt&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,mt.width,mt.height,mt.depth,St,Wt,mt.data)):e.texImage3D(i.TEXTURE_3D,0,Bt,mt.width,mt.height,mt.depth,0,St,Wt,mt.data);else if(y.isFramebufferTexture){if(gt)if(z)e.texStorage2D(i.TEXTURE_2D,Dt,Bt,mt.width,mt.height);else{let pt=mt.width,lt=mt.height;for(let Nt=0;Nt<Dt;Nt++)e.texImage2D(i.TEXTURE_2D,Nt,Bt,pt,lt,0,St,Wt,null),pt>>=1,lt>>=1}}else if(re.length>0){if(z&&gt){const pt=Ne(re[0]);e.texStorage2D(i.TEXTURE_2D,Dt,Bt,pt.width,pt.height)}for(let pt=0,lt=re.length;pt<lt;pt++)Mt=re[pt],z?xt&&e.texSubImage2D(i.TEXTURE_2D,pt,0,0,St,Wt,Mt):e.texImage2D(i.TEXTURE_2D,pt,Bt,St,Wt,Mt);y.generateMipmaps=!1}else if(z){if(gt){const pt=Ne(mt);e.texStorage2D(i.TEXTURE_2D,Dt,Bt,pt.width,pt.height)}xt&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,St,Wt,mt)}else e.texImage2D(i.TEXTURE_2D,0,Bt,St,Wt,mt);v(y)&&m(nt),zt.__version=j.version,y.onUpdate&&y.onUpdate(y)}C.__version=y.version}function dt(C,y,q){if(y.image.length!==6)return;const nt=Pe(C,y),ht=y.source;e.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+q);const j=r.get(ht);if(ht.version!==j.__version||nt===!0){e.activeTexture(i.TEXTURE0+q);const zt=Se.getPrimaries(Se.workingColorSpace),vt=y.colorSpace===or?null:Se.getPrimaries(y.colorSpace),Ut=y.colorSpace===or||zt===vt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ut);const Ot=y.isCompressedTexture||y.image[0].isCompressedTexture,mt=y.image[0]&&y.image[0].isDataTexture,St=[];for(let lt=0;lt<6;lt++)!Ot&&!mt?St[lt]=A(y.image[lt],!0,a.maxCubemapSize):St[lt]=mt?y.image[lt].image:y.image[lt],St[lt]=Te(y,St[lt]);const Wt=St[0],Bt=o.convert(y.format,y.colorSpace),Mt=o.convert(y.type),re=L(y.internalFormat,Bt,Mt,y.colorSpace),z=y.isVideoTexture!==!0,gt=j.__version===void 0||nt===!0,xt=ht.dataReady;let Dt=B(y,Wt);ue(i.TEXTURE_CUBE_MAP,y);let pt;if(Ot){z&&gt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Dt,re,Wt.width,Wt.height);for(let lt=0;lt<6;lt++){pt=St[lt].mipmaps;for(let Nt=0;Nt<pt.length;Nt++){const ne=pt[Nt];y.format!==hi?Bt!==null?z?xt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Nt,0,0,ne.width,ne.height,Bt,ne.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Nt,re,ne.width,ne.height,0,ne.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):z?xt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Nt,0,0,ne.width,ne.height,Bt,Mt,ne.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Nt,re,ne.width,ne.height,0,Bt,Mt,ne.data)}}}else{if(pt=y.mipmaps,z&&gt){pt.length>0&&Dt++;const lt=Ne(St[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Dt,re,lt.width,lt.height)}for(let lt=0;lt<6;lt++)if(mt){z?xt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,0,0,St[lt].width,St[lt].height,Bt,Mt,St[lt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,re,St[lt].width,St[lt].height,0,Bt,Mt,St[lt].data);for(let Nt=0;Nt<pt.length;Nt++){const Re=pt[Nt].image[lt].image;z?xt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Nt+1,0,0,Re.width,Re.height,Bt,Mt,Re.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Nt+1,re,Re.width,Re.height,0,Bt,Mt,Re.data)}}else{z?xt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,0,0,Bt,Mt,St[lt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,re,Bt,Mt,St[lt]);for(let Nt=0;Nt<pt.length;Nt++){const ne=pt[Nt];z?xt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Nt+1,0,0,Bt,Mt,ne.image[lt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Nt+1,re,Bt,Mt,ne.image[lt])}}}v(y)&&m(i.TEXTURE_CUBE_MAP),j.__version=ht.version,y.onUpdate&&y.onUpdate(y)}C.__version=y.version}function Ct(C,y,q,nt,ht,j){const zt=o.convert(q.format,q.colorSpace),vt=o.convert(q.type),Ut=L(q.internalFormat,zt,vt,q.colorSpace),Ot=r.get(y),mt=r.get(q);if(mt.__renderTarget=y,!Ot.__hasExternalTextures){const St=Math.max(1,y.width>>j),Wt=Math.max(1,y.height>>j);ht===i.TEXTURE_3D||ht===i.TEXTURE_2D_ARRAY?e.texImage3D(ht,j,Ut,St,Wt,y.depth,0,zt,vt,null):e.texImage2D(ht,j,Ut,St,Wt,0,zt,vt,null)}e.bindFramebuffer(i.FRAMEBUFFER,C),Ft(y)?u.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,nt,ht,mt.__webglTexture,0,Ue(y)):(ht===i.TEXTURE_2D||ht>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ht<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,nt,ht,mt.__webglTexture,j),e.bindFramebuffer(i.FRAMEBUFFER,null)}function qt(C,y,q){if(i.bindRenderbuffer(i.RENDERBUFFER,C),y.depthBuffer){const nt=y.depthTexture,ht=nt&&nt.isDepthTexture?nt.type:null,j=P(y.stencilBuffer,ht),zt=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,vt=Ue(y);Ft(y)?u.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,vt,j,y.width,y.height):q?i.renderbufferStorageMultisample(i.RENDERBUFFER,vt,j,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,j,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,zt,i.RENDERBUFFER,C)}else{const nt=y.textures;for(let ht=0;ht<nt.length;ht++){const j=nt[ht],zt=o.convert(j.format,j.colorSpace),vt=o.convert(j.type),Ut=L(j.internalFormat,zt,vt,j.colorSpace),Ot=Ue(y);q&&Ft(y)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ot,Ut,y.width,y.height):Ft(y)?u.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ot,Ut,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,Ut,y.width,y.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function kt(C,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,C),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const nt=r.get(y.depthTexture);nt.__renderTarget=y,(!nt.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),at(y.depthTexture,0);const ht=nt.__webglTexture,j=Ue(y);if(y.depthTexture.format===oa)Ft(y)?u.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ht,0,j):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ht,0);else if(y.depthTexture.format===la)Ft(y)?u.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ht,0,j):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ht,0);else throw new Error("Unknown depthTexture format")}function he(C){const y=r.get(C),q=C.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==C.depthTexture){const nt=C.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),nt){const ht=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,nt.removeEventListener("dispose",ht)};nt.addEventListener("dispose",ht),y.__depthDisposeCallback=ht}y.__boundDepthTexture=nt}if(C.depthTexture&&!y.__autoAllocateDepthBuffer){if(q)throw new Error("target.depthTexture not supported in Cube render targets");const nt=C.texture.mipmaps;nt&&nt.length>0?kt(y.__webglFramebuffer[0],C):kt(y.__webglFramebuffer,C)}else if(q){y.__webglDepthbuffer=[];for(let nt=0;nt<6;nt++)if(e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[nt]),y.__webglDepthbuffer[nt]===void 0)y.__webglDepthbuffer[nt]=i.createRenderbuffer(),qt(y.__webglDepthbuffer[nt],C,!1);else{const ht=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,j=y.__webglDepthbuffer[nt];i.bindRenderbuffer(i.RENDERBUFFER,j),i.framebufferRenderbuffer(i.FRAMEBUFFER,ht,i.RENDERBUFFER,j)}}else{const nt=C.texture.mipmaps;if(nt&&nt.length>0?e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=i.createRenderbuffer(),qt(y.__webglDepthbuffer,C,!1);else{const ht=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,j=y.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,j),i.framebufferRenderbuffer(i.FRAMEBUFFER,ht,i.RENDERBUFFER,j)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ze(C,y,q){const nt=r.get(C);y!==void 0&&Ct(nt.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),q!==void 0&&he(C)}function I(C){const y=C.texture,q=r.get(C),nt=r.get(y);C.addEventListener("dispose",F);const ht=C.textures,j=C.isWebGLCubeRenderTarget===!0,zt=ht.length>1;if(zt||(nt.__webglTexture===void 0&&(nt.__webglTexture=i.createTexture()),nt.__version=y.version,c.memory.textures++),j){q.__webglFramebuffer=[];for(let vt=0;vt<6;vt++)if(y.mipmaps&&y.mipmaps.length>0){q.__webglFramebuffer[vt]=[];for(let Ut=0;Ut<y.mipmaps.length;Ut++)q.__webglFramebuffer[vt][Ut]=i.createFramebuffer()}else q.__webglFramebuffer[vt]=i.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){q.__webglFramebuffer=[];for(let vt=0;vt<y.mipmaps.length;vt++)q.__webglFramebuffer[vt]=i.createFramebuffer()}else q.__webglFramebuffer=i.createFramebuffer();if(zt)for(let vt=0,Ut=ht.length;vt<Ut;vt++){const Ot=r.get(ht[vt]);Ot.__webglTexture===void 0&&(Ot.__webglTexture=i.createTexture(),c.memory.textures++)}if(C.samples>0&&Ft(C)===!1){q.__webglMultisampledFramebuffer=i.createFramebuffer(),q.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let vt=0;vt<ht.length;vt++){const Ut=ht[vt];q.__webglColorRenderbuffer[vt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,q.__webglColorRenderbuffer[vt]);const Ot=o.convert(Ut.format,Ut.colorSpace),mt=o.convert(Ut.type),St=L(Ut.internalFormat,Ot,mt,Ut.colorSpace,C.isXRRenderTarget===!0),Wt=Ue(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,Wt,St,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+vt,i.RENDERBUFFER,q.__webglColorRenderbuffer[vt])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(q.__webglDepthRenderbuffer=i.createRenderbuffer(),qt(q.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(j){e.bindTexture(i.TEXTURE_CUBE_MAP,nt.__webglTexture),ue(i.TEXTURE_CUBE_MAP,y);for(let vt=0;vt<6;vt++)if(y.mipmaps&&y.mipmaps.length>0)for(let Ut=0;Ut<y.mipmaps.length;Ut++)Ct(q.__webglFramebuffer[vt][Ut],C,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ut);else Ct(q.__webglFramebuffer[vt],C,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0);v(y)&&m(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(zt){for(let vt=0,Ut=ht.length;vt<Ut;vt++){const Ot=ht[vt],mt=r.get(Ot);let St=i.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(St=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(St,mt.__webglTexture),ue(St,Ot),Ct(q.__webglFramebuffer,C,Ot,i.COLOR_ATTACHMENT0+vt,St,0),v(Ot)&&m(St)}e.unbindTexture()}else{let vt=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(vt=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(vt,nt.__webglTexture),ue(vt,y),y.mipmaps&&y.mipmaps.length>0)for(let Ut=0;Ut<y.mipmaps.length;Ut++)Ct(q.__webglFramebuffer[Ut],C,y,i.COLOR_ATTACHMENT0,vt,Ut);else Ct(q.__webglFramebuffer,C,y,i.COLOR_ATTACHMENT0,vt,0);v(y)&&m(vt),e.unbindTexture()}C.depthBuffer&&he(C)}function ge(C){const y=C.textures;for(let q=0,nt=y.length;q<nt;q++){const ht=y[q];if(v(ht)){const j=N(C),zt=r.get(ht).__webglTexture;e.bindTexture(j,zt),m(j),e.unbindTexture()}}}const te=[],Qt=[];function wt(C){if(C.samples>0){if(Ft(C)===!1){const y=C.textures,q=C.width,nt=C.height;let ht=i.COLOR_BUFFER_BIT;const j=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,zt=r.get(C),vt=y.length>1;if(vt)for(let Ot=0;Ot<y.length;Ot++)e.bindFramebuffer(i.FRAMEBUFFER,zt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ot,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,zt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ot,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,zt.__webglMultisampledFramebuffer);const Ut=C.texture.mipmaps;Ut&&Ut.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,zt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,zt.__webglFramebuffer);for(let Ot=0;Ot<y.length;Ot++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(ht|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(ht|=i.STENCIL_BUFFER_BIT)),vt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,zt.__webglColorRenderbuffer[Ot]);const mt=r.get(y[Ot]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,mt,0)}i.blitFramebuffer(0,0,q,nt,0,0,q,nt,ht,i.NEAREST),d===!0&&(te.length=0,Qt.length=0,te.push(i.COLOR_ATTACHMENT0+Ot),C.depthBuffer&&C.resolveDepthBuffer===!1&&(te.push(j),Qt.push(j),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Qt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,te))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),vt)for(let Ot=0;Ot<y.length;Ot++){e.bindFramebuffer(i.FRAMEBUFFER,zt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ot,i.RENDERBUFFER,zt.__webglColorRenderbuffer[Ot]);const mt=r.get(y[Ot]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,zt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ot,i.TEXTURE_2D,mt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,zt.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&d){const y=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[y])}}}function Ue(C){return Math.min(a.maxSamples,C.samples)}function Ft(C){const y=r.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function ee(C){const y=c.render.frame;p.get(C)!==y&&(p.set(C,y),C.update())}function Te(C,y){const q=C.colorSpace,nt=C.format,ht=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||q!==ws&&q!==or&&(Se.getTransfer(q)===Le?(nt!==hi||ht!==Gi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",q)),y}function Ne(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(h.width=C.naturalWidth||C.width,h.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(h.width=C.displayWidth,h.height=C.displayHeight):(h.width=C.width,h.height=C.height),h}this.allocateTextureUnit=et,this.resetTextureUnits=J,this.setTexture2D=at,this.setTexture2DArray=ot,this.setTexture3D=ct,this.setTextureCube=Q,this.rebindTextures=Ze,this.setupRenderTarget=I,this.updateRenderTargetMipmap=ge,this.updateMultisampleRenderTarget=wt,this.setupDepthRenderbuffer=he,this.setupFrameBufferTexture=Ct,this.useMultisampledRTT=Ft}function qw(i,t){function e(r,a=or){let o;const c=Se.getTransfer(a);if(r===Gi)return i.UNSIGNED_BYTE;if(r===ku)return i.UNSIGNED_SHORT_4_4_4_4;if(r===Vu)return i.UNSIGNED_SHORT_5_5_5_1;if(r===Np)return i.UNSIGNED_INT_5_9_9_9_REV;if(r===Fp)return i.UNSIGNED_INT_10F_11F_11F_REV;if(r===Ip)return i.BYTE;if(r===Up)return i.SHORT;if(r===sa)return i.UNSIGNED_SHORT;if(r===Hu)return i.INT;if(r===Fr)return i.UNSIGNED_INT;if(r===vi)return i.FLOAT;if(r===ha)return i.HALF_FLOAT;if(r===Op)return i.ALPHA;if(r===Bp)return i.RGB;if(r===hi)return i.RGBA;if(r===oa)return i.DEPTH_COMPONENT;if(r===la)return i.DEPTH_STENCIL;if(r===zp)return i.RED;if(r===Gu)return i.RED_INTEGER;if(r===Hp)return i.RG;if(r===Wu)return i.RG_INTEGER;if(r===Xu)return i.RGBA_INTEGER;if(r===Uo||r===No||r===Fo||r===Oo)if(c===Le)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===Uo)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===No)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Fo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Oo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===Uo)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===No)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Fo)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Oo)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===su||r===au||r===ou||r===lu)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===su)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===au)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===ou)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===lu)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===cu||r===uu||r===hu)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(r===cu||r===uu)return c===Le?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===hu)return c===Le?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===fu||r===du||r===pu||r===mu||r===_u||r===gu||r===vu||r===xu||r===Mu||r===yu||r===Su||r===Eu||r===Tu||r===bu)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(r===fu)return c===Le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===du)return c===Le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===pu)return c===Le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===mu)return c===Le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===_u)return c===Le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===gu)return c===Le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===vu)return c===Le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===xu)return c===Le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Mu)return c===Le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===yu)return c===Le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Su)return c===Le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Eu)return c===Le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Tu)return c===Le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===bu)return c===Le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Au||r===wu||r===Ru)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(r===Au)return c===Le?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===wu)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Ru)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Cu||r===Pu||r===Du||r===Lu)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(r===Cu)return o.COMPRESSED_RED_RGTC1_EXT;if(r===Pu)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Du)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Lu)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===aa?i.UNSIGNED_INT_24_8:i[r]!==void 0?i[r]:null}return{convert:e}}const Yw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Zw=`
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

}`;class Kw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const r=new em(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,r=new yi({vertexShader:Yw,fragmentShader:Zw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ki(new $o(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class $w extends Hr{constructor(t,e){super();const r=this;let a=null,o=1,c=null,u="local-floor",d=1,h=null,p=null,_=null,g=null,x=null,E=null;const A=typeof XRWebGLBinding<"u",v=new Kw,m={},N=e.getContextAttributes();let L=null,P=null;const B=[],O=[],F=new jt;let Y=null;const R=new Qn;R.viewport=new qe;const w=new Qn;w.viewport=new qe;const H=[R,w],J=new pE;let et=null,ut=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(it){let dt=B[it];return dt===void 0&&(dt=new Dc,B[it]=dt),dt.getTargetRaySpace()},this.getControllerGrip=function(it){let dt=B[it];return dt===void 0&&(dt=new Dc,B[it]=dt),dt.getGripSpace()},this.getHand=function(it){let dt=B[it];return dt===void 0&&(dt=new Dc,B[it]=dt),dt.getHandSpace()};function at(it){const dt=O.indexOf(it.inputSource);if(dt===-1)return;const Ct=B[dt];Ct!==void 0&&(Ct.update(it.inputSource,it.frame,h||c),Ct.dispatchEvent({type:it.type,data:it.inputSource}))}function ot(){a.removeEventListener("select",at),a.removeEventListener("selectstart",at),a.removeEventListener("selectend",at),a.removeEventListener("squeeze",at),a.removeEventListener("squeezestart",at),a.removeEventListener("squeezeend",at),a.removeEventListener("end",ot),a.removeEventListener("inputsourceschange",ct);for(let it=0;it<B.length;it++){const dt=O[it];dt!==null&&(O[it]=null,B[it].disconnect(dt))}et=null,ut=null,v.reset();for(const it in m)delete m[it];t.setRenderTarget(L),x=null,g=null,_=null,a=null,P=null,me.stop(),r.isPresenting=!1,t.setPixelRatio(Y),t.setSize(F.width,F.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(it){o=it,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(it){u=it,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||c},this.setReferenceSpace=function(it){h=it},this.getBaseLayer=function(){return g!==null?g:x},this.getBinding=function(){return _===null&&A&&(_=new XRWebGLBinding(a,e)),_},this.getFrame=function(){return E},this.getSession=function(){return a},this.setSession=async function(it){if(a=it,a!==null){if(L=t.getRenderTarget(),a.addEventListener("select",at),a.addEventListener("selectstart",at),a.addEventListener("selectend",at),a.addEventListener("squeeze",at),a.addEventListener("squeezestart",at),a.addEventListener("squeezeend",at),a.addEventListener("end",ot),a.addEventListener("inputsourceschange",ct),N.xrCompatible!==!0&&await e.makeXRCompatible(),Y=t.getPixelRatio(),t.getSize(F),A&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ct=null,qt=null,kt=null;N.depth&&(kt=N.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Ct=N.stencil?la:oa,qt=N.stencil?aa:Fr);const he={colorFormat:e.RGBA8,depthFormat:kt,scaleFactor:o};_=this.getBinding(),g=_.createProjectionLayer(he),a.updateRenderState({layers:[g]}),t.setPixelRatio(1),t.setSize(g.textureWidth,g.textureHeight,!1),P=new Br(g.textureWidth,g.textureHeight,{format:hi,type:Gi,depthTexture:new tm(g.textureWidth,g.textureHeight,qt,void 0,void 0,void 0,void 0,void 0,void 0,Ct),stencilBuffer:N.stencil,colorSpace:t.outputColorSpace,samples:N.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const Ct={antialias:N.antialias,alpha:!0,depth:N.depth,stencil:N.stencil,framebufferScaleFactor:o};x=new XRWebGLLayer(a,e,Ct),a.updateRenderState({baseLayer:x}),t.setPixelRatio(1),t.setSize(x.framebufferWidth,x.framebufferHeight,!1),P=new Br(x.framebufferWidth,x.framebufferHeight,{format:hi,type:Gi,colorSpace:t.outputColorSpace,stencilBuffer:N.stencil,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}P.isXRRenderTarget=!0,this.setFoveation(d),h=null,c=await a.requestReferenceSpace(u),me.setContext(a),me.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function ct(it){for(let dt=0;dt<it.removed.length;dt++){const Ct=it.removed[dt],qt=O.indexOf(Ct);qt>=0&&(O[qt]=null,B[qt].disconnect(Ct))}for(let dt=0;dt<it.added.length;dt++){const Ct=it.added[dt];let qt=O.indexOf(Ct);if(qt===-1){for(let he=0;he<B.length;he++)if(he>=O.length){O.push(Ct),qt=he;break}else if(O[he]===null){O[he]=Ct,qt=he;break}if(qt===-1)break}const kt=B[qt];kt&&kt.connect(Ct)}}const Q=new X,yt=new X;function At(it,dt,Ct){Q.setFromMatrixPosition(dt.matrixWorld),yt.setFromMatrixPosition(Ct.matrixWorld);const qt=Q.distanceTo(yt),kt=dt.projectionMatrix.elements,he=Ct.projectionMatrix.elements,Ze=kt[14]/(kt[10]-1),I=kt[14]/(kt[10]+1),ge=(kt[9]+1)/kt[5],te=(kt[9]-1)/kt[5],Qt=(kt[8]-1)/kt[0],wt=(he[8]+1)/he[0],Ue=Ze*Qt,Ft=Ze*wt,ee=qt/(-Qt+wt),Te=ee*-Qt;if(dt.matrixWorld.decompose(it.position,it.quaternion,it.scale),it.translateX(Te),it.translateZ(ee),it.matrixWorld.compose(it.position,it.quaternion,it.scale),it.matrixWorldInverse.copy(it.matrixWorld).invert(),kt[10]===-1)it.projectionMatrix.copy(dt.projectionMatrix),it.projectionMatrixInverse.copy(dt.projectionMatrixInverse);else{const Ne=Ze+ee,C=I+ee,y=Ue-Te,q=Ft+(qt-Te),nt=ge*I/C*Ne,ht=te*I/C*Ne;it.projectionMatrix.makePerspective(y,q,nt,ht,Ne,C),it.projectionMatrixInverse.copy(it.projectionMatrix).invert()}}function Lt(it,dt){dt===null?it.matrixWorld.copy(it.matrix):it.matrixWorld.multiplyMatrices(dt.matrixWorld,it.matrix),it.matrixWorldInverse.copy(it.matrixWorld).invert()}this.updateCamera=function(it){if(a===null)return;let dt=it.near,Ct=it.far;v.texture!==null&&(v.depthNear>0&&(dt=v.depthNear),v.depthFar>0&&(Ct=v.depthFar)),J.near=w.near=R.near=dt,J.far=w.far=R.far=Ct,(et!==J.near||ut!==J.far)&&(a.updateRenderState({depthNear:J.near,depthFar:J.far}),et=J.near,ut=J.far),J.layers.mask=it.layers.mask|6,R.layers.mask=J.layers.mask&3,w.layers.mask=J.layers.mask&5;const qt=it.parent,kt=J.cameras;Lt(J,qt);for(let he=0;he<kt.length;he++)Lt(kt[he],qt);kt.length===2?At(J,R,w):J.projectionMatrix.copy(R.projectionMatrix),ue(it,J,qt)};function ue(it,dt,Ct){Ct===null?it.matrix.copy(dt.matrixWorld):(it.matrix.copy(Ct.matrixWorld),it.matrix.invert(),it.matrix.multiply(dt.matrixWorld)),it.matrix.decompose(it.position,it.quaternion,it.scale),it.updateMatrixWorld(!0),it.projectionMatrix.copy(dt.projectionMatrix),it.projectionMatrixInverse.copy(dt.projectionMatrixInverse),it.isPerspectiveCamera&&(it.fov=ca*2*Math.atan(1/it.projectionMatrix.elements[5]),it.zoom=1)}this.getCamera=function(){return J},this.getFoveation=function(){if(!(g===null&&x===null))return d},this.setFoveation=function(it){d=it,g!==null&&(g.fixedFoveation=it),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=it)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(J)},this.getCameraTexture=function(it){return m[it]};let Pe=null;function Be(it,dt){if(p=dt.getViewerPose(h||c),E=dt,p!==null){const Ct=p.views;x!==null&&(t.setRenderTargetFramebuffer(P,x.framebuffer),t.setRenderTarget(P));let qt=!1;Ct.length!==J.cameras.length&&(J.cameras.length=0,qt=!0);for(let I=0;I<Ct.length;I++){const ge=Ct[I];let te=null;if(x!==null)te=x.getViewport(ge);else{const wt=_.getViewSubImage(g,ge);te=wt.viewport,I===0&&(t.setRenderTargetTextures(P,wt.colorTexture,wt.depthStencilTexture),t.setRenderTarget(P))}let Qt=H[I];Qt===void 0&&(Qt=new Qn,Qt.layers.enable(I),Qt.viewport=new qe,H[I]=Qt),Qt.matrix.fromArray(ge.transform.matrix),Qt.matrix.decompose(Qt.position,Qt.quaternion,Qt.scale),Qt.projectionMatrix.fromArray(ge.projectionMatrix),Qt.projectionMatrixInverse.copy(Qt.projectionMatrix).invert(),Qt.viewport.set(te.x,te.y,te.width,te.height),I===0&&(J.matrix.copy(Qt.matrix),J.matrix.decompose(J.position,J.quaternion,J.scale)),qt===!0&&J.cameras.push(Qt)}const kt=a.enabledFeatures;if(kt&&kt.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&A){_=r.getBinding();const I=_.getDepthInformation(Ct[0]);I&&I.isValid&&I.texture&&v.init(I,a.renderState)}if(kt&&kt.includes("camera-access")&&A){t.state.unbindTexture(),_=r.getBinding();for(let I=0;I<Ct.length;I++){const ge=Ct[I].camera;if(ge){let te=m[ge];te||(te=new em,m[ge]=te);const Qt=_.getCameraImage(ge);te.sourceTexture=Qt}}}}for(let Ct=0;Ct<B.length;Ct++){const qt=O[Ct],kt=B[Ct];qt!==null&&kt!==void 0&&kt.update(qt,dt,h||c)}Pe&&Pe(it,dt),dt.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:dt}),E=null}const me=new am;me.setAnimationLoop(Be),this.setAnimationLoop=function(it){Pe=it},this.dispose=function(){}}}const Pr=new jn,Jw=new Ye;function Qw(i,t){function e(v,m){v.matrixAutoUpdate===!0&&v.updateMatrix(),m.value.copy(v.matrix)}function r(v,m){m.color.getRGB(v.fogColor.value,Kp(i)),m.isFog?(v.fogNear.value=m.near,v.fogFar.value=m.far):m.isFogExp2&&(v.fogDensity.value=m.density)}function a(v,m,N,L,P){m.isMeshBasicMaterial||m.isMeshLambertMaterial?o(v,m):m.isMeshToonMaterial?(o(v,m),_(v,m)):m.isMeshPhongMaterial?(o(v,m),p(v,m)):m.isMeshStandardMaterial?(o(v,m),g(v,m),m.isMeshPhysicalMaterial&&x(v,m,P)):m.isMeshMatcapMaterial?(o(v,m),E(v,m)):m.isMeshDepthMaterial?o(v,m):m.isMeshDistanceMaterial?(o(v,m),A(v,m)):m.isMeshNormalMaterial?o(v,m):m.isLineBasicMaterial?(c(v,m),m.isLineDashedMaterial&&u(v,m)):m.isPointsMaterial?d(v,m,N,L):m.isSpriteMaterial?h(v,m):m.isShadowMaterial?(v.color.value.copy(m.color),v.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function o(v,m){v.opacity.value=m.opacity,m.color&&v.diffuse.value.copy(m.color),m.emissive&&v.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(v.map.value=m.map,e(m.map,v.mapTransform)),m.alphaMap&&(v.alphaMap.value=m.alphaMap,e(m.alphaMap,v.alphaMapTransform)),m.bumpMap&&(v.bumpMap.value=m.bumpMap,e(m.bumpMap,v.bumpMapTransform),v.bumpScale.value=m.bumpScale,m.side===Dn&&(v.bumpScale.value*=-1)),m.normalMap&&(v.normalMap.value=m.normalMap,e(m.normalMap,v.normalMapTransform),v.normalScale.value.copy(m.normalScale),m.side===Dn&&v.normalScale.value.negate()),m.displacementMap&&(v.displacementMap.value=m.displacementMap,e(m.displacementMap,v.displacementMapTransform),v.displacementScale.value=m.displacementScale,v.displacementBias.value=m.displacementBias),m.emissiveMap&&(v.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,v.emissiveMapTransform)),m.specularMap&&(v.specularMap.value=m.specularMap,e(m.specularMap,v.specularMapTransform)),m.alphaTest>0&&(v.alphaTest.value=m.alphaTest);const N=t.get(m),L=N.envMap,P=N.envMapRotation;L&&(v.envMap.value=L,Pr.copy(P),Pr.x*=-1,Pr.y*=-1,Pr.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(Pr.y*=-1,Pr.z*=-1),v.envMapRotation.value.setFromMatrix4(Jw.makeRotationFromEuler(Pr)),v.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,v.reflectivity.value=m.reflectivity,v.ior.value=m.ior,v.refractionRatio.value=m.refractionRatio),m.lightMap&&(v.lightMap.value=m.lightMap,v.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,v.lightMapTransform)),m.aoMap&&(v.aoMap.value=m.aoMap,v.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,v.aoMapTransform))}function c(v,m){v.diffuse.value.copy(m.color),v.opacity.value=m.opacity,m.map&&(v.map.value=m.map,e(m.map,v.mapTransform))}function u(v,m){v.dashSize.value=m.dashSize,v.totalSize.value=m.dashSize+m.gapSize,v.scale.value=m.scale}function d(v,m,N,L){v.diffuse.value.copy(m.color),v.opacity.value=m.opacity,v.size.value=m.size*N,v.scale.value=L*.5,m.map&&(v.map.value=m.map,e(m.map,v.uvTransform)),m.alphaMap&&(v.alphaMap.value=m.alphaMap,e(m.alphaMap,v.alphaMapTransform)),m.alphaTest>0&&(v.alphaTest.value=m.alphaTest)}function h(v,m){v.diffuse.value.copy(m.color),v.opacity.value=m.opacity,v.rotation.value=m.rotation,m.map&&(v.map.value=m.map,e(m.map,v.mapTransform)),m.alphaMap&&(v.alphaMap.value=m.alphaMap,e(m.alphaMap,v.alphaMapTransform)),m.alphaTest>0&&(v.alphaTest.value=m.alphaTest)}function p(v,m){v.specular.value.copy(m.specular),v.shininess.value=Math.max(m.shininess,1e-4)}function _(v,m){m.gradientMap&&(v.gradientMap.value=m.gradientMap)}function g(v,m){v.metalness.value=m.metalness,m.metalnessMap&&(v.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,v.metalnessMapTransform)),v.roughness.value=m.roughness,m.roughnessMap&&(v.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,v.roughnessMapTransform)),m.envMap&&(v.envMapIntensity.value=m.envMapIntensity)}function x(v,m,N){v.ior.value=m.ior,m.sheen>0&&(v.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),v.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(v.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,v.sheenColorMapTransform)),m.sheenRoughnessMap&&(v.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,v.sheenRoughnessMapTransform))),m.clearcoat>0&&(v.clearcoat.value=m.clearcoat,v.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(v.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,v.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(v.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,v.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(v.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,v.clearcoatNormalMapTransform),v.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Dn&&v.clearcoatNormalScale.value.negate())),m.dispersion>0&&(v.dispersion.value=m.dispersion),m.iridescence>0&&(v.iridescence.value=m.iridescence,v.iridescenceIOR.value=m.iridescenceIOR,v.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],v.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(v.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,v.iridescenceMapTransform)),m.iridescenceThicknessMap&&(v.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,v.iridescenceThicknessMapTransform))),m.transmission>0&&(v.transmission.value=m.transmission,v.transmissionSamplerMap.value=N.texture,v.transmissionSamplerSize.value.set(N.width,N.height),m.transmissionMap&&(v.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,v.transmissionMapTransform)),v.thickness.value=m.thickness,m.thicknessMap&&(v.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,v.thicknessMapTransform)),v.attenuationDistance.value=m.attenuationDistance,v.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(v.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(v.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,v.anisotropyMapTransform))),v.specularIntensity.value=m.specularIntensity,v.specularColor.value.copy(m.specularColor),m.specularColorMap&&(v.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,v.specularColorMapTransform)),m.specularIntensityMap&&(v.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,v.specularIntensityMapTransform))}function E(v,m){m.matcap&&(v.matcap.value=m.matcap)}function A(v,m){const N=t.get(m).light;v.referencePosition.value.setFromMatrixPosition(N.matrixWorld),v.nearDistance.value=N.shadow.camera.near,v.farDistance.value=N.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:a}}function jw(i,t,e,r){let a={},o={},c=[];const u=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function d(N,L){const P=L.program;r.uniformBlockBinding(N,P)}function h(N,L){let P=a[N.id];P===void 0&&(E(N),P=p(N),a[N.id]=P,N.addEventListener("dispose",v));const B=L.program;r.updateUBOMapping(N,B);const O=t.render.frame;o[N.id]!==O&&(g(N),o[N.id]=O)}function p(N){const L=_();N.__bindingPointIndex=L;const P=i.createBuffer(),B=N.__size,O=N.usage;return i.bindBuffer(i.UNIFORM_BUFFER,P),i.bufferData(i.UNIFORM_BUFFER,B,O),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,L,P),P}function _(){for(let N=0;N<u;N++)if(c.indexOf(N)===-1)return c.push(N),N;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(N){const L=a[N.id],P=N.uniforms,B=N.__cache;i.bindBuffer(i.UNIFORM_BUFFER,L);for(let O=0,F=P.length;O<F;O++){const Y=Array.isArray(P[O])?P[O]:[P[O]];for(let R=0,w=Y.length;R<w;R++){const H=Y[R];if(x(H,O,R,B)===!0){const J=H.__offset,et=Array.isArray(H.value)?H.value:[H.value];let ut=0;for(let at=0;at<et.length;at++){const ot=et[at],ct=A(ot);typeof ot=="number"||typeof ot=="boolean"?(H.__data[0]=ot,i.bufferSubData(i.UNIFORM_BUFFER,J+ut,H.__data)):ot.isMatrix3?(H.__data[0]=ot.elements[0],H.__data[1]=ot.elements[1],H.__data[2]=ot.elements[2],H.__data[3]=0,H.__data[4]=ot.elements[3],H.__data[5]=ot.elements[4],H.__data[6]=ot.elements[5],H.__data[7]=0,H.__data[8]=ot.elements[6],H.__data[9]=ot.elements[7],H.__data[10]=ot.elements[8],H.__data[11]=0):(ot.toArray(H.__data,ut),ut+=ct.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,J,H.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function x(N,L,P,B){const O=N.value,F=L+"_"+P;if(B[F]===void 0)return typeof O=="number"||typeof O=="boolean"?B[F]=O:B[F]=O.clone(),!0;{const Y=B[F];if(typeof O=="number"||typeof O=="boolean"){if(Y!==O)return B[F]=O,!0}else if(Y.equals(O)===!1)return Y.copy(O),!0}return!1}function E(N){const L=N.uniforms;let P=0;const B=16;for(let F=0,Y=L.length;F<Y;F++){const R=Array.isArray(L[F])?L[F]:[L[F]];for(let w=0,H=R.length;w<H;w++){const J=R[w],et=Array.isArray(J.value)?J.value:[J.value];for(let ut=0,at=et.length;ut<at;ut++){const ot=et[ut],ct=A(ot),Q=P%B,yt=Q%ct.boundary,At=Q+yt;P+=yt,At!==0&&B-At<ct.storage&&(P+=B-At),J.__data=new Float32Array(ct.storage/Float32Array.BYTES_PER_ELEMENT),J.__offset=P,P+=ct.storage}}}const O=P%B;return O>0&&(P+=B-O),N.__size=P,N.__cache={},this}function A(N){const L={boundary:0,storage:0};return typeof N=="number"||typeof N=="boolean"?(L.boundary=4,L.storage=4):N.isVector2?(L.boundary=8,L.storage=8):N.isVector3||N.isColor?(L.boundary=16,L.storage=12):N.isVector4?(L.boundary=16,L.storage=16):N.isMatrix3?(L.boundary=48,L.storage=48):N.isMatrix4?(L.boundary=64,L.storage=64):N.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",N),L}function v(N){const L=N.target;L.removeEventListener("dispose",v);const P=c.indexOf(L.__bindingPointIndex);c.splice(P,1),i.deleteBuffer(a[L.id]),delete a[L.id],delete o[L.id]}function m(){for(const N in a)i.deleteBuffer(a[N]);c=[],a={},o={}}return{bind:d,update:h,dispose:m}}class t1{constructor(t={}){const{canvas:e=yS(),context:r=null,depth:a=!0,stencil:o=!1,alpha:c=!1,antialias:u=!1,premultipliedAlpha:d=!0,preserveDrawingBuffer:h=!1,powerPreference:p="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:g=!1}=t;this.isWebGLRenderer=!0;let x;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=r.getContextAttributes().alpha}else x=c;const E=new Uint32Array(4),A=new Int32Array(4);let v=null,m=null;const N=[],L=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=cr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const P=this;let B=!1;this._outputColorSpace=Jn;let O=0,F=0,Y=null,R=-1,w=null;const H=new qe,J=new qe;let et=null;const ut=new Zt(0);let at=0,ot=e.width,ct=e.height,Q=1,yt=null,At=null;const Lt=new qe(0,0,ot,ct),ue=new qe(0,0,ot,ct);let Pe=!1;const Be=new Qp;let me=!1,it=!1;const dt=new Ye,Ct=new X,qt=new qe,kt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let he=!1;function Ze(){return Y===null?Q:1}let I=r;function ge(T,G){return e.getContext(T,G)}try{const T={alpha:!0,depth:a,stencil:o,antialias:u,premultipliedAlpha:d,preserveDrawingBuffer:h,powerPreference:p,failIfMajorPerformanceCaveat:_};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${zu}`),e.addEventListener("webglcontextlost",xt,!1),e.addEventListener("webglcontextrestored",Dt,!1),e.addEventListener("webglcontextcreationerror",pt,!1),I===null){const G="webgl2";if(I=ge(G,T),I===null)throw ge(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let te,Qt,wt,Ue,Ft,ee,Te,Ne,C,y,q,nt,ht,j,zt,vt,Ut,Ot,mt,St,Wt,Bt,Mt,re;function z(){te=new uA(I),te.init(),Bt=new qw(I,te),Qt=new iA(I,te,t,Bt),wt=new Ww(I,te),Qt.reversedDepthBuffer&&g&&wt.buffers.depth.setReversed(!0),Ue=new dA(I),Ft=new Dw,ee=new Xw(I,te,wt,Ft,Qt,Bt,Ue),Te=new sA(P),Ne=new cA(P),C=new xE(I),Mt=new eA(I,C),y=new hA(I,C,Ue,Mt),q=new mA(I,y,C,Ue),mt=new pA(I,Qt,ee),vt=new rA(Ft),nt=new Pw(P,Te,Ne,te,Qt,Mt,vt),ht=new Qw(P,Ft),j=new Iw,zt=new zw(te),Ot=new tA(P,Te,Ne,wt,q,x,d),Ut=new Vw(P,q,Qt),re=new jw(I,Ue,Qt,wt),St=new nA(I,te,Ue),Wt=new fA(I,te,Ue),Ue.programs=nt.programs,P.capabilities=Qt,P.extensions=te,P.properties=Ft,P.renderLists=j,P.shadowMap=Ut,P.state=wt,P.info=Ue}z();const gt=new $w(P,I);this.xr=gt,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const T=te.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=te.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return Q},this.setPixelRatio=function(T){T!==void 0&&(Q=T,this.setSize(ot,ct,!1))},this.getSize=function(T){return T.set(ot,ct)},this.setSize=function(T,G,Z=!0){if(gt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ot=T,ct=G,e.width=Math.floor(T*Q),e.height=Math.floor(G*Q),Z===!0&&(e.style.width=T+"px",e.style.height=G+"px"),this.setViewport(0,0,T,G)},this.getDrawingBufferSize=function(T){return T.set(ot*Q,ct*Q).floor()},this.setDrawingBufferSize=function(T,G,Z){ot=T,ct=G,Q=Z,e.width=Math.floor(T*Z),e.height=Math.floor(G*Z),this.setViewport(0,0,T,G)},this.getCurrentViewport=function(T){return T.copy(H)},this.getViewport=function(T){return T.copy(Lt)},this.setViewport=function(T,G,Z,$){T.isVector4?Lt.set(T.x,T.y,T.z,T.w):Lt.set(T,G,Z,$),wt.viewport(H.copy(Lt).multiplyScalar(Q).round())},this.getScissor=function(T){return T.copy(ue)},this.setScissor=function(T,G,Z,$){T.isVector4?ue.set(T.x,T.y,T.z,T.w):ue.set(T,G,Z,$),wt.scissor(J.copy(ue).multiplyScalar(Q).round())},this.getScissorTest=function(){return Pe},this.setScissorTest=function(T){wt.setScissorTest(Pe=T)},this.setOpaqueSort=function(T){yt=T},this.setTransparentSort=function(T){At=T},this.getClearColor=function(T){return T.copy(Ot.getClearColor())},this.setClearColor=function(){Ot.setClearColor(...arguments)},this.getClearAlpha=function(){return Ot.getClearAlpha()},this.setClearAlpha=function(){Ot.setClearAlpha(...arguments)},this.clear=function(T=!0,G=!0,Z=!0){let $=0;if(T){let W=!1;if(Y!==null){const _t=Y.texture.format;W=_t===Xu||_t===Wu||_t===Gu}if(W){const _t=Y.texture.type,bt=_t===Gi||_t===Fr||_t===sa||_t===aa||_t===ku||_t===Vu,It=Ot.getClearColor(),Rt=Ot.getClearAlpha(),Xt=It.r,Kt=It.g,Vt=It.b;bt?(E[0]=Xt,E[1]=Kt,E[2]=Vt,E[3]=Rt,I.clearBufferuiv(I.COLOR,0,E)):(A[0]=Xt,A[1]=Kt,A[2]=Vt,A[3]=Rt,I.clearBufferiv(I.COLOR,0,A))}else $|=I.COLOR_BUFFER_BIT}G&&($|=I.DEPTH_BUFFER_BIT),Z&&($|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",xt,!1),e.removeEventListener("webglcontextrestored",Dt,!1),e.removeEventListener("webglcontextcreationerror",pt,!1),Ot.dispose(),j.dispose(),zt.dispose(),Ft.dispose(),Te.dispose(),Ne.dispose(),q.dispose(),Mt.dispose(),re.dispose(),nt.dispose(),gt.dispose(),gt.removeEventListener("sessionstart",kn),gt.removeEventListener("sessionend",kr),Ei.stop()};function xt(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),B=!0}function Dt(){console.log("THREE.WebGLRenderer: Context Restored."),B=!1;const T=Ue.autoReset,G=Ut.enabled,Z=Ut.autoUpdate,$=Ut.needsUpdate,W=Ut.type;z(),Ue.autoReset=T,Ut.enabled=G,Ut.autoUpdate=Z,Ut.needsUpdate=$,Ut.type=W}function pt(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function lt(T){const G=T.target;G.removeEventListener("dispose",lt),Nt(G)}function Nt(T){ne(T),Ft.remove(T)}function ne(T){const G=Ft.get(T).programs;G!==void 0&&(G.forEach(function(Z){nt.releaseProgram(Z)}),T.isShaderMaterial&&nt.releaseShaderCache(T))}this.renderBufferDirect=function(T,G,Z,$,W,_t){G===null&&(G=kt);const bt=W.isMesh&&W.matrixWorld.determinant()<0,It=jo(T,G,Z,$,W);wt.setMaterial($,bt);let Rt=Z.index,Xt=1;if($.wireframe===!0){if(Rt=y.getWireframeAttribute(Z),Rt===void 0)return;Xt=2}const Kt=Z.drawRange,Vt=Z.attributes.position;let pe=Kt.start*Xt,be=(Kt.start+Kt.count)*Xt;_t!==null&&(pe=Math.max(pe,_t.start*Xt),be=Math.min(be,(_t.start+_t.count)*Xt)),Rt!==null?(pe=Math.max(pe,0),be=Math.min(be,Rt.count)):Vt!=null&&(pe=Math.max(pe,0),be=Math.min(be,Vt.count));const Ve=be-pe;if(Ve<0||Ve===1/0)return;Mt.setup(W,$,It,Z,Rt);let De,Ae=St;if(Rt!==null&&(De=C.get(Rt),Ae=Wt,Ae.setIndex(De)),W.isMesh)$.wireframe===!0?(wt.setLineWidth($.wireframeLinewidth*Ze()),Ae.setMode(I.LINES)):Ae.setMode(I.TRIANGLES);else if(W.isLine){let Gt=$.linewidth;Gt===void 0&&(Gt=1),wt.setLineWidth(Gt*Ze()),W.isLineSegments?Ae.setMode(I.LINES):W.isLineLoop?Ae.setMode(I.LINE_LOOP):Ae.setMode(I.LINE_STRIP)}else W.isPoints?Ae.setMode(I.POINTS):W.isSprite&&Ae.setMode(I.TRIANGLES);if(W.isBatchedMesh)if(W._multiDrawInstances!==null)ua("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ae.renderMultiDrawInstances(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount,W._multiDrawInstances);else if(te.get("WEBGL_multi_draw"))Ae.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{const Gt=W._multiDrawStarts,Fe=W._multiDrawCounts,Me=W._multiDrawCount,hn=Rt?C.get(Rt).bytesPerElement:1,ei=Ft.get($).currentProgram.getUniforms();for(let fn=0;fn<Me;fn++)ei.setValue(I,"_gl_DrawID",fn),Ae.render(Gt[fn]/hn,Fe[fn])}else if(W.isInstancedMesh)Ae.renderInstances(pe,Ve,W.count);else if(Z.isInstancedBufferGeometry){const Gt=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,Fe=Math.min(Z.instanceCount,Gt);Ae.renderInstances(pe,Ve,Fe)}else Ae.render(pe,Ve)};function Re(T,G,Z){T.transparent===!0&&T.side===Hi&&T.forceSinglePass===!1?(T.side=Dn,T.needsUpdate=!0,Gr(T,G,Z),T.side=ur,T.needsUpdate=!0,Gr(T,G,Z),T.side=Hi):Gr(T,G,Z)}this.compile=function(T,G,Z=null){Z===null&&(Z=T),m=zt.get(Z),m.init(G),L.push(m),Z.traverseVisible(function(W){W.isLight&&W.layers.test(G.layers)&&(m.pushLight(W),W.castShadow&&m.pushShadow(W))}),T!==Z&&T.traverseVisible(function(W){W.isLight&&W.layers.test(G.layers)&&(m.pushLight(W),W.castShadow&&m.pushShadow(W))}),m.setupLights();const $=new Set;return T.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;const _t=W.material;if(_t)if(Array.isArray(_t))for(let bt=0;bt<_t.length;bt++){const It=_t[bt];Re(It,Z,W),$.add(It)}else Re(_t,Z,W),$.add(_t)}),m=L.pop(),$},this.compileAsync=function(T,G,Z=null){const $=this.compile(T,G,Z);return new Promise(W=>{function _t(){if($.forEach(function(bt){Ft.get(bt).currentProgram.isReady()&&$.delete(bt)}),$.size===0){W(T);return}setTimeout(_t,10)}te.get("KHR_parallel_shader_compile")!==null?_t():setTimeout(_t,10)})};let ye=null;function ti(T){ye&&ye(T)}function kn(){Ei.stop()}function kr(){Ei.start()}const Ei=new am;Ei.setAnimationLoop(ti),typeof self<"u"&&Ei.setContext(self),this.setAnimationLoop=function(T){ye=T,gt.setAnimationLoop(T),T===null?Ei.stop():Ei.start()},gt.addEventListener("sessionstart",kn),gt.addEventListener("sessionend",kr),this.render=function(T,G){if(G!==void 0&&G.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(B===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),gt.enabled===!0&&gt.isPresenting===!0&&(gt.cameraAutoUpdate===!0&&gt.updateCamera(G),G=gt.getCamera()),T.isScene===!0&&T.onBeforeRender(P,T,G,Y),m=zt.get(T,L.length),m.init(G),L.push(m),dt.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),Be.setFromProjectionMatrix(dt,xi,G.reversedDepth),it=this.localClippingEnabled,me=vt.init(this.clippingPlanes,it),v=j.get(T,N.length),v.init(),N.push(v),gt.enabled===!0&&gt.isPresenting===!0){const _t=P.xr.getDepthSensingMesh();_t!==null&&dr(_t,G,-1/0,P.sortObjects)}dr(T,G,0,P.sortObjects),v.finish(),P.sortObjects===!0&&v.sort(yt,At),he=gt.enabled===!1||gt.isPresenting===!1||gt.hasDepthSensing()===!1,he&&Ot.addToRenderList(v,T),this.info.render.frame++,me===!0&&vt.beginShadows();const Z=m.state.shadowsArray;Ut.render(Z,T,G),me===!0&&vt.endShadows(),this.info.autoReset===!0&&this.info.reset();const $=v.opaque,W=v.transmissive;if(m.setupLights(),G.isArrayCamera){const _t=G.cameras;if(W.length>0)for(let bt=0,It=_t.length;bt<It;bt++){const Rt=_t[bt];ga($,W,T,Rt)}he&&Ot.render(T);for(let bt=0,It=_t.length;bt<It;bt++){const Rt=_t[bt];_a(v,T,Rt,Rt.viewport)}}else W.length>0&&ga($,W,T,G),he&&Ot.render(T),_a(v,T,G);Y!==null&&F===0&&(ee.updateMultisampleRenderTarget(Y),ee.updateRenderTargetMipmap(Y)),T.isScene===!0&&T.onAfterRender(P,T,G),Mt.resetDefaultState(),R=-1,w=null,L.pop(),L.length>0?(m=L[L.length-1],me===!0&&vt.setGlobalState(P.clippingPlanes,m.state.camera)):m=null,N.pop(),N.length>0?v=N[N.length-1]:v=null};function dr(T,G,Z,$){if(T.visible===!1)return;if(T.layers.test(G.layers)){if(T.isGroup)Z=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(G);else if(T.isLight)m.pushLight(T),T.castShadow&&m.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Be.intersectsSprite(T)){$&&qt.setFromMatrixPosition(T.matrixWorld).applyMatrix4(dt);const bt=q.update(T),It=T.material;It.visible&&v.push(T,bt,It,Z,qt.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||Be.intersectsObject(T))){const bt=q.update(T),It=T.material;if($&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),qt.copy(T.boundingSphere.center)):(bt.boundingSphere===null&&bt.computeBoundingSphere(),qt.copy(bt.boundingSphere.center)),qt.applyMatrix4(T.matrixWorld).applyMatrix4(dt)),Array.isArray(It)){const Rt=bt.groups;for(let Xt=0,Kt=Rt.length;Xt<Kt;Xt++){const Vt=Rt[Xt],pe=It[Vt.materialIndex];pe&&pe.visible&&v.push(T,bt,pe,Z,qt.z,Vt)}}else It.visible&&v.push(T,bt,It,Z,qt.z,null)}}const _t=T.children;for(let bt=0,It=_t.length;bt<It;bt++)dr(_t[bt],G,Z,$)}function _a(T,G,Z,$){const W=T.opaque,_t=T.transmissive,bt=T.transparent;m.setupLightsView(Z),me===!0&&vt.setGlobalState(P.clippingPlanes,Z),$&&wt.viewport(H.copy($)),W.length>0&&Vr(W,G,Z),_t.length>0&&Vr(_t,G,Z),bt.length>0&&Vr(bt,G,Z),wt.buffers.depth.setTest(!0),wt.buffers.depth.setMask(!0),wt.buffers.color.setMask(!0),wt.setPolygonOffset(!1)}function ga(T,G,Z,$){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[$.id]===void 0&&(m.state.transmissionRenderTarget[$.id]=new Br(1,1,{generateMipmaps:!0,type:te.has("EXT_color_buffer_half_float")||te.has("EXT_color_buffer_float")?ha:Gi,minFilter:Nr,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Se.workingColorSpace}));const _t=m.state.transmissionRenderTarget[$.id],bt=$.viewport||H;_t.setSize(bt.z*P.transmissionResolutionScale,bt.w*P.transmissionResolutionScale);const It=P.getRenderTarget(),Rt=P.getActiveCubeFace(),Xt=P.getActiveMipmapLevel();P.setRenderTarget(_t),P.getClearColor(ut),at=P.getClearAlpha(),at<1&&P.setClearColor(16777215,.5),P.clear(),he&&Ot.render(Z);const Kt=P.toneMapping;P.toneMapping=cr;const Vt=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),m.setupLightsView($),me===!0&&vt.setGlobalState(P.clippingPlanes,$),Vr(T,Z,$),ee.updateMultisampleRenderTarget(_t),ee.updateRenderTargetMipmap(_t),te.has("WEBGL_multisampled_render_to_texture")===!1){let pe=!1;for(let be=0,Ve=G.length;be<Ve;be++){const De=G[be],Ae=De.object,Gt=De.geometry,Fe=De.material,Me=De.group;if(Fe.side===Hi&&Ae.layers.test($.layers)){const hn=Fe.side;Fe.side=Dn,Fe.needsUpdate=!0,va(Ae,Z,$,Gt,Fe,Me),Fe.side=hn,Fe.needsUpdate=!0,pe=!0}}pe===!0&&(ee.updateMultisampleRenderTarget(_t),ee.updateRenderTargetMipmap(_t))}P.setRenderTarget(It,Rt,Xt),P.setClearColor(ut,at),Vt!==void 0&&($.viewport=Vt),P.toneMapping=Kt}function Vr(T,G,Z){const $=G.isScene===!0?G.overrideMaterial:null;for(let W=0,_t=T.length;W<_t;W++){const bt=T[W],It=bt.object,Rt=bt.geometry,Xt=bt.group;let Kt=bt.material;Kt.allowOverride===!0&&$!==null&&(Kt=$),It.layers.test(Z.layers)&&va(It,G,Z,Rt,Kt,Xt)}}function va(T,G,Z,$,W,_t){T.onBeforeRender(P,G,Z,$,W,_t),T.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),W.onBeforeRender(P,G,Z,$,T,_t),W.transparent===!0&&W.side===Hi&&W.forceSinglePass===!1?(W.side=Dn,W.needsUpdate=!0,P.renderBufferDirect(Z,G,$,W,T,_t),W.side=ur,W.needsUpdate=!0,P.renderBufferDirect(Z,G,$,W,T,_t),W.side=Hi):P.renderBufferDirect(Z,G,$,W,T,_t),T.onAfterRender(P,G,Z,$,W,_t)}function Gr(T,G,Z){G.isScene!==!0&&(G=kt);const $=Ft.get(T),W=m.state.lights,_t=m.state.shadowsArray,bt=W.state.version,It=nt.getParameters(T,W.state,_t,G,Z),Rt=nt.getProgramCacheKey(It);let Xt=$.programs;$.environment=T.isMeshStandardMaterial?G.environment:null,$.fog=G.fog,$.envMap=(T.isMeshStandardMaterial?Ne:Te).get(T.envMap||$.environment),$.envMapRotation=$.environment!==null&&T.envMap===null?G.environmentRotation:T.envMapRotation,Xt===void 0&&(T.addEventListener("dispose",lt),Xt=new Map,$.programs=Xt);let Kt=Xt.get(Rt);if(Kt!==void 0){if($.currentProgram===Kt&&$.lightsStateVersion===bt)return Ma(T,It),Kt}else It.uniforms=nt.getUniforms(T),T.onBeforeCompile(It,P),Kt=nt.acquireProgram(It,Rt),Xt.set(Rt,Kt),$.uniforms=It.uniforms;const Vt=$.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Vt.clippingPlanes=vt.uniform),Ma(T,It),$.needsLights=tl(T),$.lightsStateVersion=bt,$.needsLights&&(Vt.ambientLightColor.value=W.state.ambient,Vt.lightProbe.value=W.state.probe,Vt.directionalLights.value=W.state.directional,Vt.directionalLightShadows.value=W.state.directionalShadow,Vt.spotLights.value=W.state.spot,Vt.spotLightShadows.value=W.state.spotShadow,Vt.rectAreaLights.value=W.state.rectArea,Vt.ltc_1.value=W.state.rectAreaLTC1,Vt.ltc_2.value=W.state.rectAreaLTC2,Vt.pointLights.value=W.state.point,Vt.pointLightShadows.value=W.state.pointShadow,Vt.hemisphereLights.value=W.state.hemi,Vt.directionalShadowMap.value=W.state.directionalShadowMap,Vt.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Vt.spotShadowMap.value=W.state.spotShadowMap,Vt.spotLightMatrix.value=W.state.spotLightMatrix,Vt.spotLightMap.value=W.state.spotLightMap,Vt.pointShadowMap.value=W.state.pointShadowMap,Vt.pointShadowMatrix.value=W.state.pointShadowMatrix),$.currentProgram=Kt,$.uniformsList=null,Kt}function xa(T){if(T.uniformsList===null){const G=T.currentProgram.getUniforms();T.uniformsList=Bo.seqWithValue(G.seq,T.uniforms)}return T.uniformsList}function Ma(T,G){const Z=Ft.get(T);Z.outputColorSpace=G.outputColorSpace,Z.batching=G.batching,Z.batchingColor=G.batchingColor,Z.instancing=G.instancing,Z.instancingColor=G.instancingColor,Z.instancingMorph=G.instancingMorph,Z.skinning=G.skinning,Z.morphTargets=G.morphTargets,Z.morphNormals=G.morphNormals,Z.morphColors=G.morphColors,Z.morphTargetsCount=G.morphTargetsCount,Z.numClippingPlanes=G.numClippingPlanes,Z.numIntersection=G.numClipIntersection,Z.vertexAlphas=G.vertexAlphas,Z.vertexTangents=G.vertexTangents,Z.toneMapping=G.toneMapping}function jo(T,G,Z,$,W){G.isScene!==!0&&(G=kt),ee.resetTextureUnits();const _t=G.fog,bt=$.isMeshStandardMaterial?G.environment:null,It=Y===null?P.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:ws,Rt=($.isMeshStandardMaterial?Ne:Te).get($.envMap||bt),Xt=$.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,Kt=!!Z.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Vt=!!Z.morphAttributes.position,pe=!!Z.morphAttributes.normal,be=!!Z.morphAttributes.color;let Ve=cr;$.toneMapped&&(Y===null||Y.isXRRenderTarget===!0)&&(Ve=P.toneMapping);const De=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,Ae=De!==void 0?De.length:0,Gt=Ft.get($),Fe=m.state.lights;if(me===!0&&(it===!0||T!==w)){const on=T===w&&$.id===R;vt.setState($,T,on)}let Me=!1;$.version===Gt.__version?(Gt.needsLights&&Gt.lightsStateVersion!==Fe.state.version||Gt.outputColorSpace!==It||W.isBatchedMesh&&Gt.batching===!1||!W.isBatchedMesh&&Gt.batching===!0||W.isBatchedMesh&&Gt.batchingColor===!0&&W.colorTexture===null||W.isBatchedMesh&&Gt.batchingColor===!1&&W.colorTexture!==null||W.isInstancedMesh&&Gt.instancing===!1||!W.isInstancedMesh&&Gt.instancing===!0||W.isSkinnedMesh&&Gt.skinning===!1||!W.isSkinnedMesh&&Gt.skinning===!0||W.isInstancedMesh&&Gt.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Gt.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&Gt.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&Gt.instancingMorph===!1&&W.morphTexture!==null||Gt.envMap!==Rt||$.fog===!0&&Gt.fog!==_t||Gt.numClippingPlanes!==void 0&&(Gt.numClippingPlanes!==vt.numPlanes||Gt.numIntersection!==vt.numIntersection)||Gt.vertexAlphas!==Xt||Gt.vertexTangents!==Kt||Gt.morphTargets!==Vt||Gt.morphNormals!==pe||Gt.morphColors!==be||Gt.toneMapping!==Ve||Gt.morphTargetsCount!==Ae)&&(Me=!0):(Me=!0,Gt.__version=$.version);let hn=Gt.currentProgram;Me===!0&&(hn=Gr($,G,W));let ei=!1,fn=!1,pr=!1;const ze=hn.getUniforms(),vn=Gt.uniforms;if(wt.useProgram(hn.program)&&(ei=!0,fn=!0,pr=!0),$.id!==R&&(R=$.id,fn=!0),ei||w!==T){wt.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),ze.setValue(I,"projectionMatrix",T.projectionMatrix),ze.setValue(I,"viewMatrix",T.matrixWorldInverse);const ln=ze.map.cameraPosition;ln!==void 0&&ln.setValue(I,Ct.setFromMatrixPosition(T.matrixWorld)),Qt.logarithmicDepthBuffer&&ze.setValue(I,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&ze.setValue(I,"isOrthographic",T.isOrthographicCamera===!0),w!==T&&(w=T,fn=!0,pr=!0)}if(W.isSkinnedMesh){ze.setOptional(I,W,"bindMatrix"),ze.setOptional(I,W,"bindMatrixInverse");const on=W.skeleton;on&&(on.boneTexture===null&&on.computeBoneTexture(),ze.setValue(I,"boneTexture",on.boneTexture,ee))}W.isBatchedMesh&&(ze.setOptional(I,W,"batchingTexture"),ze.setValue(I,"batchingTexture",W._matricesTexture,ee),ze.setOptional(I,W,"batchingIdTexture"),ze.setValue(I,"batchingIdTexture",W._indirectTexture,ee),ze.setOptional(I,W,"batchingColorTexture"),W._colorsTexture!==null&&ze.setValue(I,"batchingColorTexture",W._colorsTexture,ee));const dn=Z.morphAttributes;if((dn.position!==void 0||dn.normal!==void 0||dn.color!==void 0)&&mt.update(W,Z,hn),(fn||Gt.receiveShadow!==W.receiveShadow)&&(Gt.receiveShadow=W.receiveShadow,ze.setValue(I,"receiveShadow",W.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(vn.envMap.value=Rt,vn.flipEnvMap.value=Rt.isCubeTexture&&Rt.isRenderTargetTexture===!1?-1:1),$.isMeshStandardMaterial&&$.envMap===null&&G.environment!==null&&(vn.envMapIntensity.value=G.environmentIntensity),fn&&(ze.setValue(I,"toneMappingExposure",P.toneMappingExposure),Gt.needsLights&&ya(vn,pr),_t&&$.fog===!0&&ht.refreshFogUniforms(vn,_t),ht.refreshMaterialUniforms(vn,$,Q,ct,m.state.transmissionRenderTarget[T.id]),Bo.upload(I,xa(Gt),vn,ee)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(Bo.upload(I,xa(Gt),vn,ee),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&ze.setValue(I,"center",W.center),ze.setValue(I,"modelViewMatrix",W.modelViewMatrix),ze.setValue(I,"normalMatrix",W.normalMatrix),ze.setValue(I,"modelMatrix",W.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const on=$.uniformsGroups;for(let ln=0,mr=on.length;ln<mr;ln++){const ni=on[ln];re.update(ni,hn),re.bind(ni,hn)}}return hn}function ya(T,G){T.ambientLightColor.needsUpdate=G,T.lightProbe.needsUpdate=G,T.directionalLights.needsUpdate=G,T.directionalLightShadows.needsUpdate=G,T.pointLights.needsUpdate=G,T.pointLightShadows.needsUpdate=G,T.spotLights.needsUpdate=G,T.spotLightShadows.needsUpdate=G,T.rectAreaLights.needsUpdate=G,T.hemisphereLights.needsUpdate=G}function tl(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return Y},this.setRenderTargetTextures=function(T,G,Z){const $=Ft.get(T);$.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,$.__autoAllocateDepthBuffer===!1&&($.__useRenderToTexture=!1),Ft.get(T.texture).__webglTexture=G,Ft.get(T.depthTexture).__webglTexture=$.__autoAllocateDepthBuffer?void 0:Z,$.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,G){const Z=Ft.get(T);Z.__webglFramebuffer=G,Z.__useDefaultFramebuffer=G===void 0};const el=I.createFramebuffer();this.setRenderTarget=function(T,G=0,Z=0){Y=T,O=G,F=Z;let $=!0,W=null,_t=!1,bt=!1;if(T){const Rt=Ft.get(T);if(Rt.__useDefaultFramebuffer!==void 0)wt.bindFramebuffer(I.FRAMEBUFFER,null),$=!1;else if(Rt.__webglFramebuffer===void 0)ee.setupRenderTarget(T);else if(Rt.__hasExternalTextures)ee.rebindTextures(T,Ft.get(T.texture).__webglTexture,Ft.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Vt=T.depthTexture;if(Rt.__boundDepthTexture!==Vt){if(Vt!==null&&Ft.has(Vt)&&(T.width!==Vt.image.width||T.height!==Vt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ee.setupDepthRenderbuffer(T)}}const Xt=T.texture;(Xt.isData3DTexture||Xt.isDataArrayTexture||Xt.isCompressedArrayTexture)&&(bt=!0);const Kt=Ft.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Kt[G])?W=Kt[G][Z]:W=Kt[G],_t=!0):T.samples>0&&ee.useMultisampledRTT(T)===!1?W=Ft.get(T).__webglMultisampledFramebuffer:Array.isArray(Kt)?W=Kt[Z]:W=Kt,H.copy(T.viewport),J.copy(T.scissor),et=T.scissorTest}else H.copy(Lt).multiplyScalar(Q).floor(),J.copy(ue).multiplyScalar(Q).floor(),et=Pe;if(Z!==0&&(W=el),wt.bindFramebuffer(I.FRAMEBUFFER,W)&&$&&wt.drawBuffers(T,W),wt.viewport(H),wt.scissor(J),wt.setScissorTest(et),_t){const Rt=Ft.get(T.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+G,Rt.__webglTexture,Z)}else if(bt){const Rt=G;for(let Xt=0;Xt<T.textures.length;Xt++){const Kt=Ft.get(T.textures[Xt]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+Xt,Kt.__webglTexture,Z,Rt)}}else if(T!==null&&Z!==0){const Rt=Ft.get(T.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Rt.__webglTexture,Z)}R=-1},this.readRenderTargetPixels=function(T,G,Z,$,W,_t,bt,It=0){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Rt=Ft.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&bt!==void 0&&(Rt=Rt[bt]),Rt){wt.bindFramebuffer(I.FRAMEBUFFER,Rt);try{const Xt=T.textures[It],Kt=Xt.format,Vt=Xt.type;if(!Qt.textureFormatReadable(Kt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Qt.textureTypeReadable(Vt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=T.width-$&&Z>=0&&Z<=T.height-W&&(T.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+It),I.readPixels(G,Z,$,W,Bt.convert(Kt),Bt.convert(Vt),_t))}finally{const Xt=Y!==null?Ft.get(Y).__webglFramebuffer:null;wt.bindFramebuffer(I.FRAMEBUFFER,Xt)}}},this.readRenderTargetPixelsAsync=async function(T,G,Z,$,W,_t,bt,It=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Rt=Ft.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&bt!==void 0&&(Rt=Rt[bt]),Rt)if(G>=0&&G<=T.width-$&&Z>=0&&Z<=T.height-W){wt.bindFramebuffer(I.FRAMEBUFFER,Rt);const Xt=T.textures[It],Kt=Xt.format,Vt=Xt.type;if(!Qt.textureFormatReadable(Kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Qt.textureTypeReadable(Vt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const pe=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,pe),I.bufferData(I.PIXEL_PACK_BUFFER,_t.byteLength,I.STREAM_READ),T.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+It),I.readPixels(G,Z,$,W,Bt.convert(Kt),Bt.convert(Vt),0);const be=Y!==null?Ft.get(Y).__webglFramebuffer:null;wt.bindFramebuffer(I.FRAMEBUFFER,be);const Ve=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await SS(I,Ve,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,pe),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,_t),I.deleteBuffer(pe),I.deleteSync(Ve),_t}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,G=null,Z=0){const $=Math.pow(2,-Z),W=Math.floor(T.image.width*$),_t=Math.floor(T.image.height*$),bt=G!==null?G.x:0,It=G!==null?G.y:0;ee.setTexture2D(T,0),I.copyTexSubImage2D(I.TEXTURE_2D,Z,0,0,bt,It,W,_t),wt.unbindTexture()};const nl=I.createFramebuffer(),il=I.createFramebuffer();this.copyTextureToTexture=function(T,G,Z=null,$=null,W=0,_t=null){_t===null&&(W!==0?(ua("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),_t=W,W=0):_t=0);let bt,It,Rt,Xt,Kt,Vt,pe,be,Ve;const De=T.isCompressedTexture?T.mipmaps[_t]:T.image;if(Z!==null)bt=Z.max.x-Z.min.x,It=Z.max.y-Z.min.y,Rt=Z.isBox3?Z.max.z-Z.min.z:1,Xt=Z.min.x,Kt=Z.min.y,Vt=Z.isBox3?Z.min.z:0;else{const dn=Math.pow(2,-W);bt=Math.floor(De.width*dn),It=Math.floor(De.height*dn),T.isDataArrayTexture?Rt=De.depth:T.isData3DTexture?Rt=Math.floor(De.depth*dn):Rt=1,Xt=0,Kt=0,Vt=0}$!==null?(pe=$.x,be=$.y,Ve=$.z):(pe=0,be=0,Ve=0);const Ae=Bt.convert(G.format),Gt=Bt.convert(G.type);let Fe;G.isData3DTexture?(ee.setTexture3D(G,0),Fe=I.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(ee.setTexture2DArray(G,0),Fe=I.TEXTURE_2D_ARRAY):(ee.setTexture2D(G,0),Fe=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,G.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,G.unpackAlignment);const Me=I.getParameter(I.UNPACK_ROW_LENGTH),hn=I.getParameter(I.UNPACK_IMAGE_HEIGHT),ei=I.getParameter(I.UNPACK_SKIP_PIXELS),fn=I.getParameter(I.UNPACK_SKIP_ROWS),pr=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,De.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,De.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Xt),I.pixelStorei(I.UNPACK_SKIP_ROWS,Kt),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Vt);const ze=T.isDataArrayTexture||T.isData3DTexture,vn=G.isDataArrayTexture||G.isData3DTexture;if(T.isDepthTexture){const dn=Ft.get(T),on=Ft.get(G),ln=Ft.get(dn.__renderTarget),mr=Ft.get(on.__renderTarget);wt.bindFramebuffer(I.READ_FRAMEBUFFER,ln.__webglFramebuffer),wt.bindFramebuffer(I.DRAW_FRAMEBUFFER,mr.__webglFramebuffer);for(let ni=0;ni<Rt;ni++)ze&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Ft.get(T).__webglTexture,W,Vt+ni),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Ft.get(G).__webglTexture,_t,Ve+ni)),I.blitFramebuffer(Xt,Kt,bt,It,pe,be,bt,It,I.DEPTH_BUFFER_BIT,I.NEAREST);wt.bindFramebuffer(I.READ_FRAMEBUFFER,null),wt.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(W!==0||T.isRenderTargetTexture||Ft.has(T)){const dn=Ft.get(T),on=Ft.get(G);wt.bindFramebuffer(I.READ_FRAMEBUFFER,nl),wt.bindFramebuffer(I.DRAW_FRAMEBUFFER,il);for(let ln=0;ln<Rt;ln++)ze?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,dn.__webglTexture,W,Vt+ln):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,dn.__webglTexture,W),vn?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,on.__webglTexture,_t,Ve+ln):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,on.__webglTexture,_t),W!==0?I.blitFramebuffer(Xt,Kt,bt,It,pe,be,bt,It,I.COLOR_BUFFER_BIT,I.NEAREST):vn?I.copyTexSubImage3D(Fe,_t,pe,be,Ve+ln,Xt,Kt,bt,It):I.copyTexSubImage2D(Fe,_t,pe,be,Xt,Kt,bt,It);wt.bindFramebuffer(I.READ_FRAMEBUFFER,null),wt.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else vn?T.isDataTexture||T.isData3DTexture?I.texSubImage3D(Fe,_t,pe,be,Ve,bt,It,Rt,Ae,Gt,De.data):G.isCompressedArrayTexture?I.compressedTexSubImage3D(Fe,_t,pe,be,Ve,bt,It,Rt,Ae,De.data):I.texSubImage3D(Fe,_t,pe,be,Ve,bt,It,Rt,Ae,Gt,De):T.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,_t,pe,be,bt,It,Ae,Gt,De.data):T.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,_t,pe,be,De.width,De.height,Ae,De.data):I.texSubImage2D(I.TEXTURE_2D,_t,pe,be,bt,It,Ae,Gt,De);I.pixelStorei(I.UNPACK_ROW_LENGTH,Me),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,hn),I.pixelStorei(I.UNPACK_SKIP_PIXELS,ei),I.pixelStorei(I.UNPACK_SKIP_ROWS,fn),I.pixelStorei(I.UNPACK_SKIP_IMAGES,pr),_t===0&&G.generateMipmaps&&I.generateMipmap(Fe),wt.unbindTexture()},this.initRenderTarget=function(T){Ft.get(T).__webglFramebuffer===void 0&&ee.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?ee.setTextureCube(T,0):T.isData3DTexture?ee.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?ee.setTexture2DArray(T,0):ee.setTexture2D(T,0),wt.unbindTexture()},this.resetState=function(){O=0,F=0,Y=null,wt.reset(),Mt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return xi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=Se._getDrawingBufferColorSpace(t),e.unpackColorSpace=Se._getUnpackColorSpace()}}var e1=Object.create,hm=Object.defineProperty,n1=Object.getOwnPropertyDescriptor,i1=Object.getOwnPropertyNames,r1=Object.getPrototypeOf,s1=Object.prototype.hasOwnProperty,a1=(i,t)=>()=>(t||i((t={exports:{}}).exports,t),t.exports),o1=(i,t,e,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let a of i1(t))!s1.call(i,a)&&a!==e&&hm(i,a,{get:()=>t[a],enumerable:!(r=n1(t,a))||r.enumerable});return i},hr=(i,t,e)=>(e=i!=null?e1(r1(i)):{},o1(hm(e,"default",{value:i,enumerable:!0}),i)),fr=a1((i,t)=>{(function(){var e,r="4.17.21",a=200,o="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",c="Expected a function",u="Invalid `variable` option passed into `_.template`",d="__lodash_hash_undefined__",h=500,p="__lodash_placeholder__",_=1,g=2,x=4,E=1,A=2,v=1,m=2,N=4,L=8,P=16,B=32,O=64,F=128,Y=256,R=512,w=30,H="...",J=800,et=16,ut=1,at=2,ot=3,ct=1/0,Q=9007199254740991,yt=17976931348623157e292,At=NaN,Lt=4294967295,ue=Lt-1,Pe=Lt>>>1,Be=[["ary",F],["bind",v],["bindKey",m],["curry",L],["curryRight",P],["flip",R],["partial",B],["partialRight",O],["rearg",Y]],me="[object Arguments]",it="[object Array]",dt="[object AsyncFunction]",Ct="[object Boolean]",qt="[object Date]",kt="[object DOMException]",he="[object Error]",Ze="[object Function]",I="[object GeneratorFunction]",ge="[object Map]",te="[object Number]",Qt="[object Null]",wt="[object Object]",Ue="[object Promise]",Ft="[object Proxy]",ee="[object RegExp]",Te="[object Set]",Ne="[object String]",C="[object Symbol]",y="[object Undefined]",q="[object WeakMap]",nt="[object WeakSet]",ht="[object ArrayBuffer]",j="[object DataView]",zt="[object Float32Array]",vt="[object Float64Array]",Ut="[object Int8Array]",Ot="[object Int16Array]",mt="[object Int32Array]",St="[object Uint8Array]",Wt="[object Uint8ClampedArray]",Bt="[object Uint16Array]",Mt="[object Uint32Array]",re=/\b__p \+= '';/g,z=/\b(__p \+=) '' \+/g,gt=/(__e\(.*?\)|\b__t\)) \+\n'';/g,xt=/&(?:amp|lt|gt|quot|#39);/g,Dt=/[&<>"']/g,pt=RegExp(xt.source),lt=RegExp(Dt.source),Nt=/<%-([\s\S]+?)%>/g,ne=/<%([\s\S]+?)%>/g,Re=/<%=([\s\S]+?)%>/g,ye=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,ti=/^\w*$/,kn=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,kr=/[\\^$.*+?()[\]{}|]/g,Ei=RegExp(kr.source),dr=/^\s+/,_a=/\s/,ga=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,Vr=/\{\n\/\* \[wrapped with (.+)\] \*/,va=/,? & /,Gr=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,xa=/[()=,{}\[\]\/\s]/,Ma=/\\(\\)?/g,jo=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,ya=/\w*$/,tl=/^[-+]0x[0-9a-f]+$/i,el=/^0b[01]+$/i,nl=/^\[object .+?Constructor\]$/,il=/^0o[0-7]+$/i,T=/^(?:0|[1-9]\d*)$/,G=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,Z=/($^)/,$=/['\n\r\u2028\u2029\\]/g,W="\\ud800-\\udfff",_t="\\u0300-\\u036f",bt="\\ufe20-\\ufe2f",It="\\u20d0-\\u20ff",Rt=_t+bt+It,Xt="\\u2700-\\u27bf",Kt="a-z\\xdf-\\xf6\\xf8-\\xff",Vt="\\xac\\xb1\\xd7\\xf7",pe="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",be="\\u2000-\\u206f",Ve=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",De="A-Z\\xc0-\\xd6\\xd8-\\xde",Ae="\\ufe0e\\ufe0f",Gt=Vt+pe+be+Ve,Fe="['’]",Me="["+W+"]",hn="["+Gt+"]",ei="["+Rt+"]",fn="\\d+",pr="["+Xt+"]",ze="["+Kt+"]",vn="[^"+W+Gt+fn+Xt+Kt+De+"]",dn="\\ud83c[\\udffb-\\udfff]",on="(?:"+ei+"|"+dn+")",ln="[^"+W+"]",mr="(?:\\ud83c[\\udde6-\\uddff]){2}",ni="[\\ud800-\\udbff][\\udc00-\\udfff]",Wr="["+De+"]",nh="\\u200d",ih="(?:"+ze+"|"+vn+")",ym="(?:"+Wr+"|"+vn+")",rh="(?:"+Fe+"(?:d|ll|m|re|s|t|ve))?",sh="(?:"+Fe+"(?:D|LL|M|RE|S|T|VE))?",ah=on+"?",oh="["+Ae+"]?",Sm="(?:"+nh+"(?:"+[ln,mr,ni].join("|")+")"+oh+ah+")*",Em="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Tm="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",lh=oh+ah+Sm,bm="(?:"+[pr,mr,ni].join("|")+")"+lh,Am="(?:"+[ln+ei+"?",ei,mr,ni,Me].join("|")+")",wm=RegExp(Fe,"g"),Rm=RegExp(ei,"g"),rl=RegExp(dn+"(?="+dn+")|"+Am+lh,"g"),Cm=RegExp([Wr+"?"+ze+"+"+rh+"(?="+[hn,Wr,"$"].join("|")+")",ym+"+"+sh+"(?="+[hn,Wr+ih,"$"].join("|")+")",Wr+"?"+ih+"+"+rh,Wr+"+"+sh,Tm,Em,fn,bm].join("|"),"g"),Pm=RegExp("["+nh+W+Rt+Ae+"]"),Dm=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,Lm=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],Im=-1,ke={};ke[zt]=ke[vt]=ke[Ut]=ke[Ot]=ke[mt]=ke[St]=ke[Wt]=ke[Bt]=ke[Mt]=!0,ke[me]=ke[it]=ke[ht]=ke[Ct]=ke[j]=ke[qt]=ke[he]=ke[Ze]=ke[ge]=ke[te]=ke[wt]=ke[ee]=ke[Te]=ke[Ne]=ke[q]=!1;var He={};He[me]=He[it]=He[ht]=He[j]=He[Ct]=He[qt]=He[zt]=He[vt]=He[Ut]=He[Ot]=He[mt]=He[ge]=He[te]=He[wt]=He[ee]=He[Te]=He[Ne]=He[C]=He[St]=He[Wt]=He[Bt]=He[Mt]=!0,He[he]=He[Ze]=He[q]=!1;var Um={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},Nm={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Fm={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},Om={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},Bm=parseFloat,zm=parseInt,ch=typeof global=="object"&&global&&global.Object===Object&&global,Hm=typeof self=="object"&&self&&self.Object===Object&&self,rn=ch||Hm||Function("return this")(),sl=typeof i=="object"&&i&&!i.nodeType&&i,_r=sl&&typeof t=="object"&&t&&!t.nodeType&&t,uh=_r&&_r.exports===sl,al=uh&&ch.process,Vn=function(){try{var k=_r&&_r.require&&_r.require("util").types;return k||al&&al.binding&&al.binding("util")}catch{}}(),hh=Vn&&Vn.isArrayBuffer,fh=Vn&&Vn.isDate,dh=Vn&&Vn.isMap,ph=Vn&&Vn.isRegExp,mh=Vn&&Vn.isSet,_h=Vn&&Vn.isTypedArray;function Ln(k,tt,K){switch(K.length){case 0:return k.call(tt);case 1:return k.call(tt,K[0]);case 2:return k.call(tt,K[0],K[1]);case 3:return k.call(tt,K[0],K[1],K[2])}return k.apply(tt,K)}function km(k,tt,K,Pt){for(var ie=-1,Ee=k==null?0:k.length;++ie<Ee;){var Qe=k[ie];tt(Pt,Qe,K(Qe),k)}return Pt}function Gn(k,tt){for(var K=-1,Pt=k==null?0:k.length;++K<Pt&&tt(k[K],K,k)!==!1;);return k}function Vm(k,tt){for(var K=k==null?0:k.length;K--&&tt(k[K],K,k)!==!1;);return k}function gh(k,tt){for(var K=-1,Pt=k==null?0:k.length;++K<Pt;)if(!tt(k[K],K,k))return!1;return!0}function Wi(k,tt){for(var K=-1,Pt=k==null?0:k.length,ie=0,Ee=[];++K<Pt;){var Qe=k[K];tt(Qe,K,k)&&(Ee[ie++]=Qe)}return Ee}function Sa(k,tt){var K=k==null?0:k.length;return!!K&&Xr(k,tt,0)>-1}function ol(k,tt,K){for(var Pt=-1,ie=k==null?0:k.length;++Pt<ie;)if(K(tt,k[Pt]))return!0;return!1}function Ge(k,tt){for(var K=-1,Pt=k==null?0:k.length,ie=Array(Pt);++K<Pt;)ie[K]=tt(k[K],K,k);return ie}function Xi(k,tt){for(var K=-1,Pt=tt.length,ie=k.length;++K<Pt;)k[ie+K]=tt[K];return k}function ll(k,tt,K,Pt){var ie=-1,Ee=k==null?0:k.length;for(Pt&&Ee&&(K=k[++ie]);++ie<Ee;)K=tt(K,k[ie],ie,k);return K}function Gm(k,tt,K,Pt){var ie=k==null?0:k.length;for(Pt&&ie&&(K=k[--ie]);ie--;)K=tt(K,k[ie],ie,k);return K}function cl(k,tt){for(var K=-1,Pt=k==null?0:k.length;++K<Pt;)if(tt(k[K],K,k))return!0;return!1}var Wm=ul("length");function Xm(k){return k.split("")}function qm(k){return k.match(Gr)||[]}function vh(k,tt,K){var Pt;return K(k,function(ie,Ee,Qe){if(tt(ie,Ee,Qe))return Pt=Ee,!1}),Pt}function Ea(k,tt,K,Pt){for(var ie=k.length,Ee=K+(Pt?1:-1);Pt?Ee--:++Ee<ie;)if(tt(k[Ee],Ee,k))return Ee;return-1}function Xr(k,tt,K){return tt===tt?r_(k,tt,K):Ea(k,xh,K)}function Ym(k,tt,K,Pt){for(var ie=K-1,Ee=k.length;++ie<Ee;)if(Pt(k[ie],tt))return ie;return-1}function xh(k){return k!==k}function Mh(k,tt){var K=k==null?0:k.length;return K?fl(k,tt)/K:At}function ul(k){return function(tt){return tt==null?e:tt[k]}}function hl(k){return function(tt){return k==null?e:k[tt]}}function yh(k,tt,K,Pt,ie){return ie(k,function(Ee,Qe,Oe){K=Pt?(Pt=!1,Ee):tt(K,Ee,Qe,Oe)}),K}function Zm(k,tt){var K=k.length;for(k.sort(tt);K--;)k[K]=k[K].value;return k}function fl(k,tt){for(var K,Pt=-1,ie=k.length;++Pt<ie;){var Ee=tt(k[Pt]);Ee!==e&&(K=K===e?Ee:K+Ee)}return K}function dl(k,tt){for(var K=-1,Pt=Array(k);++K<k;)Pt[K]=tt(K);return Pt}function Km(k,tt){return Ge(tt,function(K){return[K,k[K]]})}function Sh(k){return k&&k.slice(0,Ah(k)+1).replace(dr,"")}function In(k){return function(tt){return k(tt)}}function pl(k,tt){return Ge(tt,function(K){return k[K]})}function Is(k,tt){return k.has(tt)}function Eh(k,tt){for(var K=-1,Pt=k.length;++K<Pt&&Xr(tt,k[K],0)>-1;);return K}function Th(k,tt){for(var K=k.length;K--&&Xr(tt,k[K],0)>-1;);return K}function $m(k,tt){for(var K=k.length,Pt=0;K--;)k[K]===tt&&++Pt;return Pt}var Jm=hl(Um),Qm=hl(Nm);function jm(k){return"\\"+Om[k]}function t_(k,tt){return k==null?e:k[tt]}function qr(k){return Pm.test(k)}function e_(k){return Dm.test(k)}function n_(k){for(var tt,K=[];!(tt=k.next()).done;)K.push(tt.value);return K}function ml(k){var tt=-1,K=Array(k.size);return k.forEach(function(Pt,ie){K[++tt]=[ie,Pt]}),K}function bh(k,tt){return function(K){return k(tt(K))}}function qi(k,tt){for(var K=-1,Pt=k.length,ie=0,Ee=[];++K<Pt;){var Qe=k[K];(Qe===tt||Qe===p)&&(k[K]=p,Ee[ie++]=K)}return Ee}function Ta(k){var tt=-1,K=Array(k.size);return k.forEach(function(Pt){K[++tt]=Pt}),K}function i_(k){var tt=-1,K=Array(k.size);return k.forEach(function(Pt){K[++tt]=[Pt,Pt]}),K}function r_(k,tt,K){for(var Pt=K-1,ie=k.length;++Pt<ie;)if(k[Pt]===tt)return Pt;return-1}function s_(k,tt,K){for(var Pt=K+1;Pt--;)if(k[Pt]===tt)return Pt;return Pt}function Yr(k){return qr(k)?o_(k):Wm(k)}function ii(k){return qr(k)?l_(k):Xm(k)}function Ah(k){for(var tt=k.length;tt--&&_a.test(k.charAt(tt)););return tt}var a_=hl(Fm);function o_(k){for(var tt=rl.lastIndex=0;rl.test(k);)++tt;return tt}function l_(k){return k.match(rl)||[]}function c_(k){return k.match(Cm)||[]}var u_=function k(tt){tt=tt==null?rn:Yi.defaults(rn.Object(),tt,Yi.pick(rn,Lm));var K=tt.Array,Pt=tt.Date,ie=tt.Error,Ee=tt.Function,Qe=tt.Math,Oe=tt.Object,_l=tt.RegExp,h_=tt.String,Wn=tt.TypeError,ba=K.prototype,f_=Ee.prototype,Zr=Oe.prototype,Aa=tt["__core-js_shared__"],wa=f_.toString,Ce=Zr.hasOwnProperty,d_=0,wh=function(){var n=/[^.]+$/.exec(Aa&&Aa.keys&&Aa.keys.IE_PROTO||"");return n?"Symbol(src)_1."+n:""}(),Ra=Zr.toString,p_=wa.call(Oe),m_=rn._,__=_l("^"+wa.call(Ce).replace(kr,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Ca=uh?tt.Buffer:e,Zi=tt.Symbol,Pa=tt.Uint8Array,Rh=Ca?Ca.allocUnsafe:e,Da=bh(Oe.getPrototypeOf,Oe),Ch=Oe.create,Ph=Zr.propertyIsEnumerable,La=ba.splice,Dh=Zi?Zi.isConcatSpreadable:e,Us=Zi?Zi.iterator:e,gr=Zi?Zi.toStringTag:e,Ia=function(){try{var n=Sr(Oe,"defineProperty");return n({},"",{}),n}catch{}}(),g_=tt.clearTimeout!==rn.clearTimeout&&tt.clearTimeout,v_=Pt&&Pt.now!==rn.Date.now&&Pt.now,x_=tt.setTimeout!==rn.setTimeout&&tt.setTimeout,Ua=Qe.ceil,Na=Qe.floor,gl=Oe.getOwnPropertySymbols,M_=Ca?Ca.isBuffer:e,Lh=tt.isFinite,y_=ba.join,S_=bh(Oe.keys,Oe),je=Qe.max,pn=Qe.min,E_=Pt.now,T_=tt.parseInt,Ih=Qe.random,b_=ba.reverse,vl=Sr(tt,"DataView"),Ns=Sr(tt,"Map"),xl=Sr(tt,"Promise"),Kr=Sr(tt,"Set"),Fs=Sr(tt,"WeakMap"),Os=Sr(Oe,"create"),Fa=Fs&&new Fs,$r={},A_=Er(vl),w_=Er(Ns),R_=Er(xl),C_=Er(Kr),P_=Er(Fs),Oa=Zi?Zi.prototype:e,Bs=Oa?Oa.valueOf:e,Uh=Oa?Oa.toString:e;function S(n){if(Xe(n)&&!se(n)&&!(n instanceof ve)){if(n instanceof Xn)return n;if(Ce.call(n,"__wrapped__"))return Ff(n)}return new Xn(n)}var Jr=function(){function n(){}return function(s){if(!We(s))return{};if(Ch)return Ch(s);n.prototype=s;var l=new n;return n.prototype=e,l}}();function Ba(){}function Xn(n,s){this.__wrapped__=n,this.__actions__=[],this.__chain__=!!s,this.__index__=0,this.__values__=e}S.templateSettings={escape:Nt,evaluate:ne,interpolate:Re,variable:"",imports:{_:S}},S.prototype=Ba.prototype,S.prototype.constructor=S,Xn.prototype=Jr(Ba.prototype),Xn.prototype.constructor=Xn;function ve(n){this.__wrapped__=n,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=Lt,this.__views__=[]}function D_(){var n=new ve(this.__wrapped__);return n.__actions__=An(this.__actions__),n.__dir__=this.__dir__,n.__filtered__=this.__filtered__,n.__iteratees__=An(this.__iteratees__),n.__takeCount__=this.__takeCount__,n.__views__=An(this.__views__),n}function L_(){if(this.__filtered__){var n=new ve(this);n.__dir__=-1,n.__filtered__=!0}else n=this.clone(),n.__dir__*=-1;return n}function I_(){var n=this.__wrapped__.value(),s=this.__dir__,l=se(n),f=s<0,M=l?n.length:0,b=Xg(0,M,this.__views__),D=b.start,U=b.end,V=U-D,rt=f?U:D-1,st=this.__iteratees__,ft=st.length,Et=0,Ht=pn(V,this.__takeCount__);if(!l||!f&&M==V&&Ht==V)return sf(n,this.__actions__);var $t=[];t:for(;V--&&Et<Ht;){rt+=s;for(var le=-1,Jt=n[rt];++le<ft;){var _e=st[le],xe=_e.iteratee,Fn=_e.type,yn=xe(Jt);if(Fn==at)Jt=yn;else if(!yn){if(Fn==ut)continue t;break t}}$t[Et++]=Jt}return $t}ve.prototype=Jr(Ba.prototype),ve.prototype.constructor=ve;function vr(n){var s=-1,l=n==null?0:n.length;for(this.clear();++s<l;){var f=n[s];this.set(f[0],f[1])}}function U_(){this.__data__=Os?Os(null):{},this.size=0}function N_(n){var s=this.has(n)&&delete this.__data__[n];return this.size-=s?1:0,s}function F_(n){var s=this.__data__;if(Os){var l=s[n];return l===d?e:l}return Ce.call(s,n)?s[n]:e}function O_(n){var s=this.__data__;return Os?s[n]!==e:Ce.call(s,n)}function B_(n,s){var l=this.__data__;return this.size+=this.has(n)?0:1,l[n]=Os&&s===e?d:s,this}vr.prototype.clear=U_,vr.prototype.delete=N_,vr.prototype.get=F_,vr.prototype.has=O_,vr.prototype.set=B_;function Ti(n){var s=-1,l=n==null?0:n.length;for(this.clear();++s<l;){var f=n[s];this.set(f[0],f[1])}}function z_(){this.__data__=[],this.size=0}function H_(n){var s=this.__data__,l=za(s,n);if(l<0)return!1;var f=s.length-1;return l==f?s.pop():La.call(s,l,1),--this.size,!0}function k_(n){var s=this.__data__,l=za(s,n);return l<0?e:s[l][1]}function V_(n){return za(this.__data__,n)>-1}function G_(n,s){var l=this.__data__,f=za(l,n);return f<0?(++this.size,l.push([n,s])):l[f][1]=s,this}Ti.prototype.clear=z_,Ti.prototype.delete=H_,Ti.prototype.get=k_,Ti.prototype.has=V_,Ti.prototype.set=G_;function bi(n){var s=-1,l=n==null?0:n.length;for(this.clear();++s<l;){var f=n[s];this.set(f[0],f[1])}}function W_(){this.size=0,this.__data__={hash:new vr,map:new(Ns||Ti),string:new vr}}function X_(n){var s=Ja(this,n).delete(n);return this.size-=s?1:0,s}function q_(n){return Ja(this,n).get(n)}function Y_(n){return Ja(this,n).has(n)}function Z_(n,s){var l=Ja(this,n),f=l.size;return l.set(n,s),this.size+=l.size==f?0:1,this}bi.prototype.clear=W_,bi.prototype.delete=X_,bi.prototype.get=q_,bi.prototype.has=Y_,bi.prototype.set=Z_;function xr(n){var s=-1,l=n==null?0:n.length;for(this.__data__=new bi;++s<l;)this.add(n[s])}function K_(n){return this.__data__.set(n,d),this}function $_(n){return this.__data__.has(n)}xr.prototype.add=xr.prototype.push=K_,xr.prototype.has=$_;function ri(n){var s=this.__data__=new Ti(n);this.size=s.size}function J_(){this.__data__=new Ti,this.size=0}function Q_(n){var s=this.__data__,l=s.delete(n);return this.size=s.size,l}function j_(n){return this.__data__.get(n)}function tg(n){return this.__data__.has(n)}function eg(n,s){var l=this.__data__;if(l instanceof Ti){var f=l.__data__;if(!Ns||f.length<a-1)return f.push([n,s]),this.size=++l.size,this;l=this.__data__=new bi(f)}return l.set(n,s),this.size=l.size,this}ri.prototype.clear=J_,ri.prototype.delete=Q_,ri.prototype.get=j_,ri.prototype.has=tg,ri.prototype.set=eg;function Nh(n,s){var l=se(n),f=!l&&Tr(n),M=!l&&!f&&ji(n),b=!l&&!f&&!M&&es(n),D=l||f||M||b,U=D?dl(n.length,h_):[],V=U.length;for(var rt in n)(s||Ce.call(n,rt))&&!(D&&(rt=="length"||M&&(rt=="offset"||rt=="parent")||b&&(rt=="buffer"||rt=="byteLength"||rt=="byteOffset")||Ci(rt,V)))&&U.push(rt);return U}function Fh(n){var s=n.length;return s?n[Pl(0,s-1)]:e}function ng(n,s){return Qa(An(n),Mr(s,0,n.length))}function ig(n){return Qa(An(n))}function Ml(n,s,l){(l!==e&&!si(n[s],l)||l===e&&!(s in n))&&Ai(n,s,l)}function zs(n,s,l){var f=n[s];(!(Ce.call(n,s)&&si(f,l))||l===e&&!(s in n))&&Ai(n,s,l)}function za(n,s){for(var l=n.length;l--;)if(si(n[l][0],s))return l;return-1}function rg(n,s,l,f){return Ki(n,function(M,b,D){s(f,M,l(M),D)}),f}function Oh(n,s){return n&&pi(s,sn(s),n)}function sg(n,s){return n&&pi(s,Rn(s),n)}function Ai(n,s,l){s=="__proto__"&&Ia?Ia(n,s,{configurable:!0,enumerable:!0,value:l,writable:!0}):n[s]=l}function yl(n,s){for(var l=-1,f=s.length,M=K(f),b=n==null;++l<f;)M[l]=b?e:ec(n,s[l]);return M}function Mr(n,s,l){return n===n&&(l!==e&&(n=n<=l?n:l),s!==e&&(n=n>=s?n:s)),n}function qn(n,s,l,f,M,b){var D,U=s&_,V=s&g,rt=s&x;if(l&&(D=M?l(n,f,M,b):l(n)),D!==e)return D;if(!We(n))return n;var st=se(n);if(st){if(D=Yg(n),!U)return An(n,D)}else{var ft=mn(n),Et=ft==Ze||ft==I;if(ji(n))return lf(n,U);if(ft==wt||ft==me||Et&&!M){if(D=V||Et?{}:wf(n),!U)return V?Fg(n,sg(D,n)):Ng(n,Oh(D,n))}else{if(!He[ft])return M?n:{};D=Zg(n,ft,U)}}b||(b=new ri);var Ht=b.get(n);if(Ht)return Ht;b.set(n,D),nd(n)?n.forEach(function(Jt){D.add(qn(Jt,s,l,Jt,n,b))}):td(n)&&n.forEach(function(Jt,_e){D.set(_e,qn(Jt,s,l,_e,n,b))});var $t=rt?V?kl:Hl:V?Rn:sn,le=st?e:$t(n);return Gn(le||n,function(Jt,_e){le&&(_e=Jt,Jt=n[_e]),zs(D,_e,qn(Jt,s,l,_e,n,b))}),D}function ag(n){var s=sn(n);return function(l){return Bh(l,n,s)}}function Bh(n,s,l){var f=l.length;if(n==null)return!f;for(n=Oe(n);f--;){var M=l[f],b=s[M],D=n[M];if(D===e&&!(M in n)||!b(D))return!1}return!0}function zh(n,s,l){if(typeof n!="function")throw new Wn(c);return qs(function(){n.apply(e,l)},s)}function Hs(n,s,l,f){var M=-1,b=Sa,D=!0,U=n.length,V=[],rt=s.length;if(!U)return V;l&&(s=Ge(s,In(l))),f?(b=ol,D=!1):s.length>=a&&(b=Is,D=!1,s=new xr(s));t:for(;++M<U;){var st=n[M],ft=l==null?st:l(st);if(st=f||st!==0?st:0,D&&ft===ft){for(var Et=rt;Et--;)if(s[Et]===ft)continue t;V.push(st)}else b(s,ft,f)||V.push(st)}return V}var Ki=df(di),Hh=df(El,!0);function og(n,s){var l=!0;return Ki(n,function(f,M,b){return l=!!s(f,M,b),l}),l}function Ha(n,s,l){for(var f=-1,M=n.length;++f<M;){var b=n[f],D=s(b);if(D!=null&&(U===e?D===D&&!Nn(D):l(D,U)))var U=D,V=b}return V}function lg(n,s,l,f){var M=n.length;for(l=oe(l),l<0&&(l=-l>M?0:M+l),f=f===e||f>M?M:oe(f),f<0&&(f+=M),f=l>f?0:rd(f);l<f;)n[l++]=s;return n}function kh(n,s){var l=[];return Ki(n,function(f,M,b){s(f,M,b)&&l.push(f)}),l}function cn(n,s,l,f,M){var b=-1,D=n.length;for(l||(l=$g),M||(M=[]);++b<D;){var U=n[b];s>0&&l(U)?s>1?cn(U,s-1,l,f,M):Xi(M,U):f||(M[M.length]=U)}return M}var Sl=pf(),Vh=pf(!0);function di(n,s){return n&&Sl(n,s,sn)}function El(n,s){return n&&Vh(n,s,sn)}function ka(n,s){return Wi(s,function(l){return Pi(n[l])})}function yr(n,s){s=Ji(s,n);for(var l=0,f=s.length;n!=null&&l<f;)n=n[mi(s[l++])];return l&&l==f?n:e}function Gh(n,s,l){var f=s(n);return se(n)?f:Xi(f,l(n))}function xn(n){return n==null?n===e?y:Qt:gr&&gr in Oe(n)?Wg(n):iv(n)}function Tl(n,s){return n>s}function cg(n,s){return n!=null&&Ce.call(n,s)}function ug(n,s){return n!=null&&s in Oe(n)}function hg(n,s,l){return n>=pn(s,l)&&n<je(s,l)}function bl(n,s,l){for(var f=l?ol:Sa,M=n[0].length,b=n.length,D=b,U=K(b),V=1/0,rt=[];D--;){var st=n[D];D&&s&&(st=Ge(st,In(s))),V=pn(st.length,V),U[D]=!l&&(s||M>=120&&st.length>=120)?new xr(D&&st):e}st=n[0];var ft=-1,Et=U[0];t:for(;++ft<M&&rt.length<V;){var Ht=st[ft],$t=s?s(Ht):Ht;if(Ht=l||Ht!==0?Ht:0,!(Et?Is(Et,$t):f(rt,$t,l))){for(D=b;--D;){var le=U[D];if(!(le?Is(le,$t):f(n[D],$t,l)))continue t}Et&&Et.push($t),rt.push(Ht)}}return rt}function fg(n,s,l,f){return di(n,function(M,b,D){s(f,l(M),b,D)}),f}function ks(n,s,l){s=Ji(s,n),n=Df(n,s);var f=n==null?n:n[mi(Zn(s))];return f==null?e:Ln(f,n,l)}function Wh(n){return Xe(n)&&xn(n)==me}function dg(n){return Xe(n)&&xn(n)==ht}function pg(n){return Xe(n)&&xn(n)==qt}function Vs(n,s,l,f,M){return n===s?!0:n==null||s==null||!Xe(n)&&!Xe(s)?n!==n&&s!==s:mg(n,s,l,f,Vs,M)}function mg(n,s,l,f,M,b){var D=se(n),U=se(s),V=D?it:mn(n),rt=U?it:mn(s);V=V==me?wt:V,rt=rt==me?wt:rt;var st=V==wt,ft=rt==wt,Et=V==rt;if(Et&&ji(n)){if(!ji(s))return!1;D=!0,st=!1}if(Et&&!st)return b||(b=new ri),D||es(n)?Tf(n,s,l,f,M,b):Vg(n,s,V,l,f,M,b);if(!(l&E)){var Ht=st&&Ce.call(n,"__wrapped__"),$t=ft&&Ce.call(s,"__wrapped__");if(Ht||$t){var le=Ht?n.value():n,Jt=$t?s.value():s;return b||(b=new ri),M(le,Jt,l,f,b)}}return Et?(b||(b=new ri),Gg(n,s,l,f,M,b)):!1}function _g(n){return Xe(n)&&mn(n)==ge}function Al(n,s,l,f){var M=l.length,b=M,D=!f;if(n==null)return!b;for(n=Oe(n);M--;){var U=l[M];if(D&&U[2]?U[1]!==n[U[0]]:!(U[0]in n))return!1}for(;++M<b;){U=l[M];var V=U[0],rt=n[V],st=U[1];if(D&&U[2]){if(rt===e&&!(V in n))return!1}else{var ft=new ri;if(f)var Et=f(rt,st,V,n,s,ft);if(!(Et===e?Vs(st,rt,E|A,f,ft):Et))return!1}}return!0}function Xh(n){if(!We(n)||Qg(n))return!1;var s=Pi(n)?__:nl;return s.test(Er(n))}function gg(n){return Xe(n)&&xn(n)==ee}function vg(n){return Xe(n)&&mn(n)==Te}function xg(n){return Xe(n)&&ro(n.length)&&!!ke[xn(n)]}function qh(n){return typeof n=="function"?n:n==null?Cn:typeof n=="object"?se(n)?Kh(n[0],n[1]):Zh(n):md(n)}function wl(n){if(!Xs(n))return S_(n);var s=[];for(var l in Oe(n))Ce.call(n,l)&&l!="constructor"&&s.push(l);return s}function Mg(n){if(!We(n))return nv(n);var s=Xs(n),l=[];for(var f in n)f=="constructor"&&(s||!Ce.call(n,f))||l.push(f);return l}function Rl(n,s){return n<s}function Yh(n,s){var l=-1,f=wn(n)?K(n.length):[];return Ki(n,function(M,b,D){f[++l]=s(M,b,D)}),f}function Zh(n){var s=Gl(n);return s.length==1&&s[0][2]?Cf(s[0][0],s[0][1]):function(l){return l===n||Al(l,n,s)}}function Kh(n,s){return Xl(n)&&Rf(s)?Cf(mi(n),s):function(l){var f=ec(l,n);return f===e&&f===s?nc(l,n):Vs(s,f,E|A)}}function Va(n,s,l,f,M){n!==s&&Sl(s,function(b,D){if(M||(M=new ri),We(b))yg(n,s,D,l,Va,f,M);else{var U=f?f(Yl(n,D),b,D+"",n,s,M):e;U===e&&(U=b),Ml(n,D,U)}},Rn)}function yg(n,s,l,f,M,b,D){var U=Yl(n,l),V=Yl(s,l),rt=D.get(V);if(rt){Ml(n,l,rt);return}var st=b?b(U,V,l+"",n,s,D):e,ft=st===e;if(ft){var Et=se(V),Ht=!Et&&ji(V),$t=!Et&&!Ht&&es(V);st=V,Et||Ht||$t?se(U)?st=U:Ke(U)?st=An(U):Ht?(ft=!1,st=lf(V,!0)):$t?(ft=!1,st=cf(V,!0)):st=[]:Ys(V)||Tr(V)?(st=U,Tr(U)?st=sd(U):(!We(U)||Pi(U))&&(st=wf(V))):ft=!1}ft&&(D.set(V,st),M(st,V,f,b,D),D.delete(V)),Ml(n,l,st)}function $h(n,s){var l=n.length;if(l)return s+=s<0?l:0,Ci(s,l)?n[s]:e}function Jh(n,s,l){s.length?s=Ge(s,function(b){return se(b)?function(D){return yr(D,b.length===1?b[0]:b)}:b}):s=[Cn];var f=-1;s=Ge(s,In(Yt()));var M=Yh(n,function(b,D,U){var V=Ge(s,function(rt){return rt(b)});return{criteria:V,index:++f,value:b}});return Zm(M,function(b,D){return Ug(b,D,l)})}function Sg(n,s){return Qh(n,s,function(l,f){return nc(n,f)})}function Qh(n,s,l){for(var f=-1,M=s.length,b={};++f<M;){var D=s[f],U=yr(n,D);l(U,D)&&Gs(b,Ji(D,n),U)}return b}function Eg(n){return function(s){return yr(s,n)}}function Cl(n,s,l,f){var M=f?Ym:Xr,b=-1,D=s.length,U=n;for(n===s&&(s=An(s)),l&&(U=Ge(n,In(l)));++b<D;)for(var V=0,rt=s[b],st=l?l(rt):rt;(V=M(U,st,V,f))>-1;)U!==n&&La.call(U,V,1),La.call(n,V,1);return n}function jh(n,s){for(var l=n?s.length:0,f=l-1;l--;){var M=s[l];if(l==f||M!==b){var b=M;Ci(M)?La.call(n,M,1):Il(n,M)}}return n}function Pl(n,s){return n+Na(Ih()*(s-n+1))}function Tg(n,s,l,f){for(var M=-1,b=je(Ua((s-n)/(l||1)),0),D=K(b);b--;)D[f?b:++M]=n,n+=l;return D}function Dl(n,s){var l="";if(!n||s<1||s>Q)return l;do s%2&&(l+=n),s=Na(s/2),s&&(n+=n);while(s);return l}function fe(n,s){return Zl(Pf(n,s,Cn),n+"")}function bg(n){return Fh(ns(n))}function Ag(n,s){var l=ns(n);return Qa(l,Mr(s,0,l.length))}function Gs(n,s,l,f){if(!We(n))return n;s=Ji(s,n);for(var M=-1,b=s.length,D=b-1,U=n;U!=null&&++M<b;){var V=mi(s[M]),rt=l;if(V==="__proto__"||V==="constructor"||V==="prototype")return n;if(M!=D){var st=U[V];rt=f?f(st,V,U):e,rt===e&&(rt=We(st)?st:Ci(s[M+1])?[]:{})}zs(U,V,rt),U=U[V]}return n}var tf=Fa?function(n,s){return Fa.set(n,s),n}:Cn,wg=Ia?function(n,s){return Ia(n,"toString",{configurable:!0,enumerable:!1,value:rc(s),writable:!0})}:Cn;function Rg(n){return Qa(ns(n))}function Yn(n,s,l){var f=-1,M=n.length;s<0&&(s=-s>M?0:M+s),l=l>M?M:l,l<0&&(l+=M),M=s>l?0:l-s>>>0,s>>>=0;for(var b=K(M);++f<M;)b[f]=n[f+s];return b}function Cg(n,s){var l;return Ki(n,function(f,M,b){return l=s(f,M,b),!l}),!!l}function Ga(n,s,l){var f=0,M=n==null?f:n.length;if(typeof s=="number"&&s===s&&M<=Pe){for(;f<M;){var b=f+M>>>1,D=n[b];D!==null&&!Nn(D)&&(l?D<=s:D<s)?f=b+1:M=b}return M}return Ll(n,s,Cn,l)}function Ll(n,s,l,f){var M=0,b=n==null?0:n.length;if(b===0)return 0;s=l(s);for(var D=s!==s,U=s===null,V=Nn(s),rt=s===e;M<b;){var st=Na((M+b)/2),ft=l(n[st]),Et=ft!==e,Ht=ft===null,$t=ft===ft,le=Nn(ft);if(D)var Jt=f||$t;else rt?Jt=$t&&(f||Et):U?Jt=$t&&Et&&(f||!Ht):V?Jt=$t&&Et&&!Ht&&(f||!le):Ht||le?Jt=!1:Jt=f?ft<=s:ft<s;Jt?M=st+1:b=st}return pn(b,ue)}function ef(n,s){for(var l=-1,f=n.length,M=0,b=[];++l<f;){var D=n[l],U=s?s(D):D;if(!l||!si(U,V)){var V=U;b[M++]=D===0?0:D}}return b}function nf(n){return typeof n=="number"?n:Nn(n)?At:+n}function Un(n){if(typeof n=="string")return n;if(se(n))return Ge(n,Un)+"";if(Nn(n))return Uh?Uh.call(n):"";var s=n+"";return s=="0"&&1/n==-ct?"-0":s}function $i(n,s,l){var f=-1,M=Sa,b=n.length,D=!0,U=[],V=U;if(l)D=!1,M=ol;else if(b>=a){var rt=s?null:Hg(n);if(rt)return Ta(rt);D=!1,M=Is,V=new xr}else V=s?[]:U;t:for(;++f<b;){var st=n[f],ft=s?s(st):st;if(st=l||st!==0?st:0,D&&ft===ft){for(var Et=V.length;Et--;)if(V[Et]===ft)continue t;s&&V.push(ft),U.push(st)}else M(V,ft,l)||(V!==U&&V.push(ft),U.push(st))}return U}function Il(n,s){return s=Ji(s,n),n=Df(n,s),n==null||delete n[mi(Zn(s))]}function rf(n,s,l,f){return Gs(n,s,l(yr(n,s)),f)}function Wa(n,s,l,f){for(var M=n.length,b=f?M:-1;(f?b--:++b<M)&&s(n[b],b,n););return l?Yn(n,f?0:b,f?b+1:M):Yn(n,f?b+1:0,f?M:b)}function sf(n,s){var l=n;return l instanceof ve&&(l=l.value()),ll(s,function(f,M){return M.func.apply(M.thisArg,Xi([f],M.args))},l)}function Ul(n,s,l){var f=n.length;if(f<2)return f?$i(n[0]):[];for(var M=-1,b=K(f);++M<f;)for(var D=n[M],U=-1;++U<f;)U!=M&&(b[M]=Hs(b[M]||D,n[U],s,l));return $i(cn(b,1),s,l)}function af(n,s,l){for(var f=-1,M=n.length,b=s.length,D={};++f<M;){var U=f<b?s[f]:e;l(D,n[f],U)}return D}function Nl(n){return Ke(n)?n:[]}function Fl(n){return typeof n=="function"?n:Cn}function Ji(n,s){return se(n)?n:Xl(n,s)?[n]:Nf(we(n))}var Pg=fe;function Qi(n,s,l){var f=n.length;return l=l===e?f:l,!s&&l>=f?n:Yn(n,s,l)}var of=g_||function(n){return rn.clearTimeout(n)};function lf(n,s){if(s)return n.slice();var l=n.length,f=Rh?Rh(l):new n.constructor(l);return n.copy(f),f}function Ol(n){var s=new n.constructor(n.byteLength);return new Pa(s).set(new Pa(n)),s}function Dg(n,s){var l=s?Ol(n.buffer):n.buffer;return new n.constructor(l,n.byteOffset,n.byteLength)}function Lg(n){var s=new n.constructor(n.source,ya.exec(n));return s.lastIndex=n.lastIndex,s}function Ig(n){return Bs?Oe(Bs.call(n)):{}}function cf(n,s){var l=s?Ol(n.buffer):n.buffer;return new n.constructor(l,n.byteOffset,n.length)}function uf(n,s){if(n!==s){var l=n!==e,f=n===null,M=n===n,b=Nn(n),D=s!==e,U=s===null,V=s===s,rt=Nn(s);if(!U&&!rt&&!b&&n>s||b&&D&&V&&!U&&!rt||f&&D&&V||!l&&V||!M)return 1;if(!f&&!b&&!rt&&n<s||rt&&l&&M&&!f&&!b||U&&l&&M||!D&&M||!V)return-1}return 0}function Ug(n,s,l){for(var f=-1,M=n.criteria,b=s.criteria,D=M.length,U=l.length;++f<D;){var V=uf(M[f],b[f]);if(V){if(f>=U)return V;var rt=l[f];return V*(rt=="desc"?-1:1)}}return n.index-s.index}function hf(n,s,l,f){for(var M=-1,b=n.length,D=l.length,U=-1,V=s.length,rt=je(b-D,0),st=K(V+rt),ft=!f;++U<V;)st[U]=s[U];for(;++M<D;)(ft||M<b)&&(st[l[M]]=n[M]);for(;rt--;)st[U++]=n[M++];return st}function ff(n,s,l,f){for(var M=-1,b=n.length,D=-1,U=l.length,V=-1,rt=s.length,st=je(b-U,0),ft=K(st+rt),Et=!f;++M<st;)ft[M]=n[M];for(var Ht=M;++V<rt;)ft[Ht+V]=s[V];for(;++D<U;)(Et||M<b)&&(ft[Ht+l[D]]=n[M++]);return ft}function An(n,s){var l=-1,f=n.length;for(s||(s=K(f));++l<f;)s[l]=n[l];return s}function pi(n,s,l,f){var M=!l;l||(l={});for(var b=-1,D=s.length;++b<D;){var U=s[b],V=f?f(l[U],n[U],U,l,n):e;V===e&&(V=n[U]),M?Ai(l,U,V):zs(l,U,V)}return l}function Ng(n,s){return pi(n,Wl(n),s)}function Fg(n,s){return pi(n,bf(n),s)}function Xa(n,s){return function(l,f){var M=se(l)?km:rg,b=s?s():{};return M(l,n,Yt(f,2),b)}}function Qr(n){return fe(function(s,l){var f=-1,M=l.length,b=M>1?l[M-1]:e,D=M>2?l[2]:e;for(b=n.length>3&&typeof b=="function"?(M--,b):e,D&&Mn(l[0],l[1],D)&&(b=M<3?e:b,M=1),s=Oe(s);++f<M;){var U=l[f];U&&n(s,U,f,b)}return s})}function df(n,s){return function(l,f){if(l==null)return l;if(!wn(l))return n(l,f);for(var M=l.length,b=s?M:-1,D=Oe(l);(s?b--:++b<M)&&f(D[b],b,D)!==!1;);return l}}function pf(n){return function(s,l,f){for(var M=-1,b=Oe(s),D=f(s),U=D.length;U--;){var V=D[n?U:++M];if(l(b[V],V,b)===!1)break}return s}}function Og(n,s,l){var f=s&v,M=Ws(n);function b(){var D=this&&this!==rn&&this instanceof b?M:n;return D.apply(f?l:this,arguments)}return b}function mf(n){return function(s){s=we(s);var l=qr(s)?ii(s):e,f=l?l[0]:s.charAt(0),M=l?Qi(l,1).join(""):s.slice(1);return f[n]()+M}}function jr(n){return function(s){return ll(dd(fd(s).replace(wm,"")),n,"")}}function Ws(n){return function(){var s=arguments;switch(s.length){case 0:return new n;case 1:return new n(s[0]);case 2:return new n(s[0],s[1]);case 3:return new n(s[0],s[1],s[2]);case 4:return new n(s[0],s[1],s[2],s[3]);case 5:return new n(s[0],s[1],s[2],s[3],s[4]);case 6:return new n(s[0],s[1],s[2],s[3],s[4],s[5]);case 7:return new n(s[0],s[1],s[2],s[3],s[4],s[5],s[6])}var l=Jr(n.prototype),f=n.apply(l,s);return We(f)?f:l}}function Bg(n,s,l){var f=Ws(n);function M(){for(var b=arguments.length,D=K(b),U=b,V=ts(M);U--;)D[U]=arguments[U];var rt=b<3&&D[0]!==V&&D[b-1]!==V?[]:qi(D,V);if(b-=rt.length,b<l)return Mf(n,s,qa,M.placeholder,e,D,rt,e,e,l-b);var st=this&&this!==rn&&this instanceof M?f:n;return Ln(st,this,D)}return M}function _f(n){return function(s,l,f){var M=Oe(s);if(!wn(s)){var b=Yt(l,3);s=sn(s),l=function(U){return b(M[U],U,M)}}var D=n(s,l,f);return D>-1?M[b?s[D]:D]:e}}function gf(n){return Ri(function(s){var l=s.length,f=l,M=Xn.prototype.thru;for(n&&s.reverse();f--;){var b=s[f];if(typeof b!="function")throw new Wn(c);if(M&&!D&&$a(b)=="wrapper")var D=new Xn([],!0)}for(f=D?f:l;++f<l;){b=s[f];var U=$a(b),V=U=="wrapper"?Vl(b):e;V&&ql(V[0])&&V[1]==(F|L|B|Y)&&!V[4].length&&V[9]==1?D=D[$a(V[0])].apply(D,V[3]):D=b.length==1&&ql(b)?D[U]():D.thru(b)}return function(){var rt=arguments,st=rt[0];if(D&&rt.length==1&&se(st))return D.plant(st).value();for(var ft=0,Et=l?s[ft].apply(this,rt):st;++ft<l;)Et=s[ft].call(this,Et);return Et}})}function qa(n,s,l,f,M,b,D,U,V,rt){var st=s&F,ft=s&v,Et=s&m,Ht=s&(L|P),$t=s&R,le=Et?e:Ws(n);function Jt(){for(var _e=arguments.length,xe=K(_e),Fn=_e;Fn--;)xe[Fn]=arguments[Fn];if(Ht)var yn=ts(Jt),On=$m(xe,yn);if(f&&(xe=hf(xe,f,M,Ht)),b&&(xe=ff(xe,b,D,Ht)),_e-=On,Ht&&_e<rt){var $e=qi(xe,yn);return Mf(n,s,qa,Jt.placeholder,l,xe,$e,U,V,rt-_e)}var ai=ft?l:this,Li=Et?ai[n]:n;return _e=xe.length,U?xe=rv(xe,U):$t&&_e>1&&xe.reverse(),st&&V<_e&&(xe.length=V),this&&this!==rn&&this instanceof Jt&&(Li=le||Ws(Li)),Li.apply(ai,xe)}return Jt}function vf(n,s){return function(l,f){return fg(l,n,s(f),{})}}function Ya(n,s){return function(l,f){var M;if(l===e&&f===e)return s;if(l!==e&&(M=l),f!==e){if(M===e)return f;typeof l=="string"||typeof f=="string"?(l=Un(l),f=Un(f)):(l=nf(l),f=nf(f)),M=n(l,f)}return M}}function Bl(n){return Ri(function(s){return s=Ge(s,In(Yt())),fe(function(l){var f=this;return n(s,function(M){return Ln(M,f,l)})})})}function Za(n,s){s=s===e?" ":Un(s);var l=s.length;if(l<2)return l?Dl(s,n):s;var f=Dl(s,Ua(n/Yr(s)));return qr(s)?Qi(ii(f),0,n).join(""):f.slice(0,n)}function zg(n,s,l,f){var M=s&v,b=Ws(n);function D(){for(var U=-1,V=arguments.length,rt=-1,st=f.length,ft=K(st+V),Et=this&&this!==rn&&this instanceof D?b:n;++rt<st;)ft[rt]=f[rt];for(;V--;)ft[rt++]=arguments[++U];return Ln(Et,M?l:this,ft)}return D}function xf(n){return function(s,l,f){return f&&typeof f!="number"&&Mn(s,l,f)&&(l=f=e),s=Di(s),l===e?(l=s,s=0):l=Di(l),f=f===e?s<l?1:-1:Di(f),Tg(s,l,f,n)}}function Ka(n){return function(s,l){return typeof s=="string"&&typeof l=="string"||(s=Kn(s),l=Kn(l)),n(s,l)}}function Mf(n,s,l,f,M,b,D,U,V,rt){var st=s&L,ft=st?D:e,Et=st?e:D,Ht=st?b:e,$t=st?e:b;s|=st?B:O,s&=~(st?O:B),s&N||(s&=-4);var le=[n,s,M,Ht,ft,$t,Et,U,V,rt],Jt=l.apply(e,le);return ql(n)&&Lf(Jt,le),Jt.placeholder=f,If(Jt,n,s)}function zl(n){var s=Qe[n];return function(l,f){if(l=Kn(l),f=f==null?0:pn(oe(f),292),f&&Lh(l)){var M=(we(l)+"e").split("e"),b=s(M[0]+"e"+(+M[1]+f));return M=(we(b)+"e").split("e"),+(M[0]+"e"+(+M[1]-f))}return s(l)}}var Hg=Kr&&1/Ta(new Kr([,-0]))[1]==ct?function(n){return new Kr(n)}:oc;function yf(n){return function(s){var l=mn(s);return l==ge?ml(s):l==Te?i_(s):Km(s,n(s))}}function wi(n,s,l,f,M,b,D,U){var V=s&m;if(!V&&typeof n!="function")throw new Wn(c);var rt=f?f.length:0;if(rt||(s&=-97,f=M=e),D=D===e?D:je(oe(D),0),U=U===e?U:oe(U),rt-=M?M.length:0,s&O){var st=f,ft=M;f=M=e}var Et=V?e:Vl(n),Ht=[n,s,l,f,M,st,ft,b,D,U];if(Et&&ev(Ht,Et),n=Ht[0],s=Ht[1],l=Ht[2],f=Ht[3],M=Ht[4],U=Ht[9]=Ht[9]===e?V?0:n.length:je(Ht[9]-rt,0),!U&&s&(L|P)&&(s&=-25),!s||s==v)var $t=Og(n,s,l);else s==L||s==P?$t=Bg(n,s,U):(s==B||s==(v|B))&&!M.length?$t=zg(n,s,l,f):$t=qa.apply(e,Ht);var le=Et?tf:Lf;return If(le($t,Ht),n,s)}function Sf(n,s,l,f){return n===e||si(n,Zr[l])&&!Ce.call(f,l)?s:n}function Ef(n,s,l,f,M,b){return We(n)&&We(s)&&(b.set(s,n),Va(n,s,e,Ef,b),b.delete(s)),n}function kg(n){return Ys(n)?e:n}function Tf(n,s,l,f,M,b){var D=l&E,U=n.length,V=s.length;if(U!=V&&!(D&&V>U))return!1;var rt=b.get(n),st=b.get(s);if(rt&&st)return rt==s&&st==n;var ft=-1,Et=!0,Ht=l&A?new xr:e;for(b.set(n,s),b.set(s,n);++ft<U;){var $t=n[ft],le=s[ft];if(f)var Jt=D?f(le,$t,ft,s,n,b):f($t,le,ft,n,s,b);if(Jt!==e){if(Jt)continue;Et=!1;break}if(Ht){if(!cl(s,function(_e,xe){if(!Is(Ht,xe)&&($t===_e||M($t,_e,l,f,b)))return Ht.push(xe)})){Et=!1;break}}else if(!($t===le||M($t,le,l,f,b))){Et=!1;break}}return b.delete(n),b.delete(s),Et}function Vg(n,s,l,f,M,b,D){switch(l){case j:if(n.byteLength!=s.byteLength||n.byteOffset!=s.byteOffset)return!1;n=n.buffer,s=s.buffer;case ht:return!(n.byteLength!=s.byteLength||!b(new Pa(n),new Pa(s)));case Ct:case qt:case te:return si(+n,+s);case he:return n.name==s.name&&n.message==s.message;case ee:case Ne:return n==s+"";case ge:var U=ml;case Te:var V=f&E;if(U||(U=Ta),n.size!=s.size&&!V)return!1;var rt=D.get(n);if(rt)return rt==s;f|=A,D.set(n,s);var st=Tf(U(n),U(s),f,M,b,D);return D.delete(n),st;case C:if(Bs)return Bs.call(n)==Bs.call(s)}return!1}function Gg(n,s,l,f,M,b){var D=l&E,U=Hl(n),V=U.length,rt=Hl(s),st=rt.length;if(V!=st&&!D)return!1;for(var ft=V;ft--;){var Et=U[ft];if(!(D?Et in s:Ce.call(s,Et)))return!1}var Ht=b.get(n),$t=b.get(s);if(Ht&&$t)return Ht==s&&$t==n;var le=!0;b.set(n,s),b.set(s,n);for(var Jt=D;++ft<V;){Et=U[ft];var _e=n[Et],xe=s[Et];if(f)var Fn=D?f(xe,_e,Et,s,n,b):f(_e,xe,Et,n,s,b);if(!(Fn===e?_e===xe||M(_e,xe,l,f,b):Fn)){le=!1;break}Jt||(Jt=Et=="constructor")}if(le&&!Jt){var yn=n.constructor,On=s.constructor;yn!=On&&"constructor"in n&&"constructor"in s&&!(typeof yn=="function"&&yn instanceof yn&&typeof On=="function"&&On instanceof On)&&(le=!1)}return b.delete(n),b.delete(s),le}function Ri(n){return Zl(Pf(n,e,zf),n+"")}function Hl(n){return Gh(n,sn,Wl)}function kl(n){return Gh(n,Rn,bf)}var Vl=Fa?function(n){return Fa.get(n)}:oc;function $a(n){for(var s=n.name+"",l=$r[s],f=Ce.call($r,s)?l.length:0;f--;){var M=l[f],b=M.func;if(b==null||b==n)return M.name}return s}function ts(n){var s=Ce.call(S,"placeholder")?S:n;return s.placeholder}function Yt(){var n=S.iteratee||sc;return n=n===sc?qh:n,arguments.length?n(arguments[0],arguments[1]):n}function Ja(n,s){var l=n.__data__;return Jg(s)?l[typeof s=="string"?"string":"hash"]:l.map}function Gl(n){for(var s=sn(n),l=s.length;l--;){var f=s[l],M=n[f];s[l]=[f,M,Rf(M)]}return s}function Sr(n,s){var l=t_(n,s);return Xh(l)?l:e}function Wg(n){var s=Ce.call(n,gr),l=n[gr];try{n[gr]=e;var f=!0}catch{}var M=Ra.call(n);return f&&(s?n[gr]=l:delete n[gr]),M}var Wl=gl?function(n){return n==null?[]:(n=Oe(n),Wi(gl(n),function(s){return Ph.call(n,s)}))}:lc,bf=gl?function(n){for(var s=[];n;)Xi(s,Wl(n)),n=Da(n);return s}:lc,mn=xn;(vl&&mn(new vl(new ArrayBuffer(1)))!=j||Ns&&mn(new Ns)!=ge||xl&&mn(xl.resolve())!=Ue||Kr&&mn(new Kr)!=Te||Fs&&mn(new Fs)!=q)&&(mn=function(n){var s=xn(n),l=s==wt?n.constructor:e,f=l?Er(l):"";if(f)switch(f){case A_:return j;case w_:return ge;case R_:return Ue;case C_:return Te;case P_:return q}return s});function Xg(n,s,l){for(var f=-1,M=l.length;++f<M;){var b=l[f],D=b.size;switch(b.type){case"drop":n+=D;break;case"dropRight":s-=D;break;case"take":s=pn(s,n+D);break;case"takeRight":n=je(n,s-D);break}}return{start:n,end:s}}function qg(n){var s=n.match(Vr);return s?s[1].split(va):[]}function Af(n,s,l){s=Ji(s,n);for(var f=-1,M=s.length,b=!1;++f<M;){var D=mi(s[f]);if(!(b=n!=null&&l(n,D)))break;n=n[D]}return b||++f!=M?b:(M=n==null?0:n.length,!!M&&ro(M)&&Ci(D,M)&&(se(n)||Tr(n)))}function Yg(n){var s=n.length,l=new n.constructor(s);return s&&typeof n[0]=="string"&&Ce.call(n,"index")&&(l.index=n.index,l.input=n.input),l}function wf(n){return typeof n.constructor=="function"&&!Xs(n)?Jr(Da(n)):{}}function Zg(n,s,l){var f=n.constructor;switch(s){case ht:return Ol(n);case Ct:case qt:return new f(+n);case j:return Dg(n,l);case zt:case vt:case Ut:case Ot:case mt:case St:case Wt:case Bt:case Mt:return cf(n,l);case ge:return new f;case te:case Ne:return new f(n);case ee:return Lg(n);case Te:return new f;case C:return Ig(n)}}function Kg(n,s){var l=s.length;if(!l)return n;var f=l-1;return s[f]=(l>1?"& ":"")+s[f],s=s.join(l>2?", ":" "),n.replace(ga,`{
/* [wrapped with `+s+`] */
`)}function $g(n){return se(n)||Tr(n)||!!(Dh&&n&&n[Dh])}function Ci(n,s){var l=typeof n;return s=s??Q,!!s&&(l=="number"||l!="symbol"&&T.test(n))&&n>-1&&n%1==0&&n<s}function Mn(n,s,l){if(!We(l))return!1;var f=typeof s;return(f=="number"?wn(l)&&Ci(s,l.length):f=="string"&&s in l)?si(l[s],n):!1}function Xl(n,s){if(se(n))return!1;var l=typeof n;return l=="number"||l=="symbol"||l=="boolean"||n==null||Nn(n)?!0:ti.test(n)||!ye.test(n)||s!=null&&n in Oe(s)}function Jg(n){var s=typeof n;return s=="string"||s=="number"||s=="symbol"||s=="boolean"?n!=="__proto__":n===null}function ql(n){var s=$a(n),l=S[s];if(typeof l!="function"||!(s in ve.prototype))return!1;if(n===l)return!0;var f=Vl(l);return!!f&&n===f[0]}function Qg(n){return!!wh&&wh in n}var jg=Aa?Pi:cc;function Xs(n){var s=n&&n.constructor,l=typeof s=="function"&&s.prototype||Zr;return n===l}function Rf(n){return n===n&&!We(n)}function Cf(n,s){return function(l){return l==null?!1:l[n]===s&&(s!==e||n in Oe(l))}}function tv(n){var s=no(n,function(f){return l.size===h&&l.clear(),f}),l=s.cache;return s}function ev(n,s){var l=n[1],f=s[1],M=l|f,b=M<(v|m|F),D=f==F&&l==L||f==F&&l==Y&&n[7].length<=s[8]||f==(F|Y)&&s[7].length<=s[8]&&l==L;if(!(b||D))return n;f&v&&(n[2]=s[2],M|=l&v?0:N);var U=s[3];if(U){var V=n[3];n[3]=V?hf(V,U,s[4]):U,n[4]=V?qi(n[3],p):s[4]}return U=s[5],U&&(V=n[5],n[5]=V?ff(V,U,s[6]):U,n[6]=V?qi(n[5],p):s[6]),U=s[7],U&&(n[7]=U),f&F&&(n[8]=n[8]==null?s[8]:pn(n[8],s[8])),n[9]==null&&(n[9]=s[9]),n[0]=s[0],n[1]=M,n}function nv(n){var s=[];if(n!=null)for(var l in Oe(n))s.push(l);return s}function iv(n){return Ra.call(n)}function Pf(n,s,l){return s=je(s===e?n.length-1:s,0),function(){for(var f=arguments,M=-1,b=je(f.length-s,0),D=K(b);++M<b;)D[M]=f[s+M];M=-1;for(var U=K(s+1);++M<s;)U[M]=f[M];return U[s]=l(D),Ln(n,this,U)}}function Df(n,s){return s.length<2?n:yr(n,Yn(s,0,-1))}function rv(n,s){for(var l=n.length,f=pn(s.length,l),M=An(n);f--;){var b=s[f];n[f]=Ci(b,l)?M[b]:e}return n}function Yl(n,s){if(!(s==="constructor"&&typeof n[s]=="function")&&s!="__proto__")return n[s]}var Lf=Uf(tf),qs=x_||function(n,s){return rn.setTimeout(n,s)},Zl=Uf(wg);function If(n,s,l){var f=s+"";return Zl(n,Kg(f,sv(qg(f),l)))}function Uf(n){var s=0,l=0;return function(){var f=E_(),M=et-(f-l);if(l=f,M>0){if(++s>=J)return arguments[0]}else s=0;return n.apply(e,arguments)}}function Qa(n,s){var l=-1,f=n.length,M=f-1;for(s=s===e?f:s;++l<s;){var b=Pl(l,M),D=n[b];n[b]=n[l],n[l]=D}return n.length=s,n}var Nf=tv(function(n){var s=[];return n.charCodeAt(0)===46&&s.push(""),n.replace(kn,function(l,f,M,b){s.push(M?b.replace(Ma,"$1"):f||l)}),s});function mi(n){if(typeof n=="string"||Nn(n))return n;var s=n+"";return s=="0"&&1/n==-ct?"-0":s}function Er(n){if(n!=null){try{return wa.call(n)}catch{}try{return n+""}catch{}}return""}function sv(n,s){return Gn(Be,function(l){var f="_."+l[0];s&l[1]&&!Sa(n,f)&&n.push(f)}),n.sort()}function Ff(n){if(n instanceof ve)return n.clone();var s=new Xn(n.__wrapped__,n.__chain__);return s.__actions__=An(n.__actions__),s.__index__=n.__index__,s.__values__=n.__values__,s}function av(n,s,l){(l?Mn(n,s,l):s===e)?s=1:s=je(oe(s),0);var f=n==null?0:n.length;if(!f||s<1)return[];for(var M=0,b=0,D=K(Ua(f/s));M<f;)D[b++]=Yn(n,M,M+=s);return D}function ov(n){for(var s=-1,l=n==null?0:n.length,f=0,M=[];++s<l;){var b=n[s];b&&(M[f++]=b)}return M}function lv(){var n=arguments.length;if(!n)return[];for(var s=K(n-1),l=arguments[0],f=n;f--;)s[f-1]=arguments[f];return Xi(se(l)?An(l):[l],cn(s,1))}var cv=fe(function(n,s){return Ke(n)?Hs(n,cn(s,1,Ke,!0)):[]}),uv=fe(function(n,s){var l=Zn(s);return Ke(l)&&(l=e),Ke(n)?Hs(n,cn(s,1,Ke,!0),Yt(l,2)):[]}),hv=fe(function(n,s){var l=Zn(s);return Ke(l)&&(l=e),Ke(n)?Hs(n,cn(s,1,Ke,!0),e,l):[]});function fv(n,s,l){var f=n==null?0:n.length;return f?(s=l||s===e?1:oe(s),Yn(n,s<0?0:s,f)):[]}function dv(n,s,l){var f=n==null?0:n.length;return f?(s=l||s===e?1:oe(s),s=f-s,Yn(n,0,s<0?0:s)):[]}function pv(n,s){return n&&n.length?Wa(n,Yt(s,3),!0,!0):[]}function mv(n,s){return n&&n.length?Wa(n,Yt(s,3),!0):[]}function _v(n,s,l,f){var M=n==null?0:n.length;return M?(l&&typeof l!="number"&&Mn(n,s,l)&&(l=0,f=M),lg(n,s,l,f)):[]}function Of(n,s,l){var f=n==null?0:n.length;if(!f)return-1;var M=l==null?0:oe(l);return M<0&&(M=je(f+M,0)),Ea(n,Yt(s,3),M)}function Bf(n,s,l){var f=n==null?0:n.length;if(!f)return-1;var M=f-1;return l!==e&&(M=oe(l),M=l<0?je(f+M,0):pn(M,f-1)),Ea(n,Yt(s,3),M,!0)}function zf(n){var s=n==null?0:n.length;return s?cn(n,1):[]}function gv(n){var s=n==null?0:n.length;return s?cn(n,ct):[]}function vv(n,s){var l=n==null?0:n.length;return l?(s=s===e?1:oe(s),cn(n,s)):[]}function xv(n){for(var s=-1,l=n==null?0:n.length,f={};++s<l;){var M=n[s];f[M[0]]=M[1]}return f}function Hf(n){return n&&n.length?n[0]:e}function Mv(n,s,l){var f=n==null?0:n.length;if(!f)return-1;var M=l==null?0:oe(l);return M<0&&(M=je(f+M,0)),Xr(n,s,M)}function yv(n){var s=n==null?0:n.length;return s?Yn(n,0,-1):[]}var Sv=fe(function(n){var s=Ge(n,Nl);return s.length&&s[0]===n[0]?bl(s):[]}),Ev=fe(function(n){var s=Zn(n),l=Ge(n,Nl);return s===Zn(l)?s=e:l.pop(),l.length&&l[0]===n[0]?bl(l,Yt(s,2)):[]}),Tv=fe(function(n){var s=Zn(n),l=Ge(n,Nl);return s=typeof s=="function"?s:e,s&&l.pop(),l.length&&l[0]===n[0]?bl(l,e,s):[]});function bv(n,s){return n==null?"":y_.call(n,s)}function Zn(n){var s=n==null?0:n.length;return s?n[s-1]:e}function Av(n,s,l){var f=n==null?0:n.length;if(!f)return-1;var M=f;return l!==e&&(M=oe(l),M=M<0?je(f+M,0):pn(M,f-1)),s===s?s_(n,s,M):Ea(n,xh,M,!0)}function wv(n,s){return n&&n.length?$h(n,oe(s)):e}var Rv=fe(kf);function kf(n,s){return n&&n.length&&s&&s.length?Cl(n,s):n}function Cv(n,s,l){return n&&n.length&&s&&s.length?Cl(n,s,Yt(l,2)):n}function Pv(n,s,l){return n&&n.length&&s&&s.length?Cl(n,s,e,l):n}var Dv=Ri(function(n,s){var l=n==null?0:n.length,f=yl(n,s);return jh(n,Ge(s,function(M){return Ci(M,l)?+M:M}).sort(uf)),f});function Lv(n,s){var l=[];if(!(n&&n.length))return l;var f=-1,M=[],b=n.length;for(s=Yt(s,3);++f<b;){var D=n[f];s(D,f,n)&&(l.push(D),M.push(f))}return jh(n,M),l}function Kl(n){return n==null?n:b_.call(n)}function Iv(n,s,l){var f=n==null?0:n.length;return f?(l&&typeof l!="number"&&Mn(n,s,l)?(s=0,l=f):(s=s==null?0:oe(s),l=l===e?f:oe(l)),Yn(n,s,l)):[]}function Uv(n,s){return Ga(n,s)}function Nv(n,s,l){return Ll(n,s,Yt(l,2))}function Fv(n,s){var l=n==null?0:n.length;if(l){var f=Ga(n,s);if(f<l&&si(n[f],s))return f}return-1}function Ov(n,s){return Ga(n,s,!0)}function Bv(n,s,l){return Ll(n,s,Yt(l,2),!0)}function zv(n,s){var l=n==null?0:n.length;if(l){var f=Ga(n,s,!0)-1;if(si(n[f],s))return f}return-1}function Hv(n){return n&&n.length?ef(n):[]}function kv(n,s){return n&&n.length?ef(n,Yt(s,2)):[]}function Vv(n){var s=n==null?0:n.length;return s?Yn(n,1,s):[]}function Gv(n,s,l){return n&&n.length?(s=l||s===e?1:oe(s),Yn(n,0,s<0?0:s)):[]}function Wv(n,s,l){var f=n==null?0:n.length;return f?(s=l||s===e?1:oe(s),s=f-s,Yn(n,s<0?0:s,f)):[]}function Xv(n,s){return n&&n.length?Wa(n,Yt(s,3),!1,!0):[]}function qv(n,s){return n&&n.length?Wa(n,Yt(s,3)):[]}var Yv=fe(function(n){return $i(cn(n,1,Ke,!0))}),Zv=fe(function(n){var s=Zn(n);return Ke(s)&&(s=e),$i(cn(n,1,Ke,!0),Yt(s,2))}),Kv=fe(function(n){var s=Zn(n);return s=typeof s=="function"?s:e,$i(cn(n,1,Ke,!0),e,s)});function $v(n){return n&&n.length?$i(n):[]}function Jv(n,s){return n&&n.length?$i(n,Yt(s,2)):[]}function Qv(n,s){return s=typeof s=="function"?s:e,n&&n.length?$i(n,e,s):[]}function $l(n){if(!(n&&n.length))return[];var s=0;return n=Wi(n,function(l){if(Ke(l))return s=je(l.length,s),!0}),dl(s,function(l){return Ge(n,ul(l))})}function Vf(n,s){if(!(n&&n.length))return[];var l=$l(n);return s==null?l:Ge(l,function(f){return Ln(s,e,f)})}var jv=fe(function(n,s){return Ke(n)?Hs(n,s):[]}),t0=fe(function(n){return Ul(Wi(n,Ke))}),e0=fe(function(n){var s=Zn(n);return Ke(s)&&(s=e),Ul(Wi(n,Ke),Yt(s,2))}),n0=fe(function(n){var s=Zn(n);return s=typeof s=="function"?s:e,Ul(Wi(n,Ke),e,s)}),i0=fe($l);function r0(n,s){return af(n||[],s||[],zs)}function s0(n,s){return af(n||[],s||[],Gs)}var a0=fe(function(n){var s=n.length,l=s>1?n[s-1]:e;return l=typeof l=="function"?(n.pop(),l):e,Vf(n,l)});function Gf(n){var s=S(n);return s.__chain__=!0,s}function o0(n,s){return s(n),n}function ja(n,s){return s(n)}var l0=Ri(function(n){var s=n.length,l=s?n[0]:0,f=this.__wrapped__,M=function(b){return yl(b,n)};return s>1||this.__actions__.length||!(f instanceof ve)||!Ci(l)?this.thru(M):(f=f.slice(l,+l+(s?1:0)),f.__actions__.push({func:ja,args:[M],thisArg:e}),new Xn(f,this.__chain__).thru(function(b){return s&&!b.length&&b.push(e),b}))});function c0(){return Gf(this)}function u0(){return new Xn(this.value(),this.__chain__)}function h0(){this.__values__===e&&(this.__values__=id(this.value()));var n=this.__index__>=this.__values__.length,s=n?e:this.__values__[this.__index__++];return{done:n,value:s}}function f0(){return this}function d0(n){for(var s,l=this;l instanceof Ba;){var f=Ff(l);f.__index__=0,f.__values__=e,s?M.__wrapped__=f:s=f;var M=f;l=l.__wrapped__}return M.__wrapped__=n,s}function p0(){var n=this.__wrapped__;if(n instanceof ve){var s=n;return this.__actions__.length&&(s=new ve(this)),s=s.reverse(),s.__actions__.push({func:ja,args:[Kl],thisArg:e}),new Xn(s,this.__chain__)}return this.thru(Kl)}function m0(){return sf(this.__wrapped__,this.__actions__)}var _0=Xa(function(n,s,l){Ce.call(n,l)?++n[l]:Ai(n,l,1)});function g0(n,s,l){var f=se(n)?gh:og;return l&&Mn(n,s,l)&&(s=e),f(n,Yt(s,3))}function v0(n,s){var l=se(n)?Wi:kh;return l(n,Yt(s,3))}var x0=_f(Of),M0=_f(Bf);function y0(n,s){return cn(to(n,s),1)}function S0(n,s){return cn(to(n,s),ct)}function E0(n,s,l){return l=l===e?1:oe(l),cn(to(n,s),l)}function Wf(n,s){var l=se(n)?Gn:Ki;return l(n,Yt(s,3))}function Xf(n,s){var l=se(n)?Vm:Hh;return l(n,Yt(s,3))}var T0=Xa(function(n,s,l){Ce.call(n,l)?n[l].push(s):Ai(n,l,[s])});function b0(n,s,l,f){n=wn(n)?n:ns(n),l=l&&!f?oe(l):0;var M=n.length;return l<0&&(l=je(M+l,0)),so(n)?l<=M&&n.indexOf(s,l)>-1:!!M&&Xr(n,s,l)>-1}var A0=fe(function(n,s,l){var f=-1,M=typeof s=="function",b=wn(n)?K(n.length):[];return Ki(n,function(D){b[++f]=M?Ln(s,D,l):ks(D,s,l)}),b}),w0=Xa(function(n,s,l){Ai(n,l,s)});function to(n,s){var l=se(n)?Ge:Yh;return l(n,Yt(s,3))}function R0(n,s,l,f){return n==null?[]:(se(s)||(s=s==null?[]:[s]),l=f?e:l,se(l)||(l=l==null?[]:[l]),Jh(n,s,l))}var C0=Xa(function(n,s,l){n[l?0:1].push(s)},function(){return[[],[]]});function P0(n,s,l){var f=se(n)?ll:yh,M=arguments.length<3;return f(n,Yt(s,4),l,M,Ki)}function D0(n,s,l){var f=se(n)?Gm:yh,M=arguments.length<3;return f(n,Yt(s,4),l,M,Hh)}function L0(n,s){var l=se(n)?Wi:kh;return l(n,io(Yt(s,3)))}function I0(n){var s=se(n)?Fh:bg;return s(n)}function U0(n,s,l){(l?Mn(n,s,l):s===e)?s=1:s=oe(s);var f=se(n)?ng:Ag;return f(n,s)}function N0(n){var s=se(n)?ig:Rg;return s(n)}function F0(n){if(n==null)return 0;if(wn(n))return so(n)?Yr(n):n.length;var s=mn(n);return s==ge||s==Te?n.size:wl(n).length}function O0(n,s,l){var f=se(n)?cl:Cg;return l&&Mn(n,s,l)&&(s=e),f(n,Yt(s,3))}var B0=fe(function(n,s){if(n==null)return[];var l=s.length;return l>1&&Mn(n,s[0],s[1])?s=[]:l>2&&Mn(s[0],s[1],s[2])&&(s=[s[0]]),Jh(n,cn(s,1),[])}),eo=v_||function(){return rn.Date.now()};function z0(n,s){if(typeof s!="function")throw new Wn(c);return n=oe(n),function(){if(--n<1)return s.apply(this,arguments)}}function qf(n,s,l){return s=l?e:s,s=n&&s==null?n.length:s,wi(n,F,e,e,e,e,s)}function Yf(n,s){var l;if(typeof s!="function")throw new Wn(c);return n=oe(n),function(){return--n>0&&(l=s.apply(this,arguments)),n<=1&&(s=e),l}}var Jl=fe(function(n,s,l){var f=v;if(l.length){var M=qi(l,ts(Jl));f|=B}return wi(n,f,s,l,M)}),Zf=fe(function(n,s,l){var f=v|m;if(l.length){var M=qi(l,ts(Zf));f|=B}return wi(s,f,n,l,M)});function Kf(n,s,l){s=l?e:s;var f=wi(n,L,e,e,e,e,e,s);return f.placeholder=Kf.placeholder,f}function $f(n,s,l){s=l?e:s;var f=wi(n,P,e,e,e,e,e,s);return f.placeholder=$f.placeholder,f}function Jf(n,s,l){var f,M,b,D,U,V,rt=0,st=!1,ft=!1,Et=!0;if(typeof n!="function")throw new Wn(c);s=Kn(s)||0,We(l)&&(st=!!l.leading,ft="maxWait"in l,b=ft?je(Kn(l.maxWait)||0,s):b,Et="trailing"in l?!!l.trailing:Et);function Ht($e){var ai=f,Li=M;return f=M=e,rt=$e,D=n.apply(Li,ai),D}function $t($e){return rt=$e,U=qs(_e,s),st?Ht($e):D}function le($e){var ai=$e-V,Li=$e-rt,_d=s-ai;return ft?pn(_d,b-Li):_d}function Jt($e){var ai=$e-V,Li=$e-rt;return V===e||ai>=s||ai<0||ft&&Li>=b}function _e(){var $e=eo();if(Jt($e))return xe($e);U=qs(_e,le($e))}function xe($e){return U=e,Et&&f?Ht($e):(f=M=e,D)}function Fn(){U!==e&&of(U),rt=0,f=V=M=U=e}function yn(){return U===e?D:xe(eo())}function On(){var $e=eo(),ai=Jt($e);if(f=arguments,M=this,V=$e,ai){if(U===e)return $t(V);if(ft)return of(U),U=qs(_e,s),Ht(V)}return U===e&&(U=qs(_e,s)),D}return On.cancel=Fn,On.flush=yn,On}var H0=fe(function(n,s){return zh(n,1,s)}),k0=fe(function(n,s,l){return zh(n,Kn(s)||0,l)});function V0(n){return wi(n,R)}function no(n,s){if(typeof n!="function"||s!=null&&typeof s!="function")throw new Wn(c);var l=function(){var f=arguments,M=s?s.apply(this,f):f[0],b=l.cache;if(b.has(M))return b.get(M);var D=n.apply(this,f);return l.cache=b.set(M,D)||b,D};return l.cache=new(no.Cache||bi),l}no.Cache=bi;function io(n){if(typeof n!="function")throw new Wn(c);return function(){var s=arguments;switch(s.length){case 0:return!n.call(this);case 1:return!n.call(this,s[0]);case 2:return!n.call(this,s[0],s[1]);case 3:return!n.call(this,s[0],s[1],s[2])}return!n.apply(this,s)}}function G0(n){return Yf(2,n)}var W0=Pg(function(n,s){s=s.length==1&&se(s[0])?Ge(s[0],In(Yt())):Ge(cn(s,1),In(Yt()));var l=s.length;return fe(function(f){for(var M=-1,b=pn(f.length,l);++M<b;)f[M]=s[M].call(this,f[M]);return Ln(n,this,f)})}),Ql=fe(function(n,s){var l=qi(s,ts(Ql));return wi(n,B,e,s,l)}),Qf=fe(function(n,s){var l=qi(s,ts(Qf));return wi(n,O,e,s,l)}),X0=Ri(function(n,s){return wi(n,Y,e,e,e,s)});function q0(n,s){if(typeof n!="function")throw new Wn(c);return s=s===e?s:oe(s),fe(n,s)}function Y0(n,s){if(typeof n!="function")throw new Wn(c);return s=s==null?0:je(oe(s),0),fe(function(l){var f=l[s],M=Qi(l,0,s);return f&&Xi(M,f),Ln(n,this,M)})}function Z0(n,s,l){var f=!0,M=!0;if(typeof n!="function")throw new Wn(c);return We(l)&&(f="leading"in l?!!l.leading:f,M="trailing"in l?!!l.trailing:M),Jf(n,s,{leading:f,maxWait:s,trailing:M})}function K0(n){return qf(n,1)}function $0(n,s){return Ql(Fl(s),n)}function J0(){if(!arguments.length)return[];var n=arguments[0];return se(n)?n:[n]}function Q0(n){return qn(n,x)}function j0(n,s){return s=typeof s=="function"?s:e,qn(n,x,s)}function tx(n){return qn(n,_|x)}function ex(n,s){return s=typeof s=="function"?s:e,qn(n,_|x,s)}function nx(n,s){return s==null||Bh(n,s,sn(s))}function si(n,s){return n===s||n!==n&&s!==s}var ix=Ka(Tl),rx=Ka(function(n,s){return n>=s}),Tr=Wh(function(){return arguments}())?Wh:function(n){return Xe(n)&&Ce.call(n,"callee")&&!Ph.call(n,"callee")},se=K.isArray,sx=hh?In(hh):dg;function wn(n){return n!=null&&ro(n.length)&&!Pi(n)}function Ke(n){return Xe(n)&&wn(n)}function ax(n){return n===!0||n===!1||Xe(n)&&xn(n)==Ct}var ji=M_||cc,ox=fh?In(fh):pg;function lx(n){return Xe(n)&&n.nodeType===1&&!Ys(n)}function cx(n){if(n==null)return!0;if(wn(n)&&(se(n)||typeof n=="string"||typeof n.splice=="function"||ji(n)||es(n)||Tr(n)))return!n.length;var s=mn(n);if(s==ge||s==Te)return!n.size;if(Xs(n))return!wl(n).length;for(var l in n)if(Ce.call(n,l))return!1;return!0}function ux(n,s){return Vs(n,s)}function hx(n,s,l){l=typeof l=="function"?l:e;var f=l?l(n,s):e;return f===e?Vs(n,s,e,l):!!f}function jl(n){if(!Xe(n))return!1;var s=xn(n);return s==he||s==kt||typeof n.message=="string"&&typeof n.name=="string"&&!Ys(n)}function fx(n){return typeof n=="number"&&Lh(n)}function Pi(n){if(!We(n))return!1;var s=xn(n);return s==Ze||s==I||s==dt||s==Ft}function jf(n){return typeof n=="number"&&n==oe(n)}function ro(n){return typeof n=="number"&&n>-1&&n%1==0&&n<=Q}function We(n){var s=typeof n;return n!=null&&(s=="object"||s=="function")}function Xe(n){return n!=null&&typeof n=="object"}var td=dh?In(dh):_g;function dx(n,s){return n===s||Al(n,s,Gl(s))}function px(n,s,l){return l=typeof l=="function"?l:e,Al(n,s,Gl(s),l)}function mx(n){return ed(n)&&n!=+n}function _x(n){if(jg(n))throw new ie(o);return Xh(n)}function gx(n){return n===null}function vx(n){return n==null}function ed(n){return typeof n=="number"||Xe(n)&&xn(n)==te}function Ys(n){if(!Xe(n)||xn(n)!=wt)return!1;var s=Da(n);if(s===null)return!0;var l=Ce.call(s,"constructor")&&s.constructor;return typeof l=="function"&&l instanceof l&&wa.call(l)==p_}var tc=ph?In(ph):gg;function xx(n){return jf(n)&&n>=-Q&&n<=Q}var nd=mh?In(mh):vg;function so(n){return typeof n=="string"||!se(n)&&Xe(n)&&xn(n)==Ne}function Nn(n){return typeof n=="symbol"||Xe(n)&&xn(n)==C}var es=_h?In(_h):xg;function Mx(n){return n===e}function yx(n){return Xe(n)&&mn(n)==q}function Sx(n){return Xe(n)&&xn(n)==nt}var Ex=Ka(Rl),Tx=Ka(function(n,s){return n<=s});function id(n){if(!n)return[];if(wn(n))return so(n)?ii(n):An(n);if(Us&&n[Us])return n_(n[Us]());var s=mn(n),l=s==ge?ml:s==Te?Ta:ns;return l(n)}function Di(n){if(!n)return n===0?n:0;if(n=Kn(n),n===ct||n===-ct){var s=n<0?-1:1;return s*yt}return n===n?n:0}function oe(n){var s=Di(n),l=s%1;return s===s?l?s-l:s:0}function rd(n){return n?Mr(oe(n),0,Lt):0}function Kn(n){if(typeof n=="number")return n;if(Nn(n))return At;if(We(n)){var s=typeof n.valueOf=="function"?n.valueOf():n;n=We(s)?s+"":s}if(typeof n!="string")return n===0?n:+n;n=Sh(n);var l=el.test(n);return l||il.test(n)?zm(n.slice(2),l?2:8):tl.test(n)?At:+n}function sd(n){return pi(n,Rn(n))}function bx(n){return n?Mr(oe(n),-Q,Q):n===0?n:0}function we(n){return n==null?"":Un(n)}var Ax=Qr(function(n,s){if(Xs(s)||wn(s)){pi(s,sn(s),n);return}for(var l in s)Ce.call(s,l)&&zs(n,l,s[l])}),ad=Qr(function(n,s){pi(s,Rn(s),n)}),ao=Qr(function(n,s,l,f){pi(s,Rn(s),n,f)}),wx=Qr(function(n,s,l,f){pi(s,sn(s),n,f)}),Rx=Ri(yl);function Cx(n,s){var l=Jr(n);return s==null?l:Oh(l,s)}var Px=fe(function(n,s){n=Oe(n);var l=-1,f=s.length,M=f>2?s[2]:e;for(M&&Mn(s[0],s[1],M)&&(f=1);++l<f;)for(var b=s[l],D=Rn(b),U=-1,V=D.length;++U<V;){var rt=D[U],st=n[rt];(st===e||si(st,Zr[rt])&&!Ce.call(n,rt))&&(n[rt]=b[rt])}return n}),Dx=fe(function(n){return n.push(e,Ef),Ln(od,e,n)});function Lx(n,s){return vh(n,Yt(s,3),di)}function Ix(n,s){return vh(n,Yt(s,3),El)}function Ux(n,s){return n==null?n:Sl(n,Yt(s,3),Rn)}function Nx(n,s){return n==null?n:Vh(n,Yt(s,3),Rn)}function Fx(n,s){return n&&di(n,Yt(s,3))}function Ox(n,s){return n&&El(n,Yt(s,3))}function Bx(n){return n==null?[]:ka(n,sn(n))}function zx(n){return n==null?[]:ka(n,Rn(n))}function ec(n,s,l){var f=n==null?e:yr(n,s);return f===e?l:f}function Hx(n,s){return n!=null&&Af(n,s,cg)}function nc(n,s){return n!=null&&Af(n,s,ug)}var kx=vf(function(n,s,l){s!=null&&typeof s.toString!="function"&&(s=Ra.call(s)),n[s]=l},rc(Cn)),Vx=vf(function(n,s,l){s!=null&&typeof s.toString!="function"&&(s=Ra.call(s)),Ce.call(n,s)?n[s].push(l):n[s]=[l]},Yt),Gx=fe(ks);function sn(n){return wn(n)?Nh(n):wl(n)}function Rn(n){return wn(n)?Nh(n,!0):Mg(n)}function Wx(n,s){var l={};return s=Yt(s,3),di(n,function(f,M,b){Ai(l,s(f,M,b),f)}),l}function Xx(n,s){var l={};return s=Yt(s,3),di(n,function(f,M,b){Ai(l,M,s(f,M,b))}),l}var qx=Qr(function(n,s,l){Va(n,s,l)}),od=Qr(function(n,s,l,f){Va(n,s,l,f)}),Yx=Ri(function(n,s){var l={};if(n==null)return l;var f=!1;s=Ge(s,function(b){return b=Ji(b,n),f||(f=b.length>1),b}),pi(n,kl(n),l),f&&(l=qn(l,_|g|x,kg));for(var M=s.length;M--;)Il(l,s[M]);return l});function Zx(n,s){return ld(n,io(Yt(s)))}var Kx=Ri(function(n,s){return n==null?{}:Sg(n,s)});function ld(n,s){if(n==null)return{};var l=Ge(kl(n),function(f){return[f]});return s=Yt(s),Qh(n,l,function(f,M){return s(f,M[0])})}function $x(n,s,l){s=Ji(s,n);var f=-1,M=s.length;for(M||(M=1,n=e);++f<M;){var b=n==null?e:n[mi(s[f])];b===e&&(f=M,b=l),n=Pi(b)?b.call(n):b}return n}function Jx(n,s,l){return n==null?n:Gs(n,s,l)}function Qx(n,s,l,f){return f=typeof f=="function"?f:e,n==null?n:Gs(n,s,l,f)}var cd=yf(sn),ud=yf(Rn);function jx(n,s,l){var f=se(n),M=f||ji(n)||es(n);if(s=Yt(s,4),l==null){var b=n&&n.constructor;M?l=f?new b:[]:We(n)?l=Pi(b)?Jr(Da(n)):{}:l={}}return(M?Gn:di)(n,function(D,U,V){return s(l,D,U,V)}),l}function tM(n,s){return n==null?!0:Il(n,s)}function eM(n,s,l){return n==null?n:rf(n,s,Fl(l))}function nM(n,s,l,f){return f=typeof f=="function"?f:e,n==null?n:rf(n,s,Fl(l),f)}function ns(n){return n==null?[]:pl(n,sn(n))}function iM(n){return n==null?[]:pl(n,Rn(n))}function rM(n,s,l){return l===e&&(l=s,s=e),l!==e&&(l=Kn(l),l=l===l?l:0),s!==e&&(s=Kn(s),s=s===s?s:0),Mr(Kn(n),s,l)}function sM(n,s,l){return s=Di(s),l===e?(l=s,s=0):l=Di(l),n=Kn(n),hg(n,s,l)}function aM(n,s,l){if(l&&typeof l!="boolean"&&Mn(n,s,l)&&(s=l=e),l===e&&(typeof s=="boolean"?(l=s,s=e):typeof n=="boolean"&&(l=n,n=e)),n===e&&s===e?(n=0,s=1):(n=Di(n),s===e?(s=n,n=0):s=Di(s)),n>s){var f=n;n=s,s=f}if(l||n%1||s%1){var M=Ih();return pn(n+M*(s-n+Bm("1e-"+((M+"").length-1))),s)}return Pl(n,s)}var oM=jr(function(n,s,l){return s=s.toLowerCase(),n+(l?hd(s):s)});function hd(n){return ic(we(n).toLowerCase())}function fd(n){return n=we(n),n&&n.replace(G,Jm).replace(Rm,"")}function lM(n,s,l){n=we(n),s=Un(s);var f=n.length;l=l===e?f:Mr(oe(l),0,f);var M=l;return l-=s.length,l>=0&&n.slice(l,M)==s}function cM(n){return n=we(n),n&&lt.test(n)?n.replace(Dt,Qm):n}function uM(n){return n=we(n),n&&Ei.test(n)?n.replace(kr,"\\$&"):n}var hM=jr(function(n,s,l){return n+(l?"-":"")+s.toLowerCase()}),fM=jr(function(n,s,l){return n+(l?" ":"")+s.toLowerCase()}),dM=mf("toLowerCase");function pM(n,s,l){n=we(n),s=oe(s);var f=s?Yr(n):0;if(!s||f>=s)return n;var M=(s-f)/2;return Za(Na(M),l)+n+Za(Ua(M),l)}function mM(n,s,l){n=we(n),s=oe(s);var f=s?Yr(n):0;return s&&f<s?n+Za(s-f,l):n}function _M(n,s,l){n=we(n),s=oe(s);var f=s?Yr(n):0;return s&&f<s?Za(s-f,l)+n:n}function gM(n,s,l){return l||s==null?s=0:s&&(s=+s),T_(we(n).replace(dr,""),s||0)}function vM(n,s,l){return(l?Mn(n,s,l):s===e)?s=1:s=oe(s),Dl(we(n),s)}function xM(){var n=arguments,s=we(n[0]);return n.length<3?s:s.replace(n[1],n[2])}var MM=jr(function(n,s,l){return n+(l?"_":"")+s.toLowerCase()});function yM(n,s,l){return l&&typeof l!="number"&&Mn(n,s,l)&&(s=l=e),l=l===e?Lt:l>>>0,l?(n=we(n),n&&(typeof s=="string"||s!=null&&!tc(s))&&(s=Un(s),!s&&qr(n))?Qi(ii(n),0,l):n.split(s,l)):[]}var SM=jr(function(n,s,l){return n+(l?" ":"")+ic(s)});function EM(n,s,l){return n=we(n),l=l==null?0:Mr(oe(l),0,n.length),s=Un(s),n.slice(l,l+s.length)==s}function TM(n,s,l){var f=S.templateSettings;l&&Mn(n,s,l)&&(s=e),n=we(n),s=ao({},s,f,Sf);var M=ao({},s.imports,f.imports,Sf),b=sn(M),D=pl(M,b),U,V,rt=0,st=s.interpolate||Z,ft="__p += '",Et=_l((s.escape||Z).source+"|"+st.source+"|"+(st===Re?jo:Z).source+"|"+(s.evaluate||Z).source+"|$","g"),Ht="//# sourceURL="+(Ce.call(s,"sourceURL")?(s.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++Im+"]")+`
`;n.replace(Et,function(Jt,_e,xe,Fn,yn,On){return xe||(xe=Fn),ft+=n.slice(rt,On).replace($,jm),_e&&(U=!0,ft+=`' +
__e(`+_e+`) +
'`),yn&&(V=!0,ft+=`';
`+yn+`;
__p += '`),xe&&(ft+=`' +
((__t = (`+xe+`)) == null ? '' : __t) +
'`),rt=On+Jt.length,Jt}),ft+=`';
`;var $t=Ce.call(s,"variable")&&s.variable;if(!$t)ft=`with (obj) {
`+ft+`
}
`;else if(xa.test($t))throw new ie(u);ft=(V?ft.replace(re,""):ft).replace(z,"$1").replace(gt,"$1;"),ft="function("+($t||"obj")+`) {
`+($t?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(U?", __e = _.escape":"")+(V?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+ft+`return __p
}`;var le=pd(function(){return Ee(b,Ht+"return "+ft).apply(e,D)});if(le.source=ft,jl(le))throw le;return le}function bM(n){return we(n).toLowerCase()}function AM(n){return we(n).toUpperCase()}function wM(n,s,l){if(n=we(n),n&&(l||s===e))return Sh(n);if(!n||!(s=Un(s)))return n;var f=ii(n),M=ii(s),b=Eh(f,M),D=Th(f,M)+1;return Qi(f,b,D).join("")}function RM(n,s,l){if(n=we(n),n&&(l||s===e))return n.slice(0,Ah(n)+1);if(!n||!(s=Un(s)))return n;var f=ii(n),M=Th(f,ii(s))+1;return Qi(f,0,M).join("")}function CM(n,s,l){if(n=we(n),n&&(l||s===e))return n.replace(dr,"");if(!n||!(s=Un(s)))return n;var f=ii(n),M=Eh(f,ii(s));return Qi(f,M).join("")}function PM(n,s){var l=w,f=H;if(We(s)){var M="separator"in s?s.separator:M;l="length"in s?oe(s.length):l,f="omission"in s?Un(s.omission):f}n=we(n);var b=n.length;if(qr(n)){var D=ii(n);b=D.length}if(l>=b)return n;var U=l-Yr(f);if(U<1)return f;var V=D?Qi(D,0,U).join(""):n.slice(0,U);if(M===e)return V+f;if(D&&(U+=V.length-U),tc(M)){if(n.slice(U).search(M)){var rt,st=V;for(M.global||(M=_l(M.source,we(ya.exec(M))+"g")),M.lastIndex=0;rt=M.exec(st);)var ft=rt.index;V=V.slice(0,ft===e?U:ft)}}else if(n.indexOf(Un(M),U)!=U){var Et=V.lastIndexOf(M);Et>-1&&(V=V.slice(0,Et))}return V+f}function DM(n){return n=we(n),n&&pt.test(n)?n.replace(xt,a_):n}var LM=jr(function(n,s,l){return n+(l?" ":"")+s.toUpperCase()}),ic=mf("toUpperCase");function dd(n,s,l){return n=we(n),s=l?e:s,s===e?e_(n)?c_(n):qm(n):n.match(s)||[]}var pd=fe(function(n,s){try{return Ln(n,e,s)}catch(l){return jl(l)?l:new ie(l)}}),IM=Ri(function(n,s){return Gn(s,function(l){l=mi(l),Ai(n,l,Jl(n[l],n))}),n});function UM(n){var s=n==null?0:n.length,l=Yt();return n=s?Ge(n,function(f){if(typeof f[1]!="function")throw new Wn(c);return[l(f[0]),f[1]]}):[],fe(function(f){for(var M=-1;++M<s;){var b=n[M];if(Ln(b[0],this,f))return Ln(b[1],this,f)}})}function NM(n){return ag(qn(n,_))}function rc(n){return function(){return n}}function FM(n,s){return n==null||n!==n?s:n}var OM=gf(),BM=gf(!0);function Cn(n){return n}function sc(n){return qh(typeof n=="function"?n:qn(n,_))}function zM(n){return Zh(qn(n,_))}function HM(n,s){return Kh(n,qn(s,_))}var kM=fe(function(n,s){return function(l){return ks(l,n,s)}}),VM=fe(function(n,s){return function(l){return ks(n,l,s)}});function ac(n,s,l){var f=sn(s),M=ka(s,f);l==null&&!(We(s)&&(M.length||!f.length))&&(l=s,s=n,n=this,M=ka(s,sn(s)));var b=!(We(l)&&"chain"in l)||!!l.chain,D=Pi(n);return Gn(M,function(U){var V=s[U];n[U]=V,D&&(n.prototype[U]=function(){var rt=this.__chain__;if(b||rt){var st=n(this.__wrapped__),ft=st.__actions__=An(this.__actions__);return ft.push({func:V,args:arguments,thisArg:n}),st.__chain__=rt,st}return V.apply(n,Xi([this.value()],arguments))})}),n}function GM(){return rn._===this&&(rn._=m_),this}function oc(){}function WM(n){return n=oe(n),fe(function(s){return $h(s,n)})}var XM=Bl(Ge),qM=Bl(gh),YM=Bl(cl);function md(n){return Xl(n)?ul(mi(n)):Eg(n)}function ZM(n){return function(s){return n==null?e:yr(n,s)}}var KM=xf(),$M=xf(!0);function lc(){return[]}function cc(){return!1}function JM(){return{}}function QM(){return""}function jM(){return!0}function ty(n,s){if(n=oe(n),n<1||n>Q)return[];var l=Lt,f=pn(n,Lt);s=Yt(s),n-=Lt;for(var M=dl(f,s);++l<n;)s(l);return M}function ey(n){return se(n)?Ge(n,mi):Nn(n)?[n]:An(Nf(we(n)))}function ny(n){var s=++d_;return we(n)+s}var iy=Ya(function(n,s){return n+s},0),ry=zl("ceil"),sy=Ya(function(n,s){return n/s},1),ay=zl("floor");function oy(n){return n&&n.length?Ha(n,Cn,Tl):e}function ly(n,s){return n&&n.length?Ha(n,Yt(s,2),Tl):e}function cy(n){return Mh(n,Cn)}function uy(n,s){return Mh(n,Yt(s,2))}function hy(n){return n&&n.length?Ha(n,Cn,Rl):e}function fy(n,s){return n&&n.length?Ha(n,Yt(s,2),Rl):e}var dy=Ya(function(n,s){return n*s},1),py=zl("round"),my=Ya(function(n,s){return n-s},0);function _y(n){return n&&n.length?fl(n,Cn):0}function gy(n,s){return n&&n.length?fl(n,Yt(s,2)):0}return S.after=z0,S.ary=qf,S.assign=Ax,S.assignIn=ad,S.assignInWith=ao,S.assignWith=wx,S.at=Rx,S.before=Yf,S.bind=Jl,S.bindAll=IM,S.bindKey=Zf,S.castArray=J0,S.chain=Gf,S.chunk=av,S.compact=ov,S.concat=lv,S.cond=UM,S.conforms=NM,S.constant=rc,S.countBy=_0,S.create=Cx,S.curry=Kf,S.curryRight=$f,S.debounce=Jf,S.defaults=Px,S.defaultsDeep=Dx,S.defer=H0,S.delay=k0,S.difference=cv,S.differenceBy=uv,S.differenceWith=hv,S.drop=fv,S.dropRight=dv,S.dropRightWhile=pv,S.dropWhile=mv,S.fill=_v,S.filter=v0,S.flatMap=y0,S.flatMapDeep=S0,S.flatMapDepth=E0,S.flatten=zf,S.flattenDeep=gv,S.flattenDepth=vv,S.flip=V0,S.flow=OM,S.flowRight=BM,S.fromPairs=xv,S.functions=Bx,S.functionsIn=zx,S.groupBy=T0,S.initial=yv,S.intersection=Sv,S.intersectionBy=Ev,S.intersectionWith=Tv,S.invert=kx,S.invertBy=Vx,S.invokeMap=A0,S.iteratee=sc,S.keyBy=w0,S.keys=sn,S.keysIn=Rn,S.map=to,S.mapKeys=Wx,S.mapValues=Xx,S.matches=zM,S.matchesProperty=HM,S.memoize=no,S.merge=qx,S.mergeWith=od,S.method=kM,S.methodOf=VM,S.mixin=ac,S.negate=io,S.nthArg=WM,S.omit=Yx,S.omitBy=Zx,S.once=G0,S.orderBy=R0,S.over=XM,S.overArgs=W0,S.overEvery=qM,S.overSome=YM,S.partial=Ql,S.partialRight=Qf,S.partition=C0,S.pick=Kx,S.pickBy=ld,S.property=md,S.propertyOf=ZM,S.pull=Rv,S.pullAll=kf,S.pullAllBy=Cv,S.pullAllWith=Pv,S.pullAt=Dv,S.range=KM,S.rangeRight=$M,S.rearg=X0,S.reject=L0,S.remove=Lv,S.rest=q0,S.reverse=Kl,S.sampleSize=U0,S.set=Jx,S.setWith=Qx,S.shuffle=N0,S.slice=Iv,S.sortBy=B0,S.sortedUniq=Hv,S.sortedUniqBy=kv,S.split=yM,S.spread=Y0,S.tail=Vv,S.take=Gv,S.takeRight=Wv,S.takeRightWhile=Xv,S.takeWhile=qv,S.tap=o0,S.throttle=Z0,S.thru=ja,S.toArray=id,S.toPairs=cd,S.toPairsIn=ud,S.toPath=ey,S.toPlainObject=sd,S.transform=jx,S.unary=K0,S.union=Yv,S.unionBy=Zv,S.unionWith=Kv,S.uniq=$v,S.uniqBy=Jv,S.uniqWith=Qv,S.unset=tM,S.unzip=$l,S.unzipWith=Vf,S.update=eM,S.updateWith=nM,S.values=ns,S.valuesIn=iM,S.without=jv,S.words=dd,S.wrap=$0,S.xor=t0,S.xorBy=e0,S.xorWith=n0,S.zip=i0,S.zipObject=r0,S.zipObjectDeep=s0,S.zipWith=a0,S.entries=cd,S.entriesIn=ud,S.extend=ad,S.extendWith=ao,ac(S,S),S.add=iy,S.attempt=pd,S.camelCase=oM,S.capitalize=hd,S.ceil=ry,S.clamp=rM,S.clone=Q0,S.cloneDeep=tx,S.cloneDeepWith=ex,S.cloneWith=j0,S.conformsTo=nx,S.deburr=fd,S.defaultTo=FM,S.divide=sy,S.endsWith=lM,S.eq=si,S.escape=cM,S.escapeRegExp=uM,S.every=g0,S.find=x0,S.findIndex=Of,S.findKey=Lx,S.findLast=M0,S.findLastIndex=Bf,S.findLastKey=Ix,S.floor=ay,S.forEach=Wf,S.forEachRight=Xf,S.forIn=Ux,S.forInRight=Nx,S.forOwn=Fx,S.forOwnRight=Ox,S.get=ec,S.gt=ix,S.gte=rx,S.has=Hx,S.hasIn=nc,S.head=Hf,S.identity=Cn,S.includes=b0,S.indexOf=Mv,S.inRange=sM,S.invoke=Gx,S.isArguments=Tr,S.isArray=se,S.isArrayBuffer=sx,S.isArrayLike=wn,S.isArrayLikeObject=Ke,S.isBoolean=ax,S.isBuffer=ji,S.isDate=ox,S.isElement=lx,S.isEmpty=cx,S.isEqual=ux,S.isEqualWith=hx,S.isError=jl,S.isFinite=fx,S.isFunction=Pi,S.isInteger=jf,S.isLength=ro,S.isMap=td,S.isMatch=dx,S.isMatchWith=px,S.isNaN=mx,S.isNative=_x,S.isNil=vx,S.isNull=gx,S.isNumber=ed,S.isObject=We,S.isObjectLike=Xe,S.isPlainObject=Ys,S.isRegExp=tc,S.isSafeInteger=xx,S.isSet=nd,S.isString=so,S.isSymbol=Nn,S.isTypedArray=es,S.isUndefined=Mx,S.isWeakMap=yx,S.isWeakSet=Sx,S.join=bv,S.kebabCase=hM,S.last=Zn,S.lastIndexOf=Av,S.lowerCase=fM,S.lowerFirst=dM,S.lt=Ex,S.lte=Tx,S.max=oy,S.maxBy=ly,S.mean=cy,S.meanBy=uy,S.min=hy,S.minBy=fy,S.stubArray=lc,S.stubFalse=cc,S.stubObject=JM,S.stubString=QM,S.stubTrue=jM,S.multiply=dy,S.nth=wv,S.noConflict=GM,S.noop=oc,S.now=eo,S.pad=pM,S.padEnd=mM,S.padStart=_M,S.parseInt=gM,S.random=aM,S.reduce=P0,S.reduceRight=D0,S.repeat=vM,S.replace=xM,S.result=$x,S.round=py,S.runInContext=k,S.sample=I0,S.size=F0,S.snakeCase=MM,S.some=O0,S.sortedIndex=Uv,S.sortedIndexBy=Nv,S.sortedIndexOf=Fv,S.sortedLastIndex=Ov,S.sortedLastIndexBy=Bv,S.sortedLastIndexOf=zv,S.startCase=SM,S.startsWith=EM,S.subtract=my,S.sum=_y,S.sumBy=gy,S.template=TM,S.times=ty,S.toFinite=Di,S.toInteger=oe,S.toLength=rd,S.toLower=bM,S.toNumber=Kn,S.toSafeInteger=bx,S.toString=we,S.toUpper=AM,S.trim=wM,S.trimEnd=RM,S.trimStart=CM,S.truncate=PM,S.unescape=DM,S.uniqueId=ny,S.upperCase=LM,S.upperFirst=ic,S.each=Wf,S.eachRight=Xf,S.first=Hf,ac(S,function(){var n={};return di(S,function(s,l){Ce.call(S.prototype,l)||(n[l]=s)}),n}(),{chain:!1}),S.VERSION=r,Gn(["bind","bindKey","curry","curryRight","partial","partialRight"],function(n){S[n].placeholder=S}),Gn(["drop","take"],function(n,s){ve.prototype[n]=function(l){l=l===e?1:je(oe(l),0);var f=this.__filtered__&&!s?new ve(this):this.clone();return f.__filtered__?f.__takeCount__=pn(l,f.__takeCount__):f.__views__.push({size:pn(l,Lt),type:n+(f.__dir__<0?"Right":"")}),f},ve.prototype[n+"Right"]=function(l){return this.reverse()[n](l).reverse()}}),Gn(["filter","map","takeWhile"],function(n,s){var l=s+1,f=l==ut||l==ot;ve.prototype[n]=function(M){var b=this.clone();return b.__iteratees__.push({iteratee:Yt(M,3),type:l}),b.__filtered__=b.__filtered__||f,b}}),Gn(["head","last"],function(n,s){var l="take"+(s?"Right":"");ve.prototype[n]=function(){return this[l](1).value()[0]}}),Gn(["initial","tail"],function(n,s){var l="drop"+(s?"":"Right");ve.prototype[n]=function(){return this.__filtered__?new ve(this):this[l](1)}}),ve.prototype.compact=function(){return this.filter(Cn)},ve.prototype.find=function(n){return this.filter(n).head()},ve.prototype.findLast=function(n){return this.reverse().find(n)},ve.prototype.invokeMap=fe(function(n,s){return typeof n=="function"?new ve(this):this.map(function(l){return ks(l,n,s)})}),ve.prototype.reject=function(n){return this.filter(io(Yt(n)))},ve.prototype.slice=function(n,s){n=oe(n);var l=this;return l.__filtered__&&(n>0||s<0)?new ve(l):(n<0?l=l.takeRight(-n):n&&(l=l.drop(n)),s!==e&&(s=oe(s),l=s<0?l.dropRight(-s):l.take(s-n)),l)},ve.prototype.takeRightWhile=function(n){return this.reverse().takeWhile(n).reverse()},ve.prototype.toArray=function(){return this.take(Lt)},di(ve.prototype,function(n,s){var l=/^(?:filter|find|map|reject)|While$/.test(s),f=/^(?:head|last)$/.test(s),M=S[f?"take"+(s=="last"?"Right":""):s],b=f||/^find/.test(s);M&&(S.prototype[s]=function(){var D=this.__wrapped__,U=f?[1]:arguments,V=D instanceof ve,rt=U[0],st=V||se(D),ft=function(_e){var xe=M.apply(S,Xi([_e],U));return f&&Et?xe[0]:xe};st&&l&&typeof rt=="function"&&rt.length!=1&&(V=st=!1);var Et=this.__chain__,Ht=!!this.__actions__.length,$t=b&&!Et,le=V&&!Ht;if(!b&&st){D=le?D:new ve(this);var Jt=n.apply(D,U);return Jt.__actions__.push({func:ja,args:[ft],thisArg:e}),new Xn(Jt,Et)}return $t&&le?n.apply(this,U):(Jt=this.thru(ft),$t?f?Jt.value()[0]:Jt.value():Jt)})}),Gn(["pop","push","shift","sort","splice","unshift"],function(n){var s=ba[n],l=/^(?:push|sort|unshift)$/.test(n)?"tap":"thru",f=/^(?:pop|shift)$/.test(n);S.prototype[n]=function(){var M=arguments;if(f&&!this.__chain__){var b=this.value();return s.apply(se(b)?b:[],M)}return this[l](function(D){return s.apply(se(D)?D:[],M)})}}),di(ve.prototype,function(n,s){var l=S[s];if(l){var f=l.name+"";Ce.call($r,f)||($r[f]=[]),$r[f].push({name:s,func:l})}}),$r[qa(e,m).name]=[{name:"wrapper",func:e}],ve.prototype.clone=D_,ve.prototype.reverse=L_,ve.prototype.value=I_,S.prototype.at=l0,S.prototype.chain=c0,S.prototype.commit=u0,S.prototype.next=h0,S.prototype.plant=d0,S.prototype.reverse=p0,S.prototype.toJSON=S.prototype.valueOf=S.prototype.value=m0,S.prototype.first=S.prototype.head,Us&&(S.prototype[Us]=f0),S},Yi=u_();typeof define=="function"&&typeof define.amd=="object"&&define.amd?(rn._=Yi,define(function(){return Yi})):_r?((_r.exports=Yi)._=Yi,sl._=Yi):rn._=Yi}).call(i)}),yp=hr(fr());function fm(i,t,e=1,r=0){let a=0,o=i.length/e;for(;a<o;){let c=a+o>>1;i[c*e+r]<t?a=c+1:o=c}return a*e}function l1(i,t){let e=new Array(i);for(let r=0;r<i;r++)e[r]=t(r);return e}var{cos:c1,pow:u1,sin:h1,sqrt:f1,PI:dm}=Math,d1=i=>{if(i<1/2.75)return 7.5625*i*i;if(i<2/2.75){let t=i-1.5;return 7.5625*(t/2.75)*t+.75}else return i<2.5/2.75?7.5625*(i-=2.25/2.75)*i+.9375:7.5625*(i-=2.625/2.75)*i+.984375};function p1(i){return t=>1-i(1-t)}function m1(i){return t=>t<.5?.5*i(2*t):.5+.5*(1-i(2-2*t))}var _1=i=>i===0||i===1?i:u1(2,-10*i)*h1((i-.075)*(2*dm)/.3)+1,g1={linear:i=>i,quad:i=>i*i,cubic:i=>i*i*i,quart:i=>i*i*i*i,quint:i=>i*i*i*i*i,sine:i=>1-c1(i*dm*.5),circ:i=>1-f1(1-i*i),back:i=>2.7*i*i*i-1.7*i*i,elastic:_1,bounce:i=>1-d1(1-i)},Sp=Object.fromEntries(Object.entries(g1).flatMap(([i,t])=>[[i,t],[`${i}In`,t],[`${i}Out`,p1(t)],[`${i}InOut`,m1(t)]]));function Qu(i){if(!(i in Sp))throw new Error(`Easing '${i}' was not found.`);return Sp[i]}var v1=Math.PI*.5;function pm(i,t,e=Number.EPSILON){return Math.abs(i-t)<=e}function x1(i,t){let e=fm(i,t,2),r=Math.max(0,e-2);e===i.length&&(e-=2);let a=i[r],o=i[e];if(pm(a,o))return i[r+1];{let c=i[r+1],u=i[e+1],d=(t-a)/(o-a);return(u-c)*d+c}}function Ep(i,t,e,r){if(i.length===0){r.fill(0,0,t);return}let a=t+1,o=fm(i,e,a),c=Math.max(0,o-a);o===i.length&&(o-=a);let u=i[c],d=i[o];if(pm(u,d))for(let h=0;h<t;h++)r[h]=i[c+h+1];else for(let h=0;h<t;h++){let p=i[c+h+1],_=i[o+h+1],g=(e-u)/(d-u);r[h]=(_-p)*g+p}}function ju(i){return i!=null}var M1=new TextDecoder;function y1(i,t){return typeof i=="string"?i:M1.decode(i,t)}var S1=hr(fr()),Nu={min:0,max:0,ease:"linear"};function ia(i){(0,S1.defaults)(i,{max:i.min??0},Nu)}function ra(i){return Qu(i.ease)(Math.random())*(i.max-i.min)+i.min}var Hc=hr(fr()),Wo={property:"",timeline:new Float32Array,useEmitterDuration:!1,relative:!1,low:{min:0,max:0,ease:"linear"},high:{min:1,max:1,ease:"linear"}};function kc(i){(0,Hc.defaults)(i,(0,Hc.cloneDeep)({high:i.low??Wo.high}),(0,Hc.cloneDeep)(Wo)),ia(i.low),ia(i.high),Array.isArray(i.timeline)&&(i.timeline=new Float32Array(i.timeline))}var Xo=hr(fr()),E1=hr(fr()),{random:Es,cos:Tp,sin:bp,PI:T1,acos:b1,cbrt:A1}=Math,mm={type:"point",x:0,y:0,z:0,w:0,h:0,d:0,ease:"linear"};function w1(i){(0,E1.defaults)(i,mm)}function R1(i,t){let e=Qu(i);t.x=e(Es())-.5,t.y=e(Es())-.5,t.z=e(Es())-.5}var Vc=new X,C1=new X,P1=2*T1;function D1(i,t){switch(i.type){case"point":t.set(i.x,i.y,i.z);break;case"box":R1(i.ease,Vc),Vc.multiply(C1.set(i.w,i.h,i.d)),t.set(i.x,i.y,i.z).add(Vc);break;case"ellipsoid":{let e=Es(),r=Es(),a=P1*e,o=b1(2*r-1),c=A1(Qu(i.ease)(Es())),u=bp(a),d=Tp(a),h=bp(o),p=Tp(o);t.set(c*i.w*h*d,c*i.h*h*u,c*i.d*p)}}}var _m={uuid:"",name:"",enabled:!0,count:100,loops:!0,duration:{duration:{min:10,max:10,ease:"linear"},delayBefore:Nu,delayAfter:Nu},emissionRate:{...Wo,property:"emissionRate",useEmitterDuration:!0,low:{min:10,max:10,ease:"linear"},high:{min:10,max:10,ease:"linear"}},particleLifeExpectancy:{...Wo,property:"particleLifeExpectancy",useEmitterDuration:!0,low:{min:2,max:2,ease:"linear"},high:{min:2,max:2,ease:"linear"}},spawn:mm,orientToForwardDirection:!1,propertyTimelines:[],material:null};function L1(i,t){(0,Xo.defaults)(i,{id:Vp.generateUUID()},(0,Xo.cloneDeep)(_m)),w1(i.spawn),I1(i.duration),kc(i.emissionRate),kc(i.particleLifeExpectancy),i.propertyTimelines.filter(ju).forEach(kc),i.material=U1(i.material,t)}function I1(i){(0,Xo.defaults)(i,(0,Xo.cloneDeep)(_m.duration)),ia(i.duration),ia(i.delayBefore),ia(i.delayAfter)}function U1(i,t){return i?Array.isArray(i)?i.map(e=>Ap(e,t)).filter(ju):Ap(i,t):null}function Ap(i,t){return typeof i=="string"?t[i]||(console.warn(`Missing material: ${i}`),null):i??null}var N1={version:"1.0",emitters:[]};function F1(i,t){(0,yp.defaults)(i,(0,yp.cloneDeep)(N1)),i.emitters.filter(ju).forEach(e=>L1(e,t))}function O1(i){return i.isParticleEmitterObject}var B1=class gm extends js{constructor(){super(),this.emittersNeedUpdate=!0,this.emitters=[]}forEachEmitter(t){for(let e of this.children)O1(e)&&t(e)}update(t){this.forEachEmitter(e=>{e.state.update(t),e.updateGeometry()})}rewind(){this.forEachEmitter(t=>t.state.rewind())}stop(t){this.emitters.forEach(e=>e.state.stop(t))}reset(){this.emitters.forEach(t=>t.state.reset())}clone(t=!0){let e=new gm;if(t)for(let r of this.children)e.add(r.clone(t));return e}},z1=hr(fr()),Fu=class{constructor(i){this.timeline=i,this.low=0,this.high=0,this.diff=0,this.current=0,this.reset()}reset(){this.low=ra(this.timeline.low),this.high=ra(this.timeline.high),this.timeline.relative&&(this.high+=this.low),this.diff=this.high-this.low,this.current=this.low}setTime(i){this.current=x1(this.timeline.timeline,i)*this.diff+this.low}},Gc=new X,H1=class{constructor(i,t,e,r){this.r=i,this.g=t,this.b=e,this.a=r}set(i,t,e,r){this.r=i,this.g=t,this.b=e,this.a=r}},k1=class{constructor(i){this.model=i,this.active=!1,this.life=0,this._lifeExpectancy=0,this.lifeExpectancyInv=0,this.position=new X,this.velocity=new X,this.scale=new X(1,1,1),this.rotation=new X,this.rotationalVelocity=new X,this.forwardDirection=new X,this.forwardDirectionVelocity=new X,this.forwardVelocity=0,this.tint=new H1(1,1,1,1),this.origin=new X(.5,.5,.5),this.rotationFinal=new X,this.imageIndex=0,this.propertyStates=i.propertyTimelines.map(t=>V1(this,t))}get lifeExpectancy(){return this._lifeExpectancy}set lifeExpectancy(i){this._lifeExpectancy=i,this.lifeExpectancyInv=1/i}update(i,t){this.life+=i;let e=this.life*this.lifeExpectancyInv,r=(0,z1.clamp)(e,0,1);for(let a of this.propertyStates)a.apply(r,t);if(this.position.add(Gc.copy(this.velocity).multiplyScalar(i)),this.rotation.add(Gc.copy(this.rotationalVelocity).multiplyScalar(i)),this.forwardDirection.add(Gc.copy(this.forwardDirectionVelocity).multiplyScalar(i)),this.forwardVelocity!==0&&!(this.forwardDirection.y!==0||this.forwardDirection.x!==0)&&this.forwardDirection.z!==0){let a=this.forwardDirection.z;this.position.x+=Math.cos(a)*this.forwardVelocity*i,this.position.y+=Math.sin(a)*this.forwardVelocity*i}this.model.orientToForwardDirection?(this.rotationFinal.copy(this.rotation).add(this.forwardDirection),this.rotationFinal.z+=v1):this.rotationFinal.copy(this.rotation)}reset(){this.active=!1,this.life=0,this._lifeExpectancy=0,this.lifeExpectancyInv=0,D1(this.model.spawn,this.position),this.velocity.set(0,0,0),this.scale.set(1,1,1),this.rotation.set(0,0,0),this.rotationalVelocity.set(0,0,0),this.forwardDirection.set(0,0,0),this.forwardDirectionVelocity.set(0,0,0),this.forwardVelocity=0,this.tint.set(1,1,1,1),this.origin.set(.5,.5,.5),this.imageIndex=0;for(let i of this.propertyStates)i.reset()}};function V1(i,t){return t.property==="color"?new W1(i.tint,t):new G1(i,t)}var wp=new Set,G1=class{constructor(i,t){this.particleProps=i,this.timeline=t,this.value=new Fu(t);let e=t.property;!(e in Rp)&&!wp.has(e)&&(wp.add(e),console.warn(`Could not find property updater with the name ${e}`)),this.updater=Rp[e]??(()=>{})}apply(i,t){if(this.timeline.timeline.length===0)return;let e=this.timeline.useEmitterDuration?t:i;this.value.setTime(e),this.updater(this.particleProps,this.value.current)}reset(){this.value.reset()}},W1=class{constructor(i,t){if(this.color=i,this.timeline=t,this.previous=new Float32Array(3),this.value=new Float32Array(3),t.timeline.length%4!==0)throw new Error(`invalid color timeline, expected stride to be 4, was length ${t.timeline.length}`)}apply(i,t){this.previous.set(this.value);let e=this.timeline.useEmitterDuration?t:i;Ep(this.timeline.timeline,3,e,this.value);let r=this.color;r.r=this.value[0],r.g=this.value[1],r.b=this.value[2]}reset(){Ep(this.timeline.timeline,3,0,this.value),this.previous.set(this.value)}},Rp={x:(i,t)=>i.position.x=t,y:(i,t)=>i.position.y=t,z:(i,t)=>i.position.z=t,velocityX:(i,t)=>i.velocity.x=t,velocityY:(i,t)=>i.velocity.y=t,velocityZ:(i,t)=>i.velocity.z=t,originX:(i,t)=>i.origin.x=t,originY:(i,t)=>i.origin.y=t,originZ:(i,t)=>i.origin.z=t,scale:(i,t)=>{i.scale.x=t,i.scale.y=t,i.scale.z=t},scaleX:(i,t)=>i.scale.x=t,scaleY:(i,t)=>i.scale.y=t,scaleZ:(i,t)=>i.scale.z=t,rotationX:(i,t)=>i.rotation.x=t,rotationY:(i,t)=>i.rotation.y=t,rotationZ:(i,t)=>i.rotation.z=t,rotationalVelocityX:(i,t)=>i.rotationalVelocity.x=t,rotationalVelocityY:(i,t)=>i.rotationalVelocity.y=t,rotationalVelocityZ:(i,t)=>i.rotationalVelocity.z=t,forwardDirectionX:(i,t)=>i.forwardDirection.x=t,forwardDirectionY:(i,t)=>i.forwardDirection.y=t,forwardDirectionZ:(i,t)=>i.forwardDirection.z=t,forwardDirectionVelocityZ:(i,t)=>i.forwardDirectionVelocity.z=t,forwardVelocity:(i,t)=>i.forwardVelocity=t,colorR:(i,t)=>i.tint.r=t,colorG:(i,t)=>i.tint.g=t,colorB:(i,t)=>i.tint.b=t,colorA:(i,t)=>i.tint.a=t},X1=hr(fr()),q1=class{constructor(i){this.model=i,this._activeCount=0,this.delayBefore=0,this.delayAfter=0,this.time=0,this.duration=0,this.durationInv=0,this.endTime=0,this._isComplete=!1,this.loops=!1,this.accumulator=0,this.particles=l1(i.count,()=>new k1(i)),this.emissionRateValue=new Fu(i.emissionRate),this.particleLifeExpectancyValue=new Fu(i.particleLifeExpectancy),this.rewind()}get activeCount(){return this._activeCount}get totalTime(){return this.delayBefore+this.duration+this.delayAfter}get progress(){return this.totalTime<=0?1:(this.time+this.delayBefore)/this.totalTime}get isComplete(){return this._isComplete}update(i){if(this._isComplete||!this.model.enabled)return;if(this.time+=i,this.time>=this.endTime){if(this.loops){let r=this.time-this.endTime;this.rewind(),this.time+=r}else if(this._activeCount===0){this._isComplete=!0,this.accumulator=0;return}}let t=this.time*this.durationInv;if(this.emissionRateValue.setTime(t),this.particleLifeExpectancyValue.setTime(t),this.time<this.duration&&this.time>0){let r=this.emissionRateValue.current;this.accumulator+=r*i;let a=1/r;if(this.accumulator>1){let o=0;for(let c of this.particles)if(c.active||(c.reset(),c.life+=o,o-=a,c.active=!0,c.lifeExpectancy=this.particleLifeExpectancyValue.current,this._activeCount++,this.accumulator--),this._activeCount>=this.model.count&&(this.accumulator=0),this.accumulator<1)break}}let e=(0,X1.clamp)(t,0,1);for(let r of this.particles)r.active&&(r.update(i,e),r.life>r.lifeExpectancy&&(r.active=!1,this._activeCount--))}clearParticles(){for(let i of this.particles)i.active=!1;this._activeCount=0,this.accumulator=0}reset(){this.clearParticles(),this.rewind()}stop(i=!0){this.loops=!1,this.time=this.endTime,i||(this.clearParticles(),this._isComplete=!0)}rewind(){let i=this.model;this._isComplete=!1,this.loops=i.loops,this.delayBefore=ra(i.duration.delayBefore),this.delayAfter=ra(i.duration.delayAfter),this.time=-this.delayBefore,this.duration=ra(i.duration.duration),this.durationInv=1/this.duration,this.endTime=this.duration+this.delayAfter,this.emissionRateValue.reset(),this.particleLifeExpectancyValue.reset()}},Y1=class extends tE{constructor(i){super(),this.isParticleEmitterObject=!0,this.state=new q1(i);let t=i.count;this.geometry.setAttribute("position",new Hn(new Float32Array(t*3),3)),this.geometry.setAttribute("color",new Hn(new Float32Array(t*4),4)),i.material&&(this.material=i.material)}updateGeometry(){if(!this.state.model.enabled)return;let i=this.geometry.attributes.position.array,t=this.geometry.attributes.color.array,e=0;for(let r of this.state.particles){if(!r.active)continue;let a=r.position,o=e*3;i[o]=a.x,i[o+1]=a.y,i[o+2]=a.z;let c=r.tint,u=e*4;t[u]=c.r,t[u+1]=c.g,t[u+2]=c.b,t[u+3]=c.a,e++}this.geometry.setDrawRange(0,this.state.activeCount),this.geometry.attributes.position.needsUpdate=!0,this.geometry.attributes.color.needsUpdate=!0}};function Z1(i,t,e=t*2,r=t*2){i.save();let a=i.createRadialGradient(t,t,0,t,t,t);a.addColorStop(0,"rgba(255,255,255,1.0)"),a.addColorStop(1,"rgba(255,255,255,0)"),i.fillStyle=a,i.fillRect(0,0,e,r),i.restore()}function K1(i=64){if(typeof document>"u")return new un;let t=document.createElement("canvas"),e=t.getContext("2d");if(!e)return new un;t.width=i,t.height=i;let r=i/2;Z1(e,r);let a=new un(t);return a.type=vi,a.needsUpdate=!0,a}var Wc=null;function $1(){return Wc===null&&(Wc=K1()),Wc}var J1=hr(fr()),Q1=class extends Jo{constructor(i){super(i),this.materials={},this.materialLoader=new $u(this.manager),this.materialLoader.setTextures({radial:$1()})}setMaterials(i){this.materials=i}setPath(i){return super.setPath(i),this.materialLoader.setPath(i),this}load(i,t,e,r){let a=new sm(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(i,o=>{this.parseAsync(JSON.parse(y1(o))).then(t).catch(c=>r?.(c))},e,r)}async parseAsync(i){if(i=(0,J1.cloneDeep)(i),i.materials){let e=this.materialLoader;for(let[r,a]of Object.entries(i.materials))this.materials[r]=typeof a=="string"?await e.loadAsync(a):e.parse(a)}F1(i,this.materials);let t=new B1;for(let e of i.emitters)t.add(new Y1(e));return t}};/*! Bundled license information:

lodash/lodash.js:
  (**
   * @license
   * Lodash <https://lodash.com/>
   * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
   * Released under MIT license <https://lodash.com/license>
   * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
   * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
   *)
*/const Cp={type:"change"},th={type:"start"},vm={type:"end"},Io=new Zo,Pp=new ar,j1=Math.cos(70*Vp.DEG2RAD),tn=new X,Pn=2*Math.PI,Ie={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Xc=1e-6;class tR extends gE{constructor(t,e=null){super(t,e),this.state=Ie.NONE,this.target=new X,this.cursor=new X,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ms.ROTATE,MIDDLE:Ms.DOLLY,RIGHT:Ms.PAN},this.touches={ONE:vs.ROTATE,TWO:vs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new X,this._lastQuaternion=new Or,this._lastTargetPosition=new X,this._quat=new Or().setFromUnitVectors(t.up,new X(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Kd,this._sphericalDelta=new Kd,this._scale=1,this._panOffset=new X,this._rotateStart=new jt,this._rotateEnd=new jt,this._rotateDelta=new jt,this._panStart=new jt,this._panEnd=new jt,this._panDelta=new jt,this._dollyStart=new jt,this._dollyEnd=new jt,this._dollyDelta=new jt,this._dollyDirection=new X,this._mouse=new jt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=nR.bind(this),this._onPointerDown=eR.bind(this),this._onPointerUp=iR.bind(this),this._onContextMenu=uR.bind(this),this._onMouseWheel=aR.bind(this),this._onKeyDown=oR.bind(this),this._onTouchStart=lR.bind(this),this._onTouchMove=cR.bind(this),this._onMouseDown=rR.bind(this),this._onMouseMove=sR.bind(this),this._interceptControlDown=hR.bind(this),this._interceptControlUp=fR.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Cp),this.update(),this.state=Ie.NONE}update(t=null){const e=this.object.position;tn.copy(e).sub(this.target),tn.applyQuaternion(this._quat),this._spherical.setFromVector3(tn),this.autoRotate&&this.state===Ie.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let r=this.minAzimuthAngle,a=this.maxAzimuthAngle;isFinite(r)&&isFinite(a)&&(r<-Math.PI?r+=Pn:r>Math.PI&&(r-=Pn),a<-Math.PI?a+=Pn:a>Math.PI&&(a-=Pn),r<=a?this._spherical.theta=Math.max(r,Math.min(a,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(r+a)/2?Math.max(r,this._spherical.theta):Math.min(a,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let o=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const c=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),o=c!=this._spherical.radius}if(tn.setFromSpherical(this._spherical),tn.applyQuaternion(this._quatInverse),e.copy(this.target).add(tn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let c=null;if(this.object.isPerspectiveCamera){const u=tn.length();c=this._clampDistance(u*this._scale);const d=u-c;this.object.position.addScaledVector(this._dollyDirection,d),this.object.updateMatrixWorld(),o=!!d}else if(this.object.isOrthographicCamera){const u=new X(this._mouse.x,this._mouse.y,0);u.unproject(this.object);const d=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),o=d!==this.object.zoom;const h=new X(this._mouse.x,this._mouse.y,0);h.unproject(this.object),this.object.position.sub(h).add(u),this.object.updateMatrixWorld(),c=tn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;c!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(c).add(this.object.position):(Io.origin.copy(this.object.position),Io.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Io.direction))<j1?this.object.lookAt(this.target):(Pp.setFromNormalAndCoplanarPoint(this.object.up,this.target),Io.intersectPlane(Pp,this.target))))}else if(this.object.isOrthographicCamera){const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),c!==this.object.zoom&&(this.object.updateProjectionMatrix(),o=!0)}return this._scale=1,this._performCursorZoom=!1,o||this._lastPosition.distanceToSquared(this.object.position)>Xc||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Xc||this._lastTargetPosition.distanceToSquared(this.target)>Xc?(this.dispatchEvent(Cp),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Pn/60*this.autoRotateSpeed*t:Pn/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){tn.setFromMatrixColumn(e,0),tn.multiplyScalar(-t),this._panOffset.add(tn)}_panUp(t,e){this.screenSpacePanning===!0?tn.setFromMatrixColumn(e,1):(tn.setFromMatrixColumn(e,0),tn.crossVectors(this.object.up,tn)),tn.multiplyScalar(t),this._panOffset.add(tn)}_pan(t,e){const r=this.domElement;if(this.object.isPerspectiveCamera){const a=this.object.position;tn.copy(a).sub(this.target);let o=tn.length();o*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*o/r.clientHeight,this.object.matrix),this._panUp(2*e*o/r.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/r.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/r.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const r=this.domElement.getBoundingClientRect(),a=t-r.left,o=e-r.top,c=r.width,u=r.height;this._mouse.x=a/c*2-1,this._mouse.y=-(o/u)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Pn*this._rotateDelta.x/e.clientHeight),this._rotateUp(Pn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Pn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Pn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Pn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Pn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),r=.5*(t.pageX+e.x),a=.5*(t.pageY+e.y);this._rotateStart.set(r,a)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),r=.5*(t.pageX+e.x),a=.5*(t.pageY+e.y);this._panStart.set(r,a)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),r=t.pageX-e.x,a=t.pageY-e.y,o=Math.sqrt(r*r+a*a);this._dollyStart.set(0,o)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const r=this._getSecondPointerPosition(t),a=.5*(t.pageX+r.x),o=.5*(t.pageY+r.y);this._rotateEnd.set(a,o)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Pn*this._rotateDelta.x/e.clientHeight),this._rotateUp(Pn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),r=.5*(t.pageX+e.x),a=.5*(t.pageY+e.y);this._panEnd.set(r,a)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),r=t.pageX-e.x,a=t.pageY-e.y,o=Math.sqrt(r*r+a*a);this._dollyEnd.set(0,o),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const c=(t.pageX+e.x)*.5,u=(t.pageY+e.y)*.5;this._updateZoomParameters(c,u)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new jt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,r={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:r.deltaY*=16;break;case 2:r.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(r.deltaY*=10),r}}function eR(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function nR(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function iR(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(vm),this.state=Ie.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function rR(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Ms.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=Ie.DOLLY;break;case Ms.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Ie.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Ie.ROTATE}break;case Ms.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Ie.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Ie.PAN}break;default:this.state=Ie.NONE}this.state!==Ie.NONE&&this.dispatchEvent(th)}function sR(i){switch(this.state){case Ie.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case Ie.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case Ie.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function aR(i){this.enabled===!1||this.enableZoom===!1||this.state!==Ie.NONE||(i.preventDefault(),this.dispatchEvent(th),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(vm))}function oR(i){this.enabled!==!1&&this._handleKeyDown(i)}function lR(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case vs.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=Ie.TOUCH_ROTATE;break;case vs.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=Ie.TOUCH_PAN;break;default:this.state=Ie.NONE}break;case 2:switch(this.touches.TWO){case vs.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=Ie.TOUCH_DOLLY_PAN;break;case vs.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=Ie.TOUCH_DOLLY_ROTATE;break;default:this.state=Ie.NONE}break;default:this.state=Ie.NONE}this.state!==Ie.NONE&&this.dispatchEvent(th)}function cR(i){switch(this._trackPointer(i),this.state){case Ie.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case Ie.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case Ie.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case Ie.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=Ie.NONE}}function uR(i){this.enabled!==!1&&i.preventDefault()}function hR(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function fR(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}console.log("Hello!");const Cs=new Qn(45,window.innerWidth/window.innerHeight,.1,1e3);Cs.position.set(0,10,20);Cs.lookAt(new X(0,2,0));const ma=new YS;ma.background=new Zt(1118481);ma.fog=new Ku(1118481,20,100);const xm=new mE,eh=new _E(200,40,0,16777215);eh.material.opacity=.2;eh.material.transparent=!0;ma.add(eh);const Ou=document.querySelector("#mainCanvas"),Ps=new t1({canvas:Ou,antialias:!0});Ps.setClearColor(1644825);const dR=new tR(Cs,Ps.domElement);window.addEventListener("resize",Mm);Mm();function Mm(){const i=Ou.clientWidth,t=Ou.clientHeight;Ps.setPixelRatio(window.devicePixelRatio),Ps.setSize(i,t,!1),Cs.aspect=i/t,Cs.updateProjectionMatrix()}let Bu=null;const pR=new Q1;pR.loadAsync("./fire.json").then(i=>{Bu=i,ma.add(Bu)}).catch(console.error);function mR(){const i=xm.getDelta();dR.update(),Bu?.update(i),Ps.render(ma,Cs)}xm.start();Ps.setAnimationLoop(mR);
//# sourceMappingURL=index-BGkfWW6f.js.map
