(self.webpackChunkjedi_learning_path=self.webpackChunkjedi_learning_path||[]).push([[289],{6266:(e,a,n)=>{"use strict";n.r(a),n.d(a,{default:()=>k});var i=n(6252);const o=(0,i.Wm)("h1",{id:"cos-e-la-programmazione-funzionale",tabindex:"-1"},[(0,i.Wm)("a",{class:"header-anchor",href:"#cos-e-la-programmazione-funzionale","aria-hidden":"true"},"#"),(0,i.Uk)(" Cos'è la programmazione funzionale")],-1),r=(0,i.Wm)("p",null,[(0,i.Uk)("Se hai già sentito parlare di "),(0,i.Wm)("strong",null,"programmazione funzionale"),(0,i.Uk)(" avrai probabilmente anche potuto constatare come questo argomento sia particolarmente caldo e dibattuto.")],-1),l=(0,i.Wm)("p",null,"Se non sei un'esperto del tema e tutto ciò che lo riguarda ti suona come complesso, a tratti mistico o futuristico, nessun problema, sei in buona compagnia. All'atto pratico però, programmare in funzionale è molto più semplice di quello che può sembrare.",-1),t=(0,i.Uk)("La "),s=(0,i.Wm)("strong",null,"programmazione funzionale",-1),m=(0,i.Uk)(" altro non è che un modo di scrivere il codice. Un modo di scrivere codice, in gergo, viene chiamato "),u=(0,i.Wm)("strong",null,"paradigma",-1),c=(0,i.Uk)(". Altri tipi di paradigmi in cui puoi esserti imbattuto nella tua carriera sono ad esempio il "),p=(0,i.Wm)("em",null,"paradigma imperativo",-1),d=(0,i.Uk)(" o la più famosa "),g=(0,i.Wm)("em",null,"programmazione ad oggetti",-1),f=(0,i.Uk)(". Esistono molti altri paradigmi, ognuno con le proprie peculiarità e campi di applicazione. "),h={href:"https://upload.wikimedia.org/wikipedia/commons/f/f7/Programming_paradigms.svg",target:"_blank",rel:"noopener noreferrer"},W=(0,i.Uk)("Mappa dei paradigmi di programmazione"),z=(0,i.uE)('<h2 id="principi-della-programmazione-funzionale" tabindex="-1"><a class="header-anchor" href="#principi-della-programmazione-funzionale" aria-hidden="true">#</a> Principi della programmazione funzionale</h2><p>La caratteristica distintiva del <em>paradigma funzionale</em> è quella di dover programmare utilizzando solo <strong>funzioni pure</strong>, prive di <strong>side effects</strong>.</p><h3 id="che-cos-e-un-side-effects" tabindex="-1"><a class="header-anchor" href="#che-cos-e-un-side-effects" aria-hidden="true">#</a> Che cos&#39;è un side effects?</h3><p>Possiamo semplificare dicendo che, una funzione che ha un <em>side effect</em>, è una funzione che oltre a ritornare un valore, esegue una qualsiasi altra operazione.</p><p>Alcuni esempi di <em>side effect</em> sono:</p><ul><li>modificare uno stato globale</li><li>lanciare un&#39;eccezione</li><li>leggere o scrivere un file</li><li>eseguire una richiesta di rete</li><li>accedere ad uno stato globale</li></ul><p>Dovrebbe rendere l&#39;idea.</p><h2 id="flusso-dei-dati-vs-controllo-dello-stato" tabindex="-1"><a class="header-anchor" href="#flusso-dei-dati-vs-controllo-dello-stato" aria-hidden="true">#</a> Flusso dei dati vs controllo dello stato</h2><p>La programmazione funzionale per essere compresa, richiede un leggero cambio del punto di vista rispetto a come intendiamo un programma. Immagina il tuo programma come ad una serie di funzioni che lavorano su un flusso di dati.</p><p>I dati entrano dall&#39;alto ed attraversando una ad una le funzioni che compongono il tuo algoritmo, escono dal basso. Ogni funzione, in quanto pura e priva di side effects, restituirà un valore, che sarà l&#39;input della funzione successiva.</p><p>Questo concetto è conosciuto come <strong>pipe</strong>.</p>',11),b=(0,i.Wm)("div",{class:"language-javascript ext-js line-numbers-mode"},[(0,i.Wm)("pre",{class:"language-javascript"},[(0,i.Wm)("code",null,[(0,i.Wm)("span",{class:"token keyword"},"const"),(0,i.Uk)(" program "),(0,i.Wm)("span",{class:"token operator"},"="),(0,i.Uk)(),(0,i.Wm)("span",{class:"token function"},"pipe"),(0,i.Wm)("span",{class:"token punctuation"},"("),(0,i.Uk)("\n  input"),(0,i.Wm)("span",{class:"token punctuation"},","),(0,i.Uk)("\n  function1"),(0,i.Wm)("span",{class:"token punctuation"},","),(0,i.Uk)("\n  function2"),(0,i.Wm)("span",{class:"token punctuation"},","),(0,i.Uk)("\n  function3"),(0,i.Wm)("span",{class:"token punctuation"},","),(0,i.Uk)("\n  "),(0,i.Wm)("span",{class:"token operator"},"..."),(0,i.Uk)("\n"),(0,i.Wm)("span",{class:"token punctuation"},")"),(0,i.Uk)("\n")])]),(0,i.Wm)("div",{class:"line-numbers"},[(0,i.Wm)("span",{class:"line-number"},"1"),(0,i.Wm)("br"),(0,i.Wm)("span",{class:"line-number"},"2"),(0,i.Wm)("br"),(0,i.Wm)("span",{class:"line-number"},"3"),(0,i.Wm)("br"),(0,i.Wm)("span",{class:"line-number"},"4"),(0,i.Wm)("br"),(0,i.Wm)("span",{class:"line-number"},"5"),(0,i.Wm)("br"),(0,i.Wm)("span",{class:"line-number"},"6"),(0,i.Wm)("br"),(0,i.Wm)("span",{class:"line-number"},"7"),(0,i.Wm)("br")])],-1),k={render:function(e,a){const n=(0,i.up)("OutboundLink"),k=(0,i.up)("CodeGroupItem"),v=(0,i.up)("CodeGroup");return(0,i.wg)(),(0,i.j4)(i.HY,null,[o,r,l,(0,i.Wm)("p",null,[t,s,m,u,c,p,d,g,f,(0,i.Wm)("a",h,[W,(0,i.Wm)(n)])]),z,(0,i.Wm)(v,null,{default:(0,i.w5)((()=>[(0,i.Wm)(k,{title:"javascript"},{default:(0,i.w5)((()=>[b])),_:1})])),_:1})],64)}}},108:(e,a,n)=>{"use strict";n.r(a),n.d(a,{data:()=>i});const i={key:"v-aeeca4b0",path:"/foundational/functional-programming/what-is-functional-programming.html",title:"Cos'è la programmazione funzionale",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"Principi della programmazione funzionale",slug:"principi-della-programmazione-funzionale",children:[{level:3,title:"Che cos'è un side effects?",slug:"che-cos-e-un-side-effects",children:[]}]},{level:2,title:"Flusso dei dati vs controllo dello stato",slug:"flusso-dei-dati-vs-controllo-dello-stato",children:[]}],filePathRelative:"foundational/functional-programming/what-is-functional-programming.md",git:{updatedTime:1626124278e3,contributors:[{name:"Emanuele Menon",email:"emanuele.menon@facile.it",commits:2}]}}}}]);