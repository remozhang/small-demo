;(function() {

	var $form_add_task = $('.add-task'),
	    new_task = {},
	    task_list = {};

    init();

	$form_add_task.on('submit',function (e) {
		// 禁用默认行为
		e.preventDefault();
		// 获取新task的值
		new_task.content = $(this).find('input[name=content]').val();
		// 如果新task的值为空 则直接返回 否则继续执行
		if (!new_task.content) return;
		// 存入新task
		var result = add_task(new_task);
		if (add_task(new_task)){
			render_task_list();
		}
	})	;


	function add_task(new_task) {
		// 将新task推入task_list
		task_list.push(new_task);
		// 更新localstorage
		store.set('task_list',task_list);
		return true;
	}

	function init() {
		task_list = store.get('task_list') || [] ;
		if(task_list.length) {
			render_task_list();
		}
	}

	function render_task_list() {
		var $task_list = $('.task_list');
		$task_list.html("");
		for(var i = 0;i < task_list.length; i++) {
			var $task = render_task_tpl(task_list[i]);
			$task_list.append($task);
		}
	}

	function render_task_tpl(data) {
			var list_item_tpl = '<div class="task-item">' +
				        '<span><input type="checkbox"></span>' +
				        '<span class="task-content">' + data.content +'</span>' +
            		    '<span>delete</span>' +
				        '<span>detail</span>' +
			            '</div>';
			return $(list_item_tpl);
	}
})();

// ;(function() {
// 	var $form_add_task = $('add_task');
// 	var new_task = {};
// 	var task_list = {};

// 	$form_add_task.on("submit",function() {

// 	})
// })();