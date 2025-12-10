export default function Card({info}) {

 return(
  <>
   <p>{info.name}</p>
   <p>{info.age}</p>
   <p>{info.city}</p>
   <p>{info.job}</p>
  </>
 );

}