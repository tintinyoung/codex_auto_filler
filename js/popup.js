var elYes = document.getElementById("agree");
var elNo = document.getElementById("disagree");
elYes.addEventListener('change', function(e) {
    chrome.storage.local.set({choise: 'yes'})
})

elNo.addEventListener('change', function() {
    chrome.storage.local.get('choise', function(item) {
        console.log('Your choise:' + item.choise);
    })
    //console.log('You have chosen *NO*!');
})