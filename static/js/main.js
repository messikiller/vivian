var role_id = $('#role_id').val();

loader_blood_value(role_id);
loader_negative_value(role_id);
loader_positive_value(role_id);
loader_killed_times(role_id);
loader_protect_times(role_id);

$('#neg-edu-btn').click(function(){
    window.location.href="add_neg_msg.html";
});

$('#pos-edu-btn').click(function(){
    window.location.href="add_pos_msg.html";
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

$('button.protect').click(function(){
    var url = 'api/protect.php?role_id=' + role_id;
    $.get(url, function(data, status){
        alert('成功添加一次保护，剩余可用的保护次数：'+data);
        loader_protect_times(role_id);
    });
});
