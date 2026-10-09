function calclateForAge(info){
    const {day,month,year}=info;
    const error={ 
        day:"",
        month:"",
        year:""
       };
if(Number(day.padStart(2,"0"))  > 31){
    error.day= "Must be a valid day";
}
if(Number(month.padStart(2,'0')) > 12){
    error.month= "Must be a valid month";
}
if(Number(year) < 1970 || Number(year)  > new Date().getFullYear()){
error.year= "Must be a valid year";
}
if(Object.values(error).some((val)=>val !=""  )){

    return {
        status:422,
        data:error,
        error:true,
    }
}else{
      const result= {}
    const date= new Date();
    let yearDate= date.getFullYear();
    let monthDate= date.getMonth() +1 ;
    let dayDate= date.getDate();
    let days= dayDate - day ; 
    if(days < 0){
        const prevMonthDays = new Date(yearDate , monthDate-1 , 0).getDate();
        days+=prevMonthDays;
        monthDate--;
    }
    let months = monthDate - month;
    if(months  <0 ){
        months+=12;
        yearDate--;
    }
    result.month=months;
    result.day=days;
    result.year=yearDate-year;


    return {
      status:200,
      data:result,
    }
}

}


export default calclateForAge