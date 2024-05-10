(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5688],{95380:function(e,r,t){"use strict";t.d(r,{Z:function(){return o}});var n=t(2265),a={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.365.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let s=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),o=(e,r)=>{let t=(0,n.forwardRef)(({color:t="currentColor",size:o=24,strokeWidth:i=2,absoluteStrokeWidth:l,className:u="",children:c,...d},f)=>(0,n.createElement)("svg",{ref:f,...a,width:o,height:o,stroke:t,strokeWidth:l?24*Number(i)/Number(o):i,className:["lucide",`lucide-${s(e)}`,u].join(" "),...d},[...r.map(([e,r])=>(0,n.createElement)(e,r)),...Array.isArray(c)?c:[c]]));return t.displayName=`${e}`,t}},47154:function(e,r,t){"use strict";t.d(r,{Z:function(){return a}});var n=t(95380);/**
 * @license lucide-react v0.365.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let a=(0,n.Z)("BookOpenText",[["path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z",key:"vv98re"}],["path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z",key:"1cyq3y"}],["path",{d:"M6 8h2",key:"30oboj"}],["path",{d:"M6 12h2",key:"32wvfc"}],["path",{d:"M16 8h2",key:"msurwy"}],["path",{d:"M16 12h2",key:"7q9ll5"}]])},1295:function(e,r,t){"use strict";t.d(r,{Z:function(){return a}});var n=t(95380);/**
 * @license lucide-react v0.365.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let a=(0,n.Z)("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]])},79474:function(e,r,t){Promise.resolve().then(t.bind(t,71379))},71379:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return P}});var n=t(57437),a=t(2265),s=t(71424),o=t(60106),i=t(10356),l=t(7820),u=t(39311),c=t(93023),d=t(84168),f=t(16775),m=t(55909);let p=(0,o.BX)("\n  mutation uploadUserAvatarBase64($id: ID!, $avatarBase64: String!) {\n    uploadUserAvatarBase64(id: $id, avatarBase64: $avatarBase64)\n  }\n"),h=()=>{var e;let[r,t]=(0,a.useState)(!1),[o,h]=(0,a.useState)(""),[{data:x}]=(0,i.P)(),v=(0,l.D)(p,{onError(e){s.A.error(e.message)}});if(!(null==x?void 0:null===(e=x.me)||void 0===e?void 0:e.email))return null;let w=async()=>{var e;t(!0);let r=await v({avatarBase64:o.split(",")[1],id:x.me.id});(null==r?void 0:null===(e=r.data)||void 0===e?void 0:e.uploadUserAvatarBase64)===!0&&(await (0,u.gw)(1e3),(0,m.n)(x.me.id),s.A.success("Successfully updated your profile picture!"),await (0,u.gw)(200)),h(""),t(!1)};return(0,n.jsxs)("div",{className:"grid gap-6",children:[(0,n.jsxs)("div",{className:"relative",children:[(0,n.jsx)("label",{htmlFor:"avatar-file",className:"absolute left-0 top-0 z-20 flex h-16 w-16 cursor-pointer items-center justify-center rounded-full bg-background/90 opacity-0 transition-all hover:opacity-100",children:(0,n.jsx)(d.IconCloudUpload,{})}),(0,n.jsx)("input",{id:"avatar-file",type:"file",accept:"image/png, image/jpeg",className:"hidden",onChange:e=>{let r=e.target.files?e.target.files[0]:null;if(r){let e=parseFloat((r.size/1024).toFixed(2));if(e>500)return s.A.error("The image you are attempting to upload is too large. Please ensure the file size is under ".concat(500,"KB and try again."));let t=new FileReader;t.onloadend=()=>{let e=t.result;h(e)},t.readAsDataURL(r)}}}),o&&(0,n.jsx)("img",{src:o,className:"absolute left-0 top-0 z-10 h-16 w-16 rounded-full border object-cover",alt:"avatar to be uploaded"}),(0,n.jsx)(m.Y,{className:(0,u.cn)("relative h-16 w-16 border",{"opacity-0":o})})]}),(0,n.jsx)(f.Z,{}),(0,n.jsxs)("div",{className:"flex items-center justify-between",children:[(0,n.jsxs)(c.z,{type:"submit",disabled:!o||r,onClick:w,className:"mr-5 w-40",children:[r&&(0,n.jsx)(d.IconSpinner,{className:"mr-2 h-4 w-4 animate-spin"}),"Save Changes"]}),(0,n.jsx)("div",{className:"flex flex-1 justify-end",children:(0,n.jsx)("p",{className:" text-xs text-muted-foreground lg:text-sm",children:"Square image recommended. Accepted file types: .png, .jpg. Max file size: ".concat(500,"KB.")})})]})]})};var x=t(38110),v=t(61865),w=t(74578),g=t(41315),N=t(51908),j=t(96976),b=t(93111);let y=(0,o.BX)("\n  mutation PasswordChange($input: PasswordChangeInput!) {\n    passwordChange(input: $input)\n  }\n"),C=e=>{let{onSuccess:r,showOldPassword:t}=e,[s,o]=a.useState(!1),[i,u]=a.useState(!1),m=w.Ry({oldPassword:t?w.Z_():w.Z_().optional(),newPassword1:w.Z_(),newPassword2:w.Z_()}),p=(0,v.cI)({resolver:(0,x.F)(m)}),{isSubmitting:h}=p.formState,{newPassword1:b}=p.watch(),[C]=(0,j.Y0)(b),S=(0,l.D)(y,{form:p,onCompleted(e){(null==e?void 0:e.passwordChange)&&(null==r||r(),p.reset({newPassword1:"",newPassword2:"",oldPassword:""}))}}),_=async e=>{await S({input:e})},I=()=>{if(0===C.length)return o(!1);u(!0)};return(0,n.jsx)(g.l0,{...p,children:(0,n.jsxs)("form",{className:"grid gap-6",onSubmit:p.handleSubmit(_),children:[t&&(0,n.jsx)(g.Wi,{control:p.control,name:"oldPassword",render:e=>{let{field:r}=e;return(0,n.jsxs)(g.xJ,{children:[(0,n.jsx)(g.lX,{required:!0,children:"Old password"}),(0,n.jsx)(g.NI,{children:(0,n.jsx)(N.I,{className:"w-[350px]",autoCapitalize:"none",autoComplete:"off",autoCorrect:"off",type:"password",...r})}),(0,n.jsx)(g.zG,{})]})}}),(0,n.jsxs)("div",{children:[(0,n.jsx)(g.Wi,{control:p.control,name:"newPassword1",render:e=>{let{field:r}=e;return(0,n.jsxs)(g.xJ,{children:[(0,n.jsx)(g.lX,{required:!0,children:"New password"}),(0,n.jsx)(g.NI,{children:(0,n.jsx)(N.I,{className:"w-[350px]",autoCapitalize:"none",autoComplete:"off",autoCorrect:"off",type:"password",...r,onFocus:()=>o(!0),onBlur:I})})]})}}),(0,n.jsx)(j.Lu,{password:b||"",showPasswordSchema:s,passworErrors:C,showPasswordError:i})]}),(0,n.jsx)(g.Wi,{control:p.control,name:"newPassword2",render:e=>{let{field:r}=e;return(0,n.jsxs)(g.xJ,{children:[(0,n.jsx)(g.lX,{required:!0,children:"Confirm new password"}),(0,n.jsx)(g.NI,{children:(0,n.jsx)(N.I,{className:"w-[350px]",autoCapitalize:"none",autoComplete:"off",autoCorrect:"off",type:"password",...r})}),(0,n.jsx)(g.zG,{})]})}}),(0,n.jsx)(g.zG,{}),(0,n.jsx)(f.Z,{}),(0,n.jsx)("div",{className:"flex",children:(0,n.jsxs)(c.z,{type:"submit",disabled:h,className:"w-40",children:[h&&(0,n.jsx)(d.IconSpinner,{className:"mr-2 h-4 w-4 animate-spin"}),"Save Changes"]})})]})})},S=()=>{var e;let[{data:r},t]=(0,i.P)();return r?(0,n.jsx)(C,{onSuccess:()=>{s.A.success("Password is updated"),t()},showOldPassword:null==r?void 0:null===(e=r.me)||void 0===e?void 0:e.isPasswordSet}):(0,n.jsx)(b.cg,{})};var _=t(81860);let I=()=>{var e;let[{data:r}]=(0,i.P)();return(0,n.jsx)("div",{children:(0,n.jsx)(N.I,{disabled:!0,className:"w-[350px]",value:null==r?void 0:null===(e=r.me)||void 0===e?void 0:e.email,onChange:_.Z})})};var E=t(86110);let A=e=>{let{title:r,description:t,footer:a,footerClassname:s,className:o,children:i,...l}=e;return(0,n.jsxs)("div",{className:(0,u.cn)("flex w-full flex-col gap-8 rounded-lg border p-6 pb-0 xl:w-[800px]",o),...l,children:[(0,n.jsxs)("div",{children:[(0,n.jsx)(E.ll,{children:r}),t&&(0,n.jsx)("div",{className:"mt-4 text-sm text-muted-foreground",children:t})]}),(0,n.jsx)(E.aY,{className:"p-0",children:i}),(0,n.jsxs)("div",{className:(0,u.cn)("rounded-b-lg pb-6 text-sm text-muted-foreground",s),children:[!!a&&(0,n.jsx)(f.Z,{className:"mb-6"}),a]})]})};function P(){return(0,n.jsxs)("div",{className:"flex flex-col items-center gap-6",children:[(0,n.jsx)(A,{title:"Your Email",description:"This will be the email you use to log in and receive notifications.",footer:"The feature to change your email address will be available in a future release.",children:(0,n.jsx)(I,{})}),(0,n.jsx)(A,{title:"Your Avatar",description:"This is your avatar image.",footerClassname:"pb-0",children:(0,n.jsx)(h,{})}),(0,n.jsx)(A,{title:"Change Password",footerClassname:"pb-0",children:(0,n.jsx)(S,{})})]})}},96976:function(e,r,t){"use strict";t.d(r,{Lu:function(){return f},Y0:function(){return d}});var n,a,s=t(57437),o=t(2265),i=t(24144),l=t(74578),u=t(39311);(n=a||(a={})).LOWERCASE_MSISSING="lowercase_missing",n.UPPERCASE_MSISSING="uppercase_missing",n.NUMBER_MISSING="number_missing",n.SPECIAL_CHAR_MISSING="special_char_missing",n.AT_LEAST_EIGHT_CHAR="at_least_eight_char",n.AT_MOST_TWENTY_CHAT="at_most_twenty_char";let c=l.Z_().refine(e=>/[a-z]/.test(e),{params:{errorCode:a.LOWERCASE_MSISSING}}).refine(e=>/[A-Z]/.test(e),{params:{errorCode:a.UPPERCASE_MSISSING}}).refine(e=>/\d/.test(e),{params:{errorCode:a.NUMBER_MISSING}}).refine(e=>/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(e),{params:{errorCode:a.SPECIAL_CHAR_MISSING}}).refine(e=>e.length>=8,{params:{errorCode:a.AT_LEAST_EIGHT_CHAR}}).refine(e=>e.length<=20,{params:{errorCode:a.AT_MOST_TWENTY_CHAT}}),d=e=>{let[r,t]=o.useState([]);return o.useEffect(()=>{if(!(0,i.Z)(e))try{c.parse(e),t([])}catch(e){e instanceof l.jm&&t(e.issues.map(e=>e.params.errorCode))}},[e]),[r,t]};function f(e){let{password:r,showPasswordSchema:t,passworErrors:n,showPasswordError:o}=e;function i(e){let{errorCode:t,text:a}=e;return(0,s.jsx)("li",{className:(0,u.cn)("py-0.5",{"text-green-600 dark:text-green-500":r.length>0&&!n.includes(t),"text-red-600 dark:text-red-500":o&&r.length>0&&n.includes(t)}),children:a})}return(0,s.jsxs)("div",{className:(0,u.cn)("relative text-sm transition-all",{"h-0 opacity-0 -z-10":!t,"mt-4 h-40 opacity-100":t}),children:[(0,s.jsx)("p",{className:"mb-0.5 text-xs text-muted-foreground",children:"Set up a strong password with"}),(0,s.jsxs)("ul",{className:"list-disc pl-4",children:[(0,s.jsx)(i,{errorCode:a.AT_LEAST_EIGHT_CHAR,text:"At least 8 characters long"}),(0,s.jsx)(i,{errorCode:a.AT_MOST_TWENTY_CHAT,text:"No more than 20 characters long"}),(0,s.jsx)(i,{errorCode:a.LOWERCASE_MSISSING,text:"At least one lowercase character"}),(0,s.jsx)(i,{errorCode:a.UPPERCASE_MSISSING,text:"At least one uppercase character"}),(0,s.jsx)(i,{errorCode:a.NUMBER_MISSING,text:"At least one numeric character"}),(0,s.jsx)(i,{errorCode:a.SPECIAL_CHAR_MISSING,text:"At least one special character , such as @#$%^&{}"})]})]})}},93111:function(e,r,t){"use strict";t.d(r,{PF:function(){return l},cg:function(){return o},tB:function(){return i}});var n=t(57437),a=t(39311),s=t(25645);let o=e=>{let{className:r,...t}=e;return(0,n.jsxs)("div",{className:(0,a.cn)("space-y-3",r),...t,children:[(0,n.jsx)(s.O,{className:"h-4 w-full"}),(0,n.jsx)(s.O,{className:"h-4 w-full"}),(0,n.jsx)(s.O,{className:"h-4 w-full"}),(0,n.jsx)(s.O,{className:"h-4 w-full"})]})},i=e=>{let{className:r,...t}=e;return(0,n.jsx)(s.O,{className:(0,a.cn)("h-4 w-full",r),...t})},l=e=>{let{className:r,...t}=e;return(0,n.jsxs)("div",{className:(0,a.cn)("flex flex-col gap-3",r),...t,children:[(0,n.jsx)(s.O,{className:"h-4 w-[20%]"}),(0,n.jsx)(s.O,{className:"h-4 w-full"}),(0,n.jsx)(s.O,{className:"h-4 w-[20%]"}),(0,n.jsx)(s.O,{className:"h-4 w-full"})]})}},93023:function(e,r,t){"use strict";t.d(r,{d:function(){return l},z:function(){return u}});var n=t(57437),a=t(2265),s=t(67256),o=t(7404),i=t(39311);let l=(0,o.j)("inline-flex items-center justify-center rounded-md text-sm font-medium shadow ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground shadow-md hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90","hover-destructive":"shadow-none hover:bg-destructive/90 hover:text-destructive-foreground",outline:"border border-input hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"shadow-none hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 shadow-none hover:underline"},size:{default:"h-8 px-4 py-2",sm:"h-8 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-8 w-8 p-0"}},defaultVariants:{variant:"default",size:"default"}}),u=a.forwardRef((e,r)=>{let{className:t,variant:a,size:o,asChild:u=!1,...c}=e,d=u?s.g7:"button";return(0,n.jsx)(d,{className:(0,i.cn)(l({variant:a,size:o,className:t})),ref:r,...c})});u.displayName="Button"},86110:function(e,r,t){"use strict";t.d(r,{Ol:function(){return i},Zb:function(){return o},aY:function(){return c},eW:function(){return d},ll:function(){return l}});var n=t(57437),a=t(2265),s=t(39311);let o=a.forwardRef((e,r)=>{let{className:t,...a}=e;return(0,n.jsx)("div",{ref:r,className:(0,s.cn)("rounded-lg border bg-card text-card-foreground shadow-sm",t),...a})});o.displayName="Card";let i=a.forwardRef((e,r)=>{let{className:t,...a}=e;return(0,n.jsx)("div",{ref:r,className:(0,s.cn)("flex flex-col space-y-1.5 p-6",t),...a})});i.displayName="CardHeader";let l=a.forwardRef((e,r)=>{let{className:t,...a}=e;return(0,n.jsx)("h3",{ref:r,className:(0,s.cn)("text-2xl font-semibold leading-none tracking-tight",t),...a})});l.displayName="CardTitle";let u=a.forwardRef((e,r)=>{let{className:t,...a}=e;return(0,n.jsx)("p",{ref:r,className:(0,s.cn)("text-sm text-muted-foreground",t),...a})});u.displayName="CardDescription";let c=a.forwardRef((e,r)=>{let{className:t,...a}=e;return(0,n.jsx)("div",{ref:r,className:(0,s.cn)("p-6 pt-0",t),...a})});c.displayName="CardContent";let d=a.forwardRef((e,r)=>{let{className:t,...a}=e;return(0,n.jsx)("div",{ref:r,className:(0,s.cn)("flex items-center p-6 pt-0",t),...a})});d.displayName="CardFooter"},41315:function(e,r,t){"use strict";t.d(r,{NI:function(){return x},Wi:function(){return d},l0:function(){return u},lX:function(){return h},pf:function(){return v},xJ:function(){return p},zG:function(){return w}});var n=t(57437),a=t(2265),s=t(67256),o=t(61865),i=t(39311),l=t(66672);let u=o.RV,c=a.createContext({}),d=e=>{let{...r}=e;return(0,n.jsx)(c.Provider,{value:{name:r.name},children:(0,n.jsx)(o.Qr,{...r})})},f=()=>{let e=a.useContext(c),r=a.useContext(m),{getFieldState:t,formState:n}=(0,o.Gc)(),s=e.name||"root",i=t(s,n);if(!n)throw Error("useFormField should be used within <Form>");let{id:l}=r;return{id:l,name:s,formItemId:"".concat(l,"-form-item"),formDescriptionId:"".concat(l,"-form-item-description"),formMessageId:"".concat(l,"-form-item-message"),...i}},m=a.createContext({}),p=a.forwardRef((e,r)=>{let{className:t,...s}=e,o=a.useId();return(0,n.jsx)(m.Provider,{value:{id:o},children:(0,n.jsx)("div",{ref:r,className:(0,i.cn)("space-y-2",t),...s})})});p.displayName="FormItem";let h=a.forwardRef((e,r)=>{let{className:t,required:a,...s}=e,{error:o,formItemId:u}=f();return(0,n.jsx)(l._,{ref:r,className:(0,i.cn)(o&&"text-destructive",a&&'after:ml-0.5 after:text-destructive after:content-["*"]',t),htmlFor:u,...s})});h.displayName="FormLabel";let x=a.forwardRef((e,r)=>{let{...t}=e,{error:a,formItemId:o,formDescriptionId:i,formMessageId:l}=f();return(0,n.jsx)(s.g7,{ref:r,id:o,"aria-describedby":a?"".concat(i," ").concat(l):"".concat(i),"aria-invalid":!!a,...t})});x.displayName="FormControl";let v=a.forwardRef((e,r)=>{let{className:t,...a}=e,{formDescriptionId:s}=f();return(0,n.jsx)("div",{ref:r,id:s,className:(0,i.cn)("text-sm text-muted-foreground",t),...a})});v.displayName="FormDescription";let w=a.forwardRef((e,r)=>{let{className:t,children:a,...s}=e,{error:o,formMessageId:l}=f(),u=o?String(null==o?void 0:o.message):a;return u?(0,n.jsx)("p",{ref:r,id:l,className:(0,i.cn)("text-sm font-medium text-destructive",t),...s,children:u}):null});w.displayName="FormMessage"},51908:function(e,r,t){"use strict";t.d(r,{I:function(){return o}});var n=t(57437),a=t(2265),s=t(39311);let o=a.forwardRef((e,r)=>{let{className:t,type:a,...o}=e;return(0,n.jsx)("input",{type:a,className:(0,s.cn)("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",t),ref:r,...o})});o.displayName="Input"},66672:function(e,r,t){"use strict";t.d(r,{_:function(){return u}});var n=t(57437),a=t(2265),s=t(36743),o=t(7404),i=t(39311);let l=(0,o.j)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),u=a.forwardRef((e,r)=>{let{className:t,...a}=e;return(0,n.jsx)(s.f,{ref:r,className:(0,i.cn)(l(),t),...a})});u.displayName=s.f.displayName},16775:function(e,r,t){"use strict";t.d(r,{Z:function(){return i}});var n=t(57437),a=t(2265),s=t(26823),o=t(39311);let i=a.forwardRef((e,r)=>{let{className:t,orientation:a="horizontal",decorative:i=!0,...l}=e;return(0,n.jsx)(s.f,{ref:r,decorative:i,orientation:a,className:(0,o.cn)("shrink-0 bg-border","horizontal"===a?"h-[1px] w-full":"h-full w-[1px]",t),...l})});i.displayName=s.f.displayName},25645:function(e,r,t){"use strict";t.d(r,{O:function(){return s}});var n=t(57437),a=t(39311);function s(e){let{className:r,...t}=e;return(0,n.jsx)("div",{className:(0,a.cn)("h-4 animate-pulse rounded-md bg-gray-200 dark:bg-gray-700",r),...t})}},55909:function(e,r,t){"use strict";t.d(r,{Y:function(){return g},n:function(){return N}});var n=t(57437),a=t(11372),s=t(30713),o=t(1589),i=t(10356),l=t(1592),u=t(39311),c=t(2265),d=t(26694);let f=c.forwardRef((e,r)=>{let{className:t,...a}=e;return(0,n.jsx)(d.fC,{ref:r,className:(0,u.cn)("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",t),...a})});f.displayName=d.fC.displayName;let m=c.forwardRef((e,r)=>{let{className:t,...a}=e;return(0,n.jsx)(d.Ee,{ref:r,className:(0,u.cn)("aspect-square h-full w-full",t),...a})});m.displayName=d.Ee.displayName;let p=c.forwardRef((e,r)=>{let{className:t,...a}=e;return(0,n.jsx)(d.NY,{ref:r,className:(0,u.cn)("flex h-full w-full items-center justify-center rounded-full bg-muted",t),...a})});p.displayName=d.NY.displayName;var h=t(25645),x=t(67133).lW;let v="not_found",w=!0;function g(e){var r;let{className:t}=e,[{data:s}]=(0,i.P)(),c=null==s?void 0:s.me.id,d=c&&"/avatar/".concat(s.me.id)||null,{data:g,isLoading:N,error:j}=(0,o.Z)(d,e=>{if(w)return(0,l.Z)(e,{responseFormatter:async e=>{let r=await e.blob(),t=x.from(await r.arrayBuffer());return"data:image/png;base64,".concat(t.toString("base64"))},errorHandler:e=>{if(404===e.status)throw Error(v)}})});if(!c)return null;if(N)return(0,n.jsx)(h.O,{className:(0,u.cn)("h-16 w-16 rounded-full",t)});if((null==j?void 0:j.message)===v&&(w=!1),!g){let e=(0,a.B)(s.me.email);return(0,n.jsx)(a.Z,{className:(0,u.cn)("h-16 w-16",t),...e})}return(0,n.jsxs)(f,{className:(0,u.cn)("h-16 w-16",t),children:[(0,n.jsx)(m,{src:g,alt:s.me.email,className:"object-cover"}),(0,n.jsx)(p,{children:null===(r=s.me)||void 0===r?void 0:r.email.substring(0,2)})]})}let N=e=>{w=!0,(0,s.JG)("/avatar/".concat(e))}},10356:function(e,r,t){"use strict";t.d(r,{P:function(){return o}});var n=t(99109),a=t(60106);let s=(0,a.BX)("\n  query MeQuery {\n    me {\n      id\n      authToken\n      email\n      isAdmin\n      isPasswordSet\n    }\n  }\n"),o=()=>(0,n.aM)({query:s})},1592:function(e,r,t){"use strict";t.d(r,{Z:function(){return l}});var n=t(34084),a=t(53771),s=t(58001),o=t(7820),i=t(37004);async function l(e,r){var t;let n=null!==(t=null==r?void 0:r.customFetch)&&void 0!==t?t:window.fetch;if(function(e){var r;if(e.startsWith("/oauth/providers"))return!1;let t=null===(r=(0,i.bW)())||void 0===r?void 0:r.accessToken;if(!t)return!0;try{let{exp:e}=(0,a.o)(t);return!e||(0,i.pw)(e)}catch(e){return!0}}(e))return i.wG.refreshToken(u).then(t=>f(e,r));let s=await n(e,c(r));return 401===s.status?i.wG.refreshToken(u).then(t=>f(e,r)):m(s,r)}async function u(){var e,r;let t=null===(e=(0,i.bW)())||void 0===e?void 0:e.refreshToken;if(!t)return;let n=await d(t);return null==n?void 0:null===(r=n.data)||void 0===r?void 0:r.refreshToken}function c(e){var r;let t=new Headers(null==e?void 0:e.headers);return t.append("authorization","Bearer ".concat(null===(r=(0,i.bW)())||void 0===r?void 0:r.accessToken)),{...e||{},headers:t}}async function d(e){let r=o.L.createRequestOperation("mutation",(0,n.h)(s.Dp,{refreshToken:e}));return o.L.executeMutation(r)}function f(e,r){var t;let n=null!==(t=null==r?void 0:r.customFetch)&&void 0!==t?t:window.fetch;return n(e,c(r)).then(e=>m(e,r))}function m(e,r){return(null==e?void 0:e.ok)?(null==r?void 0:r.responseFormatter)?r.responseFormatter(e):(null==r?void 0:r.responseFormat)==="blob"?e.blob():e.json():(null==r?void 0:r.errorHandler)?r.errorHandler(e):void 0}},56989:function(e,r,t){"use strict";t.d(r,{b:function(){return s},k:function(){return a}});var n=t(2265);function a(e,r){let t=(0,n.createContext)(r);function a(e){let{children:r,...a}=e,s=(0,n.useMemo)(()=>a,Object.values(a));return(0,n.createElement)(t.Provider,{value:s},r)}return a.displayName=e+"Provider",[a,function(a){let s=(0,n.useContext)(t);if(s)return s;if(void 0!==r)return r;throw Error(`\`${a}\` must be used within \`${e}\``)}]}function s(e,r=[]){let t=[],a=()=>{let r=t.map(e=>(0,n.createContext)(e));return function(t){let a=(null==t?void 0:t[e])||r;return(0,n.useMemo)(()=>({[`__scope${e}`]:{...t,[e]:a}}),[t,a])}};return a.scopeName=e,[function(r,a){let s=(0,n.createContext)(a),o=t.length;function i(r){let{scope:t,children:a,...i}=r,l=(null==t?void 0:t[e][o])||s,u=(0,n.useMemo)(()=>i,Object.values(i));return(0,n.createElement)(l.Provider,{value:u},a)}return t=[...t,a],i.displayName=r+"Provider",[i,function(t,i){let l=(null==i?void 0:i[e][o])||s,u=(0,n.useContext)(l);if(u)return u;if(void 0!==a)return a;throw Error(`\`${t}\` must be used within \`${r}\``)}]},function(...e){let r=e[0];if(1===e.length)return r;let t=()=>{let t=e.map(e=>({useScope:e(),scopeName:e.scopeName}));return function(e){let a=t.reduce((r,{useScope:t,scopeName:n})=>{let a=t(e),s=a[`__scope${n}`];return{...r,...s}},{});return(0,n.useMemo)(()=>({[`__scope${r.scopeName}`]:a}),[a])}};return t.scopeName=r.scopeName,t}(a,...r)]}},9381:function(e,r,t){"use strict";t.d(r,{WV:function(){return i},jH:function(){return l}});var n=t(13428),a=t(2265),s=t(54887),o=t(67256);let i=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"].reduce((e,r)=>{let t=(0,a.forwardRef)((e,t)=>{let{asChild:s,...i}=e,l=s?o.g7:r;return(0,a.useEffect)(()=>{window[Symbol.for("radix-ui")]=!0},[]),(0,a.createElement)(l,(0,n.Z)({},i,{ref:t}))});return t.displayName=`Primitive.${r}`,{...e,[r]:t}},{});function l(e,r){e&&(0,s.flushSync)(()=>e.dispatchEvent(r))}},26823:function(e,r,t){"use strict";t.d(r,{f:function(){return c}});var n=t(13428),a=t(2265),s=t(9381);let o="horizontal",i=["horizontal","vertical"],l=(0,a.forwardRef)((e,r)=>{let{decorative:t,orientation:i=o,...l}=e,c=u(i)?i:o;return(0,a.createElement)(s.WV.div,(0,n.Z)({"data-orientation":c},t?{role:"none"}:{"aria-orientation":"vertical"===c?c:void 0,role:"separator"},l,{ref:r}))});function u(e){return i.includes(e)}l.propTypes={orientation(e,r,t){let n=e[r],a=String(n);return n&&!u(n)?Error(`Invalid prop \`orientation\` of value \`${a}\` supplied to \`${t}\`, expected one of:
  - horizontal
  - vertical

Defaulting to \`${o}\`.`):null}};let c=l},16459:function(e,r,t){"use strict";t.d(r,{W:function(){return a}});var n=t(2265);function a(e){let r=(0,n.useRef)(e);return(0,n.useEffect)(()=>{r.current=e}),(0,n.useMemo)(()=>(...e)=>{var t;return null===(t=r.current)||void 0===t?void 0:t.call(r,...e)},[])}},51030:function(e,r,t){"use strict";t.d(r,{b:function(){return a}});var n=t(2265);let a=(null==globalThis?void 0:globalThis.document)?n.useLayoutEffect:()=>{}},81860:function(e,r){"use strict";r.Z=function(){}}},function(e){e.O(0,[768,9109,584,1424,5414,713,3815,2256,7753,4168,2445,2971,7864,1744],function(){return e(e.s=79474)}),_N_E=e.O()}]);