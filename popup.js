function openSearchUrl(url, searchTerm, openInNewTab, sendPostRequest, postData) {

    var newUrl;
    if (sendPostRequest) {
        newUrl = "post.html?url=" + encodeURIComponent(url) + "&postData=" + encodeURIComponent(postData.replace('${searchTerm}', searchTerm));
    } else {
        newUrl = url + searchTerm;
    }

    openUrl(newUrl, openInNewTab);
}

function loadXMLDoc(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            callback(xhr.responseXML);
        }
    };
    xhr.send(null);
}

function renderNewsFeed(feedId, feedUrl, callback) {
    var xslUrl = chrome.extension.getURL("/xsl/NewsFeedControl_" + feedId + ".xsl");
    loadXMLDoc(xslUrl, function(xsl) {

        if (feedUrl == "") {
            feedUrl = chrome.extension.getURL("/xsl/rss_feed.xml");
        }
        loadXMLDoc(feedUrl, function(xml) {
            var xsltProcessor = new XSLTProcessor();
            xsltProcessor.importStylesheet(xsl);
            var resultDocument = xsltProcessor.transformToFragment(xml, document);

            document.getElementById("NewsFeedControl_" + feedId).appendChild(resultDocument);

            callback();
        });
    });
}

function openGetPostUrl(url, openInNewTab, sendPostRequest, postData) {

    var newUrl;
    if (sendPostRequest) {
        newUrl = "post.html?url=" + encodeURIComponent(url) + "&postData=" + encodeURIComponent(postData);
    } else {
        newUrl = url;
    }

    openUrl(newUrl, openInNewTab);
}

function openUrl(url, openInNewTab) {
    if (openInNewTab) {
        chrome.tabs.create({
            "url" : url,
            "selected" : true
        });
        window.close();
    } else {
        chrome.tabs.getSelected(null, function (tab) {
            chrome.tabs.update(tab.id, {url : url, selected : true}, null);
            window.close();
        });
    }
}

function isBlank(string) {
    return string == null || string.replace(/(^\s+)|(\s+$)/g, "").length == 0;
}

function logoClick(inputTextId) {
    document.getElementById(inputTextId).focus();
}

function keyHandler(event, inputTextId, searchUrl, openInNewTab, sendPostRequest, postData, placeholderText, searchTermHandler) {
    if (event.keyCode == 13) {
        doSearch(inputTextId, searchUrl, openInNewTab, sendPostRequest, postData, placeholderText, searchTermHandler);
    }
}

function focusGained(e, textColor, placeholderText) {
    if (e.target.value == placeholderText) {
        e.target.value = "";
    }

    e.target.style.color = textColor;
}

function focusLost(e, textColor, placeholderText) {
    if (e.target.value == "") {
        e.target.value = placeholderText;
        e.target.style.color = textColor;
    }
}

function doSearch(inputTextId, searchUrl, openInNewTab, sendPostRequest, postData, placeholderText, searchTermHandler) {
    var searchTerm = document.getElementById(inputTextId).value;

    if (isBlank(searchTerm) || searchTerm == placeholderText) {
        return;
    }

    if (searchTermHandler) {
        searchTerm = searchTermHandler(searchTerm);
        document.getElementById(inputTextId).value = searchTerm;
    }

    openSearchUrl(searchUrl, searchTerm, openInNewTab, sendPostRequest, postData);
}

document.addEventListener('DOMContentLoaded', function () {

        var urlHandler = null;

        document.querySelector('#MenuItemContainer_id_1').addEventListener('click', function(){
            if (urlHandler) {
                urlHandler('http://www.edge-gamers.com/forums/cmps_index.php', function(url){
                    openGetPostUrl(url, true, false, '');
                });
            } else {
                openGetPostUrl('http://www.edge-gamers.com/forums/cmps_index.php', true, false, '');
            }
          });

        var urlHandler = null;

        document.querySelector('#MenuItemContainer_id_2').addEventListener('click', function(){
            if (urlHandler) {
                urlHandler('http://www.edge-gamers.com/forums/index.php', function(url){
                    openGetPostUrl(url, true, false, '');
                });
            } else {
                openGetPostUrl('http://www.edge-gamers.com/forums/index.php', true, false, '');
            }
          });

        var urlHandler = null;

        document.querySelector('#MenuItemContainer_id_3').addEventListener('click', function(){
            if (urlHandler) {
                urlHandler('http://egoadmins.com/gamingrobot/playerlist/', function(url){
                    openGetPostUrl(url, true, false, '');
                });
            } else {
                openGetPostUrl('http://egoadmins.com/gamingrobot/playerlist/', true, false, '');
            }
          });

        var urlHandler = null;

        document.querySelector('#MenuItemContainer_id_4').addEventListener('click', function(){
            if (urlHandler) {
                urlHandler('http://www.edge-gamers.com/forums/calendar.php', function(url){
                    openGetPostUrl(url, true, false, '');
                });
            } else {
                openGetPostUrl('http://www.edge-gamers.com/forums/calendar.php', true, false, '');
            }
          });

        var urlHandler = null;

        document.querySelector('#MenuItemContainer_id_6').addEventListener('click', function(){
            if (urlHandler) {
                urlHandler('http://www.edge-gamers.com/forums/forumdisplay.php?f=370', function(url){
                    openGetPostUrl(url, true, false, '');
                });
            } else {
                openGetPostUrl('http://www.edge-gamers.com/forums/forumdisplay.php?f=370', true, false, '');
            }
          });

        var urlHandler = null;

        document.querySelector('#MenuItemContainer_id_7').addEventListener('click', function(){
            if (urlHandler) {
                urlHandler('http://www.edge-gamers.com/forums/forumdisplay.php?f=968', function(url){
                    openGetPostUrl(url, true, false, '');
                });
            } else {
                openGetPostUrl('http://www.edge-gamers.com/forums/forumdisplay.php?f=968', true, false, '');
            }
          });

        var urlHandler = null;

        document.querySelector('#MenuItemContainer_id_8').addEventListener('click', function(){
            if (urlHandler) {
                urlHandler('http://www.edge-gamers.com/forums/forumdisplay.php?f=739', function(url){
                    openGetPostUrl(url, true, false, '');
                });
            } else {
                openGetPostUrl('http://www.edge-gamers.com/forums/forumdisplay.php?f=739', true, false, '');
            }
          });

        var urlHandler = null;

        document.querySelector('#MenuItemContainer_id_9').addEventListener('click', function(){
            if (urlHandler) {
                urlHandler('http://www.edge-gamers.com/forums/forumdisplay.php?f=371', function(url){
                    openGetPostUrl(url, true, false, '');
                });
            } else {
                openGetPostUrl('http://www.edge-gamers.com/forums/forumdisplay.php?f=371', true, false, '');
            }
          });

        var urlHandler = null;

        document.querySelector('#MenuItemContainer_id_10').addEventListener('click', function(){
            if (urlHandler) {
                urlHandler('http://www.edge-gamers.com/forums/forumdisplay.php?f=369', function(url){
                    openGetPostUrl(url, true, false, '');
                });
            } else {
                openGetPostUrl('http://www.edge-gamers.com/forums/forumdisplay.php?f=369', true, false, '');
            }
          });

        var urlHandler = null;

        document.querySelector('#MenuItemContainer_id_11').addEventListener('click', function(){
            if (urlHandler) {
                urlHandler('http://www.edge-gamers.com/forums/forumdisplay.php?f=871', function(url){
                    openGetPostUrl(url, true, false, '');
                });
            } else {
                openGetPostUrl('http://www.edge-gamers.com/forums/forumdisplay.php?f=871', true, false, '');
            }
          });


});
