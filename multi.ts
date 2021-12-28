interface m1{
    name:string;
    location:string;
    getDetails();
}
class impc implements m1{
name:string="raj";
location:string="hyd";
getDetails() {
    console.log(this.name);
console.log(this.location);
}
 ic1=new impc();
 ic1.getDetails();

