$(document).ready(function(){
    $("#contactform").validate({
        rules:{
            name:{
            required:true
            },
            email:{
            required:true,
            email:true
            },
            phone:{
            required:true,
            phone:true
            },
            subject:{
            required:true,
            subject:true
            },
            issues:{
            required:true,
            issues:true
            }
        },
        messages:{
        name:{
        required:"Enter full name",
        minLength:"Enter atleast 3 charecters"
        }
        }
    })
})

