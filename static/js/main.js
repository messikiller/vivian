var role_id = $('#role_id').val();

loader_blood_value(role_id);
loader_negative_value(role_id);
loader_positive_value(role_id);
loader_killed_times(role_id);
loader_protect_times(role_id);
loader_behavior(role_id);

$('#neg-edu-btn').click(function(){
    var content = prompt("请输入邪恶留言:","");
    if (content) {
        var url = 'api/addBehavior.php';
        var data = {
            'role_id': role_id,
            'type': 'neg',
            'content': content
        };
        $.post(url, data, function(){
            alert('成功养成一条邪恶行为!');
            loader_behavior(role_id);
            loader_negative_value(role_id);
        });
    }
});

$('#pos-edu-btn').click(function(){
    var content = prompt("请输入正义留言:","");
    if (content) {
        var url = 'api/addBehavior.php';
        var data = {
            'role_id': role_id,
            'type': 'pos',
            'content': content
        };
        $.post(url, data, function(){
            alert('成功养成一条正义行为!');
            loader_behavior(role_id);
            loader_positive_value(role_id);
        });
    }
});

$('button.attack').click(function(){
    var type = $(this).attr('data-option');
    var url = 'api/attack.php?role_id=' + role_id + '&type=' + type;
    $.get(url, function(data, status){
        var json_obj = eval("("+data+")");

        if (json_obj.status == 'protected') {
            alert('保护被触发，剩余保护次数：'+json_obj.new_protect_times);
        } else if (json_obj.status == 'killed') {
            alert('角色已经被杀死，累计杀死次数已经达到：'+json_obj.new_killed_times);
        } else if (json_obj.status == 'harmed') {
            alert('攻击完成，当前角色剩余血量：'+json_obj.new_blood_value);
        }

        loader_blood_value(role_id);
        loader_killed_times(role_id);
        loader_protect_times(role_id);
    });
});
