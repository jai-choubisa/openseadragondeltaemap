!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e=e||self).openSeadragonTargetMap=t()}(this,(function(){"use strict";const e=function(e,t){return Number(Math.round(e+"e"+t)+"e-"+t)},t=function(e,t,i){this.name="TargetPatch",this.element=document.createElement("targetPatch"),this.element.style.position="absolute",this.element.style.left=`${100*e.location.x/i.x}%`,this.element.style.top=`${100*e.location.y/i.y}%`,this.element.style.width=`${100*e.location.w/i.x}%`,this.element.style.height=`${100*e.location.h/i.y}%`,this.element.style.boxShadow="inset 0 0 2px 2px orange",t.appendChild(this.element)},i=function(e,i,n){this.name="TargetChart",this.element=document.createElement("targetChart"),this.element.style.position="absolute",this.element.style.left=`${100*e.location.x/n.x}%`,this.element.style.top=`${100*e.location.y/n.y}%`,this.element.style.width=`${100*e.location.w/n.x}%`,this.element.style.height=`${100*e.location.h/n.y}%`,this.element.style.boxShadow="inset 0 0 2px 2px darkviolet",i.appendChild(this.element),this.patches=[];const s={x:e.location.w,y:e.location.h};e.colorPatches&&e.colorPatches.forEach(e=>{this.patches.push(new t(e,this.element,s))}),e.edgePatches&&e.edgePatches.forEach(e=>{this.patches.push(new t(e,this.element,s))})},n=function(t){this.name="TargetMap",this.element=document.createElement("targetmap"),this.element.style.position="absolute",this.element.style.boxShadow="inset 0 0 2px 2px blue",t.canvas.appendChild(this.element),this.resize=()=>{if(this.tiledImage=t.world.getItemAt(0),!this.tiledImage)return;const i=this.tiledImage.getBounds(),n=t.viewport.pixelFromPoint(i.getTopLeft()),s=t.viewport.pixelFromPoint(i.getBottomRight());if(!function(){let e=Boolean(arguments.length);return Array.from(arguments).forEach(t=>{e=e&&"number"==typeof t&&Number.isFinite(t)}),e}(n.x,n.y,s.x,s.y))return;const o=e(n.x,4),a=e(n.y,4),h=e(s.x-n.x,4),l=e(s.y-n.y,4);this.element.style.left=`${o}px`,this.element.style.top=`${a}px`,this.element.style.width=`${h}px`,this.element.style.height=`${l}px`},t.addHandler("animation",()=>{this.resize()}),t.addHandler("open",()=>{this.resize()}),t.addHandler("rotate",()=>{this.resize()}),t.addHandler("resize",()=>{this.resize()}),this.resize(),this.charts=[],this.render=e=>{e.targets.forEach(e=>{this.charts.push(new i(e,this.element,this.tiledImage.getContentSize()))})}};return function(){var e=window.OpenSeadragon;if(!e&&!(e=require("openseadragon")))throw new Error("OpenSeadragon is missing.");e.Viewer.prototype.targetMap=function(){return this._targetMap||(this._targetMap=new n(this)),this._targetMap}}()}));
//# sourceMappingURL=openSeadragonTargetMap.js.map
