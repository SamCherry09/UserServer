"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[951],{8951:(M,g,r)=>{r.r(g),r.d(g,{RegisterModule:()=>C});var l=r(6895),a=r(433),m=r(6384),e=r(8256),p=r(6984),d=r(2785);function h(n,o){1&n&&(e.TgZ(0,"aside",3)(1,"h3"),e._uU(2,"Alle Felder Ausf\xfcllen!"),e.qZA()())}const c=[{path:"",component:(()=>{class n{constructor(t,s){this.side=t,this.userService=s,this.email="",this.password="",this.name="",this.famName="",this.hasError=!1,this.subscriptions=[]}ngOnInit(){}createProfile(){if(""!=this.email&&""!=this.password&&""!=this.name&&""!=this.famName)return this.subscriptions.push(this.userService.createUser(this.email,this.password,this.name,this.famName).subscribe()),void this.side.goToLogInPage();this.hasError=!0}ngOnDestroy(){for(const t of this.subscriptions)t.unsubscribe()}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(p.u),e.Y36(d.K))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-register"]],decls:19,vars:5,consts:[["type","text",3,"ngModel","ngModelChange"],[3,"click"],["class","center errorMessage ","id","errorMessage",4,"ngIf"],["id","errorMessage",1,"center","errorMessage"]],template:function(t,s){1&t&&(e.TgZ(0,"h3"),e._uU(1,"Email"),e.qZA(),e.TgZ(2,"input",0),e.NdJ("ngModelChange",function(i){return s.email=i}),e.qZA(),e._UZ(3,"br"),e.TgZ(4,"h3"),e._uU(5,"Passwort"),e.qZA(),e.TgZ(6,"input",0),e.NdJ("ngModelChange",function(i){return s.password=i}),e.qZA(),e._UZ(7,"br"),e.TgZ(8,"h3"),e._uU(9,"Name"),e.qZA(),e.TgZ(10,"input",0),e.NdJ("ngModelChange",function(i){return s.name=i}),e.qZA(),e._UZ(11,"br"),e.TgZ(12,"h3"),e._uU(13,"Vornahme"),e.qZA(),e.TgZ(14,"input",0),e.NdJ("ngModelChange",function(i){return s.famName=i}),e.qZA(),e._UZ(15,"br"),e.TgZ(16,"button",1),e.NdJ("click",function(){return s.createProfile()}),e._uU(17,"Create Profile"),e.qZA(),e.YNc(18,h,3,0,"aside",2)),2&t&&(e.xp6(2),e.Q6J("ngModel",s.email),e.xp6(4),e.Q6J("ngModel",s.password),e.xp6(4),e.Q6J("ngModel",s.name),e.xp6(4),e.Q6J("ngModel",s.famName),e.xp6(4),e.Q6J("ngIf",s.hasError))},dependencies:[l.O5,a.Fj,a.JJ,a.On]}),n})()}];let f=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[m.Bz.forChild(c),m.Bz]}),n})(),C=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[l.ez,a.u5,f]}),n})()}}]);