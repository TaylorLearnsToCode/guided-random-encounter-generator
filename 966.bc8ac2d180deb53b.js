"use strict";(self.webpackChunkguided_random_encounter_generator=self.webpackChunkguided_random_encounter_generator||[]).push([[966],{3929:(P,c,i)=>{i.d(c,{a:()=>m});var l=i(4432);class m{constructor(S){this.magicItems=[],this.magicItemTables=[],this.magicWeaponPowers=[],this.magicWeaponPowerTables=[],this.monsterEncounterLists=[],this.monsterTypes=[],this.treasureArticles=[],this.treasureMapRefs=[],this.treasureMaps=[],this.treasureTypes=[],(0,l.EO)(this,S)}}},2966:(P,c,i)=>{i.d(c,{L:()=>N});var l=i(767),m=i(3929),s=i(4432),S=i(314),I=i(1135),T=i(8256),d=i(6895),R=i(7579);let v=(()=>{class o{constructor(e){this.document=e}exportObject(e,t,r){const a=this.document.createElement("a");a.href=URL.createObjectURL(this.buildPayload(e)),a.download=`${this.deriveFileName(t)}.${this.deriveFileType(r)}`,a.target="_blank",a.click()}readFile(e){const t=new R.x,r=new FileReader;return r.addEventListener("load",()=>{const a=JSON.parse(r.result);t.next(a),t.complete()}),r.readAsText(e),t.asObservable()}buildPayload(e){if(!(0,s.gK)(e))throw Error("No object provided for export");return new Blob([JSON.stringify(e)],{type:"text/plain"})}deriveFileName(e){return null==e&&(e="export"),(0,s.gK)(e)?e.replaceAll(" ",""):"export"}deriveFileType(e){return null==e&&(e="json"),(0,s.gK)(e)?"."===e.charAt(0)?e.substring(1):e:"json"}}return o.\u0275fac=function(e){return new(e||o)(T.LFG(d.K0))},o.\u0275prov=T.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})(),N=(()=>{class o{constructor(e){this.importExportService=e,this.PERSISTENCE_TYPES=l.$,this.dataStateSource=new I.X(new m.a),this.dataState$=this.dataStateSource.asObservable(),this.refreshDataState()}clear(e){localStorage.removeItem(e),this.refreshDataState()}clearAll(){Object.values(this.PERSISTENCE_TYPES).forEach(e=>this.clear(e))}delete(e,t,r){switch(t){case this.PERSISTENCE_TYPES.magicItem:this.deleteMagicItem(e);break;case this.PERSISTENCE_TYPES.magicItemTable:this.deleteMagicItemTable(e);break;case this.PERSISTENCE_TYPES.treasureType:this.deleteTreasureType(e);break;default:console.warn(`Data type ${t} not currently supported: defaulting to generic approach.`),this.deleteSavedItem(e,t,r)}}exportAll(){this.importExportService.exportObject(this.dataStateSource.value,"greg-master-state","GREG-MASTER-CONFIG")}exportFromStorage(e){const t=this.retrieve(e,null);this.importExportService.exportObject(t,e.toUpperCase(),"GREG-CONFIG")}exportObject(e,t,r){this.importExportService.exportObject(e,t,r)}import(e,t){if(null==t||null==t)return this.importExportService.readFile(e);this.importExportService.readFile(e).subscribe(r=>{if(Array.isArray(r))for(const a of r)this.persist(t,a);else this.persist(t,r)})}persist(e,t){switch(e){case this.PERSISTENCE_TYPES.magicItem:this.persistMagicItem(t);break;case this.PERSISTENCE_TYPES.magicItemTable:this.persistMagicItemTable(t);break;case this.PERSISTENCE_TYPES.magicWeaponPowerTable:this.persistMagicWeaponPowerTable(t);break;case this.PERSISTENCE_TYPES.monsterEncounterList:this.persisteMonsterEncounterList(t);break;case this.PERSISTENCE_TYPES.monsterType:this.persistMonsterType(t);break;case this.PERSISTENCE_TYPES.treasureArticle:this.persistTreasureArticle(t);break;case this.PERSISTENCE_TYPES.treasureList:this.persistTreasureList(t);break;case this.PERSISTENCE_TYPES.treasureMap:this.persistTreasureMap(t);break;case this.PERSISTENCE_TYPES.treasureMapRef:this.persistTreasureMapReference(t);break;case this.PERSISTENCE_TYPES.treasureType:this.persistTreasureType(t);break;case"master":this.persisteMasterDataConfig(t);break;default:console.warn("Using default persistence function!"),this.defaultPersistObject(t,e)}this.refreshDataState()}retrieveAll(e){return this.retrieve(e)}retrieveReference(e,t,r){const a=this.toArray(e),n=this.toArray(r,"name");this.validateRetrieveReferenceArguments(a,t,n);const u=this.retrieve(t);let h,f=null;for(const g of u){h=[];for(let E=0;E<n.length;E++)h.push((0,s.gK)(g[n[E]])&&g[n[E]]===a[E]);if(!h.some(E=>!E)){f=g;break}}return f}validateRetrieveReferenceArguments(e,t,r){(0,s.xb)(e)&&(0,S._)("Reference field is required"),(!(0,s.gK)(t)||(0,s.xb)(t))&&(0,S._)("Key field is required"),e.length>1&&e.length!==r.length&&(0,S._)("An identifer must be provided for each reference")}toArray(e,t){return(0,s.gK)(e)?Array.isArray(e)?e:[e]:void 0!==t?[t]:[]}shiftListEntry(e,t,r){let a;switch(r){case"up":a=t-1;break;case"down":a=t+1;break;default:(0,S._)(`Invalid direction ${r} specified.`)}const n=this.retrieve(e);if(-1===a||a===n.length)return;const u=n.splice(t,1)[0];n.splice(a,0,u),this.clear(e);for(const h of n)this.persist(e,h)}defaultPersistObject(e,t){const r=this.retrieve(t);(0,s.fb)(e,r),localStorage.setItem(t,JSON.stringify(r))}deleteMagicItem(e){const t=this.retrieve(this.PERSISTENCE_TYPES.magicItem);(0,s.Rx)(e,t),localStorage.setItem(this.PERSISTENCE_TYPES.magicItem,JSON.stringify(t)),this.refreshDataState()}deleteMagicItemTable(e){const t=this.retrieve(this.PERSISTENCE_TYPES.magicItemTable);(0,s.Rx)(e,t,"name,system"),localStorage.setItem(this.PERSISTENCE_TYPES.magicItemTable,JSON.stringify(t)),this.refreshDataState()}deleteTreasureType(e){const t=this.retrieve(this.PERSISTENCE_TYPES.treasureType);(0,s.Rx)(e,t,"type,system"),localStorage.setItem(this.PERSISTENCE_TYPES.treasureType,JSON.stringify(t)),this.refreshDataState()}deleteSavedItem(e,t,r){const a=this.retrieve(t);(0,s.Rx)(e,a,r),localStorage.setItem(t,JSON.stringify(a)),this.refreshDataState()}persistMagicItem(e){const t=this.retrieve(this.PERSISTENCE_TYPES.magicItem);(0,s.fb)(e,t),localStorage.setItem(this.PERSISTENCE_TYPES.magicItem,JSON.stringify(t))}persistMagicItemTable(e){const t=this.retrieve(this.PERSISTENCE_TYPES.magicItemTable);(0,s.fb)(e,t,"name,system"),localStorage.setItem(this.PERSISTENCE_TYPES.magicItemTable,JSON.stringify(t))}persistMagicWeaponPowerTable(e){const t=this.retrieve(this.PERSISTENCE_TYPES.magicWeaponPowerTable);(0,s.fb)(e,t,"name,system"),localStorage.setItem(this.PERSISTENCE_TYPES.magicWeaponPowerTable,JSON.stringify(t))}persisteMasterDataConfig(e){let t;for(const r of Object.keys(e)){t=this.PERSISTENCE_TYPES[r.substring(0,r.length-1)];for(const a of e[r])this.persist(t,a)}}persisteMonsterEncounterList(e){const t=this.retrieve(this.PERSISTENCE_TYPES.monsterEncounterList);(0,s.fb)(e,t,"name,system"),localStorage.setItem(this.PERSISTENCE_TYPES.monsterEncounterList,JSON.stringify(t))}persistMonsterType(e){const t=this.retrieve(this.PERSISTENCE_TYPES.monsterType);(0,s.fb)(e,t,"name,system"),localStorage.setItem(this.PERSISTENCE_TYPES.monsterType,JSON.stringify(t))}persistTreasureArticle(e){const t=this.retrieve(this.PERSISTENCE_TYPES.treasureArticle);(0,s.fb)(e,t),localStorage.setItem(this.PERSISTENCE_TYPES.treasureArticle,JSON.stringify(t))}persistTreasureList(e){const t=this.retrieve(this.PERSISTENCE_TYPES.treasureList);(0,s.fb)(e,t,"name,system"),localStorage.setItem(this.PERSISTENCE_TYPES.treasureList,JSON.stringify(t))}persistTreasureMap(e){const t=this.retrieve(this.PERSISTENCE_TYPES.treasureMap);(0,s.fb)(e,t,"name,system"),localStorage.setItem(this.PERSISTENCE_TYPES.treasureMap,JSON.stringify(t))}persistTreasureMapReference(e){const t=this.retrieve(this.PERSISTENCE_TYPES.treasureMapRef);(0,s.fb)(e,t),localStorage.setItem(this.PERSISTENCE_TYPES.treasureMapRef,JSON.stringify(t))}persistTreasureType(e){const t=this.retrieve(this.PERSISTENCE_TYPES.treasureType);(0,s.fb)(e,t,"type,system"),localStorage.setItem(this.PERSISTENCE_TYPES.treasureType,JSON.stringify(t))}refreshDataState(){const e=new m.a;for(const t of Object.keys(this.PERSISTENCE_TYPES))e[`${t}s`]=this.retrieve(this.PERSISTENCE_TYPES[t]);this.dataStateSource.next(e)}retrieve(e,t){const r=localStorage.getItem(e),a=t??[];return(0,s.gK)(r)?JSON.parse(r):a}}return o.\u0275fac=function(e){return new(e||o)(T.LFG(v))},o.\u0275prov=T.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})()},767:(P,c,i)=>{i.d(c,{$:()=>l});const l={magicItem:"greg-magic-item",magicItemTable:"greg-magic-item-table",magicWeaponPower:"greg-weapon-power",magicWeaponPowerTable:"greg-weapon-power-table",monsterEncounterList:"greg-monster-encounter-list",monsterType:"greg-monster-type",treasureArticle:"greg-treasure-article",treasureList:"greg-treasure-list",treasureMap:"greg-treasure-map",treasureMapRef:"greg-treasure-map-ref",treasureType:"greg-treasure-type"}}}]);