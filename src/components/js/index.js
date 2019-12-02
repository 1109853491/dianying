/*
* @Author: Administrator
* @Date:   2019-12-02 09:38:28
* @Last Modified by:   Administrator
* @Last Modified time: 2019-12-02 11:48:36
*/
import Vue from 'vue';
import MessageBox from './MessageBox';

export var messageBox = (function(){
	var defaults = { //默认值
		title:'',
		content:'',
		cancel:'',
		ok:'',
		handleCancel:null,
		handleOk:null
	};
	
	var MyComponents = Vue.extend(MessageBox);
	return function(opts){//配置参数
		for( var attr in opts ){
			defaults[attr] = opts[attr]
		}

		var vm = new MyComponents({
			el:document.createElement('div'),
			data:{
				title:defaults.title,
				content:defaults.content,
				cancel:defaults.cancel,
				ok:defaults.ok
			},
			methods:{
				handleCancel(){
					defaults.handleCancel && defaults.handleCancel.call(this);
					document.body.removeChild(vm.$el);
				},
				handleOk(){
					defaults.handleOk && defaults.handleOk.call(this);
					document.body.removeChild(vm.$el);
				}
			}
		})
		document.body.appendChild(vm.$el)

	};

})();
