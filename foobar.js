<!DOCTYPE html>
<html>
  
<head>
    <title>FILE UPLOAD DEMO</title>
</head>
  
<body>
    <h1>Single File Upload Demo</h1>
   
    <form action="/uploadProfilePicture" 
      enctype="multipart/form-data" method="POST">
      
        <span>Upload Profile Picture:</span>  
        <input type="file" name="mypic" required/> <br>
        <input type="submit" value="submit"> 
    </form>
</body>
  
</html>
