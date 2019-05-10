(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{383:function(s,a,t){"use strict";t.r(a);var n=t(25),e=Object(n.a)({},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"_1-创建-ssh-key-步骤"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-创建-ssh-key-步骤","aria-hidden":"true"}},[s._v("#")]),s._v(" 1. 创建 SSH Key 步骤")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 1. 利用邮箱生成 ssh key")]),s._v("\nssh-keygen -t rsa -b 4096 -C "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"your_email@example.com"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 2. 输入 rsa 文件名, 默认为 id_rsa")]),s._v("\nEnter a "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("which")]),s._v(" to save the key "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("/home/you/.ssh/id_rsa"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(": "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Press enter"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# id_rsa_new")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 3. 输入密码短语（无密码短语为空）")]),s._v("\nEnter passphrase "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("empty "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" no passphrase"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(": "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Type a passphrase"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\nEnter same passphrase again: "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Type passphrase again"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])])]),t("h2",{attrs:{id:"_2-修复-ssh-add-存在的问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-修复-ssh-add-存在的问题","aria-hidden":"true"}},[s._v("#")]),s._v(" 2. 修复 ssh-add 存在的问题 🎉")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 1. 生成新的 rsa 后需要链接到 ssh")]),s._v("\nssh-add ~/.ssh/id_rsa_new\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 2. 然后此处会报错 Could not open a connection to your authentication agent.")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 3. 需要修复该问题")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("eval")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),s._v("ssh-agent -s"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v('"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 4. 再一次将新生成的 rsa 链接到 ssh")]),s._v("\nssh-add ~/.ssh/id_rsa_new\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 5. 显示成功 ")]),s._v("\nIdentity added: /home/yuan/.ssh/id_rsa_new "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("your_email@example.com"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 6. 测试是否成功")]),s._v("\nssh-add -l\n")])])])])},[],!1,null,null,null);a.default=e.exports}}]);