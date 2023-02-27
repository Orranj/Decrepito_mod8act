var nam, username, gender, desc, byear, prof;
nam = prompt("Please enter your full name: ");
username = prompt("Please enter your username: ")
askgender = "What is your gender?\nPress OK if you are Male\nPress Cancel if you are Female";
desc = prompt("Please type a brief description of yourself: ");
byear = prompt("Please enter your Birth Year: ");
prof = "Do you want to use a custom profile picture?";

document.getElementById("fname").innerHTML = nam;
document.getElementById("username").innerHTML = username;

if(confirm(askgender)==true){
    alert("Your profile gender is set to Male.");
    gender = "M";
}
else{
    alert("Your profile gender is set to Female.");
    gender = "F";
}
document.getElementById("gender").innerHTML = gender;
document.getElementById("desc").innerHTML = desc;
document.getElementById("year").innerHTML = byear;
document.getElementById("age").innerHTML = 2023-byear;

if(confirm(prof)==true){
    var pic = prompt("Please enter the file name of the picture. (Ex. wow.jpg)");
    alert("Profile picture has been updated.");
}
else{
    alert("No image has been set.")
}
document.getElementById("ppic").src = pic;