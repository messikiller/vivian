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

function loader_behavior(role_id)
{
    var url = 'api/getBehavior.php?role_id=' + role_id;
    $.get(url, function(data, status){
        var json_obj = eval("("+data+")");
        var pos_str = '';
        var neg_str = '';

        for (var i in json_obj) {
            json = json_obj[i];
            if (json) {
                if (parseInt(json.behavior_type) == 1) {
                    pos_str += json.o_time + ':  ';
                    pos_str += json.behavior + '\r\n';
                } else if(parseInt(json.behavior_type) == 0) {
                    neg_str += json.o_time + ':  ';
                    neg_str += json.behavior + '\r\n';
                }
            }
        }

        $('#pos-message').val(pos_str);
        $('#neg-message').val(neg_str);
    });
}
