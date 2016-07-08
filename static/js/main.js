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
