var role_id = $('#role_id').val();

loader_honor(role_id);
loader_neagtive_value(role_id);
loader_blood_value(role_id);
loader_positive_value(role_id);
loader_killed_times(role_id);
loader_behavior(role_id);

$('button.attack').click(function(){
    var type = $(this).attr('data-option');
    var url = 'api/attack.php?role_id=' + role_id + '&type=' + type;
    $.get(url, function(data, status){
        alert(data);
        loader_blood_value(role_id);
        loader_killed_times(role_id);
    });
});

$('#neg-edu-btn').click(function(){
    var content = prompt("请输入邪恶留言:","");
    if (content) {
        var url = 'api/addBehavior.php';
        var data = {
            'role_id': role_id,
            'type': 'neg',
            'content': content
        };
        alert(data);
        $.post(url, data, function(){
            loader_behavior(role_id);
            alert('成功养成一条邪恶行为!');
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
            loader_behavior(role_id);
            alert('成功养成一条正义行为!');
        });
    }
});
