//console.log('Baby it works');

function loadStory(){
    var storyName = document.getElementById("name_input").value;
    var storyHTML = localStorage.getItem(storyName)

    document.getElementById("story_editor").value = storyHTML;

}

function saveStory(){
    var storyName = document.getElementById("name_input").value;
    var storyHTML = document.getElementById("story_editor").value;

    localStorage.setItem(storyName, storyHTML);
}

function displayStory(){
    var storyHTML = document.getElementById("story_editor").value
    document.getElementById("story_display").innerHTML = storyHTML;
}