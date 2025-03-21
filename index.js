const GOAL= document.getElementById('goal');


document.getElementById("submit").onclick = function() {
      goal_color =calculate_color(GOAL.value);
      window.alert(goal_color);
}



function calculate_color(goal_value_string) {
    goal_color = [0, 0, 0];
    goal_color[0] = parseInt(goal_value_string[1] + goal_value_string[2], 16);
    goal_color[1] = parseInt(goal_value_string[3] + goal_value_string[4], 16);
    goal_color[2] = parseInt(goal_value_string[5] + goal_value_string[6], 16);
    return goal_color;
}