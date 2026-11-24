function getStudentResult(){
    return new Promise((resolve,reject) =>{
        setTimeout(()=>{
            const student =false;
            if(student){
                resolve(student);
            }else{
                reject(new Error("Student not found"));
            }
        }, 2000);
    }); 
}
getStudentResult().then((student) => {
    console.log(`Grade of ${student.name} is ${student.grade}`);
}).catch((error) =>{
    console.log("An Server error")
}).finally(() => {
    console.log("Request Completed");
})