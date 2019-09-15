//Requires jQuery

//appendId is the element Id you want to append this fragment to
function appendFragment(HTMLtoAppend, appendId) {

    //console.log("printy boy - append fragment:  " + HTMLtoAppend);
    //console.log("printy boy - append fragment:  " + appendId);

        fragment = document.createDocumentFragment();
        var newDiv = document.createElement('div');
        newDiv.innerHTML = HTMLtoAppend;
        newDiv.setAttribute("id", appendId + '_child');

        fragment.appendChild(newDiv);

        document.getElementById(appendId).appendChild(fragment);
}

//delete selected fragment
function deleteFragment(parentId,fragmentId) {
    this_fragment = document.getElementById(fragmentId);
    document.getElementById(parentId).removeChild(this_fragment);
}

//Separates the appendId from the fragmentId so you can make multiple child threads
function appendFragmentMulti(HTMLtoAppend, appendId, fragmentId) {

        fragment = document.createDocumentFragment();
        var newDiv = document.createElement('div');
        newDiv.innerHTML = HTMLtoAppend;
        newDiv.setAttribute("id", fragmentId + '_child');

        fragment.appendChild(newDiv);

        document.getElementById(appendId).appendChild(fragment);

}

// Get from aria-expanded value for collapsibles
// ex: document.getElementById('collapse_gxZpX4d9zsAPdQvOu0hEXyMCE6l_j6C6').getAttribute('aria-expanded')
function appendFragmentOnclickTF(HTMLtoAppend, appendId, expanded) {
    if (expanded === false) {
        fragment = document.createDocumentFragment();
        var newDiv = document.createElement('div');
        newDiv.innerHTML = HTMLtoAppend;
        newDiv.setAttribute("id", appendId + '_onclick');

        fragment.appendChild(newDiv);

        document.getElementById(appendId).appendChild(fragment);
    }
    else {
        this_fragment = document.getElementById(appendId+'_onclick');
        document.getElementById(appendId).removeChild(this_fragment);
    }

}

//In case we're accessing a large database and need unique identifiers for each dataset. 
//Create random any-length string ID and check against conflicts. Random keys + random search = max speed yo
function makeId(IdArray, lengthOf) {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_-";
    while (true) {
        //Generate string
        for (var i = 0; i < lengthOf; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        //Re-generate string if it exists
        if (IdArray.includes(text)) {
            text = "";
            i = 0;
        }
            //Append new Id and return if not
        else {
            //IdArray.push(text); // Append ID to ID array
            return text;
        }
    }
}

//Makes a bootstrap collapsible with the example ID.
function makeCollapsible(Id, containerId, title) { //Append as document fragment. Then append content to Id+'_body'. Set onclicks after appending.
    //console.log("printy boy - make collapseable:  " + setHTML);
    //console.log("printy boy - make collapseable:  " + containerId);	

    setHTML = '<div class="panel panel-success">' +
                  '<div class="panel-heading" style="background-color:#7ab77e" >' +
                      '<h4 class="panel-title" id="' + Id + '" style="padding-bottom:7.6px; color:white" data-toggle="collapse" data-target="#collapse_' + Id + '">'+title+'</h4>' +
                       '<div id="collapse_' + Id + '" class="panel collapse">' +
                         '<div class="panel-body" style="background-color:#e6e6e6" id="' + Id + '_body">' +
                         '</div>' +
                       '</div>' +
                  '</div>' +
              '</div>';
    
    appendFragment(setHTML, containerId); //Append as a document fragment. Will be under containerId+'_child' and can be deleted as such.

}
