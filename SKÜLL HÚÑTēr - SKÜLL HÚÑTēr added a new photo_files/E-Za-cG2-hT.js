;/*FB_PKG_DELIM*/

__d("MUFICommentTypingSubscriptionController",["MUFITypingSubscription","SubscriptionsHandler","destroyOnUnload"],(function(a,b,c,d,e,f,g){"use strict";var h=15*1e3;function i(a){if(a){a=parseInt(a,10);return!isNaN(a)&&isFinite(a)?a:0}else return 0}function j(a){a=a&&a.feedback_typing_subscribe&&a.feedback_typing_subscribe.feedback&&a.feedback_typing_subscribe.feedback.feedback_typers&&a.feedback_typing_subscribe.feedback.feedback_typers.other_count;return i(a)}a=function(){function a(a,b){var d=this;this.destroy=function(){d.$8(),d.$4.release()};this.$1=null;this.$2=null;this.$3=b;this.$4=new(c("SubscriptionsHandler"))();b=c("MUFITypingSubscription").subscribe(String(a),function(a){d.$6(a),d.$7()});b&&this.$4.addSubscriptions(b);this.$5=!!b;c("destroyOnUnload")(this.destroy.bind(this))}var b=a.prototype;b.unsubscribe=function(){this.destroy()};b.didSubscribe=function(){return this.$5};b.$7=function(){this.$3(j(this.$1))};b.$8=function(){this.$2&&clearTimeout(this.$2),this.$2=null,this.$1=null};b.$6=function(a){var b=this;this.$8();this.$1=a;this.$2=setTimeout(function(){b.$8(),b.$7()},h)};return a}();g["default"]=a}),98);