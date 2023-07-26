(this["webpackJsonptime-entries"]=this["webpackJsonptime-entries"]||[]).push([[0],{30:function(e,t,n){},32:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var r=n(8),c=n.n(r),a=n(22),s=n.n(a),i=(n(30),n(12)),u=n.n(i),o=n(14),l=n(13),j=(n(32),n(10)),d=n(25),h=n(3),b=n(2),f=function(){var e=Object(r.useState)([]),t=Object(l.a)(e,2),n=t[0],c=t[1];Object(r.useEffect)((function(){var e=h.a.firestore().collection("times").where("user_id","==",h.a.auth().currentUser.uid).onSnapshot((function(e){var t=[];e.forEach((function(e){t.push(Object(d.a)({id:e.id},e.data()))})),c(t)}));return function(){return e()}}),[]);var a=function(e){if(e){var t="celsius"===e.metric?"\xb0C":"\xb0F";return e.temperature?e.sky+" "+parseInt(e.temperature)+t:"-"}};return Object(b.jsxs)("div",{children:[Object(b.jsx)("h2",{children:"Times List"}),Object(b.jsx)("ol",{children:n.map((function(e){return Object(b.jsx)("li",{children:Object(b.jsxs)("div",{className:"time-entry",children:[Object(b.jsx)("span",{children:Object(b.jsx)("img",{height:"50",width:"50",src:e.imageUrl||"https://icons-for-free.com/iconfiles/png/512/clock+minute+time+timer+watch+icon-1320086045717163975.png"})}),Object(b.jsx)("span",{children:e.title}),Object(b.jsx)("span",{children:e.location}),Object(b.jsx)("span",{children:a(e.weather)}),Object(b.jsx)("code",{className:"time",children:e.time_seconds}),Object(b.jsx)("button",{onClick:function(){return t=e.id,n=e.imagePath,h.a.firestore().collection("times").doc(t).delete(),void h.a.storage().ref(n).delete();var t,n},children:"Delete"})]})},e.id)}))})]})},O=function(){var e=Object(r.useState)(""),t=Object(l.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)(0),s=Object(l.a)(a,2),i=s[0],u=s[1],o=Object(r.useState)(""),j=Object(l.a)(o,2),d=j[0],f=j[1],O=Object(r.useState)(),p=Object(l.a)(O,2),m=p[0],x=p[1];return Object(b.jsxs)("form",{onSubmit:function(e){e.preventDefault(),h.a.firestore().collection("times").add({title:n,time_seconds:parseInt(i),location:d,imageUrl:m?"https://www.google.com/images/spin-32.gif?a":null,user_id:h.a.auth().currentUser.uid}).then((function(e){if(c(""),u(0),f(""),m){var t=h.a.auth().currentUser.uid+"/"+e.id+"/"+m.name;return h.a.storage().ref(t).put(m).then((function(t){return t.ref.getDownloadURL().then((function(n){return e.update({imageUrl:n,imagePath:t.metadata.fullPath})}))}))}}))},children:[Object(b.jsx)("h4",{children:"Add Time Entry"}),Object(b.jsxs)("div",{children:[Object(b.jsx)("label",{children:"Title"}),Object(b.jsx)("input",{type:"text",value:n,onChange:function(e){return c(e.currentTarget.value)}})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("label",{children:"Time"}),Object(b.jsx)("input",{type:"number",value:i,onChange:function(e){return u(e.currentTarget.value)}})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("label",{children:"Location"}),Object(b.jsx)("input",{type:"text",value:d,onChange:function(e){return f(e.currentTarget.value)}})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("label",{children:"Image"}),Object(b.jsx)("input",{type:"file",accept:"image/*",onChange:function(e){return x(e.target.files[0])}})]}),Object(b.jsx)("button",{children:"Add Time Entry"})]})},p=function(){var e=Object(r.useState)(),t=Object(l.a)(e,2),n=t[0],c=t[1];Object(r.useEffect)(Object(o.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n){e.next=5;break}return e.next=3,h.a.firestore().collection("users").doc(h.a.auth().currentUser.uid).get();case 3:(t=e.sent).exists&&c(t.data().username);case 5:case"end":return e.stop()}}),e)}))),[n]);var a=function(){var e=Object(o.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),h.a.firestore().collection("users").doc(h.a.auth().currentUser.uid).update({username:n}).then((function(e){console.log(e),alert("Username updated successfully")})).catch((function(e){console.log(e),alert("Username already taken")}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),s=function(){var e=Object(o.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),n=h.a.auth().currentUser,h.a.firestore().collection("users").doc(h.a.auth().currentUser.uid).delete().then(function(){var e=Object(o.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),e.next=3,n.delete();case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){console.log(e),alert("Error deleting user")}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(b.jsxs)("div",{className:"footer",children:[Object(b.jsx)("h2",{children:"Settings"}),Object(b.jsx)("button",{onClick:s,children:"Delete account"}),Object(b.jsxs)("form",{onSubmit:a,children:[Object(b.jsxs)("div",{children:[Object(b.jsx)("label",{children:"Change Username"}),Object(b.jsx)("input",{type:"text",value:n,onChange:function(e){return c(e.currentTarget.value)}})]}),Object(b.jsx)("button",{children:"Submit"})]})]})},m=function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("div",{className:"header",children:[Object(b.jsxs)("h1",{children:["Welcome to Time Tracker, ",j.a.auth().currentUser.displayName,"!"]}),Object(b.jsx)("button",{onClick:function(){return j.a.auth().signOut()},children:"Sign out"})]}),Object(b.jsx)(f,{}),Object(b.jsx)(O,{}),Object(b.jsx)(p,{})]})},x=function(){var e=Object(r.useState)(),t=Object(l.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)(),s=Object(l.a)(a,2),i=s[0],d=s[1],h=Object(r.useState)(""),f=Object(l.a)(h,2),O=f[0],p=f[1];Object(r.useEffect)(Object(o.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i){e.next=7;break}return c(!0),e.next=4,j.a.firestore().collection("users").doc(j.a.auth().currentUser.uid).get();case 4:(t=e.sent).exists&&d(t.data()),c(!1);case 7:case"end":return e.stop()}}),e)}))),[i]);var x=function(){var e=Object(o.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),j.a.firestore().collection("users").doc(j.a.auth().currentUser.uid).set({name:j.a.auth().currentUser.displayName,email:j.a.auth().currentUser.email,username:O}).then((function(e){console.log(e),d(!0)})).catch((function(e){console.log(e),alert("Username already taken")}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return i?Object(b.jsx)(m,{}):n?"Loading...":Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("div",{className:"header",children:[Object(b.jsxs)("h1",{children:["Please select a username, ",j.a.auth().currentUser.displayName]}),Object(b.jsx)("button",{onClick:function(){return j.a.auth().signOut()},children:"Sign out"})]}),Object(b.jsxs)("form",{onSubmit:x,children:[Object(b.jsxs)("div",{children:[Object(b.jsx)("label",{children:"Username"}),Object(b.jsx)("input",{type:"text",value:O,onChange:function(e){return p(e.currentTarget.value)}})]}),Object(b.jsx)("button",{children:"Submit"})]})]})},g=n(23),v=n.n(g),w=function(){var e={signInFlow:"popup",signInOptions:[j.a.auth.EmailAuthProvider.PROVIDER_ID,j.a.auth.GoogleAuthProvider.PROVIDER_ID],callbacks:{signInSuccessWithAuthResult:function(){return!1}}};return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h1",{children:"Time Tracker"}),Object(b.jsx)("p",{children:"Please sign-in:"}),Object(b.jsx)(v.a,{uiConfig:e,firebaseAuth:j.a.auth()})]})};var y=function(){var e=Object(r.useState)(!1),t=Object(l.a)(e,2),n=t[0],c=t[1];return Object(r.useEffect)((function(){j.a.auth().onAuthStateChanged(function(){var e=Object(o.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:c(!!t);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[]),Object(b.jsx)("div",{className:"App",children:n?Object(b.jsx)(x,{}):Object(b.jsx)(w,{})})},S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,48)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),r(e),c(e),a(e),s(e)}))};n(46);(h.a.initializeApp({apiKey:"AIzaSyBY0y7adhWArVXBiFeyCvw0i5VV5RHzOwo",authDomain:"time-entries-12b5d.firebaseapp.com",projectId:"time-entries-12b5d",storageBucket:"time-entries-12b5d.appspot.com",messagingSenderId:"705048205294",appId:"1:705048205294:web:ab1468dbfa3a99450560ff",databaseURL:"https://time-entries-12b5d-default-rtdb.firebaseio.com/",measurementId:"G-CP628CHRQB"}),"localhost"===window.location.hostname)&&(h.a.auth().useEmulator("http://localhost:9099"),h.a.firestore().useEmulator("localhost",8080),h.a.storage().useEmulator("localhost",9199),h.a.functions().useEmulator("localhost",5001));s.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(y,{})}),document.getElementById("root")),S()}},[[47,1,2]]]);
//# sourceMappingURL=main.3d22e28f.chunk.js.map