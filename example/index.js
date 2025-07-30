"use strict";(()=>{var cl="174",Tr={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Ar={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Om=0,Kh=1,Bm=2;var jh=1,zm=2,Ci=3,Ji=0,Cn=1,Ri=2,Ki=0,$r=1,Qh=2,tf=3,ef=4,km=5,yr=100,Vm=101,Hm=102,Gm=103,Wm=104,Xm=200,qm=201,Ym=202,Zm=203,Pc=204,Ic=205,$m=206,Jm=207,Km=208,jm=209,Qm=210,tg=211,eg=212,ng=213,ig=214,ll=0,ul=1,hl=2,Jr=3,fl=4,dl=5,pl=6,ml=7,no=0,rg=1,sg=2,ji=0,ag=1,og=2,cg=3,lg=4,ug=5,hg=6,fg=7;var nf=300,ns=301,is=302,gl=303,_l=304,io=306,Dc=1e3,vr=1001,Lc=1002,ai=1003,dg=1004;var ro=1005;var xi=1006,vl=1007;var Cr=1008;var Pi=1009,rf=1010,sf=1011,Js=1012,yl=1013,Rr=1014,li=1015,Ks=1016,xl=1017,Ml=1018,rs=1020,af=35902,of=1021,cf=1022,ui=1023,lf=1024,uf=1025,Zr=1026,Kr=1027,hf=1028,Sl=1029,ff=1030,bl=1031;var El=1033,so=33776,ao=33777,oo=33778,co=33779,wl=35840,Tl=35841,Al=35842,Cl=35843,Rl=36196,Pl=37492,Il=37496,Dl=37808,Ll=37809,Ul=37810,Nl=37811,Fl=37812,Ol=37813,Bl=37814,zl=37815,kl=37816,Vl=37817,Hl=37818,Gl=37819,Wl=37820,Xl=37821,lo=36492,ql=36494,Yl=36495,df=36283,Zl=36284,$l=36285,Jl=36286;var Ra=2300,Uc=2301,Rc=2302,kh=2400,Vh=2401,Hh=2402;var pg=3200,mg=3201;var Pr=0,gg=1,Qi="",qn="srgb",jr="srgb-linear",Pa="linear",Ce="srgb";var Yr=7680;var Gh=519,_g=512,vg=513,yg=514,pf=515,xg=516,Mg=517,Sg=518,bg=519,Wh=35044;var mf="300 es",wi=2e3,Ia=2001;var Ti=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let r=this._listeners;r[t]===void 0&&(r[t]=[]),r[t].indexOf(e)===-1&&r[t].push(e)}hasEventListener(t,e){let r=this._listeners;return r===void 0?!1:r[t]!==void 0&&r[t].indexOf(e)!==-1}removeEventListener(t,e){let r=this._listeners;if(r===void 0)return;let a=r[t];if(a!==void 0){let o=a.indexOf(e);o!==-1&&a.splice(o,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let r=e[t.type];if(r!==void 0){t.target=this;let a=r.slice(0);for(let o=0,l=a.length;o<l;o++)a[o].call(this,t);t.target=null}}},yn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],um=1234567,Aa=Math.PI/180,Vs=180/Math.PI;function js(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(yn[i&255]+yn[i>>8&255]+yn[i>>16&255]+yn[i>>24&255]+"-"+yn[t&255]+yn[t>>8&255]+"-"+yn[t>>16&15|64]+yn[t>>24&255]+"-"+yn[e&63|128]+yn[e>>8&255]+"-"+yn[e>>16&255]+yn[e>>24&255]+yn[r&255]+yn[r>>8&255]+yn[r>>16&255]+yn[r>>24&255]).toLowerCase()}function le(i,t,e){return Math.max(t,Math.min(e,i))}function gf(i,t){return(i%t+t)%t}function Tb(i,t,e,r,a){return r+(i-t)*(a-r)/(e-t)}function Ab(i,t,e){return i!==t?(e-i)/(t-i):0}function Ca(i,t,e){return(1-e)*i+e*t}function Cb(i,t,e,r){return Ca(i,t,1-Math.exp(-e*r))}function Rb(i,t=1){return t-Math.abs(gf(i,t*2)-t)}function Pb(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Ib(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Db(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Lb(i,t){return i+Math.random()*(t-i)}function Ub(i){return i*(.5-Math.random())}function Nb(i){i!==void 0&&(um=i);let t=um+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Fb(i){return i*Aa}function Ob(i){return i*Vs}function Bb(i){return(i&i-1)===0&&i!==0}function zb(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function kb(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Vb(i,t,e,r,a){let o=Math.cos,l=Math.sin,u=o(e/2),h=l(e/2),f=o((t+r)/2),p=l((t+r)/2),g=o((t-r)/2),_=l((t-r)/2),v=o((r-t)/2),M=l((r-t)/2);switch(a){case"XYX":i.set(u*p,h*g,h*_,u*f);break;case"YZY":i.set(h*_,u*p,h*g,u*f);break;case"ZXZ":i.set(h*g,h*_,u*p,u*f);break;case"XZX":i.set(u*p,h*M,h*v,u*f);break;case"YXY":i.set(h*v,u*p,h*M,u*f);break;case"ZYZ":i.set(h*M,h*v,u*p,u*f);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+a)}}function zs(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function An(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var uo={DEG2RAD:Aa,RAD2DEG:Vs,generateUUID:js,clamp:le,euclideanModulo:gf,mapLinear:Tb,inverseLerp:Ab,lerp:Ca,damp:Cb,pingpong:Rb,smoothstep:Pb,smootherstep:Ib,randInt:Db,randFloat:Lb,randFloatSpread:Ub,seededRandom:Nb,degToRad:Fb,radToDeg:Ob,isPowerOfTwo:Bb,ceilPowerOfTwo:zb,floorPowerOfTwo:kb,setQuaternionFromProperEuler:Vb,normalize:An,denormalize:zs},Gt=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,r=this.y,a=t.elements;return this.x=a[0]*e+a[3]*r+a[6],this.y=a[1]*e+a[4]*r+a[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=le(this.x,t.x,e.x),this.y=le(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=le(this.x,t,e),this.y=le(this.y,t,e),this}clampLength(t,e){let r=this.length();return this.divideScalar(r||1).multiplyScalar(le(r,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let r=this.dot(t)/e;return Math.acos(le(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,r=this.y-t.y;return e*e+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,r){return this.x=t.x+(e.x-t.x)*r,this.y=t.y+(e.y-t.y)*r,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let r=Math.cos(e),a=Math.sin(e),o=this.x-t.x,l=this.y-t.y;return this.x=o*r-l*a+t.x,this.y=o*a+l*r+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ie=class i{constructor(t,e,r,a,o,l,u,h,f){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,r,a,o,l,u,h,f)}set(t,e,r,a,o,l,u,h,f){let p=this.elements;return p[0]=t,p[1]=a,p[2]=u,p[3]=e,p[4]=o,p[5]=h,p[6]=r,p[7]=l,p[8]=f,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,r=t.elements;return e[0]=r[0],e[1]=r[1],e[2]=r[2],e[3]=r[3],e[4]=r[4],e[5]=r[5],e[6]=r[6],e[7]=r[7],e[8]=r[8],this}extractBasis(t,e,r){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let r=t.elements,a=e.elements,o=this.elements,l=r[0],u=r[3],h=r[6],f=r[1],p=r[4],g=r[7],_=r[2],v=r[5],M=r[8],T=a[0],y=a[3],m=a[6],U=a[1],D=a[4],R=a[7],H=a[2],F=a[5],O=a[8];return o[0]=l*T+u*U+h*H,o[3]=l*y+u*D+h*F,o[6]=l*m+u*R+h*O,o[1]=f*T+p*U+g*H,o[4]=f*y+p*D+g*F,o[7]=f*m+p*R+g*O,o[2]=_*T+v*U+M*H,o[5]=_*y+v*D+M*F,o[8]=_*m+v*R+M*O,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],r=t[1],a=t[2],o=t[3],l=t[4],u=t[5],h=t[6],f=t[7],p=t[8];return e*l*p-e*u*f-r*o*p+r*u*h+a*o*f-a*l*h}invert(){let t=this.elements,e=t[0],r=t[1],a=t[2],o=t[3],l=t[4],u=t[5],h=t[6],f=t[7],p=t[8],g=p*l-u*f,_=u*h-p*o,v=f*o-l*h,M=e*g+r*_+a*v;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);let T=1/M;return t[0]=g*T,t[1]=(a*f-p*r)*T,t[2]=(u*r-a*l)*T,t[3]=_*T,t[4]=(p*e-a*h)*T,t[5]=(a*o-u*e)*T,t[6]=v*T,t[7]=(r*h-f*e)*T,t[8]=(l*e-r*o)*T,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,r,a,o,l,u){let h=Math.cos(o),f=Math.sin(o);return this.set(r*h,r*f,-r*(h*l+f*u)+l+t,-a*f,a*h,-a*(-f*l+h*u)+u+e,0,0,1),this}scale(t,e){return this.premultiply(vh.makeScale(t,e)),this}rotate(t){return this.premultiply(vh.makeRotation(-t)),this}translate(t,e){return this.premultiply(vh.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),r=Math.sin(t);return this.set(e,-r,0,r,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,r=t.elements;for(let a=0;a<9;a++)if(e[a]!==r[a])return!1;return!0}fromArray(t,e=0){for(let r=0;r<9;r++)this.elements[r]=t[r+e];return this}toArray(t=[],e=0){let r=this.elements;return t[e]=r[0],t[e+1]=r[1],t[e+2]=r[2],t[e+3]=r[3],t[e+4]=r[4],t[e+5]=r[5],t[e+6]=r[6],t[e+7]=r[7],t[e+8]=r[8],t}clone(){return new this.constructor().fromArray(this.elements)}},vh=new ie;function _f(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Da(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Eg(){let i=Da("canvas");return i.style.display="block",i}var hm={};function Ir(i){i in hm||(hm[i]=!0,console.warn(i))}function wg(i,t,e){return new Promise(function(r,a){function o(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:a();break;case i.TIMEOUT_EXPIRED:setTimeout(o,e);break;default:r()}}setTimeout(o,e)})}function Tg(i){let t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Ag(i){let t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var fm=new ie().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),dm=new ie().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Hb(){let i={enabled:!0,workingColorSpace:jr,spaces:{},convert:function(a,o,l){return this.enabled===!1||o===l||!o||!l||(this.spaces[o].transfer===Ce&&(a.r=$i(a.r),a.g=$i(a.g),a.b=$i(a.b)),this.spaces[o].primaries!==this.spaces[l].primaries&&(a.applyMatrix3(this.spaces[o].toXYZ),a.applyMatrix3(this.spaces[l].fromXYZ)),this.spaces[l].transfer===Ce&&(a.r=ks(a.r),a.g=ks(a.g),a.b=ks(a.b))),a},fromWorkingColorSpace:function(a,o){return this.convert(a,this.workingColorSpace,o)},toWorkingColorSpace:function(a,o){return this.convert(a,o,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===Qi?Pa:this.spaces[a].transfer},getLuminanceCoefficients:function(a,o=this.workingColorSpace){return a.fromArray(this.spaces[o].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,o,l){return a.copy(this.spaces[o].toXYZ).multiply(this.spaces[l].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],r=[.3127,.329];return i.define({[jr]:{primaries:t,whitePoint:r,transfer:Pa,toXYZ:fm,fromXYZ:dm,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:qn},outputColorSpaceConfig:{drawingBufferColorSpace:qn}},[qn]:{primaries:t,whitePoint:r,transfer:Ce,toXYZ:fm,fromXYZ:dm,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:qn}}}),i}var Me=Hb();function $i(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ks(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var As,Nc=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{As===void 0&&(As=Da("canvas")),As.width=t.width,As.height=t.height;let r=As.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),e=As}return e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Da("canvas");e.width=t.width,e.height=t.height;let r=e.getContext("2d");r.drawImage(t,0,0,t.width,t.height);let a=r.getImageData(0,0,t.width,t.height),o=a.data;for(let l=0;l<o.length;l++)o[l]=$i(o[l]/255)*255;return r.putImageData(a,0,0),e}else if(t.data){let e=t.data.slice(0);for(let r=0;r<e.length;r++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[r]=Math.floor($i(e[r]/255)*255):e[r]=$i(e[r]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Gb=0,Hs=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Gb++}),this.uuid=js(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let r={uuid:this.uuid,url:""},a=this.data;if(a!==null){let o;if(Array.isArray(a)){o=[];for(let l=0,u=a.length;l<u;l++)a[l].isDataTexture?o.push(yh(a[l].image)):o.push(yh(a[l]))}else o=yh(a);r.url=o}return e||(t.images[this.uuid]=r),r}};function yh(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Nc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Wb=0,pn=class i extends Ti{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,r=vr,a=vr,o=xi,l=Cr,u=ui,h=Pi,f=i.DEFAULT_ANISOTROPY,p=Qi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Wb++}),this.uuid=js(),this.name="",this.source=new Hs(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=r,this.wrapT=a,this.magFilter=o,this.minFilter=l,this.anisotropy=f,this.format=u,this.internalFormat=null,this.type=h,this.offset=new Gt(0,0),this.repeat=new Gt(1,1),this.center=new Gt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ie,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=p,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),e||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==nf)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Dc:t.x=t.x-Math.floor(t.x);break;case vr:t.x=t.x<0?0:1;break;case Lc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Dc:t.y=t.y-Math.floor(t.y);break;case vr:t.y=t.y<0?0:1;break;case Lc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};pn.DEFAULT_IMAGE=null;pn.DEFAULT_MAPPING=nf;pn.DEFAULT_ANISOTROPY=1;var Ge=class i{constructor(t=0,e=0,r=0,a=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=r,this.w=a}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,r,a){return this.x=t,this.y=e,this.z=r,this.w=a,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,r=this.y,a=this.z,o=this.w,l=t.elements;return this.x=l[0]*e+l[4]*r+l[8]*a+l[12]*o,this.y=l[1]*e+l[5]*r+l[9]*a+l[13]*o,this.z=l[2]*e+l[6]*r+l[10]*a+l[14]*o,this.w=l[3]*e+l[7]*r+l[11]*a+l[15]*o,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,r,a,o,h=t.elements,f=h[0],p=h[4],g=h[8],_=h[1],v=h[5],M=h[9],T=h[2],y=h[6],m=h[10];if(Math.abs(p-_)<.01&&Math.abs(g-T)<.01&&Math.abs(M-y)<.01){if(Math.abs(p+_)<.1&&Math.abs(g+T)<.1&&Math.abs(M+y)<.1&&Math.abs(f+v+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let D=(f+1)/2,R=(v+1)/2,H=(m+1)/2,F=(p+_)/4,O=(g+T)/4,q=(M+y)/4;return D>R&&D>H?D<.01?(r=0,a=.707106781,o=.707106781):(r=Math.sqrt(D),a=F/r,o=O/r):R>H?R<.01?(r=.707106781,a=0,o=.707106781):(a=Math.sqrt(R),r=F/a,o=q/a):H<.01?(r=.707106781,a=.707106781,o=0):(o=Math.sqrt(H),r=O/o,a=q/o),this.set(r,a,o,e),this}let U=Math.sqrt((y-M)*(y-M)+(g-T)*(g-T)+(_-p)*(_-p));return Math.abs(U)<.001&&(U=1),this.x=(y-M)/U,this.y=(g-T)/U,this.z=(_-p)/U,this.w=Math.acos((f+v+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=le(this.x,t.x,e.x),this.y=le(this.y,t.y,e.y),this.z=le(this.z,t.z,e.z),this.w=le(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=le(this.x,t,e),this.y=le(this.y,t,e),this.z=le(this.z,t,e),this.w=le(this.w,t,e),this}clampLength(t,e){let r=this.length();return this.divideScalar(r||1).multiplyScalar(le(r,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,r){return this.x=t.x+(e.x-t.x)*r,this.y=t.y+(e.y-t.y)*r,this.z=t.z+(e.z-t.z)*r,this.w=t.w+(e.w-t.w)*r,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Fc=class extends Ti{constructor(t=1,e=1,r={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Ge(0,0,t,e),this.scissorTest=!1,this.viewport=new Ge(0,0,t,e);let a={width:t,height:e,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:xi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);let o=new pn(a,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);o.flipY=!1,o.generateMipmaps=r.generateMipmaps,o.internalFormat=r.internalFormat,this.textures=[];let l=r.count;for(let u=0;u<l;u++)this.textures[u]=o.clone(),this.textures[u].isRenderTargetTexture=!0,this.textures[u].renderTarget=this;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,r=1){if(this.width!==t||this.height!==e||this.depth!==r){this.width=t,this.height=e,this.depth=r;for(let a=0,o=this.textures.length;a<o;a++)this.textures[a].image.width=t,this.textures[a].image.height=e,this.textures[a].image.depth=r;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,r=t.textures.length;e<r;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let a=Object.assign({},t.textures[e].image);this.textures[e].source=new Hs(a)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ai=class extends Fc{constructor(t=1,e=1,r={}){super(t,e,r),this.isWebGLRenderTarget=!0}},La=class extends pn{constructor(t=null,e=1,r=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:r,depth:a},this.magFilter=ai,this.minFilter=ai,this.wrapR=vr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Oc=class extends pn{constructor(t=null,e=1,r=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:r,depth:a},this.magFilter=ai,this.minFilter=ai,this.wrapR=vr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var oi=class{constructor(t=0,e=0,r=0,a=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=r,this._w=a}static slerpFlat(t,e,r,a,o,l,u){let h=r[a+0],f=r[a+1],p=r[a+2],g=r[a+3],_=o[l+0],v=o[l+1],M=o[l+2],T=o[l+3];if(u===0){t[e+0]=h,t[e+1]=f,t[e+2]=p,t[e+3]=g;return}if(u===1){t[e+0]=_,t[e+1]=v,t[e+2]=M,t[e+3]=T;return}if(g!==T||h!==_||f!==v||p!==M){let y=1-u,m=h*_+f*v+p*M+g*T,U=m>=0?1:-1,D=1-m*m;if(D>Number.EPSILON){let H=Math.sqrt(D),F=Math.atan2(H,m*U);y=Math.sin(y*F)/H,u=Math.sin(u*F)/H}let R=u*U;if(h=h*y+_*R,f=f*y+v*R,p=p*y+M*R,g=g*y+T*R,y===1-u){let H=1/Math.sqrt(h*h+f*f+p*p+g*g);h*=H,f*=H,p*=H,g*=H}}t[e]=h,t[e+1]=f,t[e+2]=p,t[e+3]=g}static multiplyQuaternionsFlat(t,e,r,a,o,l){let u=r[a],h=r[a+1],f=r[a+2],p=r[a+3],g=o[l],_=o[l+1],v=o[l+2],M=o[l+3];return t[e]=u*M+p*g+h*v-f*_,t[e+1]=h*M+p*_+f*g-u*v,t[e+2]=f*M+p*v+u*_-h*g,t[e+3]=p*M-u*g-h*_-f*v,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,r,a){return this._x=t,this._y=e,this._z=r,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let r=t._x,a=t._y,o=t._z,l=t._order,u=Math.cos,h=Math.sin,f=u(r/2),p=u(a/2),g=u(o/2),_=h(r/2),v=h(a/2),M=h(o/2);switch(l){case"XYZ":this._x=_*p*g+f*v*M,this._y=f*v*g-_*p*M,this._z=f*p*M+_*v*g,this._w=f*p*g-_*v*M;break;case"YXZ":this._x=_*p*g+f*v*M,this._y=f*v*g-_*p*M,this._z=f*p*M-_*v*g,this._w=f*p*g+_*v*M;break;case"ZXY":this._x=_*p*g-f*v*M,this._y=f*v*g+_*p*M,this._z=f*p*M+_*v*g,this._w=f*p*g-_*v*M;break;case"ZYX":this._x=_*p*g-f*v*M,this._y=f*v*g+_*p*M,this._z=f*p*M-_*v*g,this._w=f*p*g+_*v*M;break;case"YZX":this._x=_*p*g+f*v*M,this._y=f*v*g+_*p*M,this._z=f*p*M-_*v*g,this._w=f*p*g-_*v*M;break;case"XZY":this._x=_*p*g-f*v*M,this._y=f*v*g-_*p*M,this._z=f*p*M+_*v*g,this._w=f*p*g+_*v*M;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+l)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let r=e/2,a=Math.sin(r);return this._x=t.x*a,this._y=t.y*a,this._z=t.z*a,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,r=e[0],a=e[4],o=e[8],l=e[1],u=e[5],h=e[9],f=e[2],p=e[6],g=e[10],_=r+u+g;if(_>0){let v=.5/Math.sqrt(_+1);this._w=.25/v,this._x=(p-h)*v,this._y=(o-f)*v,this._z=(l-a)*v}else if(r>u&&r>g){let v=2*Math.sqrt(1+r-u-g);this._w=(p-h)/v,this._x=.25*v,this._y=(a+l)/v,this._z=(o+f)/v}else if(u>g){let v=2*Math.sqrt(1+u-r-g);this._w=(o-f)/v,this._x=(a+l)/v,this._y=.25*v,this._z=(h+p)/v}else{let v=2*Math.sqrt(1+g-r-u);this._w=(l-a)/v,this._x=(o+f)/v,this._y=(h+p)/v,this._z=.25*v}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let r=t.dot(e)+1;return r<Number.EPSILON?(r=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=r):(this._x=0,this._y=-t.z,this._z=t.y,this._w=r)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=r),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(le(this.dot(t),-1,1)))}rotateTowards(t,e){let r=this.angleTo(t);if(r===0)return this;let a=Math.min(1,e/r);return this.slerp(t,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let r=t._x,a=t._y,o=t._z,l=t._w,u=e._x,h=e._y,f=e._z,p=e._w;return this._x=r*p+l*u+a*f-o*h,this._y=a*p+l*h+o*u-r*f,this._z=o*p+l*f+r*h-a*u,this._w=l*p-r*u-a*h-o*f,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let r=this._x,a=this._y,o=this._z,l=this._w,u=l*t._w+r*t._x+a*t._y+o*t._z;if(u<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,u=-u):this.copy(t),u>=1)return this._w=l,this._x=r,this._y=a,this._z=o,this;let h=1-u*u;if(h<=Number.EPSILON){let v=1-e;return this._w=v*l+e*this._w,this._x=v*r+e*this._x,this._y=v*a+e*this._y,this._z=v*o+e*this._z,this.normalize(),this}let f=Math.sqrt(h),p=Math.atan2(f,u),g=Math.sin((1-e)*p)/f,_=Math.sin(e*p)/f;return this._w=l*g+this._w*_,this._x=r*g+this._x*_,this._y=a*g+this._y*_,this._z=o*g+this._z*_,this._onChangeCallback(),this}slerpQuaternions(t,e,r){return this.copy(t).slerp(e,r)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),r=Math.random(),a=Math.sqrt(1-r),o=Math.sqrt(r);return this.set(a*Math.sin(t),a*Math.cos(t),o*Math.sin(e),o*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},W=class i{constructor(t=0,e=0,r=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=r}set(t,e,r){return r===void 0&&(r=this.z),this.x=t,this.y=e,this.z=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(pm.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(pm.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,r=this.y,a=this.z,o=t.elements;return this.x=o[0]*e+o[3]*r+o[6]*a,this.y=o[1]*e+o[4]*r+o[7]*a,this.z=o[2]*e+o[5]*r+o[8]*a,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,r=this.y,a=this.z,o=t.elements,l=1/(o[3]*e+o[7]*r+o[11]*a+o[15]);return this.x=(o[0]*e+o[4]*r+o[8]*a+o[12])*l,this.y=(o[1]*e+o[5]*r+o[9]*a+o[13])*l,this.z=(o[2]*e+o[6]*r+o[10]*a+o[14])*l,this}applyQuaternion(t){let e=this.x,r=this.y,a=this.z,o=t.x,l=t.y,u=t.z,h=t.w,f=2*(l*a-u*r),p=2*(u*e-o*a),g=2*(o*r-l*e);return this.x=e+h*f+l*g-u*p,this.y=r+h*p+u*f-o*g,this.z=a+h*g+o*p-l*f,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,r=this.y,a=this.z,o=t.elements;return this.x=o[0]*e+o[4]*r+o[8]*a,this.y=o[1]*e+o[5]*r+o[9]*a,this.z=o[2]*e+o[6]*r+o[10]*a,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=le(this.x,t.x,e.x),this.y=le(this.y,t.y,e.y),this.z=le(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=le(this.x,t,e),this.y=le(this.y,t,e),this.z=le(this.z,t,e),this}clampLength(t,e){let r=this.length();return this.divideScalar(r||1).multiplyScalar(le(r,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,r){return this.x=t.x+(e.x-t.x)*r,this.y=t.y+(e.y-t.y)*r,this.z=t.z+(e.z-t.z)*r,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let r=t.x,a=t.y,o=t.z,l=e.x,u=e.y,h=e.z;return this.x=a*h-o*u,this.y=o*l-r*h,this.z=r*u-a*l,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let r=t.dot(this)/e;return this.copy(t).multiplyScalar(r)}projectOnPlane(t){return xh.copy(this).projectOnVector(t),this.sub(xh)}reflect(t){return this.sub(xh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let r=this.dot(t)/e;return Math.acos(le(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,r=this.y-t.y,a=this.z-t.z;return e*e+r*r+a*a}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,r){let a=Math.sin(e)*t;return this.x=a*Math.sin(r),this.y=Math.cos(e)*t,this.z=a*Math.cos(r),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,r){return this.x=t*Math.sin(e),this.y=r,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),r=this.setFromMatrixColumn(t,1).length(),a=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=r,this.z=a,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,r=Math.sqrt(1-e*e);return this.x=r*Math.cos(t),this.y=e,this.z=r*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},xh=new W,pm=new oi,xr=class{constructor(t=new W(1/0,1/0,1/0),e=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,r=t.length;e<r;e+=3)this.expandByPoint(_i.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,r=t.count;e<r;e++)this.expandByPoint(_i.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,r=t.length;e<r;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let r=_i.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(r),this.max.copy(t).add(r),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let r=t.geometry;if(r!==void 0){let o=r.getAttribute("position");if(e===!0&&o!==void 0&&t.isInstancedMesh!==!0)for(let l=0,u=o.count;l<u;l++)t.isMesh===!0?t.getVertexPosition(l,_i):_i.fromBufferAttribute(o,l),_i.applyMatrix4(t.matrixWorld),this.expandByPoint(_i);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),oc.copy(t.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),oc.copy(r.boundingBox)),oc.applyMatrix4(t.matrixWorld),this.union(oc)}let a=t.children;for(let o=0,l=a.length;o<l;o++)this.expandByObject(a[o],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,_i),_i.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,r;return t.normal.x>0?(e=t.normal.x*this.min.x,r=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,r=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,r+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,r+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,r+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,r+=t.normal.z*this.min.z),e<=-t.constant&&r>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Sa),cc.subVectors(this.max,Sa),Cs.subVectors(t.a,Sa),Rs.subVectors(t.b,Sa),Ps.subVectors(t.c,Sa),hr.subVectors(Rs,Cs),fr.subVectors(Ps,Rs),Gr.subVectors(Cs,Ps);let e=[0,-hr.z,hr.y,0,-fr.z,fr.y,0,-Gr.z,Gr.y,hr.z,0,-hr.x,fr.z,0,-fr.x,Gr.z,0,-Gr.x,-hr.y,hr.x,0,-fr.y,fr.x,0,-Gr.y,Gr.x,0];return!Mh(e,Cs,Rs,Ps,cc)||(e=[1,0,0,0,1,0,0,0,1],!Mh(e,Cs,Rs,Ps,cc))?!1:(lc.crossVectors(hr,fr),e=[lc.x,lc.y,lc.z],Mh(e,Cs,Rs,Ps,cc))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,_i).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(_i).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Hi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Hi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Hi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Hi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Hi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Hi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Hi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Hi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Hi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Hi=[new W,new W,new W,new W,new W,new W,new W,new W],_i=new W,oc=new xr,Cs=new W,Rs=new W,Ps=new W,hr=new W,fr=new W,Gr=new W,Sa=new W,cc=new W,lc=new W,Wr=new W;function Mh(i,t,e,r,a){for(let o=0,l=i.length-3;o<=l;o+=3){Wr.fromArray(i,o);let u=a.x*Math.abs(Wr.x)+a.y*Math.abs(Wr.y)+a.z*Math.abs(Wr.z),h=t.dot(Wr),f=e.dot(Wr),p=r.dot(Wr);if(Math.max(-Math.max(h,f,p),Math.min(h,f,p))>u)return!1}return!0}var Xb=new xr,ba=new W,Sh=new W,Mr=class{constructor(t=new W,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let r=this.center;e!==void 0?r.copy(e):Xb.setFromPoints(t).getCenter(r);let a=0;for(let o=0,l=t.length;o<l;o++)a=Math.max(a,r.distanceToSquared(t[o]));return this.radius=Math.sqrt(a),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let r=this.center.distanceToSquared(t);return e.copy(t),r>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ba.subVectors(t,this.center);let e=ba.lengthSq();if(e>this.radius*this.radius){let r=Math.sqrt(e),a=(r-this.radius)*.5;this.center.addScaledVector(ba,a/r),this.radius+=a}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Sh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ba.copy(t.center).add(Sh)),this.expandByPoint(ba.copy(t.center).sub(Sh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Gi=new W,bh=new W,uc=new W,dr=new W,Eh=new W,hc=new W,wh=new W,Sr=class{constructor(t=new W,e=new W(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Gi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let r=e.dot(this.direction);return r<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Gi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Gi.copy(this.origin).addScaledVector(this.direction,e),Gi.distanceToSquared(t))}distanceSqToSegment(t,e,r,a){bh.copy(t).add(e).multiplyScalar(.5),uc.copy(e).sub(t).normalize(),dr.copy(this.origin).sub(bh);let o=t.distanceTo(e)*.5,l=-this.direction.dot(uc),u=dr.dot(this.direction),h=-dr.dot(uc),f=dr.lengthSq(),p=Math.abs(1-l*l),g,_,v,M;if(p>0)if(g=l*h-u,_=l*u-h,M=o*p,g>=0)if(_>=-M)if(_<=M){let T=1/p;g*=T,_*=T,v=g*(g+l*_+2*u)+_*(l*g+_+2*h)+f}else _=o,g=Math.max(0,-(l*_+u)),v=-g*g+_*(_+2*h)+f;else _=-o,g=Math.max(0,-(l*_+u)),v=-g*g+_*(_+2*h)+f;else _<=-M?(g=Math.max(0,-(-l*o+u)),_=g>0?-o:Math.min(Math.max(-o,-h),o),v=-g*g+_*(_+2*h)+f):_<=M?(g=0,_=Math.min(Math.max(-o,-h),o),v=_*(_+2*h)+f):(g=Math.max(0,-(l*o+u)),_=g>0?o:Math.min(Math.max(-o,-h),o),v=-g*g+_*(_+2*h)+f);else _=l>0?-o:o,g=Math.max(0,-(l*_+u)),v=-g*g+_*(_+2*h)+f;return r&&r.copy(this.origin).addScaledVector(this.direction,g),a&&a.copy(bh).addScaledVector(uc,_),v}intersectSphere(t,e){Gi.subVectors(t.center,this.origin);let r=Gi.dot(this.direction),a=Gi.dot(Gi)-r*r,o=t.radius*t.radius;if(a>o)return null;let l=Math.sqrt(o-a),u=r-l,h=r+l;return h<0?null:u<0?this.at(h,e):this.at(u,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let r=-(this.origin.dot(t.normal)+t.constant)/e;return r>=0?r:null}intersectPlane(t,e){let r=this.distanceToPlane(t);return r===null?null:this.at(r,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let r,a,o,l,u,h,f=1/this.direction.x,p=1/this.direction.y,g=1/this.direction.z,_=this.origin;return f>=0?(r=(t.min.x-_.x)*f,a=(t.max.x-_.x)*f):(r=(t.max.x-_.x)*f,a=(t.min.x-_.x)*f),p>=0?(o=(t.min.y-_.y)*p,l=(t.max.y-_.y)*p):(o=(t.max.y-_.y)*p,l=(t.min.y-_.y)*p),r>l||o>a||((o>r||isNaN(r))&&(r=o),(l<a||isNaN(a))&&(a=l),g>=0?(u=(t.min.z-_.z)*g,h=(t.max.z-_.z)*g):(u=(t.max.z-_.z)*g,h=(t.min.z-_.z)*g),r>h||u>a)||((u>r||r!==r)&&(r=u),(h<a||a!==a)&&(a=h),a<0)?null:this.at(r>=0?r:a,e)}intersectsBox(t){return this.intersectBox(t,Gi)!==null}intersectTriangle(t,e,r,a,o){Eh.subVectors(e,t),hc.subVectors(r,t),wh.crossVectors(Eh,hc);let l=this.direction.dot(wh),u;if(l>0){if(a)return null;u=1}else if(l<0)u=-1,l=-l;else return null;dr.subVectors(this.origin,t);let h=u*this.direction.dot(hc.crossVectors(dr,hc));if(h<0)return null;let f=u*this.direction.dot(Eh.cross(dr));if(f<0||h+f>l)return null;let p=-u*dr.dot(wh);return p<0?null:this.at(p/l,o)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ke=class i{constructor(t,e,r,a,o,l,u,h,f,p,g,_,v,M,T,y){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,r,a,o,l,u,h,f,p,g,_,v,M,T,y)}set(t,e,r,a,o,l,u,h,f,p,g,_,v,M,T,y){let m=this.elements;return m[0]=t,m[4]=e,m[8]=r,m[12]=a,m[1]=o,m[5]=l,m[9]=u,m[13]=h,m[2]=f,m[6]=p,m[10]=g,m[14]=_,m[3]=v,m[7]=M,m[11]=T,m[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,r=t.elements;return e[0]=r[0],e[1]=r[1],e[2]=r[2],e[3]=r[3],e[4]=r[4],e[5]=r[5],e[6]=r[6],e[7]=r[7],e[8]=r[8],e[9]=r[9],e[10]=r[10],e[11]=r[11],e[12]=r[12],e[13]=r[13],e[14]=r[14],e[15]=r[15],this}copyPosition(t){let e=this.elements,r=t.elements;return e[12]=r[12],e[13]=r[13],e[14]=r[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,r){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(t,e,r){return this.set(t.x,e.x,r.x,0,t.y,e.y,r.y,0,t.z,e.z,r.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,r=t.elements,a=1/Is.setFromMatrixColumn(t,0).length(),o=1/Is.setFromMatrixColumn(t,1).length(),l=1/Is.setFromMatrixColumn(t,2).length();return e[0]=r[0]*a,e[1]=r[1]*a,e[2]=r[2]*a,e[3]=0,e[4]=r[4]*o,e[5]=r[5]*o,e[6]=r[6]*o,e[7]=0,e[8]=r[8]*l,e[9]=r[9]*l,e[10]=r[10]*l,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,r=t.x,a=t.y,o=t.z,l=Math.cos(r),u=Math.sin(r),h=Math.cos(a),f=Math.sin(a),p=Math.cos(o),g=Math.sin(o);if(t.order==="XYZ"){let _=l*p,v=l*g,M=u*p,T=u*g;e[0]=h*p,e[4]=-h*g,e[8]=f,e[1]=v+M*f,e[5]=_-T*f,e[9]=-u*h,e[2]=T-_*f,e[6]=M+v*f,e[10]=l*h}else if(t.order==="YXZ"){let _=h*p,v=h*g,M=f*p,T=f*g;e[0]=_+T*u,e[4]=M*u-v,e[8]=l*f,e[1]=l*g,e[5]=l*p,e[9]=-u,e[2]=v*u-M,e[6]=T+_*u,e[10]=l*h}else if(t.order==="ZXY"){let _=h*p,v=h*g,M=f*p,T=f*g;e[0]=_-T*u,e[4]=-l*g,e[8]=M+v*u,e[1]=v+M*u,e[5]=l*p,e[9]=T-_*u,e[2]=-l*f,e[6]=u,e[10]=l*h}else if(t.order==="ZYX"){let _=l*p,v=l*g,M=u*p,T=u*g;e[0]=h*p,e[4]=M*f-v,e[8]=_*f+T,e[1]=h*g,e[5]=T*f+_,e[9]=v*f-M,e[2]=-f,e[6]=u*h,e[10]=l*h}else if(t.order==="YZX"){let _=l*h,v=l*f,M=u*h,T=u*f;e[0]=h*p,e[4]=T-_*g,e[8]=M*g+v,e[1]=g,e[5]=l*p,e[9]=-u*p,e[2]=-f*p,e[6]=v*g+M,e[10]=_-T*g}else if(t.order==="XZY"){let _=l*h,v=l*f,M=u*h,T=u*f;e[0]=h*p,e[4]=-g,e[8]=f*p,e[1]=_*g+T,e[5]=l*p,e[9]=v*g-M,e[2]=M*g-v,e[6]=u*p,e[10]=T*g+_}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(qb,t,Yb)}lookAt(t,e,r){let a=this.elements;return Wn.subVectors(t,e),Wn.lengthSq()===0&&(Wn.z=1),Wn.normalize(),pr.crossVectors(r,Wn),pr.lengthSq()===0&&(Math.abs(r.z)===1?Wn.x+=1e-4:Wn.z+=1e-4,Wn.normalize(),pr.crossVectors(r,Wn)),pr.normalize(),fc.crossVectors(Wn,pr),a[0]=pr.x,a[4]=fc.x,a[8]=Wn.x,a[1]=pr.y,a[5]=fc.y,a[9]=Wn.y,a[2]=pr.z,a[6]=fc.z,a[10]=Wn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let r=t.elements,a=e.elements,o=this.elements,l=r[0],u=r[4],h=r[8],f=r[12],p=r[1],g=r[5],_=r[9],v=r[13],M=r[2],T=r[6],y=r[10],m=r[14],U=r[3],D=r[7],R=r[11],H=r[15],F=a[0],O=a[4],q=a[8],P=a[12],A=a[1],B=a[5],ot=a[9],j=a[13],it=a[2],ft=a[6],et=a[10],pt=a[14],K=a[3],St=a[7],Tt=a[11],Lt=a[15];return o[0]=l*F+u*A+h*it+f*K,o[4]=l*O+u*B+h*ft+f*St,o[8]=l*q+u*ot+h*et+f*Tt,o[12]=l*P+u*j+h*pt+f*Lt,o[1]=p*F+g*A+_*it+v*K,o[5]=p*O+g*B+_*ft+v*St,o[9]=p*q+g*ot+_*et+v*Tt,o[13]=p*P+g*j+_*pt+v*Lt,o[2]=M*F+T*A+y*it+m*K,o[6]=M*O+T*B+y*ft+m*St,o[10]=M*q+T*ot+y*et+m*Tt,o[14]=M*P+T*j+y*pt+m*Lt,o[3]=U*F+D*A+R*it+H*K,o[7]=U*O+D*B+R*ft+H*St,o[11]=U*q+D*ot+R*et+H*Tt,o[15]=U*P+D*j+R*pt+H*Lt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],r=t[4],a=t[8],o=t[12],l=t[1],u=t[5],h=t[9],f=t[13],p=t[2],g=t[6],_=t[10],v=t[14],M=t[3],T=t[7],y=t[11],m=t[15];return M*(+o*h*g-a*f*g-o*u*_+r*f*_+a*u*v-r*h*v)+T*(+e*h*v-e*f*_+o*l*_-a*l*v+a*f*p-o*h*p)+y*(+e*f*g-e*u*v-o*l*g+r*l*v+o*u*p-r*f*p)+m*(-a*u*p-e*h*g+e*u*_+a*l*g-r*l*_+r*h*p)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,r){let a=this.elements;return t.isVector3?(a[12]=t.x,a[13]=t.y,a[14]=t.z):(a[12]=t,a[13]=e,a[14]=r),this}invert(){let t=this.elements,e=t[0],r=t[1],a=t[2],o=t[3],l=t[4],u=t[5],h=t[6],f=t[7],p=t[8],g=t[9],_=t[10],v=t[11],M=t[12],T=t[13],y=t[14],m=t[15],U=g*y*f-T*_*f+T*h*v-u*y*v-g*h*m+u*_*m,D=M*_*f-p*y*f-M*h*v+l*y*v+p*h*m-l*_*m,R=p*T*f-M*g*f+M*u*v-l*T*v-p*u*m+l*g*m,H=M*g*h-p*T*h-M*u*_+l*T*_+p*u*y-l*g*y,F=e*U+r*D+a*R+o*H;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let O=1/F;return t[0]=U*O,t[1]=(T*_*o-g*y*o-T*a*v+r*y*v+g*a*m-r*_*m)*O,t[2]=(u*y*o-T*h*o+T*a*f-r*y*f-u*a*m+r*h*m)*O,t[3]=(g*h*o-u*_*o-g*a*f+r*_*f+u*a*v-r*h*v)*O,t[4]=D*O,t[5]=(p*y*o-M*_*o+M*a*v-e*y*v-p*a*m+e*_*m)*O,t[6]=(M*h*o-l*y*o-M*a*f+e*y*f+l*a*m-e*h*m)*O,t[7]=(l*_*o-p*h*o+p*a*f-e*_*f-l*a*v+e*h*v)*O,t[8]=R*O,t[9]=(M*g*o-p*T*o-M*r*v+e*T*v+p*r*m-e*g*m)*O,t[10]=(l*T*o-M*u*o+M*r*f-e*T*f-l*r*m+e*u*m)*O,t[11]=(p*u*o-l*g*o-p*r*f+e*g*f+l*r*v-e*u*v)*O,t[12]=H*O,t[13]=(p*T*a-M*g*a+M*r*_-e*T*_-p*r*y+e*g*y)*O,t[14]=(M*u*a-l*T*a-M*r*h+e*T*h+l*r*y-e*u*y)*O,t[15]=(l*g*a-p*u*a+p*r*h-e*g*h-l*r*_+e*u*_)*O,this}scale(t){let e=this.elements,r=t.x,a=t.y,o=t.z;return e[0]*=r,e[4]*=a,e[8]*=o,e[1]*=r,e[5]*=a,e[9]*=o,e[2]*=r,e[6]*=a,e[10]*=o,e[3]*=r,e[7]*=a,e[11]*=o,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],r=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],a=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,r,a))}makeTranslation(t,e,r){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,r,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),r=Math.sin(t);return this.set(1,0,0,0,0,e,-r,0,0,r,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),r=Math.sin(t);return this.set(e,0,r,0,0,1,0,0,-r,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),r=Math.sin(t);return this.set(e,-r,0,0,r,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let r=Math.cos(e),a=Math.sin(e),o=1-r,l=t.x,u=t.y,h=t.z,f=o*l,p=o*u;return this.set(f*l+r,f*u-a*h,f*h+a*u,0,f*u+a*h,p*u+r,p*h-a*l,0,f*h-a*u,p*h+a*l,o*h*h+r,0,0,0,0,1),this}makeScale(t,e,r){return this.set(t,0,0,0,0,e,0,0,0,0,r,0,0,0,0,1),this}makeShear(t,e,r,a,o,l){return this.set(1,r,o,0,t,1,l,0,e,a,1,0,0,0,0,1),this}compose(t,e,r){let a=this.elements,o=e._x,l=e._y,u=e._z,h=e._w,f=o+o,p=l+l,g=u+u,_=o*f,v=o*p,M=o*g,T=l*p,y=l*g,m=u*g,U=h*f,D=h*p,R=h*g,H=r.x,F=r.y,O=r.z;return a[0]=(1-(T+m))*H,a[1]=(v+R)*H,a[2]=(M-D)*H,a[3]=0,a[4]=(v-R)*F,a[5]=(1-(_+m))*F,a[6]=(y+U)*F,a[7]=0,a[8]=(M+D)*O,a[9]=(y-U)*O,a[10]=(1-(_+T))*O,a[11]=0,a[12]=t.x,a[13]=t.y,a[14]=t.z,a[15]=1,this}decompose(t,e,r){let a=this.elements,o=Is.set(a[0],a[1],a[2]).length(),l=Is.set(a[4],a[5],a[6]).length(),u=Is.set(a[8],a[9],a[10]).length();this.determinant()<0&&(o=-o),t.x=a[12],t.y=a[13],t.z=a[14],vi.copy(this);let f=1/o,p=1/l,g=1/u;return vi.elements[0]*=f,vi.elements[1]*=f,vi.elements[2]*=f,vi.elements[4]*=p,vi.elements[5]*=p,vi.elements[6]*=p,vi.elements[8]*=g,vi.elements[9]*=g,vi.elements[10]*=g,e.setFromRotationMatrix(vi),r.x=o,r.y=l,r.z=u,this}makePerspective(t,e,r,a,o,l,u=wi){let h=this.elements,f=2*o/(e-t),p=2*o/(r-a),g=(e+t)/(e-t),_=(r+a)/(r-a),v,M;if(u===wi)v=-(l+o)/(l-o),M=-2*l*o/(l-o);else if(u===Ia)v=-l/(l-o),M=-l*o/(l-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+u);return h[0]=f,h[4]=0,h[8]=g,h[12]=0,h[1]=0,h[5]=p,h[9]=_,h[13]=0,h[2]=0,h[6]=0,h[10]=v,h[14]=M,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(t,e,r,a,o,l,u=wi){let h=this.elements,f=1/(e-t),p=1/(r-a),g=1/(l-o),_=(e+t)*f,v=(r+a)*p,M,T;if(u===wi)M=(l+o)*g,T=-2*g;else if(u===Ia)M=o*g,T=-1*g;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+u);return h[0]=2*f,h[4]=0,h[8]=0,h[12]=-_,h[1]=0,h[5]=2*p,h[9]=0,h[13]=-v,h[2]=0,h[6]=0,h[10]=T,h[14]=-M,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(t){let e=this.elements,r=t.elements;for(let a=0;a<16;a++)if(e[a]!==r[a])return!1;return!0}fromArray(t,e=0){for(let r=0;r<16;r++)this.elements[r]=t[r+e];return this}toArray(t=[],e=0){let r=this.elements;return t[e]=r[0],t[e+1]=r[1],t[e+2]=r[2],t[e+3]=r[3],t[e+4]=r[4],t[e+5]=r[5],t[e+6]=r[6],t[e+7]=r[7],t[e+8]=r[8],t[e+9]=r[9],t[e+10]=r[10],t[e+11]=r[11],t[e+12]=r[12],t[e+13]=r[13],t[e+14]=r[14],t[e+15]=r[15],t}},Is=new W,vi=new ke,qb=new W(0,0,0),Yb=new W(1,1,1),pr=new W,fc=new W,Wn=new W,mm=new ke,gm=new oi,Zn=class i{constructor(t=0,e=0,r=0,a=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=r,this._order=a}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,r,a=this._order){return this._x=t,this._y=e,this._z=r,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,r=!0){let a=t.elements,o=a[0],l=a[4],u=a[8],h=a[1],f=a[5],p=a[9],g=a[2],_=a[6],v=a[10];switch(e){case"XYZ":this._y=Math.asin(le(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-p,v),this._z=Math.atan2(-l,o)):(this._x=Math.atan2(_,f),this._z=0);break;case"YXZ":this._x=Math.asin(-le(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(u,v),this._z=Math.atan2(h,f)):(this._y=Math.atan2(-g,o),this._z=0);break;case"ZXY":this._x=Math.asin(le(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-g,v),this._z=Math.atan2(-l,f)):(this._y=0,this._z=Math.atan2(h,o));break;case"ZYX":this._y=Math.asin(-le(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(_,v),this._z=Math.atan2(h,o)):(this._x=0,this._z=Math.atan2(-l,f));break;case"YZX":this._z=Math.asin(le(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-p,f),this._y=Math.atan2(-g,o)):(this._x=0,this._y=Math.atan2(u,v));break;case"XZY":this._z=Math.asin(-le(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(_,f),this._y=Math.atan2(u,o)):(this._x=Math.atan2(-p,v),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,r){return mm.makeRotationFromQuaternion(t),this.setFromRotationMatrix(mm,e,r)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return gm.setFromEuler(this),this.setFromQuaternion(gm,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Zn.DEFAULT_ORDER="XYZ";var Ua=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Zb=0,_m=new W,Ds=new oi,Wi=new ke,dc=new W,Ea=new W,$b=new W,Jb=new oi,vm=new W(1,0,0),ym=new W(0,1,0),xm=new W(0,0,1),Mm={type:"added"},Kb={type:"removed"},Ls={type:"childadded",child:null},Th={type:"childremoved",child:null},un=class i extends Ti{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Zb++}),this.uuid=js(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new W,e=new Zn,r=new oi,a=new W(1,1,1);function o(){r.setFromEuler(e,!1)}function l(){e.setFromQuaternion(r,void 0,!1)}e._onChange(o),r._onChange(l),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new ke},normalMatrix:{value:new ie}}),this.matrix=new ke,this.matrixWorld=new ke,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ua,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ds.setFromAxisAngle(t,e),this.quaternion.multiply(Ds),this}rotateOnWorldAxis(t,e){return Ds.setFromAxisAngle(t,e),this.quaternion.premultiply(Ds),this}rotateX(t){return this.rotateOnAxis(vm,t)}rotateY(t){return this.rotateOnAxis(ym,t)}rotateZ(t){return this.rotateOnAxis(xm,t)}translateOnAxis(t,e){return _m.copy(t).applyQuaternion(this.quaternion),this.position.add(_m.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(vm,t)}translateY(t){return this.translateOnAxis(ym,t)}translateZ(t){return this.translateOnAxis(xm,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Wi.copy(this.matrixWorld).invert())}lookAt(t,e,r){t.isVector3?dc.copy(t):dc.set(t,e,r);let a=this.parent;this.updateWorldMatrix(!0,!1),Ea.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Wi.lookAt(Ea,dc,this.up):Wi.lookAt(dc,Ea,this.up),this.quaternion.setFromRotationMatrix(Wi),a&&(Wi.extractRotation(a.matrixWorld),Ds.setFromRotationMatrix(Wi),this.quaternion.premultiply(Ds.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Mm),Ls.child=t,this.dispatchEvent(Ls),Ls.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Kb),Th.child=t,this.dispatchEvent(Th),Th.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Wi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Wi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Wi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Mm),Ls.child=t,this.dispatchEvent(Ls),Ls.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let r=0,a=this.children.length;r<a;r++){let l=this.children[r].getObjectByProperty(t,e);if(l!==void 0)return l}}getObjectsByProperty(t,e,r=[]){this[t]===e&&r.push(this);let a=this.children;for(let o=0,l=a.length;o<l;o++)a[o].getObjectsByProperty(t,e,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ea,t,$b),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ea,Jb,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let r=0,a=e.length;r<a;r++)e[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let r=0,a=e.length;r<a;r++)e[r].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let r=0,a=e.length;r<a;r++)e[r].updateMatrixWorld(t)}updateWorldMatrix(t,e){let r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let a=this.children;for(let o=0,l=a.length;o<l;o++)a[o].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",r={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.visibility=this._visibility,a.active=this._active,a.bounds=this._bounds.map(u=>({boxInitialized:u.boxInitialized,boxMin:u.box.min.toArray(),boxMax:u.box.max.toArray(),sphereInitialized:u.sphereInitialized,sphereRadius:u.sphere.radius,sphereCenter:u.sphere.center.toArray()})),a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.geometryCount=this._geometryCount,a.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(a.boundingSphere={center:a.boundingSphere.center.toArray(),radius:a.boundingSphere.radius}),this.boundingBox!==null&&(a.boundingBox={min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}));function o(u,h){return u[h.uuid]===void 0&&(u[h.uuid]=h.toJSON(t)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=o(t.geometries,this.geometry);let u=this.geometry.parameters;if(u!==void 0&&u.shapes!==void 0){let h=u.shapes;if(Array.isArray(h))for(let f=0,p=h.length;f<p;f++){let g=h[f];o(t.shapes,g)}else o(t.shapes,h)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let u=[];for(let h=0,f=this.material.length;h<f;h++)u.push(o(t.materials,this.material[h]));a.material=u}else a.material=o(t.materials,this.material);if(this.children.length>0){a.children=[];for(let u=0;u<this.children.length;u++)a.children.push(this.children[u].toJSON(t).object)}if(this.animations.length>0){a.animations=[];for(let u=0;u<this.animations.length;u++){let h=this.animations[u];a.animations.push(o(t.animations,h))}}if(e){let u=l(t.geometries),h=l(t.materials),f=l(t.textures),p=l(t.images),g=l(t.shapes),_=l(t.skeletons),v=l(t.animations),M=l(t.nodes);u.length>0&&(r.geometries=u),h.length>0&&(r.materials=h),f.length>0&&(r.textures=f),p.length>0&&(r.images=p),g.length>0&&(r.shapes=g),_.length>0&&(r.skeletons=_),v.length>0&&(r.animations=v),M.length>0&&(r.nodes=M)}return r.object=a,r;function l(u){let h=[];for(let f in u){let p=u[f];delete p.metadata,h.push(p)}return h}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let r=0;r<t.children.length;r++){let a=t.children[r];this.add(a.clone())}return this}};un.DEFAULT_UP=new W(0,1,0);un.DEFAULT_MATRIX_AUTO_UPDATE=!0;un.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var yi=new W,Xi=new W,Ah=new W,qi=new W,Us=new W,Ns=new W,Sm=new W,Ch=new W,Rh=new W,Ph=new W,Ih=new Ge,Dh=new Ge,Lh=new Ge,_r=class i{constructor(t=new W,e=new W,r=new W){this.a=t,this.b=e,this.c=r}static getNormal(t,e,r,a){a.subVectors(r,e),yi.subVectors(t,e),a.cross(yi);let o=a.lengthSq();return o>0?a.multiplyScalar(1/Math.sqrt(o)):a.set(0,0,0)}static getBarycoord(t,e,r,a,o){yi.subVectors(a,e),Xi.subVectors(r,e),Ah.subVectors(t,e);let l=yi.dot(yi),u=yi.dot(Xi),h=yi.dot(Ah),f=Xi.dot(Xi),p=Xi.dot(Ah),g=l*f-u*u;if(g===0)return o.set(0,0,0),null;let _=1/g,v=(f*h-u*p)*_,M=(l*p-u*h)*_;return o.set(1-v-M,M,v)}static containsPoint(t,e,r,a){return this.getBarycoord(t,e,r,a,qi)===null?!1:qi.x>=0&&qi.y>=0&&qi.x+qi.y<=1}static getInterpolation(t,e,r,a,o,l,u,h){return this.getBarycoord(t,e,r,a,qi)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(o,qi.x),h.addScaledVector(l,qi.y),h.addScaledVector(u,qi.z),h)}static getInterpolatedAttribute(t,e,r,a,o,l){return Ih.setScalar(0),Dh.setScalar(0),Lh.setScalar(0),Ih.fromBufferAttribute(t,e),Dh.fromBufferAttribute(t,r),Lh.fromBufferAttribute(t,a),l.setScalar(0),l.addScaledVector(Ih,o.x),l.addScaledVector(Dh,o.y),l.addScaledVector(Lh,o.z),l}static isFrontFacing(t,e,r,a){return yi.subVectors(r,e),Xi.subVectors(t,e),yi.cross(Xi).dot(a)<0}set(t,e,r){return this.a.copy(t),this.b.copy(e),this.c.copy(r),this}setFromPointsAndIndices(t,e,r,a){return this.a.copy(t[e]),this.b.copy(t[r]),this.c.copy(t[a]),this}setFromAttributeAndIndices(t,e,r,a){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,r),this.c.fromBufferAttribute(t,a),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return yi.subVectors(this.c,this.b),Xi.subVectors(this.a,this.b),yi.cross(Xi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,r,a,o){return i.getInterpolation(t,this.a,this.b,this.c,e,r,a,o)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let r=this.a,a=this.b,o=this.c,l,u;Us.subVectors(a,r),Ns.subVectors(o,r),Ch.subVectors(t,r);let h=Us.dot(Ch),f=Ns.dot(Ch);if(h<=0&&f<=0)return e.copy(r);Rh.subVectors(t,a);let p=Us.dot(Rh),g=Ns.dot(Rh);if(p>=0&&g<=p)return e.copy(a);let _=h*g-p*f;if(_<=0&&h>=0&&p<=0)return l=h/(h-p),e.copy(r).addScaledVector(Us,l);Ph.subVectors(t,o);let v=Us.dot(Ph),M=Ns.dot(Ph);if(M>=0&&v<=M)return e.copy(o);let T=v*f-h*M;if(T<=0&&f>=0&&M<=0)return u=f/(f-M),e.copy(r).addScaledVector(Ns,u);let y=p*M-v*g;if(y<=0&&g-p>=0&&v-M>=0)return Sm.subVectors(o,a),u=(g-p)/(g-p+(v-M)),e.copy(a).addScaledVector(Sm,u);let m=1/(y+T+_);return l=T*m,u=_*m,e.copy(r).addScaledVector(Us,l).addScaledVector(Ns,u)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Cg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},mr={h:0,s:0,l:0},pc={h:0,s:0,l:0};function Uh(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Bt=class{constructor(t,e,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,r)}set(t,e,r){if(e===void 0&&r===void 0){let a=t;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(t,e,r);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=qn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Me.toWorkingColorSpace(this,e),this}setRGB(t,e,r,a=Me.workingColorSpace){return this.r=t,this.g=e,this.b=r,Me.toWorkingColorSpace(this,a),this}setHSL(t,e,r,a=Me.workingColorSpace){if(t=gf(t,1),e=le(e,0,1),r=le(r,0,1),e===0)this.r=this.g=this.b=r;else{let o=r<=.5?r*(1+e):r+e-r*e,l=2*r-o;this.r=Uh(l,o,t+1/3),this.g=Uh(l,o,t),this.b=Uh(l,o,t-1/3)}return Me.toWorkingColorSpace(this,a),this}setStyle(t,e=qn){function r(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(t)){let o,l=a[1],u=a[2];switch(l){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return r(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,e);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return r(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,e);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return r(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(t)){let o=a[1],l=o.length;if(l===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,e);if(l===6)return this.setHex(parseInt(o,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=qn){let r=Cg[t.toLowerCase()];return r!==void 0?this.setHex(r,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=$i(t.r),this.g=$i(t.g),this.b=$i(t.b),this}copyLinearToSRGB(t){return this.r=ks(t.r),this.g=ks(t.g),this.b=ks(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=qn){return Me.fromWorkingColorSpace(xn.copy(this),t),Math.round(le(xn.r*255,0,255))*65536+Math.round(le(xn.g*255,0,255))*256+Math.round(le(xn.b*255,0,255))}getHexString(t=qn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Me.workingColorSpace){Me.fromWorkingColorSpace(xn.copy(this),e);let r=xn.r,a=xn.g,o=xn.b,l=Math.max(r,a,o),u=Math.min(r,a,o),h,f,p=(u+l)/2;if(u===l)h=0,f=0;else{let g=l-u;switch(f=p<=.5?g/(l+u):g/(2-l-u),l){case r:h=(a-o)/g+(a<o?6:0);break;case a:h=(o-r)/g+2;break;case o:h=(r-a)/g+4;break}h/=6}return t.h=h,t.s=f,t.l=p,t}getRGB(t,e=Me.workingColorSpace){return Me.fromWorkingColorSpace(xn.copy(this),e),t.r=xn.r,t.g=xn.g,t.b=xn.b,t}getStyle(t=qn){Me.fromWorkingColorSpace(xn.copy(this),t);let e=xn.r,r=xn.g,a=xn.b;return t!==qn?`color(${t} ${e.toFixed(3)} ${r.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(r*255)},${Math.round(a*255)})`}offsetHSL(t,e,r){return this.getHSL(mr),this.setHSL(mr.h+t,mr.s+e,mr.l+r)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,r){return this.r=t.r+(e.r-t.r)*r,this.g=t.g+(e.g-t.g)*r,this.b=t.b+(e.b-t.b)*r,this}lerpHSL(t,e){this.getHSL(mr),t.getHSL(pc);let r=Ca(mr.h,pc.h,e),a=Ca(mr.s,pc.s,e),o=Ca(mr.l,pc.l,e);return this.setHSL(r,a,o),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,r=this.g,a=this.b,o=t.elements;return this.r=o[0]*e+o[3]*r+o[6]*a,this.g=o[1]*e+o[4]*r+o[7]*a,this.b=o[2]*e+o[5]*r+o[8]*a,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},xn=new Bt;Bt.NAMES=Cg;var jb=0,hn=class extends Ti{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:jb++}),this.uuid=js(),this.name="",this.type="Material",this.blending=$r,this.side=Ji,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Pc,this.blendDst=Ic,this.blendEquation=yr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Bt(0,0,0),this.blendAlpha=0,this.depthFunc=Jr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Gh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Yr,this.stencilZFail=Yr,this.stencilZPass=Yr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let r=t[e];if(r===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let a=this[e];if(a===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(r):a&&a.isVector3&&r&&r.isVector3?a.copy(r):this[e]=r}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(t).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(t).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(t).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(t).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(t).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==$r&&(r.blending=this.blending),this.side!==Ji&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Pc&&(r.blendSrc=this.blendSrc),this.blendDst!==Ic&&(r.blendDst=this.blendDst),this.blendEquation!==yr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Jr&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Gh&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Yr&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Yr&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Yr&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function a(o){let l=[];for(let u in o){let h=o[u];delete h.metadata,l.push(h)}return l}if(e){let o=a(t.textures),l=a(t.images);o.length>0&&(r.textures=o),l.length>0&&(r.images=l)}return r}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,r=null;if(e!==null){let a=e.length;r=new Array(a);for(let o=0;o!==a;++o)r[o]=e[o].clone()}return this.clippingPlanes=r,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Gs=class extends hn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Bt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zn,this.combine=no,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var $e=new W,mc=new Gt,Qb=0,Yn=class{constructor(t,e,r=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Qb++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=r,this.usage=Wh,this.updateRanges=[],this.gpuType=li,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,r){t*=this.itemSize,r*=e.itemSize;for(let a=0,o=this.itemSize;a<o;a++)this.array[t+a]=e.array[r+a];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,r=this.count;e<r;e++)mc.fromBufferAttribute(this,e),mc.applyMatrix3(t),this.setXY(e,mc.x,mc.y);else if(this.itemSize===3)for(let e=0,r=this.count;e<r;e++)$e.fromBufferAttribute(this,e),$e.applyMatrix3(t),this.setXYZ(e,$e.x,$e.y,$e.z);return this}applyMatrix4(t){for(let e=0,r=this.count;e<r;e++)$e.fromBufferAttribute(this,e),$e.applyMatrix4(t),this.setXYZ(e,$e.x,$e.y,$e.z);return this}applyNormalMatrix(t){for(let e=0,r=this.count;e<r;e++)$e.fromBufferAttribute(this,e),$e.applyNormalMatrix(t),this.setXYZ(e,$e.x,$e.y,$e.z);return this}transformDirection(t){for(let e=0,r=this.count;e<r;e++)$e.fromBufferAttribute(this,e),$e.transformDirection(t),this.setXYZ(e,$e.x,$e.y,$e.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let r=this.array[t*this.itemSize+e];return this.normalized&&(r=zs(r,this.array)),r}setComponent(t,e,r){return this.normalized&&(r=An(r,this.array)),this.array[t*this.itemSize+e]=r,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=zs(e,this.array)),e}setX(t,e){return this.normalized&&(e=An(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=zs(e,this.array)),e}setY(t,e){return this.normalized&&(e=An(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=zs(e,this.array)),e}setZ(t,e){return this.normalized&&(e=An(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=zs(e,this.array)),e}setW(t,e){return this.normalized&&(e=An(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,r){return t*=this.itemSize,this.normalized&&(e=An(e,this.array),r=An(r,this.array)),this.array[t+0]=e,this.array[t+1]=r,this}setXYZ(t,e,r,a){return t*=this.itemSize,this.normalized&&(e=An(e,this.array),r=An(r,this.array),a=An(a,this.array)),this.array[t+0]=e,this.array[t+1]=r,this.array[t+2]=a,this}setXYZW(t,e,r,a,o){return t*=this.itemSize,this.normalized&&(e=An(e,this.array),r=An(r,this.array),a=An(a,this.array),o=An(o,this.array)),this.array[t+0]=e,this.array[t+1]=r,this.array[t+2]=a,this.array[t+3]=o,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Wh&&(t.usage=this.usage),t}};var Na=class extends Yn{constructor(t,e,r){super(new Uint16Array(t),e,r)}};var Fa=class extends Yn{constructor(t,e,r){super(new Uint32Array(t),e,r)}};var dn=class extends Yn{constructor(t,e,r){super(new Float32Array(t),e,r)}},tE=0,ri=new ke,Nh=new un,Fs=new W,Xn=new xr,wa=new xr,ln=new W,Mi=class i extends Ti{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:tE++}),this.uuid=js(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(_f(t)?Fa:Na)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,r=0){this.groups.push({start:t,count:e,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let r=this.attributes.normal;if(r!==void 0){let o=new ie().getNormalMatrix(t);r.applyNormalMatrix(o),r.needsUpdate=!0}let a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(t),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ri.makeRotationFromQuaternion(t),this.applyMatrix4(ri),this}rotateX(t){return ri.makeRotationX(t),this.applyMatrix4(ri),this}rotateY(t){return ri.makeRotationY(t),this.applyMatrix4(ri),this}rotateZ(t){return ri.makeRotationZ(t),this.applyMatrix4(ri),this}translate(t,e,r){return ri.makeTranslation(t,e,r),this.applyMatrix4(ri),this}scale(t,e,r){return ri.makeScale(t,e,r),this.applyMatrix4(ri),this}lookAt(t){return Nh.lookAt(t),Nh.updateMatrix(),this.applyMatrix4(Nh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Fs).negate(),this.translate(Fs.x,Fs.y,Fs.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let r=[];for(let a=0,o=t.length;a<o;a++){let l=t[a];r.push(l.x,l.y,l.z||0)}this.setAttribute("position",new dn(r,3))}else{let r=Math.min(t.length,e.count);for(let a=0;a<r;a++){let o=t[a];e.setXYZ(a,o.x,o.y,o.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new xr);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];Xn.setFromBufferAttribute(o),this.morphTargetsRelative?(ln.addVectors(this.boundingBox.min,Xn.min),this.boundingBox.expandByPoint(ln),ln.addVectors(this.boundingBox.max,Xn.max),this.boundingBox.expandByPoint(ln)):(this.boundingBox.expandByPoint(Xn.min),this.boundingBox.expandByPoint(Xn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Mr);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new W,1/0);return}if(t){let r=this.boundingSphere.center;if(Xn.setFromBufferAttribute(t),e)for(let o=0,l=e.length;o<l;o++){let u=e[o];wa.setFromBufferAttribute(u),this.morphTargetsRelative?(ln.addVectors(Xn.min,wa.min),Xn.expandByPoint(ln),ln.addVectors(Xn.max,wa.max),Xn.expandByPoint(ln)):(Xn.expandByPoint(wa.min),Xn.expandByPoint(wa.max))}Xn.getCenter(r);let a=0;for(let o=0,l=t.count;o<l;o++)ln.fromBufferAttribute(t,o),a=Math.max(a,r.distanceToSquared(ln));if(e)for(let o=0,l=e.length;o<l;o++){let u=e[o],h=this.morphTargetsRelative;for(let f=0,p=u.count;f<p;f++)ln.fromBufferAttribute(u,f),h&&(Fs.fromBufferAttribute(t,f),ln.add(Fs)),a=Math.max(a,r.distanceToSquared(ln))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let r=e.position,a=e.normal,o=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Yn(new Float32Array(4*r.count),4));let l=this.getAttribute("tangent"),u=[],h=[];for(let q=0;q<r.count;q++)u[q]=new W,h[q]=new W;let f=new W,p=new W,g=new W,_=new Gt,v=new Gt,M=new Gt,T=new W,y=new W;function m(q,P,A){f.fromBufferAttribute(r,q),p.fromBufferAttribute(r,P),g.fromBufferAttribute(r,A),_.fromBufferAttribute(o,q),v.fromBufferAttribute(o,P),M.fromBufferAttribute(o,A),p.sub(f),g.sub(f),v.sub(_),M.sub(_);let B=1/(v.x*M.y-M.x*v.y);isFinite(B)&&(T.copy(p).multiplyScalar(M.y).addScaledVector(g,-v.y).multiplyScalar(B),y.copy(g).multiplyScalar(v.x).addScaledVector(p,-M.x).multiplyScalar(B),u[q].add(T),u[P].add(T),u[A].add(T),h[q].add(y),h[P].add(y),h[A].add(y))}let U=this.groups;U.length===0&&(U=[{start:0,count:t.count}]);for(let q=0,P=U.length;q<P;++q){let A=U[q],B=A.start,ot=A.count;for(let j=B,it=B+ot;j<it;j+=3)m(t.getX(j+0),t.getX(j+1),t.getX(j+2))}let D=new W,R=new W,H=new W,F=new W;function O(q){H.fromBufferAttribute(a,q),F.copy(H);let P=u[q];D.copy(P),D.sub(H.multiplyScalar(H.dot(P))).normalize(),R.crossVectors(F,P);let B=R.dot(h[q])<0?-1:1;l.setXYZW(q,D.x,D.y,D.z,B)}for(let q=0,P=U.length;q<P;++q){let A=U[q],B=A.start,ot=A.count;for(let j=B,it=B+ot;j<it;j+=3)O(t.getX(j+0)),O(t.getX(j+1)),O(t.getX(j+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Yn(new Float32Array(e.count*3),3),this.setAttribute("normal",r);else for(let _=0,v=r.count;_<v;_++)r.setXYZ(_,0,0,0);let a=new W,o=new W,l=new W,u=new W,h=new W,f=new W,p=new W,g=new W;if(t)for(let _=0,v=t.count;_<v;_+=3){let M=t.getX(_+0),T=t.getX(_+1),y=t.getX(_+2);a.fromBufferAttribute(e,M),o.fromBufferAttribute(e,T),l.fromBufferAttribute(e,y),p.subVectors(l,o),g.subVectors(a,o),p.cross(g),u.fromBufferAttribute(r,M),h.fromBufferAttribute(r,T),f.fromBufferAttribute(r,y),u.add(p),h.add(p),f.add(p),r.setXYZ(M,u.x,u.y,u.z),r.setXYZ(T,h.x,h.y,h.z),r.setXYZ(y,f.x,f.y,f.z)}else for(let _=0,v=e.count;_<v;_+=3)a.fromBufferAttribute(e,_+0),o.fromBufferAttribute(e,_+1),l.fromBufferAttribute(e,_+2),p.subVectors(l,o),g.subVectors(a,o),p.cross(g),r.setXYZ(_+0,p.x,p.y,p.z),r.setXYZ(_+1,p.x,p.y,p.z),r.setXYZ(_+2,p.x,p.y,p.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,r=t.count;e<r;e++)ln.fromBufferAttribute(t,e),ln.normalize(),t.setXYZ(e,ln.x,ln.y,ln.z)}toNonIndexed(){function t(u,h){let f=u.array,p=u.itemSize,g=u.normalized,_=new f.constructor(h.length*p),v=0,M=0;for(let T=0,y=h.length;T<y;T++){u.isInterleavedBufferAttribute?v=h[T]*u.data.stride+u.offset:v=h[T]*p;for(let m=0;m<p;m++)_[M++]=f[v++]}return new Yn(_,p,g)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,r=this.index.array,a=this.attributes;for(let u in a){let h=a[u],f=t(h,r);e.setAttribute(u,f)}let o=this.morphAttributes;for(let u in o){let h=[],f=o[u];for(let p=0,g=f.length;p<g;p++){let _=f[p],v=t(_,r);h.push(v)}e.morphAttributes[u]=h}e.morphTargetsRelative=this.morphTargetsRelative;let l=this.groups;for(let u=0,h=l.length;u<h;u++){let f=l[u];e.addGroup(f.start,f.count,f.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let h=this.parameters;for(let f in h)h[f]!==void 0&&(t[f]=h[f]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let r=this.attributes;for(let h in r){let f=r[h];t.data.attributes[h]=f.toJSON(t.data)}let a={},o=!1;for(let h in this.morphAttributes){let f=this.morphAttributes[h],p=[];for(let g=0,_=f.length;g<_;g++){let v=f[g];p.push(v.toJSON(t.data))}p.length>0&&(a[h]=p,o=!0)}o&&(t.data.morphAttributes=a,t.data.morphTargetsRelative=this.morphTargetsRelative);let l=this.groups;l.length>0&&(t.data.groups=JSON.parse(JSON.stringify(l)));let u=this.boundingSphere;return u!==null&&(t.data.boundingSphere={center:u.center.toArray(),radius:u.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let r=t.index;r!==null&&this.setIndex(r.clone(e));let a=t.attributes;for(let f in a){let p=a[f];this.setAttribute(f,p.clone(e))}let o=t.morphAttributes;for(let f in o){let p=[],g=o[f];for(let _=0,v=g.length;_<v;_++)p.push(g[_].clone(e));this.morphAttributes[f]=p}this.morphTargetsRelative=t.morphTargetsRelative;let l=t.groups;for(let f=0,p=l.length;f<p;f++){let g=l[f];this.addGroup(g.start,g.count,g.materialIndex)}let u=t.boundingBox;u!==null&&(this.boundingBox=u.clone());let h=t.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},bm=new ke,Xr=new Sr,gc=new Mr,Em=new W,_c=new W,vc=new W,yc=new W,Fh=new W,xc=new W,wm=new W,Mc=new W,Nn=class extends un{constructor(t=new Mi,e=new Gs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,r=Object.keys(e);if(r.length>0){let a=e[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,l=a.length;o<l;o++){let u=a[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=o}}}}getVertexPosition(t,e){let r=this.geometry,a=r.attributes.position,o=r.morphAttributes.position,l=r.morphTargetsRelative;e.fromBufferAttribute(a,t);let u=this.morphTargetInfluences;if(o&&u){xc.set(0,0,0);for(let h=0,f=o.length;h<f;h++){let p=u[h],g=o[h];p!==0&&(Fh.fromBufferAttribute(g,t),l?xc.addScaledVector(Fh,p):xc.addScaledVector(Fh.sub(e),p))}e.add(xc)}return e}raycast(t,e){let r=this.geometry,a=this.material,o=this.matrixWorld;a!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),gc.copy(r.boundingSphere),gc.applyMatrix4(o),Xr.copy(t.ray).recast(t.near),!(gc.containsPoint(Xr.origin)===!1&&(Xr.intersectSphere(gc,Em)===null||Xr.origin.distanceToSquared(Em)>(t.far-t.near)**2))&&(bm.copy(o).invert(),Xr.copy(t.ray).applyMatrix4(bm),!(r.boundingBox!==null&&Xr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(t,e,Xr)))}_computeIntersections(t,e,r){let a,o=this.geometry,l=this.material,u=o.index,h=o.attributes.position,f=o.attributes.uv,p=o.attributes.uv1,g=o.attributes.normal,_=o.groups,v=o.drawRange;if(u!==null)if(Array.isArray(l))for(let M=0,T=_.length;M<T;M++){let y=_[M],m=l[y.materialIndex],U=Math.max(y.start,v.start),D=Math.min(u.count,Math.min(y.start+y.count,v.start+v.count));for(let R=U,H=D;R<H;R+=3){let F=u.getX(R),O=u.getX(R+1),q=u.getX(R+2);a=Sc(this,m,t,r,f,p,g,F,O,q),a&&(a.faceIndex=Math.floor(R/3),a.face.materialIndex=y.materialIndex,e.push(a))}}else{let M=Math.max(0,v.start),T=Math.min(u.count,v.start+v.count);for(let y=M,m=T;y<m;y+=3){let U=u.getX(y),D=u.getX(y+1),R=u.getX(y+2);a=Sc(this,l,t,r,f,p,g,U,D,R),a&&(a.faceIndex=Math.floor(y/3),e.push(a))}}else if(h!==void 0)if(Array.isArray(l))for(let M=0,T=_.length;M<T;M++){let y=_[M],m=l[y.materialIndex],U=Math.max(y.start,v.start),D=Math.min(h.count,Math.min(y.start+y.count,v.start+v.count));for(let R=U,H=D;R<H;R+=3){let F=R,O=R+1,q=R+2;a=Sc(this,m,t,r,f,p,g,F,O,q),a&&(a.faceIndex=Math.floor(R/3),a.face.materialIndex=y.materialIndex,e.push(a))}}else{let M=Math.max(0,v.start),T=Math.min(h.count,v.start+v.count);for(let y=M,m=T;y<m;y+=3){let U=y,D=y+1,R=y+2;a=Sc(this,l,t,r,f,p,g,U,D,R),a&&(a.faceIndex=Math.floor(y/3),e.push(a))}}}};function eE(i,t,e,r,a,o,l,u){let h;if(t.side===Cn?h=r.intersectTriangle(l,o,a,!0,u):h=r.intersectTriangle(a,o,l,t.side===Ji,u),h===null)return null;Mc.copy(u),Mc.applyMatrix4(i.matrixWorld);let f=e.ray.origin.distanceTo(Mc);return f<e.near||f>e.far?null:{distance:f,point:Mc.clone(),object:i}}function Sc(i,t,e,r,a,o,l,u,h,f){i.getVertexPosition(u,_c),i.getVertexPosition(h,vc),i.getVertexPosition(f,yc);let p=eE(i,t,e,r,_c,vc,yc,wm);if(p){let g=new W;_r.getBarycoord(wm,_c,vc,yc,g),a&&(p.uv=_r.getInterpolatedAttribute(a,u,h,f,g,new Gt)),o&&(p.uv1=_r.getInterpolatedAttribute(o,u,h,f,g,new Gt)),l&&(p.normal=_r.getInterpolatedAttribute(l,u,h,f,g,new W),p.normal.dot(r.direction)>0&&p.normal.multiplyScalar(-1));let _={a:u,b:h,c:f,normal:new W,materialIndex:0};_r.getNormal(_c,vc,yc,_.normal),p.face=_,p.barycoord=g}return p}var Ws=class i extends Mi{constructor(t=1,e=1,r=1,a=1,o=1,l=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:r,widthSegments:a,heightSegments:o,depthSegments:l};let u=this;a=Math.floor(a),o=Math.floor(o),l=Math.floor(l);let h=[],f=[],p=[],g=[],_=0,v=0;M("z","y","x",-1,-1,r,e,t,l,o,0),M("z","y","x",1,-1,r,e,-t,l,o,1),M("x","z","y",1,1,t,r,e,a,l,2),M("x","z","y",1,-1,t,r,-e,a,l,3),M("x","y","z",1,-1,t,e,r,a,o,4),M("x","y","z",-1,-1,t,e,-r,a,o,5),this.setIndex(h),this.setAttribute("position",new dn(f,3)),this.setAttribute("normal",new dn(p,3)),this.setAttribute("uv",new dn(g,2));function M(T,y,m,U,D,R,H,F,O,q,P){let A=R/O,B=H/q,ot=R/2,j=H/2,it=F/2,ft=O+1,et=q+1,pt=0,K=0,St=new W;for(let Tt=0;Tt<et;Tt++){let Lt=Tt*B-j;for(let oe=0;oe<ft;oe++){let Te=oe*A-ot;St[T]=Te*U,St[y]=Lt*D,St[m]=it,f.push(St.x,St.y,St.z),St[T]=0,St[y]=0,St[m]=F>0?1:-1,p.push(St.x,St.y,St.z),g.push(oe/O),g.push(1-Tt/q),pt+=1}}for(let Tt=0;Tt<q;Tt++)for(let Lt=0;Lt<O;Lt++){let oe=_+Lt+ft*Tt,Te=_+Lt+ft*(Tt+1),at=_+(Lt+1)+ft*(Tt+1),gt=_+(Lt+1)+ft*Tt;h.push(oe,Te,gt),h.push(Te,at,gt),K+=6}u.addGroup(v,K,P),v+=K,_+=pt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function ss(i){let t={};for(let e in i){t[e]={};for(let r in i[e]){let a=i[e][r];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][r]=null):t[e][r]=a.clone():Array.isArray(a)?t[e][r]=a.slice():t[e][r]=a}}return t}function Sn(i){let t={};for(let e=0;e<i.length;e++){let r=ss(i[e]);for(let a in r)t[a]=r[a]}return t}function nE(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function vf(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Me.workingColorSpace}var Rg={clone:ss,merge:Sn},iE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,rE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,$n=class extends hn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=iE,this.fragmentShader=rE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ss(t.uniforms),this.uniformsGroups=nE(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let a in this.uniforms){let l=this.uniforms[a].value;l&&l.isTexture?e.uniforms[a]={type:"t",value:l.toJSON(t).uuid}:l&&l.isColor?e.uniforms[a]={type:"c",value:l.getHex()}:l&&l.isVector2?e.uniforms[a]={type:"v2",value:l.toArray()}:l&&l.isVector3?e.uniforms[a]={type:"v3",value:l.toArray()}:l&&l.isVector4?e.uniforms[a]={type:"v4",value:l.toArray()}:l&&l.isMatrix3?e.uniforms[a]={type:"m3",value:l.toArray()}:l&&l.isMatrix4?e.uniforms[a]={type:"m4",value:l.toArray()}:e.uniforms[a]={value:l}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let r={};for(let a in this.extensions)this.extensions[a]===!0&&(r[a]=!0);return Object.keys(r).length>0&&(e.extensions=r),e}},Oa=class extends un{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ke,this.projectionMatrix=new ke,this.projectionMatrixInverse=new ke,this.coordinateSystem=wi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},gr=new W,Tm=new Gt,Am=new Gt,Mn=class extends Oa{constructor(t=50,e=1,r=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=r,this.far=a,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Vs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Aa*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Vs*2*Math.atan(Math.tan(Aa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,r){gr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(gr.x,gr.y).multiplyScalar(-t/gr.z),gr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(gr.x,gr.y).multiplyScalar(-t/gr.z)}getViewSize(t,e){return this.getViewBounds(t,Tm,Am),e.subVectors(Am,Tm)}setViewOffset(t,e,r,a,o,l){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=r,this.view.offsetY=a,this.view.width=o,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Aa*.5*this.fov)/this.zoom,r=2*e,a=this.aspect*r,o=-.5*a,l=this.view;if(this.view!==null&&this.view.enabled){let h=l.fullWidth,f=l.fullHeight;o+=l.offsetX*a/h,e-=l.offsetY*r/f,a*=l.width/h,r*=l.height/f}let u=this.filmOffset;u!==0&&(o+=t*u/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+a,e,e-r,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Os=-90,Bs=1,Bc=class extends un{constructor(t,e,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;let a=new Mn(Os,Bs,t,e);a.layers=this.layers,this.add(a);let o=new Mn(Os,Bs,t,e);o.layers=this.layers,this.add(o);let l=new Mn(Os,Bs,t,e);l.layers=this.layers,this.add(l);let u=new Mn(Os,Bs,t,e);u.layers=this.layers,this.add(u);let h=new Mn(Os,Bs,t,e);h.layers=this.layers,this.add(h);let f=new Mn(Os,Bs,t,e);f.layers=this.layers,this.add(f)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[r,a,o,l,u,h]=e;for(let f of e)this.remove(f);if(t===wi)r.up.set(0,1,0),r.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),l.up.set(0,0,1),l.lookAt(0,-1,0),u.up.set(0,1,0),u.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(t===Ia)r.up.set(0,-1,0),r.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),l.up.set(0,0,-1),l.lookAt(0,-1,0),u.up.set(0,-1,0),u.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let f of e)this.add(f),f.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:r,activeMipmapLevel:a}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[o,l,u,h,f,p]=this.children,g=t.getRenderTarget(),_=t.getActiveCubeFace(),v=t.getActiveMipmapLevel(),M=t.xr.enabled;t.xr.enabled=!1;let T=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,t.setRenderTarget(r,0,a),t.render(e,o),t.setRenderTarget(r,1,a),t.render(e,l),t.setRenderTarget(r,2,a),t.render(e,u),t.setRenderTarget(r,3,a),t.render(e,h),t.setRenderTarget(r,4,a),t.render(e,f),r.texture.generateMipmaps=T,t.setRenderTarget(r,5,a),t.render(e,p),t.setRenderTarget(g,_,v),t.xr.enabled=M,r.texture.needsPMREMUpdate=!0}},Ba=class extends pn{constructor(t,e,r,a,o,l,u,h,f,p){t=t!==void 0?t:[],e=e!==void 0?e:ns,super(t,e,r,a,o,l,u,h,f,p),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},zc=class extends Ai{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let r={width:t,height:t,depth:1},a=[r,r,r,r,r,r];this.texture=new Ba(a,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:xi}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new Ws(5,5,5),o=new $n({name:"CubemapFromEquirect",uniforms:ss(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Cn,blending:Ki});o.uniforms.tEquirect.value=e;let l=new Nn(a,o),u=e.minFilter;return e.minFilter===Cr&&(e.minFilter=xi),new Bc(1,10,this).update(t,l),e.minFilter=u,l.geometry.dispose(),l.material.dispose(),this}clear(t,e,r,a){let o=t.getRenderTarget();for(let l=0;l<6;l++)t.setRenderTarget(this,l),t.clear(e,r,a);t.setRenderTarget(o)}},Zi=class extends un{constructor(){super(),this.isGroup=!0,this.type="Group"}},sE={type:"move"},Xs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Zi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Zi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Zi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let r of t.hand.values())this._getHandJoint(e,r)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,r){let a=null,o=null,l=null,u=this._targetRay,h=this._grip,f=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(f&&t.hand){l=!0;for(let T of t.hand.values()){let y=e.getJointPose(T,r),m=this._getHandJoint(f,T);y!==null&&(m.matrix.fromArray(y.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=y.radius),m.visible=y!==null}let p=f.joints["index-finger-tip"],g=f.joints["thumb-tip"],_=p.position.distanceTo(g.position),v=.02,M=.005;f.inputState.pinching&&_>v+M?(f.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!f.inputState.pinching&&_<=v-M&&(f.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else h!==null&&t.gripSpace&&(o=e.getPose(t.gripSpace,r),o!==null&&(h.matrix.fromArray(o.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,o.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(o.linearVelocity)):h.hasLinearVelocity=!1,o.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(o.angularVelocity)):h.hasAngularVelocity=!1));u!==null&&(a=e.getPose(t.targetRaySpace,r),a===null&&o!==null&&(a=o),a!==null&&(u.matrix.fromArray(a.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,a.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(a.linearVelocity)):u.hasLinearVelocity=!1,a.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(a.angularVelocity)):u.hasAngularVelocity=!1,this.dispatchEvent(sE)))}return u!==null&&(u.visible=a!==null),h!==null&&(h.visible=o!==null),f!==null&&(f.visible=l!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let r=new Zi;r.matrixAutoUpdate=!1,r.visible=!1,t.joints[e.jointName]=r,t.add(r)}return t.joints[e.jointName]}};var za=class i{constructor(t,e=1,r=1e3){this.isFog=!0,this.name="",this.color=new Bt(t),this.near=e,this.far=r}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},ka=class extends un{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Zn,this.environmentIntensity=1,this.environmentRotation=new Zn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var kc=class extends hn{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Bt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}};var Oh=new W,aE=new W,oE=new ie,si=class{constructor(t=new W(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,r,a){return this.normal.set(t,e,r),this.constant=a,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,r){let a=Oh.subVectors(r,e).cross(aE.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(a,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let r=t.delta(Oh),a=this.normal.dot(r);if(a===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/a;return o<0||o>1?null:e.copy(t.start).addScaledVector(r,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),r=this.distanceToPoint(t.end);return e<0&&r>0||r<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let r=e||oE.getNormalMatrix(t),a=this.coplanarPoint(Oh).applyMatrix4(t),o=this.normal.applyMatrix3(r).normalize();return this.constant=-a.dot(o),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},qr=new Mr,bc=new W,qs=class{constructor(t=new si,e=new si,r=new si,a=new si,o=new si,l=new si){this.planes=[t,e,r,a,o,l]}set(t,e,r,a,o,l){let u=this.planes;return u[0].copy(t),u[1].copy(e),u[2].copy(r),u[3].copy(a),u[4].copy(o),u[5].copy(l),this}copy(t){let e=this.planes;for(let r=0;r<6;r++)e[r].copy(t.planes[r]);return this}setFromProjectionMatrix(t,e=wi){let r=this.planes,a=t.elements,o=a[0],l=a[1],u=a[2],h=a[3],f=a[4],p=a[5],g=a[6],_=a[7],v=a[8],M=a[9],T=a[10],y=a[11],m=a[12],U=a[13],D=a[14],R=a[15];if(r[0].setComponents(h-o,_-f,y-v,R-m).normalize(),r[1].setComponents(h+o,_+f,y+v,R+m).normalize(),r[2].setComponents(h+l,_+p,y+M,R+U).normalize(),r[3].setComponents(h-l,_-p,y-M,R-U).normalize(),r[4].setComponents(h-u,_-g,y-T,R-D).normalize(),e===wi)r[5].setComponents(h+u,_+g,y+T,R+D).normalize();else if(e===Ia)r[5].setComponents(u,g,T,D).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),qr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),qr.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(qr)}intersectsSprite(t){return qr.center.set(0,0,0),qr.radius=.7071067811865476,qr.applyMatrix4(t.matrixWorld),this.intersectsSphere(qr)}intersectsSphere(t){let e=this.planes,r=t.center,a=-t.radius;for(let o=0;o<6;o++)if(e[o].distanceToPoint(r)<a)return!1;return!0}intersectsBox(t){let e=this.planes;for(let r=0;r<6;r++){let a=e[r];if(bc.x=a.normal.x>0?t.max.x:t.min.x,bc.y=a.normal.y>0?t.max.y:t.min.y,bc.z=a.normal.z>0?t.max.z:t.min.z,a.distanceToPoint(bc)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let r=0;r<6;r++)if(e[r].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Qr=class extends hn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Bt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Vc=new W,Hc=new W,Cm=new ke,Ta=new Sr,Ec=new Mr,Bh=new W,Rm=new W,Gc=class extends un{constructor(t=new Mi,e=new Qr){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,r=[0];for(let a=1,o=e.count;a<o;a++)Vc.fromBufferAttribute(e,a-1),Hc.fromBufferAttribute(e,a),r[a]=r[a-1],r[a]+=Vc.distanceTo(Hc);t.setAttribute("lineDistance",new dn(r,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let r=this.geometry,a=this.matrixWorld,o=t.params.Line.threshold,l=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Ec.copy(r.boundingSphere),Ec.applyMatrix4(a),Ec.radius+=o,t.ray.intersectsSphere(Ec)===!1)return;Cm.copy(a).invert(),Ta.copy(t.ray).applyMatrix4(Cm);let u=o/((this.scale.x+this.scale.y+this.scale.z)/3),h=u*u,f=this.isLineSegments?2:1,p=r.index,_=r.attributes.position;if(p!==null){let v=Math.max(0,l.start),M=Math.min(p.count,l.start+l.count);for(let T=v,y=M-1;T<y;T+=f){let m=p.getX(T),U=p.getX(T+1),D=wc(this,t,Ta,h,m,U,T);D&&e.push(D)}if(this.isLineLoop){let T=p.getX(M-1),y=p.getX(v),m=wc(this,t,Ta,h,T,y,M-1);m&&e.push(m)}}else{let v=Math.max(0,l.start),M=Math.min(_.count,l.start+l.count);for(let T=v,y=M-1;T<y;T+=f){let m=wc(this,t,Ta,h,T,T+1,T);m&&e.push(m)}if(this.isLineLoop){let T=wc(this,t,Ta,h,M-1,v,M-1);T&&e.push(T)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,r=Object.keys(e);if(r.length>0){let a=e[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,l=a.length;o<l;o++){let u=a[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=o}}}}};function wc(i,t,e,r,a,o,l){let u=i.geometry.attributes.position;if(Vc.fromBufferAttribute(u,a),Hc.fromBufferAttribute(u,o),e.distanceSqToSegment(Vc,Hc,Bh,Rm)>r)return;Bh.applyMatrix4(i.matrixWorld);let f=t.ray.origin.distanceTo(Bh);if(!(f<t.near||f>t.far))return{distance:f,point:Rm.clone().applyMatrix4(i.matrixWorld),index:l,face:null,faceIndex:null,barycoord:null,object:i}}var Pm=new W,Im=new W,Wc=class extends Gc{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,r=[];for(let a=0,o=e.count;a<o;a+=2)Pm.fromBufferAttribute(e,a),Im.fromBufferAttribute(e,a+1),r[a]=a===0?0:r[a-1],r[a+1]=r[a]+Pm.distanceTo(Im);t.setAttribute("lineDistance",new dn(r,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Va=class extends hn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Bt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Dm=new ke,Xh=new Sr,Tc=new Mr,Ac=new W,Ha=class extends un{constructor(t=new Mi,e=new Va){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let r=this.geometry,a=this.matrixWorld,o=t.params.Points.threshold,l=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Tc.copy(r.boundingSphere),Tc.applyMatrix4(a),Tc.radius+=o,t.ray.intersectsSphere(Tc)===!1)return;Dm.copy(a).invert(),Xh.copy(t.ray).applyMatrix4(Dm);let u=o/((this.scale.x+this.scale.y+this.scale.z)/3),h=u*u,f=r.index,g=r.attributes.position;if(f!==null){let _=Math.max(0,l.start),v=Math.min(f.count,l.start+l.count);for(let M=_,T=v;M<T;M++){let y=f.getX(M);Ac.fromBufferAttribute(g,y),Lm(Ac,y,h,a,t,e,this)}}else{let _=Math.max(0,l.start),v=Math.min(g.count,l.start+l.count);for(let M=_,T=v;M<T;M++)Ac.fromBufferAttribute(g,M),Lm(Ac,M,h,a,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,r=Object.keys(e);if(r.length>0){let a=e[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,l=a.length;o<l;o++){let u=a[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=o}}}}};function Lm(i,t,e,r,a,o,l){let u=Xh.distanceSqToPoint(i);if(u<e){let h=new W;Xh.closestPointToPoint(i,h),h.applyMatrix4(r);let f=a.ray.origin.distanceTo(h);if(f<a.near||f>a.far)return;o.push({distance:f,distanceToRay:Math.sqrt(u),point:h,index:t,face:null,faceIndex:null,barycoord:null,object:l})}}var Ga=class extends pn{constructor(t,e,r,a,o,l,u,h,f,p=Zr){if(p!==Zr&&p!==Kr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&p===Zr&&(r=Rr),r===void 0&&p===Kr&&(r=rs),super(null,a,o,l,u,h,p,r,f),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=u!==void 0?u:ai,this.minFilter=h!==void 0?h:ai,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Hs(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}};var ts=class i extends Mi{constructor(t=1,e=1,r=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:r,heightSegments:a};let o=t/2,l=e/2,u=Math.floor(r),h=Math.floor(a),f=u+1,p=h+1,g=t/u,_=e/h,v=[],M=[],T=[],y=[];for(let m=0;m<p;m++){let U=m*_-l;for(let D=0;D<f;D++){let R=D*g-o;M.push(R,-U,0),T.push(0,0,1),y.push(D/u),y.push(1-m/h)}}for(let m=0;m<h;m++)for(let U=0;U<u;U++){let D=U+f*m,R=U+f*(m+1),H=U+1+f*(m+1),F=U+1+f*m;v.push(D,R,F),v.push(R,H,F)}this.setIndex(v),this.setAttribute("position",new dn(M,3)),this.setAttribute("normal",new dn(T,3)),this.setAttribute("uv",new dn(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var Xc=class extends hn{constructor(t){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new Bt(0),this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.fog=t.fog,this}},qc=class extends $n{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Wa=class extends hn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Bt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Bt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Pr,this.normalScale=new Gt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Yc=class extends Wa{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Gt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return le(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Bt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Bt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Bt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}},Ys=class extends hn{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Bt(16777215),this.specular=new Bt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Bt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Pr,this.normalScale=new Gt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zn,this.combine=no,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Zc=class extends hn{constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new Bt(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Bt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Pr,this.normalScale=new Gt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},$c=class extends hn{constructor(t){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Pr,this.normalScale=new Gt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.flatShading=t.flatShading,this}},Jc=class extends hn{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Bt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Bt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Pr,this.normalScale=new Gt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zn,this.combine=no,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Xa=class extends hn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=pg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},qa=class extends hn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},Kc=class extends hn{constructor(t){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new Bt(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Pr,this.normalScale=new Gt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={MATCAP:""},this.color.copy(t.color),this.matcap=t.matcap,this.map=t.map,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.flatShading=t.flatShading,this.fog=t.fog,this}},jc=class extends Qr{constructor(t){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(t)}copy(t){return super.copy(t),this.scale=t.scale,this.dashSize=t.dashSize,this.gapSize=t.gapSize,this}};function Cc(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function cE(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var es=class{constructor(t,e,r,a){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=a!==void 0?a:new e.constructor(r),this.sampleValues=e,this.valueSize=r,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,r=this._cachedIndex,a=e[r],o=e[r-1];t:{e:{let l;n:{i:if(!(t<a)){for(let u=r+2;;){if(a===void 0){if(t<o)break i;return r=e.length,this._cachedIndex=r,this.copySampleValue_(r-1)}if(r===u)break;if(o=a,a=e[++r],t<a)break e}l=e.length;break n}if(!(t>=o)){let u=e[1];t<u&&(r=2,o=u);for(let h=r-2;;){if(o===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===h)break;if(a=o,o=e[--r-1],t>=o)break e}l=r,r=0;break n}break t}for(;r<l;){let u=r+l>>>1;t<e[u]?l=u:r=u+1}if(a=e[r],o=e[r-1],o===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(a===void 0)return r=e.length,this._cachedIndex=r,this.copySampleValue_(r-1)}this._cachedIndex=r,this.intervalChanged_(r,o,a)}return this.interpolate_(r,o,t,a)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,r=this.sampleValues,a=this.valueSize,o=t*a;for(let l=0;l!==a;++l)e[l]=r[o+l];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Qc=class extends es{constructor(t,e,r,a){super(t,e,r,a),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:kh,endingEnd:kh}}intervalChanged_(t,e,r){let a=this.parameterPositions,o=t-2,l=t+1,u=a[o],h=a[l];if(u===void 0)switch(this.getSettings_().endingStart){case Vh:o=t,u=2*e-r;break;case Hh:o=a.length-2,u=e+a[o]-a[o+1];break;default:o=t,u=r}if(h===void 0)switch(this.getSettings_().endingEnd){case Vh:l=t,h=2*r-e;break;case Hh:l=1,h=r+a[1]-a[0];break;default:l=t-1,h=e}let f=(r-e)*.5,p=this.valueSize;this._weightPrev=f/(e-u),this._weightNext=f/(h-r),this._offsetPrev=o*p,this._offsetNext=l*p}interpolate_(t,e,r,a){let o=this.resultBuffer,l=this.sampleValues,u=this.valueSize,h=t*u,f=h-u,p=this._offsetPrev,g=this._offsetNext,_=this._weightPrev,v=this._weightNext,M=(r-e)/(a-e),T=M*M,y=T*M,m=-_*y+2*_*T-_*M,U=(1+_)*y+(-1.5-2*_)*T+(-.5+_)*M+1,D=(-1-v)*y+(1.5+v)*T+.5*M,R=v*y-v*T;for(let H=0;H!==u;++H)o[H]=m*l[p+H]+U*l[f+H]+D*l[h+H]+R*l[g+H];return o}},tl=class extends es{constructor(t,e,r,a){super(t,e,r,a)}interpolate_(t,e,r,a){let o=this.resultBuffer,l=this.sampleValues,u=this.valueSize,h=t*u,f=h-u,p=(r-e)/(a-e),g=1-p;for(let _=0;_!==u;++_)o[_]=l[f+_]*g+l[h+_]*p;return o}},el=class extends es{constructor(t,e,r,a){super(t,e,r,a)}interpolate_(t){return this.copySampleValue_(t-1)}},ci=class{constructor(t,e,r,a){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Cc(e,this.TimeBufferType),this.values=Cc(r,this.ValueBufferType),this.setInterpolation(a||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,r;if(e.toJSON!==this.toJSON)r=e.toJSON(t);else{r={name:t.name,times:Cc(t.times,Array),values:Cc(t.values,Array)};let a=t.getInterpolation();a!==t.DefaultInterpolation&&(r.interpolation=a)}return r.type=t.ValueTypeName,r}InterpolantFactoryMethodDiscrete(t){return new el(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new tl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Qc(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Ra:e=this.InterpolantFactoryMethodDiscrete;break;case Uc:e=this.InterpolantFactoryMethodLinear;break;case Rc:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let r="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(r);return console.warn("THREE.KeyframeTrack:",r),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ra;case this.InterpolantFactoryMethodLinear:return Uc;case this.InterpolantFactoryMethodSmooth:return Rc}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let r=0,a=e.length;r!==a;++r)e[r]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let r=0,a=e.length;r!==a;++r)e[r]*=t}return this}trim(t,e){let r=this.times,a=r.length,o=0,l=a-1;for(;o!==a&&r[o]<t;)++o;for(;l!==-1&&r[l]>e;)--l;if(++l,o!==0||l!==a){o>=l&&(l=Math.max(l,1),o=l-1);let u=this.getValueSize();this.times=r.slice(o,l),this.values=this.values.slice(o*u,l*u)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let r=this.times,a=this.values,o=r.length;o===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let l=null;for(let u=0;u!==o;u++){let h=r[u];if(typeof h=="number"&&isNaN(h)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,u,h),t=!1;break}if(l!==null&&l>h){console.error("THREE.KeyframeTrack: Out of order keys.",this,u,h,l),t=!1;break}l=h}if(a!==void 0&&cE(a))for(let u=0,h=a.length;u!==h;++u){let f=a[u];if(isNaN(f)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,u,f),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),r=this.getValueSize(),a=this.getInterpolation()===Rc,o=t.length-1,l=1;for(let u=1;u<o;++u){let h=!1,f=t[u],p=t[u+1];if(f!==p&&(u!==1||f!==t[0]))if(a)h=!0;else{let g=u*r,_=g-r,v=g+r;for(let M=0;M!==r;++M){let T=e[g+M];if(T!==e[_+M]||T!==e[v+M]){h=!0;break}}}if(h){if(u!==l){t[l]=t[u];let g=u*r,_=l*r;for(let v=0;v!==r;++v)e[_+v]=e[g+v]}++l}}if(o>0){t[l]=t[o];for(let u=o*r,h=l*r,f=0;f!==r;++f)e[h+f]=e[u+f];++l}return l!==t.length?(this.times=t.slice(0,l),this.values=e.slice(0,l*r)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),r=this.constructor,a=new r(this.name,t,e);return a.createInterpolant=this.createInterpolant,a}};ci.prototype.TimeBufferType=Float32Array;ci.prototype.ValueBufferType=Float32Array;ci.prototype.DefaultInterpolation=Uc;var br=class extends ci{constructor(t,e,r){super(t,e,r)}};br.prototype.ValueTypeName="bool";br.prototype.ValueBufferType=Array;br.prototype.DefaultInterpolation=Ra;br.prototype.InterpolantFactoryMethodLinear=void 0;br.prototype.InterpolantFactoryMethodSmooth=void 0;var nl=class extends ci{};nl.prototype.ValueTypeName="color";var il=class extends ci{};il.prototype.ValueTypeName="number";var rl=class extends es{constructor(t,e,r,a){super(t,e,r,a)}interpolate_(t,e,r,a){let o=this.resultBuffer,l=this.sampleValues,u=this.valueSize,h=(r-e)/(a-e),f=t*u;for(let p=f+u;f!==p;f+=4)oi.slerpFlat(o,0,l,f-u,l,f,h);return o}},Ya=class extends ci{InterpolantFactoryMethodLinear(t){return new rl(this.times,this.values,this.getValueSize(),t)}};Ya.prototype.ValueTypeName="quaternion";Ya.prototype.InterpolantFactoryMethodSmooth=void 0;var Er=class extends ci{constructor(t,e,r){super(t,e,r)}};Er.prototype.ValueTypeName="string";Er.prototype.ValueBufferType=Array;Er.prototype.DefaultInterpolation=Ra;Er.prototype.InterpolantFactoryMethodLinear=void 0;Er.prototype.InterpolantFactoryMethodSmooth=void 0;var sl=class extends ci{};sl.prototype.ValueTypeName="vector";var qh={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},al=class{constructor(t,e,r){let a=this,o=!1,l=0,u=0,h,f=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=r,this.itemStart=function(p){u++,o===!1&&a.onStart!==void 0&&a.onStart(p,l,u),o=!0},this.itemEnd=function(p){l++,a.onProgress!==void 0&&a.onProgress(p,l,u),l===u&&(o=!1,a.onLoad!==void 0&&a.onLoad())},this.itemError=function(p){a.onError!==void 0&&a.onError(p)},this.resolveURL=function(p){return h?h(p):p},this.setURLModifier=function(p){return h=p,this},this.addHandler=function(p,g){return f.push(p,g),this},this.removeHandler=function(p){let g=f.indexOf(p);return g!==-1&&f.splice(g,2),this},this.getHandler=function(p){for(let g=0,_=f.length;g<_;g+=2){let v=f[g],M=f[g+1];if(v.global&&(v.lastIndex=0),v.test(p))return M}return null}}},Pg=new al,wr=class{constructor(t){this.manager=t!==void 0?t:Pg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let r=this;return new Promise(function(a,o){r.load(t,a,e,o)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};wr.DEFAULT_MATERIAL_NAME="__DEFAULT";var Yi={},Yh=class extends Error{constructor(t,e){super(t),this.response=e}},Zs=class extends wr{constructor(t){super(t)}load(t,e,r,a){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let o=qh.get(t);if(o!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(o),this.manager.itemEnd(t)},0),o;if(Yi[t]!==void 0){Yi[t].push({onLoad:e,onProgress:r,onError:a});return}Yi[t]=[],Yi[t].push({onLoad:e,onProgress:r,onError:a});let l=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),u=this.mimeType,h=this.responseType;fetch(l).then(f=>{if(f.status===200||f.status===0){if(f.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||f.body===void 0||f.body.getReader===void 0)return f;let p=Yi[t],g=f.body.getReader(),_=f.headers.get("X-File-Size")||f.headers.get("Content-Length"),v=_?parseInt(_):0,M=v!==0,T=0,y=new ReadableStream({start(m){U();function U(){g.read().then(({done:D,value:R})=>{if(D)m.close();else{T+=R.byteLength;let H=new ProgressEvent("progress",{lengthComputable:M,loaded:T,total:v});for(let F=0,O=p.length;F<O;F++){let q=p[F];q.onProgress&&q.onProgress(H)}m.enqueue(R),U()}},D=>{m.error(D)})}}});return new Response(y)}else throw new Yh(`fetch for "${f.url}" responded with ${f.status}: ${f.statusText}`,f)}).then(f=>{switch(h){case"arraybuffer":return f.arrayBuffer();case"blob":return f.blob();case"document":return f.text().then(p=>new DOMParser().parseFromString(p,u));case"json":return f.json();default:if(u===void 0)return f.text();{let g=/charset="?([^;"\s]*)"?/i.exec(u),_=g&&g[1]?g[1].toLowerCase():void 0,v=new TextDecoder(_);return f.arrayBuffer().then(M=>v.decode(M))}}}).then(f=>{qh.add(t,f);let p=Yi[t];delete Yi[t];for(let g=0,_=p.length;g<_;g++){let v=p[g];v.onLoad&&v.onLoad(f)}}).catch(f=>{let p=Yi[t];if(p===void 0)throw this.manager.itemError(t),f;delete Yi[t];for(let g=0,_=p.length;g<_;g++){let v=p[g];v.onError&&v.onError(f)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}};var Za=class extends un{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Bt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},$a=class extends Za{constructor(t,e,r){super(t,r),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(un.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Bt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},zh=new ke,Um=new W,Nm=new W,Zh=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Gt(512,512),this.map=null,this.mapPass=null,this.matrix=new ke,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new qs,this._frameExtents=new Gt(1,1),this._viewportCount=1,this._viewports=[new Ge(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,r=this.matrix;Um.setFromMatrixPosition(t.matrixWorld),e.position.copy(Um),Nm.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Nm),e.updateMatrixWorld(),zh.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(zh),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(zh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var Ja=class extends Oa{constructor(t=-1,e=1,r=1,a=-1,o=.1,l=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=r,this.bottom=a,this.near=o,this.far=l,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,r,a,o,l){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=r,this.view.offsetY=a,this.view.width=o,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,a=(this.top+this.bottom)/2,o=r-t,l=r+t,u=a+e,h=a-e;if(this.view!==null&&this.view.enabled){let f=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=f*this.view.offsetX,l=o+f*this.view.width,u-=p*this.view.offsetY,h=u-p*this.view.height}this.projectionMatrix.makeOrthographic(o,l,u,h,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},$h=class extends Zh{constructor(){super(new Ja(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ka=class extends Za{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(un.DEFAULT_UP),this.updateMatrix(),this.target=new un,this.shadow=new $h}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var ja=class i extends wr{constructor(t){super(t),this.textures={}}load(t,e,r,a){let o=this,l=new Zs(o.manager);l.setPath(o.path),l.setRequestHeader(o.requestHeader),l.setWithCredentials(o.withCredentials),l.load(t,function(u){try{e(o.parse(JSON.parse(u)))}catch(h){a?a(h):console.error(h),o.manager.itemError(t)}},r,a)}parse(t){let e=this.textures;function r(o){return e[o]===void 0&&console.warn("THREE.MaterialLoader: Undefined texture",o),e[o]}let a=this.createMaterialFromType(t.type);if(t.uuid!==void 0&&(a.uuid=t.uuid),t.name!==void 0&&(a.name=t.name),t.color!==void 0&&a.color!==void 0&&a.color.setHex(t.color),t.roughness!==void 0&&(a.roughness=t.roughness),t.metalness!==void 0&&(a.metalness=t.metalness),t.sheen!==void 0&&(a.sheen=t.sheen),t.sheenColor!==void 0&&(a.sheenColor=new Bt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(a.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&a.emissive!==void 0&&a.emissive.setHex(t.emissive),t.specular!==void 0&&a.specular!==void 0&&a.specular.setHex(t.specular),t.specularIntensity!==void 0&&(a.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&a.specularColor!==void 0&&a.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(a.shininess=t.shininess),t.clearcoat!==void 0&&(a.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(a.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(a.dispersion=t.dispersion),t.iridescence!==void 0&&(a.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(a.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(a.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(a.transmission=t.transmission),t.thickness!==void 0&&(a.thickness=t.thickness),t.attenuationDistance!==void 0&&(a.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&a.attenuationColor!==void 0&&a.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(a.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(a.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(a.fog=t.fog),t.flatShading!==void 0&&(a.flatShading=t.flatShading),t.blending!==void 0&&(a.blending=t.blending),t.combine!==void 0&&(a.combine=t.combine),t.side!==void 0&&(a.side=t.side),t.shadowSide!==void 0&&(a.shadowSide=t.shadowSide),t.opacity!==void 0&&(a.opacity=t.opacity),t.transparent!==void 0&&(a.transparent=t.transparent),t.alphaTest!==void 0&&(a.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(a.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(a.depthFunc=t.depthFunc),t.depthTest!==void 0&&(a.depthTest=t.depthTest),t.depthWrite!==void 0&&(a.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(a.colorWrite=t.colorWrite),t.blendSrc!==void 0&&(a.blendSrc=t.blendSrc),t.blendDst!==void 0&&(a.blendDst=t.blendDst),t.blendEquation!==void 0&&(a.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(a.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(a.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(a.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&a.blendColor!==void 0&&a.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(a.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(a.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(a.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(a.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(a.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(a.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(a.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(a.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(a.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(a.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(a.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(a.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(a.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(a.rotation=t.rotation),t.linewidth!==void 0&&(a.linewidth=t.linewidth),t.dashSize!==void 0&&(a.dashSize=t.dashSize),t.gapSize!==void 0&&(a.gapSize=t.gapSize),t.scale!==void 0&&(a.scale=t.scale),t.polygonOffset!==void 0&&(a.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(a.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(a.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(a.dithering=t.dithering),t.alphaToCoverage!==void 0&&(a.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(a.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(a.forceSinglePass=t.forceSinglePass),t.visible!==void 0&&(a.visible=t.visible),t.toneMapped!==void 0&&(a.toneMapped=t.toneMapped),t.userData!==void 0&&(a.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?a.vertexColors=t.vertexColors>0:a.vertexColors=t.vertexColors),t.uniforms!==void 0)for(let o in t.uniforms){let l=t.uniforms[o];switch(a.uniforms[o]={},l.type){case"t":a.uniforms[o].value=r(l.value);break;case"c":a.uniforms[o].value=new Bt().setHex(l.value);break;case"v2":a.uniforms[o].value=new Gt().fromArray(l.value);break;case"v3":a.uniforms[o].value=new W().fromArray(l.value);break;case"v4":a.uniforms[o].value=new Ge().fromArray(l.value);break;case"m3":a.uniforms[o].value=new ie().fromArray(l.value);break;case"m4":a.uniforms[o].value=new ke().fromArray(l.value);break;default:a.uniforms[o].value=l.value}}if(t.defines!==void 0&&(a.defines=t.defines),t.vertexShader!==void 0&&(a.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(a.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(a.glslVersion=t.glslVersion),t.extensions!==void 0)for(let o in t.extensions)a.extensions[o]=t.extensions[o];if(t.lights!==void 0&&(a.lights=t.lights),t.clipping!==void 0&&(a.clipping=t.clipping),t.size!==void 0&&(a.size=t.size),t.sizeAttenuation!==void 0&&(a.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(a.map=r(t.map)),t.matcap!==void 0&&(a.matcap=r(t.matcap)),t.alphaMap!==void 0&&(a.alphaMap=r(t.alphaMap)),t.bumpMap!==void 0&&(a.bumpMap=r(t.bumpMap)),t.bumpScale!==void 0&&(a.bumpScale=t.bumpScale),t.normalMap!==void 0&&(a.normalMap=r(t.normalMap)),t.normalMapType!==void 0&&(a.normalMapType=t.normalMapType),t.normalScale!==void 0){let o=t.normalScale;Array.isArray(o)===!1&&(o=[o,o]),a.normalScale=new Gt().fromArray(o)}return t.displacementMap!==void 0&&(a.displacementMap=r(t.displacementMap)),t.displacementScale!==void 0&&(a.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(a.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(a.roughnessMap=r(t.roughnessMap)),t.metalnessMap!==void 0&&(a.metalnessMap=r(t.metalnessMap)),t.emissiveMap!==void 0&&(a.emissiveMap=r(t.emissiveMap)),t.emissiveIntensity!==void 0&&(a.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(a.specularMap=r(t.specularMap)),t.specularIntensityMap!==void 0&&(a.specularIntensityMap=r(t.specularIntensityMap)),t.specularColorMap!==void 0&&(a.specularColorMap=r(t.specularColorMap)),t.envMap!==void 0&&(a.envMap=r(t.envMap)),t.envMapRotation!==void 0&&a.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(a.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(a.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(a.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(a.lightMap=r(t.lightMap)),t.lightMapIntensity!==void 0&&(a.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(a.aoMap=r(t.aoMap)),t.aoMapIntensity!==void 0&&(a.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(a.gradientMap=r(t.gradientMap)),t.clearcoatMap!==void 0&&(a.clearcoatMap=r(t.clearcoatMap)),t.clearcoatRoughnessMap!==void 0&&(a.clearcoatRoughnessMap=r(t.clearcoatRoughnessMap)),t.clearcoatNormalMap!==void 0&&(a.clearcoatNormalMap=r(t.clearcoatNormalMap)),t.clearcoatNormalScale!==void 0&&(a.clearcoatNormalScale=new Gt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(a.iridescenceMap=r(t.iridescenceMap)),t.iridescenceThicknessMap!==void 0&&(a.iridescenceThicknessMap=r(t.iridescenceThicknessMap)),t.transmissionMap!==void 0&&(a.transmissionMap=r(t.transmissionMap)),t.thicknessMap!==void 0&&(a.thicknessMap=r(t.thicknessMap)),t.anisotropyMap!==void 0&&(a.anisotropyMap=r(t.anisotropyMap)),t.sheenColorMap!==void 0&&(a.sheenColorMap=r(t.sheenColorMap)),t.sheenRoughnessMap!==void 0&&(a.sheenRoughnessMap=r(t.sheenRoughnessMap)),a}setTextures(t){return this.textures=t,this}createMaterialFromType(t){return i.createMaterialFromType(t)}static createMaterialFromType(t){let e={ShadowMaterial:Xc,SpriteMaterial:kc,RawShaderMaterial:qc,ShaderMaterial:$n,PointsMaterial:Va,MeshPhysicalMaterial:Yc,MeshStandardMaterial:Wa,MeshPhongMaterial:Ys,MeshToonMaterial:Zc,MeshNormalMaterial:$c,MeshLambertMaterial:Jc,MeshDepthMaterial:Xa,MeshDistanceMaterial:qa,MeshBasicMaterial:Gs,MeshMatcapMaterial:Kc,LineDashedMaterial:jc,LineBasicMaterial:Qr,Material:hn};return new e[t]}};var ol=class extends Mn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t,this.index=0}},Qa=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Fm(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=Fm();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};function Fm(){return performance.now()}var yf="\\[\\]\\.:\\/",lE=new RegExp("["+yf+"]","g"),xf="[^"+yf+"]",uE="[^"+yf.replace("\\.","")+"]",hE=/((?:WC+[\/:])*)/.source.replace("WC",xf),fE=/(WCOD+)?/.source.replace("WCOD",uE),dE=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",xf),pE=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",xf),mE=new RegExp("^"+hE+fE+dE+pE+"$"),gE=["material","materials","bones","map"],Jh=class{constructor(t,e,r){let a=r||ze.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,a)}getValue(t,e){this.bind();let r=this._targetGroup.nCachedObjects_,a=this._bindings[r];a!==void 0&&a.getValue(t,e)}setValue(t,e){let r=this._bindings;for(let a=this._targetGroup.nCachedObjects_,o=r.length;a!==o;++a)r[a].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,r=t.length;e!==r;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,r=t.length;e!==r;++e)t[e].unbind()}},ze=class i{constructor(t,e,r){this.path=e,this.parsedPath=r||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,r){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,r):new i(t,e,r)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(lE,"")}static parseTrackName(t){let e=mE.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let r={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},a=r.nodeName&&r.nodeName.lastIndexOf(".");if(a!==void 0&&a!==-1){let o=r.nodeName.substring(a+1);gE.indexOf(o)!==-1&&(r.nodeName=r.nodeName.substring(0,a),r.objectName=o)}if(r.propertyName===null||r.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return r}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let r=t.skeleton.getBoneByName(e);if(r!==void 0)return r}if(t.children){let r=function(o){for(let l=0;l<o.length;l++){let u=o[l];if(u.name===e||u.uuid===e)return u;let h=r(u.children);if(h)return h}return null},a=r(t.children);if(a)return a}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let r=this.resolvedProperty;for(let a=0,o=r.length;a!==o;++a)t[e++]=r[a]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let r=this.resolvedProperty;for(let a=0,o=r.length;a!==o;++a)r[a]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let r=this.resolvedProperty;for(let a=0,o=r.length;a!==o;++a)r[a]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let r=this.resolvedProperty;for(let a=0,o=r.length;a!==o;++a)r[a]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,r=e.objectName,a=e.propertyName,o=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(r){let f=e.objectIndex;switch(r){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let p=0;p<t.length;p++)if(t[p].name===f){f=p;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[r]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[r]}if(f!==void 0){if(t[f]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[f]}}let l=t[a];if(l===void 0){let f=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+f+"."+a+" but it wasn't found.",t);return}let u=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?u=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(u=this.Versioning.MatrixWorldNeedsUpdate);let h=this.BindingType.Direct;if(o!==void 0){if(a==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[o]!==void 0&&(o=t.morphTargetDictionary[o])}h=this.BindingType.ArrayElement,this.resolvedProperty=l,this.propertyIndex=o}else l.fromArray!==void 0&&l.toArray!==void 0?(h=this.BindingType.HasFromToArray,this.resolvedProperty=l):Array.isArray(l)?(h=this.BindingType.EntireArray,this.resolvedProperty=l):this.propertyName=a;this.getValue=this.GetterByBindingType[h],this.setValue=this.SetterByBindingTypeAndVersioning[h][u]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ze.Composite=Jh;ze.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ze.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ze.prototype.GetterByBindingType=[ze.prototype._getValue_direct,ze.prototype._getValue_array,ze.prototype._getValue_arrayElement,ze.prototype._getValue_toArray];ze.prototype.SetterByBindingTypeAndVersioning=[[ze.prototype._setValue_direct,ze.prototype._setValue_direct_setNeedsUpdate,ze.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ze.prototype._setValue_array,ze.prototype._setValue_array_setNeedsUpdate,ze.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ze.prototype._setValue_arrayElement,ze.prototype._setValue_arrayElement_setNeedsUpdate,ze.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ze.prototype._setValue_fromArray,ze.prototype._setValue_fromArray_setNeedsUpdate,ze.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var sR=new Float32Array(1);var $s=class{constructor(t=1,e=0,r=0){this.radius=t,this.phi=e,this.theta=r}set(t,e,r){return this.radius=t,this.phi=e,this.theta=r,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=le(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,r){return this.radius=Math.sqrt(t*t+e*e+r*r),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,r),this.phi=Math.acos(le(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var to=class extends Wc{constructor(t=10,e=10,r=4473924,a=8947848){r=new Bt(r),a=new Bt(a);let o=e/2,l=t/e,u=t/2,h=[],f=[];for(let _=0,v=0,M=-u;_<=e;_++,M+=l){h.push(-u,0,M,u,0,M),h.push(M,0,-u,M,0,u);let T=_===o?r:a;T.toArray(f,v),v+=3,T.toArray(f,v),v+=3,T.toArray(f,v),v+=3,T.toArray(f,v),v+=3}let p=new Mi;p.setAttribute("position",new dn(h,3)),p.setAttribute("color",new dn(f,3));let g=new Qr({vertexColors:!0,toneMapped:!1});super(p,g),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}};var eo=class extends Ti{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}};function Mf(i,t,e,r){let a=_E(r);switch(e){case of:return i*t;case lf:return i*t;case uf:return i*t*2;case hf:return i*t/a.components*a.byteLength;case Sl:return i*t/a.components*a.byteLength;case ff:return i*t*2/a.components*a.byteLength;case bl:return i*t*2/a.components*a.byteLength;case cf:return i*t*3/a.components*a.byteLength;case ui:return i*t*4/a.components*a.byteLength;case El:return i*t*4/a.components*a.byteLength;case so:case ao:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case oo:case co:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Tl:case Cl:return Math.max(i,16)*Math.max(t,8)/4;case wl:case Al:return Math.max(i,8)*Math.max(t,8)/2;case Rl:case Pl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Il:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Dl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ll:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Ul:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Nl:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Fl:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Ol:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Bl:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case zl:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case kl:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Vl:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Hl:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Gl:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Wl:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Xl:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case lo:case ql:case Yl:return Math.ceil(i/4)*Math.ceil(t/4)*16;case df:case Zl:return Math.ceil(i/4)*Math.ceil(t/4)*8;case $l:case Jl:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function _E(i){switch(i){case Pi:case rf:return{byteLength:1,components:1};case Js:case sf:case Ks:return{byteLength:2,components:1};case xl:case Ml:return{byteLength:2,components:4};case Rr:case yl:case li:return{byteLength:4,components:1};case af:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:cl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=cl);function t_(){let i=null,t=!1,e=null,r=null;function a(o,l){e(o,l),r=i.requestAnimationFrame(a)}return{start:function(){t!==!0&&e!==null&&(r=i.requestAnimationFrame(a),t=!0)},stop:function(){i.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(o){e=o},setContext:function(o){i=o}}}function vE(i){let t=new WeakMap;function e(u,h){let f=u.array,p=u.usage,g=f.byteLength,_=i.createBuffer();i.bindBuffer(h,_),i.bufferData(h,f,p),u.onUploadCallback();let v;if(f instanceof Float32Array)v=i.FLOAT;else if(f instanceof Uint16Array)u.isFloat16BufferAttribute?v=i.HALF_FLOAT:v=i.UNSIGNED_SHORT;else if(f instanceof Int16Array)v=i.SHORT;else if(f instanceof Uint32Array)v=i.UNSIGNED_INT;else if(f instanceof Int32Array)v=i.INT;else if(f instanceof Int8Array)v=i.BYTE;else if(f instanceof Uint8Array)v=i.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)v=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:_,type:v,bytesPerElement:f.BYTES_PER_ELEMENT,version:u.version,size:g}}function r(u,h,f){let p=h.array,g=h.updateRanges;if(i.bindBuffer(f,u),g.length===0)i.bufferSubData(f,0,p);else{g.sort((v,M)=>v.start-M.start);let _=0;for(let v=1;v<g.length;v++){let M=g[_],T=g[v];T.start<=M.start+M.count+1?M.count=Math.max(M.count,T.start+T.count-M.start):(++_,g[_]=T)}g.length=_+1;for(let v=0,M=g.length;v<M;v++){let T=g[v];i.bufferSubData(f,T.start*p.BYTES_PER_ELEMENT,p,T.start,T.count)}h.clearUpdateRanges()}h.onUploadCallback()}function a(u){return u.isInterleavedBufferAttribute&&(u=u.data),t.get(u)}function o(u){u.isInterleavedBufferAttribute&&(u=u.data);let h=t.get(u);h&&(i.deleteBuffer(h.buffer),t.delete(u))}function l(u,h){if(u.isInterleavedBufferAttribute&&(u=u.data),u.isGLBufferAttribute){let p=t.get(u);(!p||p.version<u.version)&&t.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}let f=t.get(u);if(f===void 0)t.set(u,e(u,h));else if(f.version<u.version){if(f.size!==u.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(f.buffer,u,h),f.version=u.version}}return{get:a,remove:o,update:l}}var yE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,xE=`#ifdef USE_ALPHAHASH
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
#endif`,ME=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,SE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,bE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,EE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,wE=`#ifdef USE_AOMAP
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
#endif`,TE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,AE=`#ifdef USE_BATCHING
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
#endif`,RE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,PE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,IE=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,DE=`#ifdef USE_IRIDESCENCE
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
#endif`,LE=`#ifdef USE_BUMPMAP
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
#endif`,UE=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,NE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,FE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,OE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,BE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,zE=`#if defined( USE_COLOR_ALPHA )
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
#endif`,HE=`#define PI 3.141592653589793
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
} // validated`,GE=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,WE=`vec3 transformedNormal = objectNormal;
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
#endif`,XE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,qE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,YE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ZE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,$E="gl_FragColor = linearToOutputTexel( gl_FragColor );",JE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,KE=`#ifdef USE_ENVMAP
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
	
#endif`,QE=`#ifdef USE_ENVMAP
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
#endif`,t1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,e1=`#ifdef USE_ENVMAP
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
#endif`,n1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,i1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,r1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,s1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,a1=`#ifdef USE_GRADIENTMAP
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
}`,o1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,c1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,l1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,u1=`uniform bool receiveShadow;
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
#endif`,h1=`#ifdef USE_ENVMAP
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
#endif`,f1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,d1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,p1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,m1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,g1=`PhysicalMaterial material;
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
#endif`,_1=`struct PhysicalMaterial {
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
}`,v1=`
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
#endif`,y1=`#if defined( RE_IndirectDiffuse )
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
#endif`,x1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,M1=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,S1=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,b1=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,E1=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,w1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,T1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,A1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,C1=`#if defined( USE_POINTS_UV )
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
#endif`,R1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,P1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,I1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,D1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,L1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,U1=`#ifdef USE_MORPHTARGETS
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
#endif`,N1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,F1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,O1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,B1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,z1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,k1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,V1=`#ifdef USE_NORMALMAP
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
#endif`,H1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,G1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,W1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,X1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,q1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Y1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Z1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,$1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,J1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,K1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,j1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Q1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,tw=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ew=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,nw=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,iw=`float getShadowMask() {
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
}`,rw=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,sw=`#ifdef USE_SKINNING
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
#endif`,aw=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ow=`#ifdef USE_SKINNING
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
#endif`,cw=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,lw=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,uw=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,hw=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,fw=`#ifdef USE_TRANSMISSION
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
#endif`,dw=`#ifdef USE_TRANSMISSION
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
#endif`,pw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_w=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,vw=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,yw=`uniform sampler2D t2D;
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
}`,xw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Mw=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Sw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bw=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ew=`#include <common>
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
}`,ww=`#if DEPTH_PACKING == 3200
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
}`,Tw=`#define DISTANCE
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
}`,Aw=`#define DISTANCE
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
}`,Cw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Rw=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Pw=`uniform float scale;
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
}`,Iw=`uniform vec3 diffuse;
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
}`,Dw=`#include <common>
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
}`,Lw=`uniform vec3 diffuse;
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
}`,Uw=`#define LAMBERT
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
}`,Nw=`#define LAMBERT
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
}`,Fw=`#define MATCAP
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
}`,Ow=`#define MATCAP
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
}`,Bw=`#define NORMAL
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
}`,zw=`#define NORMAL
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
}`,kw=`#define PHONG
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
}`,Vw=`#define PHONG
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
}`,Hw=`#define STANDARD
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
}`,Gw=`#define STANDARD
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
}`,Ww=`#define TOON
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
}`,Xw=`#define TOON
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
}`,qw=`uniform float size;
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
}`,Yw=`uniform vec3 diffuse;
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
}`,Zw=`#include <common>
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
}`,$w=`uniform vec3 color;
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
}`,Jw=`uniform float rotation;
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
}`,Kw=`uniform vec3 diffuse;
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
}`,ae={alphahash_fragment:yE,alphahash_pars_fragment:xE,alphamap_fragment:ME,alphamap_pars_fragment:SE,alphatest_fragment:bE,alphatest_pars_fragment:EE,aomap_fragment:wE,aomap_pars_fragment:TE,batching_pars_vertex:AE,batching_vertex:CE,begin_vertex:RE,beginnormal_vertex:PE,bsdfs:IE,iridescence_fragment:DE,bumpmap_pars_fragment:LE,clipping_planes_fragment:UE,clipping_planes_pars_fragment:NE,clipping_planes_pars_vertex:FE,clipping_planes_vertex:OE,color_fragment:BE,color_pars_fragment:zE,color_pars_vertex:kE,color_vertex:VE,common:HE,cube_uv_reflection_fragment:GE,defaultnormal_vertex:WE,displacementmap_pars_vertex:XE,displacementmap_vertex:qE,emissivemap_fragment:YE,emissivemap_pars_fragment:ZE,colorspace_fragment:$E,colorspace_pars_fragment:JE,envmap_fragment:KE,envmap_common_pars_fragment:jE,envmap_pars_fragment:QE,envmap_pars_vertex:t1,envmap_physical_pars_fragment:h1,envmap_vertex:e1,fog_vertex:n1,fog_pars_vertex:i1,fog_fragment:r1,fog_pars_fragment:s1,gradientmap_pars_fragment:a1,lightmap_pars_fragment:o1,lights_lambert_fragment:c1,lights_lambert_pars_fragment:l1,lights_pars_begin:u1,lights_toon_fragment:f1,lights_toon_pars_fragment:d1,lights_phong_fragment:p1,lights_phong_pars_fragment:m1,lights_physical_fragment:g1,lights_physical_pars_fragment:_1,lights_fragment_begin:v1,lights_fragment_maps:y1,lights_fragment_end:x1,logdepthbuf_fragment:M1,logdepthbuf_pars_fragment:S1,logdepthbuf_pars_vertex:b1,logdepthbuf_vertex:E1,map_fragment:w1,map_pars_fragment:T1,map_particle_fragment:A1,map_particle_pars_fragment:C1,metalnessmap_fragment:R1,metalnessmap_pars_fragment:P1,morphinstance_vertex:I1,morphcolor_vertex:D1,morphnormal_vertex:L1,morphtarget_pars_vertex:U1,morphtarget_vertex:N1,normal_fragment_begin:F1,normal_fragment_maps:O1,normal_pars_fragment:B1,normal_pars_vertex:z1,normal_vertex:k1,normalmap_pars_fragment:V1,clearcoat_normal_fragment_begin:H1,clearcoat_normal_fragment_maps:G1,clearcoat_pars_fragment:W1,iridescence_pars_fragment:X1,opaque_fragment:q1,packing:Y1,premultiplied_alpha_fragment:Z1,project_vertex:$1,dithering_fragment:J1,dithering_pars_fragment:K1,roughnessmap_fragment:j1,roughnessmap_pars_fragment:Q1,shadowmap_pars_fragment:tw,shadowmap_pars_vertex:ew,shadowmap_vertex:nw,shadowmask_pars_fragment:iw,skinbase_vertex:rw,skinning_pars_vertex:sw,skinning_vertex:aw,skinnormal_vertex:ow,specularmap_fragment:cw,specularmap_pars_fragment:lw,tonemapping_fragment:uw,tonemapping_pars_fragment:hw,transmission_fragment:fw,transmission_pars_fragment:dw,uv_pars_fragment:pw,uv_pars_vertex:mw,uv_vertex:gw,worldpos_vertex:_w,background_vert:vw,background_frag:yw,backgroundCube_vert:xw,backgroundCube_frag:Mw,cube_vert:Sw,cube_frag:bw,depth_vert:Ew,depth_frag:ww,distanceRGBA_vert:Tw,distanceRGBA_frag:Aw,equirect_vert:Cw,equirect_frag:Rw,linedashed_vert:Pw,linedashed_frag:Iw,meshbasic_vert:Dw,meshbasic_frag:Lw,meshlambert_vert:Uw,meshlambert_frag:Nw,meshmatcap_vert:Fw,meshmatcap_frag:Ow,meshnormal_vert:Bw,meshnormal_frag:zw,meshphong_vert:kw,meshphong_frag:Vw,meshphysical_vert:Hw,meshphysical_frag:Gw,meshtoon_vert:Ww,meshtoon_frag:Xw,points_vert:qw,points_frag:Yw,shadow_vert:Zw,shadow_frag:$w,sprite_vert:Jw,sprite_frag:Kw},yt={common:{diffuse:{value:new Bt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ie},alphaMap:{value:null},alphaMapTransform:{value:new ie},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ie}},envmap:{envMap:{value:null},envMapRotation:{value:new ie},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ie}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ie}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ie},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ie},normalScale:{value:new Gt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ie},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ie}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ie}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ie}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Bt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Bt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ie},alphaTest:{value:0},uvTransform:{value:new ie}},sprite:{diffuse:{value:new Bt(16777215)},opacity:{value:1},center:{value:new Gt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ie},alphaMap:{value:null},alphaMapTransform:{value:new ie},alphaTest:{value:0}}},Ii={basic:{uniforms:Sn([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.fog]),vertexShader:ae.meshbasic_vert,fragmentShader:ae.meshbasic_frag},lambert:{uniforms:Sn([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,yt.lights,{emissive:{value:new Bt(0)}}]),vertexShader:ae.meshlambert_vert,fragmentShader:ae.meshlambert_frag},phong:{uniforms:Sn([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,yt.lights,{emissive:{value:new Bt(0)},specular:{value:new Bt(1118481)},shininess:{value:30}}]),vertexShader:ae.meshphong_vert,fragmentShader:ae.meshphong_frag},standard:{uniforms:Sn([yt.common,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.roughnessmap,yt.metalnessmap,yt.fog,yt.lights,{emissive:{value:new Bt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ae.meshphysical_vert,fragmentShader:ae.meshphysical_frag},toon:{uniforms:Sn([yt.common,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.gradientmap,yt.fog,yt.lights,{emissive:{value:new Bt(0)}}]),vertexShader:ae.meshtoon_vert,fragmentShader:ae.meshtoon_frag},matcap:{uniforms:Sn([yt.common,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,{matcap:{value:null}}]),vertexShader:ae.meshmatcap_vert,fragmentShader:ae.meshmatcap_frag},points:{uniforms:Sn([yt.points,yt.fog]),vertexShader:ae.points_vert,fragmentShader:ae.points_frag},dashed:{uniforms:Sn([yt.common,yt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ae.linedashed_vert,fragmentShader:ae.linedashed_frag},depth:{uniforms:Sn([yt.common,yt.displacementmap]),vertexShader:ae.depth_vert,fragmentShader:ae.depth_frag},normal:{uniforms:Sn([yt.common,yt.bumpmap,yt.normalmap,yt.displacementmap,{opacity:{value:1}}]),vertexShader:ae.meshnormal_vert,fragmentShader:ae.meshnormal_frag},sprite:{uniforms:Sn([yt.sprite,yt.fog]),vertexShader:ae.sprite_vert,fragmentShader:ae.sprite_frag},background:{uniforms:{uvTransform:{value:new ie},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ae.background_vert,fragmentShader:ae.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ie}},vertexShader:ae.backgroundCube_vert,fragmentShader:ae.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ae.cube_vert,fragmentShader:ae.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ae.equirect_vert,fragmentShader:ae.equirect_frag},distanceRGBA:{uniforms:Sn([yt.common,yt.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ae.distanceRGBA_vert,fragmentShader:ae.distanceRGBA_frag},shadow:{uniforms:Sn([yt.lights,yt.fog,{color:{value:new Bt(0)},opacity:{value:1}}]),vertexShader:ae.shadow_vert,fragmentShader:ae.shadow_frag}};Ii.physical={uniforms:Sn([Ii.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ie},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ie},clearcoatNormalScale:{value:new Gt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ie},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ie},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ie},sheen:{value:0},sheenColor:{value:new Bt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ie},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ie},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ie},transmissionSamplerSize:{value:new Gt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ie},attenuationDistance:{value:0},attenuationColor:{value:new Bt(0)},specularColor:{value:new Bt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ie},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ie},anisotropyVector:{value:new Gt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ie}}]),vertexShader:ae.meshphysical_vert,fragmentShader:ae.meshphysical_frag};var Kl={r:0,b:0,g:0},as=new Zn,jw=new ke;function Qw(i,t,e,r,a,o,l){let u=new Bt(0),h=o===!0?0:1,f,p,g=null,_=0,v=null;function M(D){let R=D.isScene===!0?D.background:null;return R&&R.isTexture&&(R=(D.backgroundBlurriness>0?e:t).get(R)),R}function T(D){let R=!1,H=M(D);H===null?m(u,h):H&&H.isColor&&(m(H,1),R=!0);let F=i.xr.getEnvironmentBlendMode();F==="additive"?r.buffers.color.setClear(0,0,0,1,l):F==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,l),(i.autoClear||R)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function y(D,R){let H=M(R);H&&(H.isCubeTexture||H.mapping===io)?(p===void 0&&(p=new Nn(new Ws(1,1,1),new $n({name:"BackgroundCubeMaterial",uniforms:ss(Ii.backgroundCube.uniforms),vertexShader:Ii.backgroundCube.vertexShader,fragmentShader:Ii.backgroundCube.fragmentShader,side:Cn,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(F,O,q){this.matrixWorld.copyPosition(q.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(p)),as.copy(R.backgroundRotation),as.x*=-1,as.y*=-1,as.z*=-1,H.isCubeTexture&&H.isRenderTargetTexture===!1&&(as.y*=-1,as.z*=-1),p.material.uniforms.envMap.value=H,p.material.uniforms.flipEnvMap.value=H.isCubeTexture&&H.isRenderTargetTexture===!1?-1:1,p.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(jw.makeRotationFromEuler(as)),p.material.toneMapped=Me.getTransfer(H.colorSpace)!==Ce,(g!==H||_!==H.version||v!==i.toneMapping)&&(p.material.needsUpdate=!0,g=H,_=H.version,v=i.toneMapping),p.layers.enableAll(),D.unshift(p,p.geometry,p.material,0,0,null)):H&&H.isTexture&&(f===void 0&&(f=new Nn(new ts(2,2),new $n({name:"BackgroundMaterial",uniforms:ss(Ii.background.uniforms),vertexShader:Ii.background.vertexShader,fragmentShader:Ii.background.fragmentShader,side:Ji,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),Object.defineProperty(f.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(f)),f.material.uniforms.t2D.value=H,f.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,f.material.toneMapped=Me.getTransfer(H.colorSpace)!==Ce,H.matrixAutoUpdate===!0&&H.updateMatrix(),f.material.uniforms.uvTransform.value.copy(H.matrix),(g!==H||_!==H.version||v!==i.toneMapping)&&(f.material.needsUpdate=!0,g=H,_=H.version,v=i.toneMapping),f.layers.enableAll(),D.unshift(f,f.geometry,f.material,0,0,null))}function m(D,R){D.getRGB(Kl,vf(i)),r.buffers.color.setClear(Kl.r,Kl.g,Kl.b,R,l)}function U(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),f!==void 0&&(f.geometry.dispose(),f.material.dispose(),f=void 0)}return{getClearColor:function(){return u},setClearColor:function(D,R=1){u.set(D),h=R,m(u,h)},getClearAlpha:function(){return h},setClearAlpha:function(D){h=D,m(u,h)},render:T,addToRenderList:y,dispose:U}}function tT(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),r={},a=_(null),o=a,l=!1;function u(A,B,ot,j,it){let ft=!1,et=g(j,ot,B);o!==et&&(o=et,f(o.object)),ft=v(A,j,ot,it),ft&&M(A,j,ot,it),it!==null&&t.update(it,i.ELEMENT_ARRAY_BUFFER),(ft||l)&&(l=!1,R(A,B,ot,j),it!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(it).buffer))}function h(){return i.createVertexArray()}function f(A){return i.bindVertexArray(A)}function p(A){return i.deleteVertexArray(A)}function g(A,B,ot){let j=ot.wireframe===!0,it=r[A.id];it===void 0&&(it={},r[A.id]=it);let ft=it[B.id];ft===void 0&&(ft={},it[B.id]=ft);let et=ft[j];return et===void 0&&(et=_(h()),ft[j]=et),et}function _(A){let B=[],ot=[],j=[];for(let it=0;it<e;it++)B[it]=0,ot[it]=0,j[it]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:ot,attributeDivisors:j,object:A,attributes:{},index:null}}function v(A,B,ot,j){let it=o.attributes,ft=B.attributes,et=0,pt=ot.getAttributes();for(let K in pt)if(pt[K].location>=0){let Tt=it[K],Lt=ft[K];if(Lt===void 0&&(K==="instanceMatrix"&&A.instanceMatrix&&(Lt=A.instanceMatrix),K==="instanceColor"&&A.instanceColor&&(Lt=A.instanceColor)),Tt===void 0||Tt.attribute!==Lt||Lt&&Tt.data!==Lt.data)return!0;et++}return o.attributesNum!==et||o.index!==j}function M(A,B,ot,j){let it={},ft=B.attributes,et=0,pt=ot.getAttributes();for(let K in pt)if(pt[K].location>=0){let Tt=ft[K];Tt===void 0&&(K==="instanceMatrix"&&A.instanceMatrix&&(Tt=A.instanceMatrix),K==="instanceColor"&&A.instanceColor&&(Tt=A.instanceColor));let Lt={};Lt.attribute=Tt,Tt&&Tt.data&&(Lt.data=Tt.data),it[K]=Lt,et++}o.attributes=it,o.attributesNum=et,o.index=j}function T(){let A=o.newAttributes;for(let B=0,ot=A.length;B<ot;B++)A[B]=0}function y(A){m(A,0)}function m(A,B){let ot=o.newAttributes,j=o.enabledAttributes,it=o.attributeDivisors;ot[A]=1,j[A]===0&&(i.enableVertexAttribArray(A),j[A]=1),it[A]!==B&&(i.vertexAttribDivisor(A,B),it[A]=B)}function U(){let A=o.newAttributes,B=o.enabledAttributes;for(let ot=0,j=B.length;ot<j;ot++)B[ot]!==A[ot]&&(i.disableVertexAttribArray(ot),B[ot]=0)}function D(A,B,ot,j,it,ft,et){et===!0?i.vertexAttribIPointer(A,B,ot,it,ft):i.vertexAttribPointer(A,B,ot,j,it,ft)}function R(A,B,ot,j){T();let it=j.attributes,ft=ot.getAttributes(),et=B.defaultAttributeValues;for(let pt in ft){let K=ft[pt];if(K.location>=0){let St=it[pt];if(St===void 0&&(pt==="instanceMatrix"&&A.instanceMatrix&&(St=A.instanceMatrix),pt==="instanceColor"&&A.instanceColor&&(St=A.instanceColor)),St!==void 0){let Tt=St.normalized,Lt=St.itemSize,oe=t.get(St);if(oe===void 0)continue;let Te=oe.buffer,at=oe.type,gt=oe.bytesPerElement,Ut=at===i.INT||at===i.UNSIGNED_INT||St.gpuType===yl;if(St.isInterleavedBufferAttribute){let bt=St.data,Vt=bt.stride,he=St.offset;if(bt.isInstancedInterleavedBuffer){for(let $t=0;$t<K.locationSize;$t++)m(K.location+$t,bt.meshPerAttribute);A.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=bt.meshPerAttribute*bt.count)}else for(let $t=0;$t<K.locationSize;$t++)y(K.location+$t);i.bindBuffer(i.ARRAY_BUFFER,Te);for(let $t=0;$t<K.locationSize;$t++)D(K.location+$t,Lt/K.locationSize,at,Tt,Vt*gt,(he+Lt/K.locationSize*$t)*gt,Ut)}else{if(St.isInstancedBufferAttribute){for(let bt=0;bt<K.locationSize;bt++)m(K.location+bt,St.meshPerAttribute);A.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=St.meshPerAttribute*St.count)}else for(let bt=0;bt<K.locationSize;bt++)y(K.location+bt);i.bindBuffer(i.ARRAY_BUFFER,Te);for(let bt=0;bt<K.locationSize;bt++)D(K.location+bt,Lt/K.locationSize,at,Tt,Lt*gt,Lt/K.locationSize*bt*gt,Ut)}}else if(et!==void 0){let Tt=et[pt];if(Tt!==void 0)switch(Tt.length){case 2:i.vertexAttrib2fv(K.location,Tt);break;case 3:i.vertexAttrib3fv(K.location,Tt);break;case 4:i.vertexAttrib4fv(K.location,Tt);break;default:i.vertexAttrib1fv(K.location,Tt)}}}}U()}function H(){q();for(let A in r){let B=r[A];for(let ot in B){let j=B[ot];for(let it in j)p(j[it].object),delete j[it];delete B[ot]}delete r[A]}}function F(A){if(r[A.id]===void 0)return;let B=r[A.id];for(let ot in B){let j=B[ot];for(let it in j)p(j[it].object),delete j[it];delete B[ot]}delete r[A.id]}function O(A){for(let B in r){let ot=r[B];if(ot[A.id]===void 0)continue;let j=ot[A.id];for(let it in j)p(j[it].object),delete j[it];delete ot[A.id]}}function q(){P(),l=!0,o!==a&&(o=a,f(o.object))}function P(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:u,reset:q,resetDefaultState:P,dispose:H,releaseStatesOfGeometry:F,releaseStatesOfProgram:O,initAttributes:T,enableAttribute:y,disableUnusedAttributes:U}}function eT(i,t,e){let r;function a(f){r=f}function o(f,p){i.drawArrays(r,f,p),e.update(p,r,1)}function l(f,p,g){g!==0&&(i.drawArraysInstanced(r,f,p,g),e.update(p,r,g))}function u(f,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,f,0,p,0,g);let v=0;for(let M=0;M<g;M++)v+=p[M];e.update(v,r,1)}function h(f,p,g,_){if(g===0)return;let v=t.get("WEBGL_multi_draw");if(v===null)for(let M=0;M<f.length;M++)l(f[M],p[M],_[M]);else{v.multiDrawArraysInstancedWEBGL(r,f,0,p,0,_,0,g);let M=0;for(let T=0;T<g;T++)M+=p[T]*_[T];e.update(M,r,1)}}this.setMode=a,this.render=o,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function nT(i,t,e,r){let a;function o(){if(a!==void 0)return a;if(t.has("EXT_texture_filter_anisotropic")===!0){let O=t.get("EXT_texture_filter_anisotropic");a=i.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function l(O){return!(O!==ui&&r.convert(O)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function u(O){let q=O===Ks&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(O!==Pi&&r.convert(O)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&O!==li&&!q)}function h(O){if(O==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let f=e.precision!==void 0?e.precision:"highp",p=h(f);p!==f&&(console.warn("THREE.WebGLRenderer:",f,"not supported, using",p,"instead."),f=p);let g=e.logarithmicDepthBuffer===!0,_=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),v=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),M=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=i.getParameter(i.MAX_TEXTURE_SIZE),y=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),U=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),D=i.getParameter(i.MAX_VARYING_VECTORS),R=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),H=M>0,F=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:h,textureFormatReadable:l,textureTypeReadable:u,precision:f,logarithmicDepthBuffer:g,reverseDepthBuffer:_,maxTextures:v,maxVertexTextures:M,maxTextureSize:T,maxCubemapSize:y,maxAttributes:m,maxVertexUniforms:U,maxVaryings:D,maxFragmentUniforms:R,vertexTextures:H,maxSamples:F}}function iT(i){let t=this,e=null,r=0,a=!1,o=!1,l=new si,u=new ie,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(g,_){let v=g.length!==0||_||r!==0||a;return a=_,r=g.length,v},this.beginShadows=function(){o=!0,p(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(g,_){e=p(g,_,0)},this.setState=function(g,_,v){let M=g.clippingPlanes,T=g.clipIntersection,y=g.clipShadows,m=i.get(g);if(!a||M===null||M.length===0||o&&!y)o?p(null):f();else{let U=o?0:r,D=U*4,R=m.clippingState||null;h.value=R,R=p(M,_,D,v);for(let H=0;H!==D;++H)R[H]=e[H];m.clippingState=R,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=U}};function f(){h.value!==e&&(h.value=e,h.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function p(g,_,v,M){let T=g!==null?g.length:0,y=null;if(T!==0){if(y=h.value,M!==!0||y===null){let m=v+T*4,U=_.matrixWorldInverse;u.getNormalMatrix(U),(y===null||y.length<m)&&(y=new Float32Array(m));for(let D=0,R=v;D!==T;++D,R+=4)l.copy(g[D]).applyMatrix4(U,u),l.normal.toArray(y,R),y[R+3]=l.constant}h.value=y,h.needsUpdate=!0}return t.numPlanes=T,t.numIntersection=0,y}}function rT(i){let t=new WeakMap;function e(l,u){return u===gl?l.mapping=ns:u===_l&&(l.mapping=is),l}function r(l){if(l&&l.isTexture){let u=l.mapping;if(u===gl||u===_l)if(t.has(l)){let h=t.get(l).texture;return e(h,l.mapping)}else{let h=l.image;if(h&&h.height>0){let f=new zc(h.height);return f.fromEquirectangularTexture(i,l),t.set(l,f),l.addEventListener("dispose",a),e(f.texture,l.mapping)}else return null}}return l}function a(l){let u=l.target;u.removeEventListener("dispose",a);let h=t.get(u);h!==void 0&&(t.delete(u),h.dispose())}function o(){t=new WeakMap}return{get:r,dispose:o}}var ta=4,Ig=[.125,.215,.35,.446,.526,.582],ls=20,Sf=new Ja,Dg=new Bt,bf=null,Ef=0,wf=0,Tf=!1,cs=(1+Math.sqrt(5))/2,Qs=1/cs,Lg=[new W(-cs,Qs,0),new W(cs,Qs,0),new W(-Qs,0,cs),new W(Qs,0,cs),new W(0,cs,-Qs),new W(0,cs,Qs),new W(-1,1,-1),new W(1,1,-1),new W(-1,1,1),new W(1,1,1)],sT=new W,tu=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,r=.1,a=100,o={}){let{size:l=256,position:u=sT}=o;bf=this._renderer.getRenderTarget(),Ef=this._renderer.getActiveCubeFace(),wf=this._renderer.getActiveMipmapLevel(),Tf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(l);let h=this._allocateTargets();return h.depthBuffer=!0,this._sceneToCubeUV(t,r,a,h,u),e>0&&this._blur(h,0,0,e),this._applyPMREM(h),this._cleanup(h),h}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Fg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ng(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(bf,Ef,wf),this._renderer.xr.enabled=Tf,t.scissorTest=!1,jl(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ns||t.mapping===is?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),bf=this._renderer.getRenderTarget(),Ef=this._renderer.getActiveCubeFace(),wf=this._renderer.getActiveMipmapLevel(),Tf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let r=e||this._allocateTargets();return this._textureToCubeUV(t,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,r={magFilter:xi,minFilter:xi,generateMipmaps:!1,type:Ks,format:ui,colorSpace:jr,depthBuffer:!1},a=Ug(t,e,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ug(t,e,r);let{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=aT(o)),this._blurMaterial=oT(o,t,e)}return a}_compileMaterial(t){let e=new Nn(this._lodPlanes[0],t);this._renderer.compile(e,Sf)}_sceneToCubeUV(t,e,r,a,o){let h=new Mn(90,1,e,r),f=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],g=this._renderer,_=g.autoClear,v=g.toneMapping;g.getClearColor(Dg),g.toneMapping=ji,g.autoClear=!1;let M=new Gs({name:"PMREM.Background",side:Cn,depthWrite:!1,depthTest:!1}),T=new Nn(new Ws,M),y=!1,m=t.background;m?m.isColor&&(M.color.copy(m),t.background=null,y=!0):(M.color.copy(Dg),y=!0);for(let U=0;U<6;U++){let D=U%3;D===0?(h.up.set(0,f[U],0),h.position.set(o.x,o.y,o.z),h.lookAt(o.x+p[U],o.y,o.z)):D===1?(h.up.set(0,0,f[U]),h.position.set(o.x,o.y,o.z),h.lookAt(o.x,o.y+p[U],o.z)):(h.up.set(0,f[U],0),h.position.set(o.x,o.y,o.z),h.lookAt(o.x,o.y,o.z+p[U]));let R=this._cubeSize;jl(a,D*R,U>2?R:0,R,R),g.setRenderTarget(a),y&&g.render(T,h),g.render(t,h)}T.geometry.dispose(),T.material.dispose(),g.toneMapping=v,g.autoClear=_,t.background=m}_textureToCubeUV(t,e){let r=this._renderer,a=t.mapping===ns||t.mapping===is;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=Fg()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ng());let o=a?this._cubemapMaterial:this._equirectMaterial,l=new Nn(this._lodPlanes[0],o),u=o.uniforms;u.envMap.value=t;let h=this._cubeSize;jl(e,0,0,3*h,2*h),r.setRenderTarget(e),r.render(l,Sf)}_applyPMREM(t){let e=this._renderer,r=e.autoClear;e.autoClear=!1;let a=this._lodPlanes.length;for(let o=1;o<a;o++){let l=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),u=Lg[(a-o-1)%Lg.length];this._blur(t,o-1,o,l,u)}e.autoClear=r}_blur(t,e,r,a,o){let l=this._pingPongRenderTarget;this._halfBlur(t,l,e,r,a,"latitudinal",o),this._halfBlur(l,t,r,r,a,"longitudinal",o)}_halfBlur(t,e,r,a,o,l,u){let h=this._renderer,f=this._blurMaterial;l!=="latitudinal"&&l!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let p=3,g=new Nn(this._lodPlanes[a],f),_=f.uniforms,v=this._sizeLods[r]-1,M=isFinite(o)?Math.PI/(2*v):2*Math.PI/(2*ls-1),T=o/M,y=isFinite(o)?1+Math.floor(p*T):ls;y>ls&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${ls}`);let m=[],U=0;for(let O=0;O<ls;++O){let q=O/T,P=Math.exp(-q*q/2);m.push(P),O===0?U+=P:O<y&&(U+=2*P)}for(let O=0;O<m.length;O++)m[O]=m[O]/U;_.envMap.value=t.texture,_.samples.value=y,_.weights.value=m,_.latitudinal.value=l==="latitudinal",u&&(_.poleAxis.value=u);let{_lodMax:D}=this;_.dTheta.value=M,_.mipInt.value=D-r;let R=this._sizeLods[a],H=3*R*(a>D-ta?a-D+ta:0),F=4*(this._cubeSize-R);jl(e,H,F,3*R,2*R),h.setRenderTarget(e),h.render(g,Sf)}};function aT(i){let t=[],e=[],r=[],a=i,o=i-ta+1+Ig.length;for(let l=0;l<o;l++){let u=Math.pow(2,a);e.push(u);let h=1/u;l>i-ta?h=Ig[l-i+ta-1]:l===0&&(h=0),r.push(h);let f=1/(u-2),p=-f,g=1+f,_=[p,p,g,p,g,g,p,p,g,g,p,g],v=6,M=6,T=3,y=2,m=1,U=new Float32Array(T*M*v),D=new Float32Array(y*M*v),R=new Float32Array(m*M*v);for(let F=0;F<v;F++){let O=F%3*2/3-1,q=F>2?0:-1,P=[O,q,0,O+2/3,q,0,O+2/3,q+1,0,O,q,0,O+2/3,q+1,0,O,q+1,0];U.set(P,T*M*F),D.set(_,y*M*F);let A=[F,F,F,F,F,F];R.set(A,m*M*F)}let H=new Mi;H.setAttribute("position",new Yn(U,T)),H.setAttribute("uv",new Yn(D,y)),H.setAttribute("faceIndex",new Yn(R,m)),t.push(H),a>ta&&a--}return{lodPlanes:t,sizeLods:e,sigmas:r}}function Ug(i,t,e){let r=new Ai(i,t,e);return r.texture.mapping=io,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function jl(i,t,e,r,a){i.viewport.set(t,e,r,a),i.scissor.set(t,e,r,a)}function oT(i,t,e){let r=new Float32Array(ls),a=new W(0,1,0);return new $n({name:"SphericalGaussianBlur",defines:{n:ls,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:Ff(),fragmentShader:`

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
		`,blending:Ki,depthTest:!1,depthWrite:!1})}function Ng(){return new $n({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ff(),fragmentShader:`

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
		`,blending:Ki,depthTest:!1,depthWrite:!1})}function Fg(){return new $n({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ff(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ki,depthTest:!1,depthWrite:!1})}function Ff(){return`

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
	`}function cT(i){let t=new WeakMap,e=null;function r(u){if(u&&u.isTexture){let h=u.mapping,f=h===gl||h===_l,p=h===ns||h===is;if(f||p){let g=t.get(u),_=g!==void 0?g.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==_)return e===null&&(e=new tu(i)),g=f?e.fromEquirectangular(u,g):e.fromCubemap(u,g),g.texture.pmremVersion=u.pmremVersion,t.set(u,g),g.texture;if(g!==void 0)return g.texture;{let v=u.image;return f&&v&&v.height>0||p&&v&&a(v)?(e===null&&(e=new tu(i)),g=f?e.fromEquirectangular(u):e.fromCubemap(u),g.texture.pmremVersion=u.pmremVersion,t.set(u,g),u.addEventListener("dispose",o),g.texture):null}}}return u}function a(u){let h=0,f=6;for(let p=0;p<f;p++)u[p]!==void 0&&h++;return h===f}function o(u){let h=u.target;h.removeEventListener("dispose",o);let f=t.get(h);f!==void 0&&(t.delete(h),f.dispose())}function l(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:r,dispose:l}}function lT(i){let t={};function e(r){if(t[r]!==void 0)return t[r];let a;switch(r){case"WEBGL_depth_texture":a=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=i.getExtension(r)}return t[r]=a,a}return{has:function(r){return e(r)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(r){let a=e(r);return a===null&&Ir("THREE.WebGLRenderer: "+r+" extension not supported."),a}}}function uT(i,t,e,r){let a={},o=new WeakMap;function l(g){let _=g.target;_.index!==null&&t.remove(_.index);for(let M in _.attributes)t.remove(_.attributes[M]);_.removeEventListener("dispose",l),delete a[_.id];let v=o.get(_);v&&(t.remove(v),o.delete(_)),r.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,e.memory.geometries--}function u(g,_){return a[_.id]===!0||(_.addEventListener("dispose",l),a[_.id]=!0,e.memory.geometries++),_}function h(g){let _=g.attributes;for(let v in _)t.update(_[v],i.ARRAY_BUFFER)}function f(g){let _=[],v=g.index,M=g.attributes.position,T=0;if(v!==null){let U=v.array;T=v.version;for(let D=0,R=U.length;D<R;D+=3){let H=U[D+0],F=U[D+1],O=U[D+2];_.push(H,F,F,O,O,H)}}else if(M!==void 0){let U=M.array;T=M.version;for(let D=0,R=U.length/3-1;D<R;D+=3){let H=D+0,F=D+1,O=D+2;_.push(H,F,F,O,O,H)}}else return;let y=new(_f(_)?Fa:Na)(_,1);y.version=T;let m=o.get(g);m&&t.remove(m),o.set(g,y)}function p(g){let _=o.get(g);if(_){let v=g.index;v!==null&&_.version<v.version&&f(g)}else f(g);return o.get(g)}return{get:u,update:h,getWireframeAttribute:p}}function hT(i,t,e){let r;function a(_){r=_}let o,l;function u(_){o=_.type,l=_.bytesPerElement}function h(_,v){i.drawElements(r,v,o,_*l),e.update(v,r,1)}function f(_,v,M){M!==0&&(i.drawElementsInstanced(r,v,o,_*l,M),e.update(v,r,M))}function p(_,v,M){if(M===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,v,0,o,_,0,M);let y=0;for(let m=0;m<M;m++)y+=v[m];e.update(y,r,1)}function g(_,v,M,T){if(M===0)return;let y=t.get("WEBGL_multi_draw");if(y===null)for(let m=0;m<_.length;m++)f(_[m]/l,v[m],T[m]);else{y.multiDrawElementsInstancedWEBGL(r,v,0,o,_,0,T,0,M);let m=0;for(let U=0;U<M;U++)m+=v[U]*T[U];e.update(m,r,1)}}this.setMode=a,this.setIndex=u,this.render=h,this.renderInstances=f,this.renderMultiDraw=p,this.renderMultiDrawInstances=g}function fT(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function r(o,l,u){switch(e.calls++,l){case i.TRIANGLES:e.triangles+=u*(o/3);break;case i.LINES:e.lines+=u*(o/2);break;case i.LINE_STRIP:e.lines+=u*(o-1);break;case i.LINE_LOOP:e.lines+=u*o;break;case i.POINTS:e.points+=u*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",l);break}}function a(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:a,update:r}}function dT(i,t,e){let r=new WeakMap,a=new Ge;function o(l,u,h){let f=l.morphTargetInfluences,p=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,g=p!==void 0?p.length:0,_=r.get(u);if(_===void 0||_.count!==g){let P=function(){O.dispose(),r.delete(u),u.removeEventListener("dispose",P)};_!==void 0&&_.texture.dispose();let v=u.morphAttributes.position!==void 0,M=u.morphAttributes.normal!==void 0,T=u.morphAttributes.color!==void 0,y=u.morphAttributes.position||[],m=u.morphAttributes.normal||[],U=u.morphAttributes.color||[],D=0;v===!0&&(D=1),M===!0&&(D=2),T===!0&&(D=3);let R=u.attributes.position.count*D,H=1;R>t.maxTextureSize&&(H=Math.ceil(R/t.maxTextureSize),R=t.maxTextureSize);let F=new Float32Array(R*H*4*g),O=new La(F,R,H,g);O.type=li,O.needsUpdate=!0;let q=D*4;for(let A=0;A<g;A++){let B=y[A],ot=m[A],j=U[A],it=R*H*4*A;for(let ft=0;ft<B.count;ft++){let et=ft*q;v===!0&&(a.fromBufferAttribute(B,ft),F[it+et+0]=a.x,F[it+et+1]=a.y,F[it+et+2]=a.z,F[it+et+3]=0),M===!0&&(a.fromBufferAttribute(ot,ft),F[it+et+4]=a.x,F[it+et+5]=a.y,F[it+et+6]=a.z,F[it+et+7]=0),T===!0&&(a.fromBufferAttribute(j,ft),F[it+et+8]=a.x,F[it+et+9]=a.y,F[it+et+10]=a.z,F[it+et+11]=j.itemSize===4?a.w:1)}}_={count:g,texture:O,size:new Gt(R,H)},r.set(u,_),u.addEventListener("dispose",P)}if(l.isInstancedMesh===!0&&l.morphTexture!==null)h.getUniforms().setValue(i,"morphTexture",l.morphTexture,e);else{let v=0;for(let T=0;T<f.length;T++)v+=f[T];let M=u.morphTargetsRelative?1:1-v;h.getUniforms().setValue(i,"morphTargetBaseInfluence",M),h.getUniforms().setValue(i,"morphTargetInfluences",f)}h.getUniforms().setValue(i,"morphTargetsTexture",_.texture,e),h.getUniforms().setValue(i,"morphTargetsTextureSize",_.size)}return{update:o}}function pT(i,t,e,r){let a=new WeakMap;function o(h){let f=r.render.frame,p=h.geometry,g=t.get(h,p);if(a.get(g)!==f&&(t.update(g),a.set(g,f)),h.isInstancedMesh&&(h.hasEventListener("dispose",u)===!1&&h.addEventListener("dispose",u),a.get(h)!==f&&(e.update(h.instanceMatrix,i.ARRAY_BUFFER),h.instanceColor!==null&&e.update(h.instanceColor,i.ARRAY_BUFFER),a.set(h,f))),h.isSkinnedMesh){let _=h.skeleton;a.get(_)!==f&&(_.update(),a.set(_,f))}return g}function l(){a=new WeakMap}function u(h){let f=h.target;f.removeEventListener("dispose",u),e.remove(f.instanceMatrix),f.instanceColor!==null&&e.remove(f.instanceColor)}return{update:o,dispose:l}}var e_=new pn,Og=new Ga(1,1),n_=new La,i_=new Oc,r_=new Ba,Bg=[],zg=[],kg=new Float32Array(16),Vg=new Float32Array(9),Hg=new Float32Array(4);function na(i,t,e){let r=i[0];if(r<=0||r>0)return i;let a=t*e,o=Bg[a];if(o===void 0&&(o=new Float32Array(a),Bg[a]=o),t!==0){r.toArray(o,0);for(let l=1,u=0;l!==t;++l)u+=e,i[l].toArray(o,u)}return o}function tn(i,t){if(i.length!==t.length)return!1;for(let e=0,r=i.length;e<r;e++)if(i[e]!==t[e])return!1;return!0}function en(i,t){for(let e=0,r=t.length;e<r;e++)i[e]=t[e]}function nu(i,t){let e=zg[t];e===void 0&&(e=new Int32Array(t),zg[t]=e);for(let r=0;r!==t;++r)e[r]=i.allocateTextureUnit();return e}function mT(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function gT(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(tn(e,t))return;i.uniform2fv(this.addr,t),en(e,t)}}function _T(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(tn(e,t))return;i.uniform3fv(this.addr,t),en(e,t)}}function vT(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(tn(e,t))return;i.uniform4fv(this.addr,t),en(e,t)}}function yT(i,t){let e=this.cache,r=t.elements;if(r===void 0){if(tn(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),en(e,t)}else{if(tn(e,r))return;Hg.set(r),i.uniformMatrix2fv(this.addr,!1,Hg),en(e,r)}}function xT(i,t){let e=this.cache,r=t.elements;if(r===void 0){if(tn(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),en(e,t)}else{if(tn(e,r))return;Vg.set(r),i.uniformMatrix3fv(this.addr,!1,Vg),en(e,r)}}function MT(i,t){let e=this.cache,r=t.elements;if(r===void 0){if(tn(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),en(e,t)}else{if(tn(e,r))return;kg.set(r),i.uniformMatrix4fv(this.addr,!1,kg),en(e,r)}}function ST(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function bT(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(tn(e,t))return;i.uniform2iv(this.addr,t),en(e,t)}}function ET(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(tn(e,t))return;i.uniform3iv(this.addr,t),en(e,t)}}function wT(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(tn(e,t))return;i.uniform4iv(this.addr,t),en(e,t)}}function TT(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function AT(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(tn(e,t))return;i.uniform2uiv(this.addr,t),en(e,t)}}function CT(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(tn(e,t))return;i.uniform3uiv(this.addr,t),en(e,t)}}function RT(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(tn(e,t))return;i.uniform4uiv(this.addr,t),en(e,t)}}function PT(i,t,e){let r=this.cache,a=e.allocateTextureUnit();r[0]!==a&&(i.uniform1i(this.addr,a),r[0]=a);let o;this.type===i.SAMPLER_2D_SHADOW?(Og.compareFunction=pf,o=Og):o=e_,e.setTexture2D(t||o,a)}function IT(i,t,e){let r=this.cache,a=e.allocateTextureUnit();r[0]!==a&&(i.uniform1i(this.addr,a),r[0]=a),e.setTexture3D(t||i_,a)}function DT(i,t,e){let r=this.cache,a=e.allocateTextureUnit();r[0]!==a&&(i.uniform1i(this.addr,a),r[0]=a),e.setTextureCube(t||r_,a)}function LT(i,t,e){let r=this.cache,a=e.allocateTextureUnit();r[0]!==a&&(i.uniform1i(this.addr,a),r[0]=a),e.setTexture2DArray(t||n_,a)}function UT(i){switch(i){case 5126:return mT;case 35664:return gT;case 35665:return _T;case 35666:return vT;case 35674:return yT;case 35675:return xT;case 35676:return MT;case 5124:case 35670:return ST;case 35667:case 35671:return bT;case 35668:case 35672:return ET;case 35669:case 35673:return wT;case 5125:return TT;case 36294:return AT;case 36295:return CT;case 36296:return RT;case 35678:case 36198:case 36298:case 36306:case 35682:return PT;case 35679:case 36299:case 36307:return IT;case 35680:case 36300:case 36308:case 36293:return DT;case 36289:case 36303:case 36311:case 36292:return LT}}function NT(i,t){i.uniform1fv(this.addr,t)}function FT(i,t){let e=na(t,this.size,2);i.uniform2fv(this.addr,e)}function OT(i,t){let e=na(t,this.size,3);i.uniform3fv(this.addr,e)}function BT(i,t){let e=na(t,this.size,4);i.uniform4fv(this.addr,e)}function zT(i,t){let e=na(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function kT(i,t){let e=na(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function VT(i,t){let e=na(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function HT(i,t){i.uniform1iv(this.addr,t)}function GT(i,t){i.uniform2iv(this.addr,t)}function WT(i,t){i.uniform3iv(this.addr,t)}function XT(i,t){i.uniform4iv(this.addr,t)}function qT(i,t){i.uniform1uiv(this.addr,t)}function YT(i,t){i.uniform2uiv(this.addr,t)}function ZT(i,t){i.uniform3uiv(this.addr,t)}function $T(i,t){i.uniform4uiv(this.addr,t)}function JT(i,t,e){let r=this.cache,a=t.length,o=nu(e,a);tn(r,o)||(i.uniform1iv(this.addr,o),en(r,o));for(let l=0;l!==a;++l)e.setTexture2D(t[l]||e_,o[l])}function KT(i,t,e){let r=this.cache,a=t.length,o=nu(e,a);tn(r,o)||(i.uniform1iv(this.addr,o),en(r,o));for(let l=0;l!==a;++l)e.setTexture3D(t[l]||i_,o[l])}function jT(i,t,e){let r=this.cache,a=t.length,o=nu(e,a);tn(r,o)||(i.uniform1iv(this.addr,o),en(r,o));for(let l=0;l!==a;++l)e.setTextureCube(t[l]||r_,o[l])}function QT(i,t,e){let r=this.cache,a=t.length,o=nu(e,a);tn(r,o)||(i.uniform1iv(this.addr,o),en(r,o));for(let l=0;l!==a;++l)e.setTexture2DArray(t[l]||n_,o[l])}function tA(i){switch(i){case 5126:return NT;case 35664:return FT;case 35665:return OT;case 35666:return BT;case 35674:return zT;case 35675:return kT;case 35676:return VT;case 5124:case 35670:return HT;case 35667:case 35671:return GT;case 35668:case 35672:return WT;case 35669:case 35673:return XT;case 5125:return qT;case 36294:return YT;case 36295:return ZT;case 36296:return $T;case 35678:case 36198:case 36298:case 36306:case 35682:return JT;case 35679:case 36299:case 36307:return KT;case 35680:case 36300:case 36308:case 36293:return jT;case 36289:case 36303:case 36311:case 36292:return QT}}var Cf=class{constructor(t,e,r){this.id=t,this.addr=r,this.cache=[],this.type=e.type,this.setValue=UT(e.type)}},Rf=class{constructor(t,e,r){this.id=t,this.addr=r,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=tA(e.type)}},Pf=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,r){let a=this.seq;for(let o=0,l=a.length;o!==l;++o){let u=a[o];u.setValue(t,e[u.id],r)}}},Af=/(\w+)(\])?(\[|\.)?/g;function Gg(i,t){i.seq.push(t),i.map[t.id]=t}function eA(i,t,e){let r=i.name,a=r.length;for(Af.lastIndex=0;;){let o=Af.exec(r),l=Af.lastIndex,u=o[1],h=o[2]==="]",f=o[3];if(h&&(u=u|0),f===void 0||f==="["&&l+2===a){Gg(e,f===void 0?new Cf(u,i,t):new Rf(u,i,t));break}else{let g=e.map[u];g===void 0&&(g=new Pf(u),Gg(e,g)),e=g}}}var ea=class{constructor(t,e){this.seq=[],this.map={};let r=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<r;++a){let o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);eA(o,l,this)}}setValue(t,e,r,a){let o=this.map[e];o!==void 0&&o.setValue(t,r,a)}setOptional(t,e,r){let a=e[r];a!==void 0&&this.setValue(t,r,a)}static upload(t,e,r,a){for(let o=0,l=e.length;o!==l;++o){let u=e[o],h=r[u.id];h.needsUpdate!==!1&&u.setValue(t,h.value,a)}}static seqWithValue(t,e){let r=[];for(let a=0,o=t.length;a!==o;++a){let l=t[a];l.id in e&&r.push(l)}return r}};function Wg(i,t,e){let r=i.createShader(t);return i.shaderSource(r,e),i.compileShader(r),r}var nA=37297,iA=0;function rA(i,t){let e=i.split(`
`),r=[],a=Math.max(t-6,0),o=Math.min(t+6,e.length);for(let l=a;l<o;l++){let u=l+1;r.push(`${u===t?">":" "} ${u}: ${e[l]}`)}return r.join(`
`)}var Xg=new ie;function sA(i){Me._getMatrix(Xg,Me.workingColorSpace,i);let t=`mat3( ${Xg.elements.map(e=>e.toFixed(4))} )`;switch(Me.getTransfer(i)){case Pa:return[t,"LinearTransferOETF"];case Ce:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function qg(i,t,e){let r=i.getShaderParameter(t,i.COMPILE_STATUS),a=i.getShaderInfoLog(t).trim();if(r&&a==="")return"";let o=/ERROR: 0:(\d+)/.exec(a);if(o){let l=parseInt(o[1]);return e.toUpperCase()+`

`+a+`

`+rA(i.getShaderSource(t),l)}else return a}function aA(i,t){let e=sA(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function oA(i,t){let e;switch(t){case ag:e="Linear";break;case og:e="Reinhard";break;case cg:e="Cineon";break;case lg:e="ACESFilmic";break;case hg:e="AgX";break;case fg:e="Neutral";break;case ug:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Ql=new W;function cA(){Me.getLuminanceCoefficients(Ql);let i=Ql.x.toFixed(4),t=Ql.y.toFixed(4),e=Ql.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function lA(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ho).join(`
`)}function uA(i){let t=[];for(let e in i){let r=i[e];r!==!1&&t.push("#define "+e+" "+r)}return t.join(`
`)}function hA(i,t){let e={},r=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let a=0;a<r;a++){let o=i.getActiveAttrib(t,a),l=o.name,u=1;o.type===i.FLOAT_MAT2&&(u=2),o.type===i.FLOAT_MAT3&&(u=3),o.type===i.FLOAT_MAT4&&(u=4),e[l]={type:o.type,location:i.getAttribLocation(t,l),locationSize:u}}return e}function ho(i){return i!==""}function Yg(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Zg(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var fA=/^[ \t]*#include +<([\w\d./]+)>/gm;function If(i){return i.replace(fA,pA)}var dA=new Map;function pA(i,t){let e=ae[t];if(e===void 0){let r=dA.get(t);if(r!==void 0)e=ae[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,r);else throw new Error("Can not resolve #include <"+t+">")}return If(e)}var mA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function $g(i){return i.replace(mA,gA)}function gA(i,t,e,r){let a="";for(let o=parseInt(t);o<parseInt(e);o++)a+=r.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return a}function Jg(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function _A(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===jh?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===zm?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Ci&&(t="SHADOWMAP_TYPE_VSM"),t}function vA(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ns:case is:t="ENVMAP_TYPE_CUBE";break;case io:t="ENVMAP_TYPE_CUBE_UV";break}return t}function yA(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case is:t="ENVMAP_MODE_REFRACTION";break}return t}function xA(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case no:t="ENVMAP_BLENDING_MULTIPLY";break;case rg:t="ENVMAP_BLENDING_MIX";break;case sg:t="ENVMAP_BLENDING_ADD";break}return t}function MA(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:r,maxMip:e}}function SA(i,t,e,r){let a=i.getContext(),o=e.defines,l=e.vertexShader,u=e.fragmentShader,h=_A(e),f=vA(e),p=yA(e),g=xA(e),_=MA(e),v=lA(e),M=uA(o),T=a.createProgram(),y,m,U=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(y=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,M].filter(ho).join(`
`),y.length>0&&(y+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,M].filter(ho).join(`
`),m.length>0&&(m+=`
`)):(y=[Jg(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,M,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+p:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+h:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ho).join(`
`),m=[Jg(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,M,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+f:"",e.envMap?"#define "+p:"",e.envMap?"#define "+g:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+h:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ji?"#define TONE_MAPPING":"",e.toneMapping!==ji?ae.tonemapping_pars_fragment:"",e.toneMapping!==ji?oA("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ae.colorspace_pars_fragment,aA("linearToOutputTexel",e.outputColorSpace),cA(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ho).join(`
`)),l=If(l),l=Yg(l,e),l=Zg(l,e),u=If(u),u=Yg(u,e),u=Zg(u,e),l=$g(l),u=$g(u),e.isRawShaderMaterial!==!0&&(U=`#version 300 es
`,y=[v,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,m=["#define varying in",e.glslVersion===mf?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===mf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let D=U+y+l,R=U+m+u,H=Wg(a,a.VERTEX_SHADER,D),F=Wg(a,a.FRAGMENT_SHADER,R);a.attachShader(T,H),a.attachShader(T,F),e.index0AttributeName!==void 0?a.bindAttribLocation(T,0,e.index0AttributeName):e.morphTargets===!0&&a.bindAttribLocation(T,0,"position"),a.linkProgram(T);function O(B){if(i.debug.checkShaderErrors){let ot=a.getProgramInfoLog(T).trim(),j=a.getShaderInfoLog(H).trim(),it=a.getShaderInfoLog(F).trim(),ft=!0,et=!0;if(a.getProgramParameter(T,a.LINK_STATUS)===!1)if(ft=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(a,T,H,F);else{let pt=qg(a,H,"vertex"),K=qg(a,F,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(T,a.VALIDATE_STATUS)+`

Material Name: `+B.name+`
Material Type: `+B.type+`

Program Info Log: `+ot+`
`+pt+`
`+K)}else ot!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ot):(j===""||it==="")&&(et=!1);et&&(B.diagnostics={runnable:ft,programLog:ot,vertexShader:{log:j,prefix:y},fragmentShader:{log:it,prefix:m}})}a.deleteShader(H),a.deleteShader(F),q=new ea(a,T),P=hA(a,T)}let q;this.getUniforms=function(){return q===void 0&&O(this),q};let P;this.getAttributes=function(){return P===void 0&&O(this),P};let A=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=a.getProgramParameter(T,nA)),A},this.destroy=function(){r.releaseStatesOfProgram(this),a.deleteProgram(T),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=iA++,this.cacheKey=t,this.usedTimes=1,this.program=T,this.vertexShader=H,this.fragmentShader=F,this}var bA=0,Df=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,r=t.fragmentShader,a=this._getShaderStage(e),o=this._getShaderStage(r),l=this._getShaderCacheForMaterial(t);return l.has(a)===!1&&(l.add(a),a.usedTimes++),l.has(o)===!1&&(l.add(o),o.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let r of e)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,r=e.get(t);return r===void 0&&(r=new Set,e.set(t,r)),r}_getShaderStage(t){let e=this.shaderCache,r=e.get(t);return r===void 0&&(r=new Lf(t),e.set(t,r)),r}},Lf=class{constructor(t){this.id=bA++,this.code=t,this.usedTimes=0}};function EA(i,t,e,r,a,o,l){let u=new Ua,h=new Df,f=new Set,p=[],g=a.logarithmicDepthBuffer,_=a.vertexTextures,v=a.precision,M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(P){return f.add(P),P===0?"uv":`uv${P}`}function y(P,A,B,ot,j){let it=ot.fog,ft=j.geometry,et=P.isMeshStandardMaterial?ot.environment:null,pt=(P.isMeshStandardMaterial?e:t).get(P.envMap||et),K=pt&&pt.mapping===io?pt.image.height:null,St=M[P.type];P.precision!==null&&(v=a.getMaxPrecision(P.precision),v!==P.precision&&console.warn("THREE.WebGLProgram.getParameters:",P.precision,"not supported, using",v,"instead."));let Tt=ft.morphAttributes.position||ft.morphAttributes.normal||ft.morphAttributes.color,Lt=Tt!==void 0?Tt.length:0,oe=0;ft.morphAttributes.position!==void 0&&(oe=1),ft.morphAttributes.normal!==void 0&&(oe=2),ft.morphAttributes.color!==void 0&&(oe=3);let Te,at,gt,Ut;if(St){let be=Ii[St];Te=be.vertexShader,at=be.fragmentShader}else Te=P.vertexShader,at=P.fragmentShader,h.update(P),gt=h.getVertexShaderID(P),Ut=h.getFragmentShaderID(P);let bt=i.getRenderTarget(),Vt=i.state.buffers.depth.getReversed(),he=j.isInstancedMesh===!0,$t=j.isBatchedMesh===!0,Ne=!!P.map,Re=!!P.matcap,fe=!!pt,L=!!P.aoMap,rn=!!P.lightMap,me=!!P.bumpMap,jt=!!P.normalMap,zt=!!P.displacementMap,De=!!P.emissiveMap,Ft=!!P.metalnessMap,C=!!P.roughnessMap,S=P.anisotropy>0,Y=P.clearcoat>0,lt=P.dispersion>0,ut=P.iridescence>0,rt=P.sheen>0,Nt=P.transmission>0,_t=S&&!!P.anisotropyMap,At=Y&&!!P.clearcoatMap,de=Y&&!!P.clearcoatNormalMap,mt=Y&&!!P.clearcoatRoughnessMap,Rt=ut&&!!P.iridescenceMap,Wt=ut&&!!P.iridescenceThicknessMap,Zt=rt&&!!P.sheenColorMap,Pt=rt&&!!P.sheenRoughnessMap,ue=!!P.specularMap,Qt=!!P.specularColorMap,Pe=!!P.specularIntensityMap,z=Nt&&!!P.transmissionMap,xt=Nt&&!!P.thicknessMap,Q=!!P.gradientMap,ct=!!P.alphaMap,wt=P.alphaTest>0,Et=!!P.alphaHash,ee=!!P.extensions,Ve=ji;P.toneMapped&&(bt===null||bt.isXRRenderTarget===!0)&&(Ve=i.toneMapping);let Je={shaderID:St,shaderType:P.type,shaderName:P.name,vertexShader:Te,fragmentShader:at,defines:P.defines,customVertexShaderID:gt,customFragmentShaderID:Ut,isRawShaderMaterial:P.isRawShaderMaterial===!0,glslVersion:P.glslVersion,precision:v,batching:$t,batchingColor:$t&&j._colorsTexture!==null,instancing:he,instancingColor:he&&j.instanceColor!==null,instancingMorph:he&&j.morphTexture!==null,supportsVertexTextures:_,outputColorSpace:bt===null?i.outputColorSpace:bt.isXRRenderTarget===!0?bt.texture.colorSpace:jr,alphaToCoverage:!!P.alphaToCoverage,map:Ne,matcap:Re,envMap:fe,envMapMode:fe&&pt.mapping,envMapCubeUVHeight:K,aoMap:L,lightMap:rn,bumpMap:me,normalMap:jt,displacementMap:_&&zt,emissiveMap:De,normalMapObjectSpace:jt&&P.normalMapType===gg,normalMapTangentSpace:jt&&P.normalMapType===Pr,metalnessMap:Ft,roughnessMap:C,anisotropy:S,anisotropyMap:_t,clearcoat:Y,clearcoatMap:At,clearcoatNormalMap:de,clearcoatRoughnessMap:mt,dispersion:lt,iridescence:ut,iridescenceMap:Rt,iridescenceThicknessMap:Wt,sheen:rt,sheenColorMap:Zt,sheenRoughnessMap:Pt,specularMap:ue,specularColorMap:Qt,specularIntensityMap:Pe,transmission:Nt,transmissionMap:z,thicknessMap:xt,gradientMap:Q,opaque:P.transparent===!1&&P.blending===$r&&P.alphaToCoverage===!1,alphaMap:ct,alphaTest:wt,alphaHash:Et,combine:P.combine,mapUv:Ne&&T(P.map.channel),aoMapUv:L&&T(P.aoMap.channel),lightMapUv:rn&&T(P.lightMap.channel),bumpMapUv:me&&T(P.bumpMap.channel),normalMapUv:jt&&T(P.normalMap.channel),displacementMapUv:zt&&T(P.displacementMap.channel),emissiveMapUv:De&&T(P.emissiveMap.channel),metalnessMapUv:Ft&&T(P.metalnessMap.channel),roughnessMapUv:C&&T(P.roughnessMap.channel),anisotropyMapUv:_t&&T(P.anisotropyMap.channel),clearcoatMapUv:At&&T(P.clearcoatMap.channel),clearcoatNormalMapUv:de&&T(P.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:mt&&T(P.clearcoatRoughnessMap.channel),iridescenceMapUv:Rt&&T(P.iridescenceMap.channel),iridescenceThicknessMapUv:Wt&&T(P.iridescenceThicknessMap.channel),sheenColorMapUv:Zt&&T(P.sheenColorMap.channel),sheenRoughnessMapUv:Pt&&T(P.sheenRoughnessMap.channel),specularMapUv:ue&&T(P.specularMap.channel),specularColorMapUv:Qt&&T(P.specularColorMap.channel),specularIntensityMapUv:Pe&&T(P.specularIntensityMap.channel),transmissionMapUv:z&&T(P.transmissionMap.channel),thicknessMapUv:xt&&T(P.thicknessMap.channel),alphaMapUv:ct&&T(P.alphaMap.channel),vertexTangents:!!ft.attributes.tangent&&(jt||S),vertexColors:P.vertexColors,vertexAlphas:P.vertexColors===!0&&!!ft.attributes.color&&ft.attributes.color.itemSize===4,pointsUvs:j.isPoints===!0&&!!ft.attributes.uv&&(Ne||ct),fog:!!it,useFog:P.fog===!0,fogExp2:!!it&&it.isFogExp2,flatShading:P.flatShading===!0,sizeAttenuation:P.sizeAttenuation===!0,logarithmicDepthBuffer:g,reverseDepthBuffer:Vt,skinning:j.isSkinnedMesh===!0,morphTargets:ft.morphAttributes.position!==void 0,morphNormals:ft.morphAttributes.normal!==void 0,morphColors:ft.morphAttributes.color!==void 0,morphTargetsCount:Lt,morphTextureStride:oe,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:P.dithering,shadowMapEnabled:i.shadowMap.enabled&&B.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ve,decodeVideoTexture:Ne&&P.map.isVideoTexture===!0&&Me.getTransfer(P.map.colorSpace)===Ce,decodeVideoTextureEmissive:De&&P.emissiveMap.isVideoTexture===!0&&Me.getTransfer(P.emissiveMap.colorSpace)===Ce,premultipliedAlpha:P.premultipliedAlpha,doubleSided:P.side===Ri,flipSided:P.side===Cn,useDepthPacking:P.depthPacking>=0,depthPacking:P.depthPacking||0,index0AttributeName:P.index0AttributeName,extensionClipCullDistance:ee&&P.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ee&&P.extensions.multiDraw===!0||$t)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:P.customProgramCacheKey()};return Je.vertexUv1s=f.has(1),Je.vertexUv2s=f.has(2),Je.vertexUv3s=f.has(3),f.clear(),Je}function m(P){let A=[];if(P.shaderID?A.push(P.shaderID):(A.push(P.customVertexShaderID),A.push(P.customFragmentShaderID)),P.defines!==void 0)for(let B in P.defines)A.push(B),A.push(P.defines[B]);return P.isRawShaderMaterial===!1&&(U(A,P),D(A,P),A.push(i.outputColorSpace)),A.push(P.customProgramCacheKey),A.join()}function U(P,A){P.push(A.precision),P.push(A.outputColorSpace),P.push(A.envMapMode),P.push(A.envMapCubeUVHeight),P.push(A.mapUv),P.push(A.alphaMapUv),P.push(A.lightMapUv),P.push(A.aoMapUv),P.push(A.bumpMapUv),P.push(A.normalMapUv),P.push(A.displacementMapUv),P.push(A.emissiveMapUv),P.push(A.metalnessMapUv),P.push(A.roughnessMapUv),P.push(A.anisotropyMapUv),P.push(A.clearcoatMapUv),P.push(A.clearcoatNormalMapUv),P.push(A.clearcoatRoughnessMapUv),P.push(A.iridescenceMapUv),P.push(A.iridescenceThicknessMapUv),P.push(A.sheenColorMapUv),P.push(A.sheenRoughnessMapUv),P.push(A.specularMapUv),P.push(A.specularColorMapUv),P.push(A.specularIntensityMapUv),P.push(A.transmissionMapUv),P.push(A.thicknessMapUv),P.push(A.combine),P.push(A.fogExp2),P.push(A.sizeAttenuation),P.push(A.morphTargetsCount),P.push(A.morphAttributeCount),P.push(A.numDirLights),P.push(A.numPointLights),P.push(A.numSpotLights),P.push(A.numSpotLightMaps),P.push(A.numHemiLights),P.push(A.numRectAreaLights),P.push(A.numDirLightShadows),P.push(A.numPointLightShadows),P.push(A.numSpotLightShadows),P.push(A.numSpotLightShadowsWithMaps),P.push(A.numLightProbes),P.push(A.shadowMapType),P.push(A.toneMapping),P.push(A.numClippingPlanes),P.push(A.numClipIntersection),P.push(A.depthPacking)}function D(P,A){u.disableAll(),A.supportsVertexTextures&&u.enable(0),A.instancing&&u.enable(1),A.instancingColor&&u.enable(2),A.instancingMorph&&u.enable(3),A.matcap&&u.enable(4),A.envMap&&u.enable(5),A.normalMapObjectSpace&&u.enable(6),A.normalMapTangentSpace&&u.enable(7),A.clearcoat&&u.enable(8),A.iridescence&&u.enable(9),A.alphaTest&&u.enable(10),A.vertexColors&&u.enable(11),A.vertexAlphas&&u.enable(12),A.vertexUv1s&&u.enable(13),A.vertexUv2s&&u.enable(14),A.vertexUv3s&&u.enable(15),A.vertexTangents&&u.enable(16),A.anisotropy&&u.enable(17),A.alphaHash&&u.enable(18),A.batching&&u.enable(19),A.dispersion&&u.enable(20),A.batchingColor&&u.enable(21),P.push(u.mask),u.disableAll(),A.fog&&u.enable(0),A.useFog&&u.enable(1),A.flatShading&&u.enable(2),A.logarithmicDepthBuffer&&u.enable(3),A.reverseDepthBuffer&&u.enable(4),A.skinning&&u.enable(5),A.morphTargets&&u.enable(6),A.morphNormals&&u.enable(7),A.morphColors&&u.enable(8),A.premultipliedAlpha&&u.enable(9),A.shadowMapEnabled&&u.enable(10),A.doubleSided&&u.enable(11),A.flipSided&&u.enable(12),A.useDepthPacking&&u.enable(13),A.dithering&&u.enable(14),A.transmission&&u.enable(15),A.sheen&&u.enable(16),A.opaque&&u.enable(17),A.pointsUvs&&u.enable(18),A.decodeVideoTexture&&u.enable(19),A.decodeVideoTextureEmissive&&u.enable(20),A.alphaToCoverage&&u.enable(21),P.push(u.mask)}function R(P){let A=M[P.type],B;if(A){let ot=Ii[A];B=Rg.clone(ot.uniforms)}else B=P.uniforms;return B}function H(P,A){let B;for(let ot=0,j=p.length;ot<j;ot++){let it=p[ot];if(it.cacheKey===A){B=it,++B.usedTimes;break}}return B===void 0&&(B=new SA(i,A,P,o),p.push(B)),B}function F(P){if(--P.usedTimes===0){let A=p.indexOf(P);p[A]=p[p.length-1],p.pop(),P.destroy()}}function O(P){h.remove(P)}function q(){h.dispose()}return{getParameters:y,getProgramCacheKey:m,getUniforms:R,acquireProgram:H,releaseProgram:F,releaseShaderCache:O,programs:p,dispose:q}}function wA(){let i=new WeakMap;function t(l){return i.has(l)}function e(l){let u=i.get(l);return u===void 0&&(u={},i.set(l,u)),u}function r(l){i.delete(l)}function a(l,u,h){i.get(l)[u]=h}function o(){i=new WeakMap}return{has:t,get:e,remove:r,update:a,dispose:o}}function TA(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Kg(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function jg(){let i=[],t=0,e=[],r=[],a=[];function o(){t=0,e.length=0,r.length=0,a.length=0}function l(g,_,v,M,T,y){let m=i[t];return m===void 0?(m={id:g.id,object:g,geometry:_,material:v,groupOrder:M,renderOrder:g.renderOrder,z:T,group:y},i[t]=m):(m.id=g.id,m.object=g,m.geometry=_,m.material=v,m.groupOrder=M,m.renderOrder=g.renderOrder,m.z=T,m.group=y),t++,m}function u(g,_,v,M,T,y){let m=l(g,_,v,M,T,y);v.transmission>0?r.push(m):v.transparent===!0?a.push(m):e.push(m)}function h(g,_,v,M,T,y){let m=l(g,_,v,M,T,y);v.transmission>0?r.unshift(m):v.transparent===!0?a.unshift(m):e.unshift(m)}function f(g,_){e.length>1&&e.sort(g||TA),r.length>1&&r.sort(_||Kg),a.length>1&&a.sort(_||Kg)}function p(){for(let g=t,_=i.length;g<_;g++){let v=i[g];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:e,transmissive:r,transparent:a,init:o,push:u,unshift:h,finish:p,sort:f}}function AA(){let i=new WeakMap;function t(r,a){let o=i.get(r),l;return o===void 0?(l=new jg,i.set(r,[l])):a>=o.length?(l=new jg,o.push(l)):l=o[a],l}function e(){i=new WeakMap}return{get:t,dispose:e}}function CA(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new W,color:new Bt};break;case"SpotLight":e={position:new W,direction:new W,color:new Bt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new W,color:new Bt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new W,skyColor:new Bt,groundColor:new Bt};break;case"RectAreaLight":e={color:new Bt,position:new W,halfWidth:new W,halfHeight:new W};break}return i[t.id]=e,e}}}function RA(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Gt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Gt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Gt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var PA=0;function IA(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function DA(i){let t=new CA,e=RA(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let f=0;f<9;f++)r.probe.push(new W);let a=new W,o=new ke,l=new ke;function u(f){let p=0,g=0,_=0;for(let P=0;P<9;P++)r.probe[P].set(0,0,0);let v=0,M=0,T=0,y=0,m=0,U=0,D=0,R=0,H=0,F=0,O=0;f.sort(IA);for(let P=0,A=f.length;P<A;P++){let B=f[P],ot=B.color,j=B.intensity,it=B.distance,ft=B.shadow&&B.shadow.map?B.shadow.map.texture:null;if(B.isAmbientLight)p+=ot.r*j,g+=ot.g*j,_+=ot.b*j;else if(B.isLightProbe){for(let et=0;et<9;et++)r.probe[et].addScaledVector(B.sh.coefficients[et],j);O++}else if(B.isDirectionalLight){let et=t.get(B);if(et.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){let pt=B.shadow,K=e.get(B);K.shadowIntensity=pt.intensity,K.shadowBias=pt.bias,K.shadowNormalBias=pt.normalBias,K.shadowRadius=pt.radius,K.shadowMapSize=pt.mapSize,r.directionalShadow[v]=K,r.directionalShadowMap[v]=ft,r.directionalShadowMatrix[v]=B.shadow.matrix,U++}r.directional[v]=et,v++}else if(B.isSpotLight){let et=t.get(B);et.position.setFromMatrixPosition(B.matrixWorld),et.color.copy(ot).multiplyScalar(j),et.distance=it,et.coneCos=Math.cos(B.angle),et.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),et.decay=B.decay,r.spot[T]=et;let pt=B.shadow;if(B.map&&(r.spotLightMap[H]=B.map,H++,pt.updateMatrices(B),B.castShadow&&F++),r.spotLightMatrix[T]=pt.matrix,B.castShadow){let K=e.get(B);K.shadowIntensity=pt.intensity,K.shadowBias=pt.bias,K.shadowNormalBias=pt.normalBias,K.shadowRadius=pt.radius,K.shadowMapSize=pt.mapSize,r.spotShadow[T]=K,r.spotShadowMap[T]=ft,R++}T++}else if(B.isRectAreaLight){let et=t.get(B);et.color.copy(ot).multiplyScalar(j),et.halfWidth.set(B.width*.5,0,0),et.halfHeight.set(0,B.height*.5,0),r.rectArea[y]=et,y++}else if(B.isPointLight){let et=t.get(B);if(et.color.copy(B.color).multiplyScalar(B.intensity),et.distance=B.distance,et.decay=B.decay,B.castShadow){let pt=B.shadow,K=e.get(B);K.shadowIntensity=pt.intensity,K.shadowBias=pt.bias,K.shadowNormalBias=pt.normalBias,K.shadowRadius=pt.radius,K.shadowMapSize=pt.mapSize,K.shadowCameraNear=pt.camera.near,K.shadowCameraFar=pt.camera.far,r.pointShadow[M]=K,r.pointShadowMap[M]=ft,r.pointShadowMatrix[M]=B.shadow.matrix,D++}r.point[M]=et,M++}else if(B.isHemisphereLight){let et=t.get(B);et.skyColor.copy(B.color).multiplyScalar(j),et.groundColor.copy(B.groundColor).multiplyScalar(j),r.hemi[m]=et,m++}}y>0&&(i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=yt.LTC_FLOAT_1,r.rectAreaLTC2=yt.LTC_FLOAT_2):(r.rectAreaLTC1=yt.LTC_HALF_1,r.rectAreaLTC2=yt.LTC_HALF_2)),r.ambient[0]=p,r.ambient[1]=g,r.ambient[2]=_;let q=r.hash;(q.directionalLength!==v||q.pointLength!==M||q.spotLength!==T||q.rectAreaLength!==y||q.hemiLength!==m||q.numDirectionalShadows!==U||q.numPointShadows!==D||q.numSpotShadows!==R||q.numSpotMaps!==H||q.numLightProbes!==O)&&(r.directional.length=v,r.spot.length=T,r.rectArea.length=y,r.point.length=M,r.hemi.length=m,r.directionalShadow.length=U,r.directionalShadowMap.length=U,r.pointShadow.length=D,r.pointShadowMap.length=D,r.spotShadow.length=R,r.spotShadowMap.length=R,r.directionalShadowMatrix.length=U,r.pointShadowMatrix.length=D,r.spotLightMatrix.length=R+H-F,r.spotLightMap.length=H,r.numSpotLightShadowsWithMaps=F,r.numLightProbes=O,q.directionalLength=v,q.pointLength=M,q.spotLength=T,q.rectAreaLength=y,q.hemiLength=m,q.numDirectionalShadows=U,q.numPointShadows=D,q.numSpotShadows=R,q.numSpotMaps=H,q.numLightProbes=O,r.version=PA++)}function h(f,p){let g=0,_=0,v=0,M=0,T=0,y=p.matrixWorldInverse;for(let m=0,U=f.length;m<U;m++){let D=f[m];if(D.isDirectionalLight){let R=r.directional[g];R.direction.setFromMatrixPosition(D.matrixWorld),a.setFromMatrixPosition(D.target.matrixWorld),R.direction.sub(a),R.direction.transformDirection(y),g++}else if(D.isSpotLight){let R=r.spot[v];R.position.setFromMatrixPosition(D.matrixWorld),R.position.applyMatrix4(y),R.direction.setFromMatrixPosition(D.matrixWorld),a.setFromMatrixPosition(D.target.matrixWorld),R.direction.sub(a),R.direction.transformDirection(y),v++}else if(D.isRectAreaLight){let R=r.rectArea[M];R.position.setFromMatrixPosition(D.matrixWorld),R.position.applyMatrix4(y),l.identity(),o.copy(D.matrixWorld),o.premultiply(y),l.extractRotation(o),R.halfWidth.set(D.width*.5,0,0),R.halfHeight.set(0,D.height*.5,0),R.halfWidth.applyMatrix4(l),R.halfHeight.applyMatrix4(l),M++}else if(D.isPointLight){let R=r.point[_];R.position.setFromMatrixPosition(D.matrixWorld),R.position.applyMatrix4(y),_++}else if(D.isHemisphereLight){let R=r.hemi[T];R.direction.setFromMatrixPosition(D.matrixWorld),R.direction.transformDirection(y),T++}}}return{setup:u,setupView:h,state:r}}function Qg(i){let t=new DA(i),e=[],r=[];function a(p){f.camera=p,e.length=0,r.length=0}function o(p){e.push(p)}function l(p){r.push(p)}function u(){t.setup(e)}function h(p){t.setupView(e,p)}let f={lightsArray:e,shadowsArray:r,camera:null,lights:t,transmissionRenderTarget:{}};return{init:a,state:f,setupLights:u,setupLightsView:h,pushLight:o,pushShadow:l}}function LA(i){let t=new WeakMap;function e(a,o=0){let l=t.get(a),u;return l===void 0?(u=new Qg(i),t.set(a,[u])):o>=l.length?(u=new Qg(i),l.push(u)):u=l[o],u}function r(){t=new WeakMap}return{get:e,dispose:r}}var UA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,NA=`uniform sampler2D shadow_pass;
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
}`;function FA(i,t,e){let r=new qs,a=new Gt,o=new Gt,l=new Ge,u=new Xa({depthPacking:mg}),h=new qa,f={},p=e.maxTextureSize,g={[Ji]:Cn,[Cn]:Ji,[Ri]:Ri},_=new $n({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Gt},radius:{value:4}},vertexShader:UA,fragmentShader:NA}),v=_.clone();v.defines.HORIZONTAL_PASS=1;let M=new Mi;M.setAttribute("position",new Yn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let T=new Nn(M,_),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=jh;let m=this.type;this.render=function(F,O,q){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||F.length===0)return;let P=i.getRenderTarget(),A=i.getActiveCubeFace(),B=i.getActiveMipmapLevel(),ot=i.state;ot.setBlending(Ki),ot.buffers.color.setClear(1,1,1,1),ot.buffers.depth.setTest(!0),ot.setScissorTest(!1);let j=m!==Ci&&this.type===Ci,it=m===Ci&&this.type!==Ci;for(let ft=0,et=F.length;ft<et;ft++){let pt=F[ft],K=pt.shadow;if(K===void 0){console.warn("THREE.WebGLShadowMap:",pt,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;a.copy(K.mapSize);let St=K.getFrameExtents();if(a.multiply(St),o.copy(K.mapSize),(a.x>p||a.y>p)&&(a.x>p&&(o.x=Math.floor(p/St.x),a.x=o.x*St.x,K.mapSize.x=o.x),a.y>p&&(o.y=Math.floor(p/St.y),a.y=o.y*St.y,K.mapSize.y=o.y)),K.map===null||j===!0||it===!0){let Lt=this.type!==Ci?{minFilter:ai,magFilter:ai}:{};K.map!==null&&K.map.dispose(),K.map=new Ai(a.x,a.y,Lt),K.map.texture.name=pt.name+".shadowMap",K.camera.updateProjectionMatrix()}i.setRenderTarget(K.map),i.clear();let Tt=K.getViewportCount();for(let Lt=0;Lt<Tt;Lt++){let oe=K.getViewport(Lt);l.set(o.x*oe.x,o.y*oe.y,o.x*oe.z,o.y*oe.w),ot.viewport(l),K.updateMatrices(pt,Lt),r=K.getFrustum(),R(O,q,K.camera,pt,this.type)}K.isPointLightShadow!==!0&&this.type===Ci&&U(K,q),K.needsUpdate=!1}m=this.type,y.needsUpdate=!1,i.setRenderTarget(P,A,B)};function U(F,O){let q=t.update(T);_.defines.VSM_SAMPLES!==F.blurSamples&&(_.defines.VSM_SAMPLES=F.blurSamples,v.defines.VSM_SAMPLES=F.blurSamples,_.needsUpdate=!0,v.needsUpdate=!0),F.mapPass===null&&(F.mapPass=new Ai(a.x,a.y)),_.uniforms.shadow_pass.value=F.map.texture,_.uniforms.resolution.value=F.mapSize,_.uniforms.radius.value=F.radius,i.setRenderTarget(F.mapPass),i.clear(),i.renderBufferDirect(O,null,q,_,T,null),v.uniforms.shadow_pass.value=F.mapPass.texture,v.uniforms.resolution.value=F.mapSize,v.uniforms.radius.value=F.radius,i.setRenderTarget(F.map),i.clear(),i.renderBufferDirect(O,null,q,v,T,null)}function D(F,O,q,P){let A=null,B=q.isPointLight===!0?F.customDistanceMaterial:F.customDepthMaterial;if(B!==void 0)A=B;else if(A=q.isPointLight===!0?h:u,i.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0){let ot=A.uuid,j=O.uuid,it=f[ot];it===void 0&&(it={},f[ot]=it);let ft=it[j];ft===void 0&&(ft=A.clone(),it[j]=ft,O.addEventListener("dispose",H)),A=ft}if(A.visible=O.visible,A.wireframe=O.wireframe,P===Ci?A.side=O.shadowSide!==null?O.shadowSide:O.side:A.side=O.shadowSide!==null?O.shadowSide:g[O.side],A.alphaMap=O.alphaMap,A.alphaTest=O.alphaTest,A.map=O.map,A.clipShadows=O.clipShadows,A.clippingPlanes=O.clippingPlanes,A.clipIntersection=O.clipIntersection,A.displacementMap=O.displacementMap,A.displacementScale=O.displacementScale,A.displacementBias=O.displacementBias,A.wireframeLinewidth=O.wireframeLinewidth,A.linewidth=O.linewidth,q.isPointLight===!0&&A.isMeshDistanceMaterial===!0){let ot=i.properties.get(A);ot.light=q}return A}function R(F,O,q,P,A){if(F.visible===!1)return;if(F.layers.test(O.layers)&&(F.isMesh||F.isLine||F.isPoints)&&(F.castShadow||F.receiveShadow&&A===Ci)&&(!F.frustumCulled||r.intersectsObject(F))){F.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,F.matrixWorld);let j=t.update(F),it=F.material;if(Array.isArray(it)){let ft=j.groups;for(let et=0,pt=ft.length;et<pt;et++){let K=ft[et],St=it[K.materialIndex];if(St&&St.visible){let Tt=D(F,St,P,A);F.onBeforeShadow(i,F,O,q,j,Tt,K),i.renderBufferDirect(q,null,j,Tt,F,K),F.onAfterShadow(i,F,O,q,j,Tt,K)}}}else if(it.visible){let ft=D(F,it,P,A);F.onBeforeShadow(i,F,O,q,j,ft,null),i.renderBufferDirect(q,null,j,ft,F,null),F.onAfterShadow(i,F,O,q,j,ft,null)}}let ot=F.children;for(let j=0,it=ot.length;j<it;j++)R(ot[j],O,q,P,A)}function H(F){F.target.removeEventListener("dispose",H);for(let q in f){let P=f[q],A=F.target.uuid;A in P&&(P[A].dispose(),delete P[A])}}}var OA={[ll]:ul,[hl]:pl,[fl]:ml,[Jr]:dl,[ul]:ll,[pl]:hl,[ml]:fl,[dl]:Jr};function BA(i,t){function e(){let z=!1,xt=new Ge,Q=null,ct=new Ge(0,0,0,0);return{setMask:function(wt){Q!==wt&&!z&&(i.colorMask(wt,wt,wt,wt),Q=wt)},setLocked:function(wt){z=wt},setClear:function(wt,Et,ee,Ve,Je){Je===!0&&(wt*=Ve,Et*=Ve,ee*=Ve),xt.set(wt,Et,ee,Ve),ct.equals(xt)===!1&&(i.clearColor(wt,Et,ee,Ve),ct.copy(xt))},reset:function(){z=!1,Q=null,ct.set(-1,0,0,0)}}}function r(){let z=!1,xt=!1,Q=null,ct=null,wt=null;return{setReversed:function(Et){if(xt!==Et){let ee=t.get("EXT_clip_control");xt?ee.clipControlEXT(ee.LOWER_LEFT_EXT,ee.ZERO_TO_ONE_EXT):ee.clipControlEXT(ee.LOWER_LEFT_EXT,ee.NEGATIVE_ONE_TO_ONE_EXT);let Ve=wt;wt=null,this.setClear(Ve)}xt=Et},getReversed:function(){return xt},setTest:function(Et){Et?bt(i.DEPTH_TEST):Vt(i.DEPTH_TEST)},setMask:function(Et){Q!==Et&&!z&&(i.depthMask(Et),Q=Et)},setFunc:function(Et){if(xt&&(Et=OA[Et]),ct!==Et){switch(Et){case ll:i.depthFunc(i.NEVER);break;case ul:i.depthFunc(i.ALWAYS);break;case hl:i.depthFunc(i.LESS);break;case Jr:i.depthFunc(i.LEQUAL);break;case fl:i.depthFunc(i.EQUAL);break;case dl:i.depthFunc(i.GEQUAL);break;case pl:i.depthFunc(i.GREATER);break;case ml:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ct=Et}},setLocked:function(Et){z=Et},setClear:function(Et){wt!==Et&&(xt&&(Et=1-Et),i.clearDepth(Et),wt=Et)},reset:function(){z=!1,Q=null,ct=null,wt=null,xt=!1}}}function a(){let z=!1,xt=null,Q=null,ct=null,wt=null,Et=null,ee=null,Ve=null,Je=null;return{setTest:function(be){z||(be?bt(i.STENCIL_TEST):Vt(i.STENCIL_TEST))},setMask:function(be){xt!==be&&!z&&(i.stencilMask(be),xt=be)},setFunc:function(be,On,hi){(Q!==be||ct!==On||wt!==hi)&&(i.stencilFunc(be,On,hi),Q=be,ct=On,wt=hi)},setOp:function(be,On,hi){(Et!==be||ee!==On||Ve!==hi)&&(i.stencilOp(be,On,hi),Et=be,ee=On,Ve=hi)},setLocked:function(be){z=be},setClear:function(be){Je!==be&&(i.clearStencil(be),Je=be)},reset:function(){z=!1,xt=null,Q=null,ct=null,wt=null,Et=null,ee=null,Ve=null,Je=null}}}let o=new e,l=new r,u=new a,h=new WeakMap,f=new WeakMap,p={},g={},_=new WeakMap,v=[],M=null,T=!1,y=null,m=null,U=null,D=null,R=null,H=null,F=null,O=new Bt(0,0,0),q=0,P=!1,A=null,B=null,ot=null,j=null,it=null,ft=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),et=!1,pt=0,K=i.getParameter(i.VERSION);K.indexOf("WebGL")!==-1?(pt=parseFloat(/^WebGL (\d)/.exec(K)[1]),et=pt>=1):K.indexOf("OpenGL ES")!==-1&&(pt=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),et=pt>=2);let St=null,Tt={},Lt=i.getParameter(i.SCISSOR_BOX),oe=i.getParameter(i.VIEWPORT),Te=new Ge().fromArray(Lt),at=new Ge().fromArray(oe);function gt(z,xt,Q,ct){let wt=new Uint8Array(4),Et=i.createTexture();i.bindTexture(z,Et),i.texParameteri(z,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(z,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ee=0;ee<Q;ee++)z===i.TEXTURE_3D||z===i.TEXTURE_2D_ARRAY?i.texImage3D(xt,0,i.RGBA,1,1,ct,0,i.RGBA,i.UNSIGNED_BYTE,wt):i.texImage2D(xt+ee,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,wt);return Et}let Ut={};Ut[i.TEXTURE_2D]=gt(i.TEXTURE_2D,i.TEXTURE_2D,1),Ut[i.TEXTURE_CUBE_MAP]=gt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ut[i.TEXTURE_2D_ARRAY]=gt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Ut[i.TEXTURE_3D]=gt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),o.setClear(0,0,0,1),l.setClear(1),u.setClear(0),bt(i.DEPTH_TEST),l.setFunc(Jr),me(!1),jt(Kh),bt(i.CULL_FACE),L(Ki);function bt(z){p[z]!==!0&&(i.enable(z),p[z]=!0)}function Vt(z){p[z]!==!1&&(i.disable(z),p[z]=!1)}function he(z,xt){return g[z]!==xt?(i.bindFramebuffer(z,xt),g[z]=xt,z===i.DRAW_FRAMEBUFFER&&(g[i.FRAMEBUFFER]=xt),z===i.FRAMEBUFFER&&(g[i.DRAW_FRAMEBUFFER]=xt),!0):!1}function $t(z,xt){let Q=v,ct=!1;if(z){Q=_.get(xt),Q===void 0&&(Q=[],_.set(xt,Q));let wt=z.textures;if(Q.length!==wt.length||Q[0]!==i.COLOR_ATTACHMENT0){for(let Et=0,ee=wt.length;Et<ee;Et++)Q[Et]=i.COLOR_ATTACHMENT0+Et;Q.length=wt.length,ct=!0}}else Q[0]!==i.BACK&&(Q[0]=i.BACK,ct=!0);ct&&i.drawBuffers(Q)}function Ne(z){return M!==z?(i.useProgram(z),M=z,!0):!1}let Re={[yr]:i.FUNC_ADD,[Vm]:i.FUNC_SUBTRACT,[Hm]:i.FUNC_REVERSE_SUBTRACT};Re[Gm]=i.MIN,Re[Wm]=i.MAX;let fe={[Xm]:i.ZERO,[qm]:i.ONE,[Ym]:i.SRC_COLOR,[Pc]:i.SRC_ALPHA,[Qm]:i.SRC_ALPHA_SATURATE,[Km]:i.DST_COLOR,[$m]:i.DST_ALPHA,[Zm]:i.ONE_MINUS_SRC_COLOR,[Ic]:i.ONE_MINUS_SRC_ALPHA,[jm]:i.ONE_MINUS_DST_COLOR,[Jm]:i.ONE_MINUS_DST_ALPHA,[tg]:i.CONSTANT_COLOR,[eg]:i.ONE_MINUS_CONSTANT_COLOR,[ng]:i.CONSTANT_ALPHA,[ig]:i.ONE_MINUS_CONSTANT_ALPHA};function L(z,xt,Q,ct,wt,Et,ee,Ve,Je,be){if(z===Ki){T===!0&&(Vt(i.BLEND),T=!1);return}if(T===!1&&(bt(i.BLEND),T=!0),z!==km){if(z!==y||be!==P){if((m!==yr||R!==yr)&&(i.blendEquation(i.FUNC_ADD),m=yr,R=yr),be)switch(z){case $r:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Qh:i.blendFunc(i.ONE,i.ONE);break;case tf:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ef:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}else switch(z){case $r:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Qh:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case tf:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ef:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}U=null,D=null,H=null,F=null,O.set(0,0,0),q=0,y=z,P=be}return}wt=wt||xt,Et=Et||Q,ee=ee||ct,(xt!==m||wt!==R)&&(i.blendEquationSeparate(Re[xt],Re[wt]),m=xt,R=wt),(Q!==U||ct!==D||Et!==H||ee!==F)&&(i.blendFuncSeparate(fe[Q],fe[ct],fe[Et],fe[ee]),U=Q,D=ct,H=Et,F=ee),(Ve.equals(O)===!1||Je!==q)&&(i.blendColor(Ve.r,Ve.g,Ve.b,Je),O.copy(Ve),q=Je),y=z,P=!1}function rn(z,xt){z.side===Ri?Vt(i.CULL_FACE):bt(i.CULL_FACE);let Q=z.side===Cn;xt&&(Q=!Q),me(Q),z.blending===$r&&z.transparent===!1?L(Ki):L(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),l.setFunc(z.depthFunc),l.setTest(z.depthTest),l.setMask(z.depthWrite),o.setMask(z.colorWrite);let ct=z.stencilWrite;u.setTest(ct),ct&&(u.setMask(z.stencilWriteMask),u.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),u.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),De(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?bt(i.SAMPLE_ALPHA_TO_COVERAGE):Vt(i.SAMPLE_ALPHA_TO_COVERAGE)}function me(z){A!==z&&(z?i.frontFace(i.CW):i.frontFace(i.CCW),A=z)}function jt(z){z!==Om?(bt(i.CULL_FACE),z!==B&&(z===Kh?i.cullFace(i.BACK):z===Bm?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Vt(i.CULL_FACE),B=z}function zt(z){z!==ot&&(et&&i.lineWidth(z),ot=z)}function De(z,xt,Q){z?(bt(i.POLYGON_OFFSET_FILL),(j!==xt||it!==Q)&&(i.polygonOffset(xt,Q),j=xt,it=Q)):Vt(i.POLYGON_OFFSET_FILL)}function Ft(z){z?bt(i.SCISSOR_TEST):Vt(i.SCISSOR_TEST)}function C(z){z===void 0&&(z=i.TEXTURE0+ft-1),St!==z&&(i.activeTexture(z),St=z)}function S(z,xt,Q){Q===void 0&&(St===null?Q=i.TEXTURE0+ft-1:Q=St);let ct=Tt[Q];ct===void 0&&(ct={type:void 0,texture:void 0},Tt[Q]=ct),(ct.type!==z||ct.texture!==xt)&&(St!==Q&&(i.activeTexture(Q),St=Q),i.bindTexture(z,xt||Ut[z]),ct.type=z,ct.texture=xt)}function Y(){let z=Tt[St];z!==void 0&&z.type!==void 0&&(i.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function lt(){try{i.compressedTexImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ut(){try{i.compressedTexImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function rt(){try{i.texSubImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Nt(){try{i.texSubImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function _t(){try{i.compressedTexSubImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function At(){try{i.compressedTexSubImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function de(){try{i.texStorage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function mt(){try{i.texStorage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Rt(){try{i.texImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Wt(){try{i.texImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Zt(z){Te.equals(z)===!1&&(i.scissor(z.x,z.y,z.z,z.w),Te.copy(z))}function Pt(z){at.equals(z)===!1&&(i.viewport(z.x,z.y,z.z,z.w),at.copy(z))}function ue(z,xt){let Q=f.get(xt);Q===void 0&&(Q=new WeakMap,f.set(xt,Q));let ct=Q.get(z);ct===void 0&&(ct=i.getUniformBlockIndex(xt,z.name),Q.set(z,ct))}function Qt(z,xt){let ct=f.get(xt).get(z);h.get(xt)!==ct&&(i.uniformBlockBinding(xt,ct,z.__bindingPointIndex),h.set(xt,ct))}function Pe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),l.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),p={},St=null,Tt={},g={},_=new WeakMap,v=[],M=null,T=!1,y=null,m=null,U=null,D=null,R=null,H=null,F=null,O=new Bt(0,0,0),q=0,P=!1,A=null,B=null,ot=null,j=null,it=null,Te.set(0,0,i.canvas.width,i.canvas.height),at.set(0,0,i.canvas.width,i.canvas.height),o.reset(),l.reset(),u.reset()}return{buffers:{color:o,depth:l,stencil:u},enable:bt,disable:Vt,bindFramebuffer:he,drawBuffers:$t,useProgram:Ne,setBlending:L,setMaterial:rn,setFlipSided:me,setCullFace:jt,setLineWidth:zt,setPolygonOffset:De,setScissorTest:Ft,activeTexture:C,bindTexture:S,unbindTexture:Y,compressedTexImage2D:lt,compressedTexImage3D:ut,texImage2D:Rt,texImage3D:Wt,updateUBOMapping:ue,uniformBlockBinding:Qt,texStorage2D:de,texStorage3D:mt,texSubImage2D:rt,texSubImage3D:Nt,compressedTexSubImage2D:_t,compressedTexSubImage3D:At,scissor:Zt,viewport:Pt,reset:Pe}}function zA(i,t,e,r,a,o,l){let u=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),f=new Gt,p=new WeakMap,g,_=new WeakMap,v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(C,S){return v?new OffscreenCanvas(C,S):Da("canvas")}function T(C,S,Y){let lt=1,ut=Ft(C);if((ut.width>Y||ut.height>Y)&&(lt=Y/Math.max(ut.width,ut.height)),lt<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let rt=Math.floor(lt*ut.width),Nt=Math.floor(lt*ut.height);g===void 0&&(g=M(rt,Nt));let _t=S?M(rt,Nt):g;return _t.width=rt,_t.height=Nt,_t.getContext("2d").drawImage(C,0,0,rt,Nt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ut.width+"x"+ut.height+") to ("+rt+"x"+Nt+")."),_t}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ut.width+"x"+ut.height+")."),C;return C}function y(C){return C.generateMipmaps}function m(C){i.generateMipmap(C)}function U(C){return C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?i.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function D(C,S,Y,lt,ut=!1){if(C!==null){if(i[C]!==void 0)return i[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let rt=S;if(S===i.RED&&(Y===i.FLOAT&&(rt=i.R32F),Y===i.HALF_FLOAT&&(rt=i.R16F),Y===i.UNSIGNED_BYTE&&(rt=i.R8)),S===i.RED_INTEGER&&(Y===i.UNSIGNED_BYTE&&(rt=i.R8UI),Y===i.UNSIGNED_SHORT&&(rt=i.R16UI),Y===i.UNSIGNED_INT&&(rt=i.R32UI),Y===i.BYTE&&(rt=i.R8I),Y===i.SHORT&&(rt=i.R16I),Y===i.INT&&(rt=i.R32I)),S===i.RG&&(Y===i.FLOAT&&(rt=i.RG32F),Y===i.HALF_FLOAT&&(rt=i.RG16F),Y===i.UNSIGNED_BYTE&&(rt=i.RG8)),S===i.RG_INTEGER&&(Y===i.UNSIGNED_BYTE&&(rt=i.RG8UI),Y===i.UNSIGNED_SHORT&&(rt=i.RG16UI),Y===i.UNSIGNED_INT&&(rt=i.RG32UI),Y===i.BYTE&&(rt=i.RG8I),Y===i.SHORT&&(rt=i.RG16I),Y===i.INT&&(rt=i.RG32I)),S===i.RGB_INTEGER&&(Y===i.UNSIGNED_BYTE&&(rt=i.RGB8UI),Y===i.UNSIGNED_SHORT&&(rt=i.RGB16UI),Y===i.UNSIGNED_INT&&(rt=i.RGB32UI),Y===i.BYTE&&(rt=i.RGB8I),Y===i.SHORT&&(rt=i.RGB16I),Y===i.INT&&(rt=i.RGB32I)),S===i.RGBA_INTEGER&&(Y===i.UNSIGNED_BYTE&&(rt=i.RGBA8UI),Y===i.UNSIGNED_SHORT&&(rt=i.RGBA16UI),Y===i.UNSIGNED_INT&&(rt=i.RGBA32UI),Y===i.BYTE&&(rt=i.RGBA8I),Y===i.SHORT&&(rt=i.RGBA16I),Y===i.INT&&(rt=i.RGBA32I)),S===i.RGB&&Y===i.UNSIGNED_INT_5_9_9_9_REV&&(rt=i.RGB9_E5),S===i.RGBA){let Nt=ut?Pa:Me.getTransfer(lt);Y===i.FLOAT&&(rt=i.RGBA32F),Y===i.HALF_FLOAT&&(rt=i.RGBA16F),Y===i.UNSIGNED_BYTE&&(rt=Nt===Ce?i.SRGB8_ALPHA8:i.RGBA8),Y===i.UNSIGNED_SHORT_4_4_4_4&&(rt=i.RGBA4),Y===i.UNSIGNED_SHORT_5_5_5_1&&(rt=i.RGB5_A1)}return(rt===i.R16F||rt===i.R32F||rt===i.RG16F||rt===i.RG32F||rt===i.RGBA16F||rt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),rt}function R(C,S){let Y;return C?S===null||S===Rr||S===rs?Y=i.DEPTH24_STENCIL8:S===li?Y=i.DEPTH32F_STENCIL8:S===Js&&(Y=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Rr||S===rs?Y=i.DEPTH_COMPONENT24:S===li?Y=i.DEPTH_COMPONENT32F:S===Js&&(Y=i.DEPTH_COMPONENT16),Y}function H(C,S){return y(C)===!0||C.isFramebufferTexture&&C.minFilter!==ai&&C.minFilter!==xi?Math.log2(Math.max(S.width,S.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?S.mipmaps.length:1}function F(C){let S=C.target;S.removeEventListener("dispose",F),q(S),S.isVideoTexture&&p.delete(S)}function O(C){let S=C.target;S.removeEventListener("dispose",O),A(S)}function q(C){let S=r.get(C);if(S.__webglInit===void 0)return;let Y=C.source,lt=_.get(Y);if(lt){let ut=lt[S.__cacheKey];ut.usedTimes--,ut.usedTimes===0&&P(C),Object.keys(lt).length===0&&_.delete(Y)}r.remove(C)}function P(C){let S=r.get(C);i.deleteTexture(S.__webglTexture);let Y=C.source,lt=_.get(Y);delete lt[S.__cacheKey],l.memory.textures--}function A(C){let S=r.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),r.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let lt=0;lt<6;lt++){if(Array.isArray(S.__webglFramebuffer[lt]))for(let ut=0;ut<S.__webglFramebuffer[lt].length;ut++)i.deleteFramebuffer(S.__webglFramebuffer[lt][ut]);else i.deleteFramebuffer(S.__webglFramebuffer[lt]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[lt])}else{if(Array.isArray(S.__webglFramebuffer))for(let lt=0;lt<S.__webglFramebuffer.length;lt++)i.deleteFramebuffer(S.__webglFramebuffer[lt]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let lt=0;lt<S.__webglColorRenderbuffer.length;lt++)S.__webglColorRenderbuffer[lt]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[lt]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let Y=C.textures;for(let lt=0,ut=Y.length;lt<ut;lt++){let rt=r.get(Y[lt]);rt.__webglTexture&&(i.deleteTexture(rt.__webglTexture),l.memory.textures--),r.remove(Y[lt])}r.remove(C)}let B=0;function ot(){B=0}function j(){let C=B;return C>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+a.maxTextures),B+=1,C}function it(C){let S=[];return S.push(C.wrapS),S.push(C.wrapT),S.push(C.wrapR||0),S.push(C.magFilter),S.push(C.minFilter),S.push(C.anisotropy),S.push(C.internalFormat),S.push(C.format),S.push(C.type),S.push(C.generateMipmaps),S.push(C.premultiplyAlpha),S.push(C.flipY),S.push(C.unpackAlignment),S.push(C.colorSpace),S.join()}function ft(C,S){let Y=r.get(C);if(C.isVideoTexture&&zt(C),C.isRenderTargetTexture===!1&&C.version>0&&Y.__version!==C.version){let lt=C.image;if(lt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(lt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{at(Y,C,S);return}}e.bindTexture(i.TEXTURE_2D,Y.__webglTexture,i.TEXTURE0+S)}function et(C,S){let Y=r.get(C);if(C.version>0&&Y.__version!==C.version){at(Y,C,S);return}e.bindTexture(i.TEXTURE_2D_ARRAY,Y.__webglTexture,i.TEXTURE0+S)}function pt(C,S){let Y=r.get(C);if(C.version>0&&Y.__version!==C.version){at(Y,C,S);return}e.bindTexture(i.TEXTURE_3D,Y.__webglTexture,i.TEXTURE0+S)}function K(C,S){let Y=r.get(C);if(C.version>0&&Y.__version!==C.version){gt(Y,C,S);return}e.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture,i.TEXTURE0+S)}let St={[Dc]:i.REPEAT,[vr]:i.CLAMP_TO_EDGE,[Lc]:i.MIRRORED_REPEAT},Tt={[ai]:i.NEAREST,[dg]:i.NEAREST_MIPMAP_NEAREST,[ro]:i.NEAREST_MIPMAP_LINEAR,[xi]:i.LINEAR,[vl]:i.LINEAR_MIPMAP_NEAREST,[Cr]:i.LINEAR_MIPMAP_LINEAR},Lt={[_g]:i.NEVER,[bg]:i.ALWAYS,[vg]:i.LESS,[pf]:i.LEQUAL,[yg]:i.EQUAL,[Sg]:i.GEQUAL,[xg]:i.GREATER,[Mg]:i.NOTEQUAL};function oe(C,S){if(S.type===li&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===xi||S.magFilter===vl||S.magFilter===ro||S.magFilter===Cr||S.minFilter===xi||S.minFilter===vl||S.minFilter===ro||S.minFilter===Cr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(C,i.TEXTURE_WRAP_S,St[S.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,St[S.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,St[S.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,Tt[S.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,Tt[S.minFilter]),S.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,Lt[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===ai||S.minFilter!==ro&&S.minFilter!==Cr||S.type===li&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||r.get(S).__currentAnisotropy){let Y=t.get("EXT_texture_filter_anisotropic");i.texParameterf(C,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,a.getMaxAnisotropy())),r.get(S).__currentAnisotropy=S.anisotropy}}}function Te(C,S){let Y=!1;C.__webglInit===void 0&&(C.__webglInit=!0,S.addEventListener("dispose",F));let lt=S.source,ut=_.get(lt);ut===void 0&&(ut={},_.set(lt,ut));let rt=it(S);if(rt!==C.__cacheKey){ut[rt]===void 0&&(ut[rt]={texture:i.createTexture(),usedTimes:0},l.memory.textures++,Y=!0),ut[rt].usedTimes++;let Nt=ut[C.__cacheKey];Nt!==void 0&&(ut[C.__cacheKey].usedTimes--,Nt.usedTimes===0&&P(S)),C.__cacheKey=rt,C.__webglTexture=ut[rt].texture}return Y}function at(C,S,Y){let lt=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(lt=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(lt=i.TEXTURE_3D);let ut=Te(C,S),rt=S.source;e.bindTexture(lt,C.__webglTexture,i.TEXTURE0+Y);let Nt=r.get(rt);if(rt.version!==Nt.__version||ut===!0){e.activeTexture(i.TEXTURE0+Y);let _t=Me.getPrimaries(Me.workingColorSpace),At=S.colorSpace===Qi?null:Me.getPrimaries(S.colorSpace),de=S.colorSpace===Qi||_t===At?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,de);let mt=T(S.image,!1,a.maxTextureSize);mt=De(S,mt);let Rt=o.convert(S.format,S.colorSpace),Wt=o.convert(S.type),Zt=D(S.internalFormat,Rt,Wt,S.colorSpace,S.isVideoTexture);oe(lt,S);let Pt,ue=S.mipmaps,Qt=S.isVideoTexture!==!0,Pe=Nt.__version===void 0||ut===!0,z=rt.dataReady,xt=H(S,mt);if(S.isDepthTexture)Zt=R(S.format===Kr,S.type),Pe&&(Qt?e.texStorage2D(i.TEXTURE_2D,1,Zt,mt.width,mt.height):e.texImage2D(i.TEXTURE_2D,0,Zt,mt.width,mt.height,0,Rt,Wt,null));else if(S.isDataTexture)if(ue.length>0){Qt&&Pe&&e.texStorage2D(i.TEXTURE_2D,xt,Zt,ue[0].width,ue[0].height);for(let Q=0,ct=ue.length;Q<ct;Q++)Pt=ue[Q],Qt?z&&e.texSubImage2D(i.TEXTURE_2D,Q,0,0,Pt.width,Pt.height,Rt,Wt,Pt.data):e.texImage2D(i.TEXTURE_2D,Q,Zt,Pt.width,Pt.height,0,Rt,Wt,Pt.data);S.generateMipmaps=!1}else Qt?(Pe&&e.texStorage2D(i.TEXTURE_2D,xt,Zt,mt.width,mt.height),z&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,mt.width,mt.height,Rt,Wt,mt.data)):e.texImage2D(i.TEXTURE_2D,0,Zt,mt.width,mt.height,0,Rt,Wt,mt.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Qt&&Pe&&e.texStorage3D(i.TEXTURE_2D_ARRAY,xt,Zt,ue[0].width,ue[0].height,mt.depth);for(let Q=0,ct=ue.length;Q<ct;Q++)if(Pt=ue[Q],S.format!==ui)if(Rt!==null)if(Qt){if(z)if(S.layerUpdates.size>0){let wt=Mf(Pt.width,Pt.height,S.format,S.type);for(let Et of S.layerUpdates){let ee=Pt.data.subarray(Et*wt/Pt.data.BYTES_PER_ELEMENT,(Et+1)*wt/Pt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,Et,Pt.width,Pt.height,1,Rt,ee)}S.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,Pt.width,Pt.height,mt.depth,Rt,Pt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Q,Zt,Pt.width,Pt.height,mt.depth,0,Pt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Qt?z&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,Pt.width,Pt.height,mt.depth,Rt,Wt,Pt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,Q,Zt,Pt.width,Pt.height,mt.depth,0,Rt,Wt,Pt.data)}else{Qt&&Pe&&e.texStorage2D(i.TEXTURE_2D,xt,Zt,ue[0].width,ue[0].height);for(let Q=0,ct=ue.length;Q<ct;Q++)Pt=ue[Q],S.format!==ui?Rt!==null?Qt?z&&e.compressedTexSubImage2D(i.TEXTURE_2D,Q,0,0,Pt.width,Pt.height,Rt,Pt.data):e.compressedTexImage2D(i.TEXTURE_2D,Q,Zt,Pt.width,Pt.height,0,Pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Qt?z&&e.texSubImage2D(i.TEXTURE_2D,Q,0,0,Pt.width,Pt.height,Rt,Wt,Pt.data):e.texImage2D(i.TEXTURE_2D,Q,Zt,Pt.width,Pt.height,0,Rt,Wt,Pt.data)}else if(S.isDataArrayTexture)if(Qt){if(Pe&&e.texStorage3D(i.TEXTURE_2D_ARRAY,xt,Zt,mt.width,mt.height,mt.depth),z)if(S.layerUpdates.size>0){let Q=Mf(mt.width,mt.height,S.format,S.type);for(let ct of S.layerUpdates){let wt=mt.data.subarray(ct*Q/mt.data.BYTES_PER_ELEMENT,(ct+1)*Q/mt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ct,mt.width,mt.height,1,Rt,Wt,wt)}S.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,mt.width,mt.height,mt.depth,Rt,Wt,mt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Zt,mt.width,mt.height,mt.depth,0,Rt,Wt,mt.data);else if(S.isData3DTexture)Qt?(Pe&&e.texStorage3D(i.TEXTURE_3D,xt,Zt,mt.width,mt.height,mt.depth),z&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,mt.width,mt.height,mt.depth,Rt,Wt,mt.data)):e.texImage3D(i.TEXTURE_3D,0,Zt,mt.width,mt.height,mt.depth,0,Rt,Wt,mt.data);else if(S.isFramebufferTexture){if(Pe)if(Qt)e.texStorage2D(i.TEXTURE_2D,xt,Zt,mt.width,mt.height);else{let Q=mt.width,ct=mt.height;for(let wt=0;wt<xt;wt++)e.texImage2D(i.TEXTURE_2D,wt,Zt,Q,ct,0,Rt,Wt,null),Q>>=1,ct>>=1}}else if(ue.length>0){if(Qt&&Pe){let Q=Ft(ue[0]);e.texStorage2D(i.TEXTURE_2D,xt,Zt,Q.width,Q.height)}for(let Q=0,ct=ue.length;Q<ct;Q++)Pt=ue[Q],Qt?z&&e.texSubImage2D(i.TEXTURE_2D,Q,0,0,Rt,Wt,Pt):e.texImage2D(i.TEXTURE_2D,Q,Zt,Rt,Wt,Pt);S.generateMipmaps=!1}else if(Qt){if(Pe){let Q=Ft(mt);e.texStorage2D(i.TEXTURE_2D,xt,Zt,Q.width,Q.height)}z&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Rt,Wt,mt)}else e.texImage2D(i.TEXTURE_2D,0,Zt,Rt,Wt,mt);y(S)&&m(lt),Nt.__version=rt.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function gt(C,S,Y){if(S.image.length!==6)return;let lt=Te(C,S),ut=S.source;e.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+Y);let rt=r.get(ut);if(ut.version!==rt.__version||lt===!0){e.activeTexture(i.TEXTURE0+Y);let Nt=Me.getPrimaries(Me.workingColorSpace),_t=S.colorSpace===Qi?null:Me.getPrimaries(S.colorSpace),At=S.colorSpace===Qi||Nt===_t?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,At);let de=S.isCompressedTexture||S.image[0].isCompressedTexture,mt=S.image[0]&&S.image[0].isDataTexture,Rt=[];for(let ct=0;ct<6;ct++)!de&&!mt?Rt[ct]=T(S.image[ct],!0,a.maxCubemapSize):Rt[ct]=mt?S.image[ct].image:S.image[ct],Rt[ct]=De(S,Rt[ct]);let Wt=Rt[0],Zt=o.convert(S.format,S.colorSpace),Pt=o.convert(S.type),ue=D(S.internalFormat,Zt,Pt,S.colorSpace),Qt=S.isVideoTexture!==!0,Pe=rt.__version===void 0||lt===!0,z=ut.dataReady,xt=H(S,Wt);oe(i.TEXTURE_CUBE_MAP,S);let Q;if(de){Qt&&Pe&&e.texStorage2D(i.TEXTURE_CUBE_MAP,xt,ue,Wt.width,Wt.height);for(let ct=0;ct<6;ct++){Q=Rt[ct].mipmaps;for(let wt=0;wt<Q.length;wt++){let Et=Q[wt];S.format!==ui?Zt!==null?Qt?z&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,wt,0,0,Et.width,Et.height,Zt,Et.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,wt,ue,Et.width,Et.height,0,Et.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Qt?z&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,wt,0,0,Et.width,Et.height,Zt,Pt,Et.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,wt,ue,Et.width,Et.height,0,Zt,Pt,Et.data)}}}else{if(Q=S.mipmaps,Qt&&Pe){Q.length>0&&xt++;let ct=Ft(Rt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,xt,ue,ct.width,ct.height)}for(let ct=0;ct<6;ct++)if(mt){Qt?z&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,0,0,Rt[ct].width,Rt[ct].height,Zt,Pt,Rt[ct].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,ue,Rt[ct].width,Rt[ct].height,0,Zt,Pt,Rt[ct].data);for(let wt=0;wt<Q.length;wt++){let ee=Q[wt].image[ct].image;Qt?z&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,wt+1,0,0,ee.width,ee.height,Zt,Pt,ee.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,wt+1,ue,ee.width,ee.height,0,Zt,Pt,ee.data)}}else{Qt?z&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,0,0,Zt,Pt,Rt[ct]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,ue,Zt,Pt,Rt[ct]);for(let wt=0;wt<Q.length;wt++){let Et=Q[wt];Qt?z&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,wt+1,0,0,Zt,Pt,Et.image[ct]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,wt+1,ue,Zt,Pt,Et.image[ct])}}}y(S)&&m(i.TEXTURE_CUBE_MAP),rt.__version=ut.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function Ut(C,S,Y,lt,ut,rt){let Nt=o.convert(Y.format,Y.colorSpace),_t=o.convert(Y.type),At=D(Y.internalFormat,Nt,_t,Y.colorSpace),de=r.get(S),mt=r.get(Y);if(mt.__renderTarget=S,!de.__hasExternalTextures){let Rt=Math.max(1,S.width>>rt),Wt=Math.max(1,S.height>>rt);ut===i.TEXTURE_3D||ut===i.TEXTURE_2D_ARRAY?e.texImage3D(ut,rt,At,Rt,Wt,S.depth,0,Nt,_t,null):e.texImage2D(ut,rt,At,Rt,Wt,0,Nt,_t,null)}e.bindFramebuffer(i.FRAMEBUFFER,C),jt(S)?u.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,lt,ut,mt.__webglTexture,0,me(S)):(ut===i.TEXTURE_2D||ut>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ut<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,lt,ut,mt.__webglTexture,rt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function bt(C,S,Y){if(i.bindRenderbuffer(i.RENDERBUFFER,C),S.depthBuffer){let lt=S.depthTexture,ut=lt&&lt.isDepthTexture?lt.type:null,rt=R(S.stencilBuffer,ut),Nt=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,_t=me(S);jt(S)?u.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,_t,rt,S.width,S.height):Y?i.renderbufferStorageMultisample(i.RENDERBUFFER,_t,rt,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,rt,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Nt,i.RENDERBUFFER,C)}else{let lt=S.textures;for(let ut=0;ut<lt.length;ut++){let rt=lt[ut],Nt=o.convert(rt.format,rt.colorSpace),_t=o.convert(rt.type),At=D(rt.internalFormat,Nt,_t,rt.colorSpace),de=me(S);Y&&jt(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,de,At,S.width,S.height):jt(S)?u.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,de,At,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,At,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Vt(C,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,C),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let lt=r.get(S.depthTexture);lt.__renderTarget=S,(!lt.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),ft(S.depthTexture,0);let ut=lt.__webglTexture,rt=me(S);if(S.depthTexture.format===Zr)jt(S)?u.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ut,0,rt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ut,0);else if(S.depthTexture.format===Kr)jt(S)?u.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ut,0,rt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ut,0);else throw new Error("Unknown depthTexture format")}function he(C){let S=r.get(C),Y=C.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==C.depthTexture){let lt=C.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),lt){let ut=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,lt.removeEventListener("dispose",ut)};lt.addEventListener("dispose",ut),S.__depthDisposeCallback=ut}S.__boundDepthTexture=lt}if(C.depthTexture&&!S.__autoAllocateDepthBuffer){if(Y)throw new Error("target.depthTexture not supported in Cube render targets");Vt(S.__webglFramebuffer,C)}else if(Y){S.__webglDepthbuffer=[];for(let lt=0;lt<6;lt++)if(e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[lt]),S.__webglDepthbuffer[lt]===void 0)S.__webglDepthbuffer[lt]=i.createRenderbuffer(),bt(S.__webglDepthbuffer[lt],C,!1);else{let ut=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,rt=S.__webglDepthbuffer[lt];i.bindRenderbuffer(i.RENDERBUFFER,rt),i.framebufferRenderbuffer(i.FRAMEBUFFER,ut,i.RENDERBUFFER,rt)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=i.createRenderbuffer(),bt(S.__webglDepthbuffer,C,!1);else{let lt=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ut=S.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ut),i.framebufferRenderbuffer(i.FRAMEBUFFER,lt,i.RENDERBUFFER,ut)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function $t(C,S,Y){let lt=r.get(C);S!==void 0&&Ut(lt.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),Y!==void 0&&he(C)}function Ne(C){let S=C.texture,Y=r.get(C),lt=r.get(S);C.addEventListener("dispose",O);let ut=C.textures,rt=C.isWebGLCubeRenderTarget===!0,Nt=ut.length>1;if(Nt||(lt.__webglTexture===void 0&&(lt.__webglTexture=i.createTexture()),lt.__version=S.version,l.memory.textures++),rt){Y.__webglFramebuffer=[];for(let _t=0;_t<6;_t++)if(S.mipmaps&&S.mipmaps.length>0){Y.__webglFramebuffer[_t]=[];for(let At=0;At<S.mipmaps.length;At++)Y.__webglFramebuffer[_t][At]=i.createFramebuffer()}else Y.__webglFramebuffer[_t]=i.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){Y.__webglFramebuffer=[];for(let _t=0;_t<S.mipmaps.length;_t++)Y.__webglFramebuffer[_t]=i.createFramebuffer()}else Y.__webglFramebuffer=i.createFramebuffer();if(Nt)for(let _t=0,At=ut.length;_t<At;_t++){let de=r.get(ut[_t]);de.__webglTexture===void 0&&(de.__webglTexture=i.createTexture(),l.memory.textures++)}if(C.samples>0&&jt(C)===!1){Y.__webglMultisampledFramebuffer=i.createFramebuffer(),Y.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let _t=0;_t<ut.length;_t++){let At=ut[_t];Y.__webglColorRenderbuffer[_t]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,Y.__webglColorRenderbuffer[_t]);let de=o.convert(At.format,At.colorSpace),mt=o.convert(At.type),Rt=D(At.internalFormat,de,mt,At.colorSpace,C.isXRRenderTarget===!0),Wt=me(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,Wt,Rt,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.RENDERBUFFER,Y.__webglColorRenderbuffer[_t])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(Y.__webglDepthRenderbuffer=i.createRenderbuffer(),bt(Y.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(rt){e.bindTexture(i.TEXTURE_CUBE_MAP,lt.__webglTexture),oe(i.TEXTURE_CUBE_MAP,S);for(let _t=0;_t<6;_t++)if(S.mipmaps&&S.mipmaps.length>0)for(let At=0;At<S.mipmaps.length;At++)Ut(Y.__webglFramebuffer[_t][At],C,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,At);else Ut(Y.__webglFramebuffer[_t],C,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0);y(S)&&m(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Nt){for(let _t=0,At=ut.length;_t<At;_t++){let de=ut[_t],mt=r.get(de);e.bindTexture(i.TEXTURE_2D,mt.__webglTexture),oe(i.TEXTURE_2D,de),Ut(Y.__webglFramebuffer,C,de,i.COLOR_ATTACHMENT0+_t,i.TEXTURE_2D,0),y(de)&&m(i.TEXTURE_2D)}e.unbindTexture()}else{let _t=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(_t=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(_t,lt.__webglTexture),oe(_t,S),S.mipmaps&&S.mipmaps.length>0)for(let At=0;At<S.mipmaps.length;At++)Ut(Y.__webglFramebuffer[At],C,S,i.COLOR_ATTACHMENT0,_t,At);else Ut(Y.__webglFramebuffer,C,S,i.COLOR_ATTACHMENT0,_t,0);y(S)&&m(_t),e.unbindTexture()}C.depthBuffer&&he(C)}function Re(C){let S=C.textures;for(let Y=0,lt=S.length;Y<lt;Y++){let ut=S[Y];if(y(ut)){let rt=U(C),Nt=r.get(ut).__webglTexture;e.bindTexture(rt,Nt),m(rt),e.unbindTexture()}}}let fe=[],L=[];function rn(C){if(C.samples>0){if(jt(C)===!1){let S=C.textures,Y=C.width,lt=C.height,ut=i.COLOR_BUFFER_BIT,rt=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Nt=r.get(C),_t=S.length>1;if(_t)for(let At=0;At<S.length;At++)e.bindFramebuffer(i.FRAMEBUFFER,Nt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+At,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Nt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+At,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Nt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Nt.__webglFramebuffer);for(let At=0;At<S.length;At++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(ut|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(ut|=i.STENCIL_BUFFER_BIT)),_t){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Nt.__webglColorRenderbuffer[At]);let de=r.get(S[At]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,de,0)}i.blitFramebuffer(0,0,Y,lt,0,0,Y,lt,ut,i.NEAREST),h===!0&&(fe.length=0,L.length=0,fe.push(i.COLOR_ATTACHMENT0+At),C.depthBuffer&&C.resolveDepthBuffer===!1&&(fe.push(rt),L.push(rt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,L)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,fe))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),_t)for(let At=0;At<S.length;At++){e.bindFramebuffer(i.FRAMEBUFFER,Nt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+At,i.RENDERBUFFER,Nt.__webglColorRenderbuffer[At]);let de=r.get(S[At]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Nt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+At,i.TEXTURE_2D,de,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Nt.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&h){let S=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function me(C){return Math.min(a.maxSamples,C.samples)}function jt(C){let S=r.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function zt(C){let S=l.render.frame;p.get(C)!==S&&(p.set(C,S),C.update())}function De(C,S){let Y=C.colorSpace,lt=C.format,ut=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||Y!==jr&&Y!==Qi&&(Me.getTransfer(Y)===Ce?(lt!==ui||ut!==Pi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Y)),S}function Ft(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(f.width=C.naturalWidth||C.width,f.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(f.width=C.displayWidth,f.height=C.displayHeight):(f.width=C.width,f.height=C.height),f}this.allocateTextureUnit=j,this.resetTextureUnits=ot,this.setTexture2D=ft,this.setTexture2DArray=et,this.setTexture3D=pt,this.setTextureCube=K,this.rebindTextures=$t,this.setupRenderTarget=Ne,this.updateRenderTargetMipmap=Re,this.updateMultisampleRenderTarget=rn,this.setupDepthRenderbuffer=he,this.setupFrameBufferTexture=Ut,this.useMultisampledRTT=jt}function kA(i,t){function e(r,a=Qi){let o,l=Me.getTransfer(a);if(r===Pi)return i.UNSIGNED_BYTE;if(r===xl)return i.UNSIGNED_SHORT_4_4_4_4;if(r===Ml)return i.UNSIGNED_SHORT_5_5_5_1;if(r===af)return i.UNSIGNED_INT_5_9_9_9_REV;if(r===rf)return i.BYTE;if(r===sf)return i.SHORT;if(r===Js)return i.UNSIGNED_SHORT;if(r===yl)return i.INT;if(r===Rr)return i.UNSIGNED_INT;if(r===li)return i.FLOAT;if(r===Ks)return i.HALF_FLOAT;if(r===of)return i.ALPHA;if(r===cf)return i.RGB;if(r===ui)return i.RGBA;if(r===lf)return i.LUMINANCE;if(r===uf)return i.LUMINANCE_ALPHA;if(r===Zr)return i.DEPTH_COMPONENT;if(r===Kr)return i.DEPTH_STENCIL;if(r===hf)return i.RED;if(r===Sl)return i.RED_INTEGER;if(r===ff)return i.RG;if(r===bl)return i.RG_INTEGER;if(r===El)return i.RGBA_INTEGER;if(r===so||r===ao||r===oo||r===co)if(l===Ce)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===so)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===ao)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===oo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===co)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===so)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===ao)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===oo)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===co)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===wl||r===Tl||r===Al||r===Cl)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===wl)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Tl)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Al)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Cl)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Rl||r===Pl||r===Il)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(r===Rl||r===Pl)return l===Ce?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===Il)return l===Ce?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Dl||r===Ll||r===Ul||r===Nl||r===Fl||r===Ol||r===Bl||r===zl||r===kl||r===Vl||r===Hl||r===Gl||r===Wl||r===Xl)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(r===Dl)return l===Ce?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Ll)return l===Ce?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Ul)return l===Ce?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Nl)return l===Ce?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Fl)return l===Ce?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Ol)return l===Ce?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Bl)return l===Ce?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===zl)return l===Ce?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===kl)return l===Ce?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Vl)return l===Ce?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Hl)return l===Ce?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Gl)return l===Ce?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Wl)return l===Ce?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Xl)return l===Ce?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===lo||r===ql||r===Yl)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(r===lo)return l===Ce?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===ql)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Yl)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===df||r===Zl||r===$l||r===Jl)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(r===lo)return o.COMPRESSED_RED_RGTC1_EXT;if(r===Zl)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===$l)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Jl)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===rs?i.UNSIGNED_INT_24_8:i[r]!==void 0?i[r]:null}return{convert:e}}var VA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,HA=`
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

}`,Uf=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,r){if(this.texture===null){let a=new pn,o=t.properties.get(a);o.__webglTexture=e.texture,(e.depthNear!==r.depthNear||e.depthFar!==r.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=a}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,r=new $n({vertexShader:VA,fragmentShader:HA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Nn(new ts(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Nf=class extends Ti{constructor(t,e){super();let r=this,a=null,o=1,l=null,u="local-floor",h=1,f=null,p=null,g=null,_=null,v=null,M=null,T=new Uf,y=e.getContextAttributes(),m=null,U=null,D=[],R=[],H=new Gt,F=null,O=new Mn;O.viewport=new Ge;let q=new Mn;q.viewport=new Ge;let P=[O,q],A=new ol,B=null,ot=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(at){let gt=D[at];return gt===void 0&&(gt=new Xs,D[at]=gt),gt.getTargetRaySpace()},this.getControllerGrip=function(at){let gt=D[at];return gt===void 0&&(gt=new Xs,D[at]=gt),gt.getGripSpace()},this.getHand=function(at){let gt=D[at];return gt===void 0&&(gt=new Xs,D[at]=gt),gt.getHandSpace()};function j(at){let gt=R.indexOf(at.inputSource);if(gt===-1)return;let Ut=D[gt];Ut!==void 0&&(Ut.update(at.inputSource,at.frame,f||l),Ut.dispatchEvent({type:at.type,data:at.inputSource}))}function it(){a.removeEventListener("select",j),a.removeEventListener("selectstart",j),a.removeEventListener("selectend",j),a.removeEventListener("squeeze",j),a.removeEventListener("squeezestart",j),a.removeEventListener("squeezeend",j),a.removeEventListener("end",it),a.removeEventListener("inputsourceschange",ft);for(let at=0;at<D.length;at++){let gt=R[at];gt!==null&&(R[at]=null,D[at].disconnect(gt))}B=null,ot=null,T.reset(),t.setRenderTarget(m),v=null,_=null,g=null,a=null,U=null,Te.stop(),r.isPresenting=!1,t.setPixelRatio(F),t.setSize(H.width,H.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(at){o=at,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(at){u=at,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return f||l},this.setReferenceSpace=function(at){f=at},this.getBaseLayer=function(){return _!==null?_:v},this.getBinding=function(){return g},this.getFrame=function(){return M},this.getSession=function(){return a},this.setSession=async function(at){if(a=at,a!==null){if(m=t.getRenderTarget(),a.addEventListener("select",j),a.addEventListener("selectstart",j),a.addEventListener("selectend",j),a.addEventListener("squeeze",j),a.addEventListener("squeezestart",j),a.addEventListener("squeezeend",j),a.addEventListener("end",it),a.addEventListener("inputsourceschange",ft),y.xrCompatible!==!0&&await e.makeXRCompatible(),F=t.getPixelRatio(),t.getSize(H),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ut=null,bt=null,Vt=null;y.depth&&(Vt=y.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Ut=y.stencil?Kr:Zr,bt=y.stencil?rs:Rr);let he={colorFormat:e.RGBA8,depthFormat:Vt,scaleFactor:o};g=new XRWebGLBinding(a,e),_=g.createProjectionLayer(he),a.updateRenderState({layers:[_]}),t.setPixelRatio(1),t.setSize(_.textureWidth,_.textureHeight,!1),U=new Ai(_.textureWidth,_.textureHeight,{format:ui,type:Pi,depthTexture:new Ga(_.textureWidth,_.textureHeight,bt,void 0,void 0,void 0,void 0,void 0,void 0,Ut),stencilBuffer:y.stencil,colorSpace:t.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1})}else{let Ut={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:o};v=new XRWebGLLayer(a,e,Ut),a.updateRenderState({baseLayer:v}),t.setPixelRatio(1),t.setSize(v.framebufferWidth,v.framebufferHeight,!1),U=new Ai(v.framebufferWidth,v.framebufferHeight,{format:ui,type:Pi,colorSpace:t.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}U.isXRRenderTarget=!0,this.setFoveation(h),f=null,l=await a.requestReferenceSpace(u),Te.setContext(a),Te.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return T.getDepthTexture()};function ft(at){for(let gt=0;gt<at.removed.length;gt++){let Ut=at.removed[gt],bt=R.indexOf(Ut);bt>=0&&(R[bt]=null,D[bt].disconnect(Ut))}for(let gt=0;gt<at.added.length;gt++){let Ut=at.added[gt],bt=R.indexOf(Ut);if(bt===-1){for(let he=0;he<D.length;he++)if(he>=R.length){R.push(Ut),bt=he;break}else if(R[he]===null){R[he]=Ut,bt=he;break}if(bt===-1)break}let Vt=D[bt];Vt&&Vt.connect(Ut)}}let et=new W,pt=new W;function K(at,gt,Ut){et.setFromMatrixPosition(gt.matrixWorld),pt.setFromMatrixPosition(Ut.matrixWorld);let bt=et.distanceTo(pt),Vt=gt.projectionMatrix.elements,he=Ut.projectionMatrix.elements,$t=Vt[14]/(Vt[10]-1),Ne=Vt[14]/(Vt[10]+1),Re=(Vt[9]+1)/Vt[5],fe=(Vt[9]-1)/Vt[5],L=(Vt[8]-1)/Vt[0],rn=(he[8]+1)/he[0],me=$t*L,jt=$t*rn,zt=bt/(-L+rn),De=zt*-L;if(gt.matrixWorld.decompose(at.position,at.quaternion,at.scale),at.translateX(De),at.translateZ(zt),at.matrixWorld.compose(at.position,at.quaternion,at.scale),at.matrixWorldInverse.copy(at.matrixWorld).invert(),Vt[10]===-1)at.projectionMatrix.copy(gt.projectionMatrix),at.projectionMatrixInverse.copy(gt.projectionMatrixInverse);else{let Ft=$t+zt,C=Ne+zt,S=me-De,Y=jt+(bt-De),lt=Re*Ne/C*Ft,ut=fe*Ne/C*Ft;at.projectionMatrix.makePerspective(S,Y,lt,ut,Ft,C),at.projectionMatrixInverse.copy(at.projectionMatrix).invert()}}function St(at,gt){gt===null?at.matrixWorld.copy(at.matrix):at.matrixWorld.multiplyMatrices(gt.matrixWorld,at.matrix),at.matrixWorldInverse.copy(at.matrixWorld).invert()}this.updateCamera=function(at){if(a===null)return;let gt=at.near,Ut=at.far;T.texture!==null&&(T.depthNear>0&&(gt=T.depthNear),T.depthFar>0&&(Ut=T.depthFar)),A.near=q.near=O.near=gt,A.far=q.far=O.far=Ut,(B!==A.near||ot!==A.far)&&(a.updateRenderState({depthNear:A.near,depthFar:A.far}),B=A.near,ot=A.far),O.layers.mask=at.layers.mask|2,q.layers.mask=at.layers.mask|4,A.layers.mask=O.layers.mask|q.layers.mask;let bt=at.parent,Vt=A.cameras;St(A,bt);for(let he=0;he<Vt.length;he++)St(Vt[he],bt);Vt.length===2?K(A,O,q):A.projectionMatrix.copy(O.projectionMatrix),Tt(at,A,bt)};function Tt(at,gt,Ut){Ut===null?at.matrix.copy(gt.matrixWorld):(at.matrix.copy(Ut.matrixWorld),at.matrix.invert(),at.matrix.multiply(gt.matrixWorld)),at.matrix.decompose(at.position,at.quaternion,at.scale),at.updateMatrixWorld(!0),at.projectionMatrix.copy(gt.projectionMatrix),at.projectionMatrixInverse.copy(gt.projectionMatrixInverse),at.isPerspectiveCamera&&(at.fov=Vs*2*Math.atan(1/at.projectionMatrix.elements[5]),at.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(!(_===null&&v===null))return h},this.setFoveation=function(at){h=at,_!==null&&(_.fixedFoveation=at),v!==null&&v.fixedFoveation!==void 0&&(v.fixedFoveation=at)},this.hasDepthSensing=function(){return T.texture!==null},this.getDepthSensingMesh=function(){return T.getMesh(A)};let Lt=null;function oe(at,gt){if(p=gt.getViewerPose(f||l),M=gt,p!==null){let Ut=p.views;v!==null&&(t.setRenderTargetFramebuffer(U,v.framebuffer),t.setRenderTarget(U));let bt=!1;Ut.length!==A.cameras.length&&(A.cameras.length=0,bt=!0);for(let $t=0;$t<Ut.length;$t++){let Ne=Ut[$t],Re=null;if(v!==null)Re=v.getViewport(Ne);else{let L=g.getViewSubImage(_,Ne);Re=L.viewport,$t===0&&(t.setRenderTargetTextures(U,L.colorTexture,_.ignoreDepthValues?void 0:L.depthStencilTexture),t.setRenderTarget(U))}let fe=P[$t];fe===void 0&&(fe=new Mn,fe.layers.enable($t),fe.viewport=new Ge,P[$t]=fe),fe.matrix.fromArray(Ne.transform.matrix),fe.matrix.decompose(fe.position,fe.quaternion,fe.scale),fe.projectionMatrix.fromArray(Ne.projectionMatrix),fe.projectionMatrixInverse.copy(fe.projectionMatrix).invert(),fe.viewport.set(Re.x,Re.y,Re.width,Re.height),$t===0&&(A.matrix.copy(fe.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),bt===!0&&A.cameras.push(fe)}let Vt=a.enabledFeatures;if(Vt&&Vt.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&g){let $t=g.getDepthInformation(Ut[0]);$t&&$t.isValid&&$t.texture&&T.init(t,$t,a.renderState)}}for(let Ut=0;Ut<D.length;Ut++){let bt=R[Ut],Vt=D[Ut];bt!==null&&Vt!==void 0&&Vt.update(bt,gt,f||l)}Lt&&Lt(at,gt),gt.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:gt}),M=null}let Te=new t_;Te.setAnimationLoop(oe),this.setAnimationLoop=function(at){Lt=at},this.dispose=function(){}}},os=new Zn,GA=new ke;function WA(i,t){function e(y,m){y.matrixAutoUpdate===!0&&y.updateMatrix(),m.value.copy(y.matrix)}function r(y,m){m.color.getRGB(y.fogColor.value,vf(i)),m.isFog?(y.fogNear.value=m.near,y.fogFar.value=m.far):m.isFogExp2&&(y.fogDensity.value=m.density)}function a(y,m,U,D,R){m.isMeshBasicMaterial||m.isMeshLambertMaterial?o(y,m):m.isMeshToonMaterial?(o(y,m),g(y,m)):m.isMeshPhongMaterial?(o(y,m),p(y,m)):m.isMeshStandardMaterial?(o(y,m),_(y,m),m.isMeshPhysicalMaterial&&v(y,m,R)):m.isMeshMatcapMaterial?(o(y,m),M(y,m)):m.isMeshDepthMaterial?o(y,m):m.isMeshDistanceMaterial?(o(y,m),T(y,m)):m.isMeshNormalMaterial?o(y,m):m.isLineBasicMaterial?(l(y,m),m.isLineDashedMaterial&&u(y,m)):m.isPointsMaterial?h(y,m,U,D):m.isSpriteMaterial?f(y,m):m.isShadowMaterial?(y.color.value.copy(m.color),y.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function o(y,m){y.opacity.value=m.opacity,m.color&&y.diffuse.value.copy(m.color),m.emissive&&y.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(y.map.value=m.map,e(m.map,y.mapTransform)),m.alphaMap&&(y.alphaMap.value=m.alphaMap,e(m.alphaMap,y.alphaMapTransform)),m.bumpMap&&(y.bumpMap.value=m.bumpMap,e(m.bumpMap,y.bumpMapTransform),y.bumpScale.value=m.bumpScale,m.side===Cn&&(y.bumpScale.value*=-1)),m.normalMap&&(y.normalMap.value=m.normalMap,e(m.normalMap,y.normalMapTransform),y.normalScale.value.copy(m.normalScale),m.side===Cn&&y.normalScale.value.negate()),m.displacementMap&&(y.displacementMap.value=m.displacementMap,e(m.displacementMap,y.displacementMapTransform),y.displacementScale.value=m.displacementScale,y.displacementBias.value=m.displacementBias),m.emissiveMap&&(y.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,y.emissiveMapTransform)),m.specularMap&&(y.specularMap.value=m.specularMap,e(m.specularMap,y.specularMapTransform)),m.alphaTest>0&&(y.alphaTest.value=m.alphaTest);let U=t.get(m),D=U.envMap,R=U.envMapRotation;D&&(y.envMap.value=D,os.copy(R),os.x*=-1,os.y*=-1,os.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(os.y*=-1,os.z*=-1),y.envMapRotation.value.setFromMatrix4(GA.makeRotationFromEuler(os)),y.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=m.reflectivity,y.ior.value=m.ior,y.refractionRatio.value=m.refractionRatio),m.lightMap&&(y.lightMap.value=m.lightMap,y.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,y.lightMapTransform)),m.aoMap&&(y.aoMap.value=m.aoMap,y.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,y.aoMapTransform))}function l(y,m){y.diffuse.value.copy(m.color),y.opacity.value=m.opacity,m.map&&(y.map.value=m.map,e(m.map,y.mapTransform))}function u(y,m){y.dashSize.value=m.dashSize,y.totalSize.value=m.dashSize+m.gapSize,y.scale.value=m.scale}function h(y,m,U,D){y.diffuse.value.copy(m.color),y.opacity.value=m.opacity,y.size.value=m.size*U,y.scale.value=D*.5,m.map&&(y.map.value=m.map,e(m.map,y.uvTransform)),m.alphaMap&&(y.alphaMap.value=m.alphaMap,e(m.alphaMap,y.alphaMapTransform)),m.alphaTest>0&&(y.alphaTest.value=m.alphaTest)}function f(y,m){y.diffuse.value.copy(m.color),y.opacity.value=m.opacity,y.rotation.value=m.rotation,m.map&&(y.map.value=m.map,e(m.map,y.mapTransform)),m.alphaMap&&(y.alphaMap.value=m.alphaMap,e(m.alphaMap,y.alphaMapTransform)),m.alphaTest>0&&(y.alphaTest.value=m.alphaTest)}function p(y,m){y.specular.value.copy(m.specular),y.shininess.value=Math.max(m.shininess,1e-4)}function g(y,m){m.gradientMap&&(y.gradientMap.value=m.gradientMap)}function _(y,m){y.metalness.value=m.metalness,m.metalnessMap&&(y.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,y.metalnessMapTransform)),y.roughness.value=m.roughness,m.roughnessMap&&(y.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,y.roughnessMapTransform)),m.envMap&&(y.envMapIntensity.value=m.envMapIntensity)}function v(y,m,U){y.ior.value=m.ior,m.sheen>0&&(y.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),y.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(y.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,y.sheenColorMapTransform)),m.sheenRoughnessMap&&(y.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,y.sheenRoughnessMapTransform))),m.clearcoat>0&&(y.clearcoat.value=m.clearcoat,y.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(y.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,y.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(y.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Cn&&y.clearcoatNormalScale.value.negate())),m.dispersion>0&&(y.dispersion.value=m.dispersion),m.iridescence>0&&(y.iridescence.value=m.iridescence,y.iridescenceIOR.value=m.iridescenceIOR,y.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(y.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,y.iridescenceMapTransform)),m.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),m.transmission>0&&(y.transmission.value=m.transmission,y.transmissionSamplerMap.value=U.texture,y.transmissionSamplerSize.value.set(U.width,U.height),m.transmissionMap&&(y.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,y.transmissionMapTransform)),y.thickness.value=m.thickness,m.thicknessMap&&(y.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=m.attenuationDistance,y.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(y.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(y.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=m.specularIntensity,y.specularColor.value.copy(m.specularColor),m.specularColorMap&&(y.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,y.specularColorMapTransform)),m.specularIntensityMap&&(y.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,y.specularIntensityMapTransform))}function M(y,m){m.matcap&&(y.matcap.value=m.matcap)}function T(y,m){let U=t.get(m).light;y.referencePosition.value.setFromMatrixPosition(U.matrixWorld),y.nearDistance.value=U.shadow.camera.near,y.farDistance.value=U.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:a}}function XA(i,t,e,r){let a={},o={},l=[],u=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function h(U,D){let R=D.program;r.uniformBlockBinding(U,R)}function f(U,D){let R=a[U.id];R===void 0&&(M(U),R=p(U),a[U.id]=R,U.addEventListener("dispose",y));let H=D.program;r.updateUBOMapping(U,H);let F=t.render.frame;o[U.id]!==F&&(_(U),o[U.id]=F)}function p(U){let D=g();U.__bindingPointIndex=D;let R=i.createBuffer(),H=U.__size,F=U.usage;return i.bindBuffer(i.UNIFORM_BUFFER,R),i.bufferData(i.UNIFORM_BUFFER,H,F),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,D,R),R}function g(){for(let U=0;U<u;U++)if(l.indexOf(U)===-1)return l.push(U),U;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(U){let D=a[U.id],R=U.uniforms,H=U.__cache;i.bindBuffer(i.UNIFORM_BUFFER,D);for(let F=0,O=R.length;F<O;F++){let q=Array.isArray(R[F])?R[F]:[R[F]];for(let P=0,A=q.length;P<A;P++){let B=q[P];if(v(B,F,P,H)===!0){let ot=B.__offset,j=Array.isArray(B.value)?B.value:[B.value],it=0;for(let ft=0;ft<j.length;ft++){let et=j[ft],pt=T(et);typeof et=="number"||typeof et=="boolean"?(B.__data[0]=et,i.bufferSubData(i.UNIFORM_BUFFER,ot+it,B.__data)):et.isMatrix3?(B.__data[0]=et.elements[0],B.__data[1]=et.elements[1],B.__data[2]=et.elements[2],B.__data[3]=0,B.__data[4]=et.elements[3],B.__data[5]=et.elements[4],B.__data[6]=et.elements[5],B.__data[7]=0,B.__data[8]=et.elements[6],B.__data[9]=et.elements[7],B.__data[10]=et.elements[8],B.__data[11]=0):(et.toArray(B.__data,it),it+=pt.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,ot,B.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function v(U,D,R,H){let F=U.value,O=D+"_"+R;if(H[O]===void 0)return typeof F=="number"||typeof F=="boolean"?H[O]=F:H[O]=F.clone(),!0;{let q=H[O];if(typeof F=="number"||typeof F=="boolean"){if(q!==F)return H[O]=F,!0}else if(q.equals(F)===!1)return q.copy(F),!0}return!1}function M(U){let D=U.uniforms,R=0,H=16;for(let O=0,q=D.length;O<q;O++){let P=Array.isArray(D[O])?D[O]:[D[O]];for(let A=0,B=P.length;A<B;A++){let ot=P[A],j=Array.isArray(ot.value)?ot.value:[ot.value];for(let it=0,ft=j.length;it<ft;it++){let et=j[it],pt=T(et),K=R%H,St=K%pt.boundary,Tt=K+St;R+=St,Tt!==0&&H-Tt<pt.storage&&(R+=H-Tt),ot.__data=new Float32Array(pt.storage/Float32Array.BYTES_PER_ELEMENT),ot.__offset=R,R+=pt.storage}}}let F=R%H;return F>0&&(R+=H-F),U.__size=R,U.__cache={},this}function T(U){let D={boundary:0,storage:0};return typeof U=="number"||typeof U=="boolean"?(D.boundary=4,D.storage=4):U.isVector2?(D.boundary=8,D.storage=8):U.isVector3||U.isColor?(D.boundary=16,D.storage=12):U.isVector4?(D.boundary=16,D.storage=16):U.isMatrix3?(D.boundary=48,D.storage=48):U.isMatrix4?(D.boundary=64,D.storage=64):U.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",U),D}function y(U){let D=U.target;D.removeEventListener("dispose",y);let R=l.indexOf(D.__bindingPointIndex);l.splice(R,1),i.deleteBuffer(a[D.id]),delete a[D.id],delete o[D.id]}function m(){for(let U in a)i.deleteBuffer(a[U]);l=[],a={},o={}}return{bind:h,update:f,dispose:m}}var eu=class{constructor(t={}){let{canvas:e=Eg(),context:r=null,depth:a=!0,stencil:o=!1,alpha:l=!1,antialias:u=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:f=!1,powerPreference:p="default",failIfMajorPerformanceCaveat:g=!1,reverseDepthBuffer:_=!1}=t;this.isWebGLRenderer=!0;let v;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=r.getContextAttributes().alpha}else v=l;let M=new Uint32Array(4),T=new Int32Array(4),y=null,m=null,U=[],D=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=qn,this.toneMapping=ji,this.toneMappingExposure=1;let R=this,H=!1,F=0,O=0,q=null,P=-1,A=null,B=new Ge,ot=new Ge,j=null,it=new Bt(0),ft=0,et=e.width,pt=e.height,K=1,St=null,Tt=null,Lt=new Ge(0,0,et,pt),oe=new Ge(0,0,et,pt),Te=!1,at=new qs,gt=!1,Ut=!1;this.transmissionResolutionScale=1;let bt=new ke,Vt=new ke,he=new W,$t=new Ge,Ne={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Re=!1;function fe(){return q===null?K:1}let L=r;function rn(E,k){return e.getContext(E,k)}try{let E={alpha:!0,depth:a,stencil:o,antialias:u,premultipliedAlpha:h,preserveDrawingBuffer:f,powerPreference:p,failIfMajorPerformanceCaveat:g};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${cl}`),e.addEventListener("webglcontextlost",ct,!1),e.addEventListener("webglcontextrestored",wt,!1),e.addEventListener("webglcontextcreationerror",Et,!1),L===null){let k="webgl2";if(L=rn(k,E),L===null)throw rn(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let me,jt,zt,De,Ft,C,S,Y,lt,ut,rt,Nt,_t,At,de,mt,Rt,Wt,Zt,Pt,ue,Qt,Pe,z;function xt(){me=new lT(L),me.init(),Qt=new kA(L,me),jt=new nT(L,me,t,Qt),zt=new BA(L,me),jt.reverseDepthBuffer&&_&&zt.buffers.depth.setReversed(!0),De=new fT(L),Ft=new wA,C=new zA(L,me,zt,Ft,jt,Qt,De),S=new rT(R),Y=new cT(R),lt=new vE(L),Pe=new tT(L,lt),ut=new uT(L,lt,De,Pe),rt=new pT(L,ut,lt,De),Zt=new dT(L,jt,C),mt=new iT(Ft),Nt=new EA(R,S,Y,me,jt,Pe,mt),_t=new WA(R,Ft),At=new AA,de=new LA(me),Wt=new Qw(R,S,Y,zt,rt,v,h),Rt=new FA(R,rt,jt),z=new XA(L,De,jt,zt),Pt=new eT(L,me,De),ue=new hT(L,me,De),De.programs=Nt.programs,R.capabilities=jt,R.extensions=me,R.properties=Ft,R.renderLists=At,R.shadowMap=Rt,R.state=zt,R.info=De}xt();let Q=new Nf(R,L);this.xr=Q,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){let E=me.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=me.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(E){E!==void 0&&(K=E,this.setSize(et,pt,!1))},this.getSize=function(E){return E.set(et,pt)},this.setSize=function(E,k,Z=!0){if(Q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}et=E,pt=k,e.width=Math.floor(E*K),e.height=Math.floor(k*K),Z===!0&&(e.style.width=E+"px",e.style.height=k+"px"),this.setViewport(0,0,E,k)},this.getDrawingBufferSize=function(E){return E.set(et*K,pt*K).floor()},this.setDrawingBufferSize=function(E,k,Z){et=E,pt=k,K=Z,e.width=Math.floor(E*Z),e.height=Math.floor(k*Z),this.setViewport(0,0,E,k)},this.getCurrentViewport=function(E){return E.copy(B)},this.getViewport=function(E){return E.copy(Lt)},this.setViewport=function(E,k,Z,$){E.isVector4?Lt.set(E.x,E.y,E.z,E.w):Lt.set(E,k,Z,$),zt.viewport(B.copy(Lt).multiplyScalar(K).round())},this.getScissor=function(E){return E.copy(oe)},this.setScissor=function(E,k,Z,$){E.isVector4?oe.set(E.x,E.y,E.z,E.w):oe.set(E,k,Z,$),zt.scissor(ot.copy(oe).multiplyScalar(K).round())},this.getScissorTest=function(){return Te},this.setScissorTest=function(E){zt.setScissorTest(Te=E)},this.setOpaqueSort=function(E){St=E},this.setTransparentSort=function(E){Tt=E},this.getClearColor=function(E){return E.copy(Wt.getClearColor())},this.setClearColor=function(){Wt.setClearColor(...arguments)},this.getClearAlpha=function(){return Wt.getClearAlpha()},this.setClearAlpha=function(){Wt.setClearAlpha(...arguments)},this.clear=function(E=!0,k=!0,Z=!0){let $=0;if(E){let X=!1;if(q!==null){let dt=q.texture.format;X=dt===El||dt===bl||dt===Sl}if(X){let dt=q.texture.type,Mt=dt===Pi||dt===Rr||dt===Js||dt===rs||dt===xl||dt===Ml,Ct=Wt.getClearColor(),Dt=Wt.getClearAlpha(),Jt=Ct.r,Kt=Ct.g,Ht=Ct.b;Mt?(M[0]=Jt,M[1]=Kt,M[2]=Ht,M[3]=Dt,L.clearBufferuiv(L.COLOR,0,M)):(T[0]=Jt,T[1]=Kt,T[2]=Ht,T[3]=Dt,L.clearBufferiv(L.COLOR,0,T))}else $|=L.COLOR_BUFFER_BIT}k&&($|=L.DEPTH_BUFFER_BIT),Z&&($|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ct,!1),e.removeEventListener("webglcontextrestored",wt,!1),e.removeEventListener("webglcontextcreationerror",Et,!1),Wt.dispose(),At.dispose(),de.dispose(),Ft.dispose(),S.dispose(),Y.dispose(),rt.dispose(),Pe.dispose(),z.dispose(),Nt.dispose(),Q.dispose(),Q.removeEventListener("sessionstart",fs),Q.removeEventListener("sessionend",mo),fi.stop()};function ct(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),H=!0}function wt(){console.log("THREE.WebGLRenderer: Context Restored."),H=!1;let E=De.autoReset,k=Rt.enabled,Z=Rt.autoUpdate,$=Rt.needsUpdate,X=Rt.type;xt(),De.autoReset=E,Rt.enabled=k,Rt.autoUpdate=Z,Rt.needsUpdate=$,Rt.type=X}function Et(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function ee(E){let k=E.target;k.removeEventListener("dispose",ee),Ve(k)}function Ve(E){Je(E),Ft.remove(E)}function Je(E){let k=Ft.get(E).programs;k!==void 0&&(k.forEach(function(Z){Nt.releaseProgram(Z)}),E.isShaderMaterial&&Nt.releaseShaderCache(E))}this.renderBufferDirect=function(E,k,Z,$,X,dt){k===null&&(k=Ne);let Mt=X.isMesh&&X.matrixWorld.determinant()<0,Ct=Mo(E,k,Z,$,X);zt.setMaterial($,Mt);let Dt=Z.index,Jt=1;if($.wireframe===!0){if(Dt=ut.getWireframeAttribute(Z),Dt===void 0)return;Jt=2}let Kt=Z.drawRange,Ht=Z.attributes.position,_e=Kt.start*Jt,Se=(Kt.start+Kt.count)*Jt;dt!==null&&(_e=Math.max(_e,dt.start*Jt),Se=Math.min(Se,(dt.start+dt.count)*Jt)),Dt!==null?(_e=Math.max(_e,0),Se=Math.min(Se,Dt.count)):Ht!=null&&(_e=Math.max(_e,0),Se=Math.min(Se,Ht.count));let We=Se-_e;if(We<0||We===1/0)return;Pe.setup(X,$,Ct,Z,Dt);let Oe,ve=Pt;if(Dt!==null&&(Oe=lt.get(Dt),ve=ue,ve.setIndex(Oe)),X.isMesh)$.wireframe===!0?(zt.setLineWidth($.wireframeLinewidth*fe()),ve.setMode(L.LINES)):ve.setMode(L.TRIANGLES);else if(X.isLine){let kt=$.linewidth;kt===void 0&&(kt=1),zt.setLineWidth(kt*fe()),X.isLineSegments?ve.setMode(L.LINES):X.isLineLoop?ve.setMode(L.LINE_LOOP):ve.setMode(L.LINE_STRIP)}else X.isPoints?ve.setMode(L.POINTS):X.isSprite&&ve.setMode(L.TRIANGLES);if(X.isBatchedMesh)if(X._multiDrawInstances!==null)Ir("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ve.renderMultiDrawInstances(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount,X._multiDrawInstances);else if(me.get("WEBGL_multi_draw"))ve.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{let kt=X._multiDrawStarts,Ke=X._multiDrawCounts,xe=X._multiDrawCount,mn=Dt?lt.get(Dt).bytesPerElement:1,Di=Ft.get($).currentProgram.getUniforms();for(let bn=0;bn<xe;bn++)Di.setValue(L,"_gl_DrawID",bn),ve.render(kt[bn]/mn,Ke[bn])}else if(X.isInstancedMesh)ve.renderInstances(_e,We,X.count);else if(Z.isInstancedBufferGeometry){let kt=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,Ke=Math.min(Z.instanceCount,kt);ve.renderInstances(_e,We,Ke)}else ve.render(_e,We)};function be(E,k,Z){E.transparent===!0&&E.side===Ri&&E.forceSinglePass===!1?(E.side=Cn,E.needsUpdate=!0,ps(E,k,Z),E.side=Ji,E.needsUpdate=!0,ps(E,k,Z),E.side=Ri):ps(E,k,Z)}this.compile=function(E,k,Z=null){Z===null&&(Z=E),m=de.get(Z),m.init(k),D.push(m),Z.traverseVisible(function(X){X.isLight&&X.layers.test(k.layers)&&(m.pushLight(X),X.castShadow&&m.pushShadow(X))}),E!==Z&&E.traverseVisible(function(X){X.isLight&&X.layers.test(k.layers)&&(m.pushLight(X),X.castShadow&&m.pushShadow(X))}),m.setupLights();let $=new Set;return E.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;let dt=X.material;if(dt)if(Array.isArray(dt))for(let Mt=0;Mt<dt.length;Mt++){let Ct=dt[Mt];be(Ct,Z,X),$.add(Ct)}else be(dt,Z,X),$.add(dt)}),m=D.pop(),$},this.compileAsync=function(E,k,Z=null){let $=this.compile(E,k,Z);return new Promise(X=>{function dt(){if($.forEach(function(Mt){Ft.get(Mt).currentProgram.isReady()&&$.delete(Mt)}),$.size===0){X(E);return}setTimeout(dt,10)}me.get("KHR_parallel_shader_compile")!==null?dt():setTimeout(dt,10)})};let On=null;function hi(E){On&&On(E)}function fs(){fi.stop()}function mo(){fi.start()}let fi=new t_;fi.setAnimationLoop(hi),typeof self<"u"&&fi.setContext(self),this.setAnimationLoop=function(E){On=E,Q.setAnimationLoop(E),E===null?fi.stop():fi.start()},Q.addEventListener("sessionstart",fs),Q.addEventListener("sessionend",mo),this.render=function(E,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(H===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),Q.enabled===!0&&Q.isPresenting===!0&&(Q.cameraAutoUpdate===!0&&Q.updateCamera(k),k=Q.getCamera()),E.isScene===!0&&E.onBeforeRender(R,E,k,q),m=de.get(E,D.length),m.init(k),D.push(m),Vt.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),at.setFromProjectionMatrix(Vt),Ut=this.localClippingEnabled,gt=mt.init(this.clippingPlanes,Ut),y=At.get(E,U.length),y.init(),U.push(y),Q.enabled===!0&&Q.isPresenting===!0){let dt=R.xr.getDepthSensingMesh();dt!==null&&aa(dt,k,-1/0,R.sortObjects)}aa(E,k,0,R.sortObjects),y.finish(),R.sortObjects===!0&&y.sort(St,Tt),Re=Q.enabled===!1||Q.isPresenting===!1||Q.hasDepthSensing()===!1,Re&&Wt.addToRenderList(y,E),this.info.render.frame++,gt===!0&&mt.beginShadows();let Z=m.state.shadowsArray;Rt.render(Z,E,k),gt===!0&&mt.endShadows(),this.info.autoReset===!0&&this.info.reset();let $=y.opaque,X=y.transmissive;if(m.setupLights(),k.isArrayCamera){let dt=k.cameras;if(X.length>0)for(let Mt=0,Ct=dt.length;Mt<Ct;Mt++){let Dt=dt[Mt];_o($,X,E,Dt)}Re&&Wt.render(E);for(let Mt=0,Ct=dt.length;Mt<Ct;Mt++){let Dt=dt[Mt];go(y,E,Dt,Dt.viewport)}}else X.length>0&&_o($,X,E,k),Re&&Wt.render(E),go(y,E,k);q!==null&&O===0&&(C.updateMultisampleRenderTarget(q),C.updateRenderTargetMipmap(q)),E.isScene===!0&&E.onAfterRender(R,E,k),Pe.resetDefaultState(),P=-1,A=null,D.pop(),D.length>0?(m=D[D.length-1],gt===!0&&mt.setGlobalState(R.clippingPlanes,m.state.camera)):m=null,U.pop(),U.length>0?y=U[U.length-1]:y=null};function aa(E,k,Z,$){if(E.visible===!1)return;if(E.layers.test(k.layers)){if(E.isGroup)Z=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(k);else if(E.isLight)m.pushLight(E),E.castShadow&&m.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||at.intersectsSprite(E)){$&&$t.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Vt);let Mt=rt.update(E),Ct=E.material;Ct.visible&&y.push(E,Mt,Ct,Z,$t.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||at.intersectsObject(E))){let Mt=rt.update(E),Ct=E.material;if($&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),$t.copy(E.boundingSphere.center)):(Mt.boundingSphere===null&&Mt.computeBoundingSphere(),$t.copy(Mt.boundingSphere.center)),$t.applyMatrix4(E.matrixWorld).applyMatrix4(Vt)),Array.isArray(Ct)){let Dt=Mt.groups;for(let Jt=0,Kt=Dt.length;Jt<Kt;Jt++){let Ht=Dt[Jt],_e=Ct[Ht.materialIndex];_e&&_e.visible&&y.push(E,Mt,_e,Z,$t.z,Ht)}}else Ct.visible&&y.push(E,Mt,Ct,Z,$t.z,null)}}let dt=E.children;for(let Mt=0,Ct=dt.length;Mt<Ct;Mt++)aa(dt[Mt],k,Z,$)}function go(E,k,Z,$){let X=E.opaque,dt=E.transmissive,Mt=E.transparent;m.setupLightsView(Z),gt===!0&&mt.setGlobalState(R.clippingPlanes,Z),$&&zt.viewport(B.copy($)),X.length>0&&ds(X,k,Z),dt.length>0&&ds(dt,k,Z),Mt.length>0&&ds(Mt,k,Z),zt.buffers.depth.setTest(!0),zt.buffers.depth.setMask(!0),zt.buffers.color.setMask(!0),zt.setPolygonOffset(!1)}function _o(E,k,Z,$){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[$.id]===void 0&&(m.state.transmissionRenderTarget[$.id]=new Ai(1,1,{generateMipmaps:!0,type:me.has("EXT_color_buffer_half_float")||me.has("EXT_color_buffer_float")?Ks:Pi,minFilter:Cr,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Me.workingColorSpace}));let dt=m.state.transmissionRenderTarget[$.id],Mt=$.viewport||B;dt.setSize(Mt.z*R.transmissionResolutionScale,Mt.w*R.transmissionResolutionScale);let Ct=R.getRenderTarget();R.setRenderTarget(dt),R.getClearColor(it),ft=R.getClearAlpha(),ft<1&&R.setClearColor(16777215,.5),R.clear(),Re&&Wt.render(Z);let Dt=R.toneMapping;R.toneMapping=ji;let Jt=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),m.setupLightsView($),gt===!0&&mt.setGlobalState(R.clippingPlanes,$),ds(E,Z,$),C.updateMultisampleRenderTarget(dt),C.updateRenderTargetMipmap(dt),me.has("WEBGL_multisampled_render_to_texture")===!1){let Kt=!1;for(let Ht=0,_e=k.length;Ht<_e;Ht++){let Se=k[Ht],We=Se.object,Oe=Se.geometry,ve=Se.material,kt=Se.group;if(ve.side===Ri&&We.layers.test($.layers)){let Ke=ve.side;ve.side=Cn,ve.needsUpdate=!0,vo(We,Z,$,Oe,ve,kt),ve.side=Ke,ve.needsUpdate=!0,Kt=!0}}Kt===!0&&(C.updateMultisampleRenderTarget(dt),C.updateRenderTargetMipmap(dt))}R.setRenderTarget(Ct),R.setClearColor(it,ft),Jt!==void 0&&($.viewport=Jt),R.toneMapping=Dt}function ds(E,k,Z){let $=k.isScene===!0?k.overrideMaterial:null;for(let X=0,dt=E.length;X<dt;X++){let Mt=E[X],Ct=Mt.object,Dt=Mt.geometry,Jt=$===null?Mt.material:$,Kt=Mt.group;Ct.layers.test(Z.layers)&&vo(Ct,k,Z,Dt,Jt,Kt)}}function vo(E,k,Z,$,X,dt){E.onBeforeRender(R,k,Z,$,X,dt),E.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),X.onBeforeRender(R,k,Z,$,E,dt),X.transparent===!0&&X.side===Ri&&X.forceSinglePass===!1?(X.side=Cn,X.needsUpdate=!0,R.renderBufferDirect(Z,k,$,X,E,dt),X.side=Ji,X.needsUpdate=!0,R.renderBufferDirect(Z,k,$,X,E,dt),X.side=Ri):R.renderBufferDirect(Z,k,$,X,E,dt),E.onAfterRender(R,k,Z,$,X,dt)}function ps(E,k,Z){k.isScene!==!0&&(k=Ne);let $=Ft.get(E),X=m.state.lights,dt=m.state.shadowsArray,Mt=X.state.version,Ct=Nt.getParameters(E,X.state,dt,k,Z),Dt=Nt.getProgramCacheKey(Ct),Jt=$.programs;$.environment=E.isMeshStandardMaterial?k.environment:null,$.fog=k.fog,$.envMap=(E.isMeshStandardMaterial?Y:S).get(E.envMap||$.environment),$.envMapRotation=$.environment!==null&&E.envMap===null?k.environmentRotation:E.envMapRotation,Jt===void 0&&(E.addEventListener("dispose",ee),Jt=new Map,$.programs=Jt);let Kt=Jt.get(Dt);if(Kt!==void 0){if($.currentProgram===Kt&&$.lightsStateVersion===Mt)return xo(E,Ct),Kt}else Ct.uniforms=Nt.getUniforms(E),E.onBeforeCompile(Ct,R),Kt=Nt.acquireProgram(Ct,Dt),Jt.set(Dt,Kt),$.uniforms=Ct.uniforms;let Ht=$.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ht.clippingPlanes=mt.uniform),xo(E,Ct),$.needsLights=cu(E),$.lightsStateVersion=Mt,$.needsLights&&(Ht.ambientLightColor.value=X.state.ambient,Ht.lightProbe.value=X.state.probe,Ht.directionalLights.value=X.state.directional,Ht.directionalLightShadows.value=X.state.directionalShadow,Ht.spotLights.value=X.state.spot,Ht.spotLightShadows.value=X.state.spotShadow,Ht.rectAreaLights.value=X.state.rectArea,Ht.ltc_1.value=X.state.rectAreaLTC1,Ht.ltc_2.value=X.state.rectAreaLTC2,Ht.pointLights.value=X.state.point,Ht.pointLightShadows.value=X.state.pointShadow,Ht.hemisphereLights.value=X.state.hemi,Ht.directionalShadowMap.value=X.state.directionalShadowMap,Ht.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Ht.spotShadowMap.value=X.state.spotShadowMap,Ht.spotLightMatrix.value=X.state.spotLightMatrix,Ht.spotLightMap.value=X.state.spotLightMap,Ht.pointShadowMap.value=X.state.pointShadowMap,Ht.pointShadowMatrix.value=X.state.pointShadowMatrix),$.currentProgram=Kt,$.uniformsList=null,Kt}function yo(E){if(E.uniformsList===null){let k=E.currentProgram.getUniforms();E.uniformsList=ea.seqWithValue(k.seq,E.uniforms)}return E.uniformsList}function xo(E,k){let Z=Ft.get(E);Z.outputColorSpace=k.outputColorSpace,Z.batching=k.batching,Z.batchingColor=k.batchingColor,Z.instancing=k.instancing,Z.instancingColor=k.instancingColor,Z.instancingMorph=k.instancingMorph,Z.skinning=k.skinning,Z.morphTargets=k.morphTargets,Z.morphNormals=k.morphNormals,Z.morphColors=k.morphColors,Z.morphTargetsCount=k.morphTargetsCount,Z.numClippingPlanes=k.numClippingPlanes,Z.numIntersection=k.numClipIntersection,Z.vertexAlphas=k.vertexAlphas,Z.vertexTangents=k.vertexTangents,Z.toneMapping=k.toneMapping}function Mo(E,k,Z,$,X){k.isScene!==!0&&(k=Ne),C.resetTextureUnits();let dt=k.fog,Mt=$.isMeshStandardMaterial?k.environment:null,Ct=q===null?R.outputColorSpace:q.isXRRenderTarget===!0?q.texture.colorSpace:jr,Dt=($.isMeshStandardMaterial?Y:S).get($.envMap||Mt),Jt=$.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,Kt=!!Z.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Ht=!!Z.morphAttributes.position,_e=!!Z.morphAttributes.normal,Se=!!Z.morphAttributes.color,We=ji;$.toneMapped&&(q===null||q.isXRRenderTarget===!0)&&(We=R.toneMapping);let Oe=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,ve=Oe!==void 0?Oe.length:0,kt=Ft.get($),Ke=m.state.lights;if(gt===!0&&(Ut===!0||E!==A)){let sn=E===A&&$.id===P;mt.setState($,E,sn)}let xe=!1;$.version===kt.__version?(kt.needsLights&&kt.lightsStateVersion!==Ke.state.version||kt.outputColorSpace!==Ct||X.isBatchedMesh&&kt.batching===!1||!X.isBatchedMesh&&kt.batching===!0||X.isBatchedMesh&&kt.batchingColor===!0&&X.colorTexture===null||X.isBatchedMesh&&kt.batchingColor===!1&&X.colorTexture!==null||X.isInstancedMesh&&kt.instancing===!1||!X.isInstancedMesh&&kt.instancing===!0||X.isSkinnedMesh&&kt.skinning===!1||!X.isSkinnedMesh&&kt.skinning===!0||X.isInstancedMesh&&kt.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&kt.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&kt.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&kt.instancingMorph===!1&&X.morphTexture!==null||kt.envMap!==Dt||$.fog===!0&&kt.fog!==dt||kt.numClippingPlanes!==void 0&&(kt.numClippingPlanes!==mt.numPlanes||kt.numIntersection!==mt.numIntersection)||kt.vertexAlphas!==Jt||kt.vertexTangents!==Kt||kt.morphTargets!==Ht||kt.morphNormals!==_e||kt.morphColors!==Se||kt.toneMapping!==We||kt.morphTargetsCount!==ve)&&(xe=!0):(xe=!0,kt.__version=$.version);let mn=kt.currentProgram;xe===!0&&(mn=ps($,k,X));let Di=!1,bn=!1,tr=!1,Le=mn.getUniforms(),gn=kt.uniforms;if(zt.useProgram(mn.program)&&(Di=!0,bn=!0,tr=!0),$.id!==P&&(P=$.id,bn=!0),Di||A!==E){zt.buffers.depth.getReversed()?(bt.copy(E.projectionMatrix),Tg(bt),Ag(bt),Le.setValue(L,"projectionMatrix",bt)):Le.setValue(L,"projectionMatrix",E.projectionMatrix),Le.setValue(L,"viewMatrix",E.matrixWorldInverse);let an=Le.map.cameraPosition;an!==void 0&&an.setValue(L,he.setFromMatrixPosition(E.matrixWorld)),jt.logarithmicDepthBuffer&&Le.setValue(L,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&Le.setValue(L,"isOrthographic",E.isOrthographicCamera===!0),A!==E&&(A=E,bn=!0,tr=!0)}if(X.isSkinnedMesh){Le.setOptional(L,X,"bindMatrix"),Le.setOptional(L,X,"bindMatrixInverse");let sn=X.skeleton;sn&&(sn.boneTexture===null&&sn.computeBoneTexture(),Le.setValue(L,"boneTexture",sn.boneTexture,C))}X.isBatchedMesh&&(Le.setOptional(L,X,"batchingTexture"),Le.setValue(L,"batchingTexture",X._matricesTexture,C),Le.setOptional(L,X,"batchingIdTexture"),Le.setValue(L,"batchingIdTexture",X._indirectTexture,C),Le.setOptional(L,X,"batchingColorTexture"),X._colorsTexture!==null&&Le.setValue(L,"batchingColorTexture",X._colorsTexture,C));let Rn=Z.morphAttributes;if((Rn.position!==void 0||Rn.normal!==void 0||Rn.color!==void 0)&&Zt.update(X,Z,mn),(bn||kt.receiveShadow!==X.receiveShadow)&&(kt.receiveShadow=X.receiveShadow,Le.setValue(L,"receiveShadow",X.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(gn.envMap.value=Dt,gn.flipEnvMap.value=Dt.isCubeTexture&&Dt.isRenderTargetTexture===!1?-1:1),$.isMeshStandardMaterial&&$.envMap===null&&k.environment!==null&&(gn.envMapIntensity.value=k.environmentIntensity),bn&&(Le.setValue(L,"toneMappingExposure",R.toneMappingExposure),kt.needsLights&&ou(gn,tr),dt&&$.fog===!0&&_t.refreshFogUniforms(gn,dt),_t.refreshMaterialUniforms(gn,$,K,pt,m.state.transmissionRenderTarget[E.id]),ea.upload(L,yo(kt),gn,C)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(ea.upload(L,yo(kt),gn,C),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&Le.setValue(L,"center",X.center),Le.setValue(L,"modelViewMatrix",X.modelViewMatrix),Le.setValue(L,"normalMatrix",X.normalMatrix),Le.setValue(L,"modelMatrix",X.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){let sn=$.uniformsGroups;for(let an=0,Lr=sn.length;an<Lr;an++){let Pn=sn[an];z.update(Pn,mn),z.bind(Pn,mn)}}return mn}function ou(E,k){E.ambientLightColor.needsUpdate=k,E.lightProbe.needsUpdate=k,E.directionalLights.needsUpdate=k,E.directionalLightShadows.needsUpdate=k,E.pointLights.needsUpdate=k,E.pointLightShadows.needsUpdate=k,E.spotLights.needsUpdate=k,E.spotLightShadows.needsUpdate=k,E.rectAreaLights.needsUpdate=k,E.hemisphereLights.needsUpdate=k}function cu(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return q},this.setRenderTargetTextures=function(E,k,Z){Ft.get(E.texture).__webglTexture=k,Ft.get(E.depthTexture).__webglTexture=Z;let $=Ft.get(E);$.__hasExternalTextures=!0,$.__autoAllocateDepthBuffer=Z===void 0,$.__autoAllocateDepthBuffer||me.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),$.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,k){let Z=Ft.get(E);Z.__webglFramebuffer=k,Z.__useDefaultFramebuffer=k===void 0};let lu=L.createFramebuffer();this.setRenderTarget=function(E,k=0,Z=0){q=E,F=k,O=Z;let $=!0,X=null,dt=!1,Mt=!1;if(E){let Dt=Ft.get(E);if(Dt.__useDefaultFramebuffer!==void 0)zt.bindFramebuffer(L.FRAMEBUFFER,null),$=!1;else if(Dt.__webglFramebuffer===void 0)C.setupRenderTarget(E);else if(Dt.__hasExternalTextures)C.rebindTextures(E,Ft.get(E.texture).__webglTexture,Ft.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let Ht=E.depthTexture;if(Dt.__boundDepthTexture!==Ht){if(Ht!==null&&Ft.has(Ht)&&(E.width!==Ht.image.width||E.height!==Ht.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");C.setupDepthRenderbuffer(E)}}let Jt=E.texture;(Jt.isData3DTexture||Jt.isDataArrayTexture||Jt.isCompressedArrayTexture)&&(Mt=!0);let Kt=Ft.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Kt[k])?X=Kt[k][Z]:X=Kt[k],dt=!0):E.samples>0&&C.useMultisampledRTT(E)===!1?X=Ft.get(E).__webglMultisampledFramebuffer:Array.isArray(Kt)?X=Kt[Z]:X=Kt,B.copy(E.viewport),ot.copy(E.scissor),j=E.scissorTest}else B.copy(Lt).multiplyScalar(K).floor(),ot.copy(oe).multiplyScalar(K).floor(),j=Te;if(Z!==0&&(X=lu),zt.bindFramebuffer(L.FRAMEBUFFER,X)&&$&&zt.drawBuffers(E,X),zt.viewport(B),zt.scissor(ot),zt.setScissorTest(j),dt){let Dt=Ft.get(E.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+k,Dt.__webglTexture,Z)}else if(Mt){let Dt=Ft.get(E.texture),Jt=k;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,Dt.__webglTexture,Z,Jt)}else if(E!==null&&Z!==0){let Dt=Ft.get(E.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Dt.__webglTexture,Z)}P=-1},this.readRenderTargetPixels=function(E,k,Z,$,X,dt,Mt){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ct=Ft.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Mt!==void 0&&(Ct=Ct[Mt]),Ct){zt.bindFramebuffer(L.FRAMEBUFFER,Ct);try{let Dt=E.texture,Jt=Dt.format,Kt=Dt.type;if(!jt.textureFormatReadable(Jt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!jt.textureTypeReadable(Kt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=E.width-$&&Z>=0&&Z<=E.height-X&&L.readPixels(k,Z,$,X,Qt.convert(Jt),Qt.convert(Kt),dt)}finally{let Dt=q!==null?Ft.get(q).__webglFramebuffer:null;zt.bindFramebuffer(L.FRAMEBUFFER,Dt)}}},this.readRenderTargetPixelsAsync=async function(E,k,Z,$,X,dt,Mt){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ct=Ft.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Mt!==void 0&&(Ct=Ct[Mt]),Ct){let Dt=E.texture,Jt=Dt.format,Kt=Dt.type;if(!jt.textureFormatReadable(Jt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!jt.textureTypeReadable(Kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(k>=0&&k<=E.width-$&&Z>=0&&Z<=E.height-X){zt.bindFramebuffer(L.FRAMEBUFFER,Ct);let Ht=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Ht),L.bufferData(L.PIXEL_PACK_BUFFER,dt.byteLength,L.STREAM_READ),L.readPixels(k,Z,$,X,Qt.convert(Jt),Qt.convert(Kt),0);let _e=q!==null?Ft.get(q).__webglFramebuffer:null;zt.bindFramebuffer(L.FRAMEBUFFER,_e);let Se=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await wg(L,Se,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Ht),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,dt),L.deleteBuffer(Ht),L.deleteSync(Se),dt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,k=null,Z=0){E.isTexture!==!0&&(Ir("WebGLRenderer: copyFramebufferToTexture function signature has changed."),k=arguments[0]||null,E=arguments[1]);let $=Math.pow(2,-Z),X=Math.floor(E.image.width*$),dt=Math.floor(E.image.height*$),Mt=k!==null?k.x:0,Ct=k!==null?k.y:0;C.setTexture2D(E,0),L.copyTexSubImage2D(L.TEXTURE_2D,Z,0,0,Mt,Ct,X,dt),zt.unbindTexture()};let uu=L.createFramebuffer(),hu=L.createFramebuffer();this.copyTextureToTexture=function(E,k,Z=null,$=null,X=0,dt=null){E.isTexture!==!0&&(Ir("WebGLRenderer: copyTextureToTexture function signature has changed."),$=arguments[0]||null,E=arguments[1],k=arguments[2],dt=arguments[3]||0,Z=null),dt===null&&(X!==0?(Ir("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),dt=X,X=0):dt=0);let Mt,Ct,Dt,Jt,Kt,Ht,_e,Se,We,Oe=E.isCompressedTexture?E.mipmaps[dt]:E.image;if(Z!==null)Mt=Z.max.x-Z.min.x,Ct=Z.max.y-Z.min.y,Dt=Z.isBox3?Z.max.z-Z.min.z:1,Jt=Z.min.x,Kt=Z.min.y,Ht=Z.isBox3?Z.min.z:0;else{let Rn=Math.pow(2,-X);Mt=Math.floor(Oe.width*Rn),Ct=Math.floor(Oe.height*Rn),E.isDataArrayTexture?Dt=Oe.depth:E.isData3DTexture?Dt=Math.floor(Oe.depth*Rn):Dt=1,Jt=0,Kt=0,Ht=0}$!==null?(_e=$.x,Se=$.y,We=$.z):(_e=0,Se=0,We=0);let ve=Qt.convert(k.format),kt=Qt.convert(k.type),Ke;k.isData3DTexture?(C.setTexture3D(k,0),Ke=L.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(C.setTexture2DArray(k,0),Ke=L.TEXTURE_2D_ARRAY):(C.setTexture2D(k,0),Ke=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,k.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,k.unpackAlignment);let xe=L.getParameter(L.UNPACK_ROW_LENGTH),mn=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Di=L.getParameter(L.UNPACK_SKIP_PIXELS),bn=L.getParameter(L.UNPACK_SKIP_ROWS),tr=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,Oe.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Oe.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Jt),L.pixelStorei(L.UNPACK_SKIP_ROWS,Kt),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Ht);let Le=E.isDataArrayTexture||E.isData3DTexture,gn=k.isDataArrayTexture||k.isData3DTexture;if(E.isDepthTexture){let Rn=Ft.get(E),sn=Ft.get(k),an=Ft.get(Rn.__renderTarget),Lr=Ft.get(sn.__renderTarget);zt.bindFramebuffer(L.READ_FRAMEBUFFER,an.__webglFramebuffer),zt.bindFramebuffer(L.DRAW_FRAMEBUFFER,Lr.__webglFramebuffer);for(let Pn=0;Pn<Dt;Pn++)Le&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ft.get(E).__webglTexture,X,Ht+Pn),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ft.get(k).__webglTexture,dt,We+Pn)),L.blitFramebuffer(Jt,Kt,Mt,Ct,_e,Se,Mt,Ct,L.DEPTH_BUFFER_BIT,L.NEAREST);zt.bindFramebuffer(L.READ_FRAMEBUFFER,null),zt.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(X!==0||E.isRenderTargetTexture||Ft.has(E)){let Rn=Ft.get(E),sn=Ft.get(k);zt.bindFramebuffer(L.READ_FRAMEBUFFER,uu),zt.bindFramebuffer(L.DRAW_FRAMEBUFFER,hu);for(let an=0;an<Dt;an++)Le?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Rn.__webglTexture,X,Ht+an):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Rn.__webglTexture,X),gn?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,sn.__webglTexture,dt,We+an):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,sn.__webglTexture,dt),X!==0?L.blitFramebuffer(Jt,Kt,Mt,Ct,_e,Se,Mt,Ct,L.COLOR_BUFFER_BIT,L.NEAREST):gn?L.copyTexSubImage3D(Ke,dt,_e,Se,We+an,Jt,Kt,Mt,Ct):L.copyTexSubImage2D(Ke,dt,_e,Se,Jt,Kt,Mt,Ct);zt.bindFramebuffer(L.READ_FRAMEBUFFER,null),zt.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else gn?E.isDataTexture||E.isData3DTexture?L.texSubImage3D(Ke,dt,_e,Se,We,Mt,Ct,Dt,ve,kt,Oe.data):k.isCompressedArrayTexture?L.compressedTexSubImage3D(Ke,dt,_e,Se,We,Mt,Ct,Dt,ve,Oe.data):L.texSubImage3D(Ke,dt,_e,Se,We,Mt,Ct,Dt,ve,kt,Oe):E.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,dt,_e,Se,Mt,Ct,ve,kt,Oe.data):E.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,dt,_e,Se,Oe.width,Oe.height,ve,Oe.data):L.texSubImage2D(L.TEXTURE_2D,dt,_e,Se,Mt,Ct,ve,kt,Oe);L.pixelStorei(L.UNPACK_ROW_LENGTH,xe),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,mn),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Di),L.pixelStorei(L.UNPACK_SKIP_ROWS,bn),L.pixelStorei(L.UNPACK_SKIP_IMAGES,tr),dt===0&&k.generateMipmaps&&L.generateMipmap(Ke),zt.unbindTexture()},this.copyTextureToTexture3D=function(E,k,Z=null,$=null,X=0){return E.isTexture!==!0&&(Ir("WebGLRenderer: copyTextureToTexture3D function signature has changed."),Z=arguments[0]||null,$=arguments[1]||null,E=arguments[2],k=arguments[3],X=arguments[4]||0),Ir('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,k,Z,$,X)},this.initRenderTarget=function(E){Ft.get(E).__webglFramebuffer===void 0&&C.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?C.setTextureCube(E,0):E.isData3DTexture?C.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?C.setTexture2DArray(E,0):C.setTexture2D(E,0),zt.unbindTexture()},this.resetState=function(){F=0,O=0,q=null,zt.reset(),Pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return wi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=Me._getDrawingBufferColorSpace(t),e.unpackColorSpace=Me._getUnpackColorSpace()}};var YA=Object.create,d_=Object.defineProperty,ZA=Object.getOwnPropertyDescriptor,$A=Object.getOwnPropertyNames,JA=Object.getPrototypeOf,KA=Object.prototype.hasOwnProperty,jA=(i,t)=>()=>(t||i((t={exports:{}}).exports,t),t.exports),QA=(i,t,e,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let a of $A(t))!KA.call(i,a)&&a!==e&&d_(i,a,{get:()=>t[a],enumerable:!(r=ZA(t,a))||r.enumerable});return i},us=(i,t,e)=>(e=i!=null?YA(JA(i)):{},QA(t||!i||!i.__esModule?d_(e,"default",{value:i,enumerable:!0}):e,i)),hs=jA((i,t)=>{(function(){var e,r="4.17.21",a=200,o="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",l="Expected a function",u="Invalid `variable` option passed into `_.template`",h="__lodash_hash_undefined__",f=500,p="__lodash_placeholder__",g=1,_=2,v=4,M=1,T=2,y=1,m=2,U=4,D=8,R=16,H=32,F=64,O=128,q=256,P=512,A=30,B="...",ot=800,j=16,it=1,ft=2,et=3,pt=1/0,K=9007199254740991,St=17976931348623157e292,Tt=NaN,Lt=4294967295,oe=Lt-1,Te=Lt>>>1,at=[["ary",O],["bind",y],["bindKey",m],["curry",D],["curryRight",R],["flip",P],["partial",H],["partialRight",F],["rearg",q]],gt="[object Arguments]",Ut="[object Array]",bt="[object AsyncFunction]",Vt="[object Boolean]",he="[object Date]",$t="[object DOMException]",Ne="[object Error]",Re="[object Function]",fe="[object GeneratorFunction]",L="[object Map]",rn="[object Number]",me="[object Null]",jt="[object Object]",zt="[object Promise]",De="[object Proxy]",Ft="[object RegExp]",C="[object Set]",S="[object String]",Y="[object Symbol]",lt="[object Undefined]",ut="[object WeakMap]",rt="[object WeakSet]",Nt="[object ArrayBuffer]",_t="[object DataView]",At="[object Float32Array]",de="[object Float64Array]",mt="[object Int8Array]",Rt="[object Int16Array]",Wt="[object Int32Array]",Zt="[object Uint8Array]",Pt="[object Uint8ClampedArray]",ue="[object Uint16Array]",Qt="[object Uint32Array]",Pe=/\b__p \+= '';/g,z=/\b(__p \+=) '' \+/g,xt=/(__e\(.*?\)|\b__t\)) \+\n'';/g,Q=/&(?:amp|lt|gt|quot|#39);/g,ct=/[&<>"']/g,wt=RegExp(Q.source),Et=RegExp(ct.source),ee=/<%-([\s\S]+?)%>/g,Ve=/<%([\s\S]+?)%>/g,Je=/<%=([\s\S]+?)%>/g,be=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,On=/^\w*$/,hi=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,fs=/[\\^$.*+?()[\]{}|]/g,mo=RegExp(fs.source),fi=/^\s+/,aa=/\s/,go=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,_o=/\{\n\/\* \[wrapped with (.+)\] \*/,ds=/,? & /,vo=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,ps=/[()=,{}\[\]\/\s]/,yo=/\\(\\)?/g,xo=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,Mo=/\w*$/,ou=/^[-+]0x[0-9a-f]+$/i,cu=/^0b[01]+$/i,lu=/^\[object .+?Constructor\]$/,uu=/^0o[0-7]+$/i,hu=/^(?:0|[1-9]\d*)$/,E=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,k=/($^)/,Z=/['\n\r\u2028\u2029\\]/g,$="\\ud800-\\udfff",X="\\u0300-\\u036f",dt="\\ufe20-\\ufe2f",Mt="\\u20d0-\\u20ff",Ct=X+dt+Mt,Dt="\\u2700-\\u27bf",Jt="a-z\\xdf-\\xf6\\xf8-\\xff",Kt="\\xac\\xb1\\xd7\\xf7",Ht="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",_e="\\u2000-\\u206f",Se=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",We="A-Z\\xc0-\\xd6\\xd8-\\xde",Oe="\\ufe0e\\ufe0f",ve=Kt+Ht+_e+Se,kt="['\u2019]",Ke="["+$+"]",xe="["+ve+"]",mn="["+Ct+"]",Di="\\d+",bn="["+Dt+"]",tr="["+Jt+"]",Le="[^"+$+ve+Di+Dt+Jt+We+"]",gn="\\ud83c[\\udffb-\\udfff]",Rn="(?:"+mn+"|"+gn+")",sn="[^"+$+"]",an="(?:\\ud83c[\\udde6-\\uddff]){2}",Lr="[\\ud800-\\udbff][\\udc00-\\udfff]",Pn="["+We+"]",Jf="\\u200d",Kf="(?:"+tr+"|"+Le+")",R_="(?:"+Pn+"|"+Le+")",jf="(?:"+kt+"(?:d|ll|m|re|s|t|ve))?",Qf="(?:"+kt+"(?:D|LL|M|RE|S|T|VE))?",td=Rn+"?",ed="["+Oe+"]?",P_="(?:"+Jf+"(?:"+[sn,an,Lr].join("|")+")"+ed+td+")*",I_="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",D_="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",nd=ed+td+P_,L_="(?:"+[bn,an,Lr].join("|")+")"+nd,U_="(?:"+[sn+mn+"?",mn,an,Lr,Ke].join("|")+")",N_=RegExp(kt,"g"),F_=RegExp(mn,"g"),fu=RegExp(gn+"(?="+gn+")|"+U_+nd,"g"),O_=RegExp([Pn+"?"+tr+"+"+jf+"(?="+[xe,Pn,"$"].join("|")+")",R_+"+"+Qf+"(?="+[xe,Pn+Kf,"$"].join("|")+")",Pn+"?"+Kf+"+"+jf,Pn+"+"+Qf,D_,I_,Di,L_].join("|"),"g"),B_=RegExp("["+Jf+$+Ct+Oe+"]"),z_=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,k_=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],V_=-1,Be={};Be[At]=Be[de]=Be[mt]=Be[Rt]=Be[Wt]=Be[Zt]=Be[Pt]=Be[ue]=Be[Qt]=!0,Be[gt]=Be[Ut]=Be[Nt]=Be[Vt]=Be[_t]=Be[he]=Be[Ne]=Be[Re]=Be[L]=Be[rn]=Be[jt]=Be[Ft]=Be[C]=Be[S]=Be[ut]=!1;var Fe={};Fe[gt]=Fe[Ut]=Fe[Nt]=Fe[_t]=Fe[Vt]=Fe[he]=Fe[At]=Fe[de]=Fe[mt]=Fe[Rt]=Fe[Wt]=Fe[L]=Fe[rn]=Fe[jt]=Fe[Ft]=Fe[C]=Fe[S]=Fe[Y]=Fe[Zt]=Fe[Pt]=Fe[ue]=Fe[Qt]=!0,Fe[Ne]=Fe[Re]=Fe[ut]=!1;var H_={\u00C0:"A",\u00C1:"A",\u00C2:"A",\u00C3:"A",\u00C4:"A",\u00C5:"A",\u00E0:"a",\u00E1:"a",\u00E2:"a",\u00E3:"a",\u00E4:"a",\u00E5:"a",\u00C7:"C",\u00E7:"c",\u00D0:"D",\u00F0:"d",\u00C8:"E",\u00C9:"E",\u00CA:"E",\u00CB:"E",\u00E8:"e",\u00E9:"e",\u00EA:"e",\u00EB:"e",\u00CC:"I",\u00CD:"I",\u00CE:"I",\u00CF:"I",\u00EC:"i",\u00ED:"i",\u00EE:"i",\u00EF:"i",\u00D1:"N",\u00F1:"n",\u00D2:"O",\u00D3:"O",\u00D4:"O",\u00D5:"O",\u00D6:"O",\u00D8:"O",\u00F2:"o",\u00F3:"o",\u00F4:"o",\u00F5:"o",\u00F6:"o",\u00F8:"o",\u00D9:"U",\u00DA:"U",\u00DB:"U",\u00DC:"U",\u00F9:"u",\u00FA:"u",\u00FB:"u",\u00FC:"u",\u00DD:"Y",\u00FD:"y",\u00FF:"y",\u00C6:"Ae",\u00E6:"ae",\u00DE:"Th",\u00FE:"th",\u00DF:"ss",\u0100:"A",\u0102:"A",\u0104:"A",\u0101:"a",\u0103:"a",\u0105:"a",\u0106:"C",\u0108:"C",\u010A:"C",\u010C:"C",\u0107:"c",\u0109:"c",\u010B:"c",\u010D:"c",\u010E:"D",\u0110:"D",\u010F:"d",\u0111:"d",\u0112:"E",\u0114:"E",\u0116:"E",\u0118:"E",\u011A:"E",\u0113:"e",\u0115:"e",\u0117:"e",\u0119:"e",\u011B:"e",\u011C:"G",\u011E:"G",\u0120:"G",\u0122:"G",\u011D:"g",\u011F:"g",\u0121:"g",\u0123:"g",\u0124:"H",\u0126:"H",\u0125:"h",\u0127:"h",\u0128:"I",\u012A:"I",\u012C:"I",\u012E:"I",\u0130:"I",\u0129:"i",\u012B:"i",\u012D:"i",\u012F:"i",\u0131:"i",\u0134:"J",\u0135:"j",\u0136:"K",\u0137:"k",\u0138:"k",\u0139:"L",\u013B:"L",\u013D:"L",\u013F:"L",\u0141:"L",\u013A:"l",\u013C:"l",\u013E:"l",\u0140:"l",\u0142:"l",\u0143:"N",\u0145:"N",\u0147:"N",\u014A:"N",\u0144:"n",\u0146:"n",\u0148:"n",\u014B:"n",\u014C:"O",\u014E:"O",\u0150:"O",\u014D:"o",\u014F:"o",\u0151:"o",\u0154:"R",\u0156:"R",\u0158:"R",\u0155:"r",\u0157:"r",\u0159:"r",\u015A:"S",\u015C:"S",\u015E:"S",\u0160:"S",\u015B:"s",\u015D:"s",\u015F:"s",\u0161:"s",\u0162:"T",\u0164:"T",\u0166:"T",\u0163:"t",\u0165:"t",\u0167:"t",\u0168:"U",\u016A:"U",\u016C:"U",\u016E:"U",\u0170:"U",\u0172:"U",\u0169:"u",\u016B:"u",\u016D:"u",\u016F:"u",\u0171:"u",\u0173:"u",\u0174:"W",\u0175:"w",\u0176:"Y",\u0177:"y",\u0178:"Y",\u0179:"Z",\u017B:"Z",\u017D:"Z",\u017A:"z",\u017C:"z",\u017E:"z",\u0132:"IJ",\u0133:"ij",\u0152:"Oe",\u0153:"oe",\u0149:"'n",\u017F:"s"},G_={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},W_={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},X_={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},q_=parseFloat,Y_=parseInt,id=typeof global=="object"&&global&&global.Object===Object&&global,Z_=typeof self=="object"&&self&&self.Object===Object&&self,on=id||Z_||Function("return this")(),du=typeof i=="object"&&i&&!i.nodeType&&i,Ur=du&&typeof t=="object"&&t&&!t.nodeType&&t,rd=Ur&&Ur.exports===du,pu=rd&&id.process,Jn=function(){try{var V=Ur&&Ur.require&&Ur.require("util").types;return V||pu&&pu.binding&&pu.binding("util")}catch{}}(),sd=Jn&&Jn.isArrayBuffer,ad=Jn&&Jn.isDate,od=Jn&&Jn.isMap,cd=Jn&&Jn.isRegExp,ld=Jn&&Jn.isSet,ud=Jn&&Jn.isTypedArray;function Bn(V,tt,J){switch(J.length){case 0:return V.call(tt);case 1:return V.call(tt,J[0]);case 2:return V.call(tt,J[0],J[1]);case 3:return V.call(tt,J[0],J[1],J[2])}return V.apply(tt,J)}function $_(V,tt,J,It){for(var te=-1,Ee=V==null?0:V.length;++te<Ee;){var je=V[te];tt(It,je,J(je),V)}return It}function Kn(V,tt){for(var J=-1,It=V==null?0:V.length;++J<It&&tt(V[J],J,V)!==!1;);return V}function J_(V,tt){for(var J=V==null?0:V.length;J--&&tt(V[J],J,V)!==!1;);return V}function hd(V,tt){for(var J=-1,It=V==null?0:V.length;++J<It;)if(!tt(V[J],J,V))return!1;return!0}function er(V,tt){for(var J=-1,It=V==null?0:V.length,te=0,Ee=[];++J<It;){var je=V[J];tt(je,J,V)&&(Ee[te++]=je)}return Ee}function So(V,tt){var J=V==null?0:V.length;return!!J&&ms(V,tt,0)>-1}function mu(V,tt,J){for(var It=-1,te=V==null?0:V.length;++It<te;)if(J(tt,V[It]))return!0;return!1}function He(V,tt){for(var J=-1,It=V==null?0:V.length,te=Array(It);++J<It;)te[J]=tt(V[J],J,V);return te}function nr(V,tt){for(var J=-1,It=tt.length,te=V.length;++J<It;)V[te+J]=tt[J];return V}function gu(V,tt,J,It){var te=-1,Ee=V==null?0:V.length;for(It&&Ee&&(J=V[++te]);++te<Ee;)J=tt(J,V[te],te,V);return J}function K_(V,tt,J,It){var te=V==null?0:V.length;for(It&&te&&(J=V[--te]);te--;)J=tt(J,V[te],te,V);return J}function _u(V,tt){for(var J=-1,It=V==null?0:V.length;++J<It;)if(tt(V[J],J,V))return!0;return!1}var j_=vu("length");function Q_(V){return V.split("")}function t0(V){return V.match(vo)||[]}function fd(V,tt,J){var It;return J(V,function(te,Ee,je){if(tt(te,Ee,je))return It=Ee,!1}),It}function bo(V,tt,J,It){for(var te=V.length,Ee=J+(It?1:-1);It?Ee--:++Ee<te;)if(tt(V[Ee],Ee,V))return Ee;return-1}function ms(V,tt,J){return tt===tt?f0(V,tt,J):bo(V,dd,J)}function e0(V,tt,J,It){for(var te=J-1,Ee=V.length;++te<Ee;)if(It(V[te],tt))return te;return-1}function dd(V){return V!==V}function pd(V,tt){var J=V==null?0:V.length;return J?xu(V,tt)/J:Tt}function vu(V){return function(tt){return tt==null?e:tt[V]}}function yu(V){return function(tt){return V==null?e:V[tt]}}function md(V,tt,J,It,te){return te(V,function(Ee,je,Ue){J=It?(It=!1,Ee):tt(J,Ee,je,Ue)}),J}function n0(V,tt){var J=V.length;for(V.sort(tt);J--;)V[J]=V[J].value;return V}function xu(V,tt){for(var J,It=-1,te=V.length;++It<te;){var Ee=tt(V[It]);Ee!==e&&(J=J===e?Ee:J+Ee)}return J}function Mu(V,tt){for(var J=-1,It=Array(V);++J<V;)It[J]=tt(J);return It}function i0(V,tt){return He(tt,function(J){return[J,V[J]]})}function gd(V){return V&&V.slice(0,xd(V)+1).replace(fi,"")}function zn(V){return function(tt){return V(tt)}}function Su(V,tt){return He(tt,function(J){return V[J]})}function oa(V,tt){return V.has(tt)}function _d(V,tt){for(var J=-1,It=V.length;++J<It&&ms(tt,V[J],0)>-1;);return J}function vd(V,tt){for(var J=V.length;J--&&ms(tt,V[J],0)>-1;);return J}function r0(V,tt){for(var J=V.length,It=0;J--;)V[J]===tt&&++It;return It}var s0=yu(H_),a0=yu(G_);function o0(V){return"\\"+X_[V]}function c0(V,tt){return V==null?e:V[tt]}function gs(V){return B_.test(V)}function l0(V){return z_.test(V)}function u0(V){for(var tt,J=[];!(tt=V.next()).done;)J.push(tt.value);return J}function bu(V){var tt=-1,J=Array(V.size);return V.forEach(function(It,te){J[++tt]=[te,It]}),J}function yd(V,tt){return function(J){return V(tt(J))}}function ir(V,tt){for(var J=-1,It=V.length,te=0,Ee=[];++J<It;){var je=V[J];(je===tt||je===p)&&(V[J]=p,Ee[te++]=J)}return Ee}function Eo(V){var tt=-1,J=Array(V.size);return V.forEach(function(It){J[++tt]=It}),J}function h0(V){var tt=-1,J=Array(V.size);return V.forEach(function(It){J[++tt]=[It,It]}),J}function f0(V,tt,J){for(var It=J-1,te=V.length;++It<te;)if(V[It]===tt)return It;return-1}function d0(V,tt,J){for(var It=J+1;It--;)if(V[It]===tt)return It;return It}function _s(V){return gs(V)?m0(V):j_(V)}function di(V){return gs(V)?g0(V):Q_(V)}function xd(V){for(var tt=V.length;tt--&&aa.test(V.charAt(tt)););return tt}var p0=yu(W_);function m0(V){for(var tt=fu.lastIndex=0;fu.test(V);)++tt;return tt}function g0(V){return V.match(fu)||[]}function _0(V){return V.match(O_)||[]}var v0=function V(tt){tt=tt==null?on:rr.defaults(on.Object(),tt,rr.pick(on,k_));var J=tt.Array,It=tt.Date,te=tt.Error,Ee=tt.Function,je=tt.Math,Ue=tt.Object,Eu=tt.RegExp,y0=tt.String,jn=tt.TypeError,wo=J.prototype,x0=Ee.prototype,vs=Ue.prototype,To=tt["__core-js_shared__"],Ao=x0.toString,Ae=vs.hasOwnProperty,M0=0,Md=function(){var n=/[^.]+$/.exec(To&&To.keys&&To.keys.IE_PROTO||"");return n?"Symbol(src)_1."+n:""}(),Co=vs.toString,S0=Ao.call(Ue),b0=on._,E0=Eu("^"+Ao.call(Ae).replace(fs,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Ro=rd?tt.Buffer:e,sr=tt.Symbol,Po=tt.Uint8Array,Sd=Ro?Ro.allocUnsafe:e,Io=yd(Ue.getPrototypeOf,Ue),bd=Ue.create,Ed=vs.propertyIsEnumerable,Do=wo.splice,wd=sr?sr.isConcatSpreadable:e,ca=sr?sr.iterator:e,Nr=sr?sr.toStringTag:e,Lo=function(){try{var n=kr(Ue,"defineProperty");return n({},"",{}),n}catch{}}(),w0=tt.clearTimeout!==on.clearTimeout&&tt.clearTimeout,T0=It&&It.now!==on.Date.now&&It.now,A0=tt.setTimeout!==on.setTimeout&&tt.setTimeout,Uo=je.ceil,No=je.floor,wu=Ue.getOwnPropertySymbols,C0=Ro?Ro.isBuffer:e,Td=tt.isFinite,R0=wo.join,P0=yd(Ue.keys,Ue),Qe=je.max,_n=je.min,I0=It.now,D0=tt.parseInt,Ad=je.random,L0=wo.reverse,Tu=kr(tt,"DataView"),la=kr(tt,"Map"),Au=kr(tt,"Promise"),ys=kr(tt,"Set"),ua=kr(tt,"WeakMap"),ha=kr(Ue,"create"),Fo=ua&&new ua,xs={},U0=Vr(Tu),N0=Vr(la),F0=Vr(Au),O0=Vr(ys),B0=Vr(ua),Oo=sr?sr.prototype:e,fa=Oo?Oo.valueOf:e,Cd=Oo?Oo.toString:e;function b(n){if(qe(n)&&!ne(n)&&!(n instanceof ge)){if(n instanceof Qn)return n;if(Ae.call(n,"__wrapped__"))return Rp(n)}return new Qn(n)}var Ms=function(){function n(){}return function(s){if(!Xe(s))return{};if(bd)return bd(s);n.prototype=s;var c=new n;return n.prototype=e,c}}();function Bo(){}function Qn(n,s){this.__wrapped__=n,this.__actions__=[],this.__chain__=!!s,this.__index__=0,this.__values__=e}b.templateSettings={escape:ee,evaluate:Ve,interpolate:Je,variable:"",imports:{_:b}},b.prototype=Bo.prototype,b.prototype.constructor=b,Qn.prototype=Ms(Bo.prototype),Qn.prototype.constructor=Qn;function ge(n){this.__wrapped__=n,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=Lt,this.__views__=[]}function z0(){var n=new ge(this.__wrapped__);return n.__actions__=In(this.__actions__),n.__dir__=this.__dir__,n.__filtered__=this.__filtered__,n.__iteratees__=In(this.__iteratees__),n.__takeCount__=this.__takeCount__,n.__views__=In(this.__views__),n}function k0(){if(this.__filtered__){var n=new ge(this);n.__dir__=-1,n.__filtered__=!0}else n=this.clone(),n.__dir__*=-1;return n}function V0(){var n=this.__wrapped__.value(),s=this.__dir__,c=ne(n),d=s<0,x=c?n.length:0,w=Qv(0,x,this.__views__),I=w.start,N=w.end,G=N-I,nt=d?N:I-1,st=this.__iteratees__,ht=st.length,vt=0,Ot=_n(G,this.__takeCount__);if(!c||!d&&x==G&&Ot==G)return jd(n,this.__actions__);var qt=[];t:for(;G--&&vt<Ot;){nt+=s;for(var se=-1,Yt=n[nt];++se<ht;){var pe=st[se],ye=pe.iteratee,Hn=pe.type,Tn=ye(Yt);if(Hn==ft)Yt=Tn;else if(!Tn){if(Hn==it)continue t;break t}}qt[vt++]=Yt}return qt}ge.prototype=Ms(Bo.prototype),ge.prototype.constructor=ge;function Fr(n){var s=-1,c=n==null?0:n.length;for(this.clear();++s<c;){var d=n[s];this.set(d[0],d[1])}}function H0(){this.__data__=ha?ha(null):{},this.size=0}function G0(n){var s=this.has(n)&&delete this.__data__[n];return this.size-=s?1:0,s}function W0(n){var s=this.__data__;if(ha){var c=s[n];return c===h?e:c}return Ae.call(s,n)?s[n]:e}function X0(n){var s=this.__data__;return ha?s[n]!==e:Ae.call(s,n)}function q0(n,s){var c=this.__data__;return this.size+=this.has(n)?0:1,c[n]=ha&&s===e?h:s,this}Fr.prototype.clear=H0,Fr.prototype.delete=G0,Fr.prototype.get=W0,Fr.prototype.has=X0,Fr.prototype.set=q0;function Li(n){var s=-1,c=n==null?0:n.length;for(this.clear();++s<c;){var d=n[s];this.set(d[0],d[1])}}function Y0(){this.__data__=[],this.size=0}function Z0(n){var s=this.__data__,c=zo(s,n);if(c<0)return!1;var d=s.length-1;return c==d?s.pop():Do.call(s,c,1),--this.size,!0}function $0(n){var s=this.__data__,c=zo(s,n);return c<0?e:s[c][1]}function J0(n){return zo(this.__data__,n)>-1}function K0(n,s){var c=this.__data__,d=zo(c,n);return d<0?(++this.size,c.push([n,s])):c[d][1]=s,this}Li.prototype.clear=Y0,Li.prototype.delete=Z0,Li.prototype.get=$0,Li.prototype.has=J0,Li.prototype.set=K0;function Ui(n){var s=-1,c=n==null?0:n.length;for(this.clear();++s<c;){var d=n[s];this.set(d[0],d[1])}}function j0(){this.size=0,this.__data__={hash:new Fr,map:new(la||Li),string:new Fr}}function Q0(n){var s=Ko(this,n).delete(n);return this.size-=s?1:0,s}function tv(n){return Ko(this,n).get(n)}function ev(n){return Ko(this,n).has(n)}function nv(n,s){var c=Ko(this,n),d=c.size;return c.set(n,s),this.size+=c.size==d?0:1,this}Ui.prototype.clear=j0,Ui.prototype.delete=Q0,Ui.prototype.get=tv,Ui.prototype.has=ev,Ui.prototype.set=nv;function Or(n){var s=-1,c=n==null?0:n.length;for(this.__data__=new Ui;++s<c;)this.add(n[s])}function iv(n){return this.__data__.set(n,h),this}function rv(n){return this.__data__.has(n)}Or.prototype.add=Or.prototype.push=iv,Or.prototype.has=rv;function pi(n){var s=this.__data__=new Li(n);this.size=s.size}function sv(){this.__data__=new Li,this.size=0}function av(n){var s=this.__data__,c=s.delete(n);return this.size=s.size,c}function ov(n){return this.__data__.get(n)}function cv(n){return this.__data__.has(n)}function lv(n,s){var c=this.__data__;if(c instanceof Li){var d=c.__data__;if(!la||d.length<a-1)return d.push([n,s]),this.size=++c.size,this;c=this.__data__=new Ui(d)}return c.set(n,s),this.size=c.size,this}pi.prototype.clear=sv,pi.prototype.delete=av,pi.prototype.get=ov,pi.prototype.has=cv,pi.prototype.set=lv;function Rd(n,s){var c=ne(n),d=!c&&Hr(n),x=!c&&!d&&ur(n),w=!c&&!d&&!x&&ws(n),I=c||d||x||w,N=I?Mu(n.length,y0):[],G=N.length;for(var nt in n)(s||Ae.call(n,nt))&&!(I&&(nt=="length"||x&&(nt=="offset"||nt=="parent")||w&&(nt=="buffer"||nt=="byteLength"||nt=="byteOffset")||Bi(nt,G)))&&N.push(nt);return N}function Pd(n){var s=n.length;return s?n[Bu(0,s-1)]:e}function uv(n,s){return jo(In(n),Br(s,0,n.length))}function hv(n){return jo(In(n))}function Cu(n,s,c){(c!==e&&!mi(n[s],c)||c===e&&!(s in n))&&Ni(n,s,c)}function da(n,s,c){var d=n[s];(!(Ae.call(n,s)&&mi(d,c))||c===e&&!(s in n))&&Ni(n,s,c)}function zo(n,s){for(var c=n.length;c--;)if(mi(n[c][0],s))return c;return-1}function fv(n,s,c,d){return ar(n,function(x,w,I){s(d,x,c(x),I)}),d}function Id(n,s){return n&&bi(s,cn(s),n)}function dv(n,s){return n&&bi(s,Ln(s),n)}function Ni(n,s,c){s=="__proto__"&&Lo?Lo(n,s,{configurable:!0,enumerable:!0,value:c,writable:!0}):n[s]=c}function Ru(n,s){for(var c=-1,d=s.length,x=J(d),w=n==null;++c<d;)x[c]=w?e:lh(n,s[c]);return x}function Br(n,s,c){return n===n&&(c!==e&&(n=n<=c?n:c),s!==e&&(n=n>=s?n:s)),n}function ti(n,s,c,d,x,w){var I,N=s&g,G=s&_,nt=s&v;if(c&&(I=x?c(n,d,x,w):c(n)),I!==e)return I;if(!Xe(n))return n;var st=ne(n);if(st){if(I=ey(n),!N)return In(n,I)}else{var ht=vn(n),vt=ht==Re||ht==fe;if(ur(n))return ep(n,N);if(ht==jt||ht==gt||vt&&!x){if(I=G||vt?{}:xp(n),!N)return G?Wv(n,dv(I,n)):Gv(n,Id(I,n))}else{if(!Fe[ht])return x?n:{};I=ny(n,ht,N)}}w||(w=new pi);var Ot=w.get(n);if(Ot)return Ot;w.set(n,I),$p(n)?n.forEach(function(Yt){I.add(ti(Yt,s,c,Yt,n,w))}):Yp(n)&&n.forEach(function(Yt,pe){I.set(pe,ti(Yt,s,c,pe,n,w))});var qt=nt?G?$u:Zu:G?Ln:cn,se=st?e:qt(n);return Kn(se||n,function(Yt,pe){se&&(pe=Yt,Yt=n[pe]),da(I,pe,ti(Yt,s,c,pe,n,w))}),I}function pv(n){var s=cn(n);return function(c){return Dd(c,n,s)}}function Dd(n,s,c){var d=c.length;if(n==null)return!d;for(n=Ue(n);d--;){var x=c[d],w=s[x],I=n[x];if(I===e&&!(x in n)||!w(I))return!1}return!0}function Ld(n,s,c){if(typeof n!="function")throw new jn(l);return xa(function(){n.apply(e,c)},s)}function pa(n,s,c,d){var x=-1,w=So,I=!0,N=n.length,G=[],nt=s.length;if(!N)return G;c&&(s=He(s,zn(c))),d?(w=mu,I=!1):s.length>=a&&(w=oa,I=!1,s=new Or(s));t:for(;++x<N;){var st=n[x],ht=c==null?st:c(st);if(st=d||st!==0?st:0,I&&ht===ht){for(var vt=nt;vt--;)if(s[vt]===ht)continue t;G.push(st)}else w(s,ht,d)||G.push(st)}return G}var ar=ap(Si),Ud=ap(Iu,!0);function mv(n,s){var c=!0;return ar(n,function(d,x,w){return c=!!s(d,x,w),c}),c}function ko(n,s,c){for(var d=-1,x=n.length;++d<x;){var w=n[d],I=s(w);if(I!=null&&(N===e?I===I&&!Vn(I):c(I,N)))var N=I,G=w}return G}function gv(n,s,c,d){var x=n.length;for(c=re(c),c<0&&(c=-c>x?0:x+c),d=d===e||d>x?x:re(d),d<0&&(d+=x),d=c>d?0:Kp(d);c<d;)n[c++]=s;return n}function Nd(n,s){var c=[];return ar(n,function(d,x,w){s(d,x,w)&&c.push(d)}),c}function fn(n,s,c,d,x){var w=-1,I=n.length;for(c||(c=ry),x||(x=[]);++w<I;){var N=n[w];s>0&&c(N)?s>1?fn(N,s-1,c,d,x):nr(x,N):d||(x[x.length]=N)}return x}var Pu=op(),Fd=op(!0);function Si(n,s){return n&&Pu(n,s,cn)}function Iu(n,s){return n&&Fd(n,s,cn)}function Vo(n,s){return er(s,function(c){return zi(n[c])})}function zr(n,s){s=cr(s,n);for(var c=0,d=s.length;n!=null&&c<d;)n=n[Ei(s[c++])];return c&&c==d?n:e}function Od(n,s,c){var d=s(n);return ne(n)?d:nr(d,c(n))}function En(n){return n==null?n===e?lt:me:Nr&&Nr in Ue(n)?jv(n):hy(n)}function Du(n,s){return n>s}function _v(n,s){return n!=null&&Ae.call(n,s)}function vv(n,s){return n!=null&&s in Ue(n)}function yv(n,s,c){return n>=_n(s,c)&&n<Qe(s,c)}function Lu(n,s,c){for(var d=c?mu:So,x=n[0].length,w=n.length,I=w,N=J(w),G=1/0,nt=[];I--;){var st=n[I];I&&s&&(st=He(st,zn(s))),G=_n(st.length,G),N[I]=!c&&(s||x>=120&&st.length>=120)?new Or(I&&st):e}st=n[0];var ht=-1,vt=N[0];t:for(;++ht<x&&nt.length<G;){var Ot=st[ht],qt=s?s(Ot):Ot;if(Ot=c||Ot!==0?Ot:0,!(vt?oa(vt,qt):d(nt,qt,c))){for(I=w;--I;){var se=N[I];if(!(se?oa(se,qt):d(n[I],qt,c)))continue t}vt&&vt.push(qt),nt.push(Ot)}}return nt}function xv(n,s,c,d){return Si(n,function(x,w,I){s(d,c(x),w,I)}),d}function ma(n,s,c){s=cr(s,n),n=Ep(n,s);var d=n==null?n:n[Ei(ni(s))];return d==null?e:Bn(d,n,c)}function Bd(n){return qe(n)&&En(n)==gt}function Mv(n){return qe(n)&&En(n)==Nt}function Sv(n){return qe(n)&&En(n)==he}function ga(n,s,c,d,x){return n===s?!0:n==null||s==null||!qe(n)&&!qe(s)?n!==n&&s!==s:bv(n,s,c,d,ga,x)}function bv(n,s,c,d,x,w){var I=ne(n),N=ne(s),G=I?Ut:vn(n),nt=N?Ut:vn(s);G=G==gt?jt:G,nt=nt==gt?jt:nt;var st=G==jt,ht=nt==jt,vt=G==nt;if(vt&&ur(n)){if(!ur(s))return!1;I=!0,st=!1}if(vt&&!st)return w||(w=new pi),I||ws(n)?_p(n,s,c,d,x,w):Jv(n,s,G,c,d,x,w);if(!(c&M)){var Ot=st&&Ae.call(n,"__wrapped__"),qt=ht&&Ae.call(s,"__wrapped__");if(Ot||qt){var se=Ot?n.value():n,Yt=qt?s.value():s;return w||(w=new pi),x(se,Yt,c,d,w)}}return vt?(w||(w=new pi),Kv(n,s,c,d,x,w)):!1}function Ev(n){return qe(n)&&vn(n)==L}function Uu(n,s,c,d){var x=c.length,w=x,I=!d;if(n==null)return!w;for(n=Ue(n);x--;){var N=c[x];if(I&&N[2]?N[1]!==n[N[0]]:!(N[0]in n))return!1}for(;++x<w;){N=c[x];var G=N[0],nt=n[G],st=N[1];if(I&&N[2]){if(nt===e&&!(G in n))return!1}else{var ht=new pi;if(d)var vt=d(nt,st,G,n,s,ht);if(!(vt===e?ga(st,nt,M|T,d,ht):vt))return!1}}return!0}function zd(n){if(!Xe(n)||ay(n))return!1;var s=zi(n)?E0:lu;return s.test(Vr(n))}function wv(n){return qe(n)&&En(n)==Ft}function Tv(n){return qe(n)&&vn(n)==C}function Av(n){return qe(n)&&rc(n.length)&&!!Be[En(n)]}function kd(n){return typeof n=="function"?n:n==null?Un:typeof n=="object"?ne(n)?Gd(n[0],n[1]):Hd(n):cm(n)}function Nu(n){if(!ya(n))return P0(n);var s=[];for(var c in Ue(n))Ae.call(n,c)&&c!="constructor"&&s.push(c);return s}function Cv(n){if(!Xe(n))return uy(n);var s=ya(n),c=[];for(var d in n)d=="constructor"&&(s||!Ae.call(n,d))||c.push(d);return c}function Fu(n,s){return n<s}function Vd(n,s){var c=-1,d=Dn(n)?J(n.length):[];return ar(n,function(x,w,I){d[++c]=s(x,w,I)}),d}function Hd(n){var s=Ku(n);return s.length==1&&s[0][2]?Sp(s[0][0],s[0][1]):function(c){return c===n||Uu(c,n,s)}}function Gd(n,s){return Qu(n)&&Mp(s)?Sp(Ei(n),s):function(c){var d=lh(c,n);return d===e&&d===s?uh(c,n):ga(s,d,M|T)}}function Ho(n,s,c,d,x){n!==s&&Pu(s,function(w,I){if(x||(x=new pi),Xe(w))Rv(n,s,I,c,Ho,d,x);else{var N=d?d(eh(n,I),w,I+"",n,s,x):e;N===e&&(N=w),Cu(n,I,N)}},Ln)}function Rv(n,s,c,d,x,w,I){var N=eh(n,c),G=eh(s,c),nt=I.get(G);if(nt){Cu(n,c,nt);return}var st=w?w(N,G,c+"",n,s,I):e,ht=st===e;if(ht){var vt=ne(G),Ot=!vt&&ur(G),qt=!vt&&!Ot&&ws(G);st=G,vt||Ot||qt?ne(N)?st=N:Ye(N)?st=In(N):Ot?(ht=!1,st=ep(G,!0)):qt?(ht=!1,st=np(G,!0)):st=[]:Ma(G)||Hr(G)?(st=N,Hr(N)?st=jp(N):(!Xe(N)||zi(N))&&(st=xp(G))):ht=!1}ht&&(I.set(G,st),x(st,G,d,w,I),I.delete(G)),Cu(n,c,st)}function Wd(n,s){var c=n.length;if(c)return s+=s<0?c:0,Bi(s,c)?n[s]:e}function Xd(n,s,c){s.length?s=He(s,function(w){return ne(w)?function(I){return zr(I,w.length===1?w[0]:w)}:w}):s=[Un];var d=-1;s=He(s,zn(Xt()));var x=Vd(n,function(w,I,N){var G=He(s,function(nt){return nt(w)});return{criteria:G,index:++d,value:w}});return n0(x,function(w,I){return Hv(w,I,c)})}function Pv(n,s){return qd(n,s,function(c,d){return uh(n,d)})}function qd(n,s,c){for(var d=-1,x=s.length,w={};++d<x;){var I=s[d],N=zr(n,I);c(N,I)&&_a(w,cr(I,n),N)}return w}function Iv(n){return function(s){return zr(s,n)}}function Ou(n,s,c,d){var x=d?e0:ms,w=-1,I=s.length,N=n;for(n===s&&(s=In(s)),c&&(N=He(n,zn(c)));++w<I;)for(var G=0,nt=s[w],st=c?c(nt):nt;(G=x(N,st,G,d))>-1;)N!==n&&Do.call(N,G,1),Do.call(n,G,1);return n}function Yd(n,s){for(var c=n?s.length:0,d=c-1;c--;){var x=s[c];if(c==d||x!==w){var w=x;Bi(x)?Do.call(n,x,1):Vu(n,x)}}return n}function Bu(n,s){return n+No(Ad()*(s-n+1))}function Dv(n,s,c,d){for(var x=-1,w=Qe(Uo((s-n)/(c||1)),0),I=J(w);w--;)I[d?w:++x]=n,n+=c;return I}function zu(n,s){var c="";if(!n||s<1||s>K)return c;do s%2&&(c+=n),s=No(s/2),s&&(n+=n);while(s);return c}function ce(n,s){return nh(bp(n,s,Un),n+"")}function Lv(n){return Pd(Ts(n))}function Uv(n,s){var c=Ts(n);return jo(c,Br(s,0,c.length))}function _a(n,s,c,d){if(!Xe(n))return n;s=cr(s,n);for(var x=-1,w=s.length,I=w-1,N=n;N!=null&&++x<w;){var G=Ei(s[x]),nt=c;if(G==="__proto__"||G==="constructor"||G==="prototype")return n;if(x!=I){var st=N[G];nt=d?d(st,G,N):e,nt===e&&(nt=Xe(st)?st:Bi(s[x+1])?[]:{})}da(N,G,nt),N=N[G]}return n}var Zd=Fo?function(n,s){return Fo.set(n,s),n}:Un,Nv=Lo?function(n,s){return Lo(n,"toString",{configurable:!0,enumerable:!1,value:fh(s),writable:!0})}:Un;function Fv(n){return jo(Ts(n))}function ei(n,s,c){var d=-1,x=n.length;s<0&&(s=-s>x?0:x+s),c=c>x?x:c,c<0&&(c+=x),x=s>c?0:c-s>>>0,s>>>=0;for(var w=J(x);++d<x;)w[d]=n[d+s];return w}function Ov(n,s){var c;return ar(n,function(d,x,w){return c=s(d,x,w),!c}),!!c}function Go(n,s,c){var d=0,x=n==null?d:n.length;if(typeof s=="number"&&s===s&&x<=Te){for(;d<x;){var w=d+x>>>1,I=n[w];I!==null&&!Vn(I)&&(c?I<=s:I<s)?d=w+1:x=w}return x}return ku(n,s,Un,c)}function ku(n,s,c,d){var x=0,w=n==null?0:n.length;if(w===0)return 0;s=c(s);for(var I=s!==s,N=s===null,G=Vn(s),nt=s===e;x<w;){var st=No((x+w)/2),ht=c(n[st]),vt=ht!==e,Ot=ht===null,qt=ht===ht,se=Vn(ht);if(I)var Yt=d||qt;else nt?Yt=qt&&(d||vt):N?Yt=qt&&vt&&(d||!Ot):G?Yt=qt&&vt&&!Ot&&(d||!se):Ot||se?Yt=!1:Yt=d?ht<=s:ht<s;Yt?x=st+1:w=st}return _n(w,oe)}function $d(n,s){for(var c=-1,d=n.length,x=0,w=[];++c<d;){var I=n[c],N=s?s(I):I;if(!c||!mi(N,G)){var G=N;w[x++]=I===0?0:I}}return w}function Jd(n){return typeof n=="number"?n:Vn(n)?Tt:+n}function kn(n){if(typeof n=="string")return n;if(ne(n))return He(n,kn)+"";if(Vn(n))return Cd?Cd.call(n):"";var s=n+"";return s=="0"&&1/n==-pt?"-0":s}function or(n,s,c){var d=-1,x=So,w=n.length,I=!0,N=[],G=N;if(c)I=!1,x=mu;else if(w>=a){var nt=s?null:Zv(n);if(nt)return Eo(nt);I=!1,x=oa,G=new Or}else G=s?[]:N;t:for(;++d<w;){var st=n[d],ht=s?s(st):st;if(st=c||st!==0?st:0,I&&ht===ht){for(var vt=G.length;vt--;)if(G[vt]===ht)continue t;s&&G.push(ht),N.push(st)}else x(G,ht,c)||(G!==N&&G.push(ht),N.push(st))}return N}function Vu(n,s){return s=cr(s,n),n=Ep(n,s),n==null||delete n[Ei(ni(s))]}function Kd(n,s,c,d){return _a(n,s,c(zr(n,s)),d)}function Wo(n,s,c,d){for(var x=n.length,w=d?x:-1;(d?w--:++w<x)&&s(n[w],w,n););return c?ei(n,d?0:w,d?w+1:x):ei(n,d?w+1:0,d?x:w)}function jd(n,s){var c=n;return c instanceof ge&&(c=c.value()),gu(s,function(d,x){return x.func.apply(x.thisArg,nr([d],x.args))},c)}function Hu(n,s,c){var d=n.length;if(d<2)return d?or(n[0]):[];for(var x=-1,w=J(d);++x<d;)for(var I=n[x],N=-1;++N<d;)N!=x&&(w[x]=pa(w[x]||I,n[N],s,c));return or(fn(w,1),s,c)}function Qd(n,s,c){for(var d=-1,x=n.length,w=s.length,I={};++d<x;){var N=d<w?s[d]:e;c(I,n[d],N)}return I}function Gu(n){return Ye(n)?n:[]}function Wu(n){return typeof n=="function"?n:Un}function cr(n,s){return ne(n)?n:Qu(n,s)?[n]:Cp(we(n))}var Bv=ce;function lr(n,s,c){var d=n.length;return c=c===e?d:c,!s&&c>=d?n:ei(n,s,c)}var tp=w0||function(n){return on.clearTimeout(n)};function ep(n,s){if(s)return n.slice();var c=n.length,d=Sd?Sd(c):new n.constructor(c);return n.copy(d),d}function Xu(n){var s=new n.constructor(n.byteLength);return new Po(s).set(new Po(n)),s}function zv(n,s){var c=s?Xu(n.buffer):n.buffer;return new n.constructor(c,n.byteOffset,n.byteLength)}function kv(n){var s=new n.constructor(n.source,Mo.exec(n));return s.lastIndex=n.lastIndex,s}function Vv(n){return fa?Ue(fa.call(n)):{}}function np(n,s){var c=s?Xu(n.buffer):n.buffer;return new n.constructor(c,n.byteOffset,n.length)}function ip(n,s){if(n!==s){var c=n!==e,d=n===null,x=n===n,w=Vn(n),I=s!==e,N=s===null,G=s===s,nt=Vn(s);if(!N&&!nt&&!w&&n>s||w&&I&&G&&!N&&!nt||d&&I&&G||!c&&G||!x)return 1;if(!d&&!w&&!nt&&n<s||nt&&c&&x&&!d&&!w||N&&c&&x||!I&&x||!G)return-1}return 0}function Hv(n,s,c){for(var d=-1,x=n.criteria,w=s.criteria,I=x.length,N=c.length;++d<I;){var G=ip(x[d],w[d]);if(G){if(d>=N)return G;var nt=c[d];return G*(nt=="desc"?-1:1)}}return n.index-s.index}function rp(n,s,c,d){for(var x=-1,w=n.length,I=c.length,N=-1,G=s.length,nt=Qe(w-I,0),st=J(G+nt),ht=!d;++N<G;)st[N]=s[N];for(;++x<I;)(ht||x<w)&&(st[c[x]]=n[x]);for(;nt--;)st[N++]=n[x++];return st}function sp(n,s,c,d){for(var x=-1,w=n.length,I=-1,N=c.length,G=-1,nt=s.length,st=Qe(w-N,0),ht=J(st+nt),vt=!d;++x<st;)ht[x]=n[x];for(var Ot=x;++G<nt;)ht[Ot+G]=s[G];for(;++I<N;)(vt||x<w)&&(ht[Ot+c[I]]=n[x++]);return ht}function In(n,s){var c=-1,d=n.length;for(s||(s=J(d));++c<d;)s[c]=n[c];return s}function bi(n,s,c,d){var x=!c;c||(c={});for(var w=-1,I=s.length;++w<I;){var N=s[w],G=d?d(c[N],n[N],N,c,n):e;G===e&&(G=n[N]),x?Ni(c,N,G):da(c,N,G)}return c}function Gv(n,s){return bi(n,ju(n),s)}function Wv(n,s){return bi(n,vp(n),s)}function Xo(n,s){return function(c,d){var x=ne(c)?$_:fv,w=s?s():{};return x(c,n,Xt(d,2),w)}}function Ss(n){return ce(function(s,c){var d=-1,x=c.length,w=x>1?c[x-1]:e,I=x>2?c[2]:e;for(w=n.length>3&&typeof w=="function"?(x--,w):e,I&&wn(c[0],c[1],I)&&(w=x<3?e:w,x=1),s=Ue(s);++d<x;){var N=c[d];N&&n(s,N,d,w)}return s})}function ap(n,s){return function(c,d){if(c==null)return c;if(!Dn(c))return n(c,d);for(var x=c.length,w=s?x:-1,I=Ue(c);(s?w--:++w<x)&&d(I[w],w,I)!==!1;);return c}}function op(n){return function(s,c,d){for(var x=-1,w=Ue(s),I=d(s),N=I.length;N--;){var G=I[n?N:++x];if(c(w[G],G,w)===!1)break}return s}}function Xv(n,s,c){var d=s&y,x=va(n);function w(){var I=this&&this!==on&&this instanceof w?x:n;return I.apply(d?c:this,arguments)}return w}function cp(n){return function(s){s=we(s);var c=gs(s)?di(s):e,d=c?c[0]:s.charAt(0),x=c?lr(c,1).join(""):s.slice(1);return d[n]()+x}}function bs(n){return function(s){return gu(am(sm(s).replace(N_,"")),n,"")}}function va(n){return function(){var s=arguments;switch(s.length){case 0:return new n;case 1:return new n(s[0]);case 2:return new n(s[0],s[1]);case 3:return new n(s[0],s[1],s[2]);case 4:return new n(s[0],s[1],s[2],s[3]);case 5:return new n(s[0],s[1],s[2],s[3],s[4]);case 6:return new n(s[0],s[1],s[2],s[3],s[4],s[5]);case 7:return new n(s[0],s[1],s[2],s[3],s[4],s[5],s[6])}var c=Ms(n.prototype),d=n.apply(c,s);return Xe(d)?d:c}}function qv(n,s,c){var d=va(n);function x(){for(var w=arguments.length,I=J(w),N=w,G=Es(x);N--;)I[N]=arguments[N];var nt=w<3&&I[0]!==G&&I[w-1]!==G?[]:ir(I,G);if(w-=nt.length,w<c)return dp(n,s,qo,x.placeholder,e,I,nt,e,e,c-w);var st=this&&this!==on&&this instanceof x?d:n;return Bn(st,this,I)}return x}function lp(n){return function(s,c,d){var x=Ue(s);if(!Dn(s)){var w=Xt(c,3);s=cn(s),c=function(N){return w(x[N],N,x)}}var I=n(s,c,d);return I>-1?x[w?s[I]:I]:e}}function up(n){return Oi(function(s){var c=s.length,d=c,x=Qn.prototype.thru;for(n&&s.reverse();d--;){var w=s[d];if(typeof w!="function")throw new jn(l);if(x&&!I&&Jo(w)=="wrapper")var I=new Qn([],!0)}for(d=I?d:c;++d<c;){w=s[d];var N=Jo(w),G=N=="wrapper"?Ju(w):e;G&&th(G[0])&&G[1]==(O|D|H|q)&&!G[4].length&&G[9]==1?I=I[Jo(G[0])].apply(I,G[3]):I=w.length==1&&th(w)?I[N]():I.thru(w)}return function(){var nt=arguments,st=nt[0];if(I&&nt.length==1&&ne(st))return I.plant(st).value();for(var ht=0,vt=c?s[ht].apply(this,nt):st;++ht<c;)vt=s[ht].call(this,vt);return vt}})}function qo(n,s,c,d,x,w,I,N,G,nt){var st=s&O,ht=s&y,vt=s&m,Ot=s&(D|R),qt=s&P,se=vt?e:va(n);function Yt(){for(var pe=arguments.length,ye=J(pe),Hn=pe;Hn--;)ye[Hn]=arguments[Hn];if(Ot)var Tn=Es(Yt),Gn=r0(ye,Tn);if(d&&(ye=rp(ye,d,x,Ot)),w&&(ye=sp(ye,w,I,Ot)),pe-=Gn,Ot&&pe<nt){var Ze=ir(ye,Tn);return dp(n,s,qo,Yt.placeholder,c,ye,Ze,N,G,nt-pe)}var gi=ht?c:this,Vi=vt?gi[n]:n;return pe=ye.length,N?ye=fy(ye,N):qt&&pe>1&&ye.reverse(),st&&G<pe&&(ye.length=G),this&&this!==on&&this instanceof Yt&&(Vi=se||va(Vi)),Vi.apply(gi,ye)}return Yt}function hp(n,s){return function(c,d){return xv(c,n,s(d),{})}}function Yo(n,s){return function(c,d){var x;if(c===e&&d===e)return s;if(c!==e&&(x=c),d!==e){if(x===e)return d;typeof c=="string"||typeof d=="string"?(c=kn(c),d=kn(d)):(c=Jd(c),d=Jd(d)),x=n(c,d)}return x}}function qu(n){return Oi(function(s){return s=He(s,zn(Xt())),ce(function(c){var d=this;return n(s,function(x){return Bn(x,d,c)})})})}function Zo(n,s){s=s===e?" ":kn(s);var c=s.length;if(c<2)return c?zu(s,n):s;var d=zu(s,Uo(n/_s(s)));return gs(s)?lr(di(d),0,n).join(""):d.slice(0,n)}function Yv(n,s,c,d){var x=s&y,w=va(n);function I(){for(var N=-1,G=arguments.length,nt=-1,st=d.length,ht=J(st+G),vt=this&&this!==on&&this instanceof I?w:n;++nt<st;)ht[nt]=d[nt];for(;G--;)ht[nt++]=arguments[++N];return Bn(vt,x?c:this,ht)}return I}function fp(n){return function(s,c,d){return d&&typeof d!="number"&&wn(s,c,d)&&(c=d=e),s=ki(s),c===e?(c=s,s=0):c=ki(c),d=d===e?s<c?1:-1:ki(d),Dv(s,c,d,n)}}function $o(n){return function(s,c){return typeof s=="string"&&typeof c=="string"||(s=ii(s),c=ii(c)),n(s,c)}}function dp(n,s,c,d,x,w,I,N,G,nt){var st=s&D,ht=st?I:e,vt=st?e:I,Ot=st?w:e,qt=st?e:w;s|=st?H:F,s&=~(st?F:H),s&U||(s&=~(y|m));var se=[n,s,x,Ot,ht,qt,vt,N,G,nt],Yt=c.apply(e,se);return th(n)&&wp(Yt,se),Yt.placeholder=d,Tp(Yt,n,s)}function Yu(n){var s=je[n];return function(c,d){if(c=ii(c),d=d==null?0:_n(re(d),292),d&&Td(c)){var x=(we(c)+"e").split("e"),w=s(x[0]+"e"+(+x[1]+d));return x=(we(w)+"e").split("e"),+(x[0]+"e"+(+x[1]-d))}return s(c)}}var Zv=ys&&1/Eo(new ys([,-0]))[1]==pt?function(n){return new ys(n)}:mh;function pp(n){return function(s){var c=vn(s);return c==L?bu(s):c==C?h0(s):i0(s,n(s))}}function Fi(n,s,c,d,x,w,I,N){var G=s&m;if(!G&&typeof n!="function")throw new jn(l);var nt=d?d.length:0;if(nt||(s&=~(H|F),d=x=e),I=I===e?I:Qe(re(I),0),N=N===e?N:re(N),nt-=x?x.length:0,s&F){var st=d,ht=x;d=x=e}var vt=G?e:Ju(n),Ot=[n,s,c,d,x,st,ht,w,I,N];if(vt&&ly(Ot,vt),n=Ot[0],s=Ot[1],c=Ot[2],d=Ot[3],x=Ot[4],N=Ot[9]=Ot[9]===e?G?0:n.length:Qe(Ot[9]-nt,0),!N&&s&(D|R)&&(s&=~(D|R)),!s||s==y)var qt=Xv(n,s,c);else s==D||s==R?qt=qv(n,s,N):(s==H||s==(y|H))&&!x.length?qt=Yv(n,s,c,d):qt=qo.apply(e,Ot);var se=vt?Zd:wp;return Tp(se(qt,Ot),n,s)}function mp(n,s,c,d){return n===e||mi(n,vs[c])&&!Ae.call(d,c)?s:n}function gp(n,s,c,d,x,w){return Xe(n)&&Xe(s)&&(w.set(s,n),Ho(n,s,e,gp,w),w.delete(s)),n}function $v(n){return Ma(n)?e:n}function _p(n,s,c,d,x,w){var I=c&M,N=n.length,G=s.length;if(N!=G&&!(I&&G>N))return!1;var nt=w.get(n),st=w.get(s);if(nt&&st)return nt==s&&st==n;var ht=-1,vt=!0,Ot=c&T?new Or:e;for(w.set(n,s),w.set(s,n);++ht<N;){var qt=n[ht],se=s[ht];if(d)var Yt=I?d(se,qt,ht,s,n,w):d(qt,se,ht,n,s,w);if(Yt!==e){if(Yt)continue;vt=!1;break}if(Ot){if(!_u(s,function(pe,ye){if(!oa(Ot,ye)&&(qt===pe||x(qt,pe,c,d,w)))return Ot.push(ye)})){vt=!1;break}}else if(!(qt===se||x(qt,se,c,d,w))){vt=!1;break}}return w.delete(n),w.delete(s),vt}function Jv(n,s,c,d,x,w,I){switch(c){case _t:if(n.byteLength!=s.byteLength||n.byteOffset!=s.byteOffset)return!1;n=n.buffer,s=s.buffer;case Nt:return!(n.byteLength!=s.byteLength||!w(new Po(n),new Po(s)));case Vt:case he:case rn:return mi(+n,+s);case Ne:return n.name==s.name&&n.message==s.message;case Ft:case S:return n==s+"";case L:var N=bu;case C:var G=d&M;if(N||(N=Eo),n.size!=s.size&&!G)return!1;var nt=I.get(n);if(nt)return nt==s;d|=T,I.set(n,s);var st=_p(N(n),N(s),d,x,w,I);return I.delete(n),st;case Y:if(fa)return fa.call(n)==fa.call(s)}return!1}function Kv(n,s,c,d,x,w){var I=c&M,N=Zu(n),G=N.length,nt=Zu(s),st=nt.length;if(G!=st&&!I)return!1;for(var ht=G;ht--;){var vt=N[ht];if(!(I?vt in s:Ae.call(s,vt)))return!1}var Ot=w.get(n),qt=w.get(s);if(Ot&&qt)return Ot==s&&qt==n;var se=!0;w.set(n,s),w.set(s,n);for(var Yt=I;++ht<G;){vt=N[ht];var pe=n[vt],ye=s[vt];if(d)var Hn=I?d(ye,pe,vt,s,n,w):d(pe,ye,vt,n,s,w);if(!(Hn===e?pe===ye||x(pe,ye,c,d,w):Hn)){se=!1;break}Yt||(Yt=vt=="constructor")}if(se&&!Yt){var Tn=n.constructor,Gn=s.constructor;Tn!=Gn&&"constructor"in n&&"constructor"in s&&!(typeof Tn=="function"&&Tn instanceof Tn&&typeof Gn=="function"&&Gn instanceof Gn)&&(se=!1)}return w.delete(n),w.delete(s),se}function Oi(n){return nh(bp(n,e,Dp),n+"")}function Zu(n){return Od(n,cn,ju)}function $u(n){return Od(n,Ln,vp)}var Ju=Fo?function(n){return Fo.get(n)}:mh;function Jo(n){for(var s=n.name+"",c=xs[s],d=Ae.call(xs,s)?c.length:0;d--;){var x=c[d],w=x.func;if(w==null||w==n)return x.name}return s}function Es(n){var s=Ae.call(b,"placeholder")?b:n;return s.placeholder}function Xt(){var n=b.iteratee||dh;return n=n===dh?kd:n,arguments.length?n(arguments[0],arguments[1]):n}function Ko(n,s){var c=n.__data__;return sy(s)?c[typeof s=="string"?"string":"hash"]:c.map}function Ku(n){for(var s=cn(n),c=s.length;c--;){var d=s[c],x=n[d];s[c]=[d,x,Mp(x)]}return s}function kr(n,s){var c=c0(n,s);return zd(c)?c:e}function jv(n){var s=Ae.call(n,Nr),c=n[Nr];try{n[Nr]=e;var d=!0}catch{}var x=Co.call(n);return d&&(s?n[Nr]=c:delete n[Nr]),x}var ju=wu?function(n){return n==null?[]:(n=Ue(n),er(wu(n),function(s){return Ed.call(n,s)}))}:gh,vp=wu?function(n){for(var s=[];n;)nr(s,ju(n)),n=Io(n);return s}:gh,vn=En;(Tu&&vn(new Tu(new ArrayBuffer(1)))!=_t||la&&vn(new la)!=L||Au&&vn(Au.resolve())!=zt||ys&&vn(new ys)!=C||ua&&vn(new ua)!=ut)&&(vn=function(n){var s=En(n),c=s==jt?n.constructor:e,d=c?Vr(c):"";if(d)switch(d){case U0:return _t;case N0:return L;case F0:return zt;case O0:return C;case B0:return ut}return s});function Qv(n,s,c){for(var d=-1,x=c.length;++d<x;){var w=c[d],I=w.size;switch(w.type){case"drop":n+=I;break;case"dropRight":s-=I;break;case"take":s=_n(s,n+I);break;case"takeRight":n=Qe(n,s-I);break}}return{start:n,end:s}}function ty(n){var s=n.match(_o);return s?s[1].split(ds):[]}function yp(n,s,c){s=cr(s,n);for(var d=-1,x=s.length,w=!1;++d<x;){var I=Ei(s[d]);if(!(w=n!=null&&c(n,I)))break;n=n[I]}return w||++d!=x?w:(x=n==null?0:n.length,!!x&&rc(x)&&Bi(I,x)&&(ne(n)||Hr(n)))}function ey(n){var s=n.length,c=new n.constructor(s);return s&&typeof n[0]=="string"&&Ae.call(n,"index")&&(c.index=n.index,c.input=n.input),c}function xp(n){return typeof n.constructor=="function"&&!ya(n)?Ms(Io(n)):{}}function ny(n,s,c){var d=n.constructor;switch(s){case Nt:return Xu(n);case Vt:case he:return new d(+n);case _t:return zv(n,c);case At:case de:case mt:case Rt:case Wt:case Zt:case Pt:case ue:case Qt:return np(n,c);case L:return new d;case rn:case S:return new d(n);case Ft:return kv(n);case C:return new d;case Y:return Vv(n)}}function iy(n,s){var c=s.length;if(!c)return n;var d=c-1;return s[d]=(c>1?"& ":"")+s[d],s=s.join(c>2?", ":" "),n.replace(go,`{
/* [wrapped with `+s+`] */
`)}function ry(n){return ne(n)||Hr(n)||!!(wd&&n&&n[wd])}function Bi(n,s){var c=typeof n;return s=s??K,!!s&&(c=="number"||c!="symbol"&&hu.test(n))&&n>-1&&n%1==0&&n<s}function wn(n,s,c){if(!Xe(c))return!1;var d=typeof s;return(d=="number"?Dn(c)&&Bi(s,c.length):d=="string"&&s in c)?mi(c[s],n):!1}function Qu(n,s){if(ne(n))return!1;var c=typeof n;return c=="number"||c=="symbol"||c=="boolean"||n==null||Vn(n)?!0:On.test(n)||!be.test(n)||s!=null&&n in Ue(s)}function sy(n){var s=typeof n;return s=="string"||s=="number"||s=="symbol"||s=="boolean"?n!=="__proto__":n===null}function th(n){var s=Jo(n),c=b[s];if(typeof c!="function"||!(s in ge.prototype))return!1;if(n===c)return!0;var d=Ju(c);return!!d&&n===d[0]}function ay(n){return!!Md&&Md in n}var oy=To?zi:_h;function ya(n){var s=n&&n.constructor,c=typeof s=="function"&&s.prototype||vs;return n===c}function Mp(n){return n===n&&!Xe(n)}function Sp(n,s){return function(c){return c==null?!1:c[n]===s&&(s!==e||n in Ue(c))}}function cy(n){var s=nc(n,function(d){return c.size===f&&c.clear(),d}),c=s.cache;return s}function ly(n,s){var c=n[1],d=s[1],x=c|d,w=x<(y|m|O),I=d==O&&c==D||d==O&&c==q&&n[7].length<=s[8]||d==(O|q)&&s[7].length<=s[8]&&c==D;if(!(w||I))return n;d&y&&(n[2]=s[2],x|=c&y?0:U);var N=s[3];if(N){var G=n[3];n[3]=G?rp(G,N,s[4]):N,n[4]=G?ir(n[3],p):s[4]}return N=s[5],N&&(G=n[5],n[5]=G?sp(G,N,s[6]):N,n[6]=G?ir(n[5],p):s[6]),N=s[7],N&&(n[7]=N),d&O&&(n[8]=n[8]==null?s[8]:_n(n[8],s[8])),n[9]==null&&(n[9]=s[9]),n[0]=s[0],n[1]=x,n}function uy(n){var s=[];if(n!=null)for(var c in Ue(n))s.push(c);return s}function hy(n){return Co.call(n)}function bp(n,s,c){return s=Qe(s===e?n.length-1:s,0),function(){for(var d=arguments,x=-1,w=Qe(d.length-s,0),I=J(w);++x<w;)I[x]=d[s+x];x=-1;for(var N=J(s+1);++x<s;)N[x]=d[x];return N[s]=c(I),Bn(n,this,N)}}function Ep(n,s){return s.length<2?n:zr(n,ei(s,0,-1))}function fy(n,s){for(var c=n.length,d=_n(s.length,c),x=In(n);d--;){var w=s[d];n[d]=Bi(w,c)?x[w]:e}return n}function eh(n,s){if(!(s==="constructor"&&typeof n[s]=="function")&&s!="__proto__")return n[s]}var wp=Ap(Zd),xa=A0||function(n,s){return on.setTimeout(n,s)},nh=Ap(Nv);function Tp(n,s,c){var d=s+"";return nh(n,iy(d,dy(ty(d),c)))}function Ap(n){var s=0,c=0;return function(){var d=I0(),x=j-(d-c);if(c=d,x>0){if(++s>=ot)return arguments[0]}else s=0;return n.apply(e,arguments)}}function jo(n,s){var c=-1,d=n.length,x=d-1;for(s=s===e?d:s;++c<s;){var w=Bu(c,x),I=n[w];n[w]=n[c],n[c]=I}return n.length=s,n}var Cp=cy(function(n){var s=[];return n.charCodeAt(0)===46&&s.push(""),n.replace(hi,function(c,d,x,w){s.push(x?w.replace(yo,"$1"):d||c)}),s});function Ei(n){if(typeof n=="string"||Vn(n))return n;var s=n+"";return s=="0"&&1/n==-pt?"-0":s}function Vr(n){if(n!=null){try{return Ao.call(n)}catch{}try{return n+""}catch{}}return""}function dy(n,s){return Kn(at,function(c){var d="_."+c[0];s&c[1]&&!So(n,d)&&n.push(d)}),n.sort()}function Rp(n){if(n instanceof ge)return n.clone();var s=new Qn(n.__wrapped__,n.__chain__);return s.__actions__=In(n.__actions__),s.__index__=n.__index__,s.__values__=n.__values__,s}function py(n,s,c){(c?wn(n,s,c):s===e)?s=1:s=Qe(re(s),0);var d=n==null?0:n.length;if(!d||s<1)return[];for(var x=0,w=0,I=J(Uo(d/s));x<d;)I[w++]=ei(n,x,x+=s);return I}function my(n){for(var s=-1,c=n==null?0:n.length,d=0,x=[];++s<c;){var w=n[s];w&&(x[d++]=w)}return x}function gy(){var n=arguments.length;if(!n)return[];for(var s=J(n-1),c=arguments[0],d=n;d--;)s[d-1]=arguments[d];return nr(ne(c)?In(c):[c],fn(s,1))}var _y=ce(function(n,s){return Ye(n)?pa(n,fn(s,1,Ye,!0)):[]}),vy=ce(function(n,s){var c=ni(s);return Ye(c)&&(c=e),Ye(n)?pa(n,fn(s,1,Ye,!0),Xt(c,2)):[]}),yy=ce(function(n,s){var c=ni(s);return Ye(c)&&(c=e),Ye(n)?pa(n,fn(s,1,Ye,!0),e,c):[]});function xy(n,s,c){var d=n==null?0:n.length;return d?(s=c||s===e?1:re(s),ei(n,s<0?0:s,d)):[]}function My(n,s,c){var d=n==null?0:n.length;return d?(s=c||s===e?1:re(s),s=d-s,ei(n,0,s<0?0:s)):[]}function Sy(n,s){return n&&n.length?Wo(n,Xt(s,3),!0,!0):[]}function by(n,s){return n&&n.length?Wo(n,Xt(s,3),!0):[]}function Ey(n,s,c,d){var x=n==null?0:n.length;return x?(c&&typeof c!="number"&&wn(n,s,c)&&(c=0,d=x),gv(n,s,c,d)):[]}function Pp(n,s,c){var d=n==null?0:n.length;if(!d)return-1;var x=c==null?0:re(c);return x<0&&(x=Qe(d+x,0)),bo(n,Xt(s,3),x)}function Ip(n,s,c){var d=n==null?0:n.length;if(!d)return-1;var x=d-1;return c!==e&&(x=re(c),x=c<0?Qe(d+x,0):_n(x,d-1)),bo(n,Xt(s,3),x,!0)}function Dp(n){var s=n==null?0:n.length;return s?fn(n,1):[]}function wy(n){var s=n==null?0:n.length;return s?fn(n,pt):[]}function Ty(n,s){var c=n==null?0:n.length;return c?(s=s===e?1:re(s),fn(n,s)):[]}function Ay(n){for(var s=-1,c=n==null?0:n.length,d={};++s<c;){var x=n[s];d[x[0]]=x[1]}return d}function Lp(n){return n&&n.length?n[0]:e}function Cy(n,s,c){var d=n==null?0:n.length;if(!d)return-1;var x=c==null?0:re(c);return x<0&&(x=Qe(d+x,0)),ms(n,s,x)}function Ry(n){var s=n==null?0:n.length;return s?ei(n,0,-1):[]}var Py=ce(function(n){var s=He(n,Gu);return s.length&&s[0]===n[0]?Lu(s):[]}),Iy=ce(function(n){var s=ni(n),c=He(n,Gu);return s===ni(c)?s=e:c.pop(),c.length&&c[0]===n[0]?Lu(c,Xt(s,2)):[]}),Dy=ce(function(n){var s=ni(n),c=He(n,Gu);return s=typeof s=="function"?s:e,s&&c.pop(),c.length&&c[0]===n[0]?Lu(c,e,s):[]});function Ly(n,s){return n==null?"":R0.call(n,s)}function ni(n){var s=n==null?0:n.length;return s?n[s-1]:e}function Uy(n,s,c){var d=n==null?0:n.length;if(!d)return-1;var x=d;return c!==e&&(x=re(c),x=x<0?Qe(d+x,0):_n(x,d-1)),s===s?d0(n,s,x):bo(n,dd,x,!0)}function Ny(n,s){return n&&n.length?Wd(n,re(s)):e}var Fy=ce(Up);function Up(n,s){return n&&n.length&&s&&s.length?Ou(n,s):n}function Oy(n,s,c){return n&&n.length&&s&&s.length?Ou(n,s,Xt(c,2)):n}function By(n,s,c){return n&&n.length&&s&&s.length?Ou(n,s,e,c):n}var zy=Oi(function(n,s){var c=n==null?0:n.length,d=Ru(n,s);return Yd(n,He(s,function(x){return Bi(x,c)?+x:x}).sort(ip)),d});function ky(n,s){var c=[];if(!(n&&n.length))return c;var d=-1,x=[],w=n.length;for(s=Xt(s,3);++d<w;){var I=n[d];s(I,d,n)&&(c.push(I),x.push(d))}return Yd(n,x),c}function ih(n){return n==null?n:L0.call(n)}function Vy(n,s,c){var d=n==null?0:n.length;return d?(c&&typeof c!="number"&&wn(n,s,c)?(s=0,c=d):(s=s==null?0:re(s),c=c===e?d:re(c)),ei(n,s,c)):[]}function Hy(n,s){return Go(n,s)}function Gy(n,s,c){return ku(n,s,Xt(c,2))}function Wy(n,s){var c=n==null?0:n.length;if(c){var d=Go(n,s);if(d<c&&mi(n[d],s))return d}return-1}function Xy(n,s){return Go(n,s,!0)}function qy(n,s,c){return ku(n,s,Xt(c,2),!0)}function Yy(n,s){var c=n==null?0:n.length;if(c){var d=Go(n,s,!0)-1;if(mi(n[d],s))return d}return-1}function Zy(n){return n&&n.length?$d(n):[]}function $y(n,s){return n&&n.length?$d(n,Xt(s,2)):[]}function Jy(n){var s=n==null?0:n.length;return s?ei(n,1,s):[]}function Ky(n,s,c){return n&&n.length?(s=c||s===e?1:re(s),ei(n,0,s<0?0:s)):[]}function jy(n,s,c){var d=n==null?0:n.length;return d?(s=c||s===e?1:re(s),s=d-s,ei(n,s<0?0:s,d)):[]}function Qy(n,s){return n&&n.length?Wo(n,Xt(s,3),!1,!0):[]}function tx(n,s){return n&&n.length?Wo(n,Xt(s,3)):[]}var ex=ce(function(n){return or(fn(n,1,Ye,!0))}),nx=ce(function(n){var s=ni(n);return Ye(s)&&(s=e),or(fn(n,1,Ye,!0),Xt(s,2))}),ix=ce(function(n){var s=ni(n);return s=typeof s=="function"?s:e,or(fn(n,1,Ye,!0),e,s)});function rx(n){return n&&n.length?or(n):[]}function sx(n,s){return n&&n.length?or(n,Xt(s,2)):[]}function ax(n,s){return s=typeof s=="function"?s:e,n&&n.length?or(n,e,s):[]}function rh(n){if(!(n&&n.length))return[];var s=0;return n=er(n,function(c){if(Ye(c))return s=Qe(c.length,s),!0}),Mu(s,function(c){return He(n,vu(c))})}function Np(n,s){if(!(n&&n.length))return[];var c=rh(n);return s==null?c:He(c,function(d){return Bn(s,e,d)})}var ox=ce(function(n,s){return Ye(n)?pa(n,s):[]}),cx=ce(function(n){return Hu(er(n,Ye))}),lx=ce(function(n){var s=ni(n);return Ye(s)&&(s=e),Hu(er(n,Ye),Xt(s,2))}),ux=ce(function(n){var s=ni(n);return s=typeof s=="function"?s:e,Hu(er(n,Ye),e,s)}),hx=ce(rh);function fx(n,s){return Qd(n||[],s||[],da)}function dx(n,s){return Qd(n||[],s||[],_a)}var px=ce(function(n){var s=n.length,c=s>1?n[s-1]:e;return c=typeof c=="function"?(n.pop(),c):e,Np(n,c)});function Fp(n){var s=b(n);return s.__chain__=!0,s}function mx(n,s){return s(n),n}function Qo(n,s){return s(n)}var gx=Oi(function(n){var s=n.length,c=s?n[0]:0,d=this.__wrapped__,x=function(w){return Ru(w,n)};return s>1||this.__actions__.length||!(d instanceof ge)||!Bi(c)?this.thru(x):(d=d.slice(c,+c+(s?1:0)),d.__actions__.push({func:Qo,args:[x],thisArg:e}),new Qn(d,this.__chain__).thru(function(w){return s&&!w.length&&w.push(e),w}))});function _x(){return Fp(this)}function vx(){return new Qn(this.value(),this.__chain__)}function yx(){this.__values__===e&&(this.__values__=Jp(this.value()));var n=this.__index__>=this.__values__.length,s=n?e:this.__values__[this.__index__++];return{done:n,value:s}}function xx(){return this}function Mx(n){for(var s,c=this;c instanceof Bo;){var d=Rp(c);d.__index__=0,d.__values__=e,s?x.__wrapped__=d:s=d;var x=d;c=c.__wrapped__}return x.__wrapped__=n,s}function Sx(){var n=this.__wrapped__;if(n instanceof ge){var s=n;return this.__actions__.length&&(s=new ge(this)),s=s.reverse(),s.__actions__.push({func:Qo,args:[ih],thisArg:e}),new Qn(s,this.__chain__)}return this.thru(ih)}function bx(){return jd(this.__wrapped__,this.__actions__)}var Ex=Xo(function(n,s,c){Ae.call(n,c)?++n[c]:Ni(n,c,1)});function wx(n,s,c){var d=ne(n)?hd:mv;return c&&wn(n,s,c)&&(s=e),d(n,Xt(s,3))}function Tx(n,s){var c=ne(n)?er:Nd;return c(n,Xt(s,3))}var Ax=lp(Pp),Cx=lp(Ip);function Rx(n,s){return fn(tc(n,s),1)}function Px(n,s){return fn(tc(n,s),pt)}function Ix(n,s,c){return c=c===e?1:re(c),fn(tc(n,s),c)}function Op(n,s){var c=ne(n)?Kn:ar;return c(n,Xt(s,3))}function Bp(n,s){var c=ne(n)?J_:Ud;return c(n,Xt(s,3))}var Dx=Xo(function(n,s,c){Ae.call(n,c)?n[c].push(s):Ni(n,c,[s])});function Lx(n,s,c,d){n=Dn(n)?n:Ts(n),c=c&&!d?re(c):0;var x=n.length;return c<0&&(c=Qe(x+c,0)),sc(n)?c<=x&&n.indexOf(s,c)>-1:!!x&&ms(n,s,c)>-1}var Ux=ce(function(n,s,c){var d=-1,x=typeof s=="function",w=Dn(n)?J(n.length):[];return ar(n,function(I){w[++d]=x?Bn(s,I,c):ma(I,s,c)}),w}),Nx=Xo(function(n,s,c){Ni(n,c,s)});function tc(n,s){var c=ne(n)?He:Vd;return c(n,Xt(s,3))}function Fx(n,s,c,d){return n==null?[]:(ne(s)||(s=s==null?[]:[s]),c=d?e:c,ne(c)||(c=c==null?[]:[c]),Xd(n,s,c))}var Ox=Xo(function(n,s,c){n[c?0:1].push(s)},function(){return[[],[]]});function Bx(n,s,c){var d=ne(n)?gu:md,x=arguments.length<3;return d(n,Xt(s,4),c,x,ar)}function zx(n,s,c){var d=ne(n)?K_:md,x=arguments.length<3;return d(n,Xt(s,4),c,x,Ud)}function kx(n,s){var c=ne(n)?er:Nd;return c(n,ic(Xt(s,3)))}function Vx(n){var s=ne(n)?Pd:Lv;return s(n)}function Hx(n,s,c){(c?wn(n,s,c):s===e)?s=1:s=re(s);var d=ne(n)?uv:Uv;return d(n,s)}function Gx(n){var s=ne(n)?hv:Fv;return s(n)}function Wx(n){if(n==null)return 0;if(Dn(n))return sc(n)?_s(n):n.length;var s=vn(n);return s==L||s==C?n.size:Nu(n).length}function Xx(n,s,c){var d=ne(n)?_u:Ov;return c&&wn(n,s,c)&&(s=e),d(n,Xt(s,3))}var qx=ce(function(n,s){if(n==null)return[];var c=s.length;return c>1&&wn(n,s[0],s[1])?s=[]:c>2&&wn(s[0],s[1],s[2])&&(s=[s[0]]),Xd(n,fn(s,1),[])}),ec=T0||function(){return on.Date.now()};function Yx(n,s){if(typeof s!="function")throw new jn(l);return n=re(n),function(){if(--n<1)return s.apply(this,arguments)}}function zp(n,s,c){return s=c?e:s,s=n&&s==null?n.length:s,Fi(n,O,e,e,e,e,s)}function kp(n,s){var c;if(typeof s!="function")throw new jn(l);return n=re(n),function(){return--n>0&&(c=s.apply(this,arguments)),n<=1&&(s=e),c}}var sh=ce(function(n,s,c){var d=y;if(c.length){var x=ir(c,Es(sh));d|=H}return Fi(n,d,s,c,x)}),Vp=ce(function(n,s,c){var d=y|m;if(c.length){var x=ir(c,Es(Vp));d|=H}return Fi(s,d,n,c,x)});function Hp(n,s,c){s=c?e:s;var d=Fi(n,D,e,e,e,e,e,s);return d.placeholder=Hp.placeholder,d}function Gp(n,s,c){s=c?e:s;var d=Fi(n,R,e,e,e,e,e,s);return d.placeholder=Gp.placeholder,d}function Wp(n,s,c){var d,x,w,I,N,G,nt=0,st=!1,ht=!1,vt=!0;if(typeof n!="function")throw new jn(l);s=ii(s)||0,Xe(c)&&(st=!!c.leading,ht="maxWait"in c,w=ht?Qe(ii(c.maxWait)||0,s):w,vt="trailing"in c?!!c.trailing:vt);function Ot(Ze){var gi=d,Vi=x;return d=x=e,nt=Ze,I=n.apply(Vi,gi),I}function qt(Ze){return nt=Ze,N=xa(pe,s),st?Ot(Ze):I}function se(Ze){var gi=Ze-G,Vi=Ze-nt,lm=s-gi;return ht?_n(lm,w-Vi):lm}function Yt(Ze){var gi=Ze-G,Vi=Ze-nt;return G===e||gi>=s||gi<0||ht&&Vi>=w}function pe(){var Ze=ec();if(Yt(Ze))return ye(Ze);N=xa(pe,se(Ze))}function ye(Ze){return N=e,vt&&d?Ot(Ze):(d=x=e,I)}function Hn(){N!==e&&tp(N),nt=0,d=G=x=N=e}function Tn(){return N===e?I:ye(ec())}function Gn(){var Ze=ec(),gi=Yt(Ze);if(d=arguments,x=this,G=Ze,gi){if(N===e)return qt(G);if(ht)return tp(N),N=xa(pe,s),Ot(G)}return N===e&&(N=xa(pe,s)),I}return Gn.cancel=Hn,Gn.flush=Tn,Gn}var Zx=ce(function(n,s){return Ld(n,1,s)}),$x=ce(function(n,s,c){return Ld(n,ii(s)||0,c)});function Jx(n){return Fi(n,P)}function nc(n,s){if(typeof n!="function"||s!=null&&typeof s!="function")throw new jn(l);var c=function(){var d=arguments,x=s?s.apply(this,d):d[0],w=c.cache;if(w.has(x))return w.get(x);var I=n.apply(this,d);return c.cache=w.set(x,I)||w,I};return c.cache=new(nc.Cache||Ui),c}nc.Cache=Ui;function ic(n){if(typeof n!="function")throw new jn(l);return function(){var s=arguments;switch(s.length){case 0:return!n.call(this);case 1:return!n.call(this,s[0]);case 2:return!n.call(this,s[0],s[1]);case 3:return!n.call(this,s[0],s[1],s[2])}return!n.apply(this,s)}}function Kx(n){return kp(2,n)}var jx=Bv(function(n,s){s=s.length==1&&ne(s[0])?He(s[0],zn(Xt())):He(fn(s,1),zn(Xt()));var c=s.length;return ce(function(d){for(var x=-1,w=_n(d.length,c);++x<w;)d[x]=s[x].call(this,d[x]);return Bn(n,this,d)})}),ah=ce(function(n,s){var c=ir(s,Es(ah));return Fi(n,H,e,s,c)}),Xp=ce(function(n,s){var c=ir(s,Es(Xp));return Fi(n,F,e,s,c)}),Qx=Oi(function(n,s){return Fi(n,q,e,e,e,s)});function tM(n,s){if(typeof n!="function")throw new jn(l);return s=s===e?s:re(s),ce(n,s)}function eM(n,s){if(typeof n!="function")throw new jn(l);return s=s==null?0:Qe(re(s),0),ce(function(c){var d=c[s],x=lr(c,0,s);return d&&nr(x,d),Bn(n,this,x)})}function nM(n,s,c){var d=!0,x=!0;if(typeof n!="function")throw new jn(l);return Xe(c)&&(d="leading"in c?!!c.leading:d,x="trailing"in c?!!c.trailing:x),Wp(n,s,{leading:d,maxWait:s,trailing:x})}function iM(n){return zp(n,1)}function rM(n,s){return ah(Wu(s),n)}function sM(){if(!arguments.length)return[];var n=arguments[0];return ne(n)?n:[n]}function aM(n){return ti(n,v)}function oM(n,s){return s=typeof s=="function"?s:e,ti(n,v,s)}function cM(n){return ti(n,g|v)}function lM(n,s){return s=typeof s=="function"?s:e,ti(n,g|v,s)}function uM(n,s){return s==null||Dd(n,s,cn(s))}function mi(n,s){return n===s||n!==n&&s!==s}var hM=$o(Du),fM=$o(function(n,s){return n>=s}),Hr=Bd(function(){return arguments}())?Bd:function(n){return qe(n)&&Ae.call(n,"callee")&&!Ed.call(n,"callee")},ne=J.isArray,dM=sd?zn(sd):Mv;function Dn(n){return n!=null&&rc(n.length)&&!zi(n)}function Ye(n){return qe(n)&&Dn(n)}function pM(n){return n===!0||n===!1||qe(n)&&En(n)==Vt}var ur=C0||_h,mM=ad?zn(ad):Sv;function gM(n){return qe(n)&&n.nodeType===1&&!Ma(n)}function _M(n){if(n==null)return!0;if(Dn(n)&&(ne(n)||typeof n=="string"||typeof n.splice=="function"||ur(n)||ws(n)||Hr(n)))return!n.length;var s=vn(n);if(s==L||s==C)return!n.size;if(ya(n))return!Nu(n).length;for(var c in n)if(Ae.call(n,c))return!1;return!0}function vM(n,s){return ga(n,s)}function yM(n,s,c){c=typeof c=="function"?c:e;var d=c?c(n,s):e;return d===e?ga(n,s,e,c):!!d}function oh(n){if(!qe(n))return!1;var s=En(n);return s==Ne||s==$t||typeof n.message=="string"&&typeof n.name=="string"&&!Ma(n)}function xM(n){return typeof n=="number"&&Td(n)}function zi(n){if(!Xe(n))return!1;var s=En(n);return s==Re||s==fe||s==bt||s==De}function qp(n){return typeof n=="number"&&n==re(n)}function rc(n){return typeof n=="number"&&n>-1&&n%1==0&&n<=K}function Xe(n){var s=typeof n;return n!=null&&(s=="object"||s=="function")}function qe(n){return n!=null&&typeof n=="object"}var Yp=od?zn(od):Ev;function MM(n,s){return n===s||Uu(n,s,Ku(s))}function SM(n,s,c){return c=typeof c=="function"?c:e,Uu(n,s,Ku(s),c)}function bM(n){return Zp(n)&&n!=+n}function EM(n){if(oy(n))throw new te(o);return zd(n)}function wM(n){return n===null}function TM(n){return n==null}function Zp(n){return typeof n=="number"||qe(n)&&En(n)==rn}function Ma(n){if(!qe(n)||En(n)!=jt)return!1;var s=Io(n);if(s===null)return!0;var c=Ae.call(s,"constructor")&&s.constructor;return typeof c=="function"&&c instanceof c&&Ao.call(c)==S0}var ch=cd?zn(cd):wv;function AM(n){return qp(n)&&n>=-K&&n<=K}var $p=ld?zn(ld):Tv;function sc(n){return typeof n=="string"||!ne(n)&&qe(n)&&En(n)==S}function Vn(n){return typeof n=="symbol"||qe(n)&&En(n)==Y}var ws=ud?zn(ud):Av;function CM(n){return n===e}function RM(n){return qe(n)&&vn(n)==ut}function PM(n){return qe(n)&&En(n)==rt}var IM=$o(Fu),DM=$o(function(n,s){return n<=s});function Jp(n){if(!n)return[];if(Dn(n))return sc(n)?di(n):In(n);if(ca&&n[ca])return u0(n[ca]());var s=vn(n),c=s==L?bu:s==C?Eo:Ts;return c(n)}function ki(n){if(!n)return n===0?n:0;if(n=ii(n),n===pt||n===-pt){var s=n<0?-1:1;return s*St}return n===n?n:0}function re(n){var s=ki(n),c=s%1;return s===s?c?s-c:s:0}function Kp(n){return n?Br(re(n),0,Lt):0}function ii(n){if(typeof n=="number")return n;if(Vn(n))return Tt;if(Xe(n)){var s=typeof n.valueOf=="function"?n.valueOf():n;n=Xe(s)?s+"":s}if(typeof n!="string")return n===0?n:+n;n=gd(n);var c=cu.test(n);return c||uu.test(n)?Y_(n.slice(2),c?2:8):ou.test(n)?Tt:+n}function jp(n){return bi(n,Ln(n))}function LM(n){return n?Br(re(n),-K,K):n===0?n:0}function we(n){return n==null?"":kn(n)}var UM=Ss(function(n,s){if(ya(s)||Dn(s)){bi(s,cn(s),n);return}for(var c in s)Ae.call(s,c)&&da(n,c,s[c])}),Qp=Ss(function(n,s){bi(s,Ln(s),n)}),ac=Ss(function(n,s,c,d){bi(s,Ln(s),n,d)}),NM=Ss(function(n,s,c,d){bi(s,cn(s),n,d)}),FM=Oi(Ru);function OM(n,s){var c=Ms(n);return s==null?c:Id(c,s)}var BM=ce(function(n,s){n=Ue(n);var c=-1,d=s.length,x=d>2?s[2]:e;for(x&&wn(s[0],s[1],x)&&(d=1);++c<d;)for(var w=s[c],I=Ln(w),N=-1,G=I.length;++N<G;){var nt=I[N],st=n[nt];(st===e||mi(st,vs[nt])&&!Ae.call(n,nt))&&(n[nt]=w[nt])}return n}),zM=ce(function(n){return n.push(e,gp),Bn(tm,e,n)});function kM(n,s){return fd(n,Xt(s,3),Si)}function VM(n,s){return fd(n,Xt(s,3),Iu)}function HM(n,s){return n==null?n:Pu(n,Xt(s,3),Ln)}function GM(n,s){return n==null?n:Fd(n,Xt(s,3),Ln)}function WM(n,s){return n&&Si(n,Xt(s,3))}function XM(n,s){return n&&Iu(n,Xt(s,3))}function qM(n){return n==null?[]:Vo(n,cn(n))}function YM(n){return n==null?[]:Vo(n,Ln(n))}function lh(n,s,c){var d=n==null?e:zr(n,s);return d===e?c:d}function ZM(n,s){return n!=null&&yp(n,s,_v)}function uh(n,s){return n!=null&&yp(n,s,vv)}var $M=hp(function(n,s,c){s!=null&&typeof s.toString!="function"&&(s=Co.call(s)),n[s]=c},fh(Un)),JM=hp(function(n,s,c){s!=null&&typeof s.toString!="function"&&(s=Co.call(s)),Ae.call(n,s)?n[s].push(c):n[s]=[c]},Xt),KM=ce(ma);function cn(n){return Dn(n)?Rd(n):Nu(n)}function Ln(n){return Dn(n)?Rd(n,!0):Cv(n)}function jM(n,s){var c={};return s=Xt(s,3),Si(n,function(d,x,w){Ni(c,s(d,x,w),d)}),c}function QM(n,s){var c={};return s=Xt(s,3),Si(n,function(d,x,w){Ni(c,x,s(d,x,w))}),c}var tS=Ss(function(n,s,c){Ho(n,s,c)}),tm=Ss(function(n,s,c,d){Ho(n,s,c,d)}),eS=Oi(function(n,s){var c={};if(n==null)return c;var d=!1;s=He(s,function(w){return w=cr(w,n),d||(d=w.length>1),w}),bi(n,$u(n),c),d&&(c=ti(c,g|_|v,$v));for(var x=s.length;x--;)Vu(c,s[x]);return c});function nS(n,s){return em(n,ic(Xt(s)))}var iS=Oi(function(n,s){return n==null?{}:Pv(n,s)});function em(n,s){if(n==null)return{};var c=He($u(n),function(d){return[d]});return s=Xt(s),qd(n,c,function(d,x){return s(d,x[0])})}function rS(n,s,c){s=cr(s,n);var d=-1,x=s.length;for(x||(x=1,n=e);++d<x;){var w=n==null?e:n[Ei(s[d])];w===e&&(d=x,w=c),n=zi(w)?w.call(n):w}return n}function sS(n,s,c){return n==null?n:_a(n,s,c)}function aS(n,s,c,d){return d=typeof d=="function"?d:e,n==null?n:_a(n,s,c,d)}var nm=pp(cn),im=pp(Ln);function oS(n,s,c){var d=ne(n),x=d||ur(n)||ws(n);if(s=Xt(s,4),c==null){var w=n&&n.constructor;x?c=d?new w:[]:Xe(n)?c=zi(w)?Ms(Io(n)):{}:c={}}return(x?Kn:Si)(n,function(I,N,G){return s(c,I,N,G)}),c}function cS(n,s){return n==null?!0:Vu(n,s)}function lS(n,s,c){return n==null?n:Kd(n,s,Wu(c))}function uS(n,s,c,d){return d=typeof d=="function"?d:e,n==null?n:Kd(n,s,Wu(c),d)}function Ts(n){return n==null?[]:Su(n,cn(n))}function hS(n){return n==null?[]:Su(n,Ln(n))}function fS(n,s,c){return c===e&&(c=s,s=e),c!==e&&(c=ii(c),c=c===c?c:0),s!==e&&(s=ii(s),s=s===s?s:0),Br(ii(n),s,c)}function dS(n,s,c){return s=ki(s),c===e?(c=s,s=0):c=ki(c),n=ii(n),yv(n,s,c)}function pS(n,s,c){if(c&&typeof c!="boolean"&&wn(n,s,c)&&(s=c=e),c===e&&(typeof s=="boolean"?(c=s,s=e):typeof n=="boolean"&&(c=n,n=e)),n===e&&s===e?(n=0,s=1):(n=ki(n),s===e?(s=n,n=0):s=ki(s)),n>s){var d=n;n=s,s=d}if(c||n%1||s%1){var x=Ad();return _n(n+x*(s-n+q_("1e-"+((x+"").length-1))),s)}return Bu(n,s)}var mS=bs(function(n,s,c){return s=s.toLowerCase(),n+(c?rm(s):s)});function rm(n){return hh(we(n).toLowerCase())}function sm(n){return n=we(n),n&&n.replace(E,s0).replace(F_,"")}function gS(n,s,c){n=we(n),s=kn(s);var d=n.length;c=c===e?d:Br(re(c),0,d);var x=c;return c-=s.length,c>=0&&n.slice(c,x)==s}function _S(n){return n=we(n),n&&Et.test(n)?n.replace(ct,a0):n}function vS(n){return n=we(n),n&&mo.test(n)?n.replace(fs,"\\$&"):n}var yS=bs(function(n,s,c){return n+(c?"-":"")+s.toLowerCase()}),xS=bs(function(n,s,c){return n+(c?" ":"")+s.toLowerCase()}),MS=cp("toLowerCase");function SS(n,s,c){n=we(n),s=re(s);var d=s?_s(n):0;if(!s||d>=s)return n;var x=(s-d)/2;return Zo(No(x),c)+n+Zo(Uo(x),c)}function bS(n,s,c){n=we(n),s=re(s);var d=s?_s(n):0;return s&&d<s?n+Zo(s-d,c):n}function ES(n,s,c){n=we(n),s=re(s);var d=s?_s(n):0;return s&&d<s?Zo(s-d,c)+n:n}function wS(n,s,c){return c||s==null?s=0:s&&(s=+s),D0(we(n).replace(fi,""),s||0)}function TS(n,s,c){return(c?wn(n,s,c):s===e)?s=1:s=re(s),zu(we(n),s)}function AS(){var n=arguments,s=we(n[0]);return n.length<3?s:s.replace(n[1],n[2])}var CS=bs(function(n,s,c){return n+(c?"_":"")+s.toLowerCase()});function RS(n,s,c){return c&&typeof c!="number"&&wn(n,s,c)&&(s=c=e),c=c===e?Lt:c>>>0,c?(n=we(n),n&&(typeof s=="string"||s!=null&&!ch(s))&&(s=kn(s),!s&&gs(n))?lr(di(n),0,c):n.split(s,c)):[]}var PS=bs(function(n,s,c){return n+(c?" ":"")+hh(s)});function IS(n,s,c){return n=we(n),c=c==null?0:Br(re(c),0,n.length),s=kn(s),n.slice(c,c+s.length)==s}function DS(n,s,c){var d=b.templateSettings;c&&wn(n,s,c)&&(s=e),n=we(n),s=ac({},s,d,mp);var x=ac({},s.imports,d.imports,mp),w=cn(x),I=Su(x,w),N,G,nt=0,st=s.interpolate||k,ht="__p += '",vt=Eu((s.escape||k).source+"|"+st.source+"|"+(st===Je?xo:k).source+"|"+(s.evaluate||k).source+"|$","g"),Ot="//# sourceURL="+(Ae.call(s,"sourceURL")?(s.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++V_+"]")+`
`;n.replace(vt,function(Yt,pe,ye,Hn,Tn,Gn){return ye||(ye=Hn),ht+=n.slice(nt,Gn).replace(Z,o0),pe&&(N=!0,ht+=`' +
__e(`+pe+`) +
'`),Tn&&(G=!0,ht+=`';
`+Tn+`;
__p += '`),ye&&(ht+=`' +
((__t = (`+ye+`)) == null ? '' : __t) +
'`),nt=Gn+Yt.length,Yt}),ht+=`';
`;var qt=Ae.call(s,"variable")&&s.variable;if(!qt)ht=`with (obj) {
`+ht+`
}
`;else if(ps.test(qt))throw new te(u);ht=(G?ht.replace(Pe,""):ht).replace(z,"$1").replace(xt,"$1;"),ht="function("+(qt||"obj")+`) {
`+(qt?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(N?", __e = _.escape":"")+(G?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+ht+`return __p
}`;var se=om(function(){return Ee(w,Ot+"return "+ht).apply(e,I)});if(se.source=ht,oh(se))throw se;return se}function LS(n){return we(n).toLowerCase()}function US(n){return we(n).toUpperCase()}function NS(n,s,c){if(n=we(n),n&&(c||s===e))return gd(n);if(!n||!(s=kn(s)))return n;var d=di(n),x=di(s),w=_d(d,x),I=vd(d,x)+1;return lr(d,w,I).join("")}function FS(n,s,c){if(n=we(n),n&&(c||s===e))return n.slice(0,xd(n)+1);if(!n||!(s=kn(s)))return n;var d=di(n),x=vd(d,di(s))+1;return lr(d,0,x).join("")}function OS(n,s,c){if(n=we(n),n&&(c||s===e))return n.replace(fi,"");if(!n||!(s=kn(s)))return n;var d=di(n),x=_d(d,di(s));return lr(d,x).join("")}function BS(n,s){var c=A,d=B;if(Xe(s)){var x="separator"in s?s.separator:x;c="length"in s?re(s.length):c,d="omission"in s?kn(s.omission):d}n=we(n);var w=n.length;if(gs(n)){var I=di(n);w=I.length}if(c>=w)return n;var N=c-_s(d);if(N<1)return d;var G=I?lr(I,0,N).join(""):n.slice(0,N);if(x===e)return G+d;if(I&&(N+=G.length-N),ch(x)){if(n.slice(N).search(x)){var nt,st=G;for(x.global||(x=Eu(x.source,we(Mo.exec(x))+"g")),x.lastIndex=0;nt=x.exec(st);)var ht=nt.index;G=G.slice(0,ht===e?N:ht)}}else if(n.indexOf(kn(x),N)!=N){var vt=G.lastIndexOf(x);vt>-1&&(G=G.slice(0,vt))}return G+d}function zS(n){return n=we(n),n&&wt.test(n)?n.replace(Q,p0):n}var kS=bs(function(n,s,c){return n+(c?" ":"")+s.toUpperCase()}),hh=cp("toUpperCase");function am(n,s,c){return n=we(n),s=c?e:s,s===e?l0(n)?_0(n):t0(n):n.match(s)||[]}var om=ce(function(n,s){try{return Bn(n,e,s)}catch(c){return oh(c)?c:new te(c)}}),VS=Oi(function(n,s){return Kn(s,function(c){c=Ei(c),Ni(n,c,sh(n[c],n))}),n});function HS(n){var s=n==null?0:n.length,c=Xt();return n=s?He(n,function(d){if(typeof d[1]!="function")throw new jn(l);return[c(d[0]),d[1]]}):[],ce(function(d){for(var x=-1;++x<s;){var w=n[x];if(Bn(w[0],this,d))return Bn(w[1],this,d)}})}function GS(n){return pv(ti(n,g))}function fh(n){return function(){return n}}function WS(n,s){return n==null||n!==n?s:n}var XS=up(),qS=up(!0);function Un(n){return n}function dh(n){return kd(typeof n=="function"?n:ti(n,g))}function YS(n){return Hd(ti(n,g))}function ZS(n,s){return Gd(n,ti(s,g))}var $S=ce(function(n,s){return function(c){return ma(c,n,s)}}),JS=ce(function(n,s){return function(c){return ma(n,c,s)}});function ph(n,s,c){var d=cn(s),x=Vo(s,d);c==null&&!(Xe(s)&&(x.length||!d.length))&&(c=s,s=n,n=this,x=Vo(s,cn(s)));var w=!(Xe(c)&&"chain"in c)||!!c.chain,I=zi(n);return Kn(x,function(N){var G=s[N];n[N]=G,I&&(n.prototype[N]=function(){var nt=this.__chain__;if(w||nt){var st=n(this.__wrapped__),ht=st.__actions__=In(this.__actions__);return ht.push({func:G,args:arguments,thisArg:n}),st.__chain__=nt,st}return G.apply(n,nr([this.value()],arguments))})}),n}function KS(){return on._===this&&(on._=b0),this}function mh(){}function jS(n){return n=re(n),ce(function(s){return Wd(s,n)})}var QS=qu(He),tb=qu(hd),eb=qu(_u);function cm(n){return Qu(n)?vu(Ei(n)):Iv(n)}function nb(n){return function(s){return n==null?e:zr(n,s)}}var ib=fp(),rb=fp(!0);function gh(){return[]}function _h(){return!1}function sb(){return{}}function ab(){return""}function ob(){return!0}function cb(n,s){if(n=re(n),n<1||n>K)return[];var c=Lt,d=_n(n,Lt);s=Xt(s),n-=Lt;for(var x=Mu(d,s);++c<n;)s(c);return x}function lb(n){return ne(n)?He(n,Ei):Vn(n)?[n]:In(Cp(we(n)))}function ub(n){var s=++M0;return we(n)+s}var hb=Yo(function(n,s){return n+s},0),fb=Yu("ceil"),db=Yo(function(n,s){return n/s},1),pb=Yu("floor");function mb(n){return n&&n.length?ko(n,Un,Du):e}function gb(n,s){return n&&n.length?ko(n,Xt(s,2),Du):e}function _b(n){return pd(n,Un)}function vb(n,s){return pd(n,Xt(s,2))}function yb(n){return n&&n.length?ko(n,Un,Fu):e}function xb(n,s){return n&&n.length?ko(n,Xt(s,2),Fu):e}var Mb=Yo(function(n,s){return n*s},1),Sb=Yu("round"),bb=Yo(function(n,s){return n-s},0);function Eb(n){return n&&n.length?xu(n,Un):0}function wb(n,s){return n&&n.length?xu(n,Xt(s,2)):0}return b.after=Yx,b.ary=zp,b.assign=UM,b.assignIn=Qp,b.assignInWith=ac,b.assignWith=NM,b.at=FM,b.before=kp,b.bind=sh,b.bindAll=VS,b.bindKey=Vp,b.castArray=sM,b.chain=Fp,b.chunk=py,b.compact=my,b.concat=gy,b.cond=HS,b.conforms=GS,b.constant=fh,b.countBy=Ex,b.create=OM,b.curry=Hp,b.curryRight=Gp,b.debounce=Wp,b.defaults=BM,b.defaultsDeep=zM,b.defer=Zx,b.delay=$x,b.difference=_y,b.differenceBy=vy,b.differenceWith=yy,b.drop=xy,b.dropRight=My,b.dropRightWhile=Sy,b.dropWhile=by,b.fill=Ey,b.filter=Tx,b.flatMap=Rx,b.flatMapDeep=Px,b.flatMapDepth=Ix,b.flatten=Dp,b.flattenDeep=wy,b.flattenDepth=Ty,b.flip=Jx,b.flow=XS,b.flowRight=qS,b.fromPairs=Ay,b.functions=qM,b.functionsIn=YM,b.groupBy=Dx,b.initial=Ry,b.intersection=Py,b.intersectionBy=Iy,b.intersectionWith=Dy,b.invert=$M,b.invertBy=JM,b.invokeMap=Ux,b.iteratee=dh,b.keyBy=Nx,b.keys=cn,b.keysIn=Ln,b.map=tc,b.mapKeys=jM,b.mapValues=QM,b.matches=YS,b.matchesProperty=ZS,b.memoize=nc,b.merge=tS,b.mergeWith=tm,b.method=$S,b.methodOf=JS,b.mixin=ph,b.negate=ic,b.nthArg=jS,b.omit=eS,b.omitBy=nS,b.once=Kx,b.orderBy=Fx,b.over=QS,b.overArgs=jx,b.overEvery=tb,b.overSome=eb,b.partial=ah,b.partialRight=Xp,b.partition=Ox,b.pick=iS,b.pickBy=em,b.property=cm,b.propertyOf=nb,b.pull=Fy,b.pullAll=Up,b.pullAllBy=Oy,b.pullAllWith=By,b.pullAt=zy,b.range=ib,b.rangeRight=rb,b.rearg=Qx,b.reject=kx,b.remove=ky,b.rest=tM,b.reverse=ih,b.sampleSize=Hx,b.set=sS,b.setWith=aS,b.shuffle=Gx,b.slice=Vy,b.sortBy=qx,b.sortedUniq=Zy,b.sortedUniqBy=$y,b.split=RS,b.spread=eM,b.tail=Jy,b.take=Ky,b.takeRight=jy,b.takeRightWhile=Qy,b.takeWhile=tx,b.tap=mx,b.throttle=nM,b.thru=Qo,b.toArray=Jp,b.toPairs=nm,b.toPairsIn=im,b.toPath=lb,b.toPlainObject=jp,b.transform=oS,b.unary=iM,b.union=ex,b.unionBy=nx,b.unionWith=ix,b.uniq=rx,b.uniqBy=sx,b.uniqWith=ax,b.unset=cS,b.unzip=rh,b.unzipWith=Np,b.update=lS,b.updateWith=uS,b.values=Ts,b.valuesIn=hS,b.without=ox,b.words=am,b.wrap=rM,b.xor=cx,b.xorBy=lx,b.xorWith=ux,b.zip=hx,b.zipObject=fx,b.zipObjectDeep=dx,b.zipWith=px,b.entries=nm,b.entriesIn=im,b.extend=Qp,b.extendWith=ac,ph(b,b),b.add=hb,b.attempt=om,b.camelCase=mS,b.capitalize=rm,b.ceil=fb,b.clamp=fS,b.clone=aM,b.cloneDeep=cM,b.cloneDeepWith=lM,b.cloneWith=oM,b.conformsTo=uM,b.deburr=sm,b.defaultTo=WS,b.divide=db,b.endsWith=gS,b.eq=mi,b.escape=_S,b.escapeRegExp=vS,b.every=wx,b.find=Ax,b.findIndex=Pp,b.findKey=kM,b.findLast=Cx,b.findLastIndex=Ip,b.findLastKey=VM,b.floor=pb,b.forEach=Op,b.forEachRight=Bp,b.forIn=HM,b.forInRight=GM,b.forOwn=WM,b.forOwnRight=XM,b.get=lh,b.gt=hM,b.gte=fM,b.has=ZM,b.hasIn=uh,b.head=Lp,b.identity=Un,b.includes=Lx,b.indexOf=Cy,b.inRange=dS,b.invoke=KM,b.isArguments=Hr,b.isArray=ne,b.isArrayBuffer=dM,b.isArrayLike=Dn,b.isArrayLikeObject=Ye,b.isBoolean=pM,b.isBuffer=ur,b.isDate=mM,b.isElement=gM,b.isEmpty=_M,b.isEqual=vM,b.isEqualWith=yM,b.isError=oh,b.isFinite=xM,b.isFunction=zi,b.isInteger=qp,b.isLength=rc,b.isMap=Yp,b.isMatch=MM,b.isMatchWith=SM,b.isNaN=bM,b.isNative=EM,b.isNil=TM,b.isNull=wM,b.isNumber=Zp,b.isObject=Xe,b.isObjectLike=qe,b.isPlainObject=Ma,b.isRegExp=ch,b.isSafeInteger=AM,b.isSet=$p,b.isString=sc,b.isSymbol=Vn,b.isTypedArray=ws,b.isUndefined=CM,b.isWeakMap=RM,b.isWeakSet=PM,b.join=Ly,b.kebabCase=yS,b.last=ni,b.lastIndexOf=Uy,b.lowerCase=xS,b.lowerFirst=MS,b.lt=IM,b.lte=DM,b.max=mb,b.maxBy=gb,b.mean=_b,b.meanBy=vb,b.min=yb,b.minBy=xb,b.stubArray=gh,b.stubFalse=_h,b.stubObject=sb,b.stubString=ab,b.stubTrue=ob,b.multiply=Mb,b.nth=Ny,b.noConflict=KS,b.noop=mh,b.now=ec,b.pad=SS,b.padEnd=bS,b.padStart=ES,b.parseInt=wS,b.random=pS,b.reduce=Bx,b.reduceRight=zx,b.repeat=TS,b.replace=AS,b.result=rS,b.round=Sb,b.runInContext=V,b.sample=Vx,b.size=Wx,b.snakeCase=CS,b.some=Xx,b.sortedIndex=Hy,b.sortedIndexBy=Gy,b.sortedIndexOf=Wy,b.sortedLastIndex=Xy,b.sortedLastIndexBy=qy,b.sortedLastIndexOf=Yy,b.startCase=PS,b.startsWith=IS,b.subtract=bb,b.sum=Eb,b.sumBy=wb,b.template=DS,b.times=cb,b.toFinite=ki,b.toInteger=re,b.toLength=Kp,b.toLower=LS,b.toNumber=ii,b.toSafeInteger=LM,b.toString=we,b.toUpper=US,b.trim=NS,b.trimEnd=FS,b.trimStart=OS,b.truncate=BS,b.unescape=zS,b.uniqueId=ub,b.upperCase=kS,b.upperFirst=hh,b.each=Op,b.eachRight=Bp,b.first=Lp,ph(b,function(){var n={};return Si(b,function(s,c){Ae.call(b.prototype,c)||(n[c]=s)}),n}(),{chain:!1}),b.VERSION=r,Kn(["bind","bindKey","curry","curryRight","partial","partialRight"],function(n){b[n].placeholder=b}),Kn(["drop","take"],function(n,s){ge.prototype[n]=function(c){c=c===e?1:Qe(re(c),0);var d=this.__filtered__&&!s?new ge(this):this.clone();return d.__filtered__?d.__takeCount__=_n(c,d.__takeCount__):d.__views__.push({size:_n(c,Lt),type:n+(d.__dir__<0?"Right":"")}),d},ge.prototype[n+"Right"]=function(c){return this.reverse()[n](c).reverse()}}),Kn(["filter","map","takeWhile"],function(n,s){var c=s+1,d=c==it||c==et;ge.prototype[n]=function(x){var w=this.clone();return w.__iteratees__.push({iteratee:Xt(x,3),type:c}),w.__filtered__=w.__filtered__||d,w}}),Kn(["head","last"],function(n,s){var c="take"+(s?"Right":"");ge.prototype[n]=function(){return this[c](1).value()[0]}}),Kn(["initial","tail"],function(n,s){var c="drop"+(s?"":"Right");ge.prototype[n]=function(){return this.__filtered__?new ge(this):this[c](1)}}),ge.prototype.compact=function(){return this.filter(Un)},ge.prototype.find=function(n){return this.filter(n).head()},ge.prototype.findLast=function(n){return this.reverse().find(n)},ge.prototype.invokeMap=ce(function(n,s){return typeof n=="function"?new ge(this):this.map(function(c){return ma(c,n,s)})}),ge.prototype.reject=function(n){return this.filter(ic(Xt(n)))},ge.prototype.slice=function(n,s){n=re(n);var c=this;return c.__filtered__&&(n>0||s<0)?new ge(c):(n<0?c=c.takeRight(-n):n&&(c=c.drop(n)),s!==e&&(s=re(s),c=s<0?c.dropRight(-s):c.take(s-n)),c)},ge.prototype.takeRightWhile=function(n){return this.reverse().takeWhile(n).reverse()},ge.prototype.toArray=function(){return this.take(Lt)},Si(ge.prototype,function(n,s){var c=/^(?:filter|find|map|reject)|While$/.test(s),d=/^(?:head|last)$/.test(s),x=b[d?"take"+(s=="last"?"Right":""):s],w=d||/^find/.test(s);x&&(b.prototype[s]=function(){var I=this.__wrapped__,N=d?[1]:arguments,G=I instanceof ge,nt=N[0],st=G||ne(I),ht=function(pe){var ye=x.apply(b,nr([pe],N));return d&&vt?ye[0]:ye};st&&c&&typeof nt=="function"&&nt.length!=1&&(G=st=!1);var vt=this.__chain__,Ot=!!this.__actions__.length,qt=w&&!vt,se=G&&!Ot;if(!w&&st){I=se?I:new ge(this);var Yt=n.apply(I,N);return Yt.__actions__.push({func:Qo,args:[ht],thisArg:e}),new Qn(Yt,vt)}return qt&&se?n.apply(this,N):(Yt=this.thru(ht),qt?d?Yt.value()[0]:Yt.value():Yt)})}),Kn(["pop","push","shift","sort","splice","unshift"],function(n){var s=wo[n],c=/^(?:push|sort|unshift)$/.test(n)?"tap":"thru",d=/^(?:pop|shift)$/.test(n);b.prototype[n]=function(){var x=arguments;if(d&&!this.__chain__){var w=this.value();return s.apply(ne(w)?w:[],x)}return this[c](function(I){return s.apply(ne(I)?I:[],x)})}}),Si(ge.prototype,function(n,s){var c=b[s];if(c){var d=c.name+"";Ae.call(xs,d)||(xs[d]=[]),xs[d].push({name:s,func:c})}}),xs[qo(e,m).name]=[{name:"wrapper",func:e}],ge.prototype.clone=z0,ge.prototype.reverse=k0,ge.prototype.value=V0,b.prototype.at=gx,b.prototype.chain=_x,b.prototype.commit=vx,b.prototype.next=yx,b.prototype.plant=Mx,b.prototype.reverse=Sx,b.prototype.toJSON=b.prototype.valueOf=b.prototype.value=bx,b.prototype.first=b.prototype.head,ca&&(b.prototype[ca]=xx),b},rr=v0();typeof define=="function"&&typeof define.amd=="object"&&define.amd?(on._=rr,define(function(){return rr})):Ur?((Ur.exports=rr)._=rr,du._=rr):on._=rr}).call(i)}),s_=us(hs(),1);function Gf(i){return i!=null}var{cos:tC,pow:eC,sin:nC,sqrt:iC,PI:p_}=Math,rC=i=>{if(i<1/2.75)return 7.5625*i*i;if(i<2/2.75){let t=i-1.5;return 7.5625*(t/2.75)*t+.75}else return i<2.5/2.75?7.5625*(i-=2.25/2.75)*i+.9375:7.5625*(i-=2.625/2.75)*i+.984375};function sC(i){return t=>1-i(1-t)}function aC(i){return t=>t<.5?.5*i(2*t):.5+.5*(1-i(2-2*t))}var oC=i=>i===0||i===1?i:eC(2,-10*i)*nC((i-.075)*(2*p_)/.3)+1,cC={linear:i=>i,quad:i=>i*i,cubic:i=>i*i*i,quart:i=>i*i*i*i,quint:i=>i*i*i*i*i,sine:i=>1-tC(i*p_*.5),circ:i=>1-iC(1-i*i),back:i=>2.7*i*i*i-1.7*i*i,elastic:oC,bounce:i=>1-rC(1-i)},a_=Object.fromEntries(Object.entries(cC).flatMap(([i,t])=>[[i,t],[`${i}In`,t],[`${i}Out`,sC(t)],[`${i}InOut`,aC(t)]]));function Wf(i){if(!(i in a_))throw new Error(`Easing '${i}' was not found.`);return a_[i]}var lC=us(hs(),1),Vf={min:0,max:0,ease:"linear"};function fo(i){(0,lC.defaults)(i,{max:i.min??0},Vf)}function po(i){return Wf(i.ease)(Math.random())*(i.max-i.min)+i.min}var Of=us(hs(),1),iu={property:"",timeline:new Float32Array,useEmitterDuration:!1,relative:!1,low:{min:0,max:0,ease:"linear"},high:{min:1,max:1,ease:"linear"}};function Bf(i){(0,Of.defaults)(i,(0,Of.cloneDeep)({high:i.low??iu.high}),(0,Of.cloneDeep)(iu)),fo(i.low),fo(i.high),Array.isArray(i.timeline)&&(i.timeline=new Float32Array(i.timeline))}var ru=us(hs(),1);function m_(i,t,e=1,r=0){let a=0,o=i.length/e;for(;a<o;){let l=a+o>>1;i[l*e+r]<t?a=l+1:o=l}return a*e}function uC(i,t){let e=new Array(i);for(let r=0;r<i;r++)e[r]=t(r);return e}var hC=Math.PI*.5;function g_(i,t,e=Number.EPSILON){return Math.abs(i-t)<=e}function fC(i,t){let e=m_(i,t,2),r=Math.max(0,e-2);e===i.length&&(e-=2);let a=i[r],o=i[e];if(g_(a,o))return i[r+1];{let l=i[r+1],u=i[e+1],h=(t-a)/(o-a);return(u-l)*h+l}}function o_(i,t,e,r){if(i.length===0){r.fill(0,0,t);return}let a=t+1,o=m_(i,e,a),l=Math.max(0,o-a);o===i.length&&(o-=a);let u=i[l],h=i[o];if(g_(u,h))for(let f=0;f<t;f++)r[f]=i[l+f+1];else for(let f=0;f<t;f++){let p=i[l+f+1],g=i[o+f+1],_=(e-u)/(h-u);r[f]=(g-p)*_+p}}var dC=us(hs(),1),{random:ia,cos:c_,sin:l_,PI:pC,acos:mC,cbrt:gC}=Math,__={type:"point",x:0,y:0,z:0,w:0,h:0,d:0,ease:"linear"};function _C(i){(0,dC.defaults)(i,__)}function vC(i,t){let e=Wf(i);t.x=e(ia())-.5,t.y=e(ia())-.5,t.z=e(ia())-.5}var zf=new W,yC=new W,xC=2*pC;function MC(i,t){switch(i.type){case"point":t.set(i.x,i.y,i.z);break;case"box":vC(i.ease,zf),zf.multiply(yC.set(i.w,i.h,i.d)),t.set(i.x,i.y,i.z).add(zf);break;case"ellipsoid":{let e=ia(),r=ia(),a=xC*e,o=mC(2*r-1),l=gC(Wf(i.ease)(ia())),u=l_(a),h=c_(a),f=l_(o),p=c_(o);t.set(l*i.w*f*h,l*i.h*f*u,l*i.d*p)}}}var v_={uuid:"",enabled:!0,count:100,loops:!0,duration:{duration:{min:10,max:10,ease:"linear"},delayBefore:Vf,delayAfter:Vf},emissionRate:{...iu,property:"emissionRate",useEmitterDuration:!0,low:{min:10,max:10,ease:"linear"},high:{min:10,max:10,ease:"linear"}},particleLifeExpectancy:{...iu,property:"particleLifeExpectancy",useEmitterDuration:!0,low:{min:2,max:2,ease:"linear"},high:{min:2,max:2,ease:"linear"}},spawn:__,orientToForwardDirection:!1,propertyTimelines:[],material:null};function SC(i,t){(0,ru.defaults)(i,{id:uo.generateUUID()},(0,ru.cloneDeep)(v_)),_C(i.spawn),bC(i.duration),Bf(i.emissionRate),Bf(i.particleLifeExpectancy),i.propertyTimelines.filter(Gf).forEach(Bf),i.material=EC(i.material,t)}function bC(i){(0,ru.defaults)(i,(0,ru.cloneDeep)(v_.duration)),fo(i.duration),fo(i.delayBefore),fo(i.delayAfter)}function EC(i,t){return i?Array.isArray(i)?i.map(e=>u_(e,t)).filter(Gf):u_(i,t):null}function u_(i,t){return typeof i=="string"?t[i]||(console.warn(`Missing material: ${i}`),null):i??null}var wC={version:"1.0",emitters:[]};function TC(i,t){(0,s_.defaults)(i,(0,s_.cloneDeep)(wC)),i.emitters.filter(Gf).forEach(e=>SC(e,t))}function AC(i){return i.isParticleEmitterObject}var CC=class y_ extends Zi{constructor(){super(),this.emittersNeedUpdate=!0,this.emitters=[]}forEachEmitter(t){for(let e of this.children)AC(e)&&t(e)}update(t){this.forEachEmitter(e=>{e.state.update(t),e.updateGeometry()})}rewind(){this.forEachEmitter(t=>t.state.rewind())}stop(t){this.emitters.forEach(e=>e.state.stop(t))}reset(){this.emitters.forEach(t=>t.state.reset())}clone(t=!0){let e=new y_;if(t)for(let r of this.children)e.add(r.clone(t));return e}};function RC(i,t,e=t*2,r=t*2){i.save();let a=i.createRadialGradient(t,t,0,t,t,t);a.addColorStop(0,"rgba(255,255,255,1.0)"),a.addColorStop(1,"rgba(255,255,255,0)"),i.fillStyle=a,i.fillRect(0,0,e,r),i.restore()}function PC(i=64){if(typeof document>"u")return new pn;let t=document.createElement("canvas"),e=t.getContext("2d");if(!e)return new pn;t.width=i,t.height=i;let r=i/2;RC(e,r);let a=new pn(t);return a.type=li,a.needsUpdate=!0,a}var kf=null;function IC(){return kf===null&&(kf=PC()),kf}var DC=us(hs(),1),Hf=class{constructor(i){this.timeline=i,this.low=0,this.high=0,this.diff=0,this.current=0,this.reset()}reset(){this.low=po(this.timeline.low),this.high=po(this.timeline.high),this.timeline.relative&&(this.high+=this.low),this.diff=this.high-this.low,this.current=this.low}setTime(i){this.current=fC(this.timeline.timeline,i)*this.diff+this.low}},LC=class{constructor(i,t,e,r){this.r=i,this.g=t,this.b=e,this.a=r}set(i,t,e,r){this.r=i,this.g=t,this.b=e,this.a=r}},UC=class{constructor(i){this.model=i,this.active=!1,this.life=0,this._lifeExpectancy=0,this.lifeExpectancyInv=0,this.position=new W,this.velocity=new W,this.scale=new W(1,1,1),this.rotation=new W,this.rotationalVelocity=new W,this.forwardDirection=new W,this.forwardDirectionVelocity=new W,this.forwardVelocity=0,this.tint=new LC(1,1,1,1),this.origin=new W(.5,.5,.5),this.rotationFinal=new W,this.imageIndex=0,this.propertyStates=i.propertyTimelines.map(t=>NC(this,t))}get lifeExpectancy(){return this._lifeExpectancy}set lifeExpectancy(i){this._lifeExpectancy=i,this.lifeExpectancyInv=1/i}update(i,t){this.life+=i;let e=this.life*this.lifeExpectancyInv,r=(0,DC.clamp)(e,0,1);for(let a of this.propertyStates)a.apply(r,t);if(this.position.add(this.velocity),this.rotation.add(this.rotationalVelocity),this.forwardDirection.add(this.forwardDirectionVelocity),this.forwardVelocity!==0&&!(this.forwardDirection.y!==0||this.forwardDirection.x!==0)&&this.forwardDirection.z!==0){let a=this.forwardDirection.z;this.position.x+=Math.cos(a)*this.forwardVelocity,this.position.y+=Math.sin(a)*this.forwardVelocity}this.model.orientToForwardDirection?(this.rotationFinal.copy(this.rotation).add(this.forwardDirection),this.rotationFinal.z+=hC):this.rotationFinal.copy(this.rotation)}reset(){this.active=!1,this.life=0,this._lifeExpectancy=0,this.lifeExpectancyInv=0,MC(this.model.spawn,this.position),this.velocity.set(0,0,0),this.scale.set(1,1,1),this.rotation.set(0,0,0),this.rotationalVelocity.set(0,0,0),this.forwardDirection.set(0,0,0),this.forwardDirectionVelocity.set(0,0,0),this.forwardVelocity=0,this.tint.set(1,1,1,1),this.origin.set(.5,.5,.5),this.imageIndex=0;for(let i of this.propertyStates)i.reset()}};function NC(i,t){return t.property==="color"?new OC(i.tint,t):new FC(i,t)}var h_=new Set,FC=class{constructor(i,t){this.particleProps=i,this.timeline=t,this.value=new Hf(t);let e=t.property;!(e in f_)&&!h_.has(e)&&(h_.add(e),console.warn(`Could not find property updater with the name ${e}`)),this.updater=f_[e]??(()=>{})}apply(i,t){if(this.timeline.timeline.length===0)return;let e=this.timeline.useEmitterDuration?t:i;this.value.setTime(e),this.updater(this.particleProps,this.value.current)}reset(){this.value.reset()}},OC=class{constructor(i,t){if(this.color=i,this.timeline=t,this.previous=new Float32Array(3),this.value=new Float32Array(3),t.timeline.length%4!==0)throw new Error("invalid color timeline, expected stride to be 4")}apply(i,t){this.previous.set(this.value);let e=this.timeline.useEmitterDuration?t:i;o_(this.timeline.timeline,3,e,this.value);let r=this.color;r.r=this.value[0],r.g=this.value[1],r.b=this.value[2]}reset(){o_(this.timeline.timeline,3,0,this.value),this.previous.set(this.value)}},f_={x:(i,t)=>i.position.x=t,y:(i,t)=>i.position.y=t,z:(i,t)=>i.position.z=t,velocityX:(i,t)=>i.velocity.x=t,velocityY:(i,t)=>i.velocity.y=t,velocityZ:(i,t)=>i.velocity.z=t,originX:(i,t)=>i.origin.x=t,originY:(i,t)=>i.origin.y=t,originZ:(i,t)=>i.origin.z=t,scale:(i,t)=>{i.scale.x=t,i.scale.y=t,i.scale.z=t},scaleX:(i,t)=>i.scale.x=t,scaleY:(i,t)=>i.scale.y=t,scaleZ:(i,t)=>i.scale.z=t,rotationX:(i,t)=>i.rotation.x=t,rotationY:(i,t)=>i.rotation.y=t,rotationZ:(i,t)=>i.rotation.z=t,rotationalVelocityX:(i,t)=>i.rotationalVelocity.x=t,rotationalVelocityY:(i,t)=>i.rotationalVelocity.y=t,rotationalVelocityZ:(i,t)=>i.rotationalVelocity.z=t,forwardDirectionX:(i,t)=>i.forwardDirection.x=t,forwardDirectionY:(i,t)=>i.forwardDirection.y=t,forwardDirectionZ:(i,t)=>i.forwardDirection.z=t,forwardDirectionVelocityZ:(i,t)=>i.forwardDirectionVelocity.z=t,forwardVelocity:(i,t)=>i.forwardVelocity=t,colorR:(i,t)=>i.tint.r=t,colorG:(i,t)=>i.tint.g=t,colorB:(i,t)=>i.tint.b=t,colorA:(i,t)=>i.tint.a=t},BC=us(hs(),1),zC=class{constructor(i){this.model=i,this._activeCount=0,this.delayBefore=0,this.delayAfter=0,this.time=0,this.duration=0,this.durationInv=0,this.endTime=0,this._isComplete=!1,this.loops=!1,this.accumulator=0,this.particles=uC(i.count,()=>new UC(i)),this.emissionRateValue=new Hf(i.emissionRate),this.particleLifeExpectancyValue=new Hf(i.particleLifeExpectancy),this.rewind()}get activeCount(){return this._activeCount}get totalTime(){return this.delayBefore+this.duration+this.delayAfter}get progress(){return this.totalTime<=0?1:(this.time+this.delayBefore)/this.totalTime}get isComplete(){return this._isComplete}update(i){if(this._isComplete||!this.model.enabled)return;if(this.time+=i,this.time>=this.endTime){if(this.loops){let r=this.time-this.endTime;this.rewind(),this.time+=r}else if(this._activeCount===0){this._isComplete=!0,this.accumulator=0;return}}let t=this.time*this.durationInv;if(this.emissionRateValue.setTime(t),this.particleLifeExpectancyValue.setTime(t),this.time<this.duration&&this.time>0){let r=this.emissionRateValue.current;this.accumulator+=r*i;let a=1/r;if(this.accumulator>1){let o=0;for(let l of this.particles)if(l.active||(l.reset(),l.life+=o,o-=a,l.active=!0,l.lifeExpectancy=this.particleLifeExpectancyValue.current,this._activeCount++,this.accumulator--),this._activeCount>=this.model.count&&(this.accumulator=0),this.accumulator<1)break}}let e=(0,BC.clamp)(t,0,1);for(let r of this.particles)r.active&&(r.update(i,e),r.life>r.lifeExpectancy&&(r.active=!1,this._activeCount--))}clearParticles(){for(let i of this.particles)i.active=!1;this._activeCount=0,this.accumulator=0}reset(){this.clearParticles(),this.rewind()}stop(i=!0){this.loops=!1,this.time=this.endTime,i||(this.clearParticles(),this._isComplete=!0)}rewind(){let i=this.model;this._isComplete=!1,this.loops=i.loops,this.delayBefore=po(i.duration.delayBefore),this.delayAfter=po(i.duration.delayAfter),this.time=-this.delayBefore,this.duration=po(i.duration.duration),this.durationInv=1/this.duration,this.endTime=this.duration+this.delayAfter,this.emissionRateValue.reset(),this.particleLifeExpectancyValue.reset()}},kC=class extends Ha{constructor(i){super(),this.isParticleEmitterObject=!0,this.state=new zC(i);let t=i.count;this.geometry.setAttribute("position",new dn(new Float32Array(t*3),3)),this.geometry.setAttribute("color",new dn(new Float32Array(t*4),4)),i.material&&(this.material=i.material)}updateGeometry(){if(!this.state.model.enabled)return;let i=this.geometry.attributes.position.array,t=this.geometry.attributes.color.array,e=0;for(let r of this.state.particles){if(!r.active)continue;let a=r.position,o=e*3;i[o]=a.x,i[o+1]=a.y,i[o+2]=a.z;let l=r.tint,u=e*4;t[u]=l.r,t[u+1]=l.g,t[u+2]=l.b,t[u+3]=l.a,e++}this.geometry.setDrawRange(0,this.state.activeCount),this.geometry.attributes.position.needsUpdate=!0,this.geometry.attributes.color.needsUpdate=!0}},VC=new TextDecoder;function HC(i,t){return typeof i=="string"?i:VC.decode(i,t)}var x_=class extends wr{constructor(i){super(i),this.materials={},this.materialLoader=new ja(this.manager),this.materialLoader.setTextures({radial:IC()})}setMaterials(i){this.materials=i}setPath(i){return super.setPath(i),this.materialLoader.setPath(i),this}load(i,t,e,r){let a=new Zs(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(i,o=>{this.parseAsync(JSON.parse(HC(o))).then(t).catch(l=>r?.(l))},e,r)}async parseAsync(i){if(i.materials){let e=this.materialLoader;for(let[r,a]of Object.entries(i.materials))this.materials[r]=typeof a=="string"?await e.loadAsync(a):e.parse(a)}TC(i,this.materials);let t=new CC;for(let e of i.emitters)t.add(new kC(e));return t}};var M_={type:"change"},qf={type:"start"},b_={type:"end"},su=new Sr,S_=new si,GC=Math.cos(70*uo.DEG2RAD),nn=new W,Fn=2*Math.PI,Ie={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Xf=1e-6,au=class extends eo{constructor(t,e=null){super(t,e),this.state=Ie.NONE,this.enabled=!0,this.target=new W,this.cursor=new W,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Tr.ROTATE,MIDDLE:Tr.DOLLY,RIGHT:Tr.PAN},this.touches={ONE:Ar.ROTATE,TWO:Ar.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new W,this._lastQuaternion=new oi,this._lastTargetPosition=new W,this._quat=new oi().setFromUnitVectors(t.up,new W(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new $s,this._sphericalDelta=new $s,this._scale=1,this._panOffset=new W,this._rotateStart=new Gt,this._rotateEnd=new Gt,this._rotateDelta=new Gt,this._panStart=new Gt,this._panEnd=new Gt,this._panDelta=new Gt,this._dollyStart=new Gt,this._dollyEnd=new Gt,this._dollyDelta=new Gt,this._dollyDirection=new W,this._mouse=new Gt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=XC.bind(this),this._onPointerDown=WC.bind(this),this._onPointerUp=qC.bind(this),this._onContextMenu=QC.bind(this),this._onMouseWheel=$C.bind(this),this._onKeyDown=JC.bind(this),this._onTouchStart=KC.bind(this),this._onTouchMove=jC.bind(this),this._onMouseDown=YC.bind(this),this._onMouseMove=ZC.bind(this),this._interceptControlDown=tR.bind(this),this._interceptControlUp=eR.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(M_),this.update(),this.state=Ie.NONE}update(t=null){let e=this.object.position;nn.copy(e).sub(this.target),nn.applyQuaternion(this._quat),this._spherical.setFromVector3(nn),this.autoRotate&&this.state===Ie.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let r=this.minAzimuthAngle,a=this.maxAzimuthAngle;isFinite(r)&&isFinite(a)&&(r<-Math.PI?r+=Fn:r>Math.PI&&(r-=Fn),a<-Math.PI?a+=Fn:a>Math.PI&&(a-=Fn),r<=a?this._spherical.theta=Math.max(r,Math.min(a,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(r+a)/2?Math.max(r,this._spherical.theta):Math.min(a,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let o=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let l=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),o=l!=this._spherical.radius}if(nn.setFromSpherical(this._spherical),nn.applyQuaternion(this._quatInverse),e.copy(this.target).add(nn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let l=null;if(this.object.isPerspectiveCamera){let u=nn.length();l=this._clampDistance(u*this._scale);let h=u-l;this.object.position.addScaledVector(this._dollyDirection,h),this.object.updateMatrixWorld(),o=!!h}else if(this.object.isOrthographicCamera){let u=new W(this._mouse.x,this._mouse.y,0);u.unproject(this.object);let h=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),o=h!==this.object.zoom;let f=new W(this._mouse.x,this._mouse.y,0);f.unproject(this.object),this.object.position.sub(f).add(u),this.object.updateMatrixWorld(),l=nn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;l!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(l).add(this.object.position):(su.origin.copy(this.object.position),su.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(su.direction))<GC?this.object.lookAt(this.target):(S_.setFromNormalAndCoplanarPoint(this.object.up,this.target),su.intersectPlane(S_,this.target))))}else if(this.object.isOrthographicCamera){let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),l!==this.object.zoom&&(this.object.updateProjectionMatrix(),o=!0)}return this._scale=1,this._performCursorZoom=!1,o||this._lastPosition.distanceToSquared(this.object.position)>Xf||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Xf||this._lastTargetPosition.distanceToSquared(this.target)>Xf?(this.dispatchEvent(M_),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Fn/60*this.autoRotateSpeed*t:Fn/60/60*this.autoRotateSpeed}_getZoomScale(t){let e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){nn.setFromMatrixColumn(e,0),nn.multiplyScalar(-t),this._panOffset.add(nn)}_panUp(t,e){this.screenSpacePanning===!0?nn.setFromMatrixColumn(e,1):(nn.setFromMatrixColumn(e,0),nn.crossVectors(this.object.up,nn)),nn.multiplyScalar(t),this._panOffset.add(nn)}_pan(t,e){let r=this.domElement;if(this.object.isPerspectiveCamera){let a=this.object.position;nn.copy(a).sub(this.target);let o=nn.length();o*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*o/r.clientHeight,this.object.matrix),this._panUp(2*e*o/r.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/r.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/r.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let r=this.domElement.getBoundingClientRect(),a=t-r.left,o=e-r.top,l=r.width,u=r.height;this._mouse.x=a/l*2-1,this._mouse.y=-(o/u)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(Fn*this._rotateDelta.x/e.clientHeight),this._rotateUp(Fn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Fn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Fn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Fn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Fn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),r=.5*(t.pageX+e.x),a=.5*(t.pageY+e.y);this._rotateStart.set(r,a)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),r=.5*(t.pageX+e.x),a=.5*(t.pageY+e.y);this._panStart.set(r,a)}}_handleTouchStartDolly(t){let e=this._getSecondPointerPosition(t),r=t.pageX-e.x,a=t.pageY-e.y,o=Math.sqrt(r*r+a*a);this._dollyStart.set(0,o)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{let r=this._getSecondPointerPosition(t),a=.5*(t.pageX+r.x),o=.5*(t.pageY+r.y);this._rotateEnd.set(a,o)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(Fn*this._rotateDelta.x/e.clientHeight),this._rotateUp(Fn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),r=.5*(t.pageX+e.x),a=.5*(t.pageY+e.y);this._panEnd.set(r,a)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){let e=this._getSecondPointerPosition(t),r=t.pageX-e.x,a=t.pageY-e.y,o=Math.sqrt(r*r+a*a);this._dollyEnd.set(0,o),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let l=(t.pageX+e.x)*.5,u=(t.pageY+e.y)*.5;this._updateZoomParameters(l,u)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new Gt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){let e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){let e=t.deltaMode,r={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:r.deltaY*=16;break;case 2:r.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(r.deltaY*=10),r}};function WC(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function XC(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function qC(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(b_),this.state=Ie.NONE;break;case 1:let t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function YC(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Tr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=Ie.DOLLY;break;case Tr.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Ie.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Ie.ROTATE}break;case Tr.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Ie.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Ie.PAN}break;default:this.state=Ie.NONE}this.state!==Ie.NONE&&this.dispatchEvent(qf)}function ZC(i){switch(this.state){case Ie.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case Ie.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case Ie.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function $C(i){this.enabled===!1||this.enableZoom===!1||this.state!==Ie.NONE||(i.preventDefault(),this.dispatchEvent(qf),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(b_))}function JC(i){this.enabled!==!1&&this._handleKeyDown(i)}function KC(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Ar.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=Ie.TOUCH_ROTATE;break;case Ar.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=Ie.TOUCH_PAN;break;default:this.state=Ie.NONE}break;case 2:switch(this.touches.TWO){case Ar.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=Ie.TOUCH_DOLLY_PAN;break;case Ar.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=Ie.TOUCH_DOLLY_ROTATE;break;default:this.state=Ie.NONE}break;default:this.state=Ie.NONE}this.state!==Ie.NONE&&this.dispatchEvent(qf)}function jC(i){switch(this._trackPointer(i),this.state){case Ie.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case Ie.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case Ie.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case Ie.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=Ie.NONE}}function QC(i){this.enabled!==!1&&i.preventDefault()}function tR(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function eR(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}console.log("Hello!");var ra=new Mn(45,window.innerWidth/window.innerHeight,.1,1e3);ra.position.set(0,10,20);ra.lookAt(new W(0,2,0));var Dr=new ka;Dr.background=new Bt(1118481);Dr.fog=new za(1118481,20,100);var E_=new Qa,w_=new $a(16777215,4473924);w_.position.set(0,20,0);Dr.add(w_);var T_=new Ka(16777215);T_.position.set(0,20,10);Dr.add(T_);var A_=new Nn(new ts(2e3,2e3),new Ys({color:1579032,depthWrite:!1}));A_.rotation.x=-Math.PI/2;Dr.add(A_);var $f=new to(200,40,0,16777215);$f.material.opacity=.2;$f.material.transparent=!0;Dr.add($f);var Yf=document.querySelector("#mainCanvas"),sa=new eu({canvas:Yf,antialias:!0});sa.setClearColor(1644825);var nR=new au(ra,sa.domElement);window.addEventListener("resize",C_);C_();function C_(){let i=Yf.clientWidth,t=Yf.clientHeight;sa.setPixelRatio(window.devicePixelRatio),sa.setSize(i,t,!1),ra.aspect=i/t,ra.updateProjectionMatrix()}var Zf=null,iR=new x_;iR.loadAsync("./fire.json").then(i=>{Zf=i,Dr.add(Zf)}).catch(console.error);function rR(){let i=E_.getDelta();nR.update(),Zf?.update(i),sa.render(Dr,ra)}E_.start();sa.setAnimationLoop(rR);})();
/*! Bundled license information:

lodash/lodash.js:
  (**
   * @license
   * Lodash <https://lodash.com/>
   * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
   * Released under MIT license <https://lodash.com/license>
   * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
   * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
   *)
*/
/*! Bundled license information:

three/build/three.core.js:
  (**
   * @license
   * Copyright 2010-2025 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2025 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
//# sourceMappingURL=index.js.map
