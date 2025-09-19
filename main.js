const data = "202302";         
const time_period = "month";    

const myUrl = new URL("https://bank.gov.ua/NBUStatService/v1/statdirectory/inflation");


myUrl.searchParams.append("date", data);
myUrl.searchParams.append("period", time_period);
myUrl.searchParams.append("json", ""); // json без значення

console.log(myUrl.toString());
