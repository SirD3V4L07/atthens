function paintContent () {
    contentHandle = document.getElementById("content");
    if document.getElementById("promptInput").value == "test" {
        contentHandle = "Pass";
        document.getElementById("content").value = contentHandle;
    }
}