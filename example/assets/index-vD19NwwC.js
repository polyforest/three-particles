(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function e(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(a){if(a.ep)return;a.ep=!0;const o=e(a);fetch(a.href,o)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Fu="174",xs={ROTATE:0,DOLLY:1,PAN:2},gs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},gy=0,pd=1,vy=2,Cp=1,xy=2,Bi=3,hr=0,Ln=1,zi=2,cr=0,Ms=1,md=2,_d=3,gd=4,My=5,Pr=100,yy=101,Sy=102,Ey=103,Ty=104,by=200,Ay=201,wy=202,Ry=203,Xc=204,qc=205,Cy=206,Py=207,Dy=208,Ly=209,Iy=210,Uy=211,Ny=212,Fy=213,Oy=214,Yc=0,Zc=1,Kc=2,Ts=3,$c=4,Jc=5,Qc=6,jc=7,Yo=0,By=1,zy=2,ur=0,Hy=1,ky=2,Vy=3,Gy=4,Wy=5,Xy=6,qy=7,Pp=300,bs=301,As=302,tu=303,eu=304,Zo=306,nu=1e3,Lr=1001,iu=1002,fi=1003,Yy=1004,oo=1005,gi=1006,hc=1007,Ir=1008,Gi=1009,Dp=1010,Lp=1011,la=1012,Ou=1013,Ur=1014,vi=1015,ua=1016,Bu=1017,zu=1018,ws=1020,Ip=35902,Up=1021,Np=1022,hi=1023,Fp=1024,Op=1025,ys=1026,Rs=1027,Bp=1028,Hu=1029,zp=1030,ku=1031,Vu=1033,Uo=33776,No=33777,Fo=33778,Oo=33779,ru=35840,su=35841,au=35842,ou=35843,lu=36196,cu=37492,uu=37496,hu=37808,fu=37809,du=37810,pu=37811,mu=37812,_u=37813,gu=37814,vu=37815,xu=37816,Mu=37817,yu=37818,Su=37819,Eu=37820,Tu=37821,Bo=36492,bu=36494,Au=36495,Hp=36283,wu=36284,Ru=36285,Cu=36286,Zy=3200,Ky=3201,Or=0,$y=1,lr="",Qn="srgb",Cs="srgb-linear",Ho="linear",Pe="srgb",ns=7680,vd=519,Jy=512,Qy=513,jy=514,kp=515,tS=516,eS=517,nS=518,iS=519,xd=35044,Md="300 es",Hi=2e3,ko=2001;class Br{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[t]===void 0&&(r[t]=[]),r[t].indexOf(e)===-1&&r[t].push(e)}hasEventListener(t,e){const r=this._listeners;return r===void 0?!1:r[t]!==void 0&&r[t].indexOf(e)!==-1}removeEventListener(t,e){const r=this._listeners;if(r===void 0)return;const a=r[t];if(a!==void 0){const o=a.indexOf(e);o!==-1&&a.splice(o,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const r=e[t.type];if(r!==void 0){t.target=this;const a=r.slice(0);for(let o=0,c=a.length;o<c;o++)a[o].call(this,t);t.target=null}}}const mn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let yd=1234567;const ra=Math.PI/180,ca=180/Math.PI;function Is(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(mn[i&255]+mn[i>>8&255]+mn[i>>16&255]+mn[i>>24&255]+"-"+mn[t&255]+mn[t>>8&255]+"-"+mn[t>>16&15|64]+mn[t>>24&255]+"-"+mn[e&63|128]+mn[e>>8&255]+"-"+mn[e>>16&255]+mn[e>>24&255]+mn[r&255]+mn[r>>8&255]+mn[r>>16&255]+mn[r>>24&255]).toLowerCase()}function ce(i,t,e){return Math.max(t,Math.min(e,i))}function Gu(i,t){return(i%t+t)%t}function rS(i,t,e,r,a){return r+(i-t)*(a-r)/(e-t)}function sS(i,t,e){return i!==t?(e-i)/(t-i):0}function sa(i,t,e){return(1-e)*i+e*t}function aS(i,t,e,r){return sa(i,t,1-Math.exp(-e*r))}function oS(i,t=1){return t-Math.abs(Gu(i,t*2)-t)}function lS(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function cS(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function uS(i,t){return i+Math.floor(Math.random()*(t-i+1))}function hS(i,t){return i+Math.random()*(t-i)}function fS(i){return i*(.5-Math.random())}function dS(i){i!==void 0&&(yd=i);let t=yd+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function pS(i){return i*ra}function mS(i){return i*ca}function _S(i){return(i&i-1)===0&&i!==0}function gS(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function vS(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function xS(i,t,e,r,a){const o=Math.cos,c=Math.sin,u=o(e/2),f=c(e/2),d=o((t+r)/2),p=c((t+r)/2),_=o((t-r)/2),g=c((t-r)/2),x=o((r-t)/2),E=c((r-t)/2);switch(a){case"XYX":i.set(u*p,f*_,f*g,u*d);break;case"YZY":i.set(f*g,u*p,f*_,u*d);break;case"ZXZ":i.set(f*_,f*g,u*p,u*d);break;case"XZX":i.set(u*p,f*E,f*x,u*d);break;case"YXY":i.set(f*x,u*p,f*E,u*d);break;case"ZYZ":i.set(f*E,f*x,u*p,u*d);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+a)}}function _s(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function yn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Vp={DEG2RAD:ra,RAD2DEG:ca,generateUUID:Is,clamp:ce,euclideanModulo:Gu,mapLinear:rS,inverseLerp:sS,lerp:sa,damp:aS,pingpong:oS,smoothstep:lS,smootherstep:cS,randInt:uS,randFloat:hS,randFloatSpread:fS,seededRandom:dS,degToRad:pS,radToDeg:mS,isPowerOfTwo:_S,ceilPowerOfTwo:gS,floorPowerOfTwo:vS,setQuaternionFromProperEuler:xS,normalize:yn,denormalize:_s};class $t{constructor(t=0,e=0){$t.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,r=this.y,a=t.elements;return this.x=a[0]*e+a[3]*r+a[6],this.y=a[1]*e+a[4]*r+a[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ce(this.x,t.x,e.x),this.y=ce(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ce(this.x,t,e),this.y=ce(this.y,t,e),this}clampLength(t,e){const r=this.length();return this.divideScalar(r||1).multiplyScalar(ce(r,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const r=this.dot(t)/e;return Math.acos(ce(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,r=this.y-t.y;return e*e+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,r){return this.x=t.x+(e.x-t.x)*r,this.y=t.y+(e.y-t.y)*r,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const r=Math.cos(e),a=Math.sin(e),o=this.x-t.x,c=this.y-t.y;return this.x=o*r-c*a+t.x,this.y=o*a+c*r+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ie{constructor(t,e,r,a,o,c,u,f,d){ie.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,r,a,o,c,u,f,d)}set(t,e,r,a,o,c,u,f,d){const p=this.elements;return p[0]=t,p[1]=a,p[2]=u,p[3]=e,p[4]=o,p[5]=f,p[6]=r,p[7]=c,p[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,r=t.elements;return e[0]=r[0],e[1]=r[1],e[2]=r[2],e[3]=r[3],e[4]=r[4],e[5]=r[5],e[6]=r[6],e[7]=r[7],e[8]=r[8],this}extractBasis(t,e,r){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const r=t.elements,a=e.elements,o=this.elements,c=r[0],u=r[3],f=r[6],d=r[1],p=r[4],_=r[7],g=r[2],x=r[5],E=r[8],A=a[0],v=a[3],m=a[6],N=a[1],L=a[4],P=a[7],W=a[2],B=a[5],F=a[8];return o[0]=c*A+u*N+f*W,o[3]=c*v+u*L+f*B,o[6]=c*m+u*P+f*F,o[1]=d*A+p*N+_*W,o[4]=d*v+p*L+_*B,o[7]=d*m+p*P+_*F,o[2]=g*A+x*N+E*W,o[5]=g*v+x*L+E*B,o[8]=g*m+x*P+E*F,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],r=t[1],a=t[2],o=t[3],c=t[4],u=t[5],f=t[6],d=t[7],p=t[8];return e*c*p-e*u*d-r*o*p+r*u*f+a*o*d-a*c*f}invert(){const t=this.elements,e=t[0],r=t[1],a=t[2],o=t[3],c=t[4],u=t[5],f=t[6],d=t[7],p=t[8],_=p*c-u*d,g=u*f-p*o,x=d*o-c*f,E=e*_+r*g+a*x;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/E;return t[0]=_*A,t[1]=(a*d-p*r)*A,t[2]=(u*r-a*c)*A,t[3]=g*A,t[4]=(p*e-a*f)*A,t[5]=(a*o-u*e)*A,t[6]=x*A,t[7]=(r*f-d*e)*A,t[8]=(c*e-r*o)*A,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,r,a,o,c,u){const f=Math.cos(o),d=Math.sin(o);return this.set(r*f,r*d,-r*(f*c+d*u)+c+t,-a*d,a*f,-a*(-d*c+f*u)+u+e,0,0,1),this}scale(t,e){return this.premultiply(fc.makeScale(t,e)),this}rotate(t){return this.premultiply(fc.makeRotation(-t)),this}translate(t,e){return this.premultiply(fc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),r=Math.sin(t);return this.set(e,-r,0,r,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,r=t.elements;for(let a=0;a<9;a++)if(e[a]!==r[a])return!1;return!0}fromArray(t,e=0){for(let r=0;r<9;r++)this.elements[r]=t[r+e];return this}toArray(t=[],e=0){const r=this.elements;return t[e]=r[0],t[e+1]=r[1],t[e+2]=r[2],t[e+3]=r[3],t[e+4]=r[4],t[e+5]=r[5],t[e+6]=r[6],t[e+7]=r[7],t[e+8]=r[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const fc=new ie;function Gp(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Vo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function MS(){const i=Vo("canvas");return i.style.display="block",i}const Sd={};function Rr(i){i in Sd||(Sd[i]=!0,console.warn(i))}function yS(i,t,e){return new Promise(function(r,a){function o(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:a();break;case i.TIMEOUT_EXPIRED:setTimeout(o,e);break;default:r()}}setTimeout(o,e)})}function SS(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function ES(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Ed=new ie().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Td=new ie().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function TS(){const i={enabled:!0,workingColorSpace:Cs,spaces:{},convert:function(a,o,c){return this.enabled===!1||o===c||!o||!c||(this.spaces[o].transfer===Pe&&(a.r=Vi(a.r),a.g=Vi(a.g),a.b=Vi(a.b)),this.spaces[o].primaries!==this.spaces[c].primaries&&(a.applyMatrix3(this.spaces[o].toXYZ),a.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===Pe&&(a.r=Ss(a.r),a.g=Ss(a.g),a.b=Ss(a.b))),a},fromWorkingColorSpace:function(a,o){return this.convert(a,this.workingColorSpace,o)},toWorkingColorSpace:function(a,o){return this.convert(a,o,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===lr?Ho:this.spaces[a].transfer},getLuminanceCoefficients:function(a,o=this.workingColorSpace){return a.fromArray(this.spaces[o].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,o,c){return a.copy(this.spaces[o].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],r=[.3127,.329];return i.define({[Cs]:{primaries:t,whitePoint:r,transfer:Ho,toXYZ:Ed,fromXYZ:Td,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Qn},outputColorSpaceConfig:{drawingBufferColorSpace:Qn}},[Qn]:{primaries:t,whitePoint:r,transfer:Pe,toXYZ:Ed,fromXYZ:Td,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Qn}}}),i}const Se=TS();function Vi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ss(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let is;class bS{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{is===void 0&&(is=Vo("canvas")),is.width=t.width,is.height=t.height;const r=is.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),e=is}return e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Vo("canvas");e.width=t.width,e.height=t.height;const r=e.getContext("2d");r.drawImage(t,0,0,t.width,t.height);const a=r.getImageData(0,0,t.width,t.height),o=a.data;for(let c=0;c<o.length;c++)o[c]=Vi(o[c]/255)*255;return r.putImageData(a,0,0),e}else if(t.data){const e=t.data.slice(0);for(let r=0;r<e.length;r++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[r]=Math.floor(Vi(e[r]/255)*255):e[r]=Vi(e[r]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let AS=0;class Wu{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:AS++}),this.uuid=Is(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const r={uuid:this.uuid,url:""},a=this.data;if(a!==null){let o;if(Array.isArray(a)){o=[];for(let c=0,u=a.length;c<u;c++)a[c].isDataTexture?o.push(dc(a[c].image)):o.push(dc(a[c]))}else o=dc(a);r.url=o}return e||(t.images[this.uuid]=r),r}}function dc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?bS.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let wS=0;class un extends Br{constructor(t=un.DEFAULT_IMAGE,e=un.DEFAULT_MAPPING,r=Lr,a=Lr,o=gi,c=Ir,u=hi,f=Gi,d=un.DEFAULT_ANISOTROPY,p=lr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:wS++}),this.uuid=Is(),this.name="",this.source=new Wu(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=r,this.wrapT=a,this.magFilter=o,this.minFilter=c,this.anisotropy=d,this.format=u,this.internalFormat=null,this.type=f,this.offset=new $t(0,0),this.repeat=new $t(1,1),this.center=new $t(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ie,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=p,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),e||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Pp)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case nu:t.x=t.x-Math.floor(t.x);break;case Lr:t.x=t.x<0?0:1;break;case iu:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case nu:t.y=t.y-Math.floor(t.y);break;case Lr:t.y=t.y<0?0:1;break;case iu:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}un.DEFAULT_IMAGE=null;un.DEFAULT_MAPPING=Pp;un.DEFAULT_ANISOTROPY=1;class Xe{constructor(t=0,e=0,r=0,a=1){Xe.prototype.isVector4=!0,this.x=t,this.y=e,this.z=r,this.w=a}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,r,a){return this.x=t,this.y=e,this.z=r,this.w=a,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,r=this.y,a=this.z,o=this.w,c=t.elements;return this.x=c[0]*e+c[4]*r+c[8]*a+c[12]*o,this.y=c[1]*e+c[5]*r+c[9]*a+c[13]*o,this.z=c[2]*e+c[6]*r+c[10]*a+c[14]*o,this.w=c[3]*e+c[7]*r+c[11]*a+c[15]*o,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,r,a,o;const f=t.elements,d=f[0],p=f[4],_=f[8],g=f[1],x=f[5],E=f[9],A=f[2],v=f[6],m=f[10];if(Math.abs(p-g)<.01&&Math.abs(_-A)<.01&&Math.abs(E-v)<.01){if(Math.abs(p+g)<.1&&Math.abs(_+A)<.1&&Math.abs(E+v)<.1&&Math.abs(d+x+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const L=(d+1)/2,P=(x+1)/2,W=(m+1)/2,B=(p+g)/4,F=(_+A)/4,q=(E+v)/4;return L>P&&L>W?L<.01?(r=0,a=.707106781,o=.707106781):(r=Math.sqrt(L),a=B/r,o=F/r):P>W?P<.01?(r=.707106781,a=0,o=.707106781):(a=Math.sqrt(P),r=B/a,o=q/a):W<.01?(r=.707106781,a=.707106781,o=0):(o=Math.sqrt(W),r=F/o,a=q/o),this.set(r,a,o,e),this}let N=Math.sqrt((v-E)*(v-E)+(_-A)*(_-A)+(g-p)*(g-p));return Math.abs(N)<.001&&(N=1),this.x=(v-E)/N,this.y=(_-A)/N,this.z=(g-p)/N,this.w=Math.acos((d+x+m-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ce(this.x,t.x,e.x),this.y=ce(this.y,t.y,e.y),this.z=ce(this.z,t.z,e.z),this.w=ce(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ce(this.x,t,e),this.y=ce(this.y,t,e),this.z=ce(this.z,t,e),this.w=ce(this.w,t,e),this}clampLength(t,e){const r=this.length();return this.divideScalar(r||1).multiplyScalar(ce(r,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,r){return this.x=t.x+(e.x-t.x)*r,this.y=t.y+(e.y-t.y)*r,this.z=t.z+(e.z-t.z)*r,this.w=t.w+(e.w-t.w)*r,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class RS extends Br{constructor(t=1,e=1,r={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Xe(0,0,t,e),this.scissorTest=!1,this.viewport=new Xe(0,0,t,e);const a={width:t,height:e,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:gi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const o=new un(a,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);o.flipY=!1,o.generateMipmaps=r.generateMipmaps,o.internalFormat=r.internalFormat,this.textures=[];const c=r.count;for(let u=0;u<c;u++)this.textures[u]=o.clone(),this.textures[u].isRenderTargetTexture=!0,this.textures[u].renderTarget=this;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,r=1){if(this.width!==t||this.height!==e||this.depth!==r){this.width=t,this.height=e,this.depth=r;for(let a=0,o=this.textures.length;a<o;a++)this.textures[a].image.width=t,this.textures[a].image.height=e,this.textures[a].image.depth=r;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,r=t.textures.length;e<r;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const a=Object.assign({},t.textures[e].image);this.textures[e].source=new Wu(a)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Nr extends RS{constructor(t=1,e=1,r={}){super(t,e,r),this.isWebGLRenderTarget=!0}}class Wp extends un{constructor(t=null,e=1,r=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:r,depth:a},this.magFilter=fi,this.minFilter=fi,this.wrapR=Lr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class CS extends un{constructor(t=null,e=1,r=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:r,depth:a},this.magFilter=fi,this.minFilter=fi,this.wrapR=Lr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Fr{constructor(t=0,e=0,r=0,a=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=r,this._w=a}static slerpFlat(t,e,r,a,o,c,u){let f=r[a+0],d=r[a+1],p=r[a+2],_=r[a+3];const g=o[c+0],x=o[c+1],E=o[c+2],A=o[c+3];if(u===0){t[e+0]=f,t[e+1]=d,t[e+2]=p,t[e+3]=_;return}if(u===1){t[e+0]=g,t[e+1]=x,t[e+2]=E,t[e+3]=A;return}if(_!==A||f!==g||d!==x||p!==E){let v=1-u;const m=f*g+d*x+p*E+_*A,N=m>=0?1:-1,L=1-m*m;if(L>Number.EPSILON){const W=Math.sqrt(L),B=Math.atan2(W,m*N);v=Math.sin(v*B)/W,u=Math.sin(u*B)/W}const P=u*N;if(f=f*v+g*P,d=d*v+x*P,p=p*v+E*P,_=_*v+A*P,v===1-u){const W=1/Math.sqrt(f*f+d*d+p*p+_*_);f*=W,d*=W,p*=W,_*=W}}t[e]=f,t[e+1]=d,t[e+2]=p,t[e+3]=_}static multiplyQuaternionsFlat(t,e,r,a,o,c){const u=r[a],f=r[a+1],d=r[a+2],p=r[a+3],_=o[c],g=o[c+1],x=o[c+2],E=o[c+3];return t[e]=u*E+p*_+f*x-d*g,t[e+1]=f*E+p*g+d*_-u*x,t[e+2]=d*E+p*x+u*g-f*_,t[e+3]=p*E-u*_-f*g-d*x,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,r,a){return this._x=t,this._y=e,this._z=r,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const r=t._x,a=t._y,o=t._z,c=t._order,u=Math.cos,f=Math.sin,d=u(r/2),p=u(a/2),_=u(o/2),g=f(r/2),x=f(a/2),E=f(o/2);switch(c){case"XYZ":this._x=g*p*_+d*x*E,this._y=d*x*_-g*p*E,this._z=d*p*E+g*x*_,this._w=d*p*_-g*x*E;break;case"YXZ":this._x=g*p*_+d*x*E,this._y=d*x*_-g*p*E,this._z=d*p*E-g*x*_,this._w=d*p*_+g*x*E;break;case"ZXY":this._x=g*p*_-d*x*E,this._y=d*x*_+g*p*E,this._z=d*p*E+g*x*_,this._w=d*p*_-g*x*E;break;case"ZYX":this._x=g*p*_-d*x*E,this._y=d*x*_+g*p*E,this._z=d*p*E-g*x*_,this._w=d*p*_+g*x*E;break;case"YZX":this._x=g*p*_+d*x*E,this._y=d*x*_+g*p*E,this._z=d*p*E-g*x*_,this._w=d*p*_-g*x*E;break;case"XZY":this._x=g*p*_-d*x*E,this._y=d*x*_-g*p*E,this._z=d*p*E+g*x*_,this._w=d*p*_+g*x*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+c)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const r=e/2,a=Math.sin(r);return this._x=t.x*a,this._y=t.y*a,this._z=t.z*a,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,r=e[0],a=e[4],o=e[8],c=e[1],u=e[5],f=e[9],d=e[2],p=e[6],_=e[10],g=r+u+_;if(g>0){const x=.5/Math.sqrt(g+1);this._w=.25/x,this._x=(p-f)*x,this._y=(o-d)*x,this._z=(c-a)*x}else if(r>u&&r>_){const x=2*Math.sqrt(1+r-u-_);this._w=(p-f)/x,this._x=.25*x,this._y=(a+c)/x,this._z=(o+d)/x}else if(u>_){const x=2*Math.sqrt(1+u-r-_);this._w=(o-d)/x,this._x=(a+c)/x,this._y=.25*x,this._z=(f+p)/x}else{const x=2*Math.sqrt(1+_-r-u);this._w=(c-a)/x,this._x=(o+d)/x,this._y=(f+p)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let r=t.dot(e)+1;return r<Number.EPSILON?(r=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=r):(this._x=0,this._y=-t.z,this._z=t.y,this._w=r)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=r),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ce(this.dot(t),-1,1)))}rotateTowards(t,e){const r=this.angleTo(t);if(r===0)return this;const a=Math.min(1,e/r);return this.slerp(t,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const r=t._x,a=t._y,o=t._z,c=t._w,u=e._x,f=e._y,d=e._z,p=e._w;return this._x=r*p+c*u+a*d-o*f,this._y=a*p+c*f+o*u-r*d,this._z=o*p+c*d+r*f-a*u,this._w=c*p-r*u-a*f-o*d,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const r=this._x,a=this._y,o=this._z,c=this._w;let u=c*t._w+r*t._x+a*t._y+o*t._z;if(u<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,u=-u):this.copy(t),u>=1)return this._w=c,this._x=r,this._y=a,this._z=o,this;const f=1-u*u;if(f<=Number.EPSILON){const x=1-e;return this._w=x*c+e*this._w,this._x=x*r+e*this._x,this._y=x*a+e*this._y,this._z=x*o+e*this._z,this.normalize(),this}const d=Math.sqrt(f),p=Math.atan2(d,u),_=Math.sin((1-e)*p)/d,g=Math.sin(e*p)/d;return this._w=c*_+this._w*g,this._x=r*_+this._x*g,this._y=a*_+this._y*g,this._z=o*_+this._z*g,this._onChangeCallback(),this}slerpQuaternions(t,e,r){return this.copy(t).slerp(e,r)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),r=Math.random(),a=Math.sqrt(1-r),o=Math.sqrt(r);return this.set(a*Math.sin(t),a*Math.cos(t),o*Math.sin(e),o*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class X{constructor(t=0,e=0,r=0){X.prototype.isVector3=!0,this.x=t,this.y=e,this.z=r}set(t,e,r){return r===void 0&&(r=this.z),this.x=t,this.y=e,this.z=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(bd.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(bd.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,r=this.y,a=this.z,o=t.elements;return this.x=o[0]*e+o[3]*r+o[6]*a,this.y=o[1]*e+o[4]*r+o[7]*a,this.z=o[2]*e+o[5]*r+o[8]*a,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,r=this.y,a=this.z,o=t.elements,c=1/(o[3]*e+o[7]*r+o[11]*a+o[15]);return this.x=(o[0]*e+o[4]*r+o[8]*a+o[12])*c,this.y=(o[1]*e+o[5]*r+o[9]*a+o[13])*c,this.z=(o[2]*e+o[6]*r+o[10]*a+o[14])*c,this}applyQuaternion(t){const e=this.x,r=this.y,a=this.z,o=t.x,c=t.y,u=t.z,f=t.w,d=2*(c*a-u*r),p=2*(u*e-o*a),_=2*(o*r-c*e);return this.x=e+f*d+c*_-u*p,this.y=r+f*p+u*d-o*_,this.z=a+f*_+o*p-c*d,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,r=this.y,a=this.z,o=t.elements;return this.x=o[0]*e+o[4]*r+o[8]*a,this.y=o[1]*e+o[5]*r+o[9]*a,this.z=o[2]*e+o[6]*r+o[10]*a,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ce(this.x,t.x,e.x),this.y=ce(this.y,t.y,e.y),this.z=ce(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ce(this.x,t,e),this.y=ce(this.y,t,e),this.z=ce(this.z,t,e),this}clampLength(t,e){const r=this.length();return this.divideScalar(r||1).multiplyScalar(ce(r,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,r){return this.x=t.x+(e.x-t.x)*r,this.y=t.y+(e.y-t.y)*r,this.z=t.z+(e.z-t.z)*r,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const r=t.x,a=t.y,o=t.z,c=e.x,u=e.y,f=e.z;return this.x=a*f-o*u,this.y=o*c-r*f,this.z=r*u-a*c,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const r=t.dot(this)/e;return this.copy(t).multiplyScalar(r)}projectOnPlane(t){return pc.copy(this).projectOnVector(t),this.sub(pc)}reflect(t){return this.sub(pc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const r=this.dot(t)/e;return Math.acos(ce(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,r=this.y-t.y,a=this.z-t.z;return e*e+r*r+a*a}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,r){const a=Math.sin(e)*t;return this.x=a*Math.sin(r),this.y=Math.cos(e)*t,this.z=a*Math.cos(r),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,r){return this.x=t*Math.sin(e),this.y=r,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),r=this.setFromMatrixColumn(t,1).length(),a=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=r,this.z=a,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,r=Math.sqrt(1-e*e);return this.x=r*Math.cos(t),this.y=e,this.z=r*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const pc=new X,bd=new Fr;class ha{constructor(t=new X(1/0,1/0,1/0),e=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,r=t.length;e<r;e+=3)this.expandByPoint(oi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,r=t.count;e<r;e++)this.expandByPoint(oi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,r=t.length;e<r;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const r=oi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(r),this.max.copy(t).add(r),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const r=t.geometry;if(r!==void 0){const o=r.getAttribute("position");if(e===!0&&o!==void 0&&t.isInstancedMesh!==!0)for(let c=0,u=o.count;c<u;c++)t.isMesh===!0?t.getVertexPosition(c,oi):oi.fromBufferAttribute(o,c),oi.applyMatrix4(t.matrixWorld),this.expandByPoint(oi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),lo.copy(t.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),lo.copy(r.boundingBox)),lo.applyMatrix4(t.matrixWorld),this.union(lo)}const a=t.children;for(let o=0,c=a.length;o<c;o++)this.expandByObject(a[o],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,oi),oi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,r;return t.normal.x>0?(e=t.normal.x*this.min.x,r=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,r=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,r+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,r+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,r+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,r+=t.normal.z*this.min.z),e<=-t.constant&&r>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Js),co.subVectors(this.max,Js),rs.subVectors(t.a,Js),ss.subVectors(t.b,Js),as.subVectors(t.c,Js),er.subVectors(ss,rs),nr.subVectors(as,ss),Sr.subVectors(rs,as);let e=[0,-er.z,er.y,0,-nr.z,nr.y,0,-Sr.z,Sr.y,er.z,0,-er.x,nr.z,0,-nr.x,Sr.z,0,-Sr.x,-er.y,er.x,0,-nr.y,nr.x,0,-Sr.y,Sr.x,0];return!mc(e,rs,ss,as,co)||(e=[1,0,0,0,1,0,0,0,1],!mc(e,rs,ss,as,co))?!1:(uo.crossVectors(er,nr),e=[uo.x,uo.y,uo.z],mc(e,rs,ss,as,co))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,oi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(oi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Li[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Li[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Li[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Li[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Li[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Li[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Li[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Li[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Li),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Li=[new X,new X,new X,new X,new X,new X,new X,new X],oi=new X,lo=new ha,rs=new X,ss=new X,as=new X,er=new X,nr=new X,Sr=new X,Js=new X,co=new X,uo=new X,Er=new X;function mc(i,t,e,r,a){for(let o=0,c=i.length-3;o<=c;o+=3){Er.fromArray(i,o);const u=a.x*Math.abs(Er.x)+a.y*Math.abs(Er.y)+a.z*Math.abs(Er.z),f=t.dot(Er),d=e.dot(Er),p=r.dot(Er);if(Math.max(-Math.max(f,d,p),Math.min(f,d,p))>u)return!1}return!0}const PS=new ha,Qs=new X,_c=new X;class fa{constructor(t=new X,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const r=this.center;e!==void 0?r.copy(e):PS.setFromPoints(t).getCenter(r);let a=0;for(let o=0,c=t.length;o<c;o++)a=Math.max(a,r.distanceToSquared(t[o]));return this.radius=Math.sqrt(a),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const r=this.center.distanceToSquared(t);return e.copy(t),r>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Qs.subVectors(t,this.center);const e=Qs.lengthSq();if(e>this.radius*this.radius){const r=Math.sqrt(e),a=(r-this.radius)*.5;this.center.addScaledVector(Qs,a/r),this.radius+=a}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(_c.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Qs.copy(t.center).add(_c)),this.expandByPoint(Qs.copy(t.center).sub(_c))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ii=new X,gc=new X,ho=new X,ir=new X,vc=new X,fo=new X,xc=new X;class Ko{constructor(t=new X,e=new X(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ii)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const r=e.dot(this.direction);return r<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Ii.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ii.copy(this.origin).addScaledVector(this.direction,e),Ii.distanceToSquared(t))}distanceSqToSegment(t,e,r,a){gc.copy(t).add(e).multiplyScalar(.5),ho.copy(e).sub(t).normalize(),ir.copy(this.origin).sub(gc);const o=t.distanceTo(e)*.5,c=-this.direction.dot(ho),u=ir.dot(this.direction),f=-ir.dot(ho),d=ir.lengthSq(),p=Math.abs(1-c*c);let _,g,x,E;if(p>0)if(_=c*f-u,g=c*u-f,E=o*p,_>=0)if(g>=-E)if(g<=E){const A=1/p;_*=A,g*=A,x=_*(_+c*g+2*u)+g*(c*_+g+2*f)+d}else g=o,_=Math.max(0,-(c*g+u)),x=-_*_+g*(g+2*f)+d;else g=-o,_=Math.max(0,-(c*g+u)),x=-_*_+g*(g+2*f)+d;else g<=-E?(_=Math.max(0,-(-c*o+u)),g=_>0?-o:Math.min(Math.max(-o,-f),o),x=-_*_+g*(g+2*f)+d):g<=E?(_=0,g=Math.min(Math.max(-o,-f),o),x=g*(g+2*f)+d):(_=Math.max(0,-(c*o+u)),g=_>0?o:Math.min(Math.max(-o,-f),o),x=-_*_+g*(g+2*f)+d);else g=c>0?-o:o,_=Math.max(0,-(c*g+u)),x=-_*_+g*(g+2*f)+d;return r&&r.copy(this.origin).addScaledVector(this.direction,_),a&&a.copy(gc).addScaledVector(ho,g),x}intersectSphere(t,e){Ii.subVectors(t.center,this.origin);const r=Ii.dot(this.direction),a=Ii.dot(Ii)-r*r,o=t.radius*t.radius;if(a>o)return null;const c=Math.sqrt(o-a),u=r-c,f=r+c;return f<0?null:u<0?this.at(f,e):this.at(u,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(t.normal)+t.constant)/e;return r>=0?r:null}intersectPlane(t,e){const r=this.distanceToPlane(t);return r===null?null:this.at(r,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let r,a,o,c,u,f;const d=1/this.direction.x,p=1/this.direction.y,_=1/this.direction.z,g=this.origin;return d>=0?(r=(t.min.x-g.x)*d,a=(t.max.x-g.x)*d):(r=(t.max.x-g.x)*d,a=(t.min.x-g.x)*d),p>=0?(o=(t.min.y-g.y)*p,c=(t.max.y-g.y)*p):(o=(t.max.y-g.y)*p,c=(t.min.y-g.y)*p),r>c||o>a||((o>r||isNaN(r))&&(r=o),(c<a||isNaN(a))&&(a=c),_>=0?(u=(t.min.z-g.z)*_,f=(t.max.z-g.z)*_):(u=(t.max.z-g.z)*_,f=(t.min.z-g.z)*_),r>f||u>a)||((u>r||r!==r)&&(r=u),(f<a||a!==a)&&(a=f),a<0)?null:this.at(r>=0?r:a,e)}intersectsBox(t){return this.intersectBox(t,Ii)!==null}intersectTriangle(t,e,r,a,o){vc.subVectors(e,t),fo.subVectors(r,t),xc.crossVectors(vc,fo);let c=this.direction.dot(xc),u;if(c>0){if(a)return null;u=1}else if(c<0)u=-1,c=-c;else return null;ir.subVectors(this.origin,t);const f=u*this.direction.dot(fo.crossVectors(ir,fo));if(f<0)return null;const d=u*this.direction.dot(vc.cross(ir));if(d<0||f+d>c)return null;const p=-u*ir.dot(xc);return p<0?null:this.at(p/c,o)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ge{constructor(t,e,r,a,o,c,u,f,d,p,_,g,x,E,A,v){Ge.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,r,a,o,c,u,f,d,p,_,g,x,E,A,v)}set(t,e,r,a,o,c,u,f,d,p,_,g,x,E,A,v){const m=this.elements;return m[0]=t,m[4]=e,m[8]=r,m[12]=a,m[1]=o,m[5]=c,m[9]=u,m[13]=f,m[2]=d,m[6]=p,m[10]=_,m[14]=g,m[3]=x,m[7]=E,m[11]=A,m[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ge().fromArray(this.elements)}copy(t){const e=this.elements,r=t.elements;return e[0]=r[0],e[1]=r[1],e[2]=r[2],e[3]=r[3],e[4]=r[4],e[5]=r[5],e[6]=r[6],e[7]=r[7],e[8]=r[8],e[9]=r[9],e[10]=r[10],e[11]=r[11],e[12]=r[12],e[13]=r[13],e[14]=r[14],e[15]=r[15],this}copyPosition(t){const e=this.elements,r=t.elements;return e[12]=r[12],e[13]=r[13],e[14]=r[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,r){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(t,e,r){return this.set(t.x,e.x,r.x,0,t.y,e.y,r.y,0,t.z,e.z,r.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,r=t.elements,a=1/os.setFromMatrixColumn(t,0).length(),o=1/os.setFromMatrixColumn(t,1).length(),c=1/os.setFromMatrixColumn(t,2).length();return e[0]=r[0]*a,e[1]=r[1]*a,e[2]=r[2]*a,e[3]=0,e[4]=r[4]*o,e[5]=r[5]*o,e[6]=r[6]*o,e[7]=0,e[8]=r[8]*c,e[9]=r[9]*c,e[10]=r[10]*c,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,r=t.x,a=t.y,o=t.z,c=Math.cos(r),u=Math.sin(r),f=Math.cos(a),d=Math.sin(a),p=Math.cos(o),_=Math.sin(o);if(t.order==="XYZ"){const g=c*p,x=c*_,E=u*p,A=u*_;e[0]=f*p,e[4]=-f*_,e[8]=d,e[1]=x+E*d,e[5]=g-A*d,e[9]=-u*f,e[2]=A-g*d,e[6]=E+x*d,e[10]=c*f}else if(t.order==="YXZ"){const g=f*p,x=f*_,E=d*p,A=d*_;e[0]=g+A*u,e[4]=E*u-x,e[8]=c*d,e[1]=c*_,e[5]=c*p,e[9]=-u,e[2]=x*u-E,e[6]=A+g*u,e[10]=c*f}else if(t.order==="ZXY"){const g=f*p,x=f*_,E=d*p,A=d*_;e[0]=g-A*u,e[4]=-c*_,e[8]=E+x*u,e[1]=x+E*u,e[5]=c*p,e[9]=A-g*u,e[2]=-c*d,e[6]=u,e[10]=c*f}else if(t.order==="ZYX"){const g=c*p,x=c*_,E=u*p,A=u*_;e[0]=f*p,e[4]=E*d-x,e[8]=g*d+A,e[1]=f*_,e[5]=A*d+g,e[9]=x*d-E,e[2]=-d,e[6]=u*f,e[10]=c*f}else if(t.order==="YZX"){const g=c*f,x=c*d,E=u*f,A=u*d;e[0]=f*p,e[4]=A-g*_,e[8]=E*_+x,e[1]=_,e[5]=c*p,e[9]=-u*p,e[2]=-d*p,e[6]=x*_+E,e[10]=g-A*_}else if(t.order==="XZY"){const g=c*f,x=c*d,E=u*f,A=u*d;e[0]=f*p,e[4]=-_,e[8]=d*p,e[1]=g*_+A,e[5]=c*p,e[9]=x*_-E,e[2]=E*_-x,e[6]=u*p,e[10]=A*_+g}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(DS,t,LS)}lookAt(t,e,r){const a=this.elements;return Hn.subVectors(t,e),Hn.lengthSq()===0&&(Hn.z=1),Hn.normalize(),rr.crossVectors(r,Hn),rr.lengthSq()===0&&(Math.abs(r.z)===1?Hn.x+=1e-4:Hn.z+=1e-4,Hn.normalize(),rr.crossVectors(r,Hn)),rr.normalize(),po.crossVectors(Hn,rr),a[0]=rr.x,a[4]=po.x,a[8]=Hn.x,a[1]=rr.y,a[5]=po.y,a[9]=Hn.y,a[2]=rr.z,a[6]=po.z,a[10]=Hn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const r=t.elements,a=e.elements,o=this.elements,c=r[0],u=r[4],f=r[8],d=r[12],p=r[1],_=r[5],g=r[9],x=r[13],E=r[2],A=r[6],v=r[10],m=r[14],N=r[3],L=r[7],P=r[11],W=r[15],B=a[0],F=a[4],q=a[8],C=a[12],w=a[1],O=a[5],rt=a[9],Q=a[13],ct=a[2],dt=a[6],at=a[10],ut=a[14],J=a[3],St=a[7],At=a[11],It=a[15];return o[0]=c*B+u*w+f*ct+d*J,o[4]=c*F+u*O+f*dt+d*St,o[8]=c*q+u*rt+f*at+d*At,o[12]=c*C+u*Q+f*ut+d*It,o[1]=p*B+_*w+g*ct+x*J,o[5]=p*F+_*O+g*dt+x*St,o[9]=p*q+_*rt+g*at+x*At,o[13]=p*C+_*Q+g*ut+x*It,o[2]=E*B+A*w+v*ct+m*J,o[6]=E*F+A*O+v*dt+m*St,o[10]=E*q+A*rt+v*at+m*At,o[14]=E*C+A*Q+v*ut+m*It,o[3]=N*B+L*w+P*ct+W*J,o[7]=N*F+L*O+P*dt+W*St,o[11]=N*q+L*rt+P*at+W*At,o[15]=N*C+L*Q+P*ut+W*It,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],r=t[4],a=t[8],o=t[12],c=t[1],u=t[5],f=t[9],d=t[13],p=t[2],_=t[6],g=t[10],x=t[14],E=t[3],A=t[7],v=t[11],m=t[15];return E*(+o*f*_-a*d*_-o*u*g+r*d*g+a*u*x-r*f*x)+A*(+e*f*x-e*d*g+o*c*g-a*c*x+a*d*p-o*f*p)+v*(+e*d*_-e*u*x-o*c*_+r*c*x+o*u*p-r*d*p)+m*(-a*u*p-e*f*_+e*u*g+a*c*_-r*c*g+r*f*p)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,r){const a=this.elements;return t.isVector3?(a[12]=t.x,a[13]=t.y,a[14]=t.z):(a[12]=t,a[13]=e,a[14]=r),this}invert(){const t=this.elements,e=t[0],r=t[1],a=t[2],o=t[3],c=t[4],u=t[5],f=t[6],d=t[7],p=t[8],_=t[9],g=t[10],x=t[11],E=t[12],A=t[13],v=t[14],m=t[15],N=_*v*d-A*g*d+A*f*x-u*v*x-_*f*m+u*g*m,L=E*g*d-p*v*d-E*f*x+c*v*x+p*f*m-c*g*m,P=p*A*d-E*_*d+E*u*x-c*A*x-p*u*m+c*_*m,W=E*_*f-p*A*f-E*u*g+c*A*g+p*u*v-c*_*v,B=e*N+r*L+a*P+o*W;if(B===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/B;return t[0]=N*F,t[1]=(A*g*o-_*v*o-A*a*x+r*v*x+_*a*m-r*g*m)*F,t[2]=(u*v*o-A*f*o+A*a*d-r*v*d-u*a*m+r*f*m)*F,t[3]=(_*f*o-u*g*o-_*a*d+r*g*d+u*a*x-r*f*x)*F,t[4]=L*F,t[5]=(p*v*o-E*g*o+E*a*x-e*v*x-p*a*m+e*g*m)*F,t[6]=(E*f*o-c*v*o-E*a*d+e*v*d+c*a*m-e*f*m)*F,t[7]=(c*g*o-p*f*o+p*a*d-e*g*d-c*a*x+e*f*x)*F,t[8]=P*F,t[9]=(E*_*o-p*A*o-E*r*x+e*A*x+p*r*m-e*_*m)*F,t[10]=(c*A*o-E*u*o+E*r*d-e*A*d-c*r*m+e*u*m)*F,t[11]=(p*u*o-c*_*o-p*r*d+e*_*d+c*r*x-e*u*x)*F,t[12]=W*F,t[13]=(p*A*a-E*_*a+E*r*g-e*A*g-p*r*v+e*_*v)*F,t[14]=(E*u*a-c*A*a-E*r*f+e*A*f+c*r*v-e*u*v)*F,t[15]=(c*_*a-p*u*a+p*r*f-e*_*f-c*r*g+e*u*g)*F,this}scale(t){const e=this.elements,r=t.x,a=t.y,o=t.z;return e[0]*=r,e[4]*=a,e[8]*=o,e[1]*=r,e[5]*=a,e[9]*=o,e[2]*=r,e[6]*=a,e[10]*=o,e[3]*=r,e[7]*=a,e[11]*=o,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],r=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],a=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,r,a))}makeTranslation(t,e,r){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,r,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),r=Math.sin(t);return this.set(1,0,0,0,0,e,-r,0,0,r,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),r=Math.sin(t);return this.set(e,0,r,0,0,1,0,0,-r,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),r=Math.sin(t);return this.set(e,-r,0,0,r,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const r=Math.cos(e),a=Math.sin(e),o=1-r,c=t.x,u=t.y,f=t.z,d=o*c,p=o*u;return this.set(d*c+r,d*u-a*f,d*f+a*u,0,d*u+a*f,p*u+r,p*f-a*c,0,d*f-a*u,p*f+a*c,o*f*f+r,0,0,0,0,1),this}makeScale(t,e,r){return this.set(t,0,0,0,0,e,0,0,0,0,r,0,0,0,0,1),this}makeShear(t,e,r,a,o,c){return this.set(1,r,o,0,t,1,c,0,e,a,1,0,0,0,0,1),this}compose(t,e,r){const a=this.elements,o=e._x,c=e._y,u=e._z,f=e._w,d=o+o,p=c+c,_=u+u,g=o*d,x=o*p,E=o*_,A=c*p,v=c*_,m=u*_,N=f*d,L=f*p,P=f*_,W=r.x,B=r.y,F=r.z;return a[0]=(1-(A+m))*W,a[1]=(x+P)*W,a[2]=(E-L)*W,a[3]=0,a[4]=(x-P)*B,a[5]=(1-(g+m))*B,a[6]=(v+N)*B,a[7]=0,a[8]=(E+L)*F,a[9]=(v-N)*F,a[10]=(1-(g+A))*F,a[11]=0,a[12]=t.x,a[13]=t.y,a[14]=t.z,a[15]=1,this}decompose(t,e,r){const a=this.elements;let o=os.set(a[0],a[1],a[2]).length();const c=os.set(a[4],a[5],a[6]).length(),u=os.set(a[8],a[9],a[10]).length();this.determinant()<0&&(o=-o),t.x=a[12],t.y=a[13],t.z=a[14],li.copy(this);const d=1/o,p=1/c,_=1/u;return li.elements[0]*=d,li.elements[1]*=d,li.elements[2]*=d,li.elements[4]*=p,li.elements[5]*=p,li.elements[6]*=p,li.elements[8]*=_,li.elements[9]*=_,li.elements[10]*=_,e.setFromRotationMatrix(li),r.x=o,r.y=c,r.z=u,this}makePerspective(t,e,r,a,o,c,u=Hi){const f=this.elements,d=2*o/(e-t),p=2*o/(r-a),_=(e+t)/(e-t),g=(r+a)/(r-a);let x,E;if(u===Hi)x=-(c+o)/(c-o),E=-2*c*o/(c-o);else if(u===ko)x=-c/(c-o),E=-c*o/(c-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+u);return f[0]=d,f[4]=0,f[8]=_,f[12]=0,f[1]=0,f[5]=p,f[9]=g,f[13]=0,f[2]=0,f[6]=0,f[10]=x,f[14]=E,f[3]=0,f[7]=0,f[11]=-1,f[15]=0,this}makeOrthographic(t,e,r,a,o,c,u=Hi){const f=this.elements,d=1/(e-t),p=1/(r-a),_=1/(c-o),g=(e+t)*d,x=(r+a)*p;let E,A;if(u===Hi)E=(c+o)*_,A=-2*_;else if(u===ko)E=o*_,A=-1*_;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+u);return f[0]=2*d,f[4]=0,f[8]=0,f[12]=-g,f[1]=0,f[5]=2*p,f[9]=0,f[13]=-x,f[2]=0,f[6]=0,f[10]=A,f[14]=-E,f[3]=0,f[7]=0,f[11]=0,f[15]=1,this}equals(t){const e=this.elements,r=t.elements;for(let a=0;a<16;a++)if(e[a]!==r[a])return!1;return!0}fromArray(t,e=0){for(let r=0;r<16;r++)this.elements[r]=t[r+e];return this}toArray(t=[],e=0){const r=this.elements;return t[e]=r[0],t[e+1]=r[1],t[e+2]=r[2],t[e+3]=r[3],t[e+4]=r[4],t[e+5]=r[5],t[e+6]=r[6],t[e+7]=r[7],t[e+8]=r[8],t[e+9]=r[9],t[e+10]=r[10],t[e+11]=r[11],t[e+12]=r[12],t[e+13]=r[13],t[e+14]=r[14],t[e+15]=r[15],t}}const os=new X,li=new Ge,DS=new X(0,0,0),LS=new X(1,1,1),rr=new X,po=new X,Hn=new X,Ad=new Ge,wd=new Fr;class ti{constructor(t=0,e=0,r=0,a=ti.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=r,this._order=a}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,r,a=this._order){return this._x=t,this._y=e,this._z=r,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,r=!0){const a=t.elements,o=a[0],c=a[4],u=a[8],f=a[1],d=a[5],p=a[9],_=a[2],g=a[6],x=a[10];switch(e){case"XYZ":this._y=Math.asin(ce(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-p,x),this._z=Math.atan2(-c,o)):(this._x=Math.atan2(g,d),this._z=0);break;case"YXZ":this._x=Math.asin(-ce(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(u,x),this._z=Math.atan2(f,d)):(this._y=Math.atan2(-_,o),this._z=0);break;case"ZXY":this._x=Math.asin(ce(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-_,x),this._z=Math.atan2(-c,d)):(this._y=0,this._z=Math.atan2(f,o));break;case"ZYX":this._y=Math.asin(-ce(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(g,x),this._z=Math.atan2(f,o)):(this._x=0,this._z=Math.atan2(-c,d));break;case"YZX":this._z=Math.asin(ce(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-p,d),this._y=Math.atan2(-_,o)):(this._x=0,this._y=Math.atan2(u,x));break;case"XZY":this._z=Math.asin(-ce(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(g,d),this._y=Math.atan2(u,o)):(this._x=Math.atan2(-p,x),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,r){return Ad.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ad,e,r)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return wd.setFromEuler(this),this.setFromQuaternion(wd,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ti.DEFAULT_ORDER="XYZ";class Xp{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let IS=0;const Rd=new X,ls=new Fr,Ui=new Ge,mo=new X,js=new X,US=new X,NS=new Fr,Cd=new X(1,0,0),Pd=new X(0,1,0),Dd=new X(0,0,1),Ld={type:"added"},FS={type:"removed"},cs={type:"childadded",child:null},Mc={type:"childremoved",child:null};class En extends Br{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:IS++}),this.uuid=Is(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=En.DEFAULT_UP.clone();const t=new X,e=new ti,r=new Fr,a=new X(1,1,1);function o(){r.setFromEuler(e,!1)}function c(){e.setFromQuaternion(r,void 0,!1)}e._onChange(o),r._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Ge},normalMatrix:{value:new ie}}),this.matrix=new Ge,this.matrixWorld=new Ge,this.matrixAutoUpdate=En.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=En.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Xp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ls.setFromAxisAngle(t,e),this.quaternion.multiply(ls),this}rotateOnWorldAxis(t,e){return ls.setFromAxisAngle(t,e),this.quaternion.premultiply(ls),this}rotateX(t){return this.rotateOnAxis(Cd,t)}rotateY(t){return this.rotateOnAxis(Pd,t)}rotateZ(t){return this.rotateOnAxis(Dd,t)}translateOnAxis(t,e){return Rd.copy(t).applyQuaternion(this.quaternion),this.position.add(Rd.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Cd,t)}translateY(t){return this.translateOnAxis(Pd,t)}translateZ(t){return this.translateOnAxis(Dd,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ui.copy(this.matrixWorld).invert())}lookAt(t,e,r){t.isVector3?mo.copy(t):mo.set(t,e,r);const a=this.parent;this.updateWorldMatrix(!0,!1),js.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ui.lookAt(js,mo,this.up):Ui.lookAt(mo,js,this.up),this.quaternion.setFromRotationMatrix(Ui),a&&(Ui.extractRotation(a.matrixWorld),ls.setFromRotationMatrix(Ui),this.quaternion.premultiply(ls.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ld),cs.child=t,this.dispatchEvent(cs),cs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(FS),Mc.child=t,this.dispatchEvent(Mc),Mc.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ui.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ui.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ui),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ld),cs.child=t,this.dispatchEvent(cs),cs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let r=0,a=this.children.length;r<a;r++){const c=this.children[r].getObjectByProperty(t,e);if(c!==void 0)return c}}getObjectsByProperty(t,e,r=[]){this[t]===e&&r.push(this);const a=this.children;for(let o=0,c=a.length;o<c;o++)a[o].getObjectsByProperty(t,e,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(js,t,US),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(js,NS,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let r=0,a=e.length;r<a;r++)e[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let r=0,a=e.length;r<a;r++)e[r].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let r=0,a=e.length;r<a;r++)e[r].updateMatrixWorld(t)}updateWorldMatrix(t,e){const r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const a=this.children;for(let o=0,c=a.length;o<c;o++)a[o].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",r={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.visibility=this._visibility,a.active=this._active,a.bounds=this._bounds.map(u=>({boxInitialized:u.boxInitialized,boxMin:u.box.min.toArray(),boxMax:u.box.max.toArray(),sphereInitialized:u.sphereInitialized,sphereRadius:u.sphere.radius,sphereCenter:u.sphere.center.toArray()})),a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.geometryCount=this._geometryCount,a.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(a.boundingSphere={center:a.boundingSphere.center.toArray(),radius:a.boundingSphere.radius}),this.boundingBox!==null&&(a.boundingBox={min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}));function o(u,f){return u[f.uuid]===void 0&&(u[f.uuid]=f.toJSON(t)),f.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=o(t.geometries,this.geometry);const u=this.geometry.parameters;if(u!==void 0&&u.shapes!==void 0){const f=u.shapes;if(Array.isArray(f))for(let d=0,p=f.length;d<p;d++){const _=f[d];o(t.shapes,_)}else o(t.shapes,f)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const u=[];for(let f=0,d=this.material.length;f<d;f++)u.push(o(t.materials,this.material[f]));a.material=u}else a.material=o(t.materials,this.material);if(this.children.length>0){a.children=[];for(let u=0;u<this.children.length;u++)a.children.push(this.children[u].toJSON(t).object)}if(this.animations.length>0){a.animations=[];for(let u=0;u<this.animations.length;u++){const f=this.animations[u];a.animations.push(o(t.animations,f))}}if(e){const u=c(t.geometries),f=c(t.materials),d=c(t.textures),p=c(t.images),_=c(t.shapes),g=c(t.skeletons),x=c(t.animations),E=c(t.nodes);u.length>0&&(r.geometries=u),f.length>0&&(r.materials=f),d.length>0&&(r.textures=d),p.length>0&&(r.images=p),_.length>0&&(r.shapes=_),g.length>0&&(r.skeletons=g),x.length>0&&(r.animations=x),E.length>0&&(r.nodes=E)}return r.object=a,r;function c(u){const f=[];for(const d in u){const p=u[d];delete p.metadata,f.push(p)}return f}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let r=0;r<t.children.length;r++){const a=t.children[r];this.add(a.clone())}return this}}En.DEFAULT_UP=new X(0,1,0);En.DEFAULT_MATRIX_AUTO_UPDATE=!0;En.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ci=new X,Ni=new X,yc=new X,Fi=new X,us=new X,hs=new X,Id=new X,Sc=new X,Ec=new X,Tc=new X,bc=new Xe,Ac=new Xe,wc=new Xe;class ui{constructor(t=new X,e=new X,r=new X){this.a=t,this.b=e,this.c=r}static getNormal(t,e,r,a){a.subVectors(r,e),ci.subVectors(t,e),a.cross(ci);const o=a.lengthSq();return o>0?a.multiplyScalar(1/Math.sqrt(o)):a.set(0,0,0)}static getBarycoord(t,e,r,a,o){ci.subVectors(a,e),Ni.subVectors(r,e),yc.subVectors(t,e);const c=ci.dot(ci),u=ci.dot(Ni),f=ci.dot(yc),d=Ni.dot(Ni),p=Ni.dot(yc),_=c*d-u*u;if(_===0)return o.set(0,0,0),null;const g=1/_,x=(d*f-u*p)*g,E=(c*p-u*f)*g;return o.set(1-x-E,E,x)}static containsPoint(t,e,r,a){return this.getBarycoord(t,e,r,a,Fi)===null?!1:Fi.x>=0&&Fi.y>=0&&Fi.x+Fi.y<=1}static getInterpolation(t,e,r,a,o,c,u,f){return this.getBarycoord(t,e,r,a,Fi)===null?(f.x=0,f.y=0,"z"in f&&(f.z=0),"w"in f&&(f.w=0),null):(f.setScalar(0),f.addScaledVector(o,Fi.x),f.addScaledVector(c,Fi.y),f.addScaledVector(u,Fi.z),f)}static getInterpolatedAttribute(t,e,r,a,o,c){return bc.setScalar(0),Ac.setScalar(0),wc.setScalar(0),bc.fromBufferAttribute(t,e),Ac.fromBufferAttribute(t,r),wc.fromBufferAttribute(t,a),c.setScalar(0),c.addScaledVector(bc,o.x),c.addScaledVector(Ac,o.y),c.addScaledVector(wc,o.z),c}static isFrontFacing(t,e,r,a){return ci.subVectors(r,e),Ni.subVectors(t,e),ci.cross(Ni).dot(a)<0}set(t,e,r){return this.a.copy(t),this.b.copy(e),this.c.copy(r),this}setFromPointsAndIndices(t,e,r,a){return this.a.copy(t[e]),this.b.copy(t[r]),this.c.copy(t[a]),this}setFromAttributeAndIndices(t,e,r,a){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,r),this.c.fromBufferAttribute(t,a),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ci.subVectors(this.c,this.b),Ni.subVectors(this.a,this.b),ci.cross(Ni).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return ui.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return ui.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,r,a,o){return ui.getInterpolation(t,this.a,this.b,this.c,e,r,a,o)}containsPoint(t){return ui.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return ui.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const r=this.a,a=this.b,o=this.c;let c,u;us.subVectors(a,r),hs.subVectors(o,r),Sc.subVectors(t,r);const f=us.dot(Sc),d=hs.dot(Sc);if(f<=0&&d<=0)return e.copy(r);Ec.subVectors(t,a);const p=us.dot(Ec),_=hs.dot(Ec);if(p>=0&&_<=p)return e.copy(a);const g=f*_-p*d;if(g<=0&&f>=0&&p<=0)return c=f/(f-p),e.copy(r).addScaledVector(us,c);Tc.subVectors(t,o);const x=us.dot(Tc),E=hs.dot(Tc);if(E>=0&&x<=E)return e.copy(o);const A=x*d-f*E;if(A<=0&&d>=0&&E<=0)return u=d/(d-E),e.copy(r).addScaledVector(hs,u);const v=p*E-x*_;if(v<=0&&_-p>=0&&x-E>=0)return Id.subVectors(o,a),u=(_-p)/(_-p+(x-E)),e.copy(a).addScaledVector(Id,u);const m=1/(v+A+g);return c=A*m,u=g*m,e.copy(r).addScaledVector(us,c).addScaledVector(hs,u)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const qp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},sr={h:0,s:0,l:0},_o={h:0,s:0,l:0};function Rc(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Wt{constructor(t,e,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,r)}set(t,e,r){if(e===void 0&&r===void 0){const a=t;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(t,e,r);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Qn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Se.toWorkingColorSpace(this,e),this}setRGB(t,e,r,a=Se.workingColorSpace){return this.r=t,this.g=e,this.b=r,Se.toWorkingColorSpace(this,a),this}setHSL(t,e,r,a=Se.workingColorSpace){if(t=Gu(t,1),e=ce(e,0,1),r=ce(r,0,1),e===0)this.r=this.g=this.b=r;else{const o=r<=.5?r*(1+e):r+e-r*e,c=2*r-o;this.r=Rc(c,o,t+1/3),this.g=Rc(c,o,t),this.b=Rc(c,o,t-1/3)}return Se.toWorkingColorSpace(this,a),this}setStyle(t,e=Qn){function r(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(t)){let o;const c=a[1],u=a[2];switch(c){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return r(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,e);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return r(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,e);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return r(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(t)){const o=a[1],c=o.length;if(c===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,e);if(c===6)return this.setHex(parseInt(o,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Qn){const r=qp[t.toLowerCase()];return r!==void 0?this.setHex(r,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Vi(t.r),this.g=Vi(t.g),this.b=Vi(t.b),this}copyLinearToSRGB(t){return this.r=Ss(t.r),this.g=Ss(t.g),this.b=Ss(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Qn){return Se.fromWorkingColorSpace(_n.copy(this),t),Math.round(ce(_n.r*255,0,255))*65536+Math.round(ce(_n.g*255,0,255))*256+Math.round(ce(_n.b*255,0,255))}getHexString(t=Qn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Se.workingColorSpace){Se.fromWorkingColorSpace(_n.copy(this),e);const r=_n.r,a=_n.g,o=_n.b,c=Math.max(r,a,o),u=Math.min(r,a,o);let f,d;const p=(u+c)/2;if(u===c)f=0,d=0;else{const _=c-u;switch(d=p<=.5?_/(c+u):_/(2-c-u),c){case r:f=(a-o)/_+(a<o?6:0);break;case a:f=(o-r)/_+2;break;case o:f=(r-a)/_+4;break}f/=6}return t.h=f,t.s=d,t.l=p,t}getRGB(t,e=Se.workingColorSpace){return Se.fromWorkingColorSpace(_n.copy(this),e),t.r=_n.r,t.g=_n.g,t.b=_n.b,t}getStyle(t=Qn){Se.fromWorkingColorSpace(_n.copy(this),t);const e=_n.r,r=_n.g,a=_n.b;return t!==Qn?`color(${t} ${e.toFixed(3)} ${r.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(r*255)},${Math.round(a*255)})`}offsetHSL(t,e,r){return this.getHSL(sr),this.setHSL(sr.h+t,sr.s+e,sr.l+r)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,r){return this.r=t.r+(e.r-t.r)*r,this.g=t.g+(e.g-t.g)*r,this.b=t.b+(e.b-t.b)*r,this}lerpHSL(t,e){this.getHSL(sr),t.getHSL(_o);const r=sa(sr.h,_o.h,e),a=sa(sr.s,_o.s,e),o=sa(sr.l,_o.l,e);return this.setHSL(r,a,o),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,r=this.g,a=this.b,o=t.elements;return this.r=o[0]*e+o[3]*r+o[6]*a,this.g=o[1]*e+o[4]*r+o[7]*a,this.b=o[2]*e+o[5]*r+o[8]*a,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const _n=new Wt;Wt.NAMES=qp;let OS=0;class Tn extends Br{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:OS++}),this.uuid=Is(),this.name="",this.type="Material",this.blending=Ms,this.side=hr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Xc,this.blendDst=qc,this.blendEquation=Pr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Wt(0,0,0),this.blendAlpha=0,this.depthFunc=Ts,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=vd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ns,this.stencilZFail=ns,this.stencilZPass=ns,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const r=t[e];if(r===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const a=this[e];if(a===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(r):a&&a.isVector3&&r&&r.isVector3?a.copy(r):this[e]=r}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(t).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(t).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(t).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(t).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(t).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Ms&&(r.blending=this.blending),this.side!==hr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Xc&&(r.blendSrc=this.blendSrc),this.blendDst!==qc&&(r.blendDst=this.blendDst),this.blendEquation!==Pr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Ts&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==vd&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ns&&(r.stencilFail=this.stencilFail),this.stencilZFail!==ns&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==ns&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function a(o){const c=[];for(const u in o){const f=o[u];delete f.metadata,c.push(f)}return c}if(e){const o=a(t.textures),c=a(t.images);o.length>0&&(r.textures=o),c.length>0&&(r.images=c)}return r}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let r=null;if(e!==null){const a=e.length;r=new Array(a);for(let o=0;o!==a;++o)r[o]=e[o].clone()}return this.clippingPlanes=r,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Xu extends Tn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Wt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ti,this.combine=Yo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ze=new X,go=new $t;let BS=0;class xi{constructor(t,e,r=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:BS++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=r,this.usage=xd,this.updateRanges=[],this.gpuType=vi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,r){t*=this.itemSize,r*=e.itemSize;for(let a=0,o=this.itemSize;a<o;a++)this.array[t+a]=e.array[r+a];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,r=this.count;e<r;e++)go.fromBufferAttribute(this,e),go.applyMatrix3(t),this.setXY(e,go.x,go.y);else if(this.itemSize===3)for(let e=0,r=this.count;e<r;e++)Ze.fromBufferAttribute(this,e),Ze.applyMatrix3(t),this.setXYZ(e,Ze.x,Ze.y,Ze.z);return this}applyMatrix4(t){for(let e=0,r=this.count;e<r;e++)Ze.fromBufferAttribute(this,e),Ze.applyMatrix4(t),this.setXYZ(e,Ze.x,Ze.y,Ze.z);return this}applyNormalMatrix(t){for(let e=0,r=this.count;e<r;e++)Ze.fromBufferAttribute(this,e),Ze.applyNormalMatrix(t),this.setXYZ(e,Ze.x,Ze.y,Ze.z);return this}transformDirection(t){for(let e=0,r=this.count;e<r;e++)Ze.fromBufferAttribute(this,e),Ze.transformDirection(t),this.setXYZ(e,Ze.x,Ze.y,Ze.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let r=this.array[t*this.itemSize+e];return this.normalized&&(r=_s(r,this.array)),r}setComponent(t,e,r){return this.normalized&&(r=yn(r,this.array)),this.array[t*this.itemSize+e]=r,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=_s(e,this.array)),e}setX(t,e){return this.normalized&&(e=yn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=_s(e,this.array)),e}setY(t,e){return this.normalized&&(e=yn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=_s(e,this.array)),e}setZ(t,e){return this.normalized&&(e=yn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=_s(e,this.array)),e}setW(t,e){return this.normalized&&(e=yn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,r){return t*=this.itemSize,this.normalized&&(e=yn(e,this.array),r=yn(r,this.array)),this.array[t+0]=e,this.array[t+1]=r,this}setXYZ(t,e,r,a){return t*=this.itemSize,this.normalized&&(e=yn(e,this.array),r=yn(r,this.array),a=yn(a,this.array)),this.array[t+0]=e,this.array[t+1]=r,this.array[t+2]=a,this}setXYZW(t,e,r,a,o){return t*=this.itemSize,this.normalized&&(e=yn(e,this.array),r=yn(r,this.array),a=yn(a,this.array),o=yn(o,this.array)),this.array[t+0]=e,this.array[t+1]=r,this.array[t+2]=a,this.array[t+3]=o,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==xd&&(t.usage=this.usage),t}}class Yp extends xi{constructor(t,e,r){super(new Uint16Array(t),e,r)}}class Zp extends xi{constructor(t,e,r){super(new Uint32Array(t),e,r)}}class Vn extends xi{constructor(t,e,r){super(new Float32Array(t),e,r)}}let zS=0;const Jn=new Ge,Cc=new En,fs=new X,kn=new ha,ta=new ha,ln=new X;class yi extends Br{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:zS++}),this.uuid=Is(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Gp(t)?Zp:Yp)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,r=0){this.groups.push({start:t,count:e,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const o=new ie().getNormalMatrix(t);r.applyNormalMatrix(o),r.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(t),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Jn.makeRotationFromQuaternion(t),this.applyMatrix4(Jn),this}rotateX(t){return Jn.makeRotationX(t),this.applyMatrix4(Jn),this}rotateY(t){return Jn.makeRotationY(t),this.applyMatrix4(Jn),this}rotateZ(t){return Jn.makeRotationZ(t),this.applyMatrix4(Jn),this}translate(t,e,r){return Jn.makeTranslation(t,e,r),this.applyMatrix4(Jn),this}scale(t,e,r){return Jn.makeScale(t,e,r),this.applyMatrix4(Jn),this}lookAt(t){return Cc.lookAt(t),Cc.updateMatrix(),this.applyMatrix4(Cc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(fs).negate(),this.translate(fs.x,fs.y,fs.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const r=[];for(let a=0,o=t.length;a<o;a++){const c=t[a];r.push(c.x,c.y,c.z||0)}this.setAttribute("position",new Vn(r,3))}else{const r=Math.min(t.length,e.count);for(let a=0;a<r;a++){const o=t[a];e.setXYZ(a,o.x,o.y,o.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ha);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];kn.setFromBufferAttribute(o),this.morphTargetsRelative?(ln.addVectors(this.boundingBox.min,kn.min),this.boundingBox.expandByPoint(ln),ln.addVectors(this.boundingBox.max,kn.max),this.boundingBox.expandByPoint(ln)):(this.boundingBox.expandByPoint(kn.min),this.boundingBox.expandByPoint(kn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new fa);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new X,1/0);return}if(t){const r=this.boundingSphere.center;if(kn.setFromBufferAttribute(t),e)for(let o=0,c=e.length;o<c;o++){const u=e[o];ta.setFromBufferAttribute(u),this.morphTargetsRelative?(ln.addVectors(kn.min,ta.min),kn.expandByPoint(ln),ln.addVectors(kn.max,ta.max),kn.expandByPoint(ln)):(kn.expandByPoint(ta.min),kn.expandByPoint(ta.max))}kn.getCenter(r);let a=0;for(let o=0,c=t.count;o<c;o++)ln.fromBufferAttribute(t,o),a=Math.max(a,r.distanceToSquared(ln));if(e)for(let o=0,c=e.length;o<c;o++){const u=e[o],f=this.morphTargetsRelative;for(let d=0,p=u.count;d<p;d++)ln.fromBufferAttribute(u,d),f&&(fs.fromBufferAttribute(t,d),ln.add(fs)),a=Math.max(a,r.distanceToSquared(ln))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=e.position,a=e.normal,o=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new xi(new Float32Array(4*r.count),4));const c=this.getAttribute("tangent"),u=[],f=[];for(let q=0;q<r.count;q++)u[q]=new X,f[q]=new X;const d=new X,p=new X,_=new X,g=new $t,x=new $t,E=new $t,A=new X,v=new X;function m(q,C,w){d.fromBufferAttribute(r,q),p.fromBufferAttribute(r,C),_.fromBufferAttribute(r,w),g.fromBufferAttribute(o,q),x.fromBufferAttribute(o,C),E.fromBufferAttribute(o,w),p.sub(d),_.sub(d),x.sub(g),E.sub(g);const O=1/(x.x*E.y-E.x*x.y);isFinite(O)&&(A.copy(p).multiplyScalar(E.y).addScaledVector(_,-x.y).multiplyScalar(O),v.copy(_).multiplyScalar(x.x).addScaledVector(p,-E.x).multiplyScalar(O),u[q].add(A),u[C].add(A),u[w].add(A),f[q].add(v),f[C].add(v),f[w].add(v))}let N=this.groups;N.length===0&&(N=[{start:0,count:t.count}]);for(let q=0,C=N.length;q<C;++q){const w=N[q],O=w.start,rt=w.count;for(let Q=O,ct=O+rt;Q<ct;Q+=3)m(t.getX(Q+0),t.getX(Q+1),t.getX(Q+2))}const L=new X,P=new X,W=new X,B=new X;function F(q){W.fromBufferAttribute(a,q),B.copy(W);const C=u[q];L.copy(C),L.sub(W.multiplyScalar(W.dot(C))).normalize(),P.crossVectors(B,C);const O=P.dot(f[q])<0?-1:1;c.setXYZW(q,L.x,L.y,L.z,O)}for(let q=0,C=N.length;q<C;++q){const w=N[q],O=w.start,rt=w.count;for(let Q=O,ct=O+rt;Q<ct;Q+=3)F(t.getX(Q+0)),F(t.getX(Q+1)),F(t.getX(Q+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new xi(new Float32Array(e.count*3),3),this.setAttribute("normal",r);else for(let g=0,x=r.count;g<x;g++)r.setXYZ(g,0,0,0);const a=new X,o=new X,c=new X,u=new X,f=new X,d=new X,p=new X,_=new X;if(t)for(let g=0,x=t.count;g<x;g+=3){const E=t.getX(g+0),A=t.getX(g+1),v=t.getX(g+2);a.fromBufferAttribute(e,E),o.fromBufferAttribute(e,A),c.fromBufferAttribute(e,v),p.subVectors(c,o),_.subVectors(a,o),p.cross(_),u.fromBufferAttribute(r,E),f.fromBufferAttribute(r,A),d.fromBufferAttribute(r,v),u.add(p),f.add(p),d.add(p),r.setXYZ(E,u.x,u.y,u.z),r.setXYZ(A,f.x,f.y,f.z),r.setXYZ(v,d.x,d.y,d.z)}else for(let g=0,x=e.count;g<x;g+=3)a.fromBufferAttribute(e,g+0),o.fromBufferAttribute(e,g+1),c.fromBufferAttribute(e,g+2),p.subVectors(c,o),_.subVectors(a,o),p.cross(_),r.setXYZ(g+0,p.x,p.y,p.z),r.setXYZ(g+1,p.x,p.y,p.z),r.setXYZ(g+2,p.x,p.y,p.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,r=t.count;e<r;e++)ln.fromBufferAttribute(t,e),ln.normalize(),t.setXYZ(e,ln.x,ln.y,ln.z)}toNonIndexed(){function t(u,f){const d=u.array,p=u.itemSize,_=u.normalized,g=new d.constructor(f.length*p);let x=0,E=0;for(let A=0,v=f.length;A<v;A++){u.isInterleavedBufferAttribute?x=f[A]*u.data.stride+u.offset:x=f[A]*p;for(let m=0;m<p;m++)g[E++]=d[x++]}return new xi(g,p,_)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new yi,r=this.index.array,a=this.attributes;for(const u in a){const f=a[u],d=t(f,r);e.setAttribute(u,d)}const o=this.morphAttributes;for(const u in o){const f=[],d=o[u];for(let p=0,_=d.length;p<_;p++){const g=d[p],x=t(g,r);f.push(x)}e.morphAttributes[u]=f}e.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let u=0,f=c.length;u<f;u++){const d=c[u];e.addGroup(d.start,d.count,d.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const f=this.parameters;for(const d in f)f[d]!==void 0&&(t[d]=f[d]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const r=this.attributes;for(const f in r){const d=r[f];t.data.attributes[f]=d.toJSON(t.data)}const a={};let o=!1;for(const f in this.morphAttributes){const d=this.morphAttributes[f],p=[];for(let _=0,g=d.length;_<g;_++){const x=d[_];p.push(x.toJSON(t.data))}p.length>0&&(a[f]=p,o=!0)}o&&(t.data.morphAttributes=a,t.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(t.data.groups=JSON.parse(JSON.stringify(c)));const u=this.boundingSphere;return u!==null&&(t.data.boundingSphere={center:u.center.toArray(),radius:u.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const r=t.index;r!==null&&this.setIndex(r.clone(e));const a=t.attributes;for(const d in a){const p=a[d];this.setAttribute(d,p.clone(e))}const o=t.morphAttributes;for(const d in o){const p=[],_=o[d];for(let g=0,x=_.length;g<x;g++)p.push(_[g].clone(e));this.morphAttributes[d]=p}this.morphTargetsRelative=t.morphTargetsRelative;const c=t.groups;for(let d=0,p=c.length;d<p;d++){const _=c[d];this.addGroup(_.start,_.count,_.materialIndex)}const u=t.boundingBox;u!==null&&(this.boundingBox=u.clone());const f=t.boundingSphere;return f!==null&&(this.boundingSphere=f.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ud=new Ge,Tr=new Ko,vo=new fa,Nd=new X,xo=new X,Mo=new X,yo=new X,Pc=new X,So=new X,Fd=new X,Eo=new X;class ki extends En{constructor(t=new yi,e=new Xu){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,r=Object.keys(e);if(r.length>0){const a=e[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,c=a.length;o<c;o++){const u=a[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=o}}}}getVertexPosition(t,e){const r=this.geometry,a=r.attributes.position,o=r.morphAttributes.position,c=r.morphTargetsRelative;e.fromBufferAttribute(a,t);const u=this.morphTargetInfluences;if(o&&u){So.set(0,0,0);for(let f=0,d=o.length;f<d;f++){const p=u[f],_=o[f];p!==0&&(Pc.fromBufferAttribute(_,t),c?So.addScaledVector(Pc,p):So.addScaledVector(Pc.sub(e),p))}e.add(So)}return e}raycast(t,e){const r=this.geometry,a=this.material,o=this.matrixWorld;a!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),vo.copy(r.boundingSphere),vo.applyMatrix4(o),Tr.copy(t.ray).recast(t.near),!(vo.containsPoint(Tr.origin)===!1&&(Tr.intersectSphere(vo,Nd)===null||Tr.origin.distanceToSquared(Nd)>(t.far-t.near)**2))&&(Ud.copy(o).invert(),Tr.copy(t.ray).applyMatrix4(Ud),!(r.boundingBox!==null&&Tr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(t,e,Tr)))}_computeIntersections(t,e,r){let a;const o=this.geometry,c=this.material,u=o.index,f=o.attributes.position,d=o.attributes.uv,p=o.attributes.uv1,_=o.attributes.normal,g=o.groups,x=o.drawRange;if(u!==null)if(Array.isArray(c))for(let E=0,A=g.length;E<A;E++){const v=g[E],m=c[v.materialIndex],N=Math.max(v.start,x.start),L=Math.min(u.count,Math.min(v.start+v.count,x.start+x.count));for(let P=N,W=L;P<W;P+=3){const B=u.getX(P),F=u.getX(P+1),q=u.getX(P+2);a=To(this,m,t,r,d,p,_,B,F,q),a&&(a.faceIndex=Math.floor(P/3),a.face.materialIndex=v.materialIndex,e.push(a))}}else{const E=Math.max(0,x.start),A=Math.min(u.count,x.start+x.count);for(let v=E,m=A;v<m;v+=3){const N=u.getX(v),L=u.getX(v+1),P=u.getX(v+2);a=To(this,c,t,r,d,p,_,N,L,P),a&&(a.faceIndex=Math.floor(v/3),e.push(a))}}else if(f!==void 0)if(Array.isArray(c))for(let E=0,A=g.length;E<A;E++){const v=g[E],m=c[v.materialIndex],N=Math.max(v.start,x.start),L=Math.min(f.count,Math.min(v.start+v.count,x.start+x.count));for(let P=N,W=L;P<W;P+=3){const B=P,F=P+1,q=P+2;a=To(this,m,t,r,d,p,_,B,F,q),a&&(a.faceIndex=Math.floor(P/3),a.face.materialIndex=v.materialIndex,e.push(a))}}else{const E=Math.max(0,x.start),A=Math.min(f.count,x.start+x.count);for(let v=E,m=A;v<m;v+=3){const N=v,L=v+1,P=v+2;a=To(this,c,t,r,d,p,_,N,L,P),a&&(a.faceIndex=Math.floor(v/3),e.push(a))}}}}function HS(i,t,e,r,a,o,c,u){let f;if(t.side===Ln?f=r.intersectTriangle(c,o,a,!0,u):f=r.intersectTriangle(a,o,c,t.side===hr,u),f===null)return null;Eo.copy(u),Eo.applyMatrix4(i.matrixWorld);const d=e.ray.origin.distanceTo(Eo);return d<e.near||d>e.far?null:{distance:d,point:Eo.clone(),object:i}}function To(i,t,e,r,a,o,c,u,f,d){i.getVertexPosition(u,xo),i.getVertexPosition(f,Mo),i.getVertexPosition(d,yo);const p=HS(i,t,e,r,xo,Mo,yo,Fd);if(p){const _=new X;ui.getBarycoord(Fd,xo,Mo,yo,_),a&&(p.uv=ui.getInterpolatedAttribute(a,u,f,d,_,new $t)),o&&(p.uv1=ui.getInterpolatedAttribute(o,u,f,d,_,new $t)),c&&(p.normal=ui.getInterpolatedAttribute(c,u,f,d,_,new X),p.normal.dot(r.direction)>0&&p.normal.multiplyScalar(-1));const g={a:u,b:f,c:d,normal:new X,materialIndex:0};ui.getNormal(xo,Mo,yo,g.normal),p.face=g,p.barycoord=_}return p}class da extends yi{constructor(t=1,e=1,r=1,a=1,o=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:r,widthSegments:a,heightSegments:o,depthSegments:c};const u=this;a=Math.floor(a),o=Math.floor(o),c=Math.floor(c);const f=[],d=[],p=[],_=[];let g=0,x=0;E("z","y","x",-1,-1,r,e,t,c,o,0),E("z","y","x",1,-1,r,e,-t,c,o,1),E("x","z","y",1,1,t,r,e,a,c,2),E("x","z","y",1,-1,t,r,-e,a,c,3),E("x","y","z",1,-1,t,e,r,a,o,4),E("x","y","z",-1,-1,t,e,-r,a,o,5),this.setIndex(f),this.setAttribute("position",new Vn(d,3)),this.setAttribute("normal",new Vn(p,3)),this.setAttribute("uv",new Vn(_,2));function E(A,v,m,N,L,P,W,B,F,q,C){const w=P/F,O=W/q,rt=P/2,Q=W/2,ct=B/2,dt=F+1,at=q+1;let ut=0,J=0;const St=new X;for(let At=0;At<at;At++){const It=At*O-Q;for(let oe=0;oe<dt;oe++){const Ae=oe*w-rt;St[A]=Ae*N,St[v]=It*L,St[m]=ct,d.push(St.x,St.y,St.z),St[A]=0,St[v]=0,St[m]=B>0?1:-1,p.push(St.x,St.y,St.z),_.push(oe/F),_.push(1-At/q),ut+=1}}for(let At=0;At<q;At++)for(let It=0;It<F;It++){const oe=g+It+dt*At,Ae=g+It+dt*(At+1),st=g+(It+1)+dt*(At+1),_t=g+(It+1)+dt*At;f.push(oe,Ae,_t),f.push(Ae,st,_t),J+=6}u.addGroup(x,J,C),x+=J,g+=ut}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new da(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ps(i){const t={};for(const e in i){t[e]={};for(const r in i[e]){const a=i[e][r];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][r]=null):t[e][r]=a.clone():Array.isArray(a)?t[e][r]=a.slice():t[e][r]=a}}return t}function Sn(i){const t={};for(let e=0;e<i.length;e++){const r=Ps(i[e]);for(const a in r)t[a]=r[a]}return t}function kS(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Kp(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Se.workingColorSpace}const VS={clone:Ps,merge:Sn};var GS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,WS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Mi extends Tn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=GS,this.fragmentShader=WS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ps(t.uniforms),this.uniformsGroups=kS(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const a in this.uniforms){const c=this.uniforms[a].value;c&&c.isTexture?e.uniforms[a]={type:"t",value:c.toJSON(t).uuid}:c&&c.isColor?e.uniforms[a]={type:"c",value:c.getHex()}:c&&c.isVector2?e.uniforms[a]={type:"v2",value:c.toArray()}:c&&c.isVector3?e.uniforms[a]={type:"v3",value:c.toArray()}:c&&c.isVector4?e.uniforms[a]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?e.uniforms[a]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?e.uniforms[a]={type:"m4",value:c.toArray()}:e.uniforms[a]={value:c}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const r={};for(const a in this.extensions)this.extensions[a]===!0&&(r[a]=!0);return Object.keys(r).length>0&&(e.extensions=r),e}}class $p extends En{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ge,this.projectionMatrix=new Ge,this.projectionMatrixInverse=new Ge,this.coordinateSystem=Hi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ar=new X,Od=new $t,Bd=new $t;class jn extends $p{constructor(t=50,e=1,r=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=r,this.far=a,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=ca*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ra*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ca*2*Math.atan(Math.tan(ra*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,r){ar.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ar.x,ar.y).multiplyScalar(-t/ar.z),ar.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(ar.x,ar.y).multiplyScalar(-t/ar.z)}getViewSize(t,e){return this.getViewBounds(t,Od,Bd),e.subVectors(Bd,Od)}setViewOffset(t,e,r,a,o,c){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=r,this.view.offsetY=a,this.view.width=o,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(ra*.5*this.fov)/this.zoom,r=2*e,a=this.aspect*r,o=-.5*a;const c=this.view;if(this.view!==null&&this.view.enabled){const f=c.fullWidth,d=c.fullHeight;o+=c.offsetX*a/f,e-=c.offsetY*r/d,a*=c.width/f,r*=c.height/d}const u=this.filmOffset;u!==0&&(o+=t*u/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+a,e,e-r,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const ds=-90,ps=1;class XS extends En{constructor(t,e,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new jn(ds,ps,t,e);a.layers=this.layers,this.add(a);const o=new jn(ds,ps,t,e);o.layers=this.layers,this.add(o);const c=new jn(ds,ps,t,e);c.layers=this.layers,this.add(c);const u=new jn(ds,ps,t,e);u.layers=this.layers,this.add(u);const f=new jn(ds,ps,t,e);f.layers=this.layers,this.add(f);const d=new jn(ds,ps,t,e);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[r,a,o,c,u,f]=e;for(const d of e)this.remove(d);if(t===Hi)r.up.set(0,1,0),r.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),u.up.set(0,1,0),u.lookAt(0,0,1),f.up.set(0,1,0),f.lookAt(0,0,-1);else if(t===ko)r.up.set(0,-1,0),r.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),u.up.set(0,-1,0),u.lookAt(0,0,1),f.up.set(0,-1,0),f.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const d of e)this.add(d),d.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:a}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[o,c,u,f,d,p]=this.children,_=t.getRenderTarget(),g=t.getActiveCubeFace(),x=t.getActiveMipmapLevel(),E=t.xr.enabled;t.xr.enabled=!1;const A=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,t.setRenderTarget(r,0,a),t.render(e,o),t.setRenderTarget(r,1,a),t.render(e,c),t.setRenderTarget(r,2,a),t.render(e,u),t.setRenderTarget(r,3,a),t.render(e,f),t.setRenderTarget(r,4,a),t.render(e,d),r.texture.generateMipmaps=A,t.setRenderTarget(r,5,a),t.render(e,p),t.setRenderTarget(_,g,x),t.xr.enabled=E,r.texture.needsPMREMUpdate=!0}}class Jp extends un{constructor(t,e,r,a,o,c,u,f,d,p){t=t!==void 0?t:[],e=e!==void 0?e:bs,super(t,e,r,a,o,c,u,f,d,p),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class qS extends Nr{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const r={width:t,height:t,depth:1},a=[r,r,r,r,r,r];this.texture=new Jp(a,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:gi}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new da(5,5,5),o=new Mi({name:"CubemapFromEquirect",uniforms:Ps(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Ln,blending:cr});o.uniforms.tEquirect.value=e;const c=new ki(a,o),u=e.minFilter;return e.minFilter===Ir&&(e.minFilter=gi),new XS(1,10,this).update(t,c),e.minFilter=u,c.geometry.dispose(),c.material.dispose(),this}clear(t,e,r,a){const o=t.getRenderTarget();for(let c=0;c<6;c++)t.setRenderTarget(this,c),t.clear(e,r,a);t.setRenderTarget(o)}}class na extends En{constructor(){super(),this.isGroup=!0,this.type="Group"}}const YS={type:"move"};class Dc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new na,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new na,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new na,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const r of t.hand.values())this._getHandJoint(e,r)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,r){let a=null,o=null,c=null;const u=this._targetRay,f=this._grip,d=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(d&&t.hand){c=!0;for(const A of t.hand.values()){const v=e.getJointPose(A,r),m=this._getHandJoint(d,A);v!==null&&(m.matrix.fromArray(v.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=v.radius),m.visible=v!==null}const p=d.joints["index-finger-tip"],_=d.joints["thumb-tip"],g=p.position.distanceTo(_.position),x=.02,E=.005;d.inputState.pinching&&g>x+E?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!d.inputState.pinching&&g<=x-E&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else f!==null&&t.gripSpace&&(o=e.getPose(t.gripSpace,r),o!==null&&(f.matrix.fromArray(o.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,o.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(o.linearVelocity)):f.hasLinearVelocity=!1,o.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(o.angularVelocity)):f.hasAngularVelocity=!1));u!==null&&(a=e.getPose(t.targetRaySpace,r),a===null&&o!==null&&(a=o),a!==null&&(u.matrix.fromArray(a.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,a.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(a.linearVelocity)):u.hasLinearVelocity=!1,a.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(a.angularVelocity)):u.hasAngularVelocity=!1,this.dispatchEvent(YS)))}return u!==null&&(u.visible=a!==null),f!==null&&(f.visible=o!==null),d!==null&&(d.visible=c!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const r=new na;r.matrixAutoUpdate=!1,r.visible=!1,t.joints[e.jointName]=r,t.add(r)}return t.joints[e.jointName]}}class qu{constructor(t,e=1,r=1e3){this.isFog=!0,this.name="",this.color=new Wt(t),this.near=e,this.far=r}clone(){return new qu(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class ZS extends En{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ti,this.environmentIntensity=1,this.environmentRotation=new ti,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class KS extends Tn{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Wt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Lc=new X,$S=new X,JS=new ie;class or{constructor(t=new X(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,r,a){return this.normal.set(t,e,r),this.constant=a,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,r){const a=Lc.subVectors(r,e).cross($S.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(a,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const r=t.delta(Lc),a=this.normal.dot(r);if(a===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const o=-(t.start.dot(this.normal)+this.constant)/a;return o<0||o>1?null:e.copy(t.start).addScaledVector(r,o)}intersectsLine(t){const e=this.distanceToPoint(t.start),r=this.distanceToPoint(t.end);return e<0&&r>0||r<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const r=e||JS.getNormalMatrix(t),a=this.coplanarPoint(Lc).applyMatrix4(t),o=this.normal.applyMatrix3(r).normalize();return this.constant=-a.dot(o),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const br=new fa,bo=new X;class Qp{constructor(t=new or,e=new or,r=new or,a=new or,o=new or,c=new or){this.planes=[t,e,r,a,o,c]}set(t,e,r,a,o,c){const u=this.planes;return u[0].copy(t),u[1].copy(e),u[2].copy(r),u[3].copy(a),u[4].copy(o),u[5].copy(c),this}copy(t){const e=this.planes;for(let r=0;r<6;r++)e[r].copy(t.planes[r]);return this}setFromProjectionMatrix(t,e=Hi){const r=this.planes,a=t.elements,o=a[0],c=a[1],u=a[2],f=a[3],d=a[4],p=a[5],_=a[6],g=a[7],x=a[8],E=a[9],A=a[10],v=a[11],m=a[12],N=a[13],L=a[14],P=a[15];if(r[0].setComponents(f-o,g-d,v-x,P-m).normalize(),r[1].setComponents(f+o,g+d,v+x,P+m).normalize(),r[2].setComponents(f+c,g+p,v+E,P+N).normalize(),r[3].setComponents(f-c,g-p,v-E,P-N).normalize(),r[4].setComponents(f-u,g-_,v-A,P-L).normalize(),e===Hi)r[5].setComponents(f+u,g+_,v+A,P+L).normalize();else if(e===ko)r[5].setComponents(u,_,A,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),br.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),br.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(br)}intersectsSprite(t){return br.center.set(0,0,0),br.radius=.7071067811865476,br.applyMatrix4(t.matrixWorld),this.intersectsSphere(br)}intersectsSphere(t){const e=this.planes,r=t.center,a=-t.radius;for(let o=0;o<6;o++)if(e[o].distanceToPoint(r)<a)return!1;return!0}intersectsBox(t){const e=this.planes;for(let r=0;r<6;r++){const a=e[r];if(bo.x=a.normal.x>0?t.max.x:t.min.x,bo.y=a.normal.y>0?t.max.y:t.min.y,bo.z=a.normal.z>0?t.max.z:t.min.z,a.distanceToPoint(bo)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let r=0;r<6;r++)if(e[r].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class $o extends Tn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Wt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Go=new X,Wo=new X,zd=new Ge,ea=new Ko,Ao=new fa,Ic=new X,Hd=new X;class QS extends En{constructor(t=new yi,e=new $o){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,r=[0];for(let a=1,o=e.count;a<o;a++)Go.fromBufferAttribute(e,a-1),Wo.fromBufferAttribute(e,a),r[a]=r[a-1],r[a]+=Go.distanceTo(Wo);t.setAttribute("lineDistance",new Vn(r,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const r=this.geometry,a=this.matrixWorld,o=t.params.Line.threshold,c=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Ao.copy(r.boundingSphere),Ao.applyMatrix4(a),Ao.radius+=o,t.ray.intersectsSphere(Ao)===!1)return;zd.copy(a).invert(),ea.copy(t.ray).applyMatrix4(zd);const u=o/((this.scale.x+this.scale.y+this.scale.z)/3),f=u*u,d=this.isLineSegments?2:1,p=r.index,g=r.attributes.position;if(p!==null){const x=Math.max(0,c.start),E=Math.min(p.count,c.start+c.count);for(let A=x,v=E-1;A<v;A+=d){const m=p.getX(A),N=p.getX(A+1),L=wo(this,t,ea,f,m,N,A);L&&e.push(L)}if(this.isLineLoop){const A=p.getX(E-1),v=p.getX(x),m=wo(this,t,ea,f,A,v,E-1);m&&e.push(m)}}else{const x=Math.max(0,c.start),E=Math.min(g.count,c.start+c.count);for(let A=x,v=E-1;A<v;A+=d){const m=wo(this,t,ea,f,A,A+1,A);m&&e.push(m)}if(this.isLineLoop){const A=wo(this,t,ea,f,E-1,x,E-1);A&&e.push(A)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,r=Object.keys(e);if(r.length>0){const a=e[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,c=a.length;o<c;o++){const u=a[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=o}}}}}function wo(i,t,e,r,a,o,c){const u=i.geometry.attributes.position;if(Go.fromBufferAttribute(u,a),Wo.fromBufferAttribute(u,o),e.distanceSqToSegment(Go,Wo,Ic,Hd)>r)return;Ic.applyMatrix4(i.matrixWorld);const d=t.ray.origin.distanceTo(Ic);if(!(d<t.near||d>t.far))return{distance:d,point:Hd.clone().applyMatrix4(i.matrixWorld),index:c,face:null,faceIndex:null,barycoord:null,object:i}}const kd=new X,Vd=new X;class jS extends QS{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,r=[];for(let a=0,o=e.count;a<o;a+=2)kd.fromBufferAttribute(e,a),Vd.fromBufferAttribute(e,a+1),r[a]=a===0?0:r[a-1],r[a+1]=r[a]+kd.distanceTo(Vd);t.setAttribute("lineDistance",new Vn(r,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class jp extends Tn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Wt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Gd=new Ge,Pu=new Ko,Ro=new fa,Co=new X;class tE extends En{constructor(t=new yi,e=new jp){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const r=this.geometry,a=this.matrixWorld,o=t.params.Points.threshold,c=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Ro.copy(r.boundingSphere),Ro.applyMatrix4(a),Ro.radius+=o,t.ray.intersectsSphere(Ro)===!1)return;Gd.copy(a).invert(),Pu.copy(t.ray).applyMatrix4(Gd);const u=o/((this.scale.x+this.scale.y+this.scale.z)/3),f=u*u,d=r.index,_=r.attributes.position;if(d!==null){const g=Math.max(0,c.start),x=Math.min(d.count,c.start+c.count);for(let E=g,A=x;E<A;E++){const v=d.getX(E);Co.fromBufferAttribute(_,v),Wd(Co,v,f,a,t,e,this)}}else{const g=Math.max(0,c.start),x=Math.min(_.count,c.start+c.count);for(let E=g,A=x;E<A;E++)Co.fromBufferAttribute(_,E),Wd(Co,E,f,a,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,r=Object.keys(e);if(r.length>0){const a=e[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,c=a.length;o<c;o++){const u=a[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=o}}}}}function Wd(i,t,e,r,a,o,c){const u=Pu.distanceSqToPoint(i);if(u<e){const f=new X;Pu.closestPointToPoint(i,f),f.applyMatrix4(r);const d=a.ray.origin.distanceTo(f);if(d<a.near||d>a.far)return;o.push({distance:d,distanceToRay:Math.sqrt(u),point:f,index:t,face:null,faceIndex:null,barycoord:null,object:c})}}class tm extends un{constructor(t,e,r,a,o,c,u,f,d,p=ys){if(p!==ys&&p!==Rs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&p===ys&&(r=Ur),r===void 0&&p===Rs&&(r=ws),super(null,a,o,c,u,f,p,r,d),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=u!==void 0?u:fi,this.minFilter=f!==void 0?f:fi,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Wu(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Jo extends yi{constructor(t=1,e=1,r=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:r,heightSegments:a};const o=t/2,c=e/2,u=Math.floor(r),f=Math.floor(a),d=u+1,p=f+1,_=t/u,g=e/f,x=[],E=[],A=[],v=[];for(let m=0;m<p;m++){const N=m*g-c;for(let L=0;L<d;L++){const P=L*_-o;E.push(P,-N,0),A.push(0,0,1),v.push(L/u),v.push(1-m/f)}}for(let m=0;m<f;m++)for(let N=0;N<u;N++){const L=N+d*m,P=N+d*(m+1),W=N+1+d*(m+1),B=N+1+d*m;x.push(L,P,B),x.push(P,W,B)}this.setIndex(x),this.setAttribute("position",new Vn(E,3)),this.setAttribute("normal",new Vn(A,3)),this.setAttribute("uv",new Vn(v,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Jo(t.width,t.height,t.widthSegments,t.heightSegments)}}class eE extends Tn{constructor(t){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new Wt(0),this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.fog=t.fog,this}}class nE extends Mi{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class em extends Tn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Wt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Wt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Or,this.normalScale=new $t(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ti,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class iE extends em{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new $t(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ce(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Wt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Wt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Wt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class rE extends Tn{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Wt(16777215),this.specular=new Wt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Wt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Or,this.normalScale=new $t(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ti,this.combine=Yo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class sE extends Tn{constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new Wt(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Wt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Or,this.normalScale=new $t(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}class aE extends Tn{constructor(t){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Or,this.normalScale=new $t(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.flatShading=t.flatShading,this}}class oE extends Tn{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Wt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Wt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Or,this.normalScale=new $t(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ti,this.combine=Yo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class nm extends Tn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Zy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class im extends Tn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class lE extends Tn{constructor(t){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new Wt(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Or,this.normalScale=new $t(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={MATCAP:""},this.color.copy(t.color),this.matcap=t.matcap,this.map=t.map,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.flatShading=t.flatShading,this.fog=t.fog,this}}class cE extends $o{constructor(t){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(t)}copy(t){return super.copy(t),this.scale=t.scale,this.dashSize=t.dashSize,this.gapSize=t.gapSize,this}}const Xd={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class uE{constructor(t,e,r){const a=this;let o=!1,c=0,u=0,f;const d=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=r,this.itemStart=function(p){u++,o===!1&&a.onStart!==void 0&&a.onStart(p,c,u),o=!0},this.itemEnd=function(p){c++,a.onProgress!==void 0&&a.onProgress(p,c,u),c===u&&(o=!1,a.onLoad!==void 0&&a.onLoad())},this.itemError=function(p){a.onError!==void 0&&a.onError(p)},this.resolveURL=function(p){return f?f(p):p},this.setURLModifier=function(p){return f=p,this},this.addHandler=function(p,_){return d.push(p,_),this},this.removeHandler=function(p){const _=d.indexOf(p);return _!==-1&&d.splice(_,2),this},this.getHandler=function(p){for(let _=0,g=d.length;_<g;_+=2){const x=d[_],E=d[_+1];if(x.global&&(x.lastIndex=0),x.test(p))return E}return null}}}const hE=new uE;class Qo{constructor(t){this.manager=t!==void 0?t:hE,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const r=this;return new Promise(function(a,o){r.load(t,a,e,o)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}Qo.DEFAULT_MATERIAL_NAME="__DEFAULT";const Oi={};class fE extends Error{constructor(t,e){super(t),this.response=e}}class rm extends Qo{constructor(t){super(t)}load(t,e,r,a){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const o=Xd.get(t);if(o!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(o),this.manager.itemEnd(t)},0),o;if(Oi[t]!==void 0){Oi[t].push({onLoad:e,onProgress:r,onError:a});return}Oi[t]=[],Oi[t].push({onLoad:e,onProgress:r,onError:a});const c=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),u=this.mimeType,f=this.responseType;fetch(c).then(d=>{if(d.status===200||d.status===0){if(d.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||d.body===void 0||d.body.getReader===void 0)return d;const p=Oi[t],_=d.body.getReader(),g=d.headers.get("X-File-Size")||d.headers.get("Content-Length"),x=g?parseInt(g):0,E=x!==0;let A=0;const v=new ReadableStream({start(m){N();function N(){_.read().then(({done:L,value:P})=>{if(L)m.close();else{A+=P.byteLength;const W=new ProgressEvent("progress",{lengthComputable:E,loaded:A,total:x});for(let B=0,F=p.length;B<F;B++){const q=p[B];q.onProgress&&q.onProgress(W)}m.enqueue(P),N()}},L=>{m.error(L)})}}});return new Response(v)}else throw new fE(`fetch for "${d.url}" responded with ${d.status}: ${d.statusText}`,d)}).then(d=>{switch(f){case"arraybuffer":return d.arrayBuffer();case"blob":return d.blob();case"document":return d.text().then(p=>new DOMParser().parseFromString(p,u));case"json":return d.json();default:if(u===void 0)return d.text();{const _=/charset="?([^;"\s]*)"?/i.exec(u),g=_&&_[1]?_[1].toLowerCase():void 0,x=new TextDecoder(g);return d.arrayBuffer().then(E=>x.decode(E))}}}).then(d=>{Xd.add(t,d);const p=Oi[t];delete Oi[t];for(let _=0,g=p.length;_<g;_++){const x=p[_];x.onLoad&&x.onLoad(d)}}).catch(d=>{const p=Oi[t];if(p===void 0)throw this.manager.itemError(t),d;delete Oi[t];for(let _=0,g=p.length;_<g;_++){const x=p[_];x.onError&&x.onError(d)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class dE extends $p{constructor(t=-1,e=1,r=1,a=-1,o=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=r,this.bottom=a,this.near=o,this.far=c,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,r,a,o,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=r,this.view.offsetY=a,this.view.width=o,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let o=r-t,c=r+t,u=a+e,f=a-e;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=d*this.view.offsetX,c=o+d*this.view.width,u-=p*this.view.offsetY,f=u-p*this.view.height}this.projectionMatrix.makeOrthographic(o,c,u,f,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Yu extends Qo{constructor(t){super(t),this.textures={}}load(t,e,r,a){const o=this,c=new rm(o.manager);c.setPath(o.path),c.setRequestHeader(o.requestHeader),c.setWithCredentials(o.withCredentials),c.load(t,function(u){try{e(o.parse(JSON.parse(u)))}catch(f){a?a(f):console.error(f),o.manager.itemError(t)}},r,a)}parse(t){const e=this.textures;function r(o){return e[o]===void 0&&console.warn("THREE.MaterialLoader: Undefined texture",o),e[o]}const a=this.createMaterialFromType(t.type);if(t.uuid!==void 0&&(a.uuid=t.uuid),t.name!==void 0&&(a.name=t.name),t.color!==void 0&&a.color!==void 0&&a.color.setHex(t.color),t.roughness!==void 0&&(a.roughness=t.roughness),t.metalness!==void 0&&(a.metalness=t.metalness),t.sheen!==void 0&&(a.sheen=t.sheen),t.sheenColor!==void 0&&(a.sheenColor=new Wt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(a.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&a.emissive!==void 0&&a.emissive.setHex(t.emissive),t.specular!==void 0&&a.specular!==void 0&&a.specular.setHex(t.specular),t.specularIntensity!==void 0&&(a.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&a.specularColor!==void 0&&a.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(a.shininess=t.shininess),t.clearcoat!==void 0&&(a.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(a.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(a.dispersion=t.dispersion),t.iridescence!==void 0&&(a.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(a.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(a.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(a.transmission=t.transmission),t.thickness!==void 0&&(a.thickness=t.thickness),t.attenuationDistance!==void 0&&(a.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&a.attenuationColor!==void 0&&a.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(a.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(a.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(a.fog=t.fog),t.flatShading!==void 0&&(a.flatShading=t.flatShading),t.blending!==void 0&&(a.blending=t.blending),t.combine!==void 0&&(a.combine=t.combine),t.side!==void 0&&(a.side=t.side),t.shadowSide!==void 0&&(a.shadowSide=t.shadowSide),t.opacity!==void 0&&(a.opacity=t.opacity),t.transparent!==void 0&&(a.transparent=t.transparent),t.alphaTest!==void 0&&(a.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(a.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(a.depthFunc=t.depthFunc),t.depthTest!==void 0&&(a.depthTest=t.depthTest),t.depthWrite!==void 0&&(a.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(a.colorWrite=t.colorWrite),t.blendSrc!==void 0&&(a.blendSrc=t.blendSrc),t.blendDst!==void 0&&(a.blendDst=t.blendDst),t.blendEquation!==void 0&&(a.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(a.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(a.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(a.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&a.blendColor!==void 0&&a.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(a.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(a.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(a.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(a.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(a.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(a.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(a.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(a.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(a.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(a.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(a.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(a.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(a.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(a.rotation=t.rotation),t.linewidth!==void 0&&(a.linewidth=t.linewidth),t.dashSize!==void 0&&(a.dashSize=t.dashSize),t.gapSize!==void 0&&(a.gapSize=t.gapSize),t.scale!==void 0&&(a.scale=t.scale),t.polygonOffset!==void 0&&(a.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(a.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(a.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(a.dithering=t.dithering),t.alphaToCoverage!==void 0&&(a.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(a.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(a.forceSinglePass=t.forceSinglePass),t.visible!==void 0&&(a.visible=t.visible),t.toneMapped!==void 0&&(a.toneMapped=t.toneMapped),t.userData!==void 0&&(a.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?a.vertexColors=t.vertexColors>0:a.vertexColors=t.vertexColors),t.uniforms!==void 0)for(const o in t.uniforms){const c=t.uniforms[o];switch(a.uniforms[o]={},c.type){case"t":a.uniforms[o].value=r(c.value);break;case"c":a.uniforms[o].value=new Wt().setHex(c.value);break;case"v2":a.uniforms[o].value=new $t().fromArray(c.value);break;case"v3":a.uniforms[o].value=new X().fromArray(c.value);break;case"v4":a.uniforms[o].value=new Xe().fromArray(c.value);break;case"m3":a.uniforms[o].value=new ie().fromArray(c.value);break;case"m4":a.uniforms[o].value=new Ge().fromArray(c.value);break;default:a.uniforms[o].value=c.value}}if(t.defines!==void 0&&(a.defines=t.defines),t.vertexShader!==void 0&&(a.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(a.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(a.glslVersion=t.glslVersion),t.extensions!==void 0)for(const o in t.extensions)a.extensions[o]=t.extensions[o];if(t.lights!==void 0&&(a.lights=t.lights),t.clipping!==void 0&&(a.clipping=t.clipping),t.size!==void 0&&(a.size=t.size),t.sizeAttenuation!==void 0&&(a.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(a.map=r(t.map)),t.matcap!==void 0&&(a.matcap=r(t.matcap)),t.alphaMap!==void 0&&(a.alphaMap=r(t.alphaMap)),t.bumpMap!==void 0&&(a.bumpMap=r(t.bumpMap)),t.bumpScale!==void 0&&(a.bumpScale=t.bumpScale),t.normalMap!==void 0&&(a.normalMap=r(t.normalMap)),t.normalMapType!==void 0&&(a.normalMapType=t.normalMapType),t.normalScale!==void 0){let o=t.normalScale;Array.isArray(o)===!1&&(o=[o,o]),a.normalScale=new $t().fromArray(o)}return t.displacementMap!==void 0&&(a.displacementMap=r(t.displacementMap)),t.displacementScale!==void 0&&(a.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(a.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(a.roughnessMap=r(t.roughnessMap)),t.metalnessMap!==void 0&&(a.metalnessMap=r(t.metalnessMap)),t.emissiveMap!==void 0&&(a.emissiveMap=r(t.emissiveMap)),t.emissiveIntensity!==void 0&&(a.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(a.specularMap=r(t.specularMap)),t.specularIntensityMap!==void 0&&(a.specularIntensityMap=r(t.specularIntensityMap)),t.specularColorMap!==void 0&&(a.specularColorMap=r(t.specularColorMap)),t.envMap!==void 0&&(a.envMap=r(t.envMap)),t.envMapRotation!==void 0&&a.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(a.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(a.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(a.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(a.lightMap=r(t.lightMap)),t.lightMapIntensity!==void 0&&(a.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(a.aoMap=r(t.aoMap)),t.aoMapIntensity!==void 0&&(a.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(a.gradientMap=r(t.gradientMap)),t.clearcoatMap!==void 0&&(a.clearcoatMap=r(t.clearcoatMap)),t.clearcoatRoughnessMap!==void 0&&(a.clearcoatRoughnessMap=r(t.clearcoatRoughnessMap)),t.clearcoatNormalMap!==void 0&&(a.clearcoatNormalMap=r(t.clearcoatNormalMap)),t.clearcoatNormalScale!==void 0&&(a.clearcoatNormalScale=new $t().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(a.iridescenceMap=r(t.iridescenceMap)),t.iridescenceThicknessMap!==void 0&&(a.iridescenceThicknessMap=r(t.iridescenceThicknessMap)),t.transmissionMap!==void 0&&(a.transmissionMap=r(t.transmissionMap)),t.thicknessMap!==void 0&&(a.thicknessMap=r(t.thicknessMap)),t.anisotropyMap!==void 0&&(a.anisotropyMap=r(t.anisotropyMap)),t.sheenColorMap!==void 0&&(a.sheenColorMap=r(t.sheenColorMap)),t.sheenRoughnessMap!==void 0&&(a.sheenRoughnessMap=r(t.sheenRoughnessMap)),a}setTextures(t){return this.textures=t,this}createMaterialFromType(t){return Yu.createMaterialFromType(t)}static createMaterialFromType(t){const e={ShadowMaterial:eE,SpriteMaterial:KS,RawShaderMaterial:nE,ShaderMaterial:Mi,PointsMaterial:jp,MeshPhysicalMaterial:iE,MeshStandardMaterial:em,MeshPhongMaterial:rE,MeshToonMaterial:sE,MeshNormalMaterial:aE,MeshLambertMaterial:oE,MeshDepthMaterial:nm,MeshDistanceMaterial:im,MeshBasicMaterial:Xu,MeshMatcapMaterial:lE,LineDashedMaterial:cE,LineBasicMaterial:$o,Material:Tn};return new e[t]}}class pE extends jn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t,this.index=0}}class mE{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=qd(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=qd();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function qd(){return performance.now()}class Yd{constructor(t=1,e=0,r=0){this.radius=t,this.phi=e,this.theta=r}set(t,e,r){return this.radius=t,this.phi=e,this.theta=r,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=ce(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,r){return this.radius=Math.sqrt(t*t+e*e+r*r),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,r),this.phi=Math.acos(ce(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class _E extends jS{constructor(t=10,e=10,r=4473924,a=8947848){r=new Wt(r),a=new Wt(a);const o=e/2,c=t/e,u=t/2,f=[],d=[];for(let g=0,x=0,E=-u;g<=e;g++,E+=c){f.push(-u,0,E,u,0,E),f.push(E,0,-u,E,0,u);const A=g===o?r:a;A.toArray(d,x),x+=3,A.toArray(d,x),x+=3,A.toArray(d,x),x+=3,A.toArray(d,x),x+=3}const p=new yi;p.setAttribute("position",new Vn(f,3)),p.setAttribute("color",new Vn(d,3));const _=new $o({vertexColors:!0,toneMapped:!1});super(p,_),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class gE extends Br{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}function Zd(i,t,e,r){const a=vE(r);switch(e){case Up:return i*t;case Fp:return i*t;case Op:return i*t*2;case Bp:return i*t/a.components*a.byteLength;case Hu:return i*t/a.components*a.byteLength;case zp:return i*t*2/a.components*a.byteLength;case ku:return i*t*2/a.components*a.byteLength;case Np:return i*t*3/a.components*a.byteLength;case hi:return i*t*4/a.components*a.byteLength;case Vu:return i*t*4/a.components*a.byteLength;case Uo:case No:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Fo:case Oo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case su:case ou:return Math.max(i,16)*Math.max(t,8)/4;case ru:case au:return Math.max(i,8)*Math.max(t,8)/2;case lu:case cu:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case uu:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case hu:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case fu:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case du:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case pu:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case mu:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case _u:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case gu:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case vu:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case xu:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Mu:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case yu:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Su:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Eu:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Tu:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Bo:case bu:case Au:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Hp:case wu:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Ru:case Cu:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function vE(i){switch(i){case Gi:case Dp:return{byteLength:1,components:1};case la:case Lp:case ua:return{byteLength:2,components:1};case Bu:case zu:return{byteLength:2,components:4};case Ur:case Ou:case vi:return{byteLength:4,components:1};case Ip:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Fu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Fu);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function sm(){let i=null,t=!1,e=null,r=null;function a(o,c){e(o,c),r=i.requestAnimationFrame(a)}return{start:function(){t!==!0&&e!==null&&(r=i.requestAnimationFrame(a),t=!0)},stop:function(){i.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(o){e=o},setContext:function(o){i=o}}}function xE(i){const t=new WeakMap;function e(u,f){const d=u.array,p=u.usage,_=d.byteLength,g=i.createBuffer();i.bindBuffer(f,g),i.bufferData(f,d,p),u.onUploadCallback();let x;if(d instanceof Float32Array)x=i.FLOAT;else if(d instanceof Uint16Array)u.isFloat16BufferAttribute?x=i.HALF_FLOAT:x=i.UNSIGNED_SHORT;else if(d instanceof Int16Array)x=i.SHORT;else if(d instanceof Uint32Array)x=i.UNSIGNED_INT;else if(d instanceof Int32Array)x=i.INT;else if(d instanceof Int8Array)x=i.BYTE;else if(d instanceof Uint8Array)x=i.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)x=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:g,type:x,bytesPerElement:d.BYTES_PER_ELEMENT,version:u.version,size:_}}function r(u,f,d){const p=f.array,_=f.updateRanges;if(i.bindBuffer(d,u),_.length===0)i.bufferSubData(d,0,p);else{_.sort((x,E)=>x.start-E.start);let g=0;for(let x=1;x<_.length;x++){const E=_[g],A=_[x];A.start<=E.start+E.count+1?E.count=Math.max(E.count,A.start+A.count-E.start):(++g,_[g]=A)}_.length=g+1;for(let x=0,E=_.length;x<E;x++){const A=_[x];i.bufferSubData(d,A.start*p.BYTES_PER_ELEMENT,p,A.start,A.count)}f.clearUpdateRanges()}f.onUploadCallback()}function a(u){return u.isInterleavedBufferAttribute&&(u=u.data),t.get(u)}function o(u){u.isInterleavedBufferAttribute&&(u=u.data);const f=t.get(u);f&&(i.deleteBuffer(f.buffer),t.delete(u))}function c(u,f){if(u.isInterleavedBufferAttribute&&(u=u.data),u.isGLBufferAttribute){const p=t.get(u);(!p||p.version<u.version)&&t.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}const d=t.get(u);if(d===void 0)t.set(u,e(u,f));else if(d.version<u.version){if(d.size!==u.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(d.buffer,u,f),d.version=u.version}}return{get:a,remove:o,update:c}}var ME=`#ifdef USE_ALPHAHASH
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
#endif`,ST=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ET=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,TT=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bT=`#ifdef USE_LOGDEPTHBUF
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
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
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
}`,ae={alphahash_fragment:ME,alphahash_pars_fragment:yE,alphamap_fragment:SE,alphamap_pars_fragment:EE,alphatest_fragment:TE,alphatest_pars_fragment:bE,aomap_fragment:AE,aomap_pars_fragment:wE,batching_pars_vertex:RE,batching_vertex:CE,begin_vertex:PE,beginnormal_vertex:DE,bsdfs:LE,iridescence_fragment:IE,bumpmap_pars_fragment:UE,clipping_planes_fragment:NE,clipping_planes_pars_fragment:FE,clipping_planes_pars_vertex:OE,clipping_planes_vertex:BE,color_fragment:zE,color_pars_fragment:HE,color_pars_vertex:kE,color_vertex:VE,common:GE,cube_uv_reflection_fragment:WE,defaultnormal_vertex:XE,displacementmap_pars_vertex:qE,displacementmap_vertex:YE,emissivemap_fragment:ZE,emissivemap_pars_fragment:KE,colorspace_fragment:$E,colorspace_pars_fragment:JE,envmap_fragment:QE,envmap_common_pars_fragment:jE,envmap_pars_fragment:tT,envmap_pars_vertex:eT,envmap_physical_pars_fragment:fT,envmap_vertex:nT,fog_vertex:iT,fog_pars_vertex:rT,fog_fragment:sT,fog_pars_fragment:aT,gradientmap_pars_fragment:oT,lightmap_pars_fragment:lT,lights_lambert_fragment:cT,lights_lambert_pars_fragment:uT,lights_pars_begin:hT,lights_toon_fragment:dT,lights_toon_pars_fragment:pT,lights_phong_fragment:mT,lights_phong_pars_fragment:_T,lights_physical_fragment:gT,lights_physical_pars_fragment:vT,lights_fragment_begin:xT,lights_fragment_maps:MT,lights_fragment_end:yT,logdepthbuf_fragment:ST,logdepthbuf_pars_fragment:ET,logdepthbuf_pars_vertex:TT,logdepthbuf_vertex:bT,map_fragment:AT,map_pars_fragment:wT,map_particle_fragment:RT,map_particle_pars_fragment:CT,metalnessmap_fragment:PT,metalnessmap_pars_fragment:DT,morphinstance_vertex:LT,morphcolor_vertex:IT,morphnormal_vertex:UT,morphtarget_pars_vertex:NT,morphtarget_vertex:FT,normal_fragment_begin:OT,normal_fragment_maps:BT,normal_pars_fragment:zT,normal_pars_vertex:HT,normal_vertex:kT,normalmap_pars_fragment:VT,clearcoat_normal_fragment_begin:GT,clearcoat_normal_fragment_maps:WT,clearcoat_pars_fragment:XT,iridescence_pars_fragment:qT,opaque_fragment:YT,packing:ZT,premultiplied_alpha_fragment:KT,project_vertex:$T,dithering_fragment:JT,dithering_pars_fragment:QT,roughnessmap_fragment:jT,roughnessmap_pars_fragment:tb,shadowmap_pars_fragment:eb,shadowmap_pars_vertex:nb,shadowmap_vertex:ib,shadowmask_pars_fragment:rb,skinbase_vertex:sb,skinning_pars_vertex:ab,skinning_vertex:ob,skinnormal_vertex:lb,specularmap_fragment:cb,specularmap_pars_fragment:ub,tonemapping_fragment:hb,tonemapping_pars_fragment:fb,transmission_fragment:db,transmission_pars_fragment:pb,uv_pars_fragment:mb,uv_pars_vertex:_b,uv_vertex:gb,worldpos_vertex:vb,background_vert:xb,background_frag:Mb,backgroundCube_vert:yb,backgroundCube_frag:Sb,cube_vert:Eb,cube_frag:Tb,depth_vert:bb,depth_frag:Ab,distanceRGBA_vert:wb,distanceRGBA_frag:Rb,equirect_vert:Cb,equirect_frag:Pb,linedashed_vert:Db,linedashed_frag:Lb,meshbasic_vert:Ib,meshbasic_frag:Ub,meshlambert_vert:Nb,meshlambert_frag:Fb,meshmatcap_vert:Ob,meshmatcap_frag:Bb,meshnormal_vert:zb,meshnormal_frag:Hb,meshphong_vert:kb,meshphong_frag:Vb,meshphysical_vert:Gb,meshphysical_frag:Wb,meshtoon_vert:Xb,meshtoon_frag:qb,points_vert:Yb,points_frag:Zb,shadow_vert:Kb,shadow_frag:$b,sprite_vert:Jb,sprite_frag:Qb},xt={common:{diffuse:{value:new Wt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ie},alphaMap:{value:null},alphaMapTransform:{value:new ie},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ie}},envmap:{envMap:{value:null},envMapRotation:{value:new ie},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ie}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ie}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ie},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ie},normalScale:{value:new $t(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ie},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ie}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ie}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ie}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Wt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Wt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ie},alphaTest:{value:0},uvTransform:{value:new ie}},sprite:{diffuse:{value:new Wt(16777215)},opacity:{value:1},center:{value:new $t(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ie},alphaMap:{value:null},alphaMapTransform:{value:new ie},alphaTest:{value:0}}},_i={basic:{uniforms:Sn([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.fog]),vertexShader:ae.meshbasic_vert,fragmentShader:ae.meshbasic_frag},lambert:{uniforms:Sn([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,xt.lights,{emissive:{value:new Wt(0)}}]),vertexShader:ae.meshlambert_vert,fragmentShader:ae.meshlambert_frag},phong:{uniforms:Sn([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,xt.lights,{emissive:{value:new Wt(0)},specular:{value:new Wt(1118481)},shininess:{value:30}}]),vertexShader:ae.meshphong_vert,fragmentShader:ae.meshphong_frag},standard:{uniforms:Sn([xt.common,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.roughnessmap,xt.metalnessmap,xt.fog,xt.lights,{emissive:{value:new Wt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ae.meshphysical_vert,fragmentShader:ae.meshphysical_frag},toon:{uniforms:Sn([xt.common,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.gradientmap,xt.fog,xt.lights,{emissive:{value:new Wt(0)}}]),vertexShader:ae.meshtoon_vert,fragmentShader:ae.meshtoon_frag},matcap:{uniforms:Sn([xt.common,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,{matcap:{value:null}}]),vertexShader:ae.meshmatcap_vert,fragmentShader:ae.meshmatcap_frag},points:{uniforms:Sn([xt.points,xt.fog]),vertexShader:ae.points_vert,fragmentShader:ae.points_frag},dashed:{uniforms:Sn([xt.common,xt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ae.linedashed_vert,fragmentShader:ae.linedashed_frag},depth:{uniforms:Sn([xt.common,xt.displacementmap]),vertexShader:ae.depth_vert,fragmentShader:ae.depth_frag},normal:{uniforms:Sn([xt.common,xt.bumpmap,xt.normalmap,xt.displacementmap,{opacity:{value:1}}]),vertexShader:ae.meshnormal_vert,fragmentShader:ae.meshnormal_frag},sprite:{uniforms:Sn([xt.sprite,xt.fog]),vertexShader:ae.sprite_vert,fragmentShader:ae.sprite_frag},background:{uniforms:{uvTransform:{value:new ie},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ae.background_vert,fragmentShader:ae.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ie}},vertexShader:ae.backgroundCube_vert,fragmentShader:ae.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ae.cube_vert,fragmentShader:ae.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ae.equirect_vert,fragmentShader:ae.equirect_frag},distanceRGBA:{uniforms:Sn([xt.common,xt.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ae.distanceRGBA_vert,fragmentShader:ae.distanceRGBA_frag},shadow:{uniforms:Sn([xt.lights,xt.fog,{color:{value:new Wt(0)},opacity:{value:1}}]),vertexShader:ae.shadow_vert,fragmentShader:ae.shadow_frag}};_i.physical={uniforms:Sn([_i.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ie},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ie},clearcoatNormalScale:{value:new $t(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ie},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ie},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ie},sheen:{value:0},sheenColor:{value:new Wt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ie},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ie},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ie},transmissionSamplerSize:{value:new $t},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ie},attenuationDistance:{value:0},attenuationColor:{value:new Wt(0)},specularColor:{value:new Wt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ie},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ie},anisotropyVector:{value:new $t},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ie}}]),vertexShader:ae.meshphysical_vert,fragmentShader:ae.meshphysical_frag};const Po={r:0,b:0,g:0},Ar=new ti,jb=new Ge;function tA(i,t,e,r,a,o,c){const u=new Wt(0);let f=o===!0?0:1,d,p,_=null,g=0,x=null;function E(L){let P=L.isScene===!0?L.background:null;return P&&P.isTexture&&(P=(L.backgroundBlurriness>0?e:t).get(P)),P}function A(L){let P=!1;const W=E(L);W===null?m(u,f):W&&W.isColor&&(m(W,1),P=!0);const B=i.xr.getEnvironmentBlendMode();B==="additive"?r.buffers.color.setClear(0,0,0,1,c):B==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,c),(i.autoClear||P)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function v(L,P){const W=E(P);W&&(W.isCubeTexture||W.mapping===Zo)?(p===void 0&&(p=new ki(new da(1,1,1),new Mi({name:"BackgroundCubeMaterial",uniforms:Ps(_i.backgroundCube.uniforms),vertexShader:_i.backgroundCube.vertexShader,fragmentShader:_i.backgroundCube.fragmentShader,side:Ln,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(B,F,q){this.matrixWorld.copyPosition(q.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(p)),Ar.copy(P.backgroundRotation),Ar.x*=-1,Ar.y*=-1,Ar.z*=-1,W.isCubeTexture&&W.isRenderTargetTexture===!1&&(Ar.y*=-1,Ar.z*=-1),p.material.uniforms.envMap.value=W,p.material.uniforms.flipEnvMap.value=W.isCubeTexture&&W.isRenderTargetTexture===!1?-1:1,p.material.uniforms.backgroundBlurriness.value=P.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(jb.makeRotationFromEuler(Ar)),p.material.toneMapped=Se.getTransfer(W.colorSpace)!==Pe,(_!==W||g!==W.version||x!==i.toneMapping)&&(p.material.needsUpdate=!0,_=W,g=W.version,x=i.toneMapping),p.layers.enableAll(),L.unshift(p,p.geometry,p.material,0,0,null)):W&&W.isTexture&&(d===void 0&&(d=new ki(new Jo(2,2),new Mi({name:"BackgroundMaterial",uniforms:Ps(_i.background.uniforms),vertexShader:_i.background.vertexShader,fragmentShader:_i.background.fragmentShader,side:hr,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(d)),d.material.uniforms.t2D.value=W,d.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,d.material.toneMapped=Se.getTransfer(W.colorSpace)!==Pe,W.matrixAutoUpdate===!0&&W.updateMatrix(),d.material.uniforms.uvTransform.value.copy(W.matrix),(_!==W||g!==W.version||x!==i.toneMapping)&&(d.material.needsUpdate=!0,_=W,g=W.version,x=i.toneMapping),d.layers.enableAll(),L.unshift(d,d.geometry,d.material,0,0,null))}function m(L,P){L.getRGB(Po,Kp(i)),r.buffers.color.setClear(Po.r,Po.g,Po.b,P,c)}function N(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0)}return{getClearColor:function(){return u},setClearColor:function(L,P=1){u.set(L),f=P,m(u,f)},getClearAlpha:function(){return f},setClearAlpha:function(L){f=L,m(u,f)},render:A,addToRenderList:v,dispose:N}}function eA(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),r={},a=g(null);let o=a,c=!1;function u(w,O,rt,Q,ct){let dt=!1;const at=_(Q,rt,O);o!==at&&(o=at,d(o.object)),dt=x(w,Q,rt,ct),dt&&E(w,Q,rt,ct),ct!==null&&t.update(ct,i.ELEMENT_ARRAY_BUFFER),(dt||c)&&(c=!1,P(w,O,rt,Q),ct!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(ct).buffer))}function f(){return i.createVertexArray()}function d(w){return i.bindVertexArray(w)}function p(w){return i.deleteVertexArray(w)}function _(w,O,rt){const Q=rt.wireframe===!0;let ct=r[w.id];ct===void 0&&(ct={},r[w.id]=ct);let dt=ct[O.id];dt===void 0&&(dt={},ct[O.id]=dt);let at=dt[Q];return at===void 0&&(at=g(f()),dt[Q]=at),at}function g(w){const O=[],rt=[],Q=[];for(let ct=0;ct<e;ct++)O[ct]=0,rt[ct]=0,Q[ct]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:rt,attributeDivisors:Q,object:w,attributes:{},index:null}}function x(w,O,rt,Q){const ct=o.attributes,dt=O.attributes;let at=0;const ut=rt.getAttributes();for(const J in ut)if(ut[J].location>=0){const At=ct[J];let It=dt[J];if(It===void 0&&(J==="instanceMatrix"&&w.instanceMatrix&&(It=w.instanceMatrix),J==="instanceColor"&&w.instanceColor&&(It=w.instanceColor)),At===void 0||At.attribute!==It||It&&At.data!==It.data)return!0;at++}return o.attributesNum!==at||o.index!==Q}function E(w,O,rt,Q){const ct={},dt=O.attributes;let at=0;const ut=rt.getAttributes();for(const J in ut)if(ut[J].location>=0){let At=dt[J];At===void 0&&(J==="instanceMatrix"&&w.instanceMatrix&&(At=w.instanceMatrix),J==="instanceColor"&&w.instanceColor&&(At=w.instanceColor));const It={};It.attribute=At,At&&At.data&&(It.data=At.data),ct[J]=It,at++}o.attributes=ct,o.attributesNum=at,o.index=Q}function A(){const w=o.newAttributes;for(let O=0,rt=w.length;O<rt;O++)w[O]=0}function v(w){m(w,0)}function m(w,O){const rt=o.newAttributes,Q=o.enabledAttributes,ct=o.attributeDivisors;rt[w]=1,Q[w]===0&&(i.enableVertexAttribArray(w),Q[w]=1),ct[w]!==O&&(i.vertexAttribDivisor(w,O),ct[w]=O)}function N(){const w=o.newAttributes,O=o.enabledAttributes;for(let rt=0,Q=O.length;rt<Q;rt++)O[rt]!==w[rt]&&(i.disableVertexAttribArray(rt),O[rt]=0)}function L(w,O,rt,Q,ct,dt,at){at===!0?i.vertexAttribIPointer(w,O,rt,ct,dt):i.vertexAttribPointer(w,O,rt,Q,ct,dt)}function P(w,O,rt,Q){A();const ct=Q.attributes,dt=rt.getAttributes(),at=O.defaultAttributeValues;for(const ut in dt){const J=dt[ut];if(J.location>=0){let St=ct[ut];if(St===void 0&&(ut==="instanceMatrix"&&w.instanceMatrix&&(St=w.instanceMatrix),ut==="instanceColor"&&w.instanceColor&&(St=w.instanceColor)),St!==void 0){const At=St.normalized,It=St.itemSize,oe=t.get(St);if(oe===void 0)continue;const Ae=oe.buffer,st=oe.type,_t=oe.bytesPerElement,Ut=st===i.INT||st===i.UNSIGNED_INT||St.gpuType===Ou;if(St.isInterleavedBufferAttribute){const Et=St.data,Ht=Et.stride,he=St.offset;if(Et.isInstancedInterleavedBuffer){for(let Zt=0;Zt<J.locationSize;Zt++)m(J.location+Zt,Et.meshPerAttribute);w.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=Et.meshPerAttribute*Et.count)}else for(let Zt=0;Zt<J.locationSize;Zt++)v(J.location+Zt);i.bindBuffer(i.ARRAY_BUFFER,Ae);for(let Zt=0;Zt<J.locationSize;Zt++)L(J.location+Zt,It/J.locationSize,st,At,Ht*_t,(he+It/J.locationSize*Zt)*_t,Ut)}else{if(St.isInstancedBufferAttribute){for(let Et=0;Et<J.locationSize;Et++)m(J.location+Et,St.meshPerAttribute);w.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=St.meshPerAttribute*St.count)}else for(let Et=0;Et<J.locationSize;Et++)v(J.location+Et);i.bindBuffer(i.ARRAY_BUFFER,Ae);for(let Et=0;Et<J.locationSize;Et++)L(J.location+Et,It/J.locationSize,st,At,It*_t,It/J.locationSize*Et*_t,Ut)}}else if(at!==void 0){const At=at[ut];if(At!==void 0)switch(At.length){case 2:i.vertexAttrib2fv(J.location,At);break;case 3:i.vertexAttrib3fv(J.location,At);break;case 4:i.vertexAttrib4fv(J.location,At);break;default:i.vertexAttrib1fv(J.location,At)}}}}N()}function W(){q();for(const w in r){const O=r[w];for(const rt in O){const Q=O[rt];for(const ct in Q)p(Q[ct].object),delete Q[ct];delete O[rt]}delete r[w]}}function B(w){if(r[w.id]===void 0)return;const O=r[w.id];for(const rt in O){const Q=O[rt];for(const ct in Q)p(Q[ct].object),delete Q[ct];delete O[rt]}delete r[w.id]}function F(w){for(const O in r){const rt=r[O];if(rt[w.id]===void 0)continue;const Q=rt[w.id];for(const ct in Q)p(Q[ct].object),delete Q[ct];delete rt[w.id]}}function q(){C(),c=!0,o!==a&&(o=a,d(o.object))}function C(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:u,reset:q,resetDefaultState:C,dispose:W,releaseStatesOfGeometry:B,releaseStatesOfProgram:F,initAttributes:A,enableAttribute:v,disableUnusedAttributes:N}}function nA(i,t,e){let r;function a(d){r=d}function o(d,p){i.drawArrays(r,d,p),e.update(p,r,1)}function c(d,p,_){_!==0&&(i.drawArraysInstanced(r,d,p,_),e.update(p,r,_))}function u(d,p,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,d,0,p,0,_);let x=0;for(let E=0;E<_;E++)x+=p[E];e.update(x,r,1)}function f(d,p,_,g){if(_===0)return;const x=t.get("WEBGL_multi_draw");if(x===null)for(let E=0;E<d.length;E++)c(d[E],p[E],g[E]);else{x.multiDrawArraysInstancedWEBGL(r,d,0,p,0,g,0,_);let E=0;for(let A=0;A<_;A++)E+=p[A]*g[A];e.update(E,r,1)}}this.setMode=a,this.render=o,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function iA(i,t,e,r){let a;function o(){if(a!==void 0)return a;if(t.has("EXT_texture_filter_anisotropic")===!0){const F=t.get("EXT_texture_filter_anisotropic");a=i.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function c(F){return!(F!==hi&&r.convert(F)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function u(F){const q=F===ua&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(F!==Gi&&r.convert(F)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==vi&&!q)}function f(F){if(F==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=e.precision!==void 0?e.precision:"highp";const p=f(d);p!==d&&(console.warn("THREE.WebGLRenderer:",d,"not supported, using",p,"instead."),d=p);const _=e.logarithmicDepthBuffer===!0,g=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),x=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),E=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=i.getParameter(i.MAX_TEXTURE_SIZE),v=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),N=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),L=i.getParameter(i.MAX_VARYING_VECTORS),P=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),W=E>0,B=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:f,textureFormatReadable:c,textureTypeReadable:u,precision:d,logarithmicDepthBuffer:_,reverseDepthBuffer:g,maxTextures:x,maxVertexTextures:E,maxTextureSize:A,maxCubemapSize:v,maxAttributes:m,maxVertexUniforms:N,maxVaryings:L,maxFragmentUniforms:P,vertexTextures:W,maxSamples:B}}function rA(i){const t=this;let e=null,r=0,a=!1,o=!1;const c=new or,u=new ie,f={value:null,needsUpdate:!1};this.uniform=f,this.numPlanes=0,this.numIntersection=0,this.init=function(_,g){const x=_.length!==0||g||r!==0||a;return a=g,r=_.length,x},this.beginShadows=function(){o=!0,p(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(_,g){e=p(_,g,0)},this.setState=function(_,g,x){const E=_.clippingPlanes,A=_.clipIntersection,v=_.clipShadows,m=i.get(_);if(!a||E===null||E.length===0||o&&!v)o?p(null):d();else{const N=o?0:r,L=N*4;let P=m.clippingState||null;f.value=P,P=p(E,g,L,x);for(let W=0;W!==L;++W)P[W]=e[W];m.clippingState=P,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=N}};function d(){f.value!==e&&(f.value=e,f.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function p(_,g,x,E){const A=_!==null?_.length:0;let v=null;if(A!==0){if(v=f.value,E!==!0||v===null){const m=x+A*4,N=g.matrixWorldInverse;u.getNormalMatrix(N),(v===null||v.length<m)&&(v=new Float32Array(m));for(let L=0,P=x;L!==A;++L,P+=4)c.copy(_[L]).applyMatrix4(N,u),c.normal.toArray(v,P),v[P+3]=c.constant}f.value=v,f.needsUpdate=!0}return t.numPlanes=A,t.numIntersection=0,v}}function sA(i){let t=new WeakMap;function e(c,u){return u===tu?c.mapping=bs:u===eu&&(c.mapping=As),c}function r(c){if(c&&c.isTexture){const u=c.mapping;if(u===tu||u===eu)if(t.has(c)){const f=t.get(c).texture;return e(f,c.mapping)}else{const f=c.image;if(f&&f.height>0){const d=new qS(f.height);return d.fromEquirectangularTexture(i,c),t.set(c,d),c.addEventListener("dispose",a),e(d.texture,c.mapping)}else return null}}return c}function a(c){const u=c.target;u.removeEventListener("dispose",a);const f=t.get(u);f!==void 0&&(t.delete(u),f.dispose())}function o(){t=new WeakMap}return{get:r,dispose:o}}const vs=4,Kd=[.125,.215,.35,.446,.526,.582],Dr=20,Uc=new dE,$d=new Wt;let Nc=null,Fc=0,Oc=0,Bc=!1;const Cr=(1+Math.sqrt(5))/2,ms=1/Cr,Jd=[new X(-Cr,ms,0),new X(Cr,ms,0),new X(-ms,0,Cr),new X(ms,0,Cr),new X(0,Cr,-ms),new X(0,Cr,ms),new X(-1,1,-1),new X(1,1,-1),new X(-1,1,1),new X(1,1,1)],aA=new X;class Qd{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,r=.1,a=100,o={}){const{size:c=256,position:u=aA}=o;Nc=this._renderer.getRenderTarget(),Fc=this._renderer.getActiveCubeFace(),Oc=this._renderer.getActiveMipmapLevel(),Bc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(c);const f=this._allocateTargets();return f.depthBuffer=!0,this._sceneToCubeUV(t,r,a,f,u),e>0&&this._blur(f,0,0,e),this._applyPMREM(f),this._cleanup(f),f}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ep(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=tp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Nc,Fc,Oc),this._renderer.xr.enabled=Bc,t.scissorTest=!1,Do(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===bs||t.mapping===As?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Nc=this._renderer.getRenderTarget(),Fc=this._renderer.getActiveCubeFace(),Oc=this._renderer.getActiveMipmapLevel(),Bc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=e||this._allocateTargets();return this._textureToCubeUV(t,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,r={magFilter:gi,minFilter:gi,generateMipmaps:!1,type:ua,format:hi,colorSpace:Cs,depthBuffer:!1},a=jd(t,e,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=jd(t,e,r);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=oA(o)),this._blurMaterial=lA(o,t,e)}return a}_compileMaterial(t){const e=new ki(this._lodPlanes[0],t);this._renderer.compile(e,Uc)}_sceneToCubeUV(t,e,r,a,o){const f=new jn(90,1,e,r),d=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],_=this._renderer,g=_.autoClear,x=_.toneMapping;_.getClearColor($d),_.toneMapping=ur,_.autoClear=!1;const E=new Xu({name:"PMREM.Background",side:Ln,depthWrite:!1,depthTest:!1}),A=new ki(new da,E);let v=!1;const m=t.background;m?m.isColor&&(E.color.copy(m),t.background=null,v=!0):(E.color.copy($d),v=!0);for(let N=0;N<6;N++){const L=N%3;L===0?(f.up.set(0,d[N],0),f.position.set(o.x,o.y,o.z),f.lookAt(o.x+p[N],o.y,o.z)):L===1?(f.up.set(0,0,d[N]),f.position.set(o.x,o.y,o.z),f.lookAt(o.x,o.y+p[N],o.z)):(f.up.set(0,d[N],0),f.position.set(o.x,o.y,o.z),f.lookAt(o.x,o.y,o.z+p[N]));const P=this._cubeSize;Do(a,L*P,N>2?P:0,P,P),_.setRenderTarget(a),v&&_.render(A,f),_.render(t,f)}A.geometry.dispose(),A.material.dispose(),_.toneMapping=x,_.autoClear=g,t.background=m}_textureToCubeUV(t,e){const r=this._renderer,a=t.mapping===bs||t.mapping===As;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=ep()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=tp());const o=a?this._cubemapMaterial:this._equirectMaterial,c=new ki(this._lodPlanes[0],o),u=o.uniforms;u.envMap.value=t;const f=this._cubeSize;Do(e,0,0,3*f,2*f),r.setRenderTarget(e),r.render(c,Uc)}_applyPMREM(t){const e=this._renderer,r=e.autoClear;e.autoClear=!1;const a=this._lodPlanes.length;for(let o=1;o<a;o++){const c=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),u=Jd[(a-o-1)%Jd.length];this._blur(t,o-1,o,c,u)}e.autoClear=r}_blur(t,e,r,a,o){const c=this._pingPongRenderTarget;this._halfBlur(t,c,e,r,a,"latitudinal",o),this._halfBlur(c,t,r,r,a,"longitudinal",o)}_halfBlur(t,e,r,a,o,c,u){const f=this._renderer,d=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const p=3,_=new ki(this._lodPlanes[a],d),g=d.uniforms,x=this._sizeLods[r]-1,E=isFinite(o)?Math.PI/(2*x):2*Math.PI/(2*Dr-1),A=o/E,v=isFinite(o)?1+Math.floor(p*A):Dr;v>Dr&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${v} samples when the maximum is set to ${Dr}`);const m=[];let N=0;for(let F=0;F<Dr;++F){const q=F/A,C=Math.exp(-q*q/2);m.push(C),F===0?N+=C:F<v&&(N+=2*C)}for(let F=0;F<m.length;F++)m[F]=m[F]/N;g.envMap.value=t.texture,g.samples.value=v,g.weights.value=m,g.latitudinal.value=c==="latitudinal",u&&(g.poleAxis.value=u);const{_lodMax:L}=this;g.dTheta.value=E,g.mipInt.value=L-r;const P=this._sizeLods[a],W=3*P*(a>L-vs?a-L+vs:0),B=4*(this._cubeSize-P);Do(e,W,B,3*P,2*P),f.setRenderTarget(e),f.render(_,Uc)}}function oA(i){const t=[],e=[],r=[];let a=i;const o=i-vs+1+Kd.length;for(let c=0;c<o;c++){const u=Math.pow(2,a);e.push(u);let f=1/u;c>i-vs?f=Kd[c-i+vs-1]:c===0&&(f=0),r.push(f);const d=1/(u-2),p=-d,_=1+d,g=[p,p,_,p,_,_,p,p,_,_,p,_],x=6,E=6,A=3,v=2,m=1,N=new Float32Array(A*E*x),L=new Float32Array(v*E*x),P=new Float32Array(m*E*x);for(let B=0;B<x;B++){const F=B%3*2/3-1,q=B>2?0:-1,C=[F,q,0,F+2/3,q,0,F+2/3,q+1,0,F,q,0,F+2/3,q+1,0,F,q+1,0];N.set(C,A*E*B),L.set(g,v*E*B);const w=[B,B,B,B,B,B];P.set(w,m*E*B)}const W=new yi;W.setAttribute("position",new xi(N,A)),W.setAttribute("uv",new xi(L,v)),W.setAttribute("faceIndex",new xi(P,m)),t.push(W),a>vs&&a--}return{lodPlanes:t,sizeLods:e,sigmas:r}}function jd(i,t,e){const r=new Nr(i,t,e);return r.texture.mapping=Zo,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Do(i,t,e,r,a){i.viewport.set(t,e,r,a),i.scissor.set(t,e,r,a)}function lA(i,t,e){const r=new Float32Array(Dr),a=new X(0,1,0);return new Mi({name:"SphericalGaussianBlur",defines:{n:Dr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:Zu(),fragmentShader:`

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
		`,blending:cr,depthTest:!1,depthWrite:!1})}function tp(){return new Mi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Zu(),fragmentShader:`

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
		`,blending:cr,depthTest:!1,depthWrite:!1})}function ep(){return new Mi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Zu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:cr,depthTest:!1,depthWrite:!1})}function Zu(){return`

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
	`}function cA(i){let t=new WeakMap,e=null;function r(u){if(u&&u.isTexture){const f=u.mapping,d=f===tu||f===eu,p=f===bs||f===As;if(d||p){let _=t.get(u);const g=_!==void 0?_.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==g)return e===null&&(e=new Qd(i)),_=d?e.fromEquirectangular(u,_):e.fromCubemap(u,_),_.texture.pmremVersion=u.pmremVersion,t.set(u,_),_.texture;if(_!==void 0)return _.texture;{const x=u.image;return d&&x&&x.height>0||p&&x&&a(x)?(e===null&&(e=new Qd(i)),_=d?e.fromEquirectangular(u):e.fromCubemap(u),_.texture.pmremVersion=u.pmremVersion,t.set(u,_),u.addEventListener("dispose",o),_.texture):null}}}return u}function a(u){let f=0;const d=6;for(let p=0;p<d;p++)u[p]!==void 0&&f++;return f===d}function o(u){const f=u.target;f.removeEventListener("dispose",o);const d=t.get(f);d!==void 0&&(t.delete(f),d.dispose())}function c(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:r,dispose:c}}function uA(i){const t={};function e(r){if(t[r]!==void 0)return t[r];let a;switch(r){case"WEBGL_depth_texture":a=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=i.getExtension(r)}return t[r]=a,a}return{has:function(r){return e(r)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(r){const a=e(r);return a===null&&Rr("THREE.WebGLRenderer: "+r+" extension not supported."),a}}}function hA(i,t,e,r){const a={},o=new WeakMap;function c(_){const g=_.target;g.index!==null&&t.remove(g.index);for(const E in g.attributes)t.remove(g.attributes[E]);g.removeEventListener("dispose",c),delete a[g.id];const x=o.get(g);x&&(t.remove(x),o.delete(g)),r.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,e.memory.geometries--}function u(_,g){return a[g.id]===!0||(g.addEventListener("dispose",c),a[g.id]=!0,e.memory.geometries++),g}function f(_){const g=_.attributes;for(const x in g)t.update(g[x],i.ARRAY_BUFFER)}function d(_){const g=[],x=_.index,E=_.attributes.position;let A=0;if(x!==null){const N=x.array;A=x.version;for(let L=0,P=N.length;L<P;L+=3){const W=N[L+0],B=N[L+1],F=N[L+2];g.push(W,B,B,F,F,W)}}else if(E!==void 0){const N=E.array;A=E.version;for(let L=0,P=N.length/3-1;L<P;L+=3){const W=L+0,B=L+1,F=L+2;g.push(W,B,B,F,F,W)}}else return;const v=new(Gp(g)?Zp:Yp)(g,1);v.version=A;const m=o.get(_);m&&t.remove(m),o.set(_,v)}function p(_){const g=o.get(_);if(g){const x=_.index;x!==null&&g.version<x.version&&d(_)}else d(_);return o.get(_)}return{get:u,update:f,getWireframeAttribute:p}}function fA(i,t,e){let r;function a(g){r=g}let o,c;function u(g){o=g.type,c=g.bytesPerElement}function f(g,x){i.drawElements(r,x,o,g*c),e.update(x,r,1)}function d(g,x,E){E!==0&&(i.drawElementsInstanced(r,x,o,g*c,E),e.update(x,r,E))}function p(g,x,E){if(E===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,x,0,o,g,0,E);let v=0;for(let m=0;m<E;m++)v+=x[m];e.update(v,r,1)}function _(g,x,E,A){if(E===0)return;const v=t.get("WEBGL_multi_draw");if(v===null)for(let m=0;m<g.length;m++)d(g[m]/c,x[m],A[m]);else{v.multiDrawElementsInstancedWEBGL(r,x,0,o,g,0,A,0,E);let m=0;for(let N=0;N<E;N++)m+=x[N]*A[N];e.update(m,r,1)}}this.setMode=a,this.setIndex=u,this.render=f,this.renderInstances=d,this.renderMultiDraw=p,this.renderMultiDrawInstances=_}function dA(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function r(o,c,u){switch(e.calls++,c){case i.TRIANGLES:e.triangles+=u*(o/3);break;case i.LINES:e.lines+=u*(o/2);break;case i.LINE_STRIP:e.lines+=u*(o-1);break;case i.LINE_LOOP:e.lines+=u*o;break;case i.POINTS:e.points+=u*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",c);break}}function a(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:a,update:r}}function pA(i,t,e){const r=new WeakMap,a=new Xe;function o(c,u,f){const d=c.morphTargetInfluences,p=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,_=p!==void 0?p.length:0;let g=r.get(u);if(g===void 0||g.count!==_){let w=function(){q.dispose(),r.delete(u),u.removeEventListener("dispose",w)};var x=w;g!==void 0&&g.texture.dispose();const E=u.morphAttributes.position!==void 0,A=u.morphAttributes.normal!==void 0,v=u.morphAttributes.color!==void 0,m=u.morphAttributes.position||[],N=u.morphAttributes.normal||[],L=u.morphAttributes.color||[];let P=0;E===!0&&(P=1),A===!0&&(P=2),v===!0&&(P=3);let W=u.attributes.position.count*P,B=1;W>t.maxTextureSize&&(B=Math.ceil(W/t.maxTextureSize),W=t.maxTextureSize);const F=new Float32Array(W*B*4*_),q=new Wp(F,W,B,_);q.type=vi,q.needsUpdate=!0;const C=P*4;for(let O=0;O<_;O++){const rt=m[O],Q=N[O],ct=L[O],dt=W*B*4*O;for(let at=0;at<rt.count;at++){const ut=at*C;E===!0&&(a.fromBufferAttribute(rt,at),F[dt+ut+0]=a.x,F[dt+ut+1]=a.y,F[dt+ut+2]=a.z,F[dt+ut+3]=0),A===!0&&(a.fromBufferAttribute(Q,at),F[dt+ut+4]=a.x,F[dt+ut+5]=a.y,F[dt+ut+6]=a.z,F[dt+ut+7]=0),v===!0&&(a.fromBufferAttribute(ct,at),F[dt+ut+8]=a.x,F[dt+ut+9]=a.y,F[dt+ut+10]=a.z,F[dt+ut+11]=ct.itemSize===4?a.w:1)}}g={count:_,texture:q,size:new $t(W,B)},r.set(u,g),u.addEventListener("dispose",w)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)f.getUniforms().setValue(i,"morphTexture",c.morphTexture,e);else{let E=0;for(let v=0;v<d.length;v++)E+=d[v];const A=u.morphTargetsRelative?1:1-E;f.getUniforms().setValue(i,"morphTargetBaseInfluence",A),f.getUniforms().setValue(i,"morphTargetInfluences",d)}f.getUniforms().setValue(i,"morphTargetsTexture",g.texture,e),f.getUniforms().setValue(i,"morphTargetsTextureSize",g.size)}return{update:o}}function mA(i,t,e,r){let a=new WeakMap;function o(f){const d=r.render.frame,p=f.geometry,_=t.get(f,p);if(a.get(_)!==d&&(t.update(_),a.set(_,d)),f.isInstancedMesh&&(f.hasEventListener("dispose",u)===!1&&f.addEventListener("dispose",u),a.get(f)!==d&&(e.update(f.instanceMatrix,i.ARRAY_BUFFER),f.instanceColor!==null&&e.update(f.instanceColor,i.ARRAY_BUFFER),a.set(f,d))),f.isSkinnedMesh){const g=f.skeleton;a.get(g)!==d&&(g.update(),a.set(g,d))}return _}function c(){a=new WeakMap}function u(f){const d=f.target;d.removeEventListener("dispose",u),e.remove(d.instanceMatrix),d.instanceColor!==null&&e.remove(d.instanceColor)}return{update:o,dispose:c}}const am=new un,np=new tm(1,1),om=new Wp,lm=new CS,cm=new Jp,ip=[],rp=[],sp=new Float32Array(16),ap=new Float32Array(9),op=new Float32Array(4);function Us(i,t,e){const r=i[0];if(r<=0||r>0)return i;const a=t*e;let o=ip[a];if(o===void 0&&(o=new Float32Array(a),ip[a]=o),t!==0){r.toArray(o,0);for(let c=1,u=0;c!==t;++c)u+=e,i[c].toArray(o,u)}return o}function tn(i,t){if(i.length!==t.length)return!1;for(let e=0,r=i.length;e<r;e++)if(i[e]!==t[e])return!1;return!0}function en(i,t){for(let e=0,r=t.length;e<r;e++)i[e]=t[e]}function jo(i,t){let e=rp[t];e===void 0&&(e=new Int32Array(t),rp[t]=e);for(let r=0;r!==t;++r)e[r]=i.allocateTextureUnit();return e}function _A(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function gA(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(tn(e,t))return;i.uniform2fv(this.addr,t),en(e,t)}}function vA(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(tn(e,t))return;i.uniform3fv(this.addr,t),en(e,t)}}function xA(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(tn(e,t))return;i.uniform4fv(this.addr,t),en(e,t)}}function MA(i,t){const e=this.cache,r=t.elements;if(r===void 0){if(tn(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),en(e,t)}else{if(tn(e,r))return;op.set(r),i.uniformMatrix2fv(this.addr,!1,op),en(e,r)}}function yA(i,t){const e=this.cache,r=t.elements;if(r===void 0){if(tn(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),en(e,t)}else{if(tn(e,r))return;ap.set(r),i.uniformMatrix3fv(this.addr,!1,ap),en(e,r)}}function SA(i,t){const e=this.cache,r=t.elements;if(r===void 0){if(tn(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),en(e,t)}else{if(tn(e,r))return;sp.set(r),i.uniformMatrix4fv(this.addr,!1,sp),en(e,r)}}function EA(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function TA(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(tn(e,t))return;i.uniform2iv(this.addr,t),en(e,t)}}function bA(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(tn(e,t))return;i.uniform3iv(this.addr,t),en(e,t)}}function AA(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(tn(e,t))return;i.uniform4iv(this.addr,t),en(e,t)}}function wA(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function RA(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(tn(e,t))return;i.uniform2uiv(this.addr,t),en(e,t)}}function CA(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(tn(e,t))return;i.uniform3uiv(this.addr,t),en(e,t)}}function PA(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(tn(e,t))return;i.uniform4uiv(this.addr,t),en(e,t)}}function DA(i,t,e){const r=this.cache,a=e.allocateTextureUnit();r[0]!==a&&(i.uniform1i(this.addr,a),r[0]=a);let o;this.type===i.SAMPLER_2D_SHADOW?(np.compareFunction=kp,o=np):o=am,e.setTexture2D(t||o,a)}function LA(i,t,e){const r=this.cache,a=e.allocateTextureUnit();r[0]!==a&&(i.uniform1i(this.addr,a),r[0]=a),e.setTexture3D(t||lm,a)}function IA(i,t,e){const r=this.cache,a=e.allocateTextureUnit();r[0]!==a&&(i.uniform1i(this.addr,a),r[0]=a),e.setTextureCube(t||cm,a)}function UA(i,t,e){const r=this.cache,a=e.allocateTextureUnit();r[0]!==a&&(i.uniform1i(this.addr,a),r[0]=a),e.setTexture2DArray(t||om,a)}function NA(i){switch(i){case 5126:return _A;case 35664:return gA;case 35665:return vA;case 35666:return xA;case 35674:return MA;case 35675:return yA;case 35676:return SA;case 5124:case 35670:return EA;case 35667:case 35671:return TA;case 35668:case 35672:return bA;case 35669:case 35673:return AA;case 5125:return wA;case 36294:return RA;case 36295:return CA;case 36296:return PA;case 35678:case 36198:case 36298:case 36306:case 35682:return DA;case 35679:case 36299:case 36307:return LA;case 35680:case 36300:case 36308:case 36293:return IA;case 36289:case 36303:case 36311:case 36292:return UA}}function FA(i,t){i.uniform1fv(this.addr,t)}function OA(i,t){const e=Us(t,this.size,2);i.uniform2fv(this.addr,e)}function BA(i,t){const e=Us(t,this.size,3);i.uniform3fv(this.addr,e)}function zA(i,t){const e=Us(t,this.size,4);i.uniform4fv(this.addr,e)}function HA(i,t){const e=Us(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function kA(i,t){const e=Us(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function VA(i,t){const e=Us(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function GA(i,t){i.uniform1iv(this.addr,t)}function WA(i,t){i.uniform2iv(this.addr,t)}function XA(i,t){i.uniform3iv(this.addr,t)}function qA(i,t){i.uniform4iv(this.addr,t)}function YA(i,t){i.uniform1uiv(this.addr,t)}function ZA(i,t){i.uniform2uiv(this.addr,t)}function KA(i,t){i.uniform3uiv(this.addr,t)}function $A(i,t){i.uniform4uiv(this.addr,t)}function JA(i,t,e){const r=this.cache,a=t.length,o=jo(e,a);tn(r,o)||(i.uniform1iv(this.addr,o),en(r,o));for(let c=0;c!==a;++c)e.setTexture2D(t[c]||am,o[c])}function QA(i,t,e){const r=this.cache,a=t.length,o=jo(e,a);tn(r,o)||(i.uniform1iv(this.addr,o),en(r,o));for(let c=0;c!==a;++c)e.setTexture3D(t[c]||lm,o[c])}function jA(i,t,e){const r=this.cache,a=t.length,o=jo(e,a);tn(r,o)||(i.uniform1iv(this.addr,o),en(r,o));for(let c=0;c!==a;++c)e.setTextureCube(t[c]||cm,o[c])}function tw(i,t,e){const r=this.cache,a=t.length,o=jo(e,a);tn(r,o)||(i.uniform1iv(this.addr,o),en(r,o));for(let c=0;c!==a;++c)e.setTexture2DArray(t[c]||om,o[c])}function ew(i){switch(i){case 5126:return FA;case 35664:return OA;case 35665:return BA;case 35666:return zA;case 35674:return HA;case 35675:return kA;case 35676:return VA;case 5124:case 35670:return GA;case 35667:case 35671:return WA;case 35668:case 35672:return XA;case 35669:case 35673:return qA;case 5125:return YA;case 36294:return ZA;case 36295:return KA;case 36296:return $A;case 35678:case 36198:case 36298:case 36306:case 35682:return JA;case 35679:case 36299:case 36307:return QA;case 35680:case 36300:case 36308:case 36293:return jA;case 36289:case 36303:case 36311:case 36292:return tw}}class nw{constructor(t,e,r){this.id=t,this.addr=r,this.cache=[],this.type=e.type,this.setValue=NA(e.type)}}class iw{constructor(t,e,r){this.id=t,this.addr=r,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=ew(e.type)}}class rw{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,r){const a=this.seq;for(let o=0,c=a.length;o!==c;++o){const u=a[o];u.setValue(t,e[u.id],r)}}}const zc=/(\w+)(\])?(\[|\.)?/g;function lp(i,t){i.seq.push(t),i.map[t.id]=t}function sw(i,t,e){const r=i.name,a=r.length;for(zc.lastIndex=0;;){const o=zc.exec(r),c=zc.lastIndex;let u=o[1];const f=o[2]==="]",d=o[3];if(f&&(u=u|0),d===void 0||d==="["&&c+2===a){lp(e,d===void 0?new nw(u,i,t):new iw(u,i,t));break}else{let _=e.map[u];_===void 0&&(_=new rw(u),lp(e,_)),e=_}}}class zo{constructor(t,e){this.seq=[],this.map={};const r=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<r;++a){const o=t.getActiveUniform(e,a),c=t.getUniformLocation(e,o.name);sw(o,c,this)}}setValue(t,e,r,a){const o=this.map[e];o!==void 0&&o.setValue(t,r,a)}setOptional(t,e,r){const a=e[r];a!==void 0&&this.setValue(t,r,a)}static upload(t,e,r,a){for(let o=0,c=e.length;o!==c;++o){const u=e[o],f=r[u.id];f.needsUpdate!==!1&&u.setValue(t,f.value,a)}}static seqWithValue(t,e){const r=[];for(let a=0,o=t.length;a!==o;++a){const c=t[a];c.id in e&&r.push(c)}return r}}function cp(i,t,e){const r=i.createShader(t);return i.shaderSource(r,e),i.compileShader(r),r}const aw=37297;let ow=0;function lw(i,t){const e=i.split(`
`),r=[],a=Math.max(t-6,0),o=Math.min(t+6,e.length);for(let c=a;c<o;c++){const u=c+1;r.push(`${u===t?">":" "} ${u}: ${e[c]}`)}return r.join(`
`)}const up=new ie;function cw(i){Se._getMatrix(up,Se.workingColorSpace,i);const t=`mat3( ${up.elements.map(e=>e.toFixed(4))} )`;switch(Se.getTransfer(i)){case Ho:return[t,"LinearTransferOETF"];case Pe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function hp(i,t,e){const r=i.getShaderParameter(t,i.COMPILE_STATUS),a=i.getShaderInfoLog(t).trim();if(r&&a==="")return"";const o=/ERROR: 0:(\d+)/.exec(a);if(o){const c=parseInt(o[1]);return e.toUpperCase()+`

`+a+`

`+lw(i.getShaderSource(t),c)}else return a}function uw(i,t){const e=cw(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function hw(i,t){let e;switch(t){case Hy:e="Linear";break;case ky:e="Reinhard";break;case Vy:e="Cineon";break;case Gy:e="ACESFilmic";break;case Xy:e="AgX";break;case qy:e="Neutral";break;case Wy:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Lo=new X;function fw(){Se.getLuminanceCoefficients(Lo);const i=Lo.x.toFixed(4),t=Lo.y.toFixed(4),e=Lo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function dw(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ia).join(`
`)}function pw(i){const t=[];for(const e in i){const r=i[e];r!==!1&&t.push("#define "+e+" "+r)}return t.join(`
`)}function mw(i,t){const e={},r=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let a=0;a<r;a++){const o=i.getActiveAttrib(t,a),c=o.name;let u=1;o.type===i.FLOAT_MAT2&&(u=2),o.type===i.FLOAT_MAT3&&(u=3),o.type===i.FLOAT_MAT4&&(u=4),e[c]={type:o.type,location:i.getAttribLocation(t,c),locationSize:u}}return e}function ia(i){return i!==""}function fp(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function dp(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const _w=/^[ \t]*#include +<([\w\d./]+)>/gm;function Du(i){return i.replace(_w,vw)}const gw=new Map;function vw(i,t){let e=ae[t];if(e===void 0){const r=gw.get(t);if(r!==void 0)e=ae[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,r);else throw new Error("Can not resolve #include <"+t+">")}return Du(e)}const xw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function pp(i){return i.replace(xw,Mw)}function Mw(i,t,e,r){let a="";for(let o=parseInt(t);o<parseInt(e);o++)a+=r.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return a}function mp(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function yw(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Cp?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===xy?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Bi&&(t="SHADOWMAP_TYPE_VSM"),t}function Sw(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case bs:case As:t="ENVMAP_TYPE_CUBE";break;case Zo:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Ew(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case As:t="ENVMAP_MODE_REFRACTION";break}return t}function Tw(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Yo:t="ENVMAP_BLENDING_MULTIPLY";break;case By:t="ENVMAP_BLENDING_MIX";break;case zy:t="ENVMAP_BLENDING_ADD";break}return t}function bw(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:r,maxMip:e}}function Aw(i,t,e,r){const a=i.getContext(),o=e.defines;let c=e.vertexShader,u=e.fragmentShader;const f=yw(e),d=Sw(e),p=Ew(e),_=Tw(e),g=bw(e),x=dw(e),E=pw(o),A=a.createProgram();let v,m,N=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(v=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,E].filter(ia).join(`
`),v.length>0&&(v+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,E].filter(ia).join(`
`),m.length>0&&(m+=`
`)):(v=[mp(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,E,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+p:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+f:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ia).join(`
`),m=[mp(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,E,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+d:"",e.envMap?"#define "+p:"",e.envMap?"#define "+_:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+f:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ur?"#define TONE_MAPPING":"",e.toneMapping!==ur?ae.tonemapping_pars_fragment:"",e.toneMapping!==ur?hw("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ae.colorspace_pars_fragment,uw("linearToOutputTexel",e.outputColorSpace),fw(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ia).join(`
`)),c=Du(c),c=fp(c,e),c=dp(c,e),u=Du(u),u=fp(u,e),u=dp(u,e),c=pp(c),u=pp(u),e.isRawShaderMaterial!==!0&&(N=`#version 300 es
`,v=[x,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,m=["#define varying in",e.glslVersion===Md?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Md?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const L=N+v+c,P=N+m+u,W=cp(a,a.VERTEX_SHADER,L),B=cp(a,a.FRAGMENT_SHADER,P);a.attachShader(A,W),a.attachShader(A,B),e.index0AttributeName!==void 0?a.bindAttribLocation(A,0,e.index0AttributeName):e.morphTargets===!0&&a.bindAttribLocation(A,0,"position"),a.linkProgram(A);function F(O){if(i.debug.checkShaderErrors){const rt=a.getProgramInfoLog(A).trim(),Q=a.getShaderInfoLog(W).trim(),ct=a.getShaderInfoLog(B).trim();let dt=!0,at=!0;if(a.getProgramParameter(A,a.LINK_STATUS)===!1)if(dt=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(a,A,W,B);else{const ut=hp(a,W,"vertex"),J=hp(a,B,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(A,a.VALIDATE_STATUS)+`

Material Name: `+O.name+`
Material Type: `+O.type+`

Program Info Log: `+rt+`
`+ut+`
`+J)}else rt!==""?console.warn("THREE.WebGLProgram: Program Info Log:",rt):(Q===""||ct==="")&&(at=!1);at&&(O.diagnostics={runnable:dt,programLog:rt,vertexShader:{log:Q,prefix:v},fragmentShader:{log:ct,prefix:m}})}a.deleteShader(W),a.deleteShader(B),q=new zo(a,A),C=mw(a,A)}let q;this.getUniforms=function(){return q===void 0&&F(this),q};let C;this.getAttributes=function(){return C===void 0&&F(this),C};let w=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=a.getProgramParameter(A,aw)),w},this.destroy=function(){r.releaseStatesOfProgram(this),a.deleteProgram(A),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=ow++,this.cacheKey=t,this.usedTimes=1,this.program=A,this.vertexShader=W,this.fragmentShader=B,this}let ww=0;class Rw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,r=t.fragmentShader,a=this._getShaderStage(e),o=this._getShaderStage(r),c=this._getShaderCacheForMaterial(t);return c.has(a)===!1&&(c.add(a),a.usedTimes++),c.has(o)===!1&&(c.add(o),o.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const r of e)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let r=e.get(t);return r===void 0&&(r=new Set,e.set(t,r)),r}_getShaderStage(t){const e=this.shaderCache;let r=e.get(t);return r===void 0&&(r=new Cw(t),e.set(t,r)),r}}class Cw{constructor(t){this.id=ww++,this.code=t,this.usedTimes=0}}function Pw(i,t,e,r,a,o,c){const u=new Xp,f=new Rw,d=new Set,p=[],_=a.logarithmicDepthBuffer,g=a.vertexTextures;let x=a.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(C){return d.add(C),C===0?"uv":`uv${C}`}function v(C,w,O,rt,Q){const ct=rt.fog,dt=Q.geometry,at=C.isMeshStandardMaterial?rt.environment:null,ut=(C.isMeshStandardMaterial?e:t).get(C.envMap||at),J=ut&&ut.mapping===Zo?ut.image.height:null,St=E[C.type];C.precision!==null&&(x=a.getMaxPrecision(C.precision),x!==C.precision&&console.warn("THREE.WebGLProgram.getParameters:",C.precision,"not supported, using",x,"instead."));const At=dt.morphAttributes.position||dt.morphAttributes.normal||dt.morphAttributes.color,It=At!==void 0?At.length:0;let oe=0;dt.morphAttributes.position!==void 0&&(oe=1),dt.morphAttributes.normal!==void 0&&(oe=2),dt.morphAttributes.color!==void 0&&(oe=3);let Ae,st,_t,Ut;if(St){const Ee=_i[St];Ae=Ee.vertexShader,st=Ee.fragmentShader}else Ae=C.vertexShader,st=C.fragmentShader,f.update(C),_t=f.getVertexShaderID(C),Ut=f.getFragmentShaderID(C);const Et=i.getRenderTarget(),Ht=i.state.buffers.depth.getReversed(),he=Q.isInstancedMesh===!0,Zt=Q.isBatchedMesh===!0,Ne=!!C.map,Re=!!C.matcap,fe=!!ut,I=!!C.aoMap,nn=!!C.lightMap,me=!!C.bumpMap,Qt=!!C.normalMap,Bt=!!C.displacementMap,Le=!!C.emissiveMap,Ft=!!C.metalnessMap,R=!!C.roughnessMap,y=C.anisotropy>0,Y=C.clearcoat>0,lt=C.dispersion>0,ht=C.iridescence>0,nt=C.sheen>0,Nt=C.transmission>0,gt=y&&!!C.anisotropyMap,wt=Y&&!!C.clearcoatMap,de=Y&&!!C.clearcoatNormalMap,mt=Y&&!!C.clearcoatRoughnessMap,Ct=ht&&!!C.iridescenceMap,Vt=ht&&!!C.iridescenceThicknessMap,Yt=nt&&!!C.sheenColorMap,Pt=nt&&!!C.sheenRoughnessMap,ue=!!C.specularMap,jt=!!C.specularColorMap,Ce=!!C.specularIntensityMap,z=Nt&&!!C.transmissionMap,Mt=Nt&&!!C.thicknessMap,j=!!C.gradientMap,ot=!!C.alphaMap,bt=C.alphaTest>0,Tt=!!C.alphaHash,ee=!!C.extensions;let ze=ur;C.toneMapped&&(Et===null||Et.isXRRenderTarget===!0)&&(ze=i.toneMapping);const Ke={shaderID:St,shaderType:C.type,shaderName:C.name,vertexShader:Ae,fragmentShader:st,defines:C.defines,customVertexShaderID:_t,customFragmentShaderID:Ut,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:x,batching:Zt,batchingColor:Zt&&Q._colorsTexture!==null,instancing:he,instancingColor:he&&Q.instanceColor!==null,instancingMorph:he&&Q.morphTexture!==null,supportsVertexTextures:g,outputColorSpace:Et===null?i.outputColorSpace:Et.isXRRenderTarget===!0?Et.texture.colorSpace:Cs,alphaToCoverage:!!C.alphaToCoverage,map:Ne,matcap:Re,envMap:fe,envMapMode:fe&&ut.mapping,envMapCubeUVHeight:J,aoMap:I,lightMap:nn,bumpMap:me,normalMap:Qt,displacementMap:g&&Bt,emissiveMap:Le,normalMapObjectSpace:Qt&&C.normalMapType===$y,normalMapTangentSpace:Qt&&C.normalMapType===Or,metalnessMap:Ft,roughnessMap:R,anisotropy:y,anisotropyMap:gt,clearcoat:Y,clearcoatMap:wt,clearcoatNormalMap:de,clearcoatRoughnessMap:mt,dispersion:lt,iridescence:ht,iridescenceMap:Ct,iridescenceThicknessMap:Vt,sheen:nt,sheenColorMap:Yt,sheenRoughnessMap:Pt,specularMap:ue,specularColorMap:jt,specularIntensityMap:Ce,transmission:Nt,transmissionMap:z,thicknessMap:Mt,gradientMap:j,opaque:C.transparent===!1&&C.blending===Ms&&C.alphaToCoverage===!1,alphaMap:ot,alphaTest:bt,alphaHash:Tt,combine:C.combine,mapUv:Ne&&A(C.map.channel),aoMapUv:I&&A(C.aoMap.channel),lightMapUv:nn&&A(C.lightMap.channel),bumpMapUv:me&&A(C.bumpMap.channel),normalMapUv:Qt&&A(C.normalMap.channel),displacementMapUv:Bt&&A(C.displacementMap.channel),emissiveMapUv:Le&&A(C.emissiveMap.channel),metalnessMapUv:Ft&&A(C.metalnessMap.channel),roughnessMapUv:R&&A(C.roughnessMap.channel),anisotropyMapUv:gt&&A(C.anisotropyMap.channel),clearcoatMapUv:wt&&A(C.clearcoatMap.channel),clearcoatNormalMapUv:de&&A(C.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:mt&&A(C.clearcoatRoughnessMap.channel),iridescenceMapUv:Ct&&A(C.iridescenceMap.channel),iridescenceThicknessMapUv:Vt&&A(C.iridescenceThicknessMap.channel),sheenColorMapUv:Yt&&A(C.sheenColorMap.channel),sheenRoughnessMapUv:Pt&&A(C.sheenRoughnessMap.channel),specularMapUv:ue&&A(C.specularMap.channel),specularColorMapUv:jt&&A(C.specularColorMap.channel),specularIntensityMapUv:Ce&&A(C.specularIntensityMap.channel),transmissionMapUv:z&&A(C.transmissionMap.channel),thicknessMapUv:Mt&&A(C.thicknessMap.channel),alphaMapUv:ot&&A(C.alphaMap.channel),vertexTangents:!!dt.attributes.tangent&&(Qt||y),vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!dt.attributes.color&&dt.attributes.color.itemSize===4,pointsUvs:Q.isPoints===!0&&!!dt.attributes.uv&&(Ne||ot),fog:!!ct,useFog:C.fog===!0,fogExp2:!!ct&&ct.isFogExp2,flatShading:C.flatShading===!0,sizeAttenuation:C.sizeAttenuation===!0,logarithmicDepthBuffer:_,reverseDepthBuffer:Ht,skinning:Q.isSkinnedMesh===!0,morphTargets:dt.morphAttributes.position!==void 0,morphNormals:dt.morphAttributes.normal!==void 0,morphColors:dt.morphAttributes.color!==void 0,morphTargetsCount:It,morphTextureStride:oe,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:C.dithering,shadowMapEnabled:i.shadowMap.enabled&&O.length>0,shadowMapType:i.shadowMap.type,toneMapping:ze,decodeVideoTexture:Ne&&C.map.isVideoTexture===!0&&Se.getTransfer(C.map.colorSpace)===Pe,decodeVideoTextureEmissive:Le&&C.emissiveMap.isVideoTexture===!0&&Se.getTransfer(C.emissiveMap.colorSpace)===Pe,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===zi,flipSided:C.side===Ln,useDepthPacking:C.depthPacking>=0,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionClipCullDistance:ee&&C.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ee&&C.extensions.multiDraw===!0||Zt)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:C.customProgramCacheKey()};return Ke.vertexUv1s=d.has(1),Ke.vertexUv2s=d.has(2),Ke.vertexUv3s=d.has(3),d.clear(),Ke}function m(C){const w=[];if(C.shaderID?w.push(C.shaderID):(w.push(C.customVertexShaderID),w.push(C.customFragmentShaderID)),C.defines!==void 0)for(const O in C.defines)w.push(O),w.push(C.defines[O]);return C.isRawShaderMaterial===!1&&(N(w,C),L(w,C),w.push(i.outputColorSpace)),w.push(C.customProgramCacheKey),w.join()}function N(C,w){C.push(w.precision),C.push(w.outputColorSpace),C.push(w.envMapMode),C.push(w.envMapCubeUVHeight),C.push(w.mapUv),C.push(w.alphaMapUv),C.push(w.lightMapUv),C.push(w.aoMapUv),C.push(w.bumpMapUv),C.push(w.normalMapUv),C.push(w.displacementMapUv),C.push(w.emissiveMapUv),C.push(w.metalnessMapUv),C.push(w.roughnessMapUv),C.push(w.anisotropyMapUv),C.push(w.clearcoatMapUv),C.push(w.clearcoatNormalMapUv),C.push(w.clearcoatRoughnessMapUv),C.push(w.iridescenceMapUv),C.push(w.iridescenceThicknessMapUv),C.push(w.sheenColorMapUv),C.push(w.sheenRoughnessMapUv),C.push(w.specularMapUv),C.push(w.specularColorMapUv),C.push(w.specularIntensityMapUv),C.push(w.transmissionMapUv),C.push(w.thicknessMapUv),C.push(w.combine),C.push(w.fogExp2),C.push(w.sizeAttenuation),C.push(w.morphTargetsCount),C.push(w.morphAttributeCount),C.push(w.numDirLights),C.push(w.numPointLights),C.push(w.numSpotLights),C.push(w.numSpotLightMaps),C.push(w.numHemiLights),C.push(w.numRectAreaLights),C.push(w.numDirLightShadows),C.push(w.numPointLightShadows),C.push(w.numSpotLightShadows),C.push(w.numSpotLightShadowsWithMaps),C.push(w.numLightProbes),C.push(w.shadowMapType),C.push(w.toneMapping),C.push(w.numClippingPlanes),C.push(w.numClipIntersection),C.push(w.depthPacking)}function L(C,w){u.disableAll(),w.supportsVertexTextures&&u.enable(0),w.instancing&&u.enable(1),w.instancingColor&&u.enable(2),w.instancingMorph&&u.enable(3),w.matcap&&u.enable(4),w.envMap&&u.enable(5),w.normalMapObjectSpace&&u.enable(6),w.normalMapTangentSpace&&u.enable(7),w.clearcoat&&u.enable(8),w.iridescence&&u.enable(9),w.alphaTest&&u.enable(10),w.vertexColors&&u.enable(11),w.vertexAlphas&&u.enable(12),w.vertexUv1s&&u.enable(13),w.vertexUv2s&&u.enable(14),w.vertexUv3s&&u.enable(15),w.vertexTangents&&u.enable(16),w.anisotropy&&u.enable(17),w.alphaHash&&u.enable(18),w.batching&&u.enable(19),w.dispersion&&u.enable(20),w.batchingColor&&u.enable(21),C.push(u.mask),u.disableAll(),w.fog&&u.enable(0),w.useFog&&u.enable(1),w.flatShading&&u.enable(2),w.logarithmicDepthBuffer&&u.enable(3),w.reverseDepthBuffer&&u.enable(4),w.skinning&&u.enable(5),w.morphTargets&&u.enable(6),w.morphNormals&&u.enable(7),w.morphColors&&u.enable(8),w.premultipliedAlpha&&u.enable(9),w.shadowMapEnabled&&u.enable(10),w.doubleSided&&u.enable(11),w.flipSided&&u.enable(12),w.useDepthPacking&&u.enable(13),w.dithering&&u.enable(14),w.transmission&&u.enable(15),w.sheen&&u.enable(16),w.opaque&&u.enable(17),w.pointsUvs&&u.enable(18),w.decodeVideoTexture&&u.enable(19),w.decodeVideoTextureEmissive&&u.enable(20),w.alphaToCoverage&&u.enable(21),C.push(u.mask)}function P(C){const w=E[C.type];let O;if(w){const rt=_i[w];O=VS.clone(rt.uniforms)}else O=C.uniforms;return O}function W(C,w){let O;for(let rt=0,Q=p.length;rt<Q;rt++){const ct=p[rt];if(ct.cacheKey===w){O=ct,++O.usedTimes;break}}return O===void 0&&(O=new Aw(i,w,C,o),p.push(O)),O}function B(C){if(--C.usedTimes===0){const w=p.indexOf(C);p[w]=p[p.length-1],p.pop(),C.destroy()}}function F(C){f.remove(C)}function q(){f.dispose()}return{getParameters:v,getProgramCacheKey:m,getUniforms:P,acquireProgram:W,releaseProgram:B,releaseShaderCache:F,programs:p,dispose:q}}function Dw(){let i=new WeakMap;function t(c){return i.has(c)}function e(c){let u=i.get(c);return u===void 0&&(u={},i.set(c,u)),u}function r(c){i.delete(c)}function a(c,u,f){i.get(c)[u]=f}function o(){i=new WeakMap}return{has:t,get:e,remove:r,update:a,dispose:o}}function Lw(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function _p(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function gp(){const i=[];let t=0;const e=[],r=[],a=[];function o(){t=0,e.length=0,r.length=0,a.length=0}function c(_,g,x,E,A,v){let m=i[t];return m===void 0?(m={id:_.id,object:_,geometry:g,material:x,groupOrder:E,renderOrder:_.renderOrder,z:A,group:v},i[t]=m):(m.id=_.id,m.object=_,m.geometry=g,m.material=x,m.groupOrder=E,m.renderOrder=_.renderOrder,m.z=A,m.group=v),t++,m}function u(_,g,x,E,A,v){const m=c(_,g,x,E,A,v);x.transmission>0?r.push(m):x.transparent===!0?a.push(m):e.push(m)}function f(_,g,x,E,A,v){const m=c(_,g,x,E,A,v);x.transmission>0?r.unshift(m):x.transparent===!0?a.unshift(m):e.unshift(m)}function d(_,g){e.length>1&&e.sort(_||Lw),r.length>1&&r.sort(g||_p),a.length>1&&a.sort(g||_p)}function p(){for(let _=t,g=i.length;_<g;_++){const x=i[_];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:e,transmissive:r,transparent:a,init:o,push:u,unshift:f,finish:p,sort:d}}function Iw(){let i=new WeakMap;function t(r,a){const o=i.get(r);let c;return o===void 0?(c=new gp,i.set(r,[c])):a>=o.length?(c=new gp,o.push(c)):c=o[a],c}function e(){i=new WeakMap}return{get:t,dispose:e}}function Uw(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new X,color:new Wt};break;case"SpotLight":e={position:new X,direction:new X,color:new Wt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new X,color:new Wt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new X,skyColor:new Wt,groundColor:new Wt};break;case"RectAreaLight":e={color:new Wt,position:new X,halfWidth:new X,halfHeight:new X};break}return i[t.id]=e,e}}}function Nw(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $t};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $t};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $t,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Fw=0;function Ow(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Bw(i){const t=new Uw,e=Nw(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)r.probe.push(new X);const a=new X,o=new Ge,c=new Ge;function u(d){let p=0,_=0,g=0;for(let C=0;C<9;C++)r.probe[C].set(0,0,0);let x=0,E=0,A=0,v=0,m=0,N=0,L=0,P=0,W=0,B=0,F=0;d.sort(Ow);for(let C=0,w=d.length;C<w;C++){const O=d[C],rt=O.color,Q=O.intensity,ct=O.distance,dt=O.shadow&&O.shadow.map?O.shadow.map.texture:null;if(O.isAmbientLight)p+=rt.r*Q,_+=rt.g*Q,g+=rt.b*Q;else if(O.isLightProbe){for(let at=0;at<9;at++)r.probe[at].addScaledVector(O.sh.coefficients[at],Q);F++}else if(O.isDirectionalLight){const at=t.get(O);if(at.color.copy(O.color).multiplyScalar(O.intensity),O.castShadow){const ut=O.shadow,J=e.get(O);J.shadowIntensity=ut.intensity,J.shadowBias=ut.bias,J.shadowNormalBias=ut.normalBias,J.shadowRadius=ut.radius,J.shadowMapSize=ut.mapSize,r.directionalShadow[x]=J,r.directionalShadowMap[x]=dt,r.directionalShadowMatrix[x]=O.shadow.matrix,N++}r.directional[x]=at,x++}else if(O.isSpotLight){const at=t.get(O);at.position.setFromMatrixPosition(O.matrixWorld),at.color.copy(rt).multiplyScalar(Q),at.distance=ct,at.coneCos=Math.cos(O.angle),at.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),at.decay=O.decay,r.spot[A]=at;const ut=O.shadow;if(O.map&&(r.spotLightMap[W]=O.map,W++,ut.updateMatrices(O),O.castShadow&&B++),r.spotLightMatrix[A]=ut.matrix,O.castShadow){const J=e.get(O);J.shadowIntensity=ut.intensity,J.shadowBias=ut.bias,J.shadowNormalBias=ut.normalBias,J.shadowRadius=ut.radius,J.shadowMapSize=ut.mapSize,r.spotShadow[A]=J,r.spotShadowMap[A]=dt,P++}A++}else if(O.isRectAreaLight){const at=t.get(O);at.color.copy(rt).multiplyScalar(Q),at.halfWidth.set(O.width*.5,0,0),at.halfHeight.set(0,O.height*.5,0),r.rectArea[v]=at,v++}else if(O.isPointLight){const at=t.get(O);if(at.color.copy(O.color).multiplyScalar(O.intensity),at.distance=O.distance,at.decay=O.decay,O.castShadow){const ut=O.shadow,J=e.get(O);J.shadowIntensity=ut.intensity,J.shadowBias=ut.bias,J.shadowNormalBias=ut.normalBias,J.shadowRadius=ut.radius,J.shadowMapSize=ut.mapSize,J.shadowCameraNear=ut.camera.near,J.shadowCameraFar=ut.camera.far,r.pointShadow[E]=J,r.pointShadowMap[E]=dt,r.pointShadowMatrix[E]=O.shadow.matrix,L++}r.point[E]=at,E++}else if(O.isHemisphereLight){const at=t.get(O);at.skyColor.copy(O.color).multiplyScalar(Q),at.groundColor.copy(O.groundColor).multiplyScalar(Q),r.hemi[m]=at,m++}}v>0&&(i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=xt.LTC_FLOAT_1,r.rectAreaLTC2=xt.LTC_FLOAT_2):(r.rectAreaLTC1=xt.LTC_HALF_1,r.rectAreaLTC2=xt.LTC_HALF_2)),r.ambient[0]=p,r.ambient[1]=_,r.ambient[2]=g;const q=r.hash;(q.directionalLength!==x||q.pointLength!==E||q.spotLength!==A||q.rectAreaLength!==v||q.hemiLength!==m||q.numDirectionalShadows!==N||q.numPointShadows!==L||q.numSpotShadows!==P||q.numSpotMaps!==W||q.numLightProbes!==F)&&(r.directional.length=x,r.spot.length=A,r.rectArea.length=v,r.point.length=E,r.hemi.length=m,r.directionalShadow.length=N,r.directionalShadowMap.length=N,r.pointShadow.length=L,r.pointShadowMap.length=L,r.spotShadow.length=P,r.spotShadowMap.length=P,r.directionalShadowMatrix.length=N,r.pointShadowMatrix.length=L,r.spotLightMatrix.length=P+W-B,r.spotLightMap.length=W,r.numSpotLightShadowsWithMaps=B,r.numLightProbes=F,q.directionalLength=x,q.pointLength=E,q.spotLength=A,q.rectAreaLength=v,q.hemiLength=m,q.numDirectionalShadows=N,q.numPointShadows=L,q.numSpotShadows=P,q.numSpotMaps=W,q.numLightProbes=F,r.version=Fw++)}function f(d,p){let _=0,g=0,x=0,E=0,A=0;const v=p.matrixWorldInverse;for(let m=0,N=d.length;m<N;m++){const L=d[m];if(L.isDirectionalLight){const P=r.directional[_];P.direction.setFromMatrixPosition(L.matrixWorld),a.setFromMatrixPosition(L.target.matrixWorld),P.direction.sub(a),P.direction.transformDirection(v),_++}else if(L.isSpotLight){const P=r.spot[x];P.position.setFromMatrixPosition(L.matrixWorld),P.position.applyMatrix4(v),P.direction.setFromMatrixPosition(L.matrixWorld),a.setFromMatrixPosition(L.target.matrixWorld),P.direction.sub(a),P.direction.transformDirection(v),x++}else if(L.isRectAreaLight){const P=r.rectArea[E];P.position.setFromMatrixPosition(L.matrixWorld),P.position.applyMatrix4(v),c.identity(),o.copy(L.matrixWorld),o.premultiply(v),c.extractRotation(o),P.halfWidth.set(L.width*.5,0,0),P.halfHeight.set(0,L.height*.5,0),P.halfWidth.applyMatrix4(c),P.halfHeight.applyMatrix4(c),E++}else if(L.isPointLight){const P=r.point[g];P.position.setFromMatrixPosition(L.matrixWorld),P.position.applyMatrix4(v),g++}else if(L.isHemisphereLight){const P=r.hemi[A];P.direction.setFromMatrixPosition(L.matrixWorld),P.direction.transformDirection(v),A++}}}return{setup:u,setupView:f,state:r}}function vp(i){const t=new Bw(i),e=[],r=[];function a(p){d.camera=p,e.length=0,r.length=0}function o(p){e.push(p)}function c(p){r.push(p)}function u(){t.setup(e)}function f(p){t.setupView(e,p)}const d={lightsArray:e,shadowsArray:r,camera:null,lights:t,transmissionRenderTarget:{}};return{init:a,state:d,setupLights:u,setupLightsView:f,pushLight:o,pushShadow:c}}function zw(i){let t=new WeakMap;function e(a,o=0){const c=t.get(a);let u;return c===void 0?(u=new vp(i),t.set(a,[u])):o>=c.length?(u=new vp(i),c.push(u)):u=c[o],u}function r(){t=new WeakMap}return{get:e,dispose:r}}const Hw=`void main() {
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
}`;function Vw(i,t,e){let r=new Qp;const a=new $t,o=new $t,c=new Xe,u=new nm({depthPacking:Ky}),f=new im,d={},p=e.maxTextureSize,_={[hr]:Ln,[Ln]:hr,[zi]:zi},g=new Mi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new $t},radius:{value:4}},vertexShader:Hw,fragmentShader:kw}),x=g.clone();x.defines.HORIZONTAL_PASS=1;const E=new yi;E.setAttribute("position",new xi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new ki(E,g),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Cp;let m=this.type;this.render=function(B,F,q){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||B.length===0)return;const C=i.getRenderTarget(),w=i.getActiveCubeFace(),O=i.getActiveMipmapLevel(),rt=i.state;rt.setBlending(cr),rt.buffers.color.setClear(1,1,1,1),rt.buffers.depth.setTest(!0),rt.setScissorTest(!1);const Q=m!==Bi&&this.type===Bi,ct=m===Bi&&this.type!==Bi;for(let dt=0,at=B.length;dt<at;dt++){const ut=B[dt],J=ut.shadow;if(J===void 0){console.warn("THREE.WebGLShadowMap:",ut,"has no shadow.");continue}if(J.autoUpdate===!1&&J.needsUpdate===!1)continue;a.copy(J.mapSize);const St=J.getFrameExtents();if(a.multiply(St),o.copy(J.mapSize),(a.x>p||a.y>p)&&(a.x>p&&(o.x=Math.floor(p/St.x),a.x=o.x*St.x,J.mapSize.x=o.x),a.y>p&&(o.y=Math.floor(p/St.y),a.y=o.y*St.y,J.mapSize.y=o.y)),J.map===null||Q===!0||ct===!0){const It=this.type!==Bi?{minFilter:fi,magFilter:fi}:{};J.map!==null&&J.map.dispose(),J.map=new Nr(a.x,a.y,It),J.map.texture.name=ut.name+".shadowMap",J.camera.updateProjectionMatrix()}i.setRenderTarget(J.map),i.clear();const At=J.getViewportCount();for(let It=0;It<At;It++){const oe=J.getViewport(It);c.set(o.x*oe.x,o.y*oe.y,o.x*oe.z,o.y*oe.w),rt.viewport(c),J.updateMatrices(ut,It),r=J.getFrustum(),P(F,q,J.camera,ut,this.type)}J.isPointLightShadow!==!0&&this.type===Bi&&N(J,q),J.needsUpdate=!1}m=this.type,v.needsUpdate=!1,i.setRenderTarget(C,w,O)};function N(B,F){const q=t.update(A);g.defines.VSM_SAMPLES!==B.blurSamples&&(g.defines.VSM_SAMPLES=B.blurSamples,x.defines.VSM_SAMPLES=B.blurSamples,g.needsUpdate=!0,x.needsUpdate=!0),B.mapPass===null&&(B.mapPass=new Nr(a.x,a.y)),g.uniforms.shadow_pass.value=B.map.texture,g.uniforms.resolution.value=B.mapSize,g.uniforms.radius.value=B.radius,i.setRenderTarget(B.mapPass),i.clear(),i.renderBufferDirect(F,null,q,g,A,null),x.uniforms.shadow_pass.value=B.mapPass.texture,x.uniforms.resolution.value=B.mapSize,x.uniforms.radius.value=B.radius,i.setRenderTarget(B.map),i.clear(),i.renderBufferDirect(F,null,q,x,A,null)}function L(B,F,q,C){let w=null;const O=q.isPointLight===!0?B.customDistanceMaterial:B.customDepthMaterial;if(O!==void 0)w=O;else if(w=q.isPointLight===!0?f:u,i.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0){const rt=w.uuid,Q=F.uuid;let ct=d[rt];ct===void 0&&(ct={},d[rt]=ct);let dt=ct[Q];dt===void 0&&(dt=w.clone(),ct[Q]=dt,F.addEventListener("dispose",W)),w=dt}if(w.visible=F.visible,w.wireframe=F.wireframe,C===Bi?w.side=F.shadowSide!==null?F.shadowSide:F.side:w.side=F.shadowSide!==null?F.shadowSide:_[F.side],w.alphaMap=F.alphaMap,w.alphaTest=F.alphaTest,w.map=F.map,w.clipShadows=F.clipShadows,w.clippingPlanes=F.clippingPlanes,w.clipIntersection=F.clipIntersection,w.displacementMap=F.displacementMap,w.displacementScale=F.displacementScale,w.displacementBias=F.displacementBias,w.wireframeLinewidth=F.wireframeLinewidth,w.linewidth=F.linewidth,q.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const rt=i.properties.get(w);rt.light=q}return w}function P(B,F,q,C,w){if(B.visible===!1)return;if(B.layers.test(F.layers)&&(B.isMesh||B.isLine||B.isPoints)&&(B.castShadow||B.receiveShadow&&w===Bi)&&(!B.frustumCulled||r.intersectsObject(B))){B.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,B.matrixWorld);const Q=t.update(B),ct=B.material;if(Array.isArray(ct)){const dt=Q.groups;for(let at=0,ut=dt.length;at<ut;at++){const J=dt[at],St=ct[J.materialIndex];if(St&&St.visible){const At=L(B,St,C,w);B.onBeforeShadow(i,B,F,q,Q,At,J),i.renderBufferDirect(q,null,Q,At,B,J),B.onAfterShadow(i,B,F,q,Q,At,J)}}}else if(ct.visible){const dt=L(B,ct,C,w);B.onBeforeShadow(i,B,F,q,Q,dt,null),i.renderBufferDirect(q,null,Q,dt,B,null),B.onAfterShadow(i,B,F,q,Q,dt,null)}}const rt=B.children;for(let Q=0,ct=rt.length;Q<ct;Q++)P(rt[Q],F,q,C,w)}function W(B){B.target.removeEventListener("dispose",W);for(const q in d){const C=d[q],w=B.target.uuid;w in C&&(C[w].dispose(),delete C[w])}}}const Gw={[Yc]:Zc,[Kc]:Qc,[$c]:jc,[Ts]:Jc,[Zc]:Yc,[Qc]:Kc,[jc]:$c,[Jc]:Ts};function Ww(i,t){function e(){let z=!1;const Mt=new Xe;let j=null;const ot=new Xe(0,0,0,0);return{setMask:function(bt){j!==bt&&!z&&(i.colorMask(bt,bt,bt,bt),j=bt)},setLocked:function(bt){z=bt},setClear:function(bt,Tt,ee,ze,Ke){Ke===!0&&(bt*=ze,Tt*=ze,ee*=ze),Mt.set(bt,Tt,ee,ze),ot.equals(Mt)===!1&&(i.clearColor(bt,Tt,ee,ze),ot.copy(Mt))},reset:function(){z=!1,j=null,ot.set(-1,0,0,0)}}}function r(){let z=!1,Mt=!1,j=null,ot=null,bt=null;return{setReversed:function(Tt){if(Mt!==Tt){const ee=t.get("EXT_clip_control");Mt?ee.clipControlEXT(ee.LOWER_LEFT_EXT,ee.ZERO_TO_ONE_EXT):ee.clipControlEXT(ee.LOWER_LEFT_EXT,ee.NEGATIVE_ONE_TO_ONE_EXT);const ze=bt;bt=null,this.setClear(ze)}Mt=Tt},getReversed:function(){return Mt},setTest:function(Tt){Tt?Et(i.DEPTH_TEST):Ht(i.DEPTH_TEST)},setMask:function(Tt){j!==Tt&&!z&&(i.depthMask(Tt),j=Tt)},setFunc:function(Tt){if(Mt&&(Tt=Gw[Tt]),ot!==Tt){switch(Tt){case Yc:i.depthFunc(i.NEVER);break;case Zc:i.depthFunc(i.ALWAYS);break;case Kc:i.depthFunc(i.LESS);break;case Ts:i.depthFunc(i.LEQUAL);break;case $c:i.depthFunc(i.EQUAL);break;case Jc:i.depthFunc(i.GEQUAL);break;case Qc:i.depthFunc(i.GREATER);break;case jc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ot=Tt}},setLocked:function(Tt){z=Tt},setClear:function(Tt){bt!==Tt&&(Mt&&(Tt=1-Tt),i.clearDepth(Tt),bt=Tt)},reset:function(){z=!1,j=null,ot=null,bt=null,Mt=!1}}}function a(){let z=!1,Mt=null,j=null,ot=null,bt=null,Tt=null,ee=null,ze=null,Ke=null;return{setTest:function(Ee){z||(Ee?Et(i.STENCIL_TEST):Ht(i.STENCIL_TEST))},setMask:function(Ee){Mt!==Ee&&!z&&(i.stencilMask(Ee),Mt=Ee)},setFunc:function(Ee,In,ei){(j!==Ee||ot!==In||bt!==ei)&&(i.stencilFunc(Ee,In,ei),j=Ee,ot=In,bt=ei)},setOp:function(Ee,In,ei){(Tt!==Ee||ee!==In||ze!==ei)&&(i.stencilOp(Ee,In,ei),Tt=Ee,ee=In,ze=ei)},setLocked:function(Ee){z=Ee},setClear:function(Ee){Ke!==Ee&&(i.clearStencil(Ee),Ke=Ee)},reset:function(){z=!1,Mt=null,j=null,ot=null,bt=null,Tt=null,ee=null,ze=null,Ke=null}}}const o=new e,c=new r,u=new a,f=new WeakMap,d=new WeakMap;let p={},_={},g=new WeakMap,x=[],E=null,A=!1,v=null,m=null,N=null,L=null,P=null,W=null,B=null,F=new Wt(0,0,0),q=0,C=!1,w=null,O=null,rt=null,Q=null,ct=null;const dt=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let at=!1,ut=0;const J=i.getParameter(i.VERSION);J.indexOf("WebGL")!==-1?(ut=parseFloat(/^WebGL (\d)/.exec(J)[1]),at=ut>=1):J.indexOf("OpenGL ES")!==-1&&(ut=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),at=ut>=2);let St=null,At={};const It=i.getParameter(i.SCISSOR_BOX),oe=i.getParameter(i.VIEWPORT),Ae=new Xe().fromArray(It),st=new Xe().fromArray(oe);function _t(z,Mt,j,ot){const bt=new Uint8Array(4),Tt=i.createTexture();i.bindTexture(z,Tt),i.texParameteri(z,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(z,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ee=0;ee<j;ee++)z===i.TEXTURE_3D||z===i.TEXTURE_2D_ARRAY?i.texImage3D(Mt,0,i.RGBA,1,1,ot,0,i.RGBA,i.UNSIGNED_BYTE,bt):i.texImage2D(Mt+ee,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,bt);return Tt}const Ut={};Ut[i.TEXTURE_2D]=_t(i.TEXTURE_2D,i.TEXTURE_2D,1),Ut[i.TEXTURE_CUBE_MAP]=_t(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ut[i.TEXTURE_2D_ARRAY]=_t(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Ut[i.TEXTURE_3D]=_t(i.TEXTURE_3D,i.TEXTURE_3D,1,1),o.setClear(0,0,0,1),c.setClear(1),u.setClear(0),Et(i.DEPTH_TEST),c.setFunc(Ts),me(!1),Qt(pd),Et(i.CULL_FACE),I(cr);function Et(z){p[z]!==!0&&(i.enable(z),p[z]=!0)}function Ht(z){p[z]!==!1&&(i.disable(z),p[z]=!1)}function he(z,Mt){return _[z]!==Mt?(i.bindFramebuffer(z,Mt),_[z]=Mt,z===i.DRAW_FRAMEBUFFER&&(_[i.FRAMEBUFFER]=Mt),z===i.FRAMEBUFFER&&(_[i.DRAW_FRAMEBUFFER]=Mt),!0):!1}function Zt(z,Mt){let j=x,ot=!1;if(z){j=g.get(Mt),j===void 0&&(j=[],g.set(Mt,j));const bt=z.textures;if(j.length!==bt.length||j[0]!==i.COLOR_ATTACHMENT0){for(let Tt=0,ee=bt.length;Tt<ee;Tt++)j[Tt]=i.COLOR_ATTACHMENT0+Tt;j.length=bt.length,ot=!0}}else j[0]!==i.BACK&&(j[0]=i.BACK,ot=!0);ot&&i.drawBuffers(j)}function Ne(z){return E!==z?(i.useProgram(z),E=z,!0):!1}const Re={[Pr]:i.FUNC_ADD,[yy]:i.FUNC_SUBTRACT,[Sy]:i.FUNC_REVERSE_SUBTRACT};Re[Ey]=i.MIN,Re[Ty]=i.MAX;const fe={[by]:i.ZERO,[Ay]:i.ONE,[wy]:i.SRC_COLOR,[Xc]:i.SRC_ALPHA,[Iy]:i.SRC_ALPHA_SATURATE,[Dy]:i.DST_COLOR,[Cy]:i.DST_ALPHA,[Ry]:i.ONE_MINUS_SRC_COLOR,[qc]:i.ONE_MINUS_SRC_ALPHA,[Ly]:i.ONE_MINUS_DST_COLOR,[Py]:i.ONE_MINUS_DST_ALPHA,[Uy]:i.CONSTANT_COLOR,[Ny]:i.ONE_MINUS_CONSTANT_COLOR,[Fy]:i.CONSTANT_ALPHA,[Oy]:i.ONE_MINUS_CONSTANT_ALPHA};function I(z,Mt,j,ot,bt,Tt,ee,ze,Ke,Ee){if(z===cr){A===!0&&(Ht(i.BLEND),A=!1);return}if(A===!1&&(Et(i.BLEND),A=!0),z!==My){if(z!==v||Ee!==C){if((m!==Pr||P!==Pr)&&(i.blendEquation(i.FUNC_ADD),m=Pr,P=Pr),Ee)switch(z){case Ms:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case md:i.blendFunc(i.ONE,i.ONE);break;case _d:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case gd:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}else switch(z){case Ms:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case md:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case _d:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case gd:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}N=null,L=null,W=null,B=null,F.set(0,0,0),q=0,v=z,C=Ee}return}bt=bt||Mt,Tt=Tt||j,ee=ee||ot,(Mt!==m||bt!==P)&&(i.blendEquationSeparate(Re[Mt],Re[bt]),m=Mt,P=bt),(j!==N||ot!==L||Tt!==W||ee!==B)&&(i.blendFuncSeparate(fe[j],fe[ot],fe[Tt],fe[ee]),N=j,L=ot,W=Tt,B=ee),(ze.equals(F)===!1||Ke!==q)&&(i.blendColor(ze.r,ze.g,ze.b,Ke),F.copy(ze),q=Ke),v=z,C=!1}function nn(z,Mt){z.side===zi?Ht(i.CULL_FACE):Et(i.CULL_FACE);let j=z.side===Ln;Mt&&(j=!j),me(j),z.blending===Ms&&z.transparent===!1?I(cr):I(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),c.setFunc(z.depthFunc),c.setTest(z.depthTest),c.setMask(z.depthWrite),o.setMask(z.colorWrite);const ot=z.stencilWrite;u.setTest(ot),ot&&(u.setMask(z.stencilWriteMask),u.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),u.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),Le(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?Et(i.SAMPLE_ALPHA_TO_COVERAGE):Ht(i.SAMPLE_ALPHA_TO_COVERAGE)}function me(z){w!==z&&(z?i.frontFace(i.CW):i.frontFace(i.CCW),w=z)}function Qt(z){z!==gy?(Et(i.CULL_FACE),z!==O&&(z===pd?i.cullFace(i.BACK):z===vy?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ht(i.CULL_FACE),O=z}function Bt(z){z!==rt&&(at&&i.lineWidth(z),rt=z)}function Le(z,Mt,j){z?(Et(i.POLYGON_OFFSET_FILL),(Q!==Mt||ct!==j)&&(i.polygonOffset(Mt,j),Q=Mt,ct=j)):Ht(i.POLYGON_OFFSET_FILL)}function Ft(z){z?Et(i.SCISSOR_TEST):Ht(i.SCISSOR_TEST)}function R(z){z===void 0&&(z=i.TEXTURE0+dt-1),St!==z&&(i.activeTexture(z),St=z)}function y(z,Mt,j){j===void 0&&(St===null?j=i.TEXTURE0+dt-1:j=St);let ot=At[j];ot===void 0&&(ot={type:void 0,texture:void 0},At[j]=ot),(ot.type!==z||ot.texture!==Mt)&&(St!==j&&(i.activeTexture(j),St=j),i.bindTexture(z,Mt||Ut[z]),ot.type=z,ot.texture=Mt)}function Y(){const z=At[St];z!==void 0&&z.type!==void 0&&(i.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function lt(){try{i.compressedTexImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ht(){try{i.compressedTexImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function nt(){try{i.texSubImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Nt(){try{i.texSubImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function gt(){try{i.compressedTexSubImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function wt(){try{i.compressedTexSubImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function de(){try{i.texStorage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function mt(){try{i.texStorage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ct(){try{i.texImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Vt(){try{i.texImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Yt(z){Ae.equals(z)===!1&&(i.scissor(z.x,z.y,z.z,z.w),Ae.copy(z))}function Pt(z){st.equals(z)===!1&&(i.viewport(z.x,z.y,z.z,z.w),st.copy(z))}function ue(z,Mt){let j=d.get(Mt);j===void 0&&(j=new WeakMap,d.set(Mt,j));let ot=j.get(z);ot===void 0&&(ot=i.getUniformBlockIndex(Mt,z.name),j.set(z,ot))}function jt(z,Mt){const ot=d.get(Mt).get(z);f.get(Mt)!==ot&&(i.uniformBlockBinding(Mt,ot,z.__bindingPointIndex),f.set(Mt,ot))}function Ce(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),c.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),p={},St=null,At={},_={},g=new WeakMap,x=[],E=null,A=!1,v=null,m=null,N=null,L=null,P=null,W=null,B=null,F=new Wt(0,0,0),q=0,C=!1,w=null,O=null,rt=null,Q=null,ct=null,Ae.set(0,0,i.canvas.width,i.canvas.height),st.set(0,0,i.canvas.width,i.canvas.height),o.reset(),c.reset(),u.reset()}return{buffers:{color:o,depth:c,stencil:u},enable:Et,disable:Ht,bindFramebuffer:he,drawBuffers:Zt,useProgram:Ne,setBlending:I,setMaterial:nn,setFlipSided:me,setCullFace:Qt,setLineWidth:Bt,setPolygonOffset:Le,setScissorTest:Ft,activeTexture:R,bindTexture:y,unbindTexture:Y,compressedTexImage2D:lt,compressedTexImage3D:ht,texImage2D:Ct,texImage3D:Vt,updateUBOMapping:ue,uniformBlockBinding:jt,texStorage2D:de,texStorage3D:mt,texSubImage2D:nt,texSubImage3D:Nt,compressedTexSubImage2D:gt,compressedTexSubImage3D:wt,scissor:Yt,viewport:Pt,reset:Ce}}function Xw(i,t,e,r,a,o,c){const u=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,f=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new $t,p=new WeakMap;let _;const g=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(R,y){return x?new OffscreenCanvas(R,y):Vo("canvas")}function A(R,y,Y){let lt=1;const ht=Ft(R);if((ht.width>Y||ht.height>Y)&&(lt=Y/Math.max(ht.width,ht.height)),lt<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const nt=Math.floor(lt*ht.width),Nt=Math.floor(lt*ht.height);_===void 0&&(_=E(nt,Nt));const gt=y?E(nt,Nt):_;return gt.width=nt,gt.height=Nt,gt.getContext("2d").drawImage(R,0,0,nt,Nt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ht.width+"x"+ht.height+") to ("+nt+"x"+Nt+")."),gt}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ht.width+"x"+ht.height+")."),R;return R}function v(R){return R.generateMipmaps}function m(R){i.generateMipmap(R)}function N(R){return R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?i.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function L(R,y,Y,lt,ht=!1){if(R!==null){if(i[R]!==void 0)return i[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let nt=y;if(y===i.RED&&(Y===i.FLOAT&&(nt=i.R32F),Y===i.HALF_FLOAT&&(nt=i.R16F),Y===i.UNSIGNED_BYTE&&(nt=i.R8)),y===i.RED_INTEGER&&(Y===i.UNSIGNED_BYTE&&(nt=i.R8UI),Y===i.UNSIGNED_SHORT&&(nt=i.R16UI),Y===i.UNSIGNED_INT&&(nt=i.R32UI),Y===i.BYTE&&(nt=i.R8I),Y===i.SHORT&&(nt=i.R16I),Y===i.INT&&(nt=i.R32I)),y===i.RG&&(Y===i.FLOAT&&(nt=i.RG32F),Y===i.HALF_FLOAT&&(nt=i.RG16F),Y===i.UNSIGNED_BYTE&&(nt=i.RG8)),y===i.RG_INTEGER&&(Y===i.UNSIGNED_BYTE&&(nt=i.RG8UI),Y===i.UNSIGNED_SHORT&&(nt=i.RG16UI),Y===i.UNSIGNED_INT&&(nt=i.RG32UI),Y===i.BYTE&&(nt=i.RG8I),Y===i.SHORT&&(nt=i.RG16I),Y===i.INT&&(nt=i.RG32I)),y===i.RGB_INTEGER&&(Y===i.UNSIGNED_BYTE&&(nt=i.RGB8UI),Y===i.UNSIGNED_SHORT&&(nt=i.RGB16UI),Y===i.UNSIGNED_INT&&(nt=i.RGB32UI),Y===i.BYTE&&(nt=i.RGB8I),Y===i.SHORT&&(nt=i.RGB16I),Y===i.INT&&(nt=i.RGB32I)),y===i.RGBA_INTEGER&&(Y===i.UNSIGNED_BYTE&&(nt=i.RGBA8UI),Y===i.UNSIGNED_SHORT&&(nt=i.RGBA16UI),Y===i.UNSIGNED_INT&&(nt=i.RGBA32UI),Y===i.BYTE&&(nt=i.RGBA8I),Y===i.SHORT&&(nt=i.RGBA16I),Y===i.INT&&(nt=i.RGBA32I)),y===i.RGB&&Y===i.UNSIGNED_INT_5_9_9_9_REV&&(nt=i.RGB9_E5),y===i.RGBA){const Nt=ht?Ho:Se.getTransfer(lt);Y===i.FLOAT&&(nt=i.RGBA32F),Y===i.HALF_FLOAT&&(nt=i.RGBA16F),Y===i.UNSIGNED_BYTE&&(nt=Nt===Pe?i.SRGB8_ALPHA8:i.RGBA8),Y===i.UNSIGNED_SHORT_4_4_4_4&&(nt=i.RGBA4),Y===i.UNSIGNED_SHORT_5_5_5_1&&(nt=i.RGB5_A1)}return(nt===i.R16F||nt===i.R32F||nt===i.RG16F||nt===i.RG32F||nt===i.RGBA16F||nt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),nt}function P(R,y){let Y;return R?y===null||y===Ur||y===ws?Y=i.DEPTH24_STENCIL8:y===vi?Y=i.DEPTH32F_STENCIL8:y===la&&(Y=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Ur||y===ws?Y=i.DEPTH_COMPONENT24:y===vi?Y=i.DEPTH_COMPONENT32F:y===la&&(Y=i.DEPTH_COMPONENT16),Y}function W(R,y){return v(R)===!0||R.isFramebufferTexture&&R.minFilter!==fi&&R.minFilter!==gi?Math.log2(Math.max(y.width,y.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?y.mipmaps.length:1}function B(R){const y=R.target;y.removeEventListener("dispose",B),q(y),y.isVideoTexture&&p.delete(y)}function F(R){const y=R.target;y.removeEventListener("dispose",F),w(y)}function q(R){const y=r.get(R);if(y.__webglInit===void 0)return;const Y=R.source,lt=g.get(Y);if(lt){const ht=lt[y.__cacheKey];ht.usedTimes--,ht.usedTimes===0&&C(R),Object.keys(lt).length===0&&g.delete(Y)}r.remove(R)}function C(R){const y=r.get(R);i.deleteTexture(y.__webglTexture);const Y=R.source,lt=g.get(Y);delete lt[y.__cacheKey],c.memory.textures--}function w(R){const y=r.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),r.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let lt=0;lt<6;lt++){if(Array.isArray(y.__webglFramebuffer[lt]))for(let ht=0;ht<y.__webglFramebuffer[lt].length;ht++)i.deleteFramebuffer(y.__webglFramebuffer[lt][ht]);else i.deleteFramebuffer(y.__webglFramebuffer[lt]);y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer[lt])}else{if(Array.isArray(y.__webglFramebuffer))for(let lt=0;lt<y.__webglFramebuffer.length;lt++)i.deleteFramebuffer(y.__webglFramebuffer[lt]);else i.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&i.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let lt=0;lt<y.__webglColorRenderbuffer.length;lt++)y.__webglColorRenderbuffer[lt]&&i.deleteRenderbuffer(y.__webglColorRenderbuffer[lt]);y.__webglDepthRenderbuffer&&i.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const Y=R.textures;for(let lt=0,ht=Y.length;lt<ht;lt++){const nt=r.get(Y[lt]);nt.__webglTexture&&(i.deleteTexture(nt.__webglTexture),c.memory.textures--),r.remove(Y[lt])}r.remove(R)}let O=0;function rt(){O=0}function Q(){const R=O;return R>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+a.maxTextures),O+=1,R}function ct(R){const y=[];return y.push(R.wrapS),y.push(R.wrapT),y.push(R.wrapR||0),y.push(R.magFilter),y.push(R.minFilter),y.push(R.anisotropy),y.push(R.internalFormat),y.push(R.format),y.push(R.type),y.push(R.generateMipmaps),y.push(R.premultiplyAlpha),y.push(R.flipY),y.push(R.unpackAlignment),y.push(R.colorSpace),y.join()}function dt(R,y){const Y=r.get(R);if(R.isVideoTexture&&Bt(R),R.isRenderTargetTexture===!1&&R.version>0&&Y.__version!==R.version){const lt=R.image;if(lt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(lt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{st(Y,R,y);return}}e.bindTexture(i.TEXTURE_2D,Y.__webglTexture,i.TEXTURE0+y)}function at(R,y){const Y=r.get(R);if(R.version>0&&Y.__version!==R.version){st(Y,R,y);return}e.bindTexture(i.TEXTURE_2D_ARRAY,Y.__webglTexture,i.TEXTURE0+y)}function ut(R,y){const Y=r.get(R);if(R.version>0&&Y.__version!==R.version){st(Y,R,y);return}e.bindTexture(i.TEXTURE_3D,Y.__webglTexture,i.TEXTURE0+y)}function J(R,y){const Y=r.get(R);if(R.version>0&&Y.__version!==R.version){_t(Y,R,y);return}e.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture,i.TEXTURE0+y)}const St={[nu]:i.REPEAT,[Lr]:i.CLAMP_TO_EDGE,[iu]:i.MIRRORED_REPEAT},At={[fi]:i.NEAREST,[Yy]:i.NEAREST_MIPMAP_NEAREST,[oo]:i.NEAREST_MIPMAP_LINEAR,[gi]:i.LINEAR,[hc]:i.LINEAR_MIPMAP_NEAREST,[Ir]:i.LINEAR_MIPMAP_LINEAR},It={[Jy]:i.NEVER,[iS]:i.ALWAYS,[Qy]:i.LESS,[kp]:i.LEQUAL,[jy]:i.EQUAL,[nS]:i.GEQUAL,[tS]:i.GREATER,[eS]:i.NOTEQUAL};function oe(R,y){if(y.type===vi&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===gi||y.magFilter===hc||y.magFilter===oo||y.magFilter===Ir||y.minFilter===gi||y.minFilter===hc||y.minFilter===oo||y.minFilter===Ir)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,St[y.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,St[y.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,St[y.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,At[y.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,At[y.minFilter]),y.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,It[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===fi||y.minFilter!==oo&&y.minFilter!==Ir||y.type===vi&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||r.get(y).__currentAnisotropy){const Y=t.get("EXT_texture_filter_anisotropic");i.texParameterf(R,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,a.getMaxAnisotropy())),r.get(y).__currentAnisotropy=y.anisotropy}}}function Ae(R,y){let Y=!1;R.__webglInit===void 0&&(R.__webglInit=!0,y.addEventListener("dispose",B));const lt=y.source;let ht=g.get(lt);ht===void 0&&(ht={},g.set(lt,ht));const nt=ct(y);if(nt!==R.__cacheKey){ht[nt]===void 0&&(ht[nt]={texture:i.createTexture(),usedTimes:0},c.memory.textures++,Y=!0),ht[nt].usedTimes++;const Nt=ht[R.__cacheKey];Nt!==void 0&&(ht[R.__cacheKey].usedTimes--,Nt.usedTimes===0&&C(y)),R.__cacheKey=nt,R.__webglTexture=ht[nt].texture}return Y}function st(R,y,Y){let lt=i.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(lt=i.TEXTURE_2D_ARRAY),y.isData3DTexture&&(lt=i.TEXTURE_3D);const ht=Ae(R,y),nt=y.source;e.bindTexture(lt,R.__webglTexture,i.TEXTURE0+Y);const Nt=r.get(nt);if(nt.version!==Nt.__version||ht===!0){e.activeTexture(i.TEXTURE0+Y);const gt=Se.getPrimaries(Se.workingColorSpace),wt=y.colorSpace===lr?null:Se.getPrimaries(y.colorSpace),de=y.colorSpace===lr||gt===wt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,de);let mt=A(y.image,!1,a.maxTextureSize);mt=Le(y,mt);const Ct=o.convert(y.format,y.colorSpace),Vt=o.convert(y.type);let Yt=L(y.internalFormat,Ct,Vt,y.colorSpace,y.isVideoTexture);oe(lt,y);let Pt;const ue=y.mipmaps,jt=y.isVideoTexture!==!0,Ce=Nt.__version===void 0||ht===!0,z=nt.dataReady,Mt=W(y,mt);if(y.isDepthTexture)Yt=P(y.format===Rs,y.type),Ce&&(jt?e.texStorage2D(i.TEXTURE_2D,1,Yt,mt.width,mt.height):e.texImage2D(i.TEXTURE_2D,0,Yt,mt.width,mt.height,0,Ct,Vt,null));else if(y.isDataTexture)if(ue.length>0){jt&&Ce&&e.texStorage2D(i.TEXTURE_2D,Mt,Yt,ue[0].width,ue[0].height);for(let j=0,ot=ue.length;j<ot;j++)Pt=ue[j],jt?z&&e.texSubImage2D(i.TEXTURE_2D,j,0,0,Pt.width,Pt.height,Ct,Vt,Pt.data):e.texImage2D(i.TEXTURE_2D,j,Yt,Pt.width,Pt.height,0,Ct,Vt,Pt.data);y.generateMipmaps=!1}else jt?(Ce&&e.texStorage2D(i.TEXTURE_2D,Mt,Yt,mt.width,mt.height),z&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,mt.width,mt.height,Ct,Vt,mt.data)):e.texImage2D(i.TEXTURE_2D,0,Yt,mt.width,mt.height,0,Ct,Vt,mt.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){jt&&Ce&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Mt,Yt,ue[0].width,ue[0].height,mt.depth);for(let j=0,ot=ue.length;j<ot;j++)if(Pt=ue[j],y.format!==hi)if(Ct!==null)if(jt){if(z)if(y.layerUpdates.size>0){const bt=Zd(Pt.width,Pt.height,y.format,y.type);for(const Tt of y.layerUpdates){const ee=Pt.data.subarray(Tt*bt/Pt.data.BYTES_PER_ELEMENT,(Tt+1)*bt/Pt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,Tt,Pt.width,Pt.height,1,Ct,ee)}y.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,0,Pt.width,Pt.height,mt.depth,Ct,Pt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,j,Yt,Pt.width,Pt.height,mt.depth,0,Pt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else jt?z&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,0,Pt.width,Pt.height,mt.depth,Ct,Vt,Pt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,j,Yt,Pt.width,Pt.height,mt.depth,0,Ct,Vt,Pt.data)}else{jt&&Ce&&e.texStorage2D(i.TEXTURE_2D,Mt,Yt,ue[0].width,ue[0].height);for(let j=0,ot=ue.length;j<ot;j++)Pt=ue[j],y.format!==hi?Ct!==null?jt?z&&e.compressedTexSubImage2D(i.TEXTURE_2D,j,0,0,Pt.width,Pt.height,Ct,Pt.data):e.compressedTexImage2D(i.TEXTURE_2D,j,Yt,Pt.width,Pt.height,0,Pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):jt?z&&e.texSubImage2D(i.TEXTURE_2D,j,0,0,Pt.width,Pt.height,Ct,Vt,Pt.data):e.texImage2D(i.TEXTURE_2D,j,Yt,Pt.width,Pt.height,0,Ct,Vt,Pt.data)}else if(y.isDataArrayTexture)if(jt){if(Ce&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Mt,Yt,mt.width,mt.height,mt.depth),z)if(y.layerUpdates.size>0){const j=Zd(mt.width,mt.height,y.format,y.type);for(const ot of y.layerUpdates){const bt=mt.data.subarray(ot*j/mt.data.BYTES_PER_ELEMENT,(ot+1)*j/mt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ot,mt.width,mt.height,1,Ct,Vt,bt)}y.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,mt.width,mt.height,mt.depth,Ct,Vt,mt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Yt,mt.width,mt.height,mt.depth,0,Ct,Vt,mt.data);else if(y.isData3DTexture)jt?(Ce&&e.texStorage3D(i.TEXTURE_3D,Mt,Yt,mt.width,mt.height,mt.depth),z&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,mt.width,mt.height,mt.depth,Ct,Vt,mt.data)):e.texImage3D(i.TEXTURE_3D,0,Yt,mt.width,mt.height,mt.depth,0,Ct,Vt,mt.data);else if(y.isFramebufferTexture){if(Ce)if(jt)e.texStorage2D(i.TEXTURE_2D,Mt,Yt,mt.width,mt.height);else{let j=mt.width,ot=mt.height;for(let bt=0;bt<Mt;bt++)e.texImage2D(i.TEXTURE_2D,bt,Yt,j,ot,0,Ct,Vt,null),j>>=1,ot>>=1}}else if(ue.length>0){if(jt&&Ce){const j=Ft(ue[0]);e.texStorage2D(i.TEXTURE_2D,Mt,Yt,j.width,j.height)}for(let j=0,ot=ue.length;j<ot;j++)Pt=ue[j],jt?z&&e.texSubImage2D(i.TEXTURE_2D,j,0,0,Ct,Vt,Pt):e.texImage2D(i.TEXTURE_2D,j,Yt,Ct,Vt,Pt);y.generateMipmaps=!1}else if(jt){if(Ce){const j=Ft(mt);e.texStorage2D(i.TEXTURE_2D,Mt,Yt,j.width,j.height)}z&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Ct,Vt,mt)}else e.texImage2D(i.TEXTURE_2D,0,Yt,Ct,Vt,mt);v(y)&&m(lt),Nt.__version=nt.version,y.onUpdate&&y.onUpdate(y)}R.__version=y.version}function _t(R,y,Y){if(y.image.length!==6)return;const lt=Ae(R,y),ht=y.source;e.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+Y);const nt=r.get(ht);if(ht.version!==nt.__version||lt===!0){e.activeTexture(i.TEXTURE0+Y);const Nt=Se.getPrimaries(Se.workingColorSpace),gt=y.colorSpace===lr?null:Se.getPrimaries(y.colorSpace),wt=y.colorSpace===lr||Nt===gt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,wt);const de=y.isCompressedTexture||y.image[0].isCompressedTexture,mt=y.image[0]&&y.image[0].isDataTexture,Ct=[];for(let ot=0;ot<6;ot++)!de&&!mt?Ct[ot]=A(y.image[ot],!0,a.maxCubemapSize):Ct[ot]=mt?y.image[ot].image:y.image[ot],Ct[ot]=Le(y,Ct[ot]);const Vt=Ct[0],Yt=o.convert(y.format,y.colorSpace),Pt=o.convert(y.type),ue=L(y.internalFormat,Yt,Pt,y.colorSpace),jt=y.isVideoTexture!==!0,Ce=nt.__version===void 0||lt===!0,z=ht.dataReady;let Mt=W(y,Vt);oe(i.TEXTURE_CUBE_MAP,y);let j;if(de){jt&&Ce&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Mt,ue,Vt.width,Vt.height);for(let ot=0;ot<6;ot++){j=Ct[ot].mipmaps;for(let bt=0;bt<j.length;bt++){const Tt=j[bt];y.format!==hi?Yt!==null?jt?z&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,bt,0,0,Tt.width,Tt.height,Yt,Tt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,bt,ue,Tt.width,Tt.height,0,Tt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):jt?z&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,bt,0,0,Tt.width,Tt.height,Yt,Pt,Tt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,bt,ue,Tt.width,Tt.height,0,Yt,Pt,Tt.data)}}}else{if(j=y.mipmaps,jt&&Ce){j.length>0&&Mt++;const ot=Ft(Ct[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Mt,ue,ot.width,ot.height)}for(let ot=0;ot<6;ot++)if(mt){jt?z&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,0,0,Ct[ot].width,Ct[ot].height,Yt,Pt,Ct[ot].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,ue,Ct[ot].width,Ct[ot].height,0,Yt,Pt,Ct[ot].data);for(let bt=0;bt<j.length;bt++){const ee=j[bt].image[ot].image;jt?z&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,bt+1,0,0,ee.width,ee.height,Yt,Pt,ee.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,bt+1,ue,ee.width,ee.height,0,Yt,Pt,ee.data)}}else{jt?z&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,0,0,Yt,Pt,Ct[ot]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,ue,Yt,Pt,Ct[ot]);for(let bt=0;bt<j.length;bt++){const Tt=j[bt];jt?z&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,bt+1,0,0,Yt,Pt,Tt.image[ot]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,bt+1,ue,Yt,Pt,Tt.image[ot])}}}v(y)&&m(i.TEXTURE_CUBE_MAP),nt.__version=ht.version,y.onUpdate&&y.onUpdate(y)}R.__version=y.version}function Ut(R,y,Y,lt,ht,nt){const Nt=o.convert(Y.format,Y.colorSpace),gt=o.convert(Y.type),wt=L(Y.internalFormat,Nt,gt,Y.colorSpace),de=r.get(y),mt=r.get(Y);if(mt.__renderTarget=y,!de.__hasExternalTextures){const Ct=Math.max(1,y.width>>nt),Vt=Math.max(1,y.height>>nt);ht===i.TEXTURE_3D||ht===i.TEXTURE_2D_ARRAY?e.texImage3D(ht,nt,wt,Ct,Vt,y.depth,0,Nt,gt,null):e.texImage2D(ht,nt,wt,Ct,Vt,0,Nt,gt,null)}e.bindFramebuffer(i.FRAMEBUFFER,R),Qt(y)?u.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,lt,ht,mt.__webglTexture,0,me(y)):(ht===i.TEXTURE_2D||ht>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ht<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,lt,ht,mt.__webglTexture,nt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Et(R,y,Y){if(i.bindRenderbuffer(i.RENDERBUFFER,R),y.depthBuffer){const lt=y.depthTexture,ht=lt&&lt.isDepthTexture?lt.type:null,nt=P(y.stencilBuffer,ht),Nt=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,gt=me(y);Qt(y)?u.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,gt,nt,y.width,y.height):Y?i.renderbufferStorageMultisample(i.RENDERBUFFER,gt,nt,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,nt,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Nt,i.RENDERBUFFER,R)}else{const lt=y.textures;for(let ht=0;ht<lt.length;ht++){const nt=lt[ht],Nt=o.convert(nt.format,nt.colorSpace),gt=o.convert(nt.type),wt=L(nt.internalFormat,Nt,gt,nt.colorSpace),de=me(y);Y&&Qt(y)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,de,wt,y.width,y.height):Qt(y)?u.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,de,wt,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,wt,y.width,y.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ht(R,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,R),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const lt=r.get(y.depthTexture);lt.__renderTarget=y,(!lt.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),dt(y.depthTexture,0);const ht=lt.__webglTexture,nt=me(y);if(y.depthTexture.format===ys)Qt(y)?u.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ht,0,nt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ht,0);else if(y.depthTexture.format===Rs)Qt(y)?u.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ht,0,nt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ht,0);else throw new Error("Unknown depthTexture format")}function he(R){const y=r.get(R),Y=R.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==R.depthTexture){const lt=R.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),lt){const ht=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,lt.removeEventListener("dispose",ht)};lt.addEventListener("dispose",ht),y.__depthDisposeCallback=ht}y.__boundDepthTexture=lt}if(R.depthTexture&&!y.__autoAllocateDepthBuffer){if(Y)throw new Error("target.depthTexture not supported in Cube render targets");Ht(y.__webglFramebuffer,R)}else if(Y){y.__webglDepthbuffer=[];for(let lt=0;lt<6;lt++)if(e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[lt]),y.__webglDepthbuffer[lt]===void 0)y.__webglDepthbuffer[lt]=i.createRenderbuffer(),Et(y.__webglDepthbuffer[lt],R,!1);else{const ht=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,nt=y.__webglDepthbuffer[lt];i.bindRenderbuffer(i.RENDERBUFFER,nt),i.framebufferRenderbuffer(i.FRAMEBUFFER,ht,i.RENDERBUFFER,nt)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=i.createRenderbuffer(),Et(y.__webglDepthbuffer,R,!1);else{const lt=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ht=y.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ht),i.framebufferRenderbuffer(i.FRAMEBUFFER,lt,i.RENDERBUFFER,ht)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Zt(R,y,Y){const lt=r.get(R);y!==void 0&&Ut(lt.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),Y!==void 0&&he(R)}function Ne(R){const y=R.texture,Y=r.get(R),lt=r.get(y);R.addEventListener("dispose",F);const ht=R.textures,nt=R.isWebGLCubeRenderTarget===!0,Nt=ht.length>1;if(Nt||(lt.__webglTexture===void 0&&(lt.__webglTexture=i.createTexture()),lt.__version=y.version,c.memory.textures++),nt){Y.__webglFramebuffer=[];for(let gt=0;gt<6;gt++)if(y.mipmaps&&y.mipmaps.length>0){Y.__webglFramebuffer[gt]=[];for(let wt=0;wt<y.mipmaps.length;wt++)Y.__webglFramebuffer[gt][wt]=i.createFramebuffer()}else Y.__webglFramebuffer[gt]=i.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){Y.__webglFramebuffer=[];for(let gt=0;gt<y.mipmaps.length;gt++)Y.__webglFramebuffer[gt]=i.createFramebuffer()}else Y.__webglFramebuffer=i.createFramebuffer();if(Nt)for(let gt=0,wt=ht.length;gt<wt;gt++){const de=r.get(ht[gt]);de.__webglTexture===void 0&&(de.__webglTexture=i.createTexture(),c.memory.textures++)}if(R.samples>0&&Qt(R)===!1){Y.__webglMultisampledFramebuffer=i.createFramebuffer(),Y.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let gt=0;gt<ht.length;gt++){const wt=ht[gt];Y.__webglColorRenderbuffer[gt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,Y.__webglColorRenderbuffer[gt]);const de=o.convert(wt.format,wt.colorSpace),mt=o.convert(wt.type),Ct=L(wt.internalFormat,de,mt,wt.colorSpace,R.isXRRenderTarget===!0),Vt=me(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,Vt,Ct,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.RENDERBUFFER,Y.__webglColorRenderbuffer[gt])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(Y.__webglDepthRenderbuffer=i.createRenderbuffer(),Et(Y.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(nt){e.bindTexture(i.TEXTURE_CUBE_MAP,lt.__webglTexture),oe(i.TEXTURE_CUBE_MAP,y);for(let gt=0;gt<6;gt++)if(y.mipmaps&&y.mipmaps.length>0)for(let wt=0;wt<y.mipmaps.length;wt++)Ut(Y.__webglFramebuffer[gt][wt],R,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,wt);else Ut(Y.__webglFramebuffer[gt],R,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0);v(y)&&m(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Nt){for(let gt=0,wt=ht.length;gt<wt;gt++){const de=ht[gt],mt=r.get(de);e.bindTexture(i.TEXTURE_2D,mt.__webglTexture),oe(i.TEXTURE_2D,de),Ut(Y.__webglFramebuffer,R,de,i.COLOR_ATTACHMENT0+gt,i.TEXTURE_2D,0),v(de)&&m(i.TEXTURE_2D)}e.unbindTexture()}else{let gt=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(gt=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(gt,lt.__webglTexture),oe(gt,y),y.mipmaps&&y.mipmaps.length>0)for(let wt=0;wt<y.mipmaps.length;wt++)Ut(Y.__webglFramebuffer[wt],R,y,i.COLOR_ATTACHMENT0,gt,wt);else Ut(Y.__webglFramebuffer,R,y,i.COLOR_ATTACHMENT0,gt,0);v(y)&&m(gt),e.unbindTexture()}R.depthBuffer&&he(R)}function Re(R){const y=R.textures;for(let Y=0,lt=y.length;Y<lt;Y++){const ht=y[Y];if(v(ht)){const nt=N(R),Nt=r.get(ht).__webglTexture;e.bindTexture(nt,Nt),m(nt),e.unbindTexture()}}}const fe=[],I=[];function nn(R){if(R.samples>0){if(Qt(R)===!1){const y=R.textures,Y=R.width,lt=R.height;let ht=i.COLOR_BUFFER_BIT;const nt=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Nt=r.get(R),gt=y.length>1;if(gt)for(let wt=0;wt<y.length;wt++)e.bindFramebuffer(i.FRAMEBUFFER,Nt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+wt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Nt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+wt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Nt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Nt.__webglFramebuffer);for(let wt=0;wt<y.length;wt++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(ht|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(ht|=i.STENCIL_BUFFER_BIT)),gt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Nt.__webglColorRenderbuffer[wt]);const de=r.get(y[wt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,de,0)}i.blitFramebuffer(0,0,Y,lt,0,0,Y,lt,ht,i.NEAREST),f===!0&&(fe.length=0,I.length=0,fe.push(i.COLOR_ATTACHMENT0+wt),R.depthBuffer&&R.resolveDepthBuffer===!1&&(fe.push(nt),I.push(nt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,I)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,fe))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),gt)for(let wt=0;wt<y.length;wt++){e.bindFramebuffer(i.FRAMEBUFFER,Nt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+wt,i.RENDERBUFFER,Nt.__webglColorRenderbuffer[wt]);const de=r.get(y[wt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Nt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+wt,i.TEXTURE_2D,de,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Nt.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&f){const y=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[y])}}}function me(R){return Math.min(a.maxSamples,R.samples)}function Qt(R){const y=r.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function Bt(R){const y=c.render.frame;p.get(R)!==y&&(p.set(R,y),R.update())}function Le(R,y){const Y=R.colorSpace,lt=R.format,ht=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||Y!==Cs&&Y!==lr&&(Se.getTransfer(Y)===Pe?(lt!==hi||ht!==Gi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Y)),y}function Ft(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(d.width=R.naturalWidth||R.width,d.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(d.width=R.displayWidth,d.height=R.displayHeight):(d.width=R.width,d.height=R.height),d}this.allocateTextureUnit=Q,this.resetTextureUnits=rt,this.setTexture2D=dt,this.setTexture2DArray=at,this.setTexture3D=ut,this.setTextureCube=J,this.rebindTextures=Zt,this.setupRenderTarget=Ne,this.updateRenderTargetMipmap=Re,this.updateMultisampleRenderTarget=nn,this.setupDepthRenderbuffer=he,this.setupFrameBufferTexture=Ut,this.useMultisampledRTT=Qt}function qw(i,t){function e(r,a=lr){let o;const c=Se.getTransfer(a);if(r===Gi)return i.UNSIGNED_BYTE;if(r===Bu)return i.UNSIGNED_SHORT_4_4_4_4;if(r===zu)return i.UNSIGNED_SHORT_5_5_5_1;if(r===Ip)return i.UNSIGNED_INT_5_9_9_9_REV;if(r===Dp)return i.BYTE;if(r===Lp)return i.SHORT;if(r===la)return i.UNSIGNED_SHORT;if(r===Ou)return i.INT;if(r===Ur)return i.UNSIGNED_INT;if(r===vi)return i.FLOAT;if(r===ua)return i.HALF_FLOAT;if(r===Up)return i.ALPHA;if(r===Np)return i.RGB;if(r===hi)return i.RGBA;if(r===Fp)return i.LUMINANCE;if(r===Op)return i.LUMINANCE_ALPHA;if(r===ys)return i.DEPTH_COMPONENT;if(r===Rs)return i.DEPTH_STENCIL;if(r===Bp)return i.RED;if(r===Hu)return i.RED_INTEGER;if(r===zp)return i.RG;if(r===ku)return i.RG_INTEGER;if(r===Vu)return i.RGBA_INTEGER;if(r===Uo||r===No||r===Fo||r===Oo)if(c===Pe)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===Uo)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===No)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Fo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Oo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===Uo)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===No)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Fo)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Oo)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===ru||r===su||r===au||r===ou)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===ru)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===su)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===au)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===ou)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===lu||r===cu||r===uu)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(r===lu||r===cu)return c===Pe?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===uu)return c===Pe?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===hu||r===fu||r===du||r===pu||r===mu||r===_u||r===gu||r===vu||r===xu||r===Mu||r===yu||r===Su||r===Eu||r===Tu)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(r===hu)return c===Pe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===fu)return c===Pe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===du)return c===Pe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===pu)return c===Pe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===mu)return c===Pe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===_u)return c===Pe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===gu)return c===Pe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===vu)return c===Pe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===xu)return c===Pe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Mu)return c===Pe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===yu)return c===Pe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Su)return c===Pe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Eu)return c===Pe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Tu)return c===Pe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Bo||r===bu||r===Au)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(r===Bo)return c===Pe?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===bu)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Au)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Hp||r===wu||r===Ru||r===Cu)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(r===Bo)return o.COMPRESSED_RED_RGTC1_EXT;if(r===wu)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Ru)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Cu)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===ws?i.UNSIGNED_INT_24_8:i[r]!==void 0?i[r]:null}return{convert:e}}const Yw=`
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

}`;class Kw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,r){if(this.texture===null){const a=new un,o=t.properties.get(a);o.__webglTexture=e.texture,(e.depthNear!==r.depthNear||e.depthFar!==r.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=a}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,r=new Mi({vertexShader:Yw,fragmentShader:Zw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ki(new Jo(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class $w extends Br{constructor(t,e){super();const r=this;let a=null,o=1,c=null,u="local-floor",f=1,d=null,p=null,_=null,g=null,x=null,E=null;const A=new Kw,v=e.getContextAttributes();let m=null,N=null;const L=[],P=[],W=new $t;let B=null;const F=new jn;F.viewport=new Xe;const q=new jn;q.viewport=new Xe;const C=[F,q],w=new pE;let O=null,rt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(st){let _t=L[st];return _t===void 0&&(_t=new Dc,L[st]=_t),_t.getTargetRaySpace()},this.getControllerGrip=function(st){let _t=L[st];return _t===void 0&&(_t=new Dc,L[st]=_t),_t.getGripSpace()},this.getHand=function(st){let _t=L[st];return _t===void 0&&(_t=new Dc,L[st]=_t),_t.getHandSpace()};function Q(st){const _t=P.indexOf(st.inputSource);if(_t===-1)return;const Ut=L[_t];Ut!==void 0&&(Ut.update(st.inputSource,st.frame,d||c),Ut.dispatchEvent({type:st.type,data:st.inputSource}))}function ct(){a.removeEventListener("select",Q),a.removeEventListener("selectstart",Q),a.removeEventListener("selectend",Q),a.removeEventListener("squeeze",Q),a.removeEventListener("squeezestart",Q),a.removeEventListener("squeezeend",Q),a.removeEventListener("end",ct),a.removeEventListener("inputsourceschange",dt);for(let st=0;st<L.length;st++){const _t=P[st];_t!==null&&(P[st]=null,L[st].disconnect(_t))}O=null,rt=null,A.reset(),t.setRenderTarget(m),x=null,g=null,_=null,a=null,N=null,Ae.stop(),r.isPresenting=!1,t.setPixelRatio(B),t.setSize(W.width,W.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(st){o=st,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(st){u=st,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||c},this.setReferenceSpace=function(st){d=st},this.getBaseLayer=function(){return g!==null?g:x},this.getBinding=function(){return _},this.getFrame=function(){return E},this.getSession=function(){return a},this.setSession=async function(st){if(a=st,a!==null){if(m=t.getRenderTarget(),a.addEventListener("select",Q),a.addEventListener("selectstart",Q),a.addEventListener("selectend",Q),a.addEventListener("squeeze",Q),a.addEventListener("squeezestart",Q),a.addEventListener("squeezeend",Q),a.addEventListener("end",ct),a.addEventListener("inputsourceschange",dt),v.xrCompatible!==!0&&await e.makeXRCompatible(),B=t.getPixelRatio(),t.getSize(W),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ut=null,Et=null,Ht=null;v.depth&&(Ht=v.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Ut=v.stencil?Rs:ys,Et=v.stencil?ws:Ur);const he={colorFormat:e.RGBA8,depthFormat:Ht,scaleFactor:o};_=new XRWebGLBinding(a,e),g=_.createProjectionLayer(he),a.updateRenderState({layers:[g]}),t.setPixelRatio(1),t.setSize(g.textureWidth,g.textureHeight,!1),N=new Nr(g.textureWidth,g.textureHeight,{format:hi,type:Gi,depthTexture:new tm(g.textureWidth,g.textureHeight,Et,void 0,void 0,void 0,void 0,void 0,void 0,Ut),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const Ut={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:o};x=new XRWebGLLayer(a,e,Ut),a.updateRenderState({baseLayer:x}),t.setPixelRatio(1),t.setSize(x.framebufferWidth,x.framebufferHeight,!1),N=new Nr(x.framebufferWidth,x.framebufferHeight,{format:hi,type:Gi,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}N.isXRRenderTarget=!0,this.setFoveation(f),d=null,c=await a.requestReferenceSpace(u),Ae.setContext(a),Ae.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return A.getDepthTexture()};function dt(st){for(let _t=0;_t<st.removed.length;_t++){const Ut=st.removed[_t],Et=P.indexOf(Ut);Et>=0&&(P[Et]=null,L[Et].disconnect(Ut))}for(let _t=0;_t<st.added.length;_t++){const Ut=st.added[_t];let Et=P.indexOf(Ut);if(Et===-1){for(let he=0;he<L.length;he++)if(he>=P.length){P.push(Ut),Et=he;break}else if(P[he]===null){P[he]=Ut,Et=he;break}if(Et===-1)break}const Ht=L[Et];Ht&&Ht.connect(Ut)}}const at=new X,ut=new X;function J(st,_t,Ut){at.setFromMatrixPosition(_t.matrixWorld),ut.setFromMatrixPosition(Ut.matrixWorld);const Et=at.distanceTo(ut),Ht=_t.projectionMatrix.elements,he=Ut.projectionMatrix.elements,Zt=Ht[14]/(Ht[10]-1),Ne=Ht[14]/(Ht[10]+1),Re=(Ht[9]+1)/Ht[5],fe=(Ht[9]-1)/Ht[5],I=(Ht[8]-1)/Ht[0],nn=(he[8]+1)/he[0],me=Zt*I,Qt=Zt*nn,Bt=Et/(-I+nn),Le=Bt*-I;if(_t.matrixWorld.decompose(st.position,st.quaternion,st.scale),st.translateX(Le),st.translateZ(Bt),st.matrixWorld.compose(st.position,st.quaternion,st.scale),st.matrixWorldInverse.copy(st.matrixWorld).invert(),Ht[10]===-1)st.projectionMatrix.copy(_t.projectionMatrix),st.projectionMatrixInverse.copy(_t.projectionMatrixInverse);else{const Ft=Zt+Bt,R=Ne+Bt,y=me-Le,Y=Qt+(Et-Le),lt=Re*Ne/R*Ft,ht=fe*Ne/R*Ft;st.projectionMatrix.makePerspective(y,Y,lt,ht,Ft,R),st.projectionMatrixInverse.copy(st.projectionMatrix).invert()}}function St(st,_t){_t===null?st.matrixWorld.copy(st.matrix):st.matrixWorld.multiplyMatrices(_t.matrixWorld,st.matrix),st.matrixWorldInverse.copy(st.matrixWorld).invert()}this.updateCamera=function(st){if(a===null)return;let _t=st.near,Ut=st.far;A.texture!==null&&(A.depthNear>0&&(_t=A.depthNear),A.depthFar>0&&(Ut=A.depthFar)),w.near=q.near=F.near=_t,w.far=q.far=F.far=Ut,(O!==w.near||rt!==w.far)&&(a.updateRenderState({depthNear:w.near,depthFar:w.far}),O=w.near,rt=w.far),F.layers.mask=st.layers.mask|2,q.layers.mask=st.layers.mask|4,w.layers.mask=F.layers.mask|q.layers.mask;const Et=st.parent,Ht=w.cameras;St(w,Et);for(let he=0;he<Ht.length;he++)St(Ht[he],Et);Ht.length===2?J(w,F,q):w.projectionMatrix.copy(F.projectionMatrix),At(st,w,Et)};function At(st,_t,Ut){Ut===null?st.matrix.copy(_t.matrixWorld):(st.matrix.copy(Ut.matrixWorld),st.matrix.invert(),st.matrix.multiply(_t.matrixWorld)),st.matrix.decompose(st.position,st.quaternion,st.scale),st.updateMatrixWorld(!0),st.projectionMatrix.copy(_t.projectionMatrix),st.projectionMatrixInverse.copy(_t.projectionMatrixInverse),st.isPerspectiveCamera&&(st.fov=ca*2*Math.atan(1/st.projectionMatrix.elements[5]),st.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(g===null&&x===null))return f},this.setFoveation=function(st){f=st,g!==null&&(g.fixedFoveation=st),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=st)},this.hasDepthSensing=function(){return A.texture!==null},this.getDepthSensingMesh=function(){return A.getMesh(w)};let It=null;function oe(st,_t){if(p=_t.getViewerPose(d||c),E=_t,p!==null){const Ut=p.views;x!==null&&(t.setRenderTargetFramebuffer(N,x.framebuffer),t.setRenderTarget(N));let Et=!1;Ut.length!==w.cameras.length&&(w.cameras.length=0,Et=!0);for(let Zt=0;Zt<Ut.length;Zt++){const Ne=Ut[Zt];let Re=null;if(x!==null)Re=x.getViewport(Ne);else{const I=_.getViewSubImage(g,Ne);Re=I.viewport,Zt===0&&(t.setRenderTargetTextures(N,I.colorTexture,g.ignoreDepthValues?void 0:I.depthStencilTexture),t.setRenderTarget(N))}let fe=C[Zt];fe===void 0&&(fe=new jn,fe.layers.enable(Zt),fe.viewport=new Xe,C[Zt]=fe),fe.matrix.fromArray(Ne.transform.matrix),fe.matrix.decompose(fe.position,fe.quaternion,fe.scale),fe.projectionMatrix.fromArray(Ne.projectionMatrix),fe.projectionMatrixInverse.copy(fe.projectionMatrix).invert(),fe.viewport.set(Re.x,Re.y,Re.width,Re.height),Zt===0&&(w.matrix.copy(fe.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),Et===!0&&w.cameras.push(fe)}const Ht=a.enabledFeatures;if(Ht&&Ht.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&_){const Zt=_.getDepthInformation(Ut[0]);Zt&&Zt.isValid&&Zt.texture&&A.init(t,Zt,a.renderState)}}for(let Ut=0;Ut<L.length;Ut++){const Et=P[Ut],Ht=L[Ut];Et!==null&&Ht!==void 0&&Ht.update(Et,_t,d||c)}It&&It(st,_t),_t.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:_t}),E=null}const Ae=new sm;Ae.setAnimationLoop(oe),this.setAnimationLoop=function(st){It=st},this.dispose=function(){}}}const wr=new ti,Jw=new Ge;function Qw(i,t){function e(v,m){v.matrixAutoUpdate===!0&&v.updateMatrix(),m.value.copy(v.matrix)}function r(v,m){m.color.getRGB(v.fogColor.value,Kp(i)),m.isFog?(v.fogNear.value=m.near,v.fogFar.value=m.far):m.isFogExp2&&(v.fogDensity.value=m.density)}function a(v,m,N,L,P){m.isMeshBasicMaterial||m.isMeshLambertMaterial?o(v,m):m.isMeshToonMaterial?(o(v,m),_(v,m)):m.isMeshPhongMaterial?(o(v,m),p(v,m)):m.isMeshStandardMaterial?(o(v,m),g(v,m),m.isMeshPhysicalMaterial&&x(v,m,P)):m.isMeshMatcapMaterial?(o(v,m),E(v,m)):m.isMeshDepthMaterial?o(v,m):m.isMeshDistanceMaterial?(o(v,m),A(v,m)):m.isMeshNormalMaterial?o(v,m):m.isLineBasicMaterial?(c(v,m),m.isLineDashedMaterial&&u(v,m)):m.isPointsMaterial?f(v,m,N,L):m.isSpriteMaterial?d(v,m):m.isShadowMaterial?(v.color.value.copy(m.color),v.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function o(v,m){v.opacity.value=m.opacity,m.color&&v.diffuse.value.copy(m.color),m.emissive&&v.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(v.map.value=m.map,e(m.map,v.mapTransform)),m.alphaMap&&(v.alphaMap.value=m.alphaMap,e(m.alphaMap,v.alphaMapTransform)),m.bumpMap&&(v.bumpMap.value=m.bumpMap,e(m.bumpMap,v.bumpMapTransform),v.bumpScale.value=m.bumpScale,m.side===Ln&&(v.bumpScale.value*=-1)),m.normalMap&&(v.normalMap.value=m.normalMap,e(m.normalMap,v.normalMapTransform),v.normalScale.value.copy(m.normalScale),m.side===Ln&&v.normalScale.value.negate()),m.displacementMap&&(v.displacementMap.value=m.displacementMap,e(m.displacementMap,v.displacementMapTransform),v.displacementScale.value=m.displacementScale,v.displacementBias.value=m.displacementBias),m.emissiveMap&&(v.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,v.emissiveMapTransform)),m.specularMap&&(v.specularMap.value=m.specularMap,e(m.specularMap,v.specularMapTransform)),m.alphaTest>0&&(v.alphaTest.value=m.alphaTest);const N=t.get(m),L=N.envMap,P=N.envMapRotation;L&&(v.envMap.value=L,wr.copy(P),wr.x*=-1,wr.y*=-1,wr.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(wr.y*=-1,wr.z*=-1),v.envMapRotation.value.setFromMatrix4(Jw.makeRotationFromEuler(wr)),v.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,v.reflectivity.value=m.reflectivity,v.ior.value=m.ior,v.refractionRatio.value=m.refractionRatio),m.lightMap&&(v.lightMap.value=m.lightMap,v.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,v.lightMapTransform)),m.aoMap&&(v.aoMap.value=m.aoMap,v.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,v.aoMapTransform))}function c(v,m){v.diffuse.value.copy(m.color),v.opacity.value=m.opacity,m.map&&(v.map.value=m.map,e(m.map,v.mapTransform))}function u(v,m){v.dashSize.value=m.dashSize,v.totalSize.value=m.dashSize+m.gapSize,v.scale.value=m.scale}function f(v,m,N,L){v.diffuse.value.copy(m.color),v.opacity.value=m.opacity,v.size.value=m.size*N,v.scale.value=L*.5,m.map&&(v.map.value=m.map,e(m.map,v.uvTransform)),m.alphaMap&&(v.alphaMap.value=m.alphaMap,e(m.alphaMap,v.alphaMapTransform)),m.alphaTest>0&&(v.alphaTest.value=m.alphaTest)}function d(v,m){v.diffuse.value.copy(m.color),v.opacity.value=m.opacity,v.rotation.value=m.rotation,m.map&&(v.map.value=m.map,e(m.map,v.mapTransform)),m.alphaMap&&(v.alphaMap.value=m.alphaMap,e(m.alphaMap,v.alphaMapTransform)),m.alphaTest>0&&(v.alphaTest.value=m.alphaTest)}function p(v,m){v.specular.value.copy(m.specular),v.shininess.value=Math.max(m.shininess,1e-4)}function _(v,m){m.gradientMap&&(v.gradientMap.value=m.gradientMap)}function g(v,m){v.metalness.value=m.metalness,m.metalnessMap&&(v.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,v.metalnessMapTransform)),v.roughness.value=m.roughness,m.roughnessMap&&(v.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,v.roughnessMapTransform)),m.envMap&&(v.envMapIntensity.value=m.envMapIntensity)}function x(v,m,N){v.ior.value=m.ior,m.sheen>0&&(v.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),v.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(v.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,v.sheenColorMapTransform)),m.sheenRoughnessMap&&(v.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,v.sheenRoughnessMapTransform))),m.clearcoat>0&&(v.clearcoat.value=m.clearcoat,v.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(v.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,v.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(v.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,v.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(v.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,v.clearcoatNormalMapTransform),v.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Ln&&v.clearcoatNormalScale.value.negate())),m.dispersion>0&&(v.dispersion.value=m.dispersion),m.iridescence>0&&(v.iridescence.value=m.iridescence,v.iridescenceIOR.value=m.iridescenceIOR,v.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],v.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(v.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,v.iridescenceMapTransform)),m.iridescenceThicknessMap&&(v.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,v.iridescenceThicknessMapTransform))),m.transmission>0&&(v.transmission.value=m.transmission,v.transmissionSamplerMap.value=N.texture,v.transmissionSamplerSize.value.set(N.width,N.height),m.transmissionMap&&(v.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,v.transmissionMapTransform)),v.thickness.value=m.thickness,m.thicknessMap&&(v.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,v.thicknessMapTransform)),v.attenuationDistance.value=m.attenuationDistance,v.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(v.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(v.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,v.anisotropyMapTransform))),v.specularIntensity.value=m.specularIntensity,v.specularColor.value.copy(m.specularColor),m.specularColorMap&&(v.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,v.specularColorMapTransform)),m.specularIntensityMap&&(v.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,v.specularIntensityMapTransform))}function E(v,m){m.matcap&&(v.matcap.value=m.matcap)}function A(v,m){const N=t.get(m).light;v.referencePosition.value.setFromMatrixPosition(N.matrixWorld),v.nearDistance.value=N.shadow.camera.near,v.farDistance.value=N.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:a}}function jw(i,t,e,r){let a={},o={},c=[];const u=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function f(N,L){const P=L.program;r.uniformBlockBinding(N,P)}function d(N,L){let P=a[N.id];P===void 0&&(E(N),P=p(N),a[N.id]=P,N.addEventListener("dispose",v));const W=L.program;r.updateUBOMapping(N,W);const B=t.render.frame;o[N.id]!==B&&(g(N),o[N.id]=B)}function p(N){const L=_();N.__bindingPointIndex=L;const P=i.createBuffer(),W=N.__size,B=N.usage;return i.bindBuffer(i.UNIFORM_BUFFER,P),i.bufferData(i.UNIFORM_BUFFER,W,B),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,L,P),P}function _(){for(let N=0;N<u;N++)if(c.indexOf(N)===-1)return c.push(N),N;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(N){const L=a[N.id],P=N.uniforms,W=N.__cache;i.bindBuffer(i.UNIFORM_BUFFER,L);for(let B=0,F=P.length;B<F;B++){const q=Array.isArray(P[B])?P[B]:[P[B]];for(let C=0,w=q.length;C<w;C++){const O=q[C];if(x(O,B,C,W)===!0){const rt=O.__offset,Q=Array.isArray(O.value)?O.value:[O.value];let ct=0;for(let dt=0;dt<Q.length;dt++){const at=Q[dt],ut=A(at);typeof at=="number"||typeof at=="boolean"?(O.__data[0]=at,i.bufferSubData(i.UNIFORM_BUFFER,rt+ct,O.__data)):at.isMatrix3?(O.__data[0]=at.elements[0],O.__data[1]=at.elements[1],O.__data[2]=at.elements[2],O.__data[3]=0,O.__data[4]=at.elements[3],O.__data[5]=at.elements[4],O.__data[6]=at.elements[5],O.__data[7]=0,O.__data[8]=at.elements[6],O.__data[9]=at.elements[7],O.__data[10]=at.elements[8],O.__data[11]=0):(at.toArray(O.__data,ct),ct+=ut.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,rt,O.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function x(N,L,P,W){const B=N.value,F=L+"_"+P;if(W[F]===void 0)return typeof B=="number"||typeof B=="boolean"?W[F]=B:W[F]=B.clone(),!0;{const q=W[F];if(typeof B=="number"||typeof B=="boolean"){if(q!==B)return W[F]=B,!0}else if(q.equals(B)===!1)return q.copy(B),!0}return!1}function E(N){const L=N.uniforms;let P=0;const W=16;for(let F=0,q=L.length;F<q;F++){const C=Array.isArray(L[F])?L[F]:[L[F]];for(let w=0,O=C.length;w<O;w++){const rt=C[w],Q=Array.isArray(rt.value)?rt.value:[rt.value];for(let ct=0,dt=Q.length;ct<dt;ct++){const at=Q[ct],ut=A(at),J=P%W,St=J%ut.boundary,At=J+St;P+=St,At!==0&&W-At<ut.storage&&(P+=W-At),rt.__data=new Float32Array(ut.storage/Float32Array.BYTES_PER_ELEMENT),rt.__offset=P,P+=ut.storage}}}const B=P%W;return B>0&&(P+=W-B),N.__size=P,N.__cache={},this}function A(N){const L={boundary:0,storage:0};return typeof N=="number"||typeof N=="boolean"?(L.boundary=4,L.storage=4):N.isVector2?(L.boundary=8,L.storage=8):N.isVector3||N.isColor?(L.boundary=16,L.storage=12):N.isVector4?(L.boundary=16,L.storage=16):N.isMatrix3?(L.boundary=48,L.storage=48):N.isMatrix4?(L.boundary=64,L.storage=64):N.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",N),L}function v(N){const L=N.target;L.removeEventListener("dispose",v);const P=c.indexOf(L.__bindingPointIndex);c.splice(P,1),i.deleteBuffer(a[L.id]),delete a[L.id],delete o[L.id]}function m(){for(const N in a)i.deleteBuffer(a[N]);c=[],a={},o={}}return{bind:f,update:d,dispose:m}}class t1{constructor(t={}){const{canvas:e=MS(),context:r=null,depth:a=!0,stencil:o=!1,alpha:c=!1,antialias:u=!1,premultipliedAlpha:f=!0,preserveDrawingBuffer:d=!1,powerPreference:p="default",failIfMajorPerformanceCaveat:_=!1,reverseDepthBuffer:g=!1}=t;this.isWebGLRenderer=!0;let x;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=r.getContextAttributes().alpha}else x=c;const E=new Uint32Array(4),A=new Int32Array(4);let v=null,m=null;const N=[],L=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Qn,this.toneMapping=ur,this.toneMappingExposure=1;const P=this;let W=!1,B=0,F=0,q=null,C=-1,w=null;const O=new Xe,rt=new Xe;let Q=null;const ct=new Wt(0);let dt=0,at=e.width,ut=e.height,J=1,St=null,At=null;const It=new Xe(0,0,at,ut),oe=new Xe(0,0,at,ut);let Ae=!1;const st=new Qp;let _t=!1,Ut=!1;this.transmissionResolutionScale=1;const Et=new Ge,Ht=new Ge,he=new X,Zt=new Xe,Ne={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Re=!1;function fe(){return q===null?J:1}let I=r;function nn(T,H){return e.getContext(T,H)}try{const T={alpha:!0,depth:a,stencil:o,antialias:u,premultipliedAlpha:f,preserveDrawingBuffer:d,powerPreference:p,failIfMajorPerformanceCaveat:_};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Fu}`),e.addEventListener("webglcontextlost",ot,!1),e.addEventListener("webglcontextrestored",bt,!1),e.addEventListener("webglcontextcreationerror",Tt,!1),I===null){const H="webgl2";if(I=nn(H,T),I===null)throw nn(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let me,Qt,Bt,Le,Ft,R,y,Y,lt,ht,nt,Nt,gt,wt,de,mt,Ct,Vt,Yt,Pt,ue,jt,Ce,z;function Mt(){me=new uA(I),me.init(),jt=new qw(I,me),Qt=new iA(I,me,t,jt),Bt=new Ww(I,me),Qt.reverseDepthBuffer&&g&&Bt.buffers.depth.setReversed(!0),Le=new dA(I),Ft=new Dw,R=new Xw(I,me,Bt,Ft,Qt,jt,Le),y=new sA(P),Y=new cA(P),lt=new xE(I),Ce=new eA(I,lt),ht=new hA(I,lt,Le,Ce),nt=new mA(I,ht,lt,Le),Yt=new pA(I,Qt,R),mt=new rA(Ft),Nt=new Pw(P,y,Y,me,Qt,Ce,mt),gt=new Qw(P,Ft),wt=new Iw,de=new zw(me),Vt=new tA(P,y,Y,Bt,nt,x,f),Ct=new Vw(P,nt,Qt),z=new jw(I,Le,Qt,Bt),Pt=new nA(I,me,Le),ue=new fA(I,me,Le),Le.programs=Nt.programs,P.capabilities=Qt,P.extensions=me,P.properties=Ft,P.renderLists=wt,P.shadowMap=Ct,P.state=Bt,P.info=Le}Mt();const j=new $w(P,I);this.xr=j,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const T=me.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=me.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return J},this.setPixelRatio=function(T){T!==void 0&&(J=T,this.setSize(at,ut,!1))},this.getSize=function(T){return T.set(at,ut)},this.setSize=function(T,H,Z=!0){if(j.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}at=T,ut=H,e.width=Math.floor(T*J),e.height=Math.floor(H*J),Z===!0&&(e.style.width=T+"px",e.style.height=H+"px"),this.setViewport(0,0,T,H)},this.getDrawingBufferSize=function(T){return T.set(at*J,ut*J).floor()},this.setDrawingBufferSize=function(T,H,Z){at=T,ut=H,J=Z,e.width=Math.floor(T*Z),e.height=Math.floor(H*Z),this.setViewport(0,0,T,H)},this.getCurrentViewport=function(T){return T.copy(O)},this.getViewport=function(T){return T.copy(It)},this.setViewport=function(T,H,Z,K){T.isVector4?It.set(T.x,T.y,T.z,T.w):It.set(T,H,Z,K),Bt.viewport(O.copy(It).multiplyScalar(J).round())},this.getScissor=function(T){return T.copy(oe)},this.setScissor=function(T,H,Z,K){T.isVector4?oe.set(T.x,T.y,T.z,T.w):oe.set(T,H,Z,K),Bt.scissor(rt.copy(oe).multiplyScalar(J).round())},this.getScissorTest=function(){return Ae},this.setScissorTest=function(T){Bt.setScissorTest(Ae=T)},this.setOpaqueSort=function(T){St=T},this.setTransparentSort=function(T){At=T},this.getClearColor=function(T){return T.copy(Vt.getClearColor())},this.setClearColor=function(){Vt.setClearColor(...arguments)},this.getClearAlpha=function(){return Vt.getClearAlpha()},this.setClearAlpha=function(){Vt.setClearAlpha(...arguments)},this.clear=function(T=!0,H=!0,Z=!0){let K=0;if(T){let G=!1;if(q!==null){const pt=q.texture.format;G=pt===Vu||pt===ku||pt===Hu}if(G){const pt=q.texture.type,yt=pt===Gi||pt===Ur||pt===la||pt===ws||pt===Bu||pt===zu,Rt=Vt.getClearColor(),Lt=Vt.getClearAlpha(),Kt=Rt.r,Jt=Rt.g,kt=Rt.b;yt?(E[0]=Kt,E[1]=Jt,E[2]=kt,E[3]=Lt,I.clearBufferuiv(I.COLOR,0,E)):(A[0]=Kt,A[1]=Jt,A[2]=kt,A[3]=Lt,I.clearBufferiv(I.COLOR,0,A))}else K|=I.COLOR_BUFFER_BIT}H&&(K|=I.DEPTH_BUFFER_BIT),Z&&(K|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ot,!1),e.removeEventListener("webglcontextrestored",bt,!1),e.removeEventListener("webglcontextcreationerror",Tt,!1),Vt.dispose(),wt.dispose(),de.dispose(),Ft.dispose(),y.dispose(),Y.dispose(),nt.dispose(),Ce.dispose(),z.dispose(),Nt.dispose(),j.dispose(),j.removeEventListener("sessionstart",kr),j.removeEventListener("sessionend",ma),ni.stop()};function ot(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),W=!0}function bt(){console.log("THREE.WebGLRenderer: Context Restored."),W=!1;const T=Le.autoReset,H=Ct.enabled,Z=Ct.autoUpdate,K=Ct.needsUpdate,G=Ct.type;Mt(),Le.autoReset=T,Ct.enabled=H,Ct.autoUpdate=Z,Ct.needsUpdate=K,Ct.type=G}function Tt(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function ee(T){const H=T.target;H.removeEventListener("dispose",ee),ze(H)}function ze(T){Ke(T),Ft.remove(T)}function Ke(T){const H=Ft.get(T).programs;H!==void 0&&(H.forEach(function(Z){Nt.releaseProgram(Z)}),T.isShaderMaterial&&Nt.releaseShaderCache(T))}this.renderBufferDirect=function(T,H,Z,K,G,pt){H===null&&(H=Ne);const yt=G.isMesh&&G.matrixWorld.determinant()<0,Rt=ya(T,H,Z,K,G);Bt.setMaterial(K,yt);let Lt=Z.index,Kt=1;if(K.wireframe===!0){if(Lt=ht.getWireframeAttribute(Z),Lt===void 0)return;Kt=2}const Jt=Z.drawRange,kt=Z.attributes.position;let ge=Jt.start*Kt,ye=(Jt.start+Jt.count)*Kt;pt!==null&&(ge=Math.max(ge,pt.start*Kt),ye=Math.min(ye,(pt.start+pt.count)*Kt)),Lt!==null?(ge=Math.max(ge,0),ye=Math.min(ye,Lt.count)):kt!=null&&(ge=Math.max(ge,0),ye=Math.min(ye,kt.count));const ke=ye-ge;if(ke<0||ke===1/0)return;Ce.setup(G,K,Rt,Z,Lt);let Oe,ve=Pt;if(Lt!==null&&(Oe=lt.get(Lt),ve=ue,ve.setIndex(Oe)),G.isMesh)K.wireframe===!0?(Bt.setLineWidth(K.wireframeLinewidth*fe()),ve.setMode(I.LINES)):ve.setMode(I.TRIANGLES);else if(G.isLine){let zt=K.linewidth;zt===void 0&&(zt=1),Bt.setLineWidth(zt*fe()),G.isLineSegments?ve.setMode(I.LINES):G.isLineLoop?ve.setMode(I.LINE_LOOP):ve.setMode(I.LINE_STRIP)}else G.isPoints?ve.setMode(I.POINTS):G.isSprite&&ve.setMode(I.TRIANGLES);if(G.isBatchedMesh)if(G._multiDrawInstances!==null)Rr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ve.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances);else if(me.get("WEBGL_multi_draw"))ve.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const zt=G._multiDrawStarts,$e=G._multiDrawCounts,Me=G._multiDrawCount,hn=Lt?lt.get(Lt).bytesPerElement:1,Si=Ft.get(K).currentProgram.getUniforms();for(let gn=0;gn<Me;gn++)Si.setValue(I,"_gl_DrawID",gn),ve.render(zt[gn]/hn,$e[gn])}else if(G.isInstancedMesh)ve.renderInstances(ge,ke,G.count);else if(Z.isInstancedBufferGeometry){const zt=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,$e=Math.min(Z.instanceCount,zt);ve.renderInstances(ge,ke,$e)}else ve.render(ge,ke)};function Ee(T,H,Z){T.transparent===!0&&T.side===zi&&T.forceSinglePass===!1?(T.side=Ln,T.needsUpdate=!0,Gr(T,H,Z),T.side=hr,T.needsUpdate=!0,Gr(T,H,Z),T.side=zi):Gr(T,H,Z)}this.compile=function(T,H,Z=null){Z===null&&(Z=T),m=de.get(Z),m.init(H),L.push(m),Z.traverseVisible(function(G){G.isLight&&G.layers.test(H.layers)&&(m.pushLight(G),G.castShadow&&m.pushShadow(G))}),T!==Z&&T.traverseVisible(function(G){G.isLight&&G.layers.test(H.layers)&&(m.pushLight(G),G.castShadow&&m.pushShadow(G))}),m.setupLights();const K=new Set;return T.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const pt=G.material;if(pt)if(Array.isArray(pt))for(let yt=0;yt<pt.length;yt++){const Rt=pt[yt];Ee(Rt,Z,G),K.add(Rt)}else Ee(pt,Z,G),K.add(pt)}),m=L.pop(),K},this.compileAsync=function(T,H,Z=null){const K=this.compile(T,H,Z);return new Promise(G=>{function pt(){if(K.forEach(function(yt){Ft.get(yt).currentProgram.isReady()&&K.delete(yt)}),K.size===0){G(T);return}setTimeout(pt,10)}me.get("KHR_parallel_shader_compile")!==null?pt():setTimeout(pt,10)})};let In=null;function ei(T){In&&In(T)}function kr(){ni.stop()}function ma(){ni.start()}const ni=new sm;ni.setAnimationLoop(ei),typeof self<"u"&&ni.setContext(self),this.setAnimationLoop=function(T){In=T,j.setAnimationLoop(T),T===null?ni.stop():ni.start()},j.addEventListener("sessionstart",kr),j.addEventListener("sessionend",ma),this.render=function(T,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(W===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),j.enabled===!0&&j.isPresenting===!0&&(j.cameraAutoUpdate===!0&&j.updateCamera(H),H=j.getCamera()),T.isScene===!0&&T.onBeforeRender(P,T,H,q),m=de.get(T,L.length),m.init(H),L.push(m),Ht.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),st.setFromProjectionMatrix(Ht),Ut=this.localClippingEnabled,_t=mt.init(this.clippingPlanes,Ut),v=wt.get(T,N.length),v.init(),N.push(v),j.enabled===!0&&j.isPresenting===!0){const pt=P.xr.getDepthSensingMesh();pt!==null&&Ns(pt,H,-1/0,P.sortObjects)}Ns(T,H,0,P.sortObjects),v.finish(),P.sortObjects===!0&&v.sort(St,At),Re=j.enabled===!1||j.isPresenting===!1||j.hasDepthSensing()===!1,Re&&Vt.addToRenderList(v,T),this.info.render.frame++,_t===!0&&mt.beginShadows();const Z=m.state.shadowsArray;Ct.render(Z,T,H),_t===!0&&mt.endShadows(),this.info.autoReset===!0&&this.info.reset();const K=v.opaque,G=v.transmissive;if(m.setupLights(),H.isArrayCamera){const pt=H.cameras;if(G.length>0)for(let yt=0,Rt=pt.length;yt<Rt;yt++){const Lt=pt[yt];ga(K,G,T,Lt)}Re&&Vt.render(T);for(let yt=0,Rt=pt.length;yt<Rt;yt++){const Lt=pt[yt];_a(v,T,Lt,Lt.viewport)}}else G.length>0&&ga(K,G,T,H),Re&&Vt.render(T),_a(v,T,H);q!==null&&F===0&&(R.updateMultisampleRenderTarget(q),R.updateRenderTargetMipmap(q)),T.isScene===!0&&T.onAfterRender(P,T,H),Ce.resetDefaultState(),C=-1,w=null,L.pop(),L.length>0?(m=L[L.length-1],_t===!0&&mt.setGlobalState(P.clippingPlanes,m.state.camera)):m=null,N.pop(),N.length>0?v=N[N.length-1]:v=null};function Ns(T,H,Z,K){if(T.visible===!1)return;if(T.layers.test(H.layers)){if(T.isGroup)Z=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(H);else if(T.isLight)m.pushLight(T),T.castShadow&&m.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||st.intersectsSprite(T)){K&&Zt.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Ht);const yt=nt.update(T),Rt=T.material;Rt.visible&&v.push(T,yt,Rt,Z,Zt.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||st.intersectsObject(T))){const yt=nt.update(T),Rt=T.material;if(K&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Zt.copy(T.boundingSphere.center)):(yt.boundingSphere===null&&yt.computeBoundingSphere(),Zt.copy(yt.boundingSphere.center)),Zt.applyMatrix4(T.matrixWorld).applyMatrix4(Ht)),Array.isArray(Rt)){const Lt=yt.groups;for(let Kt=0,Jt=Lt.length;Kt<Jt;Kt++){const kt=Lt[Kt],ge=Rt[kt.materialIndex];ge&&ge.visible&&v.push(T,yt,ge,Z,Zt.z,kt)}}else Rt.visible&&v.push(T,yt,Rt,Z,Zt.z,null)}}const pt=T.children;for(let yt=0,Rt=pt.length;yt<Rt;yt++)Ns(pt[yt],H,Z,K)}function _a(T,H,Z,K){const G=T.opaque,pt=T.transmissive,yt=T.transparent;m.setupLightsView(Z),_t===!0&&mt.setGlobalState(P.clippingPlanes,Z),K&&Bt.viewport(O.copy(K)),G.length>0&&Vr(G,H,Z),pt.length>0&&Vr(pt,H,Z),yt.length>0&&Vr(yt,H,Z),Bt.buffers.depth.setTest(!0),Bt.buffers.depth.setMask(!0),Bt.buffers.color.setMask(!0),Bt.setPolygonOffset(!1)}function ga(T,H,Z,K){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[K.id]===void 0&&(m.state.transmissionRenderTarget[K.id]=new Nr(1,1,{generateMipmaps:!0,type:me.has("EXT_color_buffer_half_float")||me.has("EXT_color_buffer_float")?ua:Gi,minFilter:Ir,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Se.workingColorSpace}));const pt=m.state.transmissionRenderTarget[K.id],yt=K.viewport||O;pt.setSize(yt.z*P.transmissionResolutionScale,yt.w*P.transmissionResolutionScale);const Rt=P.getRenderTarget();P.setRenderTarget(pt),P.getClearColor(ct),dt=P.getClearAlpha(),dt<1&&P.setClearColor(16777215,.5),P.clear(),Re&&Vt.render(Z);const Lt=P.toneMapping;P.toneMapping=ur;const Kt=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),m.setupLightsView(K),_t===!0&&mt.setGlobalState(P.clippingPlanes,K),Vr(T,Z,K),R.updateMultisampleRenderTarget(pt),R.updateRenderTargetMipmap(pt),me.has("WEBGL_multisampled_render_to_texture")===!1){let Jt=!1;for(let kt=0,ge=H.length;kt<ge;kt++){const ye=H[kt],ke=ye.object,Oe=ye.geometry,ve=ye.material,zt=ye.group;if(ve.side===zi&&ke.layers.test(K.layers)){const $e=ve.side;ve.side=Ln,ve.needsUpdate=!0,va(ke,Z,K,Oe,ve,zt),ve.side=$e,ve.needsUpdate=!0,Jt=!0}}Jt===!0&&(R.updateMultisampleRenderTarget(pt),R.updateRenderTargetMipmap(pt))}P.setRenderTarget(Rt),P.setClearColor(ct,dt),Kt!==void 0&&(K.viewport=Kt),P.toneMapping=Lt}function Vr(T,H,Z){const K=H.isScene===!0?H.overrideMaterial:null;for(let G=0,pt=T.length;G<pt;G++){const yt=T[G],Rt=yt.object,Lt=yt.geometry,Kt=K===null?yt.material:K,Jt=yt.group;Rt.layers.test(Z.layers)&&va(Rt,H,Z,Lt,Kt,Jt)}}function va(T,H,Z,K,G,pt){T.onBeforeRender(P,H,Z,K,G,pt),T.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),G.onBeforeRender(P,H,Z,K,T,pt),G.transparent===!0&&G.side===zi&&G.forceSinglePass===!1?(G.side=Ln,G.needsUpdate=!0,P.renderBufferDirect(Z,H,K,G,T,pt),G.side=hr,G.needsUpdate=!0,P.renderBufferDirect(Z,H,K,G,T,pt),G.side=zi):P.renderBufferDirect(Z,H,K,G,T,pt),T.onAfterRender(P,H,Z,K,G,pt)}function Gr(T,H,Z){H.isScene!==!0&&(H=Ne);const K=Ft.get(T),G=m.state.lights,pt=m.state.shadowsArray,yt=G.state.version,Rt=Nt.getParameters(T,G.state,pt,H,Z),Lt=Nt.getProgramCacheKey(Rt);let Kt=K.programs;K.environment=T.isMeshStandardMaterial?H.environment:null,K.fog=H.fog,K.envMap=(T.isMeshStandardMaterial?Y:y).get(T.envMap||K.environment),K.envMapRotation=K.environment!==null&&T.envMap===null?H.environmentRotation:T.envMapRotation,Kt===void 0&&(T.addEventListener("dispose",ee),Kt=new Map,K.programs=Kt);let Jt=Kt.get(Lt);if(Jt!==void 0){if(K.currentProgram===Jt&&K.lightsStateVersion===yt)return Ma(T,Rt),Jt}else Rt.uniforms=Nt.getUniforms(T),T.onBeforeCompile(Rt,P),Jt=Nt.acquireProgram(Rt,Lt),Kt.set(Lt,Jt),K.uniforms=Rt.uniforms;const kt=K.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(kt.clippingPlanes=mt.uniform),Ma(T,Rt),K.needsLights=el(T),K.lightsStateVersion=yt,K.needsLights&&(kt.ambientLightColor.value=G.state.ambient,kt.lightProbe.value=G.state.probe,kt.directionalLights.value=G.state.directional,kt.directionalLightShadows.value=G.state.directionalShadow,kt.spotLights.value=G.state.spot,kt.spotLightShadows.value=G.state.spotShadow,kt.rectAreaLights.value=G.state.rectArea,kt.ltc_1.value=G.state.rectAreaLTC1,kt.ltc_2.value=G.state.rectAreaLTC2,kt.pointLights.value=G.state.point,kt.pointLightShadows.value=G.state.pointShadow,kt.hemisphereLights.value=G.state.hemi,kt.directionalShadowMap.value=G.state.directionalShadowMap,kt.directionalShadowMatrix.value=G.state.directionalShadowMatrix,kt.spotShadowMap.value=G.state.spotShadowMap,kt.spotLightMatrix.value=G.state.spotLightMatrix,kt.spotLightMap.value=G.state.spotLightMap,kt.pointShadowMap.value=G.state.pointShadowMap,kt.pointShadowMatrix.value=G.state.pointShadowMatrix),K.currentProgram=Jt,K.uniformsList=null,Jt}function xa(T){if(T.uniformsList===null){const H=T.currentProgram.getUniforms();T.uniformsList=zo.seqWithValue(H.seq,T.uniforms)}return T.uniformsList}function Ma(T,H){const Z=Ft.get(T);Z.outputColorSpace=H.outputColorSpace,Z.batching=H.batching,Z.batchingColor=H.batchingColor,Z.instancing=H.instancing,Z.instancingColor=H.instancingColor,Z.instancingMorph=H.instancingMorph,Z.skinning=H.skinning,Z.morphTargets=H.morphTargets,Z.morphNormals=H.morphNormals,Z.morphColors=H.morphColors,Z.morphTargetsCount=H.morphTargetsCount,Z.numClippingPlanes=H.numClippingPlanes,Z.numIntersection=H.numClipIntersection,Z.vertexAlphas=H.vertexAlphas,Z.vertexTangents=H.vertexTangents,Z.toneMapping=H.toneMapping}function ya(T,H,Z,K,G){H.isScene!==!0&&(H=Ne),R.resetTextureUnits();const pt=H.fog,yt=K.isMeshStandardMaterial?H.environment:null,Rt=q===null?P.outputColorSpace:q.isXRRenderTarget===!0?q.texture.colorSpace:Cs,Lt=(K.isMeshStandardMaterial?Y:y).get(K.envMap||yt),Kt=K.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,Jt=!!Z.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),kt=!!Z.morphAttributes.position,ge=!!Z.morphAttributes.normal,ye=!!Z.morphAttributes.color;let ke=ur;K.toneMapped&&(q===null||q.isXRRenderTarget===!0)&&(ke=P.toneMapping);const Oe=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,ve=Oe!==void 0?Oe.length:0,zt=Ft.get(K),$e=m.state.lights;if(_t===!0&&(Ut===!0||T!==w)){const rn=T===w&&K.id===C;mt.setState(K,T,rn)}let Me=!1;K.version===zt.__version?(zt.needsLights&&zt.lightsStateVersion!==$e.state.version||zt.outputColorSpace!==Rt||G.isBatchedMesh&&zt.batching===!1||!G.isBatchedMesh&&zt.batching===!0||G.isBatchedMesh&&zt.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&zt.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&zt.instancing===!1||!G.isInstancedMesh&&zt.instancing===!0||G.isSkinnedMesh&&zt.skinning===!1||!G.isSkinnedMesh&&zt.skinning===!0||G.isInstancedMesh&&zt.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&zt.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&zt.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&zt.instancingMorph===!1&&G.morphTexture!==null||zt.envMap!==Lt||K.fog===!0&&zt.fog!==pt||zt.numClippingPlanes!==void 0&&(zt.numClippingPlanes!==mt.numPlanes||zt.numIntersection!==mt.numIntersection)||zt.vertexAlphas!==Kt||zt.vertexTangents!==Jt||zt.morphTargets!==kt||zt.morphNormals!==ge||zt.morphColors!==ye||zt.toneMapping!==ke||zt.morphTargetsCount!==ve)&&(Me=!0):(Me=!0,zt.__version=K.version);let hn=zt.currentProgram;Me===!0&&(hn=Gr(K,H,G));let Si=!1,gn=!1,Wi=!1;const Ie=hn.getUniforms(),fn=zt.uniforms;if(Bt.useProgram(hn.program)&&(Si=!0,gn=!0,Wi=!0),K.id!==C&&(C=K.id,gn=!0),Si||w!==T){Bt.buffers.depth.getReversed()?(Et.copy(T.projectionMatrix),SS(Et),ES(Et),Ie.setValue(I,"projectionMatrix",Et)):Ie.setValue(I,"projectionMatrix",T.projectionMatrix),Ie.setValue(I,"viewMatrix",T.matrixWorldInverse);const sn=Ie.map.cameraPosition;sn!==void 0&&sn.setValue(I,he.setFromMatrixPosition(T.matrixWorld)),Qt.logarithmicDepthBuffer&&Ie.setValue(I,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&Ie.setValue(I,"isOrthographic",T.isOrthographicCamera===!0),w!==T&&(w=T,gn=!0,Wi=!0)}if(G.isSkinnedMesh){Ie.setOptional(I,G,"bindMatrix"),Ie.setOptional(I,G,"bindMatrixInverse");const rn=G.skeleton;rn&&(rn.boneTexture===null&&rn.computeBoneTexture(),Ie.setValue(I,"boneTexture",rn.boneTexture,R))}G.isBatchedMesh&&(Ie.setOptional(I,G,"batchingTexture"),Ie.setValue(I,"batchingTexture",G._matricesTexture,R),Ie.setOptional(I,G,"batchingIdTexture"),Ie.setValue(I,"batchingIdTexture",G._indirectTexture,R),Ie.setOptional(I,G,"batchingColorTexture"),G._colorsTexture!==null&&Ie.setValue(I,"batchingColorTexture",G._colorsTexture,R));const bn=Z.morphAttributes;if((bn.position!==void 0||bn.normal!==void 0||bn.color!==void 0)&&Yt.update(G,Z,hn),(gn||zt.receiveShadow!==G.receiveShadow)&&(zt.receiveShadow=G.receiveShadow,Ie.setValue(I,"receiveShadow",G.receiveShadow)),K.isMeshGouraudMaterial&&K.envMap!==null&&(fn.envMap.value=Lt,fn.flipEnvMap.value=Lt.isCubeTexture&&Lt.isRenderTargetTexture===!1?-1:1),K.isMeshStandardMaterial&&K.envMap===null&&H.environment!==null&&(fn.envMapIntensity.value=H.environmentIntensity),gn&&(Ie.setValue(I,"toneMappingExposure",P.toneMappingExposure),zt.needsLights&&tl(fn,Wi),pt&&K.fog===!0&&gt.refreshFogUniforms(fn,pt),gt.refreshMaterialUniforms(fn,K,J,ut,m.state.transmissionRenderTarget[T.id]),zo.upload(I,xa(zt),fn,R)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(zo.upload(I,xa(zt),fn,R),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&Ie.setValue(I,"center",G.center),Ie.setValue(I,"modelViewMatrix",G.modelViewMatrix),Ie.setValue(I,"normalMatrix",G.normalMatrix),Ie.setValue(I,"modelMatrix",G.matrixWorld),K.isShaderMaterial||K.isRawShaderMaterial){const rn=K.uniformsGroups;for(let sn=0,fr=rn.length;sn<fr;sn++){const An=rn[sn];z.update(An,hn),z.bind(An,hn)}}return hn}function tl(T,H){T.ambientLightColor.needsUpdate=H,T.lightProbe.needsUpdate=H,T.directionalLights.needsUpdate=H,T.directionalLightShadows.needsUpdate=H,T.pointLights.needsUpdate=H,T.pointLightShadows.needsUpdate=H,T.spotLights.needsUpdate=H,T.spotLightShadows.needsUpdate=H,T.rectAreaLights.needsUpdate=H,T.hemisphereLights.needsUpdate=H}function el(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return q},this.setRenderTargetTextures=function(T,H,Z){Ft.get(T.texture).__webglTexture=H,Ft.get(T.depthTexture).__webglTexture=Z;const K=Ft.get(T);K.__hasExternalTextures=!0,K.__autoAllocateDepthBuffer=Z===void 0,K.__autoAllocateDepthBuffer||me.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),K.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,H){const Z=Ft.get(T);Z.__webglFramebuffer=H,Z.__useDefaultFramebuffer=H===void 0};const nl=I.createFramebuffer();this.setRenderTarget=function(T,H=0,Z=0){q=T,B=H,F=Z;let K=!0,G=null,pt=!1,yt=!1;if(T){const Lt=Ft.get(T);if(Lt.__useDefaultFramebuffer!==void 0)Bt.bindFramebuffer(I.FRAMEBUFFER,null),K=!1;else if(Lt.__webglFramebuffer===void 0)R.setupRenderTarget(T);else if(Lt.__hasExternalTextures)R.rebindTextures(T,Ft.get(T.texture).__webglTexture,Ft.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const kt=T.depthTexture;if(Lt.__boundDepthTexture!==kt){if(kt!==null&&Ft.has(kt)&&(T.width!==kt.image.width||T.height!==kt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(T)}}const Kt=T.texture;(Kt.isData3DTexture||Kt.isDataArrayTexture||Kt.isCompressedArrayTexture)&&(yt=!0);const Jt=Ft.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Jt[H])?G=Jt[H][Z]:G=Jt[H],pt=!0):T.samples>0&&R.useMultisampledRTT(T)===!1?G=Ft.get(T).__webglMultisampledFramebuffer:Array.isArray(Jt)?G=Jt[Z]:G=Jt,O.copy(T.viewport),rt.copy(T.scissor),Q=T.scissorTest}else O.copy(It).multiplyScalar(J).floor(),rt.copy(oe).multiplyScalar(J).floor(),Q=Ae;if(Z!==0&&(G=nl),Bt.bindFramebuffer(I.FRAMEBUFFER,G)&&K&&Bt.drawBuffers(T,G),Bt.viewport(O),Bt.scissor(rt),Bt.setScissorTest(Q),pt){const Lt=Ft.get(T.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+H,Lt.__webglTexture,Z)}else if(yt){const Lt=Ft.get(T.texture),Kt=H;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,Lt.__webglTexture,Z,Kt)}else if(T!==null&&Z!==0){const Lt=Ft.get(T.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Lt.__webglTexture,Z)}C=-1},this.readRenderTargetPixels=function(T,H,Z,K,G,pt,yt){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Rt=Ft.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&yt!==void 0&&(Rt=Rt[yt]),Rt){Bt.bindFramebuffer(I.FRAMEBUFFER,Rt);try{const Lt=T.texture,Kt=Lt.format,Jt=Lt.type;if(!Qt.textureFormatReadable(Kt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Qt.textureTypeReadable(Jt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=T.width-K&&Z>=0&&Z<=T.height-G&&I.readPixels(H,Z,K,G,jt.convert(Kt),jt.convert(Jt),pt)}finally{const Lt=q!==null?Ft.get(q).__webglFramebuffer:null;Bt.bindFramebuffer(I.FRAMEBUFFER,Lt)}}},this.readRenderTargetPixelsAsync=async function(T,H,Z,K,G,pt,yt){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Rt=Ft.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&yt!==void 0&&(Rt=Rt[yt]),Rt){const Lt=T.texture,Kt=Lt.format,Jt=Lt.type;if(!Qt.textureFormatReadable(Kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Qt.textureTypeReadable(Jt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(H>=0&&H<=T.width-K&&Z>=0&&Z<=T.height-G){Bt.bindFramebuffer(I.FRAMEBUFFER,Rt);const kt=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,kt),I.bufferData(I.PIXEL_PACK_BUFFER,pt.byteLength,I.STREAM_READ),I.readPixels(H,Z,K,G,jt.convert(Kt),jt.convert(Jt),0);const ge=q!==null?Ft.get(q).__webglFramebuffer:null;Bt.bindFramebuffer(I.FRAMEBUFFER,ge);const ye=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await yS(I,ye,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,kt),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,pt),I.deleteBuffer(kt),I.deleteSync(ye),pt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(T,H=null,Z=0){T.isTexture!==!0&&(Rr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),H=arguments[0]||null,T=arguments[1]);const K=Math.pow(2,-Z),G=Math.floor(T.image.width*K),pt=Math.floor(T.image.height*K),yt=H!==null?H.x:0,Rt=H!==null?H.y:0;R.setTexture2D(T,0),I.copyTexSubImage2D(I.TEXTURE_2D,Z,0,0,yt,Rt,G,pt),Bt.unbindTexture()};const il=I.createFramebuffer(),rl=I.createFramebuffer();this.copyTextureToTexture=function(T,H,Z=null,K=null,G=0,pt=null){T.isTexture!==!0&&(Rr("WebGLRenderer: copyTextureToTexture function signature has changed."),K=arguments[0]||null,T=arguments[1],H=arguments[2],pt=arguments[3]||0,Z=null),pt===null&&(G!==0?(Rr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),pt=G,G=0):pt=0);let yt,Rt,Lt,Kt,Jt,kt,ge,ye,ke;const Oe=T.isCompressedTexture?T.mipmaps[pt]:T.image;if(Z!==null)yt=Z.max.x-Z.min.x,Rt=Z.max.y-Z.min.y,Lt=Z.isBox3?Z.max.z-Z.min.z:1,Kt=Z.min.x,Jt=Z.min.y,kt=Z.isBox3?Z.min.z:0;else{const bn=Math.pow(2,-G);yt=Math.floor(Oe.width*bn),Rt=Math.floor(Oe.height*bn),T.isDataArrayTexture?Lt=Oe.depth:T.isData3DTexture?Lt=Math.floor(Oe.depth*bn):Lt=1,Kt=0,Jt=0,kt=0}K!==null?(ge=K.x,ye=K.y,ke=K.z):(ge=0,ye=0,ke=0);const ve=jt.convert(H.format),zt=jt.convert(H.type);let $e;H.isData3DTexture?(R.setTexture3D(H,0),$e=I.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(R.setTexture2DArray(H,0),$e=I.TEXTURE_2D_ARRAY):(R.setTexture2D(H,0),$e=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,H.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,H.unpackAlignment);const Me=I.getParameter(I.UNPACK_ROW_LENGTH),hn=I.getParameter(I.UNPACK_IMAGE_HEIGHT),Si=I.getParameter(I.UNPACK_SKIP_PIXELS),gn=I.getParameter(I.UNPACK_SKIP_ROWS),Wi=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,Oe.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Oe.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Kt),I.pixelStorei(I.UNPACK_SKIP_ROWS,Jt),I.pixelStorei(I.UNPACK_SKIP_IMAGES,kt);const Ie=T.isDataArrayTexture||T.isData3DTexture,fn=H.isDataArrayTexture||H.isData3DTexture;if(T.isDepthTexture){const bn=Ft.get(T),rn=Ft.get(H),sn=Ft.get(bn.__renderTarget),fr=Ft.get(rn.__renderTarget);Bt.bindFramebuffer(I.READ_FRAMEBUFFER,sn.__webglFramebuffer),Bt.bindFramebuffer(I.DRAW_FRAMEBUFFER,fr.__webglFramebuffer);for(let An=0;An<Lt;An++)Ie&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Ft.get(T).__webglTexture,G,kt+An),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Ft.get(H).__webglTexture,pt,ke+An)),I.blitFramebuffer(Kt,Jt,yt,Rt,ge,ye,yt,Rt,I.DEPTH_BUFFER_BIT,I.NEAREST);Bt.bindFramebuffer(I.READ_FRAMEBUFFER,null),Bt.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(G!==0||T.isRenderTargetTexture||Ft.has(T)){const bn=Ft.get(T),rn=Ft.get(H);Bt.bindFramebuffer(I.READ_FRAMEBUFFER,il),Bt.bindFramebuffer(I.DRAW_FRAMEBUFFER,rl);for(let sn=0;sn<Lt;sn++)Ie?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,bn.__webglTexture,G,kt+sn):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,bn.__webglTexture,G),fn?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,rn.__webglTexture,pt,ke+sn):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,rn.__webglTexture,pt),G!==0?I.blitFramebuffer(Kt,Jt,yt,Rt,ge,ye,yt,Rt,I.COLOR_BUFFER_BIT,I.NEAREST):fn?I.copyTexSubImage3D($e,pt,ge,ye,ke+sn,Kt,Jt,yt,Rt):I.copyTexSubImage2D($e,pt,ge,ye,Kt,Jt,yt,Rt);Bt.bindFramebuffer(I.READ_FRAMEBUFFER,null),Bt.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else fn?T.isDataTexture||T.isData3DTexture?I.texSubImage3D($e,pt,ge,ye,ke,yt,Rt,Lt,ve,zt,Oe.data):H.isCompressedArrayTexture?I.compressedTexSubImage3D($e,pt,ge,ye,ke,yt,Rt,Lt,ve,Oe.data):I.texSubImage3D($e,pt,ge,ye,ke,yt,Rt,Lt,ve,zt,Oe):T.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,pt,ge,ye,yt,Rt,ve,zt,Oe.data):T.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,pt,ge,ye,Oe.width,Oe.height,ve,Oe.data):I.texSubImage2D(I.TEXTURE_2D,pt,ge,ye,yt,Rt,ve,zt,Oe);I.pixelStorei(I.UNPACK_ROW_LENGTH,Me),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,hn),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Si),I.pixelStorei(I.UNPACK_SKIP_ROWS,gn),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Wi),pt===0&&H.generateMipmaps&&I.generateMipmap($e),Bt.unbindTexture()},this.copyTextureToTexture3D=function(T,H,Z=null,K=null,G=0){return T.isTexture!==!0&&(Rr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),Z=arguments[0]||null,K=arguments[1]||null,T=arguments[2],H=arguments[3],G=arguments[4]||0),Rr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(T,H,Z,K,G)},this.initRenderTarget=function(T){Ft.get(T).__webglFramebuffer===void 0&&R.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?R.setTextureCube(T,0):T.isData3DTexture?R.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?R.setTexture2DArray(T,0):R.setTexture2D(T,0),Bt.unbindTexture()},this.resetState=function(){B=0,F=0,q=null,Bt.reset(),Ce.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Hi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=Se._getDrawingBufferColorSpace(t),e.unpackColorSpace=Se._getUnpackColorSpace()}}var e1=Object.create,um=Object.defineProperty,n1=Object.getOwnPropertyDescriptor,i1=Object.getOwnPropertyNames,r1=Object.getPrototypeOf,s1=Object.prototype.hasOwnProperty,a1=(i,t)=>()=>(t||i((t={exports:{}}).exports,t),t.exports),o1=(i,t,e,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let a of i1(t))!s1.call(i,a)&&a!==e&&um(i,a,{get:()=>t[a],enumerable:!(r=n1(t,a))||r.enumerable});return i},zr=(i,t,e)=>(e=i!=null?e1(r1(i)):{},o1(um(e,"default",{value:i,enumerable:!0}),i)),Hr=a1((i,t)=>{(function(){var e,r="4.17.21",a=200,o="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",c="Expected a function",u="Invalid `variable` option passed into `_.template`",f="__lodash_hash_undefined__",d=500,p="__lodash_placeholder__",_=1,g=2,x=4,E=1,A=2,v=1,m=2,N=4,L=8,P=16,W=32,B=64,F=128,q=256,C=512,w=30,O="...",rt=800,Q=16,ct=1,dt=2,at=3,ut=1/0,J=9007199254740991,St=17976931348623157e292,At=NaN,It=4294967295,oe=It-1,Ae=It>>>1,st=[["ary",F],["bind",v],["bindKey",m],["curry",L],["curryRight",P],["flip",C],["partial",W],["partialRight",B],["rearg",q]],_t="[object Arguments]",Ut="[object Array]",Et="[object AsyncFunction]",Ht="[object Boolean]",he="[object Date]",Zt="[object DOMException]",Ne="[object Error]",Re="[object Function]",fe="[object GeneratorFunction]",I="[object Map]",nn="[object Number]",me="[object Null]",Qt="[object Object]",Bt="[object Promise]",Le="[object Proxy]",Ft="[object RegExp]",R="[object Set]",y="[object String]",Y="[object Symbol]",lt="[object Undefined]",ht="[object WeakMap]",nt="[object WeakSet]",Nt="[object ArrayBuffer]",gt="[object DataView]",wt="[object Float32Array]",de="[object Float64Array]",mt="[object Int8Array]",Ct="[object Int16Array]",Vt="[object Int32Array]",Yt="[object Uint8Array]",Pt="[object Uint8ClampedArray]",ue="[object Uint16Array]",jt="[object Uint32Array]",Ce=/\b__p \+= '';/g,z=/\b(__p \+=) '' \+/g,Mt=/(__e\(.*?\)|\b__t\)) \+\n'';/g,j=/&(?:amp|lt|gt|quot|#39);/g,ot=/[&<>"']/g,bt=RegExp(j.source),Tt=RegExp(ot.source),ee=/<%-([\s\S]+?)%>/g,ze=/<%([\s\S]+?)%>/g,Ke=/<%=([\s\S]+?)%>/g,Ee=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,In=/^\w*$/,ei=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,kr=/[\\^$.*+?()[\]{}|]/g,ma=RegExp(kr.source),ni=/^\s+/,Ns=/\s/,_a=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,ga=/\{\n\/\* \[wrapped with (.+)\] \*/,Vr=/,? & /,va=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,Gr=/[()=,{}\[\]\/\s]/,xa=/\\(\\)?/g,Ma=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,ya=/\w*$/,tl=/^[-+]0x[0-9a-f]+$/i,el=/^0b[01]+$/i,nl=/^\[object .+?Constructor\]$/,il=/^0o[0-7]+$/i,rl=/^(?:0|[1-9]\d*)$/,T=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,H=/($^)/,Z=/['\n\r\u2028\u2029\\]/g,K="\\ud800-\\udfff",G="\\u0300-\\u036f",pt="\\ufe20-\\ufe2f",yt="\\u20d0-\\u20ff",Rt=G+pt+yt,Lt="\\u2700-\\u27bf",Kt="a-z\\xdf-\\xf6\\xf8-\\xff",Jt="\\xac\\xb1\\xd7\\xf7",kt="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",ge="\\u2000-\\u206f",ye=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",ke="A-Z\\xc0-\\xd6\\xd8-\\xde",Oe="\\ufe0e\\ufe0f",ve=Jt+kt+ge+ye,zt="['’]",$e="["+K+"]",Me="["+ve+"]",hn="["+Rt+"]",Si="\\d+",gn="["+Lt+"]",Wi="["+Kt+"]",Ie="[^"+K+ve+Si+Lt+Kt+ke+"]",fn="\\ud83c[\\udffb-\\udfff]",bn="(?:"+hn+"|"+fn+")",rn="[^"+K+"]",sn="(?:\\ud83c[\\udde6-\\uddff]){2}",fr="[\\ud800-\\udbff][\\udc00-\\udfff]",An="["+ke+"]",ju="\\u200d",th="(?:"+Wi+"|"+Ie+")",Mm="(?:"+An+"|"+Ie+")",eh="(?:"+zt+"(?:d|ll|m|re|s|t|ve))?",nh="(?:"+zt+"(?:D|LL|M|RE|S|T|VE))?",ih=bn+"?",rh="["+Oe+"]?",ym="(?:"+ju+"(?:"+[rn,sn,fr].join("|")+")"+rh+ih+")*",Sm="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Em="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",sh=rh+ih+ym,Tm="(?:"+[gn,sn,fr].join("|")+")"+sh,bm="(?:"+[rn+hn+"?",hn,sn,fr,$e].join("|")+")",Am=RegExp(zt,"g"),wm=RegExp(hn,"g"),sl=RegExp(fn+"(?="+fn+")|"+bm+sh,"g"),Rm=RegExp([An+"?"+Wi+"+"+eh+"(?="+[Me,An,"$"].join("|")+")",Mm+"+"+nh+"(?="+[Me,An+th,"$"].join("|")+")",An+"?"+th+"+"+eh,An+"+"+nh,Em,Sm,Si,Tm].join("|"),"g"),Cm=RegExp("["+ju+K+Rt+Oe+"]"),Pm=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,Dm=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],Lm=-1,Be={};Be[wt]=Be[de]=Be[mt]=Be[Ct]=Be[Vt]=Be[Yt]=Be[Pt]=Be[ue]=Be[jt]=!0,Be[_t]=Be[Ut]=Be[Nt]=Be[Ht]=Be[gt]=Be[he]=Be[Ne]=Be[Re]=Be[I]=Be[nn]=Be[Qt]=Be[Ft]=Be[R]=Be[y]=Be[ht]=!1;var Fe={};Fe[_t]=Fe[Ut]=Fe[Nt]=Fe[gt]=Fe[Ht]=Fe[he]=Fe[wt]=Fe[de]=Fe[mt]=Fe[Ct]=Fe[Vt]=Fe[I]=Fe[nn]=Fe[Qt]=Fe[Ft]=Fe[R]=Fe[y]=Fe[Y]=Fe[Yt]=Fe[Pt]=Fe[ue]=Fe[jt]=!0,Fe[Ne]=Fe[Re]=Fe[ht]=!1;var Im={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},Um={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Nm={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},Fm={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},Om=parseFloat,Bm=parseInt,ah=typeof global=="object"&&global&&global.Object===Object&&global,zm=typeof self=="object"&&self&&self.Object===Object&&self,an=ah||zm||Function("return this")(),al=typeof i=="object"&&i&&!i.nodeType&&i,dr=al&&typeof t=="object"&&t&&!t.nodeType&&t,oh=dr&&dr.exports===al,ol=oh&&ah.process,Gn=function(){try{var k=dr&&dr.require&&dr.require("util").types;return k||ol&&ol.binding&&ol.binding("util")}catch{}}(),lh=Gn&&Gn.isArrayBuffer,ch=Gn&&Gn.isDate,uh=Gn&&Gn.isMap,hh=Gn&&Gn.isRegExp,fh=Gn&&Gn.isSet,dh=Gn&&Gn.isTypedArray;function Un(k,tt,$){switch($.length){case 0:return k.call(tt);case 1:return k.call(tt,$[0]);case 2:return k.call(tt,$[0],$[1]);case 3:return k.call(tt,$[0],$[1],$[2])}return k.apply(tt,$)}function Hm(k,tt,$,Dt){for(var te=-1,Te=k==null?0:k.length;++te<Te;){var Je=k[te];tt(Dt,Je,$(Je),k)}return Dt}function Wn(k,tt){for(var $=-1,Dt=k==null?0:k.length;++$<Dt&&tt(k[$],$,k)!==!1;);return k}function km(k,tt){for(var $=k==null?0:k.length;$--&&tt(k[$],$,k)!==!1;);return k}function ph(k,tt){for(var $=-1,Dt=k==null?0:k.length;++$<Dt;)if(!tt(k[$],$,k))return!1;return!0}function Xi(k,tt){for(var $=-1,Dt=k==null?0:k.length,te=0,Te=[];++$<Dt;){var Je=k[$];tt(Je,$,k)&&(Te[te++]=Je)}return Te}function Sa(k,tt){var $=k==null?0:k.length;return!!$&&Wr(k,tt,0)>-1}function ll(k,tt,$){for(var Dt=-1,te=k==null?0:k.length;++Dt<te;)if($(tt,k[Dt]))return!0;return!1}function He(k,tt){for(var $=-1,Dt=k==null?0:k.length,te=Array(Dt);++$<Dt;)te[$]=tt(k[$],$,k);return te}function qi(k,tt){for(var $=-1,Dt=tt.length,te=k.length;++$<Dt;)k[te+$]=tt[$];return k}function cl(k,tt,$,Dt){var te=-1,Te=k==null?0:k.length;for(Dt&&Te&&($=k[++te]);++te<Te;)$=tt($,k[te],te,k);return $}function Vm(k,tt,$,Dt){var te=k==null?0:k.length;for(Dt&&te&&($=k[--te]);te--;)$=tt($,k[te],te,k);return $}function ul(k,tt){for(var $=-1,Dt=k==null?0:k.length;++$<Dt;)if(tt(k[$],$,k))return!0;return!1}var Gm=hl("length");function Wm(k){return k.split("")}function Xm(k){return k.match(va)||[]}function mh(k,tt,$){var Dt;return $(k,function(te,Te,Je){if(tt(te,Te,Je))return Dt=Te,!1}),Dt}function Ea(k,tt,$,Dt){for(var te=k.length,Te=$+(Dt?1:-1);Dt?Te--:++Te<te;)if(tt(k[Te],Te,k))return Te;return-1}function Wr(k,tt,$){return tt===tt?i_(k,tt,$):Ea(k,_h,$)}function qm(k,tt,$,Dt){for(var te=$-1,Te=k.length;++te<Te;)if(Dt(k[te],tt))return te;return-1}function _h(k){return k!==k}function gh(k,tt){var $=k==null?0:k.length;return $?dl(k,tt)/$:At}function hl(k){return function(tt){return tt==null?e:tt[k]}}function fl(k){return function(tt){return k==null?e:k[tt]}}function vh(k,tt,$,Dt,te){return te(k,function(Te,Je,Ue){$=Dt?(Dt=!1,Te):tt($,Te,Je,Ue)}),$}function Ym(k,tt){var $=k.length;for(k.sort(tt);$--;)k[$]=k[$].value;return k}function dl(k,tt){for(var $,Dt=-1,te=k.length;++Dt<te;){var Te=tt(k[Dt]);Te!==e&&($=$===e?Te:$+Te)}return $}function pl(k,tt){for(var $=-1,Dt=Array(k);++$<k;)Dt[$]=tt($);return Dt}function Zm(k,tt){return He(tt,function($){return[$,k[$]]})}function xh(k){return k&&k.slice(0,Eh(k)+1).replace(ni,"")}function Nn(k){return function(tt){return k(tt)}}function ml(k,tt){return He(tt,function($){return k[$]})}function Fs(k,tt){return k.has(tt)}function Mh(k,tt){for(var $=-1,Dt=k.length;++$<Dt&&Wr(tt,k[$],0)>-1;);return $}function yh(k,tt){for(var $=k.length;$--&&Wr(tt,k[$],0)>-1;);return $}function Km(k,tt){for(var $=k.length,Dt=0;$--;)k[$]===tt&&++Dt;return Dt}var $m=fl(Im),Jm=fl(Um);function Qm(k){return"\\"+Fm[k]}function jm(k,tt){return k==null?e:k[tt]}function Xr(k){return Cm.test(k)}function t_(k){return Pm.test(k)}function e_(k){for(var tt,$=[];!(tt=k.next()).done;)$.push(tt.value);return $}function _l(k){var tt=-1,$=Array(k.size);return k.forEach(function(Dt,te){$[++tt]=[te,Dt]}),$}function Sh(k,tt){return function($){return k(tt($))}}function Yi(k,tt){for(var $=-1,Dt=k.length,te=0,Te=[];++$<Dt;){var Je=k[$];(Je===tt||Je===p)&&(k[$]=p,Te[te++]=$)}return Te}function Ta(k){var tt=-1,$=Array(k.size);return k.forEach(function(Dt){$[++tt]=Dt}),$}function n_(k){var tt=-1,$=Array(k.size);return k.forEach(function(Dt){$[++tt]=[Dt,Dt]}),$}function i_(k,tt,$){for(var Dt=$-1,te=k.length;++Dt<te;)if(k[Dt]===tt)return Dt;return-1}function r_(k,tt,$){for(var Dt=$+1;Dt--;)if(k[Dt]===tt)return Dt;return Dt}function qr(k){return Xr(k)?a_(k):Gm(k)}function ii(k){return Xr(k)?o_(k):Wm(k)}function Eh(k){for(var tt=k.length;tt--&&Ns.test(k.charAt(tt)););return tt}var s_=fl(Nm);function a_(k){for(var tt=sl.lastIndex=0;sl.test(k);)++tt;return tt}function o_(k){return k.match(sl)||[]}function l_(k){return k.match(Rm)||[]}var c_=function k(tt){tt=tt==null?an:Zi.defaults(an.Object(),tt,Zi.pick(an,Dm));var $=tt.Array,Dt=tt.Date,te=tt.Error,Te=tt.Function,Je=tt.Math,Ue=tt.Object,gl=tt.RegExp,u_=tt.String,Xn=tt.TypeError,ba=$.prototype,h_=Te.prototype,Yr=Ue.prototype,Aa=tt["__core-js_shared__"],wa=h_.toString,we=Yr.hasOwnProperty,f_=0,Th=function(){var n=/[^.]+$/.exec(Aa&&Aa.keys&&Aa.keys.IE_PROTO||"");return n?"Symbol(src)_1."+n:""}(),Ra=Yr.toString,d_=wa.call(Ue),p_=an._,m_=gl("^"+wa.call(we).replace(kr,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Ca=oh?tt.Buffer:e,Ki=tt.Symbol,Pa=tt.Uint8Array,bh=Ca?Ca.allocUnsafe:e,Da=Sh(Ue.getPrototypeOf,Ue),Ah=Ue.create,wh=Yr.propertyIsEnumerable,La=ba.splice,Rh=Ki?Ki.isConcatSpreadable:e,Os=Ki?Ki.iterator:e,pr=Ki?Ki.toStringTag:e,Ia=function(){try{var n=xr(Ue,"defineProperty");return n({},"",{}),n}catch{}}(),__=tt.clearTimeout!==an.clearTimeout&&tt.clearTimeout,g_=Dt&&Dt.now!==an.Date.now&&Dt.now,v_=tt.setTimeout!==an.setTimeout&&tt.setTimeout,Ua=Je.ceil,Na=Je.floor,vl=Ue.getOwnPropertySymbols,x_=Ca?Ca.isBuffer:e,Ch=tt.isFinite,M_=ba.join,y_=Sh(Ue.keys,Ue),Qe=Je.max,dn=Je.min,S_=Dt.now,E_=tt.parseInt,Ph=Je.random,T_=ba.reverse,xl=xr(tt,"DataView"),Bs=xr(tt,"Map"),Ml=xr(tt,"Promise"),Zr=xr(tt,"Set"),zs=xr(tt,"WeakMap"),Hs=xr(Ue,"create"),Fa=zs&&new zs,Kr={},b_=Mr(xl),A_=Mr(Bs),w_=Mr(Ml),R_=Mr(Zr),C_=Mr(zs),Oa=Ki?Ki.prototype:e,ks=Oa?Oa.valueOf:e,Dh=Oa?Oa.toString:e;function S(n){if(We(n)&&!ne(n)&&!(n instanceof _e)){if(n instanceof qn)return n;if(we.call(n,"__wrapped__"))return If(n)}return new qn(n)}var $r=function(){function n(){}return function(s){if(!Ve(s))return{};if(Ah)return Ah(s);n.prototype=s;var l=new n;return n.prototype=e,l}}();function Ba(){}function qn(n,s){this.__wrapped__=n,this.__actions__=[],this.__chain__=!!s,this.__index__=0,this.__values__=e}S.templateSettings={escape:ee,evaluate:ze,interpolate:Ke,variable:"",imports:{_:S}},S.prototype=Ba.prototype,S.prototype.constructor=S,qn.prototype=$r(Ba.prototype),qn.prototype.constructor=qn;function _e(n){this.__wrapped__=n,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=It,this.__views__=[]}function P_(){var n=new _e(this.__wrapped__);return n.__actions__=wn(this.__actions__),n.__dir__=this.__dir__,n.__filtered__=this.__filtered__,n.__iteratees__=wn(this.__iteratees__),n.__takeCount__=this.__takeCount__,n.__views__=wn(this.__views__),n}function D_(){if(this.__filtered__){var n=new _e(this);n.__dir__=-1,n.__filtered__=!0}else n=this.clone(),n.__dir__*=-1;return n}function L_(){var n=this.__wrapped__.value(),s=this.__dir__,l=ne(n),h=s<0,M=l?n.length:0,b=Wg(0,M,this.__views__),D=b.start,U=b.end,V=U-D,et=h?U:D-1,it=this.__iteratees__,ft=it.length,vt=0,Ot=dn(V,this.__takeCount__);if(!l||!h&&M==V&&Ot==V)return ef(n,this.__actions__);var Xt=[];t:for(;V--&&vt<Ot;){et+=s;for(var se=-1,qt=n[et];++se<ft;){var pe=it[se],xe=pe.iteratee,Bn=pe.type,Mn=xe(qt);if(Bn==dt)qt=Mn;else if(!Mn){if(Bn==ct)continue t;break t}}Xt[vt++]=qt}return Xt}_e.prototype=$r(Ba.prototype),_e.prototype.constructor=_e;function mr(n){var s=-1,l=n==null?0:n.length;for(this.clear();++s<l;){var h=n[s];this.set(h[0],h[1])}}function I_(){this.__data__=Hs?Hs(null):{},this.size=0}function U_(n){var s=this.has(n)&&delete this.__data__[n];return this.size-=s?1:0,s}function N_(n){var s=this.__data__;if(Hs){var l=s[n];return l===f?e:l}return we.call(s,n)?s[n]:e}function F_(n){var s=this.__data__;return Hs?s[n]!==e:we.call(s,n)}function O_(n,s){var l=this.__data__;return this.size+=this.has(n)?0:1,l[n]=Hs&&s===e?f:s,this}mr.prototype.clear=I_,mr.prototype.delete=U_,mr.prototype.get=N_,mr.prototype.has=F_,mr.prototype.set=O_;function Ei(n){var s=-1,l=n==null?0:n.length;for(this.clear();++s<l;){var h=n[s];this.set(h[0],h[1])}}function B_(){this.__data__=[],this.size=0}function z_(n){var s=this.__data__,l=za(s,n);if(l<0)return!1;var h=s.length-1;return l==h?s.pop():La.call(s,l,1),--this.size,!0}function H_(n){var s=this.__data__,l=za(s,n);return l<0?e:s[l][1]}function k_(n){return za(this.__data__,n)>-1}function V_(n,s){var l=this.__data__,h=za(l,n);return h<0?(++this.size,l.push([n,s])):l[h][1]=s,this}Ei.prototype.clear=B_,Ei.prototype.delete=z_,Ei.prototype.get=H_,Ei.prototype.has=k_,Ei.prototype.set=V_;function Ti(n){var s=-1,l=n==null?0:n.length;for(this.clear();++s<l;){var h=n[s];this.set(h[0],h[1])}}function G_(){this.size=0,this.__data__={hash:new mr,map:new(Bs||Ei),string:new mr}}function W_(n){var s=Ja(this,n).delete(n);return this.size-=s?1:0,s}function X_(n){return Ja(this,n).get(n)}function q_(n){return Ja(this,n).has(n)}function Y_(n,s){var l=Ja(this,n),h=l.size;return l.set(n,s),this.size+=l.size==h?0:1,this}Ti.prototype.clear=G_,Ti.prototype.delete=W_,Ti.prototype.get=X_,Ti.prototype.has=q_,Ti.prototype.set=Y_;function _r(n){var s=-1,l=n==null?0:n.length;for(this.__data__=new Ti;++s<l;)this.add(n[s])}function Z_(n){return this.__data__.set(n,f),this}function K_(n){return this.__data__.has(n)}_r.prototype.add=_r.prototype.push=Z_,_r.prototype.has=K_;function ri(n){var s=this.__data__=new Ei(n);this.size=s.size}function $_(){this.__data__=new Ei,this.size=0}function J_(n){var s=this.__data__,l=s.delete(n);return this.size=s.size,l}function Q_(n){return this.__data__.get(n)}function j_(n){return this.__data__.has(n)}function tg(n,s){var l=this.__data__;if(l instanceof Ei){var h=l.__data__;if(!Bs||h.length<a-1)return h.push([n,s]),this.size=++l.size,this;l=this.__data__=new Ti(h)}return l.set(n,s),this.size=l.size,this}ri.prototype.clear=$_,ri.prototype.delete=J_,ri.prototype.get=Q_,ri.prototype.has=j_,ri.prototype.set=tg;function Lh(n,s){var l=ne(n),h=!l&&yr(n),M=!l&&!h&&tr(n),b=!l&&!h&&!M&&ts(n),D=l||h||M||b,U=D?pl(n.length,u_):[],V=U.length;for(var et in n)(s||we.call(n,et))&&!(D&&(et=="length"||M&&(et=="offset"||et=="parent")||b&&(et=="buffer"||et=="byteLength"||et=="byteOffset")||Ri(et,V)))&&U.push(et);return U}function Ih(n){var s=n.length;return s?n[Dl(0,s-1)]:e}function eg(n,s){return Qa(wn(n),gr(s,0,n.length))}function ng(n){return Qa(wn(n))}function yl(n,s,l){(l!==e&&!si(n[s],l)||l===e&&!(s in n))&&bi(n,s,l)}function Vs(n,s,l){var h=n[s];(!(we.call(n,s)&&si(h,l))||l===e&&!(s in n))&&bi(n,s,l)}function za(n,s){for(var l=n.length;l--;)if(si(n[l][0],s))return l;return-1}function ig(n,s,l,h){return $i(n,function(M,b,D){s(h,M,l(M),D)}),h}function Uh(n,s){return n&&pi(s,on(s),n)}function rg(n,s){return n&&pi(s,Cn(s),n)}function bi(n,s,l){s=="__proto__"&&Ia?Ia(n,s,{configurable:!0,enumerable:!0,value:l,writable:!0}):n[s]=l}function Sl(n,s){for(var l=-1,h=s.length,M=$(h),b=n==null;++l<h;)M[l]=b?e:nc(n,s[l]);return M}function gr(n,s,l){return n===n&&(l!==e&&(n=n<=l?n:l),s!==e&&(n=n>=s?n:s)),n}function Yn(n,s,l,h,M,b){var D,U=s&_,V=s&g,et=s&x;if(l&&(D=M?l(n,h,M,b):l(n)),D!==e)return D;if(!Ve(n))return n;var it=ne(n);if(it){if(D=qg(n),!U)return wn(n,D)}else{var ft=pn(n),vt=ft==Re||ft==fe;if(tr(n))return sf(n,U);if(ft==Qt||ft==_t||vt&&!M){if(D=V||vt?{}:Tf(n),!U)return V?Ng(n,rg(D,n)):Ug(n,Uh(D,n))}else{if(!Fe[ft])return M?n:{};D=Yg(n,ft,U)}}b||(b=new ri);var Ot=b.get(n);if(Ot)return Ot;b.set(n,D),jf(n)?n.forEach(function(qt){D.add(Yn(qt,s,l,qt,n,b))}):Jf(n)&&n.forEach(function(qt,pe){D.set(pe,Yn(qt,s,l,pe,n,b))});var Xt=et?V?Vl:kl:V?Cn:on,se=it?e:Xt(n);return Wn(se||n,function(qt,pe){se&&(pe=qt,qt=n[pe]),Vs(D,pe,Yn(qt,s,l,pe,n,b))}),D}function sg(n){var s=on(n);return function(l){return Nh(l,n,s)}}function Nh(n,s,l){var h=l.length;if(n==null)return!h;for(n=Ue(n);h--;){var M=l[h],b=s[M],D=n[M];if(D===e&&!(M in n)||!b(D))return!1}return!0}function Fh(n,s,l){if(typeof n!="function")throw new Xn(c);return Ks(function(){n.apply(e,l)},s)}function Gs(n,s,l,h){var M=-1,b=Sa,D=!0,U=n.length,V=[],et=s.length;if(!U)return V;l&&(s=He(s,Nn(l))),h?(b=ll,D=!1):s.length>=a&&(b=Fs,D=!1,s=new _r(s));t:for(;++M<U;){var it=n[M],ft=l==null?it:l(it);if(it=h||it!==0?it:0,D&&ft===ft){for(var vt=et;vt--;)if(s[vt]===ft)continue t;V.push(it)}else b(s,ft,h)||V.push(it)}return V}var $i=uf(di),Oh=uf(Tl,!0);function ag(n,s){var l=!0;return $i(n,function(h,M,b){return l=!!s(h,M,b),l}),l}function Ha(n,s,l){for(var h=-1,M=n.length;++h<M;){var b=n[h],D=s(b);if(D!=null&&(U===e?D===D&&!On(D):l(D,U)))var U=D,V=b}return V}function og(n,s,l,h){var M=n.length;for(l=re(l),l<0&&(l=-l>M?0:M+l),h=h===e||h>M?M:re(h),h<0&&(h+=M),h=l>h?0:ed(h);l<h;)n[l++]=s;return n}function Bh(n,s){var l=[];return $i(n,function(h,M,b){s(h,M,b)&&l.push(h)}),l}function cn(n,s,l,h,M){var b=-1,D=n.length;for(l||(l=Kg),M||(M=[]);++b<D;){var U=n[b];s>0&&l(U)?s>1?cn(U,s-1,l,h,M):qi(M,U):h||(M[M.length]=U)}return M}var El=hf(),zh=hf(!0);function di(n,s){return n&&El(n,s,on)}function Tl(n,s){return n&&zh(n,s,on)}function ka(n,s){return Xi(s,function(l){return Ci(n[l])})}function vr(n,s){s=Qi(s,n);for(var l=0,h=s.length;n!=null&&l<h;)n=n[mi(s[l++])];return l&&l==h?n:e}function Hh(n,s,l){var h=s(n);return ne(n)?h:qi(h,l(n))}function vn(n){return n==null?n===e?lt:me:pr&&pr in Ue(n)?Gg(n):nv(n)}function bl(n,s){return n>s}function lg(n,s){return n!=null&&we.call(n,s)}function cg(n,s){return n!=null&&s in Ue(n)}function ug(n,s,l){return n>=dn(s,l)&&n<Qe(s,l)}function Al(n,s,l){for(var h=l?ll:Sa,M=n[0].length,b=n.length,D=b,U=$(b),V=1/0,et=[];D--;){var it=n[D];D&&s&&(it=He(it,Nn(s))),V=dn(it.length,V),U[D]=!l&&(s||M>=120&&it.length>=120)?new _r(D&&it):e}it=n[0];var ft=-1,vt=U[0];t:for(;++ft<M&&et.length<V;){var Ot=it[ft],Xt=s?s(Ot):Ot;if(Ot=l||Ot!==0?Ot:0,!(vt?Fs(vt,Xt):h(et,Xt,l))){for(D=b;--D;){var se=U[D];if(!(se?Fs(se,Xt):h(n[D],Xt,l)))continue t}vt&&vt.push(Xt),et.push(Ot)}}return et}function hg(n,s,l,h){return di(n,function(M,b,D){s(h,l(M),b,D)}),h}function Ws(n,s,l){s=Qi(s,n),n=Rf(n,s);var h=n==null?n:n[mi(Kn(s))];return h==null?e:Un(h,n,l)}function kh(n){return We(n)&&vn(n)==_t}function fg(n){return We(n)&&vn(n)==Nt}function dg(n){return We(n)&&vn(n)==he}function Xs(n,s,l,h,M){return n===s?!0:n==null||s==null||!We(n)&&!We(s)?n!==n&&s!==s:pg(n,s,l,h,Xs,M)}function pg(n,s,l,h,M,b){var D=ne(n),U=ne(s),V=D?Ut:pn(n),et=U?Ut:pn(s);V=V==_t?Qt:V,et=et==_t?Qt:et;var it=V==Qt,ft=et==Qt,vt=V==et;if(vt&&tr(n)){if(!tr(s))return!1;D=!0,it=!1}if(vt&&!it)return b||(b=new ri),D||ts(n)?yf(n,s,l,h,M,b):kg(n,s,V,l,h,M,b);if(!(l&E)){var Ot=it&&we.call(n,"__wrapped__"),Xt=ft&&we.call(s,"__wrapped__");if(Ot||Xt){var se=Ot?n.value():n,qt=Xt?s.value():s;return b||(b=new ri),M(se,qt,l,h,b)}}return vt?(b||(b=new ri),Vg(n,s,l,h,M,b)):!1}function mg(n){return We(n)&&pn(n)==I}function wl(n,s,l,h){var M=l.length,b=M,D=!h;if(n==null)return!b;for(n=Ue(n);M--;){var U=l[M];if(D&&U[2]?U[1]!==n[U[0]]:!(U[0]in n))return!1}for(;++M<b;){U=l[M];var V=U[0],et=n[V],it=U[1];if(D&&U[2]){if(et===e&&!(V in n))return!1}else{var ft=new ri;if(h)var vt=h(et,it,V,n,s,ft);if(!(vt===e?Xs(it,et,E|A,h,ft):vt))return!1}}return!0}function Vh(n){if(!Ve(n)||Jg(n))return!1;var s=Ci(n)?m_:nl;return s.test(Mr(n))}function _g(n){return We(n)&&vn(n)==Ft}function gg(n){return We(n)&&pn(n)==R}function vg(n){return We(n)&&ro(n.length)&&!!Be[vn(n)]}function Gh(n){return typeof n=="function"?n:n==null?Pn:typeof n=="object"?ne(n)?qh(n[0],n[1]):Xh(n):fd(n)}function Rl(n){if(!Zs(n))return y_(n);var s=[];for(var l in Ue(n))we.call(n,l)&&l!="constructor"&&s.push(l);return s}function xg(n){if(!Ve(n))return ev(n);var s=Zs(n),l=[];for(var h in n)h=="constructor"&&(s||!we.call(n,h))||l.push(h);return l}function Cl(n,s){return n<s}function Wh(n,s){var l=-1,h=Rn(n)?$(n.length):[];return $i(n,function(M,b,D){h[++l]=s(M,b,D)}),h}function Xh(n){var s=Wl(n);return s.length==1&&s[0][2]?Af(s[0][0],s[0][1]):function(l){return l===n||wl(l,n,s)}}function qh(n,s){return ql(n)&&bf(s)?Af(mi(n),s):function(l){var h=nc(l,n);return h===e&&h===s?ic(l,n):Xs(s,h,E|A)}}function Va(n,s,l,h,M){n!==s&&El(s,function(b,D){if(M||(M=new ri),Ve(b))Mg(n,s,D,l,Va,h,M);else{var U=h?h(Zl(n,D),b,D+"",n,s,M):e;U===e&&(U=b),yl(n,D,U)}},Cn)}function Mg(n,s,l,h,M,b,D){var U=Zl(n,l),V=Zl(s,l),et=D.get(V);if(et){yl(n,l,et);return}var it=b?b(U,V,l+"",n,s,D):e,ft=it===e;if(ft){var vt=ne(V),Ot=!vt&&tr(V),Xt=!vt&&!Ot&&ts(V);it=V,vt||Ot||Xt?ne(U)?it=U:qe(U)?it=wn(U):Ot?(ft=!1,it=sf(V,!0)):Xt?(ft=!1,it=af(V,!0)):it=[]:$s(V)||yr(V)?(it=U,yr(U)?it=nd(U):(!Ve(U)||Ci(U))&&(it=Tf(V))):ft=!1}ft&&(D.set(V,it),M(it,V,h,b,D),D.delete(V)),yl(n,l,it)}function Yh(n,s){var l=n.length;if(l)return s+=s<0?l:0,Ri(s,l)?n[s]:e}function Zh(n,s,l){s.length?s=He(s,function(b){return ne(b)?function(D){return vr(D,b.length===1?b[0]:b)}:b}):s=[Pn];var h=-1;s=He(s,Nn(Gt()));var M=Wh(n,function(b,D,U){var V=He(s,function(et){return et(b)});return{criteria:V,index:++h,value:b}});return Ym(M,function(b,D){return Ig(b,D,l)})}function yg(n,s){return Kh(n,s,function(l,h){return ic(n,h)})}function Kh(n,s,l){for(var h=-1,M=s.length,b={};++h<M;){var D=s[h],U=vr(n,D);l(U,D)&&qs(b,Qi(D,n),U)}return b}function Sg(n){return function(s){return vr(s,n)}}function Pl(n,s,l,h){var M=h?qm:Wr,b=-1,D=s.length,U=n;for(n===s&&(s=wn(s)),l&&(U=He(n,Nn(l)));++b<D;)for(var V=0,et=s[b],it=l?l(et):et;(V=M(U,it,V,h))>-1;)U!==n&&La.call(U,V,1),La.call(n,V,1);return n}function $h(n,s){for(var l=n?s.length:0,h=l-1;l--;){var M=s[l];if(l==h||M!==b){var b=M;Ri(M)?La.call(n,M,1):Ul(n,M)}}return n}function Dl(n,s){return n+Na(Ph()*(s-n+1))}function Eg(n,s,l,h){for(var M=-1,b=Qe(Ua((s-n)/(l||1)),0),D=$(b);b--;)D[h?b:++M]=n,n+=l;return D}function Ll(n,s){var l="";if(!n||s<1||s>J)return l;do s%2&&(l+=n),s=Na(s/2),s&&(n+=n);while(s);return l}function le(n,s){return Kl(wf(n,s,Pn),n+"")}function Tg(n){return Ih(es(n))}function bg(n,s){var l=es(n);return Qa(l,gr(s,0,l.length))}function qs(n,s,l,h){if(!Ve(n))return n;s=Qi(s,n);for(var M=-1,b=s.length,D=b-1,U=n;U!=null&&++M<b;){var V=mi(s[M]),et=l;if(V==="__proto__"||V==="constructor"||V==="prototype")return n;if(M!=D){var it=U[V];et=h?h(it,V,U):e,et===e&&(et=Ve(it)?it:Ri(s[M+1])?[]:{})}Vs(U,V,et),U=U[V]}return n}var Jh=Fa?function(n,s){return Fa.set(n,s),n}:Pn,Ag=Ia?function(n,s){return Ia(n,"toString",{configurable:!0,enumerable:!1,value:sc(s),writable:!0})}:Pn;function wg(n){return Qa(es(n))}function Zn(n,s,l){var h=-1,M=n.length;s<0&&(s=-s>M?0:M+s),l=l>M?M:l,l<0&&(l+=M),M=s>l?0:l-s>>>0,s>>>=0;for(var b=$(M);++h<M;)b[h]=n[h+s];return b}function Rg(n,s){var l;return $i(n,function(h,M,b){return l=s(h,M,b),!l}),!!l}function Ga(n,s,l){var h=0,M=n==null?h:n.length;if(typeof s=="number"&&s===s&&M<=Ae){for(;h<M;){var b=h+M>>>1,D=n[b];D!==null&&!On(D)&&(l?D<=s:D<s)?h=b+1:M=b}return M}return Il(n,s,Pn,l)}function Il(n,s,l,h){var M=0,b=n==null?0:n.length;if(b===0)return 0;s=l(s);for(var D=s!==s,U=s===null,V=On(s),et=s===e;M<b;){var it=Na((M+b)/2),ft=l(n[it]),vt=ft!==e,Ot=ft===null,Xt=ft===ft,se=On(ft);if(D)var qt=h||Xt;else et?qt=Xt&&(h||vt):U?qt=Xt&&vt&&(h||!Ot):V?qt=Xt&&vt&&!Ot&&(h||!se):Ot||se?qt=!1:qt=h?ft<=s:ft<s;qt?M=it+1:b=it}return dn(b,oe)}function Qh(n,s){for(var l=-1,h=n.length,M=0,b=[];++l<h;){var D=n[l],U=s?s(D):D;if(!l||!si(U,V)){var V=U;b[M++]=D===0?0:D}}return b}function jh(n){return typeof n=="number"?n:On(n)?At:+n}function Fn(n){if(typeof n=="string")return n;if(ne(n))return He(n,Fn)+"";if(On(n))return Dh?Dh.call(n):"";var s=n+"";return s=="0"&&1/n==-ut?"-0":s}function Ji(n,s,l){var h=-1,M=Sa,b=n.length,D=!0,U=[],V=U;if(l)D=!1,M=ll;else if(b>=a){var et=s?null:zg(n);if(et)return Ta(et);D=!1,M=Fs,V=new _r}else V=s?[]:U;t:for(;++h<b;){var it=n[h],ft=s?s(it):it;if(it=l||it!==0?it:0,D&&ft===ft){for(var vt=V.length;vt--;)if(V[vt]===ft)continue t;s&&V.push(ft),U.push(it)}else M(V,ft,l)||(V!==U&&V.push(ft),U.push(it))}return U}function Ul(n,s){return s=Qi(s,n),n=Rf(n,s),n==null||delete n[mi(Kn(s))]}function tf(n,s,l,h){return qs(n,s,l(vr(n,s)),h)}function Wa(n,s,l,h){for(var M=n.length,b=h?M:-1;(h?b--:++b<M)&&s(n[b],b,n););return l?Zn(n,h?0:b,h?b+1:M):Zn(n,h?b+1:0,h?M:b)}function ef(n,s){var l=n;return l instanceof _e&&(l=l.value()),cl(s,function(h,M){return M.func.apply(M.thisArg,qi([h],M.args))},l)}function Nl(n,s,l){var h=n.length;if(h<2)return h?Ji(n[0]):[];for(var M=-1,b=$(h);++M<h;)for(var D=n[M],U=-1;++U<h;)U!=M&&(b[M]=Gs(b[M]||D,n[U],s,l));return Ji(cn(b,1),s,l)}function nf(n,s,l){for(var h=-1,M=n.length,b=s.length,D={};++h<M;){var U=h<b?s[h]:e;l(D,n[h],U)}return D}function Fl(n){return qe(n)?n:[]}function Ol(n){return typeof n=="function"?n:Pn}function Qi(n,s){return ne(n)?n:ql(n,s)?[n]:Lf(be(n))}var Cg=le;function ji(n,s,l){var h=n.length;return l=l===e?h:l,!s&&l>=h?n:Zn(n,s,l)}var rf=__||function(n){return an.clearTimeout(n)};function sf(n,s){if(s)return n.slice();var l=n.length,h=bh?bh(l):new n.constructor(l);return n.copy(h),h}function Bl(n){var s=new n.constructor(n.byteLength);return new Pa(s).set(new Pa(n)),s}function Pg(n,s){var l=s?Bl(n.buffer):n.buffer;return new n.constructor(l,n.byteOffset,n.byteLength)}function Dg(n){var s=new n.constructor(n.source,ya.exec(n));return s.lastIndex=n.lastIndex,s}function Lg(n){return ks?Ue(ks.call(n)):{}}function af(n,s){var l=s?Bl(n.buffer):n.buffer;return new n.constructor(l,n.byteOffset,n.length)}function of(n,s){if(n!==s){var l=n!==e,h=n===null,M=n===n,b=On(n),D=s!==e,U=s===null,V=s===s,et=On(s);if(!U&&!et&&!b&&n>s||b&&D&&V&&!U&&!et||h&&D&&V||!l&&V||!M)return 1;if(!h&&!b&&!et&&n<s||et&&l&&M&&!h&&!b||U&&l&&M||!D&&M||!V)return-1}return 0}function Ig(n,s,l){for(var h=-1,M=n.criteria,b=s.criteria,D=M.length,U=l.length;++h<D;){var V=of(M[h],b[h]);if(V){if(h>=U)return V;var et=l[h];return V*(et=="desc"?-1:1)}}return n.index-s.index}function lf(n,s,l,h){for(var M=-1,b=n.length,D=l.length,U=-1,V=s.length,et=Qe(b-D,0),it=$(V+et),ft=!h;++U<V;)it[U]=s[U];for(;++M<D;)(ft||M<b)&&(it[l[M]]=n[M]);for(;et--;)it[U++]=n[M++];return it}function cf(n,s,l,h){for(var M=-1,b=n.length,D=-1,U=l.length,V=-1,et=s.length,it=Qe(b-U,0),ft=$(it+et),vt=!h;++M<it;)ft[M]=n[M];for(var Ot=M;++V<et;)ft[Ot+V]=s[V];for(;++D<U;)(vt||M<b)&&(ft[Ot+l[D]]=n[M++]);return ft}function wn(n,s){var l=-1,h=n.length;for(s||(s=$(h));++l<h;)s[l]=n[l];return s}function pi(n,s,l,h){var M=!l;l||(l={});for(var b=-1,D=s.length;++b<D;){var U=s[b],V=h?h(l[U],n[U],U,l,n):e;V===e&&(V=n[U]),M?bi(l,U,V):Vs(l,U,V)}return l}function Ug(n,s){return pi(n,Xl(n),s)}function Ng(n,s){return pi(n,Sf(n),s)}function Xa(n,s){return function(l,h){var M=ne(l)?Hm:ig,b=s?s():{};return M(l,n,Gt(h,2),b)}}function Jr(n){return le(function(s,l){var h=-1,M=l.length,b=M>1?l[M-1]:e,D=M>2?l[2]:e;for(b=n.length>3&&typeof b=="function"?(M--,b):e,D&&xn(l[0],l[1],D)&&(b=M<3?e:b,M=1),s=Ue(s);++h<M;){var U=l[h];U&&n(s,U,h,b)}return s})}function uf(n,s){return function(l,h){if(l==null)return l;if(!Rn(l))return n(l,h);for(var M=l.length,b=s?M:-1,D=Ue(l);(s?b--:++b<M)&&h(D[b],b,D)!==!1;);return l}}function hf(n){return function(s,l,h){for(var M=-1,b=Ue(s),D=h(s),U=D.length;U--;){var V=D[n?U:++M];if(l(b[V],V,b)===!1)break}return s}}function Fg(n,s,l){var h=s&v,M=Ys(n);function b(){var D=this&&this!==an&&this instanceof b?M:n;return D.apply(h?l:this,arguments)}return b}function ff(n){return function(s){s=be(s);var l=Xr(s)?ii(s):e,h=l?l[0]:s.charAt(0),M=l?ji(l,1).join(""):s.slice(1);return h[n]()+M}}function Qr(n){return function(s){return cl(ud(cd(s).replace(Am,"")),n,"")}}function Ys(n){return function(){var s=arguments;switch(s.length){case 0:return new n;case 1:return new n(s[0]);case 2:return new n(s[0],s[1]);case 3:return new n(s[0],s[1],s[2]);case 4:return new n(s[0],s[1],s[2],s[3]);case 5:return new n(s[0],s[1],s[2],s[3],s[4]);case 6:return new n(s[0],s[1],s[2],s[3],s[4],s[5]);case 7:return new n(s[0],s[1],s[2],s[3],s[4],s[5],s[6])}var l=$r(n.prototype),h=n.apply(l,s);return Ve(h)?h:l}}function Og(n,s,l){var h=Ys(n);function M(){for(var b=arguments.length,D=$(b),U=b,V=jr(M);U--;)D[U]=arguments[U];var et=b<3&&D[0]!==V&&D[b-1]!==V?[]:Yi(D,V);if(b-=et.length,b<l)return gf(n,s,qa,M.placeholder,e,D,et,e,e,l-b);var it=this&&this!==an&&this instanceof M?h:n;return Un(it,this,D)}return M}function df(n){return function(s,l,h){var M=Ue(s);if(!Rn(s)){var b=Gt(l,3);s=on(s),l=function(U){return b(M[U],U,M)}}var D=n(s,l,h);return D>-1?M[b?s[D]:D]:e}}function pf(n){return wi(function(s){var l=s.length,h=l,M=qn.prototype.thru;for(n&&s.reverse();h--;){var b=s[h];if(typeof b!="function")throw new Xn(c);if(M&&!D&&$a(b)=="wrapper")var D=new qn([],!0)}for(h=D?h:l;++h<l;){b=s[h];var U=$a(b),V=U=="wrapper"?Gl(b):e;V&&Yl(V[0])&&V[1]==(F|L|W|q)&&!V[4].length&&V[9]==1?D=D[$a(V[0])].apply(D,V[3]):D=b.length==1&&Yl(b)?D[U]():D.thru(b)}return function(){var et=arguments,it=et[0];if(D&&et.length==1&&ne(it))return D.plant(it).value();for(var ft=0,vt=l?s[ft].apply(this,et):it;++ft<l;)vt=s[ft].call(this,vt);return vt}})}function qa(n,s,l,h,M,b,D,U,V,et){var it=s&F,ft=s&v,vt=s&m,Ot=s&(L|P),Xt=s&C,se=vt?e:Ys(n);function qt(){for(var pe=arguments.length,xe=$(pe),Bn=pe;Bn--;)xe[Bn]=arguments[Bn];if(Ot)var Mn=jr(qt),zn=Km(xe,Mn);if(h&&(xe=lf(xe,h,M,Ot)),b&&(xe=cf(xe,b,D,Ot)),pe-=zn,Ot&&pe<et){var Ye=Yi(xe,Mn);return gf(n,s,qa,qt.placeholder,l,xe,Ye,U,V,et-pe)}var ai=ft?l:this,Di=vt?ai[n]:n;return pe=xe.length,U?xe=iv(xe,U):Xt&&pe>1&&xe.reverse(),it&&V<pe&&(xe.length=V),this&&this!==an&&this instanceof qt&&(Di=se||Ys(Di)),Di.apply(ai,xe)}return qt}function mf(n,s){return function(l,h){return hg(l,n,s(h),{})}}function Ya(n,s){return function(l,h){var M;if(l===e&&h===e)return s;if(l!==e&&(M=l),h!==e){if(M===e)return h;typeof l=="string"||typeof h=="string"?(l=Fn(l),h=Fn(h)):(l=jh(l),h=jh(h)),M=n(l,h)}return M}}function zl(n){return wi(function(s){return s=He(s,Nn(Gt())),le(function(l){var h=this;return n(s,function(M){return Un(M,h,l)})})})}function Za(n,s){s=s===e?" ":Fn(s);var l=s.length;if(l<2)return l?Ll(s,n):s;var h=Ll(s,Ua(n/qr(s)));return Xr(s)?ji(ii(h),0,n).join(""):h.slice(0,n)}function Bg(n,s,l,h){var M=s&v,b=Ys(n);function D(){for(var U=-1,V=arguments.length,et=-1,it=h.length,ft=$(it+V),vt=this&&this!==an&&this instanceof D?b:n;++et<it;)ft[et]=h[et];for(;V--;)ft[et++]=arguments[++U];return Un(vt,M?l:this,ft)}return D}function _f(n){return function(s,l,h){return h&&typeof h!="number"&&xn(s,l,h)&&(l=h=e),s=Pi(s),l===e?(l=s,s=0):l=Pi(l),h=h===e?s<l?1:-1:Pi(h),Eg(s,l,h,n)}}function Ka(n){return function(s,l){return typeof s=="string"&&typeof l=="string"||(s=$n(s),l=$n(l)),n(s,l)}}function gf(n,s,l,h,M,b,D,U,V,et){var it=s&L,ft=it?D:e,vt=it?e:D,Ot=it?b:e,Xt=it?e:b;s|=it?W:B,s&=~(it?B:W),s&N||(s&=-4);var se=[n,s,M,Ot,ft,Xt,vt,U,V,et],qt=l.apply(e,se);return Yl(n)&&Cf(qt,se),qt.placeholder=h,Pf(qt,n,s)}function Hl(n){var s=Je[n];return function(l,h){if(l=$n(l),h=h==null?0:dn(re(h),292),h&&Ch(l)){var M=(be(l)+"e").split("e"),b=s(M[0]+"e"+(+M[1]+h));return M=(be(b)+"e").split("e"),+(M[0]+"e"+(+M[1]-h))}return s(l)}}var zg=Zr&&1/Ta(new Zr([,-0]))[1]==ut?function(n){return new Zr(n)}:lc;function vf(n){return function(s){var l=pn(s);return l==I?_l(s):l==R?n_(s):Zm(s,n(s))}}function Ai(n,s,l,h,M,b,D,U){var V=s&m;if(!V&&typeof n!="function")throw new Xn(c);var et=h?h.length:0;if(et||(s&=-97,h=M=e),D=D===e?D:Qe(re(D),0),U=U===e?U:re(U),et-=M?M.length:0,s&B){var it=h,ft=M;h=M=e}var vt=V?e:Gl(n),Ot=[n,s,l,h,M,it,ft,b,D,U];if(vt&&tv(Ot,vt),n=Ot[0],s=Ot[1],l=Ot[2],h=Ot[3],M=Ot[4],U=Ot[9]=Ot[9]===e?V?0:n.length:Qe(Ot[9]-et,0),!U&&s&(L|P)&&(s&=-25),!s||s==v)var Xt=Fg(n,s,l);else s==L||s==P?Xt=Og(n,s,U):(s==W||s==(v|W))&&!M.length?Xt=Bg(n,s,l,h):Xt=qa.apply(e,Ot);var se=vt?Jh:Cf;return Pf(se(Xt,Ot),n,s)}function xf(n,s,l,h){return n===e||si(n,Yr[l])&&!we.call(h,l)?s:n}function Mf(n,s,l,h,M,b){return Ve(n)&&Ve(s)&&(b.set(s,n),Va(n,s,e,Mf,b),b.delete(s)),n}function Hg(n){return $s(n)?e:n}function yf(n,s,l,h,M,b){var D=l&E,U=n.length,V=s.length;if(U!=V&&!(D&&V>U))return!1;var et=b.get(n),it=b.get(s);if(et&&it)return et==s&&it==n;var ft=-1,vt=!0,Ot=l&A?new _r:e;for(b.set(n,s),b.set(s,n);++ft<U;){var Xt=n[ft],se=s[ft];if(h)var qt=D?h(se,Xt,ft,s,n,b):h(Xt,se,ft,n,s,b);if(qt!==e){if(qt)continue;vt=!1;break}if(Ot){if(!ul(s,function(pe,xe){if(!Fs(Ot,xe)&&(Xt===pe||M(Xt,pe,l,h,b)))return Ot.push(xe)})){vt=!1;break}}else if(!(Xt===se||M(Xt,se,l,h,b))){vt=!1;break}}return b.delete(n),b.delete(s),vt}function kg(n,s,l,h,M,b,D){switch(l){case gt:if(n.byteLength!=s.byteLength||n.byteOffset!=s.byteOffset)return!1;n=n.buffer,s=s.buffer;case Nt:return!(n.byteLength!=s.byteLength||!b(new Pa(n),new Pa(s)));case Ht:case he:case nn:return si(+n,+s);case Ne:return n.name==s.name&&n.message==s.message;case Ft:case y:return n==s+"";case I:var U=_l;case R:var V=h&E;if(U||(U=Ta),n.size!=s.size&&!V)return!1;var et=D.get(n);if(et)return et==s;h|=A,D.set(n,s);var it=yf(U(n),U(s),h,M,b,D);return D.delete(n),it;case Y:if(ks)return ks.call(n)==ks.call(s)}return!1}function Vg(n,s,l,h,M,b){var D=l&E,U=kl(n),V=U.length,et=kl(s),it=et.length;if(V!=it&&!D)return!1;for(var ft=V;ft--;){var vt=U[ft];if(!(D?vt in s:we.call(s,vt)))return!1}var Ot=b.get(n),Xt=b.get(s);if(Ot&&Xt)return Ot==s&&Xt==n;var se=!0;b.set(n,s),b.set(s,n);for(var qt=D;++ft<V;){vt=U[ft];var pe=n[vt],xe=s[vt];if(h)var Bn=D?h(xe,pe,vt,s,n,b):h(pe,xe,vt,n,s,b);if(!(Bn===e?pe===xe||M(pe,xe,l,h,b):Bn)){se=!1;break}qt||(qt=vt=="constructor")}if(se&&!qt){var Mn=n.constructor,zn=s.constructor;Mn!=zn&&"constructor"in n&&"constructor"in s&&!(typeof Mn=="function"&&Mn instanceof Mn&&typeof zn=="function"&&zn instanceof zn)&&(se=!1)}return b.delete(n),b.delete(s),se}function wi(n){return Kl(wf(n,e,Ff),n+"")}function kl(n){return Hh(n,on,Xl)}function Vl(n){return Hh(n,Cn,Sf)}var Gl=Fa?function(n){return Fa.get(n)}:lc;function $a(n){for(var s=n.name+"",l=Kr[s],h=we.call(Kr,s)?l.length:0;h--;){var M=l[h],b=M.func;if(b==null||b==n)return M.name}return s}function jr(n){var s=we.call(S,"placeholder")?S:n;return s.placeholder}function Gt(){var n=S.iteratee||ac;return n=n===ac?Gh:n,arguments.length?n(arguments[0],arguments[1]):n}function Ja(n,s){var l=n.__data__;return $g(s)?l[typeof s=="string"?"string":"hash"]:l.map}function Wl(n){for(var s=on(n),l=s.length;l--;){var h=s[l],M=n[h];s[l]=[h,M,bf(M)]}return s}function xr(n,s){var l=jm(n,s);return Vh(l)?l:e}function Gg(n){var s=we.call(n,pr),l=n[pr];try{n[pr]=e;var h=!0}catch{}var M=Ra.call(n);return h&&(s?n[pr]=l:delete n[pr]),M}var Xl=vl?function(n){return n==null?[]:(n=Ue(n),Xi(vl(n),function(s){return wh.call(n,s)}))}:cc,Sf=vl?function(n){for(var s=[];n;)qi(s,Xl(n)),n=Da(n);return s}:cc,pn=vn;(xl&&pn(new xl(new ArrayBuffer(1)))!=gt||Bs&&pn(new Bs)!=I||Ml&&pn(Ml.resolve())!=Bt||Zr&&pn(new Zr)!=R||zs&&pn(new zs)!=ht)&&(pn=function(n){var s=vn(n),l=s==Qt?n.constructor:e,h=l?Mr(l):"";if(h)switch(h){case b_:return gt;case A_:return I;case w_:return Bt;case R_:return R;case C_:return ht}return s});function Wg(n,s,l){for(var h=-1,M=l.length;++h<M;){var b=l[h],D=b.size;switch(b.type){case"drop":n+=D;break;case"dropRight":s-=D;break;case"take":s=dn(s,n+D);break;case"takeRight":n=Qe(n,s-D);break}}return{start:n,end:s}}function Xg(n){var s=n.match(ga);return s?s[1].split(Vr):[]}function Ef(n,s,l){s=Qi(s,n);for(var h=-1,M=s.length,b=!1;++h<M;){var D=mi(s[h]);if(!(b=n!=null&&l(n,D)))break;n=n[D]}return b||++h!=M?b:(M=n==null?0:n.length,!!M&&ro(M)&&Ri(D,M)&&(ne(n)||yr(n)))}function qg(n){var s=n.length,l=new n.constructor(s);return s&&typeof n[0]=="string"&&we.call(n,"index")&&(l.index=n.index,l.input=n.input),l}function Tf(n){return typeof n.constructor=="function"&&!Zs(n)?$r(Da(n)):{}}function Yg(n,s,l){var h=n.constructor;switch(s){case Nt:return Bl(n);case Ht:case he:return new h(+n);case gt:return Pg(n,l);case wt:case de:case mt:case Ct:case Vt:case Yt:case Pt:case ue:case jt:return af(n,l);case I:return new h;case nn:case y:return new h(n);case Ft:return Dg(n);case R:return new h;case Y:return Lg(n)}}function Zg(n,s){var l=s.length;if(!l)return n;var h=l-1;return s[h]=(l>1?"& ":"")+s[h],s=s.join(l>2?", ":" "),n.replace(_a,`{
/* [wrapped with `+s+`] */
`)}function Kg(n){return ne(n)||yr(n)||!!(Rh&&n&&n[Rh])}function Ri(n,s){var l=typeof n;return s=s??J,!!s&&(l=="number"||l!="symbol"&&rl.test(n))&&n>-1&&n%1==0&&n<s}function xn(n,s,l){if(!Ve(l))return!1;var h=typeof s;return(h=="number"?Rn(l)&&Ri(s,l.length):h=="string"&&s in l)?si(l[s],n):!1}function ql(n,s){if(ne(n))return!1;var l=typeof n;return l=="number"||l=="symbol"||l=="boolean"||n==null||On(n)?!0:In.test(n)||!Ee.test(n)||s!=null&&n in Ue(s)}function $g(n){var s=typeof n;return s=="string"||s=="number"||s=="symbol"||s=="boolean"?n!=="__proto__":n===null}function Yl(n){var s=$a(n),l=S[s];if(typeof l!="function"||!(s in _e.prototype))return!1;if(n===l)return!0;var h=Gl(l);return!!h&&n===h[0]}function Jg(n){return!!Th&&Th in n}var Qg=Aa?Ci:uc;function Zs(n){var s=n&&n.constructor,l=typeof s=="function"&&s.prototype||Yr;return n===l}function bf(n){return n===n&&!Ve(n)}function Af(n,s){return function(l){return l==null?!1:l[n]===s&&(s!==e||n in Ue(l))}}function jg(n){var s=no(n,function(h){return l.size===d&&l.clear(),h}),l=s.cache;return s}function tv(n,s){var l=n[1],h=s[1],M=l|h,b=M<(v|m|F),D=h==F&&l==L||h==F&&l==q&&n[7].length<=s[8]||h==(F|q)&&s[7].length<=s[8]&&l==L;if(!(b||D))return n;h&v&&(n[2]=s[2],M|=l&v?0:N);var U=s[3];if(U){var V=n[3];n[3]=V?lf(V,U,s[4]):U,n[4]=V?Yi(n[3],p):s[4]}return U=s[5],U&&(V=n[5],n[5]=V?cf(V,U,s[6]):U,n[6]=V?Yi(n[5],p):s[6]),U=s[7],U&&(n[7]=U),h&F&&(n[8]=n[8]==null?s[8]:dn(n[8],s[8])),n[9]==null&&(n[9]=s[9]),n[0]=s[0],n[1]=M,n}function ev(n){var s=[];if(n!=null)for(var l in Ue(n))s.push(l);return s}function nv(n){return Ra.call(n)}function wf(n,s,l){return s=Qe(s===e?n.length-1:s,0),function(){for(var h=arguments,M=-1,b=Qe(h.length-s,0),D=$(b);++M<b;)D[M]=h[s+M];M=-1;for(var U=$(s+1);++M<s;)U[M]=h[M];return U[s]=l(D),Un(n,this,U)}}function Rf(n,s){return s.length<2?n:vr(n,Zn(s,0,-1))}function iv(n,s){for(var l=n.length,h=dn(s.length,l),M=wn(n);h--;){var b=s[h];n[h]=Ri(b,l)?M[b]:e}return n}function Zl(n,s){if(!(s==="constructor"&&typeof n[s]=="function")&&s!="__proto__")return n[s]}var Cf=Df(Jh),Ks=v_||function(n,s){return an.setTimeout(n,s)},Kl=Df(Ag);function Pf(n,s,l){var h=s+"";return Kl(n,Zg(h,rv(Xg(h),l)))}function Df(n){var s=0,l=0;return function(){var h=S_(),M=Q-(h-l);if(l=h,M>0){if(++s>=rt)return arguments[0]}else s=0;return n.apply(e,arguments)}}function Qa(n,s){var l=-1,h=n.length,M=h-1;for(s=s===e?h:s;++l<s;){var b=Dl(l,M),D=n[b];n[b]=n[l],n[l]=D}return n.length=s,n}var Lf=jg(function(n){var s=[];return n.charCodeAt(0)===46&&s.push(""),n.replace(ei,function(l,h,M,b){s.push(M?b.replace(xa,"$1"):h||l)}),s});function mi(n){if(typeof n=="string"||On(n))return n;var s=n+"";return s=="0"&&1/n==-ut?"-0":s}function Mr(n){if(n!=null){try{return wa.call(n)}catch{}try{return n+""}catch{}}return""}function rv(n,s){return Wn(st,function(l){var h="_."+l[0];s&l[1]&&!Sa(n,h)&&n.push(h)}),n.sort()}function If(n){if(n instanceof _e)return n.clone();var s=new qn(n.__wrapped__,n.__chain__);return s.__actions__=wn(n.__actions__),s.__index__=n.__index__,s.__values__=n.__values__,s}function sv(n,s,l){(l?xn(n,s,l):s===e)?s=1:s=Qe(re(s),0);var h=n==null?0:n.length;if(!h||s<1)return[];for(var M=0,b=0,D=$(Ua(h/s));M<h;)D[b++]=Zn(n,M,M+=s);return D}function av(n){for(var s=-1,l=n==null?0:n.length,h=0,M=[];++s<l;){var b=n[s];b&&(M[h++]=b)}return M}function ov(){var n=arguments.length;if(!n)return[];for(var s=$(n-1),l=arguments[0],h=n;h--;)s[h-1]=arguments[h];return qi(ne(l)?wn(l):[l],cn(s,1))}var lv=le(function(n,s){return qe(n)?Gs(n,cn(s,1,qe,!0)):[]}),cv=le(function(n,s){var l=Kn(s);return qe(l)&&(l=e),qe(n)?Gs(n,cn(s,1,qe,!0),Gt(l,2)):[]}),uv=le(function(n,s){var l=Kn(s);return qe(l)&&(l=e),qe(n)?Gs(n,cn(s,1,qe,!0),e,l):[]});function hv(n,s,l){var h=n==null?0:n.length;return h?(s=l||s===e?1:re(s),Zn(n,s<0?0:s,h)):[]}function fv(n,s,l){var h=n==null?0:n.length;return h?(s=l||s===e?1:re(s),s=h-s,Zn(n,0,s<0?0:s)):[]}function dv(n,s){return n&&n.length?Wa(n,Gt(s,3),!0,!0):[]}function pv(n,s){return n&&n.length?Wa(n,Gt(s,3),!0):[]}function mv(n,s,l,h){var M=n==null?0:n.length;return M?(l&&typeof l!="number"&&xn(n,s,l)&&(l=0,h=M),og(n,s,l,h)):[]}function Uf(n,s,l){var h=n==null?0:n.length;if(!h)return-1;var M=l==null?0:re(l);return M<0&&(M=Qe(h+M,0)),Ea(n,Gt(s,3),M)}function Nf(n,s,l){var h=n==null?0:n.length;if(!h)return-1;var M=h-1;return l!==e&&(M=re(l),M=l<0?Qe(h+M,0):dn(M,h-1)),Ea(n,Gt(s,3),M,!0)}function Ff(n){var s=n==null?0:n.length;return s?cn(n,1):[]}function _v(n){var s=n==null?0:n.length;return s?cn(n,ut):[]}function gv(n,s){var l=n==null?0:n.length;return l?(s=s===e?1:re(s),cn(n,s)):[]}function vv(n){for(var s=-1,l=n==null?0:n.length,h={};++s<l;){var M=n[s];h[M[0]]=M[1]}return h}function Of(n){return n&&n.length?n[0]:e}function xv(n,s,l){var h=n==null?0:n.length;if(!h)return-1;var M=l==null?0:re(l);return M<0&&(M=Qe(h+M,0)),Wr(n,s,M)}function Mv(n){var s=n==null?0:n.length;return s?Zn(n,0,-1):[]}var yv=le(function(n){var s=He(n,Fl);return s.length&&s[0]===n[0]?Al(s):[]}),Sv=le(function(n){var s=Kn(n),l=He(n,Fl);return s===Kn(l)?s=e:l.pop(),l.length&&l[0]===n[0]?Al(l,Gt(s,2)):[]}),Ev=le(function(n){var s=Kn(n),l=He(n,Fl);return s=typeof s=="function"?s:e,s&&l.pop(),l.length&&l[0]===n[0]?Al(l,e,s):[]});function Tv(n,s){return n==null?"":M_.call(n,s)}function Kn(n){var s=n==null?0:n.length;return s?n[s-1]:e}function bv(n,s,l){var h=n==null?0:n.length;if(!h)return-1;var M=h;return l!==e&&(M=re(l),M=M<0?Qe(h+M,0):dn(M,h-1)),s===s?r_(n,s,M):Ea(n,_h,M,!0)}function Av(n,s){return n&&n.length?Yh(n,re(s)):e}var wv=le(Bf);function Bf(n,s){return n&&n.length&&s&&s.length?Pl(n,s):n}function Rv(n,s,l){return n&&n.length&&s&&s.length?Pl(n,s,Gt(l,2)):n}function Cv(n,s,l){return n&&n.length&&s&&s.length?Pl(n,s,e,l):n}var Pv=wi(function(n,s){var l=n==null?0:n.length,h=Sl(n,s);return $h(n,He(s,function(M){return Ri(M,l)?+M:M}).sort(of)),h});function Dv(n,s){var l=[];if(!(n&&n.length))return l;var h=-1,M=[],b=n.length;for(s=Gt(s,3);++h<b;){var D=n[h];s(D,h,n)&&(l.push(D),M.push(h))}return $h(n,M),l}function $l(n){return n==null?n:T_.call(n)}function Lv(n,s,l){var h=n==null?0:n.length;return h?(l&&typeof l!="number"&&xn(n,s,l)?(s=0,l=h):(s=s==null?0:re(s),l=l===e?h:re(l)),Zn(n,s,l)):[]}function Iv(n,s){return Ga(n,s)}function Uv(n,s,l){return Il(n,s,Gt(l,2))}function Nv(n,s){var l=n==null?0:n.length;if(l){var h=Ga(n,s);if(h<l&&si(n[h],s))return h}return-1}function Fv(n,s){return Ga(n,s,!0)}function Ov(n,s,l){return Il(n,s,Gt(l,2),!0)}function Bv(n,s){var l=n==null?0:n.length;if(l){var h=Ga(n,s,!0)-1;if(si(n[h],s))return h}return-1}function zv(n){return n&&n.length?Qh(n):[]}function Hv(n,s){return n&&n.length?Qh(n,Gt(s,2)):[]}function kv(n){var s=n==null?0:n.length;return s?Zn(n,1,s):[]}function Vv(n,s,l){return n&&n.length?(s=l||s===e?1:re(s),Zn(n,0,s<0?0:s)):[]}function Gv(n,s,l){var h=n==null?0:n.length;return h?(s=l||s===e?1:re(s),s=h-s,Zn(n,s<0?0:s,h)):[]}function Wv(n,s){return n&&n.length?Wa(n,Gt(s,3),!1,!0):[]}function Xv(n,s){return n&&n.length?Wa(n,Gt(s,3)):[]}var qv=le(function(n){return Ji(cn(n,1,qe,!0))}),Yv=le(function(n){var s=Kn(n);return qe(s)&&(s=e),Ji(cn(n,1,qe,!0),Gt(s,2))}),Zv=le(function(n){var s=Kn(n);return s=typeof s=="function"?s:e,Ji(cn(n,1,qe,!0),e,s)});function Kv(n){return n&&n.length?Ji(n):[]}function $v(n,s){return n&&n.length?Ji(n,Gt(s,2)):[]}function Jv(n,s){return s=typeof s=="function"?s:e,n&&n.length?Ji(n,e,s):[]}function Jl(n){if(!(n&&n.length))return[];var s=0;return n=Xi(n,function(l){if(qe(l))return s=Qe(l.length,s),!0}),pl(s,function(l){return He(n,hl(l))})}function zf(n,s){if(!(n&&n.length))return[];var l=Jl(n);return s==null?l:He(l,function(h){return Un(s,e,h)})}var Qv=le(function(n,s){return qe(n)?Gs(n,s):[]}),jv=le(function(n){return Nl(Xi(n,qe))}),t0=le(function(n){var s=Kn(n);return qe(s)&&(s=e),Nl(Xi(n,qe),Gt(s,2))}),e0=le(function(n){var s=Kn(n);return s=typeof s=="function"?s:e,Nl(Xi(n,qe),e,s)}),n0=le(Jl);function i0(n,s){return nf(n||[],s||[],Vs)}function r0(n,s){return nf(n||[],s||[],qs)}var s0=le(function(n){var s=n.length,l=s>1?n[s-1]:e;return l=typeof l=="function"?(n.pop(),l):e,zf(n,l)});function Hf(n){var s=S(n);return s.__chain__=!0,s}function a0(n,s){return s(n),n}function ja(n,s){return s(n)}var o0=wi(function(n){var s=n.length,l=s?n[0]:0,h=this.__wrapped__,M=function(b){return Sl(b,n)};return s>1||this.__actions__.length||!(h instanceof _e)||!Ri(l)?this.thru(M):(h=h.slice(l,+l+(s?1:0)),h.__actions__.push({func:ja,args:[M],thisArg:e}),new qn(h,this.__chain__).thru(function(b){return s&&!b.length&&b.push(e),b}))});function l0(){return Hf(this)}function c0(){return new qn(this.value(),this.__chain__)}function u0(){this.__values__===e&&(this.__values__=td(this.value()));var n=this.__index__>=this.__values__.length,s=n?e:this.__values__[this.__index__++];return{done:n,value:s}}function h0(){return this}function f0(n){for(var s,l=this;l instanceof Ba;){var h=If(l);h.__index__=0,h.__values__=e,s?M.__wrapped__=h:s=h;var M=h;l=l.__wrapped__}return M.__wrapped__=n,s}function d0(){var n=this.__wrapped__;if(n instanceof _e){var s=n;return this.__actions__.length&&(s=new _e(this)),s=s.reverse(),s.__actions__.push({func:ja,args:[$l],thisArg:e}),new qn(s,this.__chain__)}return this.thru($l)}function p0(){return ef(this.__wrapped__,this.__actions__)}var m0=Xa(function(n,s,l){we.call(n,l)?++n[l]:bi(n,l,1)});function _0(n,s,l){var h=ne(n)?ph:ag;return l&&xn(n,s,l)&&(s=e),h(n,Gt(s,3))}function g0(n,s){var l=ne(n)?Xi:Bh;return l(n,Gt(s,3))}var v0=df(Uf),x0=df(Nf);function M0(n,s){return cn(to(n,s),1)}function y0(n,s){return cn(to(n,s),ut)}function S0(n,s,l){return l=l===e?1:re(l),cn(to(n,s),l)}function kf(n,s){var l=ne(n)?Wn:$i;return l(n,Gt(s,3))}function Vf(n,s){var l=ne(n)?km:Oh;return l(n,Gt(s,3))}var E0=Xa(function(n,s,l){we.call(n,l)?n[l].push(s):bi(n,l,[s])});function T0(n,s,l,h){n=Rn(n)?n:es(n),l=l&&!h?re(l):0;var M=n.length;return l<0&&(l=Qe(M+l,0)),so(n)?l<=M&&n.indexOf(s,l)>-1:!!M&&Wr(n,s,l)>-1}var b0=le(function(n,s,l){var h=-1,M=typeof s=="function",b=Rn(n)?$(n.length):[];return $i(n,function(D){b[++h]=M?Un(s,D,l):Ws(D,s,l)}),b}),A0=Xa(function(n,s,l){bi(n,l,s)});function to(n,s){var l=ne(n)?He:Wh;return l(n,Gt(s,3))}function w0(n,s,l,h){return n==null?[]:(ne(s)||(s=s==null?[]:[s]),l=h?e:l,ne(l)||(l=l==null?[]:[l]),Zh(n,s,l))}var R0=Xa(function(n,s,l){n[l?0:1].push(s)},function(){return[[],[]]});function C0(n,s,l){var h=ne(n)?cl:vh,M=arguments.length<3;return h(n,Gt(s,4),l,M,$i)}function P0(n,s,l){var h=ne(n)?Vm:vh,M=arguments.length<3;return h(n,Gt(s,4),l,M,Oh)}function D0(n,s){var l=ne(n)?Xi:Bh;return l(n,io(Gt(s,3)))}function L0(n){var s=ne(n)?Ih:Tg;return s(n)}function I0(n,s,l){(l?xn(n,s,l):s===e)?s=1:s=re(s);var h=ne(n)?eg:bg;return h(n,s)}function U0(n){var s=ne(n)?ng:wg;return s(n)}function N0(n){if(n==null)return 0;if(Rn(n))return so(n)?qr(n):n.length;var s=pn(n);return s==I||s==R?n.size:Rl(n).length}function F0(n,s,l){var h=ne(n)?ul:Rg;return l&&xn(n,s,l)&&(s=e),h(n,Gt(s,3))}var O0=le(function(n,s){if(n==null)return[];var l=s.length;return l>1&&xn(n,s[0],s[1])?s=[]:l>2&&xn(s[0],s[1],s[2])&&(s=[s[0]]),Zh(n,cn(s,1),[])}),eo=g_||function(){return an.Date.now()};function B0(n,s){if(typeof s!="function")throw new Xn(c);return n=re(n),function(){if(--n<1)return s.apply(this,arguments)}}function Gf(n,s,l){return s=l?e:s,s=n&&s==null?n.length:s,Ai(n,F,e,e,e,e,s)}function Wf(n,s){var l;if(typeof s!="function")throw new Xn(c);return n=re(n),function(){return--n>0&&(l=s.apply(this,arguments)),n<=1&&(s=e),l}}var Ql=le(function(n,s,l){var h=v;if(l.length){var M=Yi(l,jr(Ql));h|=W}return Ai(n,h,s,l,M)}),Xf=le(function(n,s,l){var h=v|m;if(l.length){var M=Yi(l,jr(Xf));h|=W}return Ai(s,h,n,l,M)});function qf(n,s,l){s=l?e:s;var h=Ai(n,L,e,e,e,e,e,s);return h.placeholder=qf.placeholder,h}function Yf(n,s,l){s=l?e:s;var h=Ai(n,P,e,e,e,e,e,s);return h.placeholder=Yf.placeholder,h}function Zf(n,s,l){var h,M,b,D,U,V,et=0,it=!1,ft=!1,vt=!0;if(typeof n!="function")throw new Xn(c);s=$n(s)||0,Ve(l)&&(it=!!l.leading,ft="maxWait"in l,b=ft?Qe($n(l.maxWait)||0,s):b,vt="trailing"in l?!!l.trailing:vt);function Ot(Ye){var ai=h,Di=M;return h=M=e,et=Ye,D=n.apply(Di,ai),D}function Xt(Ye){return et=Ye,U=Ks(pe,s),it?Ot(Ye):D}function se(Ye){var ai=Ye-V,Di=Ye-et,dd=s-ai;return ft?dn(dd,b-Di):dd}function qt(Ye){var ai=Ye-V,Di=Ye-et;return V===e||ai>=s||ai<0||ft&&Di>=b}function pe(){var Ye=eo();if(qt(Ye))return xe(Ye);U=Ks(pe,se(Ye))}function xe(Ye){return U=e,vt&&h?Ot(Ye):(h=M=e,D)}function Bn(){U!==e&&rf(U),et=0,h=V=M=U=e}function Mn(){return U===e?D:xe(eo())}function zn(){var Ye=eo(),ai=qt(Ye);if(h=arguments,M=this,V=Ye,ai){if(U===e)return Xt(V);if(ft)return rf(U),U=Ks(pe,s),Ot(V)}return U===e&&(U=Ks(pe,s)),D}return zn.cancel=Bn,zn.flush=Mn,zn}var z0=le(function(n,s){return Fh(n,1,s)}),H0=le(function(n,s,l){return Fh(n,$n(s)||0,l)});function k0(n){return Ai(n,C)}function no(n,s){if(typeof n!="function"||s!=null&&typeof s!="function")throw new Xn(c);var l=function(){var h=arguments,M=s?s.apply(this,h):h[0],b=l.cache;if(b.has(M))return b.get(M);var D=n.apply(this,h);return l.cache=b.set(M,D)||b,D};return l.cache=new(no.Cache||Ti),l}no.Cache=Ti;function io(n){if(typeof n!="function")throw new Xn(c);return function(){var s=arguments;switch(s.length){case 0:return!n.call(this);case 1:return!n.call(this,s[0]);case 2:return!n.call(this,s[0],s[1]);case 3:return!n.call(this,s[0],s[1],s[2])}return!n.apply(this,s)}}function V0(n){return Wf(2,n)}var G0=Cg(function(n,s){s=s.length==1&&ne(s[0])?He(s[0],Nn(Gt())):He(cn(s,1),Nn(Gt()));var l=s.length;return le(function(h){for(var M=-1,b=dn(h.length,l);++M<b;)h[M]=s[M].call(this,h[M]);return Un(n,this,h)})}),jl=le(function(n,s){var l=Yi(s,jr(jl));return Ai(n,W,e,s,l)}),Kf=le(function(n,s){var l=Yi(s,jr(Kf));return Ai(n,B,e,s,l)}),W0=wi(function(n,s){return Ai(n,q,e,e,e,s)});function X0(n,s){if(typeof n!="function")throw new Xn(c);return s=s===e?s:re(s),le(n,s)}function q0(n,s){if(typeof n!="function")throw new Xn(c);return s=s==null?0:Qe(re(s),0),le(function(l){var h=l[s],M=ji(l,0,s);return h&&qi(M,h),Un(n,this,M)})}function Y0(n,s,l){var h=!0,M=!0;if(typeof n!="function")throw new Xn(c);return Ve(l)&&(h="leading"in l?!!l.leading:h,M="trailing"in l?!!l.trailing:M),Zf(n,s,{leading:h,maxWait:s,trailing:M})}function Z0(n){return Gf(n,1)}function K0(n,s){return jl(Ol(s),n)}function $0(){if(!arguments.length)return[];var n=arguments[0];return ne(n)?n:[n]}function J0(n){return Yn(n,x)}function Q0(n,s){return s=typeof s=="function"?s:e,Yn(n,x,s)}function j0(n){return Yn(n,_|x)}function tx(n,s){return s=typeof s=="function"?s:e,Yn(n,_|x,s)}function ex(n,s){return s==null||Nh(n,s,on(s))}function si(n,s){return n===s||n!==n&&s!==s}var nx=Ka(bl),ix=Ka(function(n,s){return n>=s}),yr=kh(function(){return arguments}())?kh:function(n){return We(n)&&we.call(n,"callee")&&!wh.call(n,"callee")},ne=$.isArray,rx=lh?Nn(lh):fg;function Rn(n){return n!=null&&ro(n.length)&&!Ci(n)}function qe(n){return We(n)&&Rn(n)}function sx(n){return n===!0||n===!1||We(n)&&vn(n)==Ht}var tr=x_||uc,ax=ch?Nn(ch):dg;function ox(n){return We(n)&&n.nodeType===1&&!$s(n)}function lx(n){if(n==null)return!0;if(Rn(n)&&(ne(n)||typeof n=="string"||typeof n.splice=="function"||tr(n)||ts(n)||yr(n)))return!n.length;var s=pn(n);if(s==I||s==R)return!n.size;if(Zs(n))return!Rl(n).length;for(var l in n)if(we.call(n,l))return!1;return!0}function cx(n,s){return Xs(n,s)}function ux(n,s,l){l=typeof l=="function"?l:e;var h=l?l(n,s):e;return h===e?Xs(n,s,e,l):!!h}function tc(n){if(!We(n))return!1;var s=vn(n);return s==Ne||s==Zt||typeof n.message=="string"&&typeof n.name=="string"&&!$s(n)}function hx(n){return typeof n=="number"&&Ch(n)}function Ci(n){if(!Ve(n))return!1;var s=vn(n);return s==Re||s==fe||s==Et||s==Le}function $f(n){return typeof n=="number"&&n==re(n)}function ro(n){return typeof n=="number"&&n>-1&&n%1==0&&n<=J}function Ve(n){var s=typeof n;return n!=null&&(s=="object"||s=="function")}function We(n){return n!=null&&typeof n=="object"}var Jf=uh?Nn(uh):mg;function fx(n,s){return n===s||wl(n,s,Wl(s))}function dx(n,s,l){return l=typeof l=="function"?l:e,wl(n,s,Wl(s),l)}function px(n){return Qf(n)&&n!=+n}function mx(n){if(Qg(n))throw new te(o);return Vh(n)}function _x(n){return n===null}function gx(n){return n==null}function Qf(n){return typeof n=="number"||We(n)&&vn(n)==nn}function $s(n){if(!We(n)||vn(n)!=Qt)return!1;var s=Da(n);if(s===null)return!0;var l=we.call(s,"constructor")&&s.constructor;return typeof l=="function"&&l instanceof l&&wa.call(l)==d_}var ec=hh?Nn(hh):_g;function vx(n){return $f(n)&&n>=-J&&n<=J}var jf=fh?Nn(fh):gg;function so(n){return typeof n=="string"||!ne(n)&&We(n)&&vn(n)==y}function On(n){return typeof n=="symbol"||We(n)&&vn(n)==Y}var ts=dh?Nn(dh):vg;function xx(n){return n===e}function Mx(n){return We(n)&&pn(n)==ht}function yx(n){return We(n)&&vn(n)==nt}var Sx=Ka(Cl),Ex=Ka(function(n,s){return n<=s});function td(n){if(!n)return[];if(Rn(n))return so(n)?ii(n):wn(n);if(Os&&n[Os])return e_(n[Os]());var s=pn(n),l=s==I?_l:s==R?Ta:es;return l(n)}function Pi(n){if(!n)return n===0?n:0;if(n=$n(n),n===ut||n===-ut){var s=n<0?-1:1;return s*St}return n===n?n:0}function re(n){var s=Pi(n),l=s%1;return s===s?l?s-l:s:0}function ed(n){return n?gr(re(n),0,It):0}function $n(n){if(typeof n=="number")return n;if(On(n))return At;if(Ve(n)){var s=typeof n.valueOf=="function"?n.valueOf():n;n=Ve(s)?s+"":s}if(typeof n!="string")return n===0?n:+n;n=xh(n);var l=el.test(n);return l||il.test(n)?Bm(n.slice(2),l?2:8):tl.test(n)?At:+n}function nd(n){return pi(n,Cn(n))}function Tx(n){return n?gr(re(n),-J,J):n===0?n:0}function be(n){return n==null?"":Fn(n)}var bx=Jr(function(n,s){if(Zs(s)||Rn(s)){pi(s,on(s),n);return}for(var l in s)we.call(s,l)&&Vs(n,l,s[l])}),id=Jr(function(n,s){pi(s,Cn(s),n)}),ao=Jr(function(n,s,l,h){pi(s,Cn(s),n,h)}),Ax=Jr(function(n,s,l,h){pi(s,on(s),n,h)}),wx=wi(Sl);function Rx(n,s){var l=$r(n);return s==null?l:Uh(l,s)}var Cx=le(function(n,s){n=Ue(n);var l=-1,h=s.length,M=h>2?s[2]:e;for(M&&xn(s[0],s[1],M)&&(h=1);++l<h;)for(var b=s[l],D=Cn(b),U=-1,V=D.length;++U<V;){var et=D[U],it=n[et];(it===e||si(it,Yr[et])&&!we.call(n,et))&&(n[et]=b[et])}return n}),Px=le(function(n){return n.push(e,Mf),Un(rd,e,n)});function Dx(n,s){return mh(n,Gt(s,3),di)}function Lx(n,s){return mh(n,Gt(s,3),Tl)}function Ix(n,s){return n==null?n:El(n,Gt(s,3),Cn)}function Ux(n,s){return n==null?n:zh(n,Gt(s,3),Cn)}function Nx(n,s){return n&&di(n,Gt(s,3))}function Fx(n,s){return n&&Tl(n,Gt(s,3))}function Ox(n){return n==null?[]:ka(n,on(n))}function Bx(n){return n==null?[]:ka(n,Cn(n))}function nc(n,s,l){var h=n==null?e:vr(n,s);return h===e?l:h}function zx(n,s){return n!=null&&Ef(n,s,lg)}function ic(n,s){return n!=null&&Ef(n,s,cg)}var Hx=mf(function(n,s,l){s!=null&&typeof s.toString!="function"&&(s=Ra.call(s)),n[s]=l},sc(Pn)),kx=mf(function(n,s,l){s!=null&&typeof s.toString!="function"&&(s=Ra.call(s)),we.call(n,s)?n[s].push(l):n[s]=[l]},Gt),Vx=le(Ws);function on(n){return Rn(n)?Lh(n):Rl(n)}function Cn(n){return Rn(n)?Lh(n,!0):xg(n)}function Gx(n,s){var l={};return s=Gt(s,3),di(n,function(h,M,b){bi(l,s(h,M,b),h)}),l}function Wx(n,s){var l={};return s=Gt(s,3),di(n,function(h,M,b){bi(l,M,s(h,M,b))}),l}var Xx=Jr(function(n,s,l){Va(n,s,l)}),rd=Jr(function(n,s,l,h){Va(n,s,l,h)}),qx=wi(function(n,s){var l={};if(n==null)return l;var h=!1;s=He(s,function(b){return b=Qi(b,n),h||(h=b.length>1),b}),pi(n,Vl(n),l),h&&(l=Yn(l,_|g|x,Hg));for(var M=s.length;M--;)Ul(l,s[M]);return l});function Yx(n,s){return sd(n,io(Gt(s)))}var Zx=wi(function(n,s){return n==null?{}:yg(n,s)});function sd(n,s){if(n==null)return{};var l=He(Vl(n),function(h){return[h]});return s=Gt(s),Kh(n,l,function(h,M){return s(h,M[0])})}function Kx(n,s,l){s=Qi(s,n);var h=-1,M=s.length;for(M||(M=1,n=e);++h<M;){var b=n==null?e:n[mi(s[h])];b===e&&(h=M,b=l),n=Ci(b)?b.call(n):b}return n}function $x(n,s,l){return n==null?n:qs(n,s,l)}function Jx(n,s,l,h){return h=typeof h=="function"?h:e,n==null?n:qs(n,s,l,h)}var ad=vf(on),od=vf(Cn);function Qx(n,s,l){var h=ne(n),M=h||tr(n)||ts(n);if(s=Gt(s,4),l==null){var b=n&&n.constructor;M?l=h?new b:[]:Ve(n)?l=Ci(b)?$r(Da(n)):{}:l={}}return(M?Wn:di)(n,function(D,U,V){return s(l,D,U,V)}),l}function jx(n,s){return n==null?!0:Ul(n,s)}function tM(n,s,l){return n==null?n:tf(n,s,Ol(l))}function eM(n,s,l,h){return h=typeof h=="function"?h:e,n==null?n:tf(n,s,Ol(l),h)}function es(n){return n==null?[]:ml(n,on(n))}function nM(n){return n==null?[]:ml(n,Cn(n))}function iM(n,s,l){return l===e&&(l=s,s=e),l!==e&&(l=$n(l),l=l===l?l:0),s!==e&&(s=$n(s),s=s===s?s:0),gr($n(n),s,l)}function rM(n,s,l){return s=Pi(s),l===e?(l=s,s=0):l=Pi(l),n=$n(n),ug(n,s,l)}function sM(n,s,l){if(l&&typeof l!="boolean"&&xn(n,s,l)&&(s=l=e),l===e&&(typeof s=="boolean"?(l=s,s=e):typeof n=="boolean"&&(l=n,n=e)),n===e&&s===e?(n=0,s=1):(n=Pi(n),s===e?(s=n,n=0):s=Pi(s)),n>s){var h=n;n=s,s=h}if(l||n%1||s%1){var M=Ph();return dn(n+M*(s-n+Om("1e-"+((M+"").length-1))),s)}return Dl(n,s)}var aM=Qr(function(n,s,l){return s=s.toLowerCase(),n+(l?ld(s):s)});function ld(n){return rc(be(n).toLowerCase())}function cd(n){return n=be(n),n&&n.replace(T,$m).replace(wm,"")}function oM(n,s,l){n=be(n),s=Fn(s);var h=n.length;l=l===e?h:gr(re(l),0,h);var M=l;return l-=s.length,l>=0&&n.slice(l,M)==s}function lM(n){return n=be(n),n&&Tt.test(n)?n.replace(ot,Jm):n}function cM(n){return n=be(n),n&&ma.test(n)?n.replace(kr,"\\$&"):n}var uM=Qr(function(n,s,l){return n+(l?"-":"")+s.toLowerCase()}),hM=Qr(function(n,s,l){return n+(l?" ":"")+s.toLowerCase()}),fM=ff("toLowerCase");function dM(n,s,l){n=be(n),s=re(s);var h=s?qr(n):0;if(!s||h>=s)return n;var M=(s-h)/2;return Za(Na(M),l)+n+Za(Ua(M),l)}function pM(n,s,l){n=be(n),s=re(s);var h=s?qr(n):0;return s&&h<s?n+Za(s-h,l):n}function mM(n,s,l){n=be(n),s=re(s);var h=s?qr(n):0;return s&&h<s?Za(s-h,l)+n:n}function _M(n,s,l){return l||s==null?s=0:s&&(s=+s),E_(be(n).replace(ni,""),s||0)}function gM(n,s,l){return(l?xn(n,s,l):s===e)?s=1:s=re(s),Ll(be(n),s)}function vM(){var n=arguments,s=be(n[0]);return n.length<3?s:s.replace(n[1],n[2])}var xM=Qr(function(n,s,l){return n+(l?"_":"")+s.toLowerCase()});function MM(n,s,l){return l&&typeof l!="number"&&xn(n,s,l)&&(s=l=e),l=l===e?It:l>>>0,l?(n=be(n),n&&(typeof s=="string"||s!=null&&!ec(s))&&(s=Fn(s),!s&&Xr(n))?ji(ii(n),0,l):n.split(s,l)):[]}var yM=Qr(function(n,s,l){return n+(l?" ":"")+rc(s)});function SM(n,s,l){return n=be(n),l=l==null?0:gr(re(l),0,n.length),s=Fn(s),n.slice(l,l+s.length)==s}function EM(n,s,l){var h=S.templateSettings;l&&xn(n,s,l)&&(s=e),n=be(n),s=ao({},s,h,xf);var M=ao({},s.imports,h.imports,xf),b=on(M),D=ml(M,b),U,V,et=0,it=s.interpolate||H,ft="__p += '",vt=gl((s.escape||H).source+"|"+it.source+"|"+(it===Ke?Ma:H).source+"|"+(s.evaluate||H).source+"|$","g"),Ot="//# sourceURL="+(we.call(s,"sourceURL")?(s.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++Lm+"]")+`
`;n.replace(vt,function(qt,pe,xe,Bn,Mn,zn){return xe||(xe=Bn),ft+=n.slice(et,zn).replace(Z,Qm),pe&&(U=!0,ft+=`' +
__e(`+pe+`) +
'`),Mn&&(V=!0,ft+=`';
`+Mn+`;
__p += '`),xe&&(ft+=`' +
((__t = (`+xe+`)) == null ? '' : __t) +
'`),et=zn+qt.length,qt}),ft+=`';
`;var Xt=we.call(s,"variable")&&s.variable;if(!Xt)ft=`with (obj) {
`+ft+`
}
`;else if(Gr.test(Xt))throw new te(u);ft=(V?ft.replace(Ce,""):ft).replace(z,"$1").replace(Mt,"$1;"),ft="function("+(Xt||"obj")+`) {
`+(Xt?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(U?", __e = _.escape":"")+(V?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+ft+`return __p
}`;var se=hd(function(){return Te(b,Ot+"return "+ft).apply(e,D)});if(se.source=ft,tc(se))throw se;return se}function TM(n){return be(n).toLowerCase()}function bM(n){return be(n).toUpperCase()}function AM(n,s,l){if(n=be(n),n&&(l||s===e))return xh(n);if(!n||!(s=Fn(s)))return n;var h=ii(n),M=ii(s),b=Mh(h,M),D=yh(h,M)+1;return ji(h,b,D).join("")}function wM(n,s,l){if(n=be(n),n&&(l||s===e))return n.slice(0,Eh(n)+1);if(!n||!(s=Fn(s)))return n;var h=ii(n),M=yh(h,ii(s))+1;return ji(h,0,M).join("")}function RM(n,s,l){if(n=be(n),n&&(l||s===e))return n.replace(ni,"");if(!n||!(s=Fn(s)))return n;var h=ii(n),M=Mh(h,ii(s));return ji(h,M).join("")}function CM(n,s){var l=w,h=O;if(Ve(s)){var M="separator"in s?s.separator:M;l="length"in s?re(s.length):l,h="omission"in s?Fn(s.omission):h}n=be(n);var b=n.length;if(Xr(n)){var D=ii(n);b=D.length}if(l>=b)return n;var U=l-qr(h);if(U<1)return h;var V=D?ji(D,0,U).join(""):n.slice(0,U);if(M===e)return V+h;if(D&&(U+=V.length-U),ec(M)){if(n.slice(U).search(M)){var et,it=V;for(M.global||(M=gl(M.source,be(ya.exec(M))+"g")),M.lastIndex=0;et=M.exec(it);)var ft=et.index;V=V.slice(0,ft===e?U:ft)}}else if(n.indexOf(Fn(M),U)!=U){var vt=V.lastIndexOf(M);vt>-1&&(V=V.slice(0,vt))}return V+h}function PM(n){return n=be(n),n&&bt.test(n)?n.replace(j,s_):n}var DM=Qr(function(n,s,l){return n+(l?" ":"")+s.toUpperCase()}),rc=ff("toUpperCase");function ud(n,s,l){return n=be(n),s=l?e:s,s===e?t_(n)?l_(n):Xm(n):n.match(s)||[]}var hd=le(function(n,s){try{return Un(n,e,s)}catch(l){return tc(l)?l:new te(l)}}),LM=wi(function(n,s){return Wn(s,function(l){l=mi(l),bi(n,l,Ql(n[l],n))}),n});function IM(n){var s=n==null?0:n.length,l=Gt();return n=s?He(n,function(h){if(typeof h[1]!="function")throw new Xn(c);return[l(h[0]),h[1]]}):[],le(function(h){for(var M=-1;++M<s;){var b=n[M];if(Un(b[0],this,h))return Un(b[1],this,h)}})}function UM(n){return sg(Yn(n,_))}function sc(n){return function(){return n}}function NM(n,s){return n==null||n!==n?s:n}var FM=pf(),OM=pf(!0);function Pn(n){return n}function ac(n){return Gh(typeof n=="function"?n:Yn(n,_))}function BM(n){return Xh(Yn(n,_))}function zM(n,s){return qh(n,Yn(s,_))}var HM=le(function(n,s){return function(l){return Ws(l,n,s)}}),kM=le(function(n,s){return function(l){return Ws(n,l,s)}});function oc(n,s,l){var h=on(s),M=ka(s,h);l==null&&!(Ve(s)&&(M.length||!h.length))&&(l=s,s=n,n=this,M=ka(s,on(s)));var b=!(Ve(l)&&"chain"in l)||!!l.chain,D=Ci(n);return Wn(M,function(U){var V=s[U];n[U]=V,D&&(n.prototype[U]=function(){var et=this.__chain__;if(b||et){var it=n(this.__wrapped__),ft=it.__actions__=wn(this.__actions__);return ft.push({func:V,args:arguments,thisArg:n}),it.__chain__=et,it}return V.apply(n,qi([this.value()],arguments))})}),n}function VM(){return an._===this&&(an._=p_),this}function lc(){}function GM(n){return n=re(n),le(function(s){return Yh(s,n)})}var WM=zl(He),XM=zl(ph),qM=zl(ul);function fd(n){return ql(n)?hl(mi(n)):Sg(n)}function YM(n){return function(s){return n==null?e:vr(n,s)}}var ZM=_f(),KM=_f(!0);function cc(){return[]}function uc(){return!1}function $M(){return{}}function JM(){return""}function QM(){return!0}function jM(n,s){if(n=re(n),n<1||n>J)return[];var l=It,h=dn(n,It);s=Gt(s),n-=It;for(var M=pl(h,s);++l<n;)s(l);return M}function ty(n){return ne(n)?He(n,mi):On(n)?[n]:wn(Lf(be(n)))}function ey(n){var s=++f_;return be(n)+s}var ny=Ya(function(n,s){return n+s},0),iy=Hl("ceil"),ry=Ya(function(n,s){return n/s},1),sy=Hl("floor");function ay(n){return n&&n.length?Ha(n,Pn,bl):e}function oy(n,s){return n&&n.length?Ha(n,Gt(s,2),bl):e}function ly(n){return gh(n,Pn)}function cy(n,s){return gh(n,Gt(s,2))}function uy(n){return n&&n.length?Ha(n,Pn,Cl):e}function hy(n,s){return n&&n.length?Ha(n,Gt(s,2),Cl):e}var fy=Ya(function(n,s){return n*s},1),dy=Hl("round"),py=Ya(function(n,s){return n-s},0);function my(n){return n&&n.length?dl(n,Pn):0}function _y(n,s){return n&&n.length?dl(n,Gt(s,2)):0}return S.after=B0,S.ary=Gf,S.assign=bx,S.assignIn=id,S.assignInWith=ao,S.assignWith=Ax,S.at=wx,S.before=Wf,S.bind=Ql,S.bindAll=LM,S.bindKey=Xf,S.castArray=$0,S.chain=Hf,S.chunk=sv,S.compact=av,S.concat=ov,S.cond=IM,S.conforms=UM,S.constant=sc,S.countBy=m0,S.create=Rx,S.curry=qf,S.curryRight=Yf,S.debounce=Zf,S.defaults=Cx,S.defaultsDeep=Px,S.defer=z0,S.delay=H0,S.difference=lv,S.differenceBy=cv,S.differenceWith=uv,S.drop=hv,S.dropRight=fv,S.dropRightWhile=dv,S.dropWhile=pv,S.fill=mv,S.filter=g0,S.flatMap=M0,S.flatMapDeep=y0,S.flatMapDepth=S0,S.flatten=Ff,S.flattenDeep=_v,S.flattenDepth=gv,S.flip=k0,S.flow=FM,S.flowRight=OM,S.fromPairs=vv,S.functions=Ox,S.functionsIn=Bx,S.groupBy=E0,S.initial=Mv,S.intersection=yv,S.intersectionBy=Sv,S.intersectionWith=Ev,S.invert=Hx,S.invertBy=kx,S.invokeMap=b0,S.iteratee=ac,S.keyBy=A0,S.keys=on,S.keysIn=Cn,S.map=to,S.mapKeys=Gx,S.mapValues=Wx,S.matches=BM,S.matchesProperty=zM,S.memoize=no,S.merge=Xx,S.mergeWith=rd,S.method=HM,S.methodOf=kM,S.mixin=oc,S.negate=io,S.nthArg=GM,S.omit=qx,S.omitBy=Yx,S.once=V0,S.orderBy=w0,S.over=WM,S.overArgs=G0,S.overEvery=XM,S.overSome=qM,S.partial=jl,S.partialRight=Kf,S.partition=R0,S.pick=Zx,S.pickBy=sd,S.property=fd,S.propertyOf=YM,S.pull=wv,S.pullAll=Bf,S.pullAllBy=Rv,S.pullAllWith=Cv,S.pullAt=Pv,S.range=ZM,S.rangeRight=KM,S.rearg=W0,S.reject=D0,S.remove=Dv,S.rest=X0,S.reverse=$l,S.sampleSize=I0,S.set=$x,S.setWith=Jx,S.shuffle=U0,S.slice=Lv,S.sortBy=O0,S.sortedUniq=zv,S.sortedUniqBy=Hv,S.split=MM,S.spread=q0,S.tail=kv,S.take=Vv,S.takeRight=Gv,S.takeRightWhile=Wv,S.takeWhile=Xv,S.tap=a0,S.throttle=Y0,S.thru=ja,S.toArray=td,S.toPairs=ad,S.toPairsIn=od,S.toPath=ty,S.toPlainObject=nd,S.transform=Qx,S.unary=Z0,S.union=qv,S.unionBy=Yv,S.unionWith=Zv,S.uniq=Kv,S.uniqBy=$v,S.uniqWith=Jv,S.unset=jx,S.unzip=Jl,S.unzipWith=zf,S.update=tM,S.updateWith=eM,S.values=es,S.valuesIn=nM,S.without=Qv,S.words=ud,S.wrap=K0,S.xor=jv,S.xorBy=t0,S.xorWith=e0,S.zip=n0,S.zipObject=i0,S.zipObjectDeep=r0,S.zipWith=s0,S.entries=ad,S.entriesIn=od,S.extend=id,S.extendWith=ao,oc(S,S),S.add=ny,S.attempt=hd,S.camelCase=aM,S.capitalize=ld,S.ceil=iy,S.clamp=iM,S.clone=J0,S.cloneDeep=j0,S.cloneDeepWith=tx,S.cloneWith=Q0,S.conformsTo=ex,S.deburr=cd,S.defaultTo=NM,S.divide=ry,S.endsWith=oM,S.eq=si,S.escape=lM,S.escapeRegExp=cM,S.every=_0,S.find=v0,S.findIndex=Uf,S.findKey=Dx,S.findLast=x0,S.findLastIndex=Nf,S.findLastKey=Lx,S.floor=sy,S.forEach=kf,S.forEachRight=Vf,S.forIn=Ix,S.forInRight=Ux,S.forOwn=Nx,S.forOwnRight=Fx,S.get=nc,S.gt=nx,S.gte=ix,S.has=zx,S.hasIn=ic,S.head=Of,S.identity=Pn,S.includes=T0,S.indexOf=xv,S.inRange=rM,S.invoke=Vx,S.isArguments=yr,S.isArray=ne,S.isArrayBuffer=rx,S.isArrayLike=Rn,S.isArrayLikeObject=qe,S.isBoolean=sx,S.isBuffer=tr,S.isDate=ax,S.isElement=ox,S.isEmpty=lx,S.isEqual=cx,S.isEqualWith=ux,S.isError=tc,S.isFinite=hx,S.isFunction=Ci,S.isInteger=$f,S.isLength=ro,S.isMap=Jf,S.isMatch=fx,S.isMatchWith=dx,S.isNaN=px,S.isNative=mx,S.isNil=gx,S.isNull=_x,S.isNumber=Qf,S.isObject=Ve,S.isObjectLike=We,S.isPlainObject=$s,S.isRegExp=ec,S.isSafeInteger=vx,S.isSet=jf,S.isString=so,S.isSymbol=On,S.isTypedArray=ts,S.isUndefined=xx,S.isWeakMap=Mx,S.isWeakSet=yx,S.join=Tv,S.kebabCase=uM,S.last=Kn,S.lastIndexOf=bv,S.lowerCase=hM,S.lowerFirst=fM,S.lt=Sx,S.lte=Ex,S.max=ay,S.maxBy=oy,S.mean=ly,S.meanBy=cy,S.min=uy,S.minBy=hy,S.stubArray=cc,S.stubFalse=uc,S.stubObject=$M,S.stubString=JM,S.stubTrue=QM,S.multiply=fy,S.nth=Av,S.noConflict=VM,S.noop=lc,S.now=eo,S.pad=dM,S.padEnd=pM,S.padStart=mM,S.parseInt=_M,S.random=sM,S.reduce=C0,S.reduceRight=P0,S.repeat=gM,S.replace=vM,S.result=Kx,S.round=dy,S.runInContext=k,S.sample=L0,S.size=N0,S.snakeCase=xM,S.some=F0,S.sortedIndex=Iv,S.sortedIndexBy=Uv,S.sortedIndexOf=Nv,S.sortedLastIndex=Fv,S.sortedLastIndexBy=Ov,S.sortedLastIndexOf=Bv,S.startCase=yM,S.startsWith=SM,S.subtract=py,S.sum=my,S.sumBy=_y,S.template=EM,S.times=jM,S.toFinite=Pi,S.toInteger=re,S.toLength=ed,S.toLower=TM,S.toNumber=$n,S.toSafeInteger=Tx,S.toString=be,S.toUpper=bM,S.trim=AM,S.trimEnd=wM,S.trimStart=RM,S.truncate=CM,S.unescape=PM,S.uniqueId=ey,S.upperCase=DM,S.upperFirst=rc,S.each=kf,S.eachRight=Vf,S.first=Of,oc(S,function(){var n={};return di(S,function(s,l){we.call(S.prototype,l)||(n[l]=s)}),n}(),{chain:!1}),S.VERSION=r,Wn(["bind","bindKey","curry","curryRight","partial","partialRight"],function(n){S[n].placeholder=S}),Wn(["drop","take"],function(n,s){_e.prototype[n]=function(l){l=l===e?1:Qe(re(l),0);var h=this.__filtered__&&!s?new _e(this):this.clone();return h.__filtered__?h.__takeCount__=dn(l,h.__takeCount__):h.__views__.push({size:dn(l,It),type:n+(h.__dir__<0?"Right":"")}),h},_e.prototype[n+"Right"]=function(l){return this.reverse()[n](l).reverse()}}),Wn(["filter","map","takeWhile"],function(n,s){var l=s+1,h=l==ct||l==at;_e.prototype[n]=function(M){var b=this.clone();return b.__iteratees__.push({iteratee:Gt(M,3),type:l}),b.__filtered__=b.__filtered__||h,b}}),Wn(["head","last"],function(n,s){var l="take"+(s?"Right":"");_e.prototype[n]=function(){return this[l](1).value()[0]}}),Wn(["initial","tail"],function(n,s){var l="drop"+(s?"":"Right");_e.prototype[n]=function(){return this.__filtered__?new _e(this):this[l](1)}}),_e.prototype.compact=function(){return this.filter(Pn)},_e.prototype.find=function(n){return this.filter(n).head()},_e.prototype.findLast=function(n){return this.reverse().find(n)},_e.prototype.invokeMap=le(function(n,s){return typeof n=="function"?new _e(this):this.map(function(l){return Ws(l,n,s)})}),_e.prototype.reject=function(n){return this.filter(io(Gt(n)))},_e.prototype.slice=function(n,s){n=re(n);var l=this;return l.__filtered__&&(n>0||s<0)?new _e(l):(n<0?l=l.takeRight(-n):n&&(l=l.drop(n)),s!==e&&(s=re(s),l=s<0?l.dropRight(-s):l.take(s-n)),l)},_e.prototype.takeRightWhile=function(n){return this.reverse().takeWhile(n).reverse()},_e.prototype.toArray=function(){return this.take(It)},di(_e.prototype,function(n,s){var l=/^(?:filter|find|map|reject)|While$/.test(s),h=/^(?:head|last)$/.test(s),M=S[h?"take"+(s=="last"?"Right":""):s],b=h||/^find/.test(s);M&&(S.prototype[s]=function(){var D=this.__wrapped__,U=h?[1]:arguments,V=D instanceof _e,et=U[0],it=V||ne(D),ft=function(pe){var xe=M.apply(S,qi([pe],U));return h&&vt?xe[0]:xe};it&&l&&typeof et=="function"&&et.length!=1&&(V=it=!1);var vt=this.__chain__,Ot=!!this.__actions__.length,Xt=b&&!vt,se=V&&!Ot;if(!b&&it){D=se?D:new _e(this);var qt=n.apply(D,U);return qt.__actions__.push({func:ja,args:[ft],thisArg:e}),new qn(qt,vt)}return Xt&&se?n.apply(this,U):(qt=this.thru(ft),Xt?h?qt.value()[0]:qt.value():qt)})}),Wn(["pop","push","shift","sort","splice","unshift"],function(n){var s=ba[n],l=/^(?:push|sort|unshift)$/.test(n)?"tap":"thru",h=/^(?:pop|shift)$/.test(n);S.prototype[n]=function(){var M=arguments;if(h&&!this.__chain__){var b=this.value();return s.apply(ne(b)?b:[],M)}return this[l](function(D){return s.apply(ne(D)?D:[],M)})}}),di(_e.prototype,function(n,s){var l=S[s];if(l){var h=l.name+"";we.call(Kr,h)||(Kr[h]=[]),Kr[h].push({name:s,func:l})}}),Kr[qa(e,m).name]=[{name:"wrapper",func:e}],_e.prototype.clone=P_,_e.prototype.reverse=D_,_e.prototype.value=L_,S.prototype.at=o0,S.prototype.chain=l0,S.prototype.commit=c0,S.prototype.next=u0,S.prototype.plant=f0,S.prototype.reverse=d0,S.prototype.toJSON=S.prototype.valueOf=S.prototype.value=p0,S.prototype.first=S.prototype.head,Os&&(S.prototype[Os]=h0),S},Zi=c_();typeof define=="function"&&typeof define.amd=="object"&&define.amd?(an._=Zi,define(function(){return Zi})):dr?((dr.exports=Zi)._=Zi,al._=Zi):an._=Zi}).call(i)}),xp=zr(Hr());function hm(i,t,e=1,r=0){let a=0,o=i.length/e;for(;a<o;){let c=a+o>>1;i[c*e+r]<t?a=c+1:o=c}return a*e}function l1(i,t){let e=new Array(i);for(let r=0;r<i;r++)e[r]=t(r);return e}var{cos:c1,pow:u1,sin:h1,sqrt:f1,PI:fm}=Math,d1=i=>{if(i<1/2.75)return 7.5625*i*i;if(i<2/2.75){let t=i-1.5;return 7.5625*(t/2.75)*t+.75}else return i<2.5/2.75?7.5625*(i-=2.25/2.75)*i+.9375:7.5625*(i-=2.625/2.75)*i+.984375};function p1(i){return t=>1-i(1-t)}function m1(i){return t=>t<.5?.5*i(2*t):.5+.5*(1-i(2-2*t))}var _1=i=>i===0||i===1?i:u1(2,-10*i)*h1((i-.075)*(2*fm)/.3)+1,g1={linear:i=>i,quad:i=>i*i,cubic:i=>i*i*i,quart:i=>i*i*i*i,quint:i=>i*i*i*i*i,sine:i=>1-c1(i*fm*.5),circ:i=>1-f1(1-i*i),back:i=>2.7*i*i*i-1.7*i*i,elastic:_1,bounce:i=>1-d1(1-i)},Mp=Object.fromEntries(Object.entries(g1).flatMap(([i,t])=>[[i,t],[`${i}In`,t],[`${i}Out`,p1(t)],[`${i}InOut`,m1(t)]]));function Ku(i){if(!(i in Mp))throw new Error(`Easing '${i}' was not found.`);return Mp[i]}var v1=Math.PI*.5;function dm(i,t,e=Number.EPSILON){return Math.abs(i-t)<=e}function x1(i,t){let e=hm(i,t,2),r=Math.max(0,e-2);e===i.length&&(e-=2);let a=i[r],o=i[e];if(dm(a,o))return i[r+1];{let c=i[r+1],u=i[e+1],f=(t-a)/(o-a);return(u-c)*f+c}}function yp(i,t,e,r){if(i.length===0){r.fill(0,0,t);return}let a=t+1,o=hm(i,e,a),c=Math.max(0,o-a);o===i.length&&(o-=a);let u=i[c],f=i[o];if(dm(u,f))for(let d=0;d<t;d++)r[d]=i[c+d+1];else for(let d=0;d<t;d++){let p=i[c+d+1],_=i[o+d+1],g=(e-u)/(f-u);r[d]=(_-p)*g+p}}function $u(i){return i!=null}var M1=new TextDecoder;function y1(i,t){return typeof i=="string"?i:M1.decode(i,t)}var S1=zr(Hr()),Lu={min:0,max:0,ease:"linear"};function aa(i){(0,S1.defaults)(i,{max:i.min??0},Lu)}function oa(i){return Ku(i.ease)(Math.random())*(i.max-i.min)+i.min}var Hc=zr(Hr()),Xo={property:"",timeline:new Float32Array,useEmitterDuration:!1,relative:!1,low:{min:0,max:0,ease:"linear"},high:{min:1,max:1,ease:"linear"}};function kc(i){(0,Hc.defaults)(i,(0,Hc.cloneDeep)({high:i.low??Xo.high}),(0,Hc.cloneDeep)(Xo)),aa(i.low),aa(i.high),Array.isArray(i.timeline)&&(i.timeline=new Float32Array(i.timeline))}var qo=zr(Hr()),E1=zr(Hr()),{random:Es,cos:Sp,sin:Ep,PI:T1,acos:b1,cbrt:A1}=Math,pm={type:"point",x:0,y:0,z:0,w:0,h:0,d:0,ease:"linear"};function w1(i){(0,E1.defaults)(i,pm)}function R1(i,t){let e=Ku(i);t.x=e(Es())-.5,t.y=e(Es())-.5,t.z=e(Es())-.5}var Vc=new X,C1=new X,P1=2*T1;function D1(i,t){switch(i.type){case"point":t.set(i.x,i.y,i.z);break;case"box":R1(i.ease,Vc),Vc.multiply(C1.set(i.w,i.h,i.d)),t.set(i.x,i.y,i.z).add(Vc);break;case"ellipsoid":{let e=Es(),r=Es(),a=P1*e,o=b1(2*r-1),c=A1(Ku(i.ease)(Es())),u=Ep(a),f=Sp(a),d=Ep(o),p=Sp(o);t.set(c*i.w*d*f,c*i.h*d*u,c*i.d*p)}}}var mm={uuid:"",enabled:!0,count:100,loops:!0,duration:{duration:{min:10,max:10,ease:"linear"},delayBefore:Lu,delayAfter:Lu},emissionRate:{...Xo,property:"emissionRate",useEmitterDuration:!0,low:{min:10,max:10,ease:"linear"},high:{min:10,max:10,ease:"linear"}},particleLifeExpectancy:{...Xo,property:"particleLifeExpectancy",useEmitterDuration:!0,low:{min:2,max:2,ease:"linear"},high:{min:2,max:2,ease:"linear"}},spawn:pm,orientToForwardDirection:!1,propertyTimelines:[],material:null};function L1(i,t){(0,qo.defaults)(i,{id:Vp.generateUUID()},(0,qo.cloneDeep)(mm)),w1(i.spawn),I1(i.duration),kc(i.emissionRate),kc(i.particleLifeExpectancy),i.propertyTimelines.filter($u).forEach(kc),i.material=U1(i.material,t)}function I1(i){(0,qo.defaults)(i,(0,qo.cloneDeep)(mm.duration)),aa(i.duration),aa(i.delayBefore),aa(i.delayAfter)}function U1(i,t){return i?Array.isArray(i)?i.map(e=>Tp(e,t)).filter($u):Tp(i,t):null}function Tp(i,t){return typeof i=="string"?t[i]||(console.warn(`Missing material: ${i}`),null):i??null}var N1={version:"1.0",emitters:[]};function F1(i,t){(0,xp.defaults)(i,(0,xp.cloneDeep)(N1)),i.emitters.filter($u).forEach(e=>L1(e,t))}function O1(i){return i.isParticleEmitterObject}var B1=class _m extends na{constructor(){super(),this.emittersNeedUpdate=!0,this.emitters=[]}forEachEmitter(t){for(let e of this.children)O1(e)&&t(e)}update(t){this.forEachEmitter(e=>{e.state.update(t),e.updateGeometry()})}rewind(){this.forEachEmitter(t=>t.state.rewind())}stop(t){this.emitters.forEach(e=>e.state.stop(t))}reset(){this.emitters.forEach(t=>t.state.reset())}clone(t=!0){let e=new _m;if(t)for(let r of this.children)e.add(r.clone(t));return e}},z1=zr(Hr()),Iu=class{constructor(i){this.timeline=i,this.low=0,this.high=0,this.diff=0,this.current=0,this.reset()}reset(){this.low=oa(this.timeline.low),this.high=oa(this.timeline.high),this.timeline.relative&&(this.high+=this.low),this.diff=this.high-this.low,this.current=this.low}setTime(i){this.current=x1(this.timeline.timeline,i)*this.diff+this.low}},H1=class{constructor(i,t,e,r){this.r=i,this.g=t,this.b=e,this.a=r}set(i,t,e,r){this.r=i,this.g=t,this.b=e,this.a=r}},k1=class{constructor(i){this.model=i,this.active=!1,this.life=0,this._lifeExpectancy=0,this.lifeExpectancyInv=0,this.position=new X,this.velocity=new X,this.scale=new X(1,1,1),this.rotation=new X,this.rotationalVelocity=new X,this.forwardDirection=new X,this.forwardDirectionVelocity=new X,this.forwardVelocity=0,this.tint=new H1(1,1,1,1),this.origin=new X(.5,.5,.5),this.rotationFinal=new X,this.imageIndex=0,this.propertyStates=i.propertyTimelines.map(t=>V1(this,t))}get lifeExpectancy(){return this._lifeExpectancy}set lifeExpectancy(i){this._lifeExpectancy=i,this.lifeExpectancyInv=1/i}update(i,t){this.life+=i;let e=this.life*this.lifeExpectancyInv,r=(0,z1.clamp)(e,0,1);for(let a of this.propertyStates)a.apply(r,t);if(this.position.add(this.velocity),this.rotation.add(this.rotationalVelocity),this.forwardDirection.add(this.forwardDirectionVelocity),this.forwardVelocity!==0&&!(this.forwardDirection.y!==0||this.forwardDirection.x!==0)&&this.forwardDirection.z!==0){let a=this.forwardDirection.z;this.position.x+=Math.cos(a)*this.forwardVelocity,this.position.y+=Math.sin(a)*this.forwardVelocity}this.model.orientToForwardDirection?(this.rotationFinal.copy(this.rotation).add(this.forwardDirection),this.rotationFinal.z+=v1):this.rotationFinal.copy(this.rotation)}reset(){this.active=!1,this.life=0,this._lifeExpectancy=0,this.lifeExpectancyInv=0,D1(this.model.spawn,this.position),this.velocity.set(0,0,0),this.scale.set(1,1,1),this.rotation.set(0,0,0),this.rotationalVelocity.set(0,0,0),this.forwardDirection.set(0,0,0),this.forwardDirectionVelocity.set(0,0,0),this.forwardVelocity=0,this.tint.set(1,1,1,1),this.origin.set(.5,.5,.5),this.imageIndex=0;for(let i of this.propertyStates)i.reset()}};function V1(i,t){return t.property==="color"?new W1(i.tint,t):new G1(i,t)}var bp=new Set,G1=class{constructor(i,t){this.particleProps=i,this.timeline=t,this.value=new Iu(t);let e=t.property;!(e in Ap)&&!bp.has(e)&&(bp.add(e),console.warn(`Could not find property updater with the name ${e}`)),this.updater=Ap[e]??(()=>{})}apply(i,t){if(this.timeline.timeline.length===0)return;let e=this.timeline.useEmitterDuration?t:i;this.value.setTime(e),this.updater(this.particleProps,this.value.current)}reset(){this.value.reset()}},W1=class{constructor(i,t){if(this.color=i,this.timeline=t,this.previous=new Float32Array(3),this.value=new Float32Array(3),t.timeline.length%4!==0)throw new Error("invalid color timeline, expected stride to be 4")}apply(i,t){this.previous.set(this.value);let e=this.timeline.useEmitterDuration?t:i;yp(this.timeline.timeline,3,e,this.value);let r=this.color;r.r=this.value[0],r.g=this.value[1],r.b=this.value[2]}reset(){yp(this.timeline.timeline,3,0,this.value),this.previous.set(this.value)}},Ap={x:(i,t)=>i.position.x=t,y:(i,t)=>i.position.y=t,z:(i,t)=>i.position.z=t,velocityX:(i,t)=>i.velocity.x=t,velocityY:(i,t)=>i.velocity.y=t,velocityZ:(i,t)=>i.velocity.z=t,originX:(i,t)=>i.origin.x=t,originY:(i,t)=>i.origin.y=t,originZ:(i,t)=>i.origin.z=t,scale:(i,t)=>{i.scale.x=t,i.scale.y=t,i.scale.z=t},scaleX:(i,t)=>i.scale.x=t,scaleY:(i,t)=>i.scale.y=t,scaleZ:(i,t)=>i.scale.z=t,rotationX:(i,t)=>i.rotation.x=t,rotationY:(i,t)=>i.rotation.y=t,rotationZ:(i,t)=>i.rotation.z=t,rotationalVelocityX:(i,t)=>i.rotationalVelocity.x=t,rotationalVelocityY:(i,t)=>i.rotationalVelocity.y=t,rotationalVelocityZ:(i,t)=>i.rotationalVelocity.z=t,forwardDirectionX:(i,t)=>i.forwardDirection.x=t,forwardDirectionY:(i,t)=>i.forwardDirection.y=t,forwardDirectionZ:(i,t)=>i.forwardDirection.z=t,forwardDirectionVelocityZ:(i,t)=>i.forwardDirectionVelocity.z=t,forwardVelocity:(i,t)=>i.forwardVelocity=t,colorR:(i,t)=>i.tint.r=t,colorG:(i,t)=>i.tint.g=t,colorB:(i,t)=>i.tint.b=t,colorA:(i,t)=>i.tint.a=t},X1=zr(Hr()),q1=class{constructor(i){this.model=i,this._activeCount=0,this.delayBefore=0,this.delayAfter=0,this.time=0,this.duration=0,this.durationInv=0,this.endTime=0,this._isComplete=!1,this.loops=!1,this.accumulator=0,this.particles=l1(i.count,()=>new k1(i)),this.emissionRateValue=new Iu(i.emissionRate),this.particleLifeExpectancyValue=new Iu(i.particleLifeExpectancy),this.rewind()}get activeCount(){return this._activeCount}get totalTime(){return this.delayBefore+this.duration+this.delayAfter}get progress(){return this.totalTime<=0?1:(this.time+this.delayBefore)/this.totalTime}get isComplete(){return this._isComplete}update(i){if(this._isComplete||!this.model.enabled)return;if(this.time+=i,this.time>=this.endTime){if(this.loops){let r=this.time-this.endTime;this.rewind(),this.time+=r}else if(this._activeCount===0){this._isComplete=!0,this.accumulator=0;return}}let t=this.time*this.durationInv;if(this.emissionRateValue.setTime(t),this.particleLifeExpectancyValue.setTime(t),this.time<this.duration&&this.time>0){let r=this.emissionRateValue.current;this.accumulator+=r*i;let a=1/r;if(this.accumulator>1){let o=0;for(let c of this.particles)if(c.active||(c.reset(),c.life+=o,o-=a,c.active=!0,c.lifeExpectancy=this.particleLifeExpectancyValue.current,this._activeCount++,this.accumulator--),this._activeCount>=this.model.count&&(this.accumulator=0),this.accumulator<1)break}}let e=(0,X1.clamp)(t,0,1);for(let r of this.particles)r.active&&(r.update(i,e),r.life>r.lifeExpectancy&&(r.active=!1,this._activeCount--))}clearParticles(){for(let i of this.particles)i.active=!1;this._activeCount=0,this.accumulator=0}reset(){this.clearParticles(),this.rewind()}stop(i=!0){this.loops=!1,this.time=this.endTime,i||(this.clearParticles(),this._isComplete=!0)}rewind(){let i=this.model;this._isComplete=!1,this.loops=i.loops,this.delayBefore=oa(i.duration.delayBefore),this.delayAfter=oa(i.duration.delayAfter),this.time=-this.delayBefore,this.duration=oa(i.duration.duration),this.durationInv=1/this.duration,this.endTime=this.duration+this.delayAfter,this.emissionRateValue.reset(),this.particleLifeExpectancyValue.reset()}},Y1=class extends tE{constructor(i){super(),this.isParticleEmitterObject=!0,this.state=new q1(i);let t=i.count;this.geometry.setAttribute("position",new Vn(new Float32Array(t*3),3)),this.geometry.setAttribute("color",new Vn(new Float32Array(t*4),4)),i.material&&(this.material=i.material)}updateGeometry(){if(!this.state.model.enabled)return;let i=this.geometry.attributes.position.array,t=this.geometry.attributes.color.array,e=0;for(let r of this.state.particles){if(!r.active)continue;let a=r.position,o=e*3;i[o]=a.x,i[o+1]=a.y,i[o+2]=a.z;let c=r.tint,u=e*4;t[u]=c.r,t[u+1]=c.g,t[u+2]=c.b,t[u+3]=c.a,e++}this.geometry.setDrawRange(0,this.state.activeCount),this.geometry.attributes.position.needsUpdate=!0,this.geometry.attributes.color.needsUpdate=!0}};function Z1(i,t,e=t*2,r=t*2){i.save();let a=i.createRadialGradient(t,t,0,t,t,t);a.addColorStop(0,"rgba(255,255,255,1.0)"),a.addColorStop(1,"rgba(255,255,255,0)"),i.fillStyle=a,i.fillRect(0,0,e,r),i.restore()}function K1(i=64){if(typeof document>"u")return new un;let t=document.createElement("canvas"),e=t.getContext("2d");if(!e)return new un;t.width=i,t.height=i;let r=i/2;Z1(e,r);let a=new un(t);return a.type=vi,a.needsUpdate=!0,a}var Gc=null;function $1(){return Gc===null&&(Gc=K1()),Gc}var J1=class extends Qo{constructor(i){super(i),this.materials={},this.materialLoader=new Yu(this.manager),this.materialLoader.setTextures({radial:$1()})}setMaterials(i){this.materials=i}setPath(i){return super.setPath(i),this.materialLoader.setPath(i),this}load(i,t,e,r){let a=new rm(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(i,o=>{this.parseAsync(JSON.parse(y1(o))).then(t).catch(c=>r?.(c))},e,r)}async parseAsync(i){if(i.materials){let e=this.materialLoader;for(let[r,a]of Object.entries(i.materials))this.materials[r]=typeof a=="string"?await e.loadAsync(a):e.parse(a)}F1(i,this.materials);let t=new B1;for(let e of i.emitters)t.add(new Y1(e));return t}};/*! Bundled license information:

lodash/lodash.js:
  (**
   * @license
   * Lodash <https://lodash.com/>
   * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
   * Released under MIT license <https://lodash.com/license>
   * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
   * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
   *)
*/const wp={type:"change"},Ju={type:"start"},gm={type:"end"},Io=new Ko,Rp=new or,Q1=Math.cos(70*Vp.DEG2RAD),je=new X,Dn=2*Math.PI,De={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Wc=1e-6;class j1 extends gE{constructor(t,e=null){super(t,e),this.state=De.NONE,this.enabled=!0,this.target=new X,this.cursor=new X,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:xs.ROTATE,MIDDLE:xs.DOLLY,RIGHT:xs.PAN},this.touches={ONE:gs.ROTATE,TWO:gs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new X,this._lastQuaternion=new Fr,this._lastTargetPosition=new X,this._quat=new Fr().setFromUnitVectors(t.up,new X(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Yd,this._sphericalDelta=new Yd,this._scale=1,this._panOffset=new X,this._rotateStart=new $t,this._rotateEnd=new $t,this._rotateDelta=new $t,this._panStart=new $t,this._panEnd=new $t,this._panDelta=new $t,this._dollyStart=new $t,this._dollyEnd=new $t,this._dollyDelta=new $t,this._dollyDirection=new X,this._mouse=new $t,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=eR.bind(this),this._onPointerDown=tR.bind(this),this._onPointerUp=nR.bind(this),this._onContextMenu=cR.bind(this),this._onMouseWheel=sR.bind(this),this._onKeyDown=aR.bind(this),this._onTouchStart=oR.bind(this),this._onTouchMove=lR.bind(this),this._onMouseDown=iR.bind(this),this._onMouseMove=rR.bind(this),this._interceptControlDown=uR.bind(this),this._interceptControlUp=hR.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(wp),this.update(),this.state=De.NONE}update(t=null){const e=this.object.position;je.copy(e).sub(this.target),je.applyQuaternion(this._quat),this._spherical.setFromVector3(je),this.autoRotate&&this.state===De.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let r=this.minAzimuthAngle,a=this.maxAzimuthAngle;isFinite(r)&&isFinite(a)&&(r<-Math.PI?r+=Dn:r>Math.PI&&(r-=Dn),a<-Math.PI?a+=Dn:a>Math.PI&&(a-=Dn),r<=a?this._spherical.theta=Math.max(r,Math.min(a,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(r+a)/2?Math.max(r,this._spherical.theta):Math.min(a,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let o=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const c=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),o=c!=this._spherical.radius}if(je.setFromSpherical(this._spherical),je.applyQuaternion(this._quatInverse),e.copy(this.target).add(je),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let c=null;if(this.object.isPerspectiveCamera){const u=je.length();c=this._clampDistance(u*this._scale);const f=u-c;this.object.position.addScaledVector(this._dollyDirection,f),this.object.updateMatrixWorld(),o=!!f}else if(this.object.isOrthographicCamera){const u=new X(this._mouse.x,this._mouse.y,0);u.unproject(this.object);const f=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),o=f!==this.object.zoom;const d=new X(this._mouse.x,this._mouse.y,0);d.unproject(this.object),this.object.position.sub(d).add(u),this.object.updateMatrixWorld(),c=je.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;c!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(c).add(this.object.position):(Io.origin.copy(this.object.position),Io.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Io.direction))<Q1?this.object.lookAt(this.target):(Rp.setFromNormalAndCoplanarPoint(this.object.up,this.target),Io.intersectPlane(Rp,this.target))))}else if(this.object.isOrthographicCamera){const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),c!==this.object.zoom&&(this.object.updateProjectionMatrix(),o=!0)}return this._scale=1,this._performCursorZoom=!1,o||this._lastPosition.distanceToSquared(this.object.position)>Wc||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Wc||this._lastTargetPosition.distanceToSquared(this.target)>Wc?(this.dispatchEvent(wp),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Dn/60*this.autoRotateSpeed*t:Dn/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){je.setFromMatrixColumn(e,0),je.multiplyScalar(-t),this._panOffset.add(je)}_panUp(t,e){this.screenSpacePanning===!0?je.setFromMatrixColumn(e,1):(je.setFromMatrixColumn(e,0),je.crossVectors(this.object.up,je)),je.multiplyScalar(t),this._panOffset.add(je)}_pan(t,e){const r=this.domElement;if(this.object.isPerspectiveCamera){const a=this.object.position;je.copy(a).sub(this.target);let o=je.length();o*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*o/r.clientHeight,this.object.matrix),this._panUp(2*e*o/r.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/r.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/r.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const r=this.domElement.getBoundingClientRect(),a=t-r.left,o=e-r.top,c=r.width,u=r.height;this._mouse.x=a/c*2-1,this._mouse.y=-(o/u)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Dn*this._rotateDelta.x/e.clientHeight),this._rotateUp(Dn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Dn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Dn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Dn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Dn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),r=.5*(t.pageX+e.x),a=.5*(t.pageY+e.y);this._rotateStart.set(r,a)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),r=.5*(t.pageX+e.x),a=.5*(t.pageY+e.y);this._panStart.set(r,a)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),r=t.pageX-e.x,a=t.pageY-e.y,o=Math.sqrt(r*r+a*a);this._dollyStart.set(0,o)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const r=this._getSecondPointerPosition(t),a=.5*(t.pageX+r.x),o=.5*(t.pageY+r.y);this._rotateEnd.set(a,o)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Dn*this._rotateDelta.x/e.clientHeight),this._rotateUp(Dn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),r=.5*(t.pageX+e.x),a=.5*(t.pageY+e.y);this._panEnd.set(r,a)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),r=t.pageX-e.x,a=t.pageY-e.y,o=Math.sqrt(r*r+a*a);this._dollyEnd.set(0,o),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const c=(t.pageX+e.x)*.5,u=(t.pageY+e.y)*.5;this._updateZoomParameters(c,u)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new $t,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,r={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:r.deltaY*=16;break;case 2:r.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(r.deltaY*=10),r}}function tR(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function eR(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function nR(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(gm),this.state=De.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function iR(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case xs.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=De.DOLLY;break;case xs.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=De.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=De.ROTATE}break;case xs.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=De.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=De.PAN}break;default:this.state=De.NONE}this.state!==De.NONE&&this.dispatchEvent(Ju)}function rR(i){switch(this.state){case De.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case De.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case De.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function sR(i){this.enabled===!1||this.enableZoom===!1||this.state!==De.NONE||(i.preventDefault(),this.dispatchEvent(Ju),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(gm))}function aR(i){this.enabled!==!1&&this._handleKeyDown(i)}function oR(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case gs.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=De.TOUCH_ROTATE;break;case gs.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=De.TOUCH_PAN;break;default:this.state=De.NONE}break;case 2:switch(this.touches.TWO){case gs.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=De.TOUCH_DOLLY_PAN;break;case gs.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=De.TOUCH_DOLLY_ROTATE;break;default:this.state=De.NONE}break;default:this.state=De.NONE}this.state!==De.NONE&&this.dispatchEvent(Ju)}function lR(i){switch(this._trackPointer(i),this.state){case De.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case De.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case De.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case De.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=De.NONE}}function cR(i){this.enabled!==!1&&i.preventDefault()}function uR(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function hR(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}console.log("Hello!");const Ds=new jn(45,window.innerWidth/window.innerHeight,.1,1e3);Ds.position.set(0,10,20);Ds.lookAt(new X(0,2,0));const pa=new ZS;pa.background=new Wt(1118481);pa.fog=new qu(1118481,20,100);const vm=new mE,Qu=new _E(200,40,0,16777215);Qu.material.opacity=.2;Qu.material.transparent=!0;pa.add(Qu);const Uu=document.querySelector("#mainCanvas"),Ls=new t1({canvas:Uu,antialias:!0});Ls.setClearColor(1644825);const fR=new j1(Ds,Ls.domElement);window.addEventListener("resize",xm);xm();function xm(){const i=Uu.clientWidth,t=Uu.clientHeight;Ls.setPixelRatio(window.devicePixelRatio),Ls.setSize(i,t,!1),Ds.aspect=i/t,Ds.updateProjectionMatrix()}let Nu=null;const dR=new J1;dR.loadAsync("./fire.json").then(i=>{Nu=i,pa.add(Nu)}).catch(console.error);function pR(){const i=vm.getDelta();fR.update(),Nu?.update(i),Ls.render(pa,Ds)}vm.start();Ls.setAnimationLoop(pR);
//# sourceMappingURL=index-vD19NwwC.js.map
