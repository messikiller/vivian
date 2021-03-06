function loader_negative_value(role_id)
{
    var url = 'api/getNegPosVal.php?role_id=' + role_id + '&type=neg';
    $.get(url, function(data, status){
        $('#negative-value').val(data);
    });
}

function loader_positive_value(role_id)
{
    var url = 'api/getNegPosVal.php?role_id=' + role_id + '&type=pos';
    $.get(url, function(data, status){
        $('#positive-value').val(data);
    });
}

function loader_blood_value(role_id)
{
    var url = 'api/getBlood.php?role_id=' + role_id;
    $.get(url, function(data, status){
        $('#blood-value').val(data);
    });
}

function loader_killed_times(role_id)
{
    var url = 'api/getKilledTimes.php?role_id=' + role_id;
    $.get(url, function(data, status){
        $('#killed-times').val(data);
    });
}

function loader_protect_times(role_id)
{
    var url = 'api/getProtectTimes.php?role_id=' + role_id;
    $.get(url, function(data, status){
        $('#protect-times').val(data);
    });
}
