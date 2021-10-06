(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{322:function(e,t,n){e.exports=n.p+"assets/img/1.bc931ddb.png"},323:function(e,t,n){e.exports=n.p+"assets/img/2.180799fa.png"},324:function(e,t,n){e.exports=n.p+"assets/img/2-1.37926435.png"},325:function(e,t,n){e.exports=n.p+"assets/img/3.ac9c8afb.png"},326:function(e,t,n){e.exports=n.p+"assets/img/3-1.91fb13ee.png"},327:function(e,t,n){e.exports=n.p+"assets/img/3-2.ca4e9116.png"},328:function(e,t,n){e.exports=n.p+"assets/img/4.c1e167fa.png"},329:function(e,t,n){e.exports=n.p+"assets/img/5.1c2dc0da.png"},409:function(e,t,n){"use strict";n.r(t);var a=n(29),s=Object(a.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"write-a-new-plug-in"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#write-a-new-plug-in"}},[e._v("#")]),e._v(" Write a new plug-in")]),e._v(" "),a("p",[e._v("If you master the skills of web development, developing ihelper plug-ins is very simple!")]),e._v(" "),a("p",[e._v("By configuring a simple configuration file, just write your web project as usual and drag the configuration file into ihelper. You can add a new plug-in. The content and function of the plug-in are entirely up to you.")]),e._v(" "),a("p",[e._v("Ihelper provides rich APIs for plug-ins to write and read data or deal with the operating system.")]),e._v(" "),a("p",[e._v("You can download a plug-in here"),a("a",{attrs:{href:"https://ihelper-1253668581.cos.ap-nanjing.myqcloud.com/iHelper-plugin.rar",target:"_blank",rel:"noopener noreferrer"}},[e._v("demo"),a("OutboundLink")],1),e._v(", help you quickly start.")]),e._v(" "),a("p",[e._v("Let's start writing a new plug-in!")]),e._v(" "),a("h2",{attrs:{id:"write-plug-in-configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#write-plug-in-configuration"}},[e._v("#")]),e._v(" Write plug-in configuration")]),e._v(" "),a("p",[e._v("Before developing a new plug-in, we need to write a configuration file "),a("code",[e._v("plugin.json")]),e._v(" Used to describe the basic information and behavior of the plug-in, and to open certain permissions control.")]),e._v(" "),a("p",[e._v("We write a simple configuration and only need a few necessary configurations.")]),e._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"name"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"my first plugin"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"version"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"0.0.1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"logo"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"logo.png"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"desc"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"plugin describe"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"main"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"dist/index.html"')]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br")])]),a("p",[e._v("At the same time, we need to prepare the plug-in entry file and logo image in the directory.")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("|——dist\n|     |_index.html\n|\n|——logo.png\n|\n|-plugin.json\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br")])]),a("p",[e._v("After writing the configuration file, drag and drop "),a("code",[e._v("plugin.json")]),e._v(" into iHelper. The panel for adding plug-ins will appear. Click Add plug-in to add a plug-in.")]),e._v(" "),a("p",[a("img",{attrs:{src:n(322),alt:""}})]),e._v(" "),a("p",[e._v("Like "),a("code",[e._v("logo")]),e._v(" and "),a("code",[e._v("main")]),e._v(" value is the path configuration, when looking for the target file. It will search based on the current folder path of "),a("code",[e._v("plugin.json")]),e._v(". All configuration information can be found in "),a("RouterLink",{attrs:{to:"/en/guide/advanced/plugin-config.html"}},[e._v("Plug-in configuration manual")]),e._v("To view.")],1),e._v(" "),a("h2",{attrs:{id:"plug-in-developer-mode"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#plug-in-developer-mode"}},[e._v("#")]),e._v(" Plug-in developer mode")]),e._v(" "),a("p",[e._v("After successfully adding a plug-in, we can find the plug-in in the "),a("strong",[e._v("Developer")]),e._v(" panel, and click "),a("strong",[e._v("Start")]),e._v(" to run it.")]),e._v(" "),a("p",[a("img",{attrs:{src:n(323),alt:""}})]),e._v(" "),a("p",[e._v("At this time, a new plug-in form will be opened, and the address of the form is the "),a("code",[e._v("main")]),e._v(" configuration value of "),a("code",[e._v("plugin.json")]),e._v(".")]),e._v(" "),a("p",[e._v("When the plug-in is opened in developer mode, the developer tools of the plug-in form will be launched together. You can also display and hide the developer tools through the "),a("strong",[e._v("switch developer tools")]),e._v(" button on the head.")]),e._v(" "),a("p",[a("img",{attrs:{src:n(324),alt:""}})]),e._v(" "),a("p",[e._v("During development, we can set the configuration of the specified development time to avoid frequent modification of the configuration entry file information during plug-in development/release.")]),e._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"main"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"dist/index.html"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"dev"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"main"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"http://localhost:9528"')]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br")])]),a("p",[e._v("In this way, when the plug-in is opened in development mode, it will first read the entry address of "),a("code",[e._v("dev.main")]),e._v(" to open the plug-in address.")]),e._v(" "),a("p",[e._v("Similarly, if you need to verify the functionality of the plug-in file after packaging. You can also set the value of "),a("code",[e._v("dev.main")]),e._v(" to the file path after packaging.")]),e._v(" "),a("p",[e._v("It should be noted that after each modification of the plug-in configuration. You need to click the "),a("strong",[e._v("Reload Plugin")]),e._v(" button to update the latest configuration information of the plugin")]),e._v(" "),a("h2",{attrs:{id:"call-plug-in-api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#call-plug-in-api"}},[e._v("#")]),e._v(" Call plug-in API")]),e._v(" "),a("p",[e._v("iHelper provides a large number of APIs for the plug-in, which is convenient for the plug-in to interact with the operating system, communicate with other plug-ins, and access the database. There are other more method attributes.")]),e._v(" "),a("p",[e._v("iHelper mounts an api method named "),a("code",[e._v("iHelper")]),e._v(" to the global object (window) of the plug-in. You can call this method on the page.")]),e._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// Get the information of the currently logged in user")]),e._v("\niHelper"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("getUser")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// Plug-in database query")]),e._v("\niHelper"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("db"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("find")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br")])]),a("p",[e._v("All APIs can be consulted in "),a("RouterLink",{attrs:{to:"/api/"}},[e._v("Plugin API Manual")]),e._v(".")],1),e._v(" "),a("h2",{attrs:{id:"plug-in-packaging"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#plug-in-packaging"}},[e._v("#")]),e._v(" Plug-in packaging")]),e._v(" "),a("p",[e._v("Very happy to be at this moment! Your proud work has been completed. Is preparing to share with others to use.")]),e._v(" "),a("p",[e._v("After the plug-in function is completed, you can pack the plug-in into a compressed package in the form of packaging. And provide this compressed package to others for local installation to use your plug-in.")]),e._v(" "),a("p",[a("strong",[e._v("Before packaging, it is best to check the configuration file of the plug-in to confirm whether the configuration is correct")])]),e._v(" "),a("p",[e._v("In the "),a("strong",[e._v("Developer")]),e._v(" panel, click the "),a("strong",[e._v("Package")]),e._v(" button. This plug-in can be packaged, after the package is completed. The packaged directory will be automatically opened.")]),e._v(" "),a("p",[a("img",{attrs:{src:n(325),alt:""}})]),e._v(" "),a("p",[a("img",{attrs:{src:n(326),alt:""}})]),e._v(" "),a("p",[e._v("We can drag and drop the plug-in compressed package into iHelper for installation and use.")]),e._v(" "),a("p",[a("img",{attrs:{src:n(327),alt:""}})]),e._v(" "),a("h2",{attrs:{id:"plug-in-release"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#plug-in-release"}},[e._v("#")]),e._v(" Plug-in release")]),e._v(" "),a("p",[e._v("Our plug-in can be used by more people, now we publish the plug-in to the plug-in store! 😀")]),e._v(" "),a("p",[e._v("In the "),a("strong",[e._v("Developer")]),e._v(" panel, click the "),a("strong",[e._v("Publish")]),e._v(" button. You can publish the plug-in to the plug-in store.")]),e._v(" "),a("p",[a("img",{attrs:{src:n(328),alt:""}})]),e._v(" "),a("p",[e._v("Because the publishing plug-in needs to be bound to the user's account, if there is no login account before publishing, the user needs to register and log in.")]),e._v(" "),a("p",[e._v("The registration process is very simple and no information is collected.")]),e._v(" "),a("p",[e._v("The plug-in release needs to be configured with a version number, and the version number must be greater than the version number of the last released version. It’s best to also check the configuration file of the plug-in to confirm whether the configuration is correct")]),e._v(" "),a("p",[e._v("When everything is ready, click the publish button. Fill in the description of this release and submit it. "),a("s",[e._v("We")]),e._v(" I will quickly handle the review of the plug-in. After the review is passed, you can see your proud work in the store (•̀ ω • ́ )✧")]),e._v(" "),a("p",[a("img",{attrs:{src:n(329),alt:""}})])])}),[],!1,null,null,null);t.default=s.exports}}]);