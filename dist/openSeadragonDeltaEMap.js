!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e=e||self).openSeadragonDeltaEMap=t()}(this,(function(){"use strict";const e=function(e,t){return e<"1e-"+t&&e>"-1e-"+t?0:Number(Math.round(e+"e"+t)+"e-"+t)},t=function(e){return"string"==typeof e||"number"==typeof e||"boolean"==typeof e},i=function(e){return e&&(e.getRootNode()instanceof Document||e.getRootNode()instanceof ShadowRoot)},r=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a=function(e){let t={};const i=["name","observed","assessed","reference","validity"];for(let[r,a]of Object.entries(e))i.includes(r)&&(t[r]=a);return JSON.stringify(t)},n=function(e,t,i){if(this.name="Patch",this.element=document.createElement("deltaepatch"),this.element.style.left=`${100*e.location.x/i.w}%`,this.element.style.top=`${100*e.location.y/i.h}%`,this.element.style.width=`${100*e.location.w/i.w}%`,this.element.style.height=`${100*e.location.h/i.h}%`,t.appendChild(this.element),this.element.dataset.picturaeDeltaemapDisplay=a(e),e.validity&&r(e.validity,"valid")){const t=e.validity.valid;this.element.classList.add(t?"valid":"invalid")}},s=function(e,t,i){if(this.name="Chart",this.element=document.createElement("deltaechart"),this.element.style.left=`${100*e.location.x/i.w}%`,this.element.style.top=`${100*e.location.y/i.h}%`,this.element.style.width=`${100*e.location.w/i.w}%`,this.element.style.height=`${100*e.location.h/i.h}%`,e.location.r&&180===e.location.r){this.element.style.transformOrigin="center center";const t=`rotate(${e.location.r}deg)`;this.element.style.transform=t}if(t.appendChild(this.element),this.element.dataset.picturaeDeltaemapDisplay=a(e),e.validity&&r(e.validity,"valid")){const t=e.validity.valid;this.element.classList.add(t?"valid":"invalid")}this.patches=[];const s={w:e.location.w,h:e.location.h};e.colorPatches&&e.colorPatches.forEach(e=>{e.patchType="color",this.patches.push(new n(e,this.element,s))}),e.edgePatches&&e.edgePatches.forEach(e=>{e.patchType="edge",this.patches.push(new n(e,this.element,s))})},o=e=>Boolean(e&&"string"==typeof e&&1===e.length),l=e=>o(e)&&Boolean(e.match(/[0-9]/)),d=e=>o(e)&&e.toLowerCase()!==e.toUpperCase(),c=e=>o(e)&&e===e.toLowerCase()&&e!==e.toUpperCase(),p=e=>o(e)&&e===e.toUpperCase()&&e!==e.toLowerCase(),h=(e,t)=>{const i=e.match(t);return i&&i[0]===e},u={delimit:[],preserve:[],delimitInput:"",delimitLetterNumber:!0,delimitLowerUpper:!0,delimitNumberLetter:!0,delimitUpperLower:!1,delimitUpperUpperLower:!0,delimitOutput:" "},m={preprocess:e=>e,postProcess:e=>e,firstWordFirstChar:e=>e,firstWordNextChars:e=>e,nextWordsFirstChar:e=>e,nextWordsNextChars:e=>e};class f{static foldReplacing(e="",t=""){return this._fold(e,()=>t)}static foldMaintaining(e=""){return this._fold(e,e=>e)}static _fold(e,t){if(null===e)return"";if("number"==typeof e)return""+e;if("string"!=typeof e)throw new Error("Invalid input data type");return e.split("").map(e=>{if(e.charCodeAt(0)<128)return e;{const i=this.mapping.get(e.charCodeAt(0));return void 0===i?t(e):i}}).join("")}}f.mapping=new Map([[192,"A"],[193,"A"],[194,"A"],[195,"A"],[196,"A"],[197,"A"],[256,"A"],[258,"A"],[260,"A"],[399,"A"],[461,"A"],[478,"A"],[480,"A"],[506,"A"],[512,"A"],[514,"A"],[550,"A"],[570,"A"],[7424,"A"],[7680,"A"],[7840,"A"],[7842,"A"],[7844,"A"],[7846,"A"],[7848,"A"],[7850,"A"],[7852,"A"],[7854,"A"],[7856,"A"],[7858,"A"],[7860,"A"],[7862,"A"],[9398,"A"],[65313,"A"],[224,"a"],[225,"a"],[226,"a"],[227,"a"],[228,"a"],[229,"a"],[257,"a"],[259,"a"],[261,"a"],[462,"a"],[479,"a"],[481,"a"],[507,"a"],[513,"a"],[515,"a"],[551,"a"],[592,"a"],[601,"a"],[602,"a"],[7567,"a"],[7573,"a"],[7681,"a"],[7834,"a"],[7841,"a"],[7843,"a"],[7845,"a"],[7847,"a"],[7849,"a"],[7851,"a"],[7853,"a"],[7855,"a"],[7857,"a"],[7859,"a"],[7861,"a"],[7863,"a"],[8336,"a"],[8340,"a"],[9424,"a"],[11365,"a"],[11375,"a"],[65345,"a"],[42802,"AA"],[198,"AE"],[482,"AE"],[508,"AE"],[7425,"AE"],[42804,"AO"],[42806,"AU"],[42808,"AV"],[42810,"AV"],[42812,"AY"],[9372,"(a)"],[42803,"aa"],[230,"ae"],[483,"ae"],[509,"ae"],[7426,"ae"],[42805,"ao"],[42807,"au"],[42809,"av"],[42811,"av"],[42813,"ay"],[385,"B"],[386,"B"],[579,"B"],[665,"B"],[7427,"B"],[7682,"B"],[7684,"B"],[7686,"B"],[9399,"B"],[65314,"B"],[384,"b"],[387,"b"],[595,"b"],[7532,"b"],[7552,"b"],[7683,"b"],[7685,"b"],[7687,"b"],[9425,"b"],[65346,"b"],[9373,"(b)"],[199,"C"],[262,"C"],[264,"C"],[266,"C"],[268,"C"],[391,"C"],[571,"C"],[663,"C"],[7428,"C"],[7688,"C"],[9400,"C"],[65315,"C"],[231,"c"],[263,"c"],[265,"c"],[267,"c"],[269,"c"],[392,"c"],[572,"c"],[597,"c"],[7689,"c"],[8580,"c"],[9426,"c"],[42814,"c"],[42815,"c"],[65347,"c"],[9374,"(c)"],[208,"D"],[270,"D"],[272,"D"],[393,"D"],[394,"D"],[395,"D"],[7429,"D"],[7430,"D"],[7690,"D"],[7692,"D"],[7694,"D"],[7696,"D"],[7698,"D"],[9401,"D"],[42873,"D"],[65316,"D"],[240,"d"],[271,"d"],[273,"d"],[396,"d"],[545,"d"],[598,"d"],[599,"d"],[7533,"d"],[7553,"d"],[7569,"d"],[7691,"d"],[7693,"d"],[7695,"d"],[7697,"d"],[7699,"d"],[9427,"d"],[42874,"d"],[65348,"d"],[452,"DZ"],[497,"DZ"],[453,"Dz"],[498,"Dz"],[9375,"(d)"],[568,"db"],[454,"dz"],[499,"dz"],[675,"dz"],[677,"dz"],[200,"E"],[201,"E"],[202,"E"],[203,"E"],[274,"E"],[276,"E"],[278,"E"],[280,"E"],[282,"E"],[398,"E"],[400,"E"],[516,"E"],[518,"E"],[552,"E"],[582,"E"],[7431,"E"],[7700,"E"],[7702,"E"],[7704,"E"],[7706,"E"],[7708,"E"],[7864,"E"],[7866,"E"],[7868,"E"],[7870,"E"],[7872,"E"],[7874,"E"],[7876,"E"],[7878,"E"],[9402,"E"],[11387,"E"],[65317,"E"],[232,"e"],[233,"e"],[234,"e"],[235,"e"],[275,"e"],[277,"e"],[279,"e"],[281,"e"],[283,"e"],[477,"e"],[517,"e"],[519,"e"],[553,"e"],[583,"e"],[600,"e"],[603,"e"],[604,"e"],[605,"e"],[606,"e"],[666,"e"],[7432,"e"],[7570,"e"],[7571,"e"],[7572,"e"],[7701,"e"],[7703,"e"],[7705,"e"],[7707,"e"],[7709,"e"],[7865,"e"],[7867,"e"],[7869,"e"],[7871,"e"],[7873,"e"],[7875,"e"],[7877,"e"],[7879,"e"],[8337,"e"],[9428,"e"],[11384,"e"],[65349,"e"],[9376,"(e)"],[401,"F"],[7710,"F"],[9403,"F"],[42800,"F"],[42875,"F"],[43003,"F"],[65318,"F"],[402,"f"],[7534,"f"],[7554,"f"],[7711,"f"],[7835,"f"],[9429,"f"],[42876,"f"],[65350,"f"],[9377,"(f)"],[64256,"ff"],[64259,"ffi"],[64260,"ffl"],[64257,"fi"],[64258,"fl"],[284,"G"],[286,"G"],[288,"G"],[290,"G"],[403,"G"],[484,"G"],[485,"G"],[486,"G"],[487,"G"],[500,"G"],[610,"G"],[667,"G"],[7712,"G"],[9404,"G"],[42877,"G"],[42878,"G"],[65319,"G"],[285,"g"],[287,"g"],[289,"g"],[291,"g"],[501,"g"],[608,"g"],[609,"g"],[7543,"g"],[7545,"g"],[7555,"g"],[7713,"g"],[9430,"g"],[42879,"g"],[65351,"g"],[9378,"(g)"],[292,"H"],[294,"H"],[542,"H"],[668,"H"],[7714,"H"],[7716,"H"],[7718,"H"],[7720,"H"],[7722,"H"],[9405,"H"],[11367,"H"],[11381,"H"],[65320,"H"],[293,"h"],[295,"h"],[543,"h"],[613,"h"],[614,"h"],[686,"h"],[687,"h"],[7715,"h"],[7717,"h"],[7719,"h"],[7721,"h"],[7723,"h"],[7830,"h"],[9431,"h"],[11368,"h"],[11382,"h"],[65352,"h"],[502,"HV"],[9379,"(h)"],[405,"hv"],[204,"I"],[205,"I"],[206,"I"],[207,"I"],[296,"I"],[298,"I"],[300,"I"],[302,"I"],[304,"I"],[406,"I"],[407,"I"],[463,"I"],[520,"I"],[522,"I"],[618,"I"],[7547,"I"],[7724,"I"],[7726,"I"],[7880,"I"],[7882,"I"],[9406,"I"],[43006,"I"],[65321,"I"],[236,"i"],[237,"i"],[238,"i"],[239,"i"],[297,"i"],[299,"i"],[301,"i"],[303,"i"],[305,"i"],[464,"i"],[521,"i"],[523,"i"],[616,"i"],[7433,"i"],[7522,"i"],[7548,"i"],[7574,"i"],[7725,"i"],[7727,"i"],[7881,"i"],[7883,"i"],[8305,"i"],[9432,"i"],[65353,"i"],[306,"IJ"],[9380,"(i)"],[307,"ij"],[308,"J"],[584,"J"],[7434,"J"],[9407,"J"],[65322,"J"],[309,"j"],[496,"j"],[567,"j"],[585,"j"],[607,"j"],[644,"j"],[669,"j"],[9433,"j"],[11388,"j"],[65354,"j"],[9381,"(j)"],[310,"K"],[408,"K"],[488,"K"],[7435,"K"],[7728,"K"],[7730,"K"],[7732,"K"],[9408,"K"],[11369,"K"],[42816,"K"],[42818,"K"],[42820,"K"],[65323,"K"],[311,"k"],[409,"k"],[489,"k"],[670,"k"],[7556,"k"],[7729,"k"],[7731,"k"],[7733,"k"],[9434,"k"],[11370,"k"],[42817,"k"],[42819,"k"],[42821,"k"],[65355,"k"],[9382,"(k)"],[313,"L"],[315,"L"],[317,"L"],[319,"L"],[321,"L"],[573,"L"],[671,"L"],[7436,"L"],[7734,"L"],[7736,"L"],[7738,"L"],[7740,"L"],[9409,"L"],[11360,"L"],[11362,"L"],[42822,"L"],[42824,"L"],[42880,"L"],[65324,"L"],[314,"l"],[316,"l"],[318,"l"],[320,"l"],[322,"l"],[410,"l"],[564,"l"],[619,"l"],[620,"l"],[621,"l"],[7557,"l"],[7735,"l"],[7737,"l"],[7739,"l"],[7741,"l"],[9435,"l"],[11361,"l"],[42823,"l"],[42825,"l"],[42881,"l"],[65356,"l"],[455,"LJ"],[7930,"LL"],[456,"Lj"],[9383,"(l)"],[457,"lj"],[7931,"ll"],[682,"ls"],[683,"lz"],[412,"M"],[7437,"M"],[7742,"M"],[7744,"M"],[7746,"M"],[9410,"M"],[11374,"M"],[43005,"M"],[43007,"M"],[65325,"M"],[623,"m"],[624,"m"],[625,"m"],[7535,"m"],[7558,"m"],[7743,"m"],[7745,"m"],[7747,"m"],[9436,"m"],[65357,"m"],[9384,"(m)"],[209,"N"],[323,"N"],[325,"N"],[327,"N"],[330,"N"],[413,"N"],[504,"N"],[544,"N"],[628,"N"],[7438,"N"],[7748,"N"],[7750,"N"],[7752,"N"],[7754,"N"],[9411,"N"],[65326,"N"],[241,"n"],[324,"n"],[326,"n"],[328,"n"],[329,"n"],[331,"n"],[414,"n"],[505,"n"],[565,"n"],[626,"n"],[627,"n"],[7536,"n"],[7559,"n"],[7749,"n"],[7751,"n"],[7753,"n"],[7755,"n"],[8319,"n"],[9437,"n"],[65358,"n"],[458,"NJ"],[459,"Nj"],[9385,"(n)"],[460,"nj"],[210,"O"],[211,"O"],[212,"O"],[213,"O"],[214,"O"],[216,"O"],[332,"O"],[334,"O"],[336,"O"],[390,"O"],[415,"O"],[416,"O"],[465,"O"],[490,"O"],[492,"O"],[510,"O"],[524,"O"],[526,"O"],[554,"O"],[556,"O"],[558,"O"],[560,"O"],[7439,"O"],[7440,"O"],[7756,"O"],[7758,"O"],[7760,"O"],[7762,"O"],[7884,"O"],[7886,"O"],[7888,"O"],[7890,"O"],[7892,"O"],[7894,"O"],[7896,"O"],[7898,"O"],[7900,"O"],[7902,"O"],[7904,"O"],[7906,"O"],[9412,"O"],[42826,"O"],[42828,"O"],[65327,"O"],[242,"o"],[243,"o"],[244,"o"],[245,"o"],[246,"o"],[248,"o"],[333,"o"],[335,"o"],[337,"o"],[417,"o"],[466,"o"],[491,"o"],[493,"o"],[511,"o"],[525,"o"],[527,"o"],[555,"o"],[557,"o"],[559,"o"],[561,"o"],[596,"o"],[629,"o"],[7446,"o"],[7447,"o"],[7575,"o"],[7757,"o"],[7759,"o"],[7761,"o"],[7763,"o"],[7885,"o"],[7887,"o"],[7889,"o"],[7891,"o"],[7893,"o"],[7895,"o"],[7897,"o"],[7899,"o"],[7901,"o"],[7903,"o"],[7905,"o"],[7907,"o"],[8338,"o"],[9438,"o"],[11386,"o"],[42827,"o"],[42829,"o"],[65359,"o"],[338,"OE"],[630,"OE"],[42830,"OO"],[546,"OU"],[7445,"OU"],[9386,"(o)"],[339,"oe"],[7444,"oe"],[42831,"oo"],[547,"ou"],[420,"P"],[7448,"P"],[7764,"P"],[7766,"P"],[9413,"P"],[11363,"P"],[42832,"P"],[42834,"P"],[42836,"P"],[65328,"P"],[421,"p"],[7537,"p"],[7549,"p"],[7560,"p"],[7765,"p"],[7767,"p"],[9439,"p"],[42833,"p"],[42835,"p"],[42837,"p"],[43004,"p"],[65360,"p"],[9387,"(p)"],[586,"Q"],[9414,"Q"],[42838,"Q"],[42840,"Q"],[65329,"Q"],[312,"q"],[587,"q"],[672,"q"],[9440,"q"],[42839,"q"],[42841,"q"],[65361,"q"],[9388,"(q)"],[569,"qp"],[340,"R"],[342,"R"],[344,"R"],[528,"R"],[530,"R"],[588,"R"],[640,"R"],[641,"R"],[7449,"R"],[7450,"R"],[7768,"R"],[7770,"R"],[7772,"R"],[7774,"R"],[9415,"R"],[11364,"R"],[42842,"R"],[42882,"R"],[65330,"R"],[341,"r"],[343,"r"],[345,"r"],[529,"r"],[531,"r"],[589,"r"],[636,"r"],[637,"r"],[638,"r"],[639,"r"],[7523,"r"],[7538,"r"],[7539,"r"],[7561,"r"],[7769,"r"],[7771,"r"],[7773,"r"],[7775,"r"],[9441,"r"],[42843,"r"],[42883,"r"],[65362,"r"],[9389,"(r)"],[346,"S"],[348,"S"],[350,"S"],[352,"S"],[536,"S"],[7776,"S"],[7778,"S"],[7780,"S"],[7782,"S"],[7784,"S"],[9416,"S"],[42801,"S"],[42885,"S"],[65331,"S"],[347,"s"],[349,"s"],[351,"s"],[353,"s"],[383,"s"],[537,"s"],[575,"s"],[642,"s"],[7540,"s"],[7562,"s"],[7777,"s"],[7779,"s"],[7781,"s"],[7783,"s"],[7785,"s"],[7836,"s"],[7837,"s"],[9442,"s"],[42884,"s"],[65363,"s"],[7838,"SS"],[9390,"(s)"],[223,"ss"],[64262,"st"],[354,"T"],[356,"T"],[358,"T"],[428,"T"],[430,"T"],[538,"T"],[574,"T"],[7451,"T"],[7786,"T"],[7788,"T"],[7790,"T"],[7792,"T"],[9417,"T"],[42886,"T"],[65332,"T"],[355,"t"],[357,"t"],[359,"t"],[427,"t"],[429,"t"],[539,"t"],[566,"t"],[647,"t"],[648,"t"],[7541,"t"],[7787,"t"],[7789,"t"],[7791,"t"],[7793,"t"],[7831,"t"],[9443,"t"],[11366,"t"],[65364,"t"],[222,"TH"],[42854,"TH"],[42792,"TZ"],[9391,"(t)"],[680,"tc"],[254,"th"],[7546,"th"],[42855,"th"],[678,"ts"],[42793,"tz"],[217,"U"],[218,"U"],[219,"U"],[220,"U"],[360,"U"],[362,"U"],[364,"U"],[366,"U"],[368,"U"],[370,"U"],[431,"U"],[467,"U"],[469,"U"],[471,"U"],[473,"U"],[475,"U"],[532,"U"],[534,"U"],[580,"U"],[7452,"U"],[7550,"U"],[7794,"U"],[7796,"U"],[7798,"U"],[7800,"U"],[7802,"U"],[7908,"U"],[7910,"U"],[7912,"U"],[7914,"U"],[7916,"U"],[7918,"U"],[7920,"U"],[9418,"U"],[65333,"U"],[249,"u"],[250,"u"],[251,"u"],[252,"u"],[361,"u"],[363,"u"],[365,"u"],[367,"u"],[369,"u"],[371,"u"],[432,"u"],[468,"u"],[470,"u"],[472,"u"],[474,"u"],[476,"u"],[533,"u"],[535,"u"],[649,"u"],[7524,"u"],[7577,"u"],[7795,"u"],[7797,"u"],[7799,"u"],[7801,"u"],[7803,"u"],[7909,"u"],[7911,"u"],[7913,"u"],[7915,"u"],[7917,"u"],[7919,"u"],[7921,"u"],[9444,"u"],[65365,"u"],[9392,"(u)"],[7531,"ue"],[434,"V"],[581,"V"],[7456,"V"],[7804,"V"],[7806,"V"],[7932,"V"],[9419,"V"],[42846,"V"],[42856,"V"],[65334,"V"],[651,"v"],[652,"v"],[7525,"v"],[7564,"v"],[7805,"v"],[7807,"v"],[9445,"v"],[11377,"v"],[11380,"v"],[42847,"v"],[65366,"v"],[42848,"VY"],[9393,"(v)"],[42849,"vy"],[372,"W"],[503,"W"],[7457,"W"],[7808,"W"],[7810,"W"],[7812,"W"],[7814,"W"],[7816,"W"],[9420,"W"],[11378,"W"],[65335,"W"],[373,"w"],[447,"w"],[653,"w"],[7809,"w"],[7811,"w"],[7813,"w"],[7815,"w"],[7817,"w"],[7832,"w"],[9446,"w"],[11379,"w"],[65367,"w"],[9394,"(w)"],[7818,"X"],[7820,"X"],[9421,"X"],[65336,"X"],[7565,"x"],[7819,"x"],[7821,"x"],[8339,"x"],[9447,"x"],[65368,"x"],[9395,"(x)"],[221,"Y"],[374,"Y"],[376,"Y"],[435,"Y"],[562,"Y"],[590,"Y"],[655,"Y"],[7822,"Y"],[7922,"Y"],[7924,"Y"],[7926,"Y"],[7928,"Y"],[7934,"Y"],[9422,"Y"],[65337,"Y"],[253,"y"],[255,"y"],[375,"y"],[436,"y"],[563,"y"],[591,"y"],[654,"y"],[7823,"y"],[7833,"y"],[7923,"y"],[7925,"y"],[7927,"y"],[7929,"y"],[7935,"y"],[9448,"y"],[65369,"y"],[9396,"(y)"],[377,"Z"],[379,"Z"],[381,"Z"],[437,"Z"],[540,"Z"],[548,"Z"],[7458,"Z"],[7824,"Z"],[7826,"Z"],[7828,"Z"],[9423,"Z"],[11371,"Z"],[42850,"Z"],[65338,"Z"],[378,"z"],[380,"z"],[382,"z"],[438,"z"],[541,"z"],[549,"z"],[576,"z"],[656,"z"],[657,"z"],[7542,"z"],[7566,"z"],[7825,"z"],[7827,"z"],[7829,"z"],[9449,"z"],[11372,"z"],[42851,"z"],[65370,"z"],[9397,"(z)"],[8304,"0"],[8320,"0"],[9450,"0"],[9471,"0"],[65296,"0"],[185,"1"],[8321,"1"],[9312,"1"],[9461,"1"],[10102,"1"],[10112,"1"],[10122,"1"],[65297,"1"],[9352,"1."],[9332,"(1)"],[178,"2"],[8322,"2"],[9313,"2"],[9462,"2"],[10103,"2"],[10113,"2"],[10123,"2"],[65298,"2"],[9353,"2."],[9333,"(2)"],[179,"3"],[8323,"3"],[9314,"3"],[9463,"3"],[10104,"3"],[10114,"3"],[10124,"3"],[65299,"3"],[9354,"3."],[9334,"(3)"],[8308,"4"],[8324,"4"],[9315,"4"],[9464,"4"],[10105,"4"],[10115,"4"],[10125,"4"],[65300,"4"],[9355,"4."],[9335,"(4)"],[8309,"5"],[8325,"5"],[9316,"5"],[9465,"5"],[10106,"5"],[10116,"5"],[10126,"5"],[65301,"5"],[9356,"5."],[9336,"(5)"],[8310,"6"],[8326,"6"],[9317,"6"],[9466,"6"],[10107,"6"],[10117,"6"],[10127,"6"],[65302,"6"],[9357,"6."],[9337,"(6)"],[8311,"7"],[8327,"7"],[9318,"7"],[9467,"7"],[10108,"7"],[10118,"7"],[10128,"7"],[65303,"7"],[9358,"7."],[9338,"(7)"],[8312,"8"],[8328,"8"],[9319,"8"],[9468,"8"],[10109,"8"],[10119,"8"],[10129,"8"],[65304,"8"],[9359,"8."],[9339,"(8)"],[8313,"9"],[8329,"9"],[9320,"9"],[9469,"9"],[10110,"9"],[10120,"9"],[10130,"9"],[65305,"9"],[9360,"9."],[9340,"(9)"],[9321,"10"],[9470,"10"],[10111,"10"],[10121,"10"],[10131,"10"],[9361,"10."],[9341,"(10)"],[9322,"11"],[9451,"11"],[9362,"11."],[9342,"(11)"],[9323,"12"],[9452,"12"],[9363,"12."],[9343,"(12)"],[9324,"13"],[9453,"13"],[9364,"13."],[9344,"(13)"],[9325,"14"],[9454,"14"],[9365,"14."],[9345,"(14)"],[9326,"15"],[9455,"15"],[9366,"15."],[9346,"(15)"],[9327,"16"],[9456,"16"],[9367,"16."],[9347,"(16)"],[9328,"17"],[9457,"17"],[9368,"17."],[9348,"(17)"],[9329,"18"],[9458,"18"],[9369,"18."],[9349,"(18)"],[9330,"19"],[9459,"19"],[9370,"19."],[9350,"(19)"],[9331,"20"],[9460,"20"],[9371,"20."],[9351,"(20)"],[171,'"'],[187,'"'],[8220,'"'],[8221,'"'],[8222,'"'],[8243,'"'],[8246,'"'],[10077,'"'],[10078,'"'],[10094,'"'],[10095,'"'],[65282,'"'],[8216,"'"],[8217,"'"],[8218,"'"],[8219,"'"],[8242,"'"],[8245,"'"],[8249,"'"],[8250,"'"],[10075,"'"],[10076,"'"],[65287,"'"],[8208,"-"],[8209,"-"],[8210,"-"],[8211,"-"],[8212,"-"],[8315,"-"],[8331,"-"],[65293,"-"],[8261,"["],[10098,"["],[65339,"["],[8262,"]"],[10099,"]"],[65341,"]"],[8317,"("],[8333,"("],[10088,"("],[10090,"("],[65288,"("],[11816,"(("],[8318,")"],[8334,")"],[10089,")"],[10091,")"],[65289,")"],[11817,"))"],[10092,"<"],[10096,"<"],[65308,"<"],[10093,">"],[10097,">"],[65310,">"],[10100,"{"],[65371,"{"],[10101,"}"],[65373,"}"],[8314,"+"],[8330,"+"],[65291,"+"],[8316,"="],[8332,"="],[65309,"="],[65281,"!"],[8252,"!!"],[8265,"!?"],[65283,"#"],[65284,"$"],[8274,"%"],[65285,"%"],[65286,"&"],[8270,"*"],[65290,"*"],[65292,","],[65294,"."],[8260,"/"],[65295,"/"],[65306,":"],[8271,";"],[65307,";"],[65311,"?"],[8263,"??"],[8264,"?!"],[65312,"@"],[65340,"\\"],[8248,"^"],[65342,"^"],[65343,"_"],[8275,"~"],[65374,"~"]]);var g=f;const y=e=>e.toLowerCase(),O=e=>e.toUpperCase(),v=function(e,t){const i=i=>{const r=e.map((e,r)=>(e=i.preprocess(e,i.delimitOutput),0===r?t.preserve.some(t=>h(e,t))?e:i.firstWordFirstChar(e.substr(0,1))+i.firstWordNextChars(e.substr(1)):t.preserve.some(t=>h(e,t))?e:i.nextWordsFirstChar(e.substr(0,1))+i.nextWordsNextChars(e.substr(1)))).join(i.delimitOutput);return i.postProcess(r,i.delimitOutput)},r={preprocess:function(e,t){return((e,t)=>{const i="…,:;[\\](){}\\-‐–—'\".!?".replace("\\"+t,"").replace(t,""),r=new RegExp("(\\D)[…,:;[\\](){}\\-‐–—'\".!?](\\D)","g"),a=new RegExp("^[…,:;[\\](){}\\-‐–—'\".!?]",""),n=new RegExp("[…,:;[\\](){}\\-‐–—'\".!?]$",""),s=new RegExp("(\\d)["+i+"](\\d)","g");return(e=(e=(e=(e=e.replace(r,"$1$2")).replace(r,"$1$2")).replace(s,"$1$2")).replace(a,"")).replace(n,"")})(e=(e=((e,t)=>{const i="-:,./".replace(t,""),r=new RegExp("(\\d)["+i+"](\\d)","g"),a=t||"_";return e.match(r)?e.replace(r,`$1${a}$2`).replace(r,`$1${a}$2`):e})(e,t)).replace(/‘’`/g,"'").replace(/“”/g,'"'),t)},postProcess:function(e,t){return(e=>g.foldReplacing(e))(e)}},a=(e,t)=>{const a=Object.assign({},m,r,{delimitOutput:"",firstWordFirstChar:e,firstWordNextChars:y,nextWordsFirstChar:t,nextWordsNextChars:y});return i(a)},n=e=>{const t=Object.assign({},m,r,{delimitOutput:e,firstWordFirstChar:y,firstWordNextChars:y,nextWordsFirstChar:y,nextWordsNextChars:y});return i(t)};return{camelCase:()=>a(y,O),pascalCase:()=>a(O,O),humanSentence:()=>{const e=Object.assign({},m,{delimitOutput:" ",firstWordFirstChar:O,firstWordNextChars:y,nextWordsFirstChar:y,nextWordsNextChars:y});return i(e)},humanTitle:()=>{const e=Object.assign({},m,{delimitOutput:" ",firstWordFirstChar:O,nextWordsFirstChar:O});return i(e)},dotCase:()=>n("."),paramCase:()=>n("-"),pathCase:()=>n("/"),searchCase:()=>n("+"),snakeCase:()=>n("_"),spaceCase:()=>n(" "),constantCase:()=>{const e=Object.assign({},m,r,{delimitOutput:"_",firstWordFirstChar:O,firstWordNextChars:O,nextWordsFirstChar:O,nextWordsNextChars:O});return i(e)},headerCase:()=>{const e=Object.assign({},m,r,{delimitOutput:"-",firstWordFirstChar:O,firstWordNextChars:y,nextWordsFirstChar:O,nextWordsNextChars:y});return i(e)}}},E=(e,t)=>{const i=new RegExp("^"+t),r=new RegExp(t+"$"),a=new RegExp(t+t,"g");return e.replace(a,t).replace(a,t).replace(a,t).replace(i,"").replace(r,"")},C=e=>{const t=new RegExp("[\0-,-]");return e.trim().replace(/\s+/g," ").replace(t,"")},x=(e,t,i,r)=>{let a,n,s,o,h;return a=r.delimitLetterNumber&&d(e)&&l(t),n=r.delimitLowerUpper&&c(e)&&p(t),s=r.delimitNumberLetter&&l(e)&&d(t),o=r.delimitUpperLower&&p(e)&&c(t),h=r.delimitUpperUpperLower&&p(e)&&p(t)&&c(i),a||n||s||o||h},w=function(e,t){if(!e)return;let i={};const r=Object.assign({},u,t);i.orgin={input:e},r.delimitInput?i.orgin.standardised=E(C(e),r.delimitInput):i.orgin.standardised=C(e),i.orgin.isPureAlphaNumeric=(e=>e&&e.split&&!e.split("").some(e=>!(d(e)||l(e))))(i.orgin.standardised);let a,n=i.orgin.standardised;a=i.orgin.isPureAlphaNumeric?r.delimitOutput:r.delimitInput||r.delimitOutput;const s=[].concat(r.preserve,r.delimit);if(s.length&&(s.forEach(e=>{n=n.replace(e,a+"$&"+a)}),n=E(n,a)),i.orgin.isPureAlphaNumeric){let e=n.split(a);i.phrase=e.map(e=>r.preserve.some(t=>h(e,t))?e:((e,t)=>{let i=e[0];for(let r=1;r<e.length;r++)x(e[r-1],e[r],e[r+1]||"",t)&&(i+=t.delimitOutput),i+=e[r];return i})(e,r)).join(a),i.words=i.phrase.split(a)}else i.phrase=n,i.words=n.split(a);return Object.assign(i,v(i.words,r))};function b(e,t){return t||(t={}),w(e,t)}const A=function(e){this.name="DisplayTable";const a=document.body,n=document.documentElement,s=e.parentNode,o=document.createElement("table");this.element=o,o.className="picturae-deltaemap-display";const l=e=>{if(null===e)return"--";if("boolean"==typeof e){return`<deltaeboolean class="${e?"valid":"invalid"}"></deltaeboolean>`}if(t(e))return e;if(e instanceof Array&&e.length){if(t(e[0]))return e.join(", ");if("object"==typeof e[0]){let t="";for(let i=0;i<e.length;i++)t+=l(e[i]);return t}}if("object"==typeof e&&!(e instanceof Array)){let t="";for(let[i,r]of Object.entries(e)){let e="";e="boolean"==typeof r?`${l(r)} ${b(i).humanTitle()}<br/>`:`${b(i).humanTitle()}: ${l(r)}<br/>`,e&&(t+=e)}return t+""}},d=(e,t)=>{let i=`<tbody name="${e}">`;for(let[e,r]of Object.entries(t)){let t="";t=`<tr><th>${b(e,{replace:{deltaE:" &Delta;E ",DeltaE:" &Delta;E ",deltaL:" &Delta;L ",DeltaL:" &Delta;L "}}).humanTitle()}</th><td>${l(r)}</td></tr>`,t&&(i+=t)}return i+="</tbody>",i};a.addEventListener("mouseover",(function(e){const t=e.target;"DELTAEOVERLAY"===t.tagName||"DELTAECHART"===t.tagName||"DELTAEPATCH"===t.tagName?function(e){const t=e.target.dataset.picturaeDeltaemapDisplay;if(t){o.innerHTML="";const e=JSON.parse(t);let a="";if(e.patchType&&"color"===e.patchType){a=`<deltaecolor style="background: ${`rgb(${e.observed.RGB.join()})`};"></deltaecolor>`}if(o.innerHTML+=`<caption>\n                ${e.name} ${a}\n            </caption>`,e.assessed&&(o.innerHTML+=d("assessed",e.assessed)),e.observed&&(o.innerHTML+=d("observed",e.observed)),e.reference&&(o.innerHTML+=d("reference",e.reference)),e.validity){if(r(e.validity,"valid")){const t=e.validity.valid;o.classList.remove("valid","invalid"),o.classList.add(t?"valid":"invalid")}o.innerHTML+=d("validity",e.validity)}i(o)||s.appendChild(o)}}(e):o.contains(t)||i(o)&&s.removeChild(o),e.stopPropagation()})),a.addEventListener("mousemove",(function(e){e.clientX/n.clientWidth<.5?(o.style.left=`${e.clientX+16}px`,o.style.right="auto"):(o.style.left="auto",o.style.right=`${n.clientWidth-e.clientX+16}px`);const t=(n.clientHeight-o.clientHeight)/2;e.clientY<t-16?(o.style.top=`${e.clientY+16}px`,o.style.bottom="auto"):e.clientY<t+16+o.clientHeight?(o.style.top=`${t}px`,o.style.bottom="auto"):(o.style.top="auto",o.style.bottom=`${n.clientHeight-e.clientY+16}px`),e.stopPropagation()}))},L=function(t){this.name="Overlay",this.element=document.createElement("deltaeoverlay"),t.canvas.appendChild(this.element),this.resize=()=>{if(this.tiledImage=t.world.getItemAt(0),!this.tiledImage)return;const i=this.tiledImage.getBounds(),r=t.viewport.pixelFromPoint(i.getTopLeft()),a=t.viewport.pixelFromPoint(i.getBottomRight());if(!function(){let e=Boolean(arguments.length);return Array.from(arguments).forEach(t=>{e=e&&"number"==typeof t&&Number.isFinite(t)}),e}(r.x,r.y,a.x,a.y))return;const n=e(r.x,4),s=e(r.y,4),o=e(a.x-r.x,4),l=e(a.y-r.y,4);this.element.style.left=`${n}px`,this.element.style.top=`${s}px`,this.element.style.width=`${o}px`,this.element.style.height=`${l}px`},t.addHandler("animation",()=>{this.resize()}),t.addHandler("open",()=>{this.resize()}),t.addHandler("rotate",()=>{this.resize()}),t.addHandler("resize",()=>{this.resize()}),this.resize(),this.charts=[],this.render=e=>{if(this.element.innerHTML="",e&&e.location&&e.validity&&e.targets&&e.observed&&e.assessed){if(e.name||(e.name="Target Scan"),this.element.dataset.picturaeDeltaemapDisplay=a(e),e.validity&&r(e.validity,"valid")){const t=e.validity.valid;this.element.classList.add(t?"valid":"invalid")}e.targets.forEach(t=>{this.charts.push(new s(t,this.element,e.location))})}else console.error("Bad DeltaE JSON")},new A(this.element)};return function(){var e=window.OpenSeadragon;if(!e&&!(e=require("openseadragon")))throw new Error("OpenSeadragon is missing.");e.Viewer.prototype.deltaEMap=function(e){return this._deltaEMap||(this._deltaEMap=new L(e)),this._deltaEMap}}()}));
//# sourceMappingURL=openSeadragonDeltaEMap.js.map
