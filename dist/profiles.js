// Each tab keeps its own active ID. No shared mutable history between profiles.
export const AVATARS=['🎹','🎵','🌸','⭐','🎧','🦋','🌿','☀️'];
export function freshId(){return 'p-'+Array.from(crypto.getRandomValues(new Uint8Array(16)),v=>v.toString(16).padStart(2,'0')).join('')}
export class ProfileStore {
 constructor(storage=localStorage){this.storage=storage;this.registryKey='piano-pro-profiles-v2';this.legacyKey='piano-pro-v1';this.currentId=null;this.init()}
 read(key){const raw=this.storage.getItem(key);return raw?JSON.parse(raw):null}
 key(id=this.currentId){return 'piano-pro-profile-v2:'+id}
 init(){let registry=this.read(this.registryKey);if(!registry){const old=this.read(this.legacyKey);registry={version:2,activeId:'legacy',profiles:[{id:'legacy',name:'Perfil inicial',avatar:'🎹'}]};this.storage.setItem(this.key('legacy'),JSON.stringify(this.normalize(old)));this.storage.setItem(this.registryKey,JSON.stringify(registry))}if(!Array.isArray(registry.profiles)||!registry.profiles.length)throw Error('Registro de perfiles no válido');this.currentId=registry.profiles.some(p=>p.id===registry.activeId)?registry.activeId:registry.profiles[0].id}
 normalize(s){return {attempts:[],checks:{},view:'both',names:'sol',duration:15,volume:.5,...s}}
 list(){return this.read(this.registryKey).profiles}
 profile(){return this.list().find(p=>p.id===this.currentId)}
 load(id=this.currentId){return this.normalize(this.read(this.key(id)))}
 save(s,id=this.currentId){if(!this.list().some(p=>p.id===id))throw Error('Perfil desconocido');this.storage.setItem(this.key(id),JSON.stringify(s))}
 select(id){const r=this.read(this.registryKey);if(!r.profiles.some(p=>p.id===id))throw Error('Perfil desconocido');r.activeId=id;this.storage.setItem(this.registryKey,JSON.stringify(r));this.currentId=id;return this.load()}
 validName(name){const n=String(name).trim();if(!n||n.length>40)throw Error('Escribe un nombre de entre 1 y 40 caracteres.');return n}
 create(name,avatar){const r=this.read(this.registryKey),p={id:freshId(),name:this.validName(name),avatar:AVATARS.includes(avatar)?avatar:AVATARS[0]};this.storage.setItem(this.key(p.id),JSON.stringify(this.normalize(null)));r.profiles.push(p);this.storage.setItem(this.registryKey,JSON.stringify(r));return p}
 update(name,avatar){const r=this.read(this.registryKey),p=r.profiles.find(p=>p.id===this.currentId);p.name=this.validName(name);p.avatar=AVATARS.includes(avatar)?avatar:AVATARS[0];this.storage.setItem(this.registryKey,JSON.stringify(r))}
 ownsFile(file,id=this.currentId){return (file.profileId||'legacy')===id}
}
