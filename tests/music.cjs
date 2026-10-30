const fs=require('fs'),vm=require('vm'),assert=require('assert');
const node={classList:{remove(){},toggle(){}},addEventListener(){},style:{}};
const sandbox={document:{querySelector:()=>node,querySelectorAll:()=>[],addEventListener(){}},localStorage:{values:new Map(),getItem(k){return this.values.get(k)||null},setItem(k,v){this.values.set(k,v)}},location:{hash:''},window:{addEventListener(){}},console,Set,Map};
let code=fs.readFileSync('dist/app.js','utf8');code=code.replace(/^import .*?;\n/gm,'');code=code.slice(0,code.lastIndexOf("page=pages.some"));
vm.createContext(sandbox);vm.runInContext(fs.readFileSync('dist/profiles.js','utf8').replaceAll('export ',''),sandbox);vm.runInContext(code,sandbox);
vm.runInContext(`
if(lessons.length!==12)throw Error('Expected twelve reviewed lessons');
for(const e of lessons){
 const bar=e.meter[0]*4/e.meter[1];
 const totals=['r','l'].filter(h=>e[h]).map(h=>e[h].reduce((s,n)=>s+n.d,0));
 if(totals.some(n=>n%bar!==0))throw Error(e.id+': incomplete measure');
 if(new Set(totals).size!==1)throw Error(e.id+': unequal hand lengths');
 for(const h of ['r','l'])for(const n of e[h]||[]){
  if(![.5,1,1.5,2,3,4].includes(n.d))throw Error('unsupported duration');
  for(const p of n.p===null?[]:Array.isArray(n.p)?n.p:[n.p])if(p<21||p>108||![0,2,4,5,7,9,11].includes(p%12))throw Error('invalid initial score pitch');
 }
 current=e;hand='both';
 const events=listEvents();if(events.some(n=>n.t<0||n.t+n.d>length(e)))throw Error('invalid event position');
 if(!staff().includes('Partitura')||!guide().includes('MD:'))throw Error('missing notation');
 const gs=groups();if(gs.some(g=>!g.notes.length))throw Error('empty MIDI group');
}
if(noteName(60)!=='Do4')throw Error('middle C mismatch');
console.log('PASS: 12 lessons, complete measures, hand alignment, pitches, shared events, notation and MIDI groups');
`,sandbox);
