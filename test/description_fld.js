/**
 * Created by _ame_ on 09.09.2018 18:47.
 */
javascript:{document.designMode = "on";document.getElementsByName('description_fld')[0].value=document.execCommand("paste");void(0)}

javascript:{var clipboard = navigator.clipboard;if (clipboard == undefined) {console.log('clipboard is undefined');} else {clipboard.writeText('stuff to write').then(function() {console.log('Copied to clipboard successfully!');}, function() {console.error('Unable to write to clipboard. :-(');});}void(0)}

javascript:{console.log(document.queryCommandEnabled('copy'));document.designMode = "on";console.log(document.queryCommandEnabled('copy'));void(0)}

javascript:{console.log(document.getElementsByName('description_fld'));console.log(document.getElementsByName('description_fld')[0].value);document.getElementsByName('description_fld')[0].value="ttt";console.log(document.getElementsByName('description_fld')[0].value);void(0)}


document.designMode = "on";
