"use strict";(self.webpackChunknewmoto=self.webpackChunknewmoto||[]).push([[207],{3360:function(e,a,i){var s=i(1413),r=i(9439),t=i(5987),l=i(1694),n=i.n(l),o=i(2791),c=i(5341),d=i(162),f=i(184),v=["as","bsPrefix","variant","size","active","className"],m=o.forwardRef((function(e,a){var i=e.as,l=e.bsPrefix,o=e.variant,m=e.size,u=e.active,p=e.className,b=(0,t.Z)(e,v),x=(0,d.vE)(l,"btn"),N=(0,c.FT)((0,s.Z)({tagName:i},b)),Z=(0,r.Z)(N,2),h=Z[0],y=Z[1].tagName;return(0,f.jsx)(y,(0,s.Z)((0,s.Z)((0,s.Z)({},h),b),{},{ref:a,className:n()(p,x,u&&"active",o&&"".concat(x,"-").concat(o),m&&"".concat(x,"-").concat(m),b.href&&b.disabled&&"disabled")}))}));m.displayName="Button",m.defaultProps={variant:"primary",active:!1,disabled:!1},a.Z=m},2677:function(e,a,i){var s=i(9439),r=i(1413),t=i(5987),l=i(1694),n=i.n(l),o=i(2791),c=i(162),d=i(184),f=["as","bsPrefix","className"],v=["className"];var m=o.forwardRef((function(e,a){var i=function(e){var a=e.as,i=e.bsPrefix,s=e.className,l=(0,t.Z)(e,f);i=(0,c.vE)(i,"col");var o=(0,c.pi)(),d=[],v=[];return o.forEach((function(e){var a,s,r,t=l[e];delete l[e],"object"===typeof t&&null!=t?(a=t.span,s=t.offset,r=t.order):a=t;var n="xs"!==e?"-".concat(e):"";a&&d.push(!0===a?"".concat(i).concat(n):"".concat(i).concat(n,"-").concat(a)),null!=r&&v.push("order".concat(n,"-").concat(r)),null!=s&&v.push("offset".concat(n,"-").concat(s))})),[(0,r.Z)((0,r.Z)({},l),{},{className:n().apply(void 0,[s].concat(d,v))}),{as:a,bsPrefix:i,spans:d}]}(e),l=(0,s.Z)(i,2),o=l[0],m=o.className,u=(0,t.Z)(o,v),p=l[1],b=p.as,x=void 0===b?"div":b,N=p.bsPrefix,Z=p.spans;return(0,d.jsx)(x,(0,r.Z)((0,r.Z)({},u),{},{ref:a,className:n()(m,!Z.length&&N)}))}));m.displayName="Col",a.Z=m},1701:function(e,a,i){i.d(a,{Ed:function(){return t},UI:function(){return r},XW:function(){return l}});var s=i(2791);function r(e,a){var i=0;return s.Children.map(e,(function(e){return s.isValidElement(e)?a(e,i++):e}))}function t(e,a){var i=0;s.Children.forEach(e,(function(e){s.isValidElement(e)&&a(e,i++)}))}function l(e,a){return s.Children.toArray(e).some((function(e){return s.isValidElement(e)&&e.type===a}))}},5630:function(e,a,i){i.d(a,{Z:function(){return ie}});var s=i(1413),r=i(5987),t=i(1694),l=i.n(t),n=i(2007),o=i.n(n),c=i(2791),d=i(184),f=["as","className","type","tooltip"],v={type:o().string,tooltip:o().bool,as:o().elementType},m=c.forwardRef((function(e,a){var i=e.as,t=void 0===i?"div":i,n=e.className,o=e.type,c=void 0===o?"valid":o,v=e.tooltip,m=void 0!==v&&v,u=(0,r.Z)(e,f);return(0,d.jsx)(t,(0,s.Z)((0,s.Z)({},u),{},{ref:a,className:l()(n,"".concat(c,"-").concat(m?"tooltip":"feedback"))}))}));m.displayName="Feedback",m.propTypes=v;var u=m,p=c.createContext({}),b=i(162),x=["id","bsPrefix","className","type","isValid","isInvalid","as"],N=c.forwardRef((function(e,a){var i=e.id,t=e.bsPrefix,n=e.className,o=e.type,f=void 0===o?"checkbox":o,v=e.isValid,m=void 0!==v&&v,u=e.isInvalid,N=void 0!==u&&u,Z=e.as,h=void 0===Z?"input":Z,y=(0,r.Z)(e,x),P=(0,c.useContext)(p).controlId;return t=(0,b.vE)(t,"form-check-input"),(0,d.jsx)(h,(0,s.Z)((0,s.Z)({},y),{},{ref:a,type:f,id:i||P,className:l()(n,t,m&&"is-valid",N&&"is-invalid")}))}));N.displayName="FormCheckInput";var Z=N,h=["bsPrefix","className","htmlFor"],y=c.forwardRef((function(e,a){var i=e.bsPrefix,t=e.className,n=e.htmlFor,o=(0,r.Z)(e,h),f=(0,c.useContext)(p).controlId;return i=(0,b.vE)(i,"form-check-label"),(0,d.jsx)("label",(0,s.Z)((0,s.Z)({},o),{},{ref:a,htmlFor:n||f,className:l()(t,i)}))}));y.displayName="FormCheckLabel";var P=y,j=i(1701),w=["id","bsPrefix","bsSwitchPrefix","inline","disabled","isValid","isInvalid","feedbackTooltip","feedback","feedbackType","className","style","title","type","label","children","as"],I=c.forwardRef((function(e,a){var i=e.id,t=e.bsPrefix,n=e.bsSwitchPrefix,o=e.inline,f=void 0!==o&&o,v=e.disabled,m=void 0!==v&&v,x=e.isValid,N=void 0!==x&&x,h=e.isInvalid,y=void 0!==h&&h,I=e.feedbackTooltip,F=void 0!==I&&I,k=e.feedback,C=e.feedbackType,g=e.className,E=e.style,R=e.title,z=void 0===R?"":R,V=e.type,T=void 0===V?"checkbox":V,S=e.label,L=e.children,O=e.as,H=void 0===O?"input":O,G=(0,r.Z)(e,w);t=(0,b.vE)(t,"form-check"),n=(0,b.vE)(n,"form-switch");var M=(0,c.useContext)(p).controlId,W=(0,c.useMemo)((function(){return{controlId:i||M}}),[M,i]),X=!L&&null!=S&&!1!==S||(0,j.XW)(L,P),A=(0,d.jsx)(Z,(0,s.Z)((0,s.Z)({},G),{},{type:"switch"===T?"checkbox":T,ref:a,isValid:N,isInvalid:y,disabled:m,as:H}));return(0,d.jsx)(p.Provider,{value:W,children:(0,d.jsx)("div",{style:E,className:l()(g,X&&t,f&&"".concat(t,"-inline"),"switch"===T&&n),children:L||(0,d.jsxs)(d.Fragment,{children:[A,X&&(0,d.jsx)(P,{title:z,children:S}),k&&(0,d.jsx)(u,{type:C,tooltip:F,children:k})]})})})}));I.displayName="FormCheck";var F=Object.assign(I,{Input:Z,Label:P}),k=i(4942),C=(i(2391),["bsPrefix","type","size","htmlSize","id","className","isValid","isInvalid","plaintext","readOnly","as"]),g=c.forwardRef((function(e,a){var i,t,n=e.bsPrefix,o=e.type,f=e.size,v=e.htmlSize,m=e.id,u=e.className,x=e.isValid,N=void 0!==x&&x,Z=e.isInvalid,h=void 0!==Z&&Z,y=e.plaintext,P=e.readOnly,j=e.as,w=void 0===j?"input":j,I=(0,r.Z)(e,C),F=(0,c.useContext)(p).controlId;(n=(0,b.vE)(n,"form-control"),y)?i=(0,k.Z)({},"".concat(n,"-plaintext"),!0):(t={},(0,k.Z)(t,n,!0),(0,k.Z)(t,"".concat(n,"-").concat(f),f),i=t);return(0,d.jsx)(w,(0,s.Z)((0,s.Z)({},I),{},{type:o,size:v,ref:a,readOnly:P,id:m||F,className:l()(u,i,N&&"is-valid",h&&"is-invalid","color"===o&&"".concat(n,"-color"))}))}));g.displayName="FormControl";var E=Object.assign(g,{Feedback:u}),R=(0,i(6543).Z)("form-floating"),z=["controlId","as"],V=c.forwardRef((function(e,a){var i=e.controlId,t=e.as,l=void 0===t?"div":t,n=(0,r.Z)(e,z),o=(0,c.useMemo)((function(){return{controlId:i}}),[i]);return(0,d.jsx)(p.Provider,{value:o,children:(0,d.jsx)(l,(0,s.Z)((0,s.Z)({},n),{},{ref:a}))})}));V.displayName="FormGroup";var T=V,S=i(2677),L=["as","bsPrefix","column","visuallyHidden","className","htmlFor"],O=c.forwardRef((function(e,a){var i=e.as,t=void 0===i?"label":i,n=e.bsPrefix,o=e.column,f=e.visuallyHidden,v=e.className,m=e.htmlFor,u=(0,r.Z)(e,L),x=(0,c.useContext)(p).controlId;n=(0,b.vE)(n,"form-label");var N="col-form-label";"string"===typeof o&&(N="".concat(N," ").concat(N,"-").concat(o));var Z=l()(v,n,f&&"visually-hidden",o&&N);return m=m||x,o?(0,d.jsx)(S.Z,(0,s.Z)({ref:a,as:"label",className:Z,htmlFor:m},u)):(0,d.jsx)(t,(0,s.Z)({ref:a,className:Z,htmlFor:m},u))}));O.displayName="FormLabel",O.defaultProps={column:!1,visuallyHidden:!1};var H=O,G=["bsPrefix","className","id"],M=c.forwardRef((function(e,a){var i=e.bsPrefix,t=e.className,n=e.id,o=(0,r.Z)(e,G),f=(0,c.useContext)(p).controlId;return i=(0,b.vE)(i,"form-range"),(0,d.jsx)("input",(0,s.Z)((0,s.Z)({},o),{},{type:"range",ref:a,className:l()(t,i),id:n||f}))}));M.displayName="FormRange";var W=M,X=["bsPrefix","size","htmlSize","className","isValid","isInvalid","id"],A=c.forwardRef((function(e,a){var i=e.bsPrefix,t=e.size,n=e.htmlSize,o=e.className,f=e.isValid,v=void 0!==f&&f,m=e.isInvalid,u=void 0!==m&&m,x=e.id,N=(0,r.Z)(e,X),Z=(0,c.useContext)(p).controlId;return i=(0,b.vE)(i,"form-select"),(0,d.jsx)("select",(0,s.Z)((0,s.Z)({},N),{},{size:n,ref:a,className:l()(o,i,t&&"".concat(i,"-").concat(t),v&&"is-valid",u&&"is-invalid"),id:x||Z}))}));A.displayName="FormSelect";var B=A,U=["bsPrefix","className","as","muted"],_=c.forwardRef((function(e,a){var i=e.bsPrefix,t=e.className,n=e.as,o=void 0===n?"small":n,c=e.muted,f=(0,r.Z)(e,U);return i=(0,b.vE)(i,"form-text"),(0,d.jsx)(o,(0,s.Z)((0,s.Z)({},f),{},{ref:a,className:l()(t,i,c&&"text-muted")}))}));_.displayName="FormText";var q=_,D=c.forwardRef((function(e,a){return(0,d.jsx)(F,(0,s.Z)((0,s.Z)({},e),{},{ref:a,type:"switch"}))}));D.displayName="Switch";var J=Object.assign(D,{Input:F.Input,Label:F.Label}),K=["bsPrefix","className","children","controlId","label"],Q=c.forwardRef((function(e,a){var i=e.bsPrefix,t=e.className,n=e.children,o=e.controlId,c=e.label,f=(0,r.Z)(e,K);return i=(0,b.vE)(i,"form-floating"),(0,d.jsxs)(T,(0,s.Z)((0,s.Z)({ref:a,className:l()(t,i),controlId:o},f),{},{children:[n,(0,d.jsx)("label",{htmlFor:o,children:c})]}))}));Q.displayName="FloatingLabel";var Y=Q,$=["className","validated","as"],ee={_ref:o().any,validated:o().bool,as:o().elementType},ae=c.forwardRef((function(e,a){var i=e.className,t=e.validated,n=e.as,o=void 0===n?"form":n,c=(0,r.Z)(e,$);return(0,d.jsx)(o,(0,s.Z)((0,s.Z)({},c),{},{ref:a,className:l()(i,t&&"was-validated")}))}));ae.displayName="Form",ae.propTypes=ee;var ie=Object.assign(ae,{Group:T,Control:E,Floating:R,Check:F,Switch:J,Label:H,Text:q,Range:W,Select:B,FloatingLabel:Y})}}]);
//# sourceMappingURL=207.7d07684e.chunk.js.map