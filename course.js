 $(function () {
           $("#dept").change(function () {
            if($(this).val() =="0") {
                   $("#dept1").hide();
                   $("#dept2").hide();
                   $("#dept3").hide();
                   $("#dept4").hide();
               } 
             else  if ($(this).val() =="1") {
                $("#dept1").show();
                   $("#dept2").hide();
                   $("#dept3").hide();
                   $("#dept4").hide();
                   $("#ui").hide();
               }
              else if ($(this).val() =="2") {
                $("#dept1").hide();
                   $("#dept2").show();
                   $("#dept3").hide();
                   $("#dept4").hide();

               } 
               else if ($(this).val() =="3") {
                $("#dept1").hide();
                   $("#dept2").hide();
                   $("#dept3").show();
                   $("#dept4").hide();

               } 
               else if ($(this).val() =="4") {
                $("#dept1").hide();
                   $("#dept2").hide();
                   $("#dept3").hide();
                   $("#dept4").show();

               } 
               else{
                $("#dept1").hide();
                   $("#dept2").hide();
                   $("#dept3").hide();
                   $("#dept4").hide();
               }
           });
       });
 function calc(){
	    var name= $('#name').val();
		var dob=$('#dob').val();
		var email= $('#email').val();
		var rn=$('#rn').val();
		var c1=$('#c1').val();
		var c2=$('#c2').val();
		var c3=$('#c3').val();
		var c4=$('#c4').val();
		var dept=$('#dept').val();
        $.ajax({
    		url     : 'store',
    		method     : 'POST',
    		data     : {name : name, dob: dob, email : email , rn:rn ,c1:c1, c2:c2, c3:c3, c4:c4, dept:dept},
    		success    : function(data){
    			console.log('data');
    		}
    		});
        alert("sucess");
        document.getElementById("myform").reset();
}