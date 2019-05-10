(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{368:function(a,t,s){"use strict";s.r(t);var n=s(25),e=Object(n.a)({},function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h2",{attrs:{id:"_0-准备环境"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_0-准备环境","aria-hidden":"true"}},[a._v("#")]),a._v(" 0. 准备环境")]),a._v(" "),s("p",[a._v("在使用 Nginx 前，最好先去创建一个 "),s("router-link",{attrs:{to:"/OS/centos/01-add-user.html"}},[a._v("Linux 用户")]),a._v(" 账号。")],1),a._v(" "),s("h3",{attrs:{id:"基本环境"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基本环境","aria-hidden":"true"}},[a._v("#")]),a._v(" 基本环境")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("yum -y "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" gcc gcc-c++ autoconf pcre-devel "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("make")]),a._v(" automake\nyum -y "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("wget")]),a._v(" httpd-tools vim\n")])])]),s("h3",{attrs:{id:"管理资源"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#管理资源","aria-hidden":"true"}},[a._v("#")]),a._v(" 管理资源")]),a._v(" "),s("p",[a._v("在用户目录下新建几个文件夹来管理所有的资源。")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# app 为 application 简写")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# backup 备份")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# logs 日志")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("mkdir")]),a._v(" app backup logs\n")])])]),s("h3",{attrs:{id:"安装工具"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装工具","aria-hidden":"true"}},[a._v("#")]),a._v(" 安装工具")]),a._v(" "),s("p",[a._v("RPM、YUM 和 APT 都可以安装和删除包。不过，个人习惯用 YUM 安装包，使用 "),s("code",[a._v("rpm -ql xxx")]),a._v(" 查看包相关的路径。")]),a._v(" "),s("h2",{attrs:{id:"_1-nginx"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-nginx","aria-hidden":"true"}},[a._v("#")]),a._v(" 1. Nginx")]),a._v(" "),s("h3",{attrs:{id:"检测源"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#检测源","aria-hidden":"true"}},[a._v("#")]),a._v(" 检测源")]),a._v(" "),s("p",[a._v("首先需要检查 yum 源是否有 Nginx，当没有的时候需要自己添加源。")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("yum list "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("grep")]),a._v(" nginx\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# nginx.x86_64                             1:1.12.2-2.el7                  epel   ")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# nginx-all-modules.noarch                 1:1.12.2-2.el7                  epel   ")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# nginx-filesystem.noarch                  1:1.12.2-2.el7    ")]),a._v("\n")])])]),s("p",[s("a",{attrs:{href:"http://nginx.org/en/download.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("官网"),s("OutboundLink")],1),a._v(" 可见 Nginx 稳定版本已经是 "),s("code",[a._v("1.14.2")]),a._v(" ，所以需要"),s("a",{attrs:{href:"http://nginx.org/en/linux_packages.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("修改"),s("OutboundLink")],1),a._v(" yum 源。")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("vim /etc/yum.repos.d/nginx.repo\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("cat")]),a._v(" /etc/yum.repos.d/nginx.repo\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# [nginx-stable]")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# name=nginx stable repo")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# baseurl=http://nginx.org/packages/centos/$releasever/$basearch/")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# gpgcheck=1")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# enabled=1")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# gpgkey=https://nginx.org/keys/nginx_signing.key")]),a._v("\n\n")])])]),s("p",[a._v("重新查看源。")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("yum list "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("grep")]),a._v(" nginx \n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# nginx.x86_64                             1:1.14.2-1.el7_4.ngx            nginx-stable")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# nginx-all-modules.noarch                 1:1.12.2-2.el7                  epel   ")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# nginx-debug.x86_64                       1:1.8.0-1.el7.ngx               nginx-stable")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# nginx-debuginfo.x86_64                   1:1.14.2-1.el7_4.ngx            nginx-stable")]),a._v("\n")])])]),s("h3",{attrs:{id:"安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装","aria-hidden":"true"}},[a._v("#")]),a._v(" 安装")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("yum "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" nginx\n")])])]),s("h3",{attrs:{id:"查看版本"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查看版本","aria-hidden":"true"}},[a._v("#")]),a._v(" 查看版本")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("nginx -v\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# nginx version: nginx/1.14.2")]),a._v("\n")])])])])},[],!1,null,null,null);t.default=e.exports}}]);