
console.log("hello world")
<!DOCTYPE html>
<html>
<body>
    
    <link href="style.css" rel="stylesheet" type="text/css" />
    <script src="index.js"></script>

    <button> Hello there! </button>
    </body>
</html>

/*
<html>
    <head> 
        <script>
            function setup() {
                document.getElementById('buttonid').addEventListener('click', openDialog);
                function openDialog() {
                    document.getElementById('fileid').click();
                }
                document.getElementById('fileid').addEventListener('change', submitForm);
                function submitForm() {
                    document.getElementById('formid').submit();
                }
            }
        </script> 
    </head>
    <body onload="setup()">
        <form id='formid' action="form.php" method="POST" enctype="multipart/form-data"> 
            <input id='fileid' type='file' name='filename' hidden/>
            <input id='buttonid' type='button' value='Upload MB' /> 
            <input type='submit' value='Submit' /> 
        </form> 
    </body> 
</html>
*/
