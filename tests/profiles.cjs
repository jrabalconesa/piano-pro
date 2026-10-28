const assert=require('node:assert/strict'),fs=require('node:fs'),vm=require('node:vm'),{webcrypto}=require('node:crypto');
const context={crypto:webcrypto};vm.createContext(context);vm.runInContext(fs.readFileSync('dist/profiles.js','utf8').replaceAll('export ',''),context);const Store=vm.runInContext('ProfileStore',context);
class Storage{constructor(){this.map=new Map}getItem(k){return this.map.get(k)||null}setItem(k,v){this.map.set(k,v)}}
const disk=new Storage,original={attempts:[{id:'primeras',at:123}],checks:{sound:true},names:'letters',duration:20};disk.setItem('piano-pro-v1',JSON.stringify(original));
const s=new Store(disk);assert.equal(s.currentId,'legacy');assert.equal(s.load().attempts.length,1);assert.equal(s.load().names,'letters');assert.equal(JSON.parse(disk.getItem('piano-pro-v1')).attempts.length,1);
const b=s.create('Ana','🌸');s.select(b.id);assert.equal(s.load().attempts.length,0);assert.equal(s.load().names,'sol');let bs=s.load();bs.attempts.push({id:'vals',at:456});bs.names='letters';s.save(bs);
s.select('legacy');assert.equal(s.load().attempts[0].id,'primeras');assert.equal(s.load().checks.sound,true);s.update('Jose','🎧');assert.equal(s.profile().name,'Jose');assert.equal(s.load(b.id).attempts[0].id,'vals');
assert.equal(s.ownsFile({id:'old'}),true);assert.equal(s.ownsFile({id:'new',profileId:b.id}),false);s.select(b.id);assert.equal(s.ownsFile({id:'old'}),false);assert.equal(s.ownsFile({id:'new',profileId:b.id}),true);
const other=new Store(disk);other.select('legacy');assert.equal(s.currentId,b.id);bs=s.load();bs.duration=30;s.save(bs);assert.equal(other.load().attempts[0].id,'primeras');assert.equal(s.load().duration,30);
assert.throws(()=>s.create('  ','🎹'));assert.throws(()=>s.select('missing'));assert.equal(new Store(disk).list().length,2);assert.equal(new Store(disk).load('legacy').attempts.length,1);
console.log('PASS: legacy migration, independent histories/preferences, ownership of old/new files, rename, reload and tab isolation');
