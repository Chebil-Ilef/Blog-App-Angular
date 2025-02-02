"use strict";(self.webpackChunkblog_app=self.webpackChunkblog_app||[]).push([[215],{215:(S,F,c)=>{c.r(F),c.d(F,{DashboardModule:()=>Pt});var d=c(177),t=c(540),r=c(4341),m=c(7562);function x(n,s){1&n&&(t.j41(0,"div",19),t.EFF(1," Category field is required "),t.k0s())}function u(n,s){if(1&n){const e=t.RV6();t.j41(0,"tr")(1,"td"),t.EFF(2),t.k0s(),t.j41(3,"td"),t.EFF(4),t.k0s(),t.j41(5,"td",20)(6,"button",21),t.bIt("click",function(){const a=t.eBV(e).$implicit,l=t.XpG();return t.Njj(l.onEdit(a.category,a.id))}),t.EFF(7," Edit "),t.k0s(),t.j41(8,"button",22),t.bIt("click",function(){const a=t.eBV(e).$implicit,l=t.XpG();return t.Njj(l.onDelete(a.id))}),t.EFF(9," Delete "),t.k0s()()()}if(2&n){const e=s.$implicit,o=s.index;t.R7$(2),t.SpI(" ",o+1," "),t.R7$(2),t.JRh(e.category)}}const g=function(n){return{"is-invalid":n}};let h=(()=>{class n{constructor(){this.formCategory="",this.formStatus="Add",this.categoryId="",this.categoryService=(0,t.WQX)(m.w),this.categories$=this.categoryService.loadData()}onSubmit(e){let o={category:e.value.category};"Add"==this.formStatus?(this.categoryService.saveData(o),e.reset()):"Edit"==this.formStatus&&(this.categoryService.updateData(this.categoryId,o),e.reset(),this.formStatus="Add",this.categoryId="")}onEdit(e,o){this.formCategory=e,this.formStatus="Edit",this.categoryId=o}onDelete(e){this.categoryService.deleteData(e)}static{this.\u0275fac=function(o){return new(o||n)}}static{this.\u0275cmp=t.VBU({type:n,selectors:[["app-dashboard-categories"]],standalone:!0,features:[t.aNF],decls:34,vars:12,consts:[[1,"container"],[1,"row"],[1,"col-md-12"],[1,"card","shadow-effect","bg-third-theme"],[1,"card-body"],[1,"text-theme-primary"],[1,"mb-5"],[1,"d-flex","gap-3","text-center",3,"ngSubmit"],["categoryForm","ngForm"],[1,"col-md-10"],["type","text","name","category","placeholder","Add New Category","required","",1,"form-control",3,"ngModel","ngClass","ngModelChange"],["newCategory","ngModel"],["class","alert alert-danger",4,"ngIf"],[1,"col-md-2"],[1,"text-white","btn","btn-block","btn-info","mb-1","btn-theme",3,"disabled"],[1,"row","mt-5"],[1,"card","shadow-effect"],[1,"table","row-border","hover"],[4,"ngFor","ngForOf"],[1,"alert","alert-danger"],[1,"d-flex","gap-3"],[1,"btn","btn-sm","btn-warning","text-white",3,"click"],[1,"btn","btn-sm","btn-danger","ml-2",3,"click"]],template:function(o,i){if(1&o){const a=t.RV6();t.j41(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"h3",5),t.EFF(6),t.k0s(),t.j41(7,"p",6),t.EFF(8),t.k0s(),t.j41(9,"form",7,8),t.bIt("ngSubmit",function(){t.eBV(a);const b=t.sdS(10);return t.Njj(i.onSubmit(b))}),t.j41(11,"div",9)(12,"input",10,11),t.bIt("ngModelChange",function(b){return i.formCategory=b}),t.k0s(),t.DNE(14,x,2,0,"div",12),t.k0s(),t.j41(15,"div",13)(16,"button",14),t.EFF(17),t.k0s()()()()()()(),t.j41(18,"div",15)(19,"div",2)(20,"div",16)(21,"div",4)(22,"table",17)(23,"thead")(24,"tr")(25,"th"),t.EFF(26,"No"),t.k0s(),t.j41(27,"th"),t.EFF(28,"Category"),t.k0s(),t.j41(29,"th"),t.EFF(30,"Action"),t.k0s()()(),t.j41(31,"tbody"),t.DNE(32,u,10,2,"tr",18),t.nI1(33,"async"),t.k0s()()()()()()()}if(2&o){const a=t.sdS(10),l=t.sdS(13);t.R7$(6),t.SpI("",i.formStatus," Category"),t.R7$(2),t.SpI(" You can ",i.formStatus," categories from here ..! "),t.R7$(4),t.Y8G("ngModel",i.formCategory)("ngClass",t.eq3(10,g,l.touched&&l.invalid)),t.R7$(2),t.Y8G("ngIf",l.touched&&l.invalid),t.R7$(2),t.Y8G("disabled",a.invalid),t.R7$(1),t.SpI(" ",i.formStatus," Category "),t.R7$(15),t.Y8G("ngForOf",t.bMT(33,8,i.categories$))}},dependencies:[r.YN,r.qT,r.me,r.BC,r.cb,r.YS,r.vS,r.cV,d.YU,d.bT,d.pM,d.Jj],changeDetection:0})}}return n})();var f=c(6840),p=c(3100),P=c(1635),D=c(8730);class C{transform(s){return""==s.trim()?"--":s.replace(/\s/g,"-")}static{this.\u0275fac=function(e){return new(e||C)}}static{this.\u0275pipe=t.EJ8({name:"postTitlePipe",type:C,pure:!0,standalone:!0})}}(0,P.Cg)([(0,D.A)()],C.prototype,"transform",null);var w=c(4056);function I(n,s){1&n&&(t.j41(0,"div",29),t.EFF(1,"Title is required"),t.k0s())}function N(n,s){if(1&n&&(t.j41(0,"div"),t.DNE(1,I,2,0,"div",28),t.k0s()),2&n){const e=t.XpG(2);t.R7$(1),t.Y8G("ngIf",e.formControl.title.touched&&e.formControl.title.invalid)}}function G(n,s){1&n&&(t.j41(0,"div",29),t.EFF(1,"Title must be at least 10 caracters long"),t.k0s())}function T(n,s){if(1&n&&(t.j41(0,"div"),t.DNE(1,G,2,0,"div",28),t.k0s()),2&n){const e=t.XpG(2);t.R7$(1),t.Y8G("ngIf",e.formControl.title.touched&&e.formControl.title.invalid)}}function Y(n,s){1&n&&(t.j41(0,"div",29),t.EFF(1,"Post link is required"),t.k0s())}function A(n,s){if(1&n&&(t.j41(0,"div"),t.DNE(1,Y,2,0,"div",28),t.k0s()),2&n){const e=t.XpG(2);t.R7$(1),t.Y8G("ngIf",e.formControl.postLink.touched&&e.formControl.postLink.invalid)}}function X(n,s){1&n&&(t.j41(0,"div",29),t.EFF(1,"Description is required"),t.k0s())}function B(n,s){if(1&n&&(t.j41(0,"div"),t.DNE(1,X,2,0,"div",28),t.k0s()),2&n){const e=t.XpG(2);t.R7$(1),t.Y8G("ngIf",e.formControl.excerpt.touched&&e.formControl.excerpt.invalid)}}function L(n,s){1&n&&(t.j41(0,"div",29),t.EFF(1,"Description must be at least 50 caracters long"),t.k0s())}function V(n,s){if(1&n&&(t.j41(0,"div"),t.DNE(1,L,2,0,"div",28),t.k0s()),2&n){const e=t.XpG(2);t.R7$(1),t.Y8G("ngIf",e.formControl.excerpt.touched&&e.formControl.excerpt.invalid)}}function q(n,s){if(1&n&&(t.j41(0,"option",30),t.EFF(1),t.k0s()),2&n){const e=s.$implicit;t.FCK("value","",e.id,"-",e.category,""),t.R7$(1),t.JRh(e.category)}}function z(n,s){1&n&&(t.j41(0,"div",29),t.EFF(1,"Please Select a Post category"),t.k0s())}function J(n,s){if(1&n&&(t.j41(0,"div"),t.DNE(1,z,2,0,"div",28),t.k0s()),2&n){const e=t.XpG(2);t.R7$(1),t.Y8G("ngIf",e.formControl.category.touched&&e.formControl.category.invalid)}}function W(n,s){1&n&&(t.j41(0,"div",29),t.EFF(1,"Post Image is required"),t.k0s())}function Q(n,s){if(1&n&&(t.j41(0,"div"),t.DNE(1,W,2,0,"div",28),t.k0s()),2&n){const e=t.XpG(2);t.R7$(1),t.Y8G("ngIf",e.formControl.postImg.touched&&e.formControl.postImg.invalid)}}function U(n,s){1&n&&(t.j41(0,"div",29),t.EFF(1,"Blog Content is required"),t.k0s())}function H(n,s){if(1&n&&(t.j41(0,"div"),t.DNE(1,U,2,0,"div",28),t.k0s()),2&n){const e=t.XpG(2);t.R7$(1),t.Y8G("ngIf",e.formControl.content.touched&&e.formControl.content.invalid)}}const k=function(n){return{"is-invalid":n}};function K(n,s){if(1&n){const e=t.RV6();t.j41(0,"div")(1,"form",6),t.bIt("ngSubmit",function(){t.eBV(e);const i=t.XpG();return t.Njj(i.onSumbit())}),t.j41(2,"div",1)(3,"div",7)(4,"div",8)(5,"div",9)(6,"div",10)(7,"label"),t.EFF(8,"Title"),t.k0s(),t.j41(9,"input",11),t.bIt("keyup",function(i){t.eBV(e);const a=t.XpG();return t.Njj(a.onTitleChanged(i))}),t.k0s(),t.DNE(10,N,2,1,"div",5),t.DNE(11,T,2,1,"div",5),t.k0s(),t.j41(12,"div",12)(13,"label"),t.EFF(14,"Post link"),t.k0s(),t.nrm(15,"input",13),t.nI1(16,"postTitlePipe"),t.DNE(17,A,2,1,"div",5),t.k0s(),t.j41(18,"div",10)(19,"label"),t.EFF(20,"Description"),t.k0s(),t.nrm(21,"textarea",14),t.DNE(22,B,2,1,"div",5),t.DNE(23,V,2,1,"div",5),t.k0s()()()(),t.j41(24,"div",15)(25,"div",12)(26,"label",16),t.EFF(27,"Please select a post category"),t.k0s(),t.j41(28,"select",17)(29,"option",18),t.EFF(30,"Please select a category"),t.k0s(),t.DNE(31,q,2,3,"option",19),t.nI1(32,"async"),t.k0s(),t.DNE(33,J,2,1,"div",5),t.k0s(),t.j41(34,"div",12)(35,"label",16),t.EFF(36,"Post Image"),t.k0s(),t.nrm(37,"img",20),t.j41(38,"input",21),t.bIt("change",function(i){t.eBV(e);const a=t.XpG();return t.Njj(a.showPreview(i))}),t.k0s(),t.DNE(39,Q,2,1,"div",5),t.k0s()()(),t.j41(40,"div",22)(41,"div",23)(42,"div",8)(43,"div",9)(44,"div",12)(45,"label",16),t.EFF(46,"Content"),t.k0s(),t.nrm(47,"angular-editor",24),t.DNE(48,H,2,1,"div",5),t.k0s()()()(),t.j41(49,"div",25)(50,"button",26),t.EFF(51),t.k0s(),t.j41(52,"a",27),t.EFF(53,"Back to Posts"),t.k0s()()()()()}if(2&n){const e=t.XpG();t.R7$(1),t.Y8G("formGroup",e.postForm),t.R7$(8),t.Y8G("ngClass",t.eq3(23,k,e.formControl.title.touched&&e.formControl.title.invalid)),t.R7$(1),t.Y8G("ngIf",e.formControl.title.hasError("required")),t.R7$(1),t.Y8G("ngIf",e.formControl.title.hasError("minlength")),t.R7$(4),t.Y8G("value",t.bMT(16,19,e.postTitle))("ngClass",t.eq3(25,k,e.formControl.postLink.touched&&e.formControl.postLink.invalid)),t.R7$(2),t.Y8G("ngIf",e.formControl.postLink.hasError("required")),t.R7$(4),t.Y8G("ngClass",t.eq3(27,k,e.formControl.excerpt.touched&&e.formControl.excerpt.invalid)),t.R7$(1),t.Y8G("ngIf",e.formControl.excerpt.hasError("required")),t.R7$(1),t.Y8G("ngIf",e.formControl.excerpt.hasError("minlength")),t.R7$(5),t.Y8G("ngClass",t.eq3(29,k,e.formControl.category.touched&&e.formControl.category.invalid)),t.R7$(3),t.Y8G("ngForOf",t.bMT(32,21,e.categories$)),t.R7$(2),t.Y8G("ngIf",e.formControl.category.hasError("required")),t.R7$(4),t.Y8G("src",e.imgSrc,t.B4B),t.R7$(1),t.Y8G("ngClass",t.eq3(31,k,e.formControl.postImg.touched&&e.formControl.postImg.invalid)),t.R7$(1),t.Y8G("ngIf",e.formControl.postImg.hasError("required")),t.R7$(9),t.Y8G("ngIf",e.formControl.content.hasError("required")),t.R7$(2),t.Y8G("disabled",e.postForm.invalid),t.R7$(1),t.SpI("",e.formStatus," Post")}}let j=(()=>{class n{constructor(){this.postTitle="",this.imgSrc="./assets/image-placeholder.png",this.formStatus="New",this.docId="",this.categoryService=(0,t.WQX)(m.w),this.blogPostService=(0,t.WQX)(f.t),this.categories$=this.categoryService.loadData(),this.formBuilder=(0,t.WQX)(r.ok),this.route=(0,t.WQX)(p.nX),this.postForm=this.formBuilder.group({title:["",[r.k0.required,r.k0.minLength(10)]],postLink:[{value:"",disabled:!0},r.k0.required],excerpt:["",[r.k0.required,r.k0.minLength(50)]],category:["",r.k0.required],postImg:["",r.k0.required],content:["",r.k0.required]}),this.subscription=this.route.queryParams.subscribe(e=>{e.id&&this.blogPostService.loadOneData(e.id).subscribe(o=>{this.loadedPost=o,this.postForm=this.formBuilder.group({title:[this.loadedPost.title,[r.k0.required,r.k0.minLength(10)]],postLink:[{value:this.loadedPost.postLink,disabled:!0},r.k0.required],excerpt:[this.loadedPost.excerpt,[r.k0.required,r.k0.minLength(50)]],category:[`${this.loadedPost.category.categoryId}-${this.loadedPost.category.category}`,r.k0.required],postImg:["",r.k0.required],content:[this.loadedPost.content,r.k0.required]}),this.imgSrc=this.loadedPost.postImg,this.formStatus="Edit",this.docId=this.loadedPost.id})})}ngOnDestroy(){this.subscription.unsubscribe()}onTitleChanged(e){this.postTitle=e.target.value}get formControl(){return this.postForm.controls}showPreview(e){const o=new FileReader;o.onload=i=>{this.imgSrc=i.target?.result},o.readAsDataURL(e.target.files[0]),this.selectedImage=e.target.files[0]}transform(e){return""==e.trim()?"--":e.replace(/\s/g,"-")}onSumbit(){let[e,o]=this.postForm.value.category.split("-");const i={title:this.postForm.value.title,postLink:this.transform(this.postForm.value.title),category:{categoryId:e,category:o},postImg:"",excerpt:this.postForm.value.excerpt,content:this.postForm.value.content,isFeatured:!1,views:0,status:"new",createdAt:new Date};this.blogPostService.addPost(this.selectedImage,i,this.formStatus,this.docId),this.postForm.reset(),this.imgSrc="./assets/image-placeholder.png"}canDeactivate(){let e=!0,o=Object.values(this.postForm.value);for(const i of o)if(i){e=!1;break}return!!e||window.confirm("You have unsaved changes. Do you really want to leave?")}static{this.\u0275fac=function(o){return new(o||n)}}static{this.\u0275cmp=t.VBU({type:n,selectors:[["app-new-post"]],standalone:!0,features:[t.aNF],decls:8,vars:3,consts:[[1,"container"],[1,"row"],[1,"col-md-12","text-center"],[1,"text-theme-primary"],[1,"mb-5"],[4,"ngIf"],[3,"formGroup","ngSubmit"],[1,"col-md-7"],[1,"card","shadow-effect"],[1,"card-body"],[1,"from-group"],["type","text","formControlName","title",1,"form-control",3,"ngClass","keyup"],[1,"form-group"],["type","text","formControlName","postLink",1,"form-control",3,"value","ngClass"],["cols","30","rows","10","formControlName","excerpt",1,"form-control",3,"ngClass"],[1,"col-md-5"],["for",""],["formControlName","category",1,"form-control",3,"ngClass"],["value","","disabled",""],[3,"value",4,"ngFor","ngForOf"],[1,"form-control","img-fluid","img-preview",3,"src"],["formControlName","postImg","type","file","accept","image/*",1,"form-control",3,"ngClass","change"],[1,"row","mt-3","mb-5"],[1,"col-md-12"],["placeholder","Add your content here","formControlName","content"],[1,"col-md-12","text-center","mb-5","mt-5","d-flex","gap-3","justify-content-center"],[1,"btn","btn-info","bg-theme","text-white",3,"disabled"],["routerLink","/dashboard/posts",1,"btn","btn-warning","ml-3","text-white"],["class","alert alert-danger",4,"ngIf"],[1,"alert","alert-danger"],[3,"value"]],template:function(o,i){1&o&&(t.j41(0,"div",0)(1,"div",1)(2,"div",2)(3,"h3",3),t.EFF(4),t.k0s(),t.j41(5,"p",4),t.EFF(6),t.k0s()()(),t.DNE(7,K,54,33,"div",5),t.k0s()),2&o&&(t.R7$(4),t.SpI(" ",i.formStatus," Post "),t.R7$(2),t.SpI(" You can ",i.formStatus," your post here "),t.R7$(1),t.Y8G("ngIf",i.postForm))},dependencies:[d.bT,r.YN,r.qT,r.xH,r.y7,r.me,r.wz,r.BC,r.cb,r.X1,r.j4,r.JD,d.YU,d.pM,w.Qt,w.Rj,p.Wk,d.Jj,C],changeDetection:0})}}return n})();var y=c(4796),Z=c(1303),tt=c(3687);const M=function(n){return{"alert-validate":n}};let E=(()=>{class n{constructor(){this.authService=(0,t.WQX)(y.u)}onSubmit(e){e.invalid||this.authService.login(e.value.email,e.value.password).subscribe()}static{this.\u0275fac=function(o){return new(o||n)}}static{this.\u0275cmp=t.VBU({type:n,selectors:[["app-login"]],standalone:!0,features:[t.aNF],decls:31,vars:7,consts:[[1,"limiter"],[1,"maincontainer"],[1,"wrap-form"],[1,"login-title",2,"background-image","url('assets/login-bc.jpg')"],[1,"login-span-title"],[1,"card-body"],[1,"form","login-form","validate-form",3,"ngSubmit"],["loginForm","ngForm"],["data-validate","Email is required",1,"wrap-input","validate-input","m-b-26",3,"ngClass"],[1,"label-input"],["placeholder","Enter email","type","email","ngModel","","name","email","required","",1,"input100"],["Email","ngModel"],[1,"input-border"],["data-validate","Password is required",1,"form","wrap-input","validate-input","m-b-18",3,"ngClass"],["placeholder","Enter password","type","password","ngModel","","name","password","required","",1,"input100"],["Password","ngModel"],[1,"flex-sb-m","w-full","p-b-30"],[1,"txt"],[1,"container-login-form-btn",2,"margin-top","20px"],["type","submit",1,"login-form-btn",3,"disabled"]],template:function(o,i){if(1&o){const a=t.RV6();t.nrm(0,"app-header"),t.j41(1,"div",0)(2,"div",1)(3,"div",2)(4,"div",3)(5,"span",4),t.EFF(6," Login In "),t.k0s()(),t.j41(7,"div",5)(8,"form",6,7),t.bIt("ngSubmit",function(){t.eBV(a);const b=t.sdS(9);return t.Njj(i.onSubmit(b))}),t.j41(10,"div",8)(11,"span",9),t.EFF(12,"Email"),t.k0s(),t.nrm(13,"input",10,11)(15,"span",12),t.k0s(),t.j41(16,"div",13)(17,"span",9),t.EFF(18,"Password"),t.k0s(),t.nrm(19,"input",14,15)(21,"span",12),t.k0s(),t.j41(22,"div",16)(23,"div")(24,"p",17),t.EFF(25,"Please login to your admin account to post a new blog"),t.k0s()()(),t.nrm(26,"br"),t.j41(27,"div",18)(28,"button",19),t.EFF(29," Login "),t.k0s()()()()()(),t.nrm(30,"app-footer"),t.k0s()}if(2&o){const a=t.sdS(9),l=t.sdS(14),b=t.sdS(20);t.R7$(10),t.Y8G("ngClass",t.eq3(3,M,l.touched&&l.invalid)),t.R7$(6),t.Y8G("ngClass",t.eq3(5,M,b.touched&&b.invalid)),t.R7$(12),t.Y8G("disabled",a.invalid)}},dependencies:[tt.l,r.YN,r.qT,r.me,r.BC,r.cb,r.YS,r.vS,r.cV,d.YU,Z.n],styles:['.card[_ngcontent-%COMP%]{background-color:#ecefed69;min-width:-moz-fit-content;min-width:fit-content}*[_ngcontent-%COMP%]{margin:0;padding:0;box-sizing:border-box}input[_ngcontent-%COMP%]{outline:none;border:none}input[type=number][_ngcontent-%COMP%]{appearance:none;-webkit-appearance:none}input[type=number][_ngcontent-%COMP%]::-webkit-outer-spin-button, input[type=number][_ngcontent-%COMP%]::-webkit-inner-spin-button{-webkit-appearance:none}textarea[_ngcontent-%COMP%]{outline:none;border:none}textarea[_ngcontent-%COMP%]:focus, input[_ngcontent-%COMP%]:focus{border-color:transparent!important}label[_ngcontent-%COMP%]{display:block;margin:0}input[_ngcontent-%COMP%]:-webkit-autofill, input[_ngcontent-%COMP%]:-webkit-autofill:focus{-webkit-transition:background-color 0s 600000s,color 0s 600000s;transition:background-color 0s 600000s,color 0s 600000s}button[_ngcontent-%COMP%]{outline:none!important;border:none;background:transparent}button[_ngcontent-%COMP%]:hover{cursor:pointer}iframe[_ngcontent-%COMP%]{border:none!important}.limiter[_ngcontent-%COMP%]{width:100%;margin:9% auto}.maincontainer[_ngcontent-%COMP%]{width:100%;display:flex;flex-wrap:wrap;justify-content:center;align-items:center;padding:15px}.wrap-form[_ngcontent-%COMP%]{width:670px;background:#ecefedc9;border-radius:10px;overflow:hidden;position:relative}.login-title[_ngcontent-%COMP%]{width:100%;position:relative;z-index:1;display:flex;flex-wrap:wrap;flex-direction:column;align-items:center;background-repeat:no-repeat;background-size:cover;background-position:center;padding:70px 15px 74px}.login-span-title[_ngcontent-%COMP%]{font-size:30px;color:#fff;text-transform:uppercase;line-height:1.2;text-align:center}.login-title[_ngcontent-%COMP%]:before{content:"";display:block;position:absolute;z-index:-1;width:100%;height:100%;top:0;left:0;background-color:#365463b3}.txt[_ngcontent-%COMP%]{font-size:13px;line-height:1.4;color:#999;margin-top:10px}.login-form[_ngcontent-%COMP%]{width:100%;display:flex;flex-wrap:wrap;justify-content:space-between;padding:43px 88px 93px 190px}.wrap-input[_ngcontent-%COMP%]{width:100%;position:relative;border-bottom:1px solid #b2b2b2}.label-input[_ngcontent-%COMP%]{font-size:15px;color:gray;line-height:1.2;text-align:right;position:absolute;top:14px;left:-105px;width:80px}.input100[_ngcontent-%COMP%]{font-size:15px;color:#555;line-height:1.2;display:block;width:100%;background:transparent;padding:0 5px}.focus-input100[_ngcontent-%COMP%]{position:absolute;display:block;width:100%;height:100%;top:0;left:0;pointer-events:none}.focus-input100[_ngcontent-%COMP%]:before{content:"";display:block;position:absolute;bottom:-1px;left:0;width:0;height:1px;transition:all .6s;background:#57b846}input.input100[_ngcontent-%COMP%]{height:45px}.input100[_ngcontent-%COMP%]:focus + .focus-input100[_ngcontent-%COMP%]:before{width:100%}.has-val.input100[_ngcontent-%COMP%] + .focus-input100[_ngcontent-%COMP%]:before{width:100%}.container-login-form-btn[_ngcontent-%COMP%]{width:100%;display:flex;flex-wrap:wrap}.login-form-btn[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;padding:0 20px;min-width:160px;height:50px;background-color:#57b846;border-radius:25px;font-size:16px;color:#fff;line-height:1.2;transition:all .4s}.login-form-btn[_ngcontent-%COMP%]:hover{background-color:#333}@media (max-width: 576px){.login-form[_ngcontent-%COMP%]{padding:43px 15px 57px 117px}}@media (max-width: 480px){.login-form[_ngcontent-%COMP%]{padding:43px 15px 57px}.label-input[_ngcontent-%COMP%]{text-align:left;position:unset;top:unset;left:unset;width:100%;padding:0 5px}}.form[_ngcontent-%COMP%]{--border-height: 1px;--border-before-color: rgba(221, 221, 221, .39);--border-after-color: #57b846;--input-hovered-color: #4985e01f;position:relative}.input[_ngcontent-%COMP%]{color:#fff;font-size:.9rem;background-color:transparent;width:100%;box-sizing:border-box;padding-inline:.5em;padding-block:.7em;border:none;border-bottom:var(--border-height) solid var(--border-before-color)}.input-border[_ngcontent-%COMP%]{position:absolute;background:var(--border-after-color);width:0%;height:2px;bottom:0;left:0;transition:.3s}input[_ngcontent-%COMP%]:focus{outline:none}input[_ngcontent-%COMP%]:focus ~ .input-border[_ngcontent-%COMP%]{width:100%}'],changeDetection:0})}}return n})();var et=c(5794),nt=c(1626);const O=function(n){return{active:n}},ot=function(){return["/dashboard/home"]},it=function(){return["/dashboard/categories"]},rt=function(){return["/dashboard/posts"]},st=function(){return["/dashboard/comments"]},at=function(){return["/dashboard/subscribers"]},ct=function(n,s){return{"fa-bars":n,"fa-chevron-right":s}};let dt=(()=>{class n{constructor(){this.route=(0,t.WQX)(p.nX),this.toggleActive=!0,this.currcomponent="dashboard",this.authService=(0,t.WQX)(y.u)}toggleMenu(){this.toggleActive=!this.toggleActive}onLogout(){this.authService.logOut()}static{this.\u0275fac=function(o){return new(o||n)}}static{this.\u0275cmp=t.VBU({type:n,selectors:[["app-dashboard"]],standalone:!0,features:[t.aNF],decls:58,vars:25,consts:[[1,"container"],[1,"navigation",3,"ngClass"],["href","#"],[1,"icon"],[1,"fa-brands","fa-blogger-b"],[1,"title"],[3,"routerLinkActive"],[3,"routerLink"],[1,"fa-solid","fa-table-columns"],[1,"fas","fa-clipboard-list"],[1,"fas","fa-file-image"],[1,"fas","fa-message"],[1,"fas","fa-users"],[3,"click"],[1,"logout",2,"cursor","pointer"],[1,"fa-solid","fa-arrow-right-from-bracket"],[1,"main",3,"ngClass"],[1,"topbar"],[1,"toggle",3,"click"],[1,"fa-solid",3,"ngClass"],[1,"search"],[1,"apptitle"],[1,"router"]],template:function(o,i){1&o&&(t.j41(0,"div",0)(1,"div",1)(2,"ul")(3,"li")(4,"a",2)(5,"span",3),t.nrm(6,"i",4),t.k0s(),t.j41(7,"span",5),t.EFF(8,"Blog-admin"),t.k0s()()(),t.j41(9,"li",6)(10,"a",7)(11,"span",3),t.nrm(12,"i",8),t.k0s(),t.j41(13,"span",5),t.EFF(14,"Dashboard"),t.k0s()()(),t.j41(15,"li",6)(16,"a",7)(17,"span",3),t.nrm(18,"i",9),t.k0s(),t.j41(19,"span",5),t.EFF(20,"Categories"),t.k0s()()(),t.j41(21,"li",6)(22,"a",7)(23,"span",3),t.nrm(24,"i",10),t.k0s(),t.j41(25,"span",5),t.EFF(26,"Posts"),t.k0s()()(),t.j41(27,"li",6)(28,"a",7)(29,"span",3),t.nrm(30,"i",11),t.k0s(),t.j41(31,"span",5),t.EFF(32,"Comments"),t.k0s()()(),t.j41(33,"li",6)(34,"a",7)(35,"span",3),t.nrm(36,"i",12),t.k0s(),t.j41(37,"span",5),t.EFF(38,"Subscribers"),t.k0s()()(),t.nrm(39,"br")(40,"br")(41,"br"),t.j41(42,"li",13),t.bIt("click",function(){return i.onLogout()}),t.j41(43,"a",14)(44,"span",3),t.nrm(45,"i",15),t.k0s(),t.j41(46,"span",5),t.EFF(47,"Logout"),t.k0s()()()()(),t.j41(48,"div",16)(49,"div",17)(50,"div",18),t.bIt("click",function(){return i.toggleMenu()}),t.j41(51,"span",3),t.nrm(52,"i",19),t.k0s()(),t.j41(53,"div",20)(54,"span",21),t.EFF(55,"dashboard"),t.k0s()()(),t.j41(56,"div",22),t.nrm(57,"router-outlet"),t.k0s()()()),2&o&&(t.R7$(1),t.Y8G("ngClass",t.eq3(13,O,i.toggleActive)),t.R7$(8),t.Y8G("routerLinkActive","hovered"),t.R7$(1),t.Y8G("routerLink",t.lJ4(15,ot)),t.R7$(5),t.Y8G("routerLinkActive","hovered"),t.R7$(1),t.Y8G("routerLink",t.lJ4(16,it)),t.R7$(5),t.Y8G("routerLinkActive","hovered"),t.R7$(1),t.Y8G("routerLink",t.lJ4(17,rt)),t.R7$(5),t.Y8G("routerLinkActive","hovered"),t.R7$(1),t.Y8G("routerLink",t.lJ4(18,st)),t.R7$(5),t.Y8G("routerLinkActive","hovered"),t.R7$(1),t.Y8G("routerLink",t.lJ4(19,at)),t.R7$(14),t.Y8G("ngClass",t.eq3(20,O,i.toggleActive)),t.R7$(4),t.Y8G("ngClass",t.l_i(22,ct,!i.toggleActive,i.toggleActive)))},dependencies:[d.YU,p.wQ,p.Wk,p.n3],styles:[".app-body[_ngcontent-%COMP%]{background:url(https://cdn.pixabay.com/photo/2017/09/06/11/41/clean-2721103_1280.jpg);background-size:100%;background-position:center;height:100%}.glass[_ngcontent-%COMP%]{background:linear-gradient(135deg,rgba(255,255,255,.1),rgba(255,255,255,0));-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);height:100%}*[_ngcontent-%COMP%]{margin:0;padding:0;box-sizing:border-box}.container[_ngcontent-%COMP%]{height:-webkit-fill-available;position:static;width:100%;background-color:#ecefed}.navigation[_ngcontent-%COMP%]{position:fixed;width:250px;height:100%;background:#fff;transition:.5s;overflow:hidden}.navigation.active[_ngcontent-%COMP%]{width:80px}.navigation[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%}.navigation[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{font-size:1rem;margin:10px;transition:all .5s;border-radius:.375rem;position:relative;list-style:none}.navigation[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.hovered[_ngcontent-%COMP%]{background-color:#4cbc9a;color:#fff;font-weight:500;box-shadow:0 20px 50px #5353531a}.navigation[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(1){margin-bottom:40px;pointer-events:none}.navigation[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{position:relative;display:block;width:100%;display:flex;text-decoration:none;color:gray}.navigation[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%]{color:#4cbc9a}.navigation[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   a.logout[_ngcontent-%COMP%]{color:#cc1616}.navigation[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.hovered[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#fff;font-weight:500;box-shadow:#ff6a591a}.navigation[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{position:relative;display:block;min-width:60px;height:60px;line-height:75px;text-align:center}.icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:1.3rem}.navigation[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%], .apptitle[_ngcontent-%COMP%], .titlelogout[_ngcontent-%COMP%]{font-size:1.1rem;position:relative;display:block;padding:0 10px;height:60px;line-height:60px;text-align:start;white-space:nowrap}.router[_ngcontent-%COMP%]{margin-top:100px}.main[_ngcontent-%COMP%]{position:absolute;width:calc(100% - 250px);left:250px;min-height:100vh;background:inherit;transition:.5s}.main.active[_ngcontent-%COMP%]{width:calc(100% - 80px);left:80px}.topbar[_ngcontent-%COMP%]{width:100%;display:flex;align-items:baseline;padding:0 10px;border-radius:10px;margin:10px;position:fixed;z-index:1;background:#ffffff8a}.toggle[_ngcontent-%COMP%]{flex:0;position:relative;width:60px;height:60px;display:flex;justify-content:center;align-items:center;font-size:2.5rem;cursor:pointer}.search[_ngcontent-%COMP%]{flex:1;font-size:2.188rem;font-weight:600;color:#000}html[_ngcontent-%COMP%]{background-color:gray}@media (max-width: 991px){.navigation[_ngcontent-%COMP%]{left:-250px}.navigation.active[_ngcontent-%COMP%]{width:250px;left:0}.main[_ngcontent-%COMP%]{width:100%;left:0}.main.active[_ngcontent-%COMP%]{left:250px}}@media (max-width: 480px){.user[_ngcontent-%COMP%]{min-width:40px}.navigation[_ngcontent-%COMP%]{width:100%;left:-100%;z-index:1000}.navigation.active[_ngcontent-%COMP%]{width:100%;left:0}.toggle[_ngcontent-%COMP%]{z-index:10001}.main.active[_ngcontent-%COMP%]   .toggle[_ngcontent-%COMP%]{color:gray;position:fixed;right:0;left:initial}}"]})}}return n})();var _=c(6354),$=c(8088),R=c(69);let lt=(()=>{class n{constructor(){this.postsService=(0,t.WQX)(f.t),this.commentsService=(0,t.WQX)($.y),this.categoriesService=(0,t.WQX)(m.w),this.subService=(0,t.WQX)(R.t),this.postsCount$=this.postsService.loadData().pipe((0,_.T)(e=>e.length)),this.commentsCount$=this.commentsService.loadAllData().pipe((0,_.T)(e=>e.length)),this.categoriesCount$=this.categoriesService.loadData().pipe((0,_.T)(e=>e.length)),this.subCount$=this.subService.loadData().pipe((0,_.T)(e=>e.length))}static{this.\u0275fac=function(o){return new(o||n)}}static{this.\u0275cmp=t.VBU({type:n,selectors:[["app-dashboard-home"]],standalone:!0,features:[t.aNF],decls:42,vars:12,consts:[[1,"container"],[1,"row"],[1,"row","row-cols-1","row-cols-md-3","g-4"],[1,"col"],[1,"card","firstcard"],[1,"card-body"],[1,"card-title"],[1,"card-text"],[1,"card","secondcard"],[1,"card","thirdcard"],[1,"card","fourthcard"]],template:function(o,i){1&o&&(t.j41(0,"div",0)(1,"div",1)(2,"h1"),t.EFF(3,"Welcome Back!\u{1f44b} "),t.k0s()(),t.j41(4,"div",1)(5,"div",2)(6,"div",3)(7,"div",4)(8,"div",5)(9,"h2",6)(10,"b"),t.EFF(11),t.nI1(12,"async"),t.k0s()(),t.j41(13,"h4",7),t.EFF(14,"Total posts"),t.k0s()()()(),t.j41(15,"div",3)(16,"div",8)(17,"div",5)(18,"h2",6)(19,"b"),t.EFF(20),t.nI1(21,"async"),t.k0s()(),t.j41(22,"h4",7),t.EFF(23,"Comments"),t.k0s()()()(),t.j41(24,"div",3)(25,"div",9)(26,"div",5)(27,"h2",6)(28,"b"),t.EFF(29),t.nI1(30,"async"),t.k0s()(),t.j41(31,"h4",7),t.EFF(32,"Categories"),t.k0s()()()(),t.j41(33,"div",3)(34,"div",10)(35,"div",5)(36,"h2",6)(37,"b"),t.EFF(38),t.nI1(39,"async"),t.k0s()(),t.j41(40,"h4",7),t.EFF(41,"Subscribers"),t.k0s()()()()()()()),2&o&&(t.R7$(11),t.SpI(" ",t.bMT(12,4,i.postsCount$),""),t.R7$(9),t.SpI(" ",t.bMT(21,6,i.commentsCount$),""),t.R7$(9),t.SpI(" ",t.bMT(30,8,i.categoriesCount$),""),t.R7$(9),t.SpI(" ",t.bMT(39,10,i.subCount$),""))},dependencies:[d.Jj],styles:[".card[_ngcontent-%COMP%]{cursor:pointer}.container[_ngcontent-%COMP%]{padding:2%}.firstcard[_ngcontent-%COMP%]{background-color:#ff6a59;color:#fff}.secondcard[_ngcontent-%COMP%]{background-color:#21262e;color:#fff}.thirdcard[_ngcontent-%COMP%]{background-color:#1badd6;color:#fff}.fourthcard[_ngcontent-%COMP%]{background-color:#4cbc9a;color:#fff}"],changeDetection:0})}}return n})();const v=(n,s)=>{let e=(0,t.WQX)(y.u),o=(0,t.WQX)(p.Ix);return e.loadUser().pipe((0,_.T)(i=>!!i||(o.navigate(["/dashboard"]),!1)))};function pt(n,s){if(1&n){const e=t.RV6();t.j41(0,"tr")(1,"td"),t.EFF(2),t.k0s(),t.j41(3,"td"),t.EFF(4),t.k0s(),t.j41(5,"td"),t.EFF(6),t.k0s(),t.j41(7,"td")(8,"div",11)(9,"button",12),t.bIt("click",function(){const a=t.eBV(e).$implicit,l=t.XpG();return t.Njj(l.deleteSubscriber(a.id))}),t.EFF(10," Delete "),t.k0s()()()()}if(2&n){const e=s.$implicit,o=s.index;t.R7$(2),t.JRh(o+1),t.R7$(2),t.JRh(e.name),t.R7$(2),t.JRh(e.email)}}let mt=(()=>{class n{constructor(){this.subService=(0,t.WQX)(R.t),this.subList$=this.subService.loadData()}deleteSubscriber(e){this.subService.deleteData(e)}static{this.\u0275fac=function(o){return new(o||n)}}static{this.\u0275cmp=t.VBU({type:n,selectors:[["app-dashboard-subscribers"]],standalone:!0,features:[t.aNF],decls:27,vars:3,consts:[[1,"container"],[1,"row"],[1,"col-md-12"],[1,"card","shadow-effect","bg-third-theme"],[1,"card-body","text-center"],[1,"text-theme-center"],[1,"row","mt-5"],[1,"card","shadow-effect"],[1,"card-body"],[1,"table","row-border","hover"],[4,"ngFor","ngForOf"],[1,"d-flex","gap-3"],[1,"btn","btn-sm","btn-danger",3,"click"]],template:function(o,i){1&o&&(t.j41(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"h3",5),t.EFF(6,"All Subscribers"),t.k0s(),t.j41(7,"p"),t.EFF(8,"From here you can manage your subscribers."),t.k0s()()()()(),t.j41(9,"div",6)(10,"div",2)(11,"div",7)(12,"div",8)(13,"table",9)(14,"thead")(15,"tr")(16,"th"),t.EFF(17,"No"),t.k0s(),t.j41(18,"th"),t.EFF(19,"Name"),t.k0s(),t.j41(20,"th"),t.EFF(21,"Email"),t.k0s(),t.j41(22,"th"),t.EFF(23,"Actions"),t.k0s()()(),t.j41(24,"tbody"),t.DNE(25,pt,11,3,"tr",10),t.nI1(26,"async"),t.k0s()()()()()()()),2&o&&(t.R7$(25),t.Y8G("ngForOf",t.bMT(26,1,i.subList$)))},dependencies:[d.pM,d.Jj],changeDetection:0})}}return n})();var ut=c(483);function gt(n,s){if(1&n){const e=t.RV6();t.j41(0,"button",20),t.bIt("click",function(){t.eBV(e);const i=t.XpG().$implicit,a=t.XpG();return t.Njj(a.onFeatured(i.id,!0))}),t.EFF(1," Make Featured "),t.k0s()}}function ht(n,s){if(1&n){const e=t.RV6();t.j41(0,"button",21),t.bIt("click",function(){t.eBV(e);const i=t.XpG().$implicit,a=t.XpG();return t.Njj(a.onFeatured(i.id,!1))}),t.EFF(1," Remove Featured "),t.k0s()}}const ft=function(n){return{id:n}};function bt(n,s){if(1&n){const e=t.RV6();t.j41(0,"tr")(1,"td",13),t.EFF(2),t.k0s(),t.j41(3,"td",13),t.nrm(4,"img",14),t.k0s(),t.j41(5,"td",13),t.EFF(6),t.k0s(),t.j41(7,"td"),t.EFF(8),t.k0s(),t.j41(9,"td"),t.EFF(10),t.nI1(11,"date"),t.nI1(12,"timestampToDate"),t.k0s(),t.j41(13,"td")(14,"div",15)(15,"button",16),t.EFF(16," Edit "),t.k0s(),t.j41(17,"button",17),t.bIt("click",function(){const a=t.eBV(e).$implicit,l=t.XpG();return t.Njj(l.deletePost(a.id))}),t.EFF(18," Delete "),t.k0s(),t.DNE(19,gt,2,0,"button",18),t.DNE(20,ht,2,0,"button",19),t.k0s()()()}if(2&n){const e=s.$implicit,o=s.index;t.R7$(1),t.Y8G("width",10),t.R7$(1),t.JRh(o+1),t.R7$(1),t.Y8G("width",200),t.R7$(1),t.FS9("src",e.postImg,t.B4B),t.R7$(1),t.Y8G("width",200),t.R7$(1),t.JRh(e.title),t.R7$(2),t.JRh(e.category.category),t.R7$(2),t.JRh(t.bMT(11,11,t.bMT(12,13,e.createdAt))),t.R7$(5),t.Y8G("queryParams",t.eq3(15,ft,e.id)),t.R7$(4),t.Y8G("ngIf",!e.isFeatured),t.R7$(1),t.Y8G("ngIf",e.isFeatured)}}let vt=(()=>{class n{constructor(){this.postsService=(0,t.WQX)(f.t),this.blogPosts$=this.postsService.loadData()}deletePost(e){this.postsService.deleteData(e)}onFeatured(e,o){this.postsService.markFeatured(e,{isFeatured:o})}static{this.\u0275fac=function(o){return new(o||n)}}static{this.\u0275cmp=t.VBU({type:n,selectors:[["app-all-posts"]],standalone:!0,features:[t.aNF],decls:34,vars:3,consts:[[1,"container"],[1,"row"],[1,"col-md-12"],[1,"card","shadow-effect","bg-third-theme"],[1,"card-body","text-center"],[1,"text-theme-center"],[1,"d-flex","justify-content-center","gap-3"],["routerLink","/dashboard/posts/new",1,"btn","btn-info","bg-theme","text-white"],[1,"row","mt-5"],[1,"card","shadow-effect"],[1,"card-body"],[1,"table","row-border","hover"],[4,"ngFor","ngForOf"],[3,"width"],["alt","",1,"img","img-fluid",3,"src"],[1,"d-flex","gap-3"],["routerLink","/dashboard/posts/new",1,"btn","btn-sm","btn-warning",3,"queryParams"],[1,"btn","btn-sm","btn-danger",3,"click"],["class","btn btn-sm btn-success",3,"click",4,"ngIf"],["class","btn btn-sm btn-info text-white",3,"click",4,"ngIf"],[1,"btn","btn-sm","btn-success",3,"click"],[1,"btn","btn-sm","btn-info","text-white",3,"click"]],template:function(o,i){1&o&&(t.j41(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"h3",5),t.EFF(6,"All Blog Posts"),t.k0s(),t.j41(7,"p"),t.EFF(8,"From here you can manage your blog posts."),t.k0s(),t.j41(9,"div",6)(10,"button",7),t.EFF(11,"Add New Post"),t.k0s()()()()()(),t.j41(12,"div",8)(13,"div",2)(14,"div",9)(15,"div",10)(16,"table",11)(17,"thead")(18,"tr")(19,"th"),t.EFF(20,"No"),t.k0s(),t.j41(21,"th"),t.EFF(22,"Blog Image"),t.k0s(),t.j41(23,"th"),t.EFF(24,"Title"),t.k0s(),t.j41(25,"th"),t.EFF(26,"Category"),t.k0s(),t.j41(27,"th"),t.EFF(28,"Date"),t.k0s(),t.j41(29,"th"),t.EFF(30,"Actions"),t.k0s()()(),t.j41(31,"tbody"),t.DNE(32,bt,21,17,"tr",12),t.nI1(33,"async"),t.k0s()()()()()()()),2&o&&(t.R7$(32),t.Y8G("ngForOf",t.bMT(33,1,i.blogPosts$)))},dependencies:[p.Wk,d.pM,d.bT,d.Jj,d.vh,ut.i],changeDetection:0})}}return n})();function _t(n,s){if(1&n){const e=t.RV6();t.j41(0,"tr")(1,"td"),t.EFF(2),t.k0s(),t.j41(3,"td"),t.EFF(4),t.k0s(),t.j41(5,"td"),t.EFF(6),t.k0s(),t.j41(7,"td"),t.EFF(8),t.k0s(),t.j41(9,"td")(10,"div",11)(11,"button",12),t.bIt("click",function(){const a=t.eBV(e).$implicit,l=t.XpG();return t.Njj(l.approveComment(a.id))}),t.EFF(12," Approve "),t.k0s(),t.j41(13,"button",13),t.bIt("click",function(){const a=t.eBV(e).$implicit,l=t.XpG();return t.Njj(l.deleteComment(a.id))}),t.EFF(14," Delete "),t.k0s()()()()}if(2&n){const e=s.$implicit,o=s.index;t.R7$(2),t.JRh(o+1),t.R7$(2),t.JRh(e.postName),t.R7$(2),t.JRh(e.name),t.R7$(2),t.JRh(e.comment)}}let Ct=(()=>{class n{constructor(){this.commentsService=(0,t.WQX)($.y),this.notApprovedComments$=this.commentsService.loadNotApprovedComments()}deleteComment(e){this.commentsService.deleteData(e)}approveComment(e){this.commentsService.approveComment(e)}static{this.\u0275fac=function(o){return new(o||n)}}static{this.\u0275cmp=t.VBU({type:n,selectors:[["app-dashboard-comments"]],standalone:!0,features:[t.aNF],decls:29,vars:3,consts:[[1,"container"],[1,"row"],[1,"col-md-12"],[1,"card","shadow-effect","bg-third-theme"],[1,"card-body","text-center"],[1,"text-theme-center"],[1,"row","mt-5"],[1,"card","shadow-effect"],[1,"card-body"],[1,"table","row-border","hover"],[4,"ngFor","ngForOf"],[1,"d-flex","gap-3"],[1,"btn","btn-sm","btn-success",3,"click"],[1,"btn","btn-sm","btn-danger",3,"click"]],template:function(o,i){1&o&&(t.j41(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"h3",5),t.EFF(6,"All Comments"),t.k0s(),t.j41(7,"p"),t.EFF(8,"From here you can approve comments."),t.k0s()()()()(),t.j41(9,"div",6)(10,"div",2)(11,"div",7)(12,"div",8)(13,"table",9)(14,"thead")(15,"tr")(16,"th"),t.EFF(17,"No"),t.k0s(),t.j41(18,"th"),t.EFF(19,"Blog Post"),t.k0s(),t.j41(20,"th"),t.EFF(21,"Name"),t.k0s(),t.j41(22,"th"),t.EFF(23,"Comment"),t.k0s(),t.j41(24,"th"),t.EFF(25,"Actions"),t.k0s()()(),t.j41(26,"tbody"),t.DNE(27,_t,15,4,"tr",10),t.nI1(28,"async"),t.k0s()()()()()()()),2&o&&(t.R7$(27),t.Y8G("ngForOf",t.bMT(28,1,i.notApprovedComments$)))},dependencies:[d.pM,d.Jj],changeDetection:0})}}return n})();var kt=c(6013);const Ft=[{path:"",component:E,canActivate:[(n,s)=>{let e=(0,t.WQX)(y.u),o=(0,t.WQX)(p.Ix);return e.loadUser().pipe((0,_.T)(i=>!i||(o.navigate(["/dashboard/home"]),!1)))}]},{path:"",component:dt,children:[{path:"home",component:lt,canActivate:[v]},{path:"categories",component:h,canActivate:[v]},{path:"subscribers",component:mt,canActivate:[v]},{path:"posts",component:vt,canActivate:[v]},{path:"comments",component:Ct,canActivate:[v]},{path:"posts/new",component:j,canActivate:[v],canDeactivate:[n=>!n.canDeactivate||n.canDeactivate()]},{path:"**",component:kt.z,canActivate:[v]}]}];let xt=(()=>{class n{static{this.\u0275fac=function(o){return new(o||n)}}static{this.\u0275mod=t.$C({type:n})}static{this.\u0275inj=t.G2t({imports:[p.iI.forChild(Ft),p.iI]})}}return n})(),Pt=(()=>{class n{static{this.\u0275fac=function(o){return new(o||n)}}static{this.\u0275mod=t.$C({type:n})}static{this.\u0275inj=t.G2t({imports:[d.MD,xt,r.YN,et._B.forRoot(),w.Qt,nt.q1,r.X1,h,j,E]})}}return n})()},8730:(S,F)=>{var t=function(){for(var r=[],m=0;m<arguments.length;m++)r[m]=arguments[m];return r[0]};F.A=function(r){return void 0===r&&(r={}),function(m,x,u){var g,h;if("function"!=typeof u.value)throw new Error("Memoization can be applied only to methods");var f=null!==(g=r.resolver)&&void 0!==g?g:t,p=null!==(h=r.cache)&&void 0!==h?h:new Map;return u.value=function d(r,m,x){var u=function(){var g,h=arguments,f=m.apply(this,h),p=u.cache;if(p.has(f))return p.get(f);var P=r.apply(this,h);return u.cache=null!==(g=p.set(f,P))&&void 0!==g?g:p,P};return u.cache=x,u}(u.value,f,p),u}}}}]);