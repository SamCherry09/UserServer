"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[951],{8951:(C,g,s)=>{s.r(g),s.d(g,{RegisterModule:()=>f});var m=s(6895),u=s(433),l=s(6384),e=s(8256),p=s(6984),d=s(2785);const c=[{path:"",component:(()=>{class n{constructor(t,o){this.side=t,this.userService=o,this.email="",this.password="",this.name="",this.famName="",this.subscriptions=[]}ngOnInit(){}createProfile(){this.subscriptions.push(this.userService.createUser(this.email,this.password,this.name,this.famName).subscribe()),this.side.goToLogInPage()}OnDestroy(){for(const t of this.subscriptions)t.unsubscribe()}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(p.u),e.Y36(d.K))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-register"]],decls:18,vars:4,consts:[["type","text",3,"ngModel","ngModelChange"],[3,"click"]],template:function(t,o){1&t&&(e.TgZ(0,"h3"),e._uU(1,"Email"),e.qZA(),e.TgZ(2,"input",0),e.NdJ("ngModelChange",function(i){return o.email=i}),e.qZA(),e._UZ(3,"br"),e.TgZ(4,"h3"),e._uU(5,"Passwort"),e.qZA(),e.TgZ(6,"input",0),e.NdJ("ngModelChange",function(i){return o.password=i}),e.qZA(),e._UZ(7,"br"),e.TgZ(8,"h3"),e._uU(9,"Name"),e.qZA(),e.TgZ(10,"input",0),e.NdJ("ngModelChange",function(i){return o.name=i}),e.qZA(),e._UZ(11,"br"),e.TgZ(12,"h3"),e._uU(13,"Vornahme"),e.qZA(),e.TgZ(14,"input",0),e.NdJ("ngModelChange",function(i){return o.famName=i}),e.qZA(),e._UZ(15,"br"),e.TgZ(16,"button",1),e.NdJ("click",function(){return o.createProfile()}),e._uU(17,"Create Profile"),e.qZA()),2&t&&(e.xp6(2),e.Q6J("ngModel",o.email),e.xp6(4),e.Q6J("ngModel",o.password),e.xp6(4),e.Q6J("ngModel",o.name),e.xp6(4),e.Q6J("ngModel",o.famName))},dependencies:[u.Fj,u.JJ,u.On]}),n})()}];let h=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[l.Bz.forChild(c),l.Bz]}),n})(),f=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[m.ez,u.u5,h]}),n})()}}]);