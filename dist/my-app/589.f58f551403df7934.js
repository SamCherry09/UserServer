"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[589],{5589:(M,u,o)=>{o.r(u),o.d(u,{EditProfileModule:()=>c});var p=o(6895),l=o(433),d=o(6384),e=o(8256),m=o(6984),h=o(2785);const f=[{path:"",component:(()=>{class t{constructor(i,n,a){this.route=i,this.side=n,this.userService=a,this.email="",this.password="",this.name="",this.famName="",this.subscriptions=[]}ngOnInit(){const i=Number(this.route.snapshot.paramMap.get("index"));this.user$=this.userService.getUser(i),this.subscriptions.push(this.user$.subscribe(n=>{this.email=n.email,this.password=n.password,this.name=n.name,this.famName=n.famName}))}editProfile(){this.subscriptions.push(this.userService.editUser(this.email,this.password,this.name,this.famName,String(this.route.snapshot.paramMap.get("index"))).subscribe()),this.side.goToProfilePage(String(this.route.snapshot.paramMap.get("index")))}ngOnDestroy(){for(const i of this.subscriptions)i.unsubscribe()}}return t.\u0275fac=function(i){return new(i||t)(e.Y36(d.gz),e.Y36(m.u),e.Y36(h.K))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-edit-profile"]],decls:18,vars:4,consts:[["type","text",3,"ngModel","ngModelChange"],[3,"click"]],template:function(i,n){1&i&&(e.TgZ(0,"h3"),e._uU(1,"Email"),e.qZA(),e.TgZ(2,"input",0),e.NdJ("ngModelChange",function(s){return n.email=s}),e.qZA(),e._UZ(3,"br"),e.TgZ(4,"h3"),e._uU(5,"Passwort"),e.qZA(),e.TgZ(6,"input",0),e.NdJ("ngModelChange",function(s){return n.password=s}),e.qZA(),e._UZ(7,"br"),e.TgZ(8,"h3"),e._uU(9,"Name"),e.qZA(),e.TgZ(10,"input",0),e.NdJ("ngModelChange",function(s){return n.name=s}),e.qZA(),e._UZ(11,"br"),e.TgZ(12,"h3"),e._uU(13,"Vornahme"),e.qZA(),e.TgZ(14,"input",0),e.NdJ("ngModelChange",function(s){return n.famName=s}),e.qZA(),e._UZ(15,"br"),e.TgZ(16,"button",1),e.NdJ("click",function(){return n.editProfile()}),e._uU(17,"Create Profile"),e.qZA()),2&i&&(e.xp6(2),e.Q6J("ngModel",n.email),e.xp6(4),e.Q6J("ngModel",n.password),e.xp6(4),e.Q6J("ngModel",n.name),e.xp6(4),e.Q6J("ngModel",n.famName))},dependencies:[l.Fj,l.JJ,l.On]}),t})()}];let g=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[d.Bz.forChild(f),d.Bz]}),t})(),c=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[p.ez,l.u5,g]}),t})()}}]);